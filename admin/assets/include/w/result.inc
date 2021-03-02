<?php

$limit = 20;
$show = $_GET["q"];
$base = "/admin/?w=result&s=".$_GET['s'];
$result = "/admin/?w=result&s=".$_GET['s'];
$progress = "/admin/?w=progress&s=".$_GET['s'];
$subgroupsetting = "/admin/?w=progress&s=".$_GET['s']."&bpass=1";
$questionnaire = "/admin/?w=questionnaire&s=".$_GET['s'];
$respondent = "/admin/?w=respondents&s=".$_GET['s'];
$me = "/admin/?w=result&s=".$_GET['s'];

// ------- Show question --------------------------------------------------------------------------

$sql = "SELECT * FROM j_projects WHERE id = :surveyid LIMIT 1";
$q = $db->prepare($sql);
$q->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
$q->execute();
$rows = $q->fetchAll(PDO::FETCH_ASSOC);

$surveyid = $rows[0]["id"];
$project = $rows[0]["title"];
$description = $rows[0]["description"];
$status = $rows[0]["status"];
$created = $rows[0]["created"];
$updated = $rows[0]["updated"];
$userid = $rows[0]["userid"];
$private = $rows[0]["private"];
$sample_size = $rows[0]["sample"];
$options = $rows[0]["options"];
$monitor = $rows[0]["QC"];
$sreport = $rows[0]["report"];

$rr1 = json_decode($rows['0']['data'], true);
$rr2 = $rr1['pages'];

// ----------------- QUESTIONS ----------------------

for ($i=0; $i<count($rr2); $i++) { $rr3[] = $rr2[$i]['questions']; }
$rr3 = call_user_func_array('array_merge', $rr3);
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
  if ($rr4[$i]['type'] == "html") { $rr4[$i]['html'] = strip_tags($rr4[$i]['html']); }
  if ($rr4[$i]['type'] == "matrixdropdown") { unset($rr4[$i]['rows']); unset($rr4[$i]['choices']); }
  if (($rr4[$i]['type'] == "checkboxhtml") || ($rr4[$i]['type'] == "radiogrouphtml")) {
    for ($j=0; $j<count($rr4[$i]['choices']); $j++) { $rr4[$i]['choices'][$j]['text'] = strip_tags($rr4[$i]['choices'][$j]['text']); }
  }
  if (($rr4[$i]['type'] == "radiogroup") || ($rr4[$i]['type'] == "radiogrouphtml") || ($rr4[$i]['type'] == "dropdown") || ($rr4[$i]['type'] == "matrix") || ($rr4[$i]['type'] == "matrixdropdown")) { unset($rr4[$i]['type']); $rr4[$i]['accept'] = "Single answer"; }
  else if (($rr4[$i]['type'] == "checkbox") || ($rr4[$i]['type'] == "checkboxhtml")) { unset($rr4[$i]['type']); $rr4[$i]['accept'] = "Multiple answer"; }
  else if (($rr4[$i]['type'] == "text") || ($rr4[$i]['type'] == "multipletext") || ($rr4[$i]['type'] == "comment")) { unset($rr4[$i]['type']); $rr4[$i]['accept'] = "Open-ended"; }
  else if ($rr4[$i]['type'] == "html") { unset($rr4[$i]['type']); }
}

$json = json_encode($rr4);

// ----------------- SAVINGS ----------------------

if ($_SESSION['level'] == 9) { $cansave = true; }
else if ($_SESSION['level'] == 6) { $cansave = true; }
else if ($_SESSION['level'] == 5) { if ($_SESSION['userid'] == $owner) { $cansave = true; } }
else { $cansave = false; }
$xreport = array();

if ($_POST['settingreport']) {
  foreach (array_keys($_POST) as $key) {
    list($a, $b, $c) = split('_', $key);
    if ($a == "report") { $xreport[$b][] = $_POST[$key]; }
    // else if ($a == "delete") { $delete[$b][] = $_POST[$key]; }
    // else if ($a == "shuffle") { $shuffle[$b][] = $_POST[$key]; }
    // else if ($a == "maketotal") { $maketotal[$b][] = $_POST[$key]; }
    // else if ($a == "PSM") { $psm[$b][] = $_POST[$key]; }
  }
  // print_r($_POST['settingkeepdelete']);
  $newreport = array_map(function ($questionname, $linkamount) { return array('questionname' => $questionname, 'linkamount' => $linkamount); }, $xreport["questionname"], $xreport["linkamount"]);
  // $newdelete = array_map(function ($leader, $follower) { return array('leader' => $leader, 'follower' => $follower); }, $delete["leader"], $delete["follower"]);
  // $newshuffle = array_map(function ($questionname) { return array('questionname' => $questionname); }, $shuffle["questionname"]);
  // $newmaketotal = array_map(function ($questionname, $totalsum) { return array('questionname' => $questionname, 'totalsum' => $totalsum); }, $maketotal["questionname"], $maketotal["totalsum"]);
  // $newpsm = array_map(function ($cheap, $expensive, $tooexpensive, $toocheap) { return array('cheap' => $cheap, 'expensive' => $expensive, 'tooexpensive' => $tooexpensive, 'toocheap' => $toocheap); }, $psm["cheap"], $psm["expensive"], $psm["tooexpensive"], $psm["toocheap"]);
  print_r($newreport);

  $all = [];
  array_push($all, $newreport); $all["report"] = $all["0"]; unset($all["0"]);
  // array_push($all, $newdelete); $all["delete"] = $all["1"]; unset($all["1"]);
  // array_push($all, $newshuffle); $all["shuffle"] = $all["2"]; unset($all["2"]);
  // array_push($all, $newmaketotal); $all["maketotal"] = $all["3"]; unset($all["3"]);
  // array_push($all, $newpsm); $all["PSM"] = $all["4"]; unset($all["4"]);

  $all = array_remove_empty($all);
  $alljson = json_encode($all, JSON_PRETTY_PRINT);
  print_r($alljson);

  $move = 0;
  if ($alljson != $sreport) { $move = 1; }
  if ($move == 0) {
    $redirect = $me."&m=3";
    header("location: $redirect");
    exit;
  }

  $qG = $db->prepare("UPDATE j_projects SET report = :report WHERE id = :surveyid");
  $qG->bindValue(':surveyid', $_POST["surveyid"], PDO::PARAM_INT);
  $qG->bindValue(':report', $json, PDO::PARAM_STR);
  $qG->execute();
  $redirect = $me."&m=1";
  header("location: $redirect");
  exit;
}
// ----------------- RESULT ----------------------

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


// ----------------- COMBINING ----------------------

for ($i=0; $i<count($rr4); $i++) { $rr5[] = $rr4[$i]["name"]; }
$rr5 = array_flip($rr5);
remove_array_value($rr5);

for ($i=0; $i<count($ee); $i++) {
  $ee[$i]["data"] = array_merge($rr5, array_diff($ee[$i]["data"], $rr5));
  foreach ($ee[$i]["data"] as $k1 => $v1) {
    if (preg_match("/zText/", $k1)) { unset($ee[$i]["data"][$k1]); }
  }
}

$datafordownload = json_encode($ee);


// ----------------- ORIGINAL ----------------------

$a = json_decode($rows[0]["data"], true);
foreach ($a["pages"] as $k1 => $p1) { foreach ($p1 as $k2 => $p2) { foreach ($p2 as $k3 => $p3) { $questions[] = $p3; } } }

$qoutadd = "<p align=\"right\" class=\"lightgrey\"><form action=\"\" method=\"get\" id=\"subgroups\">\n";
$qoutadd .= "<strong>Select the target group below:</strong></p>\n";
$qoutadd .= "<input type=\"hidden\" name=\"w\" value=\"result\">\n";
$qoutadd .= "<input type=\"hidden\" name=\"s\" value=\"".$_GET['s']."\">\n";
$qoutadd .= "<input type=\"hidden\" name=\"q\" value=\"".$_GET['q']."\">\n";
$qoutadd .= "<select class=\"form-control\" id=\"subgroup\" name=\"subgroup\">\n";
$qoutadd .= "</select>\n";
$qoutadd .= "</form>\n";

