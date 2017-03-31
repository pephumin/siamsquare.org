<?php

$title = "Administration";
pageHeader($title);
echo "<h2>$title</h2>\n";
echo "<p class=\"introtext\">This is an administration page which contains all necessary utility tools which are used for managing clients effectively.</p>\n";
echo "<p class=\"introtext\"></p>\n";

// Get company list
$q1 = $db->prepare("SELECT C.*, (SELECT COUNT(*) FROM j_users AS U WHERE U.companyid = C.id) AS nUsers, (SELECT COUNT(*) FROM j_projects AS P WHERE P.companyid = C.id) AS nProjects FROM j_companies AS C");
// $q1->bindValue(':companyid', $_SESSION["companyid"], PDO::PARAM_INT);
$q1->execute();
$countcompany = $q1->rowCount();
echo "<h4>Total of $countcompany companies</h4>\n";
echo "<table class=\"table small\">\n";
echo "  <thead>\n";
echo "    <tr class=\"bg-success\">\n";
echo "      <th width=\"10%\"><i class=\"pe-info-circle pe-fw\"></i> No.</th>\n";
echo "      <th width=\"40%\"><i class=\"pe-building pe-fw\"></i> Company</th>\n";
echo "      <th width=\"20%\"><i class=\"pe-clock-o pe-fw\"></i> Since</th>\n";
echo "      <th width=\"15%\"><i class=\"pe-user pe-fw\"></i> Users</th>\n";
echo "      <th width=\"15%\"><i class=\"pe-cube pe-fw\"></i> Projects</th>\n";
echo "    </tr>\n";
echo "  </thead>\n";
echo "  <tbody>\n";

