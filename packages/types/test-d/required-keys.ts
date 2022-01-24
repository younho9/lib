import {expectAssignable, expectType} from 'tsd';

import type {RequiredKeys} from '../types/required-keys.js';

type SomeType = {
	foo: number;
	bar?: string;
	baz: number | undefined;
};

declare const requiredKeysValue: 'foo' | 'baz';

expectType<RequiredKeys<SomeType>>(requiredKeysValue);
expectAssignable<RequiredKeys<SomeType>>('foo');
expectAssignable<RequiredKeys<SomeType>>('baz');
