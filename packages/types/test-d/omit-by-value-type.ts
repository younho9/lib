import {expectType} from 'tsd';

import type {OmitByValueType} from '../types/omit-by-value-type';

type SomeType = {
  foo: number;
  bar?: string;
  baz: number | undefined;
};

declare const omitBarBaz: Omit<SomeType, 'bar' | 'baz'>;
declare const omitFooBaz: Omit<SomeType, 'foo' | 'baz'>;
declare const omitBar: Omit<SomeType, 'bar'>;

expectType<OmitByValueType<SomeType, undefined>>(omitBarBaz);
expectType<OmitByValueType<SomeType, number>>(omitFooBaz);
expectType<OmitByValueType<SomeType, string>>(omitBar);
