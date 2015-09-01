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
      globalClose: "#globalClose"

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
      app.addEvent('tap', slide.closeIt, slide.element.globalClose);

       $('#menu').hide();           
    },

    onExit: function(ele) {
           $(currentSlide + ' #menu .hasChildren').next().slideUp();
    },

    boxOneLoad: function(e) {
    $(currentSlide + ' #scrollable_window1').show();    
    $(currentSlide + ' #scrollable_window1 .container').show();
    $(currentSlide + ' #scrollable_window1 .container img').show();
    },
    boxTwoLoad: function(e) {
    $(currentSlide + ' #scrollable_window2').show();    
    $(currentSlide + ' #scrollable_window2 .container').show();
    $(currentSlide + ' #scrollable_window2 .container img').show();
    },
    boxThreeLoad: function(e) {
    $(currentSlide + ' #scrollable_window3').show();    
    $(currentSlide + ' #scrollable_window3 .container').show();
    $(currentSlide + ' #scrollable_window3 .container img').show();
    },
    boxFourLoad: function(e) {
    $(currentSlide + ' #scrollable_window4').show();    
    $(currentSlide + ' #scrollable_window4 .container').show();
    $(currentSlide + ' #scrollable_window4 .container img').show();
    },
    boxFiveLoad: function(e) {
    $(currentSlide + ' #scrollable_window5').show();    
    $(currentSlide + ' #scrollable_window5 .container').show();
    $(currentSlide + ' #scrollable_window5 .container img').show();
    },
    boxSixLoad: function(e) {
    $(currentSlide + ' #scrollable_window6').show();    
    $(currentSlide + ' #scrollable_window6 .container').show();
    $(currentSlide + ' #scrollable_window6 .container img').show();
    },
    boxSevenLoad: function(e) {
    $(currentSlide + ' #scrollable_window7').show();    
    $(currentSlide + ' #scrollable_window7 .container').show();
    $(currentSlide + ' #scrollable_window7 .container img').show();
    },
    boxEightLoad: function(e) {
    $(currentSlide + ' #scrollable_window8').show();    
    $(currentSlide + ' #scrollable_window8 .container').show();
    $(currentSlide + ' #scrollable_window8 .container img').show();
    },
    boxNineLoad: function(e) {
    $(currentSlide + ' #scrollable_window9').show();    
    $(currentSlide + ' #scrollable_window9 .container').show();
    $(currentSlide + ' #scrollable_window9 .container img').show();
    },
    boxTenLoad: function(e) {
    $(currentSlide + ' #scrollable_window10').show();    
    $(currentSlide + ' #scrollable_window10 .container').show();
    $(currentSlide + ' #scrollable_window10 .container img').show();
    },

     shutBoxesNow: function(e) {
    $(currentSlide + ' #info_window').hide();      
    },

    closeIt: function(e) {
     console.log('hello');
    $(currentSlide + ' .togg').hide();

    }



  };


}); 


