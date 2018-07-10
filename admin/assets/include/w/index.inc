<?php


$title = "Dashboard";
pageHeader($title);
echo "<h2>$title</h2>\n";
echo "<p class=\"introtext\">This is the main dashboard (welcome page) which aims to provide you with the overview of all the projects that you are involved with.</p>\n";
echo "<p class=\"introtext\">Although we build this website with an objective of being an easy for self-administration, we are still happy to support you in any cases. Should you need anything, please feel free to <a href=\"/admin/contact/\">contact us</a>.</p>\n";
echo "<br>\n";

if (isset($login)) {
  if ($login->errors) { foreach ($login->errors as $error) { echo $error; } }
  if ($login->messages) { foreach ($login->messages as $message) { echo $message; } }
}

?>
<nav>
  <ul class="nav nav-tabs">
    <li><a href="#one" data-toggle="tab" id='first-tab-trigger'><i class="pe-cubes pe-fw"></i> Summary of all projects</a></li>
    <li class="active"><a href="#two" data-toggle="tab" id='second-tab-trigger'><i class="pe-paper-plane pe-fw"></i> Active projects</a></li>
    <li><a href="#three" data-toggle="tab" id='third-tab-trigger'><i class="pe-archive pe-fw"></i> Inactive projects</a></li>
  </ul>
</nav>
<br>
<div class="tab-content">
  <div id="one" class="tab-pane fade">

<?php

echo "    <h3>Summary of all projects</h3>\n";

// Count different project status for this user
$q1 = $db->prepare("SELECT SUM(P.status='1') AS q1A, SUM(P.status='2') AS q1B, SUM(P.status='3') AS q1C, SUM(P.status='4') AS q1D, SUM(P.status='0') AS q1E, SUM(P.userid = :userid), P.status AS q1F, P.* FROM j_projects P INNER JOIN j_access A ON A.projectid = P.id AND A.userid = :userid ORDER BY P.status ASC, P.created DESC");
$q1->bindValue(':userid', $_SESSION["userid"], PDO::PARAM_INT);
$q1->execute();
$mine = array();
while ($row = $q1->fetchObject()) {
  array_push($mine, $row->userid);
  $ustatus1 = $row->q1A;
  $ustatus2 = $row->q1B;
  $ustatus3 = $row->q1C;
  $ustatus4 = $row->q1D;
  $ustatus5 = $row->q1E;
  $ustatus6 = $row->q1F;
  $status = $row->status;
}
$totalALL = $ustatus1+$ustatus2+$ustatus3+$ustatus4+$ustatus5; $percentTotal = percent($totalALL/$totalALL);
$totalActive = $ustatus1+$ustatus2+$ustatus3; $percentActive = percent($totalActive/$totalALL);
$totalInactive = $ustatus4+$ustatus5; $percentInactive = percent($totalInactive/$totalALL);
$totalMine = $ustatus6; $percentMine = percent($totalMine/$totalALL);
$percentStatus1 = percent($ustatus1/$totalALL); $percentStatus2 = percent($ustatus2/$totalALL);
$percentStatus3 = percent($ustatus3/$totalALL); $percentStatus4 = percent($ustatus4/$totalALL);
$percentStatus5 = percent($ustatus5/$totalALL); $percentStatus6 = percent($ustatus6/$totalALL);
if ($totalALL == 0) {
  echo "    <p>Currently you do <u>not</u> have access to any of the existing projects. Let us know if your current projects do not show up.</p>\n";
  echo "    <p>You can create a new project by clicking <a class=\"btn btn-success\"><i class=\"pe-cube pe-fw\"></i> New project</a> which can be found in <a href=\"/admin/?w=surveys\" title=\"The main survey page\">the main survey page</a>.\n";
} else {
  if ($totalALL == 1) {
    if ($totalActive == 1) { echo "    <p>You have an access to <strong>$totalALL project</strong> and it is an active project. \n"; }
    else if ($totalInactive == 1) { echo "    <p>You have an access to <strong>$totalALL project</strong> and it is an inactive project. \n"; }
  } else if ($totalALL > 1) {
    if ($totalActive == 0) { echo "    <p>You have an access to <strong>$totalALL projects</strong> and all of them are inactive. \n"; }
    else if ($totalInactive == 0) { echo "    <p>You have an access to <strong>$totalALL projects</strong> and all of them are active. \n"; }
    else { echo "    <p>You have an access to <strong>$totalALL projects</strong> where <strong>$totalActive projects</strong> are active and <strong>$totalInactive projects</strong> are inactive. \n"; }
  }
  if ($totalMine == 0) { echo "    None of these projectss is managed directly by you.</p>\n"; }
  else if ($totalMine == 1) { echo "    And among these projects, you directly manage <strong>$totalMine project</strong>.</p>\n"; }
  else { echo "    And among these projects, you directly manage a total of <strong>$totalMine projects</strong>.</p>\n"; }
  echo "    <br>\n";
?>
    <div class="row">
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <div id="piechart" style="height:200px"></div>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <table class="table table-hover small">
          <thead>
            <tr class="bg-success">
              <th width="40%">Stage</th>
              <th width="30%" style="text-align:right">Projects</th>
              <th width="30%" style="text-align:right">%</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><?php echo status_project(1, true, true); ?></td>
              <td align="right"><?php echo $ustatus1; ?> </td>
              <td align="right"><?php echo $percentStatus1; ?></td>
            </tr>
            <tr>
              <td><?php echo status_project(2, true, true); ?></td>
              <td align="right"><?php echo $ustatus2; ?> </td>
              <td align="right"><?php echo $percentStatus2; ?></td>
            </tr>
            <tr>
              <td><?php echo status_project(3, true, true); ?></td>
              <td align="right"><?php echo $ustatus3; ?> </td>
              <td align="right"><?php echo $percentStatus3; ?></td>
            </tr>
            <tr style="background-color:#eee">
              <td><?php echo status_project(4, true, true); ?></td>
              <td align="right"><?php echo $ustatus4; ?> </td>
              <td align="right"><?php echo $percentStatus4; ?></td>
            </tr>
            <tr style="background-color:#eee">
              <td><?php echo status_project(0, true, true); ?></td>
              <td align="right"><?php echo $ustatus5; ?> </td>
              <td align="right"><?php echo $percentStatus5; ?></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <br>
<?php } ?>

  </div>
  <div id="two" class="tab-pane fade in active">
    <h3>Active projects</h3>

