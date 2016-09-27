<?php

function logo() {
  echo "<span class=\"logo3\">siamsq</span> &#9634;";
}

function peblogo() {
  echo "<span class=\"logo1\"><i class=\"pe-logo\"></i></span> <span class=\"logo2\">pe</span><span class=\"logo3\">binary</span>";
}

function pageHeader($title) {
  //$home = "http://www.siamsquare.org/";
  //$public = "http://www.siamsquare.org/public/";
    $show = "<i class=\"pe-street-view pe-fw\"></i> <kbd>" . $_SESSION['espuser'] . "</kbd>";
    if (is_session_authenticated()) { $signed = "Logged in as $show"; } else { $signed = "<i class=\"pe-exclamation-triangle pe-fw\"></i> Authorised member only"; }
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
  <script type="text/javascript" src="assets/js/jquery-2.1.4.min.js"></script>
  <script type="text/javascript" src="assets/js/bootstrap.js"></script>
  <script type="text/javascript" src="assets/js/jquery.steps.js"></script>
  <script type="text/javascript" src="assets/js/jquery-ui.min.js"></script>
  <script type="text/javascript" src="assets/js/fv/formValidation.min.js"></script>
  <script type="text/javascript" src="assets/js/fv/bootstrap.min.js"></script>
</head>
<body>
<header>
  <div class="row">
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 header-1">
      <div class="container">
        <i class="pe-language pe-fw"></i> &middot;
        <a class="newlang" title="Switch to English language">English</a> &middot;
        <a class="newlang" title="เปลี่ยนเป็นภาษาไทย">ไทย</a>
      </div>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 header-2">
      <div class="container">
        <h1><a href="<?php echo MYPUBLIC; ?>" title="PE BINARY CO., LTD."><?php logo(); ?></a> <span class="sub-brand">Respondent</span></h1>
        <p class="description">A market research company specialised in mobile survey</p>
        <h2 class="white">&#9836; &#9819; &#9962; &#9969; &#9748; &#10000; &#10175; &#9820; &#9822; &#9731; &#9973; &#8485; &#8488; &#8523; &#8492; &#9961;</h2>
        <p class="thai-name"><i>บริษัท พีอี ไบนารี่ จำกัด</i></p>
      </div>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 header-3">
      <nav class="navbar navbar-default navbar-static-top">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a href="<?php echo MYPUBLIC; ?>" class="navbar-brand" title="PE BINARY CO., LTD."><?php echo $signed; ?></a>
          </div>
          <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav navbar-right">
<?php if (is_session_authenticated()) { ?>
              <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" role="button"><i class="pe-user pe-fw"></i> My profile <span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li class="dropdown-header">Manage your profile</li>
                  <li><a href="<?php echo MYPUBLIC; ?>?doChangeProfile=1" title="Change your info"><i class="pe-cog pe-fw"></i> Change your info</a></li>
                  <li><a href="<?php echo MYPUBLIC; ?>?doChangePassword=1" title="Change your password"><i class="pe-key pe-fw"></i> Change your password</a></li>
                </ul>
              <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" role="button"><i class="pe-commenting pe-fw"></i> My participation <span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li class="dropdown-header">Participation</li>
                  <li><a href="" title="Current surveys"><i class="pe-wpforms pe-fw"></i> Current surveys</a></li>
                  <li><a href="" title="History"><i class="pe-history pe-fw"></i> History</a></li>
                  <li role="separator" class="divider"></li>
                  <li class="dropdown-header">Points &amp; rewards</li>
                  <li><a href="" title="Current points"><i class="pe-trophy pe-fw"></i> Current points</a></li>
                  <li><a href="" title="Rewards"><i class="pe-diamond pe-fw"></i> Rewards</a></li>
                </ul>
              <li><a href="<?php echo MYPUBLIC; ?>?doLogout=1"><i class="pe-sign-out pe-fw"></i> Log out</a></li>
<?php } else { ?>
              <li><a href="<?php echo MYPUBLIC; ?>" title="Log in"><i class="pe-power-off pe-fw"></i> Log in</a></li>
              <li><a href="<?php echo MYPUBLIC; ?>signup.php" title="Become a member"><i class="pe-bullhorn pe-fw"></i> Become a member</a></li>
              <li><a href="<?php echo MYHOME; ?>" title="Back to the main page"><i class="pe-undo pe-fw"></i> Back</a></li>
<?php } ?>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
</header>
<main class="container">
<?php
}

