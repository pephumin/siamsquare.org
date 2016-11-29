<?php

$me = "/admin/?w=respondents&s=".$_GET['s'];
if ($_GET['p']) { $p = $_GET['p']; }
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

require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/config.php';
$db = new PDO('mysql:host='. DB_HOST .';dbname='. DB_DATABASE . ';charset=utf8', DB_USER, DB_PASS);

// Get projcet title
$q1 = $db->prepare("SELECT title FROM j_projects WHERE id = :surveyid");
$q1->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
$q1->execute();
while ($row = $q1->fetchObject()) { $project = $row->title; }

if ($_POST['uploading'] == 1) {
  if (empty($_POST['surveyid'])) { echo "Cannot proceed without a surveyid"; }
  else if (is_uploaded_file($_FILES['csvfilename']['tmp_name'])) {
    $fieldseparator = ",";
    $lineseparator = "\n";
    $uploaddir = "/www/default/siamsquare.org/admin/assets/upload/";
    $uploadfile = $uploaddir.basename($_FILES['csvfilename']['name']);
    $rewritefile = $uploaddir."N-".basename($_FILES['csvfilename']['name']);
    move_uploaded_file($_FILES['csvfilename']['tmp_name'], $uploadfile);
    $input = fopen($uploadfile, 'r'); $output = fopen($rewritefile, 'w');
    while (($data = fgetcsv($input, 1000, ",")) !== FALSE) {
      $e0 = $_POST['colemail']-1; $e1 = $_POST['surveyid'];
      $data[$e0] = trim(strtolower($data[$e0]));
      $data[$e0] = str_replace(' ', '', $data[$e0]);
      $e2 = generateRandomString(13);
      if (filter_var($data[$e0], FILTER_VALIDATE_EMAIL)) { $newdata = "".$fieldseparator.$data[$e0].$fieldseparator.$e2.$fieldseparator."1".$fieldseparator.$e1.$fieldseparator.$lineseparator; }
      else { $newdata = "".$fieldseparator.$data[$e0].$fieldseparator.$e2.$fieldseparator."0".$fieldseparator.$e1.$fieldseparator.$lineseparator; }
      fwrite($output, $newdata);
    }
    fclose($input);
    fclose($output);
    try { $db = new PDO('mysql:host='. DB_HOST .';dbname='. DB_DATABASE . ';charset=utf8', DB_USER, DB_PASS, array(PDO::MYSQL_ATTR_LOCAL_INFILE => true, PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION)); }
    catch (PDOException $e) { die("database connection failed: ".$e->getMessage()); }
    $affectedRows = $db->exec("LOAD DATA LOCAL INFILE ".$db->quote($rewritefile)." INTO TABLE j_respondents_private FIELDS TERMINATED BY ".$db->quote($fieldseparator)." LINES TERMINATED BY ".$db->quote($lineseparator));
    //echo "done";
  }
}

if (empty($_GET['s'])) { pageHeader("Error"); echo mkerror("Cannot proceed without a surveyid"); pageFooter(); exit; }

$title = "Manage respondents";
pageHeader($title);
echo "<h2>$title</h2>";
echo "<p>Given a nature of any private surveys where respondents are specific to the project, we provide you with a tool that helps visualising on the management of respondents.</p>\n";
echo "<p>Please note this page is mainly for managing respondents, if you want to check for participation rate, kindly use the project status instead.</p>\n";
echo "<hr>\n";
echo "<h3>Project $project</h3>\n";

if (empty($start)) { $start = 0; }
if (empty($limit)) { $limit = 1000; }
if ($p) { $start = ($p-1) * $limit; }
$to_record = $start + $limit;
$add = " LIMIT $start, $limit ";