<?php

if ($totalActive == 0) {
  echo "    <p>Currently you do <u>not</u> have any active projects.</p>\n";
} else if ($totalActive == 1) {
  if ($ustatus1 == 1) { echo "    <p>Currently you have an access to <strong>$totalActive active project</strong> and it is in the set up stage.</p>\n"; }
  else if ($ustatus2 == 1) { echo "    <p>Currently you have an access to <strong>$totalActive active project</strong> and it is in the data collection stage.</p>\n"; }
  else if ($ustatus3 == 1) { echo "    <p>Currently you have an access to <strong>$totalActive active project</strong> and it is in the completion stage.</p>\n"; }
} else if ($totalActive > 1) {
  echo "    <p>Currently you have an access to <strong>$totalActive active projects</strong> which can be divided into <strong>$ustatus1 projects</strong> in the project setup stage, <strong>$ustatus2 projects</strong> in the data collection stage and <strong>$ustatus3 projects</strong> in the completion stage.</p>\n";
}

$i = 0;
$year = date("Y"); $month = date("m"); $day = date("d");
if ($month == "01") { $month = "12"; $year = $year-1; } else { $month = $month-1; }
$utimelinedata1 = "[ \n"; $utimelinedata2 = "[ \n"; $colordata = "[ ";
$q2 = $db->prepare("SELECT P.* FROM j_projects P INNER JOIN j_access A ON A.projectid = P.id AND A.userid = :userid WHERE P.status >= 1 ORDER BY P.status ASC, P.L2 DESC");
$q2->bindValue(':userid', $_SESSION["userid"], PDO::PARAM_INT);
$q2->execute();
$rows = $q2->fetchAll(PDO::FETCH_ASSOC);
foreach ($rows as $row) {
  $title = $row['title'];
  $private = $row['private'];
  $status = $row['status'];
  if (($status == 1) || ($status == 2) || ($status == 3)) { $id[] = $row['id']; }
  if (($status == 2) || ($status == 3)) { $kid[] = $row['id']; }
  if ($row['created']) { $L0 = date_parse_from_format("Y-m-d H:i:s", $row['created']); if ($L0['month'] == "01") { $L0['month'] = "12"; $L0['year'] = $L0['year']-1; } else { $L0['month'] = $L0['month']-1; } $created = ago($row['created']); $LLL0 = $row['created']; } else { $LL0 = "-"; }
  if ($row['L1']) { $L1 = date_parse_from_format("Y-m-d H:i:s", $row['L1']); if ($L1['month'] == "01") { $L1['month'] = "12"; $L1['year'] = $L1['year']-1; } else { $L1['month'] = $L1['month']-1; } $LL1 = ago($row['L1']); $LLL1 = $row['L1']; } else { $LL1 = "-"; }
  if ($row['L2']) { $L2 = date_parse_from_format("Y-m-d H:i:s", $row['L2']); if ($L2['month'] == "01") { $L2['month'] = "12"; $L2['year'] = $L2['year']-1; } else { $L2['month'] = $L2['month']-1; } $LL2 = ago($row['L2']); $LLL2 = $row['L2']; } else { $LL2 = "-"; }
  if ($row['L3']) { $L3 = date_parse_from_format("Y-m-d H:i:s", $row['L3']); if ($L3['month'] == "01") { $L3['month'] = "12"; $L3['year'] = $L3['year']-1; } else { $L3['month'] = $L3['month']-1; } $LL3 = ago($row['L3']); $LLL3 = $row['L3']; } else { $LL3 = "-"; }
  if ($row['status'] == 1) {
    $utimelinedata1 .= "      [ '".$title."', 'Set-up', new Date(".$L0['year'].", ".$L0['month'].", ".$L0['day']."), new Date(".$year.", ".$month.", ".$day.") ], \n"; $colordata .= "'#B3FFB3', ";
  } else if ($row['status'] == 2) {
    $utimelinedata1 .= "      [ '".$title."', 'Set-up', new Date(".$L0['year'].", ".$L0['month'].", ".$L0['day']."), new Date(".$L1['year'].", ".$L1['month'].", ".$L1['day'].") ], \n"; $colordata .= "'#B3FFB3', ";
    $utimelinedata1 .= "      [ '".$title."', 'Data-collection', new Date(".$L1['year'].", ".$L1['month'].", ".$L1['day']."), new Date(".$year.", ".$month.", ".$day.") ], \n"; $colordata .= "'#00C851', ";
  } else if ($row['status'] == 3) {
    $utimelinedata1 .= "      [ '".$title."', 'Set-up', new Date(".$L0['year'].", ".$L0['month'].", ".$L0['day']."), new Date(".$L1['year'].", ".$L1['month'].", ".$L1['day'].") ], \n"; $colordata .= "'#B3FFB3', ";
    $utimelinedata1 .= "      [ '".$title."', 'Data-collection', new Date(".$L1['year'].", ".$L1['month'].", ".$L1['day']."), new Date(".$L2['year'].", ".$L2['month'].", ".$L2['day'].") ], \n"; $colordata .= "'#00C851', ";
    $utimelinedata1 .= "      [ '".$title."', 'Completed', new Date(".$L2['year'].", ".$L2['month'].", ".$L2['day']."), new Date(".$year.", ".$month.", ".$day.") ], \n"; $colordata .= "'#007E33', ";
  } else if ($row['status'] == 4) {
    $utimelinedata2 .= "      [ '".$title."', 'Set-up', new Date(".$L0['year'].", ".$L0['month'].", ".$L0['day']."), new Date(".$L1['year'].", ".$L1['month'].", ".$L1['day'].") ], \n"; $colordata .= "'#B3FFB3', ";
    $utimelinedata2 .= "      [ '".$title."', 'Data-collection', new Date(".$L1['year'].", ".$L1['month'].", ".$L1['day']."), new Date(".$L2['year'].", ".$L2['month'].", ".$L2['day'].") ], \n"; $colordata .= "'#00C851', ";
    $utimelinedata2 .= "      [ '".$title."', 'Completed', new Date(".$L2['year'].", ".$L2['month'].", ".$L2['day']."), new Date(".$L3['year'].", ".$L3['month'].", ".$L3['day'].") ], \n"; $colordata .= "'#007E33', ";
    // $utimelinedata2 .= "      [ '".$title."', 'Archived', new Date(".$L3['year'].", ".$L3['month'].", ".$L3['day']."), new Date(".$year.", ".$month.", ".$day.") ], \n"; $colordata .= "'#AAAAAA', ";
  }
  $updated = ago($row['updated']);
  $i++;
}
$utimelinedata1 .= "    ]"; $utimelinedata2 .= "    ]";
$colordata = substr($colordata, 0, -2);
$colordata .= " ]";
?>

