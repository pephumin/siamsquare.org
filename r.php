<?php

require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/config.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/themes.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/functions.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/class.login.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/class.imgresize.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/class.phpmailer.php';

if (empty($_GET['s'])) {
  $target = "/";
  header("refresh: 10; url=$target");
  $title = "เกิดข้อผิดพลาด";
  pageHeader($title);
  echo "<h2>ไม่พบแบบสอบถาม</h2>\n";
  echo "<p>ไม่สามารถทำรายการต่อได้เนื่องจากไม่พบแบบสอบถาม กรุณาตรวจสอบให้แน่ใจว่าคุณได้พิมพ์ที่อยู่เว็บไซต์ได้ถูกต้องและครบถ้วน</p>";
  echo "<p>หากจะให้แน่นอนที่สุด เราขอแนะนำให้กดจากลิ๊งที่คุณได้รับโดยตรง จะรับประกันได้ว่าไม่มีข้อผิดพลาดอย่างเด็ดขาด</p>";
  echo mkerror("เกิดข้อผิดพลาด ไม่สามารถทำรายการได้");
  echo "<p>คุณสามารถ<a href=\"/members/contact/\">ติดต่อมาที่เราได้ทุกเวลา</a> หากคุณมีความประสงค์ต้องการข้อมูลหรือความช่วยเหลือเพิ่มเติม</p>";
  pageFooter();
  exit;
}

$login = new Login();
if ($login->isUserLoggedIn() == true) { $email = $_SESSION["email"]; }
else if (($_GET["email"]) && ($_GET["token"])) {
  $q1 = $db->prepare("SELECT * FROM j_respondents WHERE email = :email AND surveyid :surveyid");
  $q1->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
  $q1->bindValue(':email', $_GET["email"], PDO::PARAM_STR);
  // $q1->bindValue(':password', $_GET["token"], PDO::PARAM_STR);
  $q1->execute();
  if ($q1->rowCount() == 0) { $error[] = mkerror("ไม่พบอีเมล์ของคุณในระบบสำหรับงานวิจัยนี้"); }
  else {
    while ($row = $q1->fetchObject()) {
      $password = $row->password;
      if ($password != $_GET["token"]) {
        // $q2 = $db->prepare('UPDATE j_respondents_private SET fails = fails+1, fails_last = :fails_last, fails_ip = :fails_ip WHERE email = :email');
        // $q2->execute(array(':email' => $email, ':fails_last' => time(), ':fails_ip' => $ip));
        // $q3 = $db->prepare("INSERT INTO j_respondents_private_logs (email, ip, data, critical) VALUE (:email, :ip, '".$email." failed to log in due to a wrong token', '4')");
        // $q3->bindValue(':email', $email, PDO::PARAM_INT);
        // $q3->bindValue(':ip', $ip, PDO::PARAM_STR);
        // $q3->execute();
        $errors[] = mkerror("Wrong access token");
      } else {
        $email = $row->email;
        // $q4 = $db->prepare("UPDATE j_respondents_private SET lastlogin2 = lastlogin, lastip2 = lastip WHERE email = :email AND surveyid = :surveyid");
        // $q4->bindValue(':email', $email, PDO::PARAM_STR);
        // $q4->bindValue(':surveyid', $surveyid, PDO::PARAM_INT);
        // $q4->execute();
        // $q5 = $db->prepare("UPDATE j_respondents_private SET lastlogin = NOW(), lastip = :ip WHERE email = :email AND surveyid = :surveyid");
        // $q5->bindValue(':ip', $ip, PDO::PARAM_STR);
        // $q5->bindValue(':email', $email, PDO::PARAM_STR);
        // $q5->bindValue(':surveyid', $surveyid, PDO::PARAM_INT);
        // $q5->execute();
        // $q6 = $db->prepare("SELECT * FROM j_respondents_private WHERE email = :email AND surveyid = :surveyid");
        // $q6->bindValue(':email', $result_row->email, PDO::PARAM_STR);
        // $q6->bindValue(':surveyid', $surveyid, PDO::PARAM_INT);
        // $q6->execute();
        // $resulty = $q6->fetchObject();
        // $_SESSION['logged_in'] = 1;                     $this->logged_in = true;
        // $_SESSION['email'] = $result_row->email;        $this->email = $result_row->email;
        // $_SESSION['created'] = $resulty->created;       $this->created = $resulty->created;
        // $_SESSION['updated'] = $resulty->updated;       $this->updated = $resulty->updated;
        // $_SESSION['lastlogin'] = $resulty->lastlogin;   $this->lastlogin = $resulty->lastlogin;
        // $_SESSION['lastlogin2'] = $resulty->lastlogin2; $this->lastlogin2 = $resulty->lastlogin2;
        // $_SESSION['ip'] = $ip;                          $this->ip = $ip;
        // $_SESSION['lastip'] = $resulty->lastip;         $this->lastip = $resulty->lastip;
        // $_SESSION['lastip2'] = $resulty->lastip2;       $this->lastip2 = $resulty->lastip2;
        // $q7 = $db->prepare("INSERT INTO j_respondents_private_logs (userid, ip, data, critical) VALUE (:userid, :ip, '".$result_row->email." logged in', '1')");
        // $q7->bindValue(':userid', $resulty->id, PDO::PARAM_INT);
        // $q7->bindValue(':ip', $_SESSION['ip'], PDO::PARAM_STR);
        // $q7->execute();
        // $q8 = $db->prepare('UPDATE j_respondents_private SET fails = 0, fails_last = NULL WHERE email = :email AND fails != 0');
        // $q8->execute(array(':email' => $email));
        if ($ref) { header("location: $ref"); }
      }
    }
  }
}
else {
  $ip = getip();
  $email = "anonymous@siamsquare.org"; $userid = 0;
  // $email = $_GET["email"];
  // $surveyid = $_GET["s"];
  // $q1 = $db->prepare("SELECT password FROM j_respondents_private WHERE email = :email AND surveyid = :surveyid");
  // $q1->bindValue(':email', $email, PDO::PARAM_INT);
  // $q1->bindValue(':surveyid', $surveyid, PDO::PARAM_INT);
  // $q1->execute();
  // while ($row = $q1->fetchObject()) { $password = $row->password; }
}

