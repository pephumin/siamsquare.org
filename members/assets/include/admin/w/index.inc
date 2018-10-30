<?php

$title = "Dashboard";
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
  if ($r->fullname_th) { $companyname = $r->fullname." <small>&laquo; ".$r->fullname_th." &raquo;</small>"; }
  else { $companyname = $r->fullname; }
}

echo "<h2>$title</h2>\n";
echo "<p class=\"introtext\">This is the main user interface containing the overview information about you (".$_SESSION['fullname'].") and your company ($r->fullname).</p>\n";
echo "<p class=\"introtext\">Although we build this website with an objective of being an easy for self-administration, we are still happy to support you in any cases. Should you need anything, please feel free to <a href=\"/admin/contact/\">contact us</a>.</p>\n";
echo "<br>\n";

if (isset($login)) {
  if ($login->errors) { foreach ($login->errors as $error) { echo $error; } }
  if ($login->messages) { foreach ($login->messages as $message) { echo $message; } }
}

?>
<nav>
  <ul class="nav nav-tabs">
    <li class="active"><a href="#one" data-toggle="tab"><i class="pe-user pe-fw"></i> Summary of your projects</a></li>
    <li><a href="#two" data-toggle="tab"><i class="pe-building pe-fw"></i> Summary of all company's projects</a></li>
  </ul>
</nav>
<br>
<div class="tab-content">
  <div id="one" class="tab-pane fade in active">
