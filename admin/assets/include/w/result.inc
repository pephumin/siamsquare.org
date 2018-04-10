<?php

$limit = 20;
$show = $_GET["q"];

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

$a = json_decode($rows[0]["data"], true);
foreach ($a["pages"] as $k1 => $p1) { foreach ($p1 as $k2 => $p2) { foreach ($p2 as $k3 => $p3) { $questions[] = $p3; } } }
// print_r($questions);
$qout = "";
for ($i = 0; $i < count($questions); $i++) {
  $qname = $questions[$i]["name"]; $pname[] = $questions[$i]["name"];
  if ($questions[$i]["html"]) { $qtitle = "HTML"; $ptitle[] = $questions[$i]["title"]; $html = $questions[$i]["html"]; }
  else { $qtitle = $questions[$i]["title"]; $ptitle[] = $questions[$i]["title"]; }
  $qtype = $questions[$i]["type"]; $ptype[] = $questions[$i]["type"];
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
    if (($qtype == "radiogroup") || ($qtype == "radiogrouphtml")) {
      $qout .= "      <ul>\n";
      foreach ($choices as $k4 => $p4) {
        $choice_text = $p4['text']; $c_text[] = $p4['text'];
        $choice_code = $p4['value']; $c_code[] = $p4['value'];
        $qout .= "        <div class=\"radio\" style=\"font-family:boon;font-size:120%\"><label><input type=\"radio\" name=\"radiogroup\" style=\"position:relative;margin-right:10px\" disabled>$choice_text ($choice_code)</label></div>\n";
      }
      $qout .= "      </ul>\n";
    }
    else if (($qtype == "checkbox") || ($qtype == "checkboxhtml")) {
      $qout .= "      <ul>\n";
      foreach ($choices as $k5 => $p5) {
        $choice_text = $p5['text']; $c_text[] = $p5['text'];
        $choice_code = $p5['value']; $c_code[] = $p5['value'];
        $qout .= "        <div class=\"checkbox\" style=\"font-family:boon;font-size:120%\"><label><input type=\"checkbox\" style=\"position:relative;margin-right:10px\">$choice_text ($choice_code)</label></div>\n";
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
    else if (($qtype == "text") || ($qtype == "multipletext")) {
      $qout .= "      <input type=\"text\" class=\"form-control\" disabled><br>\n";
    }
    else if ($qtype == "html") {
      $qout .= "      <div style=\"font-family:boon;font-size:110%\">\n";
      $qout .= $html."<br>";
      $qout .= "      </div>\n";
    }
    else if ($qtype == "matrix") {
      $qout .= "      <table class=\"table\" style=\"font-family:boon;font-size:110%\">\n";
      $qout .= "        <thead><tr class=\"bg-primary\">\n";
      $qout .= "          <th width=\"20%\"></th>\n";
      $a = 0;
      foreach ($questions[$i]["columns"] as $k8 => $p8) {
        $column_text = $p8['text']; $c_text[] = $p8['text'];
        $column_code = $p8['value']; $c_code[] = $p8['value'];
        $column_link[] = $p8['text']." (".$p8['value'].")";
        $qout .= "          <th style=\"text-align:right\">$column_text ($column_code)</th>\n";
        $a++;
      }
      $qout .= "        </tr></thead>\n";
      $qout .= "      <tbody><tr>\n";
      foreach ($questions[$i]["rows"] as $k9 => $p9) {
        $row_text = $p9['text']; $r_text[] = $p9['text'];
        $row_code = $p9['value']; $r_code[] = $p9['value'];
        $row_link[] = $p9['text']." (".$p9['value'].")";
        $qout .= "<td align=\"right\">$row_text ($row_code)</td>\n";
        for ($b=0; $b < $a; $b++) { $qout .= "          <td align=\"right\"><div class=\"radio\"><input type=\"radio\" name=\"$row_code\" style=\"position:relative;margin:0px\" disabled></div></td>\n"; }
        $qout .= "        </tr>";
      }
      $qout .= "        </tbody>\n";
      $qout .= "      </table>\n";
    }
    else if ($qtype == "matrixdropdown") {
      $qout .= "      <table class=\"table\" style=\"font-family:boon;font-size:110%\">\n";
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
    $qout .= "      <br>\n";
  }
}


// ------- Questionnaire navigator --------------------------------------------------------------------------

$perpage = "10";
$sid = $_GET["s"]; $qid = $_GET["q"];
$numberofquestions = count($questions);
for ($i=0; $i<$numberofquestions; $i++) {
  $qname = $questions[$i]["name"];
  if ($qname == $_GET['q']) { $here = floor($i/$perpage)*10; }
}
$navtab = "<nav>\n";
$navtab .= "  <ul class=\"nav nav-tabs\">\n";
$questionlisting = "<div class=\"tab-content\">\n";
if ($here == "0") {
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
  $qtype = $questions[$i]["type"];
  if ($qname == $_GET['q']) { $questionlisting .= "      <li id=\"listing-$i\" class=\"progress-step is-active\">\n"; }
  else { $questionlisting .= "      <li id=\"listing-$i\" class=\"progress-step\">\n"; }
  $questionlisting .= "        <span class=\"progress-marker\"></span>\n";
  $questionlisting .= "        <a href=\"/admin/?w=result&s=$sid&q=$qname\"><span class=\"progress-text\">\n";
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
$questionlisting .= "  </div>\n";
$navtab .= "  </ul>\n";
$navtab .= "</nav>\n";





// ------- Show data --------------------------------------------------------------------------

$sql = "SELECT * FROM j_results WHERE surveyid = :surveyid AND status = 2 ORDER BY submitted DESC";
$q = $db->prepare($sql);
$q->bindValue(':surveyid', $surveyid, PDO::PARAM_INT);
$q->execute();
$totalrecords = $q->rowCount();
$r = $q->fetchAll(PDO::FETCH_ASSOC);

$qq = $_GET['q'];
$cc = array_combine($pname, $ptype);
$cd = $cc[$qq]; //print_r($cd);
$bx = array_combine($pname, $ptitle);
$bdx = $bx[$qq];

$alldata = "[ ";
for ($f=0; $f<count($r); $f++) {
  if ($f == (count($r)-1)) { $alldata .= $r[$f]["data"]; }
  else { $alldata .= $r[$f]["data"].", \n"; }
  // $removeKeys = array('rd', 'email', 'ip', 'surveyid', 'status');
  // foreach($removeKeys as $key) {
  //   unset($r[$f][$key]);
  // }
  // $r[$f]['data'] = json_decode($r[$f]['data'], true);
  // $r[$f]['submitted'] = $r[$f]['submitted'];
}
$alldata .= " ]\n";
// print_r($alldata);

$ee = $r;
for ($i=0; $i<count($ee); $i++) {
  $removeKeys = array('rd', 'email', 'ip', 'surveyid', 'status');
  foreach($removeKeys as $key) {
    unset($ee[$i][$key]);
  }
  $ee[$i]['data'] = json_decode($ee[$i]['data'], true);
  $ee[$i]['submitted'] = $ee[$i]['submitted'];
}
$datafortable = json_encode($ee);
// print_r($datafortable);

// Generate download file automatically
if ($_GET["download"] == "json") {
  $filedownload = "data_".$project."_".date('Y-m-d').".json";
  header("Content-Disposition: attachment; filename=$filedownload");
  header('Content-type: application/json');
  echo $alldata;
  exit;
} else if ($_GET["download"] == "csv") {
  $filedownload = "data_".$project."_".date('Y-m-d').".csv";
  $out = json_decode($alldata, 1);
  // foreach(array_keys($out[0]) as $key){ $keys[0][$key] = $key; }
  foreach(reset($out) as $k1 => $v1) {
    if (!is_array($v1)) { $kk = $k1; $n[0][$kk] = $kk; }
    else if (is_array($v1)) { foreach($v1 as $k2 => $v2) { $kk = $k1."/".$k2; $n[0][$k2] = $kk; } }
  }
  // $out = array_merge($keys, $out);
  $out = array_merge($n, $out);
  header("Content-Type: application/csv; charset=utf-8");
  header("Content-Disposition: attachment; filename=$filedownload");
  $output = fopen("php://output", "w");
  foreach ($out as $items) {
    $flatData = array();
    $fields = new RecursiveIteratorIterator(new RecursiveArrayIterator($items));
    foreach($fields as $value) { array_push($flatData, $value); }
    fputcsv($output, $flatData, ",", '"');
  }
  exit;
} else if ($_GET["download"] == "xls") {
  $filedownload = "data_".$project."_".date('Y-m-d').".xls";
  $out = json_decode($alldata, 1);
  // foreach(array_keys($out[0]) as $key){ $keys[0][$key] = $key; }
  foreach(reset($out) as $k1 => $v1) {
    if (!is_array($v1)) { $kk = $k1; $n[0][$kk] = $kk; }
    else if (is_array($v1)) { foreach($v1 as $k2 => $v2) { $kk = $k1."/".$k2; $n[0][$k2] = $kk; } }
  }
  // $out = array_merge($keys, $out);
  $out = array_merge($n, $out);
  header("Content-Type: application/csv; charset=utf-8");
  header("Content-Disposition: attachment; filename=$filedownload");
  $output = fopen("php://output", "w");
  foreach ($out as $items) {
    $flatData = array();
    $fields = new RecursiveIteratorIterator(new RecursiveArrayIterator($items));
    foreach($fields as $value) { array_push($flatData, $value); }
    fputcsv($output, $flatData, "\t", '"');
  }
  exit;
}


if (($cd == "checkbox") || ($cd == "checkboxhtml")) {
  $k = array();
  for ($i=0; $i < count($r); $i++) {
    $j = $r[$i]["data"];
    $j = json_decode($j, true);
    foreach ($j[$qq] as $m => $v) { array_push($k, $v); }
  }
  $c = array_count_values($k); //print_r($c);
  if (json_decode(str_replace($c_code, $c_text, json_encode($c)), true)) { $c = json_decode(str_replace($c_code, $c_text, json_encode($c)), true); }
  // arsort($c);
  // print_r($c);
  $totalresponses = array_sum($c);
  $A = array_keys($c); $B = array_values($c); //print_r($c);
  $C = count($c);
  $out = "";
  $out .= "      data.addRows($C);\n";
  for ($m=0; $m < count($c); $m++) {
    // if ($A[$m] == $choice_code[$m]) { $A[$m] == $choice_text[$m]; }
    $BB[$m] = number_format(($B[$m]/$totalrecords)*100, 2);
    $m1 = $m+1; $m2 = $m1+1;
    $out .= "      data.setCell($m, 0, '$A[$m]');\n";
    $out .= "      data.setCell($m, 1, $B[$m]);\n";
    $out .= "      data.setCell($m, 2, $BB[$m]);\n";
  }
  $me = "/admin/?w=result&s=".$_GET['s']."&q=".$_GET['q'];
  if ((empty($_GET['type'])) || ($_GET['type'] == "bar-H")) { $menu = "    <p class=\"text-center\"><strong>Choose the chart type [</strong> <u>Bar Horizontal</u> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=bar-V")."\">Bar Vertical</a> <strong>]</strong></p><br>\n"; }
  else if ($_GET['type'] == "bar-V") { $menu = "    <p class=\"text-center\"><strong>Choose the chart type [</strong> <a href=\"".htmlspecialchars($me."&type=bar-H")."\">Bar Horizontal</a> <strong>:</strong> <u>Bar Vertical</u> <strong>]</strong></p><br>\n"; }
}
else if ($cd == "comment") {
  $k = array();
  $out = "[ ";
  for ($i=0; $i < count($r); $i++) {
    $j = $r[$i]["data"];
    $j = json_decode($j, true);
    $out .= "['".addslashes($j[$qq])."'],";
    array_push($k, $j[$qq]);
  }
  $out .= " ]";
  // print_r(array_count_values($k));
  // echo $j[$qq];
  // print_r ($k);
  $cece = array_count_values($k); arsort($cece);
  $totalresponses = array_sum($cece);
  $A = array_keys($cece); $B = array_values($cece);
  $C = count($cece);
  $out2 = "";
  $out2 .= "      data.addRows($C);\n";
  for ($m=0; $m < $C; $m++) {
    $BB[$m] = number_format(($B[$m]/$totalrecords)*100, 2);
    $m1 = $m+1; $m2 = $m1+1;
    $out2 .= "      data.setCell($m, 0, '".addslashes($A[$m])."');\n";
    $out2 .= "      data.setCell($m, 1, $B[$m]);\n";
    $out2 .= "      data.setCell($m, 2, $BB[$m]);\n";
  }

}
else if ($cd == "file") {
  $me = "/admin/?w=result&s=".$_GET['s']."&q=".$_GET['q']."&size=".$_GET['size'];
  if ($_GET['p']) { $p = $_GET['p']; }
  if ($p == '') { $p = "1"; }
  if (empty($start)) { $start = 0; }
  if (empty($limit)) { $limit = 20; }
  if ($p) { $start = ($p-1) * $limit; }
  $rows = count($r);

  $k = array(); $k2 = array();
  for ($i = 0; $i < $rows; $i++) {
    $j2 = $r[$i]["data"];
    $j2 = json_decode($j2, true);
    array_push($k2, $j2[$qq]);
  }
  $c = array_count_values($k); arsort($c);
  //$totalresponses = array_sum($c);
  $totalresponses = count(array_filter($k2));
  $total = ceil($totalresponses/$limit);

  $to_record = $start + $limit;
  if ($to_record > $totalresponses) { $to_record = $totalresponses; }
  $from_record = $start + 1;

  for ($i = 0; $i < $rows; $i++) {
    if ($i >= $start && $i < $to_record) {
      $j = $r[$i]["data"];
      $j = json_decode($j, true);
      array_push($k, $j[$qq]);
    }
  }

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
    foreach ($k as $A => $B) {
      if ($B) {
        if (file_exists($basedir.'full/'.$B)) {
          $mydir = $basedir.'resized_S/';
          if(!is_dir($mydir)) { mkdir($mydir); }
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
    foreach ($k as $A => $B) {
      if ($B) {
        if (file_exists($basedir.'full/'.$B)) {
          $mydir = $basedir.'resized_M/';
          if(!is_dir($mydir)) { mkdir($mydir); }
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
    foreach ($k as $A => $B) {
      if ($B) {
        if (file_exists($basedir.'full/'.$B)) {
          $mydir = $basedir.'resized_L/';
          if(!is_dir($mydir)) { mkdir($mydir); }
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
else if (($cd == "radiogroup") || ($cd == "radiogrouphtml") || ($cd == "dropdown") || ($cd == "rating")) {
  $x = "[";
  for ($i=0; $i < count($r); $i++) { if ($i != (count($r)-1)) { $x .= $r[$i]["data"].","; } else { $x .= $r[$i]["data"]; } }
  $x .= "]";
  $j = json_decode($x, true);
  foreach ($j as $k1 => $p1) { $jj[] = $p1; }
  for ($i=0; $i < count($jj); $i++) { $k[] = $jj[$i][$qq]; }
  $c = array_count_values($k);
  if (json_decode(str_replace($c_code, $c_text, json_encode($c)), true)) { $c = json_decode(str_replace($c_code, $c_text, json_encode($c)), true); }
  // arsort($c);
  $totalresponses = array_sum($c);
  $A = array_keys($c); $B = array_values($c);
  $C = count($c);
  $out = "";
  $out .= "      data.addRows($C);\n";
  for ($m=0; $m < count($c); $m++) {
    $BB[$m] = number_format(($B[$m]/$totalrecords)*100, 2);
    $m1 = $m+1; $m2 = $m1+1;
    $out .= "      data.setCell($m, 0, '$A[$m]');\n";
    $out .= "      data.setCell($m, 1, $B[$m]);\n";
    $out .= "      data.setCell($m, 2, $BB[$m]);\n";
  }
  $me = "/admin/?w=result&s=".$_GET['s']."&q=".$_GET['q'];
  if ((empty($_GET['type'])) || ($_GET['type'] == "pie")) { $menu = "<p class=\"text-center\"><strong>Choose the chart type [</strong> <u>Pie</u> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=donut")."\">Donut</a> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=bar-H")."\">Bar Horizontal</a> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=bar-V")."\">Bar Vertical</a> <strong>]</strong></p><br>\n"; }
  else if ($_GET['type'] == "donut") { $menu = "<p class=\"text-center\"><strong>Choose the chart type [</strong> <a href=\"".htmlspecialchars($me."&type=pie")."\">Pie</a> <strong>:</strong> <u>Donut</u> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=bar-H")."\">Bar Horizontal</a> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=bar-V")."\">Bar Vertical</a> <strong>]</strong></p><br>\n"; }
  else if ($_GET['type'] == "bar-H") { $menu = "<p class=\"text-center\"><strong>Choose the chart type [</strong> <a href=\"".htmlspecialchars($me."&type=pie")."\">Pie</a> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=donut")."\">Donut</a> <strong>:</strong> <u>Bar Horizontal</u> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=bar-V")."\">Bar Vertical</a> <strong>]</strong></p><br>\n"; }
  else if ($_GET['type'] == "bar-V") { $menu = "<p class=\"text-center\"><strong>Choose the chart type [</strong> <a href=\"".htmlspecialchars($me."&type=pie")."\">Pie</a> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=donut")."\">Donut</a> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=bar-H")."\">Bar Horizontal</a> <strong>:</strong> <u>Bar Vertical</u> <strong>]</strong></p><br>\n"; }
}
else if ($cd == "matrix") {
  for ($i=0; $i < count($r); $i++) {
    $j = $r[$i]["data"];
    $j = json_decode($j, true);
    foreach ($j[$qq] as $m => $v) { $new[$m][] = $v; }
  }
  foreach ($r_code as $val) {
    $da[] = $val;
    $rrr = count($new[$val]);
    $average[] = array_sum($new[$val]) / $rrr;
    $db = $new[$da];
  }
  $db = array();
  foreach ($new as $kk => $vv) {
    array_push($db, $kk);
    $yy = array_count_values($vv); krsort($yy);
    $dc[] = $yy;
  }
  // print_r(($dc));

  foreach ($dc as $q => $r) {
    $dd[] = percentile($dc[$q]);
    $de[] = array_sum($r);
    $cmax[] = count($dc[$q]);
  }
  $totalresponses = array_sum($de);
  $c1 = array_combine($db, $dd);
  $c2 = array_combine($db, $average);
  $ccmax = count($column_link);
  if ($ccmax == 2) { $color = "colors: ['#00C851', '#007E33', "; $series = "series: { 0: { targetAxisIndex: 0 }, 1: { targetAxisIndex: 0 }, 2: { targetAxisIndex: 1 }, type: 'line' } },\n"; }
  else if ($ccmax == 3) { $color = "colors: ['#AAAAAA', '#00C851', '#007E33', "; $series = "series: { 0: { targetAxisIndex: 0 }, 1: { targetAxisIndex: 0 }, 2: { targetAxisIndex: 0 }, 3: { targetAxisIndex: 1, type: 'line' } },\n"; }
  else if ($ccmax == 4) { $color = "colors: ['#CC0000', '#FF4444', '#00C851', '#007E33', "; $series = "series: { 0: { targetAxisIndex: 0 }, 1: { targetAxisIndex: 0 }, 2: { targetAxisIndex: 0 }, 3: { targetAxisIndex: 0 }, 4: { targetAxisIndex: 1, type: 'line' } },\n"; }
  else if ($ccmax == 5) { $color = "colors: ['#CC0000', '#FF4444', '#AAAAAA', '#00C851', '#007E33', "; $series = "series: { 0: { targetAxisIndex: 0 }, 1: { targetAxisIndex: 0 }, 2: { targetAxisIndex: 0 }, 3: { targetAxisIndex: 0 }, 4: { targetAxisIndex: 0 }, 5: { targetAxisIndex: 1, type: 'line' } },\n"; }
  else if ($ccmax == 6) { $color = "colors: ['#820000', '#CC0000', '#FF4444', '#AAAAAA', '#00C851', '#007E33', "; $series = "series: { 0: { targetAxisIndex: 0 }, 1: { targetAxisIndex: 0 }, 2: { targetAxisIndex: 0 }, 3: { targetAxisIndex: 0 }, 4: { targetAxisIndex: 0 }, 5: { targetAxisIndex: 0 }, 6: { targetAxisIndex: 1, type: 'line' } },\n"; }
  else if ($ccmax == 7) { $color = "colors: ['#530000', '#820000', '#CC0000', '#FF4444', '#AAAAAA', '#00C851', '#007E33', "; $series = "series: { 0: { targetAxisIndex: 0 }, 1: { targetAxisIndex: 0 }, 2: { targetAxisIndex: 0 }, 3: { targetAxisIndex: 0 }, 4: { targetAxisIndex: 0 }, 5: { targetAxisIndex: 0 }, 6: { targetAxisIndex: 0 }, 7: { targetAxisIndex: 1, type: 'line' } },\n"; }
  else if ($ccmax == 8) { $color = "colors: ['#350000', '#530000', '#820000', '#CC0000', '#FF4444', '#AAAAAA', '#00C851', '#007E33', "; $series = "series: { 0: { targetAxisIndex: 0 }, 1: { targetAxisIndex: 0 }, 2: { targetAxisIndex: 0 }, 3: { targetAxisIndex: 0 }, 4: { targetAxisIndex: 0 }, 5: { targetAxisIndex: 0 }, 6: { targetAxisIndex: 0 }, 7: { targetAxisIndex: 0 }, 8: { targetAxisIndex: 1, type: 'line' } },\n"; }
  else if ($ccmax == 9) { $color = "colors: ['#220000', '#350000', '#530000', '#820000', '#CC0000', '#FF4444', '#AAAAAA', '#00C851', '#007E33', "; $series = "series: { 0: { targetAxisIndex: 0 }, 1: { targetAxisIndex: 0 }, 2: { targetAxisIndex: 0 }, 3: { targetAxisIndex: 0 }, 4: { targetAxisIndex: 0 }, 5: { targetAxisIndex: 0 }, 6: { targetAxisIndex: 0 }, 7: { targetAxisIndex: 0 }, 8: { targetAxisIndex: 0 }, 9: { targetAxisIndex: 1, type: 'line' } },\n"; }
  else if ($ccmax == 10) { $color = "colors: ['#160000', '#220000', '#350000', '#530000', '#820000', '#CC0000', '#FF4444', '#AAAAAA', '#00C851', '#007E33', "; $series = "series: { 0: { targetAxisIndex: 0 }, 1: { targetAxisIndex: 0 }, 2: { targetAxisIndex: 0 }, 3: { targetAxisIndex: 0 }, 4: { targetAxisIndex: 0 }, 5: { targetAxisIndex: 0 }, 6: { targetAxisIndex: 0 }, 7: { targetAxisIndex: 0 }, 8: { targetAxisIndex: 0 }, 9: { targetAxisIndex: 0 }, 10: { targetAxisIndex: 1, type: 'line' } },\n"; }
  $out = "[ 'Attribute', ";
  foreach ($column_link as $a) { $out .= "'".$a."', "; } // label
  if (($_GET['type'] == "bar-H-mean") || ($_GET['type'] == "bar-V-mean")) { $out .= " 'Mean' ],\n"; $color .= "'#000000' ],\n"; } else { $out .= " ],\n"; $color .= " ],\n"; }
  foreach ($r_code as $b) {
    if (json_decode(str_replace($r_code, $r_text, json_encode($b)), true)) { $bb = json_decode(str_replace($r_code, $r_text, json_encode($b)), true); }
    $out .= "      [ '".($bb)."', ";
    foreach ($c_code as $c) { $out .= $c1[$b][$c].", "; } // data for each scale
    // $c3 = $c2[$b]+1;
    if (($_GET['type'] == "bar-H-mean") || ($_GET['type'] == "bar-V-mean")) { $out .= " $c2[$b] ],\n"; } else { $out .= " ],\n"; }
  }
  $me = "/admin/?w=result&s=".$_GET['s']."&q=".$_GET['q'];
  if (count($dc[$q]) == 5) {
    if ((empty($_GET['type'])) || ($_GET['type'] == "bar-H")) { $menu = "<p class=\"text-center\"><strong>Choose the chart type [</strong> <u>Bar Horizontal</u> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=bar-H-mean")."\">Bar Horizontal with Mean</a> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=bar-V")."\">Bar Vertical</a> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=bar-V-mean")."\">Bar Vertical with Mean</a> <strong>]</strong></p><br>\n"; }
    else if ($_GET['type'] == "bar-H-mean") { $menu = "<p class=\"text-center\"><strong>Choose the chart type [</strong> <a href=\"".htmlspecialchars($me."&type=bar-H")."\">Bar Horizontal</a> <strong>:</strong> <u>Bar Horizontal with Mean</u> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=bar-V")."\">Bar Vertical</a> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=bar-V-mean")."\">Bar Vertical with Mean</a> <strong>]</strong></p><br>\n"; }
    else if ($_GET['type'] == "bar-V") { $menu = "<p class=\"text-center\"><strong>Choose the chart type [</strong> <a href=\"".htmlspecialchars($me."&type=bar-H")."\">Bar Horizontal</a> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=bar-H-mean")."\">Bar Horizontal with Mean</a> <strong>:</strong> <u>Bar Vertical</u> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=bar-V-mean")."\">Bar Vertical with Mean</a> <strong>]</strong></p><br>\n"; }
    else if ($_GET['type'] == "bar-V-mean") { $menu = "<p class=\"text-center\"><strong>Choose the chart type [</strong> <a href=\"".htmlspecialchars($me."&type=bar-H")."\">Bar Horizontal</a> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=bar-H-mean")."\">Bar Horizontal with Mean</a> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=bar-V")."\">Bar Vertical</a> <strong>:</strong> <u>Bar Vertical with Mean</u> <strong>]</strong></p><br>\n"; }
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
echo "    <p>This survey has a total of <strong>$numberofquestions questions</strong> as shown below. Click one of the below questions to see its real-time results.</p>\n";
echo "    <p>Should you need to see more details such as subgroup analysis, you would need to download the data file and process it with your data processing team in a more traditional way.</p>\n";
echo "  </div>\n";
echo "  <div class=\"col-sm-3\" style=\"padding:10px;margin-top:20px\">\n";
echo "    <div class=\"list-group small\">\n";
echo "      <li class=\"list-group-item list-group-item-info\"><strong><i class=\"pe-download pe-fw\"></i> Data download</strong></li>\n";
// echo "      <a href=\"$getcsv\" class=\"list-group-item download\"><i class=\"pe-file-text-o pe-fw\"></i> All questions in CSV</a>\n";
echo "      <a class=\"list-group-item exceldownload\"><i class=\"pe-file-text-o pe-fw\"></i> Data of all questions in CSV (Spreadsheet) format</a>\n";
// echo "      <a href=\"$getxls\" class=\"list-group-item\"><i class=\"pe-file-excel-o pe-fw\"></i> All questions in Excel</a>\n";
// echo "      <a href=\"$getjson\" class=\"list-group-item\"><i class=\"pe-file-code-o pe-fw\"></i> All questions in JSON</a>\n";
// echo "      <a href=\"\" class=\"list-group-item\"><i class=\"pe-file-pdf-o pe-fw\"></i> Get PDF</a>\n";
echo "    </div>\n";
echo "  </div>\n";
echo "</div>\n";

