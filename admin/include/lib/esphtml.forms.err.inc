<?php

/* proto string mksuccess(string message)
   Returns HTML format for an success message. */

function mksuccess ($msg) {
    return("<div class=\"alert alert-success alert-dismissible\" role=\"alert\"><a href=\"#\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a><i class=\"fa fa-check-square-o\"></i>&nbsp; ${msg}</div>\n");
}

/* proto string mkinfo(string message)
   Returns HTML format for an info message. */

function mkinfo ($msg) {
    return("<div class=\"alert alert-info alert-dismissible\" role=\"alert\"><a href=\"#\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a><i class=\"fa fa-info-circle\"></i>&nbsp; ${msg}</div>\n");
}

/* proto string mkwarn(string message)
   Returns HTML format for an warning message. */

function mkwarn ($msg) {
    return("<div class=\"alert alert-warning alert-dismissible\" role=\"alert\"><a href=\"#\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a><i class=\"fa fa-bullhorn\"></i>&nbsp; ${msg}</div>\n");
}

/* proto string mkerror(string message)
   Returns HTML format for an error message. */

function mkerror ($msg) {
    return("<div class=\"alert alert-danger alert-dismissible\" role=\"alert\"><a href=\"#\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a><i class=\"fa fa-exclamation-circle\"></i>&nbsp; ${msg}</div>\n");
}

/* proto string mkradio(string name, string value)
   Returns HTML format for a radio button. */

function mkradio ($_name, $value, $varr = null) {
        if ($varr == null)
            $varr =& $_POST;
    $str = '<input type="radio" name="' . htmlspecialchars($_name) .'" value="' . htmlspecialchars($value) .'"';
    if ( isset($varr[$_name]) && $varr[$_name] == $value )
        $str .= " checked=\"checked\"";
    $str .= ' />';
    return($str);
}
    
/* proto string mkcheckbox(string name, string value)
   Returns HTML format for a check box. */

function mkcheckbox ($_name, $value, $varr = null) {
        if ($varr == null)
            $varr =& $_POST;
    $str = '<input type="checkbox" name="' . htmlspecialchars($_name) .'[]" value="' . htmlspecialchars($value) .'"';
    if (isset($varr[$_name]) && is_array($varr[$_name]) && in_array($value, $varr[$_name]))
        $str .= " checked=\"checked\"";
    $str .= ' />';
    return($str);
}

/* proto string mktext(string name, int size)
   Returns HTML format for a text entry line. */

function mktext ($_name, $size = 20, $max = 0, $varr = null) {
        if ($varr == null)
            $varr =& $_POST;
    $size = intval($size);
    $max  = intval($max);
    $str = "size=\"$size\"";
    if ($max)   $str .= " maxlength=\"$max\"";
    if (isset($varr[$_name]))
        return('<input class="form-control" type="text" '. $str .' name="'. htmlspecialchars($_name) .'" value="'. _stripslashes(htmlspecialchars($varr[$_name])) .'" />');
    return('<input class="form-control" type="text" '. $str .' name="'. htmlspecialchars($_name) .'" />');
}

/* proto string mkpass(string name)
   Returns HTML format for a password entry line. */

function mkpass ($_name) {
    return('<input type="password" class="form-control" placeholder="Password" name="'. htmlspecialchars($_name) .'" />');
}

/* proto string mkhidden(string name)
   Returns HTML format for a hidden form field. */

function mkhidden ($_name, $varr = null) {
        if ($varr == null)
            $varr =& $_POST;
    if (isset($varr[$_name]))
        return('<input type="hidden" name="'. htmlspecialchars($_name) .'" value="'. _stripslashes(htmlspecialchars($varr[$_name])) .'" />');
    return('<input type="hidden" name="'. htmlspecialchars($_name) .'" />');
}

/* proto string mktextarea(string name, int rows, int cols, string wrap_type)
   Returns HTML format for a text entry box. */

function mktextarea ($_name, $rows, $cols, $wrap, $varr = null) {
        if ($varr == null)
            $varr =& $_POST;
    $str = '<textarea class="form-control" name="' . htmlspecialchars($_name) .'"';
    if($rows > 0)
        $str .= ' rows="' . $rows . '"';
    if($cols > 0)
        $str .= ' cols="' . $cols . '"';
    //if($wrap != '')
    //  $str .= ' wrap="' . strtolower($wrap) . '"';
    $str .= '>';
    if (isset($varr[$_name]))
         $str .= _stripslashes(htmlspecialchars($varr[$_name]));
    $str .= '</textarea>';
    return($str);
}
/* }}} */

/* {{{ proto string mkselect(string name, array options)
   Returns HTML format for a select box (dropdown). */
function mkselect ($_name, $options, $varr = null) {
        if ($varr == null)
            $varr =& $_POST;
    $str  = "<select class=\"form-control\" name=\"${_name}\">\n";
    //$str .= "<option></option>\n";
    while(list($cid, $content) = each($options)) {
        $checked = '';
        if (isset($varr[$_name]) && $varr[$_name] == $cid)
            $checked = " selected=\"selected\"";
        $str .= "<option value=\"${cid}\"${checked}>${content}</option>\n";
    }
    $str .= "</select>\n";
    return($str);
}
/* }}} */

/* {{{ proto string mkfile(string name)
   Returns HTML format for a file selection button. */
