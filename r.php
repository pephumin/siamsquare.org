<?php


$mobile = 0; $mpilot = 0; $mdesign = 0; $readonly = 0;
if ($_GET['mobile'] == "✓") { $mobile = 1; }
else if ($_GET['pilot'] == "✓") { $mpilot = 1; }
else if ($_GET['designer'] == "✓") { $mdesign = 1; $readonly = 1; }

require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/config.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/functions.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/class.login.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/class.imgresize.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/class.phpmailer.php';
if ($mobile == 1) { require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/incslude/mobile.php'; }
else { require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/themes.php'; }

$login = new Login();

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
  $poptions = $r->options;
  $cwebsite = $r->website;
  $cemail = $r->email;
  $ccompany = $r->company;
  $cfullname = $r->fullname;
  $cfullname_th = $r->fullname_th;
  $cdescription = strip_tags($r->DD);
  $cdescription_th = strip_tags($r->DD_th);
  $private = $r->private;
  $pincode = $r->pin;
  $precodes = $r->precodes;
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

if (!empty($_GET['rd'])) {
  $q2 = $db->prepare("SELECT data FROM j_results WHERE id = :id AND surveyid = :surveyid");
  $q2->bindValue(':id', $_GET["rd"], PDO::PARAM_INT);
  $q2->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
  $q2->execute();
  while ($r = $q2->fetchObject()) {
    $resultdata = $r->data;
  }
  $readonly = 0;
}


// $showsurvey = 0;
//
// // Check email and token if it is a private survey
// if ($private == 1) {
//   if (empty($_GET["email"])) {
//     $email = "anonymous@siamsquare.org";
//     $userid = 0;
//     $showsurvey = 1;
//     // $title = "เกิดข้อผิดพลาด";
//     // pageHeader($title);
//     // echo "<h2>ไม่พบอีเมล์ของคุณ</h2>\n";
//     // echo "<p>ไม่สามารถทำรายการต่อได้เนื่องจากไม่พบอีเมล์ของคุณ กรุณาตรวจสอบให้แน่ใจว่าคุณได้พิมพ์ที่อยู่เว็บไซต์ได้ถูกต้องและครบถ้วน</p>\n";
//     // echo "<p>หากจะให้แน่นอนที่สุด เราขอแนะนำให้กดจากลิ๊งที่คุณได้รับโดยตรง จะรับประกันได้ว่าไม่มีข้อผิดพลาดอย่างเด็ดขาด</p>\n";
//     // echo mkerror("เกิดข้อผิดพลาด ไม่สามารถทำรายการได้เนื่องจากไม่พบอีเมล์ของคุณ");
//     // echo "<p>คุณสามารถ<a href=\"/members/contact/\">ติดต่อมาที่เราได้ทุกเวลา</a> หากคุณมีความประสงค์ต้องการข้อมูลหรือความช่วยเหลือเพิ่มเติม</p>\n";
//     // pageFooter();
//     // exit;
//   } else if (empty($_GET["token"])) {
//     $email = "anonymous@siamsquare.org";
//     $userid = 0;
//     $showsurvey = 1;
//     // $title = "เกิดข้อผิดพลาด";
//     // pageHeader($title);
//     // echo "<h2>ไม่พบรหัสผ่าน</h2>\n";
//     // echo "<p>ไม่สามารถทำรายการต่อได้เนื่องจากไม่พบรหัสผ่าน กรุณาตรวจสอบให้แน่ใจว่าคุณได้พิมพ์ที่อยู่เว็บไซต์ได้ถูกต้องและครบถ้วน</p>\n";
//     // echo "<p>หากจะให้แน่นอนที่สุด เราขอแนะนำให้กดจากลิ๊งที่คุณได้รับโดยตรง จะรับประกันได้ว่าไม่มีข้อผิดพลาดอย่างเด็ดขาด</p>\n";
//     // echo mkerror("เกิดข้อผิดพลาด ไม่สามารถทำรายการได้เนื่องจากไม่พบรหัสผ่าน");
//     // echo "<p>คุณสามารถ<a href=\"/members/contact/\">ติดต่อมาที่เราได้ทุกเวลา</a> หากคุณมีความประสงค์ต้องการข้อมูลหรือความช่วยเหลือเพิ่มเติม</p>\n";
//     // pageFooter();
//     // exit;
//   } else {
//     $q1 = $db->prepare("SELECT * FROM j_respondents WHERE email = :email AND surveyid :surveyid");
//     $q1->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
//     $q1->bindValue(':email', $_GET["email"], PDO::PARAM_STR);
//     $q1->execute();
//     if ($q1->rowCount() == 0) {
//       $title = "เกิดข้อผิดพลาด";
//       pageHeader($title);
//       echo "<h2>อีเมล์ของคุณไม่ถุกต้อง</h2>\n";
//       echo "<p>ไม่สามารถทำรายการต่อได้เนื่องจากอีเมล์ของคุณไม่ถุกต้อง กรุณาตรวจสอบให้แน่ใจว่าคุณได้พิมพ์ที่อยู่เว็บไซต์ได้ถูกต้องและครบถ้วน</p>\n";
//       echo "<p>หากจะให้แน่นอนที่สุด เราขอแนะนำให้กดจากลิ๊งที่คุณได้รับโดยตรง จะรับประกันได้ว่าไม่มีข้อผิดพลาดอย่างเด็ดขาด</p>\n";
//       echo mkerror("เกิดข้อผิดพลาด ไม่สามารถทำรายการได้เนื่องจากอีเมล์ของคุณไม่ถุกต้อง");
//       echo "<p>คุณสามารถ<a href=\"/members/contact/\">ติดต่อมาที่เราได้ทุกเวลา</a> หากคุณมีความประสงค์ต้องการข้อมูลหรือความช่วยเหลือเพิ่มเติม</p>\n";
//       pageFooter();
//       exit;
//     } else {
//       while ($row = $q1->fetchObject()) {
//         $password = $row->password;
//         if ($password != $_GET["token"]) {
//           $title = "เกิดข้อผิดพลาด";
//           pageHeader($title);
//           echo "<h2>รหัสลับของคุณไม่ถุกต้อง</h2>\n";
//           echo "<p>ไม่สามารถทำรายการต่อได้เนื่องจากรหัสลับของคุณไม่ถุกต้อง กรุณาตรวจสอบให้แน่ใจว่าคุณได้พิมพ์ที่อยู่เว็บไซต์ได้ถูกต้องและครบถ้วน</p>\n";
//           echo "<p>หากจะให้แน่นอนที่สุด เราขอแนะนำให้กดจากลิ๊งที่คุณได้รับโดยตรง จะรับประกันได้ว่าไม่มีข้อผิดพลาดอย่างเด็ดขาด</p>\n";
//           echo mkerror("เกิดข้อผิดพลาด ไม่สามารถทำรายการได้เนื่องจากรหัสลับของคุณไม่ถุกต้อง");
//           echo "<p>คุณสามารถ<a href=\"/members/contact/\">ติดต่อมาที่เราได้ทุกเวลา</a> หากคุณมีความประสงค์ต้องการข้อมูลหรือความช่วยเหลือเพิ่มเติม</p>\n";
//           pageFooter();
//           exit;
//         } else {
//           $email = $_GET["email"];
//           $userid = $row->id;
//           $showsurvey = 1;
//           // Update respondent participation
//           $q2 = $db->prepare("UPDATE j_respondents SET participation = NOW() WHERE email = :email AND surveyid = :surveyid");
//           $q2->bindValue(':email', $_GET["email"], PDO::PARAM_INT);
//           $q2->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
//           $q2->execute();
//         }
//       }
//     }
//   }
// } else if ($private == 0) {
//   $login = new Login();
//   if ($login->isUserLoggedIn() == true) {
//     $email = $_SESSION["email"];
//     $userid = $_SESSION["userid"];
//     $showsurvey = 1;
//   } else if (($_GET["email"]) && ($_GET["token"])) {
//     $q1 = $db->prepare("SELECT * FROM j_respondents WHERE email = :email AND surveyid :surveyid");
//     $q1->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
//     $q1->bindValue(':email', $_GET["email"], PDO::PARAM_STR);
//     $q1->execute();
//     if ($q1->rowCount() == 0) {
//       $title = "เกิดข้อผิดพลาด";
//       pageHeader($title);
//       echo "<h2>อีเมล์ของคุณไม่ถุกต้อง</h2>\n";
//       echo "<p>ไม่สามารถทำรายการต่อได้เนื่องจากอีเมล์ของคุณไม่ถุกต้อง กรุณาตรวจสอบให้แน่ใจว่าคุณได้พิมพ์ที่อยู่เว็บไซต์ได้ถูกต้องและครบถ้วน</p>\n";
//       echo "<p>หากจะให้แน่นอนที่สุด เราขอแนะนำให้กดจากลิ๊งที่คุณได้รับโดยตรง จะรับประกันได้ว่าไม่มีข้อผิดพลาดอย่างเด็ดขาด</p>\n";
//       echo mkerror("เกิดข้อผิดพลาด ไม่สามารถทำรายการได้เนื่องจากอีเมล์ของคุณไม่ถุกต้อง");
//       echo "<p>คุณสามารถ<a href=\"/members/contact/\">ติดต่อมาที่เราได้ทุกเวลา</a> หากคุณมีความประสงค์ต้องการข้อมูลหรือความช่วยเหลือเพิ่มเติม</p>\n";
//       pageFooter();
//       exit;
//     } else {
//       while ($row = $q1->fetchObject()) {
//         $password = $row->password;
//         if ($password != $_GET["token"]) {
//           $title = "เกิดข้อผิดพลาด";
//           pageHeader($title);
//           echo "<h2>รหัสลับของคุณไม่ถุกต้อง</h2>\n";
//           echo "<p>ไม่สามารถทำรายการต่อได้เนื่องจากรหัสลับของคุณไม่ถุกต้อง กรุณาตรวจสอบให้แน่ใจว่าคุณได้พิมพ์ที่อยู่เว็บไซต์ได้ถูกต้องและครบถ้วน</p>\n";
//           echo "<p>หากจะให้แน่นอนที่สุด เราขอแนะนำให้กดจากลิ๊งที่คุณได้รับโดยตรง จะรับประกันได้ว่าไม่มีข้อผิดพลาดอย่างเด็ดขาด</p>\n";
//           echo mkerror("เกิดข้อผิดพลาด ไม่สามารถทำรายการได้เนื่องจากรหัสลับของคุณไม่ถุกต้อง");
//           echo "<p>คุณสามารถ<a href=\"/members/contact/\">ติดต่อมาที่เราได้ทุกเวลา</a> หากคุณมีความประสงค์ต้องการข้อมูลหรือความช่วยเหลือเพิ่มเติม</p>\n";
//           pageFooter();
//           exit;
//         } else {
//           $email = $row->email;
//           $userid = $row->id;
//           $showsurvey = 1;
//         }
//       }
//     }
//   } else {
//     $ip = getip();
//     $email = "anonymous@siamsquare.org"; $userid = 0;
//     // $email = $_GET["email"];
//     // $surveyid = $_GET["s"];
//     // $q1 = $db->prepare("SELECT password FROM j_respondents_private WHERE email = :email AND surveyid = :surveyid");
//     // $q1->bindValue(':email', $email, PDO::PARAM_INT);
//     // $q1->bindValue(':surveyid', $surveyid, PDO::PARAM_INT);
//     // $q1->execute();
//     // while ($row = $q1->fetchObject()) { $password = $row->password; }
//   }
// }

// if (isset($_GET['o']) || ($_GET['o'] == "CNT")) {
//   $auth = $_GET['o'];
//   $continue = true;
//   $userid = 0;
//   // run function get email from CNT, fallback below
//   $email = "CNT@siamsquare.org";
// }

$showsurvey = 0;
if (($status == 1) && ($_GET['pilot'] == "✓")) { $showsurvey = 1; }
else if ($status == 2) { $showsurvey = 1; }
else if ($status == 3) { $readonly = 1; $closed = 1; }
else if ($status > 3) { $readonly = 1; }

if ($_SESSION["level"] == 9) { $email = $_SESSION["email"]; $userid = $_SESSION["userid"]; $showsurvey = 1; }

// if (($_GET["s"] == "28") || ($_GET["s"] == "29") || ($_GET["s"] == "31")) { $showsurvey = 1; }

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

if ($mpilot == 1) { echo "<div class='alert alert-warning'><i class='pe-exclamation-triangle pe-lg pe-fw'></i> <strong>Pilot test mode</strong> สามารถดูและตอบแบบสอบถามได้ครบถ้วน แต่ความคิดเห็นจะไม่ถูกนำไปประมวลผล</div>\n"; }
else if (($mpilot != 1) && ($readonly == 1)) {
  if ($closed == 1) { echo "<div class='alert alert-warning'><i class='pe-clock-o pe-lg pe-fw'></i> <strong>งานวิจัยสิ้นสุดไปแล้ว</strong> สามารถดูแบบสอบถามได้ แต่ไม่สามารถส่งความคิดเห็นได้</div>\n"; }
  else { echo "<div class='alert alert-warning'><i class='pe-exclamation-triangle pe-lg pe-fw'></i> <strong>Read-only mode</strong> สามารถดูแบบสอบถามได้ แต่ไม่สามารถส่งความคิดเห็นได้</div>\n"; }
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

echo "<div id=\"showupload\"></div><div id=\"showcompletion\"></div>\n";
echo "<div id=\"runsurvey\"></div><br>\n";
echo "<div id=\"notification\"></div>\n";

// // get interviewer names for auto-completion
// $sql = "SELECT * FROM j_results WHERE surveyid = :surveyid AND status = 2 ORDER BY submitted DESC";
// $q = $db->prepare($sql);
// $q->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
// $q->execute();
// $totalrecords = $q->rowCount();
// $r = $q->fetchAll(PDO::FETCH_ASSOC);
// $qq = "Interviewer";
// for ($i=0; $i < count($r); $i++) {
//   $j = $r[$i]["data"];
//   $j = json_decode($j, true);
//   $nn[] = $j[$qq];
// }
// asort($nn);
// $nnn = array_remove_empty(array_unique($nn));
// $out = "[";
// foreach ($nnn as $k => $v) { $out .= "{ \"interviewer\": \"".addslashes($nnn[$k])."\" }, "; }
// $out = rtrim($out, ', ');
// $out .= "]";

?>

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
  function getsurveyprecodes(id) {
    var result = "";
    $.ajax({
      url: api + '/survey/' + id + '/precodes',
      dataType: 'json',
      type: 'get',
      cache: false,
      async: false,
      success: function(data) { result = data; }
    });
    return result;
  }
  function getsurveyoptions(id) {
    var result = "";
    $.ajax({
      url: api + '/survey/' + id + '/options',
      dataType: 'json',
      type: 'get',
      cache: false,
      async: false,
      success: function(data) { result = data; }
    });
    return result;
  }
  function getinterviewers(id) {
    var result = "";
    $.ajax({
      url: api + '/interviewer/' + id,
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
    if (pilot == 1) { logger = "/log/" + cid; logmessage = '"userid": "' + cid + '"'; loglevel = 2; resultstatus = 1; }
    else { logger = "/rlog/" + email; logmessage = '"email": "' + email + '"'; loglevel = 1; resultstatus = 2; }
    $.ajax({
      url: api + '/submit',
      dataType: 'json',
      type: 'post',
      contentType: 'application/json; charset=utf-8',
      data: '{"rd": "' + cid + '", "ip": "' + cip + '", "email": "' + email + '", "surveyid": ' + id + ', "data": ' + JSON.stringify(JSON.stringify(data)) + ', "status": ' + resultstatus + ' }',
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
    // window.setTimeout(function() { window.location.reload(); }, 1500);
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
  var pilot = <?php if (($mpilot == "1") || ($mdesign == "1") || ($closed == "1")) { echo "1"; } else { echo "0"; } ?>;
  var readonly = <?php echo $readonly; ?>;
  var colour = <?php echo $showcolour; ?>;
  var pincode = "<?php echo $pincode; ?>";
  var terminated = "<h2><i class='pe-ban pe-fw red'></i> ยุติการสัมภาษณ์</h2>\n\n<p>ระบบได้ทำการยุติการสัมภาษณ์สืบเนื่องมาจากคุณใส่รหัส pin code ไม่ถูกต้อง</p>\n\n<p>กรุณาลองใหม่อีกครั้งโดยการกลับไปเริ่มที่หน้าแรกอีกครั้ง หรือกดที่นี่ <a href='' class='btn btn-xs btn-warning' type='button' onClick='window.location.reload()'><i class='pe-undo pe-fw'></i> Refresh</a></p>\n\n<p>และหลังจากที่คุณใส่รหัส pincode ที่ถูกต้อง ระบบจะนำคุณเข้าสู่แบบสอบถามหลักในทันที</p>";
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

  Survey.JsonObject.metaData.addProperty("text", { name: "dateFormat", default: "d MM yy", choices: ["d MM yy", "dd-mm-yy", "dd/mm/yy", "dd.mm.yy", "M d, yy", "DD d MM yy"] });
  Survey.JsonObject.metaData.addProperty("html", { name: "colourFormat", default: "info", choices: ["info", "success", "warning", "danger"] });
  Survey.JsonObject.metaData.addProperty("dropdown", { name: "renderAs", default: "standard", choices: ["standard", "barrating", "NPS", "imagepicker"] });
  Survey.JsonObject.metaData.addProperty("dropdown", { name: "ratingTheme", default: "star", choices: ["star", "heart", "thumb", "check", "bell", "flag", "user", "square-1", "square-2", "square-3"] });
  Survey.JsonObject.metaData.addProperty("dropdown", { name: "showValues:boolean", default: false });
  Survey.JsonObject.metaData.addProperty("text", { name: "renderAs", default: "standard", choices: ["standard", "signaturepad", "autocomplete"]});
  // Survey.JsonObject.metaData.addProperty("text", {
  //   name: "choices:itemvalues",
  //   onGetValue: function(obj) { return Survey.ItemValue.getData(obj.choices || []); },
  //   // onSetValue: function(obj, value) { if (!obj.choices) { obj.choices = obj.createItemValues("choices"); } obj.choices = value; }
  //   onSetValue: function(obj, value) { obj.choices = value; }
  // });
  // Survey.JsonObject.metaData.addProperty("text", { name: "choicesByUrl:restfull", className: "ChoicesRestfull", onGetValue: function(obj) { return obj && obj.choicesByUrl && obj.choicesByUrl.getData(); }, onSetValue: function(obj, value) { if (!obj.choicesByUrl) { obj.choicesByUrl = new Survey.ChoicesRestfull(); } obj.choicesByUrl.setData(value); } });
  Survey.JsonObject.metaData.addProperty("questionbase", { name: "tooltip" });
  Survey.JsonObject.metaData.addProperty("radiogroup", { name: "renderAs", default: "standard", choices: ["standard", "slider"] });

  var widget1 = {
    name: "datepicker",
    htmlTemplate: "<input id='widget-datepicker' type='text' style='width:100%;'>",
    isFit: function(question) { return question.inputType == 'date'; },
    afterRender: function(question, el) {
      if (question.dateFormat) { dateFormat = question.dateFormat; } else { dateFormat = 'd MM yy'; }
      var widget1 = $(el).datepicker({ dateFormat: dateFormat });
      // var widget1 = $(el).datepicker({ dateFormat: dateFormat, onSelect: function(dateText) { question.value = dateText; } });
      widget1.on("change", function(e) { question.value = $(this).val(); });
      question.valueChangedCallback = function() { widget1.datepicker('setDate', new Date(question.value)); }
      widget1.datepicker('setDate', new Date(question.value || Date.now));
    }
  }
  Survey.CustomWidgetCollection.Instance.addCustomWidget(widget1);
  var widget2 = {
    name: "icon",
    isFit: function(question) { return question["renderAs"] === 'barrating'; },
    isDefaultRender: true,
    afterRender: function(question, el) {
      var $el = $(el);
      if (question.ratingTheme) { ratingTheme = question.ratingTheme; } else { ratingTheme = 'star'; }
      if (question.showValues) { showValues = question.showValues; } else { showValues = false; }
      $el.barrating('destroy');
      $el.barrating('show', {
        theme: ratingTheme,
        // colour: ratingColour,
        initialRating: question.value,
        showValues: showValues,
        showSelectedRating: true,
        onSelect: function(value, text) { question.value = value; }
      });
      question.valueChangedCallback = function() { $el.barrating('set', question.value); }
    }
  }
  Survey.CustomWidgetCollection.Instance.addCustomWidget(widget2);
  var widget3 = {
    name: "NPS",
    isFit: function(question) { return question["renderAs"] === 'NPS'; },
    isDefaultRender: true,
    afterRender: function(question, el) {
      var $el = $(el);
      if (question.ratingTheme) { ratingTheme = question.ratingTheme; } else { ratingTheme = 'square-2'; }
      if (question.showValues) { showValues = question.showValues; } else { showValues = true; }
      $el.barrating('destroy');
      $el.barrating('show', {
        theme: ratingTheme,
        initialRating: question.value,
        showValues: true,
        showSelectedRating: true,
        onSelect: function(value, text) { question.value = value; }
      });
      question.valueChangedCallback = function() { $el.barrating('set', question.value); }
    }
  }
  Survey.CustomWidgetCollection.Instance.addCustomWidget(widget3);
  var widget4 = {
    name: "imagepicker",
    isFit: function(question) { return question["renderAs"] === 'imagepicker'; },
    isDefaultRender: true,
    afterRender: function(question, el) {
      var $el = $(el);
      var options = $el.find('option');
      for (var i=1; i<options.length; i++) { options[i].dataset["imgSrc"] = options[i].text; }
      $el.imagepicker({
        hide_select: true,
        show_label: false,
        selected: function(opts) { question.value = opts.picker.select[0].value; }
      })
    }
  }
  Survey.CustomWidgetCollection.Instance.addCustomWidget(widget4);
  var widget5 = {
    name: "signaturepad",
    htmlTemplate: "<div class='wrapper' style='position:relative; width:500px; height:300px; user-select:none;'><canvas width='500' height='300' style='width:500px; height:300px; border:1px solid lightgrey;'></canvas><button id='clear' class='btn btn-xs btn-danger' style='position:absolute; right:0; top:0;'>Clear</button></div>",
    isFit : function(question) { return question["renderAs"] === 'signaturepad'; },
    afterRender: function(question, el) {
      var me = this;
      var canvas = el.getElementsByTagName("canvas")[0];
      question.signaturePad = signaturePad;
      var signaturePad = new SignaturePad(canvas, { backgroundColor: 'rgb(255, 255, 255)', penColor: 'rgb(0, 0, 0)' });
      signaturePad.fromDataURL(question.value);
      if (question.isReadOnly) { signaturePad.off(); }
      function resizeCanvas(canvas) {
        var context = canvas.getContext("2d");
        var devicePixelRatio = window.devicePixelRatio || 1;
        var backingStoreRatio = context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio || context.backingStorePixelRatio || 1;
        var ratio = devicePixelRatio / backingStoreRatio;
        var oldWidth = canvas.width;
        var oldHeight = canvas.height;
        canvas.width = oldWidth * ratio;
        canvas.height = oldHeight * ratio;
        canvas.style.width = oldWidth + "px";
        canvas.style.height = oldHeight + "px";
        context.scale(ratio, ratio);
      }
      window.onresize = resizeCanvas;
      resizeCanvas(canvas);
      signaturePad.onEnd = function() { var data = signaturePad.toDataURL(); question.value = data; };
      var buttonEl = el.getElementsByTagName("button")[0];
      buttonEl.onclick = function() { var data = signaturePad.clear(); question.value = data; };
    },
  }
  Survey.CustomWidgetCollection.Instance.addCustomWidget(widget5);
  var widget6 = {
    name: "slider",
    htmlTemplate: "<div id='slider'></div>",
    isFit: function(question) { return question["renderAs"] === 'slider'; },
    afterRender: function(question, el) {
      var options = question["choices"];
      var range = []; var vrange = [];
      for (var i=0; i<options.length; i++) { range.push(parseInt(options[i].value)); var proportion = 100/(options.length-1); vrange.push(proportion*i); }
      rangeAll = vrange; rangeLength = range.length; rangeMin = range[0]; rangeMax = range[range.length-1];
      if (!question.value) { question.value = 0; }
      if (!question.step) { if (rangeMax <= 50) { question.step = 1; } else { question.step = 5; } }
      el.style.marginBottom = "50px";
      var slider = noUiSlider.create(el, {
        start: question.value,
        connect: [true, false],
        step: question.step,
        tooltips: true,
        pips: { mode: "positions", values: rangeAll, density: 100/(rangeLength-1) },
        range: { min: [rangeMin], max: [rangeMax] }
      });
      slider.on("set", function() { question.value = slider.get(); });
      var updateValueHandler = function() { slider.set(question.value); };
      question.noUiSlider = slider;
      question.valueChangedCallback = updateValueHandler;
    },
  }
  Survey.CustomWidgetCollection.Instance.addCustomWidget(widget6);
  var widget7 = {
    name: "colourFormat",
    htmlTemplate: "<input id='widget-datepicker' type='text' style='width:100%;'>",
    isFit: function(question) { return question.inputType == 'date'; },
    afterRender: function(question, el) {
      if (question.dateFormat) { dateFormat = question.dateFormat; } else { dateFormat = 'd MM yy'; }
      var widget7 = $(el).datepicker({ dateFormat: dateFormat });
      // var widget1 = $(el).datepicker({ dateFormat: dateFormat, onSelect: function(dateText) { question.value = dateText; } });
      widget1.on("change", function(e) { question.value = $(this).val(); });
      question.valueChangedCallback = function() { widget1.datepicker('setDate', new Date(question.value)); }
      widget1.datepicker('setDate', new Date(question.value || Date.now));
    }
  }
  Survey.CustomWidgetCollection.Instance.addCustomWidget(widget7);
  var widget8 = {
    name: "autocomplete",
    htmlTemplate: "<input id='autocomplete' type='text' class='form-control' style='width:100%;'>",
    isFit: function(question) { return question["renderAs"] === 'autocomplete'; },
    afterRender: function(question, el) {
      var $el = $(el).is("input") ? $(el) : $(el).find("input");
      if (!question.choices) { question.choices = getinterviewers(surveyid); }
      // console.log(question.choices);
      var options = {
        data: question.choices,
        getValue: "interviewer",
        list: {
          sort: { enabled: true },
          match: { enabled: true },
          showAnimation: { type: "fade", time: 400, callback: function() {} },
          hideAnimation: { type: "slide",  time: 400, callback: function() {} },
          maxNumberOfElements: 10,
          // onSelectItemEvent: function() {
          //   // var index = $("#autocomplete").getSelectedItemIndex();
          //   // var value = $("#autocomplete").getItemData(index);
          //   $("#autocomplete").val(question.value).trigger("change");
          // }
        },
        placeholder: question.placeHolder
      }
      $el.easyAutocomplete(options);
    }
  }
  Survey.CustomWidgetCollection.Instance.addCustomWidget(widget8);

  var survey = new Survey.Model(getsurveydata(surveyid));
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

  <?php

  // $new = array();
  // foreach $precodes["group1"] as $question => $answer) {
  //   array_push($new, $precodes["group1"]);
  //   $pp = array_map(function ($question, $answer) { return array('question' => $question, '$nswer' => $answer); }
  // }
  // print_r($new);
  // print_r($pp);


  ?>

  function precoding(pre) {
    var newpre = new Array();
    if (pre.group1) { var group1 = pre.group1; for (var i=0; i<group1.length; i++) { newpre.push(group1[i]); } }
    if (pre.group2) { var group2 = pre.group2; for (var i=0; i<group2.length; i++) { newpre.push(group2[i]); } }
    if (pre.group3) { var group3 = pre.group3; for (var i=0; i<group3.length; i++) { newpre.push(group3[i]); } }
    if (pre.group4) { var group4 = pre.group4; for (var i=0; i<group4.length; i++) { newpre.push(group4[i]); } }
    var result = {}
    for (var i=0; i < newpre.length; i++) { result[newpre[i].question] = newpre[i].answer; }
    return result;
  }
  function subset(leader, follower, key) {
    survey.onValueChanged.add(function(survey, options) {
      if (options.name !== leader) { return; }
      largerSet = options.question.choices;
      var choices = [];
      for (var i=0; i<largerSet.length; i++) {
        var item = largerSet[i];
        if (key == "keep") { if (options.value.indexOf(item.value) >= 0) { choices.push(item); } }
        else if (key == "delete") { if (options.value.indexOf(item.value) < 0) { choices.push(item); } }
      }
      var smallerSet = survey.getQuestionByName(follower);
      smallerSet.choices = choices;
      smallerSet.visible = choices.length > 0;
    });
  }
  function PSM(leader, follower, key) {
    survey.onValueChanged.add(function(survey, options) {
      if (options.name !== leader) { return; }
      largerSet = options.question.choices;
      var choices = [];
      for (var i=0; i<largerSet.length; i++) {
        var item = largerSet[i];
        choices.push(item);
        if (options.value.indexOf(item.value) >= 0) {
          newchoices = choices.splice(0, i+1);
          newchoices.splice(-1, 1);
          if (key == "up") { output = choices; }
          else if (key == "down") { output = newchoices; }
        }
      }
      var smallerSet = survey.getQuestionByName(follower);
      smallerSet.choices = output;
      smallerSet.visible = choices.length > 0;
    });
  }
  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
  function maketotal(questionname, array) {
    survey.onValueChanged.add(function(survey, options) {
      if (options.name !== questionname) { return; }
      var total = 0;
      for (var i=0; i<array.length; i++) {
        var ff = parseInt(array[i].value);
        if (!isFinite(ff)) { ff = 0; }
        total += ff;
      }
      var myElem = document.getElementById("sumtotal");
      if (myElem != null) { myElem.parentElement.removeChild(myElem); }
      var table = $(".table")[0];
      var tbody = document.createElement("tbody");
      var tr = document.createElement("tr");
      var td1 = document.createElement("td");
      var td2 = document.createElement("td");
      $(tbody).attr("id", "sumtotal");
      if (total > 100) { td1.innerHTML = "<strong class='red'>รวมทั้งสิ้น</strong> (จะต้องเป็น 100 พอดี)"; td2.innerHTML = "<strong class='red'>" + total + "</strong>"; }
      else if (total == 100) { td1.innerHTML = "<strong class='green'>รวมทั้งสิ้น</strong> (จะต้องเป็น 100 พอดี)"; td2.innerHTML = "<strong class='green'>" + total + "</strong> <i class='pe-check green'></i>"; }
      else { td1.innerHTML = "<strong>รวมทั้งสิ้น</strong> (จะต้องเป็น 100 พอดี)"; td2.innerHTML = "<strong>" + total + "</strong>"; }
      tr.appendChild(td1);
      tr.appendChild(td2);
      tbody.appendChild(tr);
      table.appendChild(tbody);
    });
  }
  function pin(mypin) {
    survey.onValueChanged.add(function (survey, options) {
      if (survey.data.PIN != mypin) { survey.completedHtml = terminated; }
      else { return; }
    });
  }
  var optionsout = getsurveyoptions(surveyid);
  if (optionsout.keep) { for (var i=0; i<optionsout.keep.length; i++) { subset(optionsout.keep[i].leader, optionsout.keep[i].follower, "keep"); } }
  if (optionsout.delete) { for (var i=0; i<optionsout.delete.length; i++) { subset(optionsout.delete[i].leader, optionsout.delete[i].follower, "delete"); } }
  if (optionsout.shuffle) { for (var i=0; i<optionsout.shuffle.length; i++) { var matrix = survey.getQuestionByName(optionsout.shuffle[i].questionname); shuffle(matrix.rows); } }
  if (optionsout.maketotal) { for (i=0; i<optionsout.maketotal.length; i++) { var makingtotal = survey.getQuestionByName(optionsout.maketotal[i].questionname); maketotal(makingtotal.name, makingtotal.itemsValues); } }
  if (optionsout.PSM) { for (var i=0; i<optionsout.PSM.length; i++) { PSM(optionsout.PSM[i].cheap, optionsout.PSM[i].expensive, "up"); PSM(optionsout.PSM[i].cheap, optionsout.PSM[i].tooexpensive, "up"); PSM(optionsout.PSM[i].cheap, optionsout.PSM[i].toocheap, "down"); PSM(optionsout.PSM[i].expensive, optionsout.PSM[i].tooexpensive, "up"); } }
  if (pincode) { pin(pincode); }


  var tryAPIGeolocation = function() {
    jQuery.post( "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyA0MZthPLSO48HzjyPNXY9125WpbURDXVU", function(success) {
      apiGeolocationSuccess({ coords: { latitude: success.location.lat, longitude: success.location.lng } });
    })
    .fail(function(err) {
      console.log("API Geolocation error! \n\n"+err);
    });
  };
  var browserGeolocationSuccess = function(position) {
      console.log("Browser geolocation success!\n\nlat = " + position.coords.latitude + "\nlng = " + position.coords.longitude);
  };
  var browserGeolocationFail = function(error) {
    switch (error.code) {
      case error.TIMEOUT:
        console.log("Browser geolocation error !\n\nTimeout.");
        break;
      case error.PERMISSION_DENIED:
        if (error.message.indexOf("Only secure origins are allowed") == 0) { tryAPIGeolocation(); }
        break;
      case error.POSITION_UNAVAILABLE:
        // dirty hack for safari
        if (error.message.indexOf("Origin does not have permission to use Geolocation service") == 0) { tryAPIGeolocation(); }
        else { alert("Browser geolocation error !\n\nPosition unavailable."); }
        break;
    }
  };
  var tryGeolocation = function() {
    if (navigator.geolocation) { navigator.geolocation.getCurrentPosition(browserGeolocationSuccess, browserGeolocationFail, { maximumAge: 50000, timeout: 20000, enableHighAccuracy: true }); }
  };
  var apiGeolocationSuccess = function(position) {
    var geolocation = "{ \"Geolocation\": { \"Latitude\": \"" + position.coords.latitude +"\", \"Longitude\": \"" + position.coords.longitude + "\"} }";
    var A = survey.data;
    var B = JSON.parse(geolocation);
    if (survey.data) { for (var AA in B) { A[AA] = B[AA]; } survey.data = A; }
    else { survey.data = geolocation; }
    return survey.data;
  };

  <?php if ($resultdata) { echo "survey.data = $resultdata"; } ?>
  // console.log(getinterviewers(surveyid));

  survey.render("runsurvey");
  $('#showupload').html("<div class='alert alert-info'><i class='pe-spinner pe-pulse pe-lg pe-fw'></i> ระบบกำลังอัพโหลดรูปของคุณ ระหว่างนี้คุณสามารถทำรายการต่อได้ทันที และอีกสักครู่เมื่อระบบทำงานในส่วนนี้เสร็จ ข้อความนี้จะหายไปเอง</div>").hide();
  $('#showcompletion').html("<div class='alert alert-success'><i class='pe-check-square-o pe-lg pe-fw'></i> เราได้ทำการจัดเก็บความคิดเห็นของคุณลงระบบเป็นที่เรียบร้อยแล้ว</div>").hide();
  $('#resetsave').on('click', function() { clearsavesurveydata(resultid, ip, email, surveyid, title); });
  <?php if ($precodes) { echo "var pre = $precodes\n"; } else { echo "var pre = \"\";\n"; }?>
  survey.data = precoding(pre);
  tryGeolocation();
  // console.log(survey.data);
  // console.log(precoding(pre));
  survey.onComplete.add(function(data) { postsurveydata(cid, ip, email, surveyid, survey.data, title, pilot); });
  survey.onUploadFile.add(function(data) { $('#showupload').show(); setTimeout(function() { $("#showupload").slideUp(500, function() { $("#showupload").hide(); }); }, 6000); });
  if (pilot != 1) { survey.onCurrentPageChanged.add(function(data) { autosavesurveydata(cid, ip, email, surveyid, survey.data, title); }); }
  if (readonly == 1) { survey.mode = "display"; $(function() { $('#runsurvey').attr('disabled', 'disabled'); }); } else if (readonly == 0) { survey.mode = "edit"; }

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

// echo "<p>Click the button to get your coordinates.</p>\n";
// echo "<button onclick=\"getLocation()\">Try It</button>\n";
// echo "<p id=\"demo\"></p>\n";


if ($project || $notes) { pageFooter($project, $notes); } else { pageFooter(); }

?>
