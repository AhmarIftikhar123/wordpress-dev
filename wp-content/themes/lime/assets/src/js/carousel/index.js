(function ($) {
  class SlickCarousel {
    constructor() {
      $(".carousel").slick({
          autoplay: true,
          autoplaySpeed: 500
      });
    }
  }

  new SlickCarousel();
})(jQuery);