$qout = "";
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
  $choices = $questions[$i]["choices"];
  if ($questions[$i]["choicesByUrl"]) { $choicesByUrl = $questions[$i]["choicesByUrl"]; }
  if ($questions[$i]["choicesByUrl"]["url"]) { $url = $questions[$i]["choicesByUrl"]["url"]; }
  if ($questions[$i]["choicesByUrl"]["path"]) { $path = $questions[$i]["choicesByUrl"]["path"]; }
  if ($questions[$i]["choicesByUrl"]["valueName"]) { $valueName = $questions[$i]["choicesByUrl"]["valueName"]; }
  if ($qrequired) { $add = " <sup>(*)</sup>"; } else { $add = ""; }

  if ($qname == $show) {
    $qe = iconize($qtype);
    $qout .= "<small class='pull-right' style='padding:10px 5px'>".$qe."</small>\n";
    $qout .= "      <h4 style=\"font-family:boon;font-size:140%\">".$qname.$add.": ".$qtitle."</h4>\n";
    if ($qvisibleIf) { $qout .= "      <p class=\"grey small\"><em>Only ask when <u>".$qvisibleIf."</u></em></p>\n"; } else { $qout .= "      <p class=\"grey small\"><em>Ask all respondents</em></p>\n"; }
    $qout .= "<div class=\"row\"><div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9\">\n";
    // $qout .= $qoutadd;
    if (($qtype == "radiogroup") || ($qtype == "radiogrouphtml")) {
      $qout .= "      <ul>\n";
      foreach ($choices as $k4 => $p4) {
        $choice_text = $p4['text']; $c_text[] = $p4['text'];
        $choice_code = $p4['value']; $c_code[] = $p4['value'];
        $qout .= "        <div class=\"radio\" style=\"font-family:boon;font-size:120%\"><label style=\"display:inline\"><input type=\"radio\" name=\"radiogroup\" style=\"position:relative;margin-right:10px\" disabled>$choice_text ($choice_code)</label></div>\n";
      }
      $qout .= "      </ul>\n";
    }
    else if (($qtype == "checkbox") || ($qtype == "checkboxhtml")) {
      $qout .= "      <ul>\n";
      foreach ($choices as $k5 => $p5) {
        $choice_text = $p5['text']; $c_text[] = $p5['text'];
        $choice_code = $p5['value']; $c_code[] = $p5['value'];
        $qout .= "        <div class=\"checkbox\" style=\"font-family:boon;font-size:120%\"><label style=\"display:inline\"><input type=\"checkbox\" style=\"position:relative;margin-right:10px\">$choice_text ($choice_code)</label></div>\n";
      }
      $qout .= "      </ul>\n";
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
        foreach ($choices as $k6 => $p6) {
          $choice_text = $p6['text']; $c_text[] = $p6['text'];
          $choice_code = $p6['value']; $c_code[] = $p6['value'];
          $qout .= "          <option>$choice_text ($choice_code)</option>\n";
        }
        $qout .= "        </select>\n";
        $qout .= "      </div></div>\n";
      }
    }
    else if ($qtype == "rating") {
      $mininumRateDescription = $questions[$i]["mininumRateDescription"];
      $maximumRateDescription = $questions[$i]["maximumRateDescription"];
      $qout .= "      <table class=\"table table-bordered bg-primary\" style=\"width:50%;font-family:boon;font-size:120%\">\n";
      $qout .= "        <tr>\n";
      $qout .= "          <td width=\"35%\" align=\"left\"><i class=\"pe-arrow-circle-left pe-lg\"></i> $mininumRateDescription (1)</td>\n";
      $qout .= "          <td width=\"10%\" align=\"center\">(2)</td>\n";
      $qout .= "          <td width=\"10%\" align=\"center\">(3)</td>\n";
      $qout .= "          <td width=\"10%\" align=\"center\">(4)</td>\n";
      $qout .= "          <td width=\"35%\" align=\"right\">$maximumRateDescription (5) <i class=\"pe-arrow-circle-right pe-lg\"></i></td>\n";
      $qout .= "        </tr>\n";
      $qout .= "      </table>\n";
      $qout .= "      <ul>\n";
      foreach ($choices as $k7 => $p7) {
        $choice_text = $p7['text']; $c_text[] = $p7['text'];
        $choice_code = $p7['value']; $c_code[] = $p7['value'];
        $qout .=         "<li>$choice_text ($choice_code)</li>\n";
      }
      $qout .= "      </ul>\n";
    }
    else if ($qtype == "comment") {
      $qout .= "      <textarea rows=\"5\" class=\"form-control\" disabled></textarea><br>\n";
    }
    else if ($qtype == "text") {
      $qout .= "      <input type=\"text\" class=\"form-control\" name=\"\" disabled=\"\">\n";
    }
    else if ($qtype == "multipletext") {
      $qout .= "      <table class=\"table\" style=\"font-family:boon\">\n";
      $qout .= "        <thead><tr class=\"bg-primary\">\n";
      $qout .= "          <th width=\"20%\">Brand</th>\n";
      $qout .= "          <th width=\"80%\">Response</th>\n";
      $qout .= "        </tr></thead>\n";
      $qout .= "      <tbody>\n";
      foreach ($questions[$i]["items"] as $k15 => $p15) {
        $row_text = $p15['name']; $ee_text[] = $p15['name'];
        $row_code = $p15['title']; $ee_code[] = $p15['title'];
        $qout .= "        <tr>\n";
        $qout .= "          <td align=\"right\">$row_text<br>$row_code</td>\n";
        $qout .= "          <td align=\"right\"><input type=\"text\" class=\"form-control\" disabled></td>\n";
        $qout .= "        </tr>";
      }
      $qout .= "        </tbody>\n";
      $qout .= "      </table>\n";
      $qout .= "      <br>\n";
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
      // print_r($nocols);
      foreach ($questions[$i]["columns"] as $k8 => $p8) {
        $column_text = $p8['text']; $c_text[] = $p8['text'];
        $column_code = $p8['value']; $c_code[] = $p8['value'];
        $column_link[] = $p8['text']." (".$p8['value'].")";
        $column_link1[] = $p8['value'];
        $qout .= "          <th width=\"$cwidth%\" style=\"text-align:right\">$column_text<br>$column_code</th>\n";
        $a++;
      }
      $qout .= "        </tr></thead>\n";
      $qout .= "      <tbody>\n";
      foreach ($questions[$i]["rows"] as $k9 => $p9) {
        $row_text = $p9['text']; $ee_text[] = $p9['text'];
        $row_code = $p9['value']; $ee_code[] = $p9['value'];
        $row_link[] = $p9['text']." (".$p9['value'].")";
        $qout .= "        <tr>\n";
        $qout .= "          <td align=\"right\">$row_text<br>$row_code</td>\n";
        for ($b=0; $b < $a; $b++) { $qout .= "          <td align=\"right\"><div class=\"radio\"><input type=\"radio\" name=\"$row_code\" style=\"position:relative;margin:0px\" disabled></div></td>\n"; }
        $qout .= "        </tr>";
      }
      $qout .= "        </tbody>\n";
      $qout .= "      </table>\n";
    }
    else if ($qtype == "matrixdropdown") {
      $qout .= "      <table class=\"table\" style=\"font-family:boon\">\n";
      $qout .= "        <thead><tr class=\"bg-primary\">\n";
      $qout .= "          <th width=\"20%\"></th>\n";
      $c = 0;
      foreach ($questions[$i]["columns"] as $k10 => $p10) {
        $column_name = $p10['name'];
        $column_title = $p10['title'];
        $qout .= "          <th style=\"text-align:right\">$column_name<br>($column_title)</th>\n";
        $c++;
      }
      $qout .= "        </tr></thead>\n";
      $cc = "          <select class=\"form-control input-sm\">";
      foreach ($questions[$i]["choices"] as $k11 => $p11) {
        $choice_text = $p11['text'];
        $choice_code = $p11['value'];
        $cc .= "            <option>$choice_text ($choice_code)</option>";
      }
      $cc .= "          </select>";
      $qout .= "        <tbody><tr>\n";
      foreach ($questions[$i]["rows"] as $k12 => $p12) {
        $row_text = $p12['text'];
        $row_code = $p12['value'];
        $qout .= "          <td align=\"right\">$row_text<br>($row_code)</td>\n";
        for ($d=0; $d < $c; $d++) { $qout .= "          <td align=\"right\">$cc</td>\n"; }
        $qout .= "        </tr>";
      }
      $qout .= "</tbody>\n";
      $qout .= "      </table>\n";
    }
    else if ($qtype == "barrating") {
      $qout .= "      <div class=\"row\"><div class=\"col-sm-6\" style=\"font-family:boon;font-size:120%\">\n";
      $qout .= "        <div class=\"br-wrapper br-theme-star\"><div class=\"br-widget\">\n";
      foreach ($choices as $k13 => $p13) {
        $choice_text = $p13; $c_text[] = $p13;
        $choice_code = $p13; $c_code[] = $p13;
        $qout .= "          <a data-rating-value=\"$choice_code\" data-rating-text=\"$choice_text\"></a>\n";
      }
      $qout .= "        </div></div>\n";
      $qout .= "      </div></div>\n";
    }
    else if ($qtype == "NPS") {
      $qout .= "      <div class=\"row\"><div class=\"col-sm-6\" style=\"font-family:boon;font-size:120%\">\n";
      $qout .= "        <div class=\"br-wrapper br-theme-square-2\"><div class=\"br-widget\">\n";
      foreach ($choices as $k14 => $p14) {
        $choice_text = $p14; $c_text[] = $p14;
        $choice_code = $p14; $c_code[] = $p14;
        $qout .= "          <a data-rating-value=\"$choice_code\" data-rating-text=\"$choice_text\">$choice_text</a>\n";
      }
      $qout .= "        </div></div>\n";
      $qout .= "      </div></div>\n";
    }
    $qout .= "</div><div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n";
    $qout .= $qoutadd;
    $qout .= "</div></div><br>\n";
    $qout .= "      <br>\n";
  }
}

if ($_GET['subgroup']) { $ss1 = html_entity_decode($_GET['subgroup']); }
$ss2 = explode(" ", $ss1);
$ss3 = explode("-", $ss2[0]);
$ss12 = str_replace('_', ' ', $ss3[0]);
$ss22 = str_replace('_', ' ', $ss3[1]);
// if ($ss3[0]) { $subgroupquestion = mb_convert_case($ss12, MB_CASE_TITLE, "UTF-8"); } else { $subgroupquestion = "all"; } //print_r($subgroupquestion);
// if ($ss3[1]) { $subgroupanswer = mb_convert_case($ss22, MB_CASE_TITLE, "UTF-8"); } else { $subgroupanswer = "all"; } //print_r($subgroupanswer);
if ($ss3[0]) { $subgroupquestion = $ss12; } else { $subgroupquestion = "all"; } //print_r($subgroupquestion);
if ($ss3[1]) { $subgroupanswer = $ss22; } else { $subgroupanswer = "all"; } //print_r($subgroupanswer);


// ------- Questionnaire navigator --------------------------------------------------------------------------

$perpage = "10";
$sid = $_GET["s"]; $qid = $_GET["q"];
$numberofquestions = count($questions);
for ($i=0; $i<$numberofquestions; $i++) {
  $qname = $questions[$i]["name"];
  if ($qname == $_GET['q']) { $here = floor($i/$perpage)*10; }
}
$navtab = "";
$navtab .= "<nav>\n";
$navtab .= "  <ul class=\"nav nav-tabs\">\n";
$questionlisting = "<div class=\"tab-content\">\n";
if (is_null($here) || $here == "0") {
  $navtab .= "    <li class=\"active\"><a data-toggle=\"tab\" href=\"#0\"><i class=\"pe-folder-open-o pe-fw\"></i> 0</a></li>\n";
  $questionlisting .= "  <div id=\"0\" class=\"tab-pane fade in active\">\n";
} else {
  $navtab .= "    <li><a data-toggle=\"tab\" href=\"#0\"><i class=\"pe-folder-o pe-fw\"></i> 0</a></li>\n";
  $questionlisting .= "  <div id=\"0\" class=\"tab-pane fade\">\n";
}
$questionlisting .= "    <ul class=\"progress-tracker progress-tracker--text progress-tracker--center\">\n";
for ($i=0; $i<$numberofquestions; $i++) {
  $thispage = $i+1;
  $qname = $questions[$i]["name"];
  if ($questions[$i]["html"]) { $qtitle = "HTML"; }
  else { $qtitle = $questions[$i]["title"]; }
  // $qtype = $questions[$i]["type"];
  if (($questions[$i]["type"] == "text") && ($questions[$i]["renderAs"] == "signaturepad")) { $qtype = $questions[$i]["renderAs"]; }
  else if (($questions[$i]["type"] == "text") && ($questions[$i]["inputType"] == "date")) { $qtype = $questions[$i]["inputType"]; }
  else if (($questions[$i]["type"] == "dropdown") && ($questions[$i]["renderAs"] == "barrating")) { $qtype = $questions[$i]["renderAs"]; }
  else if (($questions[$i]["type"] == "dropdown") && ($questions[$i]["renderAs"] == "NPS")) { $qtype = $questions[$i]["renderAs"]; }
  else { $qtype = $questions[$i]["type"]; }
  if ($qname == $_GET['q']) { $questionlisting .= "      <li id=\"listing-$i\" class=\"progress-step is-active\">\n"; }
  else { $questionlisting .= "      <li id=\"listing-$i\" class=\"progress-step\">\n"; }
  $questionlisting .= "        <span class=\"progress-marker\"></span>\n";
  if ($_GET['subgroup']) { $questionlisting .= "        <a href=\"/admin/?w=result&s=$sid&q=$qname&subgroup=$ss1\"><span class=\"progress-text\">\n"; }
  else { $questionlisting .= "        <a href=\"/admin/?w=result&s=$sid&q=$qname\"><span class=\"progress-text\">\n"; }
  $questionlisting .= "          <span class=\"progress-title\">$qname <small style='font-weight:normal'>[$qtype]</small></span>\n";
  $questionlisting .= "          <p style=\"font-family:boon;font-size:140%;margin-top:10px\">$qtitle</p>\n";
  $questionlisting .= "        </span></a>\n";
  $questionlisting .= "      </li>\n";
  $counter++;
  if ($thispage % $perpage == 0) {
    $questionlisting .= "    </ul>\n";
    $questionlisting .= "  </div>\n";
    if ($here == $thispage) {
      $navtab .= "    <li class=\"active\"><a data-toggle=\"tab\" href=\"#$thispage\"><i class=\"pe-folder-open-o pe-fw\"></i> $thispage</a></li>\n";
      $questionlisting .= "  <div id=\"$thispage\" class=\"tab-pane fade in active\">\n";
    } else {
      $navtab .= "    <li><a data-toggle=\"tab\" href=\"#$thispage\"><i class=\"pe-folder-o pe-fw\"></i> $thispage</a></li>\n";
      $questionlisting .= "  <div id=\"$thispage\" class=\"tab-pane fade\">\n";
    }
    $questionlisting .= "    <ul class=\"progress-tracker progress-tracker--text progress-tracker--center\">\n";
  }
}
$questionlisting .= "    </ul>\n";
$questionlisting .= "  </div></div>\n";
$navtab .= "  </ul>\n";
$navtab .= "</nav>\n";


// ------- Show data --------------------------------------------------------------------------
// echo $status;
if ($search == "yes") {
  if ($status >= 2) { $sql = "SELECT * FROM j_results WHERE data LIKE CONCAT('%', :query, '%') AND surveyid = :surveyid AND status = 2 ORDER BY submitted DESC"; }
  else if ($status == 1) { $sql = "SELECT * FROM j_results WHERE data LIKE CONCAT('%', :query, '%') AND surveyid = :surveyid AND status = 1 ORDER BY submitted DESC"; }
} else {
  if ($status >= 2) { $sql = "SELECT * FROM j_results WHERE surveyid = :surveyid AND status = 2 ORDER BY submitted DESC"; }
  else if ($status == 1) { $sql = "SELECT * FROM j_results WHERE surveyid = :surveyid AND status = 1 ORDER BY submitted DESC"; }
}

$q = $db->prepare($sql);
$q->bindValue(':surveyid', $surveyid, PDO::PARAM_INT);
// if ($search == "yes") { $q->bindValue(':query', "\"Region\":\"North (Chiang Mai)\"", PDO::PARAM_STR ); }
$q->execute();
$r = $q->fetchAll(PDO::FETCH_ASSOC);
$ee = $r;
$qq = $_GET['q'];
$cc = array_combine($pname, $ptype);
$cd = $cc[$qq]; //print_r($cd);
$bx = array_combine($pname, $ptitle);
$bdx = $bx[$qq]; //print_r($bdx);

