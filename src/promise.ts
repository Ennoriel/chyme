/**
 * wait for a certain period of time
 * @param milliseconds
 * @returns
 */
export function sleep(milliseconds: number) {
	return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

/**
 * ensure a promise is fulfilled
 * https://github.com/microsoft/TypeScript/issues/47617#issuecomment-1022428079
 * @param promise
 * @returns
 */
export function ensureFulfilled<T>(
	promise: PromiseSettledResult<T>
): promise is PromiseFulfilledResult<T> {
	return promise.status === 'fulfilled';
}

/**
 * ensure a promise is rejected
 * @param promise
 * @returns
 */
export function ensureRejected<T>(
	promise: PromiseSettledResult<T>
): promise is PromiseRejectedResult {
	return promise.status === 'rejected';
}
