/* eslint-disable @typescript-eslint/ban-types */
import {
  expectAssignable,
  expectError,
  expectNotAssignable,
  expectNotType,
  expectType,
} from 'tsd';

import type * as Alt from '../src/alternative';

interface Functions {
  arg0: () => any;
  arg1: (arg: any) => any;
  arg2: (arg1: any, arg2: any) => any;
}

interface IABC {
  a: string;
  b: number;
  c: boolean;
}

type ABC = {
  a: string;
  b: number;
  c: boolean;
};

const abc = {a: '123', b: 123, c: false};

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

  expectAssignable<{}>(abc as {a: string; b: number; c: boolean});
  expectAssignable<object>(abc as {a: string; b: number; c: boolean});
  expectAssignable<Object>(abc as {a: string; b: number; c: boolean});
  expectAssignable<Record<string, unknown>>(abc as {a: string; b: number; c: boolean}); // prettier-ignore
  expectAssignable<Record<PropertyKey, unknown>>(abc as {a: string; b: number; c: boolean}); // prettier-ignore

  expectAssignable<{}>(abc as IABC);
  expectAssignable<object>(abc as IABC);
  expectAssignable<Object>(abc as IABC);
  /** @see https://github.com/microsoft/TypeScript/issues/15300 */
  expectNotAssignable<Record<string, unknown>>(abc as IABC);
  expectNotAssignable<Record<PropertyKey, unknown>>(abc as IABC);

  expectAssignable<{}>(abc as ABC);
  expectAssignable<object>(abc as ABC);
  expectAssignable<Object>(abc as ABC);
  expectAssignable<Record<string, unknown>>(abc as ABC);
  expectAssignable<Record<PropertyKey, unknown>>(abc as ABC);

  expectAssignable<{}>(abc as Record<string, unknown>);
  expectAssignable<object>(abc as Record<string, unknown>);
  expectAssignable<Object>(abc as Record<string, unknown>);
  expectAssignable<Record<string, unknown>>(abc as Record<string, unknown>);
  expectAssignable<Record<PropertyKey, unknown>>(abc as Record<string, unknown>); // prettier-ignore

  /**
   * `{}` | `object` | `Object` is hard to use due to not being able to assert that keys exist
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-types.md#default-options
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
  expectType<object>({} as object);
  expectNotType<object>({} as Alt.Object);

  expectType<Function>((() => undefined) as Function);
  expectNotType<Function>((() => undefined) as Alt.Function);

  expectType<Alt.Object>({} as Alt.Object);
  expectNotType<Alt.Object>({} as object);

  expectType<Alt.Function>((() => undefined) as Alt.Function);
  expectNotType<Alt.Function>((() => undefined) as Function);
}

/**
 * Assignability of Default and Alternative
 */
{
  expectAssignable<object>({} as object);
  expectAssignable<object>({} as Alt.Object);
  expectAssignable<object>((() => undefined) as Function);
  expectAssignable<object>((() => undefined) as Alt.Function);

  expectNotAssignable<Alt.Object>({} as object);
  expectAssignable<Alt.Object>({} as Alt.Object);
  expectNotAssignable<Alt.Object>((() => undefined) as Function);
  expectNotAssignable<Alt.Object>((() => undefined) as Alt.Function);

  expectNotAssignable<Function>({} as object);
  expectNotAssignable<Function>({} as Alt.Object);
  expectAssignable<Function>((() => undefined) as Function);
  expectAssignable<Function>((() => undefined) as Alt.Function);

  expectNotAssignable<Alt.Function>({} as object);
  expectNotAssignable<Alt.Function>({} as Alt.Object);
  expectNotAssignable<Alt.Function>((() => undefined) as Function);
  expectAssignable<Alt.Function>((() => undefined) as Alt.Function);
}

/**
 * Equality of Record and Object
 */
{
  expectNotType<object>({} as Record<string, unknown>);
  expectNotType<object>({} as Record<number, unknown>);
  expectNotType<object>({} as Record<symbol, unknown>);
  expectNotType<object>({} as Record<string | number, unknown>);
  expectNotType<object>({} as Record<string | symbol, unknown>);
  expectNotType<object>({} as Record<number | symbol, unknown>);
  expectNotType<object>({} as Record<string | number | symbol, unknown>);

  expectType<Alt.Object>({} as Record<string, unknown>);
  expectNotType<Alt.Object>({} as Record<number, unknown>);
  expectNotType<Alt.Object>({} as Record<symbol, unknown>);
  expectNotType<Alt.Object>({} as Record<string | number, unknown>);
  expectNotType<Alt.Object>({} as Record<string | symbol, unknown>);
  expectNotType<Alt.Object>({} as Record<number | symbol, unknown>);
  expectNotType<Alt.Object>({} as Record<string | number | symbol, unknown>);
}

