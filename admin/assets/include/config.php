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

ini_set("zlib.output_compression", 1);
error_reporting( E_CORE_ERROR | E_CORE_WARNING | E_COMPILE_ERROR | E_ERROR | E_WARNING | E_PARSE | E_USER_ERROR | E_USER_WARNING | E_RECOVERABLE_ERROR );

if (!isset($_SESSION)) session_start();
// if (!isset($_SESSION)) { echo "This script can't work without setting the php session variable first!!!"; exit; }

if (!defined('ESP_BASE')) define('ESP_BASE', $_SERVER['DOCUMENT_ROOT']);
if (isset($_SERVER)) { $server =& $_SERVER; } else { $server =& $HTTP_SERVER_VARS; }

//-------------------------------------------------------------------------------------------------

$ESPCONFIG['DEBUG'] = true;
$ESPCONFIG['proto'] = 'http://';
$ESPCONFIG['base_url'] = $ESPCONFIG['proto'] . $server['HTTP_HOST'];
$ESPCONFIG['db_host'] = 'magenta.thaiweb.net';
$ESPCONFIG['db_user'] = 'sinbad';
$ESPCONFIG['db_pass'] = '2bbadd';
$ESPCONFIG['db_name'] = 'siamsquare';
$DB_PREFIX = "x_";
$OLD_DB_PREFIX = "";

$ESPCONFIG['limit_double_postings'] = 3; // no. of days for resubmitting, set to 0 to disable
$ESPCONFIG['use_captcha'] = 0; // need GD if enable
$ESPCONFIG['date_format'] = "%d/%m/%Y";

// $ESPCONFIG['adodb_path'] = ESP_BASE . '/admin/assets/include/adodb/';
// $ESPCONFIG['adodb_database_type'] = 'mysql';
// $ESPCONFIG['adodb_persist'] = 'true';
// $ESPCONFIG['adodb_pathto_db'] = ESP_BASE . '/scripts/db/esp.dbm';

$ESPCONFIG['allow_email'] = true;
$ESPCONFIG['human_email'] = true;
$ESPCONFIG['email_from_name'] = "SiamSquare";
$ESPCONFIG['email_from_address'] = "survey@siamsquare.org";
//$ESPCONFIG['email_return_path'] = "survey@siamsquare.org"; // the email return path for bounces ...

$ESPCONFIG['auth_mode'] = 'form'; // { 'basic', 'form' }
$ESPCONFIG['auth_design'] = true;
$ESPCONFIG['auth_response'] = true;
$ESPCONFIG['auth_type'] = 'default'; // { 'default', 'ldap_both', 'ldap_resp', 'ldap_des' }

$ESPCONFIG['signup_realm'] = 'auto'; // set to NULL to disable the sign-up page (when use LDAP)

$ESPCONFIG['dashboard_enable'] = true; // For respondents
$ESPCONFIG['dashboard_show_public_surveys'] = true;
$ESPCONFIG['dashboard_allow_change_profile'] = true; // Allow respondents to change their profile?
$ESPCONFIG['dashboard_allow_change_password'] = true; // Allow respondents to change their password?
//$ESPCONFIG['support_email_address'] = "webmaster@siamsquare.org";

$ESPCONFIG['default_lang'] = 'en_US';
$ESPCONFIG['charset'] = 'utf-8';
$ESPCONFIG['default_num_choices'] = 5; // Default number of option lines for new questions

//-------------------------------------------------------------------------------------------------

$ESPCONFIG['name'] = 'pebinary';
$ESPCONFIG['version'] = '2.2.0';
$ESPCONFIG['title'] = $ESPCONFIG['name'] .', v('. $ESPCONFIG['version'].')';
$ESPCONFIG['unsupported'] = array('cgi', 'sapi'); // Unsuported web server configuration check values
$ESPCONFIG['gettext'] = extension_loaded('gettext');
$ESPCONFIG['extension'] = '.inc';

