<?php

$base = "/admin/?w=respondents&s=".$_GET['s'];
if ($_GET['p']) { $p = $_GET['p']; $me = $base."&p=".$_GET['p']; }
if ($p == '') { $p = "1"; }

$help = "<div class=\"alert alert-info alert-dismissible\" role=\"alert\"><a class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>\n";
$help .= "  <h4><i class=\"pe-lightbulb-o pe-fw pe-lg\"></i> What is CSV file and how to create one</h4>\n";
$help .= "  <p>A <strong>CSV</strong> file is a <em>comma separated values</em> file, which allows data to be saved in a table structured format. CSVs look like a garden-variety spreadsheet but with a <strong>.csv extension</strong>. Traditionally they take the form of a text file containing information separated by commas, hence the name.</p>\n";
$help .= "  <p>CSV files can be used with any spreadsheet program, such as Microsoft Excel, Open Office Calc, or Google Spreadsheets. They differ from other spreadsheet file types in that you can only have a single sheet in a file, they can not save cell, column, or row styling, and can not save formulas.</p>\n";
$help .= "  <p>To create a CSV file, it is as simple as below instructions:</p>\n";
$help .= "  <ul class=\"pe-ul\">\n";
$help .= "    <li><i class=\"pe-li pe-check-square\"></i> Create a new Microsoft Excel file</li>\n";
$help .= "    <li><i class=\"pe-li pe-check-square\"></i> Put all emails into the first column (Column A) by having one email per row</li>\n";
$help .= "    <li><i class=\"pe-li pe-check-square\"></i> If you copy from other files, you do not have to delete data in other columns. Our system will handle that for you.</li>\n";
$help .= "    <li><i class=\"pe-li pe-check-square\"></i> Save the file by choosing <strong>Save As</strong> and then choose CSV format.</li>\n";
$help .= "  </ul>\n";
$help .= "</div>\n";

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
  $q = $db->prepare("INSERT INTO j_users_logs (userid, ip, data, critical) VALUE (:userid, :ip, '" . $_SESSION["email"] . " tried accessing a non-existing project', '5')");
  $q->bindValue(':userid', $_SESSION["userid"], PDO::PARAM_INT);
  $q->bindValue(':ip', $_SESSION["ip"], PDO::PARAM_INT);
  $q->execute();
  exit;
}
while ($row = $q1->fetchObject()) { $project = $row->title; $status = $row->status; }
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

if ($_POST['uploading'] == 1) {
  if (empty($_POST['surveyid'])) { echo "Cannot proceed without a surveyid"; }
  else if (is_uploaded_file($_FILES['csvfilename']['tmp_name'])) {
    $fieldseparator = ",";
    $lineseparator = "\n";
    $uploaddir = "/www/default/siamsquare.org/admin/assets/upload/".$_POST['surveyid']."/";
    if(!is_dir($uploaddir)){ mkdir($uploaddir); }
    // $uploaddir = "/www/default/siamsquare.org/admin/assets/upload/";
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
    try { $db = new PDO('mysql:host='. DB_HOST .';dbname='. DB_DATABASE . ';charset=utf8', DB_USER, DB_PASS, array(PDO::MYSQL_ATTR_LOCAL_INFILE => true, PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION)); }
    catch (PDOException $e) { die("database connection failed: ".$e->getMessage()); }
    $affectedRows = $db->exec("LOAD DATA LOCAL INFILE ".$db->quote($rewritefile)." INTO TABLE j_respondents FIELDS TERMINATED BY ".$db->quote($fieldseparator)." LINES TERMINATED BY ".$db->quote($lineseparator));
    $ql1 = $db->prepare("INSERT INTO j_users_logs (userid, ip, data, critical) VALUE (:userid, :ip, '".$_SESSION['email']." uploaded a name list of respondents for $project', '3')");
    $ql1->bindValue(':userid', $_SESSION['userid'], PDO::PARAM_INT);
    $ql1->bindValue(':ip', $_SESSION['ip'], PDO::PARAM_STR);
    $ql1->execute();
  }
  header("location: $base");
} else if ($_POST['m'] == "fixerrors") {
  $q2A = $db->prepare("DELETE FROM j_respondents WHERE surveyid = 0 OR surveyid = :surveyid AND status = 0");
  $q2A->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
  $q2A->execute();
  $ql2 = $db->prepare("INSERT INTO j_users_logs (userid, ip, data, critical) VALUE (:userid, :ip, '".$_SESSION['email']." deleted respondent emails with errors for $project', '3')");
  $ql2->bindValue(':userid', $_SESSION['userid'], PDO::PARAM_INT);
  $ql2->bindValue(':ip', $_SESSION['ip'], PDO::PARAM_STR);
  $ql2->execute();
  header("location: $base");
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
  $ql3 = $db->prepare("INSERT INTO j_users_logs (userid, ip, data, critical) VALUE (:userid, :ip, '".$_SESSION['email']." deleted respondent duplicated emails for $project', '3')");
  $ql3->bindValue(':userid', $_SESSION['userid'], PDO::PARAM_INT);
  $ql3->bindValue(':ip', $_SESSION['ip'], PDO::PARAM_STR);
  $ql3->execute();
  header("location: $base");
} else if ($_POST['m'] == "delthis") {
  $ids = implode(",", $_POST['checkbox']);
  $q2C = $db->prepare("DELETE FROM j_respondents WHERE id IN ($ids)");
  $q2C->execute();
  $ql4 = $db->prepare("INSERT INTO j_users_logs (userid, ip, data, critical) VALUE (:userid, :ip, '".$_SESSION['email']." manually deleted respondent emails for $project', '3')");
  $ql4->bindValue(':userid', $_SESSION['userid'], PDO::PARAM_INT);
  $ql4->bindValue(':ip', $_SESSION['ip'], PDO::PARAM_STR);
  $ql4->execute();
  header("location: $base");
}

