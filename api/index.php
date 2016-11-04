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

$dsn = 'mysql://sinbad:2bbadd@magenta.thaiweb.net/siamsquare/';
$key = "aa5e1ab4-b0bf-4e82-8584-7cf4e9fdeaa8";
// $clients = array('203.121.145.99', '203.121.145.100', '203.121.145.120', '203.121.145.121')

################################################################################

// if ($_REQUEST('key') != $key) { exit(peDB::Reply(peDB::$HTTP[511])); }
if (strcmp(PHP_SAPI, 'cli') === 0) { exit('peDB should not be run from CLI.' . PHP_EOL); }
if ((empty($clients) !== true) && (in_array($_SERVER['REMOTE_ADDR'], (array) $clients) !== true)) { exit(peDB::Reply(peDB::$HTTP[403])); }
else if (peDB::Query($dsn) === false) { exit(peDB::Reply(peDB::$HTTP[503])); }
if (array_key_exists('_method', $_GET) === true) { $_SERVER['REQUEST_METHOD'] = strtoupper(trim($_GET['_method'])); }
else if (array_key_exists('HTTP_X_HTTP_METHOD_OVERRIDE', $_SERVER) === true) { $_SERVER['REQUEST_METHOD'] = strtoupper(trim($_SERVER['HTTP_X_HTTP_METHOD_OVERRIDE'])); }
header("Access-Control-Allow-Origin: http://www.siamsquare.org");

################################################################################

