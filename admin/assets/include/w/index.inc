<?php

//$kt = htmlentities($base."?w=status");

$show = 10;
//survey_status(0,$show,'');
survey_listing(0, $show, $p);

$sql = 'SELECT id FROM '.X_SURVEY.' ORDER BY id DESC';
$result = execute_sql($sql);
$rows = record_count($result);
db_close($result);

?>

<div class="row">
  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
    <div class="panel panel-primary">
      <h4 class="panel-heading">Section 1</h4>
      <div class="list-group">
        <a class="list-group-item" href="<?php echo(htmlspecialchars(MYADMIN."?w=new")); ?>"><i class="pe-file-o pe-fw"></i>&nbsp; Create a new survey <span class="badge">start</span></a>
        <a class="list-group-item" href="<?php echo(htmlspecialchars(MYADMIN."?w=edit")); ?>"><i class="pe-pencil-square-o pe-fw"></i>&nbsp; Edit a survey</a>
        <a class="list-group-item" href="<?php echo(htmlspecialchars(MYADMIN."?w=test")); ?>"><i class="pe-paper-plane pe-fw"></i>&nbsp; Test a survey</a>
        <a class="list-group-item" href="<?php echo(htmlspecialchars(MYADMIN."?w=copy")); ?>"><i class="pe-files-o pe-fw"></i>&nbsp; Copy a survey</a>
        <a class="list-group-item" href="<?php echo(htmlspecialchars(MYADMIN."?w=status")); ?>"><i class="pe-tachometer pe-fw"></i>&nbsp; Survey status <span class="badge"><?php echo $rows; ?></span></a>
      </div>
    </div>
  </div>
  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
    <div class="panel panel-primary">
      <h4 class="panel-heading">Section 2</h4>
      <div class="list-group">
        <a class="list-group-item" href="<?php echo(htmlspecialchars(MYADMIN."?w=results")); ?>"><i class="pe-pie-chart pe-fw"></i>&nbsp; View survey results</a>
        <a class="list-group-item" href="<?php echo(htmlspecialchars(MYADMIN."?w=results&type=cross")); ?>"><i class="pe-bar-chart pe-fw"></i>&nbsp; Cross tabulate results</a>
        <a class="list-group-item" href="<?php echo(htmlspecialchars(MYADMIN."?w=dpspec")); ?>"><i class="pe-table pe-fw"></i>&nbsp; View DP specficaitions</a>
        <a class="list-group-item" href="<?php echo(htmlspecialchars(MYADMIN."?w=export")); ?>"><i class="pe-database pe-fw"></i>&nbsp; Export data</a>
        <a class="list-group-item" href="<?php echo(htmlspecialchars(MYADMIN."?w=statistics")); ?>"><i class="pe-area-chart pe-fw"></i>&nbsp; View survey statistics <span class="badge"><?php echo $rows; ?></span></a>
      </div>
    </div>
  </div>
</div>
<?php $_a = $_SESSION['acl']['username']; $_b = $_SESSION['acl']['pgroup']; ?>
<div class="row">
  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
    <div class="panel panel-primary">
      <h4 class="panel-heading">Section 3</h4>
      <div class="list-group">
    <?php if ($_b[0]) { ?>
    <a class="list-group-item" href="<?php echo(htmlspecialchars(MYADMIN."?w=admdesigner&u=$_a&r=$_b[0]")); ?>"><i class="pe-cog pe-fw"></i>&nbsp; Change your info</a>
    <?php } ?>
    <?php if ($GLOBALS['ESPCONFIG']['auth_type']) { ?>
<a class="list-group-item" href="<?php echo(htmlspecialchars(MYADMIN."?w=passwd")); ?>"><i class="pe-key pe-fw"></i>&nbsp; Change your password</a>
    <?php } ?>
    <?php if ($GLOBALS['ESPCONFIG']['auth_response']) { ?>
<a class="list-group-item list-group-item-info" href="<?php echo(htmlspecialchars(MYADMIN."?w=access")); ?>"><i class="pe-wrench pe-fw"></i>&nbsp; Change survey access</a>
    <?php } ?>
    <?php if ($_SESSION['acl']['superuser'] == 'Y' || count($_SESSION['acl']['puser']) > 0) { ?>
<a class="list-group-item list-group-item-warning" href="<?php echo(htmlspecialchars(MYADMIN."?w=respondents")); ?>"><i class="pe-user pe-fw"></i>&nbsp; Manage respondent accounts</a>
    <?php } ?>
    <?php if ($_SESSION['acl']['superuser'] == 'Y' || count($_SESSION['acl']['pgroup']) > 0)   { ?>
<a class="list-group-item list-group-item-warning" href="<?php echo(htmlspecialchars(MYADMIN."?w=designers")); ?>"><i class="pe-cogs pe-fw"></i>&nbsp; Manage designer accounts</a>
    <?php } ?>
  </div>
    </div>
  </div>
<?php if ($_SESSION['acl']['superuser'] == 'Y') { ?>
  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
    <div class="panel panel-primary">
      <h4 class="panel-heading">Section 4</h4>
      <div class="list-group">
        <a class="list-group-item list-group-item-danger" href="<?php echo(htmlspecialchars(MYADMIN."?w=purge")); ?>"><i class="pe-trash-o pe-fw"></i>&nbsp; Delete a survey</a>
        <a class="list-group-item list-group-item-danger" href="<?php echo(htmlspecialchars(MYADMIN."?w=response_purge")); ?>"><i class="pe-recycle pe-fw"></i>&nbsp; Delete a response</a>
        <a class="list-group-item list-group-item-danger" href="<?php echo(htmlspecialchars(MYADMIN."?w=groups")); ?>"><i class="pe-database pe-fw"></i>&nbsp; Manage groups</a>
        <a class="list-group-item list-group-item-danger" href="<?php echo(htmlspecialchars(MYADMIN."?w=guide")); ?>"><i class="pe-list-alt pe-fw"></i>&nbsp; Administrator guide</a>
      </div>
    </div>
  </div>
<?php } ?>
</div>
