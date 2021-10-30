import type {InvariantOf} from '@younho9/types';

/**
 * @param invariant - The object of which the enumerable's own properties are to be returned.
 * @returns An array of strings that represent all the enumerable properties of the given object.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys}
 */
export function keys<
  ObjectType extends object, // eslint-disable-line @typescript-eslint/ban-types
>(invariant: InvariantOf<ObjectType>): Array<keyof ObjectType> {
  return Object.keys(invariant) as Array<keyof ObjectType>;
}
