<?php

if ($_GET['pilot'] == "✓") { $pilottest = 1; } else { $pilottest = 2; }
if ($_GET['designer'] == "✓") { $readonly = 1; } else { $readonly = 0; }

require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/config.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/themes.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/functions.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/class.login.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/class.imgresize.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/class.phpmailer.php';

if (empty($_GET['s'])) {
  $target = "/";
  header("refresh: 10; url=$target");
  $title = "เกิดข้อผิดพลาด";
  pageHeader($title);
  echo "<h2>ไม่พบแบบสอบถาม</h2>\n";
  echo "<p>ไม่สามารถทำรายการต่อได้เนื่องจากไม่พบแบบสอบถาม กรุณาตรวจสอบให้แน่ใจว่าคุณได้พิมพ์ที่อยู่เว็บไซต์ได้ถูกต้องและครบถ้วน</p>\n";
  echo "<p>หากจะให้แน่นอนที่สุด เราขอแนะนำให้กดจากลิ๊งที่คุณได้รับโดยตรง จะรับประกันได้ว่าไม่มีข้อผิดพลาดอย่างเด็ดขาด</p>\n";
  echo mkerror("เกิดข้อผิดพลาด ไม่สามารถทำรายการได้ เนื่องจากไม่พบแบบสอบถาม");
  echo "<p>คุณสามารถ<a href=\"/members/contact/\">ติดต่อมาที่เราได้ทุกเวลา</a> หากคุณมีความประสงค์ต้องการข้อมูลหรือความช่วยเหลือเพิ่มเติม</p>\n";
  pageFooter();
  exit;
}

// Get survey and company information (e.g. logo, website, etc.)
$q1 = $db->prepare("SELECT P.*, C.company, C.fullname, C.fullname_th, C.description AS DD, C.description_th AS DD_th, C.logo, C.website, C.email FROM j_projects P, j_companies C WHERE P.companyid = C.id AND P.id = :surveyid");
$q1->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
$q1->execute();
if ($q1->rowCount() == 0) {
  $target = "/";
  // header("refresh: 10; url=$target");
  $title = "เกิดข้อผิดพลาด";
  pageHeader($title);
  echo "<h2>ไม่พบงานวิจัย</h2>\n";
  echo "<p>ไม่สามารถทำรายการต่อได้เนื่องจากไม่พบงานวิจัย กรุณาตรวจสอบให้แน่ใจว่าคุณได้พิมพ์ที่อยู่เว็บไซต์ได้ถูกต้องและครบถ้วน</p>\n";
  echo "<p>หากจะให้แน่นอนที่สุด เราขอแนะนำให้กดจากลิ๊งที่คุณได้รับโดยตรง จะรับประกันได้ว่าไม่มีข้อผิดพลาดอย่างเด็ดขาด</p>\n";
  echo mkerror("เกิดข้อผิดพลาด ไม่สามารถทำรายการได้เนื่องจากไม่พบงานวิจัย");
  echo "<p>คุณสามารถ<a href=\"/members/contact/\">ติดต่อมาที่เราได้ทุกเวลา</a> หากคุณมีความประสงค์ต้องการข้อมูลหรือความช่วยเหลือเพิ่มเติม</p>\n";
  pageFooter();
  exit;
}
while ($r = $q1->fetchObject()) {
  $project = $r->title;
  $status = $r->status;
  if ($status == 3) { $readonly = 1; $closed = 1; }
  else if ($status > 3) { $readonly = 1; }
  $cwebsite = $r->website;
  $cemail = $r->email;
  $ccompany = $r->company;
  $cfullname = $r->fullname;
  $cfullname_th = $r->fullname_th;
  $cdescription = strip_tags($r->DD);
  $cdescription_th = strip_tags($r->DD_th);
  $private = $r->private;
  $language_credential = $r->language_credential;
  // if ($r->logo) {
  //   if ($cwebsite) { $clientlogo = "<a href=\"$cwebsite\" title=\"$ccompany\" target=\"_blank\"><img src=\"admin/$r->logo\" title=\"$ccompany\"></a>"; }
  //   else { $clientlogo = "<img src=\"admin/$r->logo\" title=\"$ccompany\">"; }
  // } else { $clientlogo = ""; }
  $description = nl2br($r->description);
  if ($_showtopper) { $showtopper = $_showtopper; } else { $showtopper = $r->show_top; }
  if ($_shownavbar) { $shownavbar = $_shownavbar; } else { $shownavbar = $r->show_navbar; }
  if ($_showdetail) { $showdetail = $_showdetail; } else { $showdetail = $r->show_detail; }
  if ($_showabout) { $showabout = $_showabout; } else { $showabout = $r->show_about; }
  if ($_showlogo) { $showlogo = $_showlogo; } else { $showlogo = $r->show_logo; }
  if ($_showcolour) { $showcolour = $_showcolour; } else { $showcolour = $r->show_colour; }
}

