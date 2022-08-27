declare module 'form-data-to-object' {
	type FdtoPrimitives = string | number | boolean;
	type FdtoObject =
		| FdtoPrimitives
		| { [key: string]: FdtoPrimitives | FdtoObject | Array<FdtoObject> };

	export function toObj<T extends FdtoObject>(
		formData: Record<string, FdtoPrimitives | Array<FdtoPrimitives>>
	): T;
	export function fromObj(record: FdtoObject): Record<string, FdtoPrimitives>;
}