<?php
// Count different project status for this user
$q1 = $db->prepare("SELECT SUM(status='1') AS q1A, SUM(status='2') AS q1B, SUM(status='3') AS q1C, SUM(status='4') AS q1D, SUM(status='0') AS q1E FROM j_projects WHERE companyid = :companyid AND userid = :userid");
$q1->bindValue(':companyid', $_SESSION["companyid"], PDO::PARAM_INT);
$q1->bindValue(':userid', $_SESSION["userid"], PDO::PARAM_INT);
$q1->execute();
while ($row = $q1->fetchObject()) { $ustatus1 = $row->q1A; $ustatus2 = $row->q1B; $ustatus3 = $row->q1C; $ustatus4 = $row->q1D; $ustatus5 = $row->q1E; }
$totalALL = $ustatus1 + $ustatus2 + $ustatus3 + $ustatus4 + $ustatus5; $percentTotal = percent($totalALL / $totalALL);
$totalActive = $ustatus1 + $ustatus2 + $ustatus3; $totalInactive = $ustatus4 + $ustatus5;
$percentActive = percent($totalActive / $totalALL); $percentInactive = percent($totalInactive / $totalALL);
$percentStatus1 = percent($ustatus1 / $totalALL); $percentStatus2 = percent($ustatus2 / $totalALL);
$percentStatus3 = percent($ustatus3 / $totalALL); $percentStatus4 = percent($ustatus4 / $totalALL);
$percentStatus5 = percent($ustatus5 / $totalALL);
if ($_SESSION['avatar']) { echo "    <div class=\"pull-right\" style=\"margin-top:0px\"><img src=\"assets/img/u/".$_SESSION['avatar'].".svg\" class=\"img-circle members-photo\"></div>\n"; }
echo "    <h3>".$_SESSION['fullname']." <small>&laquo; ".$_SESSION['email']." &raquo;</small></h3>\n";
echo "    <h4>Summary of your projects</h4>\n";
if ($totalALL == 0) {
  echo "    <p>Currently you do <u>not</u> have any survey projects under your direct management so there is no stats to be shown here.</p>\n";
  echo "    <p>You can create a new project at anytime by clicking <a class=\"btn btn-success\"><i class=\"pe-cube pe-fw\"></i> New project</a> which can be found in <a href=\"/admin/?w=surveys\" title=\"The main survey page\">the main survey page</a>.\n";
} else {
  if ($totalALL == 1) { echo "    <p>You directly manage <strong>$totalALL project</strong>"; if ($totalActive == 1) { echo " and it is an active project.</p>\n"; } else if ($totalInactive == 1) { echo " and it is an inactive project.</p>\n"; } }
  else if ($totalALL > 1) { echo "    <p>You directly manage <strong>$totalALL projects</strong> including <strong>$totalActive</strong> active and <strong>$totalInactive</strong> inactive respectively.</p>\n"; }
  echo "    <br>\n";
?>
    <div class="row">
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <div id="piechart1" style="height:200px"></div>
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
<?php if ($_SESSION['level'] > 5) { ?>
            <tr style="background-color:#eee">
              <td><?php echo status_project(0, true, true); ?></td>
              <td align="right"><?php echo $ustatus5; ?> </td>
              <td align="right"><?php echo $percentStatus5; ?></td>
            </tr>
<?php } ?>
          </tbody>
        </table>
      </div>
    </div>
    <br>
<?php
$i = 0;
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
    $ss = " <i class=\"pe-hourglass-start pe-fw\"></i> Set-up (since: ".ago($row['created']).")";
    $ustatus = "Set-up";
    $utimelinedata .= "      [ '".$title."', 'Set-up', new Date(".$L0['year'].", ".$L0['month'].", ".$L0['day']."), new Date(".$today['year'].", ".$today['month'].", ".$today['day'].") ], \n"; $colordata .= "'#B3FFB3', ";
  } else if ($row['status'] == 2) {
    $ss = "<i class=\"pe-hourglass-half pe-fw\"></i> Data-collection (since: ".ago($row['L1']).")";
    $ustatus = "Data-collection";
    $utimelinedata .= "      [ '".$title."', 'Set-up', new Date(".$L0['year'].", ".$L0['month'].", ".$L0['day']."), new Date(".$L1['year'].", ".$L1['month'].", ".$L1['day'].") ], \n"; $colordata .= "'#B3FFB3', ";
    $utimelinedata .= "      [ '".$title."', 'Data-collection', new Date(".$L1['year'].", ".$L1['month'].", ".$L1['day']."), new Date(".$today['year'].", ".$today['month'].", ".$today['day'].") ], \n"; $colordata .= "'#00C851', ";
  } else if ($row['status'] == 3) {
    $ss = "<i class=\"pe-hourglass-end pe-fw\"></i> Completed (since: ".ago($row['L2']).")";
    $ustatus = "Completed";
    $utimelinedata .= "      [ '".$title."', 'Set-up', new Date(".$L0['year'].", ".$L0['month'].", ".$L0['day']."), new Date(".$L1['year'].", ".$L1['month'].", ".$L1['day'].") ], \n"; $colordata .= "'#B3FFB3', ";
    $utimelinedata .= "      [ '".$title."', 'Data-collection', new Date(".$L1['year'].", ".$L1['month'].", ".$L1['day']."), new Date(".$L2['year'].", ".$L2['month'].", ".$L2['day'].") ], \n"; $colordata .= "'#00C851', ";
    $utimelinedata .= "      [ '".$title."', 'Completed', new Date(".$L2['year'].", ".$L2['month'].", ".$L2['day']."), new Date(".$today['year'].", ".$today['month'].", ".$today['day'].") ], \n"; $colordata .= "'#007E33', ";
  } else if ($row['status'] == 4) {
    $ss = "<i class=\"pe-archive pe-fw\"></i> Archived (since: ".ago($row['L3']).")";
    $ustatus = "Archived";
    $utimelinedata .= "      [ '".$title."', 'Set-up', new Date(".$L0['year'].", ".$L0['month'].", ".$L0['day']."), new Date(".$L1['year'].", ".$L1['month'].", ".$L1['day'].") ], \n"; $colordata .= "'#B3FFB3', ";
    $utimelinedata .= "      [ '".$title."', 'Data-collection', new Date(".$L1['year'].", ".$L1['month'].", ".$L1['day']."), new Date(".$L2['year'].", ".$L2['month'].", ".$L2['day'].") ], \n"; $colordata .= "'#00C851', ";
    $utimelinedata .= "      [ '".$title."', 'Completed', new Date(".$L2['year'].", ".$L2['month'].", ".$L2['day']."), new Date(".$L3['year'].", ".$L3['month'].", ".$L3['day'].") ], \n"; $colordata .= "'#007E33', ";
    $utimelinedata .= "      [ '".$title."', 'Archived', new Date(".$L3['year'].", ".$L3['month'].", ".$L3['day']."), new Date(".$today['year'].", ".$today['month'].", ".$today['day'].") ], \n"; $colordata .= "'#AAAAAA', ";
  }
  $updated = ago($row['updated']);
  if ($row['private'] == 1) { $private = "<span class=\"label label-success\">PRIVATE</span>"; } else { $private = ""; }
  $i++;
}
$utimelinedata .= "    ]";
$colordata = substr($colordata, 0, -2);
$colordata .= " ]";
?>
    <h4>Timing of your projects</h4>
    <p>Please note that below timing is shown for all your projects excluding the ones are deleted.</p>
    <div id="timeline1"></div>
    <br>
