<?php

if (!isset($title)) { $title = 'App index'; }
require_once $_SERVER['DOCUMENT_ROOT'].'/s/template.php';

pageHeader($title);

?>

<h2>Project Domino</h2>


<div id="surveyContainer">

  <div id="mySurveyJSName"></div>

</div>

<div id="survey_oncomplete" style="display:none">

  <div id="chartContainer"></div>

  <input id="btnreRun" type="button" onclick="document.getElementById('surveyContainer').style.display = ''; document.getElementById('survey_oncomplete').style.display = 'none';  reRunSurvey();" value="ตอบแบบสอบถามชุดนี้ใหม่อีกครั้ง"></input>

</div>

<script type="text/javascript">

  var survey = new Survey.Survey ({
    surveyId: 'fb79b5c0-3ad5-44ab-ac5e-4834250f22d6',
    surveyPostId: '700d9888-1eff-4513-afa2-ee02fcbc1217'

  });

  survey.onSendResult.add(function(s, options) {
    if(options.success) {
      s.getResult('5c7bb91e-0619-4763-b47b-8e29368f3aaf', 'Q6');
    }
  });

  survey.onGetResult.add(function(s, options) {
    if(options.success) {
      showChart(options.dataList);
    }
  });

  survey.locale = "th";
  //survey.showProgressBar = "top";

  //Example of adding new locale into the library.
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
      requiredError: "คุณต้องตอบคำถามข้อนี้",
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
  })(Survey || (Survey = {}));


  function showChart(chartDataSource) {
    document.getElementById("chartContainer").style.height = "500px";
    $("#chartContainer").dxPieChart({
      dataSource: chartDataSource,
      series: {
        argumentField: 'name',
        valueField: 'value'
      }
    });
  }

  function reRunSurvey() {
    survey.clear();
    survey.render('survey');
  }

  function renderSurvey() {
    if(typeof survey == 'undefined') return;
    survey.onComplete.add(function (s) {
      var result = "\nThe results are:\n" + JSON.stringify(survey.data);
      document.getElementById('chartContainer').innerHTML = result;
      document.getElementById('survey_oncomplete').style.display = '';
    });
    survey.render("mySurveyJSName");
  }

  renderSurvey();

</script>




<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
