<?php

$title = "สมาชิกล็อคอินเข้าสู่ระบบ";
pageHeader($title);
echo "<h2>$title</h2>";
echo "<p>ระบบของเราถูกสร้างขึ้นมาสำหรับสมาชิกโดยเฉพาะ นั่นหมายถึงว่าผู้ที่ไม่ได้เป็นสมาชิกจะไม่สามารถใช้ระบบของเราได้นั่นเอง ดังนั้นหากคุณมีความประสงค์จะเข้าร่วมกับเรา คุณจะต้องเป็นสมาชิกก่อนเท่านั้น ซึ่งอาจจะทำได้โดยการสมัครด้วยตัวเองหรือต้องได้รับการเชิญจากสมาชิกท่านอื่นเท่านั้น (ขึ้นอยู่กับการจัดการสมาชิกของเราในขณะนั้นๆ)</p>\n";
echo "<p>สำหรับผู้ที่เป็นสมาชิกอยู่แล้ว คุณจะต้องทำการล็อคอินเข้าสู่ระบบก่อน และหลังจากล็อคอินเรียบร้อยแล้วคุณจะสามารถทำรายการอื่นๆ โดยเฉพาะการเข้าร่วมงานวิจัยตลาดที่มองหากลุ่มเป้าหมายเป็นคนอย่างคุณ</p>\n";

if (isset($login)) {
  if ($login->errors) { foreach ($login->errors as $error) { echo $error; } }
  if ($login->messages) { foreach ($login->messages as $message) { echo $message; } }
}

echo "<br>\n";

?>

<form id="respondentlogin" method="post" class="form-horizontal" action="<?php echo(htmlspecialchars(ME)); ?>">
  <div class="form-group">
    <label for="username" class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">อีเมล์</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <div class="input-group">
        <span class="input-group-addon"><i class="pe-envelope pe-fw"></i></span>
        <input type="text" name="email" id="email" class="form-control" placeholder="email@domain.com" autofocus>
      </div>
    </div>
  </div>
  <div class="form-group">
    <label for="password" class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">รหัสผ่าน</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <div class="input-group">
        <span class="input-group-addon"><i class="pe-key pe-fw"></i></span>
        <input type="password" name="password" id="password" class="form-control" placeholder="Password">
      </div>
    </div>
  </div>
  <br>
  <p class="text-center">
    <input type="hidden" name="do" value="login">
    <button class="btn btn-info" name="Login" type="submit">ล็อคอิน <i class="pe-check-circle-o"></i></button>
    <button class="btn btn-default" name="Cancel" type="reset">ยกเลิก <i class="pe-times-circle-o"></i></button>
  </p>
</form>
<script>
  $(document).ready(function() {
    $('#respondentlogin').formValidation({
      framework: 'bootstrap',
      icon: { valid: 'pe-check', invalid: 'pe-times', validating: 'pe-refresh' },
      button: { selector: '[type="submit"]', disabled: '' },
      excluded: ':disabled',
      fields: {
        email: { validators: { notEmpty: { message: 'กรุณาระบุอีเมล์ของคุณ' }, emailAddress: { message: 'คุณกรอกอีเมล์ไม่ถูกต้อง' } } },
        password: { validators: { notEmpty: { message: 'กรุณาระบุรหัสผ่านของคุณ' }, stringLength: { min: 4, message: 'รหัสผ่านจะต้องมีอย่างต่ำจำนวน 6 ตัวอักษรหรือตัวเลขผสมกัน' }, different: { field: 'username', message: 'รหัสผ่านต้องไม่เหมือนกับชื่อล็อคอิน' } } }
      }
    });
  });
</script>
<div class="alert alert-info alert-dismissible alert-eng" role="alert"><a class="close" data-dismiss="alert" aria-label="close">&times;</a>
  <h4><i class="pe-exclamation-triangle pe-fw pe-lg"></i> Unauthorised access to this system is prohibited by law</h4>
  <p>You are accessing a private computer network which includes: (1) this machine, (2) this computer network, (3) all computers/servers connected to this network, and (4) all devices and storage media attached to this network or to a computer on this network. This information system is provided for registered clients authorised use only. Unauthorized or improper use of this system may result in disciplinary action, as well as civil and criminal penalties.</p>
  <p>If you do not have an access, please contact sales for setting up a master login/password for your company.</p>
  <p>By using this information system, you understand and consent to the following:</p>
  <ul class="pe-ul">
    <li><i class="pe-li pe-check-square"></i> You have no reasonable expectation of privacy regarding any communication or data transiting or stored on this information system. At any time, and for any lawful purpose, we may monitor, intercept, and search and seize any communication or data transiting or stored on this information system.</li>
    <li><i class="pe-li pe-check-square"></i> Any communication or data transiting or stored on this information system may be disclosed or used for any lawful purpose.</li>
    <li><i class="pe-li pe-check-square"></i> Information you see must not be shared to the public due to our terms of confidentiality.</li>
  </ul>
</div>

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
