<?php

require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/config.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/template.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/login.class.php';

$login = new Login();

if ($login->isUserLoggedIn() != true) {
  $title = "Authorisation required";
  pageHeader($title);
  include $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/w/login.inc';
  if ($notes) { pageFooter($notes); } else { pageFooter(); }
} else {
  $w = '';
  if (empty($w) && isset($_REQUEST['w'])) { $w = $_REQUEST['w']; }
  include(w($w));
}



?>
