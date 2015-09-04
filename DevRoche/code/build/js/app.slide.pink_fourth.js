document.addEventListener('presentationInit', function() {

    var slide = app.slide.pink_fourth = {
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


