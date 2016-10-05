<?php

require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/config.php';

$referer = isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : '';
//echo $referer;

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
$body ="From: $name ($email)\nChannel: [pebinary.com] landing/large\n\nMessage:\nNone (by default)\n\n";
$headers = 'From: '.$email."\r\n" .
           'Reply-To: '.$email."\r\n" .
           'X-Mailer: PHP/' . phpversion();

if ($referer == MYHOME) {
  @mail(MYEMAIL, $subject, $body, $headers);
  echo "Your message has been sent successfully. We will get back to you shortly.\n";
  echo "We are now redirecting you back to the main website.\n";
  header("Location: http://www.pebinary.com/");
}

?>
