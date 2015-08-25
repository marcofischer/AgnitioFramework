document.addEventListener('presentationInit', function() {
  var slide = app.slide.select_objectives = {
    elements: {
    },
    onEnter: function(elm) {
      this.elm = elm;
      var self = this;
      this.initialized = this.initialized || false;
      this.initDragAndDrop();
      // setTimeout(function(){app.elements.menu.style.display = 'block';},400);

      if(!elm.handler)
          elm.addEventListener('onDrop', elm.handler = function(e) {
      var ele = e.target;
      var slidePosition = util.getPosition(elm);
      var px = slidePosition[0] + ele.pointerPosition[0];
      var py = slidePosition[1] + ele.pointerPosition[1];
      
      var dz = self.dropButtons.isInZone(px, py);
      
      if (dz > -1) {
            self.dropButtons.attach(ele.draggy, dz);
        }
        else {
          ele.draggy.reset();
        }
      });

      // Make sure we save monitoring on double click
      elm.addEventListener('doubleTap', this.monitorObjectives);
      app.slideshows.homeTrack=[];
    },

    
    onExit: function(elm) {
      this.initialized = true;
      this.monitorObjectives();
      elm.removeEventListener('doubleTap', this.monitorObjectives);
    },

    monitorObjectives: function(e) {
      slide.dropButtons.storage.forEach(function(obj, index) {
        var value = 'empty';
        var idNr = 1003002+index;
        if (obj) {
          value = obj.ele.id.replace(/_/g, ' ');
        }
        // Demonstrating backward compatibility
        submitUniqueCustomEvent('1003 - Intro - Objectives', idNr+' - Priority choice ' + (index + 1), value);

      });
    },
    initDragAndDrop: function() {
    var buttons = document.getElementById('buttons');
    buttons.addEventListener('tap', slide.openSlideshow);
    if (!slide.initialized) {
      slide.dropButtons = new DropZones(['obj_1', 'obj_2', 'obj_3']);
          slide.dragSurvival = new Draggy('Survival');
          slide.dragCTL      = new Draggy('Control_tumour_growth');
          slide.dragSymptom = new Draggy('Symptom_control');
          slide.dragQuality = new Draggy('Quality_of_life');
          slide.dragTolerance = new Draggy('Tolerance');
          slide.dragTreatment = new Draggy('Treatment_adherence');     
      }
      else  if(!slide.elm.handler){
      slide.dropButtons.init();
          slide.dragSurvival.init();
          slide.dragCTL.init();
          slide.dragSymptom.init();
          slide.dragQuality.init();
          slide.dragTolerance.init();
          slide.dragTreatment.init();
          
      slide.dropButtons.update();
      }
  },
  
    showObjectives: function(event) {
      var self = this;
      //this.style.display = "none";
      var buttons = document.getElementById('buttons');
      document.getElementById('objectives').style.display = "block";
      // app.elements.menu.style.display = 'block';

      buttons.addEventListener('tap', self.openSlideshow);
      
      if (!self.initialized) {
        self.dropButtons = new DropZones(['obj_1', 'obj_2', 'obj_3']);
        self.dragSurvival = new Draggy('Survival');
        self.dragCTL      = new Draggy('Control_tumour_growth');
        self.dragSymptom = new Draggy('Symptom_control');
        self.dragQuality = new Draggy('Quality_of_life');
        self.dragTolerance = new Draggy('Tolerance');
        self.dragTreatment = new Draggy('Treatment_adherence');
      }
      else if(!self.elm.handler){ 
        self.dropButtons.init();
        self.dragSurvival.init();
        self.dragCTL.init();
        self.dragSymptom.init();
        self.dragQuality.init();
        self.dragTolerance.init();
        self.dragTreatment.init();

        self.dropButtons.update();

      }
      // Hack, as objectives should be logged as a slide
      //window.submitSlideEnter(window.monitormap.slides.IN_objectives, window.monitormap.slides.IN_objectives, 1, '101001 - Intro', '101 - Avastin Lung Cancer');
    },

    /* Modified by QAP. Daniela ask us to implement this in next way.
       When we go to the homeTrack chapter, we must be able to swipe not only
       in choosen chapter, but also in next choices. So we create slideshow "homeTrack" dynamicaly
       and register it in app. And than load this slideshow.
       Contact to vladimir.myskov@qa-power.com or denis.vanat@qa-power.com for more details.
       */
    openSlideshow: function(e) {
      var ele = e.target;
      var slideshow = null;
      var objNr;
      if (ele.nodeType === 3) {
        ele = ele.parentNode;
      }
      objNr = ele.id.split('_')[1];
      // submitCustomEvent('1003 - Intro - Objectives', '1003001 - Priority clicked', objNr + '. ' + ele.innerText);
      do {
        slideshow = ele.getAttribute('data-slideshow');
        slideshow && slide.addToHomeTrack(app.slideshows[slideshow].content);
      } while(ele = ele.nextElementSibling);
      if(app.slideshows.homeTrack.length > 0)
      {
        app.register('homeTrack',app.slideshows.homeTrack,'slideshow');
        app.load('homeTrack');
      }
    },
    
  addToHomeTrack:function(arr){
    var ht = app.slideshows.homeTrack;
    arr.forEach(function(slideName){
      if(ht.indexOf(slideName)==-1){
        ht.push(slideName);
      }
    })
  }
  };  
}); 