function topNav_full() {
  //$home = "http://www.siamsquare.org/";
  //$public = "http://www.siamsquare.org/public/";
    $show = "<i class=\"pe-street-view pe-fw\"></i> <kbd>" . $_SESSION['espuser'] . "</kbd>";
    if (is_session_authenticated()) { $signed = "Logged in as $show"; } else { $signed = "<i class=\"pe-exclamation-triangle pe-fw\"></i> Authorised member only"; }
  header("Content-language: en");
  header("Content-type: text/html; charset=utf-8");
?>
      <nav class="navbar navbar-default navbar-static-top">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a href="<?php echo MYPUBLIC; ?>" class="navbar-brand" title="PE BINARY CO., LTD."><?php echo $signed; ?></a>
          </div>
          <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav navbar-right">
<?php if (is_session_authenticated()) { ?>
              <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" role="button"><i class="pe-user pe-fw"></i> My profile <span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li class="dropdown-header">Manage your profile</li>
                  <li><a href="<?php echo MYPUBLIC; ?>?doChangeProfile=1"><i class="pe-cog pe-fw"></i> Change your info</a></li>
                  <li><a href="<?php echo MYPUBLIC; ?>?doChangePassword=1"><i class="pe-key pe-fw"></i> Change your password</a></li>
                </ul>
              <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" role="button"><i class="pe-commenting pe-fw"></i> My participation <span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li class="dropdown-header">Participation</li>
                  <li><a href=""><i class="pe-wpforms pe-fw"></i> Current surveys</a></li>
                  <li><a href=""><i class="pe-history pe-fw"></i> History</a></li>
                  <li role="separator" class="divider"></li>
                  <li class="dropdown-header">Points &amp; rewards</li>
                  <li><a href=""><i class="pe-trophy pe-fw"></i> Current points</a></li>
                  <li><a href=""><i class="pe-diamond pe-fw"></i> Rewards</a></li>
                </ul>
              <li><a href="<?php echo MYPUBLIC; ?>?doLogout=1"><i class="pe-sign-out pe-fw"></i> Log out</a></li>
<?php } else { ?>
              <!-- <li><a href="<?php echo MYPUBLIC; ?>"><i class="pe-power-off pe-fw"></i> Log in</a></li>
              <li><a href="<?php echo MYPUBLIC; ?>signup.php"><i class="pe-bullhorn pe-fw"></i> Become a member</a></li> -->
              <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown"><i class="pe-power-off pe-fw"></i> Log in <span class="caret"></span></a>
                <ul class="dropdown-menu topnav-dropdown">
                  <li>
                    <form class="form" role="form" method="post" action="">
                      <div class="input-group margin-bottom-sm">
                        <span class="input-group-addon"><i class="pe-envelope-o pe-fw"></i></span>
                        <input type="text" name="username" class="form-control" placeholder="email@company.com">
                      </div>
                      <div class="input-group">
                        <span class="input-group-addon"><i class="pe-key pe-fw"></i></span>
                        <input type="password" name="password" class="form-control" placeholder="Password">
                      </div>
                      <div class="checkbox checkbox-primary">
                        <input id="rememberme" type="checkbox" checked> <label for="rememberme">Remember me</label>
                      </div>
                      <button type="submit" class="btn btn-info btn-block">Log in <i class="pe-check-circle-o"></i></button>
                    </form>
                  </li>
                </ul>
              </li>
              <li class="dropdown topnav-dropdown-color">
                <a class="dropdown-toggle" data-toggle="dropdown"><i class="pe-bullhorn pe-fw"></i> Become a member <span class="caret"></span></a>
                <ul class="dropdown-menu topnav-dropdown">
                  <li>
                    <a href="" class="btn btn-info btn-block topnav-btn" type="button" title="Sign up with Email"><span class="white">Sign up with <i class="pe-envelope-o pe-fw"></i> Email</span></a>
                  </li>
                  <li class="divider"></li>
                  <li>
                    <a href="" class="btn btn-default btn-block topnav-btn" type="button" title="Sign up with Facebook">Sign up with <i class="pe-facebook pe-fw"></i> Facebook</a>
                    <a href="" class="btn btn-default btn-block topnav-btn" type="button" title="Sign up with Twitter">Sign up with <i class="pe-twitter pe-fw"></i> Twitter</a>
                    <a href="" class="btn btn-default btn-block topnav-btn" type="button" title="Sign up with Google">Sign up with <i class="pe-google pe-fw"></i> Google</a>
                  </li>
                </ul>
              </li>
              <li><a href="http://www.siamsquare.org/"><i class="pe-undo pe-fw"></i> Back</a></li>
<?php } ?>
            </ul>
          </div>
        </div>
      </nav>
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
    title = "Debug Window";
    msg = "<?php echo(addcslashes($message, "\0..\31\\\"")); ?>";
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
<script type="text/javascript" src="assets/js/anchor.js"></script>
<script type="text/javascript" src="assets/js/notification.js"></script>
<script type="text/javascript" src="assets/js/thprovinces.js"></script>
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
  //$public = "http://www.siamsquare.org/public/";
  $r = MYPUBLIC;
  $handleLogout = (isset($_REQUEST['doLogout']) && is_session_authenticated() ? true : false);
  if ($handleLogout) {
    set_session_authentication(false);
    echo "<h2>You have been logged out</h2>";
    echo mksuccess("You have been successfully logged out. We will redirect you to the front page in a moment.");
    echo "<p><a href=".MYPUBLIC.">You can click here if you choose not to wait in order to log back in to our system.</a></p>";
    echo "<br><br>";
    $notes = array (array("title" => "Logged out", "text" => "You have been successfully logged out from our system.", "image" => "assets/img/notification.svg"));
    notify($notes);
    header("Refresh: 10; URL=$r");
  }
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
  paint_public_survey_list();
}

