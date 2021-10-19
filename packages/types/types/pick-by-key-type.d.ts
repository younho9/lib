/**
 * From ObjectType, pick a set of properties whose keys are in KeyType
 *
 * @category Object
 */
export type PickByKeyType<ObjectType extends object, KeyType> = Pick<
  ObjectType,
  Extract<keyof ObjectType, KeyType>
>;
