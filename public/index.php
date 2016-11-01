<?php

require_once $_SERVER['DOCUMENT_ROOT'].'/public/assets/include/config.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/public/assets/include/template.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/public/assets/include/login.class.php';

$login = new Login();

if ($login->isUserLoggedIn() != true) { include $_SERVER['DOCUMENT_ROOT'].'/public/assets/include/w/login.inc'; }
else { $w = ''; if (empty($w) && isset($_REQUEST['w'])) { $w = $_REQUEST['w']; } include(w($w)); }

echo "pe";

?>
