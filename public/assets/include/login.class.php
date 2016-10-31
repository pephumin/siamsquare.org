<?php

require_once $_SERVER['DOCUMENT_ROOT'].'/public/assets/include/config.php';

class Login {

  private $db_connection = null;
  public $errors = array();
  public $messages = array();

  public function __construct() {
    session_start();
    if ($_REQUEST["w"] == "logout") { $this->doLogout(); }
    elseif ($_REQUEST["do"] == "login") { $this->dologinWithPostData(); }
  }

  private function dologinWithPostData() {
    if (empty($_POST['email'])) { $this->errors[] = mkerror("Email was empty"); }
    elseif (empty($_POST['password'])) { $this->errors[] = mkerror("Password was empty"); }
    elseif (!empty($_POST['email']) && !empty($_POST['password'])) {
      $this->db_connection = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_DATABASE);
      if (!$this->db_connection->set_charset("utf8")) { $this->errors[] = $this->db_connection->error; }
      if (!$this->db_connection->connect_errno) {
        $user_name = $this->db_connection->real_escape_string($_POST['email']);
        $sql = "SELECT * FROM j_users WHERE email = '" . $_REQUEST["email"] . "';";
        $result_of_login_check = $this->db_connection->query($sql);
        if ($result_of_login_check->num_rows == 1) {
          $result_row = $result_of_login_check->fetch_object();
          // $hash = password_hash($_POST['password'], PASSWORD_DEFAULT);
          // if (password_verify($_POST['password'], $hash)) {
          // echo $result_row->password;
          if (password_verify($_POST['password'], $result_row->password)) {
            $_SESSION['logged_in'] = 1;
            $_SESSION['userid'] = $result_row->id;
            $_SESSION['email'] = $result_row->email;
            $_SESSION['fullname'] = $result_row->fullname;
            $_SESSION['mobile'] = $result_row->mobile;
            $_SESSION['company'] = $result_row->company;
            $_SESSION['status'] = $result_row->status;
            $_SESSION['level'] = $result_row->level;
            $_SESSION['ip'] = getip();
            $sql1 = "UPDATE j_users SET lastlogin = NOW(), lastip = '" . $_SESSION["ip"] . "';";
            $result_of_update = $this->db_connection->query($sql1);
            $sql2 = "INSERT INTO j_users_logs (userid, ip, data) VALUE ('" . $_SESSION["userid"] . "', '" . $_SESSION["ip"] . "', '" . $_SESSION["email"] . " logged in');";
            $result_of_update = $this->db_connection->query($sql2);
            // if ($result_of_update->num_rows == 1) { }
          }
          else { $this->errors[] = mkerror("Wrong password"); }
        }
        else { $this->errors[] = mkerror("This user does not exist"); }
      }
      else { $this->errors[] = mkerror("Database connection problem"); }
    }
  }

  public function doLogout() {
    // $_SESSION['ip'] = getip();
    $this->db_connection = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_DATABASE);
    if (!$this->db_connection->set_charset("utf8")) { $this->errors[] = $this->db_connection->error; }
    $sql = "INSERT INTO j_users_logs (userid, ip, data) VALUE ('" . $_SESSION["userid"] . "', '" . $_SESSION["ip"] . "', '" . $_SESSION["email"] . " logged out');";
    $result_of_update = $this->db_connection->query($sql);
    $_SESSION = array();
    session_unset();
    session_destroy();
    $title = "You have been logged out";
    pageHeader($title);
    include $_SERVER['DOCUMENT_ROOT'].'/public/assets/include/w/logout.inc';
    if ($notes) { pageFooter($notes); } else { pageFooter(); }
    exit;
  }

  public function isUserLoggedIn() {
    if (isset($_SESSION['logged_in']) AND $_SESSION['logged_in'] == 1) { return true; }
    return false;
  }
}

class Registration {

  private $db_connection = null;
  public $errors = array();
  public $messages = array();

  public function __construct() {
    if (isset($_POST["register"])) { $this->registerNewUser(); }
  }

  private function registerNewUser() {
    if (empty($_POST['email'])) { $this->errors[] = mkerror("Empty email"); }
    elseif (empty($_POST['password']) || empty($_POST['password2'])) { $this->errors[] = mkerror("Empty password"); }
    elseif ($_POST['password'] !== $_POST['password2']) { $this->errors[] = mkerror("Two passwords are not matched"); }
    elseif (strlen($_POST['password']) < 6) { $this->errors[] = mkerror("Password has a minimum length of 6 characters"); }
    // elseif (strlen($_POST['email']) > 64 || strlen($_POST['email']) < 2) { $this->errors[] = "Username cannot be shorter than 2 or longer than 64 characters"; }
    // elseif (!preg_match('/^[a-z\d]{2,64}$/i', $_POST['email'])) { $this->errors[] = "Username does not fit the name scheme: only a-Z and numbers are allowed, 2 to 64 characters"; }
    elseif (empty($_POST['email'])) { $this->errors[] = mkerror("Email cannot be empty"); }
    elseif (strlen($_POST['email']) > 64) { $this->errors[] = mkerror("Email cannot be longer than 64 characters"); }
    elseif (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) { $this->errors[] = mkerror("Your email address is not in a valid email format"); }
    elseif (!empty($_POST['email']) && strlen($_POST['email']) <= 64 && filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)
            && !empty($_POST['password']) && !empty($_POST['password2']) && ($_POST['password'] === $_POST['password2'])) {
      $this->db_connection = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_DATABASE);
      if (!$this->db_connection->set_charset("utf8")) { $this->errors[] = $this->db_connection->error; }
      if (!$this->db_connection->connect_errno) {
        // $user_name = $this->db_connection->real_escape_string(strip_tags($_POST['user_name'], ENT_QUOTES));
        $user_email = $this->db_connection->real_escape_string(strip_tags($_POST['email'], ENT_QUOTES));
        $user_password = $_POST['password'];
        $user_password_hash = password_hash($user_password, PASSWORD_BCRYPT);
        $sql = "SELECT * FROM j_users WHERE email = '" . $email . "';";
        $query_check_user_name = $this->db_connection->query($sql);
        if ($query_check_user_name->num_rows == 1) { $this->errors[] = mkerror("Sorry, that email address is already taken"); }
        else {
          $sql = "INSERT INTO j_users (email, password) VALUES ('" . $email . "', '" . $user_password_hash . "');";
          $query_new_user_insert = $this->db_connection->query($sql);
          if ($query_new_user_insert) { $this->messages[] = mksuccess("Your account has been created successfully. You can now login."); }
          else { $this->errors[] = mkerror("Sorry, your registration failed. Please go back and try again."); }
        }
      }
      else { $this->errors[] = mkerror("Sorry, no database connection"); }
    }
    else { $this->errors[] = mkerror("An unknown error occurred"); }
  }
}
