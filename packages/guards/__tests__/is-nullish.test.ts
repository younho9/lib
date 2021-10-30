import {isNullish} from '../src';

describe('isNullish', () => {
  it('value is Nullish', () => {
    expect(isNullish(undefined)).toBeTruthy();
    expect(isNullish(null)).toBeTruthy();
  });

  it('value is not Nullish', () => {
    expect(isNullish(true)).toBeFalsy();
    expect(isNullish({})).toBeFalsy();
    expect(isNullish([])).toBeFalsy();
    expect(isNullish(42)).toBeFalsy();
    expect(isNullish('0')).toBeFalsy();
    expect(isNullish('false')).toBeFalsy();
    expect(isNullish(new Date())).toBeFalsy();
    expect(isNullish(-42)).toBeFalsy();
    expect(isNullish(12n)).toBeFalsy();
    expect(isNullish(3.14)).toBeFalsy();
    expect(isNullish(-3.14)).toBeFalsy();
    expect(isNullish(Number.POSITIVE_INFINITY)).toBeFalsy();
    expect(isNullish(Number.NEGATIVE_INFINITY)).toBeFalsy();
  });
});
