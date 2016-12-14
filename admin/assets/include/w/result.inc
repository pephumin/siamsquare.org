<?php

require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/config.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/class.imgresize.php';
$db = new PDO('mysql:host='. DB_HOST .';dbname='. DB_DATABASE . ';charset=utf8', DB_USER, DB_PASS);


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

$show = $_GET["q"];
// $start = substr($show, -1) - 1;
// $end = $start + 1;

$a = json_decode($rows[0]["data"], true);
foreach ($a["pages"] as $k1 => $p1) { foreach ($p1 as $k2 => $p2) { foreach ($p2 as $k3 => $p3) { $questions[] = $p3; } } }
// print_r($questions);
$qout = "";
// for ($i = $start; $i < $end; $i++) {
for ($i = 0; $i < count($questions); $i++) {
  $qname = $questions[$i]["name"]; $pname[] = $questions[$i]["name"];
  if ($questions[$i]["html"]) { $qtitle = "HTML"; $ptitle[] = $questions[$i]["title"]; $html = $questions[$i]["html"]; }
  else { $qtitle = $questions[$i]["title"]; $ptitle[] = $questions[$i]["title"]; }
  $qtype = $questions[$i]["type"]; $ptype[] = $questions[$i]["type"];
  $qrequired = $questions[$i]["isRequired"];
  $choices = $questions[$i]["choices"];
  if ($questions[$i]["choicesByUrl"]) { $choicesByUrl = $questions[$i]["choicesByUrl"]; }
  if ($questions[$i]["choicesByUrl"]["url"]) { $url = $questions[$i]["choicesByUrl"]["url"]; }
  if ($questions[$i]["choicesByUrl"]["path"]) { $path = $questions[$i]["choicesByUrl"]["path"]; }
  if ($questions[$i]["choicesByUrl"]["valueName"]) { $valueName = $questions[$i]["choicesByUrl"]["valueName"]; }
  if ($qrequired) { $add = " <sup>(*)</sup>\n"; } else { $add = ""; }

  if ($qname == $show) {
    $qout .= "<h4 style=\"font-family:boon;font-size:140%\">".$qname.$add.": ".$qtitle." <small>[".$qtype."]</small></h4>\n";
    if ($qtype == "radiogroup") {
      $qout .= "<ul>\n";
      foreach ($choices as $k4 => $p4) {
        $choice_text = $p4['text']; $c_text[] = $p4['text'];
        $choice_code = $p4['value']; $c_code[] = $p4['value'];
        $qout .= "<div class=\"radio\" style=\"font-family:boon;font-size:120%\"><label><input type=\"radio\" name=\"radiogroup\" style=\"position:relative;margin-right:10px\" disabled>$choice_text ($choice_code)</label></div>\n";
      }
      $qout .= "</ul>\n";
    }
    else if ($qtype == "checkbox") {
      $qout .= "<ul>\n";
      foreach ($choices as $k5 => $p5) {
        $choice_text = $p5['text']; $c_text[] = $p5['text'];
        $choice_code = $p5['value']; $c_code[] = $p5['value'];
        $qout .= "<div class=\"checkbox\" style=\"font-family:boon;font-size:120%\"><label><input type=\"checkbox\" style=\"position:relative;margin-right:10px\">$choice_text ($choice_code)</label></div>\n";
      }
      $qout .= "</ul>\n";
    }
    else if ($qtype == "dropdown") {
      if ($choicesByUrl) {
        list($path1, $path2) = explode(';', $path);
        $array = json_decode(file_get_contents($url));
        $qout .= "<div class=\"row\"><div class=\"col-sm-6\" style=\"font-family:boon;font-size:120%\">\n";
        $qout .= "<select class=\"form-control\">";
        foreach ($array->$path1->$path2 as $p1=>$q1) {
          $q11 = $q1->$valueName;
          $qout .= "<option>$q11</option>";
        }
        $qout .= "</select>";
        $qout .= "</div></div>\n";
      } else {
        $qout .= "<div class=\"row\"><div class=\"col-sm-6\" style=\"font-family:boon;font-size:120%\">\n";
        $qout .= "<select class=\"form-control\">";
        foreach ($choices as $k6 => $p6) {
          $choice_text = $p6['text']; $c_text[] = $p6['text'];
          $choice_code = $p6['value']; $c_code[] = $p6['value'];
          $qout .= "<option>$choice_text ($choice_code)</option>";
        }
        $qout .= "</select>";
        $qout .= "</div></div>\n";
      }
    }
    else if ($qtype == "rating") {
      $mininumRateDescription = $questions[$i]["mininumRateDescription"];
      $maximumRateDescription = $questions[$i]["maximumRateDescription"];
      $qout .= "<table class=\"table table-bordered bg-primary\" style=\"width:50%;font-family:boon;font-size:120%\">\n";
      $qout .= "<tr>\n";
      $qout .= "<td width=\"35%\" align=\"left\"><i class=\"pe-arrow-circle-left pe-lg\"></i> $mininumRateDescription (1)</td>\n";
      $qout .= "<td width=\"10%\" align=\"center\">(2)</td>\n";
      $qout .= "<td width=\"10%\" align=\"center\">(3)</td>\n";
      $qout .= "<td width=\"10%\" align=\"center\">(4)</td>\n";
      $qout .= "<td width=\"35%\" align=\"right\">$maximumRateDescription (5) <i class=\"pe-arrow-circle-right pe-lg\"></i></td>\n";
      $qout .= "</tr>\n";
      $qout .= "</table>\n";
      foreach ($choices as $k7 => $p7) {
        $choice_text = $p7['text']; $c_text[] = $p7['text'];
        $choice_code = $p7['value']; $c_code[] = $p7['value'];
        $qout .= "<li>$choice_text ($choice_code)</li>\n";
      }
      $qout .= "</ul>\n";
    }
    else if ($qtype == "comment") {
      $qout .= "<textarea rows=\"5\" class=\"form-control\" disabled></textarea><br>\n";
    }
    else if (($qtype == "text") || ($qtype == "multipletext")) {
      $qout .= "<input type=\"text\" class=\"form-control\" disabled><br>\n";
    }
    else if ($qtype == "html") {
      $qout .= "<div style=\"font-family:boon;font-size:110%\">\n";
      $qout .= $html."<br>";
      $qout .= "</div>\n";
    }
    else if ($qtype == "matrix") {
      $qout .= "<table class=\"table\" style=\"font-family:boon;font-size:110%\">\n";
      $qout .= "<thead><tr class=\"bg-primary\">\n";
      $qout .= "<th width=\"20%\"></th>\n";
      $a = 0;
      foreach ($questions[$i]["columns"] as $k8 => $p8) {
        $column_text = $p8['text'];
        $column_code = $p8['value'];
        $qout .= "<th style=\"text-align:right\">$column_text ($column_code)</th>\n";
        $a++;
      }
      $qout .= "</tr></thead>\n";
      $qout .= "<tbody><tr>\n";
      foreach ($questions[$i]["rows"] as $k9 => $p9) {
        $row_text = $p9['text'];
        $row_code = $p9['value'];
        $qout .= "<td align=\"right\">$row_text ($row_code)</td>\n";
        for ($b=0; $b < $a; $b++) { $qout .= "<td align=\"right\"><div class=\"radio\"><input type=\"radio\" name=\"$row_code\" style=\"position:relative;margin:0px\" disabled></div></td>\n"; }
        $qout .= "</tr>";
      }
      $qout .= "</tbody>\n";
      $qout .= "</table>\n";
    }
    else if ($qtype == "matrixdropdown") {
      $qout .= "<table class=\"table\" style=\"font-family:boon;font-size:110%\">\n";
      $qout .= "<thead><tr class=\"bg-primary\">\n";
      $qout .= "<th width=\"20%\"></th>\n";
      $c = 0;
      foreach ($questions[$i]["columns"] as $k10 => $p10) {
        $column_name = $p10['name'];
        $column_title = $p10['title'];
        $qout .= "<th style=\"text-align:right\">$column_name<br>($column_title)</th>\n";
        $c++;
      }
      $qout .= "</tr></thead>\n";
      $cc = "<select class=\"form-control input-sm\">";
      foreach ($questions[$i]["choices"] as $k11 => $p11) {
        $choice_text = $p11['text'];
        $choice_code = $p11['value'];
        $cc .= "<option>$choice_text ($choice_code)</option>";
      }
      $cc .= "</select>";
      $qout .= "<tbody><tr>\n";
      foreach ($questions[$i]["rows"] as $k12 => $p12) {
        $row_text = $p12['text'];
        $row_code = $p12['value'];
        $qout .= "<td align=\"right\">$row_text<br>($row_code)</td>\n";
        for ($d=0; $d < $c; $d++) { $qout .= "<td align=\"right\">$cc</td>\n"; }
        $qout .= "</tr>";
      }
      $qout .= "</tbody>\n";
      $qout .= "</table>\n";
    }
    $qout .= "<br>\n";
  }
}


