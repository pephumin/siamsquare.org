<?php

require $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/where/crosstab.inc';

$sid = '';
if (!empty($_POST['sid'])) $sid = intval($_POST['sid']);
elseif (!empty($_GET['sid'])) $sid = intval($_GET['sid']);

if (!empty($sid)) {
    $srealm = auth_get_survey_realm(_addslashes($sid));
    if(!empty($_GET['test'])) {

        if($_SESSION['acl']['superuser'] != 'Y' && !auth_is_owner($sid, $_SESSION['acl']['username']) && !in_array($srealm, array_intersect($_SESSION['acl']['pdesign'], $_SESSION['acl']['pall'])) && !auth_no_access(_('to access this survey'))) { return; }

        echo("<p>Testing survey... (". _('SID') ." = $sid)</p>\n");

    } else {

        if($_SESSION['acl']['superuser'] != 'Y' && !auth_is_owner($sid, $_SESSION['acl']['username']) && !in_array($srealm, array_intersect($_SESSION['acl']['pdata'], $_SESSION['acl']['pall'])) && !auth_no_access(_('to access this survey'))) { return; }
    }

    if (isset($_GET['type'])) {
        if ($_GET['type'] == "cross") { echo("<h2>Cross tabulation</h2>\n"); }
    }

?>

<br><br>

<table class="table table-hover">
    <tr class="active"><td>

<?php

    $precision = '';
    if (!empty($_GET['precision'])) $precision = intval($_GET['precision']);
    $totals = '';
    if (!empty($_GET['totals'])) $totals = intval($_GET['totals']);
    $qid = '';
    $cids = '';
    $rid = '';
    $qidc = '';
    $qidr = '';
    $guicross = '';
    if (!empty($_GET['qid'])) $qid = intval($_GET['qid']);
    if (!empty($_GET['cids'])) $cids = _addslashes($_GET['cids']);
    if (!empty($_POST['cids'])) $cids = $_POST['cids'];
    if (!empty($_POST['qid'])) $qid = intval($_POST['qid']);
    if (!empty($_POST['qidc'])) $qidc = intval($_POST['qidc']);
    if (!empty($_POST['qidr'])) $qidr = intval($_POST['qidr']);
    if (!empty($_POST['rid'])) $rid = intval($_POST['rid']);
    elseif (!empty($_GET['rid'])) $rid = intval($_GET['rid']);
    if (!empty($_GET['type'])) $guicross = $_GET['type'];
    if (!empty($rid)) { $ret = survey_results($sid, $precision, 0, '', '', $rid); }
    else if (!empty($guicross)) { $ret = survey_results($sid, $precision, $totals, '','','', $guicross); }
    else if (!empty($qidc) || !empty($qidr)) { cross_tabulation($sid, $qidc, $qidr, $qid, $cids); }
    else { $ret = survey_results($sid, $precision, $totals, $qid, $cids); }

    if(!empty($ret)) echo $ret;

    if(!empty($_GET['test'])) { echo("<a href=\"". $GLOBALS['ESPCONFIG']['ME'] .htmlentities("?where=test&test=1&sid=". $_GET['sid']) ."\">Test survey</a><br>\n"); }

    if (!empty($_GET['type'])) {

?>
    </td></tr>
    <tr><td align="center">
<input class="btn btn-default" type="reset" value="Reset" />
<?php echo mksubmit('cross', 'Cross Tabulate'); ?>
<br>

<?php } ?>

</td></tr></table>
<br><br>

<?php
    return;
}

$statusok = (STATUS_ACTIVE | STATUS_DONE | STATUS_TEST);
$statusno = STATUS_DELETED;
if ($_SESSION['acl']['superuser'] == 'Y') {
    $sql = "SELECT id,name,title,owner,realm FROM ".$GLOBALS['ESPCONFIG']['survey_table']." WHERE NOT ".db_bin("status", $statusno)." AND ".db_bin("status", $statusok)." ORDER BY id DESC";
} else {
    $realms = array_to_insql(
        array_intersect($_SESSION['acl']['pall'], $_SESSION['acl']['pdata']));
            $sql = "SELECT id,name,title,owner,realm FROM ".$GLOBALS['ESPCONFIG']['survey_table']." WHERE NOT ".db_bin("status", $statusno)." AND ".db_bin("status", $statusok)." AND (owner = "._addslashes($_SESSION['acl']['username']) ." || realm $realms) ORDER BY id DESC";
}
$result = execute_sql($sql);

