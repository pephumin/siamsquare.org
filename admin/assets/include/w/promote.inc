<?php

$defaultemail = EMAILNOREPLY; // "noreply@siamsquare.org";
$me = "/admin/?w=promote&s=".$_GET['s'];
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

$title = "Promote your survey";
pageHeader($title);
echo "<h2>$title</h2>";
echo "<p>You can, of course, promote this survey by yourself too. And below are some useful tools that can instantly help you promoting this particular survey with the persons you know.</p>\n";
echo "<br>\n";

$link = htmlspecialchars("<u>".MYHOME.$run."</u>");
$messagecontent = "&lt;p&gt;Hi there,&lt;/p&gt;\n";
$messagecontent .= "&lt;p&gt;&lt;strong&gt;".$_SESSION['fullname']."&lt;/strong&gt; would like to share a survey with you.&lt;/p&gt;\n";
$messagecontent .= "&lt;p&gt;If you wish to participate this survey, please click the link provided below.&lt;/p&gt;\n";
$messagecontent .= "&lt;p&gt;Link: ".$link."&lt;/p&gt;\n";
$messagecontent .= "&lt;p&gt;Thanks&lt;/p&gt;\n";
$messagecontent .= "&lt;p&gt;Email automatically sent by ".MYHOME."&lt;/p&gt;\n";

?>

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
          <input type="url" class="form-control" value="<?php echo MYHOME.$run; ?>" onclick="this.select()" readonly>
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
        <script type="text/javascript">
          tinymce.init({
            selector:'#messageemail',
            height: 200,
            menubar: false,
            resize: false,
            statusbar: false,
            plugins: "textcolor",
            toolbar: 'removeformat | styleselect | bold italic | bullist numlist | forecolor backcolor | undo redo'
          });
        </script>
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
        <input type="url" class="form-control" value='<iframe width="600" height="400" src="<?php echo MYHOME.$run; ?>" frameborder="0" allowfullscreen></iframe>' onclick="this.select()" readonly>
        <br>
        <p>By copying this code and pasting it onto one of your webpages (or multiple pages), you will have the survey inserted into your website right away.</p>
        <p>Optionally you can also customise how the survey is inserted to your website by adjusting <em>width</em> and <em>height</em> which is currenyly set at a default of <em>600px</em> and <em>400px</em> respectively.</p>
        <p>Please see below the example of your survey after included into a webpage.</p>
        <iframe width="600" height="400" src="<?php echo MYHOME.$run; ?>" frameborder="0" allowfullscreen></iframe>
        <p>Please do not hesitate to <a href="/admin/contact/">contact us</a> if you need any technical supports on this.</p>
      </div>
    </div>
  </div>
</div>

<br>

<?php backButton("/admin/?w=surveys", "Back to the main page", "danger"); ?>

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
