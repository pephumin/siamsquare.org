<?php

if(!empty($_POST['sid'])) $sid = intval($_POST['sid']);
elseif(!empty($_GET['sid'])) $sid = intval($_GET['sid']);
else $sid = '';

$home = "http://www.siamsquare.org";
$page = $home."/public/survey.php?name=";

?>

</form>

<h2>Export survey data</h2>

<br>

<table class="table table-hover">

<?php

if(!$sid) {

?>
  <tr class="active">
    <th>Title</th>
    <th>Owner (Group)</th>
    <th>Status</th>
    <th colspan="2">Format</th>
  </tr>

<?php

  $statusok = (STATUS_ACTIVE | STATUS_DONE | STATUS_DELETED);
  if($_SESSION['acl']['superuser'] == 'Y') {
    $sql = "SELECT id,name,title,status,owner,realm FROM ".$GLOBALS['ESPCONFIG']['survey_table']."
    WHERE (status & $statusok) ORDER BY id DESC";
  } else {
    $realms = array_to_insql(
      array_intersect(
        $_SESSION['acl']['pall'],
        $_SESSION['acl']['pdata']));
    $sql = "SELECT id,name,title,status,owner,realm
      FROM ".$GLOBALS['ESPCONFIG']['survey_table']." WHERE (status & $statusok) AND (owner = ".
      _addslashes($_SESSION['acl']['username']) ." || realm $realms) ORDER BY id DESC";
  }
  $result = execute_sql($sql);

  while(list($sid,$name,$title,$status,$owner,$realm) = fetch_row($result)) {
        $result->MoveNext();
    $stat = _('Editing');

    if($status & STATUS_DELETED) { $stat = 'Archived'; }
    elseif($status & STATUS_DONE) { $stat = 'Ended'; }
    elseif($status & STATUS_ACTIVE) { $stat = 'Active'; }
    elseif($status & STATUS_TEST) { $stat = 'Testing'; }

    $mpage = $page.$name;

?>
  <tr>
    <td><a href="<?php echo($mpage); ?>" target="_blank"><?php echo($title); ?></a></td>
    <td><?php echo($owner); ?> (<?php echo($realm); ?>)</td>
    <td><?php echo($stat); ?></td>
    <td style="font-size: xx-small; vertical-align: top;">
    <form id="export<?php echo($sid) ?>" action="<?php echo($GLOBALS['ESPCONFIG']['ME']) ?>">
  <div>
        <select name="type">
            <option value="csv_full_header" selected="selected">CSV Full Headers</option>
            <option value="csv_short_header">CSV Short Headers</option>
            <option value="spss_csv">CSV for SPSS</option>
            <option value="tab">Tab</option>
        </select>
        <input type="hidden" name="sid" value="<?php echo($sid) ?>" />
        <input type="hidden" name="where" value="" />
        <div class="exportsave">
      <?php echo('<a href="javascript: exportSubmit(\'export\', document.getElementById(\'export'.$sid.'\'));" title="Save the results for \''.$name.'\' to the survey in CSV Format (Comma Delimted File). Column Titles are based on question text.">' . _('Save On Server') . '</a>');
            echo("\n");?>
      | <?php
      echo('<a href="javascript: exportSubmit(\'download\', document.getElementById(\'export'.$sid.'\'));" title="Download the results for \''.$name.'\' to your computer in CSV Format (Comma Delimted File). Column Titles are based on the question text. Click this link and select \'Save\' when prompted by your browser.">' . _('Download') . '</a>'); ?>
            </div>
            </div></form>
    </td>
  </tr>

<?php
  }
?>

</table>
<br>

<?php displayAdminBack(); ?>

<?php
  return;
  }

  $sql = "SELECT name FROM ".$GLOBALS['ESPCONFIG']['survey_table']." WHERE id = $sid";
  $name = get_one($sql);

  $srealm = auth_get_survey_realm($sid);
  if(isset($_GET['test'])) {

    if($_SESSION['acl']['superuser'] != 'Y' &&
        !auth_is_owner($sid, $_SESSION['acl']['username']) &&
        !in_array($srealm, array_intersect(
            $_SESSION['acl']['pdesign'],
            $_SESSION['acl']['pall'])) &&
        !auth_no_access(_('to access this survey'))) {
      return;
    }
    echo("<p><b>Testing survey...</b> (". _('SID') ." = $sid)</p>\n");
  } else {

    if($_SESSION['acl']['superuser'] != 'Y' &&
        !auth_is_owner($sid, $_SESSION['acl']['username']) &&
        !in_array($srealm, array_intersect(
            $_SESSION['acl']['pdata'],
            $_SESSION['acl']['pall'])) &&
        !auth_no_access(_('to access this survey'))) {
      return;
    }
  }

  $type = isset($_GET['type']) ? $_GET['type'] : 'csv_full_header';

  // prepare file name, default to csv_full_headers
    switch ($type) {
        case 'tab':
            $file = $_SESSION['acl']['home'] . "/$name.txt";
            break;

        case 'xml':
            //Not implemented yet
            break;

        case 'spss_csv':
            $file = $_SESSION['acl']['home'] . "/$name.csv";
            break;

        case 'dbf':
            $file = $_SESSION['acl']['home'] . "/$name.dbf";
            if(extension_loaded('dbase')) {
                $ret = survey_export_dbf($sid, $file);
            } else {
                $ret = 0;
                echo("<tr><td>" . mkerror('The PHP dBase Extension is not installed.') . "</td></tr>");
            }
            break;

        default: //csv_full_header,csv_short_header
            $file = $_SESSION['acl']['home'] . "/$name.csv";
  }
  $ret = survey_export_results($type, $sid, $file);

  echo("<tr><td>");
  if(isset($_GET['test'])) {
    echo("<p><b>Testing survey...</b> (". _('SID') ." = $sid)</p>\n");
  }
  if($ret) {
    echo('Survey exported as:' . " <tt>$file</tt>");
  } else {
    echo(mkwarn('Error exporting survey as:' . " <tt>$file</tt>"));
  }
  echo("</td></tr></table>\n");
  echo("<br><br>\n\n");

?>
