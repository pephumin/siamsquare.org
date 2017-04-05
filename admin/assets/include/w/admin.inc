<?php

$me = "/admin/?w=admin";

if ($_GET['c']) { $c = $_GET['c']; }
else if ($_POST['companyid']) { $c = $_POST['companyid']; }
else { $c = ""; }

// Get company list
$q1 = $db->prepare("SELECT C.*, (SELECT COUNT(*) FROM j_users AS U WHERE U.companyid = C.id) AS nUsers, (SELECT COUNT(*) FROM j_projects AS P WHERE P.companyid = C.id) AS nProjects, (SELECT COUNT(*) FROM j_board AS B WHERE B.companyid = C.id) AS nBoards FROM j_companies AS C ORDER BY C.id DESC");
$q1->execute();
$countcompany = $q1->rowCount();
$mm1 .= "<table class=\"table small\">\n";
$mm1 .= "  <thead>\n";
$mm1 .= "    <tr class=\"bg-success\">\n";
$mm1 .= "      <th style=\"text-align:left\" width=\"10%\"><i class=\"pe-sort-amount-desc pe-fw\"></i> No.</th>\n";
$mm1 .= "      <th style=\"text-align:left\" width=\"19%\"><i class=\"pe-building pe-fw\"></i> Company</th>\n";
$mm1 .= "      <th style=\"text-align:left\" width=\"18%\"><i class=\"pe-clock-o pe-fw\"></i> Registered</th>\n";
$mm1 .= "      <th style=\"text-align:left\" width=\"18%\"><i class=\"pe-clock-o pe-fw\"></i> Last updated</th>\n";
$mm1 .= "      <th style=\"text-align:right\" width=\"11%\"><i class=\"pe-users pe-fw\"></i> Users</th>\n";
$mm1 .= "      <th style=\"text-align:right\" width=\"12%\"><i class=\"pe-cubes pe-fw\"></i> Projects</th>\n";
$mm1 .= "      <th style=\"text-align:right\" width=\"12%\"><i class=\"pe-comments-o pe-fw\"></i> Messages</th>\n";
$mm1 .= "    </tr>\n";
$mm1 .= "  </thead>\n";
$mm1 .= "  <tbody>\n";
$i = 1; $companylist = "";
while ($row = $q1->fetchObject()) {
  $companyid = $row->id;
  $name = $row->company;
  $fullname = $row->fullname;
  $fullname_th = $row->fullname_th;
  $address = $row->address;
  $address_th = $row->address_th;
  $description = $row->description;
  $description_th = $row->description_th;
  $logo = $row->logo;
  $website = $row->website;
  $email = $row->email;
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
  if ($companyid == $c) { $companylist .= "        <option value=\"$companyid\" selected>$fullname</option>\n"; }
  else { $companylist .= "        <option value=\"$companyid\">$fullname</option>\n"; }
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
  if ($logo) { $mm1 .= "            <div class=\"pull-right\" style=\"margin-top:0px\"><img src=\"$logo\" title=\"$fullname\"></div>\n"; }
  $mm1 .= "            <h4>$name</h4>\n";
  $mm1 .= "            <table class=\"table table-hover table-condensed\">\n";
  $mm1 .= "              <tbody>\n";
  $mm1 .= "                <tr>\n";
  $mm1 .= "                  <td width=\"20%\">Company name</td>\n";
  $mm1 .= "                  <td width=\"10%\"><button class=\"btn btn-default btn-tiny\"><i class=\"pe-language pe-fw\"></i> EN</button></td>\n";
  $mm1 .= "                  <td width=\"70%\">$fullname</td>\n";
  $mm1 .= "                </tr>\n";
  $mm1 .= "                <tr>\n";
  $mm1 .= "                  <td width=\"20%\"></td>\n";
  $mm1 .= "                  <td width=\"10%\"><button class=\"btn btn-default btn-tiny\"><i class=\"pe-language pe-fw\"></i> TH</button></td>\n";
  $mm1 .= "                  <td width=\"70%\">$fullname_th</td>\n";
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
  $mm1 .= "                  <td width=\"70%\"><a href=\"mailto:$email\">$email</a></td>\n";
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
  $mm1 .= "          </div>\n";
  $mm1 .= "          <div id=\"2-$companyid\" class=\"tab-pane fade\" style=\"padding:20px;\">\n";
  // Get user list
  $q2 = $db->prepare("SELECT * FROM j_users WHERE companyid = :companyid ORDER BY level DESC, status DESC");
  // $q2 = $db->prepare("SELECT U.fullname AS fullname, U.email AS email, P.* FROM j_users U, j_projects P WHERE companyid = :companyid");
  $q2->bindValue(':companyid', $companyid, PDO::PARAM_INT);
  $q2->execute();
  $mm1 .= "            <h4>A total of $nUsers users</h4>\n";
  $mm1 .= "            <table class=\"table table-condensed table-hover\">\n";
  $mm1 .= "              <thead>\n";
  $mm1 .= "                <tr class=\"bg-info\">\n";
  $mm1 .= "                  <th width=\"10%\">ID</th><th width=\"30%\">Name (email)</th><th width=\"15%\"><i class=\"pe-sort-amount-desc pe-fw\"></i> Role</th><th width=\"15%\">Registered</th><th width=\"15%\">Last seen</th><th width=\"15%\"><i class=\"pe-sort-amount-desc pe-fw\"></i> Status</th>\n";
  $mm1 .= "                </tr>\n";
  $mm1 .= "              </thead>\n";
  $mm1 .= "              <tbody>\n";
  while ($rr = $q2->fetchObject()) {
    $role = role($rr->level, true);
    $status = status_user($rr->status, true, true);
    $created = ago($rr->created);
    $updated = ago($rr->updated);
    if ($rr->lastlogin) { $lastlogin = ago($rr->lastlogin); } else { $lastlogin = "Never login"; }
    $mm1 .= "                <tr>\n";
    $mm1 .= "                  <td>$rr->id</td><td>$rr->fullname <span class=\"small\">(<a href=\"mailto:$rr->email\">$rr->email</a>)</span></td><td>$role</td><td>$created</td><td>$lastlogin</td><td>$status</td>\n";
    $mm1 .= "                </tr>\n";
  }
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
  $mm1 .= "                  <th width=\"10%\">ID</th><th width=\"15%\">Project</th><th width=\"30%\">Owner</th><th width=\"15%\">Created</th><th width=\"15%\"><i class=\"pe-sort-amount-desc pe-fw\"></i> Last updated</th><th width=\"15%\"><i class=\"pe-sort-amount-asc pe-fw\"></i> Status</th>\n";
  $mm1 .= "                </tr>\n";
  $mm1 .= "              </thead>\n";
  $mm1 .= "              <tbody>\n";
  while ($rrr = $q3->fetchObject()) {
    $status = status_project($rrr->status, true, true);
    $created = ago($rrr->created);
    $updated = ago($rrr->updated);
    if ($rrr->status == 0) {
      $mm1 .= "                <tr class=\"red\">\n";
      $mm1 .= "                  <td>$rrr->id</td><td>$rrr->title</td><td>$rrr->fullname <span class=\"small\">(<a href=\"mailto:$rrr->email\">$rrr->email</a>)</span></td><td>$created</td><td>$updated</td><td>$status</td>\n";
      $mm1 .= "                </tr>\n";
    } else if ($rrr->status == 4) {
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
  $mm1 .= "                  <th width=\"10%\">ID</th><th width=\"45%\">Topic</th><th width=\"30%\">Post by</th><th width=\"15%\"><i class=\"pe-sort-amount-desc pe-fw\"></i> Date</th>\n";
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
$mm1 .= "  </tbody>\n";
$mm1 .= "</table>\n";
$mm1 .= "<style>\n";
$mm1 .= "  .list-group-item-again { padding: 5px 10px; }\n";
$mm1 .= "</style>\n";

$mm2 .= "<div class=\"modal fade\" id=\"addingcompany\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"addingcompany\">\n";
$mm2 .= "  <div class=\"modal-dialog\" role=\"document\">\n";
$mm2 .= "    <div class=\"modal-content\">\n";
$mm2 .= "      <form class=\"\" action=\"$me\" method=\"post\">\n";
$mm2 .= "        <div class=\"modal-header\">\n";
$mm2 .= "          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n";
$mm2 .= "          <h4 class=\"modal-title\">Adding a new company</h4>\n";
$mm2 .= "        </div>\n";
$mm2 .= "        <div class=\"modal-body\">\n";
$mm2 .= "          <p>Below are the minimum requirements for adding a new company to the database. This function will add a new company with one user (Manager level) and will post a welcome message to the board.</p>\n";
$mm2 .= "          <div class=\"input-group\"><span class=\"input-group-addon\"><i class=\"pe-building pe-fw\"></i> Company:</span><input type=\"text\" class=\"form-control\" placeholder=\"Only one word which can be a short name or an initial\" name=\"company\"></div><br>\n";
$mm2 .= "          <div class=\"input-group\"><span class=\"input-group-addon\"><i class=\"pe-user pe-fw\"></i> User name:</span><input type=\"text\" class=\"form-control\" placeholder=\"Name of the main contact person for this company\" name=\"user\"></div><br>\n";
$mm2 .= "          <div class=\"input-group\"><span class=\"input-group-addon\"><i class=\"pe-envelope pe-fw\"></i> User email:</span><input type=\"email\" class=\"form-control\" placeholder=\"Email of the main contact person for this company\" name=\"email\"></div><br>\n";
$mm2 .= "          <p class=\"pull-right small red\">* All of these fields are required.</p><br>\n";
$mm2 .= "        </div>\n";
$mm2 .= "        <div class=\"modal-footer\">\n";
$mm2 .= "          <button type=\"submit\" class=\"btn btn-warning\" name=\"addingcompany\" value=\"1\">Add <i class=\"pe-check-circle-o\"></i></button>\n";
$mm2 .= "          <button type=\"reset\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel <i class=\"pe-times-circle-o\"></i></button>\n";
$mm2 .= "        </div>\n";
$mm2 .= "      </form>\n";
$mm2 .= "    </div>\n";
$mm2 .= "  </div>\n";
$mm2 .= "</div>\n";

// --------------------

if ($_POST['addingcompany'] == 1) {
  if (($_POST['company']) || ($_POST['user']) || ($_POST['email'])) {
    // Add a new company
    $q0A = $db->prepare("INSERT INTO j_companies (company) VALUES (:company)");
    $q0A->bindValue(':company', $_POST['company'], PDO::PARAM_STR);
    $q0A->execute();
    $id = $db->lastInsertId();
    // Add a new user in Manager level
    $q0B = $db->prepare("INSERT INTO j_users (fullname, email, password, level) VALUES (:fullname, :email, :password, :level)");
    $q0B->bindValue(':fullname', $_POST['user'], PDO::PARAM_STR);
    $q0B->bindValue(':email', $_POST['email'], PDO::PARAM_STR);
    $q0B->bindValue(':password', 'xxx', PDO::PARAM_STR);
    $q0B->bindValue(':level', '6', PDO::PARAM_INT);
    $q0B->execute();
    // Post a new welcome message on the board
    $q0C = $db->prepare("INSERT INTO j_board (head, body, userid, companyid) VALUES (:head, :body, :userid, :companyid)");
    $q0C->bindValue(':head', 'Welcome to your message board', PDO::PARAM_STR);
    $q0C->bindValue(':body', $_POST['body'], PDO::PARAM_STR);
    $q0C->bindValue(':userid', '000002', PDO::PARAM_INT);
    $q0C->bindValue(':companyid', $id, PDO::PARAM_INT);
    $q0C->execute();
  }
  $redirect = $me."&m=0";
  header("location: $redirect");
  exit;
}

// --------------------

if ($c) {
  $q1B = $db->prepare("SELECT * FROM j_companies WHERE id = :companyid");
  $q1B->bindValue(':companyid', $c, PDO::PARAM_INT);
  $q1B->execute();
  while ($row = $q1B->fetchObject()) {
    $name = $row->company;
    $fullname = $row->fullname;
    $fullname_th = $row->fullname_th;
    $address = $row->address;
    $address_th = $row->address_th;
    $description = $row->description;
    $description_th = $row->description_th;
    $logo = $row->logo;
    $website = $row->website;
    $email = $row->email;
    $telephone = $row->telephone;
    $fax = $row->fax;
    $ccreated = ago($row->created);
    $cupdated = ago($row->updated);
  }
  if (isset($_POST['uploadsubmit'])) {
    $uploadfile = $_FILES["uploadfile"]["tmp_name"];
    $folder = "assets/img/tmp/";
    move_uploaded_file($_FILES["uploadfile"]["tmp_name"], $folder.$_FILES["uploadfile"]["name"]);
    echo '<img id="uploadlogo" src="'.$folder."".$_FILES["uploadfile"]["name"].'">';
    exit;
  }
  if ($_POST['savethislogo'] == 1) {
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
    $q2A = $db->prepare("UPDATE j_companies SET logo = :logo WHERE id = :id");
    $q2A->bindValue(':logo', $target, PDO::PARAM_STR);
    $q2A->bindValue(':id', $_POST['c'], PDO::PARAM_INT);
    $q2A->execute();
    $ql1 = $db->prepare("INSERT INTO j_users_logs (userid, ip, data, critical) VALUE (:userid, :ip, '".$_SESSION['email']." changed the company logo for $name', '3')");
    $ql1->bindValue(':userid', $_SESSION['userid'], PDO::PARAM_INT);
    $ql1->bindValue(':ip', $_SESSION['ip'], PDO::PARAM_STR);
    $ql1->execute();
    $redirect = $me."&m=1&c=".$c;
    header("location: $redirect");
    exit;
  }
  if ($_POST['savethisinfo'] == 1) {
    if ((empty($_POST['fullname'])) || (empty($_POST['fullname_th'])) || (empty($_POST['description'])) || (empty($_POST['description_th'])) || (empty($_POST['address'])) || (empty($_POST['website']))) {
      $redirect = $me."&m=3&c=".$c;
      header("location: $redirect");
      exit;
    } else {
      $add = ""; $move = 0;
      if ($_POST['fullname'] != $fullname) { $add .= "fullname = :fullname, "; $move = 1; }
      if ($_POST['fullname_th'] != $fullname_th) { $add .= "fullname_th = :fullname_th, "; $move = 1; }
      if ($_POST['description'] != $description) { $add .= "description = :description, "; $move = 1; }
      if ($_POST['description_th'] != $description_th) { $add .= "description_th = :description_th, "; $move = 1; }
      if ($_POST['address'] != $address) { $add .= "address = :address, "; $move = 1; }
      if ($_POST['address_th'] != $address_th) { $add .= "address_th = :address_th, "; $move = 1; }
      if ($_POST['website'] != $website) { $add .= "website = :website, "; $move = 1; }
      if ($_POST['email'] != $email) { $add .= "email = :email, "; $move = 1; }
      if ($_POST['telephone'] != $telephone) { $add .= "telephone = :telephone, "; $move = 1; }
      if ($_POST['fax'] != $fax) { $add .= "fax = :fax, "; $move = 1; }
      $add = substr_replace($add, '', -2);
      if ($move == 0) {
        $redirect = $me."&m=4&c=".$c;
        header("location: $redirect");
        exit;
      } else {
        $q2B = $db->prepare("UPDATE j_companies SET ".$add." WHERE id = :companyid");
        if ($_POST['fullname'] != $fullname) { $q2B->bindValue(':fullname', $_POST['fullname'], PDO::PARAM_STR); }
        if ($_POST['fullname_th'] != $fullname_th) { $q2B->bindValue(':fullname_th', $_POST['fullname_th'], PDO::PARAM_STR); }
        if ($_POST['description'] != $description) { $q2B->bindValue(':description', $_POST['description'], PDO::PARAM_STR); }
        if ($_POST['description_th'] != $description_th) { $q2B->bindValue(':description_th', $_POST['description_th'], PDO::PARAM_STR); }
        if ($_POST['address'] != $address) { $q2B->bindValue(':address', $_POST['address'], PDO::PARAM_STR); }
        if ($_POST['address_th'] != $address_th) { $q2B->bindValue(':address_th', $_POST['address_th'], PDO::PARAM_STR); }
        if ($_POST['website'] != $website) { $q2B->bindValue(':website', $_POST['website'], PDO::PARAM_STR); }
        if ($_POST['email'] != $email) { $q2B->bindValue(':email', $_POST['email'], PDO::PARAM_STR); }
        if ($_POST['telephone'] != $telephone) { $q2B->bindValue(':telephone', $_POST['telephone'], PDO::PARAM_STR); }
        if ($_POST['fax'] != $fax) { $q2B->bindValue(':fax', $_POST['fax'], PDO::PARAM_STR); }
        $q2B->bindValue(':companyid', $_POST['companyid'], PDO::PARAM_INT);
        $q2B->execute();
        $ql2 = $db->prepare("INSERT INTO j_users_logs (userid, ip, data, critical) VALUE (:userid, :ip, '".$_SESSION['email']." edited the company info for $name', '3')");
        $ql2->bindValue(':userid', $_SESSION['userid'], PDO::PARAM_INT);
        $ql2->bindValue(':ip', $_SESSION['ip'], PDO::PARAM_STR);
        $ql2->execute();
        $redirect = $me."&m=2&c=".$c;
        header("location: $redirect");
        exit;
      }
    }
  }
  if ($_GET['removelogo'] == "✓") {
    $q2C = $db->prepare("UPDATE j_companies SET logo = NULL WHERE id = :companyid");
    $q2C->bindValue(':companyid', $_GET['c'], PDO::PARAM_INT);
    $q2C->execute();
    $filetoremove = $_SERVER['DOCUMENT_ROOT'].'/admin/'.$logo;
    unlink($filetoremove);
    $ql3 = $db->prepare("INSERT INTO j_users_logs (userid, ip, data, critical) VALUE (:userid, :ip, '".$_SESSION['email']." removed the company logo for $name', '3')");
    $ql3->bindValue(':userid', $_SESSION['userid'], PDO::PARAM_INT);
    $ql3->bindValue(':ip', $_SESSION['ip'], PDO::PARAM_STR);
    $ql3->execute();
    $redirect = $me."&m=5&c=".$c;
    header("location: $redirect");
    exit;
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
echo $mm2;

echo "<hr>\n";
echo "<h3>Managing companies</h3>\n";
echo "<div class=\"row\">\n";
echo "  <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">Select a company to edit:</div>\n";
echo "  <div class=\"col-xs-8 col-sm-8 col-md-8 col-lg-8\">\n";
echo "    <form method=\"get\" action=\"$me\">\n";
echo "      <input type=\"hidden\" name=\"w\" value=\"admin\">\n";
echo "      <select class=\"form-control input-sm\" name=\"c\" onchange=\"this.form.submit()\">\n";
echo "        <option value=\"\">-- select a company from this list --</option>\n";
echo $companylist;
echo "      </select>\n";
echo "    </form>\n";
echo "  </div>\n";
echo "</div>\n";
echo "<br>\n";

if ($_GET['m'] == "1") { $message = mksuccess("You have successfully uploaded and replaced the company's logo."); echo "<p>$message</p>\n"; }
else if ($_GET['m'] == "2") { $message = mksuccess("You have successfully updated the company's information."); echo "<p>$message</p>\n"; }
else if ($_GET['m'] == "3") { $message = mkerror("All required fields cannot be blank, please fix and try again."); echo "<p>$message</p>\n"; }
else if ($_GET['m'] == "4") { $message = mkinfo("No changes detected. So no change has been made."); echo "<p>$message</p>\n"; }
else if ($_GET['m'] == "5") { $message = mkwarn("You have removed the company logo. Please upload a new one now."); echo "<p>$message</p>\n"; }
else { echo "<p></p>\n"; }
echo "<br>\n";

if ($logo) {
  if ($website) { $clientlogo = "<a href=\"$website\" title=\"$fullname\" target=\"_blank\"><img src=\"$logo\" alt=\"$fullname\" title=\"$fullname\"></a>"; }
  else { $clientlogo = "<img src=\"$logo\" alt=\"$fullname\" title=\"$fullname\">"; }
} else { $clientlogo = "<img src=\"http://placehold.it/135x135\">"; }

?>

<form id="companyupdate" action="<?php echo $me; ?>" method="post">
  <div class="row">
    <div class="col-xs-12 col-sm-9 col-md-9 col-lg-9">
      <p>
        <label>Company name in English</label> <span class="label label-red">required</span>
        <span class="input-group">
          <span class="input-group-addon">EN</span>
<?php if ($c) { ?>
          <input type="text" class="form-control" name="fullname" onclick="this.select()" placeholder="Company name in full"<?php if ($fullname) { echo " value=\"$fullname\""; } ?>>
<?php } else { ?>
          <input type="text" class="form-control" name="fullname" onclick="this.select()" placeholder="Company name in full" disabled>
<?php } ?>
        </span>
        <span class="text-muted small"><small>The full company name in English based on official company registration</small></span>
      </p>
      <p>
        <label>Company name in Thai</label> <span class="label label-red">required</span>
        <span class="input-group">
          <span class="input-group-addon">TH</span>
<?php if ($c) { ?>
          <input type="text" class="form-control" name="fullname_th" onclick="this.select()" style="font-family:'boon'; font-size:1.1rem; color:black" placeholder="ชื่ออย่างเป็นทางการของบริษัท"<?php if ($fullname_th) { echo " value=\"$fullname_th\""; } ?>>
<?php } else { ?>
          <input type="text" class="form-control" name="fullname_th" onclick="this.select()" style="font-family:'boon'; font-size:1.1rem; color:black" placeholder="ชื่ออย่างเป็นทางการของบริษัท" disabled>
<?php } ?>
        </span>
        <span class="text-muted small"><small>The full company name in Thai based on official company registration</small></span>
      </p>
    </div>
    <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3" style="text-align:right">
      <p></p>
<?php if ($c) { ?>
      <div><?php echo $clientlogo; ?></div>
      <p class="small" style="margin-top:20px"><small>[ <i class="pe-upload pe-fw"></i> <a data-toggle="modal" data-target="#upload" style="cursor:pointer">Upload</a> : <i class="pe-remove pe-fw"></i> <a href="<?php echo $me; ?>&amp;c=<?php echo $c; ?>&amp;removelogo=✓">Remove</a> ]</small></p>
<?php } ?>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
      <p>
        <label>Description in English</label> <span class="label label-red">required</span>
<?php if ($c) { ?>
        <textarea class="form-control" row="5" name="description" onclick="this.select()" style="height:120px" placeholder="A few sentences describing some key outstanding points of the company" style="height:100px"><?php if ($description) { echo $description; } ?></textarea>
<?php } else { ?>
        <textarea class="form-control" row="5" name="description" onclick="this.select()" style="height:120px" placeholder="A few sentences describing some key outstanding points of the company" style="height:100px" disabled></textarea>
<?php } ?>
        <span class="text-muted small"><small>A brief detail in English such as products &amp; services or outstanding aspects.</small></span>
      </p>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
      <p>
        <label>Description in Thai</label> <span class="label label-red">required</span>
<?php if ($c) { ?>
        <textarea class="form-control" row="5" name="description_th" onclick="this.select()" style="font-family:'boon'; font-size:1.1rem; color:black; height:120px" placeholder="สองสามประโยคสั่นๆที่อธิบายได้ดีถึงบริษัท หรือจุดเด่นในมุมต่างๆของบริษัท" style="height:100px"><?php if ($description_th) { echo $description_th; } ?></textarea>
<?php } else { ?>
        <textarea class="form-control" row="5" name="description_th" onclick="this.select()" style="font-family:'boon'; font-size:1.1rem; color:black; height:120px" placeholder="สองสามประโยคสั่นๆที่อธิบายได้ดีถึงบริษัท หรือจุดเด่นในมุมต่างๆของบริษัท" style="height:100px" disabled></textarea>
<?php } ?>
        <span class="text-muted small"><small>A brief detail in Thai such as products &amp; services or outstanding aspects.</small></span>
      </p>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
      <p>
        <label>Billing address in English</label> <span class="label label-red">required</span>
<?php if ($c) { ?>
        <textarea class="form-control" row="5" name="address" onclick="this.select()" style="height:135px" placeholder="Please enter the full address of the company broken down into multiple lines"><?php if ($address) { echo $address; } ?></textarea>
<?php } else { ?>
        <textarea class="form-control" row="5" name="address" onclick="this.select()" style="height:135px" placeholder="Please enter the full address of the company broken down into multiple lines" disabled></textarea>
<?php } ?>
        <span class="text-muted small"><small>This will be used for all paperworks such as billing, invoicing, etc.</small></span>
      </p>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
      <p>
        <label>Billing address in Thai</label> <span class="label label-blue">optional</span>
<?php if ($c) { ?>
        <textarea class="form-control" row="5" name="address_th" onclick="this.select()" style="font-family:'boon'; font-size:1.1rem; color:black; height:135px" placeholder="ที่อยู่บริษัทเป็นภาษาไทยอย่างเต็มรูปแบบ สามารถบันทึกได้หลายบรรทัด"><?php if ($address_th) { echo $address_th; } ?></textarea>
<?php } else { ?>
        <textarea class="form-control" row="5" name="address_th" onclick="this.select()" style="font-family:'boon'; font-size:1.1rem; color:black; height:135px" placeholder="ที่อยู่บริษัทเป็นภาษาไทยอย่างเต็มรูปแบบ สามารถบันทึกได้หลายบรรทัด" disabled></textarea>
<?php } ?>
        <span class="text-muted small"><small class="orange"><strong>Only for client based in Thailand, others please skip this.</strong></small></span>
      </p>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
      <p>
        <label>Email contact</label> <span class="label label-blue">optional</span>
        <span class="input-group">
          <span class="input-group-addon"><i class="pe-envelope pe-fw"></i></span>
<?php if ($c) { ?>
          <input type="email" class="form-control" name="email" onclick="this.select()" placeholder="email@company.com"<?php if ($email) { echo " value=\"$email\""; } ?>>
<?php } else { ?>
          <input type="email" class="form-control" name="email" onclick="this.select()" placeholder="email@company.com" disabled>
<?php } ?>
        </span>
        <span class="text-muted small"><small>This should be a generic email contact rather than specific to a person</small></span>
      </p>
      <p>
        <label>Website</label> <span class="label label-blue">optional</span>
        <span class="input-group">
          <span class="input-group-addon"><i class="pe-globe pe-fw"></i></span>
<?php if ($c) { ?>
          <input type="text" class="form-control" name="website" onclick="this.select()" placeholder="http://www.companywebsite.com"<?php if ($website) { echo " value=\"$website\""; } ?>>
<?php } else { ?>
          <input type="text" class="form-control" name="website" onclick="this.select()" placeholder="http://www.companywebsite.com" disabled>
<?php } ?>
        </span>
        <span class="text-muted small"><small>The company website which can optionally be set to display in the survey</small></span>
      </p>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
      <p>
        <label>Telephone</label> <span class="label label-blue">optional</span><br>
        <span class="input-group">
          <span class="input-group-addon"><i class="pe-phone pe-fw"></i></span>
<?php if ($c) { ?>
          <input type="text" class="form-control" name="telephone" onclick="this.select()" placeholder="+662 3335555"<?php if ($telephone) { echo " value=\"$telephone\""; } ?>>
<?php } else { ?>
          <input type="text" class="form-control" name="telephone" onclick="this.select()" placeholder="+662 3335555" disabled>
<?php } ?>
        </span>
        <span class="text-muted small"><small>The main telephone contact for the company following this format: +662 xxxxxxx</small></span>
      </p>
      <p>
        <label>Fax</label> <span class="label label-blue">optional</span><br>
        <span class="input-group">
          <span class="input-group-addon"><i class="pe-fax pe-fw"></i></span>
<?php if ($c) { ?>
          <input type="text" class="form-control" name="fax" onclick="this.select()" placeholder="+662 3334444"<?php if ($fax) { echo " value=\"$fax\""; } ?>>
<?php } else { ?>
          <input type="text" class="form-control" name="fax" onclick="this.select()" placeholder="+662 3334444" disabled>
<?php } ?>
        </span>
        <span class="text-muted small"><small>An optional fax number for the company following the same format as telephone</small></span>
      </p>
    </div>
  </div>
  <br>
  <p class="text-center">
    <input type="hidden" name="savethisinfo" value="1">
<?php if ($c) { ?>
    <input type="hidden" name="companyid" value="<?php echo $c; ?>">
    <button type="submit" class="btn btn-warning">Save <i class="pe-check-circle-o"></i></button>
    <button type="reset" class="btn btn-default">Cancel <i class="pe-times-circle-o"></i></button>
<?php } else { ?>
    <button type="submit" class="btn btn-warning" disabled>Save <i class="pe-check-circle-o"></i></button>
    <button type="reset" class="btn btn-default" disabled>Cancel <i class="pe-times-circle-o"></i></button>
<?php } ?>
  </p>
</form>

<?php if ($c) { ?>
<div class="modal fade" id="upload" tabindex="-1" role="dialog" aria-labelledby="upload">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title">Change the company logo</h4>
      </div>
      <div class="modal-body">
        <form action="<?php echo $me; ?>" id="uploadform" method="post" enctype="multipart/form-data">
          <input type="hidden" name="companyid" value="<?php echo $c; ?>">
          <p>You can upload a new logo below. No need to worry about the logo size as our system will resize your logo automatically to suit the display.</p>
          <label class="btn btn-default">Browse<input type="file" id="uploadfile" name="uploadfile" style="display:none" onchange="$('#upload-file-info').html($(this).val()); $('#uploadsubmit').removeAttr('disabled');"></label>
          <kbd id="upload-file-info">Please select an image file for your logo</kbd>
          <p style="margin-top:20px" class="small">Click <strong>"Upload this file"</strong> to upload the logo file, and then click <strong>"Save"</strong> to store it to our system.</p>
          <p style="margin-top:20px"><input type="submit" id="uploadsubmit" class="btn btn-primary" name='uploadsubmit' value="Upload this file" onclick='uploadlogo();' disabled></p>
          <div class="progress" id="uploadprogress" style="display:none"><div class="progress-bar progress-bar-info progress-bar-striped" id="bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"><span id="percent">0%</span></div></div>
          <br>
          <div id="uploadoutput"></div>
        </form>
      </div>
      <div class="modal-footer">
        <form action="<?php echo $me; ?>" id="saveupload" method="post" enctype="multipart/form-data">
          <input type="hidden" name="companyid" value="<?php echo $c; ?>">
          <input type="hidden" name="savethislogo" value="1">
          <input type="hidden" name="filetosave" id="savefile">
          <button id="savenewlogo" type="button" class="btn btn-warning" data-loading-text="<i class='pe-circle-o-notch pe-spin'></i> Saving..." data-reset-text="<i class='pe-save'></i> Saved <i class='pe-check-circle-o'></i>">Save <i class="pe-check-circle-o"></i></button>
          <button type="reset" class="btn btn-default" data-dismiss="modal">Cancel <i class="pe-times-circle-o"></i></button>
        </form>
      </div>
    </div>
  </div>
</div>
<script type="text/javascript">
  function uploadlogo() {
    var bar = $('#bar');
    var percent = $('#percent');
    $('#uploadform').ajaxForm({
      beforeSubmit: function() {
        document.getElementById("uploadprogress").style.display = "block";
        var percentVal = '0%';
        bar.width(percentVal);
        bar.attr("aria-valuenow", 0);
        percent.html(percentVal);
      },
      uploadProgress: function(event, position, total, percentComplete) {
        var percentVal = percentComplete + '%';
        bar.width(percentVal);
        bar.attr("aria-valuenow", percentComplete);
        percent.html(percentVal);
      },
    	success: function() {
        var percentVal = '100%';
        bar.width(percentVal);
        bar.attr("aria-valuenow", 100);
        percent.html(percentVal);
      },
      complete: function(xhr) {
        if (xhr.responseText != null) {
          document.getElementById("uploadoutput").innerHTML = xhr.responseText;
          var img = document.getElementById("uploadlogo").src;
          document.getElementById("savefile").setAttribute("value", img);
          window.setTimeout(function () { document.getElementById("uploadprogress").style.display = "none"; }, 1000);
        }
      }
    });
  }
  $('#savenewlogo').on('click', function() {
    var $this = $(this);
    $this.button('loading');
    setTimeout(function() { $this.button('reset'); }, 1000);
    setTimeout(function() { $('#saveupload').submit(); }, 1200);
  });
</script>
<?php } ?>


<hr>
<h3>Managing users</h3>

<h4>Project date start/stop - for compared with actual in progress page</h4>

<h4>admin script to add new account</h4>
<ul class="pe-ul">
  <li><i class="pe-li pe-check-square"></i> <p>Add a new company</p></li>
  <li><i class="pe-li pe-check-square"></i> <p>Add a new user with level = 6 and companyid to match</p></li>
  <li><i class="pe-li pe-check-square"></i> <p>Add a message to the board with the same message of 'welcome'</p></li>
  <li><i class="pe-li pe-check-square"></i> <p>Optional of adding 5-6 demo projects to show how they would be</p></li>
  <li><i class="pe-li pe-check-square"></i> <p>Progress to show demographic breakdown, not just total achievement</p></li>
  <li><i class="pe-li pe-check-square"></i> <p>Add an option to send data file in either JSON or CSV format to email</p></li>
  <li><i class="pe-li pe-check-square"></i> <p>HTML email applied for invitation/ reminder as well as registration/ password recovery </p></li>
  <li><i class="pe-li pe-check-square"></i> <p>Email function using mailer with temp password in URL and mark invite sent (done)</p></li>
  <li><i class="pe-li pe-check-square"></i> <p>Email function for reminder which will only send to those who are invited but not participated</p></li>
  <li><i class="pe-li pe-check-square"></i> <p>View respondent log mainly for participation vs. completion</p></li>
  <li><i class="pe-li pe-check-square"></i> <p>Graph result should be downloadable in PDF format</p></li>
  <li><i class="pe-li pe-check-square"></i> <p>Summary of all questions in one page displayed at the main result page</p></li>
  <li><i class="pe-li pe-check-square"></i> <p>One time token for non-registered respondents </p></li>
</ul>

<h4>Super user interface</h4>
<ul class="pe-ul">
  <li><i class="pe-li pe-check-square"></i> <p>Company list plus summary for each of them e.g. no. of projects, no. of users by level, etc.</p></li>
  <li><i class="pe-li pe-check-square"></i> <p>Edit each company including name, description, website, logo, etc. (done)</p></li>
  <li><i class="pe-li pe-check-square"></i> <p>Function to add a new company by </p></li>
    <ol>
      <li>Adding new company and it's necessary info</li>
      <li>Adding a new Manager and a demo user</li>
      <li>Adding a welcome greeting message posted in its board</li>
    </ol>
    <br>
  <li><i class="pe-li pe-check-square"></i> <p>Email function to add token for one time evaluation (track click and track submit)</p></li>
  <li><i class="pe-li pe-check-square"></i> <p>Tracking system to check for progress</p></li>
</ul>


<script type="text/javascript">
  function showRow(e, rowIndex) { showhideRow(rowIndex, true); e.preventDefault(); return false; }
  function hideRow(e, rowIndex) { showhideRow(rowIndex, false); e.preventDefault(); return false; }
  function showhideRow(rowIndex, show) {
    document.getElementById("firstrow" + rowIndex).style.backgroundColor = show ? "#eee" : "";
    // document.getElementById("firstrow" + rowIndex).style.borderTop = show ? "2px solid grey" : "";
    // document.getElementById("firstrow" + rowIndex).style.borderLeft = show ? "2px solid grey" : "";
    // document.getElementById("firstrow" + rowIndex).style.borderRight = show ? "2px solid grey" : "";
    document.getElementById("row" + rowIndex).style.display = show ? "" : "none";
    // document.getElementById("row" + rowIndex).style.borderBottom = show ? "2px solid grey" : "";
    // document.getElementById("row" + rowIndex).style.borderLeft = show ? "2px solid grey" : "";
    // document.getElementById("row" + rowIndex).style.borderRight = show ? "2px solid grey" : "";
    document.getElementById("rowhide" + rowIndex).style.display = show ? "" : "none";
    document.getElementById("rowshow" + rowIndex).style.display =  show ? "none" : "";
  }
</script>


<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
