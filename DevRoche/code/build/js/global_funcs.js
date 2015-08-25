
document.addEventListener('presentationInit', function() {


// Go Home

  $('#goHome').on('tap', function () {
    app.goTo('devroche', 'placeholder', 'placeholder_first');
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

// Go to pages

  
  $('#menu ul ul li').eq(0).on('tap', function() { // Unmet need
  app.goTo('devroche', 'introduction', 'introduction_first');
  });

  $('#menu ul ul li').eq(1).on('tap', function() { // Outcomes
  app.goTo('devroche', 'introduction', 'introduction_second');
  });

  $('#menu ul ul li').eq(2).on('tap', function() { // Alignment
  app.goTo('devroche', 'introduction', 'alignment_first');
  });

  $('#menu ul ul li').eq(3).on('tap', function() { // Expertise in haem
  app.goTo('devroche', 'introduction', 'expertsinhaem_first');
  });


  $('#menu .local li').eq(0).on('tap', function() { // Expertise in haem
    console.log(this);
  app.goTo('devroche', 'localimplementatonfirst', 'localimplementaton_first');
  });

  $('#menu .local li').eq(1).on('tap', function() { // Expertise in haem
    console.log(this);
      app.goTo('devroche', 'localimplementatonfirst', 'localimplementaton_second');
  });  

/* Footer links */

  $('#mainfooter li').eq(0).on('tap', function() { // Expertise in haem
  app.goTo('devroche', 'references', 'references_only');
  });

  $('#mainfooter li').eq(1).on('tap', function() { // Expertise in haem
  app.goTo('devroche', 'resources', 'resources_home');
  });   


});
