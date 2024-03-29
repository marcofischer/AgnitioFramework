document.addEventListener('presentationInit', function() {

  var project = 'devroche';

  var currentSlide = '#blue_fourth';

  var slide = app.slide.blue_fourth = {
    elements: {
      toggleMenuButton: "#toggleMenu",
      goHome: "#goHome",
      openWindow: "#loadWindow",
      closeWindow: "#info_window"
    },
    onEnter: function(ele) {
      app.addEvent('tap', slide.windowLoader, slide.element.openWindow);
      app.addEvent('tap', slide.windowCloser, slide.element.closeWindow);
         $('#menu').hide();
    },

    onExit: function(ele) {
           $(currentSlide + ' #menu .hasChildren').next().slideUp();
    },

    windowLoader: function(e) {
    $('#info_window').show();
    },

    windowCloser: function(e) {
    $('#info_window').hide();
    }

  };

}); 


