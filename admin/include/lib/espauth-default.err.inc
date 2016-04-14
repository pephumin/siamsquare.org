<?php

//  proto bool survey_auth(int survey_id, string username, string password)
//  Returns true if the supplied username/password is allowed access to the survey.

function survey_auth($sid, $username, $password, $raw_password, $css, $title) {
  // Default to _unauthorized_
  $auth = false;

  if (isset($_GET['auth_options']) || isset($_POST['auth_options'])) {
  	$GLOBALS['errmsg'] = mkerror('Error processing survey: Security violation.');
  	return(false);
  }
  
  $GLOBALS['auth_options'] = array();

  esp_init_adodb();
  $sql = "SELECT realm FROM ".$GLOBALS['ESPCONFIG']['survey_table']." WHERE id = $sid AND public = 'N'";

  $accres = execute_sql($sql);
  if(!$accres) {
  	$GLOBALS['errmsg'] = mkerror('Unable to execute query for access.');
  	return(false);
  }

  // Get number of rows in $accres.
  if(record_count($accres) < 1) {
  	// no matching rows ... no authorization required
  	return(true);
  }

  $realm = $accres->fields[0];
  db_close($accres);

  // A matching row was found - the survey requires authentication.
  $loginAttempt = false;
  $maxlogin=0;
  if (!empty($username) && !empty($password)) {
    $loginAttempt = true;
    $auth = authenticate($username, $raw_password, $realms);
    if ($auth) {
      $sql = "SELECT a.maxlogin, a.realm, a.resume, a.navigate FROM ".$GLOBALS['ESPCONFIG']['access_table']." a, ".$GLOBALS['ESPCONFIG']['respondent_table']." r WHERE a.survey_id = $sid AND r.username = "._addslashes($username)." AND r.password = ".db_crypt($password) ." AND r.realm = a.realm AND r.disabled = 'N' AND (r.expiration = '0000-00-00 00:00:00' OR r.expiration > ". sys_time_stamp().")";
      // Execute the query assign record set to $usrres
      $usrres = execute_sql($sql);
      if ($usrres && 0 < record_count($usrres)) {
        list($maxlogin, $arealm, $aresume, $anavigate) = $usrres->fields;
        db_close($usrres);
        $GLOBALS['auth_options'] = array('resume' => $aresume, 'navigate' => $anavigate);
      } else {
        $GLOBALS['errmsg'] = mkerror('Unable to execute query respondents.');
        return(false);
      }
    }
  }

  // no matching authorization ... send a 401
  if ( ! $auth ) {
    // record the fact that authentication failed
    if ($loginAttempt) {
      require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/include/lib/espsurveystat.inc';
      survey_stat_increment(SURVEY_STAT_LOGINFAIL, $sid);
    }

    // throw the right output
    if ($GLOBALS['ESPCONFIG']['auth_mode'] == 'basic') {
      header( "WWW-Authenticate: Basic realm=\"$realm\"" );
      header( 'HTTP/1.0 401 Unauthorized');
      $GLOBALS['errmsg'] = mkerror('Incorrect User ID or Password, or your account has been disabled/expired.');
      return(false);
    }
    elseif ( $GLOBALS['ESPCONFIG']['auth_mode'] == 'form') {
      if (!isset($survey_name)) { $survey_name = ""; }
      if (isset($_GET['name'])) { $survey_name = $GLOBALS['_GET']['name']; }
      elseif (isset($_POST['name'])) { $survey_name = $_POST['name']; }

      $error_message = "";
      if ($_SERVER['REQUEST_METHOD'] == 'POST') { $error_message = "Incorrect User ID or Password, or your account has been disabled/expired."; }
      //print_r($_POST);
      require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/include/template.php';
      $title = 'Login Page';
      displayHeader($title);
      displayNav();
      displayPageHeader();
      echo show_login($survey_name, $error_message, $css, $title);
      displayPageFooter();
      displayFooter();
      exit;
      return(false);
    }
  }

  if ( $maxlogin > 0 ) {
  	// see if user is over the MAX # of responses
  	$sql = "SELECT COUNT(*) < $maxlogin FROM ".$GLOBALS['ESPCONFIG']['response_table']." WHERE survey_id = ${sid} AND complete = 'Y' AND username = "._addslashes($username);
  	$auth = get_one($sql);
  }

  if( !$auth ) {
    if ($GLOBALS['ESPCONFIG']['auth_mode'] == 'basic') {
      header( "WWW-Authenticate: Basic realm=\"$realm\"" );
      header( 'HTTP/1.0 401 Unauthorized');
      $GLOBALS['errmsg'] = mkerror('Your account has been disabled or you have already completed this survey.');
      return(false);
    }
    elseif ( $GLOBALS['ESPCONFIG']['auth_mode'] == 'form') {
      if (!isset($survey_name)) { $survey_name = ""; }
      if (isset($GLOBALS['_GET']['name'])) { $survey_name = $GLOBALS['_GET']['name']; }
      elseif (isset($_POST['name'])) { $survey_name = $_POST['name']; }
      $error_message = "";
      if ($_SERVER['REQUEST_METHOD'] == 'POST') { $error_message = "Your account has been disabled or you have already completed this survey."; }
      require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/include/template.php';
      $title = 'Login Page';
      displayHeader($title);
      displayNav();
      displayPageHeader();
      echo show_login($survey_name, $error_message, $css, $title);
      displayPageFooter();
      displayFooter();
      exit;
      return(false);
    }
    else {
        return(false);
    }
  }
  return(true);
}

