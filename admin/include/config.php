<?php

ini_set("zlib.output_compression", 1);
error_reporting( E_CORE_ERROR | E_CORE_WARNING | E_COMPILE_ERROR | E_ERROR | E_WARNING | E_PARSE | E_USER_ERROR | E_USER_WARNING | E_RECOVERABLE_ERROR );

if (!isset($_SESSION)) session_start();
if (!isset($_SESSION)) {
   echo "This script can't work without setting the php session variable first!!!";
   exit ;
}

if (!defined('ESP_BASE')) define('ESP_BASE', $_SERVER['DOCUMENT_ROOT']);
if (isset($_SERVER)) { $server =& $_SERVER; } else { $server =& $HTTP_SERVER_VARS; }

//-------------------------------------------------------------------------------------------------

$ESPCONFIG['DEBUG'] = true;
$ESPCONFIG['proto'] = 'http://';
$ESPCONFIG['base_url'] = $ESPCONFIG['proto'] . $server['HTTP_HOST'];
$ESPCONFIG['db_host'] = 'magenta.thaiweb.net';
$ESPCONFIG['db_user'] = 'sinbad';
$ESPCONFIG['db_pass'] = '2bbadd';
$ESPCONFIG['db_name'] = 'ssq';
$DB_PREFIX = "x_";
$OLD_DB_PREFIX = "";

$ESPCONFIG['limit_double_postings'] = 3; // no. of days for resubmitting, set to 0 to disable
$ESPCONFIG['use_captcha'] = 0; // need GD if enable
$ESPCONFIG['date_format'] = "%d/%m/%Y";

$ESPCONFIG['adodb_path'] = ESP_BASE . '/admin/include/lib/adodb/';
$ESPCONFIG['adodb_database_type'] = 'mysql';
$ESPCONFIG['adodb_persist'] = 'true';
$ESPCONFIG['adodb_pathto_db'] = ESP_BASE . '/scripts/db/esp.dbm';

$ESPCONFIG['allow_email'] = true;
$ESPCONFIG['human_email'] = true;
$ESPCONFIG['email_from_name'] = "SiamSquare";
$ESPCONFIG['email_from_address'] = "survey@siamsquare.org";
$ESPCONFIG['email_return_path'] = "survey@siamsquare.org"; // the email return path for bounces ...

$ESPCONFIG['auth_mode'] = 'form'; // { 'basic', 'form' }
$ESPCONFIG['auth_design'] = true;
$ESPCONFIG['auth_response'] = true;
$ESPCONFIG['auth_type'] = 'default'; // { 'default', 'ldap_both', 'ldap_resp', 'ldap_des' }
// $ESPCONFIG['ldap_server'] = 'ldap://ldap.example.com';
// $ESPCONFIG['ldap_port'] = '389';
// $ESPCONFIG['ldap_bind_dn'] = '';
// $ESPCONFIG['ldap_bind_password'] = '';
// $ESPCONFIG['ldap_dn']     = 'dc=example, dc=com';
// $ESPCONFIG['ldap_filter'] = 'uid=';
// $ESPCONFIG['ldap_realm_attr'] = 'objectClass';
// $ESPCONFIG['ldap_designer_filter'] = 'UserCategory=engineer';
// $ESPCONFIG['ldap_superuser_attr'] = 'uid';
// $ESPCONFIG['ldap_superuser_value'] = 'test';
// $ESPCONFIG['ldap_force_proto_3'] = true;

$ESPCONFIG['signup_realm'] = 'auto'; // set to NULL to disable the sign-up page (when use LDAP)

$ESPCONFIG['dashboard_enable'] = true; // For respondents
$ESPCONFIG['dashboard_show_public_surveys'] = true;
$ESPCONFIG['dashboard_allow_change_profile'] = true; // Allow respondents to change their profile?
$ESPCONFIG['dashboard_allow_change_password'] = true; // Allow respondents to change their password?
$ESPCONFIG['support_email_address'] = "webmaster@siamsquare.org";

$ESPCONFIG['default_lang'] = 'en_US';
$ESPCONFIG['charset'] = 'UTF-8';
$ESPCONFIG['default_num_choices'] = 5; // Default number of option lines for new questions

