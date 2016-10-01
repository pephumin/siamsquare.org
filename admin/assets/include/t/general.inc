<?php

$title = "Designing a survey";
$base =& $GLOBALS['ESPCONFIG']['ME'];
//require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/lib/espsurvey.inc';

unset($sid);
$sid = $_SESSION['survey_id'];

// load current values from DB if $sid exists (in session)
$survey = array();
if(!empty($sid) && $updated) {
  $sql = "SELECT * FROM ".X_SURVEY." WHERE id = ${sid} ";
  $result = execute_sql($sql,"",ADODB_FETCH_ASSOC);
  $survey = fetch_row($result);
  db_close($result);
} else {
  $fields = array('name','owner','realm','public','status','open_date','close_date','title','email','subtitle','subtitle_th','info','info_th','theme','thanks_page','thank_head','thank_head_th','thank_body','thank_body_th','changed','auto_num');
  foreach ($fields as $f) {
    if(!empty($_POST[$f])) { $survey[$f] = _stripslashes($_POST[$f]); }
    else { $survey[$f] = ''; }
  }
}

// fix if the date values are zeroes
if ('0000-00-00 00:00:00' == $survey['open_date']) { $survey['open_date'] = ''; }
if ('0000-00-00 00:00:00' == $survey['close_date']) { $survey['close_date'] = ''; }

displayTabNav();

?>

