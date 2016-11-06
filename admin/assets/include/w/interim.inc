<?php

require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/config.php';
$db = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_DATABASE);
if (!$db->set_charset("utf8")) { $errors[] = $db->error; }

// Get projcet title
$sql1 = "SELECT title FROM j_projects WHERE id = '".$_GET['s']."';";
$result1 = $db->query($sql1);
$a = $result1->fetch_assoc();
$project = $a['title'];

// Get counts
$sql2 = "SELECT SUM(IF(status = '1', 1, 0)) AS S1, SUM(IF(status = '0', 1, 0)) AS S2, SUM(IF(status = '-1', 1, 0)) AS S3 FROM j_results WHERE surveyid = '".$_GET['s']."' ";
$result2 = $db->query($sql2);
$b = $result2->fetch_assoc();
$responses_good = $b['S1'];
$responses_test = $b['S2'];
$responses_deleted = $b['S3'];
$responses_total = $responses_good + $responses_test + $responses_deleted;
$percentage_good = ($responses_good * 100) / $responses_total;

// Get result stats (first)
$sql3 = "SELECT id, email, ip, submitted FROM j_results WHERE surveyid = '".$_GET['s']."' AND status = 1 ORDER BY submitted LIMIT 1";
$result3 = $db->query($sql3);
$c = $result3->fetch_assoc();
$first_id = $c['id'];
$first_email = $c['email'];
$first_ip = $c['ip'];
$first_submitted = $c['submitted'];

// Get result stats (last)
$sql4 = "SELECT id, email, ip, submitted FROM j_results WHERE surveyid = '".$_GET['s']."' AND status = 1 ORDER BY submitted DESC LIMIT 1";
$result4 = $db->query($sql4);
$d = $result4->fetch_assoc();
$last_id = $d['id'];
$last_email = $d['email'];
$last_ip = $d['ip'];
$last_submitted = $d['submitted'];

$title = "Interim result: Project $project";
pageHeader($title);
echo "<h2>$title</h2>";
echo "<p>Please make sure you use the interim result with cautions. It is very important to understand that interim result is not necesary a true reflection of the final result (or even showing the same direction). While interim shows one thing, the final result may end up with another.</p>";
echo "<p>Therefore, it is imperative that any business decisions must not be made based on this interim result. We strongly suggest that results to be used for business decision should come from the final result e.g. when the data collection period has ended, and the data has been checked to be clean and good to use.</p>";
echo "<p>We take no responsibility on any damages happened from using interim result, you must use it at your own risk.</p>";

?>

<hr>

<div class="stats">
  <h4>Project statistics</h4>
  <dl class="dl-horizontal">
    <dt>Total response:</dt>
    <dd><?php echo $responses_total; ?></dd>
    <dt>Valid response:</dt>
    <dd><?php echo $responses_good; ?> (<?php echo $percentage_good; ?>%)</dd>
    <dt>First response:</dt>
    <dd><?php echo ago($first_submitted); ?> by <?php echo $first_email; ?> (<?php echo $first_ip; ?>)</dd>
    <dt>Last response:</dt>
    <dd><?php echo ago($last_submitted); ?> by <?php echo $last_email; ?> (<?php echo $last_ip; ?>)</dd>
  </dl>
</div>

<hr>

<div class="csv">
  <h4>Showing data ordered by the most recent (total of <span class="rows count"></span> records)</h4>
  <p>In order to view all responses, you would need to either <a download="result.csv" href="" class="download"><i class="pe-download pe-fw"></i> download the data file</a> or <a href="" class="raw"><i class="pe-desktop pe-fw"></i> view the data file online</a>.</p>
  <textarea class="editing form-control" readonly></textarea>
  <div class="table rendered"><table class="table"></table></div>
  <span class="tablenotice">You may need to scroll right if there are many columns <i class="pe-hand-o-right"></i></span>
</div>



