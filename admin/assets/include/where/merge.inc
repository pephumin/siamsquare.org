<?php

if(!isset($_GET['precision'])) {
    $_GET['precision'] = "";
}
if(!isset($_GET['totals'])) {
    $_GET['totals'] = "";
}
if(!isset($_GET['test'])) {
    $_GET['test'] = "";
}

$_GET['precision'] = intval($_GET['precision']);
$_GET['totals'] = intval($_GET['totals']);
$_GET['test'] = intval($_GET['test']);

// see if surveys have been selected
if(!empty($_REQUEST['sids'])) {
  $sid = intval($_REQUEST['sids']);
    $_REQUEST['sids'] = htmlspecialchars($_REQUEST['sids']);
  if($_GET['test']) {
    echo("<p><b>". _('Testing Survey...') .'</b> ('. _('SIDS') ." = ". $sid .")</p>\n");
  }

  /* check ACLs for permissions ...
   * XXX only check the first of the SIDS for ownership */
  if($_SESSION['acl']['superuser'] == 'Y' ||
      auth_is_owner($sid, $_SESSION['acl']['username']) ||
      ($_GET['test'] &&
        $_SESSION['acl']['seeall'] == 'Y') ||
      auth_no_access('to access this survey')) {
?>

<table class="table table-hover">
<tr><td>
<?php
      $ret = survey_merge(preg_split("/\+/",$_REQUEST['sids']),$_GET['precision'],$_GET['totals']);
      if(!empty($ret))
        echo("<span class=\"error\">$ret</span>\n");
?>
</td></tr></table>
<br /><br />
<?php displayAdminBack(); ?>
<?php
    }
    return;
  }

  // otherwise:
  // build a table of surveys to choose from ...
  /* check with ACL for allowed surveys */
  $statusok = (STATUS_ACTIVE | STATUS_DONE & ~STATUS_DELETED);
  if($_SESSION['acl']['superuser'] == 'Y' ||
    $_SESSION['acl']['seeall'] == 'Y')
    $sql = "SELECT id,name,title,owner FROM ".$GLOBALS['ESPCONFIG']['survey_table']."
      WHERE ".db_bin("status", $statusok) ."
      ORDER BY id DESC";
  else
    $sql = "SELECT id,name,title,owner FROM ".$GLOBALS['ESPCONFIG']['survey_table']." WHERE owner=".
      _addslashes($_SESSION['acl']['username']) ."
      AND ".db_bin("status",$statusok)."
      ORDER BY id DESC";
  $result = execute_sql($sql);

?>

</form>

<h2>Merge Survey Results</h2>

<p>Pick Surveys to Merge</p>
<br />
<form id="merge" action="<?php echo($GLOBALS['ESPCONFIG']['ME']) ?>?where=merge" method="post">

<table class="table table-hover">
  <tr>
    <th>List of Surveys</th>
    <th>&nbsp;</th>
    <th>Surveys to Merge</th>
  </tr>
  <tr>
    <td class="center">
    <select multiple="multiple" size="10" name="list1">
      <?php while(list($sid, $name, $title, $owner) = fetch_row($result)) {
                    $result->MoveNext()
                    ?>
      <option value="<?php echo($sid); ?>"><?php echo($name); ?></option>
      <?php } db_close($result); ?>
    </select>
    </td>
    <td>
      <input class="btn btn-default" type="button" value="   &gt;&gt;   " onclick="move(this.form.list1,this.form.list2)" name="B1" /><br />
      <input class="btn btn-default" type="button" value="   &lt;&lt;   " onclick="move(this.form.list2,this.form.list1)" name="B2" /><br />
      <input class="btn btn-default" type="button" value="Merge" onclick="merge(this.form.list2)" name="B3" />
        <input type="hidden" id="sids" name="sids" value="">
    </td>
    <td class="center">
    <select multiple="multiple" size="10" name="list2">
    </select>
    </td>
  </tr>
</table>
<br /><br />
<?php displayAdminBack(); ?>