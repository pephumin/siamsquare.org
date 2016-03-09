<?php

$base =& $GLOBALS['ESPCONFIG']['ME'];

if (!defined('STATUS_ACTIVE')) {
    define('STATUS_EDIT',  0x00);
    define('STATUS_ACTIVE',  0x01);
    define('STATUS_DONE',    0x02);
    define('STATUS_DELETED', 0x04);
    define('STATUS_TEST',    0x08);
}

if(get_magic_quotes_gpc()) {
    function _addslashes($a)    { return(db_qstr(stripslashes($a))); }
    function _stripslashes($a)  { return(stripslashes($a)); }
} else {
    function _addslashes($a)    { return(db_qstr($a)); }
    function _stripslashes($a)  { return($a); }
}
// deprecated    set_magic_quotes_runtime(0);
// If there are any errors in the standard libraries we want to know!
error_reporting(E_ALL); 

function esp_where($where = null) {
    global $base,
    $cfg =& $GLOBALS['ESPCONFIG'];

    if(empty($where))
        $where = 'index';
    $where = strtolower(preg_replace('/ +/','_',$where));
    if(!preg_match('/^[A-Za-z0-9_]+$/',$where))    // Valid chars are [A-Za-z0-9_]
        $where = 'index';
    if(!file_exists($cfg['include_path'].'/where/'.$where.$cfg['extension']))
        $where = 'index';
    if(!file_exists($cfg['include_path'].'/where/'.$where.$cfg['extension'])) {
        echo 'Unable to open include file. Check INI settings. Aborting.';
        exit;
    }
    return($cfg['include_path'].'/where/'.$where.$cfg['extension']);
}

function esp_init_adodb() {
    global $base,
    $cfg =& $GLOBALS['ESPCONFIG'];

    if(!file_exists($cfg['adodb_path'].'adodb.inc.php')) {
        echo 'Unable to open ADODB include file. Check INI settings. Aborting.';
        exit;
    }
    else {
        include($cfg['adodb_path'].'adodb.inc.php');
    }
    if (isset($cfg['adodb_conn'])) {
        return;
    }
    $cfg['adodb_conn'] = &ADONewConnection($cfg['adodb_database_type']);
    error_reporting(0);  // Hide errors 

    //$cfg['adodb_conn']->debug=1;
    if ($cfg['adodb_database_type'] == "sqlite") {
        $dbconnected = $cfg['adodb_conn']->Connect($cfg['adodb_pathto_db']);
    }
    else {
        if (!isset($cfg['adodbi_persist']) or 
	(isset($cfg['adodb_persist']) && $cfg['adodb_persist'])) {
            // Use persistent connection (default)
            $dbconnected = $cfg['adodb_conn']->PConnect($cfg['db_host'], $cfg['db_user'], $cfg['db_pass'], $cfg['db_name']);
        } else {
            // Use single connection
            $dbconnected = $cfg['adodb_conn']->Connect($cfg['db_host'], $cfg['db_user'], $cfg['db_pass'], $cfg['db_name']);
        }
    }
    if (!$dbconnected) {
        header('HTTP/1.0 503 '. _('Service Unavailable'));
        echo('<html><head><title>HTTP 503 '. _('Service Unavailable') .'</title></head>');
        echo('<body><h1>HTTP 503 '. _('Service Unavailable') .'</h1>');
        echo(mkerror(_('<div class="alert alert-danger" role="alert"><p>Connection to database failed. Please check configuration.</p></div>')));
        if ($cfg['DEBUG']) {
            echo("<br>\n". mkerror(ErrorNo().": ".ErrorMsg()));
        }
        echo('</body></html>');
        exit;
    }
    error_reporting(E_ALL);       // Show errors from now on.
}
    
// redirect to thank you page for survey ID 'sid'
// exits PHP!
function goto_thankyou($sid,$referer) {
    global $base,
    $cfg =& $GLOBALS['ESPCONFIG'];

    // submitting a survey for good
    esp_require_once('/lib/espsurveystat');
    survey_stat_decrement(SURVEY_STAT_ABANDONED, $sid);
    survey_stat_increment(SURVEY_STAT_COMPLETED, $sid);

    $sql = "SELECT thanks_page,thank_head,thank_body FROM ".$cfg['survey_table']." WHERE id=${sid}";
    $result = execute_sql($sql);
    list($thank_url,$thank_head,$thank_body) = fetch_row($result);
    db_close($result);
    $thank_url = str_replace("\r", '', $thank_url);
    $thank_url = str_replace("%0d", '', $thank_url);
    $thank_url = str_replace("\n", '', $thank_url);
    $thank_url = str_replace("%0a", '', $thank_url);
    $thank_url = str_replace("\t", '', $thank_url);
    $thank_url = str_replace("\0", '', $thank_url);

    if(!empty($thank_url)) {
        if(!headers_sent()) {
            header("Location: $thank_url");
            exit;
        }
    ?>
<script type="text/javascript">
<!--
window.location="<?php echo($thank_url); ?>"
    //-->
</script>
<noscript>
<h2 class="thankhead">Thank You for completing this survey.</h2>
<p>Please click <a href="<?php echo($thank_url); ?>">here</a> to continue.</p>
</noscript>
<?php
       exit;
    }


    if(empty($thank_body) && empty($thank_head)) {
        $thank_body = $GLOBALS['ESPCONFIG']['thank_body'];
        $thank_head = $GLOBALS['ESPCONFIG']['thank_head'];
    }

    echo "<h2> $thank_head </h2>";
    echo "<p> $thank_body </p>";

    if ($GLOBALS['ESPCONFIG']['dashboard_enable']) {
    echo '<a href="'.$base.'/public/">Go to my surveys</a>';
    }

    if (isset($_GET['where']) && $_GET['where'] == 'test') {
       if ($GLOBALS['ESPCONFIG']['limit_double_postings']==0) { $ref = "<a href=\"". $referer."\">Return</a><br />"; } 
       else { $ref = ""; }
    } else {
       $ref = check_referer($referer);
    }
    echo $ref;
    return;
}

