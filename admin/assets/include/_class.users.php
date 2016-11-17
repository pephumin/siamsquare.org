<?php

// You need four tables to store role and permission information:
// - the roles table stores a role ID and role name,
// - the permissions table stores a permission ID and description,
// - the role_perm table associates which permissions belong to which roles,
// - and the user_role table associates which roles are assigned to which users.
//
// Using this schema, you can have an unlimited number of roles and permissions and each user can be assigned multiple roles.
//
// CREATE TABLE roles (
//   role_id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
//   role_name VARCHAR(50) NOT NULL,
//
//   PRIMARY KEY (role_id)
// );
//
// CREATE TABLE permissions (
//   perm_id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
//   perm_desc VARCHAR(50) NOT NULL,
//
//   PRIMARY KEY (perm_id)
// );
//
// CREATE TABLE role_perm (
//   role_id INTEGER UNSIGNED NOT NULL,
//   perm_id INTEGER UNSIGNED NOT NULL,
//
//   FOREIGN KEY (role_id) REFERENCES roles(role_id),
//   FOREIGN KEY (perm_id) REFERENCES permissions(perm_id)
// );
//
// CREATE TABLE user_role (
//   user_id INTEGER UNSIGNED NOT NULL,
//   role_id INTEGER UNSIGNED NOT NULL,
//
//   FOREIGN KEY (user_id) REFERENCES users(user_id),
//   FOREIGN KEY (role_id) REFERENCES roles(role_id)
// );
//
// Note the final table, user_role, references a users table which I have not defined here.
// This assumes that user_id is the primary key of your users table.
//
// You don’t need to make any modifications to your users table to store role information as that
// information is stored separately in these new tables.
//
// Contrary to some other RBAC systems, a user here is not required to have a role by default;
// instead, the user simply won’t have any privileges until a role has been specifically assigned.
//
// Alternatively, it would be possible in the PrivilegedUser class to detect an empty role
// and respond with a default unprivileged role when required,
// or you could opt to write a short SQL script to copy over user IDs
// and initialize them by assigning a default unprivileged role.

class Role {
  protected $permissions;

  protected function __construct() {
    $this->permissions = array();
  }

  // return a role object with associated permissions
  public static function getRolePerms($role_id) {
    $role = new Role();
    $sql = "SELECT t2.perm_desc FROM role_perm as t1 JOIN permissions as t2 ON t1.perm_id = t2.perm_id WHERE t1.role_id = :role_id";
    $sth = $GLOBALS["DB"]->prepare($sql);
    $sth->execute(array(":role_id" => $role_id));
    while($row = $sth->fetch(PDO::FETCH_ASSOC)) { $role->permissions[$row["perm_desc"]] = true; }
    return $role;
  }

  // check if a permission is set
  public function hasPerm($permission) {
    return isset($this->permissions[$permission]);
  }
}

// The getRolePerms() method creates a new Role object based on a specific role ID,
// and then uses a JOIN clause to combine the role_perm and perm_desc tables.
//
// For each permission associated with the given role, the description is stored as the key and its value is set to true.
// The hasPerm() method accepts a permission description and returns the value based on the current object.

class PrivilegedUser extends User {

  private $roles;

  public function __construct() {
    parent::__construct();
  }

  // override User method
  public static function getByUsername($username) {
    $sql = "SELECT * FROM users WHERE username = :username";
    $sth = $GLOBALS["DB"]->prepare($sql);
    $sth->execute(array(":username" => $username));
    $result = $sth->fetchAll();

    if (!empty($result)) {
      $privUser = new PrivilegedUser();
      $privUser->user_id = $result[0]["user_id"];
      $privUser->username = $username;
      $privUser->password = $result[0]["password"];
      $privUser->email_addr = $result[0]["email_addr"];
      $privUser->initRoles();
      return $privUser;
    }
    else { return false; }
  }

  // populate roles with their associated permissions
  protected function initRoles() {
    $this->roles = array();
    $sql = "SELECT t1.role_id, t2.role_name FROM user_role as t1 JOIN roles as t2 ON t1.role_id = t2.role_id WHERE t1.user_id = :user_id";
    $sth = $GLOBALS["DB"]->prepare($sql);
    $sth->execute(array(":user_id" => $this->user_id));
    while($row = $sth->fetch(PDO::FETCH_ASSOC)) { $this->roles[$row["role_name"]] = Role::getRolePerms($row["role_id"]); }
  }

