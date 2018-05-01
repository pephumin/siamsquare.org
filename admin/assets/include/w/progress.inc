<?php

$excerptRows = "50";
// $c_target = 300;
$base = "/admin/?w=progress&s=".$_GET['s'];

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
  if ($row->pin) { $pinnumber = $row->pin; }
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

if ($_POST['m'] == "fixerrors") {
  $clause = implode(',', array_fill(0, count($_POST["errorids"]), '?'));
  $execinput = array_merge([$_GET['s']], $_POST["errorids"]);
  $q2A = $db->prepare("UPDATE j_results SET status = 0 WHERE surveyid = ? AND id IN ($clause) ");
  $q2A->execute($execinput);
  $ql2 = $db->prepare("INSERT INTO j_users_logs (surveyid, userid, ip, data, critical) VALUE (:surveyid, :userid, :ip, '".$_SESSION['email']." fixed terminated respondents for $project', '3')");
  $ql2->bindValue(':surveyid', $_GET['s'], PDO::PARAM_INT);
  $ql2->bindValue(':userid', $_SESSION['userid'], PDO::PARAM_INT);
  $ql2->bindValue(':ip', $_SESSION['ip'], PDO::PARAM_STR);
  $ql2->execute();
  // $redirect = $base."&m=1";
  // header("location: $redirect");
  // exit;
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
$q2C = $db->prepare("SELECT SSDATE, SUM(SSCOUNT1) as SSCOUNT1, SUM(SSCOUNT2) as SSCOUNT2 FROM ((SELECT COUNT(*) AS SSCOUNT1, NULL AS SSCOUNT2, DATE(submitted) as SSDATE FROM j_results WHERE surveyid = :surveyid AND status = 2 GROUP BY DATE(submitted)) UNION ALL (SELECT NULL AS SSCOUNT1, SUM(if (invitation IS NOT NULL AND participation IS NOT NULL, 1, 0)) AS SSCOUNT2, DATE(participation) as SSDATE FROM j_respondents WHERE surveyid = :surveyid GROUP BY DATE(participation))) t GROUP BY SSDATE");
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
  $dcupdateinsert .= "    <div class=\"bg-primary text-center\" style=\"padding: 10px; border: 2px solid black;\"><p style=\"margin-bottom:10px !important\" class=\"small\">Setup ($setuptiming)</p><h4 style=\"margin-bottom:10px !important\"><strong>$daysofsetup</strong></h4></div>\n";
} else {
  $begindate = "-";
  $daysoffieldwork = "0";
  $stage = "0";
}


if ($status >= 2) { $sql3 = "SELECT * FROM j_results WHERE surveyid = :surveyid AND status = 2 ORDER BY submitted DESC"; }
else if ($status == 1) { $sql3 = "SELECT * FROM j_results WHERE surveyid = :surveyid AND status = 1 ORDER BY submitted DESC"; }
$q = $db->prepare($sql3);
$q->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
$q->execute(); // print_r($q->rowCount());
$last = 0; $first = ($q->rowCount()-1);
while ($row = $q->fetchAll(PDO::FETCH_ASSOC)) {
  $ee = $row;
  for ($i=0; $i<count($ee); $i++) {
    // $interviewerID[] = $ee[$i]['interviewer'];
    $removeKeys = array('rd', 'email', 'ip', 'surveyid', 'status', 'interviewer');
    foreach($removeKeys as $key) {
      unset($ee[$i][$key]);
      // array_push($ee[$i]['data'], $interviewerID);
    }
    $ee[$i]['data'] = json_decode($ee[$i]['data'], true);
  }
}
$datafortable = json_encode($ee);
// print_r($datafortable);

$pinerror = 0;
$pincheck = json_decode($datafortable, true);
foreach ($pincheck as $k1 => $p1) { if ($p1["data"]["PIN"] != $pinnumber) { $errorlist[] = $p1["id"]; $pinerror = 1; } }
$terminatedsize = count($errorlist);

$errorinput = "";
$pin_error = "<div class=\"alert alert-danger alert-dismissible\" role=\"alert\"><a class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>\n";
$pin_error .= "  <h4><i class=\"pe-exclamation-triangle pe-fw pe-lg\"></i> Found terminated respondents</h4>\n";
$pin_error .= "  <p>We detect <strong>$terminatedsize respondents</strong> who were actually terminated but they are incorrectly coded as successful.</p>\n";
$pin_error .= "  <p>You can just <a data-toggle=\"collapse\" href=\"#showerrors\" aria-expanded=\"false\" class=\"alert-link\">click here <i class=\"pe-arrow-circle-down pe-fw\"></i></a> to see their IDs (click again to close).</p>\n";
$pin_error .= "  <div class=\"collapse\" id=\"showerrors\"><div class=\"well small\">";
for($x = 0; $x < count($errorlist); $x++) { $pin_error .= $errorlist[$x].", "; $errorinput .= "<input type=\"hidden\" name=\"errorids[]\" value=\"$errorlist[$x]\">"; }
$pin_error .= "</div></div>\n";
$pin_error .= "  <form action=\"$base\" method=\"post\"><button type=\"submit\" name=\"m\" value=\"fixerrors\" class=\"btn btn-danger\">$errorinput Fix this error</button></form>\n";
$pin_error .= "</div>\n";

if ($pinerror == 1) { $dcupdate = $pin_error; } else { $dcupdate = ""; }
$dcupdate .= "<hr>\n";
$dcupdate .= "<div class=\"row\">\n";
$dcupdate .= "  <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\">\n";
$dcupdate .= "    $dcupdateinsert\n";
$dcupdate .= "  </div>\n";
$dcupdate .= "  <div class=\"col-xs-12 col-sm-9 col-md-9 col-lg-9\" style=\"padding:0\">\n";
$dcupdate .= "    <div style=\"width:100%; height:100%\"><center><div id=\"areachart\"></div></center></div>\n";
$dcupdate .= "  </div>\n";
$dcupdate .= "</div>\n";
$dcupdate .= "<br>\n";

