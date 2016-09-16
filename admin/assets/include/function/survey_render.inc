<?php

//   proto bool survey_render(int survey_id, int section, int resonse_id, string message)
//   Reads current form variables from $_POST. Builds HTML for the survey (prefixed w/ message).

function survey_render($sid, $section = 1, $rid=0, $message = '') {

  global $preview;
  //global $_POST;
  @reset($_POST);

  if(empty($section)) { $section = 1; }

  // load survey title (and other globals)
  $sql = "SELECT * FROM ".$GLOBALS['ESPCONFIG']['survey_table']." WHERE id=${sid}";
  $result = execute_sql($sql,"",ADODB_FETCH_ASSOC);
  if(record_count($result) != 1)
    return(false);
  $survey = fetch_row($result);
  db_close($result);

  $sections = survey_get_sections($sid);
  $num_sections = count($sections);
  if($section-- > $num_sections)
    return(false);  // invalid section

  $section_questions = survey_get_section_questions($sid);

  // load survey questions
  $sec_sql = array_to_insql($sections[$section]);
  $sql = "SELECT * FROM ".$GLOBALS['ESPCONFIG']['question_table']." WHERE id $sec_sql ORDER BY position,id";
  //echo $sql;
  $questions_result = execute_sql($sql,"",ADODB_FETCH_ASSOC);
  if(record_count($questions_result) < 1)
    return(false);

  // check to see if there are required questions
  //$sql = "SELECT COUNT(*) FROM ".$GLOBALS['ESPCONFIG']['question_table']." WHERE id $sec_sql AND required='Y'";
  //$has_required = get_one($sql);

  // find out what question number we are on $i
  $i=0;
  for($j=0;$j<$section;$j++)
    $i += count($section_questions[$j]);

  //echo "<h2>".$survey["title"]."</h2>\n\n";
  echo "<h2>Project ".$survey["title"]." ";
  if ($survey["subtitle_th"]) { echo "<small>(".$survey["subtitle_th"].")</small>"; }
  else { echo "<small>(".$survey["subtitle"].")</small>"; }
  echo "</h2>\n";
  echo "<br />\n\n";

  echo "<div class=\"well showprojectdetail\">\n";
  //echo "<div class=\"jumbotron showprojectdetail\">\n";
  if ($survey["info_th"]) { echo "<h4>".nl2br($survey["info_th"])."</h4>\n\n"; }
  else { echo "<h4>".nl2br($survey["info"])."</h4>\n\n"; }
  echo "</div>\n";
  //echo "<br />\n";

  //echo "PE";
  //echo $preview;

  if (!$preview) {
    echo "<span class=\"ubuntu\"><small>PROGRESS:</small></span>\n";
    echo progressbar($_SESSION['sec'], $num_sections);
    echo "\n\n";
  }

  //if($num_sections>1) { echo "<p>"; printf(_('Page %d of %d'), $section+1, $num_sections); echo "</p>\n\n"; }

  // if ($section==0) echo($survey["info"]);

  echo "<div class=\"row\">\n";

  $questions_shown=0;
  while($question = fetch_row($questions_result)) {
    $questions_result->MoveNext();
    $i++;
    // process each question
    $qid  = &$question['id'];
    $tid  = &$question['type_id'];
    if ($tid == 100) { $i--; }

    if (question_conditioncheck($sid,$qid,$rid)) { $questions_shown = 1; question_render($question,$i,$survey['auto_num']); }
    elseif (isset($_POST['tab']) && ($_POST['tab']=="preview")) { $questions_shown = 1; question_render($question,$i,$survey['auto_num']); }
  }

  if ($questions_shown==0) { echo "<p>No questions in this section.</p>\n"; echo "<br /><br />\n\n"; }

  echo "</div>\n\n";

  //if($num_sections>1) { echo "<p>"; printf(_('Page %d of %d'), $section+1, $num_sections); echo "</p>\n\n"; }

  //require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/include/function/ssq.inc';
  //echo progressbar($section, $num_sections);

  return;
}

?>
