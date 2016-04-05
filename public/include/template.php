<?php

$home = "http://www.siamsquare.org";
$public = $home."/public";
$self = $_SERVER['PHP_SELF'];
$base = $_SERVER['BASE_PAGE'];
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/include/lib/esphtml.forms.inc';
//require_once $_SERVER['DOCUMENT_ROOT'] . '/public/funcs.inc';
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
  echo "  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n";
  echo "  <title>Respondent Dashboard: $title</title>\n";
  $cssfiles = array("css/bootstrap.css", "css/font-awesome.css", "css/typicons.css", "css/animate.css", "css/pe.css");
  foreach ($cssfiles as $filename) {
    echo "  <link href=\"$filename\" rel=\"stylesheet\" type=\"text/css\" />\n";
  }
  //if(!empty($ESPCONFIG['favicon'])) {
  //echo "  <link rel=\"shortcut icon\" href=\"$ESPCONFIG['favicon']\"\n";
  //}
  if (isset($_SERVER['BASE_PAGE'])) {
    echo "  <link rel=\"canonical\" href=\"$admin/$base\">\n";
  }
  //$jsfiles = array("js/pe.js");
  //foreach ($jsfiles as $filename) {
  //  echo "  <script type=\"text/javascript\" src=\"$filename\"></script>\n";
  //}
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