echo $navtab;
echo $navtabcontent;
echo $questionlisting;

if ($totalresponses > $totalrecords) {
  $responseperrecord = number_format($totalresponses/$totalrecords, '1');
  $answers = "<p align=\"right\" class=\"small\"><em>A total of $totalresponses responses answered by $totalrecords respondents (average of $responseperrecord responses per respondent)</em></p>\n";
} else if ($totalresponses < $totalrecords) {
  $responsepercent = number_format(($totalresponses/$totalrecords)*100, '1');
  $answers = "<p align=\"right\" class=\"small\"><em>A total of $totalresponses responses answered by $totalrecords respondents ($responsepercent%)</em></p>\n";
} else {
  $answers = "<p align=\"right\" class=\"small\"><em>A total of $totalresponses responses answered by $totalrecords respondents</em></p>\n";
}


$openendquery = "<div style=\"text-align:right\">\n";
$openendquery .= "<p>Custom key words centering tool</p>\n";
$openendquery .= "<input id=\"root\" value=\"\" placeholder=\"Enter key words\">\n";
$openendquery .= "<input type=\"button\" id=\"go\" value=\"Re-center\" class=\"btn btn-info btn-xs\">\n";
$openendquery .= "</div>\n";

?>

<?php if ($_GET["q"]) { ?>

<div class="row">
  <div class="col-sm-12" style="margin-bottom:40px;border: 1px dotted grey; background:mitcream">
    <?php echo $qout; ?>
    <?php echo $answers; ?>
  </div>
  <div class="col-sm-12">
<?php if ($cd == "file") { echo $outdirect; } else { ?>
    <?php if ($cd == "comment") { echo $openendquery; } else { echo $menu; } ?>
    <?php if (($cd != "matrix") && ($cd != "comment")) { echo "<p><small class=\"blue\">You can sort the results by clicking the table's headers</small></p>\n"; } ?>
    <div id="table" style="width:300px"></div>
    <?php if ($cd == "comment") { echo "<br><br>"; } ?>
    <div id="chart"></div>
<?php } ?>
  </div>
</div>


<?php } else { echo "<h4 class=\"grey\">To view survey results, you just simply click one of the above questions</h4>"; } ?>


