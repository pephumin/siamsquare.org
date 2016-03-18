<?php

/* This is a script to let users sign-up for respondent accounts.
 * It will ask for the following information:
 *   o Username (*)
 *   o Email Address (*)
 *   o First Name
 *   o Last Name
 *   o Password (*)
 * and create a new respondent in the group $ESPCONFIG['signup_realm'].
 */

$_SERVER['BASE_PAGE'] = 'signup.php';
$title = "Signing up a new user";
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/include/config.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/public/include/template.php';
//require_once $_SERVER['DOCUMENT_ROOT'] . '/public/include/first.php';

//if (!defined('ESP_BASE'))
//  define('ESP_BASE', dirname(dirname(__FILE__)) .'/');
//
//$CONFIG = ESP_BASE . 'admin/config/phpESP.ini.php';
//$DEFAULT_CONFIG = $CONFIG.'.default';
//$FIXED_CONFIG = $CONFIG.'.fixed';
//if(!file_exists($DEFAULT_CONFIG)) {
//        echo("<b>FATAL: Unable to open default config file. Aborting.</b>");
//        exit;
//}
//if(!file_exists($CONFIG)) {
//        echo("<b>FATAL: Unable to open config file. Aborting.</b>");
//        exit;
//}
//if(!file_exists($FIXED_CONFIG)) {
//        echo("<b>FATAL: Unable to open fixed config file. Aborting.</b>");
//        exit;
//}
//if(!extension_loaded('mysql')) {
//        echo('<b>FATAL: Mysql extension not loaded. Aborting.</b>');
//        exit;
//}
//require_once($DEFAULT_CONFIG);
//require_once($CONFIG);
//require_once($FIXED_CONFIG);

esp_init_adodb();

$fields = array(
    'username',
    'password',
    'email',
    'fname',
    'lname',
  );

$rqd_fields = array(
    'username',
    'password',
    'password2',
    'email',
  );

/* Set this value to override value from phpESP.ini. */
$signup_realm = null;

/* Make this false to generate full HTML, rather than embedable. */
$embed = true;

//$post =& $GLOBALS['HTTP_POST_VARS'];
$post =& $_POST;
unset($msg);

/* sanity check the signup_realm */
if ($signup_realm == null || empty($signup_realm))
  $signup_realm = $GLOBALS['ESPCONFIG']['signup_realm'];
if ($signup_realm == null || empty($signup_realm)) {
  echo mkerror(_('Sorry, the account request form is disabled.'));
  return;
}

/* process form values */
do if (isset($post['submit'])) {
  /* check for required fields */
  foreach ($rqd_fields as $f) {
    if (!isset($post[$f]) || empty($post[$f])) {
      $msg = '<font color="red">'. _('Please complete all required fields.') . '</font>';
      break;
    }
  }
  if (isset($msg))
    break;
  
  /* make sure passwords match */
  if ($post['password'] != $post['password2']) {
    $msg = '<font color="red">'. _('Passwords do not match.') . '</font>';
    break;
  }
  
  /* prepare sql statement */
  $sqlf = array();
  $sqlv = array();
  
  foreach ($fields as $f) {
  	if (isset($post[$f]) && !empty($post[$f])) {
      	array_push($sqlf, $f);
      	if ($f == 'password') {
        		array_push($sqlv, db_crypt(_addslashes($post[$f])));
      	}
      	else {
        		array_push($sqlv,  _addslashes($post[$f]) );
    		}
  	}
  }
  array_push($sqlf, 'realm');
  array_push($sqlv, _addslashes($signup_realm) );

  $sqlf = implode(',', $sqlf);
  $sqlv = implode(',', $sqlv);
  
  $sql = "INSERT INTO ".$GLOBALS['ESPCONFIG']['respondent_table']." ($sqlf) VALUES ($sqlv)";
  
  /* execute statement */
  $res = execute_sql($sql);
  if (!$res) {
    $msg = '<font color="red">'. _('Request failed, please choose a different username.') .'</font>';
    if ($GLOBALS['ESPCONFIG']['DEBUG'])
      $msg .= mkerror(ErrorNo() . ': ' . ErrorMsg());
    break;
  }
  
  $msg = sprintf(_('Your account, %s, has been created!'), htmlspecialchars($post['username']));

  foreach ($fields as $f) {
    $post[$f] = null;
    unset($post[$f]);
  }
} while(0);

  if (!$embed) {
  }

if (isset($msg) && !empty($msg)) { echo "<p>$msg</p>\n"; }

// --------------------------------------------------------------------------------

displayHeader($title);
displayNav();
//displayPageHeader();
respondent_signup();
displayPageFooter();
displayFooter();

// --------------------------------------------------------------------------------


