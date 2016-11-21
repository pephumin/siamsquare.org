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

  // Radiogroup, checkbox
  foreach ($questions[$i]["choices"] as $k4 => $p4) {
    $choice_text[] = $p4['text'];
    $choice_code[] = $p4['value'];
  }
  // Matrix
  foreach ($questions[$i]["columns"] as $k5 => $p5) {
    $column_text[] = $p5['text'];
    $column_code[] = $p5['value'];
  }
  // Matrix
  foreach ($questions[$i]["rows"] as $k6 => $p6) {
    $row_text[] = $p6['text'];
    $row_code[] = $p6['value'];
  }
}

// ------- Show data --------------------------------------------------------------------------

$sql = "SELECT * FROM j_results WHERE surveyid = :surveyid AND status > 0 ORDER BY submitted DESC";
$q = $db->prepare($sql);
$q->bindValue(':surveyid', $surveyid, PDO::PARAM_INT);
$q->execute();
$totalrecords = $q->rowCount();
$r = $q->fetchAll(PDO::FETCH_ASSOC);

$qq = $show;

if (($qtype == "radiogroup") || ($qtype == "dropdown") || ($qtype == "rating")) {
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
  if (json_decode(str_replace($choice_code, $choice_text, json_encode($c)), true)) { $c = json_decode(str_replace($choice_code, $choice_text, json_encode($c)), true); }
  // arsort($c);
  $totalresponses = array_sum($c);
  $A = array_keys($c); $B = array_values($c); //print_r($c);
  $C = count($c);
  $out = "";
  $out .= "    data.addRows($C);\n";
  for ($m=0; $m < count($c); $m++) {
    // if ($A[$m] == $choice_code[$m]) { $A[$m] == $choice_text[$m]; }
    $BB[$m] = number_format(($B[$m]/$totalrecords)*100, 2);
    $m1 = $m+1; $m2 = $m1+1;
    $out .= "    data.setCell($m, 0, '$A[$m]');\n";
    $out .= "    data.setCell($m, 1, $B[$m]);\n";
    $out .= "    data.setCell($m, 2, $BB[$m]);\n";
  }
  $me = "/admin/?w=result&s=".$_GET['s']."&q=".$_GET['q'];
  if ((empty($_GET['type'])) || ($_GET['type'] == "pie")) { $menu = "<p class=\"text-center\"><strong>Choose the chart type [</strong> <u>Pie</u> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=donut")."\">Donut</a> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=bar-H")."\">Bar Horizontal</a> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=bar-V")."\">Bar Vertical</a> ]</strong></p><br>\n"; }
  else if ($_GET['type'] == "donut") { $menu = "<p class=\"text-center\"><strong>Choose the chart type [</strong> <a href=\"".htmlspecialchars($me."&type=pie")."\">Pie</a> <strong>:</strong> <u>Donut</u> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=bar-H")."\">Bar Horizontal</a> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=bar-V")."\">Bar Vertical</a> ]</strong></p><br>\n"; }
  else if ($_GET['type'] == "bar-H") { $menu = "<p class=\"text-center\"><strong>Choose the chart type [</strong> <a href=\"".htmlspecialchars($me."&type=pie")."\">Pie</a> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=donut")."\">Donut</a> <strong>:</strong> <u>Bar Horizontal</u> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=bar-V")."\">Bar Vertical</a> ]</strong></p><br>\n"; }
  else if ($_GET['type'] == "bar-V") { $menu = "<p class=\"text-center\"><strong>Choose the chart type [</strong> <a href=\"".htmlspecialchars($me."&type=pie")."\">Pie</a> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=donut")."\">Donut</a> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=bar-H")."\">Bar Horizontal</a> <strong>:</strong> <u>Bar Vertical</u> ]</strong></p><br>\n"; }
}

else if ($qtype == "checkbox") {
  $k = array();
  for ($i=0; $i < count($r); $i++) {
    $j = $r[$i]["data"];
    $j = json_decode($j, true);
    foreach ($j[$qq] as $m => $v) {
      array_push($k, $v);
    }
  }
  $c = array_count_values($k); //print_r($c);
  if (json_decode(str_replace($choice_code, $choice_text, json_encode($c)), true)) { $c = json_decode(str_replace($choice_code, $choice_text, json_encode($c)), true); }
  // arsort($c);
  // print_r($c);
  $totalresponses = array_sum($c);
  $A = array_keys($c); $B = array_values($c); //print_r($c);
  $C = count($c);
  $out = "";
  $out .= "    data.addRows($C);\n";
  for ($m=0; $m < count($c); $m++) {
    // if ($A[$m] == $choice_code[$m]) { $A[$m] == $choice_text[$m]; }
    $BB[$m] = number_format(($B[$m]/$totalrecords)*100, 2);
    $m1 = $m+1; $m2 = $m1+1;
    $out .= "    data.setCell($m, 0, '$A[$m]');\n";
    $out .= "    data.setCell($m, 1, $B[$m]);\n";
    $out .= "    data.setCell($m, 2, $BB[$m]);\n";
  }
  $me = "/admin/?w=result&s=".$_GET['s']."&q=".$_GET['q'];
  if ((empty($_GET['type'])) || ($_GET['type'] == "bar-H")) { $menu = "<p class=\"text-center\"><strong>Choose the chart type [</strong> <u>Bar Horizontal</u> <strong>:</strong> <a href=\"".htmlspecialchars($me."&type=bar-V")."\">Bar Vertical</a> ]</strong></p><br>\n"; }
  else if ($_GET['type'] == "bar-V") { $menu = "<p class=\"text-center\"><strong>Choose the chart type [</strong> <a href=\"".htmlspecialchars($me."&type=bar-H")."\">Bar Horizontal</a> <strong>:</strong> <u>Bar Vertical</u> ]</strong></p><br>\n"; }
}

