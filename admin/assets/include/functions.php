<?php

function mksuccess($msg) {
  return("<div class=\"alert alert-success alert-dismissible\" role=\"alert\"><a class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a><i class=\"pe-check-square-o\"></i>&nbsp; ${msg}</div>\n");
}

function mkinfo($msg) {
  return("<div class=\"alert alert-info alert-dismissible\" role=\"alert\"><a class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a><i class=\"pe-info-circle\"></i>&nbsp; ${msg}</div>\n");
}

function mkwarn($msg) {
  return("<div class=\"alert alert-warning alert-dismissible\" role=\"alert\"><a class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a><i class=\"pe-bullhorn\"></i>&nbsp; ${msg}</div>\n");
}

function mkerror($msg) {
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

function ago($ptime) {
  $estimate_time = time() - strtotime($ptime);
  if( $estimate_time < 1 ) { return 'less than 1 second ago'; }
  $condition = array(
    12 * 30 * 24 * 60 * 60  =>  'year',
    30 * 24 * 60 * 60       =>  'month',
    24 * 60 * 60            =>  'day',
    60 * 60                 =>  'hour',
    60                      =>  'minute',
    1                       =>  'second'
  );
  foreach ($condition as $secs => $str) {
    $d = $estimate_time / $secs;
    if ($d >= 1) { $r = round($d); return $r . ' ' . $str . ( $r > 1 ? 's' : '' ) . ' ago'; }
  }
}

function ago2($datetime, $depth=1) {
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
  return number_format($number * 100, 1).'%';
}

function iconize($data) {
  if (preg_match("/pilot test/i", $data)) { $insert = "<i class=\"pe-paper-plane pe-fw\"></i> &nbsp; "; }
  else if (preg_match("/edited and saved/i", $data)) { $insert = "<i class=\"pe-save pe-fw\"></i> &nbsp; "; }
  else if (preg_match("/conducted a survey/i", $data)) { $insert = "<i class=\"pe-plane pe-fw\"></i> &nbsp; "; }
  else if (preg_match("/logged in/i", $data)) { $insert = "<i class=\"pe-sign-in pe-fw\"></i> &nbsp; "; }
  else if (preg_match("/logged out/i", $data)) { $insert = "<i class=\"pe-sign-out pe-fw\"></i> &nbsp; "; }
  else if (preg_match("/restored a survey/i", $data)) { $insert = "<i class=\"pe-undo pe-fw\"></i> &nbsp; "; }
  else if (preg_match("/deleted a survey/i", $data)) { $insert = "<i class=\"pe-trash pe-fw\"></i> &nbsp; "; }
  else if (preg_match("/undeleted a survey/i", $data)) { $insert = "<i class=\"pe-trash pe-fw\"></i> &nbsp; "; }
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
  else if (preg_match("/manually added respondent emails/i", $data)) { $insert = "<i class=\"pe-user-plus pe-fw\"></i> &nbsp; "; }
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

function percentile($array) {
  $total = array_sum($array);
  $names = array_map(function($number) use ($total) { return number_format($number / $total * 100, 1); }, $array);
  return $names;
}

function isJSON($string) {
  return is_string($string) && is_array(json_decode($string, true)) ? true : false;
}

function fullmonth($month, $format = "long") {
  if ($format == "short") {
    if ($month == 1) { $month = "Jan"; }
    if ($month == 2) { $month = "Feb"; }
    if ($month == 3) { $month = "Mar"; }
    if ($month == 4) { $month = "Apr"; }
    if ($month == 5) { $month = "May"; }
    if ($month == 6) { $month = "Jun"; }
    if ($month == 7) { $month = "Jul"; }
    if ($month == 8) { $month = "Aug"; }
    if ($month == 9) { $month = "Sept"; }
    if ($month == 10) { $month = "Oct"; }
    if ($month == 11) { $month = "Nov"; }
    if ($month == 12) { $month = "Dec"; }
  } else {
    if ($month == 1) { $month = "January"; }
    if ($month == 2) { $month = "February"; }
    if ($month == 3) { $month = "March"; }
    if ($month == 4) { $month = "April"; }
    if ($month == 5) { $month = "May"; }
    if ($month == 6) { $month = "June"; }
    if ($month == 7) { $month = "July"; }
    if ($month == 8) { $month = "August"; }
    if ($month == 9) { $month = "September"; }
    if ($month == 10) { $month = "October"; }
    if ($month == 11) { $month = "November"; }
    if ($month == 12) { $month = "December"; }
  }
  return $month;
}

function sendMail($surveyid, &$emails) {
  $mail = new PHPMailer;
  $mail->isSMTP();
  $mail->SMTPDebug = 3;
  $mail->SMTPKeepAlive = true;
  // $mail->SMTPAuth = true;
  $mail->Host = 'localhost';
  // $mail->Port = 587;
  // $mail->Username = 'sysop';
  // $mail->Password = '';
  // $mail->SMTPSecure = 'tls';
  $mail->isHTML(true);
  $mail->addAddress(EMAILSYSTEM);
  $mail->CharSet = "UTF-8";
  if ($type == "invite") {
    if ($row->email_i) { $mail->setFrom($row->email_i); } else { $mail->setFrom(EMAILNOREPLY); }
    $mail->Subject = "ขอเชิญร่วมแสดงความคิดเห็น / Survey invitation";
    $mail->Body = $row->email_i_content;
    $mail->AltBody = strip_tags($row->email_i_content);
  }
  else if ($type == "remind") {
    if ($row->email_r) { $mail->setFrom($row->email_r); } else { $mail->setFrom(EMAILNOREPLY); }
    $mail->Subject = "ช่วยเตือนว่าคุณยังไม่ได้แสดงความคิดเห็น / Survey reminder";
    $mail->Body = $row->email_r_content;
    $mail->AltBody = strip_tags($row->email_r_content);
  }
  $q2 = $db->prepare("SELECT * FROM j_respondents WHERE surveyid = :surveyid AND status = 1 AND invite1 IS NULL");
  $q2->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
  $q2->execute();
  foreach ($q2->fetchObject() as $row) {
    $mail->addBCC($row->email);
    // if (!$mail->send()) { echo "Mailer Error (" . str_replace("@", "&#64;", $row->email) . ') ' . $mail->ErrorInfo . '<br>'; break; }
    // else {
    //   echo "Message sent to :" . $row->email . ' (' . str_replace("@", "&#64;", $row->email) . ')<br>';
    //   $q3 = $db->prepare("UPDATE j_respondents SET invite1 = NOW() WHERE email = :email AND surveyid = :surveyid");
    //   $q3->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
    //   $q3->bindValue(':email', $row->email, PDO::PARAM_INT);
    //   $q3->execute();
    // }
    $mail->clearAddresses();
  }
}
?>
