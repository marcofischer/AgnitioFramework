/* CUSTOM MODULE:  SlideOverview
 * A module that will show an overview of all the slides within the presentation
 * NOTE: This has some hard-coded values that might need to be changed if used elsewhere!
 * */

(function() {
	
	window.SlideOverview = function(config) {
		this.config = config || {};
		this.attachTo = this.config.attachTo || [];
		this.triggerSelector = this.config.triggerSelector || document;
		this.pathToThumbs = this.config.pathToThumbs || "content/img/thumbs/<id>.png";
	  this._init();
  };

	SlideOverview.prototype = {
		_init: function(){
			var self = this;
			document.addEventListener("contentLoad",function(){
				if (self.attachTo.indexOf(app.loaded.id) > -1 || self.attachTo.length === 0) {
					if (typeof self.triggerSelector === 'string') {
						self.overviewButton = document.querySelector(self.triggerSelector);
					}
					else {
						self.overviewButton = self.triggerSelector;
					}
					self.overviewButton.addEventListener("longTouch", function(e) {
						touchy.stop(e);
						app.transPopup.show('slide_overview');
						self._build();
					});
				}
			})
		},
		_build: function(){
			var slideContainer = document.querySelector(".overview-thumb-container");;
		  var content = app.loaded.content;
			var markup = '';

			if (app.loaded.type === 'collection') {
				for (var i = 0; i < content.length; i++) {
					var pSlides = app.json.structures[content[i]];
					for (var y = 0; y < pSlides.content.length; y++) {
						var path = this.pathToThumbs.replace('<id>', pSlides.content[y]);
					  markup += '<div class="overview-thumb" data-link="'+ content[i] + '.'+pSlides.content[y]+'"><img src="' + path + '" /></div>';
					};
				};
			}
			else {
				for (var i = 0; i < content.length; i++) {
					var path = this.pathToThumbs.replace('<id>', content[i]);
					markup += '<div class="overview-thumb" data-link="' + content[i] + '"><img src="' + path + '" /></div>';
				};
			}

			slideContainer.innerHTML = markup;
			this._connect(slideContainer);
		},
		_navigate: function(event){
			var attr, content, ele, linkArr, name, subcontent;
			app.transPopup.hide();
			ele = event.target;
			if (ele.nodeType === 3 || ele.nodeType === 1) ele = ele.parentNode;
			attr = ele.getAttribute('data-link');
			if (attr) {
				linkArr = attr.split('.');
				name = app.loaded.id;
				content = linkArr[0] || '';
				subcontent = linkArr[1] || '';
				return app.goTo(name, content, subcontent);
			}
		},
		_connect: function(ele){
			return ele.addEventListener('tap', this._navigate);
		}
	};
})();