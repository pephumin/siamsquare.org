<?php

$user = $_SESSION['email']; $avatar = $_SESSION['avatar'];

function logo() {
  echo "<img src=\"/admin/assets/img/ssq-horizontal.svg\" alt=\"SiamSquare Survey Engine by PE BINARY CO., LTD.\">";
}

function ssqlogo() {
  echo "<span class=\"ssqlogo1\">Siam</span><span class=\"ssqlogo2\">Square</span>";
}

function peblogo() {
  echo "<span class=\"logo1\"><i class=\"pe-logo\"></i></span> <span class=\"logo2\">pe</span><span class=\"logo3\">binary</span>";
}

function pageHeader($title) {
  global $showtopper, $shownavbar;
  header("Content-language: en");
  header("Content-type: text/html; charset=utf-8");
  meta($title);
?>
<body>
<header>
<?php if ($showtopper == 2) { topheader(); } ?>
<?php if ($shownavbar == 2) { navbarB(); } ?>
  <div class="row header-2">
    <div class="container">
      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6"><h1><a href="<?php echo MYHOME; ?>" title="<?php echo MYDESC; ?>"><?php logo(); ?></a></h1></div>
      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6"><h4 class="pull-right">ร่วมแสดงความคิดเห็น <i class="pe-comments-o"></i></h4></div>
    </div>
  </div>
  <div class="row header-3">
<?php if ($shownavbar == 3) { navbarB(); } else if ($shownavbar == 4) { navbarA(); } ?>
  </div>
</header>
<main class="container">
<?php
}

function topheader() {
  $v1 = ADMIN."?w=login"; $v2 = ADMIN."?w=logout"; $v3 = "http://www.pebinary.net/en/clients/";
  $v1 = MEMBERS."?w=login"; $v2 = MEMBERS."?w=logout"; $v3 = "http://www.pebinary.net/th/members/";
  if ($_SESSION['logged_in'] == 1) { $signed = "<a href=\"$v2\" class=\"btn btn-info btn-tiny\" title=\"ออกจากระบบ\"><i class=\"pe-sign-out pe-fw\"></i> ออกจากระบบ</a> <a href=\"$v3\" class=\"btn btn-primary btn-tiny\"><i class=\"pe-university pe-fw\"></i> ช่วยเหลือ</a>"; }
  else { $signed = "<a href=\"$v1\" class=\"btn btn-info btn-tiny\" title=\"เข้าสู่ระบบ\"><i class=\"pe-power-off pe-fw\"></i> เข้าสู่ระบบ</a> <a href=\"$v3\" class=\"btn btn-primary btn-tiny\"><i class=\"pe-university pe-fw\"></i> ช่วยเหลือ</a>"; }
?>
  <div class="row header-1">
    <div class="container">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <?php echo $signed; ?>
      </div>
    </div>
  </div>
<?php
}

function navbarA() {
  $user = $_SESSION['email']; $avatar = $_SESSION['avatar'];
  if (isset($avatar)) { $show = "<img src=\"/admin/assets/img/u/$avatar.svg\" class=\"img-circle members-photo-tiny\" alt=\"Avatar\"> <kbd>$user</kbd>"; } else { $show = "<i class=\"pe-street-view pe-fw\"></i> <kbd>$user</kbd>"; }
  if ($_SESSION['logged_in'] == 1) { $ww = "บัญชีของคุณคือ $show"; }
  else { $ww = "<span class=\"deepgreen\"><i class=\"pe-info-circle pe-fw\"></i> สำหรับผู้ที่เป็นสมาชิกเท่านั้น</span>"; }
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
              <li><a href="<?php echo MEMBERS; ?>" title="<?php echo MYDESC; ?>"><i class="pe-home pe-fw"></i> หน้าแรก</a></li>
              <li><a href="<?php echo(MEMBERS."signup.php"); ?>" title="สมัครสมาชิก"><i class="pe-user-plus pe-fw"></i> สมัครสมาชิก</a></li>
              <li><a href="<?php echo(MEMBERS."contact.php"); ?>" title="ติดต่อเรา"><i class="pe-envelope-o pe-fw"></i> ติดต่อเรา</a></li>
<?php } ?>
            </ul>
          </div>
        </div>
      </nav>
<?php
}

