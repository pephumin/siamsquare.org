<?php

// Option 1: Output everything including data
function outputall($surveyid) {
  global $db;
  $sql = "SELECT * FROM j_results WHERE surveyid = :surveyid ORDER BY submitted DESC";
  $q = $db->prepare($sql);
  $q->bindValue(':surveyid', $surveyid, PDO::PARAM_INT);
  $q->execute();
  $rows = $q->fetchAll(PDO::FETCH_ASSOC);
  $output = "";
  $output .= "<pre>\n";
  $output .= "[\n";
  for ($i=0; $i < count($rows); $i++) {
    $a = $rows[$i];
    $a["data"] = json_decode($a["data"], true);
    $b = json_encode($a, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    if ($i == (count($rows)-1)) { $output .= $b; }
    else { $output .= $b . ","; }
  }
  $output .= "]\n";
  $output .= "</pre>\n";
  return $output;
}

// Option 2: Output only data
function outputdata($surveyid) {
  global $db;
  $sql = "SELECT * FROM j_results WHERE surveyid = :surveyid ORDER BY submitted DESC";
  $q = $db->prepare($sql);
  $q->bindValue(':surveyid', $surveyid, PDO::PARAM_INT);
  $q->execute();
  $rows = $q->fetchAll(PDO::FETCH_ASSOC);
  $output = "";
  $output .= "<pre>\n";
  $output .= "[\n";
  for ($i=0; $i < count($rows); $i++) {
    $a = $rows[$i]["data"];
    $a = json_decode($a, true);
    $b = json_encode($a, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    if ($i == (count($rows)-1)) { $output .= $b; }
    else { $output .= $b . ","; }
  }
  $output .= "]\n";
  $output .= "</pre>\n";
  return $output;
}


require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/config.php';
$db = new PDO('mysql:host='. DB_HOST .';dbname='. DB_DATABASE . ';charset=utf8', DB_USER, DB_PASS);


// Show question
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
$start = substr($show, -1) - 1;
$end = $start + 1;

$a = json_decode($rows[0]["data"], true);
foreach ($a["pages"] as $k1 => $p1) { foreach ($p1 as $k2 => $p2) { foreach ($p2 as $k3 => $p3) { $questions[] = $p3; } } }
// print_r($questions);
$qout = "";
for ($i = $start; $i < $end; $i++) {
  $qname = $questions[$i]["name"];
  $qtitle = $questions[$i]["title"];
  $qtype = $questions[$i]["type"];
  $qrequired = $questions[$i]["isRequired"];
  if ($type == "rating") {
    $mininumRateDescription = $questions[$i]["mininumRateDescription"];
    $maximumRateDescription = $questions[$i]["maximumRateDescription"];
  }
  if ($qrequired) { $add = " <sup>(*)</sup>\n"; }
  else { $add = ""; }
  $qout .= "<h4>" . $qname . ": " . $qtitle . $add . " <small>[" . $qtype . "]</small></h4>\n";

  foreach ($questions[$i]["choices"] as $k4 => $p4) {
    $choice_textA[] = $p4['text'];
    $choice_codeA[] = $p4['value'];
  }
  foreach ($questions[$i]["columns"] as $k5 => $p5) {
    $column_textB[] = $p5['text'];
    $column_codeB[] = $p5['value'];
  }
  foreach ($questions[$i]["rows"] as $k6 => $p6) {
    $row_text[] = $p6['text'];
    $row_code[] = $p6['value'];
  }
}


// Show data
$sql = "SELECT * FROM j_results WHERE surveyid = :surveyid AND status > 0 ORDER BY submitted DESC";
$q = $db->prepare($sql);
$q->bindValue(':surveyid', $surveyid, PDO::PARAM_INT);
$q->execute();
$totalrecords = $q->rowCount();
$r = $q->fetchAll(PDO::FETCH_ASSOC); //print_r($r);
//$qq = substr($show, -1); $qq = "Q".$qq; //echo $qq;
$qq = $show;

if (($qtype == "radiogroup") || ($qtype == "dropdown") || ($qtype == "rating")) {
  $dout = "";
  for ($i=0; $i < count($r); $i++) {
    $j = $r[$i]["data"];
    $j = json_decode($j, true); //print_r($j[$qq]);
    $k[] = $j[$qq]; //print_r($k);
  }
  $c = array_count_values($k); //print_r($c);
  if (json_decode(str_replace($choice_code, $choice_text, json_encode($c)), true)) { $c = json_decode(str_replace($choice_code, $choice_text, json_encode($c)), true); }
  // array_map(function ($v) use ($choice_code, $choice_text) { return $v == $value ? $replacement : $v; }, $c);

  // print_r($c);
  arsort($c);
  $totalresponses = array_sum($c);
  // foreach($c as &$hits) { $hits = round($hits / $totalresponses * 100, 1) . '%'; }
  $dout .= json_encode($c, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
  $doutA = array_keys($c); $doutB = (array_values($c) );
  $chartdata = "[ ";
  for ($m=0; $m < count($c); $m++) {
    if ($doutA[$m] == $choice_code) { $doutA[$m] == $choice_text; }
    if ($m != (count($c)-1)) { $chartdata .= "[ '".$doutA[$m]."', ".(($doutB[$m]/$totalrecords)*100)." ], "; }
    else { $chartdata .= "[ '".$doutA[$m]."', ".(($doutB[$m]/$totalrecords)*100)." ]"; }
  }
  $chartdata .= " ]";
}

else if ($qtype == "checkbox") {
  $dout = "";
  $k = array();
  for ($i=0; $i < count($r); $i++) {
    $j = $r[$i]["data"];
    $j = json_decode($j, true);
    foreach ($j[$qq] as $m => $v) {
      array_push($k, $v);
    }
  }
  $c = array_count_values($k); //print_r($c);
  $c = json_decode(str_replace($choice_code, $choice_text, json_encode($c)), true);
  arsort($c);
  $dout .= json_encode($c, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
  $doutA = array_keys($c); $doutB = (array_values($c)); //print_r($doutA); print_r($choice_code);
  $chartdata = "[ ";
  for ($m=0; $m < count($c); $m++) {
    if ($m != (count($c)-1)) { $chartdata .= "[ '".$doutA[$m]."', ".(($doutB[$m]/$totalrecords)*100)." ], "; }
    else { $chartdata .= "[ '".$doutA[$m]."', ".(($doutB[$m]/$totalrecords)*100)." ]"; }
    $nn[] = $doutB[$m];
    $totalresponses = array_sum($nn);
  }
  $chartdata .= " ]";
}

else if ($qtype == "matrix") {
  $dout = "";
  // print_r($questions);
  $j = "[";
  for ($i=0; $i < count($r); $i++) {
    // ; print_r($j);
    // print_r($r[$i]);

    // $j = json_decode($j, true);
    // $e = json_encode($j[$qq]);
    if ($i != (count($r)-1)) { $j .= $r[$i]["data"].","; }
    else { $j .= $r[$i]["data"]; }
  }
  $j .= "]";
  $k = array();
  $e = json_decode($j, true); //print_r($e);
  for ($i=0; $i < count($r); $i++) {
    $f = $e[$i][$qq];
    $label = array_keys($f);
    $R1[] = $f["R1"]; $R2[] = $f["R2"]; $R3[] = $f["R3"]; $R4[] = $f["R4"]; $R5[] = $f["R5"];
  }
  // print_r($R1);
  $ee1 = array_count_values($R1); ksort($ee1); list($xA1, $xA2, $xA3, $xA4, $xA5) = $ee1;
  $ee2 = array_count_values($R2); ksort($ee2); list($xB1, $xB2, $xB3, $xB4, $xB5) = $ee2;
  $ee3 = array_count_values($R3); ksort($ee3); list($xC1, $xC2, $xC3, $xC4, $xC5) = $ee3;
  $ee4 = array_count_values($R4); ksort($ee4); list($xD1, $xD2, $xD3, $xD4, $xD5) = $ee4;
  $ee5 = array_count_values($R5); ksort($ee5); list($xE1, $xE2, $xE3, $xE4, $xE5) = $ee5;

  if (empty($xA1)) { $xA1 = 0; } else if (empty($xA2)) { $xA2 = 0; } else if (empty($xA3)) { $xA3 = 0; } else if (empty($xA4)) { $xA4 = 0; } else if (empty($xA5)) { $xA5 = 0; }
  if (empty($xB1)) { $xB1 = 0; } else if (empty($xB2)) { $xB2 = 0; } else if (empty($xB3)) { $xB3 = 0; } else if (empty($xB4)) { $xB4 = 0; } else if (empty($xB5)) { $xB5 = 0; }
  if (empty($xC1)) { $xC1 = 0; } else if (empty($xC2)) { $xC2 = 0; } else if (empty($xC3)) { $xC3 = 0; } else if (empty($xC4)) { $xC4 = 0; } else if (empty($xC5)) { $xC5 = 0; }
  if (empty($xD1)) { $xD1 = 0; } else if (empty($xD2)) { $xD2 = 0; } else if (empty($xD3)) { $xD3 = 0; } else if (empty($xD4)) { $xD4 = 0; } else if (empty($xD5)) { $xD5 = 0; }
  if (empty($xE1)) { $xE1 = 0; } else if (empty($xE2)) { $xE2 = 0; } else if (empty($xE3)) { $xE3 = 0; } else if (empty($xE4)) { $xE4 = 0; } else if (empty($xE5)) { $xE5 = 0; }

  $SxA = $xA1 + $xA2 + $xA3 + $xA4 + $xA5; $xA1 = ($xA1/$SxA)*100; $xA2 = ($xA2/$SxA)*100; $xA3 = ($xA3/$SxA)*100; $xA4 = ($xA4/$SxA)*100; $xA5 = ($xA5/$SxA)*100;
  $SxB = $xB1 + $xB2 + $xB3 + $xB4 + $xB5; $xB1 = ($xB1/$SxB)*100; $xB2 = ($xB2/$SxB)*100; $xB3 = ($xB3/$SxB)*100; $xB4 = ($xB4/$SxB)*100; $xB5 = ($xB5/$SxB)*100;
  $SxC = $xC1 + $xC2 + $xC3 + $xC4 + $xC5; $xC1 = ($xC1/$SxC)*100; $xC2 = ($xC2/$SxC)*100; $xC3 = ($xC3/$SxC)*100; $xC4 = ($xC4/$SxC)*100; $xC5 = ($xC5/$SxC)*100;
  $SxD = $xD1 + $xD2 + $xD3 + $xD4 + $xD5; $xD1 = ($xD1/$SxD)*100; $xD2 = ($xD2/$SxD)*100; $xD3 = ($xD3/$SxD)*100; $xD4 = ($xD4/$SxD)*100; $xD5 = ($xD5/$SxD)*100;
  $SxE = $xE1 + $xE2 + $xE3 + $xE4 + $xE5; $xE1 = ($xE1/$SxE)*100; $xE2 = ($xE2/$SxE)*100; $xE3 = ($xE3/$SxE)*100; $xE4 = ($xE4/$SxE)*100; $xE5 = ($xE5/$SxE)*100;


  // $doutA = array_keys($c); $doutB = array_values($c);
  // $doutA = json_decode(str_replace($row_code, $row_text, json_encode($doutA)), true);


  $chartdata = "[ [";
  list($a1, $a2, $a3, $a4, $a5) = $column_textB;
  $chartdata .= "'".$a1."', '".$a2."', '".$a3."', '".$a4."', '".$a5."', ";
  $chartdata .= "{ role: 'annotation' } ], ";
  $chartdata .= "[ 'Z1', $xA1, $xA2, $xA3, $xA4, $xA5 ],";
  $chartdata .= "[ 'Z2', $xB1, $xB2, $xB3, $xB4, $xB5 ],";
  $chartdata .= "[ 'Z3', $xC1, $xC2, $xC3, $xC4, $xC5 ],";
  $chartdata .= "[ 'Z4', $xD1, $xD2, $xD3, $xD4, $xD5 ],";
  $chartdata .= "[ 'Z5', $xE1, $xE2, $xE3, $xE4, $xE5 ]";
  $chartdata .= "]";
  //       ['Like a lot', 'Quite like', 'So-so', 'Dislike', 'Dislike a lot', { role: 'annotation' } ],
  //       ['2010', 10, 24, 20, 32, 18],
  //       ['2020', 16, 22, 23, 30, 16],
  //       ['2030', 28, 19, 29, 30, 12]
  //     ]";
}

$sid = $_GET["s"]; $qid = $_GET["q"];
$qqr = substr($show, -1);
$banner = "<ul class=\"progress-tracker progress-tracker--text progress-tracker--center\">\n";
$numberofquestions = count($questions);
for ($i = 0; $i < $numberofquestions; $i++) {
  $qname1 = $questions[$i]["name"];
  $qtitle1 = $questions[$i]["title"];
  $qtype1 = $questions[$i]["type"];
  if ($qname1 == $_GET['q']) { $banner .= "<li class=\"progress-step is-active\">\n"; }
  else { $banner .= "<li class=\"progress-step\">\n"; }
  $banner .= "  <span class=\"progress-marker\"></span>\n";
  $banner .= "  <a href=\"/admin/?w=result&s=$sid&q=$qname1\"><span class=\"progress-text\">\n";
  $banner .= "    <span class=\"progress-title\">$qname1</span>\n";
  $banner .= "    $qtitle ($qtype1)\n";
  $banner .= "  </span></a>\n";
  $banner .= "</li>\n";
}
$banner .= "</ul>\n";


$title = "Survey result";
pageHeader($title);
echo "<h2>$title</h2>\n";
echo "<p>This is a quick uitlity to show survey result question by question. For each of the question, it shows the results in both tabulation and in chart if possible which hopefully will provide you a good indication of the learnings for your project.</p>\n";
echo "<p>Please note that results here are automatically generated by our system. And data is pulled out real time from our database. So, viewing results while the project is still on data collection period is strongly not recommended because results will tentatively change dramatically at all times.</p>\n";
echo "<p>There are still some question types where automatic charting is yet to be completed. If you prefer to see more details e.g. cross-tabulation, you would need to download data file and process the data traditional way.</p>\n";
echo "<hr>\n";
echo "<h3>Project $project</h3>\n";

echo "There are $numberofquestions questions as shown below:\n";
echo $banner;

$answers = "<p><em>A total of $totalresponses responses answered by $totalrecords respondents</em></p>\n";

if ($_GET["q"]) {

?>

<div class="row">
  <div class="col-sm-12">
    <?php echo $qout; ?>
    <?php echo $answers; ?>
  </div>
  <div class="col-sm-4 bg-warning">
    <h4>Data</h4>
    <table id="tabulation" class="table table-condensed table-hover">
      <thead>
        <tr class="bg-primary">
          <th>Answers</th>
          <th>Counts</th>
        </tr>
      </thead>
      <tbody>

      </tbody>
    </table>
  </div>
  <div class="col-sm-8 bg-info">
    <h4>Chart</h4>
    <div id="chart"></div>
  </div>
</div>

<?php
} else {

echo "<h4>Please click each of the above questions for viewing the results</h4>";

}
?>

<script type="text/javascript" src="https://www.google.com/jsapi"></script>
<script type="text/javascript">
  google.load('visualization', '1.0', {'packages':['corechart']});
  google.setOnLoadCallback(drawChart);
  function drawChart() {
<?php if (($qtype == "radiogroup") || ($qtype == "dropdown") || ($qtype == "rating")) { ?>
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows(<?php print_r($chartdata); ?>);
    var options = {'title':'<?php echo $qtitle; ?>','is3D':'true','width':'600','height':'600'};
    var chart = new google.visualization.PieChart(document.getElementById('chart'));
<?php } else if ($qtype == "checkbox") { ?>
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows(<?php print_r($chartdata); ?>);
    var options = {'title':'<?php echo $qtitle; ?>','is3D':'true','width':'600','height':'600',bar:{groupWidth: "95%"},legend:{position:"none"}};
    var chart = new google.visualization.BarChart(document.getElementById('chart'));
<?php } else if ($qtype == "matrix") { ?>
    var data = new google.visualization.arrayToDataTable(<?php print_r($chartdata); ?>);
    var options = {'title':'<?php echo $qtitle; ?>','isStacked':'percent','isStacked':'relative','width':'600','height':'600',bar:{groupWidth: "75%"},legend:{position:"top",maxLines:3},isStacked:true};
    var options_fullStacked = {isStacked:'percent',height:'600',legend:{position:'top',maxLines:3},hAxis:{minValue:0,ticks: [0,.25,.5,.75,1]}};
    var chart = new google.visualization.BarChart(document.getElementById('chart'));
<?php } ?>
    chart.draw(data, options);
    var csv = google.visualization.dataTableToCsv(data);
    console.log(csv);
  }

<?php if (($qtype == "radiogroup") || ($qtype == "dropdown") || ($qtype == "rating") || ($qtype == "checkbox")) { ?>
  var data = <?php echo $dout; ?>;
  for (var key in data) {
    var row = $('<tr><td>' + key + '</td><td>' + data[key] + '</td></tr>');
    $('#tabulation').append(row);
  }
<?php } else if ($qtype == "matrix") { ?>
  var data = <?php echo $ww; ?>;
  for (var key in data) {
    var row = $('<tr><td>' + key + '</td><td>' + data[key] + '</td></tr>');
    $('#tabulation').append(row);
  }
<?php } ?>
</script>

<br>

<a href="/admin/?w=surveys" class="btn btn-danger btn-sm pull-right" style="margin-top:50px; margin-bottom: 20px"><i class="pe-chevron-circle-left pe-fw"></i> Back to the main page</a>

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>