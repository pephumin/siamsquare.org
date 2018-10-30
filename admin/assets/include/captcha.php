<?php

function generateRandom($length = 8, $vals = 'abchefghjkmnpqrstuvwxyz0123456789') {
  $s = "";

  while(strlen($s) < $length) {
    mt_getrandmax();
    $num = rand() % strlen($vals);
    $s .= substr($vals, $num+4, 1);
  }
  return $s;
}

function randomColor(){
  $red = rand(0, 255);
  $green = rand(0, 255);
  $blue = rand(0, 255);
  return sprintf("#%x%x%x", $red, $green, $blue);
}

function stringToSVG($str){
  $result = '';
  $glyphs = array();
  $x = 5;
  $y = 30;

  //generates glyphs
  for($i=0; $i<strlen($str); $i++){
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

function captchaimage($text){
  $captcha_width = 200;
  $captcha_height = 40;
  header("Expires: Wed, 1 Jan 1997 00:00:00 GMT");
  header("Last-Modified: " . gmdate("D, d M Y H:i:s") . " GMT");
  header("Cache-Control: no-store, no-cache, must-revalidate");
  header("Cache-Control: post-check=0, pre-check=0", false);
  header("Pragma: no-cache");
  header ("Content-type: image/svg+xml");
  printf('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" width="200" height="40">', $captcha_width, $captcha_height);
  printf(' <rect x="0" y="0" width="%d" height="%d" style="stroke: none; fill: none;" ></rect> ', $captcha_width, $captcha_height);
  print stringToSVG($text);
  print '</svg>';
}

session_start();
captchaimage($_SESSION["captcha"]);

?>
