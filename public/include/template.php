<?php

$home = "http://www.siamsquare.org";
$public = $home."/public";
$self = $_SERVER['PHP_SELF'];
$base = $_SERVER['BASE_PAGE'];


function handleLogin() {
    $handleLogin = (
                    ! is_session_authenticated() &&
                    isset($_REQUEST['doLogin']) &&
                    ! empty($_REQUEST['username']) && ! empty($_REQUEST['password']) ?
                    true : false
                   );
    if ($handleLogin) {
        $isAuthenticated = authenticate($_REQUEST['username'], $_REQUEST['password'], $realms);
        $realmsCnt = count($realms);

        // if the login information uniquely identifies a user, mark as authenticated session and move on
        if ($isAuthenticated && 1 === $realmsCnt) {
            $ok = set_current_respondent($_REQUEST['username'], current($realms), $_REQUEST['password']);
            if ($ok) {
                set_session_authentication($isAuthenticated);
                blur('/public/');
                assert('false; // NOTREACHED');
            }

        // if the login is recognized but not-unique, we can't figure out what to do... panic
        // NOTE: if email were mandatory, then we could use that as a key...
        } else if ($isAuthenticated && 2 <= $realmsCnt) {
            $GLOBALS['errmsg'] = mkerror(_('Please contact an administrator: multi-realm'));

        // otherwise, not recognized, throw error
        } else {
            $GLOBALS['errmsg'] = mkerror(_('Incorrect User ID or Password, or your account has been disabled/expired.'));
        }
    }
}

//  handleLogout()
//  Handle a log out button press

function handleLogout() {
    $handleLogout = (isset($_REQUEST['doLogout']) && is_session_authenticated() ? true : false);
    if ($handleLogout) {
        // tag the session as no longer authenticated
        set_session_authentication(false);
    }
}

//  handleChangeProfile()
//  Handle a profile change button press

function handleChangeProfile() {
    // are we in change profile mode?
    $showChangeProfile   = (
                            $GLOBALS['ESPCONFIG']['dashboard_allow_change_profile'] &&
                            empty($_REQUEST['doChangeProfileCancel']) &&
                            is_session_authenticated() &&
                            isset($_REQUEST['doChangeProfile']) ?
                            true : false
                           );
    // are we also changing the password?
    $handleChangeProfile = (
                             $showChangeProfile &&
                             get_current_respondent($respondent) &&
                             isset($_REQUEST['firstName']) && isset($_REQUEST['lastName']) &&
                             isset($_REQUEST['emailAddress']) ?
                             true : false
                            );

    // if changing, handle it
    if ($handleChangeProfile) {
        $ok = change_profile(
                  $respondent['username'], $respondent['realm'],
                  $_REQUEST['firstName'], $_REQUEST['lastName'], $_REQUEST['emailAddress']
              );
        if ($ok) {
            $showChangeProfile = false;
            $GLOBALS['errmsg'] = mkerror(_('Your profile has been updated successfully'));
        } else {
            $GLOBALS['errmsg'] = mkerror(_('Unable to change your password; contact an administrator'));
        }
    }

    // if we're showing the change profile form, do so
    if ($showChangeProfile) {
        if (empty($_REQUEST['firstName'])) {
            $_REQUEST['firstName'] = $respondent['fname'];
        }
        if (empty($_REQUEST['lastName'])) {
            $_REQUEST['lastName'] = $respondent['lname'];
        }
        if (empty($_REQUEST['emailAddress'])) {
            $_REQUEST['emailAddress'] = $respondent['email'];
        }

        paint_header();
        echo '<div class="dashboardPanel">' .
             '<h1>' . _('Change My Profile') . '</h1>' .
             render_profile_change_form() .
             '</div>';
        paint_footer();
        exit;
    }
}

//  handleChangePassword()
//  Handle a password change button press

