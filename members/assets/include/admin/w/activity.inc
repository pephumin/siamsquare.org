<?php

$base = "/admin/?w=activity";
// if ($p == '') { $p = "1"; }
if ($_GET['c']) { $c = $_GET['c']; $ex1 = "&c=".$_GET['c']; } else { $ex1 = ""; }
if ($_GET['p']) { $p = $_GET['p']; $ex2 = "&p=".$_GET['p']; } else { $ex2 = ""; }
if ($_GET['s']) { $s = $_GET['s']; $ex3 = "&s=".$_GET['s']; } else { $ex3 = ""; }
if ($_GET['b']) { $b = $_GET['b']; $ex4 = "&b=".$_GET['b']; } else { $ex4 = ""; }
if ($_GET['u']) { $u = $_GET['u']; $ex5 = "&u=".$_GET['u']; } else { $ex5 = ""; }
$me = $base.$ex1.$ex2.$ex3.$ex4.$ex5;

if ($_GET['d']) {
  if ($_SESSION['level'] == "9") {
    $d = base64_decode($_GET['d']);
    $q = $db->prepare("DELETE FROM j_users_logs WHERE id = :id");
    $q->bindValue(':id', $d, PDO::PARAM_INT);
    $q->execute();
    if ($q->rowCount()) { echo mksuccess("This record has been deleted."); $notes = array (array("title" => "A recored has been deleted", "text" => "You have just deleted a log record from the system.", "image" => "assets/img/notification.svg")); }
    else { echo mkerror("Something wrong, this record has not been deleted."); }
    $redirect = $me."&m=2";
    header("location: $redirect");
    exit;
  } else { echo mkerror("Your level is not high enough to delete this data from the system."); }
}

// Get the company list
$q0A = $db->prepare("SELECT * FROM j_companies ORDER BY id DESC");
$q0A->execute();
$companylist1 = "";
while ($row = $q0A->fetchObject()) {
  $companyid = $row->id;
  $companyname = $row->company;
  if ($_SESSION['level'] > "6") {
    if ($companyid == $b) { $companylist1 .= "            <option value=\"$companyid\" selected>$companyname</option>\n"; }
    else { $companylist1 .= "            <option value=\"$companyid\">$companyname</option>\n"; }
  }
}

if ($_SESSION['level'] == "6") {
  if ($_SESSION['companyid'] == $b) { $companylist1 .= "            <option value=\"".$_SESSION['companyid']."\" selected>".$_SESSION['cfullname']."</option>\n"; }
  else { $companylist1 .= "            <option value=\"".$_SESSION['companyid']."\">".$_SESSION['cfullname']."</option>\n"; }
}

if (($b) || ($_SESSION['level'] == "6")) {
  $q0B = $db->prepare("SELECT U.*, C.company FROM j_users U, j_companies C WHERE U.companyid = C.id AND U.companyid = :companyid");
  if ($_SESSION['level'] > "6") { $q0B->bindValue(':companyid', $b, PDO::PARAM_INT); }
  else if ($_SESSION['level'] == "6") { $q0B->bindValue(':companyid', $_SESSION['companyid'], PDO::PARAM_INT); }
  $q0B->execute();
  while ($r = $q0B->fetchObject()) {
    if ($r->id == $u) { $userlist .= "            <option value=\"$r->id\" selected>$r->fullname ($r->email)</option>\n"; }
    else { $userlist .= "            <option value=\"$r->id\">$r->fullname ($r->email)</option>\n"; }
    $uidlist[] = $r->id;
  }
}

if ($u) { $c0 = "L.userid = :userid"; } else if (($b) || ($_SESSION['level'] == "6")) { $c0 = "L.userid IN (".implode(',', $uidlist).") "; }
if (($c) && ($c0)) { $c1A = "WHERE L.critical = $c AND $c0 "; $c1B = "AND L.critical = $c "; }
else if ((empty($c)) && ($c0)) { $c1A .= "WHERE $c0 "; $c1B = ""; }
else if ((empty($c0)) && ($c)) { $c1A = "WHERE L.critical = $c "; $c1B = "AND L.critical = $c "; }
else if ((empty($c0)) && (empty($c))) { $c1A = ""; $c1B = ""; }

if ($_SESSION['level'] >= "6") {
  $q1A = $db->prepare("SELECT L.* FROM j_users_logs L ".$c1A);
  if ($u) { $q1A->bindValue(':userid', $u, PDO::PARAM_INT); }
} else {
  $q1A = $db->prepare("SELECT L.* FROM j_users_logs L WHERE L.userid = :userid ".$c1B);
  $q1A->bindValue(':userid', $_SESSION["userid"], PDO::PARAM_INT);
}
$q1A->execute();
$rows = $q1A->rowCount(); $rows_format = number_format($rows);

