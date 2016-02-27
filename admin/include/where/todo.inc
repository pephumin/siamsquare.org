<?php

echo "<h2>To-do List</h2>";

if (file_exists(dirname(__FILE__) . '/../text/todo.txt')) {
	echo "<pre>";
	include(dirname(__FILE__) . '/../text/todo.txt');
	//readfile(dirname(__FILE__) . '/../todo.txt');
	//return $text;
	echo "</pre>\n";
	//displayAdminBack(); 
} else {
		echo('<p>' . mkwarn(_("Todo list not found.")) . "</p>\n");
		//var_dump(dirname(__FILE__));
}

echo "<br />\n";
displayAdminBack(); 

?>

