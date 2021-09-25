# @younho9/types

## [`alternative`](src/alternative.ts)

> Alternative of some [ban-types](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-types.md)

### `Alt.Object`

```ts
type Object = Record<string, unknown>;
```

#### [`{}` vs `object` vs `Object` vs `Record<string, unknown>` vs `Record<PropertyKey, unknown>`](__tests__/alternative.test-d.ts#L33)

| `values`                                                          | `{}` | `object` | `Object` | `Record<string, unknown>` | `Record<PropertyKey, unknown>` |
| ----------------------------------------------------------------- | :--- | :------- | :------- | :------------------------ | :----------------------------- |
| `{}`                                                              | ✅   | ✅       | ✅       | ✅                        | ✅                             |
| `[]`                                                              | ✅   | ✅       | ✅       | ❌                        | ❌                             |
| `() => undefined` (`Function`)                                    | ✅   | ✅       | ✅       | ❌                        | ❌                             |
| `new String('')` (`String`)                                       | ✅   | ✅       | ✅       | ❌                        | ❌                             |
| `new Number(1)` (`Number`)                                        | ✅   | ✅       | ✅       | ❌                        | ❌                             |
| `new Boolean(false)` (`Boolean`)                                  | ✅   | ✅       | ✅       | ❌                        | ❌                             |
| `a` (`string`)                                                    | ✅   | ❌       | ✅       | ❌                        | ❌                             |
| `1` (`number`)                                                    | ✅   | ❌       | ✅       | ❌                        | ❌                             |
| `Symbol('symbol')` (`symbol`)                                     | ✅   | ❌       | ✅       | ❌                        | ❌                             |
| `null` (`null`)                                                   | ❌   | ❌       | ❌       | ❌                        | ❌                             |
| `undefined` (`undefined`)                                         | ❌   | ❌       | ❌       | ❌                        | ❌                             |
| `abc` <sup>[1](#abc)</sup> (`{a: string; b: number; c: boolean}`) | ✅   | ✅       | ✅       | ✅                        | ✅                             |
| `abc` (`interface IABC`)                                          | ✅   | ✅       | ✅       | ❌                        | ❌                             |
| `abc` (`type ABCType`)                                            | ✅   | ✅       | ✅       | ✅                        | ✅                             |
| `abc` (`Record<string, unknown>`)                                 | ✅   | ✅       | ✅       | ✅                        | ✅                             |
| `abc.a` (access property)                                         | ❌   | ❌       | ❌       | ✅                        | ✅                             |

### `Alt.Function`

```ts
type Function = (...args: Array<any>) => any;
```

#### [`Function` vs `(...args: Array<any>) => any`](__tests__/alternative.test-d.ts#L243)

| `values`                        | `Function` | `() => any` | `(arg: any) => any` | `(arg1: any, arg2: any) => any` | `(...args: Array<any>) => any` |
| :------------------------------ | :--------- | :---------- | :------------------ | :------------------------------ | :----------------------------- |
| `Function`                      | ✅         | ❌          | ❌                  | ❌                              | ❌                             |
| `() => any`                     | ✅         | ✅          | ✅                  | ✅                              | ✅                             |
| `(arg: any) => any`             | ✅         | ❌          | ✅                  | ✅                              | ✅                             |
| `(arg1: any, arg2: any) => any` | ✅         | ❌          | ❌                  | ✅                              | ✅                             |
| `(...args: Array<any>) => any`  | ✅         | ✅          | ✅                  | ✅                              | ✅                             |

## [`basic`](src/basic.ts)

## [`convenience`](src/convenience.ts)

## [`system`](src/system.ts)

---

<a name="abc">[1]</a>: `const abc = {a: '123', b: 123, c: false}`
