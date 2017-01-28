<?php
/**
*
* The class retrieves MX records for the email domain and then connects to the
* domain's SMTP server to try figuring out if the address is really valid.
*
*/

class SMTP_Validate_Email_Exception extends Exception {}
class SMTP_Validate_Email_Exception_Timeout extends SMTP_Validate_Email_Exception {}
class SMTP_Validate_Email_Exception_Unexpected_Response extends SMTP_Validate_Email_Exception {}
class SMTP_Validate_Email_Exception_No_Response extends SMTP_Validate_Email_Exception {}
class SMTP_Validate_Email_Exception_No_Connection extends SMTP_Validate_Email_Exception {}
class SMTP_Validate_Email_Exception_No_Helo extends SMTP_Validate_Email_Exception {}
class SMTP_Validate_Email_Exception_No_Mail_From extends SMTP_Validate_Email_Exception {}
class SMTP_Validate_Email_Exception_No_Timeout extends SMTP_Validate_Email_Exception {}
class SMTP_Validate_Email_Exception_No_TLS extends SMTP_Validate_Email_Exception {}
class SMTP_Validate_Email_Exception_Send_Failed extends SMTP_Validate_Email_Exception {}

// SMTP validation class
class SMTP_Validate_Email {
  private $socket;
  private $domains;
  private $domains_info = array();
  private $connect_timeout = 10;
  private $from_user = 'user';
  private $from_domain = 'localhost';
  private $host = null;
  public $log = array();
  private $results = array();
  private $state = array(
    'helo' => false,
    'mail' => false,
    'rcpt' => false
  );
  public $debug = false;
  public $connect_port = 25;
  public $catchall_is_valid = true;
  public $catchall_test = false; // Set to true to perform a catchall test
  public $no_comm_is_valid = false;
  public $no_conn_is_valid = false;
  public $greylisted_considered_valid = true;
  protected $mx_query_ns = '';
  protected $command_timeouts = array(
    'ehlo' => 120,
    'helo' => 120,
    'tls'  => 180, // start tls
    'mail' => 300, // mail from
    'rcpt' => 300, // rcpt to,
    'rset' => 30,
    'quit' => 60,
    'noop' => 60
  );
  const CRLF = "\r\n";
  const SMTP_CONNECT_SUCCESS = 220;
  const SMTP_QUIT_SUCCESS = 221;
  const SMTP_GENERIC_SUCCESS = 250;
  const SMTP_USER_NOT_LOCAL = 251;
  const SMTP_CANNOT_VRFY = 252;
  const SMTP_SERVICE_UNAVAILABLE = 421;
  const SMTP_MAIL_ACTION_NOT_TAKEN = 450; // 450  Requested mail action not taken: mailbox unavailable
  const SMTP_MAIL_ACTION_ABORTED = 451; // 451  Requested action aborted: local error in processing
  const SMTP_REQUESTED_ACTION_NOT_TAKEN = 452; // 452  Requested action not taken: insufficient system storage
  const SMTP_SYNTAX_ERROR = 500; // 500  Syntax error (may be due to a denied command)
  const SMTP_NOT_IMPLEMENTED = 502; // 502  Comment not implemented
  const SMTP_BAD_SEQUENCE = 503; // 503  Bad sequence of commands (may be due to a denied command)
  const SMTP_MBOX_UNAVAILABLE = 550; // 550  Requested action not taken: mailbox unavailable
  const SMTP_TRANSACTION_FAILED = 554; // 554  Seen this from hotmail MTAs, in response to RSET
  private $greylisted = array(
    self::SMTP_MAIL_ACTION_NOT_TAKEN,
    self::SMTP_MAIL_ACTION_ABORTED,
    self::SMTP_REQUESTED_ACTION_NOT_TAKEN
  );

  function __construct($emails = array(), $sender = '') {
    if (!empty($emails)) { $this->set_emails($emails); }
    if (!empty($sender)) { $this->set_sender($sender); }
  }

  public function __destruct() { $this->disconnect(false); }

  public function accepts_any_recipient($domain) {
    if (!$this->catchall_test) { return false; }
    $test = 'catch-all-test-' . time();
    $accepted = $this->rcpt($test . '@' . $domain);
    if ($accepted) { $this->domains_info[$domain]['catchall'] = true; return true; }
    $this->noop();
    if (!($this->connected())) { $this->debug('Disconnected after trying a non-existing recipient on ' . $domain); }
    return false;
  }

