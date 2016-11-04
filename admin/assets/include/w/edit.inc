<?php

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
  var editor = new SurveyEditor.SurveyEditor("editor", options);
  Survey.Survey.cssType = "bootstrap";
  var api = "http://www.siamsquare.org.uk";
  var surveyid = <?php echo $_GET['s']; ?>;
  var userid = <?php echo $_SESSION['userid']; ?>;
  var email = "<?php echo $_SESSION['email']; ?>";
  var ip = "<?php echo $_SESSION['ip']; ?>";
  mm = getsurveydata(surveyid);
  var blank = JSON.stringify({"completeText":"ยืนยันและส่งความคิดเห็น","completedHtml":"<h2>คุณได้ส่งความคิดเห็นเป็นที่เรียบร้อยแล้ว</h2>\n\n<p>ความคิดเห็นของคุณได้ถูกส่งเข้าสู่ระบบของเราเป็นที่เรียบร้อยแล้ว ซึ่งทางเราจะดำเนินการประมวลผลข้อมูลความคิดเห็นเหล่านี้รวมกับผู้ที่ให้ความคิดเห็นท่านอื่น และจะนำไปใช้สำหรับการวิเคราะห์ผลในลำดับต่อไป</p>\n\n<p>เราขอย้ำอีกครั้งว่า ระบบของเราถูกสร้างขึ้นมาเพื่อเก็บข้อมูลอย่างเป็นความลับ เราจะไม่มีการเปิดเผยชื่อของคุณอย่างเด็ดขาด</p>\n\n<p>สุดท้ายนี้ ในนามของบริษัท เราขอขอบคุณอีกครั้งที่สละเวลาแสดงความคิดเห็น ทุกๆเสียงของคุณมีความหมายเพื่อใช้พัฒนาให้ก้าวหน้าต่อไป</p>","pageNextText":"หน้าถัดไป","pagePrevText":"หน้าที่แล้ว","pages":[{"name":"page1","title":"หน้าแรก"}],"questionTitleTemplate":"{no}. {title} {require}","showProgressBar":"top"});
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
