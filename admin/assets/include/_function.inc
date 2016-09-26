<?php

/*  proto array parse_file_tab(string group, array file)
  Parse uploaded tab delimited text file into an array. */

// function parse_file_tab($group, $file) {
//   $tab_array = array();
//   foreach($file as $row) { array_push($tab_array, explode("\t", rtrim($row))); }
//   return $tab_array;
// }

// function parse_file_csv(){}
//
// function parse_file_xml(){}

/*  proto bool account_upload(array* exceptions, string upload_type,
  string account_type, array group_acl, file upload_file) exceptions array is populated with failed SQL inserts.
  Returns a true on success, else returns false. */

// function account_upload(&$exceptions, $upload_type, $account_type, $group_acl, $upload_file) {
//   $error = 0;
//   $bool_validate = array('Y', 'N');
//   switch($upload_type) {
//     case 'tab':
//       $arr = parse_file_tab($group_acl, $upload_file);
//       break;
//     case 'csv':
//       $arr = parse_file_csv();
//       break;
//     case 'xml':
//       $arr = parse_file_xml();
//       break;
//     default:
//       $error=1;
//       break;
//   }
//   switch($account_type) {
//     case 'respondents':
//       array_push($exceptions, array("Username", "Password", "Group", "First Name", "Last Name", "Email", "Disabled", "Expir.", "Error"));
//       foreach($arr as $row) {
//         /* check for data in required fields */
//         if ($row[0]) { $username = $row[0]; } else { $error=1; break; }
//         if ($row[1]) { $password = $row[1]; } else { $error=1; break; }
//         if($row[2]) {
//           $realm = $row[2];
//           if (isset($row[3])) { $fname = $row[3]; } else { $fname = ''; }
//           if (isset($row[4])) { $lname = $row[4]; } else { $lname = ''; }
//           if (isset($row[5])) { $email = $row[5]; } else { $email = ''; }
//           if (isset($row[6])) { $expir = $row[6]; } else { $expir = ''; }
//           if (isset($row[7])) { $disabled = $row[7]; } else { $disabled = ''; }
//           /* validate email address.  */
//           if ($email != '') {
//             if (!preg_match( "/^[a-z0-9]+([_\\.-][a-z0-9]+)*@/i" . "([a-z0-9]+([\.-][a-z0-9]+)*)+\\.[a-z]{2,}$", $email)) {
//               array_push($exceptions, array($username, $password, $realm, $fname, $lname, $email, $expir, $disabled,  "Invalid Email Addr."));
//               continue;
//             }
//           }
//           if ($expir) {
//             $year = substr($expir, 0, 4);
//             $month = substr($expir, 4, 2);
//             $day = substr($expir, 6, 2);
//             if(!checkdate($month, $day, $year)) {
//               array_push($exceptions, array($username, $password, $realm, $fname, $lname, $email, $expir, $disabled,  "Invalid Expir. Date"));
//               continue;
//             }
//           }
//           else { $expir = "0"; }
//           if(!in_array($disabled, $bool_validate)) { $disabled = 'N'; }
//           /* Make sure user is authorized to upload this realm */
//           if (!in_array($realm, $group_acl)) {
//             array_push($exceptions, array($username, $password, $realm, $fname, $lname, $email, $expir, $disabled, "Invalid Group"));
//             continue;
//           }
//         }
//         else {
//           $error = 1;
//           break;
//         }
//         $username = _addslashes($username);
//         $password = _addslashes($password);
//         $realm = _addslashes($realm);
//         $fname = _addslashes($fname);
//         $lname = _addslashes($lname);
//         $email = _addslashes($email);
//         $expir = _addslashes($expir);
//         $disabled = _addslashes($disabled);
//         $changed = sys_time_stamp();
//         $sql = "INSERT INTO ".$GLOBALS['ESPCONFIG']['respondent_table']." ";
//         $sql .= "(username, password, realm, fname, lname, ";
//         $sql .= "email, expiration, disabled, changed) ";
//         $sql .= "VALUES ($username, ".db_crypt($password).", ";
//         $sql .= "$realm, $fname, $lname, $email, ";
//         $sql .= "$expir, $disabled, $changed)";
//
//         if(!execute_sql($sql)) {
//           /* insert failed -- stuff record into failed array */
//           array_push($exceptions, array($username, $password, $realm, $fname, $lname, $email, $expir, $disabled, ErrorMsg()));
//         }
//       }
//       break;
//
//     case 'designers':
//       array_push($exceptions, array("Username", "Password", "Group", "First Name", "Last Name", "Email", "PDesign", "PStatus", "PData", "PAll", "PGroup", "PUser", "Expir", "Disabled", "Error")
//       foreach($arr as $row) {
//         /* check for data in required fields */
//         if ($row[0]) { $username = $row[0]; } else { $error=1; break; }
//         if ($row[1]) { $password = $row[1]; } else { $error=1; break; }
//         if ($row[2]) {
//           $realm = $row[2];
//           if (isset($row[3])) { $fname = $row[3]; } else { $fname = ''; }
//           if (isset($row[4])) { $lname = $row[4]; } else { $lname = ''; }
//           if (isset($row[5])) { $email = $row[5]; } else { $email = ''; }
//           if (isset($row[6])) { $pdesign = $row[6]; } else { $pdesign = ''; }
//           if (isset($row[7])) { $pstatus = $row[7]; } else { $pstatus = ''; }
//           if (isset($row[8])) { $pdata = $row[8]; } else { $pdata = ''; }
//           if (isset($row[9])) { $pall = $row[9]; } else { $pall = ''; }
//           if (isset($row[10])) { $pgroup = $row[10]; } else { $pgroup = ''; }
//           if (isset($row[11])) { $puser = $row[11]; } else { $puser = ''; }
//           if (isset($row[12])) { $expir = $row[12]; } else { $expir = ''; }
//           if (isset($row[13])) { $disabled = $row[13]; } else { $disabled = ''; }
//           /* validate email address.  */
//           if ($email != '') {
//             if(!preg_match( "/^[a-z0-9]+([_\\.-][a-z0-9]+)*@/i" . "([a-z0-9]+([\.-][a-z0-9]+)*)+\\.[a-z]{2,}$", $email)) {
//               array_push($exceptions, array($username, $password, $realm, $fname, $lname, $email, $pdesign, $pstatus, $pdata, $pall, $pgroup, $puser, $expir, $disabled,  "Invalid Email Addr."));
//               continue;
//             }
//           }
//           if (!in_array($pdesign, $bool_validate)) { $pdesign = 'Y'; }
//           if (!in_array($pstatus, $bool_validate)) { $pstatus = 'N'; }
//           if (!in_array($pdata, $bool_validate)) { $pdata = 'N'; }
//           if (!in_array($pall, $bool_validate)) { $pall = 'N'; }
//           if (!in_array($pgroup, $bool_validate)) { $pgroup = 'N'; }
//           if (!in_array($puser, $bool_validate)) { $puser = 'N'; }
//           if ($expir) {
//             $year = substr($expir, 0, 4);
//             $month = substr($expir, 4, 2);
//             $day = substr($expir, 6, 2);
//             if (!checkdate($month, $day, $year)) {
//               array_push($exceptions, array($username, $password, $realm, $fname, $lname, $email, $pdesign, $pstatus, $pdata, $pall, $pgroup, $puser, $expir, $disabled,  "Invalid Expir. Date"));
//               continue;
//             }
//           }
//           else
//             $expir = "0";
//           if (!in_array($disabled, $bool_validate)) { $disabled = 'N'; }
//           /* Make sure user is authorized to upload this realm */
//           if (!in_array($realm, $group_acl)) {
//             array_push($exceptions, array($username, $password, $realm, $fname, $lname, $email, $pdesign, $pstatus, $pdata, $pall, $pgroup, $puser, $expir, $disabled,  "Invalid Group"));
//             continue;
//           }
//         }
//         $username = _addslashes($username);
//         $password = _addslashes($password);
//         $realm = _addslashes($realm);
//         $fname = _addslashes($fname);
//         $lname = _addslashes($lname);
//         $email = _addslashes($email);
//         $pdesign = _addslashes($pdesign);
//         $pstatus = _addslashes($pstatus);
//         $pdata = _addslashes($pdata);
//         $pall = _addslashes($pall);
//         $pgroup = _addslashes($pgroup);
//         $puser = _addslashes($puser);
//         $expir = _addslashes($expir);
//         $disabled = _addslashes($disabled);
//         $changed = sys_time_stamp();
//         $sql = "INSERT INTO ".$GLOBALS['ESPCONFIG']['designer_table']." ";
//         $sql .= "(username, password, realm, fname, lname, ";
//         $sql .= "email, pdesign, pstatus, pdata, pall, pgroup,";
//         $sql .= "puser, expiration, disabled, changed) ";
//         $sql .= "VALUES ($username, ".db_crypt($password).", ";
//         $sql .= "$realm, $fname, $lname, $email, ";
//         $sql .= "$pdesign, $pstatus, $pdata, $pall, ";
//         $sql .= "$pgroup, $puser, $expir, $disabled, $changed)";
//         if (!execute_sql($sql)) {
//           /* insert failed -- stuff record into failed array */
//           array_push($exceptions, array($username, $password, $realm, $fname, $lname, $email, $pdesign, $pstatus, $pdata, $pall, $pgroup, $puser, $expir, $disabled,  ErrorMsg()));
//         }
//       }
//       break;
//   }
//   if(count($exceptions) > 1 or $error) { return 0; } else { return 1; }
// }
//
// /*  proto bool question_render(int $question_id, int respnse_number)
//     Checks if conditions for qid are met */
//
// function isequal (&$val1,&$val2) {
//   return $val1 == $val2;
// }
//
// function isnequal (&$val1,&$val2) {
//   return $val1 != $val2;
// }
//
// function issmallerthan (&$val1,&$val2) {
//   return $val1 < $val2;
// }
//
// function isbiggerthan (&$val1,&$val2) {
//   return $val1 > $val2;
// }

// function question_conditioncheck($sid,$qid,$rid) {
//   $conditions[0] = "isequal";
//   $conditions[1] = "isnequal";
//   $conditions[2] = "issmallerthan";
//   $conditions[3] = "isbiggerthan";
//   $return_result = TRUE;
//   $sql = "SELECT * FROM ".$GLOBALS['ESPCONFIG']['condition_table']." WHERE q1_id='$qid'";
//   $result = execute_sql($sql);
//   if (record_count($result) == 0) { return true; }
//   while(list($id, $sid, $q1_id, $q2_id, $cond, $cond_val) = fetch_row($result)) {
//     $result->MoveNext();
//     if ($rid > 0) {
//       $resp = array();
//       $resp = response_select($sid, $rid, $col = null, array($q2_id));
//       if (isset($resp[$q2_id])) {
//         $resp_val=$resp[$q2_id][0];
//         // for dropdown and some other types, this value is an array
//         // we take the value (for now) and not the index ...
//         if (is_array($resp_val)) { $resp_val=$resp_val[0]; }
//         if (call_user_func($conditions[$cond],$resp_val,$cond_val) == TRUE) {
//           # the condition is fullfilled, so we need to show the question
//           return true;
//         }
//       }
//     }
//   }
//   return false;
// }

//  proto bool question_render($question, int question_number)

//    ID     Question type       Has choice?    Table
//    1     'Single answer (SA)'     'Y'        'response_single'
//    2     'Multiple answer (MA)'   'Y'        'response_multiple'
//    3     'Open-end (short)'       'N'        'response_text'
//    4     'Open-end (long)'        'N'        'response_text'
//    5     'Rating scale'           'Y'        'response_rank'
//    6     'Attribute rating'       'Y'        'response_rank'
//    7     'Drop down'              'Y'        'response_single'
//    8     'Date'                   'N'        'response_date'
//    9     'Numeric'                'N'        'response_text'
//    10    'Others'                 'N'        'response_text'
//    99    'Page Break'             'N'        ''
//    100   'Section Text'           'N'        ''

