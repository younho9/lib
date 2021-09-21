import {keys} from '../src';

describe('keys', () => {
  it('keys of Record<string, any> is Array<string>', () => {
    expect(keys({name: 'kim', age: 30, id: 1})).toEqual(['name', 'age', 'id']);
  });

  it('keys of Record<number, any> is Array<number>', () => {
    expect(keys({1: 1, 2: 2, 3: 3})).toEqual(['1', '2', '3']);
  });

  it('keys of Record<symbol, any> is empty array', () => {
    expect(
      keys({
        [Symbol('one')]: 'one',
        [Symbol('two')]: 'two',
        [Symbol('three')]: 'three',
      }),
    ).toEqual([]);
  });

  it('keys of Record<number | string | symbol, any> is Array<number | string>', () => {
    expect(
      keys({
        1: 'one',
        two: 'two',
        [Symbol('three')]: 'three',
      }),
    ).toEqual(['1', 'two']);
  });

  it('keys of Array<any> is Array<number>', () => {
    expect(keys(['a', 'b', 'c'])).toEqual(['0', '1', '2']);
  });

  it('keys of string is Array<number>', () => {
    expect(keys('abc')).toEqual(['0', '1', '2']);
  });

  it('keys of number is empty array', () => {
    expect(keys(100)).toEqual([]);
  });

  it('keys of bigint is empty array', () => {
    expect(keys(100n)).toEqual([]);
  });

  it('keys of undefined throw TypeError', () => {
    expect(() => {
      keys(undefined);
    }).toThrowError(
      new TypeError('Cannot convert undefined or null to object'),
    );
  });

  it('keys of null throw TypeError', () => {
    expect(() => {
      keys(null);
    }).toThrowError(
      new TypeError('Cannot convert undefined or null to object'),
    );
  });
});

describe('keys.map', () => {
  it('access values in keys.map of Record<symbol, any>', () => {
    const symbolObj = {
      [Symbol('one')]: 'one',
      [Symbol('two')]: 'two',
      [Symbol('three')]: 'three',
    };
    expect(keys(symbolObj).map((key) => symbolObj[key])).toEqual([]);
  });

  it('access values in keys.map of Record<number | string | symbol, any>', () => {
    const includeSymbolObj = {
      1: 'one',
      two: 'two',
      [Symbol('three')]: 'three',
    };

    expect(keys(includeSymbolObj).map((key) => includeSymbolObj[key])).toEqual([
      'one',
      'two',
    ]);
  });
});
