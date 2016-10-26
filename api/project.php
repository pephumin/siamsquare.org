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


peDB::Serve('GET', '/(#num)/(#any)?', function ($id, $what) {
  $table = "j_projects";
  if ($what == "list") {
    $extended = sprintf('WHERE "%s" = ?', 'userid');
    $query = array(sprintf('SELECT * FROM "%s"', $table), $extended,);
    $query = sprintf('%s;', implode(' ', $query));
    $result = peDB::Query($query, $id);
    if ($result === false) { $result = peDB::$HTTP[404]; }
    else if (empty($result) === true) { $result = peDB::$HTTP[204]; }
  }
  else if ($what == "active") {
    $extended = sprintf('WHERE status < 3 AND "%s" = ?', 'userid');
    $query = array(sprintf('SELECT * FROM "%s"', $table), $extended,);
    $query = sprintf('%s;', implode(' ', $query));
    $result = peDB::Query($query, $id);
    if ($result === false) { $result = peDB::$HTTP[404]; }
    else if (empty($result) === true) { $result = peDB::$HTTP[204]; }
  }
  else if ($what == "archive") {
    $extended = sprintf('WHERE status = 3 AND "%s" = ?', 'userid');
    $query = array(sprintf('SELECT * FROM "%s"', $table), $extended,);
    $query = sprintf('%s;', implode(' ', $query));
    $result = peDB::Query($query, $id);
    if ($result === false) { $result = peDB::$HTTP[404]; }
    else if (empty($result) === true) { $result = peDB::$HTTP[204]; }
  }
  else if ($what == "new") {
    $content = '{ "title": "'.$_GET['name'].'", "userid": '.$id.', "status": 1, "postid": 1, "resultid": 1, "cookie": "false" }';
    $pp = json_decode($content, true);
    $data = [];
    foreach ($pp as $key => $value) { $data[sprintf('"%s"', $key)] = $value; }
    $query = array (sprintf('INSERT INTO "%s" (%s) VALUES (%s)', $table, implode(', ', array_keys($data)), implode(', ', array_fill(0, count($data), '?'))), );
    $queries[] = array (sprintf('%s;', implode(' ', $query)), $data, );
    if (count($queries) > 1) {
      peDB::Query()->beginTransaction();
      while (is_null($query = array_shift($queries)) !== true) { if (($result = peDB::Query($query[0], $query[1])) === false) { peDB::Query()->rollBack(); break; } }
      if (($result !== false) && (peDB::Query()->inTransaction() === true)) { $result = peDB::Query()->commit(); }
    }
    else if (is_null($query = array_shift($queries)) !== true) { $result = peDB::Query($query[0], $query[1]); }
    if ($result === false) { $result = peDB::$HTTP[409]; }
    else { $result = peDB::$HTTP[201]; }
    $extended = sprintf('ORDER BY "%s" DESC LIMIT 1', 'id');
    $query = array(sprintf('SELECT * FROM "%s"', $table), $extended,);
    $query = sprintf('%s;', implode(' ', $query));
    $result = peDB::Query($query);
    if ($result === false) { $result = peDB::$HTTP[404]; }
    else if (empty($result) === true) { $result = peDB::$HTTP[204]; }
    $result = array_shift($result);
  }
  return peDB::Reply($result);
});

peDB::Serve('DELETE', '/(#num)', function ($id) {
  $table = "j_projects";
  $query = array (sprintf('DELETE FROM "%s" WHERE "%s" = ?', $table, 'id'), );
  $query = sprintf('%s;', implode(' ', $query));
  $result = peDB::Query($query, $id);
  if ($result === false) { $result = peDB::$HTTP[404]; }
  else if (empty($result) === true) { $result = peDB::$HTTP[204]; }
  else { $result = peDB::$HTTP[200]; }
  return peDB::Reply($result);
});

peDB::Serve('PUT', '/(#num)/(#any)', function ($id, $what) {
  $table = "j_projects";
  $put = file_get_contents('php://input');
  if (($what == "rename") || ($what == "movetoarchive") || ($what == "movetoactive")) {
    $pp = json_decode($put, true);
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
