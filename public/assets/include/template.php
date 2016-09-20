<?php

function logo() {
  echo "<span class=\"logo1\"><i class=\"pe-logo\"></i></span> <span class=\"logo2\">pe</span><span class=\"logo3\">binary</span>";
}

function pageHeader($title) {
  $home = "http://www.siamsquare.org/";
  $public = "http://www.siamsquare.org/public/";
    // $user = $_SESSION['acl']['username'];
    // $group = $_SESSION['acl']['pgroup'];
    // $g = $group[0];
    // if ($g) { $show = "<i class=\"pe-street-view pe-fw\"></i> <kbd>$user</kbd> <i class=\"pe-building pe-fw\"></i> <kbd>$g</kbd>"; } else { $show = "<i class=\"pe-street-view pe-fw\"></i> <kbd>$user</kbd>"; }
    // if(!empty($_SESSION['acl']['username'])) { $signed = "Logged in as $show"; } else { $signed = "<i class=\"pe-exclamation-triangle pe-fw\"></i> Authorised login only"; }
  header("Content-language: en");
  header("Content-type: text/html; charset=utf-8");
?>
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="handheldfriendly" content="true">
  <meta name="mobileoptimized" content="240">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">
  <title><?php echo $title; ?></title>
  <link rel="stylesheet" type="text/css" href="assets/css/main.css">
  <link rel="shortcut icon" type="image/x-icon" href="assets/icons/favicon.ico">
  <link rel="apple-touch-icon" sizes="57x57" href="assets/icons/apple-icon-57x57.png">
  <link rel="apple-touch-icon" sizes="60x60" href="assets/icons/apple-icon-60x60.png">
  <link rel="apple-touch-icon" sizes="72x72" href="assets/icons/apple-icon-72x72.png">
  <link rel="apple-touch-icon" sizes="76x76" href="assets/icons/apple-icon-76x76.png">
  <link rel="apple-touch-icon" sizes="114x114" href="assets/icons/apple-icon-114x114.png">
  <link rel="apple-touch-icon" sizes="120x120" href="assets/icons/apple-icon-120x120.png">
  <link rel="apple-touch-icon" sizes="144x144" href="assets/icons/apple-icon-144x144.png">
  <link rel="apple-touch-icon" sizes="152x152" href="assets/icons/apple-icon-152x152.png">
  <link rel="apple-touch-icon" sizes="180x180" href="assets/icons/apple-icon-180x180.png">
  <link rel="icon" type="image/png" sizes="192x192"  href="assets/icons/android-icon-192x192.png">
  <link rel="icon" type="image/png" sizes="32x32" href="assets/icons/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="96x96" href="assets/icons/favicon-96x96.png">
  <link rel="icon" type="image/png" sizes="16x16" href="assets/icons/favicon-16x16.png">
  <link rel="manifest" href="assets/icons/manifest.json">
  <meta name="msapplication-TileColor" content="#FFFFFF">
  <meta name="msapplication-TileImage" content="assets/icons/ms-icon-144x144.png">
  <meta name="theme-color" content="#FFFFFF">
</head>
<body>
<header>
  <div class="row">
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 header-1">
      <div class="container">
        <a href="https://www.pebinary.net" class="btn btn-info btn-xs"><i class="pe-book pe-fw"></i> NEED HELP?</a>
      </div>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 header-2">
      <div class="container">
        <h1><a href="<?php echo $public; ?>" title="PE BINARY CO., LTD."><?php logo(); ?></a> <span class="sub-brand">Respondent</span></h1>
        <p class="description">A market research company specialised in mobile survey</p>
        <p class="thai-name"><i>บริษัท พีอี ไบนารี่ จำกัด</i></p>
      </div>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 header-3">
    <?php pageNav(); ?>
    </div>
  </div>
</header>
<main class="container">
<?php
}

function dFoot($message) {
?>
<script>
  function windowOpener(title,msg) {
    msgWindow = window.open("","displayWindow","menubar=no,alwaysRaised=yes,dependent=yes,width=600,height=500,scrollbars=yes,resizable=yes");
    msgWindow.document.write("<html><head><title>"+title+"</title></head>");
    msgWindow.document.write("<body>"+msg+"</body></html>");
  }
  function debugWindow () {
    title="Debug Window";
    msg="<?php echo(addcslashes($message, "\0..\31\\\"")); ?>";
    windowOpener(title, msg);
  }
</script>
<?php
}

