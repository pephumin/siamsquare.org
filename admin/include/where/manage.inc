<?php

$base =& $GLOBALS['ESPCONFIG']['ME'];

?>
<h2>Management Interface</h2>
<br />

<div class="row">
  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4"> <!-- Survey Administration -->
    <div class="panel panel-primary">
      <div class="panel-heading"><h4>Survey Administration</h4></div>
      <div class="panel-body">
        <p class="small">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
        <p class="small">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
      </div>
      <div id="surveyAdmin" class="list-group">
        <a class="list-group-item" href="<?php echo("${base}?where=new"); ?>"><i class="fa fa-file-o fa-fw"></i>&nbsp; Create a new survey <span class="badge">start</span></a>
        <a class="list-group-item" href="<?php echo("${base}?where=edit"); ?>"><i class="fa fa-pencil-square-o fa-fw"></i>&nbsp; Edit an existing survey</a>
        <a class="list-group-item" href="<?php echo("${base}?where=test"); ?>"><i class="fa fa-paper-plane fa-fw"></i>&nbsp; Test a survey</a>
        <a class="list-group-item" href="<?php echo("${base}?where=copy"); ?>"><i class="fa fa-files-o fa-fw"></i>&nbsp; Copy an existing survey</a>
        <?php if($_SESSION['acl']['superuser'] == 'Y') { ?>
        <a class="list-group-item href="<?php echo("${base}?where=purge"); ?>"><i class="fa fa-trash-o fa-fw"></i>&nbsp; Purge a survey</a>
        <?php } ?>
        <?php if($GLOBALS['ESPCONFIG']['auth_response']) { ?>
        <a class="list-group-item" href="<?php echo("${base}?where=access"); ?>"><i class="fa fa-wrench fa-fw"></i>&nbsp; Change access to a survey</a>
        <?php } ?>
        <a class="list-group-item" href="<?php echo("${base}?where=status"); ?>"><i class="fa fa-tachometer fa-fw"></i>&nbsp; Survey status</a>
      </div>
    </div> <!-- /panel-primary -->
  </div> <!-- /Survey Administration -->
  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4"> <!-- Survey Results -->
    <div class="panel panel-primary">
      <div class="panel-heading"><h4>Survey Results</h4></div>
      <div class="panel-body">
        <p class="small">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
        <p class="small">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
      </div>
      <div id="surveyResults" class="list-group">
        <a class="list-group-item" href="<?php echo("${base}?where=results"); ?>"><i class="fa fa-pie-chart fa-fw"></i>&nbsp; View results from a survey</a>
        <a class="list-group-item" href="<?php echo(htmlentities("${base}?where=results&type=cross")); ?>"><i class="fa fa-bar-chart fa-fw"></i>&nbsp; Cross tabulate survey results</a>
        <a class="list-group-item" href="<?php echo("${base}?where=report"); ?>"><i class="fa fa-line-chart fa-fw"></i>&nbsp; View a survey report</a>
        <a class="list-group-item" href="<?php echo("${base}?where=export"); ?>"><i class="fa fa-table fa-fw"></i>&nbsp; Export data</a>
        <?php if($_SESSION['acl']['superuser'] == 'Y') { ?>
        <a class="list-group-item" href="<?php echo("${base}?where=response_purge"); ?>"><i class="fa fa-recycle fa-fw"></i>&nbsp; Purge a response</a>
        <?php } ?>
        <a class="list-group-item" href="<?php echo("${base}?where=statistics"); ?>"><i class="fa fa-area-chart fa-fw"></i>&nbsp; View survey statistics <span class="badge">14</span></a>
      </div>
    </div> <!-- /panel-primary -->
  </div> <!-- /Survey Results -->
  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4"> <!-- User Administration -->
    <div class="panel panel-primary">
      <div class="panel-heading"><h4>User Administration</h4></div>
      <div class="panel-body">
        <p class="small">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
        <p class="small">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
      </div>
      <div id="userAdmin" class="list-group">
        <?php
        if($GLOBALS['ESPCONFIG']['auth_type'] != 'ldap_both' && $GLOBALS['ESPCONFIG']['auth_type'] != 'ldap_des') { ?>
        <a class="list-group-item" href="<?php echo("${base}?where=passwd");   ?>"><i class="fa fa-key fa-fw"></i>&nbsp; Change your password</a>
        <?php
        }
        if($GLOBALS['ESPCONFIG']['auth_type'] != 'ldap_both' && $GLOBALS['ESPCONFIG']['auth_type'] != 'ldap_resp' && ($_SESSION['acl']['superuser'] == 'Y' || count($_SESSION['acl']['puser']) > 0)) { ?>
        <a class="list-group-item" href="<?php echo("${base}?where=respondents"); ?>"><i class="fa fa-user fa-fw"></i>&nbsp; Manage respondent accounts</a>
        <?php   }
        if($GLOBALS['ESPCONFIG']['auth_type'] != 'ldap_both' && $GLOBALS['ESPCONFIG']['auth_type'] != 'ldap_des' && ($_SESSION['acl']['superuser'] == 'Y' || count($_SESSION['acl']['pgroup']) > 0)) { ?>
        <a class="list-group-item" href="<?php echo("${base}?where=designers");   ?>"><i class="fa fa-cogs fa-fw"></i>&nbsp; Manage designer accounts</a>
        <?php if($_SESSION['acl']['superuser'] == 'Y') { ?>
        <a class="list-group-item" href="<?php echo("${base}?where=groups"); ?>"><i class="fa fa-database fa-fw"></i>&nbsp; Manage companies</a>
        <?php }
        } ?>
        <a class="list-group-item" href="<?php echo("${base}?where=todo"); ?>"><i class="fa fa-check-square-o fa-fw"></i>&nbsp; View to-do list</a>
        <a class="list-group-item" href="<?php echo("${base}?where=guide"); ?>"><i class="fa fa-list-alt fa-fw"></i>&nbsp; View the administrator guide</a>
        <a class="list-group-item" href="<?php echo("${base}?where=help"); ?>"><i class="fa fa-question fa-fw"></i>&nbsp; Help documents</a>
      </div>
    </div> <!-- /panel-primary -->
  </div> <!-- /User Administration -->
  </div>
</div>
