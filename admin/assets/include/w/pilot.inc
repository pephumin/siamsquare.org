<?php

$title = "Pilot test a survey";
pageHeader($title);
echo "<h2>$title</h2>\n";
echo "<p>Although testing a survey here will act like a real survey and result will be posted to the main database, we will not include any test results into the analysis where it will only contain the actual responses from respondents. Therefore, feel free to conduct a test survey as much as you want as it will not impact to the true result as described here.</p>\n";
echo "<br>\n";

?>

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
      data: '{"rd": "' + cid + '", "ip": "' + cip + '", "email": "' + email + '",  "surveyid": ' + id + ', "data": ' + JSON.stringify(JSON.stringify(data)) + ', "status": "0" }',
      //success: function(data) { result = data; }
      success: function(data) {
        $('#showalert').html("<div class='alert alert-success'><i class='pe-check-square-o pe-fw'></i> Your test results have been successfully submitted.</div>");
        $.ajax({
          url: api + '/log/' + cid + '/' + id,
          dataType: 'json',
          type: 'post',
          contentType: 'application/json; charset=utf-8',
          data: '{ "userid": "' + cid + '", "ip": "' + cip + '", "data": "' + email + ' did a pilot test with ' + etitle + ' (id=' + id + ')" }',
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
  var myID = <?php echo $_GET['s']; ?>;
  var clientID = "<?php echo $_SESSION['userid']; ?>";
  var clientEMAIL = "<?php echo $_SESSION['email']; ?>";
  var clientIP = "<?php echo getip(); ?>";
  mm = getsurveyinfo(myID);
  var survey = new Survey.Survey (getsurveydata(myID), "surveyContainer");
  Survey.Survey.cssType = "bootstrap";
  survey.onSendResult.add(function(s, options) { if(options.success) { s.getResult(myID, 'Q2'); } });

  function reRunSurvey() { survey.clear(); survey.render('survey'); }

  function renderSurvey() {
    if (typeof survey == 'undefined') return;
    survey.onComplete.add(function (s) {
      postsurveydata(clientID, clientIP, clientEMAIL, myID, survey.data, mm.title);
      var result = "\nYour answers are:\n" + JSON.stringify(survey.data);
      document.getElementById('chartContainer').innerHTML = result;
      document.getElementById('survey_oncomplete').style.display = '';
    });
    survey.deleteCookie();
    survey.render("mySurveyJSName");
  }

  renderSurvey();

</script>

<a href="/admin/?w=surveys" class="btn btn-danger btn-sm pull-right" style="margin-top:50px; margin-bottom: 20px"><i class="pe-chevron-circle-left pe-fw"></i> Back to the main page</a>

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
