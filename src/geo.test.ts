import { describe, it, expect } from 'vitest';
import { geoDistance } from './geo';

describe('geo', () => {
	it('geoDistance', () => {
		expect(geoDistance([40.95, 1.95], [41, 2])).toStrictEqual(7.860333642142855);
		expect(geoDistance([40.9, 1.9], [41, 2])).toStrictEqual(15.720784736717581);
	});
});
