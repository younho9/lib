import {expectAssignable, expectNotAssignable, expectNotType} from 'tsd';

import type {AnyFunction} from '../types/any-function.js';

declare const functionValue: Function;
declare const anyFunctionValue: AnyFunction;
declare const anyReturnStringFunctionValue: AnyFunction<string>;

expectNotType<Function>(anyFunctionValue);
expectNotType<AnyFunction>(functionValue);

expectAssignable<Function>(anyFunctionValue);
expectNotAssignable<AnyFunction>(functionValue);

expectAssignable<AnyFunction>(anyReturnStringFunctionValue);
expectAssignable<AnyFunction<string>>(anyFunctionValue);
