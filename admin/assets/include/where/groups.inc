<?php

/* load only accounts available to _this_ user */
if($_SESSION['acl']['superuser'] != 'Y' &&
    !auth_no_access(_('to access this form'))) {
  return;
}

$errstr = '';
$success = '';

if(!empty($_POST['r']) && !empty($_POST['t'])) {
  $sql = "INSERT INTO ".$GLOBALS['ESPCONFIG']['realm_table']." (name, title, changed) VALUES (". _addslashes($_POST['r']) .", ". _addslashes($_POST['t']).", ". sys_time_stamp().")";
  if(!execute_sql($sql)) { $errstr = _('Error adding a new group.') . ' (' . ErrorMsg() .')'; }
  else { $success = _('A new group has been added successfully.'); }
}
if(!empty($_GET['del'])) {
  if($_GET['del'] == 'superuser') { $errstr = _('Error deleting group.'); }
  else {
    $sql = "SELECT count(d.username) FROM ".$GLOBALS['ESPCONFIG']['designer_table']." d WHERE d.realm=". _addslashes($_GET['del']);
    $count = get_one($sql);
    if ($count > 0) { $errstr = _('Group is not empty.'); }
    else {
      $sql = "DELETE FROM ".$GLOBALS['ESPCONFIG']['realm_table']." WHERE name=". _addslashes($_GET['del']);
      if(!execute_sql($sql)) { $errstr = _('Error deleting a group.'); }
      else { $success = _('A group has been deleted successfully.'); }
    }
  }
}
$sql = 'SELECT r.name, r.title, count(d.username) FROM '.$GLOBALS['ESPCONFIG']['realm_table'].' r LEFT JOIN '.$GLOBALS['ESPCONFIG']['designer_table'].' d ON r.name=d.realm GROUP BY r.name, r.title ORDER BY r.name';
$sql2 = 'SELECT count(d.username) FROM '.$GLOBALS['ESPCONFIG']['realm_table'].' r LEFT JOIN '.$GLOBALS['ESPCONFIG']['respondent_table'].' d ON r.name=d.realm GROUP BY r.name ORDER BY r.name';
$result = execute_sql($sql);
$result2 = execute_sql($sql2);

$i = 0;
?>

<h2>Managing groups</h2>

<?php if(!empty($errstr)) echo(mkerror($errstr)); ?>
<?php if(!empty($success)) echo(mksuccess($success)); ?>

<input type="hidden" name="where" value="groups">

<table class="table table-hover">
  <tr>
    <th>Group</th>
    <th>Description</th>
    <th class="text-center">Members</th>
    <td class="text-center">&nbsp;</td>
  </tr>
<?php
  while(list($realm, $title, $count) = fetch_row($result)) {
    $result->MoveNext();
    $result2->Move($i++);
    $count += $result2->fields[0];
?>
  <tr>
    <td><?php echo ($realm); ?></td>
    <td><?php echo ($title); ?></td>
    <td class="text-center"><?php echo ($count); ?></td>
    <td class="text-center"><?php echo ($count ? "&nbsp;" :
      "<a class=\"btn btn-danger btn-xs\" role=\"button\" href=\"". $GLOBALS['ESPCONFIG']['ME'] .htmlentities("?where=groups&del=$realm")."\">Delete</a>"); ?></td>
  </tr>
<?php
  }
  db_close($result);
  db_close($result2);
?>
  <tr>
    <td><input type="text" class="form-control" name="r" placeholder="Group name" /></td>
    <td><input type="text" class="form-control" name="t" placeholder="Description" /></td>
    <td>&nbsp;</td>
    <td class="text-center"><input class="btn btn-success btn-sm" type="submit" name="add" value="Add"/></td>
  </tr>
</table>
<br><br>
