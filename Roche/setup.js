(function(global) {

  // Creating our presentation and global namespace "app"
  global.app = new Presentation({
    globalElements: ['mainfooter', 'slidePopup', 'popupBackButton'],
    type: 'json',
    manageMemory: true
  });
  
  // Uncomment to turn on debugging of presentation
  // Will output logs to the browser console
  
  // app.debug = (function() {
    // var api = ag.debug(true); // Debug of Content API
    // debug(); // Debug of Framework
    // return api;
  // }());
  
  // Initiate modules
  app.refs = new References('references', 'refPopup');
  app.scroller = new Slidescroller();
  app.analytics.init({
    version: '4.0',
    map: {
      "blue_urine": {
        "id": "nr_of_patients",
        "name": "Patients with blue urine"
      }
    }
  });
  app.loader = new Loader({delay:1600});
  app.slidePopup = new SlidePopup('slidePopup', 'popupBackButton');
  app.transPopup = new SlidePopup('transPopup');
  app.track_menu = new Menu({
    attachTo: 'mechanism',
    offset: 0,
    links: [
      { title: 'Popup example', goTo: "app.slidePopup.show('blue_urine');"}
     ],
  });
  app.menu = new AutoMenu({
    attachTo: ['placebo', 'efficacy'],
    offsetLinks: 1,
    links: {
      summary:      {title: 'Conclusion'},
      introduction: {title: ' ', classname: 'home'},
      blue_urine: {title: 'Blue Urine'}
    }
  });
  app.thumbs = new Thumbnails({
    attachTo: ['placebo', 'efficacy', 'linear'],
    pathToThumbs: 'content/img/thumbs/<id>.jpg',
    hideSingles: true
  });
  app.slideOverview = new SlideOverview({
    attachTo: ['placebo', 'linear'],
    triggerSelector: "#overview",
    pathToThumbs: 'content/img/thumbs/<id>.jpg'
  });

  // Initialize presentation
  app.init('placebo', 'introduction');
})(window);
