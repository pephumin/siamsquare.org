<?php

/*
*
* Constant             Interpretation
* -------------------- ---------------------------------------------------------------------------------------------------
* STATUS_NOT_STARTED   The user has never submitted a response.  The user may have looked at the survey.
* STATUS_ALL_PARTIAL   The user has submitted a single, incomplete response.
* STATUS_SOME_PARTIAL  The user has submitted at least one complete, but at least one incomplete, response.
* STATUS_FINISHED      The user has submitted at least one complete, but no incomplete, response.
*
* @_TODO_@
* o On login page, add link to reset a forgotten password
* o In table of surveys, add:
*   - response ID/confirmation number to finished surveys
*   - opening/closing date (FUTURE ENHANCEMENT NEEDED TO WHOLE APP)
*/
	
$_SERVER['BASE_PAGE'] = 'index.php';
$title = "Respondent Section: Dashboard";
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/include/config.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/public/include/template.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/public/include/first.php';

// survey status
define('STATUS_NOT_STARTED', 'Not Started');
define('STATUS_ALL_PARTIAL', 'Started, but incomplete');
define('STATUS_SOME_PARTIAL', 'Some Finished, some incomplete');
define('STATUS_FINISHED', 'Finished');
define('FORMAT_OUTPUT_DATE', isset($ESPCONFIG['date_format'])?$ESPCONFIG['date_format']:'%Y-%m-%d');

// ensure we are configured to want this page
if (! $GLOBALS['ESPCONFIG']['dashboard_enable']) {
    displayHeader($title);
    echo mkerror('Feature disabled; set dashboard_enable = true in your configuration to engage.');
    displayPageFooter();
    displayFooter();
    exit;
}

// --------------------------------------------------------------------------------

require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/include/geopattern/loader.php';

$geopattern = new \RedeyeVentures\GeoPattern\GeoPattern();
$geopattern->setString('Mastering Markdown');

//$geopattern->setBaseColor('#ffcc00');
//$geopattern->setColor('#ffcc00');

// From https://github.com/jasonlong/geo_pattern
// chevrons, overlapping_circles, plus_signs, xes, sine_waves, hexagons, overlapping_rings, plaid, 
// triangles, squares, nested_squares, mosaic_squares, concentric_circles, diamonds, tessellation
$geopattern->setGenerator('tessellation');

$svg = $geopattern->toSVG();
$base64 = $geopattern->toBase64();
$dataURI = $geopattern->toDataURI();
//$dataURL = $geopattern->toDataURL();

// --------------------------------------------------------------------------------

displayHeader($title);
displayNav();
//displayPageHeader();
echo "<div class=\"container\">\n";
handleLogin();
handleLogout();
handleChangeProfile();
handleChangePassword();
//handleHelp();
if (is_session_authenticated()) { paint_authenticated(); } 
else { paint_non_authenticated(); }

echo "<button class=\"btn btn-lg btn-default\"><span class=\"logo1\">pe</span><span class=\"logo2\">binary</span></button>\n\n";

/*
echo "<div id=\"geopattern\" class=\"jumbotron\">PEPE</div>\n\n";
?>

<script type="text/javascript" src="js/geopattern.min.js"></script>
<script>
var pattern = GeoPattern.generate('ssq');
$('#geopattern').css('background-image', pattern.toDataUrl());
</script>


<?php
echo "</div>\n";
*/

echo "<br />\n";
echo "<p><div class=\"fb-like\" data-share=\"true\" data-width=\"450\" data-show-faces=\"true\"></div></p>\n\n";
echo "<br />\n";
echo "<p><fb:login-button scope=\"public_profile,email\" onlogin=\"checkLoginState();\"></fb:login-button></p>\n\n";
echo "<br />\n";
echo "<p><div id=\"status\"></div></p>\n\n";
echo "<br />\n";

displayFooter();

// --------------------------------------------------------------------------------

?>

