import { clamp, distance, floor, floor2, floor3 } from './number';

describe('number', () => {
	it('clamp', () => {
		expect(clamp(10, 1, 100)).toStrictEqual(10);
		expect(clamp(10, 50, 100)).toStrictEqual(50);
		expect(clamp(10, 1, 5)).toStrictEqual(5);
	});

	it('floor', () => {
		expect(floor(3.2)).toStrictEqual(3);
		expect(floor(-1, 3)).toStrictEqual(-3);
		expect(floor(0, 3)).toStrictEqual(0);
		expect(floor(1, 3)).toStrictEqual(0);
		expect(floor(2, 3)).toStrictEqual(0);
		expect(floor(3, 3)).toStrictEqual(3);

		expect(floor(-1.709403991699219 - 0.029055071113084807)).toStrictEqual(-2);
		expect(floor(48.082322295961966 - 0.029055071113084807)).toStrictEqual(48);
		expect(floor(-1.5909576416015627 + 0.029055071113084807)).toStrictEqual(-2);
		expect(floor(48.140432438188135 + 0.029055071113084807)).toStrictEqual(48);

		expect(floor(48.051, 0.01)).toStrictEqual(48.05);
		expect(floor(4812.051, 100)).toStrictEqual(4800);
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