// URL: /survey/1/data (show data of surveyid #1)
peDB::Serve('GET', '/survey/(#num)/(#any)', function ($id, $what) {
  $table = "j_projects";
  $extended = sprintf('WHERE "%s" = ? LIMIT 1', 'id');
  $query = array(sprintf('SELECT "%s" FROM "%s"', $what, $table), $extended,);
  $query = sprintf('%s;', implode(' ', $query));
  $result = peDB::Query($query, $id);
  foreach($result as $r) {
    $result = $r[$what];
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
peDB::Serve('GET', '/survey/(#num)', function ($id = null) {
  $table = "j_projects";
  $extended = sprintf('WHERE "%s" = ? LIMIT 1', 'id');
  $query = array ( sprintf('SELECT * FROM "%s"', $table), );
  if (isset($id) === true) { $query[] = $extended; }
  $query = sprintf('%s;', implode(' ', $query));
  $result = (isset($id) === true) ? peDB::Query($query, $id) : peDB::Query($query);
  // for($i = 0; $i < count($result); ++$i) {
    // $result[$i]['data'] = str_replace("  ", "", $result[$i]['data']);
    // $result[$i]['data'] = str_replace("\r\n", "", $result[$i]['data']);
    // $result[$i]['data'] = str_replace("\\n\\n", "", $result[$i]['data']);
  // }
  if ($result === false) { $result = peDB::$HTTP[404]; }
  else if (empty($result) === true) { $result = peDB::$HTTP[204]; }
  $result = array_shift($result);
  return peDB::Reply($result);
});

// URL: /survey (show all info of all surveys)
peDB::Serve('GET', '/survey', function () {
  $table = "j_projects";
  $query = array ( sprintf('SELECT * FROM "%s"', $table), );
  $query = sprintf('%s;', implode(' ', $query));
  $result = (isset($id) === true) ? peDB::Query($query, $id) : peDB::Query($query);
  // for($i = 0; $i < count($result); ++$i) {
    // $result[$i]['data'] = str_replace("  ", "", $result[$i]['data']);
    // $result[$i]['data'] = str_replace("\r\n", "", $result[$i]['data']);
    // $result[$i]['data'] = str_replace("\\n\\n", "", $result[$i]['data']);
  // }
  if ($result === false) { $result = peDB::$HTTP[404]; }
  else if (empty($result) === true) { $result = peDB::$HTTP[204]; }
  //$result = array_shift($result);
  return peDB::Reply($result);
});

// Get survey info by different type of survey by userid
peDB::Serve('GET', '/user/(#num)/(#any)', function ($id, $what) {
  $table = "j_projects";
  // URL: /user/1/A (listing type A surveys for userid 1)
  if ($what == "A") {
    $extended = sprintf('WHERE status = 1 AND "%s" = ? ORDER BY "%s" DESC', 'userid', 'updated');
    $query = array(sprintf('SELECT * FROM "%s"', $table), $extended,);
    $query = sprintf('%s;', implode(' ', $query));
    $result = peDB::Query($query, $id);
    if ($result === false) { $result = peDB::$HTTP[404]; }
    else if (empty($result) === true) { $result = peDB::$HTTP[204]; }
  }
  // URL: /user/1/B (listing type B surveys for userid #1)
  else if ($what == "B") {
    $extended = sprintf('WHERE status = 2 AND "%s" = ? ORDER BY "%s" DESC', 'userid', 'updated');
    $query = array(sprintf('SELECT * FROM "%s"', $table), $extended,);
    $query = sprintf('%s;', implode(' ', $query));
    $result = peDB::Query($query, $id);
    if ($result === false) { $result = peDB::$HTTP[404]; }
    else if (empty($result) === true) { $result = peDB::$HTTP[204]; }
  }
  // URL: /user/1/C (listing type C surveys for userid #1)
  else if ($what == "C") {
    $extended = sprintf('WHERE status = 3 AND "%s" = ? ORDER BY "%s" DESC', 'userid', 'updated');
    $query = array(sprintf('SELECT * FROM "%s"', $table), $extended,);
    $query = sprintf('%s;', implode(' ', $query));
    $result = peDB::Query($query, $id);
    if ($result === false) { $result = peDB::$HTTP[404]; }
    else if (empty($result) === true) { $result = peDB::$HTTP[204]; }
  }
  // URL: /user/1/D (listing type D surveys for userid #1)
  else if ($what == "D") {
    $extended = sprintf('WHERE status = 4 AND "%s" = ? ORDER BY "%s" DESC', 'userid', 'updated');
    $query = array(sprintf('SELECT * FROM "%s"', $table), $extended,);
    $query = sprintf('%s;', implode(' ', $query));
    $result = peDB::Query($query, $id);
    if ($result === false) { $result = peDB::$HTTP[404]; }
    else if (empty($result) === true) { $result = peDB::$HTTP[204]; }
  }
  // URL: /user/1/new?name=Title (create a new survey for userid #1 by the title given and apply all default settings)
  else if ($what == "new") {
    $content = '{ "title": "'.$_GET['name'].'", "userid": '.$id.', "status": 1, "cookie": "false" }';
    $pp = json_decode($content, true);
    $data = [];
    foreach ($pp as $key => $value) { $data[sprintf('"%s"', $key)] = $value; }
    // Register with a standard data from the template
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
    // Return query with new project inforamtion including surveyid
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

// URL: /user/1 (listing all surveys for userid #1)
peDB::Serve('GET', '/user/(#num)', function ($id) {
  $table = "j_projects";
  $extended = sprintf('WHERE "%s" = ? ORDER BY "%s" DESC', 'userid', 'updated');
  $query = array(sprintf('SELECT * FROM "%s"', $table), $extended,);
  $query = sprintf('%s;', implode(' ', $query));
  $result = peDB::Query($query, $id);
  if ($result === false) { $result = peDB::$HTTP[404]; }
  else if (empty($result) === true) { $result = peDB::$HTTP[204]; }
  return peDB::Reply($result);
});

// URL: /result/5/title (show data of surveyid #5)
peDB::Serve('GET', '/result/(#num)/(#any)', function ($id, $what) {
  $table = "j_results";
  $extended = sprintf('WHERE "%s" = ? AND "%s" = 1 ORDER BY "%s" DESC', 'surveyid', 'status', 'submitted');
  $query = array(sprintf('SELECT "%s" FROM "%s"', $what, $table), $extended,);
  $query = sprintf('%s;', implode(' ', $query));
  // echo $query;
  $result = peDB::Query($query, $id);
  for($i = 0; $i < count($result); ++$i) {
    $result[$i]['data'] = str_replace("  ", "", $result[$i]['data']);
    $result[$i]['data'] = str_replace("\r\n", "", $result[$i]['data']);
    $result[$i]['data'] = str_replace("\\n\\n", "", $result[$i]['data']);
  }
  if ($result === false) { $result = peDB::$HTTP[404]; }
  else if (empty($result) === true) { $result = peDB::$HTTP[204]; }
  // $result = array_shift($result);
  return peDB::Reply($result);
});

// URL: /result/raw/8 (listing only raw data for surveyid #8)
peDB::Serve('GET', '/result/raw/(#num)', function ($id) {
  $table = "j_results";
  $extended = sprintf('WHERE "%s" = ? AND "%s" = 1 ORDER BY "%s" DESC', 'surveyid', 'status', 'submitted');
  // $query = array(sprintf('SELECT id, rd, email, ip, submitted, data FROM "%s"', $table), $extended,);
  $query = array(sprintf('SELECT id, submitted, data FROM "%s"', $table), $extended,);
  $query = sprintf('%s;', implode(' ', $query));
  $ww = peDB::Query($query, $id);
  for($i=0; $i<count($ww); $i++) {
    $ww[$i]['data'] = json_decode($ww[$i]['data'], true);
    $ww[$i]['submitted'] = ago($ww[$i]['submitted']); 
  }
  $result = json_encode($ww);
  if ($result === false) { $result = peDB::$HTTP[404]; }
  else if (empty($result) === true) { $result = peDB::$HTTP[204]; }
  return peDB::Reply($result);
});

// URL: /result/focus/8 (listing only raw data for surveyid #8)
peDB::Serve('GET', '/result/focus/(#num)', function ($id) {
  $table = "j_results";
  $extended = sprintf('WHERE "%s" = ? AND "%s" = 1 ORDER BY "%s" DESC', 'surveyid', 'status', 'submitted');
  $query = array(sprintf('SELECT * FROM "%s"', $table), $extended,);
  $query = sprintf('%s;', implode(' ', $query));
  $ww = peDB::Query($query, $id);
  $a = array();
  foreach($ww as $k => $v) { array_push($a, json_decode($v['data'])); }
  $result = array_values($a);
  if ($result === false) { $result = peDB::$HTTP[404]; }
  else if (empty($result) === true) { $result = peDB::$HTTP[204]; }
  return peDB::Reply($result);
});

// URL: /result/8 (listing all results for surveyid #8)
peDB::Serve('GET', '/result/(#num)', function ($id) {
  $table = "j_results";
  $extended = sprintf('WHERE "%s" = ? AND "%s" = 1 ORDER BY "%s" DESC', 'surveyid', 'status', 'submitted');
  $query = array(sprintf('SELECT * FROM "%s"', $table), $extended,);
  $query = sprintf('%s;', implode(' ', $query));
  // echo $query;
  $result = peDB::Query($query, $id);
  if ($result === false) { $result = peDB::$HTTP[404]; }
  else if (empty($result) === true) { $result = peDB::$HTTP[204]; }
  return peDB::Reply($result);
});


################################################################################

// URL: /survey/7/delete (delete surveyid #7)
// peDB::Serve('DELETE', '/survey/(#num)/(#any)', function ($id, $what) {
//   $table = "j_projects";
//   $query = array (sprintf('DELETE FROM "%s" WHERE "%s" = ?', $table, 'id'), );
//   $query = sprintf('%s;', implode(' ', $query));
//   $result = peDB::Query($query, $id);
//   if ($result === false) { $result = peDB::$HTTP[404]; }
//   else if (empty($result) === true) { $result = peDB::$HTTP[204]; }
//   else { $result = peDB::$HTTP[200]; }
//   return peDB::Reply($result);
// });

################################################################################

// URL: /survey/1/rename (rename Title for surveyid #1)
// URL: /survey/4/movetoactive (move surveyid #4 to active)
// URL: /survey/2/updatedata (update data of surveyid #2 by surveyjseditor.js)
peDB::Serve('PUT', '/survey/(#num)/(#any)', function ($id, $what) {
  $table = "j_projects";
  $put = file_get_contents('php://input');
  if (($what == "rename") || ($what == "archive") || ($what == "restore") || ($what == "delete") || ($what == "updatedata")) {
    $pp = json_decode($put, true);
    $data = [];
    foreach ($pp as $key => $value) { $data[$key] = sprintf('"%s" = ?', $key); }
    $query = array(sprintf('UPDATE "%s" SET %s WHERE "%s" = ?', $table, implode(', ', $data), 'id'),);
    $query = sprintf('%s;', implode(' ', $query));
  }
  $result = peDB::Query($query, $pp, $id);
  if ($result === false) { $result = peDB::$HTTP[409]; }
  else { $result = peDB::$HTTP[200]; }
  return peDB::Reply($result);
});

################################################################################

// Submit survey result to the result table
peDB::Serve('POST', '/submit', function() {
  $post = file_get_contents('php://input');
  if ($post) {
    $pp = json_decode($post, true);
    $table = "j_results";
    $data = [];
    foreach ($pp as $key => $value) { $data[sprintf('"%s"', $key)] = $value; }
    $query = array (sprintf('INSERT INTO "%s" (%s) VALUES (%s)', $table, implode(', ', array_keys($data)), implode(', ', array_fill(0, count($data), '?'))), );
    $queries[] = array (sprintf('%s;', implode(' ', $query)), $data, );
  }
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

// Log user actions
peDB::Serve('POST', '/log', function() {
  $post = file_get_contents('php://input');
  if ($post) {
    $pp = json_decode($post, true);
    $table = "j_users_logs";
    $data = [];
    foreach ($pp as $key => $value) { $data[sprintf('"%s"', $key)] = $value; }
    $query = array (sprintf('INSERT INTO "%s" (%s) VALUES (%s)', $table, implode(', ', array_keys($data)), implode(', ', array_fill(0, count($data), '?'))), );
    $queries[] = array (sprintf('%s;', implode(' ', $query)), $data, );
  }
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

################################################################################

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
              \PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES "utf8" COLLATE "utf8_unicode_ci", time_zone = "+07:00";',
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
    } else if (preg_match("/raw/i", $_SERVER['PATH_INFO'])) {
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

################################################################################

function ago($datetime, $depth=1) {
  $units = array("year"=>31104000, "month"=>2592000, "week"=>604800, "day"=>86400, "hour"=>3600, "minute"=>60, "second"=>1 );
  $plural = "s";
  $conjugator = " and ";
  $separator = ", ";
  $suffix1 = " ago";
  $suffix2 = " left";
  $now = "now";
  $empty = "";

  $timediff = time()-strtotime($datetime);
  if ($timediff == 0) return $now;
  if ($depth < 1) return $empty;
  $max_depth = count($units);
  $remainder = abs($timediff);
  $output = "";
  $count_depth = 0;
  $fix_depth = true;

  foreach ($units as $unit=>$value) {
    if ($remainder>$value && $depth-->0) {
      if ($fix_depth) {
        $max_depth -= ++$count_depth;
        if ($depth>=$max_depth) $depth=$max_depth;
        $fix_depth = false;
      }
      $u = (int)($remainder/$value);
      $remainder %= $value;
      $pluralise = $u>1?$plural:$empty;
      $separate = $remainder==0||$depth==0?$empty:
        ($depth==1?$conjugator:$separator);
      $output .= "{$u} {$unit}{$pluralise}{$separate}";
    }
    $count_depth++;
  }
  return $output.($timediff<0?$suffix2:$suffix1);
}

?>
