<?php

$_SERVER['BASE_PAGE'] = 'index.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/include/template.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/config/config.php';

/* now let's check if we have the extension needed to connect to the db */
if(!extension_loaded($ESPCONFIG['adodb_database_type'])) {
    echo('<b>FATAL: Mysql extension not loaded. Aborting.</b>');
    exit;
}

esp_init_adodb();

if(get_cfg_var('register_globals')) {
    $_SESSION['acl'] = &$acl;
}

$db_version = get_dbversion();
$where = '';
if (version_compare($db_version,"0.0.0","eq")) {
    $where="install";
} elseif($ESPCONFIG['auth_design']) {
    if ($ESPCONFIG['auth_mode'] == 'basic') {
        $raw_password = @$_SERVER['PHP_AUTH_PW'];
        $username = @$_SERVER['PHP_AUTH_USER'];
    }
    elseif ($ESPCONFIG['auth_mode'] == 'form') {
        if (isset($_POST['Login'])) {
            if (!isset($_POST['username'])) {
                $username = "";
            }
            if ($_POST['username'] != "") {
                $_SESSION['username'] = $_POST['username'];
            }
            if (!isset($_POST['password'])) {
                $password = "";
            }
            if ($_POST['password'] != "") {
                $_SESSION['raw_password'] = $_POST['password'];
            }
        }
        if (isset($_SESSION['username'])) {
            $username = $_SESSION['username'];
        }
        else {
            $username = "";
        }
        if (isset($_SESSION['raw_password'])) {
            $raw_password = $_SESSION['raw_password'];
        }
        else {
            $raw_password = "";
        }
    }
    $password = _addslashes($raw_password);
    if(!manage_auth($username, $password, $raw_password))
    exit;
} else {
    $_SESSION['acl'] = array (
        'username'  => 'none',
        'pdesign'   => array('none'),
        'pdata'     => array('none'),
        'pstatus'   => array('none'),
        'pall'      => array('none'),
        'pgroup'    => array('none'),
        'puser'     => array('none'),
        'superuser' => 'Y',
        'disabled'  => 'N'
    );
}

if(empty($where) && isset($_REQUEST['where']))
   $where = $_REQUEST['where'];

if ($where == 'download') {
    include(esp_where($where));
    exit;
}

$title = 'Management interface';
displayHeader($title);
displayNav();
displayPageHeader($title);
include(esp_where($where));
displayPageFooter();
displayFooter();

?>

