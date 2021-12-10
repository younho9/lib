import {expectTypeOf} from 'expect-type';

import {get} from '../src';

test('get()', () => {
  const object_ = {
    a: 1,
    b: 'two',
  };

  expect(get(object_, 'a')).toBe(1);
  expectTypeOf<number>(get(object_, 'a'));

  expect(get(object_, 'b')).toBe('two');
  expectTypeOf<string>(get(object_, 'b'));

  expect(get(object_, 'c')).toBe(undefined);
  expectTypeOf<unknown>(get(object_, 'c'));
});
