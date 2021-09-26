import {keys} from '../src';

export const stringKeyObj = {name: 'kim', age: 30, id: 1};
export const numberKeyObj = {1: 'one', 2: 'two', 3: 'three'};
export const symbolKeyObj = {
  [Symbol('one')]: 'one',
  [Symbol('two')]: 'two',
  [Symbol('three')]: 'three',
};
export const mixedKeyObj = {
  1: 'one',
  two: 'two',
  [Symbol('three')]: 'three',
};
export const array = ['a', 'b', 'c'];

describe('return', () => {
  it('keys of Record<K extends string, any> is K[]', () => {
    expect(keys(stringKeyObj)).toEqual(['name', 'age', 'id']);
  });

  it('keys of Record<K extends number, any> is K[]', () => {
    expect(keys(numberKeyObj)).toEqual(['1', '2', '3']);
  });

  it('keys of Record<K extends symbol, any> is []', () => {
    expect(keys(symbolKeyObj)).toEqual([]);
  });

  it('keys of Record<K extends PropertyKey, any> is Exclude<keyof T, symbol>[]', () => {
    expect(keys(mixedKeyObj)).toEqual(['1', 'two']);
  });
});

describe('access value with key', () => {
  it('in keys.map of Record<K extends string, any>', () => {
    expect(keys(stringKeyObj).map((key) => stringKeyObj[key])).toEqual([
      'kim',
      30,
      1,
    ]);
  });

  it('in keys.map of Record<K extends number, any>', () => {
    expect(keys(numberKeyObj).map((key) => numberKeyObj[key])).toEqual([
      'one',
      'two',
      'three',
    ]);
  });

  it('in keys.map of Record<K extends symbol, any>', () => {
    expect(keys(symbolKeyObj).map((key) => symbolKeyObj[key])).toEqual([]);
  });

  it('in keys.map of Record<K extends PropertyKey, any>', () => {
    expect(keys(mixedKeyObj).map((key) => mixedKeyObj[key])).toEqual([
      'one',
      'two',
    ]);
  });

  it('in keys.map of Record<K extends PropertyKey, any>', () => {
    expect(keys(mixedKeyObj).map((key) => mixedKeyObj[key])).toEqual([
      'one',
      'two',
    ]);
  });
});
