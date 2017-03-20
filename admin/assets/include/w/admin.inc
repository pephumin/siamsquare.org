<?php

$title = "Todo List";
pageHeader($title);
echo "<h2>$title</h2>";

// Get company list
$q1 = $db->prepare("SELECT * FROM j_companies");
// $q1->bindValue(':companyid', $_SESSION["companyid"], PDO::PARAM_INT);
$q1->execute();
$count = $q1->rowCount();
while ($row = $q1->fetchObject()) {
  $name = $row->company;
  $fullname = $row->fullname;
  $address = $row->address;
  $description = $row->description;
  $logo = $row->logo;
  $website = $row->website;
  $email = $row->email;
  $telephone = $row->telephone;
  $fax = $row->fax;
  $created = ago($row->created);
  $updated = ago($row->updated);
}

echo $name;
echo "<br>\n";
echo $fullname;
echo "<br>\n";
echo $address;
echo "<br>\n";
echo $description;
echo "<br>\n";
echo $logo;
echo "<br>\n";
echo $website;
echo "<br>\n";
echo $email;
echo "<br>\n";
echo $telephone;
echo "<br>\n";
echo $fax;
echo "<br>\n";
echo $created;
echo "<br>\n";
echo $updated;

?>

<h2>Team members</h2><p>User with an account level of Manager will be able to manage your team members. This includes an ability to create new users, edit existing users, or even suspend or delete users where required.</p>
<p><strong>It is important to note that once a new member has been created, the new account has to be activated before it can be used</strong> (<a href="http://www.siamsquare.org/admin/setup/?d=activation" title="Account Activation">http://www.siamsquare.org/admin/setup/?d=activation</a>).</p>
<p></p><br>

<div class="rows">
    <div class="col-sm-12" style="text-align:right">
    <p class="pull-right"><a class="btn btn-success" data-bind="click: createNew, enable: !isNewMemberCreating()" href=""><i class="pe-user-plus pe-fw"></i> New member</a></p>
  </div>
    <div class="col-sm-12">
    <div id="showalert-create"></div><div id="showalert-delete"></div><div id="showalert-edit"></div><div id="showalert-suspend"></div><div id="showalert-reactivate"></div><div id="showalert-changerole"></div>
  </div>
</div>
<br>
<div class="row">
  <div data-bind="visible: isNewMemberCreating" class="col-xs-12 col-sm-7 col-md-4 col-lg-4" style="margin-bottom:20px">
    <div class="members">
      <div class="opq">
        <div class="members-header-new"></div>
        <div class="members-body">
          <h4 class="fullname">Create a new member</h4>
          <div class="email small">(Using the below avatar as a default)</div>
          <div class="input-group"><span class="input-group-addon"><small>Name:</small></span><input type="text" class="form-control input-sm" data-bind="textInput: newMemberName" onclick="this.select()" placeholder="Enter first and last name"></div><br>
          <div class="input-group"><span class="input-group-addon"><small>Email</small>:</span><input type="text" class="form-control input-sm" data-bind="textInput: newMemberEmail" onclick="this.select()" placeholder="Enter email address"></div><br>
          <a class="btn btn-primary btn-tiny" data-bind="click: postNew, enable: newMemberName() != '', enable: newMemberEmail() != ''" href=""><i class="pe-user-plus"></i> Create</a>
          <a class="btn btn-default btn-tiny" data-bind="click: cancelNew" href=""><i class="pe-times-circle-o"></i> Cancel</a><br><br>
          <small class="red">Only create using a working email</small>
        </div>
      </div>
    </div>
  </div>
  <!-- ko foreach: members -->
  <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6" style="margin-bottom:20px">
    <div class="members">
      <div class="ribbon" data-bind="visible: issuspended"><div class="ribbon-wrapper" data-toggle="tooltip" data-placement="left" title="This user is currently suspended. Only Manager can enable access to this user again by clicking Reactivate button."><div class="ribbon-text">Suspended</div></div></div>​
      <div class="opq" data-bind="css: { 'opaque': issuspended }">
        <div class="members-header"></div>
        <div class="members-body">
          <h4 data-bind="text: fullname" class="fullname"></h4>
          <div class="email small">(<span data-bind="text: email"></span>)</div>
          <h5 data-bind="text: role"></h5>
          <p class="small">
            <strong>No. of projects handled: <span data-bind="text: counts"></span></strong><br>
          </p>
          <p class="small">
            Registered: <span data-bind="text: created"></span><br>
            Last seen: <span data-bind="text: lastlogin2"></span><br>
          </p>
        </div>
        <div class="members-footer" data-bind="visible: showInfo()">
          <div class="row" data-bind="visible: !isEditingFullName()">
            <div class="col-sm-offset-1 col-sm-3" style="padding:2px 0px"><small>Name <a href="" data-bind="click: $parent.startEditFullName" title="Edit fullname"><i class="pe-edit"></i></a></small></div>
            <div class="col-sm-7" style="padding:2px 0px"><small data-bind="text: fullname"></small><br></div>
          </div>
          <div class="row" data-bind="visible: isEditingFullName()">
            <div class="col-sm-offset-1 col-sm-3" style="padding:2px 0px"><small>Name <a href="" data-bind="click: $parent.cancelEditFullName"><i class="pe-times-circle-o"></i></a></small></div>
            <div class="col-sm-7" style="padding:2px 0px"><small>
              <input data-bind="textInput: editingFullName, visible: isEditingFullName()" onclick="this.select()" placeholder="First and last name" class="form-control input-sm">
              <a class="btn btn-tiny" data-bind="click: $parent.postEditFullName, enable: fullname() != ''" href="">Change <i class="pe-check-circle-o"></i></a>
              <a class="btn btn-tiny" data-bind="click: $parent.cancelEditFullName" href="">Cancel <i class="pe-times-circle-o"></i></a>
            </small></div>
          </div>
          <div class="row" data-bind="visible: !isEditingEmail()">
            <div class="col-sm-offset-1 col-sm-3" style="padding:2px 0px"><small>Email <a href="" data-bind="click: $parent.startEditEmail" title="Edit email"><i class="pe-edit"></i></a></small></div>
            <div class="col-sm-7" style="padding:2px 0px"><small data-bind="text: email"></small><br></div>
          </div>
          <div class="row" data-bind="visible: isEditingEmail()">
            <div class="col-sm-offset-1 col-sm-3" style="padding:2px 0px"><small>Email <a href="" data-bind="click: $parent.cancelEditEmail"><i class="pe-times-circle-o"></i></a></small></div>
            <div class="col-sm-7" style="padding:2px 0px"><small>
              <input data-bind="textInput: editingEmail, visible: isEditingEmail()" onclick="this.select()" placeholder="email@company.com" class="form-control input-sm">
              <a class="btn btn-tiny" data-bind="click: $parent.postEditEmail, enable: email() != ''" href="">Change <i class="pe-check-circle-o"></i></a>
              <a class="btn btn-tiny" data-bind="click: $parent.cancelEditEmail" href="">Cancel <i class="pe-times-circle-o"></i></a>
            </small></div>
          </div>
          <div class="row" data-bind="visible: !isEditingMobile()">
            <div class="col-sm-offset-1 col-sm-3" style="padding:2px 0px"><small>Mobile <a href="" data-bind="click: $parent.startEditMobile" title="Edit mobile no."><i class="pe-edit"></i></a></small></div>
            <div class="col-sm-7" style="padding:2px 0px"><small data-bind="text: mobile"></small><br></div>
          </div>
          <div class="row" data-bind="visible: isEditingMobile()">
            <div class="col-sm-offset-1 col-sm-3" style="padding:2px 0px"><small>Mobile <a href="" data-bind="click: $parent.cancelEditMobile"><i class="pe-times-circle-o"></i></a></small></div>
            <div class="col-sm-7" style="padding:2px 0px"><small>
              <input data-bind="textInput: editingMobile, visible: isEditingMobile()" onclick="this.select()" placeholder="0813333333" class="form-control input-sm">
              <a class="btn btn-tiny" data-bind="click: $parent.postEditMobile, enable: mobile() != ''" href="">Change <i class="pe-check-circle-o"></i></a>
              <a class="btn btn-tiny" data-bind="click: $parent.cancelEditMobile" href="">Cancel <i class="pe-times-circle-o"></i></a>
            </small></div>
          </div>
          <div class="row" data-bind="visible: !isEditingLevel()">
            <div class="col-sm-offset-1 col-sm-3" style="padding:2px 0px"><small>Role <a href="" data-bind="click: $parent.startEditLevel" title="Edit user level"><i class="pe-edit"></i></a></small></div>
            <div class="col-sm-7" style="padding:2px 0px"><small data-bind="text: role"></small><br></div>
          </div>
          <div class="row" data-bind="visible: isEditingLevel()">
            <div class="col-sm-offset-1 col-sm-3" style="padding:2px 0px"><small>Role <a href="" data-bind="click: $parent.cancelEditLevel"><i class="pe-times-circle-o"></i></a></small></div>
            <div class="col-sm-7" style="padding:2px 0px">
              <select data-bind="options: rlist, optionsText: 'role', optionsValue: 'level', value: selectedRole, event: { change: $parent.changinglevel }" class="form-control input-sm"></select>
            </div>
          </div>
          <br>
        </div>
      </div>
      <p>
        <span data-bind="css: { 'opaque': issuspended }"><a class="btn btn-default btn-tiny ontop" data-bind="click: $parent.showInfo, css: { 'disabled': issuspended }"><i class="pe-cogs"></i> Edit <i class="" data-bind="css: {'pe-chevron-down': !showInfo(), 'pe-chevron-up': showInfo()}"></i></a></span>
        <a class="btn btn-success btn-tiny" data-bind="click: $parent.reactivate, visible: issuspended" href=""><i class="pe-pause-circle"></i> Reactivate</a>
        <a class="btn btn-warning btn-tiny" data-bind="click: $parent.suspend, visible: !issuspended" href=""><i class="pe-pause-circle"></i> Suspend</a>
        <span data-bind="visible: showInfo()">
          <!-- <a class="btn btn-danger btn-tiny" data-bind="click: $parent.delete, css: { 'disabled': issuspended }" href=""><i class="pe-trash"></i> Delete</a> -->
          <a class="btn btn-danger btn-tiny" data-bind="click: $parent.delete, css: { 'disabled': issuspended }" href="" data-toggle="modal" data-target="#confirm-delete" title="Delete this user"><i class="pe-trash"></i> Delete</a>
        </span>
      </p>
    </div>
  </div>
  <div data-bind="template: { name: 'confirm-delete-modal' }"></div>
  <!-- /ko -->
</div>



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
