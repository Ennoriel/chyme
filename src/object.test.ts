import { deepEqual } from './object';

describe('object', () => {
	it('deepEqual - equal rules', () => {
		const date = new Date();
		const A = {
			number: 42,
			string: 't',
			boolean: true,
			date,
			undefined: undefined,
			null: null,
			nan: NaN,
			decimal: 3.14159,
			array: [42, 't', { regex: /t/i }]
		};
		const B = {
			number: 42,
			string: 't',
			boolean: true,
			date,
			undefined: undefined,
			null: null,
			nan: NaN,
			decimal: 3.14159,
			array: [42, 't', { regex: /t/i }]
		};

		// check object equality
		expect(deepEqual(A, B)).toBeTruthy();

		// check object inequality after removing each property individually
		Object.keys(B).forEach((key) => {
			const C = Object.assign({}, B);
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			delete (C as any)[key];
			expect(deepEqual(A, C)).toBeFalsy();
		});
	});

	it('deepEqual - not equal rules', () => {
		expect(deepEqual([1, 2, 3], [1, 2, 3])).toBeTruthy();
		expect(deepEqual([1, 2, 3], [1, 2])).toBeFalsy();
		expect(deepEqual([1, 2, 3], [1, 2, 4])).toBeFalsy();
		expect(deepEqual([1, 2, 3], {})).toBeFalsy();

		expect(deepEqual(new Date(), {})).toBeFalsy();
		expect(deepEqual(new Date(), new Date('December 17, 1995 03:24:00'))).toBeFalsy();
		expect(deepEqual(/abc/, {})).toBeFalsy();
		expect(deepEqual(/abc/, /def/)).toBeFalsy();
		expect(deepEqual({ a: 2 }, {})).toBeFalsy();
		expect(deepEqual({ a: 2 }, { b: 3 })).toBeFalsy();
	});
});
