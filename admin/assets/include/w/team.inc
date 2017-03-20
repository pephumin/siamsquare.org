<?php

$title = "Team members";
pageHeader($title);
echo "<h2>$title</h2>";
echo "<p>If your level is Manager, you have an ability to manage your team members which includes adding a new user, editing or suspending an existing user, or even deleting should you need to. For others who are not Manager, this page will be more or less read-only for you.</p>\n";
echo "<p>And when adding a new member, you must make sure <strong>a valid email is used</strong> and <strong>the new member must activate his/her account</strong> (at <a href=\"http://www.siamsquare.org/admin/setup/\" title=\"Account Activation\">http://www.siamsquare.org/admin/setup/</a>) before he/she can access our system.</p>\n";
echo "<p></p><br>\n";

$rolelist = "[ ";
$rolelist .= "new RoleListing(6, \"Manager\"), ";
$rolelist .= "new RoleListing(5, \"User\"), ";
$rolelist .= "new RoleListing(4, \"Guest\"), ";
$rolelist .= " ]";

?>

<div class="rows">
  <?php if ($_SESSION['level'] >= "6") { ?>
  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="text-align:right">
    <p class="pull-right"><a class="btn btn-success" data-bind="click: createNew, enable: !isNewMemberCreating()" href=""><i class="pe-user-plus pe-fw"></i> New member</a></p>
  </div>
  <?php } ?>
  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
    <div id="showalert-create"></div><div id="showalert-delete"></div><div id="showalert-edit"></div><div id="showalert-suspend"></div><div id="showalert-reactivate"></div><div id="showalert-changerole"></div>
  </div>
</div>
<br>
<div class="row">
<?php if ($_SESSION['level'] >= "6") { ?>
  <div data-bind="visible: isNewMemberCreating" class="col-xs-6 col-sm-4 col-md-4 col-lg-4" style="margin-bottom:20px">
    <div class="members">
      <div class="opq">
        <div class="members-header-new"></div>
        <div class="members-body">
          <h4 class="fullname">Create a new member</h4>
          <div class="email small">(Using the below avatar as a default)</div>
          <p><img src="/admin/assets/img/u/M10.svg" class="img-circle members-photo" alt="Avatar"></p>
          <div class="input-group"><span class="input-group-addon"><small>Name:</small></span><input type="text" class="form-control input-sm" data-bind="textInput: newMemberName" onclick="this.select()" placeholder="Enter first and last name"></div><br>
          <div class="input-group"><span class="input-group-addon"><small>Email</small>:</span><input type="text" class="form-control input-sm" data-bind="textInput: newMemberEmail" onclick="this.select()" placeholder="Enter email address"></div><br>
          <a class="btn btn-primary btn-tiny" data-bind="click: postNew, enable: newMemberName() != '', enable: newMemberEmail() != ''" href=""><i class="pe-user-plus"></i> Create</a>
          <a class="btn btn-default btn-tiny" data-bind="click: cancelNew" href=""><i class="pe-times-circle-o"></i> Cancel</a><br><br>
          <small class="red">Only create using a working email</small>
          <br><br>
        </div>
      </div>
    </div>
  </div>
<?php } ?>
  <!-- ko foreach: members -->
  <div class="col-xs-6 col-sm-4 col-md-4 col-lg-4" style="margin-bottom:20px">
    <div class="members">
      <div class="ribbon" data-bind="visible: issuspended"><div class="ribbon-wrapper" data-toggle="tooltip" data-placement="left" title="This user is currently suspended. Only Manager can enable access to this user again by clicking Reactivate button."><div class="ribbon-text">Suspended</div></div></div>​
      <div class="opq" data-bind="css: { 'opaque': issuspended }">
        <div class="members-header"></div>
        <div class="members-body">
          <h4 data-bind="text: fullname" class="fullname"></h4>
          <div class="email small">(<span data-bind="text: email"></span>)</div>
          <div><img data-bind="attr: { src: avatar }" class="img-circle members-photo" alt="Avatar"></div>
          <h5 data-bind="text: role"></h5>
          <p class="small">
            <strong>No. of projects handled: <span data-bind="text: counts"></span></strong><br>
          </p>
          <p class="small">
            Registered: <span data-bind="text: created"></span><br>
            Last seen: <span data-bind="text: lastlogin2"></span><br>
          </p>
        </div>
