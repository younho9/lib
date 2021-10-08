import {
  expectAssignable,
  expectNotAssignable,
  expectNotType,
  expectType,
} from 'tsd';

import type {InvariantOf} from '../src/invariantOf';
import type {IndexSignature} from '../src/object';

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

interface IFooBar {
  foo: number;
  bar?: string;
}

interface IFooBarBaz1 extends FooBar {
  baz: number | undefined;
}

interface IFooBarBaz2 {
  foo: number;
  bar?: string;
  baz: number | undefined;
}

class FooBarClass {
  foo!: number;
  bar?: string;
}

class FooBarBaz1Class extends FooBarClass {
  baz: number | undefined;
}

class FooBarBaz2Class {
  foo!: number;
  bar?: string;
  baz: number | undefined;
}

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

  /** Subtype is assignable to supertype (`FooBar :> FooBarBaz1`) */
  expectAssignable<FooBar>({} as FooBarBaz1);

  /** Supertype is not assignable to subtype (`FooBarBaz1 <: FooBar`) */
  expectNotAssignable<FooBarBaz1>({} as FooBar);
}

/**
 * Invariant Compatibility (type)
 */
{
  /** Invariant is exact with equal type (FooBarBaz1 === FooBarBaz1) */
  expectType<InvariantOf<FooBarBaz1>>({} as InvariantOf<FooBarBaz1>);

  /** Invariant is assignable with equal structure type (FooBarBaz1 == FooBarBaz2) */
  expectNotType<InvariantOf<FooBarBaz1>>({} as InvariantOf<FooBarBaz2>);
  expectAssignable<InvariantOf<FooBarBaz1>>({} as InvariantOf<FooBarBaz2>);
  expectAssignable<InvariantOf<FooBarBaz2>>({} as InvariantOf<FooBarBaz1>);

  /** Invariant subtype is not assignable to Invariant supertype (`FooBar :> FooBarBaz1`) */
  expectNotAssignable<InvariantOf<FooBar>>({} as InvariantOf<FooBarBaz1>);

  /** Invariant supertype is not assignable to Invariant subtype (`FooBarBaz1 <: FooBar`) */
  expectNotAssignable<InvariantOf<FooBarBaz1>>({} as InvariantOf<FooBar>);

  /** Invariant type is subtype of default type (`Invariant<FooBarBaz1> <: FooBarBaz1`) */
  expectNotType<InvariantOf<FooBarBaz1>>({} as FooBarBaz1);
  expectNotType<FooBarBaz1>({} as InvariantOf<FooBarBaz1>);
  expectNotAssignable<InvariantOf<FooBarBaz1>>({} as FooBarBaz1);
  expectAssignable<FooBarBaz1>({} as InvariantOf<FooBarBaz1>);
}

/**
 * Invariant Compatibility (interface)
 *
 * The interface does not have an index signature.
 * @see https://github.com/microsoft/TypeScript/issues/15300
 */
{
  /** Invariant is exact with equal type (FooBarBaz1 === FooBarBaz1) */
  expectType<InvariantOf<IndexSignature<IFooBarBaz1>>>({} as InvariantOf<IndexSignature<IFooBarBaz1>>); // prettier-ignore

  /** Invariant is assignable with equal structure type (FooBarBaz1 == FooBarBaz2) */
  expectType<InvariantOf<IndexSignature<IFooBarBaz1>>>({} as InvariantOf<IndexSignature<IFooBarBaz2>>); // prettier-ignore
  expectAssignable<InvariantOf<IndexSignature<IFooBarBaz1>>>({} as InvariantOf<IndexSignature<IFooBarBaz2>>); // prettier-ignore
  expectAssignable<InvariantOf<IndexSignature<IFooBarBaz2>>>({} as InvariantOf<IndexSignature<IFooBarBaz1>>); // prettier-ignore

  /** Invariant subtype is not assignable to Invariant supertype (`FooBar :> FooBarBaz1`) */
  expectNotAssignable<InvariantOf<IndexSignature<IFooBar>>>({} as InvariantOf<IndexSignature<IFooBarBaz1>>); // prettier-ignore

  /** Invariant supertype is not assignable to Invariant subtype (`FooBarBaz1 <: FooBar`) */
  expectNotAssignable<InvariantOf<IndexSignature<IFooBarBaz1>>>({} as InvariantOf<IndexSignature<IFooBar>>); // prettier-ignore

  /** Invariant type is subtype of default type (`Invariant<FooBarBaz1> <: FooBarBaz1`) */
  expectNotType<InvariantOf<IndexSignature<IFooBarBaz1>>>({} as FooBarBaz1);
  expectNotType<FooBarBaz1>({} as InvariantOf<IndexSignature<IFooBarBaz1>>);
  expectNotAssignable<InvariantOf<IndexSignature<IFooBarBaz1>>>({} as FooBarBaz1); // prettier-ignore
  expectAssignable<FooBarBaz1>({} as InvariantOf<IndexSignature<IFooBarBaz1>>);
}

/**
 * Invariant Compatibility (class)
 *
 * The interface does not have an index signature.
 * @see https://github.com/microsoft/TypeScript/issues/15300
 */
{
  /** Invariant is exact with equal type (FooBarBaz1 === FooBarBaz1) */
  expectType<InvariantOf<IndexSignature<FooBarBaz1Class>>>({} as InvariantOf<IndexSignature<FooBarBaz1Class>>); // prettier-ignore

  /** Invariant is assignable with equal structure type (FooBarBaz1 == FooBarBaz2) */
  expectType<InvariantOf<IndexSignature<FooBarBaz1Class>>>({} as InvariantOf<IndexSignature<FooBarBaz2Class>>); // prettier-ignore
  expectAssignable<InvariantOf<IndexSignature<FooBarBaz1Class>>>({} as InvariantOf<IndexSignature<FooBarBaz2Class>>); // prettier-ignore
  expectAssignable<InvariantOf<IndexSignature<FooBarBaz2Class>>>({} as InvariantOf<IndexSignature<FooBarBaz1Class>>); // prettier-ignore

  /** Invariant subtype is not assignable to Invariant supertype (`FooBar :> FooBarBaz1`) */
  expectNotAssignable<InvariantOf<IndexSignature<FooBarClass>>>({} as InvariantOf<IndexSignature<FooBarBaz1Class>>); // prettier-ignore

  /** Invariant supertype is not assignable to Invariant subtype (`FooBarBaz1 <: FooBar`) */
  expectNotAssignable<InvariantOf<IndexSignature<FooBarBaz1Class>>>({} as InvariantOf<IndexSignature<FooBarClass>>); // prettier-ignore

  /** Invariant type is subtype of default type (`Invariant<FooBarBaz1> <: FooBarBaz1`) */
  expectNotType<InvariantOf<IndexSignature<FooBarBaz1Class>>>({} as FooBarBaz1);
  expectNotType<FooBarBaz1>({} as InvariantOf<IndexSignature<FooBarBaz1Class>>);
  expectNotAssignable<InvariantOf<IndexSignature<FooBarBaz1Class>>>({} as FooBarBaz1); // prettier-ignore
  expectAssignable<FooBarBaz1>({} as InvariantOf<IndexSignature<FooBarBaz1Class>>); // prettier-ignore
}