$ESPCONFIG['handler'] = ESP_BASE . '/public/include/handler.php';
$ESPCONFIG['handler_prefix'] = ESP_BASE . '/public/include/handler-prefix.php';
$ESPCONFIG['include_path'] = ESP_BASE . '/admin/assets/include';
$ESPCONFIG['css_path'] = ESP_BASE . '/admin/assets/css'; // css path
$ESPCONFIG['locale_path'] = ESP_BASE . '/locale'; // locale path

$ESPCONFIG['image_url'] = $ESPCONFIG['base_url'] . '/admin/images/'; // URL of the images directory (for <img src='...'> tags)
$ESPCONFIG['favicon'] = $ESPCONFIG['base_url'] . '/admin/assets/icons/favicon.ico'; // URL for favorite icon (optional)
$ESPCONFIG['autopub_url'] = $ESPCONFIG['base_url'] . '/public/survey.php'; // URL of the automatic survey publisher
$ESPCONFIG['css_url'] = $ESPCONFIG['base_url'] . '/admin/assets/css'; // URL of the CSS directory (for themes)
$ESPCONFIG['js_url'] = $ESPCONFIG['base_url'] . '/admin/assets/js'; //URL for management javascript
$ESPCONFIG['style_sheet'] = $ESPCONFIG['base_url'] . '/admin/assets/css/admin.css'; // CSS stylesheet to use for designer interface

$ESPCONFIG['ME'] = $server['PHP_SELF'];
$ESPCONFIG['tabs'] = array('general', 'questions', 'order', 'conditions', 'preview', 'finish');
$ESPCONFIG['thank_head'] = 'Thank you for completing this survey.';
$ESPCONFIG['thank_body'] = 'Please do not use the back button on your browser to go back.';

// Database Table Names:
$ESPCONFIG['access_table']              = $DB_PREFIX."access";
$ESPCONFIG['designer_table']            = $DB_PREFIX."designer";
$ESPCONFIG['question_table']            = $DB_PREFIX."question";
$ESPCONFIG['question_choice_table']     = $DB_PREFIX."question_choice";
$ESPCONFIG['question_type_table']       = $DB_PREFIX."question_type";
$ESPCONFIG['realm_table']               = $DB_PREFIX."realm";
$ESPCONFIG['respondent_table']          = $DB_PREFIX."respondent";
$ESPCONFIG['response_table']            = $DB_PREFIX."response";
$ESPCONFIG['response_bool_table']       = $DB_PREFIX."response_bool";
$ESPCONFIG['response_date_table']       = $DB_PREFIX."response_date";
$ESPCONFIG['response_multiple_table']   = $DB_PREFIX."response_multiple";
$ESPCONFIG['response_other_table']      = $DB_PREFIX."response_other";
$ESPCONFIG['response_rank_table']       = $DB_PREFIX."response_rank";
$ESPCONFIG['response_single_table']     = $DB_PREFIX."response_single";
$ESPCONFIG['response_text_table']       = $DB_PREFIX."response_text";
$ESPCONFIG['survey_table']              = $DB_PREFIX."survey";
$ESPCONFIG['condition_table']           = $DB_PREFIX."conditions";
$ESPCONFIG['survey_statistics_table']   = $DB_PREFIX."survey_statistics";
$ESPCONFIG['version_table']             = $DB_PREFIX."version";

//-------------------------------------------------------------------------------------------------

if (isset($GLOBALS)) { $GLOBALS['ESPCONFIG'] = $ESPCONFIG; } else { global $ESPCONFIG; }

//-------------------------------------------------------------------------------------------------

if(get_magic_quotes_gpc()) {
  function _addslashes($a)    { return(db_qstr(stripslashes($a))); }
  function _stripslashes($a)  { return(stripslashes($a)); }
} else {
  function _addslashes($a)    { return(db_qstr($a)); }
  function _stripslashes($a)  { return($a); }
}
error_reporting(E_ALL);

