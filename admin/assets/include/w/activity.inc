<?php

$base = "/admin/?w=activity";
if ($_GET['p']) { $p = $_GET['p']; $me = $base."&p=".$_GET['p']; }
if ($p == '') { $p = "1"; }

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
    if ($_GET['size']) { $ex3 = "&p=".$_GET['size']; } else { $ex3 = ""; }
    header("location: $base$ex1$ex2$ex3");
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

$rows = $q1A->rowCount();

if ($_REQUEST['size']) {
  $limit = $_REQUEST['size'];
  if ($_GET['p']) { $me = $base."&size=".$_REQUEST['size']; }
  else { $me = $base."&p=".$_GET['p']."&size=".$_REQUEST['size']; }
} else {
  if ($rows <= 100) { $limit = 20; }
  else if ($rows > 100 && $rows <= 250) { $limit = 50; }
  else if ($rows > 250 && $rows <= 500) { $limit = 100; }
  else if ($rows > 500 && $rows <= 1000) { $limit = 200; }
  else if ($rows > 1000) { $limit = 500; }
}

$total = ceil($rows/$limit);
// if ($p > $total) { $p = $total; }

if (empty($start)) { $start = 0; }
if (empty($limit)) { $limit = 100; }
if ($p) { $start = ($p-1) * $limit; }
$to_record = $start + $limit;
$add = " LIMIT $start, $limit ";

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

$me = $base."&size=".$_REQUEST['size']."&c=".$_REQUEST['c'];
$pagination = "<nav class=\"pagination-centered\" id=\"pagination\">\n";
$pagination .= "  <ul class=\"pagination\">\n";
if ($p > 1) { $previous = $p-1; $pagination .= "    <li><a class=\"btn btn-sm\" role=\"button\" href=\"".$me."&p=".$previous."\">&laquo;</a></li>\n"; }
else { $pagination .= "    <li class=\"disabled\"><a class=\"btn btn-sm\" role=\"button\" href=\"\">&laquo;</a></li>\n"; }
for ($i=1; $i<=$total; $i++) {
  if ($i == $p) { $pagination .= "    <li class=\"active\"><a class=\"btn btn-sm\" role=\"button\" href=\"".$me."&p=".$i."\">".$i."</a></li>\n"; }
  else { $pagination .= "    <li><a class=\"btn btn-sm\" role=\"button\" href=\"".$me."&p=".$i."\">".$i."</a></li>\n"; }
}
if ($p != $total) { $next = $p+1; $pagination .= "    <li><a class=\"btn btn-sm\" role=\"button\" href=\"".$me."&p=".$next."\">&raquo;</a></li>\n"; }
else { $pagination .= "    <li class=\"disabled\"><a class=\"btn btn-sm\" role=\"button\" href=\"\">&raquo;</a></li>\n"; }
$pagination .= "  </ul>\n";
$pagination .= "</nav>\n\n";

$title = "Activity";
pageHeader($title);
echo "<h2>$title</h2>";
echo "<p>This page shows the activities sorted by time where the most recent activity is on the top of the list. While the default is set to have each user only sees his/her own activity, users with a higher access permission will also see the activity of other members within the same group.</p>\n";
echo "<p>Feel free to contact us if you find any problems using our site. Any other suggestions are also more than welcome.</p>\n";
echo "<br>\n";

$me = $base."&size=".$_REQUEST['size']."&p=".$_REQUEST['p'];
if (empty($_GET['c'])) { echo "<div class=\"pull-right\">Select critical level [ <strong>All</strong> : <a href=\"".htmlspecialchars($me."&c=1")."\">1</a> : <a href=\"".htmlspecialchars($me."&c=2")."\">2</a> : <a href=\"".htmlspecialchars($me."&c=3")."\">3</a> : <a href=\"".htmlspecialchars($me."&c=4")."\">4</a> : <a href=\"".htmlspecialchars($me."&c=5")."\">5</a> ]</div>\n"; }
else if ($_GET['c'] == 1) { echo "<div class=\"pull-right\">Select critical level [ <a href=\"".htmlspecialchars($me)."\">All</a> : <strong>1</strong> : <a href=\"".htmlspecialchars($me."&c=2")."\">2</a> : <a href=\"".htmlspecialchars($me."&c=3")."\">3</a> : <a href=\"".htmlspecialchars($me."&c=4")."\">4</a> : <a href=\"".htmlspecialchars($me."&c=5")."\">5</a> ]</div>\n"; }
else if ($_GET['c'] == 2) { echo "<div class=\"pull-right\">Select critical level [ <a href=\"".htmlspecialchars($me)."\">All</a> : <a href=\"".htmlspecialchars($me."&c=1")."\">1</a> : <strong>2</strong> : <a href=\"".htmlspecialchars($me."&c=3")."\">3</a> : <a href=\"".htmlspecialchars($me."&c=4")."\">4</a> : <a href=\"".htmlspecialchars($me."&c=5")."\">5</a> ]</div>\n"; }
else if ($_GET['c'] == 3) { echo "<div class=\"pull-right\">Select critical level [ <a href=\"".htmlspecialchars($me)."\">All</a> : <a href=\"".htmlspecialchars($me."&c=1")."\">1</a> : <a href=\"".htmlspecialchars($me."&c=2")."\">2</a> : <strong>3</strong> : <a href=\"".htmlspecialchars($me."&c=4")."\">4</a> : <a href=\"".htmlspecialchars($me."&c=5")."\">5</a> ]</div>\n"; }
else if ($_GET['c'] == 4) { echo "<div class=\"pull-right\">Select critical level [ <a href=\"".htmlspecialchars($me)."\">All</a> : <a href=\"".htmlspecialchars($me."&c=1")."\">1</a> : <a href=\"".htmlspecialchars($me."&c=2")."\">2</a> : <a href=\"".htmlspecialchars($me."&c=3")."\">3</a> : <strong>4</strong> : <a href=\"".htmlspecialchars($me."&c=5")."\">5</a> ]</div>\n"; }
else if ($_GET['c'] == 5) { echo "<div class=\"pull-right\">Select critical level [ <a href=\"".htmlspecialchars($me)."\">All</a> : <a href=\"".htmlspecialchars($me."&c=1")."\">1</a> : <a href=\"".htmlspecialchars($me."&c=2")."\">2</a> : <a href=\"".htmlspecialchars($me."&c=3")."\">3</a> : <a href=\"".htmlspecialchars($me."&c=4")."\">4</a> : <strong>5</strong> ]</div>\n"; }

