<?php

$c_target = 300;

$today['year'] = date("Y"); $today['month'] = date("m"); $today['day'] = date("d");
if ($today['month'] == "01") { $today['month'] = "12"; $today['year'] = $today['year']-1; } else { $today['month'] = $today['month']-1; }
$timelinedata = "[ \n"; $colordata = "[ ";

// Get projcet info
$q1 = $db->prepare("SELECT * FROM j_projects WHERE id = :surveyid");
$q1->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
$q1->execute();
while ($row = $q1->fetchObject()) {
  $project = $row->title;
  if ($row->userid == $_SESSION['userid']) { $owner = 1; } else { $owner = 0; }
  if ($row->created) { $L0 = date_parse_from_format("Y-m-d H:i:s", $row->created); if ($L0['month'] == "01") { $L0['month'] = "12"; $L0['year'] = $L0['year']-1; } else { $L0['month'] = $L0['month']-1; } $created = ago($row->created); }
  if ($row->L1) { $L1 = date_parse_from_format("Y-m-d H:i:s", $row->L1); if ($L1['month'] == "01") { $L1['month'] = "12"; $L1['year'] = $L1['year']-1; } else { $L1['month'] = $L1['month']-1; } $LL1 = ago($row->L1); } else { $LL1 = "-"; }
  if ($row->L2) { $L2 = date_parse_from_format("Y-m-d H:i:s", $row->L2); if ($L2['month'] == "01") { $L2['month'] = "12"; $L2['year'] = $L2['year']-1; } else { $L2['month'] = $L2['month']-1; } $LL2 = ago($row->L2); } else { $LL2 = "-"; }
  if ($row->L3) { $L3 = date_parse_from_format("Y-m-d H:i:s", $row->L3); if ($L3['month'] == "01") { $L3['month'] = "12"; $L3['year'] = $L3['year']-1; } else { $L3['month'] = $L3['month']-1; } $LL3 = ago($row->L3); } else { $LL3 = "-"; }
  if ($row->status == 1) {
    $timelinedata .= "[ '".$project."', 'Set-up', new Date(".$L0['year'].", ".$L0['month'].", ".$L0['day']."), new Date(".$today['year'].", ".$today['month'].", ".$today['day'].") ], \n"; $colordata .= "'#B3FFB3', ";
  } else if ($row->status == 2) {
    $timelinedata .= "[ '".$project."', 'Set-up', new Date(".$L0['year'].", ".$L0['month'].", ".$L0['day']."), new Date(".$L1['year'].", ".$L1['month'].", ".$L1['day'].") ], \n"; $colordata .= "'#B3FFB3', ";
    $timelinedata .= "[ '".$project."', 'Data-collection', new Date(".$L1['year'].", ".$L1['month'].", ".$L1['day']."), new Date(".$today['year'].", ".$today['month'].", ".$today['day'].") ], \n"; $colordata .= "'#00E600', ";
  } else if ($row->status == 3) {
    $timelinedata .= "[ '".$project."', 'Set-up', new Date(".$L0['year'].", ".$L0['month'].", ".$L0['day']."), new Date(".$L1['year'].", ".$L1['month'].", ".$L1['day'].") ], \n"; $colordata .= "'#B3FFB3', ";
    $timelinedata .= "[ '".$project."', 'Data-collection', new Date(".$L1['year'].", ".$L1['month'].", ".$L1['day']."), new Date(".$L2['year'].", ".$L2['month'].", ".$L2['day'].") ], \n"; $colordata .= "'#00E600', ";
    $timelinedata .= "[ '".$project."', 'Completed', new Date(".$L2['year'].", ".$L2['month'].", ".$L2['day']."), new Date(".$today['year'].", ".$today['month'].", ".$today['day'].") ], \n"; $colordata .= "'#009900', ";
  } else if ($row->status == 4) {
    $timelinedata .= "[ '".$project."', 'Set-up', new Date(".$L0['year'].", ".$L0['month'].", ".$L0['day']."), new Date(".$L1['year'].", ".$L1['month'].", ".$L1['day'].") ], \n"; $colordata .= "'#B3FFB3', ";
    $timelinedata .= "[ '".$project."', 'Data-collection', new Date(".$L1['year'].", ".$L1['month'].", ".$L1['day']."), new Date(".$L2['year'].", ".$L2['month'].", ".$L2['day'].") ], \n"; $colordata .= "'#00E600', ";
    $timelinedata .= "[ '".$project."', 'Completed', new Date(".$L2['year'].", ".$L2['month'].", ".$L2['day']."), new Date(".$L3['year'].", ".$L3['month'].", ".$L3['day'].") ], \n"; $colordata .= "'#009900', ";
    $timelinedata .= "[ '".$project."', 'Archived', new Date(".$L3['year'].", ".$L3['month'].", ".$L3['day']."), new Date(".$today['year'].", ".$today['month'].", ".$today['day'].") ], \n"; $colordata .= "'#AAAAAA', ";
  }
}
$timelinedata .= " ]";

