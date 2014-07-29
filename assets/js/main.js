(function ($) {
  $("#slides").slidesjs({
    width: 400,
    height: 566,
    pagination: {
      active: false
    },
    navigation: {
      active: false,
      effect: 'slide'
    }
  });

  $("#slides a").click(function (e) {
    e.preventDefault();
  });
})(jQuery);
