import { randomHexColor } from './index';

describe('color', () => {
	it('randomHexColor', () => {
		Array(100).forEach(() => expect(randomHexColor()).toMatch(/#[0-9a-e]{6}/));
	});
});
