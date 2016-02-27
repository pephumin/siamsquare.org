<?php

echo "<h2>Admin Guide</h2>";

if (file_exists(dirname(__FILE__) . '/../text/adminguide.txt')) {
	echo "<pre>";
	include(dirname(__FILE__) . '/../text/adminguide.txt');
	//return $text;
	echo "</pre>\n";
} else {
		echo('<p>' . mkwarn(_("User's guide not found.")) . "</p>\n");
		//var_dump(dirname(__FILE__));
}

echo "<br />\n";
displayAdminBack(); 

?>
