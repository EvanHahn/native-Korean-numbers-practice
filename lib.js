var getKorean = (function() {

	var ONES = [
		'', // nothing in the ones place
		'한나',
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
		return TENS[tens] + ONES[ones];
	};

})();
