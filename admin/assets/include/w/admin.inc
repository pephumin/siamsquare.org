<?php

$me = "/admin/?w=admin";

if ($_GET['c']) { $c = $_GET['c']; }
else if ($_POST['companyid']) { $c = $_POST['companyid']; }
else { $c = ""; }

if ($_GET['d']) { $d = $_GET['d']; }
else if ($_POST['userid']) { $d = $_POST['userid']; }
else { $d = ""; }

function DDcompany($companyid) {
  global $db;
  $output = "";
  $qf1 = $db->prepare("SELECT id, fullname FROM j_companies ORDER BY id DESC");
  $qf1->execute();
  while ($row = $qf1->fetchObject()) {
    if ($row->id == $companyid) { $output .= "        <option value=\"$row->id\" selected>$row->fullname</option>\n"; }
    else { $output .= "        <option value=\"$row->id\">$row->fullname</option>\n"; }
  }
  return $output;
}

function DDrole($level) {
  $output = "";
  $lists = array("Administration" => "9", "System" => "8", "Manager" => "6", "User" => "5", "Guest" => "4");
  foreach($lists as $a => $b) {
    if ($b == $level) { $output .= "        <option value=\"$b\" selected>$a</option>\n"; }
    else { $output .= "        <option value=\"$b\">$a</option>\n"; }
  }
  return $output;
}

function DDstatus($status) {
  $output = "";
  $lists = array("Active" => "5", "Inactive" => "4", "Locked" => "3", "Suspended" => "2", "Deleted" => "0");
  foreach($lists as $a => $b) {
    if ($b == $status) { $output .= "        <option value=\"$b\" selected>$a</option>\n"; }
    else { $output .= "        <option value=\"$b\">$a</option>\n"; }
  }
  return $output;
}



