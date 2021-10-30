import {expectAssignable, expectNotAssignable, expectNotType} from 'tsd';

import type {AlternativeFunction} from '../types/alternative-function.js';
import type {AlternativeObject} from '../types/alternative-object.js';

interface Functions {
  arg0: () => any;
  arg1: (arg: any) => any;
  arg2: (arg1: any, arg2: any) => any;
}

declare const alternativeFunctionValue: AlternativeFunction;
declare const functionValue: Function;
declare const alternativeObjectValue: AlternativeObject;
declare const objectValue: object;

declare const arg0Function: Functions['arg0'];
declare const arg1Function: Functions['arg1'];
declare const arg2Function: Functions['arg2'];

/** Equality of Default and Alternative */
expectNotType<Function>(alternativeFunctionValue);
expectNotType<AlternativeFunction>(functionValue);

/** Assignability of Default and Alternative */
expectAssignable<object>(functionValue);
expectAssignable<object>(alternativeFunctionValue);

expectNotAssignable<AlternativeObject>(functionValue);
expectNotAssignable<AlternativeObject>(alternativeFunctionValue);

expectNotAssignable<Function>(objectValue);
expectNotAssignable<Function>(alternativeObjectValue);

expectAssignable<Function>(alternativeFunctionValue);

expectNotAssignable<AlternativeFunction>(objectValue);
expectNotAssignable<AlternativeFunction>(alternativeObjectValue);
expectNotAssignable<AlternativeFunction>(functionValue);

/** Assignability of Functions */
expectAssignable<Function>(functionValue);
expectNotAssignable<Functions['arg0']>(functionValue);
expectNotAssignable<Functions['arg1']>(functionValue);
expectNotAssignable<Functions['arg2']>(functionValue);
expectNotAssignable<AlternativeFunction>(functionValue);

expectAssignable<Function>(arg0Function);
expectAssignable<Functions['arg0']>(arg0Function);
expectAssignable<Functions['arg1']>(arg0Function);
expectAssignable<Functions['arg2']>(arg0Function);
expectAssignable<AlternativeFunction>(arg0Function);

expectAssignable<Function>(arg1Function);
expectNotAssignable<Functions['arg0']>(arg1Function);
expectAssignable<Functions['arg1']>(arg1Function);
expectAssignable<Functions['arg2']>(arg1Function);
expectAssignable<AlternativeFunction>(arg1Function);

expectAssignable<Function>(arg2Function);
expectNotAssignable<Functions['arg0']>(arg2Function);
expectNotAssignable<Functions['arg1']>(arg2Function);
expectAssignable<Functions['arg2']>(arg2Function);
expectAssignable<AlternativeFunction>(arg2Function);

expectAssignable<Function>(alternativeFunctionValue);
expectAssignable<Functions['arg0']>(alternativeFunctionValue);
expectAssignable<Functions['arg1']>(alternativeFunctionValue);
expectAssignable<Functions['arg2']>(alternativeFunctionValue);
expectAssignable<AlternativeFunction>(alternativeFunctionValue);