if (empty($_GET['s'])) { pageHeader("Error"); echo mkerror("Cannot proceed without a surveyid"); pageFooter(); exit; }

$title = "Manage respondents";
pageHeader($title);
echo "<h2>$title</h2>";
echo "<p>Given a nature of any private surveys where respondents are specific to the project, we provide you with a tool that helps visualising on the management of respondents.</p>\n";
echo "<p>Please note this page is mainly for managing respondents, if you want to check for participation rate, kindly use the project status instead.</p>\n";
echo "<hr>\n";
echo "<h3>Project $project</h3>\n";


// Get status
$q2 = $db->prepare("SELECT COUNT(*) as iA, SUM(status='0') AS iB, SUM(status='1') AS iC, SUM(status='2') AS iD, SUM(status='3') AS iE FROM j_respondents WHERE surveyid = :surveyid");
$q2->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
$q2->execute();
while ($row = $q2->fetchObject()) {
  $status0s = $row->iA; $status0 = $row->iB; $status1 = $row->iC;
  $status2 = $row->iD; $status3 = $row->iE;
}

$rows = $status0s;

if ($_REQUEST['size']) {
  $limit = $_REQUEST['size'];
  if ($_GET['p']) { $me = $base."&size=".$_REQUEST['size']; }
  else { $me = $base."&p=".$_GET['p']."&size=".$_REQUEST['size']; }
} else {
  if ($rows <= 100) { $limit = 20; }
  else if ($rows > 100 && $rows <= 250) { $limit = 50; }
  else if ($rows > 250 && $rows <= 500) { $limit = 100; }
  else if ($rows > 500 && $rows <= 1000) { $limit = 200; }
  else if ($rows > 1000) { $limit = 500; }
}

if (empty($start)) { $start = 0; }
if (empty($limit)) { $limit = 500; }
if ($p) { $start = ($p-1) * $limit; }
$to_record = $start + $limit;
$total = ceil($rows/$limit);
$add = " LIMIT $start, $limit ";

if ($to_record > $rows) { $to_record = $rows; }
$from_record = $start + 1;

