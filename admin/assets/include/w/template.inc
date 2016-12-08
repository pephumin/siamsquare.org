<?php

$title = "Edit the template";
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

<h4>Edit email message</h4>

<h4>Edit web template including logo, welcome message, and end note</h4>

<h4>Option to use client's URL (iframe)</h4>

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
