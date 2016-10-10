<?php

$r = MYPUBLIC;
if (empty($_SESSION["captcha"])) { $clength = 8; $rText = generateRandom($clength); $_SESSION["captcha"] = $rText; }

$username = cleanstring($respondent['username']);
$fname = cleanstring($respondent['fname']);
$lname = cleanstring($respondent['lname']);
$gender = cleanstring($respondent['gender']);
$birthday_date = cleanstring($respondent['birthday_date']);
$birthday_month = cleanstring($respondent['birthday_month']);
$birthday_year = cleanstring($respondent['birthday_year']);
$province = cleanstring($respondent['province']);
$mobile = cleanstring($respondent['mobile']);
$mobile1 = substr($mobile, 0, 3);
$mobile2 = substr($mobile, 3, 3);
$mobile3 = substr($mobile, 6, 4);
$personal_income = cleanstring($respondent['personal_income']);
$HH_income = cleanstring($respondent['HH_income']);
$marital = cleanstring($respondent['marital']);
$education = cleanstring($respondent['education']);

if (($_POST['_captcha']) && $_POST['w'] == "changeprofile") {

  if ($_POST['_captcha'] == $_SESSION['captcha']) {
    $_username = _addslashes($_POST['_username']);
    $_realm = _addslashes($respondent['realm']);
    $_fname = _addslashes($_POST['_fname']);
    $_lname = _addslashes($_POST['_lname']);
    $_province = _addslashes($_POST['_province']);
    $_mobile = _addslashes($_POST['_mobile1'].$_POST['_mobile2'].$_POST['_mobile3']);
    $_personal_income = _addslashes($_POST['_personal_income']);
    $_HH_income = _addslashes($_POST['_HH_income']);
    $_marital = _addslashes($_POST['_marital']);
    $_education = _addslashes($_POST['_education']);
    $_changed  = sys_time_stamp();
    $sql = "UPDATE ".X_RESPONDENT." SET fname = $_fname, lname = $_lname, province = $_province, mobile = $_mobile, personal_income = $_personal_income, HH_income = $_HH_income, marital = $_marital, education = $_education, changed = NOW() WHERE username = $_username AND realm = $_realm ";
    //echo $sql;
    $res = execute_sql($sql);
    echo "<h2>แก้ไขข้อมูลสำเร็จ</h2>\n";
    $notes = array (array("title" => "Profile updated", "text" => "คุณได้ทำการแก้ไขข้อมูลของคุณเป็นที่เรียบร้อยแล้ว", "image" => "assets/img/notification.svg"));
    if (1 === affected_rows()) { set_current_respondent($respondent['username'], $respondent['realm']); db_close($res); echo mksuccess("คุณได้ทำการแก้ไขข้อมูลของคุณเป็นที่เรียบร้อยแล้ว"); header("Refresh: 5; URL=$r"); return; }
    else { echo mkerror("ไม่สามารถทำรายได้ขณะนี้ กรุณาลองใหม่ภายหลัง"); }
  }
  else { echo mkerror("คุณใส่ตัวเลขและตัวอักษรตามรูปภาพไม่ถูกต้อง"); }

} else {

?>
<form id="changeprofile" class="form-horizontal" method="post" action="<?php echo htmlspecialchars(MYPUBLIC); ?>">
  <h2>แก้ไขข้อมูลของคุณ</h2>
  <p>คุณสามารถแก้ไขข้อมูลของคุณได้ที่นี่</p>
  <p>เราอนุญาตให้แก้ไขได้เพียงข้อมูลที่เหมาะสมเท่านั้น ขอสงวนสิทธิ์ในการจำกัดการแก้ไขสำหรับบางข้อมูลเช่นอีเมล์เนื่องจากเป็นข้อมูลหลักสำหรับใช้ในการล็อคอินเข้าระบบด้วยนั่นเอง</p>
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
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">ชื่อ</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <div class="input-group">
        <span class="input-group-addon"><i class="pe-cog pe-fw"></i></span>
        <input type="text" name="_fname" class="form-control" value="<?php echo $fname; ?>" placeholder="ชื่อของคุณ">
      </div>
    </div>
  </div>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">นามสกุล</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <div class="input-group">
        <span class="input-group-addon"><i class="pe-cog pe-fw"></i></span>
        <input type="text" name="_lname" class="form-control" value="<?php echo $lname; ?>" placeholder="นามสกุลของคุณ">
      </div>
    </div>
  </div>
  <hr>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">เพศ</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <div class="input-group">
        <span class="input-group-addon"><i class="pe-cog pe-fw"></i></span>
<?php
  $xml = new SimpleXMLElement (file_get_contents(MYXML."/gender.xml"));
  foreach ($xml as $a) { if ($gender == $a['id']) { $aa = $a['id']; echo "        <input type=\"text\" name=\"_gender\" class=\"form-control\" value=\"$a\" disabled>\n"; echo "        <input type=\"hidden\" name=\"_gender\" value=\"$aa\">\n"; } }
?>
      </div>
    </div>
  </div>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">วันเกิด</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <div class="input-group">
        <span class="input-group-addon">วันที่</span>
<?php
  $xml = new SimpleXMLElement (file_get_contents(MYXML."/date.xml"));
  foreach ($xml as $a) { if ($birthday_date == $a['id']) { $aa = $a['id']; echo "        <input type=\"text\" name=\"_birthday_date\" class=\"form-control\" value=\"$a\" disabled>\n"; echo "        <input type=\"hidden\" name=\"_birthday_date\" value=\"$aa\">\n"; } }
?>
        <span class="input-group-addon">เดือน</span>
<?php
  $xml = new SimpleXMLElement (file_get_contents(MYXML."/month.xml"));
  foreach ($xml as $a) { if ($birthday_month == $a['id']) { $aa = $a['id']; echo "        <input type=\"text\" name=\"_birthday_month\" class=\"form-control\" value=\"$a\" disabled>\n"; echo "        <input type=\"hidden\" name=\"_birthday_month\" value=\"$aa\">\n"; } }
?>
        <span class="input-group-addon">ปี</span>
<?php
  $xml = new SimpleXMLElement (file_get_contents(MYXML."/year.xml"));
  foreach ($xml as $a) { if ($birthday_year == $a['id']) { $aa = $a['id']; echo "        <input type=\"text\" name=\"_birthday_year\" class=\"form-control\" value=\"$a\" disabled>\n"; echo "        <input type=\"hidden\" name=\"_birthday_year\" value=\"$aa\">\n"; } }
?>
      </div>
    </div>
  </div>
  <hr>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">ปัจจุบันอาศัยอยู่</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <select class="form-control input-sm" name="_province">
        <option value="" selected>--------- เลือกจังหวัด ---------</option>
<?php
  $xml = new SimpleXMLElement (file_get_contents(MYXML."/province.xml"));
  foreach ($xml as $a) { $aa = $a['id']; if ($province == "") { echo "      <option value=\"\" selected>--------- เลือกจังหวัด ---------</option>\n"; } elseif ($province == $aa) { echo "        <option value=\"$aa\" selected>$a</option>\n"; } else { echo "        <option value=\"$aa\">$a</option>\n"; } }
?>
      </select>
    </div>
  </div>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">หมายเลขโทรศัพท์มือถือ</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <div class="input-group">
        <input type="text" size="3" name="_mobile1" class="form-control" value="<?php echo $mobile1; ?>" placeholder="081">
        <span class="input-group-addon"><i class="pe-minus pe-fw"></i></span>
        <input type="text" size="3" name="_mobile2" class="form-control" value="<?php echo $mobile2; ?>" placeholder="888">
        <span class="input-group-addon"><i class="pe-minus pe-fw"></i></span>
        <input type="text" size="4" name="_mobile3" class="form-control" value="<?php echo $mobile3; ?>" placeholder="7777">
      </div>
    </div>
  </div>
  <hr>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">รายได้ส่วนบุคคล</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
<?php
  $xml = new SimpleXMLElement (file_get_contents(MYXML."/personal_income.xml"));
  foreach ($xml as $a) { $aa = $a['id']; echo "      <div class=\"radio radio-primary\">"; if ($personal_income == $aa) { echo "<input type=\"radio\" id=\"$aa\" name=\"_personal_income\" value=\"$aa\" checked><label for=\"$aa\">$a</label>"; } else { echo "<input type=\"radio\" id=\"$aa\" name=\"_personal_income\" value=\"$aa\"><label for=\"$aa\">$a</label>"; } echo "</div>\n"; }
?>
    </div>
  </div>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">รายได้ครัวเรือน</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
<?php
  $xml = new SimpleXMLElement (file_get_contents(MYXML."/HH_income.xml"));
  foreach ($xml as $a) { $aa = $a['id']; echo "      <div class=\"radio radio-primary\">"; if ($HH_income == $aa) { echo "<input type=\"radio\" id=\"$aa\" name=\"_HH_income\" value=\"$aa\" checked><label for=\"$aa\">$a</label>"; } else { echo "<input type=\"radio\" id=\"$aa\" name=\"_HH_income\" value=\"$aa\"><label for=\"$aa\">$a</label>"; } echo "</div>\n"; }
?>
    </div>
  </div>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">สถานะภาพสมรส</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
<?php
  $xml = new SimpleXMLElement (file_get_contents(MYXML."/marital.xml"));
  foreach ($xml as $a) { $aa = $a['id']; echo "      <div class=\"radio radio-primary\">"; if ($marital == $aa) { echo "<input type=\"radio\" id=\"$aa\" name=\"_marital\" value=\"$aa\" checked><label for=\"$aa\">$a</label>"; } else { echo "<input type=\"radio\" id=\"$aa\" name=\"_marital\" value=\"$aa\"><label for=\"$aa\">$a</label>"; } echo "</div>\n"; }
?>
    </div>
  </div>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">ระดับการศึกษา</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
<?php
  $xml = new SimpleXMLElement (file_get_contents(MYXML."/education.xml"));
  foreach ($xml as $a) { $aa = $a['id']; echo "      <div class=\"radio radio-primary\">"; if ($education == $aa) { echo "<input type=\"radio\" id=\"$aa\" name=\"_education\" value=\"$aa\" checked><label for=\"$aa\">$a</label>"; } else { echo "<input type=\"radio\" id=\"$aa\" name=\"_education\" value=\"$aa\"><label for=\"$aa\">$a</label>"; } echo "</div>\n"; }
?>
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
    <input type="hidden" name="w" value="changeprofile">
    <button type="submit" class="btn btn-info">Change <i class="pe-check-circle-o"></i></button>
    <button type="reset" class="btn btn-default">Cancel</button>
  </p>
</form>
<script>
  $(document).ready(function() {
    $('#changeprofile').formValidation({
      framework: 'bootstrap',
      icon: { valid: 'pe-check', invalid: 'pe-times', validating: 'pe-refresh' },
      button: { selector: '[type="submit"]', disabled: '' },
      excluded: ':disabled',
      fields: {
        // _username: { validators: { notEmpty: { message: 'กรุณาระบุอีเมล์ที่ถูกต้อง' }, emailAddress: { message: 'คุณกรอกอีเมล์ไม่ถูกต้อง' } } },
        _fname: { validators: { notEmpty: { message: 'กรุณาระบุชื่อจริงของคุณ' } } },
        _lname: { validators: { notEmpty: { message: 'กรุณาระบุนามสกุลจริงของคุณ' } } },
        // _gender: { validators: { notEmpty: { message: 'กรุณาเลือกเพศ' } } },
        // _birthday_date: { validators: { notEmpty: { message: 'กรุณาเลือกวันเกิด' } } },
        // _birthday_month: { validators: { notEmpty: { message: 'กรุณาเลือกเดือนเกิด' } } },
        // _birthday_year: { validators: { notEmpty: { message: 'กรุณาเลือกปีเกิด' } } },
        _province: { validators: { notEmpty: { message: 'กรุณาเลือกจังหวัด' } } },
        _mobile1: { validators: { notEmpty: { message: 'กรุณาระบุหมายเลขโทรศัพท์มือถือที่ติดต่อได้จริง' }, stringLength: { min: 3, message: 'ต้องเป็นตัวเลขตัวจำนวนทั้งสิ้น 3 ตัว' }, regexp: { regexp: /^[0-9]+$/, message: 'ต้องเป็นตัวเลขเท่านั้น' } } },
        _mobile2: { validators: { notEmpty: { message: 'กรุณาระบุหมายเลขโทรศัพท์มือถือที่ติดต่อได้จริง' }, stringLength: { min: 3, message: 'ต้องเป็นตัวเลขตัวจำนวนทั้งสิ้น 3 ตัว' }, regexp: { regexp: /^[0-9]+$/, message: 'ต้องเป็นตัวเลขเท่านั้น' } } },
        _mobile3: { validators: { notEmpty: { message: 'กรุณาระบุหมายเลขโทรศัพท์มือถือที่ติดต่อได้จริง' }, stringLength: { min: 4, message: 'ต้องเป็นตัวเลขตัวจำนวนทั้งสิ้น 4 ตัว' }, regexp: { regexp: /^[0-9]+$/, message: 'ต้องเป็นตัวเลขเท่านั้น' } } },
        _personal_income: { validators: { notEmpty: { message: 'กรุณาเลือกรายได้ส่วนบุคคล' } } },
        _HH_income: { validators: { notEmpty: { message: 'กรุณาเลือกรายได้ครัวเรือน' } } },
        _marital: { validators: { notEmpty: { message: 'กรุณาเลือกสถานะภาพสมรส' } } },
        _education: { validators: { notEmpty: { message: 'กรุณาเลือกระดับการศึกษา' } } },
        _captcha: { validators: { notEmpty: { message: 'กรุณาใส่ตัวเลขและตัวอักษรตามรูปภาพ' }, stringLength: { min: 8, message: 'ตัวเลขและตัวอักษรนี้จะต้องมีจำนวนทั้งสิ้น 8 ตัวอักษร' } } }
      }
    });
  });
</script>
<?php } ?>