// Get respondent error list
$q3A = $db->prepare("SELECT * FROM j_respondents WHERE surveyid = :surveyid AND status = 0");
$q3A->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
$q3A->execute();
while ($row = $q3A->fetchObject()) { $errorlist[] = $row->email; }
$email_error = "<div class=\"alert alert-warning alert-dismissible\" role=\"alert\"><a class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>\n";
$email_error .= "  <h4><i class=\"pe-exclamation-triangle pe-fw pe-lg\"></i> Found respondents with invalid email format</h4>\n";
$email_error .= "  <p>We detect <strong>$status0 respondents</strong> that appear to have an error in their email format, and hence cannot be used. Please correct their emails and upload them again.</p>\n";
$email_error .= "  <p>We display them in the table below with a <del>strike through</del> format so you can spot them instantly.</p>\n";
$email_error .= "  <p>Alternatively you can also <a data-toggle=\"collapse\" href=\"#showerrors\" aria-expanded=\"false\" class=\"alert-link\">click here <i class=\"pe-arrow-circle-down pe-fw\"></i></a> to see them all in one big list (click again to close).</p>\n";
$email_error .= "  <div class=\"collapse\" id=\"showerrors\"><div class=\"well small\">";
for($x = 0; $x < count($errorlist); $x++) { $email_error .= $errorlist[$x].", "; }
$email_error .= "</div></div>\n";
$email_error .= "  <form action=\"$base\" method=\"post\"><button type=\"submit\" name=\"m\" value=\"fixerrors\" class=\"btn btn-warning\">Click here to remove errors</button></form>\n";
$email_error .= "</div>\n";


// Get respondent listing
$tablelist = "";
$q3B = $db->prepare("SELECT * FROM j_respondents WHERE surveyid = :surveyid".$add);
$q3B->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
$q3B->execute();
if ($from_record) { $i = $from_record; } else { $i = 1; }
while ($row = $q3B->fetchObject()) {
  if ($row->status == 0) { $a1 = "<del>"; $a2 = "</del>"; $a3 = "<tr style='background-color:#eee'>"; } else { $a1 = ""; $a2 = ""; $a3 = "<tr>"; }
  $tablelist .= "      $a3\n";
  $tablelist .= "        <td><input type=\"checkbox\" name=\"checkbox[]\" id=\"$i\" value=\"$row->id\"$disablecheckbox></td>\n";
  $tablelist .= "        <td>$a1$i$a2</td>\n";
  $tablelist .= "        <td>$a1$row->email$a2</td>\n";
  if (!empty($row->created)) { $created = ago($row->created); $tablelist .= "      <td style=\"text-align:right\">$a1$created$a2</td>\n"; } else { $tablelist .= "      <td style=\"text-align:right\">-</td>\n"; }
  if (!empty($row->$invited1)) { $invited1 = ago($row->$invited1); $tablelist .= "      <td style=\"text-align:right\">$invited1</td>\n"; } else { $tablelist .= "      <td style=\"text-align:right\">-</td>\n"; }
  if (!empty($row->$invited2)) { $invited2 = ago($row->$invited2); $tablelist .= "      <td style=\"text-align:right\">$invited2</td>\n"; } else { $tablelist .= "      <td style=\"text-align:right\">-</td>\n"; }
  if (!empty($row->$viewed)) { $viewed = ago($row->$viewed); $tablelist .= "      <td style=\"text-align:right\">$viewed</td>\n"; } else { $tablelist .= "      <td style=\"text-align:right\">-</td>\n"; }
  if (!empty($row->$completed)) { $completed = ago($row->$completed); $tablelist .= "      <td style=\"text-align:right\">$completed</td>\n"; } else { $tablelist .= "      <td style=\"text-align:right\">-</td>\n"; }
  $i++;
  $tablelist .= "      </tr>\n";
}

