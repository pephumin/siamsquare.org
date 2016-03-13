<?php

function survey_status($start = "0", $limit = "5", $page = NULL) {

	$base =& $GLOBALS['ESPCONFIG']['ME'];
	$public =& $GLOBALS['ESPCONFIG']['autopub_url'];
	$me = $_SERVER['REQUEST_URI'];

	if ($page) { $start = ($page-1) * $limit; }
	$to_record = $start + $limit;

	$add = " LIMIT $start, $limit"; 
	
	// load names and titles of all surveys available to _this_ user */
	if($_SESSION['acl']['superuser'] == 'Y') {
		$sql1 = 'SELECT id,name,title,status,owner,realm FROM '.$GLOBALS['ESPCONFIG']['survey_table'].' ORDER BY id DESC';
		$sql2 = 'SELECT id,name,title,status,owner,realm FROM '.$GLOBALS['ESPCONFIG']['survey_table'].' ORDER BY id DESC' . $add;
	} else {
		$realms = array_to_insql(
			array_intersect(
				$_SESSION['acl']['pall'],
				array_merge(
					$_SESSION['acl']['pall'],
					$_SESSION['acl']['pdesign'])));

		///$sql = "SELECT id,name,title,status,owner,realm
		///	FROM ".$GLOBALS['ESPCONFIG']['survey_table']." WHERE NOT (status & ". STATUS_DELETED .") AND (owner = ".
		///	_addslashes($_SESSION['acl']['username']) ." || realm $realms) ORDER BY id DESC" . $add;
		$sql1 = "SELECT id,name,title,status,owner,realm
			FROM ".$GLOBALS['ESPCONFIG']['survey_table']." WHERE (owner = ".
			_addslashes($_SESSION['acl']['username']) ." || realm $realms) ORDER BY id DESC";
		$sql2 = "SELECT id,name,title,status,owner,realm
			FROM ".$GLOBALS['ESPCONFIG']['survey_table']." WHERE (owner = ".
			_addslashes($_SESSION['acl']['username']) ." || realm $realms) ORDER BY id DESC" . $add;
	}
	$result1 = execute_sql($sql1);
	$result2 = execute_sql($sql2);
	$rows = record_count($result1);

	if ($to_record > $rows) { $to_record = $rows; }
	$from_record = $start + 1;

	echo "<p class=\"text-right\">showing results $from_record to $to_record [total of $rows]</p>";
	echo "<table class=\"table table-hover\">\n";
	echo "	<tr class=\"active\">\n";
	echo "	  <th>Project</th>\n";
	echo "	  <th>Owner (Group)</th>\n";
	echo "	  <th>Edit</th>\n";
	echo "	  <th>Copy</th>\n";
	echo "	  <th>Edit or Testing</th>\n";
	echo "	  <th>Activate</th>\n";
	echo "	  <th>End</th>\n";
	//echo "	  <th>Archive</th>\n";

	echo "	</tr>\n";

	
	$realms = array_intersect(
			$_SESSION['acl']['pstatus'],
			array_merge(
				$_SESSION['acl']['pall'],
				$_SESSION['acl']['pstatus']));
	
	while(list($sid,$name,$title,$status,$owner,$realm) = fetch_row($result2)) {
	    $result2->MoveNext();

		if($status & STATUS_DELETED) {
			$stat = "Archived";
			$test = 'Archived';
			$act = $done = $del = '&nbsp;';
		} elseif($status & STATUS_DONE) {
			$stat = "Ended";
			$test = $act = $done = '&nbsp;';
		} elseif($status & STATUS_ACTIVE) {
			$stat = "Active";
			$test = $act = '&nbsp;';
		} elseif($status & STATUS_TEST) {
			$stat = "Testing";
			$done = '&nbsp;';
			$test = "<span class=\"label label-warning\"><i class=\"fa fa-paper-plane fa-fw\"></i> Testing</span> <small>[<a href=\"". $base .htmlentities("?where=status&op=m&sid=${sid}")."\">change to Editing</a>]</small>";
		} else {
			$stat = "Editing";
			$test = "<span class=\"label label-danger\"><i class=\"fa fa-pencil-square-o fa-fw\"></i> Editing</span> <small>[<a href=\"". $base .htmlentities("?where=status&op=t&sid=${sid}")."\">change to Testing</a>]</small>";
			$act  = "<a href=\"". $base .htmlentities("?where=status&op=a&sid=${sid}")."\" onclick='return activateConfirm()'>Activate</a>";
			$done = "<a href=\"". $base .htmlentities("?where=status&op=e&sid=${sid}")."\">End</a>";
			//$done = '&nbsp;';
			$del  = "<a href=\"". $base .htmlentities("?where=status&op=d&sid=${sid}")."\"><i class=\"fa fa-archive fa-fw\"></i></a>";
			
		}
	
		// whack things back to permissions set by ACL for everyone _not_ superuser
		if($_SESSION['acl']['superuser'] != 'Y' && !in_array($realm, $realms)) {
			$act  = '&nbsp;';
			$done = '&nbsp;';
			$del  = '&nbsp;';
		}
	
		$tt1 = htmlentities($public."?name=$name");
		$tt2 = htmlentities($public."?name=$name&test=1");
		$tt3 = htmlentities($base."?where=tab&newid=$sid");
		$tt4 = htmlentities($base."?where=copy&sid=$sid");
	
		echo "  <tr>\n"; 
		// title
		if ($stat == 'Active') { echo "    <td><a href=\"$tt1\">$title</a></td>\n"; } 
		elseif ($stat == 'Testing') { echo "    <td><a href=\"$tt2\">$title</a></td>\n"; } 
		elseif ($stat == 'Editing') { echo "    <td><a href=\"$tt3\">$title</a></td>\n"; }
		elseif ($stat == 'Archived') { echo "    <td>$title</td>\n"; }
		else { echo "    <td>$title</td>\n"; }
		// user/group
		echo "    <td>$owner ($realm)</td>\n";
		// edit
		if ($stat == 'Active') { echo "    <td><a href=\"$tt1\"><i class=\"fa fa-pencil-square-o fa-fw\"></i></a></td>\n"; } 
		elseif ($stat == 'Testing') { echo "    <td><a href=\"$tt2\"><i class=\"fa fa-pencil-square-o fa-fw\"></i></a></td>\n"; } 
		elseif ($stat == 'Editing') { echo "    <td><a href=\"$tt3\"><i class=\"fa fa-pencil-square-o fa-fw\"></i></a></td>\n"; } 
		elseif ($stat == 'Archived') { echo "    <td>&nbsp;</td>\n"; } 
		else { echo "    <td><i class=\"fa fa-pencil-square-o fa-fw\"></i></td>\n"; }
		// copy
		echo "    <td><a href=\"$tt4\"><i class=\"fa fa-files-o fa-fw\"></i></a></td>\n";
		// test or edit
		// echo "    <td>$stat</td>\n";
		echo "    <td>$test</td>\n";
		// activate
		echo "    <td>$act</td>\n";
		// end
		echo "    <td>$done</td>\n";
		// delete (disable)
		//echo "    <td>$del</td>\n";
		echo "  </tr>\n";
	}
	
	echo "</table>\n";


	// pagination

	//if (preg_match('status', $_SERVER['REQUEST_URI'])) {
	if (strpos($_SERVER['REQUEST_URI'],'status')) {

		$me = "/admin/index.php?where=status";
		$total = ceil($rows/$limit);

		//if ($page > $total) { $page = $total; }
		//if ($page < 1) { $page = 1; }

// the offset of the list, based on current page 
$offset = ($currentpage - 1) * $rowsperpage;
		
		echo "<nav class=\"pagination-centered\">\n";
		echo "  <ul class=\"pagination\">\n";
		
		if ($page > 1) { $previous = $page-1; echo "    <li><a class=\"btn btn-sm btn-default\" href=\"".$me."&p=".$previous."\">&laquo;</a></li>\n"; }
		else { echo "    <li class=\"disabled\"><a class=\"btn btn-sm btn-default\" href=\"\">&laquo;</a></li>\n"; }
		
		for($i=1;$i<=$total;$i++) {
			if($i==$page) { echo "    <li class=\"active\"><a class=\"btn btn-sm btn-default\" href=\"".$me."&p=".$i."\">".$i."</a></li>\n"; }
			else { echo "    <li><a class=\"btn btn-sm btn-default\" href=\"".$me."&p=".$i."\">".$i."</a></li>\n"; }
		}
		
		if ($page != $total) { $next = $page+1; echo "    <li><a class=\"btn btn-sm btn-default\" href=\"".$me."&p=".$next."\">&raquo;</a></li>\n"; }
		else { echo "    <li class=\"disabled\"><a class=\"btn btn-sm btn-default\" href=\"\">&raquo;</a></li>\n"; }
		
		echo "  </ul>\n";
		echo "</nav>\n\n";

	}

	echo "<br />\n\n";
}


?>
