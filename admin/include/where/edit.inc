<?php

$base =& $GLOBALS['ESPCONFIG']['ME'];

// load names and titles of all surveys available to _this_ user
if($_SESSION['acl']['superuser'] == 'Y') {
	$sql = "SELECT s.id, s.name, s.title, s.owner, s.realm FROM ".$GLOBALS['ESPCONFIG']['survey_table']." s WHERE s.status = 0 ORDER BY s.id DESC";
} else {
	$realms = array_to_insql(
		array_intersect(
			$_SESSION['acl']['pall'],
			$_SESSION['acl']['pdesign']));
	$sql = "SELECT s.id, s.name, s.title, s.owner, s.realm FROM ".$GLOBALS['ESPCONFIG']['survey_table']." s WHERE s.status = 0 AND (s.owner = ". _addslashes($_SESSION['acl']['username']) ." || s.realm $realms) ORDER BY id DESC";
}
$result = execute_sql($sql);

echo "<h2>Edit a Survey</h2>\n";
echo "<br />\n";
echo "<p>Pick Survey to Edit</p>\n";
echo "<br />\n\n";
echo "<table class=\"table table-hover\">\n";
echo "	<tr class=\"active\">\n";
echo "		<th>Title</th>\n";
echo "		<th>Owner</th>\n";
echo "		<th>Company</th>\n";
echo "		<th>Edit</th>\n";
echo "	</tr>\n";

while(list($sid,$name,$title,$owner,$realm) = fetch_row($result)) {
	$result->MoveNext();
	$tt1 = htmlentities($base."?where=tab&newid=$sid");
	echo "	<tr>\n";
	echo "		<td><a href=\"$tt1\">$title</a></td>\n";
	echo "		<td>$owner</td>\n";
	echo "		<td>$realm</td>\n";
	echo "		<td><a href=\"$tt1\"><i class=\"fa fa-pencil-square-o fa-fw\"></a></td>\n";
	echo "	</tr>\n";

}
db_close($result);
echo "</table>\n";
echo "<br />\n";
displayAdminBack(); 

?>

