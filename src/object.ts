const isArray = Array.isArray;
const keyList = Object.keys;
const hasProp = Object.prototype.hasOwnProperty;

export function deepEqual(a: any, b: any) {
	if (a === b) return true;

	if (a && b && typeof a == 'object' && typeof b == 'object') {
		const arrA = isArray(a);
		const arrB = isArray(b);
		let i: number;
		let length: number;

		if (arrA && arrB) {
			length = (a as Array<any>).length;
			if (length !== (b as Array<any>).length) return false;
			for (i = length; i-- !== 0; ) {
				if (!deepEqual((a as Array<any>)[i], (b as Array<any>)[i])) return false;
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

		const keys = keyList(a);
		length = keys.length;

		if (length !== keyList(b).length) {
			return false;
		}

		for (i = length; i-- !== 0; ) {
			if (!hasProp.call(b, keys[i])) return false;
		}

		return true;
	}

	// eslint-disable-next-line no-self-compare
	return a !== a && b !== b;
}
