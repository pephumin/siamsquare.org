<?php
// Guide
if (file_exists(MYTEXT.'/guide.txt')) { include(MYTEXT.'/guide.txt'); }
else { echo('<p>' . mkwarn("Document is not found.") . "</p>\n"); }
echo "<br><hr><br>\n\n";
// FAQs
if (file_exists(MYTEXT.'/faqs.txt')) { include(MYTEXT.'/faqs.txt'); }
else { echo('<p>' . mkwarn("Document is not found.") . "</p>\n"); }
echo "<br><hr><br>\n\n";
// Help
if (file_exists(MYTEXT.'/help.txt')) { include(MYTEXT.'/help.txt'); }
else { echo('<p>' . mkwarn("Document is not found.") . "</p>\n"); }
echo "<br><hr><br>\n\n";
// Todo
if (file_exists(MYTEXT.'/todo.txt')) { include(MYTEXT.'/todo.txt'); }
else { echo('<p>' . mkwarn("Document is not found.") . "</p>\n"); }
echo "<br><hr><br>\n\n";
?>
