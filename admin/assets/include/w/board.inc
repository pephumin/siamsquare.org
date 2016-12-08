<?php

$limit = 5;

$me = "/admin/?w=board";
if ($_GET['p']) { $p = $_GET['p']; }
if ($p == '') { $p = "1"; }

require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/config.php';
$db = new PDO('mysql:host='. DB_HOST .';dbname='. DB_DATABASE . ';charset=utf8', DB_USER, DB_PASS);

if ($_POST['newpost'] == 1) {
  if (($_POST['head']) || ($_POST['body'])) {
    $q0A = $db->prepare("INSERT INTO j_news (head, body, userid, companyid) VALUES (:head, :body, :userid, :companyid)");
    $q0A->bindValue(':head', $_POST['head'], PDO::PARAM_STR);
    $q0A->bindValue(':body', $_POST['body'], PDO::PARAM_STR);
    $q0A->bindValue(':userid', $_POST['userid'], PDO::PARAM_INT);
    $q0A->bindValue(':companyid', $_POST['companyid'], PDO::PARAM_INT);
    $q0A->execute();
  }
} else if ($_GET['d']) {
  $q0B = $db->prepare("UPDATE j_news SET status = 0 WHERE id = :id");
  $q0B->bindValue(':id', base64_decode($_GET["d"]), PDO::PARAM_INT);
  $q0B->execute();
}

$title = "Message board";
pageHeader($title);
echo "<h2>$title</h2>\n";
echo "<p>We provide a message board aiming to give our clients a more convenient way to communicate. All messages will be seen only by members within your company, and only post owner or Manager will have a permission to delete a message from this board.</p>\n";
echo "<hr>\n";

if (empty($start)) { $start = 0; }
if (empty($limit)) { $limit = 500; }
if ($p) { $start = ($p-1) * $limit; }
$to_record = $start + $limit;
$add = " LIMIT $start, $limit ";

// Get stats
$q1A = $db->prepare("SELECT COUNT(*) AS iA, SUM(companyid='0') AS iB, SUM(companyid=:companyid) AS iC FROM j_news WHERE status > 0 AND (companyid = 0 OR companyid = :companyid)");
$q1A->bindValue(':companyid', $_SESSION["companyid"], PDO::PARAM_INT);
$q1A->execute();
// $rows = $q1A->rowCount();
while ($row = $q1A->fetchObject()) {
  $totalALL = $row->iA; $totalglobal = $row->iB; $totalthiscompany = $row->iC;
}
$rows = $totalthiscompany;

$total = ceil($rows/$limit);
$offset = ($currentpage - 1) * $rowsperpage;

if ($to_record > $rows) { $to_record = $rows; }
$from_record = $start + 1;

?>

<!-- <div id="showalert-create"></div><div id="showalert-delete"></div><div id="showalert-edit"></div> -->

<p>Found <strong><?php echo $rows; ?> posts</strong> in our database (showing results <?php echo $from_record; ?> to <?php echo $to_record; ?>)</p>
<div class="row">
  <div class="col-xs-12 col-sm-9 col-md-9 col-lg-9">
    <form method="post" action="<?php echo $me; ?>">
      <div data-bind="visible: isNewPostCreating" class="panel panel-default">
        <div class="panel-body small bg-info">
          <div class="input-group">
            <span class="input-group-addon"><i class="pe-wpforms pe-fw"></i></span>
            <input type="text" name="head" class="form-control" value="" placeholder="Message heading" onclick="this.select()">
          </div>
          <br>
          <textarea name="body" rows="5" class="form-control" placeholder="Message content"></textarea><br>
          <div class="row">
            <div class="col-sm-9">
              <p class="text-center">
                <input type="hidden" name="userid" value="<?php echo $_SESSION['userid']; ?>">
                <input type="hidden" name="companyid" value="<?php echo $_SESSION['companyid']; ?>">
                <button class="btn btn-sm btn-warning" name="newpost" value="1" type="submit">Post <i class="pe-check-circle-o"></i></button>
                <a class="btn btn-sm btn-default" data-bind="click: cancelNew" href="">Cancel <i class="pe-times-circle-o"></i></a>
              </p>
            </div>
<?php if ($_SESSION['level'] == 9) { ?>
            <div class="col-sm-3">
              <select class="form-control input-sm" name="">
                <option value="">-- select --</option>
                <option value="">Global</option>
                <option value="">This company</option>
              </select>
            </div>
<?php } ?>
          </div>
        </div>
      </div>
    </form>
