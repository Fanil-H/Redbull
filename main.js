  $(document).ready(function(){
    $('.main-slider').bxSlider({
      slideWidth: 600,
      minSlides: 2,
      maxSlides: 2,
      slideMargin: 10,
      auto: true,
      speed: 2000,
      pause: 6000
    });
  });
  $('.slider-comments').bxSlider({
    adaptiveHeight: true,
    slideWidth: 500,
    auto: true,
    speed: 2000,
    pause: 6000,
    nextSelector:'#slider-next',
    prevSelector:'#slider-prev'
  });
  $('.bxslider').bxSlider({
    minSlides: 6,
    maxSlides: 6,
    slideWidth: 170,
    slideMargin: 10,
    ticker: true,
    speed: 9000
  });