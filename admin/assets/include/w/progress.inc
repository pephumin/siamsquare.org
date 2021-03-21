<?php

$excerptRows = "50";
// $c_target = 300;
$base = "/admin/?w=progress&s=".$_GET['s'];
$result = "/admin/?w=result&s=".$_GET['s'];
$respondent = "/admin/?w=respondents&s=".$_GET['s'];

$today['year'] = date("Y"); $today['month'] = date("m"); $today['day'] = date("d");
if ($today['month'] == "01") { $today['month'] = "12"; $today['year'] = $today['year']-1; } else { $today['month'] = $today['month']-1; }
// $timelinedata = "[ \n"; $colordata = "[ ";

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
  $options = $row->options;
  $monitor = $row->QC;
  $rr1 = json_decode($row->data, true);
  $rr2 = $rr1['pages'];
  if ($row->pin) { $pinnumber = $row->pin; }
  if ($row->userid == $_SESSION['userid']) { $owner = 1; } else { $owner = 0; }
  if ($row->created) { $L0 = date_parse_from_format("Y-m-d H:i:s", $row->created); if ($L0['month'] == "01") { $L0['month'] = "12"; $L0['year'] = $L0['year']-1; } else { $L0['month'] = $L0['month']-1; } $created = ago($row->created); $LLL0 = $row->created; } else { $LL0 = "-"; }
  if ($row->L1) { $L1 = date_parse_from_format("Y-m-d H:i:s", $row->L1); if ($L1['month'] == "01") { $L1['month'] = "12"; $L1['year'] = $L1['year']-1; } else { $L1['month'] = $L1['month']-1; } $LL1 = ago($row->L1); $LLL1 = $row->L1; } else { $LL1 = "-"; }
  if ($row->L2) { $L2 = date_parse_from_format("Y-m-d H:i:s", $row->L2); if ($L2['month'] == "01") { $L2['month'] = "12"; $L2['year'] = $L2['year']-1; } else { $L2['month'] = $L2['month']-1; } $LL2 = ago($row->L2); $LLL2 = $row->L2; } else { $LL2 = "-"; }
  if ($row->L3) { $L3 = date_parse_from_format("Y-m-d H:i:s", $row->L3); if ($L3['month'] == "01") { $L3['month'] = "12"; $L3['year'] = $L3['year']-1; } else { $L3['month'] = $L3['month']-1; } $LL3 = ago($row->L3); $LLL3 = $row->L3; } else { $LL3 = "-"; }
  // if ($status == 1) {
  //   $timelinedata .= "[ '".$project."', 'Set-up', new Date(".$L0['year'].", ".$L0['month'].", ".$L0['day']."), new Date(".$today['year'].", ".$today['month'].", ".$today['day'].") ], \n"; $colordata .= "'#B3FFB3', ";
  // } else if ($status == 2) {
  //   $timelinedata .= "[ '".$project."', 'Set-up', new Date(".$L0['year'].", ".$L0['month'].", ".$L0['day']."), new Date(".$L1['year'].", ".$L1['month'].", ".$L1['day'].") ], \n"; $colordata .= "'#B3FFB3', ";
  //   $timelinedata .= "[ '".$project."', 'Data-collection', new Date(".$L1['year'].", ".$L1['month'].", ".$L1['day']."), new Date(".$today['year'].", ".$today['month'].", ".$today['day'].") ], \n"; $colordata .= "'#00E600', ";
  // } else if ($status == 3) {
  //   $timelinedata .= "[ '".$project."', 'Set-up', new Date(".$L0['year'].", ".$L0['month'].", ".$L0['day']."), new Date(".$L1['year'].", ".$L1['month'].", ".$L1['day'].") ], \n"; $colordata .= "'#B3FFB3', ";
  //   $timelinedata .= "[ '".$project."', 'Data-collection', new Date(".$L1['year'].", ".$L1['month'].", ".$L1['day']."), new Date(".$L2['year'].", ".$L2['month'].", ".$L2['day'].") ], \n"; $colordata .= "'#00E600', ";
  //   $timelinedata .= "[ '".$project."', 'Completed', new Date(".$L2['year'].", ".$L2['month'].", ".$L2['day']."), new Date(".$today['year'].", ".$today['month'].", ".$today['day'].") ], \n"; $colordata .= "'#009900', ";
  // } else if ($status == 4) {
  //   $timelinedata .= "[ '".$project."', 'Set-up', new Date(".$L0['year'].", ".$L0['month'].", ".$L0['day']."), new Date(".$L1['year'].", ".$L1['month'].", ".$L1['day'].") ], \n"; $colordata .= "'#B3FFB3', ";
  //   $timelinedata .= "[ '".$project."', 'Data-collection', new Date(".$L1['year'].", ".$L1['month'].", ".$L1['day']."), new Date(".$L2['year'].", ".$L2['month'].", ".$L2['day'].") ], \n"; $colordata .= "'#00E600', ";
  //   $timelinedata .= "[ '".$project."', 'Completed', new Date(".$L2['year'].", ".$L2['month'].", ".$L2['day']."), new Date(".$L3['year'].", ".$L3['month'].", ".$L3['day'].") ], \n"; $colordata .= "'#009900', ";
  //   $timelinedata .= "[ '".$project."', 'Archived', new Date(".$L3['year'].", ".$L3['month'].", ".$L3['day']."), new Date(".$today['year'].", ".$today['month'].", ".$today['day'].") ], \n"; $colordata .= "'#AAAAAA', ";
  // }
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
    $q->bindValue(':userid', $_SESSION["userid"], PDO::PARAM_INT);
    $q->bindValue(':ip', $_SESSION["ip"], PDO::PARAM_INT);
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
  $ql2->bindValue(':userid', $_SESSION['userid'], PDO::PARAM_INT);
  $ql2->bindValue(':ip', $_SESSION['ip'], PDO::PARAM_STR);
  $ql2->execute();
  $redirect = $base."&m=1";
  header("location: $redirect");
  exit;
} else if (($_POST['m'] == "updatesettings") || isset($_POST["totalsamplebysubgroup"])) {
  // print_r("<pre>");
  // print_r($_POST);
  // print_r("</pre>");
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
      if ($x == "QC") { $qq2[$y][] = $_POST[$key]; }
      else if ($x == "monitor") { $qq3[$y][] = $_POST[$key]; }
    }
  }
  for ($i=0; $i<count($qq1); $i++) {
    $c1 = array_map(function ($m, $n) { return array('subgroup' => $m, 'samplesize' => $n); }, $qq1[$i]["subgroup"], $qq1[$i]["samplesize"]);
    $qq1[$i]["details"] = $c1;
    unset($qq1[$i]["subgroup"]);
    unset($qq1[$i]["samplesize"]);
  }
  $newqq2 = array_map(function ($input) { return array('questionname' => $input); }, $qq2["questionname"]);
  $newqq3 = array_map(function ($input) { return array('questionname' => $input); }, $qq3["questionname"]);
  $all = [];
  array_push($all, $qq1); $all["quota"] = $all["0"]; unset($all["0"]);
  array_push($all, $newqq2); $all["QC"] = $all["1"]; unset($all["1"]);
  array_push($all, $newqq3); $all["monitor"] = $all["2"]; unset($all["2"]);
  $all = array_remove_empty($all);
  $json = json_encode($all, JSON_PRETTY_PRINT);
  $query = "QC = :QC, ";
  if (($addtype == "1") || ($addtype == "2")) { $query = $query.$add; }
  $query = substr($query, 0, -2);
  $qG = $db->prepare("UPDATE j_projects SET ".$query." WHERE id = :surveyid");
  $qG->bindValue(':surveyid', $_POST["surveyid"], PDO::PARAM_INT);
  $qG->bindValue(':QC', $json, PDO::PARAM_STR);
  if ($addtype == "1") { $qG->bindValue(':sample', $_POST["totalsample"], PDO::PARAM_INT); }
  else if ($addtype == "2") { $qG->bindValue(':sample', $_POST["totalsamplebysubgroup"], PDO::PARAM_INT); }
  // print_r($qG);
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
  $fieldworkstatus = "<font color=\"orange\">Still at the set-up stage</font>";
  $dcupdateinsert .= "    <div class=\"bg-primary text-center\" style=\"padding: 10px; border: 2px solid black;\"><p style=\"margin-bottom:10px !important\" class=\"small\">Setup ($setuptiming)</p><h4 style=\"margin-bottom:10px !important\"><strong>$daysofsetup</strong></h4></div>\n";
} else if ($status == "2") {
  $stage = "2";
  $a = date_parse_from_format("Y-m-d H:i:s", $LLL0); $ac = $a['year']."-".$a['month']."-".$a['day']; $begindate0 = $a['day']." ".fullmonth($a['month'], "short");
  $b = date_parse_from_format("Y-m-d H:i:s", $LLL1); $bc = $b['year']."-".$b['month']."-".$b['day']; $begindate1 = $b['day']." ".fullmonth($b['month'], "short");
  $from0 = strtotime($ac); $from1 = strtotime($bc); $today = time();
  $difference1 = $from1-$from0; $dd1 = floor($difference1/86400); if ($dd1 == "1") { $daysofsetup = "$dd1 day"; } else { $daysofsetup = "$dd1 days"; }
  $difference2 = $today-$from1; $dd2 = floor($difference2/86400); if ($dd2 == "1") { $daysoffieldwork = "$dd2 day"; } else { $daysoffieldwork = "$dd2 days"; }
  $setuptiming = "$begindate0 to $begindate1";
  $fieldworktiming = "since $begindate1";
  $fieldworkstatus = "<font color=\"green\">Fieldwork is still on-going</font>";
  $dcupdateinsert .= "    <div class=\"bg-info text-center\" style=\"padding: 10px; border: 2px solid black;\"><p style=\"margin-bottom:10px !important\" class=\"small\">Setup ($setuptiming)</p><h4 style=\"margin-bottom:10px !important\"><strong>$daysofsetup</strong></h4></div>\n";
  $dcupdateinsert .= "    <br>\n";
  $dcupdateinsert .= "    <div class=\"bg-primary text-center\" style=\"padding: 10px; border: 2px solid black;\"><p style=\"margin-bottom:10px !important\" class=\"small\">Fieldwork ($fieldworktiming)</p><h4 style=\"margin-bottom:10px !important\"><strong>$daysoffieldwork</strong></h4></div>\n";
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
  $fieldworkstatus = "<font color=\"blue\">Fieldwork was completed</font>";
  $dcupdateinsert .= "    <div class=\"bg-info text-center\" style=\"padding: 10px; border: 2px solid black;\"><p style=\"margin-bottom:10px !important\" class=\"small\">Setup ($setuptiming)</p><h4 style=\"margin-bottom:10px !important\"><strong>$daysofsetup</strong></h4></div>\n";
  $dcupdateinsert .= "    <br>\n";
  $dcupdateinsert .= "    <div class=\"bg-info text-center\" style=\"padding: 10px; border: 2px solid black;\"><p style=\"margin-bottom:10px !important\" class=\"small\">Fieldwork ($fieldworktiming)</p><h4 style=\"margin-bottom:10px !important\"><strong>$daysoffieldwork</strong></h4></div>\n";
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
echo "<h3>Project $project</h3>\n";
echo "<p>Click these tabs below to choose on what you would like to view. And the last tab is where you can set specific questions which are only unique for this study.</p>";

if (($_GET['m'] == "1") || ($m == 1)) { echo "<div id=\"showalert-m1\"></div>\n"; }
else if ($_GET['m'] == "2") { echo "<div id=\"showalert-m2\"></div>\n"; }
else if ($_GET['m'] == "3"){ echo "<div id=\"showalert-m3\"></div>\n"; }
echo "<div id=\"showalert-delete\"></div>\n";
echo "<br>\n";

?>

<nav>
  <ul class="nav nav-tabs">
<?php if (($_GET["m"] == "2") || ($_GET["m"] == "3") || ($_GET["bpass"] == "1")) { ?>
    <li><a href="#first" data-toggle="tab" id="first-tab-trigger"><i class="pe-flask pe-fw"></i> Progress</a></li>
    <li><a href="#second" data-toggle="tab" id="second-tab-trigger"><i class="pe-check pe-fw"></i> Quality control</a></li>
    <li><a href="#third" data-toggle="tab" id="third-tab-trigger"><i class="pe-desktop pe-fw"></i> Monitor</a></li>
    <li><a href="#fourth" data-toggle="tab" id="fourth-tab-trigger"><i class="pe-table pe-fw"></i> Interim data</a></li>
    <li><a href="#fifth" data-toggle="tab" id="fourth-tab-trigger"><i class="pe-map-marker pe-fw"></i> Interview Map</a></li>
    <li class="active"><a href="#sixth" data-toggle="tab" id="sixth-tab-trigger"><i class="pe-wrench pe-fw"></i> Settings</a></li>
<?php } else { ?>
    <li class="active"><a href="#first" data-toggle="tab" id="first-tab-trigger"><i class="pe-flask pe-fw"></i> Progress</a></li>
    <li><a href="#second" data-toggle="tab" id="second-tab-trigger"><i class="pe-check pe-fw"></i> Quality control</a></li>
    <li><a href="#third" data-toggle="tab" id="third-tab-trigger"><i class="pe-desktop pe-fw"></i> Monitor</a></li>
    <li><a href="#fourth" data-toggle="tab" id="fourth-tab-trigger"><i class="pe-table pe-fw"></i> Interim data</a></li>
    <li><a href="#fifth" data-toggle="tab" id="fifth-tab-trigger"><i class="pe-map-marker pe-fw"></i> InterviewMap</a></li>
    <li><a href="#sixth" data-toggle="tab" id="sixth-tab-trigger"><i class="pe-wrench pe-fw"></i> Settings</a></li>
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
// $areacount = 0;
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
    // $areacount++;
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
}

// ----------------- RESULT ----------------------

// data for showing the real-time results
if ($status >= 2) { $sql3 = "SELECT * FROM j_results WHERE surveyid = :surveyid AND status = 2 ORDER BY submitted DESC"; }
else if ($status == 1) { $sql3 = "SELECT * FROM j_results WHERE surveyid = :surveyid AND status = 1 ORDER BY submitted DESC"; }
$q = $db->prepare($sql3);
$q->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
$q->execute(); // print_r($q->rowCount());
$last = 0; $first = ($q->rowCount()-1);
while ($row = $q->fetchAll(PDO::FETCH_ASSOC)) {
  $ee = $row;
  for ($i=0; $i<count($ee); $i++) {
    $removeKeys = array('rd', 'email', 'ip', 'surveyid', 'status', 'interviewer');
    foreach($removeKeys as $key) { unset($ee[$i][$key]); }
    $ee[$i]['data'] = json_decode($ee[$i]['data'], true);
  }
}
// ksort($ee);
// $datafortable = json_encode($ee);
// print_r($ee);

// ----------------- COMBINING ----------------------
// print_r($rr4);
for ($i=0; $i<count($rr4); $i++) { $rr5[] = $rr4[$i]["name"]; }

// print_r($rr5);

$rr5 = array_flip($rr5);
foreach ($rr5 as $key => $value) {
  if (preg_match("/^+Text$/", $key)) { unset($rr5[$key]); }
}
remove_array_value($rr5);

for ($i=0; $i<count($ee); $i++) {
  $ee[$i]["data"] = array_merge($rr5, array_diff($ee[$i]["data"], $rr5));
  foreach ($ee[$i]["data"] as $k1 => $v1) {
    if (preg_match("/zText/", $k1)) { unset($ee[$i]["data"][$k1]); }
  }
}

// ksort($ee);

// print_r($ee);
$resultformattedJSON = json_encode($ee);

// pin error, hence "those who are terminated"
$pinerror = 0;
$geoout = "[\n";
$geoout .= "      [ 'Lat', 'Long', 'Name' ],\n";

$pincheck = json_decode($resultformattedJSON, true);
// print_r($pincheck);
foreach ($pincheck as $k1 => $p1) {
  // print_r($p1["Interviewer"]);
  if (($p1["data"]["RespondentInfo1"]) || ($p1["data"]["RespondentInfo"])) {
    if ($p1["data"]["Region"]) {
      $info = $p1["data"]["RespondentInfo1"]["First name"] . " " . $p1["data"]["RespondentInfo1"]["Surname"] . " (" . $p1["data"]["Region"] . ")";
    } else {
      $info = $p1["data"]["RespondentInfo1"]["First name"] . " " . $p1["data"]["RespondentInfo1"]["Surname"] . " (ID: " . $p1["id"] . ")";
    }
  } else if ($p1["data"]["Interviewer"]) {
    $info = "ID: " . $p1["id"] . " (by " . $p1["Interviewer"] . ")";
  } else {
    $info = "ID: " . $p1["id"];
  }
  if (isset($p1["data"]["Geolocation"]["Latitude"]) && isset($p1["data"]["Geolocation"]["Longitude"])) {
    $geoout .= "      [ " . $p1["data"]["Geolocation"]["Latitude"] . ", " . $p1["data"]["Geolocation"]["Longitude"] . ", '$info' ],\n";
  }
  if ($p1["data"]["PIN"] != $pinnumber) {
    $errorlist[] = $p1["id"]; $pinerror = 1;
  }
}
$geoout .= "    ]";
// print_r($geoout);
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
  $execinput = array_merge([$_GET['s']], $errorlist); //print_r($execinput);
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
  
  // header('Refresh: 10; URL='.$redirect);
  // header("location: $redirect");
  // exit;
}

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

