document.addEventListener("presentationInit",function(){
  var n=app.slide.hcp_first={
    elements:{Btn:"img"},
    onEnter:function(t){
      $("#menu").hide(),
      app.addEvent("tap",n.showNext, document)        
    },
    onExit:function(n){
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
    showNext:function(n){
      //collect number of elements with the class active
      var pos = $(".btn.active").length;
      console.log(pos);
      //add class active from next element
      $(".btn").eq(pos).addClass('active');
    }
  }
});