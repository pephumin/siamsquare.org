<?php

class ssq {

  //  var $Title;
  //  var $Keywords;
  //  var $Content;

   function Display() {
     echo "<html>\n<head>\n";
     $this->DisplayTitle();
     $this->DisplayKeywords();
     echo "\n</head>\n<body>\n";
     echo $this->Content;
     echo "\n</body>\n</html>\n";
   }

   function DisplayTitle() {
     echo "<title>" . $this->Title . "</title>\n";
   }

   function DisplayKeywords( ) {
     echo '<meta name="keywords" content="' . $this->Keywords . '">';
   }

   function SetContent($Data) {
     $this->Content = $Data;
   }

 }
?>
