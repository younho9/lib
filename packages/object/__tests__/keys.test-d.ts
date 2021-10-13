import {invariantOf} from 'invariant-of';
import {expectType} from 'tsd';

import {keys} from '../src';

const stringKeyObj = {name: 'kim', age: 30, id: 1};
const numberKeyObj = {1: 'one', 2: 'two', 3: 'three'};
const symbolKeyObj = {
  [Symbol('one')]: 'one',
  [Symbol('two')]: 'two',
  [Symbol('three')]: 'three',
};
const mixedKeyObj = {
  1: 'one',
  two: 'two',
  [Symbol('three')]: 'three',
};

/**
 * Keys return
 */
{
  expectType<('name' | 'age' | 'id')[]>(keys(invariantOf(stringKeyObj)));
  expectType<(1 | 2 | 3)[]>(keys(invariantOf(numberKeyObj)));
  expectType<never[]>(keys(invariantOf(symbolKeyObj)));
  expectType<('two' | 1)[]>(keys(invariantOf(mixedKeyObj)));
}

/**
 * Access Value with Key
 */
{
  keys(invariantOf(stringKeyObj)).map((key) => expectType<string | number>(stringKeyObj[key])); // prettier-ignore
  keys(invariantOf(numberKeyObj)).map((key) => expectType<string>(numberKeyObj[key])); // prettier-ignore
  keys(invariantOf(symbolKeyObj)).map((key) => expectType<string>(symbolKeyObj[key])); // prettier-ignore
  keys(invariantOf(mixedKeyObj)).map((key) => expectType<string>(mixedKeyObj[key])); // prettier-ignore
}
