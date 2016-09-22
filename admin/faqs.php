<?php

$_SERVER['BASE_PAGE'] = 'help.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/config.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/template.php';

$title = "FAQs";
pageHeader($title, $scrollspy = NULL);

if (file_exists($_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/text/faqs.txt')) {
  echo "<div class=\"container\">";
  include $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/text/faqs.txt';
  echo "</div>\n";
} else {
  echo('<p>' . mkwarn(_("FAQs not found.")) . "</p>\n");
}

pageFooter();

?>
