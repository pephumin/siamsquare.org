<div class="scroll-to-top"><i class="pe-arrow-up pe-lg"></i></div>
<?php include("asset/include/google_analytics.php"); ?>
<script type="text/javascript" src="assets/js/jquery-2.1.4.min.js"></script>
<script type="text/javascript" src="assets/js/bootstrap.js"></script>
<script type="text/javascript" src="assets/js/anchor.js"></script>
<script type="text/javascript" src="assets/js/notification.js"></script>
<script type="text/javascript" src="assets/js/top.js"></script>
<script type="text/javascript" src="assets/js/functions.js"></script>
<script type="text/javascript">
  var activateConfirmMsg="Warning! Once activated, this survey can no longer be edited. Any further changes must be done on a copy."
  var cancelConfirmMsg="Warning! This survey has not been saved. Canceling now will remove any changes."
  var mergeMsg="<h2>You must select at least two surveys before you can merge</h2>"
</script>
<script language="JavaScript">
  function windowOpener(title,msg) {
    msgWindow=window.open("","displayWindow","menubar=no,alwaysRaised=yes,dependent=yes,width=600,height=500,scrollbars=yes,resizable=yes");
    msgWindow.document.write("<html><head><title>"+title+"</title></head>");
    msgWindow.document.write("<body>"+msg+"</body></html>");
  }
  function debugWindow () {
   title="Debug Window";
   msg="<table>\n<tr><td bgcolor=\"#808080\">SID</td><td bgcolor=\"#cccccc\">skge0e2drngug25vv1lo90svc5</td></tr>\n<tr><td bgcolor=\"#808080\">SESSION</td><td bgcolor=\"#cccccc\">FBRLH_state|s:32:&quot;4c24ac330370a7176f93f4064a5c08d1&quot;;acl|a:0:{}</td></tr>\n<tr><th align=\"left\" colspan=\"2\" bgcolor=\"#808080\">ACL</th></tr>\n</table>\n";
   windowOpener(title, msg);
  }
</script>

<form name="debug"><input class="btn btn-xs btn-block btn-danger" type="button" value="debug" onClick="debugWindow()"></form>
