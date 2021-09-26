import type {Invariant} from '@younho9/types';
import {expectAssignable, expectNotAssignable, expectType} from 'tsd';

import {seal} from '../src';

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

type DiffFooBarBaz = {
  foo: boolean;
  bar?: bigint;
  baz: number | undefined;
};

{
  expectType<Invariant<FooBarBaz1>>(seal({} as FooBarBaz1));
  expectNotAssignable<Invariant<FooBarBaz1>>({} as FooBarBaz1);

  expectNotAssignable<Invariant<FooBar>>(seal({} as FooBarBaz1));
  expectNotAssignable<Invariant<FooBarBaz1>>(seal({} as FooBar));

  expectAssignable<Invariant<FooBarBaz1>>(seal({} as FooBarBaz2));

  expectNotAssignable<Invariant<FooBarBaz2>>(seal({} as DiffFooBarBaz));
}
