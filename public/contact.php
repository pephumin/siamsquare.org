<?php

$title = 'Contact us';
require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/config.php';
require_once INCLUDEPUB.'/template.php';
require_once INCLUDEPUB.'/first.php';

//$base =& $GLOBALS['ESPCONFIG']['ME'];

if (isset($_POST["submit"])) {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  $human = intval($_POST['human']);
  $from = $email;
  $to = 'phumin@sawasdee.org';
  $subject = '[siamsquare.org] online query from '.$email;

  $body ="From: $name\n\n E-Mail: $email\n\n Message:\n\n $message";

  if (!$_POST['name']) { $errName = 'Please enter your name'; }
  if (!$_POST['email'] || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) { $errEmail = 'Please enter a valid email address'; }
  if (!$_POST['message']) { $errMessage = 'Please enter your message'; }
  if ($human !== 5) { $errHuman = 'Your anti-spam is incorrect'; }

  // If there are no errors, send the email
  if (!$errName && !$errEmail && !$errMessage && !$errHuman) {
    if (mail ($to, $subject, $body, $from)) { $result = '<div class="alert alert-success">Thank you for contacting us! We will be in touch shortly.</div>'; }
    else { $result = '<div class="alert alert-danger">Sorry there was an error sending your message. Please try again later.</div>'; }
  }
}

pageHeader($title);

?>

<h2>ติดต่อเรา</h2>

<p>คุณสามารถใช้แบบฟอร์มในหน้านี้เพื่อส่งข้อความหาเราได้ทุกเวลาตามที่คุณต้องการ</p>
<p>เรา <i class="pe-heart"></i> ที่จะได้รับฟังความคิดเห็นจากคุณ</p>
<br>

<form class="form-horizontal" role="form" method="post" action="<?php echo htmlspecialchars(ME); ?>">
  <div id="contactus">
    <div class="form-group">
      <label for="name" class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">ชื่อของคุณ</label>
      <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
        <div class="input-group">
          <span class="input-group-addon"><i class="pe-user pe-fw"></i></span>
          <input type="text" class="form-control" name="name" placeholder="ชื่อและนามสกุลของคุณ" value="<?php echo htmlspecialchars($_POST['name']); ?>" required>
          <?php echo "<p class='text-danger'>$errName</p>";?>
        </div>
      </div>
    </div>
    <div class="form-group">
      <label for="name" class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">อีเมล์ของคุณ</label>
      <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
        <div class="input-group">
          <span class="input-group-addon"><i class="pe-envelope pe-fw"></i></span>
          <input type="email" class="form-control" name="email" placeholder="email@company.com" value="<?php echo htmlspecialchars($_POST['email']); ?>" required>
          <?php echo "<p class='text-danger'>$errEmail</p>";?>
        </div>
      </div>
    </div>
    <div class="form-group">
      <label for="name" class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">ข้อความ</label>
      <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
        <div class="input-group">
          <span class="input-group-addon"><i class="pe-commenting pe-fw"></i></span>
          <textarea class="form-control" rows="4" name="message" placeholder="คุณสามารถพิมพ์ข้อความได้ยาวเท่าที่ต้องการในช่องนี้" required><?php echo htmlspecialchars($_POST['message']);?></textarea>
          <?php echo "<p class='text-danger'>$errMessage</p>";?>
        </div>
      </div>
    </div>
    <div class="form-group">
      <label for="name" class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">2 + 3 เป็นเท่าไร</label>
      <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
        <div class="input-group">
          <span class="input-group-addon"><i class="pe-question pe-fw"></i></span>
          <input type="text" class="form-control" name="human" placeholder="คำตอบของ 2 + 3 คือ...">
          <?php echo "<p class='text-danger'>$errHuman</p>";?>
        </div>
      </div>
    </div>
    <div class="form-group">
      <div class="col-xs-offset-0 col-sm-offset-3 col-md-offset-3 col-lg-offset-3 col-xs-12 col-sm-7 col-md-7 col-lg-7">
        <button type="submit" class="btn btn-info">ส่งข้อความ <i class="pe-paper-plane"></i></button>
      </div>
    </div>
    <div class="form-group">
      <div class="col-xs-offset-0 col-sm-offset-3 col-md-offset-3 col-lg-offset-3 col-xs-12 col-sm-7 col-md-7 col-lg-7">
        <?php echo $result; ?>
      </div>
    </div>
  </div>
</form>

<script>
  $(document).ready(function() {
    $('#contactus').formValidation({
      framework: 'bootstrap',
      icon: {
        valid: 'pe-check',
        invalid: 'pe-times',
        validating: 'pe-refresh'
      },
      excluded: ':disabled',
      fields: {
        name: {
          validators: {
            notEmpty: {
              message: 'กรุณาระบุชื่อและนามสกุลจริงของคุณ'
            },
          }
        },
        email: {
          validators: {
            notEmpty: {
              message: 'กรุณาระบุอีเมล์ที่ถูกต้อง'
            },
            emailAddress: {
              message: 'คุณกรอกอีเมล์ไม่ถูกต้อง'
            }
          }
        },
        message: {
          validators: {
            notEmpty: {
              message: 'กรุณาพิมพ์ข้อความที่คุณต้องการส่งถึงเรา'
            }
          }
        },
        human: {
          validators: {
            notEmpty: {
              message: 'กรุณาพิมพ์คำตอบของคำถามนี้'
            },
            stringLength: {
              max: 1,
              message: 'คำตอบจะเป็นเพียงแค่เลขตัวเดียวเท่านั้น'
            },
            regexp: {
              regexp: /^[0-9]+$/,
              message: 'คำตอบจะเป็นเพียงแค่ตัวเลขเท่านั้น'
            }
          }
        }
      }
    });
  });
</script>

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
