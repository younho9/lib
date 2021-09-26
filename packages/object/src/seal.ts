import type {Dict, Invariant} from '@younho9/types';

export default function seal<O extends Dict>(obj: O): Invariant<O> {
  return Object.seal(obj) as Invariant<O>;
}