if ($s) {
  $limit = $s;
} else {
  if ($rows <= 250) { $limit = 50; }
  else if ($rows > 250 && $rows <= 500) { $limit = 100; }
  else if ($rows > 500 && $rows <= 1000) { $limit = 300; }
  else if ($rows > 1000) { $limit = 500; }
}

if (empty($start)) { $start = 0; }
if (empty($limit)) { $limit = 500; }
if ($p) { $start = ($p-1) * $limit; }
$to_record = $start + $limit;
$total = ceil($rows/$limit);
if ($to_record > $rows) { $to_record = $rows; }
$from_record = $start + 1;
$to_record_format = number_format($to_record);
$from_record_format = number_format($from_record);

$title = "Activity";
pageHeader($title);
echo "<h2>$title</h2>";
echo "<p class=\"introtext\">This page shows the activities sorted by time where the most recent activity is on the top of the list. While the default is set to have each user only sees his/her own activity, users with a higher access permission will also see the activity of other members within the same group.</p>\n";
echo "<p class=\"introtext\">Feel free to contact us if you find any problems using our site. Any other suggestions are also more than welcome.</p>\n";
// echo "<br>\n";

if ($_GET['m'] == "2") { $message = mkwarn("The selected activity has been deleted."); echo "<p>$message</p>\n"; }
else { echo "<p></p>\n"; }

