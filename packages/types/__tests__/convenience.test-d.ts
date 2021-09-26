import {expectAssignable, expectNotAssignable} from 'tsd';

import type * as Alt from '../src/alternative';
import type {Dict} from '../src/convenience';

/**
 * Assignability
 */
{
  expectNotAssignable<Dict>({} as object);
  expectNotAssignable<Dict>((() => undefined) as Function);
  expectAssignable<Dict>({} as Alt.Object);
  expectNotAssignable<Dict>((() => undefined) as Alt.Function);

  expectAssignable<object>({} as Dict<string>);
  expectAssignable<object>({} as Dict<number>);
  expectAssignable<object>({} as Dict<bigint>);
  expectAssignable<object>({} as Dict<boolean>);
  expectAssignable<object>({} as Dict<symbol>);
  expectAssignable<object>({} as Dict<undefined>);
  expectAssignable<object>({} as Dict<null>);
  expectAssignable<object>({} as Dict<object>);
  expectAssignable<object>({} as Dict<Function>);
  expectAssignable<object>({} as Dict<Array<any>>);

  expectAssignable<Alt.Object>({} as Dict<string>);
  expectAssignable<Alt.Object>({} as Dict<number>);
  expectAssignable<Alt.Object>({} as Dict<bigint>);
  expectAssignable<Alt.Object>({} as Dict<boolean>);
  expectAssignable<Alt.Object>({} as Dict<symbol>);
  expectAssignable<Alt.Object>({} as Dict<undefined>);
  expectAssignable<Alt.Object>({} as Dict<null>);
  expectAssignable<Alt.Object>({} as Dict<object>);
  expectAssignable<Alt.Object>({} as Dict<Function>);
  expectAssignable<Alt.Object>({} as Dict<Array<any>>);
}