//$ESPCONFIG['main_bgcolor']      = '#FFFFFF';
//$ESPCONFIG['link_color']        = '#0000CC';
//$ESPCONFIG['vlink_color']       = '#0000CC';
//$ESPCONFIG['alink_color']       = '#0000CC';
//$ESPCONFIG['dim_bgcolor']       = '#3399CC';
//$ESPCONFIG['error_color']       = '#FF0000';
//$ESPCONFIG['warn_color']        = '#FF0000';
//$ESPCONFIG['reqd_color']        = '#FF0000';
//$ESPCONFIG['bgalt_color1']      = '#FFFFFF';
//$ESPCONFIG['bgalt_color2']      = '#EEEEEE';

//-------------------------------------------------------------------------------------------------

$ESPCONFIG['name'] = 'SiamSquare';
$ESPCONFIG['version'] = '2.2.0';
$ESPCONFIG['title'] = $ESPCONFIG['name'] .', v('. $ESPCONFIG['version'].')';
$ESPCONFIG['unsupported'] = array('cgi', 'sapi'); // Unsuported web server configuration check values 
$ESPCONFIG['gettext'] = extension_loaded('gettext');
$ESPCONFIG['extension'] = '.inc';

$ESPCONFIG['handler'] = ESP_BASE . '/public/handler.php';
$ESPCONFIG['handler_prefix'] = ESP_BASE . '/public/handler-prefix.php';
$ESPCONFIG['include_path'] = ESP_BASE . '/admin/include'; 
$ESPCONFIG['css_path'] = ESP_BASE . '/admin/css'; // css path
$ESPCONFIG['locale_path'] = ESP_BASE . '/locale'; // locale path

$ESPCONFIG['image_url'] = $ESPCONFIG['base_url'] . '/images/'; // URL of the images directory (for <img src='...'> tags)
$ESPCONFIG['favicon'] = $ESPCONFIG['base_url'] . '/images/favicon.ico'; // URL for favorite icon (optional)
$ESPCONFIG['autopub_url'] = $ESPCONFIG['base_url'] . '/public/survey.php'; // URL of the automatic survey publisher
$ESPCONFIG['css_url'] = $ESPCONFIG['base_url'] . '/css'; // URL of the CSS directory (for themes)
$ESPCONFIG['js_url'] = $ESPCONFIG['base_url'] . '/js'; //URL for management javascript
$ESPCONFIG['style_sheet'] = $ESPCONFIG['base_url'] . '/css/admin.css'; // CSS stylesheet to use for designer interface

$ESPCONFIG['ME'] = $server['PHP_SELF'];
$ESPCONFIG['tabs'] = array('general', 'questions', 'order', 'conditions', 'preview', 'finish');
$ESPCONFIG['thank_head'] = _('Thank You For Completing This Survey.');
$ESPCONFIG['thank_body'] = _('Please do not use the back button on your browser to go back.');

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

// Load I18N support
//require_once($ESPCONFIG['include_path'] . '/lib/espi18n' . $ESPCONFIG['extension']);
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/include/lib/espi18n.inc';

if (isset($_REQUEST['lang'])) { 
   esp_setlocale_ex($_REQUEST['lang']);
   $_SESSION['language']=$_REQUEST['lang'];
} elseif (isset($lang)) {
   esp_setlocale_ex($lang);
   $_SESSION['language']=$lang;
} elseif (isset($_SESSION['language'])) {
   esp_setlocale_ex($_SESSION['language']);
} else {
   esp_setlocale_ex();
}

if (!file_exists($ESPCONFIG['include_path']. '/funcs'. $ESPCONFIG['extension'])) {
    printf('<b>'. _('Unable to find the %s directory. Please check %s to ensure that all paths are set correctly.') .'</b>', 'include', 'config.php');
    exit;
}
if (!file_exists($ESPCONFIG['css_path'])) {
    printf('<b>'. _('Unable to find the %s directory. Please check %s to ensure that all paths are set correctly.') .'</b>', 'css', 'config.php');
    exit;
}

//-------------------------------------------------------------------------------------------------

if (isset($GLOBALS)) {
    $GLOBALS['ESPCONFIG'] = $ESPCONFIG;
} else {
    global $ESPCONFIG;
}

//require_once($ESPCONFIG['include_path'].'/funcs'.$ESPCONFIG['extension']);
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/include/funcs.inc';

?>
