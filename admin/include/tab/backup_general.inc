<?php

$title = "Create a new survey";

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

<script type="text/javascript">
<!--
function validate() {
    return true;
}
-->
</script>

<br /><br />

<table class="table table-hover">
	<tr>
		<td><strong>Name</strong> <span class="label label-danger">required</span></td>
		<td>
			<?php echo mktext('name', 20, 64, $survey); ?>
			<p class="text-muted">Survey filename. This is used for all further access to this survey. (no spaces, alpha-numeric only)</p>
		</td>
	</tr>
	<tr>
		<td><strong>Owner</strong> <span class="label label-danger">required</span></td>
		<td><?php
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
			?>
			<p class="text-muted">User and Group that owns this survey.</p>
		</td>
	</tr>
	<tr>
		<td><strong>Title</strong> <span class="label label-danger">required</span></td>
		<td>
			<?php echo mktext('title', 60, 60, $survey); ?>
			<p class="text-muted">Title of this survey. This appears at the top of every page of this survey. (free-form, including spaces)</p>
		</td>
	</tr>
	<tr>
		<td><strong>Subtitle</strong></td>
		<td>
			<?php echo mktext('subtitle', 60, 128, $survey); ?>
			<p class="text-muted">Subtitle of this survey. Appears below the title. (free-form, including spaces)</p>
		</td>
	</tr>
	<tr>
		<td><strong>Additional Info</strong></td>
		<td>
			<?php echo mktextarea('info', 5, 60, 'virtual', $survey); ?>
			<p class="text-muted">Text to be displayed on this survey before any fields. (i.e. instructions, background info, etc.)</p>
		</td>
	</tr>
	<tr>
		<td><strong>Confirmation Page</strong></td>
		<td>
			<?php echo mktext('thanks_page', 60, 255, $survey) .'&nbsp;'. _('(URL)'); ?>
			<p class="text-muted">The URL to which a user is redirected after completing this survey.<br /><strong>OR</strong></p>
			<?php echo mktext('thank_head', 30, 0, $survey) .'&nbsp;'. _('(heading text)'); ?>
			<?php echo mktextarea('thank_body', 5, 60, 'virtual', $survey) .'&nbsp;' . _('(body text)'); ?>
 			<p class="text-muted">Heading (in bold) and body text for the &quot;Confirmation&quot; page displayed after a user completes this survey. URL, if present, takes precedent over confirmation text.</p>
		</td>
	</tr>
	<tr>
		<td><strong>Email</strong></td>
		<td>
            <?php echo mktext('email', 30, 0, $survey); ?>
            <p class="text-muted">Sends a copy of each submission to address (or leave blank for no email backup).</p>
		</td>
	</tr>
    <tr>
		<td><strong>Theme</strong></td>
        <td><?php
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
        </td>
    </tr>
	<tr>
		<td><strong>Automatic numbering</strong> <span class="label label-danger">required</span></td>
        <td><?php
			if (empty($survey["auto_num"])) {
				$survey["auto_num"]='Y';
			}
			echo(mkselect('auto_num',array('Y'=>_('Yes'),'N'=>_('No')), $survey) . '<p class="text-muted">Select if questions are to be numbered automatically when showing the survey.</p>'); ?>
		</td>
    </tr>
	<tr>
		<td><strong>Survey opening date</strong></td>
        <td><?php echo mktext('open_date', 16, null, $survey) ?>
        	<p class="text-muted">The earliest date and time respondents may respond to survey.<br />
        		If date given without a time, midnight on the given date is assumed.<br />
        		If not supplied, respondents may respond immediately once survey activated.</p>
		</td>
        </tr>
	<tr>
		<td><strong>Survey closing date</strong></td>
        <td><?php echo mktext('close_date', 16, null, $survey) ?>
        	<p class="text-muted">When provided, the latest date and time respondents may respond to survey.<br />
        		If date given without a time, midnight on the given date is assumed.<br />
        		If not supplied, respondents may respond indefinitely until survey marked as done.</p>
        </td>
        </tr>
<!--
	<tr><td colspan="2"><hr class="line1" /></td></tr>
	<tr>
        <td><strong><?php echo(_('Options')); ?></strong></td>
		<td><?php echo(mkcheckbox('options','resume') . '&nbsp;' .
				_('Allow survey respondents to save/resume. (Survey login required.)')); ?></td>
	</tr>
	<tr>
		<td>&nbsp;</td>
		<td><?php echo(mkcheckbox('options','navigate') . '&nbsp;' .
				_('Allow survey respondents to go forward and back between survey sections.')); ?></td>
-->                
</table>