function handleChangePassword() {
    // are we in change password mode?
    $showChangePassword   = (
                             $GLOBALS['ESPCONFIG']['dashboard_allow_change_password'] &&
                             empty($_REQUEST['doChangePasswordCancel']) &&
                             is_session_authenticated() &&
                             isset($_REQUEST['doChangePassword']) ?
                             true : false
                            );
    // are we also changing the password?
    $handleChangePassword = (
                             $showChangePassword &&
                             get_current_respondent($respondent) &&
                             ! empty($_REQUEST['oldPassword']) &&
                             ! empty($_REQUEST['newPassword']) && ! empty($_REQUEST['newPasswordConfirm']) ?
                             true : false
                            );

    // if changing, handle it
    if ($handleChangePassword) {
        $isAuthenticated = authenticate($respondent['username'], $_REQUEST['oldPassword'], $realms);
        $isAuthenticated = (1 === count($realms) ? $isAuthenticated : false);
        $isMatch = (0 === strcmp($_REQUEST['newPassword'], $_REQUEST['newPasswordConfirm']) ? true : false);

        // if the old password authenticates and the confirmation password matches, go change
        if ($isAuthenticated && $isMatch) {
            // if password changes successfully, drop out of show change password mode
            $ok = change_password($respondent['username'], $respondent['realm'], $_REQUEST['newPassword']);
            if ($ok) {
                $showChangePassword = false;
                $GLOBALS['errmsg'] = mkerror(_('Your password has been changed successfully'));
            } else {
                $GLOBALS['errmsg'] = mkerror(_('Unable to change your password; contact an administrator'));
            }

        // if the old password authenticates but the confirmation doesn't match
        } else if ($isAuthenticated && ! $isMatch) {
            $GLOBALS['errmsg'] = mkerror(_('Passwords do not match; check your typing'));

        // otherwise, bad original password, puke
        } else {
            $GLOBALS['errmsg'] = mkerror(_('Old password incorrect; check your typing'));
        }
    }

    // if we're showing the change password form, do so
    if ($showChangePassword) {
        paint_header();
        echo '<div class="dashboardPanel">' .
             '<h1>' . _('Change My Password') . '</h1>' .
             render_passwd_change_form() .
             '</div>';
        paint_footer();
        exit;
    }
}

//  handleHelp()
//  Handle a help button press

function handleHelp() {
    global $base, $public, $admin;
    $handleHelp = (isset($_REQUEST['doHelp']) && is_session_authenticated() ? true : false);
    if ($handleHelp) {
        //$base  = $GLOBALS['ESPCONFIG']['base_url'];
        $title = _('Help');
	echo '<a href="'.$public.'">Back</a>';
	//require_once('help/index.php');
	$target = ESP_BASE . 'public/help/index.php';
	//include($target);
	echo $target;
	require_once($target);
    }
}


function paint_header() {
    global $base, $public, $admin;
    $cfg =& $GLOBALS['ESPCONFIG'];

    $title = _('Respondent Dashboard');
    echo <<<EOHTML
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" 
"http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
EOHTML;
    if(!empty($cfg['charset'])) {
        echo('<meta http-equiv="Content-Type" content="text/html; charset='. $cfg['charset'] ."\" />\n");
    }
    if (! empty($cfg['favicon'])) {
        echo '<link rel="shortcut icon" href="' . $cfg['favicon'] . '" />';
    }
    echo <<<EOHTML
  <title>{$title}</title>
  <link rel="stylesheet" href="{$cfg['css_url']}/default.css" type="text/css" />
  <script type="text/javascript" src="{$cfg['js_url']}/default.js"></script>
EOHTML;
    echo '</head><body><div id="dashboard">';
    echo @$GLOBALS['errmsg'];
}

function displayHeader($title, $scrollspy = NULL) {
	global $self, $home, $public, $base;
	header("Content-language: en");
	header("Content-type: text/html; charset=utf-8");
	echo "<!DOCTYPE html>\n";
	echo "<html>\n";
	echo "<head>\n";
	echo "	<meta charset=\"utf-8\">\n";
	echo "	<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n";
	echo "	<title>Respondent Dashboard: $title</title>\n";
	$cssfiles = array("css/bootstrap.css", "css/font-awesome.css", "css/pe.css");
	foreach ($cssfiles as $filename) {
		echo "	<link href=\"$filename\" rel=\"stylesheet\" type=\"text/css\" />\n";
 	}
	//if(!empty($ESPCONFIG['favicon'])) {
	//echo "	<link rel=\"shortcut icon\" href=\"$ESPCONFIG['favicon']\"\n";
	//}
	if (isset($_SERVER['BASE_PAGE'])) {
		echo "	<link rel=\"canonical\" href=\"$admin/$base\">\n";
	}
	$jsfiles = array("js/admin.js");
	foreach ($jsfiles as $filename) {
		//$path = dirname(dirname(__FILE__)).'/js/'.$filename;
		echo "	<script type=\"text/javascript\" src=\"$filename\"></script>\n";
 	}
	echo "</head>\n";
	if ($scrollspy) { echo "<body data-spy=\"scroll\" data-target=\"#ssqscrollspy\" data-offset=\"20\">\n"; }
	else { echo "<body>\n"; }
}

