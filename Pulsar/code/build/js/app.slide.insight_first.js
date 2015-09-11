document.addEventListener('presentationInit', function() {

  var project = 'pulsar';

  var currentSlide = '#insight_first';

  var slide = app.slide.insight_first = {
    elements: {
      togglehww: "#hww",
      closeWindow: "#closer"
    },
    onEnter: function(ele) {
      app.addEvent('tap', slide.togglehwwwindow, slide.element.togglehww);
      app.addEvent('tap', slide.windowCloser, slide.element.closeWindow);
      $('#menu').hide();
      $('#cone,#ctwo,#cthree,#cfour,#cfive').hide();
    },

    onExit: function(ele) {
           $(currentSlide + ' #menu .hasChildren').next().slideUp();
    },

    togglehwwwindow: function(e) {
    $('#window_hww').show();
    $('#mainfooter').addClass('windowed');
    $('#cone').fadeIn('400');
    $('#ctwo').delay(300).fadeIn('400');
    $('#cthree').delay(600).fadeIn('400');
    $('#cfour').delay(900).fadeIn('400');
    $('#cfive').delay(1200).fadeIn('400');

    console.log('hellooo');
    },  
    windowCloser: function(e) {
    $('#window_hww').hide();
    $('#mainfooter').removeClass();
    }

  };

}); 


