<?php

class Login {

  private $db_connection = null;
  private $userid = null;
  private $email = "";
  private $logged_in = false;
  private $password_reset_invalidlink = false;
  private $password_reset_successful = false;
  public $errors = array();
  public $messages = array();

  public function __construct() {

    session_start();
    if ($_GET["w"] == "logout") { $this->doLogout(); }
    elseif (!empty($_SESSION['email']) && ($_SESSION['logged_in'] == 1)) { $this->loginWithSessionData();
      if (isset($_POST["user_edit_submit_password"])) { $this->editUserPassword($_POST['oldpass'], $_POST['newpass1'], $_POST['newpass2']); }
    }
    elseif (isset($_COOKIE['siamsquare.org'])) { $this->loginWithCookieData(); }
    elseif (isset($_POST["login"]) || ($_POST["login"] == "1")) {
      if (!isset($_POST['remember'])) { $_POST['remember'] = null; }
      $this->loginWithPostData($_POST['email'], $_POST['password'], $_POST['remember']);
    }
    if (isset($_POST["request_password_reset"]) && isset($_POST['email'])) { $this->setPasswordResetDatabaseTokenAndSendMail($_POST['email']); }
    elseif (isset($_GET["email"]) && isset($_GET["verification_code"])) { $this->checkIfEmailVerificationCodeIsValid($_GET["email"], $_GET["verification_code"]); }
    elseif (isset($_POST["submit_new_password"])) { $this->editNewPassword($_POST['email'], $_POST['password_reset'], $_POST['newpass1'], $_POST['newpass2']); }
  }

  private function databaseConnection() {
    if ($this->db_connection != null) { return true; }
    else {
      try { $this->db_connection = new PDO('mysql:host='. DB_HOST .';dbname='. DB_DATABASE . ';charset=utf8', DB_USER, DB_PASS); return true; }
      catch (PDOException $e) { $this->errors[] = MESSAGE_DATABASE_ERROR . $e->getMessage(); }
    }
    return false;
  }

  private function getUserData($email) {
    if ($this->databaseConnection()) {
      $query_user = $this->db_connection->prepare('SELECT * FROM j_users WHERE email = :email');
      $query_user->bindValue(':email', $email, PDO::PARAM_STR);
      $query_user->execute();
      return $query_user->fetchObject();
    }
    else { return false; }
  }

  private function loginWithSessionData() {
    $this->email = $_SESSION['email'];
    $this->logged_in = true;
  }

  private function loginWithCookieData() {
    if (isset($_COOKIE['siamsquare.org'])) {
      list ($userid, $token, $hash) = explode(':', $_COOKIE['siamsquare.org']);
      if ($hash == hash('sha256', $userid . ':' . $token . COOKIE_SECRET_KEY) && !empty($token)) {
        if ($this->databaseConnection()) {
          $sth = $this->db_connection->prepare("SELECT * FROM j_users WHERE id = :userid AND token = :token AND token IS NOT NULL");
          $sth->bindValue(':userid', $userid, PDO::PARAM_INT);
          $sth->bindValue(':token', $token, PDO::PARAM_STR);
          $sth->execute();
          $result_row = $sth->fetchObject();
          if (isset($result_row->id)) {
            $_SESSION['userid'] = $result_row->id;
            $_SESSION['email'] = $result_row->email;
            $_SESSION['fullname'] = $result_row->fullname;
            $_SESSION['mobile'] = $result_row->mobile;
            $_SESSION['company'] = $result_row->company;
            $_SESSION['status'] = $result_row->status;
            $_SESSION['level'] = $result_row->level;
            $_SESSION['ip'] = getip();
            $_SESSION['logged_in'] = 1;
            $this->userid = $result_row->id;
            $this->email = $result_row->email;
            $this->fullname = $result_row->fullname;
            $this->mobile = $result_row->mobile;
            $this->company = $result_row->company;
            $this->status = $result_row->status;
            $this->level = $result_row->level;
            $this->ip = getip();
            $this->logged_in = true;
            $sql1 = "UPDATE j_users SET lastlogin = NOW(), lastip = '" . $_SESSION["ip"] . "';";
            $result_of_update = $this->db_connection->query($sql1);
            $sql2 = "INSERT INTO j_users_logs (userid, ip, data) VALUE ('" . $_SESSION["userid"] . "', '" . $_SESSION["ip"] . "', '" . $_SESSION["email"] . " logged in');";
            $result_of_update = $this->db_connection->query($sql2);
            $this->newRememberMeCookie();
            return true;
          }
        }
      }
      $this->deleteRememberMeCookie();
      $this->errors[] = MESSAGE_COOKIE_INVALID;
    }
    return false;
  }