<?php if ($ustatus1 + $ustatus2 + $ustatus3 > 0) { ?>
    <h4>Timing of all active projects</h4>
    <div id="timeline1"></div>
<?php } ?>


<?php

function getWho($surveyid) {
  global $db;
  $q5 = $db->prepare("SELECT U.fullname, U.email, U.lastlogin, R.role FROM j_users U, j_access A, j_roles R WHERE A.userid = U.id AND U.level = R.id AND A.projectid = :surveyid ");
  $q5->bindValue(':surveyid', $surveyid, PDO::PARAM_INT);
  $q5->execute();
  $whoelse = "<p><a data-toggle=\"collapse\" href=\"#whoelse$surveyid\" aria-expanded=\"false\" class=\"alert-link\">Click to see other user(s)</a> who also access to this project (click again to close)</p>\n";
  $whoelse .= "<div class=\"collapse\" id=\"whoelse$surveyid\">";
  $whoelse .= "<table class='table table-condensed small'>\n";
  $whoelse .= "  <thead>\n";
  $whoelse .= "    <tr class='bg-info'><th>Name</th><th>Email</th><th>Role</th><th>Last seen</th></tr>\n";
  $whoelse .= "  </thead>\n";
  $whoelse .= "  <tbody>\n";
  while ($row = $q5->fetchObject()) {
    if ($row->lastlogin) { $lastlogin = ago($row->lastlogin); } else { $lastlogin = "Never login"; }
    $whoelse .= "    <tr><td>$row->fullname</td><td><a href='mailto:$row->email'>$row->email</a></td><td>$row->role</td><td>$lastlogin</td></tr>\n";
  }
  // $whoelse = rtrim($whoelse, ', ');
  $whoelse .= "  </tbody>\n";
  $whoelse .= "</table>\n";
  $whoelse .= "</div>\n";
  return $whoelse;
}

