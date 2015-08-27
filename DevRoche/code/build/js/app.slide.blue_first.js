document.addEventListener('presentationInit', function() {

    var slide = app.slide.blue_first = {
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


