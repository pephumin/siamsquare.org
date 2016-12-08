<?php

$title = "All survey projects";
$titleA = "Set up";
$titleB = "Data-collection";
$titleC = "Completed";
$titleD = "Archived";

$details = "All surveys that are belonged to either youself or the company. All of them are categorised into 4 groups based on their life-stage starting from Set-up, Data-collection, Completed and Archived.";
$detailsA = "Surveys in the Set-up section are still under the development of questionnaire which incudes questionnaire design, questionnaire translation, and pilot interview to ensure the right flow is in place.";
$detailsB = "Surveys in the Data-collection section are currently on fieldwork. We do not allow any changes to be made to the questionnaire at this stage anymore in order to prevent a mismatch between designed question and collected data at the analysis stage.";
$detailsC = "Surveys in the Completed section are ready for analysis as their fildwork period has ended. We provide online tools for the real-time result analysis with an option to download the data file for a more in-depth data manipulation.";
$detailsD = "Surveys in the Archived section are inactive. These surveys can be moved to be active again should you need to. We suggest leaving them in this section rather than delete them from the system completely.";

if ($_GET['c'] == "A") { $title = $titleA; $details = $detailsA; }
else if ($_GET['c'] == "B") { $title = $titleB; $details = $detailsB; }
else if ($_GET['c'] == "C") { $title = $titleC; $details = $detailsC; }
else if ($_GET['c'] == "D") { $title = $titleD; $details = $detailsD; }
else { $title = $title; $details = $details; }

pageHeader($title);
echo "<h2>$title</h2>\n";
echo "<p>$details</p>\n";

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
      </ul>
    </nav>
  </div>
  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="margin-top:30px">
    <p data-bind="visible: showActive() == 'A'" class="text-muted"><?php echo $detailsA; ?></p>
    <p data-bind="visible: showActive() == 'B'" class="text-muted"><?php echo $detailsB; ?></p>
    <p data-bind="visible: showActive() == 'C'" class="text-muted"><?php echo $detailsC; ?></p>
    <p data-bind="visible: showActive() == 'D'" class="text-muted"><?php echo $detailsD; ?></p>
  </div>
  <?php if ($_SESSION['level'] >= "5") { ?>
  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
    <p class="pull-right"><a class="btn btn-primary" data-bind="click: createNew, visible: showActive() == 'A', enable: !isNewSurveyCreating()" href=""><i class="pe-cube pe-fw"></i> New project</a></p>
  </div>
  <?php } ?>
</div>

<?php } ?>

<div id="showalert-delete"></div><div id="showalert-restore"></div><div id="showalert-archive"></div><div id="showalert-move"></div><div id="showalert-pp"></div>