// Get counts
$q2A = $db->prepare("SELECT COUNT(created) AS created, COUNT(invited1) AS invited1, COUNT(invited2) AS invited2, COUNT(viewed) AS viewed, COUNT(completed) AS completed FROM j_respondents WHERE surveyid = :surveyid ");
$q2A->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
$q2A->execute();
while ($row = $q2A->fetchObject()) {
  $row->invited1 = 520;
  $row->invited2 = 450;
  $c_created = $row->created; $created = number_format($c_created);
  $c_invited1 = $row->invited1; $invited1 = number_format($c_invited1);
  $c_invited2 = $row->invited2; $invited2 = number_format($c_invited2);
  $c_invited_all = $c_invited1 + $c_invited2; $invited_all = number_format($c_invited_all);
  if ($c_invited1) {
    $p_invited1 = percent($c_invited1 / $c_created);
    $p_invited1C = percent($c_invited1 / $c_invited_all);
  }
  else {
    $c_invited1 = 0; $p_invited1 = 0;
  }
  if ($c_invited2) {
    $p_invited2A = percent($c_invited2 / $c_created);
    $p_invited2B = percent($c_invited2 / $c_invited1);
    $p_invited2C = percent($c_invited2 / $c_invited_all);
  }
  else {
    $c_invited2 = 0; $p_invited2A = 0; $p_invited2B = 0;
  }
  if ($c_invited_all) { $p_invited_all = percent($c_invited_all / $c_created); } else { $c_invited_all = 0; $p_invited_all = 0; }
  $c_viewed = $row->viewed;
  $c_completed = $row->completed;
}
$q2B = $db->prepare("SELECT SUM(IF(status = :S1, 1, 0)) AS S1, SUM(IF(status = :S2, 1, 0)) AS S2, SUM(IF(status = :S3, 1, 0)) AS S3 FROM j_results WHERE surveyid = :surveyid ");
$q2B->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
$q2B->bindValue(':S1', '1', PDO::PARAM_INT);
$q2B->bindValue(':S2', '0', PDO::PARAM_INT);
$q2B->bindValue(':S3', '-1', PDO::PARAM_INT);
$q2B->execute();
while ($row = $q2B->fetchObject()) {
  $c_responses_good = $row->S1;
  $c_responses_tested = $row->S2;
  $c_responses_deleted = $row->S3;
  $c_responses_total = $c_responses_good + $c_responses_tested + $c_responses_deleted;
}
$p_responses_total = percent($c_responses_total / $c_target);
$p_targetA = percent($c_target / $c_created);
$p_targetB = percent($c_target / $c_invited_all);