function paint_footer() {
    global $base, $public, $admin;
    echo '<div class="dashboard">';
    echo '<p><a href="'.$public.'/help">Help</a></p>';
    echo '</div>';
    echo '</div></body></html>';
}

// }}}
// {{{ paint_non_authenticated()       Paint the page for non-authenticated users

function paint_non_authenticated() {
    // throw it up
    paint_header();
    paint_login_panel();
    paint_public_survey_list();
    paint_footer();
}

// }}}
// {{{ paint_login_panel()             Paint the login panel

function paint_login_panel() {
    echo '<div class="dashboardPanel" id="my_login">' .
         '<h1>' . _('Login') . '</h1>' .
         render_login_form() .
         (
           empty($GLOBALS['ESPCONFIG']['signup_realm']) ?
           '' :
           '<a href="signup.php">' . _("Don't have an account? Sign up."). '</a>'
         ) .
         (
           empty($GLOBALS['ESPCONFIG']['support_email_address']) ?
           '' :
           "<a href='mailto:{$GLOBALS['ESPCONFIG']['support_email_address']}'>" . _('Need help? E-mail us.'). '</a>'
         ) .
         '</div>';
}

// }}}
// {{{ paint_public_survey_list()      Paint a list of links to take the given surveys

function paint_public_survey_list() {
    // make sure we're configured to show this
    if (! $GLOBALS['ESPCONFIG']['dashboard_show_public_surveys']) {
        return;
    }

    // get the available public surveys
    get_survey_info($surveys, $_, $accessibility);
    foreach ($surveys as $sid => $survey) {
        if (isset($accessibility[$sid]['available']) && true === (bool)$accessibility[$sid]['available']) {
            continue;
        }
        unset($surveys[$sid]);
    }

    // spit them out
    if (0 < count($surveys)) {
        echo '<div class="dashboardPanel" id="my_surveys">' .
             '<h1>' . _('Public Surveys') . '</h1>' .
             '<p>' . _('If you have an account, please log in before taking these public surveys.') . '</p>' .
             '<ul>';
        foreach ($surveys as $survey) {
            printf('<li><a href="%s">%s</a></li>', survey_fetch_url_by_survey_name($survey['name']), $survey['title']);
        }
        echo '</ul>' .
             '</div>';
    }
}

// }}}

// {{{ paint_authenticated()           Paint the page for authenticated users

function paint_authenticated() {
    // get the needed data
    get_survey_info($surveys, $responses, $accessibility);
    partition_surveys($surveys, $responses, $accessibility, $current, $historical);

    // throw it up
    paint_header();
    paint_welcome();
    paint_respondent_surveys($current);
    paint_respondent_history($historical);
    paint_respondent_tools();
    paint_footer();
}

// }}}
// {{{ paint_welcome()                 Paint a friendly welcome message

function paint_welcome() {
    echo '<h1>Dashboard</h1>';
    $ok = get_current_respondent($respondent);
    if ($ok) {
        // spew a nice welcome message, if we know the person's name
        if (! empty($respondent['fname'])) {
            echo '<em>Welcome, ' . $respondent['fname'];
            if (! empty($respondent['lname'])) {
                echo ' ' . $respondent['lname'];
            }
            echo '.</em>  ';
        }
    }

    // spew the time
    printf(_('Right now, my watch shows %s.'), strftime(FORMAT_OUTPUT_DATE));
}

// }}}
// {{{ paint_respondent_surveys()      Paint a panel of links to surveys available to the current respondent

