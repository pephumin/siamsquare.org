<?php 

$title = "Changing your password";
$base =& $GLOBALS['ESPCONFIG']['ME'];

if(isset($_POST['newpass1']) &&
  $_POST['newpass1'] == $_POST['newpass2'] &&
  !empty($_POST['newpass1'])) {
  if(auth_change_manager_passwd(
      $_SESSION['acl']['username'],
      _addslashes($_POST['oldpass']),
      _addslashes($_POST['newpass1']))) {
    //echo(_('Your password has been successfully changed.') ."<br>\n");
    echo(mksuccess('Your password has been successfully changed.'));
    displayAdminBack();
    header("Refresh: 10; URL=$base");
    return;
  } else {
    echo(mkerror('Password not set, check your old password.'));
  }
} else if(isset($_POST['newpass1'])) {
  echo(mkerror('New passwords do not match or are blank.'));
}

?>

</form>

<h2>Changing your password</h2>

<br />

<form class="form-horizontal" method="post" id="phpesp" action="<?php echo($base); ?>">
  <div class="form-group">
    <label class="col-sm-3 control-label">Username</label>
    <div class="col-sm-9">
      <input type="text" class="form-control" name="username" placeholder="<?php echo($_SESSION['acl']['username']); ?>" disabled>
      <?php echo mkhidden('username', $GLOBALS); ?>
    </div>
  </div>
  <div class="form-group">
    <label class="col-sm-3 control-label">Old password</label>
    <div class="col-sm-9">
      <input type="password" class="form-control" name="oldpass" placeholder="Current password">
    </div>
  </div>
  <div class="form-group">
    <label class="col-sm-3 control-label">New password</label>
    <div class="col-sm-9">
      <input type="password" class="form-control" name="newpass1" placeholder="New password">
    </div>
  </div>
  <div class="form-group">
    <label class="col-sm-3 control-label">Confirm new password</label>
    <div class="col-sm-9">
      <input type="password" class="form-control" name="newpass2" placeholder="New password again">
    </div>
  </div>
  <div class="col-sm-offset-3 col-sm-9">
    <button type="submit" class="btn btn-success">Change password</button> &nbsp;
    <button type="submit" class="btn btn-default">Cancel</button>
    <input type="hidden" name="where" value="passwd" />
  </div>
</form>

<br /><br />
<?php displayAdminBack(); ?>
