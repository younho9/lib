import {expectAssignable, expectNotAssignable, expectType} from 'tsd';

import type {UndefinedToOptional} from '../types/undefined-to-optional.js';

type SomeType = {
  foo: number;
  bar?: string;
  baz: number | undefined;
};

declare const object: UndefinedToOptional<SomeType>;

/** Undefined To Optional */
expectAssignable<UndefinedToOptional<SomeType>>({foo: 123});
expectNotAssignable<UndefinedToOptional<SomeType>>({bar: 'string', baz: 123});
expectAssignable<UndefinedToOptional<SomeType>>({foo: 123, bar: 'string', baz: 123}); // prettier-ignore

expectType<number>(object.foo);
expectType<string | undefined>(object.bar);
expectType<number | undefined>(object.baz);