  private function loginWithPostData($email, $password, $siamsquare) {
    if ($this->databaseConnection()) {
      $query_user = $this->db_connection->prepare('SELECT * FROM j_users WHERE email = :email');
      $query_user->bindValue(':email', trim($email), PDO::PARAM_STR);
      $query_user->execute();
      $result_row = $query_user->fetchObject();
    }
    if (!isset($result_row->id)) { $this->errors[] = MESSAGE_LOGIN_FAILED; }
    else if (($result_row->fails >= 3) && ($result_row->fails_last > (time() - 30))) { $this->errors[] = MESSAGE_PASSWORD_WRONG_3_TIMES; }
    else if (!password_verify($password, $result_row->password)) {
      $sth = $this->db_connection->prepare('UPDATE j_users SET fails = fails+1, fails_last = :fails_last WHERE email = :email');
      $sth->execute(array(':email' => $email, ':fails_last' => time()));
      $this->errors[] = MESSAGE_PASSWORD_WRONG;
    }
    else if ($result_row->status != 1) { $this->errors[] = MESSAGE_ACCOUNT_NOT_ACTIVATED; }
    else {
      $_SESSION['userid'] = $result_row->id;
      $_SESSION['email'] = $result_row->email;
      $_SESSION['fullname'] = $result_row->fullname;
      $_SESSION['mobile'] = $result_row->mobile;
      $_SESSION['company'] = $result_row->company;
      $_SESSION['status'] = $result_row->status;
      $_SESSION['level'] = $result_row->level;
      $_SESSION['ip'] = getip();
      $_SESSION['logged_in'] = 1;
      $this->userid = $result_row->id;
      $this->email = $result_row->email;
      $this->fullname = $result_row->fullname;
      $this->mobile = $result_row->mobile;
      $this->company = $result_row->company;
      $this->status = $result_row->status;
      $this->level = $result_row->level;
      $this->ip = getip();
      $this->logged_in = true;
      $sth = $this->db_connection->prepare('UPDATE j_users SET fails = 0, fails_last = NULL WHERE id = :userid AND fails != 0');
      $sth->execute(array(':userid' => $result_row->id));
      $sql1 = "UPDATE j_users SET lastlogin = NOW(), lastip = '" . $_SESSION["ip"] . "';";
      $result_of_update = $this->db_connection->query($sql1);
      $sql2 = "INSERT INTO j_users_logs (userid, ip, data) VALUE ('" . $_SESSION["userid"] . "', '" . $_SESSION["ip"] . "', '" . $_SESSION["email"] . " logged in');";
      $result_of_update = $this->db_connection->query($sql2);
      if (isset($siamsquare)) { $this->newRememberMeCookie(); }
      else { $this->deleteRememberMeCookie(); }
    }
  }

  private function newRememberMeCookie() {
    if ($this->databaseConnection()) {
      $random_token_string = hash('sha256', mt_rand());
      $sth = $this->db_connection->prepare("UPDATE j_users SET token = :token WHERE id = :userid");
      $sth->execute(array(':token' => $random_token_string, ':userid' => $_SESSION['userid']));
      $cookie_string_first_part = $_SESSION['userid'] . ':' . $random_token_string;
      $cookie_string_hash = hash('sha256', $cookie_string_first_part . COOKIE_SECRET_KEY);
      $cookie_string = $cookie_string_first_part . ':' . $cookie_string_hash;
      setcookie('siamsquare.org', $cookie_string, time() + COOKIE_RUNTIME, "/", COOKIE_DOMAIN);
    }
  }

  private function deleteRememberMeCookie() {
    if ($this->databaseConnection()) {
      $sth = $this->db_connection->prepare("UPDATE j_users SET token = NULL WHERE id = :userid");
      $sth->execute(array(':userid' => $_SESSION['userid']));
    }
    setcookie('siamsquare.org', false, time() - (3600 * 3650), '/', COOKIE_DOMAIN);
  }

