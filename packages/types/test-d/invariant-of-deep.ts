import {expectType} from 'tsd';

import type {InvariantOfDeep} from '../types/invariant-of-deep.js';
import type {InvariantOf} from '../types/invariant-of.js';

type BaseType = {
	foo: number;
	bar?: string;
};

type DeepBaseType = {
	foo: number;
	bar?: BaseType;
};

declare const invariantOfDeepBaseType: InvariantOfDeep<DeepBaseType>;

expectType<
	InvariantOf<{
		foo: InvariantOf<number>;
		bar?: InvariantOf<{
			foo: InvariantOf<number>;
			bar?: InvariantOf<string>;
		}>;
	}>
>(invariantOfDeepBaseType);
expectType<InvariantOf<number>>(invariantOfDeepBaseType.foo);
expectType<InvariantOfDeep<BaseType> | undefined>(invariantOfDeepBaseType.bar);
expectType<InvariantOf<string> | undefined>(invariantOfDeepBaseType.bar?.bar);
expectType<InvariantOf<number> | undefined>(invariantOfDeepBaseType.bar?.foo);
