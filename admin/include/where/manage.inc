<?php

$base =& $GLOBALS['ESPCONFIG']['ME'];

?>

<h2>Management Interface</h2>
<br />

<?php // include $_SERVER['DOCUMENT_ROOT'] . '/admin/include/where/edit_insert.inc'; ?>

<?php 

if($_SESSION['acl']['superuser'] == 'Y') {
  $sql = "SELECT s.id, s.name, s.title, s.owner, s.realm FROM ".$GLOBALS['ESPCONFIG']['survey_table']." s WHERE s.status = 0 ORDER BY s.id DESC";
} else {
  $realms = array_to_insql(
    array_intersect($_SESSION['acl']['pall'], $_SESSION['acl']['pdesign']));
  $sql = "SELECT s.id, s.name, s.title, s.owner, s.realm FROM ".$GLOBALS['ESPCONFIG']['survey_table']." s WHERE s.status = 0 AND (s.owner = "._addslashes($_SESSION['acl']['username']) ." || s.realm $realms) ORDER BY id DESC";
}
$result = execute_sql($sql);

?>

<h4>Current survey <small>[<a href="<?php echo($base."?where=new"); ?>"><i class="fa fa-pencil-square-o"></i> create new</a>]</small></h4>

<table class="table table-hover">
  <tr class="active">
    <th>Title</th>
    <th>Owner</th>
    <th>Group</th>
    <th>Status</th>
  </tr>

<?php

/* load names and titles of all surveys available to _this_ user */

