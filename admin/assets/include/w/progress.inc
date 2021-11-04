<?php

$excerptRows = "50";
// $c_target = 300;
$interviewerbylocation = 0;
$base = "/admin/?w=progress&s=".$_GET['s'];
$result = "/admin/?w=result&s=".$_GET['s'];
$progress = "/admin/?w=progress&s=".$_GET["s"];
$design = "/admin/?w=design&s=".$_GET["s"];
$questionnaire = "/admin/?w=questionnaire&s=".$_GET["s"];
$respondent = "/admin/?w=respondents&s=".$_GET['s'];
$defaultdata_QC = "{ \"default\": { \"questionname\": [ \"Gender\", \"Age\", \"SES\" ]}, \"monitor\": {\"questionname\": [ \"Interviewer\" ]} }";
$defaultdata_quota = "{ \"subgroup\": [] }";
$defaultdata_report = "{ \"sequential\": [] }";

$today['year'] = date("Y"); $today['month'] = date("m"); $today['day'] = date("d");
if ($today['month'] == "01") { $today['month'] = "12"; $today['year'] = $today['year']-1; } else { $today['month'] = $today['month']-1; }
// $timelinedata = "[ \n"; $colordata = "[ ";

// Get stats for private projects e.g. projects with name list upload
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

// Get stats for public projects e.g. projects wothout name list upload.
$q2B = $db->prepare("SELECT SUM(status = :S1) AS q2B1, SUM(status = :S2) AS q2B2, SUM(status = :S3) AS q2B3, SUM(status = :S4) AS q2B4 FROM j_results WHERE surveyid = :surveyid ");
$q2B->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
$q2B->bindValue(':S1', '2', PDO::PARAM_INT);
$q2B->bindValue(':S2', '1', PDO::PARAM_INT);
$q2B->bindValue(':S3', '0', PDO::PARAM_INT);
$q2B->bindValue(':S4', '3', PDO::PARAM_INT);
$q2B->execute();
while ($row = $q2B->fetchObject()) {
  $rgood = $row->q2B1;
  $rtested = $row->q2B2;
  $rdeleted = $row->q2B3;
  $RDdeleted = $row->q2B4;
  $valid = $rgood;
  $invalid = $rtested + $rdeleted + $RDdeleted;
  $RDterminated = $row->q2B3;
  $RDpilot = $row->q2B2;
  $RDsuccess = $row->q2B1;
  $RDall = $RDterminated + $RDpilot + $RDsuccess + $RDdeleted;
}
$valid_format = number_format($valid);
$invalid_format = number_format($invalid);
$completion_format = number_format($completion);
$valid_percent = percent($valid / $invited);
if ($valid) { $valid_bar = "<div class=\"progress progress-inbox\"><div class=\"progress-bar progress-bar-inbox progress-bar-striped\" role=\"progressbar\" aria-valuenow=\"$valid_percent\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"min-width:2em; width:$valid_percent\">$valid_percent</div></div>"; } else { $valid_bar = "<div class=\"progress progress-inbox\"></div>"; }
$invalid_percent = percent($invalid / $invited);
if ($invalid) { $invalid_bar = "<div class=\"progress progress-inbox\"><div class=\"progress-bar progress-bar-inbox progress-bar-striped\" role=\"progressbar\" aria-valuenow=\"$invalid_percent\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"min-width:2em; width:$invalid_percent\">$invalid_percent</div></div>"; } else { $invalid_bar = "<div class=\"progress progress-inbox\"></div>"; }
$successrate = number_format(($valid / $participated) * 100, 1);

if (!isset($RDpilot) || is_null($RDpilot)) { $RDpilot = "0"; $RDpilot_bar = "<div class=\"progress\"></div>"; } else { $RDpilot_percent = percent($RDpilot/$RDall); $RDpilot_bar = "<div class=\"progress\"><div class=\"progress-bar progress-bar-info progress-bar-striped active\" role=\"progressbar\" aria-valuenow=\"$RDpilot_percent\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"min-height:0.2em; min-width:2em; width:$RDpilot_percent\">$RDpilot_percent</div></div>"; }
if (!isset($RDdeleted) || is_null($RDdeleted)) { $RDdeleted = "0"; $RDdeleted_bar = "<div class=\"progress\"></div>"; } else { $RDdeleted_percent = percent($RDdeleted/$RDall); $RDdeleted_bar = "<div class=\"progress\"><div class=\"progress-bar progress-bar-warning progress-bar-striped active\" role=\"progressbar\" aria-valuenow=\"$RDdeleted_percent\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"min-height:0.2em; min-width:2em; width:$RDdeleted_percent\">$RDdeleted_percent</div></div>"; }
if (!isset($RDterminated) || is_null($RDterminated)) { $RDterminated = "0"; $RDterminated_bar = "<div class=\"progress\"></div>"; } else { $RDterminated_percent = percent($RDterminated/$RDall); $RDterminated_bar = "<div class=\"progress\"><div class=\"progress-bar progress-bar-warning progress-bar-striped active\" role=\"progressbar\" aria-valuenow=\"$RDterminated_percent\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"min-height:0.2em; min-width:2em; width:$RDterminated_percent\">$RDterminated_percent</div></div>"; }
if (!isset($RDsuccess) || is_null($RDsuccess)) { $RDsuccess = "0"; $RDsuccess_bar = "<div class=\"progress\"></div>"; } else { $RDsuccess_percent = percent($RDsuccess/$RDall); $RDsuccess_bar = "<div class=\"progress\"><div class=\"progress-bar progress-bar-primary progress-bar-striped active\" role=\"progressbar\" aria-valuenow=\"$RDsuccess_percent\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"min-height:0.2em; min-width:2em; width:$RDsuccess_percent\">$RDsuccess_percent</div></div>"; }

// Contact sheet summary
$showdc = false;
$moving1 = ""; $moving2 = ""; $moving3 = "";
$text = ""; 
if ($private == 1) {
  if ($all == 0) {
    $moving1 .= "<p>This project currently has <strong>no respondent</strong> stored in the database.</p>\n";
    $moving1 .= "<p>Please upload respondent's emails using a Comma Separated Value (CSV) file and our system will enable the email function allowing you to send invitation / reminder to respondents accordingly.</p>\n";
    $moving1 .= "<div id=\"gauge1\" style=\"display:none\"></div><div id=\"gauge2\" style=\"display:none\"></div><div id=\"orgchart1\" style=\"display:none\"></div>\n";
    $moving1 .= "<p>The upload function can be found in the <a href=\"$respondent\">respondent's main page</a>, and it looks like below example <i class=\"pe-arrow-down\"></i>.</p>\n";
    $moving1 .= "<div align=\"right\"><a class=\"btn btn-info\"><i class=\"pe-upload pe-fw\"></i> Upload a new name list</a> <a class=\"btn btn-info\" title=\"Add new respondents\"><i class=\"pe-user-plus pe-fw\"></i> Manually add new respondents</a></div>\n";
    $moving1 .= "<br>\n";
    if ($valid > 0) { $moving1 .= $dcupdate; }
  } else if (($all != 0) && ($allgood == 0)) {
    $moving1 .= "<p>Although you have uploaded some respondents to the database (n=$all_format), <strong>none of them</strong> appears to be good to use.</p>\n";
    $moving1 .= "<p>This is because their emails appears to be in an incorrect format. To fix this, you have to delete them from the database, and upload a new list making sure the right column on your Comma Separated Value (CSV) file is selected.</p>\n";
    $moving1 .= "<div id=\"gauge1\" style=\"display:none\"></div><div id=\"gauge2\" style=\"display:none\"></div><div id=\"orgchart1\" style=\"display:none\"></div>\n";
    $moving1 .= "<p>The upload function can be found in the <a href=\"$respondent\">respondent's main page</a>, and it looks like below example <i class=\"pe-arrow-down\"></i>.</p>\n";
    $moving1 .= "<div align=\"right\"><a class=\"btn btn-info\"><i class=\"pe-upload pe-fw\"></i> Upload a new name list</a> <a class=\"btn btn-info\" title=\"Add new respondents\"><i class=\"pe-user-plus pe-fw\"></i> Manually add new respondents</a></div>\n";
    $moving1 .= "<br>\n";
    if ($valid > 0) { $moving1 .= $dcupdate; }
  } else if (($allgood != 0) && ($invited == 0)) {
    $moving1 .= "<p>Although you have uploaded valid respondents to the database (n=$allgood_format valid from a total upload of n=$all_format), <strong>none of them</strong> has been sent with an invitation to your survey, and therefore <strong>no participation</strong>.</p>\n";
    $moving1 .= "<p>We therefore strongly suggest you start inviting your respondents to this survey to start the data collection process.</p>\n";
    $moving1 .= "<div id=\"gauge1\" style=\"display:none\"></div><div id=\"gauge2\" style=\"display:none\"></div><div id=\"orgchart1\" style=\"display:none\"></div>\n";
    $moving1 .= "<p>The invitation function can be found in the <a href=\"$respondent\">respondent's main page</a>, and it looks like below examples <i class=\"pe-arrow-down\"></i>.</p>\n";
    $moving1 .= "<div align=\"right\"><a class=\"btn btn-warning\"><i class=\"pe-envelope pe-fw\"></i> Send an invitation email</a> <a class=\"btn btn-warning\" title=\"Send a reminder email\"><i class=\"pe-envelope pe-fw\"></i> Send a reminder email</a></div>\n";
    $moving1 .= "<br>\n";
    if ($valid > 0) { $moving1 .= $dcupdate; }
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
    $text1 .= "<div id=\"gauge1\"></div></div><div class=\"col-xs-6\"><div id=\"gauge2\"></div>\n";
  }
} else { // for public projects
  // $text = "";
  $average = number_format($RDsuccess / $daysoffieldwork, 1);
  if ($sample_size) {
    if ($RDsuccess > 0) {
      $togo = number_format(($sample_size - $RDsuccess) / $average, 1);
      // $text .= insertText($text, $daysoffieldwork, $sample_size, $RDsuccess, "1");
      if ($RDsuccess < $sample_size) {
        $achieved_percent = percent($RDsuccess/$sample_size);
        // $text .= "<p>From the required total sample of <strong>n=$sample_size</strong> we have so far achieved <strong>$achieved_percent</strong>.</p>\n";
        // $text .= "<p>With this rate of progression, the data collection is estimated to end in <strong>$togo</strong> days.</p>\n";
      } else if ($RDsuccess == $sample_size) {
        // $text .= "<p>From the required total sample of <strong>n=$sample_size</strong> we have achived <strong>exactly 100%</strong> of the required sample size.</p>\n";
        // $text .= "<p>Now it's time for result analysis.</p>\n";
      } else if ($RDsuccess > $sample_size) {
        $oversuccess_percent = percent($RDsuccess/$sample_size);
        // $text .= "<p>From the required total sample of <strong>n=$sample_size</strong> we have achived more than the required sample size at <strong>+$oversuccess_percent</strong>.</p>\n";
        // $text .= "<p>Now it's time for result analysis.</p>\n";
      }
    } else {
      // $text .= insertText($text, $daysoffieldwork, $sample_size, $RDsuccess, $avewrage, "2");
    }
  } else {
    if ($RDsuccess) {
      // $text .= insertText($text, $daysoffieldwork, $sample_size, $RDsuccess, $avewrage, "3");
    }
  }
  $text .= "<div class=\"row\"><div class=\"col-xs-6\"><div id=\"gauge1\" style=\"display:none\"></div></div><div class=\"col-xs-6\"><div id=\"gauge2\" style=\"display:none\"></div></div></div>\n";
  // $moving .= "<h4>Status: $fieldworkstatus</h4>\n";
  $moving2 .= insertMoving2($moving2, $text);
  $moving2 .= "<div class=\"row\">\n";
  $moving2 .= "  <div class=\"col-xs-12 col-sm-8 col-md-8 col-lg-8\">\n";
  $moving2 .= "    <div id=\"orgchart2\"></div>\n";
  $moving2 .= "  </div>\n";
  $moving2 .= "  <div class=\"col-xs-12 col-sm-4 col-md-4 col-lg-4\">\n";
}

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
  $q->bindValue(':userid', $_SESSION["userid"], PDO::PARAM_STR);
  $q->bindValue(':ip', $_SESSION["ip"], PDO::PARAM_STR);
  $q->execute();
  exit;
}
while ($row = $q1->fetchObject()) {
  $project = $row->title;
  $status = $row->status;
  $private = $row->private;
  $sample_size = $row->sample;
  $options = $row->options;
  $QC = $row->QC;
  $quota = $row->quota;
  $rr1 = json_decode($row->data, true);
  $rr2 = $rr1['pages'];
  foreach ($rr1["pages"] as $k1 => $p1) { foreach ($p1 as $k2 => $p2) { foreach ($p2 as $k3 => $p3) { $questions[] = $p3; } } }
  if ($row->pin) { $pinnumber = $row->pin; }
  if ($row->userid == $_SESSION['userid']) { $owner = 1; } else { $owner = 0; }
  if ($row->created) { $L0 = date_parse_from_format("Y-m-d H:i:s", $row->created); if ($L0['month'] == "01") { $L0['month'] = "12"; $L0['year'] = $L0['year']-1; } else { $L0['month'] = $L0['month']-1; } $created = ago($row->created); $LLL0 = $row->created; } else { $LL0 = "-"; }
  if ($row->L1) { $L1 = date_parse_from_format("Y-m-d H:i:s", $row->L1); if ($L1['month'] == "01") { $L1['month'] = "12"; $L1['year'] = $L1['year']-1; } else { $L1['month'] = $L1['month']-1; } $LL1 = ago($row->L1); $LLL1 = $row->L1; } else { $LL1 = "-"; }
  if ($row->L2) { $L2 = date_parse_from_format("Y-m-d H:i:s", $row->L2); if ($L2['month'] == "01") { $L2['month'] = "12"; $L2['year'] = $L2['year']-1; } else { $L2['month'] = $L2['month']-1; } $LL2 = ago($row->L2); $LLL2 = $row->L2; } else { $LL2 = "-"; }
  if ($row->L3) { $L3 = date_parse_from_format("Y-m-d H:i:s", $row->L3); if ($L3['month'] == "01") { $L3['month'] = "12"; $L3['year'] = $L3['year']-1; } else { $L3['month'] = $L3['month']-1; } $LL3 = ago($row->L3); $LLL3 = $row->L3; } else { $LL3 = "-"; }
}
if (empty($QC) || ($QC == "[]")) {
  $QC = json_encode(json_decode($defaultdata_QC, true),JSON_PRETTY_PRINT);
  $q0 = $db->prepare("UPDATE j_projects SET QC = :QC WHERE id = :surveyid");
  $q0->bindValue(':QC', $QC, PDO::PARAM_INT);
  $q0->bindValue(':surveyid', $_GET['s'], PDO::PARAM_INT);
  $q0->execute();  
}
if (empty($quota) || ($quota == "[]")) {
  $quota = json_encode(json_decode($defaultdata_quota, true),JSON_PRETTY_PRINT);
  $p0 = $db->prepare("UPDATE j_projects SET quota = :quota WHERE id = :surveyid");
  $p0->bindValue(':quota', $quota, PDO::PARAM_INT);
  $p0->bindValue(':surveyid', $_GET['s'], PDO::PARAM_INT);
  $p0->execute();  
}

