<?php

function sec_session_start() {
  $session_name = 'ssq';
  session_name($session_name);
  $secure = true;
  $httponly = true; // This stops JavaScript being able to access the session id.
  // Forces sessions to only use cookies.
  if (ini_set('session.use_only_cookies', 1) === FALSE) {
    header("Location: ../error.php?err=Could not initiate a safe session (ini_set)");
    exit();
  }
  // Gets current cookies params.
  $cookieParams = session_get_cookie_params();
  session_set_cookie_params($cookieParams["lifetime"], $cookieParams["path"],  $cookieParams["domain"],  $secure, $httponly);
  session_start(); // Start the PHP session
  session_regenerate_id(true); // regenerated the session, delete the old one.
}

function memberlogin($email, $password, $mysqli) {
  // Using prepared statements means that SQL injection is not possible.
  if ($stmt = $mysqli->prepare("SELECT id, username, password FROM members WHERE email = ? LIMIT 1")) {
    $stmt->bind_param('s', $email);  // Bind "$email" to parameter.
    $stmt->execute();    // Execute the prepared query.
    $stmt->store_result();
    $stmt->bind_result($user_id, $username, $db_password); // get variables from result.
    $stmt->fetch();
    if ($stmt->num_rows == 1) {
      if (password_verify($password, $db_password)) {
        $user_browser = $_SERVER['HTTP_USER_AGENT'];
        $user_id = preg_replace("/[^0-9]+/", "", $user_id);
        $_SESSION['user_id'] = $user_id;
        $username = preg_replace("/[^a-zA-Z0-9_\-]+/", "", $username);
        $_SESSION['username'] = $username;
        $_SESSION['login_string'] = hash('sha512', $db_password . $user_browser);
        // Login successful.
        return true;
      } else {
        // Password is not correct and we want to record this attempt in the database
        $now = time();
        $mysqli->query("INSERT INTO login_attempts(user_id, time) VALUES ('$user_id', '$now')");
        return false;
      }
    } else {
      // No user exists.
      return false;
    }
  }
}

function login_check($mysqli) {
  // Check if all session variables are set
  if (isset($_SESSION['user_id'], $_SESSION['username'], $_SESSION['login_string'])) {
    $user_id = $_SESSION['user_id'];
    $login_string = $_SESSION['login_string'];
    $username = $_SESSION['username'];
    // Get the user-agent string of the user.
    $user_browser = $_SERVER['HTTP_USER_AGENT'];
    if ($stmt = $mysqli->prepare("SELECT password FROM members WHERE id = ? LIMIT 1")) {
      // Bind "$user_id" to parameter.
      $stmt->bind_param('i', $user_id);
      $stmt->execute();   // Execute the prepared query.
      $stmt->store_result();
      if ($stmt->num_rows == 1) { // If the user exists get variables from result.
        $stmt->bind_result($password);
        $stmt->fetch();
        $login_check = hash('sha512', $password . $user_browser);
        if (hash_equals($login_check, $login_string) ) { return true; } // Logged in
        else { return false; } // Not logged in
      }
      else { return false; } // Not logged in
    }
    else { return false; } // Not logged in
  }
  else { return false; } // Not logged in
}

function esc_url($url) {
  if ('' == $url) { return $url; }
  $url = preg_replace('|[^a-z0-9-~+_.?#=!&;,/:%@$\|*\'()\\x80-\\xff]|i', '', $url);
  $strip = array('%0d', '%0a', '%0D', '%0A');
  $url = (string) $url;
  $count = 1;
  while ($count) { $url = str_replace($strip, '', $url, $count); }
  $url = str_replace(';//', '://', $url);
  $url = htmlentities($url);
  $url = str_replace('&amp;', '&#038;', $url);
  $url = str_replace("'", '&#039;', $url);
  if ($url[0] !== '/') { return ''; } // We're only interested in relative links from $_SERVER['PHP_SELF']
  else { return $url; }
}

function process_login() {
  sec_session_start(); // Our custom secure way of starting a PHP session.
  if (isset($_POST['email'], $_POST['p'])) {
    $email = $_POST['email'];
    $password = $_POST['p']; // The hashed password.
    if (login($email, $password, $mysqli) == true) { header('Location: ../protected_page.php'); } // Login success
    else { header('Location: ../index.php?error=1'); } // Login failed
  }
  else { echo 'Invalid Request'; } // The correct POST variables were not sent to this page.
}

function logout() {
  sec_session_start();
  $_SESSION = array();
  $params = session_get_cookie_params();
  setcookie(session_name(), '', time() - 42000, $params["path"], $params["domain"], $params["secure"], $params["httponly"]);
  session_destroy();
  header('Location: ../index.php');
}

function register() {
  $error_msg = "";
  if (isset($_POST['username'], $_POST['email'], $_POST['p'])) {
    $username = filter_input(INPUT_POST, 'username', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $email = filter_var($email, FILTER_VALIDATE_EMAIL);
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) { $error_msg .= '<p class="error">The email address you entered is not valid</p>'; }
    $password = filter_input(INPUT_POST, 'p', FILTER_SANITIZE_STRING);
    if (strlen($password) != 128) { $error_msg .= '<p class="error">Invalid password configuration.</p>'; }
    $prep_stmt = "SELECT id FROM members WHERE email = ? LIMIT 1";
    $stmt = $mysqli->prepare($prep_stmt);
    if ($stmt) {
      $stmt->bind_param('s', $email);
      $stmt->execute();
      $stmt->store_result();
      if ($stmt->num_rows == 1) { $error_msg .= '<p class="error">A user with this email address already exists.</p>'; $stmt->close(); }
    }
    else { $error_msg .= '<p class="error">Database error Line 39</p>'; $stmt->close(); }

    $prep_stmt = "SELECT id FROM members WHERE username = ? LIMIT 1";
    $stmt = $mysqli->prepare($prep_stmt);

    if ($stmt) {
      $stmt->bind_param('s', $username);
      $stmt->execute();
      $stmt->store_result();
      if ($stmt->num_rows == 1) { $error_msg .= '<p class="error">A user with this username already exists</p>'; $stmt->close(); }
    }
    else { $error_msg .= '<p class="error">Database error line 55</p>'; $stmt->close(); }

    // We'll also have to account for the situation where the user doesn't have
    // rights to do registration, by checking what type of user is attempting to
    // perform the operation.

    if (empty($error_msg)) {

      // Create hashed password using the password_hash function.
      // This function salts it with a random salt and can be verified with
      // the password_verify function.
      $password = password_hash($password, PASSWORD_BCRYPT);

      // Insert the new user into the database
      if ($insert_stmt = $mysqli->prepare("INSERT INTO members (username, email, password) VALUES (?, ?, ?)")) {
        $insert_stmt->bind_param('sss', $username, $email, $password);
        if (! $insert_stmt->execute()) { header('Location: ../error.php?err=Registration failure: INSERT'); }
      }
      header('Location: ./register_success.php');
    }
  }
}

?>
