/* eslint-disable @typescript-eslint/ban-types */
import {expectAssignable, expectError, expectNotAssignable} from 'tsd';

import type * as Basic from '../src/basic';

/**
 * Primitive
 */
{
  /**
   * It test wrapper objects
   *
   * @see https://developer.mozilla.org/en-US/docs/Glossary/Primitive#primitive_wrapper_objects_in_javascript
   */
  {
    expectAssignable<String>('' as string);
    expectAssignable<Number>(0 as number);
    expectAssignable<BigInt>(0n as bigint);
    expectAssignable<Boolean>(false as boolean);
    expectAssignable<Symbol>(Symbol('symbol'));

    expectNotAssignable<string>(new String('' as string));
    expectNotAssignable<number>(new Number(0 as number));
    expectNotAssignable<boolean>(new Boolean(false as boolean));

    /**
     * Symbol does not support the syntax `new Symbol()`
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#constructor
     */
    expectAssignable<symbol>(Symbol('symbol'));
    expectError<symbol>(new Symbol());

    /**
     * BigInt does not support the syntax `new BigInt()`
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt#description
     */
    expectAssignable<bigint>(0n as bigint);
    expectError<bigint>(new BigInt(0n as bigint));
  }

  /**
   * It test assignability
   */
  {
    expectAssignable<Basic.Primitive>(0n as bigint);
    expectAssignable<Basic.Primitive>(false as boolean);
    expectAssignable<Basic.Primitive>(null);
    expectAssignable<Basic.Primitive>(0 as number);
    expectAssignable<Basic.Primitive>('' as string);
    expectAssignable<Basic.Primitive>(Symbol('symbol'));
    expectAssignable<Basic.Primitive>(undefined);

    expectNotAssignable<Basic.Primitive>({} as object);
    expectNotAssignable<Basic.Primitive>((() => undefined) as Function);
    expectNotAssignable<Basic.Primitive>([] as Array<any>);

    expectAssignable<Basic.Primitive>(undefined as Basic.Nullish);
    expectAssignable<Basic.Primitive>(false as Basic.Falsy);
    expectNotAssignable<Basic.Primitive>(true as Basic.Truthy);
  }
}

/**
 * JavaScript Types
 */
{
  expectAssignable<Basic.Type>(0n as bigint);
  expectAssignable<Basic.Type>(false as boolean);
  expectAssignable<Basic.Type>(null);
  expectAssignable<Basic.Type>(0 as number);
  expectAssignable<Basic.Type>('' as string);
  expectAssignable<Basic.Type>(Symbol('symbol'));
  expectAssignable<Basic.Type>(undefined);

  expectAssignable<Basic.Type>({} as object);
  expectAssignable<Basic.Type>((() => undefined) as Function);
  expectAssignable<Basic.Type>([] as Array<any>);

  expectAssignable<Basic.Type>(undefined as Basic.Nullish);
  expectAssignable<Basic.Type>(false as Basic.Falsy);
  expectAssignable<Basic.Type>(true as Basic.Truthy);
}

/**
 * Nullish
 */
{
  expectNotAssignable<Basic.Nullish>(0n as bigint);
  expectNotAssignable<Basic.Nullish>(false as boolean);
  expectAssignable<Basic.Nullish>(null);
  expectNotAssignable<Basic.Nullish>(0 as number);
  expectNotAssignable<Basic.Nullish>('' as string);
  expectNotAssignable<Basic.Nullish>(Symbol('symbol'));
  expectAssignable<Basic.Nullish>(undefined);

  expectNotAssignable<Basic.Nullish>({} as object);
  expectNotAssignable<Basic.Nullish>((() => undefined) as Function);
  expectNotAssignable<Basic.Nullish>([] as Array<any>);

  expectNotAssignable<Basic.Nullish>(false as Basic.Falsy);
  expectNotAssignable<Basic.Nullish>(true as Basic.Truthy);
  expectAssignable<Basic.Nullish>(undefined as Basic.Nullish);

  expectNotAssignable<Basic.Nullish>(false);
  expectNotAssignable<Basic.Nullish>(0);
  expectNotAssignable<Basic.Nullish>(-0);
  expectNotAssignable<Basic.Nullish>(0n);
  expectNotAssignable<Basic.Nullish>('');
  expectAssignable<Basic.Nullish>(null);
  expectAssignable<Basic.Nullish>(undefined);
}

/**
 * Falsy
 */
{
  expectNotAssignable<Basic.Falsy>(0n as bigint);
  expectNotAssignable<Basic.Falsy>(false as boolean);
  expectAssignable<Basic.Falsy>(null);
  expectNotAssignable<Basic.Falsy>(0 as number);
  expectNotAssignable<Basic.Falsy>('' as string);
  expectNotAssignable<Basic.Falsy>(Symbol('symbol'));
  expectAssignable<Basic.Falsy>(undefined);

  expectNotAssignable<Basic.Falsy>({} as object);
  expectNotAssignable<Basic.Falsy>((() => undefined) as Function);
  expectNotAssignable<Basic.Falsy>([] as Array<any>);

  expectAssignable<Basic.Falsy>(false as Basic.Falsy);
  expectNotAssignable<Basic.Falsy>(true as Basic.Truthy);
  expectAssignable<Basic.Falsy>(undefined as Basic.Nullish);

  expectAssignable<Basic.Falsy>(false);
  expectAssignable<Basic.Falsy>(0);
  expectAssignable<Basic.Falsy>(-0);
  expectAssignable<Basic.Falsy>(0n);
  expectAssignable<Basic.Falsy>('');
  expectAssignable<Basic.Falsy>(null);
  expectAssignable<Basic.Falsy>(undefined);
}

/**
 * Truthy
 */
{
  expectAssignable<Basic.Truthy>(0n as bigint);
  expectNotAssignable<Basic.Truthy>(false as boolean);
  expectNotAssignable<Basic.Truthy>(null);
  expectAssignable<Basic.Truthy>(0 as number);
  expectAssignable<Basic.Truthy>('' as string);
  expectAssignable<Basic.Truthy>(Symbol('symbol'));
  expectNotAssignable<Basic.Truthy>(undefined);

  expectAssignable<Basic.Truthy>({} as object);
  expectAssignable<Basic.Truthy>((() => undefined) as Function);
  expectAssignable<Basic.Truthy>([] as Array<any>);

  expectNotAssignable<Basic.Truthy>(false as Basic.Falsy);
  expectAssignable<Basic.Truthy>(true as Basic.Truthy);
  expectNotAssignable<Basic.Truthy>(undefined as Basic.Nullish);

  expectNotAssignable<Basic.Truthy>(false);
  expectNotAssignable<Basic.Truthy>(null);
  expectNotAssignable<Basic.Truthy>(undefined);

  /** Limitation: Generic type parameter is required to infer truthiness of literal type of `number` | `string` | `bigint` */
  expectAssignable<Basic.Truthy>(0);
  expectAssignable<Basic.Truthy>(-0);
  expectAssignable<Basic.Truthy>(0n);
  expectAssignable<Basic.Truthy>('');
  expectNotAssignable<Basic.Truthy<0>>(0);
  expectNotAssignable<Basic.Truthy<-0>>(-0);
  expectNotAssignable<Basic.Truthy<0n>>(0n);
  expectNotAssignable<Basic.Truthy<''>>('');
}
