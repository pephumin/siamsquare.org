<?php

$_SERVER['BASE_PAGE'] = 'faqs.php';
$title = "FAQs";
require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/config.php';
require_once DOCROOT.'/admin/assets/include/template.php';

pageHeader($title, $scrollspy = NULL);

if (file_exists(DOCROOT.'/admin/assets/include/text/faqs.txt')) { include DOCROOT.'/admin/assets/include/text/faqs.txt'; }
else { echo('<p>' . mkwarn("FAQs not found.") . "</p>\n"); }

if ($notes) { pageFooter($notes); } else { pageFooter(); }

?>
