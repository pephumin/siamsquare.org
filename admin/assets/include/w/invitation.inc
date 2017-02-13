<?php

$base = "/admin/?w=invitation&s=".$_GET['s'];
$goback = "/admin/?w=respondents&s=".$_GET['s'];
if ($_GET['p']) { $p = $_GET['p']; $me = $base."&p=".$_GET['p']; }
if ($p == '') { $p = "1"; }

$defaultemail = EMAILNOREPLY; // "noreply@siamsquare.org";
$run = "/r.php?s=".$_GET['s'];

if (empty($_GET['s'])) { pageHeader("Error"); echo mkerror("Cannot proceed without a surveyid"); pageFooter(); exit; }

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
$golden .= "  <p>There are some golden rules for sending an invite to respodents as follows.</p>\n";
$golden .= "  <ul class=\"pe-ul\">\n";
$golden .= "    <li><i class=\"pe-li pe-check-square\"></i> Before you can send the invite, it is required that the email list must not contain any errors in email or duplication.</li>\n";
$golden .= "    <li><i class=\"pe-li pe-check-square\"></i> You can only send <strong>one invitation and one reminder</strong> to each respondent. And this applies specific to each study.</li>\n";
$golden .= "    <li><i class=\"pe-li pe-check-square\"></i> While the invitation is supposed to be sent to all respondents, the reminder can only be sent to those who have been invited but still not participated. Our system will only show the emails that are relevant to this specific action.</li>\n";
$golden .= "    <li><i class=\"pe-li pe-check-square\"></i> To ensure we do not overload the server, <strong>a maximum of 500 respondents is currently limited per one batch of email sending</strong>.</li>\n";
$golden .= "  </ul>\n";
$golden .= "</div>\n";

// Get projcet title
$q = $db->prepare("SELECT title, status, email_i, email_i_content, email_r, email_r_content FROM j_projects WHERE private = 1 AND id = :surveyid");
$q->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
$q->execute();
if ($q->rowCount() == 0) {
  $title = "An error has been found";
  pageHeader($title);
  echo "<h2>We could not find a match for ID for this project</h2>\n";
  echo "<p>There has been an error locating the project you are looking for. This is caused by two reasons which are either there is a false in our system (which is very unlikely) or you use our system incorrectly.</p>";
  echo "<p>If you have tried entering the project ID manually, we strongly suggest you should stop doing this. You should instead use the client dashboard which will never lead you to a wrong link or any errors like this at all.</p>";
  echo mkerror("In fact we typically consider such action as violent.");
  echo "<p>Our system has already recorded this error including your identity and timestamp.</p>";
  pageFooter();
  $q = $db->prepare("INSERT INTO j_users_logs (userid, ip, data, critical) VALUE (:userid, :ip, '" . $_SESSION["email"] . " tried accessing a non-existing project', '5')");
  $q->bindValue(':userid', $_SESSION["userid"], PDO::PARAM_INT);
  $q->bindValue(':ip', $_SESSION["ip"], PDO::PARAM_INT);
  $q->execute();
  exit;
}
while ($row = $q->fetchObject()) {
  $project = $row->title;
  $status = $row->status;
  $email_i = $row->email_i;
  $email_i_content = $row->email_i_content;
  $email_r = $row->email_r;
  $email_r_content = $row->email_r_content;
}
if ($_SESSION['level'] != "9") {
  if ($status != 1) {
    $title = "An error has been found";
    pageHeader($title);
    echo "<h2>This project is no longer editable</h2>\n";
    echo "<p>You only can make change on this with projects that have not started the data-collection. This prevents having any unexpected errors at the analysis stage such as a conflict based on a mismatch information between pre and post data-collection.</p>";
    echo "<p>If you have tried entering the project ID manually, we strongly suggest you should stop doing this. You should instead use the client dashboard which will never lead you to a wrong link or any errors like this at all.</p>";
    echo mkerror("In fact we typically consider such action as violent.");
    echo "<p>Our system has already recorded this error including your identity and timestamp.</p>";
    pageFooter();
    $q = $db->prepare("INSERT INTO j_users_logs (userid, ip, data, critical) VALUE (:userid, :ip, '" . $_SESSION["email"] . " tried editing a non-editable project', '5')");
    $q->bindValue(':userid', $_SESSION["userid"], PDO::PARAM_INT);
    $q->bindValue(':ip', $_SESSION["ip"], PDO::PARAM_INT);
    $q->execute();
    exit;
  }
}