$showsurvey = 0;

// Check email and token if it is a private survey
if ($private == 1) {
  if (empty($_GET["email"])) {
    $email = "anonymous@siamsquare.org";
    $userid = 0;
    $showsurvey = 1;
    // $title = "เกิดข้อผิดพลาด";
    // pageHeader($title);
    // echo "<h2>ไม่พบอีเมล์ของคุณ</h2>\n";
    // echo "<p>ไม่สามารถทำรายการต่อได้เนื่องจากไม่พบอีเมล์ของคุณ กรุณาตรวจสอบให้แน่ใจว่าคุณได้พิมพ์ที่อยู่เว็บไซต์ได้ถูกต้องและครบถ้วน</p>\n";
    // echo "<p>หากจะให้แน่นอนที่สุด เราขอแนะนำให้กดจากลิ๊งที่คุณได้รับโดยตรง จะรับประกันได้ว่าไม่มีข้อผิดพลาดอย่างเด็ดขาด</p>\n";
    // echo mkerror("เกิดข้อผิดพลาด ไม่สามารถทำรายการได้เนื่องจากไม่พบอีเมล์ของคุณ");
    // echo "<p>คุณสามารถ<a href=\"/members/contact/\">ติดต่อมาที่เราได้ทุกเวลา</a> หากคุณมีความประสงค์ต้องการข้อมูลหรือความช่วยเหลือเพิ่มเติม</p>\n";
    // pageFooter();
    // exit;
  } else if (empty($_GET["token"])) {
    $email = "anonymous@siamsquare.org";
    $userid = 0;
    $showsurvey = 1;
    // $title = "เกิดข้อผิดพลาด";
    // pageHeader($title);
    // echo "<h2>ไม่พบรหัสผ่าน</h2>\n";
    // echo "<p>ไม่สามารถทำรายการต่อได้เนื่องจากไม่พบรหัสผ่าน กรุณาตรวจสอบให้แน่ใจว่าคุณได้พิมพ์ที่อยู่เว็บไซต์ได้ถูกต้องและครบถ้วน</p>\n";
    // echo "<p>หากจะให้แน่นอนที่สุด เราขอแนะนำให้กดจากลิ๊งที่คุณได้รับโดยตรง จะรับประกันได้ว่าไม่มีข้อผิดพลาดอย่างเด็ดขาด</p>\n";
    // echo mkerror("เกิดข้อผิดพลาด ไม่สามารถทำรายการได้เนื่องจากไม่พบรหัสผ่าน");
    // echo "<p>คุณสามารถ<a href=\"/members/contact/\">ติดต่อมาที่เราได้ทุกเวลา</a> หากคุณมีความประสงค์ต้องการข้อมูลหรือความช่วยเหลือเพิ่มเติม</p>\n";
    // pageFooter();
    // exit;
  } else {
    $q1 = $db->prepare("SELECT * FROM j_respondents WHERE email = :email AND surveyid :surveyid");
    $q1->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
    $q1->bindValue(':email', $_GET["email"], PDO::PARAM_STR);
    $q1->execute();
    if ($q1->rowCount() == 0) {
      $title = "เกิดข้อผิดพลาด";
      pageHeader($title);
      echo "<h2>อีเมล์ของคุณไม่ถุกต้อง</h2>\n";
      echo "<p>ไม่สามารถทำรายการต่อได้เนื่องจากอีเมล์ของคุณไม่ถุกต้อง กรุณาตรวจสอบให้แน่ใจว่าคุณได้พิมพ์ที่อยู่เว็บไซต์ได้ถูกต้องและครบถ้วน</p>\n";
      echo "<p>หากจะให้แน่นอนที่สุด เราขอแนะนำให้กดจากลิ๊งที่คุณได้รับโดยตรง จะรับประกันได้ว่าไม่มีข้อผิดพลาดอย่างเด็ดขาด</p>\n";
      echo mkerror("เกิดข้อผิดพลาด ไม่สามารถทำรายการได้เนื่องจากอีเมล์ของคุณไม่ถุกต้อง");
      echo "<p>คุณสามารถ<a href=\"/members/contact/\">ติดต่อมาที่เราได้ทุกเวลา</a> หากคุณมีความประสงค์ต้องการข้อมูลหรือความช่วยเหลือเพิ่มเติม</p>\n";
      pageFooter();
      exit;
    } else {
      while ($row = $q1->fetchObject()) {
        $password = $row->password;
        if ($password != $_GET["token"]) {
          $title = "เกิดข้อผิดพลาด";
          pageHeader($title);
          echo "<h2>รหัสลับของคุณไม่ถุกต้อง</h2>\n";
          echo "<p>ไม่สามารถทำรายการต่อได้เนื่องจากรหัสลับของคุณไม่ถุกต้อง กรุณาตรวจสอบให้แน่ใจว่าคุณได้พิมพ์ที่อยู่เว็บไซต์ได้ถูกต้องและครบถ้วน</p>\n";
          echo "<p>หากจะให้แน่นอนที่สุด เราขอแนะนำให้กดจากลิ๊งที่คุณได้รับโดยตรง จะรับประกันได้ว่าไม่มีข้อผิดพลาดอย่างเด็ดขาด</p>\n";
          echo mkerror("เกิดข้อผิดพลาด ไม่สามารถทำรายการได้เนื่องจากรหัสลับของคุณไม่ถุกต้อง");
          echo "<p>คุณสามารถ<a href=\"/members/contact/\">ติดต่อมาที่เราได้ทุกเวลา</a> หากคุณมีความประสงค์ต้องการข้อมูลหรือความช่วยเหลือเพิ่มเติม</p>\n";
          pageFooter();
          exit;
        } else {
          $email = $_GET["email"];
          $userid = $row->id;
          $showsurvey = 1;
          // Update respondent participation
          $q2 = $db->prepare("UPDATE j_respondents SET participation = NOW() WHERE email = :email AND surveyid = :surveyid");
          $q2->bindValue(':email', $_GET["email"], PDO::PARAM_INT);
          $q2->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
          $q2->execute();
        }
      }
    }
  }
} else if ($private == 0) {
  $login = new Login();
  if ($login->isUserLoggedIn() == true) {
    $email = $_SESSION["email"];
    $userid = $_SESSION["userid"];
    $showsurvey = 1;
  } else if (($_GET["email"]) && ($_GET["token"])) {
    $q1 = $db->prepare("SELECT * FROM j_respondents WHERE email = :email AND surveyid :surveyid");
    $q1->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
    $q1->bindValue(':email', $_GET["email"], PDO::PARAM_STR);
    $q1->execute();
    if ($q1->rowCount() == 0) {
      $title = "เกิดข้อผิดพลาด";
      pageHeader($title);
      echo "<h2>อีเมล์ของคุณไม่ถุกต้อง</h2>\n";
      echo "<p>ไม่สามารถทำรายการต่อได้เนื่องจากอีเมล์ของคุณไม่ถุกต้อง กรุณาตรวจสอบให้แน่ใจว่าคุณได้พิมพ์ที่อยู่เว็บไซต์ได้ถูกต้องและครบถ้วน</p>\n";
      echo "<p>หากจะให้แน่นอนที่สุด เราขอแนะนำให้กดจากลิ๊งที่คุณได้รับโดยตรง จะรับประกันได้ว่าไม่มีข้อผิดพลาดอย่างเด็ดขาด</p>\n";
      echo mkerror("เกิดข้อผิดพลาด ไม่สามารถทำรายการได้เนื่องจากอีเมล์ของคุณไม่ถุกต้อง");
      echo "<p>คุณสามารถ<a href=\"/members/contact/\">ติดต่อมาที่เราได้ทุกเวลา</a> หากคุณมีความประสงค์ต้องการข้อมูลหรือความช่วยเหลือเพิ่มเติม</p>\n";
      pageFooter();
      exit;
    } else {
      while ($row = $q1->fetchObject()) {
        $password = $row->password;
        if ($password != $_GET["token"]) {
          $title = "เกิดข้อผิดพลาด";
          pageHeader($title);
          echo "<h2>รหัสลับของคุณไม่ถุกต้อง</h2>\n";
          echo "<p>ไม่สามารถทำรายการต่อได้เนื่องจากรหัสลับของคุณไม่ถุกต้อง กรุณาตรวจสอบให้แน่ใจว่าคุณได้พิมพ์ที่อยู่เว็บไซต์ได้ถูกต้องและครบถ้วน</p>\n";
          echo "<p>หากจะให้แน่นอนที่สุด เราขอแนะนำให้กดจากลิ๊งที่คุณได้รับโดยตรง จะรับประกันได้ว่าไม่มีข้อผิดพลาดอย่างเด็ดขาด</p>\n";
          echo mkerror("เกิดข้อผิดพลาด ไม่สามารถทำรายการได้เนื่องจากรหัสลับของคุณไม่ถุกต้อง");
          echo "<p>คุณสามารถ<a href=\"/members/contact/\">ติดต่อมาที่เราได้ทุกเวลา</a> หากคุณมีความประสงค์ต้องการข้อมูลหรือความช่วยเหลือเพิ่มเติม</p>\n";
          pageFooter();
          exit;
        } else {
          $email = $row->email;
          $userid = $row->id;
          $showsurvey = 1;
        }
      }
    }
  } else {
    $ip = getip();
    $email = "anonymous@siamsquare.org"; $userid = 0;
    // $email = $_GET["email"];
    // $surveyid = $_GET["s"];
    // $q1 = $db->prepare("SELECT password FROM j_respondents_private WHERE email = :email AND surveyid = :surveyid");
    // $q1->bindValue(':email', $email, PDO::PARAM_INT);
    // $q1->bindValue(':surveyid', $surveyid, PDO::PARAM_INT);
    // $q1->execute();
    // while ($row = $q1->fetchObject()) { $password = $row->password; }
  }
}

