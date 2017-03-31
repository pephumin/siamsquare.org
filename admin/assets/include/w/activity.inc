<?php

$base = "/admin/?w=activity";
// if ($p == '') { $p = "1"; }
if ($_GET['c']) { $c = $_GET['c']; $ex1 = "&c=".$_GET['c']; } else { $ex1 = ""; }
if ($_GET['p']) { $p = $_GET['p']; $ex2 = "&p=".$_GET['p']; } else { $ex2 = ""; }
if ($_GET['size']) { $size = $_GET['size']; $ex3 = "&size=".$_GET['size']; } else { $ex3 = ""; }
$me = $base.$ex1.$ex2.$ex3;

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
$clist = "      <option value=\"0\">All companies</option>\n";
$q1 = $db->prepare("SELECT * FROM j_companies ORDER BY id DESC");
$q1->execute();
while ($row = $q1->fetchObject()) {
  $companyid = $row->id;
  $companyname = $row->company;
  $clist .= "      <option value=\"$companyid\">$companyname</option>\n";
}

if (empty($c)) { $critical = ""; }
else if ($c == 1) { $critical = "critical = '1'"; }
else if ($c == 2) { $critical = "critical = '2'"; }
else if ($c == 3) { $critical = "critical = '3'"; }
else if ($c == 4) { $critical = "critical = '4'"; }
else if ($c == 5) { $critical = "critical = '5'"; }

if ($_SESSION['level'] == "9") {
  if ($critical != "") { $c1A = "WHERE ".$critical; } else { $c1A = ""; }
  // $q1A = $db->prepare("SELECT * FROM j_users_logs ".$c1A." ORDER BY recorded DESC");
  $q1A = $db->prepare("SELECT L.*, P.title FROM j_users_logs L LEFT JOIN j_projects P ON P.id = L.surveyid ".$c1A." ORDER BY L.recorded DESC");
  $q1A->execute();
} elseif ($_SESSION['level'] == "6") {
  if ($critical) { $c1A = "AND ".$critical; }
  $q1 = $db->prepare("SELECT id FROM j_users WHERE companyid = :companyid");
  $q1->bindValue(':companyid', $_SESSION["companyid"], PDO::PARAM_INT);
  $q1->execute();
  while ($rr = $q1->fetchObject()) { $tt[] = $rr->id; }
  $q1A = $db->prepare("SELECT L.*, P.title FROM j_users_logs L LEFT JOIN j_projects P ON P.id = L.surveyid WHERE L.userid IN (".implode(',', $tt).") ".$c1A." ORDER BY recorded DESC");
  $q1A->bindValue(':userid', $_SESSION["userid"], PDO::PARAM_INT);
  $q1A->execute();
} else {
  if ($critical) { $c1A = "AND ".$critical; }
  $q1A = $db->prepare("SELECT L.*, P.title FROM j_users_logs L LEFT JOIN j_projects P ON P.id = L.surveyid WHERE L.userid = :userid ".$c1A." ORDER BY recorded DESC");
  $q1A->bindValue(':userid', $_SESSION["userid"], PDO::PARAM_INT);
  $q1A->execute();
}

$rows = $q1A->rowCount(); $rows_format = number_format($rows);