// Get company list
$q1 = $db->prepare("SELECT C.*, (SELECT COUNT(*) FROM j_users AS U WHERE U.companyid = C.id) AS nUsers, (SELECT COUNT(*) FROM j_projects AS P WHERE P.companyid = C.id) AS nProjects, (SELECT COUNT(*) FROM j_board AS B WHERE B.companyid = C.id) AS nBoards FROM j_companies AS C ORDER BY C.id DESC");
$q1->execute();
$countcompany = $q1->rowCount();
$mm1 .= "<table class=\"table small\">\n";
$mm1 .= "  <thead>\n";
$mm1 .= "    <tr class=\"bg-success\">\n";
$mm1 .= "      <th style=\"text-align:left\" width=\"10%\"><i class=\"pe-sort-amount-desc pe-fw orange\"></i> No.</th>\n";
$mm1 .= "      <th style=\"text-align:left\" width=\"25%\"><i class=\"pe-building pe-fw\"></i> Company</th>\n";
$mm1 .= "      <th style=\"text-align:left\" width=\"15%\"><i class=\"pe-calendar pe-fw\"></i> Registered</th>\n";
$mm1 .= "      <th style=\"text-align:left\" width=\"15%\"><i class=\"pe-clock-o pe-fw\"></i> Last updated</th>\n";
$mm1 .= "      <th style=\"text-align:right\" width=\"11%\"><i class=\"pe-users pe-fw\"></i> Users</th>\n";
$mm1 .= "      <th style=\"text-align:right\" width=\"12%\"><i class=\"pe-cubes pe-fw\"></i> Projects</th>\n";
$mm1 .= "      <th style=\"text-align:right\" width=\"12%\"><i class=\"pe-comments-o pe-fw\"></i> Messages</th>\n";
$mm1 .= "    </tr>\n";
$mm1 .= "  </thead>\n";
$mm1 .= "  <tbody>\n";
$i = 1; $companylist = ""; $userlist = "";
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
  $nUsers = $row->nUsers;
  $allUsers += $nUsers;
  $nProjects = $row->nProjects;
  $allProjects += $nProjects;
  $nBoards = $row->nBoards;
  $allBoards += $nBoards;
  if ($companyid == $c) { $companylist .= "        <option value=\"$companyid\" selected>$cfullname</option>\n"; }
  else { $companylist .= "        <option value=\"$companyid\">$cfullname</option>\n"; }
  $mm1 .= "    <tr id=\"firstrow$i\">\n";
  // $mm1 .= "      <td style=\"text-align:left\"><a data-toggle=\"collapse\" href=\"#$companyid\" aria-expanded=\"false\" aria-controls=\"$companyid\">$companyid</a></td>\n";
  $mm1 .= "      <td style=\"text-align:left\">$companyid <a id=\"rowshow$i\" href=\"\" onclick=\"return showRow(event, $i)\" style=\"\"> <i class=\"pe-chevron-down\"></i></a><a id=\"rowhide$i\" href=\"\" onclick=\"return hideRow(event, $i)\" style=\"display:none\"> <i class=\"pe-chevron-up\"></i></a></td>\n";
  $mm1 .= "      <td style=\"text-align:left\">$name</td>\n";
  $mm1 .= "      <td style=\"text-align:left\">$created</td>\n";
  $mm1 .= "      <td style=\"text-align:left\">$updated</td>\n";
  $mm1 .= "      <td style=\"text-align:right\">$nUsers</td>\n";
  $mm1 .= "      <td style=\"text-align:right\">$nProjects</td>\n";
  $mm1 .= "      <td style=\"text-align:right\">$nBoards</td>\n";
  $mm1 .= "    </tr>\n";
  // $mm1 .= "    <tr class=\"collapse\" id=\"$companyid\">\n";
  $mm1 .= "    <tr id=\"row$i\" style=\"display:none\">\n";
  $mm1 .= "      <td colspan=\"7\" style=\"padding:30px\">\n";
  $mm1 .= "        <nav>\n";
  $mm1 .= "          <ul class=\"nav nav-tabs\">\n";
  $mm1 .= "            <li class=\"active\"><a href=\"#1-$companyid\" data-toggle=\"tab\"><i class=\"pe-info-circle pe-fw\"></i> Information</a></li>\n";
  $mm1 .= "            <li><a href=\"#2-$companyid\" data-toggle=\"tab\"><i class=\"pe-users pe-fw\"></i> Users <span class=\"badge\">$nUsers</span></a></li>\n";
  $mm1 .= "            <li><a href=\"#3-$companyid\" data-toggle=\"tab\"><i class=\"pe-cubes pe-fw\"></i> Projects <span class=\"badge\">$nProjects</span></a></li>\n";
  $mm1 .= "            <li><a href=\"#4-$companyid\" data-toggle=\"tab\"><i class=\"pe-comments-o pe-fw\"></i> Messages <span class=\"badge\">$nBoards</span></a></li>\n";
  $mm1 .= "          </ul>\n";
  $mm1 .= "        </nav>\n";
  $mm1 .= "        <div class=\"tab-content\" style=\"border:1px #ddd solid;border-top-color: transparent;\">\n";
  $mm1 .= "          <div id=\"1-$companyid\" class=\"tab-pane fade in active\" style=\"padding:20px;\">\n";
  if ($logo) { $mm1 .= "            <div class=\"pull-right\" style=\"margin-top:0px\"><img src=\"$logo\" title=\"$cfullname\"></div>\n"; }
  $mm1 .= "            <h4>$name</h4>\n";
  $mm1 .= "            <table class=\"table table-hover table-condensed\">\n";
  $mm1 .= "              <tbody>\n";
  $mm1 .= "                <tr>\n";
  $mm1 .= "                  <td width=\"20%\">Company name</td>\n";
  $mm1 .= "                  <td width=\"10%\"><button class=\"btn btn-default btn-tiny\"><i class=\"pe-language pe-fw\"></i> EN</button></td>\n";
  $mm1 .= "                  <td width=\"70%\">$cfullname</td>\n";
  $mm1 .= "                </tr>\n";
  $mm1 .= "                <tr>\n";
  $mm1 .= "                  <td width=\"20%\"></td>\n";
  $mm1 .= "                  <td width=\"10%\"><button class=\"btn btn-default btn-tiny\"><i class=\"pe-language pe-fw\"></i> TH</button></td>\n";
  $mm1 .= "                  <td width=\"70%\">$cfullname_th</td>\n";
  $mm1 .= "                </tr>\n";
  $mm1 .= "                <tr>\n";
  $mm1 .= "                  <td width=\"20%\">Address</td>\n";
  $mm1 .= "                  <td width=\"10%\"><button class=\"btn btn-default btn-tiny\"><i class=\"pe-language pe-fw\"></i> EN</button></td>\n";
  $mm1 .= "                  <td width=\"70%\">$address</td>\n";
  $mm1 .= "                </tr>\n";
  $mm1 .= "                <tr>\n";
  $mm1 .= "                  <td width=\"20%\"></td>\n";
  $mm1 .= "                  <td width=\"10%\"><button class=\"btn btn-default btn-tiny\"><i class=\"pe-language pe-fw\"></i> TH</button></td>\n";
  $mm1 .= "                  <td width=\"70%\">$address_th</td>\n";
  $mm1 .= "                </tr>\n";
  $mm1 .= "                <tr>\n";
  $mm1 .= "                  <td width=\"30%\" colspan=\"2\"><i class=\"pe-phone pe-fw\"></i> Telephone</td>\n";
  $mm1 .= "                  <td width=\"70%\">$telephone</td>\n";
  $mm1 .= "                </tr>\n";
  $mm1 .= "                <tr>\n";
  $mm1 .= "                  <td width=\"30%\" colspan=\"2\"><i class=\"pe-fax pe-fw\"></i> Fax</td>\n";
  $mm1 .= "                  <td width=\"70%\">$fax</td>\n";
  $mm1 .= "                </tr>\n";
  $mm1 .= "                <tr>\n";
  $mm1 .= "                  <td width=\"30%\" colspan=\"2\"><i class=\"pe-envelope pe-fw\"></i> Email</td>\n";
  $mm1 .= "                  <td width=\"70%\"><a href=\"mailto:$cemail\">$cemail</a></td>\n";
  $mm1 .= "                </tr>\n";
  $mm1 .= "                <tr>\n";
  $mm1 .= "                  <td width=\"30%\" colspan=\"2\"><i class=\"pe-globe pe-fw\"></i> Website</td>\n";
  $mm1 .= "                  <td width=\"70%\"><a href=\"$website\">$website</a></td>\n";
  $mm1 .= "                </tr>\n";
  $mm1 .= "                <tr>\n";
  $mm1 .= "                  <td width=\"20%\">Description</td>\n";
  $mm1 .= "                  <td width=\"10%\"><button class=\"btn btn-default btn-tiny\"><i class=\"pe-language pe-fw\"></i> EN</button></td>\n";
  $mm1 .= "                  <td width=\"70%\">$description</td>\n";
  $mm1 .= "                </tr>\n";
  $mm1 .= "                <tr>\n";
  $mm1 .= "                  <td width=\"20%\"></td>\n";
  $mm1 .= "                  <td width=\"10%\"><button class=\"btn btn-default btn-tiny\"><i class=\"pe-language pe-fw\"></i> TH</button></td>\n";
  $mm1 .= "                  <td width=\"70%\">$description_th</td>\n";
  $mm1 .= "                </tr>\n";
  $mm1 .= "                <tr>\n";
  $mm1 .= "                  <td width=\"30%\" colspan=\"2\">Registered</td>\n";
  $mm1 .= "                  <td width=\"70%\">$created</td>\n";
  $mm1 .= "                </tr>\n";
  $mm1 .= "                <tr>\n";
  $mm1 .= "                  <td width=\"30%\" colspan=\"2\">Last updated</td>\n";
  $mm1 .= "                  <td width=\"70%\">$updated</td>\n";
  $mm1 .= "                </tr>\n";
  $mm1 .= "              </tbody>\n";
  $mm1 .= "            </table>\n";
  $mm1 .= "            <div align=\"right\"><a class=\"btn btn-success btn-sm\" href=\"$me&c=$companyid\"><i class=\"pe-edit pe-lg pe-fw\"></i> Edit this company</a></div>\n";
  $mm1 .= "          </div>\n";
  $mm1 .= "          <div id=\"2-$companyid\" class=\"tab-pane fade\" style=\"padding:20px;\">\n";
  // Get user list
  $q2 = $db->prepare("SELECT * FROM j_users WHERE companyid = :companyid ORDER BY level DESC, status DESC");
  $q2->bindValue(':companyid', $companyid, PDO::PARAM_INT);
  $q2->execute();
  $mm1 .= "            <h4>A total of $nUsers users</h4>\n";
  $mm1 .= "            <table class=\"table table-condensed table-hover\">\n";
  $mm1 .= "              <thead>\n";
  $mm1 .= "                <tr class=\"bg-info\">\n";
  $mm1 .= "                  <th width=\"10%\">ID (edit)</th><th width=\"30%\">Name (email)</th><th width=\"15%\"><i class=\"pe-sort-amount-desc pe-fw orange\"></i> Role</th><th width=\"15%\">Registered</th><th width=\"15%\">Last seen</th><th width=\"15%\"><i class=\"pe-sort-amount-desc pe-fw orange\"></i> Status</th>\n";
  $mm1 .= "                </tr>\n";
  $mm1 .= "              </thead>\n";
  $mm1 .= "              <tbody>\n";
  $userListEach = array('companyname' => $name, 'companyid' => $companyid);
  // $ulist = array($companyid);
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
    $mm1 .= "                <tr>\n";
    $mm1 .= "                  <td>$rr->id <a href=\"$me&d=$rr->id\"><i class=\"pe-edit\"></i></a></td><td>$rr->fullname <span class=\"small\">(<a href=\"mailto:$rr->email\">$rr->email</a>)</span></td><td>$role</td><td>$created</td><td>$lastlogin2</td><td>$status</td>\n";
    $mm1 .= "                </tr>\n";
    if ($userid == $d) { $userlist .= "        <option value=\"$userid\" selected>$name - $ufullname ($uemail)</option>\n"; }
    else { $userlist .= "        <option value=\"$userid\">$name - $ufullname ($uemail)</option>\n"; }
    $userListEach['users'][] = array('username' => $ufullname, 'userid' => $userid, 'useremail' => $uemail);
    // $ulistpush = array();
    // array_push($ulist, );
  }
  $userListEachNew[] = $userListEach;
  $mm1 .= "              </tbody>\n";
  $mm1 .= "            </table>\n";
  $mm1 .= "          </div>\n";
  $mm1 .= "          <div id=\"3-$companyid\" class=\"tab-pane fade\" style=\"padding:20px;\">\n";
  // Get project list
  $q3 = $db->prepare("SELECT P.*, U.fullname, U.email FROM j_projects P, j_users U WHERE P.userid = U.id AND P.companyid = :companyid ORDER BY P.status, P.updated DESC");
  $q3->bindValue(':companyid', $companyid, PDO::PARAM_INT);
  $q3->execute();
  $mm1 .= "            <h4>A total of $nProjects projects</h4>\n";
  $mm1 .= "            <table class=\"table table-condensed table-hover\">\n";
  $mm1 .= "              <thead>\n";
  $mm1 .= "                <tr class=\"bg-info\">\n";
  $mm1 .= "                  <th width=\"10%\">ID</th><th width=\"15%\">Project</th><th width=\"30%\">Owner</th><th width=\"15%\">Created</th><th width=\"15%\"><i class=\"pe-sort-amount-desc pe-fw orange\"></i> Last updated</th><th width=\"15%\"><i class=\"pe-sort-amount-asc pe-fw orange\"></i> Status</th>\n";
  $mm1 .= "                </tr>\n";
  $mm1 .= "              </thead>\n";
  $mm1 .= "              <tbody>\n";
  while ($rrr = $q3->fetchObject()) {
    $status = status_project($rrr->status, true, true);
    $created = ago($rrr->created);
    $updated = ago($rrr->updated);
    if ($rrr->status == 4) {
      $mm1 .= "                <tr class=\"lightgrey\">\n";
      $mm1 .= "                  <td>$rrr->id</td><td>$rrr->title</td><td>$rrr->fullname <span class=\"small\">(<a href=\"mailto:$rrr->email\">$rrr->email</a>)</span></td><td>$created</td><td>$updated</td><td>$status</td>\n";
      $mm1 .= "                </tr>\n";
    } else if ($rrr->status == 0) {
      $mm1 .= "                <tr class=\"lightgrey\">\n";
      $mm1 .= "                  <td>$rrr->id</td><td>$rrr->title</td><td>$rrr->fullname <span class=\"small\">(<a href=\"mailto:$rrr->email\">$rrr->email</a>)</span></td><td>$created</td><td>$updated</td><td>$status</td>\n";
      $mm1 .= "                </tr>\n";
    } else {
      $mm1 .= "                <tr>\n";
      $mm1 .= "                  <td>$rrr->id</td><td>$rrr->title</td><td>$rrr->fullname <span class=\"small\">(<a href=\"mailto:$rrr->email\">$rrr->email</a>)</span></td><td>$created</td><td>$updated</td><td>$status</td>\n";
      $mm1 .= "                </tr>\n";
    }
  }
  $mm1 .= "              </tbody>\n";
  $mm1 .= "            </table>\n";
  $mm1 .= "          </div>\n";
  $mm1 .= "          <div id=\"4-$companyid\" class=\"tab-pane fade\" style=\"padding:20px;\">\n";
  // Get project list
  $q4 = $db->prepare("SELECT B.*, U.fullname, U.email FROM j_board B, j_users U WHERE B.userid = U.id AND B.companyid = :companyid ORDER BY B.created DESC");
  $q4->bindValue(':companyid', $companyid, PDO::PARAM_INT);
  $q4->execute();
  $mm1 .= "            <h4>A total of $nBoards messages</h4>\n";
  $mm1 .= "            <table class=\"table table-condensed table-hover\">\n";
  $mm1 .= "              <thead>\n";
  $mm1 .= "                <tr class=\"bg-info\">\n";
  $mm1 .= "                  <th width=\"10%\">ID</th><th width=\"45%\">Topic</th><th width=\"30%\">Post by</th><th width=\"15%\"><i class=\"pe-sort-amount-desc pe-fw orange\"></i> Date</th>\n";
  $mm1 .= "                </tr>\n";
  $mm1 .= "              </thead>\n";
  $mm1 .= "              <tbody>\n";
  while ($rrrr = $q4->fetchObject()) {
    $created = ago($rrrr->created);
    $mm1 .= "                <tr>\n";
    $mm1 .= "                  <td>$rrrr->id</td><td>$rrrr->head</td><td>$rrrr->fullname <span class=\"small\">(<a href=\"mailto:$rrrr->email\">$rrrr->email</a>)</span></td><td>$created</td>\n";
    $mm1 .= "                </tr>\n";
  }
  $mm1 .= "              </tbody>\n";
  $mm1 .= "            </table>\n";
  $mm1 .= "          </div>\n";
  $mm1 .= "        </div>\n";
  $mm1 .= "      </td>\n";
  $mm1 .= "    </tr>\n";
  $i++;
}
$userListing = json_encode($userListEachNew, JSON_PRETTY_PRINT);
$mm1 .= "  </tbody>\n";
$mm1 .= "</table>\n";
$mm1 .= "<style>\n";
$mm1 .= "  .list-group-item-again { padding: 5px 10px; }\n";
$mm1 .= "</style>\n";

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

