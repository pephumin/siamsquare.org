<?php

$base =& $GLOBALS['ESPCONFIG']['ME'];
$public =& $GLOBALS['ESPCONFIG']['autopub_url'];

if(!empty($_GET['sid'])) { $sid = intval($_GET['sid']); }

if($_GET['p']) { $p = $_GET['p']; }

if ($p == '') { $p = "1"; }

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
      case 'c':  // Clear
        /* only _superuser_s can do this */
        if($_SESSION['acl']['superuser'] == 'Y') { $access = true; }
        else { $access = false; }
        $status = 0;
        break;
      case 't':  // test
        /* only the owner or a group editor+design */
        if($owner == $_SESSION['acl']['username'] || in_array($realm, array_intersect($_SESSION['acl']['pall'],$_SESSION['acl']['pdesign']))) { $access = true; }
        $status = STATUS_TEST;
        if($old_status & ( STATUS_DELETED | STATUS_DONE | STATUS_ACTIVE ) )
          $err = true;
        break;
      case 'm':  // Edit
        /* only the owner or a group editor+design */
        if($owner == $_SESSION['acl']['username'] || in_array($realm, array_intersect($_SESSION['acl']['pall'], $_SESSION['acl']['pdesign']))) { $access = true; }
        $status = STATUS_EDIT;
        if($old_status & ( STATUS_DELETED | STATUS_DONE | STATUS_ACTIVE ) )
          $err = true;
        else
          response_delete_all($sid);
        break;
      case 'a':  // activate
        /* only the owner+stauts or a group editor+status */
        if(in_array($realm, $_SESSION['acl']['pstatus']) && ($owner == $_SESSION['acl']['username'] || in_array($realm, $_SESSION['acl']['pall']))) { $access = true; }
        $status = STATUS_ACTIVE;
                 // here we also check that we don't activate twice, because
                 // it would delete all current responses ...
        if($old_status & ( STATUS_ACTIVE | STATUS_DELETED | STATUS_DONE ) )
          $err = true;
        else
          response_delete_all($sid);
        break;
      case 'e':  // End
        /* only the owner+stauts or a group editor+status */
        if(in_array($realm, $_SESSION['acl']['pstatus']) && ($owner == $_SESSION['acl']['username'] || in_array($realm, $_SESSION['acl']['pall']))) { $access = true; }
        $status = STATUS_DONE;
        if($old_status & (STATUS_DONE | STATUS_DELETED) )
          $err = true;
        break;
      case 'd':  // Delete
        /* only the owner+stauts or a group editor+status */
        if(in_array($realm, $_SESSION['acl']['pstatus']) && ($owner == $_SESSION['acl']['username'] || in_array($realm, $_SESSION['acl']['pall']))) { $access = true; }
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
        print mkwarn('Can not set survey status.');
        print mkerror('Status' .': '. $old_status);
      }
    }
  }
}

echo "<h2>Survey status</h2>\n";
echo "<br>\n";
echo "<ul class=\"pe-ul\">\n";
echo "  <li><i class=\"pe-li pe-check-square\"></i><strong>Test</strong> transitions a survey into testing mode. At which point you may perform a live test by taking the survey, and viewing the results. The survey may be switched back into <strong>Edit</strong> mode if additional edits are needed.</li>\n";
echo "  <li><i class=\"pe-li pe-check-square\"></i><strong>Activate</strong> transitions a survey into active mode. In this mode the survey is open for production use, and may be put online. This will clear any results from testing mode (if any). No further editing of survey is allowed.</li>\n";
echo "  <li><i class=\"pe-li pe-check-square\"></i><strong>End</strong> transitions a survey into ended mode. In this mode, <u>no edits are possible</u>, no users may take the survey (it is inactive), but results are still viewable from the results menu.</li>\n";
echo "  <li><i class=\"pe-li pe-check-square\"></i><strong>Archive</strong> removes this survey. It is still stored in the database, but no further interaction is allowed. You may <b>not</b> view the results of an archived survey.</li>\n";
echo "</ul>\n";
echo "<br>\n";

survey_status(0,10,$p);

?>
