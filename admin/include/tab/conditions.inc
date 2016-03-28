
<input type="hidden" name="conditions" value="" />
<br />

<?php

$sid = $_SESSION['survey_id'];

$conditions[0] = 'equals';
$conditions[1] = 'is different from';
$conditions[2] = 'smaller than';
$conditions[3] = 'bigger than';

$sql = "SELECT * FROM ".$GLOBALS['ESPCONFIG']['condition_table']." WHERE survey_id=$sid ORDER BY id";
$result = execute_sql($sql);

if (record_count($result)) {
   echo "<h4>Current conditions</h4>\n";
   echo "<p>Below are the current conditions you have defined for this survey. You can add and delete as many conditions as needed.</p>\n";
   echo "<table class=\"table table-hover\">\n";
   $print_or = 0;
   while( list($id, $tmp_sid, $qid1, $qid2, $cond, $cond_val) = fetch_row($result)) {
	   if ($print_or == 1) { echo "<tr><td>OR</td></tr>"; } 
	   else { $print_or = 1; }
	   echo "<tr><td>\n";
	   echo "<p><strong>Only show:</strong> ";
	   $sql2 = "SELECT content FROM ".$GLOBALS['ESPCONFIG']['question_table']." WHERE id=$qid1"; 
	   $result2=execute_sql($sql2);
	   list($content)=fetch_row($result2);
	   		//$content=strip_tags($content);
	   		//$dots = "";
	   		//if (strlen($content) > 30) $dots = "...";
	   		//print "'".substr($content,0, 30).$dots."' ";
	   		echo $content;
	   echo "<br />\n";
	   echo "<strong>When an answer to question:</strong> ";
	   $sql2 = "SELECT content FROM ".$GLOBALS['ESPCONFIG']['question_table']." WHERE id=$qid2"; 
	   $result2=execute_sql($sql2);
	   list($content)=fetch_row($result2);
	   		//$content=strip_tags($content);
	   		//$dots = "";
	   		//if (strlen($content) > 30) $dots = "...";
	   		//print "'".substr($content,0, 30).$dots."' ";
	   		echo $content;
	   echo "</p><p><mark>\n";
	   echo $conditions[$cond]." '".$cond_val."'";
	   echo "</mark></p>\n";
	   $result->MoveNext();
	   print "</td><td class=\"text-center\">\n";
	   print "<input class=\"btn btn-danger btn-sm\" type=\"submit\" name=\"deletecondition[$id]\" value=\"Delete\" />\n";
	   print "</td></tr>\n";
   }
   print "</table><hr>\n\n";
}

$sql = "SELECT id,type_id,position,content FROM ".$GLOBALS['ESPCONFIG']['question_table']." WHERE survey_id=$sid AND deleted='N' ORDER BY position";
$result = execute_sql($sql);
$max = record_count($result);
?>


<h4>Adding conditions</h4>

<p>To add more conditions to this survey, you simply select a certain question which will be displayed only when a cerain value has been answered from another question. These logic settings can be defined by using these two tables below.</p>

<?php if ($max > 20) { $max = 20; } ?>

<br />

<p><strong>Only show:</strong></p>
<select name="q1_id" id="q1_id" size="<?php echo($max)?>" class="form-control">

<?php
$i = 1;
while( list($qid, $tid, $pos, $content) = fetch_row($result)) {
	$result->MoveNext();
	//$dots = "";
	//$content = strip_tags($content);
	if($tid != 99) {
		//if (strlen($content) > 30) {
		//	$dots = "...";
		//}
		//echo('<option value="'.$qid.'">'.$i++.'. '.substr($content,0, 30).$dots.'</option>');
		echo('<option value="'.$qid.'">'.$i++.'. '.$content.'</option>');
	}
	else {
		//++$sec;
		echo('<option value="'.$qid.'"><strong>'._('----- Section Break -----').'</strong></option>\n');
	}
}
?>
</select>

<br />

<p><strong>If an answer to question:</strong></p>
<select name="q2_id" id="q2_id" size="<?php echo($max)?>" class="form-control">

<?php
$i = 1;
$result->MoveFirst();
while( list($qid, $tid, $pos, $content) = fetch_row($result)) {
	$result->MoveNext();
	//$dots = "";
	//$content = strip_tags($content);
	if($tid != 99) {
		//if (strlen($content) > 30) {
		//	$dots = "...";
		//}
		//echo('<option value="'.$qid.'">'.$i++.'. '.substr($content,0, 30).$dots.'</option>');
		echo('<option value="'.$qid.'">'.$i++.'. '.$content.'</option>');
	}
	else {
		//++$sec;
		echo('<option value="'.$qid.'"><strong>'.'----- Section Break -----'.'</strong></option>\n');
	}
}

if ($result) { db_close($result); }

?>
</select>
<br />

<div class="form-inline">
<select name="cond" id="cond" class="form-control">
<option value="0"><?php echo $conditions[0]; ?></option>
<option value="1"><?php echo $conditions[1]; ?></option>
<option value="2"><?php echo $conditions[2]; ?></option>
<option value="3"><?php echo $conditions[3]; ?></option>
</select>
<input class="form-control" type="text" id="cond_value" name="cond_value" value="NONE">
<input class="btn btn-default" type="submit" name="addcondition" value="Go" />
</div>

<hr>

<p class="text-muted">Some guidelines on using question conditioning:</p>
<ul class="fa-ul">
  <li class="text-muted"><i class="fa-li fa fa-check-square"></i>All conditions are "OR" conditions, so if one conditions is fullfilled, the question is shown.</li>
  <li class="text-muted"><i class="fa-li fa fa-check-square"></i>A question that has a condition must be an optional question.</li>
  <li class="text-muted"><i class="fa-li fa fa-check-square"></i>So, if you define a condition on a question, the "Required" parameter is set to "No".</li>
  <li class="text-muted"><i class="fa-li fa fa-check-square"></i>A question that has a condition must be on the next page than the question/value that is used to compare it with.</li>
  <li class="text-muted"><i class="fa-li fa fa-check-square"></i>Use the "Order tab" to insert a section break where wanted (this is <b>NOT</b> done automatically).</li>
  <li class="text-muted"><i class="fa-li fa fa-check-square"></i>A Yes/No question can only be compared using the values "Yes or "No".</li>
</ul>

<br />

