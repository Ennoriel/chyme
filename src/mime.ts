export const MIME_IMAGES = [
	{ extension: '.jpeg', mime: 'image/jpeg' },
	{ extension: '.jpg', mime: 'image/jpeg' },
	{ extension: '.png', mime: 'image/png' },
	{ extension: '.svg', mime: 'image/svg+xml' },
	{ extension: '.webp', mime: 'image/webp' }
];

/**
 * Check whether a file is an image
 * @param file file
 */
export function isImage(file: File | undefined) {
	if (!file || !file.type || !file.name) {
		return false;
	} else if (!MIME_IMAGES.some((mimeType) => mimeType.mime === file.type)) {
		return false;
	} else if (!MIME_IMAGES.some((mimeType) => file.name.toLocaleLowerCase().endsWith(mimeType.extension))) {
		return false;
	}
	return true;
}

/**
 * Get the mime type of an image
 * @param extension file extension
 */
export function getImageMimeType(extension: string | undefined) {
	if (!extension) return undefined;
	const extLowerCase = extension.toLocaleLowerCase();
	return MIME_IMAGES.find((m) => m.extension === extLowerCase)?.mime;
}

/**
 * Get the extension type of an image
 * @param mime file mime type
 */
export function getImageExtension(mime: string | undefined) {
	if (!mime) return undefined;
	return MIME_IMAGES.find((m) => m.mime === mime)?.extension;
}
