import { sleep } from './promise'

describe('promise', () => {
    it(sleep.name, async () => {
        // check that the promise resolves. We do not check about duration precision
        await expect(sleep(1000)).resolves.toBeUndefined()
    });
});
