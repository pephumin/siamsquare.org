<?php

$title = "Changing your password";
$base =& $GLOBALS['ESPCONFIG']['ME'];

if(isset($_POST['newpass1']) &&
  $_POST['newpass1'] == $_POST['newpass2'] &&
  !empty($_POST['newpass1'])) {
  if(auth_change_manager_passwd($_SESSION['acl']['username'], _addslashes($_POST['oldpass']), _addslashes($_POST['newpass1']))) {
    echo(mksuccess('Your password has been successfully changed.'));
    header("Refresh: 10; URL=$base");
    return;
  }
  else { echo(mkerror('Password not set, check your old password.')); }
}
else if(isset($_POST['newpass1'])) { echo(mkerror('New passwords do not match or are blank.')); }

?>

</form>

<h2>Changing your password</h2>

<form class="form-horizontal" method="post" id="phpesp" action="<?php echo($base); ?>">
  <section id="changepassword">
    <div class="form-group">
      <label class="col-xs-12 col-sm-4 col-md-4 col-lg-4 control-label">Username</label>
      <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
        <div class="input-group">
          <span class="input-group-addon"><i class="pe-user pe-fw"></i></span>
          <input type="text" name="username" class="form-control" placeholder="<?php echo($_SESSION['acl']['username']); ?>" disabled>
        </div>
        <?php echo mkhidden('username', $GLOBALS); ?>
      </div>
    </div>
    <hr>
    <div class="form-group">
      <label class="col-xs-12 col-sm-4 col-md-4 col-lg-4 control-label">Old password <span class="label label-danger">required</span></label>
      <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
        <div class="input-group">
          <span class="input-group-addon"><i class="pe-key pe-fw"></i></span>
          <input type="password" name="oldpass" class="form-control" placeholder="Current password">
        </div>
      </div>
    </div>
    <div class="form-group">
      <label class="col-xs-12 col-sm-4 col-md-4 col-lg-4 control-label">New password <span class="label label-danger">required</span></label>
      <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
        <div class="input-group">
          <span class="input-group-addon"><i class="pe-key pe-fw"></i></span>
          <input type="password" name="newpass1" class="form-control" placeholder="New password">
        </div>
      </div>
    </div>
    <div class="form-group">
      <label class="col-xs-12 col-sm-4 col-md-4 col-lg-4 control-label">Confirm new password <span class="label label-danger">required</span></label>
      <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
        <div class="input-group">
          <span class="input-group-addon"><i class="pe-key pe-fw"></i></span>
          <input type="password" name="newpass2" class="form-control" placeholder="New password again">
        </div>
      </div>
    </div>
    <hr>
    <div class="col-xs-offset-0 col-sm-offset-4 col-md-offset-4 col-lg-offset-4 col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <button type="submit" class="btn btn-success">Change password</button>
      <button type="submit" class="btn btn-default">Cancel</button>
      <input type="hidden" name="where" value="passwd">
    </div>
  </section>
</form>
<script>
  $(document).ready(function() {
    $('#changepassword').formValidation({
      framework: 'bootstrap',
      icon: { valid: 'pe-check', invalid: 'pe-times', validating: 'pe-refresh' },
      excluded: ':disabled',
      fields: {
        oldpass: {
          validators: { notEmpty: { message: 'The password is required' }, stringLength: { min: 4, message: 'Password must be more than 6 characters long' }, different: { field: 'username', message: 'The password cannot be the same as username' } } },
        newpass1: {
          validators: { notEmpty: { message: 'The password is required' }, stringLength: { min: 6, message: 'Password must be more than 6 characters long' }, different: { field: 'username', message: 'The password cannot be the same as username' } } },
        newpass2: {
          validators: { notEmpty: { message: 'The password is required' }, stringLength: { min: 6, message: 'Password must be more than 6 characters long' }, different: { field: 'username', message: 'The password cannot be the same as username' }, identical: { field: 'newpass1', message: 'The confirm password must be the same as the new one' } } }
      }
    });
  });
</script>
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
