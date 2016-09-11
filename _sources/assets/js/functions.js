
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

// anchor link

anchors.options = {
  placement: 'right',
  visible: 'hover'
};
anchors.add('h2, h3, h4');


// tooltip

$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});


// notification box

function notifyBox(title, text, image) {
  Notification({
      title: title,
      text: text,
      image: image,
      inAnimation: "bounce",
      outAnimation: "zoomOut",
      position: 2
  });
}

$(document).ready(function() {

  // show the first notification
  notifyBox("Title 1", "Image size is 50px x 50px", "assets/img/notification.svg");

  // show the second one with 1 second delay
  $(this).delay(1000).queue(function() {
     notifyBox("Title 2", "jQuery events and functions like in the example above.", "assets/img/notification.svgg");
     $(this).dequeue();
  });

  // show the third one with another 1 second delay
  $(this).delay(1000).queue(function() {
     notifyBox("Title 3", "Can it be another one?", "");
     $(this).dequeue();
  });

});