$mm1 .= "<script type=\"text/javascript\">\n";
$mm1 .= "  function showRow(e, rowIndex) { showhideRow(rowIndex, true); e.preventDefault(); return false; }\n";
$mm1 .= "  function hideRow(e, rowIndex) { showhideRow(rowIndex, false); e.preventDefault(); return false; }\n";
$mm1 .= "  function showhideRow(rowIndex, show) {\n";
$mm1 .= "    document.getElementById(\"firstrow\" + rowIndex).style.backgroundColor = show ? \"#eee\" : \"\";\n";
$mm1 .= "    document.getElementById(\"row\" + rowIndex).style.display = show ? \"\" : \"none\";\n";
$mm1 .= "    document.getElementById(\"rowhide\" + rowIndex).style.display = show ? \"\" : \"none\";\n";
$mm1 .= "    document.getElementById(\"rowshow\" + rowIndex).style.display =  show ? \"none\" : \"\";\n";
$mm1 .= "  }\n";
$mm1 .= "</script>\n";


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
  }
  $redirect = $me."&m=0";
  header("location: $redirect");
  exit;
}

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
    $redirect = $me."&m=6&d=".$d;
    header("location: $redirect");
    exit;
  } else {
    $add = ""; $move = 0;
    if ($_POST['ufullname'] != $ufullname) { $add .= "fullname = :fullname, "; $move = 1; }
    if ($_POST['uemail'] != $uemail) { $add .= "email = :email, "; $move = 1; }
    if ($_POST['umobile'] != $umobile) { $add .= "mobile = :mobile, "; $move = 1; }
    if ($_POST['ulevel'] != $ulevel) { $add .= "level = :level, "; $move = 1; }
    if ($_POST['ustatus'] != $ustatus) { $add .= "status = :status, "; $move = 1; }
    if ($_POST['ucompanyid'] != $ucompanyid) { $add .= "companyid = :companyid, "; $move = 1; }
    if ($_POST['uavatar'] != $uavatar) { $add .= "avatar = :avatar, "; $move = 1; }
    $add = substr_replace($add, '', -2);
    if ($move == 0) {
      $redirect = $me."&m=7&d=".$d;
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
      $redirect = $me."&m=8&d=".$d;
      header("location: $redirect");
      exit;
    }
  }
}