function getStats($surveyid) {
  global $db;
  // $sample_size = 500;
  $q3 = $db->prepare("SELECT MAX(R.id) AS latest, SUM(R.status='2') AS q2B1, SUM(R.status='1') AS q2B2, SUM(R.status='0') AS q2B3, P.id, P.title, P.sample, P.status, P.created, P.L1, P.L2, P.L3 FROM j_results R, j_projects P WHERE R.surveyid = P.id AND R.surveyid = :surveyid ");
  $q3->bindValue(':surveyid', $surveyid, PDO::PARAM_INT);
  $q3->execute();
  while ($row = $q3->fetchObject()) {
    $pid = $row->id;
    $RDpilot = $row->q2B2;
    $RDterminated = $row->q2B3;
    $RDall = $RDterminated + $RDpilot + $RDsuccess;
    $ptitle = $row->title;
    $sample_size = $row->sample;
    $status = $row->status;
    $LLL0 = $row->created;
    $LLL1 = $row->L1;
    $LLL2 = $row->L2;
    $LLL3 = $row->L3;
    $latest = $row->latest;
    $RDsuccess = $row->q2B1;
    $RDsuccess_percent = percent($RDsuccess/$sample_size);
    // if ($RDsuccess || $RDsuccess == 0) { $RDsuccess_bar = "<div class=\"progress\"><div class=\"progress-bar progress-bar-striped\" role=\"progressbar\" aria-valuenow=\"$RDsuccess_percent\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"min-height:0.2em; min-width:2em; width:$RDsuccess_percent\">$RDsuccess_percent</div></div>"; } else { $RDsuccess_bar = "<div class=\"progress\"></div>"; }
  }
  $q4 = $db->prepare("SELECT submitted FROM j_results where id=(select max(id) from j_results WHERE surveyid = :surveyid) ");
  $q4->bindValue(':surveyid', $surveyid, PDO::PARAM_INT);
  $q4->execute();
  while ($row = $q4->fetchObject()) {
    $A = date_parse_from_format("Y-m-d H:i:s", $row->submitted);
    $lastsubmittedA = $A['day']." ".fullmonth($A['month'], "short");
    $lastsubmittedB = ago($row->submitted);
  }
  $newsurveyid = ltrim($surveyid, '0');
  if (($status == 1) || ($status == 2) || ($status == 3)) {
    if ($status == "1") {
      $stage = "1";
      $a = date_parse_from_format("Y-m-d H:i:s", $LLL0); $ac = $a['year']."-".$a['month']."-".$a['day']; $begindate0 = $a['day']." ".fullmonth($a['month'], "short");
      $from0 = strtotime($ac); $today = time();
      $difference1 = $today-$from0; $dd1 = floor($difference1/86400); if ($dd1 == "1") { $daysofsetup = "$dd1 day"; } else { $daysofsetup = "$dd1 days"; }
      $setuptiming = "since $begindate0";
      $fieldworkstatus = "<font color=\"orange\">Still at the set-up stage</font>";
      $insert1 .= "<div class=\"bg-default text-center\" style=\"padding: 10px; border: 2px solid black;\"><p style=\"margin-bottom:10px !important\" class=\"small\">Setup ($setuptiming)</p><h4 style=\"margin-bottom:10px !important\"><strong>$daysofsetup</strong></h4></div>\n";
      $insert1 .= "<br>\n";
      if ($sample_size) { $ss0 = "n=$sample_size"; $ss1 = "bg-default"; } else { $ss0 = "N/A"; $ss1 = "bg-warning"; }
      $insert2 .= "<div class=\"$ss1 text-center\" style=\"padding: 10px; border: 2px solid black;\"><p style=\"margin-bottom:10px !important\" class=\"small\">Target sample</p><h4 style=\"margin-bottom:10px !important\"><strong>$ss0</strong></h4></div>\n";
      $insert2 .= "<br>\n";
      $menu = "    <a href=\"/admin/?w=design&amp;s=$newsurveyid\" class=\"btn btn-tiny btn-warning\">Questionnaire design <i class=\"pe-edit\"></i></a>\n";
      $menu .= "    <a href=\"/r.php?pilot=✓&amp;s=$newsurveyid\" class=\"btn btn-tiny btn-default\">Pilot test <i class=\"pe-paper-plane\"></i></a>\n";
    } else if ($status == "2") {
      $stage = "2";
      $a = date_parse_from_format("Y-m-d H:i:s", $LLL0); $ac = $a['year']."-".$a['month']."-".$a['day']; $begindate0 = $a['day']." ".fullmonth($a['month'], "short");
      $b = date_parse_from_format("Y-m-d H:i:s", $LLL1); $bc = $b['year']."-".$b['month']."-".$b['day']; $begindate1 = $b['day']." ".fullmonth($b['month'], "short");
      $from0 = strtotime($ac); $from1 = strtotime($bc); $today = time();
      $difference1 = $from1-$from0; $dd1 = floor($difference1/86400); if ($dd1 == "1") { $daysofsetup = "$dd1 day"; } else { $daysofsetup = "$dd1 days"; }
      $difference2 = $today-$from1; $dd2 = floor($difference2/86400); if ($dd2 == "1") { $daysoffieldwork = "$dd2 day"; } else { $daysoffieldwork = "$dd2 days"; }
      $setuptiming = "$begindate0 to $begindate1";
      $fieldworktiming = "since $begindate1";
      $rate = $RDsuccess / $daysoffieldwork;
      $stilltodo = number_format(($sample_size-$RDsuccess) / $rate, 1);
      $fieldworkstatus = "<font color=\"green\">Fieldwork is still on-going</font>";
      $insert1 .= "<div class=\"bg-default text-center\" style=\"padding: 10px; border: 2px solid black;\"><p style=\"margin-bottom:10px !important\" class=\"small\">Setup ($setuptiming)</p><h4 style=\"margin-bottom:10px !important\"><strong>$daysofsetup</strong></h4></div>\n";
      $insert1 .= "<br><div class=\"bg-default text-center\" style=\"padding: 10px; border: 2px solid black;\"><p style=\"margin-bottom:10px !important\" class=\"small\">Fieldwork ($fieldworktiming)</p><h4 style=\"margin-bottom:10px !important\"><strong>$daysoffieldwork</strong></h4></div>\n";
      if ($sample_size) {
        if ($RDsuccess) {
          if ($RDsuccess == $sample_size) {
            $insert2 .= "<br><div class=\"bg-primary text-center\" style=\"padding: 10px; border: 2px solid black;\"><p style=\"margin-bottom:10px !important\" class=\"small\">So far</p><h4 style=\"margin-bottom:10px !important\"><strong>n=$RDsuccess <i class=\"pe-check-circle-o pe-lg green\"></i></strong></h4></div>\n";
            $insert2 .= "<br><div class=\"bg-default text-center\" style=\"padding: 10px; border: 2px solid black;\"><p style=\"margin-bottom:10px !important\" class=\"small\">Progression</p><h4 style=\"margin-bottom:10px !important\"><strong>$RDsuccess_percent</strong></h4></div><br>\n";
            $insert1 .= "<br><div class=\"text-center\" style=\"padding: 10px; border: 2px solid black;\"><p style=\"margin-bottom:10px !important\" class=\"small\">Expected to end in</p><h4 style=\"margin-bottom:10px !important\"><strong>$stilltodo days</strong></h4></div>\n";
          } else if ($RDsuccess > $sample_size) {
            $insert2 .= "<br><div class=\"bg-primary text-center\" style=\"padding: 10px; border: 2px solid black;\"><p style=\"margin-bottom:10px !important\" class=\"small\">So far</p><h4 style=\"margin-bottom:10px !important\"><strong>n=$RDsuccess <i class=\"pe-check-circle-o pe-lg orange\"></i></strong></h4></div>\n";
            // $insert2 .= "<br><div class=\"bg-warning text-center\" style=\"padding: 10px; border: 2px solid black;\"><p style=\"margin-bottom:10px !important\" class=\"small\">Progression</p><h4 style=\"margin-bottom:10px !important\"><strong>$RDsuccess_percent</strong></h4></div><br>\n";
            // $insert1 .= "<br><div class=\"text-center\" style=\"padding: 10px; border: 2px solid black;\"><p style=\"margin-bottom:10px !important\" class=\"small\">Expected to end in</p><h4 style=\"margin-bottom:10px !important\"><strong>$stilltodo days</strong></h4></div>\n";
          } else if ($RDsuccess < $sample_size) {
            $insert2 .= "<br><div class=\"bg-info text-center\" style=\"padding: 10px; border: 2px solid black;\"><p style=\"margin-bottom:10px !important\" class=\"small\">So far</p><h4 style=\"margin-bottom:10px !important\"><strong>n=$RDsuccess </strong></h4></div>\n";
            $insert2 .= "<br><div class=\"bg-warning text-center\" style=\"padding: 10px; border: 2px solid black;\"><p style=\"margin-bottom:10px !important\" class=\"small\">Progression</p><h4 style=\"margin-bottom:10px !important\"><strong>$RDsuccess_percent</strong></h4></div><br>\n";
            $insert1 .= "<br><div class=\"text-center\" style=\"padding: 10px; border: 2px solid black;\"><p style=\"margin-bottom:10px !important\" class=\"small\">Expected to end in</p><h4 style=\"margin-bottom:10px !important\"><strong>$stilltodo days</strong></h4></div>\n";
          }
        } else {
          $insert2 .= "<div class=\"bg-default text-center\" style=\"padding: 10px; border: 2px solid black;\"><p style=\"margin-bottom:10px !important\" class=\"small\">Target sample</p><h4 style=\"margin-bottom:10px !important\"><strong>n=$sample_size</strong></h4></div>\n";
        }
      } else {
        if ($RDsuccess) {
          $insert2 .= "<div class=\"bg-default text-center\" style=\"padding: 10px; border: 2px solid black;\"><p style=\"margin-bottom:10px !important\" class=\"small\">Target sample</p><h4 style=\"margin-bottom:10px !important\" class=\"red\"><strong>N/A</strong></h4></div>\n";
          $insert2 .= "<br><div class=\"bg-primary text-center\" style=\"padding: 10px; border: 2px solid black;\"><p style=\"margin-bottom:10px !important\" class=\"small\">So far</p><h4 style=\"margin-bottom:10px !important\"><strong>n=$RDsuccess</strong></h4></div>\n";
          // $insert2 .= "<br><div class=\"bg-default text-center\" style=\"padding: 10px; border: 2px solid black;\"><p style=\"margin-bottom:10px !important\" class=\"small\">Progression</p><h4 style=\"margin-bottom:10px !important\"><strong>$RDsuccess_percent</strong></h4></div><br>\n";
          // $insert1 .= "<br><div class=\"bg-info text-center\" style=\"padding: 10px; border: 2px solid black;\"><p style=\"margin-bottom:10px !important\" class=\"small\">Expected to end in</p><h4 style=\"margin-bottom:10px !important\"><strong>$stilltodo days</strong></h4></div>\n";
        } else {
          $insert2 .= "<div class=\"bg-default text-center\" style=\"padding: 10px; border: 2px solid black;\"><p style=\"margin-bottom:10px !important\" class=\"small\">Target sample</p><h4 style=\"margin-bottom:10px !important\" class=\"red\"><strong>N/A</strong></h4></div>\n";
        }
      }
      $menu = "    <a href=\"/r.php?s=$newsurveyid\" class=\"btn btn-tiny btn-success\" target=\"_blank\">Live <i class=\"pe-plane\"></i></a>\n";
      $menu .= "    <a href=\"/admin/?w=progress&amp;s=$newsurveyid\" class=\"btn btn-tiny btn-default\">Progress <i class=\"pe-flask\"></i></a>\n";
      $menu .= "    <a href=\"/admin/?w=result&amp;s=$newsurveyid\" class=\"btn btn-tiny btn-default\">Result <i class=\"pe-line-chart\"></i></a>\n";
      $label = "<span class=\"label label-danger\">ON-AIR</span>";
      $insert3 = "  <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n";
      $insert3 .= "    <div id='areachart-$surveyid'></div>\n";
      $insert3 .= "  </div>\n";
    } else if ($status > "2") {
      $stage = "3";
      $a = date_parse_from_format("Y-m-d H:i:s", $LLL0); $ac = $a['year']."-".$a['month']."-".$a['day']; $begindate0 = $a['day']." ".fullmonth($a['month'], "short");
      $b = date_parse_from_format("Y-m-d H:i:s", $LLL1); $bc = $b['year']."-".$b['month']."-".$b['day']; $begindate1 = $b['day']." ".fullmonth($b['month'], "short");
      $c = date_parse_from_format("Y-m-d H:i:s", $LLL2); $cc = $c['year']."-".$c['month']."-".$c['day']; $begindate2 = $c['day']." ".fullmonth($c['month'], "short");
      $from0 = strtotime($ac); $from1 = strtotime($bc); $from2 = strtotime($cc); $today = time();
      $difference1 = $from1-$from0; $dd1 = floor($difference1/86400); if ($dd1 == "1") { $daysofsetup = "$dd1 day"; } else { $daysofsetup = "$dd1 days"; }
      $difference2 = $from2-$from1; $dd2 = floor($difference2/86400); if ($dd2 == "1") { $daysoffieldwork = "$dd2 day"; } else { $daysoffieldwork = "$dd2 days"; }
      $difference3 = $today-$from2; $dd3 = floor($difference3/86400); if ($dd3 == "1") { $daysoffieldworkcompletion = "$dd3 day"; } else { $daysoffieldworkcompletion = "$dd3 days"; }
      $setuptiming = "$begindate0 to $begindate1";
      $fieldworktiming = "$begindate1 to $begindate2";
      $fieldworkstatus = "<font color=\"blue\">Data collection was completed</font>";
      $insert1 .= "<div class=\"bg-default text-center\" style=\"padding: 10px; border: 2px solid black;\"><p style=\"margin-bottom:10px !important\" class=\"small\">Setup ($setuptiming)</p><h4 style=\"margin-bottom:10px !important\"><strong>$daysofsetup</strong></h4></div>\n";
      $insert1 .= "<br><div class=\"bg-default text-center\" style=\"padding: 10px; border: 2px solid black;\"><p style=\"margin-bottom:10px !important\" class=\"small\">Fieldwork ($fieldworktiming)</p><h4 style=\"margin-bottom:10px !important\"><strong>$daysoffieldwork</strong></h4></div>\n";
      if ($sample_size) {
        $insert2 .= "<div class=\"bg-default text-center\" style=\"padding: 10px; border: 2px solid black;\"><p style=\"margin-bottom:10px !important\" class=\"small\">Target sample</p><h4 style=\"margin-bottom:10px !important\"><strong>n=$sample_size</strong></h4></div>\n";
        if ($RDsuccess) {
          if ($RDsuccess == $sample_size) { $nn = " <i class=\"pe-check-circle-o pe-lg green\"></i>"; }
          else if ($RDsuccess > $sample_size) { $nn = " <i class=\"pe-check-circle-o pe-lg orange\"></i>"; }
          else { $nn = ""; }
          $insert2 .= "<br><div class=\"bg-default text-center\" style=\"padding: 10px; border: 2px solid black;\"><p style=\"margin-bottom:10px !important\" class=\"small\">Successful interviews</p><h4 style=\"margin-bottom:10px !important\"><strong>n=$RDsuccess</strong>$nn</h4></div>\n";
        }
      } else {
        $insert2 .= "<div class=\"bg-default text-center\" style=\"padding: 10px; border: 2px solid black;\"><p style=\"margin-bottom:10px !important\" class=\"small\">Target sample</p><h4 style=\"margin-bottom:10px !important\" class=\"red\"><strong>N/A</strong></h4></div>\n";
        if ($RDsuccess) {
          // if ($RDsuccess == $sample_size) { $nn = " <i class=\"pe-check-circle-o pe-lg green\"></i>"; }
          // else if ($RDsuccess > $sample_size) { $nn = " <i class=\"pe-check-circle-o pe-lg orange\"></i>"; }
          // else { $nn = ""; }
          $insert2 .= "<br><div class=\"bg-default text-center\" style=\"padding: 10px; border: 2px solid black;\"><p style=\"margin-bottom:10px !important\" class=\"small\">Successful interviews</p><h4 style=\"margin-bottom:10px !important\"><strong>n=$RDsuccess</strong>$nn</h4></div>\n";
        }
      }
      $menu = "    <a href=\"/admin/?w=questionnaire&amp;s=$newsurveyid\" class=\"btn btn-tiny btn-default\">Questionnaire <i class=\"pe-edit\"></i></a>\n";
      $menu .= "    <a href=\"/admin/?w=progress&amp;s=$newsurveyid\" class=\"btn btn-tiny btn-default\">Progress <i class=\"pe-flask\"></i></a>\n";
      $menu .= "    <a href=\"/admin/?w=result&amp;s=$newsurveyid\" class=\"btn btn-tiny btn-default\">Result <i class=\"pe-line-chart\"></i></a>\n";
      //$menu .= "    <a href=\"/admin/?w=design&s=$newsurveyid\" class=\"btn btn-tiny btn-default\">Archive <i class=\"pe-archive\"></i></a>\n";
      $insert3 = "  <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n";
      $insert3 .= "    <div id='areachart-$surveyid'></div>\n";
      $insert3 .= "  </div>\n";
    } else {
      $begindate = "-";
      $daysoffieldwork = "0";
      $stage = "0";
    }
    if ($_SESSION['level'] == "9") { $insertid = "<small>($pid)</small>"; }
    $output = "";
    $output .= "<h4>Project $ptitle $insertid $label</h4>\n";
    $output .= "<p>Status: $fieldworkstatus</p>\n";
    $output .= "<p class=\"small\">Latest data submitted: $lastsubmittedA ($lastsubmittedB)</p>\n";
    $output .= "<p>$menu</p>\n";
    $output .= "<div class=\"row\">\n";
    $output .= "  <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\">\n";
    $output .= "    $insert1\n";
    $output .= "  </div>\n";
    $output .= "  <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\">\n";
    $output .= "    $insert2\n";
    $output .= "  </div>\n";
    $output .= $insert3;
    $output .= "</div>\n";
    if ($_SESSION['level'] == "9") { $output .= getWho($surveyid); }
    $output .= "<hr>\n";
    $output .= "<br>\n";
  }
  return $output;
}

