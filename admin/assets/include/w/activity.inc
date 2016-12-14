<?php

$me = "/admin/?w=activity";
if ($_GET['p']) { $p = $_GET['p']; }
if ($p == '') { $p = "1"; }

require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/config.php';
$db = new PDO('mysql:host='. DB_HOST .';dbname='. DB_DATABASE . ';charset=utf8', DB_USER, DB_PASS);

if ($_GET['d']) {
  if ($_SESSION['level'] == "9") {
    $d = base64_decode($_GET['d']);
    $q = $db->prepare("DELETE FROM j_users_logs WHERE id = :id");
    $q->bindValue(':id', $d, PDO::PARAM_INT);
    $q->execute();
    if ($q->rowCount()) { echo mksuccess("This record has been deleted."); $notes = array (array("title" => "A recored has been deleted", "text" => "You have just deleted a log record from the system.", "image" => "assets/img/notification.svg")); }
    else { echo mkerror("Something wrong, this record has not been deleted."); }
    if ($_GET['c']) { $ex2 = "&c=".$_GET['c']; } else { $ex2 = ""; }
    if ($_GET['p']) { $ex1 = "&p=".$_GET['p']; } else { $ex1 = ""; }
    header("location: $me$ex1$ex2");
  } else { echo mkerror("Your level is not high enough to delete this data from the system."); }
}

if (empty($_GET['c'])) { $critical = ""; }
else if ($_GET['c'] == 1) { $critical = "critical = '1'"; }
else if ($_GET['c'] == 2) { $critical = "critical = '2'"; }
else if ($_GET['c'] == 3) { $critical = "critical = '3'"; }
else if ($_GET['c'] == 4) { $critical = "critical = '4'"; }
else if ($_GET['c'] == 5) { $critical = "critical = '5'"; }

if ($_SESSION['level'] == "9") {
  if ($critical != "") { $c1A = "WHERE ".$critical; } else { $c1A = ""; }
  $q1A = $db->prepare("SELECT * FROM j_users_logs ".$c1A." ORDER BY recorded DESC");
  $q1A->execute();
} elseif ($_SESSION['level'] == "6") {
  if ($critical) { $c1A = "AND ".$critical; }
  $q1 = $db->prepare("SELECT id FROM j_users WHERE companyid = :companyid");
  $q1->bindValue(':companyid', $_SESSION["companyid"], PDO::PARAM_INT);
  $q1->execute();
  while ($rr = $q1->fetchObject()) { $tt[] = $rr->id; }
  $q1A = $db->prepare("SELECT * FROM j_users_logs WHERE userid IN (".implode(',', $tt).") ".$c1A." ORDER BY recorded DESC");
  $q1A->bindValue(':userid', $_SESSION["userid"], PDO::PARAM_INT);
  $q1A->execute();
} else {
  if ($critical) { $c1A = "AND ".$critical; }
  $q1A = $db->prepare("SELECT * FROM j_users_logs WHERE userid = :userid ".$c1A." ORDER BY recorded DESC");
  $q1A->bindValue(':userid', $_SESSION["userid"], PDO::PARAM_INT);
  $q1A->execute();
}

if (empty($start)) { $start = 0; }
if (empty($limit)) { $limit = 100; }
if ($p) { $start = ($p-1) * $limit; }
$to_record = $start + $limit;
$add = " LIMIT $start, $limit ";

$rows = $q1A->rowCount();
$total = ceil($rows/$limit);
$offset = ($currentpage - 1) * $rowsperpage;
// if ($p > $total) { $p = $total; }

