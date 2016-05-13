<?php

$home = "http://www.siamsquare.org";
$admin = $home."/admin";
$self = $_SERVER['PHP_SELF'];
$base = $_SERVER['BASE_PAGE'];

function displayHeader($title, $scrollspy = NULL) {
	global $self, $home, $admin, $base;
	header("Content-language: en");
	header("Content-type: text/html; charset=utf-8");
	echo "<!DOCTYPE html>\n";
	echo "<html>\n";
	echo "<head>\n";
	echo "	<meta charset=\"utf-8\">\n";
	echo "	<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n";
	echo "	<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n";
	echo "	<title>Client Section: $title</title>\n";
	$cssfiles = array("css/bootstrap.css", "css/font-awesome.css", "css/typicons.css", "css/animate.css", "css/pe.css", "css/geopattern.css");
	foreach ($cssfiles as $filename) {
		echo "	<link href=\"$filename\" rel=\"stylesheet\" type=\"text/css\" />\n";
 	}
	//if(!empty($ESPCONFIG['favicon'])) {
	//echo "	<link rel=\"shortcut icon\" href=\"$ESPCONFIG['favicon']\"\n";
	//}
	if (isset($_SERVER['BASE_PAGE'])) {
		echo "	<link rel=\"canonical\" href=\"$admin/$base\">\n";
	}
	$jsfiles = array("js/top.js");
	foreach ($jsfiles as $filename) {
		//$path = dirname(dirname(__FILE__)).'/js/'.$filename;
		echo "	<script type=\"text/javascript\" src=\"$filename\"></script>\n";
 	}
	echo "</head>\n";
	if ($scrollspy) { echo "<body data-spy=\"scroll\" data-target=\"#ssqscrollspy\" data-offset=\"20\">\n"; }
	else { echo "<body>\n"; }
}

function displayNav() {
	global $self, $home, $admin, $base;
	echo "\n\n";
	echo "<nav class=\"navbar navbar-default\">\n";
	echo "<div class=\"container\">\n";
	echo "  <div class=\"navbar-header\">\n";
	echo "    <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\">\n";
	echo "      <span class=\"sr-only\">Toggle navigation</span>\n";
	echo "      <span class=\"icon-bar\"></span>\n";
	echo "      <span class=\"icon-bar\"></span>\n";
	echo "      <span class=\"icon-bar\"></span>\n";
	echo "    </button>\n";
	echo "    <a class=\"navbar-brand\" href=\"$home\">";
	logo();
	echo "</a>\n";	
	if ($_SERVER['REQUEST_URI'] == "/admin/index.php") { $a = '<li class="active">'; } else { $a = '<li>'; }
	if ($_SERVER['REQUEST_URI'] == "/admin/contact.php") { $b = '<li class="active">'; } else { $b = '<li>'; }
	if ($_SERVER['REQUEST_URI'] == "/admin/help.php") { $c = '<li class="active">'; } else { $c = '<li>'; }
	if(!empty($_SESSION['acl']['username'])) {
		echo "  </div> <!--/navbar-header -->\n";
		echo "  <div id=\"navbar\" class=\"navbar-collapse collapse\">\n";
		echo "    <ul class=\"nav navbar-nav navbar-right\">\n";
		echo "      $a<a href=\"$admin\"><i class=\"fa fa-home fa-lg\"></i>&nbsp; Home</a></li>\n";
		echo "      $b<a href=\"/admin/contact.php\"><i class=\"fa fa-envelope-o fa-lg\"></i>&nbsp; Contact</a></li>\n";
		echo "      $c<a href=\"/admin/help.php\"><i class=\"fa fa-question fa-lg\"></i>&nbsp; Help</a></li>\n";
		echo "      <li><a href=\"$admin/index.php?where=logout\"><i class=\"fa fa-sign-out fa-lg\"></i>&nbsp; Log out</a></li>\n";
		echo "    </ul>\n";
		echo "  </div> <!--/navbar-collapse -->\n";
		echo "</div>\n";
		echo "</nav>\n";
	} else {
		echo "  </div> <!--/navbar-header -->\n";
		echo "  <div id=\"navbar\" class=\"navbar-collapse collapse\">\n";
		echo "    <ul class=\"nav navbar-nav navbar-right\">\n";
		//echo "      $a<a href=\"$admin\"><i class=\"fa fa-home fa-lg\"></i>&nbsp; Home</a></li>\n";
		echo "      $a<a href=\"$admin\"><i class=\"fa fa-power-off fa-lg\"></i>&nbsp; Log-in</a></li>\n";
		echo "      $b<a href=\"/admin/contact.php\"><i class=\"fa fa-envelope-o fa-lg\"></i>&nbsp; Contact</a></li>\n";
		echo "      $c<a href=\"/admin/help.php\"><i class=\"fa fa-question fa-lg\"></i>&nbsp; Help</a></li>\n";
		//echo "      <li><a href=\"$admin/index.php?where=logout\"><i class=\"fa fa-sign-out fa-lg\"></i>&nbsp; Log Out</a></li>\n";
		echo "    </ul>\n";
		echo "  </div> <!--/navbar-collapse -->\n";
		echo "</div>\n";
		echo "</nav>\n";		
	}
}

