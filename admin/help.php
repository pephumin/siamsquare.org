<?php

$_SERVER['BASE_PAGE'] = 'help.php';
$title = "Help documents";
require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/config.php';
require_once DOCROOT.'/admin/assets/include/template.php';

pageHeader($title, $scrollspy = NULL);

if (file_exists(DOCROOT.'/admin/assets/include/text/help.txt')) { include DOCROOT.'/admin/assets/include/text/help.txt'; }
else { echo('<p>' . mkwarn("Help not found.") . "</p>\n"); }

if ($notes) { pageFooter($notes); } else { pageFooter(); }

?>
