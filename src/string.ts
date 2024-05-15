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

/**
 * Cast a string to a boolean or a number if parsable, returns the string otherwise
 * @param value
 */
export const castStringToType = (
	value: string | undefined
): string | boolean | number | undefined => {
	if (!value) return undefined;
	return isStringAFloat(value)
		? parseFloat(value)
		: isStringABool(value)
			? value === 'true'
			: value;
};

/**
 * Dedupe all space like characters (\s) and trims the string
 * @param str
 */
export const dedupeSpaces = (str: string) => {
	return str.trim().replace(/\s+/g, ' ');
};

export const escapeString = (str: string, escapes: Array<[string, string]>) => {
	return escapes.reduce(
		(acc, [regexp, replacement]) => acc.replace(new RegExp(regexp, 'g'), replacement),
		str
	);
};

/**
 * Escape a string to be used in xml
 * @param str
 */
export const escapeXmlString = (str: string) => {
	return escapeString(str, [
		['&', '&#38;'],
		['<', '&#60;'],
		['>', '&#62;'],
		["'", '&#39;'],
		['"', '&#34;']
	]);
};

/**
 * Generate a folder name based on a string
 * @param str
 * @returns
 */
export const generateFolderName = (str: string) => {
	return str
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.toLocaleLowerCase()
		.replace(/[,.;:?!&"'() /\\]/g, '-')
		.replace(/-+/g, '-')
		.replace(/-^/g, '')
		.replace(/$-/g, '');
};