function displayTabNav_tabs() {
	global $tab;
	echo "<ul class=\"nav nav-tabs\">\n";
	echo "<input type=\"hidden\" name=\"where\" value=\"tab\" />";
	if ($tab == "general") { echo "<li class=\"active\"><input type=\"submit\" name=\"tab_general\" value=\"General\" /></li>\n"; }
	else { echo "<li><input type=\"submit\" name=\"tab_general\" value=\"General\" /></li>\n"; }
	echo "&nbsp;\n";
	if ($tab == "questions") { echo "<li class=\"active\"><input type=\"submit\" name=\"tab_questions\" value=\"Questions\" /></li>\n"; }
	else { echo "<li><input type=\"submit\" name=\"tab_questions\" value=\"Questions\" /></li>\n"; }
	echo "&nbsp;\n";
	if ($tab == "order") { echo "<li class=\"active\"><input type=\"submit\" name=\"tab_order\" value=\"Order\" /></li>\n"; }
	else { echo "<li><input type=\"submit\" name=\"tab_order\" value=\"Order\" /></li>\n"; }
	echo "&nbsp;\n";
	if ($tab == "conditions") { echo "<li class=\"active\"><input type=\"submit\" name=\"tab_conditions\" value=\"Conditions\" /></li>\n"; }
	else { echo "<li><input type=\"submit\" name=\"tab_conditions\" value=\"Conditions\" /></li>\n"; }
	echo "&nbsp;\n";
	if ($tab == "preview") { echo "<li class=\"active\"><input type=\"submit\" name=\"tab_preview\" value=\"Preview\" /></li>\n"; }
	else { echo "<li><input type=\"submit\" name=\"tab_preview\" value=\"Preview\" /></li>\n"; }
	echo "&nbsp;\n";
	if ($tab == "finish") { echo "<li class=\"active\"><input type=\"submit\" name=\"tab_finish\" value=\"Finish\" /></li>\n"; }
	else { echo "<li><input type=\"submit\" name=\"tab_finish\" value=\"Finish\" /></li>\n"; }
	echo "</ul>\n";
	echo "<br /><br />\n";
}

function displayTabNav() {
	global $tab;
	echo "<p>";
	echo '<input type="hidden" name="where" value="tab" />';
	echo "&nbsp;\n";
	if ($tab == 'general') { echo '<input type="submit" name="tab_general" value="General" class="btn btn-warning active btn-sm" />'; }
	else { echo '<input type="submit" name="tab_general" value="General" class="btn btn-warning btn-sm" />'; }
	echo "&nbsp;\n";
	if ($tab == 'questions') { echo '<input type="submit" name="tab_questions" value="Questions" class="btn btn-warning active btn-sm" />'; }
	else { echo '<input type="submit" name="tab_questions" value="Questions" class="btn btn-warning btn-sm" />'; }
	echo "&nbsp;\n";
	if ($tab == 'order') { echo '<input type="submit" name="tab_order" value="Order" class="btn btn-warning active btn-sm" />'; }
	else { echo '<input type="submit" name="tab_order" value="Order" class="btn btn-warning btn-sm" />'; }
	echo "&nbsp;\n";
	if ($tab == 'conditions') { echo '<input type="submit" name="tab_conditions" value="Conditions" class="btn btn-warning active btn-sm" />'; }
	else { echo '<input type="submit" name="tab_conditions" value="Conditions" class="btn btn-warning btn-sm" />'; }
	echo "&nbsp;\n";
	if ($tab == 'preview') { echo '<input type="submit" name="tab_preview" value="Preview" class="btn btn-warning active btn-sm" />'; }
	else { echo '<input type="submit" name="tab_preview" value="Preview" class="btn btn-warning btn-sm" />'; }
	echo "&nbsp;\n";
	if ($tab == 'finish') { echo '<input type="submit" name="tab_finish" value="Finish" class="btn btn-warning active btn-sm" />'; }
	else { echo '<input type="submit" name="tab_finish" value="Finish" class="btn btn-warning btn-sm" />'; }
	echo "&nbsp;\n";
	echo "</p>";
}