// Get stats
$q2A = $db->prepare("SELECT COUNT(*) as q2A1, SUM(status = '0') AS q2A2, SUM(if (invitation IS NOT NULL, 1, 0)) AS q2A3, SUM(if (invitation IS NULL, 1, 0)) AS q2A4, SUM(if (invitation IS NOT NULL AND participation IS NOT NULL, 1, 0)) AS q2A5, SUM(if (invitation IS NOT NULL AND participation IS NULL, 1, 0)) AS q2A6 FROM j_respondents WHERE surveyid = :surveyid");
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
if ($invited || $invited == 0) { $invited_bar = "<div class=\"progress progress-inbox\"><div class=\"progress-bar progress-bar-inbox progress-bar-striped\" role=\"progressbar\" aria-valuenow=\"$invited_percent\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"min-width:2em; width:$invited_percent\">$invited_percent</div></div>"; } else { $invited_bar = "<div class=\"progress progress-inbox\"></div>"; }
$notinvited_percent = percent($notinvited / $invited);
if ($notinvited || $notinvited == 0) { $notinvited_bar = "<div class=\"progress progress-inbox\"><div class=\"progress-bar progress-bar-inbox progress-bar-striped\" role=\"progressbar\" aria-valuenow=\"$notinvited_percent\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"min-width:2em; width:$notinvited_percent\">$notinvited_percent</div></div>"; } else { $notinvited_bar = "<div class=\"progress progress-inbox\"></div>"; }
$participated_percent = percent($participated / $invited);
if ($participated || $participated == 0) { $participated_bar = "<div class=\"progress progress-inbox\"><div class=\"progress-bar progress-bar-inbox progress-bar-striped\" role=\"progressbar\" aria-valuenow=\"$participated_percent\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"min-width:2em; width:$participated_percent\">$participated_percent</div></div>"; } else { $participated_bar = "<div class=\"progress progress-inbox\"></div>"; }
$notparticipated_percent = percent($notparticipated / $invited);
if ($notparticipated || $notparticipated == 0) { $notparticipated_bar = "<div class=\"progress progress-inbox\"><div class=\"progress-bar progress-bar-inbox progress-bar-striped\" role=\"progressbar\" aria-valuenow=\"$notparticipated_percent\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"min-width:2em; width:$notparticipated_percent\">$notparticipated_percent</div></div>"; } else { $notparticipated_bar = "<div class=\"progress progress-inbox\"></div>"; }
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
  $RDterminated = $row->q2B3;
  $RDpilot = $row->q2B2;
  $RDsuccess = $row->q2B1;
  $RDall = $RDterminated + $RDpilot + $RDsuccess;
}
$valid_format = number_format($valid);
$invalid_format = number_format($invalid);
$completion_format = number_format($completion);
$valid_percent = percent($valid / $invited);
if ($valid) { $valid_bar = "<div class=\"progress progress-inbox\"><div class=\"progress-bar progress-bar-inbox progress-bar-striped\" role=\"progressbar\" aria-valuenow=\"$valid_percent\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"min-width:2em; width:$valid_percent\">$valid_percent</div></div>"; } else { $valid_bar = "<div class=\"progress progress-inbox\"></div>"; }
$invalid_percent = percent($invalid / $invited);
if ($invalid) { $invalid_bar = "<div class=\"progress progress-inbox\"><div class=\"progress-bar progress-bar-inbox progress-bar-striped\" role=\"progressbar\" aria-valuenow=\"$invalid_percent\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"min-width:2em; width:$invalid_percent\">$invalid_percent</div></div>"; } else { $invalid_bar = "<div class=\"progress progress-inbox\"></div>"; }
$successrate = number_format(($valid / $participated) * 100, 1);

$RDpilot_percent = percent($RDpilot/$sample_size); //print_r($RDpilot_percent);
if ($RDpilot || $RDpilot == 0) { $RDpilot_bar = "<div class=\"progress\"><div class=\"progress-bar progress-bar-striped\" role=\"progressbar\" aria-valuenow=\"$RDpilot_percent\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"min-height:0.2em; min-width:2em; width:$RDpilot_percent\">$RDpilot_percent</div></div>"; } //else { $RDsuccess_bar = "<div class=\"progress\"></div>"; }
$RDterminated_percent = percent($RDterminated/$sample_size); //print_r($RDterminated_percent);
if ($RDterminated || $RDterminated == 0) { $RDterminated_bar = "<div class=\"progress\"><div class=\"progress-bar progress-bar-striped\" role=\"progressbar\" aria-valuenow=\"$RDterminated_percent\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"min-height:0.2em; min-width:2em; width:$RDterminated_percent\">$RDterminated_percent</div></div>"; } //else { $RDsuccess_bar = "<div class=\"progress\"></div>"; }
$RDsuccess_percent = percent($RDsuccess/$sample_size); //print_r($RDsuccess_percent);
if ($RDsuccess || $RDsuccess == 0) { $RDsuccess_bar = "<div class=\"progress\"><div class=\"progress-bar progress-bar-striped\" role=\"progressbar\" aria-valuenow=\"$RDsuccess_percent\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"min-height:0.2em; min-width:2em; width:$RDsuccess_percent\">$RDsuccess_percent</div></div>"; } //else { $RDsuccess_bar = "<div class=\"progress\"></div>"; }

// Contact sheet for Private project
$mainrespondent = "/admin/?w=respondents&s=".$_GET['s'];
$showdc = false;
if ($private == 1) {
  if ($all == 0) {
    echo "<p>This project currently has <strong>no respondent</strong> stored in the database.</p>\n";
    echo "<p>Please upload respondent's emails using a Comma Separated Value (CSV) file and our system will enable the email function allowing you to send invitation / reminder to respondents accordingly.</p>\n";
    echo "<div id=\"gauge1\" style=\"display:none\"></div><div id=\"gauge2\" style=\"display:none\"></div><div id=\"orgchart1\" style=\"display:none\"></div>\n";
    echo "<p>The upload function can be found in the <a href=\"$mainrespondent\">respondent's main page</a>, and it looks like below example <i class=\"pe-arrow-down\"></i>.</p>\n";
    echo "<div align=\"right\"><a class=\"btn btn-info\"><i class=\"pe-upload pe-fw\"></i> Upload a new name list</a> <a class=\"btn btn-info\"><i class=\"pe-user-plus pe-fw\"></i> Manually add new respondents</a></div>\n";
    echo "<br>\n";
    if ($valid > 0) { echo $dcupdate; }
  } else if (($all != 0) && ($allgood == 0)) {
    echo "<p>Although you have uploaded some respondents to the database (n=$all_format), <strong>none of them</strong> appears to be good to use.</p>\n";
    echo "<p>This is because their emails appears to be in an incorrect format. To fix this, you have to delete them from the database, and upload a new list making sure the right column on your Comma Separated Value (CSV) file is selected.</p>\n";
    echo "<div id=\"gauge1\" style=\"display:none\"></div><div id=\"gauge2\" style=\"display:none\"></div><div id=\"orgchart1\" style=\"display:none\"></div>\n";
    echo "<p>The upload function can be found in the <a href=\"$mainrespondent\">respondent's main page</a>, and it looks like below example <i class=\"pe-arrow-down\"></i>.</p>\n";
    echo "<div align=\"right\"><a class=\"btn btn-info\"><i class=\"pe-upload pe-fw\"></i> Upload a new name list</a> <a class=\"btn btn-info\"><i class=\"pe-user-plus pe-fw\"></i> Manually add new respondents</a></div>\n";
    echo "<br>\n";
    if ($valid > 0) { echo $dcupdate; }
  } else if (($allgood != 0) && ($invited == 0)) {
    echo "<p>Although you have uploaded valid respondents to the database (n=$allgood_format valid from a total upload of n=$all_format), <strong>none of them</strong> has been sent with an invitation to your survey, and therefore <strong>no participation</strong>.</p>\n";
    echo "<p>We therefore strongly suggest you start inviting your respondents to this survey to start the data collection process.</p>\n";
    echo "<div id=\"gauge1\" style=\"display:none\"></div><div id=\"gauge2\" style=\"display:none\"></div><div id=\"orgchart1\" style=\"display:none\"></div>\n";
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
    echo "<h4>Status: $fieldworkstatus</h4>\n";
    echo "<div class=\"row\">\n";
    echo "  <div class=\"col-xs-12 col-sm-8 col-md-8 col-lg-8\">\n";
    echo "    <div id=\"orgchart1\"></div>\n";
    echo "  </div>\n";
    echo "  <div class=\"col-xs-12 col-sm-4 col-md-4 col-lg-4\">\n";
    echo "    $text\n";
    echo "  </div>\n";
    echo "</div>\n";
    // echo "<hr>\n";
    echo $dcupdate;
    echo "<hr>\n";
  }
} else {
  if ($RDsuccess > 0) {
    $average = number_format($RDsuccess / $daysoffieldwork, 1);
    $text .= "<p>Within a period of <strong>$daysoffieldwork</strong> of fieldwork, we have achieved a total of <strong>n=$RDsuccess</strong> successful interviews <small class=\"grey\">(an average of $average interviews per day)</small>.</p>\n";
    $text .= "<p>From the required total sample of <strong>n=$sample_size</strong> we have so far achieved <strong>$RDsuccess_percent</strong>.</p>\n";
  } else {
    $text .= "<p>Within a period of <strong>$daysoffieldwork</strong> of fieldwork, there is still no successful interviews to be seen at all.</p>\n";
    $text .= "<p>Please revisit this page again in the next day or so. If this page is not moving for many days, please contact us for support.</p>\n";
  }
  $text .= "<div class=\"row\"><div class=\"col-xs-6\"><div id=\"gauge1\" style=\"display:none\"></div></div><div class=\"col-xs-6\"><div id=\"gauge2\" style=\"display:none\"></div></div></div>\n";
  echo "<h4>Status: $fieldworkstatus</h4>\n";
  echo "<div class=\"row\">\n";
  echo "  <div class=\"col-xs-12 col-sm-8 col-md-8 col-lg-8\">\n";
  echo "    <div id=\"orgchart2\"></div>\n";
  echo "  </div>\n";
  echo "  <div class=\"col-xs-12 col-sm-4 col-md-4 col-lg-4\">\n";
  echo "    $text\n";
  echo "  </div>\n";
  echo "</div>\n";
  // echo "<hr>\n";
  echo $dcupdate;
  echo "<hr>\n";
}

