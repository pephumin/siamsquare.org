<?php

$title = "สมัครสมาชิกใหม่ด้วยอีเมล์";
require_once $_SERVER['DOCUMENT_ROOT'].'/members/assets/include/config.php';

pageHeader($title);
echo "<h2>$title</h2>\n";
echo "<p>เราเปิดรับสมาชิกใหม่อยู่ <strong>รีบสมัครเลยเพราะเรารับจำนวนจำกัดเท่านั้น</strong></p>\n";
echo "<p>สมาชิกจะได้รับสิทธิ์การเข้าร่วมวิจัยตลาด เพื่อแลกรับของรางวัลและคะแนนสะสม สมาชิกจะไม่มีค่าใช้จ่ายใดๆ</p>\n";
echo "<p>การสมัครสมาชิกนั้น สามารถทำได้ง่ายๆด้วยตัวคุณเอง ขั้นตอนง่ายๆไม่ยุ่งยาก <strong>จะใช้เวลาไม่เกินสามนาทีเท่านั้น</strong> เพียงแค่คุณกรอกข้อมูลตามที่กำหนดให้ครบถ้วนถูกต้อง <strong>และที่สำคัญตรงตามความจริง</strong> ตามแบบฟอร์มด้านล่างนี้และกดส่งมาหาเรา ทีมงานจะทำการยืนยันความถูกต้องกับคุณอีกครั้ง และจะเปิดบัญชีสมาชิกให้คุณใช้งานในทันที</p>\n";
if ($msg) { echo $msg; }
echo "<br>\n";

$sent = false;

$fields = array('username','password','email','fname','lname');

if (isset($_POST['submit'])) {
  if (isset($msg)) { break; }
  $checksql = "SELECT id FROM ".X_RESPONDENT." WHERE username = "._addslashes($_POST['email']);
  $checkresult = execute_sql($checksql);
  if (record_count($checkresult) > 0) { $msg = mkerror("อีเมล์นี้มีอยู่ในระบบแล้ว คุณไม่ควรสมัครสมาชิกใหม่ คุณควรจะทำรายการด้วยการกู้รหัสผ่าน"); break; }
  db_close($checkresult);
  $sqlf = array(); $sqlv = array();
  foreach ($fields as $f) {
    if (isset($_POST[$f]) && !empty($_POST[$f])) {
      array_push($sqlf, $f);
      if ($f == 'password') { array_push($sqlv, db_crypt(_addslashes($_POST[$f]))); }
      else { array_push($sqlv,  _addslashes($_POST[$f]) ); }
    }
  }
  array_push($sqlf, 'realm'); array_push($sqlv, 'RD-Email');
  $sqlf = implode(',', $sqlf); $sqlv = implode(',', $sqlv);
  $sql = "INSERT INTO ".X_RESPONDENT." ($sqlf) VALUES ($sqlv)";
  $res = execute_sql($sql);
  if ($res) { $msg = mksuccess("ระบบได้ดำเนินการสมัครสมาชิกใหม่ให้กับคุณเป็นที่เรียบร้อยแล้ว กรุณาล็อคอินเพื่อเริ่มต้นใช้งานได้ทันที"); }
  foreach ($fields as $f) { $_POST[$f] = null; unset($_POST[$f]); }
}

?>

