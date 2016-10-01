<?php

if (!empty($_POST['sid'])) $sid = intval($_POST['sid']);
elseif (!empty($_GET['sid'])) $sid = intval($_GET['sid']);
else $sid = '';

$errstr = "";

if ($sid) {
  if($_SESSION['acl']['superuser'] == 'Y') {
    $sql = "SELECT s.name, s.title, s.owner, s.realm, s.public FROM ".X_SURVEY." s WHERE s.id = $sid";
    $sql1 = "SELECT a.realm, a.maxlogin, a.resume, a.navigate FROM ".X_ACCESS." a WHERE a.survey_id = $sid ORDER BY a.realm";
  } else {
    $realms = array_to_insql(array_intersect($_SESSION['acl']['pall'], array_merge($_SESSION['acl']['pall'],$_SESSION['acl']['pdesign'])));
    $sql = "SELECT s.name, s.title, s.owner, s.realm, s.public FROM ".X_SURVEY." s WHERE s.id = $sid AND NOT (status & " .STATUS_DELETED. ") AND (s.owner = "._addslashes($_SESSION['acl']['username']) ." || s.realm $realms)";
    $sql1 = "SELECT a.realm, a.maxlogin, a.resume, a.navigate FROM ".X_ACCESS." a, ".X_SURVEY." s WHERE a.survey_id = $sid AND s.id = a.survey_id AND (s.owner = ". _addslashes($_SESSION['acl']['username']) ." || s.realm $realms) ORDER BY a.realm";
  }
  $result = execute_sql($sql);
  if (record_count($result) < 1) { $sid = 0; }
}

if ($sid) {
  list($name,$title,$owner,$realm,$public) = fetch_row($result);
  db_close($result);

  if (!empty($_POST['op'])) { $op = $_POST['op']; }
  elseif (!empty($_GET['op'])) { $op = $_GET['op']; }
  else { $op = ''; }

  if (!empty($_POST['realm'])) { $arealm = _addslashes($_POST['realm']); }
  elseif (!empty($_GET['realm'])) { $arealm = _addslashes($_GET['realm']); }

  if (isset($_POST['resume'])) { $resume = 'Y'; }
  else { $resume = 'N'; }
  $resume = _addslashes($resume);

  if (isset($_POST['navigate'])) { $navigate = 'Y'; }
  else { $navigate = 'N'; }
  $navigate = _addslashes($navigate);

  if (!empty($_POST['max'])) { $max = intval($_POST['max']); }
  elseif (!empty($_GET['max'])) { $max = intval($_GET['max']); }
  else { $max = 0; }

  if ($op == 'a') {
    if (empty($_POST['realm'])) { $errstr = mkerror('Please select a group.'); }
    else {
      $sql = "INSERT INTO ".X_ACCESS." (survey_id, realm, maxlogin, resume, navigate) VALUES ($sid, $arealm, $max, $resume, $navigate)";
      execute_sql($sql);
    }
  } elseif ($op == 'r') {
    $sql = "DELETE FROM ".X_ACCESS." WHERE survey_id = $sid AND realm = $arealm";
    execute_sql($sql);
  } elseif ($op == 'v') {
    $sql = "UPDATE ".X_SURVEY." SET public = 'N' WHERE id = $sid";
    execute_sql($sql);
    $sid = 0;
  } elseif ($op == 'p') {
    $sql = "UPDATE ".X_SURVEY." SET public = 'Y' WHERE id = $sid";
    execute_sql($sql);
    $sid = 0;
  }
}
if ($sid) {
  if ($public == 'N') { $public = "Private"; } else { $public = "Public"; }
  $r = '<select name="realm"><option></option>';
  $groups = array();
  $selected_groups = array();
  // if realm has already been added then do not include it for reselection.
  $result = execute_sql($sql1);
  while (list($sg) = fetch_row($result)) {
    array_push($selected_groups, $sg);
    $result->MoveNext();
  }
  db_close($result);
  if ($_SESSION['acl']['superuser'] == 'Y') {
    $sql = "SELECT name FROM ".$GLOBALS['ESPCONFIG']['realm_table'];
    $result = execute_sql($sql);
    while (list($g) = fetch_row($result)) {
      if (!in_array($g, $selected_groups)) { array_push($groups, $g); }
      $result->MoveNext();
    }
  db_close($result);
  } else {
    $g =& $_SESSION['acl']['pdesign'];
    foreach ($g as $t) { if (!in_array($t, $selected_groups)) { array_push($groups, $t); } }
  }
  foreach($groups as $g) { $r .= "<option value=\"$g\">$g</option>"; }
  $r .= '</select>';
}
?>

<h2>Survey access</h2>

<?php if(!empty($errstr)) echo(mkerror($errstr)); ?>

<p>This lets you control who has access to fill out a form.</p>

<ul class="pe-ul">
  <li><i class="pe-li pe-check-square"></i>Public surveys let anyone submit data.</li>
  <li><i class="pe-li pe-check-square"></i>Private surveys are restricted by Respondent Groups.</li>
</ul>


<form class="form-horizontal" method="post" action="<?php echo htmlspecialchars(ME); ?>">