for ($i=0; $i<count($ee); $i++) {
  $interviewer[] = $ee[$i]['data']['Interviewer'];
  if ($ee[$i]['data']['Region']) { $region[] = $ee[$i]['data']['Region']; }
  else if ($ee[$i]['data']['Location']) { $region[] = $ee[$i]['data']['Location']; }
  if ($ee[$i]['data']['Gender']) { $gender[] = $ee[$i]['data']['Gender']; }
  else if ($ee[$i]['data']['Demographic']['Record']['Gender']) { $gender[] = $ee[$i]['data']['Demographic']['Record']['Gender']; }
  if ($ee[$i]['data']['Age']) { $age[] = $ee[$i]['data']['Age']; }
  else if ($ee[$i]['data']['Demographic']['Record']['Age']) { $age[] = $ee[$i]['data']['Demographic']['Record']['Age']; }
  if ($ee[$i]['data']['SES']) { $SES[] = $ee[$i]['data']['SES']; }
  else if ($ee[$i]['data']['Demographic']['Record']['SES']) { $SES[] = $ee[$i]['data']['Demographic']['Record']['SES']; }
  if ($ee[$i]['data']['Education']) { $education[] = $ee[$i]['data']['Education']; }
  else if ($ee[$i]['data']['Demographic']['Record']['Education']) { $education[] = $ee[$i]['data']['Demographic']['Record']['Education']; }
  if ($ee[$i]['data']['Occupation']) { $occupation[] = $ee[$i]['data']['Occupation']; }
  else if ($ee[$i]['data']['Demographic']['Record']['Occupation']) { $occupation[] = $ee[$i]['data']['Demographic']['Record']['Occupation']; }
  if ($ee[$i]['data']['MaritalStatus']) { $marital[] = $ee[$i]['data']['MaritalStatus']; }
  else if ($ee[$i]['data']['Demographic']['Record']['MaritalStatus']) { $marital[] = $ee[$i]['data']['Demographic']['Record']['MaritalStatus']; }
  if ($ee[$i]['data']['Residence']) { $residence[] = $ee[$i]['data']['Residence']; }
  else if ($ee[$i]['data']['Demographic']['Record']['Residence']) { $residence[] = $ee[$i]['data']['Demographic']['Record']['Residence']; }
}
$region = array_count_values($region); arsort($region);
$Z1 = array_sum($region); $A1 = array_keys($region); $B1 = array_values($region); $C1 = count($region);
$cout1 = "";
$cout1 .= "      data.addRows($C1);\n";
for ($m=0; $m < $C1; $m++) {
  $BB[$m] = number_format(($B1[$m]/$Z1)*100, 2);
  $m1 = $m+1; $m2 = $m1+1;
  $cout1 .= "      data.setCell($m, 0, '$A1[$m]');\n";
  $cout1 .= "      data.setCell($m, 1, $B1[$m]);\n";
  $cout1 .= "      data.setCell($m, 2, $BB[$m]);\n";
}
$interviewer = array_count_values($interviewer); arsort($interviewer);
$Z2 = array_sum($interviewer); $A2 = array_keys($interviewer); $B2 = array_values($interviewer); $C2 = count($interviewer);
$cout2 = "";
$cout2 .= "      data.addRows($C2);\n";
for ($m=0; $m < $C2; $m++) {
  $BB[$m] = number_format(($B2[$m]/$Z2)*100, 2);
  $m1 = $m+1; $m2 = $m1+1;
  $cout2 .= "      data.setCell($m, 0, '$A2[$m]');\n";
  $cout2 .= "      data.setCell($m, 1, $B2[$m]);\n";
  $cout2 .= "      data.setCell($m, 2, $BB[$m]);\n";
}
$gender = array_count_values($gender); krsort($gender);
$Z3 = array_sum($gender); $A3 = array_keys($gender); $B3 = array_values($gender); $C3 = count($gender);
$cout3 = "";
$cout3 .= "      data.addRows($C3);\n";
for ($m=0; $m < $C3; $m++) {
  $BB[$m] = number_format(($B3[$m]/$Z3)*100, 2);
  $m1 = $m+1; $m2 = $m1+1;
  $cout3 .= "      data.setCell($m, 0, '$A3[$m]');\n";
  $cout3 .= "      data.setCell($m, 1, $B3[$m]);\n";
  $cout3 .= "      data.setCell($m, 2, $BB[$m]);\n";
}
$age = array_count_values($age); ksort($age);
$Z4 = array_sum($age); $A4 = array_keys($age); $B4 = array_values($age); $C4 = count($age);
$cout4 = "";
$cout4 .= "      data.addRows($C4);\n";
for ($m=0; $m < $C4; $m++) {
  $BB[$m] = number_format(($B4[$m]/$Z4)*100, 2);
  $m1 = $m+1; $m2 = $m1+1;
  $cout4 .= "      data.setCell($m, 0, '$A4[$m]');\n";
  $cout4 .= "      data.setCell($m, 1, $B4[$m]);\n";
  $cout4 .= "      data.setCell($m, 2, $BB[$m]);\n";
}
$SES = array_count_values($SES); ksort($SES);
$Z5 = array_sum($SES); $A5 = array_keys($SES); $B5 = array_values($SES); $C5 = count($SES);
$cout5 = "";
$cout5 .= "      data.addRows($C5);\n";
for ($m=0; $m < $C5; $m++) {
  $BB[$m] = number_format(($B5[$m]/$Z5)*100, 2);
  $m1 = $m+1; $m2 = $m1+1;
  $cout5 .= "      data.setCell($m, 0, '$A5[$m]');\n";
  $cout5 .= "      data.setCell($m, 1, $B5[$m]);\n";
  $cout5 .= "      data.setCell($m, 2, $BB[$m]);\n";
}
$education = array_count_values($education); //ksort($education);
$Z6 = array_sum($education); $A6 = array_keys($education); $B6 = array_values($education); $C6 = count($education);
$cout6 = "";
$cout6 .= "      data.addRows($C6);\n";
for ($m=0; $m < $C6; $m++) {
  $BB[$m] = number_format(($B6[$m]/$Z6)*100, 2);
  $m1 = $m+1; $m2 = $m1+1;
  $cout6 .= "      data.setCell($m, 0, '$A6[$m]');\n";
  $cout6 .= "      data.setCell($m, 1, $B6[$m]);\n";
  $cout6 .= "      data.setCell($m, 2, $BB[$m]);\n";
}
$occupation = array_count_values($occupation); ksort($occupation);
$Z7 = array_sum($occupation); $A7 = array_keys($occupation); $B7 = array_values($occupation); $C7 = count($occupation);
$cout7 = "";
$cout7 .= "      data.addRows($C7);\n";
for ($m=0; $m < $C7; $m++) {
  $BB[$m] = number_format(($B7[$m]/$Z7)*100, 2);
  $m1 = $m+1; $m2 = $m1+1;
  $cout7 .= "      data.setCell($m, 0, '$A7[$m]');\n";
  $cout7 .= "      data.setCell($m, 1, $B7[$m]);\n";
  $cout7 .= "      data.setCell($m, 2, $BB[$m]);\n";
}
$marital = array_count_values($marital); ksort($marital);
$Z8 = array_sum($marital); $A8 = array_keys($marital); $B8 = array_values($marital); $C8 = count($marital);
$cout8 = "";
$cout8 .= "      data.addRows($C8);\n";
for ($m=0; $m < $C8; $m++) {
  $BB[$m] = number_format(($B8[$m]/$Z8)*100, 2);
  $m1 = $m+1; $m2 = $m1+1;
  $cout8 .= "      data.setCell($m, 0, '$A8[$m]');\n";
  $cout8 .= "      data.setCell($m, 1, $B8[$m]);\n";
  $cout8 .= "      data.setCell($m, 2, $BB[$m]);\n";
}
$residence = array_count_values($residence); arsort($residence);
$Z9 = array_sum($residence); $A9 = array_keys($residence); $B9 = array_values($residence); $C9 = count($residence);
$cout9 = "";
$cout9 .= "      data.addRows($C9);\n";
for ($m=0; $m < $C9; $m++) {
  $BB[$m] = number_format(($B9[$m]/$Z9)*100, 2);
  $m1 = $m+1; $m2 = $m1+1;
  $cout9 .= "      data.setCell($m, 0, '$A9[$m]');\n";
  $cout9 .= "      data.setCell($m, 1, $B9[$m]);\n";
  $cout9 .= "      data.setCell($m, 2, $BB[$m]);\n";
}

