<?php

$base =& $GLOBALS['ESPCONFIG']['ME'];

/* SuperUser or Designers with "Administer Designers(pgroup)" permissions only*/

if($GLOBALS['ESPCONFIG']['auth_type'] != 'ldap_both' &&
$GLOBALS['ESPCONFIG']['auth_type'] != 'ldap_resp' &&
$GLOBALS['ESPCONFIG']['auth_type'] != 'ldap_des' &&
$_SESSION['acl']['superuser'] != 'Y' &&
    count($_SESSION['acl']['pgroup']) == 0 &&
    !auth_no_access(_('to access this form'))) {
    return;
}

//$bg1 =& $ESPCONFIG['bgalt_color1'];
//$bg2 =& $ESPCONFIG['bgalt_color2'];

$errstr = '';
//$success = '';
$u = '';
$r = '';
$arr = array();

/* abort */
if(isset($_POST['cancel'])) {
	unset($_POST['submit']);
	unset($_POST['delete']);
	echo mkwarn(_('The process has been cancelled by you.'));
	include(esp_where('designers'));
	return;
}

/* delete user */
if(isset($_POST['delete'])) {
	unset($_POST['submit']);
	$u = _addslashes($_POST['u']);
	$r = _addslashes($_POST['r']);
	$r2 = _stripslashes($_POST['r']);
	/* user can't delete himself */
	if (isset($_SESSION['username']) && $_SESSION['username']===$u) {
		echo mkwarn(_('You cannot delete yourself.'));
		include(esp_where('designers'));
		return;
	}
	/* check acl */
	if(isset($_SESSION['acl']['superuser']) && $_SESSION['acl']['superuser'] == 'Y' ||
		in_array($r2, $_SESSION['acl']['pgroup']) ||
		auth_no_access(_('to access this group'))) {
		$sql = "DELETE FROM ".$GLOBALS['ESPCONFIG']['designer_table']." WHERE username=$u AND realm=$r";
		if(!execute_sql($sql) || affected_rows() < 1) {
			/* unsucessfull -- abort */
			//$errstr .= mkerror(_('Cannot delete account.') .' ('. ErrorMsg() .')');
			$errstr .= _('Cannot delete account.') .' ('. ErrorMsg() .')';
		} else {
			$success .= _('Account has been deleted successfully.');
		}
	}
	if(empty($errstr)) {
		echo mksuccess(_('Account has been deleted successfully.'));
		include(esp_where('designers'));
		return;
	}
}

