<?php

$base = "/admin/?w=respondents&s=".$_GET['s'];
$linkinvitation = "/admin/?w=mailinvite&s=".$_GET['s'];
$linkreminder = "/admin/?w=mailremind&s=".$_GET['s'];

// if ($p == '') { $p = "1"; }
if ($_GET['p']) { $p = $_GET['p']; $ex1 = "&p=".$_GET['p']; } else { $ex1 = ""; }
if ($_GET['size']) { $size = $_GET['size']; $ex2 = "&size=".$_GET['size']; } else { $ex2 = ""; }
$me = $base.$ex1.$ex2;

// if ($_GET['p']) { $p = $_GET['p']; $me = $base."&p=".$_GET['p']; }
// if ($p == '') { $p = "1"; }

$help = "<div class=\"alert alert-info alert-dismissible\" role=\"alert\"><a class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>\n";
$help .= "  <h4><i class=\"pe-lightbulb-o pe-fw pe-lg\"></i> What is CSV file and how to create one</h4>\n";
$help .= "  <p>A <strong>CSV</strong> file is a <em>comma separated values</em> file, which allows data to be saved in a table structured format. CSVs look like a garden-variety spreadsheet but with a <strong>.csv extension</strong>. Traditionally they take the form of a text file containing information separated by commas, hence the name.</p>\n";
$help .= "  <p>CSV files can be used with any spreadsheet program, such as Microsoft Excel, Open Office Calc, or Google Spreadsheets. They differ from other spreadsheet file types in that you can only have a single sheet in a file, they can not save cell, column, or row styling, and can not save formulas.</p>\n";
$help .= "  <p>To create a CSV file, it is as simple as below instructions:</p>\n";
$help .= "  <ul class=\"pe-ul\">\n";
$help .= "    <li><i class=\"pe-li pe-check-square\"></i> Create a new Microsoft Excel file</li>\n";
$help .= "    <li><i class=\"pe-li pe-check-square\"></i> Ideally the content of this file should have all emails in the very first column (Column A) by listing only one email per each row. However, our system also allows having email in other column apart from Column A, and this will be needed to specify clearly when uploading the list</li>\n";
$help .= "    <li><i class=\"pe-li pe-check-square\"></i> If you copy the list of emails from somewhere else, it is okay to leave other non-related content in the file as it makes absolutely no impact to the process. Our system will handle that by only selecting emails from the content for you.</li>\n";
$help .= "    <li><i class=\"pe-li pe-check-square\"></i> Save the file by choosing <strong>Save As</strong> and then choose CSV format.</li>\n";
$help .= "  </ul>\n";
$help .= "</div>\n";

$golden = "<div class=\"alert alert-warning alert-dismissible\" role=\"alert\"><a class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>\n";
$golden .= "  <p>There are some golden rules for managing respodents as follows.</p>\n";
$golden .= "  <ul class=\"pe-ul\">\n";
$golden .= "    <li><i class=\"pe-li pe-check-square\"></i> Adding respondents can be done by two methds: upload the name list or manually add them in a batch of 5 emails.</li>\n";
$golden .= "    <li><i class=\"pe-li pe-check-square\"></i> Our system will automatically detect any errors in email as well as duplication. And we also provide you a tool to help cleaning these errors with only one click.</li>\n";
$golden .= "    <li><i class=\"pe-li pe-check-square\"></i> Deleting respondents is possible and it will only apply with those who have never been sent with an invitation as this directly impacts to the strike rate calculation.</li>\n";
$golden .= "  </ul>\n";
$golden .= "</div>\n";

