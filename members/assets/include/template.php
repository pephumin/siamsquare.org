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
  $user = $_SESSION['email']; $avatar = $_SESSION['avatar'];
  // if (isset($avatar)) { $show = "<img src=\"/admin/$avatar\" class=\"img-circle members-photo-tiny\" alt=\"Avatar\"> <kbd>$user</kbd>"; } else { $show = "<i class=\"pe-street-view pe-fw\"></i> <kbd>$user</kbd>"; }
  $v1 = ADMIN."?w=login"; $v2 = ADMIN."?w=logout"; $v3 = "http://www.pebinary.net/en/clients/";
  $v1 = MEMBERS."?w=login"; $v2 = MEMBERS."?w=logout"; $v3 = "http://www.pebinary.net/th/members/";
  if ($_SESSION['logged_in']) {
    $signed = "<a href=\"$v2\" class=\"btn btn-info btn-xs\" title=\"ออกจากระบบ\"><i class=\"pe-sign-out pe-fw\"></i> ออกจากระบบ</a> <a href=\"$v3\" class=\"btn btn-primary btn-xs\"><i class=\"pe-university pe-fw\"></i> ช่วยเหลือ</a>";
    $ww = "ยินดีต้อนรับ $show";
  } else {
    $signed = "<a href=\"$v1\" class=\"btn btn-info btn-xs\" title=\"เข้าสู่ระบบ\"><i class=\"pe-power-off pe-fw\"></i> เข้าสู่ระบบ</a> <a href=\"$v3\" class=\"btn btn-primary btn-xs\"><i class=\"pe-university pe-fw\"></i> ช่วยเหลือ</a>";
    $ww = "<i class=\"pe-info-circle pe-fw\"></i> สำหรับสมาชิกที่ลงทะเบียนไว้แล้วเท่านั้น";
  }
  header("Content-language: en");
  header("Content-type: text/html; charset=utf-8");
?>
<!doctype html>
<html lang="th">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="handheldfriendly" content="true">
  <meta name="mobileoptimized" content="240">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">
  <title><?php echo MYTITLE.": ".$title; ?></title>
  <link rel="stylesheet" type="text/css" href="/members/assets/css/members.css">
  <link rel="stylesheet" type="text/css" href="/admin/assets/css/survey.css">
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
  <script type="text/javascript" src="/admin/assets/js/jquery-2.1.4.min.js"></script>
  <script type="text/javascript" src="/admin/assets/js/bootstrap.min.js"></script>
  <script type="text/javascript" src="/admin/assets/js/jquery.steps.js"></script>
  <script type="text/javascript" src="/admin/assets/js/moment.js"></script>
  <script type="text/javascript" src="/admin/assets/js/jquery-csv.js"></script>
  <script type="text/javascript" src="/admin/assets/js/csv.js"></script>
  <script type="text/javascript" src="/admin/assets/js/highlight.js"></script>
  <script type="text/javascript" src="/admin/assets/js/lightbox.js"></script>
  <script type="text/javascript" src="/admin/assets/js/fv/formValidation.min.js"></script>
  <script type="text/javascript" src="/admin/assets/js/fv/bootstrap.min.js"></script>
  <script type="text/javascript" src="/admin/assets/js/survey/knockout.js"></script>
  <script type="text/javascript" src="/admin/assets/js/survey/ace/ace.js"></script>
  <script type="text/javascript" src="/admin/assets/js/survey/ace/worker-json.js"></script>
  <script type="text/javascript" src="/admin/assets/js/survey/ace/mode-json.js"></script>
  <script type="text/javascript" src="/admin/assets/js/survey/survey.ko.js"></script>
  <!-- <script type="text/javascript" src="/admin/assets/js/survey/surveyeditor.js"></script> -->
