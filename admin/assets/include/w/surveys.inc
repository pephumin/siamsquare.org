<?php

$title = "All survey projects";
$titleA = "Set up";
$titleB = "Data-collection";
$titleC = "Completed";
$titleD = "Archived";
$titleE = "Deleted";

$details = "All surveys that are belonged to either youself or the company. All of them are categorised into different stages from set up to completion.";
$detailsA = "Surveys in this stage are the ones under a development including questionnaire design &amp; translation, respondents uploading, template editing or even a pilot testing.";
$detailsB = "Surveys in this stageection are currently on fieldwork. We do not allow any changes to be made to the questionnaire at this stage anymore in order to prevent a mismatch between designed question and collected data at the analysis stage.";
$detailsC = "Surveys in this stage are ready for analysis as their fildwork period has ended. We provide online tools for the real-time result analysis with an option to download the data file for a more in-depth data manipulation.";
$detailsD = "All inactive surveys are kept in this stage which can be reactivated again when needed. They will be used as a reference to current surveys.";
$detailsE = "Surveys that have been deleted are shown in this section as a backup/recovery. This section will only be seen by managers and admin.";

if ($_GET['c'] == "A") { $title = $titleA; $details = $detailsA; }
else if ($_GET['c'] == "B") { $title = $titleB; $details = $detailsB; }
else if ($_GET['c'] == "C") { $title = $titleC; $details = $detailsC; }
else if ($_GET['d'] == "D") { $title = $titleD; $details = $detailsD; }
else if ($_GET['e'] == "E") { $title = $titleE; $details = $detailsE; }
else { $title = $title; $details = $details; }

pageHeader($title);
echo "<h2>$title</h2>\n";
echo "<p>$details</p>\n";

// Get user list
if ($_SESSION['level'] == 9) {
  $q1 = $db->prepare("SELECT U.id, U.email, U.fullname, U.level, U.companyid, C.company FROM j_users U, j_companies C WHERE U.companyid = C.id AND U.status >= 0 ORDER BY C.company ASC, U.level DESC");
} else {
  $q1 = $db->prepare("SELECT U.id, U.email, U.fullname, U.level, U.companyid, C.company FROM j_users U, j_companies C WHERE U.companyid = :companyid AND U.companyid = C.id AND U.status >= 0 ORDER BY U.level DESC");
  $q1->bindValue(':companyid', $_SESSION["companyid"], PDO::PARAM_INT);
}
$q1->execute();
$userlist = "[ \n";
while ($row = $q1->fetchObject()) { $userlist .= 'new UserListing('.$row->id.', "'.$row->fullname.'", "'.$row->email.'", "'.$row->company.'", '.$row->companyid.'), '."\n"; }
$userlist .= " ]";
?>

<br>

<?php if (!$_GET['c']) { ?>
<div class="row">
  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
    <nav>
      <ul class="nav nav-tabs">
        <li data-bind="css: {active: showActive() == 'A'}"><a data-bind="click: loadA" href=""><i class="pe-hourglass-start pe-fw"></i> <?php echo $titleA; ?></a></li>
        <li data-bind="css: {active: showActive() == 'B'}"><a data-bind="click: loadB" href=""><i class="pe-hourglass-half pe-fw"></i> <?php echo $titleB; ?></a></li>
        <li data-bind="css: {active: showActive() == 'C'}"><a data-bind="click: loadC" href=""><i class="pe-hourglass-end pe-fw"></i> <?php echo $titleC; ?></a></li>
        <li data-bind="css: {active: showActive() == 'D'}"><a data-bind="click: loadD" href=""><i class="pe-archive pe-fw"></i> <?php echo $titleD; ?></a></li>
<?php if ($_SESSION['level'] > 5) { ?>
        <li data-bind="css: {active: showActive() == 'E'}"><a data-bind="click: loadE" href=""><i class="pe-trash pe-fw"></i> <?php echo $titleE; ?></a></li>
<?php } ?>
      </ul>
    </nav>
  </div>
  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="margin-top:30px">
    <p data-bind="visible: showActive() == 'A'" class="text-muted"><?php echo $detailsA; ?></p>
    <p data-bind="visible: showActive() == 'B'" class="text-muted"><?php echo $detailsB; ?></p>
    <p data-bind="visible: showActive() == 'C'" class="text-muted"><?php echo $detailsC; ?></p>
    <p data-bind="visible: showActive() == 'D'" class="text-muted"><?php echo $detailsD; ?></p>
<?php if ($_SESSION['level'] > 5) { ?>
    <p data-bind="visible: showActive() == 'E'" class="text-muted"><?php echo $detailsE; ?></p>
<?php } ?>
  </div>
</div>
<?php } ?>

<div class="rows">
  <?php if ($_SESSION['level'] >= "5") { ?>
  <div class="col-sm-12" style="text-align:right">
    <p class="pull-right"><a href="" class="btn btn-success" data-bind="click: createNew, visible: showActive() == 'A', enable: !isNewSurveyCreating()"><i class="pe-cube pe-fw"></i> New project</a></p>
  </div>
  <?php } ?>
  <div class="col-sm-12">
    <div id="showalert-delete"></div><div id="showalert-restore"></div><div id="showalert-archive"></div><div id="showalert-move"></div><div id="showalert-pp"></div><div id="showalert-changeowner"></div>
  </div>
