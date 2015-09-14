document.addEventListener("presentationInit",function(){
  var slide = app.slide.hcp_first={
    elements:{Btn:"img"},
    onEnter:function(ele){
      $("#menu").hide(),
      app.addEvent("tap",slide.showNext, document)        
    },
    onExit:function(ele){
      $("#menu .hasChildren").next().slideUp();

      //submit position in items when leave slide
      var active = $(".btn.active").last().attr('data-position');
      
      ag.submit.data({
              unique: true,
              category: 'Insight',
              label: "Working with healthcare professionals",
              value: active,
              valueType: "percentage",
              path: app.getPath()
          });
    },
    showNext:function(e){
      //collect number of elements with the class active
      var pos = $(".btn.active").length;
      //add class active from next element
      $(".btn").eq(pos).addClass('active');
    }
  }
});