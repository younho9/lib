import {expectType} from 'tsd';

import {keys} from '../src';
import {invariantOf} from '../src/invariant-of';

const stringKeyObject = {name: 'kim', age: 30, id: 1};
const numberKeyObject = {1: 'one', 2: 'two', 3: 'three'};
const symbolKeyObject = {
  [Symbol('one')]: 'one',
  [Symbol('two')]: 'two',
  [Symbol('three')]: 'three',
};
const mixedKeyObject = {
  1: 'one',
  two: 'two',
  [Symbol('three')]: 'three',
};

/**
 * Keys return
 */
expectType<Array<'name' | 'age' | 'id'>>(keys(invariantOf(stringKeyObject)));
expectType<Array<1 | 2 | 3>>(keys(invariantOf(numberKeyObject)));
expectType<symbol[]>(keys(invariantOf(symbolKeyObject)));
expectType<Array<1 | 'two' | symbol>>(keys(invariantOf(mixedKeyObject)));

/**
 * Access Value with Key
 */
keys(invariantOf(stringKeyObject)).map((key) => expectType<string | number>(stringKeyObject[key])); // prettier-ignore
keys(invariantOf(numberKeyObject)).map((key) => expectType<string>(numberKeyObject[key])); // prettier-ignore
keys(invariantOf(symbolKeyObject)).map((key) => expectType<string>(symbolKeyObject[key])); // prettier-ignore
keys(invariantOf(mixedKeyObject)).map((key) => expectType<string>(mixedKeyObject[key])); // prettier-ignore