<?php // if (($_REQUEST["w"]) == "template") { echo "  <script type=\"text/javascript\" src=\"/admin/assets/js/tinymce/tinymce.min.js\"></script>"; } ?>
  <script type="text/javascript" src="https://www.gstatic.com/firebasejs/3.4.1/firebase.js"></script>
  <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
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
        <h1><a href="<?php echo MEMBERS; ?>" title="<?php echo MYDESC; ?>"><?php logo(); ?></a></h1>
        <p class="description"><?php echo SLOGANTH; ?></p>
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
              <li><a href="<?php echo MEMBERS; ?>" title="<?php echo MYDESC; ?>"><i class="pe-home pe-fw"></i> หน้าแรก</a></i>
              <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" role="button"><i class="pe-cubes pe-fw"></i> งานวิจัย <span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li class="dropdown-header">ภาพรวมงานวิจัย</li>
                  <li><a href="<?php echo(MEMBERS."?w=surveys"); ?>"><i class="pe-wpforms pe-fw"></i> งานวิจัยทั้งหมด</a></li>
                  <li role="separator" class="divider"></li>
                  <li class="dropdown-header">รายละเอียด</li>
                  <li><a href="<?php echo(MEMBERS."?w=surveys&c=A"); ?>"><i class="pe-hourglass-start pe-fw"></i> งานวิจัยที่เปิดรับความคิดเห็นอยู่</a></li>
                  <li><a href="<?php echo(MEMBERS."?w=surveys&c=B"); ?>"><i class="pe-hourglass-half pe-fw"></i> งานวิจัยที่ปิดรับความคิดเห็นแล้ว</a></li>
                </ul>
              </li>
              <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" role="button"><i class="pe-user pe-fw"></i> ข้อมูลส่วนตัว <span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li class="dropdown-header">Your activity</li>
                  <li><a href="<?php echo(MEMBERS."?w=activity"); ?>" title="View activity"><i class="pe-tv pe-fw"></i> View activity</a></li>
                  <li role="separator" class="divider"></li>
                  <li class="dropdown-header">เปลี่ยนแปลงข้อมูลส่วนตัว</li>
                  <li><a href="<?php echo(MEMBERS."?w=changeinfo"); ?>" title="Change info"><i class="pe-cog pe-fw"></i> แก้ไขข้อมูลส่วนตัว</a></li>
                  <li><a href="<?php echo(MEMBERS."?w=changepass"); ?>" title="Change password"><i class="pe-key pe-fw"></i> เปลี่ยนรหัสผ่าน</a></li>
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
              <li><a href="<?php echo MEMBERS; ?>" title="<?php echo MYDESC; ?>"><i class="pe-home pe-fw"></i> หน้าแรก</a></i>
              <li><a href="<?php echo(MEMBERS."signup.php"); ?>" title="สมัครสมาชิก"><i class="pe-user-plus pe-fw"></i> สมัครสมาชิก</a></li>
              <li><a href="<?php echo(MEMBERS."contact.php"); ?>" title="ติดต่อเรา"><i class="pe-envelope-o pe-fw"></i> ติดต่อเรา</a></li>
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
<div class="scroll-to-top"><i class="pe-arrow-up pe-lg white"></i></div>
<script type="text/javascript" src="/members/assets/js/etc.js"></script>
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
  echo "      <pre class=\"verysmall\"><code class=\"prettyprint\">\n";
  print_r($_GET);
  echo "      </code></pre>\n";
  echo "      <strong>POST</strong>\n";
  echo "      <pre class=\"verysmall\"><code class=\"prettyprint\">\n";
  print_r($_POST);
  echo "      </code></pre>\n";
  echo "      <strong>REQUEST</strong>\n";
  echo "      <pre class=\"verysmall\"><code class=\"prettyprint\">\n";
  print_r($_REQUEST);
  echo "      </code></pre>\n";
  echo "      <strong>COOKIE</strong>\n";
  echo "      <pre class=\"verysmall\"><code class=\"prettyprint\">\n";
  print_r($_COOKIE);
  echo "      </code></pre>\n";
  echo "    </div>\n";
  echo "    <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\n";
  echo "      <strong>SID = ".session_id()."</strong>\n";
  echo "      <pre class=\"verysmall\"><code class=\"prettyprint\">\n";
  print_r($_SESSION);
  echo "      </code></pre>\n";
  echo "      <strong>FILES</strong>\n";
  echo "      <pre class=\"verysmall\"><code class=\"prettyprint\">\n";
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
  $filecheck = DOCROOT.'/members/assets/include/w/'.$w.'.inc';
  if (!file_exists($filecheck)) { $w = 'index'; }
  // echo $filecheck;
  if (!file_exists($filecheck)) { echo('Unable to open include file. Check INI settings. Aborting.'); exit; }
  return ($filecheck);
}

?>