// print_r($cc);
?>

<br>
<?php if (($Z1 > 0) || ($Z2 > 0)) { ?>
<h4>Quality control</h4>
<nav>
  <ul class="nav nav-tabs">
    <li class="active"><a href="#one" data-toggle="tab" id="first-tab-trigger"><i class="pe-check-circle pe-fw"></i> By location</a></li>
    <li><a href="#two" data-toggle="tab" id="second-tab-trigger"><i class="pe-check-circle pe-fw"></i> By interviewer</a></li>
  </ul>
</nav>
<br>
<div class="tab-content">
  <div id="one" class="tab-pane fade in active">
    <p>Data broken down by location</p>
    <p class="small grey">Click the table header <i class="pe-hand-o-down"></i> to sort the data by column</p>
    <div class="row">
<?php if ($Z1 == 0) { ?>
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <p>Detailed information for this breakdown is not yet available.</p>
      </div>
<?php } else { ?>
      <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
        <div id="sorttable1" style="width:400px"></div>
      </div>
      <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">
<?php if ($Z1 == $RDsuccess) { ?>
        <p class="green"><i class="pe-check pe-lg"></i> The number of responses for this question (n=<?php echo $Z1; ?>) matches exactly to the number of sample we have achieved so far (n=<?php echo $RDsuccess; ?>). So the data is good for this particular aspect.</p>
<?php } else { ?>
        <p class="red"><i class="pe-exclamation-triangle pe-lg"></i> The number of responses for this question (n=<?php echo $Z1; ?>) is lower than the number of sample we have achieved so far (n=<?php echo $RDsuccess; ?>). This means there are some respondents who did not answer this aspect.</p>
<?php } ?>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div id="sortchart1"></div>
      </div>
<?php } ?>
    </div>
  </div>
  <div id="two" class="tab-pane fade">
    <p>Data broken down by interviewer</p>
    <p class="small grey">Click the table header <i class="pe-hand-o-down"></i> to sort the data by column</p>
    <div class="row">
<?php if ($Z2 == 0) { ?>
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <p>Detailed information for this breakdown is not yet available.</p>
      </div>
<?php } else { ?>
      <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
        <div id="sorttable2" style="width:400px"></div>
      </div>
      <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">
<?php if ($Z2 == $RDsuccess) { ?>
        <p class="green"><i class="pe-check pe-lg"></i> The number of responses for this question (n=<?php echo $Z2; ?>) matches exactly to the number of sample we have achieved so far (n=<?php echo $RDsuccess; ?>). So the data is good for this particular aspect.</p>
<?php } else { ?>
        <p class="red"><i class="pe-exclamation-triangle pe-lg"></i> The number of responses for this question (n=<?php echo $Z2; ?>) is lower than the number of sample we have achieved so far (n=<?php echo $RDsuccess; ?>). This means there are some respondents who did not answer this aspect.</p>
<?php } ?>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div id="sortchart2"></div>
      </div>
<?php } ?>
    </div>
  </div>
</div>
<hr>
<?php } ?>

