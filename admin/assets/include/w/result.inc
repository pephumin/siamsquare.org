<?php

$limit = 20;
$toplimit = 30;
$showsubgroup = 0;
$showquestion = $_GET["q"];
$base = "/admin/?w=result&s=".$_GET["s"];
$result = "/admin/?w=result&s=".$_GET["s"];
$progress = "/admin/?w=progress&s=".$_GET["s"];
$subgroupsetting = "/admin/?w=progress&s=".$_GET["s"]."&bpass=1";
$questionnaire = "/admin/?w=questionnaire&s=".$_GET["s"];
$respondent = "/admin/?w=respondents&s=".$_GET["s"];
$me = "/admin/?w=result&s=".$_GET["s"];

function flip($arr) {
  $out = array();
  foreach ($arr as $key => $subarr) { foreach ($subarr as $subkey => $subvalue) { $out[$subkey][$key] = $subvalue; } }
  return $out;
}

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
$report = $rows[0]["report"];

// print_r($report);

$rr1 = json_decode($rows['0']["data"], true);
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
    for ($j=0; $j<count($rr4[$i]["columns"]); $j++) { unset($rr4[$i]["columns"][$j][$rm2]); }
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

$json = json_encode($rr4);

// ----------------- SAVINGS ----------------------

if ($_SESSION["level"] == 9) { $cansave = true; }
else if ($_SESSION["level"] == 6) { $cansave = true; }
else if ($_SESSION["level"] == 5) { if ($_SESSION["userid"] == $owner) { $cansave = true; } }
else { $cansave = false; }
$xreport = array();
if (($_POST["settingreport"]) == "1") {
  foreach (array_keys($_POST) as $key) {
    if (substr($key, 0, 5) === "quota") {
      list($a, $b, $c, $d) = split('_', $key);
      $qq1[$b][$c][] = $_POST[$key];
    } else {
      list($x, $y, $z) = split('_', $key);
      if ($x == "QC") { $qq2[$y][] = $_POST[$key]; }
      else if ($x == "monitor") { $qq3[$y][] = $_POST[$key]; }
      else if ($x == "sequential") { $qq4[$y][] = $_POST[$key]; }
    }
  }
  for ($i=0; $i<count($qq1); $i++) {
    $c1 = array_map(function ($m, $n) { return array("subgroup" => $m, "samplesize" => $n); }, $qq1[$i]["subgroup"], $qq1[$i]["samplesize"]);
    $qq1[$i]["details"] = $c1;
    unset($qq1[$i]["subgroup"]);
    unset($qq1[$i]["samplesize"]);
  }
  $newqq4 = array_map(function ($input, $linkamount) { return array("questionname" => $input, "linkamount" => $linkamount); }, $qq4["questionname"], $qq4["linkamount"]);
  $all1 = []; $all4 = [];
  array_push($all1, $qq1); $all1["quota"] = $all1["0"]; unset($all1["0"]);
  array_push($all4, $newqq4); $all4["sequential"] = $all4["0"]; unset($all4["0"]);
  $all1 = array_remove_empty($all1); $all4 = array_remove_empty($all4); 
  // print_r($all1); print_r($all4);
  $json1 = json_encode($all1, JSON_PRETTY_PRINT); $json4 = json_encode($all4, JSON_PRETTY_PRINT);
  $query = " "; 

  $add = ""; $move = 0;
  if ($json1 != $monitor) { $add .= "QC = :QC, "; $move = 1; }
  if ($json4 != $report) { $add .= "report = :report, "; $move = 1; }
  $query = $query.$add;
  $query = substr($query, 0, -2);
  $qG = $db->prepare("UPDATE j_projects SET".$query." WHERE id = :surveyid");
  $qG->bindValue(':surveyid', $_POST["surveyid"], PDO::PARAM_INT);
  if ($json1 != $monitor) { $qG->bindValue(':QC', $json1, PDO::PARAM_STR); }
  if ($json4 != $report) { $qG->bindValue(':report', $json4, PDO::PARAM_STR); }
  // print_r($qG);
  if ($move == 0) {
    $redirect = $me."&m=3";
    header("location: $redirect");
    exit;
  } else {
    $qG->execute();
    $redirect = $me."&m=1";
    header("location: $redirect");
    exit;
  }
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
    $removeKeys = array("rd", "email", "ip", "surveyid", "status", "interviewer");
    foreach($removeKeys as $key) { unset($ee[$i][$key]); }
    $ee[$i]["data"] = json_decode($ee[$i]["data"], true);
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

// -----------------  SEQUENTIAL MONADIC ----------------------

$seq1 = array(); $seq2 = array();
$seqq1 = json_decode($rows["0"]["report"], true);
$seqq2 = $seqq1["sequential"];
foreach ($seqq2 as $ssqq3 => $ssqq4) { foreach ($ssqq4 as $ssqq5 => $ssqq6) { for ($i = 0; $i < $ssqq4["linkamount"]; $i++) { $j = $i + 1; array_push ($seq1, $ssqq4["questionname"].$j); } } }
$seq2 = array_values(array_unique($seq1));
// print_r($seq2);

// ----------------- ORIGINAL ----------------------

$a = json_decode($rows[0]["data"], true);
foreach ($a["pages"] as $k1 => $p1) { foreach ($p1 as $k2 => $p2) { foreach ($p2 as $k3 => $p3) { $questions[] = $p3; } } }

$qoutadd = "<p align=\"right\" class=\"lightgrey\"><form action=\"\" method=\"get\" id=\"subgroups\">\n";
$qoutadd .= "<strong>Select the target group below:</strong></p>\n";
$qoutadd .= "<input type=\"hidden\" name=\"w\" value=\"result\">\n";
$qoutadd .= "<input type=\"hidden\" name=\"s\" value=\"".$_GET["s"]."\">\n";
$qoutadd .= "<input type=\"hidden\" name=\"q\" value=\"".$_GET["q"]."\">\n";
$qoutadd .= "<select class=\"form-control\" id=\"subgroup\" name=\"subgroup\" class=\"input-sm\">\n";
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
  $choices = $questions[$i]["choices"]; //$choices1 = $questions[$i]["columns"];
  if ($questions[$i]["choicesByUrl"]) { $choicesByUrl = $questions[$i]["choicesByUrl"]; }
  if ($questions[$i]["choicesByUrl"]["url"]) { $url = $questions[$i]["choicesByUrl"]["url"]; }
  if ($questions[$i]["choicesByUrl"]["path"]) { $path = $questions[$i]["choicesByUrl"]["path"]; }
  if ($questions[$i]["choicesByUrl"]["valueName"]) { $valueName = $questions[$i]["choicesByUrl"]["valueName"]; }
  if ($qrequired) { $add = " <sup>(*)</sup>"; } else { $add = ""; }

  // foreach ($seq2 as $m1 => $v1) { 
  //   $h1[] = $v1;
  //   $h2[] = $questions[$i]["name"][$v1];
  // }
  // foreach ($seq2 as $m1 => $v1) { for ($i = 0; $i < count($records); $i++) { $eeseq[$v1][] = $records[$i]["data"][$v1]; } }
  // print_r($eeseq);

  // print_r($h1["0"]);
  // print_r($h2); 
  // $qseqout = array_interect($h1, $h2);
  // print_r($qseqout);  
  // print_r($questions);


  if ($qname == $showquestion) {
    $qe = iconize($qtype);
    $qout .= "<small class='pull-right' style='padding:10px 5px'>".$qe."</small>\n";
    $qout .= "      <h4 style=\"font-family:boon;font-size:140%\">".$qname.$add.": ".$qtitle."</h4>\n";
    if ($qvisibleIf) { $qout .= "      <p class=\"grey small\"><em>Only ask when <u>".$qvisibleIf."</u></em></p>\n"; } else { $qout .= "      <p class=\"grey small\"><em>Ask all respondents</em></p>\n"; }
    $qout .= "<div class=\"row\"><div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9\">\n";
    // $qout .= $qoutadd;
    if (($qtype == "radiogroup") || ($qtype == "radiogrouphtml")) {
      $qout .= "      <ul>\n";
      foreach ($choices as $k4 => $p4) {
        $choice_text = $p4["text"]; $c_text[] = $p4["text"];
        $choice_code = $p4["value"]; $c_code[] = $p4["value"];
        $qout .= "        <div class=\"radio\" style=\"font-family:boon;font-size:120%\"><label style=\"display:inline\"><input type=\"radio\" name=\"radiogroup\" style=\"position:relative;margin-right:10px\" disabled>$choice_text ($choice_code)</label></div>\n";
      }
      $qout .= "      </ul>\n";
    }
    else if (($qtype == "checkbox") || ($qtype == "checkboxhtml")) {
      $qout .= "      <ul>\n";
      foreach ($choices as $k5 => $p5) {
        $choice_text = $p5["text"]; $c_text[] = $p5["text"];
        $choice_code = $p5["value"]; $c_code[] = $p5["value"];
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
          $choice_text = $p6["text"]; $c_text[] = $p6["text"];
          $choice_code = $p6["value"]; $c_code[] = $p6["value"];
          $qout .= "          <option>$choice_text ($choice_code)</option>\n";
        }
        $qout .= "        </select>\n";
        $qout .= "      </div></div>\n";
      }
    }
    else if ($qtype == "rating") {
      $qout .= "      <div class=\"btn-group\" role=\"group\">\n";
      foreach ($questions[$i]["rateValues"] as $k7 => $p7) {
        $choice_text = $p7["text"]; $c_text[] = $p7["text"];
        $choice_code = $p7["value"]; $c_code[] = $p7["value"];
        $qout .= "        <button type=\"button\" class=\"btn btn-default\">$choice_text<br>$choice_code</button>\n";
      }
      $qout .= "      </div>\n";
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
    }
    else if ($qtype == "matrixdropdown") {
      $qout .= "      <table class=\"table\" style=\"font-family:boon\">\n";
      $qout .= "        <thead><tr class=\"bg-primary\">\n";
      $qout .= "          <th width=\"20%\"></th>\n";
      // $c = 0;
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
          $dd2 .= "            <option>".$questions[$i]["columns"][$j]["choices"][$k]["text"]." (".$questions[$i]["columns"][$j]["choices"][$k]["value"].")</option>\n";
          // $dd2 .= "            <option>".$c_text." (".$c_code.")</option>\n";
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
      // print_r($r_text);
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
      $counting1 = count($questions[$i]["choices"]);
      foreach ($choices as $k14 => $p14) {
        $choice_text = $p14['text']; $c_text[] = $p14['text'];
        $choice_code = $p14['code']; $c_code[] = $p14['code'];
        $qout .= "          <a data-rating-value=\"".$p14["text"]."\" data-rating-text=\"".$p14["text"]."\">".$p14["text"]."</a>\n";
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

if (($_GET["subgroup"]) && ($_GET["subgroup"] != "")) { 
  $ss1 = html_entity_decode($_GET["subgroup"]);
  list($zqid, $zsqidans) = explode("::", $ss1);
  $ss2 = explode(" ", $ss1); 
  $ss3 = explode("::", $ss2[0]);
  $ss12 = str_replace('_', ' ', $ss3[0]);
  $ss22 = str_replace('_', ' ', $ss3[1]); 
  list($zqid1, $zsqid) = explode("_", $zqid);
}
if ($zsqidans == "all") { $subgroupanswer = "all"; $showsubgroup = 0; } 
else { $subgroupanswer = $zsqidans; $showsubgroup = 1; }
if ($zqid) { if ($zsqid) { $subgroupquestion = $zqid; $showsubgroup = 1; } else { $subgroupquestion = $zqid; $showsubgroup = 1; } } 
else  { $subgroupquestion = "all"; $showsubgroup = 0; }
if (($_GET["subgroup"] == "") || ($_GET["subgroup"] == "all")) { $showsubgroup = 0; }

// ------- Questionnaire navigator --------------------------------------------------------------------------

$perpage = "10";
$sid = $_GET["s"]; $qid = $_GET["q"];
$numberofquestions = count($questions);
for ($i=0; $i<$numberofquestions; $i++) {
  $qname = $questions[$i]["name"];
  if ($qname == $_GET["q"]) { $here = floor($i/$perpage)*10; }
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
  if ($qname == $_GET["q"]) { $questionlisting .= "      <li id=\"listing-$i\" class=\"progress-step is-active\">\n"; }
  else { $questionlisting .= "      <li id=\"listing-$i\" class=\"progress-step\">\n"; }
  $questionlisting .= "        <span class=\"progress-marker\"></span>\n";

  //  { $questionlisting .= "        <a href=\"/admin/?w=result&s=$sid&q=$qname&subgroup=$ss1\"><span class=\"progress-text\">\n"; }
  // else { $questionlisting .= "        <a href=\"/admin/?w=result&s=$sid&q=$qname\"><span class=\"progress-text\">\n"; }


  $me = "/admin/?w=result&s=".$_GET["s"];
  if (($qname) || ($_GET["q"])) { $ext0 = "&q=".$qname; } else { $ext0 = ""; }
  if ($showsubgroup == 1) { $ext1 = "&subgroup=".$ss1; } else { $ext1 = ""; }
  if ($_GET["type"]) { $ext2 = "&type=".$_GET["type"]; } else { $ext2 = ""; }
  if ($_GET["size"]) { $ext3 = "&size=".$_GET["size"]; } else { $ext3 = ""; }
  $me = $me.$ext0.$ext1.$ext2.$ext3;
  $questionlisting .= "        <a href=\"".$me."\"><span class=\"progress-text\">\n";
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
$q->execute();
$r = $q->fetchAll(PDO::FETCH_ASSOC);
$ee = $r;
$qq = $_GET["q"];
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
  $ee[$i]["data"] = json_decode($ee[$i]["data"], true);
  $ee[$i]["submitted"] = $ee[$i]["submitted"];
  if ((isset($ss3[0]) && ($ss3[0] != "all")) || (isset($ss3[1]) && ($ss3[1] != "all"))) { 
    if ($zsqid) { if ($ee[$i]["data"][$zqid1]["Record"][$zsqid] == $subgroupanswer) { array_push($king, $ee[$i]); } }
    else { if ($ee[$i]["data"][$subgroupquestion] == $subgroupanswer) { array_push($king, $ee[$i]); } }
  }
  else { array_push($king, $ee[$i]); }
}

$subgrouprecords = sizeof($king); 
$totalrecords = sizeof($ee);
if ($subgroupanswer != "all") { $records = $king; $basesize = $subgrouprecords; } else { $records = $ee; $basesize = $totalrecords; }


// ---------- CHECK BOX -------- //

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
  $cee = array_count_values($k1); arsort($cee);
  if (json_decode(str_replace($c_code, $c_text, json_encode($cee, JSON_UNESCAPED_SLASHES)), true)) { $c = json_decode(str_replace($c_code, $c_text, json_encode($cee, JSON_UNESCAPED_SLASHES)), true); }
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
  $me = "/admin/?w=result&s=".$_GET["s"];
  if (($qname) || ($_GET["q"])) { $ext0 = "&q=".$qname; } else { $ext0 = ""; }
  if ($showsubgroup == 1) { $ext1 = "&subgroup=".$ss1; } else { $ext1 = ""; }
  if ($_GET["type"]) { $ext2 = "&type=".$_GET["type"]; } else { $ext2 = ""; }
  if ($_GET["size"]) { $ext3 = "&size=".$_GET["size"]; } else { $ext3 = ""; }
  $me = $me.$ext0.$ext1.$ext2.$ext3;
  if ((empty($_GET["type"])) || ($_GET["type"] == "bar-H")) { $menu = "    <p class=\"text-center\"><strong>Choose the chart type [</strong> <u>Bar Horizontal</u> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=bar-V")."\">Bar Vertical</a> <strong>]</strong></p><br>\n"; }
  else if ($_GET["type"] == "bar-V") { $menu = "    <p class=\"text-center\"><strong>Choose the chart type [</strong> <a href=\"".htmlspecialchars($me."&type=bar-H")."\">Bar Horizontal</a> <strong>:</strong> <u>Bar Vertical</u> <strong>]</strong></p><br>\n"; }
}


// ---------- FILE DISPLAY -------- //

else if (($cd == "file") || ($cd == "signaturepad")) {
  $me = "/admin/?w=result&s=".$_GET["s"];
  if (($qname) || ($_GET["q"])) { $ext0 = "&q=".$qname; } else { $ext0 = ""; }
  if ($showsubgroup == 1) { $ext1 = "&subgroup=".$ss1; } else { $ext1 = ""; }
  if ($_GET["type"]) { $ext2 = "&type=".$_GET["type"]; } else { $ext2 = ""; }
  if ($_GET["size"]) { $ext3 = "&size=".$_GET["size"]; } else { $ext3 = ""; }
  $me = $me.$ext0.$ext1.$ext2.$ext3;
  // $me = "/admin/?w=result&s=".$_GET["s"]."&q=".$_GET["q"];
  // if ($_GET["subgroup"]) { $ext1 = "&subgroup=".$_GET["subgroup"]; } else { $ext1 = ""; }
  // if ($_GET["type"]) { $ext2 = "&type=".$_GET["type"]; } else { $ext2 = ""; }
  // if ($_GET["size"]) { $ext3 = "&size=".$_GET["size"]; } else { $ext3 = ""; }
  // $me = $me.$ext1.$ext2.$ext3;
  if ($_GET["p"]) { $p = $_GET["p"]; }
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
  $basedir = "../members/assets/upload/".$_GET["s"]."/";
  $urldir = "/members/assets/upload/".$_GET["s"]."/";
  if (empty($_GET["size"]) || ($_GET["size"] == "S")) {
    $outdirect = "    <p class=\"text-center\"><strong>Choose the preview size [</strong> <u>small</u> <strong>:</strong> <a href=\"".htmlspecialchars($me."&size=M")."\">medium</a> <strong>:</strong> <a href=\"".htmlspecialchars($me."&size=L")."\">large</a> <strong>]</strong></p>\n";
    $bb = 0;
    $outdirect .= $pagination."    <br>\n";
    $outdirect .= "    <div class=\"pull-right small grey\"><small>Note: Some pictures may appear to be up-side-down - this is<br>driven by a different rotation setting on respondent's device</small></div>\n";
    $outdirect .= "    <p>Found $totalresponses records in our database (showing results $from_record to $to_record)</p>\n";
    $outdirect .= "    <table>\n";
    $outdirect .= "      <tr>\n";
    foreach ($kk as $A => $B) {
      if ($B) {
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
        $outdirect .= "        <td style=\"text-align:center\"><a href=\"".$urldir."full/".$B."\" title=\"Click to open a full size image in a new window\" data-gallery=\"".$_GET["s"]."\" data-toggle=\"lightbox\" data-title=\"Image upload for $project\" data-footer=\"$footer\"><img src=\"".$urldir."resized_S/".$B."\" class=\"thumbnail img-responsive\"></a></td>\n";
        $bb++;
        if (($bb % 5 == 0) && ($bb > 0)) { $outdirect .= "      </tr>\n      <tr>\n"; }
      }
    }
    $outdirect .= "      </tr>\n";
    $outdirect .= "    </table>\n";
    $outdirect .= $pagination."\n<br>\n";
  } else if ($_GET["size"] == "M") {
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
        $outdirect .= "        <td style=\"text-align:center\"><a href=\"".$urldir."full/".$B."\" title=\"Click to open a full size image in a new window\" data-gallery=\"".$_GET["s"]."\" data-toggle=\"lightbox\" data-title=\"Image upload for $project\" data-footer=\"$footer\"><img src=\"".$urldir."resized_M/".$B."\" class=\"thumbnail img-responsive\"></a></td>\n";
        $bb++;
        if (($bb % 3 == 0) && ($bb > 0)) { $outdirect .= "    </tr>\n      <tr>\n"; }
      }
    }
    $outdirect .= "      </tr>\n";
    $outdirect .= "    </table>\n";
    $outdirect .= $pagination."    <br>\n";
  } else if ($_GET["size"] == "L") {
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
        $outdirect .= "        <td style=\"text-align:center\"><a href=\"".$urldir."full/".$B."\" title=\"Click to open a full size image in a new window\" data-gallery=\"".$_GET["s"]."\" data-toggle=\"lightbox\" data-title=\"Image upload for $project\" data-footer=\"$footer\"><img src=\"".$urldir."resized_L/".$B."\" class=\"thumbnail img-responsive\"></a></td>\n";
        $bb++;
        if (($bb % 2 == 0) && ($bb > 0)) { $outdirect .= "    </tr>\n      <tr>\n"; }
      }
    }
    $outdirect .= "      </tr>\n";
    $outdirect .= "    </table>\n";
    $outdirect .= $pagination."\n<br>\n";
  }
}



