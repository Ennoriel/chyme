/**
 * Returns the range of numbers. Implementation from https://github.com/lodash/lodash/blob/2da024c3b4f9947a48517639de7560457cd4ec6c/.internal/baseRange.js
 * @param start The start of the range.
 * @param end The end of the range.
 * @param step The value to increment or decrement by.
 * @returns Returns the range of numbers.
 */
export function range(start: number, end: number, step = 1) {
	let index = -1;
	let length = Math.max(Math.ceil((end - start) / step + 1), 0);
	const result = new Array(length);

	while (length--) {
		result[++index] = start;
		start += step;
	}
	return result;
}

/**
 * Returns a new array filtered by a unique key method
 * @param array array to filter
 * @param key key method
 */
export function uniqBy<T>(array: Array<T>, key: (item: T) => string): Array<T> {
	const seen: Record<string, boolean> = {};
	return array.filter(function (item) {
		const k = key(item);
		return Object.prototype.hasOwnProperty.call(seen, k) ? false : (seen[k] = true);
	});
}