function navbarB() {
  $user = $_SESSION['email']; $avatar = $_SESSION['avatar'];
  if (isset($avatar)) { $show = "<img src=\"/admin/assets/img/u/$avatar.svg\" class=\"img-circle members-photo-tiny\" alt=\"Avatar\"> <kbd>$user</kbd>"; } else { $show = "<i class=\"pe-street-view pe-fw\"></i> <kbd>$user</kbd>"; }
  if ($_SESSION['logged_in'] == 1) { $ww = "บัญชีของคุณคือ $show"; }
  else { $ww = "<span class=\"deepgreen\"><i class=\"pe-info-circle pe-fw\"></i> สำหรับผู้ที่เป็นสมาชิกเท่านั้น</span>"; }
  // echo "      <div class=\"container\" style=\"text-align:right; margin: 10px auto\"><span>$ww</span></div>\n";
?>
      <nav class="navbar navbar-default navbar-static-top">
        <div class="container">
          <div id="navbar" class="navbar-collapse collapse">
            <span class="nav navbar-nav navbar-right"><?php echo $ww; ?></span>
          </div>
        </div>
      </nav>
<?php
}

function pageFooter($project = null, $notes = null) {
?>
</main>
<footer>
  <div class="row footer-1">
    <div class="container">
      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 footer-1A"></div>
      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 footer-1B">Internal use only - <?php if ($project) { echo "P. ".$project." (#PEB".date("Ym").str_pad($_GET['s'], 6, '0', STR_PAD_LEFT).")"; } ?></div>
    </div>
  </div>
  <div class="row footer-2">
    <div class="container">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <a href="<?php echo MYHOME; ?>" class="footerlogo-ssq" title="<?php echo MYDESC; ?>"><?php ssqlogo(); ?></a> by
        <a href="http://www.pebinary.com" class="footerlogo" title="PE BINARY CO., LTD."><?php peblogo(); ?></a><br>
        <i class="pe-copyright"></i> Copyright 2016, All rights reserved.<br>
      </div>
    </div>
  </div>
  <div class="row footer-3">
    <div class="container">
      <nav class="footer">
        <ul class="list-inline" itemscope itemtype="http://schema.org/SiteNavigationElement">
          <li class="footerth"><a href="http://www.pebinary.com/about/privacy.html" title="นโยบายความเป็นส่วนตัว" itemprop="url"><i class="pe-lock"></i> <span class="hidden-md hidden-lg" itemprop="name">นโยบายส่วนบุคคล</span><span class="hidden-xs hidden-sm" itemprop="name">นโยบายส่วนบุคคล</span></a>&nbsp;</li>
          <li class="footerth"><a href="http://www.pebinary.com/about/tos.html" title="ข้อกำหนดในการให้บริการ" itemprop="url"><i class="pe-gavel"></i> <span class="hidden-md hidden-lg" itemprop="name">ข้อกำหนดการให้บริการ</span><span class="hidden-xs hidden-sm" itemprop="name">ข้อกำหนดในการให้บริการ</span></a>&nbsp;</li>
          <li class="footerth"><a href="http://www.pebinary.com/about/terms.html" title="ข้อกำหนดและเงื่อนไขต่างๆ" itemprop="url"><i class="pe-balance-scale"></i> <span class="hidden-md hidden-lg" itemprop="name">ข้อกำหนดและเงื่อนไข</span><span class="hidden-xs hidden-sm" itemprop="name">ข้อกำหนดและเงื่อนไขต่างๆ</span></a>&nbsp;</li>
          <li class="footerth"><a href="http://www.pebinary.com/" title="กลับไปยังเว็บไซต์หลักของเรา" itemprop="url"><i class="pe-arrow-circle-left"></i> <span class="hidden-md hidden-lg" itemprop="name">กลับ</span><span class="hidden-xs hidden-sm" itemprop="name">กลับไปยังเว็บไซต์หลักของเรา</span></a>&nbsp;</li>
        </ul>
      </nav>

    </div>
  </div>
</footer>
<div class="scroll-to-top"><i class="pe-arrow-up pe-lg white"></i></div>
<script type="text/javascript" src="/members/assets/js/etc.js"></script>
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
  $filecheck = DOCROOT.'/members/assets/include/w/'.$w.'.inc';
  if (!file_exists($filecheck)) { $w = 'index'; }
  // echo $filecheck;
  if (!file_exists($filecheck)) { echo('Unable to open include file. Check INI settings. Aborting.'); exit; }
  return ($filecheck);
}

?>