<section>
  <div class="form-group row">
    <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">
      <label><strong>Project title</strong> <span class="label label-danger">required</span></label>
    </div>
    <div class="col-xs-12 col-sm-9 col-md-9 col-lg-9">
      <?php if ($survey['title']) { ?>
        <input class="form-control" type="text" name="title" value="<?php echo $survey['title']; ?>">
      <?php } else { ?>
       <input class="form-control" type="text" name="title" placeholder="English only.">
      <?php } ?>
      <p class="text-muted">Survey title (project name).</p>
    </div>
  </div>
  <hr>
  <div class="form-group row">
    <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">
      <label><strong>Type of study</strong> <span class="label label-danger">required</span></label>
    </div>
    <div class="col-xs-12 col-sm-9 col-md-9 col-lg-9">
      <?php if ($survey['subtitle']) { ?>
        <input class="form-control" type="text" name="subtitle" value="<?php echo $survey['subtitle']; ?>">
      <?php } else { ?>
        <input class="form-control" type="text" name="subtitle" placeholder="English only.">
      <?php } ?>
      <p class="text-muted">Short summary on the type of study e.g. Customer satisfaction, Event evaluation, etc.</p>
    </div>
  </div>
  <hr>
  <div class="form-group row">
    <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">
      <label><strong>Project information</strong></label>
    </div>
    <div class="col-xs-12 col-sm-9 col-md-9 col-lg-9">
      <div class="row">
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <p>English <span class="label label-danger">required</span></p>
          <?php if ($survey['info']): ?>
            <?php echo mktextarea('info', 7, 0, 'virtual', $survey); ?>
          <?php else: ?>
            <textarea class="form-control" rows="7" name="info" placeholder="Example: Branding study conducted among laptop users in Thailand. Survey period from June to August 2016."></textarea>
          <?php endif; ?>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <p>Thai <span class="label label-danger">required</span></p>
          <?php if ($survey['info_th']): ?>
            <?php echo mktextarea('info_th', 7, 0, 'virtual', $survey); ?>
          <?php else: ?>
            <textarea class="form-control" rows="7" name="info_th" placeholder="ตัวอย่าง: งานวิจัยเรื่องยี่ห้อ ซึ่งทำการสำรวจกับกลุ่มผู้ใช้คอมพิวเตอร์แบบพกพาในประเทศไทย สำรวจในช่วง มิถุนายนถึงสิงหาคม 2559"></textarea>
          <?php endif; ?>
        </div>
      </div>
      <br>
      <p class="text-muted">A few sentenses describing this survey e.g. the target audience, survey period, sample size expected.</p>
    </div>
  </div>
  <hr>
  <div class="form-group row">
    <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">
      <label><strong>Thank you message</strong></label>
    </div>
    <div class="col-xs-12 col-sm-9 col-md-9 col-lg-9">
      <div class="row">
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <p>English <span class="label label-danger">required</span></p>
          <?php if ($survey['thank_body']): ?>
            <?php echo mktextarea('thank_body', 7, 0, 'virtual', $survey); ?>
          <?php else: ?>
            <textarea class="form-control" rows="7" name="thank_body" placeholder="Example: Your opinions are value to us. We make sure your opinons will be analysed at an aggregated level. And your opinions will be kept at the highest level of confidentiality."></textarea>
          <?php endif; ?>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <p>Thai <span class="label label-danger">required</span></p>
          <?php if ($survey['thank_body_th']): ?>
            <?php echo mktextarea('thank_body_th', 7, 0, 'virtual', $survey); ?>
          <?php else: ?>
            <textarea class="form-control" rows="7" name="thank_body_th" placeholder="ตัวอย่าง: ความคิดเห็นของคุณมีค่าอย่างยิ่งสำหรับเรา ผลวิจัยจะถูกประมวลผลจากกลุ่มตัวอย่างทั้งหมดเท่านั้น และเราจะปกปิดข้อมูลทุกอย่างของคุณไว้เป็นความลับอย่างสูงสุด"></textarea>
          <?php endif; ?>
        </div>
      </div>
      <br>
      <p class="text-muted">This message will be displayed at the end of the survey.</p>
    </div>
  </div>
  <hr>
  <div class="form-group row">
    <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">
      <label><strong>Email copy</strong> <span class="label label-warning">optional</span></label>
    </div>
    <div class="col-xs-12 col-sm-9 col-md-9 col-lg-9">
      <?php if ($survey['email']): ?>
       <input class="form-control" type="text" name="email" value="<?php echo $survey['email']; ?>">
      <?php else: ?>
        <input class="form-control" type="text" name="email" placeholder="email@company.com">
      <?php endif; ?>
      <p class="text-muted">Send a copy of each submission to this email. Leave blank if you do not need an email backup.</p>
    </div>
  </div>
  <hr>
  <div class="form-group row">
    <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">
      <label><strong>Date control</strong></label>
    </div>
    <div class="col-xs-12 col-sm-9 col-md-9 col-lg-9">
      <div class="row">
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <p>Starting date <span class="label label-warning">optional</span></p>
          <?php if ($survey['open_date']): ?>
            <input class="form-control" type="text" name="open_date" value="<?php echo $survey['open_date']; ?>">
          <?php else: ?>
            <input class="form-control" type="text" name="open_date" placeholder="2017-02-26 00:00:00">
          <?php endif; ?>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <p>Closing date <span class="label label-warning">optional</span></p>
          <?php if ($survey['close_date']): ?>
            <input class="form-control" type="text" name="close_date" value="<?php echo $survey['close_date']; ?>">
          <?php else: ?>
            <input class="form-control" type="text" name="close_date" placeholder="2017-02-26 00:00:00">
          <?php endif; ?>
        </div>
      </div>
      <br>
      <p class="text-muted">Only enter this when there will be a time-frame limitation, otherwise this can be skipped.</p>
    </div>
  </div>
  <hr>
  <?php
  $realms = array();
  if(isset($_SESSION['acl']['superuser']) && $_SESSION['acl']['superuser'] == 'Y') {
    $sql = "SELECT name FROM ".X_REALM;
    $rr = execute_sql($sql);
    while(list($r) = fetch_row($rr)) {
      $rr->MoveNext();
      $realms[$r] = $r;
    }
    db_close($rr);
    if ($survey['owner']) {
      $out1 = '<input type="text" class="form-control" name="username" placeholder="'.$survey['owner'].'" disabled>';
      $out1 .= '<input type="hidden" name="username" value="'.$survey['owner'].'">';
    } else {
      $out1 = '<input type="text" class="form-control" name="username" placeholder="'.$_SESSION['acl']['username'].'" disabled>';
      $out1 .= '<input type="hidden" name="username" value="'.$_SESSION['acl']['username'].'">';
    }
    //$out = '<input type="text" class="form-control" name="username" placeholder="'.$_SESSION['acl']['username'].'" disabled>';
    //$out .= "&nbsp;/&nbsp;";
    $out2 .= mkselect('realm',$realms, $survey);
  } else {
    foreach($_SESSION['acl']['pdesign'] as $r) { $realms[$r] = $r; }
    if ($survey['owner']) {
      $out1 = '<input type="text" class="form-control" name="username" placeholder="'.$survey['owner'].'" disabled>';
      $out1 .= '<input type="hidden" name="username" value="'.$survey['owner'].'">';
    } else {
      $out1 = '<input type="text" class="form-control" name="username" placeholder="'.$_SESSION['acl']['username'].'" disabled>';
      $out1 .= '<input type="hidden" name="username" value="'.$_SESSION['acl']['username'].'">';
    }
    //$out .= "&nbsp;/&nbsp;";
    $out2 .= '<input type="text" class="form-control" name="realm" placeholder="'.$realms[$r].'" disabled>';
    $out2 .= '<input type="hidden" name="realm" value="'.$realms[$r].'">';
  }
  ?>
  <div class="form-group row">
    <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">
      <label><strong>Project information</strong>
    </div>
    <div class="col-xs-12 col-sm-9 col-md-9 col-lg-9">
      <div class="row">
        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <p>Project ID</p>
          <?php if ($survey['name']): ?>
            <input class="form-control" type="text" name="name" value="<?php echo $survey['name']; ?>" disabled>
            <input type="hidden" name="name" value="<?php echo $survey['name']; ?>">
          <?php else: ?>
            <input class="form-control" type="text" name="name" value="<?php echo survey_assign_new_name(); ?>" disabled>
            <input type="hidden" name="name" value="<?php echo survey_assign_new_name(); ?>">
          <?php endif; ?>
        </div>
        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <p>Owner</p>
          <?php echo $out1; ?>
        </div>
        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <p>Group</p>
          <?php echo $out2; ?>
        </div>
      </div>
      <br>
      <p class="text-muted">For internal use only.</p>
    </div>
  </div>
  <hr>
  <input type="hidden" name="sid" value="<?php echo $sid; ?>">
<?php if ($w != "new") { ?>
  <p class="text-center">
    <input type="hidden" name="public" value="Y">
    <input type="hidden" name="theme" value="default">
    <input type="hidden" name="auto_num" value="Y">
    <input type="hidden" name="thank_page" value="">
    <input type="hidden" name="thank_head" value="Thank you for taking part of this survey">
    <input type="hidden" name="thank_head_th" value="ขอบพระคุณที่สละเวลาร่วมแสดงความคิดเห็น">
    <input class="btn btn-default btn-sm btn-success" type="submit" name="submit" value="Update">
    <input class="btn btn-default btn-sm" type="submit" name="cancel" value="Cancel">
  </p>
<?php } ?>
</section>

<br>