function paint_respondent_surveys($current) {
    echo '<div class="dashboardPanel" id="my_surveys">';

    // make surveys into a list
    if (0 < count($current)) {
        echo '<table>' .
             '<caption>' . _('My Surveys') . '</caption>' .
             '<thead><tr>' .
             '<th>' . _('Survey Title') . '</th>' .
             '<th>' . _('Submission Status') . '</th>' .
             '<th>' . _('Last Access') . '</th>' .
             '<th>' . _('Availability') . '</th>' .
             '</tr></thead><tbody>';

        foreach ($current as $sid => $info) {
            list ($name, $status, $date, $avail) = $info;
            printf('<tr><td>%s</td><td>%s</td><td>%s</td><td>%s</td></tr>', $name, $status, $date, $avail);
        }

        echo '</tbody></table>';
    } else {
       echo _('You do not have any surveys at this time.');
    }

    echo '</div>';
}

// }}}
// {{{ paint_respondent_history()      Paint a historical list of surveys this respondent has completed

function paint_respondent_history($historical) {
    echo '<div class="dashboardPanel" id="my_history">';

    // make surveys into a list
    if (0 < count($historical)) {
        echo '<table>' .
             '<caption>' . _('My History') . '</caption>' .
             '<thead><tr>' .
             '<th>' . _('Survey Title') . '</th>' .
             '<th>' . _('Submission Status') . '</th>' .
             '<th>' . _('Last Access') . '</th>' .
             '<th>' . _('Availability') . '</th>' .
             '</tr></thead><tbody>';

        foreach ($historical as $sid => $info) {
            list ($name, $status, $date, $avail) = $info;
            printf('<tr><td>%s</td><td>%s</td><td>%s</td><td>%s</td></tr>', $name, $status, $date, $avail);
        }

        echo '</tbody></table>';
    } else {
       echo _('You have no historical surveys at this time.');
    }

    echo '</div>';
}

// }}}
// {{{ paint_respondent_tools()        Paint a panel of tools available to this respondent

function paint_respondent_tools() {
    global $base, $public, $admin;
    $cfg =& $GLOBALS['ESPCONFIG'];

    // figure out what tools to make available
    // ... the standard, always available ones
    $tools  = array (
                  "$public/?doChangeProfile=1" => _('Edit my profile'),
                  "$public/?doChangePassword=1" => _('Change my password'),
                  "$public/?doLogout=1" => _('Logout'),
                  "$public/help"   => _('Help'),
              );

    // ... profile and password changing
    //if ($GLOBALS['ESPCONFIG']['dashboard_allow_change_profile']) {
    //    $tools["$public/?doChangeProfile=1"] = _('Change my profile');
    //}
    //if ($GLOBALS['ESPCONFIG']['dashboard_allow_change_password']) {
    //    $tools["$public/?doChangePassword=1"] = _('Change my password');
    //}

    // ... contacting support
    if (! empty($GLOBALS['ESPCONFIG']['support_email_address'])) {
        $tools["mailto:{$GLOBALS['ESPCONFIG']['support_email_address']}"] = _('E-mail support');
    }

    // throw it up
    $header = _('My Tools');
    echo <<<EOHTML
<div class='dashboardPanel' id='my_tools'>
<h1>$header</h1>
<ul>
EOHTML;
    foreach ($tools as $url => $label) {
        printf('<li><a href="%s">%s</a></li>', $url, $label);
    }
    echo <<<EOHTML
</ul>
</div>
EOHTML;
}

// }}}

/* helpers */
// {{{ get_survey_info()               Get the surveys, the responses, and the accessibility of surveys for the current user

function get_survey_info(&$surveys, &$responses, &$accessibility) {
    // initialize return values
    $surveys       = array ();
    $responses     = array ();
    $accessibility = array ();

    // everybody gets the public surveys
    esp_require_once('/lib/espsurvey');
    survey_get_public($surveys);
    $sids = array_keys($surveys);

    // if we have a current (authenticated) respondent
    $ok = get_current_respondent($respondent);
    if ($ok && array_key_exists('realm', $respondent)) {
        // get the surveys available to that user
        survey_get_in_realm($respondent['realm'], $private);
        survey_merge_sets($surveys, $private);
        $sids = array_keys($surveys);

        // get the responses and accessibility for those surveys
        survey_get_responses($responses, $sids, $respondent['username']);
        survey_get_accessibility($accessibility, $sids, $respondent['username'], $respondent['realm']);
    } else {
        // get the accessibility of those surveys
        survey_get_accessibility($accessibility, $sids);
    }

    return true;
}

