<?php

//-----------------------------------------------------
// TRY NOT TO CHANGE ANYTHING IN THIS FILE, it will get overwritten
// in the next release!
// If you need to change any value here, make sure you make a backup before
// updating to the next version
//-------------------------------------------------------


// URL of the images directory (for <img src='...'> tags)
$ESPCONFIG['image_url'] = $ESPCONFIG['base_url'] . '/images/';

// URL for favorite icon (optional)
// NOTE: uncomment if you have one, and make sure you deposit an icon file whereever you've specified
// $ESPCONFIG['favicon'] = $ESPCONFIG['base_url'] . '/images/favicon.ico';

// URL of the automatic survey publisher
$ESPCONFIG['autopub_url'] = $ESPCONFIG['base_url'] . '/public/survey.php';

// URL of the CSS directory (for themes)
//$ESPCONFIG['css_url'] = $ESPCONFIG['base_url'] . '/public/css';
$ESPCONFIG['css_url'] = $ESPCONFIG['base_url'] . '/css';

//URL for management javascript
$ESPCONFIG['js_url'] = $ESPCONFIG['base_url'] . '/js';

/*******************************************************************
 * Most users will not need to change anything below this line.    *
 *******************************************************************/
// Name of application
//$ESPCONFIG['name'] = 'phpESP';
$ESPCONFIG['name'] = 'SiamSquare';

// Application version
$ESPCONFIG['version'] = '2.2.0';

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
//$ESPCONFIG['style_sheet'] = $ESPCONFIG['base_url'] . '/admin/style.css';
$ESPCONFIG['style_sheet'] = $ESPCONFIG['base_url'] . '/css/admin.css';

// Status of gettext extension
$ESPCONFIG['gettext'] = extension_loaded('gettext');

// HTML page title
$ESPCONFIG['title'] = $ESPCONFIG['name'] .', v('. $ESPCONFIG['version'].')';

// phpESP include path
$ESPCONFIG['include_path'] = ESP_BASE . '/admin/include';

// phpESP css path
$ESPCONFIG['css_path'] = ESP_BASE . '/css';

// phpESP locale path
$ESPCONFIG['locale_path'] = ESP_BASE . '/locale';

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

if (!file_exists($ESPCONFIG['include_path']. '/funcs'. $ESPCONFIG['extension'])) {
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

require_once($ESPCONFIG['include_path'].'/funcs'.$ESPCONFIG['extension']);

?>
