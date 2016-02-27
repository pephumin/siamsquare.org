<?php

echo "<h2>README</h2>";

if (file_exists(dirname(__FILE__) . '/../text/readme.txt')) {
	echo "<pre>";
	include(dirname(__FILE__) . '/../text/readme.txt');
	//return $text;
	echo "</pre>\n";
} else {
		echo('<p>' . mkwarn(_("README is not found.")) . "</p>\n");
		//var_dump(dirname(__FILE__));
}

echo "<br />\n";
displayAdminBack(); 

?>
