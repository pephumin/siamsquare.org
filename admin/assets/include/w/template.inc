<?php

$defaultemail = EMAILNOREPLY; // "noreply@siamsquare.org";
$me = "/admin/?w=template&s=".$_GET['s'];
$run = "/r.php?s=".$_GET['s'];

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
  // exit;
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
  // exit;
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

$link = htmlspecialchars("<u>".MYHOME.$run."</u>");
$messagecontent = "&lt;p&gt;Hi there,&lt;/p&gt;\n";
$messagecontent .= "&lt;p&gt;&lt;strong&gt;".$_SESSION['fullname']."&lt;/strong&gt; would like to share a survey with you.&lt;/p&gt;\n";
$messagecontent .= "&lt;p&gt;If you wish to participate this survey, please click the link provided below.&lt;/p&gt;\n";
$messagecontent .= "&lt;p&gt;Link: ".$link."&lt;/p&gt;\n";
$messagecontent .= "&lt;p&gt;Thanks&lt;/p&gt;\n";
$messagecontent .= "&lt;p&gt;Email automatically sent by ".MYHOME."&lt;/p&gt;\n";

?>

<h3>Edit the email messages</h3>
<p>You can edit the content of the email regarding to your survey, for both invitation and reminder email, which will be displayed in the respondents' email by using the tools below.</p>

<div class="row">
  <div class="col-sm-6">
    <h4><i class="pe-envelope-o pe-fw"></i> Invitation email</h4>
    <p><small>This message will be displayed in the invitation email which will be sent to all target respondents.</small></p>
    <form id="target1" method="post" action="<?php echo $me; ?>">
      <div>
        <input type="radio" name="choice-email1" value="system" id="choice-default1"<?php if (isset($email_i) && ($email_i == $defaultemail)) { echo " checked"; } ?>>
        <label for="choice-default1" class="small">Email to be sent by System default</label>
        <div class="reveal-if-active"><input type="email" name="email_iA" value="<?php echo $defaultemail; ?>" onclick="this.select()" class="form-control input-sm require-if-active" data-require-pair="#choice-default1" readonly></div>
      </div>
      <div>
        <input type="radio" name="choice-email1" value="custom" id="choice-customised1"<?php if (isset($email_i) && ($email_i != $defaultemail)) { echo " checked"; } ?>>
        <label for="choice-customised1" class="small">Email to be sent by my preferred email address</label>
        <div class="reveal-if-active"><input type="email" name="email_iB" onclick="this.select()" class="form-control input-sm require-if-active" data-require-pair="#choice-customised1" placeholder="Enter a working email"<?php if (isset($email_i) && ($email_i != $defaultemail)) { echo " value=\"$email_i\""; } ?>></div>
      </div>
      <br>
      <script type="text/javascript">
        tinymce.init({ selector:'#firstemail',
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
        });
        // onchange_callback : function(ed){
        //   var tinymce_placeholder = $('#' + ed.id).attr("placeholder");
        //   setTimeout(function () {
        //     var content = ed.getContent().replace(/<p>|<\/p>/g, '');
        //     if (content == '') { ed.setContent(tinymce_placeholder); }
        //   }, 200);
        // },
        // setup: function (ed) {
        //   var tinymce_placeholder = $('#' + ed.id);
        //   if (tinymce_placeholder.length) {
        //     ed.onInit.add(function (ed) {
        //       var cont = ed.getContent();
        //       if (cont.length == 0) { ed.setContent(tinymce_placeholder.attr("placeholder")); }
        //     });
        //     ed.onMouseDown.add(function (ed, e) {
        //       var content = ed.getContent().replace(/<p>|<\/p>/g, '');
        //       if (content == tinymce_placeholder.attr("placeholder")) { ed.setContent(''); }
        //     });
        //   }
        // }
      </script>
      <!-- <textarea id="firstemail" name="email_i_content" placeholder="<?php echo $default_i; ?>"><?php echo $email_i_content; ?></textarea> -->
      <textarea id="firstemail" name="email_i_content"><?php echo $email_i_content; ?></textarea>
      <br>
      <p align="right">
        <input type="hidden" name="saveme" value="1">
        <button id="btn-save1" type="button" class="btn btn-sm btn-warning" data-loading-text="<i class='pe-circle-o-notch pe-spin'></i> Saving..." data-reset-text="<i class='pe-save'></i> Saved <i class='pe-check-circle-o'></i>">Save <i class="pe-check-circle-o"></i></button>
        <button type="reset" class="btn btn-sm btn-default">Cancel <i class="pe-times-circle-o"></i></button>
      </p>
    </form>
  </div>
  <div class="col-sm-6">
    <h4><i class="pe-envelope-o pe-fw"></i> Reminder email</h4>
    <p><small>This is a content for the following-up email which will be sent <em>only</em> to those who still have not participated the survey from the first invitation.</small></p>
    <form id="target2" method="post" action="<?php echo $me; ?>">
      <div>
        <input type="radio" name="choice-email2" value="system" id="choice-default2"<?php if (isset($email_r) && ($email_r == $defaultemail)) { echo " checked"; } ?>>
        <label for="choice-default2" class="small">Email to be sent by System default</label>
        <div class="reveal-if-active"><input type="email" name="email_rA" value="<?php echo $defaultemail; ?>" onclick="this.select()" class="form-control input-sm require-if-active" data-require-pair="#choice-default2" readonly></div>
      </div>
      <div>
        <input type="radio" name="choice-email2" value="custom" id="choice-customised2"<?php if (isset($email_r) && ($email_r != $defaultemail)) { echo " checked"; } ?>>
        <label for="choice-customised2" class="small">Email to be sent by my preferred email address</label>
        <div class="reveal-if-active"><input type="email" name="email_rB" onclick="this.select()" class="form-control input-sm require-if-active" data-require-pair="#choice-customised2" placeholder="Enter a working email"<?php if (isset($email_r) && ($email_r != $defaultemail)) { echo " value=\"$email_r\""; } ?>></div>
      </div>
      <br>
      <script type="text/javascript">
        tinymce.init({ selector:'#secondemail',
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
        });
      </script>
      <!-- <textarea id="secondemail" name="email_r_content" placeholder="<?php echo $default_r; ?>"><?php echo $email_r_content; ?></textarea> -->
      <textarea id="secondemail" name="email_r_content"><?php echo $email_r_content; ?></textarea>
      <br>
      <p align="right">
        <input type="hidden" name="saveme" value="2">
        <button id="btn-save2" type="button" class="btn btn-sm btn-warning" data-loading-text="<i class='pe-circle-o-notch pe-spin'></i> Saving..." data-reset-text="<i class='pe-save'></i> Saved <i class='pe-check-circle-o'></i>">Save <i class="pe-check-circle-o"></i></button>
        <button type="reset" class="btn btn-sm btn-default">Cancel <i class="pe-times-circle-o"></i></button>
      </p>
    </form>
  </div>
