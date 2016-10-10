<?php

function wAdmin($w = null) {
  if (empty($w)) { $w = 'index'; }
  $where = strtolower(preg_replace('/ +/','_',$w));
  if (!preg_match('/^[A-Za-z0-9_]+$/',$w)) { $w = 'index'; }
  $filecheck = WADMIN.'/'.$w.'.inc';
  if (!file_exists($filecheck)) { $w = 'index'; }
  if (!file_exists($filecheck)) { echo('Unable to open include file. Check INI settings. Aborting.'); exit; }
  return($filecheck);
}

function wPublic($w = null) {
  if (empty($w)) { $w = 'index'; }
  $where = strtolower(preg_replace('/ +/','_',$w));
  if (!preg_match('/^[A-Za-z0-9_]+$/',$w)) { $w = 'index'; }
  $filecheck = WPUBLIC.'/'.$w.'.inc';
  if (!file_exists($filecheck)) { $w = 'index'; }
  if (!file_exists($filecheck)) { echo('Unable to open include file. Check INI settings. Aborting.'); exit; }
  return($filecheck);
}

function esp_init_adodb() {
  $cfg =& $GLOBALS['ESPCONFIG'];
  include INCLUDEADM.'/adodb/adodb.inc.php';
  if (isset($cfg['adodb_conn'])) { return; }
  $cfg['adodb_conn'] = &ADONewConnection("mysql");
  error_reporting(0);  // Hide errors
  //$cfg['adodb_conn']->debug=1;
  $dbconnected = $cfg['adodb_conn']->PConnect(DB_HOST, DB_USER, DB_PASS, DB_DATABASE);
  $charset = "SET NAMES utf8";
  mysql_query($charset) or die('Invalid query: ' . mysql_error());

  if (!$dbconnected) {
    header('HTTP/1.0 503 '. 'Service Unavailable');
    echo('<html><head><title>HTTP 503 '. 'Service Unavailable' .'</title></head>');
    echo('<body><h1>HTTP 503 '. 'Service Unavailable' .'</h1>');
    echo(mkerror('<div class="alert alert-danger" role="alert"><p>Connection to database failed. Please check configuration.</p></div>'));
    if ($cfg['DEBUG']) { echo("<br>\n". mkerror(ErrorNo().": ".ErrorMsg())); }
    echo('</body></html>');
    exit;
  }
  error_reporting(E_ALL);
}

function esp_require_once($path) {
  $ESPCONFIG = $GLOBALS['ESPCONFIG'];
  //require_once DOCROOT.'/admin/assets/include'.$path.'.inc';
  require_once INCLUDEADM.$path.'.inc';
  return true;
}

function check_checksum($file) {
  $checksum = trim(esp_file_get_contents($file.".checksum"));
  if (md5_file($file) != $checksum) {
    $file = str_replace(DOCROOT,"",$file);
    print mkwarn("WARNING: Checksum for file $file doesn't match");
  }
}

function remove_magic_quotes($input) {
  if (get_magic_quotes_gpc()) { $input = stripslashes($input); }
  return $input;
}

function goto_saved($sid, $url) {
  if ($_REQUEST['test']) { $url = $url."?w=test&test=1&sid=".$sid; }
  survey_stat_decrement(SURVEY_STAT_ABANDONED, $sid);
  survey_stat_increment(SURVEY_STAT_SUSPENDED, $sid);
  echo "<h2>Your survey has been saved</h2>\n";
  echo "<p>Your progress has been saved. You may return at any time to complete this survey.</p>\n";
  echo "<p>To continue with this particular survey, you can just simply follow the link below.</p>\n";
  echo "<p>And of course, you can save or bookmark this link so you can come back and complete it when you are convenient.</p>\n";
  echo "<a href=\"$url\" class=\"btn btn-success\" role=\"button\">Continue survey</a>\n";
  return;
}

function goto_thankyou($sid, $referer) {
  survey_stat_decrement(SURVEY_STAT_ABANDONED, $sid);
  survey_stat_increment(SURVEY_STAT_COMPLETED, $sid);
  $cfg =& $GLOBALS['ESPCONFIG'];
  $sql = "SELECT thank_head, thank_head_th, thank_body, thank_body_th FROM ".X_SURVEY." WHERE id = ${sid}";
  $result = execute_sql($sql);
  list($thank_head, $thank_head_th, $thank_body, $thank_body_th) = fetch_row($result);
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

  if (isset($_GET['w']) && $_GET['w'] == 'test') { $ref = ""; }
  else { $ref = check_referer($referer); }
  echo $ref;
  return;
}

function check_referer($referer) {
  $pos = strpos($referer, MYSURVEY);
  if ($pos === false) {
    if (!empty($_REQUEST['direct']) && $_REQUEST['direct'] === '1') { $retstr = ""; }
    else { $retstr = "<a href=\"". $referer."\">Return</a>"; }
  }
  else { $retstr = ""; }
  return $retstr;
}

function execute_sql($command, $limit = null, $assoc = ADODB_FETCH_NUM) {
  $cfg =& $GLOBALS['ESPCONFIG'];
  $cfg['adodb_conn']->SetFetchMode($assoc);
  if ($limit) { $result = $cfg['adodb_conn']->SelectLimit($command, $limit); } else { $result = $cfg['adodb_conn']->Execute($command); }
  if ($result) { return $result; } else { return 0; }
}

function affected_rows() {
  $cfg =& $GLOBALS['ESPCONFIG'];
  $result = $cfg['adodb_conn']->Affected_Rows();
  if ($result) { return $result; } else { return 0; }
}

function fetch_row(&$recordset) {
  $result = $recordset->fields;
  if ($result) { return $result; } else { return 0; }
}

function get_row($command) {
  $cfg =& $GLOBALS['ESPCONFIG'];
  $result = $cfg['adodb_conn']->GetRow("$command");
  if ($result) { return $result; } else { return 0; }
}

function get_one($command) {
  $cfg =& $GLOBALS['ESPCONFIG'];
  $result = $cfg['adodb_conn']->GetOne($command);
  if ($result) { return $result; } else { return 0; }
}

function record_count(&$recordset) {
  $result = $recordset->RecordCount();
  if ($result) { return $result; } else { return 0; }
}

function insert_id($sequence="") {
  $cfg =& $GLOBALS['ESPCONFIG'];
  return $cfg['adodb_conn']->Insert_ID();
}

function db_close(&$recordset) {
  $recordset->Close();
}

function db_qstr($data) {
  $cfg =& $GLOBALS['ESPCONFIG'];
  $result = $cfg['adodb_conn']->qstr($data);
  return $result;
}

function db_bin($status, $code) {
  // $cfg =& $GLOBALS['ESPCONFIG'];
  return "($status & $code)";
}

function db_date($data) {
  $cfg =& $GLOBALS['ESPCONFIG'];
  $result = $cfg['adodb_conn']->DBDate($data);
  return $result;
}

function sys_time_stamp() {
  $cfg =& $GLOBALS['ESPCONFIG'];
  return $cfg['adodb_conn']->sysTimeStamp;
}

function db_crypt($password) {
  // $cfg =& $GLOBALS['ESPCONFIG'];
  return "PASSWORD($password)";
  // return _addslashes(md5($password));
}

function ErrorNo() {
  $cfg =& $GLOBALS['ESPCONFIG'];
  return $cfg['adodb_conn']->ErrorNo();
}

function ErrorMsg() {
  $cfg =& $GLOBALS['ESPCONFIG'];
  return $cfg['adodb_conn']->ErrorMsg();
}

function cleanstring($string) {
  $bad = array("content-type","bcc:","to:","cc:","href");
  return str_replace($bad,"", $string);
}

function array_to_insql($array) {
  if (count($array)) { return("IN (".preg_replace("/([^,]+)/","\\1",join(",",array_map("_addslashes", $array))).")"); }
  return 'IS NULL';
}

function survey_num_sections($sid) {
  $sql = "SELECT COUNT(*) + 1 FROM ".X_QUESTION." WHERE survey_id = ${sid} AND type_id = '99' AND deleted = 'N' ";
  $result = execute_sql($sql);
  $count = $result->fields[0];
  db_close($result);
  return($count);
}

function survey_get_sections($sid, $field = 'id') {
  if (empty($field)) { $field = 'id'; }
  $sql = "SELECT $field, type_id FROM ".X_QUESTION." WHERE survey_id = $sid AND deleted = 'N' ORDER BY position ";
  if (!($result = execute_sql($sql))) { return array(); }
  $ret = array();
  $sec = array();
  while (list($key, $type) = fetch_row($result)) {
    $result->MoveNext();
    if ($type != 99) { array_push($sec, $key); } else { array_push($ret, $sec); $sec = array(); }
  }
  array_push($ret, $sec);
  db_close($result);
  return $ret;
}

function survey_get_section_questions($sid, $field = 'id') {
  if (empty($field)) { $field = 'id'; }
  $sql = "SELECT $field, type_id FROM ".X_QUESTION." WHERE survey_id = $sid AND deleted = 'N' ORDER BY position ";
  if (!($result = execute_sql($sql))) { return array(); }
  $ret = array();
  $sec = array();
  while (list($key, $type) = fetch_row($result)) {
    $result->MoveNext();
    if ($type != 100) { if ($type != 99) { array_push($sec, $key); } else { array_push($ret, $sec); $sec = array(); } }
  }
  array_push($ret, $sec);
  db_close($result);
  return $ret;
}

function survey_select_section_sql($sid, $section, $table = '') {
  if (!empty($table)) { $table .= '.'; }
  $sql = "SELECT position FROM ".X_QUESTION." WHERE survey_id = ${sid} AND type_id = '99' AND deleted = 'N' ORDER BY position, id ";
  $result = execute_sql($sql);
  $num_sections = record_count($result) + 1;
  if ($section > $num_sections) { return(''); } // invalid section
  $ret = array("${table}survey_id = '${sid}'", "${table}deleted = 'N' ");
  if ($section > 1 && $num_sections > 1) { $result->Move($section-2); array_push($ret, "${table}position>" . $result->fields[0]); }
  if ($section < $num_sections && $num_sections > 1) { $result->Move($section-1); array_push($ret, "${table}position<" . $result->fields[0]); }
  db_close($result);
  return('WHERE ' . join(' AND ',$ret) . ' ');
}

function esp_type_has_choices() {
  $has_choices = array();
  $sql = 'SELECT typeid, has_choices FROM '.X_QUESTION_TYPE.' ORDER BY id ';
  $result = execute_sql($sql);
  while (list($tid,$answ) = fetch_row($result)) {
    $result->MoveNext();
    if ($answ == 'Y') { $has_choices[$tid] = 1; }
    else { $has_choices[$tid] = 0; }
  }
  db_close($result);
  return($has_choices);
}

function esp_type_response_table() {
  $sql = 'SELECT typeid, response_table FROM '.X_QUESTION_TYPE.' ORDER BY id ';
  $result = execute_sql($sql);
  $response_table = array();
  while (list($tid,$answ) = fetch_row($result)) { $result->MoveNext(); $response_table[$tid] = $answ; }
  db_close($result);
  return($response_table);
}

function mksuccess ($msg) {
  return("<div class=\"alert alert-success alert-dismissible\" role=\"alert\"><a class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a><i class=\"pe-check-square-o\"></i>&nbsp; ${msg}</div>\n");
}

function mkinfo ($msg) {
  return("<div class=\"alert alert-info alert-dismissible\" role=\"alert\"><a class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a><i class=\"pe-info-circle\"></i>&nbsp; ${msg}</div>\n");
}

function mkwarn ($msg) {
  return("<div class=\"alert alert-warning alert-dismissible\" role=\"alert\"><a class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a><i class=\"pe-bullhorn\"></i>&nbsp; ${msg}</div>\n");
}

function mkerror ($msg) {
  return("<div class=\"alert alert-danger alert-dismissible\" role=\"alert\"><a class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a><i class=\"pe-exclamation-circle\"></i>&nbsp; ${msg}</div>\n");
}

function mkradio ($_name, $value, $varr = null) {
  if ($varr == null) { $varr =& $_POST; }
  $str = '<input type="radio" id="' . htmlspecialchars($value) .'" name="' . htmlspecialchars($_name) .'" value="' . htmlspecialchars($value) .'"';
  if ( isset($varr[$_name]) && $varr[$_name] == $value ) { $str .= " checked=\"checked\""; }
  $str .= '>';
  return($str);
}

function mkcheckbox ($_name, $value, $varr = null) {
  if ($varr == null) { $varr =& $_POST; }
  $str = '<input type="checkbox" id="' . htmlspecialchars($value) .'" name="' . htmlspecialchars($_name) .'[]" value="' . htmlspecialchars($value) .'"';
  if (isset($varr[$_name]) && is_array($varr[$_name]) && in_array($value, $varr[$_name])) { $str .= " checked=\"checked\""; }
  $str .= '>';
  return($str);
}

function mktext ($_name, $size = 20, $max = 0, $varr = null) {
  if ($varr == null) { $varr =& $_POST; }
  $size = intval($size); $max = intval($max); $str = "size=\"$size\"";
  if ($max) { $str .= " maxlength=\"$max\""; }
  if (isset($varr[$_name])) { return('<input class="form-control" type="text" '. $str .' name="'. htmlspecialchars($_name) .'" value="'. _stripslashes(htmlspecialchars($varr[$_name])) .'">'); }
  return('<input class="form-control" type="text" '. $str .' name="'. htmlspecialchars($_name) .'">');
}

function mkpass ($_name) {
  return('<input type="password" class="form-control" placeholder="Password" name="'. htmlspecialchars($_name) .'">');
}

function mkhidden ($_name, $varr = null) {
  if ($varr == null) { $varr =& $_POST; }
  if (isset($varr[$_name])) { return('<input type="hidden" name="'. htmlspecialchars($_name) .'" value="'. _stripslashes(htmlspecialchars($varr[$_name])) .'" />'); }
  return('<input type="hidden" name="'. htmlspecialchars($_name) .'">');
}

function mktextarea ($_name, $rows, $cols, $wrap, $varr = null) {
  if ($varr == null) { $varr =& $_POST; }
  $str = '<textarea class="form-control" name="' . htmlspecialchars($_name) .'"';
  if ($rows > 0) { $str .= ' rows="' . $rows . '"'; }
  if ($cols > 0) { $str .= ' cols="' . $cols . '"'; }
  $str .= '>';
  if (isset($varr[$_name])) { $str .= _stripslashes(htmlspecialchars($varr[$_name])); }
  $str .= '</textarea>';
  return($str);
}

function mkselect ($_name, $options, $varr = null) {
  if ($varr == null) { $varr =& $_POST; }
  $str  = "<select class=\"form-control\" name=\"${_name}\">\n";
  while (list($cid, $content) = each($options)) { $checked = ''; if (isset($varr[$_name]) && $varr[$_name] == $cid) { $checked = " selected=\"selected\""; } $str .= "<option value=\"${cid}\"${checked}>${content}</option>\n"; }
  $str .= "</select>\n";
  return($str);
}

function mkfile ($_name) {
  return('<input type="file" name="'.htmlspecialchars($_name) .'">');
}

function mksubmit($_name, $_value = null, $_attrs = array ()) {
  if ($_value == null) { $_value = 'Submit'; }
  if (!empty($_value)) { $_value = ' value="'.htmlspecialchars($_value).'"'; }
  $_extra = make_element_attrs_from_array($_attrs);
  return sprintf('<input class="btn btn-default" type="submit" name="%s" %s %s>', htmlspecialchars($_name), $_value, $_extra);
}

function make_element_attrs_from_array($attrs) {
  $extra = '';
  foreach ($attrs as $attr => $value) { $extra .= sprintf(' %s="%s"', $attr, htmlspecialchars($value)); }
  return trim($extra);
}

function show_login($_surveyname = null, $_message = null, $_css = null, $_title = "Client login") {
  $str = "";
  if ($_message) { $str .= mkerror($_message); }
  $str .= file_get_contents( WADMIN.'/login.inc');
  if ($_surveyname != "") { $str .= '<input type="hidden" name="surveyname" value="'."$_surveyname".'">'; }
  if ($_css != "") { $str .= '<input type="hidden" name="css" value="'."$_css".'">'; }
  $str .= "\n";
  return $str;
}

