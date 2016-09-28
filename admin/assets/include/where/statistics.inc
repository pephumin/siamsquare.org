<?php

/*
* @_TODO_@
* - Sort by table headers (always leaving summary at the bottom)
* - Filter by table values
* - Export values to CSV/Excel
* - Support automatic, periodic refresh via javascript
*/

survey_get_for_current_user($surveys);

$doReset = (isset($_REQUEST['doReset']) && isset($_REQUEST['reset']) && 0 < count($_REQUEST['reset']) ? true : false);

if ($doReset) {
  foreach ($_REQUEST['reset'] as $sid) {
    if (array_key_exists($sid, $surveys)) { survey_stat_reset($sid); }
    else { $GLOBALS['errmsg'] = mkerror("Request to reset survey that is outside allowed access"); }
  }
}

$stats = stat_fetch_with_summary();

echo "<h2>View survey statistics</h2>\n";
echo "<p>Various access statistics for your active and done surveys.</p>\n";
echo "<br>\n";
echo "<input type=\"hidden\" name=\"where\" value=\"statistics\">\n";

if (0 < count($stats)) {
  echo "<table class=\"table table-hover\">\n";
  echo "  <tr class=\"active\">\n";
  echo "    <th>Project</th>\n";
  echo "    <th class=\"text-center\">Login failures</th>\n";
  echo "    <th class=\"text-center\">Attempted</th>\n";
  echo "    <th class=\"text-center\">Abandoned</th>\n";
  echo "    <th class=\"text-center\">Suspended</th>\n";
  echo "    <th class=\"text-center\">Completed</th>\n";
  echo "    <th class=\"text-center\">Reset?</th>\n";
  echo "  </tr>\n";

  foreach ($stats as $sid => $stat) {
    //print_r($surveys[$sid]);
    $mname = $surveys[$sid]['name'];
    $mtitle = $surveys[$sid]['title'];
    $mpage = MYSURVEY."?name=".$mname;
    echo "  <tr>\n";
    if (empty($sid)) { echo "    <td><strong>TOTAL</strong></td>\n"; }
    else { echo "    <td><a href=\"$mpage\">$mtitle</a></td>\n"; }
    //echo "    <td>".(empty($sid) ? 'Statistics Total' : $surveys[$sid]['name'])."</td>\n";
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
  echo "<p class=\"text-right\">\n";
  echo "<input class=\"btn btn-default btn-danger\" type=\"submit\" name=\"doReset\" value=\"Reset statistics\" onclick=\"return confirm(\"You are about to make permanent and irrevocable changes. Click OK if you are certain this is what you want to do.\");\" onkeypress=\"return confirm(\"You are about to make permanent and irrevocable changes. Click OK if you are certain this is what you want to do.\");\" disabled />\n";
  echo "<input class=\"btn btn-default\" type=\"submit\" name=\"doRefresh\" value=\"Refresh\" />&nbsp;\n";
  echo "</p>\n\n";
  echo "<p class=\"text-muted text-right\"><small>The reset function has been disabled by the system administrator.</small></p>\n";
} else {
  echo "You have no active or done surveys. Check back later.";
}
//echo '</div>';
echo '<br><br>';
?>