$stat = "<table class=\"table table-hover small\">\n";
$stat .= "  <thead>\n";
$stat .= "    <tr class=\"bg-primary\">\n";
$stat .= "      <th width=\"25%\"><i class=\"pe-dashboard pe-fw\"></i> Details</th>\n";
$stat .= "      <th width=\"15%\" style=\"text-align:center\"><i class=\"pe-braille pe-fw\"></i> Count</th>\n";
$stat .= "      <th width=\"60%\"><i class=\"pe-percent pe-fw\"></i> Percentage</th>\n";
$stat .= "    </tr>\n";
$stat .= "  </thead>\n";
$stat .= "  <tbody>\n";
$stat .= "    <tr>\n";
$stat .= "      <td>Universe</td>\n";
$stat .= "      <td align=\"center\">$c_created</td>\n";
$stat .= "      <td>Total target (Public) or Total name list (Private)</td>\n";
$stat .= "    </tr>\n";
$stat .= "    <tr class=\"bg-warning\">\n";
$stat .= "      <td><small>First invitation</small></td>\n";
$stat .= "      <td align=\"center\"><small>$invited1</small></td>\n";
if ($p_invited1) { $stat .= "      <td><small>$p_invited1 of Universe</small></td>\n"; } else { $stat .= "      <td></td>\n"; }
$stat .= "    </tr>\n";
$stat .= "    <tr class=\"bg-warning\">\n";
$stat .= "      <td><small>Reminder</small></td>\n";
$stat .= "      <td align=\"center\"><small>$invited2</small></td>\n";
if ($p_invited2A) { $stat .= "      <td><small>$p_invited2A of Universe ($p_invited2B of first invites)</small></td>\n"; } else { $stat .= "      <td></td>\n"; }
$stat .= "    </tr>\n";
$stat .= "    <tr class=\"bg-warning\">\n";
$stat .= "      <td>Total invitation</td>\n";
$stat .= "      <td align=\"center\">$invited_all</td>\n";
if ($p_invited_all) { $stat .= "      <td>$p_invited_all of Universe ($p_invited1C first invites vs. $p_invited2C reminders)</td>\n"; } else { $stat .= "      <td></td>\n"; }
$stat .= "    </tr>\n";
$stat .= "    <tr>\n";
$stat .= "      <td><strong>Target sample size</strong></td>\n";
$stat .= "      <td align=\"center\"><strong>$c_target</strong></td>\n";
if ($c_target) { $stat .= "      <td><strong>$p_targetB of all invites</strong> ($p_targetA of Universe)</td>\n"; } else { $stat .= "      <td></td>\n"; }
$stat .= "    </tr>\n";
$stat .= "    <tr>\n";
$stat .= "      <td>Participation to date</td>\n";
$stat .= "      <td align=\"center\">$c_responses_total</td>\n";
$stat .= "      <td>$p_responses_total (of all invites)</td>\n";
$stat .= "    </tr>\n";

