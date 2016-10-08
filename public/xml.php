<?php

$_SERVER['BASE_PAGE'] = 'xml.php';
$title = "XML database pulling";
require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/config.php';
require_once INCLUDEPUB.'/template.php';
require_once INCLUDEPUB.'/first.php';

pageHeader($title);

// --------------------------------------------------------------------------------

$p = new SimpleXMLElement(file_get_contents("assets/xml/provinces_th.xml"));

echo $p->region->province;
//print_r($p);

// echo $p->region[0]->province . "<br>";
// echo $p->region[1]->province;
//
// foreach($p->children() as $pp) {
//     echo $pp->province . ", ";
//     echo $pp->province . ", ";
//     // echo $pp->year . ", ";
//     // echo $pp->price . "<br>";
// }

// $p = new SimpleXMLElement(file_get_contents("assets/xml/provinces_th.xml"));
//
// foreach ($p->children() as $ps) {
//   echo $ps->title;
//   echo "<br>\n";
//   foreach ($ps->title->provinces as $ss) {
//     echo $ss->province;
//     echo "<br>\n";
//   }
// }

// --------------------------------------------------------------------------------

if ($notes) { pageFooter($notes); } else { pageFooter(); }


?>
