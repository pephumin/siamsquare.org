<?php

$title = "Activity";
pageHeader($title);
echo "<h2>$title</h2>";
echo "<p>This page shows the activities sorted by time where the most recent activity is on the top of the list. While the default is set to have each user only sees his/her own activity, users with a higher access permission will also see the activity of other members within the same group.</p>\n";
echo "<p>Feel free to contact us if you find any problems using our site. Any other suggestions are also more than welcome.</p>\n";
echo "<br>\n";

if ($_GET['p']) { $p = $_GET['p']; }
if ($p == '') { $p = "1"; }

if (empty($start)) { $start = 0; }
if (empty($limit)) { $limit = 100; }
if ($p) { $start = ($p-1) * $limit; }
$to_record = $start + $limit;
$add = " LIMIT $start, $limit ";

require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/config.php';
$db = new PDO('mysql:host='. DB_HOST .';dbname='. DB_DATABASE . ';charset=utf8', DB_USER, DB_PASS);

if ($_GET['d']) {
  if ($_SESSION['levelid'] == "9") {
    $d = base64_decode($_GET['d']);
    $q = $db->prepare("DELETE FROM j_users_logs WHERE id = :id");
    $q->bindValue(':id', $d, PDO::PARAM_INT);
    $q->execute();
    if ($q->rowCount()) { echo mksuccess("This record has been deleted."); $notes = array (array("title" => "A recored has been deleted", "text" => "You have just deleted a log record from the system.", "image" => "assets/img/notification.svg")); }
    else { echo mkerror("Something wrong, this record has not been deleted."); }
  }
  else { echo mkerror("Your level is not high enough to delete this data from the system."); }
}

if ($_SESSION['levelid'] == "9") {
  $qA = $db->prepare("SELECT * FROM j_users_logs ORDER BY recorded DESC");
  $qB = $db->prepare("SELECT * FROM j_users_logs ORDER BY recorded DESC ".$add." ");
} elseif ($_SESSION['levelid'] == "6") {
  $q1A = $db->prepare("SELECT id FROM j_users WHERE companyid = :companyid");
  $q1A->bindValue(':companyid', $_SESSION["companyid"], PDO::PARAM_INT);
  $q1A->execute();
  while ($rr = $q1A->fetchObject()) { $tt[] = $rr->id; }
  $qA = $db->prepare("SELECT * FROM j_users_logs WHERE userid IN (".implode(',', $tt).") ORDER BY recorded DESC");
  $qB = $db->prepare("SELECT * FROM j_users_logs WHERE userid IN (".implode(',', $tt).") ORDER BY recorded DESC ".$add." ");
  $qA->bindValue(':userid', $_SESSION["userid"], PDO::PARAM_INT);
  $qB->bindValue(':userid', $_SESSION["userid"], PDO::PARAM_INT);
} else {
  $qA = $db->prepare("SELECT * FROM j_users_logs WHERE userid = :userid ORDER BY recorded DESC");
  $qB = $db->prepare("SELECT * FROM j_users_logs WHERE userid = :userid ORDER BY recorded DESC ".$add." ");
  $qA->bindValue(':userid', $_SESSION["userid"], PDO::PARAM_INT);
  $qB->bindValue(':userid', $_SESSION["userid"], PDO::PARAM_INT);
}

$qA->execute();
$qB->execute();
$rows = $qA->rowCount();

if ($to_record > $rows) { $to_record = $rows; }
$from_record = $start + 1;

echo "<h4>There are a total of $rows records in our database (showing results $from_record to $to_record)</h4>\n";

?>

<div class="row">
  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
    <br>
    <table class="table table-condensed table-hover">
      <thead>
        <tr class="bg-primary">
          <th width="15%"><small><i class="pe-clock-o pe-fw"></i> Time</small></th>
          <th width="75%"><small><i class="pe-map-o pe-fw"></i> Activity</small></th>
          <?php if ($_SESSION['levelid'] == "9") { echo "<th width=\"10%\"></th>\n"; } ?>
        </tr>
      </thead>
      <tbody>
<?php
while ($r = $qB->fetchObject()) {
  $t = ago($r->recorded);
  $color = "";
  if ($_GET['p']) { $delete = MYADMIN."?w=activity&d=".base64_encode($r->id)."&p=".$_GET['p']; } else { $delete = MYADMIN."?w=activity&d=".base64_encode($r->id); }
  $r->data = iconize($r->data);
  if (preg_match("/deleted a survey/i", $r->data)) { $color = "aliceblue"; }
  else if (preg_match("/tried accessing/i", $r->data)) { $color = "lightsteelblue"; }
  else if (preg_match("/tried editing/i", $r->data)) { $color = "lightsteelblue"; }
  else if (preg_match("/created a new survey/i", $r->data)) { $color = "skyblue"; }
  else if (preg_match("/created a new member/i", $r->data)) { $color = "skyblue"; }
  else if (preg_match("/deleted a member/i", $r->data)) { $color = "aliceblue"; }
  if ($color) { $td = "<td style=\"background:$color\"><small>"; } else { $td = "<td><small>"; }
  echo "        <tr>\n";
  echo "          $td$t</small></td>\n";
  echo "          $td$r->data</small></td>\n";
  if ($_SESSION['levelid'] == "9") { echo "          $td<a href=\"\" data-href=\"$delete\" class=\"btn btn-danger btn-tiny\" data-toggle=\"modal\" data-target=\"#confirm-delete\">Delete <i class=\"pe-trash-o\"></i></a></small></td>\n"; }
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

$total = ceil($rows/$limit);
$offset = ($currentpage - 1) * $rowsperpage;
echo "<nav class=\"pagination-centered\">\n";
echo "  <ul class=\"pagination\">\n";
if ($p > 1) { $previous = $p-1; echo "    <li><a class=\"btn btn-sm\" role=\"button\" href=\"".MYADMIN."?w=activity&p=".$previous."\">&laquo;</a></li>\n"; }
else { echo "    <li class=\"disabled\"><a class=\"btn btn-sm\" role=\"button\" href=\"\">&laquo;</a></li>\n"; }
for ($i=1; $i<=$total; $i++) {
  if ($i == $p) { echo "    <li class=\"active\"><a class=\"btn btn-sm\" role=\"button\" href=\"".MYADMIN."?w=activity&p=".$i."\">".$i."</a></li>\n"; }
  else { echo "    <li><a class=\"btn btn-sm\" role=\"button\" href=\"".MYADMIN."?w=activity&p=".$i."\">".$i."</a></li>\n"; }
}
if ($p != $total) { $next = $p+1; echo "    <li><a class=\"btn btn-sm\" role=\"button\" href=\"".MYADMIN."?w=activity&p=".$next."\">&raquo;</a></li>\n"; }
else { echo "    <li class=\"disabled\"><a class=\"btn btn-sm\" role=\"button\" href=\"\">&raquo;</a></li>\n"; }
echo "  </ul>\n";
echo "</nav>\n\n";

if ($notes) { pageFooter($notes); } else { pageFooter(); }

?>