$king = array();
for ($i=0; $i<count($ee); $i++) {
  $removeKeys = array('rd', 'email', 'ip', 'surveyid', 'status');
  foreach($removeKeys as $key) {
    unset($ee[$i][$key]);
  }
  $ee[$i]['data'] = json_decode($ee[$i]['data'], true);
  $ee[$i]['submitted'] = $ee[$i]['submitted'];
  // print_r($subgroupanswer);
  // print_r($ee[$i]['data'][$subgroupquestion]);
  if ((isset($ss3[0]) && ($ss3[0] != "all")) || (isset($ss3[1]) && ($ss3[1] != "all"))) { 
    
    if ($ee[$i]['data'][$subgroupquestion] == $subgroupanswer) { 
      array_push($king, $ee[$i]); 
    } 
  }
  else { array_push($king, $ee[$i]); }
}
// print_r($king);

$subgrouprecords = sizeof($king); //print_r($subgrouprecords."\n");
$totalrecords = sizeof($ee); //print_r($totalrecords);
if ($subgroupanswer != "all") { $records = $king; $basesize = $subgrouprecords; } else { $records = $ee; $basesize = $totalrecords; }

if (($cd == "checkbox") || ($cd == "checkboxhtml")) {
  $tableout4 = "  <table class=\"table\" style=\"font-family:boon\">\n";
  $tableout4 .= "    <thead>\n";
  $tableout4 .= "      <tr class=\"bg-primary\">\n";
  $tableout4 .= "        <th width=\"30%\">Thai</th>\n";
  $tableout4 .= "        <th width=\"30%\">English</th>\n";
  $tableout4 .= "        <th style=\"text-align:right\" width=\"20%\">Count</th>\n";
  $tableout4 .= "        <th style=\"text-align:right\" width=\"20%\">Percentage</th>\n";
  $tableout4 .= "      </tr>\n";
  $tableout4 .= "    </thead>\n";
  $tableout4 .= "    <tbody>\n";
  $k1 = array(); 
  for ($i=0; $i < count($records); $i++) { foreach ($records[$i]["data"][$qq] as $m => $v) { array_push($k1, $v); } }
  $cee = array_count_values($k1);
  if (json_decode(str_replace($c_code, $c_text, json_encode($cee)), true)) { $c = json_decode(str_replace($c_code, $c_text, json_encode($cee)), true); }
  // print_r($cee);
  $totalresponses = array_sum($c);
  $A = array_keys($c); $B = array_values($c);
  $C = count($c); $Aee = array_keys($cee); 
  $out = "";
  $out .= "    data.addRows($C);\n";
  for ($m=0; $m < count($c); $m++) {
    $BB[$m] = number_format(($B[$m]/$basesize)*100, 2);
    $m1 = $m+1; $m2 = $m1+1;
    $out .= "    data.setCell($m, 0, '$A[$m]');\n";
    $out .= "    data.setCell($m, 1, $B[$m]);\n";
    $out .= "    data.setCell($m, 2, $BB[$m]);\n";
    $tableout4 .= "      <tr>\n";
    $tableout4 .= "        <td align=\"left\">$A[$m]</td>\n";
    $tableout4 .= "        <td align=\"left\">$Aee[$m]</td>\n";
    $tableout4 .= "        <td align=\"right\">".$B[$m]."</td>\n";
    $tableout4 .= "        <td align=\"right\">".$BB[$m]."%</td>\n";
    $tableout4 .= "      </tr>\n";
  }
  $tableout4 .= "    </tbody>\n";
  $tableout4 .= "  </table><br>\n";
  $me = "/admin/?w=result&s=".$_GET['s']."&q=".$_GET['q'];
  if ($_GET['subgroup']) { $ext1 = "&subgroup=".$_GET['subgroup']; } else { $ext1 = ""; }
  if ($_GET['type']) { $ext2 = "&type=".$_GET['type']; } else { $ext2 = ""; }
  if ($_GET['size']) { $ext3 = "&size=".$_GET['size']; } else { $ext3 = ""; }
  $me = $me.$ext1.$ext2.$ext3;

  if ((empty($_GET['type'])) || ($_GET['type'] == "bar-H")) { $menu = "    <p class=\"text-center\"><strong>Choose the chart type [</strong> <u>Bar Horizontal</u> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=bar-V")."\">Bar Vertical</a> <strong>]</strong></p><br>\n"; }
  else if ($_GET['type'] == "bar-V") { $menu = "    <p class=\"text-center\"><strong>Choose the chart type [</strong> <a href=\"".htmlspecialchars($me."&type=bar-H")."\">Bar Horizontal</a> <strong>:</strong> <u>Bar Vertical</u> <strong>]</strong></p><br>\n"; }
}
else if (($cd == "file") || ($cd == "signaturepad")) {
  $me = "/admin/?w=result&s=".$_GET['s']."&q=".$_GET['q'];
  if ($_GET['subgroup']) { $ext1 = "&subgroup=".$_GET['subgroup']; } else { $ext1 = ""; }
  if ($_GET['type']) { $ext2 = "&type=".$_GET['type']; } else { $ext2 = ""; }
  if ($_GET['size']) { $ext3 = "&size=".$_GET['size']; } else { $ext3 = ""; }
  $me = $me.$ext1.$ext2.$ext3;

  if ($_GET['p']) { $p = $_GET['p']; }
  if ($p == '') { $p = "1"; }
  if (empty($start)) { $start = 0; }
  if (empty($limit)) { $limit = 20; }
  if ($p) { $start = ($p-1) * $limit; }
  $rowss = count($records);

  foreach ($records as $k1 => $p1) { $jj[] = $p1; }

  for ($i=0; $i<count($records); $i++) { $k[] = $jj[$i]["data"][$qq]; }
  $c = array_count_values($k); arsort($c); //print_r($c);
  $totalresponses = count(array_filter($k)); //print_r($totalresponses);
  $total = ceil($totalresponses/$limit);

  $to_record = $start + $limit;
  if ($to_record > $totalresponses) { $to_record = $totalresponses; }
  $from_record = $start + 1;

  for ($i=$start; $i<$to_record; $i++) { $kk[] = $jj[$i]["data"][$qq]; }


  // ############# Output for file upload ############# //

  $pagination = "    <nav class=\"pagination-centered\">\n";
  $pagination .= "      <ul class=\"pagination\">\n";
  if ($p > 1) { $previous = $p-1; $pagination .= "        <li><a class=\"btn btn-sm\" role=\"button\" href=\"".$me."&p=".$previous."\">&laquo;</a></li>\n"; }
  else { $pagination .= "        <li class=\"disabled\"><a class=\"btn btn-sm\" role=\"button\" href=\"\">&laquo;</a></li>\n"; }
  for ($i=1; $i<=$total; $i++) {
    if ($i == $p) { $pagination .= "        <li class=\"active\"><a class=\"btn btn-sm\" role=\"button\" href=\"".$me."&p=".$i."\">".$i."</a></li>\n"; }
    else { $pagination .= "        <li><a class=\"btn btn-sm\" role=\"button\" href=\"".$me."&p=".$i."\">".$i."</a></li>\n"; }
  }
  if ($p != $total) { $next = $p+1; $pagination .= "        <li><a class=\"btn btn-sm\" role=\"button\" href=\"".$me."&p=".$next."\">&raquo;</a></li>\n"; }
  else { $pagination .= "        <li class=\"disabled\"><a class=\"btn btn-sm\" role=\"button\" href=\"\">&raquo;</a></li>\n"; }
  $pagination .= "      </ul>\n";
  $pagination .= "    </nav>\n";

  $basedir = "../members/assets/upload/".$_GET['s']."/";
  $urldir = "/members/assets/upload/".$_GET['s']."/";
  if (empty($_GET['size']) || ($_GET['size'] == "S")) {
    $outdirect = "    <p class=\"text-center\"><strong>Choose the preview size [</strong> <u>small</u> <strong>:</strong> <a href=\"".htmlspecialchars($me."&size=M")."\">medium</a> <strong>:</strong> <a href=\"".htmlspecialchars($me."&size=L")."\">large</a> <strong>]</strong></p>\n";
    $bb = 0;
    $outdirect .= $pagination."    <br>\n";
    $outdirect .= "    <div class=\"pull-right small grey\"><small>Note: Some pictures may appear to be up-side-down - this is<br>driven by a different rotation setting on respondent's device</small></div>\n";
    $outdirect .= "    <p>Found $totalresponses records in our database (showing results $from_record to $to_record)</p>\n";
    $outdirect .= "    <table>\n";
    $outdirect .= "      <tr>\n";
    foreach ($kk as $A => $B) {
      if ($B) {
        // print_r($B);
        if (file_exists($basedir.'full/'.$B)) {
          $mydir = $basedir.'resized_S/';
          if (!is_dir($mydir)) { mkdir($mydir); }
          if (!file_exists($mydir.$B)) {
            $R = new resize($basedir.'full/'.$B);
            $R->resizeImage(180, 180, 'auto');
            $R->saveImage($mydir.$B, 80);
          }
        }
        list($surveyid, $rid, $date, $random) = explode("_", $B);
        $year = substr($date, 0, 4); $month = substr($date, 4, 2); $month = fullmonth($month); $day = substr($date, 6, 2);
        $footer = "Posted since ".$day." ".$month." ".$year;
        $outdirect .= "        <td style=\"text-align:center\"><a href=\"".$urldir."full/".$B."\" title=\"Click to open a full size image in a new window\" data-gallery=\"".$_GET['s']."\" data-toggle=\"lightbox\" data-title=\"Image upload for $project\" data-footer=\"$footer\"><img src=\"".$urldir."resized_S/".$B."\" class=\"thumbnail img-responsive\"></a></td>\n";
        $bb++;
        if (($bb % 5 == 0) && ($bb > 0)) { $outdirect .= "      </tr>\n      <tr>\n"; }
      }
    }
    $outdirect .= "      </tr>\n";
    $outdirect .= "    </table>\n";
    $outdirect .= $pagination."\n<br>\n";
  } else if ($_GET['size'] == "M") {
    $outdirect = "    <p class=\"text-center\"><strong>Choose the preview size [</strong> <a href=\"".htmlspecialchars($me."&size=S")."\">small</a> <strong>:</strong> <u>medium</u> <strong>:</strong> <a href=\"".htmlspecialchars($me."&size=L")."\">large</a> <strong>]</strong></p><br>\n";
    $bb = 0;
    $outdirect .= $pagination."    <br>";
    $outdirect .= "    <p>Found $totalresponses records in our database (showing results $from_record to $to_record)</p>\n";
    $outdirect .= "    <table>\n";
    $outdirect .= "      <tr>\n";
    foreach ($kk as $A => $B) {
      if ($B) {
        if (file_exists($basedir.'full/'.$B)) {
          $mydir = $basedir.'resized_M/';
          if (!is_dir($mydir)) { mkdir($mydir); }
          if (!file_exists($mydir.$B)) {
            $R = new resize($basedir.'full/'.$B);
            $R->resizeImage(300, 300, 'auto');
            $R->saveImage($mydir.$B, 80);
          }
        }
        list($surveyid, $rid, $date, $random) = explode("_", $B);
        $year = substr($date, 0, 4); $month = substr($date, 4, 2); $day = substr($date, 6, 2);
        $footer = "Posted since ".$day."/".$month."/".$year;
        $outdirect .= "        <td style=\"text-align:center\"><a href=\"".$urldir."full/".$B."\" title=\"Click to open a full size image in a new window\" data-gallery=\"".$_GET['s']."\" data-toggle=\"lightbox\" data-title=\"Image upload for $project\" data-footer=\"$footer\"><img src=\"".$urldir."resized_M/".$B."\" class=\"thumbnail img-responsive\"></a></td>\n";
        $bb++;
        if (($bb % 3 == 0) && ($bb > 0)) { $outdirect .= "    </tr>\n      <tr>\n"; }
      }
    }
    $outdirect .= "      </tr>\n";
    $outdirect .= "    </table>\n";
    $outdirect .= $pagination."    <br>\n";
  } else if ($_GET['size'] == "L") {
    $outdirect = "    <p class=\"text-center\"><strong>Choose the preview size [</strong> <a href=\"".htmlspecialchars($me."&size=S")."\">small</a> <strong>:</strong> <a href=\"".htmlspecialchars($me."&size=M")."\">medium</a> <strong>:</strong> <u>large</u> <strong>]</strong></p><br>\n";
    $bb = 0;
    $outdirect .= $pagination."\n<br>\n";
    $outdirect .= "    <p>Found $totalresponses records in our database (showing results $from_record to $to_record)</p>\n";
    $outdirect .= "    <table>\n";
    $outdirect .= "      <tr>\n";
    foreach ($kk as $A => $B) {
      if ($B) {
        if (file_exists($basedir.'full/'.$B)) {
          $mydir = $basedir.'resized_L/';
          if (!is_dir($mydir)) { mkdir($mydir); }
          if (!file_exists($mydir.$B)) {
            $R = new resize($basedir.'full/'.$B);
            $R->resizeImage(450, 450, 'auto');
            $R->saveImage($mydir.$B, 80);
          }
        }
        list($surveyid, $rid, $date, $random) = explode("_", $B);
        $year = substr($date, 0, 4); $month = substr($date, 4, 2); $day = substr($date, 6, 2);
        $footer = "Posted since ".$day."/".$month."/".$year;
        $outdirect .= "        <td style=\"text-align:center\"><a href=\"".$urldir."full/".$B."\" title=\"Click to open a full size image in a new window\" data-gallery=\"".$_GET['s']."\" data-toggle=\"lightbox\" data-title=\"Image upload for $project\" data-footer=\"$footer\"><img src=\"".$urldir."resized_L/".$B."\" class=\"thumbnail img-responsive\"></a></td>\n";
        $bb++;
        if (($bb % 2 == 0) && ($bb > 0)) { $outdirect .= "    </tr>\n      <tr>\n"; }
      }
    }
    $outdirect .= "      </tr>\n";
    $outdirect .= "    </table>\n";
    $outdirect .= $pagination."\n<br>\n";
  }
}
else if (($cd == "radiogroup") || ($cd == "radiogrouphtml") || ($cd == "dropdown") || ($cd == "barrating") || ($cd == "NPS") || ($cd == "rating") || (($cd == "multipletext") && (preg_match('/t10/i', $_GET['q']) == 1))) {
  $k = array(); $c = array();
  $tableout3 = "";
  if (($cd == "radiogroup") || ($cd == "radiogrouphtml") || ($cd == "dropdown") || ($cd == "barrating") || ($cd == "NPS") || ($cd == "rating")) {
    foreach ($records as $k1 => $p1) { $jj[] = $p1; }
    for ($i=0; $i < count($jj); $i++) { $k[] = $jj[$i]["data"][$qq]; }
    $cee = array_count_values($k); 
  } else if (($cd == "multipletext") && (preg_match('/t10/i', $_GET['q']) == 1)) {
    $mk1 = array();
    for ($i=0; $i < count($records); $i++) { array_push($mk1, $records[$i]["data"][$qq]); }
    foreach ($mk1 as $n => $o) { foreach ($o as $kn => $ko) { $c[$kn] += $ko; } }
  }
  if (json_decode(str_replace($c_code, $c_text, json_encode($cee)), true)) { $c = json_decode(str_replace($c_code, $c_text, json_encode($cee)), true); }
  $totalresponses = array_sum($c); //print_r($totalresponses);
  $A = array_keys($c); $B = array_values($c);
  $C = count($c); $Aee = array_keys($cee); 
  $tableout3 .= "  <table class=\"table\" style=\"font-family:boon\">\n";
  $tableout3 .= "    <thead>\n";
  $tableout3 .= "      <tr class=\"bg-primary\">\n";
  $tableout3 .= "        <th width=\"30%\">Thai</th>\n";
  $tableout3 .= "        <th width=\"30%\">English</th>\n";
  $tableout3 .= "        <th style=\"text-align:right\" width=\"20%\">Count</th>\n";
  $tableout3 .= "        <th style=\"text-align:right\" width=\"20%\">Percentage</th>\n";
  $tableout3 .= "      </tr>\n";
  $tableout3 .= "    </thead>\n";
  $tableout3 .= "    <tbody>\n";
  $out = "";
  $out .= "    data.addRows($C);\n";
  for ($m=0; $m < count($c); $m++) {
    if (($cd == "radiogroup") || ($cd == "radiogrouphtml") || ($cd == "dropdown") || ($cd == "barrating") || ($cd == "NPS") || ($cd == "rating")) { $BB[$m] = number_format(($B[$m]/$basesize)*100, 2); }
    else if (($cd == "multipletext") && (preg_match('/t10/i', $_GET['q']) == 1)) { $BB[$m] = number_format(($B[$m]/$totalresponses)*100, 2); }
    $m1 = $m+1; $m2 = $m1+1;
    if ($A[$m] == "") { $zA = 0; } else { $zA = addslashes($A[$m]); }
    if ($Aee[$m] == "") { $zAee = 0; } else { $zAee = addslashes($Aee[$m]); }
    if ($B[$m] == "") { $zB = 0; } else { $zB = addslashes($B[$m]); }
    if ($BB[$m] == "") { $zC = 0; } else { $zC = addslashes($BB[$m]); }
    $out .= "    data.setCell($m, 0, '$zA');\n";
    $out .= "    data.setCell($m, 1, $zB);\n";
    $out .= "    data.setCell($m, 2, $zC);\n";
    $tableout3 .= "      <tr>\n";
    $tableout3 .= "        <td align=\"left\">$zA</td>\n";
    $tableout3 .= "        <td align=\"left\">$zAee</td>\n";
    $tableout3 .= "        <td align=\"right\">".$zB."</td>\n";
    $tableout3 .= "        <td align=\"right\">".$zC."%</td>\n";
    $tableout3 .= "      </tr>\n";
  }
  $tableout3 .= "    </tbody>\n";
  $tableout3 .= "  </table><br>\n";
  $me = "/admin/?w=result&s=".$_GET['s']."&q=".$_GET['q'];
  if ($_GET['subgroup']) { $ext1 = "&subgroup=".$_GET['subgroup']; } else { $ext1 = ""; }
  if ($_GET['type']) { $ext2 = "&type=".$_GET['type']; } else { $ext2 = ""; }
  if ($_GET['size']) { $ext3 = "&size=".$_GET['size']; } else { $ext3 = ""; }
  $me = $me.$ext1.$ext2.$ext3;
  if ((empty($_GET['type'])) || ($_GET['type'] == "pie")) { $menu = "<p class=\"text-center\"><strong>Choose the chart type [</strong> <u>Pie</u> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=donut")."\">Donut</a> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=bar-H")."\">Bar Horizontal</a> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=bar-V")."\">Bar Vertical</a> <strong>]</strong></p><br>\n"; }
  else if ($_GET['type'] == "donut") { $menu = "<p class=\"text-center\"><strong>Choose the chart type [</strong> <a href=\"".htmlspecialchars($me."&type=pie")."\">Pie</a> <strong>:</strong> <u>Donut</u> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=bar-H")."\">Bar Horizontal</a> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=bar-V")."\">Bar Vertical</a> <strong>]</strong></p><br>\n"; }
  else if ($_GET['type'] == "bar-H") { $menu = "<p class=\"text-center\"><strong>Choose the chart type [</strong> <a href=\"".htmlspecialchars($me."&type=pie")."\">Pie</a> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=donut")."\">Donut</a> <strong>:</strong> <u>Bar Horizontal</u> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=bar-V")."\">Bar Vertical</a> <strong>]</strong></p><br>\n"; }
  else if ($_GET['type'] == "bar-V") { $menu = "<p class=\"text-center\"><strong>Choose the chart type [</strong> <a href=\"".htmlspecialchars($me."&type=pie")."\">Pie</a> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=donut")."\">Donut</a> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=bar-H")."\">Bar Horizontal</a> <strong>:</strong> <u>Bar Vertical</u> <strong>]</strong></p><br>\n"; }
}
else if (($cd == "text" || $cd == "comment")) {
  $tableout2 = "  <table class=\"table\" style=\"font-family:boon\">\n";
  $tableout2 .= "    <thead>\n";
  $tableout2 .= "      <tr class=\"bg-primary\">\n";
  $tableout2 .= "        <th width=\"60%\">Verbatim</th>\n";
  $tableout2 .= "        <th style=\"text-align:right\" width=\"20%\">Count</th>\n";
  $tableout2 .= "        <th style=\"text-align:right\" width=\"20%\">Percentage</th>\n";
  $tableout2 .= "      </tr>\n";
  $tableout2 .= "    </thead>\n";
  $tableout2 .= "    <tbody>\n";
  foreach ($records as $k1 => $p1) { $jj[] = $p1; }
  for ($i=0; $i < count($jj); $i++) { $k[] = $jj[$i]["data"][$qq]; }
  $c = array_count_values($k);
  arsort($c);
  $totalresponses = array_sum($c);
  $A = array_keys($c); $B = array_values($c); //print_r($c);
  $C = count($c);
  $vdata = "[";
  $out = "";
  $out .= "    data.addRows($C);\n";
  for ($m=0; $m < count($c); $m++) {
    $newAM = trim(preg_replace('/\s+/', ' ', $A[$m]));
    $BB[$m] = number_format(($B[$m]/$basesize)*100, 2);
    $m1 = $m+1; $m2 = $m1+1;
    $out .= "    data.setCell($m, 0, '$newAM');\n";
    $out .= "    data.setCell($m, 1, $B[$m]);\n";
    $out .= "    data.setCell($m, 2, $BB[$m]);\n";
    $tableout2 .= "      <tr>\n";
    $tableout2 .= "        <td align=\"left\">$newAM</td>\n";
    $tableout2 .= "        <td align=\"right\">".$B[$m]."</td>\n";
    $tableout2 .= "        <td align=\"right\">".$BB[$m]."%</td>\n";
    $tableout2 .= "      </tr>\n";
    $vdata .= "'".$newAM."', ";
  }
  $vdata .= "]";
  $tableout2 .= "    </tbody>\n";
  $tableout2 .= "  </table>\n";
  $me = "/admin/?w=result&s=".$_GET['s']."&q=".$_GET['q'];
  if ($_GET['subgroup']) { $ext1 = "&subgroup=".$_GET['subgroup']; } else { $ext1 = ""; }
  if ($_GET['type']) { $ext2 = "&type=".$_GET['type']; } else { $ext2 = ""; }
  if ($_GET['size']) { $ext3 = "&size=".$_GET['size']; } else { $ext3 = ""; }
  $me = $me.$ext1.$ext2.$ext3;

  if ((empty($_GET['type'])) || ($_GET['type'] == "bar-H")) { $menu = "    <p class=\"text-center\"><strong>Choose the chart type [</strong> <u>Bar Horizontal</u> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=bar-V")."\">Bar Vertical</a> <strong>]</strong></p><br>\n"; }
  else if ($_GET['type'] == "bar-V") { $menu = "    <p class=\"text-center\"><strong>Choose the chart type [</strong> <a href=\"".htmlspecialchars($me."&type=bar-H")."\">Bar Horizontal</a> <strong>:</strong> <u>Bar Vertical</u> <strong>]</strong></p><br>\n"; }
}
else if ($cd == "matrix") {
  for ($i=0; $i < count($records); $i++) { foreach ($records[$i]["data"][$qq] as $m => $v) { $new[$m][] = $v;} }
  foreach ($ee_code as $val) {
    $da[] = $val;
    $rrr = count($new[$val]); //print_r($rrr);
    $average[] = array_sum($new[$val]) / $rrr;
    $db = $new[$da];
  }
  $db = array();
  foreach ($new as $kk => $vv) {
    array_push($db, $kk);
    $yy = array_count_values($vv); krsort($yy);
    $dc[] = $yy;
  }
  $D = count($dc);
  foreach ($dc as $q => $r) {
    $dd[] = percentile($dc[$q]);
    $dd1[] = $dc[$q];
    $de[] = array_sum($r);
  }
  $totalresponses = array_sum($de);
  // print_r($totalresponses);
  $c1 = array_combine($db, $dd); // percentage
  $c1a = array_combine($db, $dc); // absolute
  $c2 = array_combine($db, $average);
  // print_r($c1a);
  $ccmax = count($column_link); //print_r($ccmax);

  if ($ccmax == 2) { $color = "colors: ['#00C851', '#007E33', "; $series = "series: { 0: { targetAxisIndex: 0 }, 1: { targetAxisIndex: 0 }, 2: { targetAxisIndex: 1 }, type: 'line' } },\n"; }
  else if ($ccmax == 3) { $color = "colors: ['#AAAAAA', '#00C851', '#007E33', "; $series = "series: { 0: { targetAxisIndex: 0 }, 1: { targetAxisIndex: 0 }, 2: { targetAxisIndex: 0 }, 3: { targetAxisIndex: 1, type: 'line' } },\n"; }
  else if ($ccmax == 4) { $color = "colors: ['#CC0000', '#FF4444', '#00C851', '#007E33', "; $series = "series: { 0: { targetAxisIndex: 0 }, 1: { targetAxisIndex: 0 }, 2: { targetAxisIndex: 0 }, 3: { targetAxisIndex: 0 }, 4: { targetAxisIndex: 1, type: 'line' } },\n"; }
  else if ($ccmax == 5) { $color = "colors: ['#CC0000', '#FF4444', '#AAAAAA', '#00C851', '#007E33', "; $series = "series: { 0: { targetAxisIndex: 0 }, 1: { targetAxisIndex: 0 }, 2: { targetAxisIndex: 0 }, 3: { targetAxisIndex: 0 }, 4: { targetAxisIndex: 0 }, 5: { targetAxisIndex: 1, type: 'line' } },\n"; }
  else if ($ccmax == 6) { $color = "colors: ['#820000', '#CC0000', '#FF4444', '#AAAAAA', '#00C851', '#007E33', "; $series = "series: { 0: { targetAxisIndex: 0 }, 1: { targetAxisIndex: 0 }, 2: { targetAxisIndex: 0 }, 3: { targetAxisIndex: 0 }, 4: { targetAxisIndex: 0 }, 5: { targetAxisIndex: 0 }, 6: { targetAxisIndex: 1, type: 'line' } },\n"; }
  else if ($ccmax == 7) { $color = "colors: ['#530000', '#820000', '#CC0000', '#FF4444', '#AAAAAA', '#00C851', '#007E33', "; $series = "series: { 0: { targetAxisIndex: 0 }, 1: { targetAxisIndex: 0 }, 2: { targetAxisIndex: 0 }, 3: { targetAxisIndex: 0 }, 4: { targetAxisIndex: 0 }, 5: { targetAxisIndex: 0 }, 6: { targetAxisIndex: 0 }, 7: { targetAxisIndex: 1, type: 'line' } },\n"; }
  else if ($ccmax == 8) { $color = "colors: ['#350000', '#530000', '#820000', '#CC0000', '#FF4444', '#AAAAAA', '#00C851', '#007E33', "; $series = "series: { 0: { targetAxisIndex: 0 }, 1: { targetAxisIndex: 0 }, 2: { targetAxisIndex: 0 }, 3: { targetAxisIndex: 0 }, 4: { targetAxisIndex: 0 }, 5: { targetAxisIndex: 0 }, 6: { targetAxisIndex: 0 }, 7: { targetAxisIndex: 0 }, 8: { targetAxisIndex: 1, type: 'line' } },\n"; }
  else if ($ccmax == 9) { $color = "colors: ['#220000', '#350000', '#530000', '#820000', '#CC0000', '#FF4444', '#AAAAAA', '#00C851', '#007E33', "; $series = "series: { 0: { targetAxisIndex: 0 }, 1: { targetAxisIndex: 0 }, 2: { targetAxisIndex: 0 }, 3: { targetAxisIndex: 0 }, 4: { targetAxisIndex: 0 }, 5: { targetAxisIndex: 0 }, 6: { targetAxisIndex: 0 }, 7: { targetAxisIndex: 0 }, 8: { targetAxisIndex: 0 }, 9: { targetAxisIndex: 1, type: 'line' } },\n"; }
  else if ($ccmax == 10) { $color = "colors: ['#160000', '#220000', '#350000', '#530000', '#820000', '#CC0000', '#FF4444', '#AAAAAA', '#00C851', '#007E33', "; $series = "series: { 0: { targetAxisIndex: 0 }, 1: { targetAxisIndex: 0 }, 2: { targetAxisIndex: 0 }, 3: { targetAxisIndex: 0 }, 4: { targetAxisIndex: 0 }, 5: { targetAxisIndex: 0 }, 6: { targetAxisIndex: 0 }, 7: { targetAxisIndex: 0 }, 8: { targetAxisIndex: 0 }, 9: { targetAxisIndex: 0 }, 10: { targetAxisIndex: 1, type: 'line' } },\n"; }
  $tableout1A = "<h5>This table showws score in percentage</h5>\n";
  $tableout1A .= "  <table class=\"table\" style=\"font-family:boon\">\n";
  $tableout1A .= "    <thead>\n";
  $tableout1A .= "      <tr class=\"bg-primary\">\n";
  $tableout1A .= "        <th width=\"20%\"></th>\n";
  $tableout1B = "<h5>This table showws score in absolute numbers</h5>\n";
  $tableout1B .= "  <table class=\"table\" style=\"font-family:boon\">\n";
  $tableout1B .= "    <thead>\n";
  $tableout1B .= "      <tr class=\"bg-info\">\n";
  $tableout1B .= "        <th width=\"20%\"></th>\n";

  if ((empty($_GET['type'])) || ($_GET['type'] == "bar-H-mean") || ($_GET['type'] == "bar-V-mean")) { $cwidth = 80/($ccmax+1); } else { $cwidth = 80/($ccmax); }
  $out = "[ 'Attribute', ";
  foreach ($column_link as $a) { $out .= "{ label: '".$a."', type: 'number' }, "; } // label
  foreach ($column_link1 as $a1) { 
    $tableout1A .= "        <th style=\"text-align:right\" width=\"$cwidth%\">$a1 (%)</th>\n";
    $tableout1B .= "        <th style=\"text-align:right\" width=\"$cwidth%\">$a1 (%)</th>\n";
  } // label
  if ((empty($_GET['type'])) || ($_GET['type'] == "bar-H-mean") || ($_GET['type'] == "bar-V-mean")) { 
    $out .= " { label: 'Mean', type: 'number' } ],\n"; 
    $color .= "'#000000' ],\n"; 
    $tableout1A .= "        <th style=\"text-align:right\" width=\"$cwidth%\">Mean</th>\n"; 
    $tableout1B .= "        <th style=\"text-align:right\" width=\"$cwidth%\">Mean</th>\n"; 
  } else { 
    $out .= " ],\n"; 
    $color .= " ],\n"; 
  }
  $tableout1A .= "      </tr>\n";
  $tableout1A .= "    </thead>\n";
  $tableout1A .= "    <tbody>\n";
  $tableout1B .= "      </tr>\n";
  $tableout1B .= "    </thead>\n";
  $tableout1B .= "    <tbody>\n";
  $numberofattributes = count($ee_code);
  foreach ($ee_code as $b) {
    // print_r($b);
    if (json_decode(str_replace($ee_code, $ee_text, json_encode($b)), true)) { $bb = json_decode(str_replace($ee_code, $ee_text, json_encode($b)), true); }
    $bb1 = json_decode(json_encode($b), true);
    $out .= "      [ '".($bb)."', ";
    $tableout1A .= "      <tr>\n";
    $tableout1A .= "        <td align=\"right\">$bb1</td>\n";
    $tableout1B .= "      <tr>\n";
    $tableout1B .= "        <td align=\"right\">$bb1</td>\n";
    $jj = array(); $jjj = array();
    foreach ($c_code as $c) {
      // print_r($c);
      // foreach ($c1 as $CA => $CB) {
      //   print_r($CB);
      // }
      if (empty($c1[$b][$c])) { $ccc = 0; } else { $ccc = round($c1[$b][$c]); }
      if (empty($c1a[$b][$c])) { $ccc1 = 0; } else { $ccc1 = round($c1a[$b][$c]); }
      array_push($jj, $c1[$b][$c]);
      array_push($jja, $c1[$b][$c]);
      $out .= $ccc.", ";
      $tableout1A .= "        <td align=\"right\">".$ccc."%</td>\n";
      $tableout1B .= "        <td align=\"right\">".$ccc1."</td>\n";
    } // data for each scale
    $mean = number_format(meanCalculation($jj), 2); //print_r($mean);
    if ((empty($_GET['type'])) || ($_GET['type'] == "bar-H-mean") || ($_GET['type'] == "bar-V-mean")) { 
      $out .= " $mean ],\n"; 
      $tableout1A .= "        <td align=\"right\"><strong>".$mean."</strong></td>\n"; 
      $tableout1B .= "        <td align=\"right\"><strong>".$mean."</strong></td>\n"; 
    } else { 
      $out .= " ],\n"; 
    }
    $tableout1A .= "      </tr>\n";
    $tableout1B .= "      </tr>\n";
  }
  $tableout1A .= "    </tbody>\n";
  $tableout1A .= "  </table>\n";
  $tableout1B .= "    </tbody>\n";
  $tableout1B .= "  </table>\n";
  $me = "/admin/?w=result&s=".$_GET['s']."&q=".$_GET['q'];
  if ($_GET['subgroup']) { $ext1 = "&subgroup=".$_GET['subgroup']; } else { $ext1 = ""; }
  if ($_GET['type']) { $ext2 = "&type=".$_GET['type']; } else { $ext2 = ""; }
  if ($_GET['size']) { $ext3 = "&size=".$_GET['size']; } else { $ext3 = ""; }
  $me = $me.$ext1.$ext2.$ext3;

  if ($ccmax == 5) {
    if ((empty($_GET['type'])) || ($_GET['type'] == "bar-V-mean")) { $menu = "<p class=\"text-center\"><strong>Choose the chart type [</strong> <a href=\"".htmlspecialchars($me."&type=bar-H")."\">Bar Horizontal</a> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=bar-H-mean")."\">Bar Horizontal with Mean</a> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=bar-V")."\">Bar Vertical</a> <strong>:</strong> <u>Bar Vertical with Mean</u> <strong>]</strong></p><br>\n"; }
    else if ($_GET['type'] == "bar-H-mean") { $menu = "<p class=\"text-center\"><strong>Choose the chart type [</strong> <a href=\"".htmlspecialchars($me."&type=bar-H")."\">Bar Horizontal</a> <strong>:</strong> <u>Bar Horizontal with Mean</u> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=bar-V")."\">Bar Vertical</a> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=bar-V-mean")."\">Bar Vertical with Mean</a> <strong>]</strong></p><br>\n"; }
    else if ($_GET['type'] == "bar-V") { $menu = "<p class=\"text-center\"><strong>Choose the chart type [</strong> <a href=\"".htmlspecialchars($me."&type=bar-H")."\">Bar Horizontal</a> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=bar-H-mean")."\">Bar Horizontal with Mean</a> <strong>:</strong> <u>Bar Vertical</u> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=bar-V-mean")."\">Bar Vertical with Mean</a> <strong>]</strong></p><br>\n"; }
    else if ($_GET['type'] == "bar-H") { $menu = "<p class=\"text-center\"><strong>Choose the chart type [</strong> <u>Bar Horizontal</u> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=bar-H-mean")."\">Bar Horizontal with Mean</a> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=bar-V")."\">Bar Vertical</a> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=bar-V-mean")."\">Bar Vertical with Mean</a> <strong>]</strong></p><br>\n"; }
  } else {
    if ((empty($_GET['type'])) || ($_GET['type'] == "bar-H")) { $menu = "<p class=\"text-center\"><strong>Choose the chart type [</strong> <u>Bar Horizontal</u> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=bar-V")."\">Bar Vertical</a> <strong>]</strong></p><br>\n"; }
    else if ($_GET['type'] == "bar-V") { $menu = "<p class=\"text-center\"><strong>Choose the chart type [</strong> <a href=\"".htmlspecialchars($me."&type=bar-H")."\">Bar Horizontal</a> <strong>:</strong> <u>Bar Vertical</u> <strong>]</strong></p><br>\n"; }
  }
}


