
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

<br>

<form class="form-horizontal" method="post" id="phpesp" action="<?php echo($base); ?>">
  <div class="form-group">
    <label class="col-sm-4 control-label">Username</label>
    <div class="col-sm-8">
      <input type="text" class="form-control" name="username" placeholder="<?php echo($_SESSION['acl']['username']); ?>" disabled>
      <?php echo mkhidden('username', $GLOBALS); ?>
    </div>
  </div>
  <hr>
  <div class="form-group">
    <label class="col-sm-4 control-label">Old password <span class="label label-danger">required</span></label>
    <div class="col-sm-8">
      <input type="password" class="form-control" name="oldpass" placeholder="Current password">
    </div>
  </div>
  <div class="form-group">
    <label class="col-sm-4 control-label">New password <span class="label label-danger">required</span></label>
    <div class="col-sm-8">
      <input type="password" class="form-control" name="newpass1" placeholder="New password">
    </div>
  </div>
  <div class="form-group">
    <label class="col-sm-4 control-label">Confirm new password <span class="label label-danger">required</span></label>
    <div class="col-sm-8">
      <input type="password" class="form-control" name="newpass2" placeholder="New password again">
    </div>
  </div>
  <hr>
  <div class="col-sm-offset-4 col-sm-8">
    <button type="submit" class="btn btn-success">Change password</button> &nbsp;
    <button type="submit" class="btn btn-default">Cancel</button>
    <input type="hidden" name="where" value="passwd" />
  </div>
</form>
<br><br><hr>
<p>Tips for choosing your strong password:</p>
<ul class="pe-ul">
  <li><i class="pe-li pe-check-square"></i> <strong>Create passwords that are easy to remember but hard for others to guess.</strong> When possible, use a phrase such as “I started 7th grade at Lincoln Middle School in 2004” and use the initial of each word like this: “Is7gaLMSi#2004.” And make them at least a little different (by adding a couple of unique letters) for each site. On some sites you might even be able to type in the entire phrase.
  <li><i class="pe-li pe-check-square"></i> <strong>Make the password at least 8 characters long.</strong> The longer the better. Longer passwords are harder for thieves to crack.
  <li><i class="pe-li pe-check-square"></i> <strong>Include numbers, capital letters and symbols.</strong> Consider using a $ instead of an S or a 1 instead of an L, or including an & or % – but note that $1ngle is NOT a good password. Password thieves are onto this. But Mf$J1ravng (short for “My friend Sam Jones is really a very nice guy) is an excellent password.
  <li><i class="pe-li pe-check-square"></i> <strong>Don’t use dictionary words.</strong>  If it’s in the dictionary, there is a chance someone will guess it. There’s even software that criminals use that can guess words used in dictionaries.
  <li><i class="pe-li pe-check-square"></i> <strong>Never give out your password to anyone.</strong> Never give it to friends, even if they’re really good friends. A friend can – maybe even accidentally – pass your password along to others or even become an ex-friend and abuse it.
  <li><i class="pe-li pe-check-square"></i> <strong>Make sure your devices are secure.</strong> The best password in the world might not do you any good if someone is looking over your shoulder while you type or if you forget to log out on a cybercafe computer. Malicious software, including “keyboard loggers” that record all of your keystrokes, has been used to steal passwords and other information. To increase security, make sure you’re using up-to-date anti-malware software and that your operating system is up-to-date.
</ul>
<br><br>