// $timelinedata .= " ]";
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
    $q->bindValue(':userid', $_SESSION["userid"], PDO::PARAM_STR);
    $q->bindValue(':ip', $_SESSION["ip"], PDO::PARAM_STR);
    $q->execute();
    exit;
  }
}

if ($_POST['m'] == "fixerrors") {
  $clause = implode(', ', array_fill(0, count($_POST["errorids"]), '?'));
  $execinput = array_merge([$_GET['s']], $_POST["errorids"]);
  $q2A = $db->prepare("UPDATE j_results SET status = 0 WHERE surveyid = ? AND id IN ($clause) ");
  $q2A->execute($execinput);
  $ql2 = $db->prepare("INSERT INTO j_users_logs (surveyid, userid, ip, data, critical) VALUE (:surveyid, :userid, :ip, '".$_SESSION['email']." fixed terminated respondents for $project', '3')");
  $ql2->bindValue(':surveyid', $_GET['s'], PDO::PARAM_INT);
  $ql2->bindValue(':userid', $_SESSION['userid'], PDO::PARAM_STR);
  $ql2->bindValue(':ip', $_SESSION['ip'], PDO::PARAM_STR);
  $ql2->execute();
  $redirect = $base."&m=1";
  header("location: $redirect");
  exit;
} else if (($_POST['m'] == "updatesettings") || isset($_POST["totalsamplebysubgroup"])) {
  $addtype = "0";
  if (isset($_POST["totalsample"]) && ($_POST["totalsample"] != $sample_size)) { $add = "sample = :sample, "; $addtype = "1"; }
  else if (isset($_POST["totalsamplebysubgroup"]) && ($_POST["totalsamplebysubgroup"] != $sample_size)) { $add = "sample = :sample, "; $addtype = "2"; }
  else { $addtype = "0"; }
  foreach (array_keys($_POST) as $key) {
    if (substr($key, 0, 5) === "quota") {
      list($a, $b, $c, $d) = split('_', $key);
      $qq1[$b][$c][] = $_POST[$key];
    } else {
      list($x, $y, $z) = split('_', $key);
      if ($x == "default") { $qq2[$z] = $_POST[$key]; }
      else if ($x == "monitor") { $qq3[$z] = $_POST[$key]; }
    }
  }
  foreach ($qq1 as $qqk => $qqv) {
    $newqq1["code"] = $qqv["code"];
    $newqq1["details"]["subgroup"] = $qqv["subgroup"]["0"];
    $newqq1["details"]["samplesize"] = $qqv["samplesize"]["0"];
  }
  // $newqq2 = array_map(function ($input) { return array('questionname' => $input); }, $qq2["questionname"]);
  // $newqq3 = array_map(function ($input) { return array('questionname' => $input); }, $qq3["questionname"]);
  $newqq2 = array(); $newqq3 = array();
  foreach ($qq2 as $qq2k => $qq2v) { $newqq2["questionname"][] = $qq2v; } 
  foreach ($qq3 as $qq3k => $qq3v) { $newqq3["questionname"][] = $qq3v; } 
  $all1 = []; $all2 = [];
  array_push($all2, $newqq1); $all2["quota"] = $all2["0"]; unset($all2["0"]);
  array_push($all1, $newqq2); $all1["default"] = $all1["0"]; unset($all1["0"]);
  array_push($all1, $newqq3); $all1["monitor"] = $all1["1"]; unset($all1["1"]);
  $all1 = array_remove_empty($all1); $all2 = array_remove_empty($all2);
  // print_r($all1); 
  // print_r($all2);
  $json1 = json_encode($all1, JSON_PRETTY_PRINT);
  $json2 = json_encode($all2, JSON_PRETTY_PRINT);
  // print_r($json1); print_r($json2);
  if (($json1) && ($json2)) { $query = "QC = :QC, quota = :quota, "; }
  else if (($json1) && !($json2)) { $query = "QC = :QC, "; }
  else if (!($json1) && ($json2)) { $query = "quota = :quota, "; }
  if (($addtype == "1") || ($addtype == "2")) { $query = $query.$add; }
  $query = substr($query, 0, -2);
  $qG = $db->prepare("UPDATE j_projects SET ".$query." WHERE id = :surveyid");
  $qG->bindValue(':surveyid', $_POST["surveyid"], PDO::PARAM_INT);
  if (($json1) && ($json2)) { $qG->bindValue(':QC', $json1, PDO::PARAM_STR); $qG->bindValue(':quota', $json2, PDO::PARAM_STR); }
  else if (($json1) && !($json2)) { $qG->bindValue(':QC', $json1, PDO::PARAM_STR); }
  else if (!($json1) && ($json2)) { $qG->bindValue(':quota', $json2, PDO::PARAM_STR); }
  if ($addtype == "1") { $qG->bindValue(':sample', $_POST["totalsample"], PDO::PARAM_INT); }
  else if ($addtype == "2") { $qG->bindValue(':sample', $_POST["totalsamplebysubgroup"], PDO::PARAM_INT); }
  $qG->execute();
  $redirect = $base."&m=2";
  header("location: $redirect");
  exit;
}

// Data for fieldwork summary boxes
if ($status == "1") {
  $stage = "1";
  $a = date_parse_from_format("Y-m-d H:i:s", $LLL0); $ac = $a['year']."-".$a['month']."-".$a['day']; $begindate0 = $a['day']." ".fullmonth($a['month'], "short");
  $from0 = strtotime($ac); $today = time();
  $difference1 = $today-$from0; $dd1 = floor($difference1/86400); if ($dd1 == "1") { $daysofsetup = "$dd1 day"; } else { $daysofsetup = "$dd1 days"; }
  $setuptiming = "since $begindate0";
  $average = number_format($RDsuccess / $dd1, 1);
  $fieldworkstatus = "<strong><font color=\"orange\">Still at the set-up stage <i class=\"pe-hourglass-start pe-fw\"></i></font></strong>";
  $dcupdateinsert .= "    <div class=\"bg-primary text-center\" style=\"padding: 10px; border: 2px solid black;\"><p style=\"margin-bottom:10px !important\" class=\"small\">Setup ($setuptiming)</p><h4 style=\"margin-bottom:10px !important\"><strong>$daysofsetup</strong></h4></div>\n";
  $dcupdateinsert .= "    <br>\n";
  $dcupdateinsert1 = ""; $dcupdateinsert1 .= insertText($dcupdateinsert1, $daysoffieldwork, $sample_size, $RDsuccess, $average, "1");
} else if ($status == "2") {
  $stage = "2";
  $a = date_parse_from_format("Y-m-d H:i:s", $LLL0); $ac = $a['year']."-".$a['month']."-".$a['day']; $begindate0 = $a['day']." ".fullmonth($a['month'], "short");
  $b = date_parse_from_format("Y-m-d H:i:s", $LLL1); $bc = $b['year']."-".$b['month']."-".$b['day']; $begindate1 = $b['day']." ".fullmonth($b['month'], "short");
  $from0 = strtotime($ac); $from1 = strtotime($bc); $today = time();
  $difference1 = $from1-$from0; $dd1 = floor($difference1/86400); if ($dd1 == "1") { $daysofsetup = "$dd1 day"; } else { $daysofsetup = "$dd1 days"; }
  $difference2 = $today-$from1; $dd2 = floor($difference2/86400); if ($dd2 == "1") { $daysoffieldwork = "$dd2 day"; } else { $daysoffieldwork = "$dd2 days"; }
  $setuptiming = "$begindate0 to $begindate1";
  $fieldworktiming = "since $begindate1";
  $average = number_format($RDsuccess / $dd1, 1);
  $rate = $RDsuccess / $dd1;
  $stilltodo = number_format(($sample_size-$RDsuccess) / $rate, 1);
  $fieldworkstatus = "<strong><font color=\"red\">Fieldwork is still on-going <i class=\"pe-hourglass-half pe-fw\"></i></font></strong>";
  $dcupdateinsert .= "    <div class=\"bg-info text-center\" style=\"padding: 10px; border: 2px solid black;\"><p style=\"margin-bottom:10px !important\" class=\"small\">Setup ($setuptiming)</p><h4 style=\"margin-bottom:10px !important\"><strong>$daysofsetup</strong></h4></div>\n";
  $dcupdateinsert .= "    <br>\n";
  $dcupdateinsert .= "    <div class=\"bg-primary text-center\" style=\"padding: 10px; border: 2px solid black;\"><p style=\"margin-bottom:10px !important\" class=\"small\">Fieldwork ($fieldworktiming)</p><h4 style=\"margin-bottom:10px !important\"><strong>$daysoffieldwork</strong></h4></div>\n";
  $dcupdateinsert .= "    <br>\n";
  $dcupdateinsert .= "    <div class=\"text-center\" style=\"padding: 10px; border: 2px solid black;\"><p style=\"margin-bottom:10px !important\" class=\"small\">Expected to end in</p><h4 style=\"margin-bottom:10px !important\"><strong>$stilltodo days</strong></h4></div>\n";
  $dcupdateinsert .= "    <br>\n";
  $dcupdateinsert1 = ""; $dcupdateinsert1 .= insertText($dcupdateinsert1, $daysoffieldwork, $sample_size, $RDsuccess, $average, "3");
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
  $average = number_format($RDsuccess / $dd1, 1);
  $fieldworkstatus = "<strong><font color=\"green\">Data collection was completed <i class=\"pe-hourglass-end pe-fw\"></i></font></strong>";
  $dcupdateinsert .= "    <div class=\"bg-info text-center\" style=\"padding: 10px; border: 2px solid black;\"><p style=\"margin-bottom:10px !important\" class=\"small\">Setup ($setuptiming)</p><h4 style=\"margin-bottom:10px !important\"><strong>$daysofsetup</strong></h4></div>\n";
  $dcupdateinsert .= "    <br>\n";
  $dcupdateinsert .= "    <div class=\"bg-info text-center\" style=\"padding: 10px; border: 2px solid black;\"><p style=\"margin-bottom:10px !important\" class=\"small\">Fieldwork ($fieldworktiming)</p><h4 style=\"margin-bottom:10px !important\"><strong>$daysoffieldwork</strong></h4></div>\n";
  $dcupdateinsert .= "    <br>\n";
  $dcupdateinsert .= "    <div class=\"text-center\" style=\"padding: 10px; border: 2px solid black;\"><p style=\"margin-bottom:10px !important\" class=\"small\">Expected to end in</p><h4 style=\"margin-bottom:10px !important\"><strong>$stilltodo days</strong></h4></div>\n";
  $dcupdateinsert .= "    <br>\n";
  $dcupdateinsert1 = ""; $dcupdateinsert1 .= insertText($dcupdateinsert1, $daysoffieldwork, $sample_size, $RDsuccess, $average, "3");
} else {
  $begindate = "-";
  $daysoffieldwork = "0";
  $stage = "0";
}