// ------- Output --------------------------------------------------------------------------

$title = "Survey result";
// $getcsv = "/admin/?w=result&s=".$_GET['s']."&download=csv";
// $getjson = "/admin/?w=result&s=".$_GET['s']."&download=json";
// $getxls = "/admin/?w=result&s=".$_GET['s']."&download=xls";
pageHeader($title);
echo "<h2>$title</h2>\n";
echo "<p class=\"introtext\">This is a tool that helps you view the survey result whenever you need. Result is generated by pulling the data from our server in <em>real time</em>.</p>\n";
echo "<p class=\"introtext\">Although several question types have an option to show results in many different ways (e.g. a few chart types, tabulation, ability to sort data, etc.), there is still a limitation for a certain type of question such as open-ends.</p>\n";
echo "<hr>\n";
echo "<div class=\"row\">\n";
echo "  <div class=\"col-sm-9\">\n";
echo "    <h3>Project $project</h3>\n";
if ($numberofquestions == "1") { $qphrase = "question"; } else if ($numberofquestions > "1") { $qphrase = "questions"; }
echo "    <p>This survey has a total of <strong>$numberofquestions $qphrase</strong> as shown below. Click one of the below questions to see its real-time results.</p>\n";
echo "    <p>Should you need to see more details such as subgroup analysis, you would need to download the data file and process it with your data processing team in a more traditional way.</p>\n";
echo "  </div>\n";
echo "  <div class=\"col-sm-3\" style=\"padding:10px;margin-top:20px\">\n";
echo "    <div class=\"list-group small\">\n";
echo "      <li class=\"list-group-item list-group-item-info\"><strong><i class=\"pe-file-o pe-fw\"></i> Menu</strong></li>\n";
echo "      <a href=\"$questionnaire\" class=\"list-group-item\"><i class=\"pe-file-o pe-fw\"></i> View the original questinnaire online</a>\n";
echo "      <a href=\"$result\" class=\"list-group-item\"><i class=\"pe-line-chart pe-fw\"></i> View real-time results in a graphical interface</a>\n";
echo "      <a href=\"$subgroupsetting\" class=\"list-group-item\"><i class=\"pe-cog pe-fw\"></i> Subgroup setting</a>\n";
echo "      <a class=\"list-group-item exceldownload\"><i class=\"pe-download pe-fw\"></i> Download all data for all questions in one CSV (Spreadsheet format) file</a>\n";
echo "    </div>\n";
echo "  </div>\n";
echo "</div><br>\n";

