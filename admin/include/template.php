<?php

function displayHeader($title) {
	header("Content-language: en");
	header("Content-type: text/html; charset=utf-8");
	echo '
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Client Section: '.$title.'</title>';
	echo "\n";
	$cssfiles = array("css/bootstrap.css", "css/font-awesome.css", "css/pe.css");
	foreach ($cssfiles as $filename) {
		echo '	<link href="' . $filename . '" rel="stylesheet" type="text/css" />';
		echo "\n";
 	}
	//if(!empty($ESPCONFIG['favicon'])) {
	//echo '	<link rel="cshortcut icon" href=".$ESPCONFIG['favicon']."';
	//}
	$jsfiles = array("js/admin.js");
	foreach ($jsfiles as $filename) {
		//$path = dirname(dirname(__FILE__)).'/js/'.$filename;
		echo '<script type="text/javascript" src="' . $filename . '"></script>'."\n";
 	}
	//echo '<script type="text/javascript" src="js/admin.js"></script>'."\n";
	echo '
</head>
<body>';
}

function displayNav() {
	$base = "/";
	$home = "/admin/index.php";
	//$base =& $GLOBALS['ESPCONFIG']['ME'];
	//if ($_SERVER['REQUEST_URI'] == "$base") { $a = '<li class="active">'; } else { $a = '<li>'; }
	//if ($_SERVER['REQUEST_URI'] == "/contact.php") { $b = '<li class="active">'; } else { $b = '<li>'; }
	//if ($_SERVER['REQUEST_URI'] == "$base?where=help") { $c = '<li class="active">'; } else { $c = '<li>'; }
	if ($_SERVER['REQUEST_URI'] == "$base") { $a = '<li class="active">'; } else { $a = '<li>'; }
	if ($_SERVER['REQUEST_URI'] == "/admin/contact.php") { $b = '<li class="active">'; } else { $b = '<li>'; }
	if ($_SERVER['REQUEST_URI'] == "/admin/help.php") { $c = '<li class="active">'; } else { $c = '<li>'; }
	if(!empty($_SESSION['acl']['username'])) {
		//$id = "";
		//if($_SESSION['acl']['superuser'] == 'Y') { $id .= 'Superuser: <tt>'. $_SESSION['acl']['username'] .'</tt>'; }
		//else { $id .= 'Login: <tt>'. $_SESSION['acl']['username'] .'</tt>'; }
		$user = $_SESSION['acl']['username'];
		$group = $_SESSION['acl']['pgroup'];
		$g = $group[0];
		if ($g) { 
			$show = "<mark>$user/$g</mark>"; 
		} else {
			$show = "<mark>$user</mark>"; 
		}
		//print_r($_SESSION['acl']['pgroup']);
		echo "\n\n";
		//echo "<!-- Fixed navbar -->\n";
		//echo "<nav class=\"navbar navbar-default navbar-fixed-top\">\n";
		echo "<nav class=\"navbar navbar-default\">\n";
		echo "<div class=\"container\">\n";
		echo "  <div class=\"navbar-header\">\n";
		echo "    <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\">\n";
		echo "      <span class=\"sr-only\">Toggle navigation</span>\n";
		echo "      <span class=\"icon-bar\"></span>\n";
		echo "      <span class=\"icon-bar\"></span>\n";
		echo "      <span class=\"icon-bar\"></span>\n";
		echo "    </button>\n";
		echo "   <a class=\"navbar-brand\" href=\"$base\"><strong>SiamSquare</strong></a>\n";
		echo "  </div> <!--/navbar-header -->\n";
		//echo "    <p class=\"navbar-text navbar-left\">Signed in as $user [$g]</p>\n";
		echo "  <div id=\"navbar\" class=\"navbar-collapse collapse\">\n";
		echo "    <ul class=\"nav navbar-nav navbar-right\">\n";
		echo "      $a<a href=\"$home\"><i class=\"fa fa-home fa-lg\"></i>&nbsp; Home</a></li>\n";
		echo "      $b<a href=\"/admin/contact.php\"><i class=\"fa fa-envelope-o fa-lg\"></i>&nbsp; Contact</a></li>\n";
		echo "      $c<a href=\"/admin/help.php\"><i class=\"fa fa-question fa-lg\"></i>&nbsp; Help</a></li>\n";
		echo "      <li><a href=\"$home?where=logout\"><i class=\"fa fa-sign-out fa-lg\"></i>&nbsp; Log out</a></li>\n";
		echo "    </ul>\n";
		echo "  </div> <!--/navbar-collapse -->\n";
		echo "</div>\n";
		echo "</nav>\n";
	} else {
		echo "\n\n";
		//echo "<!-- Fixed navbar -->\n";
		//echo "<nav class=\"navbar navbar-default navbar-fixed-top\">\n";
		echo "<nav class=\"navbar navbar-default\">\n";
		echo "<div class=\"container\">\n";
		echo "  <div class=\"navbar-header\">\n";
		echo "    <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\">\n";
		echo "      <span class=\"sr-only\">Toggle navigation</span>\n";
		echo "      <span class=\"icon-bar\"></span>\n";
		echo "      <span class=\"icon-bar\"></span>\n";
		echo "      <span class=\"icon-bar\"></span>\n";
		echo "    </button>\n";
		echo "    <a class=\"navbar-brand\" href=\"$base\"><strong>SiamSquare</strong></a>\n";
		echo "  </div> <!--/navbar-header -->\n";
		echo "  <div id=\"navbar\" class=\"navbar-collapse collapse\">\n";
		echo "    <ul class=\"nav navbar-nav navbar-right\">\n";
		//echo "      $a<a href=\"$base\"><i class=\"fa fa-home fa-lg\"></i>&nbsp; Home</a></li>\n";
		echo "      $a<a href=\"$home\"><i class=\"fa fa-power-off fa-lg\"></i>&nbsp; Log-in</a></li>\n";
		echo "      $b<a href=\"/admin/contact.php\"><i class=\"fa fa-envelope-o fa-lg\"></i>&nbsp; Contact</a></li>\n";
		echo "      $c<a href=\"/admin/help.php\"><i class=\"fa fa-question fa-lg\"></i>&nbsp; Help</a></li>\n";
		//echo "      <li><a href=\"$home?where=logout\"><i class=\"fa fa-sign-out fa-lg\"></i>&nbsp; Log Out</a></li>\n";
		echo "    </ul>\n";
		echo "  </div> <!--/navbar-collapse -->\n";
		echo "</div>\n";
		echo "</nav>\n";		
	}
}

