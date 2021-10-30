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
    expect(keys(invariantOf(stringKeyObject))).toEqual(['name', 'age', 'id']);
  });

  it('keys of Record<K extends number, any> is K[]', () => {
    expect(keys(invariantOf(numberKeyObject))).toEqual(['1', '2', '3']);
  });

  it('keys of Record<K extends symbol, any> is []', () => {
    expect(keys(invariantOf(symbolKeyObject))).toEqual([]);
  });

  it('keys of Record<K extends PropertyKey, any> is Exclude<keyof T, symbol>[]', () => {
    expect(keys(invariantOf(mixedKeyObject))).toEqual(['1', 'two']);
  });
});

describe('access value with key', () => {
  it('in keys.map of Record<K extends string, any>', () => {
    expect(
      keys(invariantOf(stringKeyObject)).map((key) => stringKeyObject[key]),
    ).toEqual(['kim', 30, 1]);
  });

  it('in keys.map of Record<K extends number, any>', () => {
    expect(
      keys(invariantOf(numberKeyObject)).map((key) => numberKeyObject[key]),
    ).toEqual(['one', 'two', 'three']);
  });

  it('in keys.map of Record<K extends symbol, any>', () => {
    expect(
      keys(invariantOf(symbolKeyObject)).map((key) => symbolKeyObject[key]),
    ).toEqual([]);
  });

  it('in keys.map of Record<K extends PropertyKey, any>', () => {
    expect(
      keys(invariantOf(mixedKeyObject)).map((key) => mixedKeyObject[key]),
    ).toEqual(['one', 'two']);
  });
});
