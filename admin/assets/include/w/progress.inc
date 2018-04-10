<?php

$excerptRows = "50";
// $c_target = 300;

$today['year'] = date("Y"); $today['month'] = date("m"); $today['day'] = date("d");
if ($today['month'] == "01") { $today['month'] = "12"; $today['year'] = $today['year']-1; } else { $today['month'] = $today['month']-1; }
$timelinedata = "[ \n"; $colordata = "[ ";

// Get projcet info
$q1 = $db->prepare("SELECT * FROM j_projects WHERE id = :surveyid");
$q1->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
$q1->execute();
if ($q1->rowCount() == 0) {
  $title = "An error has been found";
  pageHeader($title);
  echo "<h2>We could not find a match for ID for this project</h2>\n";
  echo "<p>There has been an error locating the project you are looking for. This is caused by two reasons which are either there is a false in our system (which is very unlikely) or you use our system incorrectly.</p>";
  echo "<p>If you have tried entering the project ID manually, we strongly suggest you should stop doing this. You should instead use the client dashboard which will never lead you to a wrong link or any errors like this at all.</p>";
  echo mkerror("In fact we typically consider such action as violent.");
  echo "<p>Our system has already recorded this error including your identity and timestamp.</p>";
  pageFooter();
  $q = $db->prepare("INSERT INTO j_users_logs (surveyid, userid, ip, data, critical) VALUE (:surveyid, :userid, :ip, '" . $_SESSION["email"] . " tried accessing a non-existing project', '5')");
  $q->bindValue(':surveyid', $_GET['s'], PDO::PARAM_INT);
  $q->bindValue(':userid', $_SESSION["userid"], PDO::PARAM_INT);
  $q->bindValue(':ip', $_SESSION["ip"], PDO::PARAM_INT);
  $q->execute();
  exit;
}
while ($row = $q1->fetchObject()) {
  $project = $row->title;
  $status = $row->status;
  $private = $row->private;
  $sample_size = $row->sample;
  if ($row->userid == $_SESSION['userid']) { $owner = 1; } else { $owner = 0; }
  if ($row->created) {
    $L0 = date_parse_from_format("Y-m-d H:i:s", $row->created);
    if ($L0['month'] == "01") { $L0['month'] = "12"; $L0['year'] = $L0['year']-1; } else { $L0['month'] = $L0['month']-1; }
    $created = ago($row->created);
    $LLL0 = $row->created;
  } else { $LL0 = "-"; }
  if ($row->L1) {
    $L1 = date_parse_from_format("Y-m-d H:i:s", $row->L1);
    if ($L1['month'] == "01") { $L1['month'] = "12"; $L1['year'] = $L1['year']-1; } else { $L1['month'] = $L1['month']-1; }
    $LL1 = ago($row->L1);
    $LLL1 = $row->L1;
  } else { $LL1 = "-"; }
  if ($row->L2) {
    $L2 = date_parse_from_format("Y-m-d H:i:s", $row->L2);
    if ($L2['month'] == "01") { $L2['month'] = "12"; $L2['year'] = $L2['year']-1; } else { $L2['month'] = $L2['month']-1; }
    $LL2 = ago($row->L2);
    $LLL2 = $row->L2;
  } else { $LL2 = "-"; }
  if ($row->L3) {
    $L3 = date_parse_from_format("Y-m-d H:i:s", $row->L3);
    if ($L3['month'] == "01") { $L3['month'] = "12"; $L3['year'] = $L3['year']-1; } else { $L3['month'] = $L3['month']-1; }
    $LL3 = ago($row->L3);
    $LLL3 = $row->L3;
  } else { $LL3 = "-"; }
  if ($status == 1) {
    $timelinedata .= "[ '".$project."', 'Set-up', new Date(".$L0['year'].", ".$L0['month'].", ".$L0['day']."), new Date(".$today['year'].", ".$today['month'].", ".$today['day'].") ], \n"; $colordata .= "'#B3FFB3', ";
  } else if ($status == 2) {
    $timelinedata .= "[ '".$project."', 'Set-up', new Date(".$L0['year'].", ".$L0['month'].", ".$L0['day']."), new Date(".$L1['year'].", ".$L1['month'].", ".$L1['day'].") ], \n"; $colordata .= "'#B3FFB3', ";
    $timelinedata .= "[ '".$project."', 'Data-collection', new Date(".$L1['year'].", ".$L1['month'].", ".$L1['day']."), new Date(".$today['year'].", ".$today['month'].", ".$today['day'].") ], \n"; $colordata .= "'#00E600', ";
  } else if ($status == 3) {
    $timelinedata .= "[ '".$project."', 'Set-up', new Date(".$L0['year'].", ".$L0['month'].", ".$L0['day']."), new Date(".$L1['year'].", ".$L1['month'].", ".$L1['day'].") ], \n"; $colordata .= "'#B3FFB3', ";
    $timelinedata .= "[ '".$project."', 'Data-collection', new Date(".$L1['year'].", ".$L1['month'].", ".$L1['day']."), new Date(".$L2['year'].", ".$L2['month'].", ".$L2['day'].") ], \n"; $colordata .= "'#00E600', ";
    $timelinedata .= "[ '".$project."', 'Completed', new Date(".$L2['year'].", ".$L2['month'].", ".$L2['day']."), new Date(".$today['year'].", ".$today['month'].", ".$today['day'].") ], \n"; $colordata .= "'#009900', ";
  } else if ($status == 4) {
    $timelinedata .= "[ '".$project."', 'Set-up', new Date(".$L0['year'].", ".$L0['month'].", ".$L0['day']."), new Date(".$L1['year'].", ".$L1['month'].", ".$L1['day'].") ], \n"; $colordata .= "'#B3FFB3', ";
    $timelinedata .= "[ '".$project."', 'Data-collection', new Date(".$L1['year'].", ".$L1['month'].", ".$L1['day']."), new Date(".$L2['year'].", ".$L2['month'].", ".$L2['day'].") ], \n"; $colordata .= "'#00E600', ";
    $timelinedata .= "[ '".$project."', 'Completed', new Date(".$L2['year'].", ".$L2['month'].", ".$L2['day']."), new Date(".$L3['year'].", ".$L3['month'].", ".$L3['day'].") ], \n"; $colordata .= "'#009900', ";
    $timelinedata .= "[ '".$project."', 'Archived', new Date(".$L3['year'].", ".$L3['month'].", ".$L3['day']."), new Date(".$today['year'].", ".$today['month'].", ".$today['day'].") ], \n"; $colordata .= "'#AAAAAA', ";
  }
}
$timelinedata .= " ]";
if ($_SESSION['level'] != "9") {
  if ($status < 1 || $status > 3) {
    $title = "An error has been found";
    pageHeader($title);
    echo "<h2>This project is no longer editable</h2>\n";
    echo "<p>You only can make change on this with projects that have not started the data-collection. This prevents having any unexpected errors at the analysis stage such as a conflict based on a mismatch information between pre and post data-collection.</p>";
    echo "<p>If you have tried entering the project ID manually, we strongly suggest you should stop doing this. You should instead use the client dashboard which will never lead you to a wrong link or any errors like this at all.</p>";
    echo mkerror("In fact we typically consider such action as violent.");
    echo "<p>Our system has already recorded this error including your identity and timestamp.</p>";
    pageFooter();
    $q = $db->prepare("INSERT INTO j_users_logs (surveyid, userid, ip, data, critical) VALUE (:surveyid, :userid, :ip, '" . $_SESSION["email"] . " tried editing a non-editable project', '5')");
    $q->bindValue(':surveyid', $_GET['s'], PDO::PARAM_INT);
    $q->bindValue(':userid', $_SESSION["userid"], PDO::PARAM_INT);
    $q->bindValue(':ip', $_SESSION["ip"], PDO::PARAM_INT);
    $q->execute();
    exit;
  }
}

