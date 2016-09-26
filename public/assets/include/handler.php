<?php

require_once DOCROOT.'/admin/assets/include/lib.inc';
require_once DOCROOT.'/public/assets/include/first.php';
require_once DOCROOT.'/public/assets/include/handler-prefix.php';

if (!defined('ESP-FIRST-INCLUDED')) { echo "In order to conduct surveys, please include first.php"; exit; }
if (!defined('ESP-AUTH-OK')) { if (!empty($GLOBALS['errmsg'])) echo($GLOBALS['errmsg']); return; }

// get the survey
$sql = "SELECT status, name, public, open_date, close_date FROM ".$GLOBALS['ESPCONFIG']['survey_table']." WHERE id=${sid}";
$result = execute_sql($sql);

if ($result && record_count($result) > 0) { list ($status, $name, $survey_public, $open_date, $close_date) = fetch_row($result); }
else { $status = 0; }

// Added for cookie auth, to eliminate double submits - only for public surveys
$cookiename = "survey_".$sid;
if (isset($_COOKIE["$cookiename"]) && $survey_public=='Y' && !($ESPCONFIG['auth_response'] && auth_get_option('resume'))) { echo (mkerror('You have already completed this survey.')); return; }

$request_direct = 0;
$request_referer = '';

if (!empty($_REQUEST['referer'])) { $request_referer = htmlspecialchars($_REQUEST['referer']); }
elseif (isset($_SERVER['HTTP_REFERER'])) { $request_referer = htmlspecialchars($_SERVER['HTTP_REFERER']); }
else { $request_direct = 1; }

// $_REQUEST['direct'] = '0';
// if ($_SERVER['HTTP_REFERER']) { $_REQUEST['referer'] = htmlspecialchars($_SERVER['HTTP_REFERER']); }
// if (empty($_REQUEST['referer'])) { $_REQUEST['referer'] = ''; $_REQUEST['direct'] = 1; }

// gets wrong for resumed surveys
// if ($_SESSION['sec'] == 1) { $_SESSION['rid'] = 0; }

if (!isset($_SESSION['rid'])) { $_SESSION['rid'] = 0; }
$_SESSION['rid'] = intval($_SESSION['rid']);

// show results instead of show survey, but do not allow getting results from URL or FORM
if(isset($results) && $results) {
  if (!isset($precision)) { $precision = ''; }
  if (!isset($totals)) { $totals = ''; }
  if (!isset($qid)) { $qid = ''; }
  if (!isset($cids)) { $cids = ''; }
  $precision = intval($precision);
  $totals = intval($totals);
  $qid = intval($qid);
  $cids = intval($cids);
  // small security issue here, anyone could pick a QID to crossanalyze
  survey_results($sid, $precision, $totals, $qid, $cids);
  return;
}

if (survey_status_is_edit($status) || survey_status_is_done($status) || survey_status_is_deleted($status)) { $isActive = false; }
elseif (survey_status_is_test($status)) {
  if (isset($_REQUEST['test']) && $_REQUEST['test']) { $isActive = true; }
  else { $isActive = false; }
}
elseif (STATUS_OPEN !== survey_open($open_date, $close_date)) { $isActive = false; }
else { $isActive = true; }

// ------------------ PE ------------------
if (!$isActive) { echo(mkerror('Error processing survey: Survey is not active.')); return; }

//if ($request_referer == $ESPCONFIG['autopub_url']) { $request_referer .= "?name=$name"; }
if ($_REQUEST['referer'] == $ESPCONFIG['autopub_url']) { $request_referer .= "?name=$name"; }

// let's build the correct return/submit/resume link

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
      // submitting a previously saved survey
      // require_once DOCROOT.'/admin/assets/include/lib.inc';
      survey_stat_decrement(SURVEY_STAT_SUSPENDED, $sid);
      // delete the previous responses
      response_delete($sid, $_SESSION['rid'], $_SESSION['sec']);
    }
    $_SESSION['rid'] = response_insert($sid, $_SESSION['sec'], $_SESSION['rid']);
    paint_feedback_end_of_survey($sid, $_SESSION['rid'], $_SESSION['sec']);
    all_done();
  } else { echo mkerror($msg); }
}