  public function validate($emails = array(), $sender = '') {
    $this->results = array();
    if (!empty($emails)) { $this->set_emails($emails); }
    if (!empty($sender)) { $this->set_sender($sender); }
    if (!is_array($this->domains) || empty($this->domains)) { return $this->results; }
    foreach ($this->domains as $domain => $users) {
      $mxs = array();
      list($hosts, $weights) = $this->mx_query($domain);
      foreach ($hosts as $k => $host) { $mxs[$host] = $weights[$k]; }
      asort($mxs);
      $mxs[$domain] = 0;
      $this->debug('MX records (' . $domain . '): ' . print_r($mxs, true));
      $this->domains_info[$domain] = array();
      $this->domains_info[$domain]['users'] = $users;
      $this->domains_info[$domain]['mxs'] = $mxs;

      while (list($host) = each($mxs)) {
        try {
          $this->connect($host);
          if ($this->connected()) { break; }
        } catch (SMTP_Validate_Email_Exception_No_Connection $e) {
          $this->debug('Unable to connect. Exception caught: ' . $e->getMessage());
          $this->set_domain_results($users, $domain, $this->no_conn_is_valid );
        }
      }

      if ($this->connected()) {
        try {
          if ($this->helo()) {
            if (!($this->mail($this->from_user . '@' . $this->from_domain))) { $this->set_domain_results($users, $domain, $this->no_comm_is_valid); }
              if ($this->connected()) {
                $this->noop();
                $is_catchall_domain = $this->accepts_any_recipient($domain);
                if ($is_catchall_domain) { if (!($this->catchall_is_valid)) { $this->set_domain_results($users, $domain, $this->catchall_is_valid); continue; } }
              if ($this->connected()) {
                $this->noop();
                foreach ($users as $user) {
                  $address = $user . '@' . $domain;
                  $this->results[$address] = $this->rcpt($address);
                  $this->noop();
                }
              }
              if ($this->connected()) { $this->rset(); $this->disconnect(); }
            }
          } else { $this->set_domain_results($users, $domain, $this->no_comm_is_valid); }
        }
        catch (SMTP_Validate_Email_Exception_Unexpected_Response $e) { $this->set_domain_results($users, $domain, $this->no_comm_is_valid); }
        catch (SMTP_Validate_Email_Exception_Timeout $e) { $this->set_domain_results($users, $domain, $this->no_comm_is_valid); }
      }
    }
    return $this->get_results();
  }

  public function get_results($include_domains_info = true) {
    if ($include_domains_info) { $this->results['domains'] = $this->domains_info; }
    return $this->results;
  }

  private function set_domain_results($users, $domain, $val) {
    if (!is_array($users)) { $users = (array) $users; }
    foreach ($users as $user) { $this->results[$user . '@' . $domain] = $val; }
  }

  protected function connected() { return is_resource($this->socket); }

  protected function connect($host) {
    $remote_socket = $host . ':' . $this->connect_port;
    $errnum = 0;
    $errstr = '';
    $this->host = $remote_socket;
    // open connection
    $this->debug('Connecting to ' . $this->host);
    $this->socket = @stream_socket_client(
      $this->host,
      $errnum,
      $errstr,
      $this->connect_timeout,
      STREAM_CLIENT_CONNECT,
      stream_context_create(array())
    );
    if (!$this->connected()) {
      $this->debug('Connect failed: ' . $errstr . ', error number: ' . $errnum . ', host: ' . $this->host);
      throw new SMTP_Validate_Email_Exception_No_Connection('Cannot ' . 'open a connection to remote host (' . $this->host . ')');
    }
    $result = stream_set_timeout($this->socket, $this->connect_timeout);
    if (!$result) { throw new SMTP_Validate_Email_Exception_No_Timeout('Cannot set timeout'); }
    $this->debug('Connected to ' . $this->host . ' successfully');
  }

  protected function disconnect($quit = true) {
    if ($quit) { $this->quit(); }
    if ($this->connected()) { $this->debug('Closing socket to ' . $this->host); fclose($this->socket); }
    $this->host = null;
    $this->reset_state();
  }

  private function reset_state() {
    $this->state['helo'] = false;
    $this->state['mail'] = false;
    $this->state['rcpt'] = false;
  }

