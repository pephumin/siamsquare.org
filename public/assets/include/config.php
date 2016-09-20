<?php

ini_set("zlib.output_compression", 1);
error_reporting( E_CORE_ERROR | E_CORE_WARNING | E_COMPILE_ERROR | E_ERROR | E_WARNING | E_PARSE | E_USER_ERROR | E_USER_WARNING | E_RECOVERABLE_ERROR );

if (!isset($_SESSION)) session_start();
if (!isset($_SESSION)) { echo "This script can't work without setting the php session variable first!!!"; exit; }

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

$ESPCONFIG['adodb_path'] = ESP_BASE . '/admin/assets/include/lib/adodb/';
$ESPCONFIG['adodb_database_type'] = 'mysql';
$ESPCONFIG['adodb_persist'] = 'true';
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
$ESPCONFIG['thank_head'] = _('Thank you for completing this survey.');
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





if (isset($GLOBALS)) { $GLOBALS['ESPCONFIG'] = $ESPCONFIG; } else { global $ESPCONFIG; }

//-------------------------------------------------------------------------------------------------

if (!defined('STATUS_ACTIVE')) {
  define('STATUS_EDIT',    0x00);
  define('STATUS_ACTIVE',  0x01);
  define('STATUS_DONE',    0x02);
  define('STATUS_DELETED', 0x04);
  define('STATUS_TEST',    0x08);
}

if(get_magic_quotes_gpc()) {
  function _addslashes($a)    { return(db_qstr(stripslashes($a))); }
  function _stripslashes($a)  { return(stripslashes($a)); }
} else {
  function _addslashes($a)    { return(db_qstr($a)); }
  function _stripslashes($a)  { return($a); }
}
error_reporting(E_ALL);

//-------------------------------------------------------------------------------------------------

function esp_where($where = null) {
  $cfg =& $GLOBALS['ESPCONFIG'];
  if(empty($where)) { $where = 'index'; }
  $where = strtolower(preg_replace('/ +/','_',$where));
  if(!preg_match('/^[A-Za-z0-9_]+$/',$where)) { $where = 'index'; }
  $filecheck = $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/where/'.$where.'.inc';
  if(!file_exists($filecheck)) { $where = 'index'; }
  if(!file_exists($filecheck)) { echo('<b>Unable to open include file. Check INI settings. Aborting.</b>'); exit; }
  return($filecheck);
}