// }}}
// {{{ partition_surveys()             Divide the user's surveys into those that are active and those that aren't

function partition_surveys($surveys, $responses, $accessibility, &$current, &$historical) {
    foreach ($surveys as $sid => $survey) {
        // if the survey is available
        if (isset($accessibility[$sid]['available']) && true === (bool)$accessibility[$sid]['available']) {
            // get a link to the survey, its status, and the last access date
            $name   = sprintf('<a href="%s">%s</a>', survey_fetch_url_by_survey_name($survey['name']), $survey['title']);
            $status = fetch_status($sid, $responses);
            $date   = fetch_latest_submission_date($sid, $responses);
            $avail  = fetch_availability($survey, $availability);

            // but, if the survey is not open, get rid of the link
            if (STATUS_OPEN !== $availability) {
                $name = $survey['title'];
            }

            $current[] = array ($name, $status, $date, $avail);

        // otherwise the survey is historical
        } else {
            $name   = $survey['title'];
            $status = fetch_status($sid, $responses);
            $date   = fetch_latest_submission_date($sid, $responses);
            $avail  = _('Closed');

            $historical[] = array ($name, $status, $date, $avail);
        }
    }
}

// }}}
// {{{ fetch_status()                  Given a set of responses and a survey ID, determine the status of those responses

function fetch_status($sid, $responses) {
    // get the status
    if (isset($responses[$sid])) {
        // there are responses
        if (isset($responses[$sid]['complete'])) {
            // there is only one response
            $status = ('Y' == $responses[$sid]['complete'] ? STATUS_FINISHED : STATUS_ALL_PARTIAL);
        } else {
            // more than one response
            $status = STATUS_FINISHED;
            foreach ($responses[$sid] as $response) {
                if ('N' == $response['complete']) {
                    $status = STATUS_SOME_PARTIAL;
                }
            }
        }
    } else {
        // no responses made, but since survey is available, this is an incomplete survey
        $status = STATUS_NOT_STARTED;
    }

    return $status;
}

// }}}
// {{{ fetch_latest_submission_date()  Given a set of responses and a survey ID, determine the latest submission date

function fetch_latest_submission_date($sid, $responses) {
    if (isset($responses[$sid])) {
        // there are responses
        if (isset($responses[$sid]['submitted'])) {
            // there is only one response
            $date = $responses[$sid]['submitted'];
        } else {
            // more than one response
            $date = '0000-00-00 00:00:00';
            foreach ($responses[$sid] as $response) {
                if ($date < $response['submitted']) {
                    $date = $response['submitted'];
                }
            }
        }

        // don't need the date down to the second, so just go down to the minute
        $datets = strtotime($date);
        if (-1 !== $datets) {
            $date = strftime(FORMAT_OUTPUT_DATE, $datets);
        }
    } else {
        $date = '';
    }

    return $date;
}

// }}}
// {{{ fetch_availability()            Given a survey, determine its availability

function fetch_availability($survey, &$rc) {
    $rc = survey_open($survey['open_date'], $survey['close_date']);
    switch ($rc) {
    case STATUS_OPEN:
        return _('Now taking submissions');
        break;

    case STATUS_CLOSED_TOO_EARLY:
        return _('Not yet taking submissions');
        break;

    case STATUS_CLOSED_TOO_LATE:
        return _('No longer taking submissions');
        break;

    default:
        assert('false; // unexpected case reached; code bug');
        return '';
    }
}

// }}}

// {{{ render_login_form()             Render a login form

