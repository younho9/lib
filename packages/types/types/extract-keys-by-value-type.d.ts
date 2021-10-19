/**
 * Extracts keys with a value type from an object.
 *
 * @category Object
 */
export type ExtractKeysByValueType<ObjectType extends object, ValueType> = {
  [KeyType in keyof ObjectType]-?: ValueType extends ObjectType[KeyType]
    ? KeyType
    : never;
}[keyof ObjectType];
