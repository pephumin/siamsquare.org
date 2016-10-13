<?php

if (!isset($title)) { $title = 'App editor'; }
require_once $_SERVER['DOCUMENT_ROOT'].'/s/template.php';

pageHeader($title);

?>

<div id="mySurveyJSName"></div>

<div id="surveyjseditor"></div>

<script>
  function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    url = url.toLowerCase();
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
    var editor = new SurveyEditor.SurveyEditor("surveyjseditor");
    editor.showOptions = true;
    // editor.text = JSON.stringify({"pages":[{"questions":[{"type":"rating","name":"rateme"}]}]});
    editor.saveSurveyFunc = function() { var myJSONText = editor.text; };
    var surveyId = getParameterByName("surveyid");
    if(surveyId) {editor.loadSurvey(surveyId);}
</script>

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
