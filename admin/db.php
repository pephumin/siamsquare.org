<?php

require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/db/include.newDB.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/template.php';

$message = "";

$tables = Array (
  'config' => Array (
    'name' => "varchar(255) not null default ''",
    'value' => "longtext",
    'enable' => "varchar(1) not null default 'Y'",
    'unique key' => 'name (name)'
  )
);
$data = Array (
  'config' => Array (
    Array ('id' => '1',
      'name' => 'site_url',
      'value' => 'http://www.siamsquare.org',
      'enable' => 'Y',
    ),
    Array ('id' => '2',
      'name' => 'site_name',
      'value' => 'siamsquare',
      'enable' => 'Y',
    ),
    Array ('id' => '3',
      'name' => 'site_description',
      'value' => 'The Survey System of PE BINARY CO., LTD.',
      'enable' => 'Y',
    ),
    Array ('id' => '4',
      'name' => 'site_admin',
      'value' => 'siamsquare',
      'enable' => 'Y',
    ),
    Array ('id' => '5',
      'name' => 'site_email',
      'value' => 'survey@siamsquare.org',
      'enable' => 'Y',
    ),
    Array ('id' => '6',
      'name' => 'mail_server',
      'value' => 'localhost',
      'enable' => 'Y',
    ),
    Array ('id' => '7',
      'name' => 'mail_user',
      'value' => '',
      'enable' => 'Y',
    ),
    Array ('id' => '8',
      'name' => 'mail_passwd',
      'value' => '',
      'enable' => 'Y',
    ),
    Array ('id' => '9',
      'name' => 'mail_port',
      'value' => '110',
      'enable' => 'Y',
    ),
    Array ('id' => '10',
      'name' => 'format_date',
      'value' => '%A %-d %b %Y',
      'enable' => 'Y',
    ),
    Array ('id' => '11',
      'name' => 'format_time',
      'value' => '%H:%M %p (GMT %z)',
      'enable' => 'Y',
    ),
    Array ('id' => '12',
      'name' => 'STATUS_EDIT',
      'value' => '0x00',
      'enable' => 'Y',
    ),
    Array ('id' => '13',
      'name' => 'STATUS_ACTIVE',
      'value' => '0x01',
      'enable' => 'Y',
    ),
    Array ('id' => '14',
      'name' => 'STATUS_DONE',
      'value' => '0x02',
      'enable' => 'Y',
    ),
    Array ('id' => '15',
      'name' => 'STATUS_DELETED',
      'value' => '0x04',
      'enable' => 'Y',
    ),
    Array ('id' => '16',
      'name' => 'STATUS_TEST',
      'value' => '0x08',
      'enable' => 'Y',
    ),
    Array ('id' => '17',
      'name' => 'num_choice',
      'value' => '1',
      'enable' => 'Y',
    ),
    Array ('id' => '18',
      'name' => 'limit_double_postings',
      'value' => '3',
      'enable' => 'Y',
    ),
    Array ('id' => '19',
      'name' => 'use_captcha',
      'value' => '0',
      'enable' => 'Y'
    ),
    Array ('id' => '20',
      'name' => 'thank_head',
      'value' => 'Thank you for completing this survey.',
      'enable' => 'Y',
    ),
    Array ('id' => '21',
      'name' => 'thank_body',
      'value' => 'Please do not use the back button on your browser to go back.',
      'enable' => 'Y',
    ),
    Array ('id' => '22',
      'name' => 'path_admin',
      'value' => '/admin',
      'enable' => 'Y',
    ),
    Array ('id' => '23',
      'name' => 'path_public',
      'value' => '/public',
      'enable' => 'Y',
    ),
    Array ('id' => '24',
      'name' => 'path_handler',
      'value' => '/public/include/handler.php',
      'enable' => 'Y',
    ),
    Array ('id' => '25',
      'name' => 'path_handler-prefix',
      'value' => '/public/include/handler-prefix.php',
      'enable' => 'Y',
    ),
    Array ('id' => '26',
      'name' => 'path_survey',
      'value' => '/public/survey.php',
      'enable' => 'Y',
    )
  )
);

function pretty_print($array) {
  echo '<pre>';
  print_r($array);
  echo '</pre>';
}