$title = "Job monitoring";
pageHeader($title);
echo "<h2>$title</h2>";
echo "<p class=\"introtext\">This page gives a real time update on the progress of data collection. An additional of the interim tabulation is also shown for project with valid responses.</p>";
echo "<p class=\"introtext\">Kidnly note the interim data should be used for data-checking only, and <strong>must not be used for business decision</strong>. If you would like to see the result, please use <a href=\"$result\">the result page</a> where the analysis of each question is displayed with a full graphic visualisation.</p>";
echo "<hr>\n";
echo "<div class=\"row\">\n";
echo "  <div class=\"col-xs-9 col-sm-9 col-md-9 col-lg-9\">\n";
echo "    <h3>Project $project</h3>\n";
echo "    <p>Click these tabs below to choose on what you would like to view. And the last tab is where you can set specific questions which are only unique for this study.</p>";
echo "  </div>\n";
echo "  <div class=\"col-xs-3 col-sm-3 col-md-3 col-lg-3\" style=\"padding:10px;margin-top:20px\">\n";
echo menu($questionnaire, $design, $result);
echo "  </div>\n";
echo "</div><br>\n";

?>

<nav>
  <ul class="nav nav-tabs">‚
<?php if (($_GET["m"] == "2") || ($_GET["m"] == "3") || ($_GET["bpass"] == "1")) { ?>
    <li><a href="#first" data-toggle="tab" id="first-tab-trigger"><i class="pe-flask pe-fw"></i> Progress</a></li>
    <li><a href="#second" data-toggle="tab" id="second-tab-trigger"><i class="pe-check pe-fw"></i> Quality control</a></li>
    <li><a href="#third" data-toggle="tab" id="third-tab-trigger"><i class="pe-table pe-fw"></i> Interim data</a></li>
    <li><a href="#fourth" data-toggle="tab" id="fourth-tab-trigger"><i class="pe-map-marker pe-fw"></i> Interview Map</a></li>
    <li class="active"><a href="#fifth" data-toggle="tab" id="fifth-tab-trigger"><i class="pe-wrench pe-fw"></i> Settings</a></li>
<?php } else { ?>
    <li class="active"><a href="#first" data-toggle="tab" id="first-tab-trigger"><i class="pe-flask pe-fw"></i> Progress</a></li>
    <li><a href="#second" data-toggle="tab" id="second-tab-trigger"><i class="pe-check pe-fw"></i> Quality control</a></li>
    <li><a href="#third" data-toggle="tab" id="third-tab-trigger"><i class="pe-table pe-fw"></i> Interim data</a></li>
    <li><a href="#fourth" data-toggle="tab" id="fourth-tab-trigger"><i class="pe-map-marker pe-fw"></i> InterviewMap</a></li>
    <li><a href="#fifth" data-toggle="tab" id="fifth-tab-trigger"><i class="pe-wrench pe-fw"></i> Settings</a></li>
<?php } ?>
  </ul>
</nav>
<br>
<div class="tab-content">
<?php if (($_GET["m"] == "2") || ($_GET["m"] == "3") || ($_GET["bpass"] == "1")) { ?>
  <div id="first" class="tab-pane fade">
<?php } else { ?>
  <div id="first" class="tab-pane fade in active">
<?php } ?>

<?php
// Data for area chart
$q2C = $db->prepare("SELECT SSDATE, SUM(SSCOUNT1) as SSCOUNT1, SUM(SSCOUNT2) as SSCOUNT2 FROM ((SELECT COUNT(*) AS SSCOUNT1, NULL AS SSCOUNT2, DATE(submitted) as SSDATE FROM j_results WHERE surveyid = :surveyid AND status = 2 GROUP BY DATE(submitted)) UNION ALL (SELECT NULL AS SSCOUNT1, SUM(if (invitation IS NOT NULL AND participation IS NOT NULL, 1, 0)) AS SSCOUNT2, DATE(participation) as SSDATE FROM j_respondents WHERE surveyid = :surveyid GROUP BY DATE(participation))) t GROUP BY SSDATE");
$q2C->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
$q2C->execute();
$area = "[\n";
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
  }
}
$area .= "      ]";



// ----------------- QUESTIONS ----------------------

for ($i=0; $i<count($rr2); $i++) { $rr3[] = $rr2[$i]['questions']; }

// $rr3 = call_user_func_array('array_merge', $rr3);
$rr4 = $rr3;

for ($i=0; $i<count($rr3); $i++) {
  $moveKeys = array('hasOther', 'visibleIf', 'colCount');
  foreach($moveKeys as $k1) {
    $bb = $rr3[$i][$k1];
    if ($bb) { unset($rr3[$i][$k1]); $rr3[$i][$k1] = $bb; }
  }
  $removeKeys = array('isRequired', 'visible', 'choicesOrder', 'placeHolder', 'renderAs', 'ratingTheme', 'showValues', 'cellType', 'itemSize');
  foreach($removeKeys as $k2) { unset($rr3[$i][$k2]); }
}

for ($i=0; $i<count($rr4); $i++) {
  $moveKeys = array('html', 'hasOther', 'visibleIf');
  foreach($moveKeys as $k1) {
    $bb = $rr4[$i][$k1];
    if ($bb) { unset($rr4[$i][$k1]); $rr4[$i][$k1] = $bb; }
  }
  $removeKeys1 = array('isRequired', 'visible', 'choicesOrder', 'placeHolder', 'renderAs', 'ratingTheme', 'showValues', 'cellType', 'inputType', 'colCount', 'itemSize');
  foreach($removeKeys1 as $rm1) {
    unset($rr4[$i][$rm1]);
  }
  $removeKeys2 = array('cellType', 'optionsCaption');
  foreach($removeKeys2 as $rm2) {
    for ($j=0; $j<count($rr4[$i]['columns']); $j++) { unset($rr4[$i]['columns'][$j][$rm2]); }
  }
  if ($rr4[$i]["type"] == "html") { $rr4[$i]['html'] = strip_tags($rr4[$i]['html']); }
  if ($rr4[$i]["type"] == "matrixdropdown") { unset($rr4[$i]["rows"]); unset($rr4[$i]["choices"]); }
  if (($rr4[$i]["type"] == "checkboxhtml") || ($rr4[$i]["type"] == "radiogrouphtml")) {
    for ($j=0; $j<count($rr4[$i]["choices"]); $j++) { $rr4[$i]["choices"][$j]["text"] = strip_tags($rr4[$i]["choices"][$j]["text"]); }
  }
  if (($rr4[$i]["type"] == "radiogroup") || ($rr4[$i]["type"] == "radiogrouphtml") || ($rr4[$i]["type"] == "dropdown") || ($rr4[$i]["type"] == "matrix") || ($rr4[$i]["type"] == "matrixdropdown")) { unset($rr4[$i]["type"]); $rr4[$i]['accept'] = "Single answer"; }
  else if (($rr4[$i]["type"] == "checkbox") || ($rr4[$i]["type"] == "checkboxhtml")) { unset($rr4[$i]["type"]); $rr4[$i]['accept'] = "Multiple answer"; }
  else if (($rr4[$i]["type"] == "text") || ($rr4[$i]["type"] == "multipletext") || ($rr4[$i]["type"] == "comment")) { unset($rr4[$i]["type"]); $rr4[$i]['accept'] = "Open-ended"; }
  else if ($rr4[$i]["type"] == "html") { unset($rr4[$i]["type"]); }
}

