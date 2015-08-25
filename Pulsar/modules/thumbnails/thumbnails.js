/**
 * AGNITIO FRAMEWORK MODULE - Thumbnails
 * This module will automatically create a menu bar with thumbnails (thumbnail images need to exist in a folder).
 * @author - Stefan Liden, sli@agnitio.com
 */
(function() {

  var currentThumbs = null;
  var durationPrefix = util.getBrowserPrefix("TransitionDuration");
  var transformPrefix = util.getBrowserPrefix("Transform");

  window.Thumbnails = function (config) {
    this.version = '1.0';
    this.requirements = 'touchy.js, draggy.js, util.js',
    this.config = config || {};
    this.containerId = this.config.container || 'thumbs';
    this.ele = app.elements.thumbs = document.getElementById(this.containerId);
    this.thumbnails = this.config.thumbnails;
    this.pathToThumbs = config.pathToThumbs || "content/img/thumbs/<id>.png";
    this.attachTo = this.config.attachTo || [];
    this.offset = this.config.offset || 0;
    this.hideSingles = this.config.hideSingles || false;
    this._init();
  };

  Thumbnails.prototype = {
    _init:function () {
      var self = this;
      // TODO: replace with swipeScroll once built
      this.ele.addEventListener('swipeleft', touchy.stop);
      this.ele.addEventListener('swiperight', touchy.stop);
      this.ele.addEventListener('swipeup', touchy.stop);
      this.ele.addEventListener('swipedown', touchy.stop);

      // Initialize and/or insert menu when content is loaded
      document.addEventListener('contentLoad', function () {
        if (self.attachTo.indexOf(app.loaded.id) > -1 || self.attachTo.length === 0) {
          currentThumbs = self;
          self.contentType = app.loaded.type;

          self.thumbIds = app.slideshow.content;

          if (!self.initialized) self._build();

          self._insert();
          self._connect();
          self._setCurrent();

          if (app.loaded.type === 'collection') {
            document.addEventListener('sectionEnter', self._enterChapter);
          }
          document.addEventListener('slideEnter', self._setCurrent);
        }
      });

      // If slideshow/collection specific menu, remove when content unloads
      document.addEventListener('contentUnload', function () {
        if (self.attachTo.indexOf(app.loaded.id) > -1) {
          self._remove();
          if (app.loaded.type === 'slideshow') {
            document.removeEventListener('slideEnter', self._setCurrent);
          }
          else {
            document.removeEventListener('sectionEnter', self._setCurrent);
          }
        }
      });
    },

    _enterChapter: function (event) {
      currentThumbs.thumbIds = app.slideshow.content;
      currentThumbs._remove();
      currentThumbs._build();
      currentThumbs._insert();
      currentThumbs._connect();
      currentThumbs._setCurrent();
    },

    // Create the HTML of the thumbnails
    _build:function () {
      var self = this,
        markup = '';
      if (!this.hideSingles || this.thumbIds.length > 1) {
        // markup = '<ul id="' + app.loaded.id + 'Menu" class="menu">';
        this.thumbIds.forEach(function (item) {
          var path = self.pathToThumbs.replace('<id>', item);
          var li = '<li class="thumbnail"><img data-goto="' + item + '" src="'+ path + '" /></li>';
          markup += li;
        });
        this.ele.style.visibility = 'visible';
        this.markup = null;
      }
      else {
        this.ele.style.visibility = 'hidden';
      }
      this.markup = markup;
    },

    // Add markup to index page
    _insert:function () {
      var self = this;
      var scrollLimit;
      var list = document.createElement('ul');
      list.id = app.loaded.id + 'Thumbs';
      // list.setAttribute('class', 'thumbnails');
      list.innerHTML = this.markup;
      // this.ele.innerHTML = this.markup;
      this.ele.appendChild(list);
      setTimeout(function() {
        self._getWidth();
        scrollLimit = app.dimensions[0] - self.thumbsWidth;
        // No reason to have a scroller if not wider than container
        if (scrollLimit < 0) {
          self.scroller = new Draggy(list.id, {
            restrictY: true,
            limitsX: [scrollLimit, 0],
            onChange: function(x,y) {
              self.offset = x;
            }
          });
          self.scroller.moveTo(self.offset, 0);
        }
        else {
          self.scroller = null;
        }
      },500);
      this.list = null;
      this.list = list;
    },

    _getWidth: function() {
      var link, links, width, _i, _len, _results;
      links = currentThumbs.ele.querySelectorAll('li');
      this.thumbsWidth = 0;
      this.linkWidths = [];
      _results = [];
      for (_i = 0, _len = links.length; _i < _len; _i++) {
        link = links[_i];
        width = links[_i].getBoundingClientRect().width;
        this.thumbsWidth += width;
        _results.push(this.linkWidths.push(width));
      }
      return _results;
    },

    // Uses app.slideshow.scrollTo(id)
    _navigate:function (event) {
      touchy.stop(event);
      var ele = event.target;
      var prev, attr, linkArr, name, content, subcontent, listItem;
      if (ele.nodeType === 3) {
        ele = ele.parentNode;
      }
      if (ele.tagName.toLowerCase() !== 'img') {
        util.toggleClass(currentThumbs.ele, 'active');
      }
      else {
        prev = this.querySelector('.selected');
        attr = ele.getAttribute('data-goto');
        if (attr) {
          listItem = ele.parentNode;
          if (prev !== listItem) {
            if (prev) {
              util.removeClass(prev, 'selected');
            }
            util.addClass(listItem, 'selected');
            app.slideshow.scrollTo(attr);
          }
          util.removeClass(currentThumbs.ele, 'active');
        }
      }
    },

    // Clean up if unloading
    _remove:function () {
      this.ele.removeEventListener('tap', this._navigate);
      this.ele.removeChild(this.list);
    },

    // Add internal event listeners
    _connect:function () {
      var self = this;
      this.ele.addEventListener('tap', this._navigate);
    },

    // Called on 'slideEnter' or 'sectionEnter'
    // TODO: replace hardcoded width
    _setCurrent:function () {
      var prev = currentThumbs.list.querySelector('.selected'),
        query = '[data-goto="' + app.slideshow.current + '"]',
        listItem;
      link = currentThumbs.list.querySelector(query);
      if (prev) {
        util.removeClass(prev, 'selected');
      }
      if (link) {
        listItem = link.parentNode;
        util.addClass(listItem, 'selected');
        if (currentThumbs.scroller) {
          var realPos = util.getPosition(link)[0];
          var pos = realPos + currentThumbs.offset;
          var wd = link.getBoundingClientRect().width;
          var rightPos = pos + wd;
          var toMove = 0;
          var defaultOffset = currentThumbs.config.offset || 0;
          var absOffset = defaultOffset;//Math.abs(defaultOffset);

          if (rightPos >= 1024) {
            toMove = (rightPos - 1024) - currentThumbs.offset;
            currentThumbs.list.style.cssText += durationPrefix + 'transition-duration:0.5s;';
            currentThumbs.list.style.cssText += transformPrefix + 'transform:translate(-' + toMove + 'px, 0);';
            return currentThumbs.offset = -toMove;
          }
          else if (link.offsetLeft < -defaultOffset) {
            toMove = pos - currentThumbs.offset;
            currentThumbs.list.style.cssText += durationPrefix + 'transition-duration:0.5s;';
            currentThumbs.list.style.cssText += transformPrefix + 'transform:translate(-' + toMove + 'px, 0);';
            currentThumbs.offset = -toMove;
          }
          else if (rightPos > absOffset && (realPos + wd) < 1024) {
            toMove = defaultOffset;
            currentThumbs.list.style.cssText += durationPrefix + 'transition-duration:0.5s;';
            currentThumbs.list.style.cssText += transformPrefix + 'transform:translate(' + toMove + 'px, 0);';
            currentThumbs.offset = toMove;
          }
          else if (pos < 0) {
            toMove = currentThumbs.offset - pos;
            currentThumbs.list.style.cssText += durationPrefix + 'transition-duration:0.5s;';
            currentThumbs.list.style.cssText += transformPrefix + 'transform:translate(' + toMove + 'px, 0);';
            currentThumbs.offset = toMove;
          }
          setTimeout(function() {
            currentThumbs.scroller.moveTo(currentThumbs.offset, 0);
          },500);
        }
      }
    }
  };
}());