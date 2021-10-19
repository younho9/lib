import {expectAssignable, expectNotAssignable} from 'tsd';

import type {Falsy} from '../types/falsy';
import type {Nullish} from '../types/nullish';
import type {Truthy} from '../types/truthy';

declare const valueAsBigint: bigint;
expectNotAssignable<Nullish>(valueAsBigint);

declare const valueAsBoolean: boolean;
expectNotAssignable<Nullish>(valueAsBoolean);

declare const valueAsNumber: number;
expectNotAssignable<Nullish>(valueAsNumber);

declare const valueAsString: string;
expectNotAssignable<Nullish>(valueAsString);

declare const valueAsSymbol: symbol;
expectNotAssignable<Nullish>(valueAsSymbol);

declare const valueAsObject: object;
expectNotAssignable<Nullish>(valueAsObject);

declare const valueAsFunction: Function;
expectNotAssignable<Nullish>(valueAsFunction);

declare const valueAsArray: Array<any>;
expectNotAssignable<Nullish>(valueAsArray);

declare const valueAsFalsy: Falsy;
expectNotAssignable<Nullish>(valueAsFalsy);

declare const valueAsTruthy: Truthy;
expectNotAssignable<Nullish>(valueAsTruthy);

declare const valueAsNullish: Nullish;
expectAssignable<Nullish>(valueAsNullish);

expectNotAssignable<Nullish>(false);
expectNotAssignable<Nullish>(0);
expectNotAssignable<Nullish>(-0);
expectNotAssignable<Nullish>(0n);
expectNotAssignable<Nullish>('');
expectAssignable<Nullish>(null);
expectAssignable<Nullish>(undefined);
