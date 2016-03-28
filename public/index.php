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

// survey status
define('STATUS_NOT_STARTED', 'Not Started');
define('STATUS_ALL_PARTIAL', 'Started, but incomplete');
define('STATUS_SOME_PARTIAL', 'Some Finished, some incomplete');
define('STATUS_FINISHED', 'Finished');
define('FORMAT_OUTPUT_DATE', isset($ESPCONFIG['date_format'])?$ESPCONFIG['date_format']:'%Y-%m-%d');

// ensure we are configured to want this page
if (! $GLOBALS['ESPCONFIG']['dashboard_enable']) {
    displayHeader($title);
    echo mkerror('Feature disabled; set dashboard_enable = true in your configuration to engage.');
    displayPageFooter();
    displayFooter();
    exit;
}

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
echo "</div>\n";
displayFooter();

// --------------------------------------------------------------------------------

?>