  public function doLogout() {
    $this->deleteRememberMeCookie();
    $_SESSION = array();
    session_destroy();
    if ($this->databaseConnection()) {
      $query_user = $this->db_connection->prepare('INSERT INTO j_users_logs (userid, ip, data) VALUE (:userid, :ip, :email logged out)');
      $query_user->bindValue(':userid', userid, PDO::PARAM_INT);
      $query_user->bindValue(':email', $email, PDO::PARAM_STR);
      $query_user->bindValue(':ip', $_SESSION['ip'], PDO::PARAM_STR);
      $query_user->execute();
    }
    header("refresh: 10; url=/admin/");
    $title = "You have been logged out";
    pageHeader($title);
    echo "<h2>$title</h2>\n";
    echo mksuccess("You have been successfully logged out. We will redirect you to the front page in a moment.");
    echo "<p>Thank you for using our system. And feel free to come back as often as you need.</p>\n";
    echo "<p>You can <a href=\"/admin/\">click here</a> if you choose not to wait in order to log back in to our system.</p>\n";
    echo "<br>\n\n";
    $notes = array (array("title" => "Logged out", "text" => "You have been successfully logged out from our system.", "image" => "assets/img/notification.svg"));
    if ($notes) { pageFooter($notes); } else { pageFooter(); }
    $this->logged_in = false;
    $this->messages[] = MESSAGE_LOGGED_OUT;
  }

  public function isUserLoggedIn() {
    return $this->logged_in;
  }

  public function editUserEmail($email) {
    $email = substr(trim($email), 0, 64);
    if (!empty($email) && $email == $_SESSION["email"]) { $this->errors[] = MESSAGE_EMAIL_SAME_LIKE_OLD_ONE; }
    elseif (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) { $this->errors[] = MESSAGE_EMAIL_INVALID; }
    else if ($this->databaseConnection()) {
      $query_user = $this->db_connection->prepare('SELECT * FROM j_users WHERE email = :email');
      $query_user->bindValue(':email', $email, PDO::PARAM_STR);
      $query_user->execute();
      $result_row = $query_user->fetchObject();
      if (isset($result_row->id)) { $this->errors[] = MESSAGE_EMAIL_ALREADY_EXISTS; }
      else {
        $query_edit_email = $this->db_connection->prepare('UPDATE j_users SET email = :email WHERE id = :userid');
        $query_edit_email->bindValue(':email', $email, PDO::PARAM_STR);
        $query_edit_email->bindValue(':userid', $_SESSION['userid'], PDO::PARAM_INT);
        $query_edit_email->execute();
        if ($query_edit_email->rowCount()) { $_SESSION['email'] = $email; $this->messages[] = MESSAGE_EMAIL_CHANGED_SUCCESSFULLY . $email; }
        else { $this->errors[] = MESSAGE_EMAIL_CHANGE_FAILED; }
      }
    }
  }

  public function editUserPassword($oldpass, $newpass1, $newpass2) {
    if (empty($newpass1) || empty($newpass2) || empty($oldpass)) { $this->errors[] = MESSAGE_PASSWORD_EMPTY; }
    elseif ($newpass1 !== $newpass2) { $this->errors[] = MESSAGE_PASSWORD_BAD_CONFIRM; }
    elseif (strlen($newpass1) < 6) { $this->errors[] = MESSAGE_PASSWORD_TOO_SHORT; }
    else {
      $result_row = $this->getUserData($_SESSION['user_name']);
      if (isset($result_row->password)) {
        if (password_verify($oldpass, $result_row->password)) {
          $hash_cost_factor = (defined('HASH_COST_FACTOR') ? HASH_COST_FACTOR : null);
          $password = password_hash($newpass1, PASSWORD_DEFAULT, array('cost' => $hash_cost_factor));
          $query_update = $this->db_connection->prepare('UPDATE j_users SET password = :password WHERE id = :userid');
          $query_update->bindValue(':password', $password, PDO::PARAM_STR);
          $query_update->bindValue(':userid', $_SESSION['userid'], PDO::PARAM_INT);
          $query_update->execute();
          if ($query_update->rowCount()) { $this->messages[] = MESSAGE_PASSWORD_CHANGED_SUCCESSFULLY; }
          else { $this->errors[] = MESSAGE_PASSWORD_CHANGE_FAILED; }
        }
        else { $this->errors[] = MESSAGE_OLD_PASSWORD_WRONG; }
      }
      else { $this->errors[] = MESSAGE_USER_DOES_NOT_EXIST; }
    }
  }

