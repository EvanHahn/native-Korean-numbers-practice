describe('random', function() {

	var TEST_TRIES = 1000;

	it('generates random numbers between 1 and 99', function() {

		var val;

		for (var i = 0; i < TEST_TRIES; i ++) {
			val = random();
			expect(val).toBeGreaterThan(0);
			expect(val).toBeLessThan(100);
			expect(Math.floor(val)).toEqual(val);
		}

	});

});
