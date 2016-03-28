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
	$questionname = "<a name=\"Q".$question_number."\">Q".$question_number.".</a> ";

	if ($question['content_th']) { $questionname .= $question['content_th']; }
	else { $questionname .= $question['content']; }
	
	echo "\n";

	// Section text (tid=100)
	if ($tid == 100) {
		echo "  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n";
		if ($question['content_th']) { echo "        <p class=\"bg-success\">".nl2br($question['content_th'])."</p>\n"; }
		else { echo "        <p class=\"bg-success\">".nl2br($question['content'])."</p>\n"; }
		echo "  </div>\n\n";
		return;
	}

	echo "  <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n";
	echo "    <div class=\"panel panel-default\">\n";
	echo "      <div class=\"panel-heading\">$questionname</div>\n";

	switch($tid) {

		// Single answer (SA) - radio (tid=1)
		case '1':	
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
		break;

		// Multiple answer (MA) - checkbox (tid=2)
		case '2':	
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
			//echo "      <div class=\"checkbox\"><label>" . mkcheckbox($qid,"other_$cid") . "</label></div>\n";
			echo "      <div class=\"checkbox\"><label>" . mkcheckbox($qid,"other_$cid");
    	    $cid = "${qid}_${cid}";
    	    echo("$other_text <input type=\"text\" name=\"$cid\" onKeyPress=\"other_check(this.name)\"");
    	    if (isset($_POST[$cid]))
            	echo " value=". _stripslashes(htmlspecialchars($_POST[$cid])) . " />";
			$j++;
			echo "</label></div>\n";
		}
		break;

		// Single-line open-end (tid=3)
		case '3':	
		echo(mktext($qid, $size, $prec));
		break;

		// Multi-line open-end (tid=4)
		case '4':	
		echo(mktextarea($qid, $prec, $size, 'virtual'));
		break;

		// Rating scale (tid=5)
		case '5':	
		while($choice = fetch_row($choices_result)) {	
			$choices_result->MoveNext();
			if ($choice['content_th']) { echo "      <div class=\"radio\"><label>" . mkradio($qid,$choice['content_th']) . " ".$choice['content_th']."</label></div>\n"; }
			else { echo "      <div class=\"radio\"><label>" . mkradio($qid,$choice['content']) . " ".$choice['content']."</label></div>\n"; }
		}
		//echo "      <div class=\"radio\"><label>" . mkradio($qid,1) . " 1</label></div>\n";
		//echo "      <div class=\"radio\"><label>" . mkradio($qid,2) . " 2</label></div>\n";
		//echo "      <div class=\"radio\"><label>" . mkradio($qid,3) . " 3</label></div>\n";
		//echo "      <div class=\"radio\"><label>" . mkradio($qid,4) . " 4</label></div>\n";
		//echo "      <div class=\"radio\"><label>" . mkradio($qid,5) . " 5</label></div>\n";
		//echo "      <div class=\"radio\"><label>" . mkradio($qid,'N/A') . " N/A</label></div>\n";
		break;

		// Attribute rating (tid=6)
		case '6':	
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

		// Drop down (tid=7)
		case '7':	
		$options = array();
		while($choice = fetch_row($choices_result)) {
			$choices_result->MoveNext();
			$options[$choice['id']] = $choice['content'];
		}
		echo mkselect($qid,$options);
		break;

		// Date (tid=8)
		case '8':	
		echo mktext($qid, 10, 10);
		echo "<em>(This format only: ". strftime ($GLOBALS['ESPCONFIG']['date_format'],strtotime("now")) .")</em>\n";
		break;

		// Numeric (tid=9)
		case '9':	
		$size++; // for sign
		if($prec)
			$size += 1 + $prec;
		echo mktext($qid, $size, $size);
		break;

		// Others (tid=10)
		case '10':	
		echo(mktext($qid, $size, $prec));
		break;

	}
	echo "    </div>\n";
	echo "  </div>\n\n";
	return;
}

?>
