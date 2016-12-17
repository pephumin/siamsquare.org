<?php

require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/config.php';
$db = new PDO('mysql:host='. DB_HOST .';dbname='. DB_DATABASE . ';charset=utf8', DB_USER, DB_PASS);

// Get company information (e.g. logo, website, etc.)
$q1 = $db->prepare("SELECT * FROM j_companies WHERE id = :companyid");
$q1->bindValue(':companyid', $_SESSION["companyid"], PDO::PARAM_INT);
$q1->execute();
if ($q1->rowCount()) {
  $r = $q1->fetchObject();
  if ($r->logo) { $d1 = "<img src=\"$r->logo\" title=\"$r->company\">"; }
  if ($r->website) { $d2 = "<a href=\"$r->website\" title=\"$r->company\" target=\"_blank\">$d1</a>"; } else { $d2 = $d1; }
  $clientlogo = "<div class=\"pull-right\" style=\"margin-top:0px\">$d2</div>\n";
  $companyname = $r->company;
}

$title = "Client's dashboard";
pageHeader($title);
echo $clientlogo;
echo "<h2>Welcome ".$_SESSION['fullname']."</h2>\n";
echo "<p>This is the main dashboard where you can find the overview of the information regarding to youself.</p>\n";
echo "<p>Although we build this website with an objective of being an easy for self-administration, we are still happy to support you in any cases. Should you need anything, please feel free to <a href=\"/admin/contact/\">contact us</a>.</p>\n";
echo "<hr>\n";

if (isset($login)) {
  if ($login->errors) { foreach ($login->errors as $error) { echo $error; } }
  if ($login->messages) { foreach ($login->messages as $message) { echo $message; } }
}

// Count different project status for this user
$q1 = $db->prepare("SELECT SUM(status='1') AS iB, SUM(status='2') AS iiB, SUM(status='3') AS iiiB, SUM(status='4') AS iiiiB FROM j_projects WHERE companyid = :companyid AND userid = :userid");
$q1->bindValue(':companyid', $_SESSION["companyid"], PDO::PARAM_INT);
$q1->bindValue(':userid', $_SESSION["userid"], PDO::PARAM_INT);
$q1->execute();
while ($row = $q1->fetchObject()) {
  $status1 = $row->iB; $status2 = $row->iiB;
  $status3 = $row->iiiB; $status4 = $row->iiiiB;
}
$totalALL = $status1 + $status2 + $status3 + $status4; $percentTotal = percent($totalALL / $totalALL);
$totalActive = $status1 + $status2 + $status3; $totalInactive = $status4;
$percentActive = percent($totalActive / $totalALL); $percentInactive = percent($totalInactive / $totalALL);
$percentStatus1 = percent($status1 / $totalALL); $percentStatus2 = percent($status2 / $totalALL);
$percentStatus3 = percent($status3 / $totalALL); $percentStatus4 = percent($status4 / $totalALL);
?>

<h3>Your projects</h3>

<div class="row">
  <div class="col-xs-12 col-sm-5 col-md-5 col-lg-5">
    <p>You have <strong><?php echo $totalALL; ?> survey projects</strong> which can be broken down into different stages as shown below.</p>
    <table class="table table-hover small">
      <thead>
        <tr class="bg-primary">
          <th>Stage</th>
          <th style="text-align:right">Projects (%)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Set-up</td>
          <td align="right"><?php echo $status1; ?> (<?php echo $percentStatus1; ?>)</td>
        </tr>
        <tr>
          <td>Data-collection</td>
          <td align="right"><?php echo $status2; ?> (<?php echo $percentStatus2; ?>)</td>
        </tr>
        <tr>
          <td>Completed</td>
          <td align="right"><?php echo $status3; ?> (<?php echo $percentStatus3; ?>)</td>
        </tr>
        <tr>
          <td>Archived</td>
          <td align="right"><?php echo $status4; ?> (<?php echo $percentStatus4; ?>)</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
    <div id="piechart" style="width: auto; height: 300px;"></div>
  </div>
</div>

<br>

