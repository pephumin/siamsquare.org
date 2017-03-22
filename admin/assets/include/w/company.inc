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
  $fullname_th = $row->fullname_th;
  $address = $row->address;
  $address_th = $row->address_th;
  $description = $row->description;
  $description_th = $row->description_th;
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
  $ql1 = $db->prepare("INSERT INTO j_users_logs (userid, ip, data, critical) VALUE (:userid, :ip, '".$_SESSION['email']." changed the company logo for $name', '3')");
  $ql1->bindValue(':userid', $_SESSION['userid'], PDO::PARAM_INT);
  $ql1->bindValue(':ip', $_SESSION['ip'], PDO::PARAM_STR);
  $ql1->execute();
  $redirect = $me."&m=1";
  header("location: $redirect");
  exit;
}

if ($_POST['savethisinfo'] == 1) {
  if ((empty($_POST['fullname'])) || (empty($_POST['fullname_th'])) || (empty($_POST['description'])) || (empty($_POST['description_th'])) || (empty($_POST['address'])) || (empty($_POST['website']))) {
    $redirect = $me."&m=3";
    header("location: $redirect");
    exit;
  } else {
    $add = ""; $move = 0;
    if ($_POST['fullname'] != $fullname) { $add .= "fullname = :fullname, "; $move = 1; }
    if ($_POST['fullname_th'] != $fullname_th) { $add .= "fullname_th = :fullname_th, "; $move = 1; }
    if ($_POST['description'] != $description) { $add .= "description = :description, "; $move = 1; }
    if ($_POST['description_th'] != $description_th) { $add .= "description_th = :description_th, "; $move = 1; }
    if ($_POST['address'] != $address) { $add .= "address = :address, "; $move = 1; }
    if ($_POST['address_th'] != $address_th) { $add .= "address_th = :address_th, "; $move = 1; }
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
      if ($_POST['fullname_th'] != $fullname_th) { $q2B->bindValue(':fullname_th', $_POST['fullname_th'], PDO::PARAM_STR); }
      if ($_POST['description'] != $description) { $q2B->bindValue(':description', $_POST['description'], PDO::PARAM_STR); }
      if ($_POST['description_th'] != $description_th) { $q2B->bindValue(':description_th', $_POST['description_th'], PDO::PARAM_STR); }
      if ($_POST['address'] != $address) { $q2B->bindValue(':address', $_POST['address'], PDO::PARAM_STR); }
      if ($_POST['address_th'] != $address_th) { $q2B->bindValue(':address_th', $_POST['address_th'], PDO::PARAM_STR); }
      if ($_POST['website'] != $website) { $q2B->bindValue(':website', $_POST['website'], PDO::PARAM_STR); }
      if ($_POST['email'] != $email) { $q2B->bindValue(':email', $_POST['email'], PDO::PARAM_STR); }
      if ($_POST['telephone'] != $telephone) { $q2B->bindValue(':telephone', $_POST['telephone'], PDO::PARAM_STR); }
      if ($_POST['fax'] != $fax) { $q2B->bindValue(':fax', $_POST['fax'], PDO::PARAM_STR); }
      $q2B->bindValue(':companyid', $_SESSION["companyid"], PDO::PARAM_INT);
      $q2B->execute();
      $ql2 = $db->prepare("INSERT INTO j_users_logs (userid, ip, data, critical) VALUE (:userid, :ip, '".$_SESSION['email']." edited the company info for $name', '3')");
      $ql2->bindValue(':userid', $_SESSION['userid'], PDO::PARAM_INT);
      $ql2->bindValue(':ip', $_SESSION['ip'], PDO::PARAM_STR);
      $ql2->execute();
      $redirect = $me."&m=2";
      header("location: $redirect");
      exit;
    }
  }
}

