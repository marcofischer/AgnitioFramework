document.addEventListener('presentationInit', function() {

    var formResults = []
        formRoutes = [],
    slide = app.slide.multiplechoice_example = {
    elements: {
      submitResults : "#multiplechoice_example .submit"
    },

    onEnter: function(ele) {
         $('#menu').hide();
         console.log('18');
         app.addEvent('tap', slide.allForm, slide.element.submitResults);
    },

    onExit: function(ele) {
    $('#menu .hasChildren').next().slideUp();

    },

    allForm : function(e) {
      //check all inputs for value
      $('#multiplechoice_example input[type="radio"]:checked').each(function(i, e){
          //add checked items to array
          var name = $(this).attr('name'),
              value = $(this).val(),
              inner = answers[name][value];

          // formRoutes.push(inner);

      });

      console.log(formRoutes);

      // route.forEach(function (e, i) {
      //     if ( route[i] == formRoutes ){
      //       console.log('match' + route[i]);
      //     }
      // });


    }

  };


}); 


