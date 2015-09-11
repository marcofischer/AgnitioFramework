document.addEventListener('presentationInit', function() {

  var currentSlide = '#philosophy_first';

  var slide = app.slide.philosophy_first = {
    elements: {
      toggleMenuButton: "#toggleMenu",
      goHome: "#goHome",
      loadWindow: "#text",
      closeWindow: "#closeWindow"
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
    $(currentSlide + ' #info_window .container').show();
    $(currentSlide + ' #info_window .container img').show();
    },

    windowCloser: function(e) {
    $(currentSlide + ' #info_window').hide();
    }


  };

}); 


