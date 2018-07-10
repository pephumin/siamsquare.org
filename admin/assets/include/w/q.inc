<?php

$excerptRows = "50";
// $c_target = 300;
$base = "/admin/?w=progress&amp;s=".$_GET['s'];
$result = "/admin/?w=result&amp;s=".$_GET['s'];
$dpspec = "/admin/?w=dpspec&amp;s=".$_GET['s'];

$today['year'] = date("Y"); $today['month'] = date("m"); $today['day'] = date("d");
if ($today['month'] == "01") { $today['month'] = "12"; $today['year'] = $today['year']-1; } else { $today['month'] = $today['month']-1; }
// $timelinedata = "[ \n"; $colordata = "[ ";


// CREATE TEMPORARY TABLE tmp SELECT * from j_projects WHERE id = 33;
// ALTER TABLE tmp drop ID;
// INSERT INTO j_projects SELECT 0,tmp.* FROM tmp;
// DROP TABLE tmp;

// CREATE TEMPORARY TABLE tmp SELECT * from j_results WHERE surveyid = 33 AND status = 2;
// ALTER TABLE tmp drop ID;
// UPDATE tmp SET surveyid = 39;
// INSERT INTO j_results SELECT 0,tmp.* FROM tmp;
// DROP TABLE tmp;

// UPDATE `j_results` SET data = REPLACE(data, 'โปรโมชั่นชิงโชค แจกทอง และท่องเที่ยว', 'Gold and travel') WHERE data LIKE '%โปรโมชั่นชิงโชค แจกทอง และท่องเที่ยว%' AND surveyid = 36;

// Get projcet info
$q1 = $db->prepare("SELECT * FROM j_projects WHERE id = :surveyid");
$q1->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
$q1->execute();
if ($q1->rowCount() == 0) {
  $title = "An error has been found";
  pageHeader($title);
  echo "<h2>We could not find a match for ID for this project</h2>\n";
  echo "<p>There has been an error locating the project you are looking for. This is caused by two reasons which are either there is a false in our system (which is very unlikely) or you use our system incorrectly.</p>";
  echo "<p>If you have tried entering the project ID manually, we strongly suggest you should stop doing this. You should instead use the client dashboard which will never lead you to a wrong link or any errors like this at all.</p>";
  echo mkerror("In fact we typically consider such action as violent.");
  echo "<p>Our system has already recorded this error including your identity and timestamp.</p>";
  pageFooter();
  $q = $db->prepare("INSERT INTO j_users_logs (surveyid, userid, ip, data, critical) VALUE (:surveyid, :userid, :ip, '" . $_SESSION["email"] . " tried accessing a non-existing project', '5')");
  $q->bindValue(':surveyid', $_GET['s'], PDO::PARAM_INT);
  $q->bindValue(':userid', $_SESSION["userid"], PDO::PARAM_INT);
  $q->bindValue(':ip', $_SESSION["ip"], PDO::PARAM_INT);
  $q->execute();
  exit;
}
while ($rr = $q1->fetchAll(PDO::FETCH_ASSOC)) {
  $project = $rr['0']['title'];
  $status = $rr['0']['status'];
  $sample_size = $rr['0']['sample'];
  $rr1 = json_decode($rr['0']['data'], true);
  $rr2 = $rr1['pages'];
}

// ----------------- QUESTIONS ----------------------

for ($i=0; $i<count($rr2); $i++) { $rr3[] = $rr2[$i]['questions']; }
$rr3 = call_user_func_array('array_merge', $rr3);
$rr4 = $rr3;

for ($i=0; $i<count($rr3); $i++) {
  $moveKeys = array('hasOther', 'visibleIf', 'colCount');
  foreach($moveKeys as $k1) {
    $bb = $rr3[$i][$k1];
    if ($bb) { unset($rr3[$i][$k1]); $rr3[$i][$k1] = $bb; }
  }
  $removeKeys = array('isRequired', 'visible', 'choicesOrder', 'placeHolder', 'renderAs', 'ratingTheme', 'showValues', 'cellType', 'itemSize');
  foreach($removeKeys as $k2) { unset($rr3[$i][$k2]); }
}

