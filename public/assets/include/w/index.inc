<?php

// handleLogin();
// handleLogout();

$r = MYPUBLIC;

$handleLogin = (!is_session_authenticated() && isset($_REQUEST['Logmein']) && !empty($_REQUEST['username']) && !empty($_REQUEST['password']) ? true : false);
if ($handleLogin) {
  $isAuthenticated = authenticate($_REQUEST['username'], $_REQUEST['password'], $realms);
  $realmsCnt = count($realms);
  if ($isAuthenticated && 1 === $realmsCnt) {
    $ok = set_current_respondent($_REQUEST['username'], current($realms), $_REQUEST['password']);
    if ($ok) {
      set_session_authentication($isAuthenticated);
      $notes = array (array("title" => "Welcome to the system", "text" => "ยินดีต้อนรับเข้าสู่ระบบ", "image" => "assets/img/notification.svg"));
      echo "<h2>ล็อคอินสำเร็จ</h2>\n";
      echo mksuccess("ยินดีต้อนรับเข้าสู่ระบบ เรากำลังจะเปลี่ยนเข้าสู่หน้าหลักของสมาชิก");
      header("Refresh: 5; URL=$r");
      return;
      //assert('false; // NOTREACHED');
    }
  }
  elseif ($isAuthenticated && 2 <= $realmsCnt) { $_message = 'Please contact an administrator: multi-realm'; }
  else { $_message = 'คุณใส่ล็อคอินหรือรหัสผ่านผิด กรุณาใส่ใหม่อีกครั้ง'; }
}

// $handleLogout = (isset($_REQUEST['doLogout']) && is_session_authenticated() ? true : false);
// if ($handleLogout) {
//   set_session_authentication(false);
//   echo "<h2>You have been logged out</h2>\n";
//   echo mksuccess("You have been successfully logged out. We will redirect you to the front page in a moment.");
//   echo "<p>You can click <a href=".MYPUBLIC.">here</a> if you choose not to wait in order to log back in to our system.</p>\n";
//   echo "<br>\n";
//   $notes = array(array("title" => "Logged out", "text" => "You have been successfully logged out from our system.", "image" => "assets/img/notification.svg"));
//   notify($notes);
//   header("Refresh: 5; URL=$r");
// }

//handleChangeProfile();
//handleChangePassword();

if (is_session_authenticated()) {
  // paint_authenticated();
  echo "<h2>ข้อมูลโดยสรุป</h2>\n";
  respondentprofile();
  get_survey_info($surveys, $responses, $accessibility);
  partition_surveys($surveys, $responses, $accessibility, $current, $historical);
  echo "<h2>งานวิจัยทั้งหมด</h2>\n";
  publicsurvey();
  currentsurvey($current);
  historysurvey($historical);
} else {
  // paint_non_authenticated();
  $username = (isset($_REQUEST['username']) ? $_REQUEST['username'] : '');
  if ($_message) { echo mkerror($_message); }
  require_once WPUBLIC.'/login.inc';
}

?>
