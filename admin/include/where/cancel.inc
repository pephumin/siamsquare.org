<?php

if(empty($_SESSION['survey_id'])) {
	// no survey INSERTed yet, so just go back to management interface
	$_SESSION['survey_id']    = '';
	$_SESSION['survey_realm'] = '';
	include(esp_where('index'));
	return;
}

$sql = "SELECT status FROM ".$GLOBALS['ESPCONFIG']['survey_table']." WHERE	id=".$_SESSION['survey_id'];
$result = execute_sql($sql);
if(count($result) < 1) {
	db_close($result);
	$_SESSION['survey_id']    = '';
	$_SESSION['survey_realm'] = '';
	include(esp_where('index'));
	return;
}
$status = $result->fields[0];
db_close($result);
$status |= STATUS_DELETED;
$sql = "UPDATE ".$GLOBALS['ESPCONFIG']['survey_table']." SET status=${status} WHERE id=".$_SESSION['survey_id'];
execute_sql($sql);
$_SESSION['survey_id']    = '';
$_SESSION['survey_realm'] = '';
include(esp_where('index'));
return;
?>
