document.addEventListener('presentationInit', function() {
  var slide = app.slide.questions = {
  	elements: {
    	flipPage: '#flipping_page',
      flipFrontBtn: '.front-side .flipping-button',
      flipBackBtn: '.back-side .flipping-button',
      checkBoxes: '.front-side',
      rightOrWrong1: '.answer1',
      rightOrWrong2: '.answer2',
      rightOrWrong3: '.answer3',
      cartBtn: '#cartBtn'
    },
    onEnter: function(ele) {
      app.addEvent('click', slide.flipIt, slide.element.flipFrontBtn);
      app.addEvent('click', slide.flipIt, slide.element.flipBackBtn);
      app.addEvent('click', slide.enableButton, slide.element.checkBoxes);
      app.addEvent('tap', slide.goToCart, slide.element.cartBtn);
      slide.ele = ele;
    },
    onExit: function(ele) {
    },
    enableButton: function(e){
      setTimeout(function(){
        slide.element.checkedAnswers = slide.ele.querySelectorAll(".front-side input[type='radio']:checked");

        if (e.target.type === "radio"){
          if(slide.element.checkedAnswers.length === 3){
            util.addClass(slide.element.flipFrontBtn,'show');
          }
        }
      },1000);
    },
    goToCart: function(e) {
      app.slidePopup.show('next_meeting', slide);
    },
    flipIt: function(e){
      util.toggleClass(slide.element.flipPage,'flipped');

      slide.element.checkedAnswers = slide.ele.querySelectorAll(".front-side input[type='radio']:checked");
      for (var i = 0; i < slide.element.checkedAnswers.length; i++) {
        if(slide.element.checkedAnswers[i].name === 'Question1'){
          if(slide.element.checkedAnswers[i].value != '80%'){
            util.addClass(slide.element.rightOrWrong1, 'wrong');
          }
          else{
            util.removeClass(slide.element.rightOrWrong1, 'wrong');
          }
        }
        else if (slide.element.checkedAnswers[i].name === 'Question2') {
          if(slide.element.checkedAnswers[i].value != '34%'){
            util.addClass(slide.element.rightOrWrong2, 'wrong');
          }
          else{
            util.removeClass(slide.element.rightOrWrong2, 'wrong');
          }
        }
        else if (slide.element.checkedAnswers[i].name === 'Question3') {
          if(slide.element.checkedAnswers[i].value != '13%'){
            util.addClass(slide.element.rightOrWrong3, 'wrong');
          }
          else{
            util.removeClass(slide.element.rightOrWrong3, 'wrong');
          }
        }
      }
    }
  };  
}); 
