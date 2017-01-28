<?php

namespace Html2Text;

class Html2TextException extends \Exception {
  var $more_info;
  public function __construct($message = "", $more_info = "") {
    parent::__construct($message);
    $this->more_info = $more_info;
  }
}

function convert_html_to_text($html) { return Html2Text\Html2Text::convert($html); }
function fix_newlines($text) { return Html2Text\Html2Text::fixNewlines($text); }

?>