<?php
$i = 0; $height = "70";
$today['year'] = date("Y"); $today['month'] = date("m"); $today['day'] = date("d"); $today['month'] = $today['month']-1;
$timelinedata = "[ \n"; $colordata = "[ ";
// Pull survey information for this user
$q2 = $db->prepare("SELECT * FROM j_projects WHERE companyid = :companyid AND userid = :userid AND status >= 1 ORDER BY status ASC, created DESC");
$q2->bindValue(':companyid', $_SESSION["companyid"], PDO::PARAM_INT);
$q2->bindValue(':userid', $_SESSION["userid"], PDO::PARAM_INT);
$q2->execute();
$rows = $q2->fetchAll(PDO::FETCH_ASSOC);
foreach ($rows as $row) {
  $id = $row['id'];
  $title = $row['title'];
  if ($row['created']) { $L0 = date_parse_from_format("Y-m-d H:i:s", $row['created']); $L0['month'] = $L0['month']-1; $created = ago($row['created']); }
  if ($row['L1']) { $L1 = date_parse_from_format("Y-m-d H:i:s", $row['L1']); $L1['month'] = $L1['month']-1; $LL1 = ago($row['L1']); } else { $LL1 = "-"; }
  if ($row['L2']) { $L2 = date_parse_from_format("Y-m-d H:i:s", $row['L2']); $L2['month'] = $L2['month']-1; $LL2 = ago($row['L2']); } else { $LL2 = "-"; }
  if ($row['L3']) { $L3 = date_parse_from_format("Y-m-d H:i:s", $row['L3']); $L3['month'] = $L3['month']-1; $LL3 = ago($row['L3']); } else { $LL3 = "-"; }
  if ($row['status'] == 1) {
    $ss = "  <i class=\"pe-hourglass-start pe-fw\"></i> Set-up (since: ".ago($row['created']).")";
    $status = "Set-up";
    $timelinedata .= "[ '".$title."', 'Set-up', new Date(".$L0['year'].", ".$L0['month'].", ".$L0['day']."), new Date(".$today['year'].", ".$today['month'].", ".$today['day'].") ], \n"; $colordata .= "'#B3FFB3', ";
  }
  else if ($row['status'] == 2) {
    $ss = "<i class=\"pe-hourglass-half pe-fw\"></i> Data-collection (since: ".ago($row['L1']).")";
    $status = "Data-collection";
    $timelinedata .= "[ '".$title."', 'Set-up', new Date(".$L0['year'].", ".$L0['month'].", ".$L0['day']."), new Date(".$L1['year'].", ".$L1['month'].", ".$L1['day'].") ], \n"; $colordata .= "'#B3FFB3', ";
    $timelinedata .= "[ '".$title."', 'Data-collection', new Date(".$L1['year'].", ".$L1['month'].", ".$L1['day']."), new Date(".$today['year'].", ".$today['month'].", ".$today['day'].") ], \n"; $colordata .= "'#00E600', ";
  }
  else if ($row['status'] == 3) {
    $ss = "<i class=\"pe-hourglass-end pe-fw\"></i> Completed (since: ".ago($row['L2']).")";
    $status = "Completed";
    $timelinedata .= "[ '".$title."', 'Set-up', new Date(".$L0['year'].", ".$L0['month'].", ".$L0['day']."), new Date(".$L1['year'].", ".$L1['month'].", ".$L1['day'].") ], \n"; $colordata .= "'#B3FFB3', ";
    $timelinedata .= "[ '".$title."', 'Data-collection', new Date(".$L1['year'].", ".$L1['month'].", ".$L1['day']."), new Date(".$L2['year'].", ".$L2['month'].", ".$L2['day'].") ], \n"; $colordata .= "'#00E600', ";
    $timelinedata .= "[ '".$title."', 'Completed', new Date(".$L2['year'].", ".$L2['month'].", ".$L2['day']."), new Date(".$today['year'].", ".$today['month'].", ".$today['day'].") ], \n"; $colordata .= "'#009900', ";
  }
  else if ($row['status'] == 4) {
    $ss = "<i class=\"pe-archive pe-fw\"></i> Archived (since: ".ago($row['L3']).")";
    $status = "Archived";
    $timelinedata .= "[ '".$title."', 'Set-up', new Date(".$L0['year'].", ".$L0['month'].", ".$L0['day']."), new Date(".$L1['year'].", ".$L1['month'].", ".$L1['day'].") ], \n"; $colordata .= "'#B3FFB3', ";
    $timelinedata .= "[ '".$title."', 'Data-collection', new Date(".$L1['year'].", ".$L1['month'].", ".$L1['day']."), new Date(".$L2['year'].", ".$L2['month'].", ".$L2['day'].") ], \n"; $colordata .= "'#00E600', ";
    $timelinedata .= "[ '".$title."', 'Completed', new Date(".$L2['year'].", ".$L2['month'].", ".$L2['day']."), new Date(".$L3['year'].", ".$L3['month'].", ".$L3['day'].") ], \n"; $colordata .= "'#009900', ";
    $timelinedata .= "[ '".$title."', 'Archived', new Date(".$L3['year'].", ".$L3['month'].", ".$L3['day']."), new Date(".$today['year'].", ".$today['month'].", ".$today['day'].") ], \n"; $colordata .= "'#AAAAAA', ";
  }
  $updated = ago($row['updated']);
  if ($row['private'] == 1) { $private = "<span class=\"label label-success\">PRIVATE</span>"; } else { $private = ""; }
  $i++; $height = $height + "40";
}
$timelinedata .= " ]";
$colordata = substr($colordata, 0, -2);
$colordata .= " ]";
?>