<form id="signup" method="post" class="form-horizontal" action="<?php echo htmlspecialchars(ME); ?>">
  <h4>ตั้งค่าล็อคอิน</h4>
  <section data-step="0">
    <legend>ลงทะเบียนใหม่ เริ่มต้นด้วยการตั้งค่าล็อคอินของคุณ</legend>
    <div class="form-group">
      <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">อีเมล์ <span style="font-weight: bold; color: red">*</span></label>
      <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
        <div class="input-group">
          <span class="input-group-addon"><i class="pe-envelope pe-fw"></i></span>
          <input type="email" name="username" class="form-control" placeholder="email@domain.com">
        </div>
      </div>
    </div>
    <div class="form-group">
      <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">ตั้งรหัสผ่าน</label>
      <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
        <div class="input-group">
          <span class="input-group-addon"><i class="pe-key pe-fw"></i></span>
          <input type="password" name="password" class="form-control" placeholder="Password">
        </div>
      </div>
    </div>
    <div class="form-group">
      <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">รหัสผ่านอีกครั้ง</label>
      <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
        <div class="input-group">
          <span class="input-group-addon"><i class="pe-key pe-fw"></i></span>
          <input type="password" name="password2" class="form-control" placeholder="Password again">
        </div>
      </div>
    </div>
    <p class="footnote">(*) กรุณากรอกข้อมูลนี้ด้วยความระมัดระวัง เนื่องจากคุณจะไม่สามารถเปลี่ยนแปลงข้อมูลนี้ได้อีก</p>
  </section>
  <h4>ข้อมูลพื้นฐาน</h4>
  <section data-step="1">
    <legend>ทางบริษัทขอสงวนสิทธิ์สำหรับผู้ที่ให้ข้อมูลถูกต้องเท่านั้น หากพบว่าข้อมูลที่ไม่ตรงตามจริง ทุกอย่างจะถือเป็นโมฆะทันที และหากพบว่าข้อมูลเป็นเท็จ คุณอาจถูกดำเนินคดีตาม พรบ.คอมพิวเตอร์ฯ</legend>
    <div class="form-group">
      <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">ชื่อ</label>
      <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
        <input type="text" name="fname" class="form-control" placeholder="First name">
      </div>
    </div>
    <hr>
    <div class="form-group">
      <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">นามสกุล</label>
      <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
        <input type="text" name="lname" class="form-control" placeholder="Last name">
      </div>
    </div>
    <hr>
    <div class="form-group">
      <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">เพศ <span style="font-weight: bold; color: red">*</span></label>
      <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
<?php
  $xml = new SimpleXMLElement (file_get_contents(MYXML."/gender.xml"));
  foreach ($xml as $a) { $aa = $a['id']; echo "        <div class=\"radio radio-success radio-inline\"><input type=\"radio\" id=\"$aa\" name=\"gender\" value=\"$aa\"><label for=\"$aa\">$a</label></div>\n"; }
?>
      </div>
    </div>
    <hr>
    <div class="form-group">
      <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">วันเกิด <span style="font-weight: bold; color: red">*</span></label>
      <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7 form-group">
        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <label class="control-label">วันที่</label>
          <select class="form-control input-sm" name="birthday_date">
            <option value="" selected>--วันที่--</option>
<?php
  $xml = new SimpleXMLElement (file_get_contents(MYXML."/date.xml"));
  foreach ($xml as $a) { echo "            <option value=\"$a\">$a</option>\n"; }
?>
          </select>
        </div>
        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <label class="control-label">เดือน</label>
          <select class="form-control input-sm" name="birthday_month">
            <option value="" selected>--เดือน--</option>
<?php
  $xml = new SimpleXMLElement (file_get_contents(MYXML."/month.xml"));
  foreach ($xml as $a) { $aa = $a['id']; echo "            <option value=\"$aa\">$a</option>\n"; }
?>
          </select>
        </div>
        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <label class="control-label">ปี</label>
          <select class="form-control input-sm" name="birthday_year">
            <option value="" selected>--ปี--</option>
<?php
  $xml = new SimpleXMLElement (file_get_contents(MYXML."/year.xml"));
  foreach ($xml as $a) { echo "            <option value=\"$a\">$a</option>\n"; }
?>
          </select>
        </div>
      </div>
    </div>
    <hr>
    <div class="form-group">
      <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">ปัจจุบันอาศัยอยู่</label>
      <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
        <select class="form-control input-sm" name="province">
          <option value="" selected>--------- เลือกจังหวัด ---------</option>
<?php
  $xml = new SimpleXMLElement (file_get_contents(MYXML."/province.xml"));
  foreach ($xml as $a) { $aa = $a['id']; echo "          <option value=\"$aa\">$a</option>\n"; }