<?php if (($cd == "radiogroup") || ($cd == "dropdown") || ($cd == "rating")) { ?>

<?php if ((empty($_GET['type'])) || ($_GET['type'] == "pie")) { ?>

<script type="text/javascript">
  google.charts.load('current', {'packages': ['table', 'corechart']});
  google.charts.setOnLoadCallback(drawSort);
  function drawSort() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Answer');
    data.addColumn('number', 'Count');
    data.addColumn('number', 'Percentage');
<?php echo $out; ?>
    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1, 2]);
    var formatter = new google.visualization.NumberFormat({suffix: '%'});
    formatter.format(data, 2);
    var options = { title: '<?php echo $bdx; ?>', is3D: true, width: '100%', height: '400' };
    var chart = new google.visualization.PieChart(document.getElementById('chart'));
    chart.draw(view, options);
    var table = new google.visualization.Table(document.getElementById('table'));
    table.draw(view, {width: '100%', height: '100%'});
    google.visualization.events.addListener(table, 'sort', function(event) {
      data.sort([{column: event.column, desc: !event.ascending}]);
      chart.draw(view);
    });
  }
  $(window).resize(function() { drawSort(); });
</script>

<?php } else if ($_GET['type'] == "donut") { ?>

<script type="text/javascript">
  google.charts.load('current', {'packages': ['table', 'corechart']});
  google.charts.setOnLoadCallback(drawSort);
  function drawSort() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Answer');
    data.addColumn('number', 'Count');
    data.addColumn('number', 'Percentage');
<?php echo $out; ?>
    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1, 2]);
    var formatter = new google.visualization.NumberFormat({suffix: '%'});
    formatter.format(data, 2);
    var options = { title: '<?php echo $bdx; ?>', pieHole: 0.4, width: '100%', height: '400' };
    var chart = new google.visualization.PieChart(document.getElementById('chart'));
    chart.draw(view, options);
    var table = new google.visualization.Table(document.getElementById('table'));
    table.draw(view, {width: '100%', height: '100%'});
    google.visualization.events.addListener(table, 'sort', function(event) {
      data.sort([{column: event.column, desc: !event.ascending}]);
      chart.draw(view);
    });
  }
  $(window).resize(function() { drawSort(); });