$title = "Job monitoring";
$result = "/admin/?w=result&s=".$_GET['s'];
pageHeader($title);
echo "<h2>$title</h2>";
echo "<p class=\"introtext\">This page gives a real time update on the progress of data collection. An additional of the interim tabulation is also shown for project with valid responses.</p>";
echo "<p class=\"introtext\">Kidnly note the interim data should be used for data-checking only, and <strong>must not be used for business decision</strong>. If you would like to see the result, please use <a href=\"$result\">the result page</a> where the analysis of each question is displayed with a full graphic visualisation.</p>";
echo "<hr>\n";
echo "<h3>Project $project</h3>\n";

// Data for area chart
$q2C = $db->prepare("SELECT SSDATE, SUM(SSCOUNT1) as SSCOUNT1, SUM(SSCOUNT2) as SSCOUNT2 FROM ((SELECT COUNT(*) AS SSCOUNT1, NULL AS SSCOUNT2, DATE(submitted) as SSDATE FROM j_results WHERE surveyid = :surveyid AND status = 2 GROUP BY DATE(submitted)) UNION ALL (SELECT NULL AS SSCOUNT1, SUM(IF(invitation IS NOT NULL AND participation IS NOT NULL, 1, 0)) AS SSCOUNT2, DATE(participation) as SSDATE FROM j_respondents WHERE surveyid = :surveyid GROUP BY DATE(participation))) t GROUP BY SSDATE");
$q2C->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
$q2C->execute();
$area = "[\n";
$areacount = 0;
if ($q2C->rowCount() < 1) { $SSCOUNT1 = "0"; $SSCOUNT2 = "0"; $NEWSSDATE = "-"; }
else {
  while ($row = $q2C->fetchObject()) {
    $SSDATE = $row->SSDATE;
    $SSDATE = explode("-", $row->SSDATE);
    $month = fullmonth($SSDATE[1], "short");
    $NEWSSDATE = $SSDATE[2]." ".$month;
    $SSCOUNT1 += $row->SSCOUNT1;
    $SSCOUNT2 += $row->SSCOUNT2;
    if ($private == 1) { $area .= "        [\"".$NEWSSDATE."\", ".$SSCOUNT2.", ".$SSCOUNT1."], \n"; }
    else { $area .= "        [\"".$NEWSSDATE."\", ".$SSCOUNT1."], \n"; }
    $areacount++;
  }
}
$area .= "      ]";

// Data for fieldwork summary boxes

