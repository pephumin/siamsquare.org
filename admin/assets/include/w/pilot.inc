<?php

$title = "Pilot test a survey";
pageHeader($title);
echo "<h2>$title</h2>";

// require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/config.php';
// $db = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_DATABASE);
// if (!$db->set_charset("utf8")) { $errors[] = $db->error; }
// $sql1 = "SELECT title FROM j_projects WHERE id = '".$_GET["s"]."';";
// // echo $sql1;
// $query = $db->query($sql1);
// if ($query->num_rows == 1) { $r = $query->fetch_object(); }
// $sql2 = "INSERT INTO j_users_logs (userid, ip, data) VALUE ('".$_SESSION["userid"]."', '".$_SESSION["ip"]."', '".$_SESSION["email"]." tested a survey [".$r->title."]');";
// // echo$sql2;
// $db->query($sql2);

?>

<p>Although testing a survey here will act like a real survey and result will be posted to the main database, we will not include any test results into the analysis where it will only contain the actual responses from respondents. Therefore, feel free to conduct a test survey as much as you want as it will not impact to the true result as described here.</p>

<div id="showalert"></div>

<p class="text-right">Testing with your account: <strong id="clientIdContainer"><?php echo $_SESSION["email"]; ?></strong></p>

<div id="surveyContainer"></div>

<div id="survey_oncomplete" style="display:none">
  <p><input id="btnreRun" class="btn btn-warning" type="button" onclick="document.getElementById('surveyContainer').style.display = ''; document.getElementById('survey_oncomplete').style.display = 'none';  reRunSurvey();" value="Rerun this test again"></input></p>
  <p id="chartContainer"></p>
  <p id="survey_result"></p>
</div>

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

  function getsurveydata(id) {
    var result = "";
    $.ajax({
      url: 'http://www.siamsquare.org/api/index.php/survey/' + id + '/data',
      dataType: 'json',
      type: 'get',
      cache: false,
      async: false,
      success: function(data) { result = data; }
    });
    return result;
  }

  function postsurveydata(cid, cip, id, data) {
    var result = "";
    $.ajax({
      url: 'http://www.siamsquare.org/api/index.php',
      dataType: 'json',
      type: 'post',
      contentType: 'application/json; charset=utf-8',
      data: '{"rd": "' + cid + '", "ip": "' + cip + '", "surveyid": ' + id + ', "data": ' + JSON.stringify(JSON.stringify(data)) + ', "test": "true" }',
      //success: function(data) { result = data; }
      success: function(data) { $('#showalert').html("<div class='alert alert-success'><i class='pe-save pe-fw'></i> Results are submitted successfully</div>"); }
    });
    return result;
  }

  function getsurveyresult(id, no) {
    var result = "";
    $.ajax({
      url: 'http://www.siamsquare.org/api/index.php/result/' + id + '/' + no,
      dataType: 'json',
      type: 'get',
      cache: false,
      async: false,
      success: function(data) { result = data; }
    });
    return result;
  }

  // function showChart(data) {
  //   document.getElementById("chartContainer").style.height = "500px";
  //   $("#chartContainer").dxPolaChart({
  //     dataSource: data,
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
  var myID = <?php echo $_GET['s']; ?>;
  var clientID = "<?php echo $_SESSION['email']; ?>";
  var clientIP = "<?php echo getip(); ?>";
  // var survey = new Survey.Survey ({ surveyId: getsurveydata(myID), clientId: clientID });
  var survey = new Survey.Survey (getsurveydata(myID), "surveyContainer");
  Survey.Survey.cssType = "bootstrap";
  // survey.onComplete.add(function (s) { postsurveydata(clientID, clientIP, myID, survey.data); });
  survey.onSendResult.add(function(s, options) { if(options.success) { s.getResult(myID, 'Q2'); } });
  // survey.onGetResult.add(function(s, options) { if(options.success) { showChart(options.dataList); } });

  function reRunSurvey() { survey.clear(); survey.render('survey'); }

  function renderSurvey() {
    if (typeof survey == 'undefined') return;
    survey.onComplete.add(function (s) {
      postsurveydata(clientID, clientIP, myID, survey.data);
      var result = "\nYour answers are:\n" + JSON.stringify(survey.data);
      document.getElementById('chartContainer').innerHTML = result;
      document.getElementById('survey_oncomplete').style.display = '';
    });
    survey.render("mySurveyJSName");
  }

  renderSurvey();

</script>

<a href="/admin/?w=surveys" class="btn btn-danger btn-sm pull-right" style="margin-top:50px; margin-bottom: 20px"><i class="pe-chevron-circle-left pe-fw"></i> Back to the main page</a>

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
