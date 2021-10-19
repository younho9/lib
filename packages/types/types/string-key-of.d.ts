import type {ToString} from './to-string';

/**
 * @category Object
 */
export type StringKeyOf<ObjectType extends object> = ToString<
  keyof Omit<ObjectType, symbol>
>[];