if (empty($_GET['type'])) {
?>

<h2>View survey results</h2>

<p>Pick a survey below to view the results. Only show surveys that are currently active.</p>

    <input type="hidden" name="rid" value="" />
    <input type="hidden" name="sid" value="" />
    <input type="hidden" name="where" value="results" />

    <?php
    } else {
        echo("<h2>Cross Tabulation</h2>\n");
        echo("<p>Pick a survey below to see a cross tabulation.</p>");
    }
    ?>

<br><br>

<table class="table table-hover">
    <tr class="active">
        <th>Project</th>
        <th>Owner (Group)</th>
        <th class="text-center">Completions</th>
        <th class="text-center">Results</th>
        <?php if (empty($_GET['type'])) { ?>
        <th class="text-center">Respondents</th>

    <?php
    } else {
    ?>

        <th></th>
    <?php
    }
    ?>

    </tr>

<?php

    $count = 0;
    while(list($sid,$name,$title,$owner,$realm) = fetch_row($result)) {
        $result->MoveNext();
        $sql2 = "SELECT count(*) FROM ".$GLOBALS['ESPCONFIG']['response_table']." WHERE survey_id = $sid AND complete = 'Y'";
        $result2 = execute_sql($sql2);
        list($resp) = fetch_row($result2);
        db_close($result2);

?>

    <tr>

<?php

    if (empty($_GET['type'])) {
        // grab all the rid values for the particular survey
        $sql = "SELECT R.id FROM ".$GLOBALS['ESPCONFIG']['response_table']." R WHERE R.survey_id = ${sid} AND R.complete = 'Y' ORDER BY R.id";
        $rid_result = execute_sql($sql);
        $count++;
    }

?>

       <td>
       <?php if (!empty($_GET['type'])) { ?>
       <a href="<?php echo("". $GLOBALS['ESPCONFIG']['ME'] .htmlentities("?where=results&sid=${sid}&type=cross")); ?>">
       <?php } else { ?>
       <a href="<?php echo("". $GLOBALS['ESPCONFIG']['ME'] .htmlentities("?where=results&sid=${sid}")); ?>">
       <?php } ?>
       <?php echo($title); ?>
       </a>
       </td>

       <td><?php echo $owner . " (" . $realm . ")"; ?></td>

       <td class="text-center"><?php echo($resp); ?></td>

       <td class="text-center">
           [ <a href="<?php echo("". $base .htmlentities("?where=results&sid=${sid}")); ?>">Result <i class="pe-pie-chart pe-fw"></i></a> |
           <a href="<?php echo("". $base .htmlentities("?where=results&sid=${sid}&type=cross")); ?>">Cross tab <i class="pe-bar-chart pe-fw"></i></a> |
           <a href="<?php echo("". $base .htmlentities("?where=report&sid=${sid}")); ?>">Report <i class="pe-line-chart pe-fw"></i></a> ]
       </td>

       <td class="text-center">
       <?php if (empty($_GET['type'])) { ?>
       <select name="rid<?php echo $count; ?>" onchange="javascript:this.form.rid.value=this.form.rid<?php echo $count; ?>.options[this.form.rid<?php echo $count; ?>.selectedIndex].value; this.form.sid.value=<?php echo $sid; ?>; this.form.submit(); return false;">
           <option value=""></option>
           <?php $i = 0; while (list($rid) = fetch_row($rid_result)) { $rid_result->MoveNext(); ?>
           <option value="<?php echo $rid; ?>"><?php echo ++$i; ?></option>
           <?php } ?>
           </select>
       <?php } ?>
       </td>
   </tr>

    <?php
    }
    db_close($result);
    ?>

</table>
<br><br>
