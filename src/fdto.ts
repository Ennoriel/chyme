/* eslint-disable */

export type FdtoPrimitives = string | number | boolean;
export type FdtoObject =
	| FdtoPrimitives
	| { [key: string]: FdtoPrimitives | FdtoObject | Array<FdtoObject> };

export function toObj<T extends FdtoObject>(
	source: Record<string, FdtoPrimitives | Array<FdtoPrimitives>>
): T {
	return Object.keys(source).reduce(function (output, key) {
		const parentKey = key.match(/[^[]*/i);
		const pathsStr = key.match(/\[.*?\]/g) || [];
		const paths = [parentKey?.[0]].concat(pathsStr).map(function (key) {
			return key?.replace(/\[|\]/g, '');
		});
		var currentPath = output;
		while (paths.length) {
			var pathKey = paths.shift();

			if (pathKey! in (currentPath as any)) {
				currentPath = (currentPath as any)[pathKey!];
			} else {
				(currentPath as any)[pathKey!] = paths.length
					? isNaN((paths as any)[0])
						? {}
						: []
					: source[key];
				currentPath = (currentPath as any)[pathKey!];
			}
		}

		return output;
	}, {} as T);
}

export function fromObj(obj: FdtoObject): Record<string, FdtoPrimitives> {
	function recur(newObj: Record<string, FdtoPrimitives>, propName: string, currVal: FdtoObject) {
		if (Array.isArray(currVal) || Object.prototype.toString.call(currVal) === '[object Object]') {
			Object.keys(currVal).forEach(function (v) {
				recur(newObj, propName + '[' + v + ']', (currVal as any)[v]);
			});
			return newObj;
		}

		newObj[propName] = currVal as FdtoPrimitives;
		return newObj;
	}

	var keys = Object.keys(obj);
	return keys.reduce(function (newObj, propName) {
		return recur(newObj, propName, (obj as any)[propName]);
	}, {});
}
