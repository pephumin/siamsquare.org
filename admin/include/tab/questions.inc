<?php

if(empty($_POST['id']))
     	$_POST['id'] = 0;

$curr_q =& $_SESSION['curr_q'];
$sid =& $_SESSION['survey_id'];
	$id = intval($_POST['id']);

if (isset($_POST['type_id']))
	$_POST['type_id'] = intval($_POST['type_id']) ?  $_POST['type_id'] : '';
else
	$_POST['type_id'] = '';

// update failed, stay on same question

if(!$updated || isset($_POST['extra_choices'])) {
	$curr_q = $id;
} else {
	if(isset($_POST['new_question'])) $curr_q = 0;
	if(isset($_POST['edit_question'])) $curr_q = $_POST['q_id'];
	if($curr_q<0) $curr_q = 1;
}

$fields = array('name','type_id','length','precise','required','content','position','ans_uniq');
if($updated && $curr_q) {
	// survey questions exist already
	// load values from DB
	$sql = "SELECT * FROM ".$GLOBALS['ESPCONFIG']['question_table']." WHERE id=${curr_q} AND deleted='N' ORDER BY position";
	$result = execute_sql($sql,"",ADODB_FETCH_ASSOC);
	if (record_count($result) > 0) {
		$question = fetch_row($result);
		foreach($fields as $f) {
			$_POST[$f] =& $question[$f];
		}
	}
	db_close($result);
} else if ($updated) {
	// adding a new question (possibly because there are no questions yet)
	$curr_q = 0;
	foreach(array('name','length','precise','content','position') as $f) {
		$_POST[$f] = '';
	}
} else {
	foreach($fields as $f) {
		if(!empty($_POST[$f]))
		    $_POST[$f] = _stripslashes($_POST[$f]);
		else
		    $_POST[$f] = '';
	}
}
?>

<input type="hidden" name="id" value="<?php echo($curr_q); ?>" />

<?php echo "<p>Edit this question, or click the number of the question you would like to edit:</p>"; ?>

<select class="form-control" name="q_id" id="q_id">

<?php
$i = 1;
// build array of question IDs
$sql = "SELECT id,type_id,position,content FROM ".$GLOBALS['ESPCONFIG']['question_table']."
	WHERE survey_id=$sid AND deleted='N' AND type_id != 99
	ORDER BY position";

$result = execute_sql($sql);
while( list($qid, $tid, $pos, $content) = fetch_row($result)) {
       $result->MoveNext();
       $dots = "";
       $content = strip_tags($content);
       if (strlen($content) > 30) {
          $dots = "...";
       }
       if ($qid==$curr_q) {
          echo('<option selected value="'.$qid.'">'.$i++.'. '.substr($content,0, 30).$dots.'</option>');
      } else {
          echo('<option value="'.$qid.'">'.$i++.'. '.substr($content,0, 30).$dots.'</option>');
   }
}
db_close($result);

?>
</select>
<br />

<input class="btn btn-sm" type="submit" name="edit_question" value="Edit Question" />
<input class="btn btn-sm" type="submit" name="new_question" value="New Question" />

<br /><br /> 

<?php if(!$curr_q) { echo('<span class="red">'._('New Question').'</span>'); } ?>

<table class="table table-hover">
	<tr class="active">
		<th>&nbsp;</th>
		<th>Question Name</th>
		<th>Type</th>
		<th>Length</th>
		<th>Precision</th>
		<th>Required</th>
		<th>Unique answer</th>
	</tr><tr>
		<td>&nbsp;</td>
		<td><?php echo(mktext('name',12)); ?></td>
		<td><?php
			if($updated && empty($_POST['type_id'])) $_POST['type_id'] = 2;
			//$sql = 'SELECT id, type FROM '.$GLOBALS['ESPCONFIG']['question_type_table'].' WHERE id != 99';
			$sql = 'SELECT typeid, type FROM '.$GLOBALS['ESPCONFIG']['question_type_table'].' WHERE id != 99';	
			$result = execute_sql($sql);
			$arr = array();
			while(list($key, $val) = fetch_row($result)) {
                			$result->MoveNext();
				$arr["$key"] = _($val);
			}
			echo(mkselect('type_id',$arr));
		?></td>
		<td><?php
			if(empty($_POST['length'])) $_POST['length'] = 0;
			echo(mktext("length",6));
		?></td>
		<td><?php
			if(empty($_POST['precise'])) $_POST['precise'] = 0;
			echo(mktext("precise",6));
		?></td>
		<td><?php
			if(empty($_POST['required'])) $_POST['required'] = 'N';
			echo(mkselect("required",array(
				"Y" => _('Yes') . '               ',
				"N" => _('No')
			))); ?></td>
		<td><?php
			if(empty($_POST['ans_uniq'])) $_POST['ans_uniq'] = 'N';
			echo(mkselect("ans_uniq",array(
				"Y" => _('Yes') . '               ',
				"N" => _('No')
			))); ?></td>
	</tr>
	<tr>
		<th>Text</th>
		<td colspan="6"><?php
			echo(mktextarea("content",4,60,"VIRTUAL"));
		?></td>
	</tr>
</table>

<?php
// has answer options ... so show that part of the form
$sql = "SELECT has_choices FROM ".$GLOBALS['ESPCONFIG']['question_type_table']." WHERE id=" . $_POST['type_id'];
$choices = get_one($sql);
if($curr_q == 0 ||
	empty($_POST['type_id']) || $choices =='Y') {
	include($GLOBALS['ESPCONFIG']['include_path']."/tab/questions_options".$GLOBALS['ESPCONFIG']['extension']);
	}
?>

<input class="btn btn-success" type="submit" value="Make change"> 

<hr />