// if (isset($_GET['o']) || ($_GET['o'] == "CNT")) {
//   $auth = $_GET['o'];
//   $continue = true;
//   $userid = 0;
//   // run function get email from CNT, fallback below
//   $email = "CNT@siamsquare.org";
// }

// Get survey and company information (e.g. logo, website, etc.)
$q1 = $db->prepare("SELECT P.*, C.company, C.description AS DD, C.logo, C.website FROM j_projects P, j_companies C WHERE P.companyid = C.id AND P.id = :surveyid");
$q1->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
$q1->execute();
if ($q1->rowCount() == 0) {
  $target = "/";
  // header("refresh: 10; url=$target");
  $title = "เกิดข้อผิดพลาด";
  pageHeader($title);
  echo "<h2>ไม่พบงานวิจัย</h2>\n";
  echo "<p>ไม่สามารถทำรายการต่อได้เนื่องจากไม่พบงานวิจัย กรุณาตรวจสอบให้แน่ใจว่าคุณได้พิมพ์ที่อยู่เว็บไซต์ได้ถูกต้องและครบถ้วน</p>";
  echo "<p>หากจะให้แน่นอนที่สุด เราขอแนะนำให้กดจากลิ๊งที่คุณได้รับโดยตรง จะรับประกันได้ว่าไม่มีข้อผิดพลาดอย่างเด็ดขาด</p>";
  echo mkerror("เกิดข้อผิดพลาด ไม่สามารถทำรายการได้");
  echo "<p>คุณสามารถ<a href=\"/members/contact/\">ติดต่อมาที่เราได้ทุกเวลา</a> หากคุณมีความประสงค์ต้องการข้อมูลหรือความช่วยเหลือเพิ่มเติม</p>";
  pageFooter();
  exit;
}
while ($r = $q1->fetchObject()) {
  $project = $r->title;
  $status = $r->status;
  $website = $r->website;
  if ($r->logo) {
    if ($website) { $clientlogo = "<a href=\"$website\" title=\"$r->company\" target=\"_blank\"><img src=\"$r->logo\" title=\"$r->company\"></a>"; }
    else { $clientlogo = "<img src=\"$r->logo\" title=\"$r->company\">"; }
  }
  else { $clientlogo = ""; }
  $companyname = $r->company;
  $desc = strip_tags($r->DD);
  $description = nl2br($r->description);
  if ($_showtopper) { $showtopper = $_showtopper; } else { $showtopper = $r->show_top; }
  if ($_shownavbar) { $shownavbar = $_shownavbar; } else { $shownavbar = $r->show_navbar; }
  if ($_showdetail) { $showdetail = $_showdetail; } else { $showdetail = $r->show_detail; }
  if ($_showabout) { $showabout = $_showabout; } else { $showabout = $r->show_about; }
  if ($_showlogo) { $showlogo = $_showlogo; } else { $showlogo = $r->show_logo; }
  if ($_showcolour) { $showcolour = $_showcolour; } else { $showcolour = $r->show_colour; }
}

