<?php

require_once DOCROOT.'/public/assets/include/handler-prefix.php';

if (!defined('ESP-FIRST-INCLUDED')) { echo "In order to conduct surveys, please include first.php"; exit; }
if (!defined('ESP-AUTH-OK')) { if (!empty($GLOBALS['errmsg'])) echo($GLOBALS['errmsg']); return; }

$sql = "SELECT status, name, public, open_date, close_date FROM ".X_SURVEY." WHERE id = ${sid}";
$result = execute_sql($sql);

if ($result && record_count($result) > 0) { list($status, $name, $survey_public, $open_date, $close_date) = fetch_row($result); } else { $status = 0; }

$cookiename = "survey_".$sid; // Added for cookie auth, to eliminate double submits - only for public surveys
if (isset($_COOKIE["$cookiename"]) && $survey_public == 'Y' && !($ESPCONFIG['auth_response'] && auth_get_option('resume'))) { echo (mkerror('You have already completed this survey.')); return; }

$request_direct = 0;
$request_referer = '';

if (!empty($_REQUEST['referer'])) { $request_referer = htmlspecialchars($_REQUEST['referer']); }
elseif (isset($_SERVER['HTTP_REFERER'])) { $request_referer = htmlspecialchars($_SERVER['HTTP_REFERER']); }
else { $request_direct = 1; }

// gets wrong for resumed surveys
// if ($_SESSION['sec'] == 1) { $_SESSION['rid'] = 0; }

if (!isset($_SESSION['rid'])) { $_SESSION['rid'] = 0; }
$_SESSION['rid'] = intval($_SESSION['rid']);

// show results instead of show survey, but do not allow getting results from URL or FORM
if (isset($results) && $results) {
  if (!isset($precision)) { $precision = ''; }
  if (!isset($totals)) { $totals = ''; }
  if (!isset($qid)) { $qid = ''; }
  if (!isset($cids)) { $cids = ''; }
  $precision = intval($precision);
  $totals = intval($totals);
  $qid = intval($qid);
  $cids = intval($cids);
  survey_results($sid, $precision, $totals, $qid, $cids); // small security issue here, anyone could pick a QID to crossanalyze
  return;
}

if (survey_status_is_edit($status) || survey_status_is_done($status) || survey_status_is_deleted($status)) { $isActive = false; }
elseif (survey_status_is_test($status)) { if (isset($_REQUEST['test']) && $_REQUEST['test']) { $isActive = true; } else { $isActive = false; } }
elseif (STATUS_OPEN !== survey_open($open_date, $close_date)) { $isActive = false; }
else { $isActive = true; }

// if (!$isActive) { echo(mkerror('Error processing survey: Survey is not active.')); return; }
if ($request_referer == MYSURVEY) { $request_referer .= "?name=$name"; }
$query_string = "";

// we need to remove "sec=xx" from the query string, otherwise the resume link will contain this
// and the user will always return to the same filled in section

if (isset($_SERVER['QUERY_STRING']) && !empty($_SERVER['QUERY_STRING'])) { $query_string = $_SERVER['QUERY_STRING']; }

$query_string = preg_replace ('/sec=\d+/s','', $query_string);
$query_string = preg_replace ('/\?$|\&$/s','', $query_string);
$query_string = preg_replace ('/\?\&/s','\?', $query_string);

if (!empty($query_string)) { $action .= "?" . htmlspecialchars($query_string); }

$msg = '';

if (!empty($_REQUEST['submit'])) {
  $msg .= response_check_answers($sid, $_SESSION['rid'], $_SESSION['sec']);
  if (empty($msg)) {
    if ($ESPCONFIG['auth_response'] && auth_get_option('resume')) {
      survey_stat_decrement(SURVEY_STAT_SUSPENDED, $sid); // submitting a previously saved survey
      response_delete($sid, $_SESSION['rid'], $_SESSION['sec']); // delete the previous responses
    }
    $_SESSION['rid'] = response_insert($sid, $_SESSION['sec'], $_SESSION['rid']);
    paint_feedback_end_of_survey($sid, $_SESSION['rid'], $_SESSION['sec']);
    all_done();
  } else { echo mkerror($msg); }
}

