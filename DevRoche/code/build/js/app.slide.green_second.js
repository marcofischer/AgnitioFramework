document.addEventListener('presentationInit', function() {

    var slide = app.slide.green_second = {
    elements: {
        cirsapp: "#cirsapp",
        closeWindow: "#closer"
    },

    onEnter: function(ele) {
      $('#menu').hide();
      app.addEvent('tap', slide.showWindow, slide.element.cirsapp);
      app.addEvent('tap', slide.windowCloser, slide.element.closeWindow);      
    },

    onExit: function(ele) {
    $('#menu .hasChildren').next().slideUp();
    },

    showWindow: function(e) {
    $('#window_box').show();
    },

    windowCloser: function(e) {
    $('#window_box').hide();
    }


  };


}); 