if ($c_responses_good > 0) {
  $p_responses_good = percent($c_responses_good / $c_responses_total);
  $sql3 = "SELECT * FROM j_results WHERE surveyid = :surveyid AND status = 1 ORDER BY submitted DESC";
  $q = $db->prepare($sql3);
  $q->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
  $q->execute(); // print_r($q->rowCount());
  $last = 0; $first = ($q->rowCount()-1);
  while ($row = $q->fetchAll(PDO::FETCH_ASSOC)) {
    $ee = $row;
    for ($i=0;$i<count($ee);$i++) {
      $removeKeys = array('rd', 'email', 'ip', 'surveyid', 'status');
      foreach($removeKeys as $key) {
        unset($ee[$i][$key]);
      }
      $ee[$i]['data'] = json_decode($ee[$i]['data'], true);
      // $ee[$i]['submitted'] = ago($ee[$i]['submitted']);
      $ee[$i]['submitted'] = $ee[$i]['submitted'];
    }
    $first_id = $row[$first]['id'];
    $first_email = $row[$first]['email'];
    $first_ip = $row[$first]['ip'];
    $t1 = date_parse_from_format("Y-m-d H:i:s", $row[$first]['submitted']);
    if ($t1['month'] == "01") { $t1['month'] = "12"; $t1['year'] = $t1['year']-1; } else { $t1['month'] = $t1['month']-1; }
    $first_submitted = ago($row[$first]['submitted']);
    $last_id = $row[$last]['id'];
    $last_email = $row[$last]['email'];
    $last_ip = $row[$last]['ip'];
    $t2 = date_parse_from_format("Y-m-d H:i:s", $row[$last]['submitted']);
    if ($t2['month'] == "01") { $t2['month'] = "12"; $t2['year'] = $t2['year']-1; } else { $t2['month'] = $t2['month']-1; }
    $last_submitted = ago($row[$last]['submitted']);
  }
  $datafortable = json_encode($ee);
  if ($c_responses_good == 1) {
    $stat .= "    <tr class=\"bg-success\">\n";
    $stat .= "      <td style=\"font-size:120%\">Valid completions</td>\n";
    $stat .= "      <td style=\"font-size:120%\" align=\"center\">$c_responses_good</td>\n";
    $stat .= "      <td>$p_responses_good (of all participations)</td>\n";
    $stat .= "    </tr>\n";
    $stat .= "    <tr>\n";
    $stat .= "      <td class=\"grey\">First response</td>\n";
    $stat .= "      <td class=\"grey\" colspan=\"2\">$first_submitted by $first_email <small>(from $first_ip)</small></td>\n";
    $stat .= "    </tr>\n";
    $stat .= "    <tr>\n";
    $stat .= "      <td class=\"grey\">Latest response</td>\n";
    $stat .= "      <td class=\"grey\" colspan=\"2\"><em>NONE</em></td>\n";
    $stat .= "    </tr>\n";
  } else {
    $stat .= "    <tr class=\"bg-success\">\n";
    $stat .= "      <td style=\"font-size:120%\">Valid completions</td>\n";
    $stat .= "      <td style=\"font-size:120%\" align=\"center\">$c_responses_good</td>\n";
    $stat .= "      <td>$p_responses_good (of all participations)</td>\n";
    $stat .= "    </tr>\n";
    $stat .= "    <tr>\n";
    $stat .= "      <td class=\"grey\">First response</td>\n";
    $stat .= "      <td class=\"grey\" colspan=\"2\">$first_submitted by <u>$first_email</u> <small>(from $first_ip)</small></td>\n";
    $stat .= "    </tr>\n";
    $stat .= "    <tr>\n";
    $stat .= "      <td class=\"grey\">Latest response</td>\n";
    $stat .= "      <td class=\"grey\" colspan=\"2\">$last_submitted by <u>$last_email</u> <small>(from $last_ip)</small></td>\n";
    $stat .= "    </tr>\n";
  }
} else {
  $stat .= "    <tr class=\"bg-success\">\n";
  $stat .= "      <td style=\"font-size:120%\">Valid completions</td>\n";
  $stat .= "      <td style=\"font-size:120%\" align=\"center\"><em>NONE</em></td>\n";
  $stat .= "      <td><em>NONE</em></td>\n";
  $stat .= "    </tr>\n";
  $stat .= "    <tr>\n";
  $stat .= "      <td class=\"grey\">First response</td>\n";
  $stat .= "      <td class=\"grey\" colspan=\"2\"><em>NONE</em></td>\n";
  $stat .= "    </tr>\n";
  $stat .= "    <tr>\n";
  $stat .= "      <td class=\"grey\">Latest response</td>\n";
  $stat .= "      <td class=\"grey\" colspan=\"2\"><em>NONE</em></td>\n";
  $stat .= "    </tr>\n";
}
$stat .= "  </tbody>\n";
$stat .= "</table>\n";

$achievement = ($c_responses_good / $c_target)*100;

