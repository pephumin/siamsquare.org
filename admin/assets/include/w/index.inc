<?php

require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/config.php';
$db = new PDO('mysql:host='. DB_HOST .';dbname='. DB_DATABASE . ';charset=utf8', DB_USER, DB_PASS);

// Get name, logo, and URL for the company
$q1 = $db->prepare("SELECT * FROM j_companies WHERE id = :companyid");
$q1->bindValue(':companyid', $_SESSION["companyid"], PDO::PARAM_INT);
$q1->execute();
if ($q1->rowCount()) {
  $r = $q1->fetchObject();
  if ($r->logo) { $d1 = "<img src=\"$r->logo\" title=\"$r->company\">"; }
  if ($r->website) { $d2 = "<a href=\"$r->website\" title=\"$r->company\" target=\"_blank\">$d1</a>"; } else { $d2 = $d1; }
  $clientlogo = "<div class=\"pull-right\" style=\"margin-top:0px\">$d2</div>\n";
  // $clientlogo = $d2;
}

$title = "Client control panel";
pageHeader($title);
echo "<h2>$title</h2>";
// echo "<br>\n";

if (isset($login)) {
  if ($login->errors) { foreach ($login->errors as $error) { echo $error; } }
  if ($login->messages) { foreach ($login->messages as $message) { echo $message; } }
}

// Count total projects for this company
$q2A = $db->prepare("SELECT id FROM j_projects WHERE companyid = :companyid AND status >= 0");
$q2A->bindValue(':companyid', $_SESSION["companyid"], PDO::PARAM_INT);
$q2A->execute();
$count2A = $q2A->rowCount();

// Count total projects for this user
$q2B = $db->prepare("SELECT id FROM j_projects WHERE companyid = :companyid AND userid = :userid AND status >= 0");
$q2B->bindValue(':companyid', $_SESSION["companyid"], PDO::PARAM_INT);
$q2B->bindValue(':userid', $_SESSION["userid"], PDO::PARAM_INT);
$q2B->execute();
$count2B = $q2B->rowCount();
$percent2 = percent($count2B/$count2A);

// Count different project status for this company
$q3A = $db->prepare("SELECT id FROM j_projects WHERE companyid = :companyid AND status = '1'");
$q3A->bindValue(':companyid', $_SESSION["companyid"], PDO::PARAM_INT);
$q3A->execute();
$count3A = $q3A->rowCount();
$q4A = $db->prepare("SELECT id FROM j_projects WHERE companyid = :companyid AND status = '2'");
$q4A->bindValue(':companyid', $_SESSION["companyid"], PDO::PARAM_INT);
$q4A->execute();
$count4A = $q4A->rowCount();
$q5A = $db->prepare("SELECT id FROM j_projects WHERE companyid = :companyid AND status = '3'");
$q5A->bindValue(':companyid', $_SESSION["companyid"], PDO::PARAM_INT);
$q5A->execute();
$count5A = $q5A->rowCount();
$q6A = $db->prepare("SELECT id FROM j_projects WHERE companyid = :companyid AND status = '4'");
$q6A->bindValue(':companyid', $_SESSION["companyid"], PDO::PARAM_INT);
$q6A->execute();
$count6A = $q6A->rowCount();

// Count different project status for this user
$q3B = $db->prepare("SELECT id FROM j_projects WHERE companyid = :companyid AND userid = :userid AND status = '1'");
$q3B->bindValue(':companyid', $_SESSION["companyid"], PDO::PARAM_INT);
$q3B->bindValue(':userid', $_SESSION["userid"], PDO::PARAM_INT);
$q3B->execute();
$count3B = $q3B->rowCount();
$q4B = $db->prepare("SELECT id FROM j_projects WHERE companyid = :companyid AND userid = :userid AND status = '2'");
$q4B->bindValue(':companyid', $_SESSION["companyid"], PDO::PARAM_INT);
$q4B->bindValue(':userid', $_SESSION["userid"], PDO::PARAM_INT);
$q4B->execute();
$count4B = $q4B->rowCount();
$q5B = $db->prepare("SELECT id FROM j_projects WHERE companyid = :companyid AND userid = :userid AND status = '3'");
$q5B->bindValue(':companyid', $_SESSION["companyid"], PDO::PARAM_INT);
$q5B->bindValue(':userid', $_SESSION["userid"], PDO::PARAM_INT);
$q5B->execute();
$count5B = $q5B->rowCount();
$q6B = $db->prepare("SELECT id FROM j_projects WHERE companyid = :companyid AND userid = :userid AND status = '4'");
$q6B->bindValue(':companyid', $_SESSION["companyid"], PDO::PARAM_INT);
$q6B->bindValue(':userid', $_SESSION["userid"], PDO::PARAM_INT);
$q6B->execute();
$count6B = $q6B->rowCount();

$count3C = $count3A - $count3B;
$count4C = $count4A - $count4B;
$count5C = $count5A - $count5B;
$count6C = $count6A - $count6B;

$sumB = $count3B + $count4B + $count5B + $count6B;
$sumC = $count3C + $count4C + $count5C + $count6C;
$sumD = $sumB + $sumC;

