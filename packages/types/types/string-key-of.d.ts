import type {ToString} from './to-string.js';

/**
 * @category Object
 */
export type StringKeyOf<ObjectType extends object> = Array<
	ToString<keyof Omit<ObjectType, symbol>>
>;
