import {expectAssignable, expectNotAssignable} from 'tsd';

import type {ToString} from '../types/to-string';

expectAssignable<ToString<number>>('1');
expectAssignable<ToString<boolean>>('false');
expectAssignable<ToString<string>>('string');
expectNotAssignable<ToString<bigint>>('0n');
expectNotAssignable<ToString<symbol>>('Symbol()');
expectNotAssignable<ToString<object>>('{}');
