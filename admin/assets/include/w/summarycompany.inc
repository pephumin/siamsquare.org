<?php

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

pageHeader("The company");
echo $clientlogo;
echo "<h2>$companyname</h2>";
echo "<p>This page shows the information regarding to the company, ".$companyname.".</p>\n";
echo "<p>Although we build this website with an objective of being an easy for self-administration, we are still happy to support you in any cases. Should you need anything, please feel free to <a href=\"/admin/contact/\">contact us</a>.</p>\n";
echo "<hr>\n";
// echo "<br>\n";

// Count different project status for this company
$q1A = $db->prepare("SELECT SUM(status='1') AS iB, SUM(status='2') AS iiB, SUM(status='3') AS iiiB, SUM(status='4') AS iiiiB FROM j_projects WHERE companyid = :companyid");
$q1A->bindValue(':companyid', $_SESSION["companyid"], PDO::PARAM_INT);
$q1A->execute();
while ($row = $q1A->fetchObject()) {
  $ss1 = $row->iB; $ss2 = $row->iiB;
  $ss3 = $row->iiiB; $ss4 = $row->iiiiB;
}
$sstotal = $ss1 + $ss2 + $ss3 + $ss4;
$ssActive = $ss1 + $ss2 + $ss3; $ssInactive = $ss4;
$percentActive = percent($ssActive / $sstotal);
$percentInactive = percent($ssInactive / $sstotal);

$q1B = $db->prepare("SELECT SUM(level='3') AS aA, SUM(level='4') AS aB, SUM(level='5') AS aC, SUM(level='6') AS aD, SUM(level='7') AS aE, SUM(level='8') AS aF, SUM(level='9') AS aG FROM j_users WHERE companyid = :companyid");
$q1B->bindValue(':companyid', $_SESSION["companyid"], PDO::PARAM_INT);
$q1B->execute();
while ($row = $q1B->fetchObject()) {
  $st3 = $row->aA; $st4 = $row->aB; $st5 = $row->aC; $st6 = $row->aD;
  $st7 = $row->aE; $st8 = $row->aF; $st9 = $row->aG;
}
$sttotal = $st3 + $st4 + $st5 + $st6;
$pst3 = percent($st3/$sttotal); $pst4 = percent($st4/$sttotal); $pst5 = percent($st5/$sttotal); $pst6 = percent($st6/$sttotal);
$pst7 = percent($st7/$sttotal); $pst8 = percent($st8/$sttotal); $pst9 = percent($st9/$sttotal);
$levellist = "";
// if ($st9) { $levellist .= "<strong>$st9 Administrator</strong> ($pst9) "; } else { $levellist .= ""; }
// if ($st8) { $levellist .= "<strong>$st8 person(s)</strong> ($pst8) "; } else { $levellist .= ""; }
// if ($st7) { $levellist .= "<strong>$st7 person(s)</strong> ($pst7) "; } else { $levellist .= ""; }
if ($st6) { $levellist .= "<strong>$st6 Manager(s)</strong> ($pst6) "; } else { $levellist .= ""; }
if ($st5) { $levellist .= "<strong>$st5 User(s)</strong> ($pst5) "; } else { $levellist .= ""; }
if ($st4) { $levellist .= "<strong>$st4 Guest(s)</strong> ($pst4) "; } else { $levellist .= ""; }
// if ($st3) { $levellist .= "<strong>$st3 person(s)</strong> ($pst3) "; } else { $levellist .= ""; }

