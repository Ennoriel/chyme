import { formDataToObject, fdtoToObject, fdtoFromObject } from './query';

const fdtoFormData = {
	string: 'string',
	number: '42',
	number2: '-42.34',
	boolean: 'true',
	boolean2: 'false',
	'sub[object]': 'sub object',
	'arr[0]': 'arr[0]',
	'arr[1]': 'arr[1]',
	'arr[2]': 'arr[2]'
};

const fdtoObject = {
	string: 'string',
	number: '42',
	number2: '-42.34',
	boolean: 'true',
	boolean2: 'false',
	sub: { object: 'sub object' },
	arr: ['arr[0]', 'arr[1]', 'arr[2]']
};

describe('query', () => {
	it('fdtoToObject', () => {
		expect(fdtoToObject(fdtoFormData)).toStrictEqual(fdtoObject);
	});

	it('fdtoFromObject', () => {
		expect(fdtoFromObject(fdtoObject)).toStrictEqual(fdtoFormData);
	});

	it('formDataToObject', () => {
		const formData = new FormData();
		formData.append('string', 'string');
		formData.append('number', '42');
		formData.append('number2', '-42.34');
		formData.append('boolean', 'true');
		formData.append('boolean2', 'false');
		formData.append('sub[object]', 'sub object');
		formData.append('arr[0]', 'arr[0]');
		formData.append('arr[1]', 'arr[1]');
		formData.append('arr[2]', 'arr[2]');
		formData.append('arr2', 'arr0');
		formData.append('arr2', 'arr1');
		formData.append('arr2', 'arr2');

		expect(formDataToObject(formData)).toStrictEqual({
			string: 'string',
			number: 42,
			number2: -42.34,
			boolean: true,
			boolean2: false,
			sub: { object: 'sub object' },
			arr: ['arr[0]', 'arr[1]', 'arr[2]'],
			arr2: ['arr0', 'arr1', 'arr2']
		});
	});
});
