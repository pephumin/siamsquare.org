<?php

$title = "My profile";
pageHeader($title);
echo "<h2>$title</h2>";

?>

Profile


<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
