document.addEventListener('presentationInit', function() {

    var slide = app.slide.localimplementation_second = {
    elements: {
    },

    onEnter: function(ele) {
         $('#menu').hide();
    },

    onExit: function(ele) {
    $('#menu .hasChildren').next().slideUp();
    },


  };


}); 