function displayNav_original() {
  global $home, $self, $public, $respondent;
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
    //echo "      <button type=\"button\" class=\"btn btn-default navbar-btn\">Sign-in</button>\n";
    //echo "      <button type=\"button\" class=\"btn btn-success navbar-btn\">Sign up</button>\n";
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

function displayNav() {
  global $home, $self, $public, $respondent;
  echo "<nav class=\"navbar navbar-default\" role=\"navigation\">\n";
  echo "  <div class=\"container\">\n";
  echo "    <div class=\"navbar-header\">\n";
  echo "      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#ssq-navbar\">\n";
  echo "      <span class=\"sr-only\">Toggle navigation</span>\n";
  echo "      <span class=\"icon-bar\"></span>\n";
  echo "      <span class=\"icon-bar\"></span>\n";
  echo "      <span class=\"icon-bar\"></span>\n";
  echo "      </button>\n";
  echo "      <a class=\"navbar-brand\" href=\"$public\">SiamSquare <small>[Respondent Zone]</small></a>\n";
  echo "   </div>\n";
  //echo "   <!-- Collect the nav links, forms, and other content for toggling -->\n";
  echo "   <div class=\"collapse navbar-collapse\" id=\"ssq-navbar\">\n";
  echo "      <ul class=\"nav navbar-nav\">\n";
  //echo "         <li><a href=\"/public/contact.php\">Contact us</a></li>\n";
  echo "         <li class=\"dropdown\">\n";
  echo "            <a href=\"/\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Pages <b class=\"caret\"></b></a>\n";
  echo "            <ul class=\"dropdown-menu\">\n";
  echo "               <li><a href=\"/public/contact.php\">Contact us</a></li>\n";
  echo "               <li><a href=\"/public/help.php\">Help</a></li>\n";
  echo "               <li class=\"divider\"></li>\n";
  echo "               <li><a href=\"http://www.jquery2dotnet.com\">Separated link</a></li>\n";
  echo "               <li class=\"divider\"></li>\n";
  echo "               <li><a href=\"http://www.jquery2dotnet.com\">One more separated link</a></li>\n";
  echo "            </ul>\n";
  echo "         </li>\n";
  echo "         <li class=\"active\"><a href=\"$home\"><i class=\"fa fa-hand-o-left\"></i> Back</a></li>\n";
  echo "      </ul>\n";
  //echo "      <form class=\"navbar-form navbar-left\" role=\"search\">\n";
  //echo "         <div class=\"form-group\">\n";
  //echo "            <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n";
  //echo "         </div>\n";
  //echo "         <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n";
  //echo "      </form>\n";
  echo "      <ul class=\"nav navbar-nav navbar-right\">\n";
  //echo "         $b<li><a href=\"/public/signup.php\"><i class=\"fa fa-user fa-lg\"></i><i class=\"fa fa-plus\"></i>&nbsp; Sign Up</a></li>\n";
  echo "         <li><button type=\"button\" class=\"btn btn-success navbar-btn\">Sign in</button></li>\n";
  //echo "         <li><button type=\"button\" class=\"btn btn-success navbar-btn\">Sign in</button></li>\n";
  //echo "         <li><a href=\"#\" class=\"btn btn-default navbar-btn\">Sign in</a></li>\n";
  //echo "         <li><a href=\"/public/signup.php\"><i class=\"fa fa-user-plus\"></i>&nbsp; Sign Up</a></li>\n";
  echo "         <li class=\"dropdown\">\n";
  echo "            <a href=\"http://www.jquery2dotnet.com\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Sign in <span class=\"caret\"></span></a>\n";
  echo "            <ul class=\"dropdown-menu\" style=\"padding: 15px;min-width: 250px;\">\n";
  echo "               <li>\n";
  echo "                  <div class=\"row\">\n";
  echo "                     <div class=\"col-md-12\">\n";
  echo "                        <form class=\"form\" role=\"form\" method=\"post\" action=\"login\" accept-charset=\"utf-8\" id=\"login-nav\">\n";
  //echo "                           <div class=\"form-group\">\n";
  //echo "                              <label class=\"sr-only\" for=\"exampleInputEmail2\">Email address</label>\n";
  //echo "                              <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail2\" placeholder=\"Email address\" required>\n";
  //echo "                           </div>\n";
  //echo "                           <div class=\"form-group\">\n";
  //echo "                              <label class=\"sr-only\" for=\"exampleInputPassword2\">Password</label>\n";
  //echo "                              <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword2\" placeholder=\"Password\" required>\n";
  //echo "                           </div>\n";
  echo "                        <div class=\"input-group margin-bottom-sm\">\n";
  echo "                          <span class=\"input-group-addon\"><i class=\"fa fa-envelope-o fa-fw\"></i></span>\n";
  echo "                          <input type=\"text\" name=\"username\" class=\"form-control\" placeholder=\"email@company.com\">\n";
  echo "                        </div>\n";
  echo "                        <div class=\"input-group\">\n";
  echo "                          <span class=\"input-group-addon\"><i class=\"fa fa-key fa-fw\"></i></span>\n";
  echo "                          <input type=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\">\n";
  echo "                        </div>\n";
  echo "                           <div class=\"checkbox\">\n";
  echo "                              <label>\n";
  echo "                              <input type=\"checkbox\"> Remember me\n";
  echo "                              </label>\n";
  echo "                           </div>\n";
  echo "                           <div class=\"form-group\">\n";
  echo "                              <button type=\"submit\" class=\"btn btn-success btn-block\">Sign in</button>\n";
  echo "                           </div>\n";
  echo "                        </form>\n";
  echo "                     </div>\n";
  echo "                  </div>\n";
  echo "               </li>\n";
  echo "               <li class=\"divider\"></li>\n";
  echo "               <li>\n";
  echo "                  <input class=\"btn btn-danger btn-block\" type=\"button\" id=\"sign-in-google\" value=\"Sign In with Google\" disabled>\n";
  echo "                  <input class=\"btn btn-danger btn-block\" type=\"button\" id=\"sign-in-twitter\" value=\"Sign In with Twitter\" disabled>\n";
  echo "               </li>\n";
  echo "            </ul>\n";
  echo "         </li>\n";
  echo "      </ul>\n";
  echo "   </div>\n";
  echo "  </div>\n";
  echo "</nav>\n";  
}

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
  $jsfiles = array("js/jquery.js", "js/bootstrap.js", "js/pe.js");
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
    } 
    elseif ($isAuthenticated && 2 <= $realmsCnt) { $GLOBALS['errmsg'] = mkerror('Please contact an administrator: multi-realm'); } 
    else { $GLOBALS['errmsg'] = mkerror('Incorrect User ID or Password, or your account has been disabled/expired.'); }
  }
}


