<?php

function displayHeader($title) {
	echo '
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Client Section: '.$title.'</title>
	<link href="css/bootstrap.css" rel="stylesheet" type="text/css" />
	<link href="css/pe.css" rel="stylesheet" type="text/css" />';
	//if(!empty($ESPCONFIG['favicon'])) {
	//echo '	<link rel="cshortcut icon" href=".$ESPCONFIG['favicon']."';
	//}
	echo '
</head>
<body>';
}

function displayNavTest() {
}

function displayNav() {
	echo "\n\n";
echo <<< ENDHTML
<!-- Fixed navbar -->
<nav class="navbar navbar-default navbar-fixed-top">
<div class="container">
  <div class="navbar-header">
    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
      <span class="sr-only">Toggle navigation</span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </button>
    <a class="navbar-brand" href="/admin">Client Login</a>
  </div> <!--/navbar-header -->
  <div id="navbar" class="navbar-collapse collapse">
    <ul class="nav navbar-nav">
      <li class="active"><a href="/admin">Home</a></li>
      <li><a href="/admin">About</a></li>
      <li><a href="/admin">Contact</a></li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li><a href="../navbar/">Default</a></li>
    </ul>
  </div> <!--/navbar-collapse -->
</div>
</nav>
ENDHTML;
}

function displayPageHeader() {
	echo "\n";
	$self = $_SERVER['PHP_SELF'];
	//if($ESPCONFIG['DEBUG']) {
	//include 'include/debug.inc';
	//}
	echo '
<form method="post" id="phpesp" action="'.$self.'">
<div class="container">';
	echo "\n";
}

function displayPageHeaderTest($title) {
	$self = $_SERVER['PHP_SELF'];
	if($ESPCONFIG['DEBUG']) {
	include 'include/debug.inc';
	}
	echo '
	<div class="container">
	<header>'.$title.'</header>
	<div id="body"><div class="contents">
	<form method="post" id="phpesp" action="'.$self.'">';
}

function displayPageFooter() {
	echo '
</div> <!-- /container -->
</form>

<footer class="footer">
  <div class="container">
    <p>Powered by SiamSquare</p>
  </div>
</footer>';
	echo "\n";
}

function displayFooter() {
	echo '
<script type="text/javascript" src="js/jquery-2.2.1.js"></script>
<script type="text/javascript" src="js/bootstrap.js"></script>
<script type="text/javascript" src="js/admin.js"></script>
<script type="text/javascript">
	var activateConfirmMsg="Warning! Once activated, this survey can no longer be edited. Any further changes must be done on a copy.";
	var cancelConfirmMsg="Warning! This survey has not been saved. Canceling now will remove any changes.";
	var mergeMsg="<h2>You must select at least two surveys before you can merge</h2>";
</script>

</body>
</html>';
}

?>
