<?php

define('QDB_NAME', 'siamsquare');
define('QDB_USER', 'sinbad');
define('QDB_PASSWORD', '2bbadd');
define('QDB_HOST', 'magenta.thaiweb.net');
define('QDB_CHARSET', 'utf8');
define('QDB_COLLATE', '');

$table_prefix  = 'x_';

define('QDEBUG', true);

if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

define( 'QINC', 'include' );

// require( ABSPATH . QINC . '/load.php' );
// require( ABSPATH . QINC . '/default-constants.php' );

function unregister_GLOBALS() {
	if ( !ini_get( 'register_globals' ) )
		return;

	if ( isset( $_REQUEST['GLOBALS'] ) )
		die( 'GLOBALS overwrite attempt detected' );

	// Variables that shouldn't be unset
	$no_unset = array( 'GLOBALS', '_GET', '_POST', '_COOKIE', '_REQUEST', '_SERVER', '_ENV', '_FILES', 'table_prefix' );

	$input = array_merge( $_GET, $_POST, $_COOKIE, $_SERVER, $_ENV, $_FILES, isset( $_SESSION ) && is_array( $_SESSION ) ? $_SESSION : array() );
	foreach ( $input as $k => $v )
		if ( !in_array( $k, $no_unset ) && isset( $GLOBALS[$k] ) ) {
			unset( $GLOBALS[$k] );
		}
}

function fix_server_vars() {
	global $PHP_SELF;

	$default_server_values = array(
		'SERVER_SOFTWARE' => '',
		'REQUEST_URI' => '',
	);

	$_SERVER = array_merge( $default_server_values, $_SERVER );

	// Fix for IIS when running with PHP ISAPI
	if ( empty( $_SERVER['REQUEST_URI'] ) || ( PHP_SAPI != 'cgi-fcgi' && preg_match( '/^Microsoft-IIS\//', $_SERVER['SERVER_SOFTWARE'] ) ) ) {

		// IIS Mod-Rewrite
		if ( isset( $_SERVER['HTTP_X_ORIGINAL_URL'] ) ) {
			$_SERVER['REQUEST_URI'] = $_SERVER['HTTP_X_ORIGINAL_URL'];
		}
		// IIS Isapi_Rewrite
		elseif ( isset( $_SERVER['HTTP_X_REWRITE_URL'] ) ) {
			$_SERVER['REQUEST_URI'] = $_SERVER['HTTP_X_REWRITE_URL'];
		} else {
			// Use ORIG_PATH_INFO if there is no PATH_INFO
			if ( !isset( $_SERVER['PATH_INFO'] ) && isset( $_SERVER['ORIG_PATH_INFO'] ) )
				$_SERVER['PATH_INFO'] = $_SERVER['ORIG_PATH_INFO'];

			// Some IIS + PHP configurations puts the script-name in the path-info (No need to append it twice)
			if ( isset( $_SERVER['PATH_INFO'] ) ) {
				if ( $_SERVER['PATH_INFO'] == $_SERVER['SCRIPT_NAME'] )
					$_SERVER['REQUEST_URI'] = $_SERVER['PATH_INFO'];
				else
					$_SERVER['REQUEST_URI'] = $_SERVER['SCRIPT_NAME'] . $_SERVER['PATH_INFO'];
			}

			// Append the query string if it exists and isn't null
			if ( ! empty( $_SERVER['QUERY_STRING'] ) ) {
				$_SERVER['REQUEST_URI'] .= '?' . $_SERVER['QUERY_STRING'];
			}
		}
	}

	// Fix for PHP as CGI hosts that set SCRIPT_FILENAME to something ending in php.cgi for all requests
	if ( isset( $_SERVER['SCRIPT_FILENAME'] ) && ( strpos( $_SERVER['SCRIPT_FILENAME'], 'php.cgi' ) == strlen( $_SERVER['SCRIPT_FILENAME'] ) - 7 ) )
		$_SERVER['SCRIPT_FILENAME'] = $_SERVER['PATH_TRANSLATED'];

	// Fix for Dreamhost and other PHP as CGI hosts
	if ( strpos( $_SERVER['SCRIPT_NAME'], 'php.cgi' ) !== false )
		unset( $_SERVER['PATH_INFO'] );

	// Fix empty PHP_SELF
	$PHP_SELF = $_SERVER['PHP_SELF'];
	if ( empty( $PHP_SELF ) )
		$_SERVER['PHP_SELF'] = $PHP_SELF = preg_replace( '/(\?.*)?$/', '', $_SERVER["REQUEST_URI"] );
}

// function timer_start() {
// 	global $timestart;
// 	$timestart = microtime( true );
// 	return true;
// }

// function timer_stop( $display = 0, $precision = 3 ) {
// 	global $timestart, $timeend;
// 	$timeend = microtime( true );
// 	$timetotal = $timeend - $timestart;
// 	$r = ( function_exists( 'number_format_i18n' ) ) ? number_format_i18n( $timetotal, $precision ) : number_format( $timetotal, $precision );
// 	if ( $display )
// 		echo $r;
// 	return $r;
// }

function require_db() {
	global $db;
	require_once( ABSPATH . QINC . '/MysqliDb.php' );
	if ( isset( $db ) ) {
		return;
	}
  $db = new MysqliDb( DB_HOST, DB_USER, DB_PASSWORD, DB_NAME );
}

function magic_quotes() {
	// If already slashed, strip.
	if ( get_magic_quotes_gpc() ) {
		$_GET    = stripslashes_deep( $_GET    );
		$_POST   = stripslashes_deep( $_POST   );
		$_COOKIE = stripslashes_deep( $_COOKIE );
	}

	// Escape with db.
	$_GET    = add_magic_quotes( $_GET    );
	$_POST   = add_magic_quotes( $_POST   );
	$_COOKIE = add_magic_quotes( $_COOKIE );
	$_SERVER = add_magic_quotes( $_SERVER );

	// Force REQUEST to be GET + POST.
	$_REQUEST = array_merge( $_GET, $_POST );
}

