document.addEventListener("presentationInit",function(){var e="0",t=app.slide.question1_first={elements:{slider1:"#slider1"},onEnter:function(e){$("#menu").hide(),app.addEvent("change",t.sliderShow,t.element.slider1),app.addEvent("swipeleft",touchy.stop,t.element.slider1),app.addEvent("swiperight",touchy.stop,t.element.slider1)},onExit:function(t){$("#menu .hasChildren").next().slideUp(),console.log(e),$(slider1).hide(),ag.submit.event({unique:!0,category:"Joint Working",label:"How many projects?",value:e,path:app.getPath()})},sliderShow:function(t){noProjects=this.value,e=noProjects}}});