function render_login_form($action = null, $usernameVar = 'username', $passwordVar = 'password', $loginButtonVar = 'doLogin') {
    global $base, $public, $admin;
    $cfg =& $GLOBALS['ESPCONFIG'];
    if (empty($action)) {
        //$action = $cfg['base_url'] . '/public/';
        $action = $public . '/';
    }

    $usernameLabel = _('User ID');
    $passwordLabel = _('Password');
    $loginLabel    = _('Login');
    $username      = (isset($_REQUEST['username']) ? $_REQUEST['username'] : '');
    return <<<EOHTML
<form id='login' action='{$action}' method='post'>
<fieldset>
  <div class='row'>
    <label for='{$usernameVar}'>{$usernameLabel}</label>
    <input type='text' name='{$usernameVar}' id='{$usernameVar}' value='{$username}' />
  </div>
  <div class='row'>
    <label for='{$passwordVar}'>{$passwordLabel}</label>
    <input type='password' name='{$passwordVar}' id='{$passwordVar}' />
  </div>
  <div class='buttons'>
    <input type='submit' name='{$loginButtonVar}' value='{$loginLabel}' />
  </div>
</fieldset>
</form>
EOHTML;
}

// }}}
// {{{ render_profile_change_form()    Render a profile change form

function render_profile_change_form(
    $action = null,
    $firstNameVar = 'firstName', $lastNameVar = 'lastName', $emailVar = 'emailAddress',
    $changeButtonVar = 'doChangeProfile', $cancelButtonVar = 'doChangeProfileCancel'
    ) {

    global $base, $public, $admin;
    $cfg =& $GLOBALS['ESPCONFIG'];
    if (empty($action)) {
        //$action = $cfg['base_url'] . '/public/';
        $action = $public . '/';
    }

    $firstNameLabel    = _('First Name');
    $lastNameLabel     = _('Last Name');
    $emailAddressLabel = _('Email Address');
    $changeLabel       = _('Change');
    $cancelLabel       = _('Cancel');

    $firstName         = (isset($_REQUEST[$firstNameVar]) ? htmlentities($_REQUEST[$firstNameVar]) : '');
    $lastName          = (isset($_REQUEST[$lastNameVar])  ? htmlentities($_REQUEST[$lastNameVar])  : '');
    $emailAddress      = (isset($_REQUEST[$emailVar])     ? htmlentities($_REQUEST[$emailVar])     : '');
    return <<<EOHTML
<form id='profile_change' action='{$action}' method='post'>
<fieldset>
  <div class='row'>
    <label for='{$firstNameVar}'>{$firstNameLabel}</label>
    <input type='text' name='{$firstNameVar}' id='{$firstNameVar}' value='{$firstName}' />
  </div>
  <div class='row'>
    <label for='{$lastNameVar}'>{$lastNameLabel}</label>
    <input type='text' name='{$lastNameVar}' id='{$lastNameVar}' value='{$lastName}' />
  </div>
  <div class='row'>
    <label for='{$emailVar}'>{$emailAddressLabel}</label>
    <input type='text' name='{$emailVar}' id='{$emailVar}' value='{$emailAddress}' />
  </div>
  <div class='buttons'>
    <input type='submit' name='{$changeButtonVar}' value='{$changeLabel}' />
    <input type='submit' name='{$cancelButtonVar}' value='{$cancelLabel}' />
  </div>
</fieldset>
</form>
EOHTML;
}

// }}}
// {{{ render_passwd_change_form()     Render a password change form

function render_passwd_change_form(
    $action = null,
    $oldPasswordVar = 'oldPassword', $newPasswordVar = 'newPassword', $newPasswordConfirmVar = 'newPasswordConfirm',
    $changeButtonVar = 'doChangePassword', $cancelButtonVar = 'doChangePasswordCancel'
    ) {

    global $base, $public, $admin;
    $cfg =& $GLOBALS['ESPCONFIG'];
    if (empty($action)) {
        //$action = $cfg['base_url'] . '/public/';
        $action = $public . '/';
    }

    $oldPasswordLabel        = _('Old Password');
    $newPasswordLabel        = _('New Password');
    $newPasswordConfirmLabel = _('Confirm New Password');
    $changeLabel             = _('Change');
    $cancelLabel             = _('Cancel');
    return <<<EOHTML
<form id='passwd_change' action='{$action}' method='post'>
<fieldset>
  <div class='row'>
    <label for='{$oldPasswordVar}'>{$oldPasswordLabel}</label>
    <input type='password' name='{$oldPasswordVar}' id='{$oldPasswordVar}' />
  </div>
  <div class='row'>
    <label for='{$newPasswordVar}'>{$newPasswordLabel}</label>
    <input type='password' name='{$newPasswordVar}' id='{$newPasswordVar}' />
  </div>
  <div class='row'>
    <label for='{$newPasswordConfirmVar}'>{$newPasswordConfirmLabel}</label>
    <input type='password' name='{$newPasswordConfirmVar}' id='{$newPasswordConfirmVar}' />
  </div>
  <div class='buttons'>
    <input type='submit' name='{$changeButtonVar}' value='{$changeLabel}' />
    <input type='submit' name='{$cancelButtonVar}' value='{$cancelLabel}' />
  </div>
</fieldset>
</form>
EOHTML;
}



