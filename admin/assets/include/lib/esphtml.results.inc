<?php

/*  proto void mkrespercent(array weights, int total, int precision, bool show_totals)
  Builds HTML showing PERCENTAGE results. */

function mkrespercent($counts,$total,$precision,$showTotals) {
  $i=0;
  $bg='';
?>
<table class="table table-hover">
<?php
  while(list($content,$num) = each($counts)) {
    if($num>0) { $percent = $num/$total*100.0; }
    else { $percent = 0; }
    if($percent > 100) { $percent = 100; }

?>
  <tr>
    <td><?php echo($content); ?></td>
    <td align="left">
<?php
    if($num) {
      echo("&nbsp;<img src=\"/images/hbar_l.gif\" height=9 width=4>");
      printf("<img src=\"/images/hbar.gif\" height=9 width=%d>",$percent*2);
      echo("<img src=\"/images/hbar_r.gif\" height=9 width=4>");
      printf("&nbsp;%.${precision}f%%",$percent);
    }
?></td>
    <td align="right">(<?php echo($num); ?>)</td>
  </tr>
<?php
    $i += $num;
  } // end while
  if($showTotals) {
    if($i>0) { $percent = $i/$total*100.0; }
    else { $percent = 0; }
    if($percent > 100) { $percent = 100; }
?>
  <tr>
    <td><b><?php echo(_('TOTAL')); ?></b></td>
    <td width="40%"><b>&nbsp;<?php
      echo("<img src=\"/images/hbar_l.gif\" height=9 width=4>");
      printf("<img src=\"/images/hbar.gif\" height=9 width=%d>",$percent*2);
      echo("<img src=\"/images/hbar_r.gif\" height=9 width=4>");
      printf("&nbsp;%.${precision}f%%",$percent); ?></b></td>
    <td width="10%" align="right"><b><?php print "$i ($total)"; ?></b></td>
  </tr>
<?php } ?>
</table>
<?php
}

/*  proto void mkresrank(array weights, int total, int precision, bool show_totals)
  Builds HTML showing RANK results. */

function mkresrank($counts,$total,$precision,$showTotals) {
  $bg='';
?>
<table border="0">
  <tr>
    <td><b>Rank</b></td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
<?php
  arsort($counts);
  $i=0; $pt=0;
  while(list($content,$num) = each($counts)) {
    if($num)
      $p = $num/$total*100.0;
    else
      $p = 0;
    $pt += $p;

?>
  <tr>
    <td><b><?php echo(++$i); ?></b></td>
    <td><?php echo($content); ?></td>
    <td width="60"><?php if($p) printf("%.${precision}f%%",$p); ?></td>
    <td width="60">(<?php echo($num); ?>)</td>
  </tr>
<?php
  } // end while
  if($showTotals) {

?>
  <tr>
    <td colspan=2><b><?php echo(_('TOTAL')); ?></b></td>
    <td><b><?php printf("%.${precision}f%%",$pt); ?></b></td>
    <td><b><?php print "$i ($total)"; ?></b></td>
  </tr>
<?php } ?>
</table>
<?php
}

/*  proto void mkrescount(array weights, int total, int precision, bool show_totals)
  Builds HTML showing COUNT results. */

function mkrescount($counts,$total,$precision,$showTotals) {
  $i=0;
?>
<table class="table table-hover">
<?php
    $bg = '';
  while(list($content,$num) = each($counts)) {
?>
  <tr>
    <td><?php echo($content); ?></td>
    <td width="60"><?php echo($num); ?></td>
    <td width="60">(<?php if($num) printf("%.${precision}f",$num/$total*100.0); ?>%)</td>
  </tr>
<?php
    $i += $num;
  } // end while
  if($showTotals) {

?>
  <tr>
    <td><b><?php echo(_('TOTAL')); ?></b></td>
    <td><b><?php print "$i ($total)"; ?></b></td>
    <td><b>(<?php if($i) printf("%.${precision}f",$i/$total*100.0); ?>%)</b></td>
  </tr>
<?php  } ?>
</table>
<?php
}

/*  proto void mkreslist(array weights, int total, int precision, bool show_totals)
  Builds HTML showing LIST results. */

function mkreslist($counts,$total,$precision,$showTotals) {
  if($total==0)  return;
  $bg='';
?>
<table class="table table-hover">
  <tr><th><?php echo(_('#')); ?></th><th>Response</th></tr>
<?php
  while(list($text,$num) = each($counts)) {
    echo("<tr><th>$num</th><td>$text</td></tr>\n");
  }
?>
</table>
<?php
}

/*  proto void mkresavg(array weights, int total, int precision, bool show_totals)
  Builds HTML showing AVG results. */

function mkresavg($counts,$total,$precision,$showTotals,$length) {
  if (!$length)
    $length = 5;
  $width = 200 / $length;
?>
<table cellspacing="0" cellpadding="0">
  <tr>
    <td></td>
    <td colspan="<?php echo($length+2); ?>">Average Rank</td>
  </tr>
  <tr>
    <td></td>
    <?php
      for ($i = 0; $i < $length; )
        echo( "<td align=\"right\" width=\"$width\">". ++$i ."</td>\n");
    ?>
    <td width="20"></td>
    <td></td>
  </tr>
<?php
    $bg = '';
  while(list($content,$avg) = each($counts)) {

?>
  <tr>
    <td><?php echo($content); ?>&nbsp;</td>
    <td colspan="<?php echo($length+1); ?>">
<?php
    if($avg) {
      echo('<img src="/images/hbar_l.gif" height="9" width="4">');
      if (($j = $avg * $width - 11) > 0)
        printf('<img src="/images/hbar.gif" height="9" width="%d">', $j);
      echo('<img src="/images/hbar_r.gif" height="9" width="4">');
    }
?>
    </td>
    <td width="60">(<?php printf("%.${precision}f",$avg); ?>)</td>
  </tr>
<?php
  } // end while
?>
</table>
<?php
}

?>
