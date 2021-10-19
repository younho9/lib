import type {ToString} from './convenience';

import type {Primitive} from '.';

export type StringKeyOf<ObjectType extends object> = ToString<keyof ObjectType>;

/**
 * Make all properties in ObjectType optional
 */
export type Optional<ObjectType extends object> = Partial<ObjectType>;

/**
 * Convert all the optional properties in ObjectType with undefined type
 */
export type OptionalToUndefined<ObjectType extends object> = {
  [KeyType in keyof Required<ObjectType>]: Pick<
    ObjectType,
    KeyType
  > extends Required<Pick<ObjectType, KeyType>>
    ? ObjectType[KeyType]
    : ObjectType[KeyType] | undefined;
};

/**
 * Convert all properties can be assigned undefined in T to optional
 */
export type UndefinedToOptional<ObjectType extends object> = OmitByValueType<
  ObjectType,
  undefined
> &
  Optional<PickByValueType<ObjectType, undefined>>;

/**
 * Extract keys from ObjectType that are assignable to T
 */
export type ExtractKeysByValueType<ObjectType extends object, ValueType> = {
  [KeyType in keyof ObjectType]-?: ValueType extends ObjectType[KeyType]
    ? KeyType
    : never;
}[keyof ObjectType];

/**
 * Exclude keys from ObjectType that are assignable to T
 */
export type ExcludeKeysByValueType<
  ObjectType extends object,
  ValueType,
> = Exclude<keyof ObjectType, ExtractKeysByValueType<ObjectType, ValueType>>;

/**
 * From ObjectType, pick a set of properties that are assignable to T
 */
export type PickByValueType<ObjectType extends object, ValueType> = Pick<
  ObjectType,
  ExtractKeysByValueType<ObjectType, ValueType>
>;

/**
 * Construct a type with the properties of ObjectType except for those are assignable to T
 */
export type OmitByValueType<ObjectType extends object, ValueType> = Omit<
  ObjectType,
  keyof PickByValueType<ObjectType, ValueType>
>;

/**
 * Exclude keys of type KeyType from ObjectType
 */
export type ExcludeKeysByKeyType<ObjectType extends object, KeyType> = Exclude<
  keyof ObjectType,
  KeyType
>;

/**
 * Extract keys of type KeyType from ObjectType
 */
export type ExtractKeysByKeyType<ObjectType extends object, KeyType> = Extract<
  keyof ObjectType,
  KeyType
>;

/**
 * From ObjectType, pick a set of properties that are assignable to T
 */
export type PickByKeyType<ObjectType extends object, KeyType> = Pick<
  ObjectType,
  ExtractKeysByKeyType<ObjectType, KeyType>
>;

/**
 * Construct a type with the properties of ObjectType except for those are assignable to T
 */
export type OmitByKeyType<ObjectType extends object, KeyType> = Omit<
  ObjectType,
  keyof PickByKeyType<ObjectType, KeyType>
>;

/**
 * Object's own enumerable property names
 */
export type ObjectKeys<ObjectType extends object> = StringKeyOf<
  OmitByKeyType<ObjectType, symbol>
>[];

declare const tag: unique symbol;

export type InvariantProp<Type> = (arg: Type) => Type;

export type InvariantSignature<Type> = {
  readonly [tag]: InvariantProp<Type>;
};

/**
 * Invariant type of object type
 */
export type InvariantOf<Value> = Value & InvariantSignature<Value>;

export type InvariantOfDeep<Value> = Value extends Primitive
  ? InvariantOf<Value>
  : InvariantOf<{
      [KeyType in keyof Value]: InvariantOfDeep<Value[KeyType]>;
    }>;
