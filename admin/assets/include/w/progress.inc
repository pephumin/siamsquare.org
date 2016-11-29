<?php

require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/config.php';
$db = new PDO('mysql:host='. DB_HOST .';dbname='. DB_DATABASE . ';charset=utf8', DB_USER, DB_PASS);

// Get projcet title
$sql1 = "SELECT title FROM j_projects WHERE id = :surveyid";
$q = $db->prepare($sql1);
$q->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
$q->execute();
while ($row = $q->fetchObject()) { $project = $row->title; }

// Get counts
$sql2 = "SELECT SUM(IF(status = :S1, 1, 0)) AS S1, SUM(IF(status = :S2, 1, 0)) AS S2, SUM(IF(status = :S3, 1, 0)) AS S3 FROM j_results WHERE surveyid = :surveyid ";
$q = $db->prepare($sql2);
$q->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
$q->bindValue(':S1', '1', PDO::PARAM_INT);
$q->bindValue(':S2', '0', PDO::PARAM_INT);
$q->bindValue(':S3', '-1', PDO::PARAM_INT);
$q->execute();
while ($row = $q->fetchObject()) {
  $responses_good = $row->S1;
  $responses_test = $row->S2;
  $responses_deleted = $row->S3;
  $responses_total = $responses_good + $responses_test + $responses_deleted;
}

$stat = "<dl class=\"dl-horizontal\">\n";
$stat .= "  <dt>Total response:</dt>\n";
$stat .= "  <dd>$responses_total</dd>\n";

if ($responses_good > 0) {
  $percentage_good = percent($responses_good / $responses_total);
  // Get result stats (first & last)
  $sql3 = "SELECT * FROM j_results WHERE id IN ((SELECT min(id) FROM j_results WHERE surveyid = :surveyid AND status = 1), (SELECT max(id) FROM j_results WHERE surveyid = :surveyid AND status = 1)) ";
  $q = $db->prepare($sql3);
  $q->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
  $q->execute(); // print_r($q->rowCount());
  while ($row = $q->fetchAll(PDO::FETCH_ASSOC)) {
    $first_id = $row[0]['id;'];
    $first_email = $row[0]['email'];
    $first_ip = $row[0]['ip'];
    $t1 = date_parse_from_format("Y-m-d H:i:s", $row[0]['submitted']); $t1['month'] = $t1['month']-1;
    // $t1['year']; $t1['month']; $t1['day'];
    $first_submitted = ago($row[0]['submitted']);
    $last_id = $row[1]['id'];
    $last_email = $row[1]['email'];
    $last_ip = $row[1]['ip'];
    $t2 = date_parse_from_format("Y-m-d H:i:s", $row[1]['submitted']); $t2['month'] = $t2['month']-1;
    // $t2['year']; $t2['month']; $t2['day'];
    $last_submitted = ago($row[1]['submitted']);
  }
  if ($responses_good == 1) {
    $stat .= "  <dt>Valid response:</dt>\n";
    $stat .= "  <dd>$responses_good ($percentage_good)</dd>\n";
    $stat .= "  <dt>First response:</dt>\n";
    $stat .= "  <dd>$first_submitted by $first_email <small>(from $first_ip)</small></dd>\n";
    $stat .= "  <dt>Last response:</dt>\n";
    $stat .= "  <dd><em>NONE</em></dd>\n";
  } else {
    $stat .= "  <dt>Valid response:</dt>\n";
    $stat .= "  <dd>$responses_good ($percentage_good)</dd>\n";
    $stat .= "  <dt>First response:</dt>\n";
    $stat .= "  <dd>$first_submitted by $first_email <small>(from $first_ip)</small></dd>\n";
    $stat .= "  <dt>Last response:</dt>\n";
    $stat .= "  <dd>$last_submitted by $last_email <small>(from $last_ip)</small></dd>\n";
  }
} else {
  $stat .= "  <dt>Valid response:</dt>\n";
  $stat .= "  <dd><em>NONE</em></dd>\n";
  $stat .= "  <dt>First response:</dt>\n";
  $stat .= "  <dd><em>NONE</em></dd>\n";
  $stat .= "  <dt>Last response:</dt>\n";
  $stat .= "  <dd><em>NONE</em></dd>\n";
}
$stat .= "</dl>\n";


$title = "Job progress";
pageHeader($title);
echo "<h2>$title</h2>";
echo "<p>This page gives a real time update on the project especially on the progress of data collection.</p>";
echo "<p>Ideally one would want to have the progress reaching to 100%, however it is also acceptable that a decision to stop before the full scale is shown especially when a business decision has to be made sooner rather than later.</p>";
echo "<p>The target set in this page is either an estimation of industry average or an indication has been agreed prior to starting the data collection.</p>";
echo "<hr>\n";
echo "<h3>Project $project</h3>\n";

?>

<h4>Original project timeline</h4>
<?php echo $stat; ?>

<div id="timeline"></div>

<h4>Update project status</h4>

<hr>