function mkfile ($_name) {
    return('<input type="file" name="'.htmlspecialchars($_name) .'" />');
}
/* }}} */

/* {{{ proto string mksubmit(string name, string value)
   Returns HTML format for a submit button. */
function mksubmit($_name, $_value = null, $_attrs = array ()) {
    if ($_value == null)
        $_value = _('Submit');
    if (!empty($_value))
        $_value = ' value="'.htmlspecialchars($_value).'"';
    $_extra = make_element_attrs_from_array($_attrs);

    return sprintf('<input class="btn btn-default" type="submit" name="%s" %s %s />', htmlspecialchars($_name), $_value, $_extra);
}

/* proto string show_login(string surveyname, string message, string css, string title)
   Returns HTML login form */

function show_login($_surveyname = null, $_message = null, $_css = null, $_title = "Client login") {
    $str = "";
    if ($_message) { $str .= mkerror($_message); }
    //$str .= "</div\n";
    $str .= "</form>\n";
    $str .= mkloginbox();

    if ($_surveyname != "") { $str .= '<input type="hidden" name="'."$_surveyname".'"'; }

    $str .= "<br />\n";
    $str .= login_warning();
    return $str;
}

/* proto string make_element_attrs_from_array(array attributes)
   Convert an array of key => value pairs into an HTML attributes specification key="value" */

function make_element_attrs_from_array($attrs) {
    $extra = '';
    foreach ($attrs as $attr => $value) {
        $extra .= sprintf(' %s="%s"', $attr, htmlspecialchars($value));
    }

    return trim($extra);
}

function login_warning() {
    $text .= "<p><strong>UNAUTHORIZED ACCESS TO THIS COMPUTER SYSTEM IS PROHIBITED BY LAW</strong></p>\n";
    $text .= "<p>You are accessing a private computer network which includes: (1) this computer, (2) this computer network, (3) all computers connected to this network, and (4) all devices and storage media attached to this network or to a computer on this network. This information system is provided for registered clients authorized use only. Unauthorized or improper use of this system may result in disciplinary action, as well as civil and criminal penalties.</p>\n";
    $text .= "<p>If you do not have an access, please contact sales for setting up a master login/password for your company.</p>\n";
    $text .= "<p>By using this information system, you understand and consent to the following:</p>\n";
    $text .= "<p>* You have no reasonable expectation of privacy regarding any communication or data transiting or stored on this information system. At any time, and for any lawful purpose, we may monitor, intercept, and search and seize any communication or data transiting or stored on this information system.</p>\n";
    $text .= "<p>* Any communication or data transiting or stored on this information system may be disclosed or used for any lawful purpose.</p>\n";
    $extra = mkwarn($text);
    $extra .= "\n\n";
    return $extra;
}

function mkloginbox() {
    $text = "<form name=\"loginform\" id=\"peloginform\" method=\"post\" class=\"form-horizontal\">\n";
    //$text .= "  <div class=\"dashboardPanel\" id=\"login\">\n";
    $text .= "  <h2>Client login</h2>\n";
    $text .= "  <br />\n";
    $text .= "  <p>This section is reserved only for our clients whom we have granted with a high level of secured access. Within this section you will be able to access to a highly confidential data such as questionnaire design, data collected from respondents, reports, etc. We carefully design our system to ensure such high important data is kept separately for different users or user groups.</p>\n";
    $text .= "  <p>Should you need any support for accessing this section, please do not hesitate to contact our staff right away.</p>\n";
    $text .= "  <br />\n";
    $text .= "    <div class=\"form-group\">\n";
    $text .= "      <label for=\"username\" class=\"col-sm-3 control-label\">Username:</label>\n";
    $text .= "        <div class=\"col-sm-9\">\n";
    $text .= "        <input type=\"text\" name=\"username\" id=\"peusername\" class=\"form-control\" placeholder=\"Username\">\n";
    $text .= "        </div>\n";
    $text .= "     </div>\n";
    $text .= "     <div class=\"form-group\">\n";
    $text .= "       <label for=\"password\" class=\"col-sm-3 control-label\">Password:</label>\n";
    $text .= "         <div class=\"col-sm-9\">\n";
    $text .= "         <input type=\"password\" name=\"password\" id=\"pepassword\" class=\"form-control\" placeholder=\"Password\">\n";
    $text .= "       </div>\n";
    $text .= "     </div>\n";
    $text .= "     <div class=\"form-group\">\n";
    $text .= "       <div class=\"col-sm-offset-3 col-sm-9\">\n";
    $text .= "         <div class=\"checkbox\">\n";
    $text .= "           <label><input type=\"checkbox\" checked> Remember me</label>\n";
    $text .= "          </div>\n";
    $text .= "       </div>\n";
    $text .= "     </div>\n";
    $text .= "     <div class=\"form-group\">\n";
    $text .= "       <div class=\"col-sm-offset-3 col-sm-9\">\n";
    $text .= "         <button class=\"btn btn-success\" type=\"submit\" id=\"loginbtn\">Sign in</button>\n";
    //$text .= "         <a class=\"btn btn-success\" type=\"button\" id=\"loginbtn\" href=\"javascript: submitform()\">Sign in</a>\n";
    $text .= "       </div>\n";
    $text .= "     </div>\n";
    //$text .= "  </div>\n";
    $text .= "</form>\n";
    $text .= "\n\n";
    //$text .= print_r($_POST);
    return $text;
}


?>