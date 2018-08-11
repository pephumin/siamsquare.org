<?php

// $excerptRows = "50";
// $c_target = 300;
$base = "/admin/?w=duplicate&amp;s=".$_GET['s'];
// $result = "/admin/?w=result&amp;s=".$_GET['s'];
// $dpspec = "/admin/?w=dpspec&amp;s=".$_GET['s'];
// print_r($_GET);

$q1 = $db->prepare("SELECT * FROM j_projects WHERE id = :surveyid");
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

$rows = $q1->fetchAll(PDO::FETCH_OBJ);
// print_r($rows);

//   // print_r($project);
// }

// UPDATE `j_results` SET data = REPLACE(data, 'โปรโมชั่นชิงโชค แจกทอง และท่องเที่ยว', 'Gold and travel') WHERE data LIKE '%โปรโมชั่นชิงโชค แจกทอง และท่องเที่ยว%' AND surveyid = 36;
// UPDATE `j_results` SET data = REPLACE(data, 'Online ', 'Online') WHERE data LIKE '%Online %' AND surveyid = 33;

// $q2 = $db->prepare("SELECT * FROM j_projects WHERE id = :survyid ");
// $q2->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
// $q2->execute();
// $rows[] = $q2->fetchAll();
// print_r("kekekekekekeke");
//
foreach ($rows as $row) {
  // print_r($row);
  // print_r($row->id);
  // print_r($row->title);
  // print_r($row->project);
  $project = "Project". $row->title ."(". $row->id .")";
  $id = $row->id;
  $ststus = $row->status;
  $list .= "<option value=\"$id\">$project [$id] - $status</option>";
  // print_r($project);
}
// print $rows[0]->title;
// print("\n");
// print_r("</pre>");
// $id = $rows->id;
    // $project = $rows->title;

//   $title = "An error has been found";
//   pageHeader($title);
//   echo "<h2>We could not find a match for ID for this project</h2>\n";
//   echo "<p>There has been an error locating the project you are looking for. This is caused by two reasons which are either there is a false in our system (which is very unlikely) or you use our system incorrectly.</p>";
//   echo "<p>If you have tried entering the project ID manually, we strongly suggest you should stop doing this. You should instead use the client dashboard which will never lead you to a wrong link or any errors like this at all.</p>";
//   echo mkerror("In fact we typically consider such action as violent.");
//   echo "<p>Our system has already recorded this error including your identity and timestamp.</p>";
//   pageFooter();
//   $sql = "INSERT INTO j_users_logs (surveyid, userid, ip, data, critical) VALUE (:surveyid, :userid, :ip, '" . $_SESSION["email"] . " tried accessing a non-existing project', '5')"
//   $q3 = $db->prepare($sql);
//   $q3->bindValue(':surveyid', $_GET['s'], PDO::PARAM_INT);
//   $q3->bindValue(':userid', $_SESSION["userid"], PDO::PARAM_INT);
//   $q3->bindValue(':ip', $_SESSION["ip"], PDO::PARAM_INT);
//   $q3->execute();
//
//   }
// }
// $list = "";


