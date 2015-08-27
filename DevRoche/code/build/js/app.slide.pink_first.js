document.addEventListener('presentationInit', function() {

  var currentSlide = '#pink_first';

  var slide = app.slide.pink_first = {
    elements: {
      toggleMenuButton: "#toggleMenu",
      goHome: "#goHome",
      loadWindow: "#text",
      closeWindow: "#info_window"
    },
    onEnter: function(ele) {
      app.addEvent('tap', slide.windowLoader, slide.element.loadWindow);
      app.addEvent('tap', slide.windowCloser, slide.element.closeWindow);
         $('#menu').hide();
    },

    onExit: function(ele) {
           $(currentSlide + ' #menu .hasChildren').next().slideUp();
    },

    windowLoader: function(e) {
    $(currentSlide + ' #info_window').show();
    },

    windowCloser: function(e) {
    $(currentSlide + ' #info_window').hide();
    }


  };

}); 


