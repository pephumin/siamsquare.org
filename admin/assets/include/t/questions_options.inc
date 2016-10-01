<?php

if ($updated && $curr_q) {
  $sql = "SELECT id, content, content_th FROM ".X_QUESTION_CHOICE." WHERE question_id = ${curr_q} ORDER BY id";
  $result = execute_sql($sql);
  $c = record_count($result);
} else {
  if ($curr_q && isset($_POST['num_choices'])) { $c = intval($_POST['num_choices']); }
  else { $c = $GLOBALS['ESPCONFIG']['default_num_choices']; }
}

if (isset($_POST['extra_choices'])) { $num_choices = max($c, $_POST['num_choices']) + 1; }
else { $num_choices = $c; }

?>

<p>For the above question, please list out the possible answers below (if applicable).</p>
<p>Enter <code>!others</code> to create Others (specify). The most common usage is <code>!others Other (please specify):</code> which will create Other plus a box for respondent to insert their answer.</p>

<input type="hidden" id="num_choices" name="num_choices" value="<?php echo($num_choices); ?>">

<table class="table table-hover">
  <tr class="active">
    <th width="10%">&nbsp;</th>
    <th width="45%">Answer in English</th>
    <th width="45%">Answer in Thai</th>
  </tr>
<?php
  for($i=1; $i<$num_choices+1; ++$i) {
    if ($updated && $curr_q) {
      list($choice_id, $choice_content, $choice_content_th, $choice_feedback, $choice_credit) = fetch_row($result);
      $result->MoveNext();
    } else {
      if ($curr_q) {
        $choice_id = intval($_POST["choice_id_$i"]);
        if (isset($_POST["choice_content_$i"])) { $choice_content = _stripslashes($_POST["choice_content_$i"]); }
        if (isset($_POST["choice_content_th_$i"])) { $choice_content_th = _stripslashes($_POST["choice_content_th_$i"]); }
      }
    }
?>
  <tr>
    <td width="10%">
      <?php echo($i); ?>.
      <input type="hidden" name="choice_id_<?php echo($i); ?>" value="<?php if (isset($choice_id)) echo($choice_id); ?>" />
    </td>
    <td width="45%">
      <input class="form-control" type="text" name="choice_content_<?php echo($i); ?>" value="<?php if (isset($choice_content)) echo(htmlspecialchars($choice_content)); ?>" />
    </td>
    <td width="45%">
      <input class="form-control" type="text" name="choice_content_th_<?php echo($i); ?>" value="<?php if (isset($choice_content_th)) echo(htmlspecialchars($choice_content_th)); ?>" />
    </td>
  </tr>

<?php } ?>

</table>

<p class="text-center">
  <input class="btn btn-default btn-sm" type="submit" name="extra_choices" onclick="addAnswerLine()" value="Add another answer line">
  <input class="btn btn-danger btn-sm" type="submit" name="clear" value="Clear all answers" onclick="clearTextInputs()">
</p>
<hr>