for ($i=0; $i<count($rr4); $i++) {
  $moveKeys = array('html', 'hasOther', 'visibleIf');
  foreach($moveKeys as $k1) {
    $bb = $rr4[$i][$k1];
    if ($bb) { unset($rr4[$i][$k1]); $rr4[$i][$k1] = $bb; }
  }
  $removeKeys1 = array('isRequired', 'visible', 'choicesOrder', 'placeHolder', 'renderAs', 'ratingTheme', 'showValues', 'cellType', 'inputType', 'colCount', 'itemSize');
  foreach($removeKeys1 as $rm1) {
    unset($rr4[$i][$rm1]);
  }
  $removeKeys2 = array('cellType', 'optionsCaption');
  foreach($removeKeys2 as $rm2) {
    for ($j=0; $j<count($rr4[$i]['columns']); $j++) { unset($rr4[$i]['columns'][$j][$rm2]); }
  }
  if ($rr4[$i]['type'] == "html") { $rr4[$i]['html'] = strip_tags($rr4[$i]['html']); }
  if ($rr4[$i]['type'] == "matrixdropdown") { unset($rr4[$i]['rows']); unset($rr4[$i]['choices']); }
  if (($rr4[$i]['type'] == "checkboxhtml") || ($rr4[$i]['type'] == "radiogrouphtml")) {
    for ($j=0; $j<count($rr4[$i]['choices']); $j++) { $rr4[$i]['choices'][$j]['text'] = strip_tags($rr4[$i]['choices'][$j]['text']); }
  }
  if (($rr4[$i]['type'] == "radiogroup") || ($rr4[$i]['type'] == "radiogrouphtml") || ($rr4[$i]['type'] == "dropdown") || ($rr4[$i]['type'] == "matrix") || ($rr4[$i]['type'] == "matrixdropdown")) { unset($rr4[$i]['type']); $rr4[$i]['accept'] = "Single answer"; }
  else if (($rr4[$i]['type'] == "checkbox") || ($rr4[$i]['type'] == "checkboxhtml")) { unset($rr4[$i]['type']); $rr4[$i]['accept'] = "Multiple answer"; }
  else if (($rr4[$i]['type'] == "text") || ($rr4[$i]['type'] == "multipletext") || ($rr4[$i]['type'] == "comment")) { unset($rr4[$i]['type']); $rr4[$i]['accept'] = "Open-ended"; }
  else if ($rr4[$i]['type'] == "html") { unset($rr4[$i]['type']); }
}

$json = json_encode($rr4);

// ----------------- RESULT ----------------------

if ($status >= 2) { $sql3 = "SELECT * FROM j_results WHERE surveyid = :surveyid AND status = 2 ORDER BY submitted DESC"; }
else if ($status == 1) { $sql3 = "SELECT * FROM j_results WHERE surveyid = :surveyid AND status = 1 ORDER BY submitted DESC"; }
$q = $db->prepare($sql3);
$q->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
$q->execute(); // print_r($q->rowCount());
$last = 0; $first = ($q->rowCount()-1);
while ($row = $q->fetchAll(PDO::FETCH_ASSOC)) {
  $ee = $row;
  for ($i=0; $i<count($ee); $i++) {
    $removeKeys = array('rd', 'email', 'ip', 'surveyid', 'status', 'interviewer');
    foreach($removeKeys as $key) { unset($ee[$i][$key]); }
    // $ee[$i]['data'] = ksort($ee[$i]['data']);
    $ee[$i]['data'] = json_decode($ee[$i]['data'], true);
    // ksort($ee[$i]['data']);
  }
}
// ksort($ee);


