<?php

if (isset($_REQUEST['fname']) && isset($_REQUEST['lname']) && isset($_REQUEST['captcha'])) {

  if ($_REQUEST['captcha'] != $_SESSION['captcha']) {

    if (change_profile($respondent['username'], $respondent['realm'], $_REQUEST['fname'], $_REQUEST['lname'], $respondent['username'])) {
      echo(mksuccess('Your profile has been successfully updated.'));
      return;
    } else { echo(mkerror('Error updating your profie.')); }

  } else { echo(mkerror('Wrong captcha.')); }
}

require INCLUDEADM.'/captcha.php';
$captcha_length = 8;
$rText = generateRandom($captcha_length);
$_SESSION["captcha"] = $rText;

?>
<form class="form-horizontal" method="post" id="profile_change" action="<?php echo htmlspecialchars(ME); ?>">
  <h2>แก้ไขข้อมูลของคุณ</h2>
  <p>คุณสามารถแก้ไขข้อมูลของคุณได้ที่นี่</p>
  <p>เราอนุญาตให้แก้ไขได้เพียงข้อมูลที่เหมาะสมเท่านั้น ขอสงวนสิทธิ์ในการจำกัดการแก้ไขสำหรับบางข้อมูลเช่นอีเมล์เนื่องจากเป็นข้อมูลหลักสำหรับใช้ในการล็อคอินเข้าระบบด้วยนั่นเอง</p>
  <section id="changepassword">
    <div class="form-group">
      <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">ล็อคอิน</label>
        <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
          <div class="input-group">
            <span class="input-group-addon"><i class="pe-envelope pe-fw"></i></span>
            <input type="text" name="username" class="form-control" value="<?php echo $respondent['username']; ?>" placeholder="<?php echo $respondent['username']; ?>" disabled>
          </div>
          <input type="hidden" name="username" value="<?php echo $respondent['username']; ?>">
       </div>
    </div>
    <hr>
    <div class="form-group">
      <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">ชื่อ</label>
      <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
        <div class="input-group">
          <span class="input-group-addon"><i class="pe-question pe-fw"></i></span>
          <input type="text" name="fname" class="form-control" value="<?php echo $respondent['fname']; ?>" placeholder="ชื่อของคุณ">
        </div>
      </div>
    </div>
    <div class="form-group">
      <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">นามสกุล</label>
      <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
        <div class="input-group">
          <span class="input-group-addon"><i class="pe-question pe-fw"></i></span>
          <input type="text" name="lname" class="form-control" value="<?php echo $respondent['lname']; ?>" placeholder="นามสกุลของคุณ">
        </div>
      </div>
    </div>
    <!-- <div class="form-group">
      <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">ยืนยันรหัสผ่านใหม่</label>
      <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
        <div class="input-group">
          <span class="input-group-addon"><i class="pe-key pe-fw"></i></span>
          <input type="password" name="newPasswordConfirm" id="newPasswordConfirm" class="form-control" placeholder="New password again">
        </div>
      </div>
    </div> -->
    <hr>
    <div class="form-group">
      <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">ยืนยัน</label>
      <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
        <div class="input-group">
          <span class="input-group-addon"><i class="pe-question pe-fw"></i></span>
          <input type="text" name="captcha" class="form-control" placeholder="พิมพ์ตัวอักษรที่แสดงในภาพนี้">
        </div>
      </div>
    </div>
    <div class="form-group">
      <div class="col-xs-offset-0 col-sm-offset-3 col-md-offset-3 col-lg-offset-3 col-xs-12 col-sm-7 col-md-7 col-lg-7">
        <p><img src="assets/include/captcha.php" alt="captcha"></p>
        <p>กรุณาพิมพ์ตัวอักษรที่แสดงให้ดูในรูปนี้เพื่อยืนยัน</p>
        <p>
          <input type="hidden" name="w" value="changeprofile">
          <button type="submit" class="btn btn-warning">Change <i class="pe-check-circle-o"></i></button>
          <button type="submit" class="btn btn-default">Cancel</button>
          <!-- <input type="hidden" name="w" value="passwd">
          <button type="submit" class="btn btn-info" name="doChangeProfile">แก้ไขข้อมูล <i class="pe-check-circle-o"></i></button>
          <button type="submit" class="btn btn-default" name="doChangeProfileCancel">ยกเลิก</button> -->
        </p>
      </div>
    </div>
  </section>
</form>
<script>
  $(document).ready(function() {
    $('#changepassword').formValidation({
      framework: 'bootstrap',
      icon: { valid: 'pe-check', invalid: 'pe-times', validating: 'pe-refresh' },
      excluded: ':disabled',
      fields: {
        firstName: {
          validators: {
            notEmpty: { message: 'กรุณาใส่ชื่อของคุณ' }
          }
        },
        lastName: {
          validators: {
            notEmpty: { message: 'กรุณาใส่นามสกุลของคุณ' }
          }
        },
        captcha: {
          validators: {
            notEmpty: { message: 'กรุณาใส่ตัวอักษรตามรูปภาพ' },
            stringLength: { min: 8, message: 'ตัวอักษรนี้จะต้องมีจำนวนทั้งสิ้น 8 ตัวอักษร' }
          }
        }
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