  public function setPasswordResetDatabaseTokenAndSendMail($email) {
    $email = trim($email);
    if (empty($email)) { $this->errors[] = MESSAGE_USERNAME_EMPTY; }
    else {
      $temporary_timestamp = time();
      $password_reset = sha1(uniqid(mt_rand(), true));
      $result_row = $this->getUserData($email);
      if (isset($result_row->id)) {
        $query_update = $this->db_connection->prepare('UPDATE j_users SET password_reset = :password_reset, password_reset_timestamp = :password_reset_timestamp WHERE email = :email');
        $query_update->bindValue(':password_reset', $password_reset, PDO::PARAM_STR);
        $query_update->bindValue(':password_reset_timestamp', $temporary_timestamp, PDO::PARAM_INT);
        $query_update->bindValue(':email', $email, PDO::PARAM_STR);
        $query_update->execute();
        if ($query_update->rowCount() == 1) { $this->sendPasswordResetMail($user_name, $result_row->email, $password_reset); return true; }
        else { $this->errors[] = MESSAGE_DATABASE_ERROR; }
      }
      else { $this->errors[] = MESSAGE_USER_DOES_NOT_EXIST; }
    }
    return false;
  }

  public function sendPasswordResetMail($fullname, $email, $password_reset) {
    $mail = new PHPMailer;
    if (EMAIL_USE_SMTP) {
      $mail->IsSMTP();
      $mail->SMTPAuth = EMAIL_SMTP_AUTH;
      if (defined(EMAIL_SMTP_ENCRYPTION)) { $mail->SMTPSecure = EMAIL_SMTP_ENCRYPTION; }
      $mail->Host = EMAIL_SMTP_HOST;
      $mail->Username = EMAIL_SMTP_USERNAME;
      $mail->Password = EMAIL_SMTP_PASSWORD;
      $mail->Port = EMAIL_SMTP_PORT;
    }
    else { $mail->IsMail(); }
    $mail->From = EMAIL_PASSWORDRESET_FROM;
    $mail->FromName = EMAIL_PASSWORDRESET_FROM_NAME;
    $mail->AddAddress($email);
    $mail->Subject = EMAIL_PASSWORDRESET_SUBJECT;
    $link    = EMAIL_PASSWORDRESET_URL.'?email='.urlencode($email).'&verification_code='.urlencode($password_reset);
    $mail->Body = EMAIL_PASSWORDRESET_CONTENT . ' ' . $link;
    if (!$mail->Send()) { $this->errors[] = MESSAGE_PASSWORD_RESET_MAIL_FAILED . $mail->ErrorInfo; return false; }
    else { $this->messages[] = MESSAGE_PASSWORD_RESET_MAIL_SUCCESSFULLY_SENT; return true; }
  }

  public function checkIfEmailVerificationCodeIsValid($email, $verification_code) {
    $email = trim($email);
    if (empty($email) || empty($verification_code)) { $this->errors[] = MESSAGE_LINK_PARAMETER_EMPTY; }
    else {
      $result_row = $this->getUserData($email);
      if (isset($result_row->id) && $result_row->password_reset == $verification_code) {
        $timestamp_one_hour_ago = time() - 3600; // 3600 seconds are 1 hour
        if ($result_row->password_reset_timestamp > $timestamp_one_hour_ago) { $this->password_reset_invalidlink = true; }
        else { $this->errors[] = MESSAGE_RESET_LINK_HAS_EXPIRED; }
      }
      else { $this->errors[] = MESSAGE_USER_DOES_NOT_EXIST; }
    }
  }

  public function editNewPassword($email, $password_reset, $newpass1, $newpass2) {
    $email = trim($email);
    if (empty($email) || empty($password_reset) || empty($newpass1) || empty($newpass2)) { $this->errors[] = MESSAGE_PASSWORD_EMPTY; }
    else if ($newpass1 !== $newpass2) { $this->errors[] = MESSAGE_PASSWORD_BAD_CONFIRM; }
    else if (strlen($newpass1) < 6) { $this->errors[] = MESSAGE_PASSWORD_TOO_SHORT; }
    else if ($this->databaseConnection()) {
      $hash_cost_factor = (defined('HASH_COST_FACTOR') ? HASH_COST_FACTOR : null);
      $password = password_hash($newpass1, PASSWORD_DEFAULT, array('cost' => $hash_cost_factor));
      $query_update = $this->db_connection->prepare('UPDATE j_users SET password = :password, password_reset = NULL, password_reset_timestamp = NULL WHERE email = :email AND password_reset = :password_reset');
      $query_update->bindValue(':password', $password, PDO::PARAM_STR);
      $query_update->bindValue(':password_reset', $password_reset, PDO::PARAM_STR);
      $query_update->bindValue(':email', $email, PDO::PARAM_STR);
      $query_update->execute();
      if ($query_update->rowCount() == 1) { $this->password_reset_successful = true; $this->messages[] = MESSAGE_PASSWORD_CHANGED_SUCCESSFULLY; }
      else { $this->errors[] = MESSAGE_PASSWORD_CHANGE_FAILED; }
    }
  }

