<?php

$_SERVER['BASE_PAGE'] = 'help.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/config/config.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/include/template.php';

$title = 'Help documents';
displayHeader($title);
displayNav();
displayPageHeader($title);

//include $_SERVER['DOCUMENT_ROOT'] . '/admin/include/text/help.txt';

if (file_exists($_SERVER['DOCUMENT_ROOT'] . '/admin/include/text/help.txt')) {
    include $_SERVER['DOCUMENT_ROOT'] . '/admin/include/text/help.txt';
} else {
    echo('<p>' . mkwarn(_("Help not found.")) . "</p>\n");
}

displayPageFooter();
displayFooter();

?>