<?php

$title = "Edit a survey";
pageHeader($title);

// require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/config.php';
// $db = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_DATABASE);
// if (!$db->set_charset("utf8")) { $errors[] = $db->error; }
// $sql1 = "SELECT title FROM j_projects WHERE id = '".$_GET["s"]."';";
// // echo $sql1;
// $query = $db->query($sql1);
// if ($query->num_rows == 1) { $r = $query->fetch_object(); }
// $sql2 = "INSERT INTO j_users_logs (userid, ip, data) VALUE ('".$_SESSION["userid"]."', '".$_SESSION["ip"]."', '".$_SESSION["email"]." edited a survey [".$r->title."]');";
// // echo$sql2;
// $db->query($sql2);

?>

<h2 id="h2pageTitle"></h2>

<div id="showalert"></div>

<br>

<div id="editor"></div>

<script type="text/javascript">

  var api = "http://www.siamsquare.org/api/index.php";

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
  var options = { questionTypes: ["rating", "radiogroup", "dropdown", "checkbox", "text", "multipletext", "comment", "file", "matrix", "matrixdropdown", "matrixdynamic", "html"] };
  options.generateValidJSON = true;
  var editor = new SurveyEditor.SurveyEditor("editor", options);
  // Survey.Survey.cssType = "bootstrap";
  // var surveyid = get('s');
  var surveyid = <?php echo $_GET['s']; ?>;
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
      //success: function(data) { editor.setState("saved"); if (data.isSuccess) {  } }
      success: function(data) { $('#showalert').html("<div class='alert alert-success'><i class='pe-save pe-fw'></i> Data has been saved successfully</div>"); }
    });
  };

  if (mm.data) { var title = "Editing a survey"; pname = "Project: " + mm.title; } else { var title = "Starting a survey"; }
  document.getElementById('h2pageTitle').innerHTML = title;
  document.getElementById('projectname').innerHTML = pname;

</script>

<a href="/admin/?w=surveys" class="btn btn-danger btn-sm pull-right" style="margin-top:50px; margin-bottom: 20px"><i class="pe-chevron-circle-left pe-fw"></i> Back to the main page</a>

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
