<?php

function displayHeader($title) {
	echo '
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Client Section: '.$title.'</title>';
	echo "\n";
	$cssfiles = array("css/bootstrap.css", "css/bootstrap-theme.css", "css/pe.css", "css/font-awesome.css");
	foreach ($cssfiles as $filename) {
		echo '	<link href="' . $filename . '" rel="stylesheet" type="text/css" />';
		echo "\n";
 	}
	//if(!empty($ESPCONFIG['favicon'])) {
	//echo '	<link rel="cshortcut icon" href=".$ESPCONFIG['favicon']."';
	//}
	echo '
</head>
<body>';
}

function displayNav() {
	$id = "";
	if($_SESSION['acl']['superuser'] == 'Y') { $id .= 'Superuser: <tt>'. $_SESSION['acl']['username'] .'</tt>'; }
	else { $id .= 'Login: <tt>'. $_SESSION['acl']['username'] .'</tt>'; }
	//$id .= " (";
	//$id .= $_SESSION['acl']['pdesign'];
	//$id .= ")";
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
    <a class="navbar-brand" href="/admin">SiamSquare: Client Zone</a>
  </div> <!--/navbar-header -->
  <div id="navbar" class="navbar-collapse collapse">
    <ul class="nav navbar-nav">
      <li class="active"><a href="/admin">Home</a></li>
      <li><a href="/contact">Contact</a></li>
      <li><a href="/admin/index.php?where=help">Help</a></li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li><a href="/admin/index.php?where=passwd">$id</a></li>
    </ul>
  </div> <!--/navbar-collapse -->
</div>
</nav>
ENDHTML;
}

function displayTabNav() {
	echo '
<input type="hidden" name="where" value="tab" />
<input class="btn btn-default" type="button" name="tab_general" value="General" />
<input class="btn btn-default" type="button" name="tab_questions" value="Questions" />
<input class="btn btn-default" type="button" name="tab_order" value="Order" />
<input class="btn btn-default" type="button" name="tab_conditions" value="Conditions" />
<input class="btn btn-default" type="button" name="tab_preview" value="Preview" />
<input class="btn btn-default" type="button" name="tab_finish" value="Finish" />';
}

function displayAdminBack() {
	echo '<a class="btn btn-default pull-right" role="button" href="/admin/index.php?where=manage">Go back to Management Interface</a>';
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
<br /><br />
<footer class="footer">
  <div class="container">
    <p class="text-muted">Powered by SiamSquare</p>
  </div>
</footer>';
	echo "\n";
}

function displayFooter() {
	$jsfiles = array("js/jquery-2.2.1.js", "js/bootstrap.js", "js/admin.js");
	foreach ($jsfiles as $filename) {
		//$path = dirname(dirname(__FILE__)).'/js/'.$filename;
		echo '<script type="text/javascript" src="' . $filename . '"></script>'."\n";
 	}
	echo '
<script type="text/javascript">
	var activateConfirmMsg="Warning! Once activated, this survey can no longer be edited. Any further changes must be done on a copy.";
	var cancelConfirmMsg="Warning! This survey has not been saved. Canceling now will remove any changes.";
	var mergeMsg="<h2>You must select at least two surveys before you can merge</h2>";
</script>

</body>
</html>';
}


?>