// ------- Questionnaire navigator --------------------------------------------------------------------------

$limit = 5;
$sid = $_GET["s"]; $qid = $_GET["q"];
$questionlisting = "<ul class=\"progress-tracker progress-tracker--text progress-tracker--center\">\n";
$numberofquestions = count($questions);
for ($i = 0; $i < $numberofquestions; $i++) {
  $qname1 = $questions[$i]["name"];
  if ($questions[$i]["html"]) { $qtitle1 = "HTML"; }
  else { $qtitle1 = $questions[$i]["title"]; }
  $qtype1 = $questions[$i]["type"];
  if ($qname1 == $_GET['q']) { $questionlisting .= "<li class=\"progress-step is-active\">\n"; }
  else { $questionlisting .= "<li class=\"progress-step\">\n"; }
  $questionlisting .= "  <span class=\"progress-marker\"></span>\n";
  $questionlisting .= "  <a href=\"/admin/?w=result&s=$sid&q=$qname1\"><span class=\"progress-text\">\n";
  $questionlisting .= "    <span class=\"progress-title\">$qname1 <small>($qtype1)</small></span>\n";
  $questionlisting .= "    <p style=\"font-family:boon;font-size:140%;margin-top:10px\">$qtitle1</p>\n";
  $questionlisting .= "  </span></a>\n";
  $questionlisting .= "</li>\n";
}
$questionlisting .= "</ul>\n";


