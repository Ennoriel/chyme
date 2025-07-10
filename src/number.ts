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

export function applyRoundingFunction(
	roundingFunction: (value: number) => number,
	value: number,
	base = 1
) {
	const logBase = Math.log10(base);
	if (logBase % 1) {
		return roundingFunction(value / base) * base;
	} else {
		return +`${roundingFunction(+`${value}e${-1 * logBase}`)}e${logBase}`;
	}
}

/**
 * Floors the value according to the base
 * @param value Numeric value to floor
 * @param base Base value used to floor the value
 */
export function floor(value: number, base = 1) {
	return applyRoundingFunction(Math.floor, value, base);
}

/**
 * Rounds the value according to the base
 * @param value Numeric value to round
 * @param base Base value used to round the value
 */
export function round(value: number, base = 1) {
	return applyRoundingFunction(Math.round, value, base);
}

/**
 * Ceils the value according to the base
 * @param value Numeric value to ceil
 * @param base Base value used to ceil the value
 */
export function ceil(value: number, base = 1) {
	return applyRoundingFunction(Math.ceil, value, base);
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

	return Math.sqrt(arr1.reduce((acc, val, index) => acc + Math.pow(val - arr2[index]!, 2), 0));
}

/**
 * Format a number with a space every 3 digits (12 345)
 * @param number number to format
 * @returns
 */
export function formatThousands(number: number | string) {
	return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}
