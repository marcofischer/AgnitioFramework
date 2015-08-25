document.addEventListener('presentationInit', function() {
  var slide = app.slide.quality_of_life = {
    elements: {
      graph: "#quality_graph"
    },
    onEnter: function(ele) {
      util.addClass(slide.element.graph,'changeHeight_1');

      app.addEvent('tap', slide.showBars, slide.element.graph);
      app.addEvent('tap', slide.goBack, app.elements.popupBackButton);
    },
    onExit: function(ele) {
      util.removeClass(slide.element.graph,'changeHeight1');
      util.removeClass(slide.element.graph,'changeHeight2');
    },
    showBars: function(e){
      util.addClass(slide.element.graph,'changeHeight_2');
    },
    goBack: function(e){
      app.slidePopup.hide();
      util.removeClass(app.elements.popupBackButton,'show');
    }
  };  
}); 