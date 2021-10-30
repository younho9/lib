import type {ExtractKeysByValueType} from './extract-keys-by-value-type.js';

/**
 * Excludes keys with a value type from an object.
 *
 * @category Object
 */
export type ExcludeKeysByValueType<
  ObjectType extends object,
  ValueType,
> = Exclude<keyof ObjectType, ExtractKeysByValueType<ObjectType, ValueType>>;
