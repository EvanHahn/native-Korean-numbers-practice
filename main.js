$(document).ready(function() {

	var $body = $(document.body);
	var $question = $('#question');
	var $answerInput = $('#answer-input');

	var rightAnswer;

	function newQuestion() {
		var number = random();
		rightAnswer = getKorean(number);
		$question.html(number);
		$answerInput.val('').focus();
	}

	function answerRight() {
		$body.addClass('good');
		setTimeout(function() {
			$body.removeClass('good');
		}, 1000);
	}

	$answerInput.on('keyup', function() {
		var yourAnswer = $.trim($answerInput.val());
		if (yourAnswer === rightAnswer)
			newQuestion();
	});

	$question.fitText(.3);

	newQuestion();

});