?>
        </select>
      </div>
    </div>
    <hr>
    <div class="form-group">
      <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">โทรศัพท์มือถือ</label>
      <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
        <div class="input-group">
          <input type="text" size="3" name="mobile1" class="form-control" placeholder="081">
          <span class="input-group-addon"><i class="pe-minus pe-fw"></i></span>
          <input type="text" size="3" name="mobile2" class="form-control" placeholder="888">
          <span class="input-group-addon"><i class="pe-minus pe-fw"></i></span>
          <input type="text" size="4" name="mobile3" class="form-control" placeholder="7777">
        </div>
      </div>
    </div>
    <p class="footnote">(*) กรุณากรอกข้อมูลนี้ด้วยความระมัดระวัง เนื่องจากคุณจะไม่สามารถเปลี่ยนแปลงข้อมูลนี้ได้อีก</p>
  </section>
  <h4>ข้อมูลส่วนบุคคล</h4>
  <section data-step="2">
    <legend>คุณต้องกรอก <strong>ข้อมูลจริงเท่านั้น</strong> เพราะข้อมูลเหล่านี้จะถูกนำไปใช้สำหรับการค้นหางานวิจัยที่ตรงกับคุณ เช่นงานวิจัยเกี่ยวกับเครื่องสำอางค์จะแสดงให้กับสมาชิกที่เป็นผู้หญิงเท่านั้น</legend>
    <div class="form-group">
      <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">รายได้ส่วนบุคคล</label>
      <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
<?php
  $xml = new SimpleXMLElement (file_get_contents(MYXML."/personal_income.xml"));
  foreach ($xml as $a) { $aa = $a['id']; echo "        <div class=\"radio radio-success\"><input type=\"radio\" id=\"$aa\" name=\"personal_income\" value=\"$aa\"><label for=\"$aa\">$a</label></div>\n"; }
?>
      </div>
    </div>
    <hr>
    <div class="form-group">
      <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">รายได้ครัวเรือน</label>
      <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
<?php
  $xml = new SimpleXMLElement (file_get_contents(MYXML."/HH_income.xml"));
  foreach ($xml as $a) { $aa = $a['id']; echo "        <div class=\"radio radio-success\"><input type=\"radio\" id=\"$aa\" name=\"HH_income\" value=\"$aa\"><label for=\"$aa\">$a</label></div>\n"; }
?>
      </div>
    </div>
    <hr>
    <div class="form-group">
      <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">สถานะภาพสมรส</label>
      <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
<?php
  $xml = new SimpleXMLElement (file_get_contents(MYXML."/marital.xml"));
  foreach ($xml as $a) { $aa = $a['id']; echo "        <div class=\"radio radio-success\"><input type=\"radio\" id=\"$aa\" name=\"marital\" value=\"$aa\"><label for=\"$aa\">$a</label></div>\n"; }
?>
      </div>
    </div>
    <hr>
    <div class="form-group">
      <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">ระดับการศึกษา</label>
      <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
<?php
  $xml = new SimpleXMLElement (file_get_contents(MYXML."/education.xml"));
  foreach ($xml as $a) { $aa = $a['id']; echo "        <div class=\"radio radio-success\"><input type=\"radio\" id=\"$aa\" name=\"education\" value=\"$aa\"><label for=\"$aa\">$a</label></div>\n"; }
?>
      </div>
    </div>
  </section>
  <h4>เงื่อนไขและข้อตกลง</h4>
  <section data-step="3">
    <legend>สุดท้ายนี้ กรุณาอ่านเงื่อนไขและข้อตกลงต่างๆ กรุณาทำเครื่องหมายในช่องล่างนี้เพื่อแสดว่าคุณยอมรับในข้อตกลงของเรา</legend>
    <div class="form-group">
      <iframe src="http://www.pebinary.com/about/print-tos.html" width="100%" height="400px" class="col-xs-12 col-sm-12 col-md-12 col-lg-12 control-label"></iframe>
    </div>
    <div class="form-group">
      <div class="col-xs-offset-0 col-sm-offset-3 col-md-offset-3 col-lg-offset-3 col-xs-12 col-sm-7 col-md-7 col-lg-7">
        <div class="checkbox checkbox-success">
          <input id="agree" type="checkbox"> <label for="agree">ฉันยอมรับในเงื่อนไขและข้อตกลงการใช้บริการ</label>
        </div>
      </div>
    </div>
    <!-- <div class="form-group">
      <div class="col-xs-offset-0 col-sm-offset-3 col-md-offset-3 col-lg-offset-3 col-xs-12 col-sm-7 col-md-7 col-lg-7">
        <button class="btn btn-info" name="submit" type="submit">Register <i class="pe-check-circle-o"></i></button> <button class="btn btn-default" name="cancel" type="reset">Cancel</button>
      </div>
    </div> -->
  </section>
