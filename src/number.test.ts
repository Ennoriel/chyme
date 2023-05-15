import {
	applyRoundingFunction,
	ceil,
	clamp,
	distance,
	floor,
	floor2,
	floor3,
	formatThousands,
	round
} from './number';

describe('number', () => {
	it('clamp', () => {
		expect(clamp(10, 1, 100)).toStrictEqual(10);
		expect(clamp(10, 50, 100)).toStrictEqual(50);
		expect(clamp(10, 1, 5)).toStrictEqual(5);
	});

	it('applyRoundingFunction', () => {
		expect(applyRoundingFunction(Math.floor, 3.2)).toStrictEqual(3);
	});

	it('floor', () => {
		expect(floor(3.2)).toStrictEqual(3);
		expect(floor(-1, 3)).toStrictEqual(-3);
		expect(floor(0, 3)).toStrictEqual(0);
		expect(floor(1, 3)).toStrictEqual(0);
		expect(floor(2, 3)).toStrictEqual(0);
		expect(floor(3, 3)).toStrictEqual(3);

		expect(floor(900 / 60)).toStrictEqual(15);
		expect(floor(930 / 60)).toStrictEqual(15);
		expect(floor(960 / 60)).toStrictEqual(16);
		expect(floor(990 / 60)).toStrictEqual(16);

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

	it('round', () => {
		expect(round(3.2)).toStrictEqual(3);
		expect(round(-1, 3)).toStrictEqual(-0);
		expect(round(0, 3)).toStrictEqual(0);
		expect(round(1, 3)).toStrictEqual(0);
		expect(round(2, 3)).toStrictEqual(3);
		expect(round(3, 3)).toStrictEqual(3);

		expect(round(900 / 60)).toStrictEqual(15);
		expect(round(930 / 60)).toStrictEqual(16);
		expect(round(960 / 60)).toStrictEqual(16);
		expect(round(990 / 60)).toStrictEqual(17);

		expect(round(-1.709403991699219 - 0.029055071113084807)).toStrictEqual(-2);
		expect(round(48.082322295961966 - 0.029055071113084807)).toStrictEqual(48);
		expect(round(-1.5909576416015627 + 0.029055071113084807)).toStrictEqual(-2);
		expect(round(48.140432438188135 + 0.029055071113084807)).toStrictEqual(48);

		expect(round(48.051, 0.01)).toStrictEqual(48.05);
		expect(round(4812.051, 100)).toStrictEqual(4800);
		expect(round(48.059, 0.01)).toStrictEqual(48.06);
		expect(round(4892.051, 100)).toStrictEqual(4900);
	});

	it('ceil', () => {
		expect(ceil(3.2)).toStrictEqual(4);
		expect(ceil(-1, 3)).toStrictEqual(-0);
		expect(ceil(0, 3)).toStrictEqual(0);
		expect(ceil(1, 3)).toStrictEqual(3);
		expect(ceil(2, 3)).toStrictEqual(3);
		expect(ceil(3, 3)).toStrictEqual(3);

		expect(ceil(900 / 60)).toStrictEqual(15);
		expect(ceil(930 / 60)).toStrictEqual(16);
		expect(ceil(960 / 60)).toStrictEqual(16);
		expect(ceil(990 / 60)).toStrictEqual(17);

		expect(ceil(-1.709403991699219 - 0.029055071113084807)).toStrictEqual(-1);
		expect(ceil(48.082322295961966 - 0.029055071113084807)).toStrictEqual(49);
		expect(ceil(-1.5909576416015627 + 0.029055071113084807)).toStrictEqual(-1);
		expect(ceil(48.140432438188135 + 0.029055071113084807)).toStrictEqual(49);

		expect(ceil(48.051, 0.01)).toStrictEqual(48.06);
		expect(ceil(4812.051, 100)).toStrictEqual(4900);
	});

	it('distance', () => {
		expect(distance([0, 0], [3, 4])).toStrictEqual(5);
		expect(distance([0, 0], [-3, 4])).toStrictEqual(5);
		expect(distance([0, 0], [-3, -4])).toStrictEqual(5);
		expect(distance([0, 0], [3])).toStrictEqual(NaN);
	});

	it('formatThousands', () => {
		expect(formatThousands(1)).toStrictEqual("1");
		expect(formatThousands(12)).toStrictEqual("12");
		expect(formatThousands(123)).toStrictEqual("123");
		expect(formatThousands(1234)).toStrictEqual("1 234");
		expect(formatThousands(12345)).toStrictEqual("12 345");
		expect(formatThousands("1")).toStrictEqual("1");
		expect(formatThousands("12")).toStrictEqual("12");
		expect(formatThousands("123")).toStrictEqual("123");
		expect(formatThousands("1234")).toStrictEqual("1 234");
		expect(formatThousands("12345")).toStrictEqual("12 345");
	});
});
