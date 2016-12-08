<?php

$title = "Todo List";
pageHeader($title);
echo "<h2>$title</h2>";
?>

<br>

<ul class="pe-ul">
  <li><i class="pe-li pe-check-square"></i> <strong>Move all codes to js folder</strong> <p>To make the page cleaner and more secure.</p></li>
  <li><i class="pe-li pe-check-square"></i> <strong>API token key</strong> <p>For securing the API system.</p></li>
  <li><i class="pe-li pe-check-square"></i> <strong>News system or message board</strong> <p>To be used as a communication platform with (or between) users.</p></li>
  <li><i class="pe-li pe-check-square"></i> <strong>Respondent function</strong> <p>For managing private respondents e.g. upload names, email template, tracking/monitoring system.</p></li>
</ul>

<h4>Project date start/stop - for compared with actual in progress page</h4>

<h4>admin script to add new account</h4>
<ul class="pe-ul">
  <li><i class="pe-li pe-check-square"></i> <p>Add a new company</p></li>
  <li><i class="pe-li pe-check-square"></i> <p>Add a new user with level = 6 and companyid to match</p></li>
  <li><i class="pe-li pe-check-square"></i> <p>Add a message to the board with the same message of 'welcome'</p></li>
  <li><i class="pe-li pe-check-square"></i> <p>Optional of adding 5-6 demo projects to show how they would be</p></li>
</ul>


<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