// ---------------------- variables ---------------------- //


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
define('FORMAT_DATE', '%d/%m/%Y');

define('MYCONFIG',    DOCROOT."/admin/assets/include/config.php");
define('MYLIB',       DOCROOT."/admin/assets/include/lib.inc");
define('MYFUNCTION',  DOCROOT."/admin/assets/include/functions.inc");
define('MYSESSION',   DOCROOT."/admin/assets/include/sessions.inc");
define('MYTEXT',      DOCROOT."/admin/assets/text");
define('INCLUDEADM',  DOCROOT."/admin/assets/include");
define('INCLUDEPUB',  DOCROOT."/public/assets/include");
define('WADMIN',      DOCROOT."/admin/assets/include/w");
define('WPUBLIC',     DOCROOT."/public/assets/include/w");

define('DB_HOST',     "magenta.thaiweb.net");
define('DB_USER',     "sinbad");
define('DB_PASS',     "2bbadd");
define('DB_DATABASE', "siamsquare");
define('DB_PORT',     3306);
define('DB_CHARSET',  "utf8");

define('X_ACCESS',            'x_access');
define('X_DESIGNER',          'x_designer');
define('X_QUESTION',          'x_question');
define('X_QUESTION_CHOICE',   'x_question_choice');
define('X_QUESTION_TYPE',     'x_question_type');
define('X_REALM',             'x_realm');
define('X_RESPONDENT',        'x_respondent');
define('X_RESPONSE',          'x_response');
define('X_RESPONSE_BOOL',     'x_response_bool');
define('X_RESPONSE_DATE',     'x_response_date');
define('X_RESPONSE_MULTIPLE', 'x_response_multiple');
define('X_RESPONSE_OTHER',    'x_response_other');
define('X_RESPONSE_RANK',     'x_response_rank');
define('X_RESPONSE_RATING',   'x_response_rating');
define('X_RESPONSE_SINGLE',   'x_response_single');
define('X_RESPONSE_TEXT',     'x_response_text');
define('X_SESSIONS',          'x_sessions');
define('X_SURVEY',            'x_survey');
define('X_CONDITION',         'x_conditions');
define('X_SURVEY_STATISTICS', 'x_survey_statistics');
define('X_VERSION',           'x_version');

define('STATUS_EDIT',    0);
define('STATUS_ACTIVE',  1);
define('STATUS_DONE',    2);
define('STATUS_DELETED', 4);
define('STATUS_TEST',    8);

define('SURVEY_STAT_LOGINFAIL',   'loginfail');
define('SURVEY_STAT_ATTEMPTED',   'attempted');
define('SURVEY_STAT_ABANDONED',   'abandoned');
define('SURVEY_STAT_SUSPENDED',   'suspended');
define('SURVEY_STAT_COMPLETED',   'completed');

define('STATUS_OPEN',             0);
define('STATUS_CLOSED_TOO_EARLY', 1);
define('STATUS_CLOSED_TOO_LATE',  2);

define('STATUS_NOT_STARTED',      'ยังไม่ได้เริ่ม');
define('STATUS_ALL_PARTIAL',      'เริ่มแล้ว แต่ยังไม่เสร็จ');
define('STATUS_SOME_PARTIAL',     'เสร็จไปบางส่วน แต่ยังไ่ม่สมบูรณ์');
define('STATUS_FINISHED',         'เสร็จเรียบร้อย');

require_once MYLIB;
require_once MYFUNCTION;
// require_once INCLUDEADM.'/function/db_update.inc';

$db = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_DATABASE);

if ($mysqli->connect_errno) {
  echo "Error: Could not connect to database.\n";
  echo "Errno: " . $mysqli->connect_errno . "\n";
  echo "Error: " . $mysqli->connect_error . "\n";
  exit;
}

error_reporting(E_ALL);

if (!$db->ping()) { $db->connect(); }

?>
