<?php

require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/config.php';
$db = new PDO('mysql:host='. DB_HOST .';dbname='. DB_DATABASE . ';charset=utf8', DB_USER, DB_PASS);

// Get projcet title
$sql1 = "SELECT title, status FROM j_projects WHERE id = :surveyid";
$q = $db->prepare($sql1);
$q->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
$q->execute();
if ($q->rowCount() == 0) {
  $title = "An error has been found";
  pageHeader($title);
  echo "<h2>We could not find a match for ID for this project</h2>\n";
  echo "<p>There has been an error locating the project you are looking for. This is caused by two reasons which are either there is a false in our system (which is very unlikely) or you use our system incorrectly.</p>";
  echo "<p>If you have tried entering the project ID manually, we strongly suggest you should stop doing this. You should instead use the client dashboard which will never lead you to a wrong link or any errors like this at all.</p>";
  echo mkerror("In fact we typically consider such action as violent.");
  echo "<p>Our system has already recorded this error including your identity and timestamp.</p>";
  pageFooter();
  $sql2 = "INSERT INTO j_users_logs (userid, ip, data) VALUE (:userid, :ip, '" . $_SESSION["email"] . " tried accessing a non-existing project')";
  $q = $db->prepare($sql2);
  $q->bindValue(':userid', $_SESSION["userid"], PDO::PARAM_INT);
  $q->bindValue(':ip', $_SESSION["ip"], PDO::PARAM_INT);
  $q->execute();
  exit;
}
while ($row = $q->fetchObject()) { $status = $row->status; }
if ($_SESSION['level'] != "9") {
  if ($status != 1) {
    $title = "An error has been found";
    pageHeader($title);
    echo "<h2>This project is no longer editable</h2>\n";
    echo "<p>Only projects that have not had started the data collection are editable. All other projects which have been moved to the data collection stage or other later stages cannot be edited anymore. This will prevent having any unexpected errors at analysis from a conflict/ mismatch between designed questions and the collected data.</p>";
    echo "<p>If you have tried entering the project ID manually, we strongly suggest you should stop doing this. You should instead use the client dashboard which will never lead you to a wrong link or any errors like this at all.</p>";
    echo mkerror("In fact we typically consider such action as violent.");
    echo "<p>Our system has already recorded this error including your identity and timestamp.</p>";
    pageFooter();
    $sql2 = "INSERT INTO j_users_logs (userid, ip, data) VALUE (:userid, :ip, '" . $_SESSION["email"] . " tried editing a non-editable project')";
    $q = $db->prepare($sql2);
    $q->bindValue(':userid', $_SESSION["userid"], PDO::PARAM_INT);
    $q->bindValue(':ip', $_SESSION["ip"], PDO::PARAM_INT);
    $q->execute();
    exit;
  }
}

$title = "Edit a survey";
pageHeader($title);
echo "<h2 id=\"h2pageTitle\"></h2>";
echo "<p>This page allows you to freely edit your survey which includes both survey information and the arrangement of tailor-made questions that you need. You may want to test your survey to ensure the logical flow and the right routing are implemented. We also recommend ading the translation into the same version to make it less complicated after all.</p>\n";
echo "<p>While you can edit your questionnaire as often as you want, it is important to click save to ensure all the changes will not be lost.</p>\n";
//echo "<br>\n";

?>

<div id="showalert"></div>

<br>

<div id="editor"></div>

