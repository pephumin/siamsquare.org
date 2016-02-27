<?php

echo "<p><a href=\"". $GLOBALS['ESPCONFIG']['ME'] ."?where=manage\">Go back to Management Interface</a></p>\n";

if (file_exists(dirname(__FILE__) . '/../adminguide.txt')) {
	echo "<pre>\n";
	include(dirname(__FILE__) . '/../adminguide.txt');
	echo "</pre>\n";
} else {
		echo('<p>' . mkwarn(_("User's guide not found.")) . "</p>\n");
		//var_dump(dirname(__FILE__));
}

echo "<p><a href=\"". $GLOBALS['ESPCONFIG']['ME'] ."?where=manage\">Go back to Management Interface</a></p>\n";

?>
