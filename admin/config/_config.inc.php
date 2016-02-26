<?php

if (!isset($_SESSION)) session_start();
// if the session fails to start
if (!isset($_SESSION)) {
   echo "This script can't work without setting the php session variable first!!!";
   exit ;
}

if (!defined('ESP_BASE')) define('ESP_BASE', dirname(dirname(__FILE__)) .'/');
if (isset($_SERVER))  $server =& $_SERVER;
else                  $server =& $HTTP_SERVER_VARS;

/**
 * Here are all the configuration options.
 */

// Enable debugging code (BOOLEAN)
$ESPCONFIG['DEBUG'] = true;

// use http or https?
$ESPCONFIG['proto'] = 'http://';

// Base URL for phpESP
$ESPCONFIG['base_url'] = $ESPCONFIG['proto'] . $server['HTTP_HOST'] . '/phpESP/';

// Database connection information
// for the database type, change $ESPCONFIG['adodb_database_type'] (further down)
$ESPCONFIG['db_host'] = 'localhost';
$ESPCONFIG['db_user'] = 'root';
$ESPCONFIG['db_pass'] = '';
$ESPCONFIG['db_name'] = 'phpesp';
$DB_PREFIX = "phpesp_";   // If you want your database tables to use a prefix, set it here.
$OLD_DB_PREFIX = "";   // When switching prefixes, give here the current existing prefix in the db

// to limit double postings
// set this to the number of days people are restricted from resubmitting
// this is in fact the expire time for a cookie
// Set this to 0 to disable
$ESPCONFIG['limit_double_postings'] = 3;

// to use captcha confirmation, set this to 1
// Be sure to install the GD extension for PHP first, before using this
$ESPCONFIG['use_captcha'] = 0;

//date format to be used when filling in date fields in a survey
$ESPCONFIG['date_format'] = "%d/%m/%Y";
//$ESPCONFIG['date_format'] = "%m/%d/%Y";

// ADODB 
$ESPCONFIG['adodb_path'] = ESP_BASE . 'admin/include/lib/adodb/';
// the database type, everything adodb supports should work ... hopefully ...
// for valid values, see admin/include/lib/adodb/drivers
$ESPCONFIG['adodb_database_type'] = 'mysql';
$ESPCONFIG['adodb_persist'] = 'true';
$ESPCONFIG['adodb_pathto_db'] = "/var/www/phpESP/scripts/db/esp.dbm";

// Allow phpESP to send email (BOOLEAN)
$ESPCONFIG['allow_email'] = true;

// Send human readable email, rather than machine readable (BOOLEAN)
$ESPCONFIG['human_email'] = true;

// The from address to use in the mails
// (use valid emails, I won't protect you here ...)
$ESPCONFIG['email_from_name'] = "PHPESP";
$ESPCONFIG['email_from_address'] = "phpesp@". $_SERVER['SERVER_NAME'];
// the email return path for bounces ...
$ESPCONFIG['email_return_path'] = $_SERVER['SERVER_ADMIN'] ."@". $_SERVER['SERVER_NAME'];
# example:
# $ESPCONFIG['email_from_name'] = "Customer Department";
# $ESPCONFIG['email_from_address'] = "cust@somedomain.com";
# $ESPCONFIG['email_return_path'] = "admin@somedomain.com";

// Choose authentication mode: { 'basic', 'form' }
$ESPCONFIG['auth_mode'] = 'form';

// Use authentication for designer interface (BOOLEAN)
$ESPCONFIG['auth_design'] = true;

// Use authentication for survey responders (BOOLEAN)
$ESPCONFIG['auth_response'] = true;

// Choose authentication type: { 'default', 'ldap_both', 'ldap_resp', 'ldap_des' }
// ldap_resp: respondents in LDAP, ldap_des: designers in LDAP
// ldap_both: both respondents and designers in LDAP
// default: mysql
$ESPCONFIG['auth_type'] = 'default';

