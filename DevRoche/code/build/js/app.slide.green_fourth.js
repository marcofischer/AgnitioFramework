document.addEventListener('presentationInit', function() {

    var slide = app.slide.green_fourth = {
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


