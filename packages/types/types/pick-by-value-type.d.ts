import type {ExtractKeysByValueType} from './extract-keys-by-value-type';

/**
 * From ObjectType, pick a set of properties whose values are in ValueType
 *
 * @category Object
 */
export type PickByValueType<ObjectType extends object, ValueType> = Pick<
  ObjectType,
  ExtractKeysByValueType<ObjectType, ValueType>
>;
