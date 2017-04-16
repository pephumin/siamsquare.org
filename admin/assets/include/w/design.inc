<?php

$me = "/admin/?w=design&s=".$_GET['s'];
$title = "Questionnaire design";
$element = "Other elements";
$template = "Appearance settings";

// Get projcet title
$q1 = $db->prepare("SELECT P.*, P.description AS pdescription, C.company, C.description AS DD, C.logo, C.website FROM j_projects P, j_companies C WHERE P.companyid = C.id AND P.id = :surveyid");
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
  $q2 = $db->prepare("INSERT INTO j_users_logs (surveyid, userid, ip, data, critical) VALUE (:surveyid, :userid, :ip, '" . $_SESSION["email"] . " tried accessing a non-existing project', '5')");
  $q2->bindValue(':surveyid', $_GET['s'], PDO::PARAM_INT);
  $q2->bindValue(':userid', $_SESSION["userid"], PDO::PARAM_INT);
  $q2->bindValue(':ip', $_SESSION["ip"], PDO::PARAM_INT);
  $q2->execute();
  exit;
}
while ($row = $q1->fetchObject()) {
  $project = $row->title;
  $owner = $row->userid;
  $status = $row->status;
  $website = $row->website;
  if ($row->logo) {
    if ($website) { $clientlogo = "<a href=\"$website\" title=\"$row->company\" target=\"_blank\"><img src=\"$row->logo\" title=\"$row->company\"></a>"; }
    else { $clientlogo = "<img src=\"$row->logo\" title=\"$row->company\">"; }
  }
  else { $clientlogo = ""; }
  $companyname = $row->company;
  $desc = strip_tags($row->DD);
  $description = $row->description;
  $pdescription = $row->pdescription;
  $thankyou = $row->thankyou;
  $showtopper = $row->show_top;
  $shownavbar = $row->show_navbar;
  $showdetail = $row->show_detail;
  $showabout = $row->show_about;
  $showlogo = $row->show_logo;
  $showcolour = $row->show_colour;
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
    $q = $db->prepare("INSERT INTO j_users_logs (surveyid, userid, ip, data, critical) VALUE (:surveyid, :userid, :ip, '" . $_SESSION["email"] . " tried editing a non-editable project', '5')");
    $q->bindValue(':surveyid', $_GET['s'], PDO::PARAM_INT);
    $q->bindValue(':userid', $_SESSION["userid"], PDO::PARAM_INT);
    $q->bindValue(':ip', $_SESSION["ip"], PDO::PARAM_INT);
    $q->execute();
    exit;
  }
}

// $firstsetup = 0;
// if ((empty($pdescription)) || (empty($thankyou))) { if (!isset($_COOKIE['firsttimeshown'])) { $firstsetup = 1; setcookie("firsttimeshown", "1", time()+86400, "/", "",  0); } }
// else { setcookie("firsttimeshown", "", time()-60, "/", "", 0); }
// // setcookie("firsttimeshown", "", time()-60, "/", "", 0);

if ($_SESSION['level'] == 9) { $cansave = true; }
else if ($_SESSION['level'] == 6) { $cansave = true; }
else if ($_SESSION['level'] == 5) { if ($_SESSION['userid'] == $owner) { $cansave = true; } }
else { $cansave = false; }

