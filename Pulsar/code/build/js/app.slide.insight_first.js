document.addEventListener("presentationInit",function(){
  var e = "#insight_first",
    slide = app.slide.insight_first={
    elements:{
      togglehww:"#hww",
      closeWindow:"#closer"
    },
    onEnter:function(ele){
      app.addEvent("tap", slide.togglehwwwindow, slide.element.togglehww),
      app.addEvent("tap", slide.windowCloser, slide.element.closeWindow),
      $("#menu").hide(),
      $("#cone,#ctwo,#cthree,#cfour,#cfive").hide()
    },
    onExit:function(ele){
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
       app.addEvent('onDrop', slide.monitorSlider, document);
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