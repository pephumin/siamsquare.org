// Events = {
//   permalink: function() { ga('send', 'event', 'permalink', 'created') },
//   permalink_error: function(value) { ga('send', 'event', 'permalink', 'error', "" + value); },
//   download: function(size) { ga('send', 'event', 'download', 'clicked', 'size', size); }
// }

function getParam(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), results = regex.exec(location.search);
  return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function parse_object(obj, path) {
  if (path == undefined) { path = ""; }
  var type = $.type(obj);
  var scalar = (type == "number" || type == "string" || type == "boolean" || type == "null");
  if (type == "array" || type == "object") {  var d = {};   for (var i in obj) { var newD = parse_object(obj[i], path + i + " "); $.extend(d, newD); }  return d;   }
  else if (scalar) { var d = {}; var endPath = path.substr(0, path.length-1); d[endPath] = obj; return d; }
  else return {};
}

function arrayFrom(json) {
  var queue = [], next = json;
  while (next !== undefined) {
    if ($.type(next) == "array") {
      if (next.length > 0) {
        var type = $.type(next[0]);
        var scalar = (type == "number" || type == "string" || type == "boolean" || type == "null");
        if (!scalar) { return next; }
      }
    }
    if ($.type(next) == "object") { for (var key in next) { queue.push(next[key]); } }
    next = queue.shift();
  }
  // none found, consider the whole object a row
  return [json];
}

function quoteKeys(input) { return input.replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g, '"$2": '); }

function removeTrailingComma(input) { if (input.slice(-1) == ",") { return input.slice(0,-1); } else { return input; } }

function isJSONLines(string) { return !!(string.match(/\}\s+\{/)) }

function linesToJSON(string) { return "[" + string.replace(/\}\s+\{/g, "}, {") + "]"; }

function jsonFrom(input) {
  var string = $.trim(input);
  if (!string) return;
  var result = null;
  try { result = JSON.parse(string); } catch (err) { console.log(err); }
  if (result == null) {
    console.log("Parse failed, retrying after forcibly quoting keys and removing trailing commas...");
    var relaxed = quoteKeys(removeTrailingComma(string));
    try { result = JSON.parse(relaxed); console.log("Yep: quoting keys and removing trailing commas worked!"); }
    catch (err) { console.log(err); }
  }
  if ((result == null) && isJSONLines(string)) {
    console.log("Parse failed. Looks like it might be JSON lines, retrying...");
    var lines = linesToJSON(string);
    try { result = JSON.parse(lines); console.log("Yep: it was JSON lines!"); }
    catch (err) { console.log(err); if (lines.length < 5000) console.log(lines); }
  }
  if (result == null) { console.log("Nope: that didn't work either. No good."); }
  return result;
}
