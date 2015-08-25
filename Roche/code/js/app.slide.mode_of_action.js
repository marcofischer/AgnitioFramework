document.addEventListener('presentationInit', function() {

  var prefix = util.getBrowserPrefix("Transform");

  var slide = app.slide.mode_of_action = {
    elements: {
      pictureArea: ".image-container",
      allText: ["#text_li li", "all"],
      indicators: [".indicator .dot", "all"],
      rotation: "#image_rotation"
    },
    onEnter: function(ele) {
      slide.activePic = 0;
      slide.rotateNr = 0;

      app.addEvent('swipeleft', slide.changePicture, slide.element.pictureArea);
      app.addEvent('swiperight', touchy.stop, slide.element.pictureArea);
    },
    onExit: function(ele) {
      util.removeClass(slide.element.indicators[slide.activePic],"active");
      util.removeClass(slide.element.allText[slide.activePic],"liactive");
      util.addClass(slide.element.indicators[0],"active");
      util.addClass(slide.element.allText[0],"liactive");
      slide.element.rotation.style.cssText = prefix + "transform: translate3d(0,0,-297.5px) rotateY(-0deg);";
    },
    changePicture: function(e){
      touchy.stop(e);
      util.removeClass(slide.element.indicators[slide.activePic],"active");
      util.removeClass(slide.element.allText[slide.activePic],"liactive");
      slide.activePic++;
      slide.rotateNr = slide.rotateNr + 90;
      if (slide.activePic===4) {
        slide.activePic = 0;
      }
      util.addClass(slide.element.indicators[slide.activePic],"active");
      util.addClass(slide.element.allText[slide.activePic],"liactive");
      slide.element.rotation.style.cssText = prefix + "transform: translate3d(0,0,-297.5px) rotateY(-" + slide.rotateNr + "deg);";
    }
  };  
}); 