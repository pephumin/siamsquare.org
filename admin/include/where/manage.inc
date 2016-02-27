<?php

$base =& $GLOBALS['ESPCONFIG']['ME'];

?>
<h2>Management Interface</h2>
<br />      
    <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4"> <!-- Survey Administration -->
      <div class="panel panel-primary">
        <div class="panel-heading"><h4>Survey Administration</h4></div>
        <div class="panel-body">
          <p class="small">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
          <p class="small">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
        </div>
        <div id="surveyAdmin" class="list-group">
          <a class="list-group-item" href="<?php echo("${base}?where=new"); ?>">Create a New Survey <span class="badge">start</span></a>
          <a class="list-group-item" href="<?php echo("${base}?where=edit"); ?>">Edit an Existing Survey</a>
          <a class="list-group-item" href="<?php echo("${base}?where=test"); ?>">Test a Survey</a>
          <a class="list-group-item" href="<?php echo("${base}?where=copy"); ?>">Copy an Existing Survey</a>
          <?php if($_SESSION['acl']['superuser'] == 'Y') { ?>
          <a class="list-group-item href="<?php echo("${base}?where=purge"); ?>">Purge a survey</a>
          <?php } ?>
          <a class="list-group-item" href="<?php echo("${base}?where=status"); ?>">Change the Status of a Survey</a>
          <?php if($GLOBALS['ESPCONFIG']['auth_response']) { ?>
          <a class="list-group-item" href="<?php echo("${base}?where=access"); ?>">Change Access To a Survey</a>
          <?php } ?>
        </div>
        </div> <!-- /panel-primary -->
      </div> <!-- /Survey Administration -->
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4"> <!-- Survey Results -->
      <div class="panel panel-primary">
        <div class="panel-heading"><h4>Survey Results</h4></div>
        <div class="panel-body">
          <p class="small">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
          <p class="small">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
        </div>
        <div id="surveyResults" class="list-group">
          <a class="list-group-item" href="<?php echo("${base}?where=results"); ?>">View Results from a Survey</a>
          <a class="list-group-item" href="<?php echo(htmlentities("${base}?where=results&type=cross")); ?>">Cross Tabulate Survey Results</a>
          <a class="list-group-item" href="<?php echo("${base}?where=report"); ?>">View a Survey Report</a>
          <a class="list-group-item" href="<?php echo("${base}?where=export"); ?>">Export Data</a>
          <?php if($_SESSION['acl']['superuser'] == 'Y') { ?>
          <a class="list-group-item" href="<?php echo("${base}?where=response_purge"); ?>">Purge a response</a>
          <?php } ?>
          <a class="list-group-item" href="<?php echo("${base}?where=statistics"); ?>">View Survey Statistics <span class="badge">14</span></a>
        </div>
        </div> <!-- /panel-primary -->
      </div> <!-- /Survey Results -->
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4"> <!-- User Administration -->
      <div class="panel panel-primary">
        <div class="panel-heading"><h4>User Administration</h4></div>
        <div class="panel-body">
          <p class="small">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
          <p class="small">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
        </div>
        <div id="userAdmin" class="list-group">
          <?php
          if($GLOBALS['ESPCONFIG']['auth_type'] != 'ldap_both' && $GLOBALS['ESPCONFIG']['auth_type'] != 'ldap_des') { ?>
          <a class="list-group-item" href="<?php echo("${base}?where=passwd");   ?>">Change Your Password</a>
          <?php
          }
          if($GLOBALS['ESPCONFIG']['auth_type'] != 'ldap_both' && $GLOBALS['ESPCONFIG']['auth_type'] != 'ldap_resp' && ($_SESSION['acl']['superuser'] == 'Y' || count($_SESSION['acl']['puser']) > 0)) { ?>
          <a class="list-group-item" href="<?php echo("${base}?where=respondents"); ?>">Manage Respondent Accounts</a>
          <?php   }
          if($GLOBALS['ESPCONFIG']['auth_type'] != 'ldap_both' && $GLOBALS['ESPCONFIG']['auth_type'] != 'ldap_des' && ($_SESSION['acl']['superuser'] == 'Y' || count($_SESSION['acl']['pgroup']) > 0)) { ?>
          <a class="list-group-item" href="<?php echo("${base}?where=designers");   ?>">Manage Designer Accounts</a>
          <?php if($_SESSION['acl']['superuser'] == 'Y') { ?>
          <a class="list-group-item" href="<?php echo("${base}?where=groups"); ?>">Manage Companies</a>
          <?php }
          } ?>
          <a class="list-group-item" href="<?php echo("${base}?where=todo"); ?>">View TO DO list</a>
          <a class="list-group-item" href="<?php echo("${base}?where=guide"); ?>">View the User &amp; Administrator Guide</a>
          <a class="list-group-item" href="<?php echo("${base}?where=help"); ?>">Help Documents</a>
          <a class="list-group-item" href="<?php echo("${base}?where=logout"); ?>">Log Out</a>
        </div>
        </div> <!-- /panel-primary -->
      </div> <!-- /User Administration -->
      </div>
    </div>
