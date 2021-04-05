<?php

$url = "/admin/setup/";

class Login {

  private $db = null;
  private $userid = null;
  private $email = "";
  private $logged_in = false;
  private $password_reset_invalidlink = false;
  private $password_reset_successful = false;
  public $errors = array();
  public $messages = array();

  public function __construct() {
    if (isset($_SERVER['HTTP_REFERER'])) {
      if ($_SERVER['HTTP_REFERER'] == MYHOME."/admin/?w=login") { $ref = MYHOME."/admin/"; }
      else if ($_SERVER['HTTP_REFERER'] == MYHOME."/admin/?w=logout") { $ref = MYHOME."/admin/"; }
      else { $ref = $_SERVER['HTTP_REFERER']; }
    }
    session_start();
    if ($_GET["w"] == "logout") { $this->doLogout(); }
    elseif (!empty($_SESSION['email']) && ($_SESSION['logged_in'] == 1)) { $this->loginWithSessionData(); }
    elseif (isset($_COOKIE['siamsquare'])) { $this->loginWithCookieData(); }
    elseif (isset($_POST["login"])) {
      if (!isset($_POST['rememberme'])) { $_POST['rememberme'] = null; }
      $this->loginWithPostData($_POST['email'], $_POST['password'], $_POST['rememberme'], $ref);
    }
    if ($_POST["w"] == "changepass") { $this->editUserPassword($_POST['oldpass'], $_POST['newpass1'], $_POST['newpass2']); }
    elseif ($_POST["w"] == "updateinfo") { $this->editUserInfo($_POST['fullname'], $_POST['mobile'], $_POST['tax'], $_POST['avatar']); }
    elseif (isset($_POST["request_password_reset"]) && isset($_POST['email'])) { $this->setPasswordResetDatabaseTokenAndSendMail($_POST['email'], $_POST['d']); }
    elseif (isset($_GET["email"]) && isset($_GET["verification"])) { $this->checkIfEmailVerificationCodeIsValid($_GET["email"], $_GET["verification"]); }
    elseif (isset($_POST["submit_new_password"])) { $this->editNewPassword($_POST['email'], $_POST['password_reset'], $_POST['newpass1'], $_POST['newpass2']); }
    $this->setSession();
  }

  private function dbconnect() {
    if ($this->db != null) { return true; }
    else {
      try { $this->db = new PDO('mysql:host='. DB_HOST .';dbname='. DB_DATABASE . ';charset=utf8', DB_USER, DB_PASS); return true; }
      catch (PDOException $e) { $this->errors[] = "Error connecting to the database: " . $e->getMessage(); }
    }
    return false;
  }

  private function setSession() {
    $ip = getip();
    $session_id = session_id();
    $mytime = time();
    $time_check = $mytime-600; // 10 minutes
    if ($this->dbconnect()) {
      $query_user = $this->db->prepare('SELECT * FROM j_sessions WHERE session_id = :session_id');
      $query_user->bindValue(':session_id', $session_id, PDO::PARAM_INT);
      $query_user->execute();
      $found = $query_user->rowCount();
      if ($found == 0) {
        if ($_SESSION["userid"]) {
          $q = $this->db->prepare('INSERT INTO j_sessions (session_id, userid, ip, time) VALUES (:session_id, :userid, :ip, :time)');
          $q->bindValue(':session_id', $session_id, PDO::PARAM_INT);
          $q->bindValue(':time', $mytime, PDO::PARAM_INT);
          $q->bindValue(':ip', $ip, PDO::PARAM_STR);
          $q->bindValue(':userid', $_SESSION["userid"], PDO::PARAM_INT);
        } else {
          $q = $this->db->prepare('INSERT INTO j_sessions (session_id, userid, ip, time) VALUES (:session_id, 0, :ip, :time)');
          $q->bindValue(':session_id', $session_id, PDO::PARAM_INT);
          $q->bindValue(':time', $mytime, PDO::PARAM_INT);
          $q->bindValue(':ip', $ip, PDO::PARAM_STR);
        }
      } else {
        $q = $this->db->prepare('UPDATE j_sessions SET time = :time WHERE session_id = :session_id');
        $q->bindValue(':session_id', $session_id, PDO::PARAM_INT);
        $q->bindValue(':time', $mytime, PDO::PARAM_INT);
      }
      $q->execute();
      $q2 = $this->db->prepare('DELETE FROM j_sessions WHERE time < :time_check');
      $q2->bindValue(':time_check', $time_check, PDO::PARAM_INT);
      $q2->execute();
    }
    else { return false; }
  }