// Get status
$q2 = $db->prepare("SELECT SUM(status='0') AS iB, SUM(status='1') AS iiB, SUM(status='2') AS iiiB, SUM(status='3') AS iiiiB FROM j_respondents_private WHERE surveyid = :surveyid");
$q2->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
$q2->execute();
while ($row = $q2->fetchObject()) {
  $status0 = $row->iB; $status1 = $row->iiB;
  $status2 = $row->iiiB; $status3 = $row->iiiiB;
}

$email_error = "<div class=\"alert alert-warning alert-dismissible\" role=\"alert\"><a class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>\n";
$email_error .= "  <h4><i class=\"pe-exclamation-triangle pe-fw pe-lg\"></i> Found respondents with invalid email format</h4>\n";
$email_error .= "  <p>We detect <strong>$status0 respondents</strong> that appear to have an error in their email format, and hence cannot be used. Please correct their emails and upload them again.</p>";
$email_error .= "  <p>We display them in the table below with a <del>strike through</del> format so you can spot them instantly.</p>";
$email_error .= "  <a href=\"$me&m=fixerrors\" class=\"btn btn-warning\">Click here to remove them</a>\n";
$email_error .= "</div>\n";

// Get respondent listing
$q3A = $db->prepare("SELECT * FROM j_respondents_private WHERE surveyid = :surveyid");
$q3A->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
$q3A->execute();

$rows = $q3A->rowCount();
$total = ceil($rows/$limit);
$offset = ($currentpage - 1) * $rowsperpage;

if ($to_record > $rows) { $to_record = $rows; }
$from_record = $start + 1;

// Check duplications
$q4 = $db->prepare("SELECT COUNT(*) as duplicates, id, email FROM j_respondents_private WHERE surveyid = :surveyid GROUP BY email HAVING duplicates > 1");
$q4->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
$q4->execute();
$e = array(); $f = array(); $g = array();
while ($r = $q4->fetchObject()) {
  array_push($e, $r->email);
  array_push($f, $r->duplicates);
  array_push($g, $r->id);
}
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
$email_duplicated .= "  <a href=\"$me&m=fixduplicates\" class=\"btn btn-warning\">Click to remove the duplicates</a>\n";
$email_duplicated .= "</div>\n";


if ($_GET['m'] == "fixerrors") {
  $q2A = $db->prepare("DELETE FROM j_respondents_private WHERE surveyid = :surveyid AND status = 0");
  $q2A->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
  $q2A->execute();
} else if ($_GET['m'] == "fixduplicates") {
  $q2B = $db->prepare("DELETE e1 FROM j_respondents_private e1, j_respondents_private e2 WHERE e1.surveyid = :surveyid AND e1.email = e2.email AND e1.id > e2.id");
  $q2B->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
  $q2B->execute();
} else if ($_POST['m'] == "delthis") {
  $qMarks = str_repeat('?,', count($g) - 1) . '?';
  $q2C = $db->prepare("DELETE FROM j_respondents_private WHERE id IN ($qMarks)");
  $q2C->execute($ids);
  // $inQuery = implode(',', array_fill(0, count($ids), '?'));
  // $q2C = $db->prepare("DELETE FROM j_respondents_private WHERE surveyid = :surveyid AND id IN('.$inQuery.')");
  // $q2C->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
  // foreach ($ids as $k => $id) { $q2C->bindValue(($k+1), $id); }
  // $q2C->execute($ids);
}

