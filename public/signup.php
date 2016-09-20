<?php

$_SERVER['BASE_PAGE'] = 'signup.php';
$title = "Member registration";
require_once $_SERVER['DOCUMENT_ROOT'] . '/public/assets/include/config.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/public/assets/include/template.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/public/assets/include/first.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/lib/esphtml.forms.inc';

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

  $checksql = "SELECT id FROM ".$GLOBALS['ESPCONFIG']['respondent_table']." WHERE username = "._addslashes($post['email']);
  //echo $checksql;
  $checkresult = execute_sql($checksql);
  if (record_count($checkresult) > 0) { $msg = mkerror("Your email is already registered in our system. You either need to recover password or register with a different email."); break; }
  db_close($checkresult);

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

  //print_r($sqlf);
  //print_r($sqlv);

  $sql = "INSERT INTO ".$GLOBALS['ESPCONFIG']['respondent_table']." ($sqlf) VALUES ($sqlv)";

  $res = execute_sql($sql);
  if (!$res) { $msg = mkerror("Request failed, please choose a different username."); break; }
  else { $msg = mksuccess("Your account has been created. Please sign in from the main page."); }

  foreach ($fields as $f) { $post[$f] = null; unset($post[$f]); }

} while(0);

// --------------------------------------------------------------------------------

pageHeader($title);
echo "<div class=\"container\">\n";
if (isset($msg) && !empty($msg)) { echo "<p>$msg</p>\n"; }
respondent_signup();
echo "</div>\n";
if ($notes) { pageFooter($notes); } else { pageFooter(); }

// --------------------------------------------------------------------------------


?>
