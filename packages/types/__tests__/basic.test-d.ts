/* eslint-disable @typescript-eslint/ban-types */
import {expectAssignable, expectError, expectNotAssignable} from 'tsd';

import type * as Basic from '../src/basic';

import {falsy, nullish, objects, primitive, truthy} from './constants';

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
    expectAssignable<String>(primitive.string);
    expectAssignable<Number>(primitive.number);
    expectAssignable<BigInt>(primitive.bigint);
    expectAssignable<Boolean>(primitive.boolean);
    expectAssignable<Symbol>(primitive.symbol);

    expectNotAssignable<string>(new String(primitive.string));
    expectNotAssignable<number>(new Number(primitive.number));
    expectNotAssignable<boolean>(new Boolean(primitive.boolean));

    /**
     * Symbol does not support the syntax `new Symbol()`
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#constructor
     */
    expectAssignable<symbol>(primitive.symbol);
    expectError<symbol>(new Symbol());

    /**
     * BigInt does not support the syntax `new BigInt()`
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt#description
     */
    expectAssignable<bigint>(primitive.bigint);
    expectError<bigint>(new BigInt(primitive.bigint));
  }

  /**
   * It test assignability
   */
  {
    expectAssignable<Basic.Primitive>(primitive.bigint);
    expectAssignable<Basic.Primitive>(primitive.boolean);
    expectAssignable<Basic.Primitive>(primitive.null);
    expectAssignable<Basic.Primitive>(primitive.number);
    expectAssignable<Basic.Primitive>(primitive.string);
    expectAssignable<Basic.Primitive>(primitive.symbol);
    expectAssignable<Basic.Primitive>(primitive.undefined);

    expectNotAssignable<Basic.Primitive>(objects.object);
    expectNotAssignable<Basic.Primitive>(objects.function);
    expectNotAssignable<Basic.Primitive>(objects.array);

    expectAssignable<Basic.Primitive>(nullish);
    expectAssignable<Basic.Primitive>(falsy);
    expectNotAssignable<Basic.Primitive>(truthy);
  }
}

/**
 * JavaScript Types
 */
{
  expectAssignable<Basic.Type>(primitive.bigint);
  expectAssignable<Basic.Type>(primitive.boolean);
  expectAssignable<Basic.Type>(primitive.null);
  expectAssignable<Basic.Type>(primitive.number);
  expectAssignable<Basic.Type>(primitive.string);
  expectAssignable<Basic.Type>(primitive.symbol);
  expectAssignable<Basic.Type>(primitive.undefined);

  expectAssignable<Basic.Type>(objects.object);
  expectAssignable<Basic.Type>(objects.function);
  expectAssignable<Basic.Type>(objects.array);

  expectAssignable<Basic.Type>(nullish);
  expectAssignable<Basic.Type>(falsy);
  expectAssignable<Basic.Type>(truthy);
}

/**
 * Nullish
 */
{
  expectNotAssignable<Basic.Nullish>(primitive.bigint);
  expectNotAssignable<Basic.Nullish>(primitive.boolean);
  expectAssignable<Basic.Nullish>(primitive.null);
  expectNotAssignable<Basic.Nullish>(primitive.number);
  expectNotAssignable<Basic.Nullish>(primitive.string);
  expectNotAssignable<Basic.Nullish>(primitive.symbol);
  expectAssignable<Basic.Nullish>(primitive.undefined);

  expectNotAssignable<Basic.Nullish>(objects.object);
  expectNotAssignable<Basic.Nullish>(objects.function);
  expectNotAssignable<Basic.Nullish>(objects.array);

  expectNotAssignable<Basic.Nullish>(falsy);
  expectNotAssignable<Basic.Nullish>(truthy);
  expectAssignable<Basic.Nullish>(nullish);

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
  expectNotAssignable<Basic.Falsy>(primitive.bigint);
  expectNotAssignable<Basic.Falsy>(primitive.boolean);
  expectAssignable<Basic.Falsy>(primitive.null);
  expectNotAssignable<Basic.Falsy>(primitive.number);
  expectNotAssignable<Basic.Falsy>(primitive.string);
  expectNotAssignable<Basic.Falsy>(primitive.symbol);
  expectAssignable<Basic.Falsy>(primitive.undefined);

  expectNotAssignable<Basic.Falsy>(objects.object);
  expectNotAssignable<Basic.Falsy>(objects.function);
  expectNotAssignable<Basic.Falsy>(objects.array);

  expectAssignable<Basic.Falsy>(falsy);
  expectNotAssignable<Basic.Falsy>(truthy);
  expectAssignable<Basic.Falsy>(nullish);

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
  expectAssignable<Basic.Truthy>(primitive.bigint);
  expectNotAssignable<Basic.Truthy>(primitive.boolean);
  expectNotAssignable<Basic.Truthy>(primitive.null);
  expectAssignable<Basic.Truthy>(primitive.number);
  expectAssignable<Basic.Truthy>(primitive.string);
  expectAssignable<Basic.Truthy>(primitive.symbol);
  expectNotAssignable<Basic.Truthy>(primitive.undefined);

  expectAssignable<Basic.Truthy>(objects.object);
  expectAssignable<Basic.Truthy>(objects.function);
  expectAssignable<Basic.Truthy>(objects.array);

  expectNotAssignable<Basic.Truthy>(falsy);
  expectAssignable<Basic.Truthy>(truthy);
  expectNotAssignable<Basic.Truthy>(nullish);

  expectNotAssignable<Basic.Truthy>(false);
  expectNotAssignable<Basic.Truthy<0>>(0); // limitation
  expectNotAssignable<Basic.Truthy<-0>>(-0); // limitation
  expectNotAssignable<Basic.Truthy<0n>>(0n); // limitation
  expectNotAssignable<Basic.Truthy<''>>(''); // limitation
  expectNotAssignable<Basic.Truthy>(null);
  expectNotAssignable<Basic.Truthy>(undefined);
}
