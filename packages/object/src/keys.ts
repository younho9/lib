export type ObjectKeys<T> = T extends Array<unknown>
  ? string[]
  : keyof T extends symbol
  ? []
  : Exclude<keyof T, symbol>[];

/**
 * @param obj - The object of which the enumerable's own properties are to be returned.
 * @returns An array of strings that represent all the enumerable properties of the given object.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
 */
export default function keys<T extends object>(obj: T): ObjectKeys<T> {
  return Object.keys(obj) as ObjectKeys<T>;
}
