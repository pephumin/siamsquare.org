<?php

$base =& $GLOBALS['ESPCONFIG']['ME'];

/* SuperUser or Designers with "Administer Designers(pgroup)" permissions only*/
if(($_SESSION['acl']['superuser'] != 'Y') && count($_SESSION['acl']['pgroup']) == 0 && !auth_no_access(_('to access this form'))) {
	return;
}
 
$sql = 'SELECT username, fname, lname, realm, disabled, expiration FROM '.$GLOBALS['ESPCONFIG']['designer_table'];

/* load only accounts available to _this_ user */
if($_SESSION['acl']['superuser'] != 'Y') {
	$realms = array_to_insql(
		array_merge(
			$_SESSION['acl']['pall'],
			$_SESSION['acl']['puser']));
	$sql .= " WHERE realm $realms";
}

$sql .= ' ORDER BY ';
//$base = $GLOBALS['ESPCONFIG']['ME'] .'?where=designers';
if(!isset($_GET['u'])) $_GET['u'] = '';
if(!isset($_GET['g'])) $_GET['g'] = '';
if(!isset($_GET['f'])) $_GET['f'] = '';
if(!isset($_GET['l'])) $_GET['l'] = '';
if(!isset($_GET['s'])) $_GET['s'] = '';

if($_GET['u'] == 'd') {
	$us = 'username DESC';
	$u = 'a';
} else {
	$_GET['u'] = 'a';
	$us = 'username ASC';
	$u = 'd';
}
if($_GET['g'] == 'd') {
	$gs = 'realm DESC';
	$g = 'a';
} else {
	$_GET['g'] = 'a';
	$gs = 'realm ASC';
	$g = 'd';
}
if($_GET['f'] == 'd' || $_GET['l'] == 'd') {
	$ls = 'lname DESC';
	$l = 'a';
	$fs = 'fname DESC';
	$f = 'a';
} else {
	$_GET['l'] = 'a';
	$ls = 'lname ASC';
	$l = 'd';
	$_GET['f'] = 'a';
	$fs = 'fname ASC';
	$f = 'd';
}
if($_GET['s'] == 'g') {
	$sql .= "$gs, $us";
	$u = "&s=u&g=" . $_GET['g'] ."&u=". $_GET['u'];
	$g = "&s=g&g=$g&u=". $_GET['u'];
	$f = "&s=f";
	$l = "&s=l";
} elseif($_GET['s'] == 'f' || $_GET['s'] == 'l') {
	$sql .= "$fs, $ls";
	$f = "&s=f&f=$f";
	$l = "&s=l&l=$l";
	$u = "&s=u";
	$g = "&s=g";
} else {
	$sql .= "$us, $gs";
	$u = "&s=u&g=" . $_GET['g'] ."&u=$u";
	$g = "&s=g&g=" . $_GET['g'] ."&u=". $_GET['u'];
	$f = "&s=f";
	$l = "&s=l";
}

$result = execute_sql($sql);
?>

<h2>Managing Designer Accounts</h2>

<br />

<p><Click on a username to edit, or click on add new user below.</p>

<p>
	<a href="<?php echo($GLOBALS['ESPCONFIG']['ME'] .htmlentities("?where=admdesigner")); ?>">Add a new designer</a> / 
	<a href="<?php echo($GLOBALS['ESPCONFIG']['ME'] .htmlentities("?where=upload&account_type=designers")); ?>">Bulk upload designers</a>
</p>

<br />

<table class="table table-hover">
	<tr>
		<th><a href="<?php echo(htmlentities($base . $u)); ?>">Username</a></th>
		<th><a href="<?php echo(htmlentities($base . $f)); ?>">First Name</a></th>
		<th><a href="<?php echo(htmlentities($base . $l)); ?>">Last Name</a></th>
		<th><a href="<?php echo(htmlentities($base . $g)); ?>">Company</a></th>
		<th>&nbsp;</th>
	</tr>
<?php
	while(list($u, $fname, $lname, $r, $d, $e) = fetch_row($result)) {
        $result->MoveNext();
		if($d == 'N')
			$d = '&nbsp;';
		else
			$d = '('. _('disabled') .')';
		
		if (empty($fname)) $fname = '&nbsp;';
		if (empty($lname)) $lname = '&nbsp;';
		
		//if ($bg == $ESPCONFIG['bgalt_color1'])
		//	$bg =& $ESPCONFIG['bgalt_color2'];
		//else
		//	$bg =& $ESPCONFIG['bgalt_color1'];
?>
	<tr>
		<td>
			<a href="<?php echo($GLOBALS['ESPCONFIG']['ME'] .htmlentities("?where=admdesigner&u=$u&r=$r")); ?>"><?php echo($u); ?></a>
		</td>
		<td><?php echo($fname); ?></td>
		<td><?php echo($lname); ?></td>
		<td><?php echo($r); ?></td>
		<td><?php echo($d); ?></td>
	</tr>


<?php
}
?>

</table>
<br />
<?php displayAdminBack(); ?>
