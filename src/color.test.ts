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
			'#de3cf3ff',
			'#bf3be7ff',
			'#a43adbff',
			'#8a38d0ff',
			'#7237c4ff',
			'#5d35b8ff',
			'#4a33adff',
			'#3930a1ff',
			'#2e3295ff',
			'#2b3a8aff',
			'#29407eff',
			'#264372ff',
			'#234567ff'
		]);
	});
	it('colorRange alpha', () => {
		expect(colorRange('#ff000000', '#0000ffff', 3)).toStrictEqual([
			'#ff000000',
			'#ff00ff80',
			'#0000ffff'
		]);
	});
	it('colorRange hue', () => {
		expect(colorRange('#ffff00ff', '#ff00ffff', 3)).toStrictEqual([
			'#ffff00ff',
			'#ff0000ff',
			'#ff00ffff'
		]);
	});
});