<table class="table table-hover">
  <thead>
    <tr class="bg-primary">
      <th width="30%"><i class="pe-cube pe-fw"></i> Project</th>
      <th width="20%"><i class="pe-calendar pe-fw"></i> Created</th>
      <th width="20%"><i class="pe-clock-o pe-fw"></i> Last updated <i class="pe-caret-down pe-fw"></i></th>
      <th width="30%"><i class="pe-cogs pe-fw"></i> Actions</th>
    </tr>
  </thead>
  <tbody>
  <?php if ($_SESSION['level'] >= "5") { ?>
    <tr data-bind="visible: isNewSurveyCreating" class="bg-info">
      <td colspan="3"><input type="text" class="form-control" data-bind="textInput: newSurveyName" placeholder="Enter a new project name" onclick="this.select()"></td>
      <td>
        <a class="btn btn-xs" data-bind="click: postNew, enable: newSurveyName() != ''" href="">Create <i class="pe-check-circle-o"></i></a>
        <a class="btn btn-xs" data-bind="click: cancelNew" href="">Cancel <i class="pe-times-circle-o"></i></a>
      </td>
    </tr>
  <?php } ?>
    <!-- ko foreach: surveys -->
    <tr>
      <td>
        <a href="" data-bind="click: $parent.showInfo" title="More Info..."><i data-bind="css: {'pe-chevron-down': !showInfo(), 'pe-chevron-up': showInfo()}"></i></a>&nbsp;
        <span data-bind="text: title"></span> <span data-bind="if: owner" class="label label-danger">OWNER</span> <span data-bind="if: private" class="label label-success">PRIVATE</span>
      </td>
      <td>
        <small><span data-bind="text: created"></span></small>
      </td>
      <td>
        <small><span data-bind="text: updated"></span></small>
      </td>
      <td>
        <div data-bind="if: canedit">
          <a class="btn btn-default btn-xs" data-bind="attr: { href: '/admin/?w=edit&amp;s=' + id }, visible: $parent.showActive() == 'A'">Design <i class="pe-edit"></i></a>
          <a class="btn btn-default btn-xs" data-bind="attr: { href: '/admin/?w=pilot&amp;s=' + id }, visible: $parent.showActive() == 'A'">Pilot test <i class="pe-paper-plane"></i></a>
          <?php if ($_SESSION['level'] == "9") { ?><a class="orange" title="Move to the next step" data-bind="click: $parent.one2two, visible: $parent.showActive() == 'A'" href=""><i class="pe-arrow-circle-right pe-lg"></i></a><?php } ?>
        </div>
        <div data-bind="if: canedit">
          <?php if ($_SESSION['level'] == "9") { ?><a class="orange" title="Move to the previous step" data-bind="click: $parent.two2one, visible: $parent.showActive() == 'B'" href=""><i class="pe-arrow-circle-left pe-lg"></i></a><?php } ?>
          <a class="btn btn-default btn-xs" data-bind="attr: { href: '/admin/?w=progress&amp;s=' + id }, visible: $parent.showActive() == 'B'">Progress <i class="pe-flask"></i></a>
          <a class="btn btn-default btn-xs" data-bind="attr: { href: '/admin/?w=interim&amp;s=' + id }, visible: $parent.showActive() == 'B'">Interim <i class="pe-binoculars"></i></a>
          <a class="btn btn-primary btn-xs" data-bind="attr: { href: '/members/?w=run&amp;by=pass&amp;s=' + id }, visible: $parent.showActive() == 'B'" target="_blank">Live <i class="pe-plane"></i></a>
          <?php if ($_SESSION['level'] == "9") { ?><a class="orange" title="Move to the next step" data-bind="click: $parent.two2three, visible: $parent.showActive() == 'B'" href=""><i class="pe-arrow-circle-right pe-lg"></i></a><?php } ?>
        </div>
        <div data-bind="if: canedit">
          <?php if ($_SESSION['level'] == "9") { ?><a class="orange" title="Move to the previous step" data-bind="click: $parent.three2two, visible: $parent.showActive() == 'C'" href=""><i class="pe-arrow-circle-left pe-lg"></i></a><?php } ?>
          <!-- <a class="btn btn-default btn-xs" data-bind="attr: { href: '/admin/?w=data&amp;s=' + id }, visible: $parent.showActive() == 'C'">Data <i class="pe-table"></i></a> -->
          <a class="btn btn-default btn-xs" data-bind="attr: { href: '/admin/?w=result&amp;s=' + id }, visible: $parent.showActive() == 'C'">Result <i class="pe-line-chart"></i></a>
          <a class="btn btn-warning btn-xs" data-bind="click: $parent.archive, visible: $parent.showActive() == 'C'" href="">Archive <i class="pe-archive"></i></a>
          <?php if ($_SESSION['level'] == "9") { ?><a class="orange" title="Move to the next step" data-bind="click: $parent.three2four, visible: $parent.showActive() == 'C'" href=""><i class="pe-arrow-circle-right pe-lg"></i></a><?php } ?>
        </div>
        <div data-bind="if: canedit">
          <?php if ($_SESSION['level'] == "9") { ?><a class="orange" title="Move to the previous step" data-bind="click: $parent.four2three, visible: $parent.showActive() == 'D'" href=""><i class="pe-arrow-circle-left pe-lg"></i></a><?php } ?>
          <a class="btn btn-warning btn-xs" data-bind="click: $parent.restore, visible: $parent.showActive() == 'D'" href="">Restore <i class="pe-undo"></i></a>
          <a class="btn btn-danger btn-xs" data-bind="click: $parent.delete, visible: $parent.showActive() == 'D'" href="">Delete <i class="pe-trash"></i></a>
        </div>
      </td>
    </tr>
    <tr data-bind="style: { 'background-color': showInfo() ? 'whitesmoke' : 'none' }, visible: showInfo">
      <td colspan="4" class="grey">
        <div class="row" data-bind="visible: !isEditingOwner()">
          <div class="col-sm-3 small" style="padding:10px 20px">Project owner <a href="" data-bind="if: canedit, click: $parent.startEditOwner, visible: $parent.showActive() == 'A'" title="Change project owner"> <i class="pe-edit"></i></a></div>
          <div class="col-sm-9" style="padding:10px 20px">
            <div class="col-sm-6 small" style="padding:0px"><strong><span data-bind="text: fullname"></span></strong> (<span data-bind="text: email"></span>)</div>
          </div>
        </div>
        <div class="row" data-bind="visible: isEditingOwner()">
          <div class="col-sm-3 small" style="padding:10px 20px">Project owner <a href="" data-bind="click: $parent.cancelEditOwner"><i class="pe-times-circle-o"></i></a></div>
          <div class="col-sm-9" style="padding:10px 20px">
            <div class="col-sm-6 small" style="padding:0px"><select data-bind="options: $root.availableUsers, optionsText: 'fullname', value: selectedUser, optionValue: 'selectedUser', optionsCaption: 'Choose...'" class="form-control input-sm"></select><div data-bind="visible: selectedUser"> You have chosen <span data-bind="text: selectedUser() ? selectedUser().userid : 'unknown'"></span></div></div>
          </div>
        </div>
        <div class="row" data-bind="visible: !isEditing()">
          <div class="col-sm-3 small" style="padding:10px 20px">Project name <a href="" data-bind="if: canedit, click: $parent.startEdit, visible: $parent.showActive() == 'A'" title="Change project name"> <i class="pe-edit"></i></a></div>
          <div class="col-sm-9" style="padding:10px 20px">
            <div class="col-sm-6 small" style="padding:0px"><span data-bind="text: title"></span> (surveyid = <span data-bind="text: id"></span>)</div>
          </div>
        </div>
        <div class="row" data-bind="visible: isEditing()">
          <div class="col-sm-3 small" style="padding:10px 20px">Project name <a href="" data-bind="click: $parent.cancelEdit"><i class="pe-times-circle-o"></i></a></div>
          <div class="col-sm-9" style="padding:10px 20px">
            <div class="col-sm-6 small" style="padding:0px">
              <input data-bind="textInput: editingName" onclick="this.select()" class="form-control input-sm"><br>
              <a class="btn btn-sm" data-bind="click: $parent.postEdit, enable: title() != ''" href="">Rename <i class="pe-check-circle-o"></i></a>
              <a class="btn btn-sm" data-bind="click: $parent.cancelEdit" href="">Cancel <i class="pe-times-circle-o"></i></a>
            </div>
          </div>
        </div>
        <div class="row" data-bind="visible: !isEditingDescription()">
          <div class="col-sm-3 small" style="padding:10px 20px">Description <a href="" data-bind="if: canedit, click: $parent.startEditDescription, visible: $parent.showActive() == 'A'" title="Change project description"> <i class="pe-edit"></i></a></div>
          <div class="col-sm-9 small" style="padding:10px 20px"><span data-bind="text: description"></span></div>
        </div>
        <div class="row" data-bind="visible: isEditingDescription()">
          <div class="col-sm-3 small" style="padding:10px 20px">Description <a href="" data-bind="click: $parent.cancelEditDescription"><i class="pe-times-circle-o"></i></a></div>
          <div class="col-sm-9" style="padding:10px 20px">
            <textarea data-bind="textInput: editingDescription, visible: isEditingDescription()" onclick="this.select()" class="form-control input-sm" rows="5"></textarea><br>
            <a class="btn btn-sm" data-bind="click: $parent.postEditDescription, enable: description() != ''" href="">Update <i class="pe-check-circle-o"></i></a>
            <a class="btn btn-sm" data-bind="click: $parent.cancelEditDescription" href="">Cancel <i class="pe-times-circle-o"></i></a>
          </div>
        </div>
        <div class="row" data-bind="visible: !isEditingPP()">
          <div class="col-sm-3 small" style="padding:10px 20px">Type of survey <a href="" data-bind="if: canedit, click: $parent.startEditPP, visible: $parent.showActive() == 'A'" title="Change type of survey"> <i class="pe-edit"></i></a></div>
          <div class="col-sm-9 small" style="padding:10px 20px">
            <div class="col-sm-4 small" style="padding:0px"><strong><span data-bind="text: pp"></span></strong></div>
            <div class="col-sm-4 small" style="padding:0px" data-bind="if: canedit"><a class="btn btn-default btn-xs" data-bind="attr: { href: '/admin/?w=respondents&amp;s=' + id }, visible: pp == 'Private'">Manage respondents <i class="pe-users"></i></a></div>
            <div class="col-sm-4 small" style="padding:0px" data-bind="if: canedit"><a class="btn btn-default btn-xs" data-bind="attr: { href: '/admin/?w=template&amp;s=' + id }, visible: pp == 'Private'">Edit survey &amp; email template <i class="pe-wpforms"></i></a></div>
          </div>
        </div>
        <div class="row" data-bind="visible: isEditingPP()">
          <div class="col-sm-3 small" style="padding:10px 20px">Type of survey <a href="" data-bind="click: $parent.cancelEditPP"><i class="pe-times-circle-o"></i></a></div>
          <div class="col-sm-9" style="padding:10px 20px">
            <div class="col-sm-12 small" style="padding:0px">
              <div data-bind="if: private">
                <a class="btn btn-default btn-tiny" data-bind="click: $parent.toPublic, visible: $parent.showActive() == 'A'" href="">Make it Public <i class="pe-train"></i></a>
                <a class="btn btn-default btn-tiny" data-bind="click: $parent.toPrivate, visible: $parent.showActive() == 'A'" href="" disabled>Make it Private <i class="pe-car"></i></a>
                <a class="btn btn-default btn-tiny" data-bind="click: $parent.cancelEditPP, visible: $parent.showActive() == 'A'" href="">Cancel <i class="pe-times-circle-o"></i></a>
              </div>
              <div data-bind="ifnot: private">
                <a class="btn btn-default btn-tiny" data-bind="click: $parent.toPublic, visible: $parent.showActive() == 'A'" href="" disabled>Make it Public <i class="pe-train"></i></a>
                <a class="btn btn-default btn-tiny" data-bind="click: $parent.toPrivate, visible: $parent.showActive() == 'A'" href="">Make it Private <i class="pe-car"></i></a>
                <a class="btn btn-default btn-tiny" data-bind="click: $parent.cancelEditPP, visible: $parent.showActive() == 'A'" href="">Cancel <i class="pe-times-circle-o"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 small" style="padding:10px 20px" data-bind="if: canedit">
            <a class="btn btn-danger btn-xs pull-right" href="" style="white-space:normal;width:100px;word-wrap:break-word"><i class="pe-flag-checkered pe-fw"></i> Ready for fieldwork</a>
            Once you are sure this project is ready for fieldwork, please submit your request using this button and we will proceed for you as soon as possible. <strong>It is important to understand that once the project is moved to the Data-collection stage, you <em>will not</em> be able to make any changes in the questionaire at all</strong>.
          </div>
        </div>
      </td>
    </tr>
    <!-- /ko -->
  </tbody>