$title = "Administration";
pageHeader($title);
echo "<h2>$title</h2>\n";
echo "<p class=\"introtext\">This is an administration page which contains all necessary utility tools which are used for managing clients effectively.</p>\n";

if ($_GET['m'] == "0") { $message = mksuccess("You have successfully created a new company."); echo "<p>$message</p>\n"; }
else { echo "<p></p>\n"; }

echo "<hr>\n";
echo "<h3>Client at a glance</h3>\n";
echo "<p>Currently we have a total of $countcompany companies comprising of $allUsers users, $allProjects projects, and $allBoards messages.</p>\n";
echo "<div align=\"right\"><a class=\"btn btn-success btn-sm\" data-toggle=\"modal\" data-target=\"#addingcompany\"><i class=\"pe-plus-circle pe-lg pe-fw\"></i> Add a new company</a></div>\n";
echo "<br>\n";
echo $mm1;

$mm2 .= "<hr>\n";
if ($cfullname) { $mm2 .= "<h4>Editing $cfullname</h4>\n"; }
else { $mm2 .= "<h4>Editing a company</h4>\n"; }
$mm2 .= "<div class=\"row\">\n";
$mm2 .= "  <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">Select a company to edit:</div>\n";
$mm2 .= "  <div class=\"col-xs-8 col-sm-8 col-md-8 col-lg-8\">\n";
$mm2 .= "    <form method=\"get\" action=\"$me\">\n";
$mm2 .= "      <input type=\"hidden\" name=\"w\" value=\"admin\">\n";
$mm2 .= "      <select class=\"form-control input-sm\" name=\"c\" onchange=\"this.form.submit()\">\n";
$mm2 .= "        <option value=\"\">-- select a company from this list --</option>\n";
$mm2 .= $companylist;
$mm2 .= "      </select>\n";
$mm2 .= "    </form>\n";
$mm2 .= "  </div>\n";
$mm2 .= "</div>\n";
$mm2 .= "<br>\n";
//echo $mm2;