$menu1 = "<div class=\"row bg-info\" style=\"padding:20px 30px\">\n";
if ($_SESSION['level'] >= "6") {
  $menu1 .= "  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n";
  $menu1 .= "    <div class=\"input-group\">\n";
  $menu1 .= "      <span class=\"input-group-addon input-sm\">Select <i class=\"pe-building pe-fw\"></i> company or <i class=\"pe-user pe-fw\"></i> user:</span>\n";
  if ($b) {
    $menu1 .= "      <span class=\"input-group-btn\">\n";
    $menu1 .= "        <form method=\"get\" class=\"form-inline\" action=\"$me\">\n";
    $menu1 .= "          <input type=\"hidden\" name=\"w\" value=\"activity\">\n";
    $menu1 .= "          <select class=\"form-control input-sm\" name=\"b\" onchange=\"this.form.submit()\">\n";
    $menu1 .= "            <option value=\"\">All companies</option>\n";
    $menu1 .= $companylist1;
    $menu1 .= "          </select>\n";
    $menu1 .= "        </form>\n";
    $menu1 .= "      </span>\n";
    $menu1 .= "      <span class=\"input-group-btn\">\n";
    $menu1 .= "        <form method=\"get\" class=\"form-inline\" action=\"$me\">\n";
    $menu1 .= "          <span class=\"input-group-btn small\">and <i class=\"pe-user pe-fw\"></i> user:</span>\n";
    $menu1 .= "          <input type=\"hidden\" name=\"w\" value=\"activity\">\n";
    if ($b) { $menu1 .= "          <input type=\"hidden\" name=\"b\" value=\"$b\">\n"; }
    $menu1 .= "          <select class=\"form-control input-sm\" name=\"u\" id=\"selectuser\" onchange=\"this.form.submit()\">\n";
    $menu1 .= "            <option value=\"\">All users</option>\n";
    $menu1 .= $userlist;
    $menu1 .= "          </select>\n";
    $menu1 .= "        </form>\n";
    $menu1 .= "      </span>\n";
  } else {
    $menu1 .= "      <form method=\"get\" class=\"form-inline\" action=\"$me\">\n";
    $menu1 .= "        <input type=\"hidden\" name=\"w\" value=\"activity\">\n";
    $menu1 .= "        <select class=\"form-control input-sm\" name=\"b\" onchange=\"this.form.submit()\">\n";
    $menu1 .= "          <option value=\"\">All companies</option>\n";
    $menu1 .= $companylist1;
    $menu1 .= "        </select>\n";
    $menu1 .= "      </form>\n";
  }
  $menu1 .= "    </div>\n";
  $menu1 .= "  </div>\n";
  $menu1 .= "<br><br>\n";
}
$menu1 .= "  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\n";
$menu1 .= "    <div class=\"input-group\">\n";
$menu1 .= "      <span class=\"input-group-addon input-sm\">Select <i class=\"pe-exclamation-circle pe-fw\"></i> critical level:</span>\n";
$menu1 .= "      <form method=\"get\" class=\"form-inline\" action=\"$me\">\n";
$menu1 .= "        <input type=\"hidden\" name=\"w\" value=\"activity\">\n";
if ($b) { $menu1 .= "        <input type=\"hidden\" name=\"b\" value=\"$b\">\n"; }
if ($u) { $menu1 .= "        <input type=\"hidden\" name=\"u\" value=\"$u\">\n"; }
$menu1 .= "        <select class=\"form-control input-sm\" name=\"c\" onchange=\"this.form.submit()\">\n";
$menu1 .= "          <option value=\"\">All levels</option>\n";
if ($c == 1) { $menu1 .= "          <option value=\"1\" selected>Level 1</option>\n"; } else { $menu1 .= "          <option value=\"1\">Level 1</option>\n"; }
if ($c == 2) { $menu1 .= "          <option value=\"2\" selected>Level 2</option>\n"; } else { $menu1 .= "          <option value=\"2\">Level 2</option>\n"; }
if ($c == 3) { $menu1 .= "          <option value=\"3\" selected>Level 3</option>\n"; } else { $menu1 .= "          <option value=\"3\">Level 3</option>\n"; }
if ($c == 4) { $menu1 .= "          <option value=\"4\" selected>Level 4</option>\n"; } else { $menu1 .= "          <option value=\"4\">Level 4</option>\n"; }
if ($c == 5) { $menu1 .= "          <option value=\"5\" selected>Level 5</option>\n"; } else { $menu1 .= "          <option value=\"5\">Level 5</option>\n"; }
$menu1 .= "        </select>\n";
$menu1 .= "      </form>\n";
$menu1 .= "    </div>\n";
$menu1 .= "  </div>\n";
$menu1 .= "  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\n";
$menu1 .= "    <div class=\"input-group\">\n";
$menu1 .= "      <span class=\"input-group-addon input-sm\">Select <i class=\"pe-th pe-fw\"></i> display size:</span>\n";
$menu1 .= "      <form method=\"get\" class=\"form-inline\" action=\"$me\">\n";
$menu1 .= "        <input type=\"hidden\" name=\"w\" value=\"activity\">\n";
if ($c) { $menu1 .= "        <input type=\"hidden\" name=\"c\" value=\"$c\">\n"; }
if ($b) { $menu1 .= "        <input type=\"hidden\" name=\"b\" value=\"$b\">\n"; }
if ($u) { $menu1 .= "        <input type=\"hidden\" name=\"u\" value=\"$u\">\n"; }
$menu1 .= "    <select class=\"form-control input-sm\" name=\"s\" onchange=\"this.form.submit()\">\n";
if ($s == "") { $menu1 .= "          <option value=\"\" selected>Auto (default)</option>\n"; } else { $menu1 .= "          <option value=\"\">Auto (default)</option>\n"; }
if ($s == "50") { $menu1 .= "          <option value=\"50\" selected>50</option>\n"; } else { $menu1 .= "          <option value=\"50\">50</option>\n"; }
if ($s == "100") { $menu1 .= "          <option value=\"100\" selected>100</option>\n"; } else { $menu1 .= "          <option value=\"100\">100</option>\n"; }
if ($s == "300") { $menu1 .= "          <option value=\"300\" selected>300</option>\n"; } else { $menu1 .= "          <option value=\"300\">300</option>\n"; }
if ($s == "500") { $menu1 .= "          <option value=\"500\" selected>500</option>\n"; } else { $menu1 .= "          <option value=\"500\">500</option>\n"; }
if ($s == "1000") { $menu1 .= "          <option value=\"1000\" selected>1,000</option>\n"; } else { $menu1 .= "          <option value=\"1000\">1,000</option>\n"; }
$menu1 .= "        </select>\n";
$menu1 .= "      </form>\n";
$menu1 .= "    </div>\n";
$menu1 .= "  </div>\n";
$menu1 .= "</div>\n";
$menu1 .= "<br><br>\n";
$menu1 .= "<div class=\"row\">\n";
$menu1 .= "  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\n";
$menu1 .= "    <span class=\"\">Found <strong>$rows_format records</strong> in our database <small>(showing results $from_record_format to $to_record_format)</small></span>\n";
$menu1 .= "  </div>\n";
// $menu1 .= "  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\n";
// $menu1 .= "    <div class=\"form-group has-feedback\">\n";
// $menu1 .= "      <form action=\"$me\" method=\"post\">\n";
// $menu1 .= "        <input type=\"text\" id=\"searchbox\" class=\"form-control input-sm\"><i class=\"pe-search form-control-feedback\" aria-hidden=\"true\"></i>\n";
// $menu1 .= "      </form>\n";
// $menu1 .= "    </div>\n";
// $menu1 .= "  </div>\n";
$menu2 .= "  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n";
$menu2 .= "    <br>\n";
$menu2 .= "    <table class=\"table table-condensed table-hover\" id=\"showme\">\n";
$menu2 .= "      <thead>\n";
$menu2 .= "        <tr class=\"bg-success\">\n";
if ($_SESSION['level'] == "9") {
  $menu2 .= "          <th width=\"14%\"><small><i class=\"pe-calendar pe-fw\"></i> Time</small></th>\n";
  $menu2 .= "          <th width=\"55%\"><small><i class=\"pe-map-o pe-fw\"></i> Activity</small></th>\n";
  $menu2 .= "          <th width=\"13%\"><small><i class=\"pe-cubes pe-fw\"></i> Project</small></th>\n";
  $menu2 .= "          <th width=\"13%\"><small><i class=\"pe-users pe-fw\"></i> User</small></th>\n";
  $menu2 .= "          <th width=\"5%\"></th>\n";
} else {
  $menu2 .= "          <th width=\"14%\"><small><i class=\"pe-clock-o pe-fw\"></i> Time</small></th>\n";
  $menu2 .= "          <th width=\"60%\"><small><i class=\"pe-map-o pe-fw\"></i> Activity</small></th>\n";
  $menu2 .= "          <th width=\"13%\"><small><i class=\"pe-cubes pe-fw\"></i> Project</small></th>\n";
  $menu2 .= "          <th width=\"13%\"><small><i class=\"pe-users pe-fw\"></i> User</small></th>\n";
}
$menu2 .= "        </tr>\n";
$menu2 .= "      </thead>\n";
$menu2 .= "      <tbody>\n";