<br>
<?php if (($Z3 > 0) || ($Z4 > 0) || ($Z5 > 0)) { ?>
<h4>Checking quota</h4>
<nav>
  <ul class="nav nav-tabs">
    <li class="active"><a href="#three" data-toggle="tab" id="third-tab-trigger"><i class="pe-user-circle pe-fw"></i> Gender</a></li>
<?php if ($Z4 > 0) { ?>
    <li><a href="#four" data-toggle="tab" id="fourth-tab-trigger"><i class="pe-user-circle pe-fw"></i> Age</a></li>
<?php } ?>
<?php if ($Z5 > 0) { ?>
    <li><a href="#five" data-toggle="tab" id="fifth-tab-trigger"><i class="pe-user-circle pe-fw"></i> Social grade</a></li>
<?php } ?>
<?php if ($Z6 > 0) { ?>
    <li><a href="#six" data-toggle="tab" id="sixth-tab-trigger"><i class="pe-user-circle pe-fw"></i> Education</a></li>
<?php } ?>
<?php if ($Z7 > 0) { ?>
    <li><a href="#seven" data-toggle="tab" id="seventh-tab-trigger"><i class="pe-user-circle pe-fw"></i> Occupation</a></li>
<?php } ?>
<?php if ($Z8 > 0) { ?>
    <li><a href="#eight" data-toggle="tab" id="eighth-tab-trigger"><i class="pe-user-circle pe-fw"></i> Marital Status</a></li>
<?php } ?>
<?php if ($Z9 > 0) { ?>
    <li><a href="#nine" data-toggle="tab" id="ninth-tab-trigger"><i class="pe-user-circle pe-fw"></i> Residence</a></li>
<?php } ?>
  </ul>
</nav>
<br>
<div class="tab-content">
  <div id="three" class="tab-pane fade in active">
    <p>Data broken down by gender</p>
    <p class="small grey">Click the table header <i class="pe-hand-o-down"></i> to sort the data by column</p>
    <div class="row">
      <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
        <div id="sorttable3" style="width:400px"></div>
      </div>
      <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">
<?php if ($Z3 == $RDsuccess) { ?>
        <p class="green"><i class="pe-check pe-lg"></i> The number of responses for this question (n=<?php echo $Z3; ?>) matches exactly to the number of sample we have achieved so far (n=<?php echo $RDsuccess; ?>). So the data is good for this particular aspect.</p>
<?php } else { ?>
        <p class="red"><i class="pe-exclamation-triangle pe-lg"></i> The number of responses for this question (n=<?php echo $Z3; ?>) is lower than the number of sample we have achieved so far (n=<?php echo $RDsuccess; ?>). This means there are some respondents who did not answer this aspect.</p>
<?php } ?>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div id="sortchart3"></div>
      </div>
    </div>
  </div>
<?php if ($Z4 > 0) { ?>
  <div id="four" class="tab-pane fade">
    <p>Data broken down by age</p>
    <p class="small grey">Click the table header <i class="pe-hand-o-down"></i> to sort the data by column</p>
    <div class="row">
      <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
        <div id="sorttable4" style="width:400px"></div>
      </div>
      <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">
<?php if ($Z4 == $RDsuccess) { ?>
        <p class="green"><i class="pe-check pe-lg"></i> The number of responses for this question (n=<?php echo $Z4; ?>) matches exactly to the number of sample we have achieved so far (n=<?php echo $RDsuccess; ?>). So the data is good for this particular aspect.</p>
<?php } else { ?>
        <p class="red"><i class="pe-exclamation-triangle pe-lg"></i> The number of responses for this question (n=<?php echo $Z4; ?>) is lower than the number of sample we have achieved so far (n=<?php echo $RDsuccess; ?>). This means there are some respondents who did not answer this aspect.</p>
<?php } ?>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div id="sortchart4"></div>
      </div>
    </div>
  </div>
<?php } ?>
<?php if ($Z5 > 0) { ?>
  <div id="five" class="tab-pane fade">
    <p>Data broken down by social grade</p>
    <p class="small grey">Click the table header <i class="pe-hand-o-down"></i> to sort the data by column</p>
    <div class="row">
      <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
        <div id="sorttable5" style="width:400px"></div>
      </div>
      <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">
<?php if ($Z5 == $RDsuccess) { ?>
        <p class="green"><i class="pe-check pe-lg"></i> The number of responses for this question (n=<?php echo $Z5; ?>) matches exactly to the number of sample we have achieved so far (n=<?php echo $RDsuccess; ?>). So the data is good for this particular aspect.</p>
<?php } else { ?>
        <p class="red"><i class="pe-exclamation-triangle pe-lg"></i> The number of responses for this question (n=<?php echo $Z5; ?>) is lower than the number of sample we have achieved so far (n=<?php echo $RDsuccess; ?>). This means there are some respondents who did not answer this aspect.</p>
<?php } ?>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div id="sortchart5"></div>
      </div>
    </div>
  </div>
<?php } ?>
<?php if ($Z6 > 0) { ?>
  <div id="six" class="tab-pane fade">
    <p>Data broken down by education</p>
    <p class="small grey">Click the table header <i class="pe-hand-o-down"></i> to sort the data by column</p>
    <div class="row">
      <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
        <div id="sorttable6" style="width:400px"></div>
      </div>
      <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">
<?php if ($Z6 == $RDsuccess) { ?>
        <p class="green"><i class="pe-check pe-lg"></i> The number of responses for this question (n=<?php echo $Z6; ?>) matches exactly to the number of sample we have achieved so far (n=<?php echo $RDsuccess; ?>). So the data is good for this particular aspect.</p>
<?php } else { ?>
        <p class="red"><i class="pe-exclamation-triangle pe-lg"></i> The number of responses for this question (n=<?php echo $Z6; ?>) is lower than the number of sample we have achieved so far (n=<?php echo $RDsuccess; ?>). This means there are some respondents who did not answer this aspect.</p>
<?php } ?>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div id="sortchart6"></div>
      </div>
    </div>
  </div>
<?php } ?>
<?php if ($Z7 > 0) { ?>
  <div id="seven" class="tab-pane fade">
    <p>Data broken down by occupation</p>
    <p class="small grey">Click the table header <i class="pe-hand-o-down"></i> to sort the data by column</p>
    <div class="row">
      <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
        <div id="sorttable7" style="width:400px"></div>
      </div>
      <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">
<?php if ($Z7 == $RDsuccess) { ?>
        <p class="green"><i class="pe-check pe-lg"></i> The number of responses for this question (n=<?php echo $Z7; ?>) matches exactly to the number of sample we have achieved so far (n=<?php echo $RDsuccess; ?>). So the data is good for this particular aspect.</p>
<?php } else { ?>
        <p class="red"><i class="pe-exclamation-triangle pe-lg"></i> The number of responses for this question (n=<?php echo $Z7; ?>) is lower than the number of sample we have achieved so far (n=<?php echo $RDsuccess; ?>). This means there are some respondents who did not answer this aspect.</p>
<?php } ?>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div id="sortchart7"></div>
      </div>
    </div>
  </div>
<?php } ?>
<?php if ($Z8 > 0) { ?>
  <div id="eight" class="tab-pane fade">
    <p>Data broken down by marital status</p>
    <p class="small grey">Click the table header <i class="pe-hand-o-down"></i> to sort the data by column</p>
    <div class="row">
      <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
        <div id="sorttable8" style="width:400px"></div>
      </div>
      <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">
<?php if ($Z8 == $RDsuccess) { ?>
        <p class="green"><i class="pe-check pe-lg"></i> The number of responses for this question (n=<?php echo $Z8; ?>) matches exactly to the number of sample we have achieved so far (n=<?php echo $RDsuccess; ?>). So the data is good for this particular aspect.</p>
<?php } else { ?>
        <p class="red"><i class="pe-exclamation-triangle pe-lg"></i> The number of responses for this question (n=<?php echo $Z8; ?>) is lower than the number of sample we have achieved so far (n=<?php echo $RDsuccess; ?>). This means there are some respondents who did not answer this aspect.</p>
<?php } ?>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div id="sortchart8"></div>
      </div>
    </div>
  </div>
<?php } ?>
<?php if ($Z9 > 0) { ?>
  <div id="nine" class="tab-pane fade">
    <p>Data broken down by house type</p>
    <p class="small grey">Click the table header <i class="pe-hand-o-down"></i> to sort the data by column</p>
    <div class="row">
      <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
        <div id="sorttable9" style="width:400px"></div>
      </div>
      <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">
<?php if ($Z9 == $RDsuccess) { ?>
        <p class="green"><i class="pe-check pe-lg"></i> The number of responses for this question (n=<?php echo $Z9; ?>) matches exactly to the number of sample we have achieved so far (n=<?php echo $RDsuccess; ?>). So the data is good for this particular aspect.</p>
<?php } else { ?>
        <p class="red"><i class="pe-exclamation-triangle pe-lg"></i> The number of responses for this question (n=<?php echo $Z9; ?>) is lower than the number of sample we have achieved so far (n=<?php echo $RDsuccess; ?>). This means there are some respondents who did not answer this aspect.</p>
<?php } ?>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div id="sortchart9"></div>
      </div>
    </div>
  </div>
<?php } ?>
</div>
<hr>
<?php } ?>

