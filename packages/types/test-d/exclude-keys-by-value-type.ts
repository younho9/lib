import {expectType} from 'tsd';

import type {ExcludeKeysByValueType} from '../types/exclude-keys-by-value-type.js';

type SomeType = {
  foo: number;
  bar?: string;
  baz: number | undefined;
};

declare const foo: 'foo';
declare const bar: 'bar';
declare const fooOrBaz: 'foo' | 'baz';

expectType<ExcludeKeysByValueType<SomeType, undefined>>(foo);
expectType<ExcludeKeysByValueType<SomeType, number>>(bar);
expectType<ExcludeKeysByValueType<SomeType, string>>(fooOrBaz);
