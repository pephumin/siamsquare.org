<?php

$title = "Contact us";
require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/config.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/template.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/class.login.php';

$sent = false;

$login = new Login();

if (empty($_SESSION["captcha"])) { $clength = 8; $rText = generateRandom($clength); session_start(); $_SESSION["captcha"] = $rText; }

if (isset($_REQUEST['captcha'])) {

  $name = cleanstring($_REQUEST['name']);
  $email = cleanstring($_REQUEST['email']);
  $message = cleanstring($_REQUEST['message']);
  $captcha = cleanstring($_REQUEST['captcha']);

  if (!$name) { echo "Error: No name provided.\n"; exit; }
  if (!$email) { echo "Error: No email provided.\n"; exit; }
  if (!$message) { echo "Error: No message provided.\n"; exit; }
  if (!$captcha) { echo "Error: No answer to captcha.\n"; exit; }

  $from = "From: ".$email;
  $subject = '[siamsquare.org] contact query from '.$email;
  $body = "----- Header --------------- \n\n";
  $body .= "From: $name ($email)\n\n";
  $body .= "Channel: http://www.siamsquare.org\n\n";
  $body .= "Source: admin/contact\n\n";
  $body .= "----- Detail --------------- \n\n";
  $body .= "Message:\n\n$message\n\n";
  $headers = 'From: '.$email."\r\n" .
             'Reply-To: '.$email."\r\n" .
             'X-Mailer: PHP/' . phpversion();

  if ($_REQUEST['captcha'] == $_SESSION['captcha']) { @mail(MYEMAIL, $subject, $body, $headers); $msg = mksuccess("Your message has been sent successfully. We will get back to you shortly."); $sent = true; }
  else { $msg = mkerror("Your answer to captcha is incorrect"); }

}

pageHeader($title);
echo "<h2>Contact us</h2>\n";
echo "<p>You can use this contact form to write us a message at anytime.</p>\n";
echo "<p>We <i class=\"pe-heart\"></i> to hear from you</p>\n";
echo "<br>\n";
if ($msg) { echo $msg; }
echo "<br>\n";

?>

<form id="contactus" class="form-horizontal" role="form" method="post" action="<?php echo htmlspecialchars(ME); ?>">
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">Name</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <div class="input-group">
        <span class="input-group-addon"><i class="pe-user pe-fw"></i></span>
        <?php if ($sent) { ?>
        <input type="text" class="form-control" name="name" placeholder="First &amp; Last Name" value="<?php echo htmlspecialchars($name); ?>" disabled>
        <?php } else { ?>
        <input type="text" class="form-control" name="name" placeholder="First &amp; Last Name" value="<?php echo htmlspecialchars($name); ?>">
        <?php } ?>
      </div>
    </div>
  </div>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">Email</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <div class="input-group">
        <span class="input-group-addon"><i class="pe-envelope pe-fw"></i></span>
        <?php if ($sent) { ?>
        <input type="email" class="form-control" name="email" placeholder="email@company.com" value="<?php echo htmlspecialchars($email); ?>" disabled>
        <?php } else { ?>
        <input type="email" class="form-control" name="email" placeholder="email@company.com" value="<?php echo htmlspecialchars($email); ?>">
        <?php } ?>
      </div>
    </div>
  </div>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">Message</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <div class="input-group">
        <span class="input-group-addon input-group-addon-top"><i class="pe-commenting pe-fw"></i></span>
        <?php if ($sent) { ?>
        <textarea class="form-control" rows="7" name="message" placeholder="Your message can be as long as you need" disabled><?php echo htmlspecialchars($message);?></textarea>
        <?php } else { ?>
        <textarea class="form-control" rows="7" name="message" placeholder="Your message can be as long as you need"><?php echo htmlspecialchars($message);?></textarea>
        <?php } ?>
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
        <?php if ($sent) { ?>
          <input type="text" name="captcha" class="form-control" placeholder="Please type in the words as shown in the picture" value="<?php echo htmlspecialchars($captcha); ?>" disabled>
        <?php } else { ?>
        <input type="text" name="captcha" class="form-control" placeholder="Please type in the words as shown in the picture" value="<?php echo htmlspecialchars($captcha); ?>">
        <?php } ?>
      </div>
    </div>
  </div>
  <hr>
  <p class="text-center">
    <?php if ($sent) { ?>
    <button type="submit" class="btn btn-warning" disabled>Send <i class="pe-paper-plane"></i></button>
    <?php } else { ?>
    <button type="submit" class="btn btn-warning">Send <i class="pe-paper-plane"></i></button>
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
        name: { validators: { notEmpty: { message: 'Please enter your first and last name' }, } },
        email: { validators: { notEmpty: { message: 'Please enter your email' }, emailAddress: { message: 'Your email is invalid' } } },
        message: { validators: { notEmpty: { message: 'Please type your message' } } },
        captcha: { validators: { notEmpty: { message: 'Captcha is required' }, stringLength: { min: 8, message: 'Captcha must be 8 characters long' } } }
      }
    });
  });
</script>

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