function handleLogout() {
  $handleLogout = (isset($_REQUEST['doLogout']) && is_session_authenticated() ? true : false);
  if ($handleLogout) { set_session_authentication(false); }
}


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
    } 
    else { $GLOBALS['errmsg'] = mkerror('Unable to change your password; contact an administrator'); }
  }

  // if we're showing the change profile form, do so
  if ($showChangeProfile) {
    if (empty($_REQUEST['firstName'])) { $_REQUEST['firstName'] = $respondent['fname']; }
    if (empty($_REQUEST['lastName'])) { $_REQUEST['lastName'] = $respondent['lname']; }
    if (empty($_REQUEST['emailAddress'])) { $_REQUEST['emailAddress'] = $respondent['email']; }
    render_profile_change_form();
    displayFooter();
    exit;
  }
}


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
      } else { $GLOBALS['errmsg'] = mkerror('Unable to change your password; contact an administrator'); }
    // if the old password authenticates but the confirmation doesn't match
    } elseif ($isAuthenticated && ! $isMatch) { $GLOBALS['errmsg'] = mkerror('Passwords do not match; check your typing'); } 
    else { $GLOBALS['errmsg'] = mkerror('Old password incorrect; check your typing'); }
  }

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


function paint_public_survey_list() {
  if (! $GLOBALS['ESPCONFIG']['dashboard_show_public_surveys']) { return; }
  get_survey_info($surveys, $_, $accessibility);
  foreach ($surveys as $sid => $survey) {
    if (isset($accessibility[$sid]['available']) && true === (bool)$accessibility[$sid]['available']) { continue; }
    unset($surveys[$sid]);
  }

  // spit them out
  if (0 < count($surveys)) {
    echo "<h2>Public surveys</h2>\n";
    echo "<br />\n";
    echo "<p>Below is a list of the current available surveys. Please complete these surveys.</p>\n";
    echo "<p>If you are a registered member, make sure you sign in before taking these public surveys in order to get the full benefits.</p>\n";
    echo "<br />\n";
    //echo "<ul>\n";
    foreach ($surveys as $survey) {
      //printf('<li><a href="%s">%s</a></li>', survey_fetch_url_by_survey_name($survey['name']), $survey['title']);
      printf('<a href="%s" class="btn btn-info btn-lg" role="button"><i class="fa fa-flag"></i> %s</a> &nbsp;', survey_fetch_url_by_survey_name($survey['name']), $survey['title']);
    }
    //echo "</ul>\n";
    echo "<br />\n";
  }
}


function paint_authenticated() {
  get_survey_info($surveys, $responses, $accessibility);
  partition_surveys($surveys, $responses, $accessibility, $current, $historical);
  paint_respondent_tools();
  paint_respondent_surveys($current);
  paint_respondent_history($historical);
}


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
  echo "<h3>Surveys participated</h3>\n";
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
  } 
  else { echo "You do not have any surveys at this time."; }
  echo "<br />\n\n";
}


function paint_respondent_history($historical) {
  echo "<h3>History</h3>\n";
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
    }
    else { echo "You have no historical survey at this time."; }
    echo "<br />\n\n";
}


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


function fetch_status($sid, $responses) {
  // get the status
  if (isset($responses[$sid])) {
    // there are responses
    if (isset($responses[$sid]['complete'])) { // only one response
      $status = ('Y' == $responses[$sid]['complete'] ? STATUS_FINISHED : STATUS_ALL_PARTIAL); 
    } else { // more than one response
      $status = STATUS_FINISHED;
      foreach ($responses[$sid] as $response) { if ('N' == $response['complete']) { $status = STATUS_SOME_PARTIAL; } }
    }
  }
  else { $status = STATUS_NOT_STARTED; }
  return $status;
}


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
    if (-1 !== $datets) { $date = strftime(FORMAT_OUTPUT_DATE, $datets); }
  } 
  else { $date = ''; }
  return $date;
}