// ---------- MATRIXDROPDOWN -------- //

else if ($cd == "matrixdropdown") {
  $showmulti = "0";
  $k = array(); $k0 = array(); $cee2 = array();
  for ($i=0; $i < count($records); $i++) { 
    if (count($r_value > "1")) { $dr[] = $records[$i]["data"][$qq]; $showmulti = "1"; } 
    else { foreach ($r_value as $k7 => $v7) { $dr[] = $records[$i]["data"][$qq][$v7]; } }
  }
  $dr = flip($dr);
  foreach ($dr as $k => $v) { foreach ($v as $pk => $pv) { foreach ($pv as $subkey => $subvalue) { $k0[$k][$subkey][] = $subvalue; } } }
  // print_r($k0);
  if (count($k0) > "1") {
    $showmulti = "1";
    foreach ($k0 as $k0s => $v0s) { 
      foreach ($v0s as $k1s => $v1s) { 
        $cee1[$k0s][$k1s] = array_count_values($v1s); 
      }
    } 
    foreach ($cee1 as $ck0 => $cee2) {
      $bbc = 1;
      $outtitle5 = "<h4 class=\"blue\">For this question, there is a total of ".count($cee1)." sub-question(s).</h4>";
      // print_r($cee2);
      foreach ($cee2 as $ckey => $cvalue) {
        $Aaa = $ckey;
        if (json_decode(str_replace($c_code, $c_text, json_encode($cvalue, JSON_UNESCAPED_SLASHES)), true)) { $c = json_decode(str_replace($c_code, $c_text, json_encode($cvalue, JSON_UNESCAPED_SLASHES)), true); }
        $totalresponses = array_sum($c); 
        $countresponses = count($c);
        if ($countresponses > $toplimit) { $ctop = array_slice($c, 0, $toplimit); $topmessage[$bbc]= "<p class=\"green\"><strong>Showing top ".$toplimit." results (from a total of ".$countresponses.")</strong></p>"; }
        else { $ctop = $c; }      
        $answer1[$bbc] = "This question contains a total of ".number_format($totalresponses)." responses.";
        $A = array_keys($ctop); $B = array_values($ctop);
        $C = count($ctop); $Aee = array_keys($cvalue);
        $tableout5A[$bbc] = "  <h4>".$qq.": ".$Aaa."</h4>\n";
        $tableout5[$bbc] .= "  <table class=\"table table-hover table-condensed\" style=\"font-family:boon\">\n";
        $tableout5[$bbc] .= "    <thead>\n";
        $tableout5[$bbc] .= "      <tr class=\"bg-primary\">\n";
        $tableout5[$bbc] .= "        <th width=\"30%\">Thai</th>\n";
        $tableout5[$bbc] .= "        <th width=\"30%\">English</th>\n";
        $tableout5[$bbc] .= "        <th style=\"text-align:right\" width=\"20%\">Count</th>\n";
        $tableout5[$bbc] .= "        <th style=\"text-align:right\" width=\"20%\">Percentage</th>\n";
        $tableout5[$bbc] .= "      </tr>\n";
        $tableout5[$bbc] .= "    </thead>\n";
        $tableout5[$bbc] .= "    <tbody>\n";
        $tableout5[$bbc] .= "        <tr colspan=\"4\"><span class=\"blue\"><strong>".$ck0."</strong></span></tr>\n";
        $out5[$bbc] = "";
        $out5[$bbc] .= "    data.addRows($C);\n";
        $ppp = $ck0;
        // $outmn = "";
        // print_r($c);
        for ($m=0; $m < count($c); $m++) {
          $BB[$m] = number_format(($B[$m]/$basesize)*100, 2);
          $m1 = $m+1; $m2 = $m1+1;
          if ($A[$m] == "") { $zA = 0; } else { $zA = addslashes($A[$m]); }
          if ($Aee[$m] == "") { $zAee = 0; } else { $zAee = addslashes($Aee[$m]); }
          if ($B[$m] == "") { $zB = 0; } else { $zB = addslashes($B[$m]); }
          if ($BB[$m] == "") { $zC = 0; } else { $zC = addslashes($BB[$m]); }
          // print_r($zAee);
          // $out5[$bbc] .= $out5a[$bbc];
          // $out5[$bbc] .= $out5a[$bbc];
          $out5b[$bbc] .= "    data.setCell(".$m.", 0, '".$ppp."');\n";
          $out5b[$bbc] .= "    data.setCell(".$m.", 1, '".$zA."');\n";
          $out5b[$bbc] .= "    data.setCell(".$m.", 2, '".$zB."');\n";
          $out5b[$bbc] .= "    data.setCell(".$m.", 3, '".$zC."');\n";
          $tableout5[$bbc] .= "      <tr>\n";
          $tableout5[$bbc] .= "        <td align=\"left\">".$zA."</td>\n";
          $tableout5[$bbc] .= "        <td align=\"left\">".$zAee."</td>\n";
          $tableout5[$bbc] .= "        <td align=\"right\">".$zB."</td>\n";
          $tableout5[$bbc] .= "        <td align=\"right\">".$zC."%</td>\n";
          $tableout5[$bbc] .= "      </tr>\n";
        }
        // $out5[$bbc] .= $out5a[$bbc];
        $out5[$bbc] .= $out5b[$bbc];
        // print_r($outmn);
        // foreach ($outmn as $k4 => $v4) { $out5[$mmn] .= $$v4; }
        // foreach ($tableoutmn as $k5 => $v5) { $out5[$mmn] .= $$v5; }
        $tableout5[$bbc] .= "    </tbody>\n";
        $tableout5[$bbc] .= "  </table><br>\n";
        // print_r($out5[$bbc]);
        $me = "/admin/?w=result&s=".$_GET["s"];
        if (($qname) || ($_GET["q"])) { $ext0 = "&q=".$qname; } else { $ext0 = ""; }
        if ($showsubgroup == 1) { $ext1 = "&subgroup=".$ss1; } else { $ext1 = ""; }
        if ($_GET["type"]) { $ext2 = "&type=".$_GET["type"]; } else { $ext2 = ""; }
        if ($_GET["size"]) { $ext3 = "&size=".$_GET["size"]; } else { $ext3 = ""; }
        $me = $me.$ext0.$ext1.$ext2.$ext3;
        if ((empty($_GET["type"])) || ($_GET["type"] == "bar-H")) { $menu = "    <p class=\"text-center\"><strong>Choose the chart type [</strong> <u>Bar Horizontal</u> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=bar-V")."\">Bar Vertical</a> <strong>]</strong></p><br>\n"; }
        else if ($_GET["type"] == "bar-V") { $menu = "    <p class=\"text-center\"><strong>Choose the chart type [</strong> <a href=\"".htmlspecialchars($me."&type=bar-H")."\">Bar Horizontal</a> <strong>:</strong> <u>Bar Vertical</u> <strong>]</strong></p><br>\n"; }
        $bbc++;
      }  
    }
  }
  else {
    $showmulti = "0";
    foreach ($k0 as $k0s => $v0s) { 
      foreach ($v0s as $k1s => $v1s) { 
        $cee2[$k1s] = array_count_values($v1s); 
        arsort($cee2[$k1s]); 
      }
    } 
    $bbd = 1;
    $outtitle5 = "<h4 class=\"blue\">For this question, there is a total of ".count($cee2)." sub-question(s).</h4>";
    foreach ($cee2 as $ckey => $cvalue) {
      $Aaa = $ckey;
      if (json_decode(str_replace($c_code, $c_text, json_encode($cvalue, JSON_UNESCAPED_SLASHES)), true)) { $c = json_decode(str_replace($c_code, $c_text, json_encode($cvalue, JSON_UNESCAPED_SLASHES)), true); }
      $totalresponses = array_sum($c); //print_r($totalresponses);
      $A = array_keys($c); $B = array_values($c); //print_r($A); print_r($B);
      $C = count($c); $Aee = array_keys($cvalue); //print_r($C); print_r($cee);
      $tableout5A[$bbd] = "  <h4>".$qq.": ".$Aaa."</h4>\n";
      $tableout5[$bbd] .= "  <table class=\"table table-hover table-condensed\" style=\"font-family:boon\">\n";
      $tableout5[$bbd] .= "    <thead>\n";
      $tableout5[$bbd] .= "      <tr class=\"bg-primary\">\n";
      $tableout5[$bbd] .= "        <th width=\"30%\">Thai</th>\n";
      $tableout5[$bbd] .= "        <th width=\"30%\">English</th>\n";
      $tableout5[$bbd] .= "        <th style=\"text-align:right\" width=\"20%\">Count</th>\n";
      $tableout5[$bbd] .= "        <th style=\"text-align:right\" width=\"20%\">Percentage</th>\n";
      $tableout5[$bbd] .= "      </tr>\n";
      $tableout5[$bbd] .= "    </thead>\n";
      $tableout5[$bbd] .= "    <tbody>\n";
      $out5[$bbd] = "";
      $out5[$bbd] .= "    data.addRows($C);\n";
      for ($m=0; $m < count($c); $m++) {
        $BB[$m] = number_format(($B[$m]/$basesize)*100, 2);
        $m1 = $m+1; $m2 = $m1+1;
        if ($A[$m] == "") { $zA = 0; } else { $zA = addslashes($A[$m]); }
        if ($Aee[$m] == "") { $zAee = 0; } else { $zAee = addslashes($Aee[$m]); }
        if ($B[$m] == "") { $zB = 0; } else { $zB = addslashes($B[$m]); }
        if ($BB[$m] == "") { $zC = 0; } else { $zC = addslashes($BB[$m]); }
        // print_r($zAee);
        $out5[$bbd] .= "    data.setCell($m, 0, '$zA');\n";
        $out5[$bbd] .= "    data.setCell($m, 1, $zB);\n";
        $out5[$bbd] .= "    data.setCell($m, 2, $zC);\n";
        $tableout5[$bbd] .= "      <tr>\n";
        $tableout5[$bbd] .= "        <td align=\"left\">".$zA."</td>\n";
        $tableout5[$bbd] .= "        <td align=\"left\">".$zAee."</td>\n";
        $tableout5[$bbd] .= "        <td align=\"right\">".$zB."</td>\n";
        $tableout5[$bbd] .= "        <td align=\"right\">".$zC."%</td>\n";
        $tableout5[$bbd] .= "      </tr>\n";
      }
      $tableout5[$bbd] .= "    </tbody>\n";
      $tableout5[$bbd] .= "  </table><br>\n";
      $me = "/admin/?w=result&s=".$_GET["s"];
      if (($qname) || ($_GET["q"])) { $ext0 = "&q=".$qname; } else { $ext0 = ""; }
      if ($showsubgroup == 1) { $ext1 = "&subgroup=".$ss1; } else { $ext1 = ""; }
      if ($_GET["type"]) { $ext2 = "&type=".$_GET["type"]; } else { $ext2 = ""; }
      if ($_GET["size"]) { $ext3 = "&size=".$_GET["size"]; } else { $ext3 = ""; }
      $me = $me.$ext0.$ext1.$ext2.$ext3;
      if ((empty($_GET["type"])) || ($_GET["type"] == "bar-H")) { $menu = "    <p class=\"text-center\"><strong>Choose the chart type [</strong> <u>Bar Horizontal</u> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=bar-V")."\">Bar Vertical</a> <strong>]</strong></p><br>\n"; }
      else if ($_GET["type"] == "bar-V") { $menu = "    <p class=\"text-center\"><strong>Choose the chart type [</strong> <a href=\"".htmlspecialchars($me."&type=bar-H")."\">Bar Horizontal</a> <strong>:</strong> <u>Bar Vertical</u> <strong>]</strong></p><br>\n"; }
      $bbd++;
    }
  }
}


