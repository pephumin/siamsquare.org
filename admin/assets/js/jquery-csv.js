/**
 * jQuery-csv (jQuery Plugin)
 * version: 0.70 (2012-11-04)
 *
 * This document is licensed as free software under the terms of the
 * MIT License: http://www.opensource.org/licenses/mit-license.php
 *
 * Acknowledgements:
 * The original design and influence to implement this library as a jquery
 * plugin is influenced by jquery-json (http://code.google.com/p/jquery-json/).
 * If you're looking to use native JSON.Stringify but want additional backwards
 * compatibility for browsers that don't support it, I highly recommend you
 * check it out.
 *
 * A special thanks goes out to rwk@acm.org for providing a lot of valuable
 * feedback to the project including the core for the new FSM
 * (Finite State Machine) parsers. If you're looking for a stable TSV parser
 * be sure to take a look at jquery-tsv (http://code.google.com/p/jquery-tsv/).

 * For legal purposes I'll include the "NO WARRANTY EXPRESSED OR IMPLIED.
 * USE AT YOUR OWN RISK.". Which, in 'layman's terms' means, by using this
 * library you are accepting responsibility if it breaks your code.
 *
 * Legal jargon aside, I will do my best to provide a useful and stable core
 * that can effectively be built on.
 *
 * Copyrighted 2012 by Evan Plaice.
 */

