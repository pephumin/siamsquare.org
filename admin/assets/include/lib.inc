<?php

require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/config.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/db.inc';

function esp_where($where = null) {
  $cfg =& $GLOBALS['ESPCONFIG'];
  if (empty($where)) { $where = 'index'; }
  $where = strtolower(preg_replace('/ +/','_',$where));
  if (!preg_match('/^[A-Za-z0-9_]+$/',$where)) { $where = 'index'; }
  $filecheck = DOCROOT . '/admin/assets/include/where/'.$where.'.inc';
  if (!file_exists($filecheck)) { $where = 'index'; }
  if (!file_exists($filecheck)) { echo('Unable to open include file. Check INI settings. Aborting.'); exit; }
  return($filecheck);
}

function esp_init_adodb() {
  $cfg =& $GLOBALS['ESPCONFIG'];
  $dbcheck = DOCROOT . '/admin/assets/include/lib/adodb/adodb.inc.php';
  if (!file_exists($dbcheck)) { echo('Unable to open ADODB include file. Check INI settings. Aborting.'); exit; }
  else { include DOCROOT . '/admin/assets/include/lib/adodb/adodb.inc.php'; }
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
  require_once DOCROOT . '/admin/assets/include' . $path . '.inc';
  return true;
}

function esp_file_get_contents($file) {
  if (function_exists('file_get_contents')) { return file_get_contents($file); }
  $f = fopen($file,'r');
  if (!$f) { return ''; }
  $t = '';
  while ($s = fread($f,100000)) { $t .= $s; }
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

function goto_thankyou($sid,$referer) {
  //require_once DOCROOT . '/admin/assets/include/lib/espsurveystat.inc';
  survey_stat_decrement(SURVEY_STAT_ABANDONED, $sid);
  survey_stat_increment(SURVEY_STAT_COMPLETED, $sid);
  $cfg =& $GLOBALS['ESPCONFIG'];
  $sql = "SELECT thank_head, thank_head_th, thank_body, thank_body_th FROM ".$cfg['survey_table']." WHERE id=${sid}";
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

  if (isset($_GET['where']) && $_GET['where'] == 'test') {
    if ($GLOBALS['ESPCONFIG']['limit_double_postings'] == 0) { $ref = "<a href=\"". $referer."\">Return</a><br />"; }
    else { $ref = ""; }
  }
  else { $ref = check_referer($referer); }
  echo $ref;
  return;
}

function check_referer($referer) {
  //$pos = strpos($referer, $GLOBALS['ESPCONFIG']['autopub_url']);
  $pos = strpos($referer, MYSURVEY);
  if ($pos === false) {
    if (!empty($_REQUEST['direct']) && $_REQUEST['direct'] === '1') { $retstr = ""; }
    else {
      if ($GLOBALS['ESPCONFIG']['limit_double_postings'] == 0) { $retstr = "<a href=\"". $referer."\">Return</a>"; }
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
  //if (0 !== strpos($url, 'http')) { $url = rtrim($GLOBALS['ESPCONFIG']['base_url'], '/') . '/' . ltrim($url, '/'); }
  if (0 !== strpos($url, 'http')) { $url = rtrim(MYHOME, '/') . '/' . ltrim($url, '/'); }
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
  } else { header(sprintf('Location: %s', $url)); }
  exit(0);
}

function goto_saved($sid, $url) {
  if ($_REQUEST['test']) { $url = $url."&test=1"; }
  survey_stat_decrement(SURVEY_STAT_ABANDONED, $sid);
  survey_stat_increment(SURVEY_STAT_SUSPENDED, $sid);
  echo "<h2>Your survey has been saved</h2>\n";
  echo "<p>Your progress has been saved. You may return at any time to complete this survey.</p>\n";
  echo "<p>To do so, simply bookmark the link below.</p>\n";
  echo "<p>You may be prompted for your username and password to complete the survey.</p>\n";
  echo "<a href=\"$url\" class=\"btn btn-success\" role=\"button\">Continue survey</a>\n";
  return;
}

function execute_sql($command, $limit=null, $assoc=ADODB_FETCH_NUM) {
  $cfg =& $GLOBALS['ESPCONFIG'];
  $cfg['adodb_conn']->SetFetchMode($assoc);
  if ($limit) { $result = $cfg['adodb_conn']->SelectLimit($command,$limit); } else { $result = $cfg['adodb_conn']->Execute($command); }
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
  switch ($cfg['adodb_database_type']) {
    case "postgres":
    case "oracle":
      $sql = "select currval('".$sequence."')";
      return $cfg['adodb_conn']->GetOne($sql);
    default:
      return $cfg['adodb_conn']->Insert_ID();
  }
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
  $cfg =& $GLOBALS['ESPCONFIG'];
  switch ($cfg['adodb_database_type']) {
    case "postgres":
      return "bin_compare($status, $code)";
    case "oracle":
      return "bitand($status, $code)";
    default:
      return "($status & $code)";
  }
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
  $cfg =& $GLOBALS['ESPCONFIG'];
  switch ($cfg['adodb_database_type']) {
    case "postgres":
    case "oracle":
      return "md5($password)";
    case "sqlite":
      return _addslashes(md5($password));
    default:
      return "PASSWORD($password)";
  }
}

function ErrorNo() {
  $cfg =& $GLOBALS['ESPCONFIG'];
  return $cfg['adodb_conn']->ErrorNo();
}

function ErrorMsg() {
  $cfg =& $GLOBALS['ESPCONFIG'];
  return $cfg['adodb_conn']->ErrorMsg();
}

function password_upgrade($username, $password, $table) {
  $cfg =& $GLOBALS['ESPCONFIG'];
  if ($cfg['adodb_database_type'] == "mysql") {
    $info = $cfg['adodb_conn']->ServerInfo();
    $version = $info['version'];
    if ($version > 4.0) {
      $username = _addslashes($username);
      $sql = "SELECT * FROM ".$table." WHERE username = ".$username." AND password = OLD_PASSWORD($password) AND disabled = 'N' AND (expiration = '0000-00-00 00:00:00' OR expiration > ". sys_time_stamp().")";
      $accres = execute_sql( $sql, "", ADODB_FETCH_ASSOC );
      if (!$accres) { echo (ErrorMsg()); }
      if (record_count($accres) == 1) {
        // A matching row was found - upgrade his password.
        $sql = "UPDATE $table SET password = PASSWORD($password) WHERE username = $username";
        $accres = execute_sql( $sql, "", ADODB_FETCH_ASSOC );
        if (!$accres) { echo (ErrorMsg()); }
      }
    }
  }
}

function MetaTables() {
 $cfg =& $GLOBALS['ESPCONFIG'];
 return $cfg['adodb_conn']->MetaTables('TABLES');
}

function array_to_insql($array) {
  if (count($array)) { return("IN (".preg_replace("/([^,]+)/","\\1",join(",",array_map("_addslashes", $array))).")"); }
  return 'IS NULL';
}

function survey_num_sections($sid) {
  $sql = "SELECT COUNT(*) + 1 FROM ".$GLOBALS['ESPCONFIG']['question_table']." WHERE survey_id=${sid} AND type_id='99' AND deleted='N'";
  $result = execute_sql($sql);
  $count = $result->fields[0];
  db_close($result);
  return($count);
}

function survey_get_sections($sid, $field = 'id') {
  if (empty($field)) { $field = 'id'; }
  $sql = "SELECT $field, type_id FROM ".$GLOBALS['ESPCONFIG']['question_table']." WHERE survey_id = $sid AND deleted = 'N' ORDER BY position";
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
  $sql = "SELECT $field, type_id FROM ".$GLOBALS['ESPCONFIG']['question_table']." WHERE survey_id = $sid AND deleted = 'N' ORDER BY position";
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
  if(!empty($table)) { $table .= '.'; }
  $sql = "SELECT position FROM ".$GLOBALS['ESPCONFIG']['question_table']." WHERE survey_id=${sid} AND type_id='99' AND deleted='N' ORDER BY position,id";
  $result = execute_sql($sql);
  $num_sections = record_count($result) + 1;

  if($section > $num_sections) { return(''); } // invalid section

  $ret = array("${table}survey_id='${sid}'", "${table}deleted='N'");
  if ($section > 1 && $num_sections > 1) {
    $result->Move($section-2);
    array_push($ret, "${table}position>" . $result->fields[0]);
  }
  if ($section < $num_sections && $num_sections > 1) {
    $result->Move($section-1);
    array_push($ret, "${table}position<" . $result->fields[0]);
  }
  db_close($result);
  return('WHERE ' . join(' AND ',$ret) . ' ');
}

function esp_type_has_choices() {
  $has_choices = array();
  //$sql = 'SELECT id, has_choices FROM '.$GLOBALS['ESPCONFIG']['question_type_table'].' ORDER BY id';
  $sql = 'SELECT typeid, has_choices FROM '.$GLOBALS['ESPCONFIG']['question_type_table'].' ORDER BY id';
  $result = execute_sql($sql);
  while(list($tid,$answ) = fetch_row($result)) {
    $result->MoveNext();
    if($answ == 'Y') { $has_choices[$tid] = 1; }
    else { $has_choices[$tid] = 0; }
  }
  db_close($result);
  return($has_choices);
}

function esp_type_response_table() {
  //$sql = 'SELECT id, response_table FROM '.$GLOBALS['ESPCONFIG']['question_type_table'].' ORDER BY id';
  $sql = 'SELECT typeid, response_table FROM '.$GLOBALS['ESPCONFIG']['question_type_table'].' ORDER BY id';
  $result = execute_sql($sql);
  $response_table = array();
  while(list($tid,$answ) = fetch_row($result)) {
    $result->MoveNext();
    $response_table[$tid] = $answ;
  }
  db_close($result);
  return($response_table);
}

function mksuccess ($msg) {
  //return("<div class=\"alert alert-success alert-dismissible\" role=\"alert\"><a href=\"#\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a><i class=\"pe-check-square-o\"></i>&nbsp; ${msg}</div>\n");
  return("<div class=\"alert alert-success alert-dismissible\" role=\"alert\"><a class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a><i class=\"pe-check-square-o\"></i>&nbsp; ${msg}</div>\n");
}

function mkinfo ($msg) {
  //return("<div class=\"alert alert-info alert-dismissible\" role=\"alert\"><a href=\"#\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a><i class=\"pe-info-circle\"></i>&nbsp; ${msg}</div>\n");
  return("<div class=\"alert alert-info alert-dismissible\" role=\"alert\"><a class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a><i class=\"pe-info-circle\"></i>&nbsp; ${msg}</div>\n");
}

function mkwarn ($msg) {
  //return("<div class=\"alert alert-warning alert-dismissible\" role=\"alert\"><a href=\"#\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a><i class=\"pe-bullhorn\"></i>&nbsp; ${msg}</div>\n");
  return("<div class=\"alert alert-warning alert-dismissible\" role=\"alert\"><a class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a><i class=\"pe-bullhorn\"></i>&nbsp; ${msg}</div>\n");
}

function mkerror ($msg) {
  //return("<div class=\"alert alert-danger alert-dismissible\" role=\"alert\"><a href=\"#\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a><i class=\"pe-exclamation-circle\"></i>&nbsp; ${msg}</div>\n");
  return("<div class=\"alert alert-danger alert-dismissible\" role=\"alert\"><a class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a><i class=\"pe-exclamation-circle\"></i>&nbsp; ${msg}</div>\n");
}

// function mkgeopattern ($msg, $no) {
//   return("<div class=\"alert alert-geopattern${no} alert-dismissible\" role=\"alert\"><a href=\"#\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a><i class=\"pe-cog pe-spin pe-2x\"></i><br /><br />${msg}</div>\n");
// }

function mkradio ($_name, $value, $varr = null) {
  if ($varr == null) { $varr =& $_POST; }
  $str = '<input type="radio" name="' . htmlspecialchars($_name) .'" value="' . htmlspecialchars($value) .'"';
  if ( isset($varr[$_name]) && $varr[$_name] == $value ) { $str .= " checked=\"checked\""; }
  $str .= '>';
  return($str);
}

function mkcheckbox ($_name, $value, $varr = null) {
  if ($varr == null) { $varr =& $_POST; }
  $str = '<input type="checkbox" name="' . htmlspecialchars($_name) .'[]" value="' . htmlspecialchars($value) .'"';
  //$str = '<input type="checkbox" name="' . htmlspecialchars($_name) .'" value="' . htmlspecialchars($value) .'"';
  if (isset($varr[$_name]) && is_array($varr[$_name]) && in_array($value, $varr[$_name])) { $str .= " checked=\"checked\""; }
  $str .= '>';
  return($str);
}

function mktext ($_name, $size = 20, $max = 0, $varr = null) {
  if ($varr == null) { $varr =& $_POST; }
  $size = intval($size);
  $max = intval($max);
  $str = "size=\"$size\"";
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
  while (list($cid, $content) = each($options)) {
    $checked = '';
    if (isset($varr[$_name]) && $varr[$_name] == $cid) { $checked = " selected=\"selected\""; }
    $str .= "<option value=\"${cid}\"${checked}>${content}</option>\n";
  }
  $str .= "</select>\n";
  return($str);
}

function mkfile ($_name) {
  return('<input type="file" name="'.htmlspecialchars($_name) .'">');
}

function mksubmit($_name, $_value = null, $_attrs = array ()) {
  if ($_value == null) { $_value = _('Submit'); }
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
  $str .= file_get_contents( DOCROOT . '/admin/assets/include/where/login.inc');
  if ($_surveyname != "") { $str .= '<input type="hidden" name="surveyname" value="'."$_surveyname".'">'; }
  if ($_css != "") { $str .= '<input type="hidden" name="css" value="'."$_css".'">'; }
  $str .= "\n";
  return $str;
}

function survey_auth($sid, $username, $password, $raw_password, $css = null, $title = null) {
  // Default to _unauthorized_
  $auth = false;

  if (isset($_GET['auth_options']) || isset($_POST['auth_options'])) {
    $GLOBALS['errmsg'] = mkerror('Error processing survey: Security violation.');
    return(false);
  }

  $GLOBALS['auth_options'] = array();

  esp_init_adodb();
  // $sql = "SELECT realm FROM ".$GLOBALS['ESPCONFIG']['survey_table']." WHERE id = $sid AND public = 'N' ";
  $sql = "SELECT realm FROM ".$GLOBALS['ESPCONFIG']['survey_table']." WHERE id = $sid ";
  // echo $sql;
  // echo "<br>\n";
  $accres = execute_sql($sql);
  if (!$accres) { $GLOBALS['errmsg'] = mkerror('Unable to execute query for access.'); return(false); }
  // no matching rows ... no authorization required
  if (record_count($accres) < 1) { return(true); }
  $realms = $accres->fields[0];
  db_close($accres);

  // A matching row was found - the survey requires authentication.
  $loginAttempt = false;
  $maxlogin = 0;

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
  if (!$auth) {
    // record the fact that authentication failed
    if ($loginAttempt) {
      //require_once DOCROOT . '/admin/assets/include/lib/espsurveystat.inc';
      survey_stat_increment(SURVEY_STAT_LOGINFAIL, $sid);
    }

    if (!isset($survey_name)) { $survey_name = ""; }
    if (isset($_GET['name'])) { $survey_name = $GLOBALS['_GET']['name']; }
    elseif (isset($_POST['name'])) { $survey_name = $_POST['name']; }

    $error_message = "";

    if ($_SERVER['REQUEST_METHOD'] == 'POST') { $error_message = "Incorrect User ID or Password, or your account has been disabled/expired."; }

    require_once DOCROOT . "/admin/assets/include/template.php";
    $title = 'Login Page';
    pageHeader($title);
    echo show_login($survey_name, $error_message, $css, $title);
    if ($notes) { pageFooter($notes); } else { pageFooter(); }
    exit;
    return(false);
  }

  if ($maxlogin > 0) {
    // see if user is over the MAX # of responses
    $sql = "SELECT COUNT(*) < $maxlogin FROM ".$GLOBALS['ESPCONFIG']['response_table']." WHERE survey_id = ${sid} AND complete = 'Y' AND username = "._addslashes($username);
    $auth = get_one($sql);
  }

  if (!$auth) {
    if (!isset($survey_name)) { $survey_name = ""; }
    if (isset($GLOBALS['_GET']['name'])) { $survey_name = $GLOBALS['_GET']['name']; }
    elseif (isset($_POST['name'])) { $survey_name = $_POST['name']; }
    $error_message = "";
    if ($_SERVER['REQUEST_METHOD'] == 'POST') { $error_message = "Your account has been disabled or you have already completed this survey."; }
    require_once DOCROOT . "/admin/assets/include/template.php";
    $title = 'Login Page';
    pageHeader($title);
    echo show_login($survey_name, $error_message, $css, $title);
    if ($notes) { pageFooter($notes); } else { pageFooter(); }
    exit;
    return(false);
  }
  return(true);
}

function manage_auth($username, $password, $raw_password="") {
  // see if session is expired, or has been logged out
  if(isset($_SESSION['acl']) && isset($_SESSION['acl']['expired'])) { if($_SESSION['acl']['expired']-- > 0) { $username = ''; $password = ''; } }
  // see if ACL is cached
  if (!empty($username) && !empty($password) && isset($_SESSION['acl']) && isset($_SESSION['acl']['username']) && $_SESSION['acl']['username'] == $username) { return(true); }
  $auth = false; // default to unauthorized
  $_SESSION['acl'] = array();
  if (!empty($username) && !empty($password)) {
    // Formulate the query check whether user is authorized
    $sql = "SELECT * FROM ".$GLOBALS['ESPCONFIG']['designer_table']." WHERE username = "._addslashes($username)." AND password = ".db_crypt($password) ."AND disabled = 'N' AND (expiration = '0000-00-00 00:00:00' OR expiration > ". sys_time_stamp().")";
    // Execute the query and put recordset in $accres
    $accres = execute_sql( $sql, "", ADODB_FETCH_ASSOC );
    if (!$accres) {
      header( 'HTTP/1.0 503 '. "Service Unavailable");
      echo('<html><head><title>Service Unavailable</title></head><body><h2>HTTP 503 Service Unavailable</h2>'.
      mkerror('Unable to load ACL.' .' ('. ErrorMsg() .')') .
      '</body></html>');
      return(false);
    }
    // A matching row was found - the user is authorized.
    if (record_count($accres) > 0) { $auth = true; }
  }
  if (!$auth) {
    $error_message = "";
    if ($_SERVER['REQUEST_METHOD'] == 'POST') { $error_message = 'Incorrect User ID or Password, or your account has been disabled/expired.'; }
    require_once DOCROOT . "/admin/assets/include/template.php";
    $title = 'Authorisation';
    pageHeader($title);
    echo show_login(null, $error_message, null, 'Client Login');
    // $notes = array (
    //   array("title" => "Welcome, please login", "text" => "You need to login before you can proceed further with our system.", "image" => "assets/img/notification.svg")
    // );
    if ($notes) { pageFooter($notes); } else { pageFooter(); }
    exit;
    return(false);
  }
  // All tests passed ... create ACL array, and stick it in the session
  $acl = array(
    'username'  => $username,
    'superuser' => 'N',
    'home' => DOCROOT . '/admin/assets/'
  );
  $fields = array('pdesign', 'pstatus', 'pdata', 'pall', 'pgroup', 'puser');
  foreach ($fields as $f) { $$f = array(); }
  while (!$accres->EOF) {
    if ($accres->fields['realm'] == 'superuser') { $acl['superuser'] = 'Y'; }
    foreach ($fields as $f) { if($accres->fields[$f] == 'Y') { array_push($$f, $accres->fields['realm']); } }
    $accres->MoveNext();
  }
  db_close($accres);
  foreach ($fields as $f) { $acl[$f] =& $$f; }
  $_SESSION['acl'] =& $acl;
  // if one were to want login accounting (logs) this would be the ideal place to do so...
  return(true);
}

function manage_logout() {
  // clear existing ACL, and set the expired flag
  $_SESSION['acl'];
  $_SESSION['username'] = "";
  $_SESSION['raw_password'] = "";
  session_destroy();
  $acl = array('expired' => 2);
  $_SESSION['acl'] = array('expired' => 2);
}

function auth_is_owner($sid, $user) {
  $val = false;
  $sql = "SELECT s.owner = "._addslashes($user)."FROM ".$GLOBALS['ESPCONFIG']['survey_table']." s WHERE s.id=$sid";
  $result = execute_sql($sql);
  if (!(list($val) = fetch_row($result))) { $val = false; }
  db_close($result);
  return $val;
}

function auth_get_survey_realm($sid) {
  $val = '';
  $sql = "SELECT s.realm FROM ".$GLOBALS['ESPCONFIG']['survey_table']." s WHERE s.id=$sid";
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
  $sql = "UPDATE ".$GLOBALS['ESPCONFIG']['designer_table']." SET password=".db_crypt($new) ." WHERE username="._addslashes($user)." AND password=".db_crypt($old);
  return(execute_sql($sql) && affected_rows() > 0);
}

function auth_get_option($opt) {
  return (isset($GLOBALS['auth_options'][$opt]) && $GLOBALS['auth_options'][$opt] == 'Y');
}

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

function authenticate($username, $password, &$realms) {
  $cfg =& $GLOBALS['ESPCONFIG'];

  // see if we have a realm where that <username, password> tuple is authorized and enabled
  $user = _addslashes($username);
  $pass = db_crypt(_addslashes($password));
  $now  = sys_time_stamp();
  $sql = "SELECT realm FROM ".$GLOBALS['ESPCONFIG']['respondent_table']." WHERE username = $user AND password = $pass AND disabled = 'N' AND (expiration='0000-00-00 00:00:00' OR $now < expiration)";

  $res = execute_sql($sql);
  if ($res) {
    // Two or more users with the same username and password, but different realms, will pass this check.
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

function authenticate_in_realm($username, $password, $realm) {
  assert('is_callable("authenticate"); // expecting an authenticate function to be defined');
  $isAuthenticated = authenticate($username, $password, $realms);
  return ($isAuthenticated && in_array($realm, $realms) ? true : false);
}

function set_session_authentication($isAuthenticated) {
  @header('P3P: CP="NOI ADM DEV PSAi COM NAV OUR OTRo STP IND DEM"');
  // start sessions if needed
  if ('' == session_name()) { session_start(); }
  if ($isAuthenticated) { $_SESSION['authenticated'] = true; }
  else {
    // wipe out the session...
    $_SESSION = array ();
    session_destroy();
    // and regenerate it for next requests
    session_start();
    session_regenerate_id();
    setcookie(session_name(), session_id());
  }
}

function is_session_authenticated() {
  return (array_key_exists('authenticated', $_SESSION) ? $_SESSION['authenticated'] : false);
}

function set_current_respondent($username, $realm, $password = null) {
  $cfg =& $GLOBALS['ESPCONFIG'];
  $sql = sprintf('SELECT * FROM %s WHERE username = %s AND realm = %s', $cfg['respondent_table'], _addslashes($username), _addslashes($realm));
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

function change_profile($username, $realm, $firstName, $lastName, $emailAddress) {
  $_username     = _addslashes($username);
  $_realm        = _addslashes($realm);
  $_firstName    = _addslashes($firstName);
  $_lastName     = _addslashes($lastName);
  $_emailAddress = _addslashes($emailAddress);
  $changed  = sys_time_stamp();
  $sql = "UPDATE ".$GLOBALS['ESPCONFIG']['respondent_table']."
          SET fname = $_firstName, lname = $_lastName, email = $_emailAddress, changed = $changed
          WHERE username = $_username AND realm = $_realm";
  $res = execute_sql($sql);
  $notes = array (array("title" => "Profile updated", "text" => "You have successfully updated your detailed profile.", "image" => "assets/img/notification.svg"));
  if (1 === affected_rows()) { set_current_respondent($username, $realm); db_close($res); notify($notes); return true; }
  else { return false; }
}

function change_password($username, $realm, $password) {
  $_username = _addslashes($username);
  $_realm    = _addslashes($realm);
  $_password = db_crypt(_addslashes($password));
  $changed  = sys_time_stamp();
  $sql = "UPDATE ".$GLOBALS['ESPCONFIG']['respondent_table']."
          SET password = $_password, changed =$changed
          WHERE username = $_username AND realm = $_realm";
  $res = execute_sql($sql);
  $notes = array (array("title" => "Password changed", "text" => "You have successfully changed your password. Please keep it safe and secure.", "image" => "assets/img/notification.svg"));
  if (1 === affected_rows()) { set_current_respondent($username, $realm); db_close($res); notify($notes); return true; }
  else { return false; }
}

function mkcrossformat($counts, $qid, $tid) {
    $cids = array();
    $cidCount = 0;

    // let's grab the cid values for each of the questions
    // that we allow cross analysis on.
    if ($tid == 1) {
        $cids = array('Y', 'N');
    } else {
        $sql = "SELECT id FROM ".$GLOBALS['ESPCONFIG']['question_choice_table']."
                WHERE question_id = $qid
                ORDER BY id";
        $result = execute_sql($sql);
        while ($cid = fetch_row($result)) {
            $result->MoveNext();
            array_push($cids, $cid[0]);
        }
        db_close($result);
    }

    $output .= "<table class=\"table table-hover\">\n";
    $output .= "<tbody>\n";

    while(list($content,$num) = each($counts)) {
        if ($cidCount >= count($cids)) $cidCount = count($cids) - 1;
        $new = $cids[$cidCount++];
        $output .= "<tr>\n";
        $output .= "<td width=\"34\" class=\"text-center\">\n";
        $output .= "  <input type=\"checkbox\" name=\"cids[]\" value=\"$new\" />\n";
        $output .= "</td>\n";
        $output .= "<td>$content</td>\n";
        $output .= "</tr>\n";
    }
    $output .= "</tbody></table>\n";
    return $output;
}

function mkrespercent($counts,$total,$precision,$showTotals) {
  $i=0;
  $bg='';
?>
<table class="table table-hover">
<?php
  while(list($content,$num) = each($counts)) {
    if($num>0) { $percent = $num/$total*100.0; }
    else { $percent = 0; }
    if($percent > 100) { $percent = 100; }

?>
  <tr>
    <td><?php echo($content); ?></td>
    <td align="left">
<?php
    if($num) {
      echo("&nbsp;<img src=\"/images/hbar_l.gif\" height=9 width=4>");
      printf("<img src=\"/images/hbar.gif\" height=9 width=%d>",$percent*2);
      echo("<img src=\"/images/hbar_r.gif\" height=9 width=4>");
      printf("&nbsp;%.${precision}f%%",$percent);
    }
?></td>
    <td align="right">(<?php echo($num); ?>)</td>
  </tr>
<?php
    $i += $num;
  } // end while
  if($showTotals) {
    if($i>0) { $percent = $i/$total*100.0; }
    else { $percent = 0; }
    if($percent > 100) { $percent = 100; }
?>
  <tr>
    <td><strong><?php echo(_('TOTAL')); ?></strong></td>
    <td width="40%"><strong>&nbsp;<?php
      echo("<img src=\"/images/hbar_l.gif\" height=9 width=4>");
      printf("<img src=\"/images/hbar.gif\" height=9 width=%d>",$percent*2);
      echo("<img src=\"/images/hbar_r.gif\" height=9 width=4>");
      printf("&nbsp;%.${precision}f%%",$percent); ?></strong></td>
    <td width="10%" align="right"><strong><?php print "$i ($total)"; ?></strong></td>
  </tr>
<?php } ?>
</table>
<?php
}

function mkresrank($counts,$total,$precision,$showTotals) {
  $bg='';
?>
<table border="0">
  <tr>
    <td><strong>Rank</strong></td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
<?php
  arsort($counts);
  $i=0; $pt=0;
  while(list($content,$num) = each($counts)) {
    if($num)
      $p = $num/$total*100.0;
    else
      $p = 0;
    $pt += $p;

?>
  <tr>
    <td><strong><?php echo(++$i); ?></strong></td>
    <td><?php echo($content); ?></td>
    <td width="60"><?php if($p) printf("%.${precision}f%%",$p); ?></td>
    <td width="60">(<?php echo($num); ?>)</td>
  </tr>
<?php
  } // end while
  if($showTotals) {

?>
  <tr>
    <td colspan=2><strong><?php echo(_('TOTAL')); ?></strong></td>
    <td><strong><?php printf("%.${precision}f%%",$pt); ?></strong></td>
    <td><strong><?php print "$i ($total)"; ?></strong></td>
  </tr>
<?php } ?>
</table>
<?php
}

function mkrescount($counts,$total,$precision,$showTotals) {
  $i=0;
?>
<table class="table table-hover">
<?php
    $bg = '';
  while(list($content,$num) = each($counts)) {
?>
  <tr>
    <td><?php echo($content); ?></td>
    <td width="60"><?php echo($num); ?></td>
    <td width="60">(<?php if($num) printf("%.${precision}f",$num/$total*100.0); ?>%)</td>
  </tr>
<?php
    $i += $num;
  } // end while
  if($showTotals) {

?>
  <tr>
    <td><strong><?php echo(_('TOTAL')); ?></strong></td>
    <td><strong><?php print "$i ($total)"; ?></strong></td>
    <td><strong>(<?php if($i) printf("%.${precision}f",$i/$total*100.0); ?>%)</strong></td>
  </tr>
<?php  } ?>
</table>
<?php
}

function mkreslist($counts,$total,$precision,$showTotals) {
  if ($total == 0) { return; }
?>
<table class="table table-hover">
  <tr><th><?php echo(_('#')); ?></th><th>Response</th></tr>
<?php
  while(list($text,$num) = each($counts)) {
    echo("<tr><th>$num</th><td>$text</td></tr>\n");
  }
?>
</table>
<?php
}

function mkresavg($counts,$total,$precision,$showTotals,$length) {
  if (!$length) { $length = 5; }
  $width = 200 / $length;
?>
<table class="table table-hover">
  <tr>
    <td></td>
    <td colspan="<?php echo($length+2); ?>">Average Rank</td>
  </tr>
  <tr>
    <td></td>
    <?php
      for ($i = 0; $i < $length; )
        echo( "<td align=\"right\" width=\"$width\">". ++$i ."</td>\n");
    ?>
    <td width="20"></td>
    <td></td>
  </tr>
<?php
    $bg = '';
  while(list($content,$avg) = each($counts)) {

?>
  <tr>
    <td><?php echo($content); ?>&nbsp;</td>
    <td colspan="<?php echo($length+1); ?>">
<?php
    if($avg) {
      echo('<img src="/images/hbar_l.gif" height="9" width="4">');
      if (($j = $avg * $width - 11) > 0)
        printf('<img src="/images/hbar.gif" height="9" width="%d">', $j);
      echo('<img src="/images/hbar_r.gif" height="9" width="4">');
    }
?>
    </td>
    <td width="60">(<?php printf("%.${precision}f",$avg); ?>)</td>
  </tr>
<?php
  } // end while
?>
</table>
<?php
}

function merge_expand_qids($targetq, $surveys) {
  $sql = "SELECT survey_id FROM ".$GLOBALS['ESPCONFIG']['question_table']." WHERE id ". array_to_insql($targetq);
  $targets = get_one($sql);
  $sidstr = array_to_insql($surveys);
  $sql = "SELECT Q.survey_id, Q.id FROM ".$GLOBALS['ESPCONFIG']['question_table']." Q WHERE Q.survey_id ${$sidstr} AND deleted='N' ORDER BY Q.survey_id, Q.position, Q.id";
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
  $sql = "SELECT question_id FROM ".$GLOBALS['ESPCONFIG']['question_choice_table']." WHERE id ". array_to_insql($targetc);
  $result = execute_sql($sql);
  $targetq = $result->fields[0];
  db_close($result);
  array_push($questions,$targetq);
  $qidstr = array_to_insql($questions);
  $sql = "SELECT C.question_id, C.id FROM ".$GLOBALS['ESPCONFIG']['question_choice_table']." C WHERE C.question_id ${$qidarr} ORDER BY C.question_id, C.id";
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
    //global $_POST;

    $sql = "SELECT id,type_id,content,required,ans_uniq FROM ".$GLOBALS['ESPCONFIG']['question_table']."
    ". survey_select_section_sql($sid,$section) ." AND deleted='N' AND type_id < 98 ORDER BY position";

    $result = execute_sql($sql);
    if(record_count($result) < 1) {
      // no rows returned, so no need to continue
      db_close($result);
      return('');
    }

    $missing = array(); // array of missing answers
    $not_numeric = array(); // array of numerical answers that are non-numeric
    $unique_answers = array(); // array of questions that must have a unique answer (only for Textbox or numerical types)

    // we loop through all the questions and check for missing and non-numerical issues, but only if the question
    // was shown in the first place (it might have had a condition on it)

    while(list($qid,$tid,$content,$required,$ans_uniq) = fetch_row($result)) {

        // if the question has no condition:    $question_was_shown=true
        // if the question has a condition:     $question_was_shown=true if condition is fulfilled, false otherwise
        $question_was_shown = question_conditioncheck($sid,$qid,$rid);

        //var_dump($question_was_shown);
        if ($question_was_shown) {

            // response_text
            //if ($ans_uniq=='Y' && ($tid==3 || $tid==4 || $tid==9 || $tid==10)) {
            //if ($ans_uniq=='Y' && ($tid==3 || $tid==4 || $tid==10)) {
            //    $tmp_response=_addslashes($_POST[$qid]);
            //    //$sql = "SELECT COUNT(*) FROM ".$GLOBALS['ESPCONFIG']['response_text_table']." WHERE question_id=$qid && response="._addslashes($_POST[//$qid]);
            //    $sql = "SELECT COUNT(id) FROM ".$GLOBALS['ESPCONFIG']['response_text_table']." WHERE question_id=$qid && response="._addslashes($_POST[$//qid]);
            //    echo $sql;
            //    $count_result = get_one($sql);
            //    if ($count_result) { $unique_answers[$qid] = $content; }
            //}

            // response_rank
            if ($required=='Y' && $tid==6) {
                $sql = "SELECT id FROM ".$GLOBALS['ESPCONFIG']['question_choice_table']." WHERE question_id=$qid";

                $cid_result = execute_sql($sql);
                while(list($cid) = fetch_row($cid_result)) {
                    if(!isset($_POST["${qid}_${cid}"])) {
                        $missing[$qid] = $content;
                        break;
                    }
                    $cid_result->MoveNext();
                }
                db_close($cid_result);
            }

            // Numeric
            if ($required=='Y' && $tid == 9 && $_POST[$qid] === '0') { $result->MoveNext(); continue; }
            elseif ($tid == 9 && !empty($_POST[$qid]) && !is_numeric($_POST[$qid])) { $not_numeric[$qid] = $content; }

            if (!isset($_POST[$qid])) { $_POST[$qid] = ''; }
            if ($required=='Y' && $tid!=6 && empty($_POST[$qid]) && $_POST[$qid] != '0') { $missing[$qid] = $content; }
            //if ($required=='Y' && empty($_POST[$qid]) && $_POST[$qid] != '0') { $missing[$qid] = $content; }
        }
        $result->MoveNext();
    }
    db_close($result);

    $message = '';

    // missing required variables
    if(count($missing) > 0) {
        $message .= "You are missing the following required questions:<br>\n";
        while(list($qid,$content) = each($missing)) {
            $message .= "<!-- ${qid} -->";
            $message .= "==> ${content}<br>\n";
        }
    }

    // missing numeric
    if(count($not_numeric) > 0) {
        $message .= "Please only use numbers for the following questions:<br>\n";
        while(list($qid,$content) = each($not_numeric)) {
            $message .= "<!-- ${qid} -->";
            $message .= "==> ${content}<br>\n";
        }
    }

    // double responses on unique
    if(count($unique_answers) > 0) {
        $message .= "Please use a different answer for the following questions:<br>\n";
        while(list($qid,$content)=each($unique_answers)) {
            $message .= "<!-- ${qid} -->";
            $message .= "==> ${content}<br>\n";
        }
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
    foreach (array('bool', 'single', 'multiple', 'rank', 'text', 'other', 'date') as $tbl) {
        $sql = "DELETE FROM ".$GLOBALS['ESPCONFIG']['response_'.$tbl.'_table']." WHERE response_id = $rid $qids";
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
    foreach (array('bool', 'single', 'multiple', 'rank', 'text', 'other', 'date') as $tbl) {
        $sql = "DELETE FROM ".$GLOBALS['ESPCONFIG']['response_'.$tbl.'_table']." WHERE question_id $qids";
        $res = execute_sql($sql);
    }
    /* ensure responses from testing status are also deleted */
    $sql = "DELETE FROM ".$GLOBALS['ESPCONFIG']['response_table']." WHERE survey_id=${sid}";
    execute_sql($sql);
}

function response_insert($sid, $section, $rid) {
    $sql = "SELECT name, email, public FROM ".$GLOBALS['ESPCONFIG']['survey_table']." WHERE id=${sid}";
    $result = execute_sql($sql);
    list($name, $email, $survey_public) = fetch_row($result);

    if ($survey_public=="N") {
        if ($GLOBALS['ESPCONFIG']['auth_mode'] == 'basic') {
            $userid = isset($_SERVER['PHP_AUTH_USER']) ?  $_SERVER['PHP_AUTH_USER'] : '';
        }
        elseif ($GLOBALS['ESPCONFIG']['auth_mode'] == 'form') {
            if (isset($_SESSION['espuser'])) {
                $userid = $_SESSION['espuser'];
            }
        }
    } else {
        $userid = "anonymous";
    }
    $ip="";
    if (isset($_SERVER['REMOTE_ADDR'])) $ip = $_SERVER['REMOTE_ADDR'];
    if (isset($_SERVER['HTTP_CLIENT_IP'])) $ip = "$ip (".$_SERVER['HTTP_CLIENT_IP'].")";
    elseif (isset($_SERVER['HTTP_X_FORWARDED_FOR'])) $ip = "$ip (".$_SERVER['HTTP_X_FORWARDED_FOR'].")";

    $userid = _addslashes($userid);

    if(empty($rid)) {
      // create a uniqe id for this response
      $sql = "INSERT INTO ".$GLOBALS['ESPCONFIG']['response_table']." (survey_id,submitted,username,ip) VALUES ( ${sid},".sys_time_stamp().",${userid},'${ip}')";
      $result = execute_sql($sql);
      if (!$result) {
        $msg = "Request failed, please contact the administrator.";
        $msg .= mkerror(ErrorNo() . ': ' . ErrorMsg());
      print $msg;
      exit;
      }
      $rid = insert_id("response_id_seq");
    }

    $sql = "
    SELECT Q.id, Q.type_id, Q.length, Q.precise, T.response_table
    FROM ".$GLOBALS['ESPCONFIG']['question_table']." Q, ".$GLOBALS['ESPCONFIG']['question_type_table']." T
    ". survey_select_section_sql($sid,$section,'Q') ." AND
    Q.survey_id=${sid} AND Q.deleted='N' AND Q.type_id < 50 AND Q.type_id=T.id";

    $q_result = execute_sql($sql);
    while(list($qid, $tid, $length, $prec, $table) = fetch_row($q_result)) {
        $q_result->MoveNext();
        if (isset($_POST[$qid])) {
            if (is_array($_POST[$qid]))
            $bareval = array_map('_stripslashes', $_POST[$qid]);
            else
            $bareval = _stripslashes($_POST[$qid]);
        }
        else
        $bareval = '';

        if (is_string($bareval))
        $val = _addslashes($bareval);
        else
        $val = '';

    // don't allow >1 responses for the same response ID and the same question ID
    $sql  = "SELECT COUNT(*) from ".$GLOBALS['ESPCONFIG'][$table.'_table']." WHERE response_id=${rid} AND question_id=${qid}";
    //echo "SELECT COUNT(*) from ".$GLOBALS['ESPCONFIG'][$table.'_table']." WHERE response_id=${rid} AND question_id=${qid}";
    $count = get_one($sql);
        if ($count > 0) {
    return $rid;
    }


    switch($table) {

        //case 'response_bool':
        //    $sql  = "INSERT INTO ".$GLOBALS['ESPCONFIG'][$table.'_table']." ( response_id,question_id,choice_id ) VALUES ( ${rid},${qid},${val} )";
        //    if (!empty($val))
        //    $result = execute_sql($sql);
        //    break;

        case 'response_text':
            // only insert if non-empty content
            if($tid == 9) { // numeric
                #$bareval = ereg_replace("[^0-9.\-]*(-?[0-9]*\.?[0-9]*).*", '\1', $bareval);
                # replace "," by "."
                if (ereg (",",$bareval)) {
                    $bareval = ereg_replace(",",".",$bareval);
                }
                # if float, check length and precision
                if (ereg ("\.",$bareval)) {
                    $bareval = ereg_replace("[^0-9.\-]*(-?[0-9]{1,$length}\.[0-9]{1,$prec}).*", '\1', $bareval);
                } else {
                    # else check only length
                    $bareval = ereg_replace("[^0-9.\-]*(-?[0-9]{1,$length}).*", '\1', $bareval);
                }
            }
            if(ereg("[^ \t\n]",$bareval)) {
                $val = _addslashes($bareval);
                $sql  = "INSERT INTO ".$GLOBALS['ESPCONFIG'][$table.'_table']." ( response_id,question_id,response ) VALUES ( ${rid},${qid},${val} )";
                $result = execute_sql($sql);
            }
            break;

        case 'response_date':
            // only insert if non-empty content
            //if(($bareval = ereg_replace("[^0-9]*([0-9]+)/([0-9]+)/([0-9]+).*", '\3-\1-\2', $bareval))) {
            if(function_exists("strptime")) {
                if ($bareval=strptime($bareval,$GLOBALS['ESPCONFIG']['date_format'])) {
                   $bareval['tm_year']+=1900;
                   $bareval['tm_mon']+=1;
                   $val = $bareval['tm_year']."-".
                       $bareval['tm_mon']."-".
                       $bareval['tm_mday'];
                   $val = _addslashes($val);
                   $sql  = "INSERT INTO ".$GLOBALS['ESPCONFIG'][$table.'_table']." ( response_id,question_id,response ) VALUES ( ${rid},${qid},${val} )";
                   $result = execute_sql($sql);
                }
            } elseif ($val = ereg_replace("[^0-9]*([0-9]+)/([0-9]+)/([0-9]+).*", '\3-\2-\1', $bareval)) {
                $val = _addslashes($val);
                $sql  = "INSERT INTO ".$GLOBALS['ESPCONFIG'][$table.'_table']." ( response_id,question_id,response ) VALUES ( ${rid},${qid},${val} )";
                $result = execute_sql($sql);
            }
            break;

        case 'response_single':
            if(empty($bareval)) {
                $sql = "SELECT id FROM ".$GLOBALS['ESPCONFIG']['question_choice_table']." WHERE question_id=${qid} AND content LIKE '!other%' ORDER BY id";
                $c_result = execute_sql($sql);
                while(!$c_result) {
                    $c_result->MoveNext();
                    list($cid) = fetch_row($c_result);
                    if (!isset($_POST["${qid}_${cid}"])) {
                        continue;
                    }
                    $other = _addslashes($_POST["${qid}_${cid}"]);
                    if(ereg("[^ \t\n]",$other)) {
                        $sql = "INSERT INTO ".$GLOBALS['ESPCONFIG']['response_other_table']." ( response_id,question_id,choice_id,response ) VALUES ( ${rid},${qid},${cid},${other} )";
                        $result = execute_sql($sql);
                        $val = $cid;
                        break;
                    }
                }
                db_close($c_result);
            }
            if(ereg("other_([0-9]+)", $bareval, $regs)) {
                $cid=$regs[1];
                if (!isset($_POST["${qid}_${cid}"]))
                break; // out of the case
                $other = _addslashes($_POST["${qid}_${cid}"]);
                if(ereg("[^ \t\n]",$other)) {
                    $sql = "INSERT INTO ".$GLOBALS['ESPCONFIG']['response_other_table']." ( response_id,question_id,choice_id,response ) VALUES ( ${rid},${qid},${cid},${other} )";
                    $result = execute_sql($sql);
                    $val=$cid;
                }
            }
            $sql  = "INSERT INTO ".$GLOBALS['ESPCONFIG'][$table.'_table']." ( response_id,question_id,choice_id ) VALUES ( ${rid},${qid},${val} )";
            $result = execute_sql($sql);
            break;

        case 'response_multiple':
            $sql = "SELECT id FROM ".$GLOBALS['ESPCONFIG']['question_choice_table']." WHERE question_id=${qid} AND content LIKE '!other%'";
            $c_result = execute_sql($sql);
            while(!$c_result->EOF) {
                list($cid) = fetch_row($c_result);
                $c_result->MoveNext();
                if (!isset($_POST["${qid}_${cid}"]) || empty($_POST["${qid}_${cid}"])) {
                    continue;
                }
                if (!isset($_POST[$qid]))
                $_POST[$qid] = array($cid);
                else
                array_push($_POST[$qid], $cid);
                $other = _addslashes($_POST["${qid}_${cid}"]);
                if(ereg("[^ \t\n]",$other)) {
                    $sql = "INSERT INTO ".$GLOBALS['ESPCONFIG']['response_other_table']." ( response_id,question_id,choice_id,response ) VALUES ( ${rid},${qid},${cid},${other} )";
                    $result = execute_sql($sql);
                }
            }
            db_close($c_result);
            if(!isset($_POST[$qid]) || !is_array($_POST[$qid]))
            break;

            foreach($_POST[$qid] as $cid) {
                $cid = _addslashes($cid);
                if(ereg("other_[0-9]+", $cid))
                continue;
                $sql  = "INSERT INTO ".$GLOBALS['ESPCONFIG'][$table.'_table']." ( response_id,question_id,choice_id ) VALUES ( ${rid},${qid},${cid} )";
                $result = execute_sql($sql);
            }
            break;

        case 'response_rank':
            //if($tid == 5 || $tid == 6) {
            if($tid == 6) {
            $sql = "SELECT id FROM ".$GLOBALS['ESPCONFIG']['question_choice_table']." WHERE question_id=${qid}";
            $cid_result = execute_sql($sql);
            while(!$cid_result->EOF) {
                list($cid) = fetch_row($cid_result);
                $cid_result->MoveNext();
                if (!isset($_POST["${qid}_${cid}"]))
                continue;
                $val = $_POST["${qid}_${cid}"];
                if(strtolower($val) == "n/a")
                $rank = -1;
                else
                $rank = intval($val);
                $rank = _addslashes($rank);
                $sql  = "INSERT INTO ".$GLOBALS['ESPCONFIG'][$table.'_table']." ( response_id,question_id,choice_id,rank ) ";
                $sql .= "VALUES ( ${rid},${qid},${cid},${rank} )";
                $result=execute_sql($sql);
            }
            db_close($cid_result);
            break;
            }
            if(strtolower($bareval) == "n/a")
            $rank = -1;
            else
            $rank = intval($bareval);
            $sql  = "INSERT INTO ".$GLOBALS['ESPCONFIG'][$table.'_table']." ( response_id,question_id,rank ) VALUES ( ${rid},${qid},${rank} )";
            $result = execute_sql($sql);
            break;
        }
    }
    db_close($q_result);
    return($rid);
}

function response_commit($rid) {
    $ip="";
    if (isset($_SERVER['REMOTE_ADDR'])) $ip=$_SERVER['REMOTE_ADDR'];
    if (isset($_SERVER['HTTP_CLIENT_IP'])) $ip="$ip (".$_SERVER['HTTP_CLIENT_IP'].")";
    elseif (isset($_SERVER['HTTP_X_FORWARDED_FOR'])) $ip="$ip (".$_SERVER['HTTP_X_FORWARDED_FOR'].")";

    $sql = "UPDATE ".$GLOBALS['ESPCONFIG']['response_table']." SET complete='Y', submitted =".sys_time_stamp().",ip='$ip' WHERE id=${rid}";
    if(execute_sql($sql))
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
    else if (count($lx) > 1) { $lc++; }
    else if (count($rx) > 1) { $rc++; }
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

    $sql = "SELECT q.id $col,a.choice_id
    FROM ".$GLOBALS['ESPCONFIG']['response_bool_table']." a, ".$GLOBALS['ESPCONFIG']['question_table']." q
    WHERE a.response_id=${rid} AND a.question_id=q.id $qids";
    $result = execute_sql($sql);
    while(!$result->EOF) {
        $row = fetch_row($result);
        $qid = array_shift($row);
        $val = array_pop($row);
        $values[$qid] = $row;

        $ivalue = '';
        if ($val == 'Y') {
           $ivalue = _('Yes');
        } elseif ($val == 'N') {
           $ivalue =  _('No');
        }
        array_push($values["$qid"], $ivalue, $val);
        $result->MoveNext();
    }
    db_close($result);

    // --------------------- response_single ---------------------

    $sql = "SELECT q.id $col,c.content,c.id,c.feedback,c.credit
    FROM ".$GLOBALS['ESPCONFIG']['response_single_table']." a, ".$GLOBALS['ESPCONFIG']['question_table']." q, ".$GLOBALS['ESPCONFIG']['question_choice_table']." c
    WHERE a.response_id=${rid} AND a.question_id=q.id AND a.choice_id=c.id $qids";
    $result = execute_sql($sql);
    while(!$result->EOF) {
        $row = fetch_row($result);
        $qid = array_shift($row);
        $c = count($row);
        $val = $row[$c - 4];
        if (ereg('^!other', $val))
        //if (preg_match('/^!other/', $val))
           $row[$c - 3] = 'other_' . $row[$c - 3];
        else
           settype($row[$c - 3], 'integer');
        $values[$qid] = $row;
        $result->MoveNext();
    }
    db_close($result);

    // --------------------- response_multiple ---------------------

    $sql = "SELECT q.id $col,c.content,c.id,c.feedback,c.credit
    FROM ".$GLOBALS['ESPCONFIG']['response_multiple_table']." a, ".$GLOBALS['ESPCONFIG']['question_table']." q, ".$GLOBALS['ESPCONFIG']['question_choice_table']." c
    WHERE a.response_id=${rid} AND a.question_id=q.id AND a.choice_id=c.id $qids
    ORDER BY a.question_id,c.id";
    $result = execute_sql($sql);
    $arr = array();
    $tmp = null;
    while(!$result->EOF) {
        $row = fetch_row($result);

        $qid = array_shift($row);
        $c = count($row);
        $val = $row[$c - 4];
        if (ereg('^!other', $val))
           $row[$c - 3] = 'other_' . $row[$c - 3];
        else
           settype($row[$c - 3], 'integer');
        if($tmp == $qid) {
            $arr[] = $row;
            $result->MoveNext();
            continue;
        }
        if($tmp != null)
        $values["$tmp"]=$arr;
        $tmp = $qid;
        $arr = array($row);
        $result->MoveNext();
    }
    if($tmp != null)
    $values["$tmp"]=$arr;
    db_close($result);
    unset($arr);
    unset($tmp);
    unset($row);

    // --------------------- response_other ---------------------

    $sql = "SELECT q.id,c.id $col,a.response
    FROM ".$GLOBALS['ESPCONFIG']['response_other_table']." a, ".$GLOBALS['ESPCONFIG']['question_table']." q, ".$GLOBALS['ESPCONFIG']['question_choice_table']." c
    WHERE a.response_id=${rid} AND a.question_id=q.id AND a.choice_id=c.id $qids
    ORDER BY a.question_id,c.id";
    $result = execute_sql($sql);
    while(!$result->EOF) {
        $row = fetch_row($result);
        $qid = array_shift($row);
        $cid = array_shift($row);
        array_push($row, $row[count($row) - 1]);
        $values["${qid}_${cid}"] = $row;
        $result->MoveNext();
    }
    db_close($result);

    // --------------------- response_rank ---------------------

    $sql = "SELECT (". $GLOBALS['ESPCONFIG']['adodb_conn']->Concat("q.id","'_'","c.id") .") AS id $col,c.content,a.rank
    FROM ".$GLOBALS['ESPCONFIG']['response_rank_table']." a, ".$GLOBALS['ESPCONFIG']['question_table']." q, ".$GLOBALS['ESPCONFIG']['question_choice_table']." c
    WHERE a.response_id=${rid} AND a.question_id=q.id AND a.choice_id=c.id $qids
    ORDER BY a.question_id,c.id";
    $result = execute_sql($sql);
    while(!$result->EOF) {
        $row = fetch_row($result);
        $qid = array_shift($row);
        settype($row[count($row) - 1], 'integer');
        if (isset($row[3])) {
            if($row[3]>=0) {
                $row[3]++;
            }
        }
        $values[$qid] = $row;
        $result->MoveNext();
    }
    db_close($result);

    // --------------------- response_text ---------------------

    $sql = "SELECT q.id $col,a.response
    FROM ".$GLOBALS['ESPCONFIG']['response_text_table']." a, ".$GLOBALS['ESPCONFIG']['question_table']." q
    WHERE a.response_id=${rid} AND a.question_id=q.id $qids";
    $result = execute_sql($sql);
    while(!$result->EOF) {
        $row = fetch_row($result);
        $qid = array_shift($row);
        $values["$qid"]=$row;
        $val = array_pop($values["$qid"]);
        array_push($values["$qid"], $val, $val);
        $result->MoveNext();
    }
    db_close($result);

    // --------------------- response_date ---------------------

    $sql = "SELECT q.id $col,a.response
    FROM ".$GLOBALS['ESPCONFIG']['response_date_table']." a, ".$GLOBALS['ESPCONFIG']['question_table']." q
    WHERE a.response_id=${rid} AND a.question_id=q.id $qids";
    $result = execute_sql($sql);
    while(!$result->EOF) {
        $row = fetch_row($result);
        $qid = array_shift($row);
        $values["$qid"]=$row;
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
    $res = response_select($sid, $rid, 'type_id,content', $qids);
    $hmn = array();
    reset($res);
    $tmpk = null;
    $tmpv = array();
    while(list($qid, $arr) = each($res)) {
        $key = null;
        $val = null;
        if (strstr($qid, '_')) {
            // rank or other
            list($qid, $sub) = explode('_', $qid);
            if ($arr[0] != 8)
            continue; // other

            // rank
            $key = $arr[1];
            if ($arr[3] < 0) {
                $arr[3] = 'n/a';
            }
              else {
                  $arr[3]++;
              }
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
                if (ereg("^!other", $subarr[2])) {
                    $tmpv = preg_replace(array("/^!other=/","/^!other/"),
                    array('', 'Other'), $subarr[2]);
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
            if (ereg("^!other", $arr[2])) {
                $val = preg_replace(array("/^!other=/","/^!other/"),
                array('', 'Other'), $arr[2]);
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
    while(list($qid, $arr) = each($res)) {
        if (strstr($qid, '_')) {
            // rank or other
            if ($arr[0] == 8) {
                // rank
                $cpq[] = array($qid, $arr[2]+1, array($arr[1]));
            } else {
                // other
                $cpq[] = array($qid, $arr[1]);
            }
        } elseif (is_array($arr[0])) {
            // multiple
            $cpq[] = array($qid,
            array_map(create_function('$a', 'return $a[2];'), $arr),
            array_map(create_function('$b', 'return $b[1];'), $arr));
        } else {
            if ($arr[0] == 4 || $arr[0] == 6)
            $cpq[] = array($qid, $arr[2], array($arr[1]));
            else
            $cpq[] = array($qid, $arr[2]);
        }
    }
    return $cpq;
}

function response_select_name($sid, $rid, $qids = null) {
    $res = response_select($sid, $rid, 'type_id,name', $qids);
    $nam = array();
    reset($res);
    while(list($qid, $arr) = each($res)) {
        $key = null;
        $val = null;
        $index = $qid;
        if (strstr($qid, '_')) {
            // rank or other
            list($qid, $sub) = explode('_', $qid);
            if ($arr[0] != 8)
            continue; // other
            // rank
            $str1 = $arr[2];
            do {
                $str2 = $str1;
                $str1 = eregi_replace("(^| )(what|which|why|how|who|where|how|is|are|were|the|a|it|of|do|you|your|please|enter)[ ?]", " ", $str2);
            } while ($str1 != $str2);
            $str1 = trim(strtoupper(eregi_replace("[^A-Z0-9]+", " ", $str1)));
                $str1 = ereg_replace(' +','_',$str1);
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
                if (ereg("^!other", $subarr[2])) {
                    $tmpv = preg_replace(array("/^!other=/","/^!other/"),
                    array('', 'Other'), $subarr[2]);
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
            if (ereg("^!other", $arr[2])) {
                $val = preg_replace(array("/^!other=/","/^!other/"),
                array('', 'Other'), $arr[2]);
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
  if (!$GLOBALS['ESPCONFIG']['allow_email']) { return true; }
  $sql = "SELECT name, email, public FROM ".$GLOBALS['ESPCONFIG']['survey_table']." WHERE id=${sid}";
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

  $user = array(
    'survey.id' => $sid,
    'survey.name' => $name,
    'survey.response' => $rid,
  );

  if ($survey_public == "N") {
    $userid = "";
    if ($GLOBALS['ESPCONFIG']['auth_mode'] == 'basic' && isset($_SERVER['PHP_AUTH_USER'])) { $userid = $_SERVER['PHP_AUTH_USER']; }
    elseif ($GLOBALS['ESPCONFIG']['auth_mode'] == 'form') { $userid = $_SESSION['espuser']; }

    $user['user.username'] = $userid;
    $sql = "SELECT fname,lname,email FROM ".$GLOBALS['ESPCONFIG']['respondent_table']." WHERE username = " . _addslashes($userid);
    $result = execute_sql($sql);
    if ($result && record_count($result)) {
        list ($user_fname, $user_lname, $user_email) = fetch_row($result);
        db_close($result);
        if (!empty($user_fname)) $user["user.firstname"] = $user_fname;
        if (!empty($user_lname)) $user["user.lastname"] = $user_lname;
        if (!empty($user_email)) $user["user.email"] = $user_email;
    }
  }
  else { $user['user.username'] = "anonymous"; }

  $subject = 'Response from survey:' ." $name [$rid]";
  $body = '';
  reset($user);
  while (list($k, $v) = each($user))
  $body .= $k . $qsep . $v . $end;

  $headers = 'From: survey@siamsquare.org' . "\r\n";
  $headers .= 'Reply-To: survey@siamsquare.org' . "\r\n";
  $headers .= 'X-Mailer: siamsquare.org' . "\r\n";

  reset($answers);
  while($arr = array_shift($answers)) {
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
  //foreach (array('bool', 'single', 'multiple', 'rank', 'text', 'other', 'date') as $tbl) {
  foreach (array('bool', 'date', 'multiple', 'other', 'rank', 'rating', 'single', 'text') as $tbl) {
    $sql = "SELECT MAX(q.position) FROM ".$GLOBALS['ESPCONFIG']['response_'.$tbl.'_table']." a, ".$GLOBALS['ESPCONFIG']['question_table']." q WHERE a.response_id = $rid AND q.id = a.question_id AND q.survey_id = $sid AND q.deleted = 'N'";
    $num = get_one($sql);
    if ($num > $max) { $max = $num; }
  }
  return $max;
}

function response_select_max_sec($sid, $rid) {
  $pos = response_select_max_pos($sid, $rid);
  $sql = "SELECT COUNT(*)+1 FROM ".$GLOBALS['ESPCONFIG']['question_table']." q WHERE q.survey_id = $sid AND q.type_id = 99 AND q.position < $pos AND q.deleted = 'N'";
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

/*
* @_PATTERNS_@
* // get the ID, name, title, owner, and realm for all surveys the current user can access
* $ok = survey_get_for_current_user($surveys);
* if ($ok) {
*     // use $surveys === array (1 => array ('id' => 1, 'name' => 'foo', ...), ...);
* }
*
* // get the where clause to limit a SQL query for the current user
* $where = survey_fetch_limiting_where();
* $sql = sprintf('SELECT * FROM %s WHERE %s', $GLOBALS['ESPCONFIG']['survey_table'], $where);
*
* @_NOTES_@
* Interpretation of the open constants returned by survey_open():
* Constant                 Meaning
* ------------------------ -----------------------------------------------------------------------------------
* STATUS_OPEN              The current time is within the open & close dates, or those dates aren't given
* STATUS_CLOSED_TOO_EARLY  The current time is before the open date
* STATUS_CLOSED_TOO_LATE   The current time is after the close date
*
*/

define('STATUS_OPEN',             0);
define('STATUS_CLOSED_TOO_EARLY', 1);
define('STATUS_CLOSED_TOO_LATE',  2);

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
  $sql = "SELECT id, name, title, owner, realm FROM {$GLOBALS['ESPCONFIG']['survey_table']} WHERE {$where} ORDER BY id DESC";
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
      else if (is_array($realmColumn)) {
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
  $sql = "SELECT DISTINCT tblSurvey.id, tblSurvey.name, tblSurvey.title, tblSurvey.owner, tblSurvey.open_date, tblSurvey.close_date FROM {$GLOBALS['ESPCONFIG']['survey_table']} AS tblSurvey JOIN {$GLOBALS['ESPCONFIG']['access_table']} AS tblAccess ON tblAccess.survey_id=tblSurvey.id WHERE (tblSurvey.realm = $realm OR tblAccess.realm = $realm) AND ($where) ORDER BY id DESC";
  return survey_get_from_sql($sql, $surveys);
}

function survey_get_public(&$surveys) {
  $where = survey_fetch_limiting_where();
  $sql = "SELECT id, name, title, owner, open_date, close_date FROM {$GLOBALS['ESPCONFIG']['survey_table']} WHERE (public = 'Y') AND ($where) ORDER BY id DESC";
  return survey_get_from_sql($sql, $surveys);
}

function survey_get_privilege(&$privileges, $sids, $realm = null) {
  if (is_scalar($sids)) { $sids = array ($sids); }
  elseif (!is_array($sids)) { return false; }
  $limit  = sprintf('(tblAccess.survey_id %s)', array_to_insql($sids));
  $limit .= (isset($realm) ? sprintf(' AND (tblAccess.realm=%s)', _addslashes($realm)) : '');
  // get the access columns
  $sql = "SELECT survey_id, realm, maxlogin, resume, navigate FROM {$GLOBALS['ESPCONFIG']['access_table']} AS tblAccess WHERE $limit";
  return survey_get_from_sql($sql, $privileges, 'survey_id');
}

function survey_get_responses(&$responses, $sids, $username = null) {
  if (is_scalar($sids)) { $sids = array ($sids); }
  elseif (!is_array($sids)) { return false; }
  $limit  = sprintf('(survey_id %s)', array_to_insql($sids));
  $limit .= (isset($username) ? sprintf(' AND (tblResponse.username=%s)', _addslashes($username)) : '');
  $sql = "SELECT survey_id, username, submitted, complete, ip FROM {$GLOBALS['ESPCONFIG']['response_table']} AS tblResponse WHERE $limit";
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
  $openForBiz = "CASE WHEN NOT (tblSurvey.open_date IS NULL OR '0000-00-00 00:00:00' = tblSurvey.open_date) AND $now < tblSurvey.open_date THEN $STATUS_CLOSED_TOO_EARLY WHEN NOT (tblSurvey.close_date IS NULL OR '0000-00-00 00:00:00' = tblSurvey.close_date) AND tblSurvey.close_date < $now THEN $STATUS_CLOSED_TOO_LATE ELSE $STATUS_OPEN END";
  // ... available
  if (isset($username)) {
      $username = _addslashes($username);
      $mayRespond = "CASE WHEN ( 0 = COALESCE(maxlogin,0) OR (SELECT COUNT(*) FROM {$GLOBALS['ESPCONFIG']['response_table']} as tblResponse WHERE tblResponse.survey_id=tblAccess.survey_id AND tblResponse.username=$username AND tblResponse.complete=$yes) < maxlogin) THEN 1 ELSE 0 END";
  }
  else { $mayRespond = '1'; }
  // ... visible
  if (is_scalar($sids)) { $sids = array ($sids); }
  elseif (! is_array($sids)) { return false; }
  if (isset($realm)) { $realm = _addslashes($realm); $limit = sprintf('(tblSurvey.id %s) AND (tblSurvey.public=%s OR tblAccess.realm=%s)', array_to_insql($sids), $yes, $realm); }
  else { $limit = sprintf('(tblSurvey.id %s) AND (tblSurvey.public=%s)', array_to_insql($sids), $yes); }
  // compute
  $sql = "SELECT tblSurvey.id, ($statusActive) AS active, ($openForBiz) AS open, ($mayRespond) AS available, 1 AS visible FROM {$GLOBALS['ESPCONFIG']['survey_table']} AS tblSurvey LEFT JOIN {$GLOBALS['ESPCONFIG']['access_table']} AS tblAccess ON tblAccess.survey_id=tblSurvey.id WHERE $limit";
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
  $target = MYSURVEY . "?name=" . htmlentities($name);
  return rtrim($target);
}

function survey_assign_new_name() {
  $sql = "SELECT name FROM ".$GLOBALS['ESPCONFIG']['survey_table']." ORDER BY id DESC";
  $result = execute_sql($sql,"",ADODB_FETCH_ASSOC);
  if($arr = fetch_row($result)) { $curr = $arr['name']; }
  db_close($result);
  $currentNo = substr($curr, -4);
  $newNo = $currentNo + "1";
  $newFormattedNo = sprintf("%04d", $newNo);
  $newName = "PEB".$newFormattedNo;
  //return $newFormattedNo;
  return $newName;
}

define('SURVEY_STAT_LOGINFAIL', 'loginfail');
define('SURVEY_STAT_ATTEMPTED', 'attempted');
define('SURVEY_STAT_ABANDONED', 'abandoned');
define('SURVEY_STAT_SUSPENDED', 'suspended');
define('SURVEY_STAT_COMPLETED', 'completed');

function stat_fetch_with_summary($limitToCurrentUser = true) {
  $cfg =& $GLOBALS['ESPCONFIG'];
  if ($limitToCurrentUser) {
    //require_once DOCROOT . '/admin/assets/include/lib/espsurvey.inc';
    $where = survey_fetch_limiting_where("{$cfg['survey_table']}.status", "{$cfg['survey_table']}.owner", "{$cfg['survey_table']}.realm");
    $sql = sprintf('SELECT * FROM %1$s JOIN %2$s ON %2$s.id=%1$s.survey_id WHERE %3$s', $cfg['survey_statistics_table'], $cfg['survey_table'], $where);
  } else {
    $sql = sprintf('SELECT * FROM %1$s', $cfg['survey_statistics_table']);
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

//  Return all metrics for a particular survey
function survey_stat_fetch_all($sid) {
  $cfg =& $GLOBALS['ESPCONFIG'];
  $sql = sprintf('SELECT * FROM %1$s WHERE survey_id=%2$s', $cfg['survey_statistics_table'], $sid);
  $res = execute_sql($sql, null, ADODB_FETCH_ASSOC);
  if ($res) { $values = fetch_row($res); unset($values['survey_id']); return $values; }
  else { $GLOBALS['errmsg'] = mkerror('Unable to fetch statistics for survey'); return false; }
}

//  Return a metric for a particular survey
function survey_stat_fetch($metric, $sid) {
  $cfg =& $GLOBALS['ESPCONFIG'];
  $sql = sprintf('SELECT %1$s FROM %2$s WHERE survey_id=%3$s', $metric, $cfg['survey_statistics_table'], $sid);
  $res = execute_sql($sql);
  if ($res) { list ($value) = fetch_row($res); return $value; }
  else { $GLOBALS['errmsg'] = mkerror('Unable to fetch statistic for survey'); return false; }
}

function survey_stat_increment($metric, $sid) {
  $cfg =& $GLOBALS['ESPCONFIG'];
  $sql = sprintf('UPDATE %1$s SET %2$s=%2$s+1 WHERE survey_id=%3$s', $cfg['survey_statistics_table'], $metric, $sid);
  $res = execute_sql($sql);
  if (0 == affected_rows()) {
    $sql = sprintf('INSERT INTO %1$s (survey_id,%2$s) VALUES (%3$s,1)', $cfg['survey_statistics_table'], $metric, $sid);
    $res = execute_sql($sql);
    if (0 == affected_rows()) { $GLOBALS['errmsg'] = mkwarn('Unable to increment statistic for survey'); return false; }
  }
  return true;
}

function survey_stat_decrement($metric, $sid) {
  $cfg =& $GLOBALS['ESPCONFIG'];
  // Only decrement when current value is more than 0. If you need to set negative statistics, use survey_stat_set();
  $sql = sprintf('UPDATE %1$s SET %2$s=%2$s-1 WHERE survey_id=%3$s AND 0 < %2$s', $cfg['survey_statistics_table'], $metric, $sid);
  $res = execute_sql($sql);
  if (0 < affected_rows()) { return true; }
  else { $GLOBALS['errmsg'] = mkwarn('Unable to decrement statistic for survey'); return false; }
}

function survey_stat_set($metric, $sid, $value) {
  $cfg =& $GLOBALS['ESPCONFIG'];
  $sql = sprintf('UPDATE %1$s SET %2$s=%4$s WHERE survey_id=%3$s', $cfg['survey_statistics_table'], $metric, $sid, $value);
  $res = execute_sql($sql);
  if (0 == affected_rows()) {
    $sql = sprintf('INSERT INTO %1$s (survey_id,%2$s) VALUES (%3$s,%4$s)', $cfg['survey_statistics_table'], $metric, $sid, $value);
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
  $sql = sprintf('INSERT INTO %1$s (survey_id) VALUES (%2$s)', $cfg['survey_statistics_table'], $sid);
  $res = execute_sql($sql);
  if (0 == affected_rows()) { $GLOBALS['errmsg'] = mkerror('Unable to initialize statistics for survey'); return false; }
  return true;
}

function survey_stat_purge($sid) {
  $cfg =& $GLOBALS['ESPCONFIG'];
  $sql = sprintf('DELETE FROM %1$s WHERE survey_id=%2$s', $cfg['survey_statistics_table'], $sid);
  $res = execute_sql($sql);
  if (0 == affected_rows()) { $GLOBALS['errmsg'] = mkerror('Unable to purge statistics for survey'); return false; }
  return true;
}


?>
