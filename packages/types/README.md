# @younho9/types

> A set of utility types for TypeScript

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
| `abc` (`type TABC`)                                               | ✅   | ✅       | ✅       | ✅                        | ✅                             |
| `abc` (`class CABC`)                                              | ✅   | ✅       | ✅       | ❌                        | ❌                             |
| `abc` (`Record<string, unknown>`)                                 | ✅   | ✅       | ✅       | ✅                        | ✅                             |
| `abc.a` (access property)                                         | ❌   | ❌       | ❌       | ✅                        | ✅                             |

### `Alt.Function`

```ts
type Function = (...args: Array<any>) => any;
```

#### [`Function` vs `(...args: Array<any>) => any`](__tests__/alternative.test-d.ts#L255)

| `values`                        | `Function` | `() => any` | `(arg: any) => any` | `(arg1: any, arg2: any) => any` | `(...args: Array<any>) => any` |
| :------------------------------ | :--------- | :---------- | :------------------ | :------------------------------ | :----------------------------- |
| `Function`                      | ✅         | ❌          | ❌                  | ❌                              | ❌                             |
| `() => any`                     | ✅         | ✅          | ✅                  | ✅                              | ✅                             |
| `(arg: any) => any`             | ✅         | ❌          | ✅                  | ✅                              | ✅                             |
| `(arg1: any, arg2: any) => any` | ✅         | ❌          | ❌                  | ✅                              | ✅                             |
| `(...args: Array<any>) => any`  | ✅         | ✅          | ✅                  | ✅                              | ✅                             |

## [`basic`](src/basic.ts)

> Types of basic terms used in JavaScript

### `Primitive`

7 primitive data types in [JavaScript](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)

```ts
type Primitive = bigint | boolean | null | number | string | symbol | undefined;
```

### `Type`

The set of types in the [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#javascript_types) language.

```ts
type Type = Primitive | object;
```

### `Nullish`

In JavaScript, a [Nullish](https://developer.mozilla.org/en-US/docs/Glossary/Nullish) value is the value which is either `null` or `undefined`.

```ts
type Nullish = undefined | null;
```

### `Falsy`

A value that is considered false when encountered in a Boolean context.

> `NaN` is also `Falsy`, but [TypeScript](https://github.com/Microsoft/TypeScript/issues/15135) doesn't have a numeric literal.
>
> `HTMLAllCollection` is also `Falsy`, but it's a [deprecated feature](https://developer.mozilla.org/en-US/docs/Web/API/Document/all).
>
> Also, `!!HTMLAllCollection` is inferred as true in [TypeScript](https://www.typescriptlang.org/play?#code/MYewdgzgLgBAlhAEgFQLIBkCCAbbBhEXAU2CjnGQCcBXKACwE8YBeGAQjYBMRhqBbImCgA6AIa4A3EA).

```ts
type Falsy = false | 0 | -0 | 0n | '' | null | undefined;
```

### `Truthy`

A value that is considered true when encountered in a Boolean context.

```ts
type Truthy<T = Type> = Exclude<T, Falsy>;
```

#### [Limitation of `Truthy`](__tests__/basic.test-d.ts#L170)

Generic type parameter is required to infer truthiness of literal type of `number` | `string` | `bigint`

```ts
expectAssignable<Basic.Truthy>(0);
expectAssignable<Basic.Truthy>(-0);
expectAssignable<Basic.Truthy>(0n);
expectAssignable<Basic.Truthy>('');

expectNotAssignable<Basic.Truthy<0>>(0);
expectNotAssignable<Basic.Truthy<-0>>(-0);
expectNotAssignable<Basic.Truthy<0n>>(0n);
expectNotAssignable<Basic.Truthy<''>>('');
```

## [`convenience`](src/convenience.ts)

> Some types for convenience

### `Dict`

```ts
type Dict<T = unknown> = Record<string, T>;
```

---

<a name="abc">[1]</a>: `const abc = {a: '123', b: 123, c: false}`

## License

[MIT](../../LICENSE)
