document.addEventListener('presentationInit', function() {

  var currentSlide = '#resources_home';

  var slide = app.slide.resources_home = {
    elements: {
      boxOne: "#one",
      boxTwo: "#two",
      boxThree: "#three",
      boxFour: "#four",
      boxFive: "#five",
      boxSix: "#six",
      boxSeven: "#seven",
      boxEight: "#eight",
      boxNine: "#nine",
      boxTen: "#ten",
      shutBoxes: "#info_window",
      dontShutBoxes1: "#scrollable_window1",
      dontShutBoxes2: "#scrollable_window2",
      dontShutBoxes3: "#scrollable_window3",
      dontShutBoxes4: "#scrollable_window4"

    },
    onEnter: function(ele) {
      app.addEvent('tap', slide.MenuToggleFunction, slide.element.toggleMenuButton);
      app.addEvent('tap', slide.goHomeFunction, slide.element.goHome);
      app.addEvent('tap', slide.boxOneLoad, slide.element.boxOne);
      app.addEvent('tap', slide.boxTwoLoad, slide.element.boxTwo);
      app.addEvent('tap', slide.boxThreeLoad, slide.element.boxThree);
      app.addEvent('tap', slide.boxFourLoad, slide.element.boxFour);
      app.addEvent('tap', slide.boxFiveLoad, slide.element.boxFive);
      app.addEvent('tap', slide.boxSixLoad, slide.element.boxSix);
      app.addEvent('tap', slide.boxSevenLoad, slide.element.boxSeven);
      app.addEvent('tap', slide.boxEightLoad, slide.element.boxEight);
      app.addEvent('tap', slide.boxNineLoad, slide.element.boxNine);
      app.addEvent('tap', slide.boxTenLoad, slide.element.boxTen);
      app.addEvent('tap', slide.shutBoxesNow, slide.element.shutBoxes);
      app.addEvent('tap', slide.dontShutBoxesNow1, slide.element.dontShutBoxes1);
      app.addEvent('tap', slide.dontShutBoxesNow2, slide.element.dontShutBoxes2);
      app.addEvent('tap', slide.dontShutBoxesNow3, slide.element.dontShutBoxes3);
      app.addEvent('tap', slide.dontShutBoxesNow4, slide.element.dontShutBoxes4);

       $('#menu').hide();           
    },

    onExit: function(ele) {
           $(currentSlide + ' #menu .hasChildren').next().slideUp();
    },

    boxOneLoad: function(e) {
    $(currentSlide + ' #info_window').removeClass();
    $(currentSlide + ' #info_window').addClass("one");
    $(currentSlide + ' #info_window.one').show();
    },
    boxTwoLoad: function(e) {
    $(currentSlide + ' #info_window').removeClass();
    $(currentSlide + ' #info_window').addClass("two");
    $(currentSlide + ' #info_window.two').show();
    },
    boxThreeLoad: function(e) {
    $(currentSlide + ' #info_window').removeClass();    
    $(currentSlide + ' #scrollable_window1').addClass("three");
    $(currentSlide + ' #scrollable_window1.three').show();
    },
    boxFourLoad: function(e) {
    $(currentSlide + ' #info_window').removeClass();    
    $(currentSlide + ' #info_window').addClass("four");
    $(currentSlide + ' #info_window.four').show();
    },
    boxFiveLoad: function(e) {
    $(currentSlide + ' #info_window').removeClass();    
    $(currentSlide + ' #info_window').addClass("five");
    $(currentSlide + ' #info_window.five').show();
    },
    boxSixLoad: function(e) {
    $(currentSlide + ' #info_window').removeClass();    
    $(currentSlide + ' #scrollable_window2').addClass("six");
    $(currentSlide + ' #scrollable_window2.six').show();
    },
    boxSevenLoad: function(e) {
    $(currentSlide + ' #info_window').removeClass();    
    $(currentSlide + ' #info_window').addClass("seven");
    $(currentSlide + ' #info_window.seven').show();
    },
    boxEightLoad: function(e) {
    $(currentSlide + ' #info_window').removeClass();    
    $(currentSlide + ' #info_window').addClass("eight");
    $(currentSlide + ' #info_window.eight').show();
    },
    boxNineLoad: function(e) {
    $(currentSlide + ' #info_window').removeClass();    
    $(currentSlide + ' #scrollable_window3').addClass("nine");
    $(currentSlide + ' #scrollable_window3.nine').show();
    },
    boxTenLoad: function(e) {
    $(currentSlide + ' #info_window').removeClass();    
    $(currentSlide + ' #scrollable_window4').addClass("ten");
    $(currentSlide + ' #scrollable_window4.ten').show();
    },

    dontShutBoxesNow1: function(e) {
    $(currentSlide + ' #scrollable_window1').removeClass();
    $(currentSlide + ' #scrollable_window1').addClass('threemore');

        $('#scrollable_window1.threemore').on('tap', function() {
        $(this).hide();
        $(this).removeClass();
    });

    }, 


     shutBoxesNow: function(e) {
    $(currentSlide + ' #info_window').hide();      
    },

    dontShutBoxesNow2: function(e) {
    $(currentSlide + ' #scrollable_window2').removeClass();
    $(currentSlide + ' #scrollable_window2').addClass('sixmore');

        $('#scrollable_window2.sixmore').on('tap', function() {
        $(this).hide();
        $(this).removeClass();
    });

    }, 

    dontShutBoxesNow3: function(e) {

    $(currentSlide + ' #scrollable_window3').removeClass();
    $(currentSlide + ' #scrollable_window3').addClass('ninemore');

    $(currentSlide + ' #scrollable_window3.ninemore').on('tap', function() {
    $(currentSlide + ' #scrollable_window3').removeClass();
    $(currentSlide + ' #scrollable_window3').addClass('ninemore2');
      console.log(this);

          $(currentSlide + ' #scrollable_window3.ninemore2').on('tap', function() {
    $(this).hide();
    $(this).removeClass();
    });


   });


    },

       dontShutBoxesNow4: function(e) {
    $(currentSlide + ' #scrollable_window4').removeClass();
    $(currentSlide + ' #scrollable_window4').addClass('tenmore');

        $('#scrollable_window4.tenmore').on('tap', function() {
        $(this).hide();
        $(this).removeClass();
    });
    



    }, 

     shutBoxesNow: function(e) {
    $(currentSlide + ' #info_window').hide();      
    }



  };


}); 