//  proto bool manage_auth(string username, string password)
//  Returns true if the supplied username/password is allowed access to the management interface. 
//  This sets/clears access control related session variables. */

function manage_auth($username, $password, $raw_password="") {
  // see if session is expired, or has been logged out
  if(isset($_SESSION['acl']) && isset($_SESSION['acl']['expired'])) {
  	if($_SESSION['acl']['expired']-- > 0) { $username = ''; $password = ''; }
  }

  // see if ACL is cached
  if (!empty($username) && !empty($password) && isset($_SESSION['acl']) && isset($_SESSION['acl']['username']) && $_SESSION['acl']['username'] == $username) {
  	#$sql = "SELECT ".db_crypt($password)." = ". $_SESSION['acl']['password'];
  	#$auth = get_one($sql);
  	#if($auth)
  	return(true);
  }

  $auth = false; // default to unauthorized
  $_SESSION['acl'] = array();

  if (!empty($username) && !empty($password)) {

    // Formulate the query check whether user is authorized
    $sql = "SELECT * FROM ".$GLOBALS['ESPCONFIG']['designer_table']." WHERE username = "._addslashes($username)." AND password = ".db_crypt($password) ."AND disabled = 'N' AND (expiration = '0000-00-00 00:00:00' OR expiration > ". sys_time_stamp().")";

    // Execute the query and put recordset in $accres
    $accres = execute_sql( $sql, "", ADODB_FETCH_ASSOC );
    if(!$accres) {
      header( 'HTTP/1.0 503 '. "Service Unavailable");
      echo('<html><head><title>Service Unavailable</title></head><body><h2>HTTP 503 Service Unavailable</h2>'.
      mkerror('Unable to load ACL.' .' ('. ErrorMsg() .')') .
      '</body></html>');
      return(false);
    }

    // Get number of rows in $accres.
    // A matching row was found - the user is authorized.
    if (record_count($accres) > 0) { $auth = true; }
  }
  if ( ! $auth ) {
    if ($GLOBALS['ESPCONFIG']['auth_mode'] == 'basic') {
      // no matching authorization ... send a 401
      header( 'WWW-Authenticate: Basic realm="'. 'Management Interface' .'"' );
      header( 'HTTP/1.0 401 '. 'Unauthorized');
      echo("<html>\n<head><title>401 Unauthorized</title></head>\n".
      "<body><h2>401 Unauthorized</h2>\n".
      mkerror('Incorrect User ID or Password, or your account has been disabled/expired.') .
      "</body>\n</html>\n");
      exit;
      return(false);
    }
    elseif ( $GLOBALS['ESPCONFIG']['auth_mode'] == 'form') {
      $error_message = "";
      if ($_SERVER['REQUEST_METHOD'] == 'POST') { $error_message = 'Incorrect User ID or Password, or your account has been disabled/expired.'; }
      //print_r($_POST);
      require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/include/template.php';
      $title = 'Authorisation';
      displayHeader($title);
      displayNav();
      displayPageHeader();
      echo show_login(null, $error_message, null, 'Client Login');
      displayPageFooter();
      displayFooter();
      exit;
      return(false);
    }
  }

  // All tests passed ... create ACL array,
  // and stick it in the session
  $acl = array(
  	'username'  => $username,
  	'superuser' => 'N',
  	'home' => '/www/default/siamsquare.org/admin/tmp'
  );
  $fields = array('pdesign', 'pstatus', 'pdata', 'pall', 'pgroup', 'puser');
  foreach($fields as $f) {
  	$$f = array();
  }
  while( !$accres->EOF ) {
    if($accres->fields['realm'] == 'superuser')
      $acl['superuser'] = 'Y';
    foreach($fields as $f) {
      if($accres->fields[$f] == 'Y')
      array_push($$f, $accres->fields['realm']);
    }
    $accres->MoveNext();
  }
  db_close($accres);

  foreach($fields as $f) { $acl[$f] =& $$f; }

  $_SESSION['acl'] =& $acl;

  // if one were to want login accounting (logs) this would be the ideal place to do so...
  return(true);
}

//  proto void manage_logout()
//  Clears the current ACL, and will cause HTTP-Auth to be redisplayed. 
//  This is not fool proof; common browsers will continue to retry cached username & password for HTTP-Auth. 
//  So if the browser is not closed after logout, it still may be possible to get back in w/o knowing a valid username & password. */

function manage_logout() {
  // clear existing ACL, and set the expired flag
  $_SESSION['acl'];
  $_SESSION['username'] = "";
  $_SESSION['raw_password'] = "";
  session_destroy();
  $acl = array('expired' => 2);
  $_SESSION['acl'] = array('expired' => 2);
}

