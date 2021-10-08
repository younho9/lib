import {IndexSignature, Invariant} from '../src';

describe('Invariant', () => {
  it('does not affect runtime.', () => {
    class SomeClass {
      a: number;
      b: string;

      constructor(a: number, b: string) {
        this.a = a;
        this.b = b;
      }
    }

    const someClass: IndexSignature<SomeClass> = new SomeClass(123, '123');

    expect(Invariant({a: 123, b: '123'})).toEqual({a: 123, b: '123'});
    expect(Invariant(someClass)).toEqual(new SomeClass(123, '123'));
  });
});
