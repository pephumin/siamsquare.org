<?php

require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/config.php';
$db = new PDO('mysql:host='. DB_HOST .';dbname='. DB_DATABASE . ';charset=utf8', DB_USER, DB_PASS);

// Get projcet title
$sql1 = "SELECT title FROM j_projects WHERE id = :surveyid";
$q = $db->prepare($sql1);
$q->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
$q->execute();
while ($row = $q->fetchObject()) { $project = $row->title; }

// Get counts
$sql2 = "SELECT SUM(IF(status = :S1, 1, 0)) AS S1, SUM(IF(status = :S2, 1, 0)) AS S2, SUM(IF(status = :S3, 1, 0)) AS S3 FROM j_results WHERE surveyid = :surveyid ";
$q = $db->prepare($sql2);
$q->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
$q->bindValue(':S1', '1', PDO::PARAM_INT);
$q->bindValue(':S2', '0', PDO::PARAM_INT);
$q->bindValue(':S3', '-1', PDO::PARAM_INT);
$q->execute();
while ($row = $q->fetchObject()) {
  $responses_good = $row->S1; //echo $responses_good;
  $responses_test = $row->S2; //echo $responses_test;
  $responses_deleted = $row->S3; //echo $responses_deleted;
}
$responses_total = $responses_good + $responses_test + $responses_deleted;
$percentage_good = ($responses_good * 100) / $responses_total;

// Get result stats (first)
$sql3 = "SELECT id, email, ip, submitted FROM j_results WHERE surveyid = :surveyid AND status = 1 ORDER BY submitted LIMIT 1";
$q = $db->prepare($sql3);
$q->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
$q->execute();
while ($row = $q->fetchObject()) {
  $first_id = $row->id;
  $first_email = $row->email;
  $first_ip = $row->ip;
  $first_submitted = $row->submitted;
}

// Get result stats (last)
$sql4 = "SELECT id, email, ip, submitted FROM j_results WHERE surveyid = '".$_GET['s']."' AND status = 1 ORDER BY submitted DESC LIMIT 1";
$q = $db->prepare($sql4);
$q->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
$q->execute();
while ($row = $q->fetchObject()) {
  $last_id = $row->id;
  $last_email = $row->email;
  $last_ip = $row->ip;
  $last_submitted = $row->submitted;
}

// Data for tables
$sql5 = "SELECT id, submitted, data FROM j_results WHERE surveyid = :surveyid AND status = 1 ORDER BY submitted DESC";
$q = $db->prepare($sql5);
$q->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
$q->execute();
$e = array();
while ($row = $q->fetchObject()) {
  $row->data = json_decode($row->data, true);
  $row->submitted = ago($row->submitted);
  array_push($e, $row);
}
$datafortable = json_encode($e);

$title = "Interim result";
pageHeader($title);
echo "<h2>$title</h2>";
echo "<p>The interim result must be used with cautions because it is not necesary a true reflection of the final result. The final result could possibly end up in a totally different direction (depending on the sample size and other factors).</p>";
echo "<p>Therefore, it is imperative that business decision must not be made based on the interim result. We strongly suggest using the final result for a better decision since the data would have been verified to ensure the highest integrity.</p>";
echo "<p>We hereby take no responsibility on any damages happened from the usage of interim result. You must use it at your own risk.</p>";
echo "<hr>\n";
echo "<h3>Project $project</h3>\n";
?>

<div class="stats">
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

<div id="showalert-delete"></div>

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
  $('#showalert-delete').html("<div class='alert alert-warning'><i class='pe-trash pe-fw'></i> A result record has been deleted</div>").hide();

<?php if ($_GET['z'] == "true") { ?>
  $('#showalert-delete').show(); window.setTimeout(function () { $("#showalert-delete").slideUp(500, function () { $("#showalert-delete").hide(); }); }, 8000);
<?php } ?>

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
      // success: function(data) { result = data; },
      success: function (data) {
      <?php if ($_GET['z'] == "true") { ?>
        window.location.reload();
      <?php } else { ?>
        window.location.href = window.location.href + "&z=true";
      <?php } ?>
      },
      error: function (error) { alert(error); }
    });
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
<?php if ($_SESSION["levelid"] == "9") { ?>
      var bb1 = document.createElement('button'); bb1.innerHTML = 'Delete <i class="pe-trash"></i>'; bb1.setAttribute('class', 'btn btn-danger btn-tiny'); bb1.setAttribute('onclick', "deleteSurveyResult('" + resultid[i] + "')");
      var bb2 = document.createElement('button'); bb2.innerHTML = 'Undelete <i class="pe-undo"></i>'; bb2.setAttribute('class', 'btn btn-warning btn-tiny'); bb2.setAttribute('onclick', "undeleteSurveyResult('" + resultid[i] + "')");
<?php } else { ?>
      var bb1 = document.createElement('button'); bb1.innerHTML = 'Delete <i class="pe-trash"></i>'; bb1.setAttribute('class', 'btn btn-danger btn-tiny'); bb1.setAttribute('onclick', "deleteSurveyResult('" + resultid[i] + "')");
      var bb2 = document.createElement('button'); bb2.innerHTML = 'Undelete <i class="pe-undo"></i>'; bb2.setAttribute('class', 'btn btn-warning btn-tiny disabled'); bb2.setAttribute('onclick', "undeleteSurveyResult('" + resultid[i] + "')");
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
      td2.appendChild(bb1);
      td2.append(" ");
      // td2.appendChild(bb2);
      tr2.appendChild(td2);
      tbody.appendChild(tr2);
      $(tbody).find('td:first-child').css("background", "#eee"); $(tbody).find('td:nth-child(2)').css("background", "#eee");
    }
    table.appendChild(thead);
    table.appendChild(tbody);
  }

  // function getsurveyrawdata(surveyid) {
  //   var result = "";
  //   $.ajax({
  //     url: api + '/interim/' + surveyid,
  //     dataType: 'json',
  //     type: 'get',
  //     cache: false,
  //     async: false,
  //     success: function(data) { result = data; }
  //   });
  //   return result;
  // }

  String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
  };

  $(document).ready(function () {
    var excerptRows = 50;
    var ttt = <?php echo $datafortable; ?>;
    var ttt = JSON.stringify(ttt);
    ttt = ttt.replaceAll("data", ""); ttt = ttt.replaceAll("upload/", "");
    // ttt = ttt.replaceAll("upload/", "http://www.siamsquare.org/members/assets/upload/");
    var inArray = JSON.parse(ttt);
    var outArray = [];
    for (var row in inArray) { outArray[outArray.length] = parse_object(inArray[row]); }
    $("span.rows.count").text("" + outArray.length);
    var csv = $.csv.fromObjects(outArray);
    renderCSV(outArray.slice(0, excerptRows), this.id);
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
    $(".csv textarea").click(function() {$(this).focus().select();});
  });

</script>


<br>

<a href="/admin/?w=surveys" class="btn btn-danger btn-sm pull-right" style="margin-top:50px; margin-bottom: 20px"><i class="pe-chevron-circle-left pe-fw"></i> Back to the main page</a>

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