function getArea($surveyid) {
  global $db;
  $q4 = $db->prepare("SELECT SSDATE, SUM(SSCOUNT1) as SSCOUNT1, SUM(SSCOUNT2) as SSCOUNT2 FROM ((SELECT COUNT(*) AS SSCOUNT1, NULL AS SSCOUNT2, DATE(submitted) as SSDATE FROM j_results WHERE surveyid = :surveyid AND status = 2 GROUP BY DATE(submitted)) UNION ALL (SELECT NULL AS SSCOUNT1, SUM(if (invitation IS NOT NULL AND participation IS NOT NULL, 1, 0)) AS SSCOUNT2, DATE(participation) as SSDATE FROM j_respondents WHERE surveyid = :surveyid GROUP BY DATE(participation))) t GROUP BY SSDATE");
  $q4->bindValue(':surveyid', $surveyid, PDO::PARAM_INT);
  $q4->execute();
  $area0 = "[\n";
  if ($q4->rowCount() < 1) { $SSCOUNT1 = "0"; $SSCOUNT2 = "0"; $NEWSSDATE = "-"; }
  else {
    while ($rr = $q4->fetchObject()) {
      $SSDATE = $rr->SSDATE;
      $SSDATE = explode("-", $rr->SSDATE);
      $month = fullmonth($SSDATE[1], "short");
      $NEWSSDATE = $SSDATE[2]." ".$month;
      $SSCOUNT1 += $rr->SSCOUNT1;
      $SSCOUNT2 += $rr->SSCOUNT2;
      if ($private == 1) { $area0 .= "        [\"".$NEWSSDATE."\", ".$SSCOUNT2.", ".$SSCOUNT1."], \n"; }
      else { $area0 .= "        [\"".$NEWSSDATE."\", ".$SSCOUNT1."], \n"; }
    }
  }
  $area0 .= "      ]";
  $area .= "  google.charts.setOnLoadCallback(drawAreaChart$surveyid);\n";
  $area .= "  function drawAreaChart$surveyid() {\n";
  $area .= "    var container = document.getElementById('areachart-$surveyid');\n";
  $area .= "    var chart = new google.visualization.AreaChart(container);\n";
  $area .= "    var dataTable = new google.visualization.DataTable();\n";
  $area .= "    dataTable.addColumn('string', 'Date');\n";
  if ($private) { $area .= "    dataTable.addColumn('number', 'Participation');\n"; }
  $area .= "    dataTable.addColumn('number', 'Successful interviews');\n";
  $area .= "    dataTable.addRows($area0);\n";
  if ($private) {
    $area .= "    var options = {\n";
    $area .= "      title: 'Sample size achieved by date (n=$SSCOUNT1)',\n";
    $area .= "      colors: ['grey', 'blue'],\n";
    $area .= "      legend: { position: 'top', alignment: 'end' },\n";
    $area .= "      areaOpacity: 0.1,\n";
    $area .= "      hAxis: {\n";
    $area .= "        gridlines: { color: '#E0E0E0' },\n";
    $area .= "        textStyle: { color: '#666666', fontName: 'Arial', fontSize: 9, bold: false, italic: false },\n";
    $area .= "      },\n";
    $area .= "      vAxis: {\n";
    $area .= "        gridlines: {color: '#E0E0E0' },\n";
    $area .= "        textStyle: { color: '#666666', fontName: 'Arial', fontSize: 9, bold: false, italic: false },\n";
    $area .= "        minValue: 0\n";
    $area .= "      },\n";
    $area .= "      pointSize: 5,\n";
    $area .= "      chartArea: { top: 40, bottom: 40, left: 40, right: 40, width: '100%', height: '100%' }\n";
    $area .= "    };\n";
  } else {
    $area .= "    var options = {\n";
    $area .= "      title: 'Sample size achieved by date (n=$SSCOUNT1)',\n";
    $area .= "      legend: { position: 'none' },\n";
    $area .= "      areaOpacity: 0.1,\n";
    $area .= "      hAxis: {\n";
    $area .= "        gridlines: { color: '#E0E0E0' },\n";
    $area .= "        textStyle: { color: '#666666', fontName: 'Arial', fontSize: 9, bold: false, italic: false },\n";
    $area .= "        slantedText: true,\n";
    $area .= "        slantedTextAngle: 45,\n";
    $area .= "      },\n";
    $area .= "      vAxis: {\n";
    $area .= "        gridlines: {color: '#E0E0E0' },\n";
    $area .= "        textStyle: { color: '#666666', fontName: 'Arial', fontSize: 9, bold: false, italic: false },\n";
    $area .= "        minValue: 0\n";
    $area .= "      },\n";
    $area .= "      pointSize: 5,\n";
    $area .= "      chartArea: { top: 40, bottom: 40, left: 40, right: 40, width: '100%', height: '100%' }\n";
    $area .= "    };\n";
  }
  $area .= "    chart.draw(dataTable, options);\n";
  $area .= "  }\n";
  return $area;
}

