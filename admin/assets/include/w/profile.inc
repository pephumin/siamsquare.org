<?php

$goback = "/admin/?w=profile";

if ($_GET["m"] == "tips") {

  $title = "Choosing a strong password";
  pageHeader($title);
?>

<h2><i class="pe-lightbulb-o pe-fw pe-lg"></i> Tips for choosing a strong password</h2>

<br>

<ul class="pe-ul">
  <li><i class="pe-li pe-check-square"></i> <strong>Create passwords that are easy to remember but hard for others to guess.</strong> When possible, use a phrase such as “I started 7th grade at Lincoln Middle School in 2004” and use the initial of each word like this: “Is7gaLMSi#2004.” And make them at least a little different (by adding a couple of unique letters) for each site. On some sites you might even be able to type in the entire phrase.</li><br>
  <li><i class="pe-li pe-check-square"></i> <strong>Make the password at least 8 characters long.</strong> The longer the better. Longer passwords are harder for thieves to crack.</li><br>
  <li><i class="pe-li pe-check-square"></i> <strong>Include numbers, capital letters and symbols.</strong> Consider using a $ instead of an S or a 1 instead of an L, or including an &amp; or % – but note that $1ngle is NOT a good password. Password thieves are onto this. But Mf$J1ravng (short for “My friend Sam Jones is really a very nice guy) is an excellent password.</li><br>
  <li><i class="pe-li pe-check-square"></i> <strong>Don’t use dictionary words.</strong>  If it’s in the dictionary, there is a chance someone will guess it. There’s even software that criminals use that can guess words used in dictionaries.</li><br>
  <li><i class="pe-li pe-check-square"></i> <strong>Never give out your password to anyone.</strong> Never give it to friends, even if they’re really good friends. A friend can – maybe even accidentally – pass your password along to others or even become an ex-friend and abuse it.</li><br>
  <li><i class="pe-li pe-check-square"></i> <strong>Make sure your devices are secure.</strong> The best password in the world might not do you any good if someone is looking over your shoulder while you type or if you forget to log out on a cybercafe computer. Malicious software, including “keyboard loggers” that record all of your keystrokes, has been used to steal passwords and other information. To increase security, make sure you’re using up-to-date anti-malware software and that your operating system is up-to-date.</li>
</ul>

<br>

<?php backButton($goback, "Back to profile page", "warning"); ?>

<?php
} else {

  // $sql = "SELECT id, title, created FROM j_projects WHERE userid = :userid AND companyid = :companyid AND status >= 0 ORDER BY id DESC";
  // $q = $db->prepare($sql);
  // $q->bindValue(':userid', $_SESSION["userid"], PDO::PARAM_INT);
  // $q->bindValue(':companyid', $_SESSION["companyid"], PDO::PARAM_INT);
  // $q->execute();
  // $counts = $q->rowCount();
  // $output = "              <select id=\"projectlist\" multiple class=\"form-control\" readonly>\n";
  // while ($row = $q->fetchObject()) {
  //   $id = $row->id;
  //   $title = $row->title;
  //   $created = ago($row->created);
  //   $output .= "                <option>Project $title</option>\n";
  // }
  // $output .= "              </select>\n";

  if ($_SESSION["lastlogin2"]) { $lastlogin = ago($_SESSION["lastlogin2"]); } else { $lastlogin = "Never"; }
  $registersince = ago($_SESSION["created"]);
  $lastupdate = ago($_SESSION["updated"]);

  $title = "Profile";
  pageHeader($title);
  echo "<h2>$title</h2>\n";
  echo "<p class=\"introtext\">This is a user-dashboard where all users including yourself can manage your own information here which includes editing and updating your profile and more importantly keeping your account secure by changing your password whenever you need to.</p>\n";
  echo "<br>\n";

  if (isset($login)) {
    if ($login->errors) { foreach ($login->errors as $error) { echo $error; } }
    if ($login->messages) { foreach ($login->messages as $message) { echo $message; } }
  }

  echo "<br>\n";
?>

<div class="row">
  <div class="col-xs-12 col-sm-8 col-md-8 col-lg-8" style="margin:0px 10px">
    <nav>
      <ul class="nav nav-tabs">
        <li class="active"><a href="#one" data-toggle="tab"><i class="pe-user pe-fw"></i> Profile summary</a></li>
        <li><a href="#two" data-toggle="tab"><i class="pe-cog pe-fw"></i> Update your profile</a></li>
        <li><a href="#three" data-toggle="tab"><i class="pe-key pe-fw"></i> Change your password</a></li>
      </ul>
    </nav>
    <br>
    <div class="tab-content">
      <div id="one" class="tab-pane in active fade">
<?php if ($_SESSION["avatar"] != "00") { echo "        <p id=\"avatar1\" class=\"pull-right\"><img src=\"assets/img/u/" . $_SESSION["avatar"] . ".svg\" class=\"img-circle members-photo\" alt=\"Avatar\"></p>\n"; } else { echo "        <p id=\"avatar1\" class=\"pull-right\"></p>\n"; } ?>
        <h4>Welcome to your profile page</h4>
        <p>Below shows the summary of your profile in a <em>read-only</em> mode. You can update your profile and change your password by clicking the next two tabs respectively.</p>
        <br>
        <table class="table">
          <tr>
            <td width="25%" style="text-align:right">Full name</td>
            <td width="5%"></td>
            <td width="70%">
              <div class="input-group">
                <span class="input-group-addon"><i class="pe-user pe-fw"></i></span>
                <input type="text" name="fullname" class="form-control" value="<?php echo $_SESSION["fullname"]; ?>" onclick="this.select()" readonly>
              </div>
              <span class="text-muted small"><small>Your fullname including first name and surname</small></span>
            </td>
          </tr>
          <tr>
            <td width="25%" style="text-align:right">Email</td>
            <td width="5%"></td>
            <td width="70%">
              <div class="input-group">
                <span class="input-group-addon"><i class="pe-envelope pe-fw"></i></span>
                <input type="email" name="email" class="form-control" value="<?php echo $_SESSION["email"]; ?>" onclick="this.select()" readonly>
              </div>
              <span class="text-muted small"><small>Email used for your registration (contact us if you want to change)</small></span>
            </td>
          </tr>
          <tr>
            <td width="25%" style="text-align:right">Mobile No.</td>
            <td width="5%"></td>
            <td width="70%">
              <div class="input-group">
                <span class="input-group-addon"><i class="pe-mobile pe-fw"></i></span>
                <input type="text" name="mobile" class="form-control" value="<?php echo $_SESSION["mobile"]; // $mm = implode("-", str_split($_SESSION["mobile"], 3)); echo $mm; ?>" onclick="this.select()" readonly>
              </div>
              <span class="text-muted small"><small>Mobile number, enter without any spaces or symbols</small></span>
            </td>
          </tr>
          <tr>
            <td width="25%" style="text-align:right">Tax ID</td>
            <td width="5%"></td>
            <td width="70%">
              <div class="input-group">
                <span class="input-group-addon"><i class="pe-building pe-fw"></i></span>
                <input type="text" name="tax" class="form-control" value="<?php if ($_SESSION["tax"]) { echo $_SESSION["tax"]; } else { echo "N/A"; } ?>" onclick="this.select()" readonly>
              </div>
              <span class="text-muted small"><small>Your ID card number for taxation only, enter without any spaces or symbols</small></span>
            </td>
          </tr>
<?php if ($_SESSION["cfullname"] || $_SESSION["cfullname_th"]) { ?>
          <tr>
            <td width="25%" style="text-align:right">Company</td>
            <td width="5%"></td>
            <td width="70%">
              <div class="input-group">
                <span class="input-group-addon">EN</span>
                <input type="text" name="cfullname" class="form-control" value="<?php echo $_SESSION["cfullname"]; ?>" onclick="this.select()" readonly>
              </div>
              <br>
              <div class="input-group">
                <span class="input-group-addon">TH</span>
                <input type="text" name="cfullname_th" class="form-control" value="<?php echo $_SESSION["cfullname_th"]; ?>" onclick="this.select()" style="font-family:'boon'; font-size:1.1rem; color:black" readonly>
              </div>
              <span class="text-muted small"><small>Can be changed only by Manager (company setting)</small></span>
            </td>
          </tr>
<?php } ?>
          <tr>
            <td width="25%" style="text-align:right">Role</td>
            <td width="5%"></td>
            <td width="70%">
              <div class="input-group">
                <span class="input-group-addon"><i class="pe-flag pe-fw"></i></span>
                <input type="text" name="role" class="form-control" value="<?php echo $_SESSION["role"]; ?>" onclick="this.select()" readonly>
              </div>
              <span class="text-muted small"><small>Can only be changed by Admin</small></span>
            </td>
          </tr>
          <tr>
            <td width="25%" style="text-align:right">Joined</td>
            <td width="5%"></td>
            <td width="70%">
              <div class="input-group">
                <span class="input-group-addon"><i class="pe-calendar pe-fw"></i></span>
                <input type="text" name="created" class="form-control" value="<?php echo shortdate($_SESSION["created"]); ?>" onclick="this.select()" readonly>
              </div>
              <span class="text-muted small"><small>Cannot be changed</small></span>
            </td>
          </tr>
        </table>
      </div>
      <div id="two" class="tab-pane fade">
<?php if ($_SESSION["avatar"] != "00") { echo "        <p id=\"avatar2\" class=\"pull-right\"><img src=\"assets/img/u/" . $_SESSION["avatar"] . ".svg\" class=\"img-circle members-photo\" alt=\"Avatar\"></p>\n"; } else { echo "        <p id=\"avatar1\" class=\"pull-right\"></p>\n"; } ?>
        <h4>Update your profile</h4>
        <p>You can easily update your profile from the text boxes below.</p>
        <br>
        <form id="updateinformation" class="form-horizontal" method="post" action="/admin/?w=profile">
          <table class="table">
            <tr>
              <td width="25%" style="text-align:right">Full name <span class="label label-red">required</span></td>
              <td width="5%"></td>
              <td width="70%">
                <div class="input-group">
                  <span class="input-group-addon"><i class="pe-user pe-fw"></i></span>
                  <input type="text" name="fullname" class="form-control" placeholder="First and last name" value="<?php echo $_SESSION["fullname"]; ?>">
                </div>
                <span class="text-muted small"><small>Please enter your full name including the first and last name</small></span>
              </td>
            </tr>
            <tr>
              <td width="25%" style="text-align:right">Mobile No. <span class="label label-blue">optional</span></td>
              <td width="5%"></td>
              <td width="70%">
                <div class="input-group">
                  <span class="input-group-addon"><i class="pe-mobile pe-fw"></i></span>
                  <input type="text" name="mobile" class="form-control" placeholder="0814447777" value="<?php echo $_SESSION["mobile"]; ?>">
                </div>
                <span class="text-muted small"><small>Your mobile number, enter without any spaces or symbols</small></span>
              </td>
            </tr>
            <tr>
              <td width="25%" style="text-align:right">Tax ID <span class="label label-blue">optional</span></td>
              <td width="5%"></td>
              <td width="70%">
                <div class="input-group">
                  <span class="input-group-addon"><i class="pe-building pe-fw"></i></span>
                  <input type="text" name="tax" class="form-control" placeholder="0000000000000" value="<?php echo $_SESSION["tax"]; ?>">
                </div>
                <span class="text-muted small"><small>Your ID card number, enter without any spaces or symbols</small></span>
              </td>
            </tr>
            <tr>
              <td width="25%" style="text-align:right">Icon <span class="label label-blue">optional</span></td>
              <td width="5%"></td>
              <td width="70%">
                <div class="input-group">
                  <span class="input-group-addon"><i class="pe-image pe-fw"></i></span>
                  <select id="select-avatar" name="avatar" class="form-control">
                    <option value="">-- select --</option>
<?php
  $pictures = array("None" => "00", "Male #1" => "M1", "Male #2" => "M2", "Male #3" => "M3", "Male #4" => "M4", "Male #5" => "M5",
                    "Male #6" => "M6", "Male #7" => "M7", "Male #8" => "M8", "Male #9" => "M9", "Male #10" => "M10",
                    "Female #1" => "F1", "Female #2" => "F2", "Female #3" => "F3", "Female #4" => "F4", "Female #5" => "F5",
                    "Female #6" => "F6", "Female #7" => "F7", "Female #8" => "F8", "Female #9" => "F9", "Female #10" => "F10");
  foreach($pictures as $a => $b) {
    if ($b == $_SESSION["avatar"]) { echo "                    <option value=\"$b\" selected>$a</option>\n"; }
    else { echo "                    <option value=\"$b\">$a</option>\n"; }
  }
?>
                  </select>
                </div>
                <span class="text-muted small"><small>You can optionally choose a display character</small></span>
              </td>
            </tr>
          </table>
          <br>
          <p class="text-center">
            <input type="hidden" name="w" value="updateinfo">
            <button class="btn btn-warning" name="Change" type="submit">Change <i class="pe-check-circle-o"></i></button>
            <button class="btn btn-default" name="Cancel" type="reset">Cancel <i class="pe-times-circle-o"></i></button>
          </p>
        </form>
        <script>
          $(document).ready(function() {
            $('#updateinformation').formValidation({
              framework: 'bootstrap',
              icon: { valid: 'pe-check', invalid: 'pe-times', validating: 'pe-refresh' },
              button: { selector: '[type="submit"]', disabled: '' },
              excluded: [':disabled'],
              fields: {
                fullname: { validators: { notEmpty: { message: 'Please enter your first and last name' } } },
                tax: { validators: { notEmpty: { message: 'Please enter your ID card numbere', stringLength: { min: 13, message: 'It has to be 13 digits only' }, regexp: { regexp: /^[0-9]+$/, message: 'Only numbers are allowed' } } }
                // mobile: { validators: { notEmpty: { message: 'Please enter your mobie number' }, stringLength: { min: 10, message: 'It has to be 10 digits only' }, regexp: { regexp: /^[0-9]+$/, message: 'Only numbers are allowed' } } }
              }
            })
            .on('err.field.fv', function(e, data) {
              var $tabPane = data.element.parents('.tab-pane'), tabId = $tabPane.attr('id');
              $('a[href="#' + tabId + '"][data-toggle="tab"]').parent().find('i').removeClass('pe-check').addClass('pe-times'); })
            .on('success.field.fv', function(e, data) {
              var $tabPane = data.element.parents('.tab-pane'), tabId = $tabPane.attr('id'), $icon = $('a[href="#' + tabId + '"][data-toggle="tab"]').parent().find('i').removeClass('pe-check pe-times');
              var isValidTab = data.fv.isValidContainer($tabPane);
              if (isValidTab !== null) { $icon.addClass(isValidTab ? 'pe-check' : 'pe-times'); }
            });
          });
        </script>
      </div>
      <div id="three" class="tab-pane fade">
        <h4>Change your password</h4>
        <p>Keep your account secure by changing your password and do not tell anyone.</p>
        <br>
        <form id="changepassword" class="form-horizontal" method="post" action="/admin/?w=profile">
          <table class="table">
            <tr>
              <td width="25%" style="text-align:right">Current password</td>
              <td width="5%"></td>
              <td width="70%">
                <div class="input-group">
                  <span class="input-group-addon"><i class="pe-key pe-fw"></i></span>
                  <input type="password" name="oldpass" class="form-control" placeholder="Current password">
                </div>
                <span class="text-muted small"><small>Please enter your current password</small></span>
              </td>
            </tr>
            <tr>
              <td width="25%" style="text-align:right">New password</td>
              <td width="5%"></td>
              <td width="70%">
                <div class="input-group">
                  <span class="input-group-addon"><i class="pe-key pe-fw"></i></span>
                  <input type="password" name="newpass1" class="form-control" placeholder="New password">
                </div>
                <span class="text-muted small"><small>Please enter the new password</small></span>
              </td>
            </tr>
            <tr>
              <td width="25%" style="text-align:right">Confirm new password</td>
              <td width="5%"></td>
              <td width="70%">
                <div class="input-group">
                  <span class="input-group-addon"><i class="pe-key pe-fw"></i></span>
                  <input type="password" name="newpass2" class="form-control" placeholder="New password again">
                </div>
                <span class="text-muted small"><small>Please enter the new password one more time to confirm</small></span>
              </td>
            </tr>
          </table>
          <br>
          <p class="text-center">
            <input type="hidden" name="w" value="changepass">
            <button class="btn btn-warning" name="Change" value="1" type="submit">Change <i class="pe-check-circle-o"></i></button>
            <button class="btn btn-default" name="Cancel" type="reset">Cancel <i class="pe-times-circle-o"></i></button>
          </p>
        </form>
        <script>
          $(document).ready(function() {
            $('#changepassword').formValidation({
              framework: 'bootstrap',
              icon: { valid: 'pe-check', invalid: 'pe-times', validating: 'pe-refresh' },
              button: { selector: '[type="submit"]', disabled: '' },
              excluded: [':disabled'],
              fields: {
                oldpass: { validators: { notEmpty: { message: 'The password is required' }, stringLength: { min: 6, message: 'Password must be more than 6 characters long' } } },
                newpass1: { validators: { notEmpty: { message: 'The password is required' }, stringLength: { min: 6, message: 'Password must be more than 6 characters long' } } },
                newpass2: { validators: { notEmpty: { message: 'The password is required' }, stringLength: { min: 6, message: 'Password must be more than 6 characters long' }, identical: { field: 'newpass1', message: 'The confirm password must be the same as the new one' } } }
              }
            })
            .on('err.field.fv', function(e, data) {
              var $tabPane = data.element.parents('.tab-pane'), tabId = $tabPane.attr('id');
              $('a[href="#' + tabId + '"][data-toggle="tab"]').parent().find('i').removeClass('pe-check').addClass('pe-times'); })
            .on('success.field.fv', function(e, data) {
              var $tabPane = data.element.parents('.tab-pane'), tabId = $tabPane.attr('id'), $icon = $('a[href="#' + tabId + '"][data-toggle="tab"]').parent().find('i').removeClass('pe-check pe-times');
              var isValidTab = data.fv.isValidContainer($tabPane);
              if (isValidTab !== null) { $icon.addClass(isValidTab ? 'pe-check' : 'pe-times'); }
            });
          });
        </script>
      </div>
    </div>
  </div>
  <div class="col-xs-0 col-sm-3 col-md-3 col-lg-3 hidden-xs bg-info" style="padding:10px">
    <h4>Others</h4>
    <div class="panel-group">
      <div class="panel panel-primary">
        <div class="panel-body"><small>Joined: <strong><?php echo $registersince; ?></strong></small></div>
      </div>
      <div class="panel panel-primary">
        <div class="panel-body"><small>Last updated: <strong><?php echo $lastupdate; ?></strong></small></div>
      </div>
      <div class="panel panel-primary">
        <div class="panel-body"><small>Last seen: <strong><?php echo $lastlogin; ?></strong></small></div>
      </div>
    </div>
    <div class="list-group">
      <a href="/admin/?w=profile&amp;m=tips" class="list-group-item"><i class="pe-lightbulb-o pe-fw"></i> Tips for choosing a strong password</a>
      <a href="/admin/contact/" class="list-group-item"><i class="pe-question-circle pe-fw"></i> Need help? Click to contact us</a>
      <a href="/admin/setup/" class="list-group-item list-group-item-warning"><i class="pe-life-ring pe-fw"></i> Forgot password</a>
      <a href="/admin/setup/?d=activation" class="list-group-item list-group-item-warning"><i class="pe-flag-o pe-fw"></i> Account activation</a>
    </div>
  </div>
</div>

<?php } ?>

<script type="text/javascript">
  $(document).ready(function() {
    $("#select-avatar").change(function() {
      if ($(this).val() !== "") {
        if ($(this).val() !== "00") {
          if ($("p#avatar1 img").length >= 1) { $("p#avatar1 img").attr("src", "assets/img/u/" + $(this).val() + ".svg"); }
          else { $("p#avatar1").append('<img>'); $("p#avatar1 img").attr("src", "assets/img/u/" + $(this).val() + ".svg").attr("class", "img-circle members-photo").attr("alt", "Avatar"); }
          if ($("p#avatar2 img").length >= 1) { $("p#avatar2 img").attr("src", "assets/img/u/" + $(this).val() + ".svg"); }
          else { $("p#avatar2").append('<img>'); $("p#avatar2 img").attr("src", "assets/img/u/" + $(this).val() + ".svg").attr("class", "img-circle members-photo").attr("alt", "Avatar"); }
        } else {
          if ($("p#avatar1 img").length >= 1) { $("p#avatar1 img").remove(); }
          if ($("p#avatar2 img").length >= 1) { $("p#avatar2 img").remove(); }
        }
      }
    });
  });
  // $(function () { $("#projectlist").css("height", parseInt($("#projectlist option").length) * 25); });
</script>

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
