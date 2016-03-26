<?php

/* if survey has been selected ... */
if(!empty($_GET['sid'])) {
	$sid = intval($_GET['sid']);
	
	$srealm = auth_get_survey_realm($sid);
	/* check ACL to see if user is allowed to copy
	 * _this_ survey */
	if($_SESSION['acl']['superuser'] != 'Y' &&
			!auth_is_owner($sid, $_SESSION['acl']['username']) &&
			!in_array($srealm, array_intersect(
					$_SESSION['acl']['pdesign'],
					$_SESSION['acl']['pall'])) &&
			!auth_no_access(_('to access this survey'))) {
		return;
	}

	/* copy the survey */
	if(!survey_copy($sid)) {
		echo(mkerror(_('Error copying survey.') ." (". ErrorMsg() .")") . "<br>\n");
		echo("<a href=\"". $GLOBALS['ESPCONFIG']['ME'] ."?where=manage\">" . _('Go back to Management Interface') . "</a>\n");
		return;
	}
?>
<script language="JavaScript"><!--
window.location="<?php echo($GLOBALS['ESPCONFIG']['ME'] ."?where=manage"); ?>"
//-->
</script>
<?php
	echo("<noscript><a href=\"". $GLOBALS['ESPCONFIG']['ME'] ."?where=manage\">" . _('Go back to Management Interface') . "</a></noscript>\n");
	return;
}

/* load names and titles of all surveys available to
 * _this_ user */
if($_SESSION['acl']['superuser'] == 'Y') {
	$sql = 'SELECT id,name,title,status,owner,realm FROM '.$GLOBALS['ESPCONFIG']['survey_table'].' ORDER BY id DESC';
} else {
	$realms = array_to_insql(
		array_intersect(
			$_SESSION['acl']['pall'],
			$_SESSION['acl']['pdesign']));
	$sql = "SELECT id,name,title,status,owner,realm
		FROM ".$GLOBALS['ESPCONFIG']['survey_table']." WHERE NOT (status & ". STATUS_DELETED .") AND (owner = ".
		_addslashes($_SESSION['acl']['username']) ." || realm $realms) ORDER BY id DESC";
}

$result = execute_sql($sql);

echo "<h2>Copy survey</h2>\n";
echo "<br />\n";
echo "<p>Choose a survey of which to make a copy. The copy will have the same status of a newly created survey. You will be able to edit the survey, and will have to activate it before use.</p>\n";
echo "<table class=\"table table-hover\">\n";
echo "	<tr class=\"active\">\n";
echo "		<th>Title</th>\n";
echo "		<th>Owner (Group)</th>\n";
echo "		<th>Status</th>\n";
echo "	</tr>\n";

while(list($sid,$name,$title,$status,$owner,$realm) = fetch_row($result)) {
	$result->MoveNext();
	if($status & STATUS_DELETED) { $stat = "Archived"; } 
	elseif($status & STATUS_DONE) { $stat = "Ended"; } 
	elseif($status & STATUS_ACTIVE) { $stat = "Active"; } 
	elseif($status & STATUS_TEST) { $stat = "Testing"; } 
	else { $stat = "Editing"; }

	$target = htmlentities("". $GLOBALS['ESPCONFIG']['ME'] ."?where=copy&sid=${sid}");
	echo "	<tr>\n";
	echo "		<td><a href=\"$target\">$title</a></td>\n";
	echo "		<td>$owner ($realm)</td>\n";
	echo "		<td>$stat</td>\n";
	echo "	</tr>\n";
}

db_close($result);

echo "</table>\n";
echo "<br /><br />\n\n";

displayAdminBack(); 

?>
