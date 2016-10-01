<?php

//$sid = _addslashes($_SESSION['survey_id']);
$sid = $_SESSION['survey_id'];

$sql = "SELECT COUNT(*) FROM ".X_QUESTION." WHERE survey_id = ${sid} AND deleted = 'N' AND type_id = '99'";
$result = execute_sql($sql);
$num_sections = 1 + $result->fields[0];
db_close($result);

if (empty($_POST['section'])) { $_POST['section'] = 1; }

displayTabNav();

?>

<script type="text/javascript">
function other_check(name) {
  other = name.split("_");
  var f = document.phpesp;
  for (var i=0; i<=f.elements.length; i++) {
    if (f.elements[i].value == "other_"+other[1]) {
      f.elements[i].checked=true;
      break;
    }
  }
}
function validate() {
  return true;
}
// End -->
</script>


<input type="hidden" name="w" value="tab">
<input type="hidden" name="old_tab" value="preview">
<input type="hidden" name="sid" value="<?php echo $sid; ?>">

<?php

$preview = 1;

survey_render($sid,$_POST['section']);

if ($num_sections > 1) {

  echo "<nav class=\"pagination-centered\">\n";
  echo "  <ul class=\"pagination\">\n";
  for ($a=0; $a < $num_sections; $a++) {
    $b = $a + 1;
    if ($b == $_POST['section']) { echo "    <li class=\"disabled\"><input class=\"btn btn-sm btn-warning\" type=\"submit\" name=\"section\" value=\"$b\"></li>\n"; }
    else { echo "    <li><input class=\"btn btn-sm btn-default\" type=\"submit\" name=\"section\" value=\"$b\"></li>\n"; }
  }
  echo "  </ul>\n";
  echo "</nav>\n\n";
}

?>