if ($_SESSION['level'] == "9") {
  if ($critical != "") { $c1B = "WHERE ".$critical; } else { $c1B = ""; }
  $q1B = $db->prepare("SELECT * FROM j_users_logs ".$c1B." ORDER BY recorded DESC ".$add." ");
  $q1B->execute();
} elseif ($_SESSION['level'] == "6") {
  if ($critical) { $c1B = "AND ".$critical; }
  $q1 = $db->prepare("SELECT id FROM j_users WHERE companyid = :companyid");
  $q1->bindValue(':companyid', $_SESSION["companyid"], PDO::PARAM_INT);
  $q1->execute();
  while ($rr = $q1->fetchObject()) { $tt[] = $rr->id; }
  $q1B = $db->prepare("SELECT * FROM j_users_logs WHERE userid IN (".implode(',', $tt).") ".$c1B." ORDER BY recorded DESC ".$add." ");
  $q1B->bindValue(':userid', $_SESSION["userid"], PDO::PARAM_INT);
  $q1B->execute();
} else {
  if ($critical) { $c1B = "AND ".$critical; }
  $q1B = $db->prepare("SELECT * FROM j_users_logs WHERE userid = :userid ".$c1B." ORDER BY recorded DESC ".$add." ");
  $q1B->bindValue(':userid', $_SESSION["userid"], PDO::PARAM_INT);
  $q1B->execute();
}

if ($to_record > $rows) { $to_record = $rows; }
$from_record = $start + 1;

$title = "Activity";
pageHeader($title);
echo "<h2>$title</h2>";
echo "<p>This page shows the activities sorted by time where the most recent activity is on the top of the list. While the default is set to have each user only sees his/her own activity, users with a higher access permission will also see the activity of other members within the same group.</p>\n";
echo "<p>Feel free to contact us if you find any problems using our site. Any other suggestions are also more than welcome.</p>\n";
echo "<br>\n";
echo "<h4>Found a total of $rows records in our database (showing results $from_record to $to_record)</h4>\n";

if (empty($_GET['c'])) { echo "<div class=\"pull-right\">Select critical level [ <strong>All</strong> : <a href=\"".htmlspecialchars($me."&c=1")."\">1</a> : <a href=\"".htmlspecialchars($me."&c=2")."\">2</a> : <a href=\"".htmlspecialchars($me."&c=3")."\">3</a> : <a href=\"".htmlspecialchars($me."&c=4")."\">4</a> : <a href=\"".htmlspecialchars($me."&c=5")."\">5</a> ]</div>\n"; }
else if ($_GET['c'] == 1) { echo "<div class=\"pull-right\">Select critical level [ <a href=\"".htmlspecialchars($me)."\">All</a> : <strong>1</strong> : <a href=\"".htmlspecialchars($me."&c=2")."\">2</a> : <a href=\"".htmlspecialchars($me."&c=3")."\">3</a> : <a href=\"".htmlspecialchars($me."&c=4")."\">4</a> : <a href=\"".htmlspecialchars($me."&c=5")."\">5</a> ]</div>\n"; }
else if ($_GET['c'] == 2) { echo "<div class=\"pull-right\">Select critical level [ <a href=\"".htmlspecialchars($me)."\">All</a> : <a href=\"".htmlspecialchars($me."&c=1")."\">1</a> : <strong>2</strong> : <a href=\"".htmlspecialchars($me."&c=3")."\">3</a> : <a href=\"".htmlspecialchars($me."&c=4")."\">4</a> : <a href=\"".htmlspecialchars($me."&c=5")."\">5</a> ]</div>\n"; }
else if ($_GET['c'] == 3) { echo "<div class=\"pull-right\">Select critical level [ <a href=\"".htmlspecialchars($me)."\">All</a> : <a href=\"".htmlspecialchars($me."&c=1")."\">1</a> : <a href=\"".htmlspecialchars($me."&c=2")."\">2</a> : <strong>3</strong> : <a href=\"".htmlspecialchars($me."&c=4")."\">4</a> : <a href=\"".htmlspecialchars($me."&c=5")."\">5</a> ]</div>\n"; }
else if ($_GET['c'] == 4) { echo "<div class=\"pull-right\">Select critical level [ <a href=\"".htmlspecialchars($me)."\">All</a> : <a href=\"".htmlspecialchars($me."&c=1")."\">1</a> : <a href=\"".htmlspecialchars($me."&c=2")."\">2</a> : <a href=\"".htmlspecialchars($me."&c=3")."\">3</a> : <strong>4</strong> : <a href=\"".htmlspecialchars($me."&c=5")."\">5</a> ]</div>\n"; }
else if ($_GET['c'] == 5) { echo "<div class=\"pull-right\">Select critical level [ <a href=\"".htmlspecialchars($me)."\">All</a> : <a href=\"".htmlspecialchars($me."&c=1")."\">1</a> : <a href=\"".htmlspecialchars($me."&c=2")."\">2</a> : <a href=\"".htmlspecialchars($me."&c=3")."\">3</a> : <a href=\"".htmlspecialchars($me."&c=4")."\">4</a> : <strong>5</strong> ]</div>\n"; }

