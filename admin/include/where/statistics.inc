<?php

/*
* @_TODO_@
* - Sort by table headers (always leaving summary at the bottom)
* - Filter by table values
* - Export values to CSV/Excel
* - Support automatic, periodic refresh via javascript
*/

// get the survey data (name, status, etc)
//esp_require_once('/lib/espsurvey');
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/include/lib/espsurvey.inc';
survey_get_for_current_user($surveys);

// handle any button press events
// NOTE: we handle these after getting survey data to ensure that actions happen only on allowed surveys
$doReset = (isset($_REQUEST['doReset']) && isset($_REQUEST['reset']) && 0 < count($_REQUEST['reset']) ? true : false);
if ($doReset) {
    //esp_require_once('/lib/espsurveystat');
    require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/include/lib/espsurveystat.inc';
    foreach ($_REQUEST['reset'] as $sid) {
        if (array_key_exists($sid, $surveys)) {
            survey_stat_reset($sid);
        } else {
            // bad access
            $GLOBALS['errmsg'] = mkerror("Request to reset survey that is outside allowed access");
        }
    }
}

// get the statistics
//esp_require_once('/lib/espsurveystat');
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/include/lib/espsurveystat.inc';
$stats = stat_fetch_with_summary();

// show them
echo "<h2>View survey statistics</h2>\n";
echo "<p>Various access statistics for your active and done surveys.</p>\n";
echo "<br />\n";
echo "<input type=\"hidden\" name=\"where\" value=\"statistics\" />\n";
if (0 < count($stats)) {
    echo "<table class=\"table table-hover\">\n";
    echo "  <tr class=\"active\">\n";
    echo "    <th>Survey</th>\n";
    echo "    <th class=\"text-center\">Login Failures</th>\n";
    echo "    <th class=\"text-center\">Attempted</th>\n";
    echo "    <th class=\"text-center\">Abandoned</th>\n";
    echo "    <th class=\"text-center\">Suspended</th>\n";
    echo "    <th class=\"text-center\">Completed</th>\n";
    echo "    <th class=\"text-center\">Reset?</th>\n";
    echo "  </tr>\n";

    foreach ($stats as $sid => $stat) {
        //print_r($surveys[$sid]);
        echo "  <tr>\n";
        echo "    <td>".(empty($sid) ? 'Statistics Total' : $surveys[$sid]['name'])."</td>\n";
        echo "    <td class=\"text-center\">".$stat['loginfail']."</td>\n";
        echo "    <td class=\"text-center\">".$stat['attempted']."</td>\n";
        echo "    <td class=\"text-center\">".$stat['abandoned']."</td>\n";
        echo "    <td class=\"text-center\">".$stat['suspended']."</td>\n";
        echo "    <td class=\"text-center\">".$stat['completed']."</td>\n";
        echo "    <td class=\"text-center\">".(empty($sid) ? '' : mkcheckbox('reset', $sid))."</td>\n";
        echo "  </tr>\n";
    }
    echo '</table>';
    $confirm = sprintf('return confirm("%s");','You are about to make permanent and irrevocable changes. Click OK if you are certain this is what you want to do.');
    //echo mksubmit('doRefresh', 'Refresh') .
    //     '&nbsp;' .
    //     mksubmit('doReset', 'Reset statistics', array ('onclick' => $confirm, 'onkeypress' => $confirm));
    echo "<p class=\"text-right\">\n";
    echo "<input class=\"btn btn-default btn-danger\" type=\"submit\" name=\"doReset\" value=\"Reset statistics\" onclick=\"return confirm(\"You are about to make permanent and irrevocable changes. Click OK if you are certain this is what you want to do.\");\" onkeypress=\"return confirm(\"You are about to make permanent and irrevocable changes. Click OK if you are certain this is what you want to do.\");\" />\n";
    echo "<input class=\"btn btn-default\" type=\"submit\" name=\"doRefresh\" value=\"Refresh\" />&nbsp;\n";
    echo "</p>\n\n";
} else {
    echo "You have no active or done surveys. Check back later.";
}
//echo '</div>';
echo '<br /><br />';
displayAdminBack(); 
?>
