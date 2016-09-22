<?php

//$results = 1; Making all results public
$_SERVER['BASE_PAGE'] = 'survey.php';
$title = "Conduct a survey";
require_once $_SERVER['DOCUMENT_ROOT'] . '/public/assets/include/config.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/public/assets/include/template.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/public/assets/include/first.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/lib/espcross.inc';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/lib/espauth-default.inc';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/lib/espauth.inc';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/lib/esphtml.forms.inc';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/lib/esphtml.results.inc';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/lib/espmerge.inc';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/lib/espresponse.inc';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/lib/espsql.inc';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/lib/espdatalib.inc';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/lib/espsurvey.inc';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/function/survey_copy.inc';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/function/survey_merge.inc';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/function/survey_purge.inc';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/function/survey_render.inc';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/function/survey_report.inc';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/function/survey_results.inc';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/function/survey_update.inc';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/function/survey_export_csv.inc';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/function/account_upload.inc';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/function/response_purge.inc';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/function/question_render.inc';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/function/question_conditioncheck.inc';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/function/db_update.inc';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/function/ssq.inc';


$_name = '';
$_title = '';
$_css = '';
$sid = '';

if (isset($_GET['name'])) {
  $_name = _addslashes($_GET['name']);
  unset($_GET['name']);
  $_SERVER['QUERY_STRING'] = preg_replace('/(^|&)name=[^&]*&?/', '', $_SERVER['QUERY_STRING']);
}

if (isset($_POST['name'])) {
  $_name = _addslashes($_POST['name']);
  unset($_POST['name']);
}

if (!empty($_name)) {
  $_sql = "SELECT id,title,theme FROM ".$GLOBALS['ESPCONFIG']['survey_table']." WHERE name = $_name";
  if ($_result = execute_sql($_sql)) {
    if (record_count($_result) > 0) { list($sid, $_title, $_css) = fetch_row($_result); }
    db_close($_result);
  }
  unset($_sql);
  unset($_result);
}

if (empty($_name) && isset($sid) && $sid) {
  $_sql = "SELECT title,theme FROM ".$GLOBALS['ESPCONFIG']['survey_table']." WHERE id = '$sid'";
  if ($_result = execute_sql($_sql)) {
    if (record_count($_result) > 0) { list($_title, $_css) = fetch_row($_result); }
    db_close($_result);
  }
  unset($_sql);
  unset($_result);
}

// call the handler-prefix once $sid is set to handle authentication / authorization
include_once $_SERVER['DOCUMENT_ROOT'] . '/public/assets/include/handler-prefix.php';

// --------------------------------------------------------------------------------

pageHeader($title);

// switch A
unset($_name);
unset($_title);
include $_SERVER['DOCUMENT_ROOT'] . '/public/assets/include/handler.php';

// // switch B
// if (is_session_authenticated()) {
//   unset($_name);
//   unset($_title);
//   include $_SERVER['DOCUMENT_ROOT'] . '/public/assets/include/handler.php';
// } else {
//   echo "<h2>Access denied</h2>\n";
//   echo "<p>Only registered members can access this area</p>\n";
// }


if ($notes) { pageFooter($notes); } else { pageFooter(); }

echo "<div class=\"container\"<div class=\"row\"><div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">";
echo "<pre>";
print_r($_POST);
echo "</pre>";
echo "</div>";
echo "<div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">";
echo "<pre>";
print_r($_SESSION);
echo "</pre>";
echo "</div></div></div>";

// --------------------------------------------------------------------------------

?>
