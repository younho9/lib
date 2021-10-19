import {expectAssignable, expectError, expectNotAssignable} from 'tsd';
import type {Primitive} from 'type-fest';

import type {Falsy} from '../types/falsy';
import type {Nullish} from '../types/nullish';
import type {Truthy} from '../types/truthy';

/**
 * Primitive
 */
{
  /**
   * It test wrapper objects
   *
   * {@link https://developer.mozilla.org/en-US/docs/Glossary/Primitive#primitive_wrapper_objects_in_javascript}
   */
  {
    expectAssignable<string>('' as string);
    expectAssignable<number>(0 as number);
    expectAssignable<BigInt>(0n as bigint);
    expectAssignable<boolean>(false as boolean);
    expectAssignable<symbol>(Symbol('symbol'));

    expectNotAssignable<string>(new String('' as string));
    expectNotAssignable<number>(new Number(0 as number));
    expectNotAssignable<boolean>(new Boolean(false as boolean));

    /**
     * Symbol does not support the syntax `new Symbol()`
     *
     * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#constructor}
     */
    expectAssignable<symbol>(Symbol('symbol'));
    expectError<symbol>(new Symbol());

    /**
     * BigInt does not support the syntax `new BigInt()`
     *
     * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt#description}
     */
    expectAssignable<bigint>(0n as bigint);
    expectError<bigint>(new BigInt(0n as bigint));
  }

  /**
   * It test assignability
   */
  {
    expectAssignable<Primitive>(0n as bigint);
    expectAssignable<Primitive>(false as boolean);
    expectAssignable<Primitive>(null);
    expectAssignable<Primitive>(0 as number);
    expectAssignable<Primitive>('' as string);
    expectAssignable<Primitive>(Symbol('symbol'));
    expectAssignable<Primitive>(undefined);

    expectNotAssignable<Primitive>({} as object);
    expectNotAssignable<Primitive>((() => undefined) as Function);
    expectNotAssignable<Primitive>([] as Array<any>);

    expectAssignable<Primitive>(undefined as Nullish);
    expectAssignable<Primitive>(false as Falsy);
    expectNotAssignable<Primitive>(true as Truthy);
  }
}