$title = "Job monitoring";
pageHeader($title);
echo "<h2>$title</h2>";
echo "<p>This page gives a real time update on the project especially on the progress of data collection.</p>";
echo "<p>Ideally one would want to have the progress reaching to 100%, however it is also acceptable that a decision to stop before the full scale is shown especially when a business decision has to be made sooner rather than later.</p>";
echo "<p>The target set in this page is either an estimation of industry average or an indication has been agreed prior to starting the data collection.</p>";
echo "<hr>\n";
echo "<h3>Project $project</h3>\n";
// echo "<pre>$datafortable</pre>";
?>

<h4>Progress summary</h4>

<div class="row">
  <div align="center" class="col-sm-3">
    <h4>Universe</h4>
    <p><?php echo $created; ?></p>
    <p>Total target (Public) or Total name list (Private)</p>
  </div>
  <div align="center" class="col-sm-1"><i class="pe-arrow-right pe-2x"></i></div>
  <div align="center" class="col-sm-3">
    <h4>Invitation</h4>
    <p><?php echo $invited1; ?></p>
    <p><small><?php echo $p_invited1; ?> of Universe</small></p>
    <table class="table table-condensed table-hover small">
      <thead>
        <tr class="bg-primary">
          <th width="65%">Type</th>
          <th width="35%">Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Invitation</td>
          <td><?php echo $invited1; ?></td>
        </tr>
        <tr>
          <td>Reminder</td>
          <td><?php echo $invited2; ?></td>
        </tr>
      </tbody>
    </table>
  </div>
  <div align="center" class="col-sm-1"><i class="pe-arrow-right pe-2x"></i></div>
  <div align="center" class="col-sm-3">
    <h4>Participation</h4>
    <p><?php echo $c_responses_good; ?></p>
    <p><small><?php echo $p_invited_all; ?> of Universe<br><?php echo $p_invited_all; ?> of all invites</small></p>
  </div>
</div>

<br>

<div class="row">
  <div class="col-sm-9">
    <?php echo $stat; ?>
  </div>
  <div class="col-sm-3" align="center">
    <div id="gaugechart"></div>
  </div>
</div>

<h4>Actual timeline</h4>
<div id="timeline"></div>

<!-- <h4>For syndicate and tracking study</h4> -->
<!-- <div id="calendar"></div> -->
<hr>

<h3>Interim data</h3>
<p>The interim result must be used with cautions because it is not necesary a true reflection of the final result. The final result could possibly end up in a totally different direction (depending on the sample size and other factors).</p>
<p>Therefore, it is imperative that business decision must not be made based on the interim result. We strongly suggest using the final result for a better decision since the data would have been verified to ensure the highest integrity.</p>
<p>We hereby take no responsibility on any damages happened from the usage of interim result. You must use it at your own risk.</p>

<div id="showalert-delete"></div>

<div class="csv">
  <h4>Showing data ordered by the most recent response (total of <span class="rows count"></span> records)</h4>
  <p>In order to view all responses, you would need to either <a download="result.csv" href="" class="download"><i class="pe-download pe-fw"></i> download the data file</a> or <a href="" class="raw"><i class="pe-desktop pe-fw"></i> view the data file online</a>.</p>
  <textarea class="editing form-control" readonly></textarea>
  <div class="table rendered"><table class="table"></table></div>
  <span class="tablenotice">You may need to scroll right if there are many columns <i class="pe-hand-o-right"></i></span>
</div>


