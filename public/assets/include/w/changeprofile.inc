<?php

if (empty($_SESSION["captcha"])) {
  require INCLUDEADM.'/captcha.inc';
  $captcha_length = 8;
  $rText = generateRandom($captcha_length);
  $_SESSION["captcha"] = $rText;
}

if (isset($_REQUEST['captcha'])) {
  if ($_REQUEST['captcha'] != $_SESSION['captcha']) {
    if (change_profile($respondent['username'], $respondent['realm'], $_REQUEST['fname'], $_REQUEST['lname'], $respondent['username'])) {
      echo(mksuccess('Your profile has been successfully updated.'));
      return;
    } else { echo(mkerror('Error updating your profie.')); }
  } else { echo(mkerror('Wrong captcha.')); }
}

?>
<form id="changeprofile" class="form-horizontal" method="post" id="profile_change" action="<?php echo htmlspecialchars(ME); ?>">
  <h2>แก้ไขข้อมูลของคุณ</h2>
  <p>คุณสามารถแก้ไขข้อมูลของคุณได้ที่นี่</p>
  <p>เราอนุญาตให้แก้ไขได้เพียงข้อมูลที่เหมาะสมเท่านั้น ขอสงวนสิทธิ์ในการจำกัดการแก้ไขสำหรับบางข้อมูลเช่นอีเมล์เนื่องจากเป็นข้อมูลหลักสำหรับใช้ในการล็อคอินเข้าระบบด้วยนั่นเอง</p>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">ล็อคอิน</label>
      <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
        <div class="input-group">
          <span class="input-group-addon"><i class="pe-envelope pe-fw"></i></span>
          <input type="text" name="username" class="form-control" value="<?php echo $respondent['username']; ?>" disabled>
        </div>
        <input type="hidden" name="username" value="<?php echo $respondent['username']; ?>">
     </div>
  </div>
  <hr>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">ชื่อ</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <div class="input-group">
        <span class="input-group-addon"><i class="pe-cog pe-fw"></i></span>
        <input type="text" name="fname" class="form-control" value="<?php echo $respondent['fname']; ?>" placeholder="ชื่อของคุณ">
      </div>
    </div>
  </div>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">นามสกุล</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <div class="input-group">
        <span class="input-group-addon"><i class="pe-cog pe-fw"></i></span>
        <input type="text" name="lname" class="form-control" value="<?php echo $respondent['lname']; ?>" placeholder="นามสกุลของคุณ">
      </div>
    </div>
  </div>
  <hr>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">เพศ</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <div class="input-group">
        <span class="input-group-addon"><i class="pe-cog pe-fw"></i></span>
        <input type="text" name="gender" class="form-control" value="<?php echo $respondent['gender']; ?>" disabled>
      </div>
      <input type="hidden" name="gender" value="<?php echo $respondent['gender']; ?>">
    </div>
  </div>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">วันเกิด</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <div class="input-group">
        <span class="input-group-addon">วันที่</span>
        <input type="text" name="birthday_date" class="form-control" value="<?php echo $respondent['birthday_date']; ?>" disabled>
        <span class="input-group-addon">เดือน</span>
        <input type="text" name="birthday_month" class="form-control" value="<?php echo $respondent['birthday_month']; ?>" disabled>
        <span class="input-group-addon">ปี</span>
        <input type="text" name="birthday_year" class="form-control" value="<?php echo $respondent['birthday_year']; ?>" disabled>
      </div>
      <input type="hidden" name="birthday_date" value="<?php echo $respondent['birthday_date']; ?>">
      <input type="hidden" name="birthday_month" value="<?php echo $respondent['birthday_month']; ?>">
      <input type="hidden" name="birthday_year" value="<?php echo $respondent['birthday_year']; ?>">
    </div>
  </div>
  <hr>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">ปัจจุบันอาศัยอยู่</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <select class="form-control input-sm" name="province">
        <option value="" selected>--------- เลือกจังหวัด ---------</option>
        <option value="กรุงเทพมหานคร">กรุงเทพมหานคร</option>
        <option value="กระบี่">กระบี่</option>
        <option value="กาญจนบุรี">กาญจนบุรี</option>
        <option value="กาฬสินธุ์">กาฬสินธุ์</option>
        <option value="กำแพงเพชร">กำแพงเพชร</option>
        <option value="ขอนแก่น">ขอนแก่น</option>
        <option value="จันทบุรี">จันทบุรี</option>
        <option value="ฉะเชิงเทรา">ฉะเชิงเทรา</option>
        <option value="ชัยนาท">ชัยนาท</option>
        <option value="ชัยภูมิ">ชัยภูมิ</option>
        <option value="ชุมพร">ชุมพร</option>
        <option value="ชลบุรี">ชลบุรี</option>
        <option value="เชียงใหม่">เชียงใหม่</option>
        <option value="เชียงราย">เชียงราย</option>
        <option value="ตรัง">ตรัง</option>
        <option value="ตราด">ตราด</option>
        <option value="ตาก">ตาก</option>
        <option value="นครนายก">นครนายก</option>
        <option value="นครปฐม">นครปฐม</option>
        <option value="นครพนม">นครพนม</option>
        <option value="นครราชสีมา">นครราชสีมา</option>
        <option value="นครศรีธรรมราช">นครศรีธรรมราช</option>
        <option value="นครสวรรค์">นครสวรรค์</option>
        <option value="นราธิวาส">นราธิวาส</option>
        <option value="น่าน">น่าน</option>
        <option value="นนทบุรี">นนทบุรี</option>
        <option value="บึงกาฬ">บึงกาฬ</option>
        <option value="บุรีรัมย์">บุรีรัมย์</option>
        <option value="ประจวบคีรีขันธ์">ประจวบคีรีขันธ์</option>
        <option value="ปทุมธานี">ปทุมธานี</option>
        <option value="ปราจีนบุรี">ปราจีนบุรี</option>
        <option value="ปัตตานี">ปัตตานี</option>
        <option value="พะเยา">พะเยา</option>
        <option value="พระนครศรีอยุธยา">พระนครศรีอยุธยา</option>
        <option value="พังงา">พังงา</option>
        <option value="พิจิตร">พิจิตร</option>
        <option value="พิษณุโลก">พิษณุโลก</option>
        <option value="เพชรบุรี">เพชรบุรี</option>
        <option value="เพชรบูรณ์">เพชรบูรณ์</option>
        <option value="แพร่">แพร่</option>
        <option value="พัทลุง">พัทลุง</option>
        <option value="ภูเก็ต">ภูเก็ต</option>
        <option value="มหาสารคาม">มหาสารคาม</option>
        <option value="มุกดาหาร">มุกดาหาร</option>
        <option value="แม่ฮ่องสอน">แม่ฮ่องสอน</option>
        <option value="ยโสธร">ยโสธร</option>
        <option value="ยะลา">ยะลา</option>
        <option value="ร้อยเอ็ด">ร้อยเอ็ด</option>
        <option value="ระนอง">ระนอง</option>
        <option value="ระยอง">ระยอง</option>
        <option value="ราชบุรี">ราชบุรี</option>
        <option value="ลพบุรี">ลพบุรี</option>
        <option value="ลำปาง">ลำปาง</option>
        <option value="ลำพูน">ลำพูน</option>
        <option value="เลย">เลย</option>
        <option value="ศรีสะเกษ">ศรีสะเกษ</option>
        <option value="สกลนคร">สกลนคร</option>
        <option value="สงขลา">สงขลา</option>
        <option value="สมุทรสาคร">สมุทรสาคร</option>
        <option value="สมุทรปราการ">สมุทรปราการ</option>
        <option value="สมุทรสงคราม">สมุทรสงคราม</option>
        <option value="สระแก้ว">สระแก้ว</option>
        <option value="สระบุรี">สระบุรี</option>
        <option value="สิงห์บุรี">สิงห์บุรี</option>
        <option value="สุโขทัย">สุโขทัย</option>
        <option value="สุพรรณบุรี">สุพรรณบุรี</option>
        <option value="สุราษฎร์ธานี">สุราษฎร์ธานี</option>
        <option value="สุรินทร์">สุรินทร์</option>
        <option value="สตูล">สตูล</option>
        <option value="หนองคาย">หนองคาย</option>
        <option value="หนองบัวลำภู">หนองบัวลำภู</option>
        <option value="อำนาจเจริญ">อำนาจเจริญ</option>
        <option value="อุดรธานี">อุดรธานี</option>
        <option value="อุตรดิตถ์">อุตรดิตถ์</option>
        <option value="อุทัยธานี">อุทัยธานี</option>
        <option value="อุบลราชธานี">อุบลราชธานี</option>
        <option value="อ่างทอง">อ่างทอง</option>
        <option value="อื่นๆ">อื่นๆ</option>
      </select>
    </div>
  </div>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">หมายเลขโทรศัพท์มือถือ</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <div class="input-group">
        <input type="text" size="3" name="mobile1" class="form-control" placeholder="081">
        <span class="input-group-addon"><i class="pe-minus pe-fw"></i></span>
        <input type="text" size="3" name="mobile2" class="form-control" placeholder="833">
        <span class="input-group-addon"><i class="pe-minus pe-fw"></i></span>
        <input type="text" size="4" name="mobile3" class="form-control" placeholder="4444">
      </div>
    </div>
  </div>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">รายได้ส่วนบุคคล</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <div class="radio radio-primary">
        <input type="radio" id="L1" name="personal_income" value="L1"><label for="L1">60,000 บาทต่อเดือนหรือมากกว่า</label>
      </div>
      <div class="radio radio-primary">
        <input type="radio" id="L2" name="personal_income" value="L2"><label for="L2">50,001-60,000 บาทต่อเดือน</label>
      </div>
      <div class="radio radio-primary">
        <input type="radio" id="L3" name="personal_income" value="L3"><label for="L3">34,501-50,000 บาทต่อเดือน</label>
      </div>
      <div class="radio radio-primary">
        <input type="radio" id="L4" name="personal_income" value="L4"><label for="L4">20,000-34,500 บาทต่อเดือน</label>
      </div>
      <div class="radio radio-primary">
        <input type="radio" id="L5" name="personal_income" value="L5"><label for="L5">ต่ำกว่า 20,000 บาทต่อเดือน</label>
      </div>
    </div>
  </div>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">รายได้ครัวเรือน</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <div class="radio radio-primary">
        <input type="radio" id="SES-A" name="HH_income" value="SES-A"><label for="SES-A">60,000 บาทต่อเดือนหรือมากกว่า</label>
      </div>
      <div class="radio radio-primary">
        <input type="radio" id="SES-B" name="HH_income" value="SES-B"><label for="SES-B">50,001-60,000 บาทต่อเดือน</label>
      </div>
      <div class="radio radio-primary">
        <input type="radio" id="SES-C" name="HH_income" value="SES-C"><label for="SES-C">34,501-50,000 บาทต่อเดือน</label>
      </div>
      <div class="radio radio-primary">
        <input type="radio" id="SES-D" name="HH_income" value="SES-D"><label for="SES-D">20,000-34,500 บาทต่อเดือน</label>
      </div>
      <div class="radio radio-primary">
        <input type="radio" id="SES-E" name="HH_income" value="SES-E"><label for="SES-E">ต่ำกว่า 20,000 บาทต่อเดือน</label>
      </div>
    </div>
  </div>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">สถานะภาพสมรส</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <div class="radio radio-primary">
        <input type="radio" id="A1" name="marital" value="A1"><label for="A1">โสด</label>
      </div>
      <div class="radio radio-primary">
        <input type="radio" id="A2" name="marital" value="A2"><label for="A2">สมรส ไม่มีบุตร</label>
      </div>
      <div class="radio radio-primary">
        <input type="radio" id="A3" name="marital" value="A3"><label for="A3">สมรส มีบุตร</label>
      </div>
      <div class="radio radio-primary">
        <input type="radio" id="A4" name="marital" value="A4"><label for="A4">หย่า ม่าย แยกทาง แยกกันอยู่</label>
      </div>
    </div>
  </div>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">ระดับการศึกษา</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <div class="radio radio-primary">
        <input type="radio" id="B1" name="education" value="B1"><label for="B1">ประถมศึกษา</label>
      </div>
      <div class="radio radio-primary">
        <input type="radio" id="B2" name="education" value="B2"><label for="B2">มัธยมศึกษา</label>
      </div>
      <div class="radio radio-primary">
        <input type="radio" id="B3" name="education" value="B3"><label for="B3">อาชีวะ อนุปริญญา</label>
      </div>
      <div class="radio radio-primary">
        <input type="radio" id="B4" name="education" value="B4"><label for="B4">ปริญญาตรี</label>
      </div>
      <div class="radio radio-primary">
        <input type="radio" id="B5" name="education" value="B5"><label for="B5">ปริญญาโทหรือสูงกว่า</label>
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
        <input type="text" name="captcha" class="form-control" placeholder="พิมพ์ตัวอักษรที่แสดงในภาพนี้">
      </div>
    </div>
  </div>
  <hr>
  <p class="text-center">
    <input type="hidden" name="w" value="changeprofile">
    <button type="submit" class="btn btn-warning">Change <i class="pe-check-circle-o"></i></button>
    <button type="submit" class="btn btn-default">Cancel</button>
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
        // username: { validators: { notEmpty: { message: 'กรุณาระบุอีเมล์ที่ถูกต้อง' }, emailAddress: { message: 'คุณกรอกอีเมล์ไม่ถูกต้อง' } } },
        fname: { validators: { notEmpty: { message: 'กรุณาระบุชื่อจริงของคุณ' } } },
        lname: { validators: { notEmpty: { message: 'กรุณาระบุนามสกุลจริงของคุณ' } } },
        // gender: { validators: { notEmpty: { message: 'กรุณาเลือกเพศ' } } },
        // birthday_date: { validators: { notEmpty: { message: 'กรุณาเลือกวันเกิด' } } },
        // birthday_month: { validators: { notEmpty: { message: 'กรุณาเลือกเดือนเกิด' } } },
        // birthday_year: { validators: { notEmpty: { message: 'กรุณาเลือกปีเกิด' } } },
        province: { validators: { notEmpty: { message: 'กรุณาเลือกจังหวัด' } } },
        mobile1: { validators: { notEmpty: { message: 'กรุณาระบุหมายเลขโทรศัพท์มือถือที่ติดต่อได้จริง' } } },
        mobile2: { validators: { notEmpty: { message: 'กรุณาระบุหมายเลขโทรศัพท์มือถือที่ติดต่อได้จริง' } } },
        mobile3: { validators: { notEmpty: { message: 'กรุณาระบุหมายเลขโทรศัพท์มือถือที่ติดต่อได้จริง' } } },
        personal_income: { validators: { notEmpty: { message: 'กรุณาเลือกรายได้ส่วนบุคคล' } } },
        HH_income: { validators: { notEmpty: { message: 'กรุณาเลือกรายได้ครัวเรือน' } } },
        marital: { validators: { notEmpty: { message: 'กรุณาเลือกสถานะภาพสมรส' } } },
        education: { validators: { notEmpty: { message: 'กรุณาเลือกระดับการศึกษา' } } },
        captcha: { validators: { notEmpty: { message: 'กรุณาใส่ตัวอักษรตามรูปภาพ' }, stringLength: { min: 8, message: 'ตัวอักษรนี้จะต้องมีจำนวนทั้งสิ้น 8 ตัวอักษร' } } }
      }
    });
  });
</script>