// ----------------- COMBINING ----------------------

for ($i=0; $i<count($rr4); $i++) { $rr5[] = $rr4[$i]["name"]; }
$rr5 = array_flip($rr5);
remove_array_value($rr5);

for ($i=0; $i<count($ee); $i++) {
  $ee[$i]["data"] = array_merge($rr5, array_diff($ee[$i]["data"], $rr5));
  foreach ($ee[$i]["data"] as $k1 => $v1) {
    if (preg_match("/zText/", $k1)) { unset($ee[$i]["data"][$k1]); }
  }
}



$datafortable = json_encode($ee);

// $fichier = 'file.csv';
// header( "Content-Type: text/csv;charset=utf-8" );
// header( "Content-Disposition: attachment;filename=\"$fichier\"" );
// header("Pragma: no-cache");
// header("Expires: 0");
//
// $fp= fopen('php://output', 'w');
//
// foreach ($ee as $k => $file) {
//   $result = [];
//   array_walk_recursive($file, function($item) use (&$result) {
//     $result[] = htmlspecialchars_decode(utf8_decode(html_entity_decode($item, ENT_QUOTES | ENT_XML1, 'UTF-8')));
//   });
//   fputcsv($fp, $result);
// }
// fclose($fp);
// exit();


$title = "Questionnaire";
pageHeader($title);
echo "<h2>$title</h2>\n";
echo "<p class=\"introtext\">This is the questionnaire for this study where all questions are listed out one by one. Depending on the current status of the study, the questionnaire can be finalised or yet to be finalised.</p>\n";


?>

<style>
  pre.a { font-size: 15px; }
  pre.b { font-size: large; }
  pre.c { font-size: 70%; }
</style>

<div class="row">
  <div class="col-sm-6">
    <pre class="c"><?php print_r($ee); ?></pre>
  </div>
  <div class="col-sm-6">
    <pre class="c"><?php print_r($rr5); ?></pre>
  </div>

</div>

<?php //echo putcsv($eee); ?>


<a href='#' onclick='downloadCSV({ filename: "stock-data.csv" });'>Download CSV</a>

<script type="text/javascript">
  var stockData = <?php echo $datafortable; ?>;
    // var stockData = [
    //     {
    //         Symbol: "AAPL",
    //         Company: "Apple Inc.",
    //         Price: "132.54"
    //     },
    //     {
    //         Symbol: "INTC",
    //         Company: "Intel Corporation",
    //         Price: "33.45"
    //     },
    //     {
    //         Symbol: "GOOG",
    //         Company: "Google Inc",
    //         Price: "554.52"
    //     },
    // ];

    function convertArrayOfObjectsToCSV(args) {
        var result, ctr, keys, columnDelimiter, lineDelimiter, data;
        data = args.data || null;
        if (data == null || !data.length) { return null; }
        columnDelimiter = args.columnDelimiter || ',';
        lineDelimiter = args.lineDelimiter || '\n';
        keys = Object.keys(data[0]);
        result = '';
        result += keys.join(columnDelimiter);
        result += lineDelimiter;
        data.forEach(function(item) {
            ctr = 0;
            keys.forEach(function(key) {
                if (ctr > 0) result += columnDelimiter;
                result += item[key];
                ctr++;
            });
            result += lineDelimiter;
        });
        return result;
    }

    function downloadCSV(args) {
        var data, filename, link;
        var csv = convertArrayOfObjectsToCSV({ data: stockData });
        if (csv == null) return;
        filename = args.filename || 'export.csv';
        if (!csv.match(/^data:text\/csv/i)) { csv = 'data:text/csv;charset=utf-8,' + csv; }
        data = encodeURI(csv);
        link = document.createElement('a');
        link.setAttribute('href', data);
        link.setAttribute('download', filename);
        link.click();
    }
</script>

<?php backButton("/admin/?w=surveys", "Back to the main page", "danger"); ?>

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
