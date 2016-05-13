<?php

$home = "http://www.siamsquare.org";
$admin = $home."/admin";
$self = $_SERVER['PHP_SELF'];
$base = $_SERVER['BASE_PAGE'];

function survey_status($start = "0", $limit = "5", $page = NULL) {

	global $self;
	$base =& $self;
	$public =& $GLOBALS['ESPCONFIG']['autopub_url'];
	//$me = $_SERVER['REQUEST_URI'];
	$me = "/admin/index.php?where=status";

	$sids = array();
	if(!empty($_POST['list'])) {
		while(list(,$sid) = each($_POST['list'])) {
			array_push($sids, intval($sid));
		}
		survey_purge($sids);
	}

	if ($page) { $start = ($page-1) * $limit; }
	$to_record = $start + $limit;

	$add = " LIMIT $start, $limit"; 
	
	// load names and titles of all surveys available to _this_ user */
	if($_SESSION['acl']['superuser'] == 'Y') {

		//$sql1 = 'SELECT id,name,title,status,owner,realm FROM '.$GLOBALS['ESPCONFIG']['survey_table'].' ORDER BY id DESC';
		//$sql2 = 'SELECT id,name,title,status,owner,realm FROM '.$GLOBALS['ESPCONFIG']['survey_table'].' ORDER BY id DESC' . $add;

		$sql1 = "SELECT s.id,s.name,s.title,s.status,s.owner,s.realm,COUNT(q.id) as count FROM ".$GLOBALS['ESPCONFIG']['survey_table']." s LEFT JOIN ".$GLOBALS['ESPCONFIG']['question_table']." q ON s.id = q.survey_id AND q.deleted = 'N' GROUP BY s.id, s.name, s.title, s.status, s.owner, s.realm ORDER BY s.id DESC";
		$sql2 = "SELECT s.id,s.name,s.title,s.status,s.owner,s.realm,COUNT(q.id) as count FROM ".$GLOBALS['ESPCONFIG']['survey_table']." s LEFT JOIN ".$GLOBALS['ESPCONFIG']['question_table']." q ON s.id = q.survey_id AND q.deleted = 'N' GROUP BY s.id, s.name, s.title, s.status, s.owner, s.realm ORDER BY s.id DESC"  . $add;

	} else {
		$realms = array_to_insql(
			array_intersect(
				$_SESSION['acl']['pall'],
				array_merge(
					$_SESSION['acl']['pall'],
					$_SESSION['acl']['pdesign'])));

		//$sql1 = "SELECT id,name,title,status,owner,realm
		//	FROM ".$GLOBALS['ESPCONFIG']['survey_table']." WHERE (owner = ".
		//	_addslashes($_SESSION['acl']['username']) ." || realm $realms) ORDER BY id DESC";
		//$sql2 = "SELECT id,name,title,status,owner,realm
		//	FROM ".$GLOBALS['ESPCONFIG']['survey_table']." WHERE (owner = ".
		//	_addslashes($_SESSION['acl']['username']) ." || realm $realms) ORDER BY id DESC" . $add;

		$sql1 = "SELECT s.id,s.name,s.title,s.status,s.owner,s.realm,COUNT(q.id) as count FROM ".$GLOBALS['ESPCONFIG']['survey_table']." s LEFT JOIN ".$GLOBALS['ESPCONFIG']['question_table']." q ON s.id = q.survey_id AND q.deleted = 'N' GROUP BY s.id, s.name, s.title, s.status, s.owner, s.realm ORDER BY s.id DESC";
		$sql2 = "SELECT s.id,s.name,s.title,s.status,s.owner,s.realm,COUNT(q.id) as count FROM ".$GLOBALS['ESPCONFIG']['survey_table']." s LEFT JOIN ".$GLOBALS['ESPCONFIG']['question_table']." q ON s.id = q.survey_id AND q.deleted = 'N' GROUP BY s.id, s.name, s.title, s.status, s.owner, s.realm ORDER BY s.id DESC"  . $add;

	}
	$result1 = execute_sql($sql1);
	$result2 = execute_sql($sql2);
	$rows = record_count($result1);

	if ($to_record > $rows) { $to_record = $rows; }
	$from_record = $start + 1;

	echo "<p class=\"text-right\">showing results $from_record to $to_record [<a href=\"".$me."\">total of $rows</a>]</p>";
	echo "<table class=\"table table-hover\">\n";
	echo "	<tr class=\"active\">\n";
	echo "	  <th>Project</th>\n";
	echo "	  <th>Owner (Group)</th>\n";
	echo "	  <th>No. of questions</th>\n";
	echo "	  <th>Status</th>\n";
	echo "	  <th>Tools<br /><small>[edit/copy/activate]</small></th>\n";
	//if($_SESSION['acl']['superuser'] == 'Y') { echo "	  <th>Delete?</th>\n"; }

	echo "	</tr>\n";

	
	$realms = array_intersect(
			$_SESSION['acl']['pstatus'],
			array_merge(
				$_SESSION['acl']['pall'],
				$_SESSION['acl']['pstatus']));
	
	while(list($sid,$name,$title,$status,$owner,$realm,$qnum) = fetch_row($result2)) {
	    $result2->MoveNext();

		$tt1 = htmlentities($public."?name=$name");
		$tt2 = htmlentities($public."?name=$name&test=1");
		$tt3 = htmlentities($base."?where=tab&newid=$sid");
		$tt4 = htmlentities($base."?where=copy&sid=$sid");
		$tt5 = htmlentities($base."?where=results&sid=$sid");
		$tt6 = htmlentities($base."?where=results&sid=$sid&type=cross");
		$tt7 = htmlentities($base."?where=report&sid=$sid");

		// results
		$results = "      <a href=\"$tt5\">Result <i class=\"fa fa-pie-chart fa-fw\"></i></a> | \n";
		$results .= "      <a href=\"$tt6\">Cross tab <i class=\"fa fa-bar-chart fa-fw\"></i></a> | \n";
		$results .= "      <a href=\"$tt7\">Report <i class=\"fa fa-line-chart fa-fw\"></i></a>\n";

		if($status & STATUS_DELETED) {
			$stat = "Archived";
			$test = 'Archived';
			$done = '&nbsp;';
			$act = '&nbsp;';
			$del = '&nbsp;';
		} elseif($status & STATUS_DONE) {
			$stat = "Ended";
			$test = $act = '&nbsp;';
			$done = '&nbsp;';
			$act = '&nbsp;';
			$del = '&nbsp;';
		} elseif($status & STATUS_ACTIVE) {
			$stat = "Active";
			$test = "<span class=\"label label-success\"><i class=\"fa fa-check fa-fw\"></i> Active</span> <small>[".$results."]</small>";
			$done = '&nbsp;';
			$act = '&nbsp;';
			$del = '&nbsp;';
		} elseif($status & STATUS_TEST) {
			$stat = "Testing";
			$test = "<span class=\"label label-warning\"><i class=\"fa fa-paper-plane fa-fw\"></i> Testing</span> <small>[ <a href=\"". $base .htmlentities("?where=status&op=m&sid=${sid}")."\">change to Editing</a> ]</small>";
			$done = '&nbsp;';
			$act = '&nbsp;';
			$del = '&nbsp;';
		} else {
			$stat = "Editing";
			$test = "<span class=\"label label-danger\"><i class=\"fa fa-pencil-square-o fa-fw\"></i> Editing</span> <small>[ <a href=\"". $base .htmlentities("?where=status&op=t&sid=${sid}")."\">change to Testing</a> ]</small>";
			if ($_SESSION['acl']['superuser'] == 'Y') { $done = "<a href=\"". $base .htmlentities("?where=status&op=e&sid=$sid")."\"><i class=\"fa fa-trash-o fa-fw\"></i></a>"; }
			else { $done = '&nbsp;'; }
			$act  = "<a href=\"". $base .htmlentities("?where=status&op=a&sid=$sid")."\" onclick='return activateConfirm()'><i class=\"fa fa-toggle-on fa-fw\"></i></a>";
			$del  = "<a href=\"". $base .htmlentities("?where=status&op=d&sid=$sid")."\"><i class=\"fa fa-archive fa-fw\"></i></a>";
		}
	
		// whack things back to permissions set by ACL for everyone _not_ superuser
		if($_SESSION['acl']['superuser'] != 'Y' && !in_array($realm, $realms)) {
			$act  = '&nbsp;';
			$done = '&nbsp;';
			$del  = '&nbsp;';
		}
		
		echo "  <tr>\n";
		// title
		if ($stat == 'Active') { echo "    <td><a href=\"$tt1\">$title</a></td>\n"; } 
		elseif ($stat == 'Testing') { echo "    <td><a href=\"$tt2\">$title</a></td>\n"; } 
		elseif ($stat == 'Editing') { echo "    <td><a href=\"$tt3\">$title</a></td>\n"; }
		elseif ($stat == 'Archived') { echo "    <td>$title</td>\n"; }
		else { echo "    <td>$title</td>\n"; }
		// user/group
		echo "    <td>$owner ($realm)</td>\n";
		// question numbers
		echo "    <td class=\"text-center\">$qnum</td>\n";
		// test or edit
		echo "    <td>$test</td>\n";
		// 
		// edit/copy & activate/end
 		$copy = "<a href=\"$tt4\"><i class=\"fa fa-files-o fa-fw\"></i></a>\n";
		if ($stat == 'Active') { echo "    <td>&nbsp;</td>\n"; } 
		elseif ($stat == 'Testing') { echo "    <td><a href=\"$tt2\"><i class=\"fa fa-paper-plane fa-fw\"></i></a> $copy $act $done</td>\n"; } 
		elseif ($stat == 'Editing') { echo "    <td><a href=\"$tt3\"><i class=\"fa fa-pencil-square-o fa-fw\"></i></a> $copy $act $done</td>\n"; } 
		elseif ($stat == 'Archived') { echo "    <td>&nbsp;</td>\n"; } 
		else { echo "    <td><i class=\"fa fa-pencil-square-o fa-fw\"></i></td>\n"; }
		
		// delete (disable)
		//echo "    <td>$del</td>\n";
		//if($_SESSION['acl']['superuser'] == 'Y') { 
		//	//echo "    <td><input type=\"checkbox\" name=\"list[]\" value=\"$sid\" />"; 
		//	//echo "<p class=\"text-center\">\n";
		//	//echo "<td \"text-center\">\n";
		//	echo "<td class=\"text-right\">\n";
		//	if ($status & STATUS_DELETED) {
		//		echo "Deleted\n";
		//	} else {
		//		echo "<input type=\"checkbox\" name=\"list[]\" value=\"$sid\" />";
		//	}
		//	echo "</td>\n\n";
		//	//echo "<input class=\"btn btn-default\" type=\"reset\" name=\"reset\" value=\"Clear Checks\" />\n";
		//	//echo "</p>\n\n";
		//
		//}
		echo "  </tr>\n";
	}
	
	echo "</table>\n\n";

	//if($_SESSION['acl']['superuser'] == 'Y') { 
	//
	//	echo "<p class=\"text-right\">\n";
	//	echo "<input type=\"hidden\" name=\"where\" value=\"purge\" /> &nbsp; \n";
	//	$confirmText = "You are about to PERMANENTLY and IRREVOCABLY remove ALL information about the selected surveys. Click Ok if you are absolutely //sure this is what you want to do.\n";
	//	echo "<input class=\"btn btn-danger btn-sm\" type=\"submit\" name=\"submit\" onclick='return confirm(\"You are about to PERMANENTLY and IRREVOCABLY remove ALL information about the selected surveys. Click Ok if you are absolutely sure this is what you want to do.\")' onkeypress='return confirm (\"You are about to PERMANENTLY and IRREVOCABLY remove ALL information about the selected surveys. Click Ok if you //are absolutely sure this is what you want to do.\");' value=\"Delete selected data\" />\n";
	//	echo "<input class=\"btn btn-default btn-sm\" type=\"reset\" name=\"reset\" value=\"Clear checks\" />";
	//	echo "</p>\n\n";
	//}

	// pagination
	if (strpos($_SERVER['REQUEST_URI'],'status')) {
		
		$total = ceil($rows/$limit);
		$offset = ($currentpage - 1) * $rowsperpage;
		
		echo "<nav class=\"pagination-centered\">\n";
		echo "  <ul class=\"pagination\">\n";
		
		if ($page > 1) { $previous = $page-1; echo "    <li><a class=\"btn btn-sm btn-default\" href=\"".$me."&p=".$previous."\">&laquo;</a></li>\n"; }
		else { echo "    <li class=\"disabled\"><a class=\"btn btn-sm btn-default\" href=\"\">&laquo;</a></li>\n"; }
		
		for ($i=1;$i<=$total;$i++) {
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


function progressbar($section, $total) {
	$progress = ($section/$total) * 100;
	$progress = round ($progress, 1);
	$output = "<div class=\"progress\">\n";
	$output .= "  <div class=\"progress-bar progress-bar-striped\" role=\"progressbar\" aria-valuenow=\"$progress\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: $progress%\">\n";
	$output .= "   $progress% <span class=\"sr-only\">$progress% completion</span>\n";
	$output .= "  </div>\n";
	$output .= "</div>\n";
	return $output;
}

function autotext($choice_content, $choice_content_th) {
	if ($choice_content_th == '') {
		if ($choice_content == '!other') { $choice_content_th = 'อื่นๆ (ะบุ)'; }
		if ($choice_content == 'Refused to answer') { $choice_content_th = 'ปฏิเสธ'; }
		if ($choice_content == 'Cannot remember') { $choice_content_th = 'จำไม่ได้'; }
		if ($choice_content == 'Prefer not to answer') { $choice_content_th = 'ปฏิเสธ'; }
		if ($choice_content == 'None of the above') { $choice_content_th = 'ไม่มีที่กล่าวข้างต้น'; }
		if ($choice_content == 'Male') { $choice_content_th = 'ผู้ชาย'; }
		if ($choice_content == 'Female') { $choice_content_th = 'ผู้หญิง'; }
		if ($choice_content == 'SES-A') { $choice_content_th = 'สถานะภาพทางสังคม A'; }
		if ($choice_content == 'SES-B') { $choice_content_th = 'สถานะภาพทางสังคม B'; }
		if ($choice_content == 'SES-C') { $choice_content_th = 'สถานะภาพทางสังคม C'; }
		if ($choice_content == 'SES-D') { $choice_content_th = 'สถานะภาพทางสังคม D'; }
		if ($choice_content == 'SES-E') { $choice_content_th = 'สถานะภาพทางสังคม E'; }		
	} 

	return $choice_content_th;
}

function ago($time) {
    $periods = array("second", "minute", "hour", "day", "week", "month", "year", "decade");
    $lengths = array("60","60","24","7","4.35","12","10");
    $now = time();
    $difference = $now - $time;
    $tense = "ago";
    for($j = 0; $difference >= $lengths[$j] && $j < count($lengths)-1; $j++) { $difference /= $lengths[$j]; }
    $difference = round($difference);
    if($difference != 1) { $periods[$j].= "s"; }
    return "$difference $periods[$j] 'ago' ";
}

function textreplacement($text) {
    $replace = array(
            // 'WORD TO REPLACE' => 'REPLACE WORD WITH THIS'
            'wordpress' => '<a href="#">wordpress</a>',
            'excerpt' => '<a href="#">excerpt</a>',
            'function' => '<a href="#">function</a>'
    );
    $text = str_replace(array_keys($replace), $replace, $text);
    return $text;
}


function clickemail($text) {
	$text = eregi_replace('([_\.0-9a-z-]+@([0-9a-z][0-9a-z-]+\.)+[a-z]{2,3})','<a href="mailto:\\1">\\1</a>', $text);
	return $text;
}

function fileWrite($file, $message) {
	// append
	fwrite(fopen($file, 'a'), $message . "\n");
}

function fileRead($file) {
   $lines = file($file);
   foreach ($lines as $line_num => $line) { echo "$line</br>\n"; }
}

function decode_json($json) {
	//$json ='{"id":1,"name":"foo","interest":["wordpress","php"]} ';
	$obj = json_decode($json);
	return $obj->interest[1]; //prints php
}

function makelink($str) {
	$reg_exUrl = "/(http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/";
	$urls = array();
	$urlsToReplace = array();
	if(preg_match_all($reg_exUrl, $str, $urls)) {
		$numOfMatches = count($urls[0]);
		$numOfUrlsToReplace = 0;
		for($i=0; $i<$numOfMatches; $i++) {
			$alreadyAdded = false;
			$numOfUrlsToReplace = count($urlsToReplace);
			for($j=0; $j<$numOfUrlsToReplace; $j++) {
				if($urlsToReplace[$j] == $urls[0][$i]) { $alreadyAdded = true; }
			}
			if(!$alreadyAdded) { array_push($urlsToReplace, $urls[0][$i]); }
		}
		$numOfUrlsToReplace = count($urlsToReplace);
		for($i=0; $i<$numOfUrlsToReplace; $i++) {
			$str = str_replace($urlsToReplace[$i], "<a href=\"".$urlsToReplace[$i]."\">".$urlsToReplace[$i]."</a> ", $str);
		}
		return $str;
	} else {
		return $str;
	}
}

function br2newline($input) {
     $out = str_replace( "<br>", "\n", $input );
     $out = str_replace( "<br/>", "\n", $out );
     $out = str_replace( "<br />", "\n", $out );
     $out = str_replace( "<BR>", "\n", $out );
     $out = str_replace( "<BR/>", "\n", $out );
     $out = str_replace( "<BR />", "\n", $out );
     return $out;
}

function br2nl($input) {
 return preg_replace('/<br(\s+)?\/?>/i', "\n", $input);
}

function dataURIs($file) {
	// convert gif to data
	$datafile = base64_encode(file_get_contents($file));
	return $datafile;
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
