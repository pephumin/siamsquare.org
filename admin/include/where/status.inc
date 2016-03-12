<?php

$base =& $GLOBALS['ESPCONFIG']['ME'];

if(!empty($_GET['sid']))
	$sid = intval($_GET['sid']);

/* operation selected ... */
if(!empty($_GET['op'])) {
	$sql = "SELECT status,owner,realm FROM ".$GLOBALS['ESPCONFIG']['survey_table']." WHERE id=${sid}";
	$result = execute_sql($sql);
	if((list($old_status, $owner, $realm) = fetch_row($result))) {
		$result->MoveNext();
		$access = false;
		$err = false;
		$status = $old_status;
		// trying to perform some operation
		switch(strtolower($_GET['op'])) {
			case 'c':	// Clear
				/* only _superuser_s can do this */
				if($_SESSION['acl']['superuser'] == 'Y') {
					$access = true;
				} else {
					$access = false;
				}
				$status = 0;
				break;
			case 't':	// test
				/* only the owner or a group editor+design */
				if($owner == $_SESSION['acl']['username'] ||
					in_array($realm, array_intersect(
						$_SESSION['acl']['pall'],
						$_SESSION['acl']['pdesign']))) {
					$access = true;
				}
				$status = STATUS_TEST;
				if($old_status & ( STATUS_DELETED | STATUS_DONE | STATUS_ACTIVE ) )
					$err = true;
				break;
			case 'm':	// Edit
				/* only the owner or a group editor+design */
				if($owner == $_SESSION['acl']['username'] ||
					in_array($realm, array_intersect(
						$_SESSION['acl']['pall'],
						$_SESSION['acl']['pdesign']))) {
					$access = true;
				}
				$status = STATUS_EDIT;
				if($old_status & ( STATUS_DELETED | STATUS_DONE | STATUS_ACTIVE ) )
					$err = true;
				else
					response_delete_all($sid);
				break;
			case 'a':	// activate
				/* only the owner+stauts or a group editor+status */
				if(in_array($realm, $_SESSION['acl']['pstatus']) &&
					($owner == $_SESSION['acl']['username'] ||
					in_array($realm, $_SESSION['acl']['pall']))) {
					$access = true;
				}
				$status = STATUS_ACTIVE;
                 // here we also check that we don't activate twice, because
                 // it would delete all current responses ...
				if($old_status & ( STATUS_ACTIVE | STATUS_DELETED | STATUS_DONE ) )
					$err = true;
				else
					response_delete_all($sid);
				break;
			case 'e':	// End
				/* only the owner+stauts or a group editor+status */
				if(in_array($realm, $_SESSION['acl']['pstatus']) &&
					($owner == $_SESSION['acl']['username'] ||
					in_array($realm, $_SESSION['acl']['pall']))) {
					$access = true;
				}
				$status = STATUS_DONE;
				if($old_status & (STATUS_DONE | STATUS_DELETED) )
					$err = true;
				break;
			case 'd':	// Delete
				/* only the owner+stauts or a group editor+status */
				if(in_array($realm, $_SESSION['acl']['pstatus']) &&
					($owner == $_SESSION['acl']['username'] ||
					in_array($realm, $_SESSION['acl']['pall']))) {
					$access = true;
				}
				$status = STATUS_DELETED;
				if($old_status & STATUS_DELETED)
					$err = true;
				break;
		}
		/* superuser overrides all */
		if($_SESSION['acl']['superuser'] == 'Y')
			$access = true;
		if($access || auth_no_access(_('to access this survey'))) {
			if(!$err) {
				$sql = "UPDATE ".$GLOBALS['ESPCONFIG']['survey_table']." SET status=$status WHERE id=${sid}";
				execute_sql($sql);
			} else {
				print mkwarn(_('Can not set survey status.'));
				print mkerror(_('Status') .': '. $old_status);
			}
		}
	}
}
?>
<h2>Survey Status</h2>

<ul class="fa-ul">
	<li><i class="fa-li fa fa-check-square"></i><strong>Test</strong> transitions a survey into testing mode. At which point you may perform a live test by taking the survey, and viewing the results. The survey may be switched back into <strong>Edit</strong> mode if additional edits are needed.</li>
	<li><i class="fa-li fa fa-check-square"></i><strong>Activate</strong> transitions a survey into active mode. In this mode the survey is open for production use, and may be put online. This will clear any results from testing mode (if any). No further editing of survey is allowed.</li>
	<li><i class="fa-li fa fa-check-square"></i><strong>End</strong> transitions a survey into ended mode. In this mode, <u>no edits are possible</u>, no users may take the survey (it is inactive), but results are still viewable from the results menu.</li>
	<li><i class="fa-li fa fa-check-square"></i><strong>Archive</strong> removes this survey. It is still stored in the database, but no further interaction is allowed. You may <b>not</b> view the results of an archived survey.</li>
