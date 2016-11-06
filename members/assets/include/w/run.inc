<?php

$email = $_SESSION["email"];
$userid = $_SESSION['userid'];
$surveyid = $_GET['s'];

if (isset($_GET['o']) || ($_GET['o'] == "CNT")) {
  $auth = $_GET['o'];
  $continue = true;
  $userid = 0;
  // run function get email from CNT, fallback below
  $email = "CNT@siamsquare.org";
}


$title = "เข้าร่วมงานวิจัย";
pageHeader($title);
// echo "<h3 class=\"text-right\">$title <small>(บัญชีของคุณคือ <strong id=\"email\">$email</strong>)</small></h3>\n";
echo "<h3 class=\"text-right\">$title</h3>\n";

?>

<div id="showalert"></div>

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
      //success: function(data) { result = data; }
      success: function(data) {
        $('#showalert').html("<div class='alert alert-success'><i class='pe-check-square-o pe-fw'></i> เราได้ทำการจัดเก็บความคิดเห็นของคุณลงระบบแล้ว</div>");
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
  mm = getsurveyinfo(surveyid);
  Survey.Survey.cssType = "bootstrap";
  var survey = new Survey.Survey (getsurveydata(surveyid), "runsurvey");
  survey.deleteCookie();
  survey.onComplete.add(function (s) { postsurveydata(cid, ip, email, surveyid, survey.data, mm.title); });

</script>

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