if ($_POST['selectA']) {
  $qA = $db->prepare("UPDATE j_projects SET show_top = :show_top WHERE id = :surveyid");
  $qA->bindValue(':surveyid', $_POST["surveyid"], PDO::PARAM_INT);
  $qA->bindValue(':show_top', $_POST['selectA'], PDO::PARAM_INT);
  $qA->execute();
  $m = 1;
} else if ($_POST['selectB']) {
  $qB = $db->prepare("UPDATE j_projects SET show_navbar = :show_navbar WHERE id = :surveyid");
  $qB->bindValue(':surveyid', $_POST["surveyid"], PDO::PARAM_INT);
  $qB->bindValue(':show_navbar', $_POST['selectB'], PDO::PARAM_INT);
  $qB->execute();
  $m = 1;
} else if ($_POST['selectC']) {
  $qC = $db->prepare("UPDATE j_projects SET show_detail = :show_detail WHERE id = :surveyid");
  $qC->bindValue(':surveyid', $_POST["surveyid"], PDO::PARAM_INT);
  $qC->bindValue(':show_detail', $_POST['selectC'], PDO::PARAM_INT);
  $qC->execute();
  $m = 1;
} else if ($_POST['selectD']) {
  $qD = $db->prepare("UPDATE j_projects SET show_about = :show_about WHERE id = :surveyid");
  $qD->bindValue(':surveyid', $_POST["surveyid"], PDO::PARAM_INT);
  $qD->bindValue(':show_about', $_POST['selectD'], PDO::PARAM_INT);
  $qD->execute();
  $m = 1;
} else if ($_POST['selectE']) {
  $qE = $db->prepare("UPDATE j_projects SET show_logo = :show_logo WHERE id = :surveyid");
  $qE->bindValue(':surveyid', $_POST["surveyid"], PDO::PARAM_INT);
  $qE->bindValue(':show_logo', $_POST['selectE'], PDO::PARAM_INT);
  $qE->execute();
  $m = 1;
} else if ($_POST['selectF']) {
  $qE = $db->prepare("UPDATE j_projects SET show_colour = :show_colour WHERE id = :surveyid");
  $qE->bindValue(':surveyid', $_POST["surveyid"], PDO::PARAM_INT);
  $qE->bindValue(':show_colour', $_POST['selectF'], PDO::PARAM_INT);
  $qE->execute();
  $m = 1;
} else if ($_POST['otherelements']) {
  $add = ""; $move = 0;
  if ($_POST['pdescription'] != $pdescription) { $add .= "description = :pdescription, "; $move = 1; }
  if ($_POST['thankyou'] != $thankyou) { $add .= "thankyou = :thankyou, "; $move = 1; }
  $add = substr_replace($add, '', -2);
  if ($move == 0) {
    $redirect = $me."&m=3";
    header("location: $redirect");
    exit;
  } else {
    $qF = $db->prepare("UPDATE j_projects SET ".$add." WHERE id = :surveyid");
    if ($_POST['pdescription'] != $pdescription) { $qF->bindValue(':pdescription', $_POST['pdescription'], PDO::PARAM_STR); }
    if ($_POST['thankyou'] != $thankyou) { $qF->bindValue(':thankyou', $_POST['thankyou'], PDO::PARAM_STR); }
    $qF->bindValue(':surveyid', $_POST["surveyid"], PDO::PARAM_INT);
    print_r($qF);
    $qF->execute();
    // $ql2 = $db->prepare("INSERT INTO j_users_logs (surveyid, userid, ip, data, critical) VALUE (:surveyid, :userid, :ip, '".$_SESSION['email']." updated survey elements (description and thank you message) for $project', '3')");
    // $ql2->bindValue(':surveyid', $_POST["surveyid"], PDO::PARAM_INT);
    // $ql2->bindValue(':userid', $_SESSION['userid'], PDO::PARAM_INT);
    // $ql2->bindValue(':ip', $_SESSION['ip'], PDO::PARAM_STR);
    // $ql2->execute();
    $redirect = $me."&m=2";
    header("location: $redirect");
    exit;
  }
}

pageHeader($title);
echo "<h2>Questionnaire design</h2>";
echo "<p class=\"introtext\">Questionnaire is developed using the tool in this page which includes the actual questionnaire design &amp; translation, plus additional option to edit the survey information, thank you message, and customise the look of the survey in many different styles.</p>\n";
echo "<p class=\"introtext\">It is very important that <strong>you click save before exiting to ensure that all changes will not be lost</strong>.</p>\n";
// echo "<br>\n";

if (($_GET['m'] == "1") || ($m == 1)) { $message = mksuccess("You have successfully updated the survey appearance."); echo "<p>$message</p>\n"; }
else if ($_GET['m'] == "2") { $message = mksuccess("You have successfully updated the survey description and thank you message."); echo "<p>$message</p>\n"; }
else if ($_GET['m'] == "3") { $message = mkinfo("No changes detected. So no change has been made."); echo "<p>$message</p>\n"; }
else { echo "<p></p>\n"; }
echo "<br>\n";

