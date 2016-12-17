<?php

if (isset($_SESSION['frontpage']) && ($_SESSION['frontpage'] == 1)) { include $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/w/summaryuser.inc'; }
else if ($_SESSION['frontpage'] == 2) { include $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/w/summarycompany.inc'; }
else { include $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/w/summaryuser.inc'; }

?>