$i = 0; $height = "70";
$today['year'] = date("Y"); $today['month'] = date("m"); $today['day'] = date("d"); $today['month'] = $today['month']-1;
$timelinedata = "[ \n"; $colordata = "[ "; $tabledata = ""; $AA = array();
// Pull survey information for this company
$q2 = $db->prepare("SELECT P.*, U.fullname, U.email, U.level FROM j_projects P, j_users U WHERE P.userid = U.id AND P.companyid = :companyid AND P.status >= 1 ORDER BY P.status ASC, P.created DESC");
$q2->bindValue(':companyid', $_SESSION["companyid"], PDO::PARAM_INT);
$q2->execute();
$rows = $q2->fetchAll(PDO::FETCH_ASSOC);
foreach ($rows as $row) {
  $id = $row['id'];
  $title = $row['title'];
  $owner_fullname = $row['fullname'];
  $owner_email = $row['email'];
  // $owner_level = $row['level'];
  array_push($AA, $owner_fullname.':'.$owner_email.':'.$owner_level);
  if ($row['created']) { $L0 = date_parse_from_format("Y-m-d H:i:s", $row['created']); $L0['month'] = $L0['month']-1; $created = ago($row['created']); }
  if ($row['L1']) { $L1 = date_parse_from_format("Y-m-d H:i:s", $row['L1']); $L1['month'] = $L1['month']-1; $LL1 = ago($row['L1']); } else { $LL1 = "-"; }
  if ($row['L2']) { $L2 = date_parse_from_format("Y-m-d H:i:s", $row['L2']); $L2['month'] = $L2['month']-1; $LL2 = ago($row['L2']); } else { $LL2 = "-"; }
  if ($row['L3']) { $L3 = date_parse_from_format("Y-m-d H:i:s", $row['L3']); $L3['month'] = $L3['month']-1; $LL3 = ago($row['L3']); } else { $LL3 = "-"; }
  if ($row['status'] == 1) {
    $ss = "  <i class=\"pe-hourglass-start pe-fw\"></i> Set-up";
    $since = ago($row['created']);
    $status = "Set-up";
    $timelinedata .= "[ '".$title."', 'Set-up', new Date(".$L0['year'].", ".$L0['month'].", ".$L0['day']."), new Date(".$today['year'].", ".$today['month'].", ".$today['day'].") ], \n"; $colordata .= "'#B3FFB3', ";
  }
  else if ($row['status'] == 2) {
    $ss = "<i class=\"pe-hourglass-half pe-fw\"></i> Data-collection";
    $since = ago($row['L1']);
    $status = "Data-collection";
    $timelinedata .= "[ '".$title."', 'Set-up', new Date(".$L0['year'].", ".$L0['month'].", ".$L0['day']."), new Date(".$L1['year'].", ".$L1['month'].", ".$L1['day'].") ], \n"; $colordata .= "'#B3FFB3', ";
    $timelinedata .= "[ '".$title."', 'Data-collection', new Date(".$L1['year'].", ".$L1['month'].", ".$L1['day']."), new Date(".$today['year'].", ".$today['month'].", ".$today['day'].") ], \n"; $colordata .= "'#00C851', ";
  }
  else if ($row['status'] == 3) {
    $ss = "<i class=\"pe-hourglass-end pe-fw\"></i> Completed";
    $since = ago($row['L2']);
    $status = "Completed";
    $timelinedata .= "[ '".$title."', 'Set-up', new Date(".$L0['year'].", ".$L0['month'].", ".$L0['day']."), new Date(".$L1['year'].", ".$L1['month'].", ".$L1['day'].") ], \n"; $colordata .= "'#B3FFB3', ";
    $timelinedata .= "[ '".$title."', 'Data-collection', new Date(".$L1['year'].", ".$L1['month'].", ".$L1['day']."), new Date(".$L2['year'].", ".$L2['month'].", ".$L2['day'].") ], \n"; $colordata .= "'#00C851', ";
    $timelinedata .= "[ '".$title."', 'Completed', new Date(".$L2['year'].", ".$L2['month'].", ".$L2['day']."), new Date(".$today['year'].", ".$today['month'].", ".$today['day'].") ], \n"; $colordata .= "'#007E33', ";
  }
  else if ($row['status'] == 4) {
    $ss = "<i class=\"pe-archive pe-fw\"></i> Archived";
    $since = ago($row['L3']);
    $status = "Archived";
    $timelinedata .= "[ '".$title."', 'Set-up', new Date(".$L0['year'].", ".$L0['month'].", ".$L0['day']."), new Date(".$L1['year'].", ".$L1['month'].", ".$L1['day'].") ], \n"; $colordata .= "'#B3FFB3', ";
    $timelinedata .= "[ '".$title."', 'Data-collection', new Date(".$L1['year'].", ".$L1['month'].", ".$L1['day']."), new Date(".$L2['year'].", ".$L2['month'].", ".$L2['day'].") ], \n"; $colordata .= "'#00C851', ";
    $timelinedata .= "[ '".$title."', 'Completed', new Date(".$L2['year'].", ".$L2['month'].", ".$L2['day']."), new Date(".$L3['year'].", ".$L3['month'].", ".$L3['day'].") ], \n"; $colordata .= "'#007E33', ";
    $timelinedata .= "[ '".$title."', 'Archived', new Date(".$L3['year'].", ".$L3['month'].", ".$L3['day']."), new Date(".$today['year'].", ".$today['month'].", ".$today['day'].") ], \n"; $colordata .= "'#AAAAAA', ";
  }
  $updated = ago($row['updated']);
  $t2 = date_parse_from_format("Y-m-d H:i:s", $row['updated']); $t2['month'] = $t2['month']-2;
  if ($row['private'] == 1) { $private = "<span class=\"label label-success\">PRIVATE</span>"; } else { $private = ""; }
  if ($owner_email == $_SESSION['email']) { $owner = "<span class=\"label label-danger\">OWNER</span>"; $tabledata .= "    <tr>\n"; } else { $owner = ""; $tabledata .= "    <tr>\n";}
  if ($owner_email == $_SESSION['email']) { $tabledata .= "    <tr bgcolor='#D7EFFD'>\n"; } else { $tabledata .= "    <tr>\n";}
  $tabledata .= "      <td>$title $owner $private</td>\n";
  $tabledata .= "      <td>$owner_fullname <small>($owner_email)</small></td>\n";
  $tabledata .= "      <td>$ss</td>\n";
  // $tabledata .= "      <td align=\"right\">$updated</td>\n";
  $tabledata .= "    </tr>\n";
  $i++; $height = $height + "40";
}
$timelinedata .= " ]";
$colordata = substr($colordata, 0, -2);
$colordata .= " ]";
$tabledata .= "";
// Pull data on user listing for this company
$q3A = $db->prepare("SELECT U.*, COUNT(P.id) as projects FROM j_users U, j_projects P WHERE P.userid = U.id AND U.companyid = :companyid AND P.status >= 1 GROUP BY U.email ORDER BY U.level DESC");
$q3A->bindValue(':companyid', $_SESSION["companyid"], PDO::PARAM_INT);
$q3A->execute();
$rr = $q3A->fetchAll(PDO::FETCH_ASSOC);
foreach ($rr as $r) {
  $ww = $r['projects'];
  $w = percent($ww / $sstotal);
  $fullname = $r['fullname'];
  $email = $r['email'];
  if ($r['lastlogin']) { $lastlogin = ago($r['lastlogin']); } else { $lastlogin = "Never"; }
  $role = role($r['level']);
  if ($r['level'] == 9) {
    if ($r['email'] == $_SESSION['email']) { $orgdata .= "<tr bgcolor='#D7EFFD'><td><strong>$fullname</strong><br><small>Email: $email</small><br><small class=\"grey\">Last seen: $lastlogin</small></td><td>$role</td><td align='right'>$ww ($w)</td></tr>\n"; }
    else { $orgdata .= "<tr><td><strong>$fullname</strong><br><small>Email: $email</small><br><small class=\"grey\">Last seen: $lastlogin</small></td><td>$role</td><td align='right'>$ww ($w)</td></tr>\n"; }
  }
  else if ($r['level'] == 6) {
    if ($r['email'] == $_SESSION['email']) { $orgdata .= "<tr bgcolor='#D7EFFD'><td><strong>$fullname</strong><br><small>Email: $email</small><br><small class=\"grey\">Last seen: $lastlogin</small></td><td>$role</td><td align='right'>$ww ($w)</td></tr>\n"; }
    else { $orgdata .= "<tr><td><strong>$fullname</strong><br><small>Email: $email</small><br><small class=\"grey\">Last seen: $lastlogin</small></td><td>$role</td><td align='right'>$ww ($w)</td></tr>\n"; }
  }
  else if ($r['level'] == 5) {
    if ($r['email'] == $_SESSION['email']) { $orgdata .= "<tr bgcolor='#D7EFFD'><td><strong>$fullname</strong><br><small>Email: $email</small><br><small class=\"grey\">Last seen: $lastlogin</small></td><td>$role</td><td align='right'>$ww ($w)</td></tr>\n"; }
    else { $orgdata .= "<tr><td><strong>$fullname</strong><br><small>Email: $email</small><br><small class=\"grey\">Last seen: $lastlogin</small></td><td>$role</td><td align='right'>$ww ($w)</td></tr>\n"; }
  }
  else if ($r['level'] == 4) {
    if ($r['email'] == $_SESSION['email']) { $orgdata .= "<tr bgcolor='#D7EFFD'><td><strong>$fullname</strong><br><small>Email: $email</small><br><small class=\"grey\">Last seen: $lastlogin</small></td><td>$role</td><td align='right'>$ww ($w)</td></tr>\n"; }
    else { $orgdata .= "<tr><td><strong>$fullname</strong><br><small>Email: $email</small><br><small class=\"grey\">Last seen: $lastlogin</small></td><td>$role</td><td align='right'>$ww ($w)</td></tr>\n"; }
  }
}