if (!empty($_REQUEST['resume']) && $ESPCONFIG['auth_response'] && auth_get_option('resume')) {
  response_delete($sid, $_SESSION['rid'], $_SESSION['sec']);
  $_SESSION['rid'] = response_insert($sid, $_SESSION['sec'], $_SESSION['rid']);
  //if ($action == $ESPCONFIG['autopub_url']) { goto_saved($sid, "$action?name=$name"); }
  if ($_REQUEST['test']) { $aaa = $_SERVER['REQUEST_URI']."?where=test&test=1&sid=".$sid; }
  else { $aaa = $_SERVER['REQUEST_URI']."?name=".$name; }
  goto_saved($sid, $aaa);
  // if ($action == MYSURVEY) { goto_saved($sid, "$action?name=$name"); }
  // else { goto_saved($sid, $action); }
  return;
}

if (!empty($_REQUEST['next'])) {
  $msg .= response_check_answers($sid, $_SESSION['rid'], $_SESSION['sec']);
  if (empty($msg)) {
    if ($ESPCONFIG['auth_response'] && auth_get_option('resume')) { response_delete($sid, $_SESSION['rid'], $_SESSION['sec']); }
    $_SESSION['rid'] = response_insert($sid, $_SESSION['sec'], $_SESSION['rid']);
    paint_feedback_end_of_section($sid, $_SESSION['rid'], $_SESSION['sec']);
  } else { echo mkerror($msg); }
}

if (!empty($_REQUEST['prev']) && $ESPCONFIG['auth_response'] && auth_get_option('navigate')) {
  if (empty($msg)) {
    if (auth_get_option('resume')) { response_delete($sid, $_SESSION['rid'], $_SESSION['sec']); }
    $_SESSION['rid'] = response_insert($sid, $_SESSION['sec'], $_SESSION['rid']);
    $_SESSION['sec']--;
  } else { echo mkerror($msg); }
}

survey_stat_increment(SURVEY_STAT_ATTEMPTED, $sid);
survey_stat_increment(SURVEY_STAT_ABANDONED, $sid);

// if resuming a previous survey
if ($ESPCONFIG['auth_response'] && auth_get_option('resume') && $_SESSION['rid'] > 0) {
  response_import_sec($sid, $_SESSION['rid'], $_SESSION['sec']);
  survey_stat_decrement(SURVEY_STAT_SUSPENDED, $sid);
}

$formaction = htmlspecialchars(ME);

paint_submission_form_open();
survey_render($sid, $_SESSION['sec'], $_SESSION['rid'], $msg);

echo "<p class=\"text-center\">\n";
if (auth_get_option('navigate') && $_SESSION['sec'] > 1) { echo "<input class=\"btn btn-default\" type=\"submit\" name=\"prev\" value=\"&laquo; Previous\"> \n"; }
if (auth_get_option('resume')) { echo "<input class=\"btn btn-success\" type=\"submit\" name=\"resume\" value=\"Save\"> \n"; }
if ($_SESSION['sec'] == $num_sections) { echo "<input class=\"btn btn-success\" type=\"submit\" name=\"submit\" value=\"Submit my opinions\"> \n"; }
else { echo "<input class=\"btn btn-default\" type=\"submit\" name=\"next\" value=\"Next &raquo;\"> \n"; }
echo "</p>\n";
echo "</form>\n";

function paint_submission_form_open($additional = array ()) {
  global $formaction, $action, $sid, $name, $request_referer, $request_direct;
  echo "<form method=\"post\" action=\"$formaction\">\n";
  echo "<input type=\"hidden\" name=\"referer\" value=\"{$request_referer}\">\n";
  echo "<input type=\"hidden\" name=\"direct\" value=\"{$request_direct}\">\n";
  echo "<input type=\"hidden\" name=\"sid\" value=\"{$sid}\">\n";
  echo "<input type=\"hidden\" name=\"rid\" value=\"{$_SESSION['rid']}\">\n";
  echo "<input type=\"hidden\" name=\"sec\" value=\"{$_SESSION['sec']}\">\n";
  echo "<input type=\"hidden\" name=\"name\" value=\"{$name}\">\n";
  foreach ($additional as $field => $value) { echo "<input type='hidden' name='$field' value='$value'>"; }
  if ($_REQUEST['test']) {
    echo "<input type=\"hidden\" name=\"where\" value=\"test\">\n";
    echo "<input type=\"hidden\" name=\"test\" value=\"{$_REQUEST['test']}\">\n";
  }
  echo "\n";
}

