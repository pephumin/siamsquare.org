<?php

$arr = array();

array_push($arr, array('SID', session_id()));
if (@file_exists(session_save_path()."/sess_".session_id()))
  array_push($arr, array('SESSION', implode('', @file(session_save_path()."/sess_".session_id()))));

if(isset($_SESSION['acl'])) {
  array_push($arr, 'ACL');
  foreach ($_SESSION['acl'] as $key => $val) {
    if(is_array($val))
      $val = '[ '. implode(' ', $val) .' ]';
    array_push($arr, array($key, $val));
  }
}

foreach (array(
  //'HTTP_SESSION_VARS', 'ESPCONFIG', 'HTTP_GET_VARS',
  '_SESSION', 'ESPCONFIG', '_GET',
  //'HTTP_POST_VARS', 'HTTP_SERVER_VARS', 'HTTP_ENV_VARS') as $v) {
  '_POST', '_SERVER', '_ENV') as $v) {
  if(isset($$v)) {
    array_push($arr, $v);
    foreach ($$v as $key => $val) {
      if(is_array($val))
        $val = '[ '. @implode(' ', $val) .' ]';
      array_push($arr, array($key, $val));
    }
  }
}

$str = "<table class=\"table table-hover\">\n";
foreach ($arr as $key) {
  if (is_array($key)) {
    $str .= '<tr><td bgcolor="#808080">' .
    htmlspecialchars($key[0]) . '</td>';
    $str .= '<td bgcolor="#dddddd">' .
    @htmlspecialchars($key[1]) . "</td></tr>\n";
  } else {
      $str .= '<tr><th align="left" colspan="2" bgcolor="#808080">' .
      htmlspecialchars($key) . "</th></tr>\n";
  }
}
$str .= "</table>\n";

?>
        <form id="debug" name="debug"><input class="btn btn-xs btn-danger" type="button" value="debug" onClick="debugWindow()"></form>