</div>


<div class="row">
<?php if ($_SESSION['level'] >= "5") { ?>
  <div data-bind="visible: isNewSurveyCreating() && showActive() == 'A'" class="col-xs-12 col-sm-6 col-md-6 col-lg-6" style="margin-bottom:20px">
    <div class="projects">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 projects-header-new">
        <div class="adminmovewrap"><i class="pe-cube pe-lg"></i></div>
        <h4>Create a new project</h4>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 projects-subhead-new">
        Enter a new project name and system will create it with default options
      </div>
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 projects-body-new">
        <br>
        <div class="input-group"><span class="input-group-addon"><small>Name:</small></span><input type="text" class="form-control input-sm" data-bind="textInput: newSurveyName" onclick="this.select()" placeholder="Enter the new project name"></div>
        <br>
        <div class="text-center">
          <a class="btn btn-success btn-tiny" data-bind="click: postNew, enable: newSurveyName() != ''" href=""><i class="pe-plus"></i> Create <i class="pe-check-circle-o"></i></a>
          <a class="btn btn-default btn-tiny" data-bind="click: cancelNew" href="">Cancel <i class="pe-times-circle-o"></i></a>
        </div>
      </div>
    </div>
  </div>
<?php } ?>
  <!-- ko foreach: surveys -->
  <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6" style="margin-bottom:20px">
    <div class="projects">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 projects-header">
        <?php if ($_SESSION['level'] == "9") { ?>
          <div class="adminmovewrap">
            <a href="" class="adminmove" title="Move to the next step" data-bind="click: $parent.one2two, visible: $parent.showActive() == 'A'"><i class="pe-arrow-circle-right pe-lg"></i></a>
            <a href="" class="adminmove" title="Move to the previous step" data-bind="click: $parent.two2one, visible: $parent.showActive() == 'B'"><i class="pe-arrow-circle-left pe-lg"></i></a>
            <a href="" class="adminmove" title="Move to the next step" data-bind="click: $parent.two2three, visible: $parent.showActive() == 'B'"><i class="pe-arrow-circle-right pe-lg"></i></a>
            <a href="" class="adminmove" title="Move to the previous step" data-bind="click: $parent.three2two, visible: $parent.showActive() == 'C'"><i class="pe-arrow-circle-left pe-lg"></i></a>
            <a href="" class="adminmove" title="Move to the next step" data-bind="click: $parent.three2four, visible: $parent.showActive() == 'C'"><i class="pe-arrow-circle-right pe-lg"></i></a>
            <a href="" class="adminmove" title="Move to the previous step" data-bind="click: $parent.four2three, visible: $parent.showActive() == 'D'"><i class="pe-arrow-circle-left pe-lg"></i></a>
            <a href="" class="adminmove" title="Move to the next step" data-bind="click: $parent.four2zero, visible: $parent.showActive() == 'D'"><i class="pe-arrow-circle-right pe-lg"></i></a>
            <a href="" class="adminmove" title="Move to the previous step" data-bind="click: $parent.zero2four, visible: $parent.showActive() == 'E'"><i class="pe-arrow-circle-left pe-lg"></i></a>
          </div>
        <?php } ?>
        <h4>Project <span data-bind="text: title"></span>  <span data-bind="if: owner" class="label-red" style="font-size:0.6rem">owner</span></h4>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 projects-subhead">
        <i class="pe-user pe-fw"></i> <strong data-bind="text: fullname"></strong> (<span data-bind="text: email"></span>) <i class="pe-building pe-fw"></i> <span data-bind="text: company"></span>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 projects-body">
        <div data-bind="if: canedit"><a class="btn btn-info btn-tiny pull-right" data-bind="click: $parent.showInfo"><i class="pe-cogs"></i> Info <i class="" data-bind="css: {'pe-chevron-down': !showInfo(), 'pe-chevron-up': showInfo()}"></i></a></div>
        <div class="projectinfo">
          <strong>Created:</strong> <span data-bind="text: created"></span><br>
          <strong>Updated:</strong> <span data-bind="text: updated"></span><br>
          <strong>Type:</strong> <span><span data-bind="text: pp"></span> <i class="pe-folder-o" data-bind="visible: pp == 'Private'"></i><i class="pe-folder-open-o" data-bind="visible: pp == 'Public'"></i></span>
          <a class="btn btn-default btn-tiny pull-right" data-bind="attr: { href: '/admin/?w=respondents&amp;s=' + id }, visible: pp == 'Private', css: { 'btn-primary': rD() > 0, 'disabled': $parent.showActive() == 'C' || $parent.showActive() == 'D' || $parent.showActive() == 'E' }"><span data-bind="text: rDFormatted(rD)"></span> respondent(s) <i class="pe-users"></i></a>
        </div>
        <a class="btn btn-default btn-tiny" data-bind="attr: { href: '/admin/?w=edit&amp;s=' + id }, visible: $parent.showActive() == 'A'">Questionnaire <i class="pe-edit"></i></a>
        <span data-bind="if: canedit"><a class="btn btn-default btn-tiny" data-bind="attr: { href: '/admin/?w=template&amp;s=' + id }, visible: (pp == 'Private' && $parent.showActive() == 'A') || (pp == 'Private' && $parent.showActive() == 'B')">Template <i class="pe-envelope"></i></a></span>
        <a class="btn btn-default btn-tiny" data-bind="attr: { href: '/r.php?w=pilot&amp;s=' + id }, visible: $parent.showActive() == 'A'" target="_blank">Pilot test <i class="pe-paper-plane"></i></a>
        <a class="btn btn-default btn-tiny" data-bind="attr: { href: '/admin/?w=progress&amp;s=' + id }, visible: $parent.showActive() == 'B' || $parent.showActive() == 'C'">Progress <i class="pe-flask"></i></a>
        <a class="btn btn-success btn-tiny" data-bind="attr: { href: '/r.php?s=' + id }, visible: $parent.showActive() == 'B'" target="_blank">Live <i class="pe-plane"></i></a>
        <a class="btn btn-default btn-tiny" data-bind="attr: { href: '/admin/?w=result&amp;s=' + id }, visible: $parent.showActive() == 'C' || $parent.showActive() == 'D'">Result <i class="pe-line-chart"></i></a>
        <a class="btn btn-warning btn-tiny" data-bind="click: $parent.archive, visible: $parent.showActive() == 'C'" href="">Archive <i class="pe-archive"></i></a>
        <a class="btn btn-warning btn-tiny" data-bind="click: $parent.restore, visible: $parent.showActive() == 'D'" href="">Restore <i class="pe-undo"></i></a>
        <a class="btn btn-danger btn-tiny" data-bind="click: $parent.delete, visible: $parent.showActive() == 'D'" href="">Delete <i class="pe-trash"></i></a>
        <a class="btn btn-danger btn-tiny" data-bind="click: $parent.undelete, visible: $parent.showActive() == 'E'" href="">Undelete <i class="pe-undo"></i></a>
      </div>