if($_SESSION['acl']['superuser'] == 'Y') {
  $sql = 'SELECT id,name,title,status,owner,realm FROM '.$GLOBALS['ESPCONFIG']['survey_table'].' ORDER BY id DESC';
} else {
  $realms = array_to_insql(
    array_intersect(
      $_SESSION['acl']['pall'],
      array_merge(
        $_SESSION['acl']['pall'],
        $_SESSION['acl']['pdesign'])));
  $sql = "SELECT id,name,title,status,owner,realm
    FROM ".$GLOBALS['ESPCONFIG']['survey_table']." WHERE (owner = ".
    _addslashes($_SESSION['acl']['username']) ." || realm $realms) ORDER BY id DESC";
}
$result = execute_sql($sql);

$realms = array_intersect(
    $_SESSION['acl']['pstatus'],
    array_merge(
      $_SESSION['acl']['pall'],
      $_SESSION['acl']['pstatus']));

while(list($sid,$name,$title,$status,$owner,$realm) = fetch_row($result)) {
    $result->MoveNext();
  $stat = 'Editing';
  $test = "<a href=\"". $base .htmlentities("?where=status&op=t&sid=${sid}")."\">Test</a>";
  $act  = "<a href=\"". $base .htmlentities("?where=status&op=a&sid=${sid}")."\" onclick='return activateConfirm()'>Activate</a>";
  $done = "<a href=\"". $base .htmlentities("?where=status&op=e&sid=${sid}")."\">End</a>";
  $del  = "<a href=\"". $base .htmlentities("?where=status&op=d&sid=${sid}")."\">Archive</a>";

  if($status & STATUS_DELETED) {
    $stat = _('Archived');
    $test = $act = $done = $del = '&nbsp;';
    continue;
  } elseif($status & STATUS_DONE) {
    $stat = _('Ended');
    $test = $act = $done = '&nbsp;';
  } elseif($status & STATUS_ACTIVE) {
    $stat = _('Active');
    $test = $act = '&nbsp;';
  } elseif($status & STATUS_TEST) {
    $stat = _('Testing');
    $done = '&nbsp;';
    $test = "<a href=\"". $base .htmlentities("?where=status&op=m&sid=${sid}")."\">Edit</a>";
  } else {
    $done = '&nbsp;';
  }

  /* whack things back to permissions set by ACL
   * for everyone _not_ superuser */
  if($_SESSION['acl']['superuser'] != 'Y' &&
      !in_array($realm, $realms)) {
    $act  = '&nbsp;';
    $done = '&nbsp;';
    $del  = '&nbsp;';
  }

?>
  <tr>
    <?php 
    if ($stat == 'Active') {?>
    <td><a href="<?php print $ESPCONFIG['autopub_url']."?name=".$name; ?>"><?php echo($title); ?></a></td>
    <?php } elseif ($stat == 'Testing') { ?>
    <td><a href="<?php print $ESPCONFIG['autopub_url']."?name=".$name."&test=1"; ?>"><?php echo($title); ?></a></td>
    <?php } elseif ($stat == 'Editing') { ?>
    <td><a href="<?php print $base.htmlentities("?where=tab&newid=${sid}"); ?>"><?php echo($title); ?></a></td>
    <?php } else { ?>
    <td><?php echo($name); ?></td>
    <?php } ?>
    <td><?php echo($owner); ?></td>
    <td><?php echo($realm); ?></td>
    <?php if ($stat == 'Testing') { echo "<td><mark>$stat</mark></td>"; } ?>
    <?php if ($stat == 'Editing') { echo "<td><mark>$stat</mark></td>"; } ?>
  </tr>
<?php
  }
?>
</table>
<p class="text-right">[ <a href="<?php print $base.htmlentities("?where=status"); ?>">View the full list (for making changes)</a> ]</p>
<br />

<div class="row">

  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6"> 
    <div class="panel panel-primary">
      <div class="panel-heading"><h4>Section 1</h4></div>
      <!--
      <div class="panel-body">
        <p class="small">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
      </div>
      -->
      <div id="surveyAdmin" class="list-group">
        <a class="list-group-item" href="<?php echo("$base?where=new"); ?>"><i class="fa fa-file-o fa-fw"></i>&nbsp; Create a new survey <span class="badge">new</span></a>
        <a class="list-group-item" href="<?php echo("$base?where=edit"); ?>"><i class="fa fa-pencil-square-o fa-fw"></i>&nbsp; Edit a survey</a>
        <a class="list-group-item" href="<?php echo("$base?where=test"); ?>"><i class="fa fa-paper-plane fa-fw"></i>&nbsp; Test a survey</a>
        <a class="list-group-item" href="<?php echo("$base?where=copy"); ?>"><i class="fa fa-files-o fa-fw"></i>&nbsp; Copy a survey</a>
        <a class="list-group-item" href="<?php echo("$base?where=status"); ?>"><i class="fa fa-tachometer fa-fw"></i>&nbsp; Survey status</a>
      </div>
    </div> 
  </div> 

  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6"> 
    <div class="panel panel-primary">
      <div class="panel-heading"><h4>Section 2</h4></div>
      <!--
      <div class="panel-body">
        <p class="small">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
      </div>
      -->
      <div id="surveyResults" class="list-group">
        <a class="list-group-item" href="<?php echo("$base?where=results"); ?>"><i class="fa fa-pie-chart fa-fw"></i>&nbsp; View survey results</a>
        <a class="list-group-item" href="<?php echo(htmlentities("$base?where=results&type=cross")); ?>"><i class="fa fa-bar-chart fa-fw"></i>&nbsp; Cross tabulate results</a>
        <a class="list-group-item" href="<?php echo("$base?where=report"); ?>"><i class="fa fa-line-chart fa-fw"></i>&nbsp; View survey reports</a>
        <a class="list-group-item" href="<?php echo("$base?where=export"); ?>"><i class="fa fa-table fa-fw"></i>&nbsp; Export data</a>
        <a class="list-group-item" href="<?php echo("$base?where=statistics"); ?>"><i class="fa fa-area-chart fa-fw"></i>&nbsp; View survey statistics <span class="badge">14</span></a>
      </div>
    </div> 
  </div> 

</div>
<div class="row">

  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
    <div class="panel panel-primary">
      <div class="panel-heading"><h4>Section 3</h4></div>
      <!--
      <div class="panel-body">
        <p class="small">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
      </div>
      -->
      <div id="userAdmin" class="list-group">

        <?php
        //print_r($_SESSION['acl']['username']);
        //print_r($_SESSION['acl']['pgroup']);
        $_a = $_SESSION['acl']['username'];
        $_b = $_SESSION['acl']['pgroup'];
        
        if ($_b[0]) {
        ?>
        <a class="list-group-item" href="<?php echo(htmlentities("$base?where=admdesigner&u=$_a&r=$_b[0]")); ?>"><i class="fa fa-cog fa-fw"></i>&nbsp; Change your info</a>          
        <?php } ?>
        <?php if ($GLOBALS['ESPCONFIG']['auth_type'] != 'ldap_both' && $GLOBALS['ESPCONFIG']['auth_type'] != 'ldap_des'): ?>
        <a class="list-group-item" href="<?php echo("$base?where=passwd"); ?>"><i class="fa fa-key fa-fw"></i>&nbsp; Change your password</a>
        <?php endif; ?>        
        <?php if ($GLOBALS['ESPCONFIG']['auth_response']): ?>
        <a class="list-group-item list-group-item-info" href="<?php echo("$base?where=access"); ?>"><i class="fa fa-wrench fa-fw"></i>&nbsp; Change survey access</a>
        <?php endif; ?>
        <?php if ($GLOBALS['ESPCONFIG']['auth_type'] != 'ldap_both' && $GLOBALS['ESPCONFIG']['auth_type'] != 'ldap_resp' && ($_SESSION['acl']['superuser'] == 'Y' || count($_SESSION['acl']['puser']) > 0)): ?>
        <a class="list-group-item list-group-item-warning" href="<?php echo("$base?where=respondents"); ?>"><i class="fa fa-user fa-fw"></i>&nbsp; Manage respondent accounts</a>
        <?php endif; ?>
        <?php if ($GLOBALS['ESPCONFIG']['auth_type'] != 'ldap_both' && $GLOBALS['ESPCONFIG']['auth_type'] != 'ldap_des' && ($_SESSION['acl']['superuser'] == 'Y' || count($_SESSION['acl']['pgroup']) > 0)): ?>
        <a class="list-group-item list-group-item-warning" href="<?php echo("$base?where=designers"); ?>"><i class="fa fa-cogs fa-fw"></i>&nbsp; Manage designer accounts</a>
        <?php endif; ?>
        <a class="list-group-item" href="<?php echo("$base?where=todo"); ?>"><i class="fa fa-check-square-o fa-fw"></i>&nbsp; View to-do list <span class="badge">beta</span></a>       
      </div>
    </div> 
  </div> 

  <?php if ($_SESSION['acl']['superuser'] == 'Y'): ?>
  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
    <div class="panel panel-primary">
      <div class="panel-heading"><h4>Section 4</h4></div>
      <!--
      <div class="panel-body">
        <p class="small">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
      </div>
      -->
      <div id="userAdmin" class="list-group">       
        <a class="list-group-item list-group-item-danger" href="<?php echo("$base?where=purge"); ?>"><i class="fa fa-trash-o fa-fw"></i>&nbsp; Delete a survey</a>
        <a class="list-group-item list-group-item-danger" href="<?php echo("$base?where=response_purge"); ?>"><i class="fa fa-recycle fa-fw"></i>&nbsp; Delete a response</a>
        <a class="list-group-item list-group-item-danger" href="<?php echo("$base?where=groups"); ?>"><i class="fa fa-database fa-fw"></i>&nbsp; Manage groups</a>
        <a class="list-group-item list-group-item-danger" href="<?php echo("$base?where=guide"); ?>"><i class="fa fa-list-alt fa-fw"></i>&nbsp; Administrator guide</a>
      </div>
    </div> 
  </div>
  <?php endif; ?>

</div>



