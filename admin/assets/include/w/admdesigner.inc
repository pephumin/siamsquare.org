<?php

if ($_SESSION['acl']['superuser'] != 'Y' && count($_SESSION['acl']['pgroup']) == 0 && !auth_no_access('to access this form')) { return; }

$errstr = '';
//$success = '';
$u = '';
$r = '';
$arr = array();

/* abort */
if (isset($_POST['cancel'])) { unset($_POST['submit']); unset($_POST['delete']); echo mkwarn('The process has been cancelled by you.'); include(wAdmin('designers')); return; }

/* delete user */
if (isset($_POST['delete'])) {
  unset($_POST['submit']);
  $u = _addslashes($_POST['u']);
  $r = _addslashes($_POST['r']);
  $r2 = _stripslashes($_POST['r']);
  if (isset($_SESSION['username']) && $_SESSION['username'] === $u) { echo mkwarn('You cannot delete yourself.'); include(wAdmin('designers')); return; }
  if (isset($_SESSION['acl']['superuser']) && $_SESSION['acl']['superuser'] == 'Y' ||
    in_array($r2, $_SESSION['acl']['pgroup']) || auth_no_access('to access this group')) {
    $sql = "DELETE FROM ".X_DESIGNER." WHERE username = $u AND realm = $r";
    if (!execute_sql($sql) || affected_rows() < 1) { $errstr .= 'Cannot delete account.' .' ('. ErrorMsg() .')'; }
    else { $success .= 'Account has been deleted successfully.'; }
  }
  if (empty($errstr)) { echo mksuccess('Account has been deleted successfully.'); include(wAdmin('designers')); return; }
}