</script>

<?php } else if ($_GET['type'] == "bar-H") { ?>

<script type="text/javascript">
  google.charts.load('current', {'packages': ['table', 'corechart']});
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
    var formatter = new google.visualization.NumberFormat({suffix: '%'});
    formatter.format(data, 2);
    var options = { title: '<?php echo $bdx; ?>', width: '100%', height: '400', bar: { groupWidth:  '60%' }, legend: { position: 'none' } };
    var chart = new google.visualization.BarChart(document.getElementById('chart'));
    chart.draw(viewChart, options);
    var table = new google.visualization.Table(document.getElementById('table'));
    table.draw(viewTable, {width: '100%', height: '100%'});
    google.visualization.events.addListener(table, 'sort', function(event) {
      data.sort([{column: event.column, desc: !event.ascending}]);
      chart.draw(viewChart);
    });
  }
  $(window).resize(function() { drawSort(); });
</script>

<?php } else if ($_GET['type'] == "bar-V") { ?>

<script type="text/javascript">
  google.charts.load('current', {'packages': ['table', 'corechart']});
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
    var formatter = new google.visualization.NumberFormat({suffix: '%'});
    formatter.format(data, 2);
    var options = { title: '<?php echo $bdx; ?>', width: '100%', height: '400', bar: { groupWidth:  '60%' }, legend: { position: 'none' } };
    var chart = new google.visualization.ColumnChart(document.getElementById('chart'));
    chart.draw(viewChart, options);
    var table = new google.visualization.Table(document.getElementById('table'));
    table.draw(viewTable, {width: '100%', height: '100%'});
    google.visualization.events.addListener(table, 'sort', function(event) {
      data.sort([{column: event.column, desc: !event.ascending}]);
      chart.draw(viewChart);
    });
  }
  $(window).resize(function() { drawSort(); });
