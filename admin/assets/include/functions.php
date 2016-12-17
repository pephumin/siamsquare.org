<?php

function mksuccess ($msg) {
  return("<div class=\"alert alert-success alert-dismissible\" role=\"alert\"><a class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a><i class=\"pe-check-square-o\"></i>&nbsp; ${msg}</div>\n");
}

function mkinfo ($msg) {
  return("<div class=\"alert alert-info alert-dismissible\" role=\"alert\"><a class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a><i class=\"pe-info-circle\"></i>&nbsp; ${msg}</div>\n");
}

function mkwarn ($msg) {
  return("<div class=\"alert alert-warning alert-dismissible\" role=\"alert\"><a class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a><i class=\"pe-bullhorn\"></i>&nbsp; ${msg}</div>\n");
}

function mkerror ($msg) {
  return("<div class=\"alert alert-danger alert-dismissible\" role=\"alert\"><a class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a><i class=\"pe-exclamation-circle\"></i>&nbsp; ${msg}</div>\n");
}

function getip() {
  $ipaddress = '';
  if (getenv('HTTP_CLIENT_IP')) { $ipaddress = getenv('HTTP_CLIENT_IP'); }
  else if(getenv('HTTP_X_FORWARDED_FOR')) { $ipaddress = getenv('HTTP_X_FORWARDED_FOR'); }
  else if(getenv('HTTP_X_FORWARDED')) { $ipaddress = getenv('HTTP_X_FORWARDED'); }
  else if(getenv('HTTP_FORWARDED_FOR')) { $ipaddress = getenv('HTTP_FORWARDED_FOR'); }
  else if(getenv('HTTP_FORWARDED')) { $ipaddress = getenv('HTTP_FORWARDED'); }
  else if(getenv('REMOTE_ADDR')) { $ipaddress = getenv('REMOTE_ADDR'); }
  return $ipaddress;
}

function generateRandomString($length = 8) {
  return substr(str_shuffle(str_repeat($x='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', ceil($length/strlen($x)) )),1,$length);
}

function generateRandom($length = 6, $vals = 'abchefghjkmnpqrstuvwxyz0123456789') {
  $s = "";
  while(strlen($s) < $length) {
    mt_getrandmax();
    $num = rand() % strlen($vals);
    $s .= substr($vals, $num+4, 1);
  }
  return $s;
}

function randomColor() {
  $red = rand(0, 255);
  $green = rand(0, 255);
  $blue = rand(0, 255);
  return sprintf("#%x%x%x", $red, $green, $blue);
}

function stringToSVG($str) {
  $result = '';
  $glyphs = array();
  $x = 5;
  $y = 30;

  //generates glyphs
  for ($i=0; $i<strlen($str); $i++) {
    $rotation = rand(-20, 20); //rotation degree
    $size = rand (20, 25); //size in pixels
    $jump = rand(-5, 5); //shift up or down by a number of pixels
    $color = randomColor();
    $glyph = sprintf('<text style="fill: %s;" x="%d" y="%d" font-family="zephyr" font-size="%d" transform="translate(%d, %d) rotate(%d) translate(-%d, -%d)">%s</text>%s', $color, $x, $y + $jump, $size, $x, $y + $jump, $rotation, $x, $y + $jump, $str[$i], "\n");
    $glyphs[] = $glyph;
    $x += 20; //move carret
  }

  $indexes = range(0, count($glyphs) - 1);
  shuffle($indexes); //now shuffle them
  foreach($indexes as $index) { $result .= $glyphs[$index]; }
  return $result;
}

function captchaimage($text) {
  $captcha_width = 200;
  $captcha_height = 40;
  header("Expires: Wed, 1 Jan 1997 00:00:00 GMT");
  header("Last-Modified: " . gmdate("D, d M Y H:i:s") . " GMT");
  header("Cache-Control: no-store, no-cache, must-revalidate");
  header("Cache-Control: post-check=0, pre-check=0", false);
  header("Pragma: no-cache");
  header("Content-type: image/svg+xml");
  printf('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" width="200" height="40">', CAPTCHA_WIDTH, CAPTCHA_HEIGHT);
  printf(' <rect x="0" y="0" width="%d" height="%d" style="stroke: none; fill: none;" ></rect> ', $captcha_width, $captcha_height);
  print stringToSVG($text);
  print '</svg>';
}