<?php
$q1C = $db->prepare("SELECT N.*, U.fullname, U.email, U.level FROM j_news N, j_users U WHERE N.status > 0 AND N.userid = U.id AND N.companyid = :companyid ORDER BY N.created DESC".$add);
$q1C->bindValue(':companyid', $_SESSION["companyid"], PDO::PARAM_INT);
$q1C->execute();
while ($row = $q1C->fetchObject()) {
  $postid = base64_encode($row->id);
  $body = nl2br($row->body);
  $t1 = shortdate($row->created); $t2 = ago($row->created);
  echo "    <div class=\"panel panel-info\">\n";
  if ($_SESSION['level'] >= $row->level) { echo "    <a href=\"$me&amp;d=$postid\" class=\"pull-right red\" style=\"margin-top:10px;margin-right:10px\" title=\"Delete this post\"><i class=\"pe-trash\"></i></a>\n"; }
  //echo "    <a href=\"$me&amp;d=$postid\" class=\"pull-right\" style=\"margin-top:10px;margin-right:5px\" title=\"Mark completed\"><i class=\"pe-check-square\"></i></a>\n";
  echo "      <div class=\"panel-heading\"><i class=\"pe-wpforms pe-fw\"></i> $row->head</div>\n";
  echo "      <div class=\"announcement-info\"><i class=\"pe-user pe-fw\"></i> $row->fullname ($row->email) &middot; <i class=\"pe-calendar pe-fw\"></i> $t1 ($t2)</div>\n";
  echo "      <div class=\"panel-body small\">$body</div>\n";
  echo "    </div>\n";
}

echo "    <nav class=\"pagination-centered\">\n";
echo "      <ul class=\"pagination\">\n";
if ($p > 1) { $previous = $p-1; echo "        <li><a class=\"btn btn-sm\" role=\"button\" href=\"".$me."&p=".$previous."\">&laquo;</a></li>\n"; }
else { echo "        <li class=\"disabled\"><a class=\"btn btn-sm\" role=\"button\" href=\"\">&laquo;</a></li>\n"; }
for ($i=1; $i<=$total; $i++) {
  if ($i == $p) { echo "        <li class=\"active\"><a class=\"btn btn-sm\" role=\"button\" href=\"".$me."&p=".$i."\">".$i."</a></li>\n"; }
  else { echo "        <li><a class=\"btn btn-sm\" role=\"button\" href=\"".$me."&p=".$i."\">".$i."</a></li>\n"; }
}
if ($p != $total) { $next = $p+1; echo "        <li><a class=\"btn btn-sm\" role=\"button\" href=\"".$me."&p=".$next."\">&raquo;</a></li>\n"; }
else { echo "        <li class=\"disabled\"><a class=\"btn btn-sm\" role=\"button\" href=\"\">&raquo;</a></li>\n"; }
echo "      </ul>\n";
echo "    </nav>\n";
?>
  </div>
  <div class="col-sm-3">
    <div class="list-group">
      <a class="list-group-item small list-group-item-info" data-bind="click: createNew, enable: !isNewPostCreating()" href=""><strong><i class="pe-edit pe-fw"></i> Post a new message</strong></a>
    </div>
    <div class="list-group">
      <div class="list-group-item small list-group-item-warning"><strong><i class="pe-level-down pe-flip-horizontal pe-fw"></i> System annoucement</strong></div>
<?php
$q1B = $db->prepare("SELECT N.*, U.fullname, U.email, U.level FROM j_news N, j_users U WHERE N.status > 0 AND N.userid = U.id AND N.companyid = 0 ORDER BY N.created DESC".$add);
$q1B->execute();
while ($row = $q1B->fetchObject()) {
  $postid = base64_encode($row->id);
  $body = nl2br($row->body);
  $t1 = shortdate($row->created); $t2 = ago($row->created);
  echo "      <div class=\"list-group-item small\">\n";
  if ($_SESSION['level'] >= $row->level) { echo "      <a href=\"$me&amp;d=$postid\" class=\"pull-right red\" title=\"Delete this post\"><i class=\"pe-trash\"></i></a>\n"; }
  echo "        <div role=\"tab\" id=\"h$postid\"><i class=\"pe-bullhorn pe-fw\"></i> <a class=\"collapsed\" data-toggle=\"collapse\" href=\"#c$postid\" aria-expanded=\"false\" aria-controls=\"c$postid\">$row->head</a></div>\n";
  echo "        <div id=\"c$postid\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"h$postid\">\n";
  echo "          <br><p><small>$body</small></p>\n";
  echo "        </div>\n";
  echo "      </div>\n";
}
?>
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
          window.setTimeout(function () { $("#showalert-create").slideUp(500, function () { $("#showalert-create").hide(); }); }, 5000);
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
          window.setTimeout(function () { $("#showalert-delete").slideUp(500, function () { $("#showalert-delete").hide(); }); }, 5000);
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
          window.setTimeout(function () { $("#showalert-edit").slideUp(500, function () { $("#showalert-edit").hide(); }); }, 5000);
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
          window.setTimeout(function () { $("#showalert-edit").slideUp(500, function () { $("#showalert-edit").hide(); }); }, 5000);
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