<?php if ($_SESSION['level'] >= "6") { ?>
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
<?php } ?>
      </div>
<?php if ($_SESSION['level'] >= "6") { ?>
      <p>
        <span data-bind="css: { 'opaque': issuspended }"><a class="btn btn-default btn-tiny ontop" data-bind="click: $parent.showInfo, css: { 'disabled': issuspended }"><i class="pe-cogs"></i> Edit <i class="" data-bind="css: {'pe-chevron-down': !showInfo(), 'pe-chevron-up': showInfo()}"></i></a></span>
        <a class="btn btn-success btn-tiny" data-bind="click: $parent.reactivate, visible: issuspended"><i class="pe-play-circle"></i> Reactivate</a>
        <a class="btn btn-warning btn-tiny" data-bind="click: $parent.suspend, visible: !issuspended"><i class="pe-pause-circle"></i> Suspend</a>
        <span data-bind="if: candeletemember, visible: showInfo()">
          <a class="btn btn-danger btn-tiny" data-bind="if: candeletemember, click: $parent.delete, css: { 'disabled': issuspended }"><i class="pe-trash"></i> Delete</a>
          <!-- <a class="btn btn-danger btn-tiny" data-href="click: $parent.delete, css: { 'disabled': issuspended }" data-toggle="modal" data-target="#confirm-delete" title="Delete this user"><i class="pe-trash"></i> Delete</a> -->
        </span>
        <div data-bind="if: candeletemember, visible: showInfo()" class="small red" style="margin: auto 10px">Note: Once a member is deleted, there is no going back. Please be certain.</div>
      </p>
<?php } ?>
    </div>
  </div>
  <!-- <div data-bind="template: { name: 'confirm-delete-modal' }, click: $parent.delete"></div> -->
  <!-- /ko -->
</div>

<!-- <script type="text/html" id="confirm-delete-modal">
  <div class="modal fade" id="confirm-delete" tabindex="-1" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
          <h4>Confirm delete?</h4>
          <p>Are you sure that you want to delete this member permanently?</p>
          <p><button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button> <a class="btn btn-danger btn-ok" data-bind="click: $root.delete">Delete <i class="pe-trash-o"></i></a></p>
        </div>
      </div>
    </div>
  </div>
</script> -->

