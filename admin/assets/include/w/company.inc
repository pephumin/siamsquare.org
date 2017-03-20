<?php

if ($_SESSION['level'] < "6") {
  $title = "An error has been found";
  pageHeader($title);
  echo "<h2>No access</h2>\n";
  echo "<p>This page can be accessed by Manager only.</p>\n";
  echo "<p>In fat we strongly suggest you should stop accessing by manually enter the URL as we consider this to be a violent action and our system has already recorded this error including your identity and timestamp.</p>\n";
  echo "<p>You should instead use the client dashboard which will never lead you to a wrong link or any errors like this at all.</p>\n";
  echo mkerror("Your level is not high enough to access this page.");
  pageFooter();
  $q1 = $db->prepare("INSERT INTO j_users_logs (userid, ip, data, critical) VALUE (:userid, :ip, '" . $_SESSION["email"] . " tried acccessing a company page manually', '5')");
  $q1->bindValue(':userid', $_SESSION["userid"], PDO::PARAM_INT);
  $q1->bindValue(':ip', $_SESSION["ip"], PDO::PARAM_INT);
  $q1->execute();
  exit;
}

$me = "/admin/?w=company";

// Get company info
$q1 = $db->prepare("SELECT * FROM j_companies WHERE id = :companyid");
$q1->bindValue(':companyid', $_SESSION["companyid"], PDO::PARAM_INT);
$q1->execute();
while ($row = $q1->fetchObject()) {
  $name = $row->company;
  $fullname = $row->fullname;
  $address = $row->address;
  $description = $row->description;
  $logo = $row->logo;
  $website = $row->website;
  $email = $row->email;
  $telephone = $row->telephone;
  $fax = $row->fax;
  $created = ago($row->created);
  $updated = ago($row->updated);
}

if (isset($_POST['uploadsubmit'])) {
  $uploadfile = $_FILES["uploadfile"]["tmp_name"];
  $folder = "assets/img/tmp/";
  move_uploaded_file($_FILES["uploadfile"]["tmp_name"], $folder.$_FILES["uploadfile"]["name"]);
  echo '<img id="uploadlogo" src="'.$folder."".$_FILES["uploadfile"]["name"].'">';
  exit;
}

if ($_POST['savethislogo'] == 1) {
  $fullsource = parse_url($_POST['filetosave'], PHP_URL_PATH);
  $source = str_replace("/admin/", "", $fullsource);
  $ext = substr($source, -3);
  $today = date("Ymd");
  $random = generateRandomString();
  $target = "assets/img/c/".$_SESSION["companyid"]."_".$today."_".$random.".".$ext;
  $R = new resize($source);
  $R->resizeImage(135, 135, 'auto');
  $R->saveImage($target, 80);
  unlink($source);
  $q2A = $db->prepare("UPDATE j_companies SET logo = :logo WHERE id = :id");
  $q2A->bindValue(':logo', $target, PDO::PARAM_STR);
  $q2A->bindValue(':id', $_SESSION["companyid"], PDO::PARAM_INT);
  $q2A->execute();
  $redirect = $me."&m=1";
  header("location: $redirect");
  exit;
}

if ($_POST['savethisinfo'] == 1) {
  if ((empty($_POST['fullname'])) || (empty($_POST['description'])) || (empty($_POST['address'])) || (empty($_POST['website']))) {
    $redirect = $me."&m=3";
    header("location: $redirect");
    exit;
  } else {
    $add = ""; $move = 0;
    if ($_POST['fullname'] != $fullname) { $add .= "fullname = :fullname, "; $move = 1; }
    if ($_POST['description'] != $description) { $add .= "description = :description, "; $move = 1; }
    if ($_POST['address'] != $address) { $add .= "address = :address, "; $move = 1; }
    if ($_POST['website'] != $website) { $add .= "website = :website, "; $move = 1; }
    if ($_POST['email'] != $email) { $add .= "email = :email, "; $move = 1; }
    if ($_POST['telephone'] != $telephone) { $add .= "telephone = :telephone, "; $move = 1; }
    if ($_POST['fax'] != $fax) { $add .= "fax = :fax, "; $move = 1; }
    $add = substr_replace($add, '', -2);
    if ($move == 0) {
      $redirect = $me."&m=4";
      header("location: $redirect");
      exit;
    } else {
      $q2B = $db->prepare("UPDATE j_companies SET ".$add." WHERE id = :companyid");
      if ($_POST['fullname'] != $fullname) { $q2B->bindValue(':fullname', $_POST['fullname'], PDO::PARAM_STR); }
      if ($_POST['description'] != $description) { $q2B->bindValue(':description', $_POST['description'], PDO::PARAM_STR); }
      if ($_POST['address'] != $address) { $q2B->bindValue(':address', $_POST['address'], PDO::PARAM_STR); }
      if ($_POST['website'] != $website) { $q2B->bindValue(':website', $_POST['website'], PDO::PARAM_STR); }
      if ($_POST['email'] != $email) { $q2B->bindValue(':email', $_POST['email'], PDO::PARAM_STR); }
      if ($_POST['telephone'] != $telephone) { $q2B->bindValue(':telephone', $_POST['telephone'], PDO::PARAM_STR); }
      if ($_POST['fax'] != $fax) { $q2B->bindValue(':fax', $_POST['fax'], PDO::PARAM_STR); }
      $q2B->bindValue(':companyid', $_SESSION["companyid"], PDO::PARAM_INT);
      $q2B->execute();
      $redirect = $me."&m=2";
      header("location: $redirect");
      exit;
    }
  }
}