// Check duplications
$q4 = $db->prepare("SELECT COUNT(*) as duplicates, id, email, invited1 FROM j_respondents WHERE surveyid = :surveyid GROUP BY email HAVING duplicates > 1");
$q4->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
$q4->execute();
$e = array(); $f = array(); $g = array(); //$h = array();
while ($r = $q4->fetchObject()) {
  $duplist[] = $r->email;
  $invited1 = $r->invited1;
  array_push($e, $r->email);
  array_push($f, $r->duplicates);
  array_push($g, $r->id);
}
if ($invited1) { $disablecheckbox = " disabled"; } else { $disablecheckbox = ""; }
$c = array_combine($e, $f);
$duplicated_records = count($c);
$email_duplicated = "<div class=\"alert alert-warning alert-dismissible\" role=\"alert\"><a class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>\n";
$email_duplicated .= "  <h4><i class=\"pe-exclamation-triangle pe-fw pe-lg\"></i> Found respondents with duplicated emails</h4>\n";
$email_duplicated .= "  <p>We also detected <strong>$duplicated_records respondents</strong> that have duplicated emails as shown below.</p>";
$email_duplicated .= "  <ul class=\"pe-ul\">\n";
$d = array_count_values($c);
arsort($d);
foreach ($d as $dd => $ddd) {
  $email_duplicated .= "    <li><i class=\"pe-li pe-check-square\"></i> $ddd respondents with $dd emails</li>";
  // echo $ddd;
}
$email_duplicated .= "  </ul>\n";
$email_duplicated .= "  <p>You can <a data-toggle=\"collapse\" href=\"#showduplicates\" aria-expanded=\"false\" class=\"alert-link\">click here <i class=\"pe-arrow-circle-down pe-fw\"></i></a> to see them all in one big list (click again to close).</p>\n";
$email_duplicated .= "  <div class=\"collapse\" id=\"showduplicates\"><div class=\"well small\">";
for($x = 0; $x < count($duplist); $x++) { $email_duplicated .= $duplist[$x].", "; }
$email_duplicated .= "</div></div>\n";
$email_duplicated .= "  <form action=\"$base\" method=\"post\"><button type=\"submit\" name=\"m\" value=\"fixduplicates\" class=\"btn btn-warning\">Click here to remove duplicates</button></form>\n";
$email_duplicated .= "</div>\n";


if ($total == 0) {
  echo "<p>Currently this project has <strong>no respondent</strong> stored in our database.</p>\n";
  echo "<p>Please upload with a Comma Separated Value (CSV) file that at least contains a list of emails in a column.</p>";
  echo "<p></p>\n";
  echo "<p align=\"right\"><a class=\"btn btn-primary\" href=\"\" data-toggle=\"modal\" data-target=\"#uploading\"><i class=\"pe-upload pe-fw\"></i> Upload a name list</a></p>\n";
  echo "<br>\n";
  echo $help;
} else {
  echo "<p>Currently this project has <strong>$rows respondents</strong> stored in our database.</p>\n";
  if ($status0) { echo $email_error; }
  if ($duplicated_records) { echo $email_duplicated; }
  // echo "<br>";
  echo "<p>Please see table below for more information about these respodnents. And of course, you can always use the upload function to add more respondents to the project if need.</p>\n";
  // echo "<p></p>\n";
  // echo "<p></p>\n";
  // echo "<p align=\"right\"><a class=\"btn btn-primary\" href=\"\" data-toggle=\"modal\" data-target=\"#uploading\"><i class=\"pe-upload pe-fw\"></i> Upload a name list</a></p>\n";

  echo "<div class=\"row\" style=\"margin-top:30px\">\n";
  echo "  <div class=\"col-sm-6 form-group has-feedback\">\n";
  echo "    <form action=\"$base\" method=\"post\">\n";
  echo "      <input type=\"text\" id=\"countries\" name=\"RDsearch\" class=\"form-control\"><i class=\"pe-search form-control-feedback\" aria-hidden=\"true\"></i>\n";
  echo "    </form>\n";
  echo "  </div>\n";
  echo "  <div class=\"col-sm-6\" style=\"text-align:right\">\n";
  echo "    <a class=\"btn btn-primary\" href=\"\" data-toggle=\"modal\" data-target=\"#uploading\"><i class=\"pe-upload pe-fw\"></i> Upload a name list</a>\n";
  echo "  </div>\n";
  echo "</div>\n";

  $me = $base."&size=".$_REQUEST['size'];
  echo "<nav class=\"pagination-centered\">\n";
  echo "  <ul class=\"pagination\">\n";
  if ($p > 1) { $previous = $p-1; echo "    <li><a class=\"btn btn-sm\" role=\"button\" href=\"".$me."&p=".$previous."\">&laquo;</a></li>\n"; }
  else { echo "    <li class=\"disabled\"><a class=\"btn btn-sm\" role=\"button\" href=\"\">&laquo;</a></li>\n"; }
  for ($i=1; $i<=$total; $i++) {
    if ($i == $p) { echo "    <li class=\"active\"><a class=\"btn btn-sm\" role=\"button\" href=\"".$me."&p=".$i."\">".$i."</a></li>\n"; }
    else { echo "    <li><a class=\"btn btn-sm\" role=\"button\" href=\"".$me."&p=".$i."\">".$i."</a></li>\n"; }
  }
  if ($p != $total) { $next = $p+1; echo "    <li><a class=\"btn btn-sm\" role=\"button\" href=\"".$me."&p=".$next."\">&raquo;</a></li>\n"; }
  else { echo "    <li class=\"disabled\"><a class=\"btn btn-sm\" role=\"button\" href=\"\">&raquo;</a></li>\n"; }
  echo "  </ul>\n";
  echo "</nav>\n\n";

  echo "<div class=\"row\">\n";
  echo "  <div class=\"col-sm-6\">\n";
  echo "    <span class=\"blue\">Found <strong>$rows records</strong><br><small>(showing results $from_record to $to_record)</small></span>\n";
  echo "  </div>\n";
  echo "  <div class=\"col-sm-6\" style=\"text-align:right\"><form method=\"post\" class=\"form-inline\" action=\"$me\">\n";
  echo "    <small >Select display size:</small>\n";
  echo "    <select class=\"form-control input-sm\" name=\"size\" onchange=\"this.form.submit()\">\n";
  if ($limit == "50") { echo "      <option selected>50</option>\n"; } else { echo "      <option>50</option>\n"; }
  if ($limit == "100") { echo "      <option selected>100</option>\n"; } else { echo "      <option>100</option>\n"; }
  if ($limit == "300") { echo "      <option selected>300</option>\n"; } else { echo "      <option>300</option>\n"; }
  if ($limit == "500") { echo "      <option selected>500</option>\n"; } else { echo "      <option>500</option>\n"; }
  if ($limit == "1000") { echo "      <option selected>1000</option>\n"; } else { echo "      <option>1000</option>\n"; }
  echo "    </select>\n";
  echo "  </form></div>\n";
  echo "</div><br>\n";
?>

  <form method="post" action="<?php echo $me; ?>">
    <table class="table table-hover table-condensed small">
      <thead>
        <tr class="bg-primary">
          <th width="5%"></th>
          <th width="5%">No</th>
          <th width="25%">Respondents</th>
          <th width="13%" style="text-align:right">Uploaded</th>
          <th width="13%" style="text-align:right">Invite sent?</th>
          <th width="13%" style="text-align:right">Invite resent?</th>
          <th width="13%" style="text-align:right">Participated?</th>
          <th width="13%" style="text-align:right">Completed?</th>
        </tr>
      </thead>
      <tbody>
        <tr>
<?php echo $tablelist; ?>
        </tr>
      </tbody>
    </table>
    <input type="hidden" name="m" value="delthis">
    <div><small><input type="checkbox" name="all" id="all" value=""<?php echo $disablecheckbox; ?>> <i class="pe-level-up pe-flip-horizontal"></i> Select / deselect all</small></div>
    <button type="submit" class="btn-xs btn-danger"><i class="pe-trash pe-fw"></i> Delete selected</button>
  </form>

<?php } ?>