function fetch_availability($survey, &$rc) {
  $rc = survey_open($survey['open_date'], $survey['close_date']);
  switch ($rc) {
    case STATUS_OPEN: return "Now taking submissions"; break;
    case STATUS_CLOSED_TOO_EARLY: return "Not yet taking submissions"; break;
    case STATUS_CLOSED_TOO_LATE: return "No longer taking submissions"; break;
    default: assert('false; // unexpected case reached; code bug'); return '';
  }
}


function render_login_form($action = null, $usernameVar = 'username', $passwordVar = 'password', $loginButtonVar = 'doLogin', $_message = null) {
  global $public;
  $cfg =& $GLOBALS['ESPCONFIG'];
  if (empty($action)) { $action = $public . '/'; }
  $username = (isset($_REQUEST['username']) ? $_REQUEST['username'] : '');
  $str = "";
  if ($_message) { echo mkerror($_message); }
  echo "\n";
  echo "<form name=\"login\" id=\"login\" method=\"post\" class=\"form-horizontal\" action=\"$action\">\n";
  echo "  <h2 class=\"form-signin-heading\">Respondent login</h2>\n";
  echo "  <br />\n";
  echo "  <p>This section is reserved only for our registered members who are willing to spend some of their spare time with our surveys (both public or specific to some target groups). Within this section you will be able to access to a highly confidential data such as questionnaire design, data collected from respondents, reports, etc. We carefully design our system to ensure such high important data is kept separately for different users or user groups.</p>\n";
  echo "  <p>Despite the registration processs can be done by yourself, please feel free to contact us should you need any support for accessing this section.</p>\n";
  echo "  <br />\n";
  echo "    <div class=\"form-group\">\n";
  echo "      <label for=\"$usernameVar\" class=\"col-sm-3 control-label\">Email (login):</label>\n";
  echo "        <div class=\"col-sm-9\">\n";
  echo "        <input type=\"text\" name=\"$usernameVar\" class=\"form-control\" placeholder=\"email@company.com\">\n";
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
  echo "         <button class=\"btn btn-success\" name=\"$loginButtonVar\" type=\"submit\">Sign in</button>\n";
  echo "       </div>\n";
  echo "     </div>\n";
  echo "</form>\n";
  echo "<br />\n";
  echo login_warning();
}