<?php
if ($status >= 2) { echo "<h4>Interim data <small>(based on successful interviews)</small></h4>\n"; }
else if ($status == 1) { echo "<h4>Interim data <small>(based on pilot interviews)</small></h4>\n"; }
echo "<div class=\"alert alert-warning\" role=\"alert\">\n";
echo "  <h4>Important note</h4>\n";
echo "  <p>This data should only be used as a sanitary check rather than using it as result for analysis. Interim data is not a true reflection of the final result and the final result can very different from the interim data depending on several factors such as the sample size, sample composition, etc.</p>\n";
echo "  <p><strong>It is imperative that business decision must not be made based on the interim result</strong>. We hereby take no responsibility on any damages to the business caused by the usage of interim result. You must use it at your own risk.</p>\n";
echo "</div>\n";
echo "<div id=\"showalert-delete\"></div>\n";
if ($q->rowCount() < $excerptRows) { $outrecords = $q->rowCount(); } else { $outrecords = $excerptRows; }
echo "<div class=\"csv\">\n";
echo "  <p>Table below shows the interim data which is <strong>the most recent $outrecords records</strong> of this survey which you can view the initial feedback plus an ability to delete should you need to.</p>\n";
echo "  <p>But in order to work with the data in a more effective way, we would suggst you <a class=\"download\"><i class=\"pe-download pe-fw\"></i> download the data file</a> or alternatively <a class=\"raw\"><i class=\"pe-desktop pe-fw\"></i> view the data online</a> in a Comma Separated Values (CSV) format if there are not many questions (e.g. less than 10 questions).</p>\n";
echo "  <textarea class=\"editing form-control\" readonly></textarea>\n";
echo "  <div class=\"table rendered\"><table class=\"table\"></table></div>\n";
echo "  <span class=\"tablenotice\">You may need to scroll right if there are many columns <i class=\"pe-hand-o-right\"></i></span>\n";
echo "</div>\n";

?>

