<?php

$title = "My team";
pageHeader($title);
echo "<h2>$title</h2>";

?>

<p>For this section, only those who are an account leader will have a privilege to manage users as a team within the company including add, edit info, change access permission and delete.</p>

<p>For other users, this page will be shown in a read-only mode but will still provide some good information/indications for the team perspective.</p>

<hr>

<div id="showalert-create"></div><div id="showalert-delete"></div><div id="showalert-edit"></div><div id="showalert-suspend"></div>
<br>
<?php if ($_SESSION['levelid'] >= "6") { ?>
<p class="pull-right"><a class="btn btn-primary" data-bind="click: createNew, enable: !isNewMemberCreating()" href=""><i class="pe-user-plus pe-fw"></i> New member</a></p>
<br><br><br>
<?php } ?>
<div class="row">
<?php if ($_SESSION['levelid'] >= "6") { ?>
  <div data-bind="visible: isNewMemberCreating" class="col-xs-12 col-sm-6 col-md-4 col-lg-4" style="margin-bottom:20px">
    <div class="members">
      <div class="members-header"></div>
      <div class="members-body">
        <h4 class="white">Create a new member</h4>
        <p><img src="assets/img/u/F6.svg" class="img-circle members-photo" alt="Avatar"></p>
        <h5>Enter info below</h5>
        <div class="input-group"><span class="input-group-addon">Name:</span><input type="text" class="form-control" data-bind="textInput: newMemberName" placeholder="Enter first and last name"></div><br>
        <div class="input-group"><span class="input-group-addon">Email:</span><input type="text" class="form-control" data-bind="textInput: newMemberEmail" placeholder="Enter email address"></div><br>
        <a class="btn btn-primary btn-tiny" data-bind="click: postNew, enable: newMemberName() != '', enable: newMemberEmail() != ''" href=""><i class="pe-user-plus"></i> Create</a>
        <a class="btn btn-default btn-tiny" data-bind="click: cancelNew" href=""><i class="pe-times-circle-o"></i> Cancel</a><br><br>
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
        <h5 data-bind="text: level"></h5>
        <p>
          <small>
            Registered: <span data-bind="text: created"></span><br>
            Last updated: <span data-bind="text: updated"></span><br>
            Last login: <span data-bind="text: lastlogin2"></span><br>
            Last ip: <span data-bind="text: lastip2"></span>
          </small>
        </p>
<?php if ($_SESSION['levelid'] >= "6") { ?>
        <a class="btn btn-default btn-tiny" data-bind="click: $parent.showInfo"><i class="pe-cogs"></i> Edit <i class="" data-bind="css: {'pe-chevron-down': !showInfo(), 'pe-chevron-up': showInfo()}"></i></a>
        <a class="btn btn-warning btn-tiny" data-bind="click: $parent.suspend" href=""><i class="pe-pause-circle"></i> Suspend</a>
        <a class="btn btn-danger btn-tiny" data-bind="click: $parent.delete" href=""><i class="pe-trash"></i> Delete</a>
        <br><br>
<?php } ?>
      </div>
<?php if ($_SESSION['levelid'] >= "6") { ?>
      <div class="members-footer" data-bind="visible: showInfo()">
        <div class="row" data-bind="visible: !isEditingFullName()">
          <div class="col-sm-4"><small>Name <a href="" data-bind="click: $parent.startEditFullName" title="Change"><i class="pe-edit"></i></a></small></div>
          <div class="col-sm-8"><small data-bind="text: fullname"></small><br></div>
        </div>
        <div class="row" data-bind="visible: isEditingFullName()">
          <div class="col-sm-4"><small>Name</small></div>
          <div class="col-sm-8"><small>
            <input data-bind="textInput: editingFullName, visible: isEditingFullName()" onclick="this.select()" class="form-control">
            <a class="btn btn-tiny" data-bind="click: $parent.postEditFullName, enable: fullname() != ''" href="">Change <i class="pe-check-circle-o"></i></a>
            <a class="btn btn-tiny" data-bind="click: $parent.cancelEditFullName" href="">Cancel <i class="pe-times-circle-o"></i></a>
          </small><br></div>
        </div>
        <div class="row" data-bind="visible: !isEditingEmail()">
          <div class="col-sm-4"><small>Email <a href="" data-bind="click: $parent.startEditEmail" title="Change"><i class="pe-edit"></i></a></small></div>
          <div class="col-sm-8"><small data-bind="text: email"></small><br></div>
        </div>
        <div class="row" data-bind="visible: isEditingEmail()">
          <div class="col-sm-4"><small>Email</small></div>
          <div class="col-sm-8"><small>
            <input data-bind="textInput: editingEmail, visible: isEditingEmail()" onclick="this.select()" class="form-control">
            <a class="btn btn-tiny" data-bind="click: $parent.postEditEmail, enable: email() != ''" href="">Change <i class="pe-check-circle-o"></i></a>
            <a class="btn btn-tiny" data-bind="click: $parent.cancelEditEmail" href="">Cancel <i class="pe-times-circle-o"></i></a>
          </small><br></div>
        </div>
        <div class="row" data-bind="visible: !isEditingMobile()">
          <div class="col-sm-4"><small>Mobile <a href="" data-bind="click: $parent.startEditMobile" title="Change"><i class="pe-edit"></i></a></small></div>
          <div class="col-sm-8"><small data-bind="text: mobile"></small><br></div>
        </div>
        <div class="row" data-bind="visible: isEditingMobile()">
          <div class="col-sm-4"><small>Mobile</small></div>
          <div class="col-sm-8"><small>
            <input data-bind="textInput: editingMobile, visible: isEditingMobile()" onclick="this.select()" class="form-control">
            <a class="btn btn-tiny" data-bind="click: $parent.postEditMobile, enable: mobile() != ''" href="">Change <i class="pe-check-circle-o"></i></a>
            <a class="btn btn-tiny" data-bind="click: $parent.cancelEditMobile" href="">Cancel <i class="pe-times-circle-o"></i></a>
          </small><br></div>
        </div>
        <div class="row" data-bind="visible: !isEditingLevel()">
          <div class="col-sm-4"><small>Level <a href="" data-bind="click: $parent.startEditLevel" title="Change"><i class="pe-edit"></i></a></small></div>
          <div class="col-sm-8"><small data-bind="text: level"></small><br></div>
        </div>
        <div class="row" data-bind="visible: isEditingLevel()">
          <div class="col-sm-4"><small>Level</small></div>
          <div class="col-sm-8"><small>
            <a class="btn btn-default btn-block btn-tiny" data-bind="click: $parent.L6" href="">Account Leader</a>
            <a class="btn btn-default btn-block btn-tiny" data-bind="click: $parent.L5" href="">Researcher</a>
            <!-- <a class="btn btn-default btn-block btn-tiny" data-bind="click: $parent.L4" href="">Fieldwork</a> -->
            <!-- <a class="btn btn-default btn-block btn-tiny" data-bind="click: $parent.L3" href="">Data Processing</a> -->
            <a class="btn btn-default btn-block btn-tiny" data-bind="click: $parent.cancelEditLevel" href="">Cancel <i class="pe-times-circle-o"></i></a>
          </small><br></div>
        </div>
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
  var levelid = <?php echo $_SESSION['levelid']; ?>;
  var level = "<?php echo $_SESSION['level']; ?>";
  var created = "<?php echo $_SESSION['created']; ?>";
  var updated = "<?php echo $_SESSION['updated']; ?>";
  var lastlogin = "<?php echo $_SESSION['lastlogin']; ?>";
  var lastip = "<?php echo $_SESSION['lastip']; ?>";
  var lastlogin2 = "<?php echo $_SESSION['lastlogin2']; ?>";
  var lastip2 = "<?php echo $_SESSION['lastip2']; ?>";
  var ip = "<?php echo getip(); ?>";
  var api = "http://www.siamsquare.org.uk";
  var key = "aa5e1ab4-b0bf-4e82-8584-7cf4e9fdeaa8";
  $('#showalert-create').html("<div class='alert alert-success'><i class='pe-save pe-fw'></i> A new user has been created</div>").hide();
  $('#showalert-delete').html("<div class='alert alert-danger'><i class='pe-trash pe-fw'></i> The user has been deleted</div>").hide();
  $('#showalert-edit').html("<div class='alert alert-info'><i class='pe-edit pe-fw'></i> The user information has been edited</div>").hide();
  $('#showalert-suspend').html("<div class='alert alert-warning'><i class='pe-archive pe-fw'></i> The user has been suspended</div>").hide();

  var Listing = function (id, userid, email, fullname, mobile, avatar, companyid, status, level, created, updated, lastlogin, lastip, lastlogin2, lastip2) {
    this.id = id;
    this.userid = userid;
    this.email = ko.observable(email);
    this.editingEmail = ko.observable(email);
    this.fullname = ko.observable(fullname);
    this.editingFullName = ko.observable(fullname);
    this.mobile = ko.observable(mobile);
    this.avatar = avatar;
    this.editingMobile = ko.observable(mobile);
    this.status = ko.observable(status);
    this.editingStatus = ko.observable(status);
    this.level = ko.observable(level);
    this.editingLevel = ko.observable(level);
    this.created = created;
    this.updated = updated;
    this.lastlogin = lastlogin;
    this.lastip = lastip;
    this.lastlogin2 = lastlogin2;
    this.lastip2 = lastip2;
    this.showInfo = ko.observable(false);
    this.isEditingEmail = ko.observable(false);
    this.isEditingFullName = ko.observable(false);
    this.isEditingMobile = ko.observable(false);
    this.isEditingStatus = ko.observable(false);
    this.isEditingLevel = ko.observable(false);
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
            data: '{ "userid": "' + userid + '", "ip": "' + ip + '", "data": "' + email + ' suspended a member named ' + member.fullname() + ' (' + member.email() + ')" }',
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
            data: '{ "userid": "' + userid + '", "ip": "' + ip + '", "data": "' + email + ' deleted a member named ' + member.fullname() + ' (' + member.email() + ')" }',
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
        data: '{ "levelid": "6" }',
        success: function (data) {
          $('#showalert-edit').show();
          window.setTimeout(function () { $("#showalert-edit").slideUp(500, function () { $("#showalert-edit").hide(); }); }, 5000);
          // self.removeMember(member);
          $.ajax({
            url: api + '/log',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json; charset=utf-8',
            data: '{ "userid": "' + userid + '", "ip": "' + ip + '", "data": "' + email + ' changed level for ' + member.fullname() + ' (' + member.email() + ') to be Account Leader" }',
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
        data: '{ "levelid": "5" }',
        success: function (data) {
          $('#showalert-edit').show();
          window.setTimeout(function () { $("#showalert-edit").slideUp(500, function () { $("#showalert-edit").hide(); }); }, 5000);
          // self.removeMember(member);
          $.ajax({
            url: api + '/log',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json; charset=utf-8',
            data: '{ "userid": "' + userid + '", "ip": "' + ip + '", "data": "' + email + ' changed level for ' + member.fullname() + ' (' + member.email() + ') to be Researcher" }',
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
        data: '{ "levelid": "4" }',
        success: function (data) {
          $('#showalert-edit').show();
          window.setTimeout(function () { $("#showalert-edit").slideUp(500, function () { $("#showalert-edit").hide(); }); }, 5000);
          // self.removeMember(member);
          $.ajax({
            url: api + '/log',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json; charset=utf-8',
            data: '{ "userid": "' + userid + '", "ip": "' + ip + '", "data": "' + email + ' changed level for ' + member.fullname() + ' (' + member.email() + ') to be Data Processing" }',
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
        data: '{ "levelid": "3" }',
        success: function (data) {
          $('#showalert-edit').show();
          window.setTimeout(function () { $("#showalert-edit").slideUp(500, function () { $("#showalert-edit").hide(); }); }, 5000);
          // self.removeMember(member);
          $.ajax({
            url: api + '/log',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json; charset=utf-8',
            data: '{ "userid": "' + userid + '", "ip": "' + ip + '", "data": "' + email + ' changed level for ' + member.fullname() + ' (' + member.email() + ') to be Fieldwork" }',
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
      self.newMemberName("");
      self.newMemberEmail("");
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
            data: '{ "userid": "' + userid + '", "ip": "' + ip + '", "data": "' + email + ' created a new member ' + self.newMemberName() + ' (' + self.newMemberEmail() + ')" }',
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
            data: '{ "userid": "' + userid + '", "ip": "' + ip + '", "data": "' + email + ' renamed a member ' + member.fullname() + ' (' + member.email() + ')" }',
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
            data: '{ "userid": "' + userid + '", "ip": "' + ip + '", "data": "' + email + ' changed a member email ' + member.email() + ' (' + member.email() + ')" }',
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
            data: '{ "userid": "' + userid + '", "ip": "' + ip + '", "data": "' + email + ' changed a member mobile ' + member.mobile() + ' (' + member.email() + ')" }',
            success: function(data) { result = data; }
          });
        },
        error: function (error) { self.onFail(error); }
      });
    }
    this.cancelEditMobile = function (member) { member.isEditingMobile(false); }
    this.startEditLevel = function (member) {
      member.editingLevel(member.level());
      member.isEditingLevel(true);
    }
    this.postEditLevel = function (member) {
      self.cancelEditLevel(member);
      // $.ajax({
      //   url: api + '/member/' + member.id + '/relevel',
      //   dataType: 'json',
      //   type: 'put',
      //   contentType: 'application/json; charset=utf-8',
      //   data: '{ "levelid": "' + member.editingLevel() + '" }',
      //   success: function (data) {
      //     member.level(member.editingLevel());
      //     $('#showalert-edit').show();
      //     window.setTimeout(function () { $("#showalert-edit").slideUp(500, function () { $("#showalert-edit").hide(); }); }, 5000);
      //     $.ajax({
      //       url: api + '/log',
      //       dataType: 'json',
      //       type: 'post',
      //       contentType: 'application/json; charset=utf-8',
      //       data: '{ "userid": "' + userid + '", "ip": "' + ip + '", "data": "' + email + ' changed a member level to ' + member.level() + ' (' + member.email() + ')" }',
      //       success: function(data) { result = data; }
      //     });
      //   },
      //   error: function (error) { self.onFail(error); }
      // });
    }
    this.cancelEditLevel = function (member) { member.isEditingLevel(false); }
    this.createMemberObject = function (data) {
      moment.locale('en');
      var sa1 = moment(data.created).fromNow(); var sa2 = moment(data.created).format("D MMM YYYY"); created = sa2 + ' (' + sa1 + ')';
      var sb1 = moment(data.updated).fromNow(); var sb2 = moment(data.updated).format("D MMM YYYY"); updated = sb2 + ' (' + sb1 + ')';
      var sc1 = moment(data.lastlogin).fromNow(); var sc2 = moment(data.lastlogin).format("D MMM YYYY"); lastlogin = sc2 + ' (' + sc1 + ')';
      var sd1 = moment(data.lastlogin2).fromNow(); var sd2 = moment(data.lastlogin2).format("D MMM YYYY"); lastlogin2 = sd2 + ' (' + sd1 + ')';
      if (data.avatar != null) { avatar = data.avatar; } else { avatar = "assets/img/u/F6.svg"; }
      return new Listing (data.id, data.userid, data.email, data.fullname, data.mobile, avatar, companyid, data.status, data.level, created, updated, lastlogin, data.lastip, lastlogin2, data.lastip2);
    }
    this.onFail = function (error) { alert(JSON.stringify(error)); }
    this.showInfo = function (member) { member.showInfo(!member.showInfo()); }
    this.loadData();
  }
  jQuery(document).ready(function () { ko.applyBindings(new ViewModel()); });

</script>

<br>

<?php if ($_SESSION['levelid'] >= "6") { ?>
<hr>

<h3>Example and reference</h3>

<div class="row">
  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
    <p>To illustrate a clearer picture, please see the table on the right hand side for the real life example of usage.</p>
    <ul>
      <li>You may want to have two logins for your two researchers to use for managing their projects independently. In this case, each of these two researchers can view all of your projects but they can make change with the ones they are managing.</li>
      <br>
      <li>You may consider having another login specifically for your DP person where an access across all projects is allowed only for the data related component e.g. data validation, download the data file, tabulation check, etc.</li>
      <br>
      <li>Lastly, you may also consider having another login for your fieldwork team to manage respondents. Please note this covers only respondents that are uploaded specifically for each of the projects (not include our panel).</li>
    </ul>
  </div>
  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
    <table class="table table-hover">
      <thead>
        <tr class="bg-primary">
          <td>User</td>
          <td>Detail</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Fieldwork</td>
          <td>
            <ul>
              <li>Full access to respondent section</li>
              <li>Read only for all projects</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>DP</td>
          <td>
            <ul>
              <li>Full access to data section</li>
              <li>Read only for all projects</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>Researcher</td>
          <td>
            <ul>
              <li>Full access to assigned projects</li>
              <li>Read only for other projects</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>Account leader</td>
          <td>
            <ul>
              <li>Full access to all projects</li>
              <li>Ability to manage team members</li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<br>
<?php } ?>


<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
