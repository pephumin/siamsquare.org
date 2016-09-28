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


// ---------------------- variables ---------------------- //

define('MYHOME',   "http://www.siamsquare.org");
define('MYADMIN',  MYHOME."/admin/");
define('MYPUBLIC', MYHOME."/public/");
define('MYSURVEY', MYHOME."/public/survey.php");
define('DOCROOT',  $_SERVER['DOCUMENT_ROOT']);
define('ME',       $_SERVER['PHP_SELF']);

define('DB_HOST',     "magenta.thaiweb.net");
define('DB_USER',     "sinbad");
define('DB_PASS',     "2bbadd");
define('DB_DATABASE', "siamsquare");
define('DB_PORT',     3306);
define('DB_CHARSET',  "utf8");

define('X_ACCESS',            'x_access');
define('X_DESIGNER',          'x_designer');
define('X_QUESTION',          'x_question');
define('X_QUESTION_CHOICE',   'x_question_choice');
define('X_QUESTION_TYPE',     'x_question_type');
define('X_REALM',             'x_realm');
define('X_RESPONDENT',        'x_respondent');
define('X_RESPONSE',          'x_response');
define('X_RESPONSE_BOOL',     'x_response_bool');
define('X_RESPONSE_DATE',     'x_response_date');
define('X_RESPONSE_MULTIPLE', 'x_response_multiple');
define('X_RESPONSE_OTHER',    'x_response_other');
define('X_RESPONSE_RANK',     'x_response_rank');
define('X_RESPONSE_RATING',   'x_response_rating');
define('X_RESPONSE_SINGLE',   'x_response_single');
define('X_RESPONSE_TEXT',     'x_response_text');
define('X_SURVEY',            'x_survey');
define('X_CONDITION',         'x_conditions');
define('X_SURVEY_STATISTICS', 'x_survey_statistics');
define('X_VERSION',           'x_version');

define('STATUS_EDIT',    0);
define('STATUS_ACTIVE',  1);
define('STATUS_DONE',    2);
define('STATUS_DELETED', 4);
define('STATUS_TEST',    8);

define('SURVEY_STAT_LOGINFAIL', 'loginfail');
define('SURVEY_STAT_ATTEMPTED', 'attempted');
define('SURVEY_STAT_ABANDONED', 'abandoned');
define('SURVEY_STAT_SUSPENDED', 'suspended');
define('SURVEY_STAT_COMPLETED', 'completed');

define('STATUS_OPEN',             0);
define('STATUS_CLOSED_TOO_EARLY', 1);
define('STATUS_CLOSED_TOO_LATE',  2);


$db = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_DATABASE);

if ($mysqli->connect_errno) {
  echo "Sorry, MySQLi error\n";
  echo "Errno: " . $mysqli->connect_errno . "\n";
  echo "Error: " . $mysqli->connect_error . "\n";
  exit;
}

error_reporting(E_ALL);

if (!$db->ping()) { $db->connect(); }

?>
