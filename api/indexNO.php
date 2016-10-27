<?php

require_once './config.inc';
$dsn = 'mysql://'.DB_USER.':'.DB_PASS.'@'.DB_HOST.'/'.DB_DATABASE.'/';
// $clients = array
// (
//     '127.0.0.1',
//     '127.0.0.2',
//     '127.0.0.3',
// )

if (strcmp(PHP_SAPI, 'cli') === 0) { exit('peDB should not be run from CLI.' . PHP_EOL); }
if ((empty($clients) !== true) && (in_array($_SERVER['REMOTE_ADDR'], (array) $clients) !== true)) { exit(peDB::Reply(peDB::$HTTP[403])); }
else if (peDB::Query($dsn) === false) { exit(peDB::Reply(peDB::$HTTP[503])); }
if (array_key_exists('_method', $_GET) === true) { $_SERVER['REQUEST_METHOD'] = strtoupper(trim($_GET['_method'])); }
else if (array_key_exists('HTTP_X_HTTP_METHOD_OVERRIDE', $_SERVER) === true) { $_SERVER['REQUEST_METHOD'] = strtoupper(trim($_SERVER['HTTP_X_HTTP_METHOD_OVERRIDE'])); }

// URL: /survey/1/data (show data of surveyid #1)
// URL: /result/27/data (show result of surveyid #27)
// URL: /user/4/mobile (show mobile number of userid #4)
// URL: /respondent/17/lastlogin (show lastlogin of respondentid #17)

peDB::Serve('GET', '/(#any)/(#any)/(#any)', function ($what, $id, $col) {
  if ($what == "survey") { $table = "j_projects"; $extended = sprintf('WHERE "%s" = ? ', 'id'); }
  else if ($what == "result") { $table = "j_results"; $extended = sprintf('WHERE "%s" = ? ', 'surveyid'); }
  else if ($what == "user") { $table = "j_users"; $extended = sprintf('WHERE "%s" = ? ', 'id'); }
  else if ($what == "respondent") { $table = "j_respondents"; $extended = sprintf('WHERE "%s" = ? ', 'id'); }
  else { $result = peDB::$HTTP[404]; }
  $query = array(sprintf('SELECT "%s" FROM "%s"', $col, $table), $extended,);
  $query = sprintf('%s;', implode(' ', $query));
  $result = peDB::Query($query, $id);
  foreach($result as $r) {
    $result = $r[$col];
    $result = str_replace("  ", "", $result);
    $result = str_replace("\r\n", "", $result);
    $result = str_replace("\\n", "", $result);
    $result = str_replace("\\", "", $result);
  }
  if ($result === false) { $result = peDB::$HTTP[404]; }
  else if (empty($result) === true) { $result = peDB::$HTTP[204]; }
  return peDB::Reply($result);
});


// URL: /survey/7 (show all info of surveyid #7)
// URL: /result/21 (show all results of surveyid #21)
// URL: /user/8 (show all info of userid #8)
// URL: /respondent/37 (show all info of respondentid #37)

peDB::Serve('GET', '/(#any)/(#num)?', function ($what, $id = null) {
  if ($what == "survey") { $table = "j_projects"; $extended = sprintf('WHERE "%s" = ? ', 'id'); }
  else if ($what == "result") { $table = "j_results"; $extended = sprintf('WHERE "%s" = ? ', 'surveyid'); }
  else if ($what == "user") { $table = "j_users"; $extended = sprintf('WHERE "%s" = ? ', 'id'); }
  else if ($what == "respondent") { $table = "j_respondents"; $extended = sprintf('WHERE "%s" = ? ', 'id'); }
  else if ($what == "active") { $table = "j_projects"; $extended = sprintf('WHERE "status" < 3 AND "%s" = ? ', 'userid'); }
  else if ($what == "archive") { $table = "j_projects"; $extended = sprintf('WHERE "status" = 3 AND "%s" = ? ', 'userid'); }
  else { $result = peDB::$HTTP[404]; }
  $query = array ( sprintf('SELECT * FROM "%s"', $table), );
  if (isset($id) === true) { $query[] = $extended; }
  $query = sprintf('%s;', implode(' ', $query));
  // print_r($query);
  $result = (isset($id) === true) ? peDB::Query($query, $id) : peDB::Query($query);
  // print_r($result);
  if ($table == "j_projects") {
    for($i = 0; $i < count($result); ++$i) {
      // $result[$i]['data'] = str_replace("  ", "", $result[$i]['data']);
      // $result[$i]['data'] = str_replace("\r\n", "", $result[$i]['data']);
      // $result[$i]['data'] = str_replace("\\n\\n", "", $result[$i]['data']);
    }
  }
  if ($result === false) { $result = peDB::$HTTP[404]; }
  else if (empty($result) === true) { $result = peDB::$HTTP[204]; }
  if (($what == "survey") || ($what == "user") || ($what == "respondent") && (isset($id) === true)) { $result = array_shift($result); }
  return peDB::Reply($result);
});

