<?php

$home = "http://www.siamsquare.org";
$admin = $home."/admin/index.php";
$page = $home."/public/survey.php";

$_SESSION['new_survey'] = false;
$survey_name = "";
$sql = "SELECT name FROM ".$GLOBALS['ESPCONFIG']['survey_table']." WHERE id = ". $_SESSION['survey_id'];
if ($result = execute_sql($sql)) {
    if (record_count($result) > 0)
      $survey_name = $result->fields[0];
  db_close($result);
}

// initialize the survey's statistics
//esp_require_once('/lib/espsurveystat');
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/lib/espsurveystat.inc';
survey_stat_init($_SESSION['survey_id']);
?>

<script type="text/javascript">
function validate() {
    return true;
}
</script>

<h4>Complete your survey design</h4>

<p>Congratulations, you have completed designing your survey.</p>

<p><i class="pe-check-square-o pe-4x"></i></p>

<p>If you feel this survey is ready for the next step of data collection, please alert to our team for the actual survey activation.</p>

<p><strong>It is important to note that once you survey is activated, you will no longer be able to make any changes to your survey anymore.</strong> Therefore, please make sure your survey is really finalised before you let us activate your survey.</p>
