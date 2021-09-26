import {seal} from '../src';

type FooBar = {
  foo: number;
  bar?: string;
};

let fooBar: FooBar = {foo: 123, bar: 'string'};
let sealedFooBar = seal<FooBar>({foo: 123, bar: 'string'});

describe('default object', () => {
  beforeEach(() => {
    fooBar = {foo: 123, bar: 'string'};
  });

  it('can add new property', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    fooBar.baz = 123;
    expect(fooBar).toHaveProperty('baz');
  });

  it('can delete property', () => {
    delete fooBar.bar;
    expect(fooBar).not.toHaveProperty('bar');
  });

  it('can change property', () => {
    fooBar.bar = 'changed';
    expect(fooBar.bar).toMatch('changed');
  });
});

describe('sealed object', () => {
  beforeEach(() => {
    sealedFooBar = seal<FooBar>({foo: 123, bar: 'string'});
  });

  it('prevent add new property', () => {
    expect(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      sealedFooBar.baz = 123;
    }).toThrowError(
      TypeError('Cannot add property baz, object is not extensible'),
    );
  });

  it('prevent delete property', () => {
    expect(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      delete sealedFooBar.bar;
    }).toThrowError(TypeError("Cannot delete property 'bar' of #<Object>"));
  });

  it('can change property', () => {
    sealedFooBar.bar = 'changed';
    expect(sealedFooBar.bar).toMatch('changed');
  });
});