if ($_SESSION['level'] >= "6") {
  $q1B = $db->prepare("SELECT L.*, P.title, U.email AS uemail, U.fullname AS ufullname FROM j_users_logs L LEFT JOIN j_projects P ON P.id = L.surveyid LEFT JOIN j_users U ON U.id = L.userid ".$c1A." ORDER BY L.recorded DESC LIMIT $start, $limit");
  if ($u) { $q1B->bindValue(':userid', $u, PDO::PARAM_INT); }
} else {
  $q1B = $db->prepare("SELECT L.*, P.title, U.email AS uemail, U.fullname AS ufullname FROM j_users_logs L LEFT JOIN j_projects P ON P.id = L.surveyid LEFT JOIN j_users U ON U.id = L.userid WHERE L.userid = :userid ".$c1B." ORDER BY L.recorded DESC LIMIT $start, $limit");
  $q1B->bindValue(':userid', $_SESSION["userid"], PDO::PARAM_INT);
}
$q1B->execute();

$pagination = "<nav class=\"pagination-centered\">\n";
$pagination .= "  <ul class=\"pagination\">\n";
if ($total > 1 && $p <= $total) {
  if (($p == 1) || (empty($p))) { $pagination .= "    <li class=\"active\"><a class=\"btn btn-sm\" href=\"".$me."&p=1\">1</a></li>\n"; }
  else { $pagination .= "    <li><a class=\"btn btn-sm\" href=\"".$me."&p=1\">1</a></li>\n"; }
  $i = max(2, $p - 2);
  if ($i > 2) { $pagination .= "    <li><a class=\"btn btn-sm\" style=\"border:none\">...</a></li>\n"; }
  for (; $i < min($p + 3, $total); $i++) {
    if ($i == $p) { $pagination .= "    <li class=\"active\"><a class=\"btn btn-sm\" href=\"".$me."&p=".$i."\">".$i."</a></li>\n"; }
    else { $pagination .= "    <li><a class=\"btn btn-sm\" href=\"".$me."&p=".$i."\">".$i."</a></li>\n"; }
  }
  if ($i != $total) { $pagination .= "    <li><a class=\"btn btn-sm\" style=\"border:none\">...</a></li>\n"; }
  if ($p == $total) { $pagination .= "    <li class=\"active\"><a class=\"btn btn-sm\" href=\"".$me."&p=".$total."\">".$total."</a></li>\n"; }
  else { $pagination .= "    <li><a class=\"btn btn-sm\" href=\"".$me."&p=".$total."\">".$total."</a></li>\n"; }
}
$pagination .= "  </ul>\n";
$pagination .= "</nav>\n";


