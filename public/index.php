<?php

/*
*
* Constant             Interpretation
* -------------------- ---------------------------------------------------------------------------------------------------
* STATUS_NOT_STARTED   The user has never submitted a response.  The user may have looked at the survey.
* STATUS_ALL_PARTIAL   The user has submitted a single, incomplete response.
* STATUS_SOME_PARTIAL  The user has submitted at least one complete, but at least one incomplete, response.
* STATUS_FINISHED      The user has submitted at least one complete, but no incomplete, response.
*
* @_TODO_@
* o On login page, add link to reset a forgotten password
* o In table of surveys, add:
*   - response ID/confirmation number to finished surveys
*   - opening/closing date (FUTURE ENHANCEMENT NEEDED TO WHOLE APP)
*/

$_SERVER['BASE_PAGE'] = 'index.php';
$title = "Respondent Section: Dashboard";
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/include/config.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/public/include/template.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/public/include/first.php';
//require_once $_SERVER['DOCUMENT_ROOT'] . '/public/include/fb/autoload.php';

// survey status
define('STATUS_NOT_STARTED', 'Not Started');
define('STATUS_ALL_PARTIAL', 'Started, but incomplete');
define('STATUS_SOME_PARTIAL', 'Some Finished, some incomplete');
define('STATUS_FINISHED', 'Finished');
define('FORMAT_OUTPUT_DATE', isset($ESPCONFIG['date_format'])?$ESPCONFIG['date_format']:'%Y-%m-%d');

// ensure we are configured to want this page
//if (! $GLOBALS['ESPCONFIG']['dashboard_enable']) {
//    displayHeader($title);
//    echo mkerror('Feature disabled; set dashboard_enable = true in your configuration to engage.');
//    displayPageFooter();
//    displayFooter();
//    exit;
//}

// --------------------------------------------------------------------------------

displayHeader($title);
displayNav();
//displayPageHeader();
echo "<div class=\"container\">\n";
handleLogin();
handleLogout();
handleChangeProfile();
handleChangePassword();
//handleHelp();
if (is_session_authenticated()) { paint_authenticated(); }
else { paint_non_authenticated(); }

echo "<p><button class=\"btn btn-lg btn-default\">";
logo();
echo "</button></p>\n\n";

echo "<p><button class=\"btn btn-lg btn-default\">";
echo "<span class=\"logo1\">pe</span><span class=\"logo2\">b</span>";
echo "</button></p>\n\n";

require_once $_SERVER['DOCUMENT_ROOT'] . '/public/include/fbinit.php';

//if (!isset($_SESSION['facebook'])) {
//
//	$login = $facebook->getLoginUrl();
//	echo "<p><a href=\"$login\">Sign in with Facebook</a></p>\n";
//
//}

$helper = $fb->getRedirectLoginHelper();
$permissions = ['email', 'user_likes']; // optional
$loginUrl = $helper->getLoginUrl('http://www.siamsquare.org/public/index.php', $permissions);

echo '<a href="' . $loginUrl . '">Log in with Facebook!</a>';

echo "<br /><br />\n\n";

echo "<p><button class=\"btn btn-lg btn-default\">";
echo "<ruby><span class=\"logo1\">pe</span><rt>พีอี</rt></ruby>";
echo "<ruby><span class=\"logo2\">binary</span><rt>ไบนารี่</rt></ruby>\n";
echo "</button></p>\n\n";



displayFooter();

// --------------------------------------------------------------------------------

?>