?>

<nav>
  <ul class="nav nav-tabs">
<?php if (($_POST['selectA']) || ($_POST['selectB']) || ($_POST['selectC']) || ($_POST['selectD']) || ($_POST['selectE']) || ($_POST['selectF'])) { ?>
    <li><a href="#1" data-toggle="tab"><i class="pe-edit pe-fw"></i> <?php echo $title; ?></a></li>
    <li><a href="#2" data-toggle="tab"><i class="pe-map-o pe-fw"></i> <?php echo $element; ?></a></li>
    <li class="active"><a href="#3" data-toggle="tab"><i class="pe-cog pe-fw"></i> <?php echo $template; ?></a></li>
<?php } else if (($_POST['otherelements']) || ($_GET['m'] == 2) || ($_GET['m'] == 3)) { ?>
    <li><a href="#1" data-toggle="tab"><i class="pe-edit pe-fw"></i> <?php echo $title; ?></a></li>
    <li class="active"><a href="#2" data-toggle="tab"><i class="pe-map-o pe-fw"></i> <?php echo $element; ?></a></li>
    <li><a href="#3" data-toggle="tab"><i class="pe-cog pe-fw"></i> <?php echo $template; ?></a></li>
<?php } else { ?>
    <li class="active"><a href="#1" data-toggle="tab"><i class="pe-edit pe-fw"></i> <?php echo $title; ?></a></li>
    <li><a href="#2" data-toggle="tab"><i class="pe-map-o pe-fw"></i> <?php echo $element; ?></a></li>
    <li><a href="#3" data-toggle="tab"><i class="pe-cog pe-fw"></i> <?php echo $template; ?></a></li>
<?php } ?>
  </ul>
</nav>

<br>

<div id="showreadonly"></div><div id="showsaving"></div><div id="showsavesuccess"></div>

<div class="tab-content">
<?php if (($_POST['selectA']) || ($_POST['selectB']) || ($_POST['selectC']) || ($_POST['selectD']) || ($_POST['selectE']) || ($_POST['selectF']) || ($_POST['otherelements']) || ($_GET['m'] == 2) || ($_GET['m'] == 3)) { ?>
  <div id="1" class="tab-pane fade">
<?php } else { ?>
  <div id="1" class="tab-pane fade in active">
<?php } ?>
    <a class="btn btn-default btn-sm pull-right" href="/r.php?pilot=✓&amp;s=<?php echo $_GET['s']; ?>" target="_blank" title="Conduct a pilot test on the questionnaire">Pilot test <i class="pe-paper-plane"></i></a>
    <h3>Project <?php echo $project; ?></h3>
    <div id="editor"></div>
    <br><br>
  </div>
