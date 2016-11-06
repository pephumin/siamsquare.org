<?php

function logo() {
  echo "<img src=\"/members/assets/img/ssq.svg\" alt=\"SiamSquare Survey Engine by PE BINARY CO., LTD.\">";
}

function ssqlogo() {
  echo "<span class=\"ssqlogo1\">Siam</span><span class=\"ssqlogo2\">Square</span>";
}

function peblogo() {
  echo "<span class=\"logo1\"><i class=\"pe-logo\"></i></span> <span class=\"logo2\">pe</span><span class=\"logo3\">binary</span>";
}

function pageHeader($title) {
  $user = $_SESSION['email'];
  $show = "<i class=\"pe-street-view pe-fw\"></i> <kbd>$user</kbd>";
  $v1 = MYMEMBER."?w=login"; $v2 = MYMEMBER."?w=logout"; $v3 = "http://www.pebinary.net/th/members/";
  if ($_SESSION['email']) {
    $signed = "<a href=\"$v2\" class=\"btn btn-info btn-xs\" title=\"ออกจากระบบ\"><i class=\"pe-sign-out pe-fw\"></i> ออกจากระบบ</a> <a href=\"$v3\" class=\"btn btn-primary btn-xs\"><i class=\"pe-university pe-fw\"></i> ช่วยเหลือ</a>";
    $ww = "ยินดีต้อนรับ $show";
  } else {
    $signed = "<a href=\"$v1\" class=\"btn btn-info btn-xs\" title=\"เข้าสู่ระบบ\"><i class=\"pe-power-off pe-fw\"></i> เข้าสู่ระบบ</a> <a href=\"$v3\" class=\"btn btn-primary btn-xs\"><i class=\"pe-university pe-fw\"></i> ช่วยเหลือ</a>";
    $ww = "<i class=\"pe-info-circle pe-fw\"></i> สำหรับสมาชิกที่ลงทะเบียนไว้แล้วเท่านั้น";
  }
  header("Content-language: th");
  header("Content-type: text/html; charset=utf-8");
?>
<!doctype html>
<html lang="th">
<head>
  <meta charset="utf-8">
<?php if (($_REQUEST["w"]) == "logout") { echo "<meta http-equiv=\"refresh\" content=\"10; url=/members\">"; } ?>
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="handheldfriendly" content="true">
  <meta name="mobileoptimized" content="240">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">
  <title>SiamSquare: <?php echo $title; ?></title>
  <link rel="stylesheet" type="text/css" href="/members/assets/css/members.css">
  <link rel="stylesheet" type="text/css" href="/members/assets/css/survey.css">
  <link type="text/css" rel="stylesheet" href="https://www.gstatic.com/firebasejs/ui/live/0.5/firebase-ui-auth.css">
  <link rel="shortcut icon" type="image/x-icon" href="/members/assets/icons/favicon.ico">
  <link rel="apple-touch-icon" sizes="57x57" href="/members/assets/icons/apple-icon-57x57.png">
  <link rel="apple-touch-icon" sizes="60x60" href="/members/assets/icons/apple-icon-60x60.png">
  <link rel="apple-touch-icon" sizes="72x72" href="/members/assets/icons/apple-icon-72x72.png">
  <link rel="apple-touch-icon" sizes="76x76" href="/members/assets/icons/apple-icon-76x76.png">
  <link rel="apple-touch-icon" sizes="114x114" href="/members/assets/icons/apple-icon-114x114.png">
  <link rel="apple-touch-icon" sizes="120x120" href="/members/assets/icons/apple-icon-120x120.png">
  <link rel="apple-touch-icon" sizes="144x144" href="/members/assets/icons/apple-icon-144x144.png">
  <link rel="apple-touch-icon" sizes="152x152" href="/members/assets/icons/apple-icon-152x152.png">
  <link rel="apple-touch-icon" sizes="180x180" href="/members/assets/icons/apple-icon-180x180.png">
  <link rel="icon" type="image/png" sizes="192x192"  href="/members/assets/icons/android-icon-192x192.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/members/assets/icons/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="96x96" href="/members/assets/icons/favicon-96x96.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/members/assets/icons/favicon-16x16.png">
  <link rel="manifest" href="/members/assets/icons/manifest.json">
  <meta name="msapplication-TileColor" content="#FFFFFF">
  <meta name="msapplication-TileImage" content="/members/assets/icons/ms-icon-144x144.png">
  <meta name="theme-color" content="#FFFFFF">
  <script type="text/javascript" src="/members/assets/js/jquery-2.1.4.min.js"></script>
  <script type="text/javascript" src="/members/assets/js/bootstrap.js"></script>
  <script type="text/javascript" src="/members/assets/js/jquery.steps.js"></script>
  <script type="text/javascript" src="/members/assets/js/moment.js"></script>
  <script type="text/javascript" src="/members/assets/js/fv/formValidation.min.js"></script>
  <script type="text/javascript" src="/members/assets/js/fv/bootstrap.min.js"></script>
  <script type="text/javascript" src="/members/assets/js/survey/knockout.js"></script>
  <script type="text/javascript" src="/members/assets/js/survey/ace/ace.js"></script>
  <script type="text/javascript" src="/members/assets/js/survey/ace/worker-json.js"></script>
  <script type="text/javascript" src="/members/assets/js/survey/ace/mode-json.js"></script>
  <script type="text/javascript" src="/members/assets/js/survey/survey.ko.js"></script>
  <script type="text/javascript" src="/members/assets/js/survey/globalize.min.js"></script>
  <script type="text/javascript" src="/members/assets/js/survey/dx.chartjs.js"></script>
  <script type="text/javascript" src="https://www.gstatic.com/firebasejs/3.4.1/firebase.js"></script>
  <!-- <script type="text/javascript" src="https://www.gstatic.com/firebasejs/ui/live/0.5/firebase-ui-auth.js"></script> -->
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
        <h1><a href="<?php echo MYMEMBER; ?>" title="<?php echo MYDESC; ?>"><?php logo(); ?></a></h1>
        <p class="description">เพราะทุกเสียงของคุณมีความหมายสำหรับเรา</p>
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
<?php if ($_SESSION['email']) { ?>
              <li><a href="<?php echo MYMEMBER; ?>" title="<?php echo MYDESC; ?>"><i class="pe-home pe-fw"></i> หน้าแรก</a></i>
              <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" role="button"><i class="pe-cubes pe-fw"></i> งานวิจัย <span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li class="dropdown-header">ภาพรวมงานวิจัย</li>
                  <li><a href="<?php echo(MYMEMBER."?w=surveys"); ?>"><i class="pe-wpforms pe-fw"></i> งานวิจัยทั้งหมด</a></li>
                  <li role="separator" class="divider"></li>
                  <li class="dropdown-header">รายละเอียด</li>
                  <li><a href="<?php echo(MYMEMBER."?w=surveys&c=A"); ?>"><i class="pe-hourglass-start pe-fw"></i> งานวิจัยที่เปิดรับความคิดเห็นอยู่</a></li>
                  <li><a href="<?php echo(MYMEMBER."?w=surveys&c=B"); ?>"><i class="pe-hourglass-half pe-fw"></i> งานวิจัยที่ปิดรับความคิดเห็นแล้ว</a></li>
                </ul>
              </li>
              <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" role="button"><i class="pe-user pe-fw"></i> ข้อมูลส่วนตัว <span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li class="dropdown-header">Your activity</li>
                  <li><a href="<?php echo(MYMEMBER."?w=activity"); ?>" title="View activity"><i class="pe-tv pe-fw"></i> View activity</a></li>
                  <li role="separator" class="divider"></li>
                  <li class="dropdown-header">เปลี่ยนแปลงข้อมูลส่วนตัว</li>
                  <li><a href="<?php echo(MYMEMBER."?w=changeinfo"); ?>" title="Change info"><i class="pe-cog pe-fw"></i> แก้ไขข้อมูลส่วนตัว</a></li>
                  <li><a href="<?php echo(MYMEMBER."?w=changepass"); ?>" title="Change password"><i class="pe-key pe-fw"></i> เปลี่ยนรหัสผ่าน</a></li>
                </ul>
              </li>
              <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" role="button"><i class="pe-trophy pe-fw"></i> คะแนน <span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li class="dropdown-header">คะแนนสะสมและของรางวัล</li>
                  <li><a href="" title="ยอดคะแนนสะสม"><i class="pe-diamond pe-fw"></i> ยอดคะแนนสะสม</a></li>
                  <li><a href="" title="ของรางวัล"><i class="pe-gift pe-fw"></i> ของรางวัล</a></li>
                </ul>
              </li>
<?php } else { ?>
              <li><a href="<?php echo MYMEMBER; ?>" title="<?php echo MYDESC; ?>"><i class="pe-home pe-fw"></i> หน้าแรก</a></i>
              <li><a href="<?php echo(MYMEMBER."signup.php"); ?>" title="สมัครสมาชิก"><i class="pe-user-plus pe-fw"></i> สมัครสมาชิก</a></li>
              <li><a href="<?php echo(MYMEMBER."contact.php"); ?>" title="ติดต่อเรา"><i class="pe-envelope-o pe-fw"></i> ติดต่อเรา</a></li>
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
        <h4 class="avatar">&#9836; &#9819; &#9962; &#9969; &#9748; &#10000; &#10175; &#9820; &#9822; &#9731; &#9973; &#8485; &#8488; &#8523; &#8492; &#9961;</h4>
      </div>
    </div>
  </div>
</footer>
<div class="scroll-to-top"><i class="pe-arrow-up pe-lg"></i></div>
<script type="text/javascript" src="/members/assets/js/anchor.js"></script>
<script type="text/javascript" src="/members/assets/js/notification.js"></script>
<script type="text/javascript" src="/members/assets/js/etc.js"></script>
<script type="text/javascript">
  var config = {
    apiKey: "AIzaSyBhLjEc1SwSq06Pg494R6pdM2NqLHF8Ag0",
    authDomain: "siamsquare-6f543.firebaseapp.com",
    databaseURL: "https://siamsquare-6f543.firebaseio.com",
    storageBucket: "siamsquare-6f543.appspot.com",
    messagingSenderId: "485767684184"
  };
  firebase.initializeApp(config);
</script>
<script type="text/javascript">
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-82554411-3', 'auto');
  ga('send', 'pageview');
</script>
<?php if ($notes) { notify($notes); } ?>
<?php debugOutput(); ?>
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

function debugOutput() {
  echo "<section class=\"container\"><div class=\"row\"><div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\n";
  echo "<pre>\n";
  echo "<strong>POST</strong>\n";
  print_r($_POST);
  echo "</pre>\n";
  echo "<pre>\n";
  echo "<strong>GET</strong>\n";
  print_r($_GET);
  echo "</pre>\n";
  echo "<pre>\n";
  echo "<strong>REQUEST</strong>\n";
  print_r($_REQUEST);
  echo "</pre>\n";
  echo "<pre>\n";
  echo "<strong>COOKIE</strong>\n";
  print_r($_COOKIE);
  echo "</pre>\n";
  echo "</div>\n";
  echo "<div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\n";
  echo "<pre>\n";
  echo "<strong>SID = ".session_id()."</strong>\n";
  print_r($_SESSION);
  echo "</pre>\n";
  echo "</div>\n";
  echo "</div></div></section>\n";
}

function w($w = null) {
  if (empty($w)) { $w = 'index'; }
  $where = strtolower(preg_replace('/ +/','_',$w));
  if (!preg_match('/^[A-Za-z0-9_]+$/',$w)) { $w = 'index'; }
  $filecheck = $_SERVER['DOCUMENT_ROOT'].'/members/assets/include/w/'.$w.'.inc';
  if (!file_exists($filecheck)) { $w = 'index'; }
  // echo $filecheck;
  if (!file_exists($filecheck)) { echo('Unable to open include file. Check INI settings. Aborting.'); exit; }
  return ($filecheck);
}

function mksuccess ($msg) {
  return("<div class=\"alert alert-success alert-dismissible\" role=\"alert\"><a class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a><i class=\"pe-check-square-o\"></i>&nbsp; ${msg}</div>\n");
}

function mkinfo ($msg) {
  return("<div class=\"alert alert-info alert-dismissible\" role=\"alert\"><a class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a><i class=\"pe-info-circle\"></i>&nbsp; ${msg}</div>\n");
}

function mkwarn ($msg) {
  return("<div class=\"alert alert-warning alert-dismissible\" role=\"alert\"><a class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a><i class=\"pe-bullhorn\"></i>&nbsp; ${msg}</div>\n");
}

function mkerror ($msg) {
  return("<div class=\"alert alert-danger alert-dismissible\" role=\"alert\"><a class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a><i class=\"pe-exclamation-circle\"></i>&nbsp; ${msg}</div>\n");
}

function getip() {
  $ipaddress = '';
  if (getenv('HTTP_CLIENT_IP')) { $ipaddress = getenv('HTTP_CLIENT_IP'); }
  else if(getenv('HTTP_X_FORWARDED_FOR')) { $ipaddress = getenv('HTTP_X_FORWARDED_FOR'); }
  else if(getenv('HTTP_X_FORWARDED')) { $ipaddress = getenv('HTTP_X_FORWARDED'); }
  else if(getenv('HTTP_FORWARDED_FOR')) { $ipaddress = getenv('HTTP_FORWARDED_FOR'); }
  else if(getenv('HTTP_FORWARDED')) { $ipaddress = getenv('HTTP_FORWARDED'); }
  else if(getenv('REMOTE_ADDR')) { $ipaddress = getenv('REMOTE_ADDR'); }
  return $ipaddress;
}

function generateRandom($length = 6, $vals = 'abchefghjkmnpqrstuvwxyz0123456789') {
  $s = "";

  while(strlen($s) < $length) {
    mt_getrandmax();
    $num = rand() % strlen($vals);
    $s .= substr($vals, $num+4, 1);
  }
  return $s;
}

function randomColor() {
  $red = rand(0, 255);
  $green = rand(0, 255);
  $blue = rand(0, 255);
  return sprintf("#%x%x%x", $red, $green, $blue);
}

function stringToSVG($str) {
  $result = '';
  $glyphs = array();
  $x = 5;
  $y = 30;

  //generates glyphs
  for ($i=0; $i<strlen($str); $i++) {
    $rotation = rand(-20, 20); //rotation degree
    $size = rand (20, 25); //size in pixels
    $jump = rand(-5, 5); //shift up or down by a number of pixels
    $color = randomColor();
    $glyph = sprintf('<text style="fill: %s;" x="%d" y="%d" font-size="%d" transform="translate(%d, %d) rotate(%d) translate(-%d, -%d)">%s</text>%s', $color, $x, $y + $jump, $size, $x, $y + $jump, $rotation, $x, $y + $jump, $str[$i], "\n");
    $glyphs[] = $glyph;
    $x += 20; //move carret
  }

  $indexes = range(0, count($glyphs) - 1);
  shuffle($indexes); //now shuffle them
  foreach($indexes as $index) { $result .= $glyphs[$index]; }
  return $result;
}

function captchaimage($text) {
  $captcha_width = 200;
  $captcha_height = 40;
  header("Expires: Wed, 1 Jan 1997 00:00:00 GMT");
  header("Last-Modified: " . gmdate("D, d M Y H:i:s") . " GMT");
  header("Cache-Control: no-store, no-cache, must-revalidate");
  header("Cache-Control: post-check=0, pre-check=0", false);
  header("Pragma: no-cache");
  header ("Content-type: image/svg+xml");
  printf('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" width="200" height="40">', CAPTCHA_WIDTH, CAPTCHA_HEIGHT);
  printf(' <rect x="0" y="0" width="%d" height="%d" style="stroke: none; fill: none;" ></rect> ', $captcha_width, $captcha_height);
  print stringToSVG($text);
  print '</svg>';
}

function cleanstring($string) {
  $bad = array("content-type","bcc:","to:","cc:","href");
  return str_replace($bad,"", $string);
}

function ago($datetime, $depth=1) {
  $units = array("year"=>31104000, "month"=>2592000, "week"=>604800, "day"=>86400, "hour"=>3600, "minute"=>60, "second"=>1 );
  $plural = "s";
  $conjugator = " and ";
  $separator = ", ";
  $suffix1 = " ago";
  $suffix2 = " left";
  $now = "now";
  $empty = "";

  $timediff = time()-strtotime($datetime);
  if ($timediff == 0) return $now;
  if ($depth < 1) return $empty;
  $max_depth = count($units);
  $remainder = abs($timediff);
  $output = "";
  $count_depth = 0;
  $fix_depth = true;

  foreach ($units as $unit=>$value) {
    if ($remainder>$value && $depth-->0) {
      if ($fix_depth) {
        $max_depth -= ++$count_depth;
        if ($depth>=$max_depth) $depth=$max_depth;
        $fix_depth = false;
      }
      $u = (int)($remainder/$value);
      $remainder %= $value;
      $pluralise = $u>1?$plural:$empty;
      $separate = $remainder==0||$depth==0?$empty:
        ($depth==1?$conjugator:$separator);
      $output .= "{$u} {$unit}{$pluralise}{$separate}";
    }
    $count_depth++;
  }
  return $output.($timediff<0?$suffix2:$suffix1);
}


?>
