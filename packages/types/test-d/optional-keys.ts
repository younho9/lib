import {expectAssignable, expectType} from 'tsd';

import type {OptionalKeys} from '../types/optional-keys.js';

type SomeType = {
	foo: number;
	bar?: string;
	baz: number | undefined;
};

declare const optionalKeysValue: 'bar';

expectType<OptionalKeys<SomeType>>(optionalKeysValue);
expectAssignable<OptionalKeys<SomeType>>('bar');
