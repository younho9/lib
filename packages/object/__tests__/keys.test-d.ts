import {expectType} from 'tsd';

import {keys} from '../src';

/**
 * Keys return
 */
{
  expectType<('name' | 'age' | 'id')[]>(keys({name: 'kim', age: 30, id: 1}));
  expectType<(1 | 2 | 3)[]>(keys({1: 1, 2: 2, 3: 3}));
  /** limitation: When symbols is included, keys inferred more widely. */
  expectType<(string | number)[]>(
    keys({
      [Symbol('one')]: 'one',
      [Symbol('two')]: 'two',
      [Symbol('three')]: 'three',
    }),
  );
  /** limitation: When symbols is included, keys inferred more widely. */
  expectType<(string | number)[]>(
    keys({
      1: 'one',
      two: 'two',
      [Symbol('three')]: 'three',
    }),
  );
  expectType<string[]>(keys(['a', 'b', 'c']));
  expectType<string[]>(keys('abc'));
  expectType<[]>(keys(100));
  expectType<[]>(keys(100n));
  expectType<never>(keys(undefined));
}