for ($i = 0; $i < count($questions); $i++) {
  $qname = $questions[$i]["name"]; $pname[] = $questions[$i]["name"];
  if ($questions[$i]["html"]) { $qtitle = "HTML"; $ptitle[] = $questions[$i]["title"]; $html = $questions[$i]["html"]; }
  else { $qtitle = $questions[$i]["title"]; $ptitle[] = $questions[$i]["title"]; }
  if (($questions[$i]["type"] == "text") && ($questions[$i]["renderAs"] == "signaturepad")) { $qtype = $questions[$i]["renderAs"]; $ptype[] = $questions[$i]["renderAs"]; }
  else if (($questions[$i]["type"] == "text") && ($questions[$i]["inputType"] == "date")) { $qtype = $questions[$i]["inputType"]; $ptype[] = $questions[$i]["inputType"]; }
  else if (($questions[$i]["type"] == "dropdown") && ($questions[$i]["renderAs"] == "barrating")) { $qtype = $questions[$i]["renderAs"]; $ptype[] = $questions[$i]["renderAs"]; }
  else if (($questions[$i]["type"] == "dropdown") && ($questions[$i]["renderAs"] == "NPS")) { $qtype = $questions[$i]["renderAs"]; $ptype[] = $questions[$i]["renderAs"]; }
  else { $qtype = $questions[$i]["type"]; $ptype[] = $questions[$i]["type"]; }
  $qvisibleIf = $questions[$i]["visibleIf"]; $pvisibleIf[] = $questions[$i]["visibleIf"];
  $qrequired = $questions[$i]["isRequired"]; 
  if ($questions[$i]["choicesByUrl"]) { $choicesByUrl = $questions[$i]["choicesByUrl"]; }
  if ($questions[$i]["choicesByUrl"]["url"]) { $url = $questions[$i]["choicesByUrl"]["url"]; }
  if ($questions[$i]["choicesByUrl"]["path"]) { $path = $questions[$i]["choicesByUrl"]["path"]; }
  if ($questions[$i]["choicesByUrl"]["valueName"]) { $valueName = $questions[$i]["choicesByUrl"]["valueName"]; }
  if ($qrequired) { $add = " <sup>(*)</sup>"; } else { $add = ""; }

  if ($qname == $showquestion) {
    array_push($zzsubgroup, $qname); 
    $qe = iconize($qtype);
    $qout .= "<small class='pull-right' style='padding:10px 5px'>".$qe."</small>\n";
    $qout .= "      <h4 style=\"font-family:boon;font-size:140%\">".$qname.$add.": ".$qtitle."</h4>\n";
    if ($qvisibleIf) { $qout .= "      <p class=\"grey small\"><em>Only ask when <u>".$qvisibleIf."</u></em></p>\n"; } else { $qout .= "      <p class=\"grey small\"><em>Ask all respondents</em></p>\n"; }
    $qout .= "<div class=\"row\"><div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9\">\n";
    // $qout .= $qoutadd;

    if ($qtype == "radiogroup") {
      $qout .= "      <ul>\n";
      $choices = $questions[$i]['choices'];
      foreach ($choices as $k4 => $p4) {
        $choice_text = $p4["text"]; $c_text[] = $p4["text"];
        $choice_code = $p4["value"]; $c_code[] = $p4["value"];
        $qout .= "        <div class=\"radio\" style=\"font-family:boon;font-size:120%\"><label style=\"display:inline\"><input type=\"radio\" name=\"radiogroup\" style=\"position:relative;margin-right:10px\" disabled>$choice_text ($choice_code)</label></div>\n";
      }
      $qout .= "      </ul>\n";
      array_push($zzsubgroup, $qtype); 
      array_push($zzsubgroup, $c_text);
      array_push($zzsubgroup, $c_code);
    }


    else if ($qtype == "radiogrouphtml") {
      $colCount = $questions[$i]['colCount'];
      $choices = $questions[$i]['choices'];
      $counting = count($choices);
      foreach ($choices as $k14 => $p14) {
        $choice_text = $p14['text']; $c_text[] = strip_tags($p14['text']);
        if (is_null($p14['text'])) { $choice_code = $p14['code']; $c_code[] = $p14['value']; }
        else { $choice_code = strip_tags($p14['text']); $c_code[] = $p14['value']; }
      }
      if ($colCount) {
        $qout .= "<div class=\"row\">\n";
        for ($j=0; $j<$counting; $j++) {
          if ($colCount == "2") { $qout .= "  <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n"; } 
          else if ($colCount == "3") { $qout .= "  <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\n"; }
          else if ($colCount == "4") { $qout .= "  <div class=\"col-xs-12 col-sm-12 col-md-3 col-lg-3\">\n"; }
          $qout .= "    <div class=\"checkbox\"><label style=\"display:inline; padding-left:0px\"><input type=\"radio\" name=\"\" disabled=\"\">".$choices[$j]["text"]."</label><br>(".$choices[$j]["value"].")</div>\n";
          $qout .= "  </div>\n";
      }
        $qout .= "</div>\n";
      } else {
        $qout .= "<div class=\"row\">\n";
        for ($j=0; $j<$counting; $j++) {
          $qout .= "  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n";
          $qout .= "    <div class=\"checkbox\"><label style=\"display:inline; padding-left:0px\"><input type=\"radio\" name=\"\" disabled=\"\">".$choices[$j]["text"]."</label><br>(".$choices[$j]["value"].")</div>\n";
          $qout .= "  </div>\n";
        }
        $qout .= "</div>\n";
      }
    }


    else if ($qtype == "checkbox") {
      $qout .= "      <ul>\n";
      $choices = $questions[$i]['choices'];
      foreach ($choices as $k5 => $p5) {
        $choice_text = $p5["text"]; $c_text[] = $p5["text"];
        $choice_code = $p5["value"]; $c_code[] = $p5["value"];
        $qout .= "        <div class=\"checkbox\" style=\"font-family:boon;font-size:120%\"><label style=\"display:inline\"><input type=\"checkbox\" style=\"position:relative;margin-right:10px\">$choice_text ($choice_code)</label></div>\n";
      }
      $qout .= "      </ul>\n";
      array_push($zzsubgroup, $qtype); 
      array_push($zzsubgroup, $c_text); 
      array_push($zzsubgroup, $c_code); 
    }


    else if ($qtype == "checkboxhtml") {
      $colCount = $questions[$i]['colCount'];
      $choices = $questions[$i]['choices'];
      $counting = count($choices);
      foreach ($choices as $k14 => $p14) {
        $choice_text = $p14['text']; $c_text[] = strip_tags($p14['text']);
        if (is_null($p14['text'])) { $choice_code = $p14['code']; $c_code[] = $p14['value']; }
        else { $choice_code = strip_tags($p14['text']); $c_code[] = $p14['value']; }
      }
      if ($colCount) {
        $qout .= "<div class=\"row\">\n";
        for ($j=0; $j<$counting; $j++) {
          if ($colCount == "2") { $qout .= "  <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n"; } 
          else if ($colCount == "3") { $qout .= "  <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\n"; }
          else if ($colCount == "4") { $qout .= "  <div class=\"col-xs-12 col-sm-12 col-md-3 col-lg-3\">\n"; }
          $qout .= "    <div class=\"checkbox\"><label style=\"display:inline; padding-left:0px\"><input type=\"checkbox\" name=\"\" disabled=\"\">".$choices[$j]["text"]."</label><br>(".$choices[$j]["value"].")</div>\n";
          $qout .= "  </div>\n";
      }
        $qout .= "</div>\n";
      } else {
        $qout .= "<div class=\"row\">\n";
        for ($j=0; $j<$counting; $j++) {
          $qout .= "  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n";
          $qout .= "    <div class=\"checkbox\"><label style=\"display:inline; padding-left:0px\"><input type=\"checkbox\" name=\"\" disabled=\"\">".$choices[$j]["text"]."</label><br>(".$choices[$j]["value"].")</div>\n";
          $qout .= "  </div>\n";
        }
        $qout .= "</div>\n";
      }
    }

    else if ($qtype == "dropdown") {
      if ($choicesByUrl) {
        list($path1, $path2) = explode(';', $path);
        $array = json_decode(file_get_contents($url));
        $qout .= "      <div class=\"row\"><div class=\"col-sm-6\" style=\"font-family:boon;font-size:120%\">\n";
        $qout .= "        <select class=\"form-control\">\n";
        foreach ($array->$path1->$path2 as $p1=>$q1) {
          $q11 = $q1->$valueName;
          $qout .= "          <option>$q11</option>\n";
        }
        $qout .= "        </select>\n";
        $qout .= "      </div></div>\n";
      } else {
        $qout .= "      <div class=\"row\"><div class=\"col-sm-6\" style=\"font-family:boon;font-size:120%\">\n";
        $qout .= "        <select class=\"form-control\">\n";
        $choices = $questions[$i]['choices'];
        foreach ($choices as $k6 => $p6) {
          $choice_text = $p6["text"]; $c_text[] = $p6["text"];
          $choice_code = $p6["value"]; $c_code[] = $p6["value"];
          $qout .= "          <option>$choice_text ($choice_code)</option>\n";
        }
        $qout .= "        </select>\n";
        $qout .= "      </div></div>\n";
      }
      array_push($zzsubgroup, $qtype); 
      array_push($zzsubgroup, $c_text); 
      array_push($zzsubgroup, $c_code); 
    }


    else if ($qtype == "rating") {
      $qout .= "      <div class=\"btn-group\" role=\"group\">\n";
      foreach ($questions[$i]["rateValues"] as $k7 => $p7) {
        $choice_text = $p7["text"]; $c_text[] = $p7["text"];
        $choice_code = $p7["value"]; $c_code[] = $p7["value"];
        $qout .= "        <button type=\"button\" class=\"btn btn-default\">$choice_text<br>$choice_code</button>\n";
      }
      $qout .= "      </div>\n";
      array_push($zzsubgroup, $qtype); 
      array_push($zzsubgroup, $c_text); 
      array_push($zzsubgroup, $c_code); 
    }


    else if ($qtype == "comment") {
      $qout .= "      <textarea rows=\"5\" class=\"form-control\" disabled></textarea><br>\n";
    }


    else if ($qtype == "text") {
      $qout .= "      <input type=\"text\" class=\"form-control\" disabled=\"\">\n";
    }


    else if ($qtype == "multipletext") {
      $qout .= "      <table class=\"table\" style=\"font-family:boon\">\n";
      $qout .= "        <thead><tr class=\"bg-primary\">\n";
      $qout .= "          <th width=\"20%\">Title</th>\n";
      $qout .= "          <th width=\"80%\">Response</th>\n";
      $qout .= "        </tr></thead>\n";
      $qout .= "      <tbody>\n";
      foreach ($questions[$i]["items"] as $k15 => $p15) {
        $row_text = $p15["name"]; $ee_text[] = $p15["name"];
        $row_code = $p15["title"]; $ee_code[] = $p15["title"];
        $qout .= "        <tr>\n";
        $qout .= "          <td align=\"right\">$row_text<br>$row_code</td>\n";
        $qout .= "          <td align=\"right\"><input type=\"text\" class=\"form-control\" disabled></td>\n";
        $qout .= "        </tr>";
      }
      $qout .= "        </tbody>\n";
      $qout .= "      </table>\n";
      $qout .= "      <br>\n";
      array_push($zzsubgroup, $qtype); 
      array_push($zzsubgroup, $ee_text); 
      array_push($zzsubgroup, $ee_code); 
    }


    else if ($qtype == "date") {
      $qout .= "      <input id=\"widget-datepicker\" type=\"text\" style=\"width:100%;\" class=\"hasDatepicker\" disabled><br>\n";
    }


    else if ($qtype == "html") {
      $qout .= "      <div style=\"font-family:boon;font-size:110%\">\n";
      $qout .= $html."<br>";
      $qout .= "      </div>\n";
    }


    else if ($qtype == "matrix") {
      $qout .= "      <table class=\"table\" style=\"font-family:boon\">\n";
      $qout .= "        <thead><tr class=\"bg-primary\">\n";
      $qout .= "          <th width=\"20%\"></th>\n";
      $a = 0;
      $nocols = count($questions[$i]["columns"]);
      $cwidth = 80/$nocols;
      foreach ($questions[$i]["columns"] as $k8 => $p8) {
        $column_text = $p8["text"]; $c_text[] = $p8["text"];
        $column_code = $p8["value"]; $c_code[] = $p8["value"];
        $column_link[] = $p8["text"]." (".$p8["value"].")";
        $column_link1[] = $p8["value"];
        $qout .= "          <th width=\"$cwidth%\" style=\"text-align:right\">$column_text<br>$column_code</th>\n";
        $a++;
      }
      $qout .= "        </tr></thead>\n";
      $qout .= "      <tbody>\n";
      foreach ($questions[$i]["rows"] as $k9 => $p9) {
        $row_text = $p9["text"]; $ee_text[] = $p9["text"];
        $row_code = $p9["value"]; $ee_code[] = $p9["value"];
        $row_link[] = $p9["text"]." (".$p9["value"].")";
        $qout .= "        <tr>\n";
        $qout .= "          <td align=\"right\">$row_text<br>$row_code</td>\n";
        for ($b=0; $b < $a; $b++) { $qout .= "          <td align=\"right\"><div class=\"radio\"><input type=\"radio\" name=\"$row_code\" style=\"position:relative;margin:0px\" disabled></div></td>\n"; }
        $qout .= "        </tr>";
      }
      $qout .= "        </tbody>\n";
      $qout .= "      </table>\n";
      array_push($zzsubgroup, $qtype); 
      array_push($zzsubgroup, $c_text); 
      array_push($zzsubgroup, $c_code); 
      array_push($zzsubgroup, $ee_text); 
      array_push($zzsubgroup, $ee_code); 
    }


    else if ($qtype == "matrixdropdown") {
      $a = array(); $b = array();
      $qout .= "      <table class=\"table\" style=\"font-family:boon\">\n";
      $qout .= "        <thead><tr class=\"bg-primary\">\n";
      $qout .= "          <th width=\"20%\"></th>\n";
      $counting1 = count($questions[$i]["columns"]);
      $width = 80/$counting1;
      $dd1 = ""; $dd2 = "";
      for ($j=0; $j<$counting1; $j++) {
        $qout .= "        <th style=\"text-align:right\" width=\"".$width."%\">".$questions[$i]["columns"][$j]["title"]." (".$questions[$i]["columns"][$j]["name"].")</th>\n";
        $counting2 = count($questions[$i]["columns"][$j]["choices"]);
        $dd2 .= "        <td>\n";
        $dd2 .= "          <select class=\"form-control\">\n";
        if ($questions[$i]["columns"][$j]["optionsCaption"]) { $dd2 .= "            <option>".$questions[$i]["columns"][$j]["optionsCaption"]."</option>\n"; }
        else { $dd2 .= "            <option>---</option>\n"; }
        for ($k=0; $k<$counting2; $k++) {
          $c_text[] = $questions[$i]["columns"][$j]["choices"][$k]["text"];
          $c_code[] = $questions[$i]["columns"][$j]["choices"][$k]["value"];
          $a[$questions[$i]["columns"][$j]["name"]][$k] = $questions[$i]["columns"][$j]["choices"][$k]["value"];
          $b[$questions[$i]["columns"][$j]["title"]][$k] = $questions[$i]["columns"][$j]["choices"][$k]["text"];
          $dd2 .= "            <option>".$questions[$i]["columns"][$j]["choices"][$k]["text"]." (".$questions[$i]["columns"][$j]["choices"][$k]["value"].")</option>\n";
        }
        $dd2 .= "          </select>\n";
        $dd2 .= "        </td>\n";
      }
      $counting3 = count($questions[$i]["rows"]);
      for ($m=0; $m<$counting3; $m++) {
        $row_text = $questions[$i]["rows"][$m]["text"]; $r_text[] = $questions[$i]["rows"][$m]["text"];
        $row_value = $questions[$i]["rows"][$m]["value"]; $r_value[] = $questions[$i]["rows"][$m]["value"];
        $dd1 .= "      <tr>\n";
        $dd1 .= "        <td align=\"right\">".$questions[$i]["rows"][$m]["text"]."<br>".$questions[$i]["rows"][$m]["value"]."</td>\n";
        $dd1 .= $dd2;
        $dd1 .= "      </tr>\n";
      }
      $qout .= "      </tr></thead>\n";
      $qout .= "      <tbody>\n";
      $qout .= $dd1;
      $qout .= "      </tbody>\n";
      $qout .= "    </table>\n";
      array_push($zzsubgroup, $qtype); 
      array_push($zzsubgroup, $a); 
      array_push($zzsubgroup, $b); 
    }


    else if ($qtype == "barrating") {
      $qout .= "      <div class=\"row\"><div class=\"col-sm-6\" style=\"font-family:boon;font-size:120%\">\n";
      $qout .= "        <div class=\"br-wrapper br-theme-star\"><div class=\"br-widget\">\n";
      $choices = $questions[$i]['choices'];
      foreach ($choices as $k13 => $p13) {
        $choice_text = $p13; $c_text[] = $p13;
        $choice_code = $p13; $c_code[] = $p13;
        $qout .= "          <a data-rating-value=\"$choice_code\" data-rating-text=\"$choice_text\"></a>\n";
      }
      $qout .= "        </div></div>\n";
      $qout .= "      </div></div>\n";
      array_push($zzsubgroup, $qtype); 
      array_push($zzsubgroup, $c_text);
      array_push($zzsubgroup, $c_code);
    }


    else if ($qtype == "NPS") {
      $qout .= "      <div class=\"row\"><div class=\"col-sm-6\" style=\"font-family:boon;font-size:120%\">\n";
      $qout .= "        <div class=\"br-wrapper br-theme-square-2\"><div class=\"br-widget\">\n";
      $counting1 = count($questions[$i]["choices"]);
      foreach ($choices as $k14 => $p14) {
        $choice_text = $p14['text']; $c_text[] = $p14['text'];
        if (is_null($p14['text'])) { $choice_code = $p14['code']; $c_code[] = $p14['code']; }
        else { $choice_code = $p14['text']; $c_code[] = $p14['text']; }
        $qout .= "          <a data-rating-value=\"".$p14["text"]."\" data-rating-text=\"".$p14["text"]."\">".$p14["text"]."</a>\n";
      }
      $qout .= "        </div></div>\n";
      $qout .= "      </div></div>\n";
      array_push($zzsubgroup, $qtype); 
      array_push($zzsubgroup, $c_text);
      array_push($zzsubgroup, $c_code);
    }
    $qout .= "</div><div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n";
    $qout .= $qoutadd;
    $qout .= "</div></div><br>\n";
    $qout .= "      <br>\n";
  }
}

