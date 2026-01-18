(function ($) {

  "use strict";

  // PRE LOADER
  // Wait for Critical Images (Logo + First Slider) AND Fonts
  var criticalImages = ['images/logo.png', 'images/car_fal.webp'];
  var imagesLoaded = 0;
  var totalImages = criticalImages.length;
  var imagesReady = false;
  var fontsReady = false;
  var preloaderHidden = false;

  function attemptHidePreloader() {
    if (imagesReady && fontsReady && !preloaderHidden) {
      $('.preloader').fadeOut(1000);
      preloaderHidden = true;
    }
  }

  // 1. Check Fonts
  if (document.fonts) {
    document.fonts.ready.then(function () {
      fontsReady = true;
      attemptHidePreloader();
    });
  } else {
    // Fallback for older browsers
    fontsReady = true;
  }

  // 2. Check Images
  $.each(criticalImages, function (index, src) {
    var img = new Image();
    img.onload = img.onerror = function () {
      imagesLoaded++;
      if (imagesLoaded === totalImages) {
        imagesReady = true;
        attemptHidePreloader();
      }
    };
    img.src = src;
  });

  // 3. Safety timeout (3 seconds)
  setTimeout(function () {
    if (!preloaderHidden) {
      $('.preloader').fadeOut(1000);
      preloaderHidden = true;
    }
  }, 3000);


  //Navigation Section
  $('.navbar-collapse a').on('click', function () {
    $(".navbar-collapse").collapse('hide');
  });


  // Owl Carousel
  $('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    smartSpeed: 1000,
  })


  // PARALLAX EFFECT
  $.stellar();


  // SMOOTHSCROLL
  $(function () {
    $('.navbar-default a, #home a, footer a').on('click', function (event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 49
      }, 1000);
      event.preventDefault();
    });
  });


  // WOW ANIMATION
  new WOW({ mobile: false }).init();

})(jQuery);
