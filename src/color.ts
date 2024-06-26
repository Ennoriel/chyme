import type { Hsv, Rgb, Hex, Color } from './color.types';
import { range } from './array';

/**
 * Generates a random hexadecimal color
 * @returns hexadecimal color as a string #123456
 */
export function randomHexColor() {
	return (
		'#' +
		Math.floor(Math.random() * 16777215)
			.toString(16)
			.padStart(6, '0')
	);
}

/**
 * Convert HSV representation to RGB HEX string
 */
export function hsv2rgb({ h, s, v, a = 1 }: Hsv): Rgb {
	let R: number, G: number, B: number;
	let _h = (h % 360) / 60;

	const C = v * s;
	const X = C * (1 - Math.abs((_h % 2) - 1));
	R = G = B = v - C;

	_h = ~~_h;
	R += [C, X, 0, 0, X, C][_h] as number;
	G += [X, C, C, X, 0, 0][_h] as number;
	B += [0, 0, X, C, C, X][_h] as number;

	const r = Math.round(R * 255);
	const g = Math.round(G * 255);
	const b = Math.round(B * 255);
	return { r, g, b, a };
}

/**
 * Converts RGB representation to HEX representation
 */
export function rgb2hex({ r, g, b, a = 1 }: Rgb): Hex {
	const _a = Math.round(a * 255) | 0;
	const colors = _a === 255 ? [r, g, b] : [r, g, b, _a];
	return {
		hex: '#' + colors.reduce((acc, v) => `${acc}${v.toString(16).padStart(2, '0')}`, '')
	};
}

/**
 * Converts HEX representation to RGB representation
 */
export function hex2rgb(hex: Hex): Rgb {
	const h = hex.hex;
	return {
		r: parseInt(h.substring(1, 3), 16),
		g: parseInt(h.substring(3, 5), 16),
		b: parseInt(h.substring(5, 7), 16),
		a: h.length <= 7 ? 1 : parseInt(h.substring(7, 9), 16) / 255
	};
}

/**
 * Convert RGB representation to HSV
 */
export function rgb2hsv({ r, g, b, a = 1 }: Rgb): Hsv {
	const R = r / 255;
	const G = g / 255;
	const B = b / 255;

	const V = Math.max(R, G, B);
	const C = V - Math.min(R, G, B);
	const S = C === 0 ? 0 : C / V;
	let H =
		C === 0
			? 0
			: V === R
				? (G - B) / C + (G < B ? 6 : 0)
				: V === G
					? (B - R) / C + 2
					: (R - G) / C + 4;
	H = (H % 6) * 60;
	return {
		a: a,
		h: H,
		s: S,
		v: V
	};
}

export function hsv2Color({ h, s, v, a }: Hsv): Color {
	const rgb = hsv2rgb({ h, s, v, a });
	return {
		...rgb,
		...rgb2hex(rgb),
		h,
		s,
		v
	};
}

export function rgb2Color({ r, g, b, a }: Rgb): Color {
	const rgb = { r, g, b, a };
	return {
		...rgb2hsv(rgb),
		...rgb2hex(rgb),
		r,
		g,
		b
	};
}

export function hex2Color({ hex }: Hex): Color {
	const rgb = hex2rgb({ hex });
	return {
		...rgb,
		...rgb2hsv(rgb),
		hex
	};
}

export function colorRange(startHex: string, endHex: string, length: number) {
	if (!startHex || !endHex || !length || length <= 1) return undefined;

	const rangeLength = length - 1;
	const startColor = hex2Color({ hex: startHex });
	const endColor = hex2Color({ hex: endHex });

	// if hue delta is higher that 180°, go the other way around
	if (Math.abs(startColor.h - endColor.h) > 180) {
		if (startColor.h < endColor.h) startColor.h += 360;
		else endColor.h += 360;
	}

	return range(0, rangeLength).map(
		(index) =>
			hsv2Color({
				h: (startColor.h + ((endColor.h - startColor.h) * index) / rangeLength) % 360,
				s: startColor.s + ((endColor.s - startColor.s) * index) / rangeLength,
				v: startColor.v + ((endColor.v - startColor.v) * index) / rangeLength,
				a:
					startColor.a === undefined || endColor.a === undefined
						? 1
						: startColor.a + ((endColor.a - startColor.a) * index) / rangeLength
			}).hex
	);
}

/**
 * Returns whether the color is dark according to the hsp color and to the limit passed
 * @param color rgb or hexadecimal color
 * @param limit set the limit 1 is full black, 0 is white
 */
export function isDark(color: Rgb | string, limit = 0.5) {
	if (!color) return undefined;
	if (typeof color === 'string' && !isHexColorValid(color)) return undefined;

	const rgb = typeof color === 'string' ? hex2rgb({ hex: color }) : color;
	const { r, g, b } = rgb;
	const hsp = Math.sqrt(0.299 * r * r + 0.587 * g * g + 0.114 * b * b);
	return hsp < 255 * (1 - limit);
}

/**
 * Returns whether the color is light according to the hsp color and to the limit passed
 * @param color rgb or hexadecimal color
 * @param limit set the limit 1 is full white, 0 is black
 */
export function isLight(color: Rgb | string, limit = 0.5) {
	return !isDark(color, 1 - limit);
}

/**
 * check whether a color is valid
 * @param color color
 */
export function isHexColorValid(color: string | undefined) {
	return !!(color && color.match(/^#([A-Fa-f0-9]{3,4}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{8})$/));
}
