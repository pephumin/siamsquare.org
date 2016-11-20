<?php

$title = "Todo List";
pageHeader($title);
echo "<h2>$title</h2>";
?>

<br>

<ul>
  <li>API token key</li>
  <li>News system to announce news / Use message board approach - can use with project as a project note for internal conversation within a company</li>
  <li>Respondent functions (upload names, email template, direct link bypass, tracking record)</li>
</ul>


<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