function paint_respondent_tools() {
  global $respondent;
  // $home = "http://www.siamsquare.org/";
  // $public = "http://www.siamsquare.org/public/";
  $p = MYPUBLIC;
  $cfg =& $GLOBALS['ESPCONFIG'];
  // $email = $GLOBALS['ESPCONFIG']['email_from_address'];
  //$tools  = array ("$public?doChangeProfile=1" => "Edit my profile", "$public?doChangePassword=1" => "Change my password", "$public?doLogout=1" => "Logout", "$public/help.php" => "Help", "$public/contact.php" => "Contact support",);
  //$time = printf(_('Right now, my watch shows %s.'), strftime(FORMAT_OUTPUT_DATE));
  echo "<h2>Dashboard <small>(User management interface)</small></h2>\n";
  echo "<h4>Account management</h4>\n";
  echo "<div class=\"row\">\n";
  echo "  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n";
  echo "    <div class=\"panel panel-primary\">\n";
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
  echo "        <a class=\"list-group-item\" href=\"$p?doChangeProfile=1\"><i class=\"pe-cog pe-fw\"></i>&nbsp; Change your info</a>\n";
  echo "        <a class=\"list-group-item\" href=\"$p?doChangePassword=1\"><i class=\"pe-key pe-fw\"></i>&nbsp; Change your password</a>\n";
  echo "      </div>\n";
  echo "    </div>\n";
  echo "  </div>\n";
  echo "</div>\n";
  echo "<br>\n\n";
}

