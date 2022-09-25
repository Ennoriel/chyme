/* istanbul ignore file */

/**
 * Converts a file to a Uint8Array
 */
export async function getByteArray(file: File): Promise<Uint8Array> {
	return file.arrayBuffer().then((buff) => new Uint8Array(buff));
}
