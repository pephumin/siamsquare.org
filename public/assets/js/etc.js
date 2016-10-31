
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
