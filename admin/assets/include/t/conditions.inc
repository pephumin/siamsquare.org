<?php

$sid = $_SESSION['survey_id'];

$conditions[0] = 'equals';
$conditions[1] = 'is different from';
$conditions[2] = 'smaller than';
$conditions[3] = 'bigger than';

$sql = "SELECT * FROM ".X_CONDITION." WHERE survey_id = $sid ORDER BY id";
$result = execute_sql($sql);

displayTabNav();

if (record_count($result)) {
  echo "<h3>Current conditions</h3>\n";
  echo "<p>Below are the current conditions you have defined for this survey. You can add and delete as many conditions as needed.</p>\n";
  echo "<table class=\"table table-hover\">\n";
  $print_or = 0;
  while( list($id, $tmp_sid, $qid1, $qid2, $cond, $cond_val) = fetch_row($result)) {
    if ($print_or == 1) { echo "<tr><td colspan=\"2\">AND</td></tr>"; }
    else { $print_or = 1; }
    echo "<tr><td class=\"bg-info\">\n";
    echo "<p><strong>Only show:</strong> ";
    $sql2 = "SELECT content FROM ".X_QUESTION." WHERE id = $qid1";
    $result2 = execute_sql($sql2);
    list($content) = fetch_row($result2);
      //$content=strip_tags($content);
      //$dots = "";
      //if (strlen($content) > 30) $dots = "...";
      //print "'".substr($content,0, 30).$dots."' ";
      echo $content;
    echo "</p><p>\n";
    echo "<strong>When an answer to question:</strong> ";
    $sql2 = "SELECT content FROM ".X_QUESTION." WHERE id = $qid2";
    $result2 = execute_sql($sql2);
    list($content) = fetch_row($result2);
      //$content=strip_tags($content);
      //$dots = "";
      //if (strlen($content) > 30) $dots = "...";
      //print "'".substr($content,0, 30).$dots."' ";
      echo $content;
    echo "</p><p><mark>\n";
    echo $conditions[$cond]." '".$cond_val."'";
    echo "</mark></p>\n";
    $result->MoveNext();
    print "</td><td class=\"text-center bg-info\">\n";
    print "<input class=\"btn btn-danger btn-sm\" type=\"submit\" name=\"deletecondition[$id]\" value=\"Delete\">\n";
    print "</td></tr>\n";
  }
  print "</table><hr>\n\n";
}

$sql = "SELECT id, type_id, position, content FROM ".X_QUESTION." WHERE survey_id = $sid AND deleted = 'N' ORDER BY position";
$result = execute_sql($sql);
$max = record_count($result);

//if ($max > 20) { $max = 20; }

?>

<h3>Adding a new condition</h3>
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
    //  $dots = "...";
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

<br>
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
    //  $dots = "...";
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
<br>

<div class="form-inline">
<select name="cond" id="cond" class="form-control">
<option value="0"><?php echo $conditions[0]; ?></option>
<option value="1"><?php echo $conditions[1]; ?></option>
<option value="2"><?php echo $conditions[2]; ?></option>
<option value="3"><?php echo $conditions[3]; ?></option>
</select>

<input type="hidden" name="conditions" value="">
<input type="hidden" name="sid" value="<?php echo $sid; ?>">
<input class="form-control" type="text" id="cond_value" name="cond_value" value="None">
<input class="btn btn-warning" type="submit" name="addcondition" value="Go">
</div>

<br>

<hr>

<h4><i class="pe-lightbulb-o pe-fw pe-lg"></i> Guidelines on question conditioning</h4>
<ul class="pe-ul">
  <li><i class="pe-li pe-check-square"></i> All conditions are <strong>"OR"</strong> conditions, so if one conditions is fullfilled, the question is shown.</li>
  <li><i class="pe-li pe-check-square"></i> A question that has a condition must be an optional question.</li>
  <li><i class="pe-li pe-check-square"></i> So, if you define a condition on a question, the <strong>"Required"</strong> parameter is set to <strong>"No"</strong>.</li>
  <li><i class="pe-li pe-check-square"></i> A question that has a condition must be on the next page than the question/value that is used to compare it with.</li>
  <li><i class="pe-li pe-check-square"></i> Use the "Order tab" to insert a section break where wanted as this is <strong>NOT</strong> done automatically.</li>
  <li><i class="pe-li pe-check-square"></i> A <strong>Yes/No</strong> question can only be compared using the values <strong>"Yes"</strong> or <strong>"No"</strong>.</li>
</ul>

<br>
