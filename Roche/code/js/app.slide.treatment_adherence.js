document.addEventListener('presentationInit', function() {
  var slide = app.slide.treatment_adherence = {
    elements: {
      treatContent: "#treatment_content",
      popupButton: "#qot_button"
    },
    onEnter: function(ele) {
      util.addClass(slide.element.treatContent,'active');
      app.addEvent('tap', slide.openQuality, slide.element.popupButton);
    },
    onExit: function(ele) {
      util.removeClass(slide.element.treatContent,'active');
    },
    openQuality:function(e){
      app.slidePopup.show('quality_of_life');
    }
  };  
}); 