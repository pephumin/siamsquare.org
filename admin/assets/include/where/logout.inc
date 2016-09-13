<?php

//$base =& $GLOBALS['ESPCONFIG']['ME'];
manage_logout();

echo "<h2>You have been logged out</h2>";
echo mksuccess("You have been successfully logged out.");
echo "<p><a href=".$admin.">Click here to log back in</a></p>";
echo "<br /><br />";

header("Refresh: 10; URL=$admin");

?>
