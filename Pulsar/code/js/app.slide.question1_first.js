document.addEventListener("presentationInit",function(){
	var t=app.slide.question1_first={
		elements:{
		aboutBtn:"#aboutus",
		philBtn:"#philosophy",
		insBtn:"#insight"
	},
	onEnter:function(n){
		$("#menu").hide(),
		app.addEvent("tap",t.takemetoAbout,t.element.aboutBtn),
		app.addEvent("tap",t.takemetoPhil,t.element.philBtn),
		app.addEvent("tap",t.takemetoIns,t.element.insBtn)
	},
	onExit:function(t){
		$("#menu .hasChildren").next().slideUp()
	},
	takemetoAbout:function(t){
		app.goTo("pulsar","about","about_first")
	},
	takemetoPhil:function(t){
		app.goTo("pulsar","philosophy","philosophy_first")
	},
	takemetoIns:function(t){
		app.goTo("pulsar","insight","insight_first")}
	}
});