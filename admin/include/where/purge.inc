<?php

if($_SESSION['acl']['superuser'] != 'Y') {
	echo(mkerror(_('Only superusers allowed.'))."<br>\n");
	echo("<a href=\"". $GLOBALS['ESPCONFIG']['ME'] ."?where=manage\">" . _('Go back to Management Interface') . "</a>\n");
	return;
}

$sids = array();
if(!empty($_POST['list'])) {
	while(list(,$sid) = each($_POST['list'])) {
		array_push($sids, intval($sid));
	}
	survey_purge($sids);
}

//	$sql = "
//SELECT s.id,s.name,s.title,s.status,s.owner,s.realm,COUNT(q.id) as count
//FROM survey s LEFT JOIN question q ON
	$sql = "
SELECT s.id,s.name,s.title,s.status,s.owner,s.realm,COUNT(q.id) as count
FROM ".$GLOBALS['ESPCONFIG']['survey_table']." s LEFT JOIN ".$GLOBALS['ESPCONFIG']['question_table']." q ON
	s.id = q.survey_id AND q.deleted = 'N'
GROUP BY s.id, s.name, s.title, s.status, s.owner, s.realm
ORDER BY s.id DESC";
	$result = execute_sql($sql);

	$bg = $ESPCONFIG['bgalt_color2'];
?>

<h2>Purge Surveys</h2>

<p>This page is not directly on the main menu because it is dangerous. This <b>completely</b> removes everything about a survey from the database <b>forever</b>. All question info, general info, results, etc. are purged from the database. Do not do anything here that you are not completely certain about. There is no confirmation, there is no turning back.</p>
<br />

<table class="table table-hover">
	<tr>
		<td>&nbsp;</td>
		<th>ID</th>
		<th>Name</th>
		<th>Title</th>
		<th>Owner</th>
		<th>Group</th>
		<th><?php echo(_("# Q's")); ?></th>
		<th>Status</th>
	</tr>
<?php
	while(list($sid,$name,$title,$status,$owner,$realm,$qnum) = fetch_row($result)) {
        $result->MoveNext();
		if($status & STATUS_DELETED) {
			$stat = _('Archived');
		} elseif($status & STATUS_DONE) {
			$stat = _('Ended');
		} elseif($status & STATUS_ACTIVE) {
			$stat = _('Active');
		} elseif($status & STATUS_TEST) {
			$stat = _('Testing');
		} else {
			$stat = _('Editing');
		}
		
		//if($bg != $ESPCONFIG['bgalt_color1'])
		//	$bg = $ESPCONFIG['bgalt_color1'];
		//else
		//	$bg = $ESPCONFIG['bgalt_color2'];
?>
	<tr>
		<td><input type="checkbox" name="list[]" value="<?php echo($sid); ?>" /></td>
		<td><?php echo($sid); ?></td>
		<td><?php echo($name); ?></td>
		<td><?php echo($title); ?></td>
		<td><?php echo($owner); ?></td>
		<td><?php echo($realm); ?></td>
		<td><?php echo($qnum); ?></td>
		<td><?php echo($stat); ?></td>
	</tr>
<?php
	}
	
	//if($bg != $ESPCONFIG['bgalt_color1'])
	//	$bg = $ESPCONFIG['bgalt_color1'];
	//else
	//	$bg = $ESPCONFIG['bgalt_color2'];
?>
</table>

<input type="hidden" name="where" value="purge" />
<input class="btn btn-default" type="reset" name="reset" value="Clear Checkboxes" />

<?php
$confirmText = _('You are about to PERMANENTLY and IRREVOCABLY remove ALL information about the selected surveys. Click Ok if you are absolutely sure this is what you want to do.');
?>

<input class="btn btn-default" type="submit" name="submit" onclick='return confirm("<?php echo $confirmText; ?>")' onkeypress='return confirm ("<?php echo $confirmText; ?>");' value="Purge Surveys" />

<br /><br />
<?php displayAdminBack(); ?>
