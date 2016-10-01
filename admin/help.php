<?php

$_SERVER['BASE_PAGE'] = 'help.php';
$title = "Help documents";
require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/config.php';
require_once INCLUDEADM.'/template.php';

pageHeader($title);

if (file_exists(MYTEXT.'/help.txt')) { include MYTEXT.'/help.txt'; }
else { echo('<p>' . mkwarn("Help not found.") . "</p>\n"); }

if ($notes) { pageFooter($notes); } else { pageFooter(); }

?>
