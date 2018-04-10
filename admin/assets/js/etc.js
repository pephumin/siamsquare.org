
// back to top

$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) { $(".scroll-to-top").fadeIn() }
    else { $(".scroll-to-top").fadeOut() }
  });
  $(".scroll-to-top").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false
  })
});


// firebase

var config = {
  apiKey: "AIzaSyBhLjEc1SwSq06Pg494R6pdM2NqLHF8Ag0",
  authDomain: "siamsquare-6f543.firebaseapp.com",
  databaseURL: "https://siamsquare-6f543.firebaseio.com",
  storageBucket: "siamsquare-6f543.appspot.com",
  messagingSenderId: "485767684184"
};
firebase.initializeApp(config);


// google analytics

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-82554411-3', 'auto');
ga('send', 'pageview');


// notification

Notification = window.Notification || {};
Notification = function () {
  'use strict';
  var number = 0;
  var incPosition = 0;
  var template = function (title, text, image, position) {
    incPosition = number * 90;
    number = number + 1;
    var textHtml = '<div class="ntext">' + text + '</div>';
    var titleHtml = (!title ? '' : '<div class="ntitle">' + title + '</div>');
    var imageHtml = (!image ? '' : '<div class="nimg"><img src="' + image + '" width="40" height="40" /></div>');
    var style;
    switch (parseInt(position, 10)) {
      case 1: style = "top:" + incPosition + "px; left:20px;"; break;
      case 2: style = "top:" + incPosition + "px; right:20px;"; break;
      case 3: style = "bottom:" + incPosition + "px; right:20px;"; break;
      case 4: style = "bottom:" + incPosition + "px; left:20px;"; break;
    }
    return {
      id: number,
      content: '<div class="notification notification-' + number + ' " style="' + style + '">' +
      imageHtml +
      '<div class="text">' + titleHtml + textHtml + '</div>' +
      '</div>'
    };
  };
  var hide = function (id, outAnimation) {
    var notification = $(document).find('.notification-' + id);
    notification.addClass(outAnimation);
    $(document).find('.notification').css('top', '-=90px');
    number -= 1;
    setTimeout(function () { notification.remove(); }, 3000);
  };
  var create = function (config) {
    var notification = template(config.title, config.text, config.image, config.position);
    $(notification.content).addClass('animated ' + config.inAnimation).appendTo('body');
    setTimeout(function () { hide(notification.id, config.outAnimation); }, config.delay * 1500 || 7000);
  };
  return create;
}();


// no right click

// function catch_click(e) {
//   if (!e) var e = window.event;
//   var right_click = (e.which ? (e.which == 3) : (e.button == 2));
//   if (right_click) { alert('Right clicking on this page is not allowed.'); return false; }
// }
// document.onmousedown = catch_click;
// if (document.captureEvents) document.captureEvents(Event.MOUSEDOWN);


// highlights.js

