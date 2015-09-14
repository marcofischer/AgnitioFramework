document.addEventListener('presentationInit', function() {

    var slide = app.slide.question1_first = {
    elements: {
       slider1: "#slider1"
    },

    onEnter: function(ele) {
         $('#menu').hide();
         app.addEvent('change', slide.sliderShow, slide.element.slider1);
    },

    onExit: function(ele) {
    $('#menu .hasChildren').next().slideUp();
    },

    sliderShow: function(e) {
    var FinalVal = (this).value;   
    // FinalVal stores the current number the user has selected
    }

  };


}); 