?>

<h3>Company at a glance</h3>

<div class="row">
  <div class="col-sm-6">
    <h4>Projects</h4>
    <p><?php echo $companyname; ?> has <strong><?php echo $sstotal; ?> survey project(s)</strong> where <strong><?php echo $ssActive; ?> project(s)</strong> (<?php echo $percentActive; ?>) are active and <strong><?php echo $ssInactive; ?> project(s)</strong> (<?php echo $percentInactive; ?>) are inactive (archived).</p>
    <div id="piechart" style="width:100%;height:300px"></div>
    <p align="right"><a href="/admin/?w=surveys" class="small">More...</a></p>
  </div>
  <div class="col-sm-6">
    <h4>Users</h4>
    <p><?php echo $companyname; ?> has <strong><?php echo $sttotal; ?> user(s)</strong> including <?php echo $levellist; ?> as shown in the table below.</p>
    <br>
    <table class="table table-hover small">
      <thead>
        <tr class="bg-primary">
          <th width="50%"><i class="pe-user pe-fw"></i> Name</th>
          <th width="25%"><i class="pe-briefcase pe-fw"></i> Role</th>
          <th width="25%" align="right"><i class="pe-cubes pe-fw"></i> Projects</th>
        </tr>
      </thead>
      <tbody>
<?php print_r($orgdata); ?>
      </tbody>
    </table>
    <p align="right"><a href="/admin/?w=team" class="small">More...</a></p>
  </div>
