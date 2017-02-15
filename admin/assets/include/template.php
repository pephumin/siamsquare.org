<?php

function logo() {
  echo "<img src=\"/admin/assets/img/ssq.svg\" alt=\"SiamSquare Survey Engine by PE BINARY CO., LTD.\">";
}

function ssqlogo() {
  echo "<span class=\"ssqlogo1\">Siam</span><span class=\"ssqlogo2\">Square</span>";
}

function peblogo() {
  echo "<span class=\"logo1\"><i class=\"pe-logo\"></i></span> <span class=\"logo2\">pe</span><span class=\"logo3\">binary</span>";
}

function pageHeader($title) {
  $user = $_SESSION['email']; $avatar = $_SESSION['avatar'];
  if (isset($avatar)) { $show = "<img src=\"/admin/assets/img/u/$avatar.svg\" class=\"img-circle members-photo-tiny\" alt=\"Avatar\"> <kbd>$user</kbd>"; } else { $show = "<i class=\"pe-street-view pe-fw\"></i> <kbd>$user</kbd>"; }
  $v1 = ADMIN."?w=login"; $v2 = ADMIN."?w=logout"; $v3 = "http://www.pebinary.net/en/clients/";
  if ($_SESSION['logged_in']) {
    $signed = "<a href=\"$v2\" class=\"btn btn-warning btn-xs\" title=\"Log out\"><i class=\"pe-sign-out pe-fw\"></i> Log out</a> <a href=\"$v3\" class=\"btn btn-danger btn-xs\"><i class=\"pe-university pe-fw\"></i> Help</a>\n";
    $ww = "Logged in as $show";
  } else {
    $signed = "<a href=\"$v1\" class=\"btn btn-warning btn-xs\" title=\"Log in\"><i class=\"pe-power-off pe-fw\"></i> Log in</a> <a href=\"$v3\" class=\"btn btn-danger btn-xs\"><i class=\"pe-university pe-fw\"></i> Help</a>\n";
    $ww = "<span class=\"deepgreen\"><i class=\"pe-info-circle pe-fw\"></i> Authorised clients only</span>";
  }
  header("Content-language: en");
  header("Content-type: text/html; charset=utf-8");
  meta($title);
?>
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
        <h1><a href="<?php echo ADMIN; ?>" title="<?php echo MYDESC; ?>"><?php logo(); ?></a></h1>
        <p class="description"><?php echo SLOGANEN; ?></p>
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
<?php if ($_SESSION['logged_in'] == 1) { ?>
              <li><a href="<?php echo(ADMIN); ?>" title="<?php echo MYDESC; ?>"><i class="pe-home pe-fw"></i> Home</a></i>
              <li><a href="<?php echo(ADMIN."?w=surveys"); ?>" title="Research projects"><i class="pe-cubes pe-fw"></i> Projects</a></i>
              <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" role="button"><i class="pe-cogs pe-fw"></i> Setting <span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li><a href="<?php echo(ADMIN."?w=profile"); ?>" title="Profile"><i class="pe-user pe-fw"></i> Profile</a></li>
                  <li><a href="<?php echo(ADMIN."?w=team"); ?>" title="Team"><i class="pe-graduation-cap pe-fw"></i> Team</a></li>
<?php if ($_SESSION['level'] >= "6") { ?>
                  <li><a href="<?php echo(ADMIN."?w=company"); ?>" title="Company"><i class="pe-building pe-fw"></i> Company</a></li>
<?php } ?>
                </ul>
              </li>
              <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" role="button"><i class="pe-wrench pe-fw"></i> Tools <span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li><a href="<?php echo(ADMIN."?w=board"); ?>" title="Message board"><i class="pe-wpforms pe-fw"></i> Message board</a></li>
                  <li><a href="<?php echo(ADMIN."?w=activity"); ?>" title="Activity"><i class="pe-map-o pe-fw"></i> Activity</a></li>
                  <!-- <li><a href="<?php echo(ADMIN."?w=data2table"); ?>" title="Data to table"><i class="pe-table pe-fw"></i> Data to table</a></li> -->
                  <li role="separator" class="divider"></li>
                  <li><a href="<?php echo(ADMIN."contact/"); ?>" title="Contact us"><i class="pe-envelope-o pe-fw"></i> Contact us</a></li>
<?php //if ($_SESSION['level'] == "9") { ?>
                  <!-- <li role="separator" class="divider"></li> -->
                  <!-- <li><a href="<?php echo(ADMIN."?w=help"); ?>" title="Help"><i class="pe-question-circle pe-fw"></i> Help</a></li> -->
                  <!-- <li><a href="<?php echo(ADMIN."?w=api"); ?>" title="API commands"><i class="pe-code pe-fw"></i> API commands</a></li> -->
                  <!-- <li><a href="<?php echo(ADMIN."?w=todo"); ?>" title="Todo list"><i class="pe-tasks pe-fw"></i> Todo list</a></li> -->
<?php //} ?>
                </ul>
              </li>
<?php } else { ?>
              <li><a href="<?php echo ADMIN; ?>" title="<?php echo MYDESC; ?>"><i class="pe-home pe-fw"></i> Home</a></i>
              <li><a href="<?php echo(ADMIN."request/"); ?>" title="Request for an access"><i class="pe-credit-card pe-fw"></i> Request for an access</a></li>
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

function pageFooter($notes = null) {
?>
</main>
<footer>
  <div class="row">
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 footer-1">
      <div class="container">
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
        <h4 class="avatar">&#9836; &#9819; &#9962; &#10000; &#9820; &#9822; &#9973; &#9961;</h4>
      </div>
    </div>
  </div>
</footer>
<div class="scroll-to-top" style="display: block"><i class="pe-arrow-up pe-lg white"></i></div>
<script type="text/javascript" src="/admin/assets/js/etc.js"></script>
<?php if ($notes) { notify($notes); } ?>
<?php //debugOutput(); ?>
</body>
</html>
<?php
}

function notify($messages) {
?>
<script type="text/javascript">
  function notifyBox(title, text, image) { Notification({ title: title, text: text, image: image, inAnimation: "bounce", outAnimation: "zoomOut", position: 2 }); }
  function delayNext(title, text, image) { $(this).delay(2000).queue(function() { notifyBox(title, text, image); $(this).dequeue(); }); }
  $(document).ready(function() {
    var obj = JSON.parse ('<?php echo json_encode($messages) ?>');
     for (var i=0; i<obj.length; i++) {
       if (i == 0) { notifyBox(obj[i].title, obj[i].text, obj[i].image); } // show the first notification
       else { delayNext(obj[i].title, obj[i].text, obj[i].image); } // show the second one with 2 seconds delay
     }
  });
</script>
<?php
}

function debugOutput() {
  echo "<section class=\"container small\">\n";
  echo "  <div class=\"row\">\n";
  echo "    <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\n";
  echo "      <strong>GET</strong>\n";
  echo "      <pre><code class=\"r\">\n";
  print_r($_GET);
  echo "      </code></pre>\n";
  echo "      <strong>POST</strong>\n";
  echo "      <pre><code class=\"r\">\n";
  print_r($_POST);
  echo "      </code></pre>\n";
  echo "      <strong>REQUEST</strong>\n";
  echo "      <pre><code class=\"r\">\n";
  print_r($_REQUEST);
  echo "      </code></pre>\n";
  echo "      <strong>COOKIE</strong>\n";
  echo "      <pre><code class=\"r\">\n";
  print_r($_COOKIE);
  echo "      </code></pre>\n";
  echo "    </div>\n";
  echo "    <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\n";
  echo "      <strong>SID = ".session_id()."</strong>\n";
  echo "      <pre><code class=\"r\">\n";
  print_r($_SESSION);
  echo "      </code></pre>\n";
  echo "      <strong>FILES</strong>\n";
  echo "      <pre><code class=\"r\">\n";
  print_r($_FILES);
  echo "      </code></pre>\n";
  echo "    </div>\n";
  echo "  </div>\n";
  echo "</section>\n";
}

function w($w = null) {
  if (empty($w)) { $w = 'index'; }
  $where = strtolower(preg_replace('/ +/','_',$w));
  if (!preg_match('/^[A-Za-z0-9_]+$/',$w)) { $w = 'index'; }
  $filecheck = DOCROOT.'/admin/assets/include/w/'.$w.'.inc';
  if (!file_exists($filecheck)) { $w = 'index'; }
  // echo $filecheck;
  if (!file_exists($filecheck)) { echo('Unable to open include file. Check INI settings. Aborting.'); exit; }
  return ($filecheck);
}

?>
