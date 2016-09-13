<?php

echo "<h2>Administrator guide</h2>";

if (file_exists(dirname(__FILE__) . '/../text/guide.txt')) {
  //echo "<pre>";
  include(dirname(__FILE__) . '/../text/guide.txt');
  //return $text;
  //echo "</pre>\n";
} else {
    echo('<p>' . mkwarn(_("Admin guide not found.")) . "</p>\n");
    //var_dump(dirname(__FILE__));
}

echo "<br />\n";
displayAdminBack();

?>
