import {
	colorRange,
	hex2Color,
	hex2rgb,
	hsv2Color,
	isDark,
	randomHexColor,
	rgb2Color,
	isHexColorValid
} from './index';

describe('color', () => {
	it('randomHexColor', () => {
		for (let i = 0; i < 100; i++) {
			expect(randomHexColor()).toMatch(/#[0-9a-f]{6}/);
		}
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
			hex: '#43bfcd',
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
			hex: '#43becc',
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
			'#ff3eff',
			'#de3df3',
			'#c03ce8',
			'#a43adc',
			'#8a39d0',
			'#7337c5',
			'#5e35b9',
			'#4b33ad',
			'#3a31a1',
			'#2e3296',
			'#2c3a8a',
			'#29407e',
			'#264473',
			'#234567'
		]);
	});

	it('colorRange alpha', () => {
		expect(colorRange('#ff000000', '#0000ffff', 3)).toStrictEqual([
			'#ff000000',
			'#ff00ff80',
			'#0000ff'
		]);
	});

	it('colorRange hue', () => {
		expect(colorRange('#ffff00ff', '#ff00ffff', 3)).toStrictEqual([
			'#ffff00',
			'#ff0000',
			'#ff00ff'
		]);
	});

	it('colorRange hue', () => {
		expect(colorRange('#ff00ffff', '#ffff00ff', 3)).toStrictEqual([
			'#ff00ff',
			'#ff0000',
			'#ffff00'
		]);
	});

	it('isDark', () => {
		expect(isDark('#FF0000')).toBeFalsy();
		expect(isDark('#FFFF00')).toBeFalsy();
		expect(isDark('#00FF00')).toBeFalsy();
		expect(isDark('#00FFFF')).toBeFalsy();
		expect(isDark('#0000FF')).toBeTruthy();
		expect(isDark('#FF00FF')).toBeFalsy();
		
		expect(isDark(hex2rgb({ hex: '#FF0000' }))).toBeFalsy();
		expect(isDark(hex2rgb({ hex: '#FFFF00' }))).toBeFalsy();
		expect(isDark(hex2rgb({ hex: '#00FF00' }))).toBeFalsy();
		expect(isDark(hex2rgb({ hex: '#00FFFF' }))).toBeFalsy();
		expect(isDark(hex2rgb({ hex: '#0000FF' }))).toBeTruthy();
		expect(isDark(hex2rgb({ hex: '#FF00FF' }))).toBeFalsy();
	});

	it('isHexColorValid', () => {
		expect(isHexColorValid(undefined)).toBeFalsy();
		expect(isHexColorValid("#1")).toBeFalsy();
		expect(isHexColorValid("#12")).toBeFalsy();
		expect(isHexColorValid("#12345")).toBeFalsy();
		expect(isHexColorValid("#1234567")).toBeFalsy();
		expect(isHexColorValid("#123456789")).toBeFalsy();
		
		expect(isHexColorValid("#123")).toBeTruthy();
		expect(isHexColorValid("#1234")).toBeTruthy();
		expect(isHexColorValid("#123456")).toBeTruthy();
		expect(isHexColorValid("#12345678")).toBeTruthy();
		
		expect(isHexColorValid("#abc")).toBeTruthy();
		expect(isHexColorValid("#abcd")).toBeTruthy();
		expect(isHexColorValid("#abcdef")).toBeTruthy();
		expect(isHexColorValid("#abcabcab")).toBeTruthy();
	});
});
