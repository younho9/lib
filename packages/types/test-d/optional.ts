import {expectType} from 'tsd';

import type {Optional} from '../types/optional.js';

type SomeType = {
	foo: number;
	bar?: string;
	baz: number | undefined;
};

declare const partialValue: Partial<SomeType>;
declare const optionalValue: Optional<SomeType>;

expectType<Optional<SomeType>>(partialValue);
expectType<Partial<SomeType>>(optionalValue);