<div id="timeline"></div>
<p align="right"><a href="/admin/?w=surveys" class="small">More...</a></p>
<hr>


<?php if ($_SESSION["avatar"]) { echo "<div class=\"pull-right\" style=\"margin-top:5px\"><img src=\"".$_SESSION["avatar"]."\" class=\"img-circle members-photo\" alt=\"Avatar\"></div>\n"; } ?>
<h3>Message board</h3>
<div class="row">
  <div class="col-sm-9">
    <!-- <h4>Announcements</h4> -->
<?php
$q3A = $db->prepare("SELECT B.*, U.email, U.fullname FROM j_board B, j_users U WHERE B.userid = U.id AND B.status >= 1 AND B.companyid = 0 ORDER BY B.created DESC LIMIT 5");
// $q3A->bindValue(':companyid', $_SESSION["companyid"], PDO::PARAM_INT);
$q3A->execute();
while ($r = $q3A->fetchObject()) {
  $postid = base64_encode($r->id);
  $t1 = shortdate($r->created); $t2 = ago($r->created);
  $body = nl2br($r->body);
  echo "    <div class=\"panel panel-warning\">\n";
  echo "      <div class=\"panel-heading\" role=\"tab\" id=\"h$postid\"><i class=\"pe-bullhorn pe-fw\"></i> <a class=\"collapsed\" data-toggle=\"collapse\" href=\"#c$postid\" aria-expanded=\"false\" aria-controls=\"c$postid\">$r->head</a></div>\n";
  //echo "      <div class=\"announcement-info\"><i class=\"pe-user pe-fw\"></i> $r->fullname ($r->email) &middot; <i class=\"pe-calendar pe-fw\"></i> $t1 ($t2)</div>\n";
  echo "      <div id=\"c$postid\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"h$postid\">\n";
  echo "        <div class=\"panel-body small\">$body</div>\n";
  echo "      </div>\n";
  echo "    </div>\n";
}
$q3B = $db->prepare("SELECT B.*, U.email, U.fullname, U.avatar FROM j_board B, j_users U WHERE B.userid = U.id AND B.status >= 1 AND B.companyid = :companyid ORDER BY B.created DESC LIMIT 10");
$q3B->bindValue(':companyid', $_SESSION["companyid"], PDO::PARAM_INT);
$q3B->execute();
while ($r = $q3B->fetchObject()) {
  $postid = base64_encode($r->id);
  $t1 = shortdate($r->created); $t2 = ago($r->created);
  $body = nl2br($r->body);
  if ($_SESSION['email'] == $r->email) { echo "    <div class=\"panel panel-info\" style=\"border:2px solid navy\">\n"; }
  else { echo "    <div class=\"panel panel-info\">\n"; }
  // echo "      <div class=\"panel-heading\" role=\"tab\" id=\"h$postid\"><i class=\"pe-wpforms pe-fw\"></i> <a class=\"collapsed\" data-toggle=\"collapse\" href=\"#c$postid\" aria-expanded=\"false\" aria-controls=\"c$postid\">$r->head</a></div>\n";
  echo "      <div class=\"panel-heading\" role=\"tab\" id=\"h$postid\"><i class=\"pe-wpforms pe-fw\"></i> $r->head</div>\n";
  echo "      <div class=\"announcement-info\"><i class=\"pe-user pe-fw\"></i> $r->fullname ($r->email) &middot; <i class=\"pe-calendar pe-fw\"></i> $t1 ($t2)</div>\n";
  if ($r->avatar) { echo "        <p class=\"pull-right\" style=\"margin:10px\"><img src=\"".$r->avatar."\" class=\"img-circle members-photo-small\" alt=\"Avatar\"></p>\n"; }
  // echo "      <div id=\"c$postid\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"h$postid\">\n";
  echo "        <div class=\"panel-body small\">$body</div>\n";
  // echo "      </div>\n";
  echo "    </div>\n";
}
?>
    <p align="right"><a href="/admin/?w=board" class="small">More...</a></p>
  </div>
  <div class="col-sm-3" style="padding:10px">
    <h4>Your recent activities</h4>
    <div class="list-group">
