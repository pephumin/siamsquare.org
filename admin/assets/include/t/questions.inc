<?php

if(empty($_POST['id']))
       $_POST['id'] = 0;

$curr_q =& $_SESSION['curr_q'];
$sid =& $_SESSION['survey_id'];
  $id = intval($_POST['id']);

if (isset($_POST['type_id'])) { $_POST['type_id'] = intval($_POST['type_id']) ?  $_POST['type_id'] : ''; }
else { $_POST['type_id'] = ''; }

// update failed, stay on same question

if(!$updated || isset($_POST['extra_choices'])) {
  $curr_q = $id;
} else {
  if(isset($_POST['new_question'])) $curr_q = 0;
  if(isset($_POST['edit_question'])) $curr_q = $_POST['q_id'];
  if($curr_q<0) $curr_q = 1;
}

$fields = array('name', 'type_id', 'length', 'precise', 'required', 'content', 'content_th', 'position', 'ans_uniq', 'extra', 'extra_th');
if($updated && $curr_q) {
  // survey questions exist already
  // load values from DB
  $sql = "SELECT * FROM ".X_QUESTION." WHERE id = ${curr_q} AND deleted = 'N' ORDER BY position";
  $result = execute_sql($sql,"",ADODB_FETCH_ASSOC);
  if (record_count($result) > 0) {
    $question = fetch_row($result);
    foreach($fields as $f) {
      $_POST[$f] =& $question[$f];
    }
  }
  db_close($result);
} elseif ($updated) {
  // adding a new question (possibly because there are no questions yet)
  $curr_q = 0;
  foreach(array('name', 'length', 'precise', 'content', 'content_th', 'position') as $f) {
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

displayTabNav();

?>

<h3>Edit or add a question</h3>

<input type="hidden" name="id" value="<?php echo($curr_q); ?>">
<input type="hidden" name="sid" value="<?php echo $sid; ?>">

<?php
$select = "<select class=\"form-control\" name=\"q_id\" id=\"q_id\">\n";
$i = 1;
$sql = "SELECT id, type_id, position, content, content_th FROM ".X_QUESTION." WHERE survey_id = $sid AND deleted = 'N' AND type_id != 99 ORDER BY position";
$result = execute_sql($sql);
while( list($qid, $tid, $pos, $content, $content_th) = fetch_row($result)) {
  $result->MoveNext();
  if ($qid == $curr_q) {
     $select .= '<option selected value="'.$qid.'">'.$i++.'. '.$content.'</option>';
     $select .= "\n";
  } else {
     $select .= '<option value="'.$qid.'">'.$i++.'. '.$content.'</option>';
     $select .= "\n";
  }
}
db_close($result);
$select .= "</select>\n";
?>

<p>
  <input class="btn btn-warning btn-sm" type="submit" name="new_question" value="New Question">
  <br><br>OR<br>
  <div class="input-group">
    <span class="input-group-btn">
      <input class="btn btn-warning btn-sm" type="submit" name="edit_question" value="Edit Question">
    </span>
    <?php echo $select; ?>
  </div>
</p>
<br>


<?php
if(!$curr_q) { echo "<h4><mark>Add a new question</mark></h4>\n"; }
else { echo "<h4><mark>Edit a question</mark></h4>\n"; }
?>

<table class="table table-hover">
  <tr class="bg-warning">
    <th>&nbsp;</th>
    <th>Question short name</th>
    <th>Type</th>
    <th>Length</th>
    <th>Precision</th>
    <th>Unique answer</th>
  </tr><tr>
    <td>&nbsp;</td>
    <td><?php echo(mktext('name',12)); ?></td>
    <td><?php
      if($updated && empty($_POST['type_id'])) $_POST['type_id'] = 2;
      $sql = 'SELECT typeid, type FROM '.X_QUESTION_TYPE.' WHERE id != 99';
      $result = execute_sql($sql);
      $arr = array();
      while(list($key, $val) = fetch_row($result)) {
        $result->MoveNext();
        $arr["$key"] = _($val);
      }
      echo(mkselect('type_id', $arr));
    ?></td>
    <td><?php
      if(empty($_POST['length'])) $_POST['length'] = 0;
      echo(mktext("length", 6));
    ?></td>
    <td><?php
      if(empty($_POST['precise'])) $_POST['precise'] = 0;
      echo(mktext("precise", 6));
    ?></td>
    <td><?php
      if(empty($_POST['ans_uniq'])) $_POST['ans_uniq'] = 'N';
      if ($_POST['type_id'] != 8 || $_POST['type_id'] != 9) {
        echo "<select class=\"form-control\" name=\"ans_uniq\" disabled>\n";
        echo "<option value=\"Y\">Yes</option>\n";
        echo "<option value=\"N\" selected=\"selected\">No</option>\n";
        echo "</select>\n";
      } else {
        echo(mkselect("ans_uniq",array(
          "Y" => _('Yes'),
          "N" => _('No')
        )));
      }
    ?></td>
  </tr>
  <tr>
    <th>Question in English</th>
    <td colspan="6"><?php echo(mktextarea("content", 4, 60, "virtual")); ?></td>
  </tr>
  <tr>
    <th>Question in Thai</th>
    <td colspan="6"><?php echo(mktextarea("content_th", 4, 60, "virtual")); ?></td>
  </tr>

<?php
// Extra to put next to the input box (3 = short open-ended, 7 = dropdown, 8 = date, 9 = numeric )
if ($_POST['type_id'] == 7 || $_POST['type_id'] == 8 || $_POST['type_id'] == 9) {
?>
  <tr>
    <th>Extra in English</th>
    <th>Extra in Thai</th>
  </tr>
  <tr>
    <td><?php echo(mktext("extra", 20)); ?></td>
    <td><?php echo(mktext("extra_th", 20)); ?></td>
  </tr>

<?php
}
?>

</table>

<?php

$sql = "SELECT has_choices FROM ".X_QUESTION_TYPE." WHERE typeid = " . $_POST['type_id'];
$choices = get_one($sql);

if ($curr_q == 0 || empty($_POST['type_id']) || $choices == 'Y') {
  include $_SERVER['DOCUMENT_ROOT'] . '/admin/assets/include/t/questions_options.inc';
}

?>

<p class="text-center">
  <input type="hidden" name="required" value="Y">
  <input class="btn btn-success" type="submit" value="Update">
</p>
