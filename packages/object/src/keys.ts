import type {Alt} from '@younho9/types';

export type ObjectKeys<T> = T extends Alt.Object
  ? keyof T extends symbol
    ? []
    : Exclude<keyof T, symbol>[]
  : T extends number | bigint
  ? []
  : T extends Array<unknown> | string
  ? string[]
  : never;

/**
 * Option 1. Type casting
 * Option 2. Extending Object Constructor using merging feature.
 *
 * @see https://fettblog.eu/typescript-better-object-keys/#option-2.-extending-object-constructor
 *
 * @example - Option2
 * ```ts
 * declare global {
 *   export interface ObjectConstructor {
 *     keys<T>(o: T): ObjectKeys<T>;
 *   }
 * }
 * ```
 *
 * Option 2 can pollute the global type, so use Option 1.
 * @see https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
 *
 * @param o - The object of which the enumerable's own properties are to be returned.
 * @returns An array of strings that represent all the enumerable properties of the given object.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
 */
export default function keys<T>(o: T): ObjectKeys<T> {
  return Object.keys(o) as ObjectKeys<T>;
}
