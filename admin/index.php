<?php

// global $title;
$_SERVER['BASE_PAGE'] = 'index.php';
if (!isset($title)) { $title = 'SiamSquare survey engine: Administrator'; }
require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/config.php';
require_once INCLUDEADM.'/template.php';

if ($_GET['p']) { $p = $_GET['p']; }
if ($p == '') { $p = "1"; }

esp_init_adodb();

if (get_cfg_var('register_globals')) { $_SESSION['acl'] = &$acl; }

$w = '';

if ($ESPCONFIG['auth_design']) {
  if (isset($_POST['Login'])) {
    if (!isset($_POST['username'])) { $username = ""; }
    if ($_POST['username'] != "") { $_SESSION['username'] = $_POST['username']; }
    if (!isset($_POST['password'])) { $password = ""; }
    if ($_POST['password'] != "") { $_SESSION['raw_password'] = $_POST['password']; }
  }
  if (isset($_SESSION['username'])) { $username = $_SESSION['username']; }
  else { $username = ""; }
  if (isset($_SESSION['raw_password'])) { $raw_password = $_SESSION['raw_password']; }
  else { $raw_password = ""; }
  $password = _addslashes($raw_password);
  if (!manage_auth($username, $password, $raw_password)) exit;
} else {
  $_SESSION['acl'] = array (
    'username'  => 'none',
    'pdesign'   => array('none'),
    'pdata'     => array('none'),
    'pstatus'   => array('none'),
    'pall'      => array('none'),
    'pgroup'    => array('none'),
    'puser'     => array('none'),
    'superuser' => 'Y',
    'disabled'  => 'N'
  );
}

if (empty($w) && isset($_REQUEST['w'])) { $w = $_REQUEST['w']; }

pageHeader($title);
include(wAdmin($w));
if ($notes) { pageFooter($notes); } else { pageFooter(); }

echo "<div class=\"row\"><div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\n";
echo "<pre>\n";
print_r($_POST);
echo "</pre>\n";
echo "</div>\n";
echo "<div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\n";
echo "<pre>\n";
print_r($_SESSION);
echo "</pre>\n";
echo "</div>\n";
echo "</div></div>\n";

?>
