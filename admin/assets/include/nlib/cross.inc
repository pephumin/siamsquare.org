
<?php

//   proto void mkcrossformat (array weights, integer qid)
//   Builds HTML to allow for cross tabulation/analysis reporting.

function mkcrossformat($counts, $qid, $tid) {
    $cids = array();
    $cidCount = 0;

    // let's grab the cid values for each of the questions
    // that we allow cross analysis on.
    if ($tid == 1) {
        $cids = array('Y', 'N');
    } else {
        $sql = "SELECT id FROM ".$GLOBALS['ESPCONFIG']['question_choice_table']."
                WHERE question_id = $qid
                ORDER BY id";
        $result = execute_sql($sql);
        while ($cid = fetch_row($result)) {
            $result->MoveNext();
            array_push($cids, $cid[0]);
        }
        db_close($result);
    }

    $output .= "<table class=\"table table-hover\">\n";
    $output .= "<tbody>\n";

    while(list($content,$num) = each($counts)) {
        if ($cidCount >= count($cids)) $cidCount = count($cids) - 1;
        $new = $cids[$cidCount++];
        $output .= "<tr>\n";
        $output .= "<td width=\"34\" class=\"text-center\">\n";
        $output .= "  <input type=\"checkbox\" name=\"cids[]\" value=\"$new\" />\n";
        $output .= "</td>\n";
        $output .= "<td>$content</td>\n";
        $output .= "</tr>\n";
    }
    $output .= "</tbody></table>\n";
    return $output;
}

?>
