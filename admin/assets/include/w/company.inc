<?php

$title = "Todo List";
pageHeader($title);
echo "<h2>$title</h2>";
?>

<br>

<ul class="pe-ul">
  <li><i class="pe-li pe-check-square"></i> <p>Logo changing</p></li>
  <li><i class="pe-li pe-check-square"></i> <p>Address for billing.</p></li>
  <li><i class="pe-li pe-check-square"></i> <p>Company descrption</p></li>
  <li><i class="pe-li pe-check-square"></i> <p>Choose one of the pre-defined survey templates</p></li>
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