function survey_auth($sid, $username, $password, $raw_password, $css = null, $title = null) {
  $auth = false;
  if (isset($_GET['auth_options']) || isset($_POST['auth_options'])) { $GLOBALS['errmsg'] = mkerror('Error processing survey: Security violation.'); return(false); }
  $GLOBALS['auth_options'] = array();
  esp_init_adodb();
  // $sql = "SELECT realm FROM ".X_SURVEY." WHERE id = $sid AND public = 'N' ";
  $sql = "SELECT realm FROM ".X_SURVEY." WHERE id = $sid ";
  $accres = execute_sql($sql);
  if (!$accres) { $GLOBALS['errmsg'] = mkerror('Unable to execute query for access.'); return(false); }
  if (record_count($accres) < 1) { return(true); } // no matching rows ... no authorization required
  $realms = $accres->fields[0];
  db_close($accres);
  $loginAttempt = false; // A matching row was found - the survey requires authentication.
  $maxlogin = 0;
  if (!empty($username) && !empty($password)) {
    $loginAttempt = true;
    $auth = authenticate($username, $raw_password, $realms);
    if ($auth) {
      $sql = "SELECT a.maxlogin, a.realm, a.resume, a.navigate FROM ".X_ACCESS." a, ".X_RESPONDENT." r WHERE a.survey_id = $sid AND r.username = "._addslashes($username)." AND r.password = ".db_crypt($password) ." AND r.realm = a.realm AND r.disabled = 'N' AND (r.expiration = '0000-00-00 00:00:00' OR r.expiration > ". sys_time_stamp().")";
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
  if (!$auth) { // no matching authorization ... send a 401
    if ($loginAttempt) { survey_stat_increment(SURVEY_STAT_LOGINFAIL, $sid); }
    if (!isset($survey_name)) { $survey_name = ""; }
    if (isset($_GET['name'])) { $survey_name = $GLOBALS['_GET']['name']; }
    elseif (isset($_POST['name'])) { $survey_name = $_POST['name']; }
    $error_message = "";
    if ($_SERVER['REQUEST_METHOD'] == 'POST') { $error_message = "Incorrect User ID or Password, or your account has been disabled/expired."; }
    $title = 'Login Page';
    pageHeader($title);
    echo show_login($survey_name, $error_message, $css, $title);
    if ($notes) { pageFooter($notes); } else { pageFooter(); }
    exit;
    return(false);
  }
  if ($maxlogin > 0) { // see if user is over the MAX # of responses
    $sql = "SELECT COUNT(*) < $maxlogin FROM ".X_RESPONSE." WHERE survey_id = ${sid} AND complete = 'Y' AND username = "._addslashes($username);
    $auth = get_one($sql);
  }
  if (!$auth) {
    if (!isset($survey_name)) { $survey_name = ""; }
    if (isset($GLOBALS['_GET']['name'])) { $survey_name = $GLOBALS['_GET']['name']; }
    elseif (isset($_POST['name'])) { $survey_name = $_POST['name']; }
    $error_message = "";
    if ($_SERVER['REQUEST_METHOD'] == 'POST') { $error_message = "Your account has been disabled or you have already completed this survey."; }
    $title = 'Login Page';
    pageHeader($title);
    echo show_login($survey_name, $error_message, $css, $title);
    if ($notes) { pageFooter($notes); } else { pageFooter(); }
    exit;
    return(false);
  }
  return(true);
}

function manage_auth($username, $password, $raw_password = "") {
  // see if session is expired, or has been logged out
  if (isset($_SESSION['acl']) && isset($_SESSION['acl']['expired'])) { if ($_SESSION['acl']['expired']-- > 0) { $username = ''; $password = ''; } }
  // see if ACL is cached
  if (!empty($username) && !empty($password) && isset($_SESSION['acl']) && isset($_SESSION['acl']['username']) && $_SESSION['acl']['username'] == $username) { return(true); }
  $auth = false;
  $_SESSION['acl'] = array();
  if (!empty($username) && !empty($password)) {
    $sql = "SELECT * FROM ".X_DESIGNER." WHERE username = "._addslashes($username)." AND password = ".db_crypt($password) ."AND disabled = 'N' AND (expiration = '0000-00-00 00:00:00' OR expiration > ". sys_time_stamp().")";
    $accres = execute_sql( $sql, "", ADODB_FETCH_ASSOC );
    if (!$accres) {
      header( 'HTTP/1.0 503 '. "Service Unavailable");
      echo('<html><head><title>Service Unavailable</title></head><body><h2>HTTP 503 Service Unavailable</h2>'.
      mkerror('Unable to load ACL.' .' ('. ErrorMsg() .')') .
      '</body></html>');
      return(false);
    }
    if (record_count($accres) > 0) { $auth = true; } // A matching row was found - the user is authorized.
  }
  if (!$auth) {
    $error_message = "";
    if ($_SERVER['REQUEST_METHOD'] == 'POST') { $error_message = 'Incorrect User ID or Password, or your account has been disabled/expired.'; }
    $title = 'Authorisation';
    pageHeader($title);
    echo show_login(null, $error_message, null, 'Client Login');
    if ($notes) { pageFooter($notes); } else { pageFooter(); }
    exit;
    return(false);
  }
  $acl = array(
    'username'  => $username,
    'superuser' => 'N',
    'home' => DOCROOT.'/admin/assets/home'
  );
  $fields = array('pdesign', 'pstatus', 'pdata', 'pall', 'pgroup', 'puser');
  foreach ($fields as $f) { $$f = array(); }
  while (!$accres->EOF) {
    if ($accres->fields['realm'] == 'superuser') { $acl['superuser'] = 'Y'; }
    foreach ($fields as $f) { if ($accres->fields[$f] == 'Y') { array_push($$f, $accres->fields['realm']); } }
    $accres->MoveNext();
  }
  db_close($accres);
  foreach ($fields as $f) { $acl[$f] =& $$f; }
  $_SESSION['acl'] =& $acl;
  $currenttime  = sys_time_stamp();
  $sql = "UPDATE ".X_DESIGNER." SET lastlogin = $currenttime WHERE username = "._addslashes($username);
  return(execute_sql($sql) && affected_rows() > 0);
}

function manage_logout() {
  $_SESSION['acl'];
  $_SESSION['username'] = "";
  $_SESSION['raw_password'] = "";
  session_destroy();
  $acl = array('expired' => 2);
  $_SESSION['acl'] = array('expired' => 2);
}

function auth_is_owner($sid, $user) {
  $val = false;
  $sql = "SELECT s.owner = "._addslashes($user)."FROM ".X_SURVEY." s WHERE s.id = $sid ";
  $result = execute_sql($sql);
  if (!(list($val) = fetch_row($result))) { $val = false; }
  db_close($result);
  return $val;
}

function auth_get_survey_realm($sid) {
  $val = '';
  $sql = "SELECT s.realm FROM ".X_SURVEY." s WHERE s.id = $sid";
  $result = execute_sql($sql);
  list($val) = fetch_row($result);
  db_close($result);
  return $val;
}

function auth_no_access($description) {
  echo(mkerror('This account does not have permission') .' '. $description .'.');
  return false;
}

function auth_change_manager_passwd($user,$old,$new) {
  $sql = "UPDATE ".X_DESIGNER." SET password=".db_crypt($new) ." WHERE username = "._addslashes($user)." AND password = ".db_crypt($old);
  return(execute_sql($sql) && affected_rows() > 0);
}

function auth_get_option($opt) {
  return (isset($GLOBALS['auth_options'][$opt]) && $GLOBALS['auth_options'][$opt] == 'Y');
}

function auth_get_rid($sid, $username, $rid = 0) {
  $rid = intval($rid);
  if (isset($rid) && $rid != 0) {
    // check for valid rid
    $sql = "SELECT (r.username = "._addslashes($username)." && r.complete = 'N') AS valid FROM ".X_RESPONSE." r WHERE r.id = $rid AND r.survey_id = $sid";
    $res = execute_sql($sql);
    $valid = false;
    if ($res && record_count($res) > 0 && $res->fields[0]) $valid = true;
    if ($res) db_close($res);
    return ($valid) ? $rid : '';
  } elseif (auth_get_option('resume')) {
    // find latest in progress rid
    $sql = "SELECT r.id FROM ".X_RESPONSE." r WHERE r.survey_id = $sid AND r.complete = 'N' AND r.username = "._addslashes($username)." ORDER BY submitted DESC";
    $res = execute_sql($sql,1);
    if ($res && record_count($res) > 0) $rid = $res->fields[0];
    if ($res) db_close($res);
    return ($rid != 0) ? $rid : '';
  } else {
    return '';
  }
}

function authenticate($username, $password, &$realms) {
  $cfg =& $GLOBALS['ESPCONFIG'];
  // see if we have a realm where that <username, password> tuple is authorized and enabled
  $user = _addslashes($username);
  $pass = db_crypt(_addslashes($password));
  $now  = sys_time_stamp();
  $sql = "SELECT realm FROM ".X_RESPONDENT." WHERE username = $user AND password = $pass AND disabled = 'N' AND (expiration='0000-00-00 00:00:00' OR $now < expiration)";
  $res = execute_sql($sql);
  if ($res) { // Two or more users with the same username and password, but different realms, will pass this check.
    $isAuthenticated = (1 <= record_count($res) ? true : false);
    if ($isAuthenticated) {
      $realms = array ();
      while ($row = fetch_row($res)) { $res->MoveNext(); $realms[] = $row[0]; }
      assert('1 <= count($realms); // expecting 1 or more realms');
    }
    $currenttime  = sys_time_stamp();
    $sql = "UPDATE ".X_RESPONDENT." SET lastlogin = $now WHERE username = $user";
    if (execute_sql($sql) && affected_rows() > 0); { return $isAuthenticated; }
  } else {
    $GLOBALS['errmsg'] = mkerror('Unable to execute query respondents.');
    return false;
  }
  assert('false; // NOTREACHED');
}

function authenticate_in_realm($username, $password, $realm) {
  assert('is_callable("authenticate"); // expecting an authenticate function to be defined');
  $isAuthenticated = authenticate($username, $password, $realms);
  return ($isAuthenticated && in_array($realm, $realms) ? true : false);
}

function set_session_authentication($isAuthenticated) {
  @header('P3P: CP="NOI ADM DEV PSAi COM NAV OUR OTRo STP IND DEM"');
  if ('' == session_name()) { session_start(); } // start sessions if needed
  if ($isAuthenticated) { $_SESSION['authenticated'] = true; }
  else {
    $_SESSION = array (); // wipe out the session...
    session_destroy(); // wipe out the session...
    session_start(); // and regenerate it for next requests
    session_regenerate_id();
    setcookie(session_name(), session_id());
  }
}

function is_session_authenticated() {
  return (array_key_exists('authenticated', $_SESSION) ? $_SESSION['authenticated'] : false);
}

function set_current_respondent($username, $realm, $password = null) {
  $cfg =& $GLOBALS['ESPCONFIG'];
  $sql = sprintf('SELECT * FROM %s WHERE username = %s AND realm = %s', X_RESPONDENT, _addslashes($username), _addslashes($realm));
  // echo $sql;
  $res = execute_sql($sql, null, ADODB_FETCH_ASSOC);
  if (!$res) { $GLOBALS['errmsg'] = mkerror('Unable to set current respondent'); return false; }

  // put dataset into session
  if (1 === record_count($res)) { $row = fetch_row($res); $_SESSION['respondent'] = $row; }
  else { $GLOBALS['errmsg'] = mkerror('Unable to set current respondent'); return false; }
  db_close($res);

  // FIXME: For now, to bootstrap public/handler-prefix.php
  if (isset($password)) { $_SESSION['espuser'] = $username; $_SESSION['esppass'] = $password; }
  return true;
}

function get_current_respondent(&$respondent) {
  if (isset($_SESSION['respondent'])) { $respondent = $_SESSION['respondent']; return true; }
  else { $respondent = null; return false; }
}

function mkcrossformat($counts, $qid, $tid) {
  $cids = array();
  $cidCount = 0;
  // let's grab the cid values for each of the questions that we allow cross analysis on.
  if ($tid == 1) { $cids = array('Y', 'N'); }
  else {
    $sql = "SELECT id FROM ".X_QUESTION_CHOICE." WHERE question_id = $qid ORDER BY id";
    $result = execute_sql($sql);
    while ($cid = fetch_row($result)) {
      $result->MoveNext();
      array_push($cids, $cid[0]);
    }
    db_close($result);
  }
  $output .= "<table class=\"table table-hover\">\n";
  $output .= "<tbody>\n";

  while (list($content, $num) = each($counts)) {
    if ($cidCount >= count($cids)) { $cidCount = count($cids) - 1; }
    $new = $cids[$cidCount++];
    $output .= "<tr>\n";
    $output .= "<td width=\"34\" class=\"text-center\">\n";
    $output .= "  <input type=\"checkbox\" name=\"cids[]\" value=\"$new\">\n";
    $output .= "</td>\n";
    $output .= "<td>$content</td>\n";
    $output .= "</tr>\n";
  }
  $output .= "</tbody></table>\n";
  return $output;
}

function mkrespercent($counts, $total, $precision, $showTotals) {
  $i = 0;
  echo "<table class=\"table table-hover\">\n";
  while (list($content,$num) = each($counts)) {
    if ($num > 0) { $percent = $num/$total*100.0; }
    else { $percent = 0; }
    if ($percent > 100) { $percent = 100; }
    echo "  <tr>\n";
    echo "   <td width=\"30%\" align=\"right\">$content</td>\n";
    echo "   <td>";
    if ($num) {
      echo "<div class=\"progress\"><div class=\"progress-bar progress-bar-info progress-bar-striped active\" role=\"progressbar\" style=\"width: $percent%;\">$percent%</div></div>";
    } else {
      echo "<div class=\"progress\"><div class=\"progress-bar progress-bar-info progress-bar-striped\" role=\"progressbar\" style=\"min-width: 2em;\">0%</div></div>";
    }
    echo "    </td>\n";
    echo "    <td>($num)</td>\n";
    echo "  </tr>\n";
    $i += $num;
  } // end while
  if ($showTotals) {
    if ($i > 0) { $percent = $i/$total*100.0; }
    else { $percent = 0; }
    if ($percent > 100) { $percent = 100; }
    echo "  <tr>\n";
    echo "    <td width=\"30%\" align=\"right\"><strong>TOTAL</strong></td>\n";
    echo "    <td><strong>";
    echo "<div class=\"progress\"><div class=\"progress-bar\" role=\"progressbar\" style=\"width: $percent%;\">$percent%</div></div>\n";
    echo "</strong></td>\n";
    echo "    <td width=\"20%\"><strong> (".$i." of ".$total.")</strong></td>\n";
    echo "  </tr>\n";
  }
  echo "</table>\n";
}

function mkresrank($counts, $total, $precision, $showTotals) {
  $bg = '';
  echo "<table class=\"table table-hover\">\n";
  echo "  <tr>\n";
  echo "    <td><strong>Rank</strong></td>\n";
  echo "    <td>&nbsp;</td>\n";
  echo "    <td>&nbsp;</td>\n";
  echo "    <td>&nbsp;</td>\n";
  echo "  </tr>\n";
  arsort($counts);
  $i=0; $pt=0;
  while (list($content, $num) = each($counts)) {
    if ($num) { $p = $num/$total*100.0; }
    else { $p = 0; }
    $pt += $p;
    $bb = ++$i;
    echo "  <tr>\n";
    echo "    <td align=\"right\"><strong>$bb</strong></td>\n";
    echo "    <td>$content</td>\n";
    if ($p) { $pp = printf("%.${precision}f%%",$p); }
    echo "    <td width=\"60%\">$pp</td>\n";
    echo "    <td width=\"60%\">$num</td>\n";
    echo "  </tr>\n";
  } // end while
  if ($showTotals) {
    echo "  <tr>\n";
    echo "    <td colspan=\"2\"><strong>TOTAL</strong></td>\n";
    $cc = printf("%.${precision}f%%",$pt);
    $dd = print "$i ($total)";
    echo "    <td colspan=\"2\"><strong>$cc</strong></td>\n";
    echo "    <td colspan=\"2\"><strong>$dd</strong></td>\n";
    echo "  </tr>\n";
  }
echo "</table>\n";
}

function mkrescount($counts,$total,$precision,$showTotals) {
  $i = 0;
  echo "<table class=\"table table-hover\">\n";
  $bg = '';
  while (list($content,$num) = each($counts)) {
    echo "  <tr>\n";
    echo "    <td>$content</td>\n";
    echo "    <td width=\"60%\">$num</td>\n";
    if ($num) { $nn = printf("%.${precision}f",$num/$total*100.0); }
    echo "    <td width=\"60%\">$nn</td>\n";
    echo "  </tr>\n";
    $i += $num;
  } // end while
  if ($showTotals) {
    echo "  <tr>\n";
    echo "    <td colspan=\"2\"><strong>TOTAL</strong></td>\n";
    $oo = print "$i ($total)";
    if ($i) { $qq = printf("%.${precision}f",$i/$total*100.0); }
    echo "    <td colspan=\"2\"><strong>$oo</strong></td>\n";
    echo "    <td colspan=\"2\"><strong>$qq</strong></td>\n";
    echo "  </tr>\n";
  }
echo "</table>\n";
}

function mkreslist($counts, $total, $precision, $showTotals) {
  if ($total == 0) { return; }
  echo "<table class=\"table table-hover\">\n";
  echo "  <tr>\n";
  echo "    <th>#</th>\n";
  echo "    <th>Response</th>\n";
  while (list($text, $num) = each($counts)) {
    echo("  <tr><th>$num</th><td>$text</td></tr>\n");
  }
echo "</table>\n";
}

function mkresavg($counts, $total, $precision, $showTotals, $length) {
  if (!$length) { $length = 5; }
  $width = 200 / $length;
  echo "<table class=\"table table-hover\">\n";
  echo "  <tr>\n";
  echo "    <td></td>\n";
  $ll = $length + 2;
  echo "    <td colspan=\"$ll\">Average Rank</td>\n";
  echo "  </tr>\n";
  echo "  <tr>\n";
  echo "    <td></td>\n";
  for ($i = 0; $i < $length;)
    echo( "    <td align=\"right\" width=\"$width\">". ++$i ."</td>\n");
  echo "    <td width=\"20%\"></td>\n";
  echo "    <td></td>\n";
  echo "  </tr>\n";
  $bg = '';
  while (list($content, $avg) = each($counts)) {
    echo "  <tr>\n";
    echo "    <td width=\"30%\" align=\"right\">$content</td>\n";
    $kk = $length + 1;
    echo "    <td colspan=\"$kk\">";
    if ($avg) {
      //echo('<img src="/images/hbar_l.gif" height="9" width="4">');
      if (($j = $avg * $width - 11) > 0) {
        //printf('<img src="/images/hbar.gif" height="9" width="%d">', $j);
        echo "<div class=\"progress\"><div class=\"progress-bar progress-bar-info progress-bar-striped active\" role=\"progressbar\" style=\"width: $avg;\">$avg</div></div>";
      }
      //echo('<img src="/images/hbar_r.gif" height="9" width="4">');
    }
    echo "</td>\n";
  //$jj = printf("%.${precision}f",$avg);
  //echo "<div class=\"progress\"><div class=\"progress-bar progress-bar-info progress-bar-striped active\" role=\"progressbar\" style=\"width:".printf("%.${precision}f",$avg)." ;\">".printf("%.${precision}f",$avg)."</div></div>\n";
  echo "    <td width=\"30%\">$jj</td>\n";
  echo "  </tr>\n";
  } // end while
  echo "</table>\n";
}

function merge_expand_qids($targetq, $surveys) {
  $sql = "SELECT survey_id FROM ".X_QUESTION." WHERE id ". array_to_insql($targetq);
  $targets = get_one($sql);
  $sidstr = array_to_insql($surveys);
  $sql = "SELECT Q.survey_id, Q.id FROM ".X_QUESTION." Q WHERE Q.survey_id ${$sidstr} AND deleted = 'N' ORDER BY Q.survey_id, Q.position, Q.id";
  $result = execute_sql($sql);
  foreach ($surveys as $sid) { $i[$sid] = 0; }
  while (list($sid, $qid) = fetch_row($result)) { $$sid[$i[$sid]++] = $qid; }
  db_close($result);
  foreach ($surveys as $sid) { $num = $i[$sid]; }
  $qids = array();
  for ($j=0; $j<$num; $j++) { if (in_array($$targets[$j], $targetq)) { foreach ($surveys as $sid) { array_push($qids, $$sid[$j]); } } }
  return($qids);
}

function merge_expand_cids($targetc, $questions) {
  $sql = "SELECT question_id FROM ".X_QUESTION_CHOICE." WHERE id ". array_to_insql($targetc);
  $result = execute_sql($sql);
  $targetq = $result->fields[0];
  db_close($result);
  array_push($questions, $targetq);
  $qidstr = array_to_insql($questions);
  $sql = "SELECT C.question_id, C.id FROM ".X_QUESTION_CHOICE." C WHERE C.question_id ${$qidarr} ORDER BY C.question_id, C.id";
  $result = execute_sql($sql);
  foreach ($questions as $qid) { $i[$qid] = 0; }
  while (list($qid, $cid) = fetch_row($result)) { $$qid[$i[$qid]++] = $cid; }
  db_close($result);
  foreach ($questions as $qid) { $num = $i[$qid]; }
  $cids = array();
  for ($j=0; $j<$num; $j++) { if (in_array($$targetq[$j], $targetc)) { foreach ($questions as $qid) { array_push($cids, $$qid[$j]); } } }
  return($cids);
}

//      ID      Question type           Has choice?     Table
//      1       'Single answer (SA)'    'Y'             'response_single'
//      2       'Multiple answer (MA)'  'Y'             'response_multiple'
//      3       'Open-end (short)'      'N'             'response_text'
//      4       'Open-end (long)'       'N'             'response_text'
//      5       'Rating scale'          'Y'             'response_rank'
//      6       'Attribute rating'      'Y'             'response_rank'
//      7       'Drop down'             'Y'             'response_single'
//      8       'Date'                  'N'             'response_date'
//      9       'Numeric'               'N'             'response_text'
//      10      'Others'                'N'             'response_text'
//      99      'Page Break'            'N'             ''
//      100     'Section Text'          'N'             ''

function response_check_answers($sid, $rid, $section) {
  $sql = "SELECT id, type_id, content, content_th, required, ans_uniq FROM ".X_QUESTION." ". survey_select_section_sql($sid, $section) ." AND deleted = 'N' AND type_id < 98 ORDER BY position ";
  $result = execute_sql($sql);
  if (record_count($result) < 1) { db_close($result); return(''); }
  $missing = array();
  $not_numeric = array();
  $unique_answers = array(); // only for Textbox or numerical types
  while (list($qid, $tid, $content, $content_th, $required, $ans_uniq) = fetch_row($result)) {
    // if the question has no condition:    $question_was_shown=true
    // if the question has a condition:     $question_was_shown=true if condition is fulfilled, false otherwise
    $question_was_shown = question_conditioncheck($sid, $qid, $rid);
    //var_dump($question_was_shown);
    if ($question_was_shown) {

      // response_text
      // if ($ans_uniq=='Y' && ($tid==3 || $tid==4 || $tid==9 || $tid==10)) {
      // if ($ans_uniq=='Y' && ($tid==3 || $tid==4 || $tid==10)) {
      //    $tmp_response=_addslashes($_POST[$qid]);
      //    //$sql = "SELECT COUNT(*) FROM ".$GLOBALS['ESPCONFIG']['response_text_table']." WHERE question_id=$qid && response="._addslashes($_POST[//$qid]);
      //    $sql = "SELECT COUNT(id) FROM ".$GLOBALS['ESPCONFIG']['response_text_table']." WHERE question_id=$qid && response="._addslashes($_POST[$//qid]);
      //    echo $sql;
      //    $count_result = get_one($sql);
      //    if ($count_result) { $unique_answers[$qid] = $content; }
      // }

      // response_rank
      if ($required == 'Y' && $tid == 6) {
        $sql = "SELECT id FROM ".X_QUESTION_CHOICE." WHERE question_id = $qid";
        $cid_result = execute_sql($sql);
        while (list($cid) = fetch_row($cid_result)) {
          if (!isset($_POST["${qid}_${cid}"])) {
            if ($content_th) { $missing[$qid] = $content_th; } else { $missing[$qid] = $content; }
            break;
          }
          $cid_result->MoveNext();
        }
        db_close($cid_result);
      }

      // Numeric
      if ($required=='Y' && $tid == 9 && $_POST[$qid] === '0') { $result->MoveNext(); continue; }
      elseif ($tid == 9 && !empty($_POST[$qid]) && !is_numeric($_POST[$qid])) { if ($content_th) { $not_numeric[$qid] = $content_th; } else { $not_numeric[$qid] = $content; } }

      if (!isset($_POST[$qid])) { $_POST[$qid] = ''; }
      if ($required == 'Y' && $tid != 6 && empty($_POST[$qid]) && $_POST[$qid] != '0') { if ($content_th) { $missing[$qid] = $content_th; } else { $missing[$qid] = $content; } }
    }
    $result->MoveNext();
  }
  db_close($result);

  $message = '';

  // missing required variables
  if (count($missing) > 0) {
    $message .= "<p><strong>คุณยังไม่ได้ตอบ สำหรับคำถามดังต่อไปนี้:</strong><br>\n";
    while (list($qid, $content, $content_th) = each($missing)) {
      $message .= "<!-- ${qid} -->";
      if ($content_th) { $message .= "==> ${content_th}<br>\n"; } else { $message .= "==> ${content}<br>\n"; }
    }
    $message .= "</p>\n";
  }
  // missing numeric
  if (count($not_numeric) > 0) {
    $message .= "<p><strong>กรุณาตอบด้วยตัวเลขเท่านั้น สำหรับคำถามดังต่อไปนี้:</strong><br>\n";
    while (list($qid, $content, $content_th) = each($not_numeric)) {
      $message .= "<!-- ${qid} -->";
      if ($content_th) { $message .= "==> ${content_th}<br>\n"; } else { $message .= "==> ${content}<br>\n"; }
    }
    $message .= "</p>\n";
  }
  // double responses on unique
  if (count($unique_answers) > 0) {
    $message .= "<p><strong>กรุณาตอบด้วยคำตอบอื่น สำหรับคำถามดังต่อไปนี้:</strong><br>\n";
    while (list($qid, $content, $content_th) = each($unique_answers)) {
      $message .= "<!-- ${qid} -->";
      if ($content_th) { $message .= "==> ${content_th}<br>\n"; } else { $message .= "==> ${content}<br>\n"; }
    }
    $message .= "</p>\n";
  }

  return($message);
}

function response_delete($sid, $rid, $sec = null) {
  if (empty($rid))
    return;
  if ($sec != null) {
    if ($sec < 1)
    return;
  /* get question_id's in this section */
  $qids = survey_get_sections($sid);
  if (!isset($qids[$sec - 1]))
    return;
    $qids = 'AND question_id '. array_to_insql($qids[$sec - 1]);
  } else {
    /* delete all */
    $qids = '';
  }
  /* delete values */
  foreach (array('X_RESPONSE_BOOL', 'X_RESPONSE_DATE', 'X_RESPONSE_MULTIPLE', 'X_RESPONSE_OTHER', 'X_RESPONSE_RANK', 'X_RESPONSE_RATING', 'X_RESPONSE_SINGLE', 'X_RESPONSE_TEXT') as $tbl) {
    $sql = "DELETE FROM ".$tbl." WHERE response_id = $rid $qids";
    $res = execute_sql($sql);
  }
}

function response_delete_all($sid) {
  $sec = survey_get_sections($sid);
  $qids = array();
  foreach ($sec as $s)
  $qids = array_merge($qids, $s);
  $qids = array_to_insql($qids);
  /* delete values */
  foreach (array('X_RESPONSE_BOOL', 'X_RESPONSE_DATE', 'X_RESPONSE_MULTIPLE', 'X_RESPONSE_OTHER', 'X_RESPONSE_RANK', 'X_RESPONSE_RATING', 'X_RESPONSE_SINGLE', 'X_RESPONSE_TEXT') as $tbl) {
    $sql = "DELETE FROM ".$tbl." WHERE question_id $qids";
    $res = execute_sql($sql);
  }
  /* ensure responses from testing status are also deleted */
  $sql = "DELETE FROM ".X_RESPONSE." WHERE survey_id = ${sid}";
  execute_sql($sql);
}

function response_insert($sid, $section, $rid) {
  $sql = "SELECT name, email, public FROM ".X_SURVEY." WHERE id = ${sid}";
  $result = execute_sql($sql);
  list($name, $email, $survey_public) = fetch_row($result);

  if (isset($_SESSION['espuser'])) { $userid = $_SESSION['espuser']; } else { $userid = "anonymous"; }

  $ip = "";
  if (isset($_SERVER['REMOTE_ADDR'])) { $ip = $_SERVER['REMOTE_ADDR']; }
  if (isset($_SERVER['HTTP_CLIENT_IP'])) { $ip = "$ip (".$_SERVER['HTTP_CLIENT_IP'].")"; }
  elseif (isset($_SERVER['HTTP_X_FORWARDED_FOR'])) { $ip = "$ip (".$_SERVER['HTTP_X_FORWARDED_FOR'].")"; }

  $userid = _addslashes($userid);

  if (empty($rid)) {
    $sql = "INSERT INTO ".X_RESPONSE." (survey_id, submitted, username, ip) VALUES ( ${sid},".sys_time_stamp().", ${userid}, '${ip}') ";
    $result = execute_sql($sql);
    if (!$result) {
      $msg = "Request failed, please contact the administrator.";
      $msg .= mkerror(ErrorNo() . ': ' . ErrorMsg());
    print $msg;
    exit;
    }
    $rid = insert_id("response_id_seq");
  }

  $sql = "SELECT Q.id, Q.type_id, Q.length, Q.precise, T.response_table FROM ".X_QUESTION." Q, ".X_QUESTION_TYPE." T ". survey_select_section_sql($sid,$section,'Q') ." AND Q.survey_id = ${sid} AND Q.deleted = 'N' AND Q.type_id < 50 AND Q.type_id = T.id";
  $q_result = execute_sql($sql);
  while (list($qid, $tid, $length, $prec, $table) = fetch_row($q_result)) {
    $q_result->MoveNext();
    if (isset($_POST[$qid])) {
      if (is_array($_POST[$qid])) { $bareval = array_map('_stripslashes', $_POST[$qid]); }
      else { $bareval = _stripslashes($_POST[$qid]); }
    } else { $bareval = ''; }

    if (is_string($bareval)) { $val = _addslashes($bareval); }
    else { $val = ''; }

  // don't allow >1 responses for the same response ID and the same question ID
  $sql  = "SELECT COUNT(*) from ".$GLOBALS['ESPCONFIG'][$table.'_table']." WHERE response_id = ${rid} AND question_id = ${qid}";
  $count = get_one($sql);
  if ($count > 0) { return $rid; }

  switch ($table) {

    case 'response_bool':
      $sql  = "INSERT INTO ".$GLOBALS['ESPCONFIG'][$table.'_table']." (response_id, question_id, choice_id) VALUES ( ${rid}, ${qid}, ${val} )";
      if (!empty($val))
      $result = execute_sql($sql);
      break;

    case 'response_text':
      // only insert if non-empty content
      if ($tid == 9) { // numeric
        if (ereg (",", $bareval)) { $bareval = ereg_replace(",",".", $bareval); }
        if (ereg ("\.", $bareval)) { $bareval = ereg_replace("[^0-9.\-]*(-?[0-9]{1,$length}\.[0-9]{1,$prec}).*", '\1', $bareval); }
        else { $bareval = ereg_replace("[^0-9.\-]*(-?[0-9]{1,$length}).*", '\1', $bareval); }
      }
      if (ereg("[^ \t\n]", $bareval)) {
        $val = _addslashes($bareval);
        $sql  = "INSERT INTO ".$GLOBALS['ESPCONFIG'][$table.'_table']." (response_id, question_id, response) VALUES (${rid}, ${qid}, ${val}) ";
        $result = execute_sql($sql);
      }
      break;

    case 'response_date':
      // only insert if non-empty content
      //if (($bareval = ereg_replace("[^0-9]*([0-9]+)/([0-9]+)/([0-9]+).*", '\3-\1-\2', $bareval))) {
      if (function_exists("strptime")) {
        if ($bareval = strptime($bareval, FORMAT_DATE)) {
          $bareval['tm_year'] += 1900;
          $bareval['tm_mon'] += 1;
          $val = $bareval['tm_year']."-". $bareval['tm_mon']."-". $bareval['tm_mday'];
          $val = _addslashes($val);
          $sql = "INSERT INTO ".$GLOBALS['ESPCONFIG'][$table.'_table']." (response_id, question_id, response) VALUES (${rid}, ${qid}, ${val}) ";
          $result = execute_sql($sql);
        }
      } elseif ($val = ereg_replace("[^0-9]*([0-9]+)/([0-9]+)/([0-9]+).*", '\3-\2-\1', $bareval)) {
        $val = _addslashes($val);
        $sql  = "INSERT INTO ".$GLOBALS['ESPCONFIG'][$table.'_table']." (response_id, question_id, response) VALUES (${rid}, ${qid}, ${val}) ";
        $result = execute_sql($sql);
      }
      break;

    case 'response_single':
      if (empty($bareval)) {
        $sql = "SELECT id FROM ".X_QUESTION_CHOICE." WHERE question_id = ${qid} AND content LIKE '!others%' ORDER BY id ";
        $c_result = execute_sql($sql);
        while (!$c_result) {
          $c_result->MoveNext();
          list($cid) = fetch_row($c_result);
          if (!isset($_POST["${qid}_${cid}"])) { continue; }
          $other = _addslashes($_POST["${qid}_${cid}"]);
          if (ereg("[^ \t\n]", $other)) {
            $sql = "INSERT INTO ".X_RESPONSE_OTHER." (response_id, question_id, choice_id, response) VALUES (${rid}, ${qid}, ${cid}, ${other}) ";
            $result = execute_sql($sql);
            $val = $cid;
            break;
          }
        }
        db_close($c_result);
      }
      if (ereg("other_([0-9]+)", $bareval, $regs)) {
        $cid = $regs[1];
        if (!isset($_POST["${qid}_${cid}"]))
        break; // out of the case
        $other = _addslashes($_POST["${qid}_${cid}"]);
        if (ereg("[^ \t\n]", $other)) {
          $sql = "INSERT INTO ".X_RESPONSE_OTHER." (response_id, question_id, choice_id, response) VALUES (${rid}, ${qid}, ${cid}, ${other}) ";
          $result = execute_sql($sql);
          $val = $cid;
        }
      }
      $sql = "INSERT INTO ".$GLOBALS['ESPCONFIG'][$table.'_table']." (response_id, question_id, choice_id) VALUES (${rid}, ${qid}, ${val}) ";
      $result = execute_sql($sql);
      break;

    case 'response_multiple':
      $sql = "SELECT id FROM ".X_QUESTION_CHOICE." WHERE question_id = ${qid} AND content LIKE '!others%' ";
      $c_result = execute_sql($sql);
      while (!$c_result->EOF) {
        list($cid) = fetch_row($c_result);
        $c_result->MoveNext();
        if (!isset($_POST["${qid}_${cid}"]) || empty($_POST["${qid}_${cid}"])) { continue; }
        if (!isset($_POST[$qid])) { $_POST[$qid] = array($cid); } else { array_push($_POST[$qid], $cid); }
        $other = _addslashes($_POST["${qid}_${cid}"]);
        if (ereg("[^ \t\n]", $other)) {
          $sql = "INSERT INTO ".X_RESPONSE_OTHER." (response_id, question_id, choice_id, response) VALUES (${rid}, ${qid}, ${cid}, ${other}) ";
          $result = execute_sql($sql);
        }
      }
      db_close($c_result);
      if (!isset($_POST[$qid]) || !is_array($_POST[$qid]))
      break;
      foreach ($_POST[$qid] as $cid) {
        $cid = _addslashes($cid);
        if (ereg("other_[0-9]+", $cid))
        continue;
        $sql  = "INSERT INTO ".$GLOBALS['ESPCONFIG'][$table.'_table']." (response_id, question_id, choice_id) VALUES (${rid}, ${qid}, ${cid}) ";
        $result = execute_sql($sql);
      }
      break;

    case 'response_rank':
      //if ($tid == 5 || $tid == 6) {
      if ($tid == 6) {
        $sql = "SELECT id FROM ".X_QUESTION_CHOICE." WHERE question_id = ${qid} ";
        $cid_result = execute_sql($sql);
        while (!$cid_result->EOF) {
          list($cid) = fetch_row($cid_result);
          $cid_result->MoveNext();
          if (!isset($_POST["${qid}_${cid}"]))
          continue;
          $val = $_POST["${qid}_${cid}"];
          if (strtolower($val) == "n/a") { $rank = -1; } else { $rank = intval($val); }
          $rank = _addslashes($rank);
          $sql = "INSERT INTO ".$GLOBALS['ESPCONFIG'][$table.'_table']." (response_id, question_id, choice_id, rank) VALUES (${rid}, ${qid}, ${cid}, ${rank}) ";
          $result = execute_sql($sql);
        }
        db_close($cid_result);
        break;
      }
      if (strtolower($bareval) == "n/a") { $rank = -1; } else { $rank = intval($bareval); }
      $sql  = "INSERT INTO ".$GLOBALS['ESPCONFIG'][$table.'_table']." (response_id, question_id, rank) VALUES (${rid}, ${qid}, ${rank}) ";
      $result = execute_sql($sql);
      break;
    }
  }
  db_close($q_result);
  return($rid);
}

function response_commit($rid) {
  $ip = "";
  if (isset($_SERVER['REMOTE_ADDR'])) { $ip = $_SERVER['REMOTE_ADDR']; }
  if (isset($_SERVER['HTTP_CLIENT_IP'])) { $ip = "$ip (".$_SERVER['HTTP_CLIENT_IP'].")"; }
  elseif (isset($_SERVER['HTTP_X_FORWARDED_FOR'])) { $ip = "$ip (".$_SERVER['HTTP_X_FORWARDED_FOR'].")"; }
  $sql = "UPDATE ".X_RESPONSE." SET complete = 'Y', submitted = ".sys_time_stamp().", ip = '$ip' WHERE id = ${rid} ";
  if (execute_sql($sql))
  return(true);
  return(false);
}

function response_key_cmp($l, $r) {
  $lx = explode('_', $l);
  $rx = explode('_', $r);
  $lc = intval($lx[0]);
  $rc = intval($rx[0]);
  if ($lc == $rc) {
    if (count($lx) > 1 && count($rx) > 1) { $lc = intval($lx[1]); $rc = intval($rx[1]); }
    elseif (count($lx) > 1) { $lc++; }
    elseif (count($rx) > 1) { $rc++; }
  }
  if ($lc == $rc)
  return 0;
  return ($lc > $rc) ? 1 : -1;
}

function response_select($sid, $rid, $col = null, $qids = null) {
  $values = array();
  if ($col == null) { $col = ''; }
  if (!is_array($col) && !empty($col)) { $col = explode(',', preg_replace("/\s/",'', $col)); }
  if (is_array($col) && count($col) > 0) { $col = ',' . implode(',', array_map(create_function('$a','return "q.$a";'), $col)); }
  if ($qids == null) { $qids = ''; }
  elseif (is_array($qids)) { $qids = 'AND a.question_id ' . array_to_insql($qids); }
  elseif (intval($qids) > 0) { $qids = 'AND a.question_id = ' . intval($qids); }
  else { $qids = ''; }

  // --------------------- response_bool ---------------------

  $sql = "SELECT q.id $col, a.choice_id FROM ".X_RESPONSE_BOOL." a, ".X_QUESTION." q WHERE a.response_id = ${rid} AND a.question_id = q.id $qids ";
  $result = execute_sql($sql);
  while (!$result->EOF) {
    $row = fetch_row($result);
    $qid = array_shift($row);
    $val = array_pop($row);
    $values[$qid] = $row;

    $ivalue = '';
    if ($val == 'Y') { $ivalue = 'Yes'; }
    elseif ($val == 'N') { $ivalue = 'No'; }
    array_push($values["$qid"], $ivalue, $val);
    $result->MoveNext();
  }
  db_close($result);

  // --------------------- response_single ---------------------

  $sql = "SELECT q.id $col, c.content, c.id, c.feedback, c.credit FROM ".X_RESPONSE_SINGLE." a, ".X_QUESTION." q, ".X_QUESTION_CHOICE." c WHERE a.response_id = ${rid} AND a.question_id = q.id AND a.choice_id = c.id $qids ";
  $result = execute_sql($sql);
  while (!$result->EOF) {
    $row = fetch_row($result);
    $qid = array_shift($row);
    $c = count($row);
    $val = $row[$c - 4];
    if (ereg('^!others', $val)) { $row[$c - 3] = 'other_' . $row[$c - 3]; } //if (preg_match('/^!others/', $val))
    else { settype($row[$c - 3], 'integer'); }
    $values[$qid] = $row;
    $result->MoveNext();
  }
  db_close($result);

  // --------------------- response_multiple ---------------------

  $sql = "SELECT q.id $col, c.content, c.id, c.feedback, c.credit FROM ".X_RESPONSE_MULTIPLE." a, ".X_QUESTION." q, ".X_QUESTION_CHOICE." c WHERE a.response_id = ${rid} AND a.question_id = q.id AND a.choice_id = c.id $qids ORDER BY a.question_id, c.id ";
  $result = execute_sql($sql);
  $arr = array();
  $tmp = null;
  while (!$result->EOF) {
    $row = fetch_row($result);
    $qid = array_shift($row);
    $c = count($row);
    $val = $row[$c - 4];
    if (ereg('^!others', $val)) { $row[$c - 3] = 'other_' . $row[$c - 3]; }
    else { settype($row[$c - 3], 'integer'); }
    if ($tmp == $qid) {
      $arr[] = $row;
      $result->MoveNext();
      continue;
    }
    if ($tmp != null)
    $values["$tmp"] = $arr;
    $tmp = $qid;
    $arr = array($row);
    $result->MoveNext();
  }
  if ($tmp != null)
  $values["$tmp"] = $arr;
  db_close($result);
  unset($arr);
  unset($tmp);
  unset($row);

  // --------------------- response_other ---------------------

  $sql = "SELECT q.id, c.id $col, a.response FROM ".X_RESPONSE_OTHER." a, ".X_QUESTION." q, ".X_QUESTION_CHOICE." c WHERE a.response_id = ${rid} AND a.question_id = q.id AND a.choice_id = c.id $qids ORDER BY a.question_id, c.id ";
  $result = execute_sql($sql);
  while (!$result->EOF) {
    $row = fetch_row($result);
    $qid = array_shift($row);
    $cid = array_shift($row);
    array_push($row, $row[count($row) - 1]);
    $values["${qid}_${cid}"] = $row;
    $result->MoveNext();
  }
  db_close($result);

  // --------------------- response_rank ---------------------

  $sql = "SELECT (". $GLOBALS['ESPCONFIG']['adodb_conn']->Concat("q.id","'_'","c.id") .") AS id $col, c.content, a.rank FROM ".X_RESPONSE_RANK." a, ".X_QUESTION." q, ".X_QUESTION_CHOICE." c WHERE a.response_id = ${rid} AND a.question_id = q.id AND a.choice_id = c.id $qids ORDER BY a.question_id, c.id ";
  $result = execute_sql($sql);
  while (!$result->EOF) {
    $row = fetch_row($result);
    $qid = array_shift($row);
    settype($row[count($row) - 1], 'integer');
    if (isset($row[3])) { if ($row[3]>=0) { $row[3]++; } }
    $values[$qid] = $row;
    $result->MoveNext();
  }
  db_close($result);

  // --------------------- response_text ---------------------

  $sql = "SELECT q.id $col, a.response FROM ".X_RESPONSE_TEXT." a, ".X_QUESTION." q WHERE a.response_id = ${rid} AND a.question_id = q.id $qids ";
  $result = execute_sql($sql);
  while (!$result->EOF) {
    $row = fetch_row($result);
    $qid = array_shift($row);
    $values["$qid"] = $row;
    $val = array_pop($values["$qid"]);
    array_push($values["$qid"], $val, $val);
    $result->MoveNext();
  }
  db_close($result);

  // --------------------- response_date ---------------------

  $sql = "SELECT q.id $col, a.response FROM ".X_RESPONSE_DATE." a, ".X_QUESTION." q WHERE a.response_id = ${rid} AND a.question_id = q.id $qids ";
  $result = execute_sql($sql);
  while (!$result->EOF) {
    $row = fetch_row($result);
    $qid = array_shift($row);
    $values["$qid"] = $row;
    $val = array_pop($values["$qid"]);
    array_push($values["$qid"], $val, $val);
    $result->MoveNext();
  }
  db_close($result);

  // --------------------- return ---------------------

  uksort($values, 'response_key_cmp');
  return($values);
}

function response_select_human($sid, $rid, $qids = null) {
  $res = response_select($sid, $rid, 'type_id, content', $qids);
  $hmn = array();
  reset($res);
  $tmpk = null;
  $tmpv = array();
  while (list($qid, $arr) = each($res)) {
    $key = null;
    $val = null;
    if (strstr($qid, '_')) {
      // rank or other
      list($qid, $sub) = explode('_', $qid);
      if ($arr[0] != 8) { continue; } // other
      // rank
      $key = $arr[1];
      if ($arr[3] < 0) { $arr[3] = 'n/a'; } else { $arr[3]++; }
      $val = $arr[2] . ' = ' . $arr[3];
      if ($tmpk != $key) {
        if (!empty($tmpk) || count($tmpv))
        array_push($hmn, array($tmpk, $tmpv));
        $tmpk = null;
        $tmpv = array();
      }
      $tmpk = $key;
      array_push($tmpv, $val);
      continue;
    }
    if (!empty($tmpk) || count($tmpv))
    array_push($hmn, array($tmpk, $tmpv));
    if (is_array($arr[0])) {
      // mutiple
      $key = $arr[0][1];
      $val = array();
      foreach ($arr as $subarr) {
        if (ereg("^!others", $subarr[2])) {
          $tmpv = preg_replace(array("/^!others=/", "/^!others/"), array('', 'Others'), $subarr[2]);
          $tmp = preg_replace("/^other/", $qid, $subarr[3]);
          if (isset($res[$tmp]))
          $tmpv .= ': '. $res[$tmp][2];
          array_push($val, $tmpv);
        } else {
          array_push($val, $subarr[2]);
        }
      }
    } else {
      $key = $arr[1];
      if (ereg("^!others", $arr[2])) {
        $val = preg_replace(array("/^!others=/", "/^!others/"), array('', 'Others'), $arr[2]);
        $tmp = preg_replace("/^other/", $qid, $arr[3]);
        if (isset($res[$tmp]))
        $val .= ': '. $res[$tmp][2];
      } else {
        $val = $arr[2];
      }
    }
    $tmpk = null;
    $tmpv = array();
    $hmn[] = array($key, $val);
  }
  if (!empty($tmpk) || count($tmpv)) {
    array_push($hmn, array($tmpk, $tmpv));
    $tmpk = null;
    $tmpv = array();
  }
  return $hmn;
}

function response_select_compact($sid, $rid, $qids = null) {
  $res = response_select($sid, $rid, 'type_id', $qids);
  $cpq = array();
  reset($res);
  while (list($qid, $arr) = each($res)) {
    if (strstr($qid, '_')) { // rank or other
      if ($arr[0] == 8) { $cpq[] = array($qid, $arr[2]+1, array($arr[1])); }
      else { $cpq[] = array($qid, $arr[1]); }
    } elseif (is_array($arr[0])) { // multiple
      $cpq[] = array($qid,
      array_map(create_function('$a', 'return $a[2];'), $arr),
      array_map(create_function('$b', 'return $b[1];'), $arr));
    } else {
      if ($arr[0] == 4 || $arr[0] == 6) { $cpq[] = array($qid, $arr[2], array($arr[1])); }
      else { $cpq[] = array($qid, $arr[2]); }
    }
  }
  return $cpq;
}

function response_select_name($sid, $rid, $qids = null) {
  $res = response_select($sid, $rid, 'type_id,name', $qids);
  $nam = array();
  reset($res);
  while (list($qid, $arr) = each($res)) {
    $key = null;
    $val = null;
    $index = $qid;
    if (strstr($qid, '_')) {
      // rank or other
      list($qid, $sub) = explode('_', $qid);
      if ($arr[0] != 8) { continue; } // other
      // rank
      $str1 = $arr[2];
      do {
        $str2 = $str1;
        $str1 = eregi_replace("(^| )(what|which|why|how|who|where|how|is|are|were|the|a|it|of|do|you|your|please|enter)[ ?]", " ", $str2);
      } while ($str1 != $str2);
      $str1 = trim(strtoupper(eregi_replace("[^A-Z0-9]+", " ", $str1)));
      $str1 = ereg_replace(' +', '_', $str1);
      $arr[1] = strtoupper($arr[1]);
      $arr[1] .= "_$str1";
      $nam[$index] = array($arr[1]=>$arr[3]);
      continue;
    }
    if (is_array($arr[0])) {
      // mutiple
      $key = $arr[0][1];
      $val = array();
      foreach ($arr as $subarr) {
        if (ereg("^!others", $subarr[2])) {
          $tmpv = preg_replace(array("/^!others=/", "/^!others/"), array('', 'Others'), $subarr[2]);
          $tmp = preg_replace("/^other/", $qid, $subarr[3]);
          if (isset($res[$tmp])) { $tmpv .= ': '. $res[$tmp][2]; }
          array_push($val, $tmpv);
        } else {
          array_push($val, $subarr[2]);
        }
      }
    } else {
      $key = $arr[1];
      if (ereg("^!others", $arr[2])) {
        $val = preg_replace(array("/^!others=/", "/^!others/"), array('', 'Others'), $arr[2]);
        $tmp = preg_replace("/^other/", $qid, $arr[3]);
        if (isset($res[$tmp]))
        $val .= ': '. $res[$tmp][2];
      } else {
        $val = $arr[2];
      }
    }
    $nam[$index] = array($key=>$val);
  }
  return $nam;
}

function response_send_email($sid, $rid) {
  // if (!$GLOBALS['ESPCONFIG']['allow_email']) { return true; }
  $sql = "SELECT name, email, public FROM ".X_SURVEY." WHERE id = ${sid}";
  $result = execute_sql($sql);
  list($name, $email, $survey_public) = fetch_row($result);
  db_close($result);
  if (empty($email)) { return(false); }
  //lets check to see if user wants human readable email
  if ($GLOBALS['ESPCONFIG']['human_email']) {
    $answers = response_select_human($sid, $rid);
    $qsep = "\n\t";
    $isep = "\n\t";
    $end = "\n\n";
  } else {
    $answers = response_select_compact($sid, $rid);
    $qsep = ' : ';
    $isep = ',';
    $end = "\n";
  }
  $user = array('survey.id' => $sid, 'survey.name' => $name, 'survey.response' => $rid);
  $userid = "";
  if ($_SESSION['espuser']) {
    $userid = $_SESSION['espuser'];
    $user['user.username'] = $userid;
    $sql = "SELECT fname, lname, email FROM ".X_RESPONDENT." WHERE username = " . _addslashes($userid);
    $result = execute_sql($sql);
    if ($result && record_count($result)) {
        list ($user_fname, $user_lname, $user_email) = fetch_row($result);
        db_close($result);
        if (!empty($user_fname)) $user["user.firstname"] = $user_fname;
        if (!empty($user_lname)) $user["user.lastname"] = $user_lname;
        if (!empty($user_email)) $user["user.email"] = $user_email;
    }
  } else { $user['user.username'] = "anonymous"; }

  $subject = 'Response from survey:' ." $name [$rid]";
  $body = '';
  reset($user);
  while (list($k, $v) = each($user))
  $body .= $k . $qsep . $v . $end;
  $headers = 'From: '.SYSTEMEMAIL."\r\n" .
             'Reply-To: '.SYSTEMEMAIL."\r\n" .
             'X-Mailer: PHP/' . phpversion();
  reset($answers);
  while ($arr = array_shift($answers)) {
    unset($x);
    if (count($arr) > 2) { list($k, $v, $x) = $arr; } else { list($k, $v) = $arr; }
    if (is_array($v))
    $v = implode($isep, $v);
    if (isset($x)) { if (is_array($x)) { $v .= ' (' . implode($isep, $x) . ')'; } else { $v .= ' = ' . $x; } }
    $body .= $k . $qsep . $v . $end;
  }
  // support for multiple emails separated by ;
  if (strpos($email, ';') !== false) {
    $retVal = 1;
    $emailArray = split(";", $email);
    foreach ($emailArray as $email_address) { if (!mail($email_address, $subject, $body, $headers)) { $retVal = 0; } }
    return $retVal;
  } else {
    return(mail($email, $subject, $body, $headers));
  }
}

function response_select_max_pos($sid, $rid) {
  $max = 0;
  foreach (array('X_RESPONSE_BOOL', 'X_RESPONSE_DATE', 'X_RESPONSE_MULTIPLE', 'X_RESPONSE_OTHER', 'X_RESPONSE_RANK', 'X_RESPONSE_RATING', 'X_RESPONSE_SINGLE', 'X_RESPONSE_TEXT') as $tbl) {
    $sql = "SELECT MAX(q.position) FROM ".$tbl." a, ".X_QUESTION." q WHERE a.response_id = $rid AND q.id = a.question_id AND q.survey_id = $sid AND q.deleted = 'N' ";
    $num = get_one($sql);
    if ($num > $max) { $max = $num; }
  }
  return $max;
}

function response_select_max_sec($sid, $rid) {
  $pos = response_select_max_pos($sid, $rid);
  $sql = "SELECT COUNT(*)+1 FROM ".X_QUESTION." q WHERE q.survey_id = $sid AND q.type_id = 99 AND q.position < $pos AND q.deleted = 'N' ";
  $max = get_one($sql);
  return $max;
}

function response_import_sec($sid, $rid, $sec, $varr = null) {
  if ($varr == null)
  $varr =& $_POST;
  $ids = survey_get_sections($sid);
  if ($sec < 1 || !isset($ids[$sec - 1]))
  return;
  $vals = response_select($sid, $rid, 'content', $ids[$sec - 1]);
  reset($vals);
  foreach ($vals as $id => $arr) {
    if (isset($arr[0]) && is_array($arr[0])) { $varr[$id] = array_map('array_pop', $arr); } // multiple
    else { $varr[$id] = array_pop($arr); }
  }
}

function survey_status_is_edit($status) {
  return (is_numeric($status) && (0 === (int)$status) ? true : false);
}

function survey_status_is_active($status) {
  return survey_status_is($status, STATUS_ACTIVE);
}

function survey_status_is_done($status) {
  return survey_status_is($status, STATUS_DONE);
}

function survey_status_is_deleted($status) {
  return survey_status_is($status, STATUS_DELETED);
}

function survey_status_is_test($status) {
  return survey_status_is($status, STATUS_TEST);
}

function survey_status_is($status, $bit) {
  return (is_numeric($status) && ($bit === ((int)$status & $bit)) ? true : false);
}

function survey_open($open_date, $close_date, $now = null) {
  $has_open_date  = (empty($open_date)  || '0000-00-00 00:00:00' == $open_date  ? false : true);
  $has_close_date = (empty($close_date) || '0000-00-00 00:00:00' == $close_date ? false : true);
  $badts = (is_callable('version_compare') && version_compare('5.1.0', PHP_VERSION, '<=') ? false : -1);
  if ($has_open_date) { $open_date_ts = (is_int($open_date) ? $open_date : strtotime($open_date)); if ($badts === $open_date_ts) { $has_open_date = false; } }
  if ($has_close_date) { $close_date_ts = (is_int($close_date) ? $close_date : strtotime($close_date)); if ($badts === $close_date_ts) { $has_close_date = false; } }
  $nowts = (is_int($now) ? $now : (is_null($now) ? time() : strtotime($now)));
  if ($has_open_date && $nowts < $open_date_ts) { return STATUS_CLOSED_TOO_EARLY; }
  elseif ($has_close_date && $close_date_ts < $nowts) { return STATUS_CLOSED_TOO_LATE; }
  else { return STATUS_OPEN; }
}

function survey_get_for_current_user(&$surveys) {
  $where = survey_fetch_limiting_where();
  $sql = "SELECT id, name, title, owner, realm FROM ".X_SURVEY." WHERE {$where} ORDER BY id DESC ";
  return survey_get_from_sql($sql, $surveys);
}

function survey_fetch_limiting_where($statusColumn = 'status', $ownerColumn = 'owner', $realmColumn = 'realm') {
  // we start by limiting everyone to just the active or done surveys
  $statusok = db_bin($statusColumn, STATUS_ACTIVE | STATUS_DONE);
  $statusno = db_bin($statusColumn, STATUS_DELETED);
  $where = "($statusok) AND (NOT $statusno)";
  if (isset($_SESSION['acl']) && is_array($_SESSION['acl'])) {
    if (isset($_SESSION['acl']['superuser']) && 'Y' != $_SESSION['acl']['superuser']) {
      $realms = array_to_insql(array_intersect($_SESSION['acl']['pall'], $_SESSION['acl']['pdata']));
      if (is_string($realmColumn)) { $access = sprintf('%s %s', $realmColumn, $realms); }
      elseif (is_array($realmColumn)) {
        $access = array ();
        foreach ($realmColumn as $column) { $access[] = sprintf('%s %s', $column, $realms); }
        $access = implode(' OR ', $access);
      } // get the access to any of those columns
      else { $access = '1=0'; } // if we're given something else, fail gracefully closed
      // build the SQL where the user owns the survey or has access to it
      $where .= sprintf(' AND (%s=%s OR %s)', $ownerColumn, _addslashes($_SESSION['acl']['username']), $access);
    }
  }
  return $where;
}

function survey_get_in_realm($realm, &$surveys) {
  $where = survey_fetch_limiting_where('status','owner',array ('tblSurvey.realm', 'tblAccess.realm'));
  $realm = _addslashes($realm);
  $sql = "SELECT DISTINCT tblSurvey.id, tblSurvey.name, tblSurvey.title, tblSurvey.owner, tblSurvey.open_date, tblSurvey.close_date FROM ".X_SURVEY." AS tblSurvey JOIN ".X_ACCESS." AS tblAccess ON tblAccess.survey_id = tblSurvey.id WHERE (tblSurvey.realm = $realm OR tblAccess.realm = $realm) AND ($where) ORDER BY id DESC ";
  return survey_get_from_sql($sql, $surveys);
}

function survey_get_public(&$surveys) {
  $where = survey_fetch_limiting_where();
  $sql = "SELECT id, name, title, owner, open_date, close_date FROM ".X_SURVEY." WHERE (public = 'Y') AND ($where) ORDER BY id DESC ";
  return survey_get_from_sql($sql, $surveys);
}

function survey_get_privilege(&$privileges, $sids, $realm = null) {
  if (is_scalar($sids)) { $sids = array ($sids); }
  elseif (!is_array($sids)) { return false; }
  $limit  = sprintf('(tblAccess.survey_id %s)', array_to_insql($sids));
  $limit .= (isset($realm) ? sprintf(' AND (tblAccess.realm=%s)', _addslashes($realm)) : '');
  // get the access columns
  $sql = "SELECT survey_id, realm, maxlogin, resume, navigate FROM ".X_ACCESS." AS tblAccess WHERE $limit ";
  return survey_get_from_sql($sql, $privileges, 'survey_id');
}

function survey_get_responses(&$responses, $sids, $username = null) {
  if (is_scalar($sids)) { $sids = array ($sids); }
  elseif (!is_array($sids)) { return false; }
  $limit  = sprintf('(survey_id %s)', array_to_insql($sids));
  $limit .= (isset($username) ? sprintf(' AND (tblResponse.username = %s)', _addslashes($username)) : '');
  $sql = "SELECT survey_id, username, submitted, complete, ip FROM ".X_RESPONSE." AS tblResponse WHERE $limit";
  return survey_get_from_sql($sql, $responses, 'survey_id');
}

//  survey_get_accessibility()
//  Determine accessibility of one or more surveys, optionally pinned to user or realm

/*
NOTE1: A survey is "accessible" when it's:
 (a) active:    status is active
 (b) open:      survey is open (between open & close dates, if given)
 (c) available: (user given and ((no max login) or (number of complete responses < max))) or (no user given)
 (d) visible:   (survey is public) OR (in user's realm)

NOTE2: Each row will have 5 columns: id, active, open, available, visible.  Possible values are:
 o        id: >= 1
 o    active: === 1 if active, === 0 otherwise
 o      open: either STATUS_OPEN, STATUS_CLOSED_TOO_EARLY, or STATUS_CLOSED_TOO_LATE
 o available: === 1 if available, === 0 otherwise
 o   visible: === 1

*/

function survey_get_accessibility(&$accessibility, $sids, $username = null, $realm = null) {
  $yes = _addslashes('Y');
  // ... active
  $statusActive = db_bin('tblSurvey.status', STATUS_ACTIVE);
  $statusActive = "CASE WHEN ($statusActive) THEN 1 ELSE 0 END";
  // ... open
  $now = sys_time_stamp();
  $STATUS_CLOSED_TOO_EARLY = STATUS_CLOSED_TOO_EARLY;
  $STATUS_CLOSED_TOO_LATE  = STATUS_CLOSED_TOO_LATE;
  $STATUS_OPEN             = STATUS_OPEN;
  $openForBiz = "CASE WHEN NOT (tblSurvey.open_date IS NULL OR '0000-00-00 00:00:00' = tblSurvey.open_date) AND $now < tblSurvey.open_date THEN $STATUS_CLOSED_TOO_EARLY WHEN NOT (tblSurvey.close_date IS NULL OR '0000-00-00 00:00:00' = tblSurvey.close_date) AND tblSurvey.close_date < $now THEN $STATUS_CLOSED_TOO_LATE ELSE $STATUS_OPEN END ";
  // ... available
  if (isset($username)) {
    $username = _addslashes($username);
    $mayRespond = "CASE WHEN ( 0 = COALESCE(maxlogin, 0) OR (SELECT COUNT(*) FROM ".X_RESPONSE." as tblResponse WHERE tblResponse.survey_id = tblAccess.survey_id AND tblResponse.username = $username AND tblResponse.complete = $yes) < maxlogin) THEN 1 ELSE 0 END ";
  }
  else { $mayRespond = '1'; }
  // ... visible
  if (is_scalar($sids)) { $sids = array ($sids); }
  elseif (!is_array($sids)) { return false; }
  if (isset($realm)) { $realm = _addslashes($realm); $limit = sprintf('(tblSurvey.id %s) AND (tblSurvey.public = %s OR tblAccess.realm = %s)', array_to_insql($sids), $yes, $realm); }
  else { $limit = sprintf('(tblSurvey.id %s) AND (tblSurvey.public = %s)', array_to_insql($sids), $yes); }
  // compute
  $sql = "SELECT tblSurvey.id, ($statusActive) AS active, ($openForBiz) AS open, ($mayRespond) AS available, 1 AS visible FROM ".X_SURVEY." AS tblSurvey LEFT JOIN ".X_ACCESS." AS tblAccess ON tblAccess.survey_id = tblSurvey.id WHERE $limit ";
  return survey_get_from_sql($sql, $accessibility);
}

function survey_get_from_sql($sql, &$surveys, $surveyIDCol = 'id') {
  $res = execute_sql($sql, null, ADODB_FETCH_ASSOC);
  if (!$res) { $GLOBALS['errmsg'] = mkerror('Unable to get list of surveys for current user'); return false; }
  // put dataset into a nice array - multiple rows with the same survey ID will be combined
  $needsConversion = true;
  $surveys = array ();
  while ($row = fetch_row($res)) {
    $res->MoveNext();
    // make sure we have an ID column
    if (isset($row[$surveyIDCol])) { $id = $row[$surveyIDCol]; }
    else { continue; }
    // add in the survey information to the previous survey information
    if (isset($surveys[$id])) {
      if ($needsConversion) { $surveys[$id] = array ($surveys[$id]); $needsConversion = false; }
      $surveys[$id][] = $row;
    }
    else { $surveys[$id] = $row; }
  }
  db_close($res);
  return true;
}

function survey_merge_sets(&$merged, $a /* ... */) {
  // make sure we have an initial array
  if (!is_array($merged)) { $merged = array (); }
  // add in surveys from the second argument on, skipping duplicates
  for ($i = 1; $i < func_num_args(); $i++) {
    $set = func_get_arg($i);
    if (!is_array($set)) { continue; }
    foreach ($set as $sid => $survey) { if (!array_key_exists($sid, $merged)) { $merged[$sid] = $survey; } }
  }
  return true;
}

function survey_fetch_url_by_survey_name($name) {
  $target = htmlspecialchars(MYSURVEY."?name=".$name);
  return rtrim($target);
}

function survey_assign_new_name() {
  $sql = "SELECT name FROM ".X_SURVEY." ORDER BY id DESC ";
  $result = execute_sql($sql, "", ADODB_FETCH_ASSOC);
  if ($arr = fetch_row($result)) { $curr = $arr['name']; }
  db_close($result);
  $currentNo = substr($curr, -4);
  $newNo = $currentNo + "1";
  $newFormattedNo = sprintf("%04d", $newNo);
  $newName = "PEB".$newFormattedNo;
  return $newName;
}

function stat_fetch_with_summary($limitToCurrentUser = true) {
  $cfg =& $GLOBALS['ESPCONFIG'];
  if ($limitToCurrentUser) {
    $where = survey_fetch_limiting_where(X_SURVEY.".status", X_SURVEY.".owner", X_SURVEY.".realm");
    $sql = sprintf('SELECT * FROM %1$s JOIN %2$s ON %2$s.id=%1$s.survey_id WHERE %3$s', X_SURVEY_STATISTICS, X_SURVEY, $where);
  } else {
    $sql = sprintf('SELECT * FROM %1$s', X_SURVEY_STATISTICS);
  }
  $res = execute_sql($sql, null, ADODB_FETCH_ASSOC);
  if ($res && 0 <= record_count($res)) {
    $results = array ();
    $summary = array ();
    while ($row = fetch_row($res)) {
      $res->MoveNext();
      $sid = $row['survey_id'];
      unset($row['survey_id']);
      $results[$sid] = $row;
      foreach ($row as $key => $val) { if (isset($summary[$key])) { $summary[$key] += $val; } else { $summary[$key] = $val; } }
    }
    if (!empty($summary)) { $results[null] = $summary; }
    return $results;
  }
  else { $GLOBALS['errmsg'] = mkerror('Unable to fetch statistics from table'); return false; }
}

function survey_stat_fetch_all($sid) {
  $cfg =& $GLOBALS['ESPCONFIG'];
  $sql = sprintf('SELECT * FROM %1$s WHERE survey_id = %2$s', X_SURVEY_STATISTICS, $sid);
  $res = execute_sql($sql, null, ADODB_FETCH_ASSOC);
  if ($res) { $values = fetch_row($res); unset($values['survey_id']); return $values; }
  else { $GLOBALS['errmsg'] = mkerror('Unable to fetch statistics for survey'); return false; }
}

function survey_stat_fetch($metric, $sid) {
  $cfg =& $GLOBALS['ESPCONFIG'];
  $sql = sprintf('SELECT %1$s FROM %2$s WHERE survey_id = %3$s', $metric, X_SURVEY_STATISTICS, $sid);
  $res = execute_sql($sql);
  if ($res) { list ($value) = fetch_row($res); return $value; }
  else { $GLOBALS['errmsg'] = mkerror('Unable to fetch statistic for survey'); return false; }
}

function survey_stat_increment($metric, $sid) {
  $cfg =& $GLOBALS['ESPCONFIG'];
  $sql = sprintf('UPDATE %1$s SET %2$s=%2$s+1 WHERE survey_id = %3$s', X_SURVEY_STATISTICS, $metric, $sid);
  $res = execute_sql($sql);
  if (0 == affected_rows()) {
    $sql = sprintf('INSERT INTO %1$s (survey_id, %2$s) VALUES (%3$s, 1)', X_SURVEY_STATISTICS, $metric, $sid);
    $res = execute_sql($sql);
    if (0 == affected_rows()) { $GLOBALS['errmsg'] = mkwarn('Unable to increment statistic for survey'); return false; }
  }
  return true;
}

function survey_stat_decrement($metric, $sid) {
  $cfg =& $GLOBALS['ESPCONFIG'];
  // Only decrement when current value is more than 0. If you need to set negative statistics, use survey_stat_set();
  $sql = sprintf('UPDATE %1$s SET %2$s = %2$s-1 WHERE survey_id = %3$s AND 0 < %2$s', X_SURVEY_STATISTICS, $metric, $sid);
  $res = execute_sql($sql);
  if (0 < affected_rows()) { return true; }
  else { $GLOBALS['errmsg'] = mkwarn('Unable to decrement statistic for survey'); return false; }
}

function survey_stat_set($metric, $sid, $value) {
  $cfg =& $GLOBALS['ESPCONFIG'];
  $sql = sprintf('UPDATE %1$s SET %2$s = %4$s WHERE survey_id = %3$s', X_SURVEY_STATISTICS, $metric, $sid, $value);
  $res = execute_sql($sql);
  if (0 == affected_rows()) {
    $sql = sprintf('INSERT INTO %1$s (survey_id, %2$s) VALUES (%3$s, %4$s)', X_SURVEY_STATISTICS, $metric, $sid, $value);
    $res = execute_sql($sql);
    if (0 == affected_rows()) { $GLOBALS['errmsg'] = mkwarn('Unable to set statistic for survey'); return false; }
  }
  return true;
}

function survey_stat_reset($sid) {
  $ok = true;
  $ok = $ok && survey_stat_purge($sid);
  $ok = $ok && survey_stat_init($sid);
  return $ok;
}

function survey_stat_init($sid) {
  $cfg =& $GLOBALS['ESPCONFIG'];
  $sql = sprintf('INSERT INTO %1$s (survey_id) VALUES (%2$s)', X_SURVEY_STATISTICS, $sid);
  $res = execute_sql($sql);
  if (0 == affected_rows()) { $GLOBALS['errmsg'] = mkerror('Unable to initialize statistics for survey'); return false; }
  return true;
}

function survey_stat_purge($sid) {
  $cfg =& $GLOBALS['ESPCONFIG'];
  $sql = sprintf('DELETE FROM %1$s WHERE survey_id = %2$s', X_SURVEY_STATISTICS, $sid);
  $res = execute_sql($sql);
  if (0 == affected_rows()) { $GLOBALS['errmsg'] = mkerror('Unable to purge statistics for survey'); return false; }
  return true;
}

//  proto bool question_render($question, int question_number)

//    ID     Question type       Has choice?    Table
//    1     'Single answer (SA)'     'Y'        'response_single'
//    2     'Multiple answer (MA)'   'Y'        'response_multiple'
//    3     'Open-end (short)'       'N'        'response_text'
//    4     'Open-end (long)'        'N'        'response_text'
//    5     'Rating scale'           'Y'        'response_rank'
//    6     'Attribute rating'       'Y'        'response_rank'
//    7     'Drop down'              'Y'        'response_single'
//    8     'Date'                   'N'        'response_date'
//    9     'Numeric'                'N'        'response_text'
//    10    'Others'                 'N'        'response_text'
//    99    'Page Break'             'N'        ''
//    100   'Section Text'           'N'        ''


function question_render($question, $question_number, $auto_num, $on_one_line = 0) {
  // process each question
  $qid  = &$question['id'];
  $tid  = &$question['type_id'];
  $size = &$question['length'];
  $prec = &$question['precise'];
  $extra = &$question['extra'];
  $extra_th = &$question['extra_th'];

  $has_choices = esp_type_has_choices();

  if ($has_choices[$tid]) {
    $sql = "SELECT * FROM ".X_QUESTION_CHOICE." WHERE question_id = $qid AND content NOT LIKE '!others%' ORDER BY id ";
    $choices_result = execute_sql($sql, "", ADODB_FETCH_ASSOC);
    $sql = "SELECT * FROM ".X_QUESTION_CHOICE." WHERE question_id = $qid AND content LIKE '!others%' ORDER BY id ";
    $others_result = execute_sql($sql, "", ADODB_FETCH_ASSOC);
    $others = record_count($others_result);
  } else { $choices_result = ''; }

  $questionname = "Q".$question_number.". ";

  if ($question['content_th']) { $questionname .= $question['content_th']; }
  else { $questionname .= $question['content']; }

  echo "\n";

  // Section text (tid=100)
  if ($tid == 100) {
    echo "  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n";
    echo "    <div class=\"well showconcept\">\n";
    if ($question['content_th']) { echo "      <h4>".nl2br($question['content_th'])."</h4>\n"; }
    else { echo "      <h4>".nl2br($question['content'])."</h4>\n"; }
    echo "    </div>\n";
    echo "  </div>\n\n";
    echo "<br>\n";
    return;
  }

  switch ($tid) {

    // Single answer (SA) - radio (tid=1)
    case '1':
    $msg = "คำตอบเดียว / Single answer";
    echo "  <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\" id=\"".$qid."\">\n";
    echo "    <div class=\"panel panel-default\">\n";
    echo "      <div class=\"panel-heading bg-info\"><h4>$questionname</h4><h6>$msg</h6></div>\n";
    echo "      <div class=\"panel-body clearfix\">\n";
    while ($choice = fetch_row($choices_result)) {
      $choices_result->MoveNext();
      $ridd = $choice['id'];
      if ($choice['content_th']) { echo "      <div class=\"radio radio-primary\">" . mkradio($qid,$ridd) . "<label for=\"$ridd\">" . $choice['content_th'] . "</label></div>\n"; }
      else { echo "      <div class=\"radio radio-primary\">" . mkradio($qid,$ridd) . "<label for=\"$ridd\">" . $choice['content'] . "</label></div>\n"; }
    }
    $j=0;
    while ($other = fetch_row($others_result)) {
      $others_result->MoveNext();
      $cid = $other['id'];
      if (!strcmp($other['content'],"!others")) {
        if ($other['content_th']) { $other_text = $other['content_th']; }
        else { $other_text = 'Others:'; }
      }
      else { $other_text = preg_replace(array("/^!others=/","/^!others/"), array('',''), $other['content']); }
      echo "      <div class=\"radio radio-primary\">" . mkradio($qid,"other_$cid");
      $did = "${qid}_${cid}";
          echo("<label for=\"other_$cid\">$other_text <input class=\"form-control\" type=\"text\" name=\"$did\" onKeyPress=\"other_check(this.name)\"");
          if (isset($_POST[$did])) { echo(' value="'. _stripslashes(htmlspecialchars($_POST[$did])) .'"'); echo(">"); }
            $j++;
            echo "</label></div>\n";
    }
    echo "      </div>\n";
    echo "    </div>\n";
    echo "  </div>\n\n";
    break;

    // Multiple answer (MA) - checkbox (tid=2)
    case '2':
    $msg = "หลายคำตอบ / Multiple answer";
    echo "  <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\" id=\"".$qid."\">\n";
    echo "    <div class=\"panel panel-default\">\n";
    echo "      <div class=\"panel-heading bg-info\"><h4>$questionname</h4><h6>$msg</h6></div>\n";
    echo "      <div class=\"panel-body clearfix\">\n";
    while ($choice = fetch_row($choices_result)) {
      $choices_result->MoveNext();
      $ridd = $choice['id'];
      if ($choice['content_th']) { echo "      <div class=\"checkbox checkbox-primary\">" . mkcheckbox($qid,$ridd) . "<label for=\"$ridd\">" . $choice['content_th'] . "</label></div>\n"; }
      else { echo "      <div class=\"checkbox checkbox-primary\">" . mkcheckbox($qid,$ridd) . "<label for=\"$ridd\">" . $choice['content'] . "</label></div>\n"; }
    }
    $j=0;
    while ($other = fetch_row($others_result)) {
      $others_result->MoveNext();
      $cid = $other['id'];
      if (!strcmp($other['content'],"!others")) {
        if ($other['content_th']) { $other_text = $other['content_th']; }
        else { $other_text = 'Others:'; }
      }
      else { $other_text = preg_replace(array("/^!others=/","/^!others/"), array('',''), $other['content']); }
      echo "      <div class=\"checkbox checkbox-primary\">" . mkcheckbox($qid,"other_$cid");
          $did = "${qid}_${cid}";
          echo "<label for=\"other_$cid\">$other_text <input class=\"form-control\" type=\"text\" name=\"$did\" onKeyPress=\"other_check(this.name)\"";
          if (isset($_POST[$did])) { echo(' value="'. _stripslashes(htmlspecialchars($_POST[$did])) .'"'); echo(">"); }
      $j++;
      echo "</label></div>\n";
    }
    echo "      </div>\n";
    echo "    </div>\n";
    echo "  </div>\n\n";
    break;

    // Single-line open-end (tid=3)
    case '3':
    $msg = "บันทึกคำตอบ / Fill in your answer";
    echo "  <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\" id=\"".$qid."\">\n";
    echo "    <div class=\"panel panel-default\">\n";
    echo "      <div class=\"panel-heading bg-info\"><h4>$questionname</h4><h6>$msg</h6></div>\n";
    echo "      <div class=\"panel-body clearfix\">\n";
    if ($extra_th) { $insert = $extra_th; }
    elseif ($extra) { $insert = $extra; }
    if ($extra || $extra_th) {
      echo "      <div class=\"input-group\">\n";
      echo(mktext($qid, $size, $prec));
      echo "        <span class=\"input-group-addon\">".$insert."</span>\n";
      echo "      </div>\n";
    } else {
      echo(mktext($qid, $size, $prec));
    }
    echo "      </div>\n";
    echo "    </div>\n";
    echo "  </div>\n\n";
    break;

    // Multi-line open-end (tid=4)
    case '4':
    $msg = "บันทึกคำตอบ / Fill in your answer";
    echo "  <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\" id=\"".$qid."\">\n";
    echo "    <div class=\"panel panel-default\">\n";
    echo "      <div class=\"panel-heading bg-info\"><h4>$questionname</h4><h6>$msg</h6></div>\n";
    echo "      <div class=\"panel-body clearfix\">\n";
    echo(mktextarea($qid, $prec, $size, 'virtual'));
    echo "      </div>\n";
    echo "    </div>\n";
    echo "  </div>\n\n";
    break;

    // Rating scale (tid=5)
    case '5':
    $msg = "คำตอบเดียว / Single answer";
    echo "  <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\" id=\"".$qid."\">\n";
    echo "    <div class=\"panel panel-default\">\n";
    echo "      <div class=\"panel-heading bg-info\"><h4>$questionname</h4><h6>$msg</h6></div>\n";
    echo "      <div class=\"panel-body clearfix\">\n";
    while ($choice = fetch_row($choices_result)) {
      $choices_result->MoveNext();
      $ridd = $choice['id'];
      if ($choice['content_th']) { echo "      <div class=\"radio\">" . mkradio($qid,$ridd) . "<label for=\"$ridd\">" .$choice['content_th']."</label></div>\n"; }
      else { echo "      <div class=\"radio\">" . mkradio($qid,$ridd) . "<label for=\"$ridd\">" .$choice['content']."</label></div>\n"; }
    }
    echo "      </div>\n";
    echo "    </div>\n";
    echo "  </div>\n\n";
    break;

    // Attribute rating (tid=6)
    case '6':
    $msg = "คำตอบเดียว / Single answer";
    echo "  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\" id=\"".$qid."\">\n";
    echo "    <div class=\"panel panel-default\">\n";
    echo "      <div class=\"panel-heading bg-info\"><h4>$questionname</h4><h6>$msg</h6></div>\n";
    echo "      <div class=\"panel-body clearfix\">\n";
    if ($size == '0') { $size = '5'; }
    echo "      <table class=\"table table-hover table-condensed\">\n";
    echo "        <tr class=\"active\">\n";
    echo "          <td>Attributes</td>\n";
    for ($j = 0; $j < $size; $j++) {
      $k = $j+1;
      echo "          <td align=\"right\"><div class=\"radio radio-primary\">".$k."</div></td>\n";
    }
    if ($prec) {
      echo "          <td align=\"right\"><div class=\"radio radio-primary\">N/A</div></td>\n";
    }
    echo "        </tr>\n";

    while ($choice = fetch_row($choices_result)) {
      $choices_result->MoveNext();
      $cid = $choice['id'];
      $str = "${qid}_$cid";
      echo "        <tr>\n";
      if ($choice['content_th']) { echo "          <td>".$choice['content_th']."</td>\n"; }
      else { echo "          <td>".$choice['content']."</td>\n"; }
      for ($j = 0; $j < $size; $j++) {
        $k = $j+1;
        echo "          <td align=\"right\"><div class=\"radio radio-primary\">".mkradio($str,$k)."<label for=\"$k\"></label></div></td>\n";
      }
      if ($prec) {
        echo "          <td align=\"right\"><div class=\"radio radio-primary\">".mkradio($str,'-1')."<label for=\"-1\"></label></div></td>\n";
      }
      echo "        </tr>\n";
    }
    echo "      </table>\n";
    echo "      </div>\n";
    echo "    </div>\n";
    echo "  </div>\n\n";
    break;

    // Drop down (tid=7)
    case '7':
    $msg = "คำตอบเดียว / Single answer";
    echo "  <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\" id=\"".$qid."\">\n";
    echo "    <div class=\"panel panel-default\">\n";
    echo "      <div class=\"panel-heading bg-info\"><h4>$questionname</h4><h6>$msg</h6></div>\n";
    echo "      <div class=\"panel-body clearfix\">\n";
    while ($choice = fetch_row($choices_result)) {
      $choices_result->MoveNext();
      if ($choice['content_th']) { $options[$choice['id']] = $choice['content_th']; }
      else { $options[$choice['id']] = $choice['content']; }
    }
    if ($extra_th) { $insert = $extra_th; }
    elseif ($extra) { $insert = $extra; }
    if ($extra || $extra_th) {
      echo "      <div class=\"input-group\">\n";
      echo mkselect($qid, $options);
      echo "        <span class=\"input-group-addon\">".$insert."</span>\n";
      echo "      </div>\n";
    } else {
      echo mkselect($qid, $options);
    }
    echo "      </div>\n";
    echo "    </div>\n";
    echo "  </div>\n\n";
    break;

    // Date (tid=8)
    case '8':
    $msg = "บันทึกคำตอบ / Fill in your answer";
    echo "  <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\" id=\"".$qid."\">\n";
    echo "    <div class=\"panel panel-default\">\n";
    echo "      <div class=\"panel-heading bg-info\"><h4>$questionname</h4><h6>$msg</h6></div>\n";
    echo "      <div class=\"panel-body clearfix\">\n";
    if ($extra_th) { $insert = $extra_th; }
    elseif ($extra) { $insert = $extra; }
    if ($extra || $extra_th) {
      echo "      <div class=\"input-group\">\n";
      echo(mktext($qid, 10, 10));
      echo "<em>(This format only: ". strftime (FORMAT_DATE, strtotime("now")) .")</em>\n";
      echo "        <span class=\"input-group-addon\">".$insert."</span>\n";
      echo "      </div>\n";
    } else {
      echo(mktext($qid, 10, 10));
      echo "<em>(This format only: ". strftime (FORMAT_DATE, strtotime("now")) .")</em>\n";
    }
    echo "      </div>\n";
    echo "    </div>\n";
    echo "  </div>\n\n";
    break;

    // Numeric (tid=9)
    case '9':
    $msg = "บันทึกคำตอบ / Fill in your answer";
    echo "  <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\" id=\"".$qid."\">\n";
    echo "    <div class=\"panel panel-default\">\n";
    echo "      <div class=\"panel-heading bg-info\"><h4>$questionname</h4><h6>$msg</h6></div>\n";
    echo "      <div class=\"panel-body clearfix\">\n";
    $size++; // for sign
    if ($prec) { $size += 1 + $prec; }
    if ($extra_th) { $insert = $extra_th; }
    elseif ($extra) { $insert = $extra; }
    if ($extra || $extra_th) {
      echo "      <div class=\"input-group\">\n";
      echo mktext($qid, $size, $size);
      echo "        <span class=\"input-group-addon\">".$insert."</span>\n";
      echo "      </div>\n";
    } else {
      echo mktext($qid, $size, $size);
    }
    echo "      </div>\n";
    echo "    </div>\n";
    echo "  </div>\n\n";
    break;

    // Others (tid=10)
    case '10':
    $msg = "บันทึกคำตอบ / Fill in your answer";
    echo "  <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\" id=\"".$qid."\">\n";
    echo "    <div class=\"panel panel-default\">\n";
    echo "      <div class=\"panel-heading bg-info\"><h4>$questionname</h4><h6>$msg</h6></div>\n";
    echo "      <div class=\"panel-body clearfix\">\n";
    echo(mktext($qid, $size, $prec));
    echo "      </div>\n";
    echo "    </div>\n";
    echo "  </div>\n\n";
    break;
  }
  return;
}

function survey_render($sid, $section = 1, $rid=0, $message = '') {
  global $preview;
  @reset($_POST);
  if (empty($section)) { $section = 1; }
  $sql = "SELECT * FROM ".X_SURVEY." WHERE id = ${sid}";
  $result = execute_sql($sql,"", ADODB_FETCH_ASSOC);
  if (record_count($result) != 1) { return(false); }
  $survey = fetch_row($result);
  db_close($result);
  $sections = survey_get_sections($sid);
  $num_sections = count($sections);
  if ($section-- > $num_sections) { return(false); } // invalid section
  $section_questions = survey_get_section_questions($sid);
  $sec_sql = array_to_insql($sections[$section]);
  $sql = "SELECT * FROM ".X_QUESTION." WHERE id $sec_sql ORDER BY position,id ";
  $questions_result = execute_sql($sql,"", ADODB_FETCH_ASSOC);
  if (record_count($questions_result) < 1) { return(false); }

  $i=0;
  for ($j=0; $j<$section; $j++) { $i += count($section_questions[$j]); }

  echo "<h2>Project ".$survey["title"]." ";
  if ($survey["subtitle_th"]) { echo "<small>(".$survey["subtitle_th"].")</small>"; }
  else { echo "<small>(".$survey["subtitle"].")</small>"; }
  echo "</h2>\n";
  echo "<br>\n\n";

  echo "<div class=\"well showprojectdetail\">\n";
  if ($survey["info_th"]) { echo "<p>".nl2br($survey["info_th"])."</p>\n\n"; }
  else { echo "<p>".nl2br($survey["info"])."</p>\n\n"; }
  echo "</div>\n";

  if (!$preview) {
    echo "<span class=\"ubuntu\"><small>PROGRESS:</small></span>\n";
    echo progressbar($_SESSION['sec'], $num_sections);
    echo "\n\n";
  }

  echo "<div class=\"row\">\n";

  $questions_shown = 0;
  while ($question = fetch_row($questions_result)) {
    $questions_result->MoveNext();
    $i++;
    // process each question
    $qid = &$question['id'];
    $tid = &$question['type_id'];
    if ($tid == 100) { $i--; }

    if (question_conditioncheck($sid, $qid, $rid)) { $questions_shown = 1; question_render($question, $i, $survey['auto_num']); }
    elseif (isset($_POST['tab']) && ($_POST['tab']=="preview")) { $questions_shown = 1; question_render($question, $i, $survey['auto_num']); }
  }

  if ($questions_shown == 0) { echo "<p>No questions in this section.</p>\n"; echo "<br><br>\n\n"; }
  echo "</div>\n\n";
  return;
}

function isequal (&$val1, &$val2) {
  return $val1 == $val2;
}

function isnequal (&$val1, &$val2) {
  return $val1 != $val2;
}

function issmallerthan (&$val1, &$val2) {
  return $val1 < $val2;
}

function isbiggerthan (&$val1, &$val2) {
  return $val1 > $val2;
}

function question_conditioncheck($sid, $qid, $rid) {
  $conditions[0] = "isequal";
  $conditions[1] = "isnequal";
  $conditions[2] = "issmallerthan";
  $conditions[3] = "isbiggerthan";
  $return_result = TRUE;
  $sql = "SELECT * FROM ".X_CONDITION." WHERE q1_id = '$qid'";
  $result = execute_sql($sql);
  # If there are no conditions, we need to show the question, so we return true
  if (record_count($result) == 0) { return true; }
  while (list($id, $sid, $q1_id, $q2_id, $cond, $cond_val) = fetch_row($result)) {
    $result->MoveNext();
    if ($rid>0) {
      $resp = array();
      $resp = response_select($sid, $rid, $col = null, array($q2_id));
      if (isset($resp[$q2_id])) {
        $resp_val = $resp[$q2_id][0];
        // for dropdown and some other types, this value is an array
        // we take the value (for now) and not the index ...
        if (is_array($resp_val)) { $resp_val = $resp_val[0]; }
        // the condition is fullfilled, so we need to show the question
        if (call_user_func($conditions[$cond], $resp_val, $cond_val) == TRUE) { return true; }
      }
    }
  }
  return false;
}

function progress($step = NULL) {
  if (empty($step)) { $step = 1; }
  if ($step == "1") { $a = "<li class=\"progress-step is-active\">"; $b = "<li class=\"progress-step\">"; $c = "<li class=\"progress-step\">"; }
  elseif ($step == "2") { $a = "<li class=\"progress-step is-completed\">"; $b = "<li class=\"progress-step is-active\">"; $c = "<li class=\"progress-step\">"; }
  elseif ($step == "3") { $a = "<li class=\"progress-step is-completed\">"; $b = "<li class=\"progress-step is-completed\">"; $c = "<li class=\"progress-step is-active\">"; }
?>
<ul class="progress-tracker progress-tracker--text progress-tracker--center">
  <?php echo $a; ?>
    <span class="progress-marker"></span>
    <span class="progress-text">
      <span class="progress-title">Step 1</span>
      Set up
    </span>
  </li>
  <?php echo $b; ?>
    <span class="progress-marker"></span>
    <span class="progress-text">
      <span class="progress-title">Step 2</span>
      Data collection
    </span>
  </li>
  <?php echo $c; ?>
    <span class="progress-marker"></span>
    <span class="progress-text">
      <span class="progress-title">Step 3</span>
      Completed
    </span>
  </li>
</ul>
<?php
}

function survey_listing($start = "0", $limit = "5", $page = NULL) {
  $sids = array();
  if (!empty($_POST['list'])) { while (list(,$sid) = each($_POST['list'])) { array_push($sids, intval($sid)); } survey_purge($sids); }
  if (empty($start)) { $start = 0; }
  if (empty($limit)) { $limit = 5; }
  if ($page) { $start = ($page-1) * $limit; }
  $to_record = $start + $limit;
  $add = " LIMIT $start, $limit ";
  if ($_SESSION['acl']['superuser'] == 'Y') {
    $sql1 = "SELECT s.id, s.name, s.title, s.status, s.owner, s.realm, COUNT(q.id) as count FROM ".X_SURVEY." s LEFT JOIN ".X_QUESTION." q ON s.id = q.survey_id AND q.deleted = 'N' GROUP BY s.id, s.name, s.title, s.status, s.owner, s.realm ORDER BY s.id DESC ";
    $sql2 = "SELECT s.id, s.name, s.title, s.status, s.owner, s.realm, COUNT(q.id) as count FROM ".X_SURVEY." s LEFT JOIN ".X_QUESTION." q ON s.id = q.survey_id AND q.deleted = 'N' GROUP BY s.id, s.name, s.title, s.status, s.owner, s.realm ORDER BY s.id DESC " . $add;
  } else {
    $realms = array_to_insql(array_intersect($_SESSION['acl']['pall'], array_merge($_SESSION['acl']['pall'], $_SESSION['acl']['pdesign'])));
    $sql1 = "SELECT s.id, s.name, s.title, s.status, s.owner, s.realm, COUNT(q.id) as count FROM ".X_SURVEY." s LEFT JOIN ".X_QUESTION." q ON s.id = q.survey_id AND q.deleted = 'N' GROUP BY s.id, s.name, s.title, s.status, s.owner, s.realm ORDER BY s.id DESC ";
    $sql2 = "SELECT s.id, s.name, s.title, s.status, s.owner, s.realm, COUNT(q.id) as count FROM ".X_SURVEY." s LEFT JOIN ".X_QUESTION." q ON s.id = q.survey_id AND q.deleted = 'N' GROUP BY s.id, s.name, s.title, s.status, s.owner, s.realm ORDER BY s.id DESC " . $add;
  }
  $result1 = execute_sql($sql1);
  $result2 = execute_sql($sql2);
  $rows = record_count($result1);
  if ($to_record > $rows) { $to_record = $rows; }
  $from_record = $start + 1;

  echo "<h2>Listing your surveys</h2>\n";
  echo "<p>You have a total of $rows $type projects (showing results $from_record to $to_record)</p>\n";
  echo "<div class=\"row\">\n";

  $realms = array_intersect($_SESSION['acl']['pstatus'], array_merge($_SESSION['acl']['pall'], $_SESSION['acl']['pstatus']));
  while (list($sid, $name, $title, $status, $owner, $realm, $qnum) = fetch_row($result2)) {
    echo "<div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6 manage-border-space\">\n";
    echo "<div class=\"manage-listing\">\n";
    $result2->MoveNext();

    $tt1 = htmlspecialchars(MYSURVEY."?name=".$name);
    $tt2 = htmlspecialchars(MYSURVEY."?name=".$name."&test=1");
    $tt3 = htmlspecialchars(MYADMIN."?w=tab&newid=".$sid);
    $tt4 = htmlspecialchars(MYADMIN."?w=copy&sid=".$sid);
    $tt5 = htmlspecialchars(MYADMIN."?w=results&sid=".$sid);
    $tt6 = htmlspecialchars(MYADMIN."?w=results&sid=".$sid."&type=cross");
    $tt7 = htmlspecialchars(MYADMIN."?w=dpspec&sid=".$sid);

    // results
    $flexx = "<a href=\"$tt5\">Result <i class=\"pe-pie-chart pe-fw\"></i></a> | \n";
    $flexx .= "<a href=\"$tt6\">Cross tab <i class=\"pe-bar-chart pe-fw\"></i></a> | \n";
    $flexx .= "<a href=\"$tt7\">DP spec <i class=\"pe-table pe-fw\"></i></a>\n";

    if ($status & STATUS_DELETED) {
      $stat = "Archived";
      $progress = "3";
      $test1 = 'Archived';
      $test2 = 'Archived';
      $done = '&nbsp;';
      $act = '&nbsp;';
      $del = '&nbsp;';
    } elseif ($status & STATUS_DONE) {
      $stat = "Ended";
      $progress = "3";
      $test1 = $act = '&nbsp;';
      $test2 = $act = '&nbsp;';
      $done = '&nbsp;';
      $act = '&nbsp;';
      $del = '&nbsp;';
    } elseif ($status & STATUS_ACTIVE) {
      $stat = "Active";
      $progress = "2";
      $test1 = "<span class=\"label label-success\"><i class=\"pe-check pe-fw\"></i> Active</span>";
      $test2 = "[".$results."]";
      $done = '&nbsp;';
      $act = '&nbsp;';
      $del = '&nbsp;';
    } elseif ($status & STATUS_TEST) {
      $stat = "Testing";
      $progress = "1";
      $test1 = "<span class=\"label label-warning\"><i class=\"pe-paper-plane pe-fw\"></i> Testing</span>";
      $test2 = "[ <a href=\"".htmlspecialchars(MYADMIN."?w=status&op=m&sid=".$sid)."\">change to Editing</a> ]";
      $done = '&nbsp;';
      $act = '&nbsp;';
      $del = '&nbsp;';
    } else {
      $stat = "Editing";
      $progress = "1";
      $test1 = "<span class=\"label label-danger\"><i class=\"pe-pencil-square-o pe-fw\"></i> Editing</span>";
      $test2 = "[ <a href=\"".htmlspecialchars(MYADMIN."?w=status&op=t&sid=".$sid)."\">change to Testing</a> ]";
      if ($_SESSION['acl']['superuser'] == 'Y') { $done = "<a href=\"".htmlspecialchars(MYADMIN."?w=status&op=e&sid=".$sid)."\"><i class=\"pe-trash-o pe-fw\"></i></a>"; }
      else { $done = '&nbsp;'; }
      $act  = "<a href=\"".htmlspecialchars(MYADMIN."?w=status&op=a&sid=".$sid)."\" onclick='return activateConfirm()'><i class=\"pe-toggle-on pe-fw\"></i></a>";
      $del  = "<a href=\"".htmlspecialchars(MYADMIN."?w=status&op=d&sid=".$sid)."\"><i class=\"pe-archive pe-fw\"></i></a>";
    }
    if ($_SESSION['acl']['superuser'] != 'Y' && !in_array($realm, $realms)) {
      $act  = '&nbsp;';
      $done = '&nbsp;';
      $del  = '&nbsp;';
    }
    if ($stat == 'Active') { $title = "<a href=\"$tt1\">$title</a>"; }
    elseif ($stat == 'Testing') { $title = "<a href=\"$tt2\">$title</a>"; }
    elseif ($stat == 'Editing') { $title = "<a href=\"$tt3\">$title</a>"; }
    elseif ($stat == 'Archived') { $title = $title; }
    else { $title = $title; }
    // edit/copy & activate/end
    $copy = "<a href=\"$tt4\"><i class=\"pe-files-o pe-fw\"></i></a>\n";
    if ($stat == 'Active') { $act = ""; }
    elseif ($stat == 'Testing') { $act = "<a href=\"$tt2\"><i class=\"pe-paper-plane pe-fw\"></i></a> $copy $act $done"; }
    elseif ($stat == 'Editing') { $act = "<a href=\"$tt3\"><i class=\"pe-pencil-square-o pe-fw\"></i></a> $copy $act $done"; }
    elseif ($stat == 'Archived') { $act = ""; }
    else { $act = "<i class=\"pe-pencil-square-o pe-fw\"></i>"; }

    echo "<h3>$title</h3>\n";
    echo progress($progress);
    echo "<p>Owner: $owner </p>\n";
    echo "<p>Company: $realm</p>\n";
    echo "<p>No. of questions: $qnum</p>\n";
    echo "<p>Status: $test2</p>\n";
    echo "<p>Results: $flexx</p>\n";
    echo "<p>Tools <small>(edit/copy/activate)</small>: $act</p>\n";
    if ($_SESSION['acl']['superuser'] == 'Y') { echo "Delete?: \n"; }
    echo "<p>$test1</p>\n";
    echo "</div>\n";
    echo "</div>\n";
  }
  echo "  </div>\n";

  $total = ceil($rows/$limit);
  $offset = ($currentpage - 1) * $rowsperpage;
  echo "<nav class=\"pagination-centered\">\n";
  echo "<ul class=\"pagination\">\n";
  if ($page > 1) { $previous = $page-1; echo "<li><a class=\"btn btn-sm btn-default\" role=\"button\" href=\"".MYADMIN."?&p=".$previous."\">&laquo;</a></li>\n"; }
  else { echo "<li class=\"disabled\"><a class=\"btn btn-sm btn-warning\" role=\"button\" href=\"\">&laquo;</a></li>\n"; }
  for ($i=1; $i<=$total; $i++) {
    if ($i == $page) { echo "<li class=\"active\"><a class=\"btn btn-sm btn-default\" role=\"button\" href=\"".MYADMIN."?&p=".$i."\">".$i."</a></li>\n"; }
    else { echo "<li><a class=\"btn btn-sm btn-default\" role=\"button\" href=\"".MYADMIN."?&p=".$i."\">".$i."</a></li>\n"; }
  }
  if ($page != $total) { $next = $page+1; echo "<li><a class=\"btn btn-sm btn-default\" role=\"button\" href=\"".MYADMIN."?&p=".$next."\">&raquo;</a></li>\n"; }
  else { echo "<li class=\"disabled\"><a class=\"btn btn-sm btn-warning\" role=\"button\" href=\"\">&raquo;</a></li>\n"; }
  echo "</ul>\n";
  echo "</nav>\n\n";
  echo "<br>\n\n";
  echo "<ul class=\"pe-ul\">\n";
  echo "  <li><i class=\"pe-li pe-check-square\"></i><strong>Test</strong> transitions a survey into testing mode. At which point you may perform a live test by taking the survey, and viewing the results. The survey may be switched back into <strong>Edit</strong> mode if additional edits are needed.</li>\n";
  echo "  <li><i class=\"pe-li pe-check-square\"></i><strong>Activate</strong> transitions a survey into active mode. In this mode the survey is open for production use, and may be put online. This will clear any results from testing mode (if any). No further editing of survey is allowed.</li>\n";
  echo "  <li><i class=\"pe-li pe-check-square\"></i><strong>End</strong> transitions a survey into ended mode. In this mode, <u>no edits are possible</u>, no users may take the survey (it is inactive), but results are still viewable from the results menu.</li>\n";
  echo "  <li><i class=\"pe-li pe-check-square\"></i><strong>Archive</strong> removes this survey. It is still stored in the database, but no further interaction is allowed. You may <b>not</b> view the results of an archived survey.</li>\n";
  echo "</ul>\n";
  echo "<br>\n";
}

function survey_status($start = "0", $limit = "5", $page = NULL) {
  $sids = array();
  if (!empty($_POST['list'])) { while (list(,$sid) = each($_POST['list'])) { array_push($sids, intval($sid)); } survey_purge($sids); }
  if ($page) { $start = ($page-1) * $limit; }
  $to_record = $start + $limit;
  $add = " LIMIT $start, $limit ";
  if ($_SESSION['acl']['superuser'] == 'Y') {
    $sql1 = "SELECT s.id,s.name,s.title,s.status,s.owner,s.realm,COUNT(q.id) as count FROM ".X_SURVEY." s LEFT JOIN ".X_QUESTION." q ON s.id = q.survey_id AND q.deleted = 'N' GROUP BY s.id, s.name, s.title, s.status, s.owner, s.realm ORDER BY s.id DESC ";
    $sql2 = "SELECT s.id,s.name,s.title,s.status,s.owner,s.realm,COUNT(q.id) as count FROM ".X_SURVEY." s LEFT JOIN ".X_QUESTION." q ON s.id = q.survey_id AND q.deleted = 'N' GROUP BY s.id, s.name, s.title, s.status, s.owner, s.realm ORDER BY s.id DESC " . $add;
  } else {
    $realms = array_to_insql(array_intersect($_SESSION['acl']['pall'], array_merge($_SESSION['acl']['pall'], $_SESSION['acl']['pdesign'])));
    $sql1 = "SELECT s.id,s.name,s.title,s.status,s.owner,s.realm,COUNT(q.id) as count FROM ".X_SURVEY." s LEFT JOIN ".X_QUESTION." q ON s.id = q.survey_id AND q.deleted = 'N' GROUP BY s.id, s.name, s.title, s.status, s.owner, s.realm ORDER BY s.id DESC ";
    $sql2 = "SELECT s.id,s.name,s.title,s.status,s.owner,s.realm,COUNT(q.id) as count FROM ".X_SURVEY." s LEFT JOIN ".X_QUESTION." q ON s.id = q.survey_id AND q.deleted = 'N' GROUP BY s.id, s.name, s.title, s.status, s.owner, s.realm ORDER BY s.id DESC " . $add;
  }
  $result1 = execute_sql($sql1);
  $result2 = execute_sql($sql2);
  $rows = record_count($result1);
  if ($to_record > $rows) { $to_record = $rows; }
  $from_record = $start + 1;
  echo "<p class=\"text-right\">showing results $from_record to $to_record [<a href=\"".MYADMIN."?w=status"."\">total of $rows</a>]</p>";
  echo "<table class=\"table table-hover\">\n";
  echo "  <tr class=\"active\">\n";
  echo "    <th>Project</th>\n";
  echo "    <th>Owner (Group)</th>\n";
  echo "    <th>No. of questions</th>\n";
  echo "    <th>Status</th>\n";
  echo "    <th>Tools<br><small>[edit/copy/activate]</small></th>\n";
  //if ($_SESSION['acl']['superuser'] == 'Y') { echo "    <th>Delete?</th>\n"; }
  echo "  </tr>\n";

  $realms = array_intersect($_SESSION['acl']['pstatus'], array_merge($_SESSION['acl']['pall'], $_SESSION['acl']['pstatus']));
  while (list($sid,$name,$title,$status,$owner,$realm,$qnum) = fetch_row($result2)) {
    $result2->MoveNext();
    $tt1 = htmlspecialchars(MYSURVEY."?name=".$name);
    $tt2 = htmlspecialchars(MYSURVEY."?name=".$name."&test=1");
    $tt3 = htmlspecialchars(MYADMIN."?w=tab&newid=".$sid);
    $tt4 = htmlspecialchars(MYADMIN."?w=copy&sid=".$sid);
    $tt5 = htmlspecialchars(MYADMIN."?w=results&sid=".$sid);
    $tt6 = htmlspecialchars(MYADMIN."?w=results&sid=".$sid."&type=cross");
    $tt7 = htmlspecialchars(MYADMIN."?w=dpspec&sid=".$sid);
    // results
    $results = "<a href=\"$tt5\">Result <i class=\"pe-pie-chart pe-fw\"></i></a> | \n";
    $results .= "<a href=\"$tt6\">Cross tab <i class=\"pe-bar-chart pe-fw\"></i></a> | \n";
    $results .= "<a href=\"$tt7\">DP spec <i class=\"pe-table pe-fw\"></i></a>\n";
    if ($status & STATUS_DELETED) {
      $stat = "Archived";
      $test = 'Archived';
      $done = '&nbsp;';
      $act = '&nbsp;';
      $del = '&nbsp;';
    } elseif ($status & STATUS_DONE) {
      $stat = "Ended";
      $test = $act = '&nbsp;';
      $done = '&nbsp;';
      $act = '&nbsp;';
      $del = '&nbsp;';
    } elseif ($status & STATUS_ACTIVE) {
      $stat = "Active";
      $test = "<span class=\"label label-success\"><i class=\"pe-check pe-fw\"></i> Active</span> <small>[".$results."]</small>";
      $done = '&nbsp;';
      $act = '&nbsp;';
      $del = '&nbsp;';
    } elseif ($status & STATUS_TEST) {
      $stat = "Testing";
      $test = "<span class=\"label label-warning\"><i class=\"pe-paper-plane pe-fw\"></i> Testing</span> <small>[ <a href=\"".htmlspecialchars(MYADMIN."?w=status&op=m&sid=".$sid)."\">change to Editing</a> ]</small>";
      $done = '&nbsp;';
      $act = '&nbsp;';
      $del = '&nbsp;';
    } else {
      $stat = "Editing";
      $test = "<span class=\"label label-danger\"><i class=\"pe-pencil-square-o pe-fw\"></i> Editing</span> <small>[ <a href=\"".htmlspecialchars(MYADMIN."?w=status&op=t&sid=".$sid)."\">change to Testing</a> ]</small>";
      if ($_SESSION['acl']['superuser'] == 'Y') { $done = "<a href=\"".htmlspecialchars(MYADMIN."?w=status&op=e&sid=".$sid)."\"><i class=\"pe-trash-o pe-fw\"></i></a>"; }
      else { $done = '&nbsp;'; }
      $act  = "<a href=\"".htmlspecialchars(MYADMIN."?w=status&op=a&sid=".$sid)."\" onclick='return activateConfirm()'><i class=\"pe-toggle-on pe-fw\"></i></a>";
      $del  = "<a href=\"".htmlspecialchars(MYADMIN."?w=status&op=d&sid=".$sid)."\"><i class=\"pe-archive pe-fw\"></i></a>";
    }
    // whack things back to permissions set by ACL for everyone _not_ superuser
    if ($_SESSION['acl']['superuser'] != 'Y' && !in_array($realm, $realms)) {
      $act  = '&nbsp;';
      $done = '&nbsp;';
      $del  = '&nbsp;';
    }
    echo "  <tr>\n";
    // title
    if ($stat == 'Active') { echo "    <td><a href=\"$tt1\">$title</a></td>\n"; }
    elseif ($stat == 'Testing') { echo "    <td><a href=\"$tt2\">$title</a></td>\n"; }
    elseif ($stat == 'Editing') { echo "    <td><a href=\"$tt3\">$title</a></td>\n"; }
    elseif ($stat == 'Archived') { echo "    <td>$title</td>\n"; }
    else { echo "    <td>$title</td>\n"; }
    // user/group
    echo "    <td>$owner ($realm)</td>\n";
    // question numbers
    echo "    <td class=\"text-center\">$qnum</td>\n";
    // test or edit
    echo "    <td>$test</td>\n";
    // edit/copy & activate/end
     $copy = "<a href=\"$tt4\"><i class=\"pe-files-o pe-fw\"></i></a>\n";
    if ($stat == 'Active') { echo "    <td>&nbsp;</td>\n"; }
    elseif ($stat == 'Testing') { echo "    <td><a href=\"$tt2\"><i class=\"pe-paper-plane pe-fw\"></i></a> $copy $act $done</td>\n"; }
    elseif ($stat == 'Editing') { echo "    <td><a href=\"$tt3\"><i class=\"pe-pencil-square-o pe-fw\"></i></a> $copy $act $done</td>\n"; }
    elseif ($stat == 'Archived') { echo "    <td>&nbsp;</td>\n"; }
    else { echo "    <td><i class=\"pe-pencil-square-o pe-fw\"></i></td>\n"; }
    // delete (disable)
    //echo "    <td>$del</td>\n";
    //if ($_SESSION['acl']['superuser'] == 'Y') {
    //  //echo "    <td><input type=\"checkbox\" name=\"list[]\" value=\"$sid\">";
    //  //echo "<p class=\"text-center\">\n";
    //  //echo "<td \"text-center\">\n";
    //  echo "<td class=\"text-right\">\n";
    //  if ($status & STATUS_DELETED) {
    //    echo "Deleted\n";
    //  } else {
    //    echo "<input type=\"checkbox\" name=\"list[]\" value=\"$sid\">";
    //  }
    //  echo "</td>\n\n";
    //  //echo "<input class=\"btn btn-default\" type=\"reset\" name=\"reset\" value=\"Clear Checks\">\n";
    //  //echo "</p>\n\n";
    //
    //}
    echo "  </tr>\n";
  }
  echo "</table>\n\n";

  //if ($_SESSION['acl']['superuser'] == 'Y') {
  //
  //  echo "<p class=\"text-right\">\n";
  //  echo "<input type=\"hidden\" name=\"where\" value=\"purge\"> &nbsp; \n";
  //  $confirmText = "You are about to PERMANENTLY and IRREVOCABLY remove ALL information about the selected surveys. Click Ok if you are absolutely //sure this is what you want to do.\n";
  //  echo "<input class=\"btn btn-danger btn-sm\" type=\"submit\" name=\"submit\" onclick='return confirm(\"You are about to PERMANENTLY and IRREVOCABLY remove ALL information about the selected surveys. Click Ok if you are absolutely sure this is what you want to do.\")' onkeypress='return confirm (\"You are about to PERMANENTLY and IRREVOCABLY remove ALL information about the selected surveys. Click Ok if you //are absolutely sure this is what you want to do.\");' value=\"Delete selected data\">\n";
  //  echo "<input class=\"btn btn-default btn-sm\" type=\"reset\" name=\"reset\" value=\"Clear checks\">";
  //  echo "</p>\n\n";
  //}

  // pagination
  $total = ceil($rows/$limit);
  $offset = ($currentpage - 1) * $rowsperpage;
  echo "<nav class=\"pagination-centered\">\n";
  echo "  <ul class=\"pagination\">\n";
  if ($page > 1) { $previous = $page-1; echo "    <li><a class=\"btn btn-sm btn-default\" href=\"".MYADMIN."?w=status&p=".$previous."\">&laquo;</a></li>\n"; }
  else { echo "    <li class=\"disabled\"><a class=\"btn btn-sm btn-default\" href=\"\">&laquo;</a></li>\n"; }
  for ($i=1; $i<=$total; $i++) {
    if ($i == $page) { echo "    <li class=\"active\"><a class=\"btn btn-sm btn-default\" href=\"".MYADMIN."?w=status&p=".$i."\">".$i."</a></li>\n"; }
    else { echo "    <li><a class=\"btn btn-sm btn-default\" href=\"".MYADMIN."?w=status&p=".$i."\">".$i."</a></li>\n"; }
  }
  if ($page != $total) { $next = $page+1; echo "    <li><a class=\"btn btn-sm btn-default\" href=\"".MYADMIN."?w=status&p=".$next."\">&raquo;</a></li>\n"; }
  else { echo "    <li class=\"disabled\"><a class=\"btn btn-sm btn-default\" href=\"\">&raquo;</a></li>\n"; }
  echo "  </ul>\n";
  echo "</nav>\n\n";
  echo "<br>\n\n";
}

function progressbar($section, $total) {
  $progress = ($section/$total) * 100;
  $progress = round ($progress, 1);
  $output = "<div class=\"progress\">\n";
  $output .= "  <div class=\"progress-bar progress-bar-striped\" role=\"progressbar\" aria-valuenow=\"$progress\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: $progress%\">\n";
  $output .= "   $progress% <span class=\"sr-only\">$progress% completion</span>\n";
  $output .= "  </div>\n";
  $output .= "</div>\n";
  return $output;
}

function autotext($choice_content, $choice_content_th) {
  if ($choice_content_th == '') {
    if ($choice_content == '!others') { $choice_content_th = 'อื่นๆ (ระบุ)'; }
    if ($choice_content == '!others Other (please specify)') { $choice_content_th = 'อื่นๆ (ระบุ)'; }
    if ($choice_content == 'Refused to answer') { $choice_content_th = 'ปฏิเสธ'; }
    if ($choice_content == 'Cannot remember') { $choice_content_th = 'จำไม่ได้'; }
    if ($choice_content == 'Prefer not to answer') { $choice_content_th = 'ปฏิเสธ'; }
    if ($choice_content == 'None of the above') { $choice_content_th = 'ไม่มีที่กล่าวข้างต้น'; }
    if ($choice_content == 'Male') { $choice_content_th = 'ผู้ชาย'; }
    if ($choice_content == 'Female') { $choice_content_th = 'ผู้หญิง'; }
    if ($choice_content == 'SES-A') { $choice_content_th = 'สถานะภาพทางสังคม A'; }
    if ($choice_content == 'SES-B') { $choice_content_th = 'สถานะภาพทางสังคม B'; }
    if ($choice_content == 'SES-C') { $choice_content_th = 'สถานะภาพทางสังคม C'; }
    if ($choice_content == 'SES-D') { $choice_content_th = 'สถานะภาพทางสังคม D'; }
    if ($choice_content == 'SES-E') { $choice_content_th = 'สถานะภาพทางสังคม E'; }
  }
  return $choice_content_th;
}

function ago($time) {
  $periods = array("second", "minute", "hour", "day", "week", "month", "year", "decade");
  $lengths = array("60","60","24","7","4.35","12","10");
  $now = time();
  $difference = $now - $time;
  $tense = "ago";
  for ($j = 0; $difference >= $lengths[$j] && $j < count($lengths)-1; $j++) { $difference /= $lengths[$j]; }
  $difference = round($difference);
  if ($difference != 1) { $periods[$j].= "s"; }
  return "$difference $periods[$j] 'ago' ";
}

function textreplacement($text) {
  $replace = array(
    'wordpress' => '<a href="#">wordpress</a>',
    'excerpt' => '<a href="#">excerpt</a>',
    'function' => '<a href="#">function</a>'
  );
  $text = str_replace(array_keys($replace), $replace, $text);
  return $text;
}

function clickemail($text) {
  $text = eregi_replace('([_\.0-9a-z-]+@([0-9a-z][0-9a-z-]+\.)+[a-z]{2,3})','<a href="mailto:\\1">\\1</a>', $text);
  return $text;
}

function fileWrite($file, $message) {
  fwrite(fopen($file, 'a'), $message . "\n");
}

function fileRead($file) {
  $lines = file($file);
  foreach ($lines as $line_num => $line) { echo "$line</br>\n"; }
}

function decode_json($json) {
  //$json ='{"id":1,"name":"foo","interest":["wordpress","php"]} ';
  $obj = json_decode($json);
  return $obj->interest[1]; //prints php
}

function makelink($str) {
  $reg_exUrl = "/(http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/";
  $urls = array();
  $urlsToReplace = array();
  if (preg_match_all($reg_exUrl, $str, $urls)) {
    $numOfMatches = count($urls[0]);
    $numOfUrlsToReplace = 0;
    for ($i=0; $i<$numOfMatches; $i++) {
      $alreadyAdded = false;
      $numOfUrlsToReplace = count($urlsToReplace);
      for ($j=0; $j<$numOfUrlsToReplace; $j++) { if ($urlsToReplace[$j] == $urls[0][$i]) { $alreadyAdded = true; } }
      if (!$alreadyAdded) { array_push($urlsToReplace, $urls[0][$i]); }
    }
    $numOfUrlsToReplace = count($urlsToReplace);
    for ($i=0; $i<$numOfUrlsToReplace; $i++) { $str = str_replace($urlsToReplace[$i], "<a href=\"".$urlsToReplace[$i]."\">".$urlsToReplace[$i]."</a> ", $str); }
    return $str;
  }
  else { return $str; }
}

function br2newline($input) {
  $out = str_replace( "<br>", "\n", $input );
  $out = str_replace( "<br/>", "\n", $out );
  $out = str_replace( "<br>", "\n", $out );
  $out = str_replace( "<BR>", "\n", $out );
  $out = str_replace( "<BR/>", "\n", $out );
  $out = str_replace( "<br>", "\n", $out );
  return $out;
}

function br2nl($input) {
  return preg_replace('/<br(\s+)?\/?>/i', "\n", $input);
}

function dataURIs($file) {
  $datafile = base64_encode(file_get_contents($file)); // convert gif to data
  return $datafile;
}

function survey_update(&$survey_id, &$tab, $old_tab) {
  global $errstr;
  if (empty($old_tab)) { return(1); }
  $f_arr = array();
  $v_arr = array();
  if (isset($_POST['name'])) {
    $_POST['name'] = preg_replace("/[^A-Z0-9]+/i","_", trim($_POST['name']));
    $_POST['name'] = preg_replace("/(^_|_$)/i","", $_POST['name']);
  }
  // new survey
  if (empty($survey_id)) {
    if (empty($_POST['name']) || empty($_POST['title']) || empty($_POST['realm'])) { $tab = "general"; $errstr = 'Sorry, please fill out the name, group, and title before proceeding.'; return(0); }
    $fields = array('name', 'realm', 'public', 'status', 'open_date', 'close_date', 'title', 'email', 'subtitle', 'subtitle_th', 'info', 'info_th', 'theme', 'thanks_page', 'thank_head', 'thank_body', 'auto_num');
    foreach ($fields as $f) { if (isset($_POST[$f])) { array_push($f_arr,$f); array_push($v_arr, _addslashes($_POST[$f])); } }
    array_push($f_arr, 'owner');
    array_push($v_arr, _addslashes($_SESSION['acl']['username']));
    array_push($f_arr, 'added');
    array_push($v_arr, sys_time_stamp());
    array_push($f_arr, 'changed');
    array_push($v_arr, sys_time_stamp());
    $sql = "INSERT INTO ".X_SURVEY." (" . join(',',$f_arr) . ") VALUES (" . join(',',$v_arr) . ")";
    $result = execute_sql($sql);
    if (!$result) { $tab = "general"; $errstr = 'Sorry, name already in use. Pick a new name.' .' [ ' .ErrorNo().': '.ErrorMsg().' ]'; return(0); }
    $sql = "SELECT id FROM ".X_SURVEY." WHERE name = ".  _addslashes($_POST['name']);
    $result = execute_sql($sql);
    $survey_id = $result->fields[0];
    $sqlaccess = "INSERT INTO ".X_ACCESS." (`survey_id`, `realm`, `maxlogin`, `resume`, `navigate`) VALUES (" . $survey_id . ", 'RD-Email', 10, 'Y', 'Y'), (" . $survey_id . ", 'RD-Facebook', 10, 'Y', 'Y'), (" . $survey_id . ", 'RD-Twitter', 10, 'Y', 'Y'), (" . $survey_id . ", 'RD-Google', 10, 'Y', 'Y')";
    $resultaccess = execute_sql($sqlaccess);
    return(1);
  }

  // survey already started
  switch ($old_tab) {

    case "general":
      if (empty($_POST['name']) || empty($_POST['title']) || empty($_POST['realm'])) { $tab = "general"; $errstr = 'Sorry, please fill out the name, group, and title before proceeding.'; return(0); }
      $fields = array('name', 'realm', 'public', 'open_date', 'close_date', 'title', 'email', 'subtitle', 'subtitle_th', 'info', 'info_th', 'theme', 'thanks_page', 'thank_head', 'thank_head_th', 'thank_body', 'thank_body_th', 'auto_num');
      $sql = "SELECT name FROM ".X_SURVEY." WHERE id = ${survey_id}";
      $name = get_one($sql);

      if ($name != $_POST['name']) { // trying to change survey name
        $sql = "SELECT COUNT(*) FROM ".X_SURVEY." WHERE name = " . _addslashes($_POST['name']);
        $count = get_one($sql);
        if ($count != 0) { $tab = "general"; $errstr = 'Sorry, that name is already in use.'; return(0); }
      }

      array_push($f_arr, 'changed = '.sys_time_stamp()); // UPDATE the row in the DB with current values
      foreach ($fields as $f) { array_push($f_arr, $f ."=" . _addslashes($_POST[$f])); }
      $sql = "UPDATE ".X_SURVEY." SET " . join(', ',$f_arr) . " WHERE id = ${survey_id} ";
      $result = execute_sql($sql);
      if (!$result) {
        $tab = "general";
        $errstr = 'Warning, error encountered.' .' [ '.ErrorNo().': '.ErrorMsg().' ]';
        return(0);
      }
      return(1);

    case "questions":
      if (empty($_POST['content']) && empty($_POST['name'])) { return(1); } // if the question box is empty ... ignore everything else
      if (empty($_POST['content'])) { $tab = 'questions'; $dont_clear = 1; $errstr = 'Please enter text for this question.'; return(0); }
      if (empty($_POST['name'])) {
        $str1 = $_POST['content'];
        do {
          $str2 = $str1;
          $str1 = eregi_replace("(^| )(what|which|why|how|who|where|how|is|are|were|the|a|it|of|do|you|your|please|enter)[ ?]", " ", $str2);
        }
        while ($str1 != $str2);
        $_POST['name'] = $str1;
      }
      $_POST['name'] = strtoupper(preg_replace("/[^A-Z0-9]+/i","_", trim($_POST['name'])));
      $_POST['name'] = preg_replace("/(^_|_$)/i","", $_POST['name']);
      // constraint: question type required
      if (empty($_POST['type_id'])) { $tab = 'questions'; $dont_clear = 1; $errstr= 'Sorry, you must select a type for this question.'; return(0); }
      $_POST['type_id'] = intval($_POST['type_id']);
      if ($_POST['id'] == 'New Field') { $qid = ''; }
      $qid = intval($_POST['id']);  # curr_q_id
      // constraint: can not change between question w/ answer choices and one w/o
      $has_choices = esp_type_has_choices();
      print_r($_SESSION['new_survey']);
      if (!empty($qid)) {
        $sql =  "SELECT Q.type_id FROM ".X_QUESTION." Q WHERE Q.survey_id = ${survey_id} AND Q.id = ${qid} ";
        $old_type_id = get_one($sql);
        if ($has_choices[$_POST['type_id']] != $has_choices[$old_type_id]) { // trying to change between incompatible question types
          $tab = "questions";
          $_POST['type_id'] = $old_type_id;
          $dont_clear = 1;
          $errstr = 'Sorry, you cannot change between those types of question. Create a new question instead.';
          return(0);
        }
      }
      // constraint: length must be int
      $_POST['length'] = intval($_POST['length']) or 0;
      // constraint: precise must be int
      $_POST['precise'] = intval($_POST['precise']) or 0;
      // defaults for length field
      if (empty($_POST['length']) && $_POST['type_id'] < 50) {
        $arr = array(
            0,    // 0: unused
            0,    // 1: Single answer / radio
            0,    // 2: Multiple answer / checkbox
            20,    // 3: Single-line open-end       (width)
            60,    // 4: Multi-line open-end        (width)
            5,    // 5: Rating scale           (#cols)
            5,    // 6: Attribute rating         (#cols)
            0,    // 7: Drop down
            0,    // 8: Date
            10,    // 9: Numeric             (digit)
            0    // 10: Others
        );
        $_POST['length'] = $arr[$_POST['type_id']];
      }
      // defaults for precision field
      if (empty($_POST['precise']) && $_POST['type_id'] < 50) {
        $arr = array(
            0,    // 0: unused
            10,    // 1: Single answer / radio
            0,    // 2: Multiple answer / checkbox
            0,    // 3: Single-line open-end
            5,    // 4: Multi-line open-end        (height)
            0,    // 5: Rating scale           (for N/A)
            0,    // 6: Attribute rating         (for N/A)
            0,    // 7: Drop down
            0,    // 8: Date
            0,    // 9: Numeric             (decimal)
            0    // 10: Others
        );
        $_POST['precise'] = $arr[$_POST['type_id']];
      }
      // UPDATE row in the DB for the current question
      if ($qid != '') {
        // conditional questions can't be required
        //$sql = "SELECT COUNT(*) FROM ".$GLOBALS['ESPCONFIG']['condition_table']." WHERE q1_id='$qid'";
        //$count = get_one($sql);
        //if ($count != 0) {
        //   $_POST['required']='N';
        //}
        $fields = array('name', 'type_id', 'length', 'precise', 'required', 'content', 'content_th', 'ans_uniq', 'extra', 'extra_th');
        foreach ($fields as $f) { if (isset($_POST[$f])) { array_push($f_arr, $f."="._addslashes($_POST[$f])); } }
        $sql = "UPDATE ".X_QUESTION." SET " . join(', ',$f_arr) . " WHERE id = ${qid}";

        // INSERT row in the DB for new question
      } else {
        // set the position to the end
        $sql = "SELECT MAX(position)+1 FROM ".X_QUESTION." WHERE survey_id = ${survey_id} ";
        $_POST['position'] = get_one($sql);
        $_POST['survey_id'] = $survey_id;
        $fields = array('survey_id','name','type_id','length','precise','required','content','content_th','position');
        foreach ($fields as $f) {
          if (isset($_POST[$f])) {
            array_push($f_arr, $f);
            array_push($v_arr, _addslashes($_POST[$f]));
          }
        }
        $sql = "INSERT INTO ".X_QUESTION." (" . join(', ',$f_arr) . ") VALUES (" . join(', ',$v_arr) .")";
      }
      $result = execute_sql($sql);
      if ($qid == '') { $qid = insert_id('question_id_seq'); }
      $_POST['id'] = $qid;
      if (!$result) { $tab = 'questions'; $dont_clear = 1; $errstr = 'Warning, error encountered.' .' [ '.ErrorNo().': '.ErrorMsg().' ]'; return(0); }

      // UPDATE or INSERT rows for each of the question choices for this question
      if ($has_choices[$_POST['type_id']]) {
        $cids = array();
        $sql = "SELECT c.id FROM ".X_QUESTION." q, ".X_QUESTION_CHOICE." c WHERE q.id = c.question_id AND q.survey_id = ${survey_id} ";
        $result = execute_sql($sql);
        for ($i = 0; $i < record_count($result); ++$i) { $result->Move($i); array_push($cids, $result->fields[0]); }
        db_close($result);
        $count = 0;
        for ($i=1; $i<$_POST['num_choices']+1; $i++) {
          $sql = '';
          $choice_id = intval($_POST["choice_id_${i}"]);
          $choice_content = $_POST["choice_content_${i}"];
          $choice_content_th = $_POST["choice_content_th_${i}"];
          $choice_feedback = $_POST["choice_feedback_${i}"];
          $choice_credit = $_POST["choice_credit_${i}"];
          //constraint: for rate questions (type_id=5), we don't allow "!others" as a choice
          if ($_POST['type_id'] == 5 && $choice_content == '!others') { $errstr = 'For rate questions, "!others" is not a possible answer'; return(0); }
          // autotext
          $choice_content_th = autotext($choice_content, $choice_content_th);
          // for safety, we add slashes
          if ($choice_content != '') { $choice_content = _addslashes($choice_content); }
          $choice_content_th = _addslashes($choice_content_th);
          $choice_feedback = _addslashes($choice_feedback);
          $choice_credit = _addslashes($choice_credit);

          if ($choice_id == '' && $choice_content != '') { // new data injected to sql
            $sql = "INSERT INTO ".X_QUESTION_CHOICE." (question_id, content, content_th, feedback, credit) VALUES (${qid}, ${choice_content}, ${choice_content_th}, ${choice_feedback}, ${choice_credit}) ";
            ++$count;
          } elseif ($choice_id != '' && $choice_content == '') { // remove data from sql
            $sql = "DELETE FROM ".X_QUESTION_CHOICE." WHERE id = ${choice_id} ";
          } elseif ($choice_id != '' && ($choice_content != '' || $choice_feedback != '' || $choice_credit != '') && in_array($choice_id, $cids)) {
            $sql = "UPDATE ".X_QUESTION_CHOICE." SET content = ${choice_content}, content_th = ${choice_content_th} WHERE id = ${choice_id}";
            ++$count; // update sql with new data
          }
          if ($sql != '') {
            $result = execute_sql($sql);
            if (!$result) { $tab = 'questions'; $dont_clear = 1; $errstr = 'Warning, error encountered.' .' [ '.ErrorNo().': '.ErrorMsg().' ]'; return(0); }
          }
        }
        if (!$count && !isset($_POST['extra_choices'])) {
          $tab = 'questions';
          $dont_clear = 1;
          $errstr = 'Sorry, you need at least one answer option for this question type.' . ' [ '. _('ID') .': '. $_POST['type_id'] .' ]';
          return(0);
        }
      }
      return(1);

    case "preview":
      return(1); // can not change anything here yet, so no need to update DB.

    case "order":
      if (isset($_POST['questions_order'])) { $questions_order = $_POST['questions_order']; }
      $sid = $survey_id;
      if (isset($_POST['questions_order'])) {
        $sql = "SELECT id, position FROM ".X_QUESTION." WHERE survey_id = $sid AND deleted = 'N' ORDER BY position ";
        $result = execute_sql($sql);
        $max = record_count($result);
        $order = split('\|', $questions_order);
        for ($i = 0; $i < count($order); $i++) {
          $ord = _addslashes($order[$i]);
          $sql = "UPDATE ".X_QUESTION." SET position = $i WHERE id = $ord AND survey_id = $sid ";
          execute_sql($sql);
        }
      }
      if (isset($_POST['removeit'])) {
        if ($_POST['removeit'] == 1) {
          if (isset($_POST['questions'])) {
            $qid = intval($_POST['questions']);
            $sql = "UPDATE ".X_QUESTION." SET deleted = 'Y' WHERE id = $qid AND survey_id = $sid ";
            execute_sql($sql);
          }
        }
      }
      if (isset($_POST['addbreak'])) {
        $sql = "SELECT MAX(position)+1 FROM ".X_QUESTION." WHERE survey_id = $sid ";
        $pos = get_one($sql);
        $sql = "INSERT INTO ".X_QUESTION." (survey_id, name, type_id, position, content) VALUES ($sid, 'break', 99, $pos, 'break') ";
        execute_sql($sql);
      }
      db_close($result);
      return(1);

    case "conditions":
      $sid = $survey_id;
      if (isset($_POST['addcondition'])) {
        $id1 = $_POST['q1_id'];
        $id2 = $_POST['q2_id'];
        if ($id1 == $id2) { $errstr = 'Please select two different questions.'; return(0); }
        $cond = $_POST['cond'];
        $cond_val = _addslashes($_POST['cond_value']);
        $sql = "INSERT INTO ".X_CONDITION." (survey_id, q1_id, q2_id, cond, cond_value) VALUES ($sid, $id1, $id2, $cond, $cond_val) ";
        $result = execute_sql($sql);
        if (!$result) { $errstr = 'Warning, error encountered.' .' [ '.ErrorNo().': '.ErrorMsg().' ]'; }
      }
      elseif (isset($_POST['deletecondition'])) {
        $sql = "DELETE FROM ".X_CONDITION." WHERE id = ".key($_POST['deletecondition']);
        $result = execute_sql($sql);
        if (!$result) { $errstr = 'Warning, error encountered.' .' [ '.ErrorNo().': '.ErrorMsg().' ]'; }
      }
      return(1);
  }
  return(1);
}

function survey_results_navbar($sid, $curr_rid) {
  $sql = "SELECT R.id FROM ".X_RESPONSE." R WHERE R.survey_id = '${sid}' AND R.complete = 'Y' ORDER BY R.id ";
  $result = execute_sql($sql);
  $total = record_count($result);
  if ($total < 1) { return; }
  $rids = array();
  $i = 0;
  $curr_pos = -1;
  while ($row = fetch_row($result)) {
    $result->MoveNext();
    array_push($rids, $row[0]);
    if ($row[0] == $curr_rid) { $curr_pos = $i; }
    $i++;
  }
  db_close($result);
  $prev_rid = ($curr_pos > 0) ? $rids[$curr_pos - 1] : null;
  $next_rid = ($curr_pos < $total - 1) ? $rids[$curr_pos + 1] : null;
  $rows_per_page = 1;
  $pages = ceil($total / $rows_per_page);

  $url = htmlspecialchars(MYADMIN."?w=results&sid=".$sid);
  $mlink = create_function('$i,$r', 'return "<a href=\"'.$url.'&rid=$r\">$i</a>";');
  $linkarr = array();
  $display_pos = 1;
  if ($prev_rid != null) { array_push($linkarr, "<a href=\"$url&rid=$prev_rid\">".'Previous'.'</a>'); }
  for ($i = 0; $i < $curr_pos; $i++) { array_push($linkarr, "<a href=\"$url&rid=".$rids[$i]."\">$display_pos</a>"); $display_pos++; }
  array_push($linkarr, "<a href=\"$url&rid=$curr_rid\"><b>$display_pos</b></a>");
  for (++$i; $i < $total; $i++) { $display_pos++; array_push($linkarr, "<a href=\"$url&rid=".$rids[$i]."\">$display_pos</a>"); }
  if ($next_rid != null) { array_push($linkarr, "<a href=\"$url&rid=$next_rid\">".'Next'.'</a>'); }

  echo "<h2>Detailed result by individual respondent</h2>\n";
  echo "<div class=\"nav-rd\">\n";
  echo "<p class=\"nav-rd-head\"><strong><i class=\"pe-medkit pe-fw\"></i> Health check by each respondent:</strong></p>\n";
  echo "<p class=\"nav-rd-body\">";
  echo implode(' | ', $linkarr);
  echo "</p></div>\n";
}

function survey_results($sid, $precision = 1, $showTotals = 1, $qid = '', $cids = '', $rid = '', $guicross='') {
  if (empty($precision))  $precision  = 1;
  if ($showTotals === '')  $showTotals = 1;
  if (is_int($cids)) { $cids = array($cids); }
  if (is_string($cids)) { $cids = preg_split("/ /",$cids); } // turn space seperated list into array

  $cross = !empty($qid);
  if ($cross) { if (is_array($cids) && count($cids) > 0) { $cidstr = array_to_insql($cids); } else { $cidstr = ''; } }

  $has_choices = array();
  $response_table = array();
  $sql = "SELECT id, has_choices, response_table FROM ".X_QUESTION_TYPE." ORDER BY id ";
  if (!($result = execute_sql($sql))) { $errmsg = sprintf('%s [ %s: question_type ]', 'Error system table corrupt.', 'Table'); return($errmsg); }
  while ($row = fetch_row($result)) {
    $result->MoveNext();
    $has_choices[$row[0]] = $row[1];
    $response_table[$row[0]] = $row[2];
  }
  db_close($result);
  // load survey title (and other globals)
  $sql = "SELECT * FROM ".X_SURVEY." WHERE id = ${sid} ";
  if (!($result = execute_sql($sql,"", ADODB_FETCH_ASSOC))) { $errmsg = 'Error opening survey.' ." [ ID:${sid} R:" . record_count($result) ."]"; return($errmsg); }
  $survey = fetch_row($result);
  db_close($result);
  // load survey questions
  $sql = "SELECT * FROM ".X_QUESTION." WHERE survey_id = ${sid} AND deleted = 'N' ORDER BY position, id ";
  if (!($questions_result = execute_sql($sql,"", ADODB_FETCH_ASSOC))) { $errmsg = 'Error opening survey.' .' '. 'No questions found.' ." [ ID:${sid} ]"; return($errmsg); }

  // find out more about the question we are cross analyzing on (if any)
  if ($cross) {
    $sql = "SELECT type_id FROM ".X_QUESTION." WHERE id = ${qid} ";
    $result = execute_sql($sql, "", ADODB_FETCH_ASSOC);
    while ($content = fetch_row($result)){
      $result->MoveNext();
      $crossTable = $response_table[$content['type_id']];
      $q_content = $content['type_id'];
    }
    db_close($result);
    if (!in_array($crossTable, array('response_single','response_bool','response_multiple'))) {
      $errmsg = 'Error cross-analyzing due to an invalid type of question.' .' [ '. 'Table' .": ${crossTable} ]";
      return($errmsg);
    }
  }

  if (!empty($rid)) { $ridstr = "= ${rid} "; $total = 1; }
  else {
    $sql = "";
    if ($cross) {
      if (!empty($cidstr)) { $sql = "SELECT A.response_id FROM ".$GLOBALS['ESPCONFIG'][$crossTable.'_table']." A, ".X_RESPONSE." R WHERE A.response_id = R.id AND R.complete = 'Y' AND A.question_id = ${qid} AND A.choice_id ${cidstr} ORDER BY A.response_id"; }
      else { $sql = "SELECT A.response_id FROM ".$GLOBALS['ESPCONFIG'][$crossTable.'_table']." A, ".X_RESPONSE." R WHERE A.response_id = R.id AND R.complete = 'Y' AND A.question_id = ${qid} AND A.choice_id = 0 ORDER BY A.response_id"; }
    }
    else {
    $sql = "SELECT R.id FROM ".X_RESPONSE." R WHERE R.survey_id = '${sid}' AND R.complete = 'Y' ORDER BY R.id";
  }
  if (!($result = execute_sql($sql))) { $errmsg = "Error opening survey. [ ID:${sid} ] [ ".ErrorMsg()."]"; return($errmsg); }
  $total = record_count($result);
  if ($total < 1) {
    $errmsg = "Error opening survey. No responses found. [ ID:${sid} ]";
    return($errmsg);
    echo("<!-- \$errmsg = '$errmsg' -->\n");
  }
  $rids = array();
  while ($row = fetch_row($result)) { $result->MoveNext(); array_push($rids, $row[0]); }
  db_close($result);
  $ridstr = array_to_insql($rids);
}

if (!empty($rid)) { survey_results_navbar($sid, $rid); } // show response navigation bar

?>
<h2><?php echo($survey["title"]); ?></h2>
<h4><?php echo($survey["subtitle"]); ?></h4>
<p><?php echo($survey["info"]); ?></p>
<?php if ($cross) { echo("<p>" .'Cross analysis on QN:' ." ${q_content}</p>\n"); } ?>

<table class="table table-hover">

<?php
  $i=0; // question number counter
  while ($question = fetch_row($questions_result)) {
    $questions_result->MoveNext();
    $qid = $question['id'];
    $tid = $question['type_id'];
    $table = $response_table[$tid];
    $totals = $showTotals;
    if ($tid == 99) { echo("<tr><td><hr></td></tr>\n"); continue; }
    if ($tid == 100) { echo("<tr><td>". $question['content'] ."</td></tr>\n"); continue; }
    echo "<tr><td>";

    if ($tid < 50) {
      if (!empty($guicross)) {
        echo '<input type="hidden" name="w" value="results">';
        echo '<input type="hidden" name="sid" value="'.$sid.'">';
        echo "\n<table class=\"table table-hover\">\n";
        echo ("<tbody>\n");
        echo ("   <tr>\n");
        echo ("      <td width=\"34\" height=\"31\" bgcolor=\"khaki\">\n");
        if ($tid == 1 || $tid == 2 || $tid == 5 || $tid == 6) {
          echo ("<div align=\"center\">\n");
          echo ("   <input type=\"radio\" name=\"qid\" value=\"".$qid."\">\n");
          echo ("</div>\n");
        }
        echo ("</td>\n");
        echo ("<td width=\"429\" bgcolor=\"#CCCCCC\">\n");
      } //end if empty($guicross)
      echo ("<a name=\"Q".++$i."\"><strong>".$i.".</strong></a>\n");
      echo ("<strong>".$question['content']."</strong>\n");
      if (!empty($guicross)){
        echo ("</td>\n");
        echo ("<td width=\"33\" bgcolor=\"#CC0000\">\n");
        if ($tid == 1 || $tid == 2 || $tid == 5 || $tid == 6) {
          echo ("<div align=\"center\">\n");
          echo ("<input type=\"radio\" name=\"qidr\" value=\"".$qid."\">\n");
          echo ("</div>\n");
        }
        echo ("</td>\n");
        echo ("<td width=\"32\" bgcolor=\"#0099FF\">\n");
        if ($tid == 1 || $tid == 2 || $tid == 5 || $tid == 6) {
          echo ("<div align=\"center\">\n");
          echo ("<input type=\"radio\" name=\"qidc\" value=\"".$qid."\">\n");
          echo ("</div>\n");
        }
        echo ("</td>\n");
        echo ("</tr>\n");
        echo ("</tbody>\n");
        echo ("</table>\n");
      } //end if empty($guicross)
    } //end if ($tid < 50)
  $counts = array();
  switch ($table) {

    case 'response_bool':
      $counts = array('Yes' => 0, 'No' => 0);
      $sql = "SELECT A.choice_id, COUNT(A.response_id) FROM ".$GLOBALS['ESPCONFIG'][$table.'_table']." A WHERE A.question_id = '${qid}' AND A.response_id ${ridstr} AND A.choice_id != '' GROUP BY A.choice_id ";
      echo("<!-- \$sql = '$sql' -->\n");
      if ($result = execute_sql($sql)) {
        while (list($ccontent,$count) = fetch_row($result)) {
          $result->MoveNext();
          $ccontent = htmlspecialchars($ccontent);
          if ($ccontent == 'Y') { $ccontent = 'Yes'; } else { $ccontent = 'No'; }
          $counts[$ccontent] = $count;
        }
        db_close($result);
      }
      if (empty($question["result_id"])) { $question["result_id"] = 1; } // default to percentages for yes/no
      break;

    case 'response_multiple':
      $totals = 0;
    case 'response_single':
      $sql = "SELECT C.content FROM ".X_QUESTION_CHOICE." C WHERE C.question_id = '${qid}' AND C.content NOT LIKE '!others%' ORDER BY C.id ";
      if ($result = execute_sql($sql)) {
        for ($j = 0; $j < record_count($result); $j++) {
          $result->Move($j);
          $counts[htmlspecialchars($result->fields[0])] = 0;
        }
        db_close($result);
      }

      $sql = "SELECT C.content, COUNT(A.response_id) AS num FROM ".X_QUESTION_CHOICE." C, ".$GLOBALS['ESPCONFIG'][$table.'_table']." A WHERE C.question_id = '${qid}' AND C.content NOT LIKE '!others%' AND A.question_id = C.question_id AND A.choice_id = C.id AND A.response_id ${ridstr} GROUP BY C.id, C.content ";
      echo("<!-- \$sql = '$sql' -->\n");
      if ($result = execute_sql($sql)) {
        while (list($ccontent,$count) = fetch_row($result)) {
          $result->MoveNext();
          $ccontent = htmlspecialchars($ccontent);
          $counts[$ccontent] = $count;
        }
        db_close($result);
      }
      $sql = "SELECT A.response, C.content FROM ".X_RESPONSE_OTHER." A, ".X_QUESTION_CHOICE." C WHERE A.question_id = '${qid}' AND A.choice_id = C.id AND A.response_id ${ridstr} ORDER BY C.id, A.response ";
      echo("<!-- \$sql = '$sql' -->\n");
      if ($result = execute_sql($sql)) {
        while (list($answer,$ccontent) = fetch_row($result)) {
          $result->MoveNext();
          $ccontent = htmlspecialchars($ccontent);
          $content = preg_replace(array('/^!others=/', '/^!others/'), array('', 'Other:'), $ccontent);
          $content .= ' ' . htmlspecialchars($answer);
          $counts[$content] = (isset($counts[$content]) ? $counts[$content] : 0)+1;
        }
        db_close($result);
      }
      if (empty($question["result_id"])) { $question["result_id"] = 1; } // default to percentages
      break;

    case 'response_text':
      $sql = "SELECT A.response, COUNT(A.response_id) AS num FROM ".$GLOBALS['ESPCONFIG'][$table.'_table']." A WHERE A.question_id = '${qid}' AND A.response_id ${ridstr} GROUP BY A.response ";
      echo("<!-- \$sql = '$sql' -->\n");
      if ($result = execute_sql($sql)) {
        while (list($text, $num) = fetch_row($result)) {
          $result->MoveNext();
          if (!empty($text)) { $counts[htmlspecialchars($text)] = $num; }
        }
        db_close($result);
      }
      $question["result_id"] = 4;  // force "list" type response for text fields
      break;

    case 'response_date':
      $sql = "SELECT DATE_FORMAT(A.response, '".FORMAT_DATE."'), COUNT(A.response_id) AS num FROM ".$GLOBALS['ESPCONFIG'][$table.'_table']." A WHERE A.question_id = '${qid}' AND A.response_id ${ridstr} GROUP BY A.response ";
      echo("<!-- \$sql = '$sql' -->\n");
      if ($result = execute_sql($sql)) {
        while (list($text, $num) = fetch_row($result)) {
          $result->MoveNext();
          if (!empty($text)) { $counts[htmlspecialchars($text)] = $num; }
        }
        db_close($result);
      }
      $question["result_id"] = 4;  // force "list" type response for date fields
      break;

    case 'response_rank':
      if ($tid == 6) { //Rank
        $sql = "SELECT C.content FROM ".X_QUESTION_CHOICE." C WHERE C.question_id = '${qid}' AND C.content NOT LIKE '!others%' ORDER BY C.id ";
          if ($result = execute_sql($sql)) {
            for ($j = 0; $j < record_count($result); $j++) {
              $result->Move($j);
              $counts[htmlspecialchars($result->fields[0])] = null;
            }
            db_close($result);
          }
        $sql = "SELECT C.content, AVG(A.rank+1) AS average FROM ".X_QUESTION_CHOICE." C, ".$GLOBALS['ESPCONFIG'][$table.'_table']." A WHERE C.question_id = '${qid}' AND A.question_id = '${qid}' AND A.choice_id = C.id AND A.rank>=0 AND A.response_id ${ridstr} GROUP BY C.id, C.content ";
        echo("<!-- \$sql = '$sql' -->\n");
        if ($result = execute_sql($sql)) {
          while (list($ccontent,$avg) = fetch_row($result)) {
            $result->MoveNext();
            $ccontent = htmlspecialchars($ccontent);
            $counts[$ccontent] = $avg;
          }
          db_close($result);
        }
        $question["result_id"] = 99;  // force to rank
      } else {
        $sql = "SELECT A.rank, COUNT(A.response_id) AS num FROM ".$GLOBALS['ESPCONFIG'][$table.'_table']." A WHERE A.question_id = '${qid}' AND A.response_id ${ridstr} GROUP BY A.rank ";
        if ($result = execute_sql($sql)) {
          while (list($rank, $num) = fetch_row($result)) {
            $result->MoveNext();
            if ($rank == -1) { $rank = "N/A"; }
            $counts[_($rank)] += $num;
          }
          db_close($result);
        }
        if (empty($question["result_id"])) { $question["result_id"] = 2; } // default to rank
      }
      break;
    }

  if (!empty($guicross) && $question["result_id"] == 1) {
    mkcrossformat($counts, $qid, $tid);
  } else {
    switch ($question["result_id"]) {
      case "1": // Percentages
        mkrespercent($counts, $total, $precision, $totals); break;
      case "2": // Rank
        mkresrank($counts, $total, $precision, $totals); break;
      case "3": // Count
        mkrescount($counts, $total, $precision, $totals); break;
      case "4": // List
        mkreslist($counts, $total, $precision, $totals); break;
      case "99": // Average
        mkresavg($counts, $total, $precision, $totals, $question['length']); break;
    } // end switch
  } //end if
?>
    </td>
  </tr>
<?php } // end while ?>
</table>

<?php
  db_close($questions_result);
  return;
}

function survey_report($sid, $details = 0, $format = '') {
  if (empty($sid)) return;
  $has_choices = array();
  $response_table = array();
  $sql = "SELECT id, has_choices, response_table FROM ".X_QUESTION_TYPE." ORDER BY id ";
  if (!($result = execute_sql($sql))) {
    $errmsg = "Error system table corrupt. [ ". 'Table' .": question_type ]";
    return($errmsg);
  }
  while ($row = fetch_row($result)) {
    $result->MoveNext();
    $has_choices[$row[0]] = $row[1];
    $response_table[$row[0]] = $row[2];
  }
  db_close($result);
  // load survey title (and other globals)
  $sql = "SELECT * FROM ".X_SURVEY." WHERE id = $sid ";
  if (!($result = execute_sql($sql,"", ADODB_FETCH_ASSOC))) {
    $errmsg = "Error opening survey. [ ID:${sid} R:" . record_count($result) ."]";
    return($errmsg);
  }
  $survey = fetch_row($result);
  db_close($result);
  // load survey questions
  $sql = "SELECT * FROM ".X_QUESTION." WHERE survey_id = $sid AND deleted = 'N' ORDER BY position ";
  if (!($questions_result = execute_sql($sql,"", ADODB_FETCH_ASSOC))) {
    $errmsg = "Error opening survey. No questions found. [ ID:${sid} ]";
    return($errmsg);
  }
?>
<h2>DP specification for project: <?php echo($survey["title"]); ?></h2>
<h4><?php echo($survey["subtitle"]); ?></h4>
<p><?php echo($survey["info"]); ?></p>

<table class="table table-hover">
<tr class="bg-primary">
  <th width="10%">No.</th>
  <th width="10%">ID</th>
  <th width="10%">Public?</th>
  <th colspan="2">Question</th>
</tr>
<?php
  $i = 0;
  while ($question = fetch_row($questions_result)) {
    $questions_result->MoveNext();
    $qid = &$question['id'];
    $tid  = &$question['type_id'];
    $publ = ($question['public'] == 'Y') ? 'Yes' : 'No';
    $table = &$response_table[$tid];
    // if ($tid == 99) { echo "<tr><td colspan=\"6\" class=\"text-center active\"><small>SECTION BREAK</small></td></tr>\n"; continue; }
    if ($tid == 99) {
      echo "</table><p class=\"text-center\">SECTION BREAK</p><table class=\"table table-hover\">";
      echo "<tr class=\"bg-primary\"><th width=\"10%\">No.</th><th width=\"10%\">ID</th><th width=\"10%\">Public?</th><th colspan=\"2\">Question</th></tr>";
      continue;
    }
?>
<tr>
  <td class="bg-info"><strong><?php if ($tid < 50) echo(++$i); ?></strong></td>
  <td class="bg-info"><small>(<?php echo($qid); ?>)</small></td>
  <td class="bg-info"><?php echo($publ); ?></td>
  <td class="bg-info" colspan="2"><strong><?php echo($question["content"]); ?></strong></td>
</tr>
<?php
    if ($has_choices[$tid]) {
      $sql = "SELECT * FROM ".X_QUESTION_CHOICE." WHERE question_id = $qid ORDER BY id";
      $choices_result = execute_sql($sql,"", ADODB_FETCH_ASSOC);
      while ($choice = fetch_row($choices_result)) {
        $choices_result->MoveNext();
?>
<tr>
  <td width="10%">&nbsp;</td>
  <td width="10%">&nbsp;</td>
  <td width="10%">&nbsp;</td>
  <td width="10%"><small>(<?php echo($choice['id']); ?>)</small></td>
  <td><?php echo($choice['content']); ?></td>
</tr>
  <?php
      }
      db_close($choices_result);
    } // end if has_choices
  } // end while
  db_close($questions_result);
?>
</table>
<?php
  return;
}

function survey_generate_results($format, $sid) {
  $output = array();
  $id_to_csv_map = array(
    '0',  // 0: unused
    '1',  // 1: bool -> boolean
    '1',  // 2: text -> string
    '1',  // 3: essay -> string
    '1',  // 4: radio -> string
    '1',  // 5: check -> string
    '1',  // 6: dropdn -> string
    '0',  // 7: rating -> number
    '0',  // 8: rate -> number
    '1',  // 9: date -> string
    '0'   // 10: numeric -> number
  );
  $types = array(
    0,
    0,
    1,
  );
  $columns = array('RESPONSE', 'SUBMITTED', 'USERNAME');
  switch ($format) {
    case 'spss_csv': // SPSS Output
      $numcols = 3;
      $columns2 = $columns;
      $sql = "SELECT q.id, q.type_id FROM ".X_QUESTION." q WHERE q.survey_ID = $sid AND q.deleted = 'N' and q.type_id < 50 ORDER BY position ";
      $result = execute_sql($sql);
      $qcount = 0; // rating and multiple select (checkbox) count as one
      while ( list ($qid, $type) = fetch_row($result)) {
        $result->MoveNext();
        if ($type == '8' || $type == '5') { //rating question or multiple select (checkbox)
        $sql = "SELECT c.id FROM ".X_QUESTION." q, ".X_QUESTION_CHOICE." c WHERE q.id = $qid AND q.id = c.question_id ORDER BY c.id ASC ";
        $result2 = execute_sql($sql);
        $ratecols=0;
        $qcount++;
        while ( list($cid) = fetch_row($result2) ) {
          $result2->MoveNext();
          $ratecols++;
          array_push($columns, array("Q".$qcount."_".$ratecols));
          array_push($columns2, $qid."_".$cid);
          array_push($types, $id_to_csv_map[$type]);
        }
        $numcols = $numcols + $ratecols;
        db_close($result2);
      } else {
        $numcols++;
        $qcount++;
        array_push($columns, array("Q".$qcount));
        array_push($columns2, $qid);
        array_push($types, $id_to_csv_map[$type]);
      }
    }
    db_close($result);

    // Generate Data (This could get tricky)
    $sql = "SELECT r.id, r.submitted, r.username FROM ".X_RESPONSE." r WHERE r.survey_id = $sid AND r.complete = 'Y' ORDER BY r.submitted ";
    $result = execute_sql($sql);
    $columns[0] = array('RESPONSE');
    $columns[1] = array('SUBMITTED');
    $columns[2] = array('USERNAME');
    while ($row = fetch_row($result)) {
      $result->MoveNext();
      //Get the Response
      $response = response_select($sid, $row[0], 'type_id,name');
      array_push($columns[0], $row[0]);
      array_push($columns[1], $row[1]);
      array_push($columns[2], $row[2]);
      // Merge Repsonse into output array
      for ($i = 3; $i < $numcols; $i++) {
        $key = preg_split("/_/",$columns2[$i]);
        if (isset($response[$columns2[$i]]) || isset($response[$key[0]])) { // This is a hack for multiple select, it seems easier than modifying response_select
          if (isset($response[$key[0]][0]) && is_array($response[$key[0]][0])) { // check box (only question type that returns an array)
            $match = 0;
            for ($j = 0; $j < sizeof ($response[$key[0]]); $j++) {
              if ($response[$key[0]][$j][3] == 'other'.'_'.$key[1]) { array_push($columns[$i],"Other: ".$response[$key[0].'_'.$key[1]][2]); $match = 1; }
              elseif ($response[$key[0]][$j][3] == $key[1]) { array_push($columns[$i],$response[$key[0]][$j][2]); $match = 1; }
            }
            if ($match == 0) { array_push($columns[$i], " "); }
          }
          elseif (isset($response[$columns2[$i]][0]) && $response[$columns2[$i]][0] == 8) { array_push($columns[$i], $response[$columns2[$i]][3]); } // rating
          elseif (isset($response[$columns2[$i]][0]) && ($response[$columns2[$i]][0] == 4 || $response[$columns2[$i]][0] == 6)) { /* radio or dropdown*/
            if ($response[$columns2[$i]][2] == "!others") { list(,$c)=preg_split("/_/", $response[$columns2[$i]][3]); array_push($columns[$i], "Other: ".$response[$columns2[$i].'_'.$c][2]); }
            else { array_push($columns[$i], $response[$columns2[$i]][2]); }
          }
          else { array_push($columns[$i], $response[$columns2[$i]][2]); }
        }
        else { array_push($columns[$i], " "); }
      }
    }
    db_close($result);

    $output = array();
    for ($i = 0; $i < $numcols; $i++) {
      $x = 0;
      $temp_val = "";
      foreach ($columns[$i] as $key => $value) {
        if (!isset($output[$x])) { $output[$x] = array(); }
        if (is_array($value)) { $temp_val = join(',', $value); }
        else { $temp_val = $value; }
        switch ($types[$i]) {
          case 1: /* string */
            $temp_val = preg_replace("/[\r\t]/", ' ', $temp_val);
            $temp_val = preg_replace('/"/', '""', $temp_val);
            $temp_val = '"'. $temp_val .'"';
            break;
        }
        $output[$x][$i] = $temp_val;
        $x++;
      }
    }
    return $output;
    break;

    case 'csv_short_header':
      //NOT IMPLEMENTED YET
      break;

    case 'xml':
      //NOT IMPLEMENTED YET
      break;

    case 'tab':
      $columns2 = $columns; //columns2 is used to relate columns to data returned from response_select()
      $numcols = 3; //total columns
      $qcount = 0; //total questions (rating questions count as 1)
      $sql = "SELECT q.id, q.type_id FROM ".X_QUESTION." q WHERE q.survey_id = $sid AND q.deleted = 'N' AND q.type_id < 50 ORDER BY position";
      $result = execute_sql($sql);
      while (list($qid, $type ) = fetch_row($result)) {
        $result->MoveNext();
        if ($type == '8') { //rating question
        $sql = "SELECT c.id FROM ".X_QUESTION." q, ".X_QUESTION_CHOICE." c WHERE q.id = $qid AND q.id = c.question_id ORDER BY position";
        $result2 = execute_sql($sql);
        $ratecols = 0;
        $qcount++;
        while (list($cid) = fetch_row($result2)) {
          $result2->MoveNext();
          $ratecols++;
          array_push($columns, $qcount."_".$ratecols);
          array_push($columns2, $qid."_".$cid);
          array_push($types, $id_to_csv_map[$type]);
        }
        $numcols = $numcols + $ratecols;
        db_close($result2);
        } else {
          $numcols++;
          $qcount++;
          array_push($columns, $qcount);
          array_push($columns2, $qid);
          array_push($types, $id_to_csv_map[$type]);
        }
      }
      array_push($output, $columns);
      db_close($result);
      //Generate data:
      $sql = "SELECT r.id,r.submitted,r.username FROM ".X_RESPONSE." r WHERE r.survey_id = $sid AND r.complete = 'Y' ORDER BY r.submitted";
      $result = execute_sql($sql);
      while ($row = fetch_row($result)) {
        $result->MoveNext();
        // get the response
        $response = response_select($sid, $row[0], 'type_id,name');
        $arr = array();
        array_push($arr, $row[0]);
        array_push($arr, $row[1]);
        array_push($arr, $row[2]);
        // merge it
        for ($i = 3; $i < $numcols; $i++) {
          if (isset($response[$columns2[$i]])) {
            if (isset($response[$columns2[$i]][0]) && is_array($response[$columns2[$i]][0])) {
              $tempresult = array(); /* check box */
              foreach ($response[$columns2[$i]] as $checkboxdata) {
                if ($checkboxdata[2] == "!others") { list(,$c)=preg_split("/_/", $checkboxdata[3]); array_push($tempresult,"Other: ".$response[$columns2[$i].'_'.$c][2]); }
                else { array_push($tempresult, $checkboxdata[2]); }
              }
              $thisresult = implode(",", $tempresult);
            }
            elseif (isset($response[$columns2[$i]][0]) && $response[$columns2[$i]][0] == 8 ) { $thisresult = $response[$columns2[$i]][3]; } //db has these as 0 to N-1, lets add 1
            elseif (isset($response[$columns2[$i]][0]) && ($response[$columns2[$i]][0] == 4 || $response[$columns2[$i]][0] == 6)) {
              if ($response[$columns2[$i]][2] == "!others") { list(,$c)=preg_split("/_/", $response[$columns2[$i]][3]); $thisresult = "Other: ".$response[$columns2[$i].'_'.$c][2]; }
              else { $thisresult=$response[$columns2[$i]][2]; } /* radio or dropdown*/
            }
            else { $thisresult=$response[$columns2[$i]][3]; }
          }
          else { $thisresult = ""; }
          switch ($types[$i]) {
            case 2: /* special */
              break;
            case 1: /* string */
              if (isset($response[$columns2[$i]])) {
                $thisresult = preg_replace("/[\r\t]/", ' ', $thisresult);
                $thisresult = preg_replace('/"/', '""', $thisresult);
                $thisresult = '"'. $thisresult .'"';
              }
            case 0: /* number */
              if (isset($response[$columns2[$i]])) { array_push($arr, $thisresult); }
              else { array_push($arr, ''); }
              break;
          }
        }
        array_push($output, $arr);
      }
      db_close($result);
      break;

      default:
        //csv_full_header
        $numcols = 3;
        $sql = "SELECT q.id, q.name, q.type_id FROM ".X_QUESTION." q WHERE q.survey_id = $sid AND q.deleted = 'N' AND q.type_id < 50 ORDER BY position";
        $result = execute_sql($sql);
        $numcols += record_count($result);
        while (list( $qid, $col, $type ) = fetch_row($result)) {
          $result->MoveNext();
          if ($type == 8) { /* rate */
            $sql = "SELECT ".$GLOBALS['ESPCONFIG']['adodb_conn']->Concat("q.name", "' '", "c.content").", c.id FROM ".X_QUESTION." q, ".X_QUESTION_CHOICE." c WHERE q.id = $qid AND q.id = c.question_id";
            $result2 = execute_sql($sql);
            $numcols += record_count($result2) - 1;
            while (list($col, $rid) = fetch_row($result2)) {
              $result2->MoveNext();
              $str1 = $col;
              do {
                  $str2 = $str1;
                  $str1 = preg_replace( "/(^| )(what|which|why|how|who|where|how|is|are|were|the|a|it|of|do|you|your|please|enter)[ ?]/i", " ", $str2);
              } while ($str1 != $str2);
                $col = $str1;
                $col = trim(strtoupper(preg_replace("/[^A-Z0-9]+/", " ", $col)));
                $col = preg_replace('/ +/','_',$col);
                array_push($columns, array($qid."_".$rid=>$col));
                array_push($types, $id_to_csv_map[$type]);
              }
              db_close($result2);
            } else {
              array_push($columns, array($qid=>$col));
              array_push($types, $id_to_csv_map[$type]);
            }
        }
        db_close($result);
        $num = 0;
        $sql = "SELECT r.id,r.submitted,r.username FROM ".X_RESPONSE." r WHERE r.survey_id = $sid AND r.complete = 'Y' ORDER BY r.submitted";
        $result = execute_sql($sql);
        $y = 0;
        if (record_count($result) == 0) {
          $columns[0] = array('RESPONSE');
          $columns[1] = array('SUBMITTED');
          $columns[2] = array('USERNAME');
        }
        while ($row = fetch_row($result)) {
          $result->MoveNext();
          if ($y == 0) {
            $columns[0] = array($row[0]=>'RESPONSE');
            $columns[1] = array($row[0]=>'SUBMITTED');
            $columns[2] = array($row[0]=>'USERNAME');
            $y = 1;
          }
          // get the response
          $response = response_select_name($sid, $row[0]);
          // merge it
          for ($i = 0; $i < $numcols; $i++) {
            $match = 0;
            foreach ($response as $key => $value) {
              if ($key === key($columns[$i])) { $match = 1; array_push($columns[$i], $value[key($value)]); }
            }
            if (($match == 0) and ($i > 2)) { array_push($columns[$i], ""); }
            if ($i <= 2) { array_push($columns[$i], $row[$i]); }
          }
        }
        db_close($result);
        $output = array();
        for ($i = 0; $i < $numcols; $i++) {
          $x = 0;
          $temp_val = "";
          foreach ($columns[$i] as $key => $value) {
            if (!isset($output[$x])) { $output[$x] = array(); }
            if (is_array($value)) { $temp_val = join(',', $value); }
            else { $temp_val = $value; }

            switch ($types[$i]) {
              case 1: /* string */
                $temp_val = preg_replace("/[\r\t]/", ' ', $temp_val);
                $temp_val = preg_replace('/"/', '""', $temp_val);
                $temp_val = '"'. $temp_val .'"';
                break;
            }
            $output[$x][$i] = $temp_val;
            $x++;
          }
      }
    }
    return $output;
}

function survey_export_results($type, $sid, $filename) {
  $umask = umask(0077);
  $fh = fopen($filename, 'w');
  umask($umask);
  if (!$fh) { return 0; }
  switch ($type) {
    case 'spss_csv':
      $data = survey_generate_results($type, $sid);
      foreach ($data as $row) { fputs($fh, implode(',', $row) . "\r\n"); }
      break;
    case 'xml':
      $data = survey_generate_results($type, $sid);
      break;
    case 'tab':
      $data = survey_generate_results($type, $sid);
      foreach ($data as $row) { fputs($fh, implode("\t", $row) . "\r\n"); }
      break;
    default: //csv_full_header, csv_short_header
      $data = survey_generate_results($type, $sid);
      foreach ($data as $row) { fputs($fh, implode(',', $row) . "\r\n"); }
  }
  fflush($fh);
  fclose($fh);
  return 1;
}

function parse_file_tab($group, $file) {
  $tab_array = array();
  foreach ($file as $row) {
    array_push($tab_array, explode("\t", rtrim($row)));
  }
  return $tab_array;
}

function parse_file_csv(){}
function parse_file_xml(){}

function account_upload(&$exceptions, $upload_type, $account_type, $group_acl, $upload_file) {
  $error = 0;
  $bool_validate = array('Y', 'N');
  switch ($upload_type) {
    case 'tab':
      $arr = parse_file_tab($group_acl, $upload_file); break;
    case 'csv':
      $arr = parse_file_csv(); break;
    case 'xml':
      $arr = parse_file_xml(); break;
    default:
      $error=1; break;
  }

  switch ($account_type) {
    case 'respondents':
      array_push($exceptions, array("Username", "Password", "Group", "First Name", "Last Name", "Email", "Expiration", "Disabled", "Error"));
      foreach ($arr as $row) {
        /* check for data in required fields */
        if ($row[0]) { $username = $row[0]; } else { $error=1; break; }
        if ($row[1]) { $password = $row[1]; } else { $error=1; break; }
        if ($row[2]) {
          $realm = $row[2];
          if (isset($row[3])) { $fname = $row[3]; } else { $fname = ''; }
          if (isset($row[4])) { $lname = $row[4]; } else { $lname = ''; }
          if (isset($row[5])) { $email = $row[5]; } else { $email = ''; }
          if (isset($row[6])) { $expir = $row[6]; } else { $expir = ''; }
          if (isset($row[7])) { $disabled = $row[7]; } else { $disabled = ''; }
          /* validate email address.  */
          if ($email != '') {
            if (!preg_match( "/^[a-z0-9]+([_\\.-][a-z0-9]+)*@/i" . "([a-z0-9]+([\.-][a-z0-9]+)*)+\\.[a-z]{2,}$", $email)) {
              array_push($exceptions, array($username, $password, $realm, $fname, $lname, $email, $expir, $disabled, "Invalid Email Address"));
              continue;
            }
          }
          if ($expir) {
            $year = substr($expir, 0, 4);
            $month = substr($expir, 4, 2);
            $day = substr($expir, 6, 2);
            if (!checkdate($month, $day, $year)) {
              array_push($exceptions, array($username, $password, $realm, $fname, $lname, $email, $expir, $disabled, "Invalid Expiration. Date"));
              continue;
            }
          }
          else { $expir = "0"; }
          if (!in_array($disabled, $bool_validate)) { $disabled = 'N'; }
          /* Make sure user is authorized to upload this realm */
          if (!in_array($realm, $group_acl)) {
            array_push($exceptions, array($username, $password, $realm, $fname, $lname, $email, $expir, $disabled, "Invalid Group"));
            continue;
          }
        }
        else { $error = 1; break; }
        $username = _addslashes($username);
        $password = _addslashes($password);
        $realm = _addslashes($realm);
        $fname = _addslashes($fname);
        $lname = _addslashes($lname);
        $email = _addslashes($email);
        $expir = _addslashes($expir);
        $disabled = _addslashes($disabled);
        $added = sys_time_stamp();
        $changed = sys_time_stamp();
        $sql = "INSERT INTO ".X_RESPONDENT." (username, password, realm, fname, lname, email, expiration, disabled, added, changed) VALUES ($username, ".db_crypt($password).", $realm, $fname, $lname, $email, $expir, $disabled, $added, $changed)";
        if (!execute_sql($sql)) { array_push($exceptions, array($username, $password, $realm, $fname, $lname, $email, $expir, $disabled, ErrorMsg())); } /* insert failed -- stuff record into failed array */
      }
      break;

    case 'designers':
      array_push($exceptions, array("Username", "Password", "Group", "First Name", "Last Name", "Email", "PDesign", "PStatus", "PData", "PAll", "PGroup", "PUser", "Expiration", "Disabled", "Error"));
      foreach ($arr as $row) {
        /* check for data in required fields */
        if ($row[0]) { $username = $row[0]; } else { $error = 1; break; }
        if ($row[1]) { $password = $row[1]; } else { $error = 1; break; }
        if ($row[2]) {
          $realm = $row[2];
          if (isset($row[3])) { $fname = $row[3]; } else { $fname = ''; }
          if (isset($row[4])) { $lname = $row[4]; } else { $lname = ''; }
          if (isset($row[5])) { $email = $row[5]; } else { $email = ''; }
          if (isset($row[6])) { $pdesign = $row[6]; } else { $pdesign = ''; }
          if (isset($row[7])) { $pstatus = $row[7]; } else { $pstatus = ''; }
          if (isset($row[8])) { $pdata = $row[8]; } else { $pdata = ''; }
          if (isset($row[9])) { $pall = $row[9]; } else { $pall = ''; }
          if (isset($row[10])) { $pgroup = $row[10]; } else { $pgroup = ''; }
          if (isset($row[11])) { $puser = $row[11]; } else { $puser = ''; }
          if (isset($row[12])) { $expir = $row[12]; } else { $expir = ''; }
          if (isset($row[13])) { $disabled = $row[13]; } else { $disabled = ''; }
          if ($email != '') { if (!preg_match( "/^[a-z0-9]+([_\\.-][a-z0-9]+)*@/i" . "([a-z0-9]+([\.-][a-z0-9]+)*)+\\.[a-z]{2,}$", $email)) { array_push($exceptions, array($username, $password, $realm, $fname, $lname, $email, $pdesign, $pstatus, $pdata, $pall, $pgroup, $puser, $expir, $disabled, "Invalid Email Address")); continue; } }
          if (!in_array($pdesign, $bool_validate)) { $pdesign = 'Y'; }
          if (!in_array($pstatus, $bool_validate)) { $pstatus = 'N'; }
          if (!in_array($pdata, $bool_validate)) { $pdata = 'N'; }
          if (!in_array($pall, $bool_validate)) { $pall = 'N'; }
          if (!in_array($pgroup, $bool_validate)) { $pgroup = 'N'; }
          if (!in_array($puser, $bool_validate)) { $puser = 'N'; }
          if ($expir) {
            $year = substr($expir, 0, 4); $month = substr($expir, 4, 2); $day = substr($expir, 6, 2);
            if (!checkdate($month, $day, $year)) { array_push($exceptions, array($username, $password, $realm, $fname, $lname, $email, $pdesign, $pstatus, $pdata, $pall, $pgroup, $puser, $expir, $disabled, "Invalid Expiration Date")); continue; }
          }
          else { $expir = "0"; }
          if (!in_array($disabled, $bool_validate)) { $disabled = 'N'; }
          if (!in_array($realm, $group_acl)) { array_push($exceptions, array($username, $password, $realm, $fname, $lname, $email, $pdesign, $pstatus, $pdata, $pall, $pgroup, $puser, $expir, $disabled, "Invalid Group")); continue; } /* Make sure user is authorized to upload this realm */
        }
        $username = _addslashes($username);
        $password = _addslashes($password);
        $realm = _addslashes($realm);
        $fname = _addslashes($fname);
        $lname = _addslashes($lname);
        $email = _addslashes($email);
        $pdesign = _addslashes($pdesign);
        $pstatus = _addslashes($pstatus);
        $pdata = _addslashes($pdata);
        $pall = _addslashes($pall);
        $pgroup = _addslashes($pgroup);
        $puser = _addslashes($puser);
        $expir = _addslashes($expir);
        $disabled = _addslashes($disabled);
        $added = sys_time_stamp();
        $changed = sys_time_stamp();
        $sql = "INSERT INTO ".X_DESIGNER." (username, password, realm, fname, lname, email, pdesign, pstatus, pdata, pall, pgroup, puser, expiration, disabled, added, changed) VALUES ($username, ".db_crypt($password).", $realm, $fname, $lname, $email, $pdesign, $pstatus, $pdata, $pall, $pgroup, $puser, $expir, $disabled, $added, $changed) ";
        if (!execute_sql($sql)) { array_push($exceptions, array($username, $password, $realm, $fname, $lname, $email, $pdesign, $pstatus, $pdata, $pall, $pgroup, $puser, $expir, $disabled, ErrorMsg())); } /* insert failed -- stuff record into failed array */
      }
      break;
  }
  if (count($exceptions) > 1 or $error) { return 0; }
  else { return 1; }
}

function survey_aggregate($sids) {
  if (is_scalar($sids) && is_numeric($sids)) { $sids = array ($sids); }
  elseif (! is_array($sids)) { return false; }
  if (0 == count($sids)) { return true; }
  reset($sids);
  $first_sid = current($sids);
  $sql = sprintf('SELECT * FROM %s WHERE id = %d', X_SURVEY, $first_sid);
  $res = execute_sql($sql, '', ADODB_FETCH_ASSOC);
  if (1 == record_count($res)) { $survey = fetch_row($res); }
  db_close($res);
  if (!isset($survey)) { return false; }
  // update its data so that it's a new survey - clear the sid, change the owner, change the name, reset the status
  $survey['id'] = null;
  $survey['owner'] = (isset($_SESSION['acl']['username']) ? $_SESSION['acl']['username'] : $survey['owner']);
  $survey['status'] = 0;
  $survey['changed'] = sys_time_stamp();
  $sql = sql_for_insert_into_table(X_SURVEY, $survey);
  $res = execute_sql($sql);
  if (! $res) { return false; }
  $new_sid = insert_id('survey_id_seq');
  $pos = 0;
  foreach ($sids as $sid) { $pos = survey_copy_questions_and_conditions($sid, $new_sid, $pos); if (false === $pos) { return false; } }
  return $new_sid;
}

function survey_copy_questions_and_conditions($sid, $new_sid, $pos = 0) {
  $has_choices = esp_type_has_choices();
  $question_fields = array('id', 'survey_id', 'name', 'type_id', 'result_id', 'length', 'precise', 'position', 'content', 'content_th', 'required', 'deleted', 'public');
  $sql = "SELECT ". join(', ',$question_fields)." FROM ".X_QUESTION." WHERE survey_id = ${sid} AND deleted = 'N' ORDER by position, id";
  $result = execute_sql($sql,"", ADODB_FETCH_ASSOC);
  array_shift($question_fields);
  while ($question = fetch_row($result)) {
    $result->MoveNext();
    $tid = $question['type_id'];
    $qid = $question['id'];
    $question['survey_id'] = $new_sid;
    $question['position'] = $pos++;
    array_shift($question);
    if (!isset($question['result_id'])) { $question['result_id'] = 'NULL'; }
    $question['name'] = _addslashes($question['name']);
    $question['content'] = _addslashes($question['content']);
    $question['content_th'] = _addslashes($question['content_th']);
    $question['required'] = _addslashes($question['required']);
    $question['deleted'] = _addslashes($question['deleted']);
    $question['public'] = _addslashes($question['public']);
    $sql = "INSERT INTO ".X_QUESTION." ";
    $sql .= '('. join(',', $question_fields) .') ';
    $sql .= 'VALUES ( '. join(',',array_values($question)) .' )';
    if (!execute_sql($sql)) { return(false); }
    $new_qid = insert_id('question_id_seq');

    if ($has_choices[$tid]) {
      $question_choice_fields = array('question_id', 'content', 'content_th', 'value', 'feedback', 'credit');
      $sql = "SELECT ". join(', ',$question_choice_fields)." FROM ".X_QUESTION_CHOICE." WHERE question_id = ${qid} ORDER BY id ";
      $result2 = execute_sql($sql,"", ADODB_FETCH_ASSOC);
      while ($choice = fetch_row($result2)) {
        $result2->MoveNext();
        $choice['question_id'] = $new_qid;
        $choice['content'] = _addslashes($choice['content']);
        $choice['content_th'] = _addslashes($choice['content_th']);
        $choice['value'] = _addslashes($choice['value']);
        $choice['feedback'] = _addslashes($choice['feedback']);
        $choice['credit'] = _addslashes($choice['credit']);
        $sql = "INSERT INTO ".X_QUESTION_CHOICE." ";
        $sql .= '('. join(',',$question_choice_fields) .') ';
        $sql .= 'VALUES ( '. join(',',array_values($choice)) .' )';
        if (!execute_sql($sql)) { return(false); }
      }
      db_close($result2);
    }
  }
  db_close($result);
  // copy conditions
  $sql = "INSERT INTO ".X_CONDITION." (id, survey_id, q1_id, q2_id, cond, cond_value) SELECT NULL, $new_sid, qnew1.id, qnew2.id, cond, cond_value FROM ".X_QUESTION." qold1, ".X_QUESTION." qold2, ".X_QUESTION." qnew1, ".X_QUESTION." qnew2, ".X_CONDITION." c WHERE qold1.id = c.q1_id AND qold2.id = c.q2_id AND qold1.survey_id = $sid AND qold2.survey_id = $sid AND qnew1.survey_id = $new_sid AND qnew1.position = qold1.position AND qnew1.deleted = qold1.deleted AND qnew2.survey_id = $new_sid AND qnew2.position = qold2.position AND qnew2.deleted = qold2.deleted ";
  $result = execute_sql($sql);
  if (false === $result) { return false; }
  return $pos;
}

function sql_for_insert_into_table($table, $values) {
  foreach ($values as $field => $value) {
    if (is_null($value)) { $values[$field] = 'null'; }
    elseif (is_scalar($value)) {
      if (!is_numeric($value)) {
        if ($value == sys_time_stamp()) { }
        else { $values[$field] = _addslashes($value); }
      }
    } else {
      trigger_error("Unknown value=[$value] at key=[$field]", E_USER_WARNING);
      $values[$field] = 'null';
    }
  }
  return sprintf('INSERT INTO %s (%s) VALUES (%s)', $table, implode(',', array_keys($values)), implode(',', $values) );
}

function survey_copy($sid) {
  return (survey_aggregate($sid) === false ? false : true);
}

function survey_merge($sids, $precision = 1, $showTotals = 1) {
  if (!is_array($sids)) { $errmsg = 'Invalid argument.' ." [ ${sids} ]"; return($errmsg); }
  $num = count($sids);
  if ($num < 1) { $errmsg = 'Invalid argument.' .' [ '. join(',',$sids) .' ]'; return($errmsg); }
  if (empty($precision)) { $precision  = 1; }
  if (empty($showTotals)) { $showTotals = 1; }
  $sidstr = array_to_insql($sids);
  $response_table = esp_type_response_table();
  $sid = $sids[0];
  $sql = "SELECT * FROM ".X_SURVEY." WHERE id = ${sid}";
  echo("<!-- \$sql = ${sql} -->\n");
  if (!($result = execute_sql($sql,"", ADODB_FETCH_ASSOC))) {
    $errmsg = "Error opening survey. [ ID:${sid} R:" . record_count($result) ."] [ ".ErrorMsg()."]";
    return($errmsg);
  }
  $survey = fetch_row($result);
  db_close($result);
  $sql = "SELECT R.id FROM ".X_RESPONSE." R WHERE R.survey_id ${sidstr} AND R.complete = 'Y' ";
  echo("<!-- \$sql = ${sql} -->\n");
  if (!($result = execute_sql($sql))) {
    $errmsg = 'Error opening surveys.' ." [ ID: ${sidstr} ] [ ".ErrorMsg()."]";
    return($errmsg);
  }
  $total = record_count($result);
  if ($total < 1) {
    $errmsg = "Error opening survey. No responses found. [ ID: ${sidstr} ] [ ". 'TOTAL' .": ${total} ]";
    db_close($result);
    return($errmsg);
  }
  $rids = array();
  while ($row = fetch_row($result)) {
    $result->MoveNext();
    array_push($rids, $row[0]);
  }
  db_close($result);
  $ridstr = array_to_insql($rids);
  for ($i=0; $i<$num; $i++) {
    $sid = $sids[$i];
    $sql = "SELECT * FROM ".X_QUESTION." WHERE survey_id = ${sid} AND deleted = 'N' ORDER BY position, id ";
    echo("<!-- \$sql = ${sql} -->\n");
    $questions[$i] = execute_sql($sql, "", ADODB_FETCH_ASSOC);
    if (!$questions[$i]) {
      $errmsg = "Error opening survey. No responses found. [ ID:${sid} ] [ ".ErrorMsg()."]";
      return($errmsg);
    }
  }

?>
<h2><?php echo($survey["title"]); ?></h2>
<h3><?php echo($survey["subtitle"]); ?></h3>
<blockquote><?php echo($survey["info"]); ?></blockquote>
<table border="0" cellspacing="0" cellpadding="0" width="100%">
<?php
  $q=0; // question number counter
  while (1) { // get next question from each of SIDs (lock-step)
    $qids = array();
    for ($i=0; $i<$num; $i++) {
      if (!($question[$i] = fetch_row($questions[$i]))) {
        for ($j=0; $j<$num; $j++) { db_close($questions[$j]); }
        echo("</table>\n");
        return;
      }
      $questions[$i]->MoveNext();
      echo("<!-- \$i = $i; \$question[\$i]['id'] = ".$question[$i]['id']." -->\n");
      array_push($qids, $question[$i]['id']);
    }
    $qidstr = array_to_insql($qids);
    echo("<!-- \$qidstr = $qidstr -->\n");
    $tid = $question[0]['type_id'];
    $table = $response_table[$tid];
    echo("<!-- \$table = $table -->\n");
    if ($tid == 99) { echo("<tr><td><hr></td></tr>\n"); continue; }
    if ($tid == 100) { echo("<tr><td>". $question[0]['content'] ."</td></tr>\n"); continue; }

    ++$q;
    $bg = "";
    if ($bg != '#eeeeee') { $bg = '#eeeeee'; } else { $bg = '#ffffff'; }
?>
  <tr bgcolor="<?php echo($bg); ?>">
     <td>
      <a name="Q<?php echo($q); ?>"><?php echo($q); ?>.</a>
      <?php echo($question[0]['content']); ?>
      <blockquote>
<?php
    $counts = array();
    switch ($table) {
// -------------------------------- response_bool --------------------------------
    case 'response_bool':
      $sql = "SELECT A.choice_id, COUNT(A.response_id) FROM ".$GLOBALS['ESPCONFIG'][$table.'_table']." A WHERE A.question_id ${qidstr} AND A.response_id ${ridstr} GROUP BY A.choice_id ";
      echo("<!-- \$sql = ${sql} -->\n");
      $result = execute_sql($sql);
      while (list($text,$count) = fetch_row($result)) {
        $result->MoveNext();
        $counts[$text] = $count;
      }
      db_close($result);

      if (empty($question[0]['result_id']))
        $question[0]['result_id'] = 1;  // default to percentages for yes/no
      break;

// -------------------------------- response_single ----------------------------------
// -------------------------------- response_multiple --------------------------------
    case 'response_multiple':
      $showTotals = 0;

    case 'response_single':
      for ($i=0; $i<$num; $i++) {
        $sid = $sids[$i];
        $qid = $question[$i]['id'];
        $sql = "SELECT id FROM ".X_QUESTION_CHOICE." WHERE question_id = ${qid} AND content NOT LIKE '!others%' ORDER BY id ";
        echo("<!-- \$sql = ${sql} -->\n");
        $result = execute_sql($sql);
        $cids[$i] = array();
        while (list($cid) = fetch_row($result)) {
          $result->MoveNext();
          array_push($cids[$i],$cid);
        }
        db_close($result);
      }
      $content = array();
      foreach ($cids[0] as $cid) {
        $sql = "SELECT content FROM ".X_QUESTION_CHOICE." WHERE id = ${cid}";
        echo("<!-- \$sql = ${sql} -->\n");
        $result = get_one($sql);
        array_push($content, $result);
      }
      $cnum = count($content);
      for ($j=0; $j<$cnum; $j++) {
        $mycids = array();
        for ($i=0; $i<$num; $i++) { array_push($mycids, $cids[$i][$j]); }
        $mycidstr = array_to_insql($mycids);
        $sql = "SELECT COUNT(*) FROM ".$GLOBALS['ESPCONFIG'][$table.'_table']." A WHERE A.choice_id ${mycidstr} AND A.response_id ${ridstr} ";
        echo("<!-- \$sql = ${sql} -->\n");
        $result=get_one($sql);
        $counts[$content[$j]] = $result;
      }
      // handle 'other...'
      for ($i=0; $i<$num; $i++) {
        $sid = $sids[$i];
        $qid = $question[$i]['id'];
        $sql = "SELECT id FROM ".X_QUESTION_CHOICE." WHERE question_id ${qidstr} AND content LIKE '!others%' ORDER BY id ";
        echo("<!-- \$sql = ${sql} -->\n");
        $result = execute_sql($sql);
        $cids[$i] = array();
        while (list($cid) = fetch_row($result)) {
          $result->MoveNext();
          array_push($cids[$i],$cid);
        }
        db_close($result);
      }
      $content = array();
      foreach ($cids[0] as $cid) {
        $sql = "SELECT content FROM ".X_QUESTION_CHOICE." WHERE id = ${cid} ";
        echo("<!-- \$sql = ${sql} -->\n");
        $result=get_one($sql);
        $text = preg_replace("/!others=?/", "", $result);
        if (!empty($text)) { $text .= ': '; }
        array_push($content, $text);
      }
      $cnum = count($content);
      for ($j=0; $j<$cnum; $j++) {
        $mycids = array();
        for ($i=0; $i<$num; $i++) { array_push($mycids, $cids[$i][$j]); }
        $mycidstr = array_to_insql($mycids);
        $sql = "SELECT A.response, COUNT(A.response_id) FROM ".X_RESPONSE_OTHER." A WHERE A.choice_id ${mycidstr} AND A.response_id ${ridstr} GROUP BY A.response ";
        echo("<!-- \$sql = ${sql} -->\n");
        $result=execute_sql($sql);
        while (list($response,$count) = fetch_row($result)) {
          $result->MoveNext();
          if (!empty($response)) {
            $text = $content[$j] . htmlspecialchars($response);
            $counts[$text] = $count;
          }
        }
        db_close($result);
      }
      if (empty($question[0]['result_id']))
        $question[0]['result_id'] = 1;  // default to percentages
      break;
// -------------------------------- response_text --------------------------------
    case 'response_text':
      $sql = "SELECT A.response, COUNT(A.response_id) FROM ".$GLOBALS['ESPCONFIG'][$table.'_table']." A WHERE A.question_id ${qidstr} AND A.response_id ${ridstr} GROUP BY A.response ";
      echo("<!-- \$sql = ${sql} -->\n");
      $result = execute_sql($sql);
      while (list($response, $count) = fetch_row($result)) {
        $result->MoveNext();
        if (!empty($response)) { $counts[htmlspecialchars($response)] = $count; }
      }
      db_close($result);
      $question[0]['result_id'] = 4;  // force "list" type response for text fields
      break;
// -------------------------------- response_rank --------------------------------
    case 'response_rank':
      if ($tid == 8) { //Rank
        for ($i=0; $i<$num; $i++) {
          $sid = $sids[$i];
          $qid = $question[$i]['id'];
          $sql = "SELECT id FROM ".X_QUESTION_CHOICE." WHERE question_id ${qidstr} ORDER BY id ";
          echo("<!-- \$sql = ${sql} -->\n");
          $result = execute_sql($sql);
          $cids[$i] = array();
          while (list($cid) = fetch_row($result)) {
            $result->MoveNext();
            array_push($cids[$i],$cid);
          }
          db_close($result);
        }
        $content = array();
        foreach ($cids[0] as $cid) {
          $sql = "SELECT content FROM ".X_QUESTION_CHOICE." WHERE id = ${cid} ";
          echo("<!-- \$sql = ${sql} -->\n");
          $result=get_one($sql);
          array_push($content, $result);
        }
        $cnum = count($content);
        for ($j=0; $j<$cnum; $j++) {
          $mycids = array();
          for ($i=0; $i<$num; $i++) { array_push($mycids, $cids[$i][$j]); }
          $mycidstr = array_to_insql($mycids);
          $sql = "SELECT AVG(A.rank) FROM ".$GLOBALS['ESPCONFIG'][$table.'_table']." A WHERE A.choice_id ${mycidstr} AND A.response_id ${ridstr} AND A.rank>0 ";
          echo("<!-- \$sql = ${sql} -->\n");
          $result=get_one($sql);
          $counts[$content[$j]] = $result;
        }
        $question[0]['result_id'] = 99;  // force to rank
      } else {
        // deprecated ...
      }
      break;
    }
// ---------------------------------------------------------------------------
    switch ($question[0]['result_id']) {
      case '1':  // Percentages
        mkrespercent($counts, $total, $precision, $showTotals); break;
      case '2':  // Rank
        mkresrank($counts, $total, $precision, $showTotals); break;
      case '3':  // Count
        mkrescount($counts, $total, $precision, $showTotals); break;
      case '4':  // List
        mkreslist($counts, $total, $precision, $showTotals); break;
      case '99':  // Average
        mkresavg($counts, $total, $precision, $showTotals, 0); break;
    } // end switch
?>
      </blockquote>
    </td>
  </tr>
<?php  } // end while -- execution should never pass this point ?>
</table>
<?php
  return;
}

function survey_purge($sids) {
  if (is_int($sids)) { $sidstr = '='.$sids; }
  elseif (is_string($sids)) { $sids = preg_split("/ /", $sids); }
  if (is_array($sids)) { $sidstr = array_to_insql($sids); }
  $sql = "SELECT id FROM ".X_QUESTION." WHERE survey_id ${sidstr} ";
  $result = execute_sql($sql);
  $qids = array();
  while (list($qid) = fetch_row($result)) {
    $result->MoveNext();
    array_push($qids, $qid);
  }
  db_close($result);
  $qidstr = array_to_insql($qids); // work from the bottom up... start with the survey results
  //$tables = array('response_bool', 'response_date', 'response_multiple', 'response_other', 'response_rank', 'response_rating', 'response_single', 'response_text');
  $tables = array('X_RESPONSE_BOOL', 'X_RESPONSE_DATE', 'X_RESPONSE_MULTIPLE', 'X_RESPONSE_OTHER', 'X_RESPONSE_RANK', 'X_RESPONSE_RATING', 'X_RESPONSE_SINGLE', 'X_RESPONSE_TEXT');
  foreach ($tables as $table) {
    //$sql = "DELETE FROM ".$GLOBALS['ESPCONFIG'][$table.'_table']." WHERE question_id ${qidstr} ";
    $sql = "DELETE FROM ".$table." WHERE question_id ${qidstr} ";
    $result = execute_sql($sql);
  }
  // then responses
  $sql = "DELETE FROM ".X_RESPONSE." WHERE survey_id ${sidstr}"; execute_sql($sql);
  // then question choices
  $sql = "DELETE FROM ".X_QUESTION_CHOICE." WHERE question_id ${qidstr}"; execute_sql($sql);
  // then questions
  $sql = "DELETE FROM ".X_QUESTION." WHERE survey_id ${sidstr}"; execute_sql($sql);
  // then conditions
  $sql = "DELETE FROM ".X_CONDITION." WHERE survey_id ${sidstr}"; execute_sql($sql);
  // and finally the survey(s)
  $sql = "DELETE FROM ".X_SURVEY." WHERE id ${sidstr}"; execute_sql($sql);
  // erase the access credentials
  $sql = "DELETE FROM ".X_ACCESS." WHERE survey_id ${sidstr}"; execute_sql($sql);
  // now, erase the accumulated statistics, we are purging *all* traces of the survey
  if (is_int($sids)) { $sids = array ($sids); }
  elseif (is_string($sids)) { $sids = explode(' ', $sids); }
  if (is_array($sids)) { foreach ($sids as $sid) { survey_stat_purge($sid); } }
  return;
}

function response_purge($qids) {
  if (is_int($qids)) { $qidstr = '='.$qids; }
  elseif (is_string($qids)) { $qids = preg_split("/ /", $qids); }
  if (is_array($qids)) { $qidstr = array_to_insql($qids); }
  $sql = sprintf('SELECT survey_id FROM %s WHERE id %s', X_RESPONSE, $qidstr);
  $res = execute_sql($sql);
  while ($row = fetch_row($res)) { $res->MoveNext(); $sid = $row[0]; survey_stat_decrement(SURVEY_STAT_COMPLETED, $sid); }
  // $tables = array('response_bool', 'response_date', 'response_multiple', 'response_other', 'response_rank', 'response_rating', 'response_single', 'response_text');
  $tables = array('X_RESPONSE_BOOL', 'X_RESPONSE_DATE', 'X_RESPONSE_MULTIPLE', 'X_RESPONSE_OTHER', 'X_RESPONSE_RANK', 'X_RESPONSE_RATING', 'X_RESPONSE_SINGLE', 'X_RESPONSE_TEXT');
  foreach ($tables as $table) {
    //$sql = "DELETE FROM ".$GLOBALS['ESPCONFIG'][$table.'_table']." WHERE response_id ${qidstr} ";
    $sql = "DELETE FROM ".$table." WHERE response_id ${qidstr} ";
    $result = execute_sql($sql);
  }
  $sql = "DELETE FROM ".X_RESPONSE." WHERE id ${qidstr} ";
  $result = execute_sql($sql);
  return;
}

function generateRandom($length = 6, $vals = 'abchefghjkmnpqrstuvwxyz0123456789') {
  $s = "";

  while(strlen($s) < $length) {
    mt_getrandmax();
    $num = rand() % strlen($vals);
    $s .= substr($vals, $num+4, 1);
  }
  return $s;
}

function randomColor() {
  $red = rand(0, 255);
  $green = rand(0, 255);
  $blue = rand(0, 255);
  return sprintf("#%x%x%x", $red, $green, $blue);
}

function stringToSVG($str) {
  $result = '';
  $glyphs = array();
  $x = 5;
  $y = 30;

  //generates glyphs
  for ($i=0; $i<strlen($str); $i++) {
    $rotation = rand(-20, 20); //rotation degree
    $size = rand (20, 25); //size in pixels
    $jump = rand(-5, 5); //shift up or down by a number of pixels
    $color = randomColor();
    $glyph = sprintf('<text style="fill: %s;" x="%d" y="%d" font-size="%d" transform="translate(%d, %d) rotate(%d) translate(-%d, -%d)">%s</text>%s', $color, $x, $y + $jump, $size, $x, $y + $jump, $rotation, $x, $y + $jump, $str[$i], "\n");
    $glyphs[] = $glyph;
    $x += 20; //move carret
  }

  $indexes = range(0, count($glyphs) - 1);
  shuffle($indexes); //now shuffle them
  foreach($indexes as $index) { $result .= $glyphs[$index]; }
  return $result;
}

function captchaimage($text) {
  $captcha_width = 200;
  $captcha_height = 40;
  header("Expires: Wed, 1 Jan 1997 00:00:00 GMT");
  header("Last-Modified: " . gmdate("D, d M Y H:i:s") . " GMT");
  header("Cache-Control: no-store, no-cache, must-revalidate");
  header("Cache-Control: post-check=0, pre-check=0", false);
  header("Pragma: no-cache");
  header ("Content-type: image/svg+xml");
  printf('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" width="200" height="40">', CAPTCHA_WIDTH, CAPTCHA_HEIGHT);
  printf(' <rect x="0" y="0" width="%d" height="%d" style="stroke: none; fill: none;" ></rect> ', $captcha_width, $captcha_height);
  print stringToSVG($text);
  print '</svg>';
}

function respondentprofile() {
  global $respondent;
  if ($respondent['expiration'] == "0000-00-00 00:00:00") { $expired = "ไม่มีหมดอายุ"; } else { $expired = strftime(FORMAT_DATE, strtotime($respondent['expiration'])); }
  if ($respondent['added'] == "0000-00-00 00:00:00") { $added = "ไม่มีข้อมูล"; } else { $added = strftime(FORMAT_DATE, strtotime($respondent['added'])); }
  $xml = new SimpleXMLElement (file_get_contents(MYXML."/gender.xml"));
  foreach ($xml as $a) { $aa = $a['id']; if ($respondent['gender'] == $aa) { $gender = $a; } }
  $mobile1 = substr($respondent['mobile'], 0, 3);
  $mobile2 = substr($respondent['mobile'], 3, 3);
  $mobile3 = substr($respondent['mobile'], 6, 4);
  $xml = new SimpleXMLElement (file_get_contents(MYXML."/province.xml"));
  foreach ($xml as $a) { $aa = $a['id']; if ($respondent['province'] == $aa) { $province = $a; } }
  $xml = new SimpleXMLElement (file_get_contents(MYXML."/personal_income.xml"));
  foreach ($xml as $a) { $aa = $a['id']; if ($respondent['personal_income'] == $aa) { $personal_income = $a; } }
  $xml = new SimpleXMLElement (file_get_contents(MYXML."/HH_income.xml"));
  foreach ($xml as $a) { $aa = $a['id']; if ($respondent['HH_income'] == $aa) { $HH_income = $a; } }
  $xml = new SimpleXMLElement (file_get_contents(MYXML."/marital.xml"));
  foreach ($xml as $a) { $aa = $a['id']; if ($respondent['marital'] == $aa) { $marital = $a; } }
  $xml = new SimpleXMLElement (file_get_contents(MYXML."/education.xml"));
  foreach ($xml as $a) { $aa = $a['id']; if ($respondent['education'] == $aa) { $education = $a; } }
  echo "<section>\n";
  echo "<h4><i class=\"pe-user pe-fw\"></i> ข้อมูลส่วนตัว</h4>\n";
  echo "<div class=\"row\">\n";
  echo "  <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n";
  echo "    <h5>ข้อมูลบัญชี</h5>\n";
  echo "    <table class=\"table table-hover\">\n";
  echo "      <tr>\n";
  echo "        <td width=\"40%\">ชื่อนามสกุล</td>\n";
  echo "        <td>".$respondent['fname']." ".$respondent['lname']."</td>\n";
  echo "      </tr>\n";
  echo "      <tr>\n";
  echo "        <td width=\"40%\">ล็อคอิน</td>\n";
  echo "        <td>".$respondent['username']."</td>\n";
  echo "      </tr>\n";
  echo "      <tr>\n";
  echo "        <td width=\"40%\">เป็นสมาชิกตั้งแต่</td>\n";
  echo "        <td>".$added."</td>\n";
  echo "      </tr>\n";
  echo "      <tr>\n";
  echo "        <td width=\"40%\">วันหมดอายุ (หากมี)</td>\n";
  echo "        <td>".$expired."</td>\n";
  echo "      </tr>\n";
  echo "      <tr>\n";
  echo "        <td width=\"40%\">คะแนนสะสม</td>\n";
  echo "        <td>".$respondent['point']."</td>\n";
  echo "      </tr>\n";
  echo "    </table>\n";
  echo "  </div>\n";
  echo "  <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n";
  echo "    <h5>ข้อมูลประชากรศาสตร์</h5>\n";
  echo "    <table class=\"table table-hover\">\n";
  echo "      <tr>\n";
  echo "        <td width=\"40%\">เพศ</td>\n";
  echo "        <td>".$gender."</td>\n";
  echo "      </tr>\n";
  echo "      <tr>\n";
  echo "        <td width=\"40%\">วันเกิด</td>\n";
  echo "        <td>".$respondent['birthday_date']."/".$respondent['birthday_month']."/".$respondent['birthday_year']."</td>\n";
  echo "      </tr>\n";
  echo "      <tr>\n";
  echo "        <td width=\"40%\">ปัจจุบันอาศัยอยู่</td>\n";
  echo "        <td>".$province."</td>\n";
  echo "      </tr>\n";
  echo "      <tr>\n";
  echo "        <td width=\"40%\">หมายเลขโทรศัพท์มือถือ</td>\n";
  echo "        <td>(".$mobile1.") ".$mobile2."-".$mobile3."</td>\n";
  echo "      </tr>\n";
  echo "      <tr>\n";
  echo "        <td width=\"40%\">รายได้ส่วนบุคคล</td>\n";
  echo "        <td>".$personal_income."</td>\n";
  echo "      </tr>\n";
  echo "      <tr>\n";
  echo "        <td width=\"40%\">รายได้ครัวเรือน</td>\n";
  echo "        <td>".$HH_income."</td>\n";
  echo "      </tr>\n";
  echo "      <tr>\n";
  echo "        <td width=\"40%\">สถานะภาพสมรส</td>\n";
  echo "        <td>".$marital."</td>\n";
  echo "      </tr>\n";
  echo "      <tr>\n";
  echo "        <td width=\"40%\">ระดับการศึกษา</td>\n";
  echo "        <td>".$education."</td>\n";
  echo "      </tr>\n";
  echo "    </table>\n";
  echo "  </div>\n";
  echo "</div>\n";
  echo "</section>\n";
}

function publicsurvey() {
  get_survey_info($surveys, $_, $accessibility);
  foreach ($surveys as $sid => $survey) {
    if (isset($accessibility[$sid]['available']) && true === (bool)$accessibility[$sid]['available']) { continue; }
    unset($surveys[$sid]);
  }
  if (0 < count($surveys)) {
    echo "<section>\n";
    echo "<h4><i class=\"pe-book pe-fw\"></i> งานวิจัยที่เปิดรับความคิดเห็นในช่วงนี้</h4>\n";
    echo "<p>ต่อไปนี้คืองานวิจัยโครงการต่างๆที่กำลังเปิดรับความคิดเห็นอยู่ในขณะนี้ โดยที่ทางระบบได้ทำแสดงผลเฉพาะงานวิจัยที่มีกลุ่มเป้าหมายตรงกับข้อมูลประชากรศาสตร์ของคุณ ตัวอย่างเช่น งานวิจัยในเรื่องเครื่องสำอางค์ จะถูกแสดงผลอยู่บนหน้าจอของสมาชิกที่เป็นผู้หญิงเท่านั้น</p>\n";
    echo "<p>คุณสามารถกดเพื่อเข้าร่วมงานวิจัยเหล่านี้ได้ทันที</p>\n";
    foreach ($surveys as $survey) {
      printf('<a href="%s" class="btn btn-info btn-lg survey-name" role="button"><i class="pe-book pe-fw"></i> %s</a> &nbsp;', survey_fetch_url_by_survey_name($survey['name']), $survey['title']);
      print "\n";
    }
    echo "</section>\n";
  }
}

function currentsurvey($current) {
  echo "<section>\n";
  echo "<h4><i class=\"pe-wpforms pe-fw\"></i> งานวิจัยในปัจจุบัน</h4>\n";
  if (0 < count($current)) {
    echo "<table class=\"table table-hover\">\n";
    echo "  <tr class=\"active\">\n";
    echo "    <th width=\"20%\">งานวิจัย</th>\n";
    echo "    <th width=\"20%\">การเข้าร่วมของคุณ</th>\n";
    echo "    <th width=\"20%\">คุณเข้าร่วมครั้งล่าสุด</th>\n";
    echo "    <th width=\"40%\">สถานะปัจจุบัน</th>\n";
    echo "  </tr>\n";
    foreach ($current as $sid => $info) {
      list ($name, $status, $date, $avail) = $info;
      printf('<tr><td>%s</td><td>%s</td><td>%s</td><td>%s</td></tr>', $name, $status, $date, $avail);
    }
    echo "</table>\n";
  }
  else { echo "ไม่มีงานวิจัยในปัจจุบัน"; }
  echo "</section>\n";
}

function historysurvey($historical) {
  echo "<section>\n";
  echo "<h4><i class=\"pe-history pe-fw\"></i> งานวิจัยในอดีต</h4>\n";
  if (0 < count($historical)) {
    echo "<table class=\"table table-hover\">\n";
    echo "  <tr class=\"active\">\n";
    echo "    <th width=\"20%\">งานวิจัย</th>\n";
    echo "    <th width=\"20%\">การเข้าร่วมของคุณ</th>\n";
    echo "    <th width=\"20%\">คุณเข้าร่วมครั้งล่าสุด</th>\n";
    echo "    <th width=\"40%\">สถานะปัจจุบัน</th>\n";
    echo "  </tr>\n";
    foreach ($historical as $sid => $info) {
      list ($name, $status, $date, $avail) = $info;
      printf('<tr><td>%s</td><td>%s</td><td>%s</td><td>%s</td></tr>', $name, $status, $date, $avail);
    }
    echo "</table>\n";
  }
  else { echo "ไม่มีงานวิจัยในอดีต"; }
  echo "</section>\n";
}

function get_survey_info(&$surveys, &$responses, &$accessibility) {
  $surveys       = array();
  $responses     = array();
  $accessibility = array();

  survey_get_public($surveys);
  $sids = array_keys($surveys);

  $ok = get_current_respondent($respondent);
  if ($ok && array_key_exists('realm', $respondent)) {
    survey_get_in_realm($respondent['realm'], $private);
    survey_merge_sets($surveys, $private);
    $sids = array_keys($surveys);
    survey_get_responses($responses, $sids, $respondent['username']);
    survey_get_accessibility($accessibility, $sids, $respondent['username'], $respondent['realm']);
  }
  else { survey_get_accessibility($accessibility, $sids); }
  return true;
}

function partition_surveys($surveys, $responses, $accessibility, &$current, &$historical) {
  foreach ($surveys as $sid => $survey) {
    if (isset($accessibility[$sid]['available']) && true === (bool)$accessibility[$sid]['available']) {
      $name = sprintf('<a href="%s">%s</a>', survey_fetch_url_by_survey_name($survey['name']), $survey['title']);
      $status = fetch_status($sid, $responses);
      $date = fetch_latest_submission_date($sid, $responses);
      $avail = fetch_availability($survey, $availability);
      if (STATUS_OPEN !== $availability) { $name = $survey['title']; }
      $current[] = array($name, $status, $date, $avail);
    } else {
      $name = $survey['title'];
      $status = fetch_status($sid, $responses);
      $date = fetch_latest_submission_date($sid, $responses);
      $avail = "ปิดรับความคิดเห็นไปแล้ว";
      $historical[] = array($name, $status, $date, $avail);
    }
  }
}

function fetch_status($sid, $responses) {
  if (isset($responses[$sid])) {
    if (isset($responses[$sid]['complete'])) { $status = ('Y' == $responses[$sid]['complete'] ? STATUS_FINISHED : STATUS_ALL_PARTIAL); }
    else { $status = STATUS_FINISHED; foreach ($responses[$sid] as $response) { if ('N' == $response['complete']) { $status = STATUS_SOME_PARTIAL; } } }
  }
  else { $status = STATUS_NOT_STARTED; }
  return $status;
}

function fetch_latest_submission_date($sid, $responses) {
  if (isset($responses[$sid])) {
    if (isset($responses[$sid]['submitted'])) { $date = $responses[$sid]['submitted']; }
    else { $date = '0000-00-00 00:00:00'; foreach ($responses[$sid] as $response) { if ($date < $response['submitted']) { $date = $response['submitted']; } } }
    $datets = strtotime($date);
    if (-1 !== $datets) { $date = strftime(FORMAT_DATE, $datets); }
  }
  else { $date = ''; }
  return $date;
}

function fetch_availability($survey, &$rc) {
  $rc = survey_open($survey['open_date'], $survey['close_date']);
  switch ($rc) {
    case STATUS_OPEN: return "เปิดรับความคิดเห็นอยู่ คุณสามารถเข้าร่วมได้"; break;
    case STATUS_CLOSED_TOO_EARLY: return "งานวิจัยชิ้นนี้ยังไม่เปิดรับความคิดเห็น คุณต้องรอก่อน"; break;
    case STATUS_CLOSED_TOO_LATE: return "งานวิจัยชิ้นนี้ได้ปิดรับความคิดเห็นไปแล้ว"; break;
    default: assert('false; // unexpected case reached; code bug'); return '';
  }
}

?>
