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
	const result: Array<number> = new Array(length);

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

/**
 * Returns a record with the key being the unique attribute and an array of element
 * @param array array to filter
 * @param key key method
 */
export function groupBy<T>(array: Array<T>, key: (item: T) => string): Record<string, Array<T>> {
	return array.reduce(
		function (acc, item) {
			const k = key(item);
			if (k in acc && acc[k]) {
				(acc[k] as Array<T>).push(item);
			} else {
				acc[k] = [item];
			}
			return acc;
		},
		{} as Record<string, Array<T>>
	);
}

/**
 * Count duplicates
 * @param array array to count duplicates
 */
export function countDuplicates(array: Array<string>) {
	return array.reduce(
		(duplicates, word) => {
			if (duplicates[word]) {
				duplicates[word]++;
			} else {
				duplicates[word] = 1;
			}

			return duplicates;
		},
		{} as Record<string, number>
	);
}

/**
 * remove attributes that have less than the provided number
 * @param array array to filter
 * @param limit number
 */
export function filterAttributesWithLessThan(array: Record<string, number>, limit: number) {
	return Object.fromEntries(Object.entries(array).filter((e) => e[1] >= limit));
}

/**
 * get longest string of an array of string (returns undefined if the array is empty)
 * @param array array of string
 */
export function getLongestString(array: Array<string>) {
	if (!array.length) return;
	return array.reduce((a, b) => (a.length > b.length ? a : b));
}

/**
 * sum the numeric values of an array ignoring the undefined values
 * @param array
 * @returns sum
 */
export function sum(array: Array<number | undefined>) {
	return array.reduce<number>((acc, curr) => acc + (curr ?? 0), 0);
}

/**
 * get a random item of an array
 * @param array
 * @returns random item of an array
 */
export function randomItemOfArray<T>(array: Array<T>) {
	return array[(array.length * Math.random()) | 0];
}
