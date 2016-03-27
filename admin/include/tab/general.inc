<?php

$title = "Designing a survey";
$base =& $GLOBALS['ESPCONFIG']['ME'];
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/include/lib/espsurvey.inc';

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
  $fields = array('name','owner','realm','public','status','open_date','close_date','title','email','subtitle','subtitle_th','info','info_th','theme','thanks_page','thank_head','thank_body','changed','auto_num');
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
  <label class="col-sm-3 control-label"><strong>Title</strong> <span class="label label-danger">required</span></label>
  <div class="col-sm-9">
    <?php // if ($sid): echo mktext('title', 60, 60, $survey); ?>
    <p class="text-muted">Survey title (project name).</p>
    <?php if ($survey['title']): ?>
      <input class="form-control" type="text" name="title" value="<?php echo $survey['title']; ?>" />
    <?php else: ?>
     <input class="form-control" type="text" name="title" placeholder="[English]: The name or the title of this survey." />
    <?php endif; ?>
  </div>
</div>

<hr>

<div class="form-group">
  <label class="col-sm-3 control-label"><strong>Project type <span class="label label-warning">optional</span></strong></label>
  <div class="col-sm-9">
    <?php // if ($sid): echo mktext('subtitle', 60, 128, $survey['subtitle']); ?>
    <p class="text-muted">Short summary on the type of study e.g. Customer satisfactin, Event evaluation, etc.</p>
    <?php if ($survey['subtitle']): ?>
      <input class="form-control" type="text" name="subtitle" value="<?php echo $survey['subtitle']; ?>" />
    <?php else: ?>
      <input class="form-control" type="text" name="subtitle" placeholder="[English]: Type of study." />
    <?php endif; ?>
    <br />
    <?php if ($survey['subtitle_th']): ?>
      <input class="form-control" type="text" name="subtitle_th" value="<?php echo $survey['subtitle_th']; ?>" />
    <?php else: ?>
      <input class="form-control" type="text" name="subtitle_th" placeholder="[Thai]: Type of study." />
    <?php endif; ?>
  </div>
</div>

<hr>

<div class="form-group">
  <label class="col-sm-3 control-label"><strong>Detailed information <span class="label label-warning">optional</span></strong></label>
  <div class="col-sm-9">
    <?php // if ($sid): echo mktextarea('info', 10, 60, 'virtual', $survey); ?>
    <p class="text-muted">Detailed information about this survey including the target audiences, length of interview, survey period, sample size expected, etc.</p>
    <?php if ($survey['info']): ?>
     <?php echo mktextarea('info', 8, 0, 'virtual', $survey); ?>
    <?php else: ?>
      <textarea class="form-control" rows="8" name="info" placeholder="[English]: Detailed information about this survey. Multiple lines should be used for a nice and neat format."></textarea>
    <?php endif; ?>
    <br />
    <?php if ($survey['info_th']): ?>
     <?php echo mktextarea('info_th', 8, 0, 'virtual', $survey); ?>
    <?php else: ?>
      <textarea class="form-control" rows="8" name="info_th" placeholder="[Thai]: Detailed information about this survey. Multiple lines should be used for a nice and neat format."></textarea>
    <?php endif; ?>
  </div>
</div>

<hr>

<div class="form-group">
  <label class="col-sm-3 control-label"><strong>Confirmation Page</strong> <span class="label label-warning">optional</span></label>
  <div class="col-sm-9">
    <?php // if ($sid): echo mktext('thanks_page', 60, 255, $survey); ?>
    <p class="text-muted">Thank you page which should be located at your website. If there is no such page available, leave this box blank and use the Header/Body box instead.</p>
    <?php if ($survey['thanks_page']): ?>
     <?php echo mktext('thanks_page', 60, 255, $survey); ?>
    <?php else: ?>
      <input class="form-control" type="text" name="thanks_page" placeholder="http://www.website.com/thanks.html" />
    <?php endif; ?>
    <br />
    <p><strong>OR</strong></p>

    <?php if ($survey['thank_head']): ?>
      Header:<br />
      <input class="form-control" type="text" name="thank_head" value="<?php echo $survey['thank_head']; ?>" />
    <?php else: ?>
      Header:<br />
      <input class="form-control" type="text" name="thank_head" placeholder="[English or Thai]: Thank you for taking part of this survey" />
    <?php endif; ?>
    <?php if ($survey['thank_body']): ?>
      Body:<br />
     <?php echo mktextarea('thank_body', 10, 60, 'virtual', $survey); ?>
    <?php else: ?>
      Body:<br />
      <textarea class="form-control" rows="5" name="thank_body" placeholder="[English or Thai]: Your opinions are value to us. We make sure your opinons will be analysed at an aggregated level. And your opinions will be kept at the highest level of confidentiality."></textarea>
    <?php endif; ?>
  </div>
</div>

<hr>

