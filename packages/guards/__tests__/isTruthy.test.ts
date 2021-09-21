/**
 * @jest-environment jsdom
 */
import {isTruthy} from '../src';

describe('isTruthy', () => {
  it('condition is Falsy', () => {
    expect(isTruthy(false)).toBeFalsy();
    expect(isTruthy(0)).toBeFalsy();
    expect(isTruthy(-0)).toBeFalsy();
    expect(isTruthy(0n)).toBeFalsy();
    expect(isTruthy('')).toBeFalsy();
    expect(isTruthy(``)).toBeFalsy();
    expect(isTruthy(null)).toBeFalsy();
    expect(isTruthy(undefined)).toBeFalsy();
    expect(isTruthy(NaN)).toBeFalsy();
    expect(isTruthy(document.all)).toBeFalsy();
  });

  it('condition is Truthy', () => {
    expect(isTruthy(true)).toBeTruthy();
    expect(isTruthy({})).toBeTruthy();
    expect(isTruthy([])).toBeTruthy();
    expect(isTruthy(42)).toBeTruthy();
    expect(isTruthy('0')).toBeTruthy();
    expect(isTruthy('false')).toBeTruthy();
    expect(isTruthy(new Date())).toBeTruthy();
    expect(isTruthy(-42)).toBeTruthy();
    expect(isTruthy(12n)).toBeTruthy();
    expect(isTruthy(3.14)).toBeTruthy();
    expect(isTruthy(-3.14)).toBeTruthy();
    expect(isTruthy(Infinity)).toBeTruthy();
    expect(isTruthy(-Infinity)).toBeTruthy();
  });
});
