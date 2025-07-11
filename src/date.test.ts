import { describe, it, expect, vi, beforeAll, afterAll } from 'vitest';
import {
	formatDate,
	getDefaultDate,
	getNumberOfDays,
	getWeekEnd,
	getWeekStart,
	isValid,
	toDate
} from './date';

describe('date', () => {
	const fake_timestamp = 1577836800000;

	beforeAll(() => {
		vi.useFakeTimers();
		vi.setSystemTime(new Date('2020-01-01'));
	});

	afterAll(() => {
		vi.useRealTimers();
	});

	it('isValid', () => {
		expect(isValid(new Date())).toBeTruthy();
		expect(isValid(new Date('not a date'))).toBeFalsy();
		expect(isValid(undefined)).toBeFalsy();
	});

	it('defaultToDate', () => {
		const date = new Date();
		expect(getDefaultDate(date)).toStrictEqual(date);
		expect(getDefaultDate(undefined, 'today')?.getTime()).toStrictEqual(fake_timestamp);
		expect(getDefaultDate(new Date('not a date'), 'today')?.getTime()).toStrictEqual(
			fake_timestamp
		);
		expect(getDefaultDate(undefined)?.getTime()).toStrictEqual(undefined);
		expect(getDefaultDate(new Date('not a date'))?.getTime()).toStrictEqual(undefined);
	});

	it('toDate', () => {
		expect(toDate('Fri Apr 27 2022 06:17:15 GMT+0200 (UTC)')).toStrictEqual(
			new Date('Fri Apr 27 2022 06:17:15 GMT+0200 (UTC)')
		);
		expect(toDate('Fri Apr 99 2022 06:17:15 GMT+0200 (UTC)')).toStrictEqual(undefined);
		expect(toDate('Fri Apr 99 2022 06:17:15 GMT+0200 (UTC)', 'today')?.getTime()).toStrictEqual(
			fake_timestamp
		);
		expect(toDate(1668953470050)).toStrictEqual(new Date(1668953470050));
	});

	it('formatDate', () => {
		expect(formatDate('Fri Apr 27 2022 06:17:15 GMT+0200 (UTC)')).toStrictEqual('April 27, 2022');
		expect(formatDate(new Date('Fri Apr 27 2022 06:17:15 GMT+0200 (UTC)'))).toStrictEqual(
			'April 27, 2022'
		);
		expect(formatDate('Fri Apr 99 2022 06:17:15 GMT+0200 (UTC)')).toStrictEqual(undefined);
		expect(formatDate(undefined)).toStrictEqual(undefined);
	});

	it('getWeekStart monday', () => {
		const monday = new Date(2025, 6, 7);
		const wednesday = new Date(2025, 6, 9);
		const sunday = new Date(2025, 6, 13);

		expect(getWeekStart(monday, 'monday')).toStrictEqual(monday);
		expect(getWeekStart(wednesday, 'monday')).toStrictEqual(monday);
		expect(getWeekStart(sunday, 'monday')).toStrictEqual(monday);
	});

	it('getWeekStart sunday', () => {
		const sunday = new Date(2025, 6, 6);
		const wednesday = new Date(2025, 6, 9);
		const saturday = new Date(2025, 6, 12);

		expect(getWeekStart(sunday, 'sunday')).toStrictEqual(sunday);
		expect(getWeekStart(wednesday, 'sunday')).toStrictEqual(sunday);
		expect(getWeekStart(saturday, 'sunday')).toStrictEqual(sunday);
	});

	it('getWeekEnd monday', () => {
		const monday = new Date(2025, 6, 7);
		const wednesday = new Date(2025, 6, 9);
		const sunday = new Date(2025, 6, 13);

		expect(getWeekEnd(monday, 'monday')).toStrictEqual(sunday);
		expect(getWeekEnd(wednesday, 'monday')).toStrictEqual(sunday);
		expect(getWeekEnd(sunday, 'monday')).toStrictEqual(sunday);
	});

	it('getWeekEnd sunday', () => {
		const sunday = new Date(2025, 6, 6);
		const wednesday = new Date(2025, 6, 9);
		const saturday = new Date(2025, 6, 12);

		expect(getWeekEnd(sunday, 'sunday')).toStrictEqual(saturday);
		expect(getWeekEnd(wednesday, 'sunday')).toStrictEqual(saturday);
		expect(getWeekEnd(saturday, 'sunday')).toStrictEqual(saturday);
	});

	it('getNumberOfDays', () => {
		const monday = new Date(2022, 3, 25);
		const sunday = new Date(2022, 4, 1);

		expect(getNumberOfDays(monday, sunday)).toStrictEqual(6);
	});
});