foreach($id as $d) { echo getStats($d); }

?>

  </div>

  <div id="three" class="tab-pane fade">
    <h3>Inactive projects</h3>

<?php

if ($totalInactive == 0) {
  echo "    <p>Currently you do <u>not</u> have any inactive projects.</p>\n";
} else if ($totalInactive == 1) {
  if ($ustatus4 == 1) { echo "    <p>Currently you have an access to <strong>$totalInactive inactive project</strong> with a status of being archived. In this section, only archived project is shown with details.</p>\n"; }
  else if ($ustatus5 == 1) { echo "    <p>Currently you have an access to <strong>$totalInactive inactive project</strong> with a status of being deleted. In this section, only archived project is shown with details.</p>\n"; }
} else if ($totalInactive > 1) {
  if ($ustatus5 == 0) { echo "    <p>Currently you have an access to <strong>$totalInactive inactive projects</strong> and all of them hold a status of being archived. In this section, only archived projects are shown with details.</p>\n"; }
  else if ($ustatus4 == 0) { echo "    <p>Currently you have an access to <strong>$totalInactive inactive projects</strong> and all of them hold a status of being deleted. In this section, only archived projects are shown with details.</p>\n"; }
  else { echo "    <p>Currently you have an access to <strong>$totalInactive inactive projects</strong> where <strong>$ustatus4 projects</strong> are archived and <strong>$ustatus5 projects</strong> are deleted. In this section, only archived projects are shown with details.</p>\n"; }
}
?>

