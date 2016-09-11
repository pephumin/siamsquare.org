<?php

function logo() {
  echo "<span class=\"logo1\"><i class=\"pe-logo\"></i></span> <span class=\"logo2\">pe</span><span class=\"logo3\">binary</span>";
}

function notify($title, $text, $image) {
  // Add these to assets/js/function.js
?>
    function notifyBox(<?php echo $title . "," . $text . "," . $image; ?>) {
      Notification({
          title: title,
          text: text,
          image: image,
          inAnimation: "bounce",
          outAnimation: "zoomOut",
          position: 2
      });
    }
    $(document).ready(function() {
    // show the first notification
    notifyBox("Title 1", "Image size is 50px x 50px", "assets/img/notification.svg");
    // show the second one with 1 second delay
    $(this).delay(1000).queue(function() {
       notifyBox("Title 2", "jQuery events and functions like in the example above.", "assets/img/notification.svg");
       $(this).dequeue();
    });
    // show the third one with another 1 second delay
    $(this).delay(1000).queue(function() {
       notifyBox("Title 3", "Can it be another one?", "");
       $(this).dequeue();
    });
  });
<?php
}

function pageHeader($title) {
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
        <form name="debug"><input class="btn btn-xs btn-danger" type="button" value="debug" onClick="debugWindow()"></form>
      </div>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 header-2">
      <div class="container">
        <h1><a href="/admin/" title="PE BINARY CO., LTD."><?php logo(); ?></a> <span class="sub-brand">Client</span></h1>
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
            <a class="navbar-brand" href="/admin/" title="PE BINARY CO., LTD.">Client access</a>
          </div>
          <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav navbar-right">
              <li><a href="http://www.siamsquare.org/admin"><i class="pe-power-off pe-lg"></i>&nbsp; Log-in</a></li>
              <li><a href="/admin/contact.php"><i class="pe-envelope-o pe-lg"></i>&nbsp; Contact</a></li>
              <li><a href="/admin/help.php"><i class="pe-question pe-lg"></i>&nbsp; Help</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
</header>
<main>
<?php
}

function pageFooter() {

  //global $self, $home, $admin, $base;
  $user = $_SESSION['acl']['username'];
  $group = $_SESSION['acl']['pgroup'];
  $g = $group[0];

  if ($g) { $show = "<kbd>$user</kbd> (<kbd>$g</kbd>)"; } else { $show = "<kbd>$user</kbd>"; }

  if(!empty($_SESSION['acl']['username'])) { $signed = "Signed in as <i class=\"pe-user pe-fw\"></i> $show"; } else { $signed = ""; }

?>
</main>
<footer>
  <div class="row">
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 footer-1">
      <div class="container">
        <p class="text-muted pull-right"><?php echo $signed; ?></p>
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
            <li><a href="http://www.pebinary.com/" title="Back to the main website" itemprop="url"><i class="pe-arrow-circle-left"></i> <span class="hidden-md hidden-lg" itemprop="name">The main website</span><span class="hidden-xs hidden-sm" itemprop="name">Back to the main website</span></a>&nbsp;</li>
          </ul>
        </nav>
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
  var activateConfirmMsg="Warning! Once activated, this survey can no longer be edited. Any further changes must be done on a copy."
  var cancelConfirmMsg="Warning! This survey has not been saved. Canceling now will remove any changes."
  var mergeMsg="<h2>You must select at least two surveys before you can merge</h2>"
</script>
<script language="JavaScript">
  function windowOpener(title,msg) {
    msgWindow=window.open("","displayWindow","menubar=no,alwaysRaised=yes,dependent=yes,width=600,height=500,scrollbars=yes,resizable=yes");
    msgWindow.document.write("<html><head><title>"+title+"</title></head>");
    msgWindow.document.write("<body>"+msg+"</body></html>");
  }
  function debugWindow () {
   title="Debug Window";
   msg="<table>\n<tr><td bgcolor=\"#808080\">SID</td><td bgcolor=\"#cccccc\">skge0e2drngug25vv1lo90svc5</td></tr>\n<tr><td bgcolor=\"#808080\">SESSION</td><td bgcolor=\"#cccccc\">FBRLH_state|s:32:&quot;4c24ac330370a7176f93f4064a5c08d1&quot;;acl|a:0:{}</td></tr>\n<tr><th align=\"left\" colspan=\"2\" bgcolor=\"#808080\">ACL</th></tr>\n</table>\n";
   windowOpener(title, msg);
  }
</script>
</body>
</html>
<?php
}

?>