// ---------- RADIOGROUP -------- //

else if (($cd == "radiogroup") || ($cd == "radiogrouphtml") || ($cd == "dropdown") || ($cd == "barrating") || ($cd == "NPS") || ($cd == "rating")) {
  $k = array(); $k1 = array();  $ck = array();
  $tableout3 = "";
  foreach ($records as $k1 => $p1) { $jj[] = $p1; }
  for ($i=0; $i < count($jj); $i++) { $k[] = $jj[$i]["data"][$qq]; }
  $cee = array_count_values($k); arsort($cee);
  if (json_decode(str_replace($c_code, $c_text, json_encode($cee, JSON_UNESCAPED_SLASHES)), true)) { $c = json_decode(str_replace($c_code, $c_text, json_encode($cee, JSON_UNESCAPED_SLASHES)), true); }
  $totalresponses = array_sum($c); //print_r($totalresponses);
  $A = array_keys($c); $B = array_values($c);
  $C = count($c); $Aee = array_keys($cee); 
  $tableout3 .= "  <table class=\"table table-hover\" style=\"font-family:boon\">\n";
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
    $BB[$m] = number_format(($B[$m]/$basesize)*100, 2);
    // $BB[$m] = number_format(($B[$m]/$totalresponses)*100, 2);
    $m1 = $m+1; $m2 = $m1+1;
    if ($A[$m] == "") { $zA = 0; } else { $zA = addslashes($A[$m]); }
    if ($Aee[$m] == "") { $zAee = 0; } else { $zAee = addslashes($Aee[$m]); }
    if ($B[$m] == "") { $zB = 0; } else { $zB = addslashes($B[$m]); }
    if ($BB[$m] == "") { $zC = 0; } else { $zC = addslashes($BB[$m]); }
    // print_r($zAee);
    $out .= "    data.setCell($m, 0, '$zA');\n";
    $out .= "    data.setCell($m, 1, $zB);\n";
    $out .= "    data.setCell($m, 2, $zC);\n";
    $tableout3 .= "      <tr>\n";
    $tableout3 .= "        <td align=\"left\">".$zA."</td>\n";
    $tableout3 .= "        <td align=\"left\">".$zAee."</td>\n";
    $tableout3 .= "        <td align=\"right\">".$zB."</td>\n";
    $tableout3 .= "        <td align=\"right\">".$zC."%</td>\n";
    $tableout3 .= "      </tr>\n";
  }
  $tableout3 .= "    </tbody>\n";
  $tableout3 .= "  </table><br>\n";
  $me = "/admin/?w=result&s=".$_GET["s"];
  if (($qname) || ($_GET["q"])) { $ext0 = "&q=".$qname; } else { $ext0 = ""; }
  if ($showsubgroup == 1) { $ext1 = "&subgroup=".$ss1; } else { $ext1 = ""; }
  if ($_GET["type"]) { $ext2 = "&type=".$_GET["type"]; } else { $ext2 = ""; }
  if ($_GET["size"]) { $ext3 = "&size=".$_GET["size"]; } else { $ext3 = ""; }
  $me = $me.$ext0.$ext1.$ext2.$ext3;
  if ((empty($_GET["type"])) || ($_GET["type"] == "pie")) { $menu = "<p class=\"text-center\"><strong>Choose the chart type [</strong> <u>Pie</u> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=donut")."\">Donut</a> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=bar-H")."\">Bar Horizontal</a> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=bar-V")."\">Bar Vertical</a> <strong>]</strong></p><br>\n"; }
  else if ($_GET["type"] == "donut") { $menu = "<p class=\"text-center\"><strong>Choose the chart type [</strong> <a href=\"".htmlspecialchars($me."&type=pie")."\">Pie</a> <strong>:</strong> <u>Donut</u> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=bar-H")."\">Bar Horizontal</a> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=bar-V")."\">Bar Vertical</a> <strong>]</strong></p><br>\n"; }
  else if ($_GET["type"] == "bar-H") { $menu = "<p class=\"text-center\"><strong>Choose the chart type [</strong> <a href=\"".htmlspecialchars($me."&type=pie")."\">Pie</a> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=donut")."\">Donut</a> <strong>:</strong> <u>Bar Horizontal</u> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=bar-V")."\">Bar Vertical</a> <strong>]</strong></p><br>\n"; }
  else if ($_GET["type"] == "bar-V") { $menu = "<p class=\"text-center\"><strong>Choose the chart type [</strong> <a href=\"".htmlspecialchars($me."&type=pie")."\">Pie</a> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=donut")."\">Donut</a> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=bar-H")."\">Bar Horizontal</a> <strong>:</strong> <u>Bar Vertical</u> <strong>]</strong></p><br>\n"; }
}
else if ($cd == "multipletext") {
  if ((preg_match('/Last10/i', $_GET["q"]) == 1) || (preg_match('/Next10/i', $_GET["q"]) == 1)) {
    $k = array(); $k1 = array();  $ck = array();
    $tableout3 = "";
    $mk1 = array();
    for ($i=0; $i < count($records); $i++) { array_push($mk1, $records[$i]["data"][$qq]); }
    foreach ($mk1 as $n => $o) { foreach ($o as $kn => $ko) { $ck[$kn] += $ko; } }
    $cee = $ck; arsort($cee);
    if (json_decode(str_replace($ee_text, $ee_code, json_encode($cee, JSON_UNESCAPED_SLASHES)), true)) { $c = json_decode(str_replace($ee_text, $ee_code, json_encode($cee, JSON_UNESCAPED_SLASHES)), true); }
    $totalresponses = array_sum($c); //print_r($totalresponses);
    $A = array_keys($c); $B = array_values($c);
    $C = count($c); $Aee = array_keys($cee); 
    $tableout3 .= "  <table class=\"table table-hover\" style=\"font-family:boon\">\n";
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
      // $BB[$m] = number_format(($B[$m]/$basesize)*100, 2);
      $BB[$m] = number_format(($B[$m]/$totalresponses)*100, 2);
      $m1 = $m+1; $m2 = $m1+1;
      if ($A[$m] == "") { $zA = 0; } else { $zA = addslashes($A[$m]); }
      if ($Aee[$m] == "") { $zAee = 0; } else { $zAee = addslashes($Aee[$m]); }
      if ($B[$m] == "") { $zB = 0; } else { $zB = addslashes($B[$m]); }
      if ($BB[$m] == "") { $zC = 0; } else { $zC = addslashes($BB[$m]); }
      // print_r($zAee);
      $out .= "    data.setCell($m, 0, '$zA');\n";
      $out .= "    data.setCell($m, 1, $zB);\n";
      $out .= "    data.setCell($m, 2, $zC);\n";
      $tableout3 .= "      <tr>\n";
      $tableout3 .= "        <td align=\"left\">".$zA."</td>\n";
      $tableout3 .= "        <td align=\"left\">".$zAee."</td>\n";
      $tableout3 .= "        <td align=\"right\">".$zB."</td>\n";
      $tableout3 .= "        <td align=\"right\">".$zC."%</td>\n";
      $tableout3 .= "      </tr>\n";
    }
    $tableout3 .= "    </tbody>\n";
    $tableout3 .= "  </table><br>\n";
    $me = "/admin/?w=result&s=".$_GET["s"];
    if (($qname) || ($_GET["q"])) { $ext0 = "&q=".$qname; } else { $ext0 = ""; }
    if ($showsubgroup == 1) { $ext1 = "&subgroup=".$ss1; } else { $ext1 = ""; }
    if ($_GET["type"]) { $ext2 = "&type=".$_GET["type"]; } else { $ext2 = ""; }
    if ($_GET["size"]) { $ext3 = "&size=".$_GET["size"]; } else { $ext3 = ""; }
    $me = $me.$ext0.$ext1.$ext2.$ext3;
    if ((empty($_GET["type"])) || ($_GET["type"] == "bar-H")) { $menu = "    <p class=\"text-center\"><strong>Choose the chart type [</strong> <u>Bar Horizontal</u> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=bar-V")."\">Bar Vertical</a> <strong>]</strong></p><br>\n"; }
    else if ($_GET["type"] == "bar-V") { $menu = "    <p class=\"text-center\"><strong>Choose the chart type [</strong> <a href=\"".htmlspecialchars($me."&type=bar-H")."\">Bar Horizontal</a> <strong>:</strong> <u>Bar Vertical</u> <strong>]</strong></p><br>\n"; }
  } else if ((preg_match('/Last10/i', $_GET["q"]) == 0) || (preg_match('/Next10/i', $_GET["q"]) == 0)) {
    $k1 = array(); $k2 = array(); $cee2 = array();
    for ($i=0; $i < count($records); $i++) { $k1[] = $records[$i]["data"][$qq]; }
    foreach ($k1 as $key => $value) { foreach ($value as $subkey => $subvalue) { $k2[$subkey][] = $subvalue; } }
    foreach ($k2 as $k2s => $v2s) { $cee2[$k2s] = array_count_values($v2s); arsort($cee2[$k2s]); }
    $nnn = 1;
    $c = array();
    $outtitle6 = "<h4 class=\"blue\">For this question, there is a total of ".count($cee2)." sub-question(s).</h4>";
    // $outtitle6 = "<h4>There are ".count($cee2)." sub questions to this</h4>";
    foreach ($cee2 as $ckey => $cvalue) {
      $Aaa = $ckey;
      if (json_decode(str_replace($c_code, $c_text, json_encode($cvalue, JSON_UNESCAPED_SLASHES)), true)) { $c = json_decode(str_replace($c_code, $c_text, json_encode($cvalue, JSON_UNESCAPED_SLASHES)), true); }
      $totalresponses = array_sum($c); //print_r($totalresponses);
      // print_r($c); print_r(count($c));
      $countresponses = count($c); //print_r($countresponses);
      if ($countresponses > $toplimit) { $ctop = array_slice($c, 0, $toplimit); $topmessage[$nnn]= "<p class=\"green\"><strong>Showing top ".$toplimit." results (from a total of ".$countresponses.")</strong></p>"; }
      else { $ctop = $c; }
      $responsepercent = number_format(($totalresponses/$basesize)*100, '1');
      $answer2 = "<p>This question contains a total of ".number_format($totalresponses)." responses answered by $basesize respondents (<strong>$responsepercent%</strong>).</p>\n";
      $A = array_keys($ctop); $B = array_values($ctop); //print_r($A); print_r($B);
      $C = count($ctop); $Aee = array_keys($cvalue); //print_r($C); print_r($cee);
      $tableout6A[$nnn] = "  <h4>".$qq.": ".$Aaa."</h4>\n";
      $tableout6[$nnn] .= "  <table class=\"table table-hover table-condensed\" style=\"font-family:boon\">\n";
      $tableout6[$nnn] .= "    <thead>\n";
      $tableout6[$nnn] .= "      <tr class=\"bg-primary\">\n";
      $tableout6[$nnn] .= "        <th width=\"30%\">Thai</th>\n";
      $tableout6[$nnn] .= "        <th width=\"30%\">English</th>\n";
      $tableout6[$nnn] .= "        <th style=\"text-align:right\" width=\"20%\">Count</th>\n";
      $tableout6[$nnn] .= "        <th style=\"text-align:right\" width=\"20%\">Percentage</th>\n";
      $tableout6[$nnn] .= "      </tr>\n";
      $tableout6[$nnn] .= "    </thead>\n";
      $tableout6[$nnn] .= "    <tbody>\n";
      $out6[$nnn] = "";
      $out6[$nnn] .= "    data.addRows($C);\n";
      for ($m=0; $m < count($ctop); $m++) {
        $BB[$m] = number_format(($B[$m]/$basesize)*100, 2);
        $m1 = $m+1; $m2 = $m1+1;
        if ($A[$m] == "") { $zA = 0; } else { $zA = addslashes($A[$m]); }
        if ($Aee[$m] == "") { $zAee = 0; } else { $zAee = addslashes($Aee[$m]); }
        if ($B[$m] == "") { $zB = 0; } else { $zB = addslashes($B[$m]); }
        if ($BB[$m] == "") { $zC = 0; } else { $zC = addslashes($BB[$m]); }
        // print_r($zAee);
        $out6[$nnn] .= "    data.setCell($m, 0, '$zA');\n";
        $out6[$nnn] .= "    data.setCell($m, 1, $zB);\n";
        $out6[$nnn] .= "    data.setCell($m, 2, $zC);\n";
        $tableout6[$nnn] .= "      <tr>\n";
        $tableout6[$nnn] .= "        <td align=\"left\">".$zA."</td>\n";
        $tableout6[$nnn] .= "        <td align=\"left\">".$zAee."</td>\n";
        $tableout6[$nnn] .= "        <td align=\"right\">".$zB."</td>\n";
        $tableout6[$nnn] .= "        <td align=\"right\">".$zC."%</td>\n";
        $tableout6[$nnn] .= "      </tr>\n";
      }
      $tableout6[$nnn] .= "    </tbody>\n";
      $tableout6[$nnn] .= "  </table><br>\n";
      $me = "/admin/?w=result&s=".$_GET["s"];
      if (($qname) || ($_GET["q"])) { $ext0 = "&q=".$qname; } else { $ext0 = ""; }
      if ($showsubgroup == 1) { $ext1 = "&subgroup=".$ss1; } else { $ext1 = ""; }
      if ($_GET["type"]) { $ext2 = "&type=".$_GET["type"]; } else { $ext2 = ""; }
      if ($_GET["size"]) { $ext3 = "&size=".$_GET["size"]; } else { $ext3 = ""; }
      $me = $me.$ext0.$ext1.$ext2.$ext3;
      if ((empty($_GET["type"])) || ($_GET["type"] == "bar-H")) { $menu = "    <p class=\"text-center\"><strong>Choose the chart type [</strong> <u>Bar Horizontal</u> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=bar-V")."\">Bar Vertical</a> <strong>]</strong></p><br>\n"; }
      else if ($_GET["type"] == "bar-V") { $menu = "    <p class=\"text-center\"><strong>Choose the chart type [</strong> <a href=\"".htmlspecialchars($me."&type=bar-H")."\">Bar Horizontal</a> <strong>:</strong> <u>Bar Vertical</u> <strong>]</strong></p><br>\n"; }
      $nnn++;
    }
  }
}


