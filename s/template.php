<?php

function logo() {
  echo "<img src=\"../admin/assets/img/ssq.svg\" alt=\"SiamSquare Survey Engine by PE BINARY CO., LTD.\">";
}

function ssqlogo() {
  echo "<span class=\"ssqlogo1\">Siam</span><span class=\"ssqlogo2\">Square</span>";
}

function peblogo() {
  echo "<span class=\"logo1\"><i class=\"pe-logo\"></i></span> <span class=\"logo2\">pe</span><span class=\"logo3\">binary</span>";
}

function pageHeader($title) {
?>
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title><?php echo $title; ?></title>
  <link rel="stylesheet" type="text/css" href="../admin/assets/css/main.css">
  <!-- <link rel="stylesheet" type="text/css" href="css/2/survey.css"> -->
  <link rel="stylesheet" type="text/css" href="css/2/surveyeditor.css">
  <link rel="shortcut icon" type="image/x-icon" href="../admin/assets/icons/favicon.ico">
  <script type="text/javascript" src="../admin/assets/js/jquery-2.1.4.min.js"></script>
  <script type="text/javascript" src="../admin/assets/js/bootstrap.js"></script>
  <script type="text/javascript" src="../admin/assets/js/jquery-ui.min.js"></script>
  <script type="text/javascript" src="../admin/assets/js/jquery.steps.js"></script>
  <script type="text/javascript" src="js/knockout.js"></script>
  <script type="text/javascript" src="js/2/survey.bootstrap.js"></script>
  <script type="text/javascript" src="js/2/surveyeditor.js"></script>
  <script type="text/javascript" src="js/ace/ace.js"></script>
  <script type="text/javascript" src="js/ace/worker-json.js"></script>
  <script type="text/javascript" src="js/ace/mode-json.js"></script>
  <script type="text/javascript" src="http://ajax.aspnetcdn.com/ajax/globalize/0.1.1/globalize.min.js"></script>
  <script type="text/javascript" src="http://cdn3.devexpress.com/jslib/15.1.5/js/dx.chartjs.js"></script>
</head>
<body>
<header>
  <div class="row">
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 header-1">
      <div class="container">
        <a href="http://www.siamsquare.org/admin/?w=login" class="btn btn-warning btn-xs" title="Log in"><i class="pe-power-off pe-fw"></i> Log in</a> <a href="http://www.pebinary.net/en/clients/" class="btn btn-danger btn-xs"><i class="pe-university pe-fw"></i> Help</a>
      </div>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 header-2">
      <div class="container">
        <h1><a href="http://www.siamsquare.org/admin/" title="SiamSquare Survey Engine by PE BINARY CO., LTD."><img src="../admin/assets/img/ssq.svg" alt="SiamSquare Survey Engine by PE BINARY CO., LTD."></a></h1>
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
            <span class="navbar-brand"><i class="pe-exclamation-triangle pe-fw"></i> Authorised clients only</span>
          </div>
          <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav navbar-right">
              <li><a href="http://www.siamsquare.org/admin/" title="SiamSquare Survey Engine by PE BINARY CO., LTD."><i class="pe-home pe-fw"></i> Home</a></i>
              <li><a href="http://www.siamsquare.org/admin/request.php" title="Request for an access"><i class="pe-ticket pe-fw"></i> Request for an access</a></li>
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
        <h4 class="avatar">&#9836; &#9819; &#9962; &#9969; &#9748; &#10000; &#10175; &#9820; &#9822; &#9731; &#9973; &#8485; &#8488; &#8523; &#8492; &#9961;</h4>
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
<?php
if ($notes) { notify($notes); }
?>
</body>
</html>
<?php
}

?>