<script type="text/javascript">

  var companyid = parseInt("<?php echo $_SESSION['companyid']; ?>");
  var userid = parseInt("<?php echo $_SESSION['userid']; ?>");
  var email = "<?php echo $_SESSION['email']; ?>";
  var fullname = "<?php echo $_SESSION['fullname']; ?>";
  var mobile = "<?php echo $_SESSION['mobile']; ?>";
  var avatar = "/admin/assets/img/u/<?php echo $_SESSION['avatar']; ?>.svg";
  var company = "<?php echo $_SESSION['company']; ?>";
  var status = <?php echo $_SESSION['status']; ?>;
  var role = "<?php echo $_SESSION['role']; ?>";
  var level = "<?php echo $_SESSION['level']; ?>";
  var created = "<?php echo $_SESSION['created']; ?>";
  var updated = "<?php echo $_SESSION['updated']; ?>";
  var lastlogin = "<?php echo $_SESSION['lastlogin']; ?>";
  var lastlogin2 = "<?php echo $_SESSION['lastlogin2']; ?>";
  var ip = "<?php echo getip(); ?>";
  var api = "http://www.siamsquare.org.uk";
  $.ajaxSetup({ headers: { 'X-Requested-With': 'aa5e1ab4-b0bf-4e82-8584-7cf4e9fdeaa8' } });
  $('#showalert-create').html("<div class='alert alert-success'><i class='pe-save pe-fw'></i> A new user has been created</div>").hide();
  $('#showalert-delete').html("<div class='alert alert-danger'><i class='pe-trash pe-fw'></i> The user has been deleted</div>").hide();
  $('#showalert-edit').html("<div class='alert alert-success'><i class='pe-edit pe-fw'></i> The user information has been edited</div>").hide();
  $('#showalert-suspend').html("<div class='alert alert-warning'><i class='pe-pause-circle pe-fw'></i> The user has been suspended</div>").hide();
  $('#showalert-reactivate').html("<div class='alert alert-success'><i class='pe-check-square-o pe-fw'></i> The user has been reactivated</div>").hide();
  $('#showalert-changerole').html("<div class='alert alert-info'><i class='pe-cog pe-fw'></i> You have successfully changed this user's role</div>").hide();
  var RoleListing = function(level, role) {
    this.level = ko.observable(level);
    this.role = ko.observable(role);
    this.list = ko.computed(function() { return this.role() + " (" + this.level() + ")"; }, this);
  }
  var Listing = function (id, userid, email, fullname, mobile, avatar, companyid, status, role, level, created, updated, lastlogin, lastlogin2, counts, RoleListing, issuspended, islocked, candeletemember) {
    this.id = ko.observable(id);
    this.userid = ko.observable(userid);
    this.email = ko.observable(email);
    this.editingEmail = ko.observable(email);
    this.fullname = ko.observable(fullname);
    this.editingFullName = ko.observable(fullname);
    this.mobile = ko.observable(mobile);
    this.avatar = ko.observable(avatar);
    this.editingMobile = ko.observable(mobile);
    this.status = ko.observable(status);
    this.editingStatus = ko.observable(status);
    this.role = ko.observable(role);
    this.editingRole = ko.observable(role);
    this.level = ko.observable(level);
    this.editingLevel = ko.observable(level);
    this.created = created;
    this.updated = updated;
    this.lastlogin = lastlogin;
    this.lastlogin2 = lastlogin2;
    this.counts = ko.observable(counts);
    this.issuspended = issuspended;
    this.islocked = islocked;
    this.showInfo = ko.observable(false);
    this.isEditingEmail = ko.observable(false);
    this.isEditingFullName = ko.observable(false);
    this.isEditingMobile = ko.observable(false);
    this.isEditingStatus = ko.observable(false);
    this.isEditingRole = ko.observable(false);
    this.isEditingLevel = ko.observable(false);
    options = <?php echo $rolelist; ?>;
    this.rlist = ko.observableArray(options);
    this.selectedRole = ko.observable(level);
    this.candeletemember = candeletemember;
  }
  var ViewModel = function () {
    var self = this;
    this.members = ko.observableArray([]);
    this.url = api;
    this.isNewMemberCreating = ko.observable(false);
    this.newMemberName = ko.observable("");
    this.newMemberEmail = ko.observable("");
    this.loadData = function (i) {
      $.ajax({
        url: api + '/member/' + companyid,
        dataType: 'json',
        type: 'get',
        contentType: 'application/json; charset=utf-8',
        success: function (data) {
          var list = [];
          for (var i = 0; i < data.length; i++) { list.push(self.createMemberObject(data[i])); }
          self.members(list);
        },
        error: function (error) { self.onFail(error); }
      });
    }
    this.suspend = function (member) {
      console.log(member.id());
      $.ajax({
        url: api + '/member/' + member.id() + '/suspend',
        dataType: 'json',
        type: 'put',
        contentType: 'application/json; charset=utf-8',
        data: '{ "status": "2" }',
        success: function (data) {
          $('#showalert-suspend').show();
          window.setTimeout(function () { $("#showalert-suspend").slideUp(500, function () { $("#showalert-suspend").hide(); }); }, 3000);
          //self.removeMember(member);
          $.ajax({
            url: api + '/log',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json; charset=utf-8',
            data: '{ "userid": "' + userid + '", "ip": "' + ip + '", "data": "' + email + ' suspended a member named ' + member.fullname() + ' (' + member.email() + ')", "critical": "5" }',
            success: function(data) { result = data; }
          });
          // $('.modal-backdrop').hide();
          // $('body').removeClass('modal-open');
          // $('#confirm-delete').hide();
        },
        error: function (error) { self.onFail(error); }
      });
      window.setTimeout(function () { window.location.reload(); }, 3300);
    }
    this.reactivate = function (member) {
      console.log(member.id());
      $.ajax({
        url: api + '/member/' + member.id() + '/reactivate',
        dataType: 'json',
        type: 'put',
        contentType: 'application/json; charset=utf-8',
        data: '{ "status": "5" }',
        success: function (data) {
          $('#showalert-reactivate').show();
          window.setTimeout(function () { $("#showalert-reactivate").slideUp(500, function () { $("#showalert-reactivate").hide(); }); }, 3000);
          //self.removeMember(member);
          $.ajax({
            url: api + '/log',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json; charset=utf-8',
            data: '{ "userid": "' + userid + '", "ip": "' + ip + '", "data": "' + email + ' reactivated a member named ' + member.fullname() + ' (' + member.email() + ')", "critical": "5" }',
            success: function(data) { result = data; }
          });
          // $('.modal-backdrop').hide();
          // $('body').removeClass('modal-open');
          // $('#confirm-delete').hide();
        },
        error: function (error) { self.onFail(error); }
      });
      window.setTimeout(function () { window.location.reload(); }, 3300);
    }
    this.delete = function (member) {
      console.log(member.id());
      $.ajax({
        url: api + '/member/' + member.id() + '/delete',
        dataType: 'json',
        type: 'put',
        contentType: 'application/json; charset=utf-8',
        data: '{ "status": "0" }',
        success: function (data) {
          $('#showalert-delete').show();
          window.setTimeout(function () { $("#showalert-delete").slideUp(500, function () { $("#showalert-delete").hide(); }); }, 3000);
          self.removeMember(member);
          // $.ajax({
          //   url: api + '/log',
          //   dataType: 'json',
          //   type: 'post',
          //   contentType: 'application/json; charset=utf-8',
          //   data: '{ "userid": "' + userid + '", "ip": "' + ip + '", "data": "' + email + ' deleted a member named ' + member.fullname() + ' (' + member.email() + ')", "critical": "5" }',
          //   success: function(data) { result = data; }
          // });
          $('.modal-backdrop').hide();
          $('body').removeClass('modal-open');
          $('#confirm-delete').hide();
        },
        error: function (error) { self.onFail(error); }
      });
    }
    this.changinglevel = function(member) {
      $.ajax({
        url: api + '/member/' + member.id() + '/changerole',
        dataType: 'json',
        type: 'put',
        contentType: 'application/json; charset=utf-8',
        data: '{ "level": ' + member.selectedRole() + ' }',
        success: function (data) {
          $('#showalert-changerole').show();
          window.setTimeout(function () { $("#showalert-changerole").slideUp(500, function () { $("#showalert-changerole").hide(); }); }, 3000);
          $.ajax({
            url: api + '/log',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json; charset=utf-8',
            data: '{ "surveyid": "' + surveyid + '", "userid": "' + userid + '", "ip": "' + ip + '", "data": "' + email + ' changed role for ' + member.fullname() + ' (' + member.email() + ')", "critical": "4" }',
            success: function(data) { result = data; }
          });
        },
        error: function (error) { self.onFail(error); }
      });
      window.setTimeout(function () { window.location.reload(); }, 3300);
    }
    this.removeMember = function (member) {
      var index = self.members.indexOf(member);
      if (index > -1) { self.members.splice(index, 1); }
    }
    this.createNew = function () {
      self.isNewMemberCreating(true);
      self.newMemberName("My new member");
      self.newMemberEmail("user@my-company.com");
    }
    this.cancelNew = function () {
      self.isNewMemberCreating(false);
    }
    this.postNew = function () {
      self.cancelNew();
      $.ajax({
        url: api + '/member/' + companyid + '/new?email=' + self.newMemberEmail() + '&name=' + self.newMemberName(),
        dataType: 'json',
        type: 'get',
        contentType: 'application/json; charset=utf-8',
        success: function (data) {
          self.members.splice(0, 0, self.createMemberObject(data));
          $('#showalert-create').show();
          window.setTimeout(function () { $("#showalert-create").slideUp(500, function () { $("#showalert-create").hide(); }); }, 3000);
          $.ajax({
            url: api + '/log',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json; charset=utf-8',
            data: '{ "userid": "' + userid + '", "ip": "' + ip + '", "data": "' + email + ' created a new member ' + self.newMemberName() + ' (' + self.newMemberEmail() + ')", "critical": "5" }',
            success: function(data) { result = data; }
          });
        },
        error: function (error) { self.onFail(error); }
      });
    }
    this.startEditFullName = function (member) {
      member.editingFullName(member.fullname());
      member.isEditingFullName(true);
    }
    this.postEditFullName = function (member) {
      self.cancelEditFullName(member);
      $.ajax({
        url: api + '/member/' + member.id() + '/refullname',
        dataType: 'json',
        type: 'put',
        contentType: 'application/json; charset=utf-8',
        data: '{ "fullname": "' + member.editingFullName() + '" }',
        success: function (data) {
          member.fullname(member.editingFullName());
          $('#showalert-edit').show();
          window.setTimeout(function () { $("#showalert-edit").slideUp(500, function () { $("#showalert-edit").hide(); }); }, 3000);
          $.ajax({
            url: api + '/log',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json; charset=utf-8',
            data: '{ "userid": "' + userid + '", "ip": "' + ip + '", "data": "' + email + ' renamed a member ' + member.fullname() + ' (' + member.email() + ')", "critical": "4" }',
            success: function(data) { result = data; }
          });
        },
        error: function (error) { self.onFail(error); }
      });
    }
    this.cancelEditFullName = function (member) { member.isEditingFullName(false); }
    this.startEditEmail = function (member) {
      member.editingEmail(member.email());
      member.isEditingEmail(true);
    }
    this.postEditEmail = function (member) {
      self.cancelEditEmail(member);
      $.ajax({
        url: api + '/member/' + member.id() + '/reemail',
        dataType: 'json',
        type: 'put',
        contentType: 'application/json; charset=utf-8',
        data: '{ "email": "' + member.editingEmail() + '" }',
        success: function (data) {
          member.email(member.editingEmail());
          $('#showalert-edit').show();
          window.setTimeout(function () { $("#showalert-edit").slideUp(500, function () { $("#showalert-edit").hide(); }); }, 3000);
          $.ajax({
            url: api + '/log',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json; charset=utf-8',
            data: '{ "userid": "' + userid + '", "ip": "' + ip + '", "data": "' + email + ' changed a member email ' + member.email() + ' (' + member.email() + ')", "critical": "4" }',
            success: function(data) { result = data; }
          });
        },
        error: function (error) { self.onFail(error); }
      });
    }
    this.cancelEditEmail = function (member) { member.isEditingEmail(false); }
    this.startEditMobile = function (member) {
      member.editingMobile(member.mobile());
      member.isEditingMobile(true);
    }
    this.postEditMobile = function (member) {
      self.cancelEditMobile(member);
      $.ajax({
        url: api + '/member/' + member.id() + '/remobile',
        dataType: 'json',
        type: 'put',
        contentType: 'application/json; charset=utf-8',
        data: '{ "mobile": "' + member.editingMobile() + '" }',
        success: function (data) {
          member.mobile(member.editingMobile());
          $('#showalert-edit').show();
          window.setTimeout(function () { $("#showalert-edit").slideUp(500, function () { $("#showalert-edit").hide(); }); }, 3000);
          $.ajax({
            url: api + '/log',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json; charset=utf-8',
            data: '{ "userid": "' + userid + '", "ip": "' + ip + '", "data": "' + email + ' changed a member mobile ' + member.mobile() + ' (' + member.email() + ')", "critical": "4" }',
            success: function(data) { result = data; }
          });
        },
        error: function (error) { self.onFail(error); }
      });
    }
    this.cancelEditMobile = function (member) { member.isEditingMobile(false); }
    this.startEditRole = function (member) {
      member.editingRole(member.level());
      member.isEditingRole(true);
    }
    this.postEditRole = function (member) {
      self.cancelEditRole(member);
    }
    this.cancelEditRole = function (member) { member.isEditingRole(false); }
    this.startEditLevel = function (member) {
      member.editingLevel(member.level());
      member.isEditingLevel(true);
    }
    this.postEditLevel = function (member) {
      self.cancelEditLevel(member);
    }
    this.cancelEditLevel = function (member) { member.isEditingLevel(false); }
    this.createMemberObject = function (data) {
      moment.locale('en');
      if (data.created != null) { var sa1 = moment(data.created).fromNow(); var sa2 = moment(data.created).format("D MMM YYYY"); created = sa2 + ' (' + sa1 + ')'; } else { created = data.created; }
      if (data.updated != null) { var sb1 = moment(data.updated).fromNow(); var sb2 = moment(data.updated).format("D MMM YYYY"); updated = sb2 + ' (' + sb1 + ')'; } else { updated = data.updated; }
      if (data.lastlogin != null) { var sc1 = moment(data.lastlogin).fromNow(); var sc2 = moment(data.lastlogin).format("D MMM YYYY"); lastlogin = sc2 + ' (' + sc1 + ')'; } else { lastlogin = "Never login"; }
      if (data.lastlogin2 != null) { var sd1 = moment(data.lastlogin2).fromNow(); var sd2 = moment(data.lastlogin2).format("D MMM YYYY"); lastlogin2 = sd2 + ' (' + sd1 + ')'; } else { lastlogin2 = "Never login"; }
      if (data.avatar != null) { avatar = "/admin/assets/img/u/" + data.avatar + ".svg"; } else { avatar = "/admin/assets/img/u/M10.svg"; }
      var issuspended = false; if (data.status == 2) { issuspended = true; } else { issuspended = false; }
      var islocked = false; if (data.status == 3) { islocked = true; } else { islocked = false; }
      var candeletemember = false;
      if (level >= 6) {
        if (level > data.level) { candeletemember = true; }
        else { candeletemember = true; }
      }
      else if (level < 6) { candeletemember = false; }
      if (data.level == 9) { role = "Administrator"; } else if (data.level == 8) { role = "Support"; } else if (data.level == 6) { role = "Manager"; } else if (data.level == 5) { role = "User"; } else if (data.level == 4) { role = "Guest"; }
      return new Listing (data.id, data.userid, data.email, data.fullname, data.mobile, avatar, companyid, data.status, role, data.level, created, updated, lastlogin, lastlogin2, data.counts, RoleListing, issuspended, islocked, candeletemember);
    }
    this.onFail = function (error) { alert(JSON.stringify(error)); }
    this.showInfo = function (member) { member.showInfo(!member.showInfo()); }
    this.loadData();
  }
  jQuery(document).ready(function () { ko.applyBindings(new ViewModel()); });

  $('#confirm-delete').on('show.bs.modal', function(e) { $(this).find('.btn-ok').attr('data-href', $(e.relatedTarget).data('href')); });
  $(document).on('keypress', function (e) { if ($('#confirm-delete').is(':visible')) { if (e.which == 13) { window.location= $("#confirm-delete .btn-ok", this).attr("data-bind"); } } });

