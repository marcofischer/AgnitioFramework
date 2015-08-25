document.addEventListener('presentationInit', function() {
  var slide = app.slide.types_of_pain = {
    elements: {
      painList: "#painlist",
      footPain: "#foot_pain",
      kneePain: "#knee_pain",
      backPain: "#back_pain",
      redAreas: ["#human_back div", "all"],
      popupBtns: [".popup", "all"]
    },
    onEnter: function(ele) {
      util.addClass(slide.element.painList,'show');
      app.addEvent('tap', slide.showBodyPart, slide.element.footPain);
      app.addEvent('tap', slide.showBodyPart, slide.element.kneePain);
      app.addEvent('tap', slide.showBodyPart, slide.element.backPain);
    },
    onExit: function(ele) {
      util.removeClass(slide.element.painList,'show');
    },
    partList: {
        'foot_pain': 0,
        'knee_pain': 1,
        'back_pain': 2
    },
    showBodyPart: function(e){
      slide.whichElement = this.id;
      slide.bodyPart = slide.partList[slide.whichElement];
      util.addClass(slide.element.redAreas[slide.bodyPart],'open');
      util.addClass(slide.element.popupBtns[slide.bodyPart],'open');

      app.addEvent('tap', slide.hideBodyPart, slide.element.popupBtns[slide.bodyPart]);
    },
    hideBodyPart: function(e){
      util.removeClass(slide.element.redAreas[slide.bodyPart],'open');
      util.removeClass(slide.element.popupBtns[slide.bodyPart],'open'); 
    }
  };  
}); 