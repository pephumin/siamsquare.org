<?php

include $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/config.php';

class User{

  public $db;

  public function __construct() {
    $this->db = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_DATABASE);
    if ($mysqli->connect_errno) {
      echo "Error: Could not connect to database.\n";
      echo "Errno: " . $mysqli->connect_errno . "\n";
      echo "Error: " . $mysqli->connect_error . "\n";
      exit;
    }
  }

  /*** for registration process ***/
  public function reg_user($name,$username,$password,$email) {

    $password = md5($password);
    $sql="SELECT * FROM users WHERE uname='$username' OR uemail='$email'";

    //checking if the username or email is available in db
    $check =  $this->db->query($sql) ;
    $count_row = $check->num_rows;

    //if the username is not in db then insert to the table
    if ($count_row == 0){
      $sql1="INSERT INTO users SET uname='$username', upass='$password', fullname='$name', uemail='$email'";
      $result = mysqli_query($this->db,$sql1) or die(mysqli_connect_errno()."Data cannot inserted");
          return $result;
    }
    else { return false; }
  }

  public function newuser($username, $password, $fname, $lname) {

    unset($msg);
    $fields = array('username','password','fname','lname');

    $checksql = "SELECT id FROM ".X_RESPONDENT." WHERE username = "._addslashes($post['email']);
    $checkresult = execute_sql($checksql);
    if (record_count($checkresult) > 0) { $msg = mkerror("Your email is already registered in our system. You either need to recover password or register with a different email."); break; }
    db_close($checkresult);

    $password = db_crypt(_addslashes($password));
    $sql = "INSERT INTO ".X_RESPONDENT." ('username','password','fname','lname', 'realm') VALUES ($username, $password, $fname, $lname, 'RD-Email')";
    $res = execute_sql($sql);
    if (!$res) { $msg = mkerror("Request failed, please choose a different username."); break; }
    else { $msg = mksuccess("ระบบได้ดำเนินการสมัครสมาชิกใหม่ให้กับคุณเป็นที่เรียบร้อยแล้ว กรุณาล็อคอินเพื่อเริ่มต้นใช้งานได้ทันที"); }
  }

  /*** for login process ***/
  public function check_login($emailusername, $password) {

    $password = md5($password);
    $sql2="SELECT uid from users WHERE uemail='$emailusername' or uname='$emailusername' and upass='$password'";

    //checking if the username is available in the table
    $result = mysqli_query($this->db,$sql2);
    $user_data = mysqli_fetch_array($result);
    $count_row = $result->num_rows;

    if ($count_row == 1) {
      // this login var will use for the session thing
      $_SESSION['login'] = true;
      $_SESSION['uid'] = $user_data['uid'];
      return true;
    }
    else { return false; }
  }

  /*** for showing the username or fullname ***/
  public function get_fullname($uid){
    $sql3="SELECT fullname FROM users WHERE uid = $uid";
    $result = mysqli_query($this->db,$sql3);
    $user_data = mysqli_fetch_array($result);
    echo $user_data['fullname'];
  }

  /*** starting the session ***/
  public function get_session(){
    return $_SESSION['login'];
  }

  public function user_logout() {
    $_SESSION['login'] = FALSE;
    session_destroy();
  }

}
?>