function question_render($question, $question_number, $auto_num, $on_one_line = 0) {
  // process each question
  $qid = &$question['id'];
  $tid = &$question['type_id'];
  $size = &$question['length'];
  $prec = &$question['precise'];
  $extra = &$question['extra'];
  $extra_th = &$question['extra_th'];
  $has_choices = esp_type_has_choices();

  if($has_choices[$tid]) {
    $sql = "SELECT * FROM ".$GLOBALS['ESPCONFIG']['question_choice_table']." WHERE question_id=$qid AND content NOT LIKE '!others%' ORDER BY id";
    $choices_result = execute_sql($sql,"",ADODB_FETCH_ASSOC);
    $sql = "SELECT * FROM ".$GLOBALS['ESPCONFIG']['question_choice_table']." WHERE question_id=$qid AND content LIKE '!others%' ORDER BY id";
    $others_result = execute_sql($sql,"",ADODB_FETCH_ASSOC);
    $others = record_count($others_result);
  } else { $choices_result = ''; }

  //if($question['required']=='Y') { $x = "<mark>"; $y = "*</mark>"; }
  //$questionname = "<a name=\"Q".$question_number."\">Q".$question_number.".</a> ";
  $questionname = "Q".$question_number.". ";

  if ($question['content_th']) { $questionname .= $question['content_th']; } else { $questionname .= $question['content']; }
  echo "\n";

  // Section text (tid = 100)
  if ($tid == 100) {
    echo "  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n";
    echo "    <div class=\"well showconcept\">\n";
    if ($question['content_th']) { echo "      <h4>".nl2br($question['content_th'])."</h4>\n"; }
    else { echo "      <h4>".nl2br($question['content'])."</h4>\n"; }
    echo "    </div>\n";
    echo "  </div>\n\n";
    echo "<br>\n";
    return;
  }

  switch($tid) {

    // Single answer (SA) - radio (tid=1)
    case '1':
    $msg = "คำตอบเดียว / Single answer";
    echo "  <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\" id=\"".$qid."\">\n";
    echo "    <div class=\"panel panel-default\">\n";
    echo "      <div class=\"panel-heading bg-info\"><h4>$questionname</h4><h6>$msg</h6></div>\n";
    echo "      <div class=\"panel-body clearfix\">\n";
    while($choice = fetch_row($choices_result)) {
      $choices_result->MoveNext();
      if ($choice['content_th']) { echo "      <div class=\"radio\"><label>" . mkradio($qid,$choice['id']) . "<span class=\"cr\"><i class=\"cr-icon pe-check\"></i></span>" . $choice['content_th'] . "</label></div>\n"; }
      else { echo "      <div class=\"radio\"><label>" . mkradio($qid,$choice['id']) . "<span class=\"cr\"><i class=\"cr-icon pe-check\"></i></span>" . $choice['content'] . "</label></div>\n"; }
    }
    $j=0;
    while($other = fetch_row($others_result)) {
      $others_result->MoveNext();
      $cid = $other['id'];
      if (!strcmp($other['content'],"!others")) {
        if ($other['content_th']) { $other_text = $other['content_th']; }
        else { $other_text = 'Others:'; }
      }
      else { $other_text = preg_replace(array("/^!others=/","/^!others/"), array('',''), $other['content']); }
      echo "      <div class=\"radio\"><label>" . mkradio($qid,"other_$cid");
      $cid = "${qid}_${cid}";
          echo("<span class=\"cr\"><i class=\"cr-icon pe-check\"></i></span>$other_text <input type=\"text\" name=\"$cid\" onKeyPress=\"other_check(this.name)\"");
          if (isset($_POST[$cid])) { echo(' value="'. _stripslashes(htmlspecialchars($_POST[$cid])) .'"'); echo(" />"); }
            $j++;
            echo "</label></div>\n";
    }
    echo "      </div>\n";
    echo "    </div>\n";
    echo "  </div>\n\n";
    break;

    // Multiple answer (MA) - checkbox (tid=2)
    case '2':
    $msg = "หลายคำตอบ / Multiple answer";
    echo "  <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\" id=\"".$qid."\">\n";
    echo "    <div class=\"panel panel-default\">\n";
    echo "      <div class=\"panel-heading bg-info\"><h4>$questionname</h4><h6>$msg</h6></div>\n";
    echo "      <div class=\"panel-body clearfix\">\n";
    while($choice = fetch_row($choices_result)) {
      $choices_result->MoveNext();
      if ($choice['content_th']) { echo "      <div class=\"checkbox\"><label>" . mkcheckbox($qid,$choice['id']) . "<span class=\"cr\"><i class=\"cr-icon pe-check\"></i></span>" . $choice['content_th'] . "</label></div>\n"; }
      else { echo "      <div class=\"checkbox\"><label>" . mkcheckbox($qid,$choice['id']) . "<span class=\"cr\"><i class=\"cr-icon pe-check\"></i></span>" . $choice['content'] . "</label></div>\n"; }
    }
    $j=0;
    while($other = fetch_row($others_result)) {
      $others_result->MoveNext();
      $cid = $other['id'];
      if (!strcmp($other['content'],"!others")) {
        if ($other['content_th']) { $other_text = $other['content_th']; }
        else { $other_text = 'Others:'; }
      }
      else { $other_text = preg_replace(array("/^!others=/","/^!others/"), array('',''), $other['content']); }
      echo "      <div class=\"checkbox\"><label>" . mkcheckbox($qid,"other_$cid");
          $cid = "${qid}_${cid}";
          echo "<span class=\"cr\"><i class=\"cr-icon pe-check\"></i></span>$other_text <input type=\"text\" name=\"$cid\" onKeyPress=\"other_check(this.name)\"";
          if (isset($_POST[$cid])) { echo(' value="'. _stripslashes(htmlspecialchars($_POST[$cid])) .'"'); echo(" />"); }
      $j++;
      echo "</label></div>\n";
    }
    echo "      </div>\n";
    echo "    </div>\n";
    echo "  </div>\n\n";
    break;

    // Single-line open-end (tid=3)
    case '3':
    $msg = "บันทึกคำตอบ / Fill in your answer";
    echo "  <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\" id=\"".$qid."\">\n";
    echo "    <div class=\"panel panel-default\">\n";
    echo "      <div class=\"panel-heading bg-info\"><h4>$questionname</h4><h6>$msg</h6></div>\n";
    echo "      <div class=\"panel-body clearfix\">\n";
    echo(mktext($qid, $size, $prec));
    echo "      </div>\n";
    echo "    </div>\n";
    echo "  </div>\n\n";
    break;

    // Multi-line open-end (tid=4)
    case '4':
    $msg = "บันทึกคำตอบ / Fill in your answer";
    echo "  <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\" id=\"".$qid."\">\n";
    echo "    <div class=\"panel panel-default\">\n";
    echo "      <div class=\"panel-heading bg-info\"><h4>$questionname</h4><h6>$msg</h6></div>\n";
    echo "      <div class=\"panel-body clearfix\">\n";
    echo(mktextarea($qid, $prec, $size, 'virtual'));
    echo "      </div>\n";
    echo "    </div>\n";
    echo "  </div>\n\n";
    break;

    // Rating scale (tid=5)
    case '5':
    $msg = "คำตอบเดียว / Single answer";
    echo "  <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\" id=\"".$qid."\">\n";
    echo "    <div class=\"panel panel-default\">\n";
    echo "      <div class=\"panel-heading bg-info\"><h4>$questionname</h4><h6>$msg</h6></div>\n";
    echo "      <div class=\"panel-body clearfix\">\n";
    while($choice = fetch_row($choices_result)) {
      $choices_result->MoveNext();
      if ($choice['content_th']) { echo "      <div class=\"radio\"><label>" . mkradio($qid,$choice['id']) . "<span class=\"cr\"><i class=\"cr-icon pe-check\"></i></span>" .$choice['content_th']."</label></div>\n"; }
      else { echo "      <div class=\"radio\"><label>" . mkradio($qid,$choice['id']) . "<span class=\"cr\"><i class=\"cr-icon pe-check\"></i></span>" .$choice['content']."</label></div>\n"; }
    }
    echo "      </div>\n";
    echo "    </div>\n";
    echo "  </div>\n\n";
    break;

    // Attribute rating (tid=6)
    case '6':
    $msg = "คำตอบเดียว / Single answer";
    echo "  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\" id=\"".$qid."\">\n";
    echo "    <div class=\"panel panel-default\">\n";
    echo "      <div class=\"panel-heading bg-info\"><h4>$questionname</h4><h6>$msg</h6></div>\n";
    echo "      <div class=\"panel-body clearfix\">\n";
    if ($size == '0') { $size = '5'; }
    echo "      <table class=\"table table-hover table-condensed\">\n";
    echo "        <tr class=\"active\">\n";
    echo "          <td>Attributes</td>\n";
    for ($j = 0; $j < $size; $j++) {
      $k = $j+1;
      echo "          <td align=\"center\"><div class=\"radio\">".$k."</div></td>\n";
    }
    if ($prec) {
      echo "          <td align=\"center\"><div class=\"radio\">N/A</div></td>\n";
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
        $k = $j+1;
        echo "          <td align=\"center\"><div class=\"radio\"><label>".mkradio($str,$k)."<span class=\"cr\"><i class=\"cr-icon pe-check\"></i></span></label></div></td>\n";
      }
      if ($prec) {
        echo "          <td align=\"center\"><div class=\"radio\"><label>".mkradio($str,'-1')."<span class=\"cr\"><i class=\"cr-icon pe-check\"></i></span></label></div></td>\n";
      }
      echo "        </tr>\n";
    }
    echo "      </table>\n";
    echo "      </div>\n";
    echo "    </div>\n";
    echo "  </div>\n\n";
    break;

    // Drop down (tid=7)
    case '7':
    if ($extra_th) { $insert = $extra_th; }
    else if ($extra) { $insert = $extra; }
    $msg = "คำตอบเดียว / Single answer";
    echo "  <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\" id=\"".$qid."\">\n";
    echo "    <div class=\"panel panel-default\">\n";
    echo "      <div class=\"panel-heading bg-info\"><h4>$questionname</h4><h6>$msg</h6></div>\n";
    echo "      <div class=\"panel-body clearfix\">\n";
    while($choice = fetch_row($choices_result)) {
      $choices_result->MoveNext();
      if ($choice['content_th']) { $options[$choice['id']] = $choice['content_th']; }
      else { $options[$choice['id']] = $choice['content']; }
    }
    if ($extra || $extra_th) {
      echo "      <div class=\"input-group\">\n";
      echo mkselect($qid,$options);
      echo "        <span class=\"input-group-addon\">".$insert."</span>\n";
      echo "      </div>\n";
    } else {
      echo mkselect($qid,$options);
    }
    echo "      </div>\n";
    echo "    </div>\n";
    echo "  </div>\n\n";
    break;

    // Date (tid=8)
    case '8':
    $msg = "บันทึกคำตอบ / Fill in your answer";
    echo "  <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\" id=\"".$qid."\">\n";
    echo "    <div class=\"panel panel-default\">\n";
    echo "      <div class=\"panel-heading bg-info\"><h4>$questionname</h4><h6>$msg</h6></div>\n";
    echo "      <div class=\"panel-body clearfix\">\n";
    echo mktext($qid, 10, 10);
    echo "<em>(This format only: ". strftime ($GLOBALS['ESPCONFIG']['date_format'],strtotime("now")) .")</em>\n";
    echo "      </div>\n";
    echo "    </div>\n";
    echo "  </div>\n\n";
    break;

    // Numeric (tid=9)
    case '9':
    if ($extra_th) { $insert = $extra_th; }
    else if ($extra) { $insert = $extra; }
    $msg = "บันทึกคำตอบ / Fill in your answer";
    echo "  <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\" id=\"".$qid."\">\n";
    echo "    <div class=\"panel panel-default\">\n";
    echo "      <div class=\"panel-heading bg-info\"><h4>$questionname</h4><h6>$msg</h6></div>\n";
    echo "      <div class=\"panel-body clearfix\">\n";
    $size++; // for sign
    if($prec) { $size += 1 + $prec; }
    if ($extra || $extra_th) {
      echo "      <div class=\"input-group\">\n";
      echo mktext($qid, $size, $size);
      echo "        <span class=\"input-group-addon\">".$insert."</span>\n";
      echo "      </div>\n";
    } else {
      echo mktext($qid, $size, $size);
    }
    echo "      </div>\n";
    echo "    </div>\n";
    echo "  </div>\n\n";
    break;

    // Others (tid=10)
    case '10':
    $msg = "บันทึกคำตอบ / Fill in your answer";
    echo "  <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\" id=\"".$qid."\">\n";
    echo "    <div class=\"panel panel-default\">\n";
    echo "      <div class=\"panel-heading bg-info\"><h4>$questionname</h4><h6>$msg</h6></div>\n";
    echo "      <div class=\"panel-body clearfix\">\n";
    echo(mktext($qid, $size, $prec));
    echo "      </div>\n";
    echo "    </div>\n";
    echo "  </div>\n\n";
    break;

  }
  return;
}

/*  proto void response_purge(array/int response_id)
    Purges all traces of response_id from the database. Returns void. */

// function response_purge($qids) {
//   if (is_int($qids)) { $qidstr = '='.$qids; }
//   else if (is_string($qids)) { $qids = preg_split("/ /",$qids); }
//   if (is_array($qids)) { $qidstr = array_to_insql($qids); }
//
//   // decrement the completion statistic for all surveys associated with these responses
//   //esp_require_once('/lib/espsurveystat');
//   require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/include/lib/espsurveystat.inc';
//     $sql = sprintf('SELECT survey_id FROM %s WHERE id %s', $GLOBALS['ESPCONFIG']['response_table'], $qidstr);
//     $res = execute_sql($sql);
//     while ($row = fetch_row($res)) {
//       $res->MoveNext();
//       $sid = $row[0];
//       survey_stat_decrement(SURVEY_STAT_COMPLETED, $sid);
//     }
//
//   // work from the bottom up...
//   // start with the survey results
//   $tables = array('response_bool','response_date','response_multiple','response_other','response_rank','response_single','response_text');
//   foreach($tables as $table) {
//     $sql = "DELETE FROM ".$GLOBALS['ESPCONFIG'][$table.'_table']." WHERE response_id ${qidstr}";
//     $result = execute_sql($sql);
//   }
//   $sql = "DELETE FROM ".$GLOBALS['ESPCONFIG']['response_table']." WHERE id ${qidstr}";
//   $result = execute_sql($sql);
//   return;
// }

// $home = "http://www.siamsquare.org";
// $admin = $home."/admin";
// $self = $_SERVER['PHP_SELF'];

function progress($step = NULL) {
  if (empty($step)) { $step = 1; }
  if ($step == "1") { $a = "<li class=\"progress-step is-active\">"; $b = "<li class=\"progress-step\">"; $c = "<li class=\"progress-step\">"; }
  else if ($step == "2") { $a = "<li class=\"progress-step is-completed\">"; $b = "<li class=\"progress-step is-active\">"; $c = "<li class=\"progress-step\">"; }
  else if ($step == "3") { $a = "<li class=\"progress-step is-completed\">"; $b = "<li class=\"progress-step is-completed\">"; $c = "<li class=\"progress-step is-active\">"; }
?>
<ul class="progress-tracker progress-tracker--text progress-tracker--center">
  <?php echo $a; ?>
    <span class="progress-marker"></span>
    <span class="progress-text">
      <span class="progress-title">Step 1</span>
      Set up
    </span>
  </li>
  <?php echo $b; ?>
    <span class="progress-marker"></span>
    <span class="progress-text">
      <span class="progress-title">Step 2</span>
      Data collection
    </span>
  </li>
  <?php echo $c; ?>
    <span class="progress-marker"></span>
    <span class="progress-text">
      <span class="progress-title">Step 3</span>
      Completed
    </span>
  </li>
</ul>
<?php
}

function survey_listing($start = "0", $limit = "5", $page = NULL) {

  global $self;
  $base =& $self;
  $public =& $GLOBALS['ESPCONFIG']['autopub_url'];
  $me = "/admin/?";

  $sids = array();
  if(!empty($_POST['list'])) { while(list(,$sid) = each($_POST['list'])) { array_push($sids, intval($sid)); } survey_purge($sids); }

  if (empty($start)) { $start = 0; }
  if (empty($limit)) { $limit = 5; }

  if ($page) { $start = ($page-1) * $limit; }
  $to_record = $start + $limit;

  $add = " LIMIT $start, $limit";

  if($_SESSION['acl']['superuser'] == 'Y') {
    $sql1 = "SELECT s.id, s.name, s.title, s.status, s.owner, s.realm, COUNT(q.id) as count FROM ".$GLOBALS['ESPCONFIG']['survey_table']." s LEFT JOIN ".$GLOBALS['ESPCONFIG']['question_table']." q ON s.id = q.survey_id AND q.deleted = 'N' GROUP BY s.id, s.name, s.title, s.status, s.owner, s.realm ORDER BY s.id DESC";
    $sql2 = "SELECT s.id, s.name, s.title, s.status, s.owner, s.realm, COUNT(q.id) as count FROM ".$GLOBALS['ESPCONFIG']['survey_table']." s LEFT JOIN ".$GLOBALS['ESPCONFIG']['question_table']." q ON s.id = q.survey_id AND q.deleted = 'N' GROUP BY s.id, s.name, s.title, s.status, s.owner, s.realm ORDER BY s.id DESC"  . $add;
  } else {
    $realms = array_to_insql(array_intersect($_SESSION['acl']['pall'], array_merge($_SESSION['acl']['pall'], $_SESSION['acl']['pdesign'])));
    $sql1 = "SELECT s.id, s.name, s.title, s.status, s.owner, s.realm, COUNT(q.id) as count FROM ".$GLOBALS['ESPCONFIG']['survey_table']." s LEFT JOIN ".$GLOBALS['ESPCONFIG']['question_table']." q ON s.id = q.survey_id AND q.deleted = 'N' GROUP BY s.id, s.name, s.title, s.status, s.owner, s.realm ORDER BY s.id DESC";
    $sql2 = "SELECT s.id, s.name, s.title, s.status, s.owner, s.realm, COUNT(q.id) as count FROM ".$GLOBALS['ESPCONFIG']['survey_table']." s LEFT JOIN ".$GLOBALS['ESPCONFIG']['question_table']." q ON s.id = q.survey_id AND q.deleted = 'N' GROUP BY s.id, s.name, s.title, s.status, s.owner, s.realm ORDER BY s.id DESC"  . $add;
  }
  $result1 = execute_sql($sql1);
  $result2 = execute_sql($sql2);
  $rows = record_count($result1);

  if ($to_record > $rows) { $to_record = $rows; }
  $from_record = $start + 1;

  echo "<h2>Listing your surveys</h2>\n";
  //echo "<p>You have a total of $rows projects: showing results $from_record to $to_record</p>\n";
  echo "<p>You have a total of $rows $type projects (showing results $from_record to $to_record)</p>\n";
  //echo "<div class=\"pull-right\">Showing results $from_record to $to_record [<a href=\"".$me."\">total of $rows</a>]</div>";
  //echo "<p class=\"clearfix\"></p>";
  echo "<div class=\"row\">\n";

  $realms = array_intersect($_SESSION['acl']['pstatus'], array_merge($_SESSION['acl']['pall'], $_SESSION['acl']['pstatus']));

  while(list($sid,$name,$title,$status,$owner,$realm,$qnum) = fetch_row($result2)) {

    echo "<div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6 manage-border-space\">\n";
    echo "<div class=\"manage-listing\">\n";

    $result2->MoveNext();

    $tt1 = htmlentities($public."?name=$name");
    $tt2 = htmlentities($public."?name=$name&test=1");
    $tt3 = htmlentities($base."?where=tab&newid=$sid");
    $tt4 = htmlentities($base."?where=copy&sid=$sid");
    $tt5 = htmlentities($base."?where=results&sid=$sid");
    $tt6 = htmlentities($base."?where=results&sid=$sid&type=cross");
    $tt7 = htmlentities($base."?where=report&sid=$sid");

    // results
    $flexx = "<a href=\"$tt5\">Result <i class=\"pe-pie-chart pe-fw\"></i></a> | \n";
    $flexx .= "<a href=\"$tt6\">Cross tab <i class=\"pe-bar-chart pe-fw\"></i></a> | \n";
    $flexx .= "<a href=\"$tt7\">Report <i class=\"pe-line-chart pe-fw\"></i></a>\n";

    if($status & STATUS_DELETED) {
      $stat = "Archived"; $progress = "3";
      $test1 = 'Archived';
      $test2 = 'Archived';
      $done = '&nbsp;';
      $act = '&nbsp;';
      $del = '&nbsp;';
    } elseif($status & STATUS_DONE) {
      $stat = "Ended"; $progress = "3";
      $test1 = $act = '&nbsp;';
      $test2 = $act = '&nbsp;';
      $done = '&nbsp;';
      $act = '&nbsp;';
      $del = '&nbsp;';
    } elseif($status & STATUS_ACTIVE) {
      $stat = "Active"; $progress = "2";
      $test1 = "<span class=\"label label-success\"><i class=\"pe-check pe-fw\"></i> Active</span>";
      $test2 = "[".$results."]";
      $done = '&nbsp;';
      $act = '&nbsp;';
      $del = '&nbsp;';
    } elseif($status & STATUS_TEST) {
      $stat = "Testing"; $progress = "1";
      $test1 = "<span class=\"label label-warning\"><i class=\"pe-paper-plane pe-fw\"></i> Testing</span>";
      $test2 = "[ <a href=\"". $base .htmlentities("?where=status&op=m&sid=${sid}")."\">change to Editing</a> ]";
      $done = '&nbsp;';
      $act = '&nbsp;';
      $del = '&nbsp;';
    } else {
      $stat = "Editing"; $progress = "1";
      $test1 = "<span class=\"label label-danger\"><i class=\"pe-pencil-square-o pe-fw\"></i> Editing</span>";
      $test2 = "[ <a href=\"". $base .htmlentities("?where=status&op=t&sid=${sid}")."\">change to Testing</a> ]";
      if ($_SESSION['acl']['superuser'] == 'Y') { $done = "<a href=\"". $base .htmlentities("?where=status&op=e&sid=$sid")."\"><i class=\"pe-trash-o pe-fw\"></i></a>"; }
      else { $done = '&nbsp;'; }
      $act  = "<a href=\"". $base .htmlentities("?where=status&op=a&sid=$sid")."\" onclick='return activateConfirm()'><i class=\"pe-toggle-on pe-fw\"></i></a>";
      $del  = "<a href=\"". $base .htmlentities("?where=status&op=d&sid=$sid")."\"><i class=\"pe-archive pe-fw\"></i></a>";
    }

    // whack things back to permissions set by ACL for everyone _not_ superuser
    if($_SESSION['acl']['superuser'] != 'Y' && !in_array($realm, $realms)) {
      $act  = '&nbsp;';
      $done = '&nbsp;';
      $del  = '&nbsp;';
    }

    // title
    if ($stat == 'Active') { $title = "<a href=\"$tt1\">$title</a>"; }
    elseif ($stat == 'Testing') { $title = "<a href=\"$tt2\">$title</a>"; }
    elseif ($stat == 'Editing') { $title = "<a href=\"$tt3\">$title</a>"; }
    elseif ($stat == 'Archived') { $title = $title; }
    else { $title = $title; }

    // edit/copy & activate/end
     $copy = "<a href=\"$tt4\"><i class=\"pe-files-o pe-fw\"></i></a>\n";
    if ($stat == 'Active') { $act = ""; }
    elseif ($stat == 'Testing') { $act = "<a href=\"$tt2\"><i class=\"pe-paper-plane pe-fw\"></i></a> $copy $act $done"; }
    elseif ($stat == 'Editing') { $act = "<a href=\"$tt3\"><i class=\"pe-pencil-square-o pe-fw\"></i></a> $copy $act $done"; }
    elseif ($stat == 'Archived') { $act = ""; }
    else { $act = "<i class=\"pe-pencil-square-o pe-fw\"></i>"; }

    echo "<h3>$title</h3>\n";
    echo progress($progress);
    echo "<p>Owner: $owner </p>\n";
    echo "<p>Company: $realm</p>\n";
    echo "<p>No. of questions: $qnum</p>\n";
    echo "<p>Status: $test2</p>\n";
    echo "<p>Results: $flexx</p>\n";
    echo "<p>Tools <small>(edit/copy/activate)</small>: $act</p>\n";
    if($_SESSION['acl']['superuser'] == 'Y') { echo "Delete?: \n"; }
    echo "<p>$test1</p>\n";

    echo "</div>\n";
    echo "</div>\n";

  }

  echo "  </div>\n";

  // pagination

    $total = ceil($rows/$limit);
    $offset = ($currentpage - 1) * $rowsperpage;

    echo "<nav class=\"pagination-centered\">\n";
    echo "<ul class=\"pagination\">\n";

    if ($page > 1) { $previous = $page-1; echo "<li><a class=\"btn btn-sm btn-default\" role=\"button\" href=\"".$me."&p=".$previous."\">&laquo;</a></li>\n"; }
    else { echo "<li class=\"disabled\"><a class=\"btn btn-sm btn-warning\" role=\"button\" href=\"\">&laquo;</a></li>\n"; }

    for ($i=1; $i<=$total; $i++) {
      if($i==$page) { echo "<li class=\"active\"><a class=\"btn btn-sm btn-default\" role=\"button\" href=\"".$me."&p=".$i."\">".$i."</a></li>\n"; }
      else { echo "<li><a class=\"btn btn-sm btn-default\" role=\"button\" href=\"".$me."&p=".$i."\">".$i."</a></li>\n"; }
    }

    if ($page != $total) { $next = $page+1; echo "<li><a class=\"btn btn-sm btn-default\" role=\"button\" href=\"".$me."&p=".$next."\">&raquo;</a></li>\n"; }
    else { echo "<li class=\"disabled\"><a class=\"btn btn-sm btn-warning\" role=\"button\" href=\"\">&raquo;</a></li>\n"; }

    echo "</ul>\n";
    echo "</nav>\n\n";

  echo "<br>\n\n";

  echo "<ul class=\"pe-ul\">\n";
  echo "  <li><i class=\"pe-li pe-check-square\"></i><strong>Test</strong> transitions a survey into testing mode. At which point you may perform a live test by taking the survey, and viewing the results. The survey may be switched back into <strong>Edit</strong> mode if additional edits are needed.</li>\n";
  echo "  <li><i class=\"pe-li pe-check-square\"></i><strong>Activate</strong> transitions a survey into active mode. In this mode the survey is open for production use, and may be put online. This will clear any results from testing mode (if any). No further editing of survey is allowed.</li>\n";
  echo "  <li><i class=\"pe-li pe-check-square\"></i><strong>End</strong> transitions a survey into ended mode. In this mode, <u>no edits are possible</u>, no users may take the survey (it is inactive), but results are still viewable from the results menu.</li>\n";
  echo "  <li><i class=\"pe-li pe-check-square\"></i><strong>Archive</strong> removes this survey. It is still stored in the database, but no further interaction is allowed. You may <b>not</b> view the results of an archived survey.</li>\n";
  echo "</ul>\n";

  echo "<br>\n";

}

