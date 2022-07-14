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
export function floor(value: number, base: number) {
	return Math.floor(value / base) * base;
}

/**
 * Floors the value according to 2
 * @param value Numeric value to floor
 */
export function floor2(value: number) {
	return floor(value, 2)
}

/**
 * Floors the value according to 3
 * @param value Numeric value to floor
 */
export function floor3(value: number) {
	return floor(value, 3)
}