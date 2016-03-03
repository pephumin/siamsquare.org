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
        <a class="list-group-item" href="<?php echo("${base}?where=new"); ?>"><i class="fa fa-file-o fa-fw"></i>&nbsp; Create a new survey <span class="badge">new</span></a>
        <a class="list-group-item" href="<?php echo("${base}?where=edit"); ?>"><i class="fa fa-pencil-square-o fa-fw"></i>&nbsp; Edit a survey</a>
        <a class="list-group-item" href="<?php echo("${base}?where=test"); ?>"><i class="fa fa-paper-plane fa-fw"></i>&nbsp; Test a survey</a>
        <a class="list-group-item" href="<?php echo("${base}?where=copy"); ?>"><i class="fa fa-files-o fa-fw"></i>&nbsp; Copy a survey</a>
        <a class="list-group-item" href="<?php echo("${base}?where=status"); ?>"><i class="fa fa-tachometer fa-fw"></i>&nbsp; Survey status</a>
        <?php if ($GLOBALS['ESPCONFIG']['auth_response']): ?>
        <a class="list-group-item list-group-item-info" href="<?php echo("${base}?where=access"); ?>"><i class="fa fa-wrench fa-fw"></i>&nbsp; Change survey access</a>
        <?php endif; ?>
        <?php if ($_SESSION['acl']['superuser'] == 'Y'): ?>
        <a class="list-group-item list-group-item-danger" href="<?php echo("${base}?where=purge"); ?>"><i class="fa fa-trash-o fa-fw"></i>&nbsp; Delete a survey</a>
        <?php endif; ?>

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
        <a class="list-group-item" href="<?php echo("${base}?where=results"); ?>"><i class="fa fa-pie-chart fa-fw"></i>&nbsp; View survey results</a>
        <a class="list-group-item" href="<?php echo(htmlentities("${base}?where=results&type=cross")); ?>"><i class="fa fa-bar-chart fa-fw"></i>&nbsp; Cross tabulate results</a>
        <a class="list-group-item" href="<?php echo("${base}?where=report"); ?>"><i class="fa fa-line-chart fa-fw"></i>&nbsp; View survey reports</a>
        <a class="list-group-item" href="<?php echo("${base}?where=export"); ?>"><i class="fa fa-table fa-fw"></i>&nbsp; Export data</a>
        <a class="list-group-item" href="<?php echo("${base}?where=statistics"); ?>"><i class="fa fa-area-chart fa-fw"></i>&nbsp; View survey statistics <span class="badge">14</span></a>
        <?php if ($_SESSION['acl']['superuser'] == 'Y'): ?>
        <a class="list-group-item list-group-item-danger" href="<?php echo("${base}?where=response_purge"); ?>"><i class="fa fa-recycle fa-fw"></i>&nbsp; Delete a response</a>
        <?php endif; ?>
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
        <?php if ($GLOBALS['ESPCONFIG']['auth_type'] != 'ldap_both' && $GLOBALS['ESPCONFIG']['auth_type'] != 'ldap_des'): ?>
        <a class="list-group-item" href="<?php echo("${base}?where=passwd"); ?>"><i class="fa fa-key fa-fw"></i>&nbsp; Change your password</a>
        <?php endif; ?>
        <?php if ($GLOBALS['ESPCONFIG']['auth_type'] != 'ldap_both' && $GLOBALS['ESPCONFIG']['auth_type'] != 'ldap_resp' && ($_SESSION['acl']['superuser'] == 'Y' || count($_SESSION['acl']['puser']) > 0)): ?>
        <a class="list-group-item list-group-item-warning" href="<?php echo("${base}?where=respondents"); ?>"><i class="fa fa-user fa-fw"></i>&nbsp; Manage respondent accounts</a>
        <?php endif; ?>
        <?php if ($GLOBALS['ESPCONFIG']['auth_type'] != 'ldap_both' && $GLOBALS['ESPCONFIG']['auth_type'] != 'ldap_des' && ($_SESSION['acl']['superuser'] == 'Y' || count($_SESSION['acl']['pgroup']) > 0)): ?>
        <a class="list-group-item list-group-item-warning" href="<?php echo("${base}?where=designers"); ?>"><i class="fa fa-cogs fa-fw"></i>&nbsp; Manage designer accounts</a>
          <?php if ($_SESSION['acl']['superuser'] == 'Y'): ?>
          <a class="list-group-item list-group-item-danger" href="<?php echo("${base}?where=groups"); ?>"><i class="fa fa-database fa-fw"></i>&nbsp; Manage companies</a>
          <a class="list-group-item list-group-item-danger" href="<?php echo("${base}?where=guide"); ?>"><i class="fa fa-list-alt fa-fw"></i>&nbsp; Administrator guide</a>
          <?php endif; ?>
        <?php endif; ?>
        <a class="list-group-item" href="<?php echo("${base}?where=todo"); ?>"><i class="fa fa-check-square-o fa-fw"></i>&nbsp; View to-do list</a>
      </div>
    </div> <!-- /panel-primary -->
  </div> <!-- /User Administration -->
  </div>
</div>