// Get projcet title
$q1 = $db->prepare("SELECT title, status FROM j_projects WHERE id = :surveyid");
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
while ($row = $q1->fetchObject()) { $project = $row->title; $pstatus = $row->status; }
if ($_SESSION['level'] != "9") {
  if ($pstatus == 0 || $pstatus == 4) {
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
} else if ($pstatus == 3) { $showlink = 3; }
// echo $showlink;

if ($_POST['uploading'] == 1) {
  if (empty($_POST['surveyid'])) { echo "Cannot proceed without a surveyid"; }
  else if (is_uploaded_file($_FILES['csvfilename']['tmp_name'])) {
    $fieldseparator = ",";
    $lineseparator = "\n";
    $uploaddir = "/www/default/siamsquare.org/admin/assets/upload/".$_POST['surveyid']."/";
    if(!is_dir($uploaddir)){ mkdir($uploaddir); }
    $uploadfile = $uploaddir.basename($_FILES['csvfilename']['name']);
    $rewritefile = $uploaddir."N-".basename($_FILES['csvfilename']['name']);
    move_uploaded_file($_FILES['csvfilename']['tmp_name'], $uploadfile);
    $input = fopen($uploadfile, 'r'); $output = fopen($rewritefile, 'w');
    while (($data = fgetcsv($input, 1000, ",")) !== FALSE) {
      $e0 = $_POST['colemail']-1; $e1 = $_POST['surveyid'];
      $data[$e0] = trim(strtolower($data[$e0]));
      $data[$e0] = str_replace(' ', '', $data[$e0]);
      $e2 = generateRandomString(13);
      $e3 = $_SESSION['userid'];
      if (filter_var($data[$e0], FILTER_VALIDATE_EMAIL)) { $newdata = "".$fieldseparator.$data[$e0].$fieldseparator.$e2.$fieldseparator."1".$fieldseparator.$e1.$fieldseparator.$e3.$fieldseparator.$lineseparator; }
      else { $newdata = "".$fieldseparator.$data[$e0].$fieldseparator.$e2.$fieldseparator."0".$fieldseparator.$e1.$fieldseparator.$e3.$fieldseparator.$lineseparator; }
      fwrite($output, $newdata);
    }
    fclose($input);
    fclose($output);
    $qm1 = $db->prepare("CREATE TABLE tmp LIKE j_respondents");
    $qm1->execute();
    try { $db = new PDO('mysql:host='. DB_HOST .';dbname='. DB_DATABASE . ';charset=utf8', DB_USER, DB_PASS, array(PDO::MYSQL_ATTR_LOCAL_INFILE => true, PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION)); }
    catch (PDOException $e) { die("database connection failed: ".$e->getMessage()); }
    $affectedRows = $db->exec("LOAD DATA LOCAL INFILE ".$db->quote($rewritefile)." INTO TABLE tmp FIELDS TERMINATED BY ".$db->quote($fieldseparator)." LINES TERMINATED BY ".$db->quote($lineseparator));
    $qm2 = $db->prepare("INSERT INTO j_respondents (email, password, status, surveyid, created) SELECT email, password, status, surveyid, created FROM tmp");
    $qm2->execute();
    $qm3 = $db->prepare("DROP TABLE tmp");
    $qm3->execute();
    $ql1 = $db->prepare("INSERT INTO j_users_logs (surveyid, userid, ip, data, critical) VALUE (:surveyid, :userid, :ip, '".$_SESSION['email']." uploaded a name list of respondents for $project', '3')");
    $ql1->bindValue(':surveyid', $_GET['s'], PDO::PARAM_INT);
    $ql1->bindValue(':userid', $_SESSION['userid'], PDO::PARAM_INT);
    $ql1->bindValue(':ip', $_SESSION['ip'], PDO::PARAM_STR);
    $ql1->execute();
  }
  $redirect = $base."&m=1";
  header("location: $redirect");
  exit;
} else if ($_POST['adding'] == 1) {
  if (empty($_POST['addemail'])) { echo "Cannot proceed without any emails"; }
  for ($i=0; $i<count($_POST['addemail']); $i++) {
    if (!empty($_POST['addemail'][$i])) {
      $e4 = generateRandomString(13);
      $q2D = $db->prepare("INSERT INTO j_respondents (email, password, status, surveyid) VALUE (:email, :password, 1, :surveyid)");
      $q2D->bindValue(':email', $_POST['addemail'][$i], PDO::PARAM_STR);
      $q2D->bindValue(':password', $e4, PDO::PARAM_STR);
      $q2D->bindValue(':surveyid', $_POST['surveyid'], PDO::PARAM_INT);
      $q2D->execute();
    }
  }
  $ql5 = $db->prepare("INSERT INTO j_users_logs (surveyid, userid, ip, data, critical) VALUE (:surveyid, :userid, :ip, '".$_SESSION['email']." manually added respondents for $project', '3')");
  $ql5->bindValue(':surveyid', $_GET['s'], PDO::PARAM_INT);
  $ql5->bindValue(':userid', $_SESSION['userid'], PDO::PARAM_INT);
  $ql5->bindValue(':ip', $_SESSION['ip'], PDO::PARAM_STR);
  $ql5->execute();
  $redirect = $base."&m=2";
  header("location: $redirect");
  exit;
} else if ($_POST['m'] == "fixerrors") {
  $q2A = $db->prepare("DELETE FROM j_respondents WHERE surveyid = 0 OR surveyid = :surveyid AND status = 0");
  $q2A->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
  $q2A->execute();
  $ql2 = $db->prepare("INSERT INTO j_users_logs (surveyid, userid, ip, data, critical) VALUE (:surveyid, :userid, :ip, '".$_SESSION['email']." deleted respondents with email error for $project', '3')");
  $ql2->bindValue(':surveyid', $_GET['s'], PDO::PARAM_INT);
  $ql2->bindValue(':userid', $_SESSION['userid'], PDO::PARAM_INT);
  $ql2->bindValue(':ip', $_SESSION['ip'], PDO::PARAM_STR);
  $ql2->execute();
  $redirect = $base."&m=3";
  header("location: $redirect");
  exit;
} else if ($_POST['m'] == "fixduplicates") {
  $q2B1 = $db->prepare("CREATE TABLE tmp SELECT * FROM j_respondents WHERE surveyid = :surveyid GROUP BY email");
  $q2B1->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
  $q2B1->execute();
  $q2B2 = $db->prepare("DELETE FROM j_respondents WHERE surveyid = :surveyid");
  $q2B2->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
  $q2B2->execute();
  $q2B3 = $db->prepare("INSERT INTO j_respondents SELECT * FROM tmp");
  $q2B3->execute();
  $q2B4 = $db->prepare("DROP TABLE tmp");
  $q2B4->execute();
  $ql3 = $db->prepare("INSERT INTO j_users_logs (surveyid, userid, ip, data, critical) VALUE (:surveyid, :userid, :ip, '".$_SESSION['email']." deleted respondents with duplicated email for $project', '3')");
  $ql3->bindValue(':surveyid', $_GET['s'], PDO::PARAM_INT);
  $ql3->bindValue(':userid', $_SESSION['userid'], PDO::PARAM_INT);
  $ql3->bindValue(':ip', $_SESSION['ip'], PDO::PARAM_STR);
  $ql3->execute();
  $redirect = $base."&m=4";
  header("location: $redirect");
  exit;
} else if ($_POST['m'] == "delthis") {
  $ids = implode(",", $_POST['checkbox']);
  $q2C = $db->prepare("DELETE FROM j_respondents WHERE surveyid = :surveyid AND id IN ($ids)");
  $q2C->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
  $q2C->execute();
  $ql4 = $db->prepare("INSERT INTO j_users_logs (surveyid, userid, ip, data, critical) VALUE (:surveyid, :userid, :ip, '".$_SESSION['email']." manually deleted respondents for $project', '3')");
  $ql4->bindValue(':surveyid', $_GET['s'], PDO::PARAM_INT);
  $ql4->bindValue(':userid', $_SESSION['userid'], PDO::PARAM_INT);
  $ql4->bindValue(':ip', $_SESSION['ip'], PDO::PARAM_STR);
  $ql4->execute();
  $redirect = $base."&m=5";
  header("location: $redirect");
  exit;
}

$title = "Manage respondents";
pageHeader($title);
echo "<h2>$title</h2>";
echo "<p>Given a nature of any private surveys where respondents are specific to the project, we provide you with a tool that helps you manage your respondents with ease.</p>\n";
echo "<p>This includes the actual respondent management such as upload/ add emails to the system, clean note this page is mainly for managing respondents, if you want to check for participation rate, kindly use the project status instead.</p>\n";
echo "<p>Please see table below for more information about these respodnents. And of course, you can always use the upload function to add more respondents to the project if need.</p>\n";
echo $golden;
echo "<br>\n";
echo "<h3>Project $project</h3>\n";


// Get status
$q2B = $db->prepare("SELECT COUNT(*) as q2A1, SUM(status='0') AS q2A2, SUM(IF(invitation IS NOT NULL, 1, 0)) AS q2B1, SUM(IF(invitation IS NULL, 1, 0)) AS q2B2, SUM(IF(invitation IS NOT NULL AND participation IS NOT NULL, 1, 0)) AS q2B3, SUM(IF(invitation IS NOT NULL AND participation IS NULL, 1, 0)) AS q2B4 FROM j_respondents WHERE surveyid = :surveyid");
$q2B->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
$q2B->execute();
while ($row = $q2B->fetchObject()) {
  $all = $row->q2A1;
  $uncleaned = $row->q2A2;
  $invited = $row->q2B1;
  $notinvited = $row->q2B2;
  $participated = $row->q2B3;
  $notparticipated = $row->q2B4;
}

if ($all == 0) { $invited = 0; $notinvited = 0; $participated = 0; $notparticipated = 0; }
else if ($invited == 0) { $participated = 0; $notparticipated = 0; }

$all_format = number_format($all);
$uncleaned_format = number_format($uncleaned);
$invited_format = number_format($invited);
$notinvited_format = number_format($notinvited);
$participated_format = number_format($participated);
$notparticipated_format = number_format($notparticipated);

$all_bar = "<div class=\"progress\"><div class=\"progress-bar progress-bar-striped\" role=\"progressbar\" aria-valuenow=\"100%\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"min-width:2em; width:100%\">100%</div></div>";

$invited_percent = percent($invited / $all);
if ($invited) { $invited_bar = "<div class=\"progress\"><div class=\"progress-bar progress-bar-striped\" role=\"progressbar\" aria-valuenow=\"$invited_percent\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"min-width:2em; width:$invited_percent\">$invited_percent</div></div>"; } else { $invited_bar = "<div class=\"progress\"></div>"; }
$notinvited_percent = percent($notinvited / $all);
if ($notinvited) { $notinvited_bar = "<div class=\"progress\"><div class=\"progress-bar progress-bar-striped\" role=\"progressbar\" aria-valuenow=\"$notinvited_percent\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"min-width:2em; width:$notinvited_percent\">$notinvited_percent</div></div>"; } else { $notinvited_bar = "<div class=\"progress\"></div>"; }
$participated_percent = percent($participated / $all);
if ($participated) { $participated_bar = "<div class=\"progress\"><div class=\"progress-bar progress-bar-striped\" role=\"progressbar\" aria-valuenow=\"$participated_percent\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"min-width:2em; width:$participated_percent\">$participated_percent</div></div>"; } else { $participated_bar = "<div class=\"progress\"></div>"; }
$notparticipated_percent = percent($notparticipated / $all);
if ($notparticipated) { $notparticipated_bar = "<div class=\"progress\"><div class=\"progress-bar progress-bar-striped\" role=\"progressbar\" aria-valuenow=\"$notparticipated_percent\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"min-width:2em; width:$notparticipated_percent\">$notparticipated_percent</div></div>"; } else { $notparticipated_bar = "<div class=\"progress\"></div>"; }

$strikerate = number_format(($participated / $invited) * 100, 1);

// echo "<div class=\"row\">\n";
// echo "  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n";
// echo "    <p>This project currently has <strong>no respondent</strong> stored in the database.</p>\n";
// echo "    <p>Please upload respondent's emails using a Comma Separated Value (CSV) file and our system will enable the email function allowing you to send invitation / reminder to respondents accordingly.</p>\n";
// echo "    <p></p>\n";
// echo "    <div id=\"gaugechart\" style=\"display:none\"></div><div id=\"orgchart\" style=\"display:none\"></div>\n";
// echo "  </div>\n";
// echo "</div>\n";
// echo "<br>\n";

if ($all == 0) {
  echo "<div class=\"row\">\n";
  echo "  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n";
  echo "    <p>This project currently has <strong>no respondent</strong> stored in the database.</p>\n";
  echo "    <p>Please upload respondent's emails using a Comma Separated Value (CSV) file and our system will enable the email function allowing you to send invitation / reminder to respondents accordingly.</p>\n";
  echo "    <p></p>\n";
  echo "    <div id=\"gaugechart\" style=\"display:none\"></div><div id=\"orgchart\" style=\"display:none\"></div>\n";
  echo "  </div>\n";
  echo "</div>\n";
  echo "<br>\n";
} else {
  if (!empty($uncleaned)) { $text .= "<p>This project currently has a total of <strong>$all_format <em class=\"red\">uncleaned</em> respondents</strong> in the database.</p>\n"; }
  else { $text .= "<p>This project currently has a total of <strong>$all_format respondents</strong> in the database.</p>\n"; }
  if ($invited == 0) { $text .= "<p><strong>None of them</strong> has been invited resulting to <strong>zero participation</strong> and <strong>zero strike rate</strong> <em>(participation vs. invitation)</em>.</p>\n"; }
  else { $text .= "<p><strong>$invited_format respondents</strong> have been invited and <strong>$participated_format respondents</strong> have participated resulting to a strike rate of <strong>$strikerate%</strong> <em>(participation vs. invitation)</em>.</p>\n"; }
  $text .= "<div id=\"gaugechart\"></div>\n";
  $menu0 = "<div class=\"row\">\n";
  $menu0 .= "  <div class=\"col-xs-12 col-sm-8 col-md-8 col-lg-8\">\n";
  $menu0 .= "    <div id=\"orgchart\"></div>\n";
  $menu0 .= "  </div>\n";
  $menu0 .= "  <div class=\"col-xs-12 col-sm-4 col-md-4 col-lg-4\">\n";
  $menu0 .= "    $text\n";
  $menu0 .= "  </div>\n";
  $menu0 .= "</div>\n";
  $menu0 .= "<br>\n";
  $menu0 .= "<script type=\"text/javascript\">\n";
  $menu0 .= "  google.charts.load('current', { 'packages': ['orgchart', 'gauge'] });\n";
  $menu0 .= "  google.charts.setOnLoadCallback(drawOrgChart);\n";
  $menu0 .= "  google.charts.setOnLoadCallback(drawGaugeChart);\n";
  $menu0 .= "  function drawOrgChart() {\n";
  $menu0 .= "    var chart = new google.visualization.OrgChart(document.getElementById('orgchart'));\n";
  $menu0 .= "    var dataTable = new google.visualization.DataTable();\n";
  $menu0 .= "    dataTable.addColumn('string', 'Status');\n";
  $menu0 .= "    dataTable.addColumn('string', 'Sample');\n";
  $menu0 .= "    dataTable.addColumn('string', 'ToolTip');\n";
  $menu0 .= "    dataTable.addRows([\n";
  $menu0 .= "      [{ v:'Total', f:'<div class=\"small\">Total</div><div style=\"font-size:1.5rem\">n=".$all_format."</div>$all_bar' }, '', 'Total respondents (The target Universe)' ],\n";
  $menu0 .= "      [{ v:'Invited', f:'<div class=\"small\">Invited</div><div style=\"font-size:1.5rem\">n=".$invited_format."</div>$invited_bar' }, 'Total', 'Those who have been invited' ],\n";
  $menu0 .= "      [{ v:'Not invited', f:'<div class=\"small\">Not invited</div><div style=\"font-size:1.5rem\">n=".$notinvited_format."</div>$notinvited_bar' }, 'Total', 'Those who have not been invited' ],\n";
  $menu0 .= "      [{ v:'Participated', f:'<div class=\"small\">Participated</div><div style=\"font-size:1.5rem\">n=".$participated_format."</div>$participated_bar' }, 'Invited', 'Those who have participated in this project' ],\n";
  $menu0 .= "      [{ v:'Not participated', f:'<div class=\"small\">Not participated</div><div style=\"font-size:1.5rem\">n=".$notparticipated_format."</div>$notparticipated_bar' }, 'Invited', 'Those who have not participated in this study' ],\n";
  $menu0 .= "    ]);\n";
  // if ($all == 0) { $menu0 .= "    dataTable.setRowProperty(0, 'style', 'background: #f2dede; border: 3px solid red');\n"; }
  // if ($invited == 0) { $menu0 .= "    dataTable.setRowProperty(1, 'style', 'background: #f2dede; border: 3px solid red');\n"; }
  if ($notinvited == 0) { $menu0 .= "    dataTable.setRowProperty(2, 'style', 'background: #f2dede; border: 3px solid red');\n"; }
  // if ($participated == 0) { $menu0 .= "    dataTable.setRowProperty(3, 'style', 'background: #f2dede; border: 3px solid red');\n"; }
  if ($notparticipated == 0) { $menu0 .= "    dataTable.setRowProperty(4, 'style', 'background: #f2dede; border: 3px solid red');\n"; }
  $menu0 .= "    var options = { allowHtml: true, nodeClass: \"nodeClass\", selectedNodeClass: \"selectedNodeClass\", size: \"large\" };\n";
  $menu0 .= "    chart.draw(dataTable, options);\n";
  $menu0 .= "  }\n";
  $menu0 .= "  function drawGaugeChart() {\n";
  $menu0 .= "    var chart = new google.visualization.Gauge(document.getElementById('gaugechart'));\n";
  $menu0 .= "    var dataTable = new google.visualization.DataTable();\n";
  $menu0 .= "    dataTable.addColumn('number', 'Strike rate');\n";
  $menu0 .= "    dataTable.addRows(1);\n";
  $menu0 .= "    dataTable.setCell(0, 0, $strikerate);\n";
  $menu0 .= "    var options = { width: 120, height: 400, redFrom: 0, redTo: 10, yellowFrom:10, yellowTo: 30, greenFrom:30, greenTo: 100, minorTicks: 5 };\n";
  $menu0 .= "    chart.draw(dataTable, options);\n";
  $menu0 .= "  }\n";
  $menu0 .= "</script>\n";
  $menu0 .= "<style>\n";
  $menu0 .= "  .google-visualization-orgchart-node { font-family: \"ubuntu\"; font-size: 1rem; width: 150px; }\n";
  $menu0 .= "  .google-visualization-orgchart-connrow-medium { border-bottom: none; }\n";
  $menu0 .= "  .google-visualization-orgchart-table { border-collapse: separate !important; }\n";
  $menu0 .= "  .google-visualization-orgchart-linebottom { border-bottom: 3px solid #ddd; }\n";
  $menu0 .= "  .google-visualization-orgchart-lineleft { border-left: 3px solid #ddd; }\n";
  $menu0 .= "  .google-visualization-orgchart-lineright { border-right: 3px solid #ddd; }\n";
  $menu0 .= "  .nodeClass { font-family: \"ubuntu\"; font-size: 1rem; width: 150px; background: #f5f5f5; border: 3px solid #ccc; border-radius: 10px; }\n";
  $menu0 .= "  .selectedNodeClass { color: #66512c; background: #fcf8e3; border: 3px solid #faebcc }\n";
  $menu0 .= "  .progress { height: 15px; }\n";
  $menu0 .= "  .progress-bar { font-size:0.7rem; font-weight: normal; line-height: 10px; }\n";
  $menu0 .= "</style>\n";
}

if (isset($_GET['search'])) {
  $q3B = $db->prepare("SELECT * FROM j_respondents WHERE surveyid = :surveyid AND email LIKE :email ORDER BY participation DESC, invitation DESC, created DESC");
  $q3B->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
  $q3B->bindValue(':email', '%'.$_GET["search"].'%', PDO::PARAM_STR);
} else {
  $q3B = $db->prepare("SELECT * FROM j_respondents WHERE surveyid = :surveyid ORDER BY participation DESC, invitation DESC, created DESC");
  $q3B->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
}
$q3B->execute();
$amount = $q3B->rowCount(); $amount_format = number_format($amount);

if ($size) {
  $limit = $size;
  if ($_GET['p']) { $me = $base."&size=".$size; }
  else { $me = $base."&p=".$_GET['p']."&size=".$size; }
} else {
  if ($amount <= 250) { $limit = 50; }
  else if ($amount > 250 && $amount <= 500) { $limit = 100; }
  else if ($amount > 500 && $amount <= 1000) { $limit = 300; }
  else if ($amount > 1000) { $limit = 500; }
}

if (empty($start)) { $start = 0; }
if (empty($limit)) { $limit = 500; }
if ($p) { $start = ($p-1) * $limit; }
$to_record = $start + $limit;
$total = ceil($amount/$limit);
if ($to_record > $amount) { $to_record = $amount; }
$from_record = $start + 1;
$to_record_format = number_format($to_record);
$from_record_format = number_format($from_record);

// Get respondent error list
$q3A = $db->prepare("SELECT * FROM j_respondents WHERE surveyid = :surveyid AND status = 0");
$q3A->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
$q3A->execute();
while ($row = $q3A->fetchObject()) { $errorlist[] = $row->email; $ss = "invalid"; }
$email_error = "<div class=\"alert alert-danger alert-dismissible\" role=\"alert\"><a class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>\n";
$email_error .= "  <h4><i class=\"pe-exclamation-triangle pe-fw pe-lg\"></i> Found respondents with invalid email format</h4>\n";
$email_error .= "  <p>We detect <strong>$uncleaned respondents</strong> that appear to have an error in their email format, and hence cannot be used. Please correct their emails and upload them again.</p>\n";
$email_error .= "  <p>We display them in the table below with a <del>strike through</del> format so you can spot them instantly.</p>\n";
$email_error .= "  <p>Alternatively you can also <a data-toggle=\"collapse\" href=\"#showerrors\" aria-expanded=\"false\" class=\"alert-link\">click here <i class=\"pe-arrow-circle-down pe-fw\"></i></a> to see them all in one big list (click again to close).</p>\n";
$email_error .= "  <div class=\"collapse\" id=\"showerrors\"><div class=\"well small\">";
for($x = 0; $x < count($errorlist); $x++) { $email_error .= $errorlist[$x].", "; }
$email_error .= "</div></div>\n";
$email_error .= "  <form action=\"$base\" method=\"post\"><button type=\"submit\" name=\"m\" value=\"fixerrors\" class=\"btn btn-danger\">Fix this error</button></form>\n";
$email_error .= "</div>\n";

// Query all for auto complete search box
$dd = array();
$q3C = $db->prepare("SELECT * FROM j_respondents WHERE surveyid = :surveyid");
$q3C->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
$q3C->execute();
while ($rr = $q3C->fetchObject()) {
  $data["email"] = $rr->email;
  $data["created"] = $rr->created;
  array_push($dd, $data);
}
$dd = json_encode($dd, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);

// Check duplications
$q4A = $db->prepare("SELECT COUNT(*) as duplicates, id, email FROM j_respondents WHERE surveyid = :surveyid GROUP BY email HAVING duplicates > 1");
$q4A->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
$q4A->execute();
$e = array(); $f = array(); $g = array(); //$h = array();
while ($r = $q4A->fetchObject()) {
  $duplist[] = $r->email;
  array_push($e, $r->email);
  array_push($f, $r->duplicates);
  array_push($g, $r->id);
}
$c = array_combine($e, $f);
$duplicated_records = count($c);
$email_duplicated = "<div class=\"alert alert-danger alert-dismissible\" role=\"alert\"><a class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>\n";
$email_duplicated .= "  <h4><i class=\"pe-exclamation-triangle pe-fw pe-lg\"></i> Found respondents with duplicated emails</h4>\n";
$email_duplicated .= "  <p>We detected <strong>$duplicated_records respondents</strong> that have duplicated emails as shown below.</p>";
$email_duplicated .= "  <p>We display these duplicates in the table below with <span class=\"label label-danger\">duplicated</span> so you can spot them instantly.</p>\n";
$email_duplicated .= "  <ul class=\"pe-ul\">\n";
$d = array_count_values($c);
arsort($d);
foreach ($d as $dA => $dB) { $email_duplicated .= "    <li><i class=\"pe-li pe-check-square\"></i> $dB respondents with $dA emails</li>"; }
$email_duplicated .= "  </ul>\n";
$email_duplicated .= "  <br>\n";
$email_duplicated .= "  <p>You can <a data-toggle=\"collapse\" href=\"#showduplicates\" aria-expanded=\"false\" class=\"alert-link\">click here <i class=\"pe-arrow-circle-down pe-fw\"></i></a> to see them all in one big list (click again to close).</p>\n";
$email_duplicated .= "  <div class=\"collapse\" id=\"showduplicates\"><div class=\"well small\">";
for($x = 0; $x < count($duplist); $x++) { $email_duplicated .= $duplist[$x].", "; }
$email_duplicated .= "</div></div>\n";
$email_duplicated .= "  <form action=\"$base\" method=\"post\"><button type=\"submit\" name=\"m\" value=\"fixduplicates\" class=\"btn btn-danger\">Fix this error</button></form>\n";
$email_duplicated .= "</div>\n";

// Get respondent listing
$tablelist = "";
if ($ss == "invalid") {
  $q3D = $db->prepare("SELECT * FROM j_respondents WHERE surveyid = :surveyid ORDER BY status ASC, id DESC LIMIT $start, $limit");
  $q3D->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
} else if (isset($_GET['search'])) {
  $q3D = $db->prepare("SELECT * FROM j_respondents WHERE surveyid = :surveyid AND email LIKE :email ORDER BY participation DESC, invitation DESC, created DESC LIMIT $start, $limit");
  $q3D->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
  $q3D->bindValue(':email', '%'.$_GET["search"].'%', PDO::PARAM_STR);
} else {
  $q3D = $db->prepare("SELECT * FROM j_respondents WHERE surveyid = :surveyid ORDER BY participation DESC, invitation DESC, created DESC LIMIT $start, $limit");
  $q3D->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
}
$q3D->execute();
if ($from_record) { $i = $from_record; } else { $i = 1; }
while ($row = $q3D->fetchObject()) {
  $ii = number_format($i);
  $email = $row->email;
  if ($row->status == 0) { $a1 = "<del>"; $a2 = "</del>"; $a3 = "<tr style='background-color:#eee'>"; } else { $a1 = ""; $a2 = ""; $a3 = "<tr>"; }
  if (!empty($row->invitation)) { $disablecheckbox = " disabled"; } else { $disablecheckbox = ""; }
  if (in_array($email, $duplist)) { $a4 = "<span class=\"label label-danger\">duplicated</span>"; } else { $a4 = ""; }
  $tablelist .= "      $a3\n";
  $tablelist .= "        <td><div class=\"checbox\"><input type=\"checkbox\" name=\"checkbox[]\" id=\"$i\" value=\"$row->id\"$disablecheckbox></div></td>\n";
  $tablelist .= "        <td><small>$a1$email$a2 $a4</small></td>\n";
  if (!empty($row->created)) { $created = ago($row->created); $tablelist .= "      <td style=\"text-align:right\"><small>$a1$created$a2</small></td>\n"; } else { $tablelist .= "      <td style=\"text-align:right\"><small>-</small></td>\n"; }
  if (!empty($row->invitation)) { $invitation = ago($row->invitation); $tablelist .= "      <td style=\"text-align:right\"><small>$invitation</small></td>\n"; } else { $tablelist .= "      <td style=\"text-align:right\"><small>-</small></td>\n"; }
  if (!empty($row->reminder)) { $reminder = ago($row->reminder); $tablelist .= "      <td style=\"text-align:right\"><small>$reminder</small></td>\n"; } else { $tablelist .= "      <td style=\"text-align:right\"><small>-</small></td>\n"; }
  if (!empty($row->participation)) { $participation = ago($row->participation); $tablelist .= "      <td style=\"text-align:right\"><small>$participation</small></td>\n"; } else { $tablelist .= "      <td style=\"text-align:right\"><small>-</small></td>\n"; }
  $i++;
  $tablelist .= "      </tr>\n";
}

if ($total == 0) {
  $menu0 = "<div align=\"right\"><a class=\"btn btn-info\" href=\"\" data-toggle=\"modal\" data-target=\"#uploading\"><i class=\"pe-upload pe-fw\"></i> Upload a new name list</a> <a class=\"btn btn-info\" href=\"\" data-toggle=\"modal\" data-target=\"#manuallyadd\"><i class=\"pe-user-plus pe-fw\"></i> Manually add new respondents</a></div>\n";
  $menu0 .= "<br><br>\n";
  $menu0 .= $help;
} else {
  if (empty($showlink)) {
    if ($uncleaned) { $menu0 .= $email_error; $showlink = 1; } else { $showlink = 5; }
    if ($duplicated_records) { $menu0 .= $email_duplicated; $showlink = 2; } else { $showlink = 5; }
  }
  if ($showlink == 1) {
    $menu0 .= "<div class=\"alert alert-warning\" role=\"alert\">\n";
    $menu0 .= "  <h4><i class=\"pe-times pe-fw\"></i> Email sending function disabled</h4>\n";
    $menu0 .= "  <p>Because our system still detects errors in the email list as shown in the box above, the email sending function is now disabled.</p>\n";
    $menu0 .= "  <p>You must make sure the email list is error-free before you can send any emails to these respondents.</p>";
    $menu0 .= "  <div><a class=\"btn btn-warning disabled\" href=\"$linkinvitation\"><i class=\"pe-envelope pe-fw\"></i> Send an invitation email</a> <a class=\"btn btn-warning disabled\" href=\"$linkreminder\"><i class=\"pe-envelope pe-fw\"></i> Send a reminder email</a></div>\n";
    $menu0 .= "</div>\n";
  } else if ($showlink == 2) {
    $menu0 .= "<div class=\"alert alert-warning\" role=\"alert\">\n";
    $menu0 .= "  <h4><i class=\"pe-times pe-fw\"></i> Email sending function disabled</h4>\n";
    $menu0 .= "  <p>Because our system still detects duplications in the email list as shown in the box above, the email sending function is now disabled.</p>\n";
    $menu0 .= "  <p>You must make sure the email list is error-free before you can send any emails to these respondents.</p>";
    $menu0 .= "  <div><a class=\"btn btn-warning disabled\" href=\"$linkinvitation\"><i class=\"pe-envelope pe-fw\"></i> Send an invitation email</a> <a class=\"btn btn-warning disabled\" href=\"$linkreminder\"><i class=\"pe-envelope pe-fw\"></i> Send a reminder email</a></div>\n";
    $menu0 .= "</div>\n";
  } else if ($showlink == 3) {
    $menu0 .= "<div class=\"alert alert-warning\" role=\"alert\">\n";
    $menu0 .= "  <h4><i class=\"pe-times pe-fw\"></i> Email sending function disabled</h4>\n";
    $menu0 .= "  <p>Because this project is currently marked as <strong>completed</strong> so the email sending function is no longer required.</p>\n";
    $menu0 .= "  <p>Our system has automatically disabled this function to protect any emails unintentionally sent to respondents.</p>";
    $menu0 .= "  <p>Additionally, our system has also disabled the function for adding new respondents.</p>";
    $menu0 .= "  <div><a class=\"btn btn-warning disabled\" href=\"$linkinvitation\"><i class=\"pe-envelope pe-fw\"></i> Send an invitation email</a> <a class=\"btn btn-warning disabled\" href=\"$linkreminder\"><i class=\"pe-envelope pe-fw\"></i> Send a reminder email</a></div>\n";
    $menu0 .= "</div>\n";
  } else if ($showlink == 5) {
    $menu0 .= "<div class=\"alert alert-success\" role=\"alert\">\n";
    $menu0 .= "  <h4><i class=\"pe-check-square pe-fw\"></i> Email sending function enabled</h4>\n";
    $menu0 .= "  <p>Because there is no error in the email list, the email sending function is now enabled.</p>\n";
    $menu0 .= "  <p>This means you can choose to send emails to these respondents by using below functions:</p>";
    $menu0 .= "  <div><a class=\"btn btn-warning\" href=\"$linkinvitation\"><i class=\"pe-envelope pe-fw\"></i> Send an invitation email</a> <a class=\"btn btn-warning disabled\" href=\"$linkreminder\"><i class=\"pe-envelope pe-fw\"></i> Send a reminder email</a></div>\n";
    $menu0 .= "</div>\n";
  }
  if ($_GET['m'] == "1") { $message = mksuccess("You have successfully uploaded and added respondents(s) to the database."); $menu0 .= "<p>$message</p>\n"; }
  else if ($_GET['m'] == "2") { $message = mksuccess("You have successfully added respondents(s) to the database."); $menu0 .= "<p>$message</p>\n"; }
  else if ($_GET['m'] == "3") { $message = mksuccess("All respondents(s) with invalid emails have been removed."); $menu0 .= "<p>$message</p>\n"; }
  else if ($_GET['m'] == "4") { $message = mksuccess("All duplicated emails have been removed while system still keeps the original ones."); $menu0 .= "<p>$message</p>\n"; }
  else if ($_GET['m'] == "5") { $message = mkwarn("Selected respondents(s) has/have been deleted."); $menu0 .= "<p>$message</p>\n"; }
  else { $menu0 .= "<p></p>\n"; }

  if ($showlink == 3) { $menu0 .= "<div align=\"right\"><a class=\"btn btn-info disabled\" data-toggle=\"modal\" data-target=\"#uploading\"><i class=\"pe-upload pe-fw\"></i> Upload a new name list</a> <a class=\"btn btn-info disabled\" data-toggle=\"modal\" data-target=\"#manuallyadd\"><i class=\"pe-user-plus pe-fw\"></i> Manually add new respondents</a></div><br><br>\n"; }
  else { $menu0 .= "<div align=\"right\"><a class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#uploading\"><i class=\"pe-upload pe-fw\"></i> Upload a new name list</a> <a class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#manuallyadd\"><i class=\"pe-user-plus pe-fw\"></i> Manually add new respondents</a></div><br><br>\n"; }

  if ($_GET['search']) { $me = $base."&size=".$size."&search=".$_GET['search']; }
  else { $me = $base."&size=".$size; }

  $pagination = "<nav class=\"pagination-centered\">\n";
  $pagination .= "  <ul class=\"pagination\">\n";
  if ($total > 1 && $p <= $total) {
    if (($p == 1) || (empty($p))) { $pagination .= "<li class=\"active\"><a class=\"btn btn-sm\" href=\"".$me."&p=1\">1</a></li>"; }
    else { $pagination .= "<li><a class=\"btn btn-sm\" href=\"".$me."&p=1\">1</a></li>"; }
    $i = max(2, $p - 2);
    if ($i > 2) { $pagination .= "<li><a class=\"btn btn-sm\" style=\"border:none\">...</a></li>"; }
    for (; $i < min($p + 3, $total); $i++) {
      if ($i == $p) { $pagination .= "<li class=\"active\"><a class=\"btn btn-sm\" href=\"".$me."&p=".$i."\">".$i."</a></li>"; }
      else { $pagination .= "<li><a class=\"btn btn-sm\" href=\"".$me."&p=".$i."\">".$i."</a></li>"; }
    }
    if ($i != $total) { $pagination .= "<li><a class=\"btn btn-sm\" style=\"border:none\">...</a></li>"; }
    if ($p == $total) { $pagination .= "<li class=\"active\"><a class=\"btn btn-sm\" href=\"".$me."&p=".$total."\">".$total."</a></li>"; }
    else { $pagination .= "<li><a class=\"btn btn-sm\" href=\"".$me."&p=".$total."\">".$total."</a></li>"; }
  }
  $pagination .= "  </ul>\n";
  $pagination .= "</nav>\n\n";


  $menu1 .= "<div class=\"row\">\n";
  $menu1 .= "  <div class=\"col-xs-12 col-sm-4 col-md-4 col-lg-4\">\n";
  if (isset($_GET['search'])) { $menu1 .= "    Filter: <span class=\"search-filter\"><a href=\"$base\" title=\"Remove this search filter\"><i class=\"pe-times pe-fw red\"></i> ".$_GET['search']."</a></span><br>\n"; }
  // else { $menu1 .= "    Filter: <span class=\"search-filter\"><a href=\"$base\" title=\"Remove this search filter\"><i class=\"pe-times pe-fw red\"></i> ".$_POST['showbyemail']."</a></span>\n"; }
  $menu1 .= "  </div>\n";
  $menu1 .= "  <div class=\"col-xs-12 col-sm-4 col-md-4 col-lg-4\">\n";
  $menu1 .= "    <form action=\"$base\" method=\"get\">\n";
  $menu1 .= "      <div class=\"form-group has-feedback\">\n";
  $menu1 .= "        <input type=\"hidden\" name=\"w\" value=\"respondents\">\n";
  $menu1 .= "        <input type=\"hidden\" name=\"s\" value=\"".$_GET['s']."\">\n";
  $menu1 .= "        <input type=\"text\" id=\"RDsearchbox\" name=\"search\" class=\"form-control input-sm\"><i class=\"pe-search form-control-feedback\" aria-hidden=\"true\"></i>\n";
  $menu1 .= "      </div>\n";
  $menu1 .= "    </form>\n";
  $menu1 .= "  </div>\n";
  if ($_GET['search']) { $menu1 .= "  <div class=\"col-xs-12 col-sm-4 col-md-4 col-lg-4\" style=\"text-align:right\"><form method=\"post\" class=\"form-inline\" action=\"".$base."&search=".$_GET['search']."\">\n"; }
  else { $menu1 .= "  <div class=\"col-xs-12 col-sm-4 col-md-4 col-lg-4\" style=\"text-align:right\"><form method=\"get\" class=\"form-inline\" action=\"$me\">\n"; }
  $menu1 .= "    <small>Select <i class=\"pe-th pe-fw\"></i> display size:</small>\n";
  $menu1 .= "    <input type=\"hidden\" name=\"w\" value=\"respondents\">\n";
  $menu1 .= "    <input type=\"hidden\" name=\"s\" value=\"".$_GET['s']."\">\n";
  // if ($p) { $menu1 .= "    <input type=\"hidden\" name=\"p\" value=\"$p\">\n"; }
  if ($size) { $menu1 .= "    <input type=\"hidden\" name=\"size\" value=\"$size\">\n"; }
  if ($amount > 50) { $menu1 .= "    <select class=\"form-control input-sm\" name=\"size\" onchange=\"this.form.submit()\">\n"; }
  else { $menu1 .= "    <select class=\"form-control input-sm\" name=\"size\" onchange=\"this.form.submit()\" disabled>\n"; }
  if ($size == "") { $menu1 .= "      <option value=\"\" selected>Auto (default)</option>\n"; } else { $menu1 .= "      <option value=\"\">Auto (default)</option>\n"; }
  if ($size == "50") { $menu1 .= "      <option value=\"50\" selected>50</option>\n"; } else { $menu1 .= "      <option value=\"50\">50</option>\n"; }
  if ($size == "100") { $menu1 .= "      <option value=\"100\" selected>100</option>\n"; } else { $menu1 .= "      <option value=\"100\">100</option>\n"; }
  if ($size == "300") { $menu1 .= "      <option value=\"300\" selected>300</option>\n"; } else { $menu1 .= "      <option value=\"300\">300</option>\n"; }
  if ($size == "500") { $menu1 .= "      <option value=\"500\" selected>500</option>\n"; } else { $menu1 .= "      <option value=\"500\">500</option>\n"; }
  if ($size == "1000") { $menu1 .= "      <option value=\"1000\" selected>1,000</option>\n"; } else { $menu1 .= "      <option value=\"1000\">1,000</option>\n"; }
  $menu1 .= "    </select>\n";
  $menu1 .= "  </form></div>\n";
  $menu1 .= "</div><br>\n";
  $menu1 .= "<small>Found <strong>$amount_format records</strong> (showing results $from_record_format to $to_record_format)</small>\n";

  $menu2 .= "<form method=\"post\" action=\"$me\">\n";
  $menu2 .= "  <table class=\"table table-hover table-condensed small\">\n";
  $menu2 .= "    <thead>\n";
  $menu2 .= "      <tr class=\"bg-success\">\n";
  $menu2 .= "        <th width=\"5%\"></th>\n";
  $menu2 .= "        <th width=\"27%\">Respondent</th>\n";
  $menu2 .= "        <th width=\"17%\" style=\"text-align:right\">Total upload</th>\n";
  $menu2 .= "        <th width=\"17%\" style=\"text-align:right\">Invitation</th>\n";
  $menu2 .= "        <th width=\"17%\" style=\"text-align:right\">Reminder</th>\n";
  $menu2 .= "        <th width=\"17%\" style=\"text-align:right\">Participation</th>\n";
  $menu2 .= "      </tr>\n";
  $menu2 .= "    </thead>\n";
  $menu2 .= "    <tbody>\n";
  $menu2 .= "      <tr>\n";
  $menu2 .= $tablelist;
  $menu2 .= "      </tr>\n";
  $menu2 .= "    </tbody>\n";
  $menu2 .= "  </table>\n";
  $menu2 .= "  <input type=\"hidden\" name=\"m\" value=\"delthis\">\n";
  $menu2 .= "  <div class=\"checkbox\"><label class=\"small\" style=\"padding-left:0\"><input type=\"checkbox\" name=\"all\" id=\"all\" value=\"\"$disablecheckbox> <i class=\"pe-level-up pe-flip-horizontal red\"></i> Select / deselect all</label></div>\n";
  $menu2 .= "  <button type=\"submit\" class=\"btn btn-danger\"><i class=\"pe-trash pe-fw\"></i> Delete selected</button>\n";
  $menu2 .= "  <p></p>\n";
  $menu2 .= "  <p class=\"small\"><em>Note: You only can delete respondents who have <u>not</u> been invited to this survey.</em></p>\n";
  $menu2 .= "</form>\n";
}

$menu2 .= "<div class=\"modal fade\" id=\"uploading\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"uploading\">\n";
$menu2 .= "  <div class=\"modal-dialog\" role=\"document\">\n";
$menu2 .= "    <div class=\"modal-content\">\n";
$menu2 .= "      <form class=\"\" action=\"\" method=\"post\" enctype=\"multipart/form-data\">\n";
$menu2 .= "        <div class=\"modal-header\">\n";
$menu2 .= "          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n";
$menu2 .= "          <h4 class=\"modal-title\">Upload a name list</h4>\n";
$menu2 .= "        </div>\n";
$menu2 .= "        <div class=\"modal-body\">\n";
$menu2 .= "          <p>Use this tool to upload many names/emails at once. And the file must be in the exact format as described below, otherwise the upload process will not work.</p>\n";
$menu2 .= "          <label class=\"btn btn-default btn-sm\">Browse <input type=\"file\" name=\"csvfilename\" style=\"display:none\" onchange=\"$('#upload-file-info').html($(this).val());\"></label>\n";
$menu2 .= "          <kbd id=\"upload-file-info\">Please select a CSV file</kbd>\n";
$menu2 .= "          <p></p>\n";
$menu2 .= "          <div class=\"input-group\">\n";
$menu2 .= "            <span class=\"input-group-addon\"><i class=\"pe-envelope pe-fw\"></i> Column contains email:</span>\n";
$menu2 .= "            <select class=\"form-control\" name=\"colemail\">\n";
$menu2 .= "              <option value=\"\">-- choose --</option>\n";
$menu2 .= "              <option value=\"1\">1</option><option value=\"2\">2</option><option value=\"3\">3</option><option value=\"4\">4</option>\n";
$menu2 .= "              <option value=\"5\">5</option><option value=\"6\">6</option><option value=\"7\">7</option><option value=\"8\">8</option>\n";
$menu2 .= "              <option value=\"9\">9</option><option value=\"10\">10</option><option value=\"11\">11</option><option value=\"12\">12</option>\n";
$menu2 .= "              <option value=\"13\">13</option><option value=\"14\">14</option><option value=\"15\">15</option><option value=\"16\">16</option>\n";
$menu2 .= "              <option value=\"17\">17</option><option value=\"18\">18</option><option value=\"19\">19</option><option value=\"20\">20</option>\n";
$menu2 .= "            </select>\n";
$menu2 .= "          </div>\n";
$menu2 .= "        </div>\n";
$menu2 .= "        <div class=\"modal-footer\">\n";
$menu2 .= "          <input type=\"hidden\" name=\"surveyid\" value=\"".$_GET['s']."\">\n";
$menu2 .= "          <button type=\"submit\" class=\"btn btn-warning\" name=\"uploading\" value=\"1\">Upload <i class=\"pe-check-circle-o\"></i></button>\n";
$menu2 .= "          <button type=\"reset\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel <i class=\"pe-times-circle-o\"></i></button>\n";
$menu2 .= "        </div>\n";
$menu2 .= "      </form>\n";
$menu2 .= "    </div>\n";
$menu2 .= "  </div>\n";
$menu2 .= "</div>\n";

$menu2 .= "<div class=\"modal fade\" id=\"manuallyadd\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"manuallyadd\">\n";
$menu2 .= "  <div class=\"modal-dialog\" role=\"document\">\n";
$menu2 .= "    <div class=\"modal-content\">\n";
$menu2 .= "      <form class=\"\" action=\"$base\" method=\"post\">\n";
$menu2 .= "        <div class=\"modal-header\">\n";
$menu2 .= "          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n";
$menu2 .= "          <h4 class=\"modal-title\">Manually add new respondents</h4>\n";
$menu2 .= "        </div>\n";
$menu2 .= "        <div class=\"modal-body\">\n";
$menu2 .= "          <p>Project owners also can add new respondents by manually inserting their email(s) using the provided boxes below. You can insert up to 5 emails at once.</p>\n";
$menu2 .= "          <div class=\"input-group\"><span class=\"input-group-addon\"><i class=\"pe-envelope pe-fw\"></i> New email (#1):</span><input type=\"text\" class=\"form-control\" placeholder=\"Please insert only valid email\" name=\"addemail[]\"></div><br>\n";
$menu2 .= "          <div class=\"input-group\"><span class=\"input-group-addon\"><i class=\"pe-envelope pe-fw\"></i> New email (#2):</span><input type=\"text\" class=\"form-control\" placeholder=\"Please insert only valid email\" name=\"addemail[]\"></div><br>\n";
$menu2 .= "          <div class=\"input-group\"><span class=\"input-group-addon\"><i class=\"pe-envelope pe-fw\"></i> New email (#3):</span><input type=\"text\" class=\"form-control\" placeholder=\"Please insert only valid email\" name=\"addemail[]\"></div><br>\n";
$menu2 .= "          <div class=\"input-group\"><span class=\"input-group-addon\"><i class=\"pe-envelope pe-fw\"></i> New email (#4):</span><input type=\"text\" class=\"form-control\" placeholder=\"Please insert only valid email\" name=\"addemail[]\"></div><br>\n";
$menu2 .= "          <div class=\"input-group\"><span class=\"input-group-addon\"><i class=\"pe-envelope pe-fw\"></i> New email (#5):</span><input type=\"text\" class=\"form-control\" placeholder=\"Please insert only valid email\" name=\"addemail[]\"></div><br>\n";
$menu2 .= "        </div>\n";
$menu2 .= "        <div class=\"modal-footer\">\n";
$menu2 .= "          <input type=\"hidden\" name=\"surveyid\" value=\"".$_GET['s']."\">\n";
$menu2 .= "          <button type=\"submit\" class=\"btn btn-warning\" name=\"adding\" value=\"1\">Add <i class=\"pe-check-circle-o\"></i></button>\n";
$menu2 .= "          <button type=\"reset\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel <i class=\"pe-times-circle-o\"></i></button>\n";
$menu2 .= "        </div>\n";
$menu2 .= "      </form>\n";
$menu2 .= "    </div>\n";
$menu2 .= "  </div>\n";
$menu2 .= "</div>\n";
$menu2 .= "<br>\n";

echo $menu0;
echo $menu1;
echo $menu2;

if (($total != 0) && (!isset($_POST['showbyemail']))) { echo $pagination; }

?>

<script type="text/javascript">
  var surveyid = <?php echo $_GET['s']; ?>;
  $('#confirm-delete').on('show.bs.modal', function(e) {
    $(this).find('.btn-ok').attr('href', $(e.relatedTarget).data('href'));
  });
  $("#RDsearchbox").easyAutocomplete({
    <?php if (isJSON($dd)) { echo "data: $dd,\n"; } else { echo "url: \"http://www.siamsquare.org.uk/respondent/\" + surveyid,\n"; } ?>
    getValue: "email",
    list: {
      maxNumberOfElements: 10,
      match: { enabled: true },
      showAnimation: { type: "fade", time: 400, callback: function() {} },
      hideAnimation: { type: "slide",  time: 400, callback: function() {} },
      onSelectItemEvent: function() {
        var value = $("#RDsearchbox").getSelectedItemData().email;
        $("#value-holder").val(value).trigger("change");
      },
    },
    theme: "bootstrap",
    placeholder: "Email search among all (n=<?php echo $all_format; ?>)"
  });
  $("td input:checkbox").click(function() {
    if ($(this).is(':checked')) { $(this).parent().parent().parent().addClass("highlight");  }
    else { $(this).parent().parent().parent().removeClass("highlight"); }
  });
  $(document).ready(function() {
    $('#all').click( function () {
      $('td input:checkbox').not(":disabled").prop('checked', this.checked);
      if ($('td input:checkbox').is(':checked')) { $('td input:checkbox').not(":disabled").parent().parent().parent().addClass("highlight"); }
      else { $('td input:checkbox').not(":disabled").parent().parent().parent().removeClass("highlight"); }
    })
  });
</script>

<?php backButton("/admin/?w=surveys", "Back to the main page", "danger"); ?>

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