function render_login_form_short($action = null, $usernameVar = 'username', $passwordVar = 'password', $loginButtonVar = 'doLogin', $_message = null) {
  global $public;
  $cfg =& $GLOBALS['ESPCONFIG'];
  if (empty($action)) { $action = $public . '/'; }
  $username = (isset($_REQUEST['username']) ? $_REQUEST['username'] : '');
  $str = "";
  if ($_message) { echo mkerror($_message); }
  echo "\n";
  echo "<form name=\"login\" id=\"login\" method=\"post\" class=\"form-horizontal\" action=\"$action\">\n";
  echo "  <h2 class=\"form-signin-heading\">Respondent login</h2>\n";
  echo "  <br />\n";
  echo "  <p>This section is reserved only for our registered members who are willing to spend some of their spare time with our surveys (both public or specific to some target groups). Within this section you will be able to access to a highly confidential data such as questionnaire design, data collected from respondents, reports, etc. We carefully design our system to ensure such high important data is kept separately for different users or user groups.</p>\n";
  echo "  <p>Despite the registration processs can be done by yourself, please feel free to contact us should you need any support for accessing this section.</p>\n";
  echo "  <br />\n";
  echo "    <div class=\"input-group\">\n";
  echo "      <span class=\"input-group-addon\"><i class=\"fa fa-envelope fa-fw\"></i></span>\n";
  echo "      <input class=\"form-control\" type=\"text\" placeholder=\"Email address\">\n";
  echo "    </div>\n";
  echo "    <br />\n";
  echo "    <div class=\"input-group\">\n";
  echo "      <span class=\"input-group-addon\"><i class=\"fa fa-key fa-fw\"></i></span>\n";
  echo "      <input class=\"form-control\" type=\"password\" placeholder=\"Password\">\n";
  echo "    </div>\n";
  echo "</form>\n";
  echo "<br />\n";
  echo login_warning();
}


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
  echo "    <label class=\"col-sm-3 control-label\">Email (login): </label>\n";
  echo "    <div class=\"col-sm-9\">\n";
  echo "      <input type=\"text\" class=\"form-control\" name=\"$emailVar\" placeholder=\"$emailAddress\" disabled>\n";
  echo "      <input type=\"hidden\" name=\"$emailVar\" value=\"$emailAddress\" />\n";
  echo "    </div>\n";
  echo "  </div>\n";
  echo "  <div class=\"form-group\">\n";
  echo "    <label class=\"col-sm-3 control-label\" for=\"$firstNameVar\">First name:</label>\n";
  echo "    <div class=\"col-sm-9\">\n";
  echo "      <input type=\"text\" class=\"form-control\" name=\"$firstNameVar\" value=\"$firstName\">\n";
  echo "    </div>\n";
  echo "  </div>\n";
  echo "  <div class=\"form-group\">\n";
  echo "    <label class=\"col-sm-3 control-label\" for=\"$lastNameVar\">Last name:</label>\n";
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


function render_passwd_change_form ($action = null, $oldPasswordVar = 'oldPassword', $newPasswordVar = 'newPassword', $newPasswordConfirmVar = 'newPasswordConfirm', $changeButtonVar = 'doChangePassword', $cancelButtonVar = 'doChangePasswordCancel') {
  global $public, $respondent;
  $cfg =& $GLOBALS['ESPCONFIG'];
  if (empty($action)) { $action = $public . '/'; }

  echo "<h2>Changing your password</h2>\n\n";
  echo "<br />\n\n";
  echo "<form class=\"form-horizontal\" method=\"post\" id=\"passwd_change\" action=\"$action\">\n";
  echo "  <div class=\"form-group\">\n";
  echo "    <label class=\"col-sm-3 control-label\">Username</label>\n";
  echo "    <div class=\"col-sm-9\">\n";
  echo "      <input type=\"text\" class=\"form-control\" name=\"username\" placeholder=\"".$respondent['username']."\" disabled>\n";
  //echo "      <input type=\"hidden\" name=\"username\" value=\"".$respondent['username']."\" />\n";
  echo "    </div>\n";
  echo "  </div>\n";
  echo "  <div class=\"form-group\">\n";
  echo "    <label class=\"col-sm-3 control-label\" for=\"$oldPasswordVar\">Old password: <span class=\"label label-danger\">required</span></label>\n";
  echo "    <div class=\"col-sm-9\">\n";
  echo "      <input type=\"password\" class=\"form-control\" name=\"$oldPasswordVar\" id=\"$oldPasswordVar\" placeholder=\"Current password\">\n";
  echo "    </div>\n";
  echo "  </div>\n";
  echo "  <div class=\"form-group\">\n";
  echo "    <label class=\"col-sm-3 control-label\" for=\"$newPasswordVar\">New password: <span class=\"label label-danger\">required</span></label>\n";
  echo "    <div class=\"col-sm-9\">\n";
  echo "      <input type=\"password\" class=\"form-control\" name=\"$newPasswordVar\" id=\"$newPasswordVar\" placeholder=\"New password\">\n";
  echo "    </div>\n";
  echo "  </div>\n";
  echo "  <div class=\"form-group\">\n";
  echo "    <label class=\"col-sm-3 control-label\" for=\"$newPasswordConfirmVar\">Confirm new password: <span class=\"label label-danger\">required</span></label>\n";
  echo "    <div class=\"col-sm-9\">\n";
  echo "      <input type=\"password\" class=\"form-control\" name=\"$newPasswordConfirmVar\" id=\"$newPasswordConfirmVar\" placeholder=\"New password again\">\n";
  echo "    </div>\n";
  echo "  </div>\n";
  echo "  <div class=\"col-sm-offset-3 col-sm-9\">\n";
  echo "    <button type=\"submit\" class=\"btn btn-success\" name=\"$changeButtonVar\">Change password</button> &nbsp;\n";
  echo "    <button type=\"submit\" class=\"btn btn-default\" name=\"$cancelButtonVar\">Cancel</button>\n";
  echo "  </div>\n";
  echo "</form>\n";
}

