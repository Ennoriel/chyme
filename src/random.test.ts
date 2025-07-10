import { describe, it, expect } from 'vitest';
import { randomString } from './random';

describe('random', () => {
	it('randomString', () => {
		expect(randomString(5)).toMatch(/^[a-zA-Z0-9]{5}$/);
		expect(randomString(105)).toMatch(/^[a-zA-Z0-9]{105}$/);
		expect(randomString(105, 'AB')).toMatch(/^[A-B]{105}$/);
	});
});
