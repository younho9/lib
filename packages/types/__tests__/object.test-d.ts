import {expectAssignable, expectNotAssignable, expectType} from 'tsd';

import type {
  ExcludeKeysByName,
  ExcludeKeysByType,
  ExtractKeysByName,
  ExtractKeysByType,
  IndexSignature,
  ObjectKeys,
  OmitByType,
  Optional,
  OptionalToUndefined,
  PickByType,
  UndefinedToOptional,
} from '../src/object';

declare interface ISomeType {
  foo: number;
  bar?: string;
  baz: number | undefined;
}

type SomeType = IndexSignature<ISomeType>;

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
  expectType<OptionalToUndefined<SomeType>>(
    {} as {foo: number; bar: string | undefined; baz: number | undefined},
  );

  /** OptionalToUndefined vs Required */
  expectType<Required<SomeType>>(
    {} as {foo: number; bar: string; baz: number | undefined},
  );
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

  expectAssignable<UndefinedToOptional<SomeType>>({
    foo: 123,
    bar: 'string',
    baz: 123,
  });

  expectType<number>(obj.foo);
  expectType<string | undefined>(obj.bar);
  expectType<number | undefined>(obj.baz);
}

/**
 * Extract Keys By Type
 */
{
  expectType<ExtractKeysByType<SomeType, undefined>>('' as 'bar' | 'baz');
  expectType<ExtractKeysByType<SomeType, number>>('' as 'foo' | 'baz');
  expectType<ExtractKeysByType<SomeType, string>>('' as 'bar');
}

/**
 * Exclude Keys By Type
 */
{
  expectType<ExcludeKeysByType<SomeType, undefined>>('' as 'foo');
  expectType<ExcludeKeysByType<SomeType, number>>('' as 'bar');
  expectType<ExcludeKeysByType<SomeType, string>>('' as 'foo' | 'baz');
}

/**
 * Pick By Type
 */
{
  expectType<PickByType<SomeType, undefined>>(
    {} as Pick<SomeType, 'bar' | 'baz'>,
  );
  expectType<PickByType<SomeType, number>>({} as Pick<SomeType, 'foo' | 'baz'>);
  expectType<PickByType<SomeType, string>>({} as Pick<SomeType, 'bar'>);
}

/**
 * Omit By Type
 */
{
  expectType<OmitByType<SomeType, undefined>>(
    {} as Omit<SomeType, 'bar' | 'baz'>,
  );
  expectType<OmitByType<SomeType, number>>({} as Omit<SomeType, 'foo' | 'baz'>);
  expectType<OmitByType<SomeType, string>>({} as Omit<SomeType, 'bar'>);
}

/**
 * Exclude Keys By Name
 */
{
  expectType<ExcludeKeysByName<SomeType, 'foo'>>(
    '' as Exclude<keyof SomeType, 'foo'>,
  );
  expectType<ExcludeKeysByName<SomeType, 'foo' | 'bar'>>(
    '' as Exclude<keyof SomeType, 'foo' | 'bar'>,
  );
  expectType<ExcludeKeysByName<SomeType, 'baz'>>(
    '' as Exclude<keyof SomeType, 'baz'>,
  );
}

/**
 * Extract Keys By Name
 */
{
  expectType<ExtractKeysByName<SomeType, 'foo'>>(
    '' as Extract<keyof SomeType, 'foo'>,
  );
  expectType<ExtractKeysByName<SomeType, 'foo' | 'bar'>>(
    '' as Extract<keyof SomeType, 'foo' | 'bar'>,
  );
  expectType<ExtractKeysByName<SomeType, 'baz'>>(
    '' as Extract<keyof SomeType, 'baz'>,
  );
}

/**
 * Object's Keys names
 */
{
  expectType<ObjectKeys<{foo: number}>>([] as 'foo'[]);
  expectType<ObjectKeys<SomeType>>([] as ('foo' | 'bar' | 'baz')[]);
  expectType<ObjectKeys<{1: 'one'; 2: 'two'; 3: 'three'}>>([] as (1 | 2 | 3)[]);
  expectType<ObjectKeys<{[K: symbol]: unknown}>>([] as never[]);
  expectType<
    ObjectKeys<{
      1: 'one';
      two: 'two';
      [K: symbol]: 'three';
    }>
  >([] as (1 | 'two')[]);
}