<script type="text/javascript">

  var userid = <?php echo $_SESSION['userid']; ?>;
  var surveyid = <?php echo $_GET['s']; ?>;
  var api = 'http://www.siamsquare.org.uk';

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
  function deleteSurveyResult(id) {
    // $.ajax({
    //   url: api + '/result/' + id + '/delete',
    //   dataType: 'json',
    //   type: 'get',
    //   cache: false,
    //   contentType: 'application/json; charset=utf-8',
    //   success: function (data) { window.location.reload(); },
    //   error: function (error) { alert(error); }
    // });
  }

  function showCSV(rendered) {
    if (rendered) { if ($(".csv table").html()) { $(".csv .rendered").show(); $(".csv .editing").hide(); } }
    else { $(".csv .rendered").hide(); $(".csv .editing").show().focus(); }
  }

  function renderCSV(objects) {
    var rows = $.csv.fromObjects(objects, {justArrays: true});
    if (rows.length < 1) return;

    var table = $(".csv table")[0];
    $(table).html("").attr("id", "interimtable");

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
      tr = document.createElement("tr");
      var a1 = document.createElement('a'); a1.innerHTML = ' <i class="pe-chevron-down"></i>'; a1.setAttribute('id', 'rowshow' + i); a1.setAttribute('href', '#'); a1.setAttribute('onclick', 'return showRow(event, ' + i + ')');
      var a2 = document.createElement('a'); a2.innerHTML = ' <i class="pe-chevron-up"></i>'; a2.setAttribute('id', 'rowhide' + i); a2.setAttribute('href', '#'); a2.setAttribute('onclick', 'return hideRow(event, ' + i + ')'); a2.setAttribute('style', 'display:none');
      var buttonnode = document.createElement('button'); buttonnode.setAttribute('class', 'btn btn-danger btn-tiny disabled'); buttonnode.innerHTML = 'Delete <i class="pe-trash"></i>'; buttonnode.onclick = deleteSurveyResult(surveyid);
      var td2 = document.createElement("td"); td2.setAttribute('colspan', '2'); td2.setAttribute('style', 'border-top-style:none');
      var tr2 = document.createElement("tr"); tr2.setAttribute('id', 'row' + i); tr2.setAttribute('style', 'display:none');
      for (field in rows[i]) {
        var td = document.createElement("td");
        $(td).html(rows[i][field]);
        tr.appendChild(td);
        $(tr).find('td:first-child').append(a1).append(a2);
      }
      tbody.appendChild(tr);
      td2.appendChild(buttonnode);
      tr2.appendChild(td2);
      tbody.appendChild(tr2);
      $(tbody).find('td:first-child').css("background", "#eee"); $(tbody).find('td:nth-child(2)').css("background", "#eee");
    }
    table.appendChild(thead);
    table.appendChild(tbody);
  }

  function getsurveyrawdata(surveyid) {
    var result = "";
    $.ajax({
      url: api + '/result/raw/' + surveyid,
      dataType: 'json',
      type: 'get',
      cache: false,
      async: false,
      success: function(data) { result = data; }
    });
    return result;
  }

  jQuery(document).ready(function () {
    var excerptRows = 50;
    var inArray = getsurveyrawdata(surveyid);
    var outArray = [];
    for (var row in inArray) { outArray[outArray.length] = parse_object(inArray[row]); }
    $("span.rows.count").text("" + outArray.length);
    var csv = $.csv.fromObjects(outArray);
    renderCSV(outArray.slice(0, excerptRows));
    showCSV(true);
    $(".csv textarea").val(csv);
    var uri = "data:text/csv;charset=utf-8," + encodeURIComponent(csv);
    $(".csv a.download").attr("href", uri);
    $(".csv textarea").blur(function() {showCSV(true);})
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
    $(".csv textarea").click(function() {$(this).focus().select();}); // highlight CSV on click
  });

</script>

<br>

<a href="/admin/?w=surveys" class="btn btn-danger btn-sm pull-right" style="margin-top:50px; margin-bottom: 20px"><i class="pe-chevron-circle-left pe-fw"></i> Back to the main page</a>

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