<?php if ($sid) { ?>

  <h4>Current access</h4>

  <input type="hidden" name="where" value="access">
  <input type="hidden" name="sid" value="<?php echo($sid); ?>">
  <input type="hidden" name="op" value="a">

  <table class="table table-hover">
    <tr class="active">
      <th class="col-xs-4 col-sm-4 col-md-4 col-lg-4">Vairable</td>
      <th class="col-xs-8 col-sm-8 col-md-8 col-lg-8">Value</td>
    </tr>
    <tr>
      <td class="col-xs-4 col-sm-4 col-md-4 col-lg-4">Name</td>
      <td class="col-xs-8 col-sm-8 col-md-8 col-lg-8"><?php echo($name); ?></td>
    </tr>
    <tr>
      <td class="col-xs-4 col-sm-4 col-md-4 col-lg-4">Title</td>
      <td class="col-xs-8 col-sm-8 col-md-8 col-lg-8"><?php echo($title); ?></td>
    </tr>
    <tr>
      <td class="col-xs-4 col-sm-4 col-md-4 col-lg-4">Owner (Group)</td>
      <td class="col-xs-8 col-sm-8 col-md-8 col-lg-8"><?php echo($owner); ?> (<?php echo($realm); ?>)</td>
    </tr>
    <tr>
      <td class="col-xs-4 col-sm-4 col-md-4 col-lg-4">Public / Private</td>
      <td class="col-xs-8 col-sm-8 col-md-8 col-lg-8"><?php echo($public); ?></td>
    </tr>
  </table>

  <br>

  <h4>Managing access</h4>

  <table class="table table-hover">
    <tr class="active">
      <th class="text-center">Group</th>
      <th class="text-center">Max responses</th>
      <th class="text-center">Resume (add Save)</th>
      <th class="text-center">Previous/Next button</th>
      <th class="text-center">&nbsp;</th>
    </tr>

  <?php
    $result = execute_sql($sql1);
    while (list($arealm, $amax, $aresume, $anavigate) = fetch_row($result) ) {
      $result->MoveNext();
  ?>

    <tr>
      <td class="text-center"><?php echo($arealm); ?></td>
      <td class="text-center"><?php echo($amax); ?></td>
      <td class="text-center"><?php echo(($aresume == 'Y') ? '<i class="pe-check"></i> Yes' : '<i class="pe-times"></i> No'); ?></td>
      <td class="text-center"><?php echo(($anavigate == 'Y') ? '<i class="pe-check"></i> Yes' : '<i class="pe-times"></i> No'); ?></td>
      <td class="text-center"><a href="<?php echo(htmlspecialchars(MYADMIN."?w=access&sid=".$sid."&op=r&realm=").urlencode($arealm)); ?>" class="btn btn-danger btn-sm" role="button">Remove</a></td>
    </tr>

  <?php } ?>

    <tr>
      <td class="text-center"><?php echo($r); ?></td>
      <td class="text-center"><input type="text" name="max" size="5"></td>
      <td class="text-center"><input type="checkbox" name="resume" checked></td>
      <td class="text-center"><input type="checkbox" name="navigate" checked></td>
      <td class="text-center"><input type="submit" value="Add" class="btn btn-success"></td>
    </tr>
  </table>
  <br><br>

<?php
  return;
  }
?>

<table class="table table-hover">
  <tr class="active">
    <th>Title</th>
    <th>Owner (Group)</th>
    <th>Public</th>
  </tr>

<?php

// load names and titles of all surveys available to _this_ user
if($_SESSION['acl']['superuser'] == 'Y') {
  $sql = "SELECT id, name, title, owner, realm, public FROM ".X_SURVEY." WHERE NOT ".db_bin("status", STATUS_DELETED)." ORDER BY id DESC";
} else {
  $realms = array_to_insql(array_intersect($_SESSION['acl']['pall'], array_merge($_SESSION['acl']['pall'], $_SESSION['acl']['pdesign'])));
  $sql = "SELECT id, name, title, owner, realm, public FROM ".X_SURVEY." WHERE NOT ".db_bin("status", STATUS_DELETED)." AND (owner = "._addslashes($_SESSION['acl']['username']) ." || realm $realms) ORDER BY id DESC";
}

$result = execute_sql($sql);
while(list($sid,$name,$title,$owner,$realm,$public) = fetch_row($result)) {
  $result->MoveNext();
  if ($public == 'N') {
    $public = "<span class=\"label label-danger\"><i class=\"pe-paper-plane pe-fw\"></i> Private</span> ";
    $op = '<small>[<a href="'.htmlspecialchars(MYADMIN."?w=access&sid=".$sid."&op=p").'">change to Public</a>]</small>';
  } else {
    $public = "<span class=\"label label-warning\"><i class=\"pe-paper-plane pe-fw\"></i> Public</span>";
    $op = '<small>[<a href="'.htmlspecialchars(MYADMIN."?w=access&sid=".$sid."&op=v").'">change to Private</a>]</small>';
  }
?>

  <tr>
    <td><a href="<?php echo(htmlspecialchars(MYADMIN."?w=access&sid=".$sid)); ?>"><?php echo($title); ?></a></td>
    <td><?php echo $owner . " (".$realm.")"; ?></td>
    <td><?php echo($public); ?> <?php echo($op); ?></td>
  </tr>

<?php
}
?>

</form>
</table>
<br><br>
