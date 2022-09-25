import { getKeyboardFocusableElements } from './element';

describe('element', () => {
	it('getKeyboardFocusableElements', () => {
		document.body.innerHTML =
			'<div id="test">' +
			'  <span id="username" ></span>' +
			'  <button id="button" ></button>' +
			'  <input id="button" />' +
			'  <div id="div-indexed" tabindex="0" ></div>' +
			'</div>' +
			'<input id="outside-of-scope" />';
		const div = document.getElementById('test');
		expect(div).toBeTruthy();
		expect(div?.tagName?.toLocaleLowerCase()).toBe('div');
		expect(div?.children).toHaveLength(4);
		expect(getKeyboardFocusableElements(div as HTMLElement)).toHaveLength(3);
	});
});
