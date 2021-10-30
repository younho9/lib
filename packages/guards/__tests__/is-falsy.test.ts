/**
 * @jest-environment jsdom
 */
import {isFalsy} from '../src';

describe('isFalsy', () => {
  it('condition is Falsy', () => {
    expect(isFalsy(false)).toBeTruthy();
    expect(isFalsy(0)).toBeTruthy();
    expect(isFalsy(-0)).toBeTruthy();
    expect(isFalsy(0n)).toBeTruthy();
    expect(isFalsy('')).toBeTruthy();
    expect(isFalsy(``)).toBeTruthy();
    expect(isFalsy(null)).toBeTruthy();
    expect(isFalsy(undefined)).toBeTruthy();
    expect(isFalsy(Number.NaN)).toBeTruthy();
    expect(isFalsy(document.all)).toBeTruthy();
  });

  it('condition is Truthy', () => {
    expect(isFalsy(true)).toBeFalsy();
    expect(isFalsy({})).toBeFalsy();
    expect(isFalsy([])).toBeFalsy();
    expect(isFalsy(42)).toBeFalsy();
    expect(isFalsy('0')).toBeFalsy();
    expect(isFalsy('false')).toBeFalsy();
    expect(isFalsy(new Date())).toBeFalsy();
    expect(isFalsy(-42)).toBeFalsy();
    expect(isFalsy(12n)).toBeFalsy();
    expect(isFalsy(3.14)).toBeFalsy();
    expect(isFalsy(-3.14)).toBeFalsy();
    expect(isFalsy(Number.POSITIVE_INFINITY)).toBeFalsy();
    expect(isFalsy(Number.NEGATIVE_INFINITY)).toBeFalsy();
  });
});
