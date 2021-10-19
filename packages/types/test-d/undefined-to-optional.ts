import {expectAssignable, expectNotAssignable, expectType} from 'tsd';

import type {UndefinedToOptional} from '../types/undefined-to-optional';

type SomeType = {
  foo: number;
  bar?: string;
  baz: number | undefined;
};

declare const obj: UndefinedToOptional<SomeType>;

/** Undefined To Optional */
expectAssignable<UndefinedToOptional<SomeType>>({foo: 123});
expectNotAssignable<UndefinedToOptional<SomeType>>({bar: 'string', baz: 123});
expectAssignable<UndefinedToOptional<SomeType>>({foo: 123, bar: 'string', baz: 123}); // prettier-ignore

expectType<number>(obj.foo);
expectType<string | undefined>(obj.bar);
expectType<number | undefined>(obj.baz);
