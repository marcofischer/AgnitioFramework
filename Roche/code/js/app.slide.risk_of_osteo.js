document.addEventListener('presentationInit', function() {
  var slide = app.slide.risk_of_osteo = {
    // Some code will only run first time it's entered
    initialized: false,
    // Get slide elements using Framework helper
    // Elements can then be referenced with app.slide.risk_of_osteo.element[key]
    elements: {
      graphImg: '#risk_of_osteo_graph div',
      levelBar: '#gradient_slider div',
      leftTube: '#colb_left div',
      rightTube: '#colb_right div',
      boneImg: '#mineral_opacity_slider div',
      handle: '#osteo_slider_handle'
    },
    onEnter: function(ele) {
      if (!slide.initialized) {
        slide.slider = new Draggy(slide.element.handle, {onChange: slide.sliderChange, restrictY: true, limitsX: [-4, 408]});
        slide.element.boneImg.style.opacity = 0;
        slide.initialized = true;
      }
      else {
        slide.slider.reInit();
      }
    },
    onExit: function(ele) {},
    sliderChange: function(x, y) {
      // Make sure it work in all browsers using "util" library
      var prefix = util.getBrowserPrefix("Transform");
      var tubeHeight = Math.round(23 * (x * 1.55) / 100) + "px";

      slide.element.graphImg.style.width = x + 'px';
      slide.element.leftTube.style.height = tubeHeight;
      slide.element.rightTube.style.height = tubeHeight;
      slide.element.boneImg.style.opacity = x / 408;
      slide.element.levelBar.style.cssText += prefix + "transform:translate(-20px, " + Math.round(33 * ((x * 1.42) / 100)) + "px)";
    }
  };  
}); 