<?php

// function esp_file_get_contents($file) {
//   if (function_exists('file_get_contents')) { return file_get_contents($file); }
//   $f = fopen($file,'r');
//   if (!$f) { return ''; }
//   $t = '';
//   while ($s = fread($f, 100000)) { $t .= $s; }
//   fclose($f);
//   return $t;
// }

// function blur($url, $forwardingLabel = 'Please click here to continue...') {
//   session_write_close();
//   if (0 !== strpos($url, 'http')) { $url = rtrim(MYHOME, '/') . '/' . ltrim($url, '/'); }
//   if (headers_sent()) {
//     echo <<<EOHTML
// <script type='text/javascript'>
//   window.location = "$url";
// </script>
// <noscript>
//   <a href="$url">$forwardingLabel</a>
// </noscript>
// EOHTML;
//   } else { header(sprintf('Location: %s', $url)); }
//   exit(0);
// }

// function password_upgrade($username, $password, $table) {
//   $cfg =& $GLOBALS['ESPCONFIG'];
//   if ($cfg['adodb_database_type'] == "mysql") {
//     $info = $cfg['adodb_conn']->ServerInfo();
//     $version = $info['version'];
//     if ($version > 4.0) {
//       $username = _addslashes($username);
//       $sql = "SELECT * FROM ".$table." WHERE username = ".$username." AND password = OLD_PASSWORD($password) AND disabled = 'N' AND (expiration = '0000-00-00 00:00:00' OR expiration > ". sys_time_stamp().")";
//       $accres = execute_sql( $sql, "", ADODB_FETCH_ASSOC );
//       if (!$accres) { echo (ErrorMsg()); }
//       if (record_count($accres) == 1) {
//         // A matching row was found - upgrade his password.
//         $sql = "UPDATE $table SET password = PASSWORD($password) WHERE username = $username";
//         $accres = execute_sql( $sql, "", ADODB_FETCH_ASSOC );
//         if (!$accres) { echo (ErrorMsg()); }
//       }
//     }
//   }
// }

// function MetaTables() {
//  $cfg =& $GLOBALS['ESPCONFIG'];
//  return $cfg['adodb_conn']->MetaTables('TABLES');
// }

// function handleLogin() {
//   $handleLogin = (!is_session_authenticated() && isset($_REQUEST['doLogin']) && ! empty($_REQUEST['username']) && ! empty($_REQUEST['password']) ? true : false);
//   if ($handleLogin) {
//     $isAuthenticated = authenticate($_REQUEST['username'], $_REQUEST['password'], $realms);
//     $realmsCnt = count($realms);
//     if ($isAuthenticated && 1 === $realmsCnt) {
//       $ok = set_current_respondent($_REQUEST['username'], current($realms), $_REQUEST['password']);
//       if ($ok) {
//         set_session_authentication($isAuthenticated);
//         blur('/public/');
//         assert('false; // NOTREACHED');
//       }
//     }
//     elseif ($isAuthenticated && 2 <= $realmsCnt) { $GLOBALS['errmsg'] = mkerror('Please contact an administrator: multi-realm'); }
//     else { $GLOBALS['errmsg'] = mkerror('Incorrect User ID or Password, or your account has been disabled/expired.'); }
//   }
// }

// function handleLogout() {
//   $r = MYPUBLIC;
//   $handleLogout = (isset($_REQUEST['doLogout']) && is_session_authenticated() ? true : false);
//   if ($handleLogout) {
//     set_session_authentication(false);
//     echo "<h2>You have been logged out</h2>";
//     echo mksuccess("You have been successfully logged out. We will redirect you to the front page in a moment.");
//     echo "<p>You can click <a href=".MYPUBLIC.">here if you choose not to wait in order to log back in to our system.</a></p>";
//     echo "<br><br>";
//     $notes = array(array("title" => "Logged out", "text" => "You have been successfully logged out from our system.", "image" => "assets/img/notification.svg"));
//     notify($notes);
//     header("Refresh: 10; URL=$r");
//   }
// }

// function handleChangePassword($notes = null) {
//   $showChangePassword = (isset($_REQUEST['doChangePassword']) && is_session_authenticated() ? true : false);
//   $handleChangePassword = ($showChangePassword && get_current_respondent($respondent) ? true : false);
//   if ($handleChangePassword) {
//     $isAuthenticated = authenticate($respondent['username'], $_REQUEST['oldPassword'], $realms);
//     $isAuthenticated = (1 === count($realms) ? $isAuthenticated : false);
//     $isMatch = (0 === strcmp($_REQUEST['newPassword'], $_REQUEST['newPasswordConfirm']) ? true : false);
//     if ($isAuthenticated && $isMatch) {
//       $ok = change_password($respondent['username'], $respondent['realm'], $_REQUEST['newPassword']);
//       if ($ok) { $showChangePassword = false; $GLOBALS['errmsg'] = mkerror('Your password has been changed successfully'); }
//       else { $GLOBALS['errmsg'] = mkerror('Unable to change your password; contact an administrator'); }
//     }
//     elseif ($isAuthenticated && ! $isMatch) { $GLOBALS['errmsg'] = mkerror('Passwords do not match; check your typing'); }
//     else { $GLOBALS['errmsg'] = mkerror('Old password incorrect; check your typing'); }
//   }
//   if ($showChangePassword) { render_passwd_change_form(); if ($notes) { pageFooter($notes); } else { pageFooter(); } exit; }
// }

// function change_password($username, $realm, $password) {
//   $_username = _addslashes($username); $_realm = _addslashes($realm);
//   $_password = db_crypt(_addslashes($password)); $changed  = sys_time_stamp();
//   $sql = "UPDATE ".X_RESPONDENT." SET password = $_password, changed = $changed WHERE username = $_username AND realm = $_realm";
//   $res = execute_sql($sql);
//   $notes = array (array("title" => "Password changed", "text" => "You have successfully changed your password. Please keep it safe and secure.", "image" => "assets/img/notification.svg"));
//   if (1 === affected_rows()) { set_current_respondent($username, $realm); db_close($res); notify($notes); return true; }
//   else { return false; }
// }

// function paint_non_authenticated() {
//   //render_login_form();
//   $username = (isset($_REQUEST['username']) ? $_REQUEST['username'] : '');
//   if ($_message) { echo mkerror($_message); }
//   require_once WPUBLIC.'/login.inc';
// }

// function paint_authenticated() {
//   echo "<h2>ข้อมูลโดยสรุป</h2>\n";
//   respondentprofile();
//   get_survey_info($surveys, $responses, $accessibility);
//   partition_surveys($surveys, $responses, $accessibility, $current, $historical);
//   echo "<h2>งานวิจัยทั้งหมด</h2>\n";
//   publicsurvey();
//   currentsurvey($current);
//   historysurvey($historical);
// }

// function render_login_form() {
//   $username = (isset($_REQUEST['username']) ? $_REQUEST['username'] : '');
//   if ($_message) { echo mkerror($_message); }
//   require_once WPUBLIC.'/login.inc';
// }

// function render_profile_change_form() {
//   $firstName = (isset($_REQUEST[$firstNameVar]) ? htmlentities($_REQUEST[$firstNameVar]) : '');
//   $lastName = (isset($_REQUEST[$lastNameVar]) ? htmlentities($_REQUEST[$lastNameVar]) : '');
//   $emailAddress = (isset($_REQUEST[$emailVar]) ? htmlentities($_REQUEST[$emailVar]) : '');
//   include WPUBLIC.'/changeprofile.inc';
// }

// function render_passwd_change_form() {
//   include WPUBLIC.'/changepass.inc';
// }

?>
