<?php

if (!isset($title)) { $title = 'App index'; }
require_once $_SERVER['DOCUMENT_ROOT'].'/s/template.php';

pageHeader($title);

?>

<div id="mySurveyJSName"></div>

<script type="text/javascript">
  var survey = new Survey.Survey(
  {locale:"th",pages:[{name:"page1",questions:[{type:"checkbox",choices:["one",{value:"two",text:"second value"},{value:"three",text:"third value"}],name:"question2",otherText:"อื่นๆ (ระบุ)"},{type:"radiogroup",choices:["one",{value:"two",text:"second value"},{value:"three",text:"third value"}],name:"question1",otherText:"อื่นๆ (ระบุ)"},{type:"comment",name:"question3"}]},{name:"page2",questions:[{type:"rating",name:"question4"},{type:"radiogroup",choices:["one",{value:"two",text:"second value"},{value:"three",text:"third value"}],name:"question5",otherText:"อื่นๆ (ระบุ)"},{type:"text",name:"question6"}]}]});
  survey.onComplete.add(function (s) {
  alert("The results are:" + JSON.stringify(s.data));
   });
  survey.render("mySurveyJSName");
  // var survey = new Survey.Survey(
  // {pages:[{name:"page1",questions:[{type:"checkbox",choices:["one",{value:"two",text:"second value"},{value:"three",text:"third value"}],name:"question1"},{type:"radiogroup",choices:["one",{value:"two",text:"second value"},{value:"three",text:"third value"}],name:"question2"},{type:"comment",name:"question3"}]}]});
  // survey.onComplete.add(function (s) {
  // survey.sendResult('4f74cc5f-c610-4b93-9e70-8d32015367a2');
  // });
  // survey.locale = "th";
  // survey.render('mySurveyJSName');
</script>

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
