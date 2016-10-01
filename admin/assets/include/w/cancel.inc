<?php

if(empty($_SESSION['survey_id'])) {
  $_SESSION['survey_id'] = '';
  $_SESSION['survey_realm'] = '';
  include(wAdmin('index'));
  return;
}

$sql = "SELECT status FROM ".X_SURVEY." WHERE  id = ".$_SESSION['survey_id'];
$result = execute_sql($sql);
if(count($result) < 1) {
  db_close($result);
  $_SESSION['survey_id'] = '';
  $_SESSION['survey_realm'] = '';
  include(wAdmin('index'));
  return;
}

$status = $result->fields[0];
db_close($result);
$status |= STATUS_DELETED;
$sql = "UPDATE ".X_SURVEY." SET status = ${status} WHERE id = ".$_SESSION['survey_id'];
execute_sql($sql);
$_SESSION['survey_id'] = '';
$_SESSION['survey_realm'] = '';
include(wAdmin('index'));
return;

?>
