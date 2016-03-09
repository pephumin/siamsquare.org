<?php

$title = "Designing a survey";
$base =& $GLOBALS['ESPCONFIG']['ME'];

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
	$fields = array('name','realm','title','subtitle','email','theme','thanks_page','thank_head','thank_body','info','public','auto_num','open_date','close_date');
   	foreach ($fields as $f) {
        if(!empty($_POST[$f]))
    	    $survey[$f] = _stripslashes($_POST[$f]);
        else
            $survey[$f] = '';
    }
}

// if the date values are zeroes, something bad went in -- correct it on the display so as to not panic the user
if ('0000-00-00 00:00:00' == $survey['open_date']) {
    $survey['open_date'] = '';
}
if ('0000-00-00 00:00:00' == $survey['close_date']) {
    $survey['close_date'] = '';
}
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
    <?php if ($survey['title']): ?>
      <input class="form-control" type="text" name="title" value="<?php echo $survey['title']; ?>" />
      <p class="text-muted">Title of this survey. This appears at the top of every page of this survey. (free-form, including spaces)</p>
    <?php else: ?>
     <input class="form-control" type="text" name="title" placeholder="Name of the survey e.g. Project Hawk" />
  <?php endif; ?>
  </div>
</div>

<div class="form-group">
  <label class="col-sm-3 control-label"><strong>Project type <span class="label label-warning">optional</span></strong></label>
  <div class="col-sm-9">
    <?php // if ($sid): echo mktext('subtitle', 60, 128, $survey['subtitle']); ?>
    <?php if ($survey['subtitle']): ?>
      <input class="form-control" type="text" name="subtitle" value="<?php echo $survey['subtitle']; ?>" />
      <p class="text-muted">Survey type. For example, Customer satisfactin, Event evaluation, etc.</p>
    <?php else: ?>
      <input class="form-control" type="text" name="subtitle" placeholder="Type of the survey e.g. Customer satisfaction survey, Event evaluation, etc." />
    <?php endif; ?>
  </div>
</div>

<div class="form-group">
  <label class="col-sm-3 control-label"><strong>Additional Info <span class="label label-warning">optional</span></strong></label>
  <div class="col-sm-9">
    <?php // if ($sid): echo mktextarea('info', 10, 60, 'virtual', $survey); ?>
    <?php if ($survey['info']): ?>
     <?php echo mktextarea('info', 10, 60, 'virtual', $survey); ?>
     <p class="text-muted">Text to be displayed on this survey before any fields. (i.e. instructions, background info, etc.)</p>
    <?php else: ?>
      <textarea class="form-control" rows="10" name="info" placeholder="Detailed information about this survey including the target audiences, length of interview, survey period, sample size expected, etc."></textarea>
    <?php endif; ?>
  </div>
</div>

<div class="form-group">
  <label class="col-sm-3 control-label"><strong>Confirmation Page</strong> <span class="label label-warning">optional</span></label>
  <div class="col-sm-9">
    <?php // if ($sid): echo mktext('thanks_page', 60, 255, $survey); ?>
    <?php if ($survey['thanks_page']): ?>
     <?php echo mktext('thanks_page', 60, 255, $survey); ?>
    <?php else: ?>
      <input class="form-control" type="text" name="thanks_page" placeholder="http://www.website.com/thanks.html" />
      <p class="text-muted">Text to be displayed on this survey before any fields. (i.e. instructions, background info, etc.)</p>
    <?php endif; ?>
    <p><strong>OR</strong></p>

    <?php if ($survey['thank_head']): ?>
      Header:<br />
      <input class="form-control" type="text" name="thank_head" value="<?php echo $survey['thank_head']; ?>" />
    <?php else: ?>
      Header:<br />
      <input class="form-control" type="text" name="thank_head" placeholder="Heading e.g. Thank you for taking part of this survey" />
    <?php endif; ?>
    <?php if ($survey['thank_body']): ?>
      Body:<br />
     <?php echo mktextarea('thank_body', 10, 60, 'virtual', $survey); ?>
    <?php else: ?>
      Body:<br />
      <textarea class="form-control" rows="5" name="thank_body" placeholder="Your opinions are value to us. We make sure your opinons will be analysed at an aggregated level. And your opinions will be kept at the highest level of confidentiality."></textarea>
    <?php endif; ?>
    <p class="text-muted">If there is no "Thank you" page at your company website, you can fill in with this form instead.</p>
  </div>
</div>

<div class="form-group">
  <label class="col-sm-3 control-label"><strong>Email</strong> <span class="label label-warning">optional</span></label>
  <div class="col-sm-9">
    <?php if ($survey['email']): ?>
     <input class="form-control" type="text" name="email" value="<?php echo $survey['email']; ?>" />
    <?php else: ?>
      <input class="form-control" type="text" name="email" placeholder="email@company.com" />
      <p class="text-muted">Sends a copy of each submission to address (or leave blank for no email backup).</p>
    <?php endif; ?>
  </div>
