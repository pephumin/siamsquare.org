<?php

if ($_REQUEST['d']) { $d = $_REQUEST['d']; }

$me1 = "/admin/?d=login";
$me2 = "/admin/?d=activation";
$me3 = "/admin/?d=recovery";

$title = "The front page";
pageHeader($title);
echo "<h2>Welcome to <span class=\"ssqlogo1\">Siam</span><span class=\"ssqlogo2\">Square</span></h2>\n";
echo "<p>A market research service platform which is built based on a vision to help clients changing the way they access consumer insights. We believe consumer insights should be accurate and more responsive in order to allow a quicker business decision to be made and being ahead of competition.</p>\n";
echo "<p>Only registered clients can access to our service. Feel free to contact us for more infomation or send us a request for an access.</p>\n";

if (empty($_SESSION["captcha"])) { $clength = 8; $rText = generateRandom($clength); session_start(); $_SESSION["captcha"] = $rText; }

$login = new Login();

if ($login->passwordResetWasSuccessful() == true && $login->passwordResetLinkIsValid() != true) {
  $d == "activation";
  $target = "/admin/?d=login";
  header("refresh: 10; url=$target");
  $output1 = "<div class=\"alert alert-success alert-dismissible\" role=\"alert\"><a class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>\n";
  $output1 .= "  <h4><i class=\"pe-check pe-fw pe-lg\"></i> Your new password has been activated</h4>\n";
  $output1 .= "  <p>You have successfully set a new password. Please keep it safe. Thank you for using our system. We are glad to have you with us here.</p>\n";
  $output1 .= "  <p>The system will redirect you to the login page in a few seconds, or you can <a href=\"$target\">click here</a> if you choose not to wait.</p>\n";
  $output1 .= "</div>\n";
  $notes = array (array("title" => "Password is reset", "text" => "You have successfully reset your password.", "image" => "/admin/assets/img/notification.svg"));
  exit;
} else if ($login->passwordResetLinkIsValid() == true) {
  $d == "recovery";
  $output2 = "<div class=\"alert alert-success alert-dismissible\" role=\"alert\"><a class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>\n";
  $output2 .= "  <h4><i class=\"pe-check pe-fw pe-lg\"></i> Your indentity has been verified</h4>\n";
  $output2 .= "  <p>Your email has been verified successfully. So you can now set a new password. We strongly recommend choosing a password that is not too easy to guess by others.</p>\n";
  $output2 .= "  <p>Once you have completed with setting a new password, you will be able to login and start using the system right away.</p>\n";
  $output2 .= "</div><br>\n";
  $notes = array (array("title" => "Email is verified", "text" => "Your email has been verified successfully.", "image" => "/admin/assets/img/notification.svg"));
  exit;
}

$warning = "<div class=\"alert alert-warning alert-dismissible\" role=\"alert\"><a class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>\n";
$warning .= "  <h4><i class=\"pe-exclamation-triangle pe-fw pe-lg\"></i> Unauthorised access to this system is prohibited by law</h4>\n";
$warning .= "  <p>You are accessing a private computer network which includes: (1) this machine, (2) this computer network, (3) all computers/servers connected to this network, and (4) all devices and storage media attached to this network or to a computer on this network. This information system is provided for registered clients authorised use only. Unauthorized or improper use of this system may result in disciplinary action, as well as civil and criminal penalties.</p>\n";
$warning .= "  <p>If you do not have an access, please contact sales for setting up a master login/password for your company.</p>\n";
$warning .= "  <p>By using this information system, you understand and consent to the following:</p>\n";
$warning .= "  <ul class=\"pe-ul\">\n";
$warning .= "    <li><i class=\"pe-li pe-check-square\"></i> You have no reasonable expectation of privacy regarding any communication or data transiting or stored on this information system. At any time, and for any lawful purpose, we may monitor, intercept, and search and seize any communication or data transiting or stored on this information system.</li>\n";
$warning .= "    <li><i class=\"pe-li pe-check-square\"></i> Any communication or data transiting or stored on this information system may be disclosed or used for any lawful purpose.</li>\n";
$warning .= "    <li><i class=\"pe-li pe-check-square\"></i> Information you see must not be shared to the public due to our terms of confidentiality.</li>\n";
$warning .= "  </ul>\n";
$warning .= "</div><br>\n";

if ($output1) { echo $output1; } else if ($output2) { echo $output2; }

?>

<div class="row" style="padding:20px">
  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
    <nav>
      <ul class="nav nav-tabs">
        <li<?php if ((empty($d)) || ($d == "login")) { echo " class=\"active\""; } ?>><a href="#1" data-toggle="tab"><i class="pe-power-off pe-fw"></i> Client login</a></li>
        <li<?php if ($d == "activation") { echo " class=\"active\""; } ?>><a href="#2" data-toggle="tab"><i class="pe-flag pe-fw"></i> Account activation</a></li>
        <li<?php if ($d == "recovery") { echo " class=\"active\""; } ?>><a href="#3" data-toggle="tab"><i class="pe-life-ring pe-fw"></i> Password recovery</a></li>
      </ul>
    </nav>
    <div class="tab-content" style="border:1px #ddd solid;border-top-color: transparent;">
      <div id="1" class="tab-pane fade<?php if ((empty($d)) || ($d == "login")) { echo " in active"; } ?>" style="padding:30px">
        <h4>Client login</h4>
        <p>You need to login before you can start using the system. Should you find a problem logging in to the system, you can always reset and change your password anytime.</p>
