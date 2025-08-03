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

/**
 * Get the first day of the week
 * @param date
 * @param weekStartsWith
 * @returns
 */
export function getWeekStart(date: Date, weekStartsWith: 'monday' | 'sunday') {
	const weekDay = date.getDay();
	return new Date(
		date.getFullYear(),
		date.getMonth(),
		date.getDate() - ((weekDay + 6 + (weekStartsWith === 'monday' ? 0 : 1)) % 7),
		0
	);
}

/**
 * Get the last day of the week
 * @param date
 * @param weekStartsWith
 * @returns
 */
export function getWeekEnd(date: Date, weekStartsWith: 'monday' | 'sunday') {
	return new Date(
		date.getFullYear(),
		date.getMonth(),
		date.getDate() + ((7 - date.getDay() + (weekStartsWith === 'monday' ? 0 : -1)) % 7),
		0
	);
}

/**
 * *
 * Get the number of days between 2 dates
 * @param startDate
 * @param endDate
 * @returns
 */
export function getNumberOfDays(startDate: Date, endDate: Date) {
	return Math.floor((endDate.getTime() - startDate.getTime()) / 86400000);
}