/**
 * Assignability of Object to Record
 */
{
  expectNotAssignable<Record<string, unknown>>({} as object);
  expectNotAssignable<Record<number, unknown>>({} as object);
  expectNotAssignable<Record<symbol, unknown>>({} as object);
  expectNotAssignable<Record<string | number, unknown>>({} as object);
  expectNotAssignable<Record<string | symbol, unknown>>({} as object);
  expectNotAssignable<Record<number | symbol, unknown>>({} as object);
  expectNotAssignable<Record<string | number | symbol, unknown>>({} as object);

  expectAssignable<Record<string, unknown>>({} as Alt.Object);
  expectAssignable<Record<number, unknown>>({} as Alt.Object);
  expectAssignable<Record<symbol, unknown>>({} as Alt.Object);
  expectAssignable<Record<string | number, unknown>>({} as Alt.Object);
  expectAssignable<Record<string | symbol, unknown>>({} as Alt.Object);
  expectAssignable<Record<number | symbol, unknown>>({} as Alt.Object);
  expectAssignable<Record<string | number | symbol, unknown>>({} as Alt.Object);
}

/**
 * Assignability of Record to Object
 */
{
  expectAssignable<object>({} as Record<string, unknown>);
  expectAssignable<object>({} as Record<number, unknown>);
  expectAssignable<object>({} as Record<symbol, unknown>);
  expectAssignable<object>({} as Record<string | number, unknown>);
  expectAssignable<object>({} as Record<string | symbol, unknown>);
  expectAssignable<object>({} as Record<number | symbol, unknown>);
  expectAssignable<object>({} as Record<string | number | symbol, unknown>);

  expectAssignable<Alt.Object>({} as Record<string, unknown>);
  expectAssignable<Alt.Object>({} as Record<number, unknown>);
  expectAssignable<Alt.Object>({} as Record<symbol, unknown>);
  expectAssignable<Alt.Object>({} as Record<string | number, unknown>);
  expectAssignable<Alt.Object>({} as Record<string | symbol, unknown>);
  expectAssignable<Alt.Object>({} as Record<number | symbol, unknown>);
  expectAssignable<Alt.Object>({} as Record<string | number | symbol, unknown>);
}

/**
 * Assignability of Functions
 */
{
  expectAssignable<Function>((() => undefined) as Function);
  expectNotAssignable<Functions['arg0']>((() => undefined) as Function);
  expectNotAssignable<Functions['arg1']>((() => undefined) as Function);
  expectNotAssignable<Functions['arg2']>((() => undefined) as Function);
  expectNotAssignable<Alt.Function>((() => undefined) as Function);

  expectAssignable<Function>((() => undefined) as () => any);
  expectAssignable<Functions['arg0']>((() => undefined) as () => any);
  expectAssignable<Functions['arg1']>((() => undefined) as () => any);
  expectAssignable<Functions['arg2']>((() => undefined) as () => any);
  expectAssignable<Alt.Function>((() => undefined) as () => any);

  expectAssignable<Function>((() => undefined) as (arg: any) => any);
  expectNotAssignable<Functions['arg0']>((() => undefined) as (arg: any) => any); // prettier-ignore
  expectAssignable<Functions['arg1']>((() => undefined) as (arg: any) => any);
  expectAssignable<Functions['arg2']>((() => undefined) as (arg: any) => any);
  expectAssignable<Alt.Function>((() => undefined) as (arg: any) => any);

  expectAssignable<Function>((() => undefined) as (arg1: any, arg2: any) => any); // prettier-ignore
  expectNotAssignable<Functions['arg0']>((() => undefined) as (arg1: any, arg2: any) => any); // prettier-ignore
  expectNotAssignable<Functions['arg1']>((() => undefined) as (arg1: any, arg2: any) => any); // prettier-ignore
  expectAssignable<Functions['arg2']>((() => undefined) as (arg1: any, arg2: any) => any); // prettier-ignore
  expectAssignable<Alt.Function>((() => undefined) as (arg1: any, arg2: any) => any); // prettier-ignore

  expectAssignable<Function>((() => undefined) as Alt.Function);
  expectAssignable<Functions['arg0']>((() => undefined) as Alt.Function);
  expectAssignable<Functions['arg1']>((() => undefined) as Alt.Function);
  expectAssignable<Functions['arg2']>((() => undefined) as Alt.Function);
  expectAssignable<Alt.Function>((() => undefined) as Alt.Function);
}
