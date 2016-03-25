<?php

$home = "http://www.siamsquare.org";
$public = $home."/public";
$self = $_SERVER['PHP_SELF'];
$base = $_SERVER['BASE_PAGE'];
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/include/lib/esphtml.forms.inc';
get_current_respondent($respondent);


function displayHeader($title, $scrollspy = NULL) {
  global $self, $home, $public, $base;
  header("Content-language: en");
  header("Content-type: text/html; charset=utf-8");
  echo "<!DOCTYPE html>\n";
  echo "<html>\n";
  echo "<head>\n";
  echo "  <meta charset=\"utf-8\">\n";
  echo "  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n";
  echo "  <title>Respondent Dashboard: $title</title>\n";
  $cssfiles = array("css/bootstrap.css", "css/font-awesome.css", "css/pe.css");
  foreach ($cssfiles as $filename) {
    echo "  <link href=\"$filename\" rel=\"stylesheet\" type=\"text/css\" />\n";
  }
  //if(!empty($ESPCONFIG['favicon'])) {
  //echo "  <link rel=\"shortcut icon\" href=\"$ESPCONFIG['favicon']\"\n";
  //}
  if (isset($_SERVER['BASE_PAGE'])) {
    echo "  <link rel=\"canonical\" href=\"$admin/$base\">\n";
  }
  $jsfiles = array("js/public.js");
  foreach ($jsfiles as $filename) {
    echo "  <script type=\"text/javascript\" src=\"$filename\"></script>\n";
  }
  echo "</head>\n";
  //if ($scrollspy) { 
  //  echo "  <style type=\"text/css\">\n";
  //  echo "  body { position: relative; padding-top: 20px; }\n";
  //  echo "  </style>\n\n";
  //  echo "  <script type=\"text/javascript\">\n";
  //  echo "  $(document).ready(function(){\n";
  //  echo "      $(\"body\").scrollspy({\n";
  //  echo "      target: \"#ssqscrollspy\",\n";
  //  echo "      offset: 20\n";
  //  echo "    }) \n";
  //  echo "  });\n";
  //  echo "  </script>\n\n";
  //  echo "<body data-spy=\"scroll\" data-target=\"#ssqscrollspy\" data-offset=\"20\">\n"; 
  //}
  //else { 
  //  echo "<body>\n"; 
  //}
  echo "<body>\n"; 
}

function displayNav() {
  global $self, $public, $respondent;
  echo "\n";
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
  if ($_SERVER['REQUEST_URI'] == "/public/") { $a = '<li class="active">'; } else { $a = '<li>'; }
  if ($_SERVER['REQUEST_URI'] == "/public/signup.php") { $b = '<li class="active">'; } else { $b = '<li>'; }
  if ($_SERVER['REQUEST_URI'] == "/public/contact.php") { $c = '<li class="active">'; } else { $c = '<li>'; }
  if ($_SERVER['REQUEST_URI'] == "/public/help.php") { $d = '<li class="active">'; } else { $d = '<li>'; }
  if(!empty($respondent['username'])) {
    echo "  </div> <!--/navbar-header -->\n";
    echo "  <div id=\"navbar\" class=\"navbar-collapse collapse\">\n";
    echo "    <ul class=\"nav navbar-nav navbar-right\">\n";
    echo "      $a<a href=\"$public\"><i class=\"fa fa-home fa-lg\"></i>&nbsp; Home</a></li>\n";
    //echo "      $b<a href=\"/public/signup.php\"><i class=\"fa fa-user fa-lg\"></i><i class=\"fa fa-plus\"></i>&nbsp; Sign-up</a></li>\n";
    echo "      $c<a href=\"/public/contact.php\"><i class=\"fa fa-envelope-o fa-lg\"></i>&nbsp; Contact</a></li>\n";
    echo "      $d<a href=\"/public/help.php\"><i class=\"fa fa-question fa-lg\"></i>&nbsp; Help</a></li>\n";
    echo "      <li><a href=\"$public/index.php?doLogout=1\"><i class=\"fa fa-sign-out fa-lg\"></i>&nbsp; Log out</a></li>\n";
    echo "    </ul>\n";
    echo "  </div> <!--/navbar-collapse -->\n";
    echo "</div>\n";
    echo "</nav>\n\n";
  } else {
    echo "  </div> <!--/navbar-header -->\n";
    echo "  <div id=\"navbar\" class=\"navbar-collapse collapse\">\n";
    echo "    <ul class=\"nav navbar-nav navbar-right\">\n";
    echo "      $a<a href=\"$public\"><i class=\"fa fa-home fa-lg\"></i>&nbsp; Home</a></li>\n";
    echo "      $b<a href=\"/public/signup.php\"><i class=\"fa fa-user fa-lg\"></i><i class=\"fa fa-plus\"></i>&nbsp; Sign-up</a></li>\n";
    echo "      $c<a href=\"/public/contact.php\"><i class=\"fa fa-envelope-o fa-lg\"></i>&nbsp; Contact</a></li>\n";
    echo "      $d<a href=\"/public/help.php\"><i class=\"fa fa-question fa-lg\"></i>&nbsp; Help</a></li>\n";
    //echo "      <li><a href=\"$public/index.php?doLogout=1\"><i class=\"fa fa-sign-out fa-lg\"></i>&nbsp; Log out</a></li>\n";
    echo "    </ul>\n";
    echo "  </div> <!--/navbar-collapse -->\n";
    echo "</div>\n";
    echo "</nav>\n";  
  }
}

