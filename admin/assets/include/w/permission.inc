<?php

$me = "/admin/?w=permission";
$column = "3";

if ($_SESSION['level'] <= "8") {
  $title = "An error has been found";
  pageHeader($title);
  echo "<h2>No access</h2>\n";
  echo "<p><strong>This page can be accessed by Super Users only.</strong></p>\n";
  echo "<p>We strongly suggest you should stop accessing by manually enter the URL as we consider this to be a violent action and our system has already recorded this error including your identity and timestamp.</p>\n";
  echo "<p>You should instead use the client dashboard which will never lead you to a wrong link or any errors like this at all.</p>\n";
  echo mkerror("Your level is not high enough to access this page.");
  pageFooter();
  $q1 = $db->prepare("INSERT INTO j_users_logs (userid, ip, data, critical) VALUE (:userid, :ip, '" . $_SESSION["email"] . " tried acccessing the administration page manually', '5')");
  $q1->bindValue(':userid', $_SESSION["userid"], PDO::PARAM_INT);
  $q1->bindValue(':ip', $_SESSION["ip"], PDO::PARAM_INT);
  $q1->execute();
  exit;
}

$act1 = "";
$q1 = $db->prepare("SELECT A.userid, count(*) AS count, U.fullname, U.email, U.mobile, U.status, U.companyid, R.role, C.fullname AS cfullname FROM j_access A, j_users U, j_companies C, j_role R WHERE A.userid = U.id AND R.id = U.level AND C.id = U.companyid GROUP BY A.userid");
$q1->execute();
$accesscount = $q1->rowCount();
$act1 .= "<h3>Summary of user access</h3>\n";
$act1 .= "<p>There are <strong>$accesscount users</strong> with customised access set to projects as shown below.</p>\n";
$act1 .= "<table class='table table-hover small'>\n";
$act1 .= "  <thead>\n";
$act1 .= "    <tr>\n";
$act1 .= "      <th>User</th>\n";
$act1 .= "      <th>Company</th>\n";
$act1 .= "      <th>Role</th>\n";
$act1 .= "      <th>Detail</th>\n";
$act1 .= "      <th>Status</th>\n";
$act1 .= "      <th>No. of projects with access</th>\n";
$act1 .= "    </tr>\n";
$act1 .= "  <tbody>\n";
$i = 1;
$q3 = $db->prepare("SELECT P.id, P.title, P.userid FROM j_projects P ORDER BY P.id ASC");
$q3->execute();
$all = $q3->rowCount();
while ($r3 = $q3->fetchObject()) { $withaccess3[] = $r3->id; }
while ($row = $q1->fetchObject()) {
  if ($row->email) { $ee1 = "<i class='pe-envelope pe-fw'></i> $row->email"; }
  if ($row->mobile) { $ee2 = "<i class='pe-mobile pe-fw'></i> $row->mobile"; }
  if ($ee1 && $ee2) { $ee = $ee1 . ", " . $ee2; }
  else if ($ee1 && !$ee2) { $ee = $ee1; }
  else if (!$ee1 && $ee2) { $ee = $ee2; }
  $ustatus = status_user($row->status, "true", "true");
  $a1 = "<a href='' id='rowshow$i' onclick='return showRow(event, $i)'><i class='pe-chevron-down'></i></a>";
  $a2 = "<a href='' id='rowhide$i' onclick='return hideRow(event, $i)' style='display:none'><i class='pe-chevron-up'></i></a>";
  $act1 .= "    <tr>\n";
  $act1 .= "      <td>$row->fullname</td>\n";
  $act1 .= "      <td>$row->cfullname</td>\n";
  $act1 .= "      <td>$row->role</td>\n";
  $act1 .= "      <td>$ee</td>\n";
  $act1 .= "      <td>$ustatus</td>\n";
  $act1 .= "      <td>$row->count $a1$a2</td>\n";
  $act1 .= "    </tr>\n";
  $act1 .= "    <tr id='row$i' style='display:none'>\n";
  $act1 .= "      <td colspan='6'>\n";
  $act1 .= "        <div class='row'>\n";
  $q2 = $db->prepare("SELECT P.id, A.userid FROM j_access A, j_projects P WHERE A.projectid = P.id AND A.userid = $row->userid ORDER BY P.id ASC");
  $q2->execute();
  while ($r2 = $q2->fetchObject()) {
    $withaccess2[$r2->userid][] = $r2->id;
    $withaccess[$r2->userid] = $withaccess3;
  }
  $i++;
}
$results = array_intersect($withaccess2, $withaccess); //print_r($results);
foreach ($results as $result) {
  $act1 .= "          <div class='col-xs-4 col-sm-4 col-md-4 col-lg-4'>\n";
  $act1 .= $result;
  $act1 .= "          </div>\n";
}
// print_r($withaccess);
// print_r($withaccess2);
$act1 .= "        </div>\n";
$act1 .= "      </td>\n";
$act1 .= "    </tr>\n";
$act1 .= "  </tbody>\n";
$act1 .= "</table>\n";


$title = "User access";
pageHeader($title);
echo "<h2>$title</h2>\n";
echo "<p class=\"introtext\">Permissions of all users can be set in this page. Basically each user will have an own permission that will provide an information to the system to know which survey they can access.</p>\n";
echo "<hr>\n";

print_r($act1);


?>

<script type="text/javascript">
  function getColumn(anArray, columnNumber) { return anArray.map(function(row) { return row[columnNumber]; }); }
  function showRow(e, rowIndex) { showhideRow(rowIndex, true); e.preventDefault(); return false; }
  function hideRow(e, rowIndex) { showhideRow(rowIndex, false); e.preventDefault(); return false; }
  function showhideRow(rowIndex, show) {
    document.getElementById("row" + rowIndex).style.display = show ? "" : "none";
    document.getElementById("rowhide" + rowIndex).style.display = show ? "" : "none";
    document.getElementById("rowshow" + rowIndex).style.display =  show ? "none" : "";
  }
  var a1 = document.createElement('a');
  a1.innerHTML = ' <i class="pe-chevron-down"></i>';
  a1.setAttribute('id', 'rowshow' + i);
  a1.setAttribute('href', '');
  a1.setAttribute('onclick', 'return showRow(event, ' + i + ')');
  var a2 = document.createElement('a');
  a2.innerHTML = ' <i class="pe-chevron-up"></i>';
  a2.setAttribute('id', 'rowhide' + i);
  a2.setAttribute('href', '');
  a2.setAttribute('onclick', 'return hideRow(event, ' + i + ')');
  a2.setAttribute('style', 'display:none');

</script>

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