//echo "<div class=\"rows\">\n";
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
  $nProjects = $row->nProjects;
  echo "    <tr>\n";
  echo "      <td><a data-toggle=\"collapse\" href=\"#$companyid\" aria-expanded=\"false\" aria-controls=\"$companyid\">$companyid</a></td>\n";
  echo "      <td>$name</td>\n";
  echo "      <td>$created</td>\n";
  echo "      <td>$nUsers</td>\n";
  echo "      <td>$nProjects</td>\n";
  echo "    </tr>\n";
  echo "    <tr class=\"collapse\" id=\"$companyid\">\n";
  echo "      <td colspan=\"5\">\n";
  echo "        <div class=\"panel-group\" id=\"a-$companyid\" role=\"tablist\" aria-multiselectable=\"true\">\n";
  echo "          <div class=\"panel panel-default\">\n";
  echo "            <div class=\"panel-heading panel-heading-again\" role=\"tab\" id=\"h1-$companyid\">\n";
  echo "              <h4 class=\"panel-title panel-title-small\"><a role=\"button\" data-toggle=\"collapse\" data-parent=\"#a-$companyid\" href=\"#c1-$companyid\" aria-expanded=\"false\" aria-controls=\"c1-$companyid\">Company information</a></h4>\n";
  echo "            </div>\n";
  echo "            <div id=\"c1-$companyid\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"h1-$companyid\">\n";
  echo "              <div class=\"panel-body\">\n";
  if ($logo) { echo "                <div class=\"pull-right\" style=\"margin-top:0px\"><img src=\"$logo\" title=\"$fullname\"></div>\n"; }
  echo "                <h4>$name</h4>\n";
  echo "                <table class=\"table table-hover table-condensed\">\n";
  echo "                  <tbody>\n";
  echo "                    <tr>\n";
  echo "                      <td width=\"35%\">Full name:</td>\n";
  echo "                      <td width=\"65%\">$fullname</td>\n";
  echo "                    </tr>\n";
  echo "                    <tr>\n";
  echo "                      <td width=\"35%\"></td>\n";
  echo "                      <td width=\"65%\">$fullname_th</td>\n";
  echo "                    </tr>\n";
  echo "                    <tr>\n";
  echo "                      <td width=\"35%\">Address:</td>\n";
  echo "                      <td width=\"65%\">$address</td>\n";
  echo "                    </tr>\n";
  echo "                    <tr>\n";
  echo "                      <td width=\"35%\">Telephone:</td>\n";
  echo "                      <td width=\"65%\">$telephone</td>\n";
  echo "                    </tr>\n";
  echo "                    <tr>\n";
  echo "                      <td width=\"35%\">Fax:</td>\n";
  echo "                      <td width=\"65%\">$fax</td>\n";
  echo "                    </tr>\n";
  echo "                    <tr>\n";
  echo "                      <td width=\"35%\">Email:</td>\n";
  echo "                      <td width=\"65%\">$email</td>\n";
  echo "                    </tr>\n";
  echo "                    <tr>\n";
  echo "                      <td width=\"35%\">Description:</td>\n";
  echo "                      <td width=\"65%\">$description</td>\n";
  echo "                    </tr>\n";
  echo "                    <tr>\n";
  echo "                      <td width=\"35%\"></td>\n";
  echo "                      <td width=\"65%\">$description_th</td>\n";
  echo "                    </tr>\n";
  echo "                  </tbody>\n";
  echo "                </table>\n";
  echo "              </div>\n";
  echo "            </div>\n";
  echo "          </div>\n";
  echo "          <div class=\"panel panel-default\">\n";
  echo "            <div class=\"panel-heading panel-heading-again\" role=\"tab\" id=\"h2-$companyid\">\n";
  echo "              <h4 class=\"panel-title panel-title-small\"><a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#a-$companyid\" href=\"#c2-$companyid\" aria-expanded=\"true\" aria-controls=\"c2-$companyid\">Users</a></h4>\n";
  echo "            </div>\n";
  echo "            <div id=\"c2-$companyid\" class=\"panel-collapse collapse in\" role=\"tabpanel\" aria-labelledby=\"h2-$companyid\">\n";
  echo "              <div class=\"panel-body\">\n";
  // Get user list
  $q2 = $db->prepare("SELECT * FROM j_users WHERE companyid = :companyid");
  // $q2 = $db->prepare("SELECT U.fullname AS fullname, U.email AS email, P.* FROM j_users U, j_projects P WHERE companyid = :companyid");
  $q2->bindValue(':companyid', $companyid, PDO::PARAM_INT);
  $q2->execute();
  echo "                <h4>A total of $nUsers users</h4>\n";
  echo "                <div class=\"list-group\">\n";
  while ($rr = $q2->fetchObject()) {
    echo "                  <a class=\"list-group-item\">$rr->fullname ($rr->email)</a>\n";
  }
  echo "                </div>\n";
  echo "              </div>\n";
  echo "            </div>\n";
  echo "          </div>\n";
  echo "          <div class=\"panel panel-default\">\n";
  echo "            <div class=\"panel-heading panel-heading-again\" role=\"tab\" id=\"h3-$companyid\">\n";
  echo "              <h4 class=\"panel-title panel-title-small\"><a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#a-$companyid\" href=\"#c3-$companyid\" aria-expanded=\"false\" aria-controls=\"c3-$companyid\">Projects</a></h4>\n";
  echo "            </div>\n";
  echo "            <div id=\"c3-$companyid\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"h3-$companyid\">\n";
  echo "              <div class=\"panel-body\">\n";
  // Get project list
  $q3 = $db->prepare("SELECT * FROM j_projects WHERE companyid = :companyid");
  $q3->bindValue(':companyid', $companyid, PDO::PARAM_INT);
  $q3->execute();
  echo "                <h4>A total of $nProjects projects</h4>\n";
  echo "                <div class=\"list-group\">\n";
  while ($rrr = $q3->fetchObject()) {
    echo "                  <a class=\"list-group-item\">$rrr->title ($rrr->id)</a>\n";
  }
  echo "                </div>\n";
  echo "              </div>\n";
  echo "            </div>\n";
  echo "          </div>\n";
  echo "        </div>\n";
  echo "      </td>\n";
  echo "    </tr>\n";
}
echo "    <tr>\n";
echo "      <td colspan=\"2\">Add a new company</td>\n";
echo "      <td colspan=\"2\"><input type=\"text\" class=\"form-control input-sm\"></td>\n";
echo "      <td><input type=\"submit\" class=\"btn btn-warning btn-sm\" value=\"Add\"></td>\n";
echo "    </tr>\n";
echo "  </tbody>\n";
echo "</table>\n";

?>



<style media="screen">
  .panel-heading-again { color: #31708f !important; background-color: #d9edf7 !important; padding: 8px 12px; }
  .panel-title-small { font-size: 14px; font-weight: bold; }
</style>

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
