<?php

$base =& $GLOBALS['ESPCONFIG']['ME'];

if(!empty($_REQUEST['sid']))
	$sid = intval($_REQUEST['sid']);

/* sid selected for testing */
if(!empty($sid)) {
	$sql = "SELECT status,owner,realm,theme FROM ".$GLOBALS['ESPCONFIG']['survey_table']." WHERE id=${sid}";
	$result = execute_sql($sql);
	list($status,$owner,$realm,$theme) = fetch_row($result);
	db_close($result);

	/* check ACL to see if user is allowed to test
	 * _this_ survey */
	$realms = array_intersect(
			$_SESSION['acl']['pall'],
			$_SESSION['acl']['pdesign']);
	if($_SESSION['acl']['superuser'] != 'Y' &&
			$owner != $_SESSION['acl']['username'] &&
			!in_array($realm, $realms) &&
			!auth_no_access(_('to access this survey'))) {
		return;
	}
	if (($status & STATUS_TEST) &&
		!($status & (STATUS_DONE | STATUS_DELETED | STATUS_ACTIVE))) {
		/* cleared for testing ... was that enough tests? */
?>
</div>
</form>
<?php

/* make the css style available during the testing.
 * this should really go into the head section ...
 * but should still work */
if (!empty($theme))
	echo('<link rel="stylesheet" href="/css/default.css" type="text/css">');
?>
<b>Testing Survey...</b> (<?php echo(_('SID')." = $sid"); ?>)
<p>
<?php
/* set things up for the handler to take over ... */
$test = true;
unset($_REQUEST['sid']);
// $_POST['userid'] = 'test';
define('ESP-FIRST-INCLUDED', true);
# the next should not be needed
# define('ESP-AUTH-OK', true);
$_POST['sec'] = empty($_POST['sec']) ? 1 : intval($_POST['sec']);
$_POST['rid'] = empty($_POST['rid']) ? 0 : intval($_POST['rid']);

//include($ESPCONFIG['handler']);
include $_SERVER['DOCUMENT_ROOT'] . '/public/handler.php';

?>

<a href="<?php echo(htmlentities($base."?where=results&sid=".$sid)) ?>&test=1">View results</a>
<br /><br />
<?php displayAdminBack(); ?>
<form><div>

<?php
	db_close($result);
	return;
	}
}

/* no survey selected ... show a menu to choose from */

/* check with ACL for allowed surveys */
/* load names and titles of all surveys available to
 * _this_ user */

$statusbad = (STATUS_DONE | STATUS_DELETED | STATUS_ACTIVE);
$statusok = STATUS_TEST;
if($_SESSION['acl']['superuser'] == 'Y') {
	$sql = "SELECT id,name,title,owner,realm FROM ".$GLOBALS['ESPCONFIG']['survey_table']."
	WHERE ".db_bin("status",$statusok) ." AND NOT ".db_bin("status", $statusbad)."
	ORDER BY id DESC";
} else {
	$realms = array_to_insql(
		array_intersect(
			$_SESSION['acl']['pall'],
			$_SESSION['acl']['pdesign']));
	$sql = "SELECT id,name,title,owner,realm
		FROM ".$GLOBALS['ESPCONFIG']['survey_table']."
		WHERE ".db_bin("status",$statusok) ."AND NOT ".db_bin("status",$statusbad) ."AND
		(owner = ". _addslashes($_SESSION['acl']['username']) ." || realm $realms)
		ORDER BY id DESC";
}
$result = execute_sql($sql);

?>

<h2>Testing a survey</h2>
<br />
<p>Pick a survey from the list below to test</p>
<br />
<table class="table table-hover">
	<tr class="active">
		<th>ID</th>
		<th>Name</th>
		<th>Title</th>
		<th>Owner</th>
		<th>Group</th>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<th>Export</th>
	</tr>

<?php
	while(list($sid,$name,$title,$owner,$realm) = fetch_row($result)) {
        $result->MoveNext();
?>
	<tr>
		<td><?php echo($sid); ?></td>
		<td><?php echo($name); ?></td>
		<td><?php echo($title); ?></td>
		<td><?php echo($owner); ?></td>
		<td><?php echo($realm); ?></td>
        <td><a href="<?php echo(htmlentities("". $base ."?where=test&sid=${sid}&test=1")); ?>">Test</a> (<a href="<?php echo (htmlentities("". $GLOBALS['ESPCONFIG']['autopub_url'] ."?name=${name}&test=1")); ?>">standalone</td>
		<td><a href="<?php echo(htmlentities("". $base ."?where=results&test=1&sid=${sid}")); ?>">Results</a></td>
		<td style="font-size: xx-small; vertical-align: top;">
        <form id="export<?php echo($sid) ?>" action="<?php echo($base) ?>">
	<div>
        <select name="type">
            <option value="csv_full_header" selected="selected">CSV Full Headers</option>
            <option value="csv_short_header">CSV Short Headers</option>
            <option value="tab">Tab</option>
        </select>
        <input type="hidden" name="test" value="1" />
        <input type="hidden" name="sid" value="<?php echo($sid) ?>" />
        <input type="hidden" name="where" value="" />
        <div class="exportsave">
			<?php echo('<a href="javascript: exportSubmit(\'export\', document.getElementById(\'export'.$sid.'\'));" title="Save CSV Long Header (old method). Save the results for \''.$name.'\' to the survey in CSV Format (Comma Delimted File). Column Titles are based on question text.">' . _('Save On Server') . '</a>');
            echo("\n");?>
			| <?php
			echo('<a href="javascript: exportSubmit(\'download\', document.getElementById(\'export'.$sid.'\'));" title="Download CSV Long Header (old method). Download the results for \''.$name.'\' to your computer in CSV Format (Comma Delimted File). Column Titles are based on the question text. Click this link and select \'Save\' when prompted by your browser.">' . _('Download') . '</a>'); ?>
        </div>
        </div></form>
		</td>
	</tr>
<?php
	}
?>
</table>

<br /><br />
<?php displayAdminBack(); ?>