<?php } ?>
  </div>
  <div id="two" class="tab-pane fade">
<?php
// Count different project status for this company
$q3 = $db->prepare("SELECT SUM(status='1') AS q3A, SUM(status='2') AS q3B, SUM(status='3') AS q3C, SUM(status='4') AS q3D, SUM(status='0') AS q3E FROM j_projects WHERE companyid = :companyid");
$q3->bindValue(':companyid', $_SESSION["companyid"], PDO::PARAM_INT);
$q3->execute();
while ($row = $q3->fetchObject()) { $ss1 = $row->q3A; $ss2 = $row->q3B; $ss3 = $row->q3C; $ss4 = $row->q3D; $ss5 = $row->q3E; }
$sstotal = $ss1 + $ss2 + $ss3 + $ss4 + $ss5;
$ssActive = $ss1 + $ss2 + $ss3; $ssInactive = $ss4 + $ss5;
$percentActive = percent($ssActive / $sstotal);
$percentInactive = percent($ssInactive / $sstotal);
$pss1 = percent($ss1 / $sstotal); $pss2 = percent($ss2 / $sstotal); $pss3 = percent($ss3 / $sstotal); $pss4 = percent($ss4 / $sstotal); $pss5 = percent($ss5 / $sstotal);
$q4 = $db->prepare("SELECT SUM(level='3') AS q4A, SUM(level='4') AS q4B, SUM(level='5') AS q4C, SUM(level='6') AS q4D, SUM(level='7') AS q4E, SUM(level='8') AS q4F, SUM(level='9') AS q4G FROM j_users WHERE companyid = :companyid");
$q4->bindValue(':companyid', $_SESSION["companyid"], PDO::PARAM_INT);
$q4->execute();
while ($row = $q4->fetchObject()) { $st3 = $row->q4A; $st4 = $row->q4B; $st5 = $row->q4C; $st6 = $row->q4D; $st7 = $row->q4E; $st8 = $row->q4F; $st9 = $row->q4G; }
$sttotal = $st3 + $st4 + $st5 + $st6;
// $pst3 = percent($st3/$sttotal); $pst4 = percent($st4/$sttotal); $pst5 = percent($st5/$sttotal); $pst6 = percent($st6/$sttotal);
// $pst7 = percent($st7/$sttotal); $pst8 = percent($st8/$sttotal); $pst9 = percent($st9/$sttotal);
$levellist = "";
// if ($st9) { $levellist .= "<strong>$st9 Administrator</strong> "; } else { $levellist .= ""; }
// if ($st8) { $levellist .= "<strong>$st8 person(s)</strong> "; } else { $levellist .= ""; }
// if ($st7) { $levellist .= "<strong>$st7 person(s)</strong> "; } else { $levellist .= ""; }
if ($st6) { $levellist .= "<strong>$st6 Manager(s)</strong> "; } else { $levellist .= ""; }
if ($st5) { $levellist .= "<strong>$st5 User(s)</strong> "; } else { $levellist .= ""; }
if ($st4) { $levellist .= "<strong>$st4 Guest(s)</strong> "; } else { $levellist .= ""; }
// if ($st3) { $levellist .= "<strong>$st3 person(s)</strong> "; } else { $levellist .= ""; }
$i = 0;
$today['year'] = date("Y"); $today['month'] = date("m"); $today['day'] = date("d");
if ($today['month'] == "01") { $today['month'] = "12"; $today['year'] = $today['year']-1; } else { $today['month'] = $today['month']-1; }
$ctimelinedata = "[ \n"; $colordata = "[ "; $tabledata = ""; $AA = array();
// Pull survey information for this company
$q5 = $db->prepare("SELECT P.*, U.fullname, U.email, U.level FROM j_projects P, j_users U WHERE P.userid = U.id AND P.companyid = :companyid ORDER BY P.status ASC, P.created DESC ");
$q5->bindValue(':companyid', $_SESSION["companyid"], PDO::PARAM_INT);
$q5->execute();
$rows = $q5->fetchAll(PDO::FETCH_ASSOC);
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
    $ctimelinedata .= "      [ '".$title."', 'Set-up', new Date(".$L0['year'].", ".$L0['month'].", ".$L0['day']."), new Date(".$today['year'].", ".$today['month'].", ".$today['day'].") ], \n"; $colordata .= "'#B3FFB3', ";
  } else if ($row['status'] == 2) {
    $ss = "<i class=\"pe-hourglass-half pe-fw\"></i> Data-collection";
    $since = ago($row['L1']);
    $status = "Data-collection";
    $ctimelinedata .= "      [ '".$title."', 'Set-up', new Date(".$L0['year'].", ".$L0['month'].", ".$L0['day']."), new Date(".$L1['year'].", ".$L1['month'].", ".$L1['day'].") ], \n"; $colordata .= "'#B3FFB3', ";
    $ctimelinedata .= "      [ '".$title."', 'Data-collection', new Date(".$L1['year'].", ".$L1['month'].", ".$L1['day']."), new Date(".$today['year'].", ".$today['month'].", ".$today['day'].") ], \n"; $colordata .= "'#00C851', ";
  } else if ($row['status'] == 3) {
    $ss = "<i class=\"pe-hourglass-end pe-fw\"></i> Completed";
    $since = ago($row['L2']);
    $status = "Completed";
    $ctimelinedata .= "      [ '".$title."', 'Set-up', new Date(".$L0['year'].", ".$L0['month'].", ".$L0['day']."), new Date(".$L1['year'].", ".$L1['month'].", ".$L1['day'].") ], \n"; $colordata .= "'#B3FFB3', ";
    $ctimelinedata .= "      [ '".$title."', 'Data-collection', new Date(".$L1['year'].", ".$L1['month'].", ".$L1['day']."), new Date(".$L2['year'].", ".$L2['month'].", ".$L2['day'].") ], \n"; $colordata .= "'#00C851', ";
    $ctimelinedata .= "      [ '".$title."', 'Completed', new Date(".$L2['year'].", ".$L2['month'].", ".$L2['day']."), new Date(".$today['year'].", ".$today['month'].", ".$today['day'].") ], \n"; $colordata .= "'#007E33', ";
  } else if ($row['status'] == 4) {
    $ss = "<i class=\"pe-archive pe-fw\"></i> Archived";
    $since = ago($row['L3']);
    $status = "Archived";
    $ctimelinedata .= "      [ '".$title."', 'Set-up', new Date(".$L0['year'].", ".$L0['month'].", ".$L0['day']."), new Date(".$L1['year'].", ".$L1['month'].", ".$L1['day'].") ], \n"; $colordata .= "'#B3FFB3', ";
    $ctimelinedata .= "      [ '".$title."', 'Data-collection', new Date(".$L1['year'].", ".$L1['month'].", ".$L1['day']."), new Date(".$L2['year'].", ".$L2['month'].", ".$L2['day'].") ], \n"; $colordata .= "'#00C851', ";
    $ctimelinedata .= "      [ '".$title."', 'Completed', new Date(".$L2['year'].", ".$L2['month'].", ".$L2['day']."), new Date(".$L3['year'].", ".$L3['month'].", ".$L3['day'].") ], \n"; $colordata .= "'#007E33', ";
    $ctimelinedata .= "      [ '".$title."', 'Archived', new Date(".$L3['year'].", ".$L3['month'].", ".$L3['day']."), new Date(".$today['year'].", ".$today['month'].", ".$today['day'].") ], \n"; $colordata .= "'#AAAAAA', ";
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
  $i++;
}
$ctimelinedata .= "    ]";
$colordata = substr($colordata, 0, -2);
$colordata .= " ]";
$tabledata .= "";
// Pull data on user listing for this company
$q6A = $db->prepare("SELECT U.*, COUNT(P.id) AS pall, SUM(IF(P.status > 0, 1, 0)) as pactive, SUM(IF(P.status = 0, 1, 0)) as pinactive FROM j_users AS U LEFT JOIN j_projects AS P ON P.userid = U.id WHERE U.companyid = :companyid GROUP BY U.email ORDER BY U.level DESC");
$q6A->bindValue(':companyid', $_SESSION["companyid"], PDO::PARAM_INT);
$q6A->execute();
$rr = $q6A->fetchAll(PDO::FETCH_ASSOC);
$bdata = "[ \n";
$bdata .= "      [ 'Member', 'Active', { role: 'annotation' }, 'All', { role: 'annotation' } ],\n";
$j = 1;
foreach ($rr as $r) {
  if ($r['pall'] != NULL) { $ww0 = $r['pall']; } else { $ww0 = "0"; } $w0 = ($ww0 / $sstotal) * 100; $w0 = number_format($w0, 1);
  if ($r['pactive'] != NULL) { $ww1 = $r['pactive']; } else { $ww1 = "0"; } $w1 = ($ww1 / $ssActive) * 100; $w1 = number_format($w1, 1);
  if ($r['pinactive'] != NULL) { $ww2 = $r['pinactive']; } else { $ww2 = "0"; } $w2 = ($ww2 / $ssInactive) * 100; $w2 = number_format($w2, 1);
  $fullname = $r['fullname'];
  $firstname = explode(' ',trim($fullname));
  $email = $r['email'];
  if ($r['lastlogin']) { $lastlogin = ago($r['lastlogin']); } else { $lastlogin = "Never"; }
  $role = role($r['level']);
  if (($r['level'] == 6) || ($r['level'] == 5) || ($r['level'] == 4)) {
    if ($r['email'] == $_SESSION['email']) { $orgdata .= "            <tr bgcolor='#D7EFFD'><td><strong>$fullname</strong><br><small>Email: $email</small><br><small class=\"grey\">Last seen: $lastlogin</small></td><td>$role</td><td align='right'>$ww1</td><td align='right'>$ww0</td></tr>\n"; }
    else { $orgdata .= "            <tr><td><strong>$fullname</strong><br><small>Email: $email</small><br><small class=\"grey\">Last seen: $lastlogin</small></td><td>$role</td><td align='right'>$ww1</td><td align='right'>$ww0</td></tr>\n"; }
    // $bdata .= "          [ '".addslashes($fullname)."', $w1, $w ], \n";
    $bdata .= "      [ '".addslashes($firstname[0])."', $w1, $w1, $w0, $w0 ], \n";
  }
  // else if ($r['level'] == 9) {
  //   if ($r['email'] == $_SESSION['email']) { $orgdata .= "            <tr bgcolor='#D7EFFD'><td><strong>$fullname</strong><br><small>Email: $email</small><br><small class=\"grey\">Last seen: $lastlogin</small></td><td>$role</td><td align='right'>$ww1</td><td align='right'>$ww0</td></tr>\n"; }
  //   else { $orgdata .= "            <tr><td><strong>$fullname</strong><br><small>Email: $email</small><br><small class=\"grey\">Last seen: $lastlogin</small></td><td>$role</td><td align='right'>$ww1</td><td align='right'>$ww0</td></tr>\n"; }
  //   // $bdata .= "          [ '".addslashes($fullname)."', $w1, $w ], \n";
  //   $bdata .= "      [ '".addslashes($firstname[0])."', $w1, $w1, $w0, $w0 ], \n";
  // }
  $j++;
}
$bdata .= "    ]";

