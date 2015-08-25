/* Custom Reference Module
 * This module handles references
 * This module is customized for this presentation
 * */
(function() {
  var d = document,
      prefix = util.getBrowserPrefix("Transform");

  // Toggler on clicking outside of reference box
  document.addEventListener('tap', function() {
    if (app.refs.isVisible) {
      app.refs.toggleList();
    }
  });

  window.References = function(id) {
    var self = this;
    this.version = 'CustomReferences_v1';
    this.id = id;
    this.ele = app.elements.references = d.getElementById(id);
    this.listElement = d.getElementById('referencelist');
    this.current = '';
    this.previous = '';
    this.markup = '';
    this.isVisible = false;
    setTimeout(function(){
      self.init();
    },0);
  };

  References.prototype = {
    init: function() {
      var self = this;
      document.addEventListener('slideEnter', function(e) {
        var current = e.target.id;
        self.update(current);
        if (self.isVisible) {
          self.toggleList();
        }
      });
      document.addEventListener('inlineSlideEnter', function(e) {
        var current = e.target.id;
        self.update(current);
        if (self.isVisible) {
          self.toggleList();
        }
      });
      document.addEventListener('slidePopupLoad', function(e) {
        var current = e.target.id;
        self.update(current);
        if (self.isVisible) {
          self.toggleList();
        }
      });

      document.addEventListener('slidePopupUnload', function(e) {
        var current = app.slideshow.current;
        self.reset(current);
        self.update(current);
      });

      this.ele.addEventListener('tap', function(e) {
        self.toggleList();
      });
      this.listElement.addEventListener('tap', function(e) {
        self.openReference(e.target);
      });
    },

    // Reference List methods
    update: function(current) {
      this.previous = '';
      
      if (!app.referencemap[current]) {
        app.elements.references.style.display = 'none';
        this.set('');
      }
      else {
        app.elements.references.style.display = 'block';
        this.set(current);
      }
    },
    toggleList: function() {
      var self = this;
      if (this.isVisible) {
        this.listElement.style.cssText = prefix + 'transform:translate(-382px,0);';
        this.isVisible = false;
      } 
      else {
        this.listElement.innerHTML = this.buildList();
        this.listElement.style.cssText = prefix + 'transform:translate(0,0);';
        // Adding a timeout so that global event listener get correct state
        setTimeout(function() {
          self.isVisible = true;
        },500);
      }
    },
    buildList: function() {
      var list = '';

      // workaround - better solution?
      if(this.current === ''){
        this.current = 'intro';
      }

      app.referencemap[this.current].forEach(function(reference) {
      if(reference.link == undefined || reference.link == null) {
           reference.link = '<b>None</b>';
      }
        list += '<li data-reference="' + reference.pdf +  '" data-PDFlink="' + reference.link +'">' + reference.title + '</li>';
      });
      return list;
    },
    openReference: function(ele) {
      if (ele.nodeType === 3) {
        ele = ele.parentNode;
      }
      var file = ele.getAttribute('data-reference');
      var link = ele.getAttribute('data-PDFlink');
      if (file) {
        this.open(file,link);  
        this.listElement.style.cssText = prefix + 'transform:translate(-382px,0);';
        this.isVisible = false;
      }
    },
    open: function(file,link) {
      console.log('Opening file: ' + file);
      if (typeof ag.openPDF !== 'undefined') {
        ag.openPDF(file,link);
      }
    },
    reset: function(name) {
      this.current = name || '';
      this.ele.innerHTML = '';
    },
    set: function(name) {
      var name = name || app.slideshow.current;
      this.previous = this.current;
      this.current = name;
    },
    unset: function() {
      if (this.previous) {
        this.current = this.previous;
      }
    }
  };
})();