// ------- Show data --------------------------------------------------------------------------

$sql = "SELECT * FROM j_results WHERE surveyid = :surveyid AND status > 0 ORDER BY submitted DESC";
$q = $db->prepare($sql);
$q->bindValue(':surveyid', $surveyid, PDO::PARAM_INT);
$q->execute();
$totalrecords = $q->rowCount();
$r = $q->fetchAll(PDO::FETCH_ASSOC);

$qq = $_GET['q'];
$cc = array_combine($pname, $ptype);
$cd = $cc[$qq]; //echo $cd;
$bx = array_combine($pname, $ptitle);
$bdx = $bx[$qq];

if ($cd == "checkbox") {
  $k = array();
  for ($i=0; $i < count($r); $i++) {
    $j = $r[$i]["data"];
    $j = json_decode($j, true);
    foreach ($j[$qq] as $m => $v) {
      array_push($k, $v);
    }
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
  if ((empty($_GET['type'])) || ($_GET['type'] == "bar-H")) { $menu = "<p class=\"text-center\"><strong>Choose the chart type [</strong> <u>Bar Horizontal</u> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=bar-V")."\">Bar Vertical</a> <strong>]</strong></p><br>\n"; }
  else if ($_GET['type'] == "bar-V") { $menu = "<p class=\"text-center\"><strong>Choose the chart type [</strong> <a href=\"".htmlspecialchars($me."&type=bar-H")."\">Bar Horizontal</a> <strong>:</strong> <u>Bar Vertical</u> <strong>]</strong></p><br>\n"; }
}
else if ($cd == "comment") {
  $k = array();
  $out = "[ ";
  for ($i=0; $i < count($r); $i++) {
    $j = $r[$i]["data"];
    $j = json_decode($j, true);
    $out .= "['".$j[$qq]."'],";
    array_push($k, $j[$qq]);
  }
  $out .= " ]";
  $cece = array_count_values($k); arsort($cece); //print_r($cece);
  $totalresponses = array_sum($cece);
  // print_r($out);
}
else if ($cd == "file") {
  $k = array();
  for ($i=0; $i < count($r); $i++) {
    $j = $r[$i]["data"];
    $j = json_decode($j, true);
    array_push($k, $j[$qq]);
  }
  $c = array_count_values($k); arsort($c);
  $totalresponses = array_sum($c);

  // ############# Output for file upload ############# //

  $me = "/admin/?w=result&s=".$_GET['s']."&q=".$_GET['q'];
  if (empty($_GET['size']) || ($_GET['size'] == "S")) {
    $outdirect = "<p class=\"text-center\"><strong>Choose the preview size [</strong> <u>small</u> <strong>:</strong> <a href=\"".htmlspecialchars($me."&size=M")."\">medium</a> <strong>:</strong> <a href=\"".htmlspecialchars($me."&size=L")."\">large</a> <strong>]</strong></p><br>\n";
    $bb = 0;
    $outdirect .= "  <table>\n";
    $outdirect .= "    <tr>\n";
    foreach ($k as $A => $B) {
      if ($B) {
        $R = new resize('../members/assets/upload/full/'.$B);
        $R->resizeImage(180, 180, 'auto');
        $R->saveImage('../members/assets/upload/resized_S/'.$B, 80);
        // $outdirect .= "      <td style=\"text-align:center\"><img src=\"/members/assets/upload/resized_S/$B\" class=\"thumbnail img-responsive hover-shadow cursor\" onclick=\"openModal();currentSlide(1)\"></td>\n";
        // $AA[] = "<img src=\"/members/assets/upload/full/$B\"";
        $outdirect .= "      <td style=\"text-align:center\"><a href=\"/members/assets/upload/full/$B\" target=\"_blank\" title=\"Click to open a full size image in a new window\"><img src=\"/members/assets/upload/resized_S/$B\" class=\"thumbnail img-responsive\"></a></td>\n";
        // $outdirect .= "      <td style=\"text-align:center\"><a href=\"#\" id=\"$B\" class=\"preview\" title=\"Click to open a larger image\"><img src=\"/members/assets/upload/resized_S/$B\" class=\"thumbnail img-responsive\"></a></td>\n";
        $bb++;
        if (($bb % 5 == 0) && ($bb > 0)) { $outdirect .= "    </tr><tr>\n"; }
      }
    }
    $outdirect .= "    </tr>\n";
    $outdirect .= "  </table>\n";
    // $modal = "<div id=\"myModal\" class=\"modal\">\n";
    // $modal .= "  <span class=\"close cursor\" onclick=\"closeModal()\">&times;</span>\n";
    // $modal .= "  <div class=\"modal-content\">\n";
    // for ($i=0; $i<$AAA; $i++) { $modal .= "    <div class=\"mySlides\"><div class=\"numbertext\">$i / $AAA</div>$AA[$i]></div>\n"; }
    // $modal .= "    <a class=\"prev\" onclick=\"plusSlides(-1)\">&#10094;</a>\n";
    // $modal .= "    <a class=\"next\" onclick=\"plusSlides(1)\">&#10095;</a>\n";
    // $modal .= "    <div class=\"caption-container\"><p id=\"caption\"></p></div>\n";
    // for ($j=1; $j<$AAA; $j++) { $modal .= "    <div class=\"column\">$AA[$j] class=\"demo cursor\" onclick=\"currentSlide($j)\" alt=\"\"></div>\n"; }
    // $modal .= "  </div>\n";
    // $modal .= "</div>\n";
  } else if ($_GET['size'] == "M") {
    $outdirect = "<p class=\"text-center\"><strong>Choose the preview size [</strong> <a href=\"".htmlspecialchars($me."&size=S")."\">small</a> <strong>:</strong> <u>medium</u> <strong>:</strong> <a href=\"".htmlspecialchars($me."&size=L")."\">large</a> <strong>]</strong></p><br>\n";
    $bb = 0;
    $outdirect .= "  <table>\n";
    $outdirect .= "    <tr>\n";
    foreach ($k as $A => $B) {
      if ($B) {
        $R = new resize('../members/assets/upload/full/'.$B);
        $R->resizeImage(300, 300, 'auto');
        $R->saveImage('../members/assets/upload/resized_M/'.$B, 80);
        $outdirect .= "      <td style=\"text-align:center\"><a href=\"/members/assets/upload/full/$B\" target=\"_blank\" title=\"Click to open a full size image in a new window\"><img src=\"/members/assets/upload/resized_M/$B\" class=\"thumbnail img-responsive\"></a></td>\n";
        // $outdirect .= "      <td style=\"text-align:center\"><a href=\"\" id=\"$B\" class=\"preview\" title=\"Click to open a larger image\"><img src=\"/members/assets/upload/resized_M/$B\" class=\"thumbnail img-responsive\"></a></td>\n";
        $bb++;
        if (($bb % 3 == 0) && ($bb > 0)) { $outdirect .= "    </tr><tr>\n"; }
      }
    }
    $outdirect .= "    </tr>\n";
    $outdirect .= "  </table>\n";
  } else if ($_GET['size'] == "L") {
    $outdirect = "<p class=\"text-center\"><strong>Choose the preview size [</strong> <a href=\"".htmlspecialchars($me."&size=S")."\">small</a> <strong>:</strong> <a href=\"".htmlspecialchars($me."&size=M")."\">medium</a> <strong>:</strong> <u>large</u> <strong>]</strong></p><br>\n";
    $bb = 0;
    $outdirect .= "  <table>\n";
    $outdirect .= "    <tr>\n";
    foreach ($k as $A => $B) {
      if ($B) {
        $R = new resize('../members/assets/upload/full/'.$B);
        $R->resizeImage(450, 450, 'auto');
        $R->saveImage('../members/assets/upload/resized_L/'.$B, 80);
        $outdirect .= "      <td style=\"text-align:center\"><a href=\"/members/assets/upload/full/$B\" target=\"_blank\" title=\"Click to open a full size image in a new window\"><img src=\"/members/assets/upload/resized_L/$B\" class=\"thumbnail img-responsive\"></a></td>\n";
        // $outdirect .= "      <td style=\"text-align:center\"><a href=\"\" id=\"$B\" class=\"preview\" title=\"Click to open a larger image\"><img src=\"/members/assets/upload/resized_L/$B\" class=\"thumbnail img-responsive\"></a></td>\n";
        $bb++;
        if (($bb % 2 == 0) && ($bb > 0)) { $outdirect .= "    </tr><tr>\n"; }
      }
    }
    $outdirect .= "    </tr>\n";
    $outdirect .= "  </table>\n";
  }
}
else if (($cd == "radiogroup") || ($cd == "dropdown") || ($cd == "rating")) {
  $x = "[";
  for ($i=0; $i < count($r); $i++) {
    if ($i != (count($r)-1)) { $x .= $r[$i]["data"].","; } else { $x .= $r[$i]["data"]; }
  }
  $x .= "]";

  $j = json_decode($x, true); //print_r($j);
  foreach ($j as $k1 => $p1) { $jj[] = $p1; }
  for ($i=0; $i < count($jj); $i++) {
    $k[] = $jj[$i][$qq];
  }
  $c = array_count_values($k);
  if (json_decode(str_replace($c_code, $c_text, json_encode($c)), true)) { $c = json_decode(str_replace($c_code, $c_text, json_encode($c)), true); }
  // arsort($c);
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
  if ((empty($_GET['type'])) || ($_GET['type'] == "pie")) { $menu = "<p class=\"text-center\"><strong>Choose the chart type [</strong> <u>Pie</u> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=donut")."\">Donut</a> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=bar-H")."\">Bar Horizontal</a> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=bar-V")."\">Bar Vertical</a> <strong>]</strong></p><br>\n"; }
  else if ($_GET['type'] == "donut") { $menu = "<p class=\"text-center\"><strong>Choose the chart type [</strong> <a href=\"".htmlspecialchars($me."&type=pie")."\">Pie</a> <strong>:</strong> <u>Donut</u> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=bar-H")."\">Bar Horizontal</a> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=bar-V")."\">Bar Vertical</a> <strong>]</strong></p><br>\n"; }
  else if ($_GET['type'] == "bar-H") { $menu = "<p class=\"text-center\"><strong>Choose the chart type [</strong> <a href=\"".htmlspecialchars($me."&type=pie")."\">Pie</a> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=donut")."\">Donut</a> <strong>:</strong> <u>Bar Horizontal</u> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=bar-V")."\">Bar Vertical</a> <strong>]</strong></p><br>\n"; }
  else if ($_GET['type'] == "bar-V") { $menu = "<p class=\"text-center\"><strong>Choose the chart type [</strong> <a href=\"".htmlspecialchars($me."&type=pie")."\">Pie</a> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=donut")."\">Donut</a> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=bar-H")."\">Bar Horizontal</a> <strong>:</strong> <u>Bar Vertical</u> <strong>]</strong></p><br>\n"; }
}

