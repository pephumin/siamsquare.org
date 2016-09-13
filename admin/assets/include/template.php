<?php

function logo() {
  echo "<span class=\"logo1\"><i class=\"pe-logo\"></i></span> <span class=\"logo2\">pe</span><span class=\"logo3\">binary</span>";
}

function pageHeader($title) {
  $admin = "http://www.siamsquare.org/admin";
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
        <button class="btn btn-info btn-xs">hello</button>
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
            <a class="navbar-brand" href="<?php echo $admin; ?>" title="PE BINARY CO., LTD.">Client Zone</a>
          </div>
          <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav navbar-right">
<?php
  if ($_SERVER['REQUEST_URI'] == "/admin") { $a = '<li class="active">'; } else { $a = '<li>'; }
  if ($_SERVER['REQUEST_URI'] == "/admin/contact.php") { $b = '<li class="active">'; } else { $b = '<li>'; }
  if ($_SERVER['REQUEST_URI'] == "/admin/help.php") { $c = '<li class="active">'; } else { $c = '<li>'; }
  if(!empty($_SESSION['acl']['username'])) {
    echo "              $a<a href=\"$admin\"><i class=\"pe-home pe-fw\"></i> Home</a></li>\n";
    echo "              $b<a href=\"$admin/contact.php\"><i class=\"pe-envelope-o pe-fw\"></i> Contact</a></li>\n";
    echo "              $c<a href=\"$admin/help.php\"><i class=\"pe-question pe-fw\"></i> Help</a></li>\n";
    echo "              <li><a href=\"$admin/index.php?where=logout\"><i class=\"pe-sign-out pe-fw\"></i> Sign out</a></li>\n";
  } else {
    echo "              $a<a href=\"$admin\"><i class=\"pe-power-off pe-fw\"></i> Sign in</a></li>\n";
    echo "              $b<a href=\"$admin/contact.php\"><i class=\"pe-envelope-o pe-fw\"></i> Contact</a></li>\n";
    echo "              $c<a href=\"$admin/help.php\"><i class=\"pe-question pe-fw\"></i> Help</a></li>\n";
  }
?>
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

function pageFooter($notes = null) {

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
        <p class="text-muted"><?php echo $signed; ?></p>
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
  var activateConfirmMsg="Warning! Once activated, this survey can no longer be edited. Any further changes must be done on a copy."
  var cancelConfirmMsg="Warning! This survey has not been saved. Canceling now will remove any changes."
  var mergeMsg="<h2>You must select at least two surveys before you can merge</h2>"
</script>
<?php
if ($notes) {
  notify($notes);
}
// $notes = array
// (
//   array("title" => "Title 1", "text" => "jQuery1 events and functions like in the example above.", "image" => "assets/img/notification.svg"),
//   array("title" => "Title 2", "text" => "jQuery2 events and functions like in the example above.", "image" => "assets/img/notification.svg"),
//   array("title" => "Title 3", "text" => "jQuery3 events and functions like in the example above.", "image" => "assets/img/notification.svg"),
//   array("title" => "Title 4", "text" => "jQuery4 events and functions like in the example above.", "image" => "assets/img/notification.svg")
// );
// notify($notes);
?>
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

function displayTabNav_tabs() {
  global $tab;
  echo "<ul class=\"nav nav-tabs\">\n";
  echo "<input type=\"hidden\" name=\"where\" value=\"tab\" />";
  if ($tab == "general") { echo "<li class=\"active\"><input type=\"submit\" name=\"tab_general\" value=\"General\" /></li>\n"; }
  else { echo "<li><input type=\"submit\" name=\"tab_general\" value=\"General\" /></li>\n"; }
  echo "&nbsp;\n";
  if ($tab == "questions") { echo "<li class=\"active\"><input type=\"submit\" name=\"tab_questions\" value=\"Questions\" /></li>\n"; }
  else { echo "<li><input type=\"submit\" name=\"tab_questions\" value=\"Questions\" /></li>\n"; }
  echo "&nbsp;\n";
  if ($tab == "order") { echo "<li class=\"active\"><input type=\"submit\" name=\"tab_order\" value=\"Order\" /></li>\n"; }
  else { echo "<li><input type=\"submit\" name=\"tab_order\" value=\"Order\" /></li>\n"; }
  echo "&nbsp;\n";
  if ($tab == "conditions") { echo "<li class=\"active\"><input type=\"submit\" name=\"tab_conditions\" value=\"Conditions\" /></li>\n"; }
  else { echo "<li><input type=\"submit\" name=\"tab_conditions\" value=\"Conditions\" /></li>\n"; }
  echo "&nbsp;\n";
  if ($tab == "preview") { echo "<li class=\"active\"><input type=\"submit\" name=\"tab_preview\" value=\"Preview\" /></li>\n"; }
  else { echo "<li><input type=\"submit\" name=\"tab_preview\" value=\"Preview\" /></li>\n"; }
  echo "&nbsp;\n";
  if ($tab == "finish") { echo "<li class=\"active\"><input type=\"submit\" name=\"tab_finish\" value=\"Finish\" /></li>\n"; }
  else { echo "<li><input type=\"submit\" name=\"tab_finish\" value=\"Finish\" /></li>\n"; }
  echo "</ul>\n";
  echo "<br /><br />\n";
}

function displayTabNav() {
  global $tab;
  echo "<p>";
  echo '<input type="hidden" name="where" value="tab" />';
  echo "&nbsp;\n";
  if ($tab == 'general') { echo '<input type="submit" name="tab_general" value="General" class="btn btn-warning active btn-sm" />'; }
  else { echo '<input type="submit" name="tab_general" value="General" class="btn btn-warning btn-sm" />'; }
  echo "&nbsp;\n";
  if ($tab == 'questions') { echo '<input type="submit" name="tab_questions" value="Questions" class="btn btn-warning active btn-sm" />'; }
  else { echo '<input type="submit" name="tab_questions" value="Questions" class="btn btn-warning btn-sm" />'; }
  echo "&nbsp;\n";
  if ($tab == 'order') { echo '<input type="submit" name="tab_order" value="Order" class="btn btn-warning active btn-sm" />'; }
  else { echo '<input type="submit" name="tab_order" value="Order" class="btn btn-warning btn-sm" />'; }
  echo "&nbsp;\n";
  if ($tab == 'conditions') { echo '<input type="submit" name="tab_conditions" value="Conditions" class="btn btn-warning active btn-sm" />'; }
  else { echo '<input type="submit" name="tab_conditions" value="Conditions" class="btn btn-warning btn-sm" />'; }
  echo "&nbsp;\n";
  if ($tab == 'preview') { echo '<input type="submit" name="tab_preview" value="Preview" class="btn btn-warning active btn-sm" />'; }
  else { echo '<input type="submit" name="tab_preview" value="Preview" class="btn btn-warning btn-sm" />'; }
  echo "&nbsp;\n";
  if ($tab == 'finish') { echo '<input type="submit" name="tab_finish" value="Finish" class="btn btn-warning active btn-sm" />'; }
  else { echo '<input type="submit" name="tab_finish" value="Finish" class="btn btn-warning btn-sm" />'; }
  echo "&nbsp;\n";
  echo "</p>";
}

function displayAdminBack() {
  //echo "<a class=\"btn btn-default btn-sm pull-right\" role=\"button\" href=\"/admin/index.php?where=manage\"><i class=\"pe-hand-o-left pe-fw\"></i> Back to Main Interface</a>";
}

?>
