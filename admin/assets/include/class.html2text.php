<?php

namespace Html2Text;

class Html2Text {

  public static function convert($html, $ignore_error = false) {
    $html = str_replace("&nbsp;", " ", $html);
    $html = str_replace("\xc2\xa0", " ", $html);
    if (static::isOfficeDocument($html)) { $html = str_replace(array("<o:p>", "</o:p>"), "", $html); }
    $html = static::fixNewlines($html);
    if (mb_detect_encoding($html, "UTF-8", true)) { $html = mb_convert_encoding($html, "HTML-ENTITIES", "UTF-8"); }
    $doc = new \DOMDocument();
    if ($ignore_error) { $old_internal_errors = libxml_use_internal_errors(true); }
    $load_result = $doc->loadHTML($html);
    if ($ignore_error) { libxml_use_internal_errors($old_internal_errors); }
    if (!$load_result) { throw new Html2TextException("Could not load HTML - badly formed?", $html); }
    if (static::isOfficeDocument($html)) { $doc = static::fixMSEncoding($doc); }
    $output = static::iterateOverNode($doc);
    $output = preg_replace("/[ \t]*\n[ \t]*/im", "\n", $output);
    $output = preg_replace("/ *\t */im", "\t", $output);
    $output = preg_replace("/\n\n\n*/im", "\n\n", $output);
    $output = trim($output);
    return $output;
  }

  static function fixNewlines($text) {
    $text = str_replace("\r\n", "\n", $text);
    $text = str_replace("\r", "\n", $text);
    return $text;
  }

  static function fixMSEncoding($doc) {
    $paras = $doc->getElementsByTagName('p');
    for ($i = $paras->length - 1; $i >= 0; $i--) {
      $para = $paras->item($i);
      if ($para->getAttribute('class') == 'MsoNormal') {
        $fragment = $doc->createDocumentFragment();
        $fragment->appendChild($doc->createTextNode($para->nodeValue));
        $fragment->appendChild($doc->createElement('br'));
        $new_node = $para->parentNode->replaceChild($fragment, $para);
      }
    }
    $doc->loadHTML($doc->saveHTML());
    return $doc;
  }

  static function isOfficeDocument($html) {
    return strpos($html, "urn:schemas-microsoft-com:office") !== false;
  }

  static function nextChildName($node) {
    $nextNode = $node->nextSibling;
    while ($nextNode != null) {
      if ($nextNode instanceof \DOMElement) { break; }
      $nextNode = $nextNode->nextSibling;
    }
    $nextName = null;
    if ($nextNode instanceof \DOMElement && $nextNode != null) { $nextName = strtolower($nextNode->nodeName); }
    return $nextName;
  }

  static function prevChildName($node) {
    $nextNode = $node->previousSibling;
    while ($nextNode != null) {
      if ($nextNode instanceof \DOMElement) { break; }
      $nextNode = $nextNode->previousSibling;
    }
    $nextName = null;
    if ($nextNode instanceof \DOMElement && $nextNode != null) { $nextName = strtolower($nextNode->nodeName); }
    return $nextName;
  }

  static function iterateOverNode($node, $in_pre = false) {
    if ($node instanceof \DOMText) {
      if ($in_pre) { return trim($node->wholeText, "\n\r\t "); }
      else { return preg_replace("/[\\t\\n\\f\\r ]+/im", " ", $node->wholeText); }
    }
    if ($node instanceof \DOMDocumentType) { return ""; }
    $nextName = static::nextChildName($node);
    $prevName = static::prevChildName($node);
    $name = strtolower($node->nodeName);

    switch ($name) {
      case "hr":
        return "---------------------------------------------------------------\n";

      case "style":
      case "head":
      case "title":
      case "meta":
      case "script":
        return ""; // ignore these tags

      case "h1":
      case "h2":
      case "h3":
      case "h4":
      case "h5":
      case "h6":
      case "ol":
      case "ul":
        $output = "\n"; // add two newlines, second line is added below
        break;

      case "td":
      case "th":
         $output = "\t"; // add tab char to separate table fields
         break;

      case "tr":
      case "p":
      case "div":
        $output = "\n"; // add one line
        break;

      case "li":
        $output = "- ";
        break;

      default:
        $output = ""; // print out contents of unknown tags
        break;
    }

    // debug
    //$output .= "[$name,$nextName]";

    if (isset($node->childNodes)) {
      for ($i = 0; $i < $node->childNodes->length; $i++) {
        $n = $node->childNodes->item($i);
        $text = static::iterateOverNode($n, $in_pre || $name == 'pre');
        $output .= $text;
      }
    }

    // end whitespace
    switch ($name) {
      case "h1":
      case "h2":
      case "h3":
      case "h4":
      case "h5":
      case "h6":
        $output .= "\n";
        break;

      case "p":
      case "br":
        if ($nextName != "div") { $output .= "\n"; } // add one line
        break;

      case "div":
        if ($nextName != "div" && $nextName != null) { $output .= "\n"; } // add one line only if the next child isn't a div
        break;

      case "a":
        // links are returned in [text](link) format
        $href = $node->getAttribute("href");
        $output = trim($output);

        if (substr($output, 0, 1) == "[" && substr($output, -1) == "]") {
          $output = substr($output, 1, strlen($output) - 2); // remove double [[ ]] s from linking images
          if ($node->getAttribute("title")) { $output = $node->getAttribute("title"); } // for linking images, the title of the <a> overrides the title of the <img>
        }

        if (!$output && $node->getAttribute("title")) { $output = $node->getAttribute("title"); } // if there is no link text, but a title attr

        if ($href == null) { if ($node->getAttribute("name") != null) { $output = "[$output]"; } } // it doesn't link anywhere
        else {
          if ($href == $output || $href == "mailto:$output" || $href == "http://$output" || $href == "https://$output") { $output; } // link to the same address: just use link
          else {
            if ($output) { $output = "[$output]($href)"; } // replace it
            else { $output = $href; } // empty string
          }
        }

        // does the next node require additional whitespace?
        switch ($nextName) {
          case "h1": case "h2": case "h3": case "h4": case "h5": case "h6":
            $output .= "\n";
            break;
        }
        break;

      case "img":
        if ($node->getAttribute("title")) { $output = "[" . $node->getAttribute("title") . "]"; }
        elseif ($node->getAttribute("alt")) { $output = "[" . $node->getAttribute("alt") . "]"; }
        else { $output = ""; }
        break;

      case "li":
        $output .= "\n";
        break;

      default:
        // do nothing
    }
    return $output;
  }
}

?>
