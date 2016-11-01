<?php

$title = "หน้าหลักของสมาชิก";
pageHeader($title);
echo "<h2>$title</h2>";
echo "<p>ยินดีต้อนรับเข้าสู่ระบบ ที่เว็บไซต์นี้คุณจะพบกับโครงการวิจัยต่างๆที่ต้องการความคิดเห็นจากบุคคลอย่างคุณ โดยที่คุณสามารถเลือกจะเข้าร่วมหรือไม่เข้าร่วมในแต่ละโครงการได้โดยไม่มีข้อแม้</p>\n";
echo "<p>สำหรับแต่ละโครงการที่คุณเข้าร่วมแสดงความคิดเห็นอย่างตรงความจริง เราจะตอบแทนคุณด้วยของรางวัล โดยจะมีทั้งของรางวัลที่ได้รับในทันทีและรางวัลชิ้นใหญ่ขึ้นที่มาจากการสะสมคะแนน</p>\n";
echo "<br>\n";

$_SESSION['ip'] = getip();

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
<div class="row">
  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
    <div class="panel panel-primary">
      <h4 class="panel-heading">Section 3</h4>
      <div class="list-group">
    <a class="list-group-item" href="<?php echo(htmlspecialchars(MYADMIN."?w=admdesigner&u=$_a&r=$_b[0]")); ?>"><i class="pe-cog pe-fw"></i>&nbsp; Change your info</a>
<a class="list-group-item" href="<?php echo(htmlspecialchars(MYADMIN."?w=passwd")); ?>"><i class="pe-key pe-fw"></i>&nbsp; Change your password</a>
<a class="list-group-item list-group-item-info" href="<?php echo(htmlspecialchars(MYADMIN."?w=access")); ?>"><i class="pe-wrench pe-fw"></i>&nbsp; Change survey access</a>
<a class="list-group-item list-group-item-warning" href="<?php echo(htmlspecialchars(MYADMIN."?w=respondents")); ?>"><i class="pe-user pe-fw"></i>&nbsp; Manage respondent accounts</a>
<a class="list-group-item list-group-item-warning" href="<?php echo(htmlspecialchars(MYADMIN."?w=designers")); ?>"><i class="pe-cogs pe-fw"></i>&nbsp; Manage designer accounts</a>

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

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
