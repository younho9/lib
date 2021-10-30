import type {Falsy} from '@younho9/types';

export default function isFalsy(condition: unknown): condition is Falsy {
  return !condition;
}