else if ($qtype == "comment") {
  $k = array();
  $out = "[ ";
  for ($i=0; $i < count($r); $i++) {
    $j = $r[$i]["data"];
    $j = json_decode($j, true);
    $out .= "['".$j[$qq]."'],";
    array_push($k, $j[$qq]);
  }
  $out .= " ]";
  $c = array_count_values($k); arsort($c); //print_r($c);
  $totalresponses = array_sum($c);
}

else if ($qtype == "file") {
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
    $outdirect = "<p class=\"text-center\"><strong>Choose the preview size [</strong> <u>small</u> <strong>:</strong> <a href=\"".htmlspecialchars($me."&size=M")."\">medium</a> <strong>:</strong> <a href=\"".htmlspecialchars($me."&size=L")."\">large</a> ]</strong></p><br>\n";
    $bb = 0;
    $outdirect .= "  <table>\n";
    $outdirect .= "    <tr>\n";
    foreach ($k as $A => $B) {
      if ($B) {
        $R = new resize('../members/assets/upload/full/'.$B);
        $R->resizeImage(180, 180, 'auto');
        $R->saveImage('../members/assets/upload/resized_S/'.$B, 80);
        $outdirect .= "      <td style=\"text-align:center\"><a href=\"/members/assets/upload/full/$B\" target=\"_blank\" title=\"Click to open a full size image in a new window\"><img src=\"/members/assets/upload/resized_S/$B\" class=\"img-thumbnail\"></a></td>\n";
        $bb++;
        if (($bb % 5 == 0) && ($bb > 0)) { $outdirect .= "    </tr><tr>\n"; }
      }
    }
    $outdirect .= "    </tr>\n";
    $outdirect .= "  </table>\n";
  } else if ($_GET['size'] == "M") {
    $outdirect = "<p class=\"text-center\"><strong>Choose the preview size [</strong> <a href=\"".htmlspecialchars($me."&size=S")."\">small</a> <strong>:</strong> <u>medium</u> <strong>:</strong> <a href=\"".htmlspecialchars($me."&size=L")."\">large</a> ]</strong></p><br>\n";
    $bb = 0;
    $outdirect .= "  <table>\n";
    $outdirect .= "    <tr>\n";
    foreach ($k as $A => $B) {
      if ($B) {
        $R = new resize('../members/assets/upload/full/'.$B);
        $R->resizeImage(300, 300, 'auto');
        $R->saveImage('../members/assets/upload/resized_M/'.$B, 80);
        $outdirect .= "      <td style=\"text-align:center\"><a href=\"/members/assets/upload/full/$B\" target=\"_blank\" title=\"Click to open a full size image in a new window\"><img src=\"/members/assets/upload/resized_M/$B\" class=\"img-thumbnail\"></a></td>\n";
        $bb++;
        if (($bb % 3 == 0) && ($bb > 0)) { $outdirect .= "    </tr><tr>\n"; }
      }
    }
    $outdirect .= "    </tr>\n";
    $outdirect .= "  </table>\n";
  } else if ($_GET['size'] == "L") {
    $outdirect = "<p class=\"text-center\"><strong>Choose the preview size [</strong> <a href=\"".htmlspecialchars($me."&size=S")."\">small</a> <strong>:</strong> <a href=\"".htmlspecialchars($me."&size=M")."\">medium</a> <strong>:</strong> <u>large</u> ]</strong></p><br>\n";
    $bb = 0;
    $outdirect .= "  <table>\n";
    $outdirect .= "    <tr>\n";
    foreach ($k as $A => $B) {
      if ($B) {
        $R = new resize('../members/assets/upload/full/'.$B);
        $R->resizeImage(450, 450, 'auto');
        $R->saveImage('../members/assets/upload/resized_L/'.$B, 80);
        $outdirect .= "      <td style=\"text-align:center\"><a href=\"/members/assets/upload/full/$B\" target=\"_blank\" title=\"Click to open a full size image in a new window\"><img src=\"/members/assets/upload/resized_L/$B\" class=\"img-thumbnail\"></a></td>\n";
        $bb++;
        if (($bb % 2 == 0) && ($bb > 0)) { $outdirect .= "    </tr><tr>\n"; }
      }
    }
    $outdirect .= "    </tr>\n";
    $outdirect .= "  </table>\n";
  } else {
    $bb = 0;
    $outdirect .= "  <table>\n";
    $outdirect .= "    <tr>\n";
    foreach ($k as $A => $B) {
      if ($B) {
        $R = new resize('../members/assets/upload/full/'.$B);
        $R->resizeImage(300, 300, 'auto');
        $R->saveImage('../members/assets/upload/resized_M/'.$B, 80);
        $outdirect .= "      <td style=\"text-align:center\"><a href=\"/members/assets/upload/full/$B\" target=\"_blank\" title=\"Click to open a full size image in a new window\"><img src=\"/members/assets/upload/resized_M/$B\" class=\"img-thumbnail\"></a></td>\n";
        $bb++;
        if (($bb % 3 == 0) && ($bb > 0)) { $outdirect .= "    </tr><tr>\n"; }
      }
    }
    $outdirect .= "    </tr>\n";
    $outdirect .= "  </table>\n";
  }
}