</script>

<?php } ?>


<?php } else if (($cd == "checkbox") || ($cd == "checkboxhtml")) { ?>

<?php if ((empty($_GET['type'])) || ($_GET['type'] == "bar-H")) { ?>

<script type="text/javascript">
  google.charts.load('current', {'packages': ['table', 'corechart']});
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
    var formatter = new google.visualization.NumberFormat({suffix: '%'});
    formatter.format(data, 2);
    var options = { title: '<?php echo $bdx; ?>', width: '100%', height: '400', bar: {groupWidth: '60%' }, legend: {position: 'none' } };
    var chart = new google.visualization.BarChart(document.getElementById('chart'));
    chart.draw(viewChart, options);
    var table = new google.visualization.Table(document.getElementById('table'));
    table.draw(viewTable, {width: '100%', height: '100%'});
    google.visualization.events.addListener(table, 'sort', function(event) {
      data.sort([{column: event.column, desc: !event.ascending}]);
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
    var formatter = new google.visualization.NumberFormat({suffix: '%'});
    formatter.format(data, 2);
    var options = { title: '<?php echo $bdx; ?>', width: '100%', height: '400', bar: { groupWidth: '60%' }, legend: { position: 'none' }, bars: 'horizontal' };
    var chart = new google.charts.Bar(document.getElementById('chart'));
    chart.draw(viewChart, options);
    var table = new google.visualization.Table(document.getElementById('table'));
    table.draw(viewTable, {width: '100%', height: '100%'});
    google.visualization.events.addListener(table, 'sort', function(event) {
      data.sort([{column: event.column, desc: !event.ascending}]);
      chart.draw(viewChart);
    });
  }
  $(window).resize(function() { drawSort(); });
</script>

<?php } else if ($_GET['type'] == "bar-V") { ?>

<script type="text/javascript">
  google.charts.load('current', {'packages': ['table', 'corechart']});
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
    var formatter = new google.visualization.NumberFormat({suffix: '%'});
    formatter.format(data, 2);
    var options = { title: '<?php echo $bdx; ?>', width: '100%', height: '400', bar: { groupWidth:  '60%' }, legend: { position: 'none' } };
    var chart = new google.visualization.ColumnChart(document.getElementById('chart'));
    chart.draw(viewChart, options);
    var table = new google.visualization.Table(document.getElementById('table'));
    table.draw(viewTable, {width: '100%', height: '100%'});
    google.visualization.events.addListener(table, 'sort', function(event) {
      data.sort([{column: event.column, desc: !event.ascending}]);
      chart.draw(viewChart);
    });
  }
  $(window).resize(function() { drawSort(); });
</script>

<?php } ?>


<?php } else if ($cd == "comment") { ?>

<script type="text/javascript">
  google.charts.load('current', {'packages': ['table', 'wordtree']});
  google.charts.setOnLoadCallback(drawSort);
  function drawSort() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Answer');
    data.addColumn('number', 'Count');
    data.addColumn('number', 'Percentage');
<?php echo $out2; ?>
    var viewTable = new google.visualization.DataView(data);
    viewTable.setColumns([0, 1, 2]);
    var viewChart = new google.visualization.DataView(data);
    viewChart.setColumns([0, 2]);
    var formatter = new google.visualization.NumberFormat({suffix: '%'});
    formatter.format(data, 2);
    var data = google.visualization.arrayToDataTable(<?php print_r($out); ?>);
    var root = document.getElementById('root').value || '';
    if (root) { var options = { wordtree: { format: 'implicit', type: 'double', word: root }, title: '<?php echo $bdx; ?>', width: '100%', height: '600' }; }
    else { var options = { wordtree: { format: 'implicit', type: 'suffix', word: root }, title: '<?php echo $bdx; ?>', width: '100%', height: '600' }; }
    var chart = new google.visualization.WordTree(document.getElementById('chart'));
    chart.draw(viewChart, options);
    document.getElementById('go').onclick = drawSort;
    var table = new google.visualization.Table(document.getElementById('table'));
    table.draw(viewTable, {width: '100%', height: '100%'});
    google.visualization.events.addListener(table, 'sort', function(event) {
      data.sort([{column: event.column, desc: !event.ascending}]);
      chart.draw(viewChart);
    });
  }
  $(window).resize(function() { drawSort(); });
