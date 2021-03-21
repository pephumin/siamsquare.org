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
echo "<p class=\"introtext\">$details</p>\n";

// Get user list
if ($_SESSION['level'] == 9) {
  $q1 = $db->prepare("SELECT U.id, U.email, U.fullname, U.level, U.companyid, C.company FROM j_users U, j_companies C WHERE U.companyid = C.id AND U.status >= 0 ORDER BY C.company ASC, U.level DESC");
} else {
  $q1 = $db->prepare("SELECT U.id, U.email, U.fullname, U.level, U.companyid, C.company FROM j_users U, j_companies C WHERE U.companyid = :companyid AND U.companyid = C.id AND U.status >= 0 ORDER BY U.level DESC");
  $q1->bindValue(':companyid', $_SESSION["companyid"], PDO::PARAM_INT);
}
$q1->execute();
$userlist = "[ \n";
while ($row = $q1->fetchObject()) { $userlist .= '      new UserListing('.$row->id.', "'.$row->fullname.'", "'.$row->email.'", "'.$row->company.'", '.$row->companyid.'), '."\n"; }
$userlist .= "    ]";
?>

<br>

<?php if (!$_GET['c']) { ?>
<div class="row">
  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
    <nav>
      <ul class="nav nav-tabs">
        <li data-bind="css: { active: showActive() == 'A' }"><a data-bind="click: loadA" style="cursor: pointer"><i class="pe-hourglass-start pe-fw"></i> <?php echo $titleA; ?></a></li>
        <li data-bind="css: { active: showActive() == 'B' }"><a data-bind="click: loadB" style="cursor: pointer"><i class="pe-hourglass-half pe-fw"></i> <?php echo $titleB; ?></a></li>
        <li data-bind="css: { active: showActive() == 'C' }"><a data-bind="click: loadC" style="cursor: pointer"><i class="pe-hourglass-end pe-fw"></i> <?php echo $titleC; ?></a></li>
        <li data-bind="css: { active: showActive() == 'D' }"><a data-bind="click: loadD" style="cursor: pointer"><i class="pe-archive pe-fw"></i> <?php echo $titleD; ?></a></li>
<?php if ($_SESSION['level'] == 9) { ?>
        <li data-bind="css: { active: showActive() == 'E' }"><a data-bind="click: loadE" style="cursor: pointer"><i class="pe-trash pe-fw"></i> <?php echo $titleE; ?></a></li>
<?php } ?>
      </ul>
    </nav>
  </div>
  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="margin-top:30px">
    <p data-bind="visible: showActive() == 'A'" class="text-muted"><?php echo $detailsA; ?></p>
    <p data-bind="visible: showActive() == 'B'" class="text-muted"><?php echo $detailsB; ?></p>
    <p data-bind="visible: showActive() == 'C'" class="text-muted"><?php echo $detailsC; ?></p>
    <p data-bind="visible: showActive() == 'D'" class="text-muted"><?php echo $detailsD; ?></p>
<?php if ($_SESSION['level'] == 9) { ?>
    <p data-bind="visible: showActive() == 'E'" class="text-muted"><?php echo $detailsE; ?></p>
<?php } ?>
  </div>
</div>
<?php } ?>

<div class="rows">
  <?php if ($_SESSION['level'] >= "2") { ?>
  <div class="col-sm-12" style="text-align:right">
    <p class="pull-right"><a href="" class="btn btn-success" data-bind="click: function() { showDialog(true) }, visible: showActive() == 'A', enable: !showDialog()"><i class="pe-cube pe-fw"></i> New project</a></p>
  </div>
  <?php } ?>
  <div class="col-sm-12">
    <div id="showalert-addnew"></div><div id="showalert-delete"></div><div id="showalert-restore"></div><div id="showalert-archive"></div><div id="showalert-move"></div><div id="showalert-pp"></div><div id="showalert-reowner"></div>
  </div>
</div>


