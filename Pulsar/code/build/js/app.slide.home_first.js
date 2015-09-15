document.addEventListener('presentationInit', function() {

    var buttonUsage = ["Button not clicked","Button not clicked","Button not clicked"],
    slide = app.slide.home_first = {
    elements: {
      aboutBtn: "#aboutus",
      philBtn: "#philosophy",
      insBtn: "#insight"
    },

    onEnter: function(ele) {
         $('#menu').hide();
         app.addEvent('tap', slide.takemetoAbout, slide.element.aboutBtn);
         app.addEvent('tap', slide.takemetoPhil, slide.element.philBtn);         
         app.addEvent('tap', slide.takemetoIns, slide.element.insBtn);         
    },

    onExit: function(ele) {
    $('#menu .hasChildren').next().slideUp();

        // submit to agnitio tracking
            ag.submit.event({
                unique: true,
                category: 'Video Stats',
                label: "Video duration",
                value: buttonUsage,
                path: app.getPath()
            });


    },


    takemetoAbout: function(e) {
       buttonUsage[0] = "About button used";
        app.goTo('pulsar', 'about', 'about_first')
    },      

    takemetoPhil: function(e) {
        buttonUsage[1] = "Philosophy button used";
        app.goTo('pulsar', 'philosophy', 'philosophy_first')

    },   

    takemetoIns: function(e) {
        buttonUsage[2] = "Insight button used";
        app.goTo('pulsar', 'insight', 'insight_first')

    }    

  };


}); 