$title = "ร่วมแสดงความคิดเห็น";
pageHeader($title);
// $email = "anonymous@siamsquare.org";
// $email = base64_encode($email);
// $email = base64_decode($email);
?>

<?php //if (($description) && ($showdetail == 2)) { ?>
<?php if ($showdetail == 2) { ?>
<div class="row" style="margin-top: 20px">
  <div class="container">
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 projectdetail bg-info">
      <h5 class="projectdetailhead">รายละเอียดงานวิจัย</h5>
      <p class="projectdescription"><?php echo $description; ?></p>
    </div>
  </div>
</div>
<?php } ?>

<div id="showupload"></div><div id="showcompletion"></div>
<br>
<div id="runsurvey"></div>
<br>
<div id="notification"></div>

<script type="text/javascript">

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
<?php if ($_GET['pilot'] == 1) { ?>
      data: '{"rd": "' + cid + '", "ip": "' + cip + '", "email": "' + email + '", "surveyid": ' + id + ', "data": ' + JSON.stringify(JSON.stringify(data)) + ', "status": "1" }',
<?php } else { ?>
      data: '{"rd": "' + cid + '", "ip": "' + cip + '", "email": "' + email + '", "surveyid": ' + id + ', "data": ' + JSON.stringify(JSON.stringify(data)) + ', "status": "2" }',
<?php } ?>
      success: function(data) {
        $('#showcompletion').show();
        $.ajax({
<?php if ($_GET['pilot'] == 1) { ?>
          url: api + '/log/' + cid + '/' + id,
<?php } else { ?>
          url: api + '/rlog/' + cid + '/' + id,
<?php } ?>
          dataType: 'json',
          type: 'post',
          contentType: 'application/json; charset=utf-8',
<?php if ($_GET['pilot'] == 1) { ?>
          data: '{ "userid": "' + cid + '", "ip": "' + cip + '", "data": "' + email + ' pilot tested a survey ' + etitle + ' (id=' + id + ')", "critical": "2" }',
<?php } else { ?>
          data: '{ "userid": "' + cid + '", "ip": "' + cip + '", "data": "' + email + ' conducted a survey ' + etitle + ' (id=' + id + ')", "critical": "2" }',
<?php } ?>
          success: function(data) { result = data; }
        });
      }
    });
    return result;
  }
  function getsavesurveydata(id, email) {
    var result = "";
    $.ajax({
      url: api + '/getsaved/' + id + '/' + email,
      dataType: 'json',
      type: 'get',
      cache: false,
      async: false,
      success: function(data) { result = data; }
    });
    return result;
  }
  function clearsavesurveydata(resultid, cip, email, id, etitle) {
    var result = "";
    $.ajax({
      url: api + '/clearsave/' + resultid,
      dataType: 'json',
      type: 'delete',
      contentType: 'application/json; charset=utf-8',
      success: function(data) {
        $.ajax({
          url: api + '/rlog/' + cid + '/' + id,
          dataType: 'json',
          type: 'post',
          contentType: 'application/json; charset=utf-8',
          data: '{ "surveyid": "' + id + '","email": "' + email + '", "ip": "' + cip + '", "data": "' + email + ' clear saved survey results for ' + etitle + ' (id=' + id + ')", "critical": "2" }',
          success: function(data) { result = data; }
        });
      }
    });
    window.setTimeout(function () { window.location.reload(); }, 1500);
    return result;
  }
  function autosavesurveydata(cid, cip, email, id, data, etitle) {
    var result = "";
    $.ajax({
      url: api + '/autosave/',
      dataType: 'json',
      type: 'post',
      contentType: 'application/json; charset=utf-8',
      data: '{"rd": "' + cid + '", "ip": "' + cip + '", "email": "' + email + '", "surveyid": "' + id + '", "type": "response", "status": "2", "data": ' + JSON.stringify(JSON.stringify(data)) + ' }',
      success: function(data) { result = data; }
    });
    return result;
  }

  // Start scripting by pe (phumin@sawasdee.org)
  var api = "http://www.siamsquare.org.uk";
  var surveyid = <?php echo $_GET["s"]; ?>;
  var cid = "<?php echo $userid; ?>";
  var email = "<?php echo $email; ?>";
  var title = "Project <?php echo $project; ?>";
  var ip = "<?php echo getip(); ?>";
  var colour = <?php echo $showcolour; ?>;
  $.ajaxSetup({ headers: { 'X-Requested-With': 'aa5e1ab4-b0bf-4e82-8584-7cf4e9fdeaa8' } });
  if (colour == 1) { Survey.defaultBootstrapCss.navigationButton = "btn btn-primary"; Survey.defaultBootstrapCss.progressBar = "progress-bar progress-bar-primary progress-bar-striped active"; }
  else if (colour == 2) { Survey.defaultBootstrapCss.navigationButton = "btn btn-danger"; Survey.defaultBootstrapCss.progressBar = "progress-bar progress-bar-danger progress-bar-striped active"; }
  else if (colour == 3) { Survey.defaultBootstrapCss.navigationButton = "btn btn-info"; Survey.defaultBootstrapCss.progressBar = "progress-bar progress-bar-info progress-bar-striped active"; }
  else if (colour == 4) { Survey.defaultBootstrapCss.navigationButton = "btn btn-success"; Survey.defaultBootstrapCss.progressBar = "progress-bar progress-bar-success progress-bar-striped active"; }
  else if (colour == 5) { Survey.defaultBootstrapCss.navigationButton = "btn btn-warning"; Survey.defaultBootstrapCss.progressBar = "progress-bar progress-bar-warning progress-bar-striped active"; }
  else if (colour == 6) { Survey.defaultBootstrapCss.navigationButton = "btn btn-danger"; Survey.defaultBootstrapCss.progressBar = "progress-bar progress-bar-danger progress-bar-striped active"; }
  else if (colour == 7) { Survey.defaultBootstrapCss.navigationButton = "btn btn-warning"; Survey.defaultBootstrapCss.progressBar = "progress-bar progress-bar-warning progress-bar-striped active"; }
  else if (colour == 8) { Survey.defaultBootstrapCss.navigationButton = "btn btn-info"; Survey.defaultBootstrapCss.progressBar = "progress-bar progress-bar-info progress-bar-striped active"; }
  else { Survey.defaultBootstrapCss.navigationButton = "btn btn-info"; Survey.defaultBootstrapCss.progressBar = "progress-bar progress-bar-info progress-bar-striped active"; }
  Survey.Survey.cssType = "bootstrap";
  var survey = new Survey.Survey (getsurveydata(surveyid), "runsurvey");
  // survey.mode = "display"; // "edit" or "display" (read only)