  protected function helo() {
    if ($this->state['helo']) { return; }
    try {
      $this->expect(self::SMTP_CONNECT_SUCCESS, $this->command_timeouts['helo']);
      $this->ehlo();
      $this->state['helo'] = true;
      /*
      if ($this->tls == true) {
        // send STARTTLS, wait 3 minutes
        $this->send('STARTTLS');
        $this->expect(self::SMTP_CONNECT_SUCCESS, $this->command_timeouts['tls']);
        $result = stream_socket_enable_crypto($this->socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT);
        if (!$result) { throw new SMTP_Validate_Email_Exception_No_TLS('Cannot enable TLS'); }
      }
      */
      return true;
    } catch (SMTP_Validate_Email_Exception_Unexpected_Response $e) {
      $this->debug('Unexpected response after connecting: ' . $e->getMessage());
      $this->disconnect(false);
      return false;
    }
  }

  protected function ehlo() {
    try {
      $this->send('EHLO ' . $this->from_domain);
      $this->expect(self::SMTP_GENERIC_SUCCESS, $this->command_timeouts['ehlo']);
    } catch (SMTP_Validate_Email_Exception_Unexpected_Response $e) {
      $this->send('HELO ' . $this->from_domain);
      $this->expect(self::SMTP_GENERIC_SUCCESS, $this->command_timeouts['helo']);
    }
  }

  protected function mail($from) {
    if (!$this->state['helo']) { throw new SMTP_Validate_Email_Exception_No_Helo('Need HELO before MAIL FROM'); }
    $this->send('MAIL FROM:<' . $from . '>');
    try {
      $this->expect(self::SMTP_GENERIC_SUCCESS, $this->command_timeouts['mail']);
      $this->state['mail'] = true;
      $this->state['rcpt'] = false;
      return true;
    } catch (SMTP_Validate_Email_Exception_Unexpected_Response $e) {
      $this->debug("Unexpected response to MAIL FROM\n:" . $e->getMessage());
      $this->disconnect(false);
      return false;
    }
  }

  protected function rcpt($to) {
    if (!$this->state['mail']) { throw new SMTP_Validate_Email_Exception_No_Mail_From('Need MAIL FROM before RCPT TO'); }
    $is_valid = false;
    $expected_codes = array(
      self::SMTP_GENERIC_SUCCESS,
      self::SMTP_USER_NOT_LOCAL
    );
    if ($this->greylisted_considered_valid) { $expected_codes = array_merge($expected_codes, $this->greylisted); }
    try {
      $this->send('RCPT TO:<' . $to . '>');
      try {
        $this->expect($expected_codes, $this->command_timeouts['rcpt']);
        $this->state['rcpt'] = true;
        $is_valid = true;
      }
      catch (SMTP_Validate_Email_Exception_Unexpected_Response $e) { $this->debug('Unexpected response to RCPT TO: ' . $e->getMessage()); }
    }
    catch (SMTP_Validate_Email_Exception $e) { $this->debug('Sending RCPT TO failed: ' . $e->getMessage()); }
    return $is_valid;
  }

  protected function rset() {
    $this->send('RSET');
    $expected = array(
      self::SMTP_GENERIC_SUCCESS,
      self::SMTP_CONNECT_SUCCESS,
      self::SMTP_NOT_IMPLEMENTED,
      self::SMTP_TRANSACTION_FAILED
    );
    $this->expect($expected, $this->command_timeouts['rset'], true);
    $this->state['mail'] = false;
    $this->state['rcpt'] = false;
  }

  protected function quit() {
    if ($this->state['helo']) {
      $this->send('QUIT');
      $this->expect(array(self::SMTP_GENERIC_SUCCESS,self::SMTP_QUIT_SUCCESS), $this->command_timeouts['quit'], true);
    }
  }

  protected function noop() {
    $this->send('NOOP');
    $expected_codes = array(
      'SMTP',
      self::SMTP_BAD_SEQUENCE,
      self::SMTP_NOT_IMPLEMENTED,
      self::SMTP_GENERIC_SUCCESS,
      self::SMTP_SYNTAX_ERROR,
      self::SMTP_CONNECT_SUCCESS
    );
    $this->expect($expected_codes, $this->command_timeouts['noop'], true);
  }

