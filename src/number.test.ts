import { clamp } from './number';

describe('number', () => {
	it('clamp', () => {
		expect(clamp(10, 1, 100)).toStrictEqual(10);
		expect(clamp(10, 50, 100)).toStrictEqual(50);
		expect(clamp(10, 1, 5)).toStrictEqual(5);
	});
});