if (($_GET['m'] == "1") || ($m == 1)) { echo "<div id=\"showalert-m1\"></div>\n"; }
else if ($_GET['m'] == "2") { echo "<div id=\"showalert-m2\"></div>\n"; }
else if ($_GET['m'] == "3") { echo "<div id=\"showalert-m3\"></div>\n"; }
else if ($_GET['m'] == "4") { echo "<div id=\"showalert-m4\"></div>\n"; }
else if ($_GET['m'] == "5") { echo "<div id=\"showalert-m5\"></div>\n"; }
echo "<div id=\"showreadonly\"></div><div id=\"showsaving\"></div><div id=\"showsavesuccess\"></div>\n";
echo "<br>\n";

?>

<ul class="nav nav-tabs">
<?php if (($_POST['settingreport']) || ($_GET['m'] == 4)) { ?>
  <li><a href="#A1" data-toggle="tab"><i class="pe-line-chart pe-fw"></i> Charts</a></li>
  <li class="active"><a href="#A2" data-toggle="tab"><i class="pe-wrench pe-fw"></i> Settings</a></li>
<?php } else { ?>
  <li class="active"><a href="#A1" data-toggle="tab"><i class="pe-line-chart pe-fw"></i> Charts</a></li>
  <li><a href="#A2" data-toggle="tab"><i class="pe-wrench pe-fw"></i> Settings</a></li>
<?php } ?>
</ul>
<br>
<br>

