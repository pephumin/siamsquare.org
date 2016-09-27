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
$title = "Respondent dashboard";
require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/config.php';
require_once DOCROOT.'/public/assets/include/template.php';
require_once DOCROOT.'/public/assets/include/first.php';

get_current_respondent($respondent);

// survey status
define('STATUS_NOT_STARTED', 'Not Started');
define('STATUS_ALL_PARTIAL', 'Started, but incomplete');
define('STATUS_SOME_PARTIAL', 'Some finished, some incomplete');
define('STATUS_FINISHED', 'Finished');
define('FORMAT_OUTPUT_DATE', isset($ESPCONFIG['date_format'])?$ESPCONFIG['date_format']:'%Y-%m-%d');

// --------------------------------------------------------------------------------

pageHeader($title);
handleLogin();
handleLogout();
handleChangeProfile();
handleChangePassword();
if (is_session_authenticated()) { paint_authenticated(); }
else { paint_non_authenticated(); }
if ($notes) { pageFooter($notes); } else { pageFooter(); }

echo "<div class=\"row\"><div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\n";
echo "<pre>\n";
print_r($_POST);
echo "</pre>\n";
echo "</div>\n";
echo "<div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\n";
echo "<pre>\n";
print_r($_SESSION);
echo "</pre>\n";
echo "</div>\n";
echo "</div></div>\n";

// --------------------------------------------------------------------------------

?>
