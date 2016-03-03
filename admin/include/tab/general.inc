<?php

$title = "Create a new survey";
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

<div class="container">
<form class="form-horizontal" method="post" id="phpesp" action="<?php echo($base); ?>">
  <div class="form-group">
    <label class="col-sm-3 control-label" for="Name"><strong>Name</strong> <span class="label label-danger">required</span></label>
    <div class="col-sm-9">
    	<?php echo mktext('name', 20, 64, $survey); // need <input class="form-control"> ?>
    	<p class="text-muted">Survey filename. This is used for all further access to this survey. (no spaces, alpha-numeric only)</p>
    </div>
  </div>
  <div class="form-group">
    <label class="col-sm-3 control-label" for="realm"><strong>Owner</strong> <span class="label label-danger">required</span></label>
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
			} else {
				foreach($_SESSION['acl']['pdesign'] as $r)
					$realms[$r] = $r;
			}
			echo(htmlspecialchars($_SESSION['acl']['username']) . "&nbsp;/&nbsp;");
			echo(mkselect('realm',$realms, $survey) . "\n");
			// need <select class="form-control" name="realm">
			?>
			<p class="text-muted">User and Group that owns this survey.</p>
		</div>
    </div>
  </div>
  <div class="form-group">
    <label class="col-sm-3 control-label" for="title"><strong>Title</strong> <span class="label label-danger">required</span></label>
    <div class="col-sm-9">
    	<?php echo mktext('title', 60, 60, $survey); ?>
    	<p class="text-muted">Title of this survey. This appears at the top of every page of this survey. (free-form, including spaces)</p>
    </div>
  </div>
  <div class="form-group">
    <label class="col-sm-3 control-label" for="subtitle"><strong>Subtitle</strong></label>
    <div class="col-sm-9">
    	<?php echo mktext('subtitle', 60, 128, $survey); ?>
    	<p class="text-muted">Subtitle of this survey. Appears below the title. (free-form, including spaces)</p>
    </div>
  </div>
  <div class="form-group">
    <label class="col-sm-3 control-label" for="info"><strong>Additional Info</strong></label>
    <div class="col-sm-9">
    	<?php echo mktextarea('info', 5, 60, 'virtual', $survey); ?>
    	<p class="text-muted">Text to be displayed on this survey before any fields. (i.e. instructions, background info, etc.)</p>
    </div>
  </div>
  <div class="form-group">
    <label class="col-sm-3 control-label" for="thanks"><strong>Confirmation Page</strong></label>
    <div class="col-sm-9">
		<?php echo mktext('thanks_page', 60, 255, $survey) .'&nbsp;'. _('(URL)'); ?>
		<p class="text-muted">The URL to which a user is redirected after completing this survey.<br /><strong>OR</strong></p>
		<?php echo mktext('thank_head', 30, 0, $survey) .'&nbsp;'. _('(heading text)'); ?>
		<?php echo mktextarea('thank_body', 5, 60, 'virtual', $survey) .'&nbsp;' . _('(body text)'); ?>
 		<p class="text-muted">Heading (in bold) and body text for the &quot;Confirmation&quot; page displayed after a user completes this survey. URL, if present, takes precedent over confirmation text.</p>
    </div>
  </div>
  <div class="form-group">
    <label class="col-sm-3 control-label" for="email"><strong>Email</strong></label>
    <div class="col-sm-9">
    	<?php echo mktext('email', 30, 0, $survey); ?>
    	<p class="text-muted">Sends a copy of each submission to address (or leave blank for no email backup).</p>
    </div>
  </div>
  <div class="form-group">
    <label class="col-sm-3 control-label" for="theme"><strong>Theme</strong></label>
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
		echo(mkselect('theme',$themes_array, $survey) . '<p class="text-muted">Select a theme (css) to use with this survey.</p>'); ?>
    </div>
  </div>
  <div class="form-group">
    <label class="col-sm-3 control-label" for="auto_num"><strong>Automatic numbering</strong> <span class="label label-danger">required</span></label>
    <div class="col-sm-9">
        <?php
		if (empty($survey["auto_num"])) { $survey["auto_num"]='Y'; }
		echo(mkselect('auto_num',array('Y'=>_('Yes'),'N'=>_('No')), $survey) . '<p class="text-muted">Select if questions are to be numbered automatically when showing the survey.</p>'); ?>
    </div>
  </div>
  <div class="form-group">
    <label class="col-sm-3 control-label" for="open_date"><strong>Survey starting date</strong></label>
    <div class="col-sm-9">
    	<?php echo mktext('open_date', 16, null, $survey) ?>
    	<p class="text-muted">The earliest date and time respondents may respond to survey.<br />
    		If date given without a time, midnight on the given date is assumed.<br />
    		If not supplied, respondents may respond immediately once survey activated.</p>
    </div>
  </div>
  <div class="form-group">
    <label class="col-sm-3 control-label" for="close_date"><strong>Survey closing date</strong></label>
    <div class="col-sm-9">
    	<?php echo mktext('close_date', 16, null, $survey) ?>
    	<p class="text-muted">When provided, the latest date and time respondents may respond to survey.<br />
    		If date given without a time, midnight on the given date is assumed.<br />
    		If not supplied, respondents may respond indefinitely until survey marked as done.</p>
    </div>
  </div>
  <!--
  <div class="form-group">
    <label class="col-sm-3 control-label" for="close_date">Options</label>
    <div class="col-sm-9">
    	<?php echo(mkcheckbox('options','resume') . '&nbsp;' . _('Allow survey respondents to save/resume. (Survey login required.)')); ?>
    </div>
  </div>
  <div class="form-group">
    <label class="col-sm-3 control-label" for="close_date">Navigate</label>
    <div class="col-sm-9">
    	<?php echo(mkcheckbox('options','navigate') . '&nbsp;' . _('Allow survey respondents to go forward and back between survey sections.')); ?>
    </div>
  </div>
  -->
</form>
</div>