</script>

<br><hr>

<h3>Information on account type</h3>

<p>While we have several account types, we currently provide two account types to our clients which are an <strong>user</strong> and a <strong>manager</strong>. It is quite common that our clients tend to have just one (or two) manager account together with several user accounts.</p>

<table class="table table-hover small">
  <thead>
    <tr class="bg-success">
      <th width="20%"><i class="pe-flag pe-fw"></i> Role</th>
      <th><i class="pe-paperclip pe-fw"></i> Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Manager</td>
      <td>
        <p>Manager is a user who can manage both surveys and team members. Manager can create, edit and delete any surveys and any team members (User) of the company.</p>
        <p>There are also some functions that are only available to Manager such as editing the company information, choosing the survey template, etc.</p>
      </td>
    </tr>
    <tr>
      <td>User</td>
      <td>
        <p>User account is a normal user who can create, edit, or delete surveys projects that are belonged only to this user (defined by projects that are either created by this user or are assigned to this user by a Manager).</p>
        <p>This user will be able to see other projects that are managed by other members in the team, but those projects will be read-only.</p>
      </td>
    </tr>
    <tr>
      <td><del>Guest</del> (currently disabled)</td>
      <td>
        <p><del>Guest account is a readonly account and only specific to a survey project. This account type is different from respondent because Guest can still access the client section.</del></p>
        <p><del>This account type is useful for providing some of the team members a temporary access (such as fieldwork, DP, or sometimes can be used for providing access only to view survey results).</del></p>
      </td>
    </tr>
  </tbody>
</table>

<br>


<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
