import {expectAssignable, expectNotAssignable, expectType} from 'tsd';

import type {Completed} from '../types/completed.js';

type SomeType = {
  foo: number;
  bar?: string;
  baz: number | undefined;
};

declare const completedSomeTypeValue: {
  foo: number;
  bar: string | undefined;
  baz: number | undefined;
};
declare const requiredSomeTypeValue: {
  foo: number;
  bar: string;
  baz: number | undefined;
};

expectType<Completed<SomeType>>(completedSomeTypeValue);
expectNotAssignable<Completed<SomeType>>({
  foo: 123,
  baz: undefined,
});

/** Completed vs Required */
expectType<Required<SomeType>>(requiredSomeTypeValue);
expectAssignable<Completed<SomeType>>({
  foo: 123,
  bar: undefined,
  baz: undefined,
});
expectNotAssignable<Required<SomeType>>({
  foo: 123,
  bar: undefined,
  baz: undefined,
});
