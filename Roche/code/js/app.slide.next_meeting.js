document.addEventListener('presentationInit', function() {
	var slide = app.slide.next_meeting = {
		elements: {
			inline: ".inline"
		},
		onEnter: function(){
			app.slideshow.embed('cart', slide.element.inline);
		},
		onExit: function(){
			app.slideshow.removeEmbedded();
		}
	};
}); 