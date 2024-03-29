/**
 * Check wether the date is a valid date
 * @param date
 */
export function isValid(date: undefined | Date): date is Date {
	return !!date && !isNaN(date.getTime());
}

/**
 * Set a default date if the date is not valid or undefined
 * @param date
 * @param defaultDateType
 */
export function getDefaultDate(
	date: undefined | Date,
	defaultDateType: 'undefined' | 'today' = 'undefined'
) {
	return isValid(date) ? date : defaultDateType === 'undefined' ? undefined : new Date();
}

/**
 * Convert a primitive/date to a Date object
 * @param dateAny
 * @param defaultDateType
 */
export function toDate(
	dateAny: undefined | string | number | Date,
	defaultDateType: 'undefined' | 'today' = 'undefined'
) {
	let date: Date | undefined;
	if (dateAny) {
		date = new Date(dateAny);
	}
	return getDefaultDate(date, defaultDateType);
}

/**
 * Format a date
 * @param date
 * @param locale
 * @param options
 * @returns
 */
export function formatDate(
	date: string | Date | undefined,
	locale = 'en-US',
	options: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	}
) {
	if (!date) return undefined;
	const _date = new Date(date);
	if (!isValid(_date)) return undefined;

	return new Intl.DateTimeFormat(locale, options).format(_date);
}