if ($clientlogo) { echo $clientlogo; }
echo "<h3>$companyname</h3>\n";
echo "<h4>Summary of all projects</h4>\n";
if ($sstotal == 0) {
  echo "    <p>Currently there is still <strong>zero projects</strong> and therefore no statistic can be shown.</p>\n";
  echo "    <p>You can create a new project by clicking <a class=\"btn btn-success\"><i class=\"pe-cube pe-fw\"></i> New project</a> which can be found in <a href=\"/admin/?w=surveys\" title=\"The main survey page\">the main survey page</a>.\n";
} else {
  if ($sstotal == 1) { echo "    <p>The company currently has <strong>$sstotal project</strong>"; if ($ssActive == 1) { echo " and it is an active project.</p>\n"; } else if ($ssInactive == 1) { echo " and it is an inactive project.</p>\n"; } }
  else if ($sstotal > 1) { echo "    <p>The company currently has <strong>$sstotal projects</strong> including <strong>$ssActive</strong> active and <strong>$ssInactive</strong> inactive respectively.</p>\n"; }
  echo "    <br>\n";
}
?>
    <div class="row">
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <div id="piechart2" style="height:200px"></div>
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
              <td><?php echo status_project(1, true, false); ?></td>
              <td align="right"><?php echo $ss1; ?> </td>
              <td align="right"><?php echo $pss1; ?></td>
            </tr>
            <tr>
              <td><?php echo status_project(2, true, false); ?></td>
              <td align="right"><?php echo $ss2; ?> </td>
              <td align="right"><?php echo $pss2; ?></td>
            </tr>
            <tr>
              <td><?php echo status_project(3, true, false); ?></td>
              <td align="right"><?php echo $ss3; ?> </td>
              <td align="right"><?php echo $pss3; ?></td>
            </tr>
            <tr style="background-color:#eee">
              <td><?php echo status_project(4, true, false); ?></td>
              <td align="right"><?php echo $ss4; ?> </td>
              <td align="right"><?php echo $pss4; ?></td>
            </tr>
