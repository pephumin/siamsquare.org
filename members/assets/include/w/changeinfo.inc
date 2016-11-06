<?php

$title = "แก้ไขข้อมูลของคุณ";
pageHeader($title);
echo "<h2>$title</h2>";
echo "<p>คุณสามารถแก้ไขข้อมูลของคุณได้ที่นี่ แต่ทางเรานั้นจะอนุญาตให้แก้ไขได้เพียงข้อมูลบางอย่างเท่านั้น</p>\n";
echo "<p>ทางเราขอสงวนสิทธิ์ในการจำกัดการแก้ไขสำหรับบางข้อมูลเช่นอีเมล์เนื่องจากจะมีผลต่อการจัดการข้อมูลในระบบเพราะต้องใช้สำหรับการล็อคอินด้วย รวมถึงข้อมูลเรื่องเพศและวันเกิดซึ่งเราเชื่อว่าคุณได้กรอกตามจริงตั้งแต่สมัครสมาชิกแล้วนั่นเอง</p>\n";
// echo "<br>\n";

require_once $_SERVER['DOCUMENT_ROOT'].'/public/assets/include/config.php';

if (empty($_SESSION["captcha"])) { $clength = 8; $rText = generateRandom($clength); $_SESSION["captcha"] = $rText; }

if (isset($_REQUEST['captcha'])) {

  $email = $_SESSION['email'];
  $gender = $_SESSION['gender'];
  $birthday_date = $_SESSION['birthday_date'];
  $birthday_month = $_SESSION['birthday_month'];
  $birthday_year = $_SESSION['birthday_year'];

  $fullname = $_POST['fullname'];
  $mobile = $_POST['mobile'];
  $province = $_POST['province'];
  $personal_income = $_POST['personal_income'];
  $HH_income = $_POST['HH_income'];
  $marital = $_POST['marital'];
  $education = $_POST['education'];

  if ($_REQUEST['captcha'] == $_SESSION['captcha']) {
    $db = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_DATABASE);
    if (!$db->set_charset("utf8")) { $errors[] = $db->error; }
    $sql1 = "UPDATE j_users SET fullname = '".$fullname."', mobile = '".$mobile."' WHERE email = '".$email."';";
    // echo $sql1;
    $query = $db->query($sql1);
    if ($query) { echo mksuccess("คุณได้ทำการแก้ไขข้อมูลของคุณเป็นที่เรียบร้อยแล้ว"); }
    $sql2 = "INSERT INTO j_users_logs (userid, ip, data) VALUE ('".$_SESSION["userid"]."', '".$_SESSION["ip"]."', '".$_SESSION["email"]." changed info');";
    // echo $sql2;
    $db->query($sql2);
    $notes = array (array("title" => "Profile updated", "text" => "คุณได้ทำการแก้ไขข้อมูลของคุณเป็นที่เรียบร้อยแล้ว", "image" => "assets/img/notification.svg"));
  }
  else { echo mkerror("คุณใส่ตัวเลขและตัวอักษรตามรูปภาพไม่ถูกต้อง"); }
}

?>

<hr>

<form id="changeinfo" class="form-horizontal" method="post" action="<?php echo(htmlspecialchars(ME)); ?>">
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">อีเมล์</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <div class="input-group">
        <span class="input-group-addon"><i class="pe-envelope pe-fw"></i></span>
        <input type="text" name="email" class="form-control" placeholder="<?php echo $_SESSION['email']; ?>" disabled>
      </div>
      <input type="hidden" name="email" value="<?php echo $_SESSION['email']; ?>">
      <span class="red" style="font-size:0.8rem">If you need to change this, please contact us separately.</span>
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
    <input type="hidden" name="w" value="changeinfo">
    <button class="btn btn-info" name="Change" type="submit">เปลี่ยน <i class="pe-check-circle-o"></i></button>
    <button class="btn btn-default" name="Cancel" type="reset">ยกเลิก <i class="pe-times-circle-o"></i></button>
  </p>
</form>
<script>
  $(document).ready(function() {
    $('#changeinfo').formValidation({
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

<!-- <a href="/public/?w=activity" class="btn btn-danger btn-sm pull-right" style="margin-top:50px; margin-bottom: 20px"><i class="pe-chevron-circle-left pe-fw"></i> Back to My Profile</a> -->

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
