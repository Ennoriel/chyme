import { range } from './array';

describe('array', () => {
	it('range', () => {
		expect(range(0, 3)).toStrictEqual([0, 1, 2, 3]);
		expect(range(0, 4, 2)).toStrictEqual([0, 2, 4]);
		expect(range(0, -3, -1)).toStrictEqual([0, -1, -2, -3]);
	});
});