//function paint_footer() {
//  displayFooter();
//}

function displayFooter() {
  global $respondent;
  if(!empty($respondent['username'])) { $signed = "Signed in as <i class=\"fa fa-user\"></i> <kbd>".$respondent['username']."</kbd>"; } 
  else { $signed = ""; }
  echo "</div> <!-- /container -->\n";
  //echo "</form>\n";
  echo "<br /><br />\n\n";
  echo "<footer class=\"footer\">\n";
  echo "  <div class=\"container\">\n";
  echo "    <div class=\"text-muted pull-left\"><i class=\"fa fa-graduation-cap\"></i> Website developed by <abbr title=\"Phumin Chesdmethee\">Phumin</abbr>: ";
  echo "    [<a href=\"https://fb.me/phumin\"><i class=\"fa fa-facebook-square\"></i></a>|";
  echo "    <a href=\"https://twitter.com/pephumin\"><i class=\"fa fa-twitter\"></i></a>|";
  echo "    <a href=\"mailto:phumin@sawasdee.org\"><i class=\"fa fa-envelope-o\"></i></a>|";
  echo "    <a href=\"sms:66-81-806-8899\"><i class=\"fa fa-mobile\"></i></a>]</div>\n";
  echo "    <div class=\"text-muted pull-right\">".$signed."</div>\n";
  echo "  </div>\n";
  echo "</footer>\n\n";
  $jsfiles = array("js/jquery.js", "js/bootstrap.js");
  foreach ($jsfiles as $filename) {
    //$path = dirname(dirname(__FILE__)).'/js/'.$filename;
    echo '<script type="text/javascript" src="' . $filename . '"></script>'."\n";
  }
  //echo "<script type=\"text/javascript\">\n";
  //echo "  var activateConfirmMsg=\"Warning! Once activated, this survey can no longer be edited. Any further changes must be done on a copy.\"\n";
  //echo "  var cancelConfirmMsg=\"Warning! This survey has not been saved. Canceling now will remove any changes.\"\n";
  //echo "  var mergeMsg=\"<h2>You must select at least two surveys before you can merge</h2>\"\n";
  //echo "</script>\n\n";
  echo "</body>\n";
  echo "</html>\n\n";
  //if ($_SESSION['acl']['superuser'] == 'Y') { include $_SERVER['DOCUMENT_ROOT'] . '/admin/include/debug.php'; }
  include $_SERVER['DOCUMENT_ROOT'] . '/admin/include/debug.php';
}