// if (isset($_GET['o']) || ($_GET['o'] == "CNT")) {
//   $auth = $_GET['o'];
//   $continue = true;
//   $userid = 0;
//   // run function get email from CNT, fallback below
//   $email = "CNT@siamsquare.org";
// }

if ($_SESSION["level"] == 9) {
  $email = $_SESSION["email"];
  $userid = $_SESSION["userid"];
  $showsurvey = 1;
}

if ($showsurvey != 1) {
  $title = "เกิดข้อผิดพลาด";
  pageHeader($title);
  echo "<h2>ไม่สามารถเข้าร่วมวิจัยได้</h2>\n";
  echo "<p>ไม่สามารถทำรายการต่อได้ กรุณาตรวจสอบให้แน่ใจว่าคุณได้พิมพ์ที่อยู่เว็บไซต์ได้ถูกต้องและครบถ้วน</p>\n";
  echo "<p>หากจะให้แน่นอนที่สุด เราขอแนะนำให้กดจากลิ๊งที่คุณได้รับโดยตรง จะรับประกันได้ว่าไม่มีข้อผิดพลาดอย่างเด็ดขาด</p>\n";
  echo mkerror("เกิดข้อผิดพลาด ไม่สามารถทำรายการได้");
  echo "<p>คุณสามารถ<a href=\"/members/contact/\">ติดต่อมาที่เราได้ทุกเวลา</a> หากคุณมีความประสงค์ต้องการข้อมูลหรือความช่วยเหลือเพิ่มเติม</p>\n";
  pageFooter();
  exit;
} else {

$title = "ร่วมแสดงความคิดเห็น";
pageHeader($title);

if ($pilottest == 1) { echo "<div class='alert alert-warning'><i class='pe-exclamation-triangle pe-lg pe-fw'></i> You are in a pilot test mode where result will still be submitted but will not be included in the actual result.</div>\n"; }

if ($readonly == 1) {
  if ($closed == 1) { echo "<div class='alert alert-warning'><h4><i class='pe-clock-o pe-lg pe-fw'></i> โครงงานวิจัยนี้ได้ปิดรับความคิดเห็นไปแล้ว</h4><span>เนื่องจากโครงงานวิจัยชิ้นนี้ได้ปิดรับความคิดเห็นไปเป็นที่เรียบร้อยแล้ว คุณจะสามารถดูแบบสอบถามได้ <strong>แต่คุณจะไม่สามารถส่งความคิดเห็นได้</strong></span></div>\n"; }
  else { echo "<div class='alert alert-warning'><i class='pe-exclamation-triangle pe-lg pe-fw'></i> Non respondents only view questionnaire in read-only mode where result will not be submitted.</div>\n"; }
}

if ($showdetail == 2) {
  echo "<div class=\"row\" style=\"margin-top:20px\">\n";
  echo "  <div class=\"container\">\n";
  echo "    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 projectdetail bg-info\">\n";
  echo "      <h5 class=\"projectdetailhead\"><i class=\"pe-map-o pe-fw small\"></i> รายละเอียดงานวิจัย</h5>\n";
  echo "      <p class=\"projectdescription\">$description</p>\n";
  echo "    </div>\n";
  echo "  </div>\n";
  echo "</div>\n";
}

echo "<div id=\"showupload\"></div><div id=\"showcompletion\"></div><br>\n";
echo "<div id=\"runsurvey\"></div><br>\n";
echo "<div id=\"notification\"></div>\n";

?>

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css">
<link rel="stylesheet" href="/admin/assets/css/stars.css">

<script type="text/javascript">

  function getsurveydata(id) {
    var result = "";
    $.ajax({
      url: api + '/survey/' + id + '/data',
      dataType: 'json',
      type: 'get',
      cache: false,
      async: false,
      success: function(data) { result = data; }
    });
    return result;
  }
  function postsurveydata(cid, cip, email, id, data, etitle, pilot) {
    var result = "";
    if (pilot == 1) { logger = "/log/" + cid; logmessage = '"userid": "' + cid + '"'; loglevel = 2; }
    else { logger = "/rlog/" + email; logmessage = '"email": "' + email + '"'; loglevel = 1; }
    $.ajax({
      url: api + '/submit',
      dataType: 'json',
      type: 'post',
      contentType: 'application/json; charset=utf-8',
      data: '{"rd": "' + cid + '", "ip": "' + cip + '", "email": "' + email + '", "surveyid": ' + id + ', "data": ' + JSON.stringify(JSON.stringify(data)) + ', "status": ' + pilot + ' }',
      success: function(data) {
        $('#showcompletion').show();
        $.ajax({
          url: api + logger + '/' + id,
          dataType: 'json',
          type: 'post',
          contentType: 'application/json; charset=utf-8',
          data: '{ "surveyid": "' + id + '", ' + logmessage + ', "ip": "' + cip + '", "data": "' + email + ' pilot tested a survey ' + etitle + '", "critical": "' + loglevel + '" }',
          success: function(data) { result = data; }
        });
      }
    });
    return result;
  }
  function getsavesurveydata(id, email) {
    var result = "";
    $.ajax({
      url: api + '/getsaved/' + id + '/' + email,
      dataType: 'json',
      type: 'get',
      cache: false,
      async: false,
      success: function(data) { result = data; }
    });
    return result;
  }
  function clearsavesurveydata(resultid, cip, email, id, etitle) {
    var result = "";
    $.ajax({
      url: api + '/clearsave/' + resultid,
      dataType: 'json',
      type: 'delete',
      contentType: 'application/json; charset=utf-8',
      success: function(data) {
        $.ajax({
          url: api + '/rlog/' + cid + '/' + id,
          dataType: 'json',
          type: 'post',
          contentType: 'application/json; charset=utf-8',
          data: '{ "surveyid": "' + id + '","email": "' + email + '", "ip": "' + cip + '", "data": "' + email + ' clear saved survey results for ' + etitle + '", "critical": "2" }',
          success: function(data) { result = data; }
        });
      }
    });
    window.setTimeout(function () { window.location.reload(); }, 1500);
    return result;
  }
  function autosavesurveydata(cid, cip, email, id, data, etitle) {
    var result = "";
    $.ajax({
      url: api + '/autosave/',
      dataType: 'json',
      type: 'post',
      contentType: 'application/json; charset=utf-8',
      data: '{"rd": "' + cid + '", "ip": "' + cip + '", "email": "' + email + '", "surveyid": "' + id + '", "type": "response", "status": "2", "data": ' + JSON.stringify(JSON.stringify(data)) + ' }',
      success: function(data) { result = data; }
    });
    return result;
  }

  // Start scripting by pe (phumin@sawasdee.org)
  var api = "http://www.siamsquare.org.uk";
  var surveyid = <?php echo $_GET["s"]; ?>;
  var cid = "<?php echo $userid; ?>";
  var email = "<?php echo $email; ?>";
  var title = "Project <?php echo $project; ?>";
  var ip = "<?php echo getip(); ?>";
  var pilot = <?php echo $pilottest; ?>;
  var readonly = <?php echo $readonly; ?>;
  var colour = <?php echo $showcolour; ?>;
  $.ajaxSetup({ headers: { 'X-Requested-With': 'aa5e1ab4-b0bf-4e82-8584-7cf4e9fdeaa8' } });
  if (colour == 1) { Survey.defaultBootstrapCss.navigationButton = "btn btn-primary"; Survey.defaultBootstrapCss.progressBar = "progress-bar progress-bar-primary progress-bar-striped active"; }
  else if (colour == 2) { Survey.defaultBootstrapCss.navigationButton = "btn btn-danger"; Survey.defaultBootstrapCss.progressBar = "progress-bar progress-bar-danger progress-bar-striped active"; }
  else if (colour == 3) { Survey.defaultBootstrapCss.navigationButton = "btn btn-info"; Survey.defaultBootstrapCss.progressBar = "progress-bar progress-bar-info progress-bar-striped active"; }
  else if (colour == 4) { Survey.defaultBootstrapCss.navigationButton = "btn btn-success"; Survey.defaultBootstrapCss.progressBar = "progress-bar progress-bar-success progress-bar-striped active"; }
  else if (colour == 5) { Survey.defaultBootstrapCss.navigationButton = "btn btn-warning"; Survey.defaultBootstrapCss.progressBar = "progress-bar progress-bar-warning progress-bar-striped active"; }
  else if (colour == 6) { Survey.defaultBootstrapCss.navigationButton = "btn btn-danger"; Survey.defaultBootstrapCss.progressBar = "progress-bar progress-bar-danger progress-bar-striped active"; }
  else if (colour == 7) { Survey.defaultBootstrapCss.navigationButton = "btn btn-warning"; Survey.defaultBootstrapCss.progressBar = "progress-bar progress-bar-warning progress-bar-striped active"; }
  else if (colour == 8) { Survey.defaultBootstrapCss.navigationButton = "btn btn-info"; Survey.defaultBootstrapCss.progressBar = "progress-bar progress-bar-info progress-bar-striped active"; }
  else { Survey.defaultBootstrapCss.navigationButton = "btn btn-info"; Survey.defaultBootstrapCss.progressBar = "progress-bar progress-bar-info progress-bar-striped active"; }
  Survey.Survey.cssType = "bootstrap";

  var survey = new Survey.Model (getsurveydata(surveyid));
  if (readonly == 1) { survey.mode = "display"; $(function () { $('#pageComplete').attr('disabled', 'disabled'); }); } else if (readonly == 0) { survey.mode = "edit"; }
  if (pilot != 1) {
    var checksave = getsavesurveydata(surveyid, email);
    if ((checksave.data == null) || (checksave.data == "")) { resultid = null; }
    else {
      survey.data = checksave.data; resultid = checksave.id;
      moment.locale('en'); s1 = moment(checksave.saved).fromNow(); s2 = moment(checksave.saved).format("D MMM YYYY"); s3 = moment(checksave.saved).format("h:mm:ss a");
      $('#notification').html("<div class='alert alert-warning'><h4><i class='pe-save pe-lg pe-fw'></i> พบข้อมูลเก่าค้างไว้จากครั้งก่อน</h4><span>ระบบพบข้อมูลเก่าบางส่วนที่คุณเคยทำไว้ตั้งแตวันที่่ " + s2 + " เวลา " + s3 + " (" + s1 + ") และคุณสามารถใช้ข้อมูลนี้ต่อได้ทันที<br>หากคุณต้องการเริ่มใหม่ คุณสามารถทำได้โดยกด <button type=\"button\" id=\"resetsave\" class=\"btn btn-xs btn-danger\">Reset</button></span></div>").hide();
      $('#notification').show();
      survey.onCurrentPageChanged.add(function(data) { $('#notification').hide(); });
    }
  }

  Survey.JsonObject.metaData.addProperty("dropdown", { name: "dateFormat", default: "dd-mm-yy", choices: ["dd-mm-yy", "dd/mm/yy", "M d, y", "d MM yy", "DD, d MM yy", "'day' d 'of' MM 'in the year' yy"]});
  var widget1 = {
    name: "datepicker",
    htmlTemplate: "<input id='widget-datepicker' type='text' style='width: 100%;'>",
    isFit: function(question) { return question.inputType == 'date'; },
    afterRender: function(question, el) {
      if (question.dateFormat) { dateFormat = question.dateFormat; } else { dateFormat = 'd MM yy'; }
      var widget1 = $(el).datepicker({ dateFormat: dateFormat });
      widget1.on("change", function (e) { question.value = $(this).val(); });
      question.valueChangedCallback = function() { widget1.datepicker('setDate', new Date(question.value)); }
      widget1.datepicker('setDate', new Date(question.value || Date.now));
    }
  }
  Survey.CustomWidgetCollection.Instance.addCustomWidget(widget1);

  // Survey.JsonObject.metaData.addProperty("dropdown", { name: "renderAs", default: "standard", choices: ["standard", "barrating"] });
  // Survey.JsonObject.metaData.addProperty("dropdown", { name: "ratingTheme", default: "fontawesome-stars", choices: ["fontawesome-stars", "css-stars", "bars-pill", "bars-1to10", "bars-movie", "bars-square", "bars-reversed", "bars-horizontal", "bootstrap-stars", "fontawesome-stars-o"] });
  // Survey.JsonObject.metaData.addProperty("dropdown", { name: "showValues", default: false });
  // // var survey = new Survey.Model({ questions: [{ type: "dropdown", name: "barrating1", renderAs: "barrating", "ratingTheme": "fontawesome-stars", title: "Please rate the moive you've just watched", choices: ["1", "2", "3", "4", "5"] }] });
  // var widget2 = {
  //   name: "antennaio-jquery-bar-rating",
  //   isFit : function(question) { return question["renderAs"] === 'barrating'; },
  //   isDefaultRender: true,
  //   afterRender: function(question, el) {
  //     var $el = $(el);
  //     $el.barrating('show', {
  //       theme: question.ratingTheme,
  //       initialRating: question.value,
  //       showValues: question.showValues,
  //       showSelectedRating: false,
  //       onSelect: function(value, text) { question.value = value; }
  //     });
  //     question.valueChangedCallback = function() { $(el).find('select').barrating('set', question.value); }
  //   }
  // }
  // Survey.CustomWidgetCollection.Instance.addCustomWidget(widget2);
  // // survey.data = { barrating1: "3" };

  Survey.JsonObject.metaData.addProperty("dropdown", { name: "renderAs", default: "standard", choices: ["standard", "barrating"] });
  Survey.JsonObject.metaData.addProperty("dropdown", { name: "ratingTheme", default: "fontawesome-stars", choices: ["fontawesome-stars", "css-stars", "bars-pill", "bars-1to10", "bars-movie", "bars-square", "bars-reversed", "bars-horizontal", "bootstrap-stars", "fontawesome-stars-o"] });
  Survey.JsonObject.metaData.addProperty("dropdown", { name: "showValues", default: false });
  // var survey = new Survey.Model({ questions: [{ type: "dropdown", name: "barrating1", renderAs: "barrating", "ratingTheme": "fontawesome-stars", title: "Please rate the moive you've just watched", choices: ["1", "2", "3", "4", "5"] }] });
  var widget2 = {
    name: "antennaio-jquery-bar-rating",
    isFit : function(question) { return question["renderAs"] === 'barrating'; },
    isDefaultRender: true,
    afterRender: function(question, el) {
      var $el = $(el);
      if (question.ratingTheme) { ratingTheme = question.ratingTheme; } else { ratingTheme = 'fontawesome-stars'; }
      if (question.showValues) { showValues = question.showValues; } else { showValues = false; }
      $el.barrating('destroy');
      $el.barrating('show', {
        theme: ratingTheme,
        initialRating: question.value,
        showValues: showValues,
        showSelectedRating: false,
        onSelect: function(value, text) { question.value = value; }
      });
      // question.valueChangedCallback = function() { $(el).find('select').barrating('set', question.value); }
      question.valueChangedCallback = function() { $el.barrating('set', question.value); }
    }
  }
  Survey.CustomWidgetCollection.Instance.addCustomWidget(widget2);

  survey.render("runsurvey");
  $('#showupload').html("<div class='alert alert-info'><i class='pe-spinner pe-pulse pe-lg pe-fw'></i> ระบบกำลังอัพโหลดรูปของคุณ ระหว่างนี้คุณสามารถทำรายการต่อได้ทันที และอีกสักครู่เมื่อระบบทำงานในส่วนนี้เสร็จ ข้อความนี้จะหายไปเอง</div>").hide();
  $('#showcompletion').html("<div class='alert alert-success'><i class='pe-check-square-o pe-lg pe-fw'></i> เราได้ทำการจัดเก็บความคิดเห็นของคุณลงระบบเป็นที่เรียบร้อยแล้ว</div>").hide();
  $('#resetsave').on('click', function() { clearsavesurveydata(resultid, ip, email, surveyid, title); });
  survey.onComplete.add(function (s) { postsurveydata(cid, ip, email, surveyid, survey.data, title, pilot); });
  survey.onUploadFile.add(function (data) { $('#showupload').show(); setTimeout(function () { $("#showupload").slideUp(500, function () { $("#showupload").hide(); }); }, 6000); });
  if (pilot != 1) { survey.onCurrentPageChanged.add(function (data) { autosavesurveydata(cid, ip, email, surveyid, survey.data, title); }); }
  // survey.onComplete
  // survey.onCurrentPageChanged
  // survey.onValueChanged
  // survey.onVisibleChanged
  // survey.onPageVisibleChanged
  // survey.onQuestionAdded
  // survey.onQuestionRemoved
  // survey.onValidateQuestion
  // survey.onProcessHtml
  // survey.onSendResult
  // survey.onGetResult
  // survey.onUploadFile
</script>

<?php

  if (($cdescription) && ($showabout == 2)) {
    echo "<div class=\"row companydetail\" style=\"margin-top: 40px\">\n";
    echo "  <div class=\"container\">\n";
    echo "    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n";
    echo "      <h5 class=\"companydetailhead\">เกี่ยวกับบริษัท</h5>\n";
    echo "    </div>\n";
    echo "    <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6 companylogoboxA\">\n";
    if ($language_credential == 1) {
      if ($cwebsite) { echo "      <div class=\"companyname\"><a href=\"$cwebsite\" class=\"footerlogo\" title=\"$cfullname\" style=\"color:black; text-decoration:none\"><strong>$cfullname</strong></a></div>\n"; }
      else { echo "      <div class=\"companyname\"><strong>$cfullname</strong></div>\n"; }
    }
    else {
      if ($cwebsite) { echo "      <div class=\"companyname\"><a href=\"$cwebsite\" class=\"footerlogo\" title=\"$cfullname_th\" style=\"color:black; text-decoration:none\"><strong>$cfullname_th</strong></a></div>\n"; }
      else { echo "      <div class=\"companyname\"><strong>$cfullname_th</strong></div>\n"; }
    }
    echo "    </div>\n";
    if ($language_credential == 1) { echo "    <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6 companylogoboxB\">\n"; }
    else { echo "    <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6 companylogoboxA\">\n"; }
    if ($language_credential == 1) {
      if ($cwebsite) { echo "      <div class=\"companylogo\"><a href=\"http://www.pebinary.com\" class=\"footerlogo\" title=\"PE BINARY CO., LTD.\" style=\"color:black; text-decoration:none\"><span class=\"logo1\"><i class=\"pe-logo\"></i></span>&nbsp;<span class=\"logo2\">pe</span><span class=\"logo3\">binary</span></a></div>\n"; }
      else { echo "      <div class=\"companylogo\"><span class=\"logo1\"><i class=\"pe-logo\"></i></span>&nbsp;<span class=\"logo2\">pe</span><span class=\"logo3\">binary</span></div>\n"; }
    }
    else {
      if ($cwebsite) { echo "      <div class=\"companyname\"><a href=\"http://www.pebinary.com\" class=\"footerlogo\" title=\"บริษัท พีอี ไบนารี่ จำกัด\" style=\"color:black; text-decoration:none\"><strong>บริษัท พีอี ไบนารี่ จำกัด</strong></a></div>\n"; }
      else { echo "      <div class=\"companyname\"><strong>บริษัท พีอี ไบนารี่ จำกัด</strong></div>\n"; }
    }
    echo "    </div>\n";
    echo "  </div>\n";
    echo "  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n";
    echo "    <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\n";
    if ($language_credential== 1) { echo "      <p class=\"companydescription\">".$cdescription."</p>"; }
    else { echo "      <p class=\"companydescriptionth\">".$cdescription_th."</p>"; }
    echo "    </div>\n";
    echo "    <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\n";
    if ($language_credential== 1) { echo "      <p class=\"companydescription\">A revolutionary market research company founded in 2016 with a vision to help clients changing the way they access consumer insights. The company provides accurate and more responsive consumer insights allowing business decisions to be made quicker.</p>"; }
    else { echo "      <p class=\"companydescriptionth\">บริษัทวิจัยการตลาดที่มุ่งเน้นการสร้างธุรกิจกับการทำวิจัยผ่านสื่อออนไลน์เป็นหลัก เพื่อยกระดับให้ธุรกิจการทำวิจัยตลาดให้มีความทันสมัยและสามารถตอบโจทย์และความต้องการในยุคดิจิตัลได้เป็นอย่างดี</p>"; }
    echo "    </div>\n";
    echo "  </div>\n";
    echo "  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n";
    echo "    <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\n";
    echo "      <p class=\"companydescription\">\n";
    if ($cwebsite) {
      if ($language_credential== 1) { echo "        <i class=\"pe-globe pe-fw\"></i> <a href=\"$cwebsite\" title=\"$cfullname\" target=\"_blank\">$cwebsite</a><br>\n"; }
      else { echo "        <i class=\"pe-globe pe-fw\"></i> <a href=\"$cwebsite\" title=\"$cfullname_th\" target=\"_blank\">$cwebsite</a><br>\n"; }
    } else { echo "        <br>"; }
    if ($cemail) {
      if ($language_credential== 1) { echo "        <i class=\"pe-envelope pe-fw\"></i> <a href=\"mailto:$cemail\" title=\"Contact $cfullname\" target=\"_blank\">$cemail</a><br>\n"; }
      else { echo "        <i class=\"pe-envelope pe-fw\"></i> <a href=\"mailto:$cemail\" title=\"ติดต่อ $cfullname_th\" target=\"_blank\">$cemail</a><br>\n"; }
    } else { echo "        <br>"; }
    echo "      </p>\n";
    echo "    </div>\n";
    echo "    <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\n";
    echo "      <p class=\"companydescription\" style=\"margin-bottom:20px !important\">\n";
    if ($language_credential== 1) {
      echo "        <i class=\"pe-globe pe-fw\"></i> <a href=\"http://www.pebinary.com\" title=\"PE BINARY CO., LTD.\" target=\"_blank\">http://www.pebinary.com</a><br>\n";
      echo "        <i class=\"pe-envelope pe-fw\"></i> <a href=\"mailto:info@pebinary.com\" title=\"Contact PE BINARY CO., LTD.\" target=\"_blank\">info@pebinary.com</a><br>\n";
    }
    else {
      echo "        <i class=\"pe-globe pe-fw\"></i> <a href=\"http://www.pebinary.com\" title=\"บริษัท พีอี ไบนารี่ จำกัด\" target=\"_blank\">http://www.pebinary.com</a><br>\n";
      echo "        <i class=\"pe-envelope pe-fw\"></i> <a href=\"mailto:info@pebinary.com\" title=\"ติดต่อ บริษัท พีอี ไบนารี่ จำกัด\" target=\"_blank\">info@pebinary.com</a><br>\n";
    }
    echo "      </p>\n";
    echo "    </div>\n";
    echo "  </div>\n";
    echo "</div>\n";
  }
}

echo "<style>\n";
echo "  header .header-2, footer .footer-2 { ".themeBG($showcolour)." }\n";
echo "</style>\n";

if ($project || $notes) { pageFooter($project, $notes); } else { pageFooter(); }

// copy results
// 1. copy j_results to j_temp with structure and all data
// 2. remove all excetp surveyid = 8 --> DELETE FROM `j_temp` WHERE `surveyid` <> 8;
// 3. update to a new surveyid --> UPDATE `j_temp` SET surveyid = 19;
// 4. insert back to j_results --> INSERT INTO `j_results` (`rd`, `email`, `ip`, `surveyid`, `submitted`, `data`, `status`) SELECT `rd`, `email`, `ip`, `surveyid`, `submitted`, `data`, `status` FROM `j_temp`
// replace results
// UPDATE `j_results` SET `data` = REPLACE(`data`, '8_', '19_') WHERE `surveyid` = 19

?>