/* submitted */
if(isset($_POST['submit'])) {
	if (!empty($_POST['u'])) {
		$u = _addslashes($_POST['u']);
	} else {
		$u = '';
	}
	if (!empty($_POST['r'])) {
		$r = _addslashes($_POST['r']);
		$r2 = _stripslashes($_POST['r']);
	} else {
		$r = '';
		$r2 = '';
	}
	if (!empty($_POST['password'])) {
		$u_password = _addslashes($_POST['password']);
	} else {
		$u_password = '';
	}
	
	$u_fname = _addslashes($_POST['fname']);
	$u_lname = _addslashes($_POST['lname']);
	$u_email = _addslashes($_POST['email']);

	if (!empty($_POST['pdesign'])) {
		$u_pdesign = _addslashes($_POST['pdesign']);
	} else {
		$u_pdesign = _addslashes("Y");
	}
	if (!empty($_POST['pstatus'])) {
		$u_pstatus = _addslashes($_POST['pstatus']);
	} else {
		$u_pstatus = _addslashes("N");
	}
	if (!empty($_POST['pdata'])) {
		$u_pdata = _addslashes($_POST['pdata']);
	} else {
		$u_pdata = _addslashes("N");
	}
	if (!empty($_POST['pall'])) {
		$u_pall = _addslashes($_POST['pall']);
	} else {
		$u_pall = _addslashes("N");
	}
	if (!empty($_POST['pgroup'])) {
		$u_pgroup = _addslashes($_POST['pgroup']);
	} else {
		$u_pgroup = _addslashes("N");
	}
	if (!empty($_POST['puser'])) {
		$u_puser = _addslashes($_POST['puser']);
	} else {
		$u_puser = _addslashes("N");
	}
	if (!empty($_POST['disabled'])) {
		$u_disabled = _addslashes($_POST['disabled']);
	} else {
		$u_disabled = _addslashes("N");
	}

	if(!empty($_POST['ex_year']) ||
			!empty($_POST['ex_month']) ||
			!empty($_POST['ex_day'])) {
		if(empty($_POST['ex_day'])) {
			$u_ex_day = 1;
		} else {
			$u_ex_day = intval($_POST['ex_day']);
		}
		if(empty($_POST['ex_month'])) {
			$u_ex_month = 1;
		} else {
			$u_ex_month = intval($_POST['ex_month']);
		}
		if(empty($_POST['ex_year'])) {
			$now = getdate(time());
			$u_ex_year = $now['year'];
		} else {
			$u_ex_year = intval($_POST['ex_year']);
			if($u_ex_year < 2000)
				$u_ex_year += 2000;
		}

		$u_expiration = sprintf("%04d%02d%02d%06d",
			$u_ex_year,$u_ex_month,$u_ex_day,0);
	} else {
		$u_expiration = "00000000000000";
		$u_ex_year    = '';
		$u_ex_month   = '';
		$u_ex_day     = '';
	}

    /* check acl */
    if($_SESSION['acl']['superuser'] == 'Y' ||
        in_array($r2, $_SESSION['acl']['pgroup']) ||
        auth_no_access(_('to access this group'))) {
        #$sql = "SELECT * FROM ".$GLOBALS['ESPCONFIG']['designer_table']." WHERE username=".db_qstr($u)." AND realm=".db_qstr($r);
        $sql = "SELECT * FROM ".$GLOBALS['ESPCONFIG']['designer_table']." WHERE username=$u";
        $result = execute_sql($sql);
        if(!$result || record_count($result) < 1) {
	/* new user */
        	if(empty($u) || empty($r) || empty($u_password)) {
        		$errstr .= _('Username, Password, and Group are required.');
        	} else {
        		$sql = "INSERT INTO ".$GLOBALS['ESPCONFIG']['designer_table']."
        			(username,realm,password,changed)
        			VALUES ($u,$r, ".db_crypt($u_password).", ".sys_time_stamp().")";
        		if(!execute_sql($sql)) {
        			$u = '';
        			$r = '';
        			$errstr .= _('Error adding account.') .' ('. ErrorMsg() .')';
        		} else {
        			$success .= _('New account has been added successfully.');
        		}
        	}
        }
        db_close($result);
        
        /* change user data */
        if(!empty($u) && !empty($r)) {
        	if (!empty($u_password))
        		$u_password = "password=".db_crypt($u_password).",";
        	$sql = "UPDATE ".$GLOBALS['ESPCONFIG']['designer_table']." SET
        		$u_password
		        realm=$r,
        		fname=$u_fname,
        		lname=$u_lname,
        		email=$u_email,
        		pdesign=$u_pdesign,
        		pstatus=$u_pstatus,
        		pdata=$u_pdata,
        		pall=$u_pall,
        		pgroup=$u_pgroup,
        		puser=$u_puser,
        		disabled=$u_disabled,
        		changed=".sys_time_stamp().",
        		expiration=$u_expiration WHERE username=$u";
        	#WHERE username=$u AND realm=$r;
        	if(!execute_sql($sql)) {
        		/* unsucessfull -- abort */
        		$errstr .= _('Cannot change account data.') .' ('. ErrorMsg() .')';
        	} else {
        		$success .= _('Account has been updated successfully.');
        	}
        }
    }
    if(empty($errstr)) {
    	echo mksuccess(_('Account has been added/updated successfully.'));
    	include(esp_where('designers'));
    	return;
    }
} else if(isset($_GET['u']) && isset($_GET['r'])) {
	$u = _addslashes($_GET['u']);
	$r = _addslashes($_GET['r']);
	$r2 = _stripslashes($_GET['r']);
} else {
	$u = '';
	$r = '';
	$u_expiration = '';
	$u_disabled = 'N';
	$u_pdesign  = 'Y';
	$u_pstatus  = 'N';
	$u_pdata    = 'N';
	$u_pall     = 'N';
	$u_pgroup   = 'N';
	$u_puser    = 'N';
}

/* load ACL */
if(!empty($u) && !empty($r)) {
	$sql = "SELECT * FROM ".$GLOBALS['ESPCONFIG']['designer_table']." WHERE username=$u AND realm=$r";
	$result = execute_sql($sql,"",ADODB_FETCH_ASSOC);
	if($arr = fetch_row($result)) {
		#foreach(array(
		#	'username', 'realm', 'fname', 'lname', 'email',
		#	'pdesign', 'pstatus', 'pdata', 'pall', 'pgroup', 'puser',
		#	'disabled', 'expiration') as $col)
		#	{ $$col = $arr[$col]; }
		#$u =& $username;
		#$r =& $realm;
		#if(intval($expiration) > 0) {
		$u =$arr['username'];
		$r =$arr['realm'];
		$fname = $arr['fname'];
		$lname = $arr['lname'];
		$email = $arr['email'];
		if(intval($arr['expiration']) > 0) {
			$arr['ex_year']  = substr($arr['expiration'],0,4);
			$arr['ex_month'] = substr($arr['expiration'],5,2);
			$arr['ex_day']   = substr($arr['expiration'],8,2);
		} else {
			$arr['ex_year']  = '';
			$arr['ex_month'] = '';
			$arr['ex_day']   = '';
		}
	} else {
		$errstr .= _('Account not found.') .' ('. ErrorMsg() .')';
	}
}

