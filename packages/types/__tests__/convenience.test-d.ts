/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/ban-types */
import {expectAssignable, expectNotAssignable} from 'tsd';

import {alt, def, dicts} from './constants';

import type * as Alt from '@/alternative';
import type * as Convenience from '@/convenience';

/**
 * Assignability
 */
{
  expectNotAssignable<Convenience.Dict>(def.object);
  expectNotAssignable<Convenience.Dict>(def.function);
  expectAssignable<Convenience.Dict>(alt.object);
  expectNotAssignable<Convenience.Dict>(alt.function);

  expectAssignable<object>(dicts.string);
  expectAssignable<object>(dicts.number);
  expectAssignable<object>(dicts.bigint);
  expectAssignable<object>(dicts.boolean);
  expectAssignable<object>(dicts.symbol);
  expectAssignable<object>(dicts.undefined);
  expectAssignable<object>(dicts.null);
  expectAssignable<object>(dicts.object);
  expectAssignable<object>(dicts.function);
  expectAssignable<object>(dicts.array);

  expectAssignable<Alt.Object>(dicts.string);
  expectAssignable<Alt.Object>(dicts.number);
  expectAssignable<Alt.Object>(dicts.bigint);
  expectAssignable<Alt.Object>(dicts.boolean);
  expectAssignable<Alt.Object>(dicts.symbol);
  expectAssignable<Alt.Object>(dicts.undefined);
  expectAssignable<Alt.Object>(dicts.null);
  expectAssignable<Alt.Object>(dicts.object);
  expectAssignable<Alt.Object>(dicts.function);
  expectAssignable<Alt.Object>(dicts.array);
}