RegExp.escape= function(s) { return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'); };

(function (undefined) {
  'use strict'
  var $;
  if (typeof jQuery !== 'undefined' && jQuery) { $ = jQuery; }
  else { $ = {}; }

  $.csv = {
    defaults: { separator:',', delimiter:'"', headers:true },
    hooks: {
      castToScalar: function(value, state) {
        var hasDot = /\./;
        if (isNaN(value)) { return value; }
        else {
          if (hasDot.test(value)) { return parseFloat(value); }
          else {
            var integer = parseInt(value);
            if (isNaN(integer)) { return null; }
            else { return integer; }
          }
        }
      }
    },

    parsers: {
      parse: function(csv, options) {
        var separator = options.separator;
        var delimiter = options.delimiter;
        if (!options.state.rowNum) { options.state.rowNum = 1; }
        if (!options.state.colNum) { options.state.colNum = 1; }
        var data = [];
        var entry = [];
        var state = 0;
        var value = '';
        var exit = false;
        function endOfEntry() {
          state = 0;
          value = '';
          if (options.start && options.state.rowNum < options.start) { entry = []; options.state.rowNum++; options.state.colNum = 1; return; }
          if (options.onParseEntry === undefined) { data.push(entry); }
          else {
            var hookVal = options.onParseEntry(entry, options.state);
            if (hookVal !== false) { data.push(hookVal); }
          }
          //console.log('entry:' + entry);
          entry = [];
          if (options.end && options.state.rowNum >= options.end) { exit = true; }
          options.state.rowNum++;
          options.state.colNum = 1;
        }

        function endOfValue() {
          if (options.onParseValue === undefined) { entry.push(value); }
          else {
            var hook = options.onParseValue(value, options.state);
            if (hook !== false) { entry.push(hook); }
          }
          //console.log('value:' + value);
          value = '';
          state = 0;
          options.state.colNum++;
        }
        var escSeparator = RegExp.escape(separator);
        var escDelimiter = RegExp.escape(delimiter);
        var match = /(D|S|\r\n|\n|\r|[^DS\r\n]+)/;
        var matchSrc = match.source;
        matchSrc = matchSrc.replace(/S/g, escSeparator);
        matchSrc = matchSrc.replace(/D/g, escDelimiter);
        match = RegExp(matchSrc, 'gm');
        csv.replace(match, function (m0) {
          if (exit) { return; }
          switch (state) {
            case 0: // the start of a value
              if (m0 === separator) { value += ''; endOfValue(); break; }
              if (m0 === delimiter) { state = 1; break; }
              if (/^(\r\n|\n|\r)$/.test(m0)) { endOfValue(); endOfEntry(); break; }
              value += m0;
              state = 3;
              break;
            case 1: // delimited input
              if (m0 === delimiter) { state = 2; break; }
              value += m0;
              state = 1;
              break;
            case 2: // delimiter found in delimited input
              if (m0 === delimiter) { value += m0; state = 1; break; }
              if (m0 === separator) { endOfValue(); break; }
              if (/^(\r\n|\n|\r)$/.test(m0)) { endOfValue(); endOfEntry(); break; }
              throw new Error('CSVDataError: Illegal State [Row:' + options.state.rowNum + '][Col:' + options.state.colNum + ']');
            case 3: // un-delimited input
              if (m0 === separator) { endOfValue(); break; }
              if (/^(\r\n|\n|\r)$/.test(m0)) { endOfValue(); endOfEntry(); break; }
              if (m0 === delimiter) { throw new Error('CSVDataError: Illegal Quote [Row:' + options.state.rowNum + '][Col:' + options.state.colNum + ']'); }
              throw new Error('CSVDataError: Illegal Data [Row:' + options.state.rowNum + '][Col:' + options.state.colNum + ']');
            default: // shenanigans
              throw new Error('CSVDataError: Unknown State [Row:' + options.state.rowNum + '][Col:' + options.state.colNum + ']');
          }
          //console.log('val:' + m0 + ' state:' + state);
        });
        if(entry.length !== 0) { endOfValue(); endOfEntry(); }
        return data;
      },
      splitLines: function(csv, options) {
        var separator = options.separator;
        var delimiter = options.delimiter;
        if (!options.state.rowNum) { options.state.rowNum = 1; }
        var entries = [];
        var state = 0;
        var entry = '';
        var exit = false;
        function endOfLine() {
          state = 0;
          if (options.start && options.state.rowNum < options.start) { entry = ''; options.state.rowNum++; return; }
          if (options.onParseEntry === undefined) { entries.push(entry); }
          else {
            var hookVal = options.onParseEntry(entry, options.state);
            if (hookVal !== false) { entries.push(hookVal); }
          }
          entry = '';
          if (options.end && options.state.rowNum >= options.end) { exit = true; }
          options.state.rowNum++;
        }
        var escSeparator = RegExp.escape(separator);
        var escDelimiter = RegExp.escape(delimiter);
        var match = /(D|S|\n|\r|[^DS\r\n]+)/;
        var matchSrc = match.source;
        matchSrc = matchSrc.replace(/S/g, escSeparator);
        matchSrc = matchSrc.replace(/D/g, escDelimiter);
        match = RegExp(matchSrc, 'gm');
        csv.replace(match, function (m0) {
          if (exit) { return; }
          switch (state) {
            case 0: // the start of a value/entry
              if (m0 === separator) { entry += m0; state = 0; break; }
              if (m0 === delimiter) { entry += m0; state = 1; break; }
              if (m0 === '\n') { endOfLine(); break; }
              if (/^\r$/.test(m0)) { break; }
              entry += m0;
              state = 3;
              break;
            case 1: // delimited input
              if (m0 === delimiter) { entry += m0; state = 2; break; }
              entry += m0;
              state = 1;
              break;
            case 2: // delimiter found in delimited input
              var prevChar = entry.substr(entry.length - 1);
              if (m0 === delimiter && prevChar === delimiter) { entry += m0; state = 1; break; }
              if (m0 === separator) { entry += m0; state = 0; break; }
              if (m0 === '\n') { endOfLine(); break; }
              if (m0 === '\r') { break; }
              throw new Error('CSVDataError: Illegal state [Row:' + options.state.rowNum + ']');
            case 3: // un-delimited input
              if (m0 === separator) { entry += m0; state = 0; break; }
              if (m0 === '\n') { endOfLine(); break; }
              if (m0 === '\r') { break; }
              if (m0 === delimiter) { throw new Error('CSVDataError: Illegal quote [Row:' + options.state.rowNum + ']'); }
              throw new Error('CSVDataError: Illegal state [Row:' + options.state.rowNum + ']');
            default: // shenanigans
              throw new Error('CSVDataError: Unknown state [Row:' + options.state.rowNum + ']');
          }
          //console.log('val:' + m0 + ' state:' + state);
        });
        if (entry !== '') { endOfLine(); }
        return entries;
      },

      parseEntry: function(csv, options) {
        var separator = options.separator;
        var delimiter = options.delimiter;
        if (!options.state.rowNum) { options.state.rowNum = 1; }
        if (!options.state.colNum) { options.state.colNum = 1; }
        var entry = [];
        var state = 0;
        var value = '';
        function endOfValue() {
          if (options.onParseValue === undefined) { entry.push(value); }
          else {
            var hook = options.onParseValue(value, options.state);
            if (hook !== false) { entry.push(hook); }
          }
          value = '';
          state = 0;
          options.state.colNum++;
        }
        if (!options.match) {
          var escSeparator = RegExp.escape(separator);
          var escDelimiter = RegExp.escape(delimiter);
          var match = /(D|S|\n|\r|[^DS\r\n]+)/;
          var matchSrc = match.source;
          matchSrc = matchSrc.replace(/S/g, escSeparator);
          matchSrc = matchSrc.replace(/D/g, escDelimiter);
          options.match = RegExp(matchSrc, 'gm');
        }

        // put on your fancy pants...
        // process control chars individually, use look-ahead on non-control chars
        csv.replace(options.match, function (m0) {
          switch (state) {

            case 0: // the start of a value
              if (m0 === separator) { value += ''; endOfValue(); break; }
              if (m0 === delimiter) { state = 1; break; }
              if (m0 === '\n' || m0 === '\r') { break; }
              value += m0;
              state = 3;
              break;
            case 1: // delimited input
              if (m0 === delimiter) { state = 2; break; }
              value += m0;
              state = 1;
              break;
            case 2: // delimiter found in delimited input
              if (m0 === delimiter) { value += m0; state = 1; break; }
              if (m0 === separator) { endOfValue(); break; }
              if (m0 === '\n' || m0 === '\r') { break; }
              throw new Error('CSVDataError: Illegal State [Row:' + options.state.rowNum + '][Col:' + options.state.colNum + ']');
            case 3:
              if (m0 === separator) { endOfValue(); break; }
              if (m0 === '\n' || m0 === '\r') { break; }
              if (m0 === delimiter) { throw new Error('CSVDataError: Illegal Quote [Row:' + options.state.rowNum + '][Col:' + options.state.colNum + ']'); }
              throw new Error('CSVDataError: Illegal Data [Row:' + options.state.rowNum + '][Col:' + options.state.colNum + ']');
            default: // shenanigans
              throw new Error('CSVDataError: Unknown State [Row:' + options.state.rowNum + '][Col:' + options.state.colNum + ']');
          }
          //console.log('val:' + m0 + ' state:' + state);
        });
        endOfValue();
        return entry;
      }
    },

    helpers: {

      collectPropertyNames: function (objects) {
        var o, propName, props = [];
        for (o in objects) {
          for (propName in objects[o]) {
            if ((objects[o].hasOwnProperty(propName))
                && (props.indexOf(propName) < 0)
                && (typeof objects[o][propName] !== 'function')) { props.push(propName); }
          }
        }
        return props;
      }
    },

    toArray: function(csv, options, callback) {
      var options = (options !== undefined ? options : {});
      var config = {};
      config.callback = ((callback !== undefined && typeof(callback) === 'function') ? callback : false);
      config.separator = 'separator' in options ? options.separator : $.csv.defaults.separator;
      config.delimiter = 'delimiter' in options ? options.delimiter : $.csv.defaults.delimiter;
      var state = (options.state !== undefined ? options.state : {});
      var options = {
        delimiter: config.delimiter,
        separator: config.separator,
        onParseEntry: options.onParseEntry,
        onParseValue: options.onParseValue,
        state: state
      }
      var entry = $.csv.parsers.parseEntry(csv, options);
      if (!config.callback) { return entry; }
      else { config.callback('', entry); }
    },

    toArrays: function(csv, options, callback) {
      var options = (options !== undefined ? options : {});
      var config = {};
      config.callback = ((callback !== undefined && typeof(callback) === 'function') ? callback : false);
      config.separator = 'separator' in options ? options.separator : $.csv.defaults.separator;
      config.delimiter = 'delimiter' in options ? options.delimiter : $.csv.defaults.delimiter;
      var data = [];
      var options = {
        delimiter: config.delimiter,
        separator: config.separator,
        onPreParse: options.onPreParse,
        onParseEntry: options.onParseEntry,
        onParseValue: options.onParseValue,
        onPostParse: options.onPostParse,
        start: options.start,
        end: options.end,
        state: {
          rowNum: 1,
          colNum: 1
        }
      };
      if (options.onPreParse !== undefined) { options.onPreParse(csv, options.state); }
      data = $.csv.parsers.parse(csv, options);
      if (options.onPostParse !== undefined) { options.onPostParse(data, options.state); }
      if (!config.callback) { return data; }
      else { config.callback('', data); }
    },

    toObjects: function(csv, options, callback) {
      var options = (options !== undefined ? options : {});
      var config = {};
      config.callback = ((callback !== undefined && typeof(callback) === 'function') ? callback : false);
      config.separator = 'separator' in options ? options.separator : $.csv.defaults.separator;
      config.delimiter = 'delimiter' in options ? options.delimiter : $.csv.defaults.delimiter;
      config.headers = 'headers' in options ? options.headers : $.csv.defaults.headers;
      options.start = 'start' in options ? options.start : 1;
      if (config.headers) { options.start++; }
      if (options.end && config.headers) { options.end++; }
      var lines = [];
      var data = [];
      var options = {
        delimiter: config.delimiter,
        separator: config.separator,
        onPreParse: options.onPreParse,
        onParseEntry: options.onParseEntry,
        onParseValue: options.onParseValue,
        onPostParse: options.onPostParse,
        start: options.start,
        end: options.end,
        state: {
          rowNum: 1,
          colNum: 1
        },
        match: false,
        transform: options.transform
      };
      var headerOptions = {
        delimiter: config.delimiter,
        separator: config.separator,
        start: 1,
        end: 1,
        state: {
          rowNum:1,
          colNum:1
        }
      }
      if (options.onPreParse !== undefined) { options.onPreParse(csv, options.state); }
      var headerLine = $.csv.parsers.splitLines(csv, headerOptions);
      var headers = $.csv.toArray(headerLine[0], options);
      var lines = $.csv.parsers.splitLines(csv, options);
      options.state.colNum = 1;
      if (headers){ options.state.rowNum = 2; }
      else { options.state.rowNum = 1; }
      for(var i=0, len=lines.length; i<len; i++) {
        var entry = $.csv.toArray(lines[i], options);
        var object = {};
        for (var j in headers) { object[headers[j]] = entry[j]; }
        if (options.transform !== undefined) { data.push(options.transform.call(undefined, object)); }
        else { data.push(object); }
        options.state.rowNum++;
      }
      if (options.onPostParse !== undefined) { options.onPostParse(data, options.state); }
      if (!config.callback) { return data; }
      else { config.callback('', data); }
    },
    fromArrays: function(arrays, options, callback) {
      var options = (options !== undefined ? options : {});
      var config = {};
      config.callback = ((callback !== undefined && typeof(callback) === 'function') ? callback : false);
      config.separator = 'separator' in options ? options.separator : $.csv.defaults.separator;
      config.delimiter = 'delimiter' in options ? options.delimiter : $.csv.defaults.delimiter;
      var output = '',
          line,
          lineValues,
          i, j;
      for (i = 0; i < arrays.length; i++) {
        line = arrays[i];
        lineValues = [];
        for (j = 0; j < line.length; j++) {
          var strValue = (line[j] === undefined || line[j] === null)
                       ? ''
                       : line[j].toString();
          if (strValue.indexOf(config.delimiter) > -1) {
            var delRegex = new RegExp(config.delimiter, "g");
            strValue = strValue.replace(delRegex, config.delimiter + config.delimiter);
          }
          var escMatcher = '\n|\r|S|D';
          escMatcher = escMatcher.replace('S', config.separator);
          escMatcher = escMatcher.replace('D', config.delimiter);
          if (strValue.search(escMatcher) > -1) {
            strValue = config.delimiter + strValue + config.delimiter;
          }
          lineValues.push(strValue);
        }
        output += lineValues.join(config.separator) + '\r\n';
      }
      if (!config.callback) { return output; }
      else { config.callback('', output); }
    },
    fromObjects: function(objects, options, callback) {
      var options = (options !== undefined ? options : {});
      var config = {};
      config.callback = ((callback !== undefined && typeof(callback) === 'function') ? callback : false);
      config.separator = 'separator' in options ? options.separator : $.csv.defaults.separator;
      config.delimiter = 'delimiter' in options ? options.delimiter : $.csv.defaults.delimiter;
      config.headers = 'headers' in options ? options.headers : $.csv.defaults.headers;
      config.sortOrder = 'sortOrder' in options ? options.sortOrder : 'declare';
      config.manualOrder = 'manualOrder' in options ? options.manualOrder : [];
      config.transform = options.transform;
      config.justArrays = 'justArrays' in options ? options.justArrays : false;
      if (typeof config.manualOrder === 'string') { config.manualOrder = $.csv.toArray(config.manualOrder, config); }
      if (config.transform !== undefined) {
        var origObjects = objects;
        objects = [];
        var i;
        for (i = 0; i < origObjects.length; i++) { objects.push(config.transform.call(undefined, origObjects[i])); }
      }
      var props = $.csv.helpers.collectPropertyNames(objects);
      if (config.sortOrder === 'alpha') { props.sort(); } // else {} - nothing to do for 'declare' order
      if (config.manualOrder.length > 0) {
        var propsManual = [].concat(config.manualOrder);
        var p;
        for (p = 0; p < props.length; p++) { if (propsManual.indexOf( props[p] ) < 0) { propsManual.push( props[p] ); } }
        props = propsManual;
      }
      var o, p, line, output = [], propName;
      if (config.headers) { output.push(props); }
      for (o = 0; o < objects.length; o++) {
        line = [];
        for (p = 0; p < props.length; p++) {
          propName = props[p];
          if (propName in objects[o] && typeof objects[o][propName] !== 'function') { line.push(objects[o][propName]); }
          else { line.push(''); }
        }
        output.push(line);
      }
      if (config.justArrays) { return output; }
      return $.csv.fromArrays(output, options, config.callback);
    }
  };
  $.csvEntry2Array = $.csv.toArray;
  $.csv2Array = $.csv.toArrays;
  $.csv2Dictionary = $.csv.toObjects;
  if (typeof module !== 'undefined' && module.exports) { module.exports = $.csv; }
}).call( this );
