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

/**
 * Check if one its parents match a specific predicate until reaching the provided end element
 * @param element start element
 * @param predicate predicate to search within a parent
 * @param end end element. The predicate will be applied to the end element before returning false
 * @returns whether the predicate has been found to be true within one of the element's parents
 */
export function hasParentThat(
	element: HTMLElement | null,
	predicate: (element: HTMLElement) => boolean,
	end: HTMLElement | null = document.body
): boolean {
	if (!element) return false;
	else if (predicate(element)) return true;
	else if (element === end) return false;
	return hasParentThat(element.parentElement, predicate, end);
}