<?php if (($_POST['otherelements']) || ($_GET['m'] == 2) || ($_GET['m'] == 3)) { ?>
  <div id="2" class="tab-pane fade in active">
<?php } else { ?>
  <div id="2" class="tab-pane fade">
<?php } ?>
    <h3>Edit other elements</h3>
    <p>Apart from the actual questionnaire itself, there are some other elements to be edited mainly the message to respondents.</p>
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <form id="surveyelements" method="post" action="<?php echo $me; ?>">
          <p>
            <label>Survey description in Thai</label> <span class="label label-red">required</span>
            <textarea class="form-control" name="pdescription" onclick="this.select()" style="font-family:'boon'; font-size:1.1rem; color:black; height:150px" placeholder="สองสามประโยคสั่นๆเกี่ยวกับงานวิจัยชิ้นนี้ เช่นเป็นงานวิจัยเกี่บวกับอะไร กลุ่มเป้าหมายคือใคร ระยะเวลาถึงเมื่อไร" style="height:100px"<?php if ($cansave == false) { echo " readonly"; } ?>><?php echo $pdescription; ?></textarea>
            <span class="text-muted small" style="font-family:'boon'; font-size:0.9rem; color:black"><small>Survey objectives and short detailed description / วัตถุประสงค์งานวิจัยและบทสรุปรายละเอียดโครงงานโดยย่อ</small></span>
          </p>
          <p>
            <label>Thank you message in Thai</label> <span class="label label-red">required</span>
            <textarea class="form-control" name="thankyou" onclick="this.select()" style="font-family:'boon'; font-size:1.1rem; color:black; height:150px" placeholder="ข้อความขอบคุณที่จะแสดงอยู่ตอนท้ายหลังจากตอบแบบสอบถามเสร็จสิ้นแล้ว" style="height:100px"<?php if ($cansave == false) { echo " readonly"; } ?>><?php echo $thankyou; ?></textarea>
            <span class="text-muted small" style="font-family:'boon'; font-size:0.9rem; color:black"><small>Thank you message with an optional on the detail of reward / ข้อความขอบคุณ และอาจจะรวมถึงรายละเอียดของรางวัล</small></span>
          </p>
          <br>
          <p class="text-center">
            <input type="hidden" name="otherelements" value="1">
            <input type="hidden" name="surveyid" value="<?php echo $_GET['s']; ?>">
            <button type="submit" class="btn btn-success"<?php if ($cansave == false) { echo " disabled"; } ?>>Save <i class="pe-check-circle-o"></i></button>
            <button type="reset" class="btn btn-default"<?php if ($cansave == false) { echo " disabled"; } ?>>Cancel <i class="pe-times-circle-o"></i></button>
          </p>
        </form>
      </div>
    </div>
    <br>
  </div>
<?php if (($_POST['selectA']) || ($_POST['selectB']) || ($_POST['selectC']) || ($_POST['selectD']) || ($_POST['selectE']) || ($_POST['selectF'])) { ?>
  <div id="3" class="tab-pane fade in active">
<?php } else { ?>
  <div id="3" class="tab-pane fade">
<?php } ?>
    <h3>Customise the look of your survey</h3>
    <p>Before adjusting anything, <strong class="red">please make sure you have saved the questionnaire</strong> (by clicking <button type="button" class="btn btn-success btn-xs svd_save_btn">Save</button> in the first tab) to ensure all changes will not be lost once you adjust something in this tab.</p>
    <h4>Settings</h4>
    <div class="row">
      <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 boxborder">
        <div class="row boxoutside">
          <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7 boxmenu">Colour</div>
          <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5 boxmenu boxdrop">
            <form method="post" class="form-inline" action="<?php echo $me; ?>">
              <select name="selectF" class="form-control input-sm" onchange="this.form.submit()"<?php if ($cansave == false) { echo " disabled"; } ?>>
<?php
$options = array("Blue" => "1", "Red" => "2", "Violet" => "3", "Green" => "4", "Yellow" => "5", "Maroon" => "6", "Orange" => "7");
foreach($options as $a => $b) {
  if ($b == $showcolour) { echo "                  <option value=\"$b\" selected>$a</option>\n"; }
  else { echo "                  <option value=\"$b\">$a</option>\n"; }
}
?>
              </select>
              <input type="hidden" name="surveyid" value="<?php echo $_GET['s']; ?>">
            </form>
          </div>
        </div>
      </div>
      <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 boxborder">
        <div class="row boxoutside">
          <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7 boxmenu">Top menu</div>
          <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5 boxmenu boxdrop">
            <form method="post" class="form-inline" action="<?php echo $me; ?>">
              <select name="selectA" class="form-control input-sm" onchange="this.form.submit()"<?php if ($cansave == false) { echo " disabled"; } ?>>
<?php
$options = array("Hide" => "1", "Show" => "2");
foreach($options as $a => $b) {
  if ($b == $showtopper) { echo "                  <option value=\"$b\" selected>$a</option>\n"; }
  else { echo "                  <option value=\"$b\">$a</option>\n"; }
}
?>
              </select>
              <input type="hidden" name="surveyid" value="<?php echo $_GET['s']; ?>">
            </form>
          </div>
        </div>
      </div>
      <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 boxborder">
        <div class="row boxoutside">
          <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7 boxmenu">Navigator</div>
          <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5 boxmenu boxdrop">
            <form method="post" class="form-inline" action="<?php echo $me; ?>">
              <select name="selectB" class="form-control input-sm" onchange="this.form.submit()"<?php if ($cansave == false) { echo " disabled"; } ?>>
