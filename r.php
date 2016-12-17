<?php

require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/config.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/members/assets/include/template.php';

require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/functions.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/class.login.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/class.imgresize.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/class.phpmailer.php';

$db = new PDO('mysql:host='. DB_HOST .';dbname='. DB_DATABASE . ';charset=utf8', DB_USER, DB_PASS);

$login = new Login();
if ($login->isUserLoggedIn() == true) { $email = $_SESSION["email"]; $userid = $_SESSION['userid']; }
else { $email = "anonymous@siamsquare.org"; $userid = 0; }

if (empty($_GET['s'])) {
  $target = "/";
  header("refresh: 10; url=$target");
  $title = "เกิดข้อผิดพลาด";
  pageHeader($title);
  echo "<h2>ไม่พบแบบสอบถาม</h2>\n";
  echo "<p>ไม่สามารถทำรายการต่อได้เนื่องจากไม่พบแบบสอบถาม กรุณาตรวจสอบให้แน่ใจว่าคุณได้พิมพ์ที่อยู่เว็บไซต์ได้ถูกต้องและครบถ้วน</p>";
  echo "<p>หากจะให้แน่นอนที่สุด เราขอแนะนำให้กดจากลิ๊งที่คุณได้รับโดยตรง จะรับประกันได้ว่าไม่มีข้อผิดพลาดอย่างเด็ดขาด</p>";
  echo mkerror("เกิดข้อผิดพลาด ไม่สามารถทำรายการได้");
  echo "<p>คุณสามารถ<a href=\"/members/contact/\">ติดต่อมาที่เราได้ทุกเวลา</a> หากคุณมีความประสงค์ต้องการข้อมูลหรือความช่วยเหลือเพิ่มเติม</p>";
  pageFooter();
  exit;
} else { $surveyid = $_GET['s']; }


// if (isset($_GET['o']) || ($_GET['o'] == "CNT")) {
//   $auth = $_GET['o'];
//   $continue = true;
//   $userid = 0;
//   // run function get email from CNT, fallback below
//   $email = "CNT@siamsquare.org";
// }

// Get company information (e.g. logo, website, etc.)
$q1 = $db->prepare("SELECT * FROM j_companies WHERE id = :companyid");
$q1->bindValue(':companyid', $_SESSION["companyid"], PDO::PARAM_INT);
$q1->execute();
if ($q1->rowCount()) {
  $r = $q1->fetchObject();
  if ($r->logo) { $d1 = "<img src=\"$r->logo\" title=\"$r->company\">"; }
  if ($r->website) { $d2 = "<a href=\"$r->website\" title=\"$r->company\" target=\"_blank\">$d1</a>"; } else { $d2 = $d1; }
  $clientlogo = "<div class=\"pull-right\" style=\"margin-top:0px\">$d2</div>\n";
  $companyname = $r->company;
}


// Get projcet title
$q1 = $db->prepare("SELECT P.*, C.company, C.logo, C.website FROM j_projects P, j_companies C WHERE P.companyid = C.id AND P.id = :surveyid");
$q1->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
$q1->execute();
if ($q1->rowCount() == 0) {
  $target = "/";
  // header("refresh: 10; url=$target");
  $title = "เกิดข้อผิดพลาด";
  pageHeader($title);
  echo "<h2>ไม่พบงานวิจัย</h2>\n";
  echo "<p>ไม่สามารถทำรายการต่อได้เนื่องจากไม่พบงานวิจัย กรุณาตรวจสอบให้แน่ใจว่าคุณได้พิมพ์ที่อยู่เว็บไซต์ได้ถูกต้องและครบถ้วน</p>";
  echo "<p>หากจะให้แน่นอนที่สุด เราขอแนะนำให้กดจากลิ๊งที่คุณได้รับโดยตรง จะรับประกันได้ว่าไม่มีข้อผิดพลาดอย่างเด็ดขาด</p>";
  echo mkerror("เกิดข้อผิดพลาด ไม่สามารถทำรายการได้");
  echo "<p>คุณสามารถ<a href=\"/members/contact/\">ติดต่อมาที่เราได้ทุกเวลา</a> หากคุณมีความประสงค์ต้องการข้อมูลหรือความช่วยเหลือเพิ่มเติม</p>";
  pageFooter();
  exit;
}
while ($r = $q1->fetchObject()) {
  $project = $r->title;
  $status = $r->status;
  if ($r->logo) { $d1 = "<img src=\"$r->logo\" title=\"$r->company\">"; }
  if ($r->website) { $d2 = "<a href=\"$r->website\" title=\"$r->company\" target=\"_blank\">$d1</a>"; } else { $d2 = $d1; }
  $clientlogo = "<div class=\"pull-right\" style=\"margin-top:0px\">$d2</div>\n";
  $companyname = $r->company;
}

$title = "ร่วมแสดงความคิดเห็น";
pageHeader($title);
echo $clientlogo;

?>

<h3><?php echo $title; ?> <i class="pe-comments-o"></i></h3>

<p><small>บัญชีของคุณคือ: <strong><?php echo $email; ?></strong></small></p>

<hr>

<div class="text-right blue">Project <?php echo $project; ?></div>

<div id="showupload"></div><div id="showcompletion"></div>

<br>

<div id="runsurvey"></div>

<div id="survey_oncomplete" style="display:none"></div>