?>
</div>
</form>

<h2>Managing designer accounts</h2>

<?php if(!empty($errstr)) echo(mkerror($errstr)); ?>

<br />

<div class="container">
<form class="form-horizontal" method="post" id="phpesp" action="<?php echo($base); ?>">
  <div class="form-group">
    <label class="col-sm-3 control-label" for="user">Username <span class="label label-danger">required</span></label>
    <div class="col-sm-9">
		<?php
		if(empty($u)) { echo '<input class="form-control" type="text" name="u" placeholder="Username" />'; }
		else { echo '<input class="form-control" type="text" name="u" placeholder='.$u.' disabled/>'; }
		?>
		<p class="text-muted">Assign an user name which will be used as a login.</p>
		<input type="hidden" name="u" value="<?php echo $u; ?>" />
    </div>
  </div>
  <div class="form-group">
    <label class="col-sm-3 control-label" for="password">Password <span class="label label-danger">required</span></label>
    <div class="col-sm-9">
    	<input type="password" class="form-control" name="password" placeholder="Password">
    	<p class="text-muted">Password must be more than 8 charters with a combination of letters and numbers.</p>
    	<input type="hidden" name="password" value="<?php echo $u_password; ?>" />
    </div>
  </div>
  <div class="form-group">
    <label class="col-sm-3 control-label" for="group">Group</label>
    <div class="col-sm-9">
		<?php
		$u_r = '<select name="r" class="form-control"><option></option>';
		$groups = array();
		if($_SESSION['acl']['superuser'] == 'Y') {
			$sql = "SELECT name FROM ".$GLOBALS['ESPCONFIG']['realm_table'];
			$result = execute_sql($sql);
			while( list($g) = fetch_row($result) ) {
				array_push($groups, $g);
				$result->MoveNext();
			}
			db_close($result);
		} else {
			$groups =& $_SESSION['acl']['pgroup'];
		}
		foreach($groups as $g) {
			if (!empty($r) && $g===$r)
			   $u_r .= "<option value=\"$g\" selected>$g</option>";
			else
			   $u_r .= "<option value=\"$g\">$g</option>";
		}
		$u_r .= "</select>\n";
		echo $u_r;
		?>
		<p class="text-muted">Select appropriate group for this user.</p>
    </div>
  </div>
  <div class="form-group form-inline">
    <label class="col-sm-3 control-label" for="name">Name <span class="label label-danger">required</span></label>
    <div class="col-sm-9">
		<?php if(empty($u)) { ?>
    		First name: <input class="form-control" type="text" name="fname" placeholder="Jane" />
    		Last name: <input class="form-control" type="text" name="lname" placeholder="Doe" />
    	<?php } else { ?>
    		First name: <input class="form-control" type="text" name="fname" placeholder="<?php echo $fname; ?>" />
    		Last name: <input class="form-control" type="text" name="lname" placeholder="<?php echo $lname; ?>" />
    	<?php } ?>
    	<p class="text-muted">Enter the full name of this user including first and last name.</p>
    	<input type="hidden" name="fname" value="<?php echo $fname; ?>" />
    	<input type="hidden" name="lname" value="<?php echo $lname; ?>" />
    </div>
  </div>
  <div class="form-group">
    <label class="col-sm-3 control-label" for="lname">Last name <span class="label label-danger">required</span></label>
    <div class="col-sm-9">
		<?php if(empty($u)) { ?>

    	<?php } else { ?>

    	<?php } ?>
    	<p class="text-muted">Enter the full name of this user including first and last name.</p>
    </div>
  </div>
  <div class="form-group">
    <label class="col-sm-3 control-label" for="email">Email <span class="label label-danger">required</span></label>
    <div class="col-sm-9">    	
    	<?php if(empty($u)) { ?>
    		<input class="form-control" type="text" name="email" placeholder="email@compnay.com" />
    	<?php } else { ?>
    		<input class="form-control" type="text" name="email" placeholder="<?php echo $email; ?>" />
    	<?php } ?>
    	<p class="text-muted">Enter correct email.</p>
    </div>
  </div>
  <div class="form-group form-inline">
    <label class="col-sm-3 control-label" for="expiration">Expiration</label>
    <div class="col-sm-9">
		Year: <input class="form-control" type="text" size="4" name="ex_year" placeholder="2017" />&nbsp;
		Month: <input class="form-control" type="text" size="2" name="ex_month" placeholder="01" />&nbsp;
		Day: <input class="form-control" type="text" size="2" name="ex_day" placeholder="01" />
		<p class="text-muted">Assign expiration date (if any).</p>
    </div>
  </div>
  <div class="form-group">
    <label class="col-sm-3 control-label" for="disable">Disable</label>
    <div class="col-sm-9">
    	<select class="form-control" name="disabled">
    		<option value="Y">Yes</option>
    		<option value="N" selected>No</option>
    	</select>
    	<p class="text-muted">Disable this user from using the system.</p>

    </div>
  </div>

  <!-- 
  <div class="form-group">
    <label class="col-sm-3 control-label" for="Username">NOT USE</label>
    <div class="col-sm-9">NOT USE
			<input type="submit" name="submit" value="<?php echo(_('Update')); ?>">&nbsp;
			<input type="submit" name="cancel" value="<?php echo(_('Cancel')); ?>">&nbsp;
			<input type="submit" name="delete" value="<?php echo(_('Delete')); ?>">
    </div>
  </div>
