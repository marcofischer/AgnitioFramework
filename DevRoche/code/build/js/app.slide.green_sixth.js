document.addEventListener('presentationInit', function() {

    var slide = app.slide.green_sixth = {
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


