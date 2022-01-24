import {expectType} from 'tsd';

import type {StringKeyOf} from '../types/string-key-of.js';

type SomeType = {
	foo: number;
	bar?: string;
	baz: number | undefined;
};

declare const fooArray: Array<'foo'>;
expectType<StringKeyOf<{foo: number}>>(fooArray);

declare const fooOrBarOrBazArray: Array<'foo' | 'bar' | 'baz'>;
expectType<StringKeyOf<SomeType>>(fooOrBarOrBazArray);

declare const string123Array: Array<'1' | '2' | '3'>;
expectType<StringKeyOf<{1: 'one'; 2: 'two'; 3: 'three'}>>(string123Array);

declare const neverArray: never[];
expectType<StringKeyOf<Record<symbol, unknown>>>(neverArray);

declare const string1OrTwoArray: Array<'1' | 'two'>;
expectType<StringKeyOf<{[symbolKey: symbol]: 'three'; 1: 'one'; two: 'two'}>>(
	string1OrTwoArray,
);
