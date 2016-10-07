<?php

$title = 'Contact us';
require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/config.php';
require_once INCLUDEPUB.'/template.php';
require_once INCLUDEPUB.'/first.php';

$sent = false;

if (empty($_SESSION["captcha"])) { $clength = 8; $rText = generateRandom($clength); $_SESSION["captcha"] = $rText; }

if (isset($_REQUEST['captcha'])) {

  $name = cleanstring($_REQUEST['name']);
  $email = cleanstring($_REQUEST['email']);
  $message = cleanstring($_REQUEST['message']);
  $captcha = cleanstring($_REQUEST['captcha']);

  if (!$name) { echo "Error: No name provided.\n"; exit; }
  if (!$email) { echo "Error: No email provided.\n"; exit; }
  if (!$message) { echo "Error: No message provided.\n"; exit; }
  if (!$captcha) { echo "Error: No answer to captcha.\n"; exit; }

  $from = "From: ".$email;
  $subject = '[siamsquare.org] contact query from '.$email;
  $body = "----- Header --------------- \n\n";
  $body .= "From: $name ($email)\n\n";
  $body .= "Channel: http://www.siamsquare.org\n\n";
  $body .= "Source: public/contact\n\n";
  $body .= "----- Detail --------------- \n\n";
  $body .= "Message:\n\n$message\n\n";
  $headers = 'From: '.$email."\r\n" .
             'Reply-To: '.$email."\r\n" .
             'X-Mailer: PHP/' . phpversion();

  if ($_REQUEST['captcha'] == $_SESSION['captcha']) { @mail(MYEMAIL, $subject, $body, $headers); $msg = mksuccess("ข้อความของคุณได้ถูกส่งเป็นที่เรียบร้อยแล้ว เราจะติดต่อกลับมาหาคุณเร็วๆนี้"); $sent = true; }
  else { $msg = mkerror("คุณใส่ตัวเลขและตัวอักษรตามรูปภาพไม่ถูกต้อง"); }
}

pageHeader($title);
echo "<h2>ติดต่อเรา</h2>\n";
echo "<p>คุณสามารถใช้แบบฟอร์มในหน้านี้เพื่อส่งข้อความหาเราได้ทุกเวลาตามที่คุณต้องการ</p>\n";
echo "<p>เรา <i class=\"pe-heart\"></i> ที่จะได้รับฟังความคิดเห็นจากคุณ</p>\n";
echo "<br>\n";
if ($msg) { echo $msg; }
echo "<br>\n";

?>

<form id="contactus" class="form-horizontal" role="form" method="post" action="<?php echo htmlspecialchars(ME); ?>">
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">ชื่อของคุณ</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <div class="input-group">
        <span class="input-group-addon"><i class="pe-user pe-fw"></i></span>
        <?php if ($sent) { ?>
        <input type="text" class="form-control" name="name" placeholder="ชื่อและนามสกุลของคุณ" value="<?php echo htmlspecialchars($name); ?>" disabled>
        <?php } else { ?>
        <input type="text" class="form-control" name="name" placeholder="ชื่อและนามสกุลของคุณ" value="<?php echo htmlspecialchars($name); ?>">
        <?php } ?>
      </div>
    </div>
  </div>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">อีเมล์ของคุณ</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <div class="input-group">
        <span class="input-group-addon"><i class="pe-envelope pe-fw"></i></span>
        <?php if ($sent) { ?>
        <input type="email" class="form-control" name="email" placeholder="อีเมล์@โดเมน.คอม" value="<?php echo htmlspecialchars($email); ?>" disabled>
        <?php } else { ?>
        <input type="email" class="form-control" name="email" placeholder="อีเมล์@โดเมน.คอม" value="<?php echo htmlspecialchars($email); ?>">
        <?php } ?>
      </div>
    </div>
  </div>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">ข้อความ</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <div class="input-group">
        <span class="input-group-addon input-group-addon-top"><i class="pe-commenting pe-fw"></i></span>
        <?php if ($sent) { ?>
        <textarea class="form-control" rows="7" name="message" placeholder="คุณสามารถพิมพ์ข้อความได้ยาวเท่าที่ต้องการในช่องนี้" disabled><?php echo htmlspecialchars($message);?></textarea>
        <?php } else { ?>
        <textarea class="form-control" rows="7" name="message" placeholder="คุณสามารถพิมพ์ข้อความได้ยาวเท่าที่ต้องการในช่องนี้"><?php echo htmlspecialchars($message);?></textarea>
        <?php } ?>
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
        <?php if ($sent) { ?>
          <input type="text" name="captcha" class="form-control" placeholder="พิมพ์ตัวอักษรที่แสดงในภาพนี้" value="<?php echo htmlspecialchars($captcha); ?>" disabled>
        <?php } else { ?>
        <input type="text" name="captcha" class="form-control" placeholder="พิมพ์ตัวอักษรที่แสดงในภาพนี้" value="<?php echo htmlspecialchars($captcha); ?>">
        <?php } ?>
      </div>
    </div>
  </div>
  <hr>
  <p class="text-center">
    <?php if ($sent) { ?>
    <button type="submit" class="btn btn-info" disabled>ส่งข้อความ <i class="pe-paper-plane"></i></button>
    <?php } else { ?>
    <button type="submit" class="btn btn-info">ส่งข้อความ <i class="pe-paper-plane"></i></button>
    <?php } ?>
    <button type="submit" class="btn btn-default">Cancel</button>
  </p>
</form>
<script>
  $(document).ready(function() {
    $('#contactus').formValidation({
      framework: 'bootstrap',
      icon: { valid: 'pe-check', invalid: 'pe-times', validating: 'pe-refresh' },
      button: { selector: '[type="submit"]', disabled: '' },
      excluded: ':disabled',
      fields: {
        name: { validators: { notEmpty: { message: 'กรุณาระบุชื่อและนามสกุลจริงของคุณ' }, } },
        email: { validators: { notEmpty: { message: 'กรุณาระบุอีเมล์ที่ถูกต้อง' }, emailAddress: { message: 'คุณกรอกอีเมล์ไม่ถูกต้อง' } } },
        message: { validators: { notEmpty: { message: 'กรุณาพิมพ์ข้อความที่คุณต้องการส่งถึงเรา' } } },
        captcha: { validators: { notEmpty: { message: 'กรุณาใส่ตัวเลขและตัวอักษรตามรูปภาพ' }, stringLength: { min: 8, message: 'ตัวเลขและตัวอักษรนี้จะต้องมีจำนวนทั้งสิ้น 8 ตัวอักษร' } } }
      }
    });
    $("div.alert").addClass("alert-th");
  });
</script>

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
