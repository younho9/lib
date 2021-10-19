import type {InvariantOf} from '@younho9/types';

export function invariantOf<ObjectType extends object>(
  object: ObjectType,
): InvariantOf<ObjectType> {
  return object as InvariantOf<ObjectType>;
}