function displayNav() {
	global $self, $home, $public, $base;
	echo "\n\n";
	echo "<nav class=\"navbar navbar-default\">\n";
	echo "<div class=\"container\">\n";
	echo "  <div class=\"navbar-header\">\n";
	echo "    <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\">\n";
	echo "      <span class=\"sr-only\">Toggle navigation</span>\n";
	echo "      <span class=\"icon-bar\"></span>\n";
	echo "      <span class=\"icon-bar\"></span>\n";
	echo "      <span class=\"icon-bar\"></span>\n";
	echo "    </button>\n";
	echo "    <a class=\"navbar-brand\" href=\"$home\"><strong>SiamSquare</strong></a>\n";	
	if ($_SERVER['REQUEST_URI'] == "/admin/index.php") { $a = '<li class="active">'; } else { $a = '<li>'; }
	if ($_SERVER['REQUEST_URI'] == "/admin/contact.php") { $b = '<li class="active">'; } else { $b = '<li>'; }
	if ($_SERVER['REQUEST_URI'] == "/admin/help.php") { $c = '<li class="active">'; } else { $c = '<li>'; }
	if(!empty($_SESSION['acl']['username'])) {
		echo "  </div> <!--/navbar-header -->\n";
		echo "  <div id=\"navbar\" class=\"navbar-collapse collapse\">\n";
		echo "    <ul class=\"nav navbar-nav navbar-right\">\n";
		echo "      $a<a href=\"$admin\"><i class=\"fa fa-home fa-lg\"></i>&nbsp; Home</a></li>\n";
		echo "      $b<a href=\"/admin/contact.php\"><i class=\"fa fa-envelope-o fa-lg\"></i>&nbsp; Contact</a></li>\n";
		echo "      $c<a href=\"/admin/help.php\"><i class=\"fa fa-question fa-lg\"></i>&nbsp; Help</a></li>\n";
		echo "      <li><a href=\"$admin/index.php?where=logout\"><i class=\"fa fa-sign-out fa-lg\"></i>&nbsp; Log out</a></li>\n";
		echo "    </ul>\n";
		echo "  </div> <!--/navbar-collapse -->\n";
		echo "</div>\n";
		echo "</nav>\n";
	} else {
		echo "  </div> <!--/navbar-header -->\n";
		echo "  <div id=\"navbar\" class=\"navbar-collapse collapse\">\n";
		echo "    <ul class=\"nav navbar-nav navbar-right\">\n";
		//echo "      $a<a href=\"$admin\"><i class=\"fa fa-home fa-lg\"></i>&nbsp; Home</a></li>\n";
		echo "      $a<a href=\"$admin\"><i class=\"fa fa-power-off fa-lg\"></i>&nbsp; Log-in</a></li>\n";
		echo "      $b<a href=\"/admin/contact.php\"><i class=\"fa fa-envelope-o fa-lg\"></i>&nbsp; Contact</a></li>\n";
		echo "      $c<a href=\"/admin/help.php\"><i class=\"fa fa-question fa-lg\"></i>&nbsp; Help</a></li>\n";
		//echo "      <li><a href=\"$admin/index.php?where=logout\"><i class=\"fa fa-sign-out fa-lg\"></i>&nbsp; Log Out</a></li>\n";
		echo "    </ul>\n";
		echo "  </div> <!--/navbar-collapse -->\n";
		echo "</div>\n";
		echo "</nav>\n";		
	}
}