// ----------------- RESULT ----------------------

// data for showing the real-time results
if ($status >= 2) { $sql3 = "SELECT * FROM j_results WHERE surveyid = :surveyid AND status = 2 ORDER BY submitted DESC"; }
else if ($status == 1) { $sql3 = "SELECT * FROM j_results WHERE surveyid = :surveyid AND status = 1 ORDER BY submitted DESC"; }
$q = $db->prepare($sql3);
$q->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
$q->execute(); 
$last = 0; $first = ($q->rowCount()-1);
while ($row = $q->fetchAll(PDO::FETCH_ASSOC)) {
  $ee = $row;
  for ($i=0; $i<count($ee); $i++) {
    $removeKeys = array('rd', 'email', 'ip', 'surveyid', 'status', 'interviewer');
    foreach($removeKeys as $key) { unset($ee[$i][$key]); }
    $ee[$i]['data'] = json_decode($ee[$i]['data'], true);
  }
}

// ----------------- COMBINING ----------------------

for ($i=0; $i<count($rr4); $i++) { $rr5[] = $rr4[$i]["name"]; }

$rr5 = array_flip($rr5);
foreach ($rr5 as $key => $value) { if (preg_match("/^+Text$/", $key)) { unset($rr5[$key]); } }
remove_array_value($rr5);

for ($i=0; $i<count($ee); $i++) {
  $ee[$i]["data"] = array_merge($rr5, array_diff($ee[$i]["data"], $rr5));
  foreach ($ee[$i]["data"] as $k1 => $v1) {
    if (preg_match("/zText/", $k1)) { unset($ee[$i]["data"][$k1]); }
  }
}

$resultformattedJSON = json_encode($ee, JSON_UNESCAPED_SLASHES);

$pinerror = 0;
$geoout = "[\n";
$geoout .= "      [ 'Lat', 'Long', 'Name' ],\n";

$pincheck = json_decode($resultformattedJSON, true);
foreach ($pincheck as $k1 => $p1) {
  if ($p1["data"]["RespondentInformation"]) {
    if ($p1["data"]["Region"]) { $info = $p1["data"]["RespondentInformation"]["First name"] . " " . $p1["data"]["RespondentInformation"]["Surname"] . " (" . $p1["data"]["Region"] . ")"; } 
    else { $info = $p1["data"]["RespondentInformation"]["First name"] . " " . $p1["data"]["RespondentInformation"]["Surname"] . " (ID: " . $p1["id"] . ")"; }
  } 
  else if ($p1["data"]["Interviewer"]) { $info = "ID: " . $p1["id"] . " (by " . $p1["data"]["Interviewer"] . ")"; } 
  else { $info = "ID: " . $p1["id"]; }

  if (isset($p1["data"]["Geolocation"]["Latitude"]) && isset($p1["data"]["Geolocation"]["Longitude"])) { $geoout .= "      [ " . $p1["data"]["Geolocation"]["Latitude"] . ", " . $p1["data"]["Geolocation"]["Longitude"] . ", '$info' ],\n"; }
  else { $geoout .= ""; }

  if ($p1["data"]["PIN"] != $pinnumber) { $errorlist[] = $p1["id"]; $pinerror = 1; }
}
$geoout .= "    ]";

$terminatedsize = count($errorlist);
if ($terminatedsize > 0) {
  $errorinput = "";
  $pin_error = "<div class=\"alert alert-danger alert-dismissible\" role=\"alert\"><a class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>\n";
  $pin_error .= "  <h4><i class=\"pe-exclamation-triangle pe-fw pe-lg\"></i> Found terminated respondents</h4>\n";
  $pin_error .= "  <p>We detect <strong>$terminatedsize respondents</strong> who were actually terminated but they are incorrectly coded as successful.</p>\n";
  $pin_error .= "  <div class=\"well small\">";
  for ($x = 0; $x < count($errorlist); $x++) { $pin_error .= $errorlist[$x].", "; $errorinput .= "<input type=\"hidden\" name=\"errorids[]\" value=\"$errorlist[$x]\">"; }
  $pin_error .= "  </div>\n";
  $pin_error .= "  <form action=\"$base\" method=\"post\">$errorinput<button type=\"submit\" name=\"m\" value=\"fixerrors\" class=\"btn btn-danger\">Fix this error</button></form>\n";
  $pin_error .= "</div>\n";
  if ($pinerror == 1) { $dcupdate = $pin_error; } else { $dcupdate = ""; }
  $clause = implode(', ', array_fill(0, $terminatedsize, '?'));
  $execinput = array_merge([$_GET['s']], $errorlist);
  $q2A = $db->prepare("UPDATE j_results SET status = 0 WHERE surveyid = ? AND id IN ($clause) ");
  $q2A->execute($execinput);
  $ql2 = $db->prepare("INSERT INTO j_users_logs (surveyid, userid, ip, data, critical) VALUE (:surveyid, :userid, :ip, '".$_SESSION['email']." fixed terminated respondents for $project', '3')");
  $ql2->bindValue(':surveyid', $_GET['s'], PDO::PARAM_INT);
  $ql2->bindValue(':userid', $_SESSION['userid'], PDO::PARAM_INT);
  $ql2->bindValue(':ip', $_SESSION['ip'], PDO::PARAM_STR);
  $ql2->execute();
  $dcupdateme = "";
  $dcupdate .= "<div class=\"alert alert-success alert-dismissible\" role=\"alert\"><a class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>\n";
  $dcupdate .= "  <h4><i class=\"pe-check pe-fw pe-lg\"></i> Problems automatically fixed</h4>\n";
  for ($x = 0; $x < count($errorlist); $x++) { $dcupdateme .= $errorlist[$x].", "; }
  $dcupdate .= "  <p>We have fixed problems with <strong>$terminatedsize respondents</strong> automatically.</p>\n";
  $dcupdate .= "  <div class=\"well small\">$dcupdateme</div>";
  $dcupdate .= "  <p>Automatically reloading this page in a second.</p>\n";
  $dcupdate .= "</div>\n";
  $redirect = $base."&m=2";
  $dcupdate .= "<script type=\"text/javascript\">";
  $dcupdate .= "setTimeout(function () { window.location.href = \"$base\"; }, 10000);";
  $dcupdate .= "</script>";  
}

$dcupdate .= "<hr><br>\n";
$dcupdate .= "<div class=\"row\">\n";
$dcupdate .= "  <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\">\n";
$dcupdate .= "    $dcupdateinsert\n";
$dcupdate .= "  </div>\n";
$dcupdate .= "  <div class=\"col-xs-12 col-sm-9 col-md-9 col-lg-9\" style=\"padding:0\">\n";
$dcupdate .= "    <div id=\"areachart\" style=\"width:100%; height:300px\"></div>\n";
$dcupdate .= "  </div>\n";
$dcupdate .= "</div>\n";
$dcupdate .= "<br>\n";

echo $moving1;
insertMoving($fieldworkstatus);
echo $moving2;
echo $dcupdateinsert1;
echo "  </div>\n";
echo "</div>\n";
insertDCUpdate($dcupdate);
echo $moving3;

function insertText($texttoinsert, $daysoffieldwork, $sample_size, $RDsuccess, $average, $section) {
  if ($section == "1") {
    $$texttoinsert .= "<p>Within a period of <strong>$daysoffieldwork</strong> of fieldwork, we have achieved a total of <strong>n=$RDsuccess</strong> successful interviews <small class=\"grey\">(an average of $average interviews per day)</small>.</p>\n";
  } else if ($section == "2") {
    $$texttoinsert .= "<p>Within a period of <strong>$daysoffieldwork</strong> of fieldwork, there is still no successful interviews to be seen at all.</p>\n";
    $$texttoinsert .= "<p>Please revisit this page again in the next day or so. If this page is not moving for many days, please contact us for support.</p>\n";
  } else if ($section == "3") {
    $$texttoinsert .= "<p>Within a period of <strong>$daysoffieldwork</strong> of fieldwork, we have achieved a total of <strong>n=$RDsuccess</strong> successful interviews <small class=\"grey\">(an average of $average interviews per day)</small>.</p>\n";
  }
  return $$texttoinsert;
}

function insertMoving2($moving2, $text) {
  $moving2 .= "<div class=\"row\">\n";
  $moving2 .= "  <div class=\"col-xs-12 col-sm-8 col-md-8 col-lg-8\">\n";
  $moving2 .= "    <div id=\"orgchart2\"></div>\n";
  $moving2 .= "  </div>\n";
  $moving2 .= "  <div class=\"col-xs-12 col-sm-4 col-md-4 col-lg-4\">\n";
  $moving2 .= "    $text\n";
  $moving2 .= "  </div>\n";
  $moving2 .= "</div>\n";
  return $moving2;
}

function insertMoving($fieldworkstatus) {
  echo "<h4>Status: $fieldworkstatus</h4>\n";
}

function insertDCUpdate($dcupdate) {
  echo $dcupdate;
}

function menu($questionnaire, $design, $result) {
  $menu = "        <div class=\"csv list-group small\">\n";
  $menu .= "          <li class=\"list-group-item list-group-item-info disabled\"><strong><i class=\"pe-info-circle pe-fw\"></i> Menu</strong></li>\n";
  $menu .= "          <a class=\"list-group-item download\"><i class=\"pe-download pe-fw\"></i> Download data of all questions in CSV format</a>\n";
  $menu .= "          <a href=\"$questionnaire\" class=\"list-group-item\"><i class=\"pe-file-o pe-fw\"></i> View the completed questinnaire</a>\n";
  $menu .= "          <a href=\"$design\" class=\"list-group-item\"><i class=\"pe-edit pe-fw\"></i> Questionnaire design</a>\n";
  $menu .= "          <a href=\"$result\" class=\"list-group-item list-group-item-success\"><i class=\"pe-bar-chart pe-fw\"></i> View the real-time survey results</a>\n";
  $menu .= "        </div>\n";
  return $menu;
}

