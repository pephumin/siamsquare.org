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
  $title = $r->company;
}

pageHeader("The company");
echo $clientlogo;
echo "<h2>$title</h2>";
echo "<p>This page shows the information regarding to the company, ".$title.".</p>\n";
echo "<p>Although we build this website with an objective of being an easy for self-administration, we are still happy to support you in any cases. Should you need anything, please feel free to <a href=\"/admin/contact/\">contact us</a>.</p>\n";
echo "<hr>\n";
// echo "<br>\n";

// Count different project status for this company
$q1 = $db->prepare("SELECT SUM(status='1') AS iB, SUM(status='2') AS iiB, SUM(status='3') AS iiiB, SUM(status='4') AS iiiiB FROM j_projects WHERE companyid = :companyid");
$q1->bindValue(':companyid', $_SESSION["companyid"], PDO::PARAM_INT);
$q1->execute();
while ($row = $q1->fetchObject()) {
  $status1 = $row->iB; $status2 = $row->iiB;
  $status3 = $row->iiiB; $status4 = $row->iiiiB;
}
$totalALL = $status1 + $status2 + $status3 + $status4;
$totalActive = $status1 + $status2 + $status3; $totalInactive = $status4;
$percentActive = percent($totalActive / $totalALL);
$percentInactive = percent($totalInactive / $totalALL);
?>

<h3>Company at a glance</h3>

<div class="row">
  <div class="col-sm-6">
    <h4>Projects</h4>
    <p><?php echo $title; ?> has <strong><?php echo $totalALL; ?> survey projects</strong> where <strong><?php echo $totalActive; ?> projects</strong> (<?php echo $percentActive; ?>) are active and <strong><?php echo $totalInactive; ?> projects</strong> (<?php echo $percentInactive; ?>) are inactive (archived).</p>
    <table class="table small">
      <thead class="bg-primary">
        <tr>
          <td>Stage</td>
          <td>Projects</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Set-up</td>
          <td><?php echo $status1; ?></td>
        </tr>
        <tr>
          <td>Data-collection</td>
          <td><?php echo $status2; ?></td>
        </tr>
        <tr>
          <td>Completed</td>
          <td><?php echo $status3; ?></td>
        </tr>
        <tr>
          <td>Archived</td>
          <td><?php echo $status4; ?></td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="col-sm-6">
    <h4>Users</h4>
    <p><?php echo $title; ?> has <strong><?php echo $totalALL; ?> survey projects</strong> where <strong><?php echo $totalActive; ?> projects</strong> (<?php echo $percentActive; ?>) are active and <strong><?php echo $totalInactive; ?> projects</strong> (<?php echo $percentInactive; ?>) are inactive (archived).</p>
  </div>
</div>


<h4>List of all projects <small>(sorted by status and last update)</small></h4>
<table class="table table-condensed small">
  <thead>
    <tr class="bg-primary">
      <td width="25%"><strong><i class="pe-cubes pe-fw"></i> Project</strong></td>
      <td width="40%"><strong><i class="pe-user pe-fw"></i> Owner</strong></td>
      <td width="25%"><strong><i class="pe-flag pe-fw"></i> Status</strong></td>
      <td width="10%" align="right"><strong><i class="pe-clock-o pe-fw"></i> Since</strong></td>
    </tr>
  </thead>
  <tbody>

<?php
$i = 0; $height = "70";
$today['year'] = date("Y"); $today['month'] = date("m"); $today['day'] = date("d"); $today['month'] = $today['month']-1;
$timelinedata = "[ \n"; $colordata = "[ ";
// Pull survey information for this company
$q2 = $db->prepare("SELECT P.*, U.fullname, U.email FROM j_projects P, j_users U WHERE P.userid = U.id AND P.companyid = :companyid AND P.status >= 1 ORDER BY P.status ASC, P.created DESC");
$q2->bindValue(':companyid', $_SESSION["companyid"], PDO::PARAM_INT);
$q2->execute();
$rows = $q2->fetchAll(PDO::FETCH_ASSOC);
foreach ($rows as $row) {
  $id = $row['id'];
  $title = $row['title'];
  $owner_fullname = $row['fullname'];
  $owner_email = $row['email'];
  if ($row['created']) { $L0 = date_parse_from_format("Y-m-d H:i:s", $row['created']); $L0['month'] = $L0['month']-1; $created = ago($row['created']); }
  if ($row['L1']) { $L1 = date_parse_from_format("Y-m-d H:i:s", $row['L1']); $L1['month'] = $L1['month']-1; $LL1 = ago($row['L1']); } else { $LL1 = "-"; }
  if ($row['L2']) { $L2 = date_parse_from_format("Y-m-d H:i:s", $row['L2']); $L2['month'] = $L2['month']-1; $LL2 = ago($row['L2']); } else { $LL2 = "-"; }
  if ($row['L3']) { $L3 = date_parse_from_format("Y-m-d H:i:s", $row['L3']); $L3['month'] = $L3['month']-1; $LL3 = ago($row['L3']); } else { $LL3 = "-"; }
  if ($row['status'] == 1) {
    $ss = "  <i class=\"pe-hourglass-start pe-fw\"></i> Set-up";
    $since = ago($row['created']);
    $status = "Set-up";
    $timelinedata .= "[ 'Project ".$title."', 'Set-up', new Date(".$L0['year'].", ".$L0['month'].", ".$L0['day']."), new Date(".$today['year'].", ".$today['month'].", ".$today['day'].") ], \n"; $colordata .= "'#B3FFB3', ";
  }
  else if ($row['status'] == 2) {
    $ss = "<i class=\"pe-hourglass-half pe-fw\"></i> Data-collection";
    $since = ago($row['L1']);
    $status = "Data-collection";
    $timelinedata .= "[ 'Project ".$title."', 'Set-up', new Date(".$L0['year'].", ".$L0['month'].", ".$L0['day']."), new Date(".$L1['year'].", ".$L1['month'].", ".$L1['day'].") ], \n"; $colordata .= "'#B3FFB3', ";
    $timelinedata .= "[ 'Project ".$title."', 'Data-collection', new Date(".$L1['year'].", ".$L1['month'].", ".$L1['day']."), new Date(".$today['year'].", ".$today['month'].", ".$today['day'].") ], \n"; $colordata .= "'#00E600', ";
  }
  else if ($row['status'] == 3) {
    $ss = "<i class=\"pe-hourglass-end pe-fw\"></i> Completed";
    $since = ago($row['L2']);
    $status = "Completed";
    $timelinedata .= "[ 'Project ".$title."', 'Set-up', new Date(".$L0['year'].", ".$L0['month'].", ".$L0['day']."), new Date(".$L1['year'].", ".$L1['month'].", ".$L1['day'].") ], \n"; $colordata .= "'#B3FFB3', ";
    $timelinedata .= "[ 'Project ".$title."', 'Data-collection', new Date(".$L1['year'].", ".$L1['month'].", ".$L1['day']."), new Date(".$L2['year'].", ".$L2['month'].", ".$L2['day'].") ], \n"; $colordata .= "'#00E600', ";
    $timelinedata .= "[ 'Project ".$title."', 'Completed', new Date(".$L2['year'].", ".$L2['month'].", ".$L2['day']."), new Date(".$today['year'].", ".$today['month'].", ".$today['day'].") ], \n"; $colordata .= "'#009900', ";
  }
  else if ($row['status'] == 4) {
    $ss = "<i class=\"pe-archive pe-fw\"></i> Archived";
    $since = ago($row['L3']);
    $status = "Archived";
    $timelinedata .= "[ 'Project ".$title."', 'Set-up', new Date(".$L0['year'].", ".$L0['month'].", ".$L0['day']."), new Date(".$L1['year'].", ".$L1['month'].", ".$L1['day'].") ], \n"; $colordata .= "'#B3FFB3', ";
    $timelinedata .= "[ 'Project ".$title."', 'Data-collection', new Date(".$L1['year'].", ".$L1['month'].", ".$L1['day']."), new Date(".$L2['year'].", ".$L2['month'].", ".$L2['day'].") ], \n"; $colordata .= "'#00E600', ";
    $timelinedata .= "[ 'Project ".$title."', 'Completed', new Date(".$L2['year'].", ".$L2['month'].", ".$L2['day']."), new Date(".$L3['year'].", ".$L3['month'].", ".$L3['day'].") ], \n"; $colordata .= "'#009900', ";
    $timelinedata .= "[ 'Project ".$title."', 'Archived', new Date(".$L3['year'].", ".$L3['month'].", ".$L3['day']."), new Date(".$today['year'].", ".$today['month'].", ".$today['day'].") ], \n"; $colordata .= "'#AAAAAA', ";
  }
  $updated = ago($row['updated']);
  $t2 = date_parse_from_format("Y-m-d H:i:s", $row['updated']); $t2['month'] = $t2['month']-2;
  if ($row['private'] == 1) { $private = "<span class=\"label label-success\">PRIVATE</span>"; } else { $private = ""; }
  echo "        <tr>\n";
  echo "          <td>Project $title $private</td>\n";
  echo "          <td>$owner_fullname <small>($owner_email)</small></td>\n";
  echo "          <td>$ss</td>\n";
  echo "          <td align=\"right\">$updated</td>\n";
  echo "        </tr>\n";
  $i++; $height = $height + "40";
}
$timelinedata .= " ]";
$colordata = substr($colordata, 0, -2);
$colordata .= " ]";
?>
  </tbody>
</table>

<h4>Timeline for active projects</h4>
<div id="timeline"></div>

<hr>

<div id="calendar"></div>

<br>

<br>


<script type="text/javascript">
  google.charts.load('current', {'packages': ['timeline'] });
  google.charts.setOnLoadCallback(drawTimelineChart);
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
      avoidOverlappingGridLines: false,
      timeline: {
        groupByRowLabel: true,
        colorByRow: true,
      }
    };
    chart.draw(dataTable, options);
  }

</script>

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
