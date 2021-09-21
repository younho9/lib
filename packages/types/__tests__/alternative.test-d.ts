/* eslint-disable @typescript-eslint/ban-types */
import type {IsExact} from 'conditional-type-checks';
import {assert} from 'conditional-type-checks';
import {expectAssignable, expectNotAssignable} from 'tsd';

import type * as Alt from '../src/alternative';

import {alt, def, functions, Records, records} from './constants';

/**
 * Assignability
 */
{
  expectAssignable<object>(def.object);
  expectAssignable<object>(def.function);
  expectAssignable<Alt.Object>(alt.object);
  expectNotAssignable<Alt.Object>(alt.function);

  expectAssignable<object>(alt.object);
  expectAssignable<object>(alt.function);
  expectNotAssignable<Alt.Object>(def.object);
  expectNotAssignable<Alt.Object>(def.function);
}

/**
 * Object to Record
 */
{
  expectNotAssignable<Record<string, unknown>>(def.object);
  expectNotAssignable<Record<number, unknown>>(def.object);
  expectAssignable<Record<symbol, unknown>>(def.object); // not expected behavior
  expectNotAssignable<Record<string | number, unknown>>(def.object);
  expectNotAssignable<Record<string | symbol, unknown>>(def.object);
  expectNotAssignable<Record<number | symbol, unknown>>(def.object);
  expectNotAssignable<Record<string | number | symbol, unknown>>(def.object);

  expectAssignable<Record<string, unknown>>(alt.object);
  expectAssignable<Record<number, unknown>>(alt.object);
  expectAssignable<Record<symbol, unknown>>(alt.object);
  expectAssignable<Record<string | number, unknown>>(alt.object);
  expectAssignable<Record<string | symbol, unknown>>(alt.object);
  expectAssignable<Record<number | symbol, unknown>>(alt.object);
  expectAssignable<Record<string | number | symbol, unknown>>(alt.object);
}

/**
 * Record to Object
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
 * Equivalence Record and Object
 */
{
  assert<IsExact<object, Records['string']>>(false);
  assert<IsExact<object, Records['number']>>(false);
  assert<IsExact<object, Records['symbol']>>(true); // not expected behavior
  assert<IsExact<object, Records['strnum']>>(false);
  assert<IsExact<object, Records['strsym']>>(false);
  assert<IsExact<object, Records['numsym']>>(false);
  assert<IsExact<object, Records['all']>>(false);

  assert<IsExact<Alt.Object, Records['string']>>(true);
  assert<IsExact<Alt.Object, Records['number']>>(true);
  assert<IsExact<Alt.Object, Records['symbol']>>(true);
  assert<IsExact<Alt.Object, Records['strnum']>>(true);
  assert<IsExact<Alt.Object, Records['strsym']>>(true);
  assert<IsExact<Alt.Object, Records['numsym']>>(true);
  assert<IsExact<Alt.Object, Records['all']>>(true);
}

/**
 * Function
 */
{
  expectAssignable<Function>(def.function);
  expectAssignable<Function>(functions.arg0);
  expectAssignable<Function>(functions.arg1);
  expectAssignable<Function>(functions.arg2);
  expectAssignable<Function>(functions.args);

  expectNotAssignable<Alt.Function>(def.function);
  expectAssignable<Alt.Function>(functions.arg0);
  expectAssignable<Alt.Function>(functions.arg1);
  expectAssignable<Alt.Function>(functions.arg2);
  expectAssignable<Alt.Function>(functions.args);
}