function cleanstring($string) {
  $bad = array("content-type","bcc:","to:","cc:","href");
  return str_replace($bad,"", $string);
}

function ago($datetime, $depth=1) {
  $units = array("year"=>31104000, "month"=>2592000, "week"=>604800, "day"=>86400, "hour"=>3600, "minute"=>60, "second"=>1 );
  $plural = "s";
  $conjugator = " and ";
  $separator = ", ";
  $suffix1 = " ago";
  $suffix2 = " left";
  $now = "now";
  $empty = "";

  $timediff = time()-strtotime($datetime);
  if ($timediff == 0) return $now;
  if ($depth < 1) return $empty;
  $max_depth = count($units);
  $remainder = abs($timediff);
  $output = "";
  $count_depth = 0;
  $fix_depth = true;

  foreach ($units as $unit=>$value) {
    if ($remainder>$value && $depth-->0) {
      if ($fix_depth) {
        $max_depth -= ++$count_depth;
        if ($depth>=$max_depth) $depth=$max_depth;
        $fix_depth = false;
      }
      $u = (int)($remainder/$value);
      $remainder %= $value;
      $pluralise = $u>1?$plural:$empty;
      $separate = $remainder==0||$depth==0?$empty:
        ($depth==1?$conjugator:$separator);
      $output .= "{$u} {$unit}{$pluralise}{$separate}";
    }
    $count_depth++;
  }
  return $output.($timediff<0?$suffix2:$suffix1);
}

function percent($number) {
  return number_format($number * 100, 2).'%';
}

