import { countDuplicates, filterAttributesWithLessThan, groupBy, range, uniqBy } from './array';

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

	it('groupBy', () => {
		expect(groupBy(['A', 'B', 'C', 'C'], (item) => item)).toStrictEqual({
			A: ['A'],
			B: ['B'],
			C: ['C', 'C']
		});
		expect(groupBy([{ k: 3 }, { k: 4 }, { k: 4 }], ({ k }) => k.toString())).toStrictEqual({
			3: [{ k: 3 }],
			4: [{ k: 4 }, { k: 4 }]
		});
	});

	it('countDuplicates', () => {
		expect(countDuplicates(['A', 'B', 'C', 'C'])).toStrictEqual({ A: 1, B: 1, C: 2 });
	});

	it('filterAttributesWithLessThan', () => {
		expect(filterAttributesWithLessThan({ A: 1, B: 1, C: 2 }, 2)).toStrictEqual({ C: 2 });
	});
});
