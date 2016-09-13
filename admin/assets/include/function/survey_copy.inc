<?php

//  survey_copy()
//  Copy a survey into a new survey

function survey_copy($sid) {
    //esp_require_once('/function/survey_aggregate');
    require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/include/function/survey_aggregate.inc';
    return (survey_aggregate($sid) === false ? false : true);
}

?>
