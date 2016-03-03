<?php

$base =& $GLOBALS['ESPCONFIG']['ME'];
manage_logout();

echo "<h2>You have been logged out</h2>";
echo(mksuccess(_('You have been successfully logged out.')));
echo "<p><a href=".$base.">Click here to log back in</a></p>";
echo "<br /><br />";

displayAdminBack();
header("Refresh: 10; URL=$base");

?>