// ---------- TEXT & COMMENT -------- //

else if (($cd == "text" || $cd == "comment")) {
  $tableout2 = "  <table class=\"table table-hover table-condensed\" style=\"font-family:boon\">\n";
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
  $me = "/admin/?w=result&s=".$_GET["s"];
  if (($qname) || ($_GET["q"])) { $ext0 = "&q=".$qname; } else { $ext0 = ""; }
  if ($showsubgroup == 1) { $ext1 = "&subgroup=".$ss1; } else { $ext1 = ""; }
  if ($_GET["type"]) { $ext2 = "&type=".$_GET["type"]; } else { $ext2 = ""; }
  if ($_GET["size"]) { $ext3 = "&size=".$_GET["size"]; } else { $ext3 = ""; }
  $me = $me.$ext0.$ext1.$ext2.$ext3;
  if ((empty($_GET["type"])) || ($_GET["type"] == "bar-H")) { $menu = "    <p class=\"text-center\"><strong>Choose the chart type [</strong> <u>Bar Horizontal</u> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=bar-V")."\">Bar Vertical</a> <strong>]</strong></p><br>\n"; }
  else if ($_GET["type"] == "bar-V") { $menu = "    <p class=\"text-center\"><strong>Choose the chart type [</strong> <a href=\"".htmlspecialchars($me."&type=bar-H")."\">Bar Horizontal</a> <strong>:</strong> <u>Bar Vertical</u> <strong>]</strong></p><br>\n"; }
}