</form>
<script>
  $(document).ready(function() {
    $('#signup').steps({
      headerTag: 'h4',
      bodyTag: 'section',
      transitionEffect: "none",
      enableFinishButton: true,
      enablePagination: true,
      enableAllSteps: true,
      stepsOrientation: "vertical",
      // onStepChanging: function(e, currentIndex, newIndex) {
      //   var fv = $('#signup').data('formValidation'),
      //   $container = $('#signup').find('section[data-step="' + currentIndex +'"]');
      //   fv.validateContainer($container);
      //   var isValidStep = fv.isValidContainer($container);
      //   if (isValidStep === false || isValidStep === null) { return false; }
      //   return true;
      // },
      onFinishing: function(e, currentIndex) {
        var fv = $('#signup').data('formValidation'),
        $container = $('#signup').find('section[data-step="' + currentIndex +'"]');
        fv.validateContainer($container);
        var isValidStep = fv.isValidContainer($container);
        if (isValidStep === false || isValidStep === null) { return false; }
        return true;
      },
      onFinished: function(e, currentIndex) {
        $('#signup').formValidation('defaultSubmit');
        // $('#welcomeModal').modal();
      },
      labels: {
        cancel: "ยกเลิก",
        current: "current step:",
        pagination: "Pagination",
        finish: 'เสร็จสิ้น <i class="pe-flag-checkered"></i>',
        next: 'ถัดไป <i class="pe-angle-double-right"></i>',
        previous: '<i class="pe-angle-double-left"></i> ย้อนกลับ',
        loading: "กำลังโหลด ..."
      }
    }).formValidation({
      framework: 'bootstrap',
      icon: { valid: 'pe-check', invalid: 'pe-times', validating: 'pe-refresh' },
      button: { selector: '[type="submit"]', disabled: '' },
      excluded: ':disabled',
      fields: {
        username: { validators: { notEmpty: { message: 'กรุณาระบุอีเมล์ที่ถูกต้อง' }, emailAddress: { message: 'คุณกรอกอีเมล์ไม่ถูกต้อง' } } },
        password: { validators: { notEmpty: { message: 'กรุณาระบุรหัสผ่าน' }, stringLength: { min: 6, message: 'รหัสผ่านจะต้องมีอย่างต่ำจำนวน 6 ตัวอักษรหรือตัวเลขผสมกัน' }, different: { field: 'username', message: 'รหัสผ่านต้องไม่เหมือนกับชื่อล็อคอิน' } } },
        password2: { validators: { notEmpty: { message: 'กรุณาระบุรหัสผ่านอีกครั้ง' }, stringLength: { min: 6, message: 'รหัสผ่านจะต้องมีอย่างต่ำจำนวน 6 ตัวอักษรหรือตัวเลขผสมกัน' }, identical: { field: 'password', message: 'ยืนยันรหัสผ่านจะต้องตรงกับรหัสผ่านด้านบน' } } },
        fname: { validators: { notEmpty: { message: 'กรุณาระบุชื่อจริงของคุณ' } } },
        lname: { validators: { notEmpty: { message: 'กรุณาระบุนามสกุลจริงของคุณ' } } },
        gender: { validators: { notEmpty: { message: 'กรุณาเลือกเพศ' } } },
        birthday_date: { validators: { notEmpty: { message: 'กรุณาเลือกวันเกิด' } } },
        birthday_month: { validators: { notEmpty: { message: 'กรุณาเลือกเดือนเกิด' } } },
        birthday_year: { validators: { notEmpty: { message: 'กรุณาเลือกปีเกิด' } } },
        province: { validators: { notEmpty: { message: 'กรุณาเลือกจังหวัด' } } },
        mobile1: { validators: { notEmpty: { message: 'กรุณาระบุหมายเลขโทรศัพท์มือถือที่ติดต่อได้จริง' }, stringLength: { min: 3, message: 'ต้องเป็นตัวเลขตัวจำนวนทั้งสิ้น 3 ตัว' }, regexp: { regexp: /^[0-9]+$/, message: 'ต้องเป็นตัวเลขเท่านั้น' } } },
        mobile2: { validators: { notEmpty: { message: 'กรุณาระบุหมายเลขโทรศัพท์มือถือที่ติดต่อได้จริง' }, stringLength: { min: 3, message: 'ต้องเป็นตัวเลขตัวจำนวนทั้งสิ้น 3 ตัว' }, regexp: { regexp: /^[0-9]+$/, message: 'ต้องเป็นตัวเลขเท่านั้น' } } },
        mobile3: { validators: { notEmpty: { message: 'กรุณาระบุหมายเลขโทรศัพท์มือถือที่ติดต่อได้จริง' }, stringLength: { min: 4, message: 'ต้องเป็นตัวเลขตัวจำนวนทั้งสิ้น 4 ตัว' }, regexp: { regexp: /^[0-9]+$/, message: 'ต้องเป็นตัวเลขเท่านั้น' } } },
        personal_income: { validators: { notEmpty: { message: 'กรุณาเลือกรายได้ส่วนบุคคล' } } },
        HH_income: { validators: { notEmpty: { message: 'กรุณาเลือกรายได้ครัวเรือน' } } },
        marital: { validators: { notEmpty: { message: 'กรุณาเลือกสถานะภาพสมรส' } } },
        education: { validators: { notEmpty: { message: 'กรุณาเลือกระดับการศึกษา' } } },
        agree: { validators: { notEmpty: { message: 'คุณต้องยอมรับในเงื่อนไขและข้อตกลงการใช้บริการ' } } }
      }
    });
  });
