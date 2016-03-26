<?php

$home = "http://www.siamsquare.org";
$admin = $home."/admin/index.php";
$page = $home."/public/survey.php";

$_SESSION['new_survey'] = false;
$survey_name = "";
$sql = "SELECT name FROM ".$GLOBALS['ESPCONFIG']['survey_table']." WHERE id = ". $_SESSION['survey_id'];
if ($result = execute_sql($sql)) {
    if (record_count($result) > 0)
	    $survey_name = $result->fields[0];
	db_close($result);
}

// initialize the survey's statistics
//esp_require_once('/lib/espsurveystat');
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/include/lib/espsurveystat.inc';
survey_stat_init($_SESSION['survey_id']);
?>

<script type="text/javascript">
function validate() {
    return true;
}
</script>

<br />

<h4>Completion the survey design</h4>

<p>You have completed this survey design.</p>

<p><i class="fa fa-check-square-o fa-4x"></i></p>

<br />

<p>To insert this survey into your web page, copy the text below, and paste it into the HTML of your page.</p>

<p><code>&lt;?php $sid=<?php echo($_SESSION['survey_id']); ?>; include("<?php echo($ESPCONFIG['handler']); ?>");?&gt;</code></p>

<br />

<p>Before activation, you can access the test link by following the below process.</p>

<ul>
<li>Change survey status from Editing to Testing by using this link: <code><?php echo($admin."?where=status&op=t&sid=".$_SESSION['survey_id']); ?></code> <a href="<?php echo($admin."?where=status&op=t&sid=".$_SESSION['survey_id']); ?>" target="_blank"><i class="fa fa-external-link fa-fw"></i></a></li>
<li>Test link with this URL: <code><?php echo($page."?&test=1&name=".$survey_name); ?></code> <a href="<?php echo($page."?&test=1&name=".$survey_name); ?>" target="_blank"><i class="fa fa-external-link fa-fw"></i></a></li>
</ul>

<br />

<p>Once activated you can also access the survey directly from the following URL.</p>

<p><code><?php echo($page."?name=".$survey_name); ?></code> <a href="<?php echo($page."?name=".$survey_name); ?>" target="_blank"><i class="fa fa-external-link fa-fw"></i></a></p>

<p>You must activate this survey before you can collect results. Once a survey is active, you may no longer make any changes to it. You may activate this survey by choosing <b>Change the Status of an Existing Survey</b> from the Management Interface.</p>