  protected function send($cmd) {
    if (!$this->connected()) { throw new SMTP_Validate_Email_Exception_No_Connection('No connection'); }
    $this->debug('send>>>: ' . $cmd);
    $result = fwrite($this->socket, $cmd . self::CRLF);
    if ($result === false) { throw new SMTP_Validate_Email_Exception_Send_Failed('Send failed ' . 'on: ' . $this->host); }
    return $result;
  }

  protected function recv($timeout = null) {
    if (!$this->connected()) { throw new SMTP_Validate_Email_Exception_No_Connection('No connection'); }
    if ($timeout !== null) { stream_set_timeout($this->socket, $timeout); }
    $line = fgets($this->socket, 1024);
    $this->debug('<<<recv: ' . $line);
    $info = stream_get_meta_data($this->socket);
    if (!empty($info['timed_out'])) { throw new SMTP_Validate_Email_Exception_Timeout('Timed out in recv'); }
    if ($line === false) { throw new SMTP_Validate_Email_Exception_No_Response('No response in recv'); }
    return $line;
  }

  protected function expect($codes, $timeout = null, $empty_response_allowed = false) {
    if (!is_array($codes)) { $codes = (array) $codes; }
    $code = null;
    $text = '';
    try {
      $text = $line = $this->recv($timeout);
      while (preg_match("/^[0-9]+-/", $line)) {
        $line = $this->recv($timeout);
        $text .= $line;
      }
      sscanf($line, '%d%s', $code, $text);
      if (($empty_response_allowed === false && ($code === null || !in_array($code, $codes))) || $code == self::SMTP_SERVICE_UNAVAILABLE) { throw new SMTP_Validate_Email_Exception_Unexpected_Response($line); }
      } catch (SMTP_Validate_Email_Exception_No_Response $e) {
        $this->debug('No response in expect(): ' . $e->getMessage());
        $this->disconnect(false);
      }
    return $text;
  }

  protected function parse_email($email) {
    $parts = explode('@', $email);
    $domain = array_pop($parts);
    $user= implode('@', $parts);
    return array($user, $domain);
  }

  public function set_emails($emails) {
    if (!is_array($emails)) { $emails = (array) $emails; }
    $this->domains = array();
    foreach ($emails as $email) {
      list($user, $domain) = $this->parse_email($email);
      if (!isset($this->domains[$domain])) { $this->domains[$domain] = array(); }
      $this->domains[$domain][] = $user;
    }
  }

  public function set_sender($email) {
    $parts = $this->parse_email($email);
    $this->from_user = $parts[0];
    $this->from_domain = $parts[1];
  }

  protected function mx_query($domain) {
    $hosts = array();
    $weight = array();
    if (function_exists('getmxrr')) { getmxrr($domain, $hosts, $weight); }
    else { $this->getmxrr($domain, $hosts, $weight); }
    return array($hosts, $weight);
  }

  protected function getmxrr($hostname, &$mxhosts, &$mxweights) {
    if (!is_array($mxhosts)) { $mxhosts = array(); }
    if (!is_array($mxweights)) { $mxweights = array(); }
    if (empty($hostname)) { return; }
    $cmd = 'nslookup -type=MX ' . escapeshellarg($hostname);
    if (!empty($this->mx_query_ns)) { $cmd .= ' ' . escapeshellarg($this->mx_query_ns); }
    exec($cmd, $output);
    if (empty($output)) { return; }
    $i = -1;
    foreach ($output as $line) {
      $i++;
      if (preg_match("/^$hostname\tMX preference = ([0-9]+), mail exchanger = (.+)$/i", $line, $parts)) {
        $mxweights[$i] = trim($parts[1]);
        $mxhosts[$i] = trim($parts[2]);
      }
      if (preg_match('/responsible mail addr = (.+)$/i', $line, $parts)) {
        $mxweights[$i] = $i;
        $mxhosts[$i] = trim($parts[1]);
      }
    }
    return ($i != -1);
  }
  private function debug($str) {
    $this->log($str);
    if ($this->debug == true) {
      if (PHP_SAPI != 'cli') { $str = '<br/><pre>' . htmlspecialchars($str) . '</pre>'; }
      echo "\n" . $str;
    }
  }
  private function log($msg) { $this->log[] = $msg; }
  public function get_log() { return $this->log; }
  public function clear_log() { $this->log = array(); }
}
