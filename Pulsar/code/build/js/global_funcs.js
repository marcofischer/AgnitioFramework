document.addEventListener('presentationInit', function() {

// Go Home



  $('#menu ul ul li, .local li').on('tap', function () { // target the children ul ul only and not top level

    // when clicking on menu, find the data-slideshow and data-content and take the user there

    app.goTo('pulsar', $(this).data('slideshow'), $(this).data('content'));

  });


  $('#goHome').on('tap', function () {
    app.goTo('pulsar', 'home', 'home_first');
  });

// Toggle Menu

  $('#toggleMenu').on('tap', function() {
     $('#menu').toggle();
  });

// Introduction Slide Down

  $('#menu li').eq(0).on('tap', function() {
        $(this).next().slideDown();
  });

// Local Implementation Slide Down

  $('#menu li').next().next().on('tap', function() {
        $(this).next().slideDown();
  });


});