if ($sample_size) {
  $RDpilot_percent = percent($RDpilot/$sample_size); //print_r($RDpilot_percent);
  if ($RDpilot || $RDpilot == 0) { $RDpilot_bar = "<div class=\"progress\"><div class=\"progress-bar progress-bar-warning progress-bar-striped\" role=\"progressbar\" aria-valuenow=\"$RDpilot_percent\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"min-height:0.2em; min-width:2em; width:$RDpilot_percent\">$RDpilot_percent</div></div>"; } else { $RDsuccess_bar = "<div class=\"progress\"></div>"; }
  $RDterminated_percent = percent($RDterminated/$sample_size); //print_r($RDterminated_percent);
  if ($RDterminated || $RDterminated == 0) { $RDterminated_bar = "<div class=\"progress\"><div class=\"progress-bar progress-bar-danger progress-bar-striped\" role=\"progressbar\" aria-valuenow=\"$RDterminated_percent\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"min-height:0.2em; min-width:2em; width:$RDterminated_percent\">$RDterminated_percent</div></div>"; } else { $RDsuccess_bar = "<div class=\"progress\"></div>"; }
  $RDsuccess_percent = percent($RDsuccess/$sample_size); //print_r($RDsuccess_percent);
  if ($RDsuccess || $RDsuccess == 0) { $RDsuccess_bar = "<div class=\"progress\"><div class=\"progress-bar progress-bar-striped\" role=\"progressbar\" aria-valuenow=\"$RDsuccess_percent\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"min-height:0.2em; min-width:2em; width:$RDsuccess_percent\">$RDsuccess_percent</div></div>"; } else { $RDsuccess_bar = "<div class=\"progress\"></div>"; }
  $oversuccess = $RDsuccess - $sample_size; $oversuccess_percent = percent($oversuccess/$sample_size);
} else {
  $RDpilot_percent = "";
  if ($RDpilot || $RDpilot == 0) { $RDpilot_bar = ""; } else { $RDsuccess_bar = ""; }
  $RDterminated_percent = "";
  if ($RDterminated || $RDterminated == 0) { $RDterminated_bar = ""; } else { $RDsuccess_bar = ""; }
  $RDsuccess_percent = "";
  if ($RDsuccess || $RDsuccess == 0) { $RDsuccess_bar = ""; } else { $RDsuccess_bar = ""; }
}