if (!empty($_REQUEST['resume']) && $ESPCONFIG['auth_response'] && auth_get_option('resume')) {
  response_delete($sid, $_SESSION['rid'], $_SESSION['sec']);
  $_SESSION['rid'] = response_insert($sid, $_SESSION['sec'], $_SESSION['rid']);
  if ($action == $ESPCONFIG['autopub_url']) { goto_saved($sid, "$action?name=$name"); }
  else { goto_saved($sid, $action); }
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

// record statistics
// require_once DOCROOT.'/admin/assets/include/lib.inc';
survey_stat_increment(SURVEY_STAT_ATTEMPTED, $sid);
survey_stat_increment(SURVEY_STAT_ABANDONED, $sid);

// if resuming a previous survey
if ($ESPCONFIG['auth_response'] && auth_get_option('resume') && $_SESSION['rid'] > 0) {
  response_import_sec($sid, $_SESSION['rid'], $_SESSION['sec']);
  survey_stat_decrement(SURVEY_STAT_SUSPENDED, $sid);
}

$formaction = $ESPCONFIG['proto'] . $_SERVER['HTTP_HOST'] . htmlspecialchars($_SERVER['PHP_SELF']);
paint_submission_form_open();
survey_render($sid, $_SESSION['sec'], $_SESSION['rid'], $msg);

echo "<p class=\"text-center\">\n";
if (auth_get_option('navigate') && $_SESSION['sec'] > 1) { echo "<input class=\"btn btn-default\" type=\"submit\" name=\"prev\" value=\"&lt;&lt; Previous\"> \n"; }
if (auth_get_option('resume')) { echo "<input class=\"btn btn-success\" type=\"submit\" name=\"resume\" value=\"Save\"> \n"; }
if ($_SESSION['sec'] == $num_sections) { echo "<input class=\"btn btn-success\" type=\"submit\" name=\"submit\" value=\"Submit my opinions\"> \n"; }
else { echo "<input class=\"btn btn-default\" type=\"submit\" name=\"next\" value=\"Next &gt;&gt;\"> \n"; }
echo "</p>\n";
echo "</form>\n";

function paint_submission_form_open($additional = array ()) {
  global $formaction, $action, $sid, $name, $request_referer, $request_direct;
  if (empty($request_direct)) { $request_direct = 1; }
  echo "<form method=\"post\" action=\"$formaction\">\n";
  echo "<input type=\"hidden\" name=\"referer\" value=\"{$request_referer}\">\n";
  echo "<input type=\"hidden\" name=\"direct\" value=\"{$request_direct}\">\n";
  echo "<input type=\"hidden\" name=\"sid\" value=\"{$sid}\">\n";
  echo "<input type=\"hidden\" name=\"rid\" value=\"{$_SESSION['rid']}\">\n";
  echo "<input type=\"hidden\" name=\"sec\" value=\"{$_SESSION['sec']}\">\n";
  echo "<input type=\"hidden\" name=\"name\" value=\"{$name}\">\n";
  foreach ($additional as $field => $value) { echo "<input type='hidden' name='$field' value='$value'>"; }
  if ($_REQUEST['test']) { echo "<input type=\"hidden\" name=\"test\" value=\"{$_REQUEST['test']}\">\n"; }
  echo "\n";
}

function all_done() {
  global $sid;

  // commit the response and send an email
  response_commit($_SESSION['rid']);
  response_send_email($sid, $_SESSION['rid']);

  // initialize the state variables
  $_SESSION['rid'] = "";
  $_SESSION['sec'] = "";

  // go to the thank you
  goto_thankyou($sid, $_REQUEST['referer']);
  exit;
}

function paint_feedback_end_of_survey($sid, $rid, $sec) {
  // paint the feedback
  // NOTE: if there is any, this function exits
  paint_feedback($sid, $rid, $sec, array ('feedback' => 'finished'));
}

function paint_feedback_end_of_section($sid, $rid, $sec) {
  // increment the section
  $_SESSION['sec']++;
  // paint my feedback
  paint_feedback($sid, $rid, $sec);
}

function paint_feedback($sid, $rid, $sec, $additional = array ()) {
  // get all the feedback so far, if any
  $hasFeedback = get_feedback($feedback, $totalCredit, $sid, $rid, $sec);

  // if there are is feedback, paint it and exit
  if ($hasFeedback) {
    // open the form
    paint_submission_form_open($additional);

    // paint feedback to each response
    echo '<table>';
    array_walk($feedback, 'paint_feedback_row');
    echo '</table>';

    // paint total credit
    if (! is_null($totalCredit)) { echo 'Total credit:' . ' ' . $totalCredit; }

    echo mksubmit("go", 'Next Page');

    // close the form
    paint_submission_form_close();
    exit;
  }
}

function get_feedback(&$responses, &$totalCredit, $sid, $rid, $sec) {
  // get the questions for each section (by ID)
  // NOTE: we're given section 1-base, but this method has section 0-base
  $sec -= 1;
  $section_questions = survey_get_section_questions($sid);
  if (! array_key_exists($sec, $section_questions)) {
    // invalid section, can't possibly be any feedback
    return;
  }

  // figure out on what question number we start
  $qnum = 0;
  for ($i = 0; $i <= $sec; $i++) {
    $qnum += count($section_questions[$i]);
  }

  // get the responses for just this section
  $allResponses = response_select($sid, $rid, 'content', $section_questions[$sec]);

  // convert any rank or !other to multi-response format
  foreach ($allResponses as $qid => $feedback) {
    // if this is an other
    if (false !== strpos($qid, '_')) {
      // pull it out
      unset($allResponses[$qid]);

      // TODO: If we ever support rank and !other as types with feedback or credit
      // store it as multi
      list ($qid, $sub) = explode('_', $qid);
      $allResponses[$qid][] = $feedback;
    }
  }

  // initialize values
  $totalCredit = null;
  $hasFeedback = false;

  // put them into our desired format
  foreach ($allResponses as $qid => $feedback) {
    // figure out if this is a multi-response
    $hasMulti = (is_array($feedback[0]) ? true : false);

    // initialize the structure with the question name
    $responses[$qnum] = array ($hasMulti ? $feedback[0][0] : $feedback[0]);

    // if this is a multiple response, add them each in
    if ($hasMulti) {
      foreach ($feedback as $response) {
        $responses[$qnum][] = array ($response[1], $response[3], $response[4]);
        if (! empty($response[3])) { $hasFeedback = true; }
        if (! empty($response[4])) { $hasFeedback = true;
          if (is_numeric($response[4])) { $totalCredit += $response[4]; }
        }
      }
    // otherwise, add this one in
    } else {
      $responses[$qnum][] = array ($feedback[1], $feedback[3], $feedback[4]);
      if (! empty($feedback[3])) { $hasFeedback = true; }
      if (! empty($feedback[4])) {
        $hasFeedback = true;
        if (is_numeric($feedback[4])) { $totalCredit += $feedback[4]; }
      }
    }
    // increment the question number
    $qnum++;
  }
  return $hasFeedback;
}

function paint_feedback_row($response, $number) {
  // break apart the feedback data structure
  $question = array_shift($response);

  // initialize variables we'll use in our output
  $label1 = 'Your choice:';
  $label2 = 'Feedback:';
  $label3 = 'Credit:';

  // output the question
  echo "<tr>\n";
  echo "  <td>{$number}.</td>\n";
  echo "  <td>{$question}</td>\n";
  echo "</tr>\n";

  // output each choice and feedback
  foreach ($response as $info) {
    // get the choice, feedback, and credit
    list ($choice, $feedback, $credit) = $info;

    // output the choice
    echo "<tr>\n";
    echo "  <td>{$label1}</td>\n";
    echo "  <td>{$choice}</td>\n";
    echo "</tr>\n";

    // if there's feedback, output it
    if (! empty($feedback)) {
      echo "<tr>\n";
      echo "  <td>{$label2}</td>\n";
      echo "  <td>{$feedback}</td>\n";
      echo "</tr>\n";
    }

    // if there's credit, output it
    if (! empty($credit)) {
      echo "<tr>\n";
      echo "  <td>{$label3}</td>\n";
      echo "  <td>{$credit}</td>\n";
      echo "</tr>\n";
    }
  }
}

?>
