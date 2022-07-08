export type Hsv = {
	h: number;
	s: number;
	v: number;
	a?: number;
};

export type Rgb = {
	r: number;
	g: number;
	b: number;
	a?: number;
};

export type Hex = {
	hex: string;
};

export type Color = Hsv | Rgb | Hex;
