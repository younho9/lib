import {expectType} from 'tsd';

import type {StringKeyOf} from '../types/string-key-of';

type SomeType = {
  foo: number;
  bar?: string;
  baz: number | undefined;
};

declare const fooArray: 'foo'[];
expectType<StringKeyOf<{foo: number}>>(fooArray);

declare const fooOrBarOrBazArray: ('foo' | 'bar' | 'baz')[];
expectType<StringKeyOf<SomeType>>(fooOrBarOrBazArray);

declare const string123Array: ('1' | '2' | '3')[];
expectType<StringKeyOf<{1: 'one'; 2: 'two'; 3: 'three'}>>(string123Array);

declare const neverArray: never[];
expectType<StringKeyOf<{[K: symbol]: unknown}>>(neverArray);

declare const string1OrTwoArray: ('1' | 'two')[];
expectType<StringKeyOf<{1: 'one'; two: 'two'; [K: symbol]: 'three'}>>(
  string1OrTwoArray,
);
