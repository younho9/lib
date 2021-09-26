import type {Dict, ObjectKeys} from '@younho9/types';

/**
 * @param obj - The object of which the enumerable's own properties are to be returned.
 * @returns An array of strings that represent all the enumerable properties of the given object.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
 */
export default function keys<O extends Dict>(obj: O): ObjectKeys<O> {
  return Object.keys(obj) as ObjectKeys<O>;
}