if ($_POST['saveme'] == 1) {
  if (empty($_POST["email_iA"])) { $_POST["email_iA"] = EMAILNOREPLY; }
  else if (empty($_POST["email_iB"])) { echo ""; }
  if ($_POST["choice-email1"] == "system") { $email_i = $_POST["email_iA"]; }
  else if ($_POST["choice-email1"] == "custom") { $email_i = $_POST["email_iB"]; $redirect = $base."&m=2"; header("location: $redirect"); exit; }
  $email_i_content = htmlentities($_POST["email_i_content"], ENT_QUOTES, 'UTF-8');
  $q1A = $db->prepare("UPDATE j_projects SET email_i = :email_i, email_i_content = :email_i_content WHERE id = :surveyid");
  $q1A->bindValue(':email_i', $email_i, PDO::PARAM_STR);
  $q1A->bindValue(':email_i_content', $email_i_content, PDO::PARAM_STR);
  $q1A->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
  $q1A->execute();
  $ql1A = $db->prepare("INSERT INTO j_users_logs (userid, ip, data, critical) VALUE (:userid, :ip, '".$_SESSION['email']." edited email invitation template for $project (id=".$_GET['s'].")', '2')");
  $ql1A->bindValue(':userid', $_SESSION['userid'], PDO::PARAM_INT);
  $ql1A->bindValue(':ip', $_SESSION['ip'], PDO::PARAM_STR);
  $ql1A->execute();
  $redirect = $base."&m=3";
  header("location: $redirect");
// } else if ($_POST['saveme'] == 2) {
//   if ($_POST["choice-email2"] == "system") { $email_r = $_POST["email_rA"]; }
//   else if ($_POST["choice-email2"] == "custom") { $email_r = $_POST["email_rB"]; }
//   $email_r_content = htmlentities($_POST["email_r_content"], ENT_QUOTES, 'UTF-8');
//   $q1B = $db->prepare("UPDATE j_projects SET email_r = :email_r, email_r_content = :email_r_content WHERE id = :surveyid");
//   $q1B->bindValue(':email_r', $email_r, PDO::PARAM_STR);
//   $q1B->bindValue(':email_r_content', $email_r_content, PDO::PARAM_STR);
//   $q1B->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
//   $q1B->execute();
//   $ql1B = $db->prepare("INSERT INTO j_users_logs (userid, ip, data, critical) VALUE (:userid, :ip, '".$_SESSION['email']." edited email reminder template for $project (id=".$_GET['s'].")', '2')");
//   $ql1B->bindValue(':userid', $_SESSION['userid'], PDO::PARAM_INT);
//   $ql1B->bindValue(':ip', $_SESSION['ip'], PDO::PARAM_STR);
//   $ql1B->execute();
//   header("location: $base");
} else if ($_POST['m'] == "sending") {
  if (empty($email_i_content)) { $redirect = $base."&m=4"; header("location: $redirect"); }
  else if (empty($_POST['checkbox'])) { $redirect = $base."&m=5"; header("location: $redirect"); }
  else {
    $mail = new PHPMailer;
    // $mail->isSMTP();
    // $mail->SMTPDebug = 3;
    $mail->Host = 'mail.thaiweb.net';
    $mail->Port = 587;
    // $mail->Username = 'sysop';
    // $mail->Password = '';
    $mail->SMTPSecure = 'tls';
    $mail->SMTPAuth = true;
    $mail->SMTPKeepAlive = true;
    if ($email_i) { $mail->setFrom($email_i); $mail->addReplyTo($email_i); } else { $mail->setFrom(EMAILNOREPLY); $mail->addReplyTo(EMAILNOREPLY); }
    $mail->Subject = "ขอเชิญร่วมแสดงความคิดเห็น / Survey invitation";
    // $mail->isHTML(true);
    $mail->CharSet = "UTF-8";

    $ids = implode(",", $_POST['checkbox']);
    // echo $ids;
    // $amount = count($ids);
    $q1C = $db->prepare("SELECT email, password FROM j_respondents WHERE surveyid = :surveyid AND id IN ($ids)");
    $q1C->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
    $q1C->execute();
    while ($rr = $q1C->fetchObject()) {
      $link = MYHOME."/r.php?s=".$_GET['s']."&email=".$rr->email."&token=".$rr->password;
      // echo $link;
      $new_content = str_replace("[_LINK_]", $link, $email_i_content);
      $mail->Body = $new_content;
      // $mail->AltBody = strip_tags($email_i_content);
      $mail->addAddress($rr->email);

      if (!$mail->send()) {
        $out = "Mailer Error (" . str_replace("@", "&#64;", $rr->email) . ') ' . $mail->ErrorInfo . '<br>';
        // echo "hey333";
        break;
      } else {
        $out = "Message sent to :" . str_replace("@", "&#64;", $rr->email) . '<br>';
        $q3 = $db->prepare("UPDATE j_respondents SET invitation = NOW() WHERE surveyid = :surveyid AND email = :email");
        $q3->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
        $q3->bindValue(':email', $rr->email, PDO::PARAM_INT);
        $q3->execute();
      }
      $mail->clearAddresses();
      $mail->clearAttachments();
      // $q4 = $db->prepare("INSERT INTO j_users_logs (userid, ip, data, critical) VALUE (:userid, :ip, '".$_SESSION['email']." sent ".$amount." invitations for $project', '4')");
      // $q4->bindValue(':userid', $_SESSION['userid'], PDO::PARAM_INT);
      // $q4->bindValue(':ip', $_SESSION['ip'], PDO::PARAM_STR);
      // $q4->execute();
      // $redirect = $base."&m=1";
    }
    // if ($redirect) { header("location: $redirect"); }
  }
}

