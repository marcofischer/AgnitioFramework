(function() {
  var slide = app.slide.toc = {
    onEnter: function(ele) {
      var search = window.location.search;
      var doc;
      
      this.data = null;
      this.navContainer = ele.querySelector('#apiContent');
      this.linksContainer = ele.querySelector('#links');
      this.linksHeader = ele.querySelector('#contentTitle');
      this.linksContent = ele.querySelector('#content');
      
      app.getData('content/data/docs.json', function(data) { slide.data = data[0]; });
      this.keys = Object.keys(this.data.chapters);
      
      this.navContainer.addEventListener('tap', this.openLinkPage);
      this.linksContainer.addEventListener('tap', this.openDoc);
      
      if (search) {
        doc = search.replace('?', '');
        app.slidePopup.show(doc);
      }
    },
    onExit: function(ele) {
      
    },
    openLinkPage: function(e) {
      var ele = e.target;
      var file, content, general, properties, methods;
      var markup = '';
      ele = ele.nodeType === 3 ? ele.parentNode : ele;
      //file = ele.getAttribute('data-file');
      file = ele.innerText;
      if (file in slide.data.chapters) {
        slide.linksHeader.innerText = file;
        content = slide.data.chapters[file];
        if ("general" in content) {
          markup += '<ul class="link-list">';
          general = content["general"];
          general.forEach(function(link) {
            markup += '<li data-file="' + link[1] + '">' + link[0] + '</li>';
          });
          markup += '</ul>';
        }
        if ("properties" in content) {
          markup += '<h3>PROPERTIES</h3>';
          markup += '<ul class="link-list">';
          general = content["properties"];
          general.forEach(function(link) {
            markup += '<li data-file="' + link[1] + '">' + link[0] + '</li>';
          });
          markup += '</ul>';
        }
        if ("methods" in content) {
          markup += '<h3>METHODS</h3>';
          markup += '<ul class="link-list">';
          general = content["methods"];
          general.forEach(function(link) {
            markup += '<li data-file="' + link[1] + '">' + link[0] + '</li>';
          });
          markup += '</ul>';
        }
        slide.linksContent.innerHTML = markup;
      }
    },
    openDoc: function(e) {
      var ele = e.target;
      var file;
      ele = ele.nodeType === 3 ? ele.parentNode : ele;
      file = ele.getAttribute('data-file');
      if (file) {
        app.slidePopup.show(file);
      }
    }
  }
})();