<div class="row">
  <!-- ko foreach: surveys -->
  <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6" style="margin-bottom:20px">
    <div class="projects">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 projects-header">
          <div class="adminmovewrap" data-bind="if: admin">
            <a href="" class="adminmove" title="Move to the next step" data-bind="click: $parent.one2two, visible: $parent.showActive() == 'A'"><i class="pe-arrow-circle-right pe-lg"></i></a>
            <a href="" class="adminmove" title="Move to the previous step" data-bind="click: $parent.two2one, visible: $parent.showActive() == 'B'"><i class="pe-arrow-circle-left pe-lg"></i></a>
            <a href="" class="adminmove" title="Move to the next step" data-bind="click: $parent.two2three, visible: $parent.showActive() == 'B'"><i class="pe-arrow-circle-right pe-lg"></i></a>
            <a href="" class="adminmove" title="Move to the previous step" data-bind="click: $parent.three2two, visible: $parent.showActive() == 'C'"><i class="pe-arrow-circle-left pe-lg"></i></a>
            <a href="" class="adminmove" title="Move to the next step" data-bind="click: $parent.three2four, visible: $parent.showActive() == 'C'"><i class="pe-arrow-circle-right pe-lg"></i></a>
            <a href="" class="adminmove" title="Move to the previous step" data-bind="click: $parent.four2three, visible: $parent.showActive() == 'D'"><i class="pe-arrow-circle-left pe-lg"></i></a>
            <a href="" class="adminmove" title="Move to the next step" data-bind="click: $parent.four2zero, visible: $parent.showActive() == 'D'"><i class="pe-arrow-circle-right pe-lg"></i></a>
            <a href="" class="adminmove" title="Move to the previous step" data-bind="click: $parent.zero2four, visible: $parent.showActive() == 'E'"><i class="pe-arrow-circle-left pe-lg"></i></a>
          </div>
        <h4>Project <span data-bind="text: title"></span> <span data-bind="if: owner" class="label-red" style="font-size:0.6rem">owner</span></h4>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 projects-subhead">
        <i class="pe-user pe-fw"></i> <strong data-bind="text: fullname"></strong> (<span data-bind="text: email"></span>) <span data-bind="if: admin"><i class="pe-building pe-fw"></i> <span data-bind="text: company"></span></span>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 projects-body">
        <div class="pull-right">
          <span data-bind="if: canedit"><a class="btn btn-default btn-tiny" data-bind="click: $parent.showInfo" title="Show the detailed information of this project">Info <i class="" data-bind="css: { 'pe-chevron-down': !showInfo(), 'pe-chevron-up': showInfo() }"></i></a></span>
          <!-- <span data-bind=""><a class="btn btn-success btn-tiny" data-bind="attr: { href: '/r.php?s=' + id, title: 'View the actual questionnaire', target: '_blank' }, css: { 'disabled': DT() == null }">View <i class="pe-plane"></i></a></span> -->
        </div>
        <div class="projectinfo">
          <strong>Created:</strong> <span data-bind="text: created"></span><br>
          <strong>Updated:</strong> <span data-bind="text: updated"></span><br>
          <strong>Type:</strong> <span><span data-bind="text: pp"></span> <i class="pe-folder-o" data-bind="visible: pp == 'Private'"></i><i class="pe-folder-open-o" data-bind="visible: pp == 'Public'"></i></span>
          <a class="btn btn-default btn-tiny pull-right" data-bind="attr: { href: '/admin/?w=respondents&amp;s=' + id }, visible: pp == 'Private', css: { 'btn-primary': rD() > 0, 'disabled': !owner || $parent.showActive() == 'C' || $parent.showActive() == 'D' || $parent.showActive() == 'E' }"><span data-bind="text: rD"></span> respondent(s) <i class="pe-users"></i></a>
        </div>
        <a class="btn btn-default btn-tiny" data-bind="attr: { href: '/admin/?w=design&amp;s=' + id }, visible: $parent.showActive() == 'A', css: { 'disabled': !owner }" title="Edit the questionnaire">Questionnaire design <i class="pe-edit"></i></a>
        <a class="btn btn-default btn-tiny" data-bind="attr: { href: '/r.php?pilot=✓&amp;s=' + id }, visible: $parent.showActive() == 'A'" target="_blank" title="Conduct a pilot test on the questionnaire">Pilot test <i class="pe-paper-plane"></i></a>
        <a class="btn btn-success btn-tiny" data-bind="attr: { href: '/r.php?s=' + id }, visible: $parent.showActive() == 'B'" target="_blank">Live <i class="pe-plane"></i></a>
        <a class="btn btn-default btn-tiny" data-bind="attr: { href: '/admin/?w=progress&amp;s=' + id }, visible: $parent.showActive() == 'B' || $parent.showActive() == 'C'" title="Monitor data-collection progress and view interim data">Progress <i class="pe-flask"></i></a>
        <a class="btn btn-default btn-tiny" data-bind="attr: { href: '/admin/?w=result&amp;s=' + id }, visible: $parent.showActive() == 'B' || $parent.showActive() == 'C' || $parent.showActive() == 'D'" title="Real-time result display in graph and table">Result <i class="pe-line-chart"></i></a>
        <a class="btn btn-default btn-tiny" data-bind="click: $parent.archive, visible: $parent.showActive() == 'C', css: { 'disabled': !owner }" title="Move this project to Archive folder">Archive <i class="pe-archive"></i></a>
        <a class="btn btn-default btn-tiny" data-bind="click: $parent.restore, visible: $parent.showActive() == 'D', css: { 'disabled': !owner }" title="Move this project out of Archive folder">Restore <i class="pe-undo"></i></a>
        <a class="btn btn-danger btn-tiny pull-right" data-bind="click: $parent.delete, visible: $parent.showActive() == 'A' || $parent.showActive() == 'D', css: { 'disabled': !owner }" title="Delete this project from the system">Delete <i class="pe-trash"></i></a>
        <a class="btn btn-tiny pull-right disabled" data-bind="click: $parent.undelete, visible: $parent.showActive() == 'E', css: { 'disabled': !owner }" title="Undelete this project">Undelete <i class="pe-undo"></i></a>
      </div>

