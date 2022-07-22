import { deepEqual } from './object';

describe('object', () => {
	it('deepEqual', () => {
		const A = {
			number: 42,
			string: 't',
			boolean: true,
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
			delete (C as any)[key];
			expect(deepEqual(A, C)).toBeFalsy();
		});
	});
});