<script type="text/javascript">

  var companyid = parseInt("<?php echo $_SESSION['companyid']; ?>");
  var userid = parseInt("<?php echo $_SESSION['userid']; ?>");
  var surveyid = <?php echo $_GET['s']; ?>;
  var level = <?php echo $_SESSION['level']; ?>;
  var email = "<?php echo $_SESSION['email']; ?>";
  var ip = "<?php echo getip(); ?>";
  var private = <?php echo $private; ?>;
  var api = 'http://www.siamsquare.org.uk';
  $.ajaxSetup({ headers: { 'X-Requested-With': 'aa5e1ab4-b0bf-4e82-8584-7cf4e9fdeaa8' } });
  $('#showalert-delete').html("<div class='alert alert-warning'><i class='pe-trash pe-fw'></i> A result record has been deleted</div>").hide();

  function getColumn(anArray, columnNumber) { return anArray.map(function(row) { return row[columnNumber]; }); }
  function showRow(e, rowIndex) { showhideRow(rowIndex, true); e.preventDefault(); return false; }
  function hideRow(e, rowIndex) { showhideRow(rowIndex, false); e.preventDefault(); return false; }
  function showhideRow(rowIndex, show) {
    document.getElementById("row" + rowIndex).style.display = show ? "" : "none";
    document.getElementById("rowhide" + rowIndex).style.display = show ? "" : "none";
    document.getElementById("rowshow" + rowIndex).style.display =  show ? "none" : "";
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
<?php if ($datafortable) { echo "    var tt = $datafortable\n"; } else { echo "    var tt = []\n"; } ?>
<?php if ($datafortable) { echo "    var ttt = $datafortable\n"; } else { echo "    var ttt = []\n"; } ?>
    for (var k in tt) {
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
    // $(".excerpt").text("" + excerptRows);
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

  google.charts.load('current', {'packages': ['corechart', 'orgchart', 'gauge', 'table'] });
  if (private) { google.charts.setOnLoadCallback(drawOrgChart1); } else { google.charts.setOnLoadCallback(drawOrgChart2); }
  google.charts.setOnLoadCallback(drawGaugeChart1);
  google.charts.setOnLoadCallback(drawGaugeChart2);
  google.charts.setOnLoadCallback(drawAreaChart);
  google.charts.setOnLoadCallback(drawInterviewer);
  google.charts.setOnLoadCallback(drawLocation);
  google.charts.setOnLoadCallback(drawGender);
  google.charts.setOnLoadCallback(drawAge);
  google.charts.setOnLoadCallback(drawSES);
  google.charts.setOnLoadCallback(drawEducation);
  google.charts.setOnLoadCallback(drawOccupation);
  google.charts.setOnLoadCallback(drawMaritalStatus);
  google.charts.setOnLoadCallback(drawResidence);

  function drawOrgChart1() {
    var chart = new google.visualization.OrgChart(document.getElementById('orgchart1'));
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

  function drawOrgChart2() {
    var chart = new google.visualization.OrgChart(document.getElementById('orgchart2'));
    var dataTable = new google.visualization.DataTable();
    dataTable.addColumn('string', 'Status');
    dataTable.addColumn('string', 'Sample');
    dataTable.addColumn('string', 'ToolTip');
    dataTable.addRows([
      <?php echo "[{ v:'Total', f:'<div class=\"small\">Total</div><div style=\"font-size:1.5rem\">n=".$RDall."</div>' }, '', 'Total interviews so far' ],\n"; ?>
      <?php echo "[{ v:'Pilot', f:'<div class=\"small\">Pilot</div><div style=\"font-size:1.5rem\">n=".$RDpilot."</div>$RDpilot_bar' }, 'Total', 'Pilot interviews' ],\n"; ?>
      <?php echo "[{ v:'Terminated', f:'<div class=\"small\">Terminated</div><div style=\"font-size:1.5rem\">n=".$RDterminated."</div>$RDterminated_bar' }, 'Total', 'Terminated interviews' ],\n"; ?>
      <?php echo "[{ v:'Successful', f:'<div class=\"small\">Successful</div><div style=\"font-size:1.5rem\">n=".$RDsuccess."</div>$RDsuccess_bar' }, 'Total', 'Successful interviews' ],\n"; ?>
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
      if (private) { dataTable.addColumn('number', 'Participation'); }
      dataTable.addColumn('number', 'Successful interviews');
      dataTable.addRows(<?php echo $area; ?>);
    if (private) {
      var options = {
        title: 'Sample size achieved by date (n=<?php echo $SSCOUNT1; ?>)',
        colors: ['grey', 'blue'],
        legend: { position: 'top', alignment: 'end' },
        areaOpacity: 0.1,
        hAxis: {
          gridlines: { color: '#E0E0E0' },
          textStyle: { color: "#666666", fontName: "Arial", fontSize: 9, bold: false, italic: false },
        },
        vAxis: {
          gridlines: {color: '#E0E0E0' },
          textStyle: { color: "#666666", fontName: "Arial", fontSize: 9, bold: false, italic: false },
          minValue: 0
        },
        pointSize: 5,
        chartArea: { top: 30, bottom: 30, width: "90%", height: "100%" }
      };
    }
    else {
      var options = {
        title: 'Sample size achieved by date (n=<?php echo $SSCOUNT1; ?>)',
        legend: { position: 'top', alignment: 'end' },
        areaOpacity: 0.1,
        hAxis: {
          gridlines: { color: '#E0E0E0' },
          textStyle: { color: "#666666", fontName: "Arial", fontSize: 9, bold: false, italic: false },
        },
        vAxis: {
          gridlines: {color: '#E0E0E0' },
          textStyle: { color: "#666666", fontName: "Arial", fontSize: 9, bold: false, italic: false },
          minValue: 0
        },
        pointSize: 5,
        chartArea: { top: 30, bottom: 30, left: 30, right: 30, width: "100%", height: "100%" }
      };
    }
    chart.draw(dataTable, options);
  }
  function drawLocation() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Answer');
    data.addColumn('number', 'Count');
    data.addColumn('number', 'Percentage');
<?php echo $cout1; ?>
    var viewTable = new google.visualization.DataView(data);
    viewTable.setColumns([0, 1, 2]);
    var viewChart = new google.visualization.DataView(data);
    viewChart.setColumns([0, 1]);
    var formatter = new google.visualization.NumberFormat({ suffix: '%', fractionDigits: '1' });
    formatter.format(data, 2);
    var options = { title: 'Completion by location', width: '100%', height: '400', bar: { groupWidth: '60%' }, legend: { position: 'none' } };
    var chart = new google.visualization.ColumnChart(document.getElementById('sortchart1'));
    chart.draw(viewChart, options);
    var table = new google.visualization.Table(document.getElementById('sorttable1'));
    table.draw(viewTable, { width: '100%', height: '100%' });
    google.visualization.events.addListener(table, 'sort', function(event) {
      data.sort([{ column: event.column, desc: !event.ascending }]);
      chart.draw(viewChart);
    });
  }
  function drawInterviewer() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Answer');
    data.addColumn('number', 'Count');
    data.addColumn('number', 'Percentage');
<?php echo $cout2; ?>
    var viewTable = new google.visualization.DataView(data);
    viewTable.setColumns([0, 1, 2]);
    var viewChart = new google.visualization.DataView(data);
    viewChart.setColumns([0, 1]);
    var formatter = new google.visualization.NumberFormat({ suffix: '%', fractionDigits: '1' });
    formatter.format(data, 2);
    var options = { title: 'Completion by interviewer', width: '100%', height: '600', bar: { groupWidth: '60%' }, legend: { position: 'none' } };
    var chart = new google.visualization.BarChart(document.getElementById('sortchart2'));
    chart.draw(viewChart, options);
    var table = new google.visualization.Table(document.getElementById('sorttable2'));
    table.draw(viewTable, { width: '100%', height: '100%' });
    google.visualization.events.addListener(table, 'sort', function(event) {
      data.sort([{ column: event.column, desc: !event.ascending }]);
      chart.draw(viewChart);
    });
  }
  function drawGender() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Answer');
    data.addColumn('number', 'Count');
    data.addColumn('number', 'Percentage');
<?php echo $cout3; ?>
    var viewTable = new google.visualization.DataView(data);
    viewTable.setColumns([0, 1, 2]);
    var viewChart = new google.visualization.DataView(data);
    viewChart.setColumns([0, 1]);
    var formatter = new google.visualization.NumberFormat({ suffix: '%', fractionDigits: '1' });
    formatter.format(data, 2);
    var options = { title: 'Completion by gender', width: '100%', height: '400', bar: { groupWidth: '60%' }, legend: { position: 'none' } };
    var chart = new google.visualization.PieChart(document.getElementById('sortchart3'));
    chart.draw(viewChart, options);
    var table = new google.visualization.Table(document.getElementById('sorttable3'));
    table.draw(viewTable, { width: '100%', height: '100%' });
    google.visualization.events.addListener(table, 'sort', function(event) {
      data.sort([{ column: event.column, desc: !event.ascending }]);
      chart.draw(viewChart);
    });
  }
  function drawAge() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Answer');
    data.addColumn('number', 'Count');
    data.addColumn('number', 'Percentage');
<?php echo $cout4; ?>
    var viewTable = new google.visualization.DataView(data);
    viewTable.setColumns([0, 1, 2]);
    var viewChart = new google.visualization.DataView(data);
    viewChart.setColumns([0, 1]);
    var formatter = new google.visualization.NumberFormat({ suffix: '%', fractionDigits: '1' });
    formatter.format(data, 2);
    var options = { title: 'Completion by age group', width: '100%', height: '400', bar: { groupWidth: '60%' }, legend: { position: 'none' } };
    var chart = new google.visualization.ColumnChart(document.getElementById('sortchart4'));
    chart.draw(viewChart, options);
    var table = new google.visualization.Table(document.getElementById('sorttable4'));
    table.draw(viewTable, { width: '100%', height: '100%' });
    google.visualization.events.addListener(table, 'sort', function(event) {
      data.sort([{ column: event.column, desc: !event.ascending }]);
      chart.draw(viewChart);
    });
  }
  function drawSES() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Answer');
    data.addColumn('number', 'Count');
    data.addColumn('number', 'Percentage');
<?php echo $cout5; ?>
    var viewTable = new google.visualization.DataView(data);
    viewTable.setColumns([0, 1, 2]);
    var viewChart = new google.visualization.DataView(data);
    viewChart.setColumns([0, 1]);
    var formatter = new google.visualization.NumberFormat({ suffix: '%', fractionDigits: '1' });
    formatter.format(data, 2);
    var options = { title: 'Completion by social grade', pieHole: 0.4, width: '100%', height: '500' };
    var chart = new google.visualization.PieChart(document.getElementById('sortchart5'));
    chart.draw(viewChart, options);
    var table = new google.visualization.Table(document.getElementById('sorttable5'));
    table.draw(viewTable, { width: '100%', height: '100%' });
    google.visualization.events.addListener(table, 'sort', function(event) {
      data.sort([{ column: event.column, desc: !event.ascending }]);
      chart.draw(viewChart);
    });
  }
  function drawEducation() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Answer');
    data.addColumn('number', 'Count');
    data.addColumn('number', 'Percentage');