<?php if ($_SESSION['level'] >= "5") { ?>
      <div class="projects-footer" data-bind="visible: showInfo()">
        <table class="table">
          <tr data-bind="visible: showInfo, css: { 'bg-blue': owner , 'bg-showinfo': showInfo() }">
            <td width="25%" style="border-top: none">Name <a data-bind="if: canedit, click: $parent.startEdit, visible: $parent.showActive() == 'A' && !isEditing()" title="Change project name"> <i class="pe-edit"></i></a><a data-bind="click: $parent.cancelEdit, visible: isEditing()"><i class="pe-times-circle-o"></i></a></td>
            <td width="75%" style="border-top: none" colspan="2">
              <span data-bind="visible: !isEditing()"><strong><span data-bind="text: title"></span></strong><?php if ($_SESSION['level'] == "9") { ?> (surveyid = <span data-bind="text: id"></span>)<?php } ?></span>
              <span data-bind="visible: isEditing()"><input data-bind="textInput: editingName" onclick="this.select()" class="form-control input-sm"><a class="btn btn-sm" data-bind="click: $parent.postEdit, enable: title() != ''" href="">Rename <i class="pe-check-circle-o"></i></a><a class="btn btn-sm" data-bind="click: $parent.cancelEdit" href="">Cancel <i class="pe-times-circle-o"></i></a></span>
            </td>
          </tr>
          <tr data-bind="visible: showInfo, css: { 'bg-blue': owner , 'bg-showinfo': showInfo() }">
            <td style="border-top: none">Description <a data-bind="if: canedit, click: $parent.startEditDescription, visible: $parent.showActive() == 'A' && !isEditingDescription()" title="Change project description"> <i class="pe-edit"></i></a><a data-bind="click: $parent.cancelEditDescription, visible: isEditingDescription()"><i class="pe-times-circle-o"></i></a></td>
            <td style="border-top: none" colspan="2">
              <span data-bind="visible: !isEditingDescription(), text: description"></span>
              <span data-bind="visible: isEditingDescription()"><textarea data-bind="textInput: editingDescription, visible: isEditingDescription()" onclick="this.select()" class="form-control input-sm" rows="5"></textarea><a class="btn btn-sm" data-bind="click: $parent.postEditDescription, enable: description() != ''" href="">Update <i class="pe-check-circle-o"></i></a><a class="btn btn-sm" data-bind="click: $parent.cancelEditDescription" href="">Cancel <i class="pe-times-circle-o"></i></a></span>
            </td>
          </tr>
          <tr data-bind="visible: showInfo, css: { 'bg-blue': owner , 'bg-showinfo': showInfo() }">
            <td style="border-top: none">Owner <a data-bind="if: canedit, click: $parent.startEditOwner, visible: $parent.showActive() == 'A' && !isEditingOwner()" title="Change project owner"> <i class="pe-edit"></i></a><a data-bind="click: $parent.cancelEditOwner, visible: isEditingOwner()"><i class="pe-times-circle-o"></i></a></td>
            <td style="border-top: none" colspan="2">
              <span data-bind="visible: !isEditingOwner()"><strong><span data-bind="text: fullname"></span></strong> (<span data-bind="text: email, visible: !isEditingOwner()"></span>)</span>
              <span data-bind="visible: isEditingOwner()"><div class="col-sm-6" style="padding:0px"><select data-bind="options: ulist, optionsText: '<?php if ($_SESSION['level'] == "9") { ?>list1<?php } else { ?>list2<?php }?>', optionsValue: 'userid', value: selectedUser, event: { change: $parent.changingowner }" class="form-control input-sm"></select></div></span>
            </td>
          </tr>
          <tr data-bind="visible: showInfo, css: { 'bg-blue': owner , 'bg-showinfo': showInfo() }">
            <td style="border-top: none">Type <a data-bind="if: canedit, click: $parent.startEditPP, visible: $parent.showActive() == 'A' && !isEditingPP()" title="Change type of survey"> <i class="pe-edit"></i></a><a data-bind="click: $parent.cancelEditPP, visible: isEditingPP()"><i class="pe-times-circle-o"></i></a></td>
            <td style="border-top: none">
              <div data-bind="visible: !isEditingPP()">
                <strong><span data-bind="text: pp"></span> <i class="pe-folder-o" data-bind="visible: pp == 'Private'"></i><i class="pe-folder-open-o" data-bind="visible: pp == 'Public'"></i></strong>
              </div>
              <div data-bind="if: private, visible: isEditingPP()">
                <a class="btn btn-default btn-tiny" data-bind="click: $parent.toPublic, visible: $parent.showActive() == 'A'" href="">Make it Public <i class="pe-folder-open-o"></i></a>
                <a class="btn btn-default btn-tiny" data-bind="click: $parent.toPrivate, visible: $parent.showActive() == 'A'" disabled>Make it Private <i class="pe-folder-o"></i></a>
              </div>
              <div data-bind="ifnot: private, visible: isEditingPP()">
                <a class="btn btn-default btn-tiny" data-bind="click: $parent.toPublic, visible: $parent.showActive() == 'A'" disabled>Make it Public <i class="pe-folder-open-o"></i></a>
                <a class="btn btn-default btn-tiny" data-bind="click: $parent.toPrivate, visible: $parent.showActive() == 'A'" href="">Make it Private <i class="pe-folder-o"></i></a>
              </div>
            </td>
          </tr>
          <tr data-bind="visible: showInfo, css: { 'bg-blue': owner , 'bg-showinfo': showInfo() }">
            <td style="border-top: none" colspan="3" data-bind="if: canedit, visible: $parent.showActive() == 'A'"><a class="btn btn-danger btn-tiny pull-right" style="white-space:normal;width:100px;word-wrap:break-word"><i class="pe-flag-checkered pe-fw"></i> Ready for data-collection</a><div>Once you are sure this project is ready for fieldwork, please submit your request using this button and we will proceed for you as soon as possible. <strong>It is important to understand that once the project is moved to the Data-collection stage, you <em>will not</em> be able to make any changes in the questionaire.</strong></div></td>
          </tr>
        </table>
      </div>
<?php } ?>
    </div>
  </div>
  <!-- /ko -->
