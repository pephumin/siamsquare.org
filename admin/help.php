<?php

$_SERVER['BASE_PAGE'] = 'help.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/config.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/template.php';

$title = "Help documents";
pageHeader($title, $scrollspy = NULL);

if (file_exists($_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/text/help.txt')) {
  echo "<div class=\"container\">";
  include $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/text/help.txt';
  echo "</div>\n";
} else {
  echo('<p>' . mkwarn(_("Help not found.")) . "</p>\n");
}

pageFooter();

?>
