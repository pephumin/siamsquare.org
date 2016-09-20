<?php
	
$_SERVER['BASE_PAGE'] = 'login.php';
$title = "Login with Facebook";
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/include/config.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/public/include/template.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/public/include/first.php';

displayHeader($title);
displayNav();
echo "<div class=\"container\">\n";

// --------------------------------------------------------------------------------


require_once $_SERVER['DOCUMENT_ROOT'] . '/public/include/fbinit.php';

//if (!isset($_SESSION['facebook'])) {
//
//	$login = $facebook->getLoginUrl();
//	echo "<p><a href=\"$login\">Sign in with Facebook</a></p>\n";
//
//}

$helper = $fb->getRedirectLoginHelper();
$permissions = ['email', 'user_likes']; // optional
$loginUrl = $helper->getLoginUrl('http://www.siamsquare.org/public/index.php', $permissions);

echo '<a href="' . $loginUrl . '">Log in with Facebook!</a>';

echo $_SESSION['fb_access_token'];


// --------------------------------------------------------------------------------

echo "</div>\n";
displayFooter();

?>

