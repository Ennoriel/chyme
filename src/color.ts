import type { Hsv, Rgb, Hex, Color } from './color.types';

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

	const r = Math.floor(R * 255);
	const g = Math.floor(G * 255);
	const b = Math.floor(B * 255);
	return { r, g, b, a };
}

/**
 * Converts RGB representation to HEX representation
 */
export function rgb2hex({ r, g, b, a = 1 }: Rgb): Hex {
	return {
		hex:
			'#' +
			[r, g, b, Math.round(a * 255) | 0].reduce(
				(acc, v) => `${acc}${v.toString(16).padStart(2, '0')}`,
				''
			)
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

export default { hsv2Color, rgb2Color, hex2Color };
