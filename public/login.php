<?php
	
$_SERVER['BASE_PAGE'] = 'login.php';
$title = "Login with Facebook";
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/include/config.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/public/include/template.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/public/include/first.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/public/include/fb/autoload.php';


// --------------------------------------------------------------------------------

displayHeader($title);
displayNav();
echo "<div class=\"container\">\n";

$fb = new Facebook\Facebook([
  'app_id' => ’499076173618599’,
  'app_secret' => ’693980cb2d4627bc4b873ea42501198e’,
  'default_graph_version' => 'v2.6',
]);

$home = $GLOBALS['ESPCONFIG']['base_url'];
$public = $home."/public";
$callback = $public."/login-callback.php";

$helper = $fb->getRedirectLoginHelper();

$permissions = ['email', 'user_likes']; // optional

$loginUrl = $helper->getLoginUrl($callback, $permissions);

//echo '<a href="' . $loginUrl . '">Log in with Facebook!</a>';
echo '<a href="' . htmlspecialchars($loginUrl) . '">Log in with Facebook!</a>';


echo "</div>\n";
displayFooter();


// --------------------------------------------------------------------------------

?>

