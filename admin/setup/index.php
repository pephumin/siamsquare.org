<?php

require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/config.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/functions.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/template.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/class.login.php';

$me = "/admin/";

if ($_REQUEST['d']) { $d = $_REQUEST['d']; }

if (empty($_SESSION["captcha"])) { $clength = 8; $rText = generateRandom($clength); session_start(); $_SESSION["captcha"] = $rText; }

$login = new Login();

if ($login->passwordResetWasSuccessful() == true && $login->passwordResetLinkIsValid() != true) {

  $target = "/admin";
  header("refresh: 10; url=$target");
  $title = "Your new password has been activated";
  pageHeader($title);
  echo "<h2>$title</h2>";
  echo mksuccess("You have successfully set a new password. Please keep it safe.");
  echo "<p>Thank you for using our system. We are glad to have you with us here.</p>\n";
  echo "<p>You can <a href=\"$target\">click here</a> to login and start using our system.</p>\n";
  echo "<br>\n\n";
  $notes = array (array("title" => "Password is reset", "text" => "You have successfully reset your password.", "image" => "/admin/assets/img/notification.svg"));

} else if ($login->passwordResetLinkIsValid() == true) {

  $title = "Set a new password";
  pageHeader($title);
  echo "<h2>$title</h2>";
  echo "<p>You have successfully verified your identity. Therefore you can now set a new password.</p>\n";
  echo "<p>Please choose a new password that is not too easy to guess. Should you find any problems, please do not hesitate to contact us directly.</p>\n";

  if (isset($login)) {
    if ($login->errors) { foreach ($login->errors as $error) { echo $error; } }
    if ($login->messages) { foreach ($login->messages as $message) { echo $message; } }
  }

  echo "<br>\n";

?>

<form id="passwordreset" class="form-horizontal" method="post" action="<?php echo htmlspecialchars($me); ?>">
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">Email</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <div class="input-group">
        <span class="input-group-addon"><i class="pe-envelope pe-fw"></i></span>
        <input type="email" name="email" id="email" class="form-control" placeholder="email@domain.com" <?php if ($_GET['email']) { echo "value=\"".htmlspecialchars($_GET['email'])."\" "; } ?>autofocus required<?php if ($_GET['email']) { echo " readonly"; } ?>>
      </div>
      <input type="hidden" name="password_reset" value="<?php echo htmlspecialchars($_GET['verification']); ?>">
    </div>
  </div>
  <hr>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">New password</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <div class="input-group">
        <span class="input-group-addon"><i class="pe-key pe-fw"></i></span>
        <input type="password" name="newpass1" class="form-control" placeholder="New password" autocomplete="off" required>
      </div>
    </div>
  </div>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">Confirm new password</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <div class="input-group">
        <span class="input-group-addon"><i class="pe-key pe-fw"></i></span>
        <input type="password" name="newpass2" class="form-control" placeholder="New password again" autocomplete="off" required>
      </div>
    </div>
  </div>
  <hr>
  <p class="text-center">
    <button class="btn btn-warning" name="submit_new_password" type="submit disabled="disabled"">Set my password <i class="pe-check-circle-o"></i></button>
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

  if ((empty($_REQUEST['d'])) || ($_REQUEST['d'] == "activation")) {
    $d = "activation";
    $title = "Account activation";
    pageHeader($title);
    echo "<h2>$title</h2>";
    echo "<p>We are glad to have you on board!</p>\n";
    echo "<p>This is a straightforward process involving two key steps of 1) email verification and 2) a new password set up.</p>\n";
    echo "<p>As it can be done quite quickly, <strong>we strongly recommend doing it all in one-go</strong> (or within 3 hours) to avoid doing it all over again.</p>\n";
    if ($_SESSION['logged_in'] == 1) {
      echo "<div class=\"alert alert-danger alert-dismissible\" role=\"alert\"><a class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>\n";
      echo "  <h4><i class=\"pe-exclamation-triangle pe-fw pe-lg\"></i> An error found</h4>\n";
      echo "  <p>We detect that you are currently login to our system, and hence you do not need to activate your account.</p>\n";
      echo "  <p><strong>If you do it for someone else, please reconsider again</strong> as this process will involve an email verification and a new password setting. Both activities are highly involved with a very personal space and can lead to an unhealthy situation unnecessarily.</p>\n";
      echo "  <p>And because this process is very easy and straightforward, we would think it makes a perfect sense to have the account owner do it by himself/herself.</p>\n";
      echo "  <p>If you insist to continue doing this, you would need to logout.</p>\n";
      echo "</div>\n";
      $disable = true;
    }
  } else if (($_REQUEST['d'] == "recovery") || ($_REQUEST['d'] == "reset")) {
    $d = "recovery";
    $title = "Password recovery";
    pageHeader($title);
    echo "<h2>$title</h2>";
    echo "<p>Forgot your password? No problem at all.</p>\n";
    echo "<p>We can help you recovery your account by resetting your password. Just follow the intruction in the below form.</p>\n";
    echo "<p>Should you find any problems, please do not hesitate to contact us directly.</p>\n";
  }

  if (isset($login)) {
    if ($login->errors) { foreach ($login->errors as $error) { echo $error; } }
    if ($login->messages) { foreach ($login->messages as $message) { echo $message; } }
  }

  echo "<br>\n";

?>

<form id="passwordrequest" class="form-horizontal" method="post" action="<?php echo htmlspecialchars($me); ?>">
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">Email</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <div class="input-group">
        <span class="input-group-addon"><i class="pe-envelope pe-fw"></i></span>
        <input type="email" name="email" id="email" class="form-control" placeholder="email@domain.com"<?php if ($disable == true) { echo " disabled"; } ?> autofocus required>
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
        <input type="text" name="captcha" class="form-control" placeholder="Please type in the words as shown in the picture"<?php if ($disable == true) { echo " disabled"; } ?>>
      </div>
    </div>
  </div>
  <hr>
  <p class="text-center">
    <input type="hidden" name="d" value="<?php echo $d; ?>">
    <button class="btn btn-warning" name="request_password_reset" type="submit" disabled="disabled">Send my request <i class="pe-check-circle-o"></i></button>
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