if ($_GET['m'] == "1") { $message = mksuccess("You have successfully uploaded and replaced the company's logo."); $mm3 .= "<p>$message</p>\n"; }
else if ($_GET['m'] == "2") { $message = mksuccess("You have successfully updated the company's information."); $mm3 .= "<p>$message</p>\n"; }
else if ($_GET['m'] == "3") { $message = mkerror("All required fields cannot be blank, please fix and try again."); $mm3 .= "<p>$message</p>\n"; }
else if ($_GET['m'] == "4") { $message = mkinfo("No changes detected. So no change has been made."); $mm3 .= "<p>$message</p>\n"; }
else if ($_GET['m'] == "5") { $message = mkwarn("You have removed the company logo. Please upload a new one now."); $mm3 .= "<p>$message</p>\n"; }
else { $mm3 .= "<p></p>\n"; }
$mm3 .= "<br>\n";

if ($logo) {
  if ($website) { $clientlogo = "<a href=\"$website\" title=\"$cfullname\" target=\"_blank\"><img src=\"$logo\" alt=\"$cfullname\" title=\"$cfullname\"></a>"; }
  else { $clientlogo = "<img src=\"$logo\" alt=\"$cfullname\" title=\"$cfullname\">"; }
} else { $clientlogo = "<img src=\"http://placehold.it/135x135\">"; }

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
$mm3 .= "    var $this = $(this);\n";
$mm3 .= "    $this.button('loading');\n";
$mm3 .= "    setTimeout(function() { $this.button('reset'); }, 1000);\n";
$mm3 .= "    setTimeout(function() { $('#saveupload').submit(); }, 1200);\n";
$mm3 .= "  });\n";
$mm3 .= "</script>\n";

