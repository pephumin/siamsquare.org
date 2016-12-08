<?php

$title = "My team";
pageHeader($title);
echo "<h2>$title</h2>";

$rolelist = "";
// $rolelist .= "new Role(\"Adminitrator\", 9), ";
$rolelist .= "new Role(\"Manager\", 6), ";
$rolelist .= "new Role(\"User\", 5), ";
$rolelist .= "new Role(\"Guest\", 4), ";

?>

<p>User with an account level of Manager will be able to manage your team members. This includes an ability to create new users, edit existing users, or even suspend or delete users where required.</p>

<p><strong>It is important to note that once a new member has been created, the new account has to be activated before it can be used</strong> (<a href="http://www.siamsquare.org/admin/setup/?d=activation" title="Account Activation">http://www.siamsquare.org/admin/setup/?d=activation</a>).</p>

<hr>

<?php if ($_SESSION['level'] >= "6") { ?>
<div class="rows">
  <div class="col-sm-12" style="text-align:right">
    <p class="pull-right"><a class="btn btn-primary" data-bind="click: createNew, enable: !isNewMemberCreating()" href=""><i class="pe-user-plus pe-fw"></i> New member</a></p>
  </div>
  <div class="col-sm-12">
    <div id="showalert-create"></div><div id="showalert-delete"></div><div id="showalert-edit"></div><div id="showalert-suspend"></div>
  </div>
</div>
<?php } ?>

<div class="row">
<?php if ($_SESSION['level'] >= "6") { ?>
  <div data-bind="visible: isNewMemberCreating" class="col-xs-12 col-sm-7 col-md-4 col-lg-4" style="margin-bottom:20px">
    <div class="members">
      <div class="members-header-new"></div>
      <div class="members-body">
        <h4 class="white">Create a new member</h4>
        <p><img src="/admin/assets/img/u/M6.svg" class="img-circle members-photo" alt="Avatar"></p>
        <div class="input-group"><span class="input-group-addon"><small>Name:</small></span><input type="text" class="form-control input-sm" data-bind="textInput: newMemberName" onclick="this.select()" placeholder="Enter first and last name"></div>
        <div class="input-group"><span class="input-group-addon"><small>Email</small>:</span><input type="text" class="form-control input-sm" data-bind="textInput: newMemberEmail" onclick="this.select()" placeholder="Enter email address"></div><br>
        <a class="btn btn-primary btn-tiny" data-bind="click: postNew, enable: newMemberName() != '', enable: newMemberEmail() != ''" href=""><i class="pe-user-plus"></i> Create</a>
        <a class="btn btn-default btn-tiny" data-bind="click: cancelNew" href=""><i class="pe-times-circle-o"></i> Cancel</a><br><br>
        <small class="red">Please make sure you input the working/ correct email when creating a new user</small>
      </div>
    </div>
  </div>
<?php } ?>
  <!-- ko foreach: members -->
  <div class="col-xs-6 col-sm-4 col-md-4 col-lg-4" style="margin-bottom:20px">
    <div class="members">
      <div class="members-header"></div>
      <div class="members-body">
        <h4 data-bind="text: fullname" class="white"></h4>
        <p><img data-bind="attr: {src: avatar}" class="img-circle members-photo" alt="Avatar"></p>
        <h5 data-bind="text: role"></h5>
        <small><strong>No. of projects handled: <span data-bind="text: counts"></span></strong></small>
        <p>
          <small>
            Registered: <span data-bind="text: created"></span><br>
            Last seen: <span data-bind="text: lastlogin2"></span><br>
          </small>
        </p>
<?php if ($_SESSION['level'] >= "6") { ?>
        <p>
          <a class="btn btn-default btn-tiny" data-bind="click: $parent.showInfo"><i class="pe-cogs"></i> Edit <i class="" data-bind="css: {'pe-chevron-down': !showInfo(), 'pe-chevron-up': showInfo()}"></i></a>
          <a class="btn btn-warning btn-tiny" data-bind="click: $parent.suspend" href=""><i class="pe-pause-circle"></i> Suspend</a>
          <a class="btn btn-danger btn-tiny" data-bind="click: $parent.delete" href=""><i class="pe-trash"></i> Delete</a>
        </p>
<?php } ?>
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
            <select data-bind="options: allRoles, optionsText: 'role', optionValue: 'selectedRole', optionsCaption: 'Choose...', selectedOption: currentRole, value: selectedRole" class="form-control input-sm"></select>
            <!-- <small>
              <a class="btn btn-default btn-tiny" data-bind="click: $parent.L6" href="">Manager</a>
              <a class="btn btn-default btn-tiny" data-bind="click: $parent.L5" href="">User</a>
              <a class="btn btn-default btn-tiny" data-bind="click: $parent.cancelEditLevel" href="">Cancel <i class="pe-times-circle-o"></i></a>
            </small> -->
          </div>
        </div>
        <br>
      </div>
<?php } ?>
    </div>
  </div>
  <!-- /ko -->
