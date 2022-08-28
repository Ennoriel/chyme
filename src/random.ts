/**
 * Generate a random string constituted of lower and upper case letters & digits
 * @param length length of the desired string
 * @param charSet charset used
 */
export function randomString(
	length: number,
	charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
) {
	const charSetArray = charSet.split('');
	let result = '';
	for (let i = 0; i < length; i++) {
		const randomPoz = Math.floor(Math.random() * charSet.length);
		result += charSetArray[randomPoz];
	}
	return result;
}