<?php if ($_SESSION['level'] > 5) { ?>
            <tr style="background-color:#eee">
              <td><?php echo status_project(0, true, false); ?></td>
              <td align="right"><?php echo $ss5; ?> </td>
              <td align="right"><?php echo $pss5; ?></td>
            </tr>
<?php } ?>
          </tbody>
        </table>
      </div>
    </div>
    <h4>Summary of team members</h4>
    <p>There are <strong><?php echo $sttotal; ?> member(s)</strong> in the team which are <?php echo $levellist; ?> as shown in details below.</p>
    <br>
    <div class="row">
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <table class="table table-hover small">
          <thead>
            <tr class="bg-success">
              <th width="60%">Name</th>
              <th width="20%">Role</th>
              <th width="10%" style="text-align:right">Active</th>
              <th width="10%" style="text-align:right">All</th>
            </tr>
          </thead>
          <tbody>
<?php print_r($orgdata); ?>
          </tbody>
        </table>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <p class="text-center">User contribution (%)</p>
        <div id="barchart"></div>
      </div>
    </div>
    <!-- <h4 id="timeline2heading">Timings of all projects</h4>
    <p id="timeline2description">This shows the timing for all projects giving you a good helicopter view of all projects.</p>
    <div id="timeline2"></div> -->
  </div>
