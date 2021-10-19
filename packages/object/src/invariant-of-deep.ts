import type {InvariantOfDeep} from '@younho9/types';

export function invariantOfDeep<ObjectType extends object>(
  object: ObjectType,
): InvariantOfDeep<ObjectType> {
  return object as InvariantOfDeep<ObjectType>;
}