-->
  <div class="form-group">
    <label class="col-sm-3 control-label" for="pdesign">Design Surveys</label>
    <div class="col-sm-9">
    	<select class="form-control" name="pdesign">
    		<option value="Y" selected>Yes</option>
    		<option value="N">No</option>
    	</select>
    	<p class="text-muted">Allow the user to create, edit and test surveys. This option is on by default, and is probably desired for most situations.</p>
    </div>
  </div>

  <div class="form-group">
    <label class="col-sm-3 control-label" for="pstatus">Change Survey Status</label>
    <div class="col-sm-9">
     	<select class="form-control" name="pstatus">
    		<option value="Y" selected>Yes</option>
    		<option value="N">No</option>
    	</select>
    	<p class="text-muted">This lets a user change the status of a survey. Essentially this gives them the ability to release, end, and archive surveys.</p>
    </div>
  </div>
  <div class="form-group">
    <label class="col-sm-3 control-label" for="pdata">Export Survey Data</label>
    <div class="col-sm-9">
     	<select class="form-control" name="pdata">
    		<option value="Y" selected>Yes</option>
    		<option value="N">No</option>
    	</select>
    	<p class="text-muted">Users with this flag, have the option to download the data collected from a survey.</p>
    </div>
  </div>
  <div class="form-group">
    <label class="col-sm-3 control-label" for="pall">Group Editor</label>
    <div class="col-sm-9">
     	<select class="form-control" name="pall">
    		<option value="Y">Yes</option>
    		<option value="N" selected>No</option>
    	</select>
    	<p class="text-muted">By default, users can only perform any of the three actions above on their own surveys. If the Group Editor flag is on, the above permissions are widened to include all surveys created by members of the group.</p>
    </div>
  </div>
  <div class="form-group">
    <label class="col-sm-3 control-label" for="pgroup">Administer Designers</label>
    <div class="col-sm-9">
     	<select class="form-control" name="pgroup">
    		<option value="Y">Yes</option>
    		<option value="N" selected>No</option>
    	</select>
    	<p class="text-muted">This grants the user permission to change flags on users in their group, and to add new users to the group.</p>
    </div>
  </div>
  <div class="form-group">
    <label class="col-sm-3 control-label" for="puser">Administer Respondents</label>
    <div class="col-sm-9">
     	<select class="form-control" name="puser">
    		<option value="Y">Yes</option>
    		<option value="N" selected>No</option>
    	</select>
    	<p class="text-muted">Allows a user to add users to the list of allowed respondents, within their group.</p>
    </div>
  </div>
  <div class="col-sm-offset-3 col-sm-9">
  	<input type="hidden" name="where" value="admdesigner" />
  	<input class="btn btn-success" type="submit" name="submit" value="Create / Update" />&nbsp;
  	<input class="btn btn-default" type="submit" name="cancel" value="Cancel" />&nbsp;
  	<?php if (!(isset($_SESSION['username']) && $_SESSION['username']===$u)) { ?>
  	<input class="btn btn-danger" type="submit" name="delete" value="Delete" />&nbsp;
  	<?php } ?>
  </div>
</form>
</div>


<br />

<br /><br />
<?php displayAdminBack(); ?>
