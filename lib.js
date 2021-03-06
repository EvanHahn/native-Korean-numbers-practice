var getKorean = (function() {

	var ONES = [
		'', // nothing in the ones place
		'하나',
		'둘',
		'셋',
		'넷',
		'다섯',
		'여섯',
		'일곱',
		'여덟',
		'아홉'
	];

	var TENS = [
		'', // nothing in the tens place
		'열',
		'스물',
		'서른',
		'마흔',
		'쉰',
		'예순',
		'일흔',
		'여든',
		'아흔'
	];

	return function getKorean(n) {
		var tens = Math.floor(n / 10);
		var ones = n - (tens * 10);
		if (ones && tens)
			return TENS[tens] + ' ' + ONES[ones];
		else
			return TENS[tens] + ONES[ones];
	};

})();

var random = (function() {

	var MIN = 1;
	var MAX = 99;

	var size = MAX - MIN;

	return function random() {
		return Math.floor(Math.random() * size) + MIN;
	}

})();