<script type="text/javascript">

  function getip() {
    var rip;
    $.ajaxSetup({async: false});
    $.get('http://jsonip.com/', function(r){ rip = r.ip; });
    return rip;
  }

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

  function postsurveydata(cid, cip, email, id, data, etitle) {
    var result = "";
    $.ajax({
      url: api + '/submit',
      dataType: 'json',
      type: 'post',
      contentType: 'application/json; charset=utf-8',
      data: '{"rd": "' + cid + '", "ip": "' + cip + '", "email": "' + email + '", "surveyid": ' + id + ', "data": ' + JSON.stringify(JSON.stringify(data)) + ', "status": "1" }',
      success: function(data) {
        $('#showupload').hide(); $('#showcompletion').show();
        // window.setTimeout(function () { $("#showcompletion").slideUp(500, function () { $("#showcompletion").hide(); }); }, 5000);
        $.ajax({
          url: api + '/log/' + cid + '/' + id,
          dataType: 'json',
          type: 'post',
          contentType: 'application/json; charset=utf-8',
          data: '{ "userid": "' + cid + '", "ip": "' + cip + '", "data": "' + email + ' conducted a survey ' + etitle + ' (id=' + id + ')", "critical": "2" }',
          success: function(data) { result = data; }
        });
      }
    });
    return result;
  }

  // Start scripting by pe (phumin@sawasdee.org)
  var api = "http://www.siamsquare.org.uk";
  var surveyid = <?php echo $surveyid; ?>;
  var cid = "<?php echo $userid; ?>";
  var email = "<?php echo $email; ?>";
  var title = "Project <?php echo $project; ?>";
  var ip = "<?php echo getip(); ?>";
  $('#showupload').html("<div class='alert alert-info'><i class='pe-spinner pe-pulse pe-lg pe-fw'></i> กดยืนยันเพื่อส่ง แล้วรอจนข้อความเปลี่ยนเป็นว่า <strong>ยืนยันระบบดำเนินการสำเร็จ</strong> กรุณาอย่ารีเฟรชหรือกดส่งซ้ำในระหว่างรออัพโหลด</div>").hide();
  $('#showcompletion').html("<div class='alert alert-success'><i class='pe-check-square-o pe-lg pe-fw'></i> เราได้ทำการจัดเก็บความคิดเห็นของคุณลงระบบเป็นที่เรียบร้อยแล้ว</div>").hide();
  // mm = getsurveyinfo(surveyid);
  Survey.Survey.cssType = "bootstrap";
  var survey = new Survey.Survey (getsurveydata(surveyid), "runsurvey");
  // survey.sendResultOnPageNext = true;
  survey.onComplete.add(function (s) { postsurveydata(cid, ip, email, surveyid, survey.data, title); });
  survey.onUploadFile.add(function (data) { $('#showupload').show(); });
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

  survey.locale = "th";
  var Survey;
  (function (Survey) {
    var mycustomSurveyStrings = {
      pagePrevText: "หน้าที่แล้ว",
      pageNextText: "หน้าถัดไป",
      completeText: "เสร็จสิ้น",
      otherItemText: "อื่นๆ (ระบุ)",
      progressText: "หน้าที่ {0} จาก {1}",
      emptySurvey: "ไม่มีหน้าคำถามหรือข้อคำถามในแบบสอบถามชุดนี้",
      completingSurvey: "ขอบคุณที่สละเวลาตอบแบบสอบถาม",
      loadingSurvey: "กำลังโหลดแบบสอบถามจากฐานข้อมูล...",
      optionsCaption: "กรุณาเลือก...",
      requiredError: "คุณยังไม่ได้ตอบคำถามข้อนี้",
      numericError: "คำตอบจะต้องเป็นตัวเลขเท่านั้น",
      textMinLength: "กรุณาใส่ตัวอักษรอย่างน้อยจำนวน {0} ตัวอักษร",
      minRowCountError: "กรุณาตอบอย่างน้่อยจำนวน {0} แถว",
      minSelectError: "กรุณาเลือกอย่างน้่อยจำนวน {0} คำตอบ",
      maxSelectError: "กรุณาเลือกไม่เกินจำนวน {0} คำตอบ",
      numericMinMax: "{0} ควรจะเท่ากับหรือมากกว่า {1} และเท่ากับหรือน้อยกว่า {2}",
      numericMin: "{0} ควรจะเท่ากับหรือมากกว่า {1}",
      numericMax: "{0} ควรจะเท่ากับหรือน้อยกว่า {1}",
      invalidEmail: "กรุณาใส่อีเมล์ที่ถูกต้อง",
      urlRequestError: "เกิดข้อผิดผลาดสำหรับ {0} {1}",
      urlGetChoicesError: "ไม่มีข้อมูลหรือการตั้งค่าไม่ถูกต้อง",
      exceedMaxSize: "ไฟล์จะต้องมีขนาดไม่เกิน {0}",
      otherRequiredError: "กรุณาระบุว่าอื่นๆคืออะไร",
      uploadingFile: "กำลังอัพโหลดไฟล์อยู่ กรุณารอสักครู่",
      addRow: "เพิ่มแถว",
      removeRow: "ลบแถว"
    };
    Survey.surveyLocalization.locales["th"] = mycustomSurveyStrings;
  }) (Survey || (Survey = {}));


</script>

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
