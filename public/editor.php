<?php

if (!isset($title)) { $title = 'Java App'; }
require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/config.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/public/assets/include/template.php';

pageHeader($title);

?>

<div id="editor"></div>
<script>
    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        url = url.toLowerCase(); // This is just to avoid case sensitiveness
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }
    var editor = new SurveyEditor.SurveyEditor("editor");
    editor.showOptions = true;
    var surveyId = getParameterByName("surveyid");
    if(surveyId) {
        editor.loadSurvey(surveyId);
    }
</script>

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
