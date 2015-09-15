document.addEventListener('presentationInit', function() {

    var currentTime1,
    slide = app.slide.video_first = {
    elements: {
        myvideo : "#thisvideo",

    },

    onEnter: function(ele) {
         $('#menu').hide();   
         app.addEvent('tap', slide.startVideo, slide.element.myvideo);   

    },

    onExit: function(ele) {

     $('#menu .hasChildren').next().slideUp();
      
       $("#thisvideo")[0].pause(); 
       // get current time
       currentTime1 =  $('#thisvideo')[0].currentTime;
       //console.log(currentTime1);

        // submit to agnitio tracking
            ag.submit.event({
                unique: true,
                category: 'Video Stats',
                label: "Video duration",
                value: currentTime1,
                path: app.getPath()
            });


    },


    startVideo: function(e) {
        
    // Allow the video to be clicked and paused etc as you'd expect it to

        if ($("#thisvideo")[0].paused) {
       
             $('#thisvideo')[0].play(); // plays the video 

        } else {
       
             $("#thisvideo")[0].pause();
        
        }


}



  };

}); 