echo "<br><br>\n";
// echo "<p>Found a total of $rows records in our database (showing results $from_record to $to_record)</p>\n";
echo "<div class=\"row\">\n";
echo "  <div class=\"col-sm-9\">\n";
echo "    <span class=\"blue\">Found <strong>$rows records</strong> in our database<br><small>(showing results $from_record to $to_record)</small></span>\n";
echo "  </div>\n";
echo "  <div class=\"col-sm-3\" style=\"text-align:right\"><form method=\"post\" class=\"form-inline\" action=\"$me\">\n";
echo "    <small >Select display size:</small>\n";
echo "    <select class=\"form-control input-sm\" name=\"size\" onchange=\"this.form.submit()\">\n";
if ($limit == "20") { echo "      <option selected>20</option>\n"; } else { echo "      <option>20</option>\n"; }
if ($limit == "50") { echo "      <option selected>50</option>\n"; } else { echo "      <option>50</option>\n"; }
if ($limit == "100") { echo "      <option selected>100</option>\n"; } else { echo "      <option>100</option>\n"; }
if ($limit == "200") { echo "      <option selected>200</option>\n"; } else { echo "      <option>200</option>\n"; }
if ($limit == "500") { echo "      <option selected>500</option>\n"; } else { echo "      <option>500</option>\n"; }
echo "    </select>\n";
echo "  </form></div>\n";
echo "</div>\n";

?>

<div class="row">
  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
    <br>
    <table class="table table-condensed table-hover" id="showme">
      <thead>
        <tr class="bg-primary">
          <th width="15%"><small><i class="pe-clock-o pe-fw"></i> Time</small></th>
          <th width="75%"><small><i class="pe-map-o pe-fw"></i> Activity</small></th>
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
  if ($_SESSION['level'] == "9") { $del = " <a href=\"\" data-href=\"$delete\" class=\"btn btn-danger btn-tiny pull-right\" data-toggle=\"modal\" data-target=\"#confirm-delete\">Delete <i class=\"pe-trash-o\"></i></a>\n"; }
  echo "        <tr>\n";
  echo "          $td$t</small></td>\n";
  echo "          $td$r->data</small>$del</td>\n";
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

<?php echo "<p align=\"center\">".$pagination."</p><br>\n"; ?>

<script type="text/javascript">
  $('#confirm-delete').on('show.bs.modal', function(e) {
    $(this).find('.btn-ok').attr('href', $(e.relatedTarget).data('href'));
  });
</script>

<!-- <script type="text/javascript" src="//cdn.datatables.net/1.10.13/js/jquery.dataTables.min.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.13/css/jquery.dataTables.min.css"> -->

<script type="text/javascript">
  // $(document).ready(function() {
  //   $('a[data-toggle="tab"]').on( 'shown.bs.tab', function (e) {
  //       $.fn.dataTable.tables( {visible: true, api: true} ).columns.adjust();
  //   });
  //   $('#showme').DataTable({
  //     "pagingType": "simple_numbers",
  //     // "paging":   false,
  //     // "ordering": false,
  //     // "info":     false,
  //     "order": [[ 0, "desc" ]],
  //     "lengthMenu": [[25, 50, 100, 200, 500, -1], [25, 50, 100, 200, 500, "ALL"]],
  //   });
  //   $('a.toggle-vis').on( 'click', function (e) {
  //     e.preventDefault();
  //     var column = table.column( $(this).attr('data-column') );
  //     column.visible( ! column.visible() );
  //   });
  // });
</script>

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
