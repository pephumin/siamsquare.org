<?php

require_once '../config.inc.php';

$name = cleanstring($_REQUEST['nameth']);
$email = cleanstring($_REQUEST['emailth']);
$message = cleanstring($_REQUEST['messageth']);

if (!$name) { echo "Error: คุณไม่ได้ระบุชื่อ\n"; exit; }
if (!$email) { echo "Error: คุณไม่ได้ระบุอีเมล์\n"; exit; }
if (!$message) { echo "Error: คุณไม่ได้พิมพ์ข้อความ\n"; exit; }

$from = "From: ".$email;
$subject = '[pebinary.net] online query from '.$email;
$body = "----- Header --------------- \n\n";
$body .= "From: $name ($email)\n\n";
$body .= "Channel: http://www.pebinary.net\n\n";
$body .= "Source: contact/form/th\n\n";
$body .= "----- Detail --------------- \n\n";
$body .= "Message:\n\n$message\n\n";
$headers = 'From: '.$email."\r\n" .
           'Reply-To: '.$email."\r\n" .
           'X-Mailer: PHP/' . phpversion();

if (false !== stripos($_SERVER['HTTP_REFERER'], "www.pebinary.net")) {
  @mail(MYEMAIL, $subject, $body, $headers);
?>

<!doctype html>
<html lang="th">
<head>
  <meta charset="utf-8">
  <meta http-equiv="refresh" content="10;url=http://www.pebinary.net/th">
  <title>ขอบคุณที่ส่งข้อความถึงเรา &middot; PE BINARY CO., LTD.</title>
  <link rel="stylesheet" type="text/css" href="http://www.pebinary.com/assets/css/main.css">
  <link rel="stylesheet" type="text/css" href="http://www.pebinary.com/assets/css/404.css">
</head>
<body>
<main>
<section class="dialog">
  <h2 class="th">ข้อความของคุณได้ถูกส่งเป็นที่เรียบร้อยแล้ว <i class="pe-check-square-o pe-fw"></i></h2>
  <p class="th">ขอบคุณที่ส่งข้อความถึงเรา เราให้ความสำคัญกับทุกๆข้อความของคุณ</p>
  <p class="th big">แล้วเราจะตอบกลับหาคุณภายในเวลา 2-3 วันทำการ</p>
  <p class="th small">
    <a href="http://www.pebinary.net/en">กรุณากดที่นี่</a> เพื่อที่จะกลับไปยังหน้าแรกของเรา <i class="pe-home pe-fw"></i> หรือ
    <a href="http://www.pebinary.com/contact/">ติดต่อเรา</a> <i class="pe-envelope-o pe-fw"></i> หากคุณต้องการจะรายงานปัญหา
  </p>
  <p class="text-center"><span class="logo1"><i class="pe-logo"></i></span> <span class="logo2">pe</span><span class="logo3">binary</span></p>
</section>
</main>
</body>
</html>

<?php
}
?>