<div class="modal fade" id="uploading" tabindex="-1" role="dialog" aria-labelledby="uploading">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <form class="" action="" method="post" enctype="multipart/form-data">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title">Upload a name list</h4>
        </div>
        <div class="modal-body">
          <p>Use this tool to upload many names/emails at once. And the file must be in the exact format as described below, otherwise the upload process will not work.</p>
          <label class="btn btn-default btn-sm">Browse <input type="file" name="csvfilename" style="display:none" onchange="$('#upload-file-info').html($(this).val());"></label>
          <kbd id="upload-file-info">Please select a CSV file</kbd>
          <p></p>
          <div class="input-group">
            <span class="input-group-addon"><i class="pe-envelope pe-fw"></i> Column contains email:</span>
            <select class="form-control" name="colemail">
              <option value="">-- choose --</option>
              <option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option>
              <option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option>
              <option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option>
              <option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option>
              <option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option>
            </select>
          </div>
        </div>
        <div class="modal-footer">
          <input type="hidden" name="surveyid" value="<?php echo $_GET['s']; ?>">
          <button type="submit" class="btn btn-warning" name="uploading" value="1">Upload <i class="pe-check-circle-o"></i></button>
          <button type="reset" class="btn btn-default" data-dismiss="modal">Cancel <i class="pe-times-circle-o"></i></button>
        </div>
      </form>
    </div>
  </div>
</div>

<br>

<?php