</table>




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
  $('#showalert-move').html("<div class='alert alert-info'><i class='pe-exchange pe-fw'></i> The project has been moved to a different stage</div>").hide();
  $('#showalert-pp').html("<div class='alert alert-info'><i class='pe-exchange pe-fw'></i> The project scope has been changed between Public vs. Private</div>").hide();

  Date.prototype.toMysqlFormat = function () {
    function pad(n) { return n < 10 ? '0' + n : n }
    return this.getFullYear() + "-" + pad(1 + this.getMonth()) + "-" + pad(this.getDate()) + " " + pad(this.getHours()) + ":" + pad(this.getMinutes()) + ":" + pad(this.getSeconds());
  };
  var TimeNow = new Date().toMysqlFormat();

  var Listing = function (title, description, userid, created, updated, id, email, fullname, company, companyid, private, canedit, owner) {
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
    this.email = email;
    this.fullname = fullname;
    this.company = company;
    this.companyid = companyid;
    this.private = ko.observable(private);
    this.showInfo = ko.observable(false);
    this.isEditingOwner = ko.observable(false);
    this.isEditing = ko.observable(false);
    this.isEditingDescription = ko.observable(false);
    this.isEditingPP = ko.observable(false);
    this.canedit = canedit;
    this.owner = owner;
    // this.selectedOption = ko.observable(private);
    if (private) { this.pp = "Private"; } else { this.pp = "Public"; }
    this.users = ko.observableArray([]);
    this.availableUsers = ko.observableArray([]);
    // this.availableUsers = ko.observableArray([]);
    // this.availableUsers = ko.observableArray([
    //   new User("Person A", 000001),
    //   new User("Person B", 000002),
    //   new User("Person C", 000005)
    // ]),
    this.selectedUser = ko.observable() // Nothing selected by default
  }
  // function User(data) {
  //   this.fullname = ko.observable(data.fullname);
  //   this.userid = ko.observable(data.userid);
  // }
  var User = function(data) {
    this.fullname = ko.observable(data.fullname);
    this.userid = ko.observable(data.userid);
  }
  var ViewModel = function () {
    var self = this;
    // this.availableUsers = ko.observableArray([]);
    this.users = ko.observableArray([]);
    this.availableUsers = ko.observableArray([]);
    this.surveys = ko.observableArray([]);
    this.url = api;
    this.showActive = ko.observable(true);
    this.isNewSurveyCreating = ko.observable(false);
    this.newSurveyName = ko.observable("New project");
    this.loadData = function (i) {
      self.showActive(i);
      if (level == 9) { var url = "/all/" + i; }
      else { var url = "/company/" + companyid + "/" + i; }
      $.getJSON(self.url + url, function (data) {
        var list = [];
        for (var i = 0; i < data.length; i++) { list.push(self.createSurveyObject(data[i])); }
        self.surveys(list);
      }).fail(function (error) { self.onFail(error); });
    }
    this.loadA = function () { self.loadData("A"); }
    this.loadB = function () { self.loadData("B"); }
    this.loadC = function () { self.loadData("C"); }
    this.loadD = function () { self.loadData("D"); }

    this.loadUser = function () {
      var self = this;
      this.url = api;
      var url = "/member/" + companyid;
      $.ajax({
        url: api + url,
        dataType: 'json',
        type: 'get',
        contentType: 'application/json; charset=utf-8',
        async: false,
        success: function (data) {
          var ulist = [];
          // $.each(data, function (index, value) { ulist.push(value); });
          for (var i = 0; i < data.length; i++) { ulist.push(self.createUserObject(data[i])); }
          self.availableUsers(ulist);
        }
      });
    }
    this.createUserObject = function (data) {
      // var fullname = ko.observable(data.fullname);
      // var userid = ko.observable(data.userid);
      return new User(data.fullname, data.userid);
    }
    this.loadU = function () { self.loadUser(); }
    this.loadU();



    this.archive = function (survey) {
      $.ajax({
        url: api + '/survey/' + survey.id + '/archive',
        dataType: 'json',
        type: 'put',
        contentType: 'application/json; charset=utf-8',
        data: '{ "status": 4 }',
        success: function (data) {
          $('#showalert-archive').show();
          window.setTimeout(function () { $("#showalert-archive").slideUp(500, function () { $("#showalert-archive").hide(); }); }, 5000);
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
        data: '{ "status": 3 }',
        success: function (data) {
          $('#showalert-restore').show();
          window.setTimeout(function () { $("#showalert-restore").slideUp(500, function () { $("#showalert-restore").hide(); }); }, 5000);
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
        data: '{ "status": -1 }',
        success: function (data) {
          $('#showalert-delete').show();
          window.setTimeout(function () { $("#showalert-delete").slideUp(500, function () { $("#showalert-delete").hide(); }); }, 5000);
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
    this.one2two = function (survey) {
      $.ajax({
        url: api + '/survey/' + survey.id + '/one2two',
        dataType: 'json',
        type: 'put',
        contentType: 'application/json; charset=utf-8',
        data: '{ "status": 2, "L1": "' + TimeNow + '" }',
        success: function (data) {
          $('#showalert-move').show();
          window.setTimeout(function () { $("#showalert-move").slideUp(500, function () { $("#showalert-move").hide(); }); }, 5000);
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
          window.setTimeout(function () { $("#showalert-move").slideUp(500, function () { $("#showalert-move").hide(); }); }, 5000);
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
        data: '{ "status": 1 }',
        success: function (data) {
          $('#showalert-move').show();
          window.setTimeout(function () { $("#showalert-move").slideUp(500, function () { $("#showalert-move").hide(); }); }, 5000);
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
          window.setTimeout(function () { $("#showalert-move").slideUp(500, function () { $("#showalert-move").hide(); }); }, 5000);
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
        data: '{ "status": 2 }',
        success: function (data) {
          $('#showalert-move').show();
          window.setTimeout(function () { $("#showalert-move").slideUp(500, function () { $("#showalert-move").hide(); }); }, 5000);
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
        data: '{ "status": 3 }',
        success: function (data) {
          $('#showalert-move').show();
          window.setTimeout(function () { $("#showalert-move").slideUp(500, function () { $("#showalert-move").hide(); }); }, 5000);
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
          window.setTimeout(function () { $("#showalert-pp").slideUp(500, function () { $("#showalert-pp").hide(); }); }, 5000);
          $.ajax({
            url: api + '/log',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json; charset=utf-8',
            data: '{ "userid": "' + userid + '", "ip": "' + ip + '", "data": "' + email + ' changed survey to public for ' + survey.title() + ' (id=' + survey.id + ')", "critical": "3" }',
            success: function(data) { result = data; }
          });
          window.location.reload();
        },
        error: function (error) { self.onFail(error); }
      });
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
          window.setTimeout(function () { $("#showalert-pp").slideUp(500, function () { $("#showalert-pp").hide(); }); }, 5000);
          $.ajax({
            url: api + '/log',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json; charset=utf-8',
            data: '{ "userid": "' + userid + '", "ip": "' + ip + '", "data": "' + email + ' changed survey to private for ' + survey.title() + ' (id=' + survey.id + ')", "critical": "3" }',
            success: function(data) { result = data; }
          });
          window.location.reload();
        },
        error: function (error) { self.onFail(error); }
      });
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
        url: api + '/user/' + userid + '/new?name=' + self.newSurveyName(),
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
      // $.ajax({
      //   url: api + '/survey/' + survey.id + '/reowner',
      //   dataType: 'json',
      //   type: 'put',
      //   contentType: 'application/json; charset=utf-8',
      //   data: '{ "description": "' + survey.editingOwner() + '" }',
      //   success: function (data) {
      //     survey.owner(survey.editingOwner());
      //     $.ajax({
      //       url: api + '/log/' + userid + '/' + survey.id,
      //       dataType: 'json',
      //       type: 'post',
      //       contentType: 'application/json; charset=utf-8',
      //       data: '{ "userid": "' + userid + '", "ip": "' + ip + '", "data": "' + email + ' changed a description for ' + survey.title() + ' (id=' + survey.id + ')", "critical": "3" }',
      //       success: function(data) { result = data; }
      //     });
      //   },
      //   error: function (error) { self.onFail(error); }
      // });
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
      // console.log(survey.editingPP());
      // $.ajax({
      //   url: api + '/survey/' + survey.id + '/repp',
      //   dataType: 'json',
      //   type: 'put',
      //   contentType: 'application/json; charset=utf-8',
      //   data: '{ "private": "' + survey.editingPP() + '" }',
      //   success: function (data) {
      //     survey.private(survey.editingPP());
      //     // $.ajax({
      //     //   url: api + '/log/' + userid + '/' + survey.id,
      //     //   dataType: 'json',
      //     //   type: 'post',
      //     //   contentType: 'application/json; charset=utf-8',
      //     //   data: '{ "userid": "' + userid + '", "ip": "' + ip + '", "data": "' + email + ' changed a description for ' + survey.title() + ' (id=' + survey.id + ')", "critical": "3" }',
      //     //   success: function(data) { result = data; }
      //     // });
      //   },
      //   error: function (error) { self.onFail(error); }
      // });
    }
    this.cancelEditPP = function (survey) { survey.isEditingPP(false); }
    this.createSurveyObject = function (data) {
      var canedit = false; var owner = false;
      if (userid == data.userid) { var owner = true; }
      if (level == 9) { var canedit = true; } else if (level == 6) { var canedit = true; }
      else if (level == 5) { if (owner == true) { var canedit = true; } }
      moment.locale('en');
      var s1 = moment(data.created).fromNow(); var s2 = moment(data.created).format("D MMM YYYY"); created = s2 + ' (' + s1 + ')';
      var t1 = moment(data.updated).fromNow(); var t2 = moment(data.updated).format("D MMM YYYY"); updated = t2 + ' (' + t1 + ')';
      return new Listing(data.title, data.description, data.userid, created, updated, data.id, data.email, data.fullname, data.company, data.companyid, data.private, canedit, owner);
    }
    this.onFail = function (error) { alert(JSON.stringify(error)); }
    this.showInfo = function (survey) { survey.showInfo(!survey.showInfo()); }
    <?php
    if ($_GET['c'] == "A") { echo "this.loadA();"; }
    else if ($_GET['c'] == "B") { echo "this.loadB();"; }
    else if ($_GET['c'] == "C") { echo "this.loadC();"; }
    else if ($_GET['c'] == "D") { echo "this.loadD();"; }
    else { echo "this.loadA();"; }
    ?>
  }
  jQuery(document).ready(function () { ko.applyBindings(new ViewModel()); });
</script>

<style media="screen">
label.btn > input[type='radio'] { display: none; }
</style>

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