// echo $cd;
// ------- Output --------------------------------------------------------------------------

$title = "Survey result";
pageHeader($title);
echo "<h2>$title</h2>\n";
echo "<p>This is a tool that helps you view the survey result by demand. Result is generated by pulling the data from our server in <em>real time</em>.</p>\n";
echo "<p>Although several question types have an option to show results in many different ways (e.g. a few chart types, tabulation, ability to sort data, etc.), there is still a limitation for a certain type of question such as open-ends.</p>\n";
echo "<hr>\n";
echo "<div class=\"row\">\n";
echo "  <div class=\"col-sm-9\">\n";
echo "    <h3>Project $project</h3>\n";
echo "    <p>This survey has a total of <strong>$numberofquestions questions</strong> as shown below. Click one of the below questions to see its real-time results.</p>\n";
echo "    <p>Should you need to see more details such as subgroup analysis, you would need to download the data file and process it with your data processing team in a more traditional way.</p>\n";
echo "  </div>\n";
echo "  <div class=\"col-sm-3\" style=\"padding:10px\">\n";
echo "    <div class=\"list-group small\">\n";
echo "      <li class=\"list-group-item list-group-item-info\"><strong><i class=\"pe-download pe-fw\"></i> Download</strong></li>\n";
echo "      <a href=\"\" class=\"list-group-item\"><i class=\"pe-file-excel-o pe-fw\"></i> Get CSV data</a>\n";
echo "      <a href=\"\" class=\"list-group-item\"><i class=\"pe-table pe-fw\"></i> Get XLS tabulation</a>\n";
echo "      <a href=\"\" class=\"list-group-item\"><i class=\"pe-file-pdf-o pe-fw\"></i> Get PDF</a>\n";
echo "    </div>\n";
echo "  </div>\n";
echo "</div>\n";

