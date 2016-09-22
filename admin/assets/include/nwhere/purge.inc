
<?php

if($_SESSION['acl']['superuser'] != 'Y') {
  echo(mkerror('Only superusers allowed.')."<br>\n");
  //echo("<a href=\"". $GLOBALS['ESPCONFIG']['ME'] ."?where=manage\">" . _('Go back to Management Interface') . "</a>\n");
  return;
}

$sids = array();
if(!empty($_POST['list'])) {
  while(list(,$sid) = each($_POST['list'])) {
    array_push($sids, intval($sid));
  }
  survey_purge($sids);
}

//  $sql = "
//SELECT s.id,s.name,s.title,s.status,s.owner,s.realm,COUNT(q.id) as count
//FROM survey s LEFT JOIN question q ON
$sql = "SELECT s.id,s.name,s.title,s.status,s.owner,s.realm,COUNT(q.id) as count FROM ".$GLOBALS['ESPCONFIG']['survey_table']." s LEFT JOIN ".$GLOBALS['ESPCONFIG']['question_table']." q ON s.id = q.survey_id AND q.deleted = 'N' GROUP BY s.id, s.name, s.title, s.status, s.owner, s.realm ORDER BY s.id DESC";

$result = execute_sql($sql);

echo "<h2>Purge Surveys</h2>\n";

echo "<p>This page is not directly on the main menu because it is dangerous. This <b>completely</b> removes everything about a survey from the database <b>forever</b>. All question info, general info, results, etc. are purged from the database. Do not do anything here that you are not completely certain about. There is no confirmation, there is no turning back.</p>\n";

echo "<br>\n";

echo "<table class=\"table table-hover\">\n";
echo "  <tr class=\"active\">\n";
echo "    <td>&nbsp;</td>\n";
//echo "    <th>ID</th>\n";
echo "    <th>Name</th>\n";
echo "    <th>Title</th>\n";
echo "    <th>Owner (Group)</th>\n";
echo "    <th>Questions</th>\n";
echo "    <th>Status</th>\n";
echo "  </tr>\n";

while(list($sid,$name,$title,$status,$owner,$realm,$qnum) = fetch_row($result)) {
    $result->MoveNext();
  if ($status & STATUS_DELETED) { $stat = "Archived"; }
  elseif ($status & STATUS_DONE) { $stat = "Ended"; }
  elseif ($status & STATUS_ACTIVE) { $stat = "Active"; }
  elseif ($status & STATUS_TEST) { $stat = "Testing"; }
  else { $stat = "Editing"; }

  echo "  <tr>\n";
  echo "    <td><input type=\"checkbox\" name=\"list[]\" value=\"$sid\" /></td>\n";
  //echo "    <td>$sid</td>\n";
  echo "    <td>$name</td>\n";
  echo "    <td>$title</td>\n";
  echo "    <td>$owner ($realm)</td>\n";
  echo "    <td>$qnum</td>\n";
  echo "    <td>$stat</td>\n";
  echo "  </tr>\n";

}

echo "</table>\n";

echo "<input type=\"hidden\" name=\"where\" value=\"purge\" />\n";
echo "<input class=\"btn btn-default\" type=\"reset\" name=\"reset\" value=\"Clear Checkboxes\" />\n";

$confirmText = "You are about to PERMANENTLY and IRREVOCABLY remove ALL information about the selected surveys. Click Ok if you are absolutely sure this is what you want to do.";

echo "<input class=\"btn btn-danger\" type=\"submit\" name=\"submit\" onclick='return confirm(\"You are about to PERMANENTLY and IRREVOCABLY remove ALL information about the selected surveys. Click Ok if you are absolutely sure this is what you want to do.\")' onkeypress='return confirm (\"You are about to PERMANENTLY and IRREVOCABLY remove ALL information about the selected surveys. Click Ok if you are absolutely sure this is what you want to do.\");' value=\"Delete data\" />\n";

echo "<br><br>\n\n";

?>