<div class="tab-content">
<?php if (($_POST['settingreport']) || ($_GET['m'] == 4)) { ?>
  <div id="A1" class="tab-pane fade">
<?php } else { ?>
  <div id="A1" class="tab-pane fade in active">
<?php } ?>
    <h3>Question Listing</h3>

<?php
echo "      <p>This survey has a total of <strong>$numberofquestions $qphrase</strong> as shown in the question listing below. Because there are many questions, we separate them into pages (each page contains up to 10 questions). Please click one of the questions below to see a quick real-time result.</p>\n";
echo "      <p>Should you need to see more details such as subgroup analysis, you would need to download the data file and process it with your data processing team in a more traditional way.</p>\n";
echo $navtab;
echo $navtabcontent;
echo $questionlisting;


if ($subgrouprecords) { $responsepercent = number_format(($totalresponses/$subgrouprecords)*100, '1'); }
else { $responsepercent = number_format(($totalresponses/$basesize)*100, '1'); }
if ($totalresponses) { 
  if ($totalresponses <= $basesize) { $answers = "<p>This question contains a total of $totalresponses responses answered by $basesize respondents (<strong>$responsepercent%</strong>).</p>\n"; } else if ($totalresponses > $basesize) {
    if ($cd == "matrix") {
      $responseperattribute = number_format($totalresponses/$numberofattributes, '1');
      $responseperrecord = number_format($totalresponses/$numberofattributes, '1');
      $answers = "<p>This question contains a total of $totalresponses responses across $numberofattributes attiributes, or at a total of <strong>$responseperattribute responses for each of the attributes</strong>.</p>\n";
    } else {
      $responseperrecord = number_format($totalresponses/$basesize, '1');
      $answers = "<p>This question contains a total of $totalresponses responses answered by $basesize respondents or at an average of <strong>$responseperrecord responses per respondent</strong>.</p>\n";
    }
  }  
} else if ($totalresponses == "0") {
  $answers = "<p>This question contains no answer at all (<strong>0%</strong>) so there is no data to show.</p>\n";
} else {
  $answers = "<p>This is a Non-responsive question, so number of responses is not available.</p>\n";
}


if ($_GET["q"]) { 

if (substr($_GET["q"], -1) == "1") { $seq = 1; } else { $seq = 0; }
// echo $sequential;
?>

    <h3>The result</h3>
      <h4>Question preview <small>(read only)</small></h4>

<div class="row">
  <div class="col-sm-12" style="margin-bottom:40px;border: 1px dotted grey; background:mitcream">
    <?php echo $qout; ?>
  </div>
  <div class="col-sm-12">
<?php 

if (($cd == "file") || ($cd == "signaturepad")) {
  echo $outdirect;
} else {
  if ($cd != "html") { echo "<h4>Result of this question</h4>\n"; }
  if (($cd == "radiogroup") || ($cd == "radiogrouphtml") || ($cd == "dropdown") || ($cd == "barrating") || ($cd == "NPS") || ($cd == "rating")) { $changeicon = "<i class=\"pe-pie-chart pe-fw\"></i> Chart"; }
  else if (($cd == "checkbox") || ($cd == "checkboxhtml") || ($cd == "text")) { $changeicon = "<i class=\"pe-bar-chart pe-fw\"></i> Chart"; }
  else if ($cd == "comment") { $changeicon = "<i class=\"pe-pencil pe-fw\"></i> Virtualisation"; }
  else { $changeicon = "<i class=\"pe-line-chart pe-fw\"></i> Chart"; }
  echo "</div>\n";
  echo "<ul class=\"nav nav-tabs\">\n";
  echo "  <li class=\"active\"><a href=\"#B1\" data-toggle=\"tab\">".$changeicon." </a></li>\n";
  echo "  <li><a href=\"#B2\" data-toggle=\"tab\"><i class=\"pe-table pe-fw\"></i> Table</a></li>\n";
  echo "</ul>\n";
  echo "<br>\n";
  echo "<br>\n";  
    
  echo "<div class=\"tab-content\">\n";
  echo " <div id=\"B1\" class=\"tab-pane fade in active\">\n";
  echo $answers;
  if ($totalresponses) {
    if ($cd != "comment") { echo $menu; } 
    if (($cd == "matrix") || ($cd == "comment") || ($cd == "html")) { }
    else { echo "<p><small class=\"blue\">You can sort the results by clicking the table's headers</small></p>\n"; } 
    echo "<div id=\"table\" style=\"width:300px\"></div><div id=\"chart\"></div>\n";
  }
}
?>

<?php if (($cd == "radiogroup") || ($cd == "radiogrouphtml") || ($cd == "dropdown") || ($cd == "barrating") || ($cd == "NPS") || ($cd == "rating") || (($cd == "multipletext") && (preg_match('/t10/i', $_GET['q']) == 1))) { ?>

<?php if ((empty($_GET['type'])) || ($_GET['type'] == "pie")) { ?>

<script type="text/javascript">
  google.charts.load('current', { 'packages': ['table', 'corechart'] });
  google.charts.setOnLoadCallback(drawSort);
  function drawSort() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Answer');
    data.addColumn('number', 'Count');
    data.addColumn('number', 'Percentage');
<?php echo $out; ?>
    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1, 2]);
    var formatter = new google.visualization.NumberFormat({ suffix: '%', fractionDigits: '1' });
    formatter.format(data, 2);
    <?php $bdx = preg_replace("/\r\n|\r|\n/", ' ', $bdx); ?>
    var options = { title: '<?php echo $bdx; ?>', is3D: true, width: '100%', height: '400' };
    var chart = new google.visualization.PieChart(document.getElementById('chart'));
    chart.draw(view, options);
    var table = new google.visualization.Table(document.getElementById('table'));
    table.draw(view, {width: '100%', height: '100%'});
    google.visualization.events.addListener(table, 'sort', function(event) {
      data.sort([{ column: event.column, desc: !event.ascending }]);
      chart.draw(view);
    });
  }
  $(window).resize(function() { drawSort(); });
</script>

<?php } else if ($_GET['type'] == "donut") { ?>

<script type="text/javascript">
  google.charts.load('current', { 'packages': ['table', 'corechart'] });
  google.charts.setOnLoadCallback(drawSort);
  function drawSort() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Answer');
    data.addColumn('number', 'Count');
    data.addColumn('number', 'Percentage');
<?php echo $out; ?>
    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1, 2]);
    var formatter = new google.visualization.NumberFormat({ suffix: '%', fractionDigits: '1' });
    formatter.format(data, 2);
    var options = { title: '<?php echo $bdx; ?>', pieHole: 0.4, width: '100%', height: '400' };
    var chart = new google.visualization.PieChart(document.getElementById('chart'));
    chart.draw(view, options);
    var table = new google.visualization.Table(document.getElementById('table'));
    table.draw(view, {width: '100%', height: '100%'});
    google.visualization.events.addListener(table, 'sort', function(event) {
      data.sort([{ column: event.column, desc: !event.ascending }]);
      chart.draw(view);
    });
  }
  $(window).resize(function() { drawSort(); });
</script>

<?php } else if ($_GET['type'] == "bar-H") { ?>

<script type="text/javascript">
  google.charts.load('current', { 'packages': ['table', 'corechart'] });
  google.charts.setOnLoadCallback(drawSort);
  function drawSort() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Answer');
    data.addColumn('number', 'Count');
    data.addColumn('number', 'Percentage');
<?php echo $out; ?>
    var viewTable = new google.visualization.DataView(data);
    viewTable.setColumns([0, 1, 2]);
    var viewChart = new google.visualization.DataView(data);
    viewChart.setColumns([0, 2]);
    var formatter = new google.visualization.NumberFormat({ suffix: '%', fractionDigits: '1' });
    formatter.format(data, 2);
    var options = { title: '<?php echo $bdx; ?>', width: '100%', height: '400', bar: { groupWidth:  '60%' }, legend: { position: 'none' } };
    var chart = new google.visualization.BarChart(document.getElementById('chart'));
    chart.draw(viewChart, options);
    var table = new google.visualization.Table(document.getElementById('table'));
    table.draw(viewTable, {width: '100%', height: '100%'});
    google.visualization.events.addListener(table, 'sort', function(event) {
      data.sort([{ column: event.column, desc: !event.ascending }]);
      chart.draw(viewChart);
    });
  }
  $(window).resize(function() { drawSort(); });
</script>

<?php } else if ($_GET['type'] == "bar-V") { ?>

<script type="text/javascript">
  google.charts.load('current', { 'packages': ['table', 'corechart'] });
  google.charts.setOnLoadCallback(drawSort);
  function drawSort() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Answer');
    data.addColumn('number', 'Count');
    data.addColumn('number', 'Percentage');
<?php echo $out; ?>
    var viewTable = new google.visualization.DataView(data);
    viewTable.setColumns([0, 1, 2]);
    var viewChart = new google.visualization.DataView(data);
    viewChart.setColumns([0, 2]);
    var formatter = new google.visualization.NumberFormat({ suffix: '%', fractionDigits: '1' });
    formatter.format(data, 2);
    var options = { title: '<?php echo $bdx; ?>', width: '100%', height: '400', bar: { groupWidth:  '60%' }, legend: { position: 'none' } };
    var chart = new google.visualization.ColumnChart(document.getElementById('chart'));
    chart.draw(viewChart, options);
    var table = new google.visualization.Table(document.getElementById('table'));
    table.draw(viewTable, {width: '100%', height: '100%'});
    google.visualization.events.addListener(table, 'sort', function(event) {
      data.sort([{ column: event.column, desc: !event.ascending }]);
      chart.draw(viewChart);
    });
  }
  $(window).resize(function() { drawSort(); });