while ($r = $q1B->fetchObject()) {
  $t = ago($r->recorded);
  if ($r->surveyid) { $s = "$r->title <small>($r->surveyid)</small>"; } else { $s = "-"; }
  if ($r->uemail) { $u = "$r->ufullname <small>($r->userid)</small>"; } else { $u = "-"; }
  if ($p) { $ex1 = "&p=".$p; } else { $ex1 = ""; }
  if ($c) { $ex2 = "&c=".$c; } else { $ex2 = ""; }
  if ($b) { $ex3 = "&b=".$b; } else { $ex3 = ""; }
  if ($u) { $ex4 = "&u=".$u; } else { $ex4 = ""; }
  $delete = ADMIN."?w=activity&d=".base64_encode($r->id).$ex1.$ex2.$ex3.$ex4;
  $r->data = iconize($r->data);
  if (empty($c)) {
    if ($r->critical == 4) { $color = "#F0F8FF"; }
    else if ($r->critical == 5) { $color = "#BDEDFF"; }
    else { $color = ""; }
  }
  if ($color) { $td = "<td style=\"background:$color\"><small>"; } else { $td = "<td><small>"; }
  if ($_SESSION['level'] == "9") { $del = "<a title=\"Delete this log\" data-href=\"$delete\" class=\"btn btn-danger btn-tiny pull-right\" data-toggle=\"modal\" data-target=\"#confirm-delete\"><i class=\"pe-trash-o\"></i></a>"; }
  $menu2 .= "        <tr>\n";
  $menu2 .= "          $td$t</small></td>\n";
  $menu2 .= "          $td$r->data</small></td>\n";
  $menu2 .= "          $td$s</small></td>\n";
  $menu2 .= "          $td$u</small></td>\n";
  if ($_SESSION['level'] == "9") { $menu2 .= "          $td$del</small></td>\n"; }
  $menu2 .= "        </tr>\n";
}
$menu2 .= "      </tbody>\n";
$menu2 .= "    </table>\n";
$menu2 .= "  </div>\n";
$menu2 .= "</div>\n";

$menu3 = "<div class=\"modal fade\" id=\"confirm-delete\" tabindex=\"-1\" role=\"dialog\">\n";
$menu3 .= "  <div class=\"modal-dialog\">\n";
$menu3 .= "    <div class=\"modal-content\">\n";
$menu3 .= "      <div class=\"modal-body\">\n";
$menu3 .= "        <h4>Confirm delete?</h4>\n";
$menu3 .= "        <p>Are you sure that you want to delete this record permanently?</p>\n";
$menu3 .= "        <p><button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button> <a class=\"btn btn-danger btn-ok\">Delete <i class=\"pe-trash-o\"></i></a></p>\n";
$menu3 .= "      </div>\n";
$menu3 .= "    </div>\n";
$menu3 .= "  </div>\n";
$menu3 .= "</div>\n";

$menu3 .= "<p align=\"center\">\n$pagination</p>\n<br>\n";

$menu3 .= "<script type=\"text/javascript\">\n";
$menu3 .= "  $('#confirm-delete').on('show.bs.modal', function(e) { $(this).find('.btn-ok').attr('href', $(e.relatedTarget).data('href')); });\n";
$menu3 .= "  $(document).on('keypress', function (e) { if ($('#confirm-delete').is(':visible')) { if (e.which == 13) { window.location= $(\"#confirm-delete .btn-ok\", this).attr(\"href\"); } } });\n";
// $menu3 .= "  var surveyid = $companyid;\n";
// $menu3 .= "  var options = {\n";
// $menu3 .= "    url: \"http://www.siamsquare.org.uk/respondent/\" + surveyid,\n";
// $menu3 .= "    getValue: \"email\",\n";
// $menu3 .= "    list: {\n";
// $menu3 .= "      maxNumberOfElements: 10,\n";
// $menu3 .= "      match: { enabled: true },\n";
// $menu3 .= "      showAnimation: { type: \"fade\", time: 400, callback: function() {} },\n";
// $menu3 .= "      hideAnimation: { type: \"slide\",  time: 400, callback: function() {} }\n";
// $menu3 .= "    },\n";
// $menu3 .= "    theme: \"bootstrap\",\n";
// $menu3 .= "    placeholder: \"Search activity log\"\n";
// $menu3 .= "  };\n";
// $menu3 .= "  $(\"#searchbox\").easyAutocomplete(options);\n";
$menu3 .= "</script>\n";

echo $menu1;
echo $menu2;
echo $menu3;

?>

<!-- <script type="text/javascript">
  $('#confirm-delete').on('show.bs.modal', function(e) { $(this).find('.btn-ok').attr('href', $(e.relatedTarget).data('href')); });
  $(document).on('keypress', function (e) { if ($('#confirm-delete').is(':visible')) { if (e.which == 13) { window.location= $("#confirm-delete .btn-ok", this).attr("href"); } } });
</script> -->


<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