echo $questionlisting;

$answers = "<p><em>A total of $totalresponses responses answered by $totalrecords respondents</em></p>\n";

$openendquery = "<div style=\"text-align:right\">\n";
$openendquery .= "<p>Custom key words centering tool</p>\n";
$openendquery .= "<input id=\"root\" value=\"\" placeholder=\"Enter key words\">\n";
$openendquery .= "<input type=\"button\" id=\"go\" value=\"Generate\">\n";
$openendquery .= "</div>\n";

?>

<?php if ($_GET["q"]) { ?>

<div class="row">
  <div class="col-sm-12 bg-info" style="margin-bottom:40px">
    <?php echo $qout; ?>
    <?php echo $answers; ?>
  </div>
  <div class="col-sm-12">
<?php if ($cd == "file") { echo $outdirect; } else { ?>
    <?php if ($cd == "comment") { echo $openendquery; } else { echo $menu; } ?>
    <p><small class="blue">You can sort the results by clicking the table's headers</small></p>
    <div id="table" style="width:300px"></div>
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
      var options = { title: '<?php echo $bdx; ?>', is3D: true, width: '100%', height: '400'};
      var chart = new google.visualization.PieChart(document.getElementById('chart'));
      chart.draw(view, options);
      var table = new google.visualization.Table(document.getElementById('table'));
      table.draw(view, {width: '100%', height: '100%'});
      google.visualization.events.addListener(table, 'sort',
        function(event) {
          data.sort([{column: event.column, desc: !event.ascending}]);
          chart.draw(view);
        });
    }
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
      var options = { title: '<?php echo $bdx; ?>', pieHole: 0.4, width: '100%', height: '400'};
      var chart = new google.visualization.PieChart(document.getElementById('chart'));
      chart.draw(view, options);
      var table = new google.visualization.Table(document.getElementById('table'));
      table.draw(view, {width: '100%', height: '100%'});
      google.visualization.events.addListener(table, 'sort',
        function(event) {
          data.sort([{column: event.column, desc: !event.ascending}]);
          chart.draw(view);
        });
    }
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
      var options = { title: '<?php echo $bdx; ?>', width: '100%', height: '400', bar: { groupWidth:  '95%' }, legend: { position: 'none' } };
      var chart = new google.visualization.BarChart(document.getElementById('chart'));
      chart.draw(viewChart, options);
      var table = new google.visualization.Table(document.getElementById('table'));
      table.draw(viewTable, {width: '100%', height: '100%'});
      google.visualization.events.addListener(table, 'sort',
        function(event) {
          data.sort([{column: event.column, desc: !event.ascending}]);
          chart.draw(viewChart);
        });
    }
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
      var options = { title: '<?php echo $bdx; ?>', width: '100%', height: '400', bar: { groupWidth:  '95%' }, legend: { position: 'none' } };
      var chart = new google.visualization.ColumnChart(document.getElementById('chart'));
      chart.draw(viewChart, options);
      var table = new google.visualization.Table(document.getElementById('table'));
      table.draw(viewTable, {width: '100%', height: '100%'});
      google.visualization.events.addListener(table, 'sort',
        function(event) {
          data.sort([{column: event.column, desc: !event.ascending}]);
          chart.draw(viewChart);
        });
    }
  </script>