</script>

<?php } ?>

<?php } else if (($cd == "checkbox") || ($cd == "checkboxhtml") || ($cd == "text")) { ?>

<?php if ((empty($_GET['type'])) || ($_GET['type'] == "bar-H")) { ?>

<script type="text/javascript">
  google.charts.load('current', { 'packages': ['table', 'corechart'] });
  google.charts.setOnLoadCallback(drawSort);
  function drawSort() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Answer');
    data.addColumn('number', 'Count');
    data.addColumn('number', 'Percentage');
<?php echo $out; ?>
    var viewTable = new google.visualization.DataView(data);
    viewTable.setColumns([0, 1, 2]);
    var viewChart = new google.visualization.DataView(data);
    viewChart.setColumns([0, 2]);
    var formatter = new google.visualization.NumberFormat({ suffix: '%', fractionDigits: '1' });
    formatter.format(data, 2);
    var options = { title: '<?php echo $bdx; ?>', width: '100%', height: '<?php if ($C <= 10) { echo 400; } else if (($C > 10) && ($C <= 20)) { echo 800; } else if ($C > 20) { echo 1200; } ?>', bar: { groupWidth: '60%' }, legend: { position: 'none' } };
    var chart = new google.visualization.BarChart(document.getElementById('chart'));
    chart.draw(viewChart, options);
    var table = new google.visualization.Table(document.getElementById('table'));
    table.draw(viewTable, {width: '100%', height: '100%'});
    google.visualization.events.addListener(table, 'sort', function(event) {
      data.sort([{ column: event.column, desc: !event.ascending }]);
      chart.draw(viewChart);
    });
  }
  $(window).resize(function() { drawSort(); });
</script>

<?php } else if ($_GET['type'] == "newbar-H") { ?>

<script type="text/javascript">
  google.charts.load('current', {'packages': ['table', 'bar']});
  google.charts.setOnLoadCallback(drawSort);
  function drawSort() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Answer');
    data.addColumn('number', 'Count');
    data.addColumn('number', 'Percentage');
<?php echo $out; ?>
    var viewTable = new google.visualization.DataView(data);
    viewTable.setColumns([0, 1, 2]);
    var viewChart = new google.visualization.DataView(data);
    viewChart.setColumns([0, 2]);
    // view.setColumns([0, 1, { calc: "stringify", sourceColumn: 1, type: "string", role: "annotation" }, 2]);
    var formatter = new google.visualization.NumberFormat({ suffix: '%', fractionDigits: '1' });
    formatter.format(data, 2);
    var options = { title: '<?php echo $bdx; ?>', width: '100%', height: '400', bar: { groupWidth: '60%' }, legend: { position: 'none' }, bars: 'horizontal' };
    var chart = new google.charts.Bar(document.getElementById('chart'));
    chart.draw(viewChart, options);
    var table = new google.visualization.Table(document.getElementById('table'));
    table.draw(viewTable, {width: '100%', height: '100%'});
    google.visualization.events.addListener(table, 'sort', function(event) {
      data.sort([{ column: event.column, desc: !event.ascending }]);
      chart.draw(viewChart);
    });
  }
  $(window).resize(function() { drawSort(); });
</script>

<?php } else if ($_GET['type'] == "bar-V") { ?>

<script type="text/javascript">
  google.charts.load('current', { 'packages': ['table', 'corechart'] });
  google.charts.setOnLoadCallback(drawSort);
  function drawSort() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Answer');
    data.addColumn('number', 'Count');
    data.addColumn('number', 'Percentage');
<?php echo $out; ?>
    var viewTable = new google.visualization.DataView(data);
    viewTable.setColumns([0, 1, 2]);
    var viewChart = new google.visualization.DataView(data);
    viewChart.setColumns([0, 2]);
    var formatter = new google.visualization.NumberFormat({ suffix: '%', fractionDigits: '1' });
    formatter.format(data, 2);
    var options = { title: '<?php echo $bdx; ?>', width: '100%', height: '400', bar: { groupWidth:  '60%' }, legend: { position: 'none' } };
    var chart = new google.visualization.ColumnChart(document.getElementById('chart'));
    chart.draw(viewChart, options);
    var table = new google.visualization.Table(document.getElementById('table'));
    table.draw(viewTable, {width: '100%', height: '100%'});
    google.visualization.events.addListener(table, 'sort', function(event) {
      data.sort([{ column: event.column, desc: !event.ascending }]);
      chart.draw(viewChart);
    });
  }
  $(window).resize(function() { drawSort(); });
</script>

<?php } ?>


<?php  } else if ($cd == "comment") { ?>

  <p>Below verbatims are shown in rotation:</p><div class="vcontainer"><div id="PEPE"></div></div>

  <style>
    .vcontainer {
      background: #2754ba;
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      text-align: center;
      align-items: center;
    }
    #PEPE {
      font-weight: 100;
      font-size: 40px;
      height: 150px;
      color: #fafafa;
    }
    .dud {
      color: #808080;
    }
  </style>

  <script type="text/javascript">
  'use strict';
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  var TextScramble = function () {
    function TextScramble(el) {
      _classCallCheck(this, TextScramble);
      this.el = el;
      // console.log(el);
      this.chars = '!#@&%<>-_\\/[]{}—=+*^?#________';
      this.update = this.update.bind(this);
    }
    TextScramble.prototype.setText = function setText(newText) {
      var _this = this;
      // console.log(_this);
      var oldText = this.el.innerText;
      var length = Math.max(oldText.length, newText.length);
      var promise = new Promise(function (resolve) { return _this.resolve = resolve; });
      this.queue = [];
      for (var i = 0; i < length; i++) {
        var from = oldText[i] || '';
        var to = newText[i] || '';
        var start = Math.floor(Math.random() * 80);
        var end = start + Math.floor(Math.random() * 80);
        this.queue.push({ from: from, to: to, start: start, end: end });
      }
      cancelAnimationFrame(this.frameRequest);
      this.frame = 0;
      this.update();
      return promise;
    };
    TextScramble.prototype.update = function update() {
      var output = '';
      var complete = 0;
      for (var i=0, n = this.queue.length; i<n; i++) {
        var _queue$i = this.queue[i];
        var from = _queue$i.from;
        var to = _queue$i.to;
        var start = _queue$i.start;
        var end = _queue$i.end;
        var char = _queue$i.char;
        if (this.frame >= end) { complete++; output += to; }
        else if (this.frame >= start) { if (!char || Math.random() < 0.28) { char = this.randomChar(); this.queue[i].char = char; } output += '<span class="dud">' + char + '</span>'; }
        else { output += from; }
      }
      this.el.innerHTML = output;
      if (complete === this.queue.length) { this.resolve(); }
      else { this.frameRequest = requestAnimationFrame(this.update); this.frame++; }
    };
    TextScramble.prototype.randomChar = function randomChar() { return this.chars[Math.floor(Math.random() * this.chars.length)]; };
    return TextScramble;
  }();
  var phrases = <?php echo $vdata; ?>;
  var el = document.querySelector('div#PEPE');
  var fx = new TextScramble(el);
  var counter = 0;
  var next = function next() { fx.setText(phrases[counter]).then(function () { setTimeout(next, 800); }); counter = (counter + 1) % phrases.length; };
  next();
  </script>

<?php } else if ($cd == "matrix") { ?>

<?php if ((empty($_GET['type'])) || ($_GET['type'] == "bar-V-mean")) { ?>

<script type="text/javascript">
  google.charts.load("current", {packages:['corechart']});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = google.visualization.arrayToDataTable([<?php print_r($out); ?>]);
    var view = new google.visualization.DataView(data);
    var options = {
      width: '100%',
      height: '400',
      bar: { groupWidth: '60%' },
      legend: { position: 'top', textStyle: { color: '#000', fontSize: 10 } },
      isStacked: true,
      <?php echo $color; ?>
      seriesType: 'bars',
      series: {
        0: {  type: 'bar', targetAxisIndex: 0 },
        1: {  type: 'bar', targetAxisIndex: 0 },
        2: {  type: 'bar', targetAxisIndex: 0 },
        3: {  type: 'bar', targetAxisIndex: 0 },
        4: {  type: 'bar', targetAxisIndex: 0 },
        5: {  type: 'line', targetAxisIndex: 1 }
      },
      vAxes: {
        0: { title: 'Percentage', viewWindowMode:'explicit', viewWindow: { max:100, min:0 }, gridlines: { color: 'transparent' } },
        1: { title: 'Mean score', viewWindowMode:'explicit', viewWindow: { max:5, min:1 }, gridlines: { color: 'transparent' } },
      }
    };
    var chart = new google.visualization.ColumnChart(document.getElementById('chart'));
    chart.draw(view, options);
  }
  $(window).resize(function() { drawChart(); });
</script>

<?php } else if ($_GET['type'] == "bar-V") { ?>

  <script type="text/javascript">
  google.charts.load("current", {packages:['corechart']});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = google.visualization.arrayToDataTable([<?php print_r($out); ?>]);
    var view = new google.visualization.DataView(data);
    var options = {
      width: '100%',
      height: '400',
      bar: { groupWidth: '60%' },
      legend: { position: 'right', textStyle: { color: '#000', fontSize: 10 } },
      isStacked: true,
      <?php echo $color; ?>
      seriesType: 'bars',
      vAxes: {
        0: { title: 'Percentage', viewWindowMode:'explicit', viewWindow: { max:100, min:0 }, gridlines: { color: 'transparent' } },
      }
    };
    var chart = new google.visualization.ColumnChart(document.getElementById('chart'));
    chart.draw(view, options);
  }
  $(window).resize(function() { drawChart(); });
</script>

<?php } else if ($_GET['type'] == "bar-H") { ?>

  <script type="text/javascript">
  google.charts.load("current", {packages:['corechart']});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = google.visualization.arrayToDataTable([<?php print_r($out); ?>]);
    var view = new google.visualization.DataView(data);
    var options = {
      width: '100%',
      height: '<?php if ($D <= 10) { echo 400; } else if (($D > 10) && ($D <= 20)) { echo 800; } else if ($D > 20) { echo 1200; } ?>',
      bar: { groupWidth: '60%' },
      legend: { position: 'top', textStyle: { color: '#000', fontSize: 10 } },
      isStacked: true,
      <?php echo $color; ?>
      seriesType: 'bars',
      hAxes: {
        0: { title: 'Percentage', viewWindowMode:'explicit', viewWindow: { max:100, min:0 }, gridlines: { color: 'transparent' } },
      }
    };
    var chart = new google.visualization.BarChart(document.getElementById('chart'));
    chart.draw(view, options);
  }
  $(window).resize(function() { drawChart(); });
</script>

<?php } else if ($_GET['type'] == "bar-H-mean") { ?>

  <script type="text/javascript">
  google.charts.load("current", {packages:['corechart']});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = google.visualization.arrayToDataTable([<?php print_r($out); ?>]);
    var view = new google.visualization.DataView(data);
    var options = {
      width: '100%',
      height: '400',
      bar: { groupWidth: '60%' },
      legend: { position: 'top', textStyle: { color: '#000', fontSize: 10 } },
      isStacked: true,
      <?php echo $color; ?>
      seriesType: 'bars',
      series: {
        0: {  type: 'bar', targetAxisIndex: 0 },
        1: {  type: 'bar', targetAxisIndex: 0 },
        2: {  type: 'bar', targetAxisIndex: 0 },
        3: {  type: 'bar', targetAxisIndex: 0 },
        4: {  type: 'bar', targetAxisIndex: 0 },
        5: {  type: 'line', targetAxisIndex: 1 }
      },
      hAxes: {
        0: { title: 'Percentage', viewWindowMode:'explicit', viewWindow: { max:100, min:0 }, gridlines: { color: 'transparent' } },
        1: { title: 'Mean score', viewWindowMode:'explicit', viewWindow: { max:5, min:1 }, gridlines: { color: 'transparent' } },
      }
    };
    var chart = new google.visualization.BarChart(document.getElementById('chart'));
    chart.draw(view, options);
  }
  $(window).resize(function() { drawChart(); });