</div>

<div class="form-group">
  <label class="col-sm-3 control-label"><strong>Survey starting date</strong> <span class="label label-warning">optional</span></label>
  <div class="col-sm-9">
    <?php if ($survey['open_date']): ?>
     <input class="form-control" type="text" name="open_date" value="<?php echo $survey['open_date']; ?>" />
    <?php else: ?>
      <input class="form-control" type="text" name="open_date" placeholder="2017-02-26" />
      <!--
     Year: <input class="form-control" type="text" size="4" maxlength="4" name="open_year" placeholder="2017" />
     Month: <input class="form-control" type="text" size="2" maxlength="2" name="open_month" placeholder="02" />
     Day: <input class="form-control" type="text" size="2" maxlength="2" name="open_day" placeholder="26"/>
     -->
      <p class="text-muted">The earliest date and time respondents may respond to survey. If date given without a time, midnight on the given date is assumed. If not supplied, respondents may respond immediately once survey activated.</p>
    <?php endif; ?>  	
  </div>
</div>

<div class="form-group">
  <label class="col-sm-3 control-label"><strong>Survey closing date</strong> <span class="label label-warning">optional</span></label>
  <div class="col-sm-9">
    <?php if ($survey['close_date']): ?>
     <input class="form-control" type="text" name="close_date" value="<?php echo $survey['close_date']; ?>" />
    <?php else: ?>
      <input class="form-control" type="text" name="close_date" placeholder="2017-02-26" />
      <!--
     Year: <input class="form-control" type="text" size="4" maxlength="4" name="open_year" placeholder="2017" />
     Month: <input class="form-control" type="text" size="2" maxlength="2" name="open_month" placeholder="02" />
     Day: <input class="form-control" type="text" size="2" maxlength="2" name="open_day" placeholder="26"/>
     -->
      <p class="text-muted">When provided, the latest date and time respondents may respond to survey. If date given without a time, midnight on the given date is assumed. If not supplied, respondents may respond indefinitely until survey marked as done.</p>
    <?php endif; ?>   
  </div>
</div>

<div class="form-group">
  <label class="col-sm-3 control-label"><strong>Project ID</strong> <span class="label label-danger">required</span></label>
  <div class="col-sm-9">
    <?php if ($survey['name']): ?>
     <input class="form-control" type="text" name="name" value="<?php echo $survey['name']; ?>" disabled />
     <input type="hidden" name="name" value="<?php echo $survey['name']; ?>" />
    <?php else: ?>
      <input class="form-control" type="text" name="name" placeholder="Project ID" />
      <p class="text-muted">This is used for all further access to this survey. (no spaces, alpha-numeric only)</p>
    <?php endif; ?>
  </div>
</div>

<div class="form-group">
  <label class="col-sm-3 control-label"><strong>Owner</strong> <span class="label label-danger">required</span></label>
  <div class="col-sm-9">
    <div class="form-inline">
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

    <p class="text-muted">User and group that owns this survey.</p>
  </div>
  </div>
</div>

<!--
<div class="form-group">
  <label class="col-sm-3 control-label"><strong>Theme</strong></label>
  <div class="col-sm-9">
    <?php
    $themes_array = array();
    $dir = dir($ESPCONFIG['css_path']);
    $dir->rewind();
    while ($file=$dir->read()) {
      if (stristr($file,".css")) {
        $pos = strrpos($file, ".");
        $name = substr($file, 0,$pos);
        $themes_array[$file] = $name;
      }
    }
    $dir->close();
    echo(mkselect('theme',$themes_array, $survey) . '<p class="text-muted">Select a theme (css) to use with this survey.</p>'); 
    ?>
  </div>
</div>
<div class="form-group">
  <label class="col-sm-3 control-label"><strong>Automatic numbering</strong> <span class="label label-danger">required</span></label>
  <div class="col-sm-9">
    <?php
    if (empty($survey["auto_num"])) { $survey["auto_num"]='Y'; }
    echo(mkselect('auto_num',array('Y'=>_('Yes'),'N'=>_('No')), $survey) . '<p class="text-muted">Select if questions are to be numbered automatically when showing the survey.</p>'); 
    ?>
  </div>
</div>
-->

<div class="form-group">
  <label class="col-sm-3 control-label">&nbsp;</label>
  <div class="col-sm-9">
    <input type="hidden" name="theme" value="ssq.css" />
    <input type="hidden" name="auto_num" value="Y" />
    <input type="hidden" name="sid" value="<?php echo $sid; ?>" />
    <input class="btn btn-success" type="submit" name="submit" value="Update" />&nbsp;
    <input class="btn btn-default" type="submit" name="cancel" value="Cancel" />&nbsp;
  </div>
</div>