</script>

<?php } else if ($cd == "matrix") { ?>

<?php if ((empty($_GET['type'])) || ($_GET['type'] == "bar-H")) { ?>

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

<?php } else if ($_GET['type'] == "bar-V-mean") { ?>

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

<?php } ?>

<?php } else if ($cd == "file") { ?>

<script type="text/javascript">
  $(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });
</script>

<?php } ?>

<br>

<script type="text/javascript">
  String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
  };
  $(document).ready(function () {
    var ttt = <?php echo $datafortable; ?>;
    var ttt = JSON.stringify(ttt);
    ttt = ttt.replaceAll("data", ""); ttt = ttt.replaceAll("upload/", "");
    var inArray = JSON.parse(ttt);
    var outArray = [];
    for (var row in inArray) { outArray[outArray.length] = parse_object(inArray[row]); }
    // $("span.rows.count").text("" + outArray.length);
    var csv = "\ufeff"+$.csv.fromObjects(outArray);
    var blob = new Blob([csv], { type: ' type: "text/csv;charset=UTF-8"' });
    var csvUrl = window.URL.createObjectURL(blob);
    var todayDate = new Date().toISOString().slice(0,10);
    var filename = "<?php echo $project; ?>" + "_data_" + todayDate + '.csv';
    $("a.exceldownload").attr({'download': filename, 'href': csvUrl });
  });
</script>

<?php backButton("/admin/?w=surveys", "Back to the main page", "danger"); ?>

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
