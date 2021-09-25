/**
 * Alternative of @type {object}
 *
 * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-types.md#default-options
 */
export type Object = Record<string, unknown>;

/**
 * Alternative of @type {Function}
 *
 * @see https://www.typescriptlang.org/docs/handbook/2/functions.html#function
 */
export type Function = (...args: Array<any>) => any;