<div class="row">
  <div class="col-sm-6">
    <h4>If public survey</h4>
    <li>How many respondents this survey can target?
    <li>How many respondents have been emailed? (email when?)
    <li>How many respondents have conducted the survey? (starting from when until now - how many days?)
    <li>How many more do we still need? (when will the survey plan to end - how many days left?) decision for email reminder or more list needed?
  </div>
  <div class="col-sm-6">
    <h4>If private survey</h4>
    <li>How many respondents in the upload list in total? (upload when?)
    <li>How many respondents have been emailed? (email when?)
    <li>How many respondents have conducted the survey? (starting from when until now - how many days?)
    <li>How many more do we still need? (when will the survey plan to end - how many days left?) decision for email reminder or more list needed?
  </div>
</div>



<h4>For syndicate and tracking study</h4>

<div id="calendar"></div>

<hr>


<script type="text/javascript">
  google.charts.load('current', {'packages': ['calendar', ['timeline']] });
  google.charts.setOnLoadCallback(drawCalendarChart);
  google.charts.setOnLoadCallback(drawTimelineChart);

  function drawCalendarChart() {
    var dataTable = new google.visualization.DataTable();
      dataTable.addColumn({ type: 'date', id: 'Date' });
      dataTable.addColumn({ type: 'number', id: 'Respondents who have completed the survey' });
      dataTable.addRows([
        [ new Date(2017, 1, 13), 1 ],
        [ new Date(2017, 1, 14), 24 ],
        [ new Date(2017, 1, 15), 25 ],
        [ new Date(2017, 1, 16), 28 ],
        [ new Date(2017, 1, 17), 38 ],
        [ new Date(2017, 1, 19), 73 ],
        [ new Date(2017, 1, 20), 87 ],
        [ new Date(2017, 1, 21), 113 ],
        [ new Date(2017, 1, 22), 129 ],
        [ new Date(2017, 1, 23), 133 ],
        [ new Date(2017, 1, 24), 145 ],
        [ new Date(2017, 1, 25), 166 ],
        [ new Date(2017, 1, 26), 172 ],
        [ new Date(2017, 1, 27), 185 ],
        [ new Date(2017, 1, 28), 196 ],
        [ new Date(2017, 1, 29), 204 ],
    ]);
    var chart = new google.visualization.Calendar(document.getElementById('calendar'));
    var options = {
      height: 350,
      calendar: {
        cellSize: 15,
        focusedCellColor: { stroke: '#d3362d', strokeOpacity: 1, strokeWidth: 1 },
        dayOfWeekLabel: { fontName: 'Times-Roman', fontSize: 12, color: '#1a8763', bold: true, italic: true },
        dayOfWeekRightSpace: 10,
        monthLabel: { fontName: 'roboto', fontSize: 11, bold: true, italic: true },
        monthOutlineColor: { stroke: '#981b48', strokeOpacity: 0.8, strokeWidth: 2 },
        underYearSpace: 20,
        yearLabel: { fontName: 'roboto', fontSize: 32, color: '#1A8763', bold: true, italic: true }
      }
    };
    chart.draw(dataTable, options);
  }

  function drawTimelineChart() {
    var container = document.getElementById('timeline');
    var chart = new google.visualization.Timeline(container);
    var dataTable = new google.visualization.DataTable();
    dataTable.addColumn({ type: 'string', id: 'Term' });
    dataTable.addColumn({ type: 'string', id: 'Name' });
    dataTable.addColumn({ type: 'date', id: 'Start' });
    dataTable.addColumn({ type: 'date', id: 'End' });
    dataTable.addRows([
      [ '1', 'Project setup',   new Date(2016, 10, 13), new Date(2016, 10, 17) ],
      [ '2', 'Data collection', new Date(2016, 10, 16), new Date(2016, 10, 18) ],
      [ '3', 'Data collection (actual)', new Date(<?php echo $t1['year']; ?>, <?php echo $t1['month']; ?>, <?php echo $t1['day']; ?>), new Date(<?php echo $t2['year']; ?>, <?php echo $t2['month']; ?>, <?php echo $t2['day']; ?>) ],
      [ '4', 'Result delivery', new Date(2016, 10, 18), new Date(2016, 10, 19) ],
    ]);
    var options = {
      height: 220, // 100, 140, 180, 220, 260 ,300
      // colors: ['#cbb69d', '#603913', '#c69c6e'],
      // backgroundColor: '#eee  ',
      // avoidOverlappingGridLines: false,
      timeline: {
        // showRowLabels: false,
        // groupByRowLabel: false,
        // colorByRowLabel: true,
        // singleColor: '#8d8',
        // rowLabelStyle: { fontName: 'Helvetica', fontSize: 24, color: '#603913' },
        // barLabelStyle: { fontName: 'museo', fontSize: 15 },
      }
    };
    chart.draw(dataTable, options);
  }

</script>


<br>

<a href="/admin/?w=surveys" class="btn btn-danger btn-sm pull-right" style="margin-top:50px; margin-bottom: 20px"><i class="pe-chevron-circle-left pe-fw"></i> Back to the main page</a>

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