  // check if user has a specific privilege
  public function hasPrivilege($perm) {
    foreach ($this->roles as $role) {
      if ($role->hasPerm($perm)) { return true; }
    }
    return false;
  }
}

// The first method, getByUsername(), returns an object populated with information about a specific user.
// A method almost identical to this will likely already exist in your user class,
// but you need to override it here so that the PrivilegedUser‘s methods can be called with the appropriate object.
//
// If you try to invoke a PrivilegedUser method on a User object, you will get an error stating that the method doesn’t exist.
//
// The second method, initRoles(), uses a JOIN to combine the user_role and roles tables to collect
// the roles associated with the current user’s ID. Each role is then populated with its corresponding permissions
// with a call to the Role class method previously created, Role::getRolePerms().
//
// The final method, hasPrivilege(), accepts a permission description and returns
// true of the user has the permission or false otherwise.
//
// With the preceding two classes in place, checking if a user has a specific privilege is as simple as follows:


require_once "Role.php";
require_once "PrivilegedUser.php";

// connect to database...
// ...

session_start();

if (isset($_SESSION["loggedin"])) { $u = PrivilegedUser::getByUsername($_SESSION["loggedin"]); }

if ($u->hasPrivilege("thisPermission")) { } // do something


// Here the username is stored in the active session and a new PrivilegedUser object is created for that user
// on which the hasPrivilege() method can be called.
//
// Depending on the information in your database, your object output will look similar to the following:

// object(PrivilegedUser)#3 (2) {
//   ["roles":"PrivilegedUser":private]=>
//   array(1) {
//     ["Admin"]=>
//     object(Role)#5 (1) {
//       ["permissions":protected]=>
//       array(4) {
//         ["addUser"]=>bool(true)
//         ["editUser"]=>bool(true)
//         ["deleteUser"]=>bool(true)
//         ["editRoles"]=>bool(true)
//       }
//     }
//   }
//   ["fields":"User":private]=>
//   array(4) {
//     ["user_id"]=>string(1) "2"
//     ["username"]=>string(7) "mpsinas"
//     ["password"]=>bool(false)
//     ["email_addr"]=>string(0) ""
//   }
// }

// insert a new role
public static function insertRole($role_name) {
  $sql = "INSERT INTO roles (role_name) VALUES (:role_name)";
  $sth = $GLOBALS["DB"]->prepare($sql);
  return $sth->execute(array(":role_name" => $role_name));
}

// insert array of roles for specified user id
public static function insertUserRoles($user_id, $roles) {
  $sql = "INSERT INTO user_role (user_id, role_id) VALUES (:user_id, :role_id)";
  $sth = $GLOBALS["DB"]->prepare($sql);
  $sth->bindParam(":user_id", $user_id, PDO::PARAM_STR);
  $sth->bindParam(":role_id", $role_id, PDO::PARAM_INT);
  foreach ($roles as $role_id) { $sth->execute(); }
  return true;
}

// delete array of roles, and all associations
public static function deleteRoles($roles) {
  $sql = "DELETE t1, t2, t3 FROM roles as t1 JOIN user_role as t2 on t1.role_id = t2.role_id JOIN role_perm as t3 on t1.role_id = t3.role_id WHERE t1.role_id = :role_id";
  $sth = $GLOBALS["DB"]->prepare($sql);
  $sth->bindParam(":role_id", $role_id, PDO::PARAM_INT);
  foreach ($roles as $role_id) { $sth->execute(); }
  return true;
}

// delete ALL roles for specified user id
public static function deleteUserRoles($user_id) {
  $sql = "DELETE FROM user_role WHERE user_id = :user_id";
  $sth = $GLOBALS["DB"]->prepare($sql);
  return $sth->execute(array(":user_id" => $user_id));
}

// check if a user has a specific role
public function hasRole($role_name) {
  return isset($this->roles[$role_name]);
}

// insert a new role permission association
public static function insertPerm($role_id, $perm_id) {
  $sql = "INSERT INTO role_perm (role_id, perm_id) VALUES (:role_id, :perm_id)";
  $sth = $GLOBALS["DB"]->prepare($sql);
  return $sth->execute(array(":role_id" => $role_id, ":perm_id" => $perm_id));
}

// delete ALL role permissions
public static function deletePerms() {
  $sql = "TRUNCATE role_perm";
  $sth = $GLOBALS["DB"]->prepare($sql);
  return $sth->execute();
}

// Because permissions are tied directly to the application’s underlying code logic,
// new permissions should be manually inserted into or deleted from the database as required.
//
// Roles on the other hand can be easily created, modified or deleted via an administration interface.
