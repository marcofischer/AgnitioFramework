document.addEventListener('presentationInit', function() {
  var slide = app.slide.burping_effect = {
    elements: {
      graph: "#efficacy_pic1",
      numberBox: ".numbers-box",
      openBtn: ".popupmenu",
      closeBtn: ".back"
    },
    onEnter: function(ele) {
      util.addClass(slide.element.graph,'show');
      app.addEvent('tap', slide.openNumbers, slide.element.openBtn);
    },
    onExit: function(ele) {
      util.removeClass(slide.element.graph,'show');
      util.removeClass(slide.element.numberBox,'active');
    },
    openNumbers: function(e){
      util.addClass(slide.element.numberBox,'active');
      app.addEvent('tap', slide.closeNumbers, slide.element.closeBtn);
    },
    closeNumbers: function(e){
      util.removeClass(slide.element.numberBox,'active');
    }
  };  
}); 