// LDAP connection information
// (Set these values if you choose 'ldap' as the authentication type.)
// if a user is not found in ldap, the DB is still searched as well
// designer info is copied in the DB
$ESPCONFIG['ldap_server'] = 'ldap://ldap.example.com';
$ESPCONFIG['ldap_port'] = '389';
// if wanted/needed, enter the settings to do an authenticated ldap bind
// in order to search the ldap tree
$ESPCONFIG['ldap_bind_dn'] = '';
$ESPCONFIG['ldap_bind_password'] = '';
//the base dn you want to search
$ESPCONFIG['ldap_dn']     = 'dc=example, dc=com';
// the ldap filter used, this is completed with the uid the user enters
$ESPCONFIG['ldap_filter'] = 'uid=';
// the LDAP attribute that is compared with the "group" when completing private
// surveys
$ESPCONFIG['ldap_realm_attr'] = 'objectClass';
// the LDAP attribute/value needed to designate a LDAP user as a designer
$ESPCONFIG['ldap_designer_filter'] = 'UserCategory=engineer';
// the LDAP attribute needed to designate a LDAP user as a superuser
// we show the example of "uid=test"
$ESPCONFIG['ldap_superuser_attr'] = 'uid';
// the LDAP value needed to designate a LDAP user as a superuser
$ESPCONFIG['ldap_superuser_value'] = 'test';
// most newer LDAP servers need protocol 3 to be able to bind successfully
// if this doesn't work for you, turn it of
$ESPCONFIG['ldap_force_proto_3'] = true;

// Group to add responders to via the sign-up page
// (Set to "null", without quotes, to disable the sign-up page.)
// Please do disable this for LDAP auth for respondents
$ESPCONFIG['signup_realm'] = 'auto';


/* DASHBOARD RELATED */
// Use the dashboard, where survey respondents can log in and
// see all their current surveys, the historical record of their
// surveys, change their password, get help on the survey, etc.
// If sign-up is supported, a link to the sign-up page will be
// provided on the login page.  The login page will also show all
// publically available surveys.
$ESPCONFIG['dashboard_enable'] = false;

// On the dashboard, before authentication, show a list of public
// surveys.  This is only relevant if dashboard_enable = true.  
$ESPCONFIG['dashboard_show_public_surveys'] = false;

// Allow respondents to change their profile?
$ESPCONFIG['dashboard_allow_change_profile'] = true;

// Allow respondents to change their password?
$ESPCONFIG['dashboard_allow_change_password'] = true;

// Email address where respondents can reach you if they need support.
// Set to null (the default) to not expose an email address to users.
// ESPCONFIG['support_email_address'] = 'you@example.com';
$ESPCONFIG['support_email_address'] = null;


/* LANGUAGE RELATED */
// Default language for designer interface
// (Must have gettext support avaiable.)
$ESPCONFIG['default_lang'] = 'en_US';

// HTML character set used by phpESP
// (Try 'Windows-1251' for Cryillic, etc.)
//$ESPCONFIG['charset'] = 'ISO-8859-15';
$ESPCONFIG['charset'] = 'UTF-8';

// Default number of option lines for new questions
$ESPCONFIG['default_num_choices'] = 10;

// Colors used by phpESP
$ESPCONFIG['main_bgcolor']      = '#FFFFFF';
$ESPCONFIG['link_color']        = '#0000CC';
$ESPCONFIG['vlink_color']       = '#0000CC';
$ESPCONFIG['alink_color']       = '#0000CC';
$ESPCONFIG['dim_bgcolor']       = '#3399CC';
$ESPCONFIG['error_color']       = '#FF0000';
$ESPCONFIG['warn_color']        = '#FF0000';
$ESPCONFIG['reqd_color']        = '#FF0000';
$ESPCONFIG['bgalt_color1']      = '#FFFFFF';
$ESPCONFIG['bgalt_color2']      = '#EEEEEE';

