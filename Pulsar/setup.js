(function(global) {

  // Creating our presentation and global namespace "app"
  global.app = new Presentation({
  //  globalElements: ['mainmenu', 'mainfooter', 'slidePopup', 'popupBackButton'],
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
  //app.refs = new References('references', 'refPopup');
  app.scroller = new Slidescroller();
  

  // Initialize presentation
  app.init('pulsar', 'intro');
})(window);