<?php
$q1 = $db->prepare("SELECT * FROM j_users_logs WHERE userid = :userid AND critical BETWEEN 2 AND 4 ORDER BY recorded DESC LIMIT 5");
$q1->bindValue(':userid', $_SESSION["userid"], PDO::PARAM_INT);
$q1->execute();
while ($r = $q1->fetchObject()) {
  $t = ago($r->recorded);
  $r->data = iconize($r->data);
  $r->data = preg_replace("/[\w-]+@([\w-]+\.)+[\w-]+/", "You", $r->data);
  echo "      <button type=\"button\" class=\"list-group-item small\"><small>$r->data ($t)</small></button>\n";
}
?>
    </div>
    <p align="right"><a href="/admin/?w=activity" class="small">More...</a></p>
  </div>
</div>

<br>

<style media="screen">
  svg g:first-of-type path { stroke: #e6e6e6; }
  svg g:first-of-type rect:not(:last-child) { fill: #ffffff; }
</style>

<script type="text/javascript">
  google.charts.load('current', {'packages': ['corechart', 'timeline'] });
  google.charts.setOnLoadCallback(drawTimelineChart);
  google.charts.setOnLoadCallback(drawPieChart);
  function drawTimelineChart() {
    var container = document.getElementById('timeline');
    var chart = new google.visualization.Timeline(container);
    var dataTable = new google.visualization.DataTable();
    dataTable.addColumn({ type: 'string', id: 'Project' });
    dataTable.addColumn({ type: 'string', id: 'Status' });
    dataTable.addColumn({ type: 'date', id: 'Start' });
    dataTable.addColumn({ type: 'date', id: 'End' });
    dataTable.addRows(<?php echo $timelinedata; ?>);
    var options = {
      height: <?php echo $height; ?>,
      colors: [ '#B3FFB3', '#00E600', '#009900', '#AAAAAA' ],
      backgroundColor: { fill: 'transparent' },
      avoidOverlappingGridLines: false,
      timeline: {
        groupByRowLabel: true,
        colorByRow: true,
      }
    };
    chart.draw(dataTable, options);
  }
  function drawPieChart() {
    var data = google.visualization.arrayToDataTable([
      ['Stage', 'No. of project'],
      ['Set-up', <?php echo $status1; ?>],
      ['Fieldwork', <?php echo $status2; ?>],
      ['Completed', <?php echo $status3; ?>],
      ['Archived', <?php echo $status4; ?>]
    ]);
    var options = { is3D: true, slices: { 0: { color: '#B3FFB3' }, 1: { color: '#00E600' }, 2: { color: '#009900' }, 3: { color: '#AAAAAA' } } };
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
  }
</script>

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
