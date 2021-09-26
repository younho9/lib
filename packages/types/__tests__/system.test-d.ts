import {
  expectAssignable,
  expectNotAssignable,
  expectNotType,
  expectType,
} from 'tsd';

import type {Invariant, Nominal} from '../src/system';

type FooBar = {
  foo: number;
  bar?: string;
};

type FooBarBaz1 = FooBar & {
  baz: number | undefined;
};

type FooBarBaz2 = {
  foo: number;
  bar?: string;
  baz: number | undefined;
};

/**
 * Default Compatibility (structural)
 */
{
  /** object type is exact with equal type */
  expectType<FooBar>({} as FooBar);
  expectType<FooBar>({} as FooBar);

  /** object type is exact with equal structure type */
  expectAssignable<FooBarBaz1>({} as FooBarBaz2);
  expectAssignable<FooBarBaz2>({} as FooBarBaz1);

  /** Subtype is assignable to supertype (FooBar :> FooBarBaz1) */
  expectAssignable<FooBar>({} as FooBarBaz1);

  /** Supertype is not assignable to subtype (FooBarBaz1 <: FooBar) */
  expectNotAssignable<FooBarBaz1>({} as FooBar);
}

/**
 * Invariant Compatibility
 */
{
  /** Invariant is exact with equal type (FooBarBaz1 === FooBarBaz1) */
  expectType<Invariant<FooBarBaz1>>({} as Invariant<FooBarBaz1>);

  /** Invariant is assignable with equal structure type (FooBarBaz1 == FooBarBaz2) */
  expectNotType<Invariant<FooBarBaz1>>({} as Invariant<FooBarBaz2>);
  expectAssignable<Invariant<FooBarBaz1>>({} as Invariant<FooBarBaz2>);
  expectAssignable<Invariant<FooBarBaz2>>({} as Invariant<FooBarBaz1>);

  /** Invariant subtype is not assignable to Invariant supertype (FooBar :> FooBarBaz1) */
  expectNotAssignable<Invariant<FooBar>>({} as Invariant<FooBarBaz1>);

  /** Invariant supertype is not assignable to Invariant subtype (FooBarBaz1 <: FooBar) */
  expectNotAssignable<Invariant<FooBarBaz1>>({} as Invariant<FooBar>);

  /** Invariant type is subtype of default type (Invariant<FooBarBaz1> <: FooBarBaz1) */
  expectNotType<Invariant<FooBarBaz1>>({} as FooBarBaz1);
  expectNotType<FooBarBaz1>({} as Invariant<FooBarBaz1>);
  expectNotAssignable<Invariant<FooBarBaz1>>({} as FooBarBaz1);
  expectAssignable<FooBarBaz1>({} as Invariant<FooBarBaz1>);
}

/**
 * Nominal Compatibility
 */
{
  /** Nominal type branding */
  expectNotType<Nominal<string, 'PersonID'>>('');
  expectType<Nominal<string, 'PersonID'>>('' as Nominal<string, 'PersonID'>);

  /** Nominal is exact with equal type (FooBarBaz1 === FooBarBaz1) */
  expectType<Nominal<FooBarBaz1, 'FooBarBaz1'>>({} as Nominal<FooBarBaz1, 'FooBarBaz1'>); // prettier-ignore

  /** Nominal is not assignable with equal structure type (FooBarBaz1 == FooBarBaz2) */
  expectNotType<Nominal<FooBarBaz1, 'FooBarBaz1'>>({} as Nominal<FooBarBaz2, 'FooBarBaz2'>); // prettier-ignore
  expectNotAssignable<Nominal<FooBarBaz1, 'FooBarBaz1'>>({} as Nominal<FooBarBaz2, 'FooBarBaz2'>); // prettier-ignore
  expectNotAssignable<Nominal<FooBarBaz2, 'FooBarBaz2'>>({} as Nominal<FooBarBaz1, 'FooBarBaz1'>); // prettier-ignore

  /** Nominal subtype is not assignable to Nominal supertype (FooBar :> FooBarBaz1) */
  expectNotAssignable<Nominal<FooBar, 'FooBar'>>({} as Nominal<FooBarBaz2, 'FooBarBaz2'>); // prettier-ignore

  /** Nominal supertype is not assignable to Nominal subtype (FooBarBaz1 <: FooBar) */
  expectNotAssignable<Nominal<FooBarBaz1, 'FooBarBaz1'>>({} as Nominal<FooBar, 'FooBar'>); // prettier-ignore

  /** Nominal type is subtype of default type (Nominal<FooBarBaz1, 'FooBarBaz1'> <: FooBarBaz1) */
  expectNotType<Nominal<FooBarBaz1, 'FooBarBaz1'>>({} as FooBarBaz1);
  expectNotType<FooBarBaz1>({} as Nominal<FooBarBaz1, 'FooBarBaz1'>);
  expectNotAssignable<Nominal<FooBarBaz1, 'FooBarBaz1'>>({} as FooBarBaz1);
  expectAssignable<FooBarBaz1>({} as Nominal<FooBarBaz1, 'FooBarBaz1'>);

  /** Nominal type is not assignable to Invariant type */
  expectNotType<Nominal<FooBarBaz1, 'FooBarBaz1'>>({} as Invariant<FooBarBaz1>);
  expectNotType<Invariant<FooBarBaz1>>({} as Nominal<FooBarBaz1, 'FooBarBaz1'>);
  expectNotAssignable<Nominal<FooBarBaz1, 'FooBarBaz1'>>({} as Invariant<FooBarBaz1>); // prettier-ignore
  expectNotAssignable<Invariant<FooBarBaz1>>({} as Nominal<FooBarBaz1, 'FooBarBaz1'>); // prettier-ignore
}
