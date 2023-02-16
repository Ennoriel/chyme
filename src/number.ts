/**
 * Clamps value between a minimum and a maximum.
 * @param value Numeric value to clamp.
 * @param min Lower bound
 * @param max Upper bound
 * @returns clamped value between the lower and upper bound.
 */
export function clamp(value: number, min: number, max: number): number {
	return Math.min(Math.max(min, value), max);
}

/**
 * Floors the value according to the base
 * @param value Numeric value to floor
 * @param base Base value used to floor the value
 */
export function floor(value: number, base = 1) {
	// return base === 1 ? Math.floor(value) : Math.floor(value / base) * base;
	const logBase = Math.log10(base);
	if (logBase % 1) {
		return Math.floor(value / base) * base;
	} else {
		return +`${Math.floor(+`${value}e${-1 * logBase}`)}e${logBase}`;
	}
}

/**
 * Floors the value according to 2
 * @param value Numeric value to floor
 */
export function floor2(value: number) {
	return floor(value, 2);
}

/**
 * Floors the value according to 3
 * @param value Numeric value to floor
 */
export function floor3(value: number) {
	return floor(value, 3);
}

/**
 * Calculate the distance between 2 arrays (square root of the sum of the square power of the difference of all numbers taken 2 by 2)
 * @param arr1 array 1
 * @param arr2 array 2
 * @return NaN if the array lengths are different, the distance otherwise
 */
export function distance(arr1: Array<number>, arr2: Array<number>) {
	if (arr1.length !== arr2.length) return NaN;

	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	return Math.sqrt(arr1.reduce((acc, val, index) => acc + Math.pow(val - arr2[index]!, 2), 0));
}
