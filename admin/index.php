<?php

require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/config.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/template.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/class.login.php';

$login = new Login();

if ($login->isUserLoggedIn() != true) { include $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/w/login.inc'; }
else { $w = ''; if (empty($w) && isset($_GET['w'])) { $w = $_GET['w']; } include(w($w)); }

?>
