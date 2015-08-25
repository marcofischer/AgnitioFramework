document.addEventListener('presentationInit', function() {
  var slide = app.slide.popup_3d_eye = {
    elements: {
    },
    onEnter: function(ele) {
      // create the object player with the container
        obj=new object2vrPlayer("container");
        obj.readConfigUrl("modules/3d_eye/augenapp.xml");        
        console.log(obj);
    },
    onExit: function(ele) {
      
    }
  };
}); 