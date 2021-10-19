import {expectAssignable, expectNotType} from 'tsd';

import type {AlternativeAny} from '../types/alternative-any';

declare const valueAsAny: any;
expectNotType<AlternativeAny>(valueAsAny);

declare const valueAsAlternativeAny: AlternativeAny;
expectNotType<any>(valueAsAlternativeAny);

declare const bigintValue: bigint;
expectAssignable<AlternativeAny>(bigintValue);

declare const booleanValue: boolean;
expectAssignable<AlternativeAny>(booleanValue);

declare const nullValue: null;
expectAssignable<AlternativeAny>(nullValue);

declare const numberValue: number;
expectAssignable<AlternativeAny>(numberValue);

declare const stringValue: string;
expectAssignable<AlternativeAny>(stringValue);

declare const symbolValue: symbol;
expectAssignable<AlternativeAny>(symbolValue);

declare const undefinedValue: undefined;
expectAssignable<AlternativeAny>(undefinedValue);

declare const objectValue: object;
expectAssignable<AlternativeAny>(objectValue);

declare const functionValue: Function;
expectAssignable<AlternativeAny>(functionValue);

declare const arrayValue: Array<any>;
expectAssignable<AlternativeAny>(arrayValue);