<?php echo $cout6; ?>
    var viewTable = new google.visualization.DataView(data);
    viewTable.setColumns([0, 1, 2]);
    var viewChart = new google.visualization.DataView(data);
    viewChart.setColumns([0, 2]);
    var formatter = new google.visualization.NumberFormat({ suffix: '%', fractionDigits: '1' });
    formatter.format(data, 2);
    var options = { title: 'Completion by education', subtitle: 'Base: total responses (n=<?php echo $Z6; ?>)', width: '100%', height: '500', legend: { position: "none" } };
    var chart = new google.visualization.ColumnChart(document.getElementById('sortchart6'));
    chart.draw(viewChart, options);
    var table = new google.visualization.Table(document.getElementById('sorttable6'));
    table.draw(viewTable, { width: '100%', height: '100%' });
    google.visualization.events.addListener(table, 'sort', function(event) {
      data.sort([{ column: event.column, desc: !event.ascending }]);
      chart.draw(viewChart);
    });
  }
  function drawOccupation() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Answer');
    data.addColumn('number', 'Count');
    data.addColumn('number', 'Percentage');
<?php echo $cout7; ?>
    var viewTable = new google.visualization.DataView(data);
    viewTable.setColumns([0, 1, 2]);
    var viewChart = new google.visualization.DataView(data);
    viewChart.setColumns([0, 2]);
    var formatter = new google.visualization.NumberFormat({ suffix: '%', fractionDigits: '1' });
    formatter.format(data, 2);
    var options = { title: 'Completion by occupation', width: '100%', height: '500', legend: { position: "none" } };
    var chart = new google.visualization.ColumnChart(document.getElementById('sortchart7'));
    chart.draw(viewChart, options);
    var table = new google.visualization.Table(document.getElementById('sorttable7'));
    table.draw(viewTable, { width: '100%', height: '100%' });
    google.visualization.events.addListener(table, 'sort', function(event) {
      data.sort([{ column: event.column, desc: !event.ascending }]);
      chart.draw(viewChart);
    });
  }
  function drawMaritalStatus() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Answer');
    data.addColumn('number', 'Count');
    data.addColumn('number', 'Percentage');
<?php echo $cout8; ?>
    var viewTable = new google.visualization.DataView(data);
    viewTable.setColumns([0, 1, 2]);
    var viewChart = new google.visualization.DataView(data);
    viewChart.setColumns([0, 2]);
    var formatter = new google.visualization.NumberFormat({ suffix: '%', fractionDigits: '1' });
    formatter.format(data, 2);
    var options = { title: 'Completion by marital status', width: '100%', height: '500', legend: { position: "none" } };
    var chart = new google.visualization.ColumnChart(document.getElementById('sortchart8'));
    chart.draw(viewChart, options);
    var table = new google.visualization.Table(document.getElementById('sorttable8'));
    table.draw(viewTable, { width: '100%', height: '100%' });
    google.visualization.events.addListener(table, 'sort', function(event) {
      data.sort([{ column: event.column, desc: !event.ascending }]);
      chart.draw(viewChart);
    });
  }
  function drawResidence() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Answer');
    data.addColumn('number', 'Count');
    data.addColumn('number', 'Percentage');
<?php echo $cout9; ?>
    var viewTable = new google.visualization.DataView(data);
    viewTable.setColumns([0, 1, 2]);
    var viewChart = new google.visualization.DataView(data);
    viewChart.setColumns([0, 2]);
    var formatter = new google.visualization.NumberFormat({ suffix: '%', fractionDigits: '1' });
    formatter.format(data, 2);
    var options = { title: 'Completion by house type', width: '100%', height: '500', legend: { position: "none" } };
    var chart = new google.visualization.ColumnChart(document.getElementById('sortchart9'));
    chart.draw(viewChart, options);
    var table = new google.visualization.Table(document.getElementById('sorttable9'));
    table.draw(viewTable, { width: '100%', height: '100%' });
    google.visualization.events.addListener(table, 'sort', function(event) {
      data.sort([{ column: event.column, desc: !event.ascending }]);
      chart.draw(viewChart);
    });
  }

  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    if ($(e.target).attr('id') == 'first-tab-trigger') { drawLocation(); }
    if ($(e.target).attr('id') == 'second-tab-trigger') { drawInterviewer(); }
    if ($(e.target).attr('id') == 'third-tab-trigger') { drawGender(); }
    if ($(e.target).attr('id') == 'fourth-tab-trigger') { drawAge(); }
    if ($(e.target).attr('id') == 'fifth-tab-trigger') { drawSES(); }
    if ($(e.target).attr('id') == 'sixth-tab-trigger') { drawEducation(); }
    if ($(e.target).attr('id') == 'seventh-tab-trigger') { drawOccupation(); }
    if ($(e.target).attr('id') == 'eighth-tab-trigger') { drawMaritalStatus(); }
    if ($(e.target).attr('id') == 'ninth-tab-trigger') { drawResidence(); }
  })


</script>

<br>

<?php backButton("/admin/?w=surveys", "Back to the main page", "danger"); ?>

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