</div>

<script type="text/javascript">

  var companyid = <?php echo $_SESSION['companyid']; ?>;
  var level = <?php echo $_SESSION['level']; ?>;
  var userid = <?php echo $_SESSION['userid']; ?>;
  var email = "<?php echo $_SESSION['email']; ?>";
  var ip = "<?php echo getip(); ?>";
  var api = "http://www.siamsquare.org.uk";
  var key = "aa5e1ab4-b0bf-4e82-8584-7cf4e9fdeaa8";
  $('#showalert-delete').html("<div class='alert alert-warning'><i class='pe-trash pe-fw'></i> The project has been deleted</div>").hide();
  $('#showalert-restore').html("<div class='alert alert-warning'><i class='pe-undo pe-fw'></i> The project has been restored</div>").hide();
  $('#showalert-archive').html("<div class='alert alert-warning'><i class='pe-archive pe-fw'></i> The project has been moved to your archive</div>").hide();
  $('#showalert-changeowner').html("<div class='alert alert-info'><i class='pe-users pe-fw'></i> The project has been changed in its owner</div>").hide();
  $('#showalert-move').html("<div class='alert alert-info'><i class='pe-exchange pe-fw'></i> The project has been moved to a different stage</div>").hide();
  $('#showalert-pp').html("<div class='alert alert-info'><i class='pe-exchange pe-fw'></i> The project scope has been changed between Public vs. Private</div>").hide();
  Date.prototype.toMysqlFormat = function () {
    function pad(n) { return n < 10 ? '0' + n : n }
    return this.getFullYear() + "-" + pad(1 + this.getMonth()) + "-" + pad(this.getDate()) + " " + pad(this.getHours()) + ":" + pad(this.getMinutes()) + ":" + pad(this.getSeconds());
  };
  var TimeNow = new Date().toMysqlFormat();
  var UserListing = function(userid, fullname, email, company, companyid) {
    this.userid = ko.observable(userid);
    this.fullname = ko.observable(fullname);
    this.email = ko.observable(email);
    this.company = ko.observable(company);
    this.companyid = ko.observable(companyid);
    this.list1 = ko.computed(function() { return this.company() + " (companyid=" + this.companyid() + ")" + " - " + this.fullname() + " (userid=" + this.userid() + ") - " + this.email() ; }, this);
    this.list2 = ko.computed(function() { return this.fullname() + " (" + this.email() + ")"; }, this);
  }
  var Listing = function (title, description, userid, created, updated, id, email, fullname, company, companyid, private, canedit, owner, rD, UserListing) {
    this.title = ko.observable(title);
    this.editingOwner = ko.observable(userid);
    this.editingName = ko.observable(title);
    this.description = ko.observable(description);
    this.editingDescription = ko.observable(description);
    this.editingPP = ko.observable(private);
    this.userid = ko.observable(userid);;
    this.created = created;
    this.updated = updated;
    this.id = id;
    this.rD = ko.observable(rD);
    this.rDFormatted = function (obs) { if (typeof (obs) === 'function') return obs().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); }
    this.email = email;
    this.fullname = fullname;
    this.company = company;
    this.companyid = companyid;
    this.userid = ko.observable(userid);
    this.private = ko.observable(private);
    this.showInfo = ko.observable(false);
    this.isEditingOwner = ko.observable(false);
    this.isEditing = ko.observable(false);
    this.isEditingDescription = ko.observable(false);
    this.isEditingPP = ko.observable(false);
    this.canedit = canedit;
    this.owner = owner;
    // this.canedit = ko.observable(false);
    // this.owner = ko.observable(false);
    if (private) { this.pp = "Private"; } else { this.pp = "Public"; }
    options = <?php echo $userlist; ?>;
    this.ulist = ko.observableArray(options);
    this.selectedUser = ko.observable(userid);
    this.canclick = ko.observable();
  }
  var ViewModel = function () {
    var self = this;
    // this.canclick = ko.observable(false);
    this.surveys = ko.observableArray([]);
    this.url = api;
    this.showActive = ko.observable(true);
    this.isNewSurveyCreating = ko.observable(false);
    this.newSurveyName = ko.observable("New project");
    this.loadData = function (i) {
      self.showActive(i);
      if (level == 9) { var url = "/all/" + i; }
      else { var url = "/company/" + companyid + "/" + i; }
      $.ajax({
        url: api + url,
        dataType: 'json',
        type: 'get',
        contentType: 'application/json; charset=utf-8',
        success: function (data) {
          var list = [];
          for (var i = 0; i < data.length; i++) { list.push(self.createSurveyObject(data[i])); }
          self.surveys(list);
        },
        error: function (error) { self.onFail(error); }
      });
    }
    this.loadA = function () { self.loadData("A"); }
    this.loadB = function () { self.loadData("B"); }
    this.loadC = function () { self.loadData("C"); }
    this.loadD = function () { self.loadData("D"); }
    this.loadE = function () { self.loadData("E"); }
    this.archive = function (survey) {
      $.ajax({
        url: api + '/survey/' + survey.id + '/archive',
        dataType: 'json',
        type: 'put',
        contentType: 'application/json; charset=utf-8',
        data: '{ "status": 4, "L3": "' + TimeNow + '" }',
        success: function (data) {
          $('#showalert-archive').show();
          window.setTimeout(function () { $("#showalert-archive").slideUp(500, function () { $("#showalert-archive").hide(); }); }, 3000);
          self.removeSurvey(survey);
          $.ajax({
            url: api + '/log/' + userid + '/' + survey.id,
            dataType: 'json',
            type: 'post',
            contentType: 'application/json; charset=utf-8',
            data: '{ "userid": "' + userid + '", "ip": "' + ip + '", "data": "' + email + ' archived a survey named ' + survey.title() + ' (id=' + survey.id + ')", "critical": "3" }',
            success: function(data) { result = data; }
          });
        },
        error: function (error) { self.onFail(error); }
      });
    }
    this.restore = function (survey) {
      $.ajax({
        url: api + '/survey/' + survey.id + '/restore',
        dataType: 'json',
        type: 'put',
        contentType: 'application/json; charset=utf-8',
        data: '{ "status": 3, "L3": NULL }',
        success: function (data) {
          $('#showalert-restore').show();
          window.setTimeout(function () { $("#showalert-restore").slideUp(500, function () { $("#showalert-restore").hide(); }); }, 3000);
          self.removeSurvey(survey);
          $.ajax({
            url: api + '/log/' + userid + '/' + survey.id,
            dataType: 'json',
            type: 'post',
            contentType: 'application/json; charset=utf-8',
            data: '{ "userid": "' + userid + '", "ip": "' + ip + '", "data": "' + email + ' restored a survey named ' + survey.title() + ' (id=' + survey.id + ')", "critical": "3" }',
            success: function(data) { result = data; }
          });
        },
        error: function (error) { self.onFail(error); }
      });
    }
    this.delete = function (survey) {
      $.ajax({
        url: api + '/survey/' + survey.id + '/delete',
        dataType: 'json',
        type: 'put',
        contentType: 'application/json; charset=utf-8',
        data: '{ "status": 0 }',
        success: function (data) {
          $('#showalert-delete').show();
          window.setTimeout(function () { $("#showalert-delete").slideUp(500, function () { $("#showalert-delete").hide(); }); }, 3000);
          self.removeSurvey(survey);
          $.ajax({
            url: api + '/log/' + userid + '/' + survey.id,
            dataType: 'json',
            type: 'post',
            contentType: 'application/json; charset=utf-8',
            data: '{ "userid": "' + userid + '", "ip": "' + ip + '", "data": "' + email + ' deleted a survey named ' + survey.title() + ' (id=' + survey.id + ')", "critical": "5" }',
            success: function(data) { result = data; }
          });
        },
        error: function (error) { self.onFail(error); }
      });
    }
    this.undelete = function (survey) {
      $.ajax({
        url: api + '/survey/' + survey.id + '/undelete',
        dataType: 'json',
        type: 'put',
        contentType: 'application/json; charset=utf-8',
        data: '{ "status": 4 }',
        success: function (data) {
          $('#showalert-restore').show();
          window.setTimeout(function () { $("#showalert-restore").slideUp(500, function () { $("#showalert-restore").hide(); }); }, 3000);
          self.removeSurvey(survey);
          $.ajax({
            url: api + '/log/' + userid + '/' + survey.id,
            dataType: 'json',
            type: 'post',
            contentType: 'application/json; charset=utf-8',
            data: '{ "userid": "' + userid + '", "ip": "' + ip + '", "data": "' + email + ' undeleted a survey named ' + survey.title() + ' (id=' + survey.id + ')", "critical": "5" }',
            success: function(data) { result = data; }
          });
        },
        error: function (error) { self.onFail(error); }
      });
    }
    this.one2two = function (survey) {
      $.ajax({
        url: api + '/survey/' + survey.id + '/one2two',
        dataType: 'json',
        type: 'put',
        contentType: 'application/json; charset=utf-8',
        data: '{ "status": 2, "L1": "' + TimeNow + '" }',
        success: function (data) {
          $('#showalert-move').show();
          window.setTimeout(function () { $("#showalert-move").slideUp(500, function () { $("#showalert-move").hide(); }); }, 3000);
          self.removeSurvey(survey);
        },
        error: function (error) { self.onFail(error); }
      });
    }
    this.two2three = function (survey) {
      $.ajax({
        url: api + '/survey/' + survey.id + '/two2three',
        dataType: 'json',
        type: 'put',
        contentType: 'application/json; charset=utf-8',
        data: '{ "status": 3, "L2": "' + TimeNow + '" }',
        success: function (data) {
          $('#showalert-move').show();
          window.setTimeout(function () { $("#showalert-move").slideUp(500, function () { $("#showalert-move").hide(); }); }, 3000);
          self.removeSurvey(survey);
        },
        error: function (error) { self.onFail(error); }
      });
    }
    this.two2one = function (survey) {
      $.ajax({
        url: api + '/survey/' + survey.id + '/two2one',
        dataType: 'json',
        type: 'put',
        contentType: 'application/json; charset=utf-8',
        data: '{ "status": 1, "L1": NULL }',
        success: function (data) {
          $('#showalert-move').show();
          window.setTimeout(function () { $("#showalert-move").slideUp(500, function () { $("#showalert-move").hide(); }); }, 3000);
          self.removeSurvey(survey);
        },
        error: function (error) { self.onFail(error); }
      });
    }
    this.three2four = function (survey) {
      $.ajax({
        url: api + '/survey/' + survey.id + '/three2four',
        dataType: 'json',
        type: 'put',
        contentType: 'application/json; charset=utf-8',
        data: '{ "status": 4, "L3": "' + TimeNow + '" }',
        success: function (data) {
          $('#showalert-move').show();
          window.setTimeout(function () { $("#showalert-move").slideUp(500, function () { $("#showalert-move").hide(); }); }, 3000);
          self.removeSurvey(survey);
        },
        error: function (error) { self.onFail(error); }
      });
    }
    this.three2two = function (survey) {
      $.ajax({
        url: api + '/survey/' + survey.id + '/three2two',
        dataType: 'json',
        type: 'put',
        contentType: 'application/json; charset=utf-8',
        data: '{ "status": 2, "L2": NULL }',
        success: function (data) {
          $('#showalert-move').show();
          window.setTimeout(function () { $("#showalert-move").slideUp(500, function () { $("#showalert-move").hide(); }); }, 3000);
          self.removeSurvey(survey);
        },
        error: function (error) { self.onFail(error); }
      });
    }
    this.four2zero = function (survey) {
      $.ajax({
        url: api + '/survey/' + survey.id + '/four2zero',
        dataType: 'json',
        type: 'put',
        contentType: 'application/json; charset=utf-8',
        data: '{ "status": 0 }',
        success: function (data) {
          $('#showalert-move').show();
          window.setTimeout(function () { $("#showalert-move").slideUp(500, function () { $("#showalert-move").hide(); }); }, 3000);
          self.removeSurvey(survey);
        },
        error: function (error) { self.onFail(error); }
      });
    }
    this.four2three = function (survey) {
      $.ajax({
        url: api + '/survey/' + survey.id + '/four2three',
        dataType: 'json',
        type: 'put',
        contentType: 'application/json; charset=utf-8',
        data: '{ "status": 3, "L3": NULL }',
        success: function (data) {
          $('#showalert-move').show();
          window.setTimeout(function () { $("#showalert-move").slideUp(500, function () { $("#showalert-move").hide(); }); }, 3000);
          self.removeSurvey(survey);
        },
        error: function (error) { self.onFail(error); }
      });
    }
    this.zero2four = function (survey) {
      $.ajax({
        url: api + '/survey/' + survey.id + '/zero2four',
        dataType: 'json',
        type: 'put',
        contentType: 'application/json; charset=utf-8',
        data: '{ "status": 4 }',
        success: function (data) {
          $('#showalert-restore').show();
          window.setTimeout(function () { $("#showalert-restore").slideUp(500, function () { $("#showalert-restore").hide(); }); }, 3000);
          self.removeSurvey(survey);
        },
        error: function (error) { self.onFail(error); }
      });
    }
    this.toPublic = function (survey) {
      $.ajax({
        url: api + '/survey/' + survey.id + '/2public',
        dataType: 'json',
        type: 'put',
        contentType: 'application/json; charset=utf-8',
        data: '{ "private": 0 }',
        success: function (data) {
          $('#showalert-pp').show();
          window.setTimeout(function () { $("#showalert-pp").slideUp(500, function () { $("#showalert-pp").hide(); }); }, 3000);
          $.ajax({
            url: api + '/log',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json; charset=utf-8',
            data: '{ "userid": "' + userid + '", "ip": "' + ip + '", "data": "' + email + ' changed survey to public for ' + survey.title() + ' (id=' + survey.id + ')", "critical": "3" }',
            success: function(data) { result = data; }
          });
        },
        error: function (error) { self.onFail(error); }
      });
      window.setTimeout(function () { window.location.reload(); }, 3300);
    }
    this.toPrivate = function (survey) {
      $.ajax({
        url: api + '/survey/' + survey.id + '/2private',
        dataType: 'json',
        type: 'put',
        contentType: 'application/json; charset=utf-8',
        data: '{ "private": 1 }',
        success: function (data) {
          $('#showalert-pp').show();
          window.setTimeout(function () { $("#showalert-pp").slideUp(500, function () { $("#showalert-pp").hide(); }); }, 3000);
          $.ajax({
            url: api + '/log',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json; charset=utf-8',
            data: '{ "userid": "' + userid + '", "ip": "' + ip + '", "data": "' + email + ' changed survey to private for ' + survey.title() + ' (id=' + survey.id + ')", "critical": "3" }',
            success: function(data) { result = data; }
          });
        },
        error: function (error) { self.onFail(error); }
      });
      window.setTimeout(function () { window.location.reload(); }, 3300);
    }
    this.removeSurvey = function (survey) {
      var index = self.surveys.indexOf(survey);
      if (index > -1) { self.surveys.splice(index, 1); }
    }
    this.createNew = function () {
      self.isNewSurveyCreating(true);
      self.newSurveyName("My new project");
    }
    this.cancelNew = function () {
      self.isNewSurveyCreating(false);
    }
    this.postNew = function () {
      self.cancelNew();
      $.ajax({
        url: api + '/user/' + companyid + '/' + userid + '/new?name=' + self.newSurveyName(),
        dataType: 'json',
        type: 'get',
        contentType: 'application/json; charset=utf-8',
        success: function (data) {
          self.surveys.splice(0, 0, self.createSurveyObject(data));
          $.ajax({
            url: api + '/log/' + userid + '/' + survey.id,
            dataType: 'json',
            type: 'post',
            contentType: 'application/json; charset=utf-8',
            data: '{ "userid": "' + userid + '", "ip": "' + ip + '", "data": "' + email + ' created a new survey named ' + self.newSurveyName() + ' (id=' + survey.id + ')", "critical": "3" }',
            success: function(data) { result = data; }
          });
        },
        error: function (error) { self.onFail(error); }
      });
    }
    this.startEditOwner = function (survey) {
      survey.editingOwner(survey.userid());
      survey.isEditingOwner(true);
    }
    this.postEditOwner = function (survey) {
      self.cancelEditOwner(survey);
    }
    this.cancelEditOwner = function (survey) { survey.isEditingOwner(false); }
    this.startEdit = function (survey) {
      survey.editingName(survey.title());
      survey.isEditing(true);
    }
    this.postEdit = function (survey) {
      self.cancelEdit(survey);
      $.ajax({
        url: api + '/survey/' + survey.id + '/rename',
        dataType: 'json',
        type: 'put',
        contentType: 'application/json; charset=utf-8',
        data: '{ "title": "' + survey.editingName() + '" }',
        success: function (data) {
          survey.title(survey.editingName());
          $.ajax({
            url: api + '/log/' + userid + '/' + survey.id,
            dataType: 'json',
            type: 'post',
            contentType: 'application/json; charset=utf-8',
            data: '{ "userid": "' + userid + '", "ip": "' + ip + '", "data": "' + email + ' renamed a survey to ' + survey.title() + ' (id=' + survey.id + ')", "critical": "3" }',
            success: function(data) { result = data; }
          });
        },
        error: function (error) { self.onFail(error); }
      });
    }
    this.cancelEdit = function (survey) { survey.isEditing(false); }
    this.startEditDescription = function (survey) {
      survey.editingDescription(survey.description());
      survey.isEditingDescription(true);
    }
    this.postEditDescription = function (survey) {
      self.cancelEditDescription(survey);
      $.ajax({
        url: api + '/survey/' + survey.id + '/redescription',
        dataType: 'json',
        type: 'put',
        contentType: 'application/json; charset=utf-8',
        data: '{ "description": "' + survey.editingDescription() + '" }',
        success: function (data) {
          survey.description(survey.editingDescription());
          $.ajax({
            url: api + '/log/' + userid + '/' + survey.id,
            dataType: 'json',
            type: 'post',
            contentType: 'application/json; charset=utf-8',
            data: '{ "userid": "' + userid + '", "ip": "' + ip + '", "data": "' + email + ' changed a description for ' + survey.title() + ' (id=' + survey.id + ')", "critical": "3" }',
            success: function(data) { result = data; }
          });
        },
        error: function (error) { self.onFail(error); }
      });
    }
    this.cancelEditDescription = function (survey) { survey.isEditingDescription(false); }
    this.startEditPP = function (survey) {
      survey.editingPP(survey.private());
      survey.isEditingPP(true);
    }
    this.postEditPP = function (survey) {
      self.cancelEditPP(survey);
    }
    this.cancelEditPP = function (survey) { survey.isEditingPP(false); }
    this.changingowner = function(survey) {
      $.ajax({
        url: api + '/survey/' + survey.id + '/changeowner',
        dataType: 'json',
        type: 'put',
        contentType: 'application/json; charset=utf-8',
        data: '{ "userid": ' + survey.selectedUser() + ' }',
        success: function (data) {
          $('#showalert-changeowner').show();
          window.setTimeout(function () { $("#showalert-changeowner").slideUp(500, function () { $("#showalert-changeowner").hide(); }); }, 3000);
          $.ajax({
            url: api + '/log',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json; charset=utf-8',
            data: '{ "userid": "' + userid + '", "ip": "' + ip + '", "data": "' + email + ' changed survey owner for ' + survey.title() + ' (id=' + survey.id + ')", "critical": "4" }',
            success: function(data) { result = data; }
          });
        },
        error: function (error) { self.onFail(error); }
      });
      window.setTimeout(function () { window.location.reload(); }, 3300);
    }
    this.createSurveyObject = function (data) {
      var canedit = false; var owner = false; var admin = false;
      if (userid == data.userid) { var owner = true; }
      if (level == 9) { var canedit = true; var admin = true; } else if (level == 6) { var canedit = true; }
      else if (level == 5) { if (owner == true) { var canedit = true; } } else if (level == 4) { var canedit = false; }
      moment.locale('en');
      var s1 = moment(data.created).fromNow(); var s2 = moment(data.created).format("D MMM YYYY"); created = s2 + ' (' + s1 + ')';
      var t1 = moment(data.updated).fromNow(); var t2 = moment(data.updated).format("D MMM YYYY"); updated = t2 + ' (' + t1 + ')';
      return new Listing(data.title, data.description, data.userid, created, updated, data.id, data.email, data.fullname, data.company, data.companyid, data.private, canedit, owner, data.rD, UserListing);
    }
    this.onFail = function (error) { alert(JSON.stringify(error)); }
    this.showInfo = function (survey) { survey.showInfo(!survey.showInfo()); }
    <?php
    if ($_GET['c'] == "A") { echo "this.loadA();"; }
    else if ($_GET['c'] == "B") { echo "this.loadB();"; }
    else if ($_GET['c'] == "C") { echo "this.loadC();"; }
    else if ($_GET['c'] == "D") { echo "this.loadD();"; }
    else if ($_GET['c'] == "E") { echo "this.loadE();"; }
    else { echo "this.loadA();"; }
    ?>
  }
  jQuery(document).ready(function () { ko.applyBindings(new ViewModel()); });
</script>

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
