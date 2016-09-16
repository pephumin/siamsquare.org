<?php


if($_SESSION['acl']['superuser'] != 'Y') {
  echo(mkerror(_('Only superusers allowed.'))."<br>\n");
  return;
}

if(isset($_POST['q_rid']) && !empty($_POST['q_rid'])) {
   response_purge($_POST['q_rid']);
}

?>
<h2>Purge response</h2>

<p>This page is not directly on the main menu because it is dangerous. This <b>completely</b> removes everything about a response from the database <b>forever</b>. Do not do anything here that you are not completely certain about. There is no confirmation, there is no turning back.</p>

<table class="table table-hover">
  <tr>
    <td>Response; ID</td>
  </tr>
  <tr>
    <td><input type="text" name="q_rid" value="" /></td>
  </tr>
    <tr>
    <td colspan="8">
      <input type="hidden" name="where" value="response_purge" />
      <input class="btn btn-default" type="submit" name="submit" value="Purge response" />
    </td>
  </tr>
</table>
<br><br>
