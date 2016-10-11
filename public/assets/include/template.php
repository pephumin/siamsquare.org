<?php

function logo() {
  echo "<img src=\"assets/img/ssq.svg\" alt=\"SiamSquare Survey Engine by PE BINARY CO., LTD.\">";
}

function ssqlogo() {
  echo "<span class=\"ssqlogo1\">Siam</span><span class=\"ssqlogo2\">Square</span>";
}

function peblogo() {
  echo "<span class=\"logo1\"><i class=\"pe-logo\"></i></span> <span class=\"logo2\">pe</span><span class=\"logo3\">binary</span>";
}

function pageHeader($title) {
  $show = "<i class=\"pe-street-view pe-fw\"></i> <kbd>".$_SESSION['espuser']."</kbd>";
  $v1 = MYPUBLIC."?w=login"; $v2 = MYPUBLIC."?w=logout"; $v3 = "http://www.pebinary.net/th/members/";
  if (is_session_authenticated()) {
    $signed = "<a href=\"$v2\" class=\"btn btn-info btn-xs\" title=\"ออกจากระบบ\"><i class=\"pe-sign-out pe-fw\"></i> ออกจากระบบ</a> <a href=\"$v3\" class=\"btn btn-primary btn-xs\"><i class=\"pe-university pe-fw\"></i> ช่วยเหลือ</a>";
    $ww = "ยินดีต้อนรับ $show";
  }
  else {
    $signed = "<a href=\"$v1\" class=\"btn btn-info btn-xs\" title=\"เข้าสู่ระบบ\"><i class=\"pe-power-off pe-fw\"></i> เข้าสู่ระบบ</a> <a href=\"$v3\" class=\"btn btn-primary btn-xs\"><i class=\"pe-university pe-fw\"></i> ช่วยเหลือ</a>";
    $ww = "<i class=\"pe-exclamation-triangle pe-fw\"></i> สำหรับสมาชิกที่ลงทะเบียนไว้แล้วเท่านั้น";
  }
  header("Content-language: th");
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
  <title><?php echo $title; ?></title>
  <link rel="stylesheet" type="text/css" href="assets/css/main.css">
  <link rel="stylesheet" type="text/css" href="assets/css/survey.css">
  <link rel="stylesheet" type="text/css" href="assets/css/surveyeditor.css">
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
  <script type="text/javascript" src="assets/js/jquery.steps.js"></script>
  <script type="text/javascript" src="assets/js/jquery-ui.min.js"></script>
  <script type="text/javascript" src="assets/js/fv/formValidation.min.js"></script>
  <script type="text/javascript" src="assets/js/fv/bootstrap.min.js"></script>
  <script type="text/javascript" src="assets/js/survey/knockout-3.4.0.js"></script>
  <script type="text/javascript" src="assets/js/survey/survey.bootstrap.js"></script>
  <script type="text/javascript" src="assets/js/survey/ace.min.js"></script>
  <script type="text/javascript" src="assets/js/survey/worker-json.js"></script>
  <script type="text/javascript" src="assets/js/survey/mode-json.js"></script>
  <script type="text/javascript" src="assets/js/survey/surveyeditor.js"></script>
  <script type="text/javascript">
    var survey = new Survey.Survey(
    {pages:[{name:"page1",questions:[{type:"radiogroup",name:"frameworkUsing",title:"Do you use any front-end framework like Bootstrap?",isRequired:true,choices:["Yes","No"]},{type:"checkbox",name:"framework",visible:false,title:"What front-end framework do you use?",isRequired:true,hasOther:true,choices:["Bootstrap","Foundation"]}]},{name:"page2",questions:[{type:"radiogroup",name:"mvvmUsing",title:"Do you use any MVVM framework?",isRequired:true,choices:["Yes","No"]},{type:"checkbox",name:"mvvm",visible:false,title:"What MVVM framework do you use?",isRequired:true,hasOther:true,choices:["AngularJS","KnockoutJS","React"]}]},{name:"page3",questions:[{type:"comment",name:"about",title:"Please tell us about your main requirements for Survey library"}]}],title:"Tell us, what technologies do you use?",triggers:[{type:"visible",operator:"equal",value:"Yes",name:"frameworkUsing",questions:["framework"]},{type:"visible",operator:"equal",value:"Yes",name:"mvvmUsing",questions:["mvvm"]}]});
    survey.onComplete.add(function (s) {
    alert("The results are:" + JSON.stringify(s.data));
     });
    survey.render("mySurveyJSName");
  </script>
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
        <h1><a href="<?php echo MYPUBLIC; ?>" title="<?php echo MYDESC; ?>"><?php logo(); ?></a></h1>
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
<?php if (is_session_authenticated()) { ?>
              <li><a href="<?php echo MYPUBLIC; ?>" title="<?php echo MYDESC; ?>"><i class="pe-home pe-fw"></i> หน้าแรก</a></i>
              <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" role="button" title="ข้อมูลส่วนตัว"><i class="pe-user pe-fw"></i> ข้อมูลส่วนตัว <span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li class="dropdown-header">ข้อมูลส่วนตัว</li>
                  <li><a href="<?php echo(MYPUBLIC."?w=profile"); ?>" title="ข้อมูลส่วนตัวโดยสรุป"><i class="pe-user pe-fw"></i> ข้อมูลส่วนตัวโดยสรุป</a></li>
                  <li class="divider" role="separator"></li>
                  <li class="dropdown-header">เปลี่ยนแปลงข้อมูล</li>
                  <li><a href="<?php echo(MYPUBLIC."?w=changeprofile"); ?>" title="แก้ไขเปลี่ยนแปลงข้อมูลเกี่ยวกับตัวคุณ"><i class="pe-cog pe-fw"></i> แก้ไขข้อมูลของคุณ</a></li>
                  <li><a href="<?php echo(MYPUBLIC."?w=changepass"); ?>" title="แก้ไขเปลี่ยนแปลงรหัสผ่าน"><i class="pe-key pe-fw"></i> เปลี่ยนรหัสผ่าน</a></li>
                </ul>
              </li>
              <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" role="button"><i class="pe-commenting pe-fw"></i> งานวิจัย <span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li class="dropdown-header">ภาพรวมงานวิจัย</li>
                  <li><a href="<?php echo(MYPUBLIC."?w=survey"); ?>" title="งานวิจัยทั้งหมด"><i class="pe-user pe-fw"></i> งานวิจัยทั้งหมด</a></li>
                  <li class="divider" role="separator"></li>
                  <li class="dropdown-header">การเข้าร่วม</li>
                  <li><a href="<?php echo(MYPUBLIC."?w=surveycurrent"); ?>" title="Current surveys"><i class="pe-wpforms pe-fw"></i> งานวิจัยในปัจจุบัน</a></li>
                  <li><a href="<?php echo(MYPUBLIC."?w=surveyhistory"); ?>" title="History"><i class="pe-history pe-fw"></i> งานวิจัยในอดีต</a></li>
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
              <li><a href="<?php echo MYPUBLIC; ?>" title="<?php echo MYDESC; ?>"><i class="pe-home pe-fw"></i> หน้าแรก</a></i>
              <li><a href="<?php echo(MYPUBLIC."signup.php"); ?>" title="สมัครสมาชิก"><i class="pe-user-plus pe-fw"></i> สมัครสมาชิก</a></li>
              <li><a href="<?php echo(MYPUBLIC."contact.php"); ?>" title="ติดต่อเรา"><i class="pe-envelope-o pe-fw"></i> ติดต่อเรา</a></li>
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
        <a href="http://www.siamsquare.org" class="footerlogo-ssq" title="<?php echo MYDESC; ?>"><?php ssqlogo(); ?></a> ดำเนินการโดย
        <a href="http://www.pebinary.com" class="footerlogo" title="PE BINARY CO., LTD."><?php peblogo(); ?></a><br>
        <i class="pe-copyright"></i> ลิขสิทธิ์ 2016 สงวนลิขสิทธิ์<br>
        <nav class="footer">
          <ul class="list-inline" itemscope itemtype="http://schema.org/SiteNavigationElement">
            <li><a href="http://www.pebinary.com/about/privacy.html" title="นโยบายส่วนบุคคล" itemprop="url"><i class="pe-lock"></i> <span itemprop="name">นโยบายส่วนบุคคล</span></a></li>
            <li><a href="http://www.pebinary.com/about/tos.html" title="ข้อกำหนดในการให้บริการ" itemprop="url"><i class="pe-gavel"></i> <span itemprop="name">ข้อกำหนดในการให้บริการ</span></a></li>
            <li><a href="http://www.pebinary.com/about/terms.html" title="ข้อกำหนดและเงื่อนไขต่างๆ" itemprop="url"><i class="pe-balance-scale"></i> <span itemprop="name">ข้อกำหนดและเงื่อนไขต่างๆ</span></a></li>
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
<script type="text/javascript" src="assets/js/anchor.js"></script>
<script type="text/javascript" src="assets/js/notification.js"></script>
<script type="text/javascript" src="assets/js/tops.js"></script>
<script type="text/javascript" src="assets/js/functions.js"></script>
<script type="text/javascript">
  var activateConfirmMsg = "Warning! Once activated, this survey can no longer be edited. Any further changes must be done on a copy."
  var cancelConfirmMsg = "Warning! This survey has not been saved. Canceling now will remove any changes."
  var mergeMsg = "<h2>You must select at least two surveys before you can merge</h2>"
</script>
<?php if ($notes) { notify($notes); } ?>
<?php debugOutput(); ?>
</body>
</html>
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

?>
