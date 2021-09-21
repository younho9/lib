import type {Alt} from '@younho9/types';

/**
 * Using declaration merging feature
 *
 * @see https://fettblog.eu/typescript-better-object-keys/#option-2.-extending-object-constructor
 */
declare global {
  export type ObjectKeys<T> = T extends Alt.Object
    ? keyof T extends symbol
      ? []
      : Exclude<keyof T, symbol>[]
    : T extends number | bigint
    ? []
    : T extends Array<unknown> | string
    ? string[]
    : never;

  export interface ObjectConstructor {
    keys<T>(o: T): ObjectKeys<T>;
  }
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
 *
 * @param o - The object of which the enumerable's own properties are to be returned.
 * @returns An array of strings that represent all the enumerable properties of the given object.
 */
export default function keys<T>(o: T): ObjectKeys<T> {
  return Object.keys(o);
}
