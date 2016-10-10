<?php

$r = MYPUBLIC;
if (empty($_SESSION["captcha"])) { $clength = 8; $rText = generateRandom($clength); $_SESSION["captcha"] = $rText; }

$username = cleanstring($respondent['username']);

if (($_POST['_captcha']) && $_POST['w'] == "changepass") {

  if ($_POST['_captcha'] == $_SESSION['captcha']) {
    $_username = _addslashes($_POST['_username']);
    $_realm = _addslashes($respondent['realm']);
    $_password = db_crypt(_addslashes($_POST['_newPassword']));
    $_changed  = sys_time_stamp();
    $sql = "UPDATE ".X_RESPONDENT." SET password = $_password, changed = NOW() WHERE username = $_username AND realm = $_realm ";
    // echo $sql;
    $res = execute_sql($sql);
    echo "<h2>เปลี่ยนรหัสผ่านสำเร็จ</h2>\n";
    $notes = array (array("title" => "Password changed", "text" => "คุณได้ทำการเปลี่ยนรหัสผ่านเป็นที่เรียบร้อยแล้ว", "image" => "assets/img/notification.svg"));
    if (1 === affected_rows()) { set_current_respondent($respondent['username'], $respondent['realm']); db_close($res); echo mksuccess("คุณได้ทำการเปลี่ยนรหัสผ่านเป็นที่เรียบร้อยแล้ว"); header("Refresh: 5; URL=$r"); return; }
    else { echo mkerror("ไม่สามารถทำรายได้ขณะนี้ กรุณาลองใหม่ภายหลัง"); }
  }
  else { echo mkerror("คุณใส่ตัวเลขและตัวอักษรตามรูปภาพไม่ถูกต้อง"); }

} else {

?>
<form id="changepassword" class="form-horizontal" method="post" action="<?php echo htmlspecialchars(MYPUBLIC); ?>">
  <h2>เปลี่ยนรหัสผ่าน</h2>
  <p>คุณสามารถเปลี่ยนรหัสผ่านของคุณได้บ่อยตามต้องการที่หน้านี้</p>
  <p>ไม่ควรบอกรหัสผ่านของคุณกับผู้อื่นอย่างเด็ดขาด และหากคุณมีข้อสงสัยว่า อาจมีผู้อื่นทราบรหัสผ่านของคุณ เราขอแนะนำให้คุณเปลี่ยนรหัสผ่านในทันที</p>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">ล็อคอิน</label>
      <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
        <div class="input-group">
          <span class="input-group-addon"><i class="pe-envelope pe-fw"></i></span>
          <input type="text" name="_username" class="form-control" value="<?php echo $username; ?>" disabled>
        </div>
        <input type="hidden" name="_username" value="<?php echo $username; ?>">
     </div>
  </div>
  <hr>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">รหัสผ่านเดิม</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <div class="input-group">
        <span class="input-group-addon"><i class="pe-key pe-fw"></i></span>
        <input type="password" name="_oldPassword" class="form-control" placeholder="Current password">
      </div>
    </div>
  </div>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">ตั้งรหัสผ่านใหม่</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <div class="input-group">
        <span class="input-group-addon"><i class="pe-key pe-fw"></i></span>
        <input type="password" name="_newPassword" class="form-control" placeholder="New password">
      </div>
    </div>
  </div>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">ยืนยันรหัสผ่านใหม่</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <div class="input-group">
        <span class="input-group-addon"><i class="pe-key pe-fw"></i></span>
        <input type="password" name="_newPasswordConfirm" class="form-control" placeholder="New password again">
      </div>
    </div>
  </div>
  <hr>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">ยืนยัน</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <p>กรุณาพิมพ์ตัวอักษรที่แสดงให้ดูในรูปนี้เพื่อยืนยัน<br>
      <img src="assets/include/captcha.php" alt="captcha"></p>
      <div class="input-group">
        <span class="input-group-addon"><i class="pe-cog pe-fw"></i></span>
        <input type="text" name="_captcha" class="form-control" placeholder="พิมพ์ตัวอักษรที่แสดงในภาพนี้">
      </div>
    </div>
  </div>
  <hr>
  <p class="text-center">
    <input type="hidden" name="w" value="changepass">
    <button type="submit" class="btn btn-info">Change <i class="pe-check-circle-o"></i></button>
    <button type="reset" class="btn btn-default">Cancel</button>
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
        _oldPassword: { validators: { notEmpty: { message: 'กรุณาใส่รหัสผ่านเดิม' }, stringLength: { min: 4, message: 'รหัสผ่านจะต้องมีความยาวอย่างน้อย 6 ตัวอักษร' }, different: { field: 'username', message: 'รหัสผ่านไม่สามารถเหมือนกับล็อคอินของคุณ' } } },
        _newPassword: { validators: { notEmpty: { message: 'กรุณาใส่รหัสผ่านใหม่' }, stringLength: { min: 6, message: 'รหัสผ่านจะต้องมีความยาวอย่างน้อย 6 ตัวอักษร' }, different: { field: 'username', message: 'รหัสผ่านไม่สามารถเหมือนกับล็อคอินของคุณ' } } },
        _newPasswordConfirm: { validators: { notEmpty: { message: 'กรุณาใส่รหัสผ่านใหม่อีกครั้ง' }, stringLength: { min: 6, message: 'รหัสผ่านจะต้องมีความยาวอย่างน้อย 6 ตัวอักษร' }, different: { field: 'username', message: 'รหัสผ่านไม่สามารถเหมือนกับล็อคอินของคุณ' }, identical: { field: '_newPassword', message: 'คุณใส่รหัสผ่านใหม่ไม่ตรงกัน' } } },
        _captcha: { validators: { notEmpty: { message: 'กรุณาใส่ตัวอักษรตามรูปภาพ' }, stringLength: { min: 8, message: 'ตัวอักษรนี้จะต้องมีจำนวนทั้งสิ้น 8 ตัวอักษร' } } }
      }
    });
  });
</script>
<?php } ?>
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
