<?php

/*  proto bool question_render($question, int question_number)
    Builds HTML for the question */

function question_render($question,$question_number,$auto_num,$on_one_line=0) {
	// process each question
	$qid  = &$question['id'];
	$tid  = &$question['type_id'];
	$size = &$question['length'];
	$prec = &$question['precise'];
	
	$has_choices = esp_type_has_choices();

	if($has_choices[$tid]) {
		$sql = "SELECT * FROM ".$GLOBALS['ESPCONFIG']['question_choice_table']." WHERE question_id=$qid AND content NOT LIKE '!other%' ORDER BY id";
		$choices_result = execute_sql($sql,"",ADODB_FETCH_ASSOC);
		$sql = "SELECT * FROM ".$GLOBALS['ESPCONFIG']['question_choice_table']." WHERE question_id=$qid AND content LIKE '!other%' ORDER BY id";
		$others_result = execute_sql($sql,"",ADODB_FETCH_ASSOC);
		$others = record_count($others_result);
	} else { $choices_result = ''; }

	if($question['required']=='Y') { $x = "<mark>"; $y = "*</mark>"; }
	$questionname = "$x<a name=\"Q".$question_number."\">Q".$question_number.".</a>$y &nbsp;&nbsp;";
	$questionname .= $question['content'];
	echo "\n";

	// If question is of type "section text"... (tid=100)
	if ($tid == 100) {
		//echo "<tr>\n";
		//echo "	<td>".$question['content']."</td>\n";
		//echo "</tr>\n";
		echo "  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n";
		//echo "    <div class=\"panel panel-default\">\n";
		//echo "      <div class=\"panel-heading\">$questionname</div>\n";
		echo "        <p class=\"bg-success\">".nl2br($question['content'])."</p>\n";
		//echo "    </div>\n";
		echo "  </div>\n\n";
		return;
	}

	//echo "<div class=\"row\">\n";
	echo "  <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n";
	echo "    <div class=\"panel panel-default\">\n";
	echo "      <div class=\"panel-heading\">$questionname</div>\n";

	//echo "     <div class=\"panel-body\"><p class=\"small\">Single answer</p></div>\n";
	//echo "     <div class=\"list-group\">\n";
	//echo "        <a class=\"list-group-item\" href=\"/admin/index.php\">Change your info</a>\n";
	//echo "     </div>\n";

	switch($tid) {

		case '1':	// Yes/No
		echo "      <div class=\"radio\">\n";
		echo "        <label><input type=\"radio\" name=\"".$qid."\" value=\"Y\">Yes</label>\n";
		echo "      </div>\n";
		echo "      <div class=\"radio\">\n";
		echo "        <label><input type=\"radio\" name=\"".$qid."\" value=\"N\">No</label>\n";
		echo "      </div>\n";
		break;

		case '2':	// single text line
		echo(mktext($qid, $size, $prec));
		break;

		case '3':	// essay
		echo(mktextarea($qid, $prec, $size, 'virtual'));
		break;

		case '4':	// radio
		//echo "<div class=\"btn-group\" data-toggle=\"buttons\">\n";
		while($choice = fetch_row($choices_result)) {	
			$choices_result->MoveNext();
			echo "      <div class=\"radio\">\n";
			echo "        <label><input type=\"radio\" name=\"".$qid."\" value=\"".$choice['id']."\">".$choice['content']."</label>\n";
			echo "      </div>\n";
		}
		$j=0;
		while($other = fetch_row($others_result)) {
			$others_result->MoveNext();
			$cid = $other['id'];
			if (!strcmp($other['content'],"!other")) { $other_text = 'Other:'; } 
			else { $other_text = preg_replace(array("/^!other=/","/^!other/"), array('',''), $other['content']); }
			echo "      <div class=\"radio\">\n";
			echo "        <label><input type=\"radio\" name=\"".$qid."\" value=\"other_$cid\">";
			$cid = "${qid}_${cid}";
    	    echo("$other_text&nbsp;<input type=\"text\" name=\"$cid\" onKeyPress=\"other_check(this.name)\"");
    	    if (isset($_POST[$cid]))
            	echo(' value="'. _stripslashes(htmlspecialchars($_POST[$cid])) .'"');
                echo(" />");
			echo "</label>\n";
			echo "</div>\n";
            $j++;
		}
		break;

		case '5':	// check boxes
		while($choice = fetch_row($choices_result)) {
			$choices_result->MoveNext();
			echo "      <div class=\"checkbox\">\n";
			echo "        <label><input type=\"checkbox\" name=\"".$qid."\" value=\"".$choice['id']."\">".$choice['content']."</label>\n";
			echo "      </div>\n";
		}
		$j=0;
		while($other = fetch_row($others_result)) {
			$others_result->MoveNext();
			$cid = $other['id'];
			if (!strcmp($other['content'],"!other")) { $other_text = 'Other:'; } 
			else { $other_text = preg_replace(array("/^!other=/","/^!other/"), array('',''), $other['content']); }
			echo "      <div class=\"checkbox\">\n";
			echo "        <label><input type=\"checkbox\" name=\"".$qid."\" value=\"other_$cid\">";
    	    $cid = "${qid}_${cid}";
    	    echo("$other_text&nbsp;<input type=\"text\" name=\"$cid\" onKeyPress=\"other_check(this.name)\"");
    	    if (isset($_POST[$cid]))
            	echo(' value="'. _stripslashes(htmlspecialchars($_POST[$cid])) .'"');
                echo(" />");
			echo "</div>\n";
			$j++;
		}
		break;

		case '6':	// dropdown box
		$options = array();
		while($choice = fetch_row($choices_result)) {
			$choices_result->MoveNext();
			$options[$choice['id']] = $choice['content'];
		}
		echo mkselect($qid,$options);
		break;

		case '7':	// rating
		echo "<label class=\"radio-inline\"><input type=\"radio\" name=\"".$qid."\" value=\"1\"> 1</label>\n";
		echo "<label class=\"radio-inline\"><input type=\"radio\" name=\"".$qid."\" value=\"2\"> 2</label>\n";
		echo "<label class=\"radio-inline\"><input type=\"radio\" name=\"".$qid."\" value=\"3\"> 3</label>\n";
		echo "<label class=\"radio-inline\"><input type=\"radio\" name=\"".$qid."\" value=\"4\"> 4</label>\n";
		echo "<label class=\"radio-inline\"><input type=\"radio\" name=\"".$qid."\" value=\"5\"> 5</label>\n";
		echo "<label class=\"radio-inline\"><input type=\"radio\" name=\"".$qid."\" value=\"N/A\"> N/A</label>\n";
		break;

		case '8':	// ranking
		echo "      <table class=\"table table-hover table-condensed\">\n";
		echo "        <tr class=\"active\">\n";
		echo "          <td>Attributes</td>\n";
		for ($j = 0; $j < $size; $j++) {
			$k = $j+1;
			echo "          <td>".$k."</td>\n";
		}
		if ($prec) {
			echo "          <td>N/A</td>\n";
		}
		echo "        </tr>\n";

		while($choice = fetch_row($choices_result)) {
			$choices_result->MoveNext();
			$cid = $choice['id'];
			$str = "${qid}_$cid";
			echo "        <tr>\n";
			echo "          <td>".$choice['content']."</td>\n";
			for ($j = 0; $j < $size; $j++) {
				echo "          <td>".mkradio($str,$j)."</td>\n";
			}
			if ($prec) {
				echo "          <td>".mkradio($str,'-1')."</td>\n";
			}
			echo "        </tr>\n";
		}
		echo "      </table>\n";
		break;

		case '9':	// date
		echo mktext($qid, 10, 10);
		echo "<em>(e.g. ". strftime ($GLOBALS['ESPCONFIG']['date_format'],strtotime("now")) ."</em>\n";
		break;

		case '10':	// numeric
		$size++; // for sign
		if($prec)
			$size += 1 + $prec;
		echo mktext($qid, $size, $size);
		break;
	}	// end switch
	echo "    </div>\n";
	echo "  </div>\n\n";
	return;
}

?>
