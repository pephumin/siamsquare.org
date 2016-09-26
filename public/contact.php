<?php

$_SERVER['BASE_PAGE'] = 'contact.php';
$title = 'Contact us';
require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/config.php';
require_once DOCROOT.'/admin/assets/include/lib.inc';
require_once DOCROOT.'/public/assets/include/template.php';
require_once DOCROOT.'/public/assets/include/first.php';

//$base =& $GLOBALS['ESPCONFIG']['ME'];

if (isset($_POST["submit"])) {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  $human = intval($_POST['human']);
  $from = 'Online query via siamsqure.org';
  $to = 'phumin@sawasdee.org';
  $subject = 'Message from siamsquare.org';

  $body ="From: $name\n E-Mail: $email\n Message:\n $message";

  if (!$_POST['name']) { $errName = 'Please enter your name'; }
  if (!$_POST['email'] || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) { $errEmail = 'Please enter a valid email address'; }
  if (!$_POST['message']) { $errMessage = 'Please enter your message'; }
  if ($human !== 5) { $errHuman = 'Your anti-spam is incorrect'; }

  // If there are no errors, send the email
  if (!$errName && !$errEmail && !$errMessage && !$errHuman) {
    if (mail ($to, $subject, $body, $from)) { $result='<div class="alert alert-success">Thank You! I will be in touch</div>'; }
    else { $result='<div class="alert alert-danger">Sorry there was an error sending your message. Please try again later.</div>'; }
  }
}

pageHeader($title);

?>

<h2>Contact us</h2>

<form class="form-horizontal" role="form" method="post" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>">
  <div class="form-group">
    <label for="name" class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">Name</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <input type="text" class="form-control" id="name" name="name" placeholder="First &amp; Last Name" value="<?php echo htmlspecialchars($_POST['name']); ?>">
      <?php echo "<p class='text-danger'>$errName</p>";?>
    </div>
  </div>
  <div class="form-group">
    <label for="email" class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">Email</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <input type="email" class="form-control" id="email" name="email" placeholder="example@domain.com" value="<?php echo htmlspecialchars($_POST['email']); ?>">
      <?php echo "<p class='text-danger'>$errEmail</p>";?>
    </div>
  </div>
  <div class="form-group">
    <label for="message" class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">Message</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <textarea class="form-control" rows="4" name="message"><?php echo htmlspecialchars($_POST['message']);?></textarea>
      <?php echo "<p class='text-danger'>$errMessage</p>";?>
    </div>
  </div>
  <div class="form-group">
    <label for="human" class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">2 + 3 = ?</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <input type="text" class="form-control" id="human" name="human" placeholder="Your Answer">
      <?php echo "<p class='text-danger'>$errHuman</p>";?>
    </div>
  </div>
  <div class="form-group">
    <div class="col-xs-offset-0 col-sm-offset-3 col-md-offset-3 col-lg-offset-3 col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <button type="submit" class="btn btn-info">Send <i class="pe-paper-plane"></i></button>
    </div>
  </div>
  <div class="form-group">
    <div class="col-xs-offset-0 col-sm-offset-3 col-md-offset-3 col-lg-offset-3 col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <?php echo $result; ?>
    </div>
  </div>
</form>

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
