<?php

if (HTTP_PROTOCOL == "HTTPS") {
  if (empty($_SERVER['HTTPS'])) {
    $url = 'https://www.siamsquare.org'.$_SERVER['REQUEST_URI'];
    header('location: '.$url);
    exit;
  }
}

function logo() {
  return "<img src=\"/admin/assets/img/ssq.svg\" alt=\"SiamSquare Survey Engine by PE BINARY CO., LTD.\">";
}

function ssqlogo() {
  return "<span class=\"ssqlogo1\">Siam</span><span class=\"ssqlogo2\">Square</span>";
}

function peblogo() {
  return "<span class=\"logo1\"><i class=\"pe-logo\"></i></span> <span class=\"logo2\">pe</span><span class=\"logo3\">binary</span>";
}

function pageHeader($title) {
  $user = $_SESSION['email']; $avatar = $_SESSION['avatar'];
  if (isset($avatar)) { $show = "<img src=\"/admin/assets/img/u/$avatar.svg\" class=\"img-circle members-photo-tiny\" alt=\"Avatar\"> <kbd>$user</kbd>"; } else { $show = "<i class=\"pe-street-view pe-fw\"></i> <kbd>$user</kbd>"; }
  $v1 = ADMIN."?w=login"; $v2 = ADMIN."?w=logout"; $v3 = "http://www.pebinary.net/en/clients/";
  if ($_SESSION['logged_in']) {
    $signed = "<a href=\"$v2\" class=\"btn btn-warning btn-xs\" title=\"Log out\"><i class=\"pe-sign-out pe-fw\"></i> Log out</a> <a href=\"$v3\" class=\"btn btn-danger btn-xs\"><i class=\"pe-university pe-fw\"></i> Help</a>";
    $ww = "Logged in as $show";
  } else {
    $signed = "<a href=\"$v1\" class=\"btn btn-warning btn-xs\" title=\"Log in\"><i class=\"pe-power-off pe-fw\"></i> Log in</a> <a href=\"$v3\" class=\"btn btn-danger btn-xs\"><i class=\"pe-university pe-fw\"></i> Help</a>";
    $ww = "<span class=\"deepgreen\"><i class=\"pe-info-circle pe-fw\"></i> Authorised clients only</span>";
  }
  header("Content-language: en");
  header("Content-type: text/html; charset=utf-8");
  meta($title);
  facebookSDK();
  echo "<body>\n";
  echo "<header>\n";
  echo "  <div class=\"row\">\n";
  echo "    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 header-1\">\n";
  echo "      <div class=\"container\">$signed</div>\n";
  echo "    </div>\n";
  echo "    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 header-2\">\n";
  echo "      <div class=\"container\">\n";
  echo "        <h1><a href=\"".ADMIN."\" title=\"".MYDESC."\">".logo()."</a></h1>\n";
  echo "        <p class=\"description\">".SLOGANEN."</p>\n";
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
    echo "              <li><a href=\"".ADMIN."\" title=\"".MYDESC."\"><i class=\"pe-home pe-fw\"></i> Home</a></i>\n";
    echo "              <li><a href=\"".ADMIN."?w=surveys"."\" title=\"Projects\"><i class=\"pe-cubes pe-fw\"></i> Projects</a></i>\n";
    echo "              <li class=\"dropdown\">\n";
    echo "                <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\"><i class=\"pe-cog pe-spin pe-fw\"></i> Setting <span class=\"caret\"></span></a>\n";
    echo "                <ul class=\"dropdown-menu\">\n";
    echo "                  <li><a href=\"".ADMIN."?w=profile"."\" title=\"Profile\"><i class=\"pe-user pe-fw\"></i> Profile</a></li>\n";
    echo "                  <li><a href=\"".ADMIN."?w=team"."\" title=\"Team members\"><i class=\"pe-graduation-cap pe-fw\"></i> Team members</a></li>\n";
    if ($_SESSION['level'] >= "6") {
      echo "                  <li><a href=\"".ADMIN."?w=company"."\" title=\"Company\"><i class=\"pe-building pe-fw\"></i> Company</a></li>\n";
    }
    echo "                </ul>\n";
    echo "              </li>\n";
    echo "              <li class=\"dropdown\">\n";
    echo "                <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\"><i class=\"pe-wrench pe-fw\"></i> Tools <span class=\"caret\"></span></a>\n";
    echo "                <ul class=\"dropdown-menu\">\n";
    echo "                  <li><a href=\"".ADMIN."?w=board"."\" title=\"Message board\"><i class=\"pe-comments-o pe-fw\"></i> Message board</a></li>\n";
    echo "                  <li><a href=\"".ADMIN."?w=activity"."\" title=\"Activity\"><i class=\"pe-map-o pe-fw\"></i> Activity log</a></li>\n";
    if ($_SESSION['level'] >= "8") {
      echo "                  <li role=\"separator\" class=\"divider\"></li>\n";
      echo "                  <li><a href=\"".ADMIN."?w=admin"."\" title=\"Administration\"><span style=\"color:red\"><i class=\"pe-gamepad pe-fw\"></i> Administration</span></a></li>\n";
    }
    echo "                  <li role=\"separator\" class=\"divider\"></li>\n";
    echo "                  <li><a href=\"".ADMIN."contact/"."\" title=\"Contact us\"><i class=\"pe-envelope-o pe-fw\"></i> Contact us</a></li>\n";
    echo "                </ul>\n";
    echo "              </li>\n";
  } else {
    echo "              <li><a href=\"".ADMIN."\" title=\"".MYDESC."\"><i class=\"pe-home pe-fw\"></i> Home</a></i>\n";
    echo "              <li><a href=\"".ADMIN."contact/?d=request"."\" title=\"Request for an access\"><i class=\"pe-credit-card pe-fw\"></i> Request for an access</a></li>\n";
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
  echo "        <a href=\"".MYHOME."\" class=\"footerlogo-ssq\" title=\"".MYDESC."\">".ssqlogo()."</a> by\n";
  echo "        <a href=\"http://www.pebinary.com\" class=\"footerlogo\" title=\"PE BINARY CO., LTD.\">".peblogo()."</a><br>\n";
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
  echo "        <h4 class=\"avatar\">&#9836; &#9819; &#9962; &#10000; &#9820; &#9822; &#9973;</h4>\n";
  echo "      </div>\n";
  echo "    </div>\n";
  echo "  </div>\n";
  echo "</footer>\n";
  echo "<div class=\"scroll-to-top\" style=\"display: block\"><i class=\"pe-arrow-up pe-lg white\"></i></div>\n";
  echo "<script type=\"text/javascript\" src=\"/admin/assets/js/etc.js\"></script>\n";
  if ($notes) { notify($notes); }
  // debugOutput();
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
  $filecheck = DOCROOT.'/admin/assets/include/w/'.$w.'.inc';
  if (!file_exists($filecheck)) { $w = 'index'; }
  // echo $filecheck;
  if (!file_exists($filecheck)) { echo('Unable to open include file. Check INI settings. Aborting.'); exit; }
  return ($filecheck);
}

function facebookSDK() {
  echo "<script>\n";
  echo "  window.fbAsyncInit = function() {\n";
  echo "    FB.init({\n";
  echo "      appId      : '1354128044598714',\n";
  echo "      cookie     : true,\n";
  echo "      xfbml      : true,\n";
  echo "      version    : '2.11'\n";
  echo "    });\n";
  echo "    FB.AppEvents.logPageView();\n";
  echo "  };\n";
  echo "  (function(d, s, id){\n";
  echo "     var js, fjs = d.getElementsByTagName(s)[0];\n";
  echo "     if (d.getElementById(id)) {return;}\n";
  echo "     js = d.createElement(s); js.id = id;\n";
  echo "     js.src = \"https://connect.facebook.net/en_US/sdk.js\";\n";
  echo "     fjs.parentNode.insertBefore(js, fjs);\n";
  echo "   }(document, 'script', 'facebook-jssdk'));\n";
  echo "</script>\n";
}

function FBLoginStatus() {
  echo "<script>\n";
  echo "  FB.getLoginStatus(function(response) {\n";
  echo "    statusChangeCallback(response);\n";
  echo "  });\n";
  echo "</script>\n";
}



?>
