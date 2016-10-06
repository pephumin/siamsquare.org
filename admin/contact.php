<?php

$title = "Contact us";
require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/config.php';
require_once INCLUDEADM.'/template.php';

$sent = false;

if (isset($_REQUEST["name"])) {

  $name = cleanstring($_REQUEST['name']);
  $email = cleanstring($_REQUEST['email']);
  $message = cleanstring($_REQUEST['message']);
  $human = intval($_REQUEST['human']);

  if (!$name) { echo "Error: No name provided.\n"; exit; }
  if (!$email) { echo "Error: No email provided.\n"; exit; }
  if (!$message) { echo "Error: No message provided.\n"; exit; }
  if (!$human) { echo "Error: No answer to our question.\n"; exit; }

  $from = "From: ".$email;
  $subject = '[siamsquare.org] contact query from '.$email;
  $body ="From: $name ($email)\n\nChannel: [siamsquare.org]\n\nSource: admin/contact\n\nMessage:\n\n$message\n\n";
  $headers = 'From: '.$email."\r\n" .
             'Reply-To: '.$email."\r\n" .
             'X-Mailer: PHP/' . phpversion();

  if ($human == 5) { if (@mail(MYEMAIL, $subject, $body, $headers)) { $msg = mksuccess("Your message has been sent successfully. We will get back to you shortly."); $sent = true; } }
  else { $msg = mkerror("Your answer to our question is incorrect"); }

}

pageHeader($title);
echo "<h2>Contact us</h2>\n";
echo "<p>You can use this contact form to write us a message at anytime.</p>\n";
echo "<p>We <i class=\"pe-heart\"></i> to hear from you</p>\n";
echo "<br>\n";
if ($msg) { echo $msg; }
echo "<br>\n";

?>

<form class="form-horizontal" role="form" method="post" action="<?php echo htmlspecialchars(ME); ?>">
  <div id="contactus">
    <div class="form-group">
      <label for="name" class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">Name</label>
      <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
        <div class="input-group">
          <span class="input-group-addon"><i class="pe-user pe-fw"></i></span>
          <?php if ($sent) { ?>
          <input type="text" class="form-control" name="name" placeholder="First &amp; Last Name" value="<?php echo htmlspecialchars($_REQUEST['name']); ?>" disabled>
          <?php } else { ?>
          <input type="text" class="form-control" name="name" placeholder="First &amp; Last Name" value="<?php echo htmlspecialchars($_REQUEST['name']); ?>">
          <?php } ?>
        </div>
      </div>
    </div>
    <div class="form-group">
      <label for="name" class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">Email</label>
      <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
        <div class="input-group">
          <span class="input-group-addon"><i class="pe-envelope pe-fw"></i></span>
          <?php if ($sent) { ?>
          <input type="email" class="form-control" name="email" placeholder="email@company.com" value="<?php echo htmlspecialchars($_REQUEST['email']); ?>" disabled>
          <?php } else { ?>
          <input type="email" class="form-control" name="email" placeholder="email@company.com" value="<?php echo htmlspecialchars($_REQUEST['email']); ?>">
          <?php } ?>
        </div>
      </div>
    </div>
    <div class="form-group">
      <label for="name" class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">Message</label>
      <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
        <div class="input-group">
          <span class="input-group-addon input-group-addon-top"><i class="pe-commenting pe-fw"></i></span>
          <textarea class="form-control" rows="7" name="message" placeholder="Your message can be as long as you need"><?php echo htmlspecialchars($_REQUEST['message']);?></textarea>
        </div>
      </div>
    </div>
    <div class="form-group">
      <label for="name" class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">2 + 3 = ?</label>
      <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
        <div class="input-group">
          <span class="input-group-addon"><i class="pe-question pe-fw"></i></span>
          <?php if ($sent) { ?>
          <input type="text" class="form-control" name="human" placeholder="The answer for 2 + 3 is..." value="<?php echo htmlspecialchars($_REQUEST['human']); ?>" disabled>
          <?php } else { ?>
          <input type="text" class="form-control" name="human" placeholder="The answer for 2 + 3 is..." value="<?php echo htmlspecialchars($_REQUEST['human']); ?>">
          <?php } ?>
        </div>
      </div>
    </div>
    <div class="form-group">
      <div class="col-xs-offset-0 col-sm-offset-3 col-md-offset-3 col-lg-offset-3 col-xs-12 col-sm-7 col-md-7 col-lg-7">
        <?php if ($sent) { ?>
        <button type="submit" class="btn btn-warning" disabled>Send <i class="pe-paper-plane"></i></button>
        <?php } else { ?>
        <button type="submit" class="btn btn-warning">Send <i class="pe-paper-plane"></i></button>
        <?php } ?>
      </div>
    </div>
  </div>
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
        human: { validators: { notEmpty: { message: 'Please enter the answer of this question' }, stringLength: { max: 1, message: 'The answer has to be in one digit' }, regexp: { regexp: /^[0-9]+$/, message: 'The answer has to be in number only' } } }
      }
    });
  });
</script>

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
