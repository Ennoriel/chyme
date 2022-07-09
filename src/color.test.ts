import { colorRange, hex2Color, hsv2Color, randomHexColor, rgb2Color } from './index';

describe('color', () => {
	it('randomHexColor', () => {
		Array(100).forEach(() => expect(randomHexColor()).toMatch(/#[0-9a-e]{6}/));
	});

	it('rgb2Color with transparency', () => {
		expect(rgb2Color({ r: 67, g: 191, b: 205, a: 0.35 })).toStrictEqual({
			h: 186.08695652173913,
			s: 0.6731707317073171,
			v: 0.803921568627451,
			a: 0.35,
			hex: '#43bfcd59',
			r: 67,
			g: 191,
			b: 205
		});
	});

	it('rgb2Color without transparency', () => {
		expect(rgb2Color({ r: 67, g: 191, b: 205 })).toStrictEqual({
			h: 186.08695652173913,
			s: 0.6731707317073171,
			v: 0.803921568627451,
			a: 1,
			hex: '#43bfcdff',
			r: 67,
			g: 191,
			b: 205
		});
	});

	it('hsv2Color with transparency', () => {
		expect(hsv2Color({ h: 186, s: 0.67, v: 0.8, a: 0.35 })).toStrictEqual({
			h: 186,
			s: 0.67,
			v: 0.8,
			a: 0.35,
			hex: '#43becc59',
			r: 67,
			g: 190,
			b: 204
		});
	});

	it('hsv2Color without transparency', () => {
		expect(hsv2Color({ h: 186, s: 0.67, v: 0.8 })).toStrictEqual({
			h: 186,
			s: 0.67,
			v: 0.8,
			a: 1,
			hex: '#43beccff',
			r: 67,
			g: 190,
			b: 204
		});
	});

	it('hex2Color with transparency', () => {
		expect(hex2Color({ hex: '#43bfcd59' })).toStrictEqual({
			h: 186.08695652173913,
			s: 0.6731707317073171,
			v: 0.803921568627451,
			a: 0.34901960784313724,
			hex: '#43bfcd59',
			r: 67,
			g: 191,
			b: 205
		});
	});

	it('colorRange', () => {
		expect(colorRange('#ff3eff', '#234567', 14)).toStrictEqual([
			'#ff3effff',
			'#e03df4ff',
			'#c43be9ff',
			'#a93adeff',
			'#9139d3ff',
			'#7b37c8ff',
			'#6636bdff',
			'#5334b3ff',
			'#4332a8ff',
			'#33309dff',
			'#2d3492ff',
			'#2b3b87ff',
			'#28407cff',
			'#254371ff'
		]);
	});
});
