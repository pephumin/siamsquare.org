<?php

$me = "/admin/?w=admin";

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
  $redirect = $me."&m=1";
  header("location: $redirect");
  exit;
}

$title = "Administration";
pageHeader($title);
echo "<h2>$title</h2>\n";
echo "<p class=\"introtext\">This is an administration page which contains all necessary utility tools which are used for managing clients effectively.</p>\n";
// echo "<p class=\"introtext\"></p>\n";

if ($_GET['m'] == "1") { $message = mksuccess("You have successfully created a new company."); echo "<p>$message</p>\n"; }
// else if ($_GET['m'] == "2") { $message = mkwarn("The selected message have been deleted."); echo "<p>$message</p>\n"; }
else { echo "<p></p>\n"; }

// Get company list
$q1 = $db->prepare("SELECT C.*, (SELECT COUNT(*) FROM j_users AS U WHERE U.companyid = C.id) AS nUsers, (SELECT COUNT(*) FROM j_projects AS P WHERE P.companyid = C.id) AS nProjects, (SELECT COUNT(*) FROM j_board AS B WHERE B.companyid = C.id) AS nBoards FROM j_companies AS C");
// $q1->bindValue(':companyid', $_SESSION["companyid"], PDO::PARAM_INT);
$q1->execute();
$countcompany = $q1->rowCount();
$mm1 .= "<table class=\"table small\">\n";
$mm1 .= "  <thead>\n";
$mm1 .= "    <tr class=\"bg-success\">\n";
$mm1 .= "      <th style=\"text-align:left\" width=\"10%\"><i class=\"pe-info-circle pe-fw\"></i> No.</th>\n";
$mm1 .= "      <th style=\"text-align:left\" width=\"25%\"><i class=\"pe-building pe-fw\"></i> Company</th>\n";
$mm1 .= "      <th style=\"text-align:left\" width=\"20%\"><i class=\"pe-clock-o pe-fw\"></i> Registered (updated)</th>\n";
$mm1 .= "      <th style=\"text-align:right\" width=\"15%\"><i class=\"pe-user pe-fw\"></i> Users</th>\n";
$mm1 .= "      <th style=\"text-align:right\" width=\"15%\"><i class=\"pe-cube pe-fw\"></i> Projects</th>\n";
$mm1 .= "      <th style=\"text-align:right\" width=\"15%\"><i class=\"pe-comment-o pe-fw\"></i> Messages</th>\n";
$mm1 .= "    </tr>\n";
$mm1 .= "  </thead>\n";
$mm1 .= "  <tbody>\n";
while ($row = $q1->fetchObject()) {
  $companyid = $row->id;
  $name = $row->company;
  $fullname = $row->fullname;
  $fullname_th = $row->fullname_th;
  $address = $row->address;
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
  $mm1 .= "    <tr>\n";
  $mm1 .= "      <td style=\"text-align:left\"><a data-toggle=\"collapse\" href=\"#$companyid\" aria-expanded=\"false\" aria-controls=\"$companyid\">$companyid</a></td>\n";
  $mm1 .= "      <td style=\"text-align:left\">$name</td>\n";
  $mm1 .= "      <td style=\"text-align:left\">$created ($updated)</td>\n";
  $mm1 .= "      <td style=\"text-align:right\">$nUsers</td>\n";
  $mm1 .= "      <td style=\"text-align:right\">$nProjects</td>\n";
  $mm1 .= "      <td style=\"text-align:right\">$nBoards</td>\n";
  $mm1 .= "    </tr>\n";
  $mm1 .= "    <tr class=\"collapse\" id=\"$companyid\">\n";
  $mm1 .= "      <td colspan=\"6\" style=\"padding:30px\">\n";
  $mm1 .= "        <nav>\n";
  $mm1 .= "          <ul class=\"nav nav-tabs\">\n";
  $mm1 .= "            <li class=\"active\"><a href=\"#1-$companyid\" data-toggle=\"tab\"><i class=\"pe-info-circle pe-fw\"></i> Information</a></li>\n";
  $mm1 .= "            <li><a href=\"#2-$companyid\" data-toggle=\"tab\"><i class=\"pe-user pe-fw\"></i> Users <span class=\"badge\">$nUsers</span></a></li>\n";
  $mm1 .= "            <li><a href=\"#3-$companyid\" data-toggle=\"tab\"><i class=\"pe-cube pe-fw\"></i> Projects <span class=\"badge\">$nProjects</span></a></li>\n";
  $mm1 .= "            <li><a href=\"#4-$companyid\" data-toggle=\"tab\"><i class=\"pe-comment-o pe-fw\"></i> Messages <span class=\"badge\">$nBoards</span></a></li>\n";
  $mm1 .= "          </ul>\n";
  $mm1 .= "        </nav>\n";
  $mm1 .= "        <div class=\"tab-content\" style=\"border:1px #ddd solid;border-top-color: transparent;\">\n";
  $mm1 .= "          <div id=\"1-$companyid\" class=\"tab-pane fade in active\" style=\"padding:20px;\">\n";
  if ($logo) { $mm1 .= "            <div class=\"pull-right\" style=\"margin-top:0px\"><img src=\"$logo\" title=\"$fullname\"></div>\n"; }
  $mm1 .= "            <h4>$name</h4>\n";
  $mm1 .= "            <table class=\"table table-hover table-condensed\">\n";
  $mm1 .= "              <tbody>\n";
  $mm1 .= "                <tr>\n";
  $mm1 .= "                  <td width=\"20%\">Full name</td>\n";
  $mm1 .= "                  <td width=\"10%\"><button class=\"btn btn-default btn-tiny\"><i class=\"pe-language pe-fw\"></i> EN</button></td>\n";
  $mm1 .= "                  <td width=\"70%\">$fullname</td>\n";
  $mm1 .= "                </tr>\n";
  $mm1 .= "                <tr>\n";
  $mm1 .= "                  <td width=\"20%\"></td>\n";
  $mm1 .= "                  <td width=\"10%\"><button class=\"btn btn-default btn-tiny\"><i class=\"pe-language pe-fw\"></i> TH</button></td>\n";
  $mm1 .= "                  <td width=\"70%\">$fullname_th</td>\n";
  $mm1 .= "                </tr>\n";
  $mm1 .= "                <tr>\n";
  $mm1 .= "                  <td width=\"30%\" colspan=\"2\">Address</td>\n";
  $mm1 .= "                  <td width=\"70%\">$address</td>\n";
  $mm1 .= "                </tr>\n";
  $mm1 .= "                <tr>\n";
  $mm1 .= "                  <td width=\"30%\" colspan=\"2\">Telephone</td>\n";
  $mm1 .= "                  <td width=\"70%\">$telephone</td>\n";
  $mm1 .= "                </tr>\n";
  $mm1 .= "                <tr>\n";
  $mm1 .= "                  <td width=\"30%\" colspan=\"2\">Fax</td>\n";
  $mm1 .= "                  <td width=\"70%\">$fax</td>\n";
  $mm1 .= "                </tr>\n";
  $mm1 .= "                <tr>\n";
  $mm1 .= "                  <td width=\"30%\" colspan=\"2\">Email</td>\n";
  $mm1 .= "                  <td width=\"70%\">$email</td>\n";
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
  $mm1 .= "                  <td width=\"30%\" colspan=\"2\">Since</td>\n";
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
  $q2 = $db->prepare("SELECT * FROM j_users WHERE companyid = :companyid");
  // $q2 = $db->prepare("SELECT U.fullname AS fullname, U.email AS email, P.* FROM j_users U, j_projects P WHERE companyid = :companyid");
  $q2->bindValue(':companyid', $companyid, PDO::PARAM_INT);
  $q2->execute();
  $mm1 .= "            <h4>A total of $nUsers users</h4>\n";
  $mm1 .= "            <div class=\"list-group\">\n";
  while ($rr = $q2->fetchObject()) {
    $role = role($rr->level);
    $mm1 .= "              <a class=\"list-group-item list-group-item-again\">$rr->fullname ($rr->email) - $role</a>\n";
  }
  $mm1 .= "            </div>\n";
  $mm1 .= "          </div>\n";
  $mm1 .= "          <div id=\"3-$companyid\" class=\"tab-pane fade\" style=\"padding:20px;\">\n";
  // Get project list
  $q3 = $db->prepare("SELECT P.*, U.fullname FROM j_projects P, j_users U WHERE P.userid = U.id AND P.companyid = :companyid");
  $q3->bindValue(':companyid', $companyid, PDO::PARAM_INT);
  $q3->execute();
  $mm1 .= "            <h4>A total of $nProjects projects</h4>\n";
  $mm1 .= "            <table class=\"table table-condensed table-hover\">\n";
  $mm1 .= "              <thead>\n";
  $mm1 .= "                <tr class=\"bg-info\">\n";
  $mm1 .= "                  <th width=\"35%\"><i class=\"pe-cube pe-fw\"></i> Project</th><th width=\"20%\"><i class=\"pe-user pe-fw\"></i> Owner</th><th width=\"25%\"><i class=\"pe-calendar pe-fw\"></i> Since (Last updated)</th><th width=\"20%\"><i class=\"pe-hourglass-start pe-fw\"></i> Stage</th>\n";
  $mm1 .= "                </tr>\n";
  $mm1 .= "              </thead>\n";
  $mm1 .= "              <tbody>\n";
  while ($rrr = $q3->fetchObject()) {
    $stage = status_project($rrr->status, true);
    $created = ago($rrr->created);
    $updated = ago($rrr->updated);
    $mm1 .= "                <tr>\n";
    $mm1 .= "                  <td>$rrr->title ($rrr->id)</td><td>$rrr->fullname</td><td>$created ($updated)</td><td>$stage</td>\n";
    $mm1 .= "                </tr>\n";
  }
  $mm1 .= "              </tbody>\n";
  $mm1 .= "            </table>\n";
  $mm1 .= "          </div>\n";
  $mm1 .= "          <div id=\"4-$companyid\" class=\"tab-pane fade\" style=\"padding:20px;\">\n";
  // Get project list
  $q4 = $db->prepare("SELECT B.*, U.fullname FROM j_board B, j_users U WHERE B.userid = U.id AND B.companyid = :companyid");
  $q4->bindValue(':companyid', $companyid, PDO::PARAM_INT);
  $q4->execute();
  $mm1 .= "            <h4>A total of $nBoards messages</h4>\n";
  $mm1 .= "            <table class=\"table table-condensed table-hover\">\n";
  $mm1 .= "              <thead>\n";
  $mm1 .= "                <tr class=\"bg-info\">\n";
  $mm1 .= "                  <th width=\"60%\"><i class=\"pe-comment-o pe-fw\"></i> Topic</th><th width=\"20%\"><i class=\"pe-user pe-fw\"></i> Post by</th><th width=\"20%\"><i class=\"pe-calendar pe-fw\"></i> Date</th>\n";
  $mm1 .= "                </tr>\n";
  $mm1 .= "              </thead>\n";
  $mm1 .= "              <tbody>\n";
  while ($rrrr = $q4->fetchObject()) {
    $created = ago($rrrr->created);
    $mm1 .= "                <tr>\n";
    $mm1 .= "                  <td>$rrrr->head</td><td>$rrrr->fullname</td><td>$created</td>\n";
    $mm1 .= "                </tr>\n";
  }
  $mm1 .= "              </tbody>\n";
  $mm1 .= "            </table>\n";
  $mm1 .= "          </div>\n";
  $mm1 .= "        </div>\n";
  $mm1 .= "      </td>\n";
  $mm1 .= "    </tr>\n";
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
$mm2 .= "<br>\n";

echo "<h3>Client at a glance</h3>\n";
echo "<p>Currently we have a total of $countcompany companies comprising of $allUsers users, $allProjects projects, and $allBoards messages.</p>\n";
echo "<div align=\"right\"><a class=\"btn btn-success btn-sm\" data-toggle=\"modal\" data-target=\"#addingcompany\"><i class=\"pe-building pe-fw\"></i> Add a new company</a></div>\n";
echo "<br>\n";
echo $mm1;
echo $mm2;

?>


<br>

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





<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
