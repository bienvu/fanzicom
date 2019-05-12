(function (window, document, $) {
  "use strict";
  
  // Back to top.
  if ($('.js-back-to-top').length) {
    var scrollTrigger = 200, // px
      backToTop = function () {
          var scrollTop = $(window).scrollTop();
          if (scrollTop > scrollTrigger) {
              $('.js-back-to-top').addClass('show');
          } else {
              $('.js-back-to-top').removeClass('show');
          }
      };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('.js-back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
  }
})(this, this.document, this.jQuery);
  