<?php if ($ustatus4 + $ustatus5 > 0) { ?>
    <h4>Timing of your past archived projects</h4>
    <div id="timeline2"></div>
<?php } ?>

  </div>
</div>

<script type="text/javascript">
  var private = <?php echo $private; ?>;
  google.charts.load('current', {'packages': ['corechart', 'timeline', 'orgchart', 'gauge', 'table'] });

  google.charts.setOnLoadCallback(drawPieChart);
  function drawPieChart() {
    var data = google.visualization.arrayToDataTable([
      [ 'Stage', 'No. of project' ],
      [ '<?php echo status_project(1, false, false); ?>', <?php echo $ustatus1; ?> ],
      [ '<?php echo status_project(2, false, false); ?>', <?php echo $ustatus2; ?> ],
      [ '<?php echo status_project(3, false, false); ?>', <?php echo $ustatus3; ?> ],
      [ '<?php echo status_project(4, false, false); ?>', <?php echo $ustatus4; ?> ],
      [ '<?php echo status_project(0, false, false); ?>', <?php echo $ustatus5; ?> ]
    ]);
    var options = {
      pieHole: 0.4,
      sliceVisibilityThreshold: 0,
      backgroundColor: 'transparent',
      slices: { 0: { color: '#B3FFB3' }, 1: { color: '#00C851' }, 2: { color: '#007E33' }, 3: { color: '#AAAAAA' }, 4: { color: '#777777' } },
      width: '100%',
      legend: { position: 'right', textStyle: { fontSize: '10' } },
      chartArea: { height: '250', top: 0 },
    };
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
  }

