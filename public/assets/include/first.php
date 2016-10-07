<?php

// require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/config.php';

if (defined('ESP-FIRST-INCLUDED')) { return; }
define('ESP-FIRST-INCLUDED',true);
define('DOUBLE_POST', 3);
esp_init_adodb();

//print_r (ESP-FIRST-INCLUDED);
//echo "PE";
//echo $GLOBALS['ESPCONFIG']['survey_table'];
//echo $GLOBALS['ESPCONFIG']['limit_double_postings'];

// submit is the last "page" of the survey
// to prevent cookie issues and such we already check here for the captcha and set the cookie
// since this php page needs to be included at the top of any html code using this survey

if (!empty($_REQUEST['submit'])) {
  $sid = intval($_POST['sid']);
  $msg = response_check_answers($sid, $_SESSION['rid'], $_SESSION['sec']);

  // if the parameter test is set in the URL and the survey is in fact in the test stage - then don't set the cookie
  if (isset($_REQUEST['test'])) {
    $sql = "SELECT status, name FROM ".X_SURVEY." WHERE id = ${sid}";
    $result = execute_sql($sql);
    if ($result && record_count($result) > 0) { list ($status, $name) = fetch_row($result); } else { $status = 0; }
    if ($status & STATUS_TEST) { $test = 1; } else { $test = 0; }
  }
  else { $test = 0; }

  if (empty($msg) && !$test) {
    // Added for cookie auth, to eliminate double submits
    $cookiename = "survey_".$sid;
    $expire = time()+60*60*24*DOUBLE_POST;
    $res = setcookie($cookiename, "done", $expire, "/");
  }
}


?>