<?php
if (isset($login)) {
  if ($login->errors) { foreach ($login->errors as $error) { echo $error; } }
  if ($login->messages) { foreach ($login->messages as $message) { echo $message; } }
}
?>
        <br>
        <form id="clientloginform" method="post" class="form-horizontal" action="<?php echo(htmlspecialchars($me1)); ?>">
          <div class="form-group">
            <label for="username" class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">Email</label>
            <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
              <div class="input-group">
                <span class="input-group-addon"><i class="pe-envelope pe-fw"></i></span>
                <input type="email" name="email" id="email" class="form-control" placeholder="email@domain.com" autofocus required>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label for="password" class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">Password</label>
            <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
              <div class="input-group">
                <span class="input-group-addon"><i class="pe-key pe-fw"></i></span>
                <input type="password" name="password" id="password" class="form-control" placeholder="Password" autocomplete="off" required>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="col-xs-12 col-sm-offset-3 col-md-offset-3 col-lg-offset-3 col-sm-7 col-md-7 col-lg-7">
              <div class="checkbox">
                <label><input type="checkbox" name="rememberme" value="1" style="position:relative"> Keep me logged in for this device</label>
              </div>
            </div>
          </div>
          <br>
          <p class="text-center">
            <button class="btn btn-warning" id="btn-login" data-loading-text="Loggin in..." data-reset-text="Completed" name="login" value="1" type="submit">Log in <i class="pe-check-circle-o"></i></button>
            <button class="btn btn-default" name="cancel" type="reset">Cancel <i class="pe-times-circle-o"></i></button>
          </p>
        </form>
        <script type="text/javascript">
          $(document).ready(function() {
            $('#clientloginform').formValidation({
              framework: 'bootstrap',
              icon: { valid: 'pe-check', invalid: 'pe-times', validating: 'pe-refresh' },
              button: { selector: '[type="submit"]', disabled: '' },
              excluded: ':disabled',
              fields: {
                email: { validators: { notEmpty: { message: 'The login is required' }, emailAddress: { message: 'Please enter a valid email address' } } },
                password: { validators: { notEmpty: { message: 'The password is required' }, stringLength: { min: 4, message: 'Password must be more than 6 characters long' }, different: { field: 'email', message: 'The password cannot be the same as the login' } } }
              }
            });
          });
        </script>
      </div>
      <div id="2" class="tab-pane fade<?php if ($d == "activation") { echo " in active"; } ?>" style="padding:30px">
        <h4>Account activation</h4>
        <p>Please follow these easy steps to activate your account. It starts by verifying whether your email is correct and active, then it will give you a chance to set a new password. That's it! This can be done in just a few minutes.</p>
<?php
if (isset($login)) {
  if ($login->errors) { foreach ($login->errors as $error) { echo $error; } }
  if ($login->messages) { foreach ($login->messages as $message) { echo $message; } }
}
?>
        <br>
        <form id="passwordrequest" class="form-horizontal" method="post" action="<?php echo htmlspecialchars($me2); ?>">
          <div class="form-group">
            <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">Email</label>
            <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
              <div class="input-group">
                <span class="input-group-addon"><i class="pe-envelope pe-fw"></i></span>
                <input type="email" name="email" id="email" class="form-control" placeholder="email@domain.com" autofocus required>
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
            <input type="hidden" id="inputtwo" name="d" value="activation">
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
      </div>
      <div id="3" class="tab-pane fade<?php if ($d == "recovery") { echo " in active"; } ?>" style="padding:30px">
        <h4>Password recovery</h4>
        <p>Want to reset your password? Or have you lost your password? No problem at all. We can help you recovery your account by resetting your password. Just follow the intruction in the below form.</p>
<?php
if (isset($login)) {
  if ($login->errors) { foreach ($login->errors as $error) { echo $error; } }
  if ($login->messages) { foreach ($login->messages as $message) { echo $message; } }
}
?>
        <br>
        <form id="passwordreset" class="form-horizontal" method="post" action="<?php echo htmlspecialchars($me3); ?>">
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
            <input type="hidden" id="inputthree" name="d" value="recovery">
            <button class="btn btn-warning" name="submit_new_password" type="submit">Set my password <i class="pe-check-circle-o"></i></button>
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
              }
            });
          });
        </script>
      </div>
    </div>
    <br>
<?php echo $warning; ?>
  </div>
</div>

<!-- <script type="text/javascript">
  $(document).ready(function() {
    $("#clientloginform :input").attr("disabled", true);
    $("#passwordrequest :input").attr("disabled", true);
    $("#passwordreset :input").attr("disabled", true);
    $("ul.nav nav-tabs li.active")
    $('#inputtwo').val('activation');
    $('#inputthree').val('recovery');
  });
</script> -->

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