$ff = json_decode($QC, true); 
if ($ff["default"]) { foreach ($ff["default"] as $fA) { foreach ($fA as $fB) { $mn1[] = $fB; } } }
if ($ff["monitor"]) { foreach ($ff["monitor"] as $fC) { foreach ($fC as $fD) { $mn2[] = $fD; } } }
$fff = json_decode($quota, true); 
if ($fff["quota"]) { foreach ($fff["quota"] as $kE => $fE) { if ($kE == "questionname") { foreach ($fE as $fF) { $mn3[] = $fF; } } } }
$MN = array_unique(array_merge($mn1, $mn2, $mn3));
print_r($mn1);
print_r($MN);
foreach ($MN as $k1 => $v1) {
  $vv1 = $v1;
  $AA = checkingQuestion($v1, $ee); 
  $AB[] = getResultHTML($AA, $RDsuccess, $v1);
  $AC[] = getResultJS($AA, $RDsuccess, $v1);
}
// foreach ($mn2 as $k2 => $v2) {
//   $BA = checkingQuestion($v2, $ee); 
//   $BB[] = getResultHTML($BA, $RDsuccess, $v2);
//   $BC[] = getResultJS($BA, $RDsuccess, $v2);
// }
// foreach ($mn3 as $k3 => $v3) {
//   $CA = checkingQuestion($v3, $ee); 
//   $CB[] = getResultHTML($CA, $RDsuccess, $v3);
//   $CC[] = getResultJS($CA, $RDsuccess, $v3);
// }

echo "  </div>\n";
echo "  <div id=\"second\" class=\"tab-pane fade\">\n";

if ($AB) { foreach ($AB as $ab => $abv) { print_r($abv); } }
// if ($BB) { foreach ($BB as $bb => $bbv) { print_r($bbv); } }
// if ($CB) { foreach ($CB as $cb => $cbv) { print_r($cbv); } }

echo "  </div>\n";
echo "  <div id=\"third\" class=\"tab-pane fade\">\n";

if ($status >= 2) { echo "    <h4>Interim data <small>(based on successful interviews)</small></h4>\n"; } else if ($status == 1) { echo "    <h4>Interim data <small>(based on pilot interviews)</small></h4>\n"; }
echo "    <div class=\"alert alert-warning\" role=\"alert\">\n";
echo "      <h4>Important note</h4>\n";
echo "      <p>This data should only be used as a sanitary check rather than using it as result for analysis. Interim data is not a true reflection of the final result and the final result can very different from the interim data depending on several factors such as the sample size, sample composition, etc.</p>\n";
echo "      <p><strong>It is imperative that business decision must not be made based on the interim result</strong>. We hereby take no responsibility on any damages to the business caused by the usage of interim result. You must use it at your own risk.</p>\n";
echo "    </div>\n";
if ($q->rowCount() < $excerptRows) { $outrecords = $q->rowCount(); } else { $outrecords = $excerptRows; }
echo "    <div class=\"row csv\">\n";
echo "      <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n";
echo "      <p>Table below shows the interim data which is <strong>the most recent $outrecords records</strong> of this survey which you can view the initial feedback plus an ability to edit/delete should you need to.</p>\n";
echo "      <p>If you have a very short survey e.g. not more than 10 questions, you can <a class=\"raw\"><i class=\"pe-desktop pe-fw\"></i> click here</a> to view the real time data in a Comma Separated Values (CSV) format.</p>\n";
echo "      <p>Otherwise, we would strongly suggest you download the data file so working with the data will be more effective. The data is self-explanatory so even non-DP person can understand it.</p>\n";
echo "      </div>\n";
// echo "      <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\">\n";
// echo "        <div class=\"list-group small\">\n";
// echo "          <li class=\"list-group-item list-group-item-info\"><strong><i class=\"pe-info-circle pe-fw\"></i> Menu</strong></li>\n";
// echo "          <a class=\"list-group-item download\"><i class=\"pe-download pe-fw\"></i> Download data of all questions in CSV format</a>\n";
// echo "          <a href=\"$questionnaire\" class=\"list-group-item\"><i class=\"pe-file-o pe-fw\"></i> View the completed questinnaire</a>\n";
// echo "          <a href=\"$design\" class=\"list-group-item\"><i class=\"pe-edit pe-fw\"></i> Questionnaire design</a>\n";
// echo "          <a href=\"$result\" class=\"list-group-item active\"><i class=\"pe-line-chart pe-fw\"></i> View the real-time survey results</a>\n";
// echo "        </div>\n";
// echo "      </div>\n";
echo "      <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n";
echo "        <textarea class=\"editing form-control\" readonly></textarea>\n";
echo "        <div class=\"table rendered\"><table class=\"table\"></table></div>\n";
echo "        <span class=\"tablenotice\">You may need to scroll right if there are many columns <i class=\"pe-hand-o-right\"></i></span>\n";
echo "      </div>\n";
echo "    </div>\n";
?>

</div>
<div id="fourth" class="tab-pane fade">
  <h3>Map of interviews</h3>
  <p>This page shows the map of all interviews taken place for this study. Geolocation data was automatically collected by the system.</p>
  <div id="map" style="width: 500px; height: 500px"></div>
  <script type="text/javascript">
    google.charts.load("current", { "packages":["map"], "mapsApiKey": "AIzaSyBMfG84RTce07jumINFyCrr54Y-z4PRNpM" });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      var data = google.visualization.arrayToDataTable( <?php echo $geoout; ?>);
      var map = new google.visualization.Map(document.getElementById('map'));
      map.draw(data, { zoomLevel: 6.5, mapType: 'terrain', showTooltip: true, useMapTypeControl: true, showInfoWindow: true });
    }
  </script>
</div>

<?php if (($_GET["m"] == "2") || ($_GET["m"] == "3") || ($_GET["bpass"] == "1")) { ?>
  <div id="fifth" class="tab-pane fade in active">
<?php } else { ?>
  <div id="fifth" class="tab-pane fade">
<?php } ?>

  <h3>Specific settings</h3>
  <p>This page contains all advanced settings for accurately monitoring this survey such as getting the quota correctly on the sample size and track some questions along with the data collection in order to ensure the work will be done correctly in within the timeline..</p>
  <hr>
  <form id="updatesettings" method="post" action="<?php echo $base; ?>">
    <div class="row">
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <h4>Total sample size</h4>
        <p>The total sample size for this study.</p>
        <table class="table table-hover table-condensed small" id="tabletotalsamplesize">
          <thead>
            <tr>
              <th width="70%"></th>
              <th width="10%"></th>
              <th width="20%"></th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-primary">
              <td width="70%">Total sample</td>
              <td width="30%" colspan="2"><input class="form-control input-sm" type="text" name="totalsample" id="totalsamplesize" value="<?php if ($sample_size) { echo $sample_size; } ?>"></td>
            </tr>
            <tr>
              <td colspan="3">Choose one from below subgroups</td>
            </tr>
            <tr>
              <td colspan="3">
                <div class="form-group">
                  <select class="form-control input-sm" id="selecting">
                    <option name="" value="">--- select one ---</option>
                  </select>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <br>
    <hr>
    <br>
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <h4>Quota by subgroups</h4>
        <p>The sample size broken down by subgroups.</p>
        <p align="center"><button type="button" class="btn btn-warning btn-xs" id="newsample" onClick="newTable();" title="Add a new subgroup"><i class="pe-plus pe-fw"></i>Add new</button></p>
        <div class="row" id="tablesamplewrap"></div>
      </div>
    </div>
    <br>
    <hr>
    <br>
    <div class="row">
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <h4>QC/Edit <small>(for fieldwork)</small></h4>
        <p>Specific questions to monitor for purpose of QC/Edit.</p>
        <table class="table table-hover table-condensed small" id="tableQC">
          <thead>
            <tr class="bg-success">
              <th width="5%"></th>
              <th width="85%">Question name</th>
              <th width="10%"></th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
        <p align="center"><button type="button" class="btn btn-warning btn-xs" id="newkeyquestion1" title="Add a new row"><i class="pe-plus pe-fw"></i>Add new</button></p>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <h4>Data monitoring <small>(for researcher)</small></h4>
        <p>Specific quesrions to monitor for researcher.</p>
        <table class="table table-hover table-condensed small" id="tableMonitor">
          <thead>
            <tr class="bg-success">
              <th width="5%"></th>
              <th width="85%">Question name</th>
              <th width="10%"></th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
        <p align="center"><button type="button" class="btn btn-warning btn-xs" id="newkeyquestion2" title="Add a new row"><i class="pe-plus pe-fw"></i>Add new</button></p>
      </div>
    </div>
    <hr>
    <p class="text-center">
      <input type="hidden" name="surveyid" value="<?php echo $_GET['s']; ?>">
      <button type="submit" class="btn btn-success" name="m" value="updatesettings">Save <i class="pe-check-circle-o"></i></button>
      <button type="reset" class="btn btn-default">Cancel <i class="pe-times-circle-o"></i></button>
    </p>
  </form>
</div>


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
  $('#showalert-m1').html("<div class='alert alert-success'><i class='pe-check pe-fw'></i> You have successfully cleaned the incorrect termination from this survey. You can notice a better matching in number of responses vs. number of respondents.</div><br>").hide();
  $('#showalert-m2').html("<div class='alert alert-success'><i class='pe-check pe-fw'></i> You have successfully updated all the settings for monitoring this survey.</div><br>").hide();
  $('#showalert-m3').html("<div class='alert alert-info'><i class='pe-exclamation-triangle pe-fw'></i> No changes detected. So no change has been made to this survey.</div><br>").hide();
  function getColumn(anArray, columnNumber) { return anArray.map(function(row) { return row[columnNumber]; }); }
  function showRow(e, rowIndex) { showhiddenRow(rowIndex, true); e.preventDefault(); return false; }
  function hideRow(e, rowIndex) { showhiddenRow(rowIndex, false); e.preventDefault(); return false; }
  function showhiddenRow(rowIndex, show) {
    document.getElementById("row" + rowIndex).style.display = show ? "" : "none";
    document.getElementById("rowhide" + rowIndex).style.display = show ? "" : "none";
    document.getElementById("rowshow" + rowIndex).style.display =  show ? "none" : "";
  }
  function sortObject(object) {
    var sortedObj = {}, keys = Object.keys(object);
    keys.sort(function(key1, key2) {
      key1 = key1.toLowerCase(), key2 = key2.toLowerCase();
      if (key1 < key2) { return -1; } else if (key1 > key2) { return 1; } else { return 0; }
    });
    for (var index in keys) {
      var key = keys[index];
      if (typeof object[key] == 'object' && !(object[key] instanceof Array)) { sortedObj[key] = sortObject(object[key]); }
      else { sortedObj[key] = object[key]; }
    }
    return sortedObj;
  }
  function getdatafortable(id) {
    var result = "";
    $.ajax({
      url: api + '/result/datafortable/' + id ,
      dataType: 'json',
      type: 'get',
      cache: false,
      async: false,
      success: function(data) { result = data; }
    });
    return result;
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
    var rows = $.csv.fromObjects(objects, { justArrays: true }); //console.log(rows);
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
      var bbspace =document.createTextNode(" ");
      var bb3 = document.createElement('a'); bb3.innerHTML = '<i class="pe-edit"></i>'; bb3.setAttribute('class', 'btn btn-warning btn-tiny'); bb3.setAttribute('href', "/r.php?s=" + surveyid + "&rd=" + resultid[i] + ""); bb3.setAttribute('title', "Edit this survey");
      var bb1 = document.createElement('button'); bb1.innerHTML = '<i class="pe-trash"></i>'; bb1.setAttribute('class', 'btn btn-danger btn-tiny'); bb1.setAttribute('onclick', "deleteSurveyResult('" + resultid[i] + "')");
      var bb2 = document.createElement('button'); bb2.innerHTML = 'Undelete <i class="pe-undo"></i>'; bb2.setAttribute('class', 'btn btn-warning btn-tiny'); bb2.setAttribute('onclick', "undeleteSurveyResult('" + resultid[i] + "')");
<?php } ?>
      var td2 = document.createElement("td"); td2.setAttribute('colspan', '2'); td2.setAttribute('style', 'border-top-style:none');
      var tr2 = document.createElement("tr"); tr2.setAttribute('id', 'row' + i); tr2.setAttribute('style', 'display:none');
      for (field in rows[i]) {
        var td = document.createElement("td");
        $(td).html(rows[i][field]).addClass("small");
        tr.appendChild(td);
        $(tr).find('td:first-child').append(a1).append(a2);
      }
      tbody.appendChild(tr);
