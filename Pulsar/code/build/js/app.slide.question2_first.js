document.addEventListener('presentationInit', function() {
  var slide = app.slide.question2_first = {
    initialized: false,
    elements: {
        listContainer: ".butul"
    },
    onEnter: function(ele) {
      $('#menu').hide();  

        if (!slide.initialized) {
          slide.btn_1 = new Draggy('btn_1', {restrictY: true, limitsX: [-300, 300]});
          slide.btn_2 = new Draggy('btn_2', {restrictY: true, limitsX: [-300, 300]});
          slide.btn_3 = new Draggy('btn_3', {restrictY: true, limitsX: [-300, 300]});
          slide.btn_4 = new Draggy('btn_4', {restrictY: true, limitsX: [-300, 300]});
          slide.btn_1.moveTo(0, slide.barPos[0]);
          slide.btn_2.moveTo(0, slide.barPos[1]);
          slide.btn_3.moveTo(0, slide.barPos[2]);
          slide.btn_4.moveTo(0, slide.barPos[3]);
        }
        else {
          slide.btn_1.reInit();
          slide.btn_2.reInit();
          slide.btn_3.reInit();
          slide.btn_4.reInit();
        }
        
        app.addEvent('onDrop', slide.swapBars, ele);
        app.addEvent('swipeleft', touchy.stop, slide.element.listContainer);
        app.addEvent('swiperight', touchy.stop, slide.element.listContainer);
    },
    onExit: function(ele) {
        slide.initialized = true;
    },
    barPos: {
        0: 120,
        1: 324,
        2: 530,
        3: 754
    },
    barOrder: ["btn_1", "btn_2", "btn_3", "btn_4"],
    swapBars: function(e){
        var draggyId = e.target.id,
            draggy = e.target.draggy,
            position = e.target.position[1],
            currentOrder = slide.barOrder.indexOf(draggyId),
            orgPosition = slide.barPos[currentOrder],
            occupiedBy;

        if(position >= -31 && position <= 34){
            occupiedBy = slide.barOrder[0];
            draggy.moveTo(slide.barPos[0],0);
            slide[occupiedBy].moveTo(0, orgPosition);
            slide.barOrder.splice(currentOrder, 1, occupiedBy);
            slide.barOrder.splice(0, 1, draggyId);
        }
        else if(position >= 46 && position <= 110){
            occupiedBy = slide.barOrder[1];
            draggy.moveTo(slide.barPos[1],0);
            slide[occupiedBy].moveTo(0, orgPosition);
            slide.barOrder.splice(currentOrder, 1, occupiedBy);
            slide.barOrder.splice(1, 1, draggyId);
        }
        else if(position >= 123 && position <= 187){
            occupiedBy = slide.barOrder[2];
            draggy.moveTo(slide.barPos[2],0);
            slide[occupiedBy].moveTo(0, orgPosition);
            slide.barOrder.splice(currentOrder, 1, occupiedBy);
            slide.barOrder.splice(2, 1, draggyId);
        }
        else if(position >= 200 && position <= 265){
            occupiedBy = slide.barOrder[3];
            draggy.moveTo(slide.barPos[3],0);
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