export const QUERY_SELECTOR_FOCUSABLE_ELEMENTS =
	'a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])';

/**
 * Get all keyboard focusable elements within an element
 * (does capture natively focusable elements with tabindex set to -1)
 * @param element HTML element
 */
export function getKeyboardFocusableElements(element: Element) {
	return Array.from(element.querySelectorAll(QUERY_SELECTOR_FOCUSABLE_ELEMENTS));
}
