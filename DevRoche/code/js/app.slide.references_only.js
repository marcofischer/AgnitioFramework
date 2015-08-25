document.addEventListener('presentationInit', function() {

    var slide = app.slide.references_only = {
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


