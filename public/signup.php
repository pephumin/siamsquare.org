<?php

$_SERVER['BASE_PAGE'] = 'signup.php';
$title = "Member registration";
require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/config.php';
require_once INCLUDEPUB.'/template.php';
require_once INCLUDEPUB.'/first.php';

esp_init_adodb();

unset($msg);
$fields = array('username','password','email','fname','lname');

if (isset($_POST['submit'])) {

  if (isset($msg)) { break; }
  $checksql = "SELECT id FROM ".X_RESPONDENT." WHERE username = "._addslashes($_POST['email']);
  $checkresult = execute_sql($checksql);
  if (record_count($checkresult) > 0) { $msg = mkerror("Your email is already registered in our system. You either need to recover password or register with a different email."); break; }
  db_close($checkresult);

  $sqlf = array(); $sqlv = array();

  foreach ($fields as $f) {
    if (isset($_POST[$f]) && !empty($_POST[$f])) {
      array_push($sqlf, $f);
      if ($f == 'password') { array_push($sqlv, db_crypt(_addslashes($_POST[$f]))); }
      else { array_push($sqlv,  _addslashes($_POST[$f]) ); }
    }
  }

  array_push($sqlf, 'realm'); array_push($sqlv, 'RD-Email');
  $sqlf = implode(',', $sqlf); $sqlv = implode(',', $sqlv);

  $sql = "INSERT INTO ".X_RESPONDENT." ($sqlf) VALUES ($sqlv)";

  $res = execute_sql($sql);
  if (!$res) { $msg = mkerror("Request failed, please choose a different username."); break; }
  else { $msg = mksuccess("ระบบได้ดำเนินการสมัครสมาชิกใหม่ให้กับคุณเป็นที่เรียบร้อยแล้ว กรุณาล็อคอินเพื่อเริ่มต้นใช้งานได้ทันที"); }

  foreach ($fields as $f) { $_POST[$f] = null; unset($_POST[$f]); }

}

pageHeader($title);
if ($msg) { echo $msg; }
include WPUBLIC.'/signup.inc';
if ($notes) { pageFooter($notes); } else { pageFooter(); }

?>
