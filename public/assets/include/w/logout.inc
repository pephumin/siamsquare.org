<?php

set_session_authentication(false);

$target = MYPUBLIC;

echo "<h2>คุณล็อคเอ้าท์ออกจากระบบแล้ว</h2>";
echo mksuccess("คุณได้ทำการล็อคเอ้าท์ออกจากระบบอย่างสมบูรณ์แล้ว อีกสักครู่เราจะเปลี่ยนหน้ากลับไปยังหน้าแรก");
echo "<p>คุณสามารถ<a href=".$target.">กดที่นี่</a> หากคุณต้องการไปยังหน้าแรกในทันทีและไม่ต้องการรอ</p>";
echo "<br><br>";

// $notes = array (
//   array("title" => "Logged out", "text" => "You have been successfully logged out from our system.", "image" => "assets/img/notification.svg"),
//   array("title" => "Log in when you need", "text" => "You can always log in back to our system at 24/7.", "image" => "assets/img/notification.svg")
// );
//
// notify($notes);

header("Refresh: 10; URL=$target");

?>
