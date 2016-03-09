<?php

// this type of question has answer options
if ($updated && $curr_q) {
	$sql = "SELECT id,content,feedback,credit FROM ".$GLOBALS['ESPCONFIG']['question_choice_table']." WHERE question_id=${curr_q} ORDER BY id";
	$result = execute_sql($sql);
	$c = record_count($result);
} else {
	if ($curr_q && isset($_POST['num_choices']))
		$c = intval($_POST['num_choices']);
	else
		$c = $GLOBALS['ESPCONFIG']['default_num_choices'];
}

if(isset($_POST['extra_choices']))
	$num_choices = max($c, $_POST['num_choices']) + 1;
else
	$num_choices = $c;
?>

 </tr>
</table>

<p><input class="btn btn-success" type="submit" value="Make changes" /></p><br />

<p>Enter the possible answers (if applicable). Enter <code>!other</code> on an line by itself to create a fill-in-the-blank answer at the end of this question. Any blank lines will be suppressed.</p>

<p>To assign numeric credit for a particular answer, enter the associated credit beside each possible answer.  Only question types of Radio Buttons, Check Boxes, and Dropdown Box may have credit. Credit for a multiple selection is the sum of the individual credit.</p>

<p>To provide feedback to the survey respondent when selecting a particular answer, enter that feedback beside the answer.  Only question types of Radio Buttons, Check Boxes, and Dropdown Box may have feedback. The feedback may include HTML, if desired.</p>

<br />

<input type="hidden" id="num_choices" name="num_choices" value="<?php echo($num_choices); ?>" />

<table class="table table-hover">
	<tr class="active">
       <th>&nbsp;</th>
       <th><?= _('Answer') ?></th>
       <!--
       <th><?= _('Credit') ?></th>
       <th><?= _('Feedback') ?></th>
   		-->
    </tr>
<?php
	for($i=1; $i<$num_choices+1; ++$i) {
		if ($updated && $curr_q) {
			list($choice_id, $choice_content, $choice_feedback, $choice_credit) = fetch_row($result);
			$result->MoveNext();
		} else {
			if ($curr_q) {
			   $choice_id = intval($_POST["choice_id_$i"]);
			   if(isset($_POST["choice_content_$i"]))
			      $choice_content  = _stripslashes($_POST["choice_content_$i"]);
			      $choice_credit   = _stripslashes($_POST["choice_credit_$i"]);
			      $choice_feedback = _stripslashes($_POST["choice_feedback_$i"]);
			}
		}
?>
	<tr>
		<td><?php echo($i); ?>.</td>
		<td>
			<input type="hidden" name="choice_id_<?php echo($i); ?>" value="<?php if(isset($choice_id)) echo($choice_id); ?>" />
			<input class="form-control" type="text" name="choice_content_<?php echo($i); ?>" value="<?php if(isset($choice_content)) echo(htmlspecialchars($choice_content)); ?>" />
	</td>
    <!--
    <td class="left"><input type="text" name="choice_credit_<?php echo($i); ?>" value="<?php if(isset($choice_credit)) echo(htmlspecialchars($choice_credit)); ?>" size="4" /></td>
    <td class="left"><textarea name="choice_feedback_<?php echo($i); ?>"><?php if(isset($choice_feedback)) echo(htmlspecialchars($choice_feedback)); ?></textarea></td>
   	-->
	</tr>

<?php } ?>

	<tr>
		<td>&nbsp;</td>
		<td>
			<input class="btn btn-sm" type="submit" name="extra_choices" onclick="addAnswerLine()" value="Add another answer line" />
			<input class="btn btn-sm" type="submit" name="clear" value="Clear all answer lines" onclick="clearTextInputs()" />
		</td>
	</tr>
</table>