// ------- Questionnaire navigator --------------------------------------------------------------------------

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
  $banner .= "    $qtitle1 ($qtype1)\n";
  $banner .= "  </span></a>\n";
  $banner .= "</li>\n";
}
$banner .= "</ul>\n";

// ------- Output --------------------------------------------------------------------------

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

$openendquery = "<div style=\"text-align:right\">\n";
$openendquery .= "<p>Custom key words centering tool</p>\n";
$openendquery .= "<input id=\"root\" value=\"\" placeholder=\"Enter key words\">\n";
$openendquery .= "<input type=\"button\" id=\"go\" value=\"Generate\">\n";
$openendquery .= "</div>\n";

if ($_GET["q"]) {

?>

<div class="row">
  <div class="col-sm-12 bg-info" style="margin-bottom:40px">
    <?php echo $qout; ?>
    <?php echo $answers; ?>
  </div>
  <div class="col-sm-12">
<?php if ($qtype == "file") { echo $outdirect; } else { ?>
    <?php if ($qtype == "comment") { echo $openendquery; } ?>
    <?php echo $menu; ?>
    <p><small class="blue">You can sort the results by clicking the table's headers</small></p>
    <div id="table" style="width:300px"></div>
    <div id="chart"></div>
<?php } ?>
  </div>
</div>

<?php } else { echo "<h4>Please click each of the above questions for viewing the results</h4>"; } ?>


<!-- ############# Output for radiogroup, rating and dropdown (single answer) ############# -->

<?php if (($qtype == "radiogroup") || ($qtype == "rating") || ($qtype == "dropdown")) { ?>

<?php if ((empty($_GET['type'])) || ($_GET['type'] == "pie")) { ?>

  <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
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
      var options = { title: '<?php echo $qtitle; ?>', is3D: true, width: '100%', height: '400'};
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

  <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
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
      var options = { title: '<?php echo $qtitle; ?>', pieHole: 0.4, width: '100%', height: '400'};
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

  <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
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
      var options = { title: '<?php echo $qtitle; ?>', width: '100%', height: '400', bar: { groupWidth:  '95%' }, legend: { position: 'none' } };
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

  <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
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
      var options = { title: '<?php echo $qtitle; ?>', width: '100%', height: '400', bar: { groupWidth:  '95%' }, legend: { position: 'none' } };
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

<!-- ############# Output for checkbox (multiple answer) ############# -->

<?php } else if ($qtype == "checkbox") { ?>

<?php if ((empty($_GET['type'])) || ($_GET['type'] == "bar-H")) { ?>

  <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
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
      var options = { title: '<?php echo $qtitle; ?>', width: '100%', height: '400', bar: {groupWidth: '95%' }, legend: {position: 'none' } };
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

  <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
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
      var options = { title: '<?php echo $qtitle; ?>', width: '100%', height: '400', bar: { groupWidth: '95%' }, legend: { position: 'none' }, bars: 'horizontal' };
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

  <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
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
      var options = { title: '<?php echo $qtitle; ?>', width: '100%', height: '400', bar: { groupWidth:  '95%' }, legend: { position: 'none' } };
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

<!-- ############# Output for comment (open-end) ############# -->

<?php } else if ($qtype == "comment") { ?>

  <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
  <script type="text/javascript">
    google.charts.load('current', {packages:['wordtree']});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var data = google.visualization.arrayToDataTable(<?php print_r($out); ?>);
      var root = document.getElementById('root').value || '';
      if (root) { var options = { wordtree: { format: 'implicit', type: 'double', word: root }, title: '<?php echo $qtitle; ?>', width: '100%', height: '600' }; }
      else { var options = { wordtree: { format: 'implicit', type: 'suffix', word: root }, title: '<?php echo $qtitle; ?>', width: '100%', height: '600' }; }
      var chart = new google.visualization.WordTree(document.getElementById('chart'));
      chart.draw(data, options);
      document.getElementById('go').onclick = drawChart;
    }
  </script>

<?php } ?>

<br>

<a href="/admin/?w=surveys" class="btn btn-danger btn-sm pull-right" style="margin-top:50px; margin-bottom: 20px"><i class="pe-chevron-circle-left pe-fw"></i> Back to the main page</a>

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
