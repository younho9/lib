/**
 * Alternative of `Function`
 *
 * Ban-types {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-types.md#default-options}
 *
 * *`Function` vs `(...args: Array<any>) => any`*
 *
 * | `values`                        | `Function` | `() => any` | `(arg: any) => any` | `(arg1: any, arg2: any) => any` | `(...args: Array<any>) => any` |
 * | :------------------------------ | :--------- | :---------- | :------------------ | :------------------------------ | :----------------------------- |
 * | `Function`                      | ✅         | ❌          | ❌                  | ❌                              | ❌                             |
 * | `() => any`                     | ✅         | ✅          | ✅                  | ✅                              | ✅                             |
 * | `(arg: any) => any`             | ✅         | ❌          | ✅                  | ✅                              | ✅                             |
 * | `(arg1: any, arg2: any) => any` | ✅         | ❌          | ❌                  | ✅                              | ✅                             |
 * | `(...args: Array<any>) => any`  | ✅         | ✅          | ✅                  | ✅                              | ✅                             |
 *
 * @category Alternative
 */
export type AlternativeFunction = (...args: Array<any>) => any;
