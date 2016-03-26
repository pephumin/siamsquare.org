<?php

$base =& $GLOBALS['ESPCONFIG']['ME'];
$kt = htmlentities($base."?where=status");
$show = 5;

echo "<h2>Management Interface</h2>\n";
echo "<br />\n";
//echo "<p class=\"pull-left\">Last $show projects</p>\n";
echo "<h4>Last $show projects <small>(a newer project is on top of the list)</small></h4>\n";

survey_status(0,$show,'');

//echo "<div class=\"pull-right\">[<a href=\"$kt\">View the full list</a>]</div>\n";
//echo "<br />\n";

$sql = 'SELECT id FROM '.$GLOBALS['ESPCONFIG']['survey_table'].' ORDER BY id DESC';
$result = execute_sql($sql);
$rows = record_count($result);
db_close($result);

?>

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
        <a class="list-group-item" href="<?php echo("$base?where=new"); ?>"><i class="fa fa-file-o fa-fw"></i>&nbsp; Create a new survey <span class="badge">start</span></a>
        <a class="list-group-item" href="<?php echo("$base?where=edit"); ?>"><i class="fa fa-pencil-square-o fa-fw"></i>&nbsp; Edit a survey</a>
        <a class="list-group-item" href="<?php echo("$base?where=test"); ?>"><i class="fa fa-paper-plane fa-fw"></i>&nbsp; Test a survey</a>
        <a class="list-group-item" href="<?php echo("$base?where=copy"); ?>"><i class="fa fa-files-o fa-fw"></i>&nbsp; Copy a survey</a>
        <a class="list-group-item" href="<?php echo("$base?where=status"); ?>"><i class="fa fa-tachometer fa-fw"></i>&nbsp; Survey status <span class="badge"><?php echo $rows; ?></span></a>
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
        <a class="list-group-item" href="<?php echo("$base?where=statistics"); ?>"><i class="fa fa-area-chart fa-fw"></i>&nbsp; View survey statistics <span class="badge"><?php echo $rows; ?></span></a>
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