//  proto boolean auth_is_owner(int surveyId, string user)
//  Returns true if user owns the survey.

function auth_is_owner($sid, $user) {
  $val = false;
  $sql = "SELECT s.owner = "._addslashes($user)."FROM ".$GLOBALS['ESPCONFIG']['survey_table']." s WHERE s.id=$sid";
  $result = execute_sql($sql);
  if(!(list($val) = fetch_row($result)))
  	$val = false;
  db_close($result);
  return $val;
}

//  proto string auth_get_survey_realm(int surveyId)
//  Returns the realm of the survey.

function auth_get_survey_realm($sid) {
  $val = '';
  $sql = "SELECT s.realm FROM ".$GLOBALS['ESPCONFIG']['survey_table']." s WHERE s.id=$sid";
  $result = execute_sql($sql);
  list($val) = fetch_row($result);
  db_close($result);
  return $val;
}

//  proto boolean auth_no_access(string description)
//  Handle a user trying to access an unauthorised area. 
//  Returns true if user should be allowed to continue, or false (or exits) if access should be denied.

function auth_no_access($description) {
  echo(mkerror(_('This account does not have permission') .' '. $description .'.'));
  //echo("\n<br>\n");
  //echo("<a href=\"". $GLOBALS['ESPCONFIG']['ME'] ."?where=manage\">" . _('Go back to Management Interface') . "</a>\n");
  //displayAdminBack(); 
  return false;
}

//  proto boolean auth_change_manager_passwd(string user, string old, string new)
//  Change a managers password. If old password does not match or if there is an error, return false. Return true if password changed. */

function auth_change_manager_passwd($user,$old,$new) {
  $sql = "UPDATE ".$GLOBALS['ESPCONFIG']['designer_table']." SET password=".db_crypt($new) ." WHERE username="._addslashes($user)." AND password=".db_crypt($old);
  return(execute_sql($sql) && affected_rows() > 0);
}

//  proto boolean auth_get_option(string option)
//  Returns the value of the given option. Valid options include: { resume, navigate } */

function auth_get_option($opt) {
  return (isset($GLOBALS['auth_options'][$opt]) && $GLOBALS['auth_options'][$opt] == 'Y');
}

//  proto int auth_get_rid (int survey_id, string username, int response_id)
//  Returns the RID to use for this user. */

function auth_get_rid($sid, $username, $rid = 0) {
  $rid = intval($rid);
  if (isset($rid) && $rid != 0) {
  	// check for valid rid
  	$sql = "SELECT (r.username = "._addslashes($username)." && r.complete = 'N') AS valid FROM ".$GLOBALS['ESPCONFIG']['response_table']." r WHERE r.id = $rid AND r.survey_id = $sid";
  	$res = execute_sql($sql);
  	$valid = false;
  	if ($res && record_count($res) > 0 && $res->fields[0]) $valid = true;
  	if ($res) db_close($res);
  	return ($valid) ? $rid : '';
  } elseif (auth_get_option('resume')) {
  	// find latest in progress rid
  	$sql = "SELECT r.id FROM ".$GLOBALS['ESPCONFIG']['response_table']." r WHERE r.survey_id = $sid AND r.complete = 'N' AND r.username = "._addslashes($username)." ORDER BY submitted DESC";
  	$res = execute_sql($sql,1);
  	if ($res && record_count($res) > 0) $rid = $res->fields[0];
  	if ($res) db_close($res);
  	return ($rid != 0) ? $rid : '';
  } else {
  	return '';
  }
}

//  respondent authentication methods authenticate()                  
//  See if a <username,password> credential is valid, and identify to which realms that applies
//  Returns true if authenticated, false otherwise
//  $realms will always be an array with at least one element.
//  If returns two or more, an externalmean to disambiguate to which realms the username/password pair applies would be required.

function authenticate($username, $password, &$realms) {
  $cfg =& $GLOBALS['ESPCONFIG'];

  // see if we have a realm where that <username, password> tuple is authorized and enabled
  $user = _addslashes($username);
  $pass = db_crypt(_addslashes($password));
  $now  = sys_time_stamp();
  $sql = "SELECT realm FROM ".$GLOBALS['ESPCONFIG']['respondent_table']." WHERE username = $user AND password = $pass AND disabled = 'N' AND (expiration='0000-00-00 00:00:00' OR $now < expiration)";

  $res = execute_sql($sql);
  if ($res) {
    // was there a single match?
    // NOTE: <username, realm> is the unique key in the respondent table.  Thus, two or more users with the same
    // NOTE: username and password, but different realms, will pass this check.  You must then have some external
    // NOTE: method to disambiguate which realm is appropriate (like checking the surveys).
    $isAuthenticated = (1 <= record_count($res) ? true : false);
    if ($isAuthenticated) {
      $realms = array ();
      while ($row = fetch_row($res)) {
        $res->MoveNext();
        $realms[] = $row[0];
      }
      assert('1 <= count($realms); // expecting 1 or more realms');
    }
    return $isAuthenticated;
  } else {
    $GLOBALS['errmsg'] = mkerror('Unable to execute query respondents.');
    return false;
  }
  assert('false; // NOTREACHED');
}

?>