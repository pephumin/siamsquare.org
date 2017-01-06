<?php

// if (isset($_SESSION['frontpage']) && ($_SESSION['frontpage'] == 1)) { include $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/w/summaryuser.inc'; }
// else if ($_SESSION['frontpage'] == 2) { include $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/w/summarycompany.inc'; }
// else { include $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/w/summaryuser.inc'; }

$title = "Client's dashboard";
pageHeader($title);

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

// $title = "Client's dashboard";
// pageHeader($title);
echo $clientlogo;
echo "<h2>Welcome ".$_SESSION['fullname']."</h2>\n";
echo "<p>This is the main dashboard where you can find the overview of the information regarding to youself or your company, $companyname.</p>\n";
echo "<p>Although we build this website with an objective of being an easy for self-administration, we are still happy to support you in any cases. Should you need anything, please feel free to <a href=\"/admin/contact/\">contact us</a>.</p>\n";
echo "<br>\n";

if (isset($login)) {
  if ($login->errors) { foreach ($login->errors as $error) { echo $error; } }
  if ($login->messages) { foreach ($login->messages as $message) { echo $message; } }
}



?>

<nav>
  <ul class="nav nav-tabs">
    <li class="active"><a href="#one" data-toggle="tab"><i class="pe-user pe-fw"></i> Summary of projects you manage</a></li>
    <li><a href="#two" data-toggle="tab"><i class="pe-cog pe-fw"></i> Summary of all projects for the company</a></li>
  </ul>
