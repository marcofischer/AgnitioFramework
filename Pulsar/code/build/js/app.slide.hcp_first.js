document.addEventListener('presentationInit', function() {

    var slide = app.slide.hcp_first = {
    elements: {
      Btn: "img"
    },

    onEnter: function(ele) {
         $('#menu').hide();
         app.addEvent('tap', slide.showNext, slide.element.Btn);    


        $('img.btn').on('tap', function () {
          console.log('Hellooo');
          $(this).next().show();
        });


    },

    onExit: function(ele) {
    $('#menu .hasChildren').next().slideUp();
    },


    showNext: function(e) {
      
        console.log(this);
    }      

  };


}); 