// peDB::Serve('DELETE', '/(#any)/(#num)', function ($table, $id) {
//   $query = array (sprintf('DELETE FROM "%s" WHERE "%s" = ?', $table, 'id'), );
//   $query = sprintf('%s;', implode(' ', $query));
//   $result = peDB::Query($query, $id);
//   if ($result === false) { $result = peDB::$HTTP[404]; }
//   else if (empty($result) === true) { $result = peDB::$HTTP[204]; }
//   else { $result = peDB::$HTTP[200]; }
//   return peDB::Reply($result);
// });

// Update survey data via surveyeditor.js
peDB::Serve('PUT', '/(#any)/(#num)', function ($table, $id) {
  $put = file_get_contents('php://input');
  if ($put) {
    $extended = sprintf('WHERE "%s" = ?', 'id');
    $pp = json_decode($put, true);
    $table = "j_projects";
    $data = [];
    foreach ($pp as $key => $value) { $data[$key] = sprintf('"%s" = ?', $key); }
    $query = array(sprintf('UPDATE "%s" SET %s WHERE "%s" = ?', $table, implode(', ', $data), 'id'),);
    $query = sprintf('%s;', implode(' ', $query));
  }
  // print_r($query);
  $result = peDB::Query($query, $pp, $id);
  if ($result === false) { $result = peDB::$HTTP[409]; }
  else { $result = peDB::$HTTP[200]; }
  return peDB::Reply($result);
});

peDB::Serve('POST', '/', function() {
  $post = file_get_contents('php://input');
  if ($post) {
    $pp = json_decode($post, true);
    $table = "j_results";
    $data = [];
    foreach ($pp as $key => $value) { $data[sprintf('"%s"', $key)] = $value; }
    $query = array (sprintf('INSERT INTO "%s" (%s) VALUES (%s)', $table, implode(', ', array_keys($data)), implode(', ', array_fill(0, count($data), '?'))), );
    $queries[] = array (sprintf('%s;', implode(' ', $query)), $data, );
  }
  // print_r($query);
  // print_r($queries);
  if (count($queries) > 1) {
    peDB::Query()->beginTransaction();
    while (is_null($query = array_shift($queries)) !== true) { if (($result = peDB::Query($query[0], $query[1])) === false) { peDB::Query()->rollBack(); break; } }
    if (($result !== false) && (peDB::Query()->inTransaction() === true)) { $result = peDB::Query()->commit(); }
  }
  else if (is_null($query = array_shift($queries)) !== true) { $result = peDB::Query($query[0], $query[1]); }
  if ($result === false) { $result = peDB::$HTTP[409]; }
  else { $result = peDB::$HTTP[201]; }
  return peDB::Reply($result);
});

exit(peDB::Reply(peDB::$HTTP[400]));

class peDB {
  public static $HTTP = [
    200 => [ 'success' => [ 'code' => 200, 'status' => 'OK', ], ],
    201 => [ 'success' => [ 'code' => 201, 'status' => 'Created', ], ],
    204 => [ 'error' => [ 'code' => 204, 'status' => 'No Content', ], ],
    400 => [ 'error' => [ 'code' => 400, 'status' => 'Bad Request', ], ],
    403 => [ 'error' => [ 'code' => 403, 'status' => 'Forbidden', ], ],
    404 => [ 'error' => [ 'code' => 404, 'status' => 'Not Found', ], ],
    409 => [ 'error' => [ 'code' => 409, 'status' => 'Conflict', ], ],
    503 => [ 'error' => [ 'code' => 503, 'status' => 'Service Unavailable', ], ],
  ];