<?php if (!$_GET['pilot']) { ?>
  var checksave = getsavesurveydata(surveyid, email);
  if ((checksave.data == null) || (checksave.data == "")) { resultid = null; }
  else {
    survey.data = checksave.data; resultid = checksave.id;
    moment.locale('en'); s1 = moment(checksave.saved).fromNow(); s2 = moment(checksave.saved).format("D MMM YYYY"); s3 = moment(checksave.saved).format("h:mm:ss a");
    $('#notification').html("<div class='alert alert-warning'><h4><i class='pe-save pe-lg pe-fw'></i> พบข้อมูลเก่าค้างไว้จากครั้งก่อน</h4><span>ระบบพบข้อมูลเก่าบางส่วนที่คุณเคยทำไว้ตั้งแตวันที่่ " + s2 + " เวลา " + s3 + " (" + s1 + ") และคุณสามารถใช้ข้อมูลนี้ต่อได้ทันที<br>หากคุณต้องการเริ่มใหม่ คุณสามารถทำได้โดยกด <button type=\"button\" id=\"resetsave\" class=\"btn btn-xs btn-danger\">Reset</button></span></div>").hide();
    $('#notification').show();
    survey.onCurrentPageChanged.add(function(data) { $('#notification').hide(); });
  }
<?php } ?>
  $('#showupload').html("<div class='alert alert-info'><i class='pe-spinner pe-pulse pe-lg pe-fw'></i> ระบบกำลังอัพโหลดรูปของคุณ ระหว่างนี้คุณสามารถทำรายการต่อได้ทันที และอีกสักครู่เมื่อระบบทำงานในส่วนนี้เสร็จ ข้อความนี้จะหายไปเอง</div>").hide();
  $('#showcompletion').html("<div class='alert alert-success'><i class='pe-check-square-o pe-lg pe-fw'></i> เราได้ทำการจัดเก็บความคิดเห็นของคุณลงระบบเป็นที่เรียบร้อยแล้ว</div>").hide();
  $('#resetsave').on('click', function() { clearsavesurveydata(resultid, ip, email, surveyid, title); });
  survey.onComplete.add(function (s) { postsurveydata(cid, ip, email, surveyid, survey.data, title); });
  survey.onUploadFile.add(function (data) { $('#showupload').show(); setTimeout(function () { $("#showupload").slideUp(500, function () { $("#showupload").hide(); }); }, 6000); });
