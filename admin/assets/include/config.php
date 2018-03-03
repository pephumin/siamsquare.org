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


define('MYTITLE',          "SiamSquare");
define('MYDESC',           "SiamSquare Survey Engine by PE BINARY CO., LTD.");
define('SLOGANEN',         "We build a society where your opinion matters");
define('SLOGANTH',         "เราสร้างสังคมที่มองเห็นความสำคัญในความคิดเห็นของคุณ");
define('MYDOMAIN',         "siamsquare.org");
define('MYHOME',           "http://www.siamsquare.org");
define('ADMIN',            MYHOME."/admin/");
define('MEMBERS',          MYHOME."/members/");
define('EMAILADMIN',       "phumin@sawasdee.org");
define('EMAILSYSTEM',      "survey@siamsquare.org");
define('EMAILSUPPORT',     "support@siamsquare.org");
define('EMAILNOREPLY',     "noreply@siamsquare.org");
define('ME',               $_SERVER['SCRIPT_NAME']);
define('DOCROOT',          $_SERVER['DOCUMENT_ROOT']);
define('MYXML',            DOCROOT.'/members/assets/xml');
define('HTTP_PROTOCOL',    "HTTPS");

define('DB_HOST',          "magenta.thaiweb.net");
define('DB_USER',          "sinbad");
define('DB_PASS',          "2bbadd");
define('DB_DATABASE',      "siamsquare");
define('DB_PORT',          3306);
define('DB_CHARSET',       "utf8");

define('COOKIE_RUNTIME',   1209600); // 2 weeks
define('COOKIE_DOMAIN',    ".siamsquare.org");
define('COOKIE_KEY',       "4^,bomiN@PEPE{JUEpe}");
define('HASH_COST_FACTOR', "10");

$db = new PDO('mysql:host='. DB_HOST .';dbname='. DB_DATABASE . ';charset=utf8', DB_USER, DB_PASS);

date_default_timezone_set("Asia/Bangkok");
error_reporting(E_ALL);

?>
