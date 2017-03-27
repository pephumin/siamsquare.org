<?php

require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/config.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/template.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/functions.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/class.login.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/class.phpmailer.php';

$sent = false;
$disable = false;
$me1 = "/admin/contact/";
$me2 = "/admin/contact/?d=request";

$login = new Login();

if (empty($_SESSION["captcha"])) { $clength = 8; $rText = generateRandom($clength); session_start(); $_SESSION["captcha"] = $rText; }


if ((empty($_GET['d'])) || ($_GET['d'] == "contact")) {
  // contact us
  $title = "Contact us";
  if (isset($_POST['captcha'])) {
    $name = cleanstring($_POST['name']);
    $email = cleanstring($_POST['email']);
    $message = cleanstring($_POST['message']);
    $captcha = cleanstring($_POST['captcha']);
    if (!$name) { echo "Error: No name provided.\n"; exit; }
    if (!$email) { echo "Error: No email provided.\n"; exit; }
    if (!$message) { echo "Error: No message provided.\n"; exit; }
    if (!$captcha) { echo "Error: No answer to captcha.\n"; exit; }
    if ($_POST['captcha'] == $_SESSION['captcha']) {
      $mail = new PHPMailer;
      $mail->IsMail();
      $mail->setFrom(EMAILNOREPLY);
      $mail->addReplyTo($email, $name);
      $mail->addAddress(EMAILADMIN);
      if ($_POST['copyme'] == 1) { $mail->addAddress($email); }
      $mail->Subject = "Contact query at ".MYTITLE;
      $mail->IsHTML(true);
      $mail->CharSet="utf-8";
      $date = date("M d, Y"); $time = date("h:m");
      $datetime = "Email sent on ".$date." at ".$time;
      $template = $_SERVER['DOCUMENT_ROOT'].'/admin/assets/email/contact.html';
      $sender = $name." (".$email.")";
      $mm = file_get_contents($template, $mm);
      $mm = str_replace('%message%', nl2br($message), $mm);
      $mm = str_replace('%datetime%', $datetime, $mm);
      $mm = str_replace('%subject%', $subject, $mm);
      $mm = str_replace('%from%', $email, $mm);
      $mm = str_replace('%sender%', $sender, $mm);
      $mm = str_replace('%siamsquare%', MYTITLE, $mm);
      $mail->msgHTML($mm);
      if (!$mail->Send()) { $msg = mkerror("Email was not sent. Error: " . $mail->ErrorInfo); $sent = false; }
      else { $msg = mksuccess("Thank you for contacting us. Your message has been sent successfully. And we will get back to you shortly."); $sent = true; }
    }
    else { $msg = mkerror("Your answer to captcha is incorrect"); }
  }
  pageHeader($title);
  echo "<h2>$title</h2>\n";
  echo "<p>Drop us a line today by using this contact form to write us a message at anytime. And we will make sure that we will respond to every single message as quickly as possible.</p>\n";
  echo "<p>We <i class=\"pe-heart\"></i> to hear from you</p>\n";
  if ($msg) { echo $msg; }
  echo "<br>\n";
?>
<form id="contactus" class="form-horizontal" role="form" method="post" action="<?php echo htmlspecialchars($me1); ?>">
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">Name</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <div class="input-group">
        <span class="input-group-addon"><i class="pe-user pe-fw"></i></span>
<?php if ($sent) { ?>
        <input type="text" class="form-control" name="name" style="font-family:'boon'; font-size:1.1rem; color:black" placeholder="First &amp; last Name" value="<?php echo htmlspecialchars($name); ?>" disabled>
<?php } else if ($_SESSION["logged_in"] == 1) { ?>
        <input type="text" class="form-control" name="name" style="font-family:'boon'; font-size:1.1rem; color:black" placeholder="First &amp; last Name" value="<?php echo $_SESSION["fullname"]; ?>" readonly>
<?php } else { ?>
        <input type="text" class="form-control" name="name" style="font-family:'boon'; font-size:1.1rem; color:black" placeholder="First &amp; last Name" value="<?php echo htmlspecialchars($name); ?>">
<?php } ?>
      </div>
      <span class="text-muted small" style="font-family:'boon'; font-size:0.9rem; color:black"><small>Please enter your name / กรุณาใส่ชื่อและนามสกุลของคุณ</small></span>
    </div>
  </div>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">Email</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <div class="input-group">
        <span class="input-group-addon"><i class="pe-envelope pe-fw"></i></span>
<?php if ($sent) { ?>
        <input type="email" class="form-control" name="email" style="font-family:'boon'; font-size:1.1rem; color:black" placeholder="email@company.com" value="<?php echo htmlspecialchars($email); ?>" disabled>
<?php } else if ($_SESSION["logged_in"] == 1) { ?>
        <input type="email" class="form-control" name="email" style="font-family:'boon'; font-size:1.1rem; color:black" placeholder="email@company.com" value="<?php echo $_SESSION["email"]; ?>" readonly>
<?php } else { ?>
        <input type="email" class="form-control" name="email" style="font-family:'boon'; font-size:1.1rem; color:black" placeholder="email@company.com" value="<?php echo htmlspecialchars($email); ?>">
<?php } ?>
      </div>
      <span class="text-muted small" style="font-family:'boon'; font-size:0.9rem; color:black"><small>Please enter your email / กรุณาใส่อีเมล์ลของคุณ</small></span>
    </div>
  </div>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">Message</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <div class="input-group">
        <span class="input-group-addon input-group-addon-top"><i class="pe-commenting pe-fw"></i></span>
<?php if ($sent) { ?>
        <textarea class="form-control" rows="7" name="message" style="font-family:'boon'; font-size:1.1rem; color:black" placeholder="Your message can be as long as you need" readonly><?php echo htmlspecialchars($message);?></textarea>
<?php } else { ?>
        <textarea class="form-control" rows="7" name="message" style="font-family:'boon'; font-size:1.1rem; color:black" placeholder="Your message can be as long as you need"><?php echo htmlspecialchars($message);?></textarea>
<?php } ?>
      </div>
      <span class="text-muted small" style="font-family:'boon'; font-size:0.9rem; color:black"><small>Type your message / พิมพ์ข้อความของคุณได้ไม่จำกัด</small></span>
    </div>
  </div>
  <div class="form-group">
    <div class="col-xs-12 col-sm-offset-3 col-md-offset-3 col-lg-offset-3 col-sm-7 col-md-7 col-lg-7">
<?php if ($sent) { ?>
  <?php if ($_POST['copyme'] == 1) { ?>
      <div class="checkbox"><label class="red"><input type="checkbox" name="copyme" value="1" style="position:relative" checked disabled> A copy of this message has been sent to your email</label></div>
  <?php } else { ?>
      <div class="checkbox"><label><input type="checkbox" name="copyme" value="1" style="position:relative" disabled> Send a copy of this message to my email</label></div>
  <?php } ?>
<?php } else { ?>
      <div class="checkbox"><label><input type="checkbox" name="copyme" value="1" style="position:relative"> Send a copy of this message to my email</label></div>
    </div>
  </div>
<?php } ?>
  <hr>
<?php if ($sent) { } else if ($_SESSION["logged_in"] == 1) { ?>
  <input type="hidden" name="captcha" value="<?php echo $_SESSION["captcha"]; ?>">
<?php } else { ?>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">Confirmation</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <p>Please type in the words as shown in this picture<br>
      <img src="/admin/assets/include/captcha.php" alt="captcha"></p>
      <div class="input-group">
        <span class="input-group-addon"><i class="pe-cog pe-fw"></i></span>
<?php if ($sent) { ?>
          <input type="text" name="captcha" class="form-control" style="font-family:'boon'; font-size:1.1rem; color:black" placeholder="Please type the words as shown below" value="<?php echo htmlspecialchars($captcha); ?>" disabled>
<?php } else { ?>
        <input type="text" name="captcha" class="form-control" style="font-family:'boon'; font-size:1.1rem; color:black" placeholder="Please type the words as shown below" value="<?php echo htmlspecialchars($captcha); ?>">
<?php } ?>
      </div>
      <span class="text-muted small" style="font-family:'boon'; font-size:0.9rem; color:black"><small>Type captcha / พิมพ์ตามตัวอย่างที่แสดง</small></span>
    </div>
  </div>
  <hr>
<?php } ?>
  <p class="text-center">
<?php if ($sent) { ?>
    <button type="submit" class="btn btn-warning" disabled>Send <i class="pe-paper-plane"></i></button>
<?php } else { ?>
    <button type="submit" class="btn btn-warning">Send <i class="pe-paper-plane"></i></button>
    <input type="hidden" name="d" value="contact">
<?php } ?>
    <button type="submit" class="btn btn-default">Cancel <i class="pe-times-circle-o"></i></button>
  </p>
</form>
<script>
  $(document).ready(function() {
    $('#contactus').formValidation({
      framework: 'bootstrap',
      icon: { valid: 'pe-check', invalid: 'pe-times', validating: 'pe-refresh' },
      button: { selector: '[type="submit"]', disabled: '' },
      excluded: ':disabled',
      fields: {
        name: { err: 'tooltip', validators: { notEmpty: { message: 'Please enter your first and last name' }, } },
        email: { err: 'tooltip', validators: { notEmpty: { message: 'Please enter your email' }, emailAddress: { message: 'Your email is invalid' } } },
        message: { validators: { notEmpty: { message: 'Please type your message' } } },
<?php if (($sent) || ($_SESSION["logged_in"] == 1)) { } else { ?>
        captcha: { err: 'tooltip', validators: { notEmpty: { message: 'Captcha is required' }, stringLength: { min: 8, message: 'Captcha must be 8 characters long' } } }
<?php } ?>
      }
    });
  });
</script>
<?php
} else if ($_GET['d'] == "request") {
  if ($_SESSION["logged_in"] == 1) { $msg = mkerror("You already have an access to our system, so no need to request anything. If this request is actually for your colleague, please logout and reload this page. And this page will be available to fill in."); $disable = true; }
  // request for an access
  $title = "Request for an access";
  if (isset($_POST['captcha'])) {
    $name = cleanstring($_POST['name']);
    $email = cleanstring($_POST['email']);
    $message = cleanstring($_POST['message']);
    $captcha = cleanstring($_POST['captcha']);
    if (!$name) { echo "Error: No name provided.\n"; exit; }
    if (!$email) { echo "Error: No email provided.\n"; exit; }
    if (!$message) { echo "Error: No message provided.\n"; exit; }
    if (!$captcha) { echo "Error: No answer to captcha.\n"; exit; }
    if ($_POST['captcha'] == $_SESSION['captcha']) {
      $mail = new PHPMailer;
      $mail->IsMail();
      $mail->setFrom(EMAILNOREPLY);
      $mail->addReplyTo($email, $name);
      $mail->addAddress(EMAILADMIN);
      if ($_POST['copyme'] == 1) { $mail->addAddress($email); }
      $mail->Subject = "Request for an access at ".MYTITLE;
      $mail->IsHTML(true);
      $mail->CharSet="utf-8";
      $date = date("M d, Y"); $time = date("h:m");
      $datetime = "Email sent on ".$date." at ".$time;
      $template = $_SERVER['DOCUMENT_ROOT'].'/admin/assets/email/contact.html';
      $sender = $name." (".$email.")";
      $mm = file_get_contents($template, $mm);
      $mm = str_replace('%message%', nl2br($message), $mm);
      $mm = str_replace('%datetime%', $datetime, $mm);
      $mm = str_replace('%subject%', $subject, $mm);
      $mm = str_replace('%from%', $email, $mm);
      $mm = str_replace('%sender%', $sender, $mm);
      $mm = str_replace('%siamsquare%', MYTITLE, $mm);
      $mail->msgHTML($mm);
      if (!$mail->Send()) { $msg = mkerror("Email was not sent. Error: " . $mail->ErrorInfo); $sent = false; }
      else { $msg = mksuccess("Thank you for contacting us. Your message has been sent successfully. And we will get back to you shortly."); $sent = true; }
    }
    else { $msg = mkerror("Your answer to captcha is incorrect"); }
  }
  pageHeader($title);
  echo "<h2>$title</h2>\n";
  echo "<p>Whether you are current or future client, it is possible to request for an access to our system.</p>\n";
  echo "<p>And you will see how easy you can use our system for managing your projects starting from questionnaire design, fieldwork monitoring, and result visualisation in both graph and table.</p>\n";
  if ($msg) { echo $msg; }
  echo "<br>\n";
?>
<form id="requestaccess" class="form-horizontal" role="form" method="post" action="<?php echo htmlspecialchars($me2); ?>">
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">Name</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <div class="input-group">
        <span class="input-group-addon"><i class="pe-user pe-fw"></i></span>
<?php if ($sent || $disable) { ?>
        <input type="text" class="form-control" name="name" style="font-family:'boon'; font-size:1.1rem; color:black" placeholder="First &amp; last name" value="<?php echo htmlspecialchars($name); ?>" disabled>
<?php } else { ?>
        <input type="text" class="form-control" name="name" style="font-family:'boon'; font-size:1.1rem; color:black" placeholder="First &amp; last name" value="<?php echo htmlspecialchars($name); ?>">
<?php } ?>
      </div>
      <span class="text-muted small" style="font-family:'boon'; font-size:0.9rem; color:black"><small>Please enter your name / กรุณาใส่ชื่อและนามสกุลของคุณ</small></span>
    </div>
  </div>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">Email</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <div class="input-group">
        <span class="input-group-addon"><i class="pe-envelope pe-fw"></i></span>
<?php if ($sent || $disable) { ?>
        <input type="email" class="form-control" name="email" style="font-family:'boon'; font-size:1.1rem; color:black" placeholder="email@company.com" value="<?php echo htmlspecialchars($email); ?>" disabled>
<?php } else { ?>
        <input type="email" class="form-control" name="email" style="font-family:'boon'; font-size:1.1rem; color:black" placeholder="email@company.com" value="<?php echo htmlspecialchars($email); ?>">
<?php } ?>
      </div>
      <span class="text-muted small" style="font-family:'boon'; font-size:0.9rem; color:black"><small>Please enter your email / กรุณาใส่อีเมล์ลของคุณ</small></span>
    </div>
  </div>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">Message</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <div class="input-group">
        <span class="input-group-addon input-group-addon-top"><i class="pe-commenting pe-fw"></i></span>
<?php if ($sent || $disable) { ?>
        <textarea class="form-control" rows="7" name="message" style="font-family:'boon'; font-size:1.1rem; color:black" placeholder="Your message can be as long as you need" disabled><?php echo htmlspecialchars($message);?></textarea>
<?php } else { ?>
        <textarea class="form-control" rows="7" name="message" style="font-family:'boon'; font-size:1.1rem; color:black" placeholder="Your message can be as long as you need"><?php echo htmlspecialchars($message);?></textarea>
<?php } ?>
      </div>
      <span class="text-muted small" style="font-family:'boon'; font-size:0.9rem; color:black"><small>Type your message / พิมพ์ข้อความของคุณได้ไม่จำกัด</small></span>
    </div>
  </div>
  <div class="form-group">
    <div class="col-xs-12 col-sm-offset-3 col-md-offset-3 col-lg-offset-3 col-sm-7 col-md-7 col-lg-7">
<?php if ($sent || $disable) { ?>
  <?php if ($_POST['copyme'] == 1) { ?>
      <div class="checkbox"><label class="red"><input type="checkbox" name="copyme" value="1" style="position:relative" checked disabled> A copy of this message has been sent to your email</label></div>
  <?php } else { ?>
      <div class="checkbox"><label><input type="checkbox" name="copyme" value="1" style="position:relative" disabled> Send a copy of this message to my email</label></div>
  <?php } ?>
<?php } else { ?>
      <div class="checkbox"><label><input type="checkbox" name="copyme" value="1" style="position:relative"> Send a copy of this message to my email</label></div>
    </div>
  </div>
<?php } ?>
  <hr>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">Confirmation</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <p>Please type in the words as shown in this picture<br>
      <img src="/admin/assets/include/captcha.php" alt="captcha"></p>
      <div class="input-group">
        <span class="input-group-addon"><i class="pe-cog pe-fw"></i></span>
<?php if ($sent || $disable) { ?>
          <input type="text" name="captcha" class="form-control" style="font-family:'boon'; font-size:1.1rem; color:black" placeholder="Please type the words as shown below" value="<?php echo htmlspecialchars($captcha); ?>" disabled>
<?php } else { ?>
        <input type="text" name="captcha" class="form-control" style="font-family:'boon'; font-size:1.1rem; color:black" placeholder="Please type the words as shown below" value="<?php echo htmlspecialchars($captcha); ?>">
<?php } ?>
      </div>
      <span class="text-muted small" style="font-family:'boon'; font-size:0.9rem; color:black"><small>Type captcha / พิมพ์ตามตัวอย่างที่แสดง</small></span>
    </div>
  </div>
  <hr>
  <p class="text-center">
<?php if ($sent || $disable) { ?>
    <button type="submit" class="btn btn-warning" disabled>Send my request <i class="pe-paper-plane"></i></button>
<?php } else { ?>
    <button type="submit" class="btn btn-warning">Send my request <i class="pe-paper-plane"></i></button>
    <input type="hidden" name="d" value="request">
<?php } ?>
    <button type="submit" class="btn btn-default">Cancel <i class="pe-times-circle-o"></i></button>
  </p>
</form>
<script>
  $(document).ready(function() {
    $('#requestaccess').formValidation({
      framework: 'bootstrap',
      icon: { valid: 'pe-check', invalid: 'pe-times', validating: 'pe-refresh' },
      button: { selector: '[type="submit"]', disabled: '' },
      excluded: ':disabled',
      fields: {
        name: { err: 'tooltip', validators: { notEmpty: { message: 'Please enter your first and last name' }, } },
        email: { err: 'tooltip', validators: { notEmpty: { message: 'Please enter your email' }, emailAddress: { message: 'Your email is invalid' } } },
        message: { validators: { notEmpty: { message: 'Please type your message' } } },
        captcha: { err: 'tooltip', validators: { notEmpty: { message: 'Captcha is required' }, stringLength: { min: 8, message: 'Captcha must be 8 characters long' } } }
      }
    });
  });
</script>
<?php
}
?>

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
