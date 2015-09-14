document.addEventListener('presentationInit', function() {

    var slide = app.slide.question1_first = {
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
    },


    takemetoAbout: function(e) {
        app.goTo('pulsar', 'about', 'about_first')
    },      

    takemetoPhil: function(e) {
        app.goTo('pulsar', 'philosophy', 'philosophy_first')
    },   

    takemetoIns: function(e) {
        app.goTo('pulsar', 'insight', 'insight_first')
    }    

  };


}); 


