(function(global) {
  
  // Creating our presentation and global namespace "app"
  global.app = new Presentation({
    // initiate modules here if you need to with globalElements: ['slidePopup','popupBack'],
    type:'json',
    manageMemory: true
  });
/*
 app.debug = (function() {

   var api = ag.debug(true);
   debug();
  return api;

  }());
  */
  
  // Initiate modules
  app.scroller = new Slidescroller();
  app.analytics.init({ version: '0.1' });
  
  // Initialize presentation
  app.init('pulsar', 'home_first');
  
})(window);