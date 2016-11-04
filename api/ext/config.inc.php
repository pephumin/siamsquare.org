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
define('MYPUBLIC',    MYHOME."/public/");
define('MYSURVEY',    MYHOME."/public/survey.php");
define('ME',          $_SERVER['SCRIPT_NAME']);
define('DOCROOT',     $_SERVER['DOCUMENT_ROOT']);

define('DB_HOST',     "magenta.thaiweb.net");
define('DB_USER',     "sinbad");
define('DB_PASS',     "2bbadd");
define('DB_DATABASE', "siamsquare");
define('DB_PORT',     3306);
define('DB_CHARSET',  "utf8");

define('TIMEZONE',    "Asia/Bangkok");
date_default_timezone_set(TIMEZONE);

$db = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_DATABASE);

error_reporting(E_ALL);

if (!$db->ping()) { $db->connect(); }

function cleanstring($string) {
  $bad = array("content-type","bcc:","to:","cc:","href");
  return str_replace($bad,"", $string);
}

?>