function handleLogin() {
  $handleLogin = (! is_session_authenticated() && isset($_REQUEST['doLogin']) && ! empty($_REQUEST['username']) && ! empty($_REQUEST['password']) ? true : false);
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
      $GLOBALS['errmsg'] = mkerror('Please contact an administrator: multi-realm');

    // otherwise, not recognized, throw error
    } else {
      $GLOBALS['errmsg'] = mkerror('Incorrect User ID or Password, or your account has been disabled/expired.');
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
  $showChangeProfile   = ($GLOBALS['ESPCONFIG']['dashboard_allow_change_profile'] && empty($_REQUEST['doChangeProfileCancel']) && is_session_authenticated() && isset($_REQUEST['doChangeProfile']) ? true : false);
  // are we also changing the password?
  $handleChangeProfile = ($showChangeProfile && get_current_respondent($respondent) && isset($_REQUEST['firstName']) && isset($_REQUEST['lastName']) && isset($_REQUEST['emailAddress']) ? true : false);

  // if changing, handle it
  if ($handleChangeProfile) {
    $ok = change_profile($respondent['username'], $respondent['realm'], $_REQUEST['firstName'], $_REQUEST['lastName'], $_REQUEST['emailAddress']);
    if ($ok) {
      $showChangeProfile = false;
      $GLOBALS['errmsg'] = mkerror('Your profile has been updated successfully');
    } else {
      $GLOBALS['errmsg'] = mkerror('Unable to change your password; contact an administrator');
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

    render_profile_change_form();
    displayFooter();
    exit;
  }
}

//  handleChangePassword()
//  Handle a password change button press

function handleChangePassword() {
  // are we in change password mode?
  $showChangePassword   = ($GLOBALS['ESPCONFIG']['dashboard_allow_change_password'] && empty($_REQUEST['doChangePasswordCancel']) && is_session_authenticated() && isset($_REQUEST['doChangePassword']) ? true : false);
  // are we also changing the password?
  $handleChangePassword = ($showChangePassword && get_current_respondent($respondent) && ! empty($_REQUEST['oldPassword']) && ! empty($_REQUEST['newPassword']) && ! empty($_REQUEST['newPasswordConfirm']) ? true : false);

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
        $GLOBALS['errmsg'] = mkerror('Your password has been changed successfully');
      } else {
        $GLOBALS['errmsg'] = mkerror('Unable to change your password; contact an administrator');
      }
    // if the old password authenticates but the confirmation doesn't match
    } else if ($isAuthenticated && ! $isMatch) {
      $GLOBALS['errmsg'] = mkerror('Passwords do not match; check your typing');
    // otherwise, bad original password, puke
    } else {
      $GLOBALS['errmsg'] = mkerror('Old password incorrect; check your typing');
    }
  }

  // if we're showing the change password form, do so
  if ($showChangePassword) {
    render_passwd_change_form();
    displayFooter();
    exit;
  }
}

function paint_non_authenticated() {
    paint_public_survey_list();
    render_login_form();
}

//  paint_login_panel()
//  Paint the login panel

//function paint_login_panel() {
//    //echo "<div class=\"container\">\n";
//    //echo "</div>\n";
//    //echo "</form>\n\n";
//    //echo "<div class=\"dashboardPanel\" id=\"my_login\">\n";
//    //echo "<h1>Login</h1>\n";
//    render_login_form();
//    //render_login_form($action = null, $usernameVar = 'username', $passwordVar = 'password', $loginButtonVar = 'doLogin', $_message = null);
//    //if (!empty($GLOBALS['ESPCONFIG']['signup_realm'])) { echo "<p><a href=\"signup.php\">Don't have an account? Sign up.</a></p>\n"; }
//    //if (!empty($GLOBALS['ESPCONFIG']['email_from_address'])) { echo "<p><a href=\"mailto:".$GLOBALS['ESPCONFIG']['email_from_name']."(".$GLOBALS['ESPCONFIG']['email_from_address'].")\">Need help? E-mail us.</a></p>\n"; }
//    //echo "</div>\n";
//}

//  paint_public_survey_list()
//  Paint a list of links to take the given surveys

