import {expectAssignable, expectNotAssignable, expectType} from 'tsd';

import type {OptionalToUndefined} from '../types/optional-to-undefined';

type SomeType = {
  foo: number;
  bar?: string;
  baz: number | undefined;
};

declare const optionalToUndefinedSomeTypeValue: {
  foo: number;
  bar: string | undefined;
  baz: number | undefined;
};
declare const requiredSomeTypeValue: {
  foo: number;
  bar: string;
  baz: number | undefined;
};

/** Optional To Undefined */
expectType<OptionalToUndefined<SomeType>>(optionalToUndefinedSomeTypeValue);

/** OptionalToUndefined vs Required */
expectType<Required<SomeType>>(requiredSomeTypeValue);
expectAssignable<OptionalToUndefined<SomeType>>(requiredSomeTypeValue);
expectNotAssignable<Required<SomeType>>(optionalToUndefinedSomeTypeValue);
