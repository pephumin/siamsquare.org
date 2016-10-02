<?php

$_SERVER['BASE_PAGE'] = 'xml.php';
$title = "XML database pulling";
require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/config.php';
require_once INCLUDEPUB.'/template.php';
require_once INCLUDEPUB.'/first.php';

pageHeader($title);

// --------------------------------------------------------------------------------

$p = new SimpleXMLElement(file_get_contents("assets/xml/provinces_eng.xml"));

foreach ($p->children() as $ps) {
  echo $ps->title;
  echo "<br>\n";
  foreach ($ps->title->provinces as $ss) {
    echo $ss->province;
    echo "<br>\n";
  }
}

// --------------------------------------------------------------------------------

if ($notes) { pageFooter($notes); } else { pageFooter(); }


?>
