<?php

echo "<h2>Help</h2>";

if (file_exists(dirname(__FILE__) . '/../text/help.txt')) { include(dirname(__FILE__) . '/../text/help.txt'); }
else { echo('<p>' . mkwarn(_("Help not found.")) . "</p>\n"); }

echo "<br><br>\n\n";

?>
