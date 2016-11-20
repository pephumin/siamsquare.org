'use strict';

if (typeof exports === "undefined") { var exports = {}; }
if (typeof module === "undefined") { var module = {}; }

Object.defineProperty(exports, '__esModule', { value: true });

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var hasBlobConstructor = typeof Blob !== 'undefined' && (function () { try { return Boolean(new Blob()); } catch (e) { return false; } })();

var hasArrayBufferViewSupport = hasBlobConstructor && typeof Uint8Array !== 'undefined' && (function () { try { return new Blob([new Uint8Array(100)]).size === 100; } catch (e) { return false; } })();

var hasToBlobSupport = typeof HTMLCanvasElement !== "undefined" ? HTMLCanvasElement.prototype.toBlob : false;

var hasBlobSupport = hasToBlobSupport || typeof Uint8Array !== 'undefined' && typeof ArrayBuffer !== 'undefined' && typeof atob !== 'undefined';

var hasReaderSupport = typeof FileReader !== 'undefined' || typeof URL !== 'undefined';

var ImageTools = (function () {
  function ImageTools() { _classCallCheck(this, ImageTools); }
  _createClass(ImageTools, null, [{
    key: 'resize',
    value: function resize(file, maxDimensions, callback) {
      if (typeof maxDimensions === 'function') { callback = maxDimensions; maxDimensions = { width: 640, height: 480 }; }
      var maxWidth = maxDimensions.width;
      var maxHeight = maxDimensions.height;
      if (!ImageTools.isSupported() || !file.type.match(/image.*/)) { callback(file, false); return false; }
      if (file.type.match(/image\/gif/)) { callback(file, false); return false; } // Not attempting, could be an animated gif // TODO: use https://github.com/antimatter15/whammy to convert gif to webm
      var image = document.createElement('img');
      image.onload = function (imgEvt) {
        var width = image.width;
        var height = image.height;
        var isTooLarge = false;
        if (width > height && width > maxDimensions.width) { height *= maxDimensions.width / width; width = maxDimensions.width; isTooLarge = true; } // width is the largest dimension, and it's too big.
        else if (height > maxDimensions.height) { width *= maxDimensions.height / height; height = maxDimensions.height; isTooLarge = true; } // either width wasn't over-size or height is the largest dimension and the height is over-size
        if (!isTooLarge) { callback(file, false); return; } // early exit; no need to resize
        var canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        var ctx = canvas.getContext('2d');
        ctx.drawImage(image, 0, 0, width, height);
        if (hasToBlobSupport) { canvas.toBlob(function (blob) { callback(blob, true); }, file.type); }
        else { var blob = ImageTools._toBlob(canvas, file.type); callback(blob, true); }
      };
      ImageTools._loadImage(image, file); return true; }
    }, {
      key: '_toBlob',
      value: function _toBlob(canvas, type) {
        var dataURI = canvas.toDataURL(type);
        var dataURIParts = dataURI.split(',');
        var byteString = undefined;
        if (dataURIParts[0].indexOf('base64') >= 0) { byteString = atob(dataURIParts[1]); } // Convert base64 to raw binary data held in a string:
        else { byteString = decodeURIComponent(dataURIParts[1]); } // Convert base64/URLEncoded data component to raw binary data:
        var arrayBuffer = new ArrayBuffer(byteString.length);
        var intArray = new Uint8Array(arrayBuffer);
        for (var i = 0; i < byteString.length; i += 1) { intArray[i] = byteString.charCodeAt(i); }
        var mimeString = dataURIParts[0].split(':')[1].split(';')[0];
        var blob = null;
        if (hasBlobConstructor) { blob = new Blob([hasArrayBufferViewSupport ? intArray : arrayBuffer], { type: mimeString }); }
        else { var bb = new BlobBuilder(); bb.append(arrayBuffer); blob = bb.getBlob(mimeString); }
        return blob;
      }
    }, {
      key: '_loadImage',
      value: function _loadImage(image, file, callback) {
        if (typeof URL === 'undefined') { var reader = new FileReader(); reader.onload = function (evt) { image.src = evt.target.result; if (callback) { callback(); } }; reader.readAsDataURL(file); }
        else { image.src = URL.createObjectURL(file); if (callback) { callback(); } }
      }
    }, {
      key: 'isSupported',
      value: function isSupported() { return typeof HTMLCanvasElement !== 'undefined' && hasBlobSupport && hasReaderSupport; }
    }
  ]);
  return ImageTools;
})();

exports['default'] = ImageTools;
module.exports = exports['default'];