  private function getUserData($email) {
    if ($this->dbconnect()) {
      $query_user = $this->db->prepare('SELECT * FROM j_users WHERE email = :email');
      $query_user->bindValue(':email', $email, PDO::PARAM_STR);
      $query_user->execute();
      return $query_user->fetchObject();
    }
    else { return false; }
  }

  private function loginWithPostData($email, $password, $rememberme, $ref = null) {
    global $url;
    $ip = getip();
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) { $result_row = $this->getUserData(trim($email)); }
    else if ($this->dbconnect()) {
      $query_user = $this->db->prepare('SELECT id, email, password, status, fails, fails_last, fails_ip FROM j_users WHERE email = :email');
      $query_user->bindValue(':email', trim($email), PDO::PARAM_STR);
      $query_user->execute();
      $result_row = $query_user->fetchObject();
      if (($result_row->fails == 3) && ($result_row->fails_last > (time() - 3600))) { $this->errors[] = mkwarn("You have entered too many incorrect passwords. You have 2 more chances before we lock your account."); }
      else if (($result_row->fails == 4) && ($result_row->fails_last > (time() - 3600))) { $this->errors[] = mkwarn("You have entered too many incorrect passwords. You have 1 more chance before we lock your account. Alternatively you can use the <a href=$url class='alert-link'>Password recovery tool</a> to reset your password."); }
      else if (($result_row->fails == 5) && ($result_row->fails_last > (time() - 3600))) {
        $q0 = $this->db->prepare("UPDATE j_users SET status = 3 WHERE email = :email");
        $q0->bindValue(':email', $result_row->email, PDO::PARAM_STR);
        $q0->execute();
        $this->errors[] = mkwarn("You have entered too many incorrect passwords. Your account has been locked for security reason. Please use the <a href=$url class='alert-link'>Password recovery tool</a> to unlock and activate your account again.");
        $q4 = $this->db->prepare("INSERT INTO j_users_logs (userid, ip, data, critical) VALUE (:userid, :ip, '".$result_row->email." is deactivated due to 5 incorrect login attempts', '5')");
        $q4->bindValue(':userid', $result_row->id, PDO::PARAM_INT);
        $q4->bindValue(':ip', $ip, PDO::PARAM_STR);
        $q4->execute();
      }
    }
    if (!isset($result_row->id)) { $this->errors[] = mkerror("This account does not exist in our system. If you are one of our clients, please <a href='/admin/contact/?d=request' class='alert-link'>click here</a> to request for an access."); }
    else if ($result_row->status == 1) { $this->errors[] = mkerror("This account has been deleted, please contact your Manager for more information."); }
    else if ($result_row->status == 2) { $this->errors[] = mkerror("This account has been suspended, please contact your Manager to reactivate it."); }
    else if ($result_row->status == 3) {
      $since = date("j F Y h:i:s A", $result_row->fails_last);
      $logip = $result_row->fails_ip; //echo $logip;
      $this->errors[] = mkerror("This account has been locked due to too many attempts with incorrect password (detected on $since from $logip). In order to unlock and reactivate your account, please use the <a href=$url class='alert-link'>Password recovery tool</a>.");
    }
    else if ($result_row->status == 4) { $this->errors[] = mkerror("This account in currently set to be inactive, please contact your Manager to reactivate it."); }
    else if (($result_row->status == 5) && (!password_verify($password, $result_row->password))) {
      $sth = $this->db->prepare('UPDATE j_users SET fails = fails+1, fails_last = :fails_last, fails_ip = :fails_ip WHERE email = :email');
      $sth->execute(array(':email' => $email, ':fails_last' => time(), ':fails_ip' => $ip));
      $q4 = $this->db->prepare("INSERT INTO j_users_logs (userid, ip, data, critical) VALUE (:userid, :ip, '".$email." failed to log in due to a wrong password', '5')");
      $q4->bindValue(':userid', $result_row->id, PDO::PARAM_INT);
      $q4->bindValue(':ip', $ip, PDO::PARAM_STR);
      $q4->execute();
      $this->errors[] = mkerror("Wrong password");
    }
    else {
      $q1 = $this->db->prepare("UPDATE j_users SET lastlogin2 = lastlogin, lastip2 = lastip WHERE email = :email");
      $q1->bindValue(':email', $result_row->email, PDO::PARAM_STR);
      $q1->execute();
      $q2 = $this->db->prepare("UPDATE j_users SET lastlogin = NOW(), lastip = :ip WHERE email = :email");
      $q2->bindValue(':ip', $ip, PDO::PARAM_STR);
      $q2->bindValue(':email', $result_row->email, PDO::PARAM_STR);
      $q2->execute();
      // $q3 = $this->db->prepare("SELECT U.*, C.fullname as cfullname, C.fullname_th as cfullname_th FROM j_users U, j_companies C WHERE U.companyid = C.id AND U.email = :email");
      $q3 = $this->db->prepare("SELECT U.*, R.role FROM j_users U, j_roles R WHERE U.level = R.id AND U.email = :email");
      $q3->bindValue(':email', $result_row->email, PDO::PARAM_STR);
      $q3->execute();
      $resulty = $q3->fetchObject();
      $_SESSION['logged_in'] = 1;                          $this->logged_in = true;
      $_SESSION['userid'] = $resulty->id;                  $this->userid = $resulty->id;
      $_SESSION['email'] = $result_row->email;             $this->email = $result_row->email;
      $_SESSION['companyid'] = $resulty->companyid;        $this->companyid = $resulty->companyid;
      $_SESSION['cfullname'] = $resulty->cfullname;        $this->cfullname = $resulty->cfullname;
      $_SESSION['cfullname_th'] = $resulty->cfullname_th;  $this->cfullname_th = $resulty->cfullname_th;
      $_SESSION['fullname'] = $resulty->fullname;          $this->fullname = $resulty->fullname;
      $_SESSION['mobile'] = $resulty->mobile;              $this->mobile = $resulty->mobile;
      $_SESSION['tax'] = $resulty->tax;                    $this->tax = $resulty->tax;
      $_SESSION['avatar'] = $resulty->avatar;              $this->avatar = $resulty->avatar;
      $_SESSION['status'] = $resulty->status;              $this->status = $resulty->status;
      $_SESSION['level'] = $resulty->level;                $this->level = $resulty->level;
      $_SESSION['created'] = $resulty->created;            $this->created = $resulty->created;
      $_SESSION['updated'] = $resulty->updated;            $this->updated = $resulty->updated;
      $_SESSION['lastlogin'] = $resulty->lastlogin;        $this->lastlogin = $resulty->lastlogin;
      $_SESSION['lastlogin2'] = $resulty->lastlogin2;      $this->lastlogin2 = $resulty->lastlogin2;
      $_SESSION['ip'] = $ip;                               $this->ip = $ip;
      $_SESSION['lastip'] = $resulty->lastip;              $this->lastip = $resulty->lastip;
      $_SESSION['lastip2'] = $resulty->lastip2;            $this->lastip2 = $resulty->lastip2;
      $_SESSION['role'] = $resulty->role;                  $this->role = $resulty->role;
      $q4 = $this->db->prepare("INSERT INTO j_users_logs (userid, ip, data, critical) VALUE (:userid, :ip, '".$result_row->email." logged in', '1')");
      $q4->bindValue(':userid', $resulty->id, PDO::PARAM_INT);
      $q4->bindValue(':ip', $_SESSION['ip'], PDO::PARAM_STR);
      $q4->execute();
      $sth = $this->db->prepare('UPDATE j_users SET fails = 0, fails_last = NULL WHERE email = :email AND fails != 0');
      $sth->execute(array(':email' => $result_row->email));
      if (isset($rememberme)) { $this->newRememberMeCookie(); }
      else { $this->deleteRememberMeCookie(); }
      if ($ref) { header("location: $ref"); exit; }
    }
  }

  private function loginWithCookieData() {
    global $url;
    $ip = getip();
    if (isset($_COOKIE['siamsquare'])) {
      list ($userid, $token, $hash) = explode(':', $_COOKIE['siamsquare']);
      if ($hash == hash('sha256', $userid . ':' . $token . COOKIE_KEY) && !empty($token)) {
        if ($this->dbconnect()) {
          // $q0 = $this->db->prepare("SELECT U.id, U.email, U.companyid, C.fullname as cfullname, C.fullname_th as cfullname_th, U.status, U.level, U.fails, U.fails_last, U.fails_ip FROM j_users U, j_companies C WHERE U.companyid = C.id AND U.id = :userid AND U.token = :token AND U.token IS NOT NULL");
          $q0 = $this->db->prepare("SELECT U.*, R.role FROM j_users U, j_roles R WHERE U.level = R.id AND U.id = :userid AND U.token = :token AND U.token IS NOT NULL");
          $q0->bindValue(':userid', $userid, PDO::PARAM_INT);
          $q0->bindValue(':token', $token, PDO::PARAM_STR);
          $q0->execute();
          $result = $q0->fetchObject();
          if (!isset($result->id)) { $this->errors[] = mkerror("This account does not exist in our system. If you are one of our clients, please <a href='/admin/contact/?d=request' class='alert-link'>click here</a> to request for a free access."); }
          else if ($result->status == 1) { $this->errors[] = mkerror("This account has been deleted, please contact your Manager for more information."); }
          else if ($result->status == 2) { $this->errors[] = mkerror("This account has been suspended, please contact your Manager to reactivate it."); }
          else if ($result->status == 3) {
            $since = date("j F Y h:i:s A", $result->fails_last);
            $logip = $result->fails_ip; //echo $logip;
            $this->errors[] = mkerror("This account has been locked due to too many attempts with incorrect password (detected on $since from $logip). In order to unlock and reactivate your account, please use the <a href=$url class='alert-link'>Password recovery tool</a>.");
          }
          else if ($result->status == 4) { $this->errors[] = mkerror("This account in currently set to be inactive, please contact your Manager to reactivate it."); }
          else if (($result->status == 5) && (isset($result->email))) {
            $_SESSION['logged_in'] = 1;                            $this->logged_in = true;
            $_SESSION['email'] = $result->email;                   $this->email = $result->email;
            $_SESSION['companyid'] = $result->companyid;           $this->companyid = $result->companyid;
            $_SESSION['cfullname'] = $result->cfullname;           $this->cfullname = $result->cfullname;
            $_SESSION['cfullname_th'] = $result->cfullname_th;     $this->cfullname_th = $result->cfullname_th;
            $_SESSION['status'] = $result->status;                 $this->status = $result->status;
            $_SESSION['level'] = $result->level;                   $this->level = $result->level;
            $_SESSION['role'] = $result->role;                     $this->role = $result->role;
            $q1 = $this->db->prepare("UPDATE j_users SET lastlogin2 = lastlogin, lastip2 = lastip WHERE email = :email");
            $q1->bindValue(':email', $_SESSION['email'], PDO::PARAM_STR);
            $q1->execute();
            $q2 = $this->db->prepare("UPDATE j_users SET lastlogin = NOW(), lastip = :ip WHERE email = :email");
            $q2->bindValue(':ip', $ip, PDO::PARAM_STR);
            $q2->bindValue(':email', $_SESSION['email'], PDO::PARAM_STR);
            $q2->execute();
            $_SESSION['ip'] = $ip;
            $this->ip = $ip;
            $q3 = $this->db->prepare("SELECT U.*, R.role FROM j_users U, j_roles R WHERE U.level = R.id AND U.email = :email");
            $q3->bindValue(':email', $_SESSION['email'], PDO::PARAM_STR);
            $q3->execute();
            $resulty = $q3->fetchObject();
            if (isset($resulty->id)) {
              $_SESSION['userid'] = $resulty->id;                    $this->userid = $resulty->id;
              $_SESSION['fullname'] = $resulty->fullname;            $this->fullname = $resulty->fullname;
              $_SESSION['mobile'] = $resulty->mobile;                $this->mobile = $resulty->mobile;
              $_SESSION['tax'] = $resulty->tax;                      $this->tax = $resulty->tax;
              $_SESSION['avatar'] = $resulty->avatar;                $this->avatar = $resulty->avatar;
              $_SESSION['created'] = $resulty->created;              $this->created = $resulty->created;
              $_SESSION['updated'] = $resulty->updated;              $this->updated = $resulty->updated;
              $_SESSION['lastlogin'] = $resulty->lastlogin;          $this->lastlogin = $resulty->lastlogin;
              $_SESSION['lastlogin2'] = $resulty->lastlogin2;        $this->lastlogin2 = $resulty->lastlogin2;
              $_SESSION['lastip'] = $resulty->lastip;                $this->lastip = $resulty->lastip;
              $_SESSION['lastip2'] = $resulty->lastip2;              $this->lastip2 = $resulty->lastip2;
              $_SESSION['role'] = $resulty->role;                    $this->role = $resulty->role;
              $this->newRememberMeCookie();
              $q4 = $this->db->prepare("INSERT INTO j_users_logs (userid, ip, data, critical) VALUE (:userid, :ip, '".$_SESSION['email']." re-logged in', '1')");
              $q4->bindValue(':userid', $_SESSION['userid'], PDO::PARAM_INT);
              $q4->bindValue(':ip', $_SESSION['ip'], PDO::PARAM_STR);
              $q4->execute();
              return true;
            }
          }
        }
      }
      $this->deleteRememberMeCookie();
      $this->errors[] = mkerror("Invalid cookie");
    }
    return false;
  }

  private function loginWithSessionData() {
    $this->email = $_SESSION['email'];
    $this->logged_in = true;
  }

  public function doLogout() {
    if ($this->dbconnect()) {
      $query = $this->db->prepare("INSERT INTO j_users_logs (userid, ip, data, critical) VALUE (:userid, :ip, '".$_SESSION['email']." logged out', '1')");
      $query->bindValue(':userid', $_SESSION['userid'], PDO::PARAM_INT);
      $query->bindValue(':ip', $_SESSION['ip'], PDO::PARAM_STR);
      $query->execute();
    }
    $this->deleteRememberMeCookie();
    $_SESSION = array();
    // session_unset();
    session_destroy();
    $this->logged_in = false;
    $this->messages[] = mksuccess("You have been successfully logged out. We will redirect you to the front page in a moment.");
    $target = "/admin";
    header("refresh: 10; url=$target");
    $title = "You have been logged out";
    pageHeader($title);
    echo "<h2>$title</h2>\n";
    echo mksuccess("You have been successfully logged out. We will redirect you to the front page in a moment.");
    echo "<p>Thank you for using our system. And feel free to come back as often as you need.</p>\n";
    echo "<p>You can <a href=\"$target\" class='alert-link'>click here</a> if you choose not to wait in order to log back in to our system.</p>\n";
    echo "<br>\n\n";
    $notes = array (array("title" => "Logged out", "text" => "You have been successfully logged out from our system.", "image" => "/admin/assets/img/notification.svg"));
    if ($notes) { pageFooter($notes); } else { pageFooter(); }
    exit;
  }

  public function isUserLoggedIn() {
    if (isset($_SESSION['logged_in']) AND $_SESSION['logged_in'] == 1) { return true; }
    return false;
  }

  private function newRememberMeCookie() {
    if ($this->dbconnect()) {
      $random_token_string = hash('sha256', mt_rand());
      $sth = $this->db->prepare("UPDATE j_users SET token = :token WHERE id = :userid");
      $sth->execute(array(':token' => $random_token_string, ':userid' => $_SESSION['userid']));
      $cookie_string_first_part = $_SESSION['userid'] . ':' . $random_token_string;
      $cookie_string_hash = hash('sha256', $cookie_string_first_part . COOKIE_KEY);
      $cookie_string = $cookie_string_first_part . ':' . $cookie_string_hash;
      setcookie('siamsquare', $cookie_string, time() + COOKIE_RUNTIME, "/", COOKIE_DOMAIN);
    }
  }

  private function deleteRememberMeCookie() {
    if ($this->dbconnect()) {
      $sth = $this->db->prepare("UPDATE j_users SET token = NULL WHERE id = :userid");
      $sth->execute(array(':userid' => $_SESSION['userid']));
    }
    setcookie('siamsquare', false, time() - (3600 * 3650), '/', COOKIE_DOMAIN);
  }

  public function editUserPassword($oldpass, $newpass1, $newpass2) {
    if (empty($newpass1) || empty($newpass2) || empty($oldpass)) { $this->errors[] = mkerror("You have not entered all required fields"); }
    elseif ($newpass1 !== $newpass2) { $this->errors[] = mkerror("Your two new passwords are not matching each other"); }
    elseif (strlen($newpass1) < 6) { $this->errors[] = mkerror("Your password is too short"); }
    else {
      $result_row = $this->getUserData($_SESSION['email']);
      if (isset($result_row->password)) {
        if (password_verify($oldpass, $result_row->password)) {
          $hash_cost_factor = (defined('HASH_COST_FACTOR') ? HASH_COST_FACTOR : null);
          $password = password_hash($newpass1, PASSWORD_DEFAULT, array('cost' => $hash_cost_factor));
          $query_update = $this->db->prepare('UPDATE j_users SET password = :password WHERE id = :userid');
          $query_update->bindValue(':password', $password, PDO::PARAM_STR);
          $query_update->bindValue(':userid', $_SESSION['userid'], PDO::PARAM_INT);
          $query_update->execute();
          if ($query_update->rowCount()) {
            $this->messages[] = mksuccess("Your password has been changed successfully");
            $notes = array (array("title" => "Password changed", "text" => "You have changed your password successfully.", "image" => "/admin/assets/img/notification.svg"));
            $q4 = $this->db->prepare("INSERT INTO j_users_logs (userid, ip, data, critical) VALUE (:userid, :ip, '".$_SESSION['email']." changed password successfully', '3')");
            $q4->bindValue(':userid', $_SESSION['userid'], PDO::PARAM_INT);
            $q4->bindValue(':ip', $_SESSION['ip'], PDO::PARAM_STR);
            $q4->execute();
          }
          else { $this->errors[] = mkerror("Cannot change your password, please try again"); }
        }
        else { $this->errors[] = mkerror("Your current password is incorrect"); }
        $q5 = $this->db->prepare("INSERT INTO j_users_logs (userid, ip, data, critical) VALUE (:userid, :ip, '".$_SESSION['email']." failed to change password due to an incorrect current password', '3')");
        $q5->bindValue(':userid', $_SESSION['userid'], PDO::PARAM_INT);
        $q5->bindValue(':ip', $_SESSION['ip'], PDO::PARAM_STR);
        $q5->execute();
      }
      else { $this->errors[] = mkerror("This user does not exist in our database"); }
    }
  }

  public function editUserInfo($fullname, $mobile, $tax, $avatar) {
    // if (empty($fullname) || empty($mobile)) { $this->errors[] = mkerror("You have not entered all required fields"); }
    if (empty($fullname)) { $this->errors[] = mkerror("You have not entered your name!"); }
    // elseif (strlen($mobile) < 10) { $this->errors[] = mkerror("Your mobile number has to be 10 digits only"); }
    // elseif (ctype_digit($mobile) != true) { $this->errors[] = mkerror("Your mobile number cannot be non-numeric character"); }
    $add = ""; $move = 0;
    if (($fullname) || ($fullname != $_SESSION['fullname'])) { $add .= "fullname = :fullname, "; $move = 1; }
    if (($$mobile) || ($mobile != $_SESSION['mobile'])) { $add .= "mobile = :mobile, "; $move = 1; }
    if (($tax) || ($tax != $_SESSION['tax'])) { $add .= "tax = :tax, "; $move = 1; }
    if (($avatar) || ($avatar != $_SESSION['avatar'])) { $add .= "avatar = :avatar, "; $move = 1; }
    $add = substr_replace($add, '', -2);
    if ($move == 0) { $this->errors[] = mkinfo("No changes were detected, therefore we did not update anything at all."); }
    // elseif (($fullname == $_SESSION['fullname']) && ($mobile == $_SESSION['mobile']) && ($avatar == $_SESSION['avatar'])) { $this->errors[] = mkerror("Nothing has changed therefore we did not update anything"); }
    else {
      if ($this->dbconnect()) {
        $query_update = $this->db->prepare("UPDATE j_users SET ".$add." WHERE email = :email");
        // print_r($query_update);
        // print_r($_POST);
        if ($fullname != $_SESSION['fullname']) { $query_update->bindValue(':fullname', $fullname, PDO::PARAM_STR); }
        if ($mobile != $_SESSION['mobile']) { $query_update->bindValue(':mobile', $mobile, PDO::PARAM_STR); }
        if ($tax != $_SESSION['tax']) { $query_update->bindValue(':tax', $tax, PDO::PARAM_STR); }
        if ($avatar != $_SESSION['avatar']) { $query_update->bindValue(':avatar', $avatar, PDO::PARAM_STR); }
        $query_update->bindValue(':email', $_SESSION["email"], PDO::PARAM_STR);
        $query_update->execute();
        // if ($avatar) { $query = 'UPDATE j_users SET fullname = :fullname, mobile = :mobile, avatar = :avatar WHERE email = :email'; }
        // else { $query = 'UPDATE j_users SET fullname = :fullname, mobile = :mobile WHERE email = :email'; }
        // $query_update = $this->db->prepare($query);
        // $query_update->bindValue(':email', $_SESSION['email'], PDO::PARAM_INT);
        // if ($fullname) { $query_update->bindValue(':fullname', $fullname, PDO::PARAM_STR); }
        // if ($mobile) { $query_update->bindValue(':mobile', $mobile, PDO::PARAM_STR); }
        // if ($avatar) { $query_update->bindValue(':avatar', $avatar, PDO::PARAM_STR); }
        // $query_update->execute();
        if ($query_update->rowCount()) {
          $this->messages[] = mksuccess("Your information has been updated successfully");
          $notes = array (array("title" => "Info updated", "text" => "You have updated your information successfully.", "image" => "/admin/assets/img/notification.svg"));
          $_SESSION['fullname'] = $fullname;
          // $_SESSION['mobile'] = $mobile;
          if ($mobile) { $_SESSION['mobile'] = $mobile; }
          if ($tax) { $_SESSION['tax'] = $tax; }
          if ($avatar) { $_SESSION['avatar'] = $avatar; }
          // $q4 = $this->db->prepare("INSERT INTO j_users_logs (userid, ip, data, critical) VALUE (:userid, :ip, '".$_SESSION['email']." updated profile info', '3')");
          // $q4->bindValue(':userid', $_SESSION['userid'], PDO::PARAM_INT);
          // $q4->bindValue(':ip', $_SESSION['ip'], PDO::PARAM_STR);
          // $q4->execute();
        } else { $this->errors[] = mkerror("Cannot update your information, please try again"); }
      }
    }
  }

  public function setPasswordResetDatabaseTokenAndSendMail($email, $d) {
    $ip = getip();
    $email = trim($email);
    if (empty($email)) { $this->errors[] = mkerror("You did not enter the email address"); }
    else {
      $temporary_timestamp = time();
      $password_reset = sha1(uniqid(mt_rand(), true));
      $result_row = $this->getUserData($email);
      if (!$result_row) { $this->errors[] = mkerror("This user does not exist in our database"); }
      else {
        $query_update = $this->db->prepare('UPDATE j_users SET password_reset = :password_reset, password_reset_timestamp = :password_reset_timestamp WHERE email = :email');
        $query_update->bindValue(':password_reset', $password_reset, PDO::PARAM_STR);
        $query_update->bindValue(':password_reset_timestamp', $temporary_timestamp, PDO::PARAM_INT);
        $query_update->bindValue(':email', $email, PDO::PARAM_STR);
        $query_update->execute();
        if ($query_update->rowCount() == 1) {
          $this->sendPasswordResetMail($email, $password_reset, $d);
          if ($d == "activation") { $q6 = $this->db->prepare("INSERT INTO j_users_logs (userid, ip, data, critical) VALUE (:userid, :ip, '".$email." requested an account activation', '3')"); }
          else if ($d == "recovery") { $q6 = $this->db->prepare("INSERT INTO j_users_logs (userid, ip, data, critical) VALUE (:userid, :ip, '".$email." requested a password reset', '3')"); }
          $q6->bindValue(':userid', $result_row->id, PDO::PARAM_INT);
          $q6->bindValue(':ip', $ip, PDO::PARAM_STR);
          $q6->execute();
          return true;
        }
        else { $this->errors[] = mkerror("Cannot send the password reset email, please try again"); }
      }
    }
    return false;
  }

  public function sendPasswordResetMail($email, $password_reset, $d) {
    global $url;
    $mail = new PHPMailer;
    $mail->IsMail();
    $mail->setFrom(EMAILNOREPLY);
    $mail->addAddress($email);
    $mail->IsHTML(true);
    $mail->CharSet="utf-8";
    if ($d == "activation") { $mail->Subject = "Account activation at SiamSquare"; }
    else if ($d == "recovery") { $mail->Subject = "Password reset at SiamSquare"; }
    $date = date("M d, Y"); $time = date("h:m");
    $datetime = "Email sent on ".$date." at ".$time;
    $template = $_SERVER['DOCUMENT_ROOT'].'/admin/assets/email/setup.html';
    $message = file_get_contents($template, $message);
    $message = str_replace('%datetime%', $datetime, $message);
    $message = str_replace('%subject%', $subject, $message);
    $message = str_replace('%sendto%', $email, $message);
    $message = str_replace('%siamsquare%', MYTITLE, $message);
    $link = MYHOME.$url.'?email='.urlencode($email).'&verification='.urlencode($password_reset);
    $message = str_replace('%link%', $link, $message);
    $mail->msgHTML($message);
    $mail->AltBody = "Hello,\n\nIt appears that you have requested for an access to SiamSquare.\n\nIf this is correct, you can proceed further by clicking the provided link below.\n\nLink: $link.\n\nPlease note this link will be valid for 3 hours.\n\nYou can ignore this email if you have not made this request.\n\nRegards,\nSiamSquare";
    if (!$mail->Send()) { $this->errors[] = mkerror("Email was not sent. Error: " . $mail->ErrorInfo); return false; exit; }
    else { $this->messages[] = mksuccess("We have just sent you an email containing a verification code. Please check your email now, and then click the link provided to complete the emaail verification. <strong>Please note this verification code will be valid for 3 hours</strong>."); return true; }
  }

  public function checkIfEmailVerificationCodeIsValid($email, $verification) {
    $ip = getip();
    $email = trim($email);
    if (empty($email) || empty($verification)) { $this->errors[] = mkerror("Broken link, please make sure you copy and paste all of them"); }
    else {
      $result_row = $this->getUserData($email);
      if (isset($result_row->id) && $result_row->password_reset == $verification) {
        $timestamp_one_hour_ago = time() - 10800; // 3 hours - 3600 seconds are 1 hour
        if ($result_row->password_reset_timestamp > $timestamp_one_hour_ago) { $this->password_reset_invalidlink = true; }
        else {
          $this->errors[] = mkerror("The reset link has already expired (more than 3 hours). You need to start the recovery process again and make sure you complete the process within 3 hours.");
          $q7 = $this->db->prepare("INSERT INTO j_users_logs (userid, ip, data, critical) VALUE (:userid, :ip, '".$email." failed to reset password due to an expired reset link', '3')");
          $q7->bindValue(':userid', $result_row->id, PDO::PARAM_INT);
          $q7->bindValue(':ip', $ip, PDO::PARAM_STR);
          $q7->execute();
        }
      }
      else { $this->errors[] = mkerror("This password reset link is no longer working. Please restart the recovery process again."); }
    }
  }

  public function editNewPassword($email, $password_reset, $newpass1, $newpass2) {
    $ip = getip();
    $email = trim($email);
    if (empty($email) || empty($password_reset) || empty($newpass1) || empty($newpass2)) { $this->errors[] = mkerror("You have not entered all required fields"); }
    elseif ($newpass1 !== $newpass2) { $this->errors[] = mkerror("Your two new passwords are not matching each other"); }
    elseif (strlen($newpass1) < 6) { $this->errors[] = mkerror("Your password is too short"); }
    else if ($this->dbconnect()) {
      $result_row = $this->getUserData($email);
      $hash_cost_factor = (defined('HASH_COST_FACTOR') ? HASH_COST_FACTOR : null);
      $password = password_hash($newpass1, PASSWORD_DEFAULT, array('cost' => $hash_cost_factor));
      $query_update = $this->db->prepare('UPDATE j_users SET password = :password, password_reset = NULL, password_reset_timestamp = NULL WHERE email = :email AND password_reset = :password_reset');
      $query_update->bindValue(':password', $password, PDO::PARAM_STR);
      $query_update->bindValue(':password_reset', $password_reset, PDO::PARAM_STR);
      $query_update->bindValue(':email', $email, PDO::PARAM_STR);
      $query_update->execute();
      if ($query_update->rowCount() == 1) {
        $q1 = $this->db->prepare("UPDATE j_users SET status = 5 WHERE email = :email");
        $q1->bindValue(':email', $email, PDO::PARAM_STR);
        $q1->execute();
        $this->password_reset_successful = true;
        $this->messages[] = mksuccess("Your password has been changed successfully");
        $q8 = $this->db->prepare("INSERT INTO j_users_logs (userid, ip, data, critical) VALUE (:userid, :ip, '".$email." changed to a new password successfully', '3')");
        $q8->bindValue(':userid', $result_row->id, PDO::PARAM_INT);
        $q8->bindValue(':ip', $ip, PDO::PARAM_STR);
        $q8->execute();
      }
      else { $this->errors[] = mkerror("Cannot change your password, please try again"); }
    }
  }

  public function passwordResetLinkIsValid() { return $this->password_reset_invalidlink; }

  public function passwordResetWasSuccessful() { return $this->password_reset_successful; }

}

?>
