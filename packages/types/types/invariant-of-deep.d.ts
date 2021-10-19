import type {Primitive} from 'type-fest';

import type {InvariantOf} from './invariant-of';

/**
 * Make type as Invariant deeply
 *
 * @category Utilities
 */
export type InvariantOfDeep<Type> = Type extends Primitive
  ? InvariantOf<Type>
  : InvariantOf<{
      [KeyType in keyof Type]: InvariantOfDeep<Type[KeyType]>;
    }>;
