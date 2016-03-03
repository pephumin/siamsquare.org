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
		echo(mksuccess(_('Your password has been successfully changed.')));
		displayAdminBack();
		header("Refresh: 10; URL=$base");
		return;
	} else {
		echo(mkerror(_('Password not set, check your old password.')));
	}
} else if(isset($_POST['newpass1'])) {
	echo(mkerror(_('New passwords do not match or are blank.')));
}
?>

</form>

<h2>Changing your password</h2>

<br />

<div class="container">
<form class="form-horizontal" method="post" id="phpesp" action="<?php echo($base); ?>">
  <div class="form-group">
    <label class="col-sm-3 control-label" for="Username">Username</label>
    <div class="col-sm-9">
    	<input type="text" class="form-control" name="Username" placeholder="<?php echo($_SESSION['acl']['username']); ?>" disabled>
    </div>
  </div>
  <div class="form-group">
    <label class="col-sm-3 control-label" for="oldpass">Old password</label>
    <div class="col-sm-9">
    	<input type="password" class="form-control" name="oldpass" placeholder="Current password">
    </div>
  </div>
  <div class="form-group">
    <label class="col-sm-3 control-label" for="Username">New password</label>
    <div class="col-sm-9">
    	<input type="password" class="form-control" name="newpass1" placeholder="New password">
    </div>
  </div>
  <div class="form-group">
    <label class="col-sm-3 control-label" for="Username">Confirm new password</label>
    <div class="col-sm-9">
    	<input type="password" class="form-control" name="newpass2" placeholder="New password again">
    </div>
  </div>
  <div class="col-sm-offset-3 col-sm-9">
  	<button type="submit" class="btn btn-success">Change password</button>
  	<input type="hidden" name="where" value="passwd" />
  </div>
</form>
</div>

<br /><br />
<?php displayAdminBack(); ?>