?>

<br>

<div class="row">
  <div class="col-sm-8">
    <h3>Survey summary</h3>
    <p><strong><?php echo $_SESSION["company"]; ?></strong> currently has a total of <strong><?php echo $count2A; ?> projects</strong> in which <strong><?php echo $count2B; ?> projects</strong> (or <?php echo $percent2; ?>) are directly managed by you.</p>
    <p>Table below breaks down all projects by different stages.</p>
    <table class="table table-hover small">
      <thead>
        <tr class="bg-primary">
          <td width="40%"></td>
          <td width="20%" align="right"><strong>Managed by you</strong></td>
          <td width="20%" align="right"><strong>Managed by someone else</strong></td>
          <td width="20%" align="right"><strong>Total</strong></td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td width="40%"><i class="pe-hourglass-start pe-fw"></i> Before data collection</td>
          <td width="20%" align="right"><?php echo $count3B; ?></td>
          <td width="20%" align="right"><?php echo $count3C; ?></td>
          <td width="20%" align="right"><?php echo $count3A; ?></td>
        </tr>
        <tr>
          <td width="40%"><i class="pe-hourglass-half pe-fw"></i> During data collection</td>
          <td width="20%" align="right"><?php echo $count4B; ?></td>
          <td width="20%" align="right"><?php echo $count4C; ?></td>
          <td width="20%" align="right"><?php echo $count4A; ?></td>
        </tr>
        <tr>
          <td width="40%"><i class="pe-hourglass-end pe-fw"></i> After data collection</td>
          <td width="20%" align="right"><?php echo $count5B; ?></td>
          <td width="20%" align="right"><?php echo $count5C; ?></td>
          <td width="20%" align="right"><?php echo $count5A; ?></td>
        </tr>
        <tr>
          <td width="40%"><i class="pe-archive pe-fw"></i> Archived</td>
          <td width="20%" align="right"><?php echo $count6B; ?></td>
          <td width="20%" align="right"><?php echo $count6C; ?></td>
          <td width="20%" align="right"><?php echo $count6A; ?></td>
        </tr>
        <tr class="bg-info">
          <td width="40%"><strong><i class="pe-cubes pe-fw"></i> Total</strong></td>
          <td width="20%" align="right"><strong><?php echo $sumB; ?></strong></td>
          <td width="20%" align="right"><strong><?php echo $sumC; ?></strong></td>
          <td width="20%" align="right"><strong><?php echo $sumD; ?></strong></td>
        </tr>
      </tbody>
    </table>
    <p>There are <strong><?php echo $_SESSION["company"]; ?></strong> currently holds a total of <strong><?php echo $count2A; ?> projects</strong> in which <strong><?php echo $count2B; ?> projects</strong> (or <?php echo $percent2; ?>) are directly managed by you.</p>
    <p>Table below breaks down all projects by different stages.</p>
    <div class="alert alert-success">
      <strong><i class="pe-bullhorn"></i> News:</strong> Clients can have an unlimited number of users.
    </div>
  </div>
  <div class="col-sm-4 bg-info">
    <!-- <p class="pull-right" style="margin-top:5px"><img src="<?php if ($_SESSION["avatar"]) { echo $_SESSION["avatar"]; } else { echo "assets/img/u/M6.svg"; } ?>" id="avatar1" class="img-circle members-photo-small" alt="Avatar"></p> -->
    <h4>Your recent activities</h4>
    <div class="panel-group">
      <div class="panel panel-primary">
        <div class="panel-body"><small>Last login: <strong><?php echo ago($_SESSION["lastlogin2"]); ?></strong></small></div>
      </div>
      <!-- <div class="panel panel-primary">
        <div class="panel-body"><small>Last ip: <strong><?php echo $_SESSION["lastip2"]; ?></strong></small></div>
      </div> -->
    </div>
    <div class="list-group">
<?php
$q7 = $db->prepare("SELECT * FROM j_users_logs WHERE userid = :userid ORDER BY recorded DESC LIMIT 5");
$q7->bindValue(':userid', $_SESSION["userid"], PDO::PARAM_INT);
$q7->execute();
while ($r = $q7->fetchObject()) {
  $t = ago($r->recorded);
  $r->data = iconize($r->data);
  echo "      <button type=\"button\" class=\"list-group-item\"><small>$insert $r->data [$t]</small></button>\n";
}
?>
    </div>
  </div>
</div>

<!-- <div class="row">
  <div class="col-sm-4 bg-info">
    <h3>Welcome message</h3>
    <p>Welcome to client control panel. This site allows all of our clients to be able to create, test, manage, and monitor your surveys effectively. Our system includes the user hierarchy where different access permissions will be set for each of the users according which will help ensuring the right persons will manage the right tasks.</p>
    <p>Feel free to contact us if you find any problems using our site. Any other suggestions are also more than welcome.</p>
  </div>
  <div class="col-sm-8">
    <h3>Updated news</h3>
    <p>Now you can do this</p>
    <p>Now you can do that</p>
  </div>
</div> -->



<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