<?php
$options = array("Hide" => "1", "Type #1" => "2", "Type #2" => "3", "Type #3 (full)" => "4");
foreach($options as $a => $b) {
  if ($b == $shownavbar) { echo "                  <option value=\"$b\" selected>$a</option>\n"; }
  else { echo "                  <option value=\"$b\">$a</option>\n"; }
}
?>
              </select>
              <input type="hidden" name="surveyid" value="<?php echo $_GET['s']; ?>">
            </form>
          </div>
        </div>
      </div>
    </div>
    <br>
    <div class="row">
      <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 boxborder">
        <div class="row boxoutside">
          <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7 boxmenu">Project detail</div>
          <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5 boxmenu boxdrop">
            <form method="post" class="form-inline" action="<?php echo $me; ?>">
              <select name="selectC" class="form-control input-sm" onchange="this.form.submit()"<?php if ($cansave == false) { echo " disabled"; } ?>>
<?php
$options = array("Hide" => "1", "Show" => "2");
foreach($options as $a => $b) {
  if ($b == $showdetail) { echo "                  <option value=\"$b\" selected>$a</option>\n"; }
  else { echo "                  <option value=\"$b\">$a</option>\n"; }
}
?>
              </select>
              <input type="hidden" name="surveyid" value="<?php echo $_GET['s']; ?>">
            </form>
          </div>
        </div>
      </div>
      <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 boxborder">
        <div class="row boxoutside">
          <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7 boxmenu">Company profile</div>
          <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5 boxmenu boxdrop">
            <form method="post" class="form-inline" action="<?php echo $me; ?>">
              <select name="selectD" class="form-control input-sm" onchange="this.form.submit()"<?php if ($cansave == false) { echo " disabled"; } ?>>
<?php
$options = array("Hide" => "1", "Show" => "2");
foreach($options as $a => $b) {
  if ($b == $showabout) { echo "                  <option value=\"$b\" selected>$a</option>\n"; }
  else { echo "                  <option value=\"$b\">$a</option>\n"; }
}
?>
              </select>
              <input type="hidden" name="surveyid" value="<?php echo $_GET['s']; ?>">
            </form>
          </div>
        </div>
      </div>
    </div>
    <br>
    <h4>The actual appearance</h4>
    <div class="row">
      <iframe class="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="realexample" src="<?php echo MYHOME."/r.php?s=".$_GET['s']; ?>" frameborder="1" allowfullscreen></iframe>
    </div>
    <br><br>
  </div>
</div>

