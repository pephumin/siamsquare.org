
// Declears required variables

var myID = 2;

// Declears all required functions

function getip() {
  var ret_ip;
  $.ajaxSetup({async: false});
  $.get('http://jsonip.com/', function(r){ ret_ip = r.ip; });
  return ret_ip;
}

function getsurveydata() {
  var result = "";
  $.ajax({
    url: 'http://www.siamsquare.org/api/index.php/survey/' + myID + '/data',
    dataType: 'json',
    type: 'get',
    cache: false,
    async: false,
    success: function(data) { result = data; }
  });
  return result;
}

function postsurveydata(data) {
  var result = "";
  var ip = getip();
  $.ajax({
    url: 'http://www.siamsquare.org/api/index.php',
    dataType: 'json',
    type: 'post',
    contentType: 'application/json; charset=utf-8',
    data: '{"rd": "email@domain.com", "ip": "' + ip + '", "surveyid": ' + myID + ', "data": ' + JSON.stringify(JSON.stringify(data)) + '}',
    success: function(data) { result = data; }
 });
 return result;
}

// function showChart(chartDataSource) {
//   document.getElementById("chartContainer").style.height = "500px";
//   $("#chartContainer").dxPolaChart({
//     dataSource: chartDataSource,
//     series: [
//         { valueField: "R1", name: "รสชาติ" },
//         { valueField: "R2", name: "บรรจุภัณฑ์" },
//         { valueField: "R3", name: "ขนาด" },
//         { valueField: "R4", name: "ราคา" },
//         { valueField: "R5", name: "ภาพลักษณ์" }
//     ],
//     commonSeriesSettings: {
//         argumentField: "เห็นด้วย",
//         type: "scatter"
//     }
//   });
// }


// Start scripting by pe (phumin@sawasdee.org)
var survey = new Survey.Survey (getsurveydata());
survey.onComplete.add(function (s) { postsurveydata(survey.data); });
survey.onSendResult.add(function(s, options) { if(options.success) { s.getResult('e27d71a3-dd74-4e83-b5aa-3b25a12b2b06', 'Q2'); } });
survey.onGetResult.add(function(s, options) { if(options.success) { showChart(options.dataList); } });
// survey.clear();
survey.render("mySurveyJSName");

// function reRunSurvey() { survey.clear(); survey.render('survey'); }
//
// function renderSurvey() {
//   if (typeof survey == 'undefined') return;
//   survey.onComplete.add(function (s) {
//     var result = "\nThe results are:\n" + JSON.stringify(survey.data);
//     document.getElementById('chartContainer').innerHTML = result;
//     document.getElementById('survey_oncomplete').style.display = '';
//   });
//   survey.render("mySurveyJSName");
// }
//
// renderSurvey();

// Other options

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
