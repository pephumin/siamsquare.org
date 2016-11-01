<?php

require_once $_SERVER['DOCUMENT_ROOT'].'/public/assets/include/login.class.php';
$target = "/public";

echo "<h2>ล็อคเอ้าท์สำเร็จ</h2>";
echo mksuccess("คุณได้ทำการล็อคเอ้าท์ออกจากระบบอย่างสมบูรณ์แล้ว อีกสักครู่เราจะเปลี่ยนหน้ากลับไปยังหน้าแรก");
echo "<p>คุณสามารถ<a href=".$target.">กดที่นี่</a> หากคุณต้องการไปยังหน้าแรกในทันทีและไม่ต้องการรอ</p>";
echo "<br><br>";

$notes = array (
  array("title" => "Logged out", "text" => "คุณได้ทำการล็อคเอ้าท์ออกจากระบบอย่างสมบูรณ์แล้ว", "image" => "assets/img/notification.svg"),
  //array("title" => "Log in when you need", "text" => "You can always log in back to our system at 24/7.", "image" => "assets/img/notification.svg")
);

header("refresh: 10; url=$target");

?>
