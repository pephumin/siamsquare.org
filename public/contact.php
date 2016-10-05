<?php

$title = 'Contact us';
require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/config.php';
require_once INCLUDEPUB.'/template.php';
require_once INCLUDEPUB.'/first.php';

$sent = false;

if (isset($_REQUEST["name"])) {

  $name = cleanstring($_REQUEST['name']);
  $email = cleanstring($_REQUEST['email']);
  $message = cleanstring($_REQUEST['message']);
  $human = intval($_REQUEST['human']);
  $from = "From: ".$email;
  $subject = '[siamsquare.org] online query from '.$email;
  $body ="From: $name ($email)\nChannel: [siamsquare.org/public]\n\nMessage:\n$message\n\n";
  $headers = 'From: '.$email."\r\n" .
             'Reply-To: '.$email."\r\n" .
             'X-Mailer: PHP/' . phpversion();

  if ($human == 5) { if (@mail(MYEMAIL, $subject, $body, $headers)) { $msg = mksuccess("ข้อความของคุณได้ถูกส่งเป็นที่เรียบร้อยแล้ว เราจะติดต่อกลับมาหาคุณเร็วๆนี้"); $sent = true; } }
  else { $msg = mkerror("คุณตอบคำถามในช่องสุดท้ายไม่ถูกต้อง"); }

}

pageHeader($title);
echo "<h2>ติดต่อเรา</h2>\n";
echo "<p>คุณสามารถใช้แบบฟอร์มในหน้านี้เพื่อส่งข้อความหาเราได้ทุกเวลาตามที่คุณต้องการ</p>\n";
echo "<p>เรา <i class=\"pe-heart\"></i> ที่จะได้รับฟังความคิดเห็นจากคุณ</p>\n";
echo "<br>\n";
if ($msg) { echo $msg; }
echo "<br>\n";

?>

<form class="form-horizontal" role="form" method="post" action="<?php echo htmlspecialchars(ME); ?>">
  <div id="contactus">
    <div class="form-group">
      <label for="name" class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">ชื่อของคุณ</label>
      <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
        <div class="input-group">
          <span class="input-group-addon"><i class="pe-user pe-fw"></i></span>
          <?php if ($sent) { ?>
          <input type="text" class="form-control" name="name" placeholder="ชื่อและนามสกุลของคุณ" value="<?php echo htmlspecialchars($_REQUEST['name']); ?>" disabled>
          <?php } else { ?>
          <input type="text" class="form-control" name="name" placeholder="ชื่อและนามสกุลของคุณ" value="<?php echo htmlspecialchars($_REQUEST['name']); ?>">
          <?php } ?>
        </div>
      </div>
    </div>
    <div class="form-group">
      <label for="name" class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">อีเมล์ของคุณ</label>
      <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
        <div class="input-group">
          <span class="input-group-addon"><i class="pe-envelope pe-fw"></i></span>
          <?php if ($sent) { ?>
          <input type="email" class="form-control" name="email" placeholder="email@company.com" value="<?php echo htmlspecialchars($_REQUEST['email']); ?>" disabled>
          <?php } else { ?>
          <input type="email" class="form-control" name="email" placeholder="email@company.com" value="<?php echo htmlspecialchars($_REQUEST['email']); ?>">
          <?php } ?>
        </div>
      </div>
    </div>
    <div class="form-group">
      <label for="name" class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">ข้อความ</label>
      <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
        <div class="input-group">
          <span class="input-group-addon input-group-addon-top"><i class="pe-commenting pe-fw"></i></span>
          <?php if ($sent) { ?>
          <textarea class="form-control" rows="7" name="message" placeholder="คุณสามารถพิมพ์ข้อความได้ยาวเท่าที่ต้องการในช่องนี้" disabled><?php echo htmlspecialchars($_REQUEST['message']);?></textarea>
          <?php } else { ?>
          <textarea class="form-control" rows="7" name="message" placeholder="คุณสามารถพิมพ์ข้อความได้ยาวเท่าที่ต้องการในช่องนี้"><?php echo htmlspecialchars($_REQUEST['message']);?></textarea>
          <?php } ?>
        </div>
      </div>
    </div>
    <div class="form-group">
      <label for="name" class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">2 + 3 เท่ากับ?</label>
      <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
        <div class="input-group">
          <span class="input-group-addon"><i class="pe-question pe-fw"></i></span>
          <?php if ($sent) { ?>
          <input type="text" class="form-control" name="human" placeholder="คำตอบของ 2 + 3 คือ..." value="<?php echo htmlspecialchars($_REQUEST['human']); ?>" disabled>
          <?php } else { ?>
          <input type="text" class="form-control" name="human" placeholder="คำตอบของ 2 + 3 คือ..." value="<?php echo htmlspecialchars($_REQUEST['human']); ?>">
          <?php } ?>
        </div>
      </div>
    </div>
    <div class="form-group">
      <div class="col-xs-offset-0 col-sm-offset-3 col-md-offset-3 col-lg-offset-3 col-xs-12 col-sm-7 col-md-7 col-lg-7">
        <?php if ($sent) { ?>
        <button type="submit" class="btn btn-info" disabled>ส่งข้อความ <i class="pe-paper-plane"></i></button>
        <?php } else { ?>
        <button type="submit" class="btn btn-info">ส่งข้อความ <i class="pe-paper-plane"></i></button>
        <?php } ?>
      </div>
    </div>
  </div>
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
        human: { validators: { notEmpty: { message: 'กรุณาพิมพ์คำตอบของคำถามนี้' }, stringLength: { max: 1, message: 'คำตอบจะเป็นเพียงแค่เลขตัวเดียวเท่านั้น' }, regexp: { regexp: /^[0-9]+$/, message: 'คำตอบจะเป็นเพียงแค่ตัวเลขเท่านั้น' } } }
      }
    });
    $("div.alert").addClass("alert-th");
  });
</script>

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
