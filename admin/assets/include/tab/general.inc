<?php

$title = "Designing a survey";
$base =& $GLOBALS['ESPCONFIG']['ME'];
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/lib/espsurvey.inc';

unset($sid);
$sid = $_SESSION['survey_id'];

// load current values from DB if $sid exists (in session)
$survey = array();
if(!empty($sid) && $updated) {
	$sql = "SELECT * FROM ".$GLOBALS['ESPCONFIG']['survey_table']." WHERE id=${sid}";
	$result = execute_sql($sql,"",ADODB_FETCH_ASSOC);
	$survey = fetch_row($result);
	db_close($result);
} else {
	//$fields = array('name','realm','title','subtitle','email','theme','thanks_page','thank_head','thank_body','info','public','auto_num','open_date','close_date');
  $fields = array('name','owner','realm','public','status','open_date','close_date','title','email','subtitle','subtitle_th','info','info_th','theme','thanks_page','thank_head','thank_head_th','thank_body','thank_body_th','changed','auto_num');
   	foreach ($fields as $f) {
        if(!empty($_POST[$f])) { $survey[$f] = _stripslashes($_POST[$f]); }
        else { $survey[$f] = ''; }
    }
}

// fix if the date values are zeroes
if ('0000-00-00 00:00:00' == $survey['open_date']) { $survey['open_date'] = ''; }
if ('0000-00-00 00:00:00' == $survey['close_date']) { $survey['close_date'] = ''; }

?>

</form>

<script type="text/javascript">
<!--
function validate() {
    return true;
}
-->
</script>

<br /><br />

<div class="form-group">
  <label class="col-sm-3 control-label"><strong>Project title</strong> <span class="label label-danger">required</span></label>
  <div class="col-sm-9">
    <?php // if ($sid): echo mktext('title', 60, 60, $survey); ?>
    <p class="text-muted">Survey title (project name).</p>
    <?php if ($survey['title']): ?>
      <input class="form-control" type="text" name="title" value="<?php echo $survey['title']; ?>" />
    <?php else: ?>
     <input class="form-control" type="text" name="title" placeholder="English only." />
    <?php endif; ?>
  </div>
</div>

<hr>

<div class="form-group">
  <label class="col-sm-3 control-label"><strong>Type of study <span class="label label-danger">required</span></strong></label>
  <div class="col-sm-9">
    <?php // if ($sid): echo mktext('subtitle', 60, 128, $survey['subtitle']); ?>
    <p class="text-muted">Short summary on the type of study e.g. Customer satisfaction, Event evaluation, etc.</p>
    <?php if ($survey['subtitle']): ?>
      <input class="form-control" type="text" name="subtitle" value="<?php echo $survey['subtitle']; ?>" />
    <?php else: ?>
      <input class="form-control" type="text" name="subtitle" placeholder="English only." />
    <?php endif; ?>
  </div>
</div>

<hr>

<div class="form-group">
  <label class="col-sm-3 control-label"><strong>Project information <span class="label label-danger">required</span></strong></label>
  <div class="col-sm-9">
    <p class="text-muted">A few sentenses describing this survey e.g. the target audience, survey period, sample size expected.</p>
    <table class="table">
      <tr>
        <td>
          <p>English</p>
          <?php if ($survey['info']): ?>
            <?php echo mktextarea('info', 7, 0, 'virtual', $survey); ?>
          <?php else: ?>
            <textarea class="form-control" rows="7" name="info" placeholder="Example: Branding study conducted among laptop users in Thailand. Survey period from June to August 2016."></textarea>
          <?php endif; ?>
        </td>
        <td>
          <p>Thai</p>
          <?php if ($survey['info_th']): ?>
            <?php echo mktextarea('info_th', 7, 0, 'virtual', $survey); ?>
          <?php else: ?>
            <textarea class="form-control" rows="7" name="info_th" placeholder="ตัวอย่าง: งานวิจัยเรื่องยี่ห้อ ซึ่งทำการสำรวจกับกลุ่มผู้ใช้คอมพิวเตอร์แบบพกพาในประเทศไทย สำรวจในช่วง มิถุนายนถึงสิงหาคม 2559"></textarea>
          <?php endif; ?>
        </td>
      </tr>
    </table>
  </div>
</div>

<hr>

<div class="form-group">
  <label class="col-sm-3 control-label"><strong>Thank you page <span class="label label-danger">required</span></strong></label>
  <div class="col-sm-9">
    <p class="text-muted">This page will be displayed at the end of the survey.</p>
    <table class="table">
      <tr>
        <td>
          <p>English</p>
          <?php if ($survey['thank_body']): ?>
            <?php echo mktextarea('thank_body', 7, 0, 'virtual', $survey); ?>
          <?php else: ?>
            <textarea class="form-control" rows="7" name="thank_body" placeholder="Example: Your opinions are value to us. We make sure your opinons will be analysed at an aggregated level. And your opinions will be kept at the highest level of confidentiality."></textarea>
          <?php endif; ?>
        </td>
        <td>
          <p>Thai</p>
          <?php if ($survey['thank_body_th']): ?>
            <?php echo mktextarea('thank_body_th', 7, 0, 'virtual', $survey); ?>
          <?php else: ?>
            <textarea class="form-control" rows="7" name="thank_body_th" placeholder="ตัวอย่าง: ความคิดเห็นของคุณมีค่าอย่างยิ่งสำหรับเรา ผลวิจัยจะถูกประมวลผลจากกลุ่มตัวอย่างทั้งหมดเท่านั้น และเราจะปกปิดข้อมูลทุกอย่างของคุณไว้เป็นความลับอย่างสูงสุด"></textarea>
          <?php endif; ?>
        </td>
      </tr>
    </table>
  </div>