<?php if ($_SESSION['level'] >= "2") { ?>
      <div class="projects-footer" data-bind="visible: showInfo()">
        <table class="table">
          <tr data-bind="visible: showInfo, css: { 'bg-blue': owner , 'bg-showinfo': showInfo() }">
            <td width="25%" style="border-top: none">Name <a data-bind="if: canedit, click: $parent.startEdit, visible: $parent.showActive() == 'A' && !isEditing()" title="Change project name"> <i class="pe-edit"></i></a><a data-bind="click: $parent.cancelEdit, visible: isEditing()"><i class="pe-times-circle-o"></i></a></td>
            <td width="75%" style="border-top: none" colspan="2">
              <span data-bind="visible: !isEditing()"><strong><span data-bind="text: title"></span></strong> <span data-bind="if: admin">(surveyid = <span data-bind="text: id"></span>)</span></span>
              <span data-bind="visible: isEditing()"><input data-bind="textInput: editingName" onclick="this.select()" class="form-control input-sm"><a class="btn btn-sm" data-bind="click: $parent.postEdit, enable: title() != ''" href="">Rename <i class="pe-check-circle-o"></i></a><a class="btn btn-sm" data-bind="click: $parent.cancelEdit" href="">Cancel <i class="pe-times-circle-o"></i></a></span>
            </td>
          </tr>
          <tr data-bind="visible: showInfo, css: { 'bg-blue': owner , 'bg-showinfo': showInfo() }">
            <td style="border-top: none">Description <a data-bind="if: canedit, click: $parent.startEditDescription, visible: $parent.showActive() == 'A' && !isEditingDescription()" title="Change project description"> <i class="pe-edit"></i></a><a data-bind="click: $parent.cancelEditDescription, visible: isEditingDescription()"><i class="pe-times-circle-o"></i></a></td>
            <td style="border-top: none" colspan="2">
              <span class="boon" data-bind="visible: !isEditingDescription(), text: description"></span>
              <span data-bind="visible: isEditingDescription()"><textarea data-bind="textInput: editingDescription, visible: isEditingDescription()" onclick="this.select()" class="form-control input-sm" rows="5" placeholder="Please make sure you insert a short description that is easy to understand in Thai language only as it may be displayed directly to respondents"></textarea>
                <a class="btn btn-sm" data-bind="click: $parent.postEditDescription, enable: description() != ''" href="">Update <i class="pe-check-circle-o"></i></a><a class="btn btn-sm" data-bind="click: $parent.cancelEditDescription" href="">Cancel <i class="pe-times-circle-o"></i></a>
              </span>
            </td>
          </tr>
          <tr data-bind="visible: showInfo, css: { 'bg-blue': owner , 'bg-showinfo': showInfo() }">
            <td style="border-top: none">Owner <a data-bind="if: canedit, click: $parent.startEditOwner, visible: $parent.showActive() == 'A' && !isEditingOwner()" title="Change project owner"> <i class="pe-edit"></i></a><a data-bind="click: $parent.cancelEditOwner, visible: isEditingOwner()"><i class="pe-times-circle-o"></i></a></td>
            <td style="border-top: none" colspan="2">
              <span data-bind="visible: !isEditingOwner()"><strong><span data-bind="text: fullname"></span></strong> (<span data-bind="text: email, visible: !isEditingOwner()"></span>)</span>
              <span data-bind="visible: isEditingOwner()"><div class="col-sm-6" style="padding:0px"><select data-bind="options: ulist, optionsText: '<?php if (($_SESSION['level'] == "9") || ($_SESSION['level'] == "4")) { ?>list1<?php } else { ?>list2<?php }?>', optionsValue: userid, value: selectedUser, event: { change: $parent.changingowner }" class="form-control input-sm"></select></div></span>
            </td>
          </tr>
          <tr data-bind="visible: showInfo, css: { 'bg-blue': owner , 'bg-showinfo': showInfo() }">
            <td style="border-top: none">Type <a data-bind="if: canedit, click: $parent.startEditPP, visible: $parent.showActive() == 'A' && !isEditingPP()" title="Change type of survey"> <i class="pe-edit"></i></a><a data-bind="click: $parent.cancelEditPP, visible: isEditingPP()"><i class="pe-times-circle-o"></i></a></td>
            <td style="border-top: none">
              <div data-bind="visible: !isEditingPP()">
                <strong><span data-bind="text: pp"></span> <i class="pe-folder-o" data-bind="visible: pp == 'Private'"></i><i class="pe-folder-open-o" data-bind="visible: pp == 'Public'"></i></strong>
              </div>
              <div data-bind="if: private, visible: isEditingPP()">
                <a class="btn btn-default btn-tiny" data-bind="click: $parent.change2public, visible: $parent.showActive() == 'A'" href="">Make it Public <i class="pe-folder-open-o"></i></a>
                <a class="btn btn-default btn-tiny" data-bind="click: $parent.change2private, visible: $parent.showActive() == 'A'" disabled>Make it Private <i class="pe-folder-o"></i></a>
              </div>
              <div data-bind="ifnot: private, visible: isEditingPP()">
                <a class="btn btn-default btn-tiny" data-bind="click: $parent.change2public, visible: $parent.showActive() == 'A'" disabled>Make it Public <i class="pe-folder-open-o"></i></a>
                <a class="btn btn-default btn-tiny" data-bind="click: $parent.change2private, visible: $parent.showActive() == 'A'" href="">Make it Private <i class="pe-folder-o"></i></a>
              </div>
            </td>
          </tr>
          <tr data-bind="visible: showInfo, css: { 'bg-blue': owner , 'bg-showinfo': showInfo() }">
            <td style="border-top:none;" colspan="3" data-bind="if: canedit, visible: $parent.showActive() == 'A'">
              <a class="btn btn-success btn-tiny pull-right" style="white-space:normal;width:100px;word-wrap:break-word"><i class="pe-flag-checkered pe-fw"></i> Ready for data-collection</a>
              <div class="small darkgreen" style="margin:0px 5px">Click this button to submit your request to start the fieldwork. <strong>Please note the questionnaire will no longer be editable</strong>. Only submit when you are sure it is really finallised.</div>
            </td>
          </tr>
        </table>
      </div>
<?php } ?>
    </div>
  </div>
  <!-- /ko -->
