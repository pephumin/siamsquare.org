<?php

if (!defined('ESP-FIRST-INCLUDED')) { echo "In order to conduct surveys, please include first.php (not handler-prefix.php)"; exit; }
if (defined('ESP-HANDLER-PREFIX')) { return; }
define('ESP-HANDLER-PREFIX', true);

$GLOBALS['errmsg'] = '';

if (isset($_REQUEST['results']) || isset($_REQUEST['results'])) { $GLOBALS['errmsg'] = mkerror('Error processing survey: Security violation.'); return; }

if (isset($sid) && !empty($sid)) { $sid = intval($sid); }
elseif (isset($_REQUEST['sid']) && !empty($_REQUEST['sid'])) { $sid = intval($_REQUEST['sid']); }
if (!isset($sid) || empty($sid)) { blur('/public'); assert('false; // NOTREACHED'); }

if (empty($_REQUEST['rid'])) { $request_rid = 0; } else { $request_rid = intval($_REQUEST['rid']) ? intval($_REQUEST['rid']) : 0; }

if (isset($_REQUEST['username']) && ($_REQUEST['username'] != "")) { $_SESSION['espuser'] = $_REQUEST['username']; }
if (isset($_SESSION['espuser'])) { $espuser = $_SESSION['espuser']; } else { $espuser = ""; }
if (isset($_REQUEST['password']) && ($_REQUEST['password'] != "")) { $_SESSION['esppass'] = $_REQUEST['password']; }
if (isset($_SESSION['esppass'])) { $esppass = $_SESSION['esppass']; } else { $esppass = ""; }

if (!survey_auth($sid, $espuser, _addslashes($esppass), $esppass, $_css, $_title))
    return;

if (auth_get_option('resume')) {
  $_SESSION['rid'] = auth_get_rid($sid, $espuser, $request_rid);
  if (!empty($_SESSION['rid']) && (!isset($_SESSION['sec']) || empty($_SESSION['sec']) || intval($_SESSION['sec']) < 1)) {
    $section_to_return_to = response_select_max_sec($sid, $_SESSION['rid']);
    // we let people return to previously filled in sections if defined in the URL request
    if (isset($_GET['sec']) && intval($_GET['sec']) > 0 && $_GET['sec'] <= $section_to_return_to) { $_SESSION['sec'] = intval($_GET['sec']); }
    else { $_SESSION['sec'] = $section_to_return_to; }
  }
}

$num_sections = survey_num_sections($sid);
if (!isset($_SESSION['sec']) || empty($_SESSION['sec']) || $_SESSION['sec'] > $num_sections) { $_SESSION['sec'] = 1; }
else { $_SESSION['sec'] = (intval($_SESSION['sec']) > 0) ? intval($_SESSION['sec']) : 1; }

define('ESP-AUTH-OK', true);

?>
