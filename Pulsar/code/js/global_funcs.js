document.addEventListener("presentationInit",function(){
	$("#menu ul ul li, .local li").on("tap",function(){
		app.goTo("pulsar",$(this).data("slideshow"),
			$(this).data("content"))}
		),
	$("#goHome").on("tap",function(){
		app.goTo("pulsar","home","home_first")
	}),
	$("#toggleMenu").on("tap",function(){
		$("#menu").toggle()
	}),
	$("#menu li").eq(0).on("tap",function(){
		$(this).next().slideDown()
	}),
	$("#menu li").next().next().on("tap",function(){
		$(this).next().slideDown()
	})
});