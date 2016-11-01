<?php

$title = "เปลี่ยนรหัสผ่าน";
pageHeader($title);
echo "<h2>$title</h2>";
echo "<p>คุณสามารถเปลี่ยนรหัสผ่านของคุณได้บ่อยตามต้องการที่หน้านี้</p>\n";
echo "<p>ไม่ควรบอกรหัสผ่านของคุณกับผู้อื่นอย่างเด็ดขาด และหากคุณมีข้อสงสัยว่า อาจมีผู้อื่นทราบรหัสผ่านของคุณ เราขอแนะนำให้คุณเปลี่ยนรหัสผ่านในทันที</p>\n";
echo "<p>ในระบบของเรานี้ รหัสผ่านของคุณจะถูกเข้ารหัส (encrypt) ก่อนการจัดเก็บสู่ระบบ การเข้ารหัสนี้ทำให้ไม่สามารถอ่านโดยมนุษย์ได้ นั่นหมายความว่ารหัสของคุณจะปลอดภัยจากทุกคน รวมถึงทางทีมงานเองก็ด้วย เพราะไม่มีผู้ใดสามารถทราบหรืออ่านรหัสผ่านของสมาชิกได้นั่นเอง</p>\n";
//echo "<br>\n";

require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/config.php';

if (empty($_SESSION["captcha"])) { $clength = 8; $rText = generateRandom($clength); $_SESSION["captcha"] = $rText; }

if (isset($_REQUEST['captcha'])) {

  $email = $_SESSION['email'];
  $oldpass = $_POST['oldpass'];
  $newpass = $_POST['newpass1'];
  $hash = password_hash($newpass, PASSWORD_DEFAULT);

  if ($_REQUEST['captcha'] == $_SESSION['captcha']) {
    $db = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_DATABASE);
    if (!$db->set_charset("utf8")) { $errors[] = $db->error; }
    $sql1 = "UPDATE j_users SET password = '".$hash."' WHERE email = '".$email."';";
    // echo $sql1;
    $query = $db->query($sql1);
    if ($query) { echo mksuccess("คุณได้ทำการเปลี่ยนรหัสผ่านเป็นที่เรียบร้อยแล้ว"); }
    $sql2 = "INSERT INTO j_users_logs (userid, ip, data) VALUE ('".$_SESSION["userid"]."', '".$_SESSION["ip"]."', '".$_SESSION["email"]." changed password');";
    // echo $sql2;
    $db->query($sql2);
    $notes = array (array("title" => "Password changed", "text" => "คุณได้ทำการเปลี่ยนรหัสผ่านเป็นที่เรียบร้อยแล้ว", "image" => "assets/img/notification.svg"));
  }
  else { echo mkerror("คุณใส่ตัวเลขและตัวอักษรตามรูปภาพไม่ถูกต้อง"); }
}

?>

<hr>

<form id="changepassword" class="form-horizontal" method="post" action="<?php echo(htmlspecialchars(ME)); ?>">
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">อีเมล์</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <div class="input-group">
        <span class="input-group-addon"><i class="pe-envelope pe-fw"></i></span>
        <input type="text" name="email" class="form-control" placeholder="<?php echo $_SESSION['email']; ?>" disabled>
      </div>
      <input type="hidden" name="email" value="<?php echo $_SESSION['email']; ?>">
    </div>
  </div>
  <hr>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">รหัสผ่านเดิม</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <div class="input-group">
        <span class="input-group-addon"><i class="pe-key pe-fw"></i></span>
        <input type="password" name="oldpass" class="form-control" placeholder="Current password">
      </div>
    </div>
  </div>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">ตั้งรหัสผ่านใหม่</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <div class="input-group">
        <span class="input-group-addon"><i class="pe-key pe-fw"></i></span>
        <input type="password" name="newpass1" class="form-control" placeholder="New password">
      </div>
    </div>
  </div>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">ยืนยันรหัสผ่านใหม่</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <div class="input-group">
        <span class="input-group-addon"><i class="pe-key pe-fw"></i></span>
        <input type="password" name="newpass2" class="form-control" placeholder="New password again">
      </div>
    </div>
  </div>
  <hr>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">ยืนยัน</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <p>กรุณาพิมพ์ตัวอักษรที่แสดงให้ดูในรูปนี้เพื่อยืนยัน<br>
      <img src="/public/assets/include/captcha.php" alt="captcha"></p>
      <div class="input-group">
        <span class="input-group-addon"><i class="pe-cog pe-fw"></i></span>
        <input type="text" name="captcha" class="form-control" placeholder="พิมพ์ตัวอักษรที่แสดงในภาพนี้">
      </div>
    </div>
  </div>
  <hr>
  <p class="text-center">
    <input type="hidden" name="w" value="changepass">
    <button class="btn btn-info" name="Change" type="submit">เปลี่ยน <i class="pe-check-circle-o"></i></button>
    <button class="btn btn-default" name="Cancel" type="reset">ยกเลิก <i class="pe-times-circle-o"></i></button>
  </p>