// check if the list is cleaned and ready for sending email invitations/reminders

$q2A = $db->prepare("SELECT SUM(status = '0') AS q2A1, SUM(status = '1') AS q2A2 FROM j_respondents WHERE surveyid = :surveyid");
$q2A->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
$q2A->execute();
while ($row = $q2A->fetchObject()) {
  $uncleaned = $row->q2A1; $uncleaned_format = number_format($row->q2A1);
  $all = $row->q2A2; $all_format = number_format($row->q2A2);
}

if ($uncleaned) {
  $title = "An error has been found";
  pageHeader($title);
  echo "<h2>Errors in respondent list</h2>\n";
  echo "<p>Our system detects there are still some errors in the email list of respondents which can be either invalid email and/or email duplications.</p>";
  echo "<p>Sending invitations / reminders is not possible when there are still errors existing like this.</p>";
  echo mkerror("Please fix all errors at the <a class=\"alert-link\" href=\"$goback\">respondent page</a> and then come back here again once the list is definitely cleaned.");
  pageFooter();
  exit;
}

$title = "Send an invitation";
pageHeader($title);
echo "<h2>$title</h2>\n";
echo "<p>We provide you with a tool that helps you sending out all emails to respondents in a very easy way.</p>\n";
echo "<p>You just simply follow these steps, and the emails will be sent to target respondents per your demand.</p>\n";
echo $golden;
echo "<hr>\n";
echo "<h3>Project $project</h3>\n";

$q2B = $db->prepare("SELECT SUM(IF(invitation IS NOT NULL, 1, 0)) AS q2B1, SUM(IF(invitation IS NULL, 1, 0)) AS q2B2, SUM(IF(invitation IS NOT NULL AND participation IS NOT NULL, 1, 0)) AS q2B3, SUM(IF(invitation IS NOT NULL AND participation IS NULL, 1, 0)) AS q2B4, SUM(IF(status = 1, 1, 0)) AS q2B5 FROM j_respondents WHERE surveyid = :surveyid");
$q2B->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
$q2B->execute();

while ($row = $q2B->fetchObject()) {
  $invited = $row->q2B1; $invited_format = number_format($row->q2B1);
  $notinvited = $row->q2B2; $notinvited_format = number_format($row->q2B2);
  $participated = $row->q2B3; $participated_format = number_format($row->q2B3);
  $notparticipated = $row->q2B4; $notparticipated_format = number_format($row->q2B4);
}


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
$thistotal = $notinvited;

echo "<h4><i class=\"pe-dashboard pe-fw\"></i> Current status</h4>\n";