</script>
<br>
<h4>หมายเหตุสำคัญ​:</h4>
<p>คุณต้องกรอก <strong>ข้อมูลจริงเท่านั้น</strong> เพราะข้อมูลเหล่านี้จะถูกนำไปใช้สำหรับการค้นหางานวิจัยที่ตรงกับคุณ เช่นงานวิจัยเกี่ยวกับเครื่องสำอางค์จะแสดงให้กับสมาชิกที่เป็นผู้หญิงเท่านั้น ทางบริษัทขอสงวนสิทธิ์สำหรับผู้ที่ให้ข้อมูลถูกต้องเท่านั้น หากพบว่าข้อมูลที่ไม่ตรงตามจริง ทุกอย่างจะถือเป็นโมฆะทันที และหากพบว่าข้อมูลเป็นเท็จ คุณอาจถูกดำเนินคดีตาม พรบ.คอมพิวเตอร์ฯ</p>
<br>
<!-- <section class="signupwithsocial">
  <h2>สมัครสมาชิกใหม่โดยใช้บัญชีโซเซี่ยลเน็ตเวิร์ค</h2>
  <p>อีกทางเลือกหนึ่งที่เรามีให้สำหรับสมาชิกคือ การสมัครสมาชิกโดยใช้บัญชีโซเซี่ยลเน็ตเวิร์ค</p>
  <p>ในปัจจุบันระบบของเรารองรับสำหรับ 3 บัญชีโซเซี่ยลเน็ตเวิร์คหลักที่เป็นที่นิยม นั่นคือ:</p>
  <ul class="pe-ul">
    <li><i class="pe-li pe-check-square"></i> การสมัครสมาชิกโดยใช้บัญชีของ <i class="pe-facebook pe-fw"></i> Facebook</li>
    <li><i class="pe-li pe-check-square"></i> การสมัครสมาชิกโดยใช้บัญชีของ <i class="pe-twitter pe-fw"></i> Twitter</li>
    <li><i class="pe-li pe-check-square"></i> การสมัครสมาชิกโดยใช้บัญชีของ <i class="pe-google pe-fw"></i> Google</li>
  </ul>
</section> -->
<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
