$(document).ready(function() {

	var $body = $(document.body);
	var $question = $('#question');
	var $answerForm = $('#answer-form');
	var $answerInput = $('#answer-input');

	var rightAnswer;

	function newQuestion() {
		var number = random();
		rightAnswer = getKorean(number);
		$question.html(number);
		$answerInput.val('').focus();
	}

	$answerInput.on('keyup', function() {
		var yourAnswer = $.trim($answerInput.val());
		if (yourAnswer === rightAnswer)
			newQuestion();
	});

	newQuestion();

});
