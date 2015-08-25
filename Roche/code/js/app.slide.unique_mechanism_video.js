document.addEventListener('presentationInit', function() {
  var slide = app.slide.unique_mechanism_video = {
    elements: {
    },
    onEnter: function(ele) {
      slide.element.fullscreenBtn = ele.querySelector(".fullscreen-button");
      slide.element.videoOverlay = ele.querySelector(".video-overlay");
      slide.element.videoCont = ele.querySelector("#video_wrap");
      slide.element.videoEle = ele.querySelector("#placebo_video");
      slide.element.bigPlayBtn = ele.querySelector(".big-play-button");
      slide.element.videoControls = ele.querySelector(".video-controls");
      slide.element.playBtn = ele.querySelector(".play-button");
      slide.element.progressBar = ele.querySelector(".progress-bar");
      slide.element.progressCont = ele.querySelector(".progress-container");
      slide.element.currentTimeText = ele.querySelector(".current-time");
      slide.element.endTimeText = ele.querySelector(".total-time");

      slide.element.eleArticle = ele;

      app.addEvent('click', slide.togglePlay, slide.element.bigPlayBtn);
      app.addEvent('click', slide.togglePlay, slide.element.playBtn);
      app.addEvent('click', slide.togglePlay, slide.element.videoOverlay);
      app.addEvent('click', slide.enterFullscreen, slide.element.fullscreenBtn);
      app.addEvent('timeupdate', slide.updateProgress, slide.element.videoEle);
      app.addEvent('click', slide.moveProgressBar, slide.element.progressCont);
    },
    onExit: function(ele){
      slide.element.videoEle.pause();
      util.removeClass(slide.element.bigPlayBtn, "hide");
      util.removeClass(slide.element.videoControls, "show");
      util.removeClass(slide.element.videoCont, "video-playing");
      util.removeClass(slide.element.videoCont, "video-paused");
    },
    toggleControls: function(e){
      if (slide.element.videoEle.paused) {
        util.addClass(slide.element.videoControls, "show");
      }
      else{
        util.removeClass(slide.element.videoControls, "show");
      }
    },
    togglePlay: function(e){
      if (util.hasClass(slide.element.bigPlayBtn, "hide")) {
        if (!slide.element.videoEle.paused) {
          slide.element.videoEle.pause();
          slide.toggleControls();
          util.removeClass(slide.element.videoCont, "video-playing");
          util.addClass(slide.element.videoCont, "video-paused");
        }
        else{
          slide.element.videoEle.play();
          slide.toggleControls();
          util.removeClass(slide.element.videoCont, "video-paused");
          util.addClass(slide.element.videoCont, "video-playing");
        }
      }
      else{
        util.addClass(slide.element.bigPlayBtn, "hide");
        slide.element.videoEle.play();
        util.addClass(slide.element.videoCont, "video-playing");
      }
    },
    enterFullscreen: function(){
      slide.element.videoEle.webkitEnterFullscreen();
      slide.element.videoEle.play();
      slide.toggleControls();
    },
    updateProgress: function() {
      var value = 0;
      if (slide.element.videoEle.currentTime > 0) {
        value = Math.floor((100 / slide.element.videoEle.duration) * slide.element.videoEle.currentTime);
      }
      var videoCurrentTime = slide.formatTime(slide.element.videoEle.currentTime);
      var videoEndTime = slide.formatTime(slide.element.videoEle.duration);

      slide.element.currentTimeText.innerHTML = videoCurrentTime;
      slide.element.endTimeText.innerHTML = videoEndTime; 

      slide.element.progressBar.style.width = value + "%";
    },
    moveProgressBar: function(e){
      isTouch = 'click' in window;

      var posX = isTouch ? e.touches[0].pageX : e.clientX;
      var startPos = slide.getPosition(slide.element.progressCont);
      var progressMax = 0,
          value = 0,
          newPos = 0,
          newVideoPos = 0;

      newPos = posX - startPos[0];
      progressMax = slide.element.progressCont.offsetWidth;
      value = Math.floor((newPos / progressMax) * 100);
      slide.element.progressBar.style.width = value + "%";
      newVideoPos = (slide.element.videoEle.duration / 100) * value;
      slide.element.videoEle.currentTime = newVideoPos;
    },
    getPosition: function(ele) {
      var curleft = 0;
      var curtop = 0;
      if (ele.offsetParent) {
        do {
          curleft += ele.offsetLeft;
          curtop += ele.offsetTop;
          if(ele.offsetParent === slide.element.eleArticle){
            break;
          }
        } while (ele = ele.offsetParent);
      }

      return [curleft,curtop];
    },
    formatTime: function(seconds) {
      var guide = guide || seconds, // Default to using seconds as guide
          s = Math.floor(seconds % 60),
          m = Math.floor(seconds / 60 % 60),
          h = Math.floor(seconds / 3600),
          gm = Math.floor(guide / 60 % 60),
          gh = Math.floor(guide / 3600);

      // Check if we need to show hours
      h = (h > 0 || gh > 0) ? h + ":" : "";

      // If hours are showing, we may need to add a leading zero.
      // Always show at least one digit of minutes.
      m = (((h || gm >= 10) && m < 10) ? "0" + m : m) + ":";

      // Check if leading zero is need for seconds
      s = (s < 10) ? "0" + s : s;

      return h + m + s;
    }
  };
}); 