if ($status > "2") {
  $stage = "3";
  $a = date_parse_from_format("Y-m-d H:i:s", $LLL0);
  $ac = $a['year']."-".$a['month']."-".$a['day'];
  $begindate0 = $a['day']." ".fullmonth($a['month'], "short");
  $b = date_parse_from_format("Y-m-d H:i:s", $LLL1);
  $bc = $b['year']."-".$b['month']."-".$b['day'];
  $begindate1 = $b['day']." ".fullmonth($b['month'], "short");
  $c = date_parse_from_format("Y-m-d H:i:s", $LLL2);
  $cc = $c['year']."-".$c['month']."-".$c['day'];
  $begindate2 = $c['day']." ".fullmonth($c['month'], "short");
  $from0 = strtotime($ac);
  $from1 = strtotime($bc);
  $from2 = strtotime($cc);
  $today = time();
  $difference1 = $from1 - $from0;
  $dd1 = floor($difference1 / 86400);
  if ($dd1 == "1") { $daysofsetup = "$dd1 day"; } else { $daysofsetup = "$dd1 days"; }
  $difference2 = $from2 - $from1;
  $dd2 = floor($difference2 / 86400);
  if ($dd2 == "1") { $daysoffieldwork = "$dd2 day"; } else { $daysoffieldwork = "$dd2 days"; }
  $difference3 = $today - $from2;
  $dd3 = floor($difference3 / 86400);
  if ($dd3 == "1") { $daysoffieldworkcompletion = "$dd3 day"; } else { $daysoffieldworkcompletion = "$dd3 days"; }
  $setuptiming = "$begindate0 to $begindate1";
  $fieldworktiming = "$begindate1 to $begindate2";
  $fieldworkstatus = "<font color=\"blue\">Fieldwork was completed</font>";
  $dcupdateinsert .= "    <div class=\"bg-info text-center\" style=\"padding: 10px; border: 2px solid black;\"><p style=\"margin-bottom:10px !important\" class=\"small\">Sample achieved</p><h4 style=\"margin-bottom:10px !important\"><strong>n=$SSCOUNT1</strong></h4></div>\n";
  $dcupdateinsert .= "    <br>\n";
  $dcupdateinsert .= "    <div class=\"bg-info text-center\" style=\"padding: 10px; border: 2px solid black;\"><p style=\"margin-bottom:10px !important\" class=\"small\">Setup ($setuptiming)</p><h4 style=\"margin-bottom:10px !important\"><strong>$daysofsetup</strong></h4></div>\n";
  $dcupdateinsert .= "    <br>\n";
  $dcupdateinsert .= "    <div class=\"bg-info text-center\" style=\"padding: 10px; border: 2px solid black;\"><p style=\"margin-bottom:10px !important\" class=\"small\">Fieldwork ($fieldworktiming)</p><h4 style=\"margin-bottom:10px !important\"><strong>$daysoffieldwork</strong></h4></div>\n";
} else if ($status == "2") {
  $stage = "2";
  $a = date_parse_from_format("Y-m-d H:i:s", $LLL0);
  $ac = $a['year']."-".$a['month']."-".$a['day'];
  $begindate0 = $a['day']." ".fullmonth($a['month'], "short");
  $b = date_parse_from_format("Y-m-d H:i:s", $LLL1);
  $bc = $b['year']."-".$b['month']."-".$b['day'];
  $begindate1 = $b['day']." ".fullmonth($b['month'], "short");
  $from0 = strtotime($ac);
  $from1 = strtotime($bc);
  $today = time();
  $difference1 = $from1 - $from0;
  $dd1 = floor($difference1 / 86400);
  if ($dd1 == "1") { $daysofsetup = "$dd1 day"; } else { $daysofsetup = "$dd1 days"; }
  $difference2 = $today - $from1;
  $dd2 = floor($difference2 / 86400);
  if ($dd2 == "1") { $daysoffieldwork = "$dd2 day"; } else { $daysoffieldwork = "$dd2 days"; }
  $setuptiming = "$begindate0 to $begindate1";
  $fieldworktiming = "since $begindate1";
  $fieldworkstatus = "<font color=\"green\">Fieldwork is still on-going</font>";
  $dcupdateinsert .= "    <div class=\"bg-info text-center\" style=\"padding: 10px; border: 2px solid black;\"><p style=\"margin-bottom:10px !important\" class=\"small\">Sample achieved</p><h4 style=\"margin-bottom:10px !important\"><strong>n=$SSCOUNT1</strong></h4></div>\n";
  $dcupdateinsert .= "    <br>\n";
  $dcupdateinsert .= "    <div class=\"bg-info text-center\" style=\"padding: 10px; border: 2px solid black;\"><p style=\"margin-bottom:10px !important\" class=\"small\">Setup ($setuptiming)</p><h4 style=\"margin-bottom:10px !important\"><strong>$daysofsetup</strong></h4></div>\n";
  $dcupdateinsert .= "    <br>\n";
  $dcupdateinsert .= "    <div class=\"bg-primary text-center\" style=\"padding: 10px; border: 2px solid black;\"><p style=\"margin-bottom:10px !important\" class=\"small\">Fieldwork ($fieldworktiming)</p><h4 style=\"margin-bottom:10px !important\"><strong>$daysoffieldwork</strong></h4></div>\n";
} else if ($status == "1") {
  $stage = "1";
  $b = date_parse_from_format("Y-m-d H:i:s", $LLL0);
  $bc = $b['year']."-".$b['month']."-".$b['day'];
  $begindate0 = $b['day']." ".fullmonth($b['month'], "short");
  $from0 = strtotime($bc);
  $today = time();
  $difference = $today - $from0;
  $daysoffieldwork = floor($difference / 86400);
  $begindate = $begindate0;
  $fieldworkstatus = "<font color=\"orange\">Fieldwork has not been started</font>";
  $fieldworktiming = "since $begindate";
  $a = date_parse_from_format("Y-m-d H:i:s", $LLL0);
  $ac = $a['year']."-".$a['month']."-".$a['day'];
  $begindate0 = $a['day']." ".fullmonth($a['month'], "short");
  $from0 = strtotime($ac);
  $today = time();
  $difference1 = $today - $from0;
  $dd1 = floor($difference1 / 86400);
  if ($dd1 == "1") { $daysofsetup = "$dd1 day"; } else { $daysofsetup = "$dd1 days"; }
  $setuptiming = "since $begindate0";
  $fieldworkstatus = "<font color=\"orange\">Fieldwork has not started</font>";
  $dcupdateinsert .= "    <div class=\"bg-info text-center\" style=\"padding: 10px; border: 2px solid black;\"><p style=\"margin-bottom:10px !important\" class=\"small\">Sample achieved</p><h4 style=\"margin-bottom:10px !important\"><strong>n=$SSCOUNT1</strong></h4></div>\n";
  $dcupdateinsert .= "    <br>\n";
  $dcupdateinsert .= "    <div class=\"bg-primary text-center\" style=\"padding: 10px; border: 2px solid black;\"><p style=\"margin-bottom:10px !important\" class=\"small\">Setup ($setuptiming)</p><h4 style=\"margin-bottom:10px !important\"><strong>$daysofsetup</strong></h4></div>\n";
} else {
  $begindate = "-";
  $daysoffieldwork = "0";
  $stage = "0";
}

$q2S = $db->prepare("SELECT COUNT(*) as q2S1, SUM(status='0') AS q2S2, SUM(status='1') AS q2S3, SUM(status='2') AS q2S4 FROM j_results WHERE surveyid = :surveyid");
$q2S->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
$q2S->execute();
while ($row = $q2S->fetchObject()) {
  $RDall = $row->q2S1;
  $RDterminated = $row->q2S2;
  $RDpilot = $row->q2S3;
  $RDsuccess = $row->q2S4;
}