if ($all == 0) {
  echo "<p>Currently this project has <strong>no respondent</strong> stored in our database, and hence it is not possible to send any invitations.</p>\n";
  echo "<p>Please upload respondent's emails using a Comma Separated Value (CSV) file in order to store those emails in our database, and then come back to this page again for sending the invites.</p>\n";
  echo "<p></p>\n";
  $showfunction = false;
} else {
  if ($notinvited == 0) {
    $text = "<p><strong>You have already invited all respondents</strong>, so no more invitation can be sent unless new emails are added.</p><hr>\n";
    $text .= "<p>And the current strike rate <em>(participation vs. invitation)</em> for this project is <strong>$strikerate%</strong>.</p>\n";
    $text .= "<div id=\"gaugechart\"></div>\n";
    $showfunction = false;
  } else {
    $text = "<p>There are <strong>$notinvited_format respondent(s)</strong> who can be sent with the invitation as shown with red highlight.</p><hr>\n";
    $text .= "<p>And the current strike rate <em>(participation vs. invitation)</em> for this project is <strong>$strikerate%</strong>.</p>\n";
    $text .= "<div id=\"gaugechart\"></div>\n";
    $showfunction = true;
  }
  echo "<div class=\"row\">\n";
  echo "  <div class=\"col-xs-12 col-sm-8 col-md-8 col-lg-8\">\n";
  echo "    <div id=\"orgchart\"></div>\n";
  echo "  </div>\n";
  echo "  <div class=\"col-xs-12 col-sm-4 col-md-4 col-lg-4\">\n";
  echo "    $text\n";
  echo "  </div>\n";
  echo "</div>\n";
  echo "<br>\n";
  echo "<script type=\"text/javascript\">\n";
  echo "  google.charts.load('current', { 'packages': ['orgchart', 'gauge'] });\n";
  echo "  google.charts.setOnLoadCallback(drawOrgChart);\n";
  echo "  google.charts.setOnLoadCallback(drawGaugeChart);\n";
  echo "  function drawOrgChart() {\n";
  echo "    var chart = new google.visualization.OrgChart(document.getElementById('orgchart'));\n";
  echo "    var dataTable = new google.visualization.DataTable();\n";
  echo "    dataTable.addColumn('string', 'Status');\n";
  echo "    dataTable.addColumn('string', 'Sample');\n";
  echo "    dataTable.addColumn('string', 'ToolTip');\n";
  echo "    dataTable.addRows([\n";
  echo "      [{ v:'Total', f:'<div class=\"small\">Total</div><div style=\"font-size:1.5rem\">n=".$all_format."</div>$all_bar' }, '', 'Total respondents (The target Universe)' ],\n";
  echo "      [{ v:'Invited', f:'<div class=\"small\">Invited</div><div style=\"font-size:1.5rem\">n=".$invited_format."</div>$invited_bar' }, 'Total', 'Those who have been invited' ],\n";
  echo "      [{ v:'Not invited', f:'<div class=\"small\">Not invited</div><div style=\"font-size:1.5rem\">n=".$notinvited_format."</div>$notinvited_bar' }, 'Total', 'Those who have not been invited' ],\n";
  echo "      [{ v:'Participated', f:'<div class=\"small\">Participated</div><div style=\"font-size:1.5rem\">n=".$participated_format."</div>$participated_bar' }, 'Invited', 'Those who have participated in this project' ],\n";
  echo "      [{ v:'Not participated', f:'<div class=\"small\">Not participated</div><div style=\"font-size:1.5rem\">n=".$notparticipated_format."</div>$notparticipated_bar' }, 'Invited', 'Those who have not participated in this study' ],\n";
  echo "    ]);\n";
  echo "    dataTable.setRowProperty(2, 'style', 'background: #f2dede; border: 3px solid red');\n";
  echo "    var options = { allowHtml: true, nodeClass: \"nodeClass\", selectedNodeClass: \"selectedNodeClass\", size: \"large\" };\n";
  echo "    chart.draw(dataTable, options);\n";
  echo "  }\n";
  echo "  function drawGaugeChart() {\n";
  echo "    var chart = new google.visualization.Gauge(document.getElementById('gaugechart'));\n";
  echo "    var dataTable = new google.visualization.DataTable();\n";
  echo "    dataTable.addColumn('number', 'Strike rate');\n";
  echo "    dataTable.addRows(1);\n";
  echo "    dataTable.setCell(0, 0, $strikerate);\n";
  echo "    var options = { width: 120, height: 400, redFrom: 0, redTo: 10, yellowFrom:10, yellowTo: 30, greenFrom:30, greenTo: 100, minorTicks: 5 };\n";
  echo "    chart.draw(dataTable, options);\n";
  echo "  }\n";
  echo "</script>\n";
  echo "<style media=\"screen\">\n";
  echo "  .google-visualization-orgchart-node { font-family: \"ubuntu\"; font-size: 1rem; width: 150px; }\n";
  echo "  .google-visualization-orgchart-connrow-medium { border-bottom: none; }\n";
  echo "  .google-visualization-orgchart-table { border-collapse: separate !important; }\n";
  echo "  .google-visualization-orgchart-linebottom { border-bottom: 3px solid #ddd; }\n";
  echo "  .google-visualization-orgchart-lineleft { border-left: 3px solid #ddd; }\n";
  echo "  .google-visualization-orgchart-lineright { border-right: 3px solid #ddd; }\n";
  echo "  .nodeClass { font-family: \"ubuntu\"; font-size: 1rem; width: 150px; background: #f5f5f5; border: 3px solid #ccc; border-radius: 10px; }\n";
  echo "  .selectedNodeClass { color: #66512c; background: #fcf8e3; border: 3px solid #faebcc }\n";
  echo "  .progress { height: 15px; }\n";
  echo "  .progress-bar { font-size:0.7rem; font-weight: normal; line-height: 10px; }\n";
  echo "</style>\n";
}
// echo "<hr>\n";