<script type="text/javascript">

  function get(name, url) {
    if (!url) { url = window.location.href; }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url); if (!results) return null; if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  function getsurveydata(id) {
    var result = "";
    $.ajax({
      url: api + '/survey/' + id ,
      dataType: 'json',
      type: 'get',
      cache: false,
      async: false,
      success: function(data) { result = data; }
    });
    return result;
  }

  function getip() {
    var rip;
    $.ajaxSetup({async: false});
    $.get('http://jsonip.com/', function(r){ rip = r.ip; });
    return rip;
  }

  // Start scripting by pe (phumin@sawasdee.org)
  var options = { questionTypes: ["rating", "radiogroup", "dropdown", "checkbox", "text", "multipletext", "comment", "file", "matrix", "matrixdropdown", "matrixdynamic", "html"] };
  // var options = {};
  options.generateValidJSON = true;
  Survey.Survey.cssType = "bootstrap";
  var editor = new SurveyEditor.SurveyEditor("editor", options);
  var api = "http://www.siamsquare.org.uk";
  var surveyid = <?php echo $_GET['s']; ?>;
  var userid = <?php echo $_SESSION['userid']; ?>;
  var email = "<?php echo $_SESSION['email']; ?>";
  var ip = "<?php echo $_SESSION['ip']; ?>";
  $('#showalert').html("<div class='alert alert-success'><i class='pe-save pe-fw'></i> Data has been saved successfully</div>").hide();
  mm = getsurveydata(surveyid);
  var blank = JSON.stringify({ "completeText": "ยืนยันและส่งความคิดเห็น", "completedHtml": "<h2><i class='pe-flag-checkered pe-fw'></i> คุณได้ตอบแบบสอบถามเสร็จสมบูรณ์แล้ว</h2>\n\n<p>ความคิดเห็นของคุณได้ถูกบันทึกและจัดเก็บเข้าสู่ระบบของเราเป็นที่เรียบร้อยแล้ว ซึ่งเราจะนำความคิดเห็นของคุณและของผู้ที่ร่วมตอบคำถามท่านอื่นๆมารวมกันก่อนจะ ดำเนินการต่อไปในขั้นตอนการประมวลผลและการวิเคราะห์ผล</p>\n\n<p>เราขอย้ำกับคุณอีกครั้งว่า ระบบของเราได้รับการออกแบบและสร้างโดยมุ่งเน้นในเรื่องความลับของข้อมูลและผู้ให้ข้อมูล ด้วยเหตุผลนี้คุณจะสามารถมั่นใจได้ว่าข้อมุลของคุณจะถูกใช้อย่างเหมาะสมและไม่มีการเปิดเผยรายละเอียดเป็นรายบุคคลอย่างเด็ดขาด</p>\n\n<p>สุดท้ายนี้ ในนามของบริษัทฯ เราขอขอบพระคุณที่สละเวลาแสดงความคิดเห็นที่แท้จริงให้กับเรา ทุกๆความคิดเห็นของคุณนั้นมีค่ายิ่งสำหรับเรา เพราะข้อมูลเหล่านี้จะถูกนำไปใช้เพื่อพัฒนาผลิตภัณฑ์​หรือบริการต่างๆให้ดียิ่งขึ้นเพื่อให้เกิดการพัฒนาก้าวหน้าต่อไปในอนาคต</p>", "pageNextText": "หน้าถัดไป", "pagePrevText": "หน้าที่แล้ว", "pages": [{ "name": "page1"} ], "questionTitleTemplate": "{no}. {title} {require}"});
  if (mm.data) { editor.text = mm.data; } else { editor.text = blank; }
  editor.surveyId = mm.id;
  editor.surveyPostId = mm.id;
  editor.saveSurveyFunc = function() {
    $.ajax({
      url: api + '/survey/' + surveyid + '/updatedata',
      dataType: 'json',
      type: 'put',
      contentType: 'application/json; charset=utf-8',
      data: '{ "data": ' + JSON.stringify(editor.text) + ' }',
      success: function(data) {
        $('#showalert').show();
        window.setTimeout(function () { $("#showalert").slideUp(500, function () { $("#showalert").hide(); }); }, 5000);
        $.ajax({
          url: api + '/log/' + userid + '/' + surveyid,
          dataType: 'json',
          type: 'post',
          contentType: 'application/json; charset=utf-8',
          data: '{ "userid": "' + userid + '", "ip": "' + ip + '", "data": "' + email + ' edited and saved ' + mm.title + ' (id=' + mm.id + ')" }',
          success: function(data) { result = data; }
        });
      }
    });
  };

  if (mm.title) { var title = "Editing a survey"; var pname = "Project " + mm.title; } else { var title = "Starting a survey"; }
  document.getElementById('h2pageTitle').innerHTML = title;
  document.getElementById('projectname').innerHTML = pname;

</script>

<a href="/admin/?w=surveys" class="btn btn-danger btn-sm pull-right" style="margin-top:50px; margin-bottom: 20px"><i class="pe-chevron-circle-left pe-fw"></i> Back to the main page</a>

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
