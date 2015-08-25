/**
 * AGNITIO FRAMEWORK MODULE - Timer
 * Create timers for custom monitoring of i.e. popups
 * It is possible to start and stop individual timers repeatidly
 * @author Stefan Liden - sli@agnitio.com
 */
(function() {

  window.Timer = function() {
    this.time = 0;
    this.startTime = 0;
    this.endTime = 0;
    this.isActive = false;
  };

  Timer.prototype = {
    start: function() {
      this.isActive = true;
      this.startTime = new Date().getTime();
    },
    stop: function() {
      this.endTime = new Date().getTime();
      // Make sure the timer is active before updating
      if (this.isActive) {
        this.isActive = false;
        var timediff = this.endTime - this.startTime;
        // Add current time-slot to previously recorded time
        this.time = this.time + timediff;
      }
    },
    reset: function() {
      this.isActive = false;
      this.time = 0;
    },
    // Return the timers time as hh:mm:ss
    toString: function() {
      return this.msToHours(this.time);
    },
    /************************************************************************
      Convert fra milliseconds to hh:mm:ss 
      By Mette Schmidt - Agnitio
     ************************************************************************/
    msToHours: function(ms) {

      ms = parseInt(ms, 10);
      
      var hh = Math.floor(ms / 3600000);
      var mm = Math.floor((ms - (hh * 3600000)) / 60000);
      var ss = parseInt(((ms - (hh * 3600000) - (mm * 60000)) / 1000), 10);

      hh = (hh < 10) ? "0" + hh : hh;
      mm = (mm < 10) ? "0" + mm : mm;
      ss = (ss < 10) ? "0" + ss : ss;
      
      return hh + ":" + mm + ":" + ss;
    }
  };

})();
