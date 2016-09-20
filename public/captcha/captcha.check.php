<?php

if (!isset($_SESSION)) session_start();

// if the session fails to start
if (!isset($_SESSION)) {
   echo "This script can't work without php session variable.";
   exit ;
}

function response_check_captcha($post_var,$cleanup=1) {
   if (!isset($_POST[$post_var]) || (md5($_POST[$post_var]) != $_SESSION['captcha'])) {
   return "You entered an incorrect code. Please fill in the correct code.";
   } else {
      if ($cleanup==1) {
   	   unset($_SESSION['captcha']);
   	   unset($_POST[$post_var]);
      }
      return ('');
   }
}

?>
