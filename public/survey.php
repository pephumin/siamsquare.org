<?php

$title = "Conduct a survey";
require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/config.php';
require_once INCLUDEPUB.'/template.php';
require_once INCLUDEPUB.'/first.php';

$_name = '';
$_title = '';
$_css = '';
$sid = '';

if (isset($_GET['name'])) { $_name = _addslashes($_GET['name']); unset($_GET['name']); $_SERVER['QUERY_STRING'] = preg_replace('/(^|&)name=[^&]*&?/', '', $_SERVER['QUERY_STRING']); }
if (isset($_POST['name'])) { $_name = _addslashes($_POST['name']); unset($_POST['name']); }

if (!empty($_name)) {
  $_sql = "SELECT id,title,theme FROM ".X_SURVEY." WHERE name = $_name";
  if ($_result = execute_sql($_sql)) {
    if (record_count($_result) > 0) { list($sid, $_title, $_css) = fetch_row($_result); }
    db_close($_result);
  }
  unset($_sql);
  unset($_result);
}

if (empty($_name) && isset($sid) && $sid) {
  $_sql = "SELECT title,theme FROM ".X_SURVEY." WHERE id = '$sid'";
  if ($_result = execute_sql($_sql)) {
    if (record_count($_result) > 0) { list($_title, $_css) = fetch_row($_result); }
    db_close($_result);
  }
  unset($_sql);
  unset($_result);
}

include_once INCLUDEPUB.'/handler-prefix.php';
pageHeader($title);

if (is_session_authenticated()) {
  unset($_name);
  unset($_title);
  include INCLUDEPUB.'/handler.php';
} else {
  echo "<h2>Access denied</h2>\n";
  echo "<p>Only registered members can access this area</p>\n";
}

if ($notes) { pageFooter($notes); } else { pageFooter(); }

?>