function displayTabNav() {
	global $tab;
	echo "<p>";
	echo '<input type="hidden" name="where" value="tab" />';
	echo "&nbsp;\n";
	if ($tab == 'general') { echo '<input type="submit" name="tab_general" value="General" class="btn btn-default active btn-sm" />'; }
	else { echo '<input type="submit" name="tab_general" value="General" class="btn btn-default btn-sm" />'; }
	echo "&nbsp;\n";
	if ($tab == 'questions') { echo '<input type="submit" name="tab_questions" value="Questions" class="btn btn-default active btn-sm" />'; }
	else { echo '<input type="submit" name="tab_questions" value="Questions" class="btn btn-default btn-sm" />'; }
	echo "&nbsp;\n";
	if ($tab == 'order') { echo '<input type="submit" name="tab_order" value="Order" class="btn btn-default active btn-sm" />'; }
	else { echo '<input type="submit" name="tab_order" value="Order" class="btn btn-default btn-sm" />'; }
	echo "&nbsp;\n";
	if ($tab == 'conditions') { echo '<input type="submit" name="tab_conditions" value="Conditions" class="btn btn-default active btn-sm" />'; }
	else { echo '<input type="submit" name="tab_conditions" value="Conditions" class="btn btn-default btn-sm" />'; }
	echo "&nbsp;\n";
	if ($tab == 'preview') { echo '<input type="submit" name="tab_preview" value="Preview" class="btn btn-default active btn-sm" />'; }
	else { echo '<input type="submit" name="tab_preview" value="Preview" class="btn btn-default btn-sm" />'; }
	echo "&nbsp;\n";
	if ($tab == 'finish') { echo '<input type="submit" name="tab_finish" value="Finish" class="btn btn-default active btn-sm" />'; }
	else { echo '<input type="submit" name="tab_finish" value="Finish" class="btn btn-default btn-sm" />'; }
	echo "&nbsp;\n";
	echo "</p>";
}

function displayAdminBack() {
	echo '<a class="btn btn-default pull-right" role="button" href="/admin/index.php?where=manage">Go back to Management Interface</a>';
}

function displayPageHeader() {
	global $self, $home, $public, $base;
	echo "<form method=\"post\" id=\"phpesp\" action=".$self.">\n";
	echo "<div class=\"container\">\n\n";
}

function displayPageFooter() {
	$user = $_SESSION['acl']['username'];
	$group = $_SESSION['acl']['pgroup'];
	$g = $group[0];
	if ($g) { $show = "<kbd>$user</kbd>/<kbd>$g</kbd>"; } 
	else { $show = "<kbd>$user</kbd>"; }
	if(!empty($_SESSION['acl']['username'])) { $signed = "Signed in as <i class=\"fa fa-user\"> $show </i>"; } 
	else { $signed = ""; }
	echo "</div> <!-- /container -->\n";
	echo "</form>\n";
	echo "<br /><br />\n\n";
	echo "<footer class=\"footer\">\n";
	echo "  <div class=\"container\">\n";
	echo "    <div class=\"text-muted pull-left\"><i class=\"fa fa-graduation-cap\"></i> Website developed by <abbr title=\"Phumin Chesdmethee (phumin@sawasdee.org)\">Phumin</abbr></div>\n";
	echo "    <div class=\"text-muted pull-right\">".$signed."</div>\n";
	echo "  </div>\n";
	echo "</footer>\n\n";
}

function displayFooter() {
	$jsfiles = array("js/jquery-2.2.1.js", "js/bootstrap.js");
	foreach ($jsfiles as $filename) {
		//$path = dirname(dirname(__FILE__)).'/js/'.$filename;
		echo '<script type="text/javascript" src="' . $filename . '"></script>'."\n";
 	}
	echo "<script type=\"text/javascript\">\n";
	echo "	var activateConfirmMsg=\"Warning! Once activated, this survey can no longer be edited. Any further changes must be done on a copy.\"\n";
	echo "	var cancelConfirmMsg=\"Warning! This survey has not been saved. Canceling now will remove any changes.\"\n";
	echo "	var mergeMsg=\"<h2>You must select at least two surveys before you can merge</h2>\"\n";
	echo "</script>\n\n";
	echo "</body>\n";
	echo "</html>\n\n";
	if ($_SESSION['acl']['superuser'] == 'Y') { include $_SERVER['DOCUMENT_ROOT'] . '/admin/include/debug.php'; }
}


?>
