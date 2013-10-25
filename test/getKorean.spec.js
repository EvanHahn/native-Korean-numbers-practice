describe('getKorean', function() {

	it('converts 1 through 9', function() {
		expect(getKorean(1)).toEqual('하나');
		expect(getKorean(2)).toEqual('둘');
		expect(getKorean(3)).toEqual('셋');
		expect(getKorean(4)).toEqual('넷');
		expect(getKorean(5)).toEqual('다섯');
		expect(getKorean(6)).toEqual('여섯');
		expect(getKorean(7)).toEqual('일곱');
		expect(getKorean(8)).toEqual('여덟');
		expect(getKorean(9)).toEqual('아홉');
	});

	it('converts 10', function() {
		expect(getKorean(10)).toEqual('열');
	});

	it('converts 11 through 19', function() {
		expect(getKorean(11)).toEqual('열하나');
		expect(getKorean(12)).toEqual('열둘');
		expect(getKorean(13)).toEqual('열셋');
		expect(getKorean(14)).toEqual('열넷');
		expect(getKorean(15)).toEqual('열다섯');
		expect(getKorean(16)).toEqual('열여섯');
		expect(getKorean(17)).toEqual('열일곱');
		expect(getKorean(18)).toEqual('열여덟');
		expect(getKorean(19)).toEqual('열아홉');
	});

	it('converts 20, 30, 40, 50, 60, 70, 80, 90', function() {
		expect(getKorean(20)).toEqual('스물');
		expect(getKorean(30)).toEqual('서른');
		expect(getKorean(40)).toEqual('마흔');
		expect(getKorean(50)).toEqual('쉰');
		expect(getKorean(60)).toEqual('예순');
		expect(getKorean(70)).toEqual('일흔');
		expect(getKorean(80)).toEqual('여든');
		expect(getKorean(90)).toEqual('아흔');
	});

	it('converts 21', function() {
		expect(getKorean(21)).toEqual('스물하나');
	});

	it('converts 69', function() {
		expect(getKorean(69)).toEqual('예순아홉');
	});

});
