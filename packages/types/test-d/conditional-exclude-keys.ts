import {expectType} from 'tsd';

import type {ConditionalExcludeKeys} from '../types/conditional-exclude-keys.js';

type SomeType = {
  foo: number;
  bar?: string;
  baz: number | undefined;
};

declare const barOrBaz: 'bar' | 'baz';
declare const fooOrBaz: 'foo' | 'baz';
declare const bar: 'bar';

expectType<ConditionalExcludeKeys<SomeType, number>>(barOrBaz);
expectType<ConditionalExcludeKeys<SomeType, string | undefined>>(fooOrBaz);
expectType<ConditionalExcludeKeys<SomeType, number | undefined>>(bar);
