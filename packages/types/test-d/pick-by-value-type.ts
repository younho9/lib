import {expectType} from 'tsd';

import type {PickByValueType} from '../types/pick-by-value-type.js';

type SomeType = {
  foo: number;
  bar?: string;
  baz: number | undefined;
};

declare const pickUndefinedValuesObject: Pick<SomeType, 'bar' | 'baz'>;
declare const pickNumberValuesObject: Pick<SomeType, 'foo' | 'baz'>;
declare const pickStringValuesObject: Pick<SomeType, 'bar'>;

expectType<PickByValueType<SomeType, undefined>>(pickUndefinedValuesObject);
expectType<PickByValueType<SomeType, number>>(pickNumberValuesObject);
expectType<PickByValueType<SomeType, string>>(pickStringValuesObject);