if ($size) {
  $limit = $size;
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

$menu1 = "<br>\n";
$menu1 .= "<div class=\"row\">\n";
// $menu1 .= "  <div class=\"col-sm-6 form-group has-feedback\">\n";
// $menu1 .= "    <form action=\"$base\" method=\"post\">\n";
// $menu1 .= "      <input type=\"text\" id=\"searchbox\" class=\"form-control\"><i class=\"pe-search form-control-feedback\" aria-hidden=\"true\"></i>\n";
// $menu1 .= "    </form>\n";
// $menu1 .= "  </div>\n";
if ($_SESSION['level'] == "9") {
  $menu1 .= "  <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n";
  $menu1 .= "    <form method=\"get\" class=\"form-inline\" action=\"$me\">\n";
  $menu1 .= "      <small>Select <i class=\"pe-building pe-fw\"></i> company:</small>\n";
  $menu1 .= "      <input type=\"hidden\" name=\"w\" value=\"activity\">\n";
  $menu1 .= "      <select class=\"form-control input-sm\" name=\"bycompany\" onchange=\"this.form.submit()\" disabled>\n";
  $menu1 .= $clist;
  $menu1 .= "      </select>\n";
  $menu1 .= "    </form>\n";
  $menu1 .= "  </div>\n";
  $menu1 .= "  <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\" style=\"text-align:right\">\n";
  $menu1 .= "    <form method=\"get\" class=\"form-inline\" action=\"$me\">\n";
  $menu1 .= "      <small>Select <i class=\"pe-exclamation-circle pe-fw\"></i> critical level:</small>\n";
  $menu1 .= "      <input type=\"hidden\" name=\"w\" value=\"activity\">\n";
  // if ($p) { $menu1 .= "      <input type=\"hidden\" name=\"p\" value=\"$p\">\n"; }
  // if ($size) { $menu1 .= "      <input type=\"hidden\" name=\"size\" value=\"$size\">\n"; }
  $menu1 .= "      <select class=\"form-control input-sm\" name=\"c\" onchange=\"this.form.submit()\">\n";
  $menu1 .= "        <option value=\"\">All levels</option>\n";
  if ($c == 1) { $menu1 .= "        <option value=\"1\" selected>Level 1</option>\n"; } else { $menu1 .= "        <option value=\"1\">Level 1</option>\n"; }
  if ($c == 2) { $menu1 .= "        <option value=\"2\" selected>Level 2</option>\n"; } else { $menu1 .= "        <option value=\"2\">Level 2</option>\n"; }
  if ($c == 3) { $menu1 .= "        <option value=\"3\" selected>Level 3</option>\n"; } else { $menu1 .= "        <option value=\"3\">Level 3</option>\n"; }
  if ($c == 4) { $menu1 .= "        <option value=\"4\" selected>Level 4</option>\n"; } else { $menu1 .= "        <option value=\"4\">Level 4</option>\n"; }
  if ($c == 5) { $menu1 .= "        <option value=\"5\" selected>Level 5</option>\n"; } else { $menu1 .= "        <option value=\"5\">Level 5</option>\n"; }
  $menu1 .= "      </select>\n";
  $menu1 .= "    </form>\n";
  $menu1 .= "  </div>\n";
} else {
  $menu1 .= "  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\" style=\"text-align:right\">\n";
  $menu1 .= "    <form method=\"get\" class=\"form-inline\" action=\"$me\">\n";
  $menu1 .= "      <small>Select <i class=\"pe-exclamation-circle pe-fw\"></i> critical level:</small>\n";
  $menu1 .= "      <input type=\"hidden\" name=\"w\" value=\"activity\">\n";
  // if ($p) { $menu1 .= "      <input type=\"hidden\" name=\"p\" value=\"$p\">\n"; }
  // if ($size) { $menu1 .= "      <input type=\"hidden\" name=\"size\" value=\"$size\">\n"; }
  $menu1 .= "      <select class=\"form-control input-sm\" name=\"c\" onchange=\"this.form.submit()\">\n";
  $menu1 .= "        <option>All levels</option>\n";
  if ($c == 1) { $menu1 .= "        <option value=\"1\" selected>Level 1</option>\n"; } else { $menu1 .= "        <option value=\"1\">Level 1</option>\n"; }
  if ($c == 2) { $menu1 .= "        <option value=\"2\" selected>Level 2</option>\n"; } else { $menu1 .= "        <option value=\"2\">Level 2</option>\n"; }
  if ($c == 3) { $menu1 .= "        <option value=\"3\" selected>Level 3</option>\n"; } else { $menu1 .= "        <option value=\"3\">Level 3</option>\n"; }
  if ($c == 4) { $menu1 .= "        <option value=\"4\" selected>Level 4</option>\n"; } else { $menu1 .= "        <option value=\"4\">Level 4</option>\n"; }
  if ($c == 5) { $menu1 .= "        <option value=\"5\" selected>Level 5</option>\n"; } else { $menu1 .= "        <option value=\"5\">Level 5</option>\n"; }
  $menu1 .= "      </select>\n";
  $menu1 .= "    </form>\n";
  $menu1 .= "  </div>\n";
}
$menu1 .= "</div>\n";
$menu1 .= "<br>\n";
$menu1 .= "<div class=\"row\">\n";
$menu1 .= "  <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n";
$menu1 .= "    <span class=\"\">Found <strong>$rows_format records</strong> in our database<br><small>(showing results $from_record_format to $to_record_format)</small></span>\n";
$menu1 .= "  </div>\n";
$menu1 .= "  <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\" style=\"text-align:right\">\n";
$menu1 .= "    <form method=\"get\" class=\"form-inline\" action=\"$me\">\n";
$menu1 .= "      <small>Select <i class=\"pe-th pe-fw\"></i> display size:</small>\n";
$menu1 .= "      <input type=\"hidden\" name=\"w\" value=\"activity\">\n";
// if ($p) { $menu1 .= "      <input type=\"hidden\" name=\"p\" value=\"$p\">\n"; }
if ($c) { $menu1 .= "      <input type=\"hidden\" name=\"c\" value=\"$c\">\n"; }
$menu1 .= "      <select class=\"form-control input-sm\" name=\"size\" onchange=\"this.form.submit()\">\n";
if ($size == "") { $menu1 .= "        <option value=\"\" selected>Auto (default)</option>\n"; } else { $menu1 .= "        <option value=\"\">Auto (default)</option>\n"; }
if ($size == "50") { $menu1 .= "        <option value=\"50\" selected>50</option>\n"; } else { $menu1 .= "        <option value=\"50\">50</option>\n"; }
if ($size == "100") { $menu1 .= "        <option value=\"100\" selected>100</option>\n"; } else { $menu1 .= "        <option value=\"100\">100</option>\n"; }
if ($size == "300") { $menu1 .= "        <option value=\"300\" selected>300</option>\n"; } else { $menu1 .= "        <option value=\"300\">300</option>\n"; }
if ($size == "500") { $menu1 .= "        <option value=\"500\" selected>500</option>\n"; } else { $menu1 .= "        <option value=\"500\">500</option>\n"; }
if ($size == "1000") { $menu1 .= "        <option value=\"1000\" selected>1,000</option>\n"; } else { $menu1 .= "        <option value=\"1000\">1,000</option>\n"; }
$menu1 .= "      </select>\n";
$menu1 .= "    </form></div>\n";
$menu1 .= "  </div>\n";
$menu1 .= "</div>\n";

$menu2 = "<div class=\"row\">\n";
$menu2 .= "  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n";
$menu2 .= "    <br>\n";
$menu2 .= "    <table class=\"table table-condensed table-hover\" id=\"showme\">\n";
$menu2 .= "      <thead>\n";
$menu2 .= "        <tr class=\"bg-success\">\n";
if ($_SESSION['level'] == "9") {
  $menu2 .= "          <th width=\"15%\"><small><i class=\"pe-calendar pe-fw\"></i> Time</small></th>\n";
  $menu2 .= "          <th width=\"62%\"><small><i class=\"pe-map-o pe-fw\"></i> Activity</small></th>\n";
  $menu2 .= "          <th width=\"18%\"><small><i class=\"pe-cube pe-fw\"></i> Project</small></th>\n";
  $menu2 .= "          <th width=\"5%\"></th>\n";
} else {
  $menu2 .= "          <th width=\"15%\"><small><i class=\"pe-clock-o pe-fw\"></i> Time</small></th>\n";
  $menu2 .= "          <th width=\"65%\"><small><i class=\"pe-map-o pe-fw\"></i> Activity</small></th>\n";
  $menu2 .= "          <th width=\"20%\"><small><i class=\"pe-cube pe-fw\"></i> Project</small></th>\n";
}
$menu2 .= "        </tr>\n";
$menu2 .= "      </thead>\n";
$menu2 .= "      <tbody>\n";

if ($_SESSION['level'] == "9") {
  if ($critical != "") { $c1A = "WHERE ".$critical; } else { $c1A = ""; }
  $q1B = $db->prepare("SELECT L.*, P.title FROM j_users_logs L LEFT JOIN j_projects P ON P.id = L.surveyid ".$c1A." ORDER BY L.recorded DESC LIMIT $start, $limit");
  $q1B->execute();
} elseif ($_SESSION['level'] == "6") {
  if ($critical) { $c1B = "AND ".$critical; }
  $q1 = $db->prepare("SELECT id FROM j_users WHERE companyid = :companyid");
  $q1->bindValue(':companyid', $_SESSION["companyid"], PDO::PARAM_INT);
  $q1->execute();
  while ($rr = $q1->fetchObject()) { $tt[] = $rr->id; }
  $q1B = $db->prepare("SELECT L.*, P.title FROM j_users_logs L LEFT JOIN j_projects P ON P.id = L.surveyid WHERE L.userid IN (".implode(',', $tt).") ".$c1B." ORDER BY recorded DESC LIMIT $start, $limit");
  $q1B->bindValue(':userid', $_SESSION["userid"], PDO::PARAM_INT);
  $q1B->execute();
} else {
  if ($critical) { $c1B = "AND ".$critical; }
  $q1B = $db->prepare("SELECT L.*, P.title FROM j_users_logs L LEFT JOIN j_projects P ON P.id = L.surveyid WHERE L.userid = :userid ".$c1B." ORDER BY recorded DESC LIMIT $start, $limit");
  $q1B->bindValue(':userid', $_SESSION["userid"], PDO::PARAM_INT);
  $q1B->execute();
}

$pagination = "<nav class=\"pagination-centered\">\n";
$pagination .= "  <ul class=\"pagination\">\n";
if ($total > 1 && $p <= $total) {
  if (($p == 1) || (empty($p))) { $pagination .= "<li class=\"active\"><a class=\"btn btn-sm\" href=\"".$me."&p=1\">1</a></li>"; }
  else { $pagination .= "<li><a class=\"btn btn-sm\" href=\"".$me."&p=1\">1</a></li>"; }
  $i = max(2, $p - 2);
  if ($i > 2) { $pagination .= "<li><a class=\"btn btn-sm\" style=\"border:none\">...</a></li>"; }
  for (; $i < min($p + 3, $total); $i++) {
    if ($i == $p) { $pagination .= "<li class=\"active\"><a class=\"btn btn-sm\" href=\"".$me."&p=".$i."\">".$i."</a></li>"; }
    else { $pagination .= "<li><a class=\"btn btn-sm\" href=\"".$me."&p=".$i."\">".$i."</a></li>"; }
  }
  if ($i != $total) { $pagination .= "<li><a class=\"btn btn-sm\" style=\"border:none\">...</a></li>"; }
  if ($p == $total) { $pagination .= "<li class=\"active\"><a class=\"btn btn-sm\" href=\"".$me."&p=".$total."\">".$total."</a></li>"; }
  else { $pagination .= "<li><a class=\"btn btn-sm\" href=\"".$me."&p=".$total."\">".$total."</a></li>"; }
}
$pagination .= "  </ul>\n";
$pagination .= "</nav>\n\n";


while ($r = $q1B->fetchObject()) {
  $t = ago($r->recorded);
  if ($r->surveyid) { $s = "$r->title ($r->surveyid)"; } else { $s = "-"; }
  if ($p) { $ex1 = "&p=".$p; } else { $ex1 = ""; }
  if ($c) { $ex2 = "&c=".$c; } else { $ex2 = ""; }
  $delete = ADMIN."?w=activity&d=".base64_encode($r->id).$ex1.$ex2;
  $r->data = iconize($r->data);
  if (empty($c)) {
    if ($r->critical == 4) { $color = "#F0F8FF"; }
    else if ($r->critical == 5) { $color = "#BDEDFF"; }
    else { $color = ""; }
  }
  if ($color) { $td = "<td style=\"background:$color\"><small>"; } else { $td = "<td><small>"; }
  if ($_SESSION['level'] == "9") { $del = " <a title=\"Delete this log\" data-href=\"$delete\" class=\"btn btn-danger btn-tiny pull-right\" data-toggle=\"modal\" data-target=\"#confirm-delete\"><i class=\"pe-trash-o\"></i></a>\n"; }
  $menu2 .= "        <tr>\n";
  $menu2 .= "          $td$t</small></td>\n";
  $menu2 .= "          $td$r->data</small></td>\n";
  $menu2 .= "          $td$s</small></td>\n";
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

$menu3 .= "<p align=\"center\">$pagination</p><br>\n";


echo $menu1;
echo $menu2;
echo $menu3;

?>

<script type="text/javascript">

  $('#confirm-delete').on('show.bs.modal', function(e) { $(this).find('.btn-ok').attr('href', $(e.relatedTarget).data('href')); });
  $(document).on('keypress', function (e) { if ($('#confirm-delete').is(':visible')) { if (e.which == 13) { window.location= $("#confirm-delete .btn-ok", this).attr("href"); } } });

  // $(document).ready(function() {
  //   $('a[data-toggle="tab"]').on( 'shown.bs.tab', function (e) {
  //     $.fn.dataTable.tables({ visible: true, api: true }).columns.adjust();
  //   });
  //   $('#showme').DataTable({
  //     "pagingType": "numbers",
  //     // "paging":   false,
  //     // "ordering": false,
  //     // "info":     false,
  //     "order": [[ 0, "desc" ]],
  //     "lengthMenu": [[25, 50, 100, 200, 500, -1], [25, 50, 100, 200, 500, "ALL"]],
  //     "stateSave": true,
  //   });
  //   var table = $('#showme').DataTable();
  //   $('#showme tbody').on( 'mouseenter', 'td', function () {
  //     var colIdx = table.cell(this).index().column;
  //     $( table.cells().nodes() ).removeClass( 'highlight' );
  //     $( table.column( colIdx ).nodes() ).addClass( 'highlight' );
  //   });
  //   $('a.toggle-vis').on( 'click', function (e) {
  //     e.preventDefault();
  //     var column = table.column( $(this).attr('data-column') );
  //     column.visible( ! column.visible() );
  //   });
  // });

  // var options = {
  //   url: "http://www.siamsquare.org.uk/respondent/" + surveyid,
  //   getValue: "email",
  //   list: {
  //     maxNumberOfElements: 10,
  //     match: { enabled: true },
  //     showAnimation: { type: "fade", time: 400, callback: function() {} },
  //     hideAnimation: { type: "slide",  time: 400, callback: function() {} }
  //   },
  //   theme: "bootstrap",
  //   placeholder: "Search for an email in our database"
  // };
  // $("#searchbox").easyAutocomplete(options);

</script>


<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