function paint_public_survey_list() {
  // make sure we're configured to show this
  if (! $GLOBALS['ESPCONFIG']['dashboard_show_public_surveys']) { return; }

  // get the available public surveys
  get_survey_info($surveys, $_, $accessibility);
  foreach ($surveys as $sid => $survey) {
    if (isset($accessibility[$sid]['available']) && true === (bool)$accessibility[$sid]['available']) { continue; }
    unset($surveys[$sid]);
  }

  // spit them out
  if (0 < count($surveys)) {
    echo "<h2>Public surveys</h2>\n";
    echo "<p>If you have an account, please log in before taking these public surveys.</p>\n";
    echo "<ul>\n";
    foreach ($surveys as $survey) {
      printf('<li><a href="%s">%s</a></li>', survey_fetch_url_by_survey_name($survey['name']), $survey['title']);
    }
    echo "</ul>\n";
  }
}

// paint_authenticated()
// Paint the page for authenticated users

function paint_authenticated() {
  get_survey_info($surveys, $responses, $accessibility);
  partition_surveys($surveys, $responses, $accessibility, $current, $historical);
  paint_respondent_tools();
  //paint_welcome();
  paint_respondent_surveys($current);
  paint_respondent_history($historical);
}

//  paint_welcome()
//  Paint a friendly welcome message

//function paint_welcome() {
//  echo '<h2>Respondent dashboard</h2>';
//  $ok = get_current_respondent($respondent);
//  if ($ok) {
//    // spew a nice welcome message, if we know the person's name
//    if (! empty($respondent['fname'])) {
//      echo '<em>Welcome, ' . $respondent['fname'];
//      if (! empty($respondent['lname'])) {
//          echo ' ' . $respondent['lname'];
//      }
//      echo '.</em>  ';
//    }
//  }
//  // spew the time
//  printf(_('Right now, my watch shows %s.'), strftime(FORMAT_OUTPUT_DATE));
//}

//  paint_respondent_surveys()
//  Paint a panel of links to surveys available to the current respondent

//  paint_respondent_tools()
//  Paint a panel of tools available to this respondent

function paint_respondent_tools() {
  global $public, $user, $group, $respondent;
  $cfg =& $GLOBALS['ESPCONFIG'];
  $link = $public . '/index.php';
  $email = $GLOBALS['ESPCONFIG']['email_from_address'];
  //$tools  = array ("$link?doChangeProfile=1" => "Edit my profile", "$link?doChangePassword=1" => "Change my password", "$link?doLogout=1" => "Logout", "$public/help.php" => "Help", "$public/contact.php" => "Contact support",);
  //$time = printf(_('Right now, my watch shows %s.'), strftime(FORMAT_OUTPUT_DATE));
  echo "<h2>Dashboard <small>(User management interface)</small></h2>\n";
  echo "<br />\n\n";
  echo "<h3>Account management</h3>\n";
  echo "<div class=\"row\">\n";
  echo "  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n";
  echo "    <div class=\"panel panel-primary\">\n";
  //echo "      <div class=\"panel-heading\"><h4>User tools</h4></div>\n";
  echo "      <div class=\"panel-body list-group-item-info\">\n";
  echo "        <p><i class=\"fa fa-user fa-fw\"></i>&nbsp; Your login information:</p>\n";
  echo "        <ul>\n";
  echo "          <li><u>Name:</u> ".$respondent['fname']." ".$respondent['lname']."</li>\n";
  echo "          <li><u>Email:</u> ".$respondent['email']."</li>\n";
  echo "          <li><u>Group:</u> ".$respondent['realm']."</li>\n";
  if (($respondent['expiration']) == "0000-00-00 00:00:00") { echo "          <li><u>Account expiration:</u> No expiration</li>\n"; } 
  else { echo "          <li><u>Account expiration:</u> ".$respondent['expiration']."</li>\n"; }
  echo "        </ul>\n";
  echo "      </div>\n";
  //echo "      </div>\n";
  echo "      <div id=\"userAdmin\" class=\"list-group\">\n";
  echo "         <a class=\"list-group-item\" href=\"$link?doChangeProfile=1\"><i class=\"fa fa-cog fa-fw\"></i>&nbsp; Change your info</a>\n";
  echo "         <a class=\"list-group-item\" href=\"$link?doChangePassword=1\"><i class=\"fa fa-key fa-fw\"></i>&nbsp; Change your password</a>\n";
  echo "      </div>\n";
  echo "    </div>\n";
  echo "  </div>\n";
  echo "</div>\n";
  echo "<br />\n\n";

}