if ($_REQUEST['size']) {
  $limit = $_REQUEST['size'];
  if ($_GET['p']) { $me = $base."&size=".$_REQUEST['size']; }
  else { $me = $base."&p=".$_GET['p']."&size=".$_REQUEST['size']; }
} else {
  if ($thistotal <= 100) { $limit = 20; }
  else if ($thistotal > 100 && $thistotal <= 250) { $limit = 50; }
  else if ($thistotal > 250 && $thistotal <= 500) { $limit = 100; }
  else if ($thistotal > 500 && $thistotal <= 1000) { $limit = 200; }
  else if ($thistotal > 1000) { $limit = 500; }
}

if (empty($start)) { $start = 0; }
if (empty($limit)) { $limit = 500; }
if ($p) { $start = ($p-1) * $limit; }
$to_record = $start + $limit;
$total = ceil($thistotal/$limit);

if ($to_record > $thistotal) { $to_record = $thistotal; }
$from_record = $start + 1;

$add = " LIMIT $start, $limit";

// Query for auto complete search box
$dd = array();
$q3C = $db->prepare("SELECT * FROM j_respondents WHERE surveyid = :surveyid AND status = 1 AND invitation IS NULL");
$q3C->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
$q3C->execute();
while ($rr = $q3C->fetchObject()) {
  $data["email"] = $rr->email;
  $data["created"] = $rr->created;
  array_push($dd, $data);
}
$dd = json_encode($dd, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);


// Get respondent listing
$tablelist = "";
$q3B = $db->prepare("SELECT * FROM j_respondents WHERE surveyid = :surveyid AND status = 1 AND invitation IS NULL ORDER BY created DESC".$add);
$q3B->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);

// print_r($q3B);
$q3B->execute();
if ($from_record) { $i = $from_record; } else { $i = 1; }
while ($row = $q3B->fetchObject()) {
  $email = $row->email;
  if (!empty($row->invitation)) { $a1 = "<del>"; $a2 = "</del>"; $a3 = "<tr style='background-color:#eee'>"; $disablecheckbox = " disabled"; } else { $a1 = ""; $a2 = ""; $a3 = "<tr>"; $disablecheckbox = ""; }
  if (in_array($email, $duplist)) { $a4 = "<span class=\"label label-danger\">duplicated</span>"; } else { $a4 = ""; }
  $tablelist .= "      $a3\n";
  $tablelist .= "        <td><div class=\"checbox\"><input type=\"checkbox\" name=\"checkbox[]\" id=\"$i\" value=\"$row->id\"$disablecheckbox></div></td>\n";
  $tablelist .= "        <td>$a1$i$a2</td>\n";
  $tablelist .= "        <td>$a1$email$a2 $a4</td>\n";
  if (!empty($row->created)) { $created = ago($row->created); $tablelist .= "      <td style=\"text-align:right\">$a1<i class=\"pe-check pe-fw green\"></i> Yes <small>($created)</small>$a2</td>\n"; } else { $tablelist .= "      <td style=\"text-align:right\">-</td>\n"; }
  if (!empty($row->invitation)) { $invitation = ago($row->invitation); $tablelist .= "      <td style=\"text-align:right\"><i class=\"pe-check pe-fw green\"></i> Sent <small>($invitation)</small></td>\n"; } else { $tablelist .= "      <td style=\"text-align:right\">-</td>\n"; }
  // if (!empty($row->reminder)) { $reminder = ago($row->reminder); $tablelist .= "      <td style=\"text-align:right\">$reminder</td>\n"; } else { $tablelist .= "      <td style=\"text-align:right\">-</td>\n"; }
  // if (!empty($row->participation)) { $participation = ago($row->participation); $tablelist .= "      <td style=\"text-align:right\">$participation</td>\n"; } else { $tablelist .= "      <td style=\"text-align:right\">-</td>\n"; }
  // if (!empty($row->completion)) { $completion = ago($row->completion); $tablelist .= "      <td style=\"text-align:right\">$completion</td>\n"; } else { $tablelist .= "      <td style=\"text-align:right\">-</td>\n"; }
  $i++;
  $tablelist .= "      </tr>\n";
}

