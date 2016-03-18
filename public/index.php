<?php

/*
* There are two distinct operating modes: authenticated and non-authenticated.  When not authenticated, this page presents
* a login form as well as a list of links to all public surveys.  Once authenticated, this page presents a list of links to
* all user-specific surveys (private and public surveys), a history showing his previously completed surveys, and a
* toolbox through which he can change his password, access the user manual, logout, etc.
*
* @_PATTERNS_@
*
* @_NOTES_@
* MEANING/INTERPREATION OF SURVEY STATUS
* The following table describes the meaning of the status constants:
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
*
*/
	
$_SERVER['BASE_PAGE'] = 'index.php';
<<<<<<< HEAD
$title = "Main Interface";
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/include/config.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/public/include/template.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/public/include/first.php';
=======
require_once $_SERVER['DOCUMENT_ROOT'] . '/public/include/first.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/include/config.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/public/include/template.php';
>>>>>>> master

// survey status
define('STATUS_NOT_STARTED',  'Not Started');
define('STATUS_ALL_PARTIAL',  'Started, but Incomplete');
define('STATUS_SOME_PARTIAL', 'Some Finished, some Incomplete');
define('STATUS_FINISHED',     'Finished');
define('FORMAT_OUTPUT_DATE', isset($ESPCONFIG['date_format'])?$ESPCONFIG['date_format']:'%Y-%m-%d');

// ensure we are configured to want this page
if (! $GLOBALS['ESPCONFIG']['dashboard_enable']) {
    paint_header();
    echo mkerror(_('Feature disabled; set dashboard_enable = true in your configuration to engage.'));
    paint_footer();
    exit;
}

<<<<<<< HEAD
// --------------------------------------------------------------------------------

displayHeader($title);
displayNav();
//displayPageHeader();
=======
>>>>>>> master
handleLogin();
handleLogout();
handleChangeProfile();
handleChangePassword();
<<<<<<< HEAD
//handleHelp();
if (is_session_authenticated()) { paint_authenticated(); } 
else { paint_non_authenticated(); }
displayPageFooter();
displayFooter();

// --------------------------------------------------------------------------------
=======
handleHelp();

if (is_session_authenticated()) { paint_authenticated(); } 
else { paint_non_authenticated(); }
>>>>>>> master

?>
