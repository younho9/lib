import type {InvariantOf} from '@younho9/types';

export function invariantOf<Type>(value: Type): InvariantOf<Type> {
  return value as InvariantOf<Type>;
}
