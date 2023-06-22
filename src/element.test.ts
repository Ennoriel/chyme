import { getKeyboardFocusableElements, hasParentThat } from './element';

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

	it('hasParentThat', () => {
		document.body.innerHTML =
			'<div id="test">' +
			'  <span id="username" ></span>' +
			'  <button id="button" ></button>' +
			'  <input id="other" />' +
			'  <div id="div-indexed" tabindex="0" ></div>' +
			'</div>' +
			'<input id="outside-of-scope" />';
		const input = document.getElementById('other');
		const test = document.getElementById('test');
		expect(hasParentThat(input, (e: HTMLElement) => e.id === 'test')).toBeTruthy();
		expect(hasParentThat(input, (e: HTMLElement) => e.id !== 'test')).toBeTruthy();
		const falsePredicate = (e: HTMLElement) => e.id === 'test' && e.classList.contains('not here');
		expect(hasParentThat(input, falsePredicate)).toBeFalsy();
		expect(hasParentThat(input, (e: HTMLElement) => e.tagName === 'BODY', test)).toBeFalsy();
	});
});
