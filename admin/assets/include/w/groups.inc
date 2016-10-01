<?php

/* load only accounts available to _this_ user */
if ($_SESSION['acl']['superuser'] != 'Y' && !auth_no_access('to access this form')) { return; }

$errstr = '';
$success = '';

if(!empty($_POST['r']) && !empty($_POST['t'])) {
  $sql = "INSERT INTO ".X_REALM." (type, name, title, added, changed) VALUES (". _addslashes($_POST['rt']) .", ". _addslashes($_POST['r']) .", ". _addslashes($_POST['t']).", ". sys_time_stamp().", ". sys_time_stamp().")";
  if(!execute_sql($sql)) { $errstr = 'Error adding a new group.' . ' (' . ErrorMsg() .')'; }
  else { $success = 'A new group has been added successfully.'; }
}
if(!empty($_GET['del'])) {
  if($_GET['del'] == 'superuser') { $errstr = 'Error deleting group.'; }
  else {
    $sql = "SELECT count(d.username) FROM ".X_DESIGNER." d WHERE d.realm=". _addslashes($_GET['del']);
    $count = get_one($sql);
    if ($count > 0) { $errstr = 'Group is not empty.'; }
    else {
      $sql = "DELETE FROM ".X_REALM." WHERE name=". _addslashes($_GET['del']);
      if(!execute_sql($sql)) { $errstr = 'Error deleting a group.'; }
      else { $success = 'A group has been deleted successfully.'; }
    }
  }
}
$sql = 'SELECT r.type, r.name, r.title, count(d.username) FROM '.X_REALM.' r LEFT JOIN '.X_DESIGNER.' d ON r.name = d.realm WHERE r.type = "clients" GROUP BY r.name ORDER BY r.id ';
$sql2 = 'SELECT r.type, r.name, r.title, count(d.username) FROM '.X_REALM.' r LEFT JOIN '.X_RESPONDENT.' d ON r.name = d.realm WHERE r.type = "respondents" GROUP BY r.name ORDER BY r.id ';
//$sql2 = 'SELECT count(d.username) FROM '.X_REALM.' r LEFT JOIN '.X_RESPONDENT.' d ON r.name = d.realm GROUP BY r.type ORDER BY r.id ';
$result = execute_sql($sql);
$result2 = execute_sql($sql2);

$i = 0;
?>

<h2>Managing groups</h2>

<?php if(!empty($errstr)) echo(mkerror($errstr)); ?>
<?php if(!empty($success)) echo(mksuccess($success)); ?>

<input type="hidden" name="w" value="groups">

<table class="table table-hover">
  <tr class="bg-info">
    <th>Type</th>
    <th>Group name</th>
    <th>Description</th>
    <th class="text-center">Members</th>
    <td class="text-center">&nbsp;</td>
  </tr>
<?php
  while(list($type, $realm, $title, $count) = fetch_row($result)) {
    $result->MoveNext();
    //$result2->Move($i++);
    //$count += $result2->fields[0];
?>
  <tr>
    <td><?php echo ($type); ?></td>
    <td><?php echo ($realm); ?></td>
    <td><?php echo ($title); ?></td>
    <td class="text-center"><?php echo ($count); ?></td>
    <td class="text-center"><?php echo ($count ? "&nbsp;" : "<a class=\"btn btn-danger btn-xs\" role=\"button\" href=\"".htmlspecialchars(MYADMIN."?w=groups&del=".$type)."\">Delete</a>"); ?></td>
  </tr>
<?php
  }
  db_close($result);

  while(list($type, $realm, $title, $count) = fetch_row($result2)) {
    $result2->MoveNext();
?>
  <tr>
    <td><?php echo ($type); ?></td>
    <td><?php echo ($realm); ?></td>
    <td><?php echo ($title); ?></td>
    <td class="text-center"><?php echo ($count); ?></td>
    <td class="text-center"><?php echo ($count ? "&nbsp;" : "<a class=\"btn btn-danger btn-xs\" role=\"button\" href=\"".htmlspecialchars(MYADMIN."?w=groups&del=".$type)."\">Delete</a>"); ?></td>
  </tr>
<?php
  }
  db_close($result2);
?>
  <tr>
    <td>
      <select class="form-control" name="rt">
        <option value="clients">clients</option>
        <option value="respondents">respondents</option>
      </select>
    </td>
    <td><input type="text" class="form-control" name="r" placeholder="Group name"></td>
    <td><input type="text" class="form-control" name="t" placeholder="Description"></td>
    <td>&nbsp;</td>
    <td class="text-center"><input class="btn btn-warning btn-sm" type="submit" name="add" value="Add"></td>
  </tr>
</table>
<br>
<p><strong>Note:</strong> Still yet to develop a function that enables text editing for each of the existing group values.</p><br>
