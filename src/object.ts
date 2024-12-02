/**
 * check that two arguments are equal
 * @param a unknown
 * @param b unknown
 * @returns boolean
 */
export function deepEqual(a: unknown, b: unknown) {
	if (a === b) return true;

	if (a && b && typeof a == 'object' && typeof b == 'object') {
		const arrA = Array.isArray(a);
		const arrB = Array.isArray(b);
		let i: number;
		let length: number;

		if (arrA && arrB) {
			length = (a as Array<unknown>).length;
			if (length !== (b as Array<unknown>).length) return false;
			for (i = length; i-- !== 0; ) {
				if (!deepEqual((a as Array<unknown>)[i], (b as Array<unknown>)[i])) return false;
			}
			return true;
		}

		if (arrA !== arrB) return false;

		const dateA = a instanceof Date;
		const dateB = b instanceof Date;
		if (dateA !== dateB) return false;
		if (dateA && dateB) return (a as Date).getTime() === (b as Date).getTime();

		const regexpA = a instanceof RegExp;
		const regexpB = b instanceof RegExp;
		if (regexpA !== regexpB) return false;
		if (regexpA && regexpB) return a.toString() === b.toString();

		const keys = Object.keys(a);
		length = keys.length;

		if (length !== Object.keys(b).length) {
			return false;
		}

		for (i = length; i-- !== 0; ) {
			if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
		}

		return true;
	}

	// eslint-disable-next-line no-self-compare
	return a !== a && b !== b;
}

/**
 * get the value of a nested property in an object
 * @param object any
 * @param keys nested property (user.first.name → ["user", "first", "name"])
 * @returns T
 */
export function getAttr<T>(object: any, keys: Array<string>): T | undefined {
	if (!keys.length) return object;
	try {
		return getAttr(object[keys[0] || ''], keys.slice(1));
	} catch {
		return undefined;
	}
}

/**
 * type guard - check wether the argument is an object
 * @param obj unknown
 * @returns boolean
 */
export function isObject(obj: unknown): obj is Record<string, unknown> {
	return (
		typeof obj === 'object' &&
		!Array.isArray(obj) &&
		!(obj instanceof RegExp) &&
		!(obj instanceof Date) &&
		obj !== null
	);
}