</div>

<hr>

<!-- <h3>Edit the survey messages</h3>
<p>There are two <em>optional</em> messages you can choose to include in the survey. <span class="red">Only use them when there is really an important message to include because a longer survey would typically mean a lower participation rate.</span></p>

<div class="row">
  <div class="col-sm-6">
    <h4><i class="pe-bullhorn pe-fw"></i> Welcome message</h4>
    <p><small>This message will be displayed at the beginning of the survey before starting the actual survey.</small></p>
    <form id="target3" method="post" action="<?php echo $me; ?>">
      <div><label for="choice-customised1" class="small"><input type="checkbox" id="welcome-message"> Enable this option</label></div>
      <br>
      <script type="text/javascript">
        tinymce.init({ selector:'#firstsurvey',
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
        });
      </script>
      <textarea id="firstsurvey" name="email_i_content"><?php echo $email_i_content; ?></textarea>
      <br>
      <p align="right">
        <input type="hidden" name="saveme" value="1">
        <button id="btn-save3" type="button" class="btn btn-sm btn-warning" data-loading-text="<i class='pe-circle-o-notch pe-spin'></i> Saving..." data-reset-text="<i class='pe-save'></i> Saved <i class='pe-check-circle-o'></i>">Save <i class="pe-check-circle-o"></i></button>
        <button type="reset" class="btn btn-sm btn-default">Cancel <i class="pe-times-circle-o"></i></button>
      </p>
    </form>
  </div>
  <div class="col-sm-6">
    <h4><i class="pe-bullhorn pe-fw"></i> End (thank you) message</h4>
    <p><small>This message will be displayed at the end <em>only</em> when a respondent has completed the survey successfully.</small></p>
    <form id="target4" method="post" action="<?php echo $me; ?>">
      <div>
        <input type="checkbox" name="end-message" value="custom" id="choice-customised2"<?php if (isset($email_r) && ($email_r != $defaultemail)) { echo " checked"; } ?>>
        <label for="choice-customised2" class="small">Enable this option</label>
      </div>
      <br>
      <script type="text/javascript">
        tinymce.init({ selector:'#secondsurvey',
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
        });
      </script>
      <textarea id="secondsurvey" name="email_r_content"><?php echo $email_r_content; ?></textarea>
      <br>
      <p align="right">
        <input type="hidden" name="saveme" value="2">
        <button id="btn-save4" type="button" class="btn btn-sm btn-warning" data-loading-text="<i class='pe-circle-o-notch pe-spin'></i> Saving..." data-reset-text="<i class='pe-save'></i> Saved <i class='pe-check-circle-o'></i>">Save <i class="pe-check-circle-o"></i></button>
        <button type="reset" class="btn btn-sm btn-default">Cancel <i class="pe-times-circle-o"></i></button>
      </p>
    </form>
  </div>
</div> -->


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

<br>

<?php backButton("/admin/?w=surveys", "Back to the main page", "danger"); ?>

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