var hljs=new function(){function m(p){return p.replace(/&/gm,"&amp;").replace(/</gm,"&lt;")}function f(r,q,p){return RegExp(q,"m"+(r.cI?"i":"")+(p?"g":""))}function b(r){for(var p=0;p<r.childNodes.length;p++){var q=r.childNodes[p];if(q.nodeName=="CODE"){return q}if(!(q.nodeType==3&&q.nodeValue.match(/\s+/))){break}}}function h(t,s){var p="";for(var r=0;r<t.childNodes.length;r++){if(t.childNodes[r].nodeType==3){var q=t.childNodes[r].nodeValue;if(s){q=q.replace(/\n/g,"")}p+=q}else{if(t.childNodes[r].nodeName=="BR"){p+="\n"}else{p+=h(t.childNodes[r])}}}if(/MSIE [678]/.test(navigator.userAgent)){p=p.replace(/\r/g,"\n")}return p}function a(s){var r=s.className.split(/\s+/);r=r.concat(s.parentNode.className.split(/\s+/));for(var q=0;q<r.length;q++){var p=r[q].replace(/^language-/,"");if(e[p]){return p}}}function c(q){var p=[];(function(s,t){for(var r=0;r<s.childNodes.length;r++){if(s.childNodes[r].nodeType==3){t+=s.childNodes[r].nodeValue.length}else{if(s.childNodes[r].nodeName=="BR"){t+=1}else{if(s.childNodes[r].nodeType==1){p.push({event:"start",offset:t,node:s.childNodes[r]});t=arguments.callee(s.childNodes[r],t);p.push({event:"stop",offset:t,node:s.childNodes[r]})}}}}return t})(q,0);return p}function k(y,w,x){var q=0;var z="";var s=[];function u(){if(y.length&&w.length){if(y[0].offset!=w[0].offset){return(y[0].offset<w[0].offset)?y:w}else{return w[0].event=="start"?y:w}}else{return y.length?y:w}}function t(D){var A="<"+D.nodeName.toLowerCase();for(var B=0;B<D.attributes.length;B++){var C=D.attributes[B];A+=" "+C.nodeName.toLowerCase();if(C.value!==undefined&&C.value!==false&&C.value!==null){A+='="'+m(C.value)+'"'}}return A+">"}while(y.length||w.length){var v=u().splice(0,1)[0];z+=m(x.substr(q,v.offset-q));q=v.offset;if(v.event=="start"){z+=t(v.node);s.push(v.node)}else{if(v.event=="stop"){var p,r=s.length;do{r--;p=s[r];z+=("</"+p.nodeName.toLowerCase()+">")}while(p!=v.node);s.splice(r,1);while(r<s.length){z+=t(s[r]);r++}}}}return z+m(x.substr(q))}function j(){function q(x,y,v){if(x.compiled){return}var u;var s=[];if(x.k){x.lR=f(y,x.l||hljs.IR,true);for(var w in x.k){if(!x.k.hasOwnProperty(w)){continue}if(x.k[w] instanceof Object){u=x.k[w]}else{u=x.k;w="keyword"}for(var r in u){if(!u.hasOwnProperty(r)){continue}x.k[r]=[w,u[r]];s.push(r)}}}if(!v){if(x.bWK){x.b="\\b("+s.join("|")+")\\s"}x.bR=f(y,x.b?x.b:"\\B|\\b");if(!x.e&&!x.eW){x.e="\\B|\\b"}if(x.e){x.eR=f(y,x.e)}}if(x.i){x.iR=f(y,x.i)}if(x.r===undefined){x.r=1}if(!x.c){x.c=[]}x.compiled=true;for(var t=0;t<x.c.length;t++){if(x.c[t]=="self"){x.c[t]=x}q(x.c[t],y,false)}if(x.starts){q(x.starts,y,false)}}for(var p in e){if(!e.hasOwnProperty(p)){continue}q(e[p].dM,e[p],true)}}function d(B,C){if(!j.called){j();j.called=true}function q(r,M){for(var L=0;L<M.c.length;L++){if((M.c[L].bR.exec(r)||[null])[0]==r){return M.c[L]}}}function v(L,r){if(D[L].e&&D[L].eR.test(r)){return 1}if(D[L].eW){var M=v(L-1,r);return M?M+1:0}return 0}function w(r,L){return L.i&&L.iR.test(r)}function K(N,O){var M=[];for(var L=0;L<N.c.length;L++){M.push(N.c[L].b)}var r=D.length-1;do{if(D[r].e){M.push(D[r].e)}r--}while(D[r+1].eW);if(N.i){M.push(N.i)}return f(O,M.join("|"),true)}function p(M,L){var N=D[D.length-1];if(!N.t){N.t=K(N,E)}N.t.lastIndex=L;var r=N.t.exec(M);return r?[M.substr(L,r.index-L),r[0],false]:[M.substr(L),"",true]}function z(N,r){var L=E.cI?r[0].toLowerCase():r[0];var M=N.k[L];if(M&&M instanceof Array){return M}return false}function F(L,P){L=m(L);if(!P.k){return L}var r="";var O=0;P.lR.lastIndex=0;var M=P.lR.exec(L);while(M){r+=L.substr(O,M.index-O);var N=z(P,M);if(N){x+=N[1];r+='<span class="'+N[0]+'">'+M[0]+"</span>"}else{r+=M[0]}O=P.lR.lastIndex;M=P.lR.exec(L)}return r+L.substr(O,L.length-O)}function J(L,M){if(M.sL&&e[M.sL]){var r=d(M.sL,L);x+=r.keyword_count;return r.value}else{return F(L,M)}}function I(M,r){var L=M.cN?'<span class="'+M.cN+'">':"";if(M.rB){y+=L;M.buffer=""}else{if(M.eB){y+=m(r)+L;M.buffer=""}else{y+=L;M.buffer=r}}D.push(M);A+=M.r}function G(N,M,Q){var R=D[D.length-1];if(Q){y+=J(R.buffer+N,R);return false}var P=q(M,R);if(P){y+=J(R.buffer+N,R);I(P,M);return P.rB}var L=v(D.length-1,M);if(L){var O=R.cN?"</span>":"";if(R.rE){y+=J(R.buffer+N,R)+O}else{if(R.eE){y+=J(R.buffer+N,R)+O+m(M)}else{y+=J(R.buffer+N+M,R)+O}}while(L>1){O=D[D.length-2].cN?"</span>":"";y+=O;L--;D.length--}var r=D[D.length-1];D.length--;D[D.length-1].buffer="";if(r.starts){I(r.starts,"")}return R.rE}if(w(M,R)){throw"Illegal"}}var E=e[B];var D=[E.dM];var A=0;var x=0;var y="";try{var s,u=0;E.dM.buffer="";do{s=p(C,u);var t=G(s[0],s[1],s[2]);u+=s[0].length;if(!t){u+=s[1].length}}while(!s[2]);if(D.length>1){throw"Illegal"}return{r:A,keyword_count:x,value:y}}catch(H){if(H=="Illegal"){return{r:0,keyword_count:0,value:m(C)}}else{throw H}}}function g(t){var p={keyword_count:0,r:0,value:m(t)};var r=p;for(var q in e){if(!e.hasOwnProperty(q)){continue}var s=d(q,t);s.language=q;if(s.keyword_count+s.r>r.keyword_count+r.r){r=s}if(s.keyword_count+s.r>p.keyword_count+p.r){r=p;p=s}}if(r.language){p.second_best=r}return p}function i(r,q,p){if(q){r=r.replace(/^((<[^>]+>|\t)+)/gm,function(t,w,v,u){return w.replace(/\t/g,q)})}if(p){r=r.replace(/\n/g,"<br>")}return r}function n(t,w,r){var x=h(t,r);var v=a(t);var y,s;if(v){y=d(v,x)}else{return}var q=c(t);if(q.length){s=document.createElement("pre");s.innerHTML=y.value;y.value=k(q,c(s),x)}y.value=i(y.value,w,r);var u=t.className;if(!u.match("(\\s|^)(language-)?"+v+"(\\s|$)")){u=u?(u+" "+v):v}if(/MSIE [678]/.test(navigator.userAgent)&&t.tagName=="CODE"&&t.parentNode.tagName=="PRE"){s=t.parentNode;var p=document.createElement("div");p.innerHTML="<pre><code>"+y.value+"</code></pre>";t=p.firstChild.firstChild;p.firstChild.cN=s.cN;s.parentNode.replaceChild(p.firstChild,s)}else{t.innerHTML=y.value}t.className=u;t.result={language:v,kw:y.keyword_count,re:y.r};if(y.second_best){t.second_best={language:y.second_best.language,kw:y.second_best.keyword_count,re:y.second_best.r}}}function o(){if(o.called){return}o.called=true;var r=document.getElementsByTagName("pre");for(var p=0;p<r.length;p++){var q=b(r[p]);if(q){n(q,hljs.tabReplace)}}}function l(){if(window.addEventListener){window.addEventListener("DOMContentLoaded",o,false);window.addEventListener("load",o,false)}else{if(window.attachEvent){window.attachEvent("onload",o)}else{window.onload=o}}}var e={};this.LANGUAGES=e;this.highlight=d;this.highlightAuto=g;this.fixMarkup=i;this.highlightBlock=n;this.initHighlighting=o;this.initHighlightingOnLoad=l;this.IR="[a-zA-Z][a-zA-Z0-9_]*";this.UIR="[a-zA-Z_][a-zA-Z0-9_]*";this.NR="\\b\\d+(\\.\\d+)?";this.CNR="\\b(0[xX][a-fA-F0-9]+|(\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)";this.BNR="\\b(0b[01]+)";this.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|\\.|-|-=|/|/=|:|;|<|<<|<<=|<=|=|==|===|>|>=|>>|>>=|>>>|>>>=|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";this.ER="(?![\\s\\S])";this.BE={b:"\\\\.",r:0};this.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[this.BE],r:0};this.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[this.BE],r:0};this.CLCM={cN:"comment",b:"//",e:"$"};this.CBLCLM={cN:"comment",b:"/\\*",e:"\\*/"};this.HCM={cN:"comment",b:"#",e:"$"};this.NM={cN:"number",b:this.NR,r:0};this.CNM={cN:"number",b:this.CNR,r:0};this.BNM={cN:"number",b:this.BNR,r:0};this.inherit=function(r,s){var p={};for(var q in r){p[q]=r[q]}if(s){for(var q in s){p[q]=s[q]}}return p}}();hljs.LANGUAGES.cpp=function(){var a={keyword:{"false":1,"int":1,"float":1,"while":1,"private":1,"char":1,"catch":1,"export":1,virtual:1,operator:2,sizeof:2,dynamic_cast:2,typedef:2,const_cast:2,"const":1,struct:1,"for":1,static_cast:2,union:1,namespace:1,unsigned:1,"long":1,"throw":1,"volatile":2,"static":1,"protected":1,bool:1,template:1,mutable:1,"if":1,"public":1,friend:2,"do":1,"return":1,"goto":1,auto:1,"void":2,"enum":1,"else":1,"break":1,"new":1,extern:1,using:1,"true":1,"class":1,asm:1,"case":1,typeid:1,"short":1,reinterpret_cast:2,"default":1,"double":1,register:1,explicit:1,signed:1,typename:1,"try":1,"this":1,"switch":1,"continue":1,wchar_t:1,inline:1,"delete":1,alignof:1,char16_t:1,char32_t:1,constexpr:1,decltype:1,noexcept:1,nullptr:1,static_assert:1,thread_local:1,restrict:1,_Bool:1,complex:1},built_in:{std:1,string:1,cin:1,cout:1,cerr:1,clog:1,stringstream:1,istringstream:1,ostringstream:1,auto_ptr:1,deque:1,list:1,queue:1,stack:1,vector:1,map:1,set:1,bitset:1,multiset:1,multimap:1,unordered_set:1,unordered_map:1,unordered_multiset:1,unordered_multimap:1,array:1,shared_ptr:1}};return{dM:{k:a,i:"</",c:[hljs.CLCM,hljs.CBLCLM,hljs.QSM,{cN:"string",b:"'\\\\?.",e:"'",i:"."},{cN:"number",b:"\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)"},hljs.CNM,{cN:"preprocessor",b:"#",e:"$"},{cN:"stl_container",b:"\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",e:">",k:a,r:10,c:["self"]}]}}}();hljs.LANGUAGES.r={dM:{c:[hljs.HCM,{cN:"number",b:"\\b0[xX][0-9a-fA-F]+[Li]?\\b",e:hljs.IMMEDIATE_RE,r:0},{cN:"number",b:"\\b\\d+(?:[eE][+\\-]?\\d*)?L\\b",e:hljs.IMMEDIATE_RE,r:0},{cN:"number",b:"\\b\\d+\\.(?!\\d)(?:i\\b)?",e:hljs.IMMEDIATE_RE,r:1},{cN:"number",b:"\\b\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d*)?i?\\b",e:hljs.IMMEDIATE_RE,r:0},{cN:"number",b:"\\.\\d+(?:[eE][+\\-]?\\d*)?i?\\b",e:hljs.IMMEDIATE_RE,r:1},{cN:"keyword",b:"(?:tryCatch|library|setGeneric|setGroupGeneric)\\b",e:hljs.IMMEDIATE_RE,r:10},{cN:"keyword",b:"\\.\\.\\.",e:hljs.IMMEDIATE_RE,r:10},{cN:"keyword",b:"\\.\\.\\d+(?![\\w.])",e:hljs.IMMEDIATE_RE,r:10},{cN:"keyword",b:"\\b(?:function)",e:hljs.IMMEDIATE_RE,r:2},{cN:"keyword",b:"(?:if|in|break|next|repeat|else|for|return|switch|while|try|stop|warning|require|attach|detach|source|setMethod|setClass)\\b",e:hljs.IMMEDIATE_RE,r:1},{cN:"literal",b:"(?:NA|NA_integer_|NA_real_|NA_character_|NA_complex_)\\b",e:hljs.IMMEDIATE_RE,r:10},{cN:"literal",b:"(?:NULL|TRUE|FALSE|T|F|Inf|NaN)\\b",e:hljs.IMMEDIATE_RE,r:1},{cN:"identifier",b:"[a-zA-Z.][a-zA-Z0-9._]*\\b",e:hljs.IMMEDIATE_RE,r:0},{cN:"operator",b:"<\\-(?!\\s*\\d)",e:hljs.IMMEDIATE_RE,r:2},{cN:"operator",b:"\\->|<\\-",e:hljs.IMMEDIATE_RE,r:1},{cN:"operator",b:"%%|~",e:hljs.IMMEDIATE_RE},{cN:"operator",b:">=|<=|==|!=|\\|\\||&&|=|\\+|\\-|\\*|/|\\^|>|<|!|&|\\||\\$|:",e:hljs.IMMEDIATE_RE,r:0},{cN:"operator",b:"%",e:"%",i:"\\n",r:1},{cN:"identifier",b:"`",e:"`",r:0},{cN:"string",b:'"',e:'"',c:[hljs.BE],r:0},{cN:"string",b:"'",e:"'",c:[hljs.BE],r:0},{cN:"paren",b:"[[({\\])}]",e:hljs.IMMEDIATE_RE,r:0}]}};
hljs.initHighlightingOnLoad();

// topbar

// ;(function(window, document) {
//   'use strict'
//   ;(function() {
//     var lastTime = 0;
//     var vendors = ['ms', 'moz', 'webkit', 'o'];
//     for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
//       window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
//       window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
//     }
//     if (!window.requestAnimationFrame)
//       window.requestAnimationFrame = function(callback, element) {
//         var currTime = new Date().getTime();
//         var timeToCall = Math.max(0, 16 - (currTime - lastTime));
//         var id = window.setTimeout(function() { callback(currTime + timeToCall); }, timeToCall);
//         lastTime = currTime + timeToCall;
//         return id;
//       };
//     if (!window.cancelAnimationFrame) { window.cancelAnimationFrame = function(id) { clearTimeout(id); }; }
//   }());
//
//   var canvas, progressTimerId, fadeTimerId, currentProgress, showing, addEvent = function(elem, type, handler) {
//     if (elem.addEventListener) elem.addEventListener(type, handler, false)
//     else if (elem.attachEvent) elem.attachEvent('on' + type, handler)
//     else elem['on' + type] = handler
//   },
//   options = {
//     autoRun      : true,
//     barThickness : 2,
//     barColors    : {
//              '0' : 'rgba(75, 6, 27, .9)',
//            '.25' : 'rgba(100, 8, 36, .9)',
//            '.50' : 'rgba(150, 12, 53, .9)',
//            '.75' : 'rgba(171, 102, 123, .9)',
//            '1.0' : 'rgba(228, 136, 164, .9)'
//     },
//     shadowBlur   : 10,
//     shadowColor  : 'rgba(0, 0, 0, .6)'
//   },
//   repaint = function() {
//     canvas.width = window.innerWidth;
//     canvas.height = options.barThickness * 5; // need space for shadow
//     var ctx = canvas.getContext('2d');
//     ctx.shadowBlur = options.shadowBlur;
//     ctx.shadowColor = options.shadowColor;
//     var lineGradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
//     for (var stop in options.barColors) { lineGradient.addColorStop(stop, options.barColors[stop]); }
//     ctx.lineWidth = options.barThickness;
//     ctx.beginPath();
//     ctx.moveTo(0, options.barThickness/2);
//     ctx.lineTo(Math.ceil(currentProgress * canvas.width), options.barThickness/2);
//     ctx.strokeStyle = lineGradient;
//     ctx.stroke();
//   },
//   createCanvas = function() {
//     canvas = document.createElement('canvas')
//     var style = canvas.style
//     style.position = 'fixed'
//     style.top = style.left = style.right = style.margin = style.padding = 0
//     style.zIndex = 100001
//     style.display = 'none'
//     document.body.appendChild(canvas)
//     addEvent(window, 'resize', repaint)
//   },
//   topbar = {
//     config: function(opts) { for (var key in opts) { if (options.hasOwnProperty(key)) { options[key] = opts[key]; } } },
//     show: function() {
//       if (showing) { return; }
//       showing = true;
//       if (fadeTimerId !== null) { window.cancelAnimationFrame(fadeTimerId); }
//       if (!canvas) { createCanvas(); }
//       canvas.style.opacity = 1;
//       canvas.style.display = 'block';
//       topbar.progress(0);
//       if (options.autoRun) { (function loop() { progressTimerId = window.requestAnimationFrame(loop); topbar.progress('+' + (.05 * Math.pow(1-Math.sqrt(currentProgress), 2))) })() }
//     },
//     progress: function(to) {
//       if (typeof to === "undefined") { return currentProgress; }
//       if (typeof to === "string") { to = (to.indexOf('+') >= 0 || to.indexOf('-') >= 0 ? currentProgress : 0) + parseFloat(to); }
//       currentProgress = to > 1 ? 1 : to;
//       repaint();
//       return currentProgress;
//     },
//     hide: function() {
//       if (!showing) { return; }
//       showing = false;
//       if (progressTimerId != null) { window.cancelAnimationFrame(progressTimerId); progressTimerId = null; }
//       (function loop() {
//         if (topbar.progress('+.1') >= 1) { canvas.style.opacity -= .05; if (canvas.style.opacity <= .05) { canvas.style.display = 'none'; fadeTimerId = null; return; } }
//         fadeTimerId = window.requestAnimationFrame(loop);
//       })()
//     }
//   }
//   if (typeof module === 'object' && typeof module.exports === 'object') { module.exports = topbar }
//   else if (typeof define === 'function' && define.amd) { define(function() { return topbar }); }
//   else { this.topbar = topbar }
// }).call(this, window, document)
//
// $(document).ready(function() {
//   topbar.show();
//   setTimeout(function() { topbar.hide() }, 1500);
// });

// Open a new window.
function openNewWin(desktopURL, alternateWidth, alternateHeight, noScrollbars) {
	if ((alternateWidth && self.screen.availWidth * 0.8 < alternateWidth) || (alternateHeight && self.screen.availHeight * 0.8 < alternateHeight)) {
    noScrollbars = false;
		alternateWidth = Math.min(alternateWidth, self.screen.availWidth * 0.8);
		alternateHeight = Math.min(alternateHeight, self.screen.availHeight * 0.8);
	} else {
    noScrollbars = typeof(noScrollbars) == 'boolean' && noScrollbars == true;
  }
	window.open(desktopURL, 'requested_popup', 'toolbar=no,location=no,status=no,menubar=no,scrollbars=' + (noScrollbars ? 'no' : 'yes') + ',width=' + (alternateWidth ? alternateWidth : 480) + ',height=' + (alternateHeight ? alternateHeight : 220) + ',resizable=no');
	return false;
}