if ($total == 0) {
  echo "<p>Currently this project has <strong>no respondent</strong> stored in our database.</p>\n";
  echo "<p>Please upload with a Comma Separated Value (CSV) file that at least contains a list of emails in a column.</p>";
  echo "<p></p>\n";
  echo "<p align=\"right\"><a class=\"btn btn-primary\" href=\"\" data-toggle=\"modal\" data-target=\"#uploading\"><i class=\"pe-upload pe-fw\"></i> Upload a name list</a></p>\n";
  echo "<br>\n";
  echo $help;
  echo "<hr>\n";
} else {
  echo "<p>Currently this project has <strong>$rows respondents</strong> stored in our database.</p>\n";
  if ($status0) { echo $email_error; }
  if ($duplicated_records) { echo $email_duplicated; }
  // echo "<br>";
  echo "<p>Please see table below for more information about these respodnents. And of course, you can always use the upload function to add more respondents to the project if need.</p>\n";
  echo "<p></p>\n";
  echo "<p></p>\n";
  echo "<p align=\"right\"><a class=\"btn btn-primary\" href=\"\" data-toggle=\"modal\" data-target=\"#uploading\"><i class=\"pe-upload pe-fw\"></i> Upload a name list</a></p>\n";

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

  echo "<small class=\"blue\">Found <strong>$rows records</strong> in our database (showing results $from_record to $to_record)</small class=\"blue\">\n";

?>

  <form method="post" action="<?php echo $me; ?>">
    <table class="table table-hover table-condensed small">
      <thead>
        <tr class="bg-primary">
          <td width="5%"><input type="checkbox" name="all" id="all" value=""></td>
          <td width="5%"><strong>No</strong></td>
          <td width="15%"><strong>Respondents</strong></td>
          <td width="15%" align="right"><strong>Uploaded</strong></td>
          <td width="15%" align="right"><strong>Invite sent?</strong></td>
          <td width="15%" align="right"><strong>Invite resent?</strong></td>
          <td width="15%" align="right"><strong>Participated?</strong></td>
          <td width="15%" align="right"><strong>Completed?</strong></td>
        </tr>
      </thead>
      <tbody>
        <tr>
<?php
// Get respondent listing
$q3B = $db->prepare("SELECT * FROM j_respondents_private WHERE surveyid = :surveyid".$add);
$q3B->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
$q3B->execute();
if ($from_record) { $i = $from_record; } else { $i = 1; }
while ($row = $q3B->fetchObject()) {
  if ($row->status == 0) { $a1 = "<del>"; $a2 = "</del>"; $a3 = "<tr style='background-color:#eee'>"; } else { $a1 = ""; $a2 = ""; $a3 = "<tr>"; }
  echo "      $a3\n";
  echo "        <td><input type=\"checkbox\" name=\"selected[]\" id=\"$i\" value=\"$i\"></td>\n";
  echo "        <td>$a1$i$a2</td>\n";
  echo "        <td>$a1$row->email$a2</td>\n";
  if (!empty($row->created)) { $created = ago($row->created); echo "      <td align=\"right\">$a1$created$a2</td>\n"; } else { echo "      <td align=\"right\">-</td>\n"; }
  if (!empty($row->$invited1)) { $invited1 = ago($row->$invited1); echo "      <td align=\"right\">$invited1</td>\n"; } else { echo "      <td align=\"right\">-</td>\n"; }
  if (!empty($row->$invited2)) { $invited2 = ago($row->$invited2); echo "      <td align=\"right\">$invited2</td>\n"; } else { echo "      <td align=\"right\">-</td>\n"; }
  if (!empty($row->$viewed)) { $viewed = ago($row->$viewed); echo "      <td align=\"right\">$viewed</td>\n"; } else { echo "      <td align=\"right\">-</td>\n"; }
  if (!empty($row->$completed)) { $completed = ago($row->$completed); echo "      <td align=\"right\">$completed</td>\n"; } else { echo "      <td align=\"right\">-</td>\n"; }
  $i++;
  echo "      </tr>\n";
}
?>
        </tr>
      </tbody>
    </table>
    <input type="hidden" name="m" value="delthis">
    <input type="submit" class="btn-tiny btn-danger" value="Delete selected">
  </form>
  <hr>

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

?>


<script type="text/javascript">
  $(document).ready(function(){
    $('#all').click( function () {
      $('input[type="checkbox"]').prop('checked', this.checked)
    })
  });
</script>

<a href="/admin/?w=surveys" class="btn btn-danger btn-sm pull-right" style="margin-top:50px; margin-bottom: 20px"><i class="pe-chevron-circle-left pe-fw"></i> Back to the main page</a>

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
