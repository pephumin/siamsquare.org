<?php

if ($_GET['p']) { $p = $_GET['p']; }
if ($p == '') { $p = "1"; }

if (empty($start)) { $start = 0; }
if (empty($limit)) { $limit = 10; }
if ($p) { $start = ($p-1) * $limit; }
$to_record = $start + $limit;
$add = " LIMIT $start, $limit ";

$title = "View activity";
pageHeader($title);

echo "<h2>$title</h2>";

require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/config.php';
$db = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_DATABASE);
if (!$db->set_charset("utf8")) { $errors[] = $db->error; }

if ($_SESSION['userid'] == "1") {
  $sql1A = "SELECT * FROM j_users_logs ORDER BY recorded DESC;";
  $sql1B = "SELECT * FROM j_users_logs ORDER BY recorded DESC ".$add.";";
} else {
  $sql1A = "SELECT * FROM j_users_logs WHERE userid = '".$_SESSION['userid']."' ORDER BY recorded DESC;";
  $sql1B = "SELECT * FROM j_users_logs WHERE userid = '".$_SESSION['userid']."' ORDER BY recorded DESC ".$add.";";
}

$query1A = $db->query($sql1A);
$query1B = $db->query($sql1B);
$rows = $query1A->num_rows;

if ($to_record > $rows) { $to_record = $rows; }
$from_record = $start + 1;

echo "<p>There are a total of $rows records in our database (showing results $from_record to $to_record)</p>\n";

?>

<div class="row">
  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
    <br>
    <table class="table table-hover">
      <thead>
        <tr class="bg-success">
          <th width="30%"><i class="pe-calendar pe-fw"></i> Date</th>
          <th width="40%"><i class="pe-tv pe-fw"></i> Activity</th>
          <th width="30%"><i class="pe-cogs pe-fw"></i> Actions</th>
        </tr>
      </thead>
      <tbody>
<?php
while($r = $query1B->fetch_object()) {
  $t = ago($r->recorded);
  echo "        <tr>\n";
  echo "          <td>$t</td>\n";
  echo "          <td>$r->data</td>\n";
  echo "          <td></td>\n";
  echo "        </tr>\n";
}
?>
      </tbody>
    </table>
  </div>
</div>

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