  public static function Query($query = null) {
    static $db = null;
    static $result = [];
    try {
      if (isset($db, $query) === true) {
        if (strncasecmp($db->getAttribute(\PDO::ATTR_DRIVER_NAME), 'mysql', 5) === 0) { $query = strtr($query, '"', '`'); }
        if (empty($result[$hash = crc32($query)]) === true) { $result[$hash] = $db->prepare($query); }
        $data = array_slice(func_get_args(), 1);
        if (count($data, COUNT_RECURSIVE) > count($data)) { $data = iterator_to_array(new \RecursiveIteratorIterator(new \RecursiveArrayIterator($data)), false); }
        if ($result[$hash]->execute($data) === true) {
          $sequence = null;
          if ((strncmp($db->getAttribute(\PDO::ATTR_DRIVER_NAME), 'pgsql', 5) === 0) && (sscanf($query, 'INSERT INTO %s', $sequence) > 0)) { $sequence = sprintf('%s_id_seq', trim($sequence, '"')); }
          switch (strstr($query, ' ', true)) {
            case 'INSERT':
            case 'REPLACE':
              return $db->lastInsertId($sequence);
            case 'UPDATE':
            case 'DELETE':
              return $result[$hash]->rowCount();
            case 'SELECT':
            case 'EXPLAIN':
            case 'PRAGMA':
            case 'SHOW':
              return $result[$hash]->fetchAll();
          }
          return true;
        }
        return false;
      }
      else if (isset($query) === true) {
        $options = array (
          \PDO::ATTR_CASE => \PDO::CASE_NATURAL,
          \PDO::ATTR_DEFAULT_FETCH_MODE => \PDO::FETCH_ASSOC,
          \PDO::ATTR_EMULATE_PREPARES => false,
          \PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION,
          \PDO::ATTR_ORACLE_NULLS => \PDO::NULL_NATURAL,
          \PDO::ATTR_STRINGIFY_FETCHES => false,
        );
        if (preg_match('~^sqlite://([[:print:]]++)$~i', $query, $dsn) > 0) {
          $options += array (
            \PDO::ATTR_TIMEOUT => 3,
          );
          $db = new \PDO(sprintf('sqlite:%s', $dsn[1]), null, null, $options);
          $pragmas = array (
            'automatic_index' => 'ON',
            'cache_size' => '8192',
            'foreign_keys' => 'ON',
            'journal_size_limit' => '67110000',
            'locking_mode' => 'NORMAL',
            'page_size' => '4096',
            'recursive_triggers' => 'ON',
            'secure_delete' => 'ON',
            'synchronous' => 'NORMAL',
            'temp_store' => 'MEMORY',
            'journal_mode' => 'WAL',
            'wal_autocheckpoint' => '4096',
          );
          if (strncasecmp(PHP_OS, 'WIN', 3) !== 0) {
            $memory = 131072;
            if (($page = intval(shell_exec('getconf PAGESIZE'))) > 0) { $pragmas['page_size'] = $page; }
            if (is_readable('/proc/meminfo') === true) {
              if (is_resource($handle = fopen('/proc/meminfo', 'rb')) === true) {
                while (($line = fgets($handle, 1024)) !== false) { if (sscanf($line, 'MemTotal: %d kB', $memory) == 1) { $memory = round($memory / 131072) * 131072; break; } } fclose($handle);
              }
            }
            $pragmas['cache_size'] = intval($memory * 0.25 / ($pragmas['page_size'] / 1024));
            $pragmas['wal_autocheckpoint'] = $pragmas['cache_size'] / 2;
          }
          foreach ($pragmas as $key => $value) { $db->exec(sprintf('PRAGMA %s=%s;', $key, $value)); }
        }
        else if (preg_match('~^(mysql|pgsql)://(?:(.+?)(?::(.+?))?@)?([^/:@]++)(?::(\d++))?/(\w++)/?$~i', $query, $dsn) > 0) {
          if (strncasecmp($query, 'mysql', 5) === 0) {
            $options += array (
              \PDO::ATTR_AUTOCOMMIT => true,
              \PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES "utf8" COLLATE "utf8_unicode_ci", time_zone = "+00:00";',
              \PDO::MYSQL_ATTR_USE_BUFFERED_QUERY => true,
            );
          }
          $db = new \PDO(sprintf('%s:host=%s;port=%s;dbname=%s', $dsn[1], $dsn[4], $dsn[5], $dsn[6]), $dsn[2], $dsn[3], $options);
        }
      }
    }
    catch (\Exception $exception) { return false; }
    return (isset($db) === true) ? $db : false;
  }

  public static function Reply($data) {
    $bitmask = 0;
    $options = ['UNESCAPED_SLASHES', 'UNESCAPED_UNICODE'];
    if (empty($_SERVER['HTTP_X_REQUESTED_WITH']) === true) { $options[] = 'PRETTY_PRINT'; }
    foreach ($options as $option) { $bitmask |= (defined('JSON_' . $option) === true) ? constant('JSON_' . $option) : 0; }
    if (($result = json_encode($data, $bitmask)) !== false) {
      $callback = null;
      if (array_key_exists('callback', $_GET) === true) {
        $callback = trim(preg_replace('~[^[:alnum:]\[\]_.]~', '', $_GET['callback']));
        if (empty($callback) !== true) { $result = sprintf('%s(%s);', $callback, $result); }
      }
      if (headers_sent() !== true) { header(sprintf('Content-Type: application/%s; charset=utf-8', (empty($callback) === true) ? 'json' : 'javascript')); }
    }
    // added by pe - 22 October 2016
    if (substr($_SERVER['PATH_INFO'], -4) == 'data') {
      $result = str_replace("\\n", "", $result);
      $result = str_replace("\\", "", $result);
    }
    $result = trim($result, '"');
    return $result;
  }

  public static function Serve($on = null, $route = null, $callback = null) {
    static $root = null;
    if (isset($_SERVER['REQUEST_METHOD']) !== true) { $_SERVER['REQUEST_METHOD'] = 'CLI'; }
    if ((empty($on) === true) || (strcasecmp($_SERVER['REQUEST_METHOD'], $on) === 0)) {
      if (is_null($root) === true) { $root = preg_replace('~/++~', '/', substr($_SERVER['PHP_SELF'], strlen($_SERVER['SCRIPT_NAME'])) . '/'); }
      if (preg_match('~^' . str_replace(['#any', '#num'], ['[^/]++', '[0-9]++'], $route) . '~i', $root, $parts) > 0) { return (empty($callback) === true) ? true : exit(call_user_func_array($callback, array_slice($parts, 1))); }
    }
    return false;
  }
}