function createTable($name, $data) {
  global $db;
  $db->rawQuery("DROP TABLE IF EXISTS $name");
  $q = "CREATE TABLE $name (id BIGINT(10) UNSIGNED PRIMARY KEY AUTO_INCREMENT";
  foreach ($data as $k => $v) {
      $q .= ", $k $v";
  }
  $q .= ")";
  $db->rawQuery($q);
}


$db->setTrace(true);


// rawQuery test
foreach ($tables as $name => $fields) {
  $db->rawQuery("DROP TABLE ".$db_prefix.$name);
  createTable ($db_prefix.$name, $fields);
}

if (!$db->ping()) {
  $message .= "db is not up<br>";
  exit;
} else {
  $message .= "db is up<br>";
}

foreach ($data as $name => $datas) {
  foreach ($datas as $d) {
    $id = $db->insert($name, $d);
    if ($id)
      $d['id'] = $id;
    else {
      echo "failed to insert: ".$db->getLastQuery() ."\n". $db->getLastError();
      exit;
    }
  }
}

$message .= "data inserted<br>";


// $db->where ("id", 1);
// $outputs = $db->getOne ("config");
// $message .= $outputs['id'];

$stats = $db->getOne ("config", "sum(id), count(*) as cnt");
$message .= "A total of ".$stats['cnt']." options in config found<br>";


// $insert = Array(
//   Array (
//     "name" => "pe1",
//     "value" => $db->func('SHA1(?)',Array ("2bbadd")),
//     "enable" => 'N'
//   ),
//   Array (
//     "name" => "pe2",
//     "value" => $db->now(),
//     "enable" => 'N'
//   ),
//   Array (
//     "name" => "pe3",
//     "value" => $db->now('+1Y'),
//     "enable" => 'N'
//   )
// );
// $ids = $db->insertMulti('config', $insert);
// if(!$ids) { $message .= 'insert failed: ' . $db->getLastError(). "\n\n";; }
// else { $message .= "new data has been inserted. Id=" . implode(', ', $ids) . "\n\n"; }


$message .= "\n\n".$db->getLastQuery() ."\n". $db->getLastError();



pageHeader("Testing DB");
echo '<p>' . $message . '</p>';

$cols = Array ("id", "name", "value", "enable");
$outputs = $db->get ("config", null, $cols);
if ($db->count > 0)
  foreach ($outputs as $o) {
    pretty_print($o);
  }

echo '<pre>';
pretty_print($db->trace);
echo '</pre>';
echo "All done\n";
echo "Memory usage: ".memory_get_peak_usage()."\n";
echo "\n\n";
echo "<h2>Server environment</h2>";
$indicesServer = array(
  'PHP_SELF', 'argv', 'argc', 'GATEWAY_INTERFACE', 'SERVER_ADDR', 'SERVER_NAME', 'SERVER_SOFTWARE',
  'SERVER_PROTOCOL', 'REQUEST_METHOD', 'REQUEST_TIME', 'REQUEST_TIME_FLOAT', 'QUERY_STRING',
  'DOCUMENT_ROOT', 'HTTP_ACCEPT', 'HTTP_ACCEPT_CHARSET', 'HTTP_ACCEPT_ENCODING', 'HTTP_ACCEPT_LANGUAGE',
  'HTTP_CONNECTION', 'HTTP_HOST', 'HTTP_REFERER', 'HTTP_USER_AGENT', 'HTTPS', 'REMOTE_ADDR', 'REMOTE_HOST',
  'REMOTE_PORT', 'REMOTE_USER', 'REDIRECT_REMOTE_USER', 'SCRIPT_FILENAME', 'SERVER_ADMIN', 'SERVER_PORT',
  'SERVER_SIGNATURE', 'PATH_TRANSLATED', 'SCRIPT_NAME', 'REQUEST_URI', 'PHP_AUTH_DIGEST', 'PHP_AUTH_USER',
  'PHP_AUTH_PW', 'AUTH_TYPE', 'PATH_INFO', 'ORIG_PATH_INFO'
);
echo '<table class="table table-hover">';
foreach ($indicesServer as $arg) {
  if (isset($_SERVER[$arg])) { echo '<tr><td width="30%">'.$arg.'</td><td>' . $_SERVER[$arg] . '</td></tr>'; }
  else { echo '<tr><td width="30%">'.$arg.'</td><td>-</td></tr>'; }
}
echo '</table>';

pageFooter();

?>