function is_admin() {
	if ( isset( $GLOBALS['current_screen'] ) )
		return $GLOBALS['current_screen']->in_admin();
	elseif ( defined( 'Q_ADMIN' ) )
		return Q_ADMIN;
	return false;
}

function is_user() {
	if ( isset( $GLOBALS['current_screen'] ) )
		return $GLOBALS['current_screen']->in_admin( 'user' );
	elseif ( defined( 'Q_USER' ) )
		return Q_USER;
	return false;
}

function is_ssl() {
	if ( isset( $_SERVER['HTTPS'] ) ) {
		if ( 'on' == strtolower( $_SERVER['HTTPS'] ) ) {
			return true;
		}
		if ( '1' == $_SERVER['HTTPS'] ) {
			return true;
		}
	} elseif ( isset($_SERVER['SERVER_PORT'] ) && ( '443' == $_SERVER['SERVER_PORT'] ) ) {
		return true;
	}
	return false;
}

// function q_initial_constants() {
//
// 	define( 'KB_IN_BYTES', 1024 );
// 	define( 'MB_IN_BYTES', 1024 * KB_IN_BYTES );
// 	define( 'GB_IN_BYTES', 1024 * MB_IN_BYTES );
// 	define( 'TB_IN_BYTES', 1024 * GB_IN_BYTES );
//
// 	define( 'MINUTE_IN_SECONDS', 60 );
// 	define( 'HOUR_IN_SECONDS',   60 * MINUTE_IN_SECONDS );
// 	define( 'DAY_IN_SECONDS',    24 * HOUR_IN_SECONDS   );
// 	define( 'WEEK_IN_SECONDS',    7 * DAY_IN_SECONDS    );
// 	define( 'MONTH_IN_SECONDS',  30 * DAY_IN_SECONDS    );
// 	define( 'YEAR_IN_SECONDS',  365 * DAY_IN_SECONDS    );
//
// }

function q_cookie_constants() {

	if ( !defined( 'COOKIEHASH' ) ) {
		$siteurl = get_site_option( 'siteurl' );
		if ( $siteurl )
			define( 'COOKIEHASH', md5( $siteurl ) );
		else
			define( 'COOKIEHASH', '' );
	}

	if ( !defined('USER_COOKIE') )
		define('USER_COOKIE', 'wordpressuser_' . COOKIEHASH);

	if ( !defined('PASS_COOKIE') )
		define('PASS_COOKIE', 'wordpresspass_' . COOKIEHASH);

	if ( !defined('AUTH_COOKIE') )
		define('AUTH_COOKIE', 'wordpress_' . COOKIEHASH);

	if ( !defined('SECURE_AUTH_COOKIE') )
		define('SECURE_AUTH_COOKIE', 'wordpress_sec_' . COOKIEHASH);

	if ( !defined('LOGGED_IN_COOKIE') )
		define('LOGGED_IN_COOKIE', 'wordpress_logged_in_' . COOKIEHASH);

	if ( !defined('TEST_COOKIE') )
		define('TEST_COOKIE', 'wordpress_test_cookie');

	if ( !defined('COOKIEPATH') )
		define('COOKIEPATH', preg_replace('|https?://[^/]+|i', '', get_option('home') . '/' ) );

	if ( !defined('SITECOOKIEPATH') )
		define('SITECOOKIEPATH', preg_replace('|https?://[^/]+|i', '', get_option('siteurl') . '/' ) );

	if ( !defined('ADMIN_COOKIE_PATH') )
		define( 'ADMIN_COOKIE_PATH', SITECOOKIEPATH . 'ssq-admin' );

	if ( !defined('COOKIE_DOMAIN') )
		define('COOKIE_DOMAIN', false);
}

q_initial_constants();
q_cookie_constants();

@ini_set( 'magic_quotes_runtime', 0 );
@ini_set( 'magic_quotes_sybase',  0 );

q_unregister_GLOBALS();
q_fix_server_vars();

// require( ABSPATH . QINC . '/compat.php' );
// require( ABSPATH . QINC . '/functions.php' );
// require( ABSPATH . QINC . '/class-wp-matchesmapregex.php' );
// require( ABSPATH . QINC . '/class-wp.php' );
// require( ABSPATH . QINC . '/class-wp-error.php' );
// require( ABSPATH . QINC . '/pomo/mo.php' );
// require( ABSPATH . QINC . '/class-phpass.php' );

global $db;
require_db();
$GLOBALS['table_prefix'] = $table_prefix;

// Attach the default filters.
require( ABSPATH . QINC . '/template.php' );
require( ABSPATH . QINC . '/functions.php' );



cookie_constants();
magic_quotes();






// ------------- SETTINGS ------------- //


ini_set("zlib.output_compression", 1);
error_reporting( E_CORE_ERROR | E_CORE_WARNING | E_COMPILE_ERROR | E_ERROR | E_WARNING | E_PARSE | E_USER_ERROR | E_USER_WARNING | E_RECOVERABLE_ERROR );

if (!isset($_SESSION)) session_start();
if (!isset($_SESSION)) { echo "This script can't work without setting the php session variable first!!!"; exit; }

if (!defined('ESP_BASE')) define('ESP_BASE', $_SERVER['DOCUMENT_ROOT']);
if (isset($_SERVER)) { $server =& $_SERVER; } else { $server =& $HTTP_SERVER_VARS; }

//-------------------------------------------------------------------------------------------------

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


// ------------- THE REST ------------- //
