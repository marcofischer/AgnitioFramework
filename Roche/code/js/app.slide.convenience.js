document.addEventListener('presentationInit', function() {
  var slide = app.slide.convenience = {
    elements: {
      human: "#man",
      listItems: ["li", "all"],
      back: ".backend",
      front: ".frontend",
      handle: "#undressHandle",
      wrap: ".wrap"
    },
    onEnter: function(ele) {      
      slide.wrapHeight = parseInt(window.getComputedStyle(slide.element.wrap)["height"]);
      slide.height = parseInt(window.getComputedStyle(slide.element.human)["height"]);
      slide.step = slide.height/(slide.element.listItems.length+1);

      slide.undressHandle = new Draggy(slide.element.handle, {restrictX: true, limitY: [0, 500], onChange: slide.setPosition});
      
      slide.setPosition(0, 0);
      
    },

    onExit: function(ele) {},

    setPosition: function(x, y){

      // Make sure it is reset to zero properly
      if (y<12) y=0;

      slide.element.front.style.height = y + "px";
      slide.element.back.style.height = (slide.wrapHeight - 4 - y) + "px";

      slide.element.listItems.forEach(function(li) {
          if(y > slide.step) {
              li.style.opacity = "1";
              y -= slide.step;
          }
          else{
              li.style.opacity = (y/slide.step).toString().substr(0,4);
              y = 0;
          }
      }, slide);

    }
  };
});