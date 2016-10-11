<?php

if (!isset($title)) { $title = 'Java App'; }
require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/config.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/template.php';

pageHeader($title);

echo "<div id=\"mySurveyJSName\"></div>\n";

if ($notes) { pageFooter($notes); } else { pageFooter(); }

?>