$summaryofsample = "<ul class=\"progress-tracker progress-tracker--text progress-tracker--center\">\n";
$summaryofsample .= "  <li class=\"progress-step\">\n";
$summaryofsample .= "    <span class=\"progress-marker\"></span>\n";
$summaryofsample .= "    <span class=\"progress-text\">\n";
$summaryofsample .= "      <span class=\"progress-title\">Total</span> (n=$RDall)\n";
$summaryofsample .= "    </span></a>\n";
$summaryofsample .= "  </li>\n";
if ($stage == "1") {
  $summaryofsample .= "  <li class=\"progress-step\">\n";
  $summaryofsample .= "    <span class=\"progress-marker\"></span>\n";
  $summaryofsample .= "    <span class=\"progress-text\">\n";
  $summaryofsample .= "      <span class=\"progress-title\">Pilot tests</span> ($RDpilot)\n";
  $summaryofsample .= "    </span></a>\n";
  $summaryofsample .= "  </li>\n";
  $summaryofsample .= "  <li class=\"progress-step\">\n";
  $summaryofsample .= "    <span class=\"progress-marker\"></span>\n";
  $summaryofsample .= "    <span class=\"progress-text\">\n";
  $summaryofsample .= "      <span class=\"progress-title\">Terminated</span> (n=$RDterminated)</p>\n";
  $summaryofsample .= "    </span></a>\n";
  $summaryofsample .= "  </li>\n";
  $summaryofsample .= "  <li class=\"progress-step\">\n";
  $summaryofsample .= "    <span class=\"progress-marker\"></span>\n";
  $summaryofsample .= "    <span class=\"progress-text\">\n";
  $summaryofsample .= "      <span class=\"progress-title\">Completion</span> (n=$RDsuccess)</p>\n";
  $summaryofsample .= "    </span></a>\n";
  $summaryofsample .= "  </li>\n";
  $summaryofsample .= "  <li class=\"progress-step\">\n";
  $summaryofsample .= "    <span class=\"progress-marker\"></span>\n";
  $summaryofsample .= "    <span class=\"progress-text\">\n";
  $summaryofsample .= "      <span class=\"progress-title\">Target</span> (n=$sample_size)</p>\n";
  $summaryofsample .= "    </span></a>\n";
  $summaryofsample .= "  </li>\n";
} else if ($stage == "2") {
  $summaryofsample .= "  <li class=\"progress-step is-active\">\n";
  $summaryofsample .= "    <span class=\"progress-marker\"></span>\n";
  $summaryofsample .= "    <span class=\"progress-text\">\n";
  $summaryofsample .= "      <span class=\"progress-title\">Pilot tests</span> ($RDpilot)\n";
  $summaryofsample .= "    </span></a>\n";
  $summaryofsample .= "  </li>\n";
  $summaryofsample .= "  <li class=\"progress-step is-active\">\n";
  $summaryofsample .= "    <span class=\"progress-marker\"></span>\n";
  $summaryofsample .= "    <span class=\"progress-text\">\n";
  $summaryofsample .= "      <span class=\"progress-title\">Terminated</span> (n=$RDterminated)</p>\n";
  $summaryofsample .= "    </span></a>\n";
  $summaryofsample .= "  </li>\n";
  $summaryofsample .= "  <li class=\"progress-step is-active\">\n";
  $summaryofsample .= "    <span class=\"progress-marker\"></span>\n";
  $summaryofsample .= "    <span class=\"progress-text\">\n";
  $summaryofsample .= "      <span class=\"progress-title\">Completion</span> (n=$RDsuccess)</p>\n";
  $summaryofsample .= "    </span></a>\n";
  $summaryofsample .= "  </li>\n";
  $summaryofsample .= "  <li class=\"progress-step\">\n";
  $summaryofsample .= "    <span class=\"progress-marker\"></span>\n";
  $summaryofsample .= "    <span class=\"progress-text\">\n";
  $summaryofsample .= "      <span class=\"progress-title\">Target</span> (n=$sample_size)</p>\n";
  $summaryofsample .= "    </span></a>\n";
  $summaryofsample .= "  </li>\n";
} else if ($stage == "3") {
  $summaryofsample .= "  <li class=\"progress-step\">\n";
  $summaryofsample .= "    <span class=\"progress-marker\"></span>\n";
  $summaryofsample .= "    <span class=\"progress-text\">\n";
  $summaryofsample .= "      <span class=\"progress-title\">Pilot tests</span> ($RDpilot)\n";
  $summaryofsample .= "    </span></a>\n";
  $summaryofsample .= "  </li>\n";
  $summaryofsample .= "  <li class=\"progress-step\">\n";
  $summaryofsample .= "    <span class=\"progress-marker\"></span>\n";
  $summaryofsample .= "    <span class=\"progress-text\">\n";
  $summaryofsample .= "      <span class=\"progress-title\">Terminated</span> (n=$RDterminated)</p>\n";
  $summaryofsample .= "    </span></a>\n";
  $summaryofsample .= "  </li>\n";
  $summaryofsample .= "  <li class=\"progress-step\">\n";
  $summaryofsample .= "    <span class=\"progress-marker\"></span>\n";
  $summaryofsample .= "    <span class=\"progress-text\">\n";
  $summaryofsample .= "      <span class=\"progress-title\">Completion</span> (n=$RDsuccess)</p>\n";
  $summaryofsample .= "    </span></a>\n";
  $summaryofsample .= "  </li>\n";
  $summaryofsample .= "  <li class=\"progress-step is-active\">\n";
  $summaryofsample .= "    <span class=\"progress-marker\"></span>\n";
  $summaryofsample .= "    <span class=\"progress-text\">\n";
  $summaryofsample .= "      <span class=\"progress-title\">Target</span> (n=$sample_size)</p>\n";
  $summaryofsample .= "    </span></a>\n";
  $summaryofsample .= "  </li>\n";
} else {
  $summaryofsample .= "  <li class=\"progress-step\">\n";
  $summaryofsample .= "    <span class=\"progress-marker\"></span>\n";
  $summaryofsample .= "    <span class=\"progress-text\">\n";
  $summaryofsample .= "      <span class=\"progress-title\">Pilot tests</span> ($RDpilot)\n";
  $summaryofsample .= "    </span></a>\n";
  $summaryofsample .= "  </li>\n";
  $summaryofsample .= "  <li class=\"progress-step\">\n";
  $summaryofsample .= "    <span class=\"progress-marker\"></span>\n";
  $summaryofsample .= "    <span class=\"progress-text\">\n";
  $summaryofsample .= "      <span class=\"progress-title\">Terminated</span> (n=$RDterminated)</p>\n";
  $summaryofsample .= "    </span></a>\n";
  $summaryofsample .= "  </li>\n";
  $summaryofsample .= "  <li class=\"progress-step\">\n";
  $summaryofsample .= "    <span class=\"progress-marker\"></span>\n";
  $summaryofsample .= "    <span class=\"progress-text\">\n";
  $summaryofsample .= "      <span class=\"progress-title\">Completion</span> (n=$RDsuccess)</p>\n";
  $summaryofsample .= "    </span></a>\n";
  $summaryofsample .= "  </li>\n";
  $summaryofsample .= "  <li class=\"progress-step\">\n";
  $summaryofsample .= "    <span class=\"progress-marker\"></span>\n";
  $summaryofsample .= "    <span class=\"progress-text\">\n";
  $summaryofsample .= "      <span class=\"progress-title\">Target</span> (n=$sample_size)</p>\n";
  $summaryofsample .= "    </span></a>\n";
  $summaryofsample .= "  </li>\n";
}
$summaryofsample .= "</ul>";

$RDsuccess_percent = percent($RDsuccess / $sample_size);
if ($RDsuccess) { $RDsuccess_bar = "<div class=\"progress\"><div class=\"progress-bar progress-bar-striped\" role=\"progressbar\" aria-valuenow=\"$RDsuccess_percent\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"min-height:0.2em; min-width:2em; width:$RDsuccess_percent\">$RDsuccess_percent</div></div>"; } //else { $RDsuccess_bar = "<div class=\"progress\"></div>"; }

$dcupdate = "<h4>Status: $fieldworkstatus</h4>\n";
$dcupdate .= "<div class=\"row\">\n";
$dcupdate .= "  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n";
$dcupdate .= "    <div style=\"width:100%; height:100%\"><center>$summaryofsample</center></div>\n";
$dcupdate .= "  </div>\n";
$dcupdate .= "  <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\">\n";
$dcupdate .= "    $RDsuccess_bar\n";
$dcupdate .= "    $dcupdateinsert\n";
$dcupdate .= "  </div>\n";
$dcupdate .= "  <div class=\"col-xs-12 col-sm-9 col-md-9 col-lg-9\" style=\"padding:0\">\n";
$dcupdate .= "    <div style=\"width:100%; height:100%\"><center><div id=\"areachart\"></div></center></div>\n";
$dcupdate .= "  </div>\n";
$dcupdate .= "</div>\n";
$dcupdate .= "<br>\n";

