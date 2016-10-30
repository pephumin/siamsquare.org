<?php

require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/login.class.php';

echo "<h2>You have been logged out</h2>";
echo mksuccess("You have been successfully logged out. We will redirect you to the front page in a moment.");
echo "<p><a href=".$target.">You can click here if you choose not to wait in order to log back in to our system.</a></p>";
echo "<br><br>";

$notes = array (
  array("title" => "Logged out", "text" => "You have been successfully logged out from our system.", "image" => "assets/img/notification.svg"),
  array("title" => "Log in when you need", "text" => "You can always log in back to our system at 24/7.", "image" => "assets/img/notification.svg")
);

header("refresh: 10; url=$target");

?>