<?php if ($ustatus1 + $ustatus2 + $ustatus3 > 0) { ?>
  google.charts.setOnLoadCallback(drawTimelineChart1);
  function drawTimelineChart1() {
    var container = document.getElementById('timeline1');
    var chart = new google.visualization.Timeline(container);
    var data = new google.visualization.DataTable();
    data.addColumn({ type: 'string', id: 'Project' });
    data.addColumn({ type: 'string', id: 'Status' });
    data.addColumn({ type: 'date', id: 'Start' });
    data.addColumn({ type: 'date', id: 'End' });
    data.addRows(<?php echo $utimelinedata1; ?>);
    chart.draw(data, options);
    var newheight = parseInt($("#timeline1 div:first-child div:first-child div:first-child div svg").attr( "height"))+70;
    var options = {
      height: newheight,
      colors: [ '#B3FFB3', '#00C851', '#007E33', '#AAAAAA' ],
      avoidOverlappingGridLines: false,
      timeline: { groupByRowLabel: true, colorByRow: true, }
    };
    chart.draw(data, options);
  }
<?php } ?>

<?php if ($ustatus4 + $ustatus5 > 0) { ?>
  google.charts.setOnLoadCallback(drawTimelineChart2);
  function drawTimelineChart2() {
    var container = document.getElementById('timeline2');
    var chart = new google.visualization.Timeline(container);
    var data = new google.visualization.DataTable();
    data.addColumn({ type: 'string', id: 'Project' });
    data.addColumn({ type: 'string', id: 'Status' });
    data.addColumn({ type: 'date', id: 'Start' });
    data.addColumn({ type: 'date', id: 'End' });
    data.addRows(<?php echo $utimelinedata2; ?>);
    chart.draw(data, options);
    var newheight = parseInt($("#timeline2 div:first-child div:first-child div:first-child div svg").attr( "height"))+70;
    var options = {
      height: newheight,
      colors: [ '#B3FFB3', '#00C851', '#007E33', '#AAAAAA' ],
      avoidOverlappingGridLines: false,
      timeline: { groupByRowLabel: true, colorByRow: true, }
    };
    chart.draw(data, options);
  }
<?php } ?>

<?php foreach ($kid as $d) { echo getArea($d); } ?>

  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    if ($(e.target).attr('id') == 'first-tab-trigger') { drawPieChart(); }
    if ($(e.target).attr('id') == 'second-tab-trigger') { <?php if ($ustatus1 + $ustatus2 + $ustatus3 > 0) { ?>drawTimelineChart1();<?php } ?> }
    if ($(e.target).attr('id') == 'third-tab-trigger') { <?php if ($ustatus4 + $ustatus5 > 0) { ?>drawTimelineChart2();<?php } ?>  }
  })
</script>


<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
