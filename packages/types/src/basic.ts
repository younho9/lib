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
 * Alternative of @type {object}
 *
 * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-types.md#default-options
 *
 * @typeParam T - Type of properties
 * @typeParam K - Type of keys
 */
export type Dict<T = unknown, K extends PropertyKey = PropertyKey> = Record<
  K,
  T
>;

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#javascript_types
 */
export type JSTypes = Primitive | Dict;

/**
 * Alternative of @type {Function}
 *
 * @see https://www.typescriptlang.org/docs/handbook/2/functions.html#function
 */
export type Func = () => void;

/**
 * @see https://developer.mozilla.org/en-US/docs/Glossary/Nullish
 */
export type Nullish = undefined | null;

/**
 * @see https://developer.mozilla.org/en-US/docs/Glossary/Falsy
 *
 * NaN is also falsy, but TypeScript doesn't have a numeric literal.
 * @see https://github.com/Microsoft/TypeScript/issues/15135
 *
 */
export type Falsy =
  | false
  | 0
  | -0
  | 0n
  | ''
  | null
  | undefined
  | HTMLAllCollection;
