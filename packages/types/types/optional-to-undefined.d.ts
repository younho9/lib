/**
 * Convert all the optional properties in ObjectType with undefined type
 *
 * {@link https://medium.com/terria/typescript-transforming-optional-properties-to-required-properties-that-may-be-undefined-7482cb4e1585}
 *
 * @category Object
 */
export type OptionalToUndefined<ObjectType extends object> = {
  [KeyType in keyof Required<ObjectType>]: Pick<
    ObjectType,
    KeyType
  > extends Required<Pick<ObjectType, KeyType>>
    ? ObjectType[KeyType]
    : ObjectType[KeyType] | undefined;
};