function survey_status($start = "0", $limit = "5", $page = NULL) {

  global $self;
  $base =& $self;
  $public =& $GLOBALS['ESPCONFIG']['autopub_url'];
  //$me = $_SERVER['REQUEST_URI'];
  $me = "/admin/index.php?where=status";

  $sids = array();
  if(!empty($_POST['list'])) {
    while(list(,$sid) = each($_POST['list'])) {
      array_push($sids, intval($sid));
    }
    survey_purge($sids);
  }

  if ($page) { $start = ($page-1) * $limit; }
  $to_record = $start + $limit;

  $add = " LIMIT $start, $limit";

  if ($_SESSION['acl']['superuser'] == 'Y') {
    $sql1 = "SELECT s.id,s.name,s.title,s.status,s.owner,s.realm,COUNT(q.id) as count FROM ".$GLOBALS['ESPCONFIG']['survey_table']." s LEFT JOIN ".$GLOBALS['ESPCONFIG']['question_table']." q ON s.id = q.survey_id AND q.deleted = 'N' GROUP BY s.id, s.name, s.title, s.status, s.owner, s.realm ORDER BY s.id DESC";
    $sql2 = "SELECT s.id,s.name,s.title,s.status,s.owner,s.realm,COUNT(q.id) as count FROM ".$GLOBALS['ESPCONFIG']['survey_table']." s LEFT JOIN ".$GLOBALS['ESPCONFIG']['question_table']." q ON s.id = q.survey_id AND q.deleted = 'N' GROUP BY s.id, s.name, s.title, s.status, s.owner, s.realm ORDER BY s.id DESC"  . $add;
  } else {
    $realms = array_to_insql(array_intersect($_SESSION['acl']['pall'], array_merge($_SESSION['acl']['pall'], $_SESSION['acl']['pdesign'])));
    $sql1 = "SELECT s.id,s.name,s.title,s.status,s.owner,s.realm,COUNT(q.id) as count FROM ".$GLOBALS['ESPCONFIG']['survey_table']." s LEFT JOIN ".$GLOBALS['ESPCONFIG']['question_table']." q ON s.id = q.survey_id AND q.deleted = 'N' GROUP BY s.id, s.name, s.title, s.status, s.owner, s.realm ORDER BY s.id DESC";
    $sql2 = "SELECT s.id,s.name,s.title,s.status,s.owner,s.realm,COUNT(q.id) as count FROM ".$GLOBALS['ESPCONFIG']['survey_table']." s LEFT JOIN ".$GLOBALS['ESPCONFIG']['question_table']." q ON s.id = q.survey_id AND q.deleted = 'N' GROUP BY s.id, s.name, s.title, s.status, s.owner, s.realm ORDER BY s.id DESC"  . $add;
  }
  $result1 = execute_sql($sql1);
  $result2 = execute_sql($sql2);
  $rows = record_count($result1);

  if ($to_record > $rows) { $to_record = $rows; }
  $from_record = $start + 1;

  echo "<p class=\"text-right\">showing results $from_record to $to_record [<a href=\"".$me."\">total of $rows</a>]</p>";
  echo "<table class=\"table table-hover\">\n";
  echo "  <tr class=\"active\">\n";
  echo "    <th>Project</th>\n";
  echo "    <th>Owner (Group)</th>\n";
  echo "    <th>No. of questions</th>\n";
  echo "    <th>Status</th>\n";
  echo "    <th>Tools<br><small>[edit/copy/activate]</small></th>\n";
  //if($_SESSION['acl']['superuser'] == 'Y') { echo "    <th>Delete?</th>\n"; }
  echo "  </tr>\n";

  $realms = array_intersect($_SESSION['acl']['pstatus'], array_merge($_SESSION['acl']['pall'], $_SESSION['acl']['pstatus']));

  while(list($sid,$name,$title,$status,$owner,$realm,$qnum) = fetch_row($result2)) {
    $result2->MoveNext();

    $tt1 = htmlentities($public."?name=$name");
    $tt2 = htmlentities($public."?name=$name&test=1");
    $tt3 = htmlentities($base."?where=tab&newid=$sid");
    $tt4 = htmlentities($base."?where=copy&sid=$sid");
    $tt5 = htmlentities($base."?where=results&sid=$sid");
    $tt6 = htmlentities($base."?where=results&sid=$sid&type=cross");
    $tt7 = htmlentities($base."?where=report&sid=$sid");

    // results
    $results = "      <a href=\"$tt5\">Result <i class=\"pe-pie-chart pe-fw\"></i></a> | \n";
    $results .= "      <a href=\"$tt6\">Cross tab <i class=\"pe-bar-chart pe-fw\"></i></a> | \n";
    $results .= "      <a href=\"$tt7\">Report <i class=\"pe-line-chart pe-fw\"></i></a>\n";

    if ($status & STATUS_DELETED) {
      $stat = "Archived";
      $test = 'Archived';
      $done = '&nbsp;';
      $act = '&nbsp;';
      $del = '&nbsp;';
    } elseif ($status & STATUS_DONE) {
      $stat = "Ended";
      $test = $act = '&nbsp;';
      $done = '&nbsp;';
      $act = '&nbsp;';
      $del = '&nbsp;';
    } elseif ($status & STATUS_ACTIVE) {
      $stat = "Active";
      $test = "<span class=\"label label-success\"><i class=\"pe-check pe-fw\"></i> Active</span> <small>[".$results."]</small>";
      $done = '&nbsp;';
      $act = '&nbsp;';
      $del = '&nbsp;';
    } elseif ($status & STATUS_TEST) {
      $stat = "Testing";
      $test = "<span class=\"label label-warning\"><i class=\"pe-paper-plane pe-fw\"></i> Testing</span> <small>[ <a href=\"". $base .htmlentities("?where=status&op=m&sid=${sid}")."\">change to Editing</a> ]</small>";
      $done = '&nbsp;';
      $act = '&nbsp;';
      $del = '&nbsp;';
    } else {
      $stat = "Editing";
      $test = "<span class=\"label label-danger\"><i class=\"pe-pencil-square-o pe-fw\"></i> Editing</span> <small>[ <a href=\"". $base .htmlentities("?where=status&op=t&sid=${sid}")."\">change to Testing</a> ]</small>";
      if ($_SESSION['acl']['superuser'] == 'Y') { $done = "<a href=\"". $base .htmlentities("?where=status&op=e&sid=$sid")."\"><i class=\"pe-trash-o pe-fw\"></i></a>"; }
      else { $done = '&nbsp;'; }
      $act  = "<a href=\"". $base .htmlentities("?where=status&op=a&sid=$sid")."\" onclick='return activateConfirm()'><i class=\"pe-toggle-on pe-fw\"></i></a>";
      $del  = "<a href=\"". $base .htmlentities("?where=status&op=d&sid=$sid")."\"><i class=\"pe-archive pe-fw\"></i></a>";
    }

    // whack things back to permissions set by ACL for everyone _not_ superuser
    if($_SESSION['acl']['superuser'] != 'Y' && !in_array($realm, $realms)) {
      $act  = '&nbsp;';
      $done = '&nbsp;';
      $del  = '&nbsp;';
    }

    echo "  <tr>\n";
    // title
    if ($stat == 'Active') { echo "    <td><a href=\"$tt1\">$title</a></td>\n"; }
    elseif ($stat == 'Testing') { echo "    <td><a href=\"$tt2\">$title</a></td>\n"; }
    elseif ($stat == 'Editing') { echo "    <td><a href=\"$tt3\">$title</a></td>\n"; }
    elseif ($stat == 'Archived') { echo "    <td>$title</td>\n"; }
    else { echo "    <td>$title</td>\n"; }
    // user/group
    echo "    <td>$owner ($realm)</td>\n";
    // question numbers
    echo "    <td class=\"text-center\">$qnum</td>\n";
    // test or edit
    echo "    <td>$test</td>\n";
    //
    // edit/copy & activate/end
     $copy = "<a href=\"$tt4\"><i class=\"pe-files-o pe-fw\"></i></a>\n";
    if ($stat == 'Active') { echo "    <td>&nbsp;</td>\n"; }
    elseif ($stat == 'Testing') { echo "    <td><a href=\"$tt2\"><i class=\"pe-paper-plane pe-fw\"></i></a> $copy $act $done</td>\n"; }
    elseif ($stat == 'Editing') { echo "    <td><a href=\"$tt3\"><i class=\"pe-pencil-square-o pe-fw\"></i></a> $copy $act $done</td>\n"; }
    elseif ($stat == 'Archived') { echo "    <td>&nbsp;</td>\n"; }
    else { echo "    <td><i class=\"pe-pencil-square-o pe-fw\"></i></td>\n"; }

    // delete (disable)
    //echo "    <td>$del</td>\n";
    //if($_SESSION['acl']['superuser'] == 'Y') {
    //  //echo "    <td><input type=\"checkbox\" name=\"list[]\" value=\"$sid\" />";
    //  //echo "<p class=\"text-center\">\n";
    //  //echo "<td \"text-center\">\n";
    //  echo "<td class=\"text-right\">\n";
    //  if ($status & STATUS_DELETED) {
    //    echo "Deleted\n";
    //  } else {
    //    echo "<input type=\"checkbox\" name=\"list[]\" value=\"$sid\" />";
    //  }
    //  echo "</td>\n\n";
    //  //echo "<input class=\"btn btn-default\" type=\"reset\" name=\"reset\" value=\"Clear Checks\" />\n";
    //  //echo "</p>\n\n";
    //
    //}
    echo "  </tr>\n";
  }

  echo "</table>\n\n";

  //if($_SESSION['acl']['superuser'] == 'Y') {
  //
  //  echo "<p class=\"text-right\">\n";
  //  echo "<input type=\"hidden\" name=\"where\" value=\"purge\" /> &nbsp; \n";
  //  $confirmText = "You are about to PERMANENTLY and IRREVOCABLY remove ALL information about the selected surveys. Click Ok if you are absolutely //sure this is what you want to do.\n";
  //  echo "<input class=\"btn btn-danger btn-sm\" type=\"submit\" name=\"submit\" onclick='return confirm(\"You are about to PERMANENTLY and IRREVOCABLY remove ALL information about the selected surveys. Click Ok if you are absolutely sure this is what you want to do.\")' onkeypress='return confirm (\"You are about to PERMANENTLY and IRREVOCABLY remove ALL information about the selected surveys. Click Ok if you //are absolutely sure this is what you want to do.\");' value=\"Delete selected data\" />\n";
  //  echo "<input class=\"btn btn-default btn-sm\" type=\"reset\" name=\"reset\" value=\"Clear checks\" />";
  //  echo "</p>\n\n";
  //}

  // pagination
  if (strpos($_SERVER['REQUEST_URI'],'status')) {

    $total = ceil($rows/$limit);
    $offset = ($currentpage - 1) * $rowsperpage;

    echo "<nav class=\"pagination-centered\">\n";
    echo "  <ul class=\"pagination\">\n";

    if ($page > 1) { $previous = $page-1; echo "    <li><a class=\"btn btn-sm btn-default\" href=\"".$me."&p=".$previous."\">&laquo;</a></li>\n"; }
    else { echo "    <li class=\"disabled\"><a class=\"btn btn-sm btn-default\" href=\"\">&laquo;</a></li>\n"; }

    for ($i=1;$i<=$total;$i++) {
      if($i==$page) { echo "    <li class=\"active\"><a class=\"btn btn-sm btn-default\" href=\"".$me."&p=".$i."\">".$i."</a></li>\n"; }
      else { echo "    <li><a class=\"btn btn-sm btn-default\" href=\"".$me."&p=".$i."\">".$i."</a></li>\n"; }
    }

    if ($page != $total) { $next = $page+1; echo "    <li><a class=\"btn btn-sm btn-default\" href=\"".$me."&p=".$next."\">&raquo;</a></li>\n"; }
    else { echo "    <li class=\"disabled\"><a class=\"btn btn-sm btn-default\" href=\"\">&raquo;</a></li>\n"; }

    echo "  </ul>\n";
    echo "</nav>\n\n";
  }
  echo "<br>\n\n";
}

