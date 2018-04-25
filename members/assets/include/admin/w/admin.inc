<?php

$me = "/admin/?w=admin";

if ($_POST['companyid']) { $c = $_POST['companyid']; } else if ($_GET['c']) { $c = $_GET['c']; } else { $c = ""; }
if ($_POST['userid']) { $d = $_POST['userid']; } else if ($_GET['d']) { $d = $_GET['d']; } else { $d = ""; }
if ($_POST['surveyid']) { $p = $_POST['surveyid']; } else if ($_GET['p']) { $p = $_GET['p']; } else { $p = ""; }

if ($_SESSION['level'] <= "8") {
  $title = "An error has been found";
  pageHeader($title);
  echo "<h2>No access</h2>\n";
  echo "<p><strong>This page can be accessed by Super Users only.</strong></p>\n";
  echo "<p>We strongly suggest you should stop accessing by manually enter the URL as we consider this to be a violent action and our system has already recorded this error including your identity and timestamp.</p>\n";
  echo "<p>You should instead use the client dashboard which will never lead you to a wrong link or any errors like this at all.</p>\n";
  echo mkerror("Your level is not high enough to access this page.");
  pageFooter();
  $q1 = $db->prepare("INSERT INTO j_users_logs (userid, ip, data, critical) VALUE (:userid, :ip, '" . $_SESSION["email"] . " tried acccessing the administration page manually', '5')");
  $q1->bindValue(':userid', $_SESSION["userid"], PDO::PARAM_INT);
  $q1->bindValue(':ip', $_SESSION["ip"], PDO::PARAM_INT);
  $q1->execute();
  exit;
}

