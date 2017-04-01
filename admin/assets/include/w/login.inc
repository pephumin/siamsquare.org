<?php

$me = "/admin/";
$title = "Welcome to SiamSquare";
pageHeader($title);
echo "<h2>Welcome to <span class=\"ssqlogo1\">Siam</span><span class=\"ssqlogo2\">Square</span></h2>\n";
echo "<p>We are a market research service platform which is built from an intention to help clients changing the way they access consumer insights. We believe consumer insights should be accurate and more responsive in order to allow a quicker business decision to be made and being ahead of competition.</p>\n";
echo "<p>Only registered clients can access to our service. Feel free to contact us for more infomation or send us a request for an access.</p>\n";
echo "<br>\n";

if (isset($login)) {
  if ($login->errors) { foreach ($login->errors as $error) { echo $error; } }
  if ($login->messages) { foreach ($login->messages as $message) { echo $message; } }
}

?>
<br>

<form id="clientloginform" method="post" class="form-horizontal" action="<?php echo(htmlspecialchars($me)); ?>">
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
  <br>
  <p class="text-center">
    <strong>[</strong> <i class="pe-flag-o pe-fw"></i> <a href="/admin/setup/" title="Account activation">Account activation</a>
    <strong>&middot;</strong> <i class="pe-life-ring pe-fw"></i> <a href="/admin/setup/?d=recovery" title="Reset password">Forgot password?</a>
    <strong>&middot;</strong> <i class="pe-envelope-o pe-fw"></i> <a href="/admin/contact/" title="Contact us">Contact us</a>
    <strong>]</strong>
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
        email: { err: 'tooltip', validators: { notEmpty: { message: 'Login is required' }, emailAddress: { message: 'Please enter a valid email address' } } },
        password: { err: 'tooltip', validators: { notEmpty: { message: 'Password is required' }, stringLength: { min: 4, message: 'Password must be more than 6 characters long' }, different: { field: 'email', message: 'The password cannot be the same as the login' } } }
      }
    });
  });
</script>

<div class="alert alert-warning alert-dismissible" role="alert"><a class="close" data-dismiss="alert" aria-label="close">&times;</a>
  <h4><i class="pe-exclamation-triangle pe-fw pe-lg"></i> Unauthorised access to this system is prohibited by law</h4>
  <p>You are accessing a private computer network which includes: (1) this machine, (2) this computer network, (3) all computers/servers connected to this network, and (4) all devices and storage media attached to this network or to a computer on this network. This information system is provided for registered clients authorised use only. Unauthorized or improper use of this system may result in disciplinary action, as well as civil and criminal penalties.</p>
  <p>If you do not have an access, please contact sales for setting up a master login/password for your company.</p>
  <p>By using this information system, you understand and consent to the following:</p>
  <ul class="pe-ul">
    <li><i class="pe-li pe-check-square"></i> You have no reasonable expectation of privacy regarding any communication or data transiting or stored on this information system. At any time, and for any lawful purpose, we may monitor, intercept, and search and seize any communication or data transiting or stored on this information system.</li>
    <li><i class="pe-li pe-check-square"></i> Any communication or data transiting or stored on this information system may be disclosed or used for any lawful purpose.</li>
    <li><i class="pe-li pe-check-square"></i> Information you see must not be shared to the public due to our terms of confidentiality.</li>
  </ul>
</div>

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
