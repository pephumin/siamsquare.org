<?php

if (!empty($_GET['sid'])) { $sid = intval($_GET['sid']);
  if (empty($_GET['details'])) { $_GET['details'] = 1; } // by default, show details in report
  /* check ACL to see if user is allowed to view  _this_ survey */
  $srealm = auth_get_survey_realm($sid);
  if ($_SESSION['acl']['superuser'] != 'Y' && !auth_is_owner($sid, $_SESSION['acl']['username']) && !in_array($srealm, array_intersect($_SESSION['acl']['pdesign'], $_SESSION['acl']['pall'])) && !auth_no_access('to access this form')) { return; }
?>

<?php
  $ret = survey_report($sid, $_GET['details']);
  if ($ret != '') { echo(mkerror($ret)); }
?>

<?php
  return;
}

// No SurveyId specified, so build a table of
// surveys to choose from ...

$statusbad = (STATUS_DELETED);
if ($_SESSION['acl']['superuser'] == 'Y') {
  $sql = "SELECT id, name, title, owner, realm FROM ".X_SURVEY." WHERE NOT (status & $statusbad) ORDER BY id DESC";
} else {
  $realms = array_to_insql(array_intersect($_SESSION['acl']['pall'], $_SESSION['acl']['pdesign']));
  $sql = "SELECT id, name, title, owner, realm FROM ".X_SURVEY." WHERE (owner = ". _addslashes($_SESSION['acl']['username']) ." || realm $realms) AND NOT (status & $statusbad) ORDER BY id DESC";
}
$result = execute_sql($sql);

?>
<h2>DP Specification</h2>

<p>Pick survey from below to view the DP specification</p>

<table class="table table-hover">
  <tr class="active">
    <th>Title</th>
    <th>Owner</th>
    <th>Group</th>
    <th>View report</th>
  </tr>
<?php
  while(list($sid, $name, $title, $owner, $realm) = fetch_row($result)) {
    $result->MoveNext();
?>
<tr>
  <td><a href="<?php echo(htmlspecialchars(MYADMIN."?w=dpspec&sid=".$sid)); ?>"><?php echo($title); ?></a></td>
  <td><?php echo($owner); ?></td>
  <td><?php echo($realm); ?></td>
  <td><a href="<?php echo(htmlspecialchars(MYADMIN."?w=dpspec&sid=".$sid)); ?>"><i class="pe-table pe-fw"></i></a></td>
</tr>
<?php
  }
?>
</table>
<br><br>