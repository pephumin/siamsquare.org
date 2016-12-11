
// back to top

$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $(".scroll-to-top").fadeIn()
    } else {
      $(".scroll-to-top").fadeOut()
    }
  });
  $(".scroll-to-top").click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, 800);
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

function catch_click(e) {
  if (!e) var e = window.event;
  var right_click = (e.which ? (e.which == 3) : (e.button == 2));
  if (right_click) { alert('Right clicking on this page is not allowed.'); return false; }
}
document.onmousedown = catch_click;
if (document.captureEvents) document.captureEvents(Event.MOUSEDOWN);
