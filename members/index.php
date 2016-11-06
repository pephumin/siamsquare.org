<?php

require_once $_SERVER['DOCUMENT_ROOT'].'/members/assets/include/config.php';

$login = new Login();

if (isset($_GET['by']) || ($_GET['by'] == "pass")) { $continue = true; }
else if ($login->isUserLoggedIn() != true) { include $_SERVER['DOCUMENT_ROOT'].'/members/assets/include/w/login.inc'; exit; }
else if ($login->isUserLoggedIn() == true) { $continue = true; }
else { $continue = false; }

// if ($continue == false) { header("location: /members"); exit; }

$w = ''; if (empty($w) && isset($_REQUEST['w'])) { $w = $_REQUEST['w']; } include(w($w));

?>
