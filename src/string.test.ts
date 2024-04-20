import {
	castStringToType,
	dedupeSpaces,
	escapeXmlString,
	generateFolderName,
	isStringABool,
	isStringAFloat
} from './string';

describe('string', () => {
	it('isStringABool', () => {
		expect(isStringABool('true')).toBeTruthy();
		expect(isStringABool('false')).toBeTruthy();
		expect(isStringABool('True')).toBeFalsy();
		expect(isStringABool('False')).toBeFalsy();
		expect(isStringABool('truthy')).toBeFalsy();
		expect(isStringABool('0')).toBeFalsy();
		expect(isStringABool('0')).toBeFalsy();
		expect(isStringABool('undefined')).toBeFalsy();
		expect(isStringABool(undefined)).toBeFalsy();
		expect(isStringABool()).toBeFalsy();
	});

	it('isStringAFloat', () => {
		expect(isStringAFloat('0000')).toBeTruthy();
		expect(isStringAFloat('0')).toBeTruthy();
		expect(isStringAFloat('1')).toBeTruthy();
		expect(isStringAFloat('1.2')).toBeTruthy();
		expect(isStringAFloat(Math.PI.toString())).toBeTruthy();
		expect(isStringAFloat('NaN')).toBeFalsy();
		expect(isStringAFloat('a')).toBeFalsy();
		expect(isStringAFloat('0a')).toBeFalsy();
		expect(isStringAFloat('one')).toBeFalsy();
	});

	it('castStringToType', () => {
		expect(castStringToType('azer')).toStrictEqual('azer');
		expect(castStringToType('1')).toStrictEqual(1.0);
		expect(castStringToType('1.0')).toStrictEqual(1.0);
		expect(castStringToType('1.1')).toStrictEqual(1.1);
		expect(castStringToType('-1.0')).toStrictEqual(-1.0);
		expect(castStringToType('true')).toStrictEqual(true);
		expect(castStringToType('false')).toStrictEqual(false);
		expect(castStringToType(undefined)).toStrictEqual(undefined);
	});

	it('dedupeSpaces', () => {
		expect(dedupeSpaces('azer')).toStrictEqual('azer');
		expect(dedupeSpaces('  azer')).toStrictEqual('azer');
		expect(dedupeSpaces('azer  ')).toStrictEqual('azer');
		expect(dedupeSpaces('                  azer')).toStrictEqual('azer');
		expect(dedupeSpaces('az  er')).toStrictEqual('az er');
		expect(dedupeSpaces('  a  z  e  r  ')).toStrictEqual('a z e r');
		expect(dedupeSpaces('azer')).toStrictEqual('azer');
		expect(dedupeSpaces('aze	r')).toStrictEqual('aze r');
		expect(dedupeSpaces('aze		r')).toStrictEqual('aze r');
	});

	it('escapeXmlString', () => {
		expect(escapeXmlString('azer & < > \' " azer')).toStrictEqual(
			'azer &#38; &#60; &#62; &#39; &#34; azer'
		);
	});

	it('generateFolderName', () => {
		expect(generateFolderName('ceci?êst : un -Test')).toStrictEqual('ceci-est-un-test');
	});
});