function displayTabNav() {
	global $tab;
	echo "<p>";
	echo '<input type="hidden" name="where" value="tab" />';
	echo "&nbsp;\n";
	if ($tab == 'general') { echo '<input type="submit" name="tab_general" value="General" class="btn btn-default active btn-sm" />'; }
	else { echo '<input type="submit" name="tab_general" value="General" class="btn btn-default btn-sm" />'; }
	echo "&nbsp;\n";
	if ($tab == 'questions') { echo '<input type="submit" name="tab_questions" value="Questions" class="btn btn-default active btn-sm" />'; }
	else { echo '<input type="submit" name="tab_questions" value="Questions" class="btn btn-default btn-sm" />'; }
	echo "&nbsp;\n";
	if ($tab == 'order') { echo '<input type="submit" name="tab_order" value="Order" class="btn btn-default active btn-sm" />'; }
	else { echo '<input type="submit" name="tab_order" value="Order" class="btn btn-default btn-sm" />'; }
	echo "&nbsp;\n";
	if ($tab == 'conditions') { echo '<input type="submit" name="tab_conditions" value="Conditions" class="btn btn-default active btn-sm" />'; }
	else { echo '<input type="submit" name="tab_conditions" value="Conditions" class="btn btn-default btn-sm" />'; }
	echo "&nbsp;\n";
	if ($tab == 'preview') { echo '<input type="submit" name="tab_preview" value="Preview" class="btn btn-default active btn-sm" />'; }
	else { echo '<input type="submit" name="tab_preview" value="Preview" class="btn btn-default btn-sm" />'; }
	echo "&nbsp;\n";
	if ($tab == 'finish') { echo '<input type="submit" name="tab_finish" value="Finish" class="btn btn-default active btn-sm" />'; }
	else { echo '<input type="submit" name="tab_finish" value="Finish" class="btn btn-default btn-sm" />'; }
	echo "&nbsp;\n";
	echo "</p>";
}

function displayAdminBack() {
	echo '<a class="btn btn-default pull-right" role="button" href="/admin/index.php?where=manage">Go back to Management Interface</a>';
}

function displayPageHeader() {
	echo "\n";
	$self = $_SERVER['PHP_SELF'];
	//if($ESPCONFIG['DEBUG']) { include 'include/debug.inc'; }
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
	//global $show;
	$user = $_SESSION['acl']['username'];
	$group = $_SESSION['acl']['pgroup'];
	$g = $group[0];
	if ($g) {
		//$show = "<mark>$user/$g</mark>"; 
		$show = "<kbd>$user</kbd>/<kbd>$g</kbd>"; 
	} else {
		//$show = "<mark>$user</mark>"; 
		$show = "<kbd>$user</kbd>"; 
	}
	if(!empty($_SESSION['acl']['username'])) {
		$signed = "[signed in as $show]";
	} else {
		$signed = "";
	}
	echo '
</div> <!-- /container -->
</form>
<br /><br />

<footer class="footer">
  <div class="container">
    <div class="text-muted pull-left">Powered by SiamSquare</div>
    <div class="text-muted pull-right">'.$signed.'</div>
  </div>
</footer>';
	echo "\n";
}

function displayFooter() {
	$jsfiles = array("js/jquery-2.2.1.js", "js/bootstrap.min.js");
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
