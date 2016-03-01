
<h2>Changing your password</h2>

<?php
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
<input type="hidden" name="where" value="passwd" />
<br />

<div class="table-responsive">
<table class="table table-hover">
<tr>
	<th class="right">Username</th>
	<td class="left">
	<?php echo('<tt class="form-control-static">'. $_SESSION['acl']['username'] .'</tt>'); ?></td>
</tr><tr>
	<th class="right">Old Password</th>
	<td class="left">
	<?php echo(mkpass('oldpass')); ?></td>
</tr><tr>
	<th class="right">New Password</th>
	<td class="left">
	<?php echo(mkpass('newpass1')); ?></td>
</tr><tr>
	<th class="right">Confirm New Password</th>
	<td class="left">
	<?php echo(mkpass('newpass2')); ?></td>
</tr><tr>
	<th colspan="2" class="center">
	<input class="btn btn-success" type="submit" name="submit" value="Change Password" />
	</th>
</tr>
</table>
</div>
<br /><br />
<?php displayAdminBack(); ?>
