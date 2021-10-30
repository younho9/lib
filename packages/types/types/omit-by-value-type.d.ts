import type {PickByValueType} from './pick-by-value-type.js';

/**
 * Construct a type with the properties of ObjectType except for those are assignable to ValueType
 *
 * @category Object
 */
export type OmitByValueType<ObjectType extends object, ValueType> = Omit<
  ObjectType,
  keyof PickByValueType<ObjectType, ValueType>
>;