// function progressbar($section, $total) {
//   $progress = ($section/$total) * 100;
//   $progress = round ($progress, 1);
//   $output = "<div class=\"progress\">\n";
//   $output .= "  <div class=\"progress-bar progress-bar-striped\" role=\"progressbar\" aria-valuenow=\"$progress\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: $progress%\">\n";
//   $output .= "   $progress% <span class=\"sr-only\">$progress% completion</span>\n";
//   $output .= "  </div>\n";
//   $output .= "</div>\n";
//   return $output;
// }
//
// function autotext($choice_content, $choice_content_th) {
//   if ($choice_content_th == '') {
//     if ($choice_content == '!others') { $choice_content_th = 'อื่นๆ (ระบุ)'; }
//     if ($choice_content == '!others Other (please specify)') { $choice_content_th = 'อื่นๆ (ระบุ)'; }
//     if ($choice_content == 'Refused to answer') { $choice_content_th = 'ปฏิเสธ'; }
//     if ($choice_content == 'Cannot remember') { $choice_content_th = 'จำไม่ได้'; }
//     if ($choice_content == 'Prefer not to answer') { $choice_content_th = 'ปฏิเสธ'; }
//     if ($choice_content == 'None of the above') { $choice_content_th = 'ไม่มีที่กล่าวข้างต้น'; }
//     if ($choice_content == 'Male') { $choice_content_th = 'ผู้ชาย'; }
//     if ($choice_content == 'Female') { $choice_content_th = 'ผู้หญิง'; }
//     if ($choice_content == 'SES-A') { $choice_content_th = 'สถานะภาพทางสังคม A'; }
//     if ($choice_content == 'SES-B') { $choice_content_th = 'สถานะภาพทางสังคม B'; }
//     if ($choice_content == 'SES-C') { $choice_content_th = 'สถานะภาพทางสังคม C'; }
//     if ($choice_content == 'SES-D') { $choice_content_th = 'สถานะภาพทางสังคม D'; }
//     if ($choice_content == 'SES-E') { $choice_content_th = 'สถานะภาพทางสังคม E'; }
//   }
//   return $choice_content_th;
// }
//
// function ago($time) {
//   $periods = array("second", "minute", "hour", "day", "week", "month", "year", "decade");
//   $lengths = array("60","60","24","7","4.35","12","10");
//   $now = time();
//   $difference = $now - $time;
//   $tense = "ago";
//   for ($j = 0; $difference >= $lengths[$j] && $j < count($lengths)-1; $j++) { $difference /= $lengths[$j]; }
//   $difference = round($difference);
//   if ($difference != 1) { $periods[$j].= "s"; }
//   return "$difference $periods[$j] 'ago' ";
// }
//
// function textreplacement($text) {
//   $replace = array(
//     'wordpress' => '<a href="#">wordpress</a>',
//     'excerpt' => '<a href="#">excerpt</a>',
//     'function' => '<a href="#">function</a>'
//   );
//   $text = str_replace(array_keys($replace), $replace, $text);
//   return $text;
// }
//
// function clickemail($text) {
//   $text = eregi_replace('([_\.0-9a-z-]+@([0-9a-z][0-9a-z-]+\.)+[a-z]{2,3})','<a href="mailto:\\1">\\1</a>', $text);
//   return $text;
// }
//
// function fileWrite($file, $message) {
//   fwrite(fopen($file, 'a'), $message . "\n");
// }
//
// function fileRead($file) {
//   $lines = file($file);
//   foreach ($lines as $line_num => $line) { echo "$line</br>\n"; }
// }
//
// function decode_json($json) {
//   $obj = json_decode($json);
//   return $obj->interest[1]; //prints php
// }
//
// function makelink($str) {
//   $reg_exUrl = "/(http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/";
//   $urls = array();
//   $urlsToReplace = array();
//   if(preg_match_all($reg_exUrl, $str, $urls)) {
//     $numOfMatches = count($urls[0]);
//     $numOfUrlsToReplace = 0;
//     for($i=0; $i<$numOfMatches; $i++) {
//       $alreadyAdded = false;
//       $numOfUrlsToReplace = count($urlsToReplace);
//       for($j=0; $j<$numOfUrlsToReplace; $j++) {
//         if($urlsToReplace[$j] == $urls[0][$i]) { $alreadyAdded = true; }
//       }
//       if(!$alreadyAdded) { array_push($urlsToReplace, $urls[0][$i]); }
//     }
//     $numOfUrlsToReplace = count($urlsToReplace);
//     for($i=0; $i<$numOfUrlsToReplace; $i++) {
//       $str = str_replace($urlsToReplace[$i], "<a href=\"".$urlsToReplace[$i]."\">".$urlsToReplace[$i]."</a> ", $str);
//     }
//     return $str;
//   } else {
//     return $str;
//   }
// }
//
// function br2newline($input) {
//   $out = str_replace( "<br>", "\n", $input );
//   $out = str_replace( "<br/>", "\n", $out );
//   $out = str_replace( "<br>", "\n", $out );
//   $out = str_replace( "<BR>", "\n", $out );
//   $out = str_replace( "<BR/>", "\n", $out );
//   $out = str_replace( "<br>", "\n", $out );
//   return $out;
// }
//
// function br2nl($input) {
//   return preg_replace('/<br(\s+)?\/?>/i', "\n", $input);
// }
//
// function dataURIs($file) {
//   // convert gif to data
//   $datafile = base64_encode(file_get_contents($file));
//   return $datafile;
// }

// //  Aggregate multiple surveys together to create a brand new survey
// function survey_aggregate($sids) {
//   if (is_scalar($sids) && is_numeric($sids)) { $sids = array ($sids); }
//   elseif (! is_array($sids)) { return false; }
//   if (0 == count($sids)) { return true; }
//   reset($sids);
//   $first_sid = current($sids);
//   $sql = sprintf('SELECT * FROM %s WHERE id=%d', $GLOBALS['ESPCONFIG']['survey_table'], $first_sid);
//   $res = execute_sql($sql, '', ADODB_FETCH_ASSOC);
//   if (1 == record_count($res)) { $survey = fetch_row($res); }
//   db_close($res);
//   if (! isset($survey)) { return false; }
//
//   // update its data so that it's a new survey
//   // ... clear the sid ... change the owner ... change the name ... reset the status
//   $survey['id'] = null;
//   $survey['owner'] = (isset($_SESSION['acl']['username']) ? $_SESSION['acl']['username'] : $survey['owner']);
//   //$survey['name'] .= '_'. _('copy');
//   //$survey['name'] = null;
//   $survey['status'] = 0;
//
//   // create new survey
//   $survey['changed'] = sys_time_stamp();
//   $sql = sql_for_insert_into_table($GLOBALS['ESPCONFIG']['survey_table'], $survey);
//   $res = execute_sql($sql);
//   if (!$res) { return false; }
//   $new_sid = insert_id('survey_id_seq');
//
//   // copy the questions for each of the surveys
//   $pos = 0;
//   foreach ($sids as $sid) {
//     $pos = survey_copy_questions_and_conditions($sid, $new_sid, $pos);
//     if (false === $pos) { return false; }
//   }
//   return $new_sid;
// }