<?php if (($_SESSION["level"] >= "6") || ($owner == 1)) { ?>
      td2.appendChild(bb3);
      td2.appendChild(bbspace);
      td2.appendChild(bb1);
      td2.append(" ");
<?php } ?>
      tr2.appendChild(td2);
      tbody.appendChild(tr2);
      $(tbody).find('td:first-child').css("background", "#eee"); $(tbody).find('td:nth-child(2)').css("background", "#eee");
    }
    table.appendChild(thead);
    table.appendChild(tbody);
  }
  Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) { if (obj.hasOwnProperty(key)) { size++; } }
    return size;
  };
  String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
  };
  $(document).ready(function () {
    var excerptRows = <?php echo $excerptRows; ?>;
    var tt = getdatafortable(surveyid); var ttt = getdatafortable(surveyid);
    for (var k in tt) {
      var o = tt[k];
      moment.locale('en');
      var newsubmitted = moment(o.submitted).fromNow();
      o.submitted = newsubmitted;
    }
    var tt = JSON.stringify(tt); var ttt = JSON.stringify(ttt);
    tt = tt.replaceAll("data", ""); ttt = ttt.replaceAll("data", "");
    tt = tt.replaceAll("Record", ""); ttt = ttt.replaceAll("Record", "");
    tt = tt.replaceAll("upload/", "http://www.siamsquare.org/members/assets/upload/");
    ttt = ttt.replaceAll("upload/", "http://www.siamsquare.org/members/assets/upload/");
    var inArray1 = JSON.parse(tt); var inArray2 = JSON.parse(ttt);
    var outArray1 = []; var outArray2 = [];
    for (var row in inArray1) { outArray1[outArray1.length] = parse_object(inArray1[row]); }
    for (var row in inArray2) { outArray2[outArray2.length] = parse_object(inArray2[row]); }
    var csv1 = "\ufeff"+$.csv.fromObjects(outArray1);
    var csv2 = "\ufeff"+$.csv.fromObjects(outArray2);

    renderCSV(outArray1.slice(0, excerptRows), this.id);
    showCSV(true);
    $(".csv textarea").val(csv1);
    var blob = new Blob([csv2], { type: 'type: "text/csv;charset=UTF-8"' });
    var csvUrl = window.URL.createObjectURL(blob);
    var todayDate = new Date().toISOString().slice(0,10);
    var filename = "<?php echo $project; ?>" + "_data_" + todayDate + '.csv';
    $(".csv a.download").attr({'download': filename, 'href': csvUrl });
    $(".csv textarea").blur(function() { showCSV(true); })
    $(".csv .raw").click(function() {
      showCSV(false);
      $(".csv textarea").focus().select();
      return false;
    })
    $(".csv textarea").click(function() {$(this).focus().select();});
  });

<?php if ($QC) { echo "var QC = $QC;\n"; } else { echo "var QC = $defaultdata_QC;\n"; } ?>

<?php if ($myoptions) { echo "var myoptions = $myoptions;\n"; } else { echo "var myoptions = { \"keep\": [], \"delete\": [], \"shuffle\": [], \"maketotal\": [], \"PSM\": [] };\n"; } ?>
  var counter1 = 0, counter1z = counter1 + 1;
  if (typeof(myoptions.keep) === 'undefined') {
    var currentrow1 = "              <tr>\n" +
      "                <td></td><td colspan=\"4\"><small><strong><br>No data.</strong><br>Click button below to add one.</small></td>\n" +
      "              </tr>\n";
    $('#tablekeep').find('tbody').append(currentrow1);
  } else {
    while (counter1<myoptions.keep.length) {
      var currentrow1 = "              <tr>\n" +
        "                <td valign=\"middle\">" + counter1z + "</td>\n" +
        "                <td valign=\"middle\"><input type=\"text\" class=\"form-control input-sm\" name=\"keep_leader_" + counter1z + "\" value=\"" + myoptions.keep[counter1].leader + "\"></td>\n" +
        "                <td valign=\"middle\"><i class=\"pe-arrow-right pe-lg\"></i></td>\n" +
        "                <td valign=\"middle\"><input type=\"text\" class=\"form-control input-sm\" name=\"keep_follower_" + counter1z + "\" value=\"" + myoptions.keep[counter1].follower + "\"></td>\n" +
        "                <td valign=\"middle\"><i class=\"pe-trash pe-fw red deletethisrow\"></i></td>\n" +
        "              </tr>\n";
      $('#tablekeep').find('tbody').append(currentrow1);
      counter1++;
      counter1z++;
    }
  }
  $('#newbutton1').click(function() {
    var newrow1 = "              <tr>\n" +
      "                <td valign=\"middle\">" + counter1z + "</td>\n" +
      "                <td valign=\"middle\"><input type=\"text\" class=\"form-control input-sm\" placeholder=\"Leading question\" name=\"keep_leader_" + counter1z + "\"></td>\n" +
      "                <td valign=\"middle\"><i class=\"pe-arrow-right pe-lg\"></i></td>\n" +
      "                <td valign=\"middle\"><input type=\"text\" class=\"form-control input-sm\" placeholder=\"Following question\" name=\"keep_follower_" + counter1z + "\"></td>\n" +
      "                <td valign=\"middle\"><i class=\"pe-trash pe-fw red deletethisrow\"></i></td>\n" +
      "              </tr>\n";
    $('#tablekeep').find('tbody').append(newrow1);
    counter1z++;
  });
  $(document.body).delegate(".deletethisrow", "click", function() { $(this).closest("tr").remove(); });

  var counter2 = 0, counter2z = counter2 + 1;
  if (typeof(myoptions.delete) === 'undefined') {
    var currentrow2 = "              <tr>\n" +
      "                <td></td><td colspan=\"4\"><small><strong><br>No data.</strong><br>Click button below to add one.</small></td>\n" +
      "              </tr>\n";
    $('#tabledelete').find('tbody').append(currentrow2);
  } else {
    while (counter2<myoptions.delete.length) {
      var currentrow2 = "              <tr>\n" +
        "                <td valign=\"middle\">" + counter2z + "</td>\n" +
        "                <td valign=\"middle\"><input type=\"text\" class=\"form-control input-sm\" name=\"delete_leader_" + counter2z + "\" value=\"" + myoptions.delete[counter2].leader + "\"></td>\n" +
        "                <td valign=\"middle\"><i class=\"pe-arrow-right pe-lg\"></i></td>\n" +
        "                <td valign=\"middle\"><input type=\"text\" class=\"form-control input-sm\" name=\"delete_follower_" + counter2z + "\" value=\"" + myoptions.delete[counter2].follower + "\"></td>\n" +
        "                <td valign=\"middle\"><i class=\"pe-trash pe-fw red deletethisrow\"></i></td>\n" +
        "              </tr>\n";
      $('#tabledelete').find('tbody').append(currentrow2);
      counter2++;
      counter2z++;
    }
  }
  $('#newbutton2').click(function() {
    var newrow2 = "              <tr>\n" +
      "                <td valign=\"middle\">" + counter2z + "</td>\n" +
      "                <td valign=\"middle\"><input type=\"text\" class=\"form-control input-sm\" placeholder=\"Leading question\" name=\"delete_leader_" + counter2z + "\"></td>\n" +
      "                <td valign=\"middle\"><i class=\"pe-arrow-right pe-lg\"></i></td>\n" +
      "                <td valign=\"middle\"><input type=\"text\" class=\"form-control input-sm\" placeholder=\"Following question\" name=\"delete_follower_" + counter2z + "\"></td>\n" +
      "                <td valign=\"middle\"><i class=\"pe-trash pe-fw red deletethisrow\"></i></td>\n" +
      "              </tr>\n";
    $('#tabledelete').find('tbody').append(newrow2);
    counter2z++;
  });
  $(document.body).delegate(".deletethisrow", "click", function() { $(this).closest("tr").remove(); });


  var counter0 = 0; var counter0z = counter0 + 1; var counter0zz = counter0z + 1;
  if (typeof(QC.default) === 'undefined') {
    var row1 = "              <tr>\n" +
      "              </tr>\n";
    $('#tableQC').find('tbody').append(row1);
  } else {
    while (counter0 < QC.default.questionname.length) {
      var row1 = "              <tr>\n" +
        "                <td valign=\"middle\">" + counter0z + "</td>\n" +
        "                <td valign=\"middle\"><input type=\"text\" class=\"form-control input-sm\" placeholder=\"Question name\" name=\"default_questionname_" + counter0z + "\" value=\"" + QC.default.questionname[counter0] + "\"></td>\n" +
        "                <td valign=\"middle\"><i class=\"pe-trash pe-fw red deletethisrow\" title=\"Delete this row\"></i></td>\n" +
        "              </tr>\n";
        $('#tableQC').find('tbody').append(row1);
      counter0++;
      counter0z++;
    }
  }
  $('#newkeyquestion1').click(function() {
    var newrow1 = "              <tr>\n" +
      "                <td valign=\"middle\">" + counter0z + "</td>\n" +
      "                <td valign=\"middle\"><input type=\"text\" class=\"form-control input-sm\" placeholder=\"Question name\" name=\"default_questionname_" + counter0z + "\"></td>\n" +
      "                <td valign=\"middle\"><i class=\"pe-trash pe-fw red deletethisrow\" title=\"Delete this row\"></i></td>\n" +
      "              </tr>\n";
    $('#tableQC').find('tbody').append(newrow1);
    counter0z++;
  });
  $(document.body).delegate(".deletethisrow", "click", function() { $(this).closest("tr").remove(); });

  var counter1 = 0; var counter1z = counter1 + 1;
  // console.log(QC.monitor);
  if (typeof(QC.monitor) === 'undefined') {
    var row2 = "              <tr>\n" +
      "              </tr>\n";
    $('#tableMonitor').find('tbody').append(row2);
  } else {
    while (counter1 < QC.monitor.questionname.length) {
      var row2 = "              <tr>\n" +
        "                <td valign=\"middle\">" + counter1z + "</td>\n" +
        "                <td valign=\"middle\"><input type=\"text\" class=\"form-control input-sm\" placeholder=\"Question name\" name=\"monitor_questionname_" + counter1z + "\" value=\"" + QC.monitor.questionname[counter1] + "\"></td>\n" +
        "                <td valign=\"middle\"><i class=\"pe-trash pe-fw red deletethisrow\" title=\"Delete this row\"></i></td>\n" +
        "              </tr>\n";
      $('#tableMonitor').find('tbody').append(row2);
      counter1++;
      counter1z++;
    }
  }
  $('#newkeyquestion2').click(function() {
    var newrow2 = "              <tr>\n" +
      "                <td valign=\"middle\">" + counter1z + "</td>\n" +
      "                <td valign=\"middle\"><input type=\"text\" class=\"form-control input-sm\" placeholder=\"Question name\" name=\"monitor_questionname_" + counter1z + "\"></td>\n" +
      "                <td valign=\"middle\"><i class=\"pe-trash pe-fw red deletethisrow\" title=\"Delete this row\"></i></td>\n" +
      "              </tr>\n";
    $('#tableMonitor').find('tbody').append(newrow2);
    counter1z++;
  });
  $(document.body).delegate(".deletethisrow", "click", function() { $(this).closest("tr").remove(); });


