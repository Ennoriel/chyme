import { describe, it, expect } from 'vitest';
import {
	countDuplicates,
	filterAttributesWithLessThan,
	getLongestString,
	groupBy,
	randomItemOfArray,
	range,
	sum,
	uniqBy
} from './array';

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

	it('getLongestString', () => {
		expect(getLongestString([])).toStrictEqual(undefined);
		expect(getLongestString(['azer', 'a', 'z', 'e', 'r'])).toStrictEqual('azer');
		expect(getLongestString(['a', 'z', 'azer', 'e', 'r'])).toStrictEqual('azer');
		expect(getLongestString(['a', 'z', 'e', 'r', 'azer'])).toStrictEqual('azer');
	});

	it('sum', () => {
		expect(sum([])).toStrictEqual(0);
		expect(sum([1])).toStrictEqual(1);
		expect(sum([1, 2, 3, 4])).toStrictEqual(10);
	});

	it('randomItemOfArray', () => {
		expect(randomItemOfArray([])).toStrictEqual(undefined);
		expect(randomItemOfArray([1])).toStrictEqual(1);
		for (let i = 0; i < 100; i++) {
			expect(randomItemOfArray([1, 2, 3, 4])).toBeGreaterThanOrEqual(1);
			expect(randomItemOfArray([1, 2, 3, 4])).toBeLessThanOrEqual(4);
		}
	});
});