// Contact sheet summary
$showdc = false;
if ($private == 1) {
  // for private projects
  if ($all == 0) {
    echo "<p>This project currently has <strong>no respondent</strong> stored in the database.</p>\n";
    echo "<p>Please upload respondent's emails using a Comma Separated Value (CSV) file and our system will enable the email function allowing you to send invitation / reminder to respondents accordingly.</p>\n";
    echo "<div id=\"gauge1\" style=\"display:none\"></div><div id=\"gauge2\" style=\"display:none\"></div><div id=\"orgchart1\" style=\"display:none\"></div>\n";
    echo "<p>The upload function can be found in the <a href=\"$respondent\">respondent's main page</a>, and it looks like below example <i class=\"pe-arrow-down\"></i>.</p>\n";
    echo "<div align=\"right\"><a class=\"btn btn-info\"><i class=\"pe-upload pe-fw\"></i> Upload a new name list</a> <a class=\"btn btn-info\" title=\"Add new respondents\"><i class=\"pe-user-plus pe-fw\"></i> Manually add new respondents</a></div>\n";
    echo "<br>\n";
    if ($valid > 0) { echo $dcupdate; }
  } else if (($all != 0) && ($allgood == 0)) {
    echo "<p>Although you have uploaded some respondents to the database (n=$all_format), <strong>none of them</strong> appears to be good to use.</p>\n";
    echo "<p>This is because their emails appears to be in an incorrect format. To fix this, you have to delete them from the database, and upload a new list making sure the right column on your Comma Separated Value (CSV) file is selected.</p>\n";
    echo "<div id=\"gauge1\" style=\"display:none\"></div><div id=\"gauge2\" style=\"display:none\"></div><div id=\"orgchart1\" style=\"display:none\"></div>\n";
    echo "<p>The upload function can be found in the <a href=\"$respondent\">respondent's main page</a>, and it looks like below example <i class=\"pe-arrow-down\"></i>.</p>\n";
    echo "<div align=\"right\"><a class=\"btn btn-info\"><i class=\"pe-upload pe-fw\"></i> Upload a new name list</a> <a class=\"btn btn-info\" title=\"Add new respondents\"><i class=\"pe-user-plus pe-fw\"></i> Manually add new respondents</a></div>\n";
    echo "<br>\n";
    if ($valid > 0) { echo $dcupdate; }
  } else if (($allgood != 0) && ($invited == 0)) {
    echo "<p>Although you have uploaded valid respondents to the database (n=$allgood_format valid from a total upload of n=$all_format), <strong>none of them</strong> has been sent with an invitation to your survey, and therefore <strong>no participation</strong>.</p>\n";
    echo "<p>We therefore strongly suggest you start inviting your respondents to this survey to start the data collection process.</p>\n";
    echo "<div id=\"gauge1\" style=\"display:none\"></div><div id=\"gauge2\" style=\"display:none\"></div><div id=\"orgchart1\" style=\"display:none\"></div>\n";
    echo "<p>The invitation function can be found in the <a href=\"$respondent\">respondent's main page</a>, and it looks like below examples <i class=\"pe-arrow-down\"></i>.</p>\n";
    echo "<div align=\"right\"><a class=\"btn btn-warning\"><i class=\"pe-envelope pe-fw\"></i> Send an invitation email</a> <a class=\"btn btn-warning\" title=\"Send a reminder email\"><i class=\"pe-envelope pe-fw\"></i> Send a reminder email</a></div>\n";
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
    echo $dcupdate;
    echo "<hr>\n";
  }
} else {
  // for public projects
  $average = number_format($RDsuccess / $daysoffieldwork, 1);
  if ($sample_size) {
    if ($RDsuccess > 0) {
      $togo = number_format(($sample_size - $RDsuccess) / $average, 1);
      $text .= "<p>Within a period of <strong>$daysoffieldwork</strong> of fieldwork, we have achieved a total of <strong>n=$RDsuccess</strong> successful interviews <small class=\"grey\">(an average of $average interviews per day)</small>.</p>\n";
      if ($RDsuccess < $sample_size) {
        $text .= "<p>From the required total sample of <strong>n=$sample_size</strong> we have so far achieved <strong>$RDsuccess_percent</strong>.</p>\n";
        $text .= "<p>With this rate of progression, the data collection is estimated to end in <strong>$togo</strong> days.</p>\n";
      } else {
        $text .= "<p>From the required total sample of <strong>n=$sample_size</strong> we have achived more than the required sample size at <strong>+$oversuccess_percent</strong>.</p>\n";
        $text .= "<p>Now it's time for result analysis.</p>\n";
      }
    } else {
      $text .= "<p>Within a period of <strong>$daysoffieldwork</strong> of fieldwork, there is still no successful interviews to be seen at all.</p>\n";
      $text .= "<p>Please revisit this page again in the next day or so. If this page is not moving for many days, please contact us for support.</p>\n";
    }
  } else {
    if ($RDsuccess) {
      $text .= "<p>Within a period of <strong>$daysoffieldwork</strong> of fieldwork, we have achieved a total of <strong>n=$RDsuccess</strong> successful interviews <small class=\"grey\">(an average of $average interviews per day)</small>.</p>\n";
    }
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
  echo $dcupdate;
  echo "<hr>\n";
}

function checkingQuestion($input, $ee = array()) {
  for ($i=0; $i<count($ee); $i++) {
    $alt1 = ""; $alt2 = "";
    if (($input == "Region") || ($input == "Location")) { $alt1 = "Region"; $alt2 = "Location"; $interviewerbylocation = 1; }
    else if (($input == "Interviewer") || ($input == "Interviewers")) { $alt1 = "Interviewer"; $alt2 = "Interviewer"; }
    else if (($input == "Gender") || ($input == "Sex")) { $alt1 = "Gender"; $alt2 = "Sex"; }
    else if (($input == "SES") || ($input == "SocialClass")) { $alt1 = "SES"; $alt2 = "SocialClass"; }
    else { $alt1 = $input; $alt2 = $input; }
    if ($alt1) {
      if ($ee[$i]['data'][$alt1]) { $output[] = $ee[$i]['data'][$alt1]; $missing_id[] = ""; $missing_info[] = ""; if ($interviewerbylocation == 1) { $interviewerbylocationdata[] = array('region' => $ee[$i]['data'][$alt1], array('interviewer' => $ee[$i]['data']['Interviewer'])); } }
      else if ($ee[$i]['data']['Demographic'][$alt1]) { $output[] = $ee[$i]['data']['Demographic'][$alt1]; $missing_id[] = ""; $missing_info[] = ""; if ($interviewerbylocation == 1) { $interviewerbylocationdata[] = array('region' => $ee[$i]['data']['Demographic'][$alt1], array('interviewer' => $ee[$i]['data']['Interviewer'])); } }
      else if ($ee[$i]['data']['Demographic']['Record'][$alt1]) { $output[] = $ee[$i]['data']['Demographic']['Record'][$alt1]; $missing_id[] = ""; $missing_info[] = ""; if ($interviewerbylocation == 1) { $interviewerbylocationdata[] = array('region' => $ee[$i]['data']['Demographic']['Record'][$alt1], array('interviewer' => $ee[$i]['data']['Interviewer'])); } }
      else if ($ee[$i]['data']['Respondent'][$alt1]) { $output[] = $ee[$i]['data']['Respondent'][$alt1]; $missing_id[] = ""; $missing_info[] = ""; if ($interviewerbylocation == 1) { $interviewerbylocationdata[] = array('region' => $ee[$i]['data']['Respondent'][$alt1], array('interviewer' => $ee[$i]['data']['Interviewer'])); } }
      else if ($ee[$i]['data']['Respondent']['Record'][$alt1]) { $output[] = $ee[$i]['data']['Respondent']['Record'][$alt1]; $missing_id[] = ""; $missing_info[] = ""; if ($interviewerbylocation == 1) { $interviewerbylocationdata[] = array('region' => $ee[$i]['data']['Respondent']['Record'][$alt1], array('interviewer' => $ee[$i]['data']['Interviewer'])); } }
      else if ($ee[$i]['data']['RespondentInformation'][$alt1]) { $output[] = $ee[$i]['data']['RespondentInformation'][$alt1]; $missing_id[] = ""; $missing_info[] = ""; if ($interviewerbylocation == 1) { $interviewerbylocationdata[] = array('region' => $ee[$i]['data']['RespondentInformation'][$alt1], array('interviewer' => $ee[$i]['data']['Interviewer'])); } }
      else if ($ee[$i]['data']['RespondentInformation']['Record'][$alt1]) { $output[] = $ee[$i]['data']['RespondentInformation']['Record'][$alt1]; $missing_id[] = ""; $missing_info[] = ""; if ($interviewerbylocation == 1) { $interviewerbylocationdata[] = array('region' => $ee[$i]['data']['RespondentInformation']['Record'][$alt1], array('interviewer' => $ee[$i]['data']['Interviewer'])); } }
      else { $output[] = ""; $missing_id[] = $ee[$i]['id']; $missing_info[] = array('missing' => $alt1, 'id' => $ee[$i]['id'], 'RD_firstname' => $ee[$i]['data']['RespondentInformation']['First name'], 'RD_surname' => $ee[$i]['data']['RespondentInformation']['Surname'], 'RD_mobile' => $ee[$i]['data']['RespondentInformation']['Mobile'], 'RD_region' => $ee[$i]['data']['Region'], 'interviewer' => $ee[$i]['data']['Interviewer'], 'submitted' => $ee[$i]['submitted']); }
    } else if ($alt2) {
      if ($ee[$i]['data'][$alt2]) { $output[] = $ee[$i]['data'][$alt2]; $missing_id[] = ""; $missing_info[] = ""; if ($interviewerbylocation == 1) { $interviewerbylocationdata[] = array('region' => $ee[$i]['data'][$alt2], array('interviewer' => $ee[$i]['data']['Interviewer'])); } }
      else if ($ee[$i]['data']['Demographic'][$alt2]) { $output[] = $ee[$i]['data']['Demographic'][$alt2]; $missing_id[] = ""; $missing_info[] = ""; if ($interviewerbylocation == 1) { $interviewerbylocationdata[] = array('region' => $ee[$i]['data']['Demographic'][$alt2], array('interviewer' => $ee[$i]['data']['Interviewer'])); } }
      else if ($ee[$i]['data']['Demographic']['Record'][$alt2]) { $output[] = $ee[$i]['data']['Demographic']['Record'][$alt2]; $missing_id[] = ""; $missing_info[] = ""; if ($interviewerbylocation == 1) { $interviewerbylocationdata[] = array('region' => $ee[$i]['data']['Demographic']['Record'][$alt2], array('interviewer' => $ee[$i]['data']['Interviewer'])); } }
      else if ($ee[$i]['data']['Respondent'][$alt2]) { $output[] = $ee[$i]['data']['Respondent'][$alt2]; $missing_id[] = ""; $missing_info[] = ""; if ($interviewerbylocation == 1) { $interviewerbylocationdata[] = array('region' => $ee[$i]['data']['Respondent'][$alt2], array('interviewer' => $ee[$i]['data']['Interviewer'])); } }
      else if ($ee[$i]['data']['Respondent']['Record'][$alt2]) { $output[] = $ee[$i]['data']['Respondent']['Record'][$alt2]; $missing_id[] = ""; $missing_info[] = ""; if ($interviewerbylocation == 1) { $interviewerbylocationdata[] = array('region' => $ee[$i]['data']['Respondent']['Record'][$alt2], array('interviewer' => $ee[$i]['data']['Interviewer'])); } }
      else if ($ee[$i]['data']['RespondentInformation'][$alt2]) { $output[] = $ee[$i]['data']['RespondentInformation'][$alt2]; $missing_id[] = ""; $missing_info[] = ""; if ($interviewerbylocation == 1) { $interviewerbylocationdata[] = array('region' => $ee[$i]['data']['RespondentInformation'][$alt2], array('interviewer' => $ee[$i]['data']['Interviewer'])); } }
      else if ($ee[$i]['data']['RespondentInformation']['Record'][$alt2]) { $output[] = $ee[$i]['data']['RespondentInformation']['Record'][$alt2]; $missing_id[] = ""; $missing_info[] = ""; if ($interviewerbylocation == 1) { $interviewerbylocationdata[] = array('region' => $ee[$i]['data']['RespondentInformation']['Record'][$alt2], array('interviewer' => $ee[$i]['data']['Interviewer'])); } }
      else { $output[] = ""; $missing_id[] = $ee[$i]['id']; $missing_info[] = array('missing' => $alt2, 'id' => $ee[$i]['id'], 'RD_firstname' => $ee[$i]['data']['RespondentInformation']['First name'], 'RD_surname' => $ee[$i]['data']['RespondentInformation']['Surname'], 'RD_mobile' => $ee[$i]['data']['RespondentInformation']['Mobile'], 'RD_region' => $ee[$i]['data']['Region'], 'interviewer' => $ee[$i]['data']['Interviewer'], 'submitted' => $ee[$i]['submitted']); }
    }
  }
  $alloutput = [];
  array_push($alloutput, $output);
  array_push($alloutput, $missing_id);
  array_push($alloutput, array_remove_empty($missing_info, "no"));
  array_push($alloutput, $interviewerbylocationdata);
  return $alloutput;
}

function getResultJS($input = array(), $RD, $sort, $keyword) {
  if ($keyword) {
    $input = array_remove_empty($input["0"]);
    $input = array_count_values($input);
    if ($sort == "1") { arsort($input); }
    else if ($sort == "2") { krsort($input); }
    else if ($sort == "3") { ksort($input); }
    $Z = array_sum($input);
    $A = array_keys($input);
    $B = array_values($input);
    $C = count($input);
    $draw = "draw$keyword();";
    $output = "";
    if ($Z > 0) {
      $output .= "  google.charts.setOnLoadCallback(draw$keyword);\n";
      $output .= "  function draw$keyword() {\n";
      $output .= "    var data = new google.visualization.DataTable();\n";
      $output .= "    data.addColumn('string', 'Answer');\n";
      $output .= "    data.addColumn('number', 'Count');\n";
      $output .= "    data.addColumn('number', 'Percentage');\n";
      $output .= "    data.addRows($C);\n";
      for ($m=0; $m<$C; $m++) {
        $BB[$m] = number_format(($B[$m]/$RD)*100, 2);
        $m1 = $m+1; $m2 = $m1+1;
        $output .= "    data.setCell($m, 0, '$A[$m]');\n";
        $output .= "    data.setCell($m, 1, $B[$m]);\n";
        $output .= "    data.setCell($m, 2, $BB[$m]);\n";
      }
      $output .= "    var viewTable = new google.visualization.DataView(data);\n";
      $output .= "    viewTable.setColumns([0, 1, 2]);\n";
      $output .= "    var viewChart = new google.visualization.DataView(data);\n";
      $output .= "    viewChart.setColumns([0, 2]);\n";
      $output .= "    var formatter = new google.visualization.NumberFormat({ suffix: '%', fractionDigits: '1' });\n";
      $output .= "    formatter.format(data, 2);\n";
      if ($C < 15) { $height = '500'; } else if (($C >= 15) && ($C < 30)) { $height = '700'; } else if ($C >= 30) { $height = '1000'; }
      if (($Z > $RD) || ($C > 7)) { $tt = array('bar', 'column'); } else if (($Z <= $RD) && ($C <= 3)) { $tt = array('pie', 'donut'); } else if ($C > 15) { $tt = array('column'); } else { $tt = array('bar', 'column', 'pie', 'donut'); }
      if (($keyword == "Region") || ($keyword == "Location")) { $chart = 'column'; } else if ($keyword == "Interviewer") { $chart = 'bar'; } else if ($C > 8) { $chart = 'bar'; } else { $chart = $tt[array_rand($tt)]; }
      if ($chart == "pie") {
        $output .= "    var options = { width: '100%', height: '500' };\n";
        $output .= "    var chart = new google.visualization.PieChart(document.getElementById('sortchart-$keyword'));\n";
      } else if ($chart == "donut") {
        $output .= "    var options = { pieHole: 0.4, width: '100%', height: '500' };\n";
        $output .= "    var chart = new google.visualization.PieChart(document.getElementById('sortchart-$keyword'));\n";
      } else if ($chart == "column") {
        $output .= "    var options = { width: '100%', height: '500', bar: { groupWidth: '60%' }, legend: { position: 'none' } };\n";
        $output .= "    var chart = new google.visualization.ColumnChart(document.getElementById('sortchart-$keyword'));\n";
      } else if ($chart == "bar") {
        if ($C >= 15) { $output .= "    var options = { width: '100%', height: $height, vAxis: { textStyle: { fontSize: 10 } }, hAxis: { textStyle: { fontSize: 14 } }, bar: { groupWidth: '60%' }, legend: { position: 'none' } };\n"; }
        else { $output .= "    var options = { width: '100%', height: $height, bar: { groupWidth: '60%' }, legend: { position: 'none' } };\n"; }
        $output .= "    var chart = new google.visualization.BarChart(document.getElementById('sortchart-$keyword'));\n";
      }
      $output .= "    chart.draw(viewChart, options);\n";
      $output .= "    var table = new google.visualization.Table(document.getElementById('sorttable-$keyword'));\n";
      $output .= "    table.draw(viewTable, { width: '100%', height: '100%' });\n";
      $output .= "    google.visualization.events.addListener(table, 'sort', function(event) {\n";
      $output .= "      data.sort([{ column: event.column, desc: !event.ascending }]);\n";
      $output .= "      chart.draw(viewChart);\n";
      $output .= "    });\n";
      $output .= "  }\n";
    }
    $alloutput = [];
    array_push($alloutput, $output);
    array_push($alloutput, $draw);
  }
  return $alloutput;
}

function getResultHTML($input = array(), $RD, $keyword) {
  $input = array_remove_empty($input);
  $inputA = $input["0"];
  $inputB = $input["1"];
  $inputA = array_count_values($inputA);
  $Z = array_sum($inputA);
  $C = count($inputA);
  $Y = implode(', ', $inputB);
  $output = "";
  if ($Z > 0) {
    $output .= "      <h4>Sample size broken down by $keyword <small>($C groups)</small></h4>\n";
    $output .= "      <p class=\"small grey\">Click the table header <i class=\"pe-hand-o-down\"></i> to sort the data by column</p>\n";
    $output .= "      <div class=\"row\">\n";
    $output .= "        <div class=\"col-xs-7 col-sm-7 col-md-7 col-lg-7\">\n";
    $output .= "          <div id=\"sorttable-$keyword\" style=\"width:400px\"></div>\n";
    $output .= "        </div>\n";
    $output .= "        <div class=\"col-xs-5 col-sm-5 col-md-5 col-lg-5\">\n";
    if ($Z == $RD) {
      $output .= "          <p class=\"small green\"><i class=\"pe-check pe-lg\"></i> The number of responses for this question (n=$Z) matches exactly to the number of sample (n=$RD). So the data is good.</p>\n";
    } else {
      $output .= "          <p class=\"small red\"><i class=\"pe-exclamation-triangle pe-lg\"></i> The number of responses for this question (n=$Z) is lower than the number of sample (n=$RD).</p><p class=\"small red\">Questionnaire no. with missing answers: $Y</p>\n";
    }
    $output .= "        </div>\n";
    $output .= "        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n";
    $output .= "          <div id=\"sortchart-$keyword\"></div>\n";
    $output .= "        </div>\n";
    $output .= "      </div>\n";
  }
  return $output;
}

function getMissingTable($input = array()) {
  $records = count($input);
  if ($records > "0") {
    $output = "      <h4>Missing Information <small>($records records)</small></h4>\n";
    $rows = array();
    foreach ($input as $row) {
      $cells = array();
      foreach ($row as $cell) { $cells[] = "<td>{$cell}</td>"; }
      $rows[] = "<tr>" . implode('', $cells) . "</tr>";
    }
    $output .= "      <table class='table table-hover small' id='missing'><thead><tr class='bg-primary'><th>What is missing?</th><th>Questionnaire No.</th><th colspan='3'>Respondent's information</th><th>Location</th><th>Interviewer</th><th>Since</th></tr></thead><tbody>" . implode('', $rows) . "</tbody></table>";
  }
  return $output;
}

// function utf8_converter($array) {
//   array_walk_recursive($array, function(&$item, $key) {
//     if(!mb_detect_encoding($item, 'utf-8', true)) {
//       $item = utf8_encode($item);
//     }
//   });
//   return $array;
// }

// echo phpinfo();
// print_r($ee);
$ff = json_decode($monitor, true); //print_r($ff);
foreach ($ff["QC"] as $fA) { foreach ($fA as $fB) { $mn1[] = $fB; } } //print_r($mn1);
foreach ($ff["monitor"] as $fC) { foreach ($fC as $fD) { $mn2[] = $fD; } } // print_r($mn2);
foreach ($ff["quota"] as $fE) { foreach ($fE as $fF) { $mn3[] = $fF; } } // print_r($mn3);

// for ($i = 0; $i < count($mn1); $i++) {
//   $AA = checkingQuestion($mn1[$i], $ee);
//   $AB = getResultHTML($v1, $RDsuccess, $mn1[$i]);
//   // print_r($AA["0"]);
//   // foreach ($AA["0"] as $k1 => $v1) {
//   //   print_r($v1);
//   //   $AB = getResultHTML($v1, $RDsuccess, $mn1[$i]);
//   // }
//   print_r($AB);
//   $AC = getResultJS($AA, $RDsuccess, "1", $mn1[$i]);
//   $ab .= $AB;
//   $ac .= $AC["2"];
//   $missing = array_merge($missing, $AA["2"]);
//
// }

// function is_multibyte($s) {
//   return mb_strlen($s,'utf-8') < strlen($s);
// }

// print_r($mn1["0"]);
// print_r($mn1["1"]);
// print_r($mn2["0"]);
// print_r($mn2["1"]);

// if(is_multibyte($A1A)) { echo "Yes"; } else { echo "NO"; }
// echo utf8_encode($A1A);
// echo mb_detect_encoding($A1A, 'UTF-8');
// print_r("<pre>\n");
// print_r($A1A);
// print_r("</pre>");

$A1A = checkingQuestion($mn1["0"], $ee);
$A1B = getResultHTML($A1A, $RDsuccess, $mn1["0"]);
$A1C = getResultJS($A1A, $RDsuccess, "1", $mn1["0"]);

$A2A = checkingQuestion($mn1["1"], $ee);
$A2B = getResultHTML($A2A, $RDsuccess, $mn1["1"]);
$A2C = getResultJS($A2A, $RDsuccess, "1", $mn1["1"]);

$A3A = checkingQuestion($mn1["2"], $ee);
$A3B = getResultHTML($A3A, $RDsuccess, $mn1["2"]);
$A3C = getResultJS($A3A, $RDsuccess, "1", $mn1["2"]);

$A4A = checkingQuestion($mn1["3"], $ee);
$A4B = getResultHTML($A4A, $RDsuccess, $mn1["3"]);
$A4C = getResultJS($A4A, $RDsuccess, "1", $mn1["3"]);

// print_r("<pre>\n");
// print_r($A3A);
// print_r("</pre>");

$A5A = checkingQuestion($mn2["0"], $ee);
$A5B = getResultHTML($A5A, $RDsuccess, $mn2["0"]);
$A5C = getResultJS($A5A, $RDsuccess, "0", $mn2["0"]);

$A6A = checkingQuestion($mn2["1"], $ee);
$A6B = getResultHTML($A6A, $RDsuccess, $mn2["1"]);
$A6C = getResultJS($A6A, $RDsuccess, "3", $mn2["1"]);

$A7A = checkingQuestion($mn2["2"], $ee);
$A7B = getResultHTML($A7A, $RDsuccess, $mn2["2"]);
$A7C = getResultJS($A7A, $RDsuccess, "3", $mn2["2"]);

$A8A = checkingQuestion($mn2["3"], $ee);
$A8B = getResultHTML($A8A, $RDsuccess, $mn2["3"]);
$A8C = getResultJS($A8A, $RDsuccess, "1", $mn2["3"]);

$A9A = checkingQuestion($mn2["4"], $ee);
$A9B = getResultHTML($A9A, $RDsuccess, $mn2["4"]);
$A9C = getResultJS($A9A, $RDsuccess, "1", $mn2["4"]);

$A10A = checkingQuestion($mn2["5"], $ee);
$A10B = getResultHTML($A10A, $RDsuccess, $mn2["5"]);
$A10C = getResultJS($A10A, $RDsuccess, "2", $mn2["5"]);

$A11A = checkingQuestion($mn2["6"], $ee);
$A11B = getResultHTML($A11A, $RDsuccess, $mn2["6"]);
$A11C = getResultJS($A11A, $RDsuccess, "1", $mn2["6"]);

?>

  </div>
  <div id="second" class="tab-pane fade">

<?php


// echo "pepepepepe";
// echo $ab;
if ($A1B) { print_r($A1B); }
if ($A2B) { print_r($A2B); }
if ($A3B) { print_r($A3B); }
if ($A4B) { print_r($A4B); }
$missing = array_merge($A1A["2"], $A2A["2"], $A3A["2"], $A4A["2"], $A5A["2"], $A6A["2"], $A7A["2"], $A8A["2"], $A9A["2"], $A10A["2"], $A11A["2"]);
print_r(getMissingTable($missing));
?>

  </div>
  <div id="third" class="tab-pane fade">

<?php
// if ($A3B) { print_r($A3B); }
// if ($A4B) { print_r($A4B); }
if ($A5B) { print_r($A5B); }
if ($A6B) { print_r($A6B); }
if ($A7B) { print_r($A7B); }
if ($A8B) { print_r($A8B); }
if ($A9B) { print_r($A9B); }
if ($A10B) { print_r($A10B); }
if ($A11B) { print_r($A11B); }
?>
  </div>
  <div id="fourth" class="tab-pane fade">

<?php
if ($status >= 2) { echo "    <h4>Interim data <small>(based on successful interviews)</small></h4>\n"; } else if ($status == 1) { echo "    <h4>Interim data <small>(based on pilot interviews)</small></h4>\n"; }
echo "    <div class=\"alert alert-warning\" role=\"alert\">\n";
echo "      <h4>Important note</h4>\n";
echo "      <p>This data should only be used as a sanitary check rather than using it as result for analysis. Interim data is not a true reflection of the final result and the final result can very different from the interim data depending on several factors such as the sample size, sample composition, etc.</p>\n";
echo "      <p><strong>It is imperative that business decision must not be made based on the interim result</strong>. We hereby take no responsibility on any damages to the business caused by the usage of interim result. You must use it at your own risk.</p>\n";
echo "    </div>\n";
if ($q->rowCount() < $excerptRows) { $outrecords = $q->rowCount(); } else { $outrecords = $excerptRows; }
echo "    <div class=\"row csv\">\n";
echo "      <div class=\"col-xs-12 col-sm-9 col-md-9 col-lg-9\">\n";
echo "      <p>Table below shows the interim data which is <strong>the most recent $outrecords records</strong> of this survey which you can view the initial feedback plus an ability to delete should you need to.</p>\n";
echo "      <p>If you have a very short survey e.g. not more than 10 questions, you can <a class=\"raw\"><i class=\"pe-desktop pe-fw\"></i> click here</a> to view the real time data in a Comma Separated Values (CSV) format.</p>\n";
echo "      <p>Otherwise, we would strongly suggest you download the data file so working with the data will be more effective. The data is self-explanatory so even non-DP person can understand it.</p>\n";
echo "      </div>\n";
echo "      <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\">\n";
echo "        <div class=\"list-group small\">\n";
echo "          <li class=\"list-group-item list-group-item-info\"><strong><i class=\"pe-info-circle pe-fw\"></i> Menu</strong></li>\n";
echo "          <a class=\"list-group-item download\"><i class=\"pe-download pe-fw\"></i> Download data of all questions in CSV format</a>\n";
echo "          <a href=\"$result\" class=\"list-group-item\"><i class=\"pe-line-chart pe-fw\"></i> View the real-time survey results</a>\n";
echo "        </div>\n";
echo "      </div>\n";
echo "      <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n";
echo "        <textarea class=\"editing form-control\" readonly></textarea>\n";
echo "        <div class=\"table rendered\"><table class=\"table\"></table></div>\n";
echo "        <span class=\"tablenotice\">You may need to scroll right if there are many columns <i class=\"pe-hand-o-right\"></i></span>\n";
echo "      </div>\n";
echo "    </div>\n";

?>

</div>
<div id="fifth" class="tab-pane fade">

  <h3>Map of interviews</h3>
  <p>This page shows the map of all interviews taken place for this study which was automatrically recorded by the system.</p>

  <div id="map" style="width: 400px; height: 300px"></div>

  <script type="text/javascript">
    google.charts.load("current", { "packages":["map"], "mapsApiKey": "AIzaSyA0MZthPLSO48HzjyPNXY9125WpbURDXVU" });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      var data = google.visualization.arrayToDataTable( <?php echo $geoout; ?>);
      var map = new google.visualization.Map(document.getElementById('map'));
      map.draw(data, { zoomLevel: 6.5, mapType: 'terrain', howTooltip: true, useMapTypeControl: true, showInfoWindow: true });
  }

  </script>

  </div>