// Get company list
$q1 = $db->prepare("SELECT C.*,
                    (SELECT COUNT(*) FROM j_users AS U WHERE U.companyid = C.id) AS nUsers,
                    (SELECT COUNT(*) FROM j_users AS U WHERE U.companyid = C.id AND U.status = 5) AS nUserActives,
                    (SELECT COUNT(*) FROM j_users AS U WHERE U.companyid = C.id AND U.status IN (1,2,3,4,0)) AS nUserInactives,
                    (SELECT COUNT(*) FROM j_projects AS P WHERE P.companyid = C.id) AS nProjects,
                    (SELECT COUNT(*) FROM j_projects AS P WHERE P.companyid = C.id AND P.status IN (1,2,3)) AS nProjectActives,
                    (SELECT COUNT(*) FROM j_projects AS P WHERE P.companyid = C.id AND P.status IN (4,0)) AS nProjectInactives,
                    (SELECT COUNT(*) FROM j_board AS B WHERE B.companyid = C.id) AS nBoards
                  FROM j_companies AS C ORDER BY C.id DESC");
$q1->execute();
$countcompany = $q1->rowCount();
$mm1 = "<div class=\"row\">\n";
$i = 1; $companylist = "";
while ($row = $q1->fetchObject()) {
  $companyid = $row->id; // $companyid += 0;
  $name = $row->company;
  $cfullname = $row->fullname;
  $cfullname_th = $row->fullname_th;
  $address = $row->address;
  $address_th = $row->address_th;
  $description = $row->description;
  $description_th = $row->description_th;
  $logo = $row->logo;
  $website = $row->website;
  $cemail = $row->email;
  $telephone = $row->telephone;
  $fax = $row->fax;
  $created = ago($row->created);
  $updated = ago($row->updated);
  $cstatus = status_company($row->status, true, true);
  $nUsers = $row->nUsers; $nUserActives = $row->nUserActives; $nUserInactives = $row->nUserInactives; $nProjects = $row->nProjects; $nProjectActives = $row->nProjectActives; $nProjectInactives = $row->nProjectInactives; $nBoards = $row->nBoards;
  $allUsers += $nUsers; $allUserActives += $nUserActives; $allUserInactives += $nUserInactives; $allProjects += $nProjects; $allProjectActives += $nProjectActives; $allProjectInactives += $nProjectInactives; $allBoards += $nBoards;
  if ($companyid == $c) { $companylist .= "        <option value=\"$companyid\" selected>$cfullname</option>\n"; }
  else { $companylist .= "        <option value=\"$companyid\">$cfullname</option>\n"; }
  $mm1 .= "  <div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-3\" style=\"padding:10px\">\n";
  $mm1 .= "    <div class=\"bg-info\" id=\"firstrow$i\" style=\"padding:10px 20px; border: 1px dotted lightgrey\">\n";
  $mm1 .= "    <p class=\"pull-right\"><a id=\"rowshow$i\" href=\"\" onclick=\"return showRow(event, $i)\" style=\"\"> <i class=\"pe-chevron-down\"></i></a><a id=\"rowhide$i\" href=\"\" onclick=\"return hideRow(event, $i)\" style=\"display:none\"> <i class=\"pe-chevron-up\"></i></a></p>\n";
  $mm1 .= "    <h4>$name <small>($companyid) <a href=\"$me&c=$companyid\"><i class=\"pe-edit\"></i></a></small></h4>\n";
  $mm1 .= "    <table class=\"table\">\n";
  $mm1 .= "      <thead><tr><th width=\"33%\" style=\"text-align:center\">Users</th><th width=\"33%\" style=\"text-align:center\">Projects</th><th width=\"33%\" style=\"text-align:center\">Messages</th></tr></thead>\n";
  $mm1 .= "      <tfoot><tr><td style=\"text-align:center; font-size: 0.65rem; color:grey\">$nUserActives active<br>$nUserInactives inactive</td><td style=\"text-align:center; font-size: 0.65rem; color:grey\">$nProjectActives active<br>$nProjectInactives inactive</td><td style=\"text-align:center\"></td></tr></tfoot>\n";
  $mm1 .= "      <tbody><tr><td style=\"text-align:center\">$nUsers</td><td style=\"text-align:center\">$nProjects</td><td style=\"text-align:center\">$nBoards</td></tr></tbody>\n";
  $mm1 .= "    </table>\n";
  $mm1 .= "    <br>\n";
  $mm1 .= "    <p class=\"small grey\">Registered: $created<br>Last updated: $updated<br>Status: $cstatus</p>\n";
  $mm1 .= "    </div>\n";
  $mm1 .= "  </div>\n";
  $mm1 .= "  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 small\" id=\"row$i\" style=\"display:none; padding:30px\">\n";
  $mm1 .= "    <nav>\n";
  $mm1 .= "      <ul class=\"nav nav-tabs\">\n";
  $mm1 .= "        <li class=\"active\"><a href=\"#1-$companyid\" data-toggle=\"tab\"><i class=\"pe-info-circle pe-fw\"></i> Information</a></li>\n";
  $mm1 .= "        <li><a href=\"#2-$companyid\" data-toggle=\"tab\"><i class=\"pe-users pe-fw\"></i> Users <span class=\"badge smaller\">$nUsers</span></a></li>\n";
  $mm1 .= "        <li><a href=\"#3-$companyid\" data-toggle=\"tab\"><i class=\"pe-cubes pe-fw\"></i> Projects <span class=\"badge smaller\">$nProjects</span></a></li>\n";
  $mm1 .= "        <li><a href=\"#4-$companyid\" data-toggle=\"tab\"><i class=\"pe-comments-o pe-fw\"></i> Messages <span class=\"badge smaller\">$nBoards</span></a></li>\n";
  $mm1 .= "      </ul>\n";
  $mm1 .= "    </nav>\n";
  $mm1 .= "    <div class=\"tab-content\" style=\"border:1px #ddd solid;border-top-color: transparent;\">\n";
  $mm1 .= "      <div id=\"1-$companyid\" class=\"tab-pane fade in active\" style=\"padding:20px;\">\n";
  if ($logo) { $mm1 .= "        <div class=\"pull-right\" style=\"margin-top:0px\"><img src=\"$logo\" title=\"$cfullname\"></div>\n"; }
  $mm1 .= "        <h4>$name</h4>\n";
  $mm1 .= "        <table class=\"table table-hover table-condensed\">\n";
  $mm1 .= "          <tbody>\n";
  $mm1 .= "            <tr>\n";
  $mm1 .= "              <td width=\"20%\">Company name</td>\n";
  $mm1 .= "              <td width=\"10%\"><button class=\"btn btn-default btn-tiny\"><i class=\"pe-language pe-fw\"></i> EN</button></td>\n";
  $mm1 .= "              <td width=\"70%\">$cfullname</td>\n";
  $mm1 .= "            </tr>\n";
  $mm1 .= "            <tr>\n";
  $mm1 .= "              <td width=\"20%\"></td>\n";
  $mm1 .= "              <td width=\"10%\"><button class=\"btn btn-default btn-tiny\"><i class=\"pe-language pe-fw\"></i> TH</button></td>\n";
  $mm1 .= "              <td width=\"70%\">$cfullname_th</td>\n";
  $mm1 .= "            </tr>\n";
  $mm1 .= "            <tr>\n";
  $mm1 .= "              <td width=\"20%\">Description</td>\n";
  $mm1 .= "              <td width=\"10%\"><button class=\"btn btn-default btn-tiny\"><i class=\"pe-language pe-fw\"></i> EN</button></td>\n";
  $mm1 .= "              <td width=\"70%\">$description</td>\n";
  $mm1 .= "            </tr>\n";
  $mm1 .= "            <tr>\n";
  $mm1 .= "              <td width=\"20%\"></td>\n";
  $mm1 .= "              <td width=\"10%\"><button class=\"btn btn-default btn-tiny\"><i class=\"pe-language pe-fw\"></i> TH</button></td>\n";
  $mm1 .= "              <td width=\"70%\">$description_th</td>\n";
  $mm1 .= "            </tr>\n";
  $mm1 .= "            <tr>\n";
  $mm1 .= "              <td width=\"20%\">Address</td>\n";
  $mm1 .= "              <td width=\"10%\"><button class=\"btn btn-default btn-tiny\"><i class=\"pe-language pe-fw\"></i> EN</button></td>\n";
  $mm1 .= "              <td width=\"70%\">$address</td>\n";
  $mm1 .= "            </tr>\n";
  $mm1 .= "            <tr>\n";
  $mm1 .= "              <td width=\"20%\"></td>\n";
  $mm1 .= "              <td width=\"10%\"><button class=\"btn btn-default btn-tiny\"><i class=\"pe-language pe-fw\"></i> TH</button></td>\n";
  $mm1 .= "              <td width=\"70%\">$address_th</td>\n";
  $mm1 .= "            </tr>\n";
  $mm1 .= "            <tr>\n";
  $mm1 .= "              <td width=\"30%\" colspan=\"2\"><i class=\"pe-envelope pe-fw\"></i> Email</td>\n";
  $mm1 .= "              <td width=\"70%\"><a href=\"mailto:$cemail\">$cemail</a></td>\n";
  $mm1 .= "            </tr>\n";
  $mm1 .= "            <tr>\n";
  $mm1 .= "              <td width=\"30%\" colspan=\"2\"><i class=\"pe-globe pe-fw\"></i> Website</td>\n";
  $mm1 .= "              <td width=\"70%\"><a href=\"$website\">$website</a></td>\n";
  $mm1 .= "            </tr>\n";
  $mm1 .= "            <tr>\n";
  $mm1 .= "              <td width=\"30%\" colspan=\"2\"><i class=\"pe-phone pe-fw\"></i> Telephone</td>\n";
  $mm1 .= "              <td width=\"70%\">$telephone</td>\n";
  $mm1 .= "            </tr>\n";
  $mm1 .= "            <tr>\n";
  $mm1 .= "              <td width=\"30%\" colspan=\"2\"><i class=\"pe-fax pe-fw\"></i> Fax</td>\n";
  $mm1 .= "              <td width=\"70%\">$fax</td>\n";
  $mm1 .= "            </tr>\n";
  $mm1 .= "          </tbody>\n";
  $mm1 .= "        </table>\n";
  $mm1 .= "        <div align=\"right\"><a class=\"btn btn-warning btn-sm\" href=\"$me&c=$companyid\"><i class=\"pe-edit pe-lg pe-fw\"></i> Edit this company</a></div>\n";
  $mm1 .= "      </div>\n";
  $mm1 .= "      <div id=\"2-$companyid\" class=\"tab-pane fade\" style=\"padding:20px;\">\n";
  $allListing = array('companyid' => $companyid, 'companyname' => $name, 'companyfullname' => $cfullname);
  // Get user list
  $q2 = $db->prepare("SELECT * FROM j_users WHERE companyid = :companyid ORDER BY level DESC, status DESC");
  $q2->bindValue(':companyid', $companyid, PDO::PARAM_INT);
  $q2->execute();
  $mm1 .= "      <div class=\"pull-right\"><a class=\"btn btn-success btn-sm\" data-toggle=\"modal\" data-target=\"#addinguser\"><i class=\"pe-plus-circle pe-lg pe-fw\"></i> Add a new user</a></div>\n";
  if ($q2->rowCount() < 1) {
    $mm1 .= "        <h4>No users found</h4>\n";
    $mm1 .= "        <br>\n";
  } else {
    $mm1 .= "        <h4>A total of $nUsers users</h4>\n";
    $mm1 .= "        <table class=\"table table-condensed table-hover\">\n";
    $mm1 .= "          <thead>\n";
    $mm1 .= "            <tr class=\"bg-primary\">\n";
    $mm1 .= "              <th width=\"10%\">ID (edit)</th><th width=\"30%\">Name (email)</th><th width=\"15%\"><i class=\"pe-sort-amount-desc pe-fw orange\"></i> Role</th><th width=\"15%\">Registered</th><th width=\"15%\">Last seen</th><th width=\"15%\"><i class=\"pe-sort-amount-desc pe-fw orange\"></i> Status</th>\n";
    $mm1 .= "            </tr>\n";
    $mm1 .= "          </thead>\n";
    $mm1 .= "          <tbody>\n";
    $userlist = ""; $i = $i+1;
    while ($rr = $q2->fetchObject()) {
      $userid = $rr->id; // $userid += 0;
      $ufullname = $rr->fullname;
      $uemail = $rr->email;
      $role = role($rr->level, true);
      $status = status_user($rr->status, true, true);
      $created = ago($rr->created);
      $updated = ago($rr->updated);
      if ($rr->lastlogin) { $lastlogin = ago($rr->lastlogin); } else { $lastlogin = "Never login"; }
      if ($rr->lastlogin2) { $lastlogin2 = ago($rr->lastlogin2); } else { $lastlogin2 = "Never login"; }
      if ($rr->lastip) { $lastip = $rr->lastip; } else { $lastip = "Never login"; }
      if ($rr->lastip2) { $lastip2 = $rr->lastip2; } else { $lastip2 = "Never login"; }
      // userListing
      if ($userid == $d) { $userlist .= "        <option value=\"$userid\" selected>$name - $ufullname ($uemail)</option>\n"; }
      else { $userlist .= "        <option value=\"$userid\">$name - $ufullname ($uemail)</option>\n"; }
      $allListing['users'][] = array('username' => $ufullname, 'userid' => $userid, 'useremail' => $uemail);
      // Get user activities
      $q2A = $db->prepare("SELECT L.*, P.title, U.email AS uemail, U.fullname AS ufullname FROM j_users_logs L LEFT JOIN j_projects P ON P.id = L.surveyid LEFT JOIN j_users U ON U.id = L.userid WHERE L.userid = :userid AND L.critical > 0 ORDER BY L.recorded DESC LIMIT 30");
      $q2A->bindValue(':userid', $userid, PDO::PARAM_INT);
      $q2A->execute();
      if ($q2A->rowCount() < 1) {
        $lastactivities = "    <br>\n";
        $lastactivities .= "    <p>No recent activities found</p>\n";
        $lastactivities .= "    <br>\n";
      } else {
        $lastactivities = "    <br>\n";
        $lastactivities .= "    <p>Recent activities</p>\n";
        $lastactivities .= "    <table class=\"table table-condensed table-hover\" id=\"showme\" width=\"90%\">\n";
        $lastactivities .= "      <thead>\n";
        $lastactivities .= "        <tr class=\"bg-info\">\n";
        $lastactivities .= "          <th width=\"20%\"><small><i class=\"pe-clock-o pe-fw\"></i> Time</small></th>\n";
        $lastactivities .= "          <th width=\"60%\"><small><i class=\"pe-map-o pe-fw\"></i> Activity</small></th>\n";
        $lastactivities .= "          <th width=\"20%\"><small><i class=\"pe-cubes pe-fw\"></i> Project</small></th>\n";
        // $lastactivities .= "          <th width=\"13%\"><small><i class=\"pe-users pe-fw\"></i> User</small></th>\n";
        $lastactivities .= "        </tr>\n";
        $lastactivities .= "      </thead>\n";
        $lastactivities .= "      <tbody>\n";
        while ($sss = $q2A->fetchObject()) {
          $t = ago($sss->recorded);
          if ($sss->surveyid) { $s = "$sss->title <small>($sss->surveyid)</small>"; } else { $s = "-"; }
          // if ($sss->uemail) { $u = "$sss->ufullname <small>($sss->userid)</small>"; } else { $u = "-"; }
          $sss->data = iconize($sss->data);
          if ($sss->critical == 4) { $color = "#F0F8FF"; } else if ($sss->critical == 5) { $color = "#BDEDFF"; } else { $color = ""; }
          if ($color) { $td = "<td style=\"background:$color\"><small>"; } else { $td = "<td><small>"; }
          $lastactivities .= "        <tr>\n";
          $lastactivities .= "          $td$t</small></td>\n";
          $lastactivities .= "          $td$sss->data</small></td>\n";
          $lastactivities .= "          $td$s</small></td>\n";
          // $lastactivities .= "          $td$u</small></td>\n";
          $lastactivities .= "        </tr>\n";
        }
        $lastactivities .= "      </tbody>\n";
        $lastactivities .= "    </table>\n";
        $lastactivities .= "    <div align=\"right\"><a class=\"btn btn-warning btn-sm\" href=\"$me&c=$companyid&d=$userid\"><i class=\"pe-edit pe-lg pe-fw\"></i> Edit this user</a></div>\n";
        $lastactivities .= "    <br>\n";
      }
      $show = "<a id=\"rowshow$i\" href=\"\" onclick=\"return showRow(event, $i)\" style=\"\"> <i class=\"pe-chevron-down\"></i></a><a id=\"rowhide$i\" href=\"\" onclick=\"return hideRow(event, $i)\" style=\"display:none\"> <i class=\"pe-chevron-up\"></i></a>";
      $mm1 .= "            <tr id=\"firstrow$i\" >\n";
      $mm1 .= "              <td>$rr->id <a href=\"$me&c=$companyid&d=$rr->id\"><i class=\"pe-edit pull-right grey\"></i></a></td><td>$rr->fullname <span class=\"small\">(<a href=\"mailto:$rr->email\">$rr->email</a>)</span></td><td>$role</td><td>$created</td><td>$lastlogin2</td><td>$status <span class=\"pull-right\">$show</span></td>\n";
      $mm1 .= "            </tr>\n";
      $mm1 .= "            <tr id=\"row$i\" style=\"display:none\">\n";
      $mm1 .= "              <td colspan=\"6\" class=\"\">$lastactivities</td>\n";
      $mm1 .= "            </tr>\n";
      $i++;
    }
    $mm1 .= "          </tbody>\n";
    $mm1 .= "        </table>\n";
  }
  $mm1 .= "      </div>\n";
  $mm1 .= "      <div id=\"3-$companyid\" class=\"tab-pane fade\" style=\"padding:20px;\">\n";
  // Get project list
  $q3 = $db->prepare("SELECT P.*, P.id AS pid, U.id AS uid, U.fullname, U.email FROM j_projects P, j_users U WHERE P.userid = U.id AND P.companyid = :companyid ORDER BY P.status, P.updated DESC");
  $q3->bindValue(':companyid', $companyid, PDO::PARAM_INT);
  $q3->execute();
  $sep1 = ""; $sep2 = ""; $sep3 = "";
  $mm1 .= "      <div class=\"pull-right\"><a class=\"btn btn-success btn-sm\" data-toggle=\"modal\" data-target=\"#addingproject\"><i class=\"pe-plus-circle pe-lg pe-fw\"></i> Add a new project</a></div>\n";
  if ($q3->rowCount() < 1) {
    $mm1 .= "        <h4>No projects found</h4>\n";
    $mm1 .= "        <br>\n";
  } else {
    $mm1 .= "        <h4>A total of $nProjects projects</h4>\n";
    $projectlist = ""; $i = $i+1;
    while ($rrr = $q3->fetchObject()) {
      $pid = $rrr->pid;
      $ptitle = $rrr->title;
      $uid = $rrr->uid;
      $status = status_project($rrr->status, true, true);
      $status2 = status_project($rrr->status, false, false);
      $created = ago($rrr->created);
      $updated = ago($rrr->updated);
      // projectListing
      if ($pid == $p) { $projectlist .= "        <option value=\"$pid\" selected>$ptitle ($status2)</option>\n"; }
      else { $projectlist .= "        <option value=\"$pid\">$ptitle ($status2)</option>\n"; }
      $allListing['projects'][] = array('title' => $ptitle, 'surveyid' => $pid, 'owner' => $rrr->fullname, 'userid' => $uid, 'companyid' => $companyid);
      // Get project activities
      $q3A = $db->prepare("SELECT L.*, P.title, U.email AS uemail, U.fullname AS ufullname FROM j_users_logs L LEFT JOIN j_projects P ON P.id = L.surveyid LEFT JOIN j_users U ON U.id = L.userid WHERE L.surveyid = :surveyid AND L.critical > 0 ORDER BY L.id DESC LIMIT 30");
      $q3A->bindValue(':surveyid', $rrr->id, PDO::PARAM_INT);
      $q3A->execute();
      if ($q3A->rowCount() < 1) {
        $lastactivities = "    <br>\n";
        $lastactivities .= "    <p>No recent activities found</p>\n";
        $lastactivities .= "    <br>\n";
      } else {
        $lastactivities = "    <br>\n";
        $lastactivities .= "    <p>Recent activities</p>\n";
        $lastactivities .= "    <table class=\"table table-condensed table-hover\" id=\"showme\" width=\"90%\">\n";
        $lastactivities .= "      <thead>\n";
        $lastactivities .= "        <tr class=\"bg-info\">\n";
        $lastactivities .= "          <th width=\"20%\"><small><i class=\"pe-clock-o pe-fw\"></i> Time</small></th>\n";
        $lastactivities .= "          <th width=\"60%\"><small><i class=\"pe-map-o pe-fw\"></i> Activity</small></th>\n";
        // $lastactivities .= "          <th width=\"20%\"><small><i class=\"pe-cubes pe-fw\"></i> Project</small></th>\n";
        $lastactivities .= "          <th width=\"13%\"><small><i class=\"pe-users pe-fw\"></i> User</small></th>\n";
        $lastactivities .= "        </tr>\n";
        $lastactivities .= "      </thead>\n";
        $lastactivities .= "      <tbody>\n";
        while ($sss = $q3A->fetchObject()) {
          $t = ago($sss->recorded);
          // if ($sss->surveyid) { $s = "$sss->title <small>($sss->surveyid)</small>"; } else { $s = "-"; }
          if ($sss->uemail) { $u = "$sss->ufullname <small>($sss->userid)</small>"; } else { $u = "-"; }
          $sss->data = iconize($sss->data);
          if ($sss->critical == 4) { $color = "#F0F8FF"; } else if ($sss->critical == 5) { $color = "#BDEDFF"; } else { $color = ""; }
          if ($color) { $td = "<td style=\"background:$color\"><small>"; } else { $td = "<td><small>"; }
          $lastactivities .= "        <tr>\n";
          $lastactivities .= "          $td$t</small></td>\n";
          $lastactivities .= "          $td$sss->data</small></td>\n";
          // $lastactivities .= "          $td$s</small></td>\n";
          $lastactivities .= "          $td$u</small></td>\n";
          $lastactivities .= "        </tr>\n";
        }
        $lastactivities .= "      </tbody>\n";
        $lastactivities .= "    </table>\n";
        $lastactivities .= "    <div align=\"right\"><a class=\"btn btn-warning btn-sm\" href=\"$me&p=$rrr->id\"><i class=\"pe-edit pe-lg pe-fw\"></i> Edit this project</a></div>\n";
        $lastactivities .= "    <br>\n";
      }
      $show = "<a id=\"rowshow$i\" href=\"\" onclick=\"return showRow(event, $i)\" style=\"\"> <i class=\"pe-chevron-down\"></i></a><a id=\"rowhide$i\" href=\"\" onclick=\"return hideRow(event, $i)\" style=\"display:none\"> <i class=\"pe-chevron-up\"></i></a>";
      if ($rrr->status == 4) {
        $sep1 .= "            <tr id=\"firstrow$i\" class=\"lightgrey\">\n";
        $sep1 .= "              <td>$rrr->id <a href=\"$me&p=$rrr->id\"><i class=\"pe-edit pull-right grey\"></i></a></td><td>$ptitle</td><td>$rrr->fullname <span class=\"small\">(<a href=\"mailto:$rrr->email\">$rrr->email</a>)</span></td><td>$created</td><td>$updated</td><td>$status <span class=\"pull-right\">$show</span></td>\n";
        $sep1 .= "            </tr>\n";
        $sep1 .= "            <tr id=\"row$i\" style=\"display:none\">\n";
        $sep1 .= "              <td colspan=\"6\" class=\"\">$lastactivities</td>\n";
        $sep1 .= "            </tr>\n";
        $withinactives = 1;
      } else if ($rrr->status == 0) {
        $sep2 .= "            <tr id=\"firstrow$i\" class=\"lightgrey\">\n";
        $sep2 .= "              <td>$rrr->id <a href=\"$me&p=$rrr->id\"><i class=\"pe-edit pull-right grey\"></i></a></td><td>$ptitle</td><td>$rrr->fullname <span class=\"small\">(<a href=\"mailto:$rrr->email\">$rrr->email</a>)</span></td><td>$created</td><td>$updated</td><td>$status <span class=\"pull-right\">$show</span></td>\n";
        $sep2 .= "            </tr>\n";
        $sep2 .= "            <tr id=\"row$i\" style=\"display:none\">\n";
        $sep2 .= "              <td colspan=\"6\" class=\"\">$lastactivities</td>\n";
        $sep2 .= "            </tr>\n";
        $withinactives = 1;
      } else {
        $sep3 .= "            <tr id=\"firstrow$i\">\n";
        $sep3 .= "              <td>$rrr->id <a href=\"$me&p=$rrr->id\"><i class=\"pe-edit pull-right grey\"></i></a></td><td>$ptitle</td><td>$rrr->fullname <span class=\"small\">(<a href=\"mailto:$rrr->email\">$rrr->email</a>)</span></td><td>$created</td><td>$updated</td><td>$status <span class=\"pull-right\">$show</span></td>\n";
        $sep3 .= "            </tr>\n";
        $sep3 .= "            <tr id=\"row$i\" style=\"display:none\">\n";
        $sep3 .= "              <td colspan=\"6\" class=\"\">$lastactivities</td>\n";
        $sep3 .= "            </tr>\n";
      }
      $i++;
    }
    if ($nProjectActives == 0) { $mm1 .= "        <p>No active projects</p>\n"; }
    else {
      $mm1 .= "        <p>Listing <i class=\"pe-bell-o pe-fw\"></i> $nProjectActives active projects</p>\n";
      $mm1 .= "        <table class=\"table table-condensed table-hover\">\n";
      $mm1 .= "          <thead>\n";
      $mm1 .= "            <tr class=\"bg-primary\">\n";
      $mm1 .= "              <th width=\"10%\">ID (edit)</th><th width=\"16%\">Project</th><th width=\"30%\">Owner</th><th width=\"13%\">Created</th><th width=\"13%\"><i class=\"pe-sort-amount-desc pe-fw orange\"></i> Last updated</th><th width=\"18%\"><i class=\"pe-sort-amount-asc pe-fw orange\"></i> Status</th>\n";
      $mm1 .= "            </tr>\n";
      $mm1 .= "          </thead>\n";
      $mm1 .= "          <tbody>\n";
      $mm1 .= $sep3;
      $mm1 .= "          </tbody>\n";
      $mm1 .= "        </table>\n";
    }
    if ($nProjectInactives == 0) { $mm1 .= "        <p>No inactive projects</p>\n"; }
    else {
      $mm1 .= "        <p>Listing <i class=\"pe-bell-slash-o pe-fw\"></i> $nProjectInactives inactive projects</p>\n";
      $mm1 .= "        <table class=\"table table-condensed table-hover\">\n";
      $mm1 .= "          <thead>\n";
      $mm1 .= "            <tr class=\"bg-info\">\n";
      $mm1 .= "              <th width=\"10%\">ID (edit)</th><th width=\"16%\">Project</th><th width=\"30%\">Owner</th><th width=\"13%\">Created</th><th width=\"13%\"><i class=\"pe-sort-amount-desc pe-fw orange\"></i> Last updated</th><th width=\"18%\"><i class=\"pe-sort-amount-asc pe-fw orange\"></i> Status</th>\n";
      $mm1 .= "            </tr>\n";
      $mm1 .= "          </thead>\n";
      $mm1 .= "          <tbody>\n";
      $mm1 .= $sep1.$sep2;
      $mm1 .= "          </tbody>\n";
      $mm1 .= "        </table>\n";
    }
  }
  $mm1 .= "      </div>\n";
  $mm1 .= "      <div id=\"4-$companyid\" class=\"tab-pane fade\" style=\"padding:20px;\">\n";
  // Get message list
  $q4 = $db->prepare("SELECT B.*, U.fullname, U.email FROM j_board B, j_users U WHERE B.userid = U.id AND B.companyid = :companyid ORDER BY B.created DESC");
  $q4->bindValue(':companyid', $companyid, PDO::PARAM_INT);
  $q4->execute();
  $mm1 .= "      <div class=\"pull-right\"><a class=\"btn btn-success btn-sm\" data-toggle=\"modal\" data-target=\"#addingmessage\"><i class=\"pe-plus-circle pe-lg pe-fw\"></i> Post a new message</a></div>\n";
  if ($q4->rowCount() < 1) {
    $mm1 .= "        <h4>No messages found</h4>\n";
    $mm1 .= "        <br>\n";
  } else {
    $mm1 .= "        <h4>A total of $nBoards messages</h4>\n";
    $mm1 .= "        <table class=\"table table-condensed table-hover\">\n";
    $mm1 .= "          <thead>\n";
    $mm1 .= "            <tr class=\"bg-primary\">\n";
    $mm1 .= "              <th width=\"10%\">ID (delete)</th><th width=\"45%\">Topic</th><th width=\"30%\">Posted by</th><th width=\"15%\"><i class=\"pe-sort-amount-desc pe-fw orange\"></i> Date</th>\n";
    $mm1 .= "            </tr>\n";
    $mm1 .= "          </thead>\n";
    $mm1 .= "          <tbody>\n";
    while ($rrrr = $q4->fetchObject()) {
      $created = ago($rrrr->created);
      $mm1 .= "            <tr>\n";
      if ($rrrr->status == 0) { $mm1 .= "              <td><del>$rrrr->id</del></td><td><del>$rrrr->head</del></td><td><del>$rrrr->fullname <span class=\"small\">(<a href=\"mailto:$rrrr->email\">$rrrr->email</a>)</span></del></td><td><del>$created</del></td>\n"; }
      else { $mm1 .= "              <td>$rrrr->id <a href=\"$me&post=$rrrr->id&delete=✓\"><i class=\"pe-trash pull-right red\"></i></a></td><td>$rrrr->head</td><td>$rrrr->fullname <span class=\"small\">(<a href=\"mailto:$rrrr->email\">$rrrr->email</a>)</span></td><td>$created</td>\n"; }
      $mm1 .= "            </tr>\n";
    }
    $mm1 .= "          </tbody>\n";
    $mm1 .= "        </table>\n";
  }
  $mm1 .= "      </div>\n";
  $mm1 .= "    </div>\n";
  $mm1 .= "  </div>\n";
  $allListingNew[] = $allListing;
}
$allListing = json_encode($allListingNew, JSON_PRETTY_PRINT);
// print_r($allListing);
$mm1 .= "</div>\n";

$mm1 .= "<div class=\"modal fade\" id=\"addingcompany\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"addingcompany\">\n";
$mm1 .= "  <div class=\"modal-dialog\" role=\"document\">\n";
$mm1 .= "    <div class=\"modal-content\">\n";
$mm1 .= "      <form class=\"\" action=\"$me\" method=\"post\">\n";
$mm1 .= "        <div class=\"modal-header\">\n";
$mm1 .= "          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n";
$mm1 .= "          <h4 class=\"modal-title\">Adding a new company</h4>\n";
$mm1 .= "        </div>\n";
$mm1 .= "        <div class=\"modal-body\">\n";
$mm1 .= "          <p>Below are the minimum requirements for adding a new company to the database. This function will add a new company with one user (Manager level) and will post a welcome message to the board.</p>\n";
$mm1 .= "          <div class=\"input-group\"><span class=\"input-group-addon\"><i class=\"pe-building pe-fw\"></i> Company:</span><input type=\"text\" class=\"form-control\" placeholder=\"Only one word which can be a short name or an initial\" name=\"company\"></div><br>\n";
$mm1 .= "          <div class=\"input-group\"><span class=\"input-group-addon\"><i class=\"pe-user pe-fw\"></i> User name:</span><input type=\"text\" class=\"form-control\" placeholder=\"Name of the main contact person for this company\" name=\"user\"></div><br>\n";
$mm1 .= "          <div class=\"input-group\"><span class=\"input-group-addon\"><i class=\"pe-envelope pe-fw\"></i> User email:</span><input type=\"email\" class=\"form-control\" placeholder=\"Email of the main contact person for this company\" name=\"email\"></div><br>\n";
$mm1 .= "          <p class=\"pull-right small red\">* All of these fields are required.</p><br>\n";
$mm1 .= "        </div>\n";
$mm1 .= "        <div class=\"modal-footer\">\n";
$mm1 .= "          <button type=\"submit\" class=\"btn btn-warning\" name=\"addingcompany\" value=\"1\">Add <i class=\"pe-check-circle-o\"></i></button>\n";
$mm1 .= "          <button type=\"reset\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel <i class=\"pe-times-circle-o\"></i></button>\n";
$mm1 .= "        </div>\n";
$mm1 .= "      </form>\n";
$mm1 .= "    </div>\n";
$mm1 .= "  </div>\n";
$mm1 .= "</div>\n";
$mm1 .= "<div class=\"modal fade\" id=\"addinguser\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"addinguser\">\n";
$mm1 .= "  <div class=\"modal-dialog\" role=\"document\">\n";
$mm1 .= "    <div class=\"modal-content\">\n";
$mm1 .= "      <form class=\"\" action=\"$me\" method=\"post\">\n";
$mm1 .= "        <div class=\"modal-header\">\n";
$mm1 .= "          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n";
$mm1 .= "          <h4 class=\"modal-title\">Adding a new user</h4>\n";
$mm1 .= "        </div>\n";
$mm1 .= "        <div class=\"modal-body\">\n";
$mm1 .= "          <p>Below are the minimum requirements for adding a new company to the database. This function will add a new company with one user (Manager level) and will post a welcome message to the board.</p>\n";
$mm1 .= "          <div class=\"input-group\"><span class=\"input-group-addon\"><i class=\"pe-building pe-fw\"></i> Company:</span><input type=\"text\" class=\"form-control\" placeholder=\"Only one word which can be a short name or an initial\" name=\"company\"></div><br>\n";
$mm1 .= "          <div class=\"input-group\"><span class=\"input-group-addon\"><i class=\"pe-user pe-fw\"></i> User name:</span><input type=\"text\" class=\"form-control\" placeholder=\"Name of the main contact person for this company\" name=\"user\"></div><br>\n";
$mm1 .= "          <div class=\"input-group\"><span class=\"input-group-addon\"><i class=\"pe-envelope pe-fw\"></i> User email:</span><input type=\"email\" class=\"form-control\" placeholder=\"Email of the main contact person for this company\" name=\"email\"></div><br>\n";
$mm1 .= "          <p class=\"pull-right small red\">* All of these fields are required.</p><br>\n";
$mm1 .= "        </div>\n";
$mm1 .= "        <div class=\"modal-footer\">\n";
$mm1 .= "          <button type=\"submit\" class=\"btn btn-warning\" name=\"addinguser\" value=\"1\">Add <i class=\"pe-check-circle-o\"></i></button>\n";
$mm1 .= "          <button type=\"reset\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel <i class=\"pe-times-circle-o\"></i></button>\n";
$mm1 .= "        </div>\n";
$mm1 .= "      </form>\n";
$mm1 .= "    </div>\n";
$mm1 .= "  </div>\n";
$mm1 .= "</div>\n";
$mm1 .= "<div class=\"modal fade\" id=\"addingproject\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"addingproject\">\n";
$mm1 .= "  <div class=\"modal-dialog\" role=\"document\">\n";
$mm1 .= "    <div class=\"modal-content\">\n";
$mm1 .= "      <form class=\"\" action=\"$me\" method=\"post\">\n";
$mm1 .= "        <div class=\"modal-header\">\n";
$mm1 .= "          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n";
$mm1 .= "          <h4 class=\"modal-title\">Adding a new project</h4>\n";
$mm1 .= "        </div>\n";
$mm1 .= "        <div class=\"modal-body\">\n";
$mm1 .= "          <p>Below are the minimum requirements for adding a new company to the database. This function will add a new company with one user (Manager level) and will post a welcome message to the board.</p>\n";
$mm1 .= "          <div class=\"input-group\"><span class=\"input-group-addon\"><i class=\"pe-building pe-fw\"></i> Company:</span><input type=\"text\" class=\"form-control\" placeholder=\"Only one word which can be a short name or an initial\" name=\"company\"></div><br>\n";
$mm1 .= "          <div class=\"input-group\"><span class=\"input-group-addon\"><i class=\"pe-user pe-fw\"></i> User name:</span><input type=\"text\" class=\"form-control\" placeholder=\"Name of the main contact person for this company\" name=\"user\"></div><br>\n";
$mm1 .= "          <div class=\"input-group\"><span class=\"input-group-addon\"><i class=\"pe-envelope pe-fw\"></i> User email:</span><input type=\"email\" class=\"form-control\" placeholder=\"Email of the main contact person for this company\" name=\"email\"></div><br>\n";
$mm1 .= "          <p class=\"pull-right small red\">* All of these fields are required.</p><br>\n";
$mm1 .= "        </div>\n";
$mm1 .= "        <div class=\"modal-footer\">\n";
$mm1 .= "          <button type=\"submit\" class=\"btn btn-warning\" name=\"addingproject\" value=\"1\">Add <i class=\"pe-check-circle-o\"></i></button>\n";
$mm1 .= "          <button type=\"reset\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel <i class=\"pe-times-circle-o\"></i></button>\n";
$mm1 .= "        </div>\n";
$mm1 .= "      </form>\n";
$mm1 .= "    </div>\n";
$mm1 .= "  </div>\n";
$mm1 .= "</div>\n";
$mm1 .= "<div class=\"modal fade\" id=\"addingmessage\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"addingmessage\">\n";
$mm1 .= "  <div class=\"modal-dialog\" role=\"document\">\n";
$mm1 .= "    <div class=\"modal-content\">\n";
$mm1 .= "      <form class=\"\" action=\"$me\" method=\"post\">\n";
$mm1 .= "        <div class=\"modal-header\">\n";
$mm1 .= "          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n";
$mm1 .= "          <h4 class=\"modal-title\">Adding a new message</h4>\n";
$mm1 .= "        </div>\n";
$mm1 .= "        <div class=\"modal-body\">\n";
$mm1 .= "          <p>Below are the minimum requirements for adding a new company to the database. This function will add a new company with one user (Manager level) and will post a welcome message to the board.</p>\n";
$mm1 .= "          <div class=\"input-group\"><span class=\"input-group-addon\"><i class=\"pe-building pe-fw\"></i> Company:</span><input type=\"text\" class=\"form-control\" placeholder=\"Only one word which can be a short name or an initial\" name=\"company\"></div><br>\n";
$mm1 .= "          <div class=\"input-group\"><span class=\"input-group-addon\"><i class=\"pe-user pe-fw\"></i> User name:</span><input type=\"text\" class=\"form-control\" placeholder=\"Name of the main contact person for this company\" name=\"user\"></div><br>\n";
$mm1 .= "          <div class=\"input-group\"><span class=\"input-group-addon\"><i class=\"pe-envelope pe-fw\"></i> User email:</span><input type=\"email\" class=\"form-control\" placeholder=\"Email of the main contact person for this company\" name=\"email\"></div><br>\n";
$mm1 .= "          <p class=\"pull-right small red\">* All of these fields are required.</p><br>\n";
$mm1 .= "        </div>\n";
$mm1 .= "        <div class=\"modal-footer\">\n";
$mm1 .= "          <button type=\"submit\" class=\"btn btn-warning\" name=\"addingmessage\" value=\"1\">Add <i class=\"pe-check-circle-o\"></i></button>\n";
$mm1 .= "          <button type=\"reset\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel <i class=\"pe-times-circle-o\"></i></button>\n";
$mm1 .= "        </div>\n";
$mm1 .= "      </form>\n";
$mm1 .= "    </div>\n";
$mm1 .= "  </div>\n";
$mm1 .= "</div>\n";

$mm1 .= "<script type=\"text/javascript\">\n";
$mm1 .= "  function showRow(e, rowIndex) { showhideRow(rowIndex, true); e.preventDefault(); return false; }\n";
$mm1 .= "  function hideRow(e, rowIndex) { showhideRow(rowIndex, false); e.preventDefault(); return false; }\n";
$mm1 .= "  function showhideRow(rowIndex, show) {\n";
// $mm1 .= "    document.getElementById(\"firstrow\" + rowIndex).style.backgroundColor = show ? \"#337ab7\" : \"\";\n";
// $mm1 .= "    document.getElementById(\"firstrow\" + rowIndex).style.color = show ? \"#fff\" : \"\";\n";
$mm1 .= "    document.getElementById(\"firstrow\" + rowIndex).style.border = show ? \"2px solid black\" : \"\";\n";
$mm1 .= "    document.getElementById(\"row\" + rowIndex).style.display = show ? \"\" : \"none\";\n";
$mm1 .= "    document.getElementById(\"rowhide\" + rowIndex).style.display = show ? \"\" : \"none\";\n";
$mm1 .= "    document.getElementById(\"rowshow\" + rowIndex).style.display =  show ? \"none\" : \"\";\n";
$mm1 .= "  }\n";
$mm1 .= "</script>\n";

// -- functions

if ($c) {
  $q6A = $db->prepare("SELECT * FROM j_companies WHERE id = :companyid");
  $q6A->bindValue(':companyid', $c, PDO::PARAM_INT);
  $q6A->execute();
  while ($row = $q6A->fetchObject()) {
    $name = $row->company;
    $cfullname = $row->fullname;
    $cfullname_th = $row->fullname_th;
    $address = $row->address;
    $address_th = $row->address_th;
    $description = $row->description;
    $description_th = $row->description_th;
    $logo = $row->logo;
    $website = $row->website;
    $cemail = $row->email;
    $telephone = $row->telephone;
    $fax = $row->fax;
    $ccreated = ago($row->created);
    $cupdated = ago($row->updated);
  }
}
if ($d) {
  $q6B = $db->prepare("SELECT U.*, C.fullname AS cfullname FROM j_users U, j_companies C WHERE U.companyid = C.id AND U.id = :userid");
  $q6B->bindValue(':userid', $d, PDO::PARAM_INT);
  $q6B->execute();
  while ($row = $q6B->fetchObject()) {
    $id = $row->id;
    $ufullname = $row->fullname;
    $uemail = $row->email;
    $umobile = $row->mobile;
    $ucompanyid = $row->companyid;
    $cfullname = $row->cfullname;
    $urole = role($row->level, true, false);
    $ulevel = $row->level;
    $uustatus = status_user($row->status, true, false);
    $ustatus = $row->status;
    $uavatar = $row->avatar;
    if ($row->lastlogin) { $lastlogin = ago($row->lastlogin); } else { $lastlogin = "Never login"; }
    if ($row->lastlogin2) { $lastlogin2 = ago($row->lastlogin2); } else { $lastlogin2 = "Never login"; }
    if ($row->lastip) { $lastip = $row->lastip; } else { $lastip = "Never login"; }
    if ($row->lastip2) { $lastip2 = $row->lastip2; } else { $lastip2 = "Never login"; }
    $ucreated = ago($row->created);
    $uupdated = ago($row->updated);
  }
}
if ($p) {
  $q6C = $db->prepare("SELECT P.id AS pid, P.title, P.description AS pdescription, P.userid AS puserid, P.companyid AS pcompanyid, P.thankyou, P.status AS pstatus, P.created AS pcreated, P.updated AS pupdated, P.private, P.points, P.points_bonus, U.fullname, U.email FROM j_projects P, j_users U WHERE P.userid = U.id AND P.id = :pid");
  $q6C->bindValue(':pid', $p, PDO::PARAM_INT);
  $q6C->execute();
  while ($row = $q6C->fetchObject()) {
    //$psurveyid = $row->pid;
    $ptitle = $row->title;
    $pdescription = $row->pdescription;
    $puserid = $row->puserid;
    $pcompanyid = $row->pcompanyid;
    $pthankyou = $row->thankyou;
    $powner = $row->fullname;
    $pemail = $row->email;
    $pprivate = $row->private;
    $pstatus = $row->pstatus;
    $ppoints = $row->points;
    $ppoints_bonus = $row->points_bonus;
    $pcreated = ago($row->pcreated);
    $pupdated = ago($row->pupdated);
  }
}
if ($_POST['addingcompany'] == 1) {
  if (($_POST['company']) || ($_POST['user']) || ($_POST['email'])) {
    // Add a new company
    $q5A = $db->prepare("INSERT INTO j_companies (company) VALUES (:company)");
    $q5A->bindValue(':company', $_POST['company'], PDO::PARAM_STR);
    $q5A->execute();
    $id = $db->lastInsertId();
    // Add a new user in Manager level
    $q5B = $db->prepare("INSERT INTO j_users (fullname, email, password, level) VALUES (:fullname, :email, :password, :level)");
    $q5B->bindValue(':fullname', $_POST['user'], PDO::PARAM_STR);
    $q5B->bindValue(':email', $_POST['email'], PDO::PARAM_STR);
    $q5B->bindValue(':password', 'xxx', PDO::PARAM_STR);
    $q5B->bindValue(':level', '6', PDO::PARAM_INT);
    $q5B->execute();
    // Post a new welcome message on the board
    $q5C = $db->prepare("INSERT INTO j_board (head, body, userid, companyid) VALUES (:head, :body, :userid, :companyid)");
    $q5C->bindValue(':head', 'Welcome to your message board', PDO::PARAM_STR);
    $q5C->bindValue(':body', $_POST['body'], PDO::PARAM_STR);
    $q5C->bindValue(':userid', '000002', PDO::PARAM_INT);
    $q5C->bindValue(':companyid', $id, PDO::PARAM_INT);
    $q5C->execute();
    // Add some demo projects
    // copy results
    // 1. copy j_results to j_temp with structure and all data
    // 2. remove all excetp surveyid = 8 --> DELETE FROM `j_temp` WHERE `surveyid` <> 8;
    // 3. update to a new surveyid --> UPDATE `j_temp` SET surveyid = 19;
    // 4. insert back to j_results --> INSERT INTO `j_results` (`rd`, `email`, `ip`, `surveyid`, `submitted`, `data`, `status`) SELECT `rd`, `email`, `ip`, `surveyid`, `submitted`, `data`, `status` FROM `j_temp`
    // replace results
    // UPDATE `j_results` SET `data` = REPLACE(`data`, '8_', '19_') WHERE `surveyid` = 19
  }
  $redirect = $me."&m=0";
  header("location: $redirect");
  exit;
}
if (isset($_POST['uploadsubmit'])) {
  $uploadfile = $_FILES["uploadfile"]["tmp_name"];
  $folder = "assets/img/tmp/";
  move_uploaded_file($_FILES["uploadfile"]["tmp_name"], $folder.$_FILES["uploadfile"]["name"]);
  echo '<img id="uploadlogo" src="'.$folder."".$_FILES["uploadfile"]["name"].'">';
  exit;
}
if ($_POST['savecompanylogo'] == 1) {
  $fullsource = parse_url($_POST['filetosave'], PHP_URL_PATH);
  $source = str_replace("/admin/", "", $fullsource);
  $ext = substr($source, -3);
  $today = date("Ymd");
  $random = generateRandomString();
  $target = "assets/img/c/".$_POST['companyid']."_".$today."_".$random.".".$ext;
  $R = new resize($source);
  $R->resizeImage(135, 135, 'auto');
  $R->saveImage($target, 80);
  unlink($source);
  $q7 = $db->prepare("UPDATE j_companies SET logo = :logo WHERE id = :id");
  $q7->bindValue(':logo', $target, PDO::PARAM_STR);
  $q7->bindValue(':id', $_POST['c'], PDO::PARAM_INT);
  $q7->execute();
  $redirect = $me."&m=1&c=".$c;
  header("location: $redirect");
  exit;
}
if ($_POST['savecompanyinfo'] == 1) {
  if ((empty($_POST['cfullname'])) || (empty($_POST['cfullname_th'])) || (empty($_POST['description'])) || (empty($_POST['description_th'])) || (empty($_POST['address'])) || (empty($_POST['website']))) {
    $redirect = $me."&m=3&c=".$c;
    header("location: $redirect");
    exit;
  } else {
    $add = ""; $move = 0;
    if ($_POST['cfullname'] != $cfullname) { $add .= "fullname = :fullname, "; $move = 1; }
    if ($_POST['cfullname_th'] != $cfullname_th) { $add .= "fullname_th = :fullname_th, "; $move = 1; }
    if ($_POST['description'] != $description) { $add .= "description = :description, "; $move = 1; }
    if ($_POST['description_th'] != $description_th) { $add .= "description_th = :description_th, "; $move = 1; }
    if ($_POST['address'] != $address) { $add .= "address = :address, "; $move = 1; }
    if ($_POST['address_th'] != $address_th) { $add .= "address_th = :address_th, "; $move = 1; }
    if ($_POST['website'] != $website) { $add .= "website = :website, "; $move = 1; }
    if ($_POST['cemail'] != $cemail) { $add .= "email = :email, "; $move = 1; }
    if ($_POST['telephone'] != $telephone) { $add .= "telephone = :telephone, "; $move = 1; }
    if ($_POST['fax'] != $fax) { $add .= "fax = :fax, "; $move = 1; }
    $add = substr_replace($add, '', -2);
    if ($move == 0) {
      $redirect = $me."&m=4&c=".$c;
      header("location: $redirect");
      exit;
    } else {
      $q8 = $db->prepare("UPDATE j_companies SET ".$add." WHERE id = :companyid");
      if ($_POST['cfullname'] != $cfullname) { $q8->bindValue(':fullname', $_POST['cfullname'], PDO::PARAM_STR); }
      if ($_POST['cfullname_th'] != $cfullname_th) { $q8->bindValue(':fullname_th', $_POST['cfullname_th'], PDO::PARAM_STR); }
      if ($_POST['description'] != $description) { $q8->bindValue(':description', $_POST['description'], PDO::PARAM_STR); }
      if ($_POST['description_th'] != $description_th) { $q8->bindValue(':description_th', $_POST['description_th'], PDO::PARAM_STR); }
      if ($_POST['address'] != $address) { $q8->bindValue(':address', $_POST['address'], PDO::PARAM_STR); }
      if ($_POST['address_th'] != $address_th) { $q8->bindValue(':address_th', $_POST['address_th'], PDO::PARAM_STR); }
      if ($_POST['website'] != $website) { $q8->bindValue(':website', $_POST['website'], PDO::PARAM_STR); }
      if ($_POST['cemail'] != $cemail) { $q8->bindValue(':email', $_POST['cemail'], PDO::PARAM_STR); }
      if ($_POST['telephone'] != $telephone) { $q8->bindValue(':telephone', $_POST['telephone'], PDO::PARAM_STR); }
      if ($_POST['fax'] != $fax) { $q8->bindValue(':fax', $_POST['fax'], PDO::PARAM_STR); }
      $q8->bindValue(':companyid', $_POST['companyid'], PDO::PARAM_INT);
      $q8->execute();
      $redirect = $me."&m=2&c=".$c;
      header("location: $redirect");
      exit;
    }
  }
}
if ($_GET['removelogo'] == "✓") {
  $q9 = $db->prepare("UPDATE j_companies SET logo = NULL WHERE id = :companyid");
  $q9->bindValue(':companyid', $_GET['c'], PDO::PARAM_INT);
  $q9->execute();
  $filetoremove = $_SERVER['DOCUMENT_ROOT'].'/admin/'.$logo;
  unlink($filetoremove);
  $redirect = $me."&m=5&c=".$c;
  header("location: $redirect");
  exit;
}
if ($_POST['saveuserinfo'] == 1) {
  if ((empty($_POST['ufullname'])) || (empty($_POST['uemail']))) {
    $redirect = $me."&m=3&c=".$_POST['c']."&d=".$d;
    header("location: $redirect");
    exit;
  } else {
    $add = ""; $move = 0;
    if ($_POST['ufullname'] != $ufullname) { $add .= "fullname = :fullname, "; $move = 1; }
    if ($_POST['uemail'] != $uemail) { $add .= "email = :email, "; $move = 1; }
    if ($_POST['umobile'] != $umobile) { $add .= "mobile = :mobile, "; $move = 1; }
    if ($_POST['ulevel'] != $ulevel) { $add .= "level = :level, "; $move = 1; }
    if ($_POST['ustatus'] != $ustatus) { $add .= "status = :status, "; $move = 1; }
    if ($_POST['ucompanyid'] != $ucompanyid) { $add .= "companyid = :companyid, "; $move = 1; $changecompany = 1; }
    if ($_POST['uavatar'] != $uavatar) { $add .= "avatar = :avatar, "; $move = 1; }
    $add = substr_replace($add, '', -2);
    if ($move == 0) {
      $redirect = $me."&m=4&c=".$_POST['c']."&d=".$d;
      header("location: $redirect");
      exit;
    } else {
      $q10 = $db->prepare("UPDATE j_users SET ".$add." WHERE id = :userid");
      if ($_POST['ufullname'] != $ufullname) { $q10->bindValue(':fullname', $_POST['ufullname'], PDO::PARAM_STR); }
      if ($_POST['uemail'] != $uemail) { $q10->bindValue(':email', $_POST['uemail'], PDO::PARAM_STR); }
      if ($_POST['umobile'] != $umobile) { $q10->bindValue(':mobile', $_POST['umobile'], PDO::PARAM_STR); }
      if ($_POST['ulevel'] != $ulevel) { $q10->bindValue(':level', $_POST['ulevel'], PDO::PARAM_INT); }
      if ($_POST['ustatus'] != $ustatus) { $q10->bindValue(':status', $_POST['ustatus'], PDO::PARAM_INT); }
      if ($_POST['ucompanyid'] != $ucompanyid) { $q10->bindValue(':companyid', $_POST['ucompanyid'], PDO::PARAM_INT); }
      if ($_POST['uavatar'] != $uavatar) { $q10->bindValue(':avatar', $_POST['uavatar'], PDO::PARAM_INT); }
      $q10->bindValue(':userid', $_POST['userid'], PDO::PARAM_INT);
      $q10->execute();
      if ($changecompany == 1) { $redirect = $me."&m=7&c=".$_POST['ucompanyid']."&d=".$d; }
      else { $redirect = $me."&m=6&c=".$_POST['c']."&d=".$d; }
      header("location: $redirect");
      exit;
    }
  }
}
if ($_POST['saveprojectinfo'] == 1) {
  if ((empty($_POST['surveyid'])) || (empty($_POST['ptitle']))) {
    $redirect = $me."&m=3&c=".$_POST['c']."&d=".$_POST['d']."&p=".$p;
    header("location: $redirect");
    exit;
  } else {
    $add = ""; $move = 0;
    if ($_POST['ptitle'] != $ptitle) { $add .= "title = :title, "; $move = 1; }
    if ($_POST['pprivate'] != $pprivate) { $add .= "private = :private, "; $move = 1; }
    if ($_POST['pstatus'] != $pstatus) { $add .= "status = :status, "; $move = 1; }
    if ($_POST['pdescription'] != $pdescription) { $add .= "description = :description, "; $move = 1; }
    if ($_POST['pthankyou'] != $pthankyou) { $add .= "thankyou = :thankyou, "; $move = 1; }
    if ($_POST['ppoints'] != $ppoints) { $add .= "points = :points, "; $move = 1; }
    if ($_POST['ppoints_bonus'] != $ppoints_bonus) { $add .= "points_bonus = :points_bonus, "; $move = 1; }
    if ($_POST['pcompanyid'] != $pcompanyid) { $add .= "companyid = :companyid, "; $move = 1; }
    if ($_POST['puserid'] != $puserid) { $add .= "userid = :userid, "; $move = 1; }
    $add = substr_replace($add, '', -2);
    if ($move == 0) {
      $redirect = $me."&m=4&c=".$_POST['c']."&d=".$_POST['d']."&p=".$p;
      header("location: $redirect");
      exit;
    } else {
      $q11 = $db->prepare("UPDATE j_projects SET ".$add." WHERE id = :id");
      if ($_POST['ptitle'] != $ptitle) { $q11->bindValue(':title', $_POST['ptitle'], PDO::PARAM_STR); }
      if ($_POST['pprivate'] != $pprivate) { $q11->bindValue(':private', $_POST['pprivate'], PDO::PARAM_INT); }
      if ($_POST['pstatus'] != $pstatus) { $q11->bindValue(':status', $_POST['pstatus'], PDO::PARAM_INT); }
      if ($_POST['pdescription'] != $pdescription) { $q11->bindValue(':description', $_POST['pdescription'], PDO::PARAM_STR); }
      if ($_POST['pthankyou'] != $pthankyou) { $q11->bindValue(':thankyou', $_POST['pthankyou'], PDO::PARAM_STR); }
      if ($_POST['ppoints'] != $ppoints) { $q11->bindValue(':points', $_POST['ppoints'], PDO::PARAM_INT); }
      if ($_POST['ppoints_bonus'] != $ppoints_bonus) { $q11->bindValue(':points_bonus', $_POST['ppoints_bonus'], PDO::PARAM_INT); }
      if ($_POST['pcompanyid'] != $pcompanyid) { $q11->bindValue(':companyid', $_POST['pcompanyid'], PDO::PARAM_INT); }
      if ($_POST['puserid'] != $puserid) { $q11->bindValue(':userid', $_POST['puserid'], PDO::PARAM_INT); }
      $q11->bindValue(':id', $_POST['surveyid'], PDO::PARAM_INT);
      $q11->execute();
      $redirect = $me."&m=8&c=".$_POST['c']."&d=".$_POST['d']."&p=".$p;
      header("location: $redirect");
      exit;
    }
  }
}

$title = "Administration";
pageHeader($title);
echo "<h2>$title</h2>\n";
echo "<p class=\"introtext\">This is an administration page which contains all necessary utility tools which are used for managing clients effectively.</p>\n";
echo "<hr>\n";
echo "<h3>Client at a glance</h3>\n";
echo "<p>Currently we have a total of $countcompany companies comprising of $allUsers users, $allProjects projects, and $allBoards messages.</p>\n";

if ($_GET['m'] == "0") { $message = mksuccess("A new company has been created successfully."); echo "<p>$message</p>\n"; }
else { echo "<p></p>\n"; }

echo "<div align=\"right\"><a class=\"btn btn-success btn-sm\" data-toggle=\"modal\" data-target=\"#addingcompany\"><i class=\"pe-plus-circle pe-lg pe-fw\"></i> Add a new company</a></div>\n";
echo "<br>\n";
echo $mm1;

$mm2 .= "<hr>\n";
if ($_GET['p']) { $mm2 .= "<h4>Editing Project $ptitle</h4>\n"; }
else if ($_GET['d']) { $mm2 .= "<h4>Editing $ufullname <small>($cfullname)</small></h4>\n"; }
else if ($_GET['c']) { $mm2 .= "<h4>Editing $cfullname</h4>\n"; }
else { $mm2 .= "<h4>Editing something</h4>\n"; }
$mm2 .= "<div class=\"row bg-warning small\" style=\"margin:auto; width:95%; padding-top:10px; padding-bottom:10px; border: 1px dotted grey; border-radius:10px\">\n";
$mm2 .= "  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\"><p><strong>Select the element to edit</strong></p></div>\n";
$mm2 .= "  <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">Select a company or a user:</div>\n";
$mm2 .= "  <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">\n";
$mm2 .= "    <form method=\"get\" action=\"$me\">\n";
$mm2 .= "      <input type=\"hidden\" name=\"w\" value=\"admin\">\n";
$mm2 .= "      <select class=\"form-control input-sm\" name=\"c\" onchange=\"this.form.submit()\" id=\"selectcompany\" onChange=\"changecompany(this.value);\">\n";
$mm2 .= "        <option value=\"\">-- select a company from this list --</option>\n";
$mm2 .= $companylist;
$mm2 .= "      </select>\n";
$mm2 .= "    </form>\n";
$mm2 .= "  </div>\n";
$mm2 .= "  <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">\n";
$mm2 .= "    <form method=\"get\" action=\"$me\">\n";
$mm2 .= "      <input type=\"hidden\" name=\"w\" value=\"admin\">\n";
$mm2 .= "      <input type=\"hidden\" name=\"c\" value=\"$c\">\n";
$mm2 .= "      <select class=\"form-control input-sm\" name=\"d\" id=\"selectuser\" onchange=\"this.form.submit()\">\n";
if (($_GET['c']) || ($_GET['d'])) {
  $mm2 .= "        <option value=\"\">-- select a user from this list --</option>\n";
  $ulisting = json_decode($allListing, true);
  foreach ($ulisting as $uuu) {
    if ($uuu['companyid'] == $_GET['c']) {
      foreach ($uuu['users'] as $u2) {
        if ($u2['userid'] == $_GET['d']) { $mm2 .= "        <option value=\"".$u2['userid']."\" selected>".$u2['username']." (".$u2['useremail'].")</option>\n"; }
        else { $mm2 .= "        <option value=\"".$u2['userid']."\">".$u2['username']." (".$u2['useremail'].")</option>\n"; }
      }
    }
  }
}
else { $mm2 .= "        <option value=\"\" disabled selected>[[ Select a company first ]]</option>\n"; }
$mm2 .= "      </select>\n";
$mm2 .= "    </form>\n";
$mm2 .= "  </div>\n";
$mm2 .= "  <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\" style=\"margin-top: 10px\">Or select a project:</div>\n";
$mm2 .= "  <div class=\"col-xs-8 col-sm-8 col-md-8 col-lg-8\" style=\"margin-top: 10px\">\n";
$mm2 .= "    <form method=\"get\" action=\"$me\">\n";
$mm2 .= "      <input type=\"hidden\" name=\"w\" value=\"admin\">\n";
$mm2 .= "      <input type=\"hidden\" name=\"c\" value=\"$c\">\n";
$mm2 .= "      <input type=\"hidden\" name=\"d\" value=\"$d\">\n";
$mm2 .= "      <select class=\"form-control input-sm\" name=\"p\" onchange=\"this.form.submit()\">\n";
if ($_GET['c']) {
  if (empty($_GET['d'])) {
    $mm2 .= "        <option value=\"\" disabled selected>[[ select a user to list the projects ]]</option>\n";
  } else {
    $mm2 .= "        <option value=\"\">-- select a project from this list --</option>\n";
    $plisting = json_decode($allListing, true);
    foreach ($plisting as $ppp) {
      if ($ppp['companyid'] == $_GET['c']) {
        foreach ($ppp['projects'] as $p2) {
          if ($_GET['d']) {
            if ($p2['userid'] == $_GET['d']) {
              if ($p2['surveyid'] == $_GET['p']) { $mm2 .= "        <option value=\"".$p2['surveyid']."\" selected>[".$p2['surveyid']."] ".$p2['title']." (managed by ".$p2['owner'].")</option>\n"; }
              else { $mm2 .= "        <option value=\"".$p2['surveyid']."\">[".$p2['surveyid']."] ".$p2['title']." (managed by ".$p2['owner'].")</option>\n"; }
            }
          }
        }
      }
    }
  }
}
else { $mm2 .= "        <option value=\"\" disabled selected>[[ Select a company first ]]</option>\n"; }
$mm2 .= "      </select>\n";
$mm2 .= "    </form>\n";
$mm2 .= "  </div>\n";
$mm2 .= "</div>\n";
$mm2 .= "<br>\n";
$mm2 .= "<hr>\n";
$check1 = parse_url($_SERVER['REQUEST_URI'], PHP_URL_QUERY);
$check2 = parse_url($me, PHP_URL_QUERY);
if ($check1 != $check2) { $mm2 .= "<div class=\"pull-right\"><a class=\"btn btn-danger btn-xs\" href=\"$me\"><i class=\"pe-times-circle-o pe-fw\"></i> Close</a></div>\n"; }

if ($_GET['m'] == "1") { $message = mksuccess("You have successfully uploaded and replaced the company's logo."); $mm2 .= "<p>$message</p>\n"; }
else if ($_GET['m'] == "2") { $message = mksuccess("You have successfully updated the company's information."); $mm2 .= "<p>$message</p>\n"; }
else if ($_GET['m'] == "3") { $message = mkerror("All required fields cannot be blank, please fix and try again."); $mm2 .= "<p>$message</p>\n"; }
else if ($_GET['m'] == "4") { $message = mkinfo("No changes detected. So no change has been made."); $mm2 .= "<p>$message</p>\n"; }
else if ($_GET['m'] == "5") { $message = mkwarn("You have removed the company logo. Please upload a new one now."); $mm2 .= "<p>$message</p>\n"; }
else if ($_GET['m'] == "6") { $message = mksuccess("You have successfully updated the user's information."); $mm2 .= "<p>$message</p>\n"; }
else if ($_GET['m'] == "7") { $message = mksuccess("You have successfully updated the user's information (and you are now editing the company this user has moved to)."); $mm2 .= "<p>$message</p>\n"; }
else if ($_GET['m'] == "8") { $message = mksuccess("You have successfully updated the project's information."); $mm2 .= "<p>$message</p>\n"; }
else { $mm2 .= "<p></p>\n"; }
$mm2 .= "<br>\n";

if ($logo) {
  if ($website) { $clientlogo = "<a href=\"$website\" title=\"$cfullname\" target=\"_blank\"><img src=\"$logo\" alt=\"$cfullname\" title=\"$cfullname\"></a>"; }
  else { $clientlogo = "<img src=\"$logo\" alt=\"$cfullname\" title=\"$cfullname\">"; }
}
else { $clientlogo = "<img src=\"http://placehold.it/135x135\">"; }

$mm3 .= "<form id=\"companyupdate\" action=\"$me\" method=\"post\">\n";
$mm3 .= "  <div class=\"row\">\n";
$mm3 .= "    <div class=\"col-xs-12 col-sm-9 col-md-9 col-lg-9\">\n";
$mm3 .= "      <p>\n";
$mm3 .= "        <label>Company name in English</label> <span class=\"label label-red\">required</span>\n";
$mm3 .= "        <span class=\"input-group\">\n";
$mm3 .= "          <span class=\"input-group-addon\">EN</span>\n";
$mm3 .= "          <input type=\"text\" class=\"form-control\" name=\"cfullname\" onclick=\"this.select()\" placeholder=\"Company name in full\"";
if ($cfullname) { $mm3 .= " value=\"$cfullname\""; }
$mm3 .= ">\n";
$mm3 .= "        </span>\n";
$mm3 .= "        <span class=\"text-muted small\"><small>The full company name in English based on official company registration</small></span>\n";
$mm3 .= "      </p>\n";
$mm3 .= "      <p>\n";
$mm3 .= "        <label>Company name in Thai</label> <span class=\"label label-red\">required</span>\n";
$mm3 .= "        <span class=\"input-group\">\n";
$mm3 .= "          <span class=\"input-group-addon\">TH</span>\n";
$mm3 .= "          <input type=\"text\" class=\"form-control\" name=\"cfullname_th\" onclick=\"this.select()\" style=\"font-family:'boon'; font-size:1.1rem; color:black\" placeholder=\"ชื่ออย่างเป็นทางการของบริษัท\"";
if ($cfullname_th) { $mm3 .= " value=\"$cfullname_th\""; }
$mm3 .= ">\n";
$mm3 .= "        </span>\n";
$mm3 .= "        <span class=\"text-muted small\"><small>The full company name in Thai based on official company registration</small></span>\n";
$mm3 .= "      </p>\n";
$mm3 .= "    </div>\n";
$mm3 .= "    <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\" style=\"text-align:right\">\n";
$mm3 .= "      <p></p>\n";
$mm3 .= "      <div>$clientlogo</div>\n";
$mm3 .= "      <p class=\"small\" style=\"margin-top:20px\"><small>[ <i class=\"pe-upload pe-fw\"></i> <a data-toggle=\"modal\" data-target=\"#upload\" style=\"cursor:pointer\">Upload</a> : <i class=\"pe-remove pe-fw\"></i> <a href=\"$me&amp;c=$c&amp;removelogo=✓\">Remove</a> ]</small></p>\n";
$mm3 .= "    </div>\n";
$mm3 .= "    <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n";
$mm3 .= "      <p>\n";
$mm3 .= "        <label>Description in English</label> <span class=\"label label-red\">required</span>\n";
$mm3 .= "        <textarea class=\"form-control\" row=\"5\" name=\"description\" onclick=\"this.select()\" style=\"height:120px\" placeholder=\"A few sentences describing some key outstanding points of the company\" style=\"height:100px\">";
if ($description) { $mm3 .= $description; }
$mm3 .= "</textarea>\n";
$mm3 .= "        <span class=\"text-muted small\"><small>A brief detail in English such as products &amp; services or outstanding aspects.</small></span>\n";
$mm3 .= "      </p>\n";
$mm3 .= "    </div>\n";
$mm3 .= "    <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n";
$mm3 .= "      <p>\n";
$mm3 .= "        <label>Description in Thai</label> <span class=\"label label-red\">required</span>\n";
$mm3 .= "        <textarea class=\"form-control\" row=\"5\" name=\"description_th\" onclick=\"this.select()\" style=\"font-family:'boon'; font-size:1.1rem; color:black; height:120px\" placeholder=\"สองสามประโยคสั่นๆที่อธิบายได้ดีถึงบริษัท หรือจุดเด่นในมุมต่างๆของบริษัท\" style=\"height:100px\">";
if ($description_th) { $mm3 .= $description_th; }
$mm3 .= "</textarea>\n";
$mm3 .= "        <span class=\"text-muted small\"><small>A brief detail in Thai such as products &amp; services or outstanding aspects.</small></span>\n";
$mm3 .= "      </p>\n";
$mm3 .= "    </div>\n";
$mm3 .= "  </div>\n";
$mm3 .= "  <div class=\"row\">\n";
$mm3 .= "    <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n";
$mm3 .= "      <p>\n";
$mm3 .= "        <label>Billing address in English</label> <span class=\"label label-red\">required</span>\n";
$mm3 .= "        <textarea class=\"form-control\" row=\"5\" name=\"address\" onclick=\"this.select()\" style=\"height:135px\" placeholder=\"Please enter the full address of the company broken down into multiple lines\">";
if ($address) { $mm3 .= $address; }
$mm3 .= "</textarea>\n";
$mm3 .= "        <span class=\"text-muted small\"><small>This will be used for all paperworks such as billing, invoicing, etc.</small></span>\n";
$mm3 .= "      </p>\n";
$mm3 .= "    </div>\n";
$mm3 .= "    <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n";
$mm3 .= "      <p>\n";
$mm3 .= "        <label>Billing address in Thai</label> <span class=\"label label-blue\">optional</span>\n";
$mm3 .= "        <textarea class=\"form-control\" row=\"5\" name=\"address_th\" onclick=\"this.select()\" style=\"font-family:'boon'; font-size:1.1rem; color:black; height:135px\" placeholder=\"ที่อยู่บริษัทเป็นภาษาไทยอย่างเต็มรูปแบบ สามารถบันทึกได้หลายบรรทัด\">";
if ($address_th) { $mm3 .= $address_th; }
$mm3 .= "</textarea>\n";
$mm3 .= "        <span class=\"text-muted small\"><small class=\"orange\"><strong>Only for client based in Thailand, others please skip this.</strong></small></span>\n";
$mm3 .= "      </p>\n";
$mm3 .= "    </div>\n";
$mm3 .= "  </div>\n";
$mm3 .= "  <div class=\"row\">\n";
$mm3 .= "    <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n";
$mm3 .= "      <p>\n";
$mm3 .= "        <label>Email contact</label> <span class=\"label label-blue\">optional</span>\n";
$mm3 .= "        <span class=\"input-group\">\n";
$mm3 .= "          <span class=\"input-group-addon\"><i class=\"pe-envelope pe-fw\"></i></span>\n";
$mm3 .= "          <input type=\"email\" class=\"form-control\" name=\"cemail\" onclick=\"this.select()\" placeholder=\"email@company.com\"";
if ($cemail) { $mm3 .= " value=\"$cemail\""; }
$mm3 .= ">\n";
$mm3 .= "        </span>\n";
$mm3 .= "        <span class=\"text-muted small\"><small>This should be a generic email contact rather than specific to a person</small></span>\n";
$mm3 .= "      </p>\n";
$mm3 .= "      <p>\n";
$mm3 .= "        <label>Website</label> <span class=\"label label-blue\">optional</span>\n";
$mm3 .= "        <span class=\"input-group\">\n";
$mm3 .= "          <span class=\"input-group-addon\"><i class=\"pe-globe pe-fw\"></i></span>\n";
$mm3 .= "          <input type=\"text\" class=\"form-control\" name=\"website\" onclick=\"this.select()\" placeholder=\"http://www.companywebsite.com\"";
if ($website) { $mm3 .= " value=\"$website\""; }
$mm3 .= ">\n";
$mm3 .= "        </span>\n";
$mm3 .= "        <span class=\"text-muted small\"><small>The company website which can optionally be set to display in the survey</small></span>\n";
$mm3 .= "      </p>\n";
$mm3 .= "    </div>\n";
$mm3 .= "    <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n";
$mm3 .= "      <p>\n";
$mm3 .= "        <label>Telephone</label> <span class=\"label label-blue\">optional</span><br>\n";
$mm3 .= "        <span class=\"input-group\">\n";
$mm3 .= "          <span class=\"input-group-addon\"><i class=\"pe-phone pe-fw\"></i></span>\n";
$mm3 .= "          <input type=\"text\" class=\"form-control\" name=\"telephone\" onclick=\"this.select()\" placeholder=\"+662 3335555\"";
if ($telephone) { $mm3 .= " value=\"$telephone\""; }
$mm3 .= ">\n";
$mm3 .= "        </span>\n";
$mm3 .= "        <span class=\"text-muted small\"><small>The main telephone contact for the company following this format: +662 xxxxxxx</small></span>\n";
$mm3 .= "      </p>\n";
$mm3 .= "      <p>\n";
$mm3 .= "        <label>Fax</label> <span class=\"label label-blue\">optional</span><br>\n";
$mm3 .= "        <span class=\"input-group\">\n";
$mm3 .= "          <span class=\"input-group-addon\"><i class=\"pe-fax pe-fw\"></i></span>\n";
$mm3 .= "          <input type=\"text\" class=\"form-control\" name=\"fax\" onclick=\"this.select()\" placeholder=\"+662 3334444\"";
if ($fax) { $mm3 .= " value=\"$fax\""; }
$mm3 .= ">\n";
$mm3 .= "        </span>\n";
$mm3 .= "        <span class=\"text-muted small\"><small>An optional fax number for the company following the same format as telephone</small></span>\n";
$mm3 .= "      </p>\n";
$mm3 .= "    </div>\n";
$mm3 .= "  </div>\n";
$mm3 .= "  <br>\n";
$mm3 .= "  <p class=\"text-center\">\n";
$mm3 .= "    <input type=\"hidden\" name=\"savecompanyinfo\" value=\"1\">\n";
$mm3 .= "    <input type=\"hidden\" name=\"companyid\" value=\"$c\">\n";
$mm3 .= "    <button type=\"submit\" class=\"btn btn-warning\">Save <i class=\"pe-check-circle-o\"></i></button>\n";
$mm3 .= "    <button type=\"reset\" class=\"btn btn-default\">Cancel <i class=\"pe-times-circle-o\"></i></button>\n";
$mm3 .= "  </p>\n";
$mm3 .= "</form>\n";

$mm3 .= "<div class=\"modal fade\" id=\"upload\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"upload\">\n";
$mm3 .= "  <div class=\"modal-dialog\" role=\"document\">\n";
$mm3 .= "    <div class=\"modal-content\">\n";
$mm3 .= "      <div class=\"modal-header\">\n";
$mm3 .= "        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n";
$mm3 .= "        <h4 class=\"modal-title\">Change the company logo</h4>\n";
$mm3 .= "      </div>\n";
$mm3 .= "      <div class=\"modal-body\">\n";
$mm3 .= "        <form action=\"$me\" id=\"uploadform\" method=\"post\" enctype=\"multipart/form-data\">\n";
$mm3 .= "          <input type=\"hidden\" name=\"companyid\" value=\"$c\">\n";
$mm3 .= "          <p>You can upload a new logo below. No need to worry about the logo size as our system will resize your logo automatically to suit the display.</p>\n";
$mm3 .= "          <label class=\"btn btn-default\">Browse<input type=\"file\" id=\"uploadfile\" name=\"uploadfile\" style=\"display:none\" onchange=\"$('#upload-file-info').html($(this).val()); $('#uploadsubmit').removeAttr('disabled');\"></label>\n";
$mm3 .= "          <kbd id=\"upload-file-info\">Please select an image file for your logo</kbd>\n";
$mm3 .= "          <p style=\"margin-top:20px\" class=\"small\">Click <strong>\"Upload this file\"</strong> to upload the logo file, and then click <strong>\"Save\"</strong> to store it to our system.</p>\n";
$mm3 .= "          <p style=\"margin-top:20px\"><input type=\"submit\" id=\"uploadsubmit\" class=\"btn btn-primary\" name=\"uploadsubmit\" value=\"Upload this file\" onclick='uploadlogo();' disabled></p>\n";
$mm3 .= "          <div class=\"progress\" id=\"uploadprogress\" style=\"display:none\"><div class=\"progress-bar progress-bar-info progress-bar-striped\" id=\"bar\" role=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:0%;\"><span id=\"percent\">0%</span></div></div>\n";
$mm3 .= "          <br>\n";
$mm3 .= "          <div id=\"uploadoutput\"></div>\n";
$mm3 .= "        </form>\n";
$mm3 .= "      </div>\n";
$mm3 .= "      <div class=\"modal-footer\">\n";
$mm3 .= "        <form action=\"$me\" id=\"saveupload\" method=\"post\" enctype=\"multipart/form-data\">\n";
$mm3 .= "          <input type=\"hidden\" name=\"companyid\" value=\"$c\">\n";
$mm3 .= "          <input type=\"hidden\" name=\"savecompanylogo\" value=\"1\">\n";
$mm3 .= "          <input type=\"hidden\" name=\"filetosave\" id=\"savefile\">\n";
$mm3 .= "          <button id=\"savenewlogo\" type=\"button\" class=\"btn btn-warning\" data-loading-text=\"<i class='pe-circle-o-notch pe-spin'></i> Saving...\" data-reset-text=\"<i class='pe-save'></i> Saved <i class='pe-check-circle-o'></i>\">Save <i class=\"pe-check-circle-o\"></i></button>\n";
$mm3 .= "          <button type=\"reset\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel <i class=\"pe-times-circle-o\"></i></button>\n";
$mm3 .= "        </form>\n";
$mm3 .= "      </div>\n";
$mm3 .= "    </div>\n";
$mm3 .= "  </div>\n";
$mm3 .= "</div>\n";
$mm3 .= "<script type=\"text/javascript\">\n";
$mm3 .= "  function uploadlogo() {\n";
$mm3 .= "    var bar = $('#bar');\n";
$mm3 .= "    var percent = $('#percent');\n";
$mm3 .= "    $('#uploadform').ajaxForm({\n";
$mm3 .= "      beforeSubmit: function() {\n";
$mm3 .= "        document.getElementById('uploadprogress').style.display = 'block';\n";
$mm3 .= "        var percentVal = '0%';\n";
$mm3 .= "        bar.width(percentVal);\n";
$mm3 .= "        bar.attr('aria-valuenow', 0);\n";
$mm3 .= "        percent.html(percentVal);\n";
$mm3 .= "      },\n";
$mm3 .= "      uploadProgress: function(event, position, total, percentComplete) {\n";
$mm3 .= "        var percentVal = percentComplete + '%';\n";
$mm3 .= "        bar.width(percentVal);\n";
$mm3 .= "        bar.attr('aria-valuenow', percentComplete);\n";
$mm3 .= "        percent.html(percentVal);\n";
$mm3 .= "      },\n";
$mm3 .= "    	success: function() {\n";
$mm3 .= "        var percentVal = '100%';\n";
$mm3 .= "        bar.width(percentVal);\n";
$mm3 .= "        bar.attr('aria-valuenow', 100);\n";
$mm3 .= "        percent.html(percentVal);\n";
$mm3 .= "      },\n";
$mm3 .= "      complete: function(xhr) {\n";
$mm3 .= "        if (xhr.responseText != null) {\n";
$mm3 .= "          document.getElementById('uploadoutput').innerHTML = xhr.responseText;\n";
$mm3 .= "          var img = document.getElementById('uploadlogo').src;\n";
$mm3 .= "          document.getElementById('savefile').setAttribute('value', img);\n";
$mm3 .= "          window.setTimeout(function () { document.getElementById('uploadprogress').style.display = 'none'; }, 1000);\n";
$mm3 .= "        }\n";
$mm3 .= "      }\n";
$mm3 .= "    });\n";
$mm3 .= "  }\n";
$mm3 .= "  $('#savenewlogo').on('click', function() {\n";
$mm3 .= "    var \$this = $(this);\n";
$mm3 .= "    \$this.button('loading');\n";
$mm3 .= "    setTimeout(function() { \$this.button('reset'); }, 1000);\n";
$mm3 .= "    setTimeout(function() { $('#saveupload').submit(); }, 1200);\n";
$mm3 .= "  });\n";
$mm3 .= "</script>\n";

// --------------------

$mm5 .= "<form id=\"userupdate\" action=\"$me\" method=\"post\">\n";
$mm5 .= "  <div class=\"row\">\n";
$mm5 .= "    <div class=\"col-xs-12 col-sm-8 col-md-8 col-lg-8\">\n";
$mm5 .= "      <p>\n";
$mm5 .= "        <label>Full name</label> <span class=\"label label-red\">required</span>\n";
$mm5 .= "        <span class=\"input-group\">\n";
$mm5 .= "          <span class=\"input-group-addon\"><i class=\"pe-user pe-fw\"></i></span>\n";
$mm5 .= "          <input type=\"text\" class=\"form-control\" name=\"ufullname\" onclick=\"this.select()\" placeholder=\"First and last name\"";
if ($ufullname) { $mm5 .= " value=\"$ufullname\""; }
$mm5 .= ">\n";
$mm5 .= "        </span>\n";
$mm5 .= "        <span class=\"text-muted small\"><small>User's full name including first and last name</small></span>\n";
$mm5 .= "      </p>\n";
$mm5 .= "      <p>\n";
$mm5 .= "        <label>Email</label> <span class=\"label label-red\">required</span>\n";
$mm5 .= "        <span class=\"input-group\">\n";
$mm5 .= "          <span class=\"input-group-addon\"><i class=\"pe-envelope pe-fw\"></i></span>\n";
$mm5 .= "          <input type=\"text\" class=\"form-control\" name=\"uemail\" onclick=\"this.select()\" placeholder=\"email@company.com\"";
if ($uemail) { $mm5 .= " value=\"$uemail\""; }
$mm5 .= ">\n";
$mm5 .= "        </span>\n";
$mm5 .= "        <span class=\"text-muted small\"><small>User's email which must be a working and valid email</small></span>\n";
$mm5 .= "      </p>\n";
// $mm5 .= "      <p>\n";
// $mm5 .= "        <label>Mobile</label> <span class=\"label label-blue\">optional</span>\n";
// $mm5 .= "        <span class=\"input-group\">\n";
// $mm5 .= "          <span class=\"input-group-addon\"><i class=\"pe-mobile pe-fw\"></i></span>\n";
// $mm5 .= "          <input type=\"text\" class=\"form-control\" name=\"umobile\" onclick=\"this.select()\" placeholder=\"0814447777\"";
// if ($umobile) { $mm5 .= " value=\"$umobile\""; }
// $mm5 .= ">\n";
// $mm5 .= "        </span>\n";
// $mm5 .= "        <span class=\"text-muted small\"><small>User's mobile number which preferable to have one filled in</small></span>\n";
// $mm5 .= "      </p>\n";
$mm5 .= "      <p>\n";
$mm5 .= "        <label>Company</label> <span class=\"label label-red\">required</span>\n";
$mm5 .= "        <span class=\"input-group\">\n";
$mm5 .= "          <span class=\"input-group-addon\"><i class=\"pe-building pe-fw\"></i></span>\n";
$mm5 .= "          <select class=\"form-control input-sm\" name=\"ucompanyid\">\n";
// $mm5 .= "            <option value=\"\" selected>-- select a company --</option>\n";
$clisting = json_decode($allListing, true);
foreach ($clisting as $cc) {
  if ($cc['companyid'] == $ucompanyid) { $mm5 .= "            <option value=\"".$cc['companyid']."\" selected>".$cc['companyfullname']."</option>\n"; }
  else { $mm5 .= "            <option value=\"".$cc['companyid']."\">".$cc['companyfullname']."</option>\n"; }
}
$mm5 .= "          </select>\n";
$mm5 .= "        </span>\n";
$mm5 .= "        <span class=\"text-muted small\"><small>The company this user belongs to</small></span>\n";
$mm5 .= "      </p>\n";
$mm5 .= "      <p>\n";
$mm5 .= "        <label>Role</label> <span class=\"label label-red\">required</span>\n";
$mm5 .= "        <span class=\"input-group\">\n";
$mm5 .= "          <span class=\"input-group-addon\"><i class=\"pe-flag pe-fw\"></i></span>\n";
$mm5 .= "          <select class=\"form-control input-sm\" name=\"ulevel\">\n";
$lists = array("Administration" => "9", "System" => "8", "Manager" => "6", "User" => "5", "Guest" => "4");
foreach($lists as $a => $b) {
  if ($b == $ulevel) { $mm5 .= "            <option value=\"$b\" selected>$a</option>\n"; }
  else { $mm5 .= "            <option value=\"$b\">$a</option>\n"; }
}
$mm5 .= "          </select>\n";
$mm5 .= "        </span>\n";
$mm5 .= "        <span class=\"text-muted small\"><small>The company this user belongs to</small></span>\n";
$mm5 .= "      </p>\n";
$mm5 .= "      <p>\n";
$mm5 .= "        <label>Status</label> <span class=\"label label-red\">required</span>\n";
$mm5 .= "        <span class=\"input-group\">\n";
$mm5 .= "          <span class=\"input-group-addon\"><i class=\"pe-lightbulb-o pe-fw\"></i></span>\n";
$mm5 .= "          <select class=\"form-control input-sm\" name=\"ustatus\">\n";
$lists = array("Active" => "5", "Inactive" => "4", "Locked" => "3", "Suspended" => "2", "Deleted" => "0");
foreach($lists as $a => $b) {
  if ($b == $ustatus) { $mm5 .= "            <option value=\"$b\" selected>$a</option>\n"; }
  else { $mm5 .= "            <option value=\"$b\">$a</option>\n"; }
}
$mm5 .= "          </select>\n";
$mm5 .= "        </span>\n";
$mm5 .= "        <span class=\"text-muted small\"><small>The company this user belongs to</small></span>\n";
$mm5 .= "      </p>\n";
$mm5 .= "    </div>\n";
$mm5 .= "    <div class=\"col-xs-12 col-sm-4 col-md-4 col-lg-4\" style=\"text-align:right\">\n";
//$mm5 .= "      <p></p>\n";
if ($uavatar) {
  $mm5 .= "      <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n";
  $mm5 .= "        <p><img src=\"assets/img/u/$uavatar.svg\" id=\"avatar\" class=\"img-circle members-photo\" alt=\"Avatar\"></p>\n";
  $mm5 .= "      </div>\n";
  $mm5 .= "      <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4 small\" style=\"margin-top:50px\"></div>\n";
  $mm5 .= "      <div class=\"col-xs-8 col-sm-8 col-md-8 col-lg-8\">\n";
  $mm5 .= "        Change picture: ";
  $mm5 .= "        <select class=\"form-control input-sm\" id=\"select-avatar\" name=\"uavatar\">\n";
  $mm5 .= "          <option value=\"\">-- select --</option>\n";
  $pictures = array("Male #1" => "M1", "Male #2" => "M2", "Male #3" => "M3", "Male #4" => "M4", "Male #5" => "M5",
      "Male #6" => "M6", "Male #7" => "M7", "Male #8" => "M8", "Male #9" => "M9", "Male #10" => "M10",
      "Female #1" => "F1", "Female #2" => "F2", "Female #3" => "F3", "Female #4" => "F4", "Female #5" => "F5",
      "Female #6" => "F6", "Female #7" => "F7", "Female #8" => "F8", "Female #9" => "F9", "Female #10" => "F10");
  foreach($pictures as $xa => $xb) {
    if ($xb == $uavatar) { $mm5 .= "          <option value=\"$xb\" selected>$xa</option>\n"; }
    else { $mm5 .= "          <option value=\"$xb\">$xa</option>\n"; }
  }
  $mm5 .= "        </select>\n";
  $mm5 .= "      </div>\n";
}
$mm5 .= "      <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\" style=\"margin-top:50px\">\n";
$mm5 .= "        <table class=\"table table-hover small pull-right\" style=\"width:80%\">\n";
$mm5 .= "          <thead>\n";
$mm5 .= "            <tr class=\"bg-success small\"><th style=\"text-align:right\" width=\"40%\">Info</th><th style=\"text-align:right\" width=\"60%\">Timing</th></tr>\n";
$mm5 .= "          </thead>\n";
$mm5 .= "          <tbody>\n";
$mm5 .= "            <tr class=\"small\"><td>Role:</td><td>".role($ulevel, true)."</td></tr>\n";
$mm5 .= "            <tr class=\"small\"><td>Status:</td><td>".status_user($ustatus, true, true)."</td></tr>\n";
$mm5 .= "            <tr class=\"small\"><td>Registered:</td><td>$ucreated</td></tr>\n";
$mm5 .= "            <tr class=\"small\"><td>Last updated:</td><td>$uupdated</td></tr>\n";
$mm5 .= "            <tr class=\"small\"><td>Last login:</td><td>$lastlogin2</td></tr>\n";
$mm5 .= "            <tr class=\"small\"><td>Last IP:</td><td>$lastip2</td></tr>\n";
$mm5 .= "          </tbody>\n";
$mm5 .= "        </table>\n";
$mm5 .= "      </div>\n";
$mm5 .= "    </div>\n";
$mm5 .= "  </div>\n";
$mm5 .= "  <br>\n";
$mm5 .= "  <p class=\"text-center\">\n";
$mm5 .= "    <input type=\"hidden\" name=\"saveuserinfo\" value=\"1\">\n";
$mm5 .= "    <input type=\"hidden\" name=\"c\" value=\"$c\">\n";
$mm5 .= "    <input type=\"hidden\" name=\"userid\" value=\"$d\">\n";
$mm5 .= "    <button type=\"submit\" class=\"btn btn-warning\">Save <i class=\"pe-check-circle-o\"></i></button>\n";
$mm5 .= "    <button type=\"reset\" class=\"btn btn-default\">Cancel <i class=\"pe-times-circle-o\"></i></button>\n";
$mm5 .= "  </p>\n";
$mm5 .= "</form>\n";
$mm5 .= "<script type=\"text/javascript\">\n";
$mm5 .= "  var jsonData = $allListing;\n";
$mm5 .= "  function changecompany(value) {\n";
$mm5 .= "    if (value.length == 0) document.getElementById(\"selectuser\").innerHTML = \"<option></option>\";\n";
$mm5 .= "    else {\n";
$mm5 .= "      var userlist = \"<option value='' disabled selected>Now select a user</option>\";\n";
$mm5 .= "      for (i in jsonData) { if (jsonData[i].companyid == value) { for (j in jsonData[i].users) { userlist += \"<option value=\" + jsonData[i].users[j].userid + \">\" + jsonData[i].users[j].username + \" (\" + jsonData[i].users[j].useremail + \")</option>\"; } } }\n";
$mm5 .= "      document.getElementById(\"selectuser\").innerHTML = userlist;\n";
$mm5 .= "    }\n";
$mm5 .= "  }\n";
$mm5 .= "  $(document).ready(function() {\n";
$mm5 .= "    $(\"#select-avatar\").change(function() {\n";
$mm5 .= "      $(\"#avatar\").attr(\"src\", \"assets/img/u/\" + $(this).val() + \".svg\");\n";
$mm5 .= "    });\n";
$mm5 .= "  });\n";
$mm5 .= "</script>\n";

// --------------------

$mm6 .= "<form id=\"projectupdate\" action=\"$me\" method=\"post\">\n";
$mm6 .= "  <div class=\"row\">\n";
$mm6 .= "    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n";
$mm6 .= "      <p>\n";
$mm6 .= "        <label>Project name</label> <span class=\"label label-red\">required</span>\n";
$mm6 .= "        <span class=\"input-group\">\n";
$mm6 .= "          <span class=\"input-group-addon\"><i class=\"pe-cube pe-fw\"></i></span>\n";
$mm6 .= "          <input type=\"text\" class=\"form-control\" name=\"ptitle\" onclick=\"this.select()\" placeholder=\"Project name\"";
if ($ptitle) { $mm6 .= " value=\"$ptitle\""; }
$mm6 .= ">\n";
$mm6 .= "        </span>\n";
$mm6 .= "        <span class=\"text-muted small\"><small>Project name which is usually provided by clients</small></span>\n";
$mm6 .= "      </p>\n";
$mm6 .= "    </div>\n";
$mm6 .= "    <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n";
$mm6 .= "      <p>\n";
$mm6 .= "        <label>Type</label> <span class=\"label label-red\">required</span>\n";
$mm6 .= "        <span class=\"input-group\">\n";
$mm6 .= "          <span class=\"input-group-addon\"><i class=\"pe-folder-o pe-fw\"></i></span>\n";
$mm6 .= "          <select class=\"form-control input-sm\" name=\"pprivate\">\n";
$lists = array("Private" => "1", "Public" => "0");
foreach($lists as $a => $b) {
  if ($b == $pprivate) { $mm6 .= "            <option value=\"$b\" selected>$a</option>\n"; }
  else { $mm6 .= "            <option value=\"$b\">$a</option>\n"; }
}
$mm6 .= "          </select>\n";
$mm6 .= "        </span>\n";
$mm6 .= "        <span class=\"text-muted small\"><small>Project type of either Private or Public</small></span>\n";
$mm6 .= "      </p>\n";
$mm6 .= "    </div>\n";
$mm6 .= "    <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n";
$mm6 .= "      <p>\n";
$mm6 .= "        <label>Status</label> <span class=\"label label-red\">required</span>\n";
$mm6 .= "        <span class=\"input-group\">\n";
$mm6 .= "          <span class=\"input-group-addon\"><i class=\"pe-lightbulb-o pe-fw\"></i></span>\n";
$mm6 .= "          <select class=\"form-control input-sm\" name=\"pstatus\">\n";
$lists = array("Set up" => "1", "Data-collection" => "2", "Completed" => "3", "Archived" => "4", "Deleted" => "0");
foreach($lists as $a => $b) {
  if ($b == $pstatus) { $mm6 .= "            <option value=\"$b\" selected>$a</option>\n"; }
  else { $mm6 .= "            <option value=\"$b\">$a</option>\n"; }
}
$mm6 .= "          </select>\n";
$mm6 .= "        </span>\n";
$mm6 .= "        <span class=\"text-muted small\"><small>Current status of this project</small></span>\n";
$mm6 .= "      </p>\n";
$mm6 .= "    </div>\n";
$mm6 .= "    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n";
$mm6 .= "      <p>\n";
$mm6 .= "        <label>Description in Thai</label> <span class=\"label label-red\">required</span>\n";
$mm6 .= "        <textarea class=\"form-control\" row=\"5\" name=\"pdescription\" onclick=\"this.select()\" style=\"height:120px\" placeholder=\"A short descrption about this project to be shown to respondents\" style=\"height:100px\">";
if ($pdescription) { $mm6 .= $pdescription; }
$mm6 .= "</textarea>\n";
$mm6 .= "        <span class=\"text-muted small\"><small>A brief detail of this project in English</small></span>\n";
$mm6 .= "      </p>\n";
$mm6 .= "    </div>\n";
$mm6 .= "    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n";
$mm6 .= "      <p>\n";
$mm6 .= "        <label>Thank you message in Thai</label> <span class=\"label label-red\">required</span>\n";
$mm6 .= "        <textarea class=\"form-control\" row=\"5\" name=\"pthankyou\" onclick=\"this.select()\" style=\"font-family:'boon'; font-size:1.1rem; color:black; height:120px\" placeholder=\"รายละเอียดสั้นๆเกี่ยวกับงานวิจัยชิ้นนี้ สำหรัับใช้แสดงให้ผู้ให้สัมภาษณ์ดู\" style=\"height:100px\">";
if ($pthankyou) { $mm6 .= $pthankyou; }
$mm6 .= "</textarea>\n";
$mm6 .= "        <span class=\"text-muted small\"><small>A brief detail of this project in Thai</small></span>\n";
$mm6 .= "      </p>\n";
$mm6 .= "    </div>\n";
$mm6 .= "  </div>\n";
$mm6 .= "  <div class=\"row\">\n";
$mm6 .= "    <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n";
$mm6 .= "      <p>\n";
$mm6 .= "        <label>Points</label> <span class=\"label label-blue\">optional</span>\n";
$mm6 .= "        <span class=\"input-group\">\n";
$mm6 .= "          <span class=\"input-group-addon\"><i class=\"pe-diamond pe-fw\"></i></span>\n";
$mm6 .= "          <input type=\"text\" class=\"form-control\" name=\"ppoints\" onclick=\"this.select()\" placeholder=\"300\"";
if ($ppoints) { $mm6 .= " value=\"$ppoints\""; }
$mm6 .= ">\n";
$mm6 .= "        </span>\n";
$mm6 .= "        <span class=\"text-muted small\"><small>Points earned for participating with this project</small></span>\n";
$mm6 .= "      </p>\n";
$mm6 .= "    </div>\n";
$mm6 .= "    <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n";
$mm6 .= "      <p>\n";
$mm6 .= "        <label>Point Bonus</label> <span class=\"label label-blue\">optional</span>\n";
$mm6 .= "        <span class=\"input-group\">\n";
$mm6 .= "          <span class=\"input-group-addon\"><i class=\"pe-diamond pe-fw\"></i></span>\n";
$mm6 .= "          <input type=\"text\" class=\"form-control\" name=\"ppoints_bonus\" onclick=\"this.select()\" placeholder=\"300\"";
if ($ppoints_bonus) { $mm6 .= " value=\"$ppoints_bonus\""; }
$mm6 .= ">\n";
$mm6 .= "        </span>\n";
$mm6 .= "        <span class=\"text-muted small\"><small>Bonus points to encourage a greater level of participation</small></span>\n";
$mm6 .= "      </p>\n";
$mm6 .= "    </div>\n";
$mm6 .= "  </div>\n";
$mm6 .= "  <label>Change project owner</label> <span class=\"label label-red\">required</span>\n";
$mm6 .= "  <div class=\"row\">\n";
$mm6 .= "    <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n";
$mm6 .= "      <p>\n";
// $mm6 .= "        <label>Owner</label> <span class=\"label label-red\">required</span>\n";
$mm6 .= "        <span class=\"input-group\">\n";
$mm6 .= "          <span class=\"input-group-addon\">Company</span>\n";
$mm6 .= "          <select class=\"form-control input-sm\" name=\"pcompanyid\" id=\"selectcompany\" onChange=\"changecompany(this.value);\">\n";
// $mm6 .= "            <option value=\"\" disabled selected>Select a company</option>\n";
$mm6 .= $companylist;
$mm6 .= "          </select>\n";
$mm6 .= "        </span>\n";
$mm6 .= "        <span class=\"text-muted small\"><small>Only for changing the project owner (company)</small></span>\n";
$mm6 .= "      </p>\n";
$mm6 .= "    </div>\n";
$mm6 .= "    <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n";
$mm6 .= "      <p>\n";
// $mm6 .= "        <label>Type</label> <span class=\"label label-red\">required</span>\n";
$mm6 .= "        <span class=\"input-group\">\n";
$mm6 .= "          <span class=\"input-group-addon\">User</span>\n";
$mm6 .= "          <select class=\"form-control input-sm\" name=\"puserid\" id=\"selectuser1\">\n";
$mm6 .= "            <option value=\"\" disabled>-- select a user from this list --</option>\n";
$ulisting = json_decode($allListing, true);
foreach ($ulisting as $uuu) {
  if ($uuu['companyid'] == $_GET['c']) {
    foreach ($uuu['users'] as $u2) {
      if ($u2['userid'] == $_GET['d']) { $mm6 .= "        <option value=\"".$u2['userid']."\" selected>".$u2['username']." (".$u2['useremail'].")</option>\n"; }
      else { $mm6 .= "        <option value=\"".$u2['userid']."\">".$u2['username']." (".$u2['useremail'].")</option>\n"; }
    }
  }
}
$mm6 .= "          </select>\n";
$mm6 .= "        </span>\n";
$mm6 .= "        <span class=\"text-muted small\"><small>Only for changing the project owner (user)</small></span>\n";
$mm6 .= "      </p>\n";
$mm6 .= "    </div>\n";
$mm6 .= "  </div>\n";
$mm6 .= "  <br>\n";
$mm6 .= "  <p class=\"text-center\">\n";
$mm6 .= "    <input type=\"hidden\" name=\"saveprojectinfo\" value=\"1\">\n";
$mm6 .= "    <input type=\"hidden\" name=\"c\" value=\"$c\">\n";
$mm6 .= "    <input type=\"hidden\" name=\"d\" value=\"$d\">\n";
$mm6 .= "    <input type=\"hidden\" name=\"surveyid\" value=\"$p\">\n";
$mm6 .= "    <button type=\"submit\" class=\"btn btn-warning\">Save <i class=\"pe-check-circle-o\"></i></button>\n";
$mm6 .= "    <button type=\"reset\" class=\"btn btn-default\">Cancel <i class=\"pe-times-circle-o\"></i></button>\n";
$mm6 .= "  </p>\n";
$mm6 .= "</form>\n";
$mm6 .= "<script type=\"text/javascript\">\n";
$mm6 .= "  var jsonData = $allListing;\n";
$mm6 .= "  function changecompany(value) {\n";
$mm6 .= "    if (value.length == 0) document.getElementById(\"selectuser1\").innerHTML = \"<option></option>\";\n";
$mm6 .= "    else {\n";
$mm6 .= "      var userlist = \"<option value='' disabled selected>-- select a user from this list --</option>\";\n";
$mm6 .= "      for (i in jsonData) { if (jsonData[i].companyid == value) { for (j in jsonData[i].users) { userlist += \"<option value=\" + jsonData[i].users[j].userid + \">\" + jsonData[i].users[j].username + \" (\" + jsonData[i].users[j].useremail + \")</option>\"; } } }\n";
$mm6 .= "      document.getElementById(\"selectuser1\").innerHTML = userlist;\n";
$mm6 .= "    }\n";
$mm6 .= "  }\n";
$mm6 .= "</script>\n";


echo $mm2;
if ($c) {
  if ($d) {
    if ($p) { echo $mm6; }
    else { echo $mm5; }
  }
  else { echo $mm3; }
}


?>

<style>
  .badge.smaller { font-size: 10px; padding: 3px 5px; }
</style>

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