if ($showfunction == false) {
  echo "<h4><i class=\"pe-times pe-fw\"></i> Email sending function disabled</h4>\n";
  echo "<p>Because there is no respondent available for sending an invitation, the email sending function is disabled.</p>\n";
  echo mkerror("Once you have added more emails to the system, the email sending function will be reactivated again automatically.");
} else if ($showfunction == true) {
  if ($_GET['m'] == "1") { $message = mksuccess("You have successfully sent an invitation to the selected respondents(s). And the list below has been updated accordingly."); echo "<p>$message</p>\n"; }
  else if ($_GET['m'] == "2") { $message = mkerror("You did not enter the preferred email address, please do it again."); echo "<p>$message</p>\n"; }
  else if ($_GET['m'] == "3") { $message = mksuccess("You have succesfully saved your invitation email message."); echo "<p>$message</p>\n"; }
  else if ($_GET['m'] == "4") { $message = mkerror("Cannot send the invitation with a blank email content. If need, you can use the pre-written template as a quick starter."); echo "<p>$message</p>\n"; }
  else if ($_GET['m'] == "5") { $message = mkerror("You did not select any respondents, so the invitation has not been sent."); echo "<p>$message</p>\n"; }
  else { echo "<br>\n"; }
  echo "<h4><i class=\"pe-edit pe-fw\"></i> Customise the email message</h4>\n";

?>

<form id="target1" method="post" action="<?php echo $base; ?>">
  <div class="row" style="padding: 30px; background: #F9F9F9; border: 3px solid #aaa; border-radius: 30px">
    <div class="col-sm-12">
      <i class="pull-right pe-envelope-o pe-2x"></i>
      <p><strong>Email template</strong></p>
    </div>
    <div class="col-sm-12">
  <?php if (isset($email_i) && (isset($email_iB)) && ($email_i != $defaultemail)) { ?>
      <div>
        <input type="radio" name="choice-email1" value="system" id="choice-default1">
        <label for="choice-default1" class="small">Email to be sent by System default</label>
        <div class="reveal-if-active"><input type="email" name="email_iA" value="<?php echo $defaultemail; ?>" onclick="this.select()" class="form-control input-sm require-if-active" data-require-pair="#choice-default1" readonly></div>
      </div>
      <div>
        <input type="radio" name="choice-email1" value="custom" id="choice-customised1" checked>
        <label for="choice-customised1" class="small">Email to be sent by my preferred email address</label>
        <div class="reveal-if-active"><input type="email" name="email_iB" onclick="this.select()" class="form-control input-sm require-if-active" data-require-pair="#choice-customised1" placeholder="Enter a working email"<?php if (isset($email_i) && ($email_i != $defaultemail)) { echo " value=\"$email_i\""; } ?>></div>
      </div>
      <br>
  <?php } else { ?>
      <div>
        <input type="radio" name="choice-email1" value="system" id="choice-default1" checked>
        <label for="choice-default1" class="small">Email to be sent by System default</label>
        <div class="reveal-if-active"><input type="email" name="email_iA" value="<?php echo $defaultemail; ?>" onclick="this.select()" class="form-control input-sm require-if-active" data-require-pair="#choice-default1" readonly></div>
      </div>
      <div>
        <input type="radio" name="choice-email1" value="custom" id="choice-customised1">
        <label for="choice-customised1" class="small">Email to be sent by my preferred email address</label>
        <div class="reveal-if-active"><input type="email" name="email_iB" onclick="this.select()" class="form-control input-sm require-if-active" data-require-pair="#choice-customised1" placeholder="Enter a working email"<?php if (isset($email_i) && ($email_i != $defaultemail)) { echo " value=\"$email_i\""; } ?>></div>
      </div>
      <br>
  <?php } ?>
    </div>
    <div class="col-xs-0 col-sm-0 col-md-6 col-lg-6 text-right"></div>
    <div class="col-xs-6 col-sm-6 col-md-3 col-lg-3 text-right">Use a pre-written template:</div>
    <div class="col-xs-6 col-sm-6 col-md-3 col-lg-3">
      <select id="templateselect" class="form-control input-sm">
        <option value="">-- Select template --</option>
        <option value="1">Employee survey</option>
        <option value="2">Customer survey</option>
        <option value="3">Member survey</option>
        <option value="0">Blank template</option>
      </select>
      <br>
    </div>
    <div class="col-sm-12">
      <textarea id="firstemail" name="email_i_content" class="form-control input-sm" rows="15"><?php if ($email_i_content) { echo $email_i_content; } ?></textarea>
      <br>
      <p class="small text-muted">You must make sure that you incude the exact word of <strong>[_LINK_]</strong> in the email content because it will be replaced by an unique link/ URL which is generated differently for each respondent. If you are not sure, please check the example from each of the pre-written templates.</p>
      <p class="small text-muted">And you need to save this email before proceeding further to the below respondent selection.</p>
      <p align="right">
        <input type="hidden" name="saveme" value="1">
        <button id="btn-save1" type="button" class="btn btn-sm btn-warning" data-loading-text="<i class='pe-circle-o-notch pe-spin'></i> Saving..." data-reset-text="<i class='pe-save'></i> Saved <i class='pe-check-circle-o'></i>">Save <i class="pe-check-circle-o"></i></button>
        <button type="reset" class="btn btn-sm btn-default">Cancel <i class="pe-times-circle-o"></i></button>
      </p>
    </div>
  </div>
</form>

<script type="text/javascript">
  var link = "[_LINK_]";
  var template1 = "Dear employees,\n\nWe are rolling out the employee survey which you are expected to participate. It is the only tool that provides the management team a clear picture on what needs to be done.\n\nI strongly encourage you to participate and provide your honest opinions. The survey link is provided here: " + link + ".\n\nThe survey period starts from today and will be ended by the end of this month. I hope to receiving a high participation rate from all of you.\n\nRegards,\nJohn Doe (CEO)";
  var template2 = "Dear customers,\n\nThank you for using our services. We would appreciate 2 minutes of your time to answer a few questions about your recent contact with our team regarding the special service on Thursday, May 08, 2016.\n\nYour feedback will help us improve our quality of service.\n\nThe link: " + link + ".\n\nPlease note that this invitation will expire on Wednesday, May 21, 2016.\n\nThank you for your valuable feedback and time.\n\nSincerely yours,\nThe Management Team";
  var template3 = "Dear members,\n\nTo ensure we can maintain offerinh products that are suitable and relevant to your needs, we would like to ask for your opinions with our current products and what else we should consider improving in the near future.\n\nAnd we are happy to give away a free tester product for the first 200 members who complete this survey (first come first serve).\n\nYou can enter this program now by clicking this link: " + link + ".\n\nOn behalf of the company, I would like to say thank you to all members. Without you, we won't have a reason to exist.\n\nAll the best,\nProduct Manager";
  $("#templateselect").change(function() {
    if ($("#templateselect").val() == '1') { $("#firstemail").html(template1); }
    else if ($("#templateselect").val() == '2') { $("#firstemail").html(template2); }
    else if ($("#templateselect").val() == '3') { $("#firstemail").html(template3); }
    else { $("#firstemail").html(""); }
  });
</script>
<br>



<?php

echo "<h4><i class=\"pe-check-square-o pe-fw\"></i> Select respondents</h4>\n";
if ($status0) { echo $email_error; }
if ($duplicated_records) { echo $email_duplicated; }

$me = $base."&size=".$_REQUEST['size'];
$pagination = "<nav class=\"pagination-centered\">\n";
$pagination .= "  <ul class=\"pagination\">\n";
if ($p > 1) { $previous = $p-1; $pagination .= "    <li><a class=\"btn btn-sm\" role=\"button\" href=\"".$me."&p=".$previous."\">&laquo;</a></li>\n"; }
else { $pagination .= "    <li class=\"disabled\"><a class=\"btn btn-sm\" role=\"button\" href=\"\">&laquo;</a></li>\n"; }
for ($i=1; $i <= $total; $i++) {
  if ($i == $p) { $pagination .= "    <li class=\"active\"><a class=\"btn btn-sm\" role=\"button\" href=\"".$me."&p=".$i."\">".$i."</a></li>\n"; }
  else { $pagination .= "    <li><a class=\"btn btn-sm\" role=\"button\" href=\"".$me."&p=".$i."\">".$i."</a></li>\n"; }
}
if ($p != $total) { $next = $p+1; $pagination .= "    <li><a class=\"btn btn-sm\" role=\"button\" href=\"".$me."&p=".$next."\">&raquo;</a></li>\n"; }
else { $pagination .= "    <li class=\"disabled\"><a class=\"btn btn-sm\" role=\"button\" href=\"\">&raquo;</a></li>\n"; }
$pagination .= "  </ul>\n";
$pagination .= "</nav>\n\n";

echo "<div class=\"row\">\n";
echo "  <div class=\"col-sm-4\">\n";
if (!isset($_POST['showbyemail'])) { echo "    Availability: <strong>$thistotal records</strong><br><small>(showing results $from_record to $to_record)</small>\n"; }
else { echo "    <i class=\"pe-times-circle-o\"></i> <a href=\"$base\"><span class=\"grey\"><strong>Remove this filter</strong></a><br><small>(back to show all)</small></span>\n"; }
echo "  </div>\n";
echo "  <div class=\"col-sm-4\">\n";
echo "    <form action=\"$base\" method=\"post\">\n";
echo "      <div class=\"form-group has-feedback\">\n";
echo "        <input type=\"text\" id=\"RDsearchbox\" name=\"showbyemail\" class=\"form-control input-sm\"><i class=\"pe-search form-control-feedback\" aria-hidden=\"true\"></i>\n";
echo "      </div>\n";
echo "    </form>\n";
echo "  </div>\n";
echo "  <div class=\"col-sm-4\" style=\"text-align:right\"><form method=\"post\" class=\"form-inline\" action=\"$base\">\n";
echo "    <small >Select display size:</small>\n";
if (!isset($_POST['showbyemail'])) { echo "    <select class=\"form-control input-sm\" name=\"size\" onchange=\"this.form.submit()\">\n"; }
else { echo "    <select class=\"form-control input-sm\" name=\"size\" onchange=\"this.form.submit()\" disabled>\n"; }
if ($limit == "50") { echo "      <option selected>50</option>\n"; } else { echo "      <option>50</option>\n"; }
if ($limit == "100") { echo "      <option selected>100</option>\n"; } else { echo "      <option>100</option>\n"; }
if ($limit == "300") { echo "      <option selected>300</option>\n"; } else { echo "      <option>300</option>\n"; }
if ($limit == "500") { echo "      <option selected>500</option>\n"; } else { echo "      <option>500</option>\n"; }
echo "    </select>\n";
echo "  </form></div>\n";
echo "</div><br>\n";
?>

<form method="post" action="<?php echo $base; ?>">
  <table class="table table-condensed small">
    <thead>
      <tr class="bg-success">
        <th width="5%"></th>
        <th width="5%">No</th>
        <th width="40%">Respondents</th>
        <th width="25%" style="text-align:right">Upload</th>
        <th width="25%" style="text-align:right">Invitation</th>
      </tr>
    </thead>
    <tbody>
      <tr>
<?php echo $tablelist; ?>
      </tr>
    </tbody>
  </table>
  <input type="hidden" name="m" value="sending">
  <div class="checkbox"><label class="small" style="padding-left:0"><input type="checkbox" name="all" id="all" value=""<?php echo $disablecheckbox; ?>> <i class="pe-level-up pe-flip-horizontal red"></i> Select / deselect all</label></div>
  <button type="submit" class="btn btn-info"><i class="pe-paper-plane pe-fw"></i> Send the invitation</button>
</form>

<?php } ?>

