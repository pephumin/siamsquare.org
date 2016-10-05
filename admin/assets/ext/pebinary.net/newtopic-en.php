<?php

require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/config.php';

$newquestion = cleanstring($_REQUEST['newquestionen']);
$section = cleanstring($_REQUEST['section']);

if (!$newquestion) { echo "Error: No question provided.\n"; exit; }
if (!$section) { echo "Error: No section provided.\n"; exit; }

$from = "From: ".SYSTEMEMAIL;
$subject = '[pebinary.net] new question suggested';
$body ="From: ".SYSTEMEMAIL."\n\nChannel: [pebinary.net]\n\nSource: newtopic/form\n\nQuestion: $newquestion\n\nSection: $section\n\n";
$headers = 'From: '.SYSTEMEMAIL."\r\n" .
           'Reply-To: '.SYSTEMEMAIL."\r\n" .
           'X-Mailer: PHP/' . phpversion();

if (false !== stripos($_SERVER['HTTP_REFERER'], "www.pebinary.net")) {
  @mail(MYEMAIL, $subject, $body, $headers);
?>

<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="refresh" content="10;url=http://www.pebinary.net/en">
  <title>Thank you for your message &middot; PE BINARY CO., LTD.</title>
  <link rel="stylesheet" type="text/css" href="http://www.pebinary.com/assets/css/main.css">
  <link rel="stylesheet" type="text/css" href="http://www.pebinary.com/assets/css/404.css">
</head>
<body>
<main>
<section class="dialog">
  <h2>Your suggested question has been sent successfully <i class="pe-check-square-o pe-fw"></i></h2>
  <p>Thank you for sending us a suggestion on a new question/topic. We will consider it very seriously.</p>
  <p class="big">And if we agree with you, we will post it online soon.</p>
  <p class="small">
    <a href="http://www.pebinary.net/en">Click here</a> to go back to the front page <i class="pe-home pe-fw"></i> or
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
