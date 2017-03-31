<?php

$limit = 5;

$me = "/admin/?w=board";
if ($_GET['p']) { $p = $_GET['p']; }
if ($p == '') { $p = "1"; }

if ($_POST['newpost'] == 1) {
  if (($_POST['head']) || ($_POST['body'])) {
    $q0A = $db->prepare("INSERT INTO j_board (head, body, userid, companyid) VALUES (:head, :body, :userid, :companyid)");
    $q0A->bindValue(':head', $_POST['head'], PDO::PARAM_STR);
    $q0A->bindValue(':body', $_POST['body'], PDO::PARAM_STR);
    $q0A->bindValue(':userid', $_POST['userid'], PDO::PARAM_INT);
    $q0A->bindValue(':companyid', $_POST['companyid'], PDO::PARAM_INT);
    $q0A->execute();
  }
  $redirect = $me."&m=1";
  header("location: $redirect");
  exit;
} else if ($_GET['d']) {
  $q0B = $db->prepare("UPDATE j_board SET status = 0 WHERE id = :id");
  $q0B->bindValue(':id', base64_decode($_GET["d"]), PDO::PARAM_INT);
  $q0B->execute();
  $q0C = $db->prepare("INSERT INTO j_users_logs (userid, ip, data, critical) VALUE (:userid, :ip, '" . $_SESSION["email"] . " deleted a post in " . $_SESSION["company"] . " board', '3')");
  $q0C->bindValue(':userid', $_SESSION["userid"], PDO::PARAM_INT);
  $q0C->bindValue(':ip', $_SESSION["ip"], PDO::PARAM_INT);
  $q0C->execute();
  $redirect = $me."&m=2";
  header("location: $redirect");
  exit;
}

$title = "Message board";
pageHeader($title);
echo "<h2>$title</h2>\n";
echo "<p class=\"introtext\">We provide a message board so an easy and convenient communication can be reached by our clients. All messages will be seen only by members within your company, and only post owner or Manager will have a permission to delete a message from this board.</p>\n";
echo "<hr>\n";

if (empty($start)) { $start = 0; }
if (empty($limit)) { $limit = 500; }
if ($p) { $start = ($p-1) * $limit; }
$to_record = $start + $limit;
$add = " LIMIT $start, $limit ";

// Get stats
$q1A = $db->prepare("SELECT COUNT(*) AS iA, SUM(companyid = '0') AS iB, SUM(companyid = :companyid) AS iC FROM j_board WHERE status > 0 AND (companyid = 0 OR companyid = :companyid)");
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

if ($_GET['m'] == "1") { $message = mksuccess("You have successfully created a new message."); echo "<p>$message</p>\n"; }
else if ($_GET['m'] == "2") { $message = mkwarn("The selected message have been deleted."); echo "<p>$message</p>\n"; }
else { echo "<p></p>\n"; }

?>

<!-- <div id="showalert-create"></div><div id="showalert-delete"></div><div id="showalert-edit"></div> -->

<p>Found <strong><?php echo $rows; ?> posts</strong> in our database (showing results <?php echo $from_record; ?> to <?php echo $to_record; ?>) plus another <strong><?php echo $totalglobal; ?> posts</strong> by system announcement</p>
<div class="row">
  <div class="col-xs-12 col-sm-9 col-md-9 col-lg-9">
    <form method="post" action="<?php echo $me; ?>">
      <div data-bind="visible: isNewPostCreating" class="panel panel-default">
        <div class="panel-body small bg-success">
          <div class="input-group">
            <span class="input-group-addon"><i class="pe-wpforms pe-fw"></i></span>
            <input type="text" name="head" class="form-control" value="" placeholder="Topic of the message" onclick="this.select()">
          </div>
          <br>
          <textarea name="body" rows="5" class="form-control" placeholder="Message content"></textarea><br>
          <div class="row">
            <div class="col-sm-9">
              <p class="text-center">
                <input type="hidden" name="userid" value="<?php echo $_SESSION['userid']; ?>">
                <input type="hidden" name="companyid" value="<?php echo $_SESSION['companyid']; ?>">
                <button class="btn btn-sm btn-success" name="newpost" value="1" type="submit">Post <i class="pe-check-circle-o"></i></button>
                <a class="btn btn-sm btn-default" data-bind="click: cancelNew" href="">Cancel <i class="pe-times-circle-o"></i></a>
              </p>
            </div>
