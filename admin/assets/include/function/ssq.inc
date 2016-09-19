<?php

$home = "http://www.siamsquare.org";
$admin = $home."/admin";
$self = $_SERVER['PHP_SELF'];

function progress($step = NULL) {
  if (empty($step)) { $step = 1; }
  if ($step == "1") { $a = "<li class=\"progress-step is-active\">"; $b = "<li class=\"progress-step\">"; $c = "<li class=\"progress-step\">"; }
  else if ($step == "2") { $a = "<li class=\"progress-step is-completed\">"; $b = "<li class=\"progress-step is-active\">"; $c = "<li class=\"progress-step\">"; }
  else if ($step == "3") { $a = "<li class=\"progress-step is-completed\">"; $b = "<li class=\"progress-step is-completed\">"; $c = "<li class=\"progress-step is-active\">"; }
?>
<ul class="progress-tracker progress-tracker--text progress-tracker--center">
  <?php echo $a; ?>
    <span class="progress-marker"></span>
    <span class="progress-text">
      <span class="progress-title">Step 1</span>
      Set up
    </span>
  </li>
  <?php echo $b; ?>
    <span class="progress-marker"></span>
    <span class="progress-text">
      <span class="progress-title">Step 2</span>
      Data collection
    </span>
  </li>
  <?php echo $c; ?>
    <span class="progress-marker"></span>
    <span class="progress-text">
      <span class="progress-title">Step 3</span>
      Completed
    </span>
  </li>
</ul>
<?php
}