if ($_SESSION['level'] != "9") {
  if ($status < 1 || $status > 3) {
    $title = "An error has been found";
    pageHeader($project);
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
}

// CREATE TEMPORARY TABLE tmp1 SELECT * FROM j_projects WHERE id = 33;
// UPDATE tmp1 SET id=NULL;
// INSERT INTO j_projects SELECT * FROM tmp1;
// UPDATE j_projects SET title = "Healthy New" WHERE id = LAST_INSERT_ID();
// DROP TABLE tmp1;
//
// CREATE TEMPORARY TABLE tmp2 SELECT * from j_results WHERE surveyid = 33 AND status = 2;
// UPDATE tmp2 SET id=NULL;
// UPDATE tmp2 SET surveyid = LAST_INSERT_ID();
// INSERT INTO j_results SELECT * FROM tmp2;
// DROP TABLE tmp2;



if ($_POST['m'] == "duplicate") {
  $sql = "CREATE TEMPORARY TABLE tmp2 SELECT * from j_projects WHERE id = :surveyid; \n";
  $sql .= "UPDATE tmp1 SET id=NULL; \n";
  $sql .= "INSERT INTO j_projects SELECT 0,tmp1.* FROM tmp1; \n";
  $sql .= "UPDATE j_projects SET title = :title WHERE id = LAST_INSERT_ID(); \n";
  $sql .= "DROP TABLE tmp1; \n";
  if ($_POST['data'] == "3") {
    $sql .= "CREATE TEMPORARY TABLE tmp2 SELECT * from j_results WHERE surveyid = :surveyid AND status > 0; \n";
    $sql .= "UPDATE tmp2 SET id=NULL; \n";
    $sql .= "UPDATE tmp2 SET surveyid = LAST_INSERT_ID(); \n";
    $sql .= "INSERT INTO j_results SELECT 0,tmp2.* FROM tmp2; \n";
    $sql .= "DROP TABLE tmp2; \n";
  } else if ($_POST['data'] == "2") {
    $sql .= "CREATE TEMPORARY TABLE tmp2 SELECT * from j_results WHERE surveyid = :surveyid AND status = 2; \n";
    $sql .= "UPDATE tmp2 SET id=NULL; \n";
    $sql .= "UPDATE tmp2 SET surveyid = LAST_INSERT_ID(); \n";
    $sql .= "INSERT INTO j_results SELECT 0,tmp2.* FROM tmp2; \n";
    $sql .= "DROP TABLE tmp2; \n";
  } else if ($_POST['data'] == "1") {
    $sql .= "CREATE TEMPORARY TABLE tmp2 SELECT * from j_results WHERE surveyid = :surveyid AND status = 1; \n";
    $sql .= "UPDATE tmp2 SET id=NULL; \n";
    $sql .= "UPDATE tmp2 SET surveyid = LAST_INSERT_ID(); \n";
    $sql .= "INSERT INTO j_results SELECT 0,tmp2.* FROM tmp2; \n";
    $sql .= "DROP TABLE tmp2; \n";
  } else if ($_POST['data'] == "0") {
    // $sql .= "";
  }
  // print_r($sql);
  if ($db->multi_query($sql) === TRUE) {
      echo "New records created successfully";
  } else {
      echo "Error: " . $sql . "<br>" . $conn->error;
  }

  $q1 = $db->multi_query($sql);

  $q1->bindValue(':title', $_POST["surveyid"], PDO::PARAM_INT);
  $q1->bindValue(':surveyid', $_POST["surveyid"], PDO::PARAM_INT);
  $q1->execute();
  print_r($q1);
  echo "PEPEPEPE";  // if( ($q1->execute()) {
  //   $q1->commit();
  // } else {
  //   $q1->close();
  //   $db->rollback();
  // }
  // catch(Exception $e) {
  //   $error = $e->getMessage();
  //   throw new Exception($error);
  // }
  $redirect = $base."&m=2";
  header("location: $redirect");
  exit;
}

$title = "Duplicate a Project";
pageHeader($title);
echo "<h2>$title</h2>\n";
echo "<p class=\"introtext\">This is a function to duplicate a project with all info plus the results. It is typically used for running a subgroup analysis as a separate project.</p>\n";

if (($_GET['m'] == "1") || ($m == 1)) { echo "<div id=\"showalert-m1\"></div>\n"; }
else if ($_GET['m'] == "2") { echo "<div id=\"showalert-m2\"></div>\n"; }
else if ($_GET['m'] == "3"){ echo "<div id=\"showalert-m3\"></div>\n"; }
echo "<div id=\"showalert-delete\"></div>\n";
echo "<br>\n";

// $list = "<option value=$id>$project</option>\n";

?>


<form id="duplication" action="<?php echo $base; ?>" method="post">
  <table class="table">
    <thead>
      <tr class="bg-primary">
        <th>Action</th>
        <th>Input</th>
      </tr>
  </thead>
  <tbody>
    <tr>
      <td>copy from</td>
      <td><?echo $project; ?>
        <input class="form-control" type="text" name="source" value="<?php echo $project; ?>">
      </td>
    </tr>
    <tr>
      <td>copy to (new project name)</td>
      <td>
        <input class="form-control" type="text" name="newname" value=""  placeholder="insert a new projct name here">
      </td>
    </tr>
    <tr>
      <td>copy data too?</td>
      <td>
        <select class="form-control" name="data">
          <option value="">-- select one --</option>
          <option value="0">No data</option>
          <option value="1">Pilot data</option>
          <option value="2">Valid data</option>
          <option value="3">Both pilot and valid data</option>
        </select>
      </td>
    </tr>
  </tbody>
</table>
<input type="hidden" name="m" value="duplicate">
<input type="hidden" name="surveyid" value="<?php echo $_GET['s']; ?>">

<button type="submit" class="btn btn-warning">Submit <i class="pe-check-circle-o"></i></button>
<button type="reset" class="btn btn-default">Cancel <i class="pe-times-circle-o"></i></button>
</form>

<?php backButton("/admin/?w=surveys", "Back to the main page", "danger"); ?>

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