// Get stats
$q2A = $db->prepare("SELECT COUNT(*) as q2A1, SUM(status = '0') AS q2A2, SUM(IF(invitation IS NOT NULL, 1, 0)) AS q2A3, SUM(IF(invitation IS NULL, 1, 0)) AS q2A4, SUM(IF(invitation IS NOT NULL AND participation IS NOT NULL, 1, 0)) AS q2A5, SUM(IF(invitation IS NOT NULL AND participation IS NULL, 1, 0)) AS q2A6 FROM j_respondents WHERE surveyid = :surveyid");
$q2A->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
$q2A->execute();
while ($row = $q2A->fetchObject()) {
  $all = $row->q2A1;
  $bad = $row->q2A2;
  $allgood = $all - $bad;
  $invited = $row->q2A3;
  $notinvited = $row->q2A4;
  $participated = $row->q2A5;
  $notparticipated = $row->q2A6;
}
$all_format = number_format($all);
$allgood_format = number_format($allgood);

if ($invited == 0) { $participated = 0; $notparticipated = 0; }
$invited_format = number_format($invited);
$notinvited_format = number_format($notinvited);
$participated_format = number_format($participated);
$notparticipated_format = number_format($notparticipated);
$invited_bar = "<div class=\"progress progress-inbox\"><div class=\"progress-bar progress-bar-inbox progress-bar-striped\" role=\"progressbar\" aria-valuenow=\"100%\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"min-width:2em; width:100%\">100%</div></div>";
$invited_percent = percent($invited / $invited);
if ($invited) { $invited_bar = "<div class=\"progress progress-inbox\"><div class=\"progress-bar progress-bar-inbox progress-bar-striped\" role=\"progressbar\" aria-valuenow=\"$invited_percent\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"min-width:2em; width:$invited_percent\">$invited_percent</div></div>"; } else { $invited_bar = "<div class=\"progress progress-inbox\"></div>"; }
$notinvited_percent = percent($notinvited / $invited);
if ($notinvited) { $notinvited_bar = "<div class=\"progress progress-inbox\"><div class=\"progress-bar progress-bar-inbox progress-bar-striped\" role=\"progressbar\" aria-valuenow=\"$notinvited_percent\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"min-width:2em; width:$notinvited_percent\">$notinvited_percent</div></div>"; } else { $notinvited_bar = "<div class=\"progress progress-inbox\"></div>"; }
$participated_percent = percent($participated / $invited);
if ($participated) { $participated_bar = "<div class=\"progress progress-inbox\"><div class=\"progress-bar progress-bar-inbox progress-bar-striped\" role=\"progressbar\" aria-valuenow=\"$participated_percent\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"min-width:2em; width:$participated_percent\">$participated_percent</div></div>"; } else { $participated_bar = "<div class=\"progress progress-inbox\"></div>"; }
$notparticipated_percent = percent($notparticipated / $invited);
if ($notparticipated) { $notparticipated_bar = "<div class=\"progress progress-inbox\"><div class=\"progress-bar progress-bar-inbox progress-bar-striped\" role=\"progressbar\" aria-valuenow=\"$notparticipated_percent\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"min-width:2em; width:$notparticipated_percent\">$notparticipated_percent</div></div>"; } else { $notparticipated_bar = "<div class=\"progress progress-inbox\"></div>"; }
$strikerate = number_format(($participated / $invited) * 100, 1);
// Get stats
$q2B = $db->prepare("SELECT SUM(status = :S1) AS q2B1, SUM(status = :S2) AS q2B2, SUM(status = :S3) AS q2B3 FROM j_results WHERE surveyid = :surveyid ");
$q2B->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
$q2B->bindValue(':S1', '2', PDO::PARAM_INT);
$q2B->bindValue(':S2', '1', PDO::PARAM_INT);
$q2B->bindValue(':S3', '0', PDO::PARAM_INT);
$q2B->execute();
while ($row = $q2B->fetchObject()) {
  $rgood = $row->q2B1;
  $rtested = $row->q2B2;
  $rdeleted = $row->q2B3;
  $valid = $rgood;
  $invalid = $rtested + $deleted;
}
$valid_format = number_format($valid);
$invalid_format = number_format($invalid);
$completion_format = number_format($completion);
$valid_percent = percent($valid / $invited);
if ($valid) { $valid_bar = "<div class=\"progress progress-inbox\"><div class=\"progress-bar progress-bar-inbox progress-bar-striped\" role=\"progressbar\" aria-valuenow=\"$valid_percent\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"min-width:2em; width:$valid_percent\">$valid_percent</div></div>"; } else { $valid_bar = "<div class=\"progress progress-inbox\"></div>"; }
$invalid_percent = percent($invalid / $invited);
if ($invalid) { $invalid_bar = "<div class=\"progress progress-inbox\"><div class=\"progress-bar progress-bar-inbox progress-bar-striped\" role=\"progressbar\" aria-valuenow=\"$invalid_percent\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"min-width:2em; width:$invalid_percent\">$invalid_percent</div></div>"; } else { $invalid_bar = "<div class=\"progress progress-inbox\"></div>"; }
$successrate = number_format(($valid / $participated) * 100, 1);