<div class="form-group">
  <label class="col-sm-3 control-label"><strong>Email</strong> <span class="label label-warning">optional</span></label>
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
  <label class="col-sm-3 control-label"><strong>Survey starting date</strong> <span class="label label-warning">optional</span></label>
  <div class="col-sm-9">
    <p class="text-muted">Only enter this when there will be a time-frame limitation, otherwise this can be skipped.</p>
    <?php if ($survey['open_date']): ?>
     <input class="form-control" type="text" name="open_date" value="<?php echo $survey['open_date']; ?>" />
    <?php else: ?>
      <input class="form-control" type="text" name="open_date" placeholder="2017-02-26 00:00:00" />
      <!--
     Year: <input class="form-control" type="text" size="4" maxlength="4" name="open_year" placeholder="2017" />
     Month: <input class="form-control" type="text" size="2" maxlength="2" name="open_month" placeholder="02" />
     Day: <input class="form-control" type="text" size="2" maxlength="2" name="open_day" placeholder="26"/>
     -->
    <?php endif; ?>  	
  </div>
</div>

<hr>

<div class="form-group">
  <label class="col-sm-3 control-label"><strong>Survey closing date</strong> <span class="label label-warning">optional</span></label>
  <div class="col-sm-9">
    <p class="text-muted">Only enter this when there will be a time-frame limitation, otherwise this can be skipped.</p>
    <?php if ($survey['close_date']): ?>
     <input class="form-control" type="text" name="close_date" value="<?php echo $survey['close_date']; ?>" />
    <?php else: ?>
      <input class="form-control" type="text" name="close_date" placeholder="2017-02-26 00:00:00" />
      <!--
     Year: <input class="form-control" type="text" size="4" maxlength="4" name="open_year" placeholder="2017" />
     Month: <input class="form-control" type="text" size="2" maxlength="2" name="open_month" placeholder="02" />
     Day: <input class="form-control" type="text" size="2" maxlength="2" name="open_day" placeholder="26"/>
     -->
    <?php endif; ?>   
  </div>
</div>

<hr>

<div class="form-group">
  <label class="col-sm-3 control-label"><strong>Project ID</strong> <span class="label label-danger">required</span></label>
  <div class="col-sm-9">
    <p class="text-muted">Internal project ID (non-editable).</p>
    <?php if ($survey['name']): ?>
     <input class="form-control" type="text" name="name" value="<?php echo $survey['name']; ?>" disabled />
     <input type="hidden" name="name" value="<?php echo $survey['name']; ?>" />
    <?php else: ?>
      <input class="form-control" type="text" name="name" value="<?php echo survey_assign_new_name(); ?>" disabled />
      <input type="hidden" name="name" value="<?php echo survey_assign_new_name(); ?>" />
    <?php endif; ?>
  </div>
</div>

<div class="form-group">
  <label class="col-sm-3 control-label"><strong>Owner</strong> <span class="label label-danger">required</span></label>
  <div class="col-sm-9">
    <div class="form-inline">
    <p class="text-muted">User and group that owns this survey.</p>
    <?php if ($survey['owner']): ?>
     <input class="form-control" type="text" name="username" value="<?php echo $survey['owner']; ?>" disabled />
     <input type="hidden" name="username" value="<?php echo $survey['owner']; ?>" />
     &nbsp;/&nbsp;
     <input class="form-control" type="text" name="realm" value="<?php echo $survey['realm']; ?>" disabled />
     <input type="hidden" name="realm" value="<?php echo $survey['realm']; ?>" />     
    <?php else: ?>
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
        $out = '<input type="text" class="form-control" name="username" placeholder="'.$_SESSION['acl']['username'].'" disabled>'; 
        $out .= "&nbsp;/&nbsp;";
        $out .= mkselect('realm',$realms, $survey);
      } else {
        foreach($_SESSION['acl']['pdesign'] as $r) {
          $realms[$r] = $r;          
        }
        $out = '<input type="text" class="form-control" name="username" placeholder="'.$_SESSION['acl']['username'].'" disabled>'; 
        $out .= "&nbsp;/&nbsp;";
        $out .= '<input type="text" class="form-control" name="realm" placeholder="'.$realms[$r].'" disabled>';
        $out .= '<input type="hidden" name="realm" value="'.$realms[$r].'" />';
      }
      //echo(htmlspecialchars($_SESSION['acl']['username']) . "&nbsp;/&nbsp;");
      //echo(mkselect('realm',$realms, $survey) . "\n");
      echo $out;
      ?>
    <?php endif; ?>
  </div>
  </div>
</div>

<hr>

<div class="form-group">
  <label class="col-sm-3 control-label">&nbsp;</label>
  <div class="col-sm-9">
    <input type="hidden" name="theme" value="ssq.css" />
    <input type="hidden" name="auto_num" value="Y" />
    <input type="hidden" name="sid" value="<?php echo $sid; ?>" />
    <input class="btn btn-default btn-sm" type="submit" name="submit" value="Update" />&nbsp;
    <input class="btn btn-default btn-sm" type="submit" name="cancel" value="Cancel" />&nbsp;
  </div>
</div>

<br />