if ($total != 0) {
  $me = "/admin/?w=respondents&s=".$_GET['s'];
  echo "<nav class=\"pagination-centered\">\n";
  echo "  <ul class=\"pagination\">\n";
  if ($p > 1) { $previous = $p-1; echo "    <li><a class=\"btn btn-sm\" role=\"button\" href=\"".$me."&p=".$previous."\">&laquo;</a></li>\n"; }
  else { echo "    <li class=\"disabled\"><a class=\"btn btn-sm\" role=\"button\" href=\"\">&laquo;</a></li>\n"; }
  for ($i=1; $i<=$total; $i++) {
    if ($i == $p) { echo "    <li class=\"active\"><a class=\"btn btn-sm\" role=\"button\" href=\"".$me."&p=".$i."\">".$i."</a></li>\n"; }
    else { echo "    <li><a class=\"btn btn-sm\" role=\"button\" href=\"".$me."&p=".$i."\">".$i."</a></li>\n"; }
  }
  if ($p != $total) { $next = $p+1; echo "    <li><a class=\"btn btn-sm\" role=\"button\" href=\"".$me."&p=".$next."\">&raquo;</a></li>\n"; }
  else { echo "    <li class=\"disabled\"><a class=\"btn btn-sm\" role=\"button\" href=\"\">&raquo;</a></li>\n"; }
  echo "  </ul>\n";
  echo "</nav>\n\n";
}

?>

