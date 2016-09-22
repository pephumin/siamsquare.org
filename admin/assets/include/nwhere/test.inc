
<?php

$base =& $GLOBALS['ESPCONFIG']['ME'];
$public =& $GLOBALS['ESPCONFIG']['autopub_url'];

if(!empty($_REQUEST['sid'])) { $sid = intval($_REQUEST['sid']); }

/* sid selected for testing */
if(!empty($sid)) {
  $sql = "SELECT status,owner,realm,theme FROM ".$GLOBALS['ESPCONFIG']['survey_table']." WHERE id=${sid}";
  $result = execute_sql($sql);
  list($status,$owner,$realm,$theme) = fetch_row($result);
  db_close($result);

  // check ACL to see if user is allowed to test _this_ survey
  $realms = array_intersect(
      $_SESSION['acl']['pall'],
      $_SESSION['acl']['pdesign']);
  if($_SESSION['acl']['superuser'] != 'Y' &&
      $owner != $_SESSION['acl']['username'] &&
      !in_array($realm, $realms) &&
      !auth_no_access(_('to access this survey'))) {
    return;
  }
  if (($status & STATUS_TEST) && !($status & (STATUS_DONE | STATUS_DELETED | STATUS_ACTIVE))) {
    /* cleared for testing ... was that enough tests? */
    echo "</form>\n";

  // make css available during the testing - this should really go into the head section ...
  if (!empty($theme)) { echo "<link rel=\"stylesheet\" href=\"/public/$theme\" type=\"text/css\">"; }

  echo "<p>Testing Survey... (SID = $sid)</p>\n";

  /* set things up for the handler to take over ... */
  $test = true;
  unset($_REQUEST['sid']);
  // $_POST['userid'] = 'test';
  define('ESP-FIRST-INCLUDED', true);
  # the next should not be needed
  # define('ESP-AUTH-OK', true);
  $_POST['sec'] = empty($_POST['sec']) ? 1 : intval($_POST['sec']);
  $_POST['rid'] = empty($_POST['rid']) ? 0 : intval($_POST['rid']);

  //include($ESPCONFIG['handler']);
  include $_SERVER['DOCUMENT_ROOT'] . '/public/handler.php';

  $tt1 = htmlentities($base."?where=results&sid=".$sid)."&test=1";
  echo "<a href=\"&tt1\">View results</a>\n";
  echo "<br><br>\n";
  displayAdminBack();
  echo "<form>\n";
  db_close($result);
  return;
  }
}

// no survey selected ... show a menu to choose from
// check with ACL for allowed surveys
// load names and titles of all surveys available to _this_ user

$statusbad = (STATUS_DONE | STATUS_DELETED | STATUS_ACTIVE);

$statusok = STATUS_TEST;

if($_SESSION['acl']['superuser'] == 'Y') {
  $sql = "SELECT id,name,title,owner,realm FROM ".$GLOBALS['ESPCONFIG']['survey_table']." WHERE ".db_bin("status",$statusok) ." AND NOT ".db_bin("status", $statusbad)."ORDER BY id DESC";
} else {
  $realms = array_to_insql(
    array_intersect($_SESSION['acl']['pall'],$_SESSION['acl']['pdesign']));
  $sql = "SELECT id,name,title,owner,realm FROM ".$GLOBALS['ESPCONFIG']['survey_table']." WHERE ".db_bin("status",$statusok) ."AND NOT ".db_bin("status",$statusbad) ."AND (owner = ". _addslashes($_SESSION['acl']['username']) ." || realm $realms) ORDER BY id DESC";
}
$result = execute_sql($sql);

echo "<h2>Testing a survey</h2>\n";
echo "<br>\n";
echo "<p>Pick a survey from the list below to test</p>\n";
//echo "<br>\n\n";
echo "<table class=\"table table-hover\">\n";
echo "  <tr class=\"active\">\n";
echo "    <th>Name</th>\n";
echo "    <th>Title</th>\n";
echo "    <th>Owner</th>\n";
echo "    <th>Group</th>\n";
echo "    <th>Testing</th>\n";
echo "    <th>Results</th>\n";
echo "    <th>Export</th>\n";
echo "  </tr>\n";

while(list($sid,$name,$title,$owner,$realm) = fetch_row($result)) {
  $result->MoveNext();

  $tt1 = htmlentities($base."?where=test&sid=$sid&test=1");
  $tt2 = htmlentities($public."?name=$name&test=1");
  $tt3 = htmlentities($base."?where=results&sid=$sid&test=1");

  echo "  <tr>\n";
  echo "    <td>$name</td>\n";
  echo "    <td>$title</td>\n";
  echo "    <td>$owner</td>\n";
  echo "    <td>$realm</td>\n";
  echo "    <td><a href=\"$tt1\">Test</a> [<a href=\"$tt2\">standalone</a>]</td>\n";
  echo "    <td><a href=\"$tt3\">Results</a></td>\n";
  echo "    <td>\n";
  echo "      <form id=\"export$sid\" action=\"$base\">\n";
  echo "        <div>\n";
  echo "        <select name=\"type\">\n";
  echo "          <option value=\"csv_full_header\" selected=\"selected\">CSV Full Headers</option>\n";
  echo "          <option value=\"csv_short_header\">CSV Short Headers</option>\n";
  echo "          <option value=\"tab\">Tab</option>\n";
  echo "        </select>\n";
  echo "        <input type=\"hidden\" name=\"test\" value=\"1\" />\n";
  echo "        <input type=\"hidden\" name=\"sid\" value=\"$sid\" />\n";
  echo "        <input type=\"hidden\" name=\"where\" value=\"\" />\n";
  echo "        <div class=\"exportsave\"><small>\n";
  //echo('<a href="javascript: exportSubmit(\'export\', document.getElementById(\'export'.$sid.'\'));" title="Save CSV Long Header (old method). Save the results for \''.$name.'\' to the survey in CSV Format (Comma Delimted File). Column Titles are based on question text.">' . _('Save On Server') . '</a>');
    //echo("\n | ");
  //echo('<a href="javascript: exportSubmit(\'download\', document.getElementById(\'export'.$sid.'\'));" title="Download CSV Long Header (old method). Download the results for \''.$name.'\' to your computer in CSV Format (Comma Delimted File). Column Titles are based on the question text. Click this link and select \'Save\' when prompted by your browser.">' . _('Download') . '</a>');
  echo "        <a href=\"javascript: exportSubmit('export', document.getElementById('export".$sid."'));\" title=\"Save CSV Long Header (old method). Save   the results for '".$name."' to the survey in CSV Format (Comma Delimted File). Column Titles are based on question text.\">Save On Server</a> | ";
  echo "        <a href=\"javascript: exportSubmit('download', document.getElementById('export".$sid."'));\" title=\"Download CSV Long Header (old method).   Download the results for '".$name."' to your computer in CSV Format (Comma Delimted File). Column Titles are based on the question text//Click this   link and select 'Save' when prompted by your browser.\">Download</a>";
  echo "        </small></div>\n";
  echo "        </div>\n";
  echo "      </form>\n";
  echo "    </td>\n";
  echo "  </tr>\n";

}

echo "</table>\n\n";
echo "<br><br>\n\n";

?>
