<?php

require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/config.php';
$db = new PDO('mysql:host='. DB_HOST .';dbname='. DB_DATABASE . ';charset=utf8', DB_USER, DB_PASS);

$title = "Updated news";
pageHeader($title);
echo "<h2>$title</h2>\n";
echo "<p>This page combined all updated news for all users which includes the announcements from the system (news to all users across all companies) and from your Manager (news to all users specific only to your company).</p>\n";
echo "<hr>\n";
?>

<div id="showalert-create"></div><div id="showalert-delete"></div><div id="showalert-edit"></div>

<div class="row">
  <div class="col-sm-9">
    <h4>Announcements</h4>
    <div data-bind="visible: isNewPostCreating" class="panel panel-default">
      <div class="panel-body small bg-info">
        <div class="input-group">
          <span class="input-group-addon"><i class="pe-bullhorn pe-fw"></i></span>
          <input type="text" name="head" class="form-control" value="" placeholder="Heading" onclick="this.select()">
        </div>
        <br>
        <textarea name="name" rows="5" class="form-control" placeholder="Content of the message"></textarea><br>
        <p class="text-center">
          <input type="hidden" name="userid" value="<?php echo $_SESSION['userid']; ?>">
          <button class="btn btn-sm btn-warning" name="newpost" value="1" type="submit">Post <i class="pe-check-circle-o"></i></button>
          <a class="btn btn-sm btn-default" data-bind="click: cancelNew" href="">Cancel <i class="pe-times-circle-o"></i></a>
        </p>
      </div>
    </div>
    <!-- ko foreach: messages -->
    <div class="panel panel-primary">
      <div class="panel-heading"><i class="pe-bullhorn pe-fw"></i> <span data-bind="text: head"></span></div>
      <div class="announcement-info"><i class="pe-user pe-fw"></i> <span data-bind="text: fullname"></span> (<span data-bind="text: email"></span>) &middot; <i class="pe-calendar pe-fw"></i> <span data-bind="text: created"></span></div>
      <div class="panel-body small"><span data-bind="text: body"></span></div>
    </div>
    <!-- /ko -->
  </div>
  <div class="col-sm-3">
    <div class="list-group" style="margin-top:30px; padding:0px">
      <a class="list-group-item small list-group-item-success" data-bind="click: createNew, enable: !isNewPostCreating()" href=""><strong><i class="pe-edit pe-fw"></i> Post a new message</strong></a>
    </div>
    <div class="list-group" style="padding:0px">
      <a class="list-group-item small" href="">View all <span class="badge">14</span></a>
      <a class="list-group-item small" href="">Only from System <span class="badge">14</span></a>
      <a class="list-group-item small" href="">Only from Manager <span class="badge">14</span></a>
    </div>
  </div>
</div>

<br>

