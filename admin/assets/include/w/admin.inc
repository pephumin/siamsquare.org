<?php

$title = "Administration";
pageHeader($title);
echo "<h2>$title</h2>";

// Get company list
$q1 = $db->prepare("SELECT * FROM j_companies");
// $q1->bindValue(':companyid', $_SESSION["companyid"], PDO::PARAM_INT);
$q1->execute();
$count = $q1->rowCount();
echo "<h4>Total of $count companies</h4>\n";
echo "<div class=\"rows\">\n";
while ($row = $q1->fetchObject()) {
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
  echo "  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 bg-info\">\n";
  echo "    <h4>$fullname <small>($fullname_th)</small></h4>\n";
  echo "    <p class=\"small\">$address</p>\n";
  echo "    <p class=\"small\">Tel: $telephone<br>Fax: $fax</p>\n";
  echo "    <p class=\"small\">Email: $email<br>Web: $website</p>\n";
  echo "    <p class=\"small\">$description</p>\n";
  echo "    <p class=\"small\">$description_th</p>\n";
  echo "  </div>\n";
}
echo "</div>\n";

?>

<h2>Team members</h2>
<p>User with an account level of Manager will be able to manage your team members. This includes an ability to create new users, edit existing users, or even suspend or delete users where required.</p>
<p><strong>It is important to note that once a new member has been created, the new account has to be activated before it can be used</strong> (<a href="http://www.siamsquare.org/admin/setup/?d=activation" title="Account Activation">http://www.siamsquare.org/admin/setup/?d=activation</a>).</p>
<p></p><br>






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
