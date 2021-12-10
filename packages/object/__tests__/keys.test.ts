import {expectTypeOf} from 'expect-type';

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

describe('return', () => {
  it('keys of Record<K extends string, any> is K[]', () => {
    const keys_ = keys(invariantOf(stringKeyObject));

    expect(keys_).toEqual(['name', 'age', 'id']);
    expectTypeOf<Array<'name' | 'age' | 'id'>>(keys_);
  });

  it('keys of Record<K extends number, any> is K[]', () => {
    const keys_ = keys(invariantOf(numberKeyObject));

    expect(keys_).toEqual(['1', '2', '3']);
    expectTypeOf<Array<1 | 2 | 3>>(keys_);
  });

  it('keys of Record<K extends symbol, any> is []', () => {
    const keys_ = keys(invariantOf(symbolKeyObject));

    expect(keys_).toEqual([]);
    expectTypeOf<symbol[]>(keys_);
  });

  it('keys of Record<K extends PropertyKey, any> is Exclude<keyof T, symbol>[]', () => {
    const keys_ = keys(invariantOf(mixedKeyObject));

    expect(keys_).toEqual(['1', 'two']);
    expectTypeOf<Array<1 | 'two' | symbol>>(keys_);
  });
});

describe('access value with key', () => {
  it('in keys.map of Record<K extends string, any>', () => {
    expect(
      keys(invariantOf(stringKeyObject)).map((key) => {
        expectTypeOf<string | number>(stringKeyObject[key]);
        return stringKeyObject[key];
      }),
    ).toEqual(['kim', 30, 1]);
  });

  it('in keys.map of Record<K extends number, any>', () => {
    expect(
      keys(invariantOf(numberKeyObject)).map((key) => {
        expectTypeOf<string>(numberKeyObject[key]);
        return numberKeyObject[key];
      }),
    ).toEqual(['one', 'two', 'three']);
  });

  it('in keys.map of Record<K extends symbol, any>', () => {
    expect(
      keys(invariantOf(symbolKeyObject)).map((key) => {
        expectTypeOf<string>(symbolKeyObject[key]);
        return symbolKeyObject[key];
      }),
    ).toEqual([]);
  });

  it('in keys.map of Record<K extends PropertyKey, any>', () => {
    expect(
      keys(invariantOf(mixedKeyObject)).map((key) => {
        expectTypeOf<string>(mixedKeyObject[key]);
        return mixedKeyObject[key];
      }),
    ).toEqual(['one', 'two']);
  });
});