<?php } ?>


<?php } else if ($cd == "checkbox") { ?>

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
      var options = { title: '<?php echo $bdx; ?>', width: '100%', height: '400', bar: {groupWidth: '95%' }, legend: {position: 'none' } };
      var chart = new google.visualization.BarChart(document.getElementById('chart'));
      chart.draw(viewChart, options);
      var table = new google.visualization.Table(document.getElementById('table'));
      table.draw(viewTable, {width: '100%', height: '100%'});
      google.visualization.events.addListener(table, 'sort',
        function(event) {
          data.sort([{column: event.column, desc: !event.ascending}]);
          chart.draw(viewChart);
        });
    }
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
      var options = { title: '<?php echo $bdx; ?>', width: '100%', height: '400', bar: { groupWidth: '95%' }, legend: { position: 'none' }, bars: 'horizontal' };
      var chart = new google.charts.Bar(document.getElementById('chart'));
      chart.draw(viewChart, options);
      var table = new google.visualization.Table(document.getElementById('table'));
      table.draw(viewTable, {width: '100%', height: '100%'});
      google.visualization.events.addListener(table, 'sort',
        function(event) {
          data.sort([{column: event.column, desc: !event.ascending}]);
          chart.draw(viewChart);
        });
    }
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
      var options = { title: '<?php echo $bdx; ?>', width: '100%', height: '400', bar: { groupWidth:  '95%' }, legend: { position: 'none' } };
      var chart = new google.visualization.ColumnChart(document.getElementById('chart'));
      chart.draw(viewChart, options);
      var table = new google.visualization.Table(document.getElementById('table'));
      table.draw(viewTable, {width: '100%', height: '100%'});
      google.visualization.events.addListener(table, 'sort',
        function(event) {
          data.sort([{column: event.column, desc: !event.ascending}]);
          chart.draw(viewChart);
        });
    }
  </script>

