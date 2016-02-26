<?php
/* $Id$ */

/* vim: set tabstop=4 shiftwidth=4 expandtab: */

?>
<div id="main">
  <div id="header">
	<!--<p><img src="<?php
	if(!empty($GLOBALS['ESPCONFIG']['banner'])) {
		echo($GLOBALS['ESPCONFIG']['banner']);
	} else {
		echo($GLOBALS['ESPCONFIG']['name'].".gif");
	}
	?>" width="460" height="80"></p> -->
      <p><tt><?php for($i=0;$i<strlen($GLOBALS['ESPCONFIG']['name']);$i++) echo($GLOBALS['ESPCONFIG']['name'][$i] .' '); ?></tt></p>
  </div> <!-- end header div -->
  <div id="body">
      <div class="contents">
      <form method="post" id="phpesp" action="<?php echo($GLOBALS['ESPCONFIG']['ME']); ?>">
	<div>

<?
function headerDisplay($title) {
	global $ESPCONFIG;

?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="css/bootstrap.css" rel="stylesheet" type="text/css" />
    <link href="css/bootstrap-theme.css" rel="stylesheet" type="text/css" />
    <link href="css/admin.css" rel="stylesheet" type="text/css" />
    <title>Client Section: <?php echo($ESPCONFIG['title']); ?></title>
    <script type="text/javascript" src="js/jquery.min.js"></script>
    <script type="text/javascript" src="js/admin.js"></script>
    <script type="text/javascript">
      var activateConfirmMsg="<?php echo(_('Warning! Once activated, this survey can no longer be edited.  Any further changes must be done on a copy.')); ?>";
      var cancelConfirmMsg="<?php echo(_('Warning! This survey has not been saved.  Canceling now will remove any changes.')); ?>";
      var mergeMsg="<h2><?php echo(_('You must select at least two surveys before you can merge')); ?></h2>";
    </script>
</head>
<body>
<?

}
?>