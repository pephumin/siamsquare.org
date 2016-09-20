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
        <h1><a href="<?php echo $admin; ?>" title="PE BINARY CO., LTD."><?php logo(); ?></a> <span class="sub-brand">Client</span></h1>
        <p class="description">A market research company specialised in mobile survey</p>
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
            <a href="<?php echo $admin; ?>" class="navbar-brand" title="PE BINARY CO., LTD."><?php echo $signed; ?></a>
          </div>
          <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav navbar-right">
<?php if(!empty($_SESSION['acl']['username'])) { ?>
              <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" role="button"><i class="pe-wpforms pe-fw"></i> My surveys <span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li class="dropdown-header">Current surveys</li>
                  <li><a href="#"><i class="pe-paper-plane pe-fw"></i> Active</a></li>
                  <li><a href="#"><i class="pe-puzzle-piece pe-fw"></i> Non-active</a></li>
                  <li role="separator" class="divider"></li>
                  <li class="dropdown-header">Past surveys</li>
                  <li><a href="#"><i class="pe-archive pe-fw"></i> Archived</a></li>
                  <li role="separator" class="divider"></li>
                  <li class="dropdown-header">Create a survey</li>
                  <li><a href="<?php echo $admin; ?>/?where=new"><i class="pe-file-o pe-fw"></i> New survey</a></li>
                </ul>
              <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" role="button"><i class="pe-graduation-cap pe-fw"></i> My team <span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li class="dropdown-header">Team overview</li>
                  <li><a href="#"><i class="pe-user pe-fw"></i> My team</a></li>
                  <li role="separator" class="divider"></li>
                  <li class="dropdown-header">Manage your team</li>
                  <li><a href="<?php echo $admin; ?>?where=designers"><i class="pe-user-plus pe-fw"></i> Add a new user</a></li>
                  <li><a href="#"><i class="pe-cogs pe-fw"></i> Member permission</a></li>
                </ul>
              <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" role="button"><i class="pe-venus-mars pe-fw"></i> My profile <span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li class="dropdown-header">Manage your profile</li>
                  <li><a href="<?php echo $admin; ?>?where=admdesigner"><i class="pe-cog pe-fw"></i> Change your info</a></li>
                  <li><a href="<?php echo $admin; ?>?where=passwd"><i class="pe-key pe-fw"></i> Change your password</a></li>
                </ul>
<?php if ($_SESSION['acl']['superuser'] == 'Y') { ?>
              <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" role="button"><i class="pe-unlock-alt pe-fw"></i> Superuser <span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li class="dropdown-header">Special menu</li>
                  <li><a href="<?php echo $admin; ?>?where=purge"><i class="pe-trash-o pe-fw"></i> Delete a survey</a></li>
                  <li><a href="<?php echo $admin; ?>?where=response_purge"><i class="pe-recycle pe-fw"></i> Delete a response</a></li>
                  <li><a href="<?php echo $admin; ?>?where=groups"><i class="pe-database pe-fw"></i> Manage groups</a></li>
                  <li><a href="<?php echo $admin; ?>?where=guide"><i class="pe-list-alt pe-fw"></i> Admin guide</a></li>
                </ul>
<?php } ?>
              <li><a href="<?php echo $admin; ?>/?where=logout"><i class="pe-sign-out pe-fw"></i> Log out</a></li>
<?php } else { ?>
              <li><a href="<?php echo $admin; ?>"><i class="pe-power-off pe-fw"></i> Log in</a></li>
              <li><a href="<?php echo $admin; ?>?where=request"><i class="pe-bullhorn pe-fw"></i> Request for an access</a></li>
              <li><a href="<?php echo $home; ?>"><i class="pe-undo pe-fw"></i> Back</a></li>
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

?>