</div>


<script type="text/javascript">

  var userid = <?php echo $_SESSION['userid']; ?>;
  var email = "<?php echo $_SESSION['email']; ?>";
  var fullname = "<?php echo $_SESSION['fullname']; ?>";
  var mobile = "<?php echo $_SESSION['mobile']; ?>";
  var avatar = "<?php echo $_SESSION['avatar']; ?>";
  var companyid = <?php echo $_SESSION['companyid']; ?>;
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
  var key = "aa5e1ab4-b0bf-4e82-8584-7cf4e9fdeaa8";
  $('#showalert-create').html("<div class='alert alert-success'><i class='pe-save pe-fw'></i> A new user has been created</div>").hide();
  $('#showalert-delete').html("<div class='alert alert-danger'><i class='pe-trash pe-fw'></i> The user has been deleted</div>").hide();
  $('#showalert-edit').html("<div class='alert alert-success'><i class='pe-edit pe-fw'></i> The user information has been edited</div>").hide();
  $('#showalert-suspend').html("<div class='alert alert-warning'><i class='pe-archive pe-fw'></i> The user has been suspended</div>").hide();

  var Listing = function (id, userid, email, fullname, mobile, avatar, companyid, status, role, level, created, updated, lastlogin, lastlogin2, counts) {
    this.id = id;
    this.userid = userid;
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
    // this.isSuspended = ko.observable(false);
    this.showInfo = ko.observable(false);
    this.isEditingEmail = ko.observable(false);
    this.isEditingFullName = ko.observable(false);
    this.isEditingMobile = ko.observable(false);
    this.isEditingStatus = ko.observable(false);
    this.isEditingRole = ko.observable(false);
    this.isEditingLevel = ko.observable(false);
    this.allRoles = ko.observableArray([<?php echo $rolelist; ?>]);
    // this.currentRole = ko.observableArray([]);
    this.selectedRole = ko.observable(); // Nothing selected by default
    this.selectedRole.subscribe(function(data) {
      $.ajax({
        url: api + '/member/' + id + '/changerole',
        dataType: 'json',
        type: 'put',
        contentType: 'application/json; charset=utf-8',
        data: '{ "level": ' + data.level() + ' }',
        success: function (data) {
          $('#showalert-changeowner').show();
          window.setTimeout(function () { $("#showalert-changeowner").slideUp(500, function () { $("#showalert-changeowner").hide(); }); }, 5000);
          $.ajax({
            url: api + '/log',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json; charset=utf-8',
            data: '{ "userid": "<?php echo $_SESSION['userid']; ?>", "ip": "' + ip + '", "data": "<?php echo $_SESSION['email']; ?> changed role for ' + fullname + ' (id=' + id + ')", "critical": "4" }',
            success: function(data) { result = data; }
          });
          window.location.reload();
        },
        error: function (error) { self.onFail(error); }
      });
    });
  }
  var Role = function(role, level) {
    this.role = ko.observable(role);
    this.level = ko.observable(level);
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
      $.ajax({
        url: api + '/member/' + member.id + '/suspend',
        dataType: 'json',
        type: 'put',
        contentType: 'application/json; charset=utf-8',
        data: '{ "status": "0" }',
        success: function (data) {
          $('#showalert-suspend').show();
          window.setTimeout(function () { $("#showalert-suspend").slideUp(500, function () { $("#showalert-suspend").hide(); }); }, 5000);
          self.removeMember(member);
          $.ajax({
            url: api + '/log',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json; charset=utf-8',
            data: '{ "userid": "' + userid + '", "ip": "' + ip + '", "data": "' + email + ' suspended a member named ' + member.fullname() + ' (' + member.email() + ')", "critical": "5" }',
            success: function(data) { result = data; }
          });
        },
        error: function (error) { self.onFail(error); }
      });
    }
    this.delete = function (member) {
      $.ajax({
        url: api + '/member/' + member.id + '/delete',
        dataType: 'json',
        type: 'put',
        contentType: 'application/json; charset=utf-8',
        data: '{ "status": "-1" }',
        success: function (data) {
          $('#showalert-delete').show();
          window.setTimeout(function () { $("#showalert-delete").slideUp(500, function () { $("#showalert-delete").hide(); }); }, 5000);
          self.removeMember(member);
          $.ajax({
            url: api + '/log',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json; charset=utf-8',
            data: '{ "userid": "' + userid + '", "ip": "' + ip + '", "data": "' + email + ' deleted a member named ' + member.fullname() + ' (' + member.email() + ')", "critical": "5" }',
            success: function(data) { result = data; }
          });
        },
        error: function (error) { self.onFail(error); }
      });
    }
    this.L6 = function (member) {
      $.ajax({
        url: api + '/member/' + member.id + '/L6',
        dataType: 'json',
        type: 'put',
        contentType: 'application/json; charset=utf-8',
        data: '{ "level": "6" }',
        success: function (data) {
          $('#showalert-edit').show();
          window.setTimeout(function () { $("#showalert-edit").slideUp(500, function () { $("#showalert-edit").hide(); }); }, 5000);
          // self.removeMember(member);
          $.ajax({
            url: api + '/log',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json; charset=utf-8',
            data: '{ "userid": "' + userid + '", "ip": "' + ip + '", "data": "' + email + ' changed level for ' + member.fullname() + ' (' + member.email() + ') to be Manager", "critical": "4" }',
            success: function(data) { result = data; }
          });
          window.location.reload();
        },
        error: function (error) { self.onFail(error); }
      });
    }
    this.L5 = function (member) {
      $.ajax({
        url: api + '/member/' + member.id + '/L5',
        dataType: 'json',
        type: 'put',
        contentType: 'application/json; charset=utf-8',
        data: '{ "level": "5" }',
        success: function (data) {
          $('#showalert-edit').show();
          window.setTimeout(function () { $("#showalert-edit").slideUp(500, function () { $("#showalert-edit").hide(); }); }, 5000);
          // self.removeMember(member);
          $.ajax({
            url: api + '/log',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json; charset=utf-8',
            data: '{ "userid": "' + userid + '", "ip": "' + ip + '", "data": "' + email + ' changed level for ' + member.fullname() + ' (' + member.email() + ') to be User", "critical": "4" }',
            success: function(data) { result = data; }
          });
          window.location.reload();
        },
        error: function (error) { self.onFail(error); }
      });
    }
    this.L4 = function (member) {
      $.ajax({
        url: api + '/member/' + member.id + '/L4',
        dataType: 'json',
        type: 'put',
        contentType: 'application/json; charset=utf-8',
        data: '{ "level": "4" }',
        success: function (data) {
          $('#showalert-edit').show();
          window.setTimeout(function () { $("#showalert-edit").slideUp(500, function () { $("#showalert-edit").hide(); }); }, 5000);
          // self.removeMember(member);
          $.ajax({
            url: api + '/log',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json; charset=utf-8',
            data: '{ "userid": "' + userid + '", "ip": "' + ip + '", "data": "' + email + ' changed level for ' + member.fullname() + ' (' + member.email() + ') to be Data Processing", "critical": "4" }',
            success: function(data) { result = data; }
          });
          window.location.reload();
        },
        error: function (error) { self.onFail(error); }
      });
    }
    this.L3 = function (member) {
      $.ajax({
        url: api + '/member/' + member.id + '/L3',
        dataType: 'json',
        type: 'put',
        contentType: 'application/json; charset=utf-8',
        data: '{ "level": "3" }',
        success: function (data) {
          $('#showalert-edit').show();
          window.setTimeout(function () { $("#showalert-edit").slideUp(500, function () { $("#showalert-edit").hide(); }); }, 5000);
          // self.removeMember(member);
          $.ajax({
            url: api + '/log',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json; charset=utf-8',
            data: '{ "userid": "' + userid + '", "ip": "' + ip + '", "data": "' + email + ' changed level for ' + member.fullname() + ' (' + member.email() + ') to be Fieldwork", "critical": "4" }',
            success: function(data) { result = data; }
          });
          window.location.reload();
        },
        error: function (error) { self.onFail(error); }
      });
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
          window.setTimeout(function () { $("#showalert-create").slideUp(500, function () { $("#showalert-create").hide(); }); }, 5000);
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
        url: api + '/member/' + member.id + '/refullname',
        dataType: 'json',
        type: 'put',
        contentType: 'application/json; charset=utf-8',
        data: '{ "fullname": "' + member.editingFullName() + '" }',
        success: function (data) {
          member.fullname(member.editingFullName());
          $('#showalert-edit').show();
          window.setTimeout(function () { $("#showalert-edit").slideUp(500, function () { $("#showalert-edit").hide(); }); }, 5000);
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
        url: api + '/member/' + member.id + '/reemail',
        dataType: 'json',
        type: 'put',
        contentType: 'application/json; charset=utf-8',
        data: '{ "email": "' + member.editingEmail() + '" }',
        success: function (data) {
          member.email(member.editingEmail());
          $('#showalert-edit').show();
          window.setTimeout(function () { $("#showalert-edit").slideUp(500, function () { $("#showalert-edit").hide(); }); }, 5000);
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
        url: api + '/member/' + member.id + '/remobile',
        dataType: 'json',
        type: 'put',
        contentType: 'application/json; charset=utf-8',
        data: '{ "mobile": "' + member.editingMobile() + '" }',
        success: function (data) {
          member.mobile(member.editingMobile());
          $('#showalert-edit').show();
          window.setTimeout(function () { $("#showalert-edit").slideUp(500, function () { $("#showalert-edit").hide(); }); }, 5000);
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
      if (data.avatar != null) { avatar = data.avatar; } else { avatar = "/admin/assets/img/u/M6.svg"; }
      if (data.level == 9) { role = "Administrator"; } else if (data.level == 6) { role = "Manager"; } else if (data.level == 5) { role = "User"; } else if (data.level == 4) { role = "Guest"; }
      //issuspended = false; if (data.status = "0") { issuspended = true; } else { issuspended = false; }
      return new Listing (data.id, data.userid, data.email, data.fullname, data.mobile, avatar, companyid, data.status, role, data.level, created, updated, lastlogin, lastlogin2, data.counts);
    }
    this.onFail = function (error) { alert(JSON.stringify(error)); }
    this.showInfo = function (member) { member.showInfo(!member.showInfo()); }
    this.loadData();
  }
  jQuery(document).ready(function () {
    ko.applyBindings(new ViewModel());
  });

</script>

<br><hr>

<h3>Information on account type</h3>

<p>While we have several account types, we currently provide two account types to our clients which are an <strong>user</strong> and a <strong>manager</strong>.</p>

<table class="table table-hover">
  <thead>
    <tr class="bg-primary">
      <td width="20%"><strong>User type</strong></td>
      <td><strong>Description</strong></td>
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
      <td>Guest</td>
      <td>
        <p>Guest account is a readonly account and only specific to a survey project. This account type is different from respondent because Guest can still access the client section.</p>
        <p>This account type is useful for providing some of the team members a temporary access (such as fieldwork, DP, or sometimes can be used for providing access only to view survey results).</p>
      </td>
    </tr>
  </tbody>
</table>

<p>It is quite common that our clients tend to have just one (or two) manager account together with several user accounts.</p>

<br>

<a href="/admin/?w=surveys" class="btn btn-danger btn-sm pull-right" style="margin-top:50px; margin-bottom: 20px"><i class="pe-chevron-circle-left pe-fw"></i> Back to the main page</a>

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
