import { getImageExtension, getImageMimeType, isImage } from './mime';

describe('mime', () => {
	it('isImage', () => {
		expect(isImage(undefined)).toBeFalsy();
		expect(isImage({} as File)).toBeFalsy();
		expect(isImage({ type: 'image/png' } as File)).toBeFalsy();
		expect(isImage({ name: 'test.png' } as File)).toBeFalsy();
		expect(isImage({ name: 'test.txt', type: 'text/plain' } as File)).toBeFalsy();
		expect(isImage({ name: 'test.png', type: 'text/plain' } as File)).toBeFalsy();
		expect(isImage({ name: 'test.txt', type: 'image/png' } as File)).toBeFalsy();
		expect(isImage({ name: 'test.png', type: 'image/png' } as File)).toBeTruthy();
	});

	it('getImageMimeType', () => {
		expect(getImageMimeType(undefined)).toStrictEqual(undefined);
		expect(getImageMimeType('.txt')).toStrictEqual(undefined);
		expect(getImageMimeType('.jpeg')).toStrictEqual('image/jpeg');
		expect(getImageMimeType('.jpg')).toStrictEqual('image/jpeg');
	});

	it('getImageExtension', () => {
		expect(getImageExtension(undefined)).toStrictEqual(undefined);
		expect(getImageExtension('text/plain')).toStrictEqual(undefined);
		expect(getImageExtension('image/jpeg')).toStrictEqual('.jpeg');
	});
});