if ($_GET['removelogo'] == "✓") {
  $q2C = $db->prepare("UPDATE j_companies SET logo = NULL WHERE id = :companyid");
  $q2C->bindValue(':companyid', $_SESSION["companyid"], PDO::PARAM_INT);
  $q2C->execute();
  $filetoremove = $_SERVER['DOCUMENT_ROOT'].'/admin/'.$logo;
  unlink($filetoremove);
  $ql3 = $db->prepare("INSERT INTO j_users_logs (userid, ip, data, critical) VALUE (:userid, :ip, '".$_SESSION['email']." removed the company logo for $name', '3')");
  $ql3->bindValue(':userid', $_SESSION['userid'], PDO::PARAM_INT);
  $ql3->bindValue(':ip', $_SESSION['ip'], PDO::PARAM_STR);
  $ql3->execute();
  $redirect = $me."&m=5";
  header("location: $redirect");
  exit;
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
else if ($_GET['m'] == "4") { $message = mkinfo("No changes detected. So no change has been made."); echo "<p>$message</p>\n"; }
else if ($_GET['m'] == "5") { $message = mkwarn("You have removed the company logo. Please upload a new one now."); echo "<p>$message</p>\n"; }
else { echo "<p></p>\n"; }

if ($logo) {
  if ($website) { $clientlogo = "<a href=\"$website\" title=\"$fullname\" target=\"_blank\"><img src=\"$logo\" alt=\"$fullname\" title=\"$fullname\"></a>"; }
  else { $clientlogo = "<img src=\"$logo\" alt=\"$fullname\" title=\"$fullname\">"; }
} else { $clientlogo = "<img src=\"http://placehold.it/135x135\">"; }

?>

<form id="companyupdate" action="<?php echo $me; ?>" method="post">
  <div class="row">
    <div class="col-xs-12 col-sm-9 col-md-9 col-lg-9">
      <p>
        <label>Company name in English</label> <span class="label label-red">required</span>
        <span class="input-group">
          <span class="input-group-addon">EN</span>
          <input type="text" class="form-control" name="fullname" onclick="this.select()" placeholder="Company name in full"<?php if ($fullname) { echo " value=\"$fullname\""; } ?>>
        </span>
        <span class="text-muted small"><small>The full company name in English based on official company registration</small></span>
      </p>
      <p>
        <label>Company name in Thai</label> <span class="label label-red">required</span>
        <span class="input-group">
          <span class="input-group-addon">TH</span>
          <input type="text" class="form-control" name="fullname_th" onclick="this.select()" style="font-family:'boon'; font-size:1.1rem; color:black" placeholder="ชื่ออย่างเป็นทางการของบริษัท"<?php if ($fullname_th) { echo " value=\"$fullname_th\""; } ?>>
        </span>
        <span class="text-muted small"><small>The full company name in Thai based on official company registration</small></span>
      </p>
    </div>
    <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3" style="text-align:right">
      <p></p>
      <div><?php echo $clientlogo; ?></div>
      <p class="small" style="margin-top:20px"><small>[ <i class="pe-upload pe-fw"></i> <a data-toggle="modal" data-target="#upload" style="cursor:pointer">Upload</a> : <i class="pe-remove pe-fw"></i> <a href="<?php echo $me; ?>&amp;removelogo=✓">Remove</a> ]</small></p>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
      <p>
        <label>Description in English</label> <span class="label label-red">required</span>
        <textarea class="form-control" row="5" name="description" onclick="this.select()" style="height:120px" placeholder="A few sentences describing some key outstanding points of the company" style="height:100px"><?php if ($description) { echo $description; } ?></textarea>
        <span class="text-muted small"><small>A brief detail in English such as products &amp; services or outstanding aspects.</small></span>
      </p>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
      <p>
        <label>Description in Thai</label> <span class="label label-red">required</span>
        <textarea class="form-control" row="5" name="description_th" onclick="this.select()" style="font-family:'boon'; font-size:1.1rem; color:black; height:120px" placeholder="สองสามประโยคสั่นๆที่อธิบายได้ดีถึงบริษัท หรือจุดเด่นในมุมต่างๆของบริษัท" style="height:100px"><?php if ($description_th) { echo $description_th; } ?></textarea>
        <span class="text-muted small"><small>A brief detail in Thai such as products &amp; services or outstanding aspects.</small></span>
      </p>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
      <p>
        <label>Billing address in English</label> <span class="label label-red">required</span>
        <textarea class="form-control" row="5" name="address" onclick="this.select()" style="height:135px" placeholder="Please enter the full address of the company broken down into multiple lines"><?php if ($address) { echo $address; } ?></textarea>
        <span class="text-muted small"><small>This will be used for all paperworks such as billing, invoicing, etc.</small></span>
      </p>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
      <p>
        <label>Billing address in Thai</label> <span class="label label-blue">optional</span>
        <textarea class="form-control" row="5" name="address_th" onclick="this.select()" style="font-family:'boon'; font-size:1.1rem; color:black; height:135px" placeholder="ที่อยู่บริษัทเป็นภาษาไทยอย่างเต็มรูปแบบ สามารถบันทึกได้หลายบรรทัด"><?php if ($address_th) { echo $address_th; } ?></textarea>
        <span class="text-muted small"><small class="orange"><strong>Only for client based in Thailand, others please skip this.</strong></small></span>
      </p>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
      <p>
        <label>Email contact</label> <span class="label label-blue">optional</span>
        <span class="input-group">
          <span class="input-group-addon"><i class="pe-envelope pe-fw"></i></span>
          <input type="email" class="form-control" name="email" onclick="this.select()" placeholder="email@company.com"<?php if ($email) { echo " value=\"$email\""; } ?>>
        </span>
        <span class="text-muted small"><small>This should be a generic email contact rather than specific to a person</small></span>
      </p>
      <p>
        <label>Website</label> <span class="label label-blue">optional</span>
        <span class="input-group">
          <span class="input-group-addon"><i class="pe-globe pe-fw"></i></span>
          <input type="text" class="form-control" name="website" onclick="this.select()" placeholder="http://www.companywebsite.com"<?php if ($website) { echo " value=\"$website\""; } ?>>
        </span>
        <span class="text-muted small"><small>The company website which can optionally be set to display in the survey</small></span>
      </p>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
      <p>
        <label>Telephone</label> <span class="label label-blue">optional</span><br>
        <span class="input-group">
          <span class="input-group-addon"><i class="pe-phone pe-fw"></i></span>
          <input type="text" class="form-control" name="telephone" onclick="this.select()" placeholder="+662 3335555"<?php if ($telephone) { echo " value=\"$telephone\""; } ?>>
        </span>
        <span class="text-muted small"><small>The main telephone contact for the company following this format: +662 xxxxxxx</small></span>
      </p>
      <p>
        <label>Fax</label> <span class="label label-blue">optional</span><br>
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
          <p>You can upload a new logo below. No need to worry about the logo size as our system will resize your logo automatically to suit the display.</p>
          <label class="btn btn-default">Browse<input type="file" id="uploadfile" name="uploadfile" style="display:none" onchange="$('#upload-file-info').html($(this).val()); $('#uploadsubmit').removeAttr('disabled');"></label>
          <kbd id="upload-file-info">Please select an image file for your logo</kbd>
          <p style="margin-top:20px" class="small">Click <strong>"Upload this file"</strong> to upload the logo file, and then click <strong>"Save"</strong> to store it to our system.</p>
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
  // $(document).ready(function() {
  //   $('#companyupdate').formValidation({
  //     framework: 'bootstrap',
  //     icon: { valid: 'pe-check', invalid: 'pe-times', validating: 'pe-refresh' },
  //     button: { selector: '[type="submit"]', disabled: '' },
  //     excluded: ':disabled',
  //     fields: {
  //       fullname: { err: 'tooltip', validators: { notEmpty: { message: 'Company name in English is required' }  } },
  //       fullname_th: { err: 'tooltip', validators: { notEmpty: { message: 'Company name in Thai is required' } } },
  //       description: { validators: { notEmpty: { message: 'Description in English is required' } } },
  //       description_th: { validators: { notEmpty: { message: 'Description in Thai is required' } } },
  //       address: { err: 'tooltip', validators: { notEmpty: { message: 'Billing address is required' } } },
  //       email: { err: 'tooltip', validators: { emailAddress: { message: 'Please enter a valid email address' } } },
  //       // website: { err: 'tooltip', validators: { } },
  //       // telephone: { err: 'tooltip', validators: { } },
  //       // fax: { err: 'tooltip', validators: { } },
  //     }
  //   });
  // });
</script>

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
