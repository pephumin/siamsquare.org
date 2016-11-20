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
  $responses_good = $row->S1; //echo $responses_good;
  $responses_test = $row->S2; //echo $responses_test;
  $responses_deleted = $row->S3; //echo $responses_deleted;
}
$responses_total = $responses_good + $responses_test + $responses_deleted;
$percentage_good = ($responses_good * 100) / $responses_total;

// Get result stats (first)
$sql3 = "SELECT id, email, ip, submitted FROM j_results WHERE surveyid = :surveyid AND status = 1 ORDER BY submitted LIMIT 1";
$q = $db->prepare($sql3);
$q->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
$q->execute();
while ($row = $q->fetchObject()) {
  $first_id = $row->id;
  $first_email = $row->email;
  $first_ip = $row->ip;
  $first_submitted = $row->submitted;
}

$title = "Job progress";
pageHeader($title);
echo "<h2>$title</h2>";
echo "<p>This page gives a real time update on the project especially on the progress of data collection.</p>";
echo "<p>Ideally one would want to have the progress reaching to 100%, however it is also acceptable that a decision to stop before the full scale is shown especially when a business decision has to be made sooner rather than later.</p>";
echo "<p>The target set in this page is either an estimation of industry average or an indication has been agreed prior to starting the data collection.</p>";
echo "<hr>\n";
echo "<h3>Project $project</h3>\n";
?>

<div class="stats">
  <dl class="dl-horizontal">
    <dt>Total response:</dt>
    <dd><?php echo $responses_total; ?></dd>
    <dt>Valid response:</dt>
    <dd><?php echo $responses_good; ?> (<?php echo $percentage_good; ?>%)</dd>
    <dt>First response:</dt>
    <dd><?php echo ago($first_submitted); ?> by <?php echo $first_email; ?> (<?php echo $first_ip; ?>)</dd>
    <dt>Last response:</dt>
    <dd><?php echo ago($last_submitted); ?> by <?php echo $last_email; ?> (<?php echo $last_ip; ?>)</dd>
  </dl>
</div>

<hr>


graph showing รูปปรอท

<br>

<a href="/admin/?w=surveys" class="btn btn-danger btn-sm pull-right" style="margin-top:50px; margin-bottom: 20px"><i class="pe-chevron-circle-left pe-fw"></i> Back to the main page</a>

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
