<?php

$title = "Update your information";
pageHeader($title);
echo "<h2>$title</h2>";
echo "<p>You can update your informtion in this page. However, please be noted that there are some specific information that requires our involvement to get changed since it will impact to the registration record and how we manage our users.</p>\n";
echo "<p>Feel free to contact us if you find any problems using our site. Any other suggestions are also more than welcome.</p>\n";
// echo "<br>\n";

require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/config.php';

if (empty($_SESSION["captcha"])) { $clength = 8; $rText = generateRandom($clength); $_SESSION["captcha"] = $rText; }

if (isset($_REQUEST['captcha'])) {

  $email = $_SESSION['email'];
  $fullname = $_POST['fullname'];
  $mobile = $_POST['mobile'];

  if ($_REQUEST['captcha'] == $_SESSION['captcha']) {
    $db = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_DATABASE);
    if (!$db->set_charset("utf8")) { $errors[] = $db->error; }
    $sql1 = "UPDATE j_users SET fullname = '".$fullname."', mobile = '".$mobile."' WHERE email = '".$email."';";
    // echo $sql1;
    $query = $db->query($sql1);
    if ($query) { echo mksuccess("Your information has been updated successfully."); }
    $sql2 = "INSERT INTO j_users_logs (userid, ip, data) VALUE ('".$_SESSION["userid"]."', '".$_SESSION["ip"]."', '".$_SESSION["email"]." changed info');";
    // echo $sql2;
    $db->query($sql2);
  }
  else { echo mkerror("Wrong captcha."); }
}

?>

<hr>

<form id="changeinfo" class="form-horizontal" method="post" action="<?php echo(htmlspecialchars(ME)); ?>">
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">Email</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <div class="input-group">
        <span class="input-group-addon"><i class="pe-envelope pe-fw"></i></span>
        <input type="text" name="email" class="form-control" placeholder="<?php echo $_SESSION['email']; ?>" disabled>
      </div>
      <input type="hidden" name="email" value="<?php echo $_SESSION['email']; ?>">
      <span class="red" style="font-size:0.8rem">If you need to change this, please contact us separately.</span>
    </div>
  </div>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">Company</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <div class="input-group">
        <span class="input-group-addon"><i class="pe-key pe-fw"></i></span>
        <input type="text" name="company" class="form-control" placeholder="<?php echo $_SESSION['company']; ?>" disabled>
      </div>
      <span class="red" style="font-size:0.8rem">If you need to change this, please contact us separately.</span>
      <input type="hidden" name="company" value="<?php echo $_SESSION['company']; ?>">
    </div>
  </div>
  <hr>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">Full name</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <div class="input-group">
        <span class="input-group-addon"><i class="pe-user pe-fw"></i></span>
        <?php if ($_SESSION['fullname']) { ?>
        <input type="text" name="fullname" class="form-control" placeholder="First name and surname" value="<?php echo $_SESSION['fullname']; ?>">
        <?php } else { ?>
        <input type="text" name="fullname" class="form-control" placeholder="First name and surname">
        <?php } ?>
      </div>
    </div>
  </div>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">Mobile No.</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <div class="input-group">
        <span class="input-group-addon"><i class="pe-mobile pe-fw"></i></span>
        <?php if ($_SESSION['mobile']) { ?>
        <input type="text" name="mobile" class="form-control" placeholder="0814447777" value="<?php echo $_SESSION['mobile']; ?>">
        <?php } else { ?>
          <input type="text" name="mobile" class="form-control" placeholder="0814447777">
        <?php } ?>
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
    <input type="hidden" name="w" value="changeinfo">
    <button type="submit" class="btn btn-warning">Change <i class="pe-check-circle-o"></i></button>
    <button type="submit" class="btn btn-default">Cancel</button>
  </p>
</form>
<script>
  $(document).ready(function() {
    $('#changeinfo').formValidation({
      framework: 'bootstrap',
      icon: { valid: 'pe-check', invalid: 'pe-times', validating: 'pe-refresh' },
      button: { selector: '[type="submit"]', disabled: '' },
      excluded: ':disabled',
      fields: {
        fullname: { validators: { notEmpty: { message: 'Please enter your first and last name' } } },
        mobile: { validators: { notEmpty: { message: 'Please enter your mobie number' }, stringLength: { min: 10, message: 'It has to be 10 digits only' }, regexp: { regexp: /^[0-9]+$/, message: 'Only numbers are allowed' } } },
        captcha: { validators: { notEmpty: { message: 'Captcha is required' }, stringLength: { min: 8, message: 'Captcha must be 8 characters long' } } }
      }
    });
  });
</script>

<!-- <a href="/admin/?w=activity" class="btn btn-danger btn-sm pull-right" style="margin-top:50px; margin-bottom: 20px"><i class="pe-chevron-circle-left pe-fw"></i> Back to My Profile</a> -->

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
