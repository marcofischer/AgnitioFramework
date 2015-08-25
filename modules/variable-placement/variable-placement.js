/**
 * AGNITIO FRAMEWORK MODULE - Variable Placement
 * This module will allow elements to be positioned differently when
 * running presentation outside of Agnitio and Web.
 * @author - Stefan Liden, sli@agnitio.com
 * @doc - http://docs.labs.agnitio.com/api/variableplacement_introduction
 * @version - 1.0.0
 */
 document.addEventListener('presentationInit', function() {

  // Fallback platform check
  var ua = navigator.userAgent,
      isUIWebView = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Version)/i.test(navigator.userAgent);

  app.variablePlacement = (function () {

    /**
     * Initialize module
     * Should be called before app.init(), e.g. in setup.js.
     * Main menu should have id 'mainmenu' to move it
     * @public
     * @param rules ARRAY [optional] DEFAULT=[] List of rules to apply
     * @param moveMenu BOOLEAN [optional] DEFAULT=true Set to false to leave main menu alone
     */
    function init(rules, moveMenu) {
      items = rules || [];
      // Default lookup of mainmenu
      var moveMenu = moveMenu || true;
      moveTheMenu = moveMenu; // Used if forced

      isntAgnitio = checkPlatform();

      if (window.ag) {
        // Run if in App and NOT Agnitio
        if (isntAgnitio) {
          if (moveMenu) moveMainMenu();
          // Run everytime new content is loaded
          document.addEventListener('contentLoaded', run)
          //run();
        }
      }
      else {
        if (window.console && window.console.error) {
          console.error('The Agnitio Content API (agnitio.js) is required for variable placement of elements');
        }
      }
    }

    /**
     * Figure out if we are running in a non-Agnitio app
     * @private
     * @return bool - 'true' if in non-Agnitio app
     */
    function checkPlatform () {
      // If we have correct version of agnitio.js
      if (ag.platform && ag.platform.isApp) {
        if (ag.platform.isApp() && !ag.platform.isAgnitio()) return true;
      }
      // If we have an old version (< 1.5.1) of agnitio.js
      else {
        if (isUIWebView && (!window.iPlanner && !window.agnitioInfo)) return true;
      }
      return false; // It's Agnitio
    }

    /**
     * Loop through all rules and apply
     * @private
     */
    function run () {
      items.forEach(function(item) {
        findElements(item);
      });
    }

    /**
     * Called if the main menu should be moved by 150px
     * @private
     */
    function moveMainMenu () {
      var menu = document.getElementById('mainmenu');
      menu.style.left = "150px";
      menu.style.overflow = "hidden";
      menu.style.width = (document.body.getBoundingClientRect().width - 150) + "px";
    }

    /**
     * Apply either a CSS property or a classname to an element
     * @private
     */
    function apply (element, rule) {
      if (element) {
        if (rule.property) {
          element.style[rule.property] = rule.value;
        }
        else if (rule.classname) {
          element.classList.add(rule.classname);
        }
      }
    }

    /**
     * Locate elements using provided queries
     * @private
     */
    function findElements(rule) {
      var elements;

      if (/#/.test(rule.query)) {
        elements = document.body.querySelector(rule.query);
        apply(elements, rule);
      }
      else {
        elements = document.body.querySelectorAll(rule.query);
        // If we found some elements
        if (elements.length > 0) {
          Array.prototype.forEach.call(elements, function(element) {
            apply(element, rule);
          });
        }
      }
    }

     
    /**
     * Force activation
     * Used for overriding platform check - good for debugging
     * Should be called right after call to #init
     * @public
     */
    function force () {
      if (moveTheMenu) moveMainMenu();
      document.addEventListener('contentLoaded', run)
    } 

    // Public API
    return {
      init: init,
      force: force
    }

  }());

});