// ---------- MATRIX -------- //

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
  $c1 = array_combine($db, $dd); // percentage
  $c1a = array_combine($db, $dc); // absolute
  $c2 = array_combine($db, $average);
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
  $tableout1A = "<h4>Results in percentage</h4>\n";
  $tableout1A .= "  <table class=\"table table-hover table-condensed\" style=\"font-family:boon\">\n";
  $tableout1A .= "    <thead>\n";
  $tableout1A .= "      <tr class=\"bg-primary\">\n";
  $tableout1A .= "        <th width=\"20%\"></th>\n";
  $tableout1B = "<h4>Results in absolute number</h4>\n";
  $tableout1B .= "  <table class=\"table table-hover table-condensed\" style=\"font-family:boon\">\n";
  $tableout1B .= "    <thead>\n";
  $tableout1B .= "      <tr class=\"bg-info\">\n";
  $tableout1B .= "        <th width=\"20%\"></th>\n";
  if ((empty($_GET["type"])) || ($_GET["type"] == "bar-H-mean") || ($_GET["type"] == "bar-V-mean")) { $cwidth = 80/($ccmax+1); } else { $cwidth = 80/($ccmax); }
  $out = "[ 'Attribute', ";
  foreach ($column_link as $a) { $out .= "{ label: '".$a."', type: 'number' }, "; } // label
  foreach ($column_link1 as $a1) { 
    $tableout1A .= "        <th style=\"text-align:right\" width=\"$cwidth%\">$a1 (%)</th>\n";
    $tableout1B .= "        <th style=\"text-align:right\" width=\"$cwidth%\">$a1 (%)</th>\n";
  } // label
  if ((empty($_GET["type"])) || ($_GET["type"] == "bar-H-mean") || ($_GET["type"] == "bar-V-mean")) { 
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
    if (json_decode(str_replace($ee_code, $ee_text, json_encode($b, JSON_UNESCAPED_SLASHES)), true)) { $bb = json_decode(str_replace($ee_code, $ee_text, json_encode($b, JSON_UNESCAPED_SLASHES)), true); }
    // if (json_decode(str_replace($ee_code, $ee_text, json_encode($b)), true)) { $bb = json_decode(str_replace($ee_code, $ee_text, json_encode($b)), true); }
    $bb1 = json_decode(json_encode($b), true);
    $out .= "      [ '".($bb)."', ";
    $tableout1A .= "      <tr>\n";
    $tableout1A .= "        <td align=\"right\">$bb1</td>\n";
    $tableout1B .= "      <tr>\n";
    $tableout1B .= "        <td align=\"right\">$bb1</td>\n";
    $jj = array(); $jjj = array();
    foreach ($c_code as $c) {
      if (empty($c1[$b][$c])) { $ccc = 0; } else { $ccc = round($c1[$b][$c]); }
      if (empty($c1a[$b][$c])) { $ccc1 = 0; } else { $ccc1 = round($c1a[$b][$c]); }
      array_push($jj, $c1[$b][$c]);
      array_push($jja, $c1[$b][$c]);
      $out .= $ccc.", ";
      $tableout1A .= "        <td align=\"right\">".$ccc."%</td>\n";
      $tableout1B .= "        <td align=\"right\">".$ccc1."</td>\n";
    } // data for each scale
    $mean = number_format(meanCalculation($jj), 2); //print_r($mean);
    if ((empty($_GET["type"])) || ($_GET["type"] == "bar-H-mean") || ($_GET["type"] == "bar-V-mean")) { 
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
  $me = "/admin/?w=result&s=".$_GET["s"];
  if (($qname) || ($_GET["q"])) { $ext0 = "&q=".$qname; } else { $ext0 = ""; }
  if ($showsubgroup == 1) { $ext1 = "&subgroup=".$ss1; } else { $ext1 = ""; }
  if ($_GET["type"]) { $ext2 = "&type=".$_GET["type"]; } else { $ext2 = ""; }
  if ($_GET["size"]) { $ext3 = "&size=".$_GET["size"]; } else { $ext3 = ""; }
  $me = $me.$ext0.$ext1.$ext2.$ext3;
  if ($ccmax == 5) {
    if ((empty($_GET["type"])) || ($_GET["type"] == "bar-V-mean")) { $menu = "<p class=\"text-center\"><strong>Choose the chart type [</strong> <a href=\"".htmlspecialchars($me."&type=bar-H")."\">Bar Horizontal</a> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=bar-H-mean")."\">Bar Horizontal with Mean</a> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=bar-V")."\">Bar Vertical</a> <strong>:</strong> <u>Bar Vertical with Mean</u> <strong>]</strong></p><br>\n"; }
    else if ($_GET["type"] == "bar-H-mean") { $menu = "<p class=\"text-center\"><strong>Choose the chart type [</strong> <a href=\"".htmlspecialchars($me."&type=bar-H")."\">Bar Horizontal</a> <strong>:</strong> <u>Bar Horizontal with Mean</u> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=bar-V")."\">Bar Vertical</a> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=bar-V-mean")."\">Bar Vertical with Mean</a> <strong>]</strong></p><br>\n"; }
    else if ($_GET["type"] == "bar-V") { $menu = "<p class=\"text-center\"><strong>Choose the chart type [</strong> <a href=\"".htmlspecialchars($me."&type=bar-H")."\">Bar Horizontal</a> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=bar-H-mean")."\">Bar Horizontal with Mean</a> <strong>:</strong> <u>Bar Vertical</u> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=bar-V-mean")."\">Bar Vertical with Mean</a> <strong>]</strong></p><br>\n"; }
    else if ($_GET["type"] == "bar-H") { $menu = "<p class=\"text-center\"><strong>Choose the chart type [</strong> <u>Bar Horizontal</u> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=bar-H-mean")."\">Bar Horizontal with Mean</a> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=bar-V")."\">Bar Vertical</a> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=bar-V-mean")."\">Bar Vertical with Mean</a> <strong>]</strong></p><br>\n"; }
  } else {
    if ((empty($_GET["type"])) || ($_GET["type"] == "bar-H")) { $menu = "<p class=\"text-center\"><strong>Choose the chart type [</strong> <u>Bar Horizontal</u> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=bar-V")."\">Bar Vertical</a> <strong>]</strong></p><br>\n"; }
    else if ($_GET["type"] == "bar-V") { $menu = "<p class=\"text-center\"><strong>Choose the chart type [</strong> <a href=\"".htmlspecialchars($me."&type=bar-H")."\">Bar Horizontal</a> <strong>:</strong> <u>Bar Vertical</u> <strong>]</strong></p><br>\n"; }
  }
}


// ------- Output --------------------------------------------------------------------------

$title = "Survey result";
// $getcsv = "/admin/?w=result&s=".$_GET["s"]."&download=csv";
// $getjson = "/admin/?w=result&s=".$_GET["s"]."&download=json";
// $getxls = "/admin/?w=result&s=".$_GET["s"]."&download=xls";
pageHeader($title);
echo "<h2>$title</h2>\n";
echo "<p class=\"introtext\">This is a tool that helps you view the survey result whenever you need. Result is generated by pulling the data from our server in <em>real time</em>.</p>\n";
echo "<p class=\"introtext\">Although several question types have an option to show results in many different ways (e.g. a few chart types, tabulation, ability to sort data, etc.), there is still a limitation for a certain type of question such as open-ends.</p>\n";
echo "<hr>\n";

// if (($_GET["m"] == "1") || ($_POST["settingreport"] == 1)) { 
if ((($_POST["settingreport"]) == "1") || ($_GET["m"] == 1)) { echo "<div id=\"showalert-m1\"></div>\n"; }
else if ($_GET["m"] == "2") { echo "<div id=\"showalert-m2\"></div>\n"; }
else if ($_GET["m"] == "3") { echo "<div id=\"showalert-m3\"></div>\n"; }
else if ($_GET["m"] == "4") { echo "<div id=\"showalert-m4\"></div>\n"; }
else if ($_GET["m"] == "5") { echo "<div id=\"showalert-m5\"></div>\n"; }
echo "<div id=\"showreadonly\"></div><div id=\"showsaving\"></div><div id=\"showsavesuccess\"></div>\n";
echo "<br>\n";

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

?>

<ul class="nav nav-tabs">
<?php if ((($_POST["settingreport"]) == "1") || ($_GET["m"] == "1") || ($_GET["m"] == "3")) { ?>
  <li><a href="#A1" data-toggle="tab"><i class="pe-line-chart pe-fw"></i> Results</a></li>
  <li class="active"><a href="#A2" data-toggle="tab"><i class="pe-wrench pe-fw"></i> Settings</a></li>
<?php } else { ?>
  <li class="active"><a href="#A1" data-toggle="tab"><i class="pe-line-chart pe-fw"></i> Results</a></li>
  <li><a href="#A2" data-toggle="tab"><i class="pe-wrench pe-fw"></i> Settings</a></li>
<?php } ?>
</ul>
<br>
<br>

