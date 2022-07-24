/**
 * Check if a string is boolean. If equal to 'true' or 'false' (case-sensitive), the method will return true
 * @param value
 */
export const isStringABool = (value?: string): boolean => {
	return value === 'true' || value === 'false';
};

/**
 * Checks if the string value is a number or floating point number
 * @param value
 */
export const isStringAFloat = (value: string): boolean => {
	return !isNaN(+value) && isFinite(+value);
};
