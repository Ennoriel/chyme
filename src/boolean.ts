/**
 * ensure a variable is non nullable
 * https://stackoverflow.com/a/58110124/11320442
 * @param value
 * @returns
 */
export function ensureNonNullable<T>(value: T): value is NonNullable<T> {
	return value !== null && value !== undefined;
}

// from lodash
export type Truthy<T> = T extends false | '' | 0 | null | undefined ? never : T;

/**
 * ensure a variable is truthy
 * https://stackoverflow.com/a/58110124/11320442
 * @param value
 * @returns
 */
export function ensureTruthy<T>(value: T): value is Truthy<T> {
	return !!value;
}
