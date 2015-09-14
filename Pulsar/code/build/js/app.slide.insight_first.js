document.addEventListener("presentationInit",function(){
  var e="#insight_first",
    n=app.slide.insight_first={
    elements:{
      togglehww:"#hww",
      closeWindow:"#closer"
    },
    onEnter:function(e){
      app.addEvent("tap", n.togglehwwwindow, n.element.togglehww),
      app.addEvent("tap", n.windowCloser, n.element.closeWindow),
      $("#menu").hide(),
      $("#cone,#ctwo,#cthree,#cfour,#cfive").hide()
    },
    onExit:function(n){
      $(e+" #menu .hasChildren").next().slideUp()
    },
    togglehwwwindow:function(e){
      $("#window_hww").show(),
      $("#mainfooter").addClass("windowed"),
      $("#cone").fadeIn("400"),
      $("#ctwo").delay(300).fadeIn("400"),
      $("#cthree").delay(600).fadeIn("400"),
      $("#cfour").delay(900).fadeIn("400"),
      $("#cfive").delay(1200).fadeIn("400"),
       app.addEvent('onDrop', n.monitorSlider, document);
    },
    windowCloser:function(e){
      $("#window_hww").hide(),
      $("#mainfooter").removeClass()
    },
      monitorSlider: function(e) {
        //submit to tracking that the pop up has been hit
          ag.submit.event({
              unique: true,
              category: 'Insight',
              label: "How we work pop up",
              value: "true",
              path: app.getPath()
          });
      }
  }
});