<br>

<?php echo $pagination; ?>

<style media="screen">
  .highlight { background: #f5f5f5; }
</style>

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
    placeholder: "Email search among availability (n=<?php echo $notinvited; ?>)"
  });
  $(document).ready(function() {
    $('#all').click( function () { $('input[type="checkbox"]').not(":disabled").prop('checked', this.checked) })
  });
  $(document).ready(function() {
    $('.progress .progress-bar').css("width", function() { return $(this).attr("aria-valuenow") + "%"; })
  });
  $("input:checkbox").click(function() {
    if ($(this).is(':checked')) { $(this).parent().parent().parent().addClass("highlight"); }
    else { $(this).parent().parent().parent().removeClass("highlight"); }
  });
  $('#btn-save1').on('click', function() {
    var $this = $(this);
    $this.button('loading');
    setTimeout(function() { $this.button('reset'); }, 1000);
    setTimeout(function() { $('#target1').submit(); }, 1200);
  });
  $('#btn-save2').on('click', function() {
    var $this = $(this);
    $this.button('loading');
    setTimeout(function() { $this.button('reset'); }, 1000);
    setTimeout(function() { $('#target2').submit(); }, 1200);
  });
  var FormStuff = {
    init: function() {
      this.applyConditionalRequired();
      this.bindUIActions();
    },
    bindUIActions: function() {
      $("input[type='radio'], input[type='checkbox']").on("change", this.applyConditionalRequired);
    },
    applyConditionalRequired: function() {
      $(".require-if-active").each(function() {
        var el = $(this);
        if ($(el.data("require-pair")).is(":checked")) { el.prop("required", true); }
        else { el.prop("required", false); }
      });
    }
  };
  FormStuff.init();
</script>


<a href="<?php echo $goback; ?>" class="btn btn-warning btn-sm pull-right" style="margin-top:50px; margin-bottom: 20px"><i class="pe-chevron-circle-left pe-fw"></i> Back to respondent page</a>

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