<script type="text/javascript">

  var userid = <?php echo $_SESSION['userid']; ?>;
  var surveyid = <?php echo $_GET['s']; ?>;
  var companyid = <?php echo $_SESSION['companyid']; ?>;
  var level = <?php echo $_SESSION['level']; ?>;
  var email = "<?php echo $_SESSION['email']; ?>";
  var ip = "<?php echo getip(); ?>";
  var api = 'http://www.siamsquare.org.uk';
  $.ajaxSetup({ headers: { 'X-Requested-With': 'aa5e1ab4-b0bf-4e82-8584-7cf4e9fdeaa8' } });
  $('#showalert-delete').html("<div class='alert alert-warning'><i class='pe-trash pe-fw'></i> A result record has been deleted</div>").hide();

  function showRow(e, rowIndex) {
    showhideRow(rowIndex, true);
    e.preventDefault();
    return false;
  }
  function hideRow(e, rowIndex) {
    showhideRow(rowIndex, false);
    e.preventDefault();
    return false;
  }
  function showhideRow(rowIndex, show) {
    document.getElementById("row" + rowIndex).style.display = show ? "" : "none";
    document.getElementById("rowhide" + rowIndex).style.display = show ? "" : "none";
    document.getElementById("rowshow" + rowIndex).style.display =  show ? "none" : "";
  }
  function getColumn(anArray, columnNumber) {
    return anArray.map(function(row) {
      return row[columnNumber];
    });
  }
  function deleteSurveyResult(id) {
    $.ajax({
      url: api + '/delete/result/' + surveyid + '/' + id,
      dataType: 'json',
      type: 'put',
      cache: false,
      contentType: 'application/json; charset=utf-8',
      success: function (data) {
        $('#showalert-delete').show();
        window.setTimeout(function () { $("#showalert-delete").slideUp(500, function () { $("#showalert-delete").hide(); }); }, 3000);
        $.ajax({
          url: api + '/log',
          dataType: 'json',
          type: 'post',
          contentType: 'application/json; charset=utf-8',
          data: '{ "userid": "' + userid + '", "ip": "' + ip + '", "data": "' + email + ' deleted an interim result for <?php echo $project; ?> (id=' + surveyid + ')", "critical": "4" }',
          success: function(data) { result = data; }
        });
      },
      error: function (error) { alert(error); }
    });
    window.setTimeout(function () { window.location.reload(); }, 3300);
  }
  function showCSV(rendered) {
    if (rendered) { if ($(".csv table").html()) { $(".csv .rendered").show(); $(".csv .editing").hide(); } }
    else { $(".csv .rendered").hide(); $(".csv .editing").show().focus(); }
  }
  function renderCSV(objects) {
    var rows = $.csv.fromObjects(objects, {justArrays: true}); //console.log(rows);
    if (rows.length < 1) return;

    var table = $(".csv table")[0];
    $(table).html("").attr("id", "interimtable").addClass("table table-condensed");

    var thead = document.createElement("thead");
    var tr = document.createElement("tr");
    var header = rows[0];
      for (field in header) {
        var th = document.createElement("th");
        $(th).html(header[field]).addClass("bg-primary");
        tr.appendChild(th);
      }
    thead.appendChild(tr);
    $(thead).find('th:first-child').css("background", "#555"); $(thead).find('th:nth-child(2)').css("background", "#555");

    var tbody = document.createElement("tbody");
    for (var i=1; i<rows.length; i++) {
      resultid = getColumn(rows,0)
      tr = document.createElement("tr");
      var a1 = document.createElement('a'); a1.innerHTML = ' <i class="pe-chevron-down"></i>'; a1.setAttribute('id', 'rowshow' + i); a1.setAttribute('href', ''); a1.setAttribute('onclick', 'return showRow(event, ' + i + ')');
      var a2 = document.createElement('a'); a2.innerHTML = ' <i class="pe-chevron-up"></i>'; a2.setAttribute('id', 'rowhide' + i); a2.setAttribute('href', ''); a2.setAttribute('onclick', 'return hideRow(event, ' + i + ')'); a2.setAttribute('style', 'display:none');
<?php if (($_SESSION["level"] >= "6") || ($owner == 1)) { ?>
      var bb1 = document.createElement('button'); bb1.innerHTML = 'Delete <i class="pe-trash"></i>'; bb1.setAttribute('class', 'btn btn-danger btn-tiny'); bb1.setAttribute('onclick', "deleteSurveyResult('" + resultid[i] + "')");
      var bb2 = document.createElement('button'); bb2.innerHTML = 'Undelete <i class="pe-undo"></i>'; bb2.setAttribute('class', 'btn btn-warning btn-tiny'); bb2.setAttribute('onclick', "undeleteSurveyResult('" + resultid[i] + "')");
<?php } ?>
      var td2 = document.createElement("td"); td2.setAttribute('colspan', '2'); td2.setAttribute('style', 'border-top-style:none');
      var tr2 = document.createElement("tr"); tr2.setAttribute('id', 'row' + i); tr2.setAttribute('style', 'display:none');
      for (field in rows[i]) {
        var td = document.createElement("td");
        $(td).html(rows[i][field]);
        // if (td.contains("upload")) { alert("String Found"); }
        tr.appendChild(td);
        $(tr).find('td:first-child').append(a1).append(a2);
      }
      tbody.appendChild(tr);
<?php if (($_SESSION["level"] >= "6") || ($owner == 1)) { ?>
      td2.appendChild(bb1);
      td2.append(" ");
      // td2.appendChild(bb2);
<?php } ?>
      tr2.appendChild(td2);
      tbody.appendChild(tr2);
      $(tbody).find('td:first-child').css("background", "#eee"); $(tbody).find('td:nth-child(2)').css("background", "#eee");
    }
    table.appendChild(thead);
    table.appendChild(tbody);
  }

  String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
  };

  $(document).ready(function () {
    var excerptRows = 50;
    var tt = <?php echo $datafortable; ?>;
    var ttt = <?php echo $datafortable; ?>;
    for(var k in tt) {
      var o = tt[k];
      moment.locale('en');
      var s1 = moment(o.submitted).fromNow();
      var s2 = moment(o.submitted).format("D MMM YYYY");
      newsubmitted = s1; //newsubmitted = s2 + ' (' + s1 + ')';
      o.submitted = newsubmitted;
    }
    var tt = JSON.stringify(tt); var ttt = JSON.stringify(ttt);
    tt = tt.replaceAll("data", ""); tt = tt.replaceAll("upload/", "");
    ttt = ttt.replaceAll("data", ""); ttt = ttt.replaceAll("upload/", "");
    // tt = tt.replaceAll("upload/", "http://www.siamsquare.org/members/assets/upload/");
    // ttt = ttt.replaceAll("upload/", "http://www.siamsquare.org/members/assets/upload/");
    var inArray1 = JSON.parse(tt); var inArray2 = JSON.parse(ttt);
    var outArray1 = []; var outArray2 = [];
    for (var row in inArray1) { outArray1[outArray1.length] = parse_object(inArray1[row]); }
    for (var row in inArray2) { outArray2[outArray2.length] = parse_object(inArray2[row]); }
    $("span.rows.count").text("" + outArray1.length);
    $("span.rows.count").text("" + outArray2.length);
    var csv1 = $.csv.fromObjects(outArray1); var csv2 = $.csv.fromObjects(outArray2);
    renderCSV(outArray1.slice(0, excerptRows), this.id);
    showCSV(true);
    $(".csv textarea").val(csv2);
    var uri = "data:text/csv;charset=utf-8," + encodeURIComponent(csv2);
    $(".csv a.download").attr("href", uri);
    $(".csv textarea").blur(function() { showCSV(true); })
    $(".csv .raw").click(function() {
      showCSV(false);
      $(".csv textarea").focus().select();
      return false;
    })
    $(".csv a.download").click(function() {
      var data = $(".csv textarea").val();
      if (data) { Events.download(data.length); return true; }
      else { return false; }
    });
    $(".csv textarea").click(function() {$(this).focus().select();});
  });

  google.charts.load('current', {'packages': ['calendar', 'timeline', 'gauge'] });
  // google.charts.setOnLoadCallback(drawCalendarChart);
  google.charts.setOnLoadCallback(drawTimelineChart);
  google.charts.setOnLoadCallback(drawGaugeChart);

  function drawCalendarChart() {
    var dataTable = new google.visualization.DataTable();
      dataTable.addColumn({ type: 'date', id: 'Date' });
      dataTable.addColumn({ type: 'number', id: 'Respondents who have completed the survey' });
      dataTable.addRows([
        [ new Date(2017, 1, 13), 1 ],
        [ new Date(2017, 1, 14), 24 ],
        [ new Date(2017, 1, 15), 25 ],
        [ new Date(2017, 1, 16), 28 ],
        [ new Date(2017, 1, 17), 38 ],
        [ new Date(2017, 1, 19), 73 ],
        [ new Date(2017, 1, 20), 87 ],
        [ new Date(2017, 1, 21), 113 ],
        [ new Date(2017, 1, 22), 129 ],
        [ new Date(2017, 1, 23), 133 ],
        [ new Date(2017, 1, 24), 145 ],
        [ new Date(2017, 1, 25), 166 ],
        [ new Date(2017, 1, 26), 172 ],
        [ new Date(2017, 1, 27), 185 ],
        [ new Date(2017, 1, 28), 196 ],
        [ new Date(2017, 1, 29), 204 ],
    ]);
    var chart = new google.visualization.Calendar(document.getElementById('calendar'));
    var options = {
      height: 350,
      calendar: {
        cellSize: 15,
        focusedCellColor: { stroke: '#d3362d', strokeOpacity: 1, strokeWidth: 1 },
        dayOfWeekLabel: { fontName: 'Times-Roman', fontSize: 12, color: '#1a8763', bold: true, italic: true },
        dayOfWeekRightSpace: 10,
        monthLabel: { fontName: 'roboto', fontSize: 11, bold: true, italic: true },
        monthOutlineColor: { stroke: '#981b48', strokeOpacity: 0.8, strokeWidth: 2 },
        underYearSpace: 20,
        yearLabel: { fontName: 'roboto', fontSize: 32, color: '#1A8763', bold: true, italic: true }
      }
    };
    chart.draw(dataTable, options);
  }

  function drawTimelineChart() {
    var container = document.getElementById('timeline');
    var chart = new google.visualization.Timeline(container);
    var dataTable = new google.visualization.DataTable();
    dataTable.addColumn({ type: 'string', id: 'Project' });
    dataTable.addColumn({ type: 'string', id: 'Status' });
    dataTable.addColumn({ type: 'date', id: 'Start' });
    dataTable.addColumn({ type: 'date', id: 'End' });
    dataTable.addRows(<?php echo $timelinedata; ?>);
    var options = {
      // height: <?php echo $height; ?>,
      colors: [ '#B3FFB3', '#00E600', '#009900', '#AAAAAA' ],
      backgroundColor: { fill: 'transparent' },
      avoidOverlappingGridLines: false,
      timeline: {
        groupByRowLabel: false,
        colorByRow: true,
        showRowLabels: true,
      }
    };
    chart.draw(dataTable, options);
  }

  function drawGaugeChart() {
    var container = document.getElementById('gaugechart');
    var chart = new google.visualization.Gauge(container);
    var dataTable = new google.visualization.DataTable();
    dataTable.addColumn('number', '% Strike rate');
    dataTable.addColumn('number', '% Achievement');
    dataTable.addRows(2);
    dataTable.setCell(0, 0, 120);
    dataTable.setCell(0, 1, <?php echo $achievement; ?>);
    var options = { width: 150, height: 400, redFrom: 0, redTo: 10, yellowFrom:10, yellowTo: 30, greenFrom:30, greenTo: 100, minorTicks: 5 };
    chart.draw(dataTable, options);
  }

</script>

<br>

<a href="/admin/?w=surveys" class="btn btn-danger btn-sm pull-right" style="margin-top:50px; margin-bottom: 20px"><i class="pe-chevron-circle-left pe-fw"></i> Back to the main page</a>

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
