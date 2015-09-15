document.addEventListener('presentationInit', function() {
  var orderValue = [],
    slide = app.slide.question2_first = {
    initialized: false,
    elements: {
        listContainer: ".butul"
    },
    onEnter: function(ele) {
      $('#menu').hide(); 

        if (!slide.initialized) {
          slide.btn_1 = new Draggy('btn_1', {restrictY: true , limitsX: [0, 850]});
          slide.btn_2 = new Draggy('btn_2', {restrictY: true , limitsX: [0, 850]});
          slide.btn_3 = new Draggy('btn_3', {restrictY: true , limitsX: [0, 850]});
          slide.btn_4 = new Draggy('btn_4', {restrictY: true , limitsX: [0, 850]});

          slide.btn_1.moveTo(slide.barPos[0], 0);
          slide.btn_2.moveTo(slide.barPos[1], 0);
          slide.btn_3.moveTo(slide.barPos[2], 0);
          slide.btn_4.moveTo(slide.barPos[3], 0);
        }
        else {
          slide.btn_1.reInit();
          slide.btn_2.reInit();
          slide.btn_3.reInit();
          slide.btn_4.reInit();
        }

        $('.butul li').each(function(i,e){
            orderValue[i] = $(e).attr('data-value');
        });
        
        app.addEvent('onDrop', slide.swapBars, ele);
        app.addEvent('swipeleft', touchy.stop, slide.element.listContainer);
        app.addEvent('swiperight', touchy.stop, slide.element.listContainer);
    },
    onExit: function(ele) {
        slide.initialized = true;
        ag.submit.data({
            unique: true,
            category: 'Question 2',
            label: "Order of importance",
            value: orderValue,
            path: app.getPath()
        });
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
            position = e.target.position[0],
            currentOrder = slide.barOrder.indexOf(draggyId),
            orgPosition = slide.barPos[currentOrder],
            occupiedBy;

        if(position <= 158){
            occupiedBy = slide.barOrder[0];
            draggy.moveTo(slide.barPos[0], 0);
            slide[occupiedBy].moveTo(orgPosition, 0);
            slide.barOrder.splice(currentOrder, 1, occupiedBy);
            slide.barOrder.splice(0, 1, draggyId);

            orderValue[currentOrder] = orderValue[0];
            orderValue[0] = $('#'+draggyId).attr('data-value');
        } else if (position >= 159 && position <= 372){
            occupiedBy = slide.barOrder[1];
            draggy.moveTo(slide.barPos[1], 0);
            slide[occupiedBy].moveTo(orgPosition, 0);
            slide.barOrder.splice(currentOrder, 1, occupiedBy);
            slide.barOrder.splice(1, 1, draggyId);

            orderValue[currentOrder] = orderValue[1];
            orderValue[1] = $('#'+draggyId).attr('data-value');
        } else if (position >= 373 && position <= 595){
            occupiedBy = slide.barOrder[2];
            draggy.moveTo(slide.barPos[2], 0);
            slide[occupiedBy].moveTo(orgPosition, 0);
            slide.barOrder.splice(currentOrder, 1, occupiedBy);
            slide.barOrder.splice(2, 1, draggyId);

            orderValue[currentOrder] = orderValue[2];
            orderValue[2] = $('#'+draggyId).attr('data-value');
        } else if (position >= 560){
            occupiedBy = slide.barOrder[3];
            draggy.moveTo(slide.barPos[3], 0);
            slide[occupiedBy].moveTo(orgPosition, 0);
            slide.barOrder.splice(currentOrder, 1, occupiedBy);
            slide.barOrder.splice(3, 1, draggyId);

            orderValue[currentOrder] = orderValue[3];
            orderValue[3] = $('#'+draggyId).attr('data-value');     
        } else {
            draggy.moveTo(orgPosition, 0);
        }     
    }
  };  
}); 