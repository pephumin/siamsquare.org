<?php

$title = "Changing your password";

if (empty($_SESSION["captcha"])) { $clength = 8; $rText = generateRandom($clength); $_SESSION["captcha"] = $rText; }

if (isset($_REQUEST['captcha'])) {

  $username = cleanstring($_SESSION['acl']['username']);
  $oldpass = _addslashes(cleanstring($_POST['oldpass']));
  $newpass1 = _addslashes(cleanstring($_POST['newpass1']));

  if ($_REQUEST['captcha'] == $_SESSION['captcha']) {
    auth_change_manager_passwd($username, $oldpass, $newpass1);
    echo mksuccess("Your password has been changed successfully.");
    return;
  }
  else { echo mkerror("Wrong captcha."); }
}

?>

<h2>Changing password</h2>

<form id="changepassword" class="form-horizontal" method="post" action="<?php echo(htmlspecialchars(MYADMIN)); ?>">
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">Username</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <div class="input-group">
        <span class="input-group-addon"><i class="pe-user pe-fw"></i></span>
        <input type="text" name="username" class="form-control" placeholder="<?php echo $username; ?>" disabled>
      </div>
      <input type="hidden" name="username" value="<?php echo $username; ?>">
      <?php echo mkhidden('username', $GLOBALS); ?>
    </div>
  </div>
  <hr>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">Current password</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <div class="input-group">
        <span class="input-group-addon"><i class="pe-key pe-fw"></i></span>
        <input type="password" name="oldpass" class="form-control" placeholder="Current password">
      </div>
    </div>
  </div>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">New password</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <div class="input-group">
        <span class="input-group-addon"><i class="pe-key pe-fw"></i></span>
        <input type="password" name="newpass1" class="form-control" placeholder="New password">
      </div>
    </div>
  </div>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">Confirm new password</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <div class="input-group">
        <span class="input-group-addon"><i class="pe-key pe-fw"></i></span>
        <input type="password" name="newpass2" class="form-control" placeholder="New password again">
      </div>
    </div>
  </div>
  <hr>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">Confirmation</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <p>Please type in the words as shown in this picture<br>
      <img src="assets/include/captcha.php" alt="captcha"></p>
      <div class="input-group">
        <span class="input-group-addon"><i class="pe-cog pe-fw"></i></span>
        <input type="text" name="captcha" class="form-control" placeholder="Please type in the words as shown in the picture">
      </div>
    </div>
  </div>
  <hr>
  <p class="text-center">
    <input type="hidden" name="w" value="passwd">
    <button type="submit" class="btn btn-warning">Change <i class="pe-check-circle-o"></i></button>
    <button type="submit" class="btn btn-default">Cancel</button>
  </p>
</form>
<script>
  $(document).ready(function() {
    $('#changepassword').formValidation({
      framework: 'bootstrap',
      icon: { valid: 'pe-check', invalid: 'pe-times', validating: 'pe-refresh' },
      button: { selector: '[type="submit"]', disabled: '' },
      excluded: ':disabled',
      fields: {
        oldpass: { validators: { notEmpty: { message: 'The password is required' }, stringLength: { min: 4, message: 'Password must be more than 6 characters long' }, different: { field: 'username', message: 'The password cannot be the same as username' } } },
        newpass1: { validators: { notEmpty: { message: 'The password is required' }, stringLength: { min: 6, message: 'Password must be more than 6 characters long' }, different: { field: 'username', message: 'The password cannot be the same as username' } } },
        newpass2: { validators: { notEmpty: { message: 'The password is required' }, stringLength: { min: 6, message: 'Password must be more than 6 characters long' }, different: { field: 'username', message: 'The password cannot be the same as username' }, identical: { field: 'newpass1', message: 'The confirm password must be the same as the new one' } } },
        captcha: { validators: { notEmpty: { message: 'Captcha is required' }, stringLength: { min: 8, message: 'Captcha must be 8 characters long' } } }
      }
    });
  });
</script>
<br><br>
<div class="alert alert-info alert-dismissible" role="alert"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
  <h4><i class="pe-lightbulb-o pe-fw pe-lg"></i> Tips for choosing a strong password</h4>
  <p>Below are some nice tips for anyone who cares about setting up a good strong password</p>
  <ul class="pe-ul">
    <li><i class="pe-li pe-check-square"></i> <strong>Create passwords that are easy to remember but hard for others to guess.</strong> When possible, use a phrase such as “I started 7th grade at Lincoln Middle School in 2004” and use the initial of each word like this: “Is7gaLMSi#2004.” And make them at least a little different (by adding a couple of unique letters) for each site. On some sites you might even be able to type in the entire phrase.</li>
    <li><i class="pe-li pe-check-square"></i> <strong>Make the password at least 8 characters long.</strong> The longer the better. Longer passwords are harder for thieves to crack.</li>
    <li><i class="pe-li pe-check-square"></i> <strong>Include numbers, capital letters and symbols.</strong> Consider using a $ instead of an S or a 1 instead of an L, or including an &amp; or % – but note that $1ngle is NOT a good password. Password thieves are onto this. But Mf$J1ravng (short for “My friend Sam Jones is really a very nice guy) is an excellent password.</li>
    <li><i class="pe-li pe-check-square"></i> <strong>Don’t use dictionary words.</strong>  If it’s in the dictionary, there is a chance someone will guess it. There’s even software that criminals use that can guess words used in dictionaries.</li>
    <li><i class="pe-li pe-check-square"></i> <strong>Never give out your password to anyone.</strong> Never give it to friends, even if they’re really good friends. A friend can – maybe even accidentally – pass your password along to others or even become an ex-friend and abuse it.</li>
    <li><i class="pe-li pe-check-square"></i> <strong>Make sure your devices are secure.</strong> The best password in the world might not do you any good if someone is looking over your shoulder while you type or if you forget to log out on a cybercafe computer. Malicious software, including “keyboard loggers” that record all of your keystrokes, has been used to steal passwords and other information. To increase security, make sure you’re using up-to-date anti-malware software and that your operating system is up-to-date.</li>
  </ul>
</div>
