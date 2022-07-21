import { clamp, distance, floor, floor2, floor3 } from './number';

describe('number', () => {
	it('clamp', () => {
		expect(clamp(10, 1, 100)).toStrictEqual(10);
		expect(clamp(10, 50, 100)).toStrictEqual(50);
		expect(clamp(10, 1, 5)).toStrictEqual(5);
	});

	it('floor', () => {
		expect(floor(-1, 3)).toStrictEqual(-3);
		expect(floor(0, 3)).toStrictEqual(0);
		expect(floor(1, 3)).toStrictEqual(0);
		expect(floor(2, 3)).toStrictEqual(0);
		expect(floor(3, 3)).toStrictEqual(3);
	});

	it('floor2', () => {
		expect(floor2(-1)).toStrictEqual(-2);
		expect(floor2(0)).toStrictEqual(0);
		expect(floor2(1)).toStrictEqual(0);
		expect(floor2(2)).toStrictEqual(2);
		expect(floor2(3)).toStrictEqual(2);
	});

	it('floor3', () => {
		expect(floor3(-1)).toStrictEqual(-3);
		expect(floor3(0)).toStrictEqual(0);
		expect(floor3(1)).toStrictEqual(0);
		expect(floor3(2)).toStrictEqual(0);
		expect(floor3(3)).toStrictEqual(3);
	});

	it('distance', () => {
		expect(distance([0, 0], [3, 4])).toStrictEqual(5);
		expect(distance([0, 0], [-3, 4])).toStrictEqual(5);
		expect(distance([0, 0], [-3, -4])).toStrictEqual(5);
		expect(distance([0, 0], [3])).toStrictEqual(NaN);
	});
});