<div class="tab-content">
<?php if ((($_POST["settingreport"]) == "1") || ($_GET["m"] == "1") || ($_GET["m"] == "3")) { ?>
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

if (($_GET["subgroup"] != "all") || ($subgroupquestion != "all") || ($subgroupanswer != "all") || ($subgrouprecords)) { 
  $responsepercent = number_format(($totalresponses/$subgrouprecords)*100, '1');
  $subgrouppercent = number_format(($subgrouprecords/$totalrecords)*100, '1');
} else { 
  $responsepercent = number_format(($totalresponses/$basesize)*100, '1');
  $subgrouppercent = number_format(($subgrouprecords/$totalresponses)*100, '1');
}

if ($totalresponses) { 
  if ($totalresponses <= $basesize) { 
    if ((($cd == "multipletext") && (preg_match('/Last10/i', $_GET["q"]) == "0")) || (($cd == "multipletext") && (preg_match('/Next10/i', $_GET["q"]) == "0"))) { $answer1 = $answer2; }
    else { $answer1 = "This question contains a total of ".number_format($totalresponses)." responses answered by $basesize respondents (<strong>$responsepercent%</strong>).\n"; } 
  } else if ($totalresponses > $basesize) {
    if ($cd == "matrix") {
      $responseperattribute = number_format($totalresponses/$numberofattributes, '1');
      $responseperrecord = number_format($totalresponses/$numberofattributes, '1');
      $answer1 = "This question contains a total of ".number_format($totalresponses)." responses across $numberofattributes attiributes answered by $basesize respondents, or at a total of <strong>$responseperattribute responses for each of the attributes</strong>.\n";
    } else {
      $responseperrecord = number_format($totalresponses/$basesize, '1');
      $answer1 = "This question contains a total of ".number_format($totalresponses)." responses answered by $basesize respondents or at an average of <strong>$responseperrecord responses per respondent</strong>.\n";
    }
  }  
} else if ($totalresponses == "0") {
  $answer1 = "This question contains no answer at all (<strong>0%</strong>) so there is no data to show.\n";
} else {
  $answer1 = "This is a Non-responsive question, so number of responses is not available.\n";
}

// print_r($answer1);
$answers = "";
$answersubgroup = "<p class=\"red\"><strong>Caution:</strong> You are viewing data with subgroup analysis ($subgroupquestion = $subgroupanswer) which does <strong>*<u>not</u>*</strong> represent the total sample. In fact this subgroup only represents <strong>$subgrouppercent%</strong> of the total sample ($subgrouprecords out of $totalrecords respondents).</p>\n";

if ($cd == "matrix") { $answers .= "<p>".$answer1."</p>"; if ($showsubgroup == "1") { $answers .= $answersubgroup; } } 
else if (($cd == "comment") || ($cd == "text")) { $answers .= "<p>".$answer1."</p>"; if ($showsubgroup == "1") { $answers .= $answersubgroup; } }
else if (($cd == "radiogroup") || ($cd == "radiogrouphtml") || ($cd == "dropdown") || ($cd == "barrating") || ($cd == "NPS") || ($cd == "rating")) { $answers .= "<p>".$answer1."</p>"; if ($showsubgroup == "1") { $answers .= $answersubgroup; } } 
else if (($cd == "checkbox") || ($cd == "checkboxhtml")) { $answers .= "<p>".$answer1."</p>"; if ($showsubgroup == "1") { $answers .= $answersubgroup; } }
else if (($cd == "matrixdropdown") || ($cd == "multipletext")) { 
  if ((preg_match('/Last10/i', $_GET["q"]) == "1") || (preg_match('/Next10/i', $_GET["q"]) == "1")) {
    if ($showsubgroup == "1") { $answers .= "<p>".$answer1."</p>"; $answers .= $answersubgroup; } 
    else { $answers .= "<p>".$answer1."</p>"; }
  } else if ((preg_match('/Last10/i', $_GET["q"]) == "0") || (preg_match('/Next10/i', $_GET["q"]) == "0")) {
    $nnn = 1; 
    foreach ($cee2 as $ckey => $cvalue) { 
      if ($showsubgroup == "1") { $answers[$nnn] .= "<p>$answer1</p>"; $answers[$nnn] .= $answersubgroup; } 
      else { $answers[$nnn] .= "<p>".$answer1."</p>"; }
      $nnn++; 
    } 
  } else {
    if ($showsubgroup == "1") { $answers .= "<p>$answer1</p>"; $answers .= $answersubgroup; } 
    else { $answers .= "<p>".$answer1."</p>"; }
  }
}


// ---------- SHOW RESULTS IF QUESTION HAS BEEN SPECIFIED-------- //

if ($_GET["q"]) { 

// if (substr($_GET["q"], -1) == "1") { $seq = 1; } else { $seq = 0; }
// echo $sequential;
?>

<h3>Question preview <small>(read only)</small></h3>
<p>Below is a quick preview of the question you have selected above. It shows the question type and how it was actually asked, plus the pre-coded answers (if any) that are shown in bilingual.</p>
<div class="row">
  <div class="col-sm-12" style="margin-bottom:40px;border: 1px dotted grey; background:mitcream">
    <?php echo $qout; ?>
  </div>
  <div class="col-sm-12">
<?php 

if (($cd == "file") || ($cd == "signaturepad")) {
  echo $outdirect;
} else {
  if ($cd != "html") { echo "<h3>The result</h3>\n"; }
  if (($cd == "radiogroup") || ($cd == "radiogrouphtml") || ($cd == "dropdown") || ($cd == "barrating") || ($cd == "NPS") || ($cd == "rating")) { $changeicon = "<i class=\"pe-pie-chart pe-fw\"></i> Chart"; }
  else if (($cd == "checkbox") || ($cd == "checkboxhtml") || ($cd == "text")) { $changeicon = "<i class=\"pe-bar-chart pe-fw\"></i> Chart"; }
  else if ($cd == "comment") { $changeicon = "<i class=\"pe-pencil pe-fw\"></i> Virtualisation"; }
  else { $changeicon = "<i class=\"pe-line-chart pe-fw\"></i> Chart"; }
  echo "</div>\n";
  if ($cd != "html") {
    echo "<ul class=\"nav nav-tabs\">\n";
    echo "  <li class=\"active\"><a href=\"#B1\" data-toggle=\"tab\">".$changeicon." </a></li>\n";
    echo "  <li><a href=\"#B2\" data-toggle=\"tab\"><i class=\"pe-table pe-fw\"></i> Table</a></li>\n";
    echo "</ul>\n";
    echo "<br>\n";
    echo "<br>\n";  
  }
  echo "<div class=\"tab-content\">\n";
  echo " <div id=\"B1\" class=\"tab-pane fade in active\">\n";
  if ($cd == "matrixdropdown") { echo $outtitle5; } else if ($cd == "multipletext") { echo $outtitle6; }
  if (($cd == "comment") || ($cd == "html") || ($cd == "matrixdropdown") || ($cd == "multipletext")) { }
  else { echo $answers; } 
  if ($totalresponses) {
    if ($cd != "comment") { echo $menu; } 
    if (($cd == "matrix") || ($cd == "comment") || ($cd == "html") || ($cd == "matrixdropdown") || ($cd == "multipletext")) { }
    else { echo "<p><small class=\"blue\">You can sort the results by clicking the table's headers</small></p>\n"; } 
    if (($cd == "matrixdropdown") || ($cd == "multipletext")) { 
      if ((preg_match('/Last10/i', $_GET["q"]) == "1") || (preg_match('/Next10/i', $_GET["q"]) == "1")) { 
        // echo "<h4>".$qq.": ".$ckey."</h4>\n";
        echo $answers;
        // echo "<div id=\"table\" style=\"width:300px\"></div><div id=\"chart\"></div>\n";
        echo "<p><small class=\"blue\">You can sort the results by clicking the table's headers</small></p>\n";
        echo "<div id=\"table\" style=\"width:300px\"></div><div id=\"chart\"></div><br><br>\n";
      } else {
        $bbe = 1;
        foreach ($cee2 as $ckey => $cvalue) {
          echo "<h4>".$qq.": ".$ckey."</h4>\n";
          echo $topmessage[$bbe];
          // echo "<p class=\"green\"><strong>Showing top ".$toplimit." results only</strong></p>";
          echo $answers[$bbe];
          echo "<p><small class=\"blue\">You can sort the results by clicking the table's headers</small></p>\n";
          echo "<div id=\"table".$bbe."\" style=\"width:300px\"></div><div id=\"chart".$bbe."\"></div><br><br>\n";
          $bbe++;
        }
      }
    }
    else { echo "<div id=\"table\" style=\"width:300px\"></div><div id=\"chart\"></div>\n"; } 
    echo  "<br><br>\n";
  }
}
?>

<?php if (($cd == "radiogroup") || ($cd == "radiogrouphtml") || ($cd == "dropdown") || ($cd == "barrating") || ($cd == "NPS") || ($cd == "rating")) { ?>

<?php if ((empty($_GET["type"])) || ($_GET["type"] == "pie")) { ?>

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

<?php } else if ($_GET["type"] == "donut") { ?>

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

<?php } else if ($_GET["type"] == "bar-H") { ?>

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

<?php } else if ($_GET["type"] == "bar-V") { ?>

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

<?php } else if (($cd == "checkbox") || ($cd == "checkboxhtml") || ($cd == "text") || ($cd == "matrixdropdown") || ($cd == "multipletext")) { ?>

<?php if ((($cd == "multipletext") && (preg_match('/Last10/i', $_GET["q"]) == 1)) || (($cd == "multipletext") && (preg_match('/Next10/i', $_GET["q"]) == 1))) { ?>

<?php if ((empty($_GET["type"])) || ($_GET["type"] == "bar-H")) { ?>

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

<?php } else if ($_GET["type"] == "newbar-H") { ?>

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

<?php } else if ($_GET["type"] == "bar-V") { ?>

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

<?php } else if (($cd == "matrixdropdown") || (($cd == "multipletext") && (preg_match('/Last10/i', $_GET["q"]) == 0)) || (($cd == "multipletext") && (preg_match('/Next10/i', $_GET["q"]) == 0))) { $bbb = 1; foreach ($cee2 as $ckey => $cvalue) { ?>
  <?php if ((empty($_GET["type"])) || ($_GET["type"] == "bar-H")) { ?>

<script type="text/javascript">
  google.charts.load('current', { 'packages': ['table', 'corechart'] });
  google.charts.setOnLoadCallback(drawSort);
  function drawSort() {
    var data = new google.visualization.DataTable();
<?php if (($cd == "matrixdropdown") && ($showmulti == "1")) { echo "    data.addColumn('string', 'Item');"; } ?>
    data.addColumn('string', 'Answer');
    data.addColumn('number', 'Count');
    data.addColumn('number', 'Percentage');
<?php if ($cd == "matrixdropdown") { echo $out5[$bbb]; } else if ((($cd == "multipletext") && (preg_match('/Last10/i', $_GET["q"]) == 0)) || (($cd == "multipletext") && (preg_match('/Next10/i', $_GET["q"]) == 0))) { echo $out6[$bbb]; } ?>
    var viewTable = new google.visualization.DataView(data);
<?php if (($cd == "matrixdropdown") && ($showmulti == "1")) { echo "    viewTable.setColumns([0, 1, 2, 3]);"; } else { echo "    viewTable.setColumns([0, 1, 2]);"; } ?>
    var viewChart = new google.visualization.DataView(data);
<?php if (($cd == "matrixdropdown") && ($showmulti == "1")) { echo "    viewChart.setColumns([0, 1, 2]);"; } else { echo "    viewChart.setColumns([0, 2]);"; } ?>
    var formatter = new google.visualization.NumberFormat({ suffix: '%', fractionDigits: '1' });
    formatter.format(data, 2);
    var options = { title: '<?php echo $bdx; ?>', width: '100%', height: '<?php if ($C <= 10) { echo 400; } else if (($C > 10) && ($C <= 20)) { echo 800; } else if ($C > 20) { echo 1200; } ?>', bar: { groupWidth: '60%' }, <?php if (($cd == "matrixdropdown") && ($showmulti == "1")) { echo "axes: { x: { 2010: {label: 'A', side: 'top'}, 2000: {label: 'B'} }, "; } ?>legend: { position: 'none' } };
    var chart = new google.visualization.BarChart(document.getElementById('chart<?php echo $bbb; ?>'));
    chart.draw(viewChart, options);
    var table = new google.visualization.Table(document.getElementById('table<?php echo $bbb; ?>'));
    table.draw(viewTable, {width: '100%', height: '100%'});
    google.visualization.events.addListener(table, 'sort', function(event) {
      data.sort([{ column: event.column, desc: !event.ascending }]);
      chart.draw(viewChart);
    });
  }
  $(window).resize(function() { drawSort(); });
</script>

<?php } else if ($_GET["type"] == "newbar-H") { ?>

<script type="text/javascript">
  google.charts.load('current', {'packages': ['table', 'bar']});
  google.charts.setOnLoadCallback(drawSort);
  function drawSort() {
    var data = new google.visualization.DataTable();
<?php if (($cd == "matrixdropdown") && ($showmulti == "1")) { echo "    data.addColumn('string', 'Item');"; } ?>
    data.addColumn('string', 'Answer');
    data.addColumn('number', 'Count');
    data.addColumn('number', 'Percentage');
<?php if ($cd == "matrixdropdown") { echo $out5[$bbb]; } else if ((($cd == "multipletext") && (preg_match('/Last10/i', $_GET["q"]) == 0)) || (($cd == "multipletext") && (preg_match('/Next10/i', $_GET["q"]) == 0))) { echo $out6[$bbb]; } ?>
    var viewTable = new google.visualization.DataView(data);
<?php if (($cd == "matrixdropdown") && ($showmulti == "1")) { echo "    viewTable.setColumns([0, 1, 2, 3]);"; } else { echo "    viewTable.setColumns([0, 1, 2]);"; } ?>
    var viewChart = new google.visualization.DataView(data);
<?php if (($cd == "matrixdropdown") && ($showmulti == "1")) { echo "    viewChart.setColumns([0, 1, 2]);"; } else { echo "    viewChart.setColumns([0, 2]);"; } ?>
    // view.setColumns([0, 1, { calc: "stringify", sourceColumn: 1, type: "string", role: "annotation" }, 2]);
    var formatter = new google.visualization.NumberFormat({ suffix: '%', fractionDigits: '1' });
    formatter.format(data, 2);
    var options = { title: '<?php echo $bdx; ?>', width: '100%', height: '400', bar: { groupWidth: '60%' }, legend: { position: 'none' }, bars: 'horizontal' };
    var chart = new google.charts.Bar(document.getElementById('chart<?php echo $bbb; ?>'));
    chart.draw(viewChart, options);
    var table = new google.visualization.Table(document.getElementById('table<?php echo $bbb; ?>'));
    table.draw(viewTable, {width: '100%', height: '100%'});
    google.visualization.events.addListener(table, 'sort', function(event) {
      data.sort([{ column: event.column, desc: !event.ascending }]);
      chart.draw(viewChart);
    });
  }
  $(window).resize(function() { drawSort(); });
</script>

<?php } else if ($_GET["type"] == "bar-V") { ?>

<script type="text/javascript">
  google.charts.load('current', { 'packages': ['table', 'corechart'] });
  google.charts.setOnLoadCallback(drawSort);
  function drawSort() {
    var data = new google.visualization.DataTable();
<?php if (($cd == "matrixdropdown") && ($showmulti == "1")) { echo "    data.addColumn('string', 'Item');"; } ?>
    data.addColumn('string', 'Answer');
    data.addColumn('number', 'Count');
    data.addColumn('number', 'Percentage');
<?php if ($cd == "matrixdropdown") { echo $out5[$bbb]; } else if ((($cd == "multipletext") && (preg_match('/Last10/i', $_GET["q"]) == 0)) || (($cd == "multipletext") && (preg_match('/Next10/i', $_GET["q"]) == 0))) { echo $out6[$bbb]; } ?>
    var viewTable = new google.visualization.DataView(data);
<?php if (($cd == "matrixdropdown") && ($showmulti == "1")) { echo "    viewTable.setColumns([0, 1, 2, 3]);"; } else { echo "    viewTable.setColumns([0, 1, 2]);"; } ?>
    var viewChart = new google.visualization.DataView(data);
<?php if (($cd == "matrixdropdown") && ($showmulti == "1")) { echo "    viewChart.setColumns([0, 1, 2]);"; } else { echo "    viewChart.setColumns([0, 2]);"; } ?>
    var formatter = new google.visualization.NumberFormat({ suffix: '%', fractionDigits: '1' });
    formatter.format(data, 2);
    var options = { title: '<?php echo $bdx; ?>', width: '100%', height: '400', bar: { groupWidth:  '60%' }, legend: { position: 'none' } };
    var chart = new google.visualization.ColumnChart(document.getElementById('chart<?php echo $bbb; ?>'));
    chart.draw(viewChart, options);
    var table = new google.visualization.Table(document.getElementById('table<?php echo $bbb; ?>'));
    table.draw(viewTable, {width: '100%', height: '100%'});
    google.visualization.events.addListener(table, 'sort', function(event) {
      data.sort([{ column: event.column, desc: !event.ascending }]);
      chart.draw(viewChart);
    });
  }
  $(window).resize(function() { drawSort(); });
</script>

<?php } ?>

<?php $bbb++; } } else { ?>

<?php if ((empty($_GET["type"])) || ($_GET["type"] == "bar-H")) { ?>

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

<?php } else if ($_GET["type"] == "newbar-H") { ?>

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

<?php } else if ($_GET["type"] == "bar-V") { ?>

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

<?php } ?>

<?php } else if ($cd == "comment") { ?>

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

<?php if ((empty($_GET["type"])) || ($_GET["type"] == "bar-V-mean")) { ?>

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

<?php } else if ($_GET["type"] == "bar-V") { ?>

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

<?php } else if ($_GET["type"] == "bar-H") { ?>

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

<?php } else if ($_GET["type"] == "bar-H-mean") { ?>

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


  </div>
  <div id="B2" class="tab-pane fade">

<?php
  if (($cd == "comment") || ($cd == "html") || ($cd == "matrixdropdown") || ($cd == "multipletext")) { }
  else { echo $answers; } 
  if ($totalresponses) {
    if ($cd == "matrix") { echo $tableout1A; echo $tableout1B; } 
    else if (($cd == "comment") || ($cd == "text")) { echo $tableout2; }
    else if (($cd == "radiogroup") || ($cd == "radiogrouphtml") || ($cd == "dropdown") || ($cd == "barrating") || ($cd == "NPS") || ($cd == "rating")) { echo $tableout3; } 
    else if (($cd == "checkbox") || ($cd == "checkboxhtml")) { echo $tableout4; }
    else if ($cd == "matrixdropdown") { 
      $bba = 1; 
      echo $outtitle5;
      foreach ($cee2 as $ckey => $cvalue) { 
        echo $tableout5A[$bba];
        echo $topmessage[$bba];
        // echo "<p class=\"green\"><strong>Showing top ".$toplimit." results only</strong></p>";
        echo $answers[$bba];
        echo $tableout5[$bba];
        $bba++; 
      } 
    }
    else if ($cd == "multipletext") { 
      if ((preg_match('/Last10/i', $_GET["q"]) == 1) || (preg_match('/Next10/i', $_GET["q"]) == 1)) {
        echo $answers;
        echo $tableout3;
      } else {
        $nnn = 1; 
        echo $outtitle6;
        foreach ($cee2 as $ckey => $cvalue) { 
          // echo "<p>Showing top ".$toplimit." results only</p>";
          echo $tableout6A[$nnn];
          echo $topmessage[$nnn];
          // echo "<p class=\"green\"><strong>Showing top ".$toplimit." results only</strong></p>";
          echo $answers[$nnn];
          echo $tableout6[$nnn];
          $nnn++; 
        } 
      }
    }
    else { echo "No table to be shown for this question\n"; }
  }
  echo "</div></div></div>";
?>
  <!-- </div></div></div> -->
<?php } else { 
  echo "<h5>To view survey results, you just simply click one of the above questions</h5>"; 
  // echo "</div>";  
} ?>

  </div>
<?php if ((($_POST["settingreport"]) == "1") || ($_GET["m"] == "1") || ($_GET["m"] == "3")) { ?>
  <div id="A2" class="tab-pane fade in active">
<?php } else { ?>
  <div id="A2" class="tab-pane fade">
<?php } ?>

    <h3>Settings</h3>
    <p>This page contains specific settings to see results in the right way you need.</p>
    <hr>
    <form id="settingreport" method="post" action="<?php echo $me; ?>">
      <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <h4>Sequential Monadic Questions</h4>
          <p>Enter question name and number of questions to be linked in order to get a combined result for analysis.</p>
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
          <input type="hidden" name="settingsequentials" value="1">
          <p align="center"><button type="button" class="btn btn-warning btn-xs" id="newseq" title="Add a new question linkage"><i class="pe-plus pe-fw"></i>Add new</button></p>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        </div>
      </div>
      <br>
      <hr>
      <br>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <h4>Subgroups settings</h4>
          <p>Set up a simple subgroup analysis below.</p>
          <div class="row" id="tablesubgroupwrap"></div>
        </div>
        <input type="hidden" name="settingsubgroups" value="1">
        <p align="center"><button type="button" class="btn btn-warning btn-xs" onClick="newSS()" title="Add a new subgroup"><i class="pe-plus pe-fw"></i>Add new</button></p>
      </div>
      <hr>
      <p class="text-center">
        <input type="hidden" name="settingreport" value="1">
        <input type="hidden" name="surveyid" value="<?php echo $_GET["s"]; ?>">
        <button type="submit" class="btn btn-success"<?php if ($cansave == false) { echo " disabled"; } ?>>Save <i class="pe-check-circle-o"></i></button>
        <button type="reset" class="btn btn-default"<?php if ($cansave == false) { echo " disabled"; } ?>>Cancel <i class="pe-times-circle-o"></i></button>
      </p>
    </div>
  </form>
  <br>
  <br>
  <br>



  </div>
</div>
<br>

<?php backButton("/admin/?w=surveys", "Back to the main page", "danger"); ?>

<script type="text/javascript">
  var companyid = parseInt("<?php echo $_SESSION["companyid"]; ?>");
  var userid = parseInt("<?php echo $_SESSION["userid"]; ?>");
  var surveyid = <?php echo $_GET["s"]; ?>;
  var level = <?php echo $_SESSION["level"]; ?>;
  var email = "<?php echo $_SESSION["email"]; ?>";
  var ip = "<?php echo getip(); ?>";
  var private = <?php echo $private; ?>;
  var api = 'http://www.siamsquare.org.uk';
  $.ajaxSetup({ headers: { 'X-Requested-With': 'aa5e1ab4-b0bf-4e82-8584-7cf4e9fdeaa8' } });
  $('#showsaving').html("<div class='alert alert-info'><i class='pe-spinner pe-pulse pe-lg pe-fw'></i> The system is now saving your data, please wait until the green message shows up which shoud be in a minute</div>").hide();
  $('#showsavesuccess').html("<div class='alert alert-success'><i class='pe-save pe-fw'></i> Data has been saved successfully</div>").hide();
  $('#showreadonly').html("<div class='alert alert-warning'><i class='pe-exclamation-triangle pe-fw'></i> Because you are not the project owner, this questionnaire has entered <strong>read-only mode</strong> (all changes will not be saved)</div>").hide();
  $('#showalert-delete').html("<div class='alert alert-success'><i class='pe-check pe-fw'></i> You have successfully saved & updated the settings on reporting of this survey.</div>").hide();
  $('#showalert-m1').html("<div class='alert alert-success'><i class='pe-check pe-fw'></i> You have successfully changed the settings on reporting for this survey. Please see below on the changes you hvae just made.</div>").hide();
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

    var blob = new Blob([csv2], { type: 'type: "text/csv;charset=UTF-8"' });
    var csvUrl = window.URL.createObjectURL(blob);
    var todayDate = new Date().toISOString().slice(0,10);
    var filename = "<?php echo $project; ?>" + "_data_" + todayDate + '.csv';
    $("a.exceldownload").attr({'download': filename, 'href': csvUrl });
  });
<?php if ($monitor) { echo "var monitor = $monitor;\n"; } else { echo "var monitor = { \"quota\": [], \"QC\": [], \"monitor\": [] };\n"; } ?>
    var counter2a = 0, counter2b = 0;
    var newrow300 = "                <option disabled>----------</option>";
    <?php echo "var newrow301 = '                <option value=\"all\">No subgroup (show all)</option>';\n"; ?>
    function dropdownA(l, m, n, o, p, ssq, ssa) {
      mn = n.toString().replace(/ /g,"_"); mo = o.toString().replace(/ /g,"_");
      ssq = ssq.toString().replace(/ /g,"_"); ssa = ssa.toString().replace(/ /g,"_");
      if (mn == ssq) { var newrow3FA = "                <option value=\"" + mn + encodeURI("::all") + "\" selected disabled>" + n + ": Total sample (n=" + p + ")</option>\n"; }
      else { var newrow3FA = "                <option value=\"" + mn + encodeURI("::all") +"\" disabled>" + n + ": Total sample (n=" + p + ")</option>\n"; }
      $('#subgroup').append(newrow3FA);
    }
    function dropdownB(l, m, n, o, p, ssq, ssa) {
      mn = n.toString().replace(/ /g,"_"); mo = o.toString().replace(/ /g,"_");
      ssq = ssq.toString().replace(/ /g,"_"); ssa = ssa.toString().replace(/ /g,"_");
      if (mo == ssa && mn == ssq) { var newrow3FB = "                <option value=\"" + mn + encodeURI("::") + mo + "\" selected>" + n + ": " + o + " (n=" + p + ")</option>\n"; }
      else { var newrow3FB = "                <option value=\"" + mn + encodeURI("::") + mo + "\">" + n + ": " + o + " (n=" + p + ")</option>\n"; }
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


<?php if ($report) { echo "var sreport = $report;\n"; } else { echo "var sreport = { \"sequential\": [] };\n"; } ?>

    function newSS() {
      var counter5 = $(this).parents("tr").children("td:first").text(); console.log(counter5);
      var head2 = "        <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n" +
      "          <table class=\"table table-hover table-condensed small\" id=\"tablesubgroup" + counter5 + "\">\n" +
      "            <thead>\n" +
      "            </thead>\n" +
      "            <tbody>\n" +
      "            </tbody>\n" +
      "          </table>\n" +
      "        </div><br>\n";
      var newrow3C = "              <tr class=\"bg-success\">\n" +
      "                <td width=\"5%\" valign=\"middle\">" + counter5 + "</td>\n" +
      "                <td width=\"85%\" valign=\"middle\"><input type=\"text\" class=\"form-control input-sm\" placeholder=\"Question Name\" name=\"quota_" + counter5 + "_questionname_" + counter5 + "\"></td>\n" +
      "                <td width=\"10%\" valign=\"middle\" align=\"center\" colspan=\"2\"><i class=\"pe-trash pe-fw red deletethistable\" title=\"Delete this subgroup\"></i> <i class=\"pe-plus pe-fw newsubgroupoption\" title=\"Add a new subgroup option\"></i></td>\n" +
      "              </tr>\n";
      $('#tablesubgroupwrap').append(head2);
      $('#tablesubgroupwrap').find('#tablesubgroup'+counter5).find('tbody').append(newrow3C);
      var counter3a = 1; 
      var counter3c = counter3a + 1;
      for (var counter3a = 1; counter3a < counter3c; counter3a++) {
        var newrow3D = "              <tr id=\"" + counter3 + "_" + counter3a + "\">\n" +
        "                <td width=\"5%\" valign=\"middle\">" + counter3a + "</td>\n" +
        "                <td width=\"75%\" valign=\"middle\"><input type=\"text\" class=\"form-control input-sm\" placeholder=\"Subgroup\" name=\"quota_" + counter3 + "_subgroup_" + counter3a + "\"></td>\n" +
        "                <td width=\"10%\" valign=\"middle\"><input type=\"text\" class=\"form-control input-sm\" placeholder=\"n=\" name=\"quota_" + counter3 + "_samplesize_" + counter3a + "\"></td>\n" +
        "                <td width=\"10%\" valign=\"middle\"><i class=\"pe-trash pe-fw red deletethisrow\" title=\"Delete this row\"></i></td>\n" +
        "              </tr>\n";
        $('#tablesubgroupwrap').find('#tablesubgroup'+counter3).find('tbody').append(newrow3D);
      }
      $(document.body).delegate(".newsubgroupoption", "click", function() {
        var value = $(this).closest('table').find('tr').length;
        var value2 = $(this).parents("tr").children("td:first").text();
        var counter4b = value + 1;
        for (var counter4a = value; counter4a < counter4b; counter4a++) {
          var newrow3E = "              <tr id=\"" + counter3 + "_" + counter4a + "\">\n" +
          "                <td width=\"5%\" valign=\"middle\">" + counter4a + "</td>\n" +
          "                <td width=\"75%\" valign=\"middle\"><input type=\"text\" class=\"form-control input-sm\" placeholder=\"Subgroup\" name=\"quota_" + counter3 + "_subgroup_" + counter4a + "\"></td>\n" +
          "                <td width=\"10%\" valign=\"middle\"><input type=\"text\" class=\"form-control input-sm\" placeholder=\"n=\" name=\"quota_" + counter3 + "_samplesize_" + counter4a + "\"></td>\n" +
          "                <td width=\"10%\" valign=\"middle\"><i class=\"pe-trash pe-fw red deletethisrow\" title=\"Delete this row\"></i></td>\n" +
          "              </tr>\n";
          $(this).closest("tbody").append(newrow3E);
        }
      });
      counter5++;
    }
    function selectDropdownOld(s, i) { 
      s.options[i-1].selected = true;
      return;
    }
    function selectDropdown(s, v) {
      for (var i=0; i < s.options.length; i++) {
        if (s.options[i].value == v) {
          s.options[i].selected = true;
          return;
        }
      }
    }
    var counter1 = 0, counter1z = counter1 + 1;
    if (typeof(sreport.sequential) === 'undefined') {
      var currentrow4 = "              <tr>\n" +
        "                <td></td><td colspan=\"2\"><small><strong><br>No data.</strong><br>Click button below to add one.</small></td>\n" +
        "              </tr>\n";
      $('#tablereportsettings').find('tbody').append(currentrow4);
    } else {
      while (counter1 < sreport.sequential.length) {
        var currentrow4 = "              <tr>\n" +
          "                <td valign=\"middle\">" + counter1z + "</td>\n" +
          "                <td valign=\"middle\"><input type=\"text\" class=\"form-control input-sm\" name=\"sequential_questionname_" + counter1z + "\" value=\"" + sreport.sequential[counter1].questionname + "\"></td>\n" +
          "                <td valign=\"middle\"><i class=\"pe-arrow-right pe-lg\"></i></td>\n" +
          "                <td valign=\"middle\"><select id=\"jsdropdown"+ counter1z +"\" class=\"form-control input-sm\" id=\"subgroup\" name=\"sequential_linkamount_" + counter1z + "\">" +
          "                </select></td>\n" +
          "                <td valign=\"middle\"><i class=\"pe-trash pe-fw red deletethisrow\"></i></td>\n" +
          "              </tr>\n";
        $('#tablereportsettings').find('tbody').append(currentrow4);
        var dropdownoptions = { 0: '---', 1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6' };
        var select = document.getElementById("jsdropdown" + counter1z);
        for (index in dropdownoptions) { 
          select.options[select.options.length] = new Option(dropdownoptions[index], index); 
          selectDropdown(select, sreport.sequential[counter1].linkamount);
        }
        counter1++;
        counter1z++;
      }
    }
    $('#newseq').click(function() {
      var newrow4 = "              <tr>\n" +
        "                <td valign=\"middle\">" + counter1z + "</td>\n" +
        "                <td valign=\"middle\"><input type=\"text\" class=\"form-control input-sm\" placeholder=\"Question name\" name=\"sequential_questionname_" + counter1z + "\"></td>\n" +
        "                <td valign=\"middle\"><i class=\"pe-arrow-right pe-lg\"></i></td>\n" +
        "                <td valign=\"middle\"><select class=\"form-control input-sm\" id=\"subgroup\" name=\"sequential_linkamount_" + counter1z + "\">" +
        "                <option value=\"0\" selected>--</option>\n" +
        "                <option value=\"1\" disabled>1</option>\n" +
        "                <option value=\"2\">2</option>\n" +
        "                <option value=\"3\">3</option>\n" +
        "                <option value=\"4\">4</option>\n" +
        "                <option value=\"5\">5</option>\n" +
        "                <option value=\"6\">6</option>\n" +
        "                </select></td>\n" +
        "                <td valign=\"middle\"><i class=\"pe-trash pe-fw red deletethisrow\"></i></td>\n" +
        "              </tr>\n";
      $('#tablereportsettings').find('tbody').append(newrow4);
      // $('#nodata').remove();
      counter1z++;
    });
    $(document.body).delegate(".deletethisrow", "click", function() { $(this).closest("tr").remove(); });

    var counter3 = 0;
    if (typeof(monitor.quota) === 'undefined') {
      var currentrow4 = "        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n" +
        "                <h5><strong><br>No data.</strong><br>Click button below to add one.</h5>\n" +
        "        </div>\n";
      $('#tablesubgroupwrap').append(currentrow4);
    } else {
      while (counter3 < monitor.quota.length) {
        var head1 = "        <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n" +
        "          <table class=\"table table-hover table-condensed small\" id=\"tablesubgroup" + counter3 + "\">\n" +
        "            <thead>\n" +
        "            </thead>\n" +
        "            <tbody>\n" +
        "            </tbody>\n" +
        "          </table>\n" +
        "        </div>\n";
        var newrow3A = "              <tr class=\"bg-success\">\n" +
        "                <td width=\"5%\" valign=\"middle\">" + counter3 + "</td>\n" +
        "                <td width=\"85%\" valign=\"middle\"><input type=\"text\" class=\"form-control input-sm\" placeholder=\"Question Name\" name=\"quota_" + counter3 + "_questionname_" + counter3 + "\" value=\"" + monitor.quota[counter3].questionname + "\"></td>\n" +
        "                <td width=\"10%\" valign=\"middle\" align=\"center\" colspan=\"2\"><i class=\"pe-trash pe-fw red deletethistable\" title=\"Delete this subgroup\"></i> <i class=\"pe-plus pe-fw newsubgroupoption\" title=\"Add a new subgroup option\"></i></td>\n" +
        "              </tr>\n";
        $('#tablesubgroupwrap').append(head1);
        $('#tablesubgroupwrap').find('#tablesubgroup'+counter3).find('tbody').append(newrow3A);
        // $('#mynewrow'+counter3).click(function() { $('#insert'+counter3).toggle('slow'); });
        var details = monitor.quota[counter3].details;
        for (var counter3b = 0; counter3b < details.length; counter3b++) {
          var counter3c = counter3b + 1;
          var newrow3B = "              <tr id=\"" + counter3 + "_" + counter3c + "\">\n" +
          "                <td width=\"5%\" valign=\"middle\">" + counter3c + "</td>\n" +
          "                <td width=\"75%\" valign=\"middle\"><input type=\"text\" class=\"form-control input-sm\" placeholder=\"Subgroup\" name=\"quota_" + counter3 + "_subgroup_" + counter3c + "\" value=\"" + details[counter3b].subgroup + "\"></td>\n" +
          "                <td width=\"10%\" valign=\"middle\"><input type=\"text\" class=\"form-control input-sm\" placeholder=\"n=\" name=\"quota_" + counter3 + "_samplesize_" + counter3c + "\" value=\"" + details[counter3b].samplesize + "\"></td>\n" +
          "                <td width=\"10%\" valign=\"middle\"><i class=\"pe-trash pe-fw red deletethisrow\" title=\"Delete this row\"></i></td>\n" +
          "              </tr>\n";
          $('#tablesubgroupwrap').find('#tablesubgroup'+counter3).find('tbody').append(newrow3B);
        }
        counter3++;
      }
      $(document.body).delegate(".deletethistable", "click", function() { $(this).closest("table").remove(); });
      $(document.body).delegate(".deletethisrow", "click", function() { $(this).closest("tr").remove(); });
    }

</script>



<?php if (($_GET["m"] == "1") || ($m == 1)) { ?>
  $('#showalert-m1').show();
  window.setTimeout(function() { $("#showalert-m1").slideUp(500, function() { $("#showalert-m1").hide(); }); }, 8000);
<?php } else if ($_GET["m"] == "2") { ?>
  $('#showalert-m2').show();
  window.setTimeout(function() { $("#showalert-m2").slideUp(500, function() { $("#showalert-m2").hide(); }); }, 8000);
<?php } else if ($_GET["m"] == "3") { ?>
  $('#showalert-m3').show();
  window.setTimeout(function() { $("#showalert-m3").slideUp(500, function() { $("#showalert-m3").hide(); }); }, 8000);
<?php } else if ($_GET["m"] == "4") { ?>
  $('#showalert-m4').show();
  window.setTimeout(function() { $("#showalert-m4").slideUp(500, function() { $("#showalert-m4").hide(); }); }, 8000);
<?php } else if ($_GET["m"] == "5") { ?>
  $('#showalert-m5').show();
  window.setTimeout(function() { $("#showalert-m5").slideUp(500, function() { $("#showalert-m5").hide(); }); }, 8000);
<?php } ?>


<script language="javascript">

function addRow(tableID) {
  var table = document.getElementById(tableID);
  var rowCount = table.rows.length;
  var row = table.insertRow(rowCount);
  var colCount = table.rows[0].cells.length;
  for (var i=0; i<colCount; i++) {
    var newcell	= row.insertCell(i);
    newcell.innerHTML = table.rows[0].cells[i].innerHTML;
    // alert(newcell.childNodes);
    switch(newcell.childNodes[0].type) {
      case "text": newcell.childNodes[0].value = ""; break;
      case "checkbox": newcell.childNodes[0].checked = false; break;
      case "select-one": newcell.childNodes[0].selectedIndex = 0; break;
    }
  }
}

function deleteRow(tableID) {
  try {
    var table = document.getElementById(tableID);
    var rowCount = table.rows.length;
    for (var i=0; i<rowCount; i++) {
      var row = table.rows[i];
      var chkbox = row.cells[0].childNodes[0];
      if (null != chkbox && true == chkbox.checked) {
        if (rowCount <= 1) { alert("Cannot delete all the rows."); break; }
        table.deleteRow(i);
        rowCount--;
        i--;
      }
    }
  } catch(e) { alert(e); }
}

</script>

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