//
// //  Copy questions from one survey to another, starting at a given position
// function survey_copy_questions_and_conditions($sid, $new_sid, $pos = 0) {
//   $has_choices = esp_type_has_choices();
//   // make copies of all the questions
//   $question_fields = array('id', 'survey_id', 'name', 'type_id', 'result_id', 'length', 'precise', 'position', 'content', 'content_th', 'required', 'deleted', 'public');
//   $sql = "SELECT ". join(', ',$question_fields)." FROM ".$GLOBALS['ESPCONFIG']['question_table']." WHERE survey_id=${sid} AND deleted='N' ORDER by position, id";
//   $result = execute_sql($sql,"",ADODB_FETCH_ASSOC);
//
//   array_shift($question_fields);
//   while($question = fetch_row($result)) {
//     $result->MoveNext();
//     $tid = $question['type_id'];
//     $qid = $question['id'];
//     // fix some fields first
//     $question['survey_id'] = $new_sid;
//     $question['position'] = $pos++;
//
//     // copy question to new survey
//     array_shift($question);
//     if(!isset($question['result_id'])) { $question['result_id'] = 'NULL'; }
//
//     $question['name'] = _addslashes($question['name']);
//     $question['content'] = _addslashes($question['content']);
//     $question['content_th'] = _addslashes($question['content_th']);
//     $question['required'] = _addslashes($question['required']);
//     $question['deleted'] = _addslashes($question['deleted']);
//     $question['public'] = _addslashes($question['public']);
//     $sql = "INSERT INTO ".$GLOBALS['ESPCONFIG']['question_table']." ";
//     $sql .= '('. join(',', $question_fields) .') ';
//     $sql .= 'VALUES ( '. join(',',array_values($question)) .' )';
//
//     if (!execute_sql($sql)) { return(false); }
//     $new_qid = insert_id('question_id_seq');
//
//     // make copies of all the question choices (if exist)
//     if($has_choices[$tid]) {
//       $question_choice_fields = array('question_id', 'content', 'content_th', 'value', 'feedback', 'credit');
//       $sql = "SELECT ". join(', ',$question_choice_fields)." FROM ".$GLOBALS['ESPCONFIG']['question_choice_table']." WHERE question_id=${qid} ORDER BY id";
//         $result2 = execute_sql($sql,"",ADODB_FETCH_ASSOC);
//         while($choice = fetch_row($result2)) {
//           $result2->MoveNext();
//           $choice['question_id'] = $new_qid;
//           $choice['content'] = _addslashes($choice['content']);
//           $choice['content_th'] = _addslashes($choice['content_th']);
//           $choice['value'] = _addslashes($choice['value']);
//           $choice['feedback'] = _addslashes($choice['feedback']);
//           $choice['credit'] = _addslashes($choice['credit']);
//
//           $sql = "INSERT INTO ".$GLOBALS['ESPCONFIG']['question_choice_table']." ";
//           $sql .= '('. join(',',$question_choice_fields) .') ';
//           $sql .= 'VALUES ( '. join(',',array_values($choice)) .' )';
//           if (!execute_sql($sql)) { return(false); }
//         }
//         db_close($result2);
//       }
//     }
//     db_close($result);
//
//     // copy conditions
//     $sql = "INSERT INTO ".$GLOBALS['ESPCONFIG']['condition_table']."
//        (id,  survey_id, q1_id, q2_id, cond, cond_value) SELECT NULL, $new_sid, qnew1.id, qnew2.id, cond, cond_value FROM
//         ".$GLOBALS['ESPCONFIG']['question_table']." qold1,
//         ".$GLOBALS['ESPCONFIG']['question_table']." qold2,
//         ".$GLOBALS['ESPCONFIG']['question_table']." qnew1,
//         ".$GLOBALS['ESPCONFIG']['question_table']." qnew2,
//         ".$GLOBALS['ESPCONFIG']['condition_table']." c
//        WHERE qold1.id=c.q1_id AND qold2.id=c.q2_id AND qold1.survey_id=$sid AND qold2.survey_id=$sid AND
//              qnew1.survey_id=$new_sid AND qnew1.position=qold1.position AND qnew1.deleted=qold1.deleted AND
//              qnew2.survey_id=$new_sid AND qnew2.position=qold2.position AND qnew2.deleted=qold2.deleted ";
//     $result = execute_sql($sql);
//     if (false === $result) { return false; }
//   return $pos;
// }
//
// //  Insert into a table
// function sql_for_insert_into_table($table, $values) {
//   foreach ($values as $field => $value) {
//     if (is_null($value)) { $values[$field] = 'null'; }
//     else if (is_scalar($value)) { if (!is_numeric($value)) { if ($value == sys_time_stamp()) { } else { $values[$field] = _addslashes($value); } } }
//     else { trigger_error("Unknown value = [$value] at key = [$field]", E_USER_WARNING); $values[$field] = 'null'; }
//   }
//   return sprintf('INSERT INTO %s (%s) VALUES (%s)', $table, implode(',', array_keys($values)), implode(',', $values) );
// }
//
// //  survey_copy()
// function survey_copy($sid) {
//   // require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/include/function/survey_aggregate.inc';
//   return (survey_aggregate($sid) === false ? false : true);
// }
//
// function survey_generate_results($format, $sid) {
//   $output = array();
//   $id_to_csv_map = array(
//       '0',  // 0: unused
//       '1',  // 1: bool -> boolean
//       '1',  // 2: text -> string
//       '1',  // 3: essay -> string
//       '1',  // 4: radio -> string
//       '1',  // 5: check -> string
//       '1',  // 6: dropdn -> string
//       '0',  // 7: rating -> number
//       '0',  // 8: rate -> number
//       '1',  // 9: date -> string
//       '0'   // 10: numeric -> number
//   );
//   $types = array(0, 0, 1);
//   $columns = array('RESPONSE', 'SUBMITTED', 'USERNAME'); //Generate Columns:
//   switch ($format) {
//     case 'spss_csv':
//       // SPSS Output
//       $numcols = 3;
//       $columns2 = $columns;
//       $sql = "SELECT q.id, q.type_id FROM {$GLOBALS['ESPCONFIG']['question_table']} q
//       WHERE q.survey_ID = $sid AND q.deleted = 'N' and q.type_id < 50 ORDER BY position";
//       $result = execute_sql($sql);
//       $qcount = 0; // rating and multiple select (checkbox) count as one
//       while ( list ($qid, $type) = fetch_row($result)) {
//         $result->MoveNext();
//         if($type == '8' || $type == '5') { //rating question or multiple select (checkbox)
//         $sql = "SELECT c.id FROM ".$GLOBALS['ESPCONFIG']['question_table']." q, ".$GLOBALS['ESPCONFIG']['question_choice_table']." c WHERE q.id = $qid AND q.id = c.question_id ORDER BY c.id ASC";
//         $result2 = execute_sql($sql);
//         $ratecols=0;
//         $qcount++;
//         while( list($cid) = fetch_row($result2) ) {
//           $result2->MoveNext();
//           $ratecols++;
//           array_push($columns, array("Q".$qcount."_".$ratecols));
//           array_push($columns2, $qid."_".$cid);
//           array_push($types, $id_to_csv_map[$type]);
//         }
//         $numcols=$numcols+$ratecols;
//         db_close($result2);
//       } else {
//         $numcols++;
//         $qcount++;
//         array_push($columns, array("Q".$qcount));
//         array_push($columns2, $qid);
//         array_push($types, $id_to_csv_map[$type]);
//       }
//     }
//     db_close($result);
//
//     // Generate Data (This could get tricky)
//     $sql = "SELECT r.id,r.submitted,r.username FROM ".$GLOBALS['ESPCONFIG']['response_table']." r WHERE r.survey_id=$sid AND r.complete='Y' ORDER BY r.submitted";
//     $result = execute_sql($sql);
//
//     $columns[0] = array('RESPONSE');
//     $columns[1] = array('SUBMITTED');
//     $columns[2] = array('USERNAME');
//
//     while ($row = fetch_row($result)) {
//       $result->MoveNext();
//
//       //Get the Response
//       $response = response_select($sid, $row[0], 'type_id,name');
//       array_push($columns[0], $row[0]);
//       array_push($columns[1], $row[1]);
//       array_push($columns[2], $row[2]);
//
//       // Merge Repsonse into output array
//       for($i = 3; $i < $numcols; $i++) {
//         $key = preg_split("/_/",$columns2[$i]);
//           if(isset($response[$columns2[$i]]) || isset($response[$key[0]])) {
//             // This is a hack for multiple select,
//             // seems easier than modifying response_select
//             if (isset($response[$key[0]][0]) && is_array($response[$key[0]][0])) {
//               // check box (only question type that returns an array)
//               $match = 0;
//               for ($j = 0; $j < sizeof ($response[$key[0]]); $j++) {
//                 if ($response[$key[0]][$j][3] == 'other'.'_'.$key[1]) {
//                   array_push($columns[$i],"Other: ".$response[$key[0].'_'.$key[1]][2]);
//                   $match = 1;
//                 } else if ($response[$key[0]][$j][3] == $key[1]) {
//                   array_push($columns[$i],$response[$key[0]][$j][2]);
//                   $match = 1;
//                 }
//               }
//               if ($match == 0)
//                 array_push($columns[$i], " ");
//               } elseif (isset($response[$columns2[$i]][0]) && $response[$columns2[$i]][0] == 8) {
//                 // rating
//                 array_push($columns[$i], $response[$columns2[$i]][3]);
//               } elseif(isset($response[$columns2[$i]][0]) && ($response[$columns2[$i]][0]==4 || $response[$columns2[$i]][0]==6)){
//                 /* radio or dropdown*/
//                 if($response[$columns2[$i]][2] == "!other"){
//                   list(,$c)=preg_split("/_/", $response[$columns2[$i]][3]);
//                   array_push($columns[$i], "Other: ".$response[$columns2[$i].'_'.$c][2]);
//                 } else {
//                   array_push($columns[$i], $response[$columns2[$i]][2]);
//                 }
//               } else {
//                 array_push($columns[$i], $response[$columns2[$i]][2]);
//             }
//           } else {
//             array_push($columns[$i], " ");
//           }
//         }
//       }
//       db_close($result);
//
//       $output = array();
//       for($i = 0; $i < $numcols; $i++) {
//         $x = 0;
//         $temp_val = "";
//         foreach($columns[$i] as $key=>$value) {
//           if (!isset($output[$x])) { $output[$x] = array(); }
//           if (is_array($value)) { $temp_val = join(',', $value); }
//           else { $temp_val = $value; }
//           switch ($types[$i]) {
//             case 1: /* string */
//               /* Excel seems to allow "\n" inside a quoted string, but
//               * "\r\n" is used as a record separator and so "\r" may
//               * not occur within a cell. So if one would like to preserve
//               * new-lines in a response, remove the "\n" from the
//               * regex below.
//               */
//               $temp_val = preg_replace("/[\r\n\t]/", ' ', $temp_val);
//               $temp_val = preg_replace('/"/', '""', $temp_val);
//               $temp_val = '"'. $temp_val .'"';
//               /* fall through */
//               break;
//               }
//               $output[$x][$i] = $temp_val;
//               $x++;
//             }
//           }
//           return $output;
//           break;
//           //NOT IMPLEMENTED YET
//       break;
//
//       case 'xml':
//           //NOT IMPLEMENTED YET
//           break;
//
//       case 'csv_short_header':
//           //pass through
//       case 'tab':
//           $columns2=$columns;    //columns2 is used to relate columns to data returned from response_select()
//           $numcols = 3;    //total columns
//           $qcount=0;    //total questions (rating questions count as 1)
//           $sql = "SELECT q.id, q.type_id
//           FROM ".$GLOBALS['ESPCONFIG']['question_table']." q
//           WHERE q.survey_id = $sid AND
//           q.deleted = 'N' AND q.type_id < 50
//           ORDER BY position";
//           $result = execute_sql($sql);
//           while( list( $qid, $type ) = fetch_row($result) ) {
//               $result->MoveNext();
//               if($type == '8') { //rating question
//               $sql = "SELECT c.id FROM ".$GLOBALS['ESPCONFIG']['question_table']." q,
//               ".$GLOBALS['ESPCONFIG']['question_choice_table']." c WHERE q.id = $qid AND q.id = c.question_id
//               ORDER BY position";
//               $result2 = execute_sql($sql);
//               $ratecols=0;
//               $qcount++;
//               while( list($cid) = fetch_row($result2) ) {
//                   $result2->MoveNext();
//                   $ratecols++;
//                   array_push($columns, $qcount."_".$ratecols);
//                   array_push($columns2, $qid."_".$cid);
//                   array_push($types, $id_to_csv_map[$type]);
//               }
//               $numcols=$numcols+$ratecols;
//               db_close($result2);
//               } else {
//                   $numcols++;
//                   $qcount++;
//                   array_push($columns, $qcount);
//                   array_push($columns2, $qid);
//                   array_push($types, $id_to_csv_map[$type]);
//               }
//           }
//           array_push($output, $columns);
//           db_close($result);
//
//           //Generate data:
//           $sql = "SELECT r.id,r.submitted,r.username FROM ".$GLOBALS['ESPCONFIG']['response_table']." r
//           WHERE r.survey_id=$sid AND r.complete='Y'
//           ORDER BY r.submitted";
//           $result = execute_sql($sql);
//           while($row = fetch_row($result)) {
//               $result->MoveNext();
//               // get the response
//               $response = response_select($sid, $row[0], 'type_id,name');
//               $arr = array();
//               array_push($arr, $row[0]);
//               array_push($arr, $row[1]);
//               array_push($arr, $row[2]);
//               // merge it
//               for($i = 3; $i < $numcols; $i++) {
//                 if(isset($response[$columns2[$i]])){
//                   if(isset($response[$columns2[$i]][0]) && is_array($response[$columns2[$i]][0])){
//                     /* check box */
//                     $tempresult=array();
//                     foreach ($response[$columns2[$i]] as $checkboxdata) {
//                       if($checkboxdata[2]=="!other"){
//                         list(,$c)=preg_split("/_/", $checkboxdata[3]);
//                         array_push($tempresult,"Other: ".$response[$columns2[$i].'_'.$c][2]);
//                       }
//                       else { array_push($tempresult,$checkboxdata[2]); }
//                     }
//                     $thisresult=implode(",",$tempresult);
//                   }
//                   elseif (isset($response[$columns2[$i]][0]) && $response[$columns2[$i]][0]==8 ){
//                     /* rating */
//                     $thisresult=$response[$columns2[$i]][3]; //db has these as 0 to N-1, lets add 1
//                   }
//                   elseif(isset($response[$columns2[$i]][0]) && ($response[$columns2[$i]][0]==4 || $response[$columns2[$i]][0]=6)){
//                     /* radio or dropdown*/
//                     if($response[$columns2[$i]][2]=="!other"){
//                       list(,$c)=preg_split("/_/", $response[$columns2[$i]][3]);
//                       $thisresult="Other: ".$response[$columns2[$i].'_'.$c][2];
//                     }
//                     else { $thisresult=$response[$columns2[$i]][2]; }
//                   }
//                   else { $thisresult=$response[$columns2[$i]][3]; }
//                 }
//                 else { $thisresult=""; }
//                 switch ($types[$i]) {
//                   case 2: /* special */
//                     break;
//                   case 1: /* string */
//                     if (isset($response[$columns2[$i]])) {
//                       /* Excel seems to allow "\n" inside a quoted string, but
//                       * "\r\n" is used as a record separator and so "\r" may
//                       * not occur within a cell. So if one would like to preserve
//                       * new-lines in a response, remove the "\n" from the
//                       * regex below.
//                       */
//                       $thisresult = preg_replace("/[\r\n\t]/", ' ', $thisresult);
//                       $thisresult = preg_replace('/"/', '""', $thisresult);
//                       $thisresult = '"'. $thisresult .'"';
//                     }
//                       /* fall through */
//                   case 0: /* number */
//                     if (isset($response[$columns2[$i]])) { array_push($arr, $thisresult); }
//                     else { array_push($arr, ''); }
//                     break;
//                   }
//                 }
//                 array_push($output, $arr);
//               }
//               db_close($result);
//               break;
//
//             default:
//               //csv_full_header
//               $numcols = 3;
//               $sql = "SELECT q.id, q.name, q.type_id FROM ".$GLOBALS['ESPCONFIG']['question_table']." q WHERE q.survey_id = $sid AND q.deleted = 'N' AND q.type_id < 50 ORDER BY position";
//               $result = execute_sql($sql);
//               $numcols += record_count($result);
//               while( list( $qid, $col, $type ) = fetch_row($result) ) {
//                 $result->MoveNext();
//                 if ($type == 8) {
//                   /* rate */
//                   $sql = "SELECT ".$GLOBALS['ESPCONFIG']['adodb_conn']->Concat("q.name", "' '", "c.content").", c.id FROM ".$GLOBALS['ESPCONFIG']['question_table']." q, ".$GLOBALS['ESPCONFIG']['question_choice_table']." c WHERE q.id = $qid AND q.id = c.question_id";
//                   $result2 = execute_sql($sql);
//                   $numcols += record_count($result2) - 1;
//                   while( list($col, $rid) = fetch_row($result2) ) {
//                     $result2->MoveNext();
//                     $str1 = $col;
//                     do {
//                         $str2 = $str1;
//                         $str1 = preg_replace("/(^| )(what|which|why|how|who|where|how|is|are|were|the|a|it|of|do|you|your|please|enter)[ ?]/i", " ", $str2);
//                     } while ($str1 != $str2);
//                     $col = $str1;
//                     $col = trim(strtoupper(preg_replace("/[^A-Z0-9]+/", " ", $col)));
//                       $col = preg_replace('/ +/','_',$col);
//                       array_push($columns, array($qid."_".$rid=>$col));
//                       array_push($types, $id_to_csv_map[$type]);
//                     }
//                     db_close($result2);
//                 } else {
//                   array_push($columns, array($qid=>$col));
//                   array_push($types, $id_to_csv_map[$type]);
//                 }
//             }
//             db_close($result);
//             $num = 0;
//
//           $sql = "SELECT r.id,r.submitted,r.username FROM ".$GLOBALS['ESPCONFIG']['response_table']." r WHERE r.survey_id=$sid AND r.complete='Y' ORDER BY r.submitted";
//           $result = execute_sql($sql);
//           $y = 0;
//           if (record_count($result) == 0) {
//             $columns[0] = array('RESPONSE');
//             $columns[1] = array('SUBMITTED');
//             $columns[2] = array('USERNAME');
//           }
//           while($row = fetch_row($result)) {
//             $result->MoveNext();
//             if ($y == 0) {
//               $columns[0] = array($row[0]=>'RESPONSE');
//               $columns[1] = array($row[0]=>'SUBMITTED');
//               $columns[2] = array($row[0]=>'USERNAME');
//               $y = 1;
//             }
//             // get the response
//             $response = response_select_name($sid, $row[0]);
//             // merge it
//             for($i = 0; $i < $numcols; $i++) {
//               $match = 0;
//               foreach ($response as $key=>$value) {
//                 if ($key === key($columns[$i])){
//                   $match = 1;
//                   array_push($columns[$i], $value[key($value)]);
//                 }
//               }
//               if (($match == 0) and ($i > 2)) { array_push($columns[$i], ""); }
//               if ($i <= 2) { array_push($columns[$i],$row[$i]); }
//             }
//           }
//           db_close($result);
//           $output = array();
//           for($i = 0; $i < $numcols; $i++) {
//             $x = 0;
//             $temp_val = "";
//             foreach($columns[$i] as $key=>$value) {
//               if (!isset($output[$x])) { $output[$x] = array(); }
//               if (is_array($value)) { $temp_val = join(',', $value); }
//               else { $temp_val = $value; }
//               switch ($types[$i]) {
//                 case 1: /* string */
//                   /* Excel seems to allow "\n" inside a quoted string, but
//                   * "\r\n" is used as a record separator and so "\r" may
//                   * not occur within a cell. So if one would like to preserve
//                   * new-lines in a response, remove the "\n" from the
//                   * regex below.
//                   */
//                   $temp_val = preg_replace("/[\r\n\t]/", ' ', $temp_val);
//                   $temp_val = preg_replace('/"/', '""', $temp_val);
//                   $temp_val = '"'. $temp_val .'"';
//                   /* fall through */
//                   break;
//               }
//               $output[$x][$i] = $temp_val;
//               $x++;
//             }
//           }
//         }
//   return $output;
// }
//
// // Exports the results of a survey to a file. Returns true on success.
// function survey_export_results($type, $sid, $filename) {
//   $umask = umask(0077);
//   $fh = fopen($filename, 'w');
//   umask($umask);
//   if (!$fh) { return 0; }
//   switch ($type) {
//     case 'spss_csv':
//       $data = survey_generate_results($type, $sid);
//       foreach ($data as $row) { fputs($fh, implode(',', $row) . "\r\n"); } break;
//     case 'xml':
//       //Not fully implemented yet
//       $data = survey_generate_results($type, $sid); break;
//     case 'tab':
//       $data = survey_generate_results($type, $sid);
//       foreach ($data as $row) { fputs($fh, implode("\t", $row) . "\r\n"); } break;
//     default: //csv_full_header, csv_short_header
//       $data = survey_generate_results($type, $sid);
//       foreach ($data as $row) { fputs($fh, implode(',', $row) . "\r\n"); }
//   }
//   fflush($fh);
//   fclose($fh);
//   return 1;
// }
//
// if(empty($GLOBALS['ESPCONFIG']['DEBUG_MERGE'])) { $GLOBALS['ESPCONFIG']['DEBUG_MERGE'] = $GLOBALS['ESPCONFIG']['DEBUG']; }
//
// function survey_merge($sids, $precision = 1, $showTotals = 1) {
//   if(!is_array($sids)) { $errmsg = _('Invalid argument.') ." [ ${sids} ]"; return($errmsg); }
//   $num = count($sids);
//   if ($num < 1) { $errmsg = _('Invalid argument.') .' [ '. join(',',$sids) .' ]'; return($errmsg); }
//   if (empty($precision)) { $precision  = 1; }
//   if (empty($showTotals)) { $showTotals = 1; }
//   $sidstr = array_to_insql($sids);
//   $response_table = esp_type_response_table();
//   $sid = $sids[0];
//   $sql = "SELECT * FROM ".$GLOBALS['ESPCONFIG']['survey_table']." WHERE id=${sid}";
//   if ($GLOBALS['ESPCONFIG']['DEBUG_MERGE'])  echo("<!-- \$sql = ${sql} -->\n");
//   if (!($result = execute_sql($sql,"", ADODB_FETCH_ASSOC))) {
//     $errmsg = 'Error opening survey.' ." [ ID:${sid} R:" . record_count($result) ."] [ ".ErrorMsg()."]";
//     return($errmsg);
//   }
//   $survey = fetch_row($result);
//   db_close($result);
//
//   // find total number of survey responses
//   $sql = "SELECT R.id FROM ".$GLOBALS['ESPCONFIG']['response_table']." R WHERE R.survey_id ${sidstr} AND R.complete='Y'";
//   if ($GLOBALS['ESPCONFIG']['DEBUG_MERGE'])  echo("<!-- \$sql = ${sql} -->\n");
//   if (!($result = execute_sql($sql))) {
//     $errmsg = 'Error opening surveys.' ." [ ID: ${sidstr} ] [ ".ErrorMsg()."]";
//     return($errmsg);
//   }
//   $total = record_count($result);
//   if($total < 1) {
//     $errmsg = 'Error opening surveys.' ." ". 'No responses found.' ." [ ID: ${sidstr} ] [ ". _('TOTAL') .": ${total} ]";
//     db_close($result);
//     return($errmsg);
//   }
//   // and the desired response id's
//   $rids = array();
//   while($row = fetch_row($result)) { $result->MoveNext(); array_push($rids, $row[0]); }
//   db_close($result);
//   $ridstr = array_to_insql($rids);
//
//   // load survey questions
//   for($i=0; $i<$num; $i++) {
//     $sid = $sids[$i];
//     $sql = "SELECT * FROM ".$GLOBALS['ESPCONFIG']['question_table']." WHERE survey_id=${sid} AND deleted='N' ORDER BY position,id";
//     if ($GLOBALS['ESPCONFIG']['DEBUG_MERGE'])  echo("<!-- \$sql = ${sql} -->\n");
//     $questions[$i] = execute_sql($sql,"",ADODB_FETCH_ASSOC);
//     if (!$questions[$i]) {
//       $errmsg = 'Error opening surveys.' .' '. 'No questions found.' . " [ ID:${sid} ] [ ".ErrorMsg()."]";
//       return($errmsg);
//     }
//   }
// ?>
// <h2><?php echo($survey["title"]); ?></h2>
// <h3><?php echo($survey["subtitle"]); ?></h3>
// <blockquote><?php echo($survey["info"]); ?></blockquote>
// <table border="0" cellspacing="0" cellpadding="0" width="100%">
// <?php
//   $q = 0; // question number counter
//   while(1) {
//     $qids = array(); // get next question from each of SIDs (lock-step)
//     for ($i=0; $i<$num; $i++) {
//       if (!($question[$i] = fetch_row($questions[$i]))) {
//         for ($j=0; $j<$num; $j++) { db_close($questions[$j]); }
//         echo("</table>\n");
//         return;
//       }
//       $questions[$i]->MoveNext();
//       if ($GLOBALS['ESPCONFIG']['DEBUG_MERGE']) { echo("<!-- \$i = $i; \$question[\$i]['id'] = ".$question[$i]['id']." -->\n"); }
//       array_push($qids, $question[$i]['id']);
//     }
//     $qidstr = array_to_insql($qids);
//     if ($GLOBALS['ESPCONFIG']['DEBUG_MERGE']) { echo("<!-- \$qidstr = $qidstr -->\n"); }
//     // now -- we assume the surveys are identical, and there is a
//     // one-to-one relation between the questions of each
//     // we take the first element of the SIDs array to be the "master"
//     $tid = $question[0]['type_id'];
//     $table = $response_table[$tid];
//     if ($GLOBALS['ESPCONFIG']['DEBUG_MERGE']) { echo("<!-- \$table = $table -->\n"); }
//     if ($tid == 99) { echo("<tr><td><hr></td></tr>\n"); continue; }
//     if ($tid == 100) { echo("<tr><td>". $question[0]['content'] ."</td></tr>\n"); continue; }
//     ++$q;
//     $bg = "";
//     if($bg != '#eeeeee') { $bg = '#eeeeee'; } else { $bg = '#ffffff'; }
// ?>
//   <tr bgcolor="<?php echo($bg); ?>">
//      <td>
//       <a name="Q<?php echo($q); ?>"><?php echo($q); ?>.</a>
//       <?php echo($question[0]['content']); ?>
//       <blockquote>
// <?php
//     $counts = array();
//
//     switch($table) {
//     // -------------------------------- response_bool --------------------------------
//     case 'response_bool':
//       $sql = "SELECT A.choice_id, COUNT(A.response_id)
//             FROM ".$GLOBALS['ESPCONFIG'][$table.'_table']." A
//            WHERE A.question_id ${qidstr} AND
//                A.response_id ${ridstr}
//            GROUP BY A.choice_id";
//       if($GLOBALS['ESPCONFIG']['DEBUG_MERGE'])  echo("<!-- \$sql = ${sql} -->\n");
//       $result = execute_sql($sql);
//       while(list($text,$count) = fetch_row($result)) {
//                 $result->MoveNext();
//         $counts[$text] = $count;
//       }
//       db_close($result);
//
//       if(empty($question[0]['result_id']))
//         $question[0]['result_id'] = 1;  // default to percentages for yes/no
//
//       break;
//
//     // -------------------------------- response_single ----------------------------------
//     // -------------------------------- response_multiple --------------------------------
//     case 'response_multiple':
//       $showTotals = 0;
//     case 'response_single':
//       for($i=0; $i<$num; $i++) {
//         $sid = $sids[$i];
//         $qid = $question[$i]['id'];
//         $sql = "SELECT id FROM ".$GLOBALS['ESPCONFIG']['question_choice_table']." WHERE question_id=${qid} AND content NOT LIKE '!other%' ORDER BY id";
//         if($GLOBALS['ESPCONFIG']['DEBUG_MERGE']) { echo("<!-- \$sql = ${sql} -->\n"); }
//         $result = execute_sql($sql);
//         $cids[$i] = array();
//         while(list($cid) = fetch_row($result)) {
//                     $result->MoveNext();
//           array_push($cids[$i],$cid);
//         }
//         db_close($result);
//       }
//       $content = array();
//       foreach($cids[0] as $cid) {
//         $sql = "SELECT content FROM ".$GLOBALS['ESPCONFIG']['question_choice_table']." WHERE id=${cid}";
//         if($GLOBALS['ESPCONFIG']['DEBUG_MERGE']) { echo("<!-- \$sql = ${sql} -->\n"); }
//         $result = get_one($sql);
//         array_push($content, $result);
//       }
//       $cnum = count($content);
//       for($j=0; $j<$cnum; $j++) {
//         $mycids = array();
//         for($i=0; $i<$num; $i++) { array_push($mycids, $cids[$i][$j]); }
//         $mycidstr = array_to_insql($mycids);
//         $sql = "SELECT COUNT(*) FROM ".$GLOBALS['ESPCONFIG'][$table.'_table']." A WHERE A.choice_id ${mycidstr} AND A.response_id ${ridstr}";
//         if($GLOBALS['ESPCONFIG']['DEBUG_MERGE']) { echo("<!-- \$sql = ${sql} -->\n"); }
//         $result=get_one($sql);
//         $counts[$content[$j]] = $result;
//       }
//
//       // handle 'other...'
//       for($i=0; $i<$num; $i++) {
//         $sid = $sids[$i];
//         $qid = $question[$i]['id'];
//         $sql = "SELECT id FROM ".$GLOBALS['ESPCONFIG']['question_choice_table']." WHERE question_id ${qidstr} AND content LIKE '!other%' ORDER BY id";
//         if($GLOBALS['ESPCONFIG']['DEBUG_MERGE']) { echo("<!-- \$sql = ${sql} -->\n"); }
//         $result = execute_sql($sql);
//         $cids[$i] = array();
//         while(list($cid) = fetch_row($result)) {
//                     $result->MoveNext();
//           array_push($cids[$i],$cid);
//         }
//         db_close($result);
//       }
//       $content = array();
//       foreach($cids[0] as $cid) {
//         $sql = "SELECT content FROM ".$GLOBALS['ESPCONFIG']['question_choice_table']." WHERE id=${cid}";
//         if($GLOBALS['ESPCONFIG']['DEBUG_MERGE']) { echo("<!-- \$sql = ${sql} -->\n"); }
//         $result=get_one($sql);
//         $text = preg_replace("/!other=?/", "", $result);
//         if(!empty($text))
//           $text .= ': ';
//         array_push($content, $text);
//       }
//       $cnum = count($content);
//       for($j=0; $j<$cnum; $j++) {
//         $mycids = array();
//         for($i=0; $i<$num; $i++) {
//           array_push($mycids, $cids[$i][$j]);
//         }
//         $mycidstr = array_to_insql($mycids);
//
//         $sql = "SELECT A.response, COUNT(A.response_id) FROM ".$GLOBALS['ESPCONFIG']['response_other_table']." A WHERE A.choice_id ${mycidstr} AND A.response_id ${ridstr} GROUP BY A.response";
//         if($GLOBALS['ESPCONFIG']['DEBUG_MERGE']) { echo("<!-- \$sql = ${sql} -->\n"); }
//         $result=execute_sql($sql);
//         while(list($response,$count) = fetch_row($result)) {
//                     $result->MoveNext();
//           if(!empty($response)) {
//             $text = $content[$j] . htmlspecialchars($response);
//             $counts[$text] = $count;
//           }
//         }
//         db_close($result);
//       }
//
//       if(empty($question[0]['result_id']))
//         $question[0]['result_id'] = 1;  // default to percentages
//
//       break;
//
//     // -------------------------------- response_text --------------------------------
//     case 'response_text':
//       $sql = "SELECT A.response, COUNT(A.response_id) FROM ".$GLOBALS['ESPCONFIG'][$table.'_table']." A WHERE A.question_id ${qidstr} AND A.response_id ${ridstr} GROUP BY A.response";
//       if($GLOBALS['ESPCONFIG']['DEBUG_MERGE']) { echo("<!-- \$sql = ${sql} -->\n"); }
//       $result = execute_sql($sql);
//       while(list($response, $count) = fetch_row($result)) {
//                 $result->MoveNext();
//         if(!empty($response))
//           $counts[htmlspecialchars($response)] = $count;
//       }
//       db_close($result);
//
//       $question[0]['result_id'] = 4;  // force "list" type response for text fields
//
//       break;
//
//     // -------------------------------- response_rank --------------------------------
//     case 'response_rank':
//       if($tid == 8) { //Rank
//         for($i=0; $i<$num; $i++) {
//           $sid = $sids[$i];
//           $qid = $question[$i]['id'];
//           $sql = "SELECT id FROM ".$GLOBALS['ESPCONFIG']['question_choice_table']." WHERE question_id ${qidstr} ORDER BY id";
//           if($GLOBALS['ESPCONFIG']['DEBUG_MERGE']) { echo("<!-- \$sql = ${sql} -->\n"); }
//           $result = execute_sql($sql);
//           $cids[$i] = array();
//           while(list($cid) = fetch_row($result)) {
//                         $result->MoveNext();
//             array_push($cids[$i],$cid);
//           }
//           db_close($result);
//         }
//         $content = array();
//         foreach($cids[0] as $cid) {
//           $sql = "SELECT content FROM ".$GLOBALS['ESPCONFIG']['question_choice_table']." WHERE id=${cid}";
//           if($GLOBALS['ESPCONFIG']['DEBUG_MERGE']) { echo("<!-- \$sql = ${sql} -->\n"); }
//           $result=get_one($sql);
//           array_push($content, $result);
//         }
//         $cnum = count($content);
//         for($j=0; $j<$cnum; $j++) {
//           $mycids = array();
//           for($i=0; $i<$num; $i++) {
//             array_push($mycids, $cids[$i][$j]);
//           }
//           $mycidstr = array_to_insql($mycids);
//           $sql = "SELECT AVG(A.rank) FROM ".$GLOBALS['ESPCONFIG'][$table.'_table']." A WHERE A.choice_id ${mycidstr} AND A.response_id ${ridstr} AND A.rank>0";
//           if($GLOBALS['ESPCONFIG']['DEBUG_MERGE']) { echo("<!-- \$sql = ${sql} -->\n"); }
//           $result=get_one($sql);
//           $counts[$content[$j]] = $result;
//         }
//
//         $question[0]['result_id'] = 99;  // force to rank
//       } else {
//         // deprecated ... I am not going to write this
//         // code. If you need it email me or write it yourself.
//       }
//       break;
//     }
//
//     // ---------------------------------------------------------------------------
//     switch($question[0]['result_id']) {
//       case '1':  // Percentages
//         mkrespercent($counts,$total,$precision,$showTotals); break;
//       case '2':  // Rank
//         mkresrank($counts,$total,$precision,$showTotals); break;
//       case '3':  // Count
//         mkrescount($counts,$total,$precision,$showTotals); break;
//       case '4':  // List
//         mkreslist($counts,$total,$precision,$showTotals); break;
//       case '99':  // Average
//         mkresavg($counts,$total,$precision,$showTotals,0); break;
//     } // end switch
// ?>
//       </blockquote>
//     </td>
//   </tr>
// <?php  } // end while -- execution should never pass this point ?>
// </table>
// <?php
//   return;
// }
//
// //   Purges all traces of survey(s) from the database. Returns void.
// function survey_purge($sids) {
//   if (is_int($sids)) { $sidstr = '='.$sids; }
//   else if (is_string($sids)) { $sids = preg_split("/ /",$sids); }
//   if (is_array($sids)) { $sidstr = array_to_insql($sids); }
//   // make a list of question IDs
//   $sql = "SELECT id FROM ".$GLOBALS['ESPCONFIG']['question_table']." WHERE survey_id ${sidstr}";
//   $result = execute_sql($sql);
//   $qids = array();
//   while(list($qid) = fetch_row($result)) { $result->MoveNext(); array_push($qids, $qid); }
//   db_close($result);
//   $qidstr = array_to_insql($qids);
//
//   // work from the bottom up...
//   // start with the survey results
//   $tables = array('response_bool','response_date','response_multiple','response_other','response_rank','response_single','response_text');
//   foreach($tables as $table) {
//     $sql = "DELETE FROM ".$GLOBALS['ESPCONFIG'][$table.'_table']." WHERE question_id ${qidstr}";
//     $result = execute_sql($sql);
//   }
//   // then responses
//   $sql = "DELETE FROM ".$GLOBALS['ESPCONFIG']['response_table']." WHERE survey_id ${sidstr}";
//   execute_sql($sql);
//
//   // then question choices
//   $sql = "DELETE FROM ".$GLOBALS['ESPCONFIG']['question_choice_table']." WHERE question_id ${qidstr}";
//   execute_sql($sql);
//
//   // then questions
//   $sql = "DELETE FROM ".$GLOBALS['ESPCONFIG']['question_table']." WHERE survey_id ${sidstr}";
//   execute_sql($sql);
//
//   // then conditions
//   $sql = "DELETE FROM ".$GLOBALS['ESPCONFIG']['condition_table']." WHERE survey_id ${sidstr}";
//   execute_sql($sql);
//
//   // and finally the survey(s)
//   $sql = "DELETE FROM ".$GLOBALS['ESPCONFIG']['survey_table']." WHERE id ${sidstr}";
//   execute_sql($sql);
//
//   // erase the access credentials
//   $sql = "DELETE FROM ".$GLOBALS['ESPCONFIG']['access_table']." WHERE survey_id ${sidstr}";
//   execute_sql($sql);
//
//   // now, erase the accumulated statistics
//   if (is_int($sids)) { $sids = array ($sids); }
//   else if (is_string($sids)) { $sids = explode(' ', $sids); }
//
//   if (is_array($sids)) {
//     //esp_require_once('/lib/espsurveystat');
//     require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/include/lib/espsurveystat.inc';
//     foreach ($sids as $sid) { survey_stat_purge($sid); }
//   }
//   return;
// }
//
// //   proto bool survey_render(int survey_id, int section, int resonse_id, string message)
// //   Reads current form variables from $_POST. Builds HTML for the survey (prefixed w/ message).
//
// function survey_render($sid, $section = 1, $rid=0, $message = '') {
//   global $preview;
//   @reset($_POST);
//   if(empty($section)) { $section = 1; }
//
//   $sql = "SELECT * FROM ".$GLOBALS['ESPCONFIG']['survey_table']." WHERE id=${sid}";
//   $result = execute_sql($sql,"",ADODB_FETCH_ASSOC);
//   if (record_count($result) != 1) { return(false); }
//   $survey = fetch_row($result);
//   db_close($result);
//   $sections = survey_get_sections($sid);
//   $num_sections = count($sections);
//   if ($section-- > $num_sections) { return(false); } // invalid section
//   $section_questions = survey_get_section_questions($sid);
//   // load survey questions
//   $sec_sql = array_to_insql($sections[$section]);
//   $sql = "SELECT * FROM ".$GLOBALS['ESPCONFIG']['question_table']." WHERE id $sec_sql ORDER BY position,id";
//   $questions_result = execute_sql($sql,"",ADODB_FETCH_ASSOC);
//   if (record_count($questions_result) < 1) { return(false); }
//   // find out what question number we are on $i
//   $i = 0;
//   for ($j=0; $j<$section; $j++) { $i += count($section_questions[$j]); }
//   echo "<h2>Project ".$survey["title"]." ";
//   if ($survey["subtitle_th"]) { echo "<small>(".$survey["subtitle_th"].")</small>"; }
//   else { echo "<small>(".$survey["subtitle"].")</small>"; }
//   echo "</h2>\n";
//   echo "<br>\n\n";
//   echo "<div class=\"well showprojectdetail\">\n";
//   if ($survey["info_th"]) { echo "<h4>".nl2br($survey["info_th"])."</h4>\n\n"; }
//   else { echo "<h4>".nl2br($survey["info"])."</h4>\n\n"; }
//   echo "</div>\n";
//   if (!$preview) {
//     echo "<span class=\"ubuntu\"><small>PROGRESS:</small></span>\n";
//     echo progressbar($_SESSION['sec'], $num_sections);
//     echo "\n\n";
//   }
//   echo "<div class=\"row\">\n";
//   $questions_shown=0;
//   while($question = fetch_row($questions_result)) {
//     $questions_result->MoveNext();
//     $i++;
//     // process each question
//     $qid = &$question['id'];
//     $tid = &$question['type_id'];
//     if ($tid == 100) { $i--; }
//     if (question_conditioncheck($sid,$qid,$rid)) { $questions_shown = 1; question_render($question,$i,$survey['auto_num']); }
//     elseif (isset($_POST['tab']) && ($_POST['tab']=="preview")) { $questions_shown = 1; question_render($question,$i,$survey['auto_num']); }
//   }
//   if ($questions_shown == 0) { echo "<p>No questions in this section.</p>\n"; echo "<br><br>\n\n"; }
//   echo "</div>\n\n";
//   return;
// }

