document.addEventListener('presentationInit', function() {
  var slide = app.slide.side_effects = {
    initialized: false,
    elements: {
        listContainer: ".butul"
    },
    onEnter: function(ele) {
        if (!slide.initialized) {
          slide.rhiBar = new Draggy('rhiBar', {restrictX: true, limitsY: [-80, 320]});
          slide.danBar = new Draggy('danBar', {restrictX: true, limitsY: [-80, 320]});
          slide.twiBar = new Draggy('twiBar', {restrictX: true, limitsY: [-80, 320]});
          slide.steBar = new Draggy('steBar', {restrictX: true, limitsY: [-80, 320]});
          slide.rhiBar.moveTo(0, slide.barPos[0]);
          slide.danBar.moveTo(0, slide.barPos[1]);
          slide.twiBar.moveTo(0, slide.barPos[2]);
          slide.steBar.moveTo(0, slide.barPos[3]);
        }
        else {
          slide.rhiBar.reInit();
          slide.danBar.reInit();
          slide.twiBar.reInit();
          slide.steBar.reInit();
        }
        
        app.addEvent('onDrop', slide.swapBars, ele);
        app.addEvent('swipeup', touchy.stop, slide.element.listContainer);
        app.addEvent('swipedown', touchy.stop, slide.element.listContainer);
    },
    onExit: function(ele) {
        slide.initialized = true;
    },
    barPos: {
        0: 0,
        1: 77,
        2: 154,
        3: 231
    },
    barOrder: ["rhiBar", "danBar", "twiBar", "steBar"],
    swapBars: function(e){
        var draggyId = e.target.id,
            draggy = e.target.draggy,
            position = e.target.position[1],
            currentOrder = slide.barOrder.indexOf(draggyId),
            orgPosition = slide.barPos[currentOrder],
            occupiedBy;

        if(position >= -31 && position <= 34){
            occupiedBy = slide.barOrder[0];
            draggy.moveTo(0, slide.barPos[0]);
            slide[occupiedBy].moveTo(0, orgPosition);
            slide.barOrder.splice(currentOrder, 1, occupiedBy);
            slide.barOrder.splice(0, 1, draggyId);
        }
        else if(position >= 46 && position <= 110){
            occupiedBy = slide.barOrder[1];
            draggy.moveTo(0, slide.barPos[1]);
            slide[occupiedBy].moveTo(0, orgPosition);
            slide.barOrder.splice(currentOrder, 1, occupiedBy);
            slide.barOrder.splice(1, 1, draggyId);
        }
        else if(position >= 123 && position <= 187){
            occupiedBy = slide.barOrder[2];
            draggy.moveTo(0, slide.barPos[2]);
            slide[occupiedBy].moveTo(0, orgPosition);
            slide.barOrder.splice(currentOrder, 1, occupiedBy);
            slide.barOrder.splice(2, 1, draggyId);
        }
        else if(position >= 200 && position <= 265){
            occupiedBy = slide.barOrder[3];
            draggy.moveTo(0, slide.barPos[3]);
            slide[occupiedBy].moveTo(0, orgPosition);
            slide.barOrder.splice(currentOrder, 1, occupiedBy);
            slide.barOrder.splice(3, 1, draggyId);
        }
        else{
            draggy.moveTo(0,orgPosition);
        }
    }
  };  
}); 