<?php if (($_GET["m"] == "2") || ($_GET["m"] == "3") || ($_GET["bpass"] == "1")) { ?>
  <div id="sixth" class="tab-pane fade in active">
<?php } else { ?>
  <div id="sixth" class="tab-pane fade">
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
  var api = 'https://siamsquare.org.uk';
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
        // if (td.contains("upload")) { alert("String Found"); }
        tr.appendChild(td);
        $(tr).find('td:first-child').append(a1).append(a2);
      }
      tbody.appendChild(tr);
<?php if (($_SESSION["level"] >= "6") || ($owner == 1)) { ?>
      td2.appendChild(bb3);
      td2.appendChild(bbspace);
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
  Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
      if (obj.hasOwnProperty(key)) size++;
    }
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
    // $(".csv a.download").click(function() {
    //   var data = $(".csv textarea").val();
    //   if (data) { Events.download(data.length); return true; }
    //   else { return false; }
    // });
    $(".csv textarea").click(function() {$(this).focus().select();});
  });

<?php if ($monitor) { echo "var monitor = $monitor;\n"; } else { echo "var monitor = { \"quota\": [], \"QC\": [], \"monitor\": [] };\n"; } ?>

  var counter0 = 0; var counter0z = counter0 + 1; var counter0zz = counter0z + 1;
  if (typeof(monitor.QC) === 'undefined') {
    var row1 = "              <tr>\n" +
      "              </tr>\n";
    $('#tableQC').find('tbody').append(row1);
  } else {
    while (counter0<monitor.QC.length) {
      var row1 = "              <tr>\n" +
        "                <td valign=\"middle\">" + counter0z + "</td>\n" +
        "                <td valign=\"middle\"><input type=\"text\" class=\"form-control input-sm\" placeholder=\"Question name\" name=\"QC_questionname_" + counter0z + "\" value=\"" + monitor.QC[counter0].questionname + "\"></td>\n" +
        "                <td valign=\"middle\"><i class=\"pe-trash pe-fw red deletethisrow\" title=\"Delete this row\"></i></td>\n" +
        "              </tr>\n";
        // "              <tr><td colspan=\"3\">\n";
        // "              <p align=\"center\"><button type=\"button\" class=\"btn btn-warning btn-xs\" id=\"newkeyquestion1\"><i class=\"pe-plus pe-fw\"></i>Add a new subgroup aspect</button></p>\n";       
        // "              </td></tr>\n";
        $('#tableQC').find('tbody').append(row1);
      counter0++;
      counter0z++;
    }
  }
  $('#newkeyquestion1').click(function() {
    var newrow1 = "              <tr>\n" +
      "                <td valign=\"middle\">" + counter0z + "</td>\n" +
      "                <td valign=\"middle\"><input type=\"text\" class=\"form-control input-sm\" placeholder=\"Question name\" name=\"QC_questionname_" + counter0z + "\"></td>\n" +
      "                <td valign=\"middle\"><i class=\"pe-trash pe-fw red deletethisrow\" title=\"Delete this row\"></i></td>\n" +
      "              </tr>\n";
    $('#tableQC').find('tbody').append(newrow1);
    counter0z++;
  });
  $(document.body).delegate(".deletethisrow", "click", function() { $(this).closest("tr").remove(); });

  var counter1 = 0; var counter1z = counter1 + 1;
  if (typeof(monitor.monitor) === 'undefined') {
    var row2 = "              <tr>\n" +
      "              </tr>\n";
    $('#tableMonitor').find('tbody').append(row2);
  } else {
    while (counter1<monitor.monitor.length) {
      var row2 = "              <tr>\n" +
        "                <td valign=\"middle\">" + counter1z + "</td>\n" +
        "                <td valign=\"middle\"><input type=\"text\" class=\"form-control input-sm\" placeholder=\"Question name\" name=\"monitor_questionname_" + counter1z + "\" value=\"" + monitor.monitor[counter1].questionname + "\"></td>\n" +
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

  var counter2a = 0, counter2b = 0;
  var checkcombinedtotalsample = $('#totalsamplesize').val();
  if (typeof(monitor.quota) === 'undefined') {
    var row3 = "              <tr>\n" +
      "              </tr>\n";
    $('#tablesamplewrap').find('tbody').append(row3);
  } else {
    var i; var j;
    for (i=0; i<monitor.quota.length; i++) {
      var subTotal= 0, combinedtotalsample = 0; combinedtotalsample[i] = 0;
      listTable(i, monitor.quota[i].questionname);
      for (j=0; j<monitor.quota[i].details.length; j++) {
        listRow(parseInt(j)+1, i, monitor.quota[i].details[j].subgroup, monitor.quota[i].details[j].samplesize);
        combinedtotalsample += parseInt(monitor.quota[i].details[j].samplesize);
        // combinedtotalsample[i] += parseInt(monitor.quota[i].details[j].samplesize);
      }
      suggestedTotalsample(i, monitor.quota[i].questionname, combinedtotalsample);
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
      "                <th width=\"85%\" colspan=\"2\"><input type=\"text\" class=\"form-control input-sm\" placeholder=\"Subgroup/Question name\" name=\"quota_" + m + "_questionname_1\" value=\"" + n + "\"></th>\n" +
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
      "                <th width=\"85%\" colspan=\"2\"><input type=\"text\" class=\"form-control input-sm\" placeholder=\"Question name\" name=\"quota_" + m + "_questionname_1\"></th>\n" +
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
        <?php echo "[{ v:'Terminated', f:'<div class=\"small\">Terminated</div><div style=\"font-size:1.5rem\">n=".$RDterminated."</div>$RDterminated_bar' }, 'Total', 'Terminated interviews' ],\n"; ?>
        <?php echo "[{ v:'Successful', f:'<div class=\"small\">Successful</div><div style=\"font-size:1.5rem\">n=".$RDsuccess."</div>$RDsuccess_bar' }, 'Total', 'Successful interviews' ],\n"; ?>
      ]);
      dataTable.setRowProperty(3, 'style', 'background: #d9edf7; border: 3px solid #31708f');
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
<?php
if ($A1C["0"]) { print_r($A1C["0"]); }
if ($A2C["0"]) { print_r($A2C["0"]); }
if ($A3C["0"]) { print_r($A3C["0"]); }
if ($A4C["0"]) { print_r($A4C["0"]); }
if ($A5C["0"]) { print_r($A5C["0"]); }
if ($A6C["0"]) { print_r($A6C["0"]); }
if ($A7C["0"]) { print_r($A7C["0"]); }
if ($A8C["0"]) { print_r($A8C["0"]); }
if ($A9C["0"]) { print_r($A9C["0"]); }
if ($A10C["0"]) { print_r($A10C["0"]); }
if ($A11C["0"]) { print_r($A11C["0"]); }
// print_r($A1C["0"]);
// print_r($A2C["0"]);
// print_r($A3C["0"]);
// print_r($A4C["0"]);
// print_r($A5C["0"]);
// print_r($A6C["0"]);
// print_r($A7C["0"]);
// print_r($A8C["0"]);
// print_r($A9C["0"]);
// print_r($A10C["0"]);
// print_r($A11C["0"]);
// print_r("<pre>\n");
// print_r($A1C["0"]);
// print_r("</pre>");

// echo $ac;
?>

  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    if ($(e.target).attr('id') == 'first-tab-trigger') { drawOrgChart1(); drawOrgChart2(); drawGaugeChart1(); drawGaugeChart2(); drawAreaChart(); }
    if ($(e.target).attr('id') == 'second-tab-trigger') {
      <?php if ($A1C["1"]) { print_r($A1C["1"]); } ?>
      <?php if ($A2C["1"]) { print_r($A2C["1"]); } ?>
      <?php if ($A3C["1"]) { print_r($A3C["1"]); } ?>
      <?php if ($A4C["1"]) { print_r($A4C["1"]); } ?>
    }
    if ($(e.target).attr('id') == 'third-tab-trigger') {
      <?php if ($A5C["1"]) { print_r($A5C["1"]); } ?>
      <?php if ($A6C["1"]) { print_r($A6C["1"]); } ?>
      <?php if ($A7C["1"]) { print_r($A7C["1"]); } ?>
      <?php if ($A8C["1"]) { print_r($A8C["1"]); } ?>
      <?php if ($A9C["1"]) { print_r($A9C["1"]); } ?>
      <?php if ($A10C["1"]) { print_r($A10C["1"]); } ?>
      <?php if ($A11C["1"]) { print_r($A11C["1"]); } ?>
    }
  })

  $("#missing").find('th:first-child').css("background", "#555");
  $("#missing").find('td:first-child').css("background", "#eee");


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
