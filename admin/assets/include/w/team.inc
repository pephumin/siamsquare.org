<?php

$sql = 'SELECT username, fname, lname, realm, disabled, expiration, email, pdesign, pstatus, pdata, pall, pgroup, puser, added, changed FROM '.X_DESIGNER;

if ($_SESSION['acl']['superuser'] != 'Y') { $realms = array_to_insql(array_merge($_SESSION['acl']['pall'], $_SESSION['acl']['puser'])); $sql .= " WHERE realm $realms"; }

$sql .= ' ORDER BY ';
if (!isset($_GET['u'])) $_GET['u'] = '';
if (!isset($_GET['g'])) $_GET['g'] = '';
if (!isset($_GET['f'])) $_GET['f'] = '';
if (!isset($_GET['l'])) $_GET['l'] = '';
if (!isset($_GET['s'])) $_GET['s'] = '';

if ($_GET['u'] == 'd') { $us = 'username DESC'; $u = 'a'; } else { $_GET['u'] = 'a'; $us = 'username ASC'; $u = 'd'; }
if ($_GET['g'] == 'd') { $gs = 'realm DESC'; $g = 'a'; } else { $_GET['g'] = 'a'; $gs = 'realm ASC'; $g = 'd'; }
if ($_GET['f'] == 'd' || $_GET['l'] == 'd') { $ls = 'lname DESC'; $l = 'a'; $fs = 'fname DESC'; $f = 'a'; } else { $_GET['l'] = 'a'; $ls = 'lname ASC'; $l = 'd'; $_GET['f'] = 'a'; $fs = 'fname ASC'; $f = 'd'; }
if ($_GET['s'] == 'g') { $sql .= "$gs, $us"; $u = "&s=u&g=" . $_GET['g'] ."&u=". $_GET['u']; $g = "&s=g&g=$g&u=". $_GET['u']; $f = "&s=f"; $l = "&s=l"; }
elseif ($_GET['s'] == 'f' || $_GET['s'] == 'l') { $sql .= "$fs, $ls"; $f = "&s=f&f=$f"; $l = "&s=l&l=$l"; $u = "&s=u"; $g = "&s=g"; }
else { $sql .= "$us, $gs"; $u = "&s=u&g=" . $_GET['g'] ."&u=$u"; $g = "&s=g&g=" . $_GET['g'] ."&u=". $_GET['u']; $f = "&s=f"; $l = "&s=l"; }

echo $sql;

$result = execute_sql($sql);
?>

<h2>My team</h2>

<form class="form-horizontal" method="post" action="<?php echo htmlspecialchars(MYADMIN); ?>">

<p><Click on a username to edit, or click on add new user below.</p>

<p>
  <a class="btn btn-warning" href="<?php echo(htmlspecialchars(MYADMIN."?w=admdesigner")); ?>"><i class="pe-user-plus pe-fw"></i> Add a new user</a>&nbsp;
  <a class="btn btn-warning" href="<?php echo(htmlspecialchars(MYADMIN."?w=upload&account_type=designers")); ?>" disabled><i class="pe-upload pe-fw"></i> Bulk upload users</a>
</p>

<br>

<table class="table table-hover">
  <tr class="active">
    <th><a href="<?php echo(htmlspecialchars(MYADMIN."?w=designers".$u)); ?>">Login</a></th>
    <th><a href="<?php echo(htmlspecialchars(MYADMIN."?w=designers".$f)); ?>">Name</a></th>
    <th><a href="<?php echo(htmlspecialchars(MYADMIN."?w=designers".$l)); ?>">Title</a></th>
    <!-- <th><a href="<?php echo(htmlspecialchars(MYADMIN."?w=designers".$g)); ?>">Group</a></th> -->
    <th>Email</th>
    <th>Added</th>
    <th>Last updated</th>
    <th>&nbsp;</th>
  </tr>

<?php
  while(list($u, $fname, $lname, $r, $d, $e, $email, $pdesign, $pstatus, $pdata, $pall, $pgroup, $puser, $added, $changed) = fetch_row($result)) {
    $result->MoveNext();
    if ($d == 'N') { $d = '&nbsp;'; }
    else { $d = '('. 'disabled' .')'; }
    if (empty($fname)) $fname = '&nbsp;';
    if (empty($lname)) $lname = '&nbsp;';
?>
  <tr>
    <td>
      <a href="<?php echo(htmlspecialchars(MYADMIN."?w=admdesigner&u=".$u."&r=".$r)); ?>"><?php echo($u); ?></a>
    </td>
    <td><?php echo($fname); ?></td>
    <td><?php echo($lname); ?></td>
    <!-- <td><?php echo($r); ?></td> -->
    <td><?php echo($email); ?></td>
    <td><?php echo($added); ?></td>
    <td><?php echo($changed); ?></td>
    <td><?php echo($d); ?></td>
  </tr>

<?php
}
?>

</table>
</form>
<br><br>
