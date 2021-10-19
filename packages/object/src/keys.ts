import type {ObjectKeys} from '@younho9/types';
import type {InvariantOf} from 'invariant-of';

/**
 * @param invariant - The object of which the enumerable's own properties are to be returned.
 * @returns An array of strings that represent all the enumerable properties of the given object.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys}
 */
export default function keys<O extends object>(
  invariant: InvariantOf<O>,
): ObjectKeys<O> {
  return Object.keys(invariant);
}
