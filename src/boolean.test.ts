import { describe, it, expect } from 'vitest';
import { ensureNonNullable, ensureTruthy } from './boolean';

describe('boolean', () => {
	it('ensureNonNullable', () => {
		expect(ensureNonNullable(true)).toBeTruthy();
		expect(ensureNonNullable(false)).toBeTruthy();
		expect(ensureNonNullable('')).toBeTruthy();
		expect(ensureNonNullable(0)).toBeTruthy();

		expect(ensureNonNullable(null)).toBeFalsy();
		expect(ensureNonNullable(undefined)).toBeFalsy();
	});

	it('ensureTruthy', () => {
		expect(ensureTruthy(true)).toBeTruthy();

		expect(ensureTruthy(false)).toBeFalsy();
		expect(ensureTruthy('')).toBeFalsy();
		expect(ensureTruthy(0)).toBeFalsy();
		expect(ensureTruthy(null)).toBeFalsy();
		expect(ensureTruthy(undefined)).toBeFalsy();
	});
});
