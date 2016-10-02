<?php

$_SERVER['BASE_PAGE'] = 'signup.php';
$title = "Member registration";
require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/config.php';
require_once INCLUDEPUB.'/template.php';
require_once INCLUDEPUB.'/first.php';

esp_init_adodb();

$fields = array('username','password','email','fname','lname');
$rqd_fields = array('password','password2','email','fname','lname');

// set value to override config.php
$signup_realm = null;

$post =& $_POST;

unset($msg);

if ($signup_realm == null || empty($signup_realm)) { $signup_realm = $GLOBALS['ESPCONFIG']['signup_realm']; }

if ($signup_realm == null || empty($signup_realm)) { echo mkerror("Sorry, the account request form is disabled."); return; }

//do if (isset($post['submit'])) {
do if (isset($post['email'])) {

  foreach ($rqd_fields as $f) { if (!isset($post[$f]) || empty($post[$f])) { $msg = mkerror("Please complete all required fields."); break; } }

  if (isset($msg)) { break; }
  if ($post['password'] != $post['password2']) { $msg = mkerror("Passwords do not match."); break; }
  if (empty($post['username'])) { $post['username'] = $post['email']; }

  $checksql = "SELECT id FROM ".X_RESPONDENT." WHERE username = "._addslashes($post['email']);
  $checkresult = execute_sql($checksql);
  if (record_count($checkresult) > 0) { $msg = mkerror("Your email is already registered in our system. You either need to recover password or register with a different email."); break; }
  db_close($checkresult);
  // if (!$result = $mysqli->query($checksql)) {
  //   echo "Error: Our query failed to execute and here is why: \n";
  //   echo "Query: " . $checksql . "\n";
  //   echo "Errno: " . $mysqli->errno . "\n";
  //   echo "Error: " . $mysqli->error . "\n";
  //   exit;
  // }
  // if ($result->num_rows > 0) { $msg = mkerror("Your email is already registered in our system. You either need to recover password or register with a different email."); break; }
  // $result->free();

  $sqlf = array();
  $sqlv = array();

  foreach ($fields as $f) {
    if (isset($post[$f]) && !empty($post[$f])) {
      array_push($sqlf, $f);
      if ($f == 'password') { array_push($sqlv, db_crypt(_addslashes($post[$f]))); }
      else { array_push($sqlv,  _addslashes($post[$f]) ); }
    }
  }

  array_push($sqlf, 'realm');
  array_push($sqlv, _addslashes($signup_realm) );

  $sqlf = implode(',', $sqlf);
  $sqlv = implode(',', $sqlv);

  $sql = "INSERT INTO ".X_RESPONDENT." ($sqlf) VALUES ($sqlv)";

  $res = execute_sql($sql);
  if (!$res) { $msg = mkerror("Request failed, please choose a different username."); break; }
  else { $msg = mksuccess("ระบบได้ดำเนินการสมัครสมาชิกใหม่ให้กับคุณเป็นที่เรียบร้อยแล้ว กรุณาล็อคอินเพื่อเริ่มต้นใช้งานได้ทันที"); }

  // if (!$result = $mysqli->query($sql)) { $msg = mkerror("Request failed, please choose a different username."); break; }
  // else { $msg = mksuccess("Your account has been created. Please sign in from the main page."); }

  foreach ($fields as $f) { $post[$f] = null; unset($post[$f]); }

} while(0);

pageHeader($title);
if (isset($msg) && !empty($msg)) { echo "<p>$msg</p>\n"; }
// respondent_signup();
if ($msg) { echo mkerror($msg); }
require_once WPUBLIC.'/signup.inc';
if ($notes) { pageFooter($notes); } else { pageFooter(); }


?>
