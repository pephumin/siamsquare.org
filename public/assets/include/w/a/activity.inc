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
if (empty($limit)) { $limit = 10; }
if ($p) { $start = ($p-1) * $limit; }
$to_record = $start + $limit;
$add = " LIMIT $start, $limit ";


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

echo "<h4>There are a total of $rows records in our database (showing results $from_record to $to_record)</h4>\n";

?>

<div class="row">
  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
    <br>
    <table class="table table-hover">
      <thead>
        <tr class="bg-success">
          <th width="20%"><i class="pe-clock-o pe-fw"></i> Time</th>
          <th width="70%"><i class="pe-tv pe-fw"></i> Activity</th>
          <?php if ($_SESSION['level'] == "9") { echo "<th width=\"10%\"><i class=\"pe-cogs pe-fw\"></i> Actions</th>"; } ?>
        </tr>
      </thead>
      <tbody>
<?php
while($r = $query1B->fetch_object()) {
  $t = ago($r->recorded);
  $color = "";
  if (preg_match("/pilot test/i", $r->data)) { $insert = "<i class=\"pe-paper-plane pe-fw\"></i> &nbsp; "; }
  else if (preg_match("/edited and saved/i", $r->data)) { $insert = "<i class=\"pe-save pe-fw\"></i> &nbsp; "; $color = "bisque"; }
  else if (preg_match("/conducted a survey/i", $r->data)) { $insert = "<i class=\"pe-plane pe-fw\"></i> &nbsp; "; $color = "aliceblue"; }
  else if (preg_match("/logged in/i", $r->data)) { $insert = "<i class=\"pe-sign-in pe-fw\"></i> &nbsp; "; }
  else if (preg_match("/logged out/i", $r->data)) { $insert = "<i class=\"pe-sign-out pe-fw\"></i> &nbsp; "; }
  else if (preg_match("/changed info/i", $r->data)) { $insert = "<i class=\"pe-cog pe-fw\"></i> &nbsp; "; }
  else if (preg_match("/changed password/i", $r->data)) { $insert = "<i class=\"pe-key pe-fw\"></i> &nbsp; "; $color = "lightsteelblue"; }
  else { $insert = ""; }
  if ($color) { $td = "<td style=\"background:$color\">"; } else { $td = "<td>"; }
  if ($insert) { $r->data = $insert." ".$r->data; } else { $r->data = $r->data; }
  echo "        <tr>\n";
  echo "          $td$t</td>\n";
  echo "          $td$r->data</td>\n";
  if ($_SESSION['level'] == "9") { echo "          <td></td>\n"; }
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
