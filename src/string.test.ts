import { isStringABool, isStringAFloat } from './string';

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
});