if ($c) { echo $mm2; echo $mm3; }

// --------------------

$mm4 .= "<hr>\n";
if ($ufullname) { $mm4 .= "<h4>Editing $ufullname</h4>\n"; }
else { $mm4 .= "<h4>Editing a user</h4>\n"; }
$mm4 .= "<div class=\"row\">\n";
$mm4 .= "  <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">Select a user to edit:</div>\n";
$mm4 .= "  <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">\n";
$mm4 .= "    <select class=\"form-control input-sm\" name=\"selectcompany\" id=\"selectcompany\" onChange=\"changecompany(this.value);\">\n";
$mm4 .= "      <option value=\"\" disabled selected>Select a company</option>\n";
$mm4 .= $companylist;
$mm4 .= "    </select>\n";
$mm4 .= "  </div>\n";
$mm4 .= "  <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">\n";
$mm4 .= "    <form method=\"get\" action=\"$me\">\n";
$mm4 .= "      <input type=\"hidden\" name=\"w\" value=\"admin\">\n";
$mm4 .= "      <select class=\"form-control input-sm\" name=\"d\" id=\"selectuser\" onchange=\"this.form.submit()\">\n";
$mm4 .= "        <option value=\"\" disabled selected><< Select a company first</option>\n";
// $mm4 .= "        <option></option>\n";
$mm4 .= "      </select>\n";
$mm4 .= "    </form>\n";
$mm4 .= "  </div>\n";
$mm4 .= "</div>\n";
$mm4 .= "<br>\n";
// echo $mm4;