</div>

<hr>

<div class="form-group">
  <label class="col-sm-3 control-label"><strong>Email copy</strong> <span class="label label-warning">optional</span></label>
  <div class="col-sm-9">
    <p class="text-muted">Sends a copy of each submission to this email. Leave blank if you do not need an email backup.</p>
    <?php if ($survey['email']): ?>
     <input class="form-control" type="text" name="email" value="<?php echo $survey['email']; ?>" />
    <?php else: ?>
      <input class="form-control" type="text" name="email" placeholder="email@company.com" />
    <?php endif; ?>
  </div>
</div>

<hr>

<div class="form-group">
  <label class="col-sm-3 control-label"><strong>Date control <span class="label label-warning">optional</span></strong></label>
  <div class="col-sm-9">
    <p class="text-muted">Only enter this when there will be a time-frame limitation, otherwise this can be skipped.</p>
    <table class="table">
      <tr>
        <td>
          <p>Starting date</p>
          <?php if ($survey['open_date']): ?>
            <input class="form-control" type="text" name="open_date" value="<?php echo $survey['open_date']; ?>" />
          <?php else: ?>
            <input class="form-control" type="text" name="open_date" placeholder="2017-02-26 00:00:00" />
          <?php endif; ?>
        </td>
        <td>
          <p>Closing date</p>
          <?php if ($survey['close_date']): ?>
            <input class="form-control" type="text" name="close_date" value="<?php echo $survey['close_date']; ?>" />
          <?php else: ?>
            <input class="form-control" type="text" name="close_date" placeholder="2017-02-26 00:00:00" />
          <?php endif; ?>
        </td>
      </tr>
    </table>
  </div>
</div>

<hr>

<?php

$realms = array();

if(isset($_SESSION['acl']['superuser']) && $_SESSION['acl']['superuser'] == 'Y') {
  $sql = "SELECT name FROM ".$GLOBALS['ESPCONFIG']['realm_table'];
  $rr = execute_sql($sql);
  while(list($r) = fetch_row($rr)) {
    $rr->MoveNext();
    $realms[$r] = $r;
  }
  db_close($rr);
  if ($survey['owner']) {
    $out1 = '<input type="text" class="form-control" name="username" placeholder="'.$survey['owner'].'" disabled>';
    $out1 .= '<input type="hidden" name="username" value="'.$survey['owner'].'" />';
  } else {
    $out1 = '<input type="text" class="form-control" name="username" placeholder="'.$_SESSION['acl']['username'].'" disabled>';
    $out1 .= '<input type="hidden" name="username" value="'.$_SESSION['acl']['username'].'" />';
  }
  //$out = '<input type="text" class="form-control" name="username" placeholder="'.$_SESSION['acl']['username'].'" disabled>';
  //$out .= "&nbsp;/&nbsp;";
  $out2 .= mkselect('realm',$realms, $survey);
} else {
  foreach($_SESSION['acl']['pdesign'] as $r) { $realms[$r] = $r; }
  if ($survey['owner']) {
    $out1 = '<input type="text" class="form-control" name="username" placeholder="'.$survey['owner'].'" disabled>';
    $out1 .= '<input type="hidden" name="username" value="'.$survey['owner'].'" />';
  } else {
    $out1 = '<input type="text" class="form-control" name="username" placeholder="'.$_SESSION['acl']['username'].'" disabled>';
    $out1 .= '<input type="hidden" name="username" value="'.$_SESSION['acl']['username'].'" />';
  }
  //$out .= "&nbsp;/&nbsp;";
  $out2 .= '<input type="text" class="form-control" name="realm" placeholder="'.$realms[$r].'" disabled>';
  $out2 .= '<input type="hidden" name="realm" value="'.$realms[$r].'" />';
}
//echo $out;
?>

<div class="form-group">
  <label class="col-sm-3 control-label"><strong>Project information</strong></label>
  <div class="col-sm-9">
    <p class="text-muted">For internal use only.</p>
    <table class="table">
      <tr>
        <td>
          <p>Project ID</p>
          <?php if ($survey['name']): ?>
            <input class="form-control" type="text" name="name" value="<?php echo $survey['name']; ?>" disabled />
            <input type="hidden" name="name" value="<?php echo $survey['name']; ?>" />
          <?php else: ?>
            <input class="form-control" type="text" name="name" value="<?php echo survey_assign_new_name(); ?>" disabled />
            <input type="hidden" name="name" value="<?php echo survey_assign_new_name(); ?>" />
          <?php endif; ?>
        </td>
        <td>
          <p>Owner</p>
          <?php echo $out1; ?>
        </td>
        <td>
          <p>Group</p>
          <?php echo $out2; ?>
        </td>
      </tr>
    </table>
  </div>
</div>

<hr>

<div class="form-group">
  <label class="col-sm-3 control-label">&nbsp;</label>
  <div class="col-sm-9">
    <input type="hidden" name="public" value="Y" />
    <input type="hidden" name="theme" value="ssq.css" />
    <input type="hidden" name="auto_num" value="Y" />
    <input type="hidden" name="sid" value="<?php echo $sid; ?>" />
    <input type="hidden" name="thank_page" value="" />
    <input type="hidden" name="thank_head" value="Thank you for taking part of this survey" />
    <input type="hidden" name="thank_head_th" value="ขอบพระคุณที่สละเวลาร่วมแสดงความคิดเห็น" />
    <input class="btn btn-default btn-sm btn-success" type="submit" name="submit" value="Update" />&nbsp;
    <input class="btn btn-default btn-sm" type="submit" name="cancel" value="Cancel" />&nbsp;
  </div>
</div>

<br />
