<?php

require_once '/var/www/vendor/facebook/php-sdk-v4/src/Facebook/autoload.php';
//require_once $_SERVER['DOCUMENT_ROOT'] . '/public/include/fb/autoload.php';

//Facebook\FacebookSession::SetDefaultApplication('499076173618599','693980cb2d4627bc4b873ea42501198e');

//$fbApp = new Facebook\FacebookApp('499076173618599','693980cb2d4627bc4b873ea42501198e');

//$facebook = new Facebook\FacebookRedirectLoginHelper('http://www.siamsquare.org/public/index.php');

$fb = new Facebook\Facebook([
  'app_id' => '499076173618599',
  'app_secret' => '693980cb2d4627bc4b873ea42501198e',
  'default_graph_version' => 'v2.5',
]);

?>