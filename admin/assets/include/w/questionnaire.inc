<?php

$excerptRows = "50";
// $c_target = 300;
$base = "/admin/?w=progress&amp;s=".$_GET['s'];
$result = "/admin/?w=result&amp;s=".$_GET['s'];
$edit = "/admin/?w=design&amp;s=".$_GET['s'];
$dpspec = "/admin/?w=dpspec&amp;s=".$_GET['s'];

$today['year'] = date("Y"); $today['month'] = date("m"); $today['day'] = date("d");
if ($today['month'] == "01") { $today['month'] = "12"; $today['year'] = $today['year']-1; } else { $today['month'] = $today['month']-1; }
// $timelinedata = "[ \n"; $colordata = "[ ";

// Get project info
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
for ($i=0; $i<count($rr2); $i++) { $rr4[] = $rr2[$i]['questions']; }
// print_r($rr4);
// $rr4 = array_merge($rr3);
// $rr4 = call_user_func_array('array_merge', $rr3);
// print_r($rr4);

for ($i=0; $i<count($rr4); $i++) {
  $moveKeys = array('hasOther', 'visibleIf', 'colCount');
  foreach ($moveKeys as $k1) {
    $bb = $rr4[$i][$k1];
    if ($bb) { unset($rr4[$i][$k1]); $rr4[$i][$k1] = $bb; }
  }
  $removeKeys = array('isRequired', 'visible', 'choicesOrder', 'placeHolder', 'renderAs', 'ratingTheme', 'showValues', 'cellType', 'itemSize');
  foreach ($removeKeys as $k2) { unset($rr4[$i][$k2]); }
  $moveKeys1 = array('html', 'hasOther', 'visibleIf');
  foreach ($moveKeys1 as $k3) {
    $bb = $rr4[$i][$k1];
    if ($bb) { unset($rr4[$i][$k3]); $rr4[$i][$k3] = $bb; }
  }
  $removeKeys1 = array('isRequired', 'visible', 'choicesOrder', 'placeHolder', 'renderAs', 'ratingTheme', 'showValues', 'cellType', 'inputType', 'colCount', 'itemSize');
  foreach ($removeKeys1 as $k4) {
    unset($rr4[$i][$k4]);
  }
  $removeKeys2 = array('cellType', 'optionsCaption');
  foreach ($removeKeys2 as $k5) { for ($j=0; $j<count($rr4[$i]['columns']); $j++) { unset($rr4[$i]['columns'][$j][$k5]); } }
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
$rr4 = array_remove_empty($rr4);
// print_r($rr4);
$json = json_encode($rr4);
$out = "";
$seq = 1;
foreach ($rr4 as $rr44) {
  foreach ($rr44 as $question) {
    // print_r($question);
    if ($question['type'] == "html") {
      $out .= "<div>\n";
      $out .= "  <div class=\"pull-right small\">".$question['type']." [<a data-toggle=\"collapse\" href=\"#showthis-$seq\" aria-expanded=\"false\" class=\"alert-link\">hide <i class=\"pe-arrow-circle-up pe-fw\"></i></a>]</div>\n";
      $out .= "  <div class=\"pull-left\">".$question['name']."</div>\n";
      $out .= "</div><br>\n";
      $out .= "<div class=\"collapse in\" id=\"showthis-$seq\"><div class=\"well\" style=\"font-family:boon; background-color:#ffaaaa; border: 3px; border-style: solid;\">\n";
      $out .= $question['html'];
      $out .= "</div>\n";
      $out .= "</div>\n";
      $seq++;
    } else {
      $resultURL = $result."&amp;q=".$question['name'];
      if ($status == 1) { $viewresult = "<a href=\"$resultURL\" class=\"btn btn-tiny btn-default\" disabled=\"disabled\">Result <i class=\"pe-line-chart\"></i></a>\n"; }
      else if ($status == 2) { $viewresult = "<a href=\"$resultURL\" class=\"btn btn-tiny btn-default\">Result <i class=\"pe-line-chart\"></i></a>\n"; }
      else if ($status > 2) { $viewresult = "<a href=\"$resultURL\" class=\"btn btn-tiny btn-default\">Result <i class=\"pe-line-chart\"></i></a>\n"; }
      $out .= "<div>\n";
      $out .= "  <div class=\"pull-right small\">".$question['type']." [<a data-toggle=\"collapse\" href=\"#showthis-$seq\" aria-expanded=\"false\" class=\"alert-link\">hide <i class=\"pe-arrow-circle-up pe-fw\"></i></a>]</div>\n";
      $out .= "  <div class=\"pull-left\">".$question['name']."</div>\n";
      $out .= "</div><br>\n";
      $out .= "<div class=\"collapse in\" id=\"showthis-$seq\"><div class=\"well\" style=\"font-family:boon\">\n";
      $out .= "<span class=\"pull-right\">$viewresult</span>";
      $out .= "<h4>".$question['title']."</h4>\n";
      if ($question['type'] == "text") {
        $out .= "    <div><input type=\"text\" class=\"form-control\" name=\"\" disabled=\"\"></div>\n";
      } else if ($question['type'] == "comment") {
        $out .= "    <div><textarea class=\"form-control\" rows=\"5\"></textarea></div>\n";
      } else if ($question['type'] == "matrix") {
        $out .= "    <table class=\"table table-hover\">\n";
        $out .= "      <thead><tr class=\"bg-primary\">\n";
        $out .= "        <th width=\"30%\"></th>\n";
        $counting1 = count($question['columns']);
        for ($i=0; $i<$counting1; $i++) {
          if ($question['columns'][$i]['text'] == $question['columns'][$i]['value']) {
            $out .= "        <th style=\"text-align:right\">".$question['columns'][$i]['text']."</th>\n";
          } else {
            $out .= "        <th style=\"text-align:right\">".$question['columns'][$i]['text']."<br>".$question['columns'][$i]['value']."</th>\n";
          }
        }
        $out .= "      </tr></thead>\n";
        $out .= "      <tbody><tr>\n";
        $counting2 = count($question['rows']);
        for ($i=0; $i<$counting2; $i++) {
          $out .= "        <td align=\"right\">".$question['rows'][$i]['text']."<br>".$question['rows'][$i]['value']."</td>\n";
          for ($b=0; $b < $counting1; $b++) { $out .= "        <td align=\"right\"><div class=\"radio\"><input type=\"radio\" name=\"\" style=\"position:relative;margin:0px\" disabled></div></td>\n"; }
          $out .= "      </tr>";
        }
        $out .= "      </tbody>\n";
        $out .= "    </table>\n";
      } else if ($question['type'] == "matrixdropdown") {
        $out .= "    <table class=\"table table-hover\">\n";
        $out .= "      <thead><tr class=\"bg-primary\">\n";
        $out .= "        <th width=\"20%\"></th>\n";
        // $dd = "      <tr>\n";
        $counting1 = count($question['columns']);
        $width = 80/$counting1;
        $dd2 = "";
        for ($i=0; $i<$counting1; $i++) {
          $out .= "        <th style=\"text-align:right\" width=\"$width%\">".$question['columns'][$i]['title']." (".$question['columns'][$i]['name'].")</th>\n";
          $counting2 = count($question['columns'][$i]['choices']);
          $dd2 .= "        <td>\n";
          $dd2 .= "          <select class=\"form-control\">\n";
          if ($question['columns'][$i]['optionsCaption']) { $dd2 .= "            <option>".$question['columns'][$i]['optionsCaption']."</option>\n"; }
          else { $dd2 .= "            <option>---</option>\n"; }
          for ($j=0; $j<$counting2; $j++) {
            $dd2 .= "            <option>".$question['columns'][$i]['choices'][$j]['text']." (".$question['columns'][$i]['choices'][$j]['value'].")</option>\n";
          }
          $dd2 .= "          </select>\n";
          $dd2 .= "        </td>\n";
        }
        $dd1 = "";
        $counting3 = count($question['rows']);
        for ($i=0; $i<$counting3; $i++) {
          $dd1 .= "      <tr>\n";
          $dd1 .= "        <td align=\"right\">".$question['rows'][$i]['text']."<br>".$question['rows'][$i]['value']."</td>\n";
          $dd1 .= $dd2;
          $dd1 .= "      </tr>\n";
        }
        // $dd .= "      </tr>\n";
        $out .= "      </tr></thead>\n";
        $out .= "      <tbody>\n";
        $out .= $dd1;
        $out .= "      </tbody>\n";
        $out .= "    </table>\n";
      } else if ($question['type'] == "radiogrouphtml") {
        if ($question['colCount']) {
          $counting = count($question['choices']);
          $out .= "<div class=\"row\">\n";
          for ($i=0; $i<$counting; $i++) {
            if ($question['colCount'] == "2") { $out .= "  <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n"; }
            else if ($question['colCount'] == "3") { $out .= "  <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\n"; }
            $out .= "    <div class=\"radio\"><label style=\"display:inline; padding-left:0px\"><input type=\"radio\" name=\"\" disabled=\"\">".$question['choices'][$i]['text']."</label></div>\n";
            if ($i % $question['colCount'] == 0) {
              $out .= "  </div>\n";
              if ($question['colCount'] == "2") { $out .= "  <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n"; }
              else if ($question['colCount'] == "3") { $out .= "  <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\n"; }
            }
            $out .= "  </div>\n";
          }
          $out .= "</div>\n";
        } else {
          $counting = count($question['choices']);
          $out .= "<div class=\"row\">\n";
          for ($i=0; $i<$counting; $i++) {
            $out .= "  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n";
            $out .= "    <div class=\"radio\"><label style=\"display:inline; padding-left:0px\"><input type=\"radio\" name=\"\" disabled=\"\">".$question['choices'][$i]['text']."</label></div>\n";
            $out .= "  </div>\n";
          }
          $out .= "</div>\n";
        }
      } else if ($question['type'] == "checkboxhtml") {
        if ($question['colCount']) {
          $counting = count($question['choices']);
          $out .= "<div class=\"row\">\n";
          for ($i=0; $i<$counting; $i++) {
            if ($question['colCount'] == "2") { $out .= "  <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n"; }
            else if ($question['colCount'] == "3") { $out .= "  <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\n"; }
            $out .= "    <div class=\"checkbox\"><label style=\"display:inline; padding-left:0px\"><input type=\"checkbox\" name=\"\" disabled=\"\">".$question['choices'][$i]['text']."</label></div>\n";
            if ($i % $question['colCount'] == 0) {
              $out .= "  </div>\n";
              if ($question['colCount'] == "2") { $out .= "  <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n"; }
              else if ($question['colCount'] == "3") { $out .= "  <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\n"; }
            }
            $out .= "  </div>\n";
          }
          $out .= "</div>\n";
        } else {
          $counting = count($question['choices']);
          $out .= "<div class=\"row\">\n";
          for ($i=0; $i<$counting; $i++) {
            $out .= "  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n";
            $out .= "    <div class=\"checkbox\"><label style=\"display:inline; padding-left:0px\"><input type=\"checkbox\" name=\"\" disabled=\"\">".$question['choices'][$i]['text']."</label></div>\n";
            $out .= "  </div>\n";
          }
          $out .= "</div>\n";
        }
      } else if ($question['type'] == "multipletext") {
        if ($question['colCount']) {
          $counting = count($question['items']);
          $out .= "<div class=\"row\">\n";
          for ($i=0; $i<$counting; $i++) {
            if ($question['colCount'] == "2") { $out .= "  <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n"; }
            else if ($question['colCount'] == "3") { $out .= "  <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\n"; }
            $out .= "    <form class=\"form-horizontal\"><div class=\"form-group\"><label class=\"control-label col-sm-4\">".$question['items'][$i]['title'].": </label><div class=\"col-sm-8\"><input type=\"text\" class=\"form-control\" name=\"\" disabled=\"\"></div></div></form>";
            if ($i % $question['colCount'] == 0) {
              $out .= "  </div>\n";
              if ($question['colCount'] == "2") { $out .= "  <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n"; }
              else if ($question['colCount'] == "3") { $out .= "  <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\n"; }
            }
            $out .= "  </div>\n";
          }
          $out .= "</div>\n";
        } else {
          $counting = count($question['items']);
          $out .= "<div class=\"row\">\n";
          for ($i=0; $i<$counting; $i++) {
            $out .= "  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n";
            $out .= "    <form class=\"form-horizontal\"><div class=\"form-group\"><label class=\"control-label col-sm-4\">".$question['items'][$i]['title'].": </label><div class=\"col-sm-8\"><input type=\"text\" class=\"form-control\" name=\"\" disabled=\"\"></div></div></form>";
            $out .= "  </div>\n";
          }
          $out .= "</div>\n";
        }
      } else {
        $out .= "<div class=\"row\">\n";
        $out .= "  <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n";
        if ($question['type'] == "radiogroup") {
          foreach ($question['choices'] as $choice) {
            $out .= "    <div class=\"radio\"><label style=\"display:inline; padding-left:0px\"><input type=\"radio\" name=\"\" disabled=\"\">".$choice['text']."</label></div>\n";
          }
        } else if ($question['type'] == "checkbox") {
          foreach ($question['choices'] as $choice) {
            $out .= "    <div class=\"checkbox\"><label style=\"display:inline; padding-left:0px\"><input type=\"checkbox\" name=\"\" disabled=\"\">".$choice['text']."</label></div>\n";
          }
        } else if ($question['type'] == "dropdown") {
          $out .= "    <select class=\"form-control\">\n";
          $out .= "      <option>---</option>\n";
          $counting4 = count($question['choices']);
          for ($i=0; $i<$counting4; $i++) {
            if ($question['choices'][$i]['text']) { $out .= "      <option>".$question['choices'][$i]['text']."</option>\n"; }
            else { $out .= "      <option>".$question['choices'][$i]."</option>\n"; }
          }
          $out .= "    </select>\n";
        }
        $out .= "  </div>\n";
        $out .= "  <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n";
        if ($question['type'] == "radiogroup") {
          foreach ($question['choices'] as $choice) {
            $out .= "    <div class=\"radio\"><label style=\"display:inline; padding-left:0px\"><input type=\"radio\" name=\"\" disabled=\"\">".$choice['value']."</label></div>\n";
          }
        } else if ($question['type'] == "checkbox") {
          foreach ($question['choices'] as $choice) {
            $out .= "    <div class=\"checkbox\"><label style=\"display:inline; padding-left:0px\"><input type=\"checkbox\" name=\"\" disabled=\"\">".$choice['value']."</label></div>\n";
          }
        } else if ($question['type'] == "dropdown") {
          $out .= "    <select class=\"form-control\">\n";
          $out .= "      <option>---</option>\n";
          $counting4 = count($question['choices']);
          for ($i=0; $i<$counting4; $i++) {
            if ($question['choices'][$i]['text']) { $out .= "      <option>".$question['choices'][$i]['value']."</option>\n"; }
            else { $out .= "      <option>".$question['choices'][$i]."</option>\n"; }
          }
          $out .= "    </select>\n";
        }
        $out .= "  </div>\n";
        $out .= "</div>\n";
      }
      $out .= "</div>\n";
      $out .= "</div>\n";
      $seq++;
    }
    $out .= "<br>";
  }
}

if ($sample_size) { $ss = "with a total sample size of n=$sample_size"; } else { $ss = ""; }
if ($status == 1) { $fieldworkstatus = "This project is still at the set-up stage $ss and data collection is yet to be started. Therefore, there will be no results to be viewed at this stage."; }
else if ($status == 2) { $fieldworkstatus = "This project is now at the data collection stage $ss and soon will be completed. While interim results are available, it is not recommended to use such results as they will be changed constantly during the data collection stage."; }
else if ($status > 2) { $fieldworkstatus = "The data collection for this project was completed $ss. Results are now available and can be viewed by clicking the link provided in each of the questions."; }

$title = "Questionnaire";
pageHeader($title);
echo "<h2>$title</h2>\n";
echo "<p class=\"introtext\">This is the questionnaire for this study where all questions are listed out one by one. Depending on the current status of the study, the questionnaire can be finalised or yet to be finalised.</p>\n";
echo "<hr>\n";
echo "<h3>Project $project</h3>\n";
echo "<p>$fieldworkstatus</p>";

?>

<nav>
  <ul class="nav nav-tabs">
    <li class="active"><a href="#one" data-toggle="tab" id='first-tab-trigger'><i class="pe-edit pe-fw"></i> Questionnaire</a></li>
    <li><a href="#two" data-toggle="tab" id='second-tab-trigger'><i class="pe-database pe-fw"></i> Data specification</a></li>
    <li><a href="#three" data-toggle="tab" id='third-tab-trigger'><i class="pe-code pe-fw"></i> Raw codes</a></li>
    <li><a href="<?php echo $edit; ?>"><i class="pe-edit pe-fw"></i> Edit</a></li>
  </ul>
</nav>
<br>
<div class="tab-content">
  <div id="one" class="tab-pane fade in active">
    <h4>Final questionnaire</h4>
    <?php print_r($out); ?>
  </div>
  <div id="two" class="tab-pane fade">
    <!-- <div class="pull-right"><a class="download"><i class="pe-download pe-fw"></i> download the data specification file</a></div> -->
    <h4>DP spec</h4>
<?php
include_once("/www/default/siamsquare.org/admin/assets/include/class.dbug.php");
foreach ($rr4 as $view) {
  if ($view['type'] == "html") { echo "<p>".$view['html']."</p>"; }
  else { new dBug($view); }
}
?>
  </div>
  <div id="three" class="tab-pane fade">
    <pre style="font-size:80%; padding:5px; line-height:1.2"><?php print_r(json_encode($rr4, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES)); ?></pre>
  </div>
</div>

<?php


// // data for showing the real-time results
// $sql3 = "SELECT * FROM j_results WHERE surveyid = :surveyid AND status = 2 ORDER BY submitted DESC";
// $q = $db->prepare($sql3);
// $q->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
// $q->execute(); // print_r($q->rowCount());
// $last = 0; $first = ($q->rowCount()-1);
// while ($row = $q->fetchAll(PDO::FETCH_ASSOC)) {
//   $ee = $row;
//   for ($i=0; $i<count($ee); $i++) {
//     $removeKeys = array('rd', 'email', 'ip', 'surveyid', 'status', 'interviewer');
//     foreach ($removeKeys as $key) { unset($ee[$i][$key]); }
//     $ee[$i]['data'] = json_decode($ee[$i]['data'], true);
//     $ff = sort($ee[$i]['data']);
//   }
// }

?>

<script type="text/javascript">
  $(document).ready(function () {
<?php if ($json) { echo "    var tt = $json\n"; } else { echo "    var tt = []\n"; } ?>
    var tt = JSON.stringify(tt);
    var inArray = JSON.parse(tt);
    var outArray = [];
    for (var row in inArray) { outArray[outArray.length] = parse_object(inArray[row]); }
    var csv = "\ufeff"+$.csv.fromObjects(outArray);
    var blob = new Blob([csv], { type: 'type: "text/csv;charset=UTF-8"' });
    var csvUrl = window.URL.createObjectURL(blob);
    var todayDate = new Date().toISOString().slice(0,10);
    var filename = "<?php echo $project; ?>" + "_dataspec_" + todayDate + '.csv';
    $("a.download").attr({'download': filename, 'href': csvUrl });
    $("a.download").click(function() {
      if (data) { Events.download(data.length); return true; }
      else { return false; }
    });
  });
</script>

<?php backButton("/admin/?w=surveys", "Back to the main page", "danger"); ?>

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