function survey_listing($start = "0", $limit = "5", $page = NULL) {

  global $self;
  $base =& $self;
  $public =& $GLOBALS['ESPCONFIG']['autopub_url'];
  $me = "/admin/?";

  $sids = array();
  if(!empty($_POST['list'])) { while(list(,$sid) = each($_POST['list'])) { array_push($sids, intval($sid)); } survey_purge($sids); }

  if (empty($start)) { $start = 0; }
  if (empty($limit)) { $limit = 5; }

  if ($page) { $start = ($page-1) * $limit; }
  $to_record = $start + $limit;

  $add = " LIMIT $start, $limit";

  if($_SESSION['acl']['superuser'] == 'Y') {
    $sql1 = "SELECT s.id, s.name, s.title, s.status, s.owner, s.realm, COUNT(q.id) as count FROM ".$GLOBALS['ESPCONFIG']['survey_table']." s LEFT JOIN ".$GLOBALS['ESPCONFIG']['question_table']." q ON s.id = q.survey_id AND q.deleted = 'N' GROUP BY s.id, s.name, s.title, s.status, s.owner, s.realm ORDER BY s.id DESC";
    $sql2 = "SELECT s.id, s.name, s.title, s.status, s.owner, s.realm, COUNT(q.id) as count FROM ".$GLOBALS['ESPCONFIG']['survey_table']." s LEFT JOIN ".$GLOBALS['ESPCONFIG']['question_table']." q ON s.id = q.survey_id AND q.deleted = 'N' GROUP BY s.id, s.name, s.title, s.status, s.owner, s.realm ORDER BY s.id DESC"  . $add;
  } else {
    $realms = array_to_insql(array_intersect($_SESSION['acl']['pall'], array_merge($_SESSION['acl']['pall'], $_SESSION['acl']['pdesign'])));
    $sql1 = "SELECT s.id, s.name, s.title, s.status, s.owner, s.realm, COUNT(q.id) as count FROM ".$GLOBALS['ESPCONFIG']['survey_table']." s LEFT JOIN ".$GLOBALS['ESPCONFIG']['question_table']." q ON s.id = q.survey_id AND q.deleted = 'N' GROUP BY s.id, s.name, s.title, s.status, s.owner, s.realm ORDER BY s.id DESC";
    $sql2 = "SELECT s.id, s.name, s.title, s.status, s.owner, s.realm, COUNT(q.id) as count FROM ".$GLOBALS['ESPCONFIG']['survey_table']." s LEFT JOIN ".$GLOBALS['ESPCONFIG']['question_table']." q ON s.id = q.survey_id AND q.deleted = 'N' GROUP BY s.id, s.name, s.title, s.status, s.owner, s.realm ORDER BY s.id DESC"  . $add;
  }
  $result1 = execute_sql($sql1);
  $result2 = execute_sql($sql2);
  $rows = record_count($result1);

  if ($to_record > $rows) { $to_record = $rows; }
  $from_record = $start + 1;

  echo "<h2>Listing your surveys</h2>\n";
  //echo "<p>You have a total of $rows projects: showing results $from_record to $to_record</p>\n";
  echo "<p>You have a total of $rows $type projects (showing results $from_record to $to_record)</p>\n";
  //echo "<div class=\"pull-right\">Showing results $from_record to $to_record [<a href=\"".$me."\">total of $rows</a>]</div>";
  //echo "<p class=\"clearfix\"></p>";
  echo "<div class=\"row\">\n";


  $realms = array_intersect($_SESSION['acl']['pstatus'], array_merge($_SESSION['acl']['pall'], $_SESSION['acl']['pstatus']));

  while(list($sid,$name,$title,$status,$owner,$realm,$qnum) = fetch_row($result2)) {

    echo "<div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6 manage-border-space\">\n";
    echo "<div class=\"manage-listing\">\n";

    $result2->MoveNext();

    $tt1 = htmlentities($public."?name=$name");
    $tt2 = htmlentities($public."?name=$name&test=1");
    $tt3 = htmlentities($base."?where=tab&newid=$sid");
    $tt4 = htmlentities($base."?where=copy&sid=$sid");
    $tt5 = htmlentities($base."?where=results&sid=$sid");
    $tt6 = htmlentities($base."?where=results&sid=$sid&type=cross");
    $tt7 = htmlentities($base."?where=report&sid=$sid");

    // results
    $flexx = "<a href=\"$tt5\">Result <i class=\"pe-pie-chart pe-fw\"></i></a> | \n";
    $flexx .= "<a href=\"$tt6\">Cross tab <i class=\"pe-bar-chart pe-fw\"></i></a> | \n";
    $flexx .= "<a href=\"$tt7\">Report <i class=\"pe-line-chart pe-fw\"></i></a>\n";

    if($status & STATUS_DELETED) {
      $stat = "Archived"; $progress = "3";
      $test1 = 'Archived';
      $test2 = 'Archived';
      $done = '&nbsp;';
      $act = '&nbsp;';
      $del = '&nbsp;';
    } elseif($status & STATUS_DONE) {
      $stat = "Ended"; $progress = "3";
      $test1 = $act = '&nbsp;';
      $test2 = $act = '&nbsp;';
      $done = '&nbsp;';
      $act = '&nbsp;';
      $del = '&nbsp;';
    } elseif($status & STATUS_ACTIVE) {
      $stat = "Active"; $progress = "2";
      $test1 = "<span class=\"label label-success\"><i class=\"pe-check pe-fw\"></i> Active</span>";
      $test2 = "[".$results."]";
      $done = '&nbsp;';
      $act = '&nbsp;';
      $del = '&nbsp;';
    } elseif($status & STATUS_TEST) {
      $stat = "Testing"; $progress = "1";
      $test1 = "<span class=\"label label-warning\"><i class=\"pe-paper-plane pe-fw\"></i> Testing</span>";
      $test2 = "[ <a href=\"". $base .htmlentities("?where=status&op=m&sid=${sid}")."\">change to Editing</a> ]";
      $done = '&nbsp;';
      $act = '&nbsp;';
      $del = '&nbsp;';
    } else {
      $stat = "Editing"; $progress = "1";
      $test1 = "<span class=\"label label-danger\"><i class=\"pe-pencil-square-o pe-fw\"></i> Editing</span>";
      $test2 = "[ <a href=\"". $base .htmlentities("?where=status&op=t&sid=${sid}")."\">change to Testing</a> ]";
      if ($_SESSION['acl']['superuser'] == 'Y') { $done = "<a href=\"". $base .htmlentities("?where=status&op=e&sid=$sid")."\"><i class=\"pe-trash-o pe-fw\"></i></a>"; }
      else { $done = '&nbsp;'; }
      $act  = "<a href=\"". $base .htmlentities("?where=status&op=a&sid=$sid")."\" onclick='return activateConfirm()'><i class=\"pe-toggle-on pe-fw\"></i></a>";
      $del  = "<a href=\"". $base .htmlentities("?where=status&op=d&sid=$sid")."\"><i class=\"pe-archive pe-fw\"></i></a>";
    }

    // whack things back to permissions set by ACL for everyone _not_ superuser
    if($_SESSION['acl']['superuser'] != 'Y' && !in_array($realm, $realms)) {
      $act  = '&nbsp;';
      $done = '&nbsp;';
      $del  = '&nbsp;';
    }

    // title
    if ($stat == 'Active') { $title = "<a href=\"$tt1\">$title</a>"; }
    elseif ($stat == 'Testing') { $title = "<a href=\"$tt2\">$title</a>"; }
    elseif ($stat == 'Editing') { $title = "<a href=\"$tt3\">$title</a>"; }
    elseif ($stat == 'Archived') { $title = $title; }
    else { $title = $title; }

    // edit/copy & activate/end
     $copy = "<a href=\"$tt4\"><i class=\"pe-files-o pe-fw\"></i></a>\n";
    if ($stat == 'Active') { $act = ""; }
    elseif ($stat == 'Testing') { $act = "<a href=\"$tt2\"><i class=\"pe-paper-plane pe-fw\"></i></a> $copy $act $done"; }
    elseif ($stat == 'Editing') { $act = "<a href=\"$tt3\"><i class=\"pe-pencil-square-o pe-fw\"></i></a> $copy $act $done"; }
    elseif ($stat == 'Archived') { $act = ""; }
    else { $act = "<i class=\"pe-pencil-square-o pe-fw\"></i>"; }

    echo "<h3>$title</h3>\n";
    echo progress($progress);
    echo "<p>Owner: $owner </p>\n";
    echo "<p>Company: $realm</p>\n";
    echo "<p>No. of questions: $qnum</p>\n";
    echo "<p>Status: $test2</p>\n";
    echo "<p>Results: $flexx</p>\n";
    echo "<p>Tools <small>(edit/copy/activate)</small>: $act</p>\n";
    if($_SESSION['acl']['superuser'] == 'Y') { echo "Delete?: \n"; }
    echo "<p>$test1</p>\n";

    echo "</div>\n";
    echo "</div>\n";

  }

  echo "  </div>\n";

  // pagination

    $total = ceil($rows/$limit);
    $offset = ($currentpage - 1) * $rowsperpage;

    echo "<nav class=\"pagination-centered\">\n";
    echo "<ul class=\"pagination\">\n";

    if ($page > 1) { $previous = $page-1; echo "<li><a class=\"btn btn-sm btn-default\" role=\"button\" href=\"".$me."&p=".$previous."\">&laquo;</a></li>\n"; }
    else { echo "<li class=\"disabled\"><a class=\"btn btn-sm btn-warning\" role=\"button\" href=\"\">&laquo;</a></li>\n"; }

    for ($i=1; $i<=$total; $i++) {
      if($i==$page) { echo "<li class=\"active\"><a class=\"btn btn-sm btn-default\" role=\"button\" href=\"".$me."&p=".$i."\">".$i."</a></li>\n"; }
      else { echo "<li><a class=\"btn btn-sm btn-default\" role=\"button\" href=\"".$me."&p=".$i."\">".$i."</a></li>\n"; }
    }

    if ($page != $total) { $next = $page+1; echo "<li><a class=\"btn btn-sm btn-default\" role=\"button\" href=\"".$me."&p=".$next."\">&raquo;</a></li>\n"; }
    else { echo "<li class=\"disabled\"><a class=\"btn btn-sm btn-warning\" role=\"button\" href=\"\">&raquo;</a></li>\n"; }

    echo "</ul>\n";
    echo "</nav>\n\n";

  echo "<br>\n\n";

  echo "<ul class=\"pe-ul\">\n";
  echo "  <li><i class=\"pe-li pe-check-square\"></i><strong>Test</strong> transitions a survey into testing mode. At which point you may perform a live test by taking the survey, and viewing the results. The survey may be switched back into <strong>Edit</strong> mode if additional edits are needed.</li>\n";
  echo "  <li><i class=\"pe-li pe-check-square\"></i><strong>Activate</strong> transitions a survey into active mode. In this mode the survey is open for production use, and may be put online. This will clear any results from testing mode (if any). No further editing of survey is allowed.</li>\n";
  echo "  <li><i class=\"pe-li pe-check-square\"></i><strong>End</strong> transitions a survey into ended mode. In this mode, <u>no edits are possible</u>, no users may take the survey (it is inactive), but results are still viewable from the results menu.</li>\n";
  echo "  <li><i class=\"pe-li pe-check-square\"></i><strong>Archive</strong> removes this survey. It is still stored in the database, but no further interaction is allowed. You may <b>not</b> view the results of an archived survey.</li>\n";
  echo "</ul>\n";

  echo "<br>\n";

}

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
    //  FROM ".$GLOBALS['ESPCONFIG']['survey_table']." WHERE (owner = ".
    //  _addslashes($_SESSION['acl']['username']) ." || realm $realms) ORDER BY id DESC";
    //$sql2 = "SELECT id,name,title,status,owner,realm
    //  FROM ".$GLOBALS['ESPCONFIG']['survey_table']." WHERE (owner = ".
    //  _addslashes($_SESSION['acl']['username']) ." || realm $realms) ORDER BY id DESC" . $add;

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
  echo "  <tr class=\"active\">\n";
  echo "    <th>Project</th>\n";
  echo "    <th>Owner (Group)</th>\n";
  echo "    <th>No. of questions</th>\n";
  echo "    <th>Status</th>\n";
  echo "    <th>Tools<br><small>[edit/copy/activate]</small></th>\n";
  //if($_SESSION['acl']['superuser'] == 'Y') { echo "    <th>Delete?</th>\n"; }

  echo "  </tr>\n";


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
    $results = "      <a href=\"$tt5\">Result <i class=\"pe-pie-chart pe-fw\"></i></a> | \n";
    $results .= "      <a href=\"$tt6\">Cross tab <i class=\"pe-bar-chart pe-fw\"></i></a> | \n";
    $results .= "      <a href=\"$tt7\">Report <i class=\"pe-line-chart pe-fw\"></i></a>\n";

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
      $test = "<span class=\"label label-success\"><i class=\"pe-check pe-fw\"></i> Active</span> <small>[".$results."]</small>";
      $done = '&nbsp;';
      $act = '&nbsp;';
      $del = '&nbsp;';
    } elseif($status & STATUS_TEST) {
      $stat = "Testing";
      $test = "<span class=\"label label-warning\"><i class=\"pe-paper-plane pe-fw\"></i> Testing</span> <small>[ <a href=\"". $base .htmlentities("?where=status&op=m&sid=${sid}")."\">change to Editing</a> ]</small>";
      $done = '&nbsp;';
      $act = '&nbsp;';
      $del = '&nbsp;';
    } else {
      $stat = "Editing";
      $test = "<span class=\"label label-danger\"><i class=\"pe-pencil-square-o pe-fw\"></i> Editing</span> <small>[ <a href=\"". $base .htmlentities("?where=status&op=t&sid=${sid}")."\">change to Testing</a> ]</small>";
      if ($_SESSION['acl']['superuser'] == 'Y') { $done = "<a href=\"". $base .htmlentities("?where=status&op=e&sid=$sid")."\"><i class=\"pe-trash-o pe-fw\"></i></a>"; }
      else { $done = '&nbsp;'; }
      $act  = "<a href=\"". $base .htmlentities("?where=status&op=a&sid=$sid")."\" onclick='return activateConfirm()'><i class=\"pe-toggle-on pe-fw\"></i></a>";
      $del  = "<a href=\"". $base .htmlentities("?where=status&op=d&sid=$sid")."\"><i class=\"pe-archive pe-fw\"></i></a>";
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
     $copy = "<a href=\"$tt4\"><i class=\"pe-files-o pe-fw\"></i></a>\n";
    if ($stat == 'Active') { echo "    <td>&nbsp;</td>\n"; }
    elseif ($stat == 'Testing') { echo "    <td><a href=\"$tt2\"><i class=\"pe-paper-plane pe-fw\"></i></a> $copy $act $done</td>\n"; }
    elseif ($stat == 'Editing') { echo "    <td><a href=\"$tt3\"><i class=\"pe-pencil-square-o pe-fw\"></i></a> $copy $act $done</td>\n"; }
    elseif ($stat == 'Archived') { echo "    <td>&nbsp;</td>\n"; }
    else { echo "    <td><i class=\"pe-pencil-square-o pe-fw\"></i></td>\n"; }

    // delete (disable)
    //echo "    <td>$del</td>\n";
    //if($_SESSION['acl']['superuser'] == 'Y') {
    //  //echo "    <td><input type=\"checkbox\" name=\"list[]\" value=\"$sid\" />";
    //  //echo "<p class=\"text-center\">\n";
    //  //echo "<td \"text-center\">\n";
    //  echo "<td class=\"text-right\">\n";
    //  if ($status & STATUS_DELETED) {
    //    echo "Deleted\n";
    //  } else {
    //    echo "<input type=\"checkbox\" name=\"list[]\" value=\"$sid\" />";
    //  }
    //  echo "</td>\n\n";
    //  //echo "<input class=\"btn btn-default\" type=\"reset\" name=\"reset\" value=\"Clear Checks\" />\n";
    //  //echo "</p>\n\n";
    //
    //}
    echo "  </tr>\n";
  }

  echo "</table>\n\n";

  //if($_SESSION['acl']['superuser'] == 'Y') {
  //
  //  echo "<p class=\"text-right\">\n";
  //  echo "<input type=\"hidden\" name=\"where\" value=\"purge\" /> &nbsp; \n";
  //  $confirmText = "You are about to PERMANENTLY and IRREVOCABLY remove ALL information about the selected surveys. Click Ok if you are absolutely //sure this is what you want to do.\n";
  //  echo "<input class=\"btn btn-danger btn-sm\" type=\"submit\" name=\"submit\" onclick='return confirm(\"You are about to PERMANENTLY and IRREVOCABLY remove ALL information about the selected surveys. Click Ok if you are absolutely sure this is what you want to do.\")' onkeypress='return confirm (\"You are about to PERMANENTLY and IRREVOCABLY remove ALL information about the selected surveys. Click Ok if you //are absolutely sure this is what you want to do.\");' value=\"Delete selected data\" />\n";
  //  echo "<input class=\"btn btn-default btn-sm\" type=\"reset\" name=\"reset\" value=\"Clear checks\" />";
  //  echo "</p>\n\n";
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

  echo "<br>\n\n";
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
    if ($choice_content == '!others') { $choice_content_th = 'อื่นๆ (ระบุ)'; }
    if ($choice_content == '!others Other (please specify)') { $choice_content_th = 'อื่นๆ (ระบุ)'; }
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
     $out = str_replace( "<br>", "\n", $out );
     $out = str_replace( "<BR>", "\n", $out );
     $out = str_replace( "<BR/>", "\n", $out );
     $out = str_replace( "<br>", "\n", $out );
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

?>