$title = "The company";
pageHeader($title);
echo "<h2>$title</h2>\n";
echo "<p>This page can only be accessed by Manager who can make necessary changes to the company information.</p>\n";
echo "<p>Please think of this page as a <strong>vendor registration form</strong> as we will take some information from this page to use in our paperwork such as billing/ invoicing. Normally our clients will correct set this information once and forget this page.</p>\n";
echo "<br>\n";

if ($_GET['m'] == "1") { $message = mksuccess("You have successfully uploaded and replaced the company's logo."); echo "<p>$message</p>\n"; }
else if ($_GET['m'] == "2") { $message = mksuccess("You have successfully updated the company's information."); echo "<p>$message</p>\n"; }
else if ($_GET['m'] == "3") { $message = mkerror("All required fields cannot be blank, please fix and try again."); echo "<p>$message</p>\n"; }
else if ($_GET['m'] == "4") { $message = mkerror("No changes detected. So no change has been made."); echo "<p>$message</p>\n"; }
else { echo "<p></p>\n"; }

if ($logo) {
  if ($website) { $clientlogo = "<a href=\"$website\" title=\"$fullname\" target=\"_blank\"><img src=\"$logo\" alt=\"$fullname\" title=\"$fullname\"></a>"; }
  else { $clientlogo = "<img src=\"$logo\" alt=\"$fullname\" title=\"$fullname\">"; }
} else { $clientlogo = ""; }

?>

<form action="<?php echo $me; ?>" method="post">
  <div class="row">
    <div class="col-sm-9">
      <p>
        <label for="fullname">Company</label> <span class="label label-red">required</span>
        <input type="text" class="form-control" name="fullname" placeholder="Company full name"<?php if ($fullname) { echo " value=\"$fullname\""; } ?>>
        <span class="text-muted small"><small>Enter the company full name from the official company registration</small></span>
      </p>
      <p>
        <label for="description">Short description</label> <span class="label label-red">required</span>
        <textarea class="form-control" row="5" name="description" placeholder="A short description about your company which may be shown in the survey page as a credential." style="height:100px"><?php if ($description) { echo $description; } ?></textarea>
        <span class="text-muted small"><small>Please write a short description in Thai that briefly describes about the company with details on product/service offerred</small></span>
      </p>
    </div>
    <div class="col-sm-3" style="text-align:right">
      <p></p>
      <div><?php echo $clientlogo; ?></div>
      <p class="small" style="margin-top:20px"><small>[ <i class="pe-upload pe-fw"></i> <a data-toggle="modal" data-target="#upload" style="cursor:pointer">Upload a new logo</a> ]</small></p>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-6">
      <p>
        <label for="address">Billing address</label> <span class="label label-red">required</span>
        <textarea class="form-control" row="5" name="address" style="height:135px" placeholder="Please enter the full address of the company broken down into multiple lines"><?php if ($address) { echo $address; } ?></textarea>
        <span class="text-muted small"><small>This will be used for all paperworks such as billing, invoicing, etc.</small></span>
      </p>
      <p>
        <label for="website">Website</label> <span class="label label-blue">optional</span>
        <span class="input-group">
          <span class="input-group-addon"><i class="pe-globe pe-fw"></i></span>
          <input type="text" class="form-control" name="website" onclick="this.select()" placeholder="http://www.companywebsite.com"<?php if ($website) { echo " value=\"$website\""; } ?>>
        </span>
        <span class="text-muted small"><small>The company website which can optionally be set to display in the survey</small></span>
      </p>
    </div>
    <div class="col-sm-6">
      <p>
        <label for="email">Email contact</label> <span class="label label-blue">optional</span>
        <span class="input-group">
          <span class="input-group-addon"><i class="pe-envelope pe-fw"></i></span>
          <input type="email" class="form-control" name="email" onclick="this.select()" placeholder="email@company.com"<?php if ($email) { echo " value=\"$email\""; } ?>>
        </span>
        <span class="text-muted small"><small>This should be a generic email contact rather than specific to a person</small></span>
      </p>
      <p>
        <label for="telephone">Telephone</label> <span class="label label-blue">optional</span><br>
        <!-- <span class="text-muted small">Please use this format: +662 xxxxxxx or +6681 xxxxxxx</span> -->
        <span class="input-group">
          <span class="input-group-addon"><i class="pe-phone pe-fw"></i></span>
          <input type="text" class="form-control" name="telephone" onclick="this.select()" placeholder="+662 3335555"<?php if ($telephone) { echo " value=\"$telephone\""; } ?>>
        </span>
        <span class="text-muted small"><small>The main telephone contact for the company following this format: +662 xxxxxxx</small></span>
      </p>
      <p>
        <label for="fax">Fax</label> <span class="label label-blue">optional</span><br>
        <!-- <span class="text-muted small">Please use this format: +662 xxxxxxx</span> -->
        <span class="input-group">
          <span class="input-group-addon"><i class="pe-fax pe-fw"></i></span>
          <input type="text" class="form-control" name="fax" onclick="this.select()" placeholder="+662 3334444"<?php if ($fax) { echo " value=\"$fax\""; } ?>>
        </span>
        <span class="text-muted small"><small>An optional fax number for the company following the same format as telephone</small></span>
      </p>
    </div>
  </div>
  <br>
  <p class="text-center">
    <input type="hidden" name="savethisinfo" value="1">
    <button type="submit" class="btn btn-warning">Save <i class="pe-check-circle-o"></i></button>
    <button type="reset" class="btn btn-default">Cancel <i class="pe-times-circle-o"></i></button>
  </p>