<script type="text/javascript">

  var userid = <?php echo $_SESSION['userid']; ?>;
  // var email = "<?php echo $_SESSION['email']; ?>";
  // var fullname = "<?php echo $_SESSION['fullname']; ?>";
  var companyid = <?php echo $_SESSION['companyid']; ?>;
  var ip = "<?php echo getip(); ?>";
  var api = "http://www.siamsquare.org.uk";
  $('#showalert-create').html("<div class='alert alert-success'><i class='pe-save pe-fw'></i> A new user has been created</div>").hide();
  $('#showalert-delete').html("<div class='alert alert-danger'><i class='pe-trash pe-fw'></i> The user has been deleted</div>").hide();
  $('#showalert-edit').html("<div class='alert alert-success'><i class='pe-edit pe-fw'></i> The user information has been edited</div>").hide();

  var Listing = function (id, userid, fullname, email, companyid, head, body, created) {
    this.editingHead = ko.observable(head);
    this.editingBody = ko.observable(body);
    this.head = head;
    this.body = body;
    this.fullname = fullname;
    this.email = email;
    this.created = created;
    this.isEditingHead = ko.observable(false);
    this.isEditingBody = ko.observable(false);
  }

  var ViewModel = function () {
    var self = this;
    this.messages = ko.observableArray([]);
    this.url = api;
    this.isNewPostCreating = ko.observable(false);
    this.newPostHead = ko.observable("");
    this.newPostBody = ko.observable("");
    this.createNew = function () {
      self.isNewPostCreating(true);
      self.newPostHead("New topic");
      self.newPostBody("Content of your new message");
    }
    this.cancelNew = function () {
      self.isNewPostCreating(false);
    }
    this.postNew = function () {
      self.cancelNew();
      $.ajax({
        url: api + '/message/' + companyid + '/' + userid + '/new?head=' + self.newPostHead() + '&body=' + self.newPostBody(),
        dataType: 'json',
        type: 'get',
        contentType: 'application/json; charset=utf-8',
        success: function (data) {
          self.messages.splice(0, 0, self.createPostObject(data));
          $('#showalert-create').show();
          window.setTimeout(function () { $("#showalert-create").slideUp(500, function () { $("#showalert-create").hide(); }); }, 3000);
          $.ajax({
            url: api + '/log',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json; charset=utf-8',
            data: '{ "userid": "' + userid + '", "ip": "' + ip + '", "data": "' + email + ' created a new message (' + self.newPostHead() + ')", "critical": "4" }',
            success: function(data) { result = data; }
          });
        },
        error: function (error) { self.onFail(error); }
      });
    }
    this.loadData = function (i) {
      $.ajax({
        url: api + '/message/' + companyid,
        dataType: 'json',
        type: 'get',
        contentType: 'application/json; charset=utf-8',
        success: function (data) {
          var list = [];
          for (var i = 0; i < data.length; i++) { list.push(self.createPostObject(data[i])); }
          self.messages(list);
        },
        error: function (error) { self.onFail(error); }
      });
    }
    this.delete = function (message) {
      $.ajax({
        url: api + '/message/' + message.id + '/delete',
        dataType: 'json',
        type: 'put',
        contentType: 'application/json; charset=utf-8',
        data: '{ "status": "-1" }',
        success: function (data) {
          $('#showalert-delete').show();
          window.setTimeout(function () { $("#showalert-delete").slideUp(500, function () { $("#showalert-delete").hide(); }); }, 3000);
          self.removePost(message);
          // $.ajax({
          //   url: api + '/log',
          //   dataType: 'json',
          //   type: 'post',
          //   contentType: 'application/json; charset=utf-8',
          //   data: '{ "userid": "' + userid + '", "ip": "' + ip + '", "data": "' + email + ' deleted a message (' + message.head() + ')", "critical": "4" }',
          //   success: function(data) { result = data; }
          // });
        },
        error: function (error) { self.onFail(error); }
      });
    }
    this.removePost = function (message) {
      var index = self.messages.indexOf(message);
      if (index > -1) { self.messages.splice(index, 1); }
    }
    this.startEditHead = function (message) {
      message.editingHead(message.head());
      message.isEditingHead(true);
    }
    this.postEditHead = function (message) {
      self.cancelEditHead(message);
      $.ajax({
        url: api + '/message/' + message.id + '/rehead',
        dataType: 'json',
        type: 'put',
        contentType: 'application/json; charset=utf-8',
        data: '{ "head": "' + message.editingHead() + '" }',
        success: function (data) {
          message.head(message.editingHead());
          $('#showalert-edit').show();
          window.setTimeout(function () { $("#showalert-edit").slideUp(500, function () { $("#showalert-edit").hide(); }); }, 3000);
          // $.ajax({
          //   url: api + '/log',
          //   dataType: 'json',
          //   type: 'post',
          //   contentType: 'application/json; charset=utf-8',
          //   data: '{ "userid": "' + userid + '", "ip": "' + ip + '", "data": "' + email + ' renamed a message topic (' + message.head() + ')", "critical": "4" }',
          //   success: function(data) { result = data; }
          // });
        },
        error: function (error) { self.onFail(error); }
      });
    }
    this.cancelEditHead = function (message) { message.isEditingHead(false); }
    this.startEditBody = function (message) {
      message.editingBody(message.body());
      message.isEditingBody(true);
    }
    this.postEditBody = function (message) {
      self.cancelEditBody(message);
      $.ajax({
        url: api + '/message/' + message.id + '/rebody',
        dataType: 'json',
        type: 'put',
        contentType: 'application/json; charset=utf-8',
        data: '{ "body": "' + message.editingBody() + '" }',
        success: function (data) {
          message.body(message.editingBody());
          $('#showalert-edit').show();
          window.setTimeout(function () { $("#showalert-edit").slideUp(500, function () { $("#showalert-edit").hide(); }); }, 3000);
          // $.ajax({
          //   url: api + '/log',
          //   dataType: 'json',
          //   type: 'post',
          //   contentType: 'application/json; charset=utf-8',
          //   data: '{ "userid": "' + userid + '", "ip": "' + ip + '", "data": "' + email + ' changed a message body (' + message.body() + ')", "critical": "4" }',
          //   success: function(data) { result = data; }
          // });
        },
        error: function (error) { self.onFail(error); }
      });
    }
    this.cancelEditBody = function (message) { message.isEditingBody(false); }
    this.createPostObject = function (data) {
      moment.locale('en');
      if (data.created != null) { var sa1 = moment(data.created).fromNow(); var sa2 = moment(data.created).format("D MMM YYYY"); created = sa2 + ' (' + sa1 + ')'; } else { created = data.created; }
      // if (data.level == 9) { role = "Administrator"; } else if (data.level == 6) { role = "Manager"; } else if (data.level == 5) { role = "User"; }
      return new Listing (data.id, data.userid, data.fullname, data.email, companyid, data.head, data.body, created);
    }
    this.onFail = function (error) { alert(JSON.stringify(error)); }
    this.loadData();
  }
  jQuery(document).ready(function () {
    ko.applyBindings(new ViewModel());
  });

</script>


<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
