<?php

// Add link to reset a forgotten password
// Add response ID/confirmation number to finished surveys

if (!isset($title)) { $title = 'SiamSquare survey engine: Respondent'; }
require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/config.php';
require_once INCLUDEPUB.'/template.php';
require_once INCLUDEPUB.'/first.php';
get_current_respondent($respondent);
pageHeader($title);
$w = $_REQUEST['w'];
if ($w) { include(wPublic($w)); }
else {
  handleLogin();
  handleLogout();
  //handleChangeProfile();
  handleChangePassword();
  if (is_session_authenticated()) { paint_authenticated(); }
  else { paint_non_authenticated(); }
}
if ($notes) { pageFooter($notes); } else { pageFooter(); }

?>