</form>

<p class="small grey">Registered: <?php echo $created; ?><br>Last updated: <?php echo $updated; ?></p>

<div class="modal fade" id="upload" tabindex="-1" role="dialog" aria-labelledby="upload">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title">Change the company logo</h4>
      </div>
      <div class="modal-body">
        <form action="<?php echo $me; ?>" id="uploadform" method="post" enctype="multipart/form-data">
          <p>You can upload a new logo below. Our system will resize your logo to suit the display automatically.</p>
          <label class="btn btn-default">Browse<input type="file" id="uploadfile" name="uploadfile" style="display:none" onchange="$('#upload-file-info').html($(this).val()); $('#uploadsubmit').removeAttr('disabled');"></label>
          <kbd id="upload-file-info">Please select an image file for your logo</kbd><br>
          <p style="margin-top:20px"><input type="submit" id="uploadsubmit" class="btn btn-primary" name='uploadsubmit' value="Upload this file" onclick='uploadlogo();' disabled></p>
          <div class="progress" id="uploadprogress" style="display:none"><div class="progress-bar progress-bar-info progress-bar-striped" id="bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"><span id="percent">0%</span></div></div>
          <br>
          <div id="uploadoutput"></div>
        </form>
      </div>
      <div class="modal-footer">
        <form action="<?php echo $me; ?>" id="saveupload" method="post" enctype="multipart/form-data">
          <input type="hidden" name="savethislogo" value="1">
          <input type="hidden" name="filetosave" id="savefile">
          <button id="savenewlogo" type="button" class="btn btn-warning" data-loading-text="<i class='pe-circle-o-notch pe-spin'></i> Saving..." data-reset-text="<i class='pe-save'></i> Saved <i class='pe-check-circle-o'></i>">Save <i class="pe-check-circle-o"></i></button>
          <button type="reset" class="btn btn-default" data-dismiss="modal">Cancel <i class="pe-times-circle-o"></i></button>
        </form>
      </div>
    </div>
  </div>
</div>

<script type="text/javascript">
  function uploadlogo() {
    var bar = $('#bar');
    var percent = $('#percent');
    $('#uploadform').ajaxForm({
      beforeSubmit: function() {
        document.getElementById("uploadprogress").style.display = "block";
        var percentVal = '0%';
        bar.width(percentVal);
        bar.attr("aria-valuenow", 0);
        percent.html(percentVal);
      },
      uploadProgress: function(event, position, total, percentComplete) {
        var percentVal = percentComplete + '%';
        bar.width(percentVal);
        bar.attr("aria-valuenow", percentComplete);
        percent.html(percentVal);
      },
    	success: function() {
        var percentVal = '100%';
        bar.width(percentVal);
        bar.attr("aria-valuenow", 100);
        percent.html(percentVal);
      },
      complete: function(xhr) {
        if (xhr.responseText != null) {
          document.getElementById("uploadoutput").innerHTML = xhr.responseText;
          var img = document.getElementById("uploadlogo").src;
          document.getElementById("savefile").setAttribute("value", img);
          window.setTimeout(function () { document.getElementById("uploadprogress").style.display = "none"; }, 1000);
        }
      }
    });
  }
  $('#savenewlogo').on('click', function() {
    var $this = $(this);
    $this.button('loading');
    setTimeout(function() { $this.button('reset'); }, 1000);
    setTimeout(function() { $('#saveupload').submit(); }, 1200);
  });
</script>

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