function pageFooter($notes = null) {
?>
</main>
<footer>
  <div class="row">
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 footer-1">
      <div class="container">
        <p class="text-muted"></p>
      </div>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 footer-2">
      <div class="container">
        <i class="pe-copyright"></i> Copyright 2016&nbsp;
        <a href="http://www.pebinary.com" class="footerlogo" title="PE BINARY CO., LTD."><?php logo(); ?></a>All rights reserved.<br>
        <nav class="footer">
          <ul class="list-inline" itemscope itemtype="http://schema.org/SiteNavigationElement">
            <li><a href="http://www.pebinary.com/about/privacy.html" title="Privacy policy" itemprop="url"><i class="pe-lock"></i> <span class="hidden-md hidden-lg" itemprop="name">Privacy</span><span class="hidden-xs hidden-sm" itemprop="name">Privacy policy</span></a>&nbsp;</li>
            <li><a href="http://www.pebinary.com/about/tos.html" title="Terms of services" itemprop="url"><i class="pe-gavel"></i> <span class="hidden-md hidden-lg" itemprop="name">TOS</span><span class="hidden-xs hidden-sm" itemprop="name">Terms of services</span></a>&nbsp;</li>
            <li><a href="http://www.pebinary.com/about/terms.html" title="Terms &amp; conditions" itemprop="url"><i class="pe-balance-scale"></i> <span class="hidden-md hidden-lg" itemprop="name">Terms</span><span class="hidden-xs hidden-sm" itemprop="name">Terms &amp; conditions</span></a>&nbsp;</li>
            <li><a href="http://www.pebinary.com/" title="Visit our company website" itemprop="url"><i class="pe-arrow-circle-left"></i> <span class="hidden-md hidden-lg" itemprop="name">Our company</span><span class="hidden-xs hidden-sm" itemprop="name">Visit our company website</span></a>&nbsp;</li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 footer-3">
      <div class="container">
        <a class="btn btn-info btn-xs" href="http://www.bootlint.com/?url=http://www.siamsquare.org<?php echo $_SERVER['PHP_SELF']; ?>" target="_blank" role="button">bootlint</a>
<?php include_once $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/debug.inc'; ?>
      </div>
    </div>
  </div>
</footer>
<div class="scroll-to-top"><i class="pe-arrow-up pe-lg"></i></div>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-82554411-3', 'auto');
  ga('send', 'pageview');
</script>
<script type="text/javascript" src="assets/js/jquery-2.1.4.min.js"></script>
<script type="text/javascript" src="assets/js/bootstrap.js"></script>
<script type="text/javascript" src="assets/js/anchor.js"></script>
<script type="text/javascript" src="assets/js/notification.js"></script>
<script type="text/javascript" src="assets/js/tops.js"></script>
<script type="text/javascript" src="assets/js/functions.js"></script>
<script type="text/javascript">
  var activateConfirmMsg = "Warning! Once activated, this survey can no longer be edited. Any further changes must be done on a copy."
  var cancelConfirmMsg = "Warning! This survey has not been saved. Canceling now will remove any changes."
  var mergeMsg = "<h2>You must select at least two surveys before you can merge</h2>"
</script>
<?php dFoot($str); ?>
<?php if ($notes) { notify($notes); } ?>
</body>
</html>
<?php
}

function notify($messages) {
?>
<script type="text/javascript">
  function notifyBox(title, text, image) {
    Notification({
        title: title,
        text: text,
        image: image,
        inAnimation: "bounce",
        outAnimation: "zoomOut",
        position: 2
    });
  }
  function delayNext(title, text, image) {
    $(this).delay(2000).queue(function() {
      notifyBox(title, text, image);
      $(this).dequeue();
    });
  }
  $(document).ready(function() {
    var obj = JSON.parse ('<?php echo json_encode($messages) ?>');
     for(var i=0; i<obj.length; i++) {
       if (i == 0) {
         // show the first notification
         notifyBox(obj[i].title, obj[i].text, obj[i].image);
       } else {
         // show the second one with 2 seconds delay
         delayNext(obj[i].title, obj[i].text, obj[i].image);
       }
     }
    });
</script>
<?php
}

