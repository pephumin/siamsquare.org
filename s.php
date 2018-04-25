<?php

$mobile = 0; $mpilot = 0; $mdesign = 0; $readonly = 0;
if ($_GET['mobile'] == "✓") { $mobile = 1; }
else if ($_GET['pilot'] == "✓") { $mpilot = 1; }
else if ($_GET['designer'] == "✓") { $mdesign = 1; $readonly = 1; }

require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/config.php';
if ($mobile == 1) { require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/mobile.php'; }
else { require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/themes.php'; }
require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/functions.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/class.login.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/class.imgresize.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/class.phpmailer.php';

if ($mpilot != 1) { $login = new Login(); if ($login->isUserLoggedIn() != true) { include $_SERVER['DOCUMENT_ROOT'].'/members/assets/include/w/login.inc'; } else { include $_SERVER['DOCUMENT_ROOT'].'/r.php'; } }
else { include $_SERVER['DOCUMENT_ROOT'].'/r.php'; }

?>
