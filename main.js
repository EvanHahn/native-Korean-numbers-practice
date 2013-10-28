$(document).ready(function() {

	var $body = $(document.body);
	var $question = $('#question');
	var $answerInput = $('#answer-input');

	var currentNumber;
	var rightAnswer;

	function newQuestion() {
		var number;
		do {
			number = random();
		} while (number === currentNumber);
		currentNumber = number;
		rightAnswer = getKorean(number);
		$question.html(number);
		$answerInput.val('').focus();
	}

	function answerRight() {
		$body.addClass('good');
		setTimeout(function() {
			$body.removeClass('good');
		}, 1000);
		newQuestion();
	}

	function checkAnswer() {
		var yourAnswer = $.trim($answerInput.val());
		if (yourAnswer === rightAnswer)
			answerRight();
	}

	$answerInput.on('keyup', checkAnswer);
	setInterval(checkAnswer, 1000);

	$question.fitText(.3);

	newQuestion();

});