function paint_respondent_surveys($current) {
  echo "<h4>Surveys participated</h4>\n";
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
  echo "<h4>History</h4>\n";
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

  //require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/lib/espsurvey.inc';
  require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/lib.inc';
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
  // $home = "http://www.siamsquare.org/";
  // $public = "http://www.siamsquare.org/public/";
  $cfg =& $GLOBALS['ESPCONFIG'];
  $username = (isset($_REQUEST['username']) ? $_REQUEST['username'] : '');
  $str = "";
  if ($_message) { echo mkerror($_message); }
?>
<form method="post" class="form-horizontal" action="<?php echo htmlspecialchars(MYPUBLIC); ?>">
  <h2>Respondent login</h2>
  <p>This section is reserved only for our registered members who are willing to spend some of their spare time with our surveys. Within this section respondents will find some interesting surveys where they can share their opinions by completing them. We value your opinions therefore incentives are provided to those who participate with our surveys.</p>
  <p>Should you need any support for accessing this section, please do not hesitate to contact our staff right away.</p>
  <section id="signinform">
    <div class="form-group">
      <label for="<?php echo $usernameVar; ?>" class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">Email:</label>
      <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
        <div class="input-group">
          <span class="input-group-addon"><i class="pe-envelope pe-fw"></i></span>
          <input type="text" name="<?php echo $usernameVar; ?>" class="form-control" placeholder="email@domain.com">
        </div>
      </div>
    </div>
    <div class="form-group">
      <label for="<?php echo $passwordVar; ?>" class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">Password:</label>
      <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
        <div class="input-group">
          <span class="input-group-addon"><i class="pe-key pe-fw"></i></span>
          <input type="password" name="<?php echo $passwordVar; ?>" class="form-control" placeholder="Password">
        </div>
      </div>
    </div>
    <div class="form-group">
      <div class="col-xs-offset-0 col-sm-offset-3 col-md-offset-3 col-lg-offset-3 col-xs-12 col-sm-7 col-md-7 col-lg-7">
        <div class="checkbox checkbox-primary">
          <input id="rememberme" type="checkbox" checked> <label for="rememberme">Remember me</label>
        </div>
      </div>
    </div>
    <div class="form-group">
      <div class="col-xs-offset-0 col-sm-offset-3 col-md-offset-3 col-lg-offset-3 col-xs-12 col-sm-7 col-md-7 col-lg-7">
        <button class="btn btn-info" name="<?php echo $loginButtonVar; ?>" type="submit">Log in <i class="pe-check-circle-o"></i></button>
      </div>
    </div>
  </section>
</form>
<script>
  $(document).ready(function() {
    $('#signinform').formValidation({
      framework: 'bootstrap',
      icon: { valid: 'pe-check', invalid: 'pe-times', validating: 'pe-refresh' },
      excluded: ':disabled',
      fields: {
        username: {
          validators: { notEmpty: { message: 'The username is required' }, emailAddress: { message: 'The input is not a valid email address' } } },
        password: {
          validators: { notEmpty: { message: 'The password is required' }, stringLength: { min: 4, message: 'Password must be more than 6 characters long' }, different: { field: 'username', message: 'The password cannot be the same as username' } } }
      }
    });
  });
</script>
<div class="alert alert-warning alert-dismissible" role="alert"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
  <h4><i class="pe-exclamation-triangle pe-fw pe-lg"></i> Unauthorised access to this system is prohibited by law</h4>
  <p>You are accessing a private computer network which includes: (1) this machine, (2) this computer network, (3) all computers/servers connected to this network, and (4) all devices and storage media attached to this network or to a computer on this network. This information system is provided for registered clients authorised use only. Unauthorized or improper use of this system may result in disciplinary action, as well as civil and criminal penalties.</p>
  <p>If you do not have an access, please contact sales for setting up a master login/password for your company.</p>
  <p>By using this information system, you understand and consent to the following:</p>
  <ul class="pe-ul">
    <li><i class="pe-li pe-check-square"></i> You have no reasonable expectation of privacy regarding any communication or data transiting or stored on this information system. At any time, and for any lawful purpose, we may monitor, intercept, and search and seize any communication or data transiting or stored on this information system.</li>
    <li><i class="pe-li pe-check-square"></i> Any communication or data transiting or stored on this information system may be disclosed or used for any lawful purpose.</li>
    <li><i class="pe-li pe-check-square"></i> Information you see must not be shared to the public due to our terms of confidentiality.</li>
  </ul>
</div>
<?php
}

