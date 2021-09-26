import {expectType} from 'tsd';

import {keys} from '../src';

import {
  mixedKeyObj,
  numberKeyObj,
  stringKeyObj,
  symbolKeyObj,
} from './keys.test';

/**
 * Keys return
 */
{
  expectType<('name' | 'age' | 'id')[]>(keys(stringKeyObj));
  expectType<(1 | 2 | 3)[]>(keys(numberKeyObj));
  expectType<never[]>(keys(symbolKeyObj));
  expectType<('two' | 1)[]>(keys(mixedKeyObj));
}

/**
 * Access Value with Key
 */
{
  keys(stringKeyObj).map((key) =>
    expectType<string | number>(stringKeyObj[key]),
  );
  keys(numberKeyObj).map((key) => expectType<string>(numberKeyObj[key]));
  keys(symbolKeyObj).map((key) => expectType<string>(symbolKeyObj[key]));
  keys(mixedKeyObj).map((key) => expectType<string>(mixedKeyObj[key]));
}
