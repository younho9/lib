/**
 * Alternative of `object`
 *
 * Ban-types {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-types.md#default-options}
 *
 * *`{}` vs `object` vs `Object` vs `Record<string, unknown>` vs `Record<PropertyKey, unknown>`*
 *
 * | `values`                                                          | `{}` | `object` | `Object` | `Record<string, unknown>` | `Record<PropertyKey, unknown>` |
 * | ----------------------------------------------------------------- | :--- | :------- | :------- | :------------------------ | :----------------------------- |
 * | `{}`                                                              | ✅   | ✅       | ✅       | ✅                        | ✅                             |
 * | `[]`                                                              | ✅   | ✅       | ✅       | ❌                        | ❌                             |
 * | `() => undefined` (`Function`)                                    | ✅   | ✅       | ✅       | ❌                        | ❌                             |
 * | `new String('')` (`String`)                                       | ✅   | ✅       | ✅       | ❌                        | ❌                             |
 * | `new Number(1)` (`Number`)                                        | ✅   | ✅       | ✅       | ❌                        | ❌                             |
 * | `new Boolean(false)` (`Boolean`)                                  | ✅   | ✅       | ✅       | ❌                        | ❌                             |
 * | `a` (`string`)                                                    | ✅   | ❌       | ✅       | ❌                        | ❌                             |
 * | `1` (`number`)                                                    | ✅   | ❌       | ✅       | ❌                        | ❌                             |
 * | `Symbol('symbol')` (`symbol`)                                     | ✅   | ❌       | ✅       | ❌                        | ❌                             |
 * | `null` (`null`)                                                   | ❌   | ❌       | ❌       | ❌                        | ❌                             |
 * | `undefined` (`undefined`)                                         | ❌   | ❌       | ❌       | ❌                        | ❌                             |
 * | `abc` (`ABC: {a: string; b: number; c: boolean}`)                 | ✅   | ✅       | ✅       | ✅                        | ✅                             |
 * | `abc` (`interface ABC`)                                           | ✅   | ✅       | ✅       | ❌                        | ❌                             |
 * | `abc` (`type ABC`)                                                | ✅   | ✅       | ✅       | ✅                        | ✅                             |
 * | `abc` (`class ABC`)                                               | ✅   | ✅       | ✅       | ❌                        | ❌                             |
 * | `abc` (`Record<string, unknown>`)                                 | ✅   | ✅       | ✅       | ✅                        | ✅                             |
 * | `abc` (`Record<PropertyKey, unknown>`)                            | ✅   | ✅       | ✅       | ✅                        | ✅                             |
 * | `abc.a` (access property)                                         | ❌   | ❌       | ❌       | ✅                        | ✅                             |
 *
 * @category Alternative
 */
export type AlternativeObject = Record<string, unknown>;