function check_referer($referer) {
    global $base,
    $cfg =& $GLOBALS['ESPCONFIG'];

    $pos = strpos($referer, $GLOBALS['ESPCONFIG']['autopub_url']);
    if ($pos === false) {
        if (!empty($_REQUEST['direct']) && $_REQUEST['direct'] === '1') {
            $retstr = "";
        } else {
            if ($GLOBALS['ESPCONFIG']['limit_double_postings']==0) {
               $retstr = "<a href=\"". $referer."\">Return</a>";
	} else {
	   $retstr = "";
	}
        }
    } else {
        $retstr = "";
    }
    return $retstr;
}

//  blur()
//  Go to a different URL, using the best method possible given the current output state
//  NOTE: Does not return.

function blur($url, $forwardingLabel = 'Please click here to continue...') {    
    global $base,
    $cfg =& $GLOBALS['ESPCONFIG'];

    // close the session, as it's no longer needed and we don't want to delay waiters
    session_write_close();

    // make sure the URL is absolute, as the Location: header requires it
    if (0 !== strpos($url, 'http')) {
        $url = rtrim($base, '/') . '/' . ltrim($url, '/');
    }

    // go elsewhere
    if (headers_sent()) {
         echo <<<EOHTML
<script type='text/javascript'>
window.location = "$url";
</script>
<noscript>
<a href="$url">$forwardingLabel</a>
</noscript>
EOHTML;
    } else {
        header(sprintf('Location: %s', $url));
    }

    // go no further
    exit(0);
}    


function goto_saved($sid, $url) {
    global $base,
    $cfg =& $GLOBALS['ESPCONFIG'];

    // sticking a survey for later
    esp_require_once('/lib/espsurveystat');
    survey_stat_decrement(SURVEY_STAT_ABANDONED, $sid);
    survey_stat_increment(SURVEY_STAT_SUSPENDED, $sid);
?>
<p>Your progress has been saved.  You may return at any time to complete this survey. To do so, simply bookmark the link below. 
    You may be prompted for your username and password to complete the survey.') ?></p>

<a href="<?php echo $url; ?>">Resume survey</a>&nbsp;

<?php 
    if ($GLOBALS['ESPCONFIG']['dashboard_enable']) {
        echo '<a href="'.$base.'/public/">Go to my surveys</a>';
    }
    return;
}

//  esp_require_once()          
//  xWrap include file loading, so that paths are resolved centrally

function esp_require_once($path) {
    global $base,
    $cfg =& $GLOBALS['ESPCONFIG'];

    // expose the global 'ESPCONFIG' as if it were local
    $ESPCONFIG = $GLOBALS['ESPCONFIG'];

    // load the file in
    require_once($ESPCONFIG['include_path'] . $path . $ESPCONFIG['extension']);

    return true;
}

function esp_file_get_contents($file) {
    global $base,
    $cfg =& $GLOBALS['ESPCONFIG'];

    if (function_exists('file_get_contents')) return file_get_contents($file);

    $f = fopen($file,'r');
    if (!$f) return '';
    $t = '';

    while ($s = fread($f,100000)) $t .= $s;
    fclose($f);
    return $t;
}

function check_checksum($file) {
    global $base,
    $cfg =& $GLOBALS['ESPCONFIG'];

    $checksum=trim(esp_file_get_contents($file.".checksum"));
    if (md5_file($file) != $checksum) {
        $file=str_replace(ESP_BASE,"",$file);
        print mkwarn("WARNING: Checksum for file $file doesn't match");
    }
}

require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/include/lib/espcross.inc';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/include/lib/espauth.inc';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/include/lib/esphtml.forms.inc';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/include/lib/esphtml.results.inc';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/include/lib/espmerge.inc';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/include/lib/espresponse.inc';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/include/lib/espsql.inc';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/include/lib/espdatalib.inc';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/include/function/survey_copy.inc';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/include/function/survey_merge.inc';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/include/function/survey_purge.inc';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/include/function/survey_render.inc';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/include/function/survey_report.inc';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/include/function/survey_results.inc';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/include/function/survey_update.inc';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/include/function/survey_export_csv.inc';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/include/function/account_upload.inc';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/include/function/response_purge.inc';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/include/function/question_render.inc';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/include/function/question_conditioncheck.inc';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/include/function/db_update.inc';

//esp_require_once('/lib/espcross');
//esp_require_once('/lib/espauth');
//esp_require_once('/lib/esphtml.forms');
//esp_require_once('/lib/esphtml.results');
//esp_require_once('/lib/espmerge');
//esp_require_once('/lib/espresponse');
//esp_require_once('/lib/espsql');
//esp_require_once('/lib/espdatalib');
//esp_require_once('/function/survey_copy');
//esp_require_once('/function/survey_merge');
//esp_require_once('/function/survey_purge');
//esp_require_once('/function/survey_render');
//esp_require_once('/function/survey_report');
//esp_require_once('/function/survey_results');
//esp_require_once('/function/survey_update');
//esp_require_once('/function/survey_export_csv');
//esp_require_once('/function/account_upload');
//esp_require_once('/function/response_purge');
//esp_require_once('/function/question_render');
//esp_require_once('/function/question_conditioncheck');
//esp_require_once('/function/db_update');

?>