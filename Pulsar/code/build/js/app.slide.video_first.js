document.addEventListener('presentationInit', function() {

    var slide = app.slide.video_first = {
    elements: {
        test : "#me",

    },

    onEnter: function(ele) {
         $('#menu').hide();   
         app.addEvent('tap', slide.startVideo, slide.element.test);   

    },

    onExit: function(ele) {
    $('#menu .hasChildren').next().slideUp();
       
        $('#me').pause; 
       var currentTime1 = $('#me').currentTime;
        console.log(currentTime1);

    },


    startVideo: function(e) {
       $('#me').pause(); 
        // get current time
     //   var currentTime1 = $('#me').currentTime;
     //   console.log(currentTime1);

}



  };

}); 


