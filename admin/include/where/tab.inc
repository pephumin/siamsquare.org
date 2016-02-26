<?php

global $errstr;

$tab="";

if(@$_GET['where'] == 'new') {
	$_SESSION['survey_id']  = '';
	$_SESSION['new_survey'] = '';
	$_SESSION['last_tab']   = '';
	$_SESSION['curr_q']     = '';
}		

if(!empty($_GET['newid'])) {
	$_SESSION['survey_id']  = intval($_GET['newid']);
	$tab="general";
	$_SESSION['last_tab']   = '';
	$_SESSION['new_survey'] = false;
}

if(empty($_SESSION['survey_id'])) {
	$_SESSION['survey_id']  = '';
	$_SESSION['new_survey'] = true;
}

if(empty($_SESSION['new_survey']))
	$_SESSION['new_survey'] = empty($_SESSION['survey_id']);
	
/* check ACL to see if user is allowed to design
 * _this_ survey */

if(!empty($_SESSION['survey_id'])) {
	$srealm = auth_get_survey_realm($_SESSION['survey_id']);
	if($_SESSION['acl']['superuser'] != 'Y' &&
			!auth_is_owner($_SESSION['survey_id'], $_SESSION['acl']['username']) &&
			!in_array($srealm, array_intersect(
					$_SESSION['acl']['pdesign'],
					$_SESSION['acl']['pall'])) &&
			!auth_no_access(_('to access this form'))) {
		return;
	}
}

/* check user's ACL to see if they have rights to
 * edit/create _any_ survey */
if($_SESSION['acl']['superuser'] != 'Y' &&
		count($_SESSION['acl']['pdesign']) < 1 &&
		!auth_no_access(_('to access this form'))) {
	return;
}
	
if (isset($_POST['tab'])) {
	$tab=$_POST['tab'];
}
if (isset($_POST['tab_general'])) {
	$tab='general';
}
if (isset($_POST['tab_questions'])) {
	$tab='questions';
}
if (isset($_POST['tab_order'])) {
	$tab='order';
}
if (isset($_POST['tab_conditions'])) {
	$tab='conditions';
}
if (isset($_POST['tab_preview'])) {
	$tab='preview';
}
if (isset($_POST['tab_finish'])) {
	$tab='finish';
}
if (isset($_POST['tab_continue'])) {
	$tab='continue';
}
if ($tab=="") {
	$tab = $_SESSION['last_tab'];
}
$tab = strtolower(preg_replace('/ +/','_',$tab));

/* XXX I18n do not translate */

if(stristr($tab,'continue')) {
	switch($_SESSION['last_tab']) {
		case 'general':
			$tab='questions';
			break;
		case 'questions':
			$tab='order';
			break;
		case 'order':
			$tab='conditions';
			break;
		case 'conditions':
			$tab='preview';
			break;
		default:
			$tab='general';
	}
}

/* XXX I18n do not translate */
		
if(!preg_match('/^[A-Za-z0-9_]+$/',$tab))	// Valid chars are [A-Za-z0-9_]
	$tab = 'general';

if(!file_exists($ESPCONFIG['include_path'].'/tab/'.$tab.$ESPCONFIG['extension']))
	$tab = 'general';

if(!file_exists($ESPCONFIG['include_path'].'/tab/'.$tab.$ESPCONFIG['extension'])) {
	echo('<b>'. _('Unable to open include file. Check INI settings. Aborting.'). '</b>');
	exit;
}
	
$errstr = '';
$updated = survey_update($_SESSION['survey_id'],$tab,$_SESSION['last_tab']);
?>
</div>
</form>

<form method="post" id="tabs" onsubmit="validate();" action="<?php echo($ESPCONFIG['ME']); ?>">
<div class="container">

<h2>Designing a questionnaire</h2>

<?php if (!empty($errstr)) {
	echo "<div class=\"alert alert-danger\" role=\"alert\">\n";
	echo(mkerror($errstr));
	echo "</div>\n";

}
?>

<?php displayTabNav(); ?>

<table>
  <tr>
    <td>
<?php include($ESPCONFIG['include_path'].'/tab/'.$tab.$ESPCONFIG['extension']); $_SESSION['last_tab'] = $tab; ?>
    </td>
  </tr>
</table>

<?php 
if($tab=='finish') {
    echo('&nbsp;');
    return;
}
if($_SESSION['new_survey']) {
    echo "</p>";
    echo "Click cancel to cancel this survey, or click continue to proceed to the next tab.<br />";
    echo "<input type=\"submit\" name=\"where\" value=\"Cancel\" onclick='return cancelConfirm()' />";
    if($tab=='preview') {
	    echo "<input type=\"submit\" name=\"tab_finish\" value=\"Finish\" />";
    } else { 
        echo "<input type=\"submit\" name=\"tab_continue\" value=\"Continue &gt;&gt;\" />";
    }
    echo "</p>";
    return; 
}
?>
<p>The survey title and other general fields are on the <strong>General</strong> tab.
Individual survey questions are added and modified on the <strong>Questions</strong> tab.
Questions may be re-ordered or deleted from the <strong>Order</strong> tab.
You may see a preview of your survey at any time, by going to the <strong>Preview</strong>
tab. If you have no further changes click <strong>Finish</strong> to go back to the
Management Interface.<br />


<?php displayTabNav(); ?>

</form>
<form method="post" action="" id="null">
<div>
