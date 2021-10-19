import {expectType} from 'tsd';

import type {ExtractKeysByValueType} from '../types/extract-keys-by-value-type';

type SomeType = {
  foo: number;
  bar?: string;
  baz: number | undefined;
};

declare const barOrBaz: 'bar' | 'baz';
declare const fooOrBaz: 'foo' | 'baz';
declare const bar: 'bar';

expectType<ExtractKeysByValueType<SomeType, undefined>>(barOrBaz);
expectType<ExtractKeysByValueType<SomeType, number>>(fooOrBaz);
expectType<ExtractKeysByValueType<SomeType, string>>(bar);