  // public function passwordResetLinkIsValid() {
  //   return $this->password_reset_invalidlink;
  // }

  // public function passwordResetWasSuccessful() {
  //   return $this->password_reset_successful;
  // }

  // public function getUsername() {
  //   return $this->email;
  // }

}

// class Registration {
//
//   private $db_connection            = null;
//   public  $registration_successful  = false;
//   public  $verification_successful  = false;
//   public  $errors                   = array();
//   public  $messages                 = array();
//
//   public function __construct() {
//     session_start();
//     if (isset($_POST["register"])) { $this->registerNewUser($_POST['user_name'], $_POST['user_email'], $_POST['user_password_new'], $_POST['user_password_repeat'], $_POST["captcha"]); }
//     else if (isset($_GET["id"]) && isset($_GET["verification_code"])) { $this->verifyNewUser($_GET["id"], $_GET["verification_code"]); }
//   }
//
//   private function databaseConnection() {
//     if ($this->db_connection != null) { return true; }
//     else {
//       try { $this->db_connection = new PDO('mysql:host='. DB_HOST .';dbname='. DB_NAME . ';charset=utf8', DB_USER, DB_PASS); return true; }
//       catch (PDOException $e) { $this->errors[] = MESSAGE_DATABASE_ERROR; return false; }
//     }
//   }
//
//   private function registerNewUser($user_name, $user_email, $user_password, $user_password_repeat, $captcha) {
//     $user_name  = trim($user_name);
//     $user_email = trim($user_email);
//     if (strtolower($captcha) != strtolower($_SESSION['captcha'])) { $this->errors[] = MESSAGE_CAPTCHA_WRONG; }
//     elseif (empty($user_name)) { $this->errors[] = MESSAGE_USERNAME_EMPTY; }
//     elseif (empty($user_password) || empty($user_password_repeat)) { $this->errors[] = MESSAGE_PASSWORD_EMPTY; }
//     elseif ($user_password !== $user_password_repeat) { $this->errors[] = MESSAGE_PASSWORD_BAD_CONFIRM; }
//     elseif (strlen($user_password) < 6) { $this->errors[] = MESSAGE_PASSWORD_TOO_SHORT; }
//     elseif (strlen($user_name) > 64 || strlen($user_name) < 2) { $this->errors[] = MESSAGE_USERNAME_BAD_LENGTH; }
//     elseif (!preg_match('/^[a-z\d]{2,64}$/i', $user_name)) { $this->errors[] = MESSAGE_USERNAME_INVALID; }
//     elseif (empty($user_email)) { $this->errors[] = MESSAGE_EMAIL_EMPTY; }
//     elseif (strlen($user_email) > 64) { $this->errors[] = MESSAGE_EMAIL_TOO_LONG; }
//     elseif (!filter_var($user_email, FILTER_VALIDATE_EMAIL)) { $this->errors[] = MESSAGE_EMAIL_INVALID; }
//     else if ($this->databaseConnection()) {
//       $query_check_user_name = $this->db_connection->prepare('SELECT user_name, user_email FROM users WHERE user_name=:user_name OR user_email=:user_email');
//       $query_check_user_name->bindValue(':user_name', $user_name, PDO::PARAM_STR);
//       $query_check_user_name->bindValue(':user_email', $user_email, PDO::PARAM_STR);
//       $query_check_user_name->execute();
//       $result = $query_check_user_name->fetchAll();
//       if (count($result) > 0) {
//         for ($i = 0; $i < count($result); $i++) { $this->errors[] = ($result[$i]['user_name'] == $user_name) ? MESSAGE_USERNAME_EXISTS : MESSAGE_EMAIL_ALREADY_EXISTS; }
//       }
//       else {
//         $hash_cost_factor = (defined('HASH_COST_FACTOR') ? HASH_COST_FACTOR : null);
//         $user_password_hash = password_hash($user_password, PASSWORD_DEFAULT, array('cost' => $hash_cost_factor));
//         $user_activation_hash = sha1(uniqid(mt_rand(), true));
//         $query_new_user_insert = $this->db_connection->prepare('INSERT INTO users (user_name, user_password_hash, user_email, user_activation_hash, user_registration_ip, user_registration_datetime) VALUES(:user_name, :user_password_hash, :user_email, :user_activation_hash, :user_registration_ip, now())');
//         $query_new_user_insert->bindValue(':user_name', $user_name, PDO::PARAM_STR);
//         $query_new_user_insert->bindValue(':user_password_hash', $user_password_hash, PDO::PARAM_STR);
//         $query_new_user_insert->bindValue(':user_email', $user_email, PDO::PARAM_STR);
//         $query_new_user_insert->bindValue(':user_activation_hash', $user_activation_hash, PDO::PARAM_STR);
//         $query_new_user_insert->bindValue(':user_registration_ip', $_SERVER['REMOTE_ADDR'], PDO::PARAM_STR);
//         $query_new_user_insert->execute();
//         $user_id = $this->db_connection->lastInsertId();
//         if ($query_new_user_insert) {
//           if ($this->sendVerificationEmail($user_id, $user_email, $user_activation_hash)) { $this->messages[] = MESSAGE_VERIFICATION_MAIL_SENT; $this->registration_successful = true; }
//           else {
//             $query_delete_user = $this->db_connection->prepare('DELETE FROM users WHERE user_id=:user_id');
//             $query_delete_user->bindValue(':user_id', $user_id, PDO::PARAM_INT);
//             $query_delete_user->execute();
//             $this->errors[] = MESSAGE_VERIFICATION_MAIL_ERROR;
//           }
//         }
//         else { $this->errors[] = MESSAGE_REGISTRATION_FAILED; }
//       }
//     }
//   }
//
//   public function sendVerificationEmail($user_id, $user_email, $user_activation_hash) {
//     $mail = new PHPMailer;
//     if (EMAIL_USE_SMTP) {
//       $mail->IsSMTP();
//       $mail->SMTPAuth = EMAIL_SMTP_AUTH;
//       if (defined(EMAIL_SMTP_ENCRYPTION)) { $mail->SMTPSecure = EMAIL_SMTP_ENCRYPTION; }
//       $mail->Host = EMAIL_SMTP_HOST;
//       $mail->Username = EMAIL_SMTP_USERNAME;
//       $mail->Password = EMAIL_SMTP_PASSWORD;
//       $mail->Port = EMAIL_SMTP_PORT;
//     }
//     else { $mail->IsMail(); }
//     $mail->From = EMAIL_VERIFICATION_FROM;
//     $mail->FromName = EMAIL_VERIFICATION_FROM_NAME;
//     $mail->AddAddress($user_email);
//     $mail->Subject = EMAIL_VERIFICATION_SUBJECT;
//     $link = EMAIL_VERIFICATION_URL.'?id='.urlencode($user_id).'&verification_code='.urlencode($user_activation_hash);
//     $mail->Body = EMAIL_VERIFICATION_CONTENT.' '.$link;
//     if (!$mail->Send()) { $this->errors[] = MESSAGE_VERIFICATION_MAIL_NOT_SENT . $mail->ErrorInfo; return false; }
//     else { return true; }
//   }
//
//   public function verifyNewUser($user_id, $user_activation_hash) {
//     if ($this->databaseConnection()) {
//       $query_update_user = $this->db_connection->prepare('UPDATE users SET user_active = 1, user_activation_hash = NULL WHERE user_id = :user_id AND user_activation_hash = :user_activation_hash');
//       $query_update_user->bindValue(':user_id', intval(trim($user_id)), PDO::PARAM_INT);
//       $query_update_user->bindValue(':user_activation_hash', $user_activation_hash, PDO::PARAM_STR);
//       $query_update_user->execute();
//       if ($query_update_user->rowCount() > 0) { $this->verification_successful = true; $this->messages[] = MESSAGE_REGISTRATION_ACTIVATION_SUCCESSFUL; }
//       else { $this->errors[] = MESSAGE_REGISTRATION_ACTIVATION_NOT_SUCCESSFUL; }
//     }
//   }
// }