</form>
<script>
  $(document).ready(function() {
    $('#changepassword').formValidation({
      framework: 'bootstrap',
      icon: { valid: 'pe-check', invalid: 'pe-times', validating: 'pe-refresh' },
      button: { selector: '[type="submit"]', disabled: '' },
      excluded: ':disabled',
      fields: {
        oldpass: { validators: { notEmpty: { message: 'The password is required' }, stringLength: { min: 4, message: 'Password must be more than 6 characters long' }, different: { field: 'username', message: 'The password cannot be the same as username' } } },
        newpass1: { validators: { notEmpty: { message: 'The password is required' }, stringLength: { min: 6, message: 'Password must be more than 6 characters long' }, different: { field: 'username', message: 'The password cannot be the same as username' } } },
        newpass2: { validators: { notEmpty: { message: 'The password is required' }, stringLength: { min: 6, message: 'Password must be more than 6 characters long' }, different: { field: 'username', message: 'The password cannot be the same as username' }, identical: { field: 'newpass1', message: 'The confirm password must be the same as the new one' } } },
        captcha: { validators: { notEmpty: { message: 'Captcha is required' }, stringLength: { min: 8, message: 'Captcha must be 8 characters long' } } }
      }
    });
  });
</script>
<br><br>
<div class="alert alert-info alert-dismissible alert-eng" role="alert"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
  <h4><i class="pe-lightbulb-o pe-fw pe-lg"></i> Tips for choosing a strong password</h4>
  <p>Below are some nice tips for anyone who cares about setting up a good strong password</p>
  <ul class="pe-ul">
    <li><i class="pe-li pe-check-square"></i> <strong>Create passwords that are easy to remember but hard for others to guess.</strong> When possible, use a phrase such as “I started 7th grade at Lincoln Middle School in 2004” and use the initial of each word like this: “Is7gaLMSi#2004.” And make them at least a little different (by adding a couple of unique letters) for each site. On some sites you might even be able to type in the entire phrase.</li>
    <li><i class="pe-li pe-check-square"></i> <strong>Make the password at least 8 characters long.</strong> The longer the better. Longer passwords are harder for thieves to crack.</li>
    <li><i class="pe-li pe-check-square"></i> <strong>Include numbers, capital letters and symbols.</strong> Consider using a $ instead of an S or a 1 instead of an L, or including an &amp; or % – but note that $1ngle is NOT a good password. Password thieves are onto this. But Mf$J1ravng (short for “My friend Sam Jones is really a very nice guy) is an excellent password.</li>
    <li><i class="pe-li pe-check-square"></i> <strong>Don’t use dictionary words.</strong>  If it’s in the dictionary, there is a chance someone will guess it. There’s even software that criminals use that can guess words used in dictionaries.</li>
    <li><i class="pe-li pe-check-square"></i> <strong>Never give out your password to anyone.</strong> Never give it to friends, even if they’re really good friends. A friend can – maybe even accidentally – pass your password along to others or even become an ex-friend and abuse it.</li>
    <li><i class="pe-li pe-check-square"></i> <strong>Make sure your devices are secure.</strong> The best password in the world might not do you any good if someone is looking over your shoulder while you type or if you forget to log out on a cybercafe computer. Malicious software, including “keyboard loggers” that record all of your keystrokes, has been used to steal passwords and other information. To increase security, make sure you’re using up-to-date anti-malware software and that your operating system is up-to-date.</li>
  </ul>
</div>

<!-- <a href="/public/?w=activity" class="btn btn-danger btn-sm pull-right" style="margin-top:50px; margin-bottom: 20px"><i class="pe-chevron-circle-left pe-fw"></i> Back to My Profile</a> -->

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
