<?php

echo "<h2>Administrator guide</h2>";

if (file_exists(dirname(__FILE__) . '/../text/guide.txt')) { include(dirname(__FILE__) . '/../text/guide.txt'); }
else { echo('<p>' . mkwarn(_("Admin guide not found.")) . "</p>\n"); }

echo "<br><br>\n\n";

?>
