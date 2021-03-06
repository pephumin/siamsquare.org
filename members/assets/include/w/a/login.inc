<?php

$title = "Client login";
pageHeader($title);
echo "<h2>$title</h2>";
echo "<p>This section is reserved only for our clients whom we have granted with a high level of secured access. Within this section you will be able to access to a highly confidential data such as questionnaire design, data collected from respondents, reports, etc. We carefully design our system to ensure such high important data is kept separately for different users or user groups.</p>\n";
echo "<p>Should you need an access to our system, or should you need any further support on how-to use our system, you can either contact us directly or read our documents at our support site.</p>\n";
echo "<br>\n";

if (isset($login)) {
  if ($login->errors) { foreach ($login->errors as $error) { echo $error; } }
  if ($login->messages) { foreach ($login->messages as $message) { echo $message; } }
}

?>

<form id="clientloginform" method="post" action="<?php echo ME; ?>" class="form-horizontal">
  <div class="form-group">
    <label for="email" class="col-sm-3 control-label">Email</label>
    <div class="col-sm-7">
      <div class="input-group">
        <span class="input-group-addon"><i class="pe-envelope pe-fw"></i></span>
        <input type="text" name="email" id="email" class="form-control" placeholder="email@domain.com" autofocus>
      </div>
    </div>
  </div>
  <div class="form-group">
    <label for="password" class="col-sm-3 control-label">Password</label>
    <div class="col-sm-7">
      <div class="input-group">
        <span class="input-group-addon"><i class="pe-key pe-fw"></i></span>
        <input type="password" name="password" id="password" class="form-control" placeholder="Password">
      </div>
    </div>
  </div>
  <!-- <div class="form-group">
    <div class="col-sm-offset-3 col-sm-9">
      <div class="checkbox checkbox-warning">
        <input id="rememberme" type="checkbox" checked> <label for="rememberme">Remember me</label>
      </div>
    </div>
  </div> -->
  <br>
  <div class="form-group">
    <div class="col-sm-offset-3 col-sm-9">
      <input type="hidden" name="do" value="login">
      <button class="btn btn-warning" name="Login" type="submit">Log in <i class="pe-check-circle-o"></i></button>
      <button class="btn btn-default" name="Cancel" type="reset">Cancel <i class="pe-times-circle-o"></i></button>
    </div>
  </div>
</form>
<script>
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