if ($_GET['m'] == "6") { $message = mkerror("All required fields cannot be blank, please fix and try again."); $mm5 .= "<p>$message</p>\n"; }
else if ($_GET['m'] == "7") { $message = mkinfo("No changes detected. So no change has been made."); $mm5 .= "<p>$message</p>\n"; }
else if ($_GET['m'] == "8") { $message = mksuccess("You have successfully updated the user's information."); $mm5 .= "<p>$message</p>\n"; }
else { $mm5 .= "<p></p>\n"; }
$mm5 .= "<br>\n";

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
$mm5 .= DDcompany($ucompanyid);
$mm5 .= "          </select>\n";
$mm5 .= "        </span>\n";
$mm5 .= "        <span class=\"text-muted small\"><small>The company this user belongs to</small></span>\n";
$mm5 .= "      </p>\n";
$mm5 .= "      <p>\n";
$mm5 .= "        <label>Role</label> <span class=\"label label-red\">required</span>\n";
$mm5 .= "        <span class=\"input-group\">\n";
$mm5 .= "          <span class=\"input-group-addon\"><i class=\"pe-flag pe-fw\"></i></span>\n";
$mm5 .= "          <select class=\"form-control input-sm\" name=\"ulevel\">\n";
$mm5 .= DDrole($ulevel);
$mm5 .= "          </select>\n";
$mm5 .= "        </span>\n";
$mm5 .= "        <span class=\"text-muted small\"><small>The company this user belongs to</small></span>\n";
$mm5 .= "      </p>\n";
$mm5 .= "      <p>\n";
$mm5 .= "        <label>Status</label> <span class=\"label label-red\">required</span>\n";
$mm5 .= "        <span class=\"input-group\">\n";
$mm5 .= "          <span class=\"input-group-addon\"><i class=\"pe-lightbulb-o pe-fw\"></i></span>\n";
$mm5 .= "          <select class=\"form-control input-sm\" name=\"ustatus\">\n";
$mm5 .= DDstatus($ustatus);
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
$mm5 .= "    <input type=\"hidden\" name=\"userid\" value=\"$d\">\n";
$mm5 .= "    <button type=\"submit\" class=\"btn btn-warning\">Save <i class=\"pe-check-circle-o\"></i></button>\n";
$mm5 .= "    <button type=\"reset\" class=\"btn btn-default\">Cancel <i class=\"pe-times-circle-o\"></i></button>\n";
$mm5 .= "  </p>\n";
$mm5 .= "</form>\n";
$mm5 .= "<script type=\"text/javascript\">\n";
$mm5 .= "  var jsonData = $userListing;\n";
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

if ($d) { echo $mm4; echo $mm5; }

?>


<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
