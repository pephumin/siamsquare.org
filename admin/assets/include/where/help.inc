<?php

echo "<h2>Help</h2>";

if (file_exists(dirname(__FILE__) . '/../text/help.txt')) {
  //echo "<pre>";
  include(dirname(__FILE__) . '/../text/help.txt');
  //return $text;
  //echo "</pre>\n";
} else {
    echo('<p>' . mkwarn(_("Help not found.")) . "</p>\n");
    //var_dump(dirname(__FILE__));
}

echo "<br><br>\n\n"; 

?>
