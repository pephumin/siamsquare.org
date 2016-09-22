
<?php

function mksuccess ($msg) {
  return("<div class=\"alert alert-success alert-dismissible\" role=\"alert\"><a href=\"#\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a><i class=\"pe-check-square-o\"></i>&nbsp; ${msg}</div>\n");
}

function mkinfo ($msg) {
  return("<div class=\"alert alert-info alert-dismissible\" role=\"alert\"><a href=\"#\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a><i class=\"pe-info-circle\"></i>&nbsp; ${msg}</div>\n");
}

function mkwarn ($msg) {
  return("<div class=\"alert alert-warning alert-dismissible\" role=\"alert\"><a href=\"#\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a><i class=\"pe-bullhorn\"></i>&nbsp; ${msg}</div>\n");
}

function mkerror ($msg) {
  return("<div class=\"alert alert-danger alert-dismissible\" role=\"alert\"><a href=\"#\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a><i class=\"pe-exclamation-circle\"></i>&nbsp; ${msg}</div>\n");
}

function mkgeopattern ($msg, $no) {
  return("<div class=\"alert alert-geopattern${no} alert-dismissible\" role=\"alert\"><a href=\"#\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a><i class=\"pe-cog pe-spin pe-2x\"></i><br /><br />${msg}</div>\n");
}


function mkradio ($_name, $value, $varr = null) {
  if ($varr == null) { $varr =& $_POST; }
  $str = '<input type="radio" name="' . htmlspecialchars($_name) .'" value="' . htmlspecialchars($value) .'"';
  if ( isset($varr[$_name]) && $varr[$_name] == $value ) { $str .= " checked=\"checked\""; }
  $str .= ' />';
  return($str);
}

function mkcheckbox ($_name, $value, $varr = null) {
  if ($varr == null) { $varr =& $_POST; }
  $str = '<input type="checkbox" name="' . htmlspecialchars($_name) .'[]" value="' . htmlspecialchars($value) .'"';
  //$str = '<input type="checkbox" name="' . htmlspecialchars($_name) .'" value="' . htmlspecialchars($value) .'"';
  if (isset($varr[$_name]) && is_array($varr[$_name]) && in_array($value, $varr[$_name])) { $str .= " checked=\"checked\""; }
  $str .= ' />';
  return($str);
}

function mktext ($_name, $size = 20, $max = 0, $varr = null) {
  if ($varr == null) { $varr =& $_POST; }
  $size = intval($size);
  $max  = intval($max);
  $str = "size=\"$size\"";
  if ($max)   $str .= " maxlength=\"$max\"";
  if (isset($varr[$_name])) { return('<input class="form-control" type="text" '. $str .' name="'. htmlspecialchars($_name) .'" value="'. _stripslashes(htmlspecialchars($varr[$_name])) .'" />'); }
  return('<input class="form-control" type="text" '. $str .' name="'. htmlspecialchars($_name) .'" />');
}

function mkpass ($_name) {
  return('<input type="password" class="form-control" placeholder="Password" name="'. htmlspecialchars($_name) .'" />');
}

function mkhidden ($_name, $varr = null) {
  if ($varr == null) { $varr =& $_POST; }
  if (isset($varr[$_name])) { return('<input type="hidden" name="'. htmlspecialchars($_name) .'" value="'. _stripslashes(htmlspecialchars($varr[$_name])) .'" />'); }
  return('<input type="hidden" name="'. htmlspecialchars($_name) .'" />');
}

function mktextarea ($_name, $rows, $cols, $wrap, $varr = null) {
  if ($varr == null) { $varr =& $_POST; }
  $str = '<textarea class="form-control" name="' . htmlspecialchars($_name) .'"';
  if($rows > 0) { $str .= ' rows="' . $rows . '"'; }
  if($cols > 0) { $str .= ' cols="' . $cols . '"'; }
  //if($wrap != '') { $str .= ' wrap="' . strtolower($wrap) . '"'; }
  $str .= '>';
  if (isset($varr[$_name])) { $str .= _stripslashes(htmlspecialchars($varr[$_name])); }
  $str .= '</textarea>';
  return($str);
}

function mkselect ($_name, $options, $varr = null) {
  if ($varr == null) { $varr =& $_POST; }
  $str  = "<select class=\"form-control\" name=\"${_name}\">\n";
  while(list($cid, $content) = each($options)) {
    $checked = '';
    if (isset($varr[$_name]) && $varr[$_name] == $cid) { $checked = " selected=\"selected\""; }
    $str .= "<option value=\"${cid}\"${checked}>${content}</option>\n";
  }
  $str .= "</select>\n";
  return($str);
}

function mkfile ($_name) {
  return('<input type="file" name="'.htmlspecialchars($_name) .'" />');
}

function mksubmit($_name, $_value = null, $_attrs = array ()) {
  if ($_value == null) { $_value = _('Submit'); }
  if (!empty($_value)) { $_value = ' value="'.htmlspecialchars($_value).'"'; }
  $_extra = make_element_attrs_from_array($_attrs);
  return sprintf('<input class="btn btn-default" type="submit" name="%s" %s %s />', htmlspecialchars($_name), $_value, $_extra);
}

function make_element_attrs_from_array($attrs) {
  $extra = '';
  foreach ($attrs as $attr => $value) { $extra .= sprintf(' %s="%s"', $attr, htmlspecialchars($value)); }
  return trim($extra);
}

function show_login($_surveyname = null, $_message = null, $_css = null, $_title = "Client login") {
  $str = "";
  if ($_message) { $str .= mkerror($_message); }
  $str .= file_get_contents( $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/where/login.inc');
  if ($_surveyname != "") { $str .= '<input type="hidden" name="surveyname" value="'."$_surveyname".'">'; }
  if ($_css != "") { $str .= '<input type="hidden" name="css" value="'."$_css".'">'; }
  $str .= "\n";
  return $str;
}

?>
