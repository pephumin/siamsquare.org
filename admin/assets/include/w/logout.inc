<?php

require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/login.class.php';
$target = "/admin";

echo "<h2>$title</h2>";
echo mksuccess("You have been successfully logged out. We will redirect you to the front page in a moment.");
echo "<p>Thank you for using our system. And feel free to come back as often as you need.</p>\n";
echo "<p>You can click <a href=\"$target\">here</a> if you choose not to wait in order to log back in to our system.</p>";
echo "<br>";

$notes = array (
  array("title" => "Logged out", "text" => "You have been successfully logged out from our system.", "image" => "assets/img/notification.svg"),
  //array("title" => "Log in when you need", "text" => "You can always log in back to our system at 24/7.", "image" => "assets/img/notification.svg")
);

header("refresh: 10; url=$target");

?>
