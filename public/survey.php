<?php

//$results = 1; Making all results public 
$_SERVER['BASE_PAGE'] = 'survey.php';
$title = "Conduct a survey  ";
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/include/config.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/public/include/template.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/public/include/first.php';

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
        if (record_count($_result) > 0) {
            list($sid, $_title, $_css) = fetch_row($_result);
        }
        db_close($_result);
    }
    unset($_sql);
    unset($_result);
}

if (empty($_name) && isset($sid) && $sid) {
    $_sql = "SELECT title,theme FROM ".$GLOBALS['ESPCONFIG']['survey_table']." WHERE id = '$sid'";
    if ($_result = execute_sql($_sql)) {
        if (record_count($_result) > 0){
            list($_title, $_css) = fetch_row($_result);
        }
        db_close($_result);
    }
    unset($_sql);
    unset($_result);
}

// call the handler-prefix once $sid is set to handle authentication / authorization
//include $_SERVER['DOCUMENT_ROOT'] . '/public/include/handler-prefix.php';

// --------------------------------------------------------------------------------

displayHeader($title);
displayNav();
//displayPageHeader();
echo "<div class=\"container\">\n";
unset($_name);
unset($_title);
include $_SERVER['DOCUMENT_ROOT'] . '/public/include/handler.php';
//if ($_SESSION['acl']['superuser'] == 'Y') { include $_SERVER['DOCUMENT_ROOT'] . '/admin/include/debug.php'; }
echo "</div>\n";
displayFooter();

// --------------------------------------------------------------------------------

?>