</ul>

<br />
<table class="table table-hover">
	<tr class="active">
		<th>ID</th>
		<th>Name</th>
		<th>Title</th>
		<th>Owner</th>
		<th>Group</th>
		<th>Status</th>
		<td>Test</td>
		<td>Activate</td>
		<td>End</td>
		<td>Archive</td>
	</tr>

<?php

/* load names and titles of all surveys available to
 * _this_ user */
if($_SESSION['acl']['superuser'] == 'Y') {
	$sql = 'SELECT id,name,title,status,owner,realm FROM '.$GLOBALS['ESPCONFIG']['survey_table'].' ORDER BY id DESC';
} else {
	$realms = array_to_insql(
		array_intersect(
			$_SESSION['acl']['pall'],
			array_merge(
				$_SESSION['acl']['pall'],
				$_SESSION['acl']['pdesign'])));
	$sql = "SELECT id,name,title,status,owner,realm
		FROM ".$GLOBALS['ESPCONFIG']['survey_table']." WHERE (owner = ".
		_addslashes($_SESSION['acl']['username']) ." || realm $realms) ORDER BY id DESC";
}
$result = execute_sql($sql);

$realms = array_intersect(
		$_SESSION['acl']['pstatus'],
		array_merge(
			$_SESSION['acl']['pall'],
			$_SESSION['acl']['pstatus']));

while(list($sid,$name,$title,$status,$owner,$realm) = fetch_row($result)) {
    $result->MoveNext();
	$stat = 'Editing';
	$test = "<a href=\"". $base .htmlentities("?where=status&op=t&sid=${sid}")."\">Test</a>";
	$act  = "<a href=\"". $base .htmlentities("?where=status&op=a&sid=${sid}")."\" onclick='return activateConfirm()'>Activate</a>";
	$done = "<a href=\"". $base .htmlentities("?where=status&op=e&sid=${sid}")."\">End</a>";
	$del  = "<a href=\"". $base .htmlentities("?where=status&op=d&sid=${sid}")."\">Archive</a>";

	if($status & STATUS_DELETED) {
		$stat = _('Archived');
		$test = $act = $done = $del = '&nbsp;';
		continue;
	} elseif($status & STATUS_DONE) {
		$stat = _('Ended');
		$test = $act = $done = '&nbsp;';
	} elseif($status & STATUS_ACTIVE) {
		$stat = _('Active');
		$test = $act = '&nbsp;';
	} elseif($status & STATUS_TEST) {
		$stat = _('Testing');
		$done = '&nbsp;';
		$test = "<a href=\"". $base .htmlentities("?where=status&op=m&sid=${sid}")."\">Edit</a>";
	} else {
		$done = '&nbsp;';
	}

	/* whack things back to permissions set by ACL
	 * for everyone _not_ superuser */
	if($_SESSION['acl']['superuser'] != 'Y' &&
			!in_array($realm, $realms)) {
		$act  = '&nbsp;';
		$done = '&nbsp;';
		$del  = '&nbsp;';
	}

?>
	<tr>
		<td><?php echo($sid); ?></td>
        <?php 
        if ($stat == 'Active') {?>
            <td><a href="<?php print $ESPCONFIG['autopub_url']."?name=".$name; ?>"><?php echo($name); ?></a></td>
        <?php
		} elseif ($stat == 'Testing') { ?>
	   	<td><a href="<?php print $ESPCONFIG['autopub_url']."?name=".$name."&test=1"; ?>"><?php echo($name); ?></a></td>
        <?php
		} elseif ($stat == 'Editing') { ?>
	   	<td><a href="<?php print $base.htmlentities("?where=tab&newid=${sid}"); ?>"><?php echo($name); ?></a></td>
		<?php
        } else { ?>
		<td><?php echo($name); ?></td>
        <?php } ?>
		<td><?php echo($title); ?></td>
		<td><?php echo($owner); ?></td>
		<td><?php echo($realm); ?></td>
		<td><?php echo($stat); ?></td>
		<td><?php echo($test); ?></td>
		<td><?php echo($act); ?></td>
		<td><?php echo($done); ?></td>
		<td><?php echo($del); ?></td>
	</tr>
<?php
	}
?>
</table>
<br /><br />
<?php displayAdminBack(); ?>