</div>

<!-- <div id="tabone">
  <h4 id="timeline1heading">Timing of your projects</h4>
  <p id="timeline1description">Please note that below timing is shown for all your projects excluding the ones are deleted.</p>
  <div id="timeline1"></div>
</div> -->
<!-- <br> -->
<div id="tabtwo">
  <h4 id="timeline2heading">Timings of all projects</h4>
  <p id="timeline2description">This shows the timing for all projects giving you a good helicopter view of all projects.</p>
  <div id="timeline2"></div>
</div>

<script type="text/javascript">
  var totalAll = <?php echo $totalALL; ?>;
  google.charts.load('current', {'packages': ['corechart', 'timeline'] });
  if (totalAll != 0) { google.charts.setOnLoadCallback(drawPieChart1); }
  if (totalAll != 0) { google.charts.setOnLoadCallback(drawTimelineChart1); }
  google.charts.setOnLoadCallback(drawPieChart2);
  google.charts.setOnLoadCallback(drawBarChart);
  google.charts.setOnLoadCallback(drawTimelineChart2);
  function drawPieChart1() {
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
    var chart = new google.visualization.PieChart(document.getElementById('piechart1'));
    chart.draw(data, options);
  }
  function drawTimelineChart1() {
    var container = document.getElementById('timeline1');
    var chart = new google.visualization.Timeline(container);
    var data = new google.visualization.DataTable();
    data.addColumn({ type: 'string', id: 'Project' });
    data.addColumn({ type: 'string', id: 'Status' });
    data.addColumn({ type: 'date', id: 'Start' });
    data.addColumn({ type: 'date', id: 'End' });
    data.addRows(<?php echo $utimelinedata; ?>);
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
  function drawPieChart2() {
    var data = google.visualization.arrayToDataTable([
      [ 'Stage', 'No. of project' ],
      [ '<?php echo status_project(1, false, false); ?>', <?php echo $ss1; ?> ],
      [ '<?php echo status_project(2, false, false); ?>', <?php echo $ss2; ?> ],
      [ '<?php echo status_project(3, false, false); ?>', <?php echo $ss3; ?> ],
      [ '<?php echo status_project(4, false, false); ?>', <?php echo $ss4; ?> ],
      [ '<?php echo status_project(0, false, false); ?>', <?php echo $ss5; ?> ]
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
    var chart = new google.visualization.PieChart(document.getElementById('piechart2'));
    chart.draw(data, options);
  }
  function drawBarChart() {
    var container = document.getElementById('barchart');
    var chart = new google.visualization.BarChart(container);
    var data = google.visualization.arrayToDataTable(<?php echo $bdata; ?>);
    chart.draw(data, options);
    var newheight = parseInt($("#barchart div:first-child div:first-child div svg").attr( "height"))-50;
    var options = {
      height: newheight,
      backgroundColor: 'transparent',
      hAxis: { gridlines: { color: 'transparent' } },
      bar: { groupWidth: "90%" },
      chartArea: { top: 0, bottom: 0 },
      colors: [ '#007E33', '#AAAAAA' ],
    };
    chart.draw(data, options);
  }
  function drawTimelineChart2() {
    var container = document.getElementById('timeline2');
    var chart = new google.visualization.Timeline(container);
    var data = new google.visualization.DataTable();
    data.addColumn({ type: 'string', id: 'Project' });
    data.addColumn({ type: 'string', id: 'Status' });
    data.addColumn({ type: 'date', id: 'Start' });
    data.addColumn({ type: 'date', id: 'End' });
    data.addRows(<?php echo $ctimelinedata; ?>);
    chart.draw(data, options);
    var newheight = parseInt($("#timeline2 div:first-child div:first-child div:first-child div svg").attr( "height"))+70;
    // var newwidth = parseInt($("#timeline2 div:first-child div:first-child div:first-child div svg").attr( "width"))+540;
    var options = {
      height: newheight,
      // width: newwidth,
      colors: [ '#B3FFB3', '#00C851', '#007E33', '#AAAAAA' ],
      avoidOverlappingGridLines: false,
      timeline: { groupByRowLabel: true, colorByRow: true, },
      chartArea: { left: 0, right: 0 },
    };
    chart.draw(data, options);
  }
  $(window).resize(function() {
    if (totalALL != 0) { drawPieChart1(); }
    if (totalALL != 0) { drawTimelineChart1(); }
    drawPieChart2();
    drawBarChart();
    drawTimelineChart2();
  });

  $('.nav-tabs a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
    if ($(this).attr("href") == "#one") { $("#tabone").css({ 'display': 'block' }); $("#tabtwo").css({ 'display': 'none' }); }
    else if ($(this).attr("href") == "#two") { $("#tabone").css({ 'display': 'none' }); $("#tabtwo").css({ 'display': 'block' }); }
    else { $("#tabone").css({ 'display': 'block' }); $("#tabtwo").css({ 'display': 'none' }); }
  })

</script>

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