<?php if (!$_GET['pilot']) { ?>
  survey.onCurrentPageChanged.add(function (data) { autosavesurveydata(cid, ip, email, surveyid, survey.data, title); });
<?php } ?>
  // survey.onComplete
  // survey.onCurrentPageChanged
  // survey.onValueChanged
  // survey.onVisibleChanged
  // survey.onPageVisibleChanged
  // survey.onQuestionAdded
  // survey.onQuestionRemoved
  // survey.onValidateQuestion
  // survey.onProcessHtml
  // survey.onSendResult
  // survey.onGetResult
  // survey.onUploadFile
</script>

<?php if (($desc) && ($showabout == 2)) { ?>
<div class="row companydetail" style="margin-top: 40px">
  <div class="container">
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 companybox">
      <h5 class="companydetailhead">เกี่ยวกับบริษัท</h5>
    </div>
    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 companylogoboxA">
      <?php if ($showlogo == 2) { echo "<div class=\"companylogo\">$clientlogo</div>\n"; } else { echo "<div class=\"companyname\"><strong>$companyname</strong></div>\n"; } ?>
    </div>
    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 companylogoboxB"<?php if ($showlogo != true) { echo " style=\"font-size:85%\""; } ?>>
      <?php if ($showlogo == 2) { echo "<div class=\"companylogo\"><a href=\"http://www.pebinary.com\" class=\"footerlogo\" title=\"PE BINARY CO., LTD.\">".peblogo()."</a></div>\n"; } else { echo "<div class=\"companyname\"><strong>".peblogo()."</strong></div>\n"; } ?>
    </div>
    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 companybox">
      <p class="companydescription"><i class="pe-globe pe-fw"></i> <a href="<?php echo $website; ?>" title="<?php echo $r->company; ?>" target="_blank"><?php echo $website; ?> <i class=\"pe-external-link\"></i></a></p><br>
      <p class="companydescription"><?php echo $desc; ?></p>
    </div>
    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 companybox">
      <p class="companydescription"><i class="pe-globe pe-fw"></i> <a href="http://www.pebinary.com" title="PE BINARY CO., LTD." target="_blank">http://www.pebinary.com</a></p><br>
      <p class="companydescription">A revolutionary market research company founded in 2016 with a vision to help clients changing the way they access consumer insights. The company provides accurate and more responsive consumer insights allowing business decisions to be made quicker.</p>
    </div>
  </div>
</div>
<?php } ?>

<style media="screen">
  header > .header-2 { <?php echo themeBG($showcolour); ?>; }
  footer > .footer-2 { <?php echo themeBG($showcolour); ?>; }
</style>

<?php if ($project || $notes) { pageFooter($project, $notes); } else { pageFooter(); } ?>
