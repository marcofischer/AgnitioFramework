(function(global) {
  
  // Uncomment to see trace from framework in console
  // debug();
  
  // Creating our presentation and global namespace "app"
  global.app = new Presentation({
  //  globalElements: ['mainmenu', 'mainfooter', 'slidePopup', 'popupBackButton'],
    globalElements: ['mainfooter', 'slidePopup', 'popupBackButton'],
    slideshows: {
      references:      ['send_references'],
      introduction:    ['intro'],
      about: [slide_1]

    },
    collections: {
      placebo: [
        'references',
        'introduction',
        'slide_1'      ]
    }
  });
  
  // Initiate modules
  app.scroller = new Slidescroller();
  app.analytics.init();
  app.loader = new Loader({delay:1600});
  app.slidePopup = new SlidePopup('slidePopup');
/*  app.menu = new Menu({
    attachTo: 'placebo',
    offset: -162,
    links: [
      { title: 'References', goTo: 'placebo.references' },
      { title: '', goTo: 'placebo.introduction', className: 'home' },
      { title: 'Pain is complex', goTo: 'placebo.pain_is_complex' },
      { title: 'Molecule', goTo: 'placebo.molecule' },
      { title: 'Mechanism', goTo: 'placebo.mechanism' },
      { title: 'Efficacy', goTo: 'placebo.efficacy' },
      { title: 'Tolerability', goTo: 'placebo.tolerability' },
      { title: 'Quality of life', goTo: 'placebo.quality_of_life' },
      { title: 'Dosing', goTo: 'placebo.dosing' },
      { title: 'Summary', goTo: 'placebo.summary' }
    ]
  }); */
  
  // Initialize presentation
  app.init('placebo', 'introduction');
  
})(window);