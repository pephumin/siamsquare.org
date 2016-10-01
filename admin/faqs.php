<?php

$_SERVER['BASE_PAGE'] = 'faqs.php';
$title = "FAQs";
require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/config.php';
require_once INCLUDEADM.'/template.php';

pageHeader($title);

if (file_exists(MYTEXT.'/faqs.txt')) { include MYTEXT.'/faqs.txt'; }
else { echo('<p>' . mkwarn("FAQs not found.") . "</p>\n"); }

if ($notes) { pageFooter($notes); } else { pageFooter(); }

?>