<?php if ($quota) { echo "var quota = $quota;\n"; } else { echo "var quota = $defaultdata_quota;\n"; } ?>

  var counter2a = 0, counter2b = 0;
  var checkcombinedtotalsample = $('#totalsamplesize').val();

  if (typeof(quota.subgroup) === 'undefined') {
    var row3 = "              <tr>\n" +
      "              </tr>\n";
    $('#tablesamplewrap').find('tbody').append(row3);
  } else {
    var i; var j;
    for (i=0; i<quota.subgroup.length; i++) {
      var subTotal= 0, combinedtotalsample = 0; combinedtotalsample[i] = 0;
      console.log(quota.subgroup[i].code);
      listTable(i, quota.subgroup[i].code);
      for (j=0; j<quota.subgroup[i].details.length; j++) {
        listRow(parseInt(j)+1, i, quota.subgroup[i].details[j].subgroup, quota.subgroup[i].details[j].samplesize);
        combinedtotalsample += parseInt(quota.subgroup[i].details[j].samplesize);
      }
      suggestedTotalsample(i, quota.subgroup[i].code, combinedtotalsample);
      addRow(parseInt(j)+2, i);
    }
  }
  function suggestedTotalsample(l, m, n) {
    var currenttotalsamplesize = $('#totalsamplesize').val();
    var newrow3FB = "                <option name=\"" + m + " (n=" + n + ")\" value=\"" + n + "\" selected>" + m + " (n=" + n + ")</option>\n";
    var newrow3FC = "                <option name=\"" + m + " (n=" + n + ")\" value=\"" + n + "\">" + m + " (n=" + n + ")</option>\n";
    if (n == currenttotalsamplesize) { $('#selecting').append(newrow3FB); }
    else { $('#selecting').append(newrow3FC); }
  }
  $("#selecting").change(function() {
    var checking = $("#selecting").val();
    if (checking != "") { $("#totalsamplesize").val($(this).val()); }
  }).change();
  function listTable(m, n) {
    var newrow3A = "        <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n" +
      "          <table class=\"table table-hover table-condensed small\" id=\"tablesample" + m + "\">\n" +
      "            <thead>\n" +
      "              <tr class=\"bg-success\">\n" +
      "                <th width=\"5%\"><a class=\"btn btn-xs\" id=\"mynewrow" + m + "\" title=\"Add a new subgroup aspects\"><i class=\"pe-plus-circle pe-lg green\"></i></a></th>\n" +
      "                <th width=\"85%\" colspan=\"2\"><input type=\"text\" class=\"form-control input-sm\" placeholder=\"Subgroup/Question name\" name=\"quota_" + m + "_code_1\" value=\"" + n + "\"></th>\n" +
      "                <th width=\"10%\"><i class=\"pe-trash pe-fw red deletethistable\" title=\"Delete this table\"></i></th>\n" +
      "                <th width=\"10%\"></th>\n" +
      "              </tr>\n" +
      "            </thead>\n" +
      "            <tbody>\n" +
      "            </tbody>\n" +
      "          </table>\n" +
      "        </div>\n";
    $('#tablesamplewrap').append(newrow3A);
  }
  function listRow(l, m, n, o) {
    var newrow3B = "              <tr>\n" +
      "                <td width=\"5%\" valign=\"middle\">" + l + "</td>\n" +
      "                <td width=\"85%\" valign=\"middle\"><input type=\"text\" class=\"form-control input-sm\" placeholder=\"Subgroup\" name=\"quota_" + m + "_subgroup_" + l + "\" value=\"" + n + "\"></td>\n" +
      "                <td width=\"10%\" valign=\"middle\"><input type=\"text\" class=\"form-control input-sm\" placeholder=\"n=\" name=\"quota_" + m + "_samplesize_" + l + "\" value=\"" + o + "\"></td>\n" +
      "                <td width=\"10%\" valign=\"middle\"><i class=\"pe-trash pe-fw red deletethisrow\" title=\"Delete this row\"></i></td>\n" +
      "              </tr>\n";
    $('#tablesamplewrap').find('#tablesample'+m).find('tbody').append(newrow3B);
  }
  function newTable() {
    var lastid = $('#tablesamplewrap table:last').attr('id');
    if (lastid) { var m = parseInt(lastid.substring(11))+1; }
    else { var m = 0; }
    var l = 1;
    var newrow3A = "        <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n" +
      "          <table class=\"table table-hover table-condensed small\" id=\"tablesample" + m + "\">\n" +
      "            <thead>\n" +
      "              <tr class=\"bg-success\">\n" +
      "                <th width=\"5%\"></th>\n" +
      "                <th width=\"85%\" colspan=\"2\"><input type=\"text\" class=\"form-control input-sm\" placeholder=\"Question name\" name=\"quota_" + m + "_code_1\"></th>\n" +
      "                <th width=\"10%\"><i class=\"pe-trash pe-fw red deletethistable\" title=\"Delete this table\"></i></th>\n" +
      "                <th width=\"10%\"></th>\n" +
      "              </tr>\n" +
      "            </thead>\n" +
      "            <tbody>\n" +
      "              <tr>\n" +
      "                <td width=\"5%\" valign=\"middle\">" + l + "</td>\n" +
      "                <td width=\"85%\" valign=\"middle\"><input type=\"text\" class=\"form-control input-sm\" placeholder=\"Subgroup\" name=\"quota_" + m + "_subgroup_" + l + "\"></td>\n" +
      "                <td width=\"10%\" valign=\"middle\"><input type=\"text\" class=\"form-control input-sm\" placeholder=\"n=\" name=\"quota_" + m + "_samplesize_" + l + "\"></td>\n" +
      "                <td width=\"10%\" valign=\"middle\"><i class=\"pe-trash pe-fw red deletethisrow\" title=\"Delete this row\"></i></td>\n" +
      "              </tr>\n";
      "            </tbody>\n" +
      "          </table>\n" +
      "        </div>\n";
    $('#tablesamplewrap').append(newrow3A);
  }
  function addRow(l, m) {
    var newrow3C = "              <tr id=\"insert" + m + "\" style=\"display:none\">\n" +
      "                <td width=\"5%\" valign=\"middle\">Add</td>\n" +
      "                <td width=\"85%\" valign=\"middle\"><input type=\"text\" class=\"form-control input-sm\" placeholder=\"Subgroup\" name=\"quota_" + m + "_subgroup_" + l + "\"></td>\n" +
      "                <td width=\"10%\" valign=\"middle\"><input type=\"text\" class=\"form-control input-sm\" placeholder=\"n=\" name=\"quota_" + m + "_samplesize_" + l + "\"></td>\n" +
      "                <td width=\"10%\" valign=\"middle\"><i class=\"pe-trash pe-fw red deletethisrow\" title=\"Delete this row\"></i></td>\n" +
      "              </tr>\n";
    $('#tablesample'+m).find('tbody').append(newrow3C);
    $('#mynewrow'+m).click(function() { $('#insert'+m).toggle('slow'); });
  }
  $(document.body).delegate(".deletethistable", "click", function() { $(this).closest("table").remove(); });
  $(document.body).delegate(".deletethisrow", "click", function() { $(this).closest("tr").remove(); });

  google.charts.load('current', {'packages': ['corechart', 'orgchart', 'gauge', 'table'] });
  if (private) {
    google.charts.setOnLoadCallback(drawOrgChart1);
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
    google.charts.setOnLoadCallback(drawGaugeChart1);
    function drawGaugeChart1() {
      var chart = new google.visualization.Gauge(document.getElementById('gauge1'));
      var dataTable = new google.visualization.DataTable();
      dataTable.addColumn('number', 'Strike rate');
      dataTable.addRows(1);
      dataTable.setCell(0, 0, <?php echo $strikerate; ?>);
      var options = { width: 120, height: 400, redFrom: 0, redTo: 10, yellowFrom:10, yellowTo: 30, greenFrom:30, greenTo: 100, minorTicks: 5 };
      chart.draw(dataTable, options);
    }
    google.charts.setOnLoadCallback(drawGaugeChart2);
    function drawGaugeChart2() {
      var chart = new google.visualization.Gauge(document.getElementById('gauge2'));
      var dataTable = new google.visualization.DataTable();
      dataTable.addColumn('number', 'Success rate');
      dataTable.addRows(1);
      dataTable.setCell(0, 0, <?php echo $successrate; ?>);
      var options = { width: 120, height: 400, redFrom: 0, redTo: 10, yellowFrom:10, yellowTo: 30, greenFrom:30, greenTo: 100, minorTicks: 5 };
      chart.draw(dataTable, options);
    }
  } else {
    google.charts.setOnLoadCallback(drawOrgChart2);
    function drawOrgChart2() {
      var chart = new google.visualization.OrgChart(document.getElementById('orgchart2'));
      var dataTable = new google.visualization.DataTable();
      dataTable.addColumn('string', 'Status');
      dataTable.addColumn('string', 'Sample');
      dataTable.addColumn('string', 'ToolTip');
      dataTable.addRows([
        <?php echo "[{ v:'Total', f:'<div class=\"small\">Total</div><div style=\"font-size:1.5rem\">n=".$RDall."</div>' }, '', 'Total interviews so far' ],\n"; ?>
        <?php echo "[{ v:'Pilot', f:'<div class=\"small\">Pilot</div><div style=\"font-size:1.5rem\">n=".$RDpilot."</div>$RDpilot_bar' }, 'Total', 'Pilot interviews' ],\n"; ?>
        <?php echo "[{ v:'Deleted', f:'<div class=\"small\">Deleted</div><div style=\"font-size:1.5rem\">n=".$RDdeleted."</div>$RDdeleted_bar' }, 'Total', 'Deleted interviews' ],\n"; ?>
        <?php echo "[{ v:'Terminated', f:'<div class=\"small\">Terminated</div><div style=\"font-size:1.5rem\">n=".$RDterminated."</div>$RDterminated_bar' }, 'Total', 'Terminated interviews' ],\n"; ?>
        <?php echo "[{ v:'Successful', f:'<div class=\"small\">Successful</div><div style=\"font-size:1.5rem\">n=".$RDsuccess."</div>$RDsuccess_bar' }, 'Total', 'Successful interviews' ],\n"; ?>
      ]);
      dataTable.setRowProperty(4, 'style', 'background: #d9edf7; border: 3px solid #31708f');
      var options = { allowHtml: true, nodeClass: "nodeClass", selectedNodeClass: "selectedNodeClass", size: "large" };
      chart.draw(dataTable, options);
    }
  }
  google.charts.setOnLoadCallback(drawAreaChart);
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
          slantedText: true,
          slantedTextAngle: 45
        },
        vAxis: {
          gridlines: {color: '#E0E0E0' },
          textStyle: { color: "#666666", fontName: "Arial", fontSize: 9, bold: false, italic: false },
          minValue: 0
        },
        pointSize: 5,
        chartArea: { top: 40, bottom: 40, left: 40, right: 40, width: '100%', height: '100%' }
      };
    }
    else {
      var options = {
        title: 'Sample size achieved by date (n=<?php echo $SSCOUNT1; ?>)',
        legend: { position: 'top', alignment: 'end' },
        areaOpacity: 0.1,
        hAxis: {
          gridlines: { color: '#E0E0E0' },
          textStyle: { color: "#666666", fontName: "Arial", fontSize: 10, bold: false, italic: false },
          slantedText: true,
          slantedTextAngle: 45
        },
        vAxis: {
          gridlines: {color: '#E0E0E0' },
          textStyle: { color: "#666666", fontName: "Arial", fontSize: 9, bold: false, italic: false },
          minValue: 0
        },
        pointSize: 5,
        chartArea: { top: 40, bottom: 40, left: 40, right: 40, width: '100%', height: '100%' }
      };
    }
    chart.draw(dataTable, options);
  }

<?php

if ($AC) { foreach ($AC as $ac => $acv) { print_r($acv["0"]); } }
// if ($BC) { foreach ($BC as $bc => $bcv) { print_r($bcv["0"]); } }
// if ($CC) { foreach ($CC as $cc => $ccv) { print_r($ccv["0"]); } }

?>

  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    if ($(e.target).attr('id') == 'first-tab-trigger') { drawOrgChart1(); drawOrgChart2(); drawGaugeChart1(); drawGaugeChart2(); drawAreaChart(); }
    if ($(e.target).attr('id') == 'second-tab-trigger') {
      <?php if ($AC) { foreach ($AC as $ac => $acv) { print_r($acv["1"]); } } ?>
    }
    if ($(e.target).attr('id') == 'third-tab-trigger') {
      <?php //if ($BC) { foreach ($BC as $bc => $bcv) { print_r($bcv["1"]); } } ?>
      <?php //if ($CC) { foreach ($CC as $cc => $ccv) { print_r($ccv["1"]); } } ?>
      <?php //if ($A5C["1"]) { print_r($A5C["1"]); } ?>
      <?php //if ($A6C["1"]) { print_r($A6C["1"]); } ?>
      <?php //if ($A7C["1"]) { print_r($A7C["1"]); } ?>
      <?php //if ($A8C["1"]) { print_r($A8C["1"]); } ?>
      <?php //if ($A9C["1"]) { print_r($A9C["1"]); } ?>
      <?php //if ($A10C["1"]) { print_r($A10C["1"]); } ?>
      <?php //if ($A11C["1"]) { print_r($A11C["1"]); } ?>    
    }
  })

  $("#missing").find('th:first-child').next().css("background", "#555");
  $("#missing").find('td:first-child').next().css("background", "#eee");


<?php if (($_GET['m'] == "1") || ($m == 1)) { ?>
  $('#showalert-m1').show();
  window.setTimeout(function() { $("#showalert-m1").slideUp(500, function() { $("#showalert-m1").hide(); }); }, 8000);
<?php } else if ($_GET['m'] == "2") { ?>
  $('#showalert-m2').show();
  window.setTimeout(function() { $("#showalert-m2").slideUp(500, function() { $("#showalert-m2").hide(); }); }, 8000);
<?php } else if ($_GET['m'] == "3") { ?>
  $('#showalert-m3').show();
  window.setTimeout(function() { $("#showalert-m3").slideUp(500, function() { $("#showalert-m3").hide(); }); }, 8000);
<?php } ?>

</script>

<br>

<?php backButton("/admin/?w=surveys", "Back to the main page", "danger"); ?>

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
