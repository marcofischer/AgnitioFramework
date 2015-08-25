document.addEventListener('presentationInit', function() {
  var slide = app.slide.blue_urine = {
    elements: {
      number: ".percentage-number",
      allMen: [".cont-range div", "all"],
      menArea: ".cont-range",
      handlePrevent: "#handle"
    },
    onEnter: function(ele) {
      
      slide.currentNumber = 0;
      slide.activeMen = 0;
      slide.handle = new Draggy('handle', {restrictX: true, limitsY: [0, 300], onChange:slide.moveHandle});

      app.addEvent('tap', slide.showEighty, slide.element.menArea);
      app.addEvent('onDrop', slide.monitorSlider, document);
      app.addEvent('swipeup', touchy.stop, slide.element.handlePrevent);
      app.addEvent('swipedown', touchy.stop, slide.element.handlePrevent);
    },
    onExit: function(ele){
      slide.handle.reset();
      slide.element.number.innerHTML = '';
      for(var i=0;i<slide.element.allMen.length;i++){
        util.removeClass(slide.element.allMen[i],'active');
        util.removeClass(slide.element.allMen[i],'blue');
      }
    },
    moveHandle: function(x,y) {
    	slide.currentNumber = Math.round(y/3);
        for(var y=0;y<80;y++){
            util.removeClass(slide.element.allMen[y],'blue');
        }
        if(slide.activeMen <= slide.currentNumber){
        	for(var i=0;i<slide.currentNumber;i++){
        		slide.element.number.innerHTML = slide.currentNumber+'%';
        		util.addClass(slide.element.allMen[i],'active');
        	}
        }
        else{
            for(var i=slide.currentNumber;i<slide.activeMen;i++){
                slide.element.number.innerHTML = slide.currentNumber+'%';
                util.removeClass(slide.element.allMen[i],'active');
            }
        }
        slide.activeMen = slide.currentNumber;
    },
    monitorSlider: function(e) {
      // console.log('Estimated patients with blue urine', slide.activeMen + '%');
        ag.submit.event({
          unique: true,
          category: 'Efficacy',
          categoryId: 'ag-placebo-efficacy',
          label: "Estimated patients with blue urine",
          labelId: "ag-blue-urine-patients",
          value: slide.activeMen,
          valueType: "percent",
          path: app.getPath()
        });
    },
    showEighty: function(e) {
        slide.currentNumber = 80;
        slide.handle.moveTo(0,240);
        
        for(var i=0;i<slide.currentNumber;i++){
            if(!util.hasClass(slide.element.allMen[i], 'active')){
                util.addClass(slide.element.allMen[i], 'blue');
            }
        }
        
        for(var y=80;y<100;y++){
            util.removeClass(slide.element.allMen[y], 'active');
        }

        slide.element.number.innerHTML = slide.currentNumber + '%';
        
        ag.submit.event({
          unique: true,
          category: 'Efficacy',
          categoryId: 'ag-placebo-efficacy',
          label: "Blue urine result shown",
          labelId: "ag-blue-urine-result",
          value: "true",
          valueType: "boolean",
          path: app.getPath()
        });
    }
  };  
}); 