function paint_respondent_surveys($current) {
  //echo '<div class="dashboardPanel" id="my_surveys">';
  echo "<h3>Surveys participated</h3>\n";

  // make surveys into a list
  if (0 < count($current)) {
    echo "<table class=\"table table-hover\">\n";
    echo "  <tr class=\"active\">\n";
    echo "    <th>Project</th>\n";
    echo "    <th>Submission status</th>\n";
    echo "    <th>Last access</th>\n";
    echo "    <th>Availability</th>\n";
    echo "  </tr>\n";

    foreach ($current as $sid => $info) {
      list ($name, $status, $date, $avail) = $info;
      printf('<tr><td>%s</td><td>%s</td><td>%s</td><td>%s</td></tr>', $name, $status, $date, $avail);
    }
    echo "</table>\n";
  } else {
     echo "You do not have any surveys at this time.";
  }
  //echo '</div>';
  echo "<br />\n\n";
}

//  paint_respondent_history()
//  Paint a historical list of surveys this respondent has completed

function paint_respondent_history($historical) {
  //echo '<div class="dashboardPanel" id="my_history">';
  echo "<h3>History</h3>\n";

  // make surveys into a list
  if (0 < count($historical)) {
    echo "<table class=\"table table-hover\">\n";
    echo "  <tr class=\"active\">\n";
    echo "    <th>Project</th>\n";
    echo "    <th>Submission status</th>\n";
    echo "    <th>Last access</th>\n";
    echo "    <th>Availability</th>\n";
    echo "  </tr>\n";

    foreach ($historical as $sid => $info) {
      list ($name, $status, $date, $avail) = $info;
      printf('<tr><td>%s</td><td>%s</td><td>%s</td><td>%s</td></tr>', $name, $status, $date, $avail);
    }
    echo "</table>\n";
    } else {
       echo "You have no historical survey at this time.";
    }
    //echo '</div>';
    echo "<br />\n\n";
}

//  get_survey_info()
//  Get the surveys, the responses, and the accessibility of surveys for the current user

