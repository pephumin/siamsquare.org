<?php

$home = "http://www.siamsquare.org";
$admin = $home."/admin";
$self = $_SERVER['PHP_SELF'];
$base = $_SERVER['BASE_PAGE'];

function survey_status($start = "0", $limit = "5", $page = NULL) {

	$base =& $self;
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

/*
* function list_access($sid) {
* 
* 	global $self;
* 	$errstr = "";
* 	$output = "";
* 	
* //	if($_SESSION['acl']['superuser'] == "Y") {
* //		$sql = "SELECT s.name, s.title, s.owner, s.realm, s.public FROM "'.$GLOBALS['ESPCONFIG']['survey_table'].'" s WHERE s.id = $sid";
* //		$sql1 = "SELECT a.realm, a.maxlogin, a.resume, a.navigate FROM "'.$GLOBALS['ESPCONFIG']['access_table'].'" a WHERE a.survey_id = $sid ORDER BY a.* //	realm";
* //	} else {
* //		$realms = array_to_insql(
* //			array_intersect(
* //				$_SESSION['acl']['pall'],
* //				array_merge(
* //					$_SESSION['acl']['pall'],
* //					$_SESSION['acl']['pdesign'])));
* //            $sql = "SELECT s.name, s.title, s.owner, s.realm, s.public FROM "'.$GLOBALS['ESPCONFIG']['survey_table'].'" s WHERE s.id = $sid AND NOT (* //status & "'.STATUS_DELETED. '") AND (s.owner = "'._addslashes($_SESSION['acl']['username']) .'" || s.realm $realms)";
* //		    
* //		    $sql1 = "SELECT a.realm, a.maxlogin, a.resume, a.navigate FROM "'.$GLOBALS['ESPCONFIG']['access_table'].'" a, "'.$GLOBALS['ESPCONFIG']['	* //survey_table'].'" s WHERE a.survey_id = $sid AND s.id=a.survey_id AND (s.owner = "'._addslashes($_SESSION['acl']['username']) .'" || s.//realm $realms) * ORDER BY a.realm";
* //	}
* 
* 	$result = execute_sql($sql);
* 	
* 	if (record_count($result) < 1) { $sid = 0; }
* 
* 	list($name,$title,$owner,$realm,$public) = fetch_row($result); 
* 
* 	db_close($result);
* 
* 	if (!empty($_POST['op'])) $op = $_POST['op'];
* 	elseif (!empty($_GET['op'])) $op = $_GET['op'];
* 	else $op = '';
* 
* 	if (!empty($_POST['realm'])) $arealm = _addslashes($_POST['realm']);
* 	elseif (!empty($_GET['realm'])) $arealm = _addslashes($_GET['realm']);
* 
* 	if (isset($_POST['resume'])) $resume = 'Y';
* 	else $resume = 'N'; $resume = _addslashes($resume);	
* 	
* 	if (isset($_POST['navigate'])) $navigate = 'Y';
* 	else $navigate = 'N'; $navigate = _addslashes($navigate);
* 	
* 	if (!empty($_POST['max'])) $max = intval($_POST['max']);
* 	elseif (!empty($_GET['max'])) $max = intval($_GET['max']);
* 	else $max = 0;
* 
* 	if ($op == 'a') {
* 		if (empty($_POST['realm'])) {
* 			$errstr = mkerror('Please select a group.');
* 		} else {
* 			$sql = "INSERT INTO "'.$GLOBALS['ESPCONFIG']['access_table'].'" (survey_id, realm, maxlogin, resume, navigate) VALUES ($sid, $arealm, $max, * $resume, $navigate)";
* 			execute_sql($sql);
* 		}
* 	} elseif ($op == 'r') {
* 		$sql = "DELETE FROM "'.$GLOBALS['ESPCONFIG']['access_table'].'" WHERE survey_id = $sid AND realm = $arealm ";
* 		execute_sql($sql);
* 	} elseif ($op == 'v') {
* 		$sql = "UPDATE "'.$GLOBALS['ESPCONFIG']['survey_table'].'" SET public = 'N' WHERE id = $sid ";
* 		execute_sql($sql);
* 		$sid = 0;
* 	} elseif ($op == 'p') {
* 		$sql = "UPDATE "'.$GLOBALS['ESPCONFIG']['survey_table'].'" SET public = 'Y' WHERE id = $sid ";
* 		execute_sql($sql);
* 		$sid = 0;
* 	}
* 
* 	if ($public == 'N') { $public = "<span class=\"label label-danger\"><i class=\"fa fa-paper-plane fa-fw\"></i> Private</span> "; }
* 	else { $public = "<span class=\"label label-warning\"><i class=\"fa fa-paper-plane fa-fw\"></i> Public</span> "; }
* 
* //		$r = '<select name="realm"><option></option>';
* //		$groups = array();
* //	    $selected_groups = array();
* //	
* //	    // if realm has already been added then do not include it for reselection.
* //	    $result = execute_sql($sql1);
* //	   	while (list($sg) = fetch_row($result)) {
* //	   		array_push($selected_groups, $sg);
* //	  		$result->MoveNext();
* //	   	}
* //	
* //	    db_close($result);
* //	
* //		if($_SESSION['acl']['superuser'] == 'Y') {
* //	
* //			$sql = "SELECT name FROM "'.$GLOBALS['ESPCONFIG']['realm_table']';
* //			$result = execute_sql($sql);
* //			while( list($g) = fetch_row($result) ) {
* //	            if (!in_array($g, $selected_groups)) {
* //				    array_push($groups, $g);
* //	            }
* //	            $result->MoveNext();
* //			}
* //			db_close($result);
* //	    } else {
* //	        $g =& $_SESSION['acl']['pdesign'];
* //	        foreach ($g as $t) {
* //	            if (!in_array($t, $selected_groups)) {
* //	                array_push($groups, $t);
* //	            }
* //	        }
* //	    }
* //		//oreach($groups as $g) {
* //		//	$r .= "<option value=\"$g\">$g</option>";
* //		//
* //		//r .= '</select>';
* //	}
* 	
* //		$output .= "	<input type=\"hidden\" name=\"where\" value=\"access\" />\n";
* //		$output .= "	<input type=\"hidden\" name=\"sid\" value=\"$sid\" />\n";
* //		$output .= "	<input type=\"hidden\" name=\"op\" value=\"a\" />\n";	
* //		$output .= "	<br />\n";
* //		$output .= "	<table class=\"table table-hover\">\n";
* //		$output .= "		<tr><th>ID</th><td colspan=\"5\">$sid</td></tr>\n";
* //		$output .= "		<tr><th>Name</th><td colspan=\"5\">$name</td></tr>\n";
* //		$output .= "		<tr><th>Title</th><td colspan=\"5\">$title</td></tr>\n"
* //		$output .= "		<tr><th>Owner</th><td colspan=\"5\">$owner</td></tr>\n";
* //		$output .= "		<tr><th>Group</th><td colspan=\"5\">$realm</td></tr>\n";
* //		$output .= "		<tr><th>Public</th><td colspan=\"5\">$public</td></tr>\n";
* //		$output .= "		<tr><td colspan=\"6\"><hr /></td></tr>\n";
* //		$output .= "		<tr class=\"active\"><th>Group</th>\n";
* //		$output .= "			<th>Max Responses</th>\n";
* //		$output .= "			<th>Save/Restore</th>\n";
* //		$output .= "			<th>Back/Forward</th>\n";
* //		$result = execute_sql($sql1);
* //		while ( list($arealm, $amax, $aresume, $anavigate) = fetch_row($result) ) { 
* //			$result->MoveNext();
* //			$output .= "		<tr><td>$arealm</td>\n";
* //			$output .= "			<td>$amax</td>\n";
* //			//$output .= "		<td>($aresume == "Y") ? "Yes" : "No"</td>\n";
* //			//$output .= "			<td>($anavigate == "Y") ? "Yes" : "No"</td>\n";
* //			//$output .= " 			<td><a href=\"$self .htmlentities("?where=access&sid=$sid&op=r&realm=").urlencode($arealm)\">Remove</a></td></tr>\n";
* //		}
* //		$output .= "		<tr><td>$r</td>\n";
* //		$output .= "			<td><input type=\"text\" name=\"max\" size=\"5\"></td>\n";
* //		$output .= "			<td><input type=\"checkbox\" name=\"resume\" /></td>\n";
* //		$output .= "			<td><input type=\"checkbox\" name=\"navigate\" /></td>\n";
* //		$output .= "			<td><input type=\"submit\" value=\"Add\"></td></tr>\n";
* //		$output .= "	</table>\n";
* //		$output .= "	<br /><br />\n";
* //		//return;
* //	}
* 
* //	$output .= "	<table class=\"table table-hover\">\n";
* //	$output .= "		<tr class=\"active\">\n";
* //	$output .= "			<th>Title</th>\n";
* //	$output .= "			<th>Owner (Group)</th>\n";
* //	$output .= "			<th>Public</th>\n";
* //	$output .= "		</tr>\n";
* //	
* //	// load names and titles of all surveys available to _this_ user
* //	
* //	if($_SESSION['acl']['superuser'] == "Y") {
* //		$sql = "SELECT id,name,title,owner,realm,public FROM "'.$GLOBALS['ESPCONFIG']['survey_table'].'" WHERE NOT "'.db_bin('status',STATUS_DELETED).'" * //ORDER BY id DESC";
* //	} else {
* //		$realms = array_to_insql(
* //			array_intersect(
* //				$_SESSION['acl']['pall'],
* //				array_merge(
* //					$_SESSION['acl']['pall'],
* //					$_SESSION['acl']['pdesign'])));
* //		$sql = "SELECT id,name,title,owner,realm,public FROM "'.$GLOBALS['ESPCONFIG']['survey_table'].'" WHERE NOT "'.db_bin('status',STATUS_DELETED).'" * //AND (	owner = "'._addslashes($_SESSION['acl']['username']) .'" || realm $realms) ORDER BY id DESC";
* //	}
* //	
* //	$result = execute_sql($sql);
* //
* //	while(list($sid,$name,$title,$owner,$realm,$public) = fetch_row($result)) {
* //	     $result->MoveNext();
* //	
* //		if ($public == "N") {
* //			$public = "<span class=\"label label-danger\"><i class=\"fa fa-paper-plane fa-fw\"></i> Private</span> ";
* //			//$op = '<small>[<a href="'. $self .htmlentities("?where=access&sid=$sid&op=p").'">change to Public</a>]</small>';
* //		} else {
* //			$public = "<span class=\"label label-warning\"><i class=\"fa fa-paper-plane fa-fw\"></i> Public</span>";
* //			//$op = '<small>[<a href="'. $self .htmlentities("?where=access&sid=$sid&op=v").'">change to Private</a>]</small>';
* //		}
* //
* //		$output .= "		<tr>\n";
* //		//$output .= "			<td><a href=\"htmlentities($self ."?where=access&sid=$sid")\">$title</a></td>\n";
* //		$output .= "			<td>$owner ($realm)</td>\n";
* //		$output .= "			<td>$public $op</td>\n";
* //		$output .= "		</tr>\n";
* //		$output .= "	</table>\n";
* //		$output .= "	<br /><br />\n";
* 	
* //	}
* //	return $output;
* }
*/
?>
