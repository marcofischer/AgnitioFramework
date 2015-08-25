document.addEventListener('presentationInit', function() {
	var slide = app.slide.next_topic = {
		elements: {
		},
		topics:[],
		timeOut:{},
		onEnter: function(){
			var slideEl = document.getElementById('next_topic'),
					buttons = slideEl.querySelectorAll('li');

			app.slide.timeOut = setTimeout(function(){
				util.addClass(slideEl, 'active');
			},500);

			buttons.forEach(function(button,index) {
				app.addEvent('tap', function() {

					if(util.hasClass(this, 'active')){
						util.removeClass(this, 'active');
						app.slide.next_topic.topics[index] = '';
					}
					else {
						util.addClass(this, 'active');
						app.slide.next_topic.topics[index] = this.innerHTML;
					}

				}, button);
			});

		},
		onExit: function(){
			var slideEl = document.getElementById('next_topic');
			clearTimeout(app.slide.timeOut);
			util.removeClass(slideEl, 'active');
		}
	};
}); 