?>

<div class="row">
  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
    <br>
    <table class="table table-condensed table-hover">
      <thead>
        <tr class="bg-primary">
          <th width="15%"><small><i class="pe-clock-o pe-fw"></i> Time</small></th>
          <th width="75%"><small><i class="pe-map-o pe-fw"></i> Activity</small></th>
          <?php if ($_SESSION['level'] == "9") { echo "<th width=\"10%\"></th>\n"; } ?>
        </tr>
      </thead>
      <tbody>
<?php
while ($r = $q1B->fetchObject()) {
  $t = ago($r->recorded);
  if ($_GET['p']) { $ex1 = "&p=".$_GET['p']; } else { $ex1 = ""; }
  if ($_GET['c']) { $ex2 = "&c=".$_GET['c']; } else { $ex2 = ""; }
  $delete = ADMIN."?w=activity&d=".base64_encode($r->id).$ex1.$ex2;
  $r->data = iconize($r->data);
  if (empty($_GET['c'])) {
    if ($r->critical == 4) { $color = "#F0F8FF"; }
    else if ($r->critical == 5) { $color = "#BDEDFF"; }
    else { $color = ""; }
  }
  if ($color) { $td = "<td style=\"background:$color\"><small>"; } else { $td = "<td><small>"; }
  echo "        <tr>\n";
  echo "          $td$t</small></td>\n";
  echo "          $td$r->data</small></td>\n";
  if ($_SESSION['level'] == "9") { echo "          $td<a href=\"\" data-href=\"$delete\" class=\"btn btn-danger btn-tiny\" data-toggle=\"modal\" data-target=\"#confirm-delete\">Delete <i class=\"pe-trash-o\"></i></a></small></td>\n"; }
  echo "        </tr>\n";
}
?>
      </tbody>
    </table>
  </div>
</div>

<div class="modal fade" id="confirm-delete" tabindex="-1" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
        <h4>Confirm delete?</h4>
        <p>
          Are you sure that you want to delete this record permanently?
        </p>
        <p>
          <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
          <a href="" class="btn btn-danger btn-ok">Delete <i class="pe-trash-o"></i></a>
        </p>
      </div>
    </div>
  </div>
</div>

<script type="text/javascript">
  $('#confirm-delete').on('show.bs.modal', function(e) {
    $(this).find('.btn-ok').attr('href', $(e.relatedTarget).data('href'));
  });
</script>

<?php

echo "<nav class=\"pagination-centered\">\n";
echo "  <ul class=\"pagination\">\n";
if ($p > 1) { $previous = $p-1; echo "    <li><a class=\"btn btn-sm\" role=\"button\" href=\"".ADMIN."?w=activity&c=".$_GET['c']."&p=".$previous."\">&laquo;</a></li>\n"; }
else { echo "    <li class=\"disabled\"><a class=\"btn btn-sm\" role=\"button\" href=\"\">&laquo;</a></li>\n"; }
for ($i=1; $i<=$total; $i++) {
  if ($i == $p) { echo "    <li class=\"active\"><a class=\"btn btn-sm\" role=\"button\" href=\"".ADMIN."?w=activity&c=".$_GET['c']."&p=".$i."\">".$i."</a></li>\n"; }
  else { echo "    <li><a class=\"btn btn-sm\" role=\"button\" href=\"".ADMIN."?w=activity&c=".$_GET['c']."&p=".$i."\">".$i."</a></li>\n"; }
}
if ($p != $total) { $next = $p+1; echo "    <li><a class=\"btn btn-sm\" role=\"button\" href=\"".ADMIN."?w=activity&c=".$_GET['c']."&p=".$next."\">&raquo;</a></li>\n"; }
else { echo "    <li class=\"disabled\"><a class=\"btn btn-sm\" role=\"button\" href=\"\">&raquo;</a></li>\n"; }
echo "  </ul>\n";
echo "</nav>\n\n";

if ($notes) { pageFooter($notes); } else { pageFooter(); }

?>