function pageNav() {
  $home = "http://www.siamsquare.org/";
  $public = "http://www.siamsquare.org/public/";
  echo "<nav class=\"navbar navbar-default\" role=\"navigation\">\n";
  echo "  <div class=\"container\">\n";
  echo "    <div class=\"navbar-header\">\n";
  echo "      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#ssq-navbar\">\n";
  echo "      <span class=\"sr-only\">Toggle navigation</span>\n";
  echo "      <span class=\"icon-bar\"></span>\n";
  echo "      <span class=\"icon-bar\"></span>\n";
  echo "      <span class=\"icon-bar\"></span>\n";
  echo "      </button>\n";
  echo "      <a class=\"navbar-brand\" href=\"$public\">";
  logo();
  echo "</a>\n";
  echo "   </div>\n";
  echo "   <div class=\"collapse navbar-collapse\" id=\"ssq-navbar\">\n";
  echo "      <ul class=\"nav navbar-nav\">\n";
  echo "         <li class=\"dropdown\">\n";
  echo "            <a href=\"/\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Pages <b class=\"caret\"></b></a>\n";
  echo "            <ul class=\"dropdown-menu\">\n";
  echo "               <li><a href=\"/public/contact.php\">Contact us</a></li>\n";
  echo "               <li><a href=\"/public/help.php\">Help</a></li>\n";
  echo "               <li class=\"divider\"></li>\n";
  echo "               <li><a href=\"\">Membership</a></li>\n";
  echo "               <li class=\"divider\"></li>\n";
  echo "               <li><a href=\"\">Reward programme</a></li>\n";
  echo "            </ul>\n";
  echo "         </li>\n";
  echo "         <li class=\"active\"><a href=\"$home\"><i class=\"pe-hand-o-left pe-fw\"></i> Back</a></li>\n";
  echo "      </ul>\n";
  echo "      <ul class=\"nav navbar-nav navbar-right\">\n";
  echo "         <li><button type=\"button\" class=\"btn btn-success navbar-btn\">Join now!</button></li>\n";
  echo "         <li class=\"dropdown\">\n";
  echo "            <a href=\"\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Member log-in <span class=\"caret\"></span></a>\n";
  echo "            <ul class=\"dropdown-menu\" style=\"padding: 15px;min-width: 250px;\">\n";
  echo "               <li>\n";
  echo "                  <div class=\"row\">\n";
  echo "                     <div class=\"col-md-12\">\n";
  echo "                        <form class=\"form\" role=\"form\" method=\"post\" action=\"login\" accept-charset=\"utf-8\" id=\"login-nav\">\n";
  echo "                        <div class=\"input-group margin-bottom-sm\">\n";
  echo "                          <span class=\"input-group-addon\"><i class=\"pe-envelope-o pe-fw\"></i></span>\n";
  echo "                          <input type=\"text\" name=\"username\" class=\"form-control\" placeholder=\"email@company.com\">\n";
  echo "                        </div>\n";
  echo "                        <div class=\"input-group\">\n";
  echo "                          <span class=\"input-group-addon\"><i class=\"pe-key pe-fw\"></i></span>\n";
  echo "                          <input type=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\">\n";
  echo "                        </div>\n";
  echo "                           <div class=\"checkbox\">\n";
  echo "                              <label><input type=\"checkbox\"> Remember me</label>\n";
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
  echo "                  <input class=\"btn btn-default btn-block\" type=\"button\" id=\"sign-in-google\" value=\"Sign In with Google\" disabled>\n";
  echo "                  <input class=\"btn btn-default btn-block\" type=\"button\" id=\"sign-in-twitter\" value=\"Sign In with Twitter\" disabled>\n";
  echo "               </li>\n";
  echo "            </ul>\n";
  echo "         </li>\n";
  echo "      </ul>\n";
  echo "   </div>\n";
  echo "  </div>\n";
  echo "</nav>\n\n";
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

function handleChangeProfile($note = null) {
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
    if ($notes) { pageFooter($notes); } else { pageFooter(); }
    exit;
  }
}

function handleChangePassword($notes = null) {
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
    if ($notes) { pageFooter($notes); } else { pageFooter(); }
    exit;
  }
}

function paint_non_authenticated() {
  paint_public_survey_list();
  render_login_form();
}

