document.addEventListener('presentationInit', function() {

  var project = 'devroche';

  var currentSlide = 'green_first';

  var slide = app.slide.green_first = {
    elements: {
      toggleCGA: "#cga",
      toggleCCI: "#cci",
      toggleCIRS: "#cirs",
      closeWindow: "#closer"
    },
    onEnter: function(ele) {
      app.addEvent('tap', slide.toggleCGAwindow, slide.element.toggleCGA);
      app.addEvent('tap', slide.toggleCCIwindow, slide.element.toggleCCI);
      app.addEvent('tap', slide.toggleCIRSwindow, slide.element.toggleCIRS);
      app.addEvent('tap', slide.windowCloser, slide.element.closeWindow);
      $('#menu').hide();
    },

    onExit: function(ele) {
           $(currentSlide + ' #menu .hasChildren').next().slideUp();
    },

    toggleCGAwindow: function(e) {
    $('#window_cga').show();
    },  
    toggleCCIwindow: function(e) {
    $('#window_cci').show();
    },  
    toggleCIRSwindow: function(e) {
    $('#window_cirs').show();
    },

    windowCloser: function(e) {
    $('#window_cga, #window_cci, #window_cirs').hide();
    }

  };

}); 