</script>

<?php } ?>

<?php } else if (($cd == "file") || ($cd == "signaturepad")) { ?>

<script type="text/javascript">
  $(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });
</script>

<?php } ?>

<br>

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
  $('#showsaving').html("<div class='alert alert-info'><i class='pe-spinner pe-pulse pe-lg pe-fw'></i> The system is now saving your data, please wait until the green message shows up which shoud be in a minute</div>").hide();
  $('#showsavesuccess').html("<div class='alert alert-success'><i class='pe-save pe-fw'></i> Data has been saved successfully</div>").hide();
  $('#showreadonly').html("<div class='alert alert-warning'><i class='pe-exclamation-triangle pe-fw'></i> Because you are not the project owner, this questionnaire has entered <strong>read-only mode</strong> (all changes will not be saved)</div>").hide();
  $('#showalert-delete').html("<div class='alert alert-success'><i class='pe-check pe-fw'></i> You have successfully saved & updated the settings on reporting of this survey.</div>").hide();
  $('#showalert-m1').html("<div class='alert alert-success'><i class='pe-check pe-fw'></i> You have successfully changed the appearanace of this survey. Please see the example below as the changes should be implemented right away.</div>").hide();
  $('#showalert-m2').html("<div class='alert alert-success'><i class='pe-check pe-fw'></i> You have successfully updated the survey options including survey description, thank you message, PIN CODE, and the total sample size.</div>").hide();
  $('#showalert-m3').html("<div class='alert alert-info'><i class='pe-exclamation-triangle pe-fw'></i> No changes detected. So no change has been made to this survey.</div><br>").hide();
  $('#showalert-m4').html("<div class='alert alert-success'><i class='pe-check pe-fw'></i> You have successfully updated all the advanced settings for this survey.</div><br>").hide();
  $('#showalert-m5').html("<div class='alert alert-success'><i class='pe-check pe-fw'></i> You have successfully updated all the precode settings for this survey.</div><br>").hide();
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
  String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
  };
  $(document).ready(function () {
    var ttt = JSON.stringify(getdatafortable(surveyid));
    ttt = ttt.replaceAll("data", "");
    ttt = ttt.replaceAll("Record", "");
    var inArray2 = JSON.parse(ttt);
    var outArray2 = [];
    for (var row in inArray2) { outArray2[outArray2.length] = parse_object(inArray2[row]); }
    var csv = "\ufeff"+$.csv.fromObjects(outArray2);
    var blob = new Blob([csv], { type: ' type: "text/csv;charset=UTF-8"' });
    var csvUrl = window.URL.createObjectURL(blob);
    var todayDate = new Date().toISOString().slice(0,10);
    var filename = "<?php echo $project; ?>" + "_data_" + todayDate + '.csv';
    $("a.exceldownload").attr({'download': filename, 'href': csvUrl });
  });


</script>



<script type="text/javascript">
  <?php if ($monitor) { echo "var monitor = $monitor;\n"; } else { echo "var monitor = { \"quota\": [], \"QC\": [], \"monitor\": [] };\n"; } ?>
  var counter2a = 0, counter2b = 0;
  var newrow300 = "                <option disabled>----------</option>";
  <?php echo "var newrow301 = '                <option value=\"all\">No subgroup (show all)</option>';\n"; ?>
  function dropdownA(l, m, n, o, p, ssq, ssa) {
    mn = n.toString().replace(/ /g,"_"); mo = o.toString().replace(/ /g,"_");
    ssq = ssq.toString().replace(/ /g,"_"); ssa = ssa.toString().replace(/ /g,"_");
    if (mn == ssq) { var newrow3FA = "                <option value=\"" + mn + "-all\" selected>" + n + ": Total sample (n=" + p + ")</option>\n"; }
    else { var newrow3FA = "                <option value=\"" + mn + "-all\">" + n + ": Total sample (n=" + p + ")</option>\n"; }
    $('#subgroup').append(newrow3FA);
  }
  function dropdownB(l, m, n, o, p, ssq, ssa) {
    mn = n.toString().replace(/ /g,"_"); mo = o.toString().replace(/ /g,"_");
    ssq = ssq.toString().replace(/ /g,"_"); ssa = ssa.toString().replace(/ /g,"_");
    if (mo == ssa && mn == ssq) { var newrow3FB = "                <option value=\"" + mn + "-" + mo + "\" selected>" + n + ": " + o + " (n=" + p + ")</option>\n"; }
    else { var newrow3FB = "                <option value=\"" + mn + "-" + mo + "\">" + n + ": " + o + " (n=" + p + ")</option>\n"; }
    $('#subgroup').append(newrow3FB);
  }
  var i; var j; var k = 0;
  if (monitor.quota) {
    $('#subgroup').append(newrow300);
    $('#subgroup').append(newrow301);
    for (i=0; i<monitor.quota.length; i++) {
      var combinedtotalsample = 0;
      for (j=0; j<monitor.quota[i].details.length; j++) {
        combinedtotalsample += parseInt(monitor.quota[i].details[j].samplesize);
      }
      $('#subgroup').append(newrow300);
      dropdownA(parseInt(k)+1, counter2a, monitor.quota[i].questionname, monitor.quota[i].details[k].subgroup, combinedtotalsample, "<?php echo $subgroupquestion; ?>", "<?php echo $subgroupanswer; ?>");
      $('#subgroup').append(newrow300);
      for (j=0; j<monitor.quota[i].details.length; j++) {
        dropdownB(parseInt(k)+1, j, monitor.quota[i].questionname, monitor.quota[i].details[j].subgroup, monitor.quota[i].details[j].samplesize, "<?php echo $subgroupquestion; ?>", "<?php echo $subgroupanswer; ?>");
      }
    }
  }
  $(document).ready(function() {
    $('#subgroup').on('change', function() { this.form.submit(); });
  });
</script>


<script type="text/javascript">


<?php if (($_GET['m'] == "1") || ($m == 1)) { ?>
  $('#showalert-m1').show();
  window.setTimeout(function() { $("#showalert-m1").slideUp(500, function() { $("#showalert-m1").hide(); }); }, 8000);
<?php } else if ($_GET['m'] == "2") { ?>
  $('#showalert-m2').show();
  window.setTimeout(function() { $("#showalert-m2").slideUp(500, function() { $("#showalert-m2").hide(); }); }, 8000);
<?php } else if ($_GET['m'] == "3") { ?>
  $('#showalert-m3').show();
  window.setTimeout(function() { $("#showalert-m3").slideUp(500, function() { $("#showalert-m3").hide(); }); }, 8000);
<?php } else if ($_GET['m'] == "4") { ?>
  $('#showalert-m4').show();
  window.setTimeout(function() { $("#showalert-m4").slideUp(500, function() { $("#showalert-m4").hide(); }); }, 8000);
<?php } else if ($_GET['m'] == "5") { ?>
  $('#showalert-m5').show();
  window.setTimeout(function() { $("#showalert-m5").slideUp(500, function() { $("#showalert-m5").hide(); }); }, 8000);
<?php } ?>

<?php if ($sreport) { echo "var sreport = $sreport;\n"; } else { echo "var sreport = { \"report\": [] };\n"; } ?>

var counter4 = 0, counter4z = counter4 + 1;
  if (typeof(sreport.report) === 'undefined') {
    var currentrow4 = "              <tr>\n" +
      "                <td></td><td colspan=\"2\"><small><strong><br>No data.</strong><br>Click button below to add one.</small></td>\n" +
      "              </tr>\n";
    $('#tablereportsettings').find('tbody').append(currentrow4);
  } else {
    while (counter4<sreport.report.length) {
      var currentrow4 = "              <tr>\n" +
        "                <td valign=\"middle\">" + counter4z + "</td>\n" +
        "                <td valign=\"middle\"><input type=\"text\" class=\"form-control input-sm\" name=\"report_questionname_" + counter4z + "\" value=\"" + sreport.report[counter4].questionname + "\"></td>\n" +
        "                <td valign=\"middle\"><i class=\"pe-arrow-right pe-lg\"></i></td>\n" +
        "                <td valign=\"middle\"><input type=\"text\" class=\"form-control input-sm\" name=\"report_linkamount_" + counter4z + "\" value=\"" + sreport.report[counter4].linkamount + "\"></td>\n" +
        "                <td valign=\"middle\"><i class=\"pe-trash pe-fw red deletethisrow\"></i></td>\n" +
        "              </tr>\n";
      $('#tablereportsettings').find('tbody').append(currentrow4);
      counter4++;
      counter4z++;
    }
  }
  $('#newbutton4').click(function() {
    var newrow4 = "              <tr>\n" +
      "                <td valign=\"middle\">" + counter4z + "</td>\n" +
      "                <td valign=\"middle\"><input type=\"text\" class=\"form-control input-sm\" placeholder=\"Question name\" name=\"report_questionname_" + counter4z + "\"></td>\n" +
      "                <td valign=\"middle\"><i class=\"pe-arrow-right pe-lg\"></i></td>\n" +
      "                <td valign=\"middle\"><select class=\"form-control input-sm\" id=\"subgroup\" name=\"report_linkamount_" + counter4z + "\">" +
      "                <option value=\"0\">--</option>\n" +
      "                <option value=\"1\">1</option>\n" +
      "                <option value=\"2\">2</option>\n" +
      "                <option value=\"3\">3</option>\n" +
      "                <option value=\"4\">4</option>\n" +
      "                <option value=\"4\">5</option>\n" +
      "                </select></td>\n" +
      "                <td valign=\"middle\"><i class=\"pe-trash pe-fw red deletethisrow\"></i></td>\n" +
      "              </tr>\n";
    $('#tablereportsettings').find('tbody').append(newrow4);
    counter4z++;
  });
  $(document.body).delegate(".deletethisrow", "click", function() { $(this).closest("tr").remove(); });

</script>


  </div>
  <div id="B2" class="tab-pane fade">

<?php
  echo $answers;
  if ($totalresponses) {
    if ($cd == "matrix") { echo $tableout1A; echo $tableout1B; } 
    else if (($cd == "comment") || ($cd == "text")) { echo $tableout2; }
    else if (($cd == "radiogroup") || ($cd == "radiogrouphtml") || ($cd == "dropdown") || ($cd == "barrating") || ($cd == "NPS") || ($cd == "rating") || (($cd == "multipletext") && (preg_match('/t10/i', $_GET['q']) == 1))) { echo $tableout3; } 
    else if (($cd == "checkbox") || ($cd == "checkboxhtml")) { echo $tableout4; }
    else { echo "No table to be shown for this question\n"; }
    echo "</div></div></div>";  
  }
?>

<?php } else { echo "<p class=\"grey\">To view survey results, you just simply click one of the above questions</p>"; } ?>

  </div>
<?php if (($_POST['settingreport']) || ($_GET['m'] == 4)) { ?>
  <div id="A2" class="tab-pane fade in active">
<?php } else { ?>
  <div id="A2" class="tab-pane fade">
<?php } ?>

    <h3>Settings</h3>
    <p>This page contains specific settings to see results in the right way you need.</p>
    <form id="settingreport" method="post" action="<?php echo $me; ?>">
      <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <h4>Linkage of questions <small>(sequential monadic)</small></h4>
          <p>Idebtify which questions to link for analysis including an option to set how many of them to link up.</p>
          <table class="table table-hover table-condensed" id="tablereportsettings">
            <thead>
              <tr class="bg-success">
                <th width="5%"></th>
                <th width="60%">Common question name</th>
                <th width="5%"></th>
                <th width="20%">No. of questions</th>
                <th width="10%"></th>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
          <p align="center"><button type="button" class="btn btn-warning btn-xs" id="newbutton4"><i class="pe-plus pe-fw"></i>Add new</button></p>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        </div>
      </div>
      <br>
      <hr>
      <p class="text-center">
        <input type="hidden" name="settingreport" value="1">
        <input type="hidden" name="surveyid" value="<?php echo $_GET['s']; ?>">
        <button type="submit" class="btn btn-success"<?php if ($cansave == false) { echo " disabled"; } ?>>Save <i class="pe-check-circle-o"></i></button>
        <button type="reset" class="btn btn-default"<?php if ($cansave == false) { echo " disabled"; } ?>>Cancel <i class="pe-times-circle-o"></i></button>
      </p>
    </form>
  </div>


  </div>
</div>
<br>

<?php backButton("/admin/?w=surveys", "Back to the main page", "danger"); ?>


<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
