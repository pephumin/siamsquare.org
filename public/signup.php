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
//print_r($post);
unset($msg);

/* sanity check the signup_realm */
if ($signup_realm == null || empty($signup_realm))
  $signup_realm = $GLOBALS['ESPCONFIG']['signup_realm'];

if ($signup_realm == null || empty($signup_realm)) {
  echo mkerror("Sorry, the account request form is disabled.");
  return;
}

//echo $post['submit'];

/* process form values */
//do if (isset($post['submit'])) {

//print_r($post);
//do if (isset($post['username'])) {
do if (isset($post['email'])) {

  /* check for required fields */
  foreach ($rqd_fields as $f) {
    //echo "PE";
    //print_r($post[$f]);
    //if (!isset($post[$f]) || empty($post[$f])) {
    //  //$msg = '<font color="red">'. _('Please complete all required fields.') . '</font>';
    //  $msg = mkerror("Please complete all required fields.");
    //  break;
    //}
    //print_r($rqd_fields);
  }
  if (isset($msg))
    break;
  
  /* make sure passwords match */
  if ($post['password'] != $post['password2']) {
    //$msg = '<font color="red">'. _('Passwords do not match.') . '</font>';
    $msg = mkerror("Passwords do not match.");
    break;
  }
  
  if (empty($post['username'])) { $post['username'] = $post['email']; }

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
  
  print_r($sqlf);
  print_r($sqlv);
  $sql = "INSERT INTO ".$GLOBALS['ESPCONFIG']['respondent_table']." ($sqlf) VALUES ($sqlv)";
  
  /* execute statement */
  $res = execute_sql($sql);
  if (!$res) {
    //$msg = '<font color="red">'. _('Request failed, please choose a different username.') .'</font>';
    $msg = mkerror("Request failed, please choose a different username.");

    //if ($GLOBALS['ESPCONFIG']['DEBUG'])
    //  $msg .= mkerror(ErrorNo() . ': ' . ErrorMsg());
    break;
  }
  
  //$msg = sprintf(_('Your account, %s, has been created!'), htmlspecialchars($post['username']));
  $msg = mksuccess("Your account has been created.");

  foreach ($fields as $f) {
    $post[$f] = null;
    unset($post[$f]);
  }

} while(0);

  //if (!$embed) {
  //}


// --------------------------------------------------------------------------------

displayHeader($title);
displayNav();
//displayPageHeader();
echo "\n";
echo "<div class=\"container\">\n";
if (isset($msg) && !empty($msg)) { echo "<p>$msg</p>\n"; }
respondent_signup();
echo "</div> <!-- /container -->\n";
displayPageFooter();
displayFooter();

// --------------------------------------------------------------------------------


?>