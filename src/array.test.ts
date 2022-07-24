import { range, uniqBy } from './array';

describe('array', () => {
	it('range', () => {
		expect(range(0, 3)).toStrictEqual([0, 1, 2, 3]);
		expect(range(0, 4, 2)).toStrictEqual([0, 2, 4]);
		expect(range(0, -3, -1)).toStrictEqual([0, -1, -2, -3]);
	});

	it('uniqBy', () => {
		expect(uniqBy(['A', 'B', 'C', 'C'], (item) => item)).toStrictEqual(['A', 'B', 'C']);
		expect(uniqBy([{ k: 3 }, { k: 4 }, { k: 4 }], ({ k }) => k.toString())).toStrictEqual([
			{ k: 3 },
			{ k: 4 }
		]);
	});
});
