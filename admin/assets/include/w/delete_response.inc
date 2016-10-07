<?php

if ($_SESSION['acl']['superuser'] != 'Y') { echo(mkerror('Only superusers allowed.')."<br>\n"); return; }

if (isset($_POST['q_rid']) && !empty($_POST['q_rid'])) { response_purge($_POST['q_rid']); }

echo "<h2>Delete a response</h2>\n";
echo "<div class=\"alert alert-danger alert-dismissible\" role=\"alert\"><a href=\"#\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>\n";
echo "<h4><i class=\"pe-exclamation-triangle pe-fw pe-lg\"></i> Be careful on this action</h4>\n";
echo "<p>This page is not directly on the main menu because it is dangerous. This <strong>completely</strong> removes everything about a survey from the database <strong>forever</strong>.</p>";
echo "<p>All question info, general info, results, etc. are purged from the database. Do not do anything here that you are not completely certain about. There is no confirmation, there is no turning back.</p>\n";
echo "</div>\n";

?>

<table class="table table-hover">
  <tr>
    <td>Response ID</td>
  </tr>
  <tr>
    <td><input type="text" name="q_rid" value=""></td>
  </tr>
    <tr>
    <td colspan="8">
      <input type="hidden" name="w" value="response_purge">
      <input class="btn btn-default" type="submit" name="submit" value="Delete a response">
    </td>
  </tr>
</table>
<br><br>
