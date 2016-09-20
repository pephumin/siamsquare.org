<?php

############################################################################
#                                                                          #
#     ▄██ █▄   ▄█████  ▀██████▄  ▄█  ███▄▄▄▄    ▄█████    ▄█████ ▄█   ▄    #
#    ██   ██  ██   ██   ██   ██  ██  ██▀▀▀█▄   ██   ██   ██   ██ ██   █▄   #
#    ██   ██  ██   █▀   ██   ██  ██▌ ██   ██   ██   ██   ██   ██ ██▄▄▄██   #
#    ██   ██ ▄██▄▄▄    ▄██▄▄▄█▀  ██▌ ██   ██   ██   ██  ▄██▄▄▄█▀ ▀▀▀▀▀██   #
#  ▀██████▀ ▀▀██▀▀▀   ▀▀██▀▀▀█▄  ██▌ ██   ██ ▀████████ ▀▀██▀▀▀▀  ▄█   ██   #
#    ██       ██   █▄   ██   █▄  ██  ██   ██   ██   ██ ▀████████ ██   ██   #
#    ██       ██   ██   ██   ██  ██  ██   ██   ██   ██   ██   ██ ██   ██   #
#   ▄███▀     ███████ ▄███████▀  █▀  ▀█   █▀   ██   █▀   ██   ██  ▀████▀   #
#                                                             ██    ██     #
#                                                                          #
############################################################################

$db_host      = 'magenta.thaiweb.net';
$db_user      = 'sinbad';
$db_pass      = '2bbadd';
$db_database  = 'siamsquare';
$db_prefix    = 'x_';
$db_charset   = 'utf8';

require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/db/db-class.inc';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/db/db-object.inc';

$db = new MysqliDb (Array (
                'host' => $db_host,
                'username' => $db_user,
                'password' => $db_pass,
                'db'=> $db_database,
                'port' => 3306,
                'prefix' => $db_prefix,
                'charset' => 'utf8'));

if ($mysqli->connect_errno) {
  echo "Sorry, this website is experiencing problems.";
  echo "Error: Failed to make a MySQL connection, here is why: \n";
  echo "Errno: " . $mysqli->connect_errno . "\n";
  echo "Error: " . $mysqli->connect_error . "\n";
  exit;
}

$db->setPrefix($db_prefix);
error_reporting(E_ALL);

if (!$db->ping())
  $db->connect()


// ---------------------- OTHERS ---------------------- //


?>
