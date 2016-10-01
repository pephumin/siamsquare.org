<?php

if (isset($_POST['action']) && $_POST['action']=="install") {
  $db_version = get_dbversion();
  $new_version = $ESPCONFIG['version'];
  $db_type=$ESPCONFIG['adodb_database_type'];
  if (version_compare($db_version,$new_version,"eq")) { echo('Install not needed'); }
  else {
    echo (_('Installing')."<br>");

    $result = set_dbschema();
    if (!$result) { echo(mkerror(_('Install FAILED'))."<br>\n"); }
    else { echo (_('Install done')."<br>"); }

    $result = initialize_db();
    if (!$result) { echo(mkerror(_('Initial data entering failed'))."<br>\n"); }
    else { echo (_('Initial data entering done')."<br>"); }

    // the db is now ok, so we now update the version
    $sql = "DELETE FROM ".$GLOBALS['ESPCONFIG']['version_table'];
    $result = execute_sql($sql);
    if (!$result) { echo(mkerror(_('Version delete FAILED'))."<br>\n"); }

    $sql = "INSERT INTO ".$GLOBALS['ESPCONFIG']['version_table']." (versionid) VALUES ('$new_version')";
    $result = execute_sql($sql);
    if (!$result) { echo(mkerror(_('Version update FAILED'))."<br>\n"); }
  }
} else {
  $db_version = get_dbversion();
  $new_version = $ESPCONFIG['version'];
  if (version_compare($db_version,$new_version,"eq")) { echo('Install not needed'); }
  else { echo (_('Install database'));
?>

<form enctype="multipart/form-data" method="post" action="<?php echo ($GLOBALS['ESPCONFIG']['ME']); ?>?where=update">
<input type="hidden" name="where" value="install">
<input type="hidden" name="action" value="install">
<br>
<input type="submit" value="<?php echo _('Go'); ?>" name="submit">
</form>

<?php
  }
  echo mkwarn("<br><br>If you see this screen and you have phpesp already installed using the current db config, it might be because the default table prefix setting has changed. Use this link to update non-prefixed tables to the correct prefix, or change the variable \$DB_PREFIX in the config file.<br><br>");
}

echo "<br><br>";

?>