<?php if ($_SESSION['level'] == 9) { ?>
            <div class="col-sm-3">
              <select class="form-control input-sm" name="">
                <option value="">-- select --</option>
                <option value="">Global</option>
                <option value="" selected>This company</option>
              </select>
            </div>
<?php } ?>
          </div>
        </div>
      </div>
    </form>
<?php
$q1C = $db->prepare("SELECT B.*, U.fullname, U.email, U.level, U.avatar FROM j_board B, j_users U WHERE B.status > 0 AND B.userid = U.id AND B.companyid = :companyid ORDER BY B.created DESC".$add);
$q1C->bindValue(':companyid', $_SESSION["companyid"], PDO::PARAM_INT);
$q1C->execute();
while ($row = $q1C->fetchObject()) {
  $postid = base64_encode($row->id);
  $body = nl2br($row->body);
  if ($row->created) { $t1 = shortdate($row->created); $t2 = ago($row->created); } else { $t1 = "Never login"; $t2 = "Never login"; }
  if ($_SESSION['email'] == $row->email) { echo "    <div class=\"panel panel-info\" style=\"border:2px solid navy\">\n"; }
  else { echo "    <div class=\"panel panel-info\">\n"; }
  if ($_SESSION['level'] >= $row->level) { echo "    <a href=\"\" data-href=\"$me&amp;d=$postid\" data-toggle=\"modal\" data-target=\"#confirm-delete\" class=\"pull-right red\" style=\"margin-top:10px;margin-right:10px\" title=\"Delete this post\"><i class=\"pe-trash\"></i></a>\n"; }
  echo "      <div class=\"panel-heading\"><i class=\"pe-wpforms pe-fw\"></i> $row->head</div>\n";
  echo "      <div class=\"announcement-info\"><i class=\"pe-user pe-fw\"></i> $row->fullname ($row->email) &middot; <i class=\"pe-calendar pe-fw\"></i> $t1 ($t2)</div>\n";
  if ($row->avatar) { echo "      <p class=\"pull-right\" style=\"margin:10px\"><img src=\"/admin/assets/img/u/".$row->avatar.".svg\" class=\"img-circle members-photo-small\" alt=\"Avatar\"></p>\n"; }
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
      <a class="list-group-item small list-group-item-success" data-bind="click: createNew, enable: !isNewPostCreating()" href=""><strong><i class="pe-edit pe-fw"></i> Post a new message</strong></a>
    </div>
    <div class="list-group">
      <div class="list-group-item small active"><strong><i class="pe-level-down pe-flip-horizontal pe-fw"></i> System annoucement</strong></div>
<?php
$q1B = $db->prepare("SELECT B.*, U.fullname, U.email, U.level FROM j_board B, j_users U WHERE B.status > 0 AND B.userid = U.id AND B.companyid = 0 ORDER BY B.created DESC");
$q1B->execute();
$i = 0;
while ($row = $q1B->fetchObject()) {
  $postid = base64_encode($row->id);
  $body = nl2br($row->body);
  if ($row->created) { $t1 = shortdate($row->created); $t2 = ago($row->created); } else { $t1 = "Never login"; $t2 = "Never login"; }
  echo "      <div class=\"list-group-item small\">\n";
  if ($_SESSION['level'] >= $row->level) { echo "        <a href=\"\" data-href=\"$me&amp;d=$postid\" data-toggle=\"modal\" data-target=\"#confirm-delete\" class=\"pull-right red\" title=\"Delete this post\"><i class=\"pe-trash\"></i></a>\n"; }
  echo "        <i class=\"pe-bullhorn pe-fw\"></i> <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#c$postid\">$row->head</a>\n";
  if ($i == 0) { echo "        <div id=\"c$postid\" class=\"global collapse in\">\n"; } else { echo "        <div id=\"c$postid\" class=\"global collapse\">\n"; }
  echo "          <br><p class=\"grey\"><small>$body</small></p>\n";
  echo "        </div>\n";
  echo "      </div>\n";
  $i++;
}
?>
    </div>
    <div class="panel-group">
      <div class="panel panel-default small">
        <div class="panel-heading"><strong><i class="pe-clock-o pe-fw"></i> Last seen</strong></div>
<?php
$q1C = $db->prepare("SELECT * FROM j_users WHERE companyid = :companyid AND email != :email ORDER BY lastlogin DESC");
$q1C->bindValue(':companyid', $_SESSION["companyid"], PDO::PARAM_INT);
$q1C->bindValue(':email', $_SESSION["email"], PDO::PARAM_STR);
$q1C->execute();
while ($row = $q1C->fetchObject()) {
  if ($row->lastlogin) { $lastlogin = ago($row->lastlogin); } else { $lastlogin = "Never login"; }
  echo "        <div class=\"panel-body grey\" style=\"padding:8px 10px 5px 10px\"><small><strong>$row->fullname</strong>: $lastlogin</small></div>\n";
}
?>
      </div>
    </div>
  </div>
</div>

<br>

<div class="modal fade" id="confirm-delete" tabindex="-1" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
        <h4>Confirm delete?</h4>
        <p>Are you sure that you want to delete this post permanently?</p>
        <p><button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button> <a class="btn btn-danger btn-ok">Delete <i class="pe-trash-o"></i></a>
        </p>
      </div>
    </div>
  </div>
</div>

<script type="text/javascript">

  var companyid = parseInt("<?php echo $_SESSION['companyid']; ?>");
  var userid = parseInt("<?php echo $_SESSION['userid']; ?>");
  $('#showalert-create').html("<div class='alert alert-success'><i class='pe-save pe-fw'></i> A new user has been created</div>").hide();
  $('#showalert-delete').html("<div class='alert alert-danger'><i class='pe-trash pe-fw'></i> The user has been deleted</div>").hide();
  $('#showalert-edit').html("<div class='alert alert-success'><i class='pe-edit pe-fw'></i> The user information has been edited</div>").hide();
  $.ajaxSetup({ headers: { 'X-Requested-With': 'aa5e1ab4-b0bf-4e82-8584-7cf4e9fdeaa8' } });

  var ViewModel = function () {
    var self = this;
    this.messages = ko.observableArray([]);
    this.isNewPostCreating = ko.observable(false);
    this.newPostHead = ko.observable("");
    this.newPostBody = ko.observable("");
    this.createNew = function () {
      self.isNewPostCreating(true);
      self.newPostHead("New topic");
      self.newPostBody("Content of your new message");
    }
    this.cancelNew = function () { self.isNewPostCreating(false); }
    this.postNew = function () { self.cancelNew(); }
  }
  $(function () { ko.applyBindings(new ViewModel()); });

  $('#confirm-delete').on('show.bs.modal', function(e) { $(this).find('.btn-ok').attr('href', $(e.relatedTarget).data('href')); });
  $(document).on('keypress', function (e) { if ($('#confirm-delete').is(':visible')) { if (e.which == 13) { window.location= $("#confirm-delete .btn-ok", this).attr("href"); } } });

  $('.global.collapse').on('show.bs.collapse', function (e) {
    var all = $(document).find('.global.collapse');
    var actives = $(document).find('.global.collapse.in');
    all.each(function (index, element) { $(element).collapse('hide'); })
    actives.each(function (index, element) { $(element).collapse('show'); })
  })

</script>

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