function all_done() {
  global $sid;
  response_commit($_SESSION['rid']); // commit the response
  response_send_email($sid, $_SESSION['rid']); // send an email
  $_SESSION['rid'] = ""; $_SESSION['sec'] = ""; // initialize the state variables
  goto_thankyou($sid, $_REQUEST['referer']);
  exit;
}

function paint_feedback_end_of_survey($sid, $rid, $sec) {
  paint_feedback($sid, $rid, $sec, array ('feedback' => 'finished'));
}

function paint_feedback_end_of_section($sid, $rid, $sec) {
  $_SESSION['sec']++;
  paint_feedback($sid, $rid, $sec);
}

function paint_feedback($sid, $rid, $sec, $additional = array ()) {
  $hasFeedback = get_feedback($feedback, $totalCredit, $sid, $rid, $sec);
  if ($hasFeedback) {
    paint_submission_form_open($additional);
    echo '<table>';
    array_walk($feedback, 'paint_feedback_row');
    echo '</table>';
    if (! is_null($totalCredit)) { echo 'Total credit:' . ' ' . $totalCredit; }
    echo mksubmit("go", 'Next Page');
    paint_submission_form_close();
    exit;
  }
}

function get_feedback(&$responses, &$totalCredit, $sid, $rid, $sec) {
  $sec -= 1;
  $section_questions = survey_get_section_questions($sid);
  if (!array_key_exists($sec, $section_questions)) { return; }
  $qnum = 0;
  for ($i = 0; $i <= $sec; $i++) { $qnum += count($section_questions[$i]); }
  $allResponses = response_select($sid, $rid, 'content', $section_questions[$sec]);
  foreach ($allResponses as $qid => $feedback) {
    if (false !== strpos($qid, '_')) {
      unset($allResponses[$qid]);
      list ($qid, $sub) = explode('_', $qid);
      $allResponses[$qid][] = $feedback;
    }
  }
  $totalCredit = null;
  $hasFeedback = false;
  foreach ($allResponses as $qid => $feedback) {
    $hasMulti = (is_array($feedback[0]) ? true : false);
    $responses[$qnum] = array ($hasMulti ? $feedback[0][0] : $feedback[0]);
    if ($hasMulti) {
      foreach ($feedback as $response) {
        $responses[$qnum][] = array ($response[1], $response[3], $response[4]);
        if (! empty($response[3])) { $hasFeedback = true; }
        if (! empty($response[4])) { $hasFeedback = true;
          if (is_numeric($response[4])) { $totalCredit += $response[4]; }
        }
      }
    } else {
      $responses[$qnum][] = array ($feedback[1], $feedback[3], $feedback[4]);
      if (! empty($feedback[3])) { $hasFeedback = true; }
      if (! empty($feedback[4])) {
        $hasFeedback = true;
        if (is_numeric($feedback[4])) { $totalCredit += $feedback[4]; }
      }
    }
    $qnum++;
  }
  return $hasFeedback;
}

function paint_feedback_row($response, $number) {
  $question = array_shift($response);
  $label1 = 'Your choice:';
  $label2 = 'Feedback:';
  $label3 = 'Credit:';
  echo "<tr>\n";
  echo "  <td>{$number}.</td>\n";
  echo "  <td>{$question}</td>\n";
  echo "</tr>\n";
  foreach ($response as $info) {
    list ($choice, $feedback, $credit) = $info;
    echo "<tr>\n";
    echo "  <td>{$label1}</td>\n";
    echo "  <td>{$choice}</td>\n";
    echo "</tr>\n";
    if (!empty($feedback)) {
      echo "<tr>\n";
      echo "  <td>{$label2}</td>\n";
      echo "  <td>{$feedback}</td>\n";
      echo "</tr>\n";
    }
    if (!empty($credit)) {
      echo "<tr>\n";
      echo "  <td>{$label3}</td>\n";
      echo "  <td>{$credit}</td>\n";
      echo "</tr>\n";
    }
  }
}

?>
