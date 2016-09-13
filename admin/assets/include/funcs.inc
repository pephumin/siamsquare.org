<?php

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
    $cfg =& $GLOBALS['ESPCONFIG'];
    if(empty($where))
        $where = 'index';
    $where = strtolower(preg_replace('/ +/','_',$where));
    if(!preg_match('/^[A-Za-z0-9_]+$/',$where))    // Valid chars are [A-Za-z0-9_]
        $where = 'index';
    $filecheck = $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/where/'.$where.'.inc';
    if(!file_exists($filecheck))
        $where = 'index';
    if(!file_exists($filecheck)) { echo('<b>Unable to open include file. Check INI settings. Aborting.</b>'); exit; }
    return($filecheck);
}

function esp_init_adodb() {
    $cfg =& $GLOBALS['ESPCONFIG'];
    $dbcheck = $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/lib/adodb/adodb.inc.php';

    if (!file_exists($dbcheck)) { echo('<b>Unable to open ADODB include file. Check INI settings. Aborting.</b>'); exit; }
    else { include $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/lib/adodb/adodb.inc.php'; }

    if (isset($cfg['adodb_conn'])) { return; }

    $cfg['adodb_conn'] = &ADONewConnection($cfg['adodb_database_type']);
    error_reporting(0);  // Hide errors

    //$cfg['adodb_conn']->debug=1;
    if ($cfg['adodb_database_type'] == "sqlite") {
        $dbconnected = $cfg['adodb_conn']->Connect($cfg['adodb_pathto_db']);
    } else {
        if (!isset($cfg['adodbi_persist']) or (isset($cfg['adodb_persist']) && $cfg['adodb_persist'])) {
            // Use persistent connection (default)
            $dbconnected = $cfg['adodb_conn']->PConnect($cfg['db_host'], $cfg['db_user'], $cfg['db_pass'], $cfg['db_name']);
        } else {
            // Use single connection
            $dbconnected = $cfg['adodb_conn']->Connect($cfg['db_host'], $cfg['db_user'], $cfg['db_pass'], $cfg['db_name']);
        }
    }

    // pe adds utf-8
    $charset = "SET NAMES utf8";
    mysql_query($charset) or die('Invalid query: ' . mysql_error());

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

function goto_thankyou($sid,$referer) {

    // submitting a survey for good
    require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/lib/espsurveystat.inc';

    survey_stat_decrement(SURVEY_STAT_ABANDONED, $sid);
    survey_stat_increment(SURVEY_STAT_COMPLETED, $sid);

    // render the thank you page
    $cfg =& $GLOBALS['ESPCONFIG'];

    //$sql = "SELECT thanks_page,thank_head,thank_body FROM ".$cfg['survey_table']." WHERE id=${sid}";
    $sql = "SELECT thank_head,thank_head_th,thank_body,thank_body_th FROM ".$cfg['survey_table']." WHERE id=${sid}";
    $result = execute_sql($sql);
    //list($thank_url,$thank_head,$thank_body) = fetch_row($result);
    list($thank_head,$thank_head_th,$thank_body,$thank_body_th) = fetch_row($result);
    db_close($result);

    //$thank_url = str_replace("\r", '', $thank_url);
    //$thank_url = str_replace("%0d", '', $thank_url);
    //$thank_url = str_replace("\n", '', $thank_url);
    //$thank_url = str_replace("%0a", '', $thank_url);
    //$thank_url = str_replace("\t", '', $thank_url);
    //$thank_url = str_replace("\0", '', $thank_url);
    //if(!empty($thank_url)) {
    //    if(!headers_sent()) {
    //        header("Location: $thank_url");
    //        exit;
    //    }
    //    exit;
    //}

    //if(empty($thank_body) && empty($thank_head)) {
    //    $thank_body = $GLOBALS['ESPCONFIG']['thank_body'];
    //    $thank_head = $GLOBALS['ESPCONFIG']['thank_head'];
    //}

    //$redir = $GLOBALS['ESPCONFIG']['base_url'] . '/public';
    echo "<h2>Congratulations! You have just completed this survey.</h2>\n\n";
    echo "<p><i class=\"fa fa-check-square-o fa-4x\"></i></p>\n\n";
    echo "<table class=\"table\">\n";
    echo "<tr><td>\n";
    echo "<h4>$thank_head</h4>\n";
    echo "<p>$thank_body</p>\n";
    echo "</td><td>\n";
    echo "<h4>$thank_head_th</h4>\n";
    echo "<p>$thank_body_th</p>\n";
    echo "</td></tr>\n";
    echo "</table>\n";

    if (isset($_GET['where']) && $_GET['where'] == 'test') {
       if ($GLOBALS['ESPCONFIG']['limit_double_postings'] == 0) { $ref = "<a href=\"". $referer."\">Return</a><br />"; }
       else { $ref = ""; }
    } else {
       $ref = check_referer($referer);
    }
    echo $ref;
    return;
}

function check_referer($referer) {
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

//  Go to a different URL, using the best method possible given the current output state

function blur($url, $forwardingLabel = 'Please click here to continue...') {
    // close the session, as it's no longer needed and we don't want to delay waiters
    session_write_close();

    // make sure the URL is absolute, as the Location: header requires it
    if (0 !== strpos($url, 'http')) {
        $url = rtrim($GLOBALS['ESPCONFIG']['base_url'], '/') . '/' . ltrim($url, '/');
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

    if ($_REQUEST['test']) { $url = $url."&test=1"; }

    require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/lib/espsurveystat.inc';
    survey_stat_decrement(SURVEY_STAT_ABANDONED, $sid);
    survey_stat_increment(SURVEY_STAT_SUSPENDED, $sid);
?>

<h2>Your survey has been saved</h2>

<br />

<p>Your progress has been saved. You may return at any time to complete this survey.</p>

<p>To do so, simply bookmark the link below.</p>

<p>You may be prompted for your username and password to complete the survey.</p>

<br />

<a href="<?php echo $url; ?>" class="btn btn-success" role="button">Continue survey</a>&nbsp;

<a href="<?php echo $GLOBALS['ESPCONFIG']['base_url'] . '/public'; ?>" class="btn btn-default" role="button">Back to Dashboard</a>

<?php
    return;
}

//  esp_require_once()
//  xWrap include file loading, so that paths are resolved centrally

function esp_require_once($path) {
    // expose the global 'ESPCONFIG' as if it were local
    $ESPCONFIG = $GLOBALS['ESPCONFIG'];

    // load the file in
    require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include' . $path . '.inc';
    //require_once($ESPCONFIG['include_path'] . $path . $ESPCONFIG['extension']);

    return true;
}

function esp_file_get_contents($file) {
    if (function_exists('file_get_contents')) return file_get_contents($file);

    $f = fopen($file,'r');
    if (!$f) return '';
    $t = '';

    while ($s = fread($f,100000)) $t .= $s;
    fclose($f);
    return $t;
}

function check_checksum($file) {
    $checksum=trim(esp_file_get_contents($file.".checksum"));
    if (md5_file($file) != $checksum) {
        $file=str_replace(ESP_BASE,"",$file);
        print mkwarn("WARNING: Checksum for file $file doesn't match");
    }
}

function remove_magic_quotes($input) {
    if(get_magic_quotes_gpc()) $input= stripslashes($input);
    return $input;
}

require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/lib/espcross.inc';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/lib/espauth.inc';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/lib/esphtml.forms.inc';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/lib/esphtml.results.inc';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/lib/espmerge.inc';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/lib/espresponse.inc';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/lib/espsql.inc';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/lib/espdatalib.inc';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/function/survey_copy.inc';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/function/survey_merge.inc';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/function/survey_purge.inc';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/function/survey_render.inc';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/function/survey_report.inc';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/function/survey_results.inc';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/function/survey_update.inc';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/function/survey_export_csv.inc';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/function/account_upload.inc';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/function/response_purge.inc';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/function/question_render.inc';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/function/question_conditioncheck.inc';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/function/db_update.inc';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/function/ssq.inc';

?>