</div>

<h4>List of all projects</h4>
<table class="table table-hover small">
  <thead>
    <tr class="bg-primary">
      <th width="30%"><i class="pe-cubes pe-fw"></i> Project</th>
      <th width="50%"><i class="pe-user pe-fw"></i> Owner</th>
      <th width="20%"><i class="pe-flag pe-fw"></i> Status</th>
    </tr>
  </thead>
  <tbody>
<?php echo $tabledata; ?>
  </tbody>
</table>
<br>
<div id="timeline"></div>
<p align="right"><a href="/admin/?w=surveys" class="small">More...</a></p>
<br>

<style media="screen">
  svg g:first-of-type path { stroke: #e6e6e6; }
  svg g:first-of-type rect:not(:last-child) { fill: #ffffff; }
</style>

<script type="text/javascript">
  google.charts.load('current', {'packages': ['corechart', 'timeline'] });
  google.charts.setOnLoadCallback(drawPieChart);
  google.charts.setOnLoadCallback(drawTimelineChart);
  function drawPieChart() {
    var data = google.visualization.arrayToDataTable([
      ['Stage', 'No. of project'],
      ['Set-up', <?php echo $ss1; ?>],
      ['Fieldwork', <?php echo $ss2; ?>],
      ['Completed', <?php echo $ss3; ?>],
      ['Archived', <?php echo $ss4; ?>]
    ]);
    var options = { pieHole: 0.4, slices: { 0: { color: '#B3FFB3' }, 1: { color: '#00C851' }, 2: { color: '#007E33' }, 3: { color: '#AAAAAA' } } };
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
  }
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
      colors: [ '#B3FFB3', '#00C851', '#007E33', '#AAAAAA' ],
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