function render_profile_change_form ($action = null, $firstNameVar = 'firstName', $lastNameVar = 'lastName', $emailVar = 'emailAddress', $changeButtonVar = 'doChangeProfile', $cancelButtonVar = 'doChangeProfileCancel' ) {
  global $respondent;
  // $home = "http://www.siamsquare.org/";
  // $public = "http://www.siamsquare.org/public/";
  $cfg =& $GLOBALS['ESPCONFIG'];
  $firstName = (isset($_REQUEST[$firstNameVar]) ? htmlentities($_REQUEST[$firstNameVar]) : '');
  $lastName = (isset($_REQUEST[$lastNameVar]) ? htmlentities($_REQUEST[$lastNameVar]) : '');
  $emailAddress = (isset($_REQUEST[$emailVar]) ? htmlentities($_REQUEST[$emailVar]) : '');
  echo "<h2>Changing your profile</h2>\n\n";
  echo "<br>\n\n";
  echo "<form class=\"form-horizontal\" method=\"post\" id=\"profile_change\" action=" . htmlspecialchars(MYPUBLIC) .">\n";
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
  echo "    <button type=\"submit\" class=\"btn btn-info\" name=\"$changeButtonVar\">Update <i class=\"pe-check-circle-o\"></i></button> &nbsp;\n";
  echo "    <button type=\"submit\" class=\"btn btn-default\" name=\"$cancelButtonVar\">Cancel</button>\n";
  echo "  </div>\n";
  echo "</form>\n";
}

