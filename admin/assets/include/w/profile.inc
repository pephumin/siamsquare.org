<?php if ($_GET["m"] == "tips") { ?>

<?php
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

<a href="/admin/?w=profile" class="btn btn-danger btn-sm pull-right" style="margin-top:50px; margin-bottom: 20px"><i class="pe-chevron-circle-left pe-fw"></i> Back to my profile page</a>

<?php } else { ?>

<?php
require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/config.php';
$db = new PDO('mysql:host='. DB_HOST .';dbname='. DB_DATABASE . ';charset=utf8', DB_USER, DB_PASS);
$sql = "SELECT id, title, created FROM j_projects WHERE userid = :userid AND companyid = :companyid AND status >= 0 ORDER BY id DESC";
$q = $db->prepare($sql);
$q->bindValue(':userid', $_SESSION["userid"], PDO::PARAM_INT);
$q->bindValue(':companyid', $_SESSION["companyid"], PDO::PARAM_INT);
$q->execute();
$counts = $q->rowCount();
$output = "              <select id=\"projectlist\" multiple class=\"form-control\" readonly>\n";
while ($row = $q->fetchObject()) {
  $id = $row->id;
  $title = $row->title;
  $created = ago($row->created);
  // $output .= "                <option>Project $title (created: $created)</option>\n";
  $output .= "                <option>Project $title</option>\n";
}
$output .= "              </select>\n";

$lastlogin = ago($_SESSION["lastlogin2"]);
$registersince = ago($_SESSION["created"]);

$title = "My profile";
pageHeader($title);
echo "<h2>$title</h2>\n";
echo "<p>This is a user-dashboard where all users including yourself can manage your own information here which includes editing and updating your profile and more importantly keeping your account secure by changing your password whenever you need to.</p>\n";
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
        <p class="pull-right"><img src="<?php if ($_SESSION["avatar"]) { echo $_SESSION["avatar"]; } else { echo "assets/img/u/M6.svg"; } ?>" id="avatar1" class="img-circle members-photo" alt="Avatar"></p>
        <h4>Welcome to your profile page</h4>
        <p>Below shows the summary of your profile in a <em>read-only</em> mode.</p>
        <br>
        <table class="table">
          <tr>
            <td width="25%" style="text-align:right">Email</td>
            <td width="5%"></td>
            <td width="70%">
              <div class="input-group">
                <span class="input-group-addon"><i class="pe-envelope pe-fw"></i></span>
                <input type="email" name="email" class="form-control" value="<?php echo $_SESSION["email"]; ?>" onclick="this.select()" readonly>
              </div>
              <input type="hidden" name="email" value="phumin@sawasdee.org">
            </td>
          </tr>
          <tr>
            <td width="25%" style="text-align:right">Company</td>
            <td width="5%"></td>
            <td width="70%">
              <div class="input-group">
                <span class="input-group-addon"><i class="pe-building pe-fw"></i></span>
                <input type="text" name="company" class="form-control" value="<?php echo $_SESSION["company"]; ?>" onclick="this.select()" readonly>
              </div>
            </td>
          </tr>
          <tr>
            <td width="25%" style="text-align:right">Role</td>
            <td width="5%"></td>
            <td width="70%">
              <div class="input-group">
                <span class="input-group-addon"><i class="pe-user pe-fw"></i></span>
                <input type="text" name="role" class="form-control" value="<?php echo $_SESSION["role"]; ?>" onclick="this.select()" readonly>
              </div>
            </td>
          </tr>
          <tr>
            <td width="25%" style="text-align:right">Registered</td>
            <td width="5%"></td>
            <td width="70%">
              <div class="input-group">
                <span class="input-group-addon"><i class="pe-calendar pe-fw"></i></span>
                <input type="text" name="created" class="form-control" value="<?php echo shortdate($_SESSION["created"]); ?> (<?php echo ago($_SESSION["created"]); ?>)" onclick="this.select()" readonly>
              </div>
            </td>
          </tr>
          <!-- <tr>
            <td width="25%" style="text-align:right">Last updated</td>
            <td width="5%"></td>
            <td width="70%">
              <div class="input-group">
                <span class="input-group-addon"><i class="pe-clock-o pe-fw"></i></span>
                <input type="text" name="updated" class="form-control" value="<?php echo ago($_SESSION["updated"]); ?>" onclick="this.select()" readonly>
              </div>
            </td>
          </tr> -->
          <tr>
            <td width="25%" style="text-align:right">Projects handled<br><small>(Total of <?php echo $counts; ?> projects)</small></td>
            <td width="5%"></td>
            <td width="70%">
<?php echo $output; ?>
            </td>
          </tr>
        </table>
      </div>
      <div id="two" class="tab-pane fade">
        <p class="pull-right"><img src="<?php if ($_SESSION["avatar"]) { echo $_SESSION["avatar"]; } else { echo "assets/img/u/M6.svg"; } ?>" id="avatar2" class="img-circle members-photo" alt="Avatar"></p>
        <h4>Update your profile</h4>
        <p>You can easily update your profile from the text boxes below.</p>
        <br>
        <form id="updateinformation" class="form-horizontal" method="post" action="/admin/?w=profile">
          <table class="table">
            <tr>
              <td width="25%" style="text-align:right">Full name</td>
              <td width="5%"></td>
              <td width="70%">
                <div class="input-group">
                  <span class="input-group-addon"><i class="pe-user pe-fw"></i></span>
                  <input type="text" name="fullname" class="form-control" placeholder="First name and surname" value="<?php echo $_SESSION["fullname"]; ?>">
                </div>
              </td>
            </tr>
            <tr>
              <td width="25%" style="text-align:right">Mobile No.</td>
              <td width="5%"></td>
              <td width="70%">
                <div class="input-group">
                  <span class="input-group-addon"><i class="pe-mobile pe-fw"></i></span>
                  <input type="text" name="mobile" class="form-control" placeholder="0814447777" value="<?php echo $_SESSION["mobile"]; ?>">
                </div>
              </td>
            </tr>
            <tr>
              <td width="25%" style="text-align:right">Picture</td>
              <td width="5%"></td>
              <td width="70%">
                <div class="input-group">
                  <span class="input-group-addon"><i class="pe-image pe-fw"></i></span>
                  <select id="select-avatar" name="avatar" class="form-control">
                    <option value="">-- select --</option>
<?php
$pictures = array("Male #1" => "assets/img/u/M1.svg", "Male #2" => "assets/img/u/M2.svg", "Male #3" => "assets/img/u/M3.svg",
                  "Male #4" => "assets/img/u/M4.svg", "Male #5" => "assets/img/u/M5.svg", "Male #6" => "assets/img/u/M6.svg",
                  "Female #1" => "assets/img/u/F1.svg", "Female #2" => "assets/img/u/F2.svg", "Female #3" => "assets/img/u/F3.svg",
                  "Female #4" => "assets/img/u/F4.svg", "Female #5" => "assets/img/u/F5.svg", "Female #6" => "assets/img/u/F6.svg");
foreach($pictures as $a => $b) {
  if ($b == $_SESSION["avatar"]) { echo "                    <option value=\"$b\" selected>$a</option>\n"; }
  else { echo "                    <option value=\"$b\">$a</option>\n"; }
}
?>
                  </select>
                </div>
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
                mobile: { validators: { notEmpty: { message: 'Please enter your mobie number' }, stringLength: { min: 10, message: 'It has to be 10 digits only' }, regexp: { regexp: /^[0-9]+$/, message: 'Only numbers are allowed' } } }
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
  <div class="col-xs-0 col-sm-3 col-md-3 col-lg-3 hidden-xs bg-info" style="margin:0px">
    <h4>Others</h4>
    <div class="panel-group">
      <div class="panel panel-primary">
        <div class="panel-body"><small>Last login: <strong><?php echo $lastlogin; ?></strong></small></div>
      </div>
      <div class="panel panel-primary">
        <div class="panel-body"><small>Registered: <strong><?php echo $registersince; ?></strong></small></div>
      </div>
    </div>
    <div class="list-group">
      <a href="/admin/?w=profile&amp;m=tips" class="list-group-item"><i class="pe-lightbulb-o pe-fw"></i> Tips for choosing a strong password</a>
      <a href="/admin/contact/" class="list-group-item"><i class="pe-question-circle pe-fw"></i> Need help? Click to contact us</a>
      <a href="/admin/setup/" class="list-group-item list-group-item-warning"><i class="pe-life-ring pe-fw"></i> Forgot password</a>
      <a href="/admin/setup/?d=activation" class="list-group-item list-group-item-warning"><i class="pe-flag pe-fw"></i> Account activation</a>
    </div>
  </div>
</div>

<?php } ?>

<script type="text/javascript">
  $(document).ready(function() {
    $("#select-avatar").change(function() {
      $("#avatar1").attr("src",$(this).val());
      $("#avatar2").attr("src",$(this).val());
    });
  });
  $(function () {
    $("#projectlist").css("height", parseInt($("#projectlist option").length) * 25);
  });
</script>

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
