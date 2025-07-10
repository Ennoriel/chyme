import { describe, it, expect } from 'vitest';
import { ensureFulfilled, ensureRejected, sleep } from './promise';

describe('promise', () => {
	it(sleep.name, async () => {
		// check that the promise resolves. We do not check about duration precision
		await expect(sleep(1000)).resolves.toBeUndefined();
	});

	it(ensureFulfilled.name, async () => {
		const successPromises = await Promise.allSettled([Promise.resolve(42)]);
		expect(ensureFulfilled(successPromises[0])).toBeTruthy();

		const failedPromises = await Promise.allSettled([Promise.reject(42)]);
		expect(ensureFulfilled(failedPromises[0])).toBeFalsy();
	});

	it(ensureRejected.name, async () => {
		const successPromises = await Promise.allSettled([Promise.resolve(42)]);
		expect(ensureRejected(successPromises[0])).toBeFalsy();

		const failedPromises = await Promise.allSettled([Promise.reject(42)]);
		expect(ensureRejected(failedPromises[0])).toBeTruthy();
	});
});
