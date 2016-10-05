<?php

require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/config.php';

$name = cleanstring($_REQUEST['name']);
$email = cleanstring($_REQUEST['email']);
// $message = cleanstring($_REQUEST['message']);
// $human = intval($_REQUEST['human']);

if (!$name) { echo "Error: No name provided.\n"; exit; }
if (!$email) { echo "Error: No email provided.\n"; exit; }
// if (!$message) { echo "Error: No message provided.\n"; exit; }
// if ($human !== 5) { $error .= "Error: Incorrect answer was submitted"; exit; }

$from = "From: ".$email;
$subject = '[pebinary.com] online query from '.$email;
$body ="From: $name ($email)\n\nChannel: [pebinary.com]\n\nSource: landing/small\n\nMessage:\n\n[NO MESSAGES]\n\n";
$headers = 'From: '.$email."\r\n" .
           'Reply-To: '.$email."\r\n" .
           'X-Mailer: PHP/' . phpversion();

if (false !== stripos($_SERVER['HTTP_REFERER'], "www.pebinary.com")) {
  @mail(MYEMAIL, $subject, $body, $headers);
?>

<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="refresh" content="10;url=http://www.pebinary.com">
  <title>Thank you for your message &middot; PE BINARY CO., LTD.</title>
  <link rel="stylesheet" type="text/css" href="http://www.pebinary.com/assets/css/main.css">
  <link rel="stylesheet" type="text/css" href="http://www.pebinary.com/assets/css/404.css">
</head>
<body>
<main>
<section class="dialog">
  <h2>Your message has been sent successfully <i class="pe-check-square-o pe-fw"></i></h2>
  <p>Thank you for sending us a message. We make sure all messages are taken care seriously.</p>
  <p class="big">Please expect our reply within a few working days.</p>
  <p class="small">
    <a href="http://www.pebinary.com">Click here</a> to go back to the front page <i class="pe-home pe-fw"></i> or
    <a href="http://www.pebinary.com/contact/">contact us</a> <i class="pe-envelope-o pe-fw"></i> to report this problem.
  </p>
  <p class="text-center"><span class="logo1"><i class="pe-logo"></i></span> <span class="logo2">pe</span><span class="logo3">binary</span></p>
</section>
</main>
</body>
</html>

<?php
}
?>
