import {
	toObj as fdtoToObject,
	fromObj as fdtoFromObject,
	FdtoObject,
	FdtoPrimitives
} from 'form-data-to-object';
import { castStringToType } from './string';

export { fdtoToObject, fdtoFromObject, FdtoObject, FdtoPrimitives };

/**
 * Transforms a FormData object to a plain js object based on the keys. Check tests for complete rules
 * @param formData FormData object
 */
export const formDataToObject = <T extends FdtoObject>(formData: FormData | URLSearchParams): T => {
	const linearizedObject = [...formData.entries()].reduce((acc, [key, value]) => {
		const parsedValue = castStringToType(value as string | undefined);

		if (parsedValue !== undefined) {
			if (!(key in acc)) {
				acc[key] = parsedValue;
			} else if (Array.isArray(acc[key])) {
				(acc[key] as Array<FdtoPrimitives>).push(parsedValue);
			} else {
				acc[key] = [acc[key] as FdtoPrimitives, parsedValue];
			}
		}
		return acc;
	}, {} as Record<string, FdtoPrimitives | Array<FdtoPrimitives>>);

	return fdtoToObject<T>(linearizedObject);
};
