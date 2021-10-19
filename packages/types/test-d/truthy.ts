import {expectAssignable, expectNotAssignable} from 'tsd';

import type {Falsy} from '../types/falsy';
import type {Nullish} from '../types/nullish';
import type {Truthy} from '../types/truthy';

declare const valueAsBigint: bigint;
expectAssignable<Truthy>(valueAsBigint);

declare const valueAsBoolean: boolean;
expectNotAssignable<Truthy>(valueAsBoolean);

declare const valueAsNumber: number;
expectAssignable<Truthy>(valueAsNumber);

declare const valueAsString: string;
expectAssignable<Truthy>(valueAsString);

declare const valueAsSymbol: symbol;
expectAssignable<Truthy>(valueAsSymbol);

declare const valueAsObject: object;
expectAssignable<Truthy>(valueAsObject);

declare const valueAsFunction: Function;
expectAssignable<Truthy>(valueAsFunction);

declare const valueAsArray: Array<any>;
expectAssignable<Truthy>(valueAsArray);

declare const valueAsFalsy: Falsy;
expectNotAssignable<Truthy>(valueAsFalsy);

declare const valueAsTruthy: Truthy;
expectAssignable<Truthy>(valueAsTruthy);

declare const valueAsNullish: Nullish;
expectNotAssignable<Truthy>(valueAsNullish);

expectNotAssignable<Truthy>(false);
expectNotAssignable<Truthy>(null);
expectNotAssignable<Truthy>(undefined);

/** Limitation: Generic type parameter is required to infer truthiness of literal type of `number` | `string` | `bigint` */
expectAssignable<Truthy>(0);
expectAssignable<Truthy>(-0);
expectAssignable<Truthy>(0n);
expectAssignable<Truthy>('');

expectNotAssignable<Truthy<0>>(0);
expectNotAssignable<Truthy<-0>>(-0);
expectNotAssignable<Truthy<0n>>(0n);
expectNotAssignable<Truthy<''>>('');