function iconize($data) {
  if (preg_match("/pilot test/i", $data)) { $insert = "<i class=\"pe-paper-plane pe-fw\"></i> &nbsp; "; }
  else if (preg_match("/edited and saved/i", $data)) { $insert = "<i class=\"pe-save pe-fw\"></i> &nbsp; "; }
  else if (preg_match("/conducted a survey/i", $data)) { $insert = "<i class=\"pe-plane pe-fw\"></i> &nbsp; "; }
  else if (preg_match("/logged in/i", $data)) { $insert = "<i class=\"pe-sign-in pe-fw\"></i> &nbsp; "; }
  else if (preg_match("/logged out/i", $data)) { $insert = "<i class=\"pe-sign-out pe-fw\"></i> &nbsp; "; }
  else if (preg_match("/restored a survey/i", $data)) { $insert = "<i class=\"pe-undo pe-fw\"></i> &nbsp; "; }
  else if (preg_match("/deleted a survey/i", $data)) { $insert = "<i class=\"pe-trash pe-fw\"></i> &nbsp; "; }
  else if (preg_match("/archived a survey/i", $data)) { $insert = "<i class=\"pe-archive pe-fw\"></i> &nbsp; "; }
  else if (preg_match("/renamed a survey/i", $data)) { $insert = "<i class=\"pe-cube pe-fw\"></i> &nbsp; "; }
  else if (preg_match("/changed a description/i", $data)) { $insert = "<i class=\"pe-cube pe-fw\"></i> &nbsp; "; }
  else if (preg_match("/tried accessing/i", $data)) { $insert = "<i class=\"pe-exclamation-triangle pe-fw\"></i> &nbsp; "; }
  else if (preg_match("/tried editing/i", $data)) { $insert = "<i class=\"pe-exclamation-triangle pe-fw\"></i> &nbsp; "; }
  else if (preg_match("/updated profile info/i", $data)) { $insert = "<i class=\"pe-cog pe-fw\"></i> &nbsp; "; }
  else if (preg_match("/changed password successfully/i", $data)) { $insert = "<i class=\"pe-key pe-fw\"></i> &nbsp; "; }
  else if (preg_match("/created a new survey/i", $data)) { $insert = "<i class=\"pe-flask pe-fw\"></i> &nbsp; "; }
  else if (preg_match("/created a new member/i", $data)) { $insert = "<i class=\"pe-user-plus pe-fw\"></i> &nbsp; "; }
  else if (preg_match("/renamed a member/i", $data)) { $insert = "<i class=\"pe-cog pe-fw\"></i> &nbsp; "; }
  else if (preg_match("/changed a member email/i", $data)) { $insert = "<i class=\"pe-envelope pe-fw\"></i> &nbsp; "; }
  else if (preg_match("/changed a member mobile/i", $data)) { $insert = "<i class=\"pe-mobile pe-fw\"></i> &nbsp; "; }
  else if (preg_match("/deleted a member/i", $data)) { $insert = "<i class=\"pe-trash pe-fw\"></i> &nbsp; "; }
  else if (preg_match("/suspended a member/i", $data)) { $insert = "<i class=\"pe-pause-circle pe-fw\"></i> &nbsp; "; }
  else if (preg_match("/changed level for/i", $data)) { $insert = "<i class=\"pe-level-up pe-fw\"></i> &nbsp; "; }
  else if (preg_match("/failed to log in due to a wrong password/i", $data)) { $insert = "<i class=\"pe-key pe-fw\"></i> &nbsp; "; }
  else if (preg_match("/failed to change password due to an incorrect current password/i", $data)) { $insert = "<i class=\"pe-key pe-fw\"></i> &nbsp; "; }
  else if (preg_match("/incorrect current password/i", $data)) { $insert = "<i class=\"pe-key pe-fw\"></i> &nbsp; "; }
  else if (preg_match("/requested an account activation/i", $data)) { $insert = "<i class=\"pe-flag pe-fw\"></i> &nbsp; "; }
  else if (preg_match("/requested a password reset/i", $data)) { $insert = "<i class=\"pe-life-ring pe-fw\"></i> &nbsp; "; }
  else if (preg_match("/failed to reset password due to an expired reset link/i", $data)) { $insert = "<i class=\"pe-key pe-fw\"></i> &nbsp; "; }
  else if (preg_match("/changed to a new password/i", $data)) { $insert = "<i class=\"pe-key pe-fw\"></i> &nbsp; "; }
  else if (preg_match("/changed survey to public/i", $data)) { $insert = "<i class=\"pe-train pe-fw\"></i> &nbsp; "; }
  else if (preg_match("/changed survey to private/i", $data)) { $insert = "<i class=\"pe-car pe-fw\"></i> &nbsp; "; }
  else if (preg_match("/uploaded a name list of respondents/i", $data)) { $insert = "<i class=\"pe-upload pe-fw\"></i> &nbsp; "; }
  else if (preg_match("/deleted respondent emails with errors/i", $data)) { $insert = "<i class=\"pe-trash pe-fw\"></i> &nbsp; "; }
  else if (preg_match("/deleted respondent duplicated emails/i", $data)) { $insert = "<i class=\"pe-trash pe-fw\"></i> &nbsp; "; }
  else if (preg_match("/manually deleted respondent emails/i", $data)) { $insert = "<i class=\"pe-trash pe-fw\"></i> &nbsp; "; }
  else if (preg_match("/accessed a project that has no respondent section/i", $data)) { $insert = "<i class=\"pe-exclamation-triangle pe-fw\"></i> &nbsp; "; }
  else if (preg_match("/accessed respondent for a project marked completion/i", $data)) { $insert = "<i class=\"pe-exclamation-triangle pe-fw\"></i> &nbsp; "; }
  else if (preg_match("/deactivated due to 5 incorrect login attempts/i", $data)) { $insert = "<i class=\"pe-exclamation-triangle pe-fw\"></i> &nbsp; "; }
  else if (preg_match("/changed survey owner/i", $data)) { $insert = "<i class=\"pe-cog pe-fw\"></i> &nbsp; "; }
  else if (preg_match("/changed role for/i", $data)) { $insert = "<i class=\"pe-cog pe-fw\"></i> &nbsp; "; }
  else if (preg_match("/edited email invitation template/i", $data)) { $insert = "<i class=\"pe-wpforms pe-fw\"></i> &nbsp; "; }
  else if (preg_match("/edited email reminder template/i", $data)) { $insert = "<i class=\"pe-wpforms pe-fw\"></i> &nbsp; "; }
  else if (preg_match("/deleted an interim result/i", $data)) { $insert = "<i class=\"pe-trash pe-fw\"></i> &nbsp; "; }
  else { $insert = ""; }
  if ($insert) { $data = $insert." ".$data; } else { $data = $data; }
  return $data;
}

function shortdate($timestamp) {
  return date('j M Y', strtotime($timestamp));
}

function role($level) {
  if ($level == 9) { $role = "Administrator"; }
  else if ($level == 8) { $role = "System"; }
  else if ($level == 6) { $role = "Manager"; }
  else if ($level == 5) { $role = "User"; }
  else if ($level == 4) { $role = "Guest"; }
  return $role;
}

?>