function respondent_signup() {
  global $home, $self;
  $page = $home.$self;
  $str = "";
  if ($_message) { echo mkerror($_message); }

  echo "<form class=\"form-horizontal\" method=\"post\" id=\"phpesp\" action=\"$page\">\n";
  echo "  <div class=\"dashboardPanel\" id=\"login\">\n";
  echo "  <h2 class=\"form-signin-heading\">New account sign up</h2>\n";
  echo "  <br />\n";
  echo "  <p>Sign up for free. What you have to do is to spend 2 minutes completing this page and that's it!</p>\n";
  echo "  <p>All registered members will be automatically enrolled to our reward system (click for more info).</p>\n";
  echo "  <br /><br />\n";
  echo "    <div class=\"form-group\">\n";
  echo "      <label for=\"email\" class=\"col-sm-3 control-label\">Email (login): <span class=\"label label-danger\">required</span></label>\n";
  echo "        <div class=\"col-sm-9\">\n";
  echo "        <input type=\"text\" name=\"email\" class=\"form-control\" placeholder=\"email@company.com\">\n";
  echo "        </div>\n";
  echo "     </div>\n";
  echo "     <div class=\"form-group\">\n";
  echo "       <label for=\"password\" class=\"col-sm-3 control-label\">Password: <span class=\"label label-danger\">required</span></label>\n";
  echo "         <div class=\"col-sm-9\">\n";
  echo "         <input type=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\">\n";
  echo "       </div>\n";
  echo "     </div>\n";
  echo "     <div class=\"form-group\">\n";
  echo "       <label for=\"password\" class=\"col-sm-3 control-label\">Confirm password: <span class=\"label label-danger\">required</span></label>\n";
  echo "         <div class=\"col-sm-9\">\n";
  echo "         <input type=\"password\" name=\"password2\" class=\"form-control\" placeholder=\"Password again\">\n";
  echo "       </div>\n";
  echo "     </div>\n";
  echo "    <div class=\"form-group\">\n";
  echo "      <label for=\"fname\" class=\"col-sm-3 control-label\">First name: <span class=\"label label-danger\">required</span></label>\n";
  echo "        <div class=\"col-sm-9\">\n";
  echo "        <input type=\"text\" name=\"fname\" class=\"form-control\" placeholder=\"John\">\n";
  echo "        </div>\n";
  echo "     </div>\n";
  echo "    <div class=\"form-group\">\n";
  echo "      <label for=\"lname\" class=\"col-sm-3 control-label\">Last name: <span class=\"label label-danger\">required</span></label>\n";
  echo "        <div class=\"col-sm-9\">\n";
  echo "        <input type=\"text\" name=\"lname\" class=\"form-control\" placeholder=\"Doe\">\n";
  echo "        </div>\n";
  echo "     </div>\n";
  echo "     <div class=\"form-group\">\n";
  echo "       <div class=\"col-sm-offset-3 col-sm-9\">\n";
  echo "         <input type=\"submit\" value=\"Sign up\" class=\"btn btn-success\"></input>\n";
  echo "       </div>\n";
  echo "     </div>\n";
  echo "  </div>\n";
  echo "</form>\n";
  echo "<br />\n";
  echo login_warning();

}

?>
