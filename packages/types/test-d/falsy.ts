import {expectAssignable, expectNotAssignable} from 'tsd';

import type {Falsy} from '../types/falsy.js';
import type {Nullish} from '../types/nullish.js';
import type {Truthy} from '../types/truthy.js';

declare const valueAsBigint: bigint;
expectNotAssignable<Falsy>(valueAsBigint);

declare const valueAsBoolean: boolean;
expectNotAssignable<Falsy>(valueAsBoolean);

declare const valueAsNumber: number;
expectNotAssignable<Falsy>(valueAsNumber);

declare const valueAsString: string;
expectNotAssignable<Falsy>(valueAsString);

declare const valueAsSymbol: symbol;
expectNotAssignable<Falsy>(valueAsSymbol);

declare const valueAsObject: object;
expectNotAssignable<Falsy>(valueAsObject);

declare const valueAsFunction: Function;
expectNotAssignable<Falsy>(valueAsFunction);

declare const valueAsArray: any[];
expectNotAssignable<Falsy>(valueAsArray);

declare const valueAsFalsy: Falsy;
expectAssignable<Falsy>(valueAsFalsy);

declare const valueAsTruthy: Truthy;
expectNotAssignable<Falsy>(valueAsTruthy);

declare const valueAsNullish: Nullish;
expectAssignable<Falsy>(valueAsNullish);

expectAssignable<Falsy>(false);
expectAssignable<Falsy>(0);
expectAssignable<Falsy>(-0);
expectAssignable<Falsy>(0n);
expectAssignable<Falsy>('');
expectAssignable<Falsy>(null);
expectAssignable<Falsy>(undefined);
