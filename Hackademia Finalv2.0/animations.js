/* planet animations */

function merc_reveal() {
  	var mercury_pop = document.getElementById("merc_popup");
 	mercury_pop.classList.toggle("show");
}

function ven_reveal() {
  	var venus_pop = document.getElementById("ven_popup");
 	venus_pop.classList.toggle("show");
}

function su_reveal() {
  	var sun_pop = document.getElementById("su_popup");
 	sun_pop.classList.toggle("show");
}

function ear_reveal() {
  	var earth_pop = document.getElementById("ear_popup");
 	earth_pop.classList.toggle("show");
}

function ma_reveal() {
  	var mars_pop = document.getElementById("ma_popup");
 	mars_pop.classList.toggle("show");
}

function mo_reveal() {
  	var moon_pop = document.getElementById("mo_popup");
 	moon_pop.classList.toggle("show");
}

function jup_reveal() {
  	var jupiter_pop = document.getElementById("jup_popup");
 	jupiter_pop.classList.toggle("show");
}

function sat_reveal() {
  	var saturn_pop = document.getElementById("sat_popup");
 	saturn_pop.classList.toggle("show");
}


function ura_reveal() {
  	var uranus_pop = document.getElementById("ura_popup");
 	uranus_pop.classList.toggle("show");
}

function nep_reveal() {
  	var neptune_pop = document.getElementById("nep_popup");
 	neptune_pop.classList.toggle("show");
 	
 	ura_reveal()
}

function plu_reveal() {
  	var pluto_pop = document.getElementById("plu_popup");
 	pluto_pop.classList.toggle("show");

 	ura_reveal()
 	nep_reveal()
}

function easter_egg() {
	alert("WoAHHHH there! That isn't a planet!")

}

function too_far() {
	alert("Looks like nothing is there... OR IS THERE?!??")
}

/*Popup Quiz */
var Quiz = function(){
  var self = this;
  this.init = function(){
    self._bindEvents();
  }
  
  this.correctAnswers = [
    { question: 1, answer: 'd' },
    { question: 2, answer: 'a' },
    { question: 3, answer: 'a' },
    { question: 4, answer: 'b' },
    { question: 5, answer: 'c' },
    { question: 6, answer: 'd' },
  ]
  
  this._pickAnswer = function($answer, $answers){
    $answers.find('.quiz-answer').removeClass('active');
    $answer.addClass('active');
  }
  this._calcResult = function(){
    var numberOfCorrectAnswers = 0;
    $('ul[data-quiz-question]').each(function(i){
      var $this = $(this),
          chosenAnswer = $this.find('.quiz-answer.active').data('quiz-answer'),
          correctAnswer;
      
      for ( var j = 0; j < self.correctAnswers.length; j++ ) {
        var a = self.correctAnswers[j];
        if ( a.question == $this.data('quiz-question') ) {
          correctAnswer = a.answer;
        }
      }
      
      if ( chosenAnswer == correctAnswer ) {
        numberOfCorrectAnswers++;
        
        // highlight this as correct answer
        $this.find('.quiz-answer.active').addClass('correct');
      }
      else {
        $this.find('.quiz-answer[data-quiz-answer="'+correctAnswer+'"]').addClass('correct');
        $this.find('.quiz-answer.active').addClass('incorrect');
      }
    });
    if ( numberOfCorrectAnswers == 1 ) {
      return {code: 'bad', text: 'Score: 1/6. Try harder!'};
    }
    else if ( numberOfCorrectAnswers == 2 ) {
      return {code: 'bad', text: 'Score: 2/6. Try harder!'};
    }
    else if ( numberOfCorrectAnswers == 3 ) {
      return {code: 'mid', text: 'Score: 3/6. Nice try!'};
    }
    else if ( numberOfCorrectAnswers == 4 ) {
      return {code: 'mid', text: 'Score: 4/6. Nice try!'};
    }
    else if ( numberOfCorrectAnswers == 5 ) {
      return {code: 'good', text: 'Score: 5/6. Almost!!'};
    }
    else if ( numberOfCorrectAnswers == 6 ) {
      return {code: 'good', text: 'Score: 6/6. WELL DONE!!!'};
    }
    else if ( numberOfCorrectAnswers == 0 ) {
      return {code: 'good', text: 'Score 0/6. Too bad!'};
    }
  }
  this._isComplete = function(){
    var answersComplete = 0;
    $('ul[data-quiz-question]').each(function(){
      if ( $(this).find('.quiz-answer.active').length ) {
        answersComplete++;
      }
    });
    if ( answersComplete >= 6 ) {
      return true;
    }
    else {
      return false;
    }
  }
  this._showResult = function(result){
    $('.quiz-result').addClass(result.code).html(result.text);
  }
  this._bindEvents = function(){
    $('.quiz-answer').on('click', function(){
      var $this = $(this),
          $answers = $this.closest('ul[data-quiz-question]');
      self._pickAnswer($this, $answers);
      if ( self._isComplete() ) {
        
        // scroll to answer section
        $('html, body').animate({
          scrollTop: $('.quiz-result').offset().top
        });
        
        self._showResult( self._calcResult() );
        $('.quiz-answer').off('click');
        
      }
    });
  }
}
var quiz = new Quiz();
quiz.init();

/*Quiz Reset */
var fullReset = document.getElementById('fullReset');

    fullReset.addEventListener('click', function(e) {
      location.reload();
    }, false);
















