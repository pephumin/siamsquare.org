<?php

// Get projcet title
$q1 = $db->prepare("SELECT P.*, C.company, C.logo, C.website FROM j_projects P, j_companies C WHERE P.companyid = C.id AND P.id = :surveyid");
//$q1 = $db->prepare("SELECT title, status FROM j_projects WHERE id = :surveyid");
$q1->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
$q1->execute();
if ($q1->rowCount() == 0) {
  $title = "An error has been found";
  pageHeader($title);
  echo "<h2>We could not find a match for ID for this project</h2>\n";
  echo "<p>There has been an error locating the project you are looking for. This is caused by two reasons which are either there is a false in our system (which is very unlikely) or you use our system incorrectly.</p>";
  echo "<p>If you have tried entering the project ID manually, we strongly suggest you should stop doing this. You should instead use the client dashboard which will never lead you to a wrong link or any errors like this at all.</p>";
  echo mkerror("In fact we typically consider such action as violent.");
  echo "<p>Our system has already recorded this error including your identity and timestamp.</p>";
  pageFooter();
  $q2 = $db->prepare("INSERT INTO j_users_logs (userid, ip, data, critical) VALUE (:userid, :ip, '" . $_SESSION["email"] . " tried accessing a non-existing project', '5')");
  $q2->bindValue(':userid', $_SESSION["userid"], PDO::PARAM_INT);
  $q2->bindValue(':ip', $_SESSION["ip"], PDO::PARAM_INT);
  $q2->execute();
  exit;
}
while ($row = $q1->fetchObject()) {
  $status = $row->status;
  $project = $row->title;
  $status = $row->status;
  if ($row->logo) { $d1 = "<img src=\"$row->logo\" title=\"$row->company\">"; }
  if ($row->website) { $d2 = "<a href=\"$row->website\" title=\"$row->company\" target=\"_blank\">$d1</a>"; } else { $d2 = $d1; }
  if ($showlink == true) { $clientlogo = $d2; } else { $clientlogo = $d1; }
  $companyname = $row->company;
  $description = nl2br($row->description);
}
if ($_SESSION['level'] != "9") {
  if ($status != 1) {
    $title = "An error has been found";
    pageHeader($title);
    echo "<h2>This project is no longer editable</h2>\n";
    echo "<p>You only can make change on this with projects that have not started the data-collection. This prevents having any unexpected errors at the analysis stage such as a conflict based on a mismatch information between pre and post data-collection.</p>";
    echo "<p>If you have tried entering the project ID manually, we strongly suggest you should stop doing this. You should instead use the client dashboard which will never lead you to a wrong link or any errors like this at all.</p>";
    echo mkerror("In fact we typically consider such action as violent.");
    echo "<p>Our system has already recorded this error including your identity and timestamp.</p>";
    pageFooter();
    $q = $db->prepare("INSERT INTO j_users_logs (userid, ip, data, critical) VALUE (:userid, :ip, '" . $_SESSION["email"] . " tried editing a non-editable project', '5')");
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
echo "<hr>\n";

?>

<div id="showreadonly"></div><div id="showsaving"></div><div id="showsavesuccess"></div>

<h3>Project <?php echo $project; ?></h3>

<?php if ($description) { ?>
<div class="row">
  <div class="container">
    <?php if ($description) { ?>
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 projectdetail">
      <?php if ($d1) { echo "<div class=\"pull-right companylogo\">$clientlogo</div>\n"; } ?>
      <h5 class="projectdetailhead">รายละเอียดงานวิจัย</h5>
      <p class="projectdescription"><?php echo $description; ?></p>
    </div>
    <?php } else if ($d1) { echo "<div class=\"companylogo\">$clientlogo</div>\n"; } ?>
  </div>
</div>
<?php } ?>

<br>

<div id="editor"></div>

<br><br>

<hr>

<!-- <script src="https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js"></script> -->

<h3>Usage of visibleif and other triggers</h3>
<div class="row">
  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="margin-bottom:20px">
    <h4>Visibleif</h4>
    <pre><code class="r">visibleIf: "{haveKids}='Yes'"
visibleIf: "{haveKids}='Yes' and {kids} >= 1"</code></pre>
  </div>
  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="margin-bottom:20px">
    <h4>Visible trigger</h4>
    <p>This trigger is called when the question value name is changed. It makes the list of 'questions' and/or 'pages' visibles when the ('question' value 'operator' 'value') returns true, otherwise the list of 'questions' and/or 'pages' will become invisible.</p>
    <p>Available operator values are: "empty", "notempty", "equal", "notequal", "greater", "less", "greaterorequal", "lessorequal", "contains" and "notcontains". And the default value is "equal".</p>
    <pre><code class="r">triggers: [
  { type: "visible", name: "type", operator: "equal", value: "Hot hatch", questions: ["Hot hatch"] },
  { type: "visible", name: "type", value: "sedan", questions: ["Sedan"] },
  { type: "visible", name: "type", value: "sports", questions: ["Sports"] },
  { type: "visible", name: "type", value: "Grand tourer", questions: ["Grand tourer"] },
  { type: "visible", name: "type", value: "SuperCar", questions: ["Supercar"] },
  { type: "visible", name: "type", value: "Muscle car", questions: ["Muscle car"] },
  { type: "visible", name: "type", value: "Pony car", questions: ["Pony car"] },
  { type: "visible", name: "type", value: "Convertible", questions: ["Convertible"] },
  { type: "visible", name: "type", value: "other", questions: ["otherType"] }
]</code></pre>
  </div>
  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="margin-bottom:20px">
    <h4>Complete trigger</h4>
    <p>This trigger is called on the next page action. It completes the survey if the ('question' value 'operator' 'value') returns true.</p>
    <pre><code class="r">visibleIf: "{haveKids}='Yes'"
visibleIf: "{haveKids}='Yes' and {kids} >= 1"</code></pre>
  </div>
  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="margin-bottom:20px">
    <h4>SetValue trigger</h4>
    <pre><code class="r">triggers: [
  { type: "setvalue", name: "copy", operator: "equal", value: "Yes", setToName: "name", setValue: "Jon Snow" },
  { type: "setvalue", name: "copy", operator: "equal", value: "Yes", setToName: "email", setValue: "jon.snow@nightwatch.com" },
  { type: "setvalue", name: "copy", operator: "equal", value: "Yes", setToName: "tempvar", isVariable: true, setValue: "You have decided to use your current information." },
  { type: "setvalue", name: "copy", operator: "equal", value: "No", setToName: "name", setValue: "" },
  { type: "setvalue", name: "copy", operator: "equal", value: "No", setToName: "email", setValue: "" },
  { type: "setvalue", name: "copy", operator: "equal", value: "No", setToName: "tempvar", isVariable: true, setValue: "You have decided not to use your current information." }
]</code></pre>
  </div>
</div>

<script type="text/javascript">

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

  // Start scripting by pe (phumin@sawasdee.org)
  var options = {
    questionTypes: ["rating", "radiogroup", "dropdown", "checkbox", "text", "multipletext", "comment", "file", "matrix", "matrixdropdown", "matrixdynamic", "html"],
    showJSONEditorTab: false,
    showEmbededSurveyTab: false
  };
  options.generateValidJSON = true;
  Survey.Survey.cssType = "bootstrap";
  var editor = new SurveyEditor.SurveyEditor("editor", options);
  var api = "http://www.siamsquare.org.uk";
  var surveyid = <?php echo $_GET['s']; ?>;
  var userid = <?php echo $_SESSION['userid']; ?>;
  var email = "<?php echo $_SESSION['email']; ?>";
  var ip = "<?php echo $_SESSION['ip']; ?>";
  var level = <?php echo $_SESSION['level']; ?>;
  $.ajaxSetup({ headers: { 'X-Requested-With': 'aa5e1ab4-b0bf-4e82-8584-7cf4e9fdeaa8' } });
  $('#showsaving').html("<div class='alert alert-info'><i class='pe-spinner pe-pulse pe-lg pe-fw'></i> The system is now saving your data, please wait until the green message shows up which shoud be in a minute</div>").hide();
  $('#showsavesuccess').html("<div class='alert alert-success'><i class='pe-save pe-fw'></i> Data has been saved successfully</div>").hide();
  $('#showreadonly').html("<div class='alert alert-warning'><i class='pe-exclamation-triangle pe-fw'></i> Because you are not the owner of this survey, the system puts you into the <strong>read-only mode</strong></div>").hide();
  mm = getsurveydata(surveyid);
  var blank = JSON.stringify({ "completeText": "ยืนยันและส่งความคิดเห็น", "completedHtml": "<h2><i class='pe-flag-checkered pe-fw'></i> คุณได้ตอบแบบสอบถามเสร็จสมบูรณ์แล้ว</h2>\n\n<p>ความคิดเห็นของคุณได้ถูกบันทึกและจัดเก็บเข้าสู่ระบบของเราเป็นที่เรียบร้อยแล้ว ซึ่งเราจะนำความคิดเห็นของคุณและของผู้ที่ร่วมตอบคำถามท่านอื่นๆมารวมกันก่อนจะ ดำเนินการต่อไปในขั้นตอนการประมวลผลและการวิเคราะห์ผล</p>\n\n<p>เราขอย้ำกับคุณอีกครั้งว่า ระบบของเราได้รับการออกแบบและสร้างโดยมุ่งเน้นในเรื่องความลับของข้อมูลและผู้ให้ข้อมูล ด้วยเหตุผลนี้คุณจะสามารถมั่นใจได้ว่าข้อมุลของคุณจะถูกใช้อย่างเหมาะสมและไม่มีการเปิดเผยรายละเอียดเป็นรายบุคคลอย่างเด็ดขาด</p>\n\n<p>สุดท้ายนี้ ในนามของบริษัทฯ เราขอขอบพระคุณที่สละเวลาแสดงความคิดเห็นที่แท้จริงให้กับเรา ทุกๆความคิดเห็นของคุณนั้นมีค่ายิ่งสำหรับเรา เพราะข้อมูลเหล่านี้จะถูกนำไปใช้เพื่อพัฒนาผลิตภัณฑ์​หรือบริการต่างๆให้ดียิ่งขึ้นเพื่อให้เกิดการพัฒนาก้าวหน้าต่อไปในอนาคต</p>", "pageNextText": "หน้าถัดไป", "pagePrevText": "หน้าที่แล้ว", "pages": [{ "name": "page1" }], "questionTitleTemplate": "{no}. {title} {require}" });
  if (mm.data) { editor.text = mm.data; } else if (localStorage.getItem("editdata." + surveyid)) { editor.text = localStorage.getItem("editdata." + surveyid); } else { editor.text = blank; }
  if (userid == mm.userid) { var owner = true; } else { var owner = false; }
  if (level == 9) { var cansave = true; } else if (level == 6) { var cansave = true; }
  else if (level == 5) { if (owner == true) { var cansave = true; } }
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
        // $('#showsaving').show();
        // window.setTimeout(function () { $("#showsaving").slideUp(500, function () { $("#showsaving").hide(); }); }, 3000);
        // $('#showsavesuccess').show();
        // window.setTimeout(function () { $("#showsavesuccess").slideUp(500, function () { $("#showsavesuccess").hide(); }); }, 3000);
        $.ajax({
          url: api + '/log/' + userid + '/' + surveyid,
          dataType: 'json',
          type: 'post',
          contentType: 'application/json; charset=utf-8',
          data: '{ "userid": "' + userid + '", "ip": "' + ip + '", "data": "' + email + ' edited and saved ' + mm.title + ' (id=' + mm.id + ')", "critical": "2" }',
          success: function(data) { result = data; }
        });
      }
    });
  };
  if (cansave != true) {
    $('#showreadonly').show();
    $('#btn-save').addClass('disabled');
    $('#btn-save').prop('disabled', true);
  }
  if (mm.title) { var title = "Editing a survey"; var pname = "Project " + mm.title; } else { var title = "Starting a survey"; }
  document.getElementById('h2pageTitle').innerHTML = title;
  // document.getElementById('projectname').innerHTML = pname;
  $('#btn-save').on('click', function() {
    if (typeof(Storage) !== "undefined") { localStorage.setItem("editdata." + surveyid, JSON.stringify(editor.text)); }
    // document.getElementById("result").innerHTML = localStorage.getItem("editdata." + surveyid);
    var $this = $(this);
    $this.button('loading');
    $('#showsaving').show();
    window.setTimeout(function () { $("#showsaving").slideUp(500, function () { $("#showsaving").hide(); }); }, 2000);
    setTimeout(function() {
      $this.button('saved');
      $('#showsavesuccess').show();
      window.setTimeout(function () { $("#showsavesuccess").slideUp(500, function () { $("#showsavesuccess").hide( function () { $this.button('reset'); }); }); }, 2000);
    }, 3000);
  });
  // localStorage
  for (var i = 0; i < localStorage.length; i++) {
    var name = localStorage.key( i );
    var value = localStorage.getItem( name );
    // console.log( name + " is set to " + value );
  }
  // localStorage.clear();

</script>

<a href="/admin/?w=surveys" class="btn btn-danger btn-sm pull-right" style="margin-top:50px; margin-bottom:20px"><i class="pe-chevron-circle-left pe-fw"></i> Back to the main page</a>

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