function get_survey_info(&$surveys, &$responses, &$accessibility) {
  // initialize return values
  $surveys       = array ();
  $responses     = array ();
  $accessibility = array ();

  // everybody gets the public surveys
  //esp_require_once('/lib/espsurvey');
  require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/include/lib/espsurvey.inc';
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

//  partition_surveys()
//  Divide the user's surveys into those that are active and those that aren't

function partition_surveys($surveys, $responses, $accessibility, &$current, &$historical) {
  foreach ($surveys as $sid => $survey) {
    // if the survey is available
    if (isset($accessibility[$sid]['available']) && true === (bool)$accessibility[$sid]['available']) {
      // get a link to the survey, its status, and the last access date
      $name = sprintf('<a href="%s">%s</a>', survey_fetch_url_by_survey_name($survey['name']), $survey['title']);
      $status = fetch_status($sid, $responses);
      $date = fetch_latest_submission_date($sid, $responses);
      $avail = fetch_availability($survey, $availability);

      // but, if the survey is not open, get rid of the link
      if (STATUS_OPEN !== $availability) { $name = $survey['title']; }

      $current[] = array ($name, $status, $date, $avail);

    // otherwise the survey is historical
    } else {
      $name   = $survey['title'];
      $status = fetch_status($sid, $responses);
      $date   = fetch_latest_submission_date($sid, $responses);
      $avail  = "Closed";
      $historical[] = array ($name, $status, $date, $avail);
    }
  }
}

//  fetch_status()
//  Given a set of responses and a survey ID, determine the status of those responses

function fetch_status($sid, $responses) {
  // get the status
  if (isset($responses[$sid])) {
    // there are responses
    if (isset($responses[$sid]['complete'])) { // only one response
      $status = ('Y' == $responses[$sid]['complete'] ? STATUS_FINISHED : STATUS_ALL_PARTIAL); 
    } else { // more than one response
      $status = STATUS_FINISHED;
      foreach ($responses[$sid] as $response) {
        if ('N' == $response['complete']) { $status = STATUS_SOME_PARTIAL; }
      }
    }
  } else {
      // no responses made, but since survey is available, this is an incomplete survey
      $status = STATUS_NOT_STARTED;
  }
  return $status;
}

//  fetch_latest_submission_date()
//  Given a set of responses and a survey ID, determine the latest submission date

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

//  fetch_availability()
//  Given a survey, determine its availability

function fetch_availability($survey, &$rc) {
  $rc = survey_open($survey['open_date'], $survey['close_date']);
  switch ($rc) {
    
  case STATUS_OPEN:
      return "Now taking submissions";
      break;

  case STATUS_CLOSED_TOO_EARLY:
      return "Not yet taking submissions";
      break;

  case STATUS_CLOSED_TOO_LATE:
      return "No longer taking submissions";
      break;

  default:
      assert('false; // unexpected case reached; code bug');
      return '';
  }
}

//  render_login_form()
//  Render a login form

function render_login_form($action = null, $usernameVar = 'username', $passwordVar = 'password', $loginButtonVar = 'doLogin', $_message = null) {
  global $public;
  $cfg =& $GLOBALS['ESPCONFIG'];
  if (empty($action)) { $action = $public . '/'; }

  $username = (isset($_REQUEST['username']) ? $_REQUEST['username'] : '');

  $str = "";
  if ($_message) { echo mkerror($_message); }

  echo "\n";
  echo "<form name=\"login\" id=\"login\" method=\"post\" class=\"form-horizontal\" action=\"$action\">\n";
  echo "  <div class=\"dashboardPanel\" id=\"login\">\n";
  echo "  <h2 class=\"form-signin-heading\">Respondent login</h2>\n";
  echo "  <br />\n";
  echo "    <div class=\"form-group\">\n";
  echo "      <label for=\"$usernameVar\" class=\"col-sm-3 control-label\">Username:</label>\n";
  echo "        <div class=\"col-sm-9\">\n";
  echo "        <input type=\"text\" name=\"$usernameVar\" class=\"form-control\" placeholder=\"Username\">\n";
  echo "        </div>\n";
  echo "     </div>\n";
  echo "     <div class=\"form-group\">\n";
  echo "       <label for=\"$passwordVar\" class=\"col-sm-3 control-label\">Password:</label>\n";
  echo "         <div class=\"col-sm-9\">\n";
  echo "         <input type=\"password\" name=\"$passwordVar\" class=\"form-control\" placeholder=\"Password\">\n";
  echo "       </div>\n";
  echo "     </div>\n";
  echo "     <div class=\"form-group\">\n";
  echo "       <div class=\"col-sm-offset-3 col-sm-9\">\n";
  echo "         <div class=\"checkbox\">\n";
  echo "           <label><input type=\"checkbox\" checked> Remember me</label>\n";
  echo "          </div>\n";
  echo "       </div>\n";
  echo "     </div>\n";
  echo "     <div class=\"form-group\">\n";
  echo "       <div class=\"col-sm-offset-3 col-sm-9\">\n";
  echo "         <button class=\"btn btn-lg btn-primary btn-block\" name=\"$loginButtonVar\" type=\"submit\">Sign in</button>\n";
  echo "       </div>\n";
  echo "     </div>\n";
  echo "  </div>\n";
  echo "</form>\n";
  echo "<br />\n";
  echo login_warning();

}

//  render_profile_change_form()
//  Render a profile change form

function render_profile_change_form ($action = null, $firstNameVar = 'firstName', $lastNameVar = 'lastName', $emailVar = 'emailAddress', $changeButtonVar = 'doChangeProfile', $cancelButtonVar = 'doChangeProfileCancel' ) {
  global $public, $respondent;
  $cfg =& $GLOBALS['ESPCONFIG'];
  if (empty($action)) { $action = $public . '/'; }

  $firstName = (isset($_REQUEST[$firstNameVar]) ? htmlentities($_REQUEST[$firstNameVar]) : '');
  $lastName = (isset($_REQUEST[$lastNameVar]) ? htmlentities($_REQUEST[$lastNameVar]) : '');
  $emailAddress = (isset($_REQUEST[$emailVar]) ? htmlentities($_REQUEST[$emailVar]) : '');

  echo "<h2>Changing your profile</h2>\n\n";
  echo "<br />\n\n";
  echo "<form class=\"form-horizontal\" method=\"post\" id=\"profile_change\" action=\"$action\">\n";
  echo "  <div class=\"form-group\">\n";
  echo "    <label class=\"col-sm-3 control-label\">Email</label>\n";
  echo "    <div class=\"col-sm-9\">\n";
  echo "      <input type=\"text\" class=\"form-control\" name=\"$emailVar\" placeholder=\"$emailAddress\" disabled>\n";
  echo "      <input type=\"hidden\" name=\"$emailVar\" value=\"$emailAddress\" />\n";
  echo "    </div>\n";
  echo "  </div>\n";
  echo "  <div class=\"form-group\">\n";
  echo "    <label class=\"col-sm-3 control-label\" for=\"$firstNameVar\">First name</label>\n";
  echo "    <div class=\"col-sm-9\">\n";
  echo "      <input type=\"text\" class=\"form-control\" name=\"$firstNameVar\" value=\"$firstName\">\n";
  echo "    </div>\n";
  echo "  </div>\n";
  echo "  <div class=\"form-group\">\n";
  echo "    <label class=\"col-sm-3 control-label\" for=\"$lastNameVar\">Last name</label>\n";
  echo "    <div class=\"col-sm-9\">\n";
  echo "      <input type=\"text\" class=\"form-control\" name=\"$lastNameVar\" value=\"$lastName\">\n";
  echo "    </div>\n";
  echo "  </div>\n";
  echo "  <div class=\"col-sm-offset-3 col-sm-9\">\n";
  echo "    <button type=\"submit\" class=\"btn btn-success\" name=\"$changeButtonVar\">Update</button> &nbsp;\n";
  echo "    <button type=\"submit\" class=\"btn btn-default\" name=\"$cancelButtonVar\">Cancel</button>\n";
  echo "  </div>\n";
  echo "</form>\n";

}

//  render_passwd_change_form()
//  Render a password change form

function render_passwd_change_form ($action = null, $oldPasswordVar = 'oldPassword', $newPasswordVar = 'newPassword', $newPasswordConfirmVar = 'newPasswordConfirm', $changeButtonVar = 'doChangePassword', $cancelButtonVar = 'doChangePasswordCancel') {
  global $public, $respondent;
  $cfg =& $GLOBALS['ESPCONFIG'];
  if (empty($action)) { $action = $public . '/'; }

  echo "<h2>Changing your password</h2>\n\n";
  echo "<br />\n\n";
  //echo "<div class=\"container\">\n";
  echo "<form class=\"form-horizontal\" method=\"post\" id=\"passwd_change\" action=\"$action\">\n";
  echo "  <div class=\"form-group\">\n";
  echo "    <label class=\"col-sm-3 control-label\">Username</label>\n";
  echo "    <div class=\"col-sm-9\">\n";
  echo "      <input type=\"text\" class=\"form-control\" name=\"username\" placeholder=\"".$respondent['username']."\" disabled>\n";
  //echo "      <input type=\"hidden\" name=\"username\" value=\"".$respondent['username']."\" />\n";
  echo "    </div>\n";
  echo "  </div>\n";
  echo "  <div class=\"form-group\">\n";
  echo "    <label class=\"col-sm-3 control-label\" for=\"$oldPasswordVar\">Old password</label>\n";
  echo "    <div class=\"col-sm-9\">\n";
  echo "      <input type=\"password\" class=\"form-control\" name=\"$oldPasswordVar\" id=\"$oldPasswordVar\" placeholder=\"Current password\">\n";
  echo "    </div>\n";
  echo "  </div>\n";
  echo "  <div class=\"form-group\">\n";
  echo "    <label class=\"col-sm-3 control-label\" for=\"$newPasswordVar\">New password</label>\n";
  echo "    <div class=\"col-sm-9\">\n";
  echo "      <input type=\"password\" class=\"form-control\" name=\"$newPasswordVar\" id=\"$newPasswordVar\" placeholder=\"New password\">\n";
  echo "    </div>\n";
  echo "  </div>\n";
  echo "  <div class=\"form-group\">\n";
  echo "    <label class=\"col-sm-3 control-label\" for=\"$newPasswordConfirmVar\">Confirm new password</label>\n";
  echo "    <div class=\"col-sm-9\">\n";
  echo "      <input type=\"password\" class=\"form-control\" name=\"$newPasswordConfirmVar\" id=\"$newPasswordConfirmVar\" placeholder=\"New password again\">\n";
  echo "    </div>\n";
  echo "  </div>\n";
  echo "  <div class=\"col-sm-offset-3 col-sm-9\">\n";
  //echo "    <input type=\"submit\" name=\"$changeButtonVar\" value=\"Change\" class=\"btn btn-success\" />\n";
  echo "    <button type=\"submit\" class=\"btn btn-success\" name=\"$changeButtonVar\">Change password</button> &nbsp;\n";
  echo "    <button type=\"submit\" class=\"btn btn-default\" name=\"$cancelButtonVar\">Cancel</button>\n";
  //echo "    <input type=\"submit\" name=\"$cancelButtonVar\" value=\"Cancel\" class=\"btn btn-default\" />\n";
  echo "  </div>\n";
  echo "</form>\n";
  //echo "</div>\n";

}

function respondent_signup() {
  global $home, $self;
  $page = $home.$self;
  $str = "";
  if ($_message) {
      echo mkerror($_message);
  }
  echo "<form class=\"form-horizontal\" method=\"post\" id=\"phpesp\" action=\"$page\">\n";
  echo "  <div class=\"dashboardPanel\" id=\"login\">\n";
  echo "  <h2 class=\"form-signin-heading\">Respondent sign up</h2>\n";
  echo "  <br />\n";
  echo "    <div class=\"form-group\">\n";
  echo "      <label for=\"fname\" class=\"col-sm-3 control-label\">First Name:</label>\n";
  echo "        <div class=\"col-sm-9\">\n";
  echo "        <input type=\"text\" name=\"fname\" class=\"form-control\" placeholder=\"John\">\n";
  echo "        </div>\n";
  echo "     </div>\n";
  echo "    <div class=\"form-group\">\n";
  echo "      <label for=\"lname\" class=\"col-sm-3 control-label\">Last Name:</label>\n";
  echo "        <div class=\"col-sm-9\">\n";
  echo "        <input type=\"text\" name=\"lname\" class=\"form-control\" placeholder=\"Doe\">\n";
  echo "        </div>\n";
  echo "     </div>\n";
  echo "    <div class=\"form-group\">\n";
  echo "      <label for=\"email\" class=\"col-sm-3 control-label\">Email:</label>\n";
  echo "        <div class=\"col-sm-9\">\n";
  echo "        <input type=\"text\" name=\"email\" class=\"form-control\" placeholder=\"email@company.com\">\n";
  echo "        </div>\n";
  echo "     </div>\n";
  echo "     <div class=\"form-group\">\n";
  echo "       <label for=\"password\" class=\"col-sm-3 control-label\">Password:</label>\n";
  echo "         <div class=\"col-sm-9\">\n";
  echo "         <input type=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\">\n";
  echo "       </div>\n";
  echo "     </div>\n";
  echo "     <div class=\"form-group\">\n";
  echo "       <label for=\"password\" class=\"col-sm-3 control-label\">Confirm new password:</label>\n";
  echo "         <div class=\"col-sm-9\">\n";
  echo "         <input type=\"password\" name=\"password2\" class=\"form-control\" placeholder=\"Password\">\n";
  echo "       </div>\n";
  echo "     </div>\n";
  echo "     <div class=\"form-group\">\n";
  echo "       <div class=\"col-sm-offset-3 col-sm-9\">\n";
  //echo "         <input type=\"hidden\" name=\"username\" class=\"form-control\" value=\"Password\">\n";
  echo "         <button type=\"submit\" class=\"btn btn-success\">Sign up a new user</button>\n";
  echo "       </div>\n";
  echo "     </div>\n";
  echo "  </div>\n";
  echo "</form>\n";
  echo "<br />\n";
  echo login_warning();

}

?>