//-----------------------------------------------------
// TRY NOT TO CHANGE ANYTHING IN THIS FILE, it will get overwritten
// in the next release!
// If you need to change any value here, make sure you make a backup before
// updating to the next version
//-------------------------------------------------------


// URL of the images directory (for <img src='...'> tags)
$ESPCONFIG['image_url'] = $ESPCONFIG['base_url'] . 'images/';

// URL for favorite icon (optional)
// NOTE: uncomment if you have one, and make sure you deposit an icon file whereever you've specified
// $ESPCONFIG['favicon'] = $ESPCONFIG['base_url'] . 'images/favicon.ico';

// URL of the automatic survey publisher
$ESPCONFIG['autopub_url'] = $ESPCONFIG['base_url'] . 'public/survey.php';

// URL of the CSS directory (for themes)
$ESPCONFIG['css_url'] = $ESPCONFIG['base_url'] . 'public/css/';

//URL for management javascript
$ESPCONFIG['js_url'] = $ESPCONFIG['base_url'] . 'js/';

/*******************************************************************
 * Most users will not need to change anything below this line.    *
 *******************************************************************/
// Name of application
$ESPCONFIG['name'] = 'phpESP';

// Application version
$ESPCONFIG['version'] = '2.1.4';

// Extension of support files
$ESPCONFIG['extension'] = '.inc';

// Survey handler to use
$ESPCONFIG['handler']        = ESP_BASE . '/public/handler.php';
$ESPCONFIG['handler_prefix'] = ESP_BASE . '/public/handler-prefix.php';

// Valid tabs when editing surveys
//$ESPCONFIG['tabs'] = array('general', 'questions', 'order', 'conditions', 'preview', 'finish');

// Copy of PHP_SELF for later use
$ESPCONFIG['ME'] = $server['PHP_SELF'];

// CSS stylesheet to use for designer interface
$ESPCONFIG['style_sheet'] = $ESPCONFIG['base_url'] . 'admin/style.css';

// Status of gettext extension
$ESPCONFIG['gettext'] = extension_loaded('gettext');

// HTML page title
$ESPCONFIG['title'] = $ESPCONFIG['name'] .', v('. $ESPCONFIG['version'].')';

// phpESP include path
$ESPCONFIG['include_path'] = ESP_BASE . '/admin/include/';

// phpESP css path
$ESPCONFIG['css_path'] = ESP_BASE . '/public/css/';

// phpESP locale path
$ESPCONFIG['locale_path'] = ESP_BASE . '/locale/';

// Unsuported web server configuration check values 
$ESPCONFIG['unsupported'] = array('cgi', 'sapi');

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

// Load I18N support
require_once($ESPCONFIG['include_path'] . '/lib/espi18n' . $ESPCONFIG['extension']);
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


// default thank you messages
$ESPCONFIG['thank_head'] = _('Thank You For Completing This Survey.');
$ESPCONFIG['thank_body'] = _('Please do not use the back button on your browser to go
back.');

//if (!file_exists($ESPCONFIG['include_path']. '/funcs'. $ESPCONFIG['extension'])) {
if (!file_exists('include/funcs.inc') {
    printf('<b>'. _('Unable to find the phpESP %s directory.
			Please check %s to ensure that all paths are set correctly.') .
			'</b>', 'include', 'phpESP.ini.php');
    exit;
}
if (!file_exists($ESPCONFIG['css_path'])) {
    printf('<b>'. _('Unable to find the phpESP %s directory.
			Please check %s to ensure that all paths are set correctly.') .
			'</b>', 'css', 'phpESP.ini.php');
    exit;
}

if (isset($GLOBALS)) {
    $GLOBALS['ESPCONFIG'] = $ESPCONFIG;
} else {
    global $ESPCONFIG;
}

//require_once($ESPCONFIG['include_path'].'/funcs'.$ESPCONFIG['extension']);
require_once('include/funcs.inc');

?>

