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
  meta($title);
  echo "<body>\n";
  echo "<header>\n";
  echo "  <div class=\"row\">\n";
  echo "    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 header-1\">\n";
  echo "      <div class=\"container\">$signed</div>\n";
  echo "    </div>\n";
  echo "    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 header-2\">\n";
  echo "      <div class=\"container\">\n";
  echo "        <h1><a href=\"".MEMBERS."\" title=\"".MYDESC."\">";
  logo();
  echo "</a></h1>\n";
  echo "        <p class=\"description\">".SLOGANTH."</p>\n";
  echo "      </div>\n";
  echo "    </div>\n";
  echo "    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 header-3\">\n";
  echo "      <nav class=\"navbar navbar-default navbar-static-top\">\n";
  echo "        <div class=\"container\">\n";
  echo "          <div class=\"navbar-header\">\n";
  echo "            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\">\n";
  echo "              <span class=\"sr-only\">Toggle navigation</span>\n";
  echo "              <span class=\"icon-bar\"></span>\n";
  echo "              <span class=\"icon-bar\"></span>\n";
  echo "              <span class=\"icon-bar\"></span>\n";
  echo "            </button>\n";
  echo "            <span class=\"navbar-brand\">$ww</span>\n";
  echo "          </div>\n";
  echo "          <div id=\"navbar\" class=\"navbar-collapse collapse\">\n";
  echo "            <ul class=\"nav navbar-nav navbar-right\">\n";
  if ($_SESSION['logged_in'] == 1) {
    echo "              <li><a href=\"".MEMBERS."\" title=\"".MYDESC."\"><i class=\"pe-home pe-fw\"></i> หน้าแรก</a></i>\n";
    echo "              <li class=\"dropdown\">\n";
    echo "                <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\"><i class=\"pe-cubes pe-fw\"></i> งานวิจัย <span class=\"caret\"></span></a>\n";
    echo "                <ul class=\"dropdown-menu\">\n";
    echo "                  <li class=\"dropdown-header\">ภาพรวมงานวิจัย</li>\n";
    echo "                  <li><a href=\"".MEMBERS."?w=surveys"."\" title=\"งานวิจัยทั้งหมด\"><i class=\"pe-wpforms pe-fw\"></i> งานวิจัยทั้งหมด</a></li>\n";
    echo "                  <li role=\"separator\" class=\"divider\"></li>\n";
    echo "                  <li class=\"dropdown-header\">รายละเอียด</li>\n";
    echo "                  <li><a href=\"".MEMBERS."?w=surveys&c=A"."\" title=\"งานวิจัยที่เปิดรับความคิดเห็นอยู่\"><i class=\"pe-hourglass-start pe-fw\"></i> งานวิจัยที่เปิดรับความคิดเห็นอยู่</a></li>\n";
    echo "                  <li><a href=\"".MEMBERS."?w=surveys&c=B"."\" title=\"งานวิจัยที่ปิดรับความคิดเห็นแล้ว\"><i class=\"pe-hourglass-half pe-fw\"></i> งานวิจัยที่ปิดรับความคิดเห็นแล้ว</a></li>\n";
    echo "                </ul>\n";
    echo "              </li>\n";
    echo "              <li class=\"dropdown\">\n";
    echo "                <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\"><i class=\"pe-user pe-fw\"></i> ข้อมูลส่วนตัว <span class=\"caret\"></span></a>\n";
    echo "                <ul class=\"dropdown-menu\">\n";
    echo "                  <li class=\"dropdown-header\">Your activity</li>\n";
    echo "                  <li><a href=\"".MEMBERS."?w=activity"."\" title=\"View activity\"><i class=\"pe-tv pe-fw\"></i> View activity</a></li>\n";
    echo "                  <li role=\"separator\" class=\"divider\"></li>\n";
    echo "                  <li class=\"dropdown-header\">เปลี่ยนแปลงข้อมูลส่วนตัว</li>\n";
    echo "                  <li><a href=\"".MEMBERS."?w=changeinfo"."\" title=\"แก้ไขข้อมูลส่วนตัว\"><i class=\"pe-cog pe-fw\"></i> แก้ไขข้อมูลส่วนตัว</a></li>\n";
    echo "                  <li><a href=\"".MEMBERS."?w=changepass"."\" title=\"เปลี่ยนรหัสผ่าน\"><i class=\"pe-key pe-fw\"></i> เปลี่ยนรหัสผ่าน</a></li>\n";
    echo "                </ul>\n";
    echo "              </li>\n";
    echo "              <li class=\"dropdown\">\n";
    echo "                <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\"><i class=\"pe-trophy pe-fw\"></i> คะแนน <span class=\"caret\"></span></a>\n";
    echo "                <ul class=\"dropdown-menu\">\n";
    echo "                  <li class=\"dropdown-header\">คะแนนสะสมและของรางวัล</li>\n";
    echo "                  <li><a href=\"\" title=\"ยอดคะแนนสะสม\"><i class=\"pe-diamond pe-fw\"></i> ยอดคะแนนสะสม</a></li>\n";
    echo "                  <li><a href=\"\" title=\"ของรางวัล\"><i class=\"pe-gift pe-fw\"></i> ของรางวัล</a></li>\n";
    echo "                </ul>\n";
    echo "              </li>\n";
  } else {
    echo "              <li><a href=\"".MEMBERS."\" title=\"".MYDESC."\"><i class=\"pe-home pe-fw\"></i> หน้าแรก</a></i>\n";
    echo "              <li><a href=\"".MEMBERS."/signup/"."\" title=\"สมัครสมาชิก\"><i class=\"pe-user-plus pe-fw\"></i> สมัครสมาชิก</a></li>\n";
    echo "              <li><a href=\"".MEMBERS."/contact/"."\" title=\"ติดต่อเรา\"><i class=\"pe-envelope-o pe-fw\"></i> ติดต่อเรา</a></li>\n";
  }
  echo "            </ul>\n";
  echo "          </div>\n";
  echo "        </div>\n";
  echo "      </nav>\n";
  echo "    </div>\n";
  echo "  </div>\n";
  echo "</header>\n";
  echo "<main class=\"container\">\n";
}

