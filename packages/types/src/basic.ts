/**
 * @see https://developer.mozilla.org/en-US/docs/Glossary/Primitive
 */
export type Primitive =
  | bigint
  | boolean
  | null
  | number
  | string
  | symbol
  | undefined;

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#javascript_types
 */
export type Type = Primitive | object;

/**
 * @see https://developer.mozilla.org/en-US/docs/Glossary/Nullish
 */
export type Nullish = undefined | null;

/**
 * @see https://developer.mozilla.org/en-US/docs/Glossary/Falsy
 *
 * `NaN` is also `Falsy`, but TypeScript doesn't have a numeric literal.
 * @see https://github.com/Microsoft/TypeScript/issues/15135
 *
 * `HTMLAllCollection` is also `Falsy`, but it's a deprecated feature.
 *
 * Also, `!!HTMLAllCollection` is inferred as true in TypeScript.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/all
 */
export type Falsy = false | 0 | -0 | 0n | '' | null | undefined;

/**
 * @see https://developer.mozilla.org/en-US/docs/Glossary/Truthy
 */
export type Truthy<T = Type> = Exclude<T, Falsy>;