// Contact sheet for Private project
$mainrespondent = "/admin/?w=respondents&s=".$_GET['s'];
$showdc = false;
if ($private == 1) {
  echo "<h4>Contact sheet (private project only)</h4>\n";
  if ($all == 0) {
    echo "<p>This project currently has <strong>no respondent</strong> stored in the database.</p>\n";
    echo "<p>Please upload respondent's emails using a Comma Separated Value (CSV) file and our system will enable the email function allowing you to send invitation / reminder to respondents accordingly.</p>\n";
    echo "<div id=\"gauge1\" style=\"display:none\"></div><div id=\"gauge2\" style=\"display:none\"></div><div id=\"orgchart\" style=\"display:none\"></div>\n";
    echo "<p>The upload function can be found in the <a href=\"$mainrespondent\">respondent's main page</a>, and it looks like below example <i class=\"pe-arrow-down\"></i>.</p>\n";
    echo "<div align=\"right\"><a class=\"btn btn-info\"><i class=\"pe-upload pe-fw\"></i> Upload a new name list</a> <a class=\"btn btn-info\"><i class=\"pe-user-plus pe-fw\"></i> Manually add new respondents</a></div>\n";
    echo "<br>\n";
    if ($valid > 0) { echo $dcupdate; }
  } else if (($all != 0) && ($allgood == 0)) {
    echo "<p>Although you have uploaded some respondents to the database (n=$all_format), <strong>none of them</strong> appears to be good to use.</p>\n";
    echo "<p>This is because their emails appears to be in an incorrect format. To fix this, you have to delete them from the database, and upload a new list making sure the right column on your Comma Separated Value (CSV) file is selected.</p>\n";
    echo "<div id=\"gauge1\" style=\"display:none\"></div><div id=\"gauge2\" style=\"display:none\"></div><div id=\"orgchart\" style=\"display:none\"></div>\n";
    echo "<p>The upload function can be found in the <a href=\"$mainrespondent\">respondent's main page</a>, and it looks like below example <i class=\"pe-arrow-down\"></i>.</p>\n";
    echo "<div align=\"right\"><a class=\"btn btn-info\"><i class=\"pe-upload pe-fw\"></i> Upload a new name list</a> <a class=\"btn btn-info\"><i class=\"pe-user-plus pe-fw\"></i> Manually add new respondents</a></div>\n";
    echo "<br>\n";
    if ($valid > 0) { echo $dcupdate; }
  } else if (($allgood != 0) && ($invited == 0)) {
    echo "<p>Although you have uploaded valid respondents to the database (n=$allgood_format valid from a total upload of n=$all_format), <strong>none of them</strong> has been sent with an invitation to your survey, and therefore <strong>no participation</strong>.</p>\n";
    echo "<p>We therefore strongly suggest you start inviting your respondents to this survey to start the data collection process.</p>\n";
    echo "<div id=\"gauge1\" style=\"display:none\"></div><div id=\"gauge2\" style=\"display:none\"></div><div id=\"orgchart\" style=\"display:none\"></div>\n";
    echo "<p>The invitation function can be found in the <a href=\"$mainrespondent\">respondent's main page</a>, and it looks like below examples <i class=\"pe-arrow-down\"></i>.</p>\n";
    echo "<div align=\"right\"><a class=\"btn btn-warning\"><i class=\"pe-envelope pe-fw\"></i> Send an invitation email</a> <a class=\"btn btn-warning\"><i class=\"pe-envelope pe-fw\"></i> Send a reminder email</a></div>\n";
    echo "<br>\n";
    if ($valid > 0) { echo $dcupdate; }
  } else {
    if ($participated == 0) {
      $text .= "<p>From a total upload of <strong>$all_format</strong> respondents, <strong>$allgood_format</strong> have valid email and <strong>$invited_format</strong> have been invited. However, particiation is still <strong>zero</strong> so far.</p>\n";
      $text .= "<p>This means both strike rate <em>(participation vs. invitation)</em> and success rate <em>(valid vs. participation)</em> are also <strong>zero</strong>.</p>\n";
    }
    else {
      if ($valid == 0) {
        $text .= "<p>From a total upload of <strong>$all_format</strong> respondents, <strong>$allgood_format</strong> have valid email and <strong>$invited_format</strong> have been invited.</p>\n";
        $text .= "<p><strong>$participated_format</strong> respondents have participated but still <strong>no completion</strong> is seen.</p>\n";
        $text .= "<p>This results to a strike rate <em>(participation vs. invitation)</em> of <strong>$strikerate%</strong>, while a success rate <em>(valid vs. participation)</em> remains <strong>zero</strong>.</p>\n";
      } else {
        $text .= "<p>From a total upload of <strong>$all_format</strong> respondents, <strong>$allgood_format</strong> have valid email and <strong>$invited_format</strong> have been invited.</p>\n";
        $text .= "<p><strong>$participated_format</strong> respondents have participated and <strong>$valid_format</strong> have completed the survey.</p>\n";
        $text .= "<p>This results to <strong>$strikerate%</strong> strike rate <em>(participation vs. invitation)</em> and <strong>$successrate%</strong> success rate <em>(valid vs. participation)</em>.</p>\n";
      }
    }
    $text .= "<div class=\"row\"><div class=\"col-xs-6\"><div id=\"gauge1\"></div></div><div class=\"col-xs-6\"><div id=\"gauge2\"></div></div></div>\n";
    echo "<div class=\"row\">\n";
    echo "  <div class=\"col-xs-12 col-sm-8 col-md-8 col-lg-8\">\n";
    echo "    <div id=\"orgchart\"></div>\n";
    echo "  </div>\n";
    echo "  <div class=\"col-xs-12 col-sm-4 col-md-4 col-lg-4\">\n";
    echo "    $text\n";
    echo "  </div>\n";
    echo "</div>\n";
    echo "<br>\n";
    echo $dcupdate;
  }
} else { echo $dcupdate; echo "<div id=\"gauge1\" style=\"display:none\"></div><div id=\"gauge2\" style=\"display:none\"></div><div id=\"orgchart\" style=\"display:none\"></div>\n"; }


if ($valid > 0) {
  $sql3 = "SELECT * FROM j_results WHERE surveyid = :surveyid AND status = 2 ORDER BY submitted DESC";
  $q = $db->prepare($sql3);
  $q->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
  $q->execute(); // print_r($q->rowCount());
  $last = 0; $first = ($q->rowCount()-1);
  while ($row = $q->fetchAll(PDO::FETCH_ASSOC)) {
    $ee = $row;
    for ($i=0; $i<count($ee); $i++) {
      $removeKeys = array('rd', 'email', 'ip', 'surveyid', 'status');
      foreach($removeKeys as $key) {
        unset($ee[$i][$key]);
      }
      $ee[$i]['data'] = json_decode($ee[$i]['data'], true);
      $ee[$i]['submitted'] = $ee[$i]['submitted'];
    }
  }
  $datafortable = json_encode($ee);
  // print_r($datafortable);
  echo "<h4>Interim data</h4>\n";
  echo "<div class=\"alert alert-warning\" role=\"alert\">\n";
  echo "  <h4>Important note</h4>\n";
  echo "  <p>This data should only be used as a sanitary check rather than using it as result for analysis. Interim data is not a true reflection of the final result and the final result can very different from the interim data depending on several factors such as the sample size, sample composition, etc.</p>\n";
  echo "  <p><strong>It is imperative that business decision must not be made based on the interim result</strong>. We hereby take no responsibility on any damages to the business caused by the usage of interim result. You must use it at your own risk.</p>\n";
  echo "</div>\n";
  echo "<div id=\"showalert-delete\"></div>\n";
  echo "<div class=\"csv\">\n";
  echo "  <p>Table below shows the interim data which is <strong>the most recent <span class=\"excerpt\"></span> records</strong> of this survey which you can view the initial feedback plus an ability to delete should you need to.</p>\n";
  echo "  <p>But in order to work with the data in a more effective way, we would suggst you <a class=\"download\"><i class=\"pe-download pe-fw\"></i> download the data file</a> or alternatively <a class=\"raw\"><i class=\"pe-desktop pe-fw\"></i> view the data online</a> in a Comma Separated Values (CSV) format if there are not many questions (e.g. less than 10 questions).</p>\n";
  echo "  <textarea class=\"editing form-control\" readonly></textarea>\n";
  echo "  <div class=\"table rendered\"><table class=\"table\"></table></div>\n";
  echo "  <span class=\"tablenotice\">You may need to scroll right if there are many columns <i class=\"pe-hand-o-right\"></i></span>\n";
  echo "</div>\n";
}

