<?php

require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/config.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/template.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/class.login.php';

if (empty($_SESSION["captcha"])) { $clength = 8; $rText = generateRandom($clength); session_start(); $_SESSION["captcha"] = $rText; }

$login = new Login();

if ($login->passwordResetWasSuccessful() == true && $login->passwordResetLinkIsValid() != true) {

  $target = "/admin";
  header("refresh: 10; url=$target");
  $title = "Your new password has been activated";
  pageHeader($title);
  echo "<h2>$title</h2>";
  echo mksuccess("You have successfully reset your password. Please keep the new password safe.");
  echo "<p>Thank you for using our system. We are glad to have you back on track again.</p>\n";
  echo "<p>You can <a href=\"$target\">click here</a> to login and start using our system.</p>\n";
  echo "<br>\n\n";
  $notes = array (array("title" => "Password is reset", "text" => "You have successfully reset your password.", "image" => "assets/img/notification.svg"));

} else if ($login->passwordResetLinkIsValid() == true) {

  $title = "Set your new password";
  pageHeader($title);
  echo "<h2>$title</h2>";
  echo "<p>Congratulations, you have successfully verified your identity. This is the the final step where you will set a new password.</p>\n";
  echo "<p>Should you find any problems, please do not hesitate to contact us directly.</p>\n";

  if (isset($login)) {
    if ($login->errors) { foreach ($login->errors as $error) { echo $error; } }
    if ($login->messages) { foreach ($login->messages as $message) { echo $message; } }
  }

  echo "<br>\n";

?>

<form id="passwordreset" class="form-horizontal" method="post" action="<?php echo htmlspecialchars(ME); ?>">
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">Email</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <div class="input-group">
        <span class="input-group-addon"><i class="pe-envelope pe-fw"></i></span>
        <input type="email" name="email" class="form-control" placeholder="<?php echo htmlspecialchars($_GET['email']); ?>" disabled>
      </div>
      <input type="hidden" name="email" value="<?php echo htmlspecialchars($_GET['email']); ?>">
      <input type="hidden" name="password_reset" value="<?php echo htmlspecialchars($_GET['verification_code']); ?>">
    </div>
  </div>
  <hr>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">New password</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <div class="input-group">
        <span class="input-group-addon"><i class="pe-key pe-fw"></i></span>
        <input type="password" name="newpass1" class="form-control" placeholder="New password" required autocomplete="off">
      </div>
    </div>
  </div>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">Confirm new password</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <div class="input-group">
        <span class="input-group-addon"><i class="pe-key pe-fw"></i></span>
        <input type="password" name="newpass2" class="form-control" placeholder="New password again" required autocomplete="off">
      </div>
    </div>
  </div>
  <hr>
  <p class="text-center">
    <button class="btn btn-warning" name="submit_new_password" type="submit">Reset my password <i class="pe-check-circle-o"></i></button>
    <button class="btn btn-default" name="Cancel" type="reset">Cancel <i class="pe-times-circle-o"></i></button>
  </p>
</form>
<script>
  $(document).ready(function() {
    $('#passwordreset').formValidation({
      framework: 'bootstrap',
      icon: { valid: 'pe-check', invalid: 'pe-times', validating: 'pe-refresh' },
      button: { selector: '[type="submit"]', disabled: '' },
      excluded: ':disabled',
      fields: {
        newpass1: { validators: { notEmpty: { message: 'The password is required' }, stringLength: { min: 6, message: 'Password must be more than 6 characters long' }, different: { field: 'username', message: 'The password cannot be the same as username' } } },
        newpass2: { validators: { notEmpty: { message: 'The password is required' }, stringLength: { min: 6, message: 'Password must be more than 6 characters long' }, different: { field: 'username', message: 'The password cannot be the same as username' }, identical: { field: 'newpass1', message: 'The confirm password must be the same as the new one' } } },
        //captcha: { validators: { notEmpty: { message: 'Captcha is required' }, stringLength: { min: 8, message: 'Captcha must be 8 characters long' } } }
      }
    });
  });
</script>

<?php

} else {

  $title = "Password recovery";
  pageHeader($title);
  echo "<h2>$title</h2>";
  echo "<p>Forgot your password? No problem at all.</p>\n";
  echo "<p>We can help you recovery your account by resetting your password. Just follow the intruction in the below form.</p>\n";
  echo "<p>Should you find any problems, please do not hesitate to contact us directly.</p>\n";

  if (isset($login)) {
    if ($login->errors) { foreach ($login->errors as $error) { echo $error; } }
    if ($login->messages) { foreach ($login->messages as $message) { echo $message; } }
  }

  echo "<br>\n";

?>

<form id="passwordrequest" class="form-horizontal" method="post" action="<?php echo htmlspecialchars(ME); ?>">
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">Email</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <div class="input-group">
        <span class="input-group-addon"><i class="pe-envelope pe-fw"></i></span>
        <input type="email" name="email" class="form-control" placeholder="email@domain.com" required autocomplete="off">
      </div>
    </div>
  </div>
  <hr>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">Confirmation</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <p>Please type in the words as shown in this picture<br>
      <img src="/admin/assets/include/captcha.php" alt="captcha"></p>
      <div class="input-group">
        <span class="input-group-addon"><i class="pe-cog pe-fw"></i></span>
        <input type="text" name="captcha" class="form-control" placeholder="Please type in the words as shown in the picture">
      </div>
    </div>
  </div>
  <hr>
  <p class="text-center">
    <button class="btn btn-warning" name="request_password_reset" type="submit">Send my request <i class="pe-check-circle-o"></i></button>
    <button class="btn btn-default" name="Cancel" type="reset">Cancel <i class="pe-times-circle-o"></i></button>
  </p>
</form>
<script>
  $(document).ready(function() {
    $('#passwordrequest').formValidation({
      framework: 'bootstrap',
      icon: { valid: 'pe-check', invalid: 'pe-times', validating: 'pe-refresh' },
      button: { selector: '[type="submit"]', disabled: '' },
      excluded: ':disabled',
      fields: {
        email: { validators: { notEmpty: { message: 'The login is required' }, emailAddress: { message: 'Please enter a valid email address' } } },
        captcha: { validators: { notEmpty: { message: 'Captcha is required' }, stringLength: { min: 8, message: 'Captcha must be 8 characters long' } } }
      }
    });
  });
</script>

<?php } ?>

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
