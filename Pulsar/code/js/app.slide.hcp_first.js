document.addEventListener("presentationInit",function(){var t=app.slide.hcp_first={elements:{Btn:"img"},onEnter:function(e){$("#menu").hide(),app.addEvent("tap",t.showNext,document)},onExit:function(t){$("#menu .hasChildren").next().slideUp();var e=$(".btn.active").last().attr("data-position");ag.submit.data({unique:!0,category:"Insight",label:"Working with healthcare professionals",value:e,valueType:"percentage",path:app.getPath()})},showNext:function(t){var e=$(".btn.active").length;console.log(e),$(".btn").eq(e).addClass("active")}}});