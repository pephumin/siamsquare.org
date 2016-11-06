<?php

############################################################################
#                                                                          #
#     ▄██ █▄   ▄█████  ▀██████▄  ▄█  ███▄▄▄▄    ▄█████    ▄█████ ▄█   ▄    #
#    ██   ██  ██   ██   ██   ██  ██  ██▀▀▀█▄   ██   ██   ██   ██ ██   █▄   #
#    ██   ██  ██   █▀   ██   ██  ██▌ ██   ██   ██   ██   ██   ██ ██▄▄▄██   #
#    ██   ██ ▄██▄▄▄    ▄██▄▄▄█▀  ██▌ ██   ██   ██   ██  ▄██▄▄▄█▀ ▀▀▀▀▀██   #
#  ▀██████▀ ▀▀██▀▀▀   ▀▀██▀▀▀█▄  ██▌ ██   ██ ▀████████ ▀▀██▀▀▀▀  ▄█   ██   #
#    ██       ██   █▄   ██   █▄  ██  ██   ██   ██   ██ ▀████████ ██   ██   #
#    ██       ██   ██   ██   ██  ██  ██   ██   ██   ██   ██   ██ ██   ██   #
#   ▄███▀     ███████ ▄███████▀  █▀  ▀█   █▀   ██   █▀   ██   ██  ▀████▀   #
#                                                             ██    ██     #
#                                                                          #
############################################################################


define('MYTITLE',     "SiamSquare");
define('MYDESC',      "SiamSquare Survey Engine by PE BINARY CO., LTD.");
define('SLOGANEN',    "We build a society where your opinion matters");
define('SLOGANTH',    "เราสร้างสังคมที่ให้ความสำคัญกับความคิดเห็นของคุณ");
define('MYHOME',      "http://www.siamsquare.org");
define('MYEMAIL',     "phumin@sawasdee.org");
define('SYSTEMEMAIL', "survey@siamsquare.org");
define('MYADMIN',     MYHOME."/admin/");
define('MYMEMBER',    MYHOME."/members/");
define('ME',          $_SERVER['SCRIPT_NAME']);
define('DOCROOT',     $_SERVER['DOCUMENT_ROOT']);
define('INCLUDEADM',  DOCROOT."/admin/assets/include");
define('INCLUDEPUB',  DOCROOT."/members/assets/include");
define('MYXML',       DOCROOT."/members/assets/xml");

define('DB_HOST',     "magenta.thaiweb.net");
define('DB_USER',     "sinbad");
define('DB_PASS',     "2bbadd");
define('DB_DATABASE', "siamsquare");
define('DB_PORT',     3306);
define('DB_CHARSET',  "utf8");

$db = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_DATABASE);
if (!$db->ping()) { $db->connect(); }
error_reporting(E_ALL);

date_default_timezone_set("Asia/Bangkok");

require_once $_SERVER['DOCUMENT_ROOT'].'/members/assets/include/template.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/members/assets/include/login.class.php';

?>