?>

<script type="text/javascript">

  var companyid = parseInt("<?php echo $_SESSION['companyid']; ?>");
  var userid = parseInt("<?php echo $_SESSION['userid']; ?>");
  var surveyid = <?php echo $_GET['s']; ?>;
  var level = <?php echo $_SESSION['level']; ?>;
  var email = "<?php echo $_SESSION['email']; ?>";
  var ip = "<?php echo getip(); ?>";
  var api = 'http://www.siamsquare.org.uk';
  $.ajaxSetup({ headers: { 'X-Requested-With': 'aa5e1ab4-b0bf-4e82-8584-7cf4e9fdeaa8' } });
  $('#showalert-delete').html("<div class='alert alert-warning'><i class='pe-trash pe-fw'></i> A result record has been deleted</div>").hide();

  function showRow(e, rowIndex) {
    showhideRow(rowIndex, true);
    e.preventDefault();
    return false;
  }
  function hideRow(e, rowIndex) {
    showhideRow(rowIndex, false);
    e.preventDefault();
    return false;
  }
  function showhideRow(rowIndex, show) {
    document.getElementById("row" + rowIndex).style.display = show ? "" : "none";
    document.getElementById("rowhide" + rowIndex).style.display = show ? "" : "none";
    document.getElementById("rowshow" + rowIndex).style.display =  show ? "none" : "";
  }
  function getColumn(anArray, columnNumber) {
    return anArray.map(function(row) {
      return row[columnNumber];
    });
  }
  function deleteSurveyResult(id) {
    $.ajax({
      url: api + '/delete/result/' + surveyid + '/' + id,
      dataType: 'json',
      type: 'put',
      cache: false,
      contentType: 'application/json; charset=utf-8',
      success: function (data) {
        $('#showalert-delete').show();
        window.setTimeout(function () { $("#showalert-delete").slideUp(500, function () { $("#showalert-delete").hide(); }); }, 3000);
        $.ajax({
          url: api + '/log',
          dataType: 'json',
          type: 'post',
          contentType: 'application/json; charset=utf-8',
          data: '{ "userid": "' + userid + '", "ip": "' + ip + '", "data": "' + email + ' deleted an interim result for <?php echo $project; ?> (id=' + surveyid + ')", "critical": "4" }',
          success: function(data) { result = data; }
        });
      },
      error: function (error) { alert(error); }
    });
    window.setTimeout(function () { window.location.reload(); }, 3300);
  }
  function showCSV(rendered) {
    if (rendered) { if ($(".csv table").html()) { $(".csv .rendered").show(); $(".csv .editing").hide(); } }
    else { $(".csv .rendered").hide(); $(".csv .editing").show().focus(); }
  }
  function renderCSV(objects) {
    var rows = $.csv.fromObjects(objects, {justArrays: true}); //console.log(rows);
    if (rows.length < 1) { return; }
    var table = $(".csv table")[0];
    $(table).html("").attr("id", "interimtable").addClass("table table-condensed");
    var thead = document.createElement("thead");
    var tr = document.createElement("tr");
    var header = rows[0];
    for (field in header) {
      var th = document.createElement("th");
      $(th).html(header[field]).addClass("bg-primary small");
      tr.appendChild(th);
    }
    thead.appendChild(tr);
    $(thead).find('th:first-child').css("background", "#555"); $(thead).find('th:nth-child(2)').css("background", "#555");
    var tbody = document.createElement("tbody");
    for (var i=1; i<rows.length; i++) {
      resultid = getColumn(rows,0)
      tr = document.createElement("tr");
      var a1 = document.createElement('a'); a1.innerHTML = ' <i class="pe-chevron-down"></i>'; a1.setAttribute('id', 'rowshow' + i); a1.setAttribute('href', ''); a1.setAttribute('onclick', 'return showRow(event, ' + i + ')');
      var a2 = document.createElement('a'); a2.innerHTML = ' <i class="pe-chevron-up"></i>'; a2.setAttribute('id', 'rowhide' + i); a2.setAttribute('href', ''); a2.setAttribute('onclick', 'return hideRow(event, ' + i + ')'); a2.setAttribute('style', 'display:none');
<?php if (($_SESSION["level"] >= "6") || ($owner == 1)) { ?>
      var bb1 = document.createElement('button'); bb1.innerHTML = 'Delete <i class="pe-trash"></i>'; bb1.setAttribute('class', 'btn btn-danger btn-tiny'); bb1.setAttribute('onclick', "deleteSurveyResult('" + resultid[i] + "')");
      var bb2 = document.createElement('button'); bb2.innerHTML = 'Undelete <i class="pe-undo"></i>'; bb2.setAttribute('class', 'btn btn-warning btn-tiny'); bb2.setAttribute('onclick', "undeleteSurveyResult('" + resultid[i] + "')");
<?php } ?>
      var td2 = document.createElement("td"); td2.setAttribute('colspan', '2'); td2.setAttribute('style', 'border-top-style:none');
      var tr2 = document.createElement("tr"); tr2.setAttribute('id', 'row' + i); tr2.setAttribute('style', 'display:none');
      for (field in rows[i]) {
        var td = document.createElement("td");
        $(td).html(rows[i][field]).addClass("small");
        // if (td.contains("upload")) { alert("String Found"); }
        tr.appendChild(td);
        $(tr).find('td:first-child').append(a1).append(a2);
      }
      tbody.appendChild(tr);
<?php if (($_SESSION["level"] >= "6") || ($owner == 1)) { ?>
      td2.appendChild(bb1);
      td2.append(" ");
      // td2.appendChild(bb2);
<?php } ?>
      tr2.appendChild(td2);
      tbody.appendChild(tr2);
      $(tbody).find('td:first-child').css("background", "#eee"); $(tbody).find('td:nth-child(2)').css("background", "#eee");
    }
    table.appendChild(thead);
    table.appendChild(tbody);
  }
  String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
  };
  $(document).ready(function () {
    var excerptRows = <?php echo $excerptRows; ?>;
    <?php if ($valid == 0) { echo "var tt = [];"; } else { echo "var tt = $datafortable;"; } ?>
    <?php if ($valid == 0) { echo "var ttt = [];"; } else { echo "var ttt = $datafortable;"; } ?>
    for(var k in tt) {
      var o = tt[k];
      moment.locale('en');
      var s1 = moment(o.submitted).fromNow();
      var s2 = moment(o.submitted).format("D MMM YYYY");
      newsubmitted = s1; //newsubmitted = s2 + ' (' + s1 + ')';
      o.submitted = newsubmitted;
    }
    var tt = JSON.stringify(tt); var ttt = JSON.stringify(ttt);
    tt = tt.replaceAll("data", ""); tt = tt.replaceAll("upload/", "");
    ttt = ttt.replaceAll("data", ""); ttt = ttt.replaceAll("upload/", "");
    // tt = tt.replaceAll("upload/", "http://www.siamsquare.org/members/assets/upload/");
    // ttt = ttt.replaceAll("upload/", "http://www.siamsquare.org/members/assets/upload/");
    var inArray1 = JSON.parse(tt); var inArray2 = JSON.parse(ttt);
    var outArray1 = []; var outArray2 = [];
    for (var row in inArray1) { outArray1[outArray1.length] = parse_object(inArray1[row]); }
    for (var row in inArray2) { outArray2[outArray2.length] = parse_object(inArray2[row]); }
    $(".excerpt").text("" + excerptRows);
    // $("span.rows.count").text("" + outArray1.length);
    // $("span.rows.count").text("" + outArray2.length);
    var csv1 = "\ufeff"+$.csv.fromObjects(outArray1); var csv2 = "\ufeff"+$.csv.fromObjects(outArray2);
    renderCSV(outArray1.slice(0, excerptRows), this.id);
    showCSV(true);
    $(".csv textarea").val(csv2);
    var blob = new Blob([csv2], { type: ' type: "text/csv;charset=UTF-8"' });
    var csvUrl = window.URL.createObjectURL(blob);
    var todayDate = new Date().toISOString().slice(0,10);
    var filename = "<?php echo $project; ?>" + "_data_" + todayDate + '.csv';
    $(".csv a.download").attr({'download': filename, 'href': csvUrl });
    // var uri = "data:text/csv;charset=utf-8," + encodeURIComponent(csv2);
    // $(".csv a.download").attr("href", uri);
    $(".csv textarea").blur(function() { showCSV(true); })
    $(".csv .raw").click(function() {
      showCSV(false);
      $(".csv textarea").focus().select();
      return false;
    })
    $(".csv a.download").click(function() {
      var data = $(".csv textarea").val();
      if (data) { Events.download(data.length); return true; }
      else { return false; }
    });
    $(".csv textarea").click(function() {$(this).focus().select();});
  });

  google.charts.load('current', {'packages': ['corechart', 'orgchart', 'gauge'] });
  google.charts.setOnLoadCallback(drawOrgChart);
  google.charts.setOnLoadCallback(drawGaugeChart1);
  google.charts.setOnLoadCallback(drawGaugeChart2);
  google.charts.setOnLoadCallback(drawAreaChart);

  function drawOrgChart() {
    var chart = new google.visualization.OrgChart(document.getElementById('orgchart'));
    var dataTable = new google.visualization.DataTable();
    dataTable.addColumn('string', 'Status');
    dataTable.addColumn('string', 'Sample');
    dataTable.addColumn('string', 'ToolTip');
    dataTable.addRows([
      <?php echo "[{ v:'Invited', f:'<div class=\"small\">Invited</div><div style=\"font-size:1.5rem\">n=".$invited_format."</div>$invited_bar' }, '', 'Those who have been invited' ],\n"; ?>
      <?php echo "[{ v:'Participated', f:'<div class=\"small\">Participated</div><div style=\"font-size:1.5rem\">n=".$participated_format."</div>$participated_bar' }, 'Invited', 'Those who have participated in this project' ],\n"; ?>
      <?php echo "[{ v:'Not participated', f:'<div class=\"small\">Not participated</div><div style=\"font-size:1.5rem\">n=".$notparticipated_format."</div>$notparticipated_bar' }, 'Invited', 'Those who have not participated in this study' ],\n"; ?>
      <?php echo "[{ v:'Valid', f:'<div class=\"small\">Valid</div><div style=\"font-size:1.5rem\">n=".$valid_format."</div>$valid_bar' }, 'Participated', 'Those who have completed and results are valid' ],\n"; ?>
      <?php echo "[{ v:'Invalid', f:'<div class=\"small\">Invalid</div><div style=\"font-size:1.5rem\">n=".$invalid_format."</div>$invalid_bar' }, 'Participated', 'Those who have completed but results are invalid' ],\n"; ?>
    ]);
    dataTable.setRowProperty(3, 'style', 'background: #d9edf7; border: 3px solid #31708f');
    var options = { allowHtml: true, nodeClass: "nodeClass", selectedNodeClass: "selectedNodeClass", size: "large" };
    chart.draw(dataTable, options);
  }

  function drawGaugeChart1() {
    var chart = new google.visualization.Gauge(document.getElementById('gauge1'));
    var dataTable = new google.visualization.DataTable();
    dataTable.addColumn('number', 'Strike rate');
    dataTable.addRows(1);
    dataTable.setCell(0, 0, <?php echo $strikerate; ?>);
    var options = { width: 120, height: 400, redFrom: 0, redTo: 10, yellowFrom:10, yellowTo: 30, greenFrom:30, greenTo: 100, minorTicks: 5 };
    chart.draw(dataTable, options);
  }

  function drawGaugeChart2() {
    var chart = new google.visualization.Gauge(document.getElementById('gauge2'));
    var dataTable = new google.visualization.DataTable();
    dataTable.addColumn('number', 'Success rate');
    dataTable.addRows(1);
    dataTable.setCell(0, 0, <?php echo $successrate; ?>);
    var options = { width: 120, height: 400, redFrom: 0, redTo: 10, yellowFrom:10, yellowTo: 30, greenFrom:30, greenTo: 100, minorTicks: 5 };
    chart.draw(dataTable, options);
  }

  function drawAreaChart() {
    var container = document.getElementById('areachart');
    var chart = new google.visualization.AreaChart(container);
    var dataTable = new google.visualization.DataTable();
      dataTable.addColumn('string', 'Date');
<?php if ($private == 1) { echo "      dataTable.addColumn('number', 'Participation');"; } ?>
      dataTable.addColumn('number', 'Success sample Size');
      dataTable.addRows(<?php echo $area; ?>);
    var options = {
      title: 'Detail on sample size achievement by date (n=<?php echo $SSCOUNT1; ?>)',
<?php if ($private == 1) { echo "      colors: ['grey', 'blue'],"; } ?>
<?php if ($private == 1) { echo "      legend: { position: \"top\", alignment: \"end\" },"; } else { echo "      legend: { position: \"none\" },"; } ?>
      areaOpacity: 0.1,
      hAxis: {
        gridlines: { color: '#E0E0E0'},
        textStyle: { color: "#666666", fontName: "Arial", fontSize: 9, bold: false, italic: false },
      },
      vAxis: {
        gridlines: {color: '#E0E0E0'},
        textStyle: { color: "#666666", fontName: "Arial", fontSize: 9, bold: false, italic: false },
        minValue: 0
      },
      pointSize: 5,
      chartArea: { width: "90%", height: "65%" }
    };
    chart.draw(dataTable, options);
  }

</script>

<br>

<?php backButton("/admin/?w=surveys", "Back to the main page", "danger"); ?>

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
