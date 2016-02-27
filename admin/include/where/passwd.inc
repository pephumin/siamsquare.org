<?php

?>
<h2>Changing your password</h2>

<?php if(!empty($errstr)) echo(mkerror($errstr)); ?>

<?php
if(isset($_POST['newpass1']) &&
	$_POST['newpass1'] == $_POST['newpass2'] &&
	!empty($_POST['newpass1'])) {
	if(auth_change_manager_passwd(
			$_SESSION['acl']['username'],
			_addslashes($_POST['oldpass']),
			_addslashes($_POST['newpass1']))) {
		echo(mkerror('Your password has been successfully changed.'));
		displayAdminBack();
		return;
	} else {
		echo(mkerror('Password not set, check your old password.'));
	}
} else if(isset($_POST['newpass1'])) {
	echo(mkerror('Your new passwords do not match or are blank.'));
}
?>
<input type="hidden" name="where" value="passwd" />
<br />
<table class="table table-hover">
<tr>
	<th class="right">Username</th>
	<td class="left">
	<?php echo('<tt>'. $_SESSION['acl']['username'] .'</tt>'); ?></td>
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
	<th colspan="2" class="right">
	<input class="btn btn-success" type="button" name="submit" value="Change Password" />
	</th>
</tr>
</table>
<br /><br />
<?php displayAdminBack(); ?>