// function survey_report($sid, $details = 0, $format = '') {
//   if (empty($sid)) return;
//   $bg = '';
//   $has_choices = array();
//   $response_table = array();
//   $sql = 'SELECT id,has_choices,response_table FROM '.$GLOBALS['ESPCONFIG']['question_type_table'].' ORDER BY id';
//   if (!($result = execute_sql($sql))) { $errmsg = 'Error system table corrupt.' ." [ ". 'Table' .": question_type ]";
//     return($errmsg);
//   }
//   while($row = fetch_row($result)) {
//     $result->MoveNext();
//     $has_choices[$row[0]] = $row[1];
//     $response_table[$row[0]] = $row[2];
//   }
//   db_close($result);
//
//   // load survey title (and other globals)
//   $sql = "SELECT * FROM ".$GLOBALS['ESPCONFIG']['survey_table']." WHERE id=$sid";
//   if(!($result = execute_sql($sql,"",ADODB_FETCH_ASSOC))) {
//     $errmsg = 'Error opening survey.' ." [ ID:${sid} R:" . record_count($result) ."]";
//     return($errmsg);
//   }
//   $survey = fetch_row($result);
//   db_close($result);
//
//   // load survey questions
//   $sql = "SELECT * FROM ".$GLOBALS['ESPCONFIG']['question_table']." WHERE survey_id=$sid AND deleted='N' ORDER BY position";
//   if(!($questions_result = execute_sql($sql,"",ADODB_FETCH_ASSOC))) {
//     $errmsg = 'Error opening survey.' .' '. 'No questions found.' ." [ ID:${sid} ]";
//     return($errmsg);
//   }
// ?>
// <h2><?php echo('Report for' .': '. $survey["title"] .' ['. _('ID') .': '. $survey['id'] .']'); ?></h2>
// <h3><?php echo($survey["subtitle"]); ?></h3>
// <blockquote><?php echo($survey["info"]); ?></blockquote>
// <table border="0" cellspacing="2" cellpadding="0" width="100%">
// <tr>
//   <th align="left"><?php echo('#'); ?></th>
//   <th align="left"><?php echo('ID'); ?></th>
//   <th align="left"><?php echo("Req'd"); ?></th>
//   <th align="left"><?php echo('Public'); ?></th>
//   <th align="center" colspan="2"><?php echo('Content'); ?></th>
// </tr>
// <?php
//   $i = 0;
//   while($question = fetch_row($questions_result)) {
//     $questions_result->MoveNext();
//     // process each question
//     $qid = &$question['id'];
//     $tid = &$question['type_id'];
//     $reqd = ($question['required'] == 'Y') ? 'Yes' : 'No';
//     $publ  = ($question['public'] == 'Y') ? 'Yes' : 'No';
//     $table = &$response_table[$tid];
//     if ($tid == 99) { echo("<tr><td colspan=\"6\"><hr></td></tr>\n"); continue; }
//     if($bg != '#ffffff') { $bg = '#ffffff'; } else { $bg = '#eeeeee'; }
// ?>
// <tr bgcolor="<?php echo($bg); ?>">
//   <td align="left"><?php if ($tid < 50) echo(++$i); ?></td>
//   <th align="left"><?php echo($qid); ?></th>
//   <td align="left"><?php echo($reqd); ?></td>
//   <td align="left"><?php echo($publ); ?></td>
//   <td colspan="2"><?php echo($question["content"]); ?></td>
// </tr>
// <?php
//     if ($has_choices[$tid]) {
//       $sql = "SELECT * FROM ".$GLOBALS['ESPCONFIG']['question_choice_table']." WHERE question_id = $qid ORDER BY id";
//       $choices_result = execute_sql($sql,"",ADODB_FETCH_ASSOC);
//       while($choice = fetch_row($choices_result)) {
//         $choices_result->MoveNext();
// ?>
// <tr bgcolor="<?php echo($bg); ?>"><th align="left"></th>
//   <td></td>
//   <td>&nbsp;</td>
//   <td>&nbsp;</td>
//   <th align="right"><?php echo($choice['id']); ?></th>
//   <td><?php echo($choice['content']); ?></td>
// </tr>
// <?php
//       }
//       db_close($choices_result);
//     } // end if has_choices
//   } // end while
//   db_close($questions_result);
// ?>
// </table>
// <?php
//   return;
// }
//
// if(empty($GLOBALS['ESPCONFIG']['DEBUG_RESULTS'])) { $GLOBALS['ESPCONFIG']['DEBUG_RESULTS'] = $GLOBALS['ESPCONFIG']['DEBUG']; }
//
// function survey_results_navbar($sid, $curr_rid) {
//   $sql = "SELECT R.id FROM ".$GLOBALS['ESPCONFIG']['response_table']." R WHERE R.survey_id='${sid}' AND R.complete = 'Y' ORDER BY R.id";
//   $result = execute_sql($sql);
//   $total = record_count($result);
//   if ($total < 1) { return; }
//   $rids = array();
//   $i = 0;
//   $curr_pos = -1;
//   while ($row = fetch_row($result)) {
//     $result->MoveNext();
//     array_push($rids, $row[0]);
//     if ($row[0] == $curr_rid)
//       $curr_pos = $i;
//     $i++;
//   }
//   db_close($result);
//
//   $prev_rid = ($curr_pos > 0) ? $rids[$curr_pos - 1] : null;
//   $next_rid = ($curr_pos < $total - 1) ? $rids[$curr_pos + 1] : null;
//   $rows_per_page = 1;
//   $pages = ceil($total / $rows_per_page);
//   $url = $GLOBALS['ESPCONFIG']['ME'] . "?where=results&sid=$sid";
//   $mlink = create_function('$i,$r', 'return "<a href=\"'.$url.'&rid=$r\">$i</a>";');
//   $linkarr = array();
//   $display_pos = 1;
//   if ($prev_rid != null) { array_push($linkarr, "<a href=\"$url&rid=$prev_rid\">".'Previous'.'</a>'); }
//   for ($i = 0; $i < $curr_pos; $i++) {
//     array_push($linkarr, "<a href=\"$url&rid=".$rids[$i]."\">$display_pos</a>");
//     $display_pos++;
//   }
//   array_push($linkarr, "<a href=\"$url&rid=$curr_rid\"><b>$display_pos</b></a>");
//   for (++$i; $i < $total; $i++) {
//     $display_pos++;
//     array_push($linkarr, "<a href=\"$url&rid=".$rids[$i]."\">$display_pos</a>");
//   }
//   if ($next_rid != null) { array_push($linkarr, "<a href=\"$url&rid=$next_rid\">"._('Next').'</a>'); }
//
//   ?>
//     <h2><?php echo 'Navigate Individual Respondent Submissions'; ?></h2>
//     <br>
//     <?php echo implode(' | ', $linkarr); ?>
//     <br>
// <?php
// }
//
// function survey_results($sid, $precision = 1, $showTotals = 1, $qid = '', $cids = '', $rid = '', $guicross='') {
//   $bg = '';
//   if (empty($precision)) { $precision  = 1; }
//   if ($showTotals === '') { $showTotals = 1; }
//   if (is_int($cids)) { $cids = array($cids); }
//   if (is_string($cids)) { $cids = preg_split("/ /",$cids); } // turn space seperated list into array
//
//   // set up things differently for cross analysis
//   $cross = !empty($qid);
//   if ($cross) {
//     if(is_array($cids) && count($cids)>0) { $cidstr = array_to_insql($cids); }
//     else { $cidstr = ''; }
//   }
//
//   // build associative array holding whether each question
//   // type has answer choices or not and the table the answers are in
//   $has_choices = array();
//   $response_table = array();
//   $sql = 'SELECT id,has_choices,response_table FROM '.$GLOBALS['ESPCONFIG']['question_type_table'].' ORDER BY id';
//   if (!($result = execute_sql($sql))) {
//     $errmsg = sprintf('%s [ %s: question_type ]', 'Error system table corrupt.', 'Table');
//     return($errmsg);
//   }
//   while($row = fetch_row($result)) {
//     $result->MoveNext();
//     $has_choices[$row[0]]=$row[1];
//     $response_table[$row[0]]=$row[2];
//   }
//   db_close($result);
//
//   // load survey title (and other globals)
//   $sql = "SELECT * FROM ".$GLOBALS['ESPCONFIG']['survey_table']." WHERE id='${sid}'";
//   if (!($result = execute_sql($sql,"",ADODB_FETCH_ASSOC))) {
//     $errmsg = _('Error opening survey.') ." [ ID:${sid} R:" . record_count($result) ."]";
//     return($errmsg);
//   }
//   $survey = fetch_row($result);
//   db_close($result);
//
//   // load survey questions
//   $sql = "SELECT * FROM ".$GLOBALS['ESPCONFIG']['question_table']." WHERE survey_id='${sid}' AND deleted='N' ORDER BY position,id";
//   if (!($questions_result = execute_sql($sql,"",ADODB_FETCH_ASSOC))) {
//     $errmsg = 'Error opening survey.' .' '. 'No questions found.' ." [ ID:${sid} ]";
//     return($errmsg);
//   }
//   // find out more about the question we are cross analyzing on (if any)
//   if ($cross) {
//     $sql = "SELECT type_id FROM ".$GLOBALS['ESPCONFIG']['question_table']." WHERE id=${qid}";
//     $result = execute_sql($sql,"",ADODB_FETCH_ASSOC);
//     while($content = fetch_row($result)) {
//       $result->MoveNext();
//       $crossTable = $response_table[$content['type_id']];
//       $q_content = $content['type_id'];
//     }
//     db_close($result);
//     if (!in_array($crossTable, array('response_single','response_bool','response_multiple'))) {
//       $errmsg = 'Error cross-analyzing. Question not valid type.' .' [ '. 'Table' .": ${crossTable} ]";
//       return($errmsg);
//     }
//   }
//
// // find total number of survey responses
// // and relevant response ID's
//   if (!empty($rid)) {
//     $ridstr = "= '${rid}'";
//     $total = 1;
//   }
//   else {
//     $sql = "";
//     if($cross) {
//       if(!empty($cidstr)) { $sql = "SELECT A.response_id FROM ".$GLOBALS['ESPCONFIG'][$crossTable.'_table']." A, ".$GLOBALS['ESPCONFIG']['response_table']." R WHERE A.response_id=R.id AND R.complete='Y' AND A.question_id='${qid}' AND A.choice_id ${cidstr} ORDER BY A.response_id"; }
//       else { $sql = "SELECT A.response_id FROM ".$GLOBALS['ESPCONFIG'][$crossTable.'_table']." A, ".$GLOBALS['ESPCONFIG']['response_table']." R WHERE A.response_id=R.id AND R.complete='Y' AND A.question_id='${qid}' AND A.choice_id = 0 ORDER BY A.response_id"; }
//     }
//     else { $sql = "SELECT R.id FROM ".$GLOBALS['ESPCONFIG']['response_table']." R WHERE R.survey_id='${sid}' AND R.complete='Y' ORDER BY R.id"; }
//     if(!($result = execute_sql($sql))) {
//       $errmsg = 'Error opening survey.' ." [ ID:${sid} ] [ ".ErrorMsg()."]";
//       return($errmsg);
//     }
//     $total = record_count($result);
//     if ($total < 1) {
//       $errmsg = 'Error opening survey.' .' '. 'No responses found.' ." [ ID:${sid} ]";
//       return($errmsg);
//       if ($GLOBALS['ESPCONFIG']['DEBUG']) { echo("<!-- \$errmsg = '$errmsg' -->\n"); }
//     }
//     $rids = array();
//     while($row = fetch_row($result)) {
//       $result->MoveNext();
//       array_push($rids, $row[0]);
//     }
//     db_close($result);
//     $ridstr = array_to_insql($rids);
//   }
//   if (!empty($rid)) { survey_results_navbar($sid, $rid); }
// ?>
// <h2><?php echo($survey["title"]); ?></h2>
// <h3><?php echo($survey["subtitle"]); ?></h3>
// <blockquote><?php echo($survey["info"]); ?></blockquote>
// <?php
//   if($cross) { echo("<blockquote>" .'Cross analysis on QN:' ." ${q_content}</blockquote>\n"); }
// ?>
// <table border="0" cellspacing="0" cellpadding="0" width="100%">
// <?php
//   $i = 0; // question number counter
//   while($question = fetch_row($questions_result)) {
//     $questions_result->MoveNext();
//     // process each question
//     $qid = $question['id'];
//     $tid = $question['type_id'];
//     $table = $response_table[$tid];
//     $totals = $showTotals;
//
//     if ($tid == 99) { echo("<tr><td><hr></td></tr>\n"); continue; }
//     if ($tid == 100) { echo("<tr><td>". $question['content'] ."</td></tr>\n"); continue; }
//     if($bg != '#eeeeee') { $bg = '#eeeeee'; } else { $bg = '#ffffff'; }
// ?>
//     <tr bgcolor="<?php echo($bg); ?>">
//      <td>
// <?php
//     if ($tid < 50) {
//       if (!empty($guicross)){
//         echo ('<input type="hidden" name="where" value="results">');
//         echo ('<input type="hidden" name="sid" value="'.$sid.'">');
//         echo ("\n<table width=\"90%\" border=\"0\">\n");
//         echo ("<tbody>\n");
//         echo ("   <tr>\n");
//         echo ("      <td width=\"34\" height=\"31\" bgcolor=\"khaki\">\n");
//         if ($tid==1 || $tid==4 || $tid==5 || $tid==6){
//           echo ("<div align=\"center\">\n");
//           echo ("   <input type=\"radio\" name=\"qid\" value=\"".$qid."\">\n");
//           echo ("</div>\n");
//         }
//         echo ("</td>\n");
//         echo ("<td width=\"429\" bgcolor=\"#CCCCCC\">\n");
//       } //end if empty($guicross)
//       echo ("<a name=\"Q".++$i."\"><b>".$i.".</b></a>\n");
//       echo ("<b>".$question['content']."</b>\n");
//       if (!empty($guicross)){
//         echo ("</td>\n");
//         echo ("<td width=\"33\" bgcolor=\"#CC0000\">\n");
//         if ($tid==1 || $tid==4 || $tid==5 || $tid==6){
//           echo ("<div align=\"center\">\n");
//           echo ("<input type=\"radio\" name=\"qidr\" value=\"".$qid."\">\n");
//           echo ("</div>\n");
//         }
//         echo ("</td>\n");
//         echo ("<td width=\"32\" bgcolor=\"#0099FF\">\n");
//         if ($tid==1 || $tid==4 || $tid==5 || $tid==6){
//           echo ("<div align=\"center\">\n");
//           echo ("<input type=\"radio\" name=\"qidc\" value=\"".$qid."\">\n");
//           echo ("</div>\n");
//         }
//         echo ("</td>\n");
//         echo ("</tr>\n");
//         echo ("</tbody>\n");
//         echo ("</table>\n");
//       } //end if empty($guicross)
//     } //end if ($tid < 50)
//
// $counts = array();
// switch ($table) {
//     // -------------------------------- response_bool --------------------------------
//     case 'response_bool':
//       $counts = array(_('Yes') => 0, _('No') => 0);
//       $sql = "SELECT A.choice_id, COUNT(A.response_id) FROM ".$GLOBALS['ESPCONFIG'][$table.'_table']." A WHERE A.question_id='${qid}' AND A.response_id ${ridstr} AND A.choice_id != '' GROUP BY A.choice_id";
//       if ($GLOBALS['ESPCONFIG']['DEBUG_RESULTS']) { echo("<!-- \$sql = '$sql' -->\n"); }
//       if ($result = execute_sql($sql)) {
//         while(list($ccontent,$count) = fetch_row($result)) {
//           $result->MoveNext();
//           $ccontent = htmlspecialchars($ccontent);
//           if ($ccontent == 'Y') { $ccontent = 'Yes'; }
//           else { $ccontent = 'No'; }
//           $counts[$ccontent] = $count;
//         }
//         db_close($result);
//       }
//       if (empty($question["result_id"]))
//         $question["result_id"] = 1;  // default to percentages for yes/no
//       break;
//     // -------------------------------- response_single --------------------------------
//     // -------------------------------- response_multiple --------------------------------
//     case 'response_multiple':
//       $totals = 0;
//     case 'response_single':
//       $sql = "SELECT C.content FROM ".$GLOBALS['ESPCONFIG']['question_choice_table']." C WHERE C.question_id='${qid}' AND C.content NOT LIKE '!other%' ORDER BY C.id";
//       if ($result = execute_sql($sql)) {
//         for ($j = 0; $j < record_count($result); $j++) {
//           $result->Move($j);
//           $counts[htmlspecialchars($result->fields[0])] = 0;
//         }
//         db_close($result);
//       }
//       $sql = "SELECT C.content, COUNT(A.response_id) AS num FROM ".$GLOBALS['ESPCONFIG']['question_choice_table']." C, ".$GLOBALS['ESPCONFIG'][$table.'_table']." A WHERE C.question_id='${qid}' AND C.content NOT LIKE '!other%' AND A.question_id=C.question_id AND A.choice_id=C.id AND A.response_id ${ridstr} GROUP BY C.id, C.content";
//       if ($GLOBALS['ESPCONFIG']['DEBUG_RESULTS']) { echo("<!-- \$sql = '$sql' -->\n"); }
//       if ($result = execute_sql($sql)) {
//         while (list($ccontent,$count) = fetch_row($result)) {
//           $result->MoveNext();
//           $ccontent = htmlspecialchars($ccontent);
//           $counts[$ccontent] = $count;
//         }
//         db_close($result);
//       }
//       // handle 'other...'
//       $sql = "SELECT A.response, C.content FROM ".$GLOBALS['ESPCONFIG']['response_other_table']." A, ".$GLOBALS['ESPCONFIG']['question_choice_table']." C WHERE A.question_id='${qid}' AND A.choice_id=C.id AND A.response_id ${ridstr} ORDER BY C.id, A.response";
//       if ($GLOBALS['ESPCONFIG']['DEBUG_RESULTS']) { echo("<!-- \$sql = '$sql' -->\n"); }
//       if ($result = execute_sql($sql)) {
//         while(list($answer,$ccontent) = fetch_row($result)) {
//           $result->MoveNext();
//           $ccontent = htmlspecialchars($ccontent);
//           $content = preg_replace(array('/^!other=/', '/^!other/'), array('', 'Other:'), $ccontent);
//           $content .= ' ' . htmlspecialchars($answer);
//           $counts[$content] = (isset($counts[$content]) ? $counts[$content] : 0)+1;
//         }
//         db_close($result);
//       }
//       if (empty($question["result_id"]))
//         $question["result_id"] = 1;  // default to percentages
//       break;
// // -------------------------------- response_text --------------------------------
//     case 'response_text':
//       $sql = "SELECT A.response, COUNT(A.response_id) AS num FROM ".$GLOBALS['ESPCONFIG'][$table.'_table']." A WHERE A.question_id='${qid}' AND A.response_id ${ridstr} GROUP BY A.response";
//       if($GLOBALS['ESPCONFIG']['DEBUG_RESULTS'])  echo("<!-- \$sql = '$sql' -->\n");
//       if($result = execute_sql($sql)) {
//         while(list($text, $num) = fetch_row($result)) {
//           $result->MoveNext();
//           if(!empty($text))
//             $counts[htmlspecialchars($text)] = $num;
//         }
//         db_close($result);
//       }
//       $question["result_id"] = 4;  // force "list" type response for text fields
//       break;
// // -------------------------------- response_date --------------------------------
//     case 'response_date':
//       $sql = "SELECT DATE_FORMAT(A.response,'".$GLOBALS['ESPCONFIG']['date_format']."'), COUNT(A.response_id) AS num FROM ".$GLOBALS['ESPCONFIG'][$table.'_table']." A WHERE A.question_id='${qid}' AND A.response_id ${ridstr} GROUP BY A.response";
//       if($GLOBALS['ESPCONFIG']['DEBUG_RESULTS'])  echo("<!-- \$sql = '$sql' -->\n");
//       if($result = execute_sql($sql)) {
//         while(list($text, $num) = fetch_row($result)) {
//           $result->MoveNext();
//           if(!empty($text))
//             $counts[htmlspecialchars($text)] = $num;
//         }
//         db_close($result);
//       }
//       $question["result_id"] = 4;  // force "list" type response for date fields
//       break;
// // -------------------------------- response_rank --------------------------------
//     case 'response_rank':
//       if ($tid == 8) { //Rank
//         $sql = "SELECT C.content FROM ".$GLOBALS['ESPCONFIG']['question_choice_table']." C WHERE C.question_id='${qid}' AND C.content NOT LIKE '!other%' ORDER BY C.id";
//         if ($result = execute_sql($sql)) {
//           for ($j = 0; $j < record_count($result); $j++) {
//             $result->Move($j);
//             $counts[htmlspecialchars($result->fields[0])] = null;
//           }
//           db_close($result);
//         }
//         $sql = "SELECT C.content, AVG(A.rank+1) AS average FROM ".$GLOBALS['ESPCONFIG']['question_choice_table']." C, ".$GLOBALS['ESPCONFIG'][$table.'_table']." A WHERE C.question_id='${qid}' AND A.question_id='${qid}' AND A.choice_id=C.id AND A.rank>=0 AND A.response_id ${ridstr} GROUP BY C.id, C.content";
//         if ($GLOBALS['ESPCONFIG']['DEBUG_RESULTS']) { echo("<!-- \$sql = '$sql' -->\n"); }
//         if ($result = execute_sql($sql)) {
//           while(list($ccontent,$avg) = fetch_row($result)) {
//             $result->MoveNext();
//             $ccontent = htmlspecialchars($ccontent);
//             $counts[$ccontent] = $avg;
//           }
//           db_close($result);
//         }
//         $question["result_id"] = 99;  // force to rank
//       } else {
//         $sql = "SELECT A.rank, COUNT(A.response_id) AS num FROM ".$GLOBALS['ESPCONFIG'][$table.'_table']." A WHERE A.question_id='${qid}' AND A.response_id ${ridstr} GROUP BY A.rank";
//         if($result = execute_sql($sql)) {
//           while(list($rank, $num) = fetch_row($result)) {
//             $result->MoveNext();
//             if($rank == -1) { $rank = "N/A"; }
//             $counts[_($rank)] += $num;
//           }
//           db_close($result);
//         }
//         if(empty($question["result_id"]))
//           $question["result_id"] = 2;  // default to rank
//       }
//       break;
//     }
// // ---------------------------------------------------------------------------
//   if (!empty($guicross) && $question["result_id"] == 1){
//     mkcrossformat($counts,$qid,$tid);
//   } else {
//     switch($question["result_id"]) {
//       case "1":  // Percentages
//         mkrespercent($counts,$total,$precision,$totals); break;
//       case "2":  // Rank
//         mkresrank($counts,$total,$precision,$totals); break;
//       case "3":  // Count
//         mkrescount($counts,$total,$precision,$totals); break;
//       case "4":  // List
//         mkreslist($counts,$total,$precision,$totals); break;
//       case "99":  // Average
//         mkresavg($counts,$total,$precision,$totals,$question['length']); break;
//     } // end switch
//   } //end if
// ?>
//     </td>
//   </tr>
// <?php } // end while ?>
// </table>
//
// <?php
//   db_close($questions_result);
//   return;
// }
//
// //  proto bool survey_update(int* survey_id, string* tab, string old_tab)
// //  Reads current form variables from _POST. Returns an true on sucess, else returns false and sets global $errstr with an error message.
// function survey_update(&$survey_id, &$tab, $old_tab) {
//   global $errstr;
//   // do not need update
//   if(empty($old_tab)) { return(1); }
//   $f_arr = array();
//   $v_arr = array();
//   // clean up survey and question names
//   if (isset($_POST['name'])) {
//     $_POST['name'] = preg_replace("/[^A-Z0-9]+/i","_", trim($_POST['name']));
//     $_POST['name'] = preg_replace("/(^_|_$)/i","", $_POST['name']);
//   }
//   // new survey
//   if(empty($survey_id)) {
//     // need to fill out at least some info on 1st tab before proceeding
//     if(empty($_POST['name']) || empty($_POST['title']) || empty($_POST['realm'])) {
//       $tab = "general";
//       $errstr = _('Sorry, please fill out the name, group, and title before proceeding.');
//       return(0);
//     }
//     // create a new survey in the database
//     //$fields = array('name','realm','title','subtitle','email','theme','thanks_page','thank_head','thank_body','info','auto_num','open_date','close_date');
//     $fields = array('name','realm','public','status','open_date','close_date','title','email','subtitle','subtitle_th','info','info_th','theme','thanks_page','thank_head','thank_body','auto_num');
//     foreach($fields as $f) {
//       if(isset($_POST[$f])) {
//         array_push($f_arr,$f);
//         array_push($v_arr, _addslashes($_POST[$f]));
//       }
//     }
//     array_push($f_arr, 'owner');
//     array_push($v_arr, _addslashes($_SESSION['acl']['username']));
//     array_push($f_arr, 'changed');
//     array_push($v_arr, sys_time_stamp());
//     $sql = "INSERT INTO ".$GLOBALS['ESPCONFIG']['survey_table']." (" . join(',',$f_arr) . ") VALUES (" . join(',',$v_arr) . ")";
//     //echo $sql;
//     $result = execute_sql($sql);
//     if (!$result) {
//       $tab = "general";
//       $errstr = 'Sorry, name already in use. Pick a new name.' .' [ ' .ErrorNo().': '.ErrorMsg().' ]';
//       return(0);
//     }
//     $sql = "SELECT id FROM ".$GLOBALS['ESPCONFIG']['survey_table']." WHERE name=".  _addslashes($_POST['name']);
//     $result = execute_sql($sql);
//     $survey_id = $result->fields[0];
//     return(1);
//   }
//   // survey already started
//   switch($old_tab) {
//     // coming from the general tab ...
//     case "general":
//       if(empty($_POST['name']) || empty($_POST['title']) || empty($_POST['realm'])) {
//         $tab = "general";
//         $errstr = 'Sorry, please fill out the name, group, and title before proceeding.';
//         return(0);
//       }
//       //$fields = array('name','realm','title','subtitle','email','theme','thanks_page','thank_head','thank_body','info','auto_num','open_date','close_date');
//       $fields = array('name','realm','public','open_date','close_date','title','email','subtitle','subtitle_th','info','info_th','theme','thanks_page','thank_head','thank_head_th','thank_body','thank_body_th','auto_num');
//       $sql = "SELECT name FROM ".$GLOBALS['ESPCONFIG']['survey_table']." WHERE id=${survey_id}";
//       $name = get_one($sql);
//       // trying to change survey name
//       if($name != $_POST['name']) {
//         $sql = "SELECT COUNT(*) FROM ".$GLOBALS['ESPCONFIG']['survey_table']." WHERE name=" . _addslashes($_POST['name']);
//         $count = get_one($sql);
//         if($count != 0) {
//           $tab = "general";
//           $errstr = 'Sorry, that name is already in use.';
//           return(0);
//         }
//       }
//       // UPDATE the row in the DB with current values
//       array_push($f_arr, 'changed='.sys_time_stamp());
//       foreach($fields as $f) {
//         array_push($f_arr,$f ."=" . _addslashes($_POST[$f]));
//       }
//       $sql = "UPDATE ".$GLOBALS['ESPCONFIG']['survey_table']." SET " . join(', ',$f_arr) . " WHERE id=${survey_id}";
//       //echo $sql;
//       $result = execute_sql($sql);
//       if(!$result) {
//         $tab = "general";
//         $errstr = 'Warning, error encountered.' .' [ '.ErrorNo().': '.ErrorMsg().' ]';
//         return(0);
//       }
//       return(1);
//
//     // coming from the questions tab ...
//     case "questions":
//
//       // if the question box is empty ... ignore everything else
//       if(empty($_POST['content']) && empty($_POST['name'])) { return(1); }
//       if(empty($_POST['content'])) {
//         $tab = 'questions';
//         $dont_clear = 1;
//         $errstr = 'Please enter text for this question.';
//         return(0);
//       }
//       if(empty($_POST['name'])) {
//         $str1 = $_POST['content'];
//         do {
//           $str2 = $str1;
//           $str1 = eregi_replace("(^| )(what|which|why|how|who|where|how|is|are|were|the|a|it|of|do|you|your|please|enter)[ ?]", " ", $str2);
//         }
//         while ($str1 != $str2);
//         $_POST['name'] = $str1;
//       }
//       $_POST['name'] = strtoupper(preg_replace("/[^A-Z0-9]+/i","_", trim($_POST['name'])));
//       $_POST['name'] = preg_replace("/(^_|_$)/i","", $_POST['name']);
//       // constraint: question type required
//       if (empty($_POST['type_id'])) {
//         $tab = 'questions';
//         $dont_clear = 1;
//         $errstr= 'Sorry, you must select a type for this question.';
//         return(0);
//       }
//       $_POST['type_id'] = intval($_POST['type_id']);
//       // constraint: qid must be int or empty
//       if ($_POST['id'] == 'New Field')
//         $qid = '';
//       $qid = intval($_POST['id']);  # curr_q_id
//       // constraint: can not change between question w/ answer choices and one w/o
//       $has_choices = esp_type_has_choices();
//       print_r($_SESSION['new_survey']);
//       if(!empty($qid)) {
//         $sql =  "SELECT Q.type_id FROM ".$GLOBALS['ESPCONFIG']['question_table']." Q WHERE Q.survey_id=${survey_id} AND Q.id=${qid}";
//         $old_type_id = get_one($sql);
//         if($has_choices[$_POST['type_id']] != $has_choices[$old_type_id]) { // trying to change between incompatible question types
//           //echo $has_choices[$_POST['type_id']];
//           //echo $has_choices[$old_type_id];
//           //echo $old_type_id;
//           $tab = "questions";
//           $_POST['type_id'] = $old_type_id;
//           $dont_clear = 1;
//           $errstr = 'Sorry, you cannot change between those types of question. Create a new question instead.';
//           return(0);
//         }
//       }
//       // constraint: length must be int
//       $_POST['length']  = intval($_POST['length']) or 0;
//       // constraint: precise must be int
//       $_POST['precise'] = intval($_POST['precise']) or 0;
//       // defaults for length field
//       if(empty($_POST['length']) && $_POST['type_id'] < 50) {
//         $arr = array(
//             0,    // 0: unused
//             0,    // 1: Single answer / radio
//             0,    // 2: Multiple answer / checkbox
//             20,    // 3: Single-line open-end       (width)
//             60,    // 4: Multi-line open-end        (width)
//             5,    // 5: Rating scale           (#cols)
//             5,    // 6: Attribute rating         (#cols)
//             0,    // 7: Drop down
//             0,    // 8: Date
//             10,    // 9: Numeric             (digit)
//             0    // 10: Others
//               );
//         $_POST['length'] = $arr[$_POST['type_id']];
//       }
//       // defaults for precision field
//       if(empty($_POST['precise']) && $_POST['type_id'] < 50) {
//         $arr = array(
//             0,    // 0: unused
//             10,    // 1: Single answer / radio
//             0,    // 2: Multiple answer / checkbox
//             0,    // 3: Single-line open-end
//             5,    // 4: Multi-line open-end        (height)
//             0,    // 5: Rating scale           (for N/A)
//             0,    // 6: Attribute rating         (for N/A)
//             0,    // 7: Drop down
//             0,    // 8: Date
//             0,    // 9: Numeric             (decimal)
//             0    // 10: Others
//               );
//         $_POST['precise'] = $arr[$_POST['type_id']];
//       }
//       // UPDATE row in the DB for the current question
//       if($qid != '') {
//         // conditional questions can't be required
//         //$sql = "SELECT COUNT(*) FROM ".$GLOBALS['ESPCONFIG']['condition_table']." WHERE q1_id='$qid'";
//         //$count = get_one($sql);
//         //if($count != 0) {
//         //   $_POST['required']='N';
//         //}
//         $fields = array('name','type_id','length','precise','required','content','content_th','ans_uniq','extra','extra_th');
//         foreach($fields as $f) {
//           if(isset($_POST[$f]))
//             array_push($f_arr,$f."="._addslashes($_POST[$f]));
//         }
//         $sql = "UPDATE ".$GLOBALS['ESPCONFIG']['question_table']." SET " . join(', ',$f_arr) . " WHERE id=${qid}";
//         // INSERT row in the DB for new question
//       } else {
//         // set the position to the end
//         $sql = "SELECT MAX(position)+1 FROM ".$GLOBALS['ESPCONFIG']['question_table']." WHERE survey_id=${survey_id}";
//         $_POST['position'] = get_one($sql);
//         $_POST['survey_id'] = $survey_id;
//         $fields = array('survey_id','name','type_id','length','precise','required','content','content_th','position');
//         foreach($fields as $f) {
//           if(isset($_POST[$f])) {
//             array_push($f_arr, $f);
//             array_push($v_arr,  _addslashes($_POST[$f]));
//           }
//         }
//         $sql = "INSERT INTO ".$GLOBALS['ESPCONFIG']['question_table']." (" . join(', ',$f_arr) . ") VALUES (" . join(', ',$v_arr) .")";
//         //echo $sql;
//       }
//       $result = execute_sql($sql);
//       if ($qid == '')
//         $qid = insert_id('question_id_seq');
//       $_POST['id'] = $qid;
//       if (!$result) {
//         $tab = 'questions';
//         $dont_clear = 1;
//         $errstr = 'Warning, error encountered.' .' [ '.ErrorNo().': '.ErrorMsg().' ]';
//         return(0);
//       }
//       // UPDATE or INSERT rows for each of the question choices for this question
//       if($has_choices[$_POST['type_id']]) {
//         $cids = array();
//         $sql = "SELECT c.id FROM ".$GLOBALS['ESPCONFIG']['question_table']." q, ".$GLOBALS['ESPCONFIG']['question_choice_table']." c WHERE q.id=c.  question_id AND q.survey_id=${survey_id}";
//         $result = execute_sql($sql);
//         for ($i = 0; $i < record_count($result); ++$i) {
//           $result->Move($i);
//           array_push($cids, $result->fields[0]);
//         }
//         db_close($result);
//         $count = 0;
//         for($i=1;$i<$_POST['num_choices']+1;$i++) {
//           $sql='';
//           $choice_id = intval($_POST["choice_id_${i}"]);
//           $choice_content = $_POST["choice_content_${i}"];
//           $choice_content_th = $_POST["choice_content_th_${i}"];
//           $choice_feedback = $_POST["choice_feedback_${i}"];
//           $choice_credit = $_POST["choice_credit_${i}"];
//           //constraint: for rate questions (type_id=5)
//           // we don't allow "!other" as a choice
//           if ($_POST['type_id'] == 5 && $choice_content == '!other') {
//             $errstr = 'For rate questions, "!other" is not a possible answer';
//             return(0);
//           }
//           // autotext
//           $choice_content_th = autotext($choice_content, $choice_content_th);
//           // for safety, we add slashes
//           if ($choice_content != '') { $choice_content = _addslashes($choice_content); }
//           $choice_content_th = _addslashes($choice_content_th);
//           $choice_feedback = _addslashes($choice_feedback);
//           $choice_credit   = _addslashes($choice_credit);
//           if ($choice_id == '' && $choice_content != '') { // new data injected to sql
//             $sql = "INSERT INTO ".$GLOBALS['ESPCONFIG']['question_choice_table']." (question_id, content, content_th, feedback, credit) VALUES (${qid}, ${choice_content}, ${choice_content_th}, ${choice_feedback}, ${choice_credit}) ";
//             ++$count;
//           } elseif ($choice_id != '' && $choice_content == '') { // remove data from sql
//             $sql = "DELETE FROM ".$GLOBALS['ESPCONFIG']['question_choice_table']." WHERE id=${choice_id} ";
//           } elseif ($choice_id != '' && ($choice_content != '' || $choice_feedback != '' || $choice_credit != '') && in_array($choice_id, $cids)) {
//             // update sql with new data
//             $sql = "UPDATE ".$GLOBALS['ESPCONFIG']['question_choice_table']." SET content=${choice_content}, content_th=${choice_content_th}   WHERE id=${choice_id}";
//             ++$count;
//           }
//           if($sql != '') {
//             $result = execute_sql($sql);
//             if(!$result) {
//               $tab = 'questions';
//               $dont_clear = 1;
//               $errstr = 'Warning, error encountered.' .' [ '.ErrorNo().': '.ErrorMsg().' ]';
//               return(0);
//             }
//           }
//         }
//         if(!$count && !isset($_POST['extra_choices'])) {
//           $tab = 'questions';
//           $dont_clear = 1;
//           $errstr = 'Sorry, you need at least one answer option for this question type.' .
//             ' [ '. _('ID') .': '. $_POST['type_id'] .' ]';
//           return(0);
//         }
//       }
//       return(1);
//
//     case "preview":
//       // can not change anything here yet, so no need to update DB.
//       return(1);
//
//     case "order":
//       if(isset($_POST['questions_order']))
//         $questions_order = $_POST['questions_order'];
//
//       $sid = $survey_id;
//
//       if (isset($_POST['questions_order'])) {
//         $sql = "SELECT id, position FROM ".$GLOBALS['ESPCONFIG']['question_table']." WHERE survey_id=$sid AND deleted='N' ORDER BY position";
//         $result = execute_sql($sql);
//         $max = record_count($result);
//         $order = split('\|', $questions_order);
//         for($i = 0; $i < count($order); $i++) {
//           $ord = _addslashes($order[$i]);
//           $sql = "UPDATE ".$GLOBALS['ESPCONFIG']['question_table']." SET position=$i WHERE id=$ord AND survey_id=$sid";
//           execute_sql($sql);
//         }
//       }
//       if (isset($_POST['removeit'])) {
//         if ($_POST['removeit'] == 1) {
//           if(isset($_POST['questions'])) {
//             $qid = intval($_POST['questions']);
//             $sql = "UPDATE ".$GLOBALS['ESPCONFIG']['question_table']." SET deleted='Y' WHERE id=$qid AND survey_id=$sid";
//             execute_sql($sql);
//           }
//         }
//       }
//       if(isset($_POST['addbreak'])) {
//         $sql = "SELECT MAX(position)+1 FROM ".$GLOBALS['ESPCONFIG']['question_table']." WHERE survey_id=$sid";
//         $pos = get_one($sql);
//         $sql = "INSERT INTO ".$GLOBALS['ESPCONFIG']['question_table']." (survey_id,name,type_id,position,content) VALUES ($sid, 'break', 99, $pos, 'break')";
//         execute_sql($sql);
//       }
//       db_close($result);
//       return(1);
//
//     case "conditions":
//       $sid = $survey_id;
//       //if(isset($_POST['addcondition']) && ($_POST['addcondition']=='go')) {
//       if(isset($_POST['addcondition'])) {
//         $id1=$_POST['q1_id'];
//         $id2=$_POST['q2_id'];
//         if ($id1==$id2) {
//           $errstr = 'Please select two different questions.';
//           return(0);
//         }
//         $cond=$_POST['cond'];
//         $cond_val=_addslashes($_POST['cond_value']);
//         $sql = "INSERT INTO ".$GLOBALS['ESPCONFIG']['condition_table']." (survey_id,q1_id,q2_id,cond,cond_value) VALUES ($sid, $id1, $id2, $cond, $cond_val)";
//         $result=execute_sql($sql);
//         if (!$result)
//            $errstr = 'Warning, error encountered.' .' [ '.ErrorNo().': '.ErrorMsg().' ]';
//         # Conditional questions can't be required questions as well
//         //$sql = "UPDATE ".$GLOBALS['ESPCONFIG']['question_table']." SET required='N' WHERE id=$id1";
//         //$result=execute_sql($sql);
//         //if (!$result)
//         //   $errstr = _('Warning, error encountered.') .' [ '.ErrorNo().': '.ErrorMsg().' ]';
//       }
//       elseif(isset($_POST['deletecondition'])) {
//         $sql = "DELETE FROM ".$GLOBALS['ESPCONFIG']['condition_table']." WHERE id=".key($_POST['deletecondition']);
//         $result=execute_sql($sql);
//         if (!$result)
//            $errstr = 'Warning, error encountered.' .' [ '.ErrorNo().': '.ErrorMsg().' ]';
//       }
//       return(1);
//   }
//   return(1);
// }

?>