function displayAdminBack() {
	echo "<a class=\"btn btn-default btn-sm pull-right\" role=\"button\" href=\"/admin/index.php?where=manage\"><i class=\"fa fa-hand-o-left\"></i> Back to Main Interface</a>";
}

function displayPageHeader() {
	global $self, $home, $admin, $base;
	echo "<form method=\"post\" id=\"phpesp\" action=".$self.">\n";
	echo "<div class=\"container\">\n\n";
	// bootlint
	$target = $home.$sbtn-defaultelf;
	echo "<p class=\"pull-right\"><a class=\"btn btn-info btn-xs\" href=\"http://www.bootlint.com/?url={$target}\" target=\"_blank\" role=\"button\">bootlint</a></p>\n\n";

}

function displayPageFooter() {

	global $self, $home, $admin, $base;
	
	$user = $_SESSION['acl']['username'];
	$group = $_SESSION['acl']['pgroup'];
	$g = $group[0];
	
	if ($g) { $show = "<kbd>$user</kbd> (<kbd>$g</kbd>)"; } 
	else { $show = "<kbd>$user</kbd>"; }
	
	if(!empty($_SESSION['acl']['username'])) { $signed = "Signed in as <i class=\"fa fa-user\"></i> $show"; } 
	else { $signed = ""; }
	
	echo "</div> <!-- /container -->\n";
	echo "</form>\n";
	echo "<br /><br />\n\n";
	echo "<div class=\"scroll-to-top\"><i class=\"fa fa-arrow-up fa-lg\"></i></div>\n\n";
	echo "<footer class=\"footer\">\n";
	echo "  <div class=\"container\">\n";
	echo "    <div class=\"text-muted pull-left\"><i class=\"fa fa-graduation-cap\"></i> Website developed by <abbr title=\"Phumin Chesdmethee\">Phumin</abbr>: ";
	echo "	  [<a href=\"https://fb.me/phumin\"><i class=\"fa fa-facebook-square\"></i></a>|";
	echo "    <a href=\"https://twitter.com/pephumin\"><i class=\"fa fa-twitter\"></i></a>|";
	echo "	  <a href=\"mailto:phumin@sawasdee.org\"><i class=\"fa fa-envelope-o\"></i></a>|";
	echo "	  <a href=\"sms:66-81-806-8899\"><i class=\"fa fa-mobile\"></i></a>]</div>\n";
	echo "    <div class=\"text-muted pull-right\">".$signed."</div>\n";
	echo "  </div>\n";
	echo "</footer>\n\n";
}

function displayFooter() {
	$jsfiles = array("js/jquery.js", "js/bootstrap.js", "js/pe.js");
	foreach ($jsfiles as $filename) {
		//$path = dirname(dirname(__FILE__)).'/js/'.$filename;
		echo '<script type="text/javascript" src="' . $filename . '"></script>'."\n";
 	}
	echo "<script type=\"text/javascript\">\n";
	echo "	var activateConfirmMsg=\"Warning! Once activated, this survey can no longer be edited. Any further changes must be done on a copy.\"\n";
	echo "	var cancelConfirmMsg=\"Warning! This survey has not been saved. Canceling now will remove any changes.\"\n";
	echo "	var mergeMsg=\"<h2>You must select at least two surveys before you can merge</h2>\"\n";
	echo "</script>\n\n";
	//include $_SERVER['DOCUMENT_ROOT'] . '/admin/include/scripts/datepicker';
	echo "\n\n";
	echo "</body>\n";
	echo "</html>\n\n";
	//if ($_SESSION['acl']['superuser'] == 'Y') { include $_SERVER['DOCUMENT_ROOT'] . '/admin/include/debug.php'; }
	include $_SERVER['DOCUMENT_ROOT'] . '/admin/include/debug.php'; 
}

function logo() {
  echo "<span class=\"logo1\">pe</span><span class=\"logo2\">binary</span>";
}

?>
