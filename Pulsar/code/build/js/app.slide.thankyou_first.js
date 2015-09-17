document.addEventListener('presentationInit', function() {

    var buttonUsage = ["Button not clicked","Button not clicked","Button not clicked"],
    slide = app.slide.thankyou_first = {
    elements: {

    },

    onEnter: function(ele) {
         $('#menu').hide();      
    },

    onExit: function(ele) {
    $('#menu .hasChildren').next().slideUp();

    }  

  };


}); 


