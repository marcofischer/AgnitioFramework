document.addEventListener('presentationInit', function() {
  var slide = app.slide.pain_therapy = {
  	elements: {
      painContent: "#pain_content"
    },
    onEnter: function(ele) {
      util.addClass(slide.element.painContent,'active');
    },
    onExit: function(ele) {
      util.removeClass(slide.element.painContent,'active');
    }
  };

}); 