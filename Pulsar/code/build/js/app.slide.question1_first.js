document.addEventListener('presentationInit', function() {

    var FinalVal = "0",
    slide = app.slide.question1_first = {
    elements: {
       slider1: "#slider1"
    },

    onEnter: function(ele) {
         $('#menu').hide();
         app.addEvent('change', slide.sliderShow, slide.element.slider1);
    },

    onExit: function(ele) {
    $('#menu .hasChildren').next().slideUp();
    console.log(FinalVal);
    // disable the slider
    $(slider1).hide();
    // record the value

    


          // submit to agnitio tracking
            ag.submit.event({
                unique: true,
                category: 'Joint Working',
                label: "How many projects?",
                value: FinalVal,
                path: app.getPath()
            });

    },

    sliderShow: function(e) {
    noProjects = (this).value; // exists here fine  
    FinalVal = noProjects;
    // FinalVal stores the current number the user has selected
    }

  };


}); 


