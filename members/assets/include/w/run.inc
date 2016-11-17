<?php

$email = $_SESSION["email"];
$userid = $_SESSION['userid'];
// $surveyid = base64_decode($_GET['s'])\
$surveyid = $_GET['s'];

if (isset($_GET['o']) || ($_GET['o'] == "CNT")) {
  $auth = $_GET['o'];
  $continue = true;
  $userid = 0;
  // run function get email from CNT, fallback below
  $email = "CNT@siamsquare.org";
}

$title = "ร่วมแสดงความคิดเห็น";
pageHeader($title);

?>

<h3 class="text-right grey"><?php echo $title; ?> <i class="pe-plane"></i></h3>

<p class="text-right grey">บัญชีของคุณคือ: <strong><?php echo $email; ?></strong></p>

<div id="showalert"></div>

<br>

<div id="runsurvey"></div>

<div id="survey_oncomplete" style="display:none"></div>

<script type="text/javascript">

  function get(name, url) {
    if (!url) { url = window.location.href; }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url); if (!results) return null; if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  function getip() {
    var rip;
    $.ajaxSetup({async: false});
    $.get('http://jsonip.com/', function(r){ rip = r.ip; });
    return rip;
  }

  function getsurveyinfo(id) {
    var result = "";
    $.ajax({
      url: api + '/survey/' + id,
      dataType: 'json',
      type: 'get',
      cache: false,
      async: false,
      success: function(data) { result = data; }
    });
    return result;
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
        $('#showalert').show();
        window.setTimeout(function () { $("#showalert").slideUp(500, function () { $("#showalert").hide(); }); }, 5000);
        $.ajax({
          url: api + '/log/' + cid + '/' + id,
          dataType: 'json',
          type: 'post',
          contentType: 'application/json; charset=utf-8',
          data: '{ "userid": "' + cid + '", "ip": "' + cip + '", "data": "' + email + ' conducted a survey of ' + etitle + ' (id=' + id + ')" }',
          success: function(data) { result = data; }
        });
      }
    });
    return result;
  }

  function getsurveyresult(id, no) {
    var result = "";
    $.ajax({
      url: api + '/' + id + '/' + no,
      dataType: 'json',
      type: 'get',
      cache: false,
      async: false,
      success: function(data) { result = data; }
    });
    return result;
  }

  // Start scripting by pe (phumin@sawasdee.org)
  var api = "http://www.siamsquare.org.uk";
  var surveyid = <?php echo $surveyid; ?>;
  var cid = "<?php echo $userid; ?>";
  var email = "<?php echo $email; ?>";
  var ip = "<?php echo getip(); ?>";
  $('#showalert').html("<div class='alert alert-success'><i class='pe-check-square-o pe-fw'></i> เราได้ทำการจัดเก็บความคิดเห็นของคุณลงระบบแล้ว</div>").hide();
  mm = getsurveyinfo(surveyid);
  Survey.Survey.cssType = "bootstrap";
  var survey = new Survey.Survey (getsurveydata(surveyid), "runsurvey");
  survey.onComplete.add(function (s) { postsurveydata(cid, ip, email, surveyid, survey.data, mm.title); });

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
      otherRequiredError: "กรุณาใส่ค่าอื่นแทน",
      uploadingFile: "กำลังอัพโหลดไฟล์อยู่ กรุณารอสักครู่แล้วลองใหม่อีกครั้ง",
      addRow: "เพิ่มแถว",
      removeRow: "ลบแถว"
    };
    Survey.surveyLocalization.locales["th"] = mycustomSurveyStrings;
  }) (Survey || (Survey = {}));


</script>

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