<?php
/*
function print_menu($no) {
  if ($no = "m1") {
    $menu = array(
      "new" => array(
        "URL" => "$base?where=new", 
        "FA" => "fa-file-o",
        "Label" => "Create a new survey",
        "Badge" ==> ""
      ),
      "edit" => array(
        "URL" => "$base?where=edit", 
        "FA" =>  "fa-pencil-square-o",
        "Label" =>  "Edit a survey",
        "Badge" ==> ""
      ),
      "test" => array(
        "URL" => "$base?where=test", 
        "FA" =>  "fa-paper-plane",
        "Label" =>  "Test a survey",
        "Badge" ==> ""
      ),
      "copy" => array(
        "URL" => "$base?where=copy", 
        "FA" =>  "fa-files-o",
        "Label" =>  "Copy a survey",
        "Badge" ==> ""
      ),
      "purge" => array(
        "URL" => "$base?where=purge", 
        "FA" =>  "fa-trash-o",
        "Label" =>  "Delete a survey",
        "Badge" ==> ""
      ),
      "access" => array(
        "URL" => "$base?where=access", 
        "FA" =>  "fa-wrench",
        "Label" =>  "Change survey access",
        "Badge" ==> ""
      ),
      "status" => array(
        "URL" => "$base?where=status", 
        "FA" =>  "fa-tachometer",
        "Label" =>  "Survey status",
        "Badge" ==> ""
      ),
    );
    $heading = 'Survey Administration';
    $div = '<div id="surveyAdmin" class="list-group">';
  } elseif ($no = "m2") {
    $menu = array(
      "results" => array(
        "URL" => "$base?where=results", 
        "FA" =>  "fa-pie-chart",
        "Label" =>  "View survey results",
        "Badge" ==> ""
      ),
      "crosstab" => array(
        "URL" => "$base?where=results&type=cross", 
        "FA" =>  "fa-bar-chart",
        "Label" =>  "Cross tabulate results",
        "Badge" ==> ""
      ),
      "report" => array(
        "URL" => "$base?where=report", 
        "FA" =>  "fa-line-chart",
        "Label" =>  "View a survey report",
        "Badge" ==> ""
      ),
      "export" => array(
        "URL" => "$base?where=export", 
        "FA" =>  "fa-table",
        "Label" =>  "Export data",
        "Badge" ==> ""
      ),
      "response_purge" => array(
        "URL" => "$base?where=response_purge", 
        "FA" =>  "fa-recycle",
        "Label" =>  "Purge a response",
        "Badge" ==> ""
      ),
      "statistics" => array(
        "URL" => "$base?where=statistics", 
        "FA" =>  "fa-area-chart",
        "Label" =>  "View survey statistics",
        "Badge" ==> ""
      ),
    );
    $heading = 'Survey Results';
    $div = '<div id="surveyResults" class="list-group">';
  } elseif ($no = "m3") {
    $menu = array(
      "passwd" => array(
        "URL" => "$base?where=passwd", 
        "FA" =>  "fa-key",
        "Label" =>  "Change your password",
        "Badge" ==> ""
      ),
      "respondents" => array(
        "URL" => "$base?where=respondents", 
        "FA" =>  "fa-user",
        "Label" =>  "Manage respondent accounts",
        "Badge" ==> ""
      ),
      "designers" => array(
        "URL" => "$base?where=designers", 
        "FA" =>  "fa-cogs",
        "Label" =>  "Manage designer accounts",
        "Badge" ==> ""
      ),
      "groups" => array(
        "URL" => "$base?where=groups", 
        "FA" =>  "fa-database",
        "Label" =>  "Manage companies",
        "Badge" ==> ""
      ),
      "todo" => array(
        "URL" => "$base?where=todo", 
        "FA" =>  "fa-check-square-o",
        "Label" =>  "View to-do list",
        "Badge" ==> ""
      ),
      "guide" => array(
        "URL" => "$base?where=guide", 
        "FA" =>  "fa-list-alt",
        "Label" =>  "Administrator guide",
        "Badge" ==> ""
      ),
    );
    $heading = 'User Administration';
    $div = '<div id="userAdmin" class="list-group">';
  } 

//  echo "  <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\"> <!-- $heading -->\n";
//  echo "    <div class=\"panel panel-primary\">\n";
//  echo "      <div class=\"panel-heading\"><h4>$heading</h4></div>\n";
//  echo "      <div class=\"panel-body\">\n";
//  echo "        <p class=\"small\">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n";
//  echo "        <p class=\"small\">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>\n";
//  echo "      </div>\n";
//  echo "      $div";

//  for ($i = 1; $i <= count($menu); $i++) {
//    if (menu[$i]['"Badge"'] != "") {
//      echo '        <a class="list-group-item" href="'.$menu[$i]['"URL"'].'"><i class="fa '.$menu[$i]['FA'].' fa-fw"></i>&nbsp; '.$menu[$i]['"Label"'].' <span class="Badge">'.$menu[$i]['"Badge"'].'</span></a>\n';
//    } else {
//      echo '        <a class="list-group-item" href="'.$menu[$i]['"URL"'].'"><i class="fa '.$menu[$i]['FA'].' fa-fw"></i>&nbsp; '.$menu[$i]['"Label"'].'</a>\n';
//    }
//  }
//  echo "      </div>\n";
//  echo "    </div> <!-- /panel-primary -->\n";
//  echo "  </div> <!-- /$heading -->\n";  
}

//  echo "  <div class=\n"row\n">\n";
//  print_menu("m1");\n";
//  print_menu("m2");\n";
//  print_menu("m3");\n";
//  echo "  </div>\n";

*/
?>