</div>

<div class="modal fade" id="newproject" aria-labelledby="newproject" tabindex="-1" role="dialog" data-bind="modal: showDialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title">Create a new project</h4>
      </div>
      <div class="modal-body">
        <p>Please enter a new project name in the box below. And the new project will be created automatically with all default options which can be customised later.</p>
        <div class="input-group"><span class="input-group-addon"><i class="pe-cube pe-fw"></i> Project name:</span><input id="newname" type="text" class="form-control" data-bind="textInput: newSurveyName" onclick="this.select()" placeholder="Enter the new project name"></div><br>
      </div>
      <div class="modal-footer">
        <a class="btn btn-success" data-bind="click: postNew, enable: newSurveyName() != ''" href="" id="submitnewproject"><i class="pe-plus"></i> Create</a>
        <a class="btn btn-default" data-bind="click: cancelNew" href="" data-dismiss="modal"><i class="pe-times-circle-o"></i> Cancel</a>
      </div>
    </div>
  </div>
</div>

<script type="text/javascript">

  var companyid = parseInt("<?php echo $_SESSION['companyid']; ?>");
  var userid = parseInt("<?php echo $_SESSION['userid']; ?>");
  var level = <?php echo $_SESSION['level']; ?>;
  var email = "<?php echo $_SESSION['email']; ?>";
  var ip = "<?php echo getip(); ?>";
  var api = "https://siamsquare.org.uk";
  $.ajaxSetup({ headers: { 'X-Requested-With': 'aa5e1ab4-b0bf-4e82-8584-7cf4e9fdeaa8' } });
  $('#showalert-addnew').html("<div class='alert alert-success'><i class='pe-check pe-fw'></i> A new project has been created. Please wait for a few seconds as we are refreshing this page.</div><br>").hide();
  $('#showalert-delete').html("<div class='alert alert-warning'><i class='pe-trash pe-fw'></i> The project has been deleted</div>").hide();
  $('#showalert-restore').html("<div class='alert alert-warning'><i class='pe-undo pe-fw'></i> The project has been restored</div>").hide();
  $('#showalert-archive').html("<div class='alert alert-warning'><i class='pe-archive pe-fw'></i> The project has been moved to your archive</div>").hide();
  $('#showalert-reowner').html("<div class='alert alert-info'><i class='pe-users pe-fw'></i> The project has been changed in its owner</div>").hide();
  $('#showalert-move').html("<div class='alert alert-info'><i class='pe-exchange pe-fw'></i> The project has been moved to a different stage</div>").hide();
  $('#showalert-pp').html("<div class='alert alert-info'><i class='pe-exchange pe-fw'></i> The project scope has been changed between Public vs. Private</div>").hide();
  Date.prototype.toMysqlFormat = function() {
    function pad(n) { return n < 10 ? '0' + n : n }
    return this.getFullYear() + "-" + pad(1 + this.getMonth()) + "-" + pad(this.getDate()) + " " + pad(this.getHours()) + ":" + pad(this.getMinutes()) + ":" + pad(this.getSeconds());
  };
  var TimeNow = new Date().toMysqlFormat();
  ko.bindingHandlers.modal = {
    init: function (element, valueAccessor) {
      $(element).modal({ show: false });
      var value = valueAccessor();
      if (ko.isObservable(value)) { $(element).on('hidden.bs.modal', function() { value(false); }); }
    },
    update: function (element, valueAccessor) {
      var value = valueAccessor();
      if (ko.utils.unwrapObservable(value)) { $(element).modal('show'); }
      else { $(element).modal('hide'); }
    }
  }
  var UserListing = function(uid, fullname, email, company, companyid) {
    this.uid = ko.observable(uid);
    this.fullname = ko.observable(fullname);
    this.email = ko.observable(email);
    this.company = ko.observable(company);
    this.companyid = ko.observable(companyid);
    this.list1 = ko.computed(function() { return this.company() + " (companyid=" + this.companyid() + ")" + " - " + this.fullname() + " (userid=" + this.uid() + ") - " + this.email() ; }, this);
    this.list2 = ko.computed(function() { return this.fullname() + " (" + this.email() + ")"; }, this);
  }
  var Listing = function(title, description, userid, created, updated, id, email, fullname, company, companyid, private, canedit, owner, admin, rD, UserListing, DT) {
    this.title = ko.observable(title);
    this.editingOwner = ko.observable(userid);
    this.editingName = ko.observable(title);
    this.description = ko.observable(description);
    this.description2 = ko.computed(function() { var newdesc = this.description.toString().replace(/\n/gi, '<br>'); return newdesc; }, this);
    this.editingDescription = ko.observable(description);
    this.editingPP = ko.observable(private);
    this.created = created;
    this.updated = updated;
    this.id = id;
    this.rD = ko.observable(rD);
    // this.rDFormatted = ko.computed(function() { var newRD = this.rD.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); return newRD; }, this);
    this.rDFormatted = function(obs) { if (typeof(obs) === 'function') { return obs().replace(/\B(?=(\d{3})+(?!\d))/g, ','); } }
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
    this.admin = admin;
    if (private) { this.pp = "Private"; } else { this.pp = "Public"; }
    options = <?php echo $userlist; ?>;
    this.ulist = ko.observableArray(options);
    this.selectedUser = ko.observable(userid);
    this.canclick = ko.observable();
    this.DT = ko.observable(DT);
  }
  var ViewModel = function() {
    var self = this;
    this.surveys = ko.observableArray([]);
    this.url = api;
    this.showActive = ko.observable(true);
    // this.isNewSurveyCreating = ko.observable(false);
    this.newSurveyName = ko.observable();
    this.showDialog = ko.observable(false);
    // this.submit = function () {
    //   alert('submit');
    //   self.showDialog(false);
    // }
    this.loadData = function(i) {
      self.showActive(i);
      // if (level == 9) { var url = "/all/" + i; }
      // else { var url = "/company/" + companyid + "/" + i; }
      var url = "/access/" + i + "/for/user/" + userid;
      $.ajax({
        url: api + url,
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        success: function(data) {
          var list = [];
          for (var i=0; i<data.length; i++) { list.push(self.createSurveyObject(data[i])); }
          self.surveys(list);
        },
        error: function(error) { self.onFail(error); }
      });
    }
    this.loadA = function() { self.loadData("A"); }
    this.loadB = function() { self.loadData("B"); }
    this.loadC = function() { self.loadData("C"); }
    this.loadD = function() { self.loadData("D"); }
    this.loadE = function() { self.loadData("E"); }
    this.archive = function(survey) {
      $.ajax({
        url: api + '/survey/' + survey.id + '/archive',
        dataType: 'json',
        type: 'put',
        contentType: 'application/json; charset=utf-8',
        data: '{ "status": 4, "L3": "' + TimeNow + '" }',
        success: function(data) {
          $('#showalert-archive').show();
          window.setTimeout(function() { $("#showalert-archive").slideUp(500, function() { $("#showalert-archive").hide(); }); }, 3000);
          self.removeSurvey(survey);
          $.ajax({
            url: api + '/log/' + userid + '/' + survey.id,
            dataType: 'json',
            type: 'post',
            contentType: 'application/json; charset=utf-8',
            data: '{ "surveyid": "' + survey.id + '", "userid": "' + userid + '", "ip": "' + ip + '", "data": "' + email + ' archived a survey named ' + survey.title() + '", "critical": "3" }',
            success: function(data) { result = data; }
          });
        },
        error: function(error) { self.onFail(error); }
      });
    }
    this.restore = function(survey) {
      $.ajax({
        url: api + '/survey/' + survey.id + '/restore',
        dataType: 'json',
        type: 'put',
        contentType: 'application/json; charset=utf-8',
        data: '{ "status": 3, "L3": NULL }',
        success: function(data) {
          $('#showalert-restore').show();
          window.setTimeout(function() { $("#showalert-restore").slideUp(500, function() { $("#showalert-restore").hide(); }); }, 3000);
          self.removeSurvey(survey);
          $.ajax({
            url: api + '/log/' + userid + '/' + survey.id,
            dataType: 'json',
            type: 'post',
            contentType: 'application/json; charset=utf-8',
            data: '{ "surveyid": "' + survey.id + '", "userid": "' + userid + '", "ip": "' + ip + '", "data": "' + email + ' restored a survey named ' + survey.title() + '", "critical": "3" }',
            success: function(data) { result = data; }
          });
        },
        error: function(error) { self.onFail(error); }
      });
    }
    this.delete = function(survey) {
      $.ajax({
        url: api + '/survey/' + survey.id + '/delete',
        dataType: 'json',
        type: 'put',
        contentType: 'application/json; charset=utf-8',
        data: '{ "status": 0 }',
        success: function(data) {
          $('#showalert-delete').show();
          window.setTimeout(function() { $("#showalert-delete").slideUp(500, function() { $("#showalert-delete").hide(); }); }, 3000);
          self.removeSurvey(survey);
          $.ajax({
            url: api + '/log/' + userid + '/' + survey.id,
            dataType: 'json',
            type: 'post',
            contentType: 'application/json; charset=utf-8',
            data: '{ "surveyid": "' + survey.id + '", "userid": "' + userid + '", "ip": "' + ip + '", "data": "' + email + ' deleted a survey named ' + survey.title() + '", "critical": "5" }',
            success: function(data) { result = data; }
          });
        },
        error: function(error) { self.onFail(error); }
      });
    }
    this.undelete = function(survey) {
      $.ajax({
        url: api + '/survey/' + survey.id + '/undelete',
        dataType: 'json',
        type: 'put',
        contentType: 'application/json; charset=utf-8',
        data: '{ "status": 4 }',
        success: function(data) {
          $('#showalert-restore').show();
          window.setTimeout(function() { $("#showalert-restore").slideUp(500, function() { $("#showalert-restore").hide(); }); }, 3000);
          self.removeSurvey(survey);
          $.ajax({
            url: api + '/log/' + userid + '/' + survey.id,
            dataType: 'json',
            type: 'post',
            contentType: 'application/json; charset=utf-8',
            data: '{ "surveyid": "' + survey.id + '", "userid": "' + userid + '", "ip": "' + ip + '", "data": "' + email + ' undeleted a survey named ' + survey.title() + '", "critical": "5" }',
            success: function(data) { result = data; }
          });
        },
        error: function(error) { self.onFail(error); }
      });
    }
    this.one2two = function(survey) {
      $.ajax({
        url: api + '/survey/' + survey.id + '/one2two',
        dataType: 'json',
        type: 'put',
        contentType: 'application/json; charset=utf-8',
        data: '{ "status": 2, "L1": "' + TimeNow + '" }',
        success: function(data) {
          $('#showalert-move').show();
          window.setTimeout(function() { $("#showalert-move").slideUp(500, function() { $("#showalert-move").hide(); }); }, 3000);
          self.removeSurvey(survey);
        },
        error: function(error) { self.onFail(error); }
      });
    }
    this.two2three = function(survey) {
      $.ajax({
        url: api + '/survey/' + survey.id + '/two2three',
        dataType: 'json',
        type: 'put',
        contentType: 'application/json; charset=utf-8',
        data: '{ "status": 3, "L2": "' + TimeNow + '" }',
        success: function(data) {
          $('#showalert-move').show();
          window.setTimeout(function() { $("#showalert-move").slideUp(500, function() { $("#showalert-move").hide(); }); }, 3000);
          self.removeSurvey(survey);
        },
        error: function(error) { self.onFail(error); }
      });
    }
    this.two2one = function(survey) {
      $.ajax({
        url: api + '/survey/' + survey.id + '/two2one',
        dataType: 'json',
        type: 'put',
        contentType: 'application/json; charset=utf-8',
        data: '{ "status": 1, "L1": NULL }',
        success: function(data) {
          $('#showalert-move').show();
          window.setTimeout(function() { $("#showalert-move").slideUp(500, function() { $("#showalert-move").hide(); }); }, 3000);
          self.removeSurvey(survey);
        },
        error: function(error) { self.onFail(error); }
      });
    }
    this.three2four = function(survey) {
      $.ajax({
        url: api + '/survey/' + survey.id + '/three2four',
        dataType: 'json',
        type: 'put',
        contentType: 'application/json; charset=utf-8',
        data: '{ "status": 4, "L3": "' + TimeNow + '" }',
        success: function(data) {
          $('#showalert-move').show();
          window.setTimeout(function() { $("#showalert-move").slideUp(500, function() { $("#showalert-move").hide(); }); }, 3000);
          self.removeSurvey(survey);
        },
        error: function(error) { self.onFail(error); }
      });
    }
    this.three2two = function(survey) {
      $.ajax({
        url: api + '/survey/' + survey.id + '/three2two',
        dataType: 'json',
        type: 'put',
        contentType: 'application/json; charset=utf-8',
        data: '{ "status": 2, "L2": NULL }',
        success: function(data) {
          $('#showalert-move').show();
          window.setTimeout(function() { $("#showalert-move").slideUp(500, function() { $("#showalert-move").hide(); }); }, 3000);
          self.removeSurvey(survey);
        },
        error: function(error) { self.onFail(error); }
      });
    }
    this.four2zero = function(survey) {
      $.ajax({
        url: api + '/survey/' + survey.id + '/four2zero',
        dataType: 'json',
        type: 'put',
        contentType: 'application/json; charset=utf-8',
        data: '{ "status": 0 }',
        success: function(data) {
          $('#showalert-move').show();
          window.setTimeout(function() { $("#showalert-move").slideUp(500, function() { $("#showalert-move").hide(); }); }, 3000);
          self.removeSurvey(survey);
        },
        error: function(error) { self.onFail(error); }
      });
    }
    this.four2three = function(survey) {
      $.ajax({
        url: api + '/survey/' + survey.id + '/four2three',
        dataType: 'json',
        type: 'put',
        contentType: 'application/json; charset=utf-8',
        data: '{ "status": 3, "L3": NULL }',
        success: function(data) {
          $('#showalert-move').show();
          window.setTimeout(function() { $("#showalert-move").slideUp(500, function() { $("#showalert-move").hide(); }); }, 3000);
          self.removeSurvey(survey);
        },
        error: function(error) { self.onFail(error); }
      });
    }
    this.zero2four = function(survey) {
      $.ajax({
        url: api + '/survey/' + survey.id + '/zero2four',
        dataType: 'json',
        type: 'put',
        contentType: 'application/json; charset=utf-8',
        data: '{ "status": 4 }',
        success: function(data) {
          $('#showalert-restore').show();
          window.setTimeout(function() { $("#showalert-restore").slideUp(500, function() { $("#showalert-restore").hide(); }); }, 3000);
          self.removeSurvey(survey);
        },
        error: function(error) { self.onFail(error); }
      });
    }
    this.change2public = function(survey) {
      $.ajax({
        url: api + '/survey/' + survey.id + '/change2public',
        dataType: 'json',
        type: 'put',
        contentType: 'application/json; charset=utf-8',
        data: '{ "private": 0 }',
        success: function(data) {
          $('#showalert-pp').show();
          window.setTimeout(function() { $("#showalert-pp").slideUp(500, function() { $("#showalert-pp").hide(); }); }, 3000);
          $.ajax({
            url: api + '/log',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json; charset=utf-8',
            data: '{ "surveyid": "' + survey.id + '", "userid": "' + userid + '", "ip": "' + ip + '", "data": "' + email + ' changed survey to public for ' + survey.title() + '", "critical": "3" }',
            success: function(data) { result = data; }
          });
        },
        error: function(error) { self.onFail(error); }
      });
      window.setTimeout(function() { window.location.reload(); }, 3300);
    }
    this.change2private = function(survey) {
      $.ajax({
        url: api + '/survey/' + survey.id + '/change2private',
        dataType: 'json',
        type: 'put',
        contentType: 'application/json; charset=utf-8',
        data: '{ "private": 1 }',
        success: function(data) {
          $('#showalert-pp').show();
          window.setTimeout(function() { $("#showalert-pp").slideUp(500, function() { $("#showalert-pp").hide(); }); }, 3000);
          $.ajax({
            url: api + '/log',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json; charset=utf-8',
            data: '{ "surveyid": "' + survey.id + '", "userid": "' + userid + '", "ip": "' + ip + '", "data": "' + email + ' changed survey to private for ' + survey.title() + '", "critical": "3" }',
            success: function(data) { result = data; }
          });
        },
        error: function(error) { self.onFail(error); }
      });
      window.setTimeout(function() { window.location.reload(); }, 3300);
    }
    this.removeSurvey = function(survey) {
      var index = self.surveys.indexOf(survey);
      if (index > -1) { self.surveys.splice(index, 1); }
    }
    // this.createNew = function() {
    //   self.isNewSurveyCreating(true);
    //   self.newSurveyName("My new project");
    // }
    this.cancelNew = function() {
      self.showDialog(false);
      // self.isNewSurveyCreating(false);
    }
    this.postNew = function() {
      self.cancelNew();
      $.ajax({
        url: api + '/user/' + companyid + '/' + userid + '/new?name=' + self.newSurveyName(),
        dataType: 'json',
        type: 'get',
        contentType: 'application/json; charset=utf-8',
        success: function(data) {
          $('#showalert-addnew').show();
          window.setTimeout(function() { $("#showalert-addnew").slideUp(500, function() { $("#showalert-addnew").hide(); }); }, 3000);
          console.log(data);
          // self.surveys.splice(0, 0, self.createSurveyObject(data));
          $.ajax({
            url: api + '/log/' + userid + '/' + data.id,
            dataType: 'json',
            type: 'post',
            contentType: 'application/json; charset=utf-8',
            data: '{ "surveyid": "' + data.id + '", "userid": "' + userid + '", "ip": "' + ip + '", "data": "' + email + ' created a new survey named ' + self.newSurveyName() + '", "critical": "3" }',
            success: function(data) { result = data; }
          });
        },
        error: function(error) { self.onFail(error); }
      });
      window.setTimeout(function() { window.location.reload(); }, 3300);
    }
    this.startEditOwner = function(survey) {
      survey.editingOwner(survey.userid());
      survey.isEditingOwner(true);
    }
    this.postEditOwner = function(survey) {
      self.cancelEditOwner(survey);
    }
    this.cancelEditOwner = function(survey) { survey.isEditingOwner(false); }
    this.startEdit = function(survey) {
      survey.editingName(survey.title());
      survey.isEditing(true);
    }
    this.postEdit = function(survey) {
      self.cancelEdit(survey);
      $.ajax({
        url: api + '/survey/' + survey.id + '/rename',
        dataType: 'json',
        type: 'put',
        contentType: 'application/json; charset=utf-8',
        data: '{ "title": "' + survey.editingName() + '" }',
        success: function(data) {
          survey.title(survey.editingName());
          $.ajax({
            url: api + '/log/' + userid + '/' + survey.id,
            dataType: 'json',
            type: 'post',
            contentType: 'application/json; charset=utf-8',
            data: '{ "surveyid": "' + survey.id + '", "userid": "' + userid + '", "ip": "' + ip + '", "data": "' + email + ' renamed a survey to ' + survey.title() + '", "critical": "3" }',
            success: function(data) { result = data; }
          });
        },
        error: function(error) { self.onFail(error); }
      });
    }
    this.cancelEdit = function(survey) { survey.isEditing(false); }
    this.startEditDescription = function(survey) {
      survey.editingDescription(survey.description());
      survey.isEditingDescription(true);
    }
    this.postEditDescription = function(survey) {
      self.cancelEditDescription(survey);
      $.ajax({
        url: api + '/survey/' + survey.id + '/redescription',
        dataType: 'json',
        type: 'put',
        contentType: 'application/json; charset=utf-8',
        data: '{ "description": "' + survey.editingDescription() + '" }',
        success: function(data) {
          survey.description(survey.editingDescription());
          $.ajax({
            url: api + '/log/' + userid + '/' + survey.id,
            dataType: 'json',
            type: 'post',
            contentType: 'application/json; charset=utf-8',
            data: '{ "surveyid": "' + survey.id + '", "userid": "' + userid + '", "ip": "' + ip + '", "data": "' + email + ' changed a description for ' + survey.title() + '", "critical": "3" }',
            success: function(data) { result = data; }
          });
        },
        error: function(error) { self.onFail(error); }
      });
    }
    this.cancelEditDescription = function(survey) { survey.isEditingDescription(false); }
    this.startEditPP = function(survey) {
      survey.editingPP(survey.private());
      survey.isEditingPP(true);
    }
    this.postEditPP = function(survey) {
      self.cancelEditPP(survey);
    }
    this.cancelEditPP = function(survey) { survey.isEditingPP(false); }
    this.changingowner = function(survey) {
      $.ajax({
        url: api + '/survey/' + survey.id + '/reowner',
        dataType: 'json',
        type: 'put',
        contentType: 'application/json; charset=utf-8',
        data: '{ "userid": ' + survey.selectedUser() + ' }',
        success: function(data) {
          $('#showalert-reowner').show();
          window.setTimeout(function() { $("#showalert-reowner").slideUp(500, function() { $("#showalert-reowner").hide(); }); }, 3000);
          $.ajax({
            url: api + '/log',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json; charset=utf-8',
            data: '{ "surveyid": "' + survey.id + '", "userid": "' + userid + '", "ip": "' + ip + '", "data": "' + email + ' changed survey owner for ' + survey.title() + '", "critical": "4" }',
            success: function(data) { result = data; }
          });
        },
        error: function(error) { self.onFail(error); }
      });
      window.setTimeout(function() { window.location.reload(); }, 3300);
    }
    this.createSurveyObject = function(data) {
      var canedit = false; var owner = false; var admin = false;
      if (userid == data.userid) { owner = true; }
      if (level == 9) { canedit = true; admin = true; } else if (level == 4) { canedit = true; }
      else if (level == 3) { if (owner == true) { canedit = true; } } else if (level == 2) { canedit = false; }
      moment.locale('en');
      var s1 = moment(data.created).fromNow(); var s2 = moment(data.created).format("D MMM YYYY"); created = s2 + ' (' + s1 + ')';
      var t1 = moment(data.updated).fromNow(); var t2 = moment(data.updated).format("D MMM YYYY"); updated = t2 + ' (' + t1 + ')';
      return new Listing(data.title, data.description, data.userid, created, updated, data.id, data.email, data.fullname, data.company, data.companyid, data.private, canedit, owner, admin, data.rD, UserListing, data.data);
    }
    this.onFail = function(error) { alert(JSON.stringify(error)); }
    this.showInfo = function(survey) { survey.showInfo(!survey.showInfo()); }
    <?php
    if ($_GET['c'] == "A") { echo "this.loadA();"; }
    else if ($_GET['c'] == "B") { echo "this.loadB();"; }
    else if ($_GET['c'] == "C") { echo "this.loadC();"; }
    else if ($_GET['c'] == "D") { echo "this.loadD();"; }
    else if ($_GET['c'] == "E") { echo "this.loadE();"; }
    else { echo "this.loadA();"; }
    ?>
  }
  jQuery(document).ready(function() {
    ko.applyBindings(new ViewModel());
  });
  // $('.pe-edit').mouseover(function() {
  //   $(this).css("cursor", "pointer");
  //   $(this).attr("title", "Edit");
  // });
  // $('.pe-times-circle-o').mouseover(function() {
  //   $(this).css("cursor", "pointer");
  //   $(this).attr("title", "Close");
  // });
  $('#submitnewproject').attr('disabled', true);
  $('#newname').keyup(function() {
    if ($(this).val().length !=0) { $('#submitnewproject').attr('disabled', false); }
    else { $('#submitnewproject').attr('disabled', true); }
  })
