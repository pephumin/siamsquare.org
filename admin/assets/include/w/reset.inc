<?php
@session_unregister('survey_id');
@session_destroy();
include(wAdmin('index'));
?>
