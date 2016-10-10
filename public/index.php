<?php

if (!isset($title)) { $title = 'SiamSquare survey engine: Respondent'; }
require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/config.php';
require_once INCLUDEPUB.'/template.php';
require_once INCLUDEPUB.'/first.php';

get_current_respondent($respondent);
pageHeader($title);

if (empty($w) && isset($_REQUEST['w'])) { $w = $_REQUEST['w']; }
include(wPublic($w));

if ($notes) { pageFooter($notes); } else { pageFooter(); }

?>
