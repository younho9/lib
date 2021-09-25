/* eslint-disable @typescript-eslint/ban-types */
import {
  expectAssignable,
  expectError,
  expectNotAssignable,
  expectNotType,
  expectType,
} from 'tsd';

import type * as Alt from '../src/alternative';

import {alt, def, Functions, functions, Records, records} from './constants';

interface IABC {
  a: string;
  b: number;
  c: boolean;
}

type ABCType = {
  a: string;
  b: number;
  c: boolean;
};

const abc = {a: '123', b: 123, c: false};
const literalValue: {a: string; b: number; c: boolean} = abc;
const interfaceValue: IABC = abc;
const typeValue: ABCType = abc;
const recordValue: Record<string, unknown> = abc;

/**
 * {} vs object vs Object vs Record<string, unknown> vs Record<PropertyKey, unknown>
 */
{
  expectAssignable<{}>({});
  expectAssignable<object>({});
  expectAssignable<Object>({});
  expectAssignable<Record<string, unknown>>({});
  expectAssignable<Record<PropertyKey, unknown>>({});

  expectAssignable<{}>([]);
  expectAssignable<object>([]);
  expectAssignable<Object>([]);
  expectNotAssignable<Record<string, unknown>>([]);
  expectNotAssignable<Record<PropertyKey, unknown>>([]);

  expectAssignable<{}>(() => undefined);
  expectAssignable<object>(() => undefined);
  expectAssignable<Object>(() => undefined);
  expectNotAssignable<Record<string, unknown>>(() => undefined);
  expectNotAssignable<Record<PropertyKey, unknown>>(() => undefined);

  expectAssignable<{}>(new String(''));
  expectAssignable<{}>(new Number(1));
  expectAssignable<{}>(new Boolean(false));
  expectAssignable<object>(new String(''));
  expectAssignable<object>(new Number(1));
  expectAssignable<object>(new Boolean(false));
  expectAssignable<Object>(new String(''));
  expectAssignable<Object>(new Number(1));
  expectAssignable<Object>(new Boolean(false));
  expectNotAssignable<Record<string, unknown>>(new String(''));
  expectNotAssignable<Record<string, unknown>>(new Number(1));
  expectNotAssignable<Record<string, unknown>>(new Boolean(false));
  expectNotAssignable<Record<PropertyKey, unknown>>(new String(''));
  expectNotAssignable<Record<PropertyKey, unknown>>(new Number(1));
  expectNotAssignable<Record<PropertyKey, unknown>>(new Boolean(false));

  expectAssignable<{}>('a');
  expectNotAssignable<object>('a');
  expectAssignable<Object>('a');
  expectNotAssignable<Record<string, unknown>>('a');
  expectNotAssignable<Record<PropertyKey, unknown>>('a');

  expectAssignable<{}>(1);
  expectNotAssignable<object>(1);
  expectAssignable<Object>(1);
  expectNotAssignable<Record<string, unknown>>(1);
  expectNotAssignable<Record<PropertyKey, unknown>>(1);

  expectAssignable<{}>(Symbol('symbol'));
  expectNotAssignable<object>(Symbol('symbol'));
  expectAssignable<Object>(Symbol('symbol'));
  expectNotAssignable<Record<string, unknown>>(Symbol('symbol'));
  expectNotAssignable<Record<PropertyKey, unknown>>(Symbol('symbol'));

  expectNotAssignable<{}>(null);
  expectNotAssignable<object>(null);
  expectNotAssignable<Object>(null);
  expectNotAssignable<Record<string, unknown>>(null);
  expectNotAssignable<Record<PropertyKey, unknown>>(null);

  expectNotAssignable<{}>(undefined);
  expectNotAssignable<object>(undefined);
  expectNotAssignable<Object>(undefined);
  expectNotAssignable<Record<string, unknown>>(undefined);
  expectNotAssignable<Record<PropertyKey, unknown>>(undefined);

  expectAssignable<{}>(literalValue);
  expectAssignable<object>(literalValue);
  expectAssignable<Object>(literalValue);
  expectAssignable<Record<string, unknown>>(literalValue);
  expectAssignable<Record<PropertyKey, unknown>>(literalValue);

  expectAssignable<{}>(interfaceValue);
  expectAssignable<object>(interfaceValue);
  expectAssignable<Object>(interfaceValue);
  /** @see https://github.com/microsoft/TypeScript/issues/15300 */
  expectNotAssignable<Record<string, unknown>>(interfaceValue);
  expectNotAssignable<Record<PropertyKey, unknown>>(interfaceValue);

  expectAssignable<{}>(typeValue);
  expectAssignable<object>(typeValue);
  expectAssignable<Object>(typeValue);
  expectAssignable<Record<string, unknown>>(typeValue);
  expectAssignable<Record<PropertyKey, unknown>>(typeValue);

  expectAssignable<{}>(recordValue);
  expectAssignable<object>(recordValue);
  expectAssignable<Object>(recordValue);
  expectAssignable<Record<string, unknown>>(recordValue);
  expectAssignable<Record<PropertyKey, unknown>>(recordValue);

  /**
   * `{}` | `object` | `Object` is hard to use due to not being able to assert that keys exist
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-types.md
   */
  expectError((abc as {}).a);
  expectError((abc as object).a);
  expectError((abc as Object).a);
  expectType<unknown>((abc as Record<string, unknown>).a);
  expectType<unknown>((abc as Record<PropertyKey, unknown>).a);
}

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