<style media="screen">
  .pe-search { position: absolute; top: 0; right: 15px; z-index: 5; color: #aaaaaa; }
  .easy-autocomplete { position: relative; z-index: 5}
  .easy-autocomplete input { border-color: #ccc; border-radius: 4px; border-style: solid; border-width: 1px; box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1) inset; color: #555; float: none; padding: 6px 12px; }
  .easy-autocomplete input:hover, .easy-autocomplete input:focus { box-shadow: none; }
  .easy-autocomplete a { display: block; }
  .easy-autocomplete.eac-blue-light input:hover, .easy-autocomplete.eac-blue-light input:focus { border-color: #66afe9; box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(102, 175, 233, 0.6); }
  .easy-autocomplete.eac-blue-light ul { border-color: #66afe9; box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(102, 175, 233, 0.6); }
  .easy-autocomplete.eac-blue-light ul li, .easy-autocomplete.eac-blue-light ul .eac-category { border-color: #66afe9; }
  .easy-autocomplete.eac-blue-light ul li.selected, .easy-autocomplete.eac-blue-light ul .eac-category.selected { background-color: #ecf5fc; }
  .easy-autocomplete.eac-green-light input:hover, .easy-autocomplete.eac-green-light input:focus { border-color: #41DB00; box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(146, 237, 107, 0.6); }
  .easy-autocomplete.eac-green-light ul { border-color: #41DB00; box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(146, 237, 107, 0.6); }
  .easy-autocomplete.eac-green-light ul li, .easy-autocomplete.eac-green-light ul .eac-category { border-color: #41DB00; }
  .easy-autocomplete.eac-green-light ul li.selected, .easy-autocomplete.eac-green-light ul .eac-category.selected { background-color: #9eff75; }
  .easy-autocomplete.eac-red-light input:hover, .easy-autocomplete.eac-red-light input:focus { border-color: #ff5b5b; box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(255, 90, 90, 0.6); }
  .easy-autocomplete.eac-red-light ul { border-color: #ff5b5b; box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(255, 90, 90, 0.6); }
  .easy-autocomplete.eac-red-light ul li, .easy-autocomplete.eac-red-light ul .eac-category { border-color: #ff5b5b; }
  .easy-autocomplete.eac-red-light ul li.selected, .easy-autocomplete.eac-red-light ul .eac-category.selected { background-color: #ff8e8e; }
  .easy-autocomplete.eac-yellow-light input:hover, .easy-autocomplete.eac-yellow-light input:focus { border-color: #ffdb00; box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(255, 231, 84, 0.6); }
  .easy-autocomplete.eac-yellow-light ul { border-color: #ffdb00; box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(255, 231, 84, 0.6); }
  .easy-autocomplete.eac-yellow-light ul li, .easy-autocomplete.eac-yellow-light ul .eac-category { border-color: #ffdb00; }
  .easy-autocomplete.eac-yellow-light ul li.selected, .easy-autocomplete.eac-yellow-light ul .eac-category.selected { background-color: #ffe233; }
  .easy-autocomplete.eac-dark-light input:hover, .easy-autocomplete.eac-dark-light input:focus { border-color: #333; box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(55, 55, 55, 0.6); }
  .easy-autocomplete.eac-dark-light ul { border-color: #333; box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(55, 55, 55, 0.6); }
  .easy-autocomplete.eac-dark-light ul li, .easy-autocomplete.eac-dark-light ul .eac-category { border-color: #333; }
  .easy-autocomplete.eac-dark-light ul li.selected, .easy-autocomplete.eac-dark-light ul .eac-category.selected { background-color: #4d4d4d; color: #fff; }
  .easy-autocomplete.eac-dark { color: #fff; }
  .easy-autocomplete.eac-dark input { background-color: #404040; border-radius: 4px; box-shadow: 0; color: #f6f6f6; }
  .easy-autocomplete.eac-dark input:hover, .easy-autocomplete.eac-dark input:focus { border-color: #333; box-shadow: 0; }
  .easy-autocomplete.eac-dark ul { border-color: #333; }
  .easy-autocomplete.eac-dark ul li, .easy-autocomplete.eac-dark ul .eac-category { background-color: #404040; border-color: #333; }
  .easy-autocomplete.eac-dark ul li.selected, .easy-autocomplete.eac-dark ul .eac-category.selected { background-color: #737373; color: #f6f6f6; }
  .easy-autocomplete.eac-dark-glass { color: #fff; }
  .easy-autocomplete.eac-dark-glass input { background-color: rgba(0, 0, 0, 0.8); border-radius: 4px; box-shadow: 0; color: #f6f6f6; }
  .easy-autocomplete.eac-dark-glass input:hover, .easy-autocomplete.eac-dark-glass input:focus { border-color: rgba(0, 0, 0, 0.8); box-shadow: 0; }
  .easy-autocomplete.eac-dark-glass ul { border-color: rgba(0, 0, 0, 0.8); }
  .easy-autocomplete.eac-dark-glass ul li, .easy-autocomplete.eac-dark-glass ul .eac-category { background-color: rgba(0, 0, 0, 0.8); border-color: rgba(0, 0, 0, 0.8); }
  .easy-autocomplete.eac-dark-glass ul li.selected, .easy-autocomplete.eac-dark-glass ul .eac-category.selected { background-color: rgba(64, 64, 64, 0.8); color: #f6f6f6; }
  .easy-autocomplete.eac-dark-glass ul li:last-child, .easy-autocomplete.eac-dark-glass ul .eac-category:last-child { border-radius: 0 0 4px 4px; }
  .easy-autocomplete.eac-blue { color: #fff; }
  .easy-autocomplete.eac-blue input { background-color: #6d9ed1; border-radius: 4px; box-shadow: 0; color: #f6f6f6; }
  .easy-autocomplete.eac-blue input::-webkit-input-placeholder { color: #f6f6f6; }
  .easy-autocomplete.eac-blue input:-moz-placeholder { color: #f6f6f6; }
  .easy-autocomplete.eac-blue input::-moz-placeholder { color: #f6f6f6; }
  .easy-autocomplete.eac-blue input:-ms-input-placeholder { color: #f6f6f6; }
  .easy-autocomplete.eac-blue input:hover, .easy-autocomplete.eac-blue input:focus { border-color: #5A91CB; box-shadow: 0; }
  .easy-autocomplete.eac-blue ul { border-color: #5A91CB; }
  .easy-autocomplete.eac-blue ul li, .easy-autocomplete.eac-blue ul .eac-category { background-color: #6d9ed1; border-color: #5A91CB; }
  .easy-autocomplete.eac-blue ul li.selected, .easy-autocomplete.eac-blue ul .eac-category.selected { background-color: #94b8dd; color: #f6f6f6; }
  .easy-autocomplete.eac-yellow { color: #333; }
  .easy-autocomplete.eac-yellow input { background-color: #ffdb7e; border-color: #333; border-radius: 4px; box-shadow: 0; color: #333; }
  .easy-autocomplete.eac-yellow input:hover, .easy-autocomplete.eac-yellow input:focus { border-color: #333; box-shadow: 0; }
  .easy-autocomplete.eac-yellow ul { border-color: #333; }
  .easy-autocomplete.eac-yellow ul li, .easy-autocomplete.eac-yellow ul .eac-category { background-color: #ffdb7e; border-color: #333; }
  .easy-autocomplete.eac-yellow ul li.selected, .easy-autocomplete.eac-yellow ul .eac-category.selected { background-color: #ffe9b1; color: #333; }
  .easy-autocomplete.eac-purple { color: #333; }
  .easy-autocomplete.eac-purple input { background-color: #d6d1e7; border-color: #b8afd5; box-shadow: 0; color: #333; }
  .easy-autocomplete.eac-purple input:hover, .easy-autocomplete.eac-purple input:focus { border-color: #333; box-shadow: 0; }
  .easy-autocomplete.eac-purple ul { border-color: #333; }
  .easy-autocomplete.eac-purple ul li, .easy-autocomplete.eac-purple ul .eac-category { background-color: #d6d1e7; border-color: #333; }
  .easy-autocomplete.eac-purple ul li.selected, .easy-autocomplete.eac-purple ul .eac-category.selected { background-color: #ebe8f3; color: #333; }
  .easy-autocomplete.eac-bootstrap input { border-color: #ccc; border-radius: 4px; border-style: solid; border-width: 1px; color: #555; padding: 6px 12px; }
  .easy-autocomplete-container { left: 0; position: absolute; width: 100%; z-index: 2; }
  .easy-autocomplete-container ul { background: none repeat scroll 0 0 #ffffff; border-top: 1px dotted #ccc; display: none; margin-top: 0; padding-bottom: 0; padding-left: 0; position: relative; top: -1px; }
  .easy-autocomplete-container ul li, .easy-autocomplete-container ul .eac-category { background: inherit; border-color: #ccc; border-image: none; border-style: solid; border-width: 0 1px; display: block; font-size: 14px; font-weight: normal; padding: 4px 12px; }
  .easy-autocomplete-container ul li:last-child { border-radius: 0 0 2px 2px; border-width: 0 1px 1px; }
  .easy-autocomplete-container ul li.selected { background: none repeat scroll 0 0 #ebebeb; cursor: pointer; }
  .easy-autocomplete-container ul li.selected div { font-weight: normal; }
  .easy-autocomplete-container ul li div { display: block; font-weight: normal; word-break: break-all; }
  .easy-autocomplete-container ul li b { font-weight: bold; }
  .easy-autocomplete-container ul .eac-category { font-color: #aaa; font-style: italic; }
  .eac-description .eac-item span { color: #aaa; font-style: italic; font-size: 0.9em; }
  .eac-icon-left .eac-item img { margin-right: 4px; max-height: 30px; }
  .eac-icon-right .eac-item { margin-top: 8px; min-height: 24px; position: relative; }
  .eac-icon-right .eac-item img { margin-left: 4px; max-height: 30px; position: absolute; right: -4px; top: -8px; }
</style>


<script type="text/javascript">
  var surveyid = <?php echo $_GET['s']; ?>;
  $('#confirm-delete').on('show.bs.modal', function(e) {
    $(this).find('.btn-ok').attr('href', $(e.relatedTarget).data('href'));
  });
  var options = {
    url: "http://www.siamsquare.org.uk/respondent/" + surveyid,
    getValue: "email",
    // template: {
    //   type: "description",
    //   fields: {
    //     description: "created"
    //   }
    // },
    list: {
      maxNumberOfElements: 10,
      // onLoadEvent: function() {
      //   moment.locale('en');
      //   var s1 = moment(created).fromNow();
      //   var s2 = moment(created).format("D MMM YYYY");
      //   created = s2 + ' (' + s1 + ')';
      // },
      match: {
        enabled: true
      },
      showAnimation: {
        type: "fade", //normal|slide|fade
        time: 400,
        callback: function() {}
      },
      hideAnimation: {
        type: "slide", //normal|slide|fade
        time: 400,
        callback: function() {}
      }
    },
    theme: "bootstrap",
    placeholder: "Search for an email in our database"
  };
  $("#countries").easyAutocomplete(options);
</script>

<script type="text/javascript">
  $(document).ready(function(){
    $('#all').click( function () {
      $('input[type="checkbox"]').prop('checked', this.checked)
    })
  });
</script>

<a href="/admin/?w=surveys" class="btn btn-danger btn-sm pull-right" style="margin-top:50px; margin-bottom: 20px"><i class="pe-chevron-circle-left pe-fw"></i> Back to the main page</a>

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
