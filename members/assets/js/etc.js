
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
