<?php

if (!isset($title)) { $title = 'Java App'; }
require_once $_SERVER['DOCUMENT_ROOT'].'/admin/template.php';

pageHeader($title);

echo "<div id=\"mySurveyJSName\"></div>\n";
?>
<script type="text/javascript">
  var survey = new Survey.Survey(
  {pages:[{name:"page1",questions:[{type:"radiogroup",name:"frameworkUsing",title:"Do you use any front-end framework like Bootstrap?",isRequired:true,choices:["Yes","No"]},{type:"checkbox",name:"framework",visible:false,title:"What front-end framework do you use?",isRequired:true,hasOther:true,choices:["Bootstrap","Foundation"]}]},{name:"page2",questions:[{type:"radiogroup",name:"mvvmUsing",title:"Do you use any MVVM framework?",isRequired:true,choices:["Yes","No"]},{type:"checkbox",name:"mvvm",visible:false,title:"What MVVM framework do you use?",isRequired:true,hasOther:true,choices:["AngularJS","KnockoutJS","React"]}]},{name:"page3",questions:[{type:"comment",name:"about",title:"Please tell us about your main requirements for Survey library"}]}],title:"Tell us, what technologies do you use?",triggers:[{type:"visible",operator:"equal",value:"Yes",name:"frameworkUsing",questions:["framework"]},{type:"visible",operator:"equal",value:"Yes",name:"mvvmUsing",questions:["mvvm"]}]});
  survey.onComplete.add(function (s) {
  alert("The results are:" + JSON.stringify(s.data));
   });
  survey.locale = "th";
  survey.render("mySurveyJSName");
</script>

<?php
if ($notes) { pageFooter($notes); } else { pageFooter(); }

?>
