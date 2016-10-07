<?php

// require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/lib/esphtml.forms.inc';

// if survey has been selected ...

if(!empty($_GET['sid'])) {
  $sid = intval($_GET['sid']);
  $srealm = auth_get_survey_realm($sid);
  if($_SESSION['acl']['superuser'] != 'Y' && !auth_is_owner($sid, $_SESSION['acl']['username']) && !in_array($srealm, array_intersect($_SESSION['acl']['pdesign'], $_SESSION['acl']['pall'])) && !auth_no_access('to access this survey')) { return; }
  if(!survey_copy($sid)) { echo(mkerror('Error copying survey.' ." (". ErrorMsg() .")") . "<br>\n"); return; }
  mksuccess ("The new copy of a survey has been created.");
  return;
}

if($_SESSION['acl']['superuser'] == 'Y') {
  $sql = "SELECT id, name, title, status, owner, realm FROM ".X_SURVEY." ORDER BY id DESC ";
} else {
  $realms = array_to_insql(array_intersect($_SESSION['acl']['pall'], $_SESSION['acl']['pdesign']));
  $sql = "SELECT id, name, title, status, owner, realm FROM ".X_SURVEY." WHERE NOT (status & ". STATUS_DELETED .") AND (owner = ". _addslashes($_SESSION['acl']['username']) ." || realm $realms) ORDER BY id DESC ";
}

$result = execute_sql($sql);

echo "<h2>Copy survey</h2>\n";
echo "<p>Choose a survey of which to make a copy. The copy will have the same status of a newly created survey. You will be able to edit the survey, and will have to activate it before use.</p>\n";
echo "<table class=\"table table-hover\">\n";
echo "  <tr class=\"active\">\n";
echo "    <th>Title</th>\n";
echo "    <th>Owner (Group)</th>\n";
echo "    <th>Status</th>\n";
echo "  </tr>\n";

while(list($sid, $name, $title, $status, $owner, $realm) = fetch_row($result)) {
  $result->MoveNext();
  if ($status & STATUS_DELETED) { $stat = "<span class=\"label label-danger\"><i class=\"pe-times pe-fw\"></i> Deleted</span>"; }
  elseif ($status & STATUS_DONE) { $stat = "<span class=\"label label-success\"><i class=\"pe-check pe-fw\"></i> Ended</span>"; }
  elseif ($status & STATUS_ACTIVE) { $stat = "<span class=\"label label-success\"><i class=\"pe-check pe-fw\"></i> Active</span>"; }
  elseif ($status & STATUS_TEST) { $stat = "<span class=\"label label-warning\"><i class=\"pe-paper-plane pe-fw\"></i> Testing</span>"; }
  else { $stat = "<span class=\"label label-danger\"><i class=\"pe-pencil-square-o pe-fw\"></i> Editing</span>"; }

  $target = htmlspecialchars(MYADMIN."?w=copy&sid=".$sid);
  echo "  <tr>\n";
  echo "    <td><a href=\"$target\">$title</a></td>\n";
  echo "    <td>$owner ($realm)</td>\n";
  echo "    <td>$stat</td>\n";
  echo "  </tr>\n";
}

db_close($result);

echo "</table>\n";
echo "<br><br>\n\n";


?>
