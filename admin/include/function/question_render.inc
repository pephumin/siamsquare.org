<?php

//  proto bool question_render($question, int question_number)

//		ID 		Question type 			Has choice? 	Table
//  	1 		'Single answer (SA)'	'Y'				'response_single'
//  	2 		'Multiple answer (MA)'	'Y'				'response_multiple'
//  	3 		'Single-line open-end'	'N'				'response_text'
//  	4		'Multi-line open-end'	'N'				'response_text'
//  	5		'Rating scale'			'Y'				'response_rank'
//  	6 		'Attribute rating'		'Y'				'response_rank'
//  	7 		'Drop down'				'Y'				'response_single'
//  	8 		'Date'					'N'				'response_date'
//  	9 		'Numeric'				'N'				'response_text'
//  	10 		'Others'				'N'				'response_text'
//  	99 		'Page Break'			'N'				''
//  	100 	'Section Text'			'N'				''


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

	//if($question['required']=='Y') { $x = "<mark>"; $y = "*</mark>"; }
	//$questionname = "<a name=\"Q".$question_number."\">Q".$question_number.".</a> ";
	$questionname = "Q".$question_number.". ";

	if ($question['content_th']) { $questionname .= $question['content_th']; }
	else { $questionname .= $question['content']; }
	
	echo "\n";

	// Section text (tid=100)
	if ($tid == 100) {
		echo "  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n";
		echo "    <div class=\"well well-lg showconcept\">\n";
		if ($question['content_th']) { echo "      <p>".nl2br($question['content_th'])."</p>\n"; }
		else { echo "      <p>".nl2br($question['content'])."</p>\n"; }
		echo "    </div>\n";
		echo "  </div>\n\n";
		echo "<br />\n";
		return;
	}

	echo "  <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n";
	echo "    <div class=\"panel panel-default\">\n";


	switch($tid) {

		// Single answer (SA) - radio (tid=1)
		case '1':
		$msg = "คำตอบเดียว / single answer";
		echo "      <div class=\"panel-heading bg-info\"><h4>$questionname<br /><small>$msg</small></h4></div>\n";
		echo "      <div class=\"panel-body clearfix\">\n";
		while($choice = fetch_row($choices_result)) {	
			$choices_result->MoveNext();
			if ($choice['content_th']) { echo "      <div class=\"radio\"><label>" . mkradio($qid,$choice['id']) . $choice['content_th'] . "</label></div>\n"; }
			else { echo "      <div class=\"radio\"><label>" . mkradio($qid,$choice['id']) . $choice['content'] . "</label></div>\n"; }
		}
		$j=0;
		while($other = fetch_row($others_result)) {
			$others_result->MoveNext();
			$cid = $other['id'];
			if (!strcmp($other['content'],"!other")) { $other_text = 'Other:'; } 
			else { $other_text = preg_replace(array("/^!other=/","/^!other/"), array('',''), $other['content']); }
			//echo "      <div class=\"radio\"><label>" . mkradio($qid,"other_$cid") . "</label></div>\n";
			echo "      <div class=\"radio\"><label>" . mkradio($qid,"other_$cid");
			$cid = "${qid}_${cid}";
    	    echo("$other_text <input type=\"text\" name=\"$cid\" onKeyPress=\"other_check(this.name)\"");
    	    if (isset($_POST[$cid]))
            	echo " value=". _stripslashes(htmlspecialchars($_POST[$cid])) . " />";
            $j++;
            echo "</label></div>\n";
		}
		echo "      </div>\n";
		break;

		// Multiple answer (MA) - checkbox (tid=2)
		case '2':
		$msg = "หลายคำตอบ / multiple answer";
		echo "      <div class=\"panel-heading bg-info\"><h4>$questionname<br /><small>$msg</small></h4></div>\n";
		echo "      <div class=\"panel-body clearfix\">\n";
		while($choice = fetch_row($choices_result)) {
			$choices_result->MoveNext();
			if ($choice['content_th']) { echo "      <div class=\"checkbox\"><label>" . mkcheckbox($qid,$choice['id']) . $choice['content_th'] . "</label></div>\n"; }
			else { echo "      <div class=\"checkbox\"><label>" . mkcheckbox($qid,$choice['id']) . $choice['content'] . "</label></div>\n"; }

		}
		$j=0;
		while($other = fetch_row($others_result)) {
			$others_result->MoveNext();
			$cid = $other['id'];
			if (!strcmp($other['content'],"!other")) { $other_text = 'Other:'; } 
			else { $other_text = preg_replace(array("/^!other=/","/^!other/"), array('',''), $other['content']); }
			echo "      <div class=\"checkbox\"><label>" . mkcheckbox($qid,"other_$cid");
    	    $cid = "${qid}_${cid}";
    	    echo("$other_text <input type=\"text\" name=\"$cid\" onKeyPress=\"other_check(this.name)\"");
    	    if (isset($_POST[$cid]))
            	echo " value=". _stripslashes(htmlspecialchars($_POST[$cid])) . " />";
			$j++;
			echo "</label></div>\n";
		}
		echo "      </div>\n";
		break;

		// Single-line open-end (tid=3)
		case '3':
		$msg = "บันทึกคำตอบ / Fill in your answer";
		echo "      <div class=\"panel-heading bg-info\"><h4>$questionname<br /><small>$msg</small></h4></div>\n";
		echo "      <div class=\"panel-body clearfix\">\n";
		echo(mktext($qid, $size, $prec));
		echo "      </div>\n";
		break;

		// Multi-line open-end (tid=4)
		case '4':
		$msg = "บันทึกคำตอบ / Fill in your answer";
		echo "      <div class=\"panel-heading bg-info\"><h4>$questionname<br /><small>$msg</small></h4></div>\n";
		echo "      <div class=\"panel-body clearfix\">\n";
		echo(mktextarea($qid, $prec, $size, 'virtual'));
		echo "      </div>\n";
		break;

		// Rating scale (tid=5)
		case '5':
		$msg = "คำตอบเดียว / single answer";
		echo "      <div class=\"panel-heading bg-info\"><h4>$questionname<br /><small>$msg</small></h4></div>\n";
		echo "      <div class=\"panel-body clearfix\">\n";
		while($choice = fetch_row($choices_result)) {	
			$choices_result->MoveNext();
			if ($choice['content'] )

			//$choice['content'] = preg_replace("/[^0-9]/", "", $choice['content']);
			if ($choice['content_th']) { echo "      <div class=\"radio\"><label>" . mkradio($qid,$choice['content_th']) . " ".$choice['content_th']."</label></div>\n"; }
			else { echo "      <div class=\"radio\"><label>" . mkradio($qid,$choice['content']) . " ".$choice['content']."</label></div>\n"; }
		}
		echo "      </div>\n";
		break;

		// Attribute rating (tid=6)
		case '6':
		$msg = "คำตอบเดียว / single answer";
		echo "      <div class=\"panel-heading bg-info\"><h4>$questionname<br /><small>$msg</small></h4></div>\n";
		echo "      <div class=\"panel-body clearfix\">\n";
		if ($size == '0') { $size = '5'; }
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
			if ($choice['content_th']) { echo "          <td>".$choice['content_th']."</td>\n"; }
			else { echo "          <td>".$choice['content']."</td>\n"; }
			for ($j = 0; $j < $size; $j++) {
				echo "          <td>".mkradio($str,$j)."</td>\n";
			}
			if ($prec) {
				echo "          <td>".mkradio($str,'-1')."</td>\n";
			}
			echo "        </tr>\n";
		}
		echo "      </table>\n";
		echo "      </div>\n";
		break;

		// Drop down (tid=7)
		case '7':
		$msg = "คำตอบเดียว / single answer";
		echo "      <div class=\"panel-heading bg-info\"><h4>$questionname<br /><small>$msg</small></h4></div>\n";
		echo "      <div class=\"panel-body clearfix\">\n";
		while($choice = fetch_row($choices_result)) {
			$choices_result->MoveNext();
			if ($choice['content_th']) { $options[$choice['id']] = $choice['content_th']; }
			else { $options[$choice['id']] = $choice['content']; }
		}
		echo mkselect($qid,$options);
		echo "      </div>\n";
		break;

		// Date (tid=8)
		case '8':
		$msg = "บันทึกคำตอบ / Fill in your answer";
		echo "      <div class=\"panel-heading bg-info\"><h4>$questionname<br /><small>$msg</small></h4></div>\n";
		echo "      <div class=\"panel-body clearfix\">\n";
		echo mktext($qid, 10, 10);
		echo "<em>(This format only: ". strftime ($GLOBALS['ESPCONFIG']['date_format'],strtotime("now")) .")</em>\n";
		echo "      </div>\n";
		break;

		// Numeric (tid=9)
		case '9':
		$msg = "บันทึกคำตอบ / Fill in your answer";
		echo "      <div class=\"panel-heading bg-info\"><h4>$questionname<br /><small>$msg</small></h4></div>\n";
		echo "      <div class=\"panel-body clearfix\">\n";
		$size++; // for sign
		if($prec)
			$size += 1 + $prec;
		echo mktext($qid, $size, $size);
		echo "      </div>\n";
		break;

		// Others (tid=10)
		case '10':
		$msg = "บันทึกคำตอบ / Fill in your answer";
		echo "      <div class=\"panel-heading bg-info\"><h4>$questionname<br /><small>$msg</small></h4></div>\n";
		echo "      <div class=\"panel-body clearfix\">\n";
		echo(mktext($qid, $size, $prec));
		echo "      </div>\n";
		break;

	}
	echo "    </div>\n";
	echo "  </div>\n\n";
	return;
}

?>