</script>

<br>
<br style="margin-bottom:50px">

<div class="" style="background:mintcream; padding:20px; border: 2px solid grey; border-radius:30px">
  <p class="text-muted">Label definition</p>
  <div class="row">
    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
      <table class="table table-condensed small">
        <tbody>
          <tr>
            <td><button class="btn btn-tiny btn-default">Questionnaire design <i class="pe-edit"></i></button></td>
            <td class="small">Enter the questionnaire design mode for editing all questions in the questionnaire.</td>
          </tr>
          <tr>
            <td><button class="btn btn-tiny btn-default">Pilot test <i class="pe-paper-plane"></i></button></td>
            <td class="small">Conduct a pilot test on the questionnaire replicating the same view as respondent.</td>
          </tr>
          <tr>
            <td><button class="btn btn-tiny btn-danger">Delete <i class="pe-trash"></i></button></td>
            <td class="small">Delete a project from the system permanantly (no-going back once deleted, please be very sure).</td>
          </tr>
          <tr>
            <td><button class="btn btn-tiny btn-success">Live <i class="pe-plane"></i></button></td>
            <td class="small">View the real questionnaire in action which is exactly the same version that used with respondents.</td>
          </tr>
          <tr>
            <td><button class="btn btn-tiny btn-default">Progress <i class="pe-flask"></i></button></td>
            <td class="small">Monitor data-collection strike rate and success rate plus a quick view of interim data.</td>
          </tr>
          <tr>
            <td><button class="btn btn-tiny btn-default">Result <i class="pe-line-chart"></i></button></td>
            <td class="small">Real-time results in graph &amp; table and the full data file can be downloaded in key formats.</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
      <table class="table table-condensed small">
        <tbody>
          <tr>
            <td><button class="btn btn-tiny btn-default">Info <i class="pe-chevron-down"></i></button></td>
            <td class="small">Project information such as title or description which can be edited either by owner or Manager.</td>
          </tr>
          <tr>
            <td><button class="btn btn-tiny btn-default">Archive <i class="pe-archive"></i></button></td>
            <td class="small">Manually move a project from completion to archive folder so it becomes inactive but can still refer to.</td>
          </tr>
          <tr>
            <td><button class="btn btn-tiny btn-default">Restore <i class="pe-undo"></i></button></td>
            <td class="small">Restore a project from archive foler back to completion so it becomes active again.</td>
          </tr>
          <tr>
            <td><button class="btn btn-tiny btn-primary">1,681 respondent(s) <i class="pe-users"></i></button></td>
            <td class="small">Information about respondents in the database which is only available for project private type.</td>
          </tr>
          <tr>
            <td><small><i class="pe-folder-o"></i> Private</small></td>
            <td class="small">A project that runs the data collection among its own target group (name list is required).</td>
          </tr>
          <tr>
            <td><small><i class="pe-folder-open-o"></i> Public</small></td>
            <td class="small">A project that runs the data collection among respondents in our panel.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>


<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