function esp_init_adodb() {
  $cfg =& $GLOBALS['ESPCONFIG'];
  $dbcheck = $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/lib/adodb/adodb.inc.php';
  if (!file_exists($dbcheck)) { echo('<b>Unable to open ADODB include file. Check INI settings. Aborting.</b>'); exit; }
  else { include $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/lib/adodb/adodb.inc.php'; }
  if (isset($cfg['adodb_conn'])) { return; }
  $cfg['adodb_conn'] = &ADONewConnection($cfg['adodb_database_type']);
  error_reporting(0);  // Hide errors

  //$cfg['adodb_conn']->debug=1;
  if ($cfg['adodb_database_type'] == "sqlite") { $dbconnected = $cfg['adodb_conn']->Connect($cfg['adodb_pathto_db']); }
  else {
    if (!isset($cfg['adodbi_persist']) or (isset($cfg['adodb_persist']) && $cfg['adodb_persist'])) {
      $dbconnected = $cfg['adodb_conn']->PConnect($cfg['db_host'], $cfg['db_user'], $cfg['db_pass'], $cfg['db_name']);
    } else {
      $dbconnected = $cfg['adodb_conn']->Connect($cfg['db_host'], $cfg['db_user'], $cfg['db_pass'], $cfg['db_name']);
    }
  }

  $charset = "SET NAMES utf8";
  mysql_query($charset) or die('Invalid query: ' . mysql_error());

  if (!$dbconnected) {
    header('HTTP/1.0 503 '. _('Service Unavailable'));
    echo('<html><head><title>HTTP 503 '. _('Service Unavailable') .'</title></head>');
    echo('<body><h1>HTTP 503 '. _('Service Unavailable') .'</h1>');
    echo(mkerror(_('<div class="alert alert-danger" role="alert"><p>Connection to database failed. Please check configuration.</p></div>')));
    if ($cfg['DEBUG']) { echo("<br>\n". mkerror(ErrorNo().": ".ErrorMsg())); }
    echo('</body></html>');
    exit;
  }
  error_reporting(E_ALL);
}

function goto_thankyou($sid,$referer) {

  require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/lib/espsurveystat.inc';
  survey_stat_decrement(SURVEY_STAT_ABANDONED, $sid);
  survey_stat_increment(SURVEY_STAT_COMPLETED, $sid);

  $cfg =& $GLOBALS['ESPCONFIG'];
  $sql = "SELECT thank_head,thank_head_th,thank_body,thank_body_th FROM ".$cfg['survey_table']." WHERE id=${sid}";
  $result = execute_sql($sql);
  list($thank_head,$thank_head_th,$thank_body,$thank_body_th) = fetch_row($result);
  db_close($result);

  echo "<h2>Congratulations! You have just completed this survey.</h2>\n\n";
  echo "<p><i class=\"fa fa-check-square-o fa-4x\"></i></p>\n\n";
  echo "<table class=\"table\">\n";
  echo "<tr><td>\n";
  echo "<h4>$thank_head</h4>\n";
  echo "<p>$thank_body</p>\n";
  echo "</td><td>\n";
  echo "<h4>$thank_head_th</h4>\n";
  echo "<p>$thank_body_th</p>\n";
  echo "</td></tr>\n";
  echo "</table>\n";

  if (isset($_GET['where']) && $_GET['where'] == 'test') {
   if ($GLOBALS['ESPCONFIG']['limit_double_postings'] == 0) { $ref = "<a href=\"". $referer."\">Return</a><br />"; }
   else { $ref = ""; }
  }
  else { $ref = check_referer($referer); }
  echo $ref;
  return;
}

function check_referer($referer) {
  $pos = strpos($referer, $GLOBALS['ESPCONFIG']['autopub_url']);
  if ($pos === false) {
    if (!empty($_REQUEST['direct']) && $_REQUEST['direct'] === '1') { $retstr = ""; }
    else {
      if ($GLOBALS['ESPCONFIG']['limit_double_postings']==0) { $retstr = "<a href=\"". $referer."\">Return</a>"; }
      else { $retstr = ""; }
    }
  }
  else { $retstr = ""; }
  return $retstr;
}

//  Go to a different URL, using the best method possible given the current output state

function blur($url, $forwardingLabel = 'Please click here to continue...') {
  // close the session, as it's no longer needed and we don't want to delay waiters
  session_write_close();
  // make sure the URL is absolute, as the Location: header requires it
  if (0 !== strpos($url, 'http')) { $url = rtrim($GLOBALS['ESPCONFIG']['base_url'], '/') . '/' . ltrim($url, '/'); }
  // go elsewhere
  if (headers_sent()) {
    echo <<<EOHTML
<script type='text/javascript'>
  window.location = "$url";
</script>
<noscript>
  <a href="$url">$forwardingLabel</a>
</noscript>
EOHTML;
  } else {
    header(sprintf('Location: %s', $url));
  }
  exit(0);
}

function goto_saved($sid, $url) {
  if ($_REQUEST['test']) { $url = $url."&test=1"; }
  require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/lib/espsurveystat.inc';
  survey_stat_decrement(SURVEY_STAT_ABANDONED, $sid);
  survey_stat_increment(SURVEY_STAT_SUSPENDED, $sid);
?>

<h2>Your survey has been saved</h2>
<br>
<p>Your progress has been saved. You may return at any time to complete this survey.</p>
<p>To do so, simply bookmark the link below.</p>
<p>You may be prompted for your username and password to complete the survey.</p>
<br>
<a href="<?php echo $url; ?>" class="btn btn-success" role="button">Continue survey</a>&nbsp;
<a href="<?php echo $GLOBALS['ESPCONFIG']['base_url'] . '/admin'; ?>" class="btn btn-default" role="button">Back to Dashboard</a>

<?php
  return;
}

function esp_require_once($path) {
  $ESPCONFIG = $GLOBALS['ESPCONFIG'];
  require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include' . $path . '.inc';
  return true;
}

function esp_file_get_contents($file) {
  if (function_exists('file_get_contents')) return file_get_contents($file);
  $f = fopen($file,'r');
  if (!$f) return '';
  $t = '';
  while ($s = fread($f,100000)) $t .= $s;
  fclose($f);
  return $t;
}

function check_checksum($file) {
  $checksum = trim(esp_file_get_contents($file.".checksum"));
  if (md5_file($file) != $checksum) {
    $file = str_replace(ESP_BASE,"",$file);
    print mkwarn("WARNING: Checksum for file $file doesn't match");
  }
}

function remove_magic_quotes($input) {
  if(get_magic_quotes_gpc()) $input= stripslashes($input);
  return $input;
}

?>
