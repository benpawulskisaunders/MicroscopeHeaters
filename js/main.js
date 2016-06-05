// jQuery animated scroll for menu
$(function() {
  $('#primary-menu a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 100
        }, 1000);
        return false;
      }
    }
  });
});

// initiate slideshow
$(function() {
    $('#ei-slider').eislideshow({
      easing    : 'easeOutExpo',
      titleeasing : 'easeOutExpo',
      titlespeed  : 1200
    });
});