<?php } ?>


<?php } else if ($cd == "comment") { ?>

  <script type="text/javascript">
    google.charts.load('current', {packages:['wordtree']});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var data = google.visualization.arrayToDataTable(<?php print_r($out); ?>);
      var root = document.getElementById('root').value || '';
      if (root) { var options = { wordtree: { format: 'implicit', type: 'double', word: root }, title: '<?php echo $bdx; ?>', width: '100%', height: '600' }; }
      else { var options = { wordtree: { format: 'implicit', type: 'suffix', word: root }, title: '<?php echo $bdx; ?>', width: '100%', height: '600' }; }
      var chart = new google.visualization.WordTree(document.getElementById('chart'));
      chart.draw(data, options);
      document.getElementById('go').onclick = drawChart;
    }
  </script>

<?php } else if ($cd == "file") { ?>

  <?php echo $modal; ?>
  <style media="screen">
    /*.row > .column { padding: 0 8px; }
    .row:after { content: ""; display: table; clear: both; }
    .column { float: left; width: 25%; }*/
    .modal { display: none; position: fixed; z-index: 1; padding-top: 100px; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: black; }
    .modal-content { position: relative; background-color: #fefefe; margin: auto; padding: 0; width: 90%; max-width: 1200px; }
    .close { color: white; position: absolute; top: 10px; right: 25px; font-size: 35px; font-weight: bold; }
    .close:hover, .close:focus { color: #999; text-decoration: none; cursor: pointer; }
    .mySlides { display: none; }
    .cursor { cursor: pointer }
    .prev, .next { cursor: pointer; position: absolute; top: 50%; width: auto; padding: 16px; margin-top: -50px; color: white; font-weight: bold; font-size: 20px; transition: 0.6s ease; border-radius: 0 3px 3px 0; user-select: none; -webkit-user-select: none; }
    .next { right: 0; border-radius: 3px 0 0 3px; }
    .prev:hover, .next:hover { background-color: rgba(0, 0, 0, 0.8); }
    .numbertext { color: #f2f2f2; font-size: 12px; padding: 8px 12px; position: absolute; top: 0; }
    img { margin-bottom: -4px; }
    .caption-container { text-align: center; background-color: black; padding: 2px 16px; color: white; }
    .demo { opacity: 0.6; }
    .active, .demo:hover { opacity: 1; }
    img.hover-shadow { transition: 0.3s }
    .hover-shadow:hover { box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) }
  </style>
  <script type="text/javascript">
    function openModal() { document.getElementById('myModal').style.display = "block"; }
    function closeModal() { document.getElementById('myModal').style.display = "none"; }
    var slideIndex = 1;
    showSlides(slideIndex);
    function plusSlides(n) { showSlides(slideIndex += n); }
    function currentSlide(n) { showSlides(slideIndex = n); }
    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("demo");
      var captionText = document.getElementById("caption");
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) { slides[i].style.display = "none"; }
      for (i = 0; i < dots.length; i++) { dots[i].className = dots[i].className.replace(" active", ""); }
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
      captionText.innerHTML = dots[slideIndex-1].alt;
    }
  </script>

<?php } ?>


<br>

<a href="/admin/?w=surveys" class="btn btn-danger btn-sm pull-right" style="margin-top:50px; margin-bottom: 20px"><i class="pe-chevron-circle-left pe-fw"></i> Back to the main page</a>

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