function paint_public_survey_list() {
  get_survey_info($surveys, $_, $accessibility);
  foreach ($surveys as $sid => $survey) {
    if (isset($accessibility[$sid]['available']) && true === (bool)$accessibility[$sid]['available']) { continue; }
    unset($surveys[$sid]);
  }

  // spit them out
  if (0 < count($surveys)) {
    echo "<h2>Public surveys</h2>\n";
    echo "<br>\n";
    echo "<p>Below is a list of the current available surveys. Please complete these surveys.</p>\n";
    echo "<p>If you are a registered member, make sure you sign in before taking these public surveys in order to get the full benefits.</p>\n";
    echo "<br>\n";
    foreach ($surveys as $survey) {
      printf('<a href="%s" class="btn btn-info btn-lg" role="button"><i class="pe-flag pe-fw"></i> %s</a> &nbsp;', survey_fetch_url_by_survey_name($survey['name']), $survey['title']);
      print "\n";
    }
    echo "<br><br>\n";
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
  global $respondent;
  $home = "http://www.siamsquare.org/";
  $public = "http://www.siamsquare.org/public/";
  $cfg =& $GLOBALS['ESPCONFIG'];
  $email = $GLOBALS['ESPCONFIG']['email_from_address'];
  //$tools  = array ("$public?doChangeProfile=1" => "Edit my profile", "$public?doChangePassword=1" => "Change my password", "$public?doLogout=1" => "Logout", "$public/help.php" => "Help", "$public/contact.php" => "Contact support",);
  //$time = printf(_('Right now, my watch shows %s.'), strftime(FORMAT_OUTPUT_DATE));
  echo "<h2>Dashboard <small>(User management interface)</small></h2>\n";
  echo "<br>\n\n";
  echo "<h3>Account management</h3>\n";
  echo "<div class=\"row\">\n";
  echo "  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n";
  echo "    <div class=\"panel panel-primary\">\n";
  //echo "      <div class=\"panel-heading\"><h4>User tools</h4></div>\n";
  echo "      <div class=\"panel-body list-group-item-info\">\n";
  echo "        <p><i class=\"pe-user pe-fw\"></i>&nbsp; Your login information:</p>\n";
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
  echo "         <a class=\"list-group-item\" href=\"$public?doChangeProfile=1\"><i class=\"pe-cog pe-fw\"></i>&nbsp; Change your info</a>\n";
  echo "         <a class=\"list-group-item\" href=\"$public?doChangePassword=1\"><i class=\"pe-key pe-fw\"></i>&nbsp; Change your password</a>\n";
  echo "      </div>\n";
  echo "    </div>\n";
  echo "  </div>\n";
  echo "</div>\n";
  echo "<br>\n\n";
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
  echo "<br>\n\n";
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
    echo "<br>\n\n";
}

function get_survey_info(&$surveys, &$responses, &$accessibility) {
  // initialize return values
  $surveys       = array ();
  $responses     = array ();
  $accessibility = array ();

  require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/lib/espsurvey.inc';
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
  $home = "http://www.siamsquare.org/";
  $public = "http://www.siamsquare.org/public/";
  $cfg =& $GLOBALS['ESPCONFIG'];
  $username = (isset($_REQUEST['username']) ? $_REQUEST['username'] : '');
  $str = "";
  if ($_message) { echo mkerror($_message); }
  echo "\n";
  echo "<form name=\"login\" id=\"login\" method=\"post\" class=\"form-horizontal\" action=\"$public\">\n";
  echo "  <h2 class=\"form-signin-heading\">Respondent login</h2>\n";
  echo "  <br>\n";
  echo "  <p>This section is reserved only for our registered members who are willing to spend some of their spare time with our surveys (both public or specific to some target groups). Within this section you will be able to access to a highly confidential data such as questionnaire design, data collected from respondents, reports, etc. We carefully design our system to ensure such high important data is kept separately for different users or user groups.</p>\n";
  echo "  <p>Despite the registration processs can be done by yourself, please feel free to contact us should you need any support for accessing this section.</p>\n";
  echo "  <br>\n";
  echo "    <div class=\"form-group\">\n";
  echo "      <label for=\"$usernameVar\" class=\"col-sm-3 control-label\">Email (login):</label>\n";
  echo "        <div class=\"col-sm-9\">\n";
  echo "        <input type=\"text\" name=\"$usernameVar\" class=\"form-control\" placeholder=\"email@company.com\" required autofocus>\n";
  echo "        </div>\n";
  echo "     </div>\n";
  echo "     <div class=\"form-group\">\n";
  echo "       <label for=\"$passwordVar\" class=\"col-sm-3 control-label\">Password:</label>\n";
  echo "         <div class=\"col-sm-9\">\n";
  echo "         <input type=\"password\" name=\"$passwordVar\" class=\"form-control\" placeholder=\"Password\" required>\n";
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
  echo "<br>\n";
  //echo login_warning();
}

function render_login_form_short($action = null, $usernameVar = 'username', $passwordVar = 'password', $loginButtonVar = 'doLogin', $_message = null) {
  $home = "http://www.siamsquare.org/";
  $public = "http://www.siamsquare.org/public/";
  $cfg =& $GLOBALS['ESPCONFIG'];
  $username = (isset($_REQUEST['username']) ? $_REQUEST['username'] : '');
  $str = "";
  if ($_message) { echo mkerror($_message); }
  echo "\n";
  echo "<form name=\"login\" id=\"login\" method=\"post\" class=\"form-horizontal\" action=\"$public\">\n";
  echo "  <h2 class=\"form-signin-heading\">Respondent login</h2>\n";
  echo "  <br>\n";
  echo "  <p>This section is reserved only for our registered members who are willing to spend some of their spare time with our surveys (both public or specific to some target groups). Within this section you will be able to access to a highly confidential data such as questionnaire design, data collected from respondents, reports, etc. We carefully design our system to ensure such high important data is kept separately for different users or user groups.</p>\n";
  echo "  <p>Despite the registration processs can be done by yourself, please feel free to contact us should you need any support for accessing this section.</p>\n";
  echo "  <br>\n";
  echo "    <div class=\"input-group\">\n";
  echo "      <span class=\"input-group-addon\"><i class=\"pe-envelope pe-fw\"></i></span>\n";
  echo "      <input class=\"form-control\" type=\"text\" placeholder=\"Email address\">\n";
  echo "    </div>\n";
  echo "    <br>\n";
  echo "    <div class=\"input-group\">\n";
  echo "      <span class=\"input-group-addon\"><i class=\"pe-key pe-fw\"></i></span>\n";
  echo "      <input class=\"form-control\" type=\"password\" placeholder=\"Password\">\n";
  echo "    </div>\n";
  echo "</form>\n";
  echo "<br>\n";
  //echo login_warning();
}


function render_profile_change_form ($action = null, $firstNameVar = 'firstName', $lastNameVar = 'lastName', $emailVar = 'emailAddress', $changeButtonVar = 'doChangeProfile', $cancelButtonVar = 'doChangeProfileCancel' ) {
  global $respondent;
  $home = "http://www.siamsquare.org/";
  $public = "http://www.siamsquare.org/public/";
  $cfg =& $GLOBALS['ESPCONFIG'];
  $firstName = (isset($_REQUEST[$firstNameVar]) ? htmlentities($_REQUEST[$firstNameVar]) : '');
  $lastName = (isset($_REQUEST[$lastNameVar]) ? htmlentities($_REQUEST[$lastNameVar]) : '');
  $emailAddress = (isset($_REQUEST[$emailVar]) ? htmlentities($_REQUEST[$emailVar]) : '');
  echo "<h2>Changing your profile</h2>\n\n";
  echo "<br>\n\n";
  echo "<form class=\"form-horizontal\" method=\"post\" id=\"profile_change\" action=\"$public\">\n";
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
  global $respondent;
  $home = "http://www.siamsquare.org/";
  $public = "http://www.siamsquare.org/public/";
  $cfg =& $GLOBALS['ESPCONFIG'];

  echo "<h2>Changing your password</h2>\n\n";
  echo "<br>\n\n";
  echo "<form class=\"form-horizontal\" method=\"post\" id=\"passwd_change\" action=\"$public\">\n";
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
  $home = "http://www.siamsquare.org/";
  $public = "http://www.siamsquare.org/public/";
  $self = $_SERVER['PHP_SELF'];
  $page = $home.$self;
  $str = "";
  if ($_message) { echo mkerror($_message); }

  echo "<form class=\"form-horizontal\" method=\"post\" id=\"phpesp\" action=\"$page\">\n";
  echo "  <div class=\"dashboardPanel\" id=\"login\">\n";
  echo "  <h2 class=\"form-signin-heading\">New account sign up</h2>\n";
  echo "  <br>\n";
  echo "  <p>Sign up for free. What you have to do is to spend 2 minutes completing this page and that's it!</p>\n";
  echo "  <p>All registered members will be automatically enrolled to our reward system (click for more info).</p>\n";
  echo "  <br><br>\n";
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
  echo "<br>\n";
  //echo login_warning();

}


?>
