import {
  expectAssignable,
  expectNotAssignable,
  expectNotType,
  expectType,
} from 'tsd';

import type * as Alt from '../src/alternative';

import {alt, def, Functions, functions, Records, records} from './constants';

/**
 * Equality of Default and Alternative
 */
{
  expectType<object>(def.object);
  expectNotType<object>(alt.object);

  expectType<Function>(def.function);
  expectNotType<Function>(alt.function);

  expectType<Alt.Object>(alt.object);
  expectNotType<Alt.Object>(def.object);

  expectType<Alt.Function>(alt.function);
  expectNotType<Alt.Function>(def.function);
}

/**
 * Assignability of Default and Alternative
 */
{
  expectAssignable<object>(def.object);
  expectAssignable<object>(alt.object);
  expectAssignable<object>(def.function);
  expectAssignable<object>(alt.function);

  expectNotAssignable<Alt.Object>(def.object);
  expectAssignable<Alt.Object>(alt.object);
  expectNotAssignable<Alt.Object>(def.function);
  expectNotAssignable<Alt.Object>(alt.function);

  expectNotAssignable<Function>(def.object);
  expectNotAssignable<Function>(alt.object);
  expectAssignable<Function>(def.function);
  expectAssignable<Function>(alt.function);

  expectNotAssignable<Alt.Function>(def.object);
  expectNotAssignable<Alt.Function>(alt.object);
  expectNotAssignable<Alt.Function>(def.function);
  expectAssignable<Alt.Function>(alt.function);
}

/**
 * Equality of Record and Object
 */
{
  expectNotType<object>(records.string);
  expectNotType<object>(records.number);
  expectNotType<object>(records.symbol);
  expectNotType<object>(records.strnum);
  expectNotType<object>(records.strsym);
  expectNotType<object>(records.numsym);
  expectNotType<object>(records.all);

  expectType<Alt.Object>(records.string);
  expectNotType<Alt.Object>(records.number);
  expectNotType<Alt.Object>(records.symbol);
  expectNotType<Alt.Object>(records.strnum);
  expectNotType<Alt.Object>(records.strsym);
  expectNotType<Alt.Object>(records.numsym);
  expectNotType<Alt.Object>(records.all);
}

/**
 * Assignability of Object to Record
 */
{
  expectNotAssignable<Records['string']>(def.object);
  expectNotAssignable<Records['number']>(def.object);
  expectNotAssignable<Records['symbol']>(def.object);
  expectNotAssignable<Records['strnum']>(def.object);
  expectNotAssignable<Records['strsym']>(def.object);
  expectNotAssignable<Records['numsym']>(def.object);
  expectNotAssignable<Records['all']>(def.object);

  expectAssignable<Records['string']>(alt.object);
  expectAssignable<Records['number']>(alt.object);
  expectAssignable<Records['symbol']>(alt.object);
  expectAssignable<Records['strnum']>(alt.object);
  expectAssignable<Records['strsym']>(alt.object);
  expectAssignable<Records['numsym']>(alt.object);
  expectAssignable<Records['all']>(alt.object);
}

/**
 * Assignability of Record to Object
 */
{
  expectAssignable<object>(records.string);
  expectAssignable<object>(records.number);
  expectAssignable<object>(records.symbol);
  expectAssignable<object>(records.strnum);
  expectAssignable<object>(records.strsym);
  expectAssignable<object>(records.numsym);
  expectAssignable<object>(records.all);

  expectAssignable<Alt.Object>(records.string);
  expectAssignable<Alt.Object>(records.number);
  expectAssignable<Alt.Object>(records.symbol);
  expectAssignable<Alt.Object>(records.strnum);
  expectAssignable<Alt.Object>(records.strsym);
  expectAssignable<Alt.Object>(records.numsym);
  expectAssignable<Alt.Object>(records.all);
}

/**
 * Assignability of Functions
 */
{
  expectAssignable<Function>(def.function);
  expectAssignable<Function>(functions.arg0);
  expectAssignable<Function>(functions.arg1);
  expectAssignable<Function>(functions.arg2);
  expectAssignable<Function>(functions.args);

  expectNotAssignable<Functions['arg0']>(def.function);
  expectNotAssignable<Functions['arg1']>(def.function);
  expectNotAssignable<Functions['arg2']>(def.function);
  expectNotAssignable<Functions['args']>(def.function);

  expectNotAssignable<Alt.Function>(def.function);
  expectAssignable<Alt.Function>(functions.arg0);
  expectAssignable<Alt.Function>(functions.arg1);
  expectAssignable<Alt.Function>(functions.arg2);
  expectAssignable<Alt.Function>(functions.args);

  expectAssignable<Functions['arg0']>(alt.function);
  expectAssignable<Functions['arg1']>(alt.function);
  expectAssignable<Functions['arg2']>(alt.function);
  expectAssignable<Functions['args']>(alt.function);
}
