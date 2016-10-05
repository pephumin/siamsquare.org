<?php

require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/config.php';

$newquestion = cleanstring($_REQUEST['newquestionth']);
$section = cleanstring($_REQUEST['section']);

if (!$newquestion) { echo "Error: คุณไม่ได้พิมพ์ข้อความ\n"; exit; }
if (!$section) { echo "Error: ไม่มีหมวดหมู่ของบทความ\n"; exit; }

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
<html lang="th">
<head>
  <meta charset="utf-8">
  <meta http-equiv="refresh" content="10;url=http://www.pebinary.net/th">
  <title>ขอบคุณที่ส่งคำถามใหม่มาให้เรา &middot; PE BINARY CO., LTD.</title>
  <link rel="stylesheet" type="text/css" href="http://www.pebinary.com/assets/css/main.css">
  <link rel="stylesheet" type="text/css" href="http://www.pebinary.com/assets/css/404.css">
</head>
<body>
<main>
<section class="dialog">
  <h2 class="th">คำถามใหม่ของคุณได้ถูกส่งเป็นที่เรียบร้อยแล้ว <i class="pe-check-square-o pe-fw"></i></h2>
  <p class="th">ขอบคุณที่ส่งคำถามใหม่มาให้เรา เราให้พิจารณาอย่างดีกับหัวข้อใหม่ที่คุณส่งมา</p>
  <p class="th big">หากเราเห็นด้วยกับคุณ เราจะเพิ่มหัวข้อที่คุณแนะนำนี้ในเวลาไม่นาน</p>
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
