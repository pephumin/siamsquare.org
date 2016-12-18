<?php

$defaultemail = EMAILNOREPLY; // "noreply@siamsquare.org";

// Get projcet title
$q = $db->prepare("SELECT title, status, email_i, email_i_content, email_r, email_r_content FROM j_projects WHERE private = 1 AND id = :surveyid");
$q->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
$q->execute();
if ($q->rowCount() == 0) {
  $title = "An error has been found";
  pageHeader($title);
  echo "<h2>We could not find a match for ID for this project</h2>\n";
  echo "<p>There has been an error locating the project you are looking for. This is caused by two reasons which are either there is a false in our system (which is very unlikely) or you use our system incorrectly.</p>";
  echo "<p>If you have tried entering the project ID manually, we strongly suggest you should stop doing this. You should instead use the client dashboard which will never lead you to a wrong link or any errors like this at all.</p>";
  echo mkerror("In fact we typically consider such action as violent.");
  echo "<p>Our system has already recorded this error including your identity and timestamp.</p>";
  pageFooter();
  $q = $db->prepare("INSERT INTO j_users_logs (userid, ip, data, critical) VALUE (:userid, :ip, '" . $_SESSION["email"] . " tried accessing a non-existing project', '5')");
  $q->bindValue(':userid', $_SESSION["userid"], PDO::PARAM_INT);
  $q->bindValue(':ip', $_SESSION["ip"], PDO::PARAM_INT);
  $q->execute();
  exit;
}
while ($row = $q->fetchObject()) {
  $project = $row->title;
  $status = $row->status;
  $email_i = $row->email_i;
  $email_i_content = $row->email_i_content;
  $email_r = $row->email_r;
  $email_r_content = $row->email_r_content;
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

$me = "/admin/?w=template&s=".$_GET['s'];
if ($_POST['saveme'] == 1) {
  if ($_POST["choice-email1"] == "system") { $email_i = $_POST["email_iA"]; }
  else if ($_POST["choice-email1"] == "custom") { $email_i = $_POST["email_iB"]; }
  $email_i_content = htmlentities($_POST["email_i_content"], ENT_QUOTES, 'UTF-8');
  $q2A = $db->prepare("UPDATE j_projects SET email_i = :email_i, email_i_content = :email_i_content WHERE id = :surveyid");
  $q2A->bindValue(':email_i', $email_i, PDO::PARAM_STR);
  $q2A->bindValue(':email_i_content', $email_i_content, PDO::PARAM_STR);
  $q2A->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
  $q2A->execute();
  $ql2A = $db->prepare("INSERT INTO j_users_logs (userid, ip, data, critical) VALUE (:userid, :ip, '".$_SESSION['email']." edited email invitation template for $project (id=".$_GET['s'].")', '2')");
  $ql2A->bindValue(':userid', $_SESSION['userid'], PDO::PARAM_INT);
  $ql2A->bindValue(':ip', $_SESSION['ip'], PDO::PARAM_STR);
  $ql2A->execute();
  // header("location: $me");
} else if ($_POST['saveme'] == 2) {
  if ($_POST["choice-email2"] == "system") { $email_r = $_POST["email_rA"]; }
  else if ($_POST["choice-email2"] == "custom") { $email_r = $_POST["email_rB"]; }
  $email_r_content = htmlentities($_POST["email_r_content"], ENT_QUOTES, 'UTF-8');
  $q2B = $db->prepare("UPDATE j_projects SET email_r = :email_r, email_r_content = :email_r_content WHERE id = :surveyid");
  $q2B->bindValue(':email_r', $email_r, PDO::PARAM_STR);
  $q2B->bindValue(':email_r_content', $email_r_content, PDO::PARAM_STR);
  $q2B->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
  $q2B->execute();
  $ql2B = $db->prepare("INSERT INTO j_users_logs (userid, ip, data, critical) VALUE (:userid, :ip, '".$_SESSION['email']." edited email reminder template for $project (id=".$_GET['s'].")', '2')");
  $ql2B->bindValue(':userid', $_SESSION['userid'], PDO::PARAM_INT);
  $ql2B->bindValue(':ip', $_SESSION['ip'], PDO::PARAM_STR);
  $ql2B->execute();
  // header("location: $me");
}

$title = "Customise the templates";
pageHeader($title);
echo "<h2>$title</h2>";
echo "<p class=\"blue\"><strong>This feature is only available for <em>Private survey</em> (e.g. the list of respondent's names is uploaded and provided by you).</strong></p>";
echo "<p>This page allows you to customise some of the messages, contents, plus the look & feel of the actual interface to respondents. This will make sure you have some controls over on the communication between us and your respondents.</p>\n";
echo "<hr>\n";

$default_i .= "Dear employees,\n\n";
$default_i .= "We are rolling out the employee survey which you are expected to participate. It is the only tool that provides the management team a clear picture on what needs to be done.\n\n";
$default_i .= "I strongly encourage you to participate and provide your honest opinions. The survey link is provided below in this email.\n\n";
$default_i .= "[LINK]\n\n";
$default_i .= "The survey period starts from today and will be ended by the end of this month. I hope to receiving a high participation rate from all of you.\n\n";
$default_i .= "Regards,\n";
$default_i .= "John Doe (CEO)";

$default_r = "Hi there,\n\n";
$default_r .= "This is a reminder for those who have not participated with our employee survey, please complete it as soon as possible. The survey will be ended by the end of this month.\n\n";
$default_r .= "For those who fail to participate this survey will be required to report to your boss with concrete reasons. And it will be added to a consideration to your next year's KPI performance review.\n\n";
$default_r .= "And here is the link to survey again.\n\n";
$default_r .= "[LINK]\n\n";
$default_r .= "Regards,\n";
$default_r .= "John Doe (CEO)";

$link = MYHOME.$me;
$messagecontent = "&lt;p&gt;Hi there,&lt;/p&gt;\n";
$messagecontent .= "&lt;p&gt;&lt;strong&gt;".$_SESSION['fullname']."&lt;/strong&gt; would like to share a survey with you.&lt;/p&gt;\n";
$messagecontent .= "&lt;p&gt;If you wish to participate this survey, please click the link provided below.&lt;/p&gt;\n";
$messagecontent .= "&lt;p&gt;Link: ".$link."&lt;/p&gt;\n";
$messagecontent .= "&lt;p&gt;Thanks - ".MYTITLE."&lt;/p&gt;\n";
$messagecontent .= "&lt;p&gt;(Email automatically sent on behalf of ".$_SESSION['fullname'].")&lt;/p&gt;\n";

?>

<h3>Edit the email messages</h3>
<p>You can edit the content of the email regarding to your survey, for both invitation and reminder email, which will be displayed in the respondents' email by using the tools below.</p>

<div class="row">
  <div class="col-sm-6">
    <h4><i class="pe-envelope-o pe-fw"></i> Invitation email</h4>
    <p>The very first email which will be sent to all target respondents to invite them to participate with your survey.</p>
    <form id="target1" method="post" action="<?php echo $me; ?>">
      <div>
        <input type="radio" name="choice-email1" value="system" id="choice-default1"<?php if (isset($email_i) && ($email_i == $defaultemail)) { echo " checked"; } ?>>
        <label for="choice-default1" class="small">Email to be sent by System default</label>
        <div class="reveal-if-active"><input type="email" name="email_iA" value="noreply@siamsquare.org" onclick="this.select()" class="form-control input-sm require-if-active" data-require-pair="#choice-default1" readonly></div>
      </div>
      <div>
        <input type="radio" name="choice-email1" value="custom" id="choice-customised1"<?php if (isset($email_i) && ($email_i != $defaultemail)) { echo " checked"; } ?>>
        <label for="choice-customised1" class="small">Email to be sent by my preferred email address</label>
        <div class="reveal-if-active"><input type="email" name="email_iB" onclick="this.select()" class="form-control input-sm require-if-active" data-require-pair="#choice-customised1" placeholder="Enter a working email"<?php if (isset($email_i) && ($email_i != $defaultemail)) { echo " value=\"$email_i\""; } ?>></div>
      </div>
      <br>
      <script type="text/javascript">tinymce.init({ selector:'#firstemail',
        height: 300, menubar: false, resize: false, statusbar: false,
        plugins: "textcolor, placeholder",
        placeholder_attrs: {
          style: {
            position: 'absolute',
            top:'5px',
            left:0,
            color: '#888',
            padding: '1%',
            width:'98%',
            overflow: 'hidden',
            'white-space': 'pre-wrap'
          }
        },
        toolbar: 'removeformat | styleselect | bold italic | bullist numlist | forecolor backcolor | undo redo'
      });</script>
      <textarea id="firstemail" name="email_i_content" placeholder="<?php echo $default_i; ?>"><?php echo $email_i_content; ?></textarea>
      <br>
      <p align="right">
        <input type="hidden" name="saveme" value="1">
        <button id="btn-save1" type="button" class="btn btn-success" data-loading-text="<i class='pe-circle-o-notch pe-spin'></i> Saving..." data-reset-text="<i class='pe-save'></i> Saved <i class='pe-check-circle-o'></i>">Save <i class="pe-check-circle-o"></i></button>
        <button type="reset" class="btn btn-default">Cancel <i class="pe-times-circle-o"></i></button>
      </p>
    </form>
  </div>
  <div class="col-sm-6">
    <h4><i class="pe-envelope-o pe-fw"></i> Reminder email</h4>
    <p><small>A follow-up email which will be sent <em>only</em> to those who have not participated you survey within a certain period of time.</small></p>
    <form id="target2" method="post" action="<?php echo $me; ?>">
      <div>
        <input type="radio" name="choice-email2" value="system" id="choice-default2"<?php if (isset($email_r) && ($email_r == $defaultemail)) { echo " checked"; } ?>>
        <label for="choice-default2" class="small">Email to be sent by System default</label>
        <div class="reveal-if-active"><input type="email" name="email_rA" value="noreply@siamsquare.org" onclick="this.select()" class="form-control input-sm require-if-active" data-require-pair="#choice-default2" readonly></div>
      </div>
      <div>
        <input type="radio" name="choice-email2" value="custom" id="choice-customised2"<?php if (isset($email_r) && ($email_r != $defaultemail)) { echo " checked"; } ?>>
        <label for="choice-customised2" class="small">Email to be sent by my preferred email address</label>
        <div class="reveal-if-active"><input type="email" name="email_rB" onclick="this.select()" class="form-control input-sm require-if-active" data-require-pair="#choice-customised2" placeholder="Enter a working email"<?php if (isset($email_r) && ($email_r != $defaultemail)) { echo " value=\"$email_r\""; } ?>></div>
      </div>
      <br>
      <script type="text/javascript">tinymce.init({ selector:'#secondemail',
        height: 300, menubar: false, resize: false, statusbar: false,
        plugins: "textcolor, placeholder",
        placeholder_attrs: {
          style: {
            position: 'absolute',
            top:'5px',
            left:0,
            color: '#888',
            padding: '1%',
            width:'98%',
            overflow: 'hidden',
            'white-space': 'pre-wrap',
          }
        },
        toolbar: 'removeformat | styleselect | bold italic | bullist numlist | forecolor backcolor | undo redo'
      });</script>
      <textarea id="secondemail" name="email_r_content" placeholder="<?php echo $default_r; ?>"><?php echo $email_r_content; ?></textarea>
      <br>
      <p align="right">
        <input type="hidden" name="saveme" value="2">
        <button id="btn-save2" type="button" class="btn btn-success" data-loading-text="<i class='pe-circle-o-notch pe-spin'></i> Saving..." data-reset-text="<i class='pe-save'></i> Saved <i class='pe-check-circle-o'></i>">Save <i class="pe-check-circle-o"></i></button>
        <button type="reset" class="btn btn-default">Cancel <i class="pe-times-circle-o"></i></button>
      </p>
    </form>
  </div>
</div>

<hr>

<h3>Promote this survey</h3>
<p>You can, of course, promote this survey by yourself too. And below are some useful tools that can instantly help you promoting this particular survey with the persons you know.</p>
<br>

<div class="row" style="padding:20px">
  <div class="col-sm-12">
    <nav>
      <ul class="nav nav-tabs">
        <li class="active"><a href="#1" data-toggle="tab"><i class="pe-link pe-fw"></i> Direct link</a></li>
        <li><a href="#2" data-toggle="tab"><i class="pe-share-alt pe-fw"></i> Email this link</a></li>
        <li><a href="#3" data-toggle="tab"><i class="pe-code pe-fw"></i> Embed to your website</a></li>
      </ul>
    </nav>
    <div class="tab-content" style="border:1px #ddd solid;border-top-color: transparent;">
      <div id="1" class="tab-pane fade in active" style="padding:20px 10px">
        <h4>Direct link to your survey</h4>
        <label>The code:</label>
        <div class="input-group">
          <span class="input-group-addon">URL:</span>
          <input type="url" class="form-control" value="<?php echo MYHOME.$me; ?>" onclick="this.select()" readonly>
        </div>
        <br>
        <p>You can copy and paste this URL and send it to anyone you would like them to participate with your survey.</p>
      </div>
      <div id="2" class="tab-pane fade" style="padding:20px 10px">
        <h4>Email the survey link</h4>
        <div class="input-group">
          <span class="input-group-addon">To:</span>
          <input type="email" class="form-control" name="sendto" placeholder="Enter a valid email">
        </div>
        <br>
        <label>Message (optional):</label>
        <script type="text/javascript">tinymce.init({ selector:'#messageemail', height: 200, menubar: false, resize: false, statusbar: false, plugins: "textcolor", toolbar: 'removeformat | styleselect | bold italic | bullist numlist | forecolor backcolor | undo redo' });</script>
        <textarea id="messageemail" class="form-control"><?php echo $messagecontent; ?></textarea>
        <br>
        <p class="text-center">
          <button class="btn btn-warning" type="submit">Send <i class="pe-paper-plane"></i></button>
          <button class="btn btn-default" type="reset">Cancel <i class="pe-times-circle-o"></i></button>
        </p>
      </div>
      <div id="3" class="tab-pane fade" style="padding:20px 10px">
        <h4>Embed the survey link to your website</h4>
        <label>The code:</label>
        <input type="url" class="form-control" value='<iframe width="600" height="400" src="<?php echo MEMBERS."?w=run&s=".$_GET['s']; ?>" frameborder="0" allowfullscreen></iframe>' onclick="this.select()" readonly>
        <br>
        <p>By copying this code and pasting it onto one of your webpages (or multiple pages), you will have the survey inserted into your website right away.</p>
        <p>Optionally you can also customise how the survey is inserted to your website by adjusting <em>width</em> and <em>height</em> which is currenyly set at a default of <em>600px</em> and <em>400px</em> respectively.</p>
        <p>Please see below the example of your survey after included into a webpage.</p>
        <iframe width="600" height="400" src="<?php echo MEMBERS."?w=run&s=".$_GET['s']; ?>" frameborder="0" allowfullscreen></iframe>
        <p>Please do not hesitate to <a href="/admin/contact/">contact us</a> if you need any technical supports on this.</p>
      </div>
    </div>
  </div>
</div>

<br>


<script type="text/javascript">
  $('#btn-save1').on('click', function() {
    var $this = $(this);
    $this.button('loading');
    setTimeout(function() { $this.button('reset'); }, 1000);
    setTimeout(function() { $('#target1').submit(); }, 1200);
  });
  $('#btn-save2').on('click', function() {
    var $this = $(this);
    $this.button('loading');
    setTimeout(function() { $this.button('reset'); }, 1000);
    setTimeout(function() { $('#target2').submit(); }, 1200);
  });
  var FormStuff = {
    init: function() {
      this.applyConditionalRequired();
      this.bindUIActions();
    },
    bindUIActions: function() {
      $("input[type='radio'], input[type='checkbox']").on("change", this.applyConditionalRequired);
    },
    applyConditionalRequired: function() {
      $(".require-if-active").each(function() {
        var el = $(this);
        if ($(el.data("require-pair")).is(":checked")) { el.prop("required", true); }
        else { el.prop("required", false); }
      });
    }
  };
  FormStuff.init();

</script>

<style media="screen">
  .reveal-if-active {
    opacity: 0;
    max-height: 0;
    overflow: hidden;
    font-size: 16px;
    transform: scale(0.8);
    transition: 0.5s;
    -webkit-transform: scale(0.8);
    -webkit-transition: 0.5s;
  }
  .reveal-if-active label {
    display: block;
    margin: 0 0 3px 0;
  }
  .reveal-if-active input[type=text] {
    width: 100%;
  }
  input[type="radio"]:checked ~ .reveal-if-active, input[type="checkbox"]:checked ~ .reveal-if-active {
    opacity: 1;
    max-height: 100px;
    padding: 10px 20px;
    transform: scale(1);
    -webkit-transform: scale(1);
    overflow: visible;
  }
</style>

<br>

<a href="/admin/?w=surveys" class="btn btn-danger btn-sm pull-right" style="margin-top:50px; margin-bottom: 20px"><i class="pe-chevron-circle-left pe-fw"></i> Back to the main page</a>

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