/* submitted */
if (isset($_POST['submit'])) {
  if (!empty($_POST['u'])) { $u = _addslashes($_POST['u']); } else { $u = ''; }
  if (!empty($_POST['r'])) { $r = _addslashes($_POST['r']); $r2 = _stripslashes($_POST['r']); } else { $r = ''; $r2 = ''; }
  if (!empty($_POST['password'])) { $u_password = _addslashes($_POST['password']); } else { $u_password = ''; }
  $u_fname = _addslashes($_POST['fname']);
  $u_lname = _addslashes($_POST['lname']);
  $u_email = _addslashes($_POST['email']);
  if (!empty($_POST['pdesign'])) { $u_pdesign = _addslashes($_POST['pdesign']); } else { $u_pdesign = _addslashes("Y"); }
  if (!empty($_POST['pstatus'])) { $u_pstatus = _addslashes($_POST['pstatus']); } else { $u_pstatus = _addslashes("N"); }
  if (!empty($_POST['pdata'])) { $u_pdata = _addslashes($_POST['pdata']); } else { $u_pdata = _addslashes("N"); }
  if (!empty($_POST['pall'])) { $u_pall = _addslashes($_POST['pall']); } else { $u_pall = _addslashes("N"); }
  if (!empty($_POST['pgroup'])) { $u_pgroup = _addslashes($_POST['pgroup']); } else { $u_pgroup = _addslashes("N"); }
  if (!empty($_POST['puser'])) { $u_puser = _addslashes($_POST['puser']); } else { $u_puser = _addslashes("N"); }
  if (!empty($_POST['disabled'])) { $u_disabled = _addslashes($_POST['disabled']); } else { $u_disabled = _addslashes("N"); }
  if (!empty($_POST['ex_year']) || !empty($_POST['ex_month']) || !empty($_POST['ex_day'])) {
    if (empty($_POST['ex_day'])) { $u_ex_day = 1; } else { $u_ex_day = intval($_POST['ex_day']); }
    if (empty($_POST['ex_month'])) { $u_ex_month = 1; } else { $u_ex_month = intval($_POST['ex_month']); }
    if (empty($_POST['ex_year'])) { $now = getdate(time()); $u_ex_year = $now['year']; } else { $u_ex_year = intval($_POST['ex_year']); if ($u_ex_year < 2000) { $u_ex_year += 2000; } }
    $u_expiration = sprintf("%04d%02d%02d%06d", $u_ex_year,$u_ex_month,$u_ex_day,0);
  } else {
    $u_expiration = "00000000000000";
    $u_ex_year    = '';
    $u_ex_month   = '';
    $u_ex_day     = '';
  }

  /* check acl */
  if ($_SESSION['acl']['superuser'] == 'Y' || in_array($r2, $_SESSION['acl']['pgroup']) || auth_no_access('to access this group')) {
    $sql = "SELECT * FROM ".X_DESIGNER." WHERE username = $u";
    $result = execute_sql($sql);
    if (!$result || record_count($result) < 1) {
      if (empty($u) || empty($r) || empty($u_password)) { $errstr .= 'Username, Password, and Group are required.'; }
      else {
        $sql = "INSERT INTO ".X_DESIGNER." (username, realm, password, added, changed) VALUES ($u,$r, ".db_crypt($u_password).", ".sys_time_stamp().", ".sys_time_stamp().")";
        if (!execute_sql($sql)) { $u = ''; $r = ''; $errstr .= 'Error adding account.' .' ('. ErrorMsg() .')'; } else { $success .= 'New account has been added successfully.'; }
      }
    }
    db_close($result);

    if (!empty($u) && !empty($r)) {
      if (!empty($u_password)) { $u_password = "password = ".db_crypt($u_password).","; }
      $sql = "UPDATE ".X_DESIGNER." SET $u_password realm = $r, fname = $u_fname, lname = $u_lname, email = $u_email, pdesign = $u_pdesign, pstatus = $u_pstatus, pdata = $u_pdata, pall = $u_pall, pgroup = $u_pgroup, puser = $u_puser, disabled = $u_disabled, changed = ".sys_time_stamp().", expiration = $u_expiration WHERE username = $u";
      if (!execute_sql($sql)) { $errstr .= 'Cannot change account data.' .' ('. ErrorMsg() .')'; } else { $success .= 'Account has been updated successfully.'; }
    }
  }
  if (empty($errstr)) {
    echo mksuccess('Account has been added/updated successfully.');
    include(wAdmin('designers'));
    return;
  }
} else if (isset($_GET['u']) && isset($_GET['r'])) {
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

if (!empty($u) && !empty($r)) {
  $sql = "SELECT * FROM ".X_DESIGNER." WHERE username = $u AND realm = $r";
  $result = execute_sql($sql, "", ADODB_FETCH_ASSOC);
  if ($arr = fetch_row($result)) {
    $u = $arr['username'];
    $r = $arr['realm'];
    if (intval($arr['expiration']) > 0) { $arr['ex_year']  = substr($arr['expiration'], 0, 4); $arr['ex_month'] = substr($arr['expiration'], 5, 2); $arr['ex_day']   = substr($arr['expiration'], 8, 2); }
    else { $arr['ex_year']  = ''; $arr['ex_month'] = ''; $arr['ex_day']   = ''; }
  } else {
    $errstr .= 'Account not found.' .' ('. ErrorMsg() .')';
  }
}

?>

<h2>Managing designer accounts</h2>

<?php if (!empty($errstr)) echo(mkerror($errstr)); ?>

<form class="form-horizontal" method="post" action="<?php echo htmlspecialchars(ME); ?>">

  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">Username <span class="label label-danger">required</span></label>
    <div class="col-xs-12 col-sm-9 col-md-9 col-lg-39">
    <?php
    if (empty($u)) {
      $u_u = mktext('u', 16, 16, $GLOBALS);
    } else {
      $u_u = '<input class="form-control" type="text" name="u" value="'.$u.'" disabled>';
      $u_u .= '<input type="hidden" name="u" value="'.$u.'">';
    }
    echo $u_u;
    ?>
    <p class="text-muted">Assign an user name which will be used as a login.</p>
    </div>
  </div>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">Password <span class="label label-danger">required</span></label>
    <div class="col-xs-12 col-sm-9 col-md-9 col-lg-39">
      <!-- <input type="password" class="form-control" name="password" placeholder="Password"> -->
      <?php echo mkpass('password'); ?>
      <p class="text-muted">Password must be more than 8 charters with a combination of letters and numbers.</p>
    </div>
  </div>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">Group <span class="label label-danger">required</span></label>
    <div class="col-xs-12 col-sm-9 col-md-9 col-lg-39">
    <?php
    $groups = array();
    if ($_SESSION['acl']['superuser'] == 'Y') {
      $sql = "SELECT name FROM ".$GLOBALS['ESPCONFIG']['realm_table'];
      $result = execute_sql($sql);
      while( list($g) = fetch_row($result) ) {
        array_push($groups, $g);
        $result->MoveNext();
      }
      db_close($result);
      $u_r = '<select name="r" class="form-control">';
      foreach($groups as $g) {
        if (!empty($r) && $g === $r) { $u_r .= "<option value=\"$g\" selected>$g</option>"; }
        else { $u_r .= "<option value=\"$g\">$g</option>"; }
      }
      $u_r .= "</select>\n";
    } else {
      $groups =& $_SESSION['acl']['pgroup'];
      $u_r = '<input class="form-control" type="text" name="r" value="'.$groups[0].'" disabled/>';
      $u_r .= '<input type="hidden" name="r" value="'.$groups[0].'">';
    }
    echo $u_r;
    ?>
    <p class="text-muted">Select appropriate group for this user.</p>
    </div>
  </div>
  <div class="form-group form-inline">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">Name <span class="label label-warning">optional</span></label>
    <div class="col-xs-12 col-sm-9 col-md-9 col-lg-39">
      First name: <?php echo mktext('fname', 16, 16, $arr); ?>
      Last name: <?php echo mktext('lname', 24, 24, $arr); ?>
      <p class="text-muted">Enter the full name of this user including first and last name.</p>
    </div>
  </div>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">Email <span class="label label-warning">optional</span></label>
    <div class="col-xs-12 col-sm-9 col-md-9 col-lg-39">
      <?php echo mktext('email', 24, 64, $arr); ?>
      <p class="text-muted">Enter correct email.</p>
    </div>
  </div>
  <div class="form-group form-inline">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">Expiration <span class="label label-warning">optional</span></label>
    <div class="col-xs-12 col-sm-9 col-md-9 col-lg-39">
      Year: <input class="form-control" type="text" size="4" maxlength="4" name="ex_year" placeholder="2017">
      Month: <input class="form-control" type="text" size="2" maxlength="2" name="ex_month" placeholder="02">
      Day: <input class="form-control" type="text" size="2" maxlength="2" name="ex_day" placeholder="26">
      <p class="text-muted">Assign expiration date (if any).</p>
    </div>
  </div>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">Disable</label>
    <div class="col-xs-12 col-sm-9 col-md-9 col-lg-39">
      <select class="form-control" name="disabled">
        <option value="Y">Yes</option>
        <option value="N" selected>No</option>
      </select>
      <p class="text-muted">Disable this user from using the system.</p>
    </div>
  </div>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">Design surveys</label>
    <div class="col-xs-12 col-sm-9 col-md-9 col-lg-39">
      <select class="form-control" name="pdesign">
        <option value="Y" selected>Yes</option>
        <option value="N">No</option>
      </select>
      <p class="text-muted">Allow the user to create, edit and test surveys. This option is on by default, and is probably desired for most situations.</p>
    </div>
  </div>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">Change survey status</label>
    <div class="col-xs-12 col-sm-9 col-md-9 col-lg-39">
      <select class="form-control" name="pstatus">
        <option value="Y" selected>Yes</option>
        <option value="N">No</option>
      </select>
      <p class="text-muted">This lets a user change the status of a survey. Essentially this gives them the ability to release, end, and archive surveys.</p>
    </div>
  </div>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">Export survey data</label>
    <div class="col-xs-12 col-sm-9 col-md-9 col-lg-39">
      <select class="form-control" name="pdata">
        <option value="Y" selected>Yes</option>
        <option value="N">No</option>
      </select>
      <p class="text-muted">Users with this flag, have the option to download the data collected from a survey.</p>
    </div>
  </div>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">Group Editor</label>
    <div class="col-xs-12 col-sm-9 col-md-9 col-lg-39">
      <select class="form-control" name="pall">
        <option value="Y" selected>Yes</option>
        <option value="N">No</option>
      </select>
      <p class="text-muted">By default, users can only perform any of these actions (create / edit / change status / export survey data) on their own surveys. Group Editor will get these permissions for all surveys that are created by any members of the group.</p>
    </div>
  </div>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">Manage respondents</label>
    <div class="col-xs-12 col-sm-9 col-md-9 col-lg-39">
      <select class="form-control" name="puser">
        <option value="Y">Yes</option>
        <option value="N" selected>No</option>
      </select>
      <p class="text-muted">Allows a user to add users to the list of allowed respondents, within their group.</p>
    </div>
  </div>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">Account Leader</label>
    <div class="col-xs-12 col-sm-9 col-md-9 col-lg-39">
      <select class="form-control" name="pgroup">
        <option value="Y">Yes</option>
        <option value="N" selected>No</option>
      </select>
      <p class="text-muted">This grants the user permission to manage / add / delete other members within the group.</p>
    </div>
  </div>
  <div class="col-sm-offset-3 col-xs-12 col-sm-9 col-md-9 col-lg-39">
    <input type="hidden" name="w" value="admdesigner">
    <input class="btn btn-warning" type="submit" name="submit" value="Create / Update">
    <input class="btn btn-default" type="submit" name="cancel" value="Cancel">
    <?php if (!(isset($_SESSION['username']) && $_SESSION['username'] === $u)) { ?>
    <input class="btn btn-danger" type="submit" name="delete" value="Delete">
    <?php } ?>
  </div>
</form>

<br><br>
