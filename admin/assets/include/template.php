<?php

function logo() {
  //echo file_get_contents(DOCROOT.'/admin/assets/img/ssq.svg');
  echo "<img src=\"assets/img/ssq.svg\" alt=\"SiamSquare Survey Engine by PE BINARY CO., LTD.\">";
}

function ssqlogo() {
  echo "<span class=\"ssqlogo1\">Siam</span><span class=\"ssqlogo2\">Square</span>";
}

function peblogo() {
  echo "<span class=\"logo1\"><i class=\"pe-logo\"></i></span> <span class=\"logo2\">pe</span><span class=\"logo3\">binary</span>";
}

function pageHeader($title) {
  $user = $_SESSION['acl']['username'];
  $group = $_SESSION['acl']['pgroup'];
  $g = $group[0];
  if ($g) { $show = "<i class=\"pe-street-view pe-fw\"></i> <kbd>$user</kbd> <i class=\"pe-building pe-fw\"></i> <kbd>$g</kbd>"; } else { $show = "<i class=\"pe-street-view pe-fw\"></i> <kbd>$user</kbd>"; }
  $v1 = MYADMIN."?w=login"; $v2 = MYADMIN."?w=logout"; $v3 = "http://www.pebinary.net/en/clients/";
  if (!empty($_SESSION['acl']['username'])) {
    $signed = "<a href=\"$v2\" class=\"btn btn-warning btn-xs\" title=\"Log out\"><i class=\"pe-sign-out pe-fw\"></i> Log out</a> <a href=\"http://www.pebinary.net/en/clients/\" class=\"btn btn-danger btn-xs\"><i class=\"pe-university pe-fw\"></i> Help</a>\n";
    $ww = "Logged in as $show";
  } else {
    $signed = "<a href=\"$v1\" class=\"btn btn-warning btn-xs\" title=\"Log in\"><i class=\"pe-power-off pe-fw\"></i> Log in</a> <a href=\"http://www.pebinary.net/en/clients/\" class=\"btn btn-danger btn-xs\"><i class=\"pe-university pe-fw\"></i> Help</a>\n";
    $ww = "<i class=\"pe-exclamation-triangle pe-fw\"></i> Authorised clients only";
  }
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
  <script type="text/javascript" src="assets/js/jquery-ui.min.js"></script>
  <script type="text/javascript" src="assets/js/jquery.steps.js"></script>
  <script type="text/javascript" src="assets/js/fv/formValidation.min.js"></script>
  <script type="text/javascript" src="assets/js/fv/bootstrap.min.js"></script>
  <script type="text/javascript" src="assets/js/tops.js"></script>
</head>
<body>
<header>
  <div class="row">
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 header-1">
      <div class="container">
        <?php echo $signed; ?>
      </div>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 header-2">
      <div class="container">
        <h1><a href="<?php echo MYADMIN; ?>" title="<?php echo MYDESC; ?>"><?php logo(); ?></a></h1>
        <p class="description">A survey society where your opinions are highly valued</p>
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
            <span class="navbar-brand"><?php echo $ww; ?></span>
          </div>
          <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav navbar-right">
<?php if (!empty($_SESSION['acl']['username'])) { ?>
              <li><a href="<?php echo MYADMIN; ?>" title="<?php echo MYDESC; ?>"><i class="pe-home pe-fw"></i> Home</a></i>
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
                  <li><a href="<?php echo(MYADMIN."?w=new"); ?>"><i class="pe-file-o pe-fw"></i> New survey</a></li>
                </ul>
              <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" role="button"><i class="pe-graduation-cap pe-fw"></i> My team <span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li class="dropdown-header">Team overview</li>
                  <li><a href="<?php echo(MYADMIN."?w=team"); ?>"><i class="pe-user pe-fw"></i> My team</a></li>
                  <li role="separator" class="divider"></li>
                  <li class="dropdown-header">Manage your team</li>
                  <li><a href="<?php echo(MYADMIN."?w=admdesigner"); ?>" title="Add a new member"><i class="pe-user-plus pe-fw"></i> Add a new member</a></li>
                  <li><a href="#" title="Member permission"><i class="pe-cogs pe-fw"></i> Member permission</a></li>
                </ul>
              <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" role="button"><i class="pe-user pe-fw"></i> My profile <span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li class="dropdown-header">Manage your profile</li>
                  <li><a href="<?php echo(MYADMIN."?w=admdesigner&amp;u=".$user."&amp;r=".$g); ?>" title="Change your info"><i class="pe-cog pe-fw"></i> Change your info</a></li>
                  <li><a href="<?php echo(MYADMIN."?w=passwd"); ?>" title="Change your password"><i class="pe-key pe-fw"></i> Change your password</a></li>
                </ul>
  <?php if ($_SESSION['acl']['superuser'] == 'Y') { ?>
              <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" role="button"><i class="pe-unlock-alt pe-fw"></i> Superuser <span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li class="dropdown-header">Special menu</li>
                  <li><a href="<?php echo(MYADMIN."?w=delete_survey"); ?>" title="Delete a survey"><i class="pe-trash-o pe-fw"></i> Delete a survey</a></li>
                  <li><a href="<?php echo(MYADMIN."?w=delete_response"); ?>" title="Delete a response"><i class="pe-recycle pe-fw"></i> Delete a response</a></li>
                  <li><a href="<?php echo(MYADMIN."?w=groups"); ?>" title="Manage groups"><i class="pe-database pe-fw"></i> Manage groups</a></li>
                  <li><a href="<?php echo(MYADMIN."?w=help"); ?>" title="Admin guide"><i class="pe-list-alt pe-fw"></i> Admin guide</a></li>
                </ul>
  <?php } ?>
<?php } else { ?>
              <li><a href="<?php echo MYADMIN; ?>" title="<?php echo MYDESC; ?>"><i class="pe-home pe-fw"></i> Home</a></i>
              <li><a href="<?php echo(MYADMIN."request.php"); ?>" title="Request for an access"><i class="pe-bullhorn pe-fw"></i> Request for an access</a></li>
              <li><a href="<?php echo(MYADMIN."contact.php"); ?>" title="Contact us"><i class="pe-envelope-o pe-fw"></i> Contact us</a></li>
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
        <h4>&#9836; &#9819; &#9962; &#9969; &#9748; &#10000; &#10175; &#9820; &#9822; &#9731; &#9973; &#8485; &#8488; &#8523; &#8492; &#9961;</h4>
      </div>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 footer-2">
      <div class="container">
        <a href="<?php echo MYHOME; ?>" class="footerlogo-ssq" title="<?php echo MYDESC; ?>"><?php ssqlogo(); ?></a> by
        <a href="http://www.pebinary.com" class="footerlogo" title="PE BINARY CO., LTD."><?php peblogo(); ?></a><br>
        <i class="pe-copyright"></i> Copyright 2016, All rights reserved.<br>
        <nav class="footer">
          <ul class="list-inline" itemscope itemtype="http://schema.org/SiteNavigationElement">
            <li><a href="http://www.pebinary.com/about/privacy.html" title="Privacy policy" itemprop="url"><i class="pe-lock"></i> <span class="hidden-md hidden-lg" itemprop="name">Privacy</span><span class="hidden-xs hidden-sm" itemprop="name">Privacy policy</span></a></li>
            <li><a href="http://www.pebinary.com/about/tos.html" title="Terms of services" itemprop="url"><i class="pe-gavel"></i> <span class="hidden-md hidden-lg" itemprop="name">TOS</span><span class="hidden-xs hidden-sm" itemprop="name">Terms of services</span></a></li>
            <li><a href="http://www.pebinary.com/about/terms.html" title="Terms &amp; conditions" itemprop="url"><i class="pe-balance-scale"></i> <span class="hidden-md hidden-lg" itemprop="name">Terms</span><span class="hidden-xs hidden-sm" itemprop="name">Terms &amp; conditions</span></a></li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 footer-3">
      <div class="container">
        <a class="btn btn-info btn-xs" href="http://www.bootlint.com/?url=<?php echo MYHOME.ME; ?>" target="_blank" role="button">bootlint</a>
        <?php include_once DOCROOT.'/admin/assets/include/debug.inc'; ?>
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
     for (var i=0; i<obj.length; i++) {
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

// function displayTabNav_tabs() {
//   global $tab;
//   echo "<ul class=\"nav nav-tabs\">\n";
//   echo "<input type=\"hidden\" name=\"where\" value=\"tab\" />";
//   if ($tab == "general") { echo "<li class=\"active\"><input type=\"submit\" name=\"tab_general\" value=\"General\" /></li>\n"; }
//   else { echo "<li><input type=\"submit\" name=\"tab_general\" value=\"General\" /></li>\n"; }
//   echo "&nbsp;\n";
//   if ($tab == "questions") { echo "<li class=\"active\"><input type=\"submit\" name=\"tab_questions\" value=\"Questions\" /></li>\n"; }
//   else { echo "<li><input type=\"submit\" name=\"tab_questions\" value=\"Questions\" /></li>\n"; }
//   echo "&nbsp;\n";
//   if ($tab == "order") { echo "<li class=\"active\"><input type=\"submit\" name=\"tab_order\" value=\"Order\" /></li>\n"; }
//   else { echo "<li><input type=\"submit\" name=\"tab_order\" value=\"Order\" /></li>\n"; }
//   echo "&nbsp;\n";
//   if ($tab == "conditions") { echo "<li class=\"active\"><input type=\"submit\" name=\"tab_conditions\" value=\"Conditions\" /></li>\n"; }
//   else { echo "<li><input type=\"submit\" name=\"tab_conditions\" value=\"Conditions\" /></li>\n"; }
//   echo "&nbsp;\n";
//   if ($tab == "preview") { echo "<li class=\"active\"><input type=\"submit\" name=\"tab_preview\" value=\"Preview\" /></li>\n"; }
//   else { echo "<li><input type=\"submit\" name=\"tab_preview\" value=\"Preview\" /></li>\n"; }
//   echo "&nbsp;\n";
//   if ($tab == "finish") { echo "<li class=\"active\"><input type=\"submit\" name=\"tab_finish\" value=\"Finish\" /></li>\n"; }
//   else { echo "<li><input type=\"submit\" name=\"tab_finish\" value=\"Finish\" /></li>\n"; }
//   echo "</ul>\n";
//   echo "<br /><br />\n";
// }

function displayTabNav() {
  global $tab;
  displayTabNav1($tab);
  displayTabNav2($tab);
  displayTabNav3($tab);
}

function displayTabNav1($tab) {
  global $tab;
  // echo "<hr>\n";
  if ($tab == "general") { echo "<h4 class=\"text-muted\">Important information about your survey</h4>\n<p class=\"text-muted\">Please make sure you fill in all the required information in this page properly as they will be shown to respondents when they are invited to participate in your survey.</p>\n"; }
  elseif ($tab == "questions") { echo "<h4 class=\"text-muted\">Add questions and answers to your survey</h4>\n<p class=\"text-muted\">In ths section, you will be able to add new questions and answers as well as editing them. Translation should be inserted in this section as well. Remember you do not have to finish them in one-go. You can save and come back to update them anytime.</p>\n"; }
  elseif ($tab == "order") { echo "<h4 class=\"text-muted\">Order your questions in a logical flow</h4>\n<p class=\"text-muted\">All questions can be re-arranged/ re-ordered. You can simply change the order that questions are presented by selecting a question from the list. Then use the up/down buttons to change its position.</p>\n"; }
  elseif ($tab == "conditions") { echo "<h4 class=\"text-muted\">Adding specific conditions to your survey</h4>\n<p class=\"text-muted\">You may want to add specific conditions to some questions e.g. skip if answer \"no\". In order to do that, you just simply select a certain question which will be displayed only when a cerain value has been answered from another question. These logic settings can be defined by using these two tables below.</p>\n"; }
  elseif ($tab == "preview") { echo "<h4 class=\"text-muted\">Preview your survey</h4>\n<p class=\"text-muted\">This is a preview of how this survey will look (from a view of respondents). Please make sure you use this preview as much as possible to ensure you have the best design after all.</p>\n"; }
  elseif ($tab == "finish") { echo "<h4 class=\"text-muted\">Complete your survey design</h4>\n<p class=\"text-muted\">Congratulations, you have completed designing your survey.</p>\n"; }
}

function displayTabNav2($tab) {
  global $tab;
  echo "<p>\n";
  if ($tab == "general") { echo "  <input type=\"submit\" name=\"tab_general\" value=\"General\" class=\"btn btn-default active btn-sm\">\n"; }
  else { echo "  <input type=\"submit\" name=\"tab_general\" value=\"General\" class=\"btn btn-default btn-sm\">\n"; }
  echo "  <i class=\"pe-angle-double-right pe-fw\"></i>\n";
  if ($tab == "questions") { echo "  <input type=\"submit\" name=\"tab_questions\" value=\"Questions\" class=\"btn btn-default active btn-sm\">\n"; }
  else { echo "  <input type=\"submit\" name=\"tab_questions\" value=\"Questions\" class=\"btn btn-default btn-sm\">\n"; }
  echo "  <i class=\"pe-angle-double-right pe-fw\"></i>\n";
  if ($tab == "order") { echo "  <input type=\"submit\" name=\"tab_order\" value=\"Order\" class=\"btn btn-default active btn-sm\">\n"; }
  else { echo "  <input type=\"submit\" name=\"tab_order\" value=\"Order\" class=\"btn btn-default btn-sm\">\n"; }
  echo "  <i class=\"pe-angle-double-right pe-fw\"></i>\n";
  if ($tab == "conditions") { echo "  <input type=\"submit\" name=\"tab_conditions\" value=\"Conditions\" class=\"btn btn-default active btn-sm\">\n"; }
  else { echo "  <input type=\"submit\" name=\"tab_conditions\" value=\"Conditions\" class=\"btn btn-default btn-sm\">\n"; }
  echo "  <i class=\"pe-angle-double-right pe-fw\"></i>\n";
  if ($tab == "preview") { echo "  <input type=\"submit\" name=\"tab_preview\" value=\"Preview\" class=\"btn btn-default active btn-sm\">\n"; }
  else { echo "  <input type=\"submit\" name=\"tab_preview\" value=\"Preview\" class=\"btn btn-default btn-sm\">\n"; }
  echo "  <i class=\"pe-angle-double-right pe-fw\"></i>\n";
  if ($tab == "finish") { echo "  <input type=\"submit\" name=\"tab_finish\" value=\"Finish\" class=\"btn btn-default active btn-sm\">\n"; }
  else { echo "  <input type=\"submit\" name=\"tab_finish\" value=\"Finish\" class=\"btn btn-default btn-sm\">\n"; }
  echo "</p>\n";
}

function displayTabNav3($tab) {
  global $tab;
  echo "<p class=\"text-muted\">\n";
  if ($tab == "general") { echo "  <strong>General</strong> tab is all about survey information including title and other important descriptions\n"; }
  elseif ($tab == "questions") { echo "  <strong>Questions</strong> tab is where individual survey questions and their answers are added and modified.\n"; }
  elseif ($tab == "order") { echo "  <strong>Order</strong> tab is where the inserted questions can be rearranged/ reordered or even deleted\n"; }
  elseif ($tab == "conditions") { echo "  <strong>Conditions</strong> tab is for setting a specific questionnaire flow or skipping routes based on an answer.\n"; }
  elseif ($tab == "preview") { echo "  <strong>Preview</strong> tab shows how the questionnaire will look like. It is highly recommended to preview it as much as possible.\n"; }
  elseif ($tab == "finish") { echo "  <strong>Finish</strong> tab is the final tab where everything is done and your survey is ready to move to the next step, Live.\n"; }
  echo "</p>\n";
  echo "<hr>\n\n";
}

?>