</nav>
<br>
<div class="tab-content">
  <div id="one" class="tab-pane in active fade">

    <?php
    // Count different project status for this user
    $q1 = $db->prepare("SELECT SUM(status='1') AS iB, SUM(status='2') AS iiB, SUM(status='3') AS iiiB, SUM(status='4') AS iiiiB FROM j_projects WHERE companyid = :companyid AND userid = :userid");
    $q1->bindValue(':companyid', $_SESSION["companyid"], PDO::PARAM_INT);
    $q1->bindValue(':userid', $_SESSION["userid"], PDO::PARAM_INT);
    $q1->execute();
    while ($row = $q1->fetchObject()) {
      $ustatus1 = $row->iB; $ustatus2 = $row->iiB;
      $ustatus3 = $row->iiiB; $ustatus4 = $row->iiiiB;
    }
    $totalALL = $ustatus1 + $ustatus2 + $ustatus3 + $ustatus4; $percentTotal = percent($totalALL / $totalALL);
    $totalActive = $ustatus1 + $ustatus2 + $ustatus3; $totalInactive = $ustatus4;
    $percentActive = percent($totalActive / $totalALL); $percentInactive = percent($totalInactive / $totalALL);
    $percentStatus1 = percent($ustatus1 / $totalALL); $percentStatus2 = percent($ustatus2 / $totalALL);
    $percentStatus3 = percent($ustatus3 / $totalALL); $percentStatus4 = percent($ustatus4 / $totalALL);
    ?>

    <h3>Your projects</h3>

    <div class="row">
      <div class="col-xs-12 col-sm-5 col-md-5 col-lg-5">
        <p>You have <strong><?php echo $totalALL; ?> survey projects</strong> which can be broken down into different stages as shown below.</p>
        <table class="table table-hover small">
          <thead>
            <tr class="bg-success">
              <th>Stage</th>
              <th style="text-align:right">Projects (%)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Set-up</td>
              <td align="right"><?php echo $ustatus1; ?> (<?php echo $percentStatus1; ?>)</td>
            </tr>
            <tr>
              <td>Data-collection</td>
              <td align="right"><?php echo $ustatus2; ?> (<?php echo $percentStatus2; ?>)</td>
            </tr>
            <tr>
              <td>Completed</td>
              <td align="right"><?php echo $ustatus3; ?> (<?php echo $percentStatus3; ?>)</td>
            </tr>
            <tr>
              <td>Archived</td>
              <td align="right"><?php echo $ustatus4; ?> (<?php echo $percentStatus4; ?>)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
        <div id="piechart1"></div>
      </div>
    </div>

    <br>

    <?php
    $i = 0; $height = "70";
    $today['year'] = date("Y"); $today['month'] = date("m"); $today['day'] = date("d");
    if ($today['month'] == "01") { $today['month'] = "12"; $today['year'] = $today['year']-1; } else { $today['month'] = $today['month']-1; }
    $utimelinedata = "[ \n"; $colordata = "[ ";
    // Pull survey information for this user
    $q2 = $db->prepare("SELECT * FROM j_projects WHERE companyid = :companyid AND userid = :userid AND status >= 1 ORDER BY status ASC, created DESC");
    $q2->bindValue(':companyid', $_SESSION["companyid"], PDO::PARAM_INT);
    $q2->bindValue(':userid', $_SESSION["userid"], PDO::PARAM_INT);
    $q2->execute();
    $rows = $q2->fetchAll(PDO::FETCH_ASSOC);
    foreach ($rows as $row) {
      $id = $row['id'];
      $title = $row['title'];
      if ($row['created']) { $L0 = date_parse_from_format("Y-m-d H:i:s", $row['created']); if ($L0['month'] == "01") { $L0['month'] = "12"; $L0['year'] = $L0['year']-1; } else { $L0['month'] = $L0['month']-1; } $created = ago($row['created']); }
      if ($row['L1']) { $L1 = date_parse_from_format("Y-m-d H:i:s", $row['L1']); if ($L1['month'] == "01") { $L1['month'] = "12"; $L1['year'] = $L1['year']-1; } else { $L1['month'] = $L1['month']-1; } $LL1 = ago($row['L1']); } else { $LL1 = "-"; }
      if ($row['L2']) { $L2 = date_parse_from_format("Y-m-d H:i:s", $row['L2']); if ($L2['month'] == "01") { $L2['month'] = "12"; $L2['year'] = $L2['year']-1; } else { $L2['month'] = $L2['month']-1; } $LL2 = ago($row['L2']); } else { $LL2 = "-"; }
      if ($row['L3']) { $L3 = date_parse_from_format("Y-m-d H:i:s", $row['L3']); if ($L3['month'] == "01") { $L3['month'] = "12"; $L3['year'] = $L3['year']-1; } else { $L3['month'] = $L3['month']-1; } $LL3 = ago($row['L3']); } else { $LL3 = "-"; }
      if ($row['status'] == 1) {
        $ss = "  <i class=\"pe-hourglass-start pe-fw\"></i> Set-up (since: ".ago($row['created']).")";
        $ustatus = "Set-up";
        $utimelinedata .= "[ ' Project ".$title."', 'Set-up', new Date(".$L0['year'].", ".$L0['month'].", ".$L0['day']."), new Date(".$today['year'].", ".$today['month'].", ".$today['day'].") ], \n"; $colordata .= "'#B3FFB3', ";
      } else if ($row['status'] == 2) {
        $ss = "<i class=\"pe-hourglass-half pe-fw\"></i> Data-collection (since: ".ago($row['L1']).")";
        $ustatus = "Data-collection";
        $utimelinedata .= "[ ' Project ".$title."', 'Set-up', new Date(".$L0['year'].", ".$L0['month'].", ".$L0['day']."), new Date(".$L1['year'].", ".$L1['month'].", ".$L1['day'].") ], \n"; $colordata .= "'#B3FFB3', ";
        $utimelinedata .= "[ ' Project ".$title."', 'Data-collection', new Date(".$L1['year'].", ".$L1['month'].", ".$L1['day']."), new Date(".$today['year'].", ".$today['month'].", ".$today['day'].") ], \n"; $colordata .= "'#00C851', ";
      } else if ($row['status'] == 3) {
        $ss = "<i class=\"pe-hourglass-end pe-fw\"></i> Completed (since: ".ago($row['L2']).")";
        $ustatus = "Completed";
        $utimelinedata .= "[ ' Project ".$title."', 'Set-up', new Date(".$L0['year'].", ".$L0['month'].", ".$L0['day']."), new Date(".$L1['year'].", ".$L1['month'].", ".$L1['day'].") ], \n"; $colordata .= "'#B3FFB3', ";
        $utimelinedata .= "[ ' Project ".$title."', 'Data-collection', new Date(".$L1['year'].", ".$L1['month'].", ".$L1['day']."), new Date(".$L2['year'].", ".$L2['month'].", ".$L2['day'].") ], \n"; $colordata .= "'#00C851', ";
        $utimelinedata .= "[ ' Project ".$title."', 'Completed', new Date(".$L2['year'].", ".$L2['month'].", ".$L2['day']."), new Date(".$today['year'].", ".$today['month'].", ".$today['day'].") ], \n"; $colordata .= "'#007E33', ";
      } else if ($row['status'] == 4) {
        $ss = "<i class=\"pe-archive pe-fw\"></i> Archived (since: ".ago($row['L3']).")";
        $ustatus = "Archived";
        $utimelinedata .= "[ ' Project ".$title."', 'Set-up', new Date(".$L0['year'].", ".$L0['month'].", ".$L0['day']."), new Date(".$L1['year'].", ".$L1['month'].", ".$L1['day'].") ], \n"; $colordata .= "'#B3FFB3', ";
        $utimelinedata .= "[ ' Project ".$title."', 'Data-collection', new Date(".$L1['year'].", ".$L1['month'].", ".$L1['day']."), new Date(".$L2['year'].", ".$L2['month'].", ".$L2['day'].") ], \n"; $colordata .= "'#00C851', ";
        $utimelinedata .= "[ ' Project ".$title."', 'Completed', new Date(".$L2['year'].", ".$L2['month'].", ".$L2['day']."), new Date(".$L3['year'].", ".$L3['month'].", ".$L3['day'].") ], \n"; $colordata .= "'#007E33', ";
        $utimelinedata .= "[ ' Project ".$title."', 'Archived', new Date(".$L3['year'].", ".$L3['month'].", ".$L3['day']."), new Date(".$today['year'].", ".$today['month'].", ".$today['day'].") ], \n"; $colordata .= "'#AAAAAA', ";
      }
      $updated = ago($row['updated']);
      if ($row['private'] == 1) { $private = "<span class=\"label label-success\">PRIVATE</span>"; } else { $private = ""; }
      $i++; $height = $height + "40";
    }
    $utimelinedata .= " ]";
    $colordata = substr($colordata, 0, -2);
    $colordata .= " ]";
    ?>

    <h4>Timing of your projects</h4>

    <div id="timeline1"></div>
    <p align="right"><a href="/admin/?w=surveys" class="small">More...</a></p>

    <style>
      svg g:first-of-type path { stroke: #E6E6E6; }
      svg g:first-of-type rect:not(:last-child) { fill: #FFFFFF; }
    </style>

    <script type="text/javascript">
      google.charts.load('current', {'packages': ['corechart', 'timeline'] });
      google.charts.setOnLoadCallback(drawPieChart1);
      google.charts.setOnLoadCallback(drawTimelineChart1);
      function drawPieChart1() {
        var data = google.visualization.arrayToDataTable([
          ['Stage', 'No. of project'],
          ['Set-up', <?php echo $ustatus1; ?>],
          ['Fieldwork', <?php echo $ustatus2; ?>],
          ['Completed', <?php echo $ustatus3; ?>],
          ['Archived', <?php echo $ustatus4; ?>]
        ]);
        var options = {
          is3D: true,
          slices: { 0: { color: '#B3FFB3' }, 1: { color: '#00C851' }, 2: { color: '#007E33' }, 3: { color: '#AAAAAA' } },
          width: '100%',
          height: '300',
          chartArea:{ left: 20, top: 20, width: '100%', height: '300', },
        };
        var chart = new google.visualization.PieChart(document.getElementById('piechart1'));
        chart.draw(data, options);
      }
      function drawTimelineChart1() {
        var container = document.getElementById('timeline1');
        var chart = new google.visualization.Timeline(container);
        var dataTable = new google.visualization.DataTable();
        dataTable.addColumn({ type: 'string', id: 'Project' });
        dataTable.addColumn({ type: 'string', id: 'Status' });
        dataTable.addColumn({ type: 'date', id: 'Start' });
        dataTable.addColumn({ type: 'date', id: 'End' });
        dataTable.addRows(<?php echo $utimelinedata; ?>);
        var options = {
          height: <?php echo $height; ?>,
          colors: [ '#B3FFB3', '#00C851', '#007E33', '#AAAAAA' ],
          avoidOverlappingGridLines: false,
          timeline: { groupByRowLabel: true, colorByRow: true, }
        };
        chart.draw(dataTable, options);
      }
      $(window).resize(function() {
        drawPieChart1();
        drawTimelineChart1();
      });
    </script>

  </div>
  <div id="two" class="tab-pane fade">

    <?php
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
    $today['year'] = date("Y"); $today['month'] = date("m"); $today['day'] = date("d");
    if ($today['month'] == "01") { $today['month'] = "12"; $today['year'] = $today['year']-1; } else { $today['month'] = $today['month']-1; }
    $ctimelinedata = "[ \n"; $colordata = "[ "; $tabledata = ""; $AA = array();
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
      if ($row['created']) { $L0 = date_parse_from_format("Y-m-d H:i:s", $row['created']); if ($L0['month'] == "01") { $L0['month'] = "12"; $L0['year'] = $L0['year']-1; } else { $L0['month'] = $L0['month']-1; } $created = ago($row['created']); }
      if ($row['L1']) { $L1 = date_parse_from_format("Y-m-d H:i:s", $row['L1']); if ($L1['month'] == "01") { $L1['month'] = "12"; $L1['year'] = $L1['year']-1; } else { $L1['month'] = $L1['month']-1; } $LL1 = ago($row['L1']); } else { $LL1 = "-"; }
      if ($row['L2']) { $L2 = date_parse_from_format("Y-m-d H:i:s", $row['L2']); if ($L2['month'] == "01") { $L2['month'] = "12"; $L2['year'] = $L2['year']-1; } else { $L2['month'] = $L2['month']-1; } $LL2 = ago($row['L2']); } else { $LL2 = "-"; }
      if ($row['L3']) { $L3 = date_parse_from_format("Y-m-d H:i:s", $row['L3']); if ($L3['month'] == "01") { $L3['month'] = "12"; $L3['year'] = $L3['year']-1; } else { $L3['month'] = $L3['month']-1; } $LL3 = ago($row['L3']); } else { $LL3 = "-"; }
      if ($row['status'] == 1) {
        $ss = "  <i class=\"pe-hourglass-start pe-fw\"></i> Set-up";
        $since = ago($row['created']);
        $status = "Set-up";
        $ctimelinedata .= "[ 'Project ".$title."', 'Set-up', new Date(".$L0['year'].", ".$L0['month'].", ".$L0['day']."), new Date(".$today['year'].", ".$today['month'].", ".$today['day'].") ], \n"; $colordata .= "'#B3FFB3', ";
      } else if ($row['status'] == 2) {
        $ss = "<i class=\"pe-hourglass-half pe-fw\"></i> Data-collection";
        $since = ago($row['L1']);
        $status = "Data-collection";
        $ctimelinedata .= "[ 'Project ".$title."', 'Set-up', new Date(".$L0['year'].", ".$L0['month'].", ".$L0['day']."), new Date(".$L1['year'].", ".$L1['month'].", ".$L1['day'].") ], \n"; $colordata .= "'#B3FFB3', ";
        $ctimelinedata .= "[ 'Project ".$title."', 'Data-collection', new Date(".$L1['year'].", ".$L1['month'].", ".$L1['day']."), new Date(".$today['year'].", ".$today['month'].", ".$today['day'].") ], \n"; $colordata .= "'#00C851', ";
      } else if ($row['status'] == 3) {
        $ss = "<i class=\"pe-hourglass-end pe-fw\"></i> Completed";
        $since = ago($row['L2']);
        $status = "Completed";
        $ctimelinedata .= "[ 'Project ".$title."', 'Set-up', new Date(".$L0['year'].", ".$L0['month'].", ".$L0['day']."), new Date(".$L1['year'].", ".$L1['month'].", ".$L1['day'].") ], \n"; $colordata .= "'#B3FFB3', ";
        $ctimelinedata .= "[ 'Project ".$title."', 'Data-collection', new Date(".$L1['year'].", ".$L1['month'].", ".$L1['day']."), new Date(".$L2['year'].", ".$L2['month'].", ".$L2['day'].") ], \n"; $colordata .= "'#00C851', ";
        $ctimelinedata .= "[ 'Project ".$title."', 'Completed', new Date(".$L2['year'].", ".$L2['month'].", ".$L2['day']."), new Date(".$today['year'].", ".$today['month'].", ".$today['day'].") ], \n"; $colordata .= "'#007E33', ";
      } else if ($row['status'] == 4) {
        $ss = "<i class=\"pe-archive pe-fw\"></i> Archived";
        $since = ago($row['L3']);
        $status = "Archived";
        $ctimelinedata .= "[ 'Project ".$title."', 'Set-up', new Date(".$L0['year'].", ".$L0['month'].", ".$L0['day']."), new Date(".$L1['year'].", ".$L1['month'].", ".$L1['day'].") ], \n"; $colordata .= "'#B3FFB3', ";
        $ctimelinedata .= "[ 'Project ".$title."', 'Data-collection', new Date(".$L1['year'].", ".$L1['month'].", ".$L1['day']."), new Date(".$L2['year'].", ".$L2['month'].", ".$L2['day'].") ], \n"; $colordata .= "'#00C851', ";
        $ctimelinedata .= "[ 'Project ".$title."', 'Completed', new Date(".$L2['year'].", ".$L2['month'].", ".$L2['day']."), new Date(".$L3['year'].", ".$L3['month'].", ".$L3['day'].") ], \n"; $colordata .= "'#007E33', ";
        $ctimelinedata .= "[ 'Project ".$title."', 'Archived', new Date(".$L3['year'].", ".$L3['month'].", ".$L3['day']."), new Date(".$today['year'].", ".$today['month'].", ".$today['day'].") ], \n"; $colordata .= "'#AAAAAA', ";
      }
      $updated = ago($row['updated']);
      $t2 = date_parse_from_format("Y-m-d H:i:s", $row['updated']);
      if ($t2['month'] == "01") { $t2['month'] = "12"; $t2['year'] = $t2['year']-1; } else { $t2['month'] = $t2['month']-1; }
      if ($row['private'] == 1) { $private = "<span class=\"pull-right\"><i class=\"pe-folder-o\" title=\"It indicates this is a Private survey\"></i></span>"; } else { $private = "<span class=\"pull-right\"><i class=\"pe-folder-open-o\" title=\"It indicates this is a Public survey\"></i></span>"; }
      if ($owner_email == $_SESSION['email']) { $tabledata .= "    <tr bgcolor='#D7EFFD'>\n"; } else { $tabledata .= "    <tr>\n";}
      $tabledata .= "      <td>$title $private</td>\n";
      $tabledata .= "      <td>$owner_fullname <small>($owner_email)</small></td>\n";
      $tabledata .= "      <td>$ss</td>\n";
      // $tabledata .= "      <td align=\"right\">$updated</td>\n";
      $tabledata .= "    </tr>\n";
      $i++; $height = $height + "40";
    }
    $ctimelinedata .= " ]";
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
        <div id="piechart2"></div>
        <p align="right"><a href="/admin/?w=surveys" class="small">More...</a></p>
      </div>
      <div class="col-sm-6">
        <h4>Users</h4>
        <p><?php echo $companyname; ?> has <strong><?php echo $sttotal; ?> user(s)</strong> including <?php echo $levellist; ?> as shown in the table below.</p>
        <br>
        <table class="table table-hover small">
          <thead>
            <tr class="bg-success">
              <th width="50%">Name</th>
              <th width="25%">Role</th>
              <th width="25%" style="text-align:right">Projects (%)</th>
            </tr>
          </thead>
          <tbody>
    <?php print_r($orgdata); ?>
          </tbody>
        </table>
        <p align="right"><a href="/admin/?w=team" class="small">More...</a></p>
      </div>
    </div>

    <style>
      svg g:first-of-type path { stroke: #E6E6E6; }
      svg g:first-of-type rect:not(:last-child) { fill: #FFFFFF; }
    </style>

    <script type="text/javascript">
      google.charts.load('current', {'packages': ['corechart', 'timeline'] });
      google.charts.setOnLoadCallback(drawPieChart2);
      google.charts.setOnLoadCallback(drawTimelineChart2);
      function drawPieChart2() {
        var data = google.visualization.arrayToDataTable([
          ['Stage', 'No. of project'],
          ['Set-up', <?php echo $ss1; ?>],
          ['Fieldwork', <?php echo $ss2; ?>],
          ['Completed', <?php echo $ss3; ?>],
          ['Archived', <?php echo $ss4; ?>]
        ]);
        var options = {
          pieHole: 0.4,
          slices: { 0: { color: '#B3FFB3' }, 1: { color: '#00C851' }, 2: { color: '#007E33' }, 3: { color: '#AAAAAA' } },
          width: '100%',
          height: '350',
          chartArea:{ left: 5, top: 20, width: '100%', height: '350', },
        };
        var chart = new google.visualization.PieChart(document.getElementById('piechart2'));
        chart.draw(data, options);
      }
      function drawTimelineChart2() {
        var container = document.getElementById('timeline2');
        var chart = new google.visualization.Timeline(container);
        var dataTable = new google.visualization.DataTable();
        dataTable.addColumn({ type: 'string', id: 'Project' });
        dataTable.addColumn({ type: 'string', id: 'Status' });
        dataTable.addColumn({ type: 'date', id: 'Start' });
        dataTable.addColumn({ type: 'date', id: 'End' });
        dataTable.addRows(<?php echo $ctimelinedata; ?>);
        var options = {
          height: <?php echo $height; ?>,
          // width: '940px',
          colors: [ '#B3FFB3', '#00C851', '#007E33', '#AAAAAA' ],
          avoidOverlappingGridLines: false,
          timeline: { groupByRowLabel: true, colorByRow: true, }
        };
        chart.draw(dataTable, options);
      }
      $(window).resize(function() {
        drawPieChart2();
        drawTimelineChart2();
      });
    </script>

  </div>
</div>

<h4>Timing of all projects</h4>

<div id="timeline2" style="width: 100%"></div>
<p align="right"><a href="/admin/?w=surveys" class="small">More...</a></p>
<br>

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