function render_passwd_change_form ($action = null, $oldPasswordVar = 'oldPassword', $newPasswordVar = 'newPassword', $newPasswordConfirmVar = 'newPasswordConfirm', $changeButtonVar = 'doChangePassword', $cancelButtonVar = 'doChangePasswordCancel') {
  global $respondent;
  // $home = "http://www.siamsquare.org/";
  // $public = "http://www.siamsquare.org/public/";
  $cfg =& $GLOBALS['ESPCONFIG'];
?>
<form class="form-horizontal" method="post" id="passwd_change" action="<?php echo htmlspecialchars(MYPUBLIC); ?>">
  <h2>Changing your password</h2>
  <p>You can change your password as often as you need at this page.</p>
  <p>Please also note the tips for setting up a good strong password as shown in the bottom of this page.</p>
  <section id="changepassword">
    <div class="form-group">
      <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">Username</label>
        <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
          <div class="input-group">
            <span class="input-group-addon"><i class="pe-user pe-fw"></i></span>
            <input type="text" name="username" class="form-control" placeholder="<?php echo $respondent['username']; ?>" disabled>
          </div>
          <input type="hidden" name="username" value="<?php echo $respondent['username']; ?>">
       </div>
    </div>
    <hr>
    <div class="form-group">
      <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">Current password</label>
      <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
        <div class="input-group">
          <span class="input-group-addon"><i class="pe-key pe-fw"></i></span>
          <input type="password" name="<?php echo $oldPasswordVar; ?>" id="<?php echo $oldPasswordVar; ?>" class="form-control" placeholder="Current password">
        </div>
      </div>
    </div>
    <div class="form-group">
      <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">New password</label>
      <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
        <div class="input-group">
          <span class="input-group-addon"><i class="pe-key pe-fw"></i></span>
          <input type="password" name="<?php echo $newPasswordVar; ?>" id="<?php echo $newPasswordVar; ?>" class="form-control" placeholder="New password">
        </div>
      </div>
    </div>
    <div class="form-group">
      <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">Confirm new password</label>
      <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
        <div class="input-group">
          <span class="input-group-addon"><i class="pe-key pe-fw"></i></span>
          <input type="password" name="<?php echo $newPasswordConfirmVar; ?>" id="<?php echo $newPasswordConfirmVar; ?>" class="form-control" placeholder="New password again">
        </div>
      </div>
    </div>
    <hr>
    <div class="form-group">
      <div class="col-xs-offset-0 col-sm-offset-3 col-md-offset-3 col-lg-offset-3 col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <p>Please type in the box the letters you see below<br>
      <img src="assets/include/captcha.php" alt="captcha"><br>
      <input type="text" name="captcha" value=""></p>
      <p>
        <pre>
          <?php var_dump($_SESSION); ?>
        </pre>
      </p>
      <button type="submit" class="btn btn-info" name="<?php $changeButtonVar; ?>">Change password <i class="pe-check-circle-o"></i></button>
      <button type="submit" class="btn btn-default" name="<?php $cancelButtonVar; ?>">Cancel</button>
      <input type="hidden" name="where" value="passwd">
    </div>
  </section>
</form>
<script>
  $(document).ready(function() {
    $('#changepassword').formValidation({
      framework: 'bootstrap',
      icon: { valid: 'pe-check', invalid: 'pe-times', validating: 'pe-refresh' },
      excluded: ':disabled',
      fields: {
        <?php echo $oldPasswordVar; ?>: {
          validators: { notEmpty: { message: 'The password is required' }, stringLength: { min: 4, message: 'Password must be more than 6 characters long' }, different: { field: 'username', message: 'The password cannot be the same as username' } } },
        <?php echo $newPasswordVar; ?>: {
          validators: { notEmpty: { message: 'The password is required' }, stringLength: { min: 6, message: 'Password must be more than 6 characters long' }, different: { field: 'username', message: 'The password cannot be the same as username' } } },
        <?php echo $newPasswordConfirmVar; ?>: {
          validators: { notEmpty: { message: 'The password is required' }, stringLength: { min: 6, message: 'Password must be more than 6 characters long' }, different: { field: 'username', message: 'The password cannot be the same as username' }, identical: { field: 'newpass1', message: 'The confirm password must be the same as the new one' } } }
      }
    });
  });
</script>
<br><br>
<div class="alert alert-info alert-dismissible" role="alert"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
  <h4><i class="pe-lightbulb-o pe-fw pe-lg"></i> Tips for choosing a strong password</h4>
  <p>Below are some nice tips for anyone who cares about setting up a good strong password</p>
  <ul class="pe-ul">
    <li><i class="pe-li pe-check-square"></i> <strong>Create passwords that are easy to remember but hard for others to guess.</strong> When possible, use a phrase such as “I started 7th grade at Lincoln Middle School in 2004” and use the initial of each word like this: “Is7gaLMSi#2004.” And make them at least a little different (by adding a couple of unique letters) for each site. On some sites you might even be able to type in the entire phrase.</li>
    <li><i class="pe-li pe-check-square"></i> <strong>Make the password at least 8 characters long.</strong> The longer the better. Longer passwords are harder for thieves to crack.</li>
    <li><i class="pe-li pe-check-square"></i> <strong>Include numbers, capital letters and symbols.</strong> Consider using a $ instead of an S or a 1 instead of an L, or including an &amp; or % – but note that $1ngle is NOT a good password. Password thieves are onto this. But Mf$J1ravng (short for “My friend Sam Jones is really a very nice guy) is an excellent password.</li>
    <li><i class="pe-li pe-check-square"></i> <strong>Don’t use dictionary words.</strong>  If it’s in the dictionary, there is a chance someone will guess it. There’s even software that criminals use that can guess words used in dictionaries.</li>
    <li><i class="pe-li pe-check-square"></i> <strong>Never give out your password to anyone.</strong> Never give it to friends, even if they’re really good friends. A friend can – maybe even accidentally – pass your password along to others or even become an ex-friend and abuse it.</li>
    <li><i class="pe-li pe-check-square"></i> <strong>Make sure your devices are secure.</strong> The best password in the world might not do you any good if someone is looking over your shoulder while you type or if you forget to log out on a cybercafe computer. Malicious software, including “keyboard loggers” that record all of your keystrokes, has been used to steal passwords and other information. To increase security, make sure you’re using up-to-date anti-malware software and that your operating system is up-to-date.</li>
  </ul>
</div>
<?php
}

function respondent_signup() {
  // $home = "http://www.siamsquare.org/";
  // $public = "http://www.siamsquare.org/public/";
  $self = $_SERVER['PHP_SELF'];
  $page = $home.$self;
  $str = "";
  if ($_message) { echo mkerror($_message); }
  require_once $_SERVER['DOCUMENT_ROOT'] . '/public/assets/include/signup.inc';
}

?>
