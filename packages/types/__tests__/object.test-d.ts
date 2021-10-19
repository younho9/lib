import {expectAssignable, expectNotAssignable, expectType} from 'tsd';
import type {Simplify} from 'type-fest';

import type {
  ExcludeKeysByKeyType,
  ExcludeKeysByValueType,
  ExtractKeysByKeyType,
  ExtractKeysByValueType,
  ObjectKeys,
  OmitByKeyType,
  OmitByValueType,
  Optional,
  OptionalToUndefined,
  PickByKeyType,
  PickByValueType,
  UndefinedToOptional,
} from '../src/object';

declare interface ISomeType {
  foo: number;
  bar?: string;
  baz: number | undefined;
}

type SomeType = Simplify<ISomeType>;

/**
 * Index Signature
 */
{
  expectAssignable<Record<string, unknown>>({});
  expectNotAssignable<Record<string, unknown>>({} as ISomeType); // Index signature is missing in interface
  expectAssignable<Record<string, unknown>>({} as SomeType);
}

/**
 * Optional<T>
 */
{
  /**
   * alias
   */
  expectType<Optional<SomeType>>({} as Partial<SomeType>);
  expectType<Partial<SomeType>>({} as Optional<SomeType>);
}

/**
 * Optional To Undefined
 */
{
  expectType<OptionalToUndefined<SomeType>>({} as {foo: number; bar: string | undefined; baz: number | undefined}); // prettier-ignore

  /** OptionalToUndefined vs Required */
  expectType<Required<SomeType>>({} as {foo: number; bar: string; baz: number | undefined}); // prettier-ignore
  expectAssignable<OptionalToUndefined<SomeType>>({} as Required<SomeType>);
  expectNotAssignable<Required<SomeType>>({} as OptionalToUndefined<SomeType>);
}

declare const obj: UndefinedToOptional<SomeType>;

/**
 * Undefined To Optional
 */
{
  expectAssignable<UndefinedToOptional<SomeType>>({foo: 123});
  expectNotAssignable<UndefinedToOptional<SomeType>>({bar: 'string', baz: 123});
  expectAssignable<UndefinedToOptional<SomeType>>({foo: 123, bar: 'string', baz: 123}); // prettier-ignore

  expectType<number>(obj.foo);
  expectType<string | undefined>(obj.bar);
  expectType<number | undefined>(obj.baz);
}

/**
 * Extract Keys By Type
 */
{
  expectType<ExtractKeysByValueType<SomeType, undefined>>('' as 'bar' | 'baz');
  expectType<ExtractKeysByValueType<SomeType, number>>('' as 'foo' | 'baz');
  expectType<ExtractKeysByValueType<SomeType, string>>('' as 'bar');
}

/**
 * Exclude Keys By Type
 */
{
  expectType<ExcludeKeysByValueType<SomeType, undefined>>('' as 'foo');
  expectType<ExcludeKeysByValueType<SomeType, number>>('' as 'bar');
  expectType<ExcludeKeysByValueType<SomeType, string>>('' as 'foo' | 'baz');
}

/**
 * Pick By Value Type
 */
{
  expectType<PickByValueType<SomeType, undefined>>({} as Pick<SomeType, 'bar' | 'baz'>); // prettier-ignore
  expectType<PickByValueType<SomeType, number>>({} as Pick<SomeType, 'foo' | 'baz'>); // prettier-ignore
  expectType<PickByValueType<SomeType, string>>({} as Pick<SomeType, 'bar'>);
}

/**
 * Omit By Value Type
 */
{
  expectType<OmitByValueType<SomeType, undefined>>({} as Omit<SomeType, 'bar' | 'baz'>); // prettier-ignore
  expectType<OmitByValueType<SomeType, number>>({} as Omit<SomeType, 'foo' | 'baz'>); // prettier-ignore
  expectType<OmitByValueType<SomeType, string>>({} as Omit<SomeType, 'bar'>);
}

/**
 * Exclude Keys By Key Type
 */
{
  expectType<ExcludeKeysByKeyType<SomeType, 'foo'>>('' as Exclude<keyof SomeType, 'foo'>); // prettier-ignore
  expectType<ExcludeKeysByKeyType<SomeType, 'foo' | 'bar'>>('' as Exclude<keyof SomeType, 'foo' | 'bar'>); // prettier-ignore
  expectType<ExcludeKeysByKeyType<SomeType, 'baz'>>('' as Exclude<keyof SomeType, 'baz'>); // prettier-ignore
}

/**
 * Extract Keys By Key Type
 */
{
  expectType<ExtractKeysByKeyType<SomeType, 'foo'>>('' as Extract<keyof SomeType, 'foo'>); // prettier-ignore
  expectType<ExtractKeysByKeyType<SomeType, 'foo' | 'bar'>>('' as Extract<keyof SomeType, 'foo' | 'bar'>); // prettier-ignore
  expectType<ExtractKeysByKeyType<SomeType, 'baz'>>('' as Extract<keyof SomeType, 'baz'>); // prettier-ignore
}

type MixedKeyObj = {
  1: string;
  two: 'two';
  [three: symbol]: 'three';
};

/**
 * Pick By Key Type
 */
{
  expectType<PickByKeyType<MixedKeyObj, symbol>>({} as Omit<MixedKeyObj, 1 | 'two'>); // prettier-ignore
  expectType<PickByKeyType<MixedKeyObj, number>>({} as Pick<MixedKeyObj, 1>);
  expectType<PickByKeyType<MixedKeyObj, string>>({} as Pick<MixedKeyObj, 'two'>); // prettier-ignore
}

/**
 * Omit By Key Type
 */
{
  expectType<OmitByKeyType<MixedKeyObj, symbol>>({} as Pick<MixedKeyObj, 1 | 'two'>); // prettier-ignore
  expectType<OmitByKeyType<MixedKeyObj, number>>({} as Omit<MixedKeyObj, 1>);
  expectType<OmitByKeyType<MixedKeyObj, string>>({} as Omit<MixedKeyObj, 'two'>); // prettier-ignore
}

/**
 * Object's Keys names
 */
{
  expectType<ObjectKeys<{foo: number}>>([] as 'foo'[]);
  expectType<ObjectKeys<SomeType>>([] as ('foo' | 'bar' | 'baz')[]);
  expectType<ObjectKeys<{1: 'one'; 2: 'two'; 3: 'three'}>>([] as ('1' | '2' | '3')[]); // prettier-ignore
  expectType<ObjectKeys<{[K: symbol]: unknown}>>([] as never[]);
  expectType<ObjectKeys<{1: 'one'; two: 'two'; [K: symbol]: 'three'}>>([] as ('1' | 'two')[]); // prettier-ignore
}