function pageFooter($notes = null) {
  echo "</main>\n";
  echo "<footer>\n";
  echo "  <div class=\"row\">\n";
  echo "    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 footer-1\">\n";
  echo "      <div class=\"container\">\n";
  echo "      </div>\n";
  echo "    </div>\n";
  echo "    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 footer-2\">\n";
  echo "      <div class=\"container\">\n";
  echo "        <a href=\"".MYHOME."\" class=\"footerlogo-ssq\" title=\"".MYDESC."\">";
  ssqlogo();
  echo "</a> by\n";
  echo "        <a href=\"http://www.pebinary.com\" class=\"footerlogo\" title=\"PE BINARY CO., LTD.\">";
  peblogo();
  echo "</a><br>\n";
  echo "        <i class=\"pe-copyright\"></i> Copyright 2016, All rights reserved.<br>\n";
  echo "        <nav class=\"footer\">\n";
  echo "          <ul class=\"list-inline\" itemscope itemtype=\"http://schema.org/SiteNavigationElement\">\n";
  echo "            <li><a href=\"http://www.pebinary.com/about/privacy.html\" title=\"Privacy policy\" itemprop=\"url\"><i class=\"pe-lock\"></i> <span class=\"hidden-md hidden-lg\" itemprop=\"name\">Privacy</span><span class=\"hidden-xs hidden-sm\" itemprop=\"name\">Privacy policy</span></a></li>\n";
  echo "            <li><a href=\"http://www.pebinary.com/about/tos.html\" title=\"Terms of services\" itemprop=\"url\"><i class=\"pe-gavel\"></i> <span class=\"hidden-md hidden-lg\" itemprop=\"name\">TOS</span><span class=\"hidden-xs hidden-sm\" itemprop=\"name\">Terms of services</span></a></li>\n";
  echo "            <li><a href=\"http://www.pebinary.com/about/terms.html\" title=\"Terms &amp; conditions\" itemprop=\"url\"><i class=\"pe-balance-scale\"></i> <span class=\"hidden-md hidden-lg\" itemprop=\"name\">Terms</span><span class=\"hidden-xs hidden-sm\" itemprop=\"name\">Terms &amp; conditions</span></a></li>\n";
  echo "          </ul>\n";
  echo "        </nav>\n";
  echo "      </div>\n";
  echo "    </div>\n";
  echo "    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 footer-3\">\n";
  echo "      <div class=\"container\">\n";
  echo "        <h4 class=\"avatar\">&#9969; &#9748; &#10175; &#9731; &#8485; &#8488; &#8523; &#8492;</h4>\n";
  echo "      </div>\n";
  echo "    </div>\n";
  echo "  </div>\n";
  echo "</footer>\n";
  echo "<div class=\"scroll-to-top\"><i class=\"pe-arrow-up pe-lg white\"></i></div>\n";
  echo "<script type=\"text/javascript\" src=\"/members/assets/js/etc.js\"></script>\n";
  if ($notes) { notify($notes); }
  //debugOutput();
  echo "</body>\n";
  echo "</html>\n";
}

function notify($messages) {
  echo "<script type=\"text/javascript\">\n";
  echo "  function notifyBox(title, text, image) { Notification({ title: title, text: text, image: image, inAnimation: \"bounce\", outAnimation: \"zoomOut\", position: 2 }); }\n";
  echo "  function delayNext(title, text, image) { $(this).delay(2000).queue(function() { notifyBox(title, text, image); $(this).dequeue(); }); }\n";
  echo "  $(document).ready(function() {\n";
  echo "    var obj = JSON.parse ('".json_encode($messages)."');\n";
  echo "     for (var i=0; i<obj.length; i++) {\n";
  echo "       if (i == 0) { notifyBox(obj[i].title, obj[i].text, obj[i].image); }\n";
  echo "       else { delayNext(obj[i].title, obj[i].text, obj[i].image); }\n";
  echo "     }\n";
  echo "  });\n";
  echo "</script>\n";
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
