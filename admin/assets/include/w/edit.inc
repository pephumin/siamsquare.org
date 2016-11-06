<?php

require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/config.php';
$db = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_DATABASE);
if (!$db->set_charset("utf8")) { $errors[] = $db->error; }

// Get projcet title
$sql1 = "SELECT * FROM j_projects WHERE id = '".$_GET['s']."';";
$result1 = $db->query($sql1);
if ($result1->num_rows === 0) {
  $title = "An error has been found";
  pageHeader($title);
  echo "<h2>We could not find a match for ID for this project</h2>\n";
  echo "<p>There has been something wrong which should come from two possible reasons which are either there is a false in our system or a false actually comes from the way you use our system.</p>";
  echo "<p>If you have tried entering the project ID manually, we strongly suggest you should stop doing this. You should instead use the admin dashboard which will never lead you to a wrong link like this.</p>";
  echo mkerror("We consider this to be a violent action.");
  echo "<p>And our system has already recorded this action with your identity and timestamp.</p>";
  pageFooter();
  $sql2 = "INSERT INTO j_users_logs (userid, ip, data) VALUE ('" . $_SESSION["userid"] . "', '" . $_SESSION["ip"] . "', '" . $_SESSION["email"] . " tried accessing a non-existing project');";
  $result2 = $db->query($sql2);
  exit;
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
      url: api + '/survey/' + id,
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

  var options = { questionTypes: ["rating", "radiogroup", "dropdown", "checkbox", "text", "multipletext", "comment", "file", "matrix", "matrixdropdown", "matrixdynamic", "html"] };
  options.generateValidJSON = true;
  Survey.Survey.cssType = "bootstrap";
  var editor = new SurveyEditor.SurveyEditor("editor", options);
  var api = "http://www.siamsquare.org.uk";
  var surveyid = <?php echo $_GET['s']; ?>;
  var userid = <?php echo $_SESSION['userid']; ?>;
  var email = "<?php echo $_SESSION['email']; ?>";
  var ip = "<?php echo $_SESSION['ip']; ?>";
  mm = getsurveydata(surveyid);
  var blank = JSON.stringify({"completeText":"ยืนยันและส่งความคิดเห็น","completedHtml":"<h2><i class='pe-flag-checkered pe-fw'></i> คุณได้ตอบแบบสอบถามเสร็จสมบูรณ์แล้ว</h2>\n\n<p>ความคิดเห็นของคุณได้ถูกบันทึกและจัดเก็บเข้าสู่ระบบของเราเป็นที่เรียบร้อยแล้ว ซึ่งเราจะนำความคิดเห็นของคุณและของผู้ที่ร่วมตอบคำถามท่านอื่นๆมารวมกันก่อนจะ ดำเนินการต่อไปในขั้นตอนการประมวลผลและการวิเคราะห์ผล</p>\n\n<p>เราขอย้ำกับคุณอีกครั้งว่า ระบบของเราได้รับการออกแบบและสร้างโดยมุ่งเน้นในเรื่องความลับของข้อมูลและผู้ให้ข้อมูล ด้วยเหตุผลนี้คุณจะสามารถมั่นใจได้ว่าข้อมุลของคุณจะถูกใช้อย่างเหมาะสมและไม่มีการเปิดเผยรายละเอียดเป็นรายบุคคลอย่างเด็ดขาด</p>\n\n<p>สุดท้ายนี้ ในนามของบริษัทฯ เราขอขอบพระคุณที่สละเวลาแสดงความคิดเห็นที่แท้จริงให้กับเรา ทุกๆความคิดเห็นของคุณนั้นมีค่ายิ่งสำหรับเรา เพราะข้อมูลเหล่านี้จะถูกนำไปใช้เพื่อพัฒนาผลิตภัณฑ์หรือบริการต่างๆให้ดียิ่งขึ้นเพื่อให้เกิดการพัฒนาก้าวหน้าต่อไปในอนาคต</p>","pageNextText":"หน้าถัดไป","pagePrevText":"หน้าที่แล้ว","pages":[{"name":"page1","title":"หน้าแรก"}],"questionTitleTemplate":"{no}. {title} {require}","showProgressBar":"top"});
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
        $('#showalert').html("<div class='alert alert-success'><i class='pe-save pe-fw'></i> Data has been saved successfully</div>");
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

  if (mm.data) { var title = "Editing a survey"; pname = "Project: " + mm.title; } else { var title = "Starting a survey"; }
  document.getElementById('h2pageTitle').innerHTML = title;
  document.getElementById('projectname').innerHTML = pname;

</script>

<a href="/admin/?w=surveys" class="btn btn-danger btn-sm pull-right" style="margin-top:50px; margin-bottom: 20px"><i class="pe-chevron-circle-left pe-fw"></i> Back to the main page</a>

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
