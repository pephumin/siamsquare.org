<?php

get_survey_info($surveys, $responses, $accessibility);
partition_surveys($surveys, $responses, $accessibility, $current, $historical);
echo "<h2>งานวิจัยทั้งหมด</h2>\n";
publicsurvey();
currentsurvey($current);
historysurvey($historical);

?>
