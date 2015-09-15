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
      $("#menu").hide();
      // $("#cone,#ctwo,#cthree,#cfour,#cfive").hide()
    },
    onExit:function(ele){
      $(e+" #menu .hasChildren").next().slideUp()
    },
    togglehwwwindow:function(e){
      $("#window_hww").show();
      $("#mainfooter").addClass("windowed");
      $("#cone").addClass("active");
      
      var i = 0;
      var activate = setInterval(function(){

        $('#window_hww img').eq(i).addClass('active');
        
        if( i > 5 )
          clearInterval(activate);

        i++;

      }, 400);

      ag.submit.event({
          unique: true,
          category: 'Insight',
          label: "How we work pop up",
          value: "true",
          path: app.getPath()
      });
    },
    windowCloser:function(e){
      $("#window_hww").hide(),
      $("#mainfooter").removeClass()
    }
  }
});