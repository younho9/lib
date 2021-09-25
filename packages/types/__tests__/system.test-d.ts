import {
  expectAssignable,
  expectNotAssignable,
  expectNotType,
  expectType,
} from 'tsd';

import type {Shaped, Branded, Invariant, Nominal} from '../src/system';

interface AB {
  a: string;
  b: number;
}

interface ABC extends AB {
  c: boolean;
}

interface ABCD extends ABC {
  d: Array<string>;
}

interface ABCLike {
  a: string;
  b: number;
  c: boolean;
}

declare const abcShaped: Shaped<ABC>;

declare const myTypeValue: Branded<'myType'>;

declare const AB: AB;
declare const ABC: ABC;
declare const ABCD: ABCD;
declare const ABCLike: ABCLike;

declare const InvariantAB: Invariant<AB>;
declare const InvariantABC: Invariant<ABC>;
declare const InvariantABCD: Invariant<ABCD>;
declare const InvariantABCLike: Invariant<ABCLike>;

declare const NominalAB: Nominal<AB, 'AB'>;
declare const NominalABC: Nominal<ABC, 'ABC'>;
declare const NominalABCD: Nominal<ABCD, 'ABCD'>;
declare const NominalABCLike: Nominal<ABCLike, 'ABCLike'>;

/**
 * Shaped
 */
{
  expectType<Shaped<ABC>>(abcShaped);
  expectNotType<Shaped<AB>>(abcShaped);
  expectNotType<Shaped<ABCD>>(abcShaped);

  /** forcefully access to private property */
  expectType<'a' | 'b' | 'c'>(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    abcShaped._keys,
  );
}

/**
 * Branded
 */
{
  expectType<Branded<'myType'>>(myTypeValue);
  expectNotType<Branded<string>>(myTypeValue);
  expectNotType<Branded<boolean>>(myTypeValue);

  /** forcefully access to private property */
  expectType<'myType'>(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    myTypeValue._brand,
  );
}

/**
 * Default Compatibility (structural)
 */
{
  /** object type is exact with equal type */
  expectType<ABC>(ABC);

  /** object type is exact with equal structure type */
  expectType<ABC>(ABCLike);

  /** Subtype is assignable to supertype (ABC :> ABCD) */
  expectAssignable<ABC>(ABCD);

  /** Supertype is not assignable to subtype (ABC <: AB) */
  expectNotAssignable<ABC>(AB);
}

/**
 * Invariant Compatibility
 */
{
  /** Invariant is exact with equal type (ABC === ABC) */
  expectType<Invariant<ABC>>(InvariantABC);

  /** Invariant is exact with equal structure type (ABC == ABCLike) */
  expectType<Invariant<ABC>>(InvariantABCLike);

  /** Invariant subtype is not assignable to Invariant supertype (ABC :> ABCD) */
  expectNotAssignable<Invariant<ABC>>(InvariantABCD);

  /** Invariant supertype is not assignable to Invariant subtype (ABC <: AB) */
  expectNotAssignable<Invariant<ABC>>(InvariantAB);

  /** Invariant type is subtype of default type (Invariant<ABC> <: ABC) */
  expectNotType<Invariant<ABC>>(ABC);
  expectNotType<ABC>(InvariantABC);
  expectNotAssignable<Invariant<ABC>>(ABC);
  expectAssignable<ABC>(InvariantABC);
}

/**
 * Nominal Compatibility
 */
{
  /** Nominal is exact with equal type (ABC === ABC) */
  expectType<Nominal<ABC, 'ABC'>>(NominalABC);

  /** Nominal is not assignable with equal structure type (ABC == ABCLike) */
  expectNotType<Nominal<ABC, 'ABC'>>(NominalABCLike);
  expectNotAssignable<Nominal<ABC, 'ABC'>>(NominalABCLike);
  expectNotAssignable<Nominal<ABCLike, 'ABCLike'>>(NominalABC);

  /** Nominal subtype is not assignable to Nominal supertype (ABC :> ABCD) */
  expectNotAssignable<Nominal<ABC, 'ABC'>>(NominalABCD);

  /** Nominal supertype is not assignable to Nominal subtype (ABC <: AB) */
  expectNotAssignable<Nominal<ABC, 'ABC'>>(NominalAB);

  /** Nominal type is subtype of default type (Nominal<ABC, 'ABC'> <: ABC) */
  expectNotType<Nominal<ABC, 'ABC'>>(ABC);
  expectNotType<ABC>(NominalABC);
  expectNotAssignable<Nominal<ABC, 'ABC'>>(ABC);
  expectAssignable<ABC>(NominalABC);

  /** Nominal type is not assignable to Invariant type */
  expectNotType<Nominal<ABC, 'ABC'>>(InvariantABC);
  expectNotType<Invariant<ABC>>(NominalABC);
  expectNotAssignable<Nominal<ABC, 'ABC'>>(InvariantABC);
  expectNotAssignable<Invariant<ABC>>(NominalABC);
}