<div id="newsetup" class="modal fade" tabindex="-1" role="dialog">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Survey setup</h4>
      </div>
      <div class="modal-body">
        <form id="surveyelements" method="post" action="<?php echo $me; ?>">
          <p>This pop-up only appears when respondent messages have not been set which usually applies for setting up project for the first time. You can alternatively fill in such info in <strong>Other elements</strong> section.</p>
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <p>
                <label>Survey description in Thai</label> <span class="label label-red">required</span>
                <textarea class="form-control" name="pdescription" onclick="this.select()" style="font-family:'boon'; font-size:1.1rem; color:black; height:150px" placeholder="สองสามประโยคสั่นๆเกี่ยวกับงานวิจัยชิ้นนี้ เช่นเป็นงานวิจัยเกี่บวกับอะไร กลุ่มเป้าหมายคือใคร ระยะเวลาถึงเมื่อไร" style="height:100px"><?php echo $pdescription; ?></textarea>
                <span class="text-muted small" style="font-family:'boon'; font-size:0.9rem; color:black"><small>Survey objectives and short detailed description / วัตถุประสงค์งานวิจัยและบทสรุปรายละเอียดโครงงานโดยย่อ</small></span>
              </p>
              <p>
                <label>Thank you message in Thai</label> <span class="label label-red">required</span>
                <textarea class="form-control" name="thankyou" onclick="this.select()" style="font-family:'boon'; font-size:1.1rem; color:black; height:150px" placeholder="ข้อความขอบคุณที่จะแสดงอยู่ตอนท้ายหลังจากตอบแบบสอบถามเสร็จสิ้นแล้ว" style="height:100px"><?php echo $thankyou; ?></textarea>
                <span class="text-muted small" style="font-family:'boon'; font-size:0.9rem; color:black"><small>Thank you message with an optional on the detail of reward / ข้อความขอบคุณ และอาจจะรวมถึงรายละเอียดของรางวัล</small></span>
              </p>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <input type="hidden" name="otherelements" value="1">
          <input type="hidden" name="surveyid" value="<?php echo $_GET['s']; ?>">
          <button type="submit" class="btn btn-warning">Save <i class="pe-check-circle-o"></i></button>
          <button type="button" class="btn btn-default" data-dismiss="modal">Cancel <i class="pe-times-circle-o"></i></button>
        </div>
      </form>
    </div>
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
  Survey.Survey.cssType = "bootstrap";
  Survey.JsonObject.metaData.removeProperty("survey", "clearInvisibleValues");
  Survey.JsonObject.metaData.removeProperty("survey", "cookieName");
  Survey.JsonObject.metaData.removeProperty("survey", "focusFirstQuestionAutomatic");
  Survey.JsonObject.metaData.removeProperty("survey", "locale");
  Survey.JsonObject.metaData.removeProperty("survey", "questionTitleTemplate");
  Survey.JsonObject.metaData.removeProperty("survey", "questionTitleLocation");
  Survey.JsonObject.metaData.removeProperty("survey", "requiredText");
  Survey.JsonObject.metaData.removeProperty("survey", "completeText");
  Survey.JsonObject.metaData.removeProperty("survey", "pageNextText");
  Survey.JsonObject.metaData.removeProperty("survey", "pagePrevText");
  Survey.JsonObject.metaData.removeProperty("survey", "mode");
  Survey.JsonObject.metaData.removeProperty("survey", "sendResultOnPageNext");
  Survey.JsonObject.metaData.removeProperty("survey", "storeOthersAsComment");
  Survey.JsonObject.metaData.removeProperty("survey", "surveyPostId");
  Survey.JsonObject.metaData.removeProperty("survey", "surveyId");
  Survey.JsonObject.metaData.removeProperty("survey", "title");
  Survey.JsonObject.metaData.removeProperty("survey", "showTitle");
  Survey.JsonObject.metaData.removeProperty("page", "visibleIf");

  Survey.JsonObject.metaData.addProperty("text", { name: "dateFormat", default: "d MM yy", choices: ["d MM yy", "dd-mm-yy", "dd/mm/yy", "dd.mm.yy", "M d, yy", "DD d MM yy"] });
  var widget1 = {
    name: "datepicker",
    htmlTemplate: "<input id='widget-datepicker' type='text' style='width:100%;'>",
    isFit: function(question) { return question.inputType == 'date'; },
    afterRender: function(question, el) {
      if (question.dateFormat) { dateFormat = question.dateFormat; } else { dateFormat = 'd MM yy'; }
      var widget1 = $(el).datepicker({ dateFormat: dateFormat });
      widget1.on("change", function (e) { question.value = $(this).val(); });
      question.valueChangedCallback = function() { widget1.datepicker('setDate', new Date(question.value)); }
      widget1.datepicker('setDate', new Date(question.value || Date.now));
    }
  }
  Survey.CustomWidgetCollection.Instance.addCustomWidget(widget1);

  Survey.JsonObject.metaData.addProperty("dropdown", { name: "renderAs", default: "standard", choices: ["standard", "barrating"] });
  Survey.JsonObject.metaData.addProperty("dropdown", { name: "ratingTheme", default: "star", choices: ["star", "heart", "thumb", "check", "bell", "flag", "user", "square-1", "square-2", "square-3"] });
  // Survey.JsonObject.metaData.addProperty("dropdown", { name: "ratingColour", default: "orange", choices: ["orange", "blue", "green", "red"] });
  Survey.JsonObject.metaData.addProperty("dropdown", { name: "showValues:boolean", default: false });
  var widget2 = {
    name: "bar-rating",
    isFit: function(question) { return question["renderAs"] === 'barrating'; },
    isDefaultRender: true,
    afterRender: function(question, el) {
      var $el = $(el);
      if (question.ratingTheme) { ratingTheme = question.ratingTheme; } else { ratingTheme = 'star'; }
      // if (question.ratingColour) { ratingColour = question.ratingColour; } else { ratingColour = 'orange'; }
      if (question.showValues) { showValues = question.showValues; } else { showValues = false; }
      $el.barrating('destroy');
      $el.barrating('show', {
        theme: ratingTheme,
        // colour: ratingColour,
        initialRating: question.value,
        showValues: showValues,
        showSelectedRating: true,
        onSelect: function(value, text) { question.value = value; }
      });
      // question.valueChangedCallback = function() { $(el).find('select').barrating('set', question.value); }
      question.valueChangedCallback = function() { $el.barrating('set', question.value); }
    }
  }
  Survey.CustomWidgetCollection.Instance.addCustomWidget(widget2);

  var options = {
    // questionTypes: ["rating", "radiogroup", "dropdown", "checkbox", "text", "multipletext", "comment", "file", "matrix", "matrixdropdown", "matrixdynamic", "html"],
    questionTypes: ["rating", "radiogroup", "dropdown", "checkbox", "text", "multipletext", "comment", "file", "matrix", "matrixdropdown", "html"],
    showJSONEditorTab: true,
    showTestSurveyTab: true,
    showEmbededSurveyTab: false,
    generateValidJSON: true,
  };
  // options.generateValidJSON = true;
  var editor = new SurveyEditor.SurveyEditor("editor", options);

  editor.onCanShowProperty.add(function(sender, options) {
    if (options.obj.getType() == "dropdown") {
      var forbiddenBarRatingProperties = ["hasComment", "commentText", "otherErrorText", "storeOthersAsComment", "width", "choicesOrder", "choicesByUrl", "optionsCaption", "hasOther", "otherText", "showValues"];
      var forbiddenDropDownProperties = ["hasComment", "commentText", "otherErrorText", "storeOthersAsComment", "width", "ratingTheme", "showValues"];
      var isBarRating = options.obj["renderAs"] == "barrating";
      var propName = options.property.name;
      canShow = propName != "renderAs";
      if (canShow && !isBarRating) canShow = forbiddenDropDownProperties.indexOf(propName) < 0;
      if (canShow && isBarRating) canShow = forbiddenBarRatingProperties.indexOf(propName) < 0;
      options.canShow = canShow;
    } else if (options.obj.getType() == "text") {
      var forbiddenDateProperties = ["commentText"];
      var forbiddenTextProperties = ["commentText", "dateFormat"];
      var isDate = options.obj["inputType"] == "date";
      var propName = options.property.name;
      // canShow = propName != "inputType";
      canShow = propName;
      if (canShow && !isDate) canShow = forbiddenTextProperties.indexOf(propName) < 0;
      if (canShow && isDate) canShow = forbiddenDateProperties.indexOf(propName) < 0;
      options.canShow = canShow;
    } else {
      var forbiddenProperties = ["commentText"];
      var propName = options.property.name;
      canShow = propName;
      if (canShow) canShow = forbiddenProperties.indexOf(propName) < 0;
      options.canShow = canShow;
    }
  });

  editor.toolbox.addItem({
    name: "datepicker",
    iconName: "icon-date",
    title: "Date Picker (OE)",
    json: { type: "text", inputType: "date", dateFormat: "d MM yy" }
  });
  editor.toolbox.addItem({
    name: "barrating",
    iconName: "icon-rating",
    title: "Icon Rating (SA)",
    json: { type: "dropdown", renderAs: "barrating", choices: [1, 2, 3, 4, 5] }
  });
  editor.toolbox.addItem({
    name: "country",
    isCopied: false,
    iconName: "icon-dropdown",
    title: "Country (SA)",
    json: { type: "dropdown", optionsCaption: "Select a country", choicesByUrl: { url: "https://restcountries.eu/rest/v1/all" } }
  });


  var surveyid = <?php echo $_GET['s']; ?>;
  // var companyid = parseInt("<?php echo $_SESSION['companyid']; ?>");
  var userid = parseInt("<?php echo $_SESSION['userid']; ?>");
  var email = "<?php echo $_SESSION['email']; ?>";
  var ip = "<?php echo $_SESSION['ip']; ?>";
  var level = <?php echo $_SESSION['level']; ?>;
  var api = "http://www.siamsquare.org.uk";
  var firstsetup = "<?php echo $firstsetup; ?>";
  var cansave = "<?php echo $cansave; ?>";
  if (firstsetup == 1) { $('#newsetup').modal('show'); }
  <?php if ($thankyou) { echo "var thankyou = \"<h2><i class='pe-flag-checkered pe-fw'></i> คุณได้ตอบแบบสอบถามเสร็จสมบูรณ์แล้ว</h2>\\n\\n<p>$thankyou</p>\";\n"; } else { echo "var thankyou = \"<h2><i class='pe-flag-checkered pe-fw'></i> คุณได้ตอบแบบสอบถามเสร็จสมบูรณ์แล้ว</h2>\\n\\n<p>ความคิดเห็นของคุณได้ถูกบันทึกและจัดเก็บเข้าสู่ระบบของเราเป็นที่เรียบร้อยแล้ว และเพื่อเป็นการขอบคุณสำหรับการสละเวลาของคุณ ทางเรามีของรางวัลให้คุณ 888</p>\";\n"; } ?>
  $.ajaxSetup({ headers: { 'X-Requested-With': 'aa5e1ab4-b0bf-4e82-8584-7cf4e9fdeaa8' } });
  $('#showsaving').html("<div class='alert alert-info'><i class='pe-spinner pe-pulse pe-lg pe-fw'></i> The system is now saving your data, please wait until the green message shows up which shoud be in a minute</div>").hide();
  $('#showsavesuccess').html("<div class='alert alert-success'><i class='pe-save pe-fw'></i> Data has been saved successfully</div>").hide();
  $('#showreadonly').html("<div class='alert alert-warning'><i class='pe-exclamation-triangle pe-fw'></i> Because you are not the project owner, this questionnaire has entered <strong>read-only mode</strong> (all changes will not be saved)</div>").hide();
  mm = getsurveydata(surveyid);
  var blank = JSON.stringify({ "completeText": "ยืนยันและส่งความคิดเห็น", "completedHtml": thankyou, "pageNextText": "หน้าถัดไป", "pagePrevText": "หน้าที่แล้ว", "pages": [{ "name": "page1" }], "questionTitleTemplate": "{no}. {title} {require}", "locale": "th", "focusFirstQuestionAutomatic": true });
  // if (mm.data) { editor.text = mm.data; } else if (localStorage.getItem("editdata." + surveyid)) { editor.text = localStorage.getItem("editdata." + surveyid); } else { editor.text = blank; }
  if (mm.data) { editor.text = mm.data; } else { editor.text = blank; }
  if (userid == mm.userid) { var owner = true; } else { var owner = false; }
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
        $.ajax({
          url: api + '/log/' + userid + '/' + surveyid,
          dataType: 'json',
          type: 'post',
          contentType: 'application/json; charset=utf-8',
          data: '{ "surveyid": "' + surveyid + '", "userid": "' + userid + '", "ip": "' + ip + '", "data": "' + email + ' edited and saved ' + mm.title + '", "critical": "2" }',
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
  // if (mm.title) { var title = "Questionnaire"; var pname = "Project " + mm.title; } else { var title = "Start a new questionnaire"; }
  // document.getElementById('h2pageTitle').innerHTML = title;
  // document.getElementById('projectname').innerHTML = pname;
  $('#btn-save').on('click', function() {
    if (typeof(Storage) !== "undefined") { localStorage.setItem("editdata." + surveyid, JSON.stringify(editor.text)); }
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
  }

</script>

<?php backButton("/admin/?w=surveys", "Back to the